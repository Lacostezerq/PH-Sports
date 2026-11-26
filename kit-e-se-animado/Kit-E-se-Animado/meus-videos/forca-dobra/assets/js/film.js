var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var vh="170";var Dp=0,wu=1,Up=2;var Ld=1,Eh=2,Ji=3,Ss=0,yn=1,an=2,Bi=0,xs=1,Oi=2,Cu=3,Pu=4,Bp=5,Ks=100,Np=101,Op=102,Hp=103,zp=104,kp=200,Gp=201,Vp=202,Wp=203,Zc=204,$c=205,Xp=206,qp=207,Yp=208,Zp=209,$p=210,Jp=211,Qp=212,Kp=213,jp=214,Jc=0,Qc=1,Kc=2,Jr=3,jc=4,t0=5,e0=6,n0=7,Dd=0,t1=1,e1=2,Ni=0,n1=1,i1=2,s1=3,r1=4,o1=5,a1=6,l1=7;var Ud=300,Qr=301,Kr=302,i0=303,s0=304,Rl=306,Ai=1e3,tr=1001,r0=1002,zn=1003,c1=1004;var Sa=1005;var Ui=1006,dc=1007;var er=1008;var es=1009,Bd=1010,Nd=1011,Jo=1012,yh=1013,ns=1014,Ki=1015,Jn=1016,_h=1017,Mh=1018,jr=1020,Od=35902,Hd=1021,zd=1022,ii=1023,kd=1024,Gd=1025,Yr=1026,to=1027,Vd=1028,bh=1029,Wd=1030,xh=1031;var Ah=1033,Qa=33776,Ka=33777,ja=33778,tl=33779,o0=35840,a0=35841,l0=35842,c0=35843,h0=36196,u0=37492,d0=37496,f0=37808,p0=37809,m0=37810,g0=37811,v0=37812,E0=37813,y0=37814,_0=37815,M0=37816,b0=37817,x0=37818,A0=37819,S0=37820,T0=37821,el=36492,R0=36494,w0=36495,Xd=36283,C0=36284,P0=36285,F0=36286;var nl=2300,I0=2301,fc=2302,Fu=2400,Iu=2401,Lu=2402;var h1=3200,u1=3201;var qd=0,d1=1,Ms="",un="srgb",Cs="srgb-linear",wl="linear",ke="srgb";var wr=7680;var Du=519,f1=512,p1=513,m1=514,Yd=515,g1=516,v1=517,E1=518,y1=519,L0=35044;var Uu="300 es",ji=2e3,il=2001,Ts=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pc=Math.PI/180,sl=180/Math.PI;function As(){let n=__sr()*4294967295|0,t=__sr()*4294967295|0,e=__sr()*4294967295|0,i=__sr()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[e&63|128]+Pn[e>>8&255]+"-"+Pn[e>>16&255]+Pn[e>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function Sn(n,t,e){return Math.max(t,Math.min(e,n))}function _1(n,t){return(n%t+t)%t}function mc(n,t,e){return(1-e)*n+e*t}function Di(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var mt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Sn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fe=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],v=s[0],g=s[3],m=s[6],S=s[1],b=s[4],E=s[7],R=s[2],T=s[5],A=s[8];return r[0]=o*v+a*S+l*R,r[3]=o*g+a*b+l*T,r[6]=o*m+a*E+l*A,r[1]=c*v+h*S+u*R,r[4]=c*g+h*b+u*T,r[7]=c*m+h*E+u*A,r[2]=f*v+d*S+p*R,r[5]=f*g+d*b+p*T,r[8]=f*m+d*E+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=u*v,t[1]=(s*c-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gc.makeScale(t,e)),this}rotate(t){return this.premultiply(gc.makeRotation(-t)),this}translate(t,e){return this.premultiply(gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},gc=new fe;function Zd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function rl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function M1(){let n=rl("canvas");return n.style.display="block",n}var Bu={};function Xo(n){n in Bu||(Bu[n]=!0,console.warn(n))}function b1(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function x1(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function A1(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Re={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ke&&(n.r=ts(n.r),n.g=ts(n.g),n.b=ts(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ke&&(n.r=Zr(n.r),n.g=Zr(n.g),n.b=Zr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ms?wl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Nu=[.64,.33,.3,.6,.15,.06],Ou=[.2126,.7152,.0722],Hu=[.3127,.329],zu=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Re.define({[Cs]:{primaries:Nu,whitePoint:Hu,transfer:wl,toXYZ:zu,fromXYZ:ku,luminanceCoefficients:Ou,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:Nu,whitePoint:Hu,transfer:ke,toXYZ:zu,fromXYZ:ku,luminanceCoefficients:Ou,outputColorSpaceConfig:{drawingBufferColorSpace:un}}});var Cr,D0=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cr===void 0&&(Cr=rl("canvas")),Cr.width=t.width,Cr.height=t.height;let i=Cr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Cr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=rl("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ts(e[i]/255)*255):e[i]=ts(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},S1=0,ol=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=As(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vc(s[o].image)):r.push(vc(s[o]))}else r=vc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function vc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?D0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var T1=0,Yn=class n extends Ts{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=tr,s=tr,r=Ui,o=er,a=ii,l=es,c=n.DEFAULT_ANISOTROPY,h=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=As(),this.name="",this.source=new ol(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ud)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ai:t.x=t.x-Math.floor(t.x);break;case tr:t.x=t.x<0?0:1;break;case r0:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ai:t.y=t.y-Math.floor(t.y);break;case tr:t.y=t.y<0?0:1;break;case r0:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Ud;Yn.DEFAULT_ANISOTROPY=1;var Ve=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,E=(d+1)/2,R=(m+1)/2,T=(h+f)/4,A=(u+v)/4,w=(p+g)/4;return b>E&&b>R?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=A/i):E>R?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=T/s,r=w/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=w/r),this.set(i,s,r,e),this}let S=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-v)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},U0=class extends Ts{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Yn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ol(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends U0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},al=class extends Yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var B0=class extends Yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==p){let g=1-a,m=l*f+c*d+h*p+u*v,S=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let R=Math.sqrt(b),T=Math.atan2(R,m*S);g=Math.sin(g*T)/R,a=Math.sin(a*T)/R}let E=a*S;if(l=l*g+f*E,c=c*g+d*E,h=h*g+p*E,u=u*g+v*E,g===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Sn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*__sr(),e=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ec.copy(this).projectOnVector(t),this.sub(Ec)}reflect(t){return this.sub(Ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Sn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let t=__sr()*Math.PI*2,e=__sr()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ec=new P,Gu=new Rn,nr=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mi):Mi.fromBufferAttribute(r,o),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ta.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(t.matrixWorld),this.union(Ta)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),Ra.subVectors(this.max,No),Pr.subVectors(t.a,No),Fr.subVectors(t.b,No),Ir.subVectors(t.c,No),ms.subVectors(Fr,Pr),gs.subVectors(Ir,Fr),Xs.subVectors(Pr,Ir);let e=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Xs.z,Xs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Xs.z,0,-Xs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Xs.y,Xs.x,0];return!yc(e,Pr,Fr,Ir,Ra)||(e=[1,0,0,0,1,0,0,0,1],!yc(e,Pr,Fr,Ir,Ra))?!1:(wa.crossVectors(ms,gs),e=[wa.x,wa.y,wa.z],yc(e,Pr,Fr,Ir,Ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Xi=[new P,new P,new P,new P,new P,new P,new P,new P],Mi=new P,Ta=new nr,Pr=new P,Fr=new P,Ir=new P,ms=new P,gs=new P,Xs=new P,No=new P,Ra=new P,wa=new P,qs=new P;function yc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){qs.fromArray(n,r);let a=s.x*Math.abs(qs.x)+s.y*Math.abs(qs.y)+s.z*Math.abs(qs.z),l=t.dot(qs),c=e.dot(qs),h=i.dot(qs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var R1=new nr,Oo=new P,_c=new P,Qo=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):R1.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);let e=Oo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Oo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(_c)),this.expandByPoint(Oo.copy(t.center).sub(_c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},qi=new P,Mc=new P,Ca=new P,vs=new P,bc=new P,Pa=new P,xc=new P,N0=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qi.copy(this.origin).addScaledVector(this.direction,e),qi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Mc.copy(t).add(e).multiplyScalar(.5),Ca.copy(e).sub(t).normalize(),vs.copy(this.origin).sub(Mc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ca),a=vs.dot(this.direction),l=-vs.dot(Ca),c=vs.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mc).addScaledVector(Ca,f),d}intersectSphere(t,e){qi.subVectors(t.center,this.origin);let i=qi.dot(this.direction),s=qi.dot(qi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,qi)!==null}intersectTriangle(t,e,i,s,r){bc.subVectors(e,t),Pa.subVectors(i,t),xc.crossVectors(bc,Pa);let o=this.direction.dot(xc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vs.subVectors(this.origin,t);let l=a*this.direction.dot(Pa.crossVectors(vs,Pa));if(l<0)return null;let c=a*this.direction.dot(bc.cross(vs));if(c<0||l+c>o)return null;let h=-a*vs.dot(xc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,p,v,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,p,v,g)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Lr.setFromMatrixColumn(t,0).length(),r=1/Lr.setFromMatrixColumn(t,1).length(),o=1/Lr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,v=c*u;e[0]=f+v*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,v=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-v*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(w1,t,C1)}lookAt(t,e,i){let s=this.elements;return ei.subVectors(t,e),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Es.crossVectors(i,ei),Es.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Es.crossVectors(i,ei)),Es.normalize(),Fa.crossVectors(ei,Es),s[0]=Es.x,s[4]=Fa.x,s[8]=ei.x,s[1]=Es.y,s[5]=Fa.y,s[9]=ei.y,s[2]=Es.z,s[6]=Fa.z,s[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],v=i[6],g=i[10],m=i[14],S=i[3],b=i[7],E=i[11],R=i[15],T=s[0],A=s[4],w=s[8],M=s[12],_=s[1],I=s[5],$=s[9],G=s[13],U=s[2],z=s[6],D=s[10],q=s[14],k=s[3],ot=s[7],pt=s[11],Rt=s[15];return r[0]=o*T+a*_+l*U+c*k,r[4]=o*A+a*I+l*z+c*ot,r[8]=o*w+a*$+l*D+c*pt,r[12]=o*M+a*G+l*q+c*Rt,r[1]=h*T+u*_+f*U+d*k,r[5]=h*A+u*I+f*z+d*ot,r[9]=h*w+u*$+f*D+d*pt,r[13]=h*M+u*G+f*q+d*Rt,r[2]=p*T+v*_+g*U+m*k,r[6]=p*A+v*I+g*z+m*ot,r[10]=p*w+v*$+g*D+m*pt,r[14]=p*M+v*G+g*q+m*Rt,r[3]=S*T+b*_+E*U+R*k,r[7]=S*A+b*I+E*z+R*ot,r[11]=S*w+b*$+E*D+R*pt,r[15]=S*M+b*G+E*q+R*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+v*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],v=t[13],g=t[14],m=t[15],S=u*g*c-v*f*c+v*l*d-a*g*d-u*l*m+a*f*m,b=p*f*c-h*g*c-p*l*d+o*g*d+h*l*m-o*f*m,E=h*v*c-p*u*c+p*a*d-o*v*d-h*a*m+o*u*m,R=p*u*l-h*v*l-p*a*f+o*v*f+h*a*g-o*u*g,T=e*S+i*b+s*E+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=S*A,t[1]=(v*f*r-u*g*r-v*s*d+i*g*d+u*s*m-i*f*m)*A,t[2]=(a*g*r-v*l*r+v*s*c-i*g*c-a*s*m+i*l*m)*A,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*A,t[4]=b*A,t[5]=(h*g*r-p*f*r+p*s*d-e*g*d-h*s*m+e*f*m)*A,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*m-e*l*m)*A,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*A,t[8]=E*A,t[9]=(p*u*r-h*v*r-p*i*d+e*v*d+h*i*m-e*u*m)*A,t[10]=(o*v*r-p*a*r+p*i*c-e*v*c-o*i*m+e*a*m)*A,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*A,t[12]=R*A,t[13]=(h*v*s-p*u*s+p*i*f-e*v*f-h*i*g+e*u*g)*A,t[14]=(p*a*s-o*v*s-p*i*l+e*v*l+o*i*g-e*a*g)*A,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,v=o*h,g=o*u,m=a*u,S=l*c,b=l*h,E=l*u,R=i.x,T=i.y,A=i.z;return s[0]=(1-(v+m))*R,s[1]=(d+E)*R,s[2]=(p-b)*R,s[3]=0,s[4]=(d-E)*T,s[5]=(1-(f+m))*T,s[6]=(g+S)*T,s[7]=0,s[8]=(p+b)*A,s[9]=(g-S)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Lr.set(s[0],s[1],s[2]).length(),o=Lr.set(s[4],s[5],s[6]).length(),a=Lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bi.copy(this);let c=1/r,h=1/o,u=1/a;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,e.setFromRotationMatrix(bi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ji){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),d,p;if(a===ji)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===il)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ji){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*c,d=(i+s)*h,p,v;if(a===ji)p=(o+r)*u,v=-2*u;else if(a===il)p=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Lr=new P,bi=new Ce,w1=new P(0,0,0),C1=new P(1,1,1),Es=new P,Fa=new P,ei=new P,Vu=new Ce,Wu=new Rn,pi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Vu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pi.DEFAULT_ORDER="XYZ";var ll=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},P1=0,Xu=new P,Dr=new Rn,Yi=new Ce,Ia=new P,Ho=new P,F1=new P,I1=new Rn,qu=new P(1,0,0),Yu=new P(0,1,0),Zu=new P(0,0,1),$u={type:"added"},L1={type:"removed"},Ur={type:"childadded",child:null},Ac={type:"childremoved",child:null},Mn=class n extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new pi,i=new Rn,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new fe}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(qu,t)}rotateY(t){return this.rotateOnAxis(Yu,t)}rotateZ(t){return this.rotateOnAxis(Zu,t)}translateOnAxis(t,e){return Xu.copy(t).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qu,t)}translateY(t){return this.translateOnAxis(Yu,t)}translateZ(t){return this.translateOnAxis(Zu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ia.copy(t):Ia.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Ho,Ia,this.up):Yi.lookAt(Ia,Ho,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),Dr.setFromRotationMatrix(Yi),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($u),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(L1),Ac.child=t,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($u),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,F1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,I1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Mn.DEFAULT_UP=new P(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new P,Zi=new P,Sc=new P,$i=new P,Br=new P,Nr=new P,Ju=new P,Tc=new P,Rc=new P,wc=new P,Cc=new Ve,Pc=new Ve,Fc=new Ve,bs=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),xi.subVectors(t,e),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){xi.subVectors(s,e),Zi.subVectors(i,e),Sc.subVectors(t,e);let o=xi.dot(xi),a=xi.dot(Zi),l=xi.dot(Sc),c=Zi.dot(Zi),h=Zi.dot(Sc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$i.x),l.addScaledVector(o,$i.y),l.addScaledVector(a,$i.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Cc.setScalar(0),Pc.setScalar(0),Fc.setScalar(0),Cc.fromBufferAttribute(t,e),Pc.fromBufferAttribute(t,i),Fc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Cc,r.x),o.addScaledVector(Pc,r.y),o.addScaledVector(Fc,r.z),o}static isFrontFacing(t,e,i,s){return xi.subVectors(i,e),Zi.subVectors(t,e),xi.cross(Zi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),xi.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Br.subVectors(s,i),Nr.subVectors(r,i),Tc.subVectors(t,i);let l=Br.dot(Tc),c=Nr.dot(Tc);if(l<=0&&c<=0)return e.copy(i);Rc.subVectors(t,s);let h=Br.dot(Rc),u=Nr.dot(Rc);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Br,o);wc.subVectors(t,r);let d=Br.dot(wc),p=Nr.dot(wc);if(p>=0&&d<=p)return e.copy(r);let v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Nr,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Ju.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(Ju,a);let m=1/(g+v+f);return o=v*m,a=f*m,e.copy(i).addScaledVector(Br,o).addScaledVector(Nr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},La={h:0,s:0,l:0};function Ic(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Yt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Re.workingColorSpace){return this.r=t,this.g=e,this.b=i,Re.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Re.workingColorSpace){if(t=_1(t,1),e=Sn(e,0,1),i=Sn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ic(o,r,t+1/3),this.g=Ic(o,r,t),this.b=Ic(o,r,t-1/3)}return Re.toWorkingColorSpace(this,s),this}setStyle(t,e=un){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){let i=$d[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return Re.fromWorkingColorSpace(Fn.copy(this),t),Math.round(Sn(Fn.r*255,0,255))*65536+Math.round(Sn(Fn.g*255,0,255))*256+Math.round(Sn(Fn.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.fromWorkingColorSpace(Fn.copy(this),e);let i=Fn.r,s=Fn.g,r=Fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Re.workingColorSpace){return Re.fromWorkingColorSpace(Fn.copy(this),e),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=un){Re.fromWorkingColorSpace(Fn.copy(this),t);let e=Fn.r,i=Fn.g,s=Fn.b;return t!==un?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ys),this.setHSL(ys.h+t,ys.s+e,ys.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ys),t.getHSL(La);let i=mc(ys.h,La.h,e),s=mc(ys.s,La.s,e),r=mc(ys.l,La.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new Yt;Yt.NAMES=$d;var D1=0,Rs=class extends Ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=As(),this.name="",this.blending=xs,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=$c,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Ss&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zc&&(i.blendSrc=this.blendSrc),this.blendDst!==$c&&(i.blendDst=this.blendDst),this.blendEquation!==Ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Me=class extends Rs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ln=new P,Da=new mt,qn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=L0,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Da.fromBufferAttribute(this,e),Da.applyMatrix3(t),this.setXY(e,Da.x,Da.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Di(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Di(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Di(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Di(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==L0&&(t.usage=this.usage),t}};var cl=class extends qn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var hl=class extends qn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Fe=class extends qn{constructor(t,e,i){super(new Float32Array(t),e,i)}},U1=0,fi=new Ce,Lc=new Mn,Or=new P,ni=new nr,zo=new nr,En=new P,wn=class n extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zd(t)?hl:cl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new fe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,i){return fi.makeTranslation(t,e,i),this.applyMatrix4(fi),this}scale(t,e,i){return fi.makeScale(t,e,i),this.applyMatrix4(fi),this}lookAt(t){return Lc.lookAt(t),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(ni.min,zo.min),ni.expandByPoint(En),En.addVectors(ni.max,zo.max),ni.expandByPoint(En)):(ni.expandByPoint(zo.min),ni.expandByPoint(zo.max))}ni.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)En.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(En));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)En.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(t,c),En.add(Or)),s=Math.max(s,i.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<i.count;w++)a[w]=new P,l[w]=new P;let c=new P,h=new P,u=new P,f=new mt,d=new mt,p=new mt,v=new P,g=new P;function m(w,M,_){c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,_),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(I),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(I),a[w].add(v),a[M].add(v),a[_].add(v),l[w].add(g),l[M].add(g),l[_].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let w=0,M=S.length;w<M;++w){let _=S[w],I=_.start,$=_.count;for(let G=I,U=I+$;G<U;G+=3)m(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let b=new P,E=new P,R=new P,T=new P;function A(w){R.fromBufferAttribute(s,w),T.copy(R);let M=a[w];b.copy(M),b.sub(R.multiplyScalar(R.dot(M))).normalize(),E.crossVectors(T,M);let I=E.dot(l[w])<0?-1:1;o.setXYZW(w,b.x,b.y,b.z,I)}for(let w=0,M=S.length;w<M;++w){let _=S[w],I=_.start,$=_.count;for(let G=I,U=I+$;G<U;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)En.fromBufferAttribute(t,e),En.normalize(),t.setXYZ(e,En.x,En.y,En.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new qn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qu=new Ce,Ys=new N0,Ua=new Qo,Ku=new P,Ba=new P,Na=new P,Oa=new P,Dc=new P,Ha=new P,ju=new P,za=new P,at=class extends Mn{constructor(t=new wn,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Dc.fromBufferAttribute(u,t),o?Ha.addScaledVector(Dc,h):Ha.addScaledVector(Dc.sub(e),h))}e.add(Ha)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(r),Ys.copy(t.ray).recast(t.near),!(Ua.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Ua,Ku)===null||Ys.origin.distanceToSquared(Ku)>(t.far-t.near)**2))&&(Qu.copy(r).invert(),Ys.copy(t.ray).applyMatrix4(Qu),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ys)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),b=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let E=S,R=b;E<R;E+=3){let T=a.getX(E),A=a.getX(E+1),w=a.getX(E+2);s=ka(this,m,t,i,c,h,u,T,A,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let S=a.getX(g),b=a.getX(g+1),E=a.getX(g+2);s=ka(this,o,t,i,c,h,u,S,b,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){let g=f[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let E=S,R=b;E<R;E+=3){let T=E,A=E+1,w=E+2;s=ka(this,m,t,i,c,h,u,T,A,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){let S=g,b=g+1,E=g+2;s=ka(this,o,t,i,c,h,u,S,b,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function B1(n,t,e,i,s,r,o,a){let l;if(t.side===yn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ss,a),l===null)return null;za.copy(a),za.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(za);return c<e.near||c>e.far?null:{distance:c,point:za.clone(),object:n}}function ka(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Ba),n.getVertexPosition(l,Na),n.getVertexPosition(c,Oa);let h=B1(n,t,e,i,Ba,Na,Oa,ju);if(h){let u=new P;bs.getBarycoord(ju,Ba,Na,Oa,u),s&&(h.uv=bs.getInterpolatedAttribute(s,a,l,c,u,new mt)),r&&(h.uv1=bs.getInterpolatedAttribute(r,a,l,c,u,new mt)),o&&(h.normal=bs.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};bs.getNormal(Ba,Na,Oa,f.normal),h.face=f,h.barycoord=u}return h}var be=class n extends wn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(u,2));function p(v,g,m,S,b,E,R,T,A,w,M){let _=E/A,I=R/w,$=E/2,G=R/2,U=T/2,z=A+1,D=w+1,q=0,k=0,ot=new P;for(let pt=0;pt<D;pt++){let Rt=pt*I-G;for(let Nt=0;Nt<z;Nt++){let _e=Nt*_-$;ot[v]=_e*S,ot[g]=Rt*b,ot[m]=U,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[g]=0,ot[m]=T>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Nt/A),u.push(1-pt/w),q+=1}}for(let pt=0;pt<w;pt++)for(let Rt=0;Rt<A;Rt++){let Nt=f+Rt+z*pt,_e=f+Rt+z*(pt+1),st=f+(Rt+1)+z*(pt+1),vt=f+(Rt+1)+z*pt;l.push(Nt,_e,vt),l.push(_e,st,vt),k+=6}a.addGroup(d,k,M),d+=k,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function eo(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Hn(n){let t={};for(let e=0;e<n.length;e++){let i=eo(n[e]);for(let s in i)t[s]=i[s]}return t}function N1(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Jd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}var lo={clone:eo,merge:Hn},O1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Rs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O1,this.fragmentShader=H1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=eo(t.uniforms),this.uniformsGroups=N1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ul=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=ji}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_s=new P,td=new mt,ed=new mt,Tn=class extends ul{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,e){return this.getViewBounds(t,td,ed),e.subVectors(ed,td)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Hr=-90,zr=1,O0=class extends Mn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tn(Hr,zr,t,e);s.layers=this.layers,this.add(s);let r=new Tn(Hr,zr,t,e);r.layers=this.layers,this.add(r);let o=new Tn(Hr,zr,t,e);o.layers=this.layers,this.add(o);let a=new Tn(Hr,zr,t,e);a.layers=this.layers,this.add(a);let l=new Tn(Hr,zr,t,e);l.layers=this.layers,this.add(l);let c=new Tn(Hr,zr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===il)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},dl=class extends Yn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qr,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},H0=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new dl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new be(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Bi});r.uniforms.tEquirect.value=e;let o=new at(s,r),a=e.minFilter;return e.minFilter===er&&(e.minFilter=Ui),new O0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Uc=new P,z1=new P,k1=new fe,Qi=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Uc.subVectors(i,e).cross(z1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Uc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||k1.getNormalMatrix(t),s=this.coplanarPoint(Uc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zs=new Qo,Ga=new P,Ko=class{constructor(t=new Qi,e=new Qi,i=new Qi,s=new Qi,r=new Qi,o=new Qi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ji){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],p=s[9],v=s[10],g=s[11],m=s[12],S=s[13],b=s[14],E=s[15];if(i[0].setComponents(l-r,f-c,g-d,E-m).normalize(),i[1].setComponents(l+r,f+c,g+d,E+m).normalize(),i[2].setComponents(l+o,f+h,g+p,E+S).normalize(),i[3].setComponents(l-o,f-h,g-p,E-S).normalize(),i[4].setComponents(l-a,f-u,g-v,E-b).normalize(),e===ji)i[5].setComponents(l+a,f+u,g+v,E+b).normalize();else if(e===il)i[5].setComponents(a,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(t){return Zs.center.set(0,0,0),Zs.radius=.7071067811865476,Zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ga.x=s.normal.x>0?t.max.x:t.min.x,Ga.y=s.normal.y>0?t.max.y:t.min.y,Ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Qd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.__noRaf(s)}return{start:function(){t!==!0&&e!==null&&(i=n.__noRaf(s),t=!0)},stop:function(){n.__noCaf(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function G1(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],v=u[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let v=u[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var $t=class n extends wn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let S=m*f-o;for(let b=0;b<c;b++){let E=b*u-r;p.push(E,-S,0),v.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let b=S+c*m,E=S+c*(m+1),R=S+1+c*(m+1),T=S+1+c*m;d.push(b,E,T),d.push(E,R,T)}this.setIndex(d),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(v,3)),this.setAttribute("uv",new Fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},V1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W1=`#ifdef USE_ALPHAHASH
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
#endif`,X1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$1=`#ifdef USE_AOMAP
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
#endif`,J1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q1=`#ifdef USE_BATCHING
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
#endif`,K1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nm=`#ifdef USE_IRIDESCENCE
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
#endif`,im=`#ifdef USE_BUMPMAP
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dm=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
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
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
#endif`,km=`struct PhysicalMaterial {
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
}`,Gm=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Km=`#if defined( USE_POINTS_UV )
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
#endif`,jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s2=`#ifdef USE_MORPHTARGETS
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
#endif`,r2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,a2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u2=`#ifdef USE_NORMALMAP
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
#endif`,d2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R2=`float getShadowMask() {
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
}`,w2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C2=`#ifdef USE_SKINNING
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
#endif`,P2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F2=`#ifdef USE_SKINNING
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
#endif`,I2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B2=`#ifdef USE_TRANSMISSION
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
#endif`,N2=`#ifdef USE_TRANSMISSION
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
#endif`,O2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V2=`uniform sampler2D t2D;
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
}`,W2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z2=`#include <common>
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
}`,$2=`#if DEPTH_PACKING == 3200
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
}`,J2=`#define DISTANCE
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
}`,Q2=`#define DISTANCE
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
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define LAMBERT
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
}`,og=`#define MATCAP
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
}`,ag=`#define MATCAP
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
}`,lg=`#define NORMAL
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
}`,cg=`#define NORMAL
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
}`,hg=`#define PHONG
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
}`,ug=`#define PHONG
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
}`,dg=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,pg=`#define TOON
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
}`,mg=`#define TOON
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
}`,gg=`uniform float size;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,yg=`uniform vec3 color;
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
}`,_g=`uniform float rotation;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:V1,alphahash_pars_fragment:W1,alphamap_fragment:X1,alphamap_pars_fragment:q1,alphatest_fragment:Y1,alphatest_pars_fragment:Z1,aomap_fragment:$1,aomap_pars_fragment:J1,batching_pars_vertex:Q1,batching_vertex:K1,begin_vertex:j1,beginnormal_vertex:tm,bsdfs:em,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:om,clipping_planes_vertex:am,color_fragment:lm,color_pars_fragment:cm,color_pars_vertex:hm,color_vertex:um,common:dm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:vm,emissivemap_pars_fragment:Em,colorspace_fragment:ym,colorspace_pars_fragment:_m,envmap_fragment:Mm,envmap_common_pars_fragment:bm,envmap_pars_fragment:xm,envmap_pars_vertex:Am,envmap_physical_pars_fragment:Um,envmap_vertex:Sm,fog_vertex:Tm,fog_pars_vertex:Rm,fog_fragment:wm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Fm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Lm,lights_pars_begin:Dm,lights_toon_fragment:Bm,lights_toon_pars_fragment:Nm,lights_phong_fragment:Om,lights_phong_pars_fragment:Hm,lights_physical_fragment:zm,lights_physical_pars_fragment:km,lights_fragment_begin:Gm,lights_fragment_maps:Vm,lights_fragment_end:Wm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:Ym,logdepthbuf_vertex:Zm,map_fragment:$m,map_pars_fragment:Jm,map_particle_fragment:Qm,map_particle_pars_fragment:Km,metalnessmap_fragment:jm,metalnessmap_pars_fragment:t2,morphinstance_vertex:e2,morphcolor_vertex:n2,morphnormal_vertex:i2,morphtarget_pars_vertex:s2,morphtarget_vertex:r2,normal_fragment_begin:o2,normal_fragment_maps:a2,normal_pars_fragment:l2,normal_pars_vertex:c2,normal_vertex:h2,normalmap_pars_fragment:u2,clearcoat_normal_fragment_begin:d2,clearcoat_normal_fragment_maps:f2,clearcoat_pars_fragment:p2,iridescence_pars_fragment:m2,opaque_fragment:g2,packing:v2,premultiplied_alpha_fragment:E2,project_vertex:y2,dithering_fragment:_2,dithering_pars_fragment:M2,roughnessmap_fragment:b2,roughnessmap_pars_fragment:x2,shadowmap_pars_fragment:A2,shadowmap_pars_vertex:S2,shadowmap_vertex:T2,shadowmask_pars_fragment:R2,skinbase_vertex:w2,skinning_pars_vertex:C2,skinning_vertex:P2,skinnormal_vertex:F2,specularmap_fragment:I2,specularmap_pars_fragment:L2,tonemapping_fragment:D2,tonemapping_pars_fragment:U2,transmission_fragment:B2,transmission_pars_fragment:N2,uv_pars_fragment:O2,uv_pars_vertex:H2,uv_vertex:z2,worldpos_vertex:k2,background_vert:G2,background_frag:V2,backgroundCube_vert:W2,backgroundCube_frag:X2,cube_vert:q2,cube_frag:Y2,depth_vert:Z2,depth_frag:$2,distanceRGBA_vert:J2,distanceRGBA_frag:Q2,equirect_vert:K2,equirect_frag:j2,linedashed_vert:tg,linedashed_frag:eg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:og,meshmatcap_frag:ag,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:dg,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:vg,shadow_vert:Eg,shadow_frag:yg,sprite_vert:_g,sprite_frag:Mg},St={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Li={basic:{uniforms:Hn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Hn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Hn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Hn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Hn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Hn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Hn([St.points,St.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Hn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Hn([St.common,St.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Hn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Hn([St.sprite,St.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Hn([St.common,St.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Hn([St.lights,St.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Li.physical={uniforms:Hn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var Va={r:0,b:0,g:0},$s=new pi,bg=new Ce;function xg(n,t,e,i,s,r,o){let a=new Yt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?e:t).get(b)),b}function v(S){let b=!1,E=p(S);E===null?m(a,l):E&&E.isColor&&(m(E,1),b=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(S,b){let E=p(b);E&&(E.isCubeTexture||E.mapping===Rl)?(h===void 0&&(h=new at(new be(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:eo(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$s.copy(b.backgroundRotation),$s.x*=-1,$s.y*=-1,$s.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler($s)),h.material.toneMapped=Re.getTransfer(E.colorSpace)!==ke,(u!==E||f!==E.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new at(new $t(2,2),new cn({name:"BackgroundMaterial",uniforms:eo(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Re.getTransfer(E.colorSpace)!==ke,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,b){S.getRGB(Va,Jd(n)),i.buffers.color.setClear(Va.r,Va.g,Va.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:v,addToRenderList:g}}function Ag(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(_,I,$,G,U){let z=!1,D=u(G,$,I);r!==D&&(r=D,c(r.object)),z=d(_,G,$,U),z&&p(_,G,$,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,E(_,I,$,G),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function u(_,I,$){let G=$.wireframe===!0,U=i[_.id];U===void 0&&(U={},i[_.id]=U);let z=U[I.id];z===void 0&&(z={},U[I.id]=z);let D=z[G];return D===void 0&&(D=f(l()),z[G]=D),D}function f(_){let I=[],$=[],G=[];for(let U=0;U<e;U++)I[U]=0,$[U]=0,G[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:$,attributeDivisors:G,object:_,attributes:{},index:null}}function d(_,I,$,G){let U=r.attributes,z=I.attributes,D=0,q=$.getAttributes();for(let k in q)if(q[k].location>=0){let pt=U[k],Rt=z[k];if(Rt===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(Rt=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(Rt=_.instanceColor)),pt===void 0||pt.attribute!==Rt||Rt&&pt.data!==Rt.data)return!0;D++}return r.attributesNum!==D||r.index!==G}function p(_,I,$,G){let U={},z=I.attributes,D=0,q=$.getAttributes();for(let k in q)if(q[k].location>=0){let pt=z[k];pt===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(pt=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(pt=_.instanceColor));let Rt={};Rt.attribute=pt,pt&&pt.data&&(Rt.data=pt.data),U[k]=Rt,D++}r.attributes=U,r.attributesNum=D,r.index=G}function v(){let _=r.newAttributes;for(let I=0,$=_.length;I<$;I++)_[I]=0}function g(_){m(_,0)}function m(_,I){let $=r.newAttributes,G=r.enabledAttributes,U=r.attributeDivisors;$[_]=1,G[_]===0&&(n.enableVertexAttribArray(_),G[_]=1),U[_]!==I&&(n.vertexAttribDivisor(_,I),U[_]=I)}function S(){let _=r.newAttributes,I=r.enabledAttributes;for(let $=0,G=I.length;$<G;$++)I[$]!==_[$]&&(n.disableVertexAttribArray($),I[$]=0)}function b(_,I,$,G,U,z,D){D===!0?n.vertexAttribIPointer(_,I,$,U,z):n.vertexAttribPointer(_,I,$,G,U,z)}function E(_,I,$,G){v();let U=G.attributes,z=$.getAttributes(),D=I.defaultAttributeValues;for(let q in z){let k=z[q];if(k.location>=0){let ot=U[q];if(ot===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor)),ot!==void 0){let pt=ot.normalized,Rt=ot.itemSize,Nt=t.get(ot);if(Nt===void 0)continue;let _e=Nt.buffer,st=Nt.type,vt=Nt.bytesPerElement,Bt=st===n.INT||st===n.UNSIGNED_INT||ot.gpuType===yh;if(ot.isInterleavedBufferAttribute){let xt=ot.data,Zt=xt.stride,te=ot.offset;if(xt.isInstancedInterleavedBuffer){for(let he=0;he<k.locationSize;he++)m(k.location+he,xt.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let he=0;he<k.locationSize;he++)g(k.location+he);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let he=0;he<k.locationSize;he++)b(k.location+he,Rt/k.locationSize,st,pt,Zt*vt,(te+Rt/k.locationSize*he)*vt,Bt)}else{if(ot.isInstancedBufferAttribute){for(let xt=0;xt<k.locationSize;xt++)m(k.location+xt,ot.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let xt=0;xt<k.locationSize;xt++)g(k.location+xt);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let xt=0;xt<k.locationSize;xt++)b(k.location+xt,Rt/k.locationSize,st,pt,Rt*vt,Rt/k.locationSize*xt*vt,Bt)}}else if(D!==void 0){let pt=D[q];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(k.location,pt);break;case 3:n.vertexAttrib3fv(k.location,pt);break;case 4:n.vertexAttrib4fv(k.location,pt);break;default:n.vertexAttrib1fv(k.location,pt)}}}}S()}function R(){w();for(let _ in i){let I=i[_];for(let $ in I){let G=I[$];for(let U in G)h(G[U].object),delete G[U];delete I[$]}delete i[_]}}function T(_){if(i[_.id]===void 0)return;let I=i[_.id];for(let $ in I){let G=I[$];for(let U in G)h(G[U].object),delete G[U];delete I[$]}delete i[_.id]}function A(_){for(let I in i){let $=i[I];if($[_.id]===void 0)continue;let G=$[_.id];for(let U in G)h(G[U].object),delete G[U];delete $[_.id]}}function w(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function Sg(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v]*f[v];e.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==ii&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let w=A===Jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==es&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ki&&!w)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:R,maxSamples:T}}function Rg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Qi,a=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let S=r?0:i,b=S*4,E=m.clippingState||null;l.value=E,E=h(p,f,b,d);for(let R=0;R!==b;++R)E[R]=e[R];m.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=d+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,E=d;b!==v;++b,E+=4)o.copy(u[b]).applyMatrix4(S,a),o.normal.toArray(g,E),g[E+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function wg(n){let t=new WeakMap;function e(o,a){return a===i0?o.mapping=Qr:a===s0&&(o.mapping=Kr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===i0||a===s0)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new H0(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var no=class extends ul{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qr=4,nd=[.125,.215,.35,.446,.526,.582],js=20,Bc=new no,id=new Yt,Nc=null,Oc=0,Hc=0,zc=!1,Qs=(1+Math.sqrt(5))/2,kr=1/Qs,sd=[new P(-Qs,kr,0),new P(Qs,kr,0),new P(-kr,0,Qs),new P(kr,0,Qs),new P(0,Qs,-kr),new P(0,Qs,kr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],fl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nc,Oc,Hc),this._renderer.xr.enabled=zc,t.scissorTest=!1,Wa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qr||t.mapping===Kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Jn,format:ii,colorSpace:Cs,depthBuffer:!1},s=rd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Pg(r,t,e)}return s}_compileMaterial(t){let e=new at(this._lodPlanes[0],t);this._renderer.compile(e,Bc)}_sceneToCubeUV(t,e,i,s){let a=new Tn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(id),h.toneMapping=Ni,h.autoClear=!1;let d=new Me({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),p=new at(new be,d),v=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,v=!0):(d.color.copy(id),v=!0);for(let m=0;m<6;m++){let S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let b=this._cubeSize;Wa(s,S*b,m>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Qr||t.mapping===Kr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Wa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Bc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sd[(s-r-1)%sd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new at(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*js-1),v=r/p,g=isFinite(r)?1+Math.floor(h*v):js;g>js&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${js}`);let m=[],S=0;for(let A=0;A<js;++A){let w=A/v,M=Math.exp(-w*w/2);m.push(M),A===0?S+=M:A<g&&(S+=2*M)}for(let A=0;A<m.length;A++)m[A]=m[A]/S;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=p,f.mipInt.value=b-i;let E=this._sizeLods[s],R=3*E*(s>b-qr?s-b+qr:0),T=4*(this._cubeSize-E);Wa(e,R,T,3*E,2*E),l.setRenderTarget(e),l.render(u,Bc)}};function Cg(n){let t=[],e=[],i=[],s=n,r=n-qr+1+nd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-qr?l=nd[o-n+qr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,v=3,g=2,m=1,S=new Float32Array(v*p*d),b=new Float32Array(g*p*d),E=new Float32Array(m*p*d);for(let T=0;T<d;T++){let A=T%3*2/3-1,w=T>2?0:-1,M=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];S.set(M,v*p*T),b.set(f,g*p*T);let _=[T,T,T,T,T,T];E.set(_,m*p*T)}let R=new wn;R.setAttribute("position",new qn(S,v)),R.setAttribute("uv",new qn(b,g)),R.setAttribute("faceIndex",new qn(E,m)),t.push(R),s>qr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function rd(n,t,e){let i=new _n(n,t,e);return i.texture.mapping=Rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Pg(n,t,e){let i=new Float32Array(js),s=new P(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function od(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function ad(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Sh(){return`

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
	`}function Fg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===i0||l===s0,h=l===Qr||l===Kr;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new fl(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new fl(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Ig(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Xo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Lg(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);for(let p in f.morphAttributes){let v=f.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)t.update(f[p],n.ARRAY_BUFFER);let d=u.morphAttributes;for(let p in d){let v=d[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],n.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,p=u.attributes.position,v=0;if(d!==null){let S=d.array;v=d.version;for(let b=0,E=S.length;b<E;b+=3){let R=S[b+0],T=S[b+1],A=S[b+2];f.push(R,T,T,A,A,R)}}else if(p!==void 0){let S=p.array;v=p.version;for(let b=0,E=S.length/3-1;b<E;b+=3){let R=b+0,T=b+1,A=b+2;f.push(R,T,T,A,A,R)}}else return;let g=new(Zd(f)?hl:cl)(f,1);g.version=v;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Dg(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,f*o,p),e.update(d,i,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,i,1)}function u(f,d,p,v){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,p);let m=0;for(let S=0;S<p;S++)m+=d[S]*v[S];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ug(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Bg(n,t,e){let i=new WeakMap,s=new Ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let M=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),v===!0&&(b=3);let E=a.attributes.position.count*b,R=1;E>t.maxTextureSize&&(R=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let T=new Float32Array(E*R*4*u),A=new al(T,E,R,u);A.type=Ki,A.needsUpdate=!0;let w=b*4;for(let _=0;_<u;_++){let I=g[_],$=m[_],G=S[_],U=E*R*4*_;for(let z=0;z<I.count;z++){let D=z*w;d===!0&&(s.fromBufferAttribute(I,z),T[U+D+0]=s.x,T[U+D+1]=s.y,T[U+D+2]=s.z,T[U+D+3]=0),p===!0&&(s.fromBufferAttribute($,z),T[U+D+4]=s.x,T[U+D+5]=s.y,T[U+D+6]=s.z,T[U+D+7]=0),v===!0&&(s.fromBufferAttribute(G,z),T[U+D+8]=s.x,T[U+D+9]=s.y,T[U+D+10]=s.z,T[U+D+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new mt(E,R)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Ng(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var io=class extends Yn{constructor(t,e,i,s,r,o,a,l,c,h=Yr){if(h!==Yr&&h!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Yr&&(i=ns),i===void 0&&h===to&&(i=jr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Kd=new Yn,ld=new io(1,1),jd=new al,tf=new B0,ef=new dl,cd=[],hd=[],ud=new Float32Array(16),dd=new Float32Array(9),fd=new Float32Array(4);function co(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=cd[s];if(r===void 0&&(r=new Float32Array(s),cd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function dn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function fn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Cl(n,t){let e=hd[t];e===void 0&&(e=new Int32Array(t),hd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Og(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2fv(this.addr,t),fn(e,t)}}function zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;n.uniform3fv(this.addr,t),fn(e,t)}}function kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4fv(this.addr,t),fn(e,t)}}function Gg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,i))return;fd.set(i),n.uniformMatrix2fv(this.addr,!1,fd),fn(e,i)}}function Vg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,i))return;dd.set(i),n.uniformMatrix3fv(this.addr,!1,dd),fn(e,i)}}function Wg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(dn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),fn(e,i)}}function Xg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2iv(this.addr,t),fn(e,t)}}function Yg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;n.uniform3iv(this.addr,t),fn(e,t)}}function Zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4iv(this.addr,t),fn(e,t)}}function $g(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;n.uniform2uiv(this.addr,t),fn(e,t)}}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;n.uniform3uiv(this.addr,t),fn(e,t)}}function Kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;n.uniform4uiv(this.addr,t),fn(e,t)}}function jg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ld.compareFunction=Yd,r=ld):r=Kd,e.setTexture2D(t||r,s)}function tv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||tf,s)}function ev(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ef,s)}function nv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||jd,s)}function iv(n){switch(n){case 5126:return Og;case 35664:return Hg;case 35665:return zg;case 35666:return kg;case 35674:return Gg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return $g;case 36294:return Jg;case 36295:return Qg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return nv}}function sv(n,t){n.uniform1fv(this.addr,t)}function rv(n,t){let e=co(t,this.size,2);n.uniform2fv(this.addr,e)}function ov(n,t){let e=co(t,this.size,3);n.uniform3fv(this.addr,e)}function av(n,t){let e=co(t,this.size,4);n.uniform4fv(this.addr,e)}function lv(n,t){let e=co(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function cv(n,t){let e=co(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function hv(n,t){let e=co(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function uv(n,t){n.uniform1iv(this.addr,t)}function dv(n,t){n.uniform2iv(this.addr,t)}function fv(n,t){n.uniform3iv(this.addr,t)}function pv(n,t){n.uniform4iv(this.addr,t)}function mv(n,t){n.uniform1uiv(this.addr,t)}function gv(n,t){n.uniform2uiv(this.addr,t)}function vv(n,t){n.uniform3uiv(this.addr,t)}function Ev(n,t){n.uniform4uiv(this.addr,t)}function yv(n,t,e){let i=this.cache,s=t.length,r=Cl(e,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Kd,r[o])}function _v(n,t,e){let i=this.cache,s=t.length,r=Cl(e,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||tf,r[o])}function Mv(n,t,e){let i=this.cache,s=t.length,r=Cl(e,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ef,r[o])}function bv(n,t,e){let i=this.cache,s=t.length,r=Cl(e,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jd,r[o])}function xv(n){switch(n){case 5126:return sv;case 35664:return rv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return hv;case 5124:case 35670:return uv;case 35667:case 35671:return dv;case 35668:case 35672:return fv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return vv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return bv}}var z0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=iv(e.type)}},k0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xv(e.type)}},G0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},kc=/(\w+)(\])?(\[|\.)?/g;function pd(n,t){n.seq.push(t),n.map[t.id]=t}function Av(n,t,e){let i=n.name,s=i.length;for(kc.lastIndex=0;;){let r=kc.exec(i),o=kc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pd(e,c===void 0?new z0(a,n,t):new k0(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new G0(a),pd(e,u)),e=u}}}var $r=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Av(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function md(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Sv=37297,Tv=0;function Rv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var gd=new fe;function wv(n){Re._getMatrix(gd,Re.workingColorSpace,n);let t=`mat3( ${gd.elements.map(e=>e.toFixed(4))} )`;switch(Re.getTransfer(n)){case wl:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function vd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Rv(n.getShaderSource(t),o)}else return s}function Cv(n,t){let e=wv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pv(n,t){let e;switch(t){case n1:e="Linear";break;case i1:e="Reinhard";break;case s1:e="Cineon";break;case r1:e="ACESFilmic";break;case a1:e="AgX";break;case l1:e="Neutral";break;case o1:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xa=new P;function Fv(){Re.getLuminanceCoefficients(Xa);let n=Xa.x.toFixed(4),t=Xa.y.toFixed(4),e=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function Lv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Dv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function qo(n){return n!==""}function Ed(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function V0(n){return n.replace(Uv,Nv)}var Bv=new Map;function Nv(n,t){let e=ge[t];if(e===void 0){let i=Bv.get(t);if(i!==void 0)e=ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return V0(e)}var Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(n){return n.replace(Ov,Hv)}function Hv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Md(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function zv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function kv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qr:case Kr:t="ENVMAP_TYPE_CUBE";break;case Rl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Kr:t="ENVMAP_MODE_REFRACTION";break}return t}function Vv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Dd:t="ENVMAP_BLENDING_MULTIPLY";break;case t1:t="ENVMAP_BLENDING_MIX";break;case e1:t="ENVMAP_BLENDING_ADD";break}return t}function Wv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Xv(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=zv(e),c=kv(e),h=Gv(e),u=Vv(e),f=Wv(e),d=Iv(e),p=Lv(r),v=s.createProgram(),g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(qo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(qo).join(`
`),m.length>0&&(m+=`
`)):(g=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),m=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?ge.tonemapping_pars_fragment:"",e.toneMapping!==Ni?Pv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,Cv("linearToOutputTexel",e.outputColorSpace),Fv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qo).join(`
`)),o=V0(o),o=Ed(o,e),o=yd(o,e),a=V0(a),a=Ed(a,e),a=yd(a,e),o=_d(o),a=_d(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=S+g+o,E=S+m+a,R=md(s,s.VERTEX_SHADER,b),T=md(s,s.FRAGMENT_SHADER,E);s.attachShader(v,R),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(I){if(n.debug.checkShaderErrors){let $=s.getProgramInfoLog(v).trim(),G=s.getShaderInfoLog(R).trim(),U=s.getShaderInfoLog(T).trim(),z=!0,D=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,R,T);else{let q=vd(s,R,"vertex"),k=vd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+q+`
`+k)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(G===""||U==="")&&(D=!1);D&&(I.diagnostics={runnable:z,programLog:$,vertexShader:{log:G,prefix:g},fragmentShader:{log:U,prefix:m}})}s.deleteShader(R),s.deleteShader(T),w=new $r(s,v),M=Dv(s,v)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Sv)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}var qv=0,W0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new X0(t),e.set(t,i)),i}},X0=class{constructor(t){this.id=qv++,this.code=t,this.usedTimes=0}};function Yv(n,t,e,i,s,r,o){let a=new ll,l=new W0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,_,I,$,G){let U=$.fog,z=G.geometry,D=M.isMeshStandardMaterial?$.environment:null,q=(M.isMeshStandardMaterial?e:t).get(M.envMap||D),k=q&&q.mapping===Rl?q.image.height:null,ot=p[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let pt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Rt=pt!==void 0?pt.length:0,Nt=0;z.morphAttributes.position!==void 0&&(Nt=1),z.morphAttributes.normal!==void 0&&(Nt=2),z.morphAttributes.color!==void 0&&(Nt=3);let _e,st,vt,Bt;if(ot){let Oe=Li[ot];_e=Oe.vertexShader,st=Oe.fragmentShader}else _e=M.vertexShader,st=M.fragmentShader,l.update(M),vt=l.getVertexShaderID(M),Bt=l.getFragmentShaderID(M);let xt=n.getRenderTarget(),Zt=n.state.buffers.depth.getReversed(),te=G.isInstancedMesh===!0,he=G.isBatchedMesh===!0,Ne=!!M.map,ve=!!M.matcap,ze=!!q,N=!!M.aoMap,Nn=!!M.lightMap,_t=!!M.bumpMap,qt=!!M.normalMap,At=!!M.displacementMap,Se=!!M.emissiveMap,Vt=!!M.metalnessMap,C=!!M.roughnessMap,y=M.anisotropy>0,Y=M.clearcoat>0,lt=M.dispersion>0,dt=M.iridescence>0,rt=M.sheen>0,Wt=M.transmission>0,wt=y&&!!M.anisotropyMap,Lt=Y&&!!M.clearcoatMap,Te=Y&&!!M.clearcoatNormalMap,gt=Y&&!!M.clearcoatRoughnessMap,Dt=dt&&!!M.iridescenceMap,Qt=dt&&!!M.iridescenceThicknessMap,ee=rt&&!!M.sheenColorMap,Ut=rt&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,me=!!M.specularColorMap,Xe=!!M.specularIntensityMap,B=Wt&&!!M.transmissionMap,Tt=Wt&&!!M.thicknessMap,et=!!M.gradientMap,ct=!!M.alphaMap,Ft=M.alphaTest>0,Ct=!!M.alphaHash,ue=!!M.extensions,on=Ni;M.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(on=n.toneMapping);let Cn={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:st,defines:M.defines,customVertexShaderID:vt,customFragmentShaderID:Bt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:he,batchingColor:he&&G._colorsTexture!==null,instancing:te,instancingColor:te&&G.instanceColor!==null,instancingMorph:te&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:xt===null?n.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Cs,alphaToCoverage:!!M.alphaToCoverage,map:Ne,matcap:ve,envMap:ze,envMapMode:ze&&q.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:Nn,bumpMap:_t,normalMap:qt,displacementMap:f&&At,emissiveMap:Se,normalMapObjectSpace:qt&&M.normalMapType===d1,normalMapTangentSpace:qt&&M.normalMapType===qd,metalnessMap:Vt,roughnessMap:C,anisotropy:y,anisotropyMap:wt,clearcoat:Y,clearcoatMap:Lt,clearcoatNormalMap:Te,clearcoatRoughnessMap:gt,dispersion:lt,iridescence:dt,iridescenceMap:Dt,iridescenceThicknessMap:Qt,sheen:rt,sheenColorMap:ee,sheenRoughnessMap:Ut,specularMap:Ae,specularColorMap:me,specularIntensityMap:Xe,transmission:Wt,transmissionMap:B,thicknessMap:Tt,gradientMap:et,opaque:M.transparent===!1&&M.blending===xs&&M.alphaToCoverage===!1,alphaMap:ct,alphaTest:Ft,alphaHash:Ct,combine:M.combine,mapUv:Ne&&v(M.map.channel),aoMapUv:N&&v(M.aoMap.channel),lightMapUv:Nn&&v(M.lightMap.channel),bumpMapUv:_t&&v(M.bumpMap.channel),normalMapUv:qt&&v(M.normalMap.channel),displacementMapUv:At&&v(M.displacementMap.channel),emissiveMapUv:Se&&v(M.emissiveMap.channel),metalnessMapUv:Vt&&v(M.metalnessMap.channel),roughnessMapUv:C&&v(M.roughnessMap.channel),anisotropyMapUv:wt&&v(M.anisotropyMap.channel),clearcoatMapUv:Lt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Te&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&v(M.sheenRoughnessMap.channel),specularMapUv:Ae&&v(M.specularMap.channel),specularColorMapUv:me&&v(M.specularColorMap.channel),specularIntensityMapUv:Xe&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:Tt&&v(M.thicknessMap.channel),alphaMapUv:ct&&v(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(qt||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!z.attributes.uv&&(Ne||ct),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Zt,skinning:G.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Nt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:on,decodeVideoTexture:Ne&&M.map.isVideoTexture===!0&&Re.getTransfer(M.map.colorSpace)===ke,decodeVideoTextureEmissive:Se&&M.emissiveMap.isVideoTexture===!0&&Re.getTransfer(M.emissiveMap.colorSpace)===ke,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===an,flipSided:M.side===yn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ue&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&M.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Cn.vertexUv1s=c.has(1),Cn.vertexUv2s=c.has(2),Cn.vertexUv3s=c.has(3),c.clear(),Cn}function m(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)_.push(I),_.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(S(_,M),b(_,M),_.push(n.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function S(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function b(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function E(M){let _=p[M.type],I;if(_){let $=Li[_];I=lo.clone($.uniforms)}else I=M.uniforms;return I}function R(M,_){let I;for(let $=0,G=h.length;$<G;$++){let U=h[$];if(U.cacheKey===_){I=U,++I.usedTimes;break}}return I===void 0&&(I=new Xv(n,_,M,r),h.push(I)),I}function T(M){if(--M.usedTimes===0){let _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function A(M){l.remove(M)}function w(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:E,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:w}}function Zv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function $v(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function bd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function xd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,p,v,g){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},n[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),t++,m}function a(u,f,d,p,v,g){let m=o(u,f,d,p,v,g);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,p,v,g){let m=o(u,f,d,p,v,g);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||$v),i.length>1&&i.sort(f||bd),s.length>1&&s.sort(f||bd)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Jv(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new xd,n.set(i,[o])):s>=r.length?(o=new xd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Qv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Yt};break;case"SpotLight":e={position:new P,direction:new P,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function Kv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var jv=0;function tE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function eE(n){let t=new Qv,e=Kv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new Ce,o=new Ce;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,S=0,b=0,E=0,R=0,T=0,A=0;c.sort(tE);for(let M=0,_=c.length;M<_;M++){let I=c[M],$=I.color,G=I.intensity,U=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=$.r*G,u+=$.g*G,f+=$.b*G;else if(I.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(I.sh.coefficients[D],G);A++}else if(I.isDirectionalLight){let D=t.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let q=I.shadow,k=e.get(I);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=z,i.directionalShadowMatrix[d]=I.shadow.matrix,S++}i.directional[d]=D,d++}else if(I.isSpotLight){let D=t.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy($).multiplyScalar(G),D.distance=U,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,i.spot[v]=D;let q=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,q.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[v]=q.matrix,I.castShadow){let k=e.get(I);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=z,E++}v++}else if(I.isRectAreaLight){let D=t.get(I);D.color.copy($).multiplyScalar(G),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=D,g++}else if(I.isPointLight){let D=t.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),D.distance=I.distance,D.decay=I.decay,I.castShadow){let q=I.shadow,k=e.get(I);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,i.pointShadow[p]=k,i.pointShadowMap[p]=z,i.pointShadowMatrix[p]=I.shadow.matrix,b++}i.point[p]=D,p++}else if(I.isHemisphereLight){let D=t.get(I);D.skyColor.copy(I.color).multiplyScalar(G),D.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[m]=D,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let w=i.hash;(w.directionalLength!==d||w.pointLength!==p||w.spotLength!==v||w.rectAreaLength!==g||w.hemiLength!==m||w.numDirectionalShadows!==S||w.numPointShadows!==b||w.numSpotShadows!==E||w.numSpotMaps!==R||w.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,w.directionalLength=d,w.pointLength=p,w.spotLength=v,w.rectAreaLength=g,w.hemiLength=m,w.numDirectionalShadows=S,w.numPointShadows=b,w.numSpotShadows=E,w.numSpotMaps=R,w.numLightProbes=A,i.version=jv++)}function l(c,h){let u=0,f=0,d=0,p=0,v=0,g=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){let b=c[m];if(b.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),u++}else if(b.isSpotLight){let E=i.spot[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),d++}else if(b.isRectAreaLight){let E=i.rectArea[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let E=i.hemi[v];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function Ad(n){let t=new eE(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function nE(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ad(n),t.set(s,[a])):r>=o.length?(a=new Ad(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var q0=class extends Rs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=h1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Y0=class extends Rs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},iE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sE=`uniform sampler2D shadow_pass;
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
}`;function rE(n,t,e){let i=new Ko,s=new mt,r=new mt,o=new Ve,a=new q0({depthPacking:u1}),l=new Y0,c={},h=e.maxTextureSize,u={[Ss]:yn,[yn]:Ss,[an]:an},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:iE,fragmentShader:sE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new wn;p.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new at(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let m=this.type;this.render=function(T,A,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let M=n.getRenderTarget(),_=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Bi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let G=m!==Ji&&this.type===Ji,U=m===Ji&&this.type!==Ji;for(let z=0,D=T.length;z<D;z++){let q=T[z],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let ot=k.getFrameExtents();if(s.multiply(ot),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,k.mapSize.y=r.y)),k.map===null||G===!0||U===!0){let Rt=this.type!==Ji?{minFilter:zn,magFilter:zn}:{};k.map!==null&&k.map.dispose(),k.map=new _n(s.x,s.y,Rt),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let pt=k.getViewportCount();for(let Rt=0;Rt<pt;Rt++){let Nt=k.getViewport(Rt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),$.viewport(o),k.updateMatrices(q,Rt),i=k.getFrustum(),E(A,w,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===Ji&&S(k,w),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(M,_,I)};function S(T,A){let w=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _n(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,w,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,w,d,v,null)}function b(T,A,w,M){let _=null,I=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)_=I;else if(_=w.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let $=_.uuid,G=A.uuid,U=c[$];U===void 0&&(U={},c[$]=U);let z=U[G];z===void 0&&(z=_.clone(),U[G]=z,A.addEventListener("dispose",R)),_=z}if(_.visible=A.visible,_.wireframe=A.wireframe,M===Ji?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:u[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,w.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let $=n.properties.get(_);$.light=w}return _}function E(T,A,w,M,_){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Ji)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let G=t.update(T),U=T.material;if(Array.isArray(U)){let z=G.groups;for(let D=0,q=z.length;D<q;D++){let k=z[D],ot=U[k.materialIndex];if(ot&&ot.visible){let pt=b(T,ot,M,_);T.onBeforeShadow(n,T,A,w,G,pt,k),n.renderBufferDirect(w,null,G,pt,T,k),T.onAfterShadow(n,T,A,w,G,pt,k)}}}else if(U.visible){let z=b(T,U,M,_);T.onBeforeShadow(n,T,A,w,G,z,null),n.renderBufferDirect(w,null,G,z,T,null),T.onAfterShadow(n,T,A,w,G,z,null)}}let $=T.children;for(let G=0,U=$.length;G<U;G++)E($[G],A,w,M,_)}function R(T){T.target.removeEventListener("dispose",R);for(let w in c){let M=c[w],_=T.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var oE={[Jc]:Qc,[Kc]:e0,[jc]:n0,[Jr]:t0,[Qc]:Jc,[e0]:Kc,[n0]:jc,[t0]:Jr};function aE(n,t){function e(){let B=!1,Tt=new Ve,et=null,ct=new Ve(0,0,0,0);return{setMask:function(Ft){et!==Ft&&!B&&(n.colorMask(Ft,Ft,Ft,Ft),et=Ft)},setLocked:function(Ft){B=Ft},setClear:function(Ft,Ct,ue,on,Cn){Cn===!0&&(Ft*=on,Ct*=on,ue*=on),Tt.set(Ft,Ct,ue,on),ct.equals(Tt)===!1&&(n.clearColor(Ft,Ct,ue,on),ct.copy(Tt))},reset:function(){B=!1,et=null,ct.set(-1,0,0,0)}}}function i(){let B=!1,Tt=!1,et=null,ct=null,Ft=null;return{setReversed:function(Ct){if(Tt!==Ct){let ue=t.get("EXT_clip_control");Tt?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT);let on=Ft;Ft=null,this.setClear(on)}Tt=Ct},getReversed:function(){return Tt},setTest:function(Ct){Ct?xt(n.DEPTH_TEST):Zt(n.DEPTH_TEST)},setMask:function(Ct){et!==Ct&&!B&&(n.depthMask(Ct),et=Ct)},setFunc:function(Ct){if(Tt&&(Ct=oE[Ct]),ct!==Ct){switch(Ct){case Jc:n.depthFunc(n.NEVER);break;case Qc:n.depthFunc(n.ALWAYS);break;case Kc:n.depthFunc(n.LESS);break;case Jr:n.depthFunc(n.LEQUAL);break;case jc:n.depthFunc(n.EQUAL);break;case t0:n.depthFunc(n.GEQUAL);break;case e0:n.depthFunc(n.GREATER);break;case n0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=Ct}},setLocked:function(Ct){B=Ct},setClear:function(Ct){Ft!==Ct&&(Tt&&(Ct=1-Ct),n.clearDepth(Ct),Ft=Ct)},reset:function(){B=!1,et=null,ct=null,Ft=null,Tt=!1}}}function s(){let B=!1,Tt=null,et=null,ct=null,Ft=null,Ct=null,ue=null,on=null,Cn=null;return{setTest:function(Oe){B||(Oe?xt(n.STENCIL_TEST):Zt(n.STENCIL_TEST))},setMask:function(Oe){Tt!==Oe&&!B&&(n.stencilMask(Oe),Tt=Oe)},setFunc:function(Oe,yi,Vi){(et!==Oe||ct!==yi||Ft!==Vi)&&(n.stencilFunc(Oe,yi,Vi),et=Oe,ct=yi,Ft=Vi)},setOp:function(Oe,yi,Vi){(Ct!==Oe||ue!==yi||on!==Vi)&&(n.stencilOp(Oe,yi,Vi),Ct=Oe,ue=yi,on=Vi)},setLocked:function(Oe){B=Oe},setClear:function(Oe){Cn!==Oe&&(n.clearStencil(Oe),Cn=Oe)},reset:function(){B=!1,Tt=null,et=null,ct=null,Ft=null,Ct=null,ue=null,on=null,Cn=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,v=!1,g=null,m=null,S=null,b=null,E=null,R=null,T=null,A=new Yt(0,0,0),w=0,M=!1,_=null,I=null,$=null,G=null,U=null,z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,q=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),D=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),D=q>=2);let ot=null,pt={},Rt=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),_e=new Ve().fromArray(Rt),st=new Ve().fromArray(Nt);function vt(B,Tt,et,ct){let Ft=new Uint8Array(4),Ct=n.createTexture();n.bindTexture(B,Ct),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ue=0;ue<et;ue++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Tt,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,Ft):n.texImage2D(Tt+ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ft);return Ct}let Bt={};Bt[n.TEXTURE_2D]=vt(n.TEXTURE_2D,n.TEXTURE_2D,1),Bt[n.TEXTURE_CUBE_MAP]=vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[n.TEXTURE_2D_ARRAY]=vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Bt[n.TEXTURE_3D]=vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xt(n.DEPTH_TEST),o.setFunc(Jr),_t(!1),qt(wu),xt(n.CULL_FACE),N(Bi);function xt(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function Zt(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function te(B,Tt){return u[B]!==Tt?(n.bindFramebuffer(B,Tt),u[B]=Tt,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Tt),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Tt),!0):!1}function he(B,Tt){let et=d,ct=!1;if(B){et=f.get(Tt),et===void 0&&(et=[],f.set(Tt,et));let Ft=B.textures;if(et.length!==Ft.length||et[0]!==n.COLOR_ATTACHMENT0){for(let Ct=0,ue=Ft.length;Ct<ue;Ct++)et[Ct]=n.COLOR_ATTACHMENT0+Ct;et.length=Ft.length,ct=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,ct=!0);ct&&n.drawBuffers(et)}function Ne(B){return p!==B?(n.useProgram(B),p=B,!0):!1}let ve={[Ks]:n.FUNC_ADD,[Np]:n.FUNC_SUBTRACT,[Op]:n.FUNC_REVERSE_SUBTRACT};ve[Hp]=n.MIN,ve[zp]=n.MAX;let ze={[kp]:n.ZERO,[Gp]:n.ONE,[Vp]:n.SRC_COLOR,[Zc]:n.SRC_ALPHA,[$p]:n.SRC_ALPHA_SATURATE,[Yp]:n.DST_COLOR,[Xp]:n.DST_ALPHA,[Wp]:n.ONE_MINUS_SRC_COLOR,[$c]:n.ONE_MINUS_SRC_ALPHA,[Zp]:n.ONE_MINUS_DST_COLOR,[qp]:n.ONE_MINUS_DST_ALPHA,[Jp]:n.CONSTANT_COLOR,[Qp]:n.ONE_MINUS_CONSTANT_COLOR,[Kp]:n.CONSTANT_ALPHA,[jp]:n.ONE_MINUS_CONSTANT_ALPHA};function N(B,Tt,et,ct,Ft,Ct,ue,on,Cn,Oe){if(B===Bi){v===!0&&(Zt(n.BLEND),v=!1);return}if(v===!1&&(xt(n.BLEND),v=!0),B!==Bp){if(B!==g||Oe!==M){if((m!==Ks||E!==Ks)&&(n.blendEquation(n.FUNC_ADD),m=Ks,E=Ks),Oe)switch(B){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oi:n.blendFunc(n.ONE,n.ONE);break;case Cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,b=null,R=null,T=null,A.set(0,0,0),w=0,g=B,M=Oe}return}Ft=Ft||Tt,Ct=Ct||et,ue=ue||ct,(Tt!==m||Ft!==E)&&(n.blendEquationSeparate(ve[Tt],ve[Ft]),m=Tt,E=Ft),(et!==S||ct!==b||Ct!==R||ue!==T)&&(n.blendFuncSeparate(ze[et],ze[ct],ze[Ct],ze[ue]),S=et,b=ct,R=Ct,T=ue),(on.equals(A)===!1||Cn!==w)&&(n.blendColor(on.r,on.g,on.b,Cn),A.copy(on),w=Cn),g=B,M=!1}function Nn(B,Tt){B.side===an?Zt(n.CULL_FACE):xt(n.CULL_FACE);let et=B.side===yn;Tt&&(et=!et),_t(et),B.blending===xs&&B.transparent===!1?N(Bi):N(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let ct=B.stencilWrite;a.setTest(ct),ct&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Se(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?xt(n.SAMPLE_ALPHA_TO_COVERAGE):Zt(n.SAMPLE_ALPHA_TO_COVERAGE)}function _t(B){_!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),_=B)}function qt(B){B!==Dp?(xt(n.CULL_FACE),B!==I&&(B===wu?n.cullFace(n.BACK):B===Up?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Zt(n.CULL_FACE),I=B}function At(B){B!==$&&(D&&n.lineWidth(B),$=B)}function Se(B,Tt,et){B?(xt(n.POLYGON_OFFSET_FILL),(G!==Tt||U!==et)&&(n.polygonOffset(Tt,et),G=Tt,U=et)):Zt(n.POLYGON_OFFSET_FILL)}function Vt(B){B?xt(n.SCISSOR_TEST):Zt(n.SCISSOR_TEST)}function C(B){B===void 0&&(B=n.TEXTURE0+z-1),ot!==B&&(n.activeTexture(B),ot=B)}function y(B,Tt,et){et===void 0&&(ot===null?et=n.TEXTURE0+z-1:et=ot);let ct=pt[et];ct===void 0&&(ct={type:void 0,texture:void 0},pt[et]=ct),(ct.type!==B||ct.texture!==Tt)&&(ot!==et&&(n.activeTexture(et),ot=et),n.bindTexture(B,Tt||Bt[B]),ct.type=B,ct.texture=Tt)}function Y(){let B=pt[ot];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function lt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Wt(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Qt(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(B){_e.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),_e.copy(B))}function Ut(B){st.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),st.copy(B))}function Ae(B,Tt){let et=c.get(Tt);et===void 0&&(et=new WeakMap,c.set(Tt,et));let ct=et.get(B);ct===void 0&&(ct=n.getUniformBlockIndex(Tt,B.name),et.set(B,ct))}function me(B,Tt){let ct=c.get(Tt).get(B);l.get(Tt)!==ct&&(n.uniformBlockBinding(Tt,ct,B.__bindingPointIndex),l.set(Tt,ct))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ot=null,pt={},u={},f=new WeakMap,d=[],p=null,v=!1,g=null,m=null,S=null,b=null,E=null,R=null,T=null,A=new Yt(0,0,0),w=0,M=!1,_=null,I=null,$=null,G=null,U=null,_e.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xt,disable:Zt,bindFramebuffer:te,drawBuffers:he,useProgram:Ne,setBlending:N,setMaterial:Nn,setFlipSided:_t,setCullFace:qt,setLineWidth:At,setPolygonOffset:Se,setScissorTest:Vt,activeTexture:C,bindTexture:y,unbindTexture:Y,compressedTexImage2D:lt,compressedTexImage3D:dt,texImage2D:Dt,texImage3D:Qt,updateUBOMapping:Ae,uniformBlockBinding:me,texStorage2D:Te,texStorage3D:gt,texSubImage2D:rt,texSubImage3D:Wt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Lt,scissor:ee,viewport:Ut,reset:Xe}}function Sd(n,t,e,i){let s=lE(i);switch(e){case Hd:return n*t;case kd:return n*t;case Gd:return n*t*2;case Vd:return n*t/s.components*s.byteLength;case bh:return n*t/s.components*s.byteLength;case Wd:return n*t*2/s.components*s.byteLength;case xh:return n*t*2/s.components*s.byteLength;case zd:return n*t*3/s.components*s.byteLength;case ii:return n*t*4/s.components*s.byteLength;case Ah:return n*t*4/s.components*s.byteLength;case Qa:case Ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ja:case tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case a0:case c0:return Math.max(n,16)*Math.max(t,8)/4;case o0:case l0:return Math.max(n,8)*Math.max(t,8)/2;case h0:case u0:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case d0:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case f0:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case p0:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case m0:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case g0:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case v0:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case E0:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case y0:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _0:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case M0:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case b0:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case x0:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case A0:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case S0:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case T0:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case el:case R0:case w0:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Xd:case C0:return Math.ceil(n/4)*Math.ceil(t/4)*8;case P0:case F0:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lE(n){switch(n){case es:case Bd:return{byteLength:1,components:1};case Jo:case Nd:case Jn:return{byteLength:2,components:1};case _h:case Mh:return{byteLength:2,components:4};case ns:case yh:case Ki:return{byteLength:4,components:1};case Od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function cE(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,y){return d?new OffscreenCanvas(C,y):rl("canvas")}function v(C,y,Y){let lt=1,dt=Vt(C);if((dt.width>Y||dt.height>Y)&&(lt=Y/Math.max(dt.width,dt.height)),lt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let rt=Math.floor(lt*dt.width),Wt=Math.floor(lt*dt.height);u===void 0&&(u=p(rt,Wt));let wt=y?p(rt,Wt):u;return wt.width=rt,wt.height=Wt,wt.getContext("2d").drawImage(C,0,0,rt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+rt+"x"+Wt+")."),wt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(C,y,Y,lt,dt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=y;if(y===n.RED&&(Y===n.FLOAT&&(rt=n.R32F),Y===n.HALF_FLOAT&&(rt=n.R16F),Y===n.UNSIGNED_BYTE&&(rt=n.R8)),y===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(rt=n.R8UI),Y===n.UNSIGNED_SHORT&&(rt=n.R16UI),Y===n.UNSIGNED_INT&&(rt=n.R32UI),Y===n.BYTE&&(rt=n.R8I),Y===n.SHORT&&(rt=n.R16I),Y===n.INT&&(rt=n.R32I)),y===n.RG&&(Y===n.FLOAT&&(rt=n.RG32F),Y===n.HALF_FLOAT&&(rt=n.RG16F),Y===n.UNSIGNED_BYTE&&(rt=n.RG8)),y===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(rt=n.RG8UI),Y===n.UNSIGNED_SHORT&&(rt=n.RG16UI),Y===n.UNSIGNED_INT&&(rt=n.RG32UI),Y===n.BYTE&&(rt=n.RG8I),Y===n.SHORT&&(rt=n.RG16I),Y===n.INT&&(rt=n.RG32I)),y===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(rt=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(rt=n.RGB16UI),Y===n.UNSIGNED_INT&&(rt=n.RGB32UI),Y===n.BYTE&&(rt=n.RGB8I),Y===n.SHORT&&(rt=n.RGB16I),Y===n.INT&&(rt=n.RGB32I)),y===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(rt=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(rt=n.RGBA16UI),Y===n.UNSIGNED_INT&&(rt=n.RGBA32UI),Y===n.BYTE&&(rt=n.RGBA8I),Y===n.SHORT&&(rt=n.RGBA16I),Y===n.INT&&(rt=n.RGBA32I)),y===n.RGB&&Y===n.UNSIGNED_INT_5_9_9_9_REV&&(rt=n.RGB9_E5),y===n.RGBA){let Wt=dt?wl:Re.getTransfer(lt);Y===n.FLOAT&&(rt=n.RGBA32F),Y===n.HALF_FLOAT&&(rt=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(rt=Wt===ke?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(rt=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(rt=n.RGB5_A1)}return(rt===n.R16F||rt===n.R32F||rt===n.RG16F||rt===n.RG32F||rt===n.RGBA16F||rt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function E(C,y){let Y;return C?y===null||y===ns||y===jr?Y=n.DEPTH24_STENCIL8:y===Ki?Y=n.DEPTH32F_STENCIL8:y===Jo&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ns||y===jr?Y=n.DEPTH_COMPONENT24:y===Ki?Y=n.DEPTH_COMPONENT32F:y===Jo&&(Y=n.DEPTH_COMPONENT16),Y}function R(C,y){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==zn&&C.minFilter!==Ui?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function T(C){let y=C.target;y.removeEventListener("dispose",T),w(y),y.isVideoTexture&&h.delete(y)}function A(C){let y=C.target;y.removeEventListener("dispose",A),_(y)}function w(C){let y=i.get(C);if(y.__webglInit===void 0)return;let Y=C.source,lt=f.get(Y);if(lt){let dt=lt[y.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&M(C),Object.keys(lt).length===0&&f.delete(Y)}i.remove(C)}function M(C){let y=i.get(C);n.deleteTexture(y.__webglTexture);let Y=C.source,lt=f.get(Y);delete lt[y.__cacheKey],o.memory.textures--}function _(C){let y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(y.__webglFramebuffer[lt]))for(let dt=0;dt<y.__webglFramebuffer[lt].length;dt++)n.deleteFramebuffer(y.__webglFramebuffer[lt][dt]);else n.deleteFramebuffer(y.__webglFramebuffer[lt]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[lt])}else{if(Array.isArray(y.__webglFramebuffer))for(let lt=0;lt<y.__webglFramebuffer.length;lt++)n.deleteFramebuffer(y.__webglFramebuffer[lt]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let lt=0;lt<y.__webglColorRenderbuffer.length;lt++)y.__webglColorRenderbuffer[lt]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[lt]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Y=C.textures;for(let lt=0,dt=Y.length;lt<dt;lt++){let rt=i.get(Y[lt]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),o.memory.textures--),i.remove(Y[lt])}i.remove(C)}let I=0;function $(){I=0}function G(){let C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function U(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function z(C,y){let Y=i.get(C);if(C.isVideoTexture&&At(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){let lt=C.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(Y,C,y);return}}e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+y)}function D(C,y){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){st(Y,C,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+y)}function q(C,y){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){st(Y,C,y);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+y)}function k(C,y){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){vt(Y,C,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+y)}let ot={[Ai]:n.REPEAT,[tr]:n.CLAMP_TO_EDGE,[r0]:n.MIRRORED_REPEAT},pt={[zn]:n.NEAREST,[c1]:n.NEAREST_MIPMAP_NEAREST,[Sa]:n.NEAREST_MIPMAP_LINEAR,[Ui]:n.LINEAR,[dc]:n.LINEAR_MIPMAP_NEAREST,[er]:n.LINEAR_MIPMAP_LINEAR},Rt={[f1]:n.NEVER,[y1]:n.ALWAYS,[p1]:n.LESS,[Yd]:n.LEQUAL,[m1]:n.EQUAL,[E1]:n.GEQUAL,[g1]:n.GREATER,[v1]:n.NOTEQUAL};function Nt(C,y){if(y.type===Ki&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ui||y.magFilter===dc||y.magFilter===Sa||y.magFilter===er||y.minFilter===Ui||y.minFilter===dc||y.minFilter===Sa||y.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ot[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ot[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ot[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,pt[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,pt[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Rt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zn||y.minFilter!==Sa&&y.minFilter!==er||y.type===Ki&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function _e(C,y){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",T));let lt=y.source,dt=f.get(lt);dt===void 0&&(dt={},f.set(lt,dt));let rt=U(y);if(rt!==C.__cacheKey){dt[rt]===void 0&&(dt[rt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),dt[rt].usedTimes++;let Wt=dt[C.__cacheKey];Wt!==void 0&&(dt[C.__cacheKey].usedTimes--,Wt.usedTimes===0&&M(y)),C.__cacheKey=rt,C.__webglTexture=dt[rt].texture}return Y}function st(C,y,Y){let lt=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(lt=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(lt=n.TEXTURE_3D);let dt=_e(C,y),rt=y.source;e.bindTexture(lt,C.__webglTexture,n.TEXTURE0+Y);let Wt=i.get(rt);if(rt.version!==Wt.__version||dt===!0){e.activeTexture(n.TEXTURE0+Y);let wt=Re.getPrimaries(Re.workingColorSpace),Lt=y.colorSpace===Ms?null:Re.getPrimaries(y.colorSpace),Te=y.colorSpace===Ms||wt===Lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let gt=v(y.image,!1,s.maxTextureSize);gt=Se(y,gt);let Dt=r.convert(y.format,y.colorSpace),Qt=r.convert(y.type),ee=b(y.internalFormat,Dt,Qt,y.colorSpace,y.isVideoTexture);Nt(lt,y);let Ut,Ae=y.mipmaps,me=y.isVideoTexture!==!0,Xe=Wt.__version===void 0||dt===!0,B=rt.dataReady,Tt=R(y,gt);if(y.isDepthTexture)ee=E(y.format===to,y.type),Xe&&(me?e.texStorage2D(n.TEXTURE_2D,1,ee,gt.width,gt.height):e.texImage2D(n.TEXTURE_2D,0,ee,gt.width,gt.height,0,Dt,Qt,null));else if(y.isDataTexture)if(Ae.length>0){me&&Xe&&e.texStorage2D(n.TEXTURE_2D,Tt,ee,Ae[0].width,Ae[0].height);for(let et=0,ct=Ae.length;et<ct;et++)Ut=Ae[et],me?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Ut.width,Ut.height,Dt,Qt,Ut.data):e.texImage2D(n.TEXTURE_2D,et,ee,Ut.width,Ut.height,0,Dt,Qt,Ut.data);y.generateMipmaps=!1}else me?(Xe&&e.texStorage2D(n.TEXTURE_2D,Tt,ee,gt.width,gt.height),B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt.width,gt.height,Dt,Qt,gt.data)):e.texImage2D(n.TEXTURE_2D,0,ee,gt.width,gt.height,0,Dt,Qt,gt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){me&&Xe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,ee,Ae[0].width,Ae[0].height,gt.depth);for(let et=0,ct=Ae.length;et<ct;et++)if(Ut=Ae[et],y.format!==ii)if(Dt!==null)if(me){if(B)if(y.layerUpdates.size>0){let Ft=Sd(Ut.width,Ut.height,y.format,y.type);for(let Ct of y.layerUpdates){let ue=Ut.data.subarray(Ct*Ft/Ut.data.BYTES_PER_ELEMENT,(Ct+1)*Ft/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,Ct,Ut.width,Ut.height,1,Dt,ue)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,Ut.width,Ut.height,gt.depth,Dt,Ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,ee,Ut.width,Ut.height,gt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?B&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,Ut.width,Ut.height,gt.depth,Dt,Qt,Ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,ee,Ut.width,Ut.height,gt.depth,0,Dt,Qt,Ut.data)}else{me&&Xe&&e.texStorage2D(n.TEXTURE_2D,Tt,ee,Ae[0].width,Ae[0].height);for(let et=0,ct=Ae.length;et<ct;et++)Ut=Ae[et],y.format!==ii?Dt!==null?me?B&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,Ut.width,Ut.height,Dt,Ut.data):e.compressedTexImage2D(n.TEXTURE_2D,et,ee,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Ut.width,Ut.height,Dt,Qt,Ut.data):e.texImage2D(n.TEXTURE_2D,et,ee,Ut.width,Ut.height,0,Dt,Qt,Ut.data)}else if(y.isDataArrayTexture)if(me){if(Xe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,ee,gt.width,gt.height,gt.depth),B)if(y.layerUpdates.size>0){let et=Sd(gt.width,gt.height,y.format,y.type);for(let ct of y.layerUpdates){let Ft=gt.data.subarray(ct*et/gt.data.BYTES_PER_ELEMENT,(ct+1)*et/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,gt.width,gt.height,1,Dt,Qt,Ft)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Dt,Qt,gt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ee,gt.width,gt.height,gt.depth,0,Dt,Qt,gt.data);else if(y.isData3DTexture)me?(Xe&&e.texStorage3D(n.TEXTURE_3D,Tt,ee,gt.width,gt.height,gt.depth),B&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Dt,Qt,gt.data)):e.texImage3D(n.TEXTURE_3D,0,ee,gt.width,gt.height,gt.depth,0,Dt,Qt,gt.data);else if(y.isFramebufferTexture){if(Xe)if(me)e.texStorage2D(n.TEXTURE_2D,Tt,ee,gt.width,gt.height);else{let et=gt.width,ct=gt.height;for(let Ft=0;Ft<Tt;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,ee,et,ct,0,Dt,Qt,null),et>>=1,ct>>=1}}else if(Ae.length>0){if(me&&Xe){let et=Vt(Ae[0]);e.texStorage2D(n.TEXTURE_2D,Tt,ee,et.width,et.height)}for(let et=0,ct=Ae.length;et<ct;et++)Ut=Ae[et],me?B&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,Dt,Qt,Ut):e.texImage2D(n.TEXTURE_2D,et,ee,Dt,Qt,Ut);y.generateMipmaps=!1}else if(me){if(Xe){let et=Vt(gt);e.texStorage2D(n.TEXTURE_2D,Tt,ee,et.width,et.height)}B&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Dt,Qt,gt)}else e.texImage2D(n.TEXTURE_2D,0,ee,Dt,Qt,gt);g(y)&&m(lt),Wt.__version=rt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function vt(C,y,Y){if(y.image.length!==6)return;let lt=_e(C,y),dt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Y);let rt=i.get(dt);if(dt.version!==rt.__version||lt===!0){e.activeTexture(n.TEXTURE0+Y);let Wt=Re.getPrimaries(Re.workingColorSpace),wt=y.colorSpace===Ms?null:Re.getPrimaries(y.colorSpace),Lt=y.colorSpace===Ms||Wt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let Te=y.isCompressedTexture||y.image[0].isCompressedTexture,gt=y.image[0]&&y.image[0].isDataTexture,Dt=[];for(let ct=0;ct<6;ct++)!Te&&!gt?Dt[ct]=v(y.image[ct],!0,s.maxCubemapSize):Dt[ct]=gt?y.image[ct].image:y.image[ct],Dt[ct]=Se(y,Dt[ct]);let Qt=Dt[0],ee=r.convert(y.format,y.colorSpace),Ut=r.convert(y.type),Ae=b(y.internalFormat,ee,Ut,y.colorSpace),me=y.isVideoTexture!==!0,Xe=rt.__version===void 0||lt===!0,B=dt.dataReady,Tt=R(y,Qt);Nt(n.TEXTURE_CUBE_MAP,y);let et;if(Te){me&&Xe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Ae,Qt.width,Qt.height);for(let ct=0;ct<6;ct++){et=Dt[ct].mipmaps;for(let Ft=0;Ft<et.length;Ft++){let Ct=et[Ft];y.format!==ii?ee!==null?me?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft,0,0,Ct.width,Ct.height,ee,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft,Ae,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft,0,0,Ct.width,Ct.height,ee,Ut,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft,Ae,Ct.width,Ct.height,0,ee,Ut,Ct.data)}}}else{if(et=y.mipmaps,me&&Xe){et.length>0&&Tt++;let ct=Vt(Dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Ae,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(gt){me?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Dt[ct].width,Dt[ct].height,ee,Ut,Dt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Ae,Dt[ct].width,Dt[ct].height,0,ee,Ut,Dt[ct].data);for(let Ft=0;Ft<et.length;Ft++){let ue=et[Ft].image[ct].image;me?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft+1,0,0,ue.width,ue.height,ee,Ut,ue.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft+1,Ae,ue.width,ue.height,0,ee,Ut,ue.data)}}else{me?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,ee,Ut,Dt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Ae,ee,Ut,Dt[ct]);for(let Ft=0;Ft<et.length;Ft++){let Ct=et[Ft];me?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft+1,0,0,ee,Ut,Ct.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft+1,Ae,ee,Ut,Ct.image[ct])}}}g(y)&&m(n.TEXTURE_CUBE_MAP),rt.__version=dt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Bt(C,y,Y,lt,dt,rt){let Wt=r.convert(Y.format,Y.colorSpace),wt=r.convert(Y.type),Lt=b(Y.internalFormat,Wt,wt,Y.colorSpace),Te=i.get(y),gt=i.get(Y);if(gt.__renderTarget=y,!Te.__hasExternalTextures){let Dt=Math.max(1,y.width>>rt),Qt=Math.max(1,y.height>>rt);dt===n.TEXTURE_3D||dt===n.TEXTURE_2D_ARRAY?e.texImage3D(dt,rt,Lt,Dt,Qt,y.depth,0,Wt,wt,null):e.texImage2D(dt,rt,Lt,Dt,Qt,0,Wt,wt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),qt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,dt,gt.__webglTexture,0,_t(y)):(dt===n.TEXTURE_2D||dt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,lt,dt,gt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(C,y,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){let lt=y.depthTexture,dt=lt&&lt.isDepthTexture?lt.type:null,rt=E(y.stencilBuffer,dt),Wt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=_t(y);qt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt,rt,y.width,y.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,rt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,rt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Wt,n.RENDERBUFFER,C)}else{let lt=y.textures;for(let dt=0;dt<lt.length;dt++){let rt=lt[dt],Wt=r.convert(rt.format,rt.colorSpace),wt=r.convert(rt.type),Lt=b(rt.internalFormat,Wt,wt,rt.colorSpace),Te=_t(y);Y&&qt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Lt,y.width,y.height):qt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,Lt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Lt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Zt(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let lt=i.get(y.depthTexture);lt.__renderTarget=y,(!lt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);let dt=lt.__webglTexture,rt=_t(y);if(y.depthTexture.format===Yr)qt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,dt,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,dt,0);else if(y.depthTexture.format===to)qt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,dt,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function te(C){let y=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let lt=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),lt){let dt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,lt.removeEventListener("dispose",dt)};lt.addEventListener("dispose",dt),y.__depthDisposeCallback=dt}y.__boundDepthTexture=lt}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Zt(y.__webglFramebuffer,C)}else if(Y){y.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[lt]),y.__webglDepthbuffer[lt]===void 0)y.__webglDepthbuffer[lt]=n.createRenderbuffer(),xt(y.__webglDepthbuffer[lt],C,!1);else{let dt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer[lt];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),xt(y.__webglDepthbuffer,C,!1);else{let lt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,dt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function he(C,y,Y){let lt=i.get(C);y!==void 0&&Bt(lt.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&te(C)}function Ne(C){let y=C.texture,Y=i.get(C),lt=i.get(y);C.addEventListener("dispose",A);let dt=C.textures,rt=C.isWebGLCubeRenderTarget===!0,Wt=dt.length>1;if(Wt||(lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture()),lt.__version=y.version,o.memory.textures++),rt){Y.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[wt]=[];for(let Lt=0;Lt<y.mipmaps.length;Lt++)Y.__webglFramebuffer[wt][Lt]=n.createFramebuffer()}else Y.__webglFramebuffer[wt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let wt=0;wt<y.mipmaps.length;wt++)Y.__webglFramebuffer[wt]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Wt)for(let wt=0,Lt=dt.length;wt<Lt;wt++){let Te=i.get(dt[wt]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&qt(C)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let wt=0;wt<dt.length;wt++){let Lt=dt[wt];Y.__webglColorRenderbuffer[wt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[wt]);let Te=r.convert(Lt.format,Lt.colorSpace),gt=r.convert(Lt.type),Dt=b(Lt.internalFormat,Te,gt,Lt.colorSpace,C.isXRRenderTarget===!0),Qt=_t(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt,Dt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,Y.__webglColorRenderbuffer[wt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),xt(Y.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,lt.__webglTexture),Nt(n.TEXTURE_CUBE_MAP,y);for(let wt=0;wt<6;wt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Lt=0;Lt<y.mipmaps.length;Lt++)Bt(Y.__webglFramebuffer[wt][Lt],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Lt);else Bt(Y.__webglFramebuffer[wt],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);g(y)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Wt){for(let wt=0,Lt=dt.length;wt<Lt;wt++){let Te=dt[wt],gt=i.get(Te);e.bindTexture(n.TEXTURE_2D,gt.__webglTexture),Nt(n.TEXTURE_2D,Te),Bt(Y.__webglFramebuffer,C,Te,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,0),g(Te)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let wt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(wt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(wt,lt.__webglTexture),Nt(wt,y),y.mipmaps&&y.mipmaps.length>0)for(let Lt=0;Lt<y.mipmaps.length;Lt++)Bt(Y.__webglFramebuffer[Lt],C,y,n.COLOR_ATTACHMENT0,wt,Lt);else Bt(Y.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,wt,0);g(y)&&m(wt),e.unbindTexture()}C.depthBuffer&&te(C)}function ve(C){let y=C.textures;for(let Y=0,lt=y.length;Y<lt;Y++){let dt=y[Y];if(g(dt)){let rt=S(C),Wt=i.get(dt).__webglTexture;e.bindTexture(rt,Wt),m(rt),e.unbindTexture()}}}let ze=[],N=[];function Nn(C){if(C.samples>0){if(qt(C)===!1){let y=C.textures,Y=C.width,lt=C.height,dt=n.COLOR_BUFFER_BIT,rt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Wt=i.get(C),wt=y.length>1;if(wt)for(let Lt=0;Lt<y.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Lt=0;Lt<y.length;Lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(dt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(dt|=n.STENCIL_BUFFER_BIT)),wt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Wt.__webglColorRenderbuffer[Lt]);let Te=i.get(y[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,Y,lt,0,0,Y,lt,dt,n.NEAREST),l===!0&&(ze.length=0,N.length=0,ze.push(n.COLOR_ATTACHMENT0+Lt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ze.push(rt),N.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ze))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),wt)for(let Lt=0;Lt<y.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,Wt.__webglColorRenderbuffer[Lt]);let Te=i.get(y[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,Te,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function _t(C){return Math.min(s.maxSamples,C.samples)}function qt(C){let y=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function At(C){let y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Se(C,y){let Y=C.colorSpace,lt=C.format,dt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==Cs&&Y!==Ms&&(Re.getTransfer(Y)===ke?(lt!==ii||dt!==es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),y}function Vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=$,this.setTexture2D=z,this.setTexture2DArray=D,this.setTexture3D=q,this.setTextureCube=k,this.rebindTextures=he,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Nn,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=qt}function hE(n,t){function e(i,s=Ms){let r,o=Re.getTransfer(s);if(i===es)return n.UNSIGNED_BYTE;if(i===_h)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bd)return n.BYTE;if(i===Nd)return n.SHORT;if(i===Jo)return n.UNSIGNED_SHORT;if(i===yh)return n.INT;if(i===ns)return n.UNSIGNED_INT;if(i===Ki)return n.FLOAT;if(i===Jn)return n.HALF_FLOAT;if(i===Hd)return n.ALPHA;if(i===zd)return n.RGB;if(i===ii)return n.RGBA;if(i===kd)return n.LUMINANCE;if(i===Gd)return n.LUMINANCE_ALPHA;if(i===Yr)return n.DEPTH_COMPONENT;if(i===to)return n.DEPTH_STENCIL;if(i===Vd)return n.RED;if(i===bh)return n.RED_INTEGER;if(i===Wd)return n.RG;if(i===xh)return n.RG_INTEGER;if(i===Ah)return n.RGBA_INTEGER;if(i===Qa||i===Ka||i===ja||i===tl)if(o===ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===o0||i===a0||i===l0||i===c0)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===o0)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===a0)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===l0)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===c0)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===h0||i===u0||i===d0)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===h0||i===u0)return o===ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===d0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===f0||i===p0||i===m0||i===g0||i===v0||i===E0||i===y0||i===_0||i===M0||i===b0||i===x0||i===A0||i===S0||i===T0)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===f0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===p0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===m0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===g0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===v0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===E0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===y0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===M0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===b0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===x0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===A0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===S0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===T0)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===el||i===R0||i===w0)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===el)return o===ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===R0)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===w0)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xd||i===C0||i===P0||i===F0)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===el)return r.COMPRESSED_RED_RGTC1_EXT;if(i===C0)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===P0)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===F0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Z0=class extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},it=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},uE={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new it;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},dE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fE=`
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

}`,$0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Yn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new cn({vertexShader:dE,fragmentShader:fE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new $t(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},J0=class extends Ts{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,v=new $0,g=e.getContextAttributes(),m=null,S=null,b=[],E=[],R=new mt,T=null,A=new Tn;A.viewport=new Ve;let w=new Tn;w.viewport=new Ve;let M=[A,w],_=new Z0,I=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let vt=b[st];return vt===void 0&&(vt=new Yo,b[st]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(st){let vt=b[st];return vt===void 0&&(vt=new Yo,b[st]=vt),vt.getGripSpace()},this.getHand=function(st){let vt=b[st];return vt===void 0&&(vt=new Yo,b[st]=vt),vt.getHandSpace()};function G(st){let vt=E.indexOf(st.inputSource);if(vt===-1)return;let Bt=b[vt];Bt!==void 0&&(Bt.update(st.inputSource,st.frame,c||o),Bt.dispatchEvent({type:st.type,data:st.inputSource}))}function U(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let st=0;st<b.length;st++){let vt=E[st];vt!==null&&(E[st]=null,b[st].disconnect(vt))}I=null,$=null,v.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,S=null,_e.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let vt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new _n(d.framebufferWidth,d.framebufferHeight,{format:ii,type:es,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let vt=null,Bt=null,xt=null;g.depth&&(xt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=g.stencil?to:Yr,Bt=g.stencil?jr:ns);let Zt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new _n(f.textureWidth,f.textureHeight,{format:ii,type:es,depthTexture:new io(f.textureWidth,f.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(st){for(let vt=0;vt<st.removed.length;vt++){let Bt=st.removed[vt],xt=E.indexOf(Bt);xt>=0&&(E[xt]=null,b[xt].disconnect(Bt))}for(let vt=0;vt<st.added.length;vt++){let Bt=st.added[vt],xt=E.indexOf(Bt);if(xt===-1){for(let te=0;te<b.length;te++)if(te>=E.length){E.push(Bt),xt=te;break}else if(E[te]===null){E[te]=Bt,xt=te;break}if(xt===-1)break}let Zt=b[xt];Zt&&Zt.connect(Bt)}}let D=new P,q=new P;function k(st,vt,Bt){D.setFromMatrixPosition(vt.matrixWorld),q.setFromMatrixPosition(Bt.matrixWorld);let xt=D.distanceTo(q),Zt=vt.projectionMatrix.elements,te=Bt.projectionMatrix.elements,he=Zt[14]/(Zt[10]-1),Ne=Zt[14]/(Zt[10]+1),ve=(Zt[9]+1)/Zt[5],ze=(Zt[9]-1)/Zt[5],N=(Zt[8]-1)/Zt[0],Nn=(te[8]+1)/te[0],_t=he*N,qt=he*Nn,At=xt/(-N+Nn),Se=At*-N;if(vt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Se),st.translateZ(At),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Zt[10]===-1)st.projectionMatrix.copy(vt.projectionMatrix),st.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let Vt=he+At,C=Ne+At,y=_t-Se,Y=qt+(xt-Se),lt=ve*Ne/C*Vt,dt=ze*Ne/C*Vt;st.projectionMatrix.makePerspective(y,Y,lt,dt,Vt,C),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function ot(st,vt){vt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(vt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let vt=st.near,Bt=st.far;v.texture!==null&&(v.depthNear>0&&(vt=v.depthNear),v.depthFar>0&&(Bt=v.depthFar)),_.near=w.near=A.near=vt,_.far=w.far=A.far=Bt,(I!==_.near||$!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,$=_.far),A.layers.mask=st.layers.mask|2,w.layers.mask=st.layers.mask|4,_.layers.mask=A.layers.mask|w.layers.mask;let xt=st.parent,Zt=_.cameras;ot(_,xt);for(let te=0;te<Zt.length;te++)ot(Zt[te],xt);Zt.length===2?k(_,A,w):_.projectionMatrix.copy(A.projectionMatrix),pt(st,_,xt)};function pt(st,vt,Bt){Bt===null?st.matrix.copy(vt.matrixWorld):(st.matrix.copy(Bt.matrixWorld),st.matrix.invert(),st.matrix.multiply(vt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(vt.projectionMatrix),st.projectionMatrixInverse.copy(vt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=sl*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(st){l=st,f!==null&&(f.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let Rt=null;function Nt(st,vt){if(h=vt.getViewerPose(c||o),p=vt,h!==null){let Bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let xt=!1;Bt.length!==_.cameras.length&&(_.cameras.length=0,xt=!0);for(let te=0;te<Bt.length;te++){let he=Bt[te],Ne=null;if(d!==null)Ne=d.getViewport(he);else{let ze=u.getViewSubImage(f,he);Ne=ze.viewport,te===0&&(t.setRenderTargetTextures(S,ze.colorTexture,f.ignoreDepthValues?void 0:ze.depthStencilTexture),t.setRenderTarget(S))}let ve=M[te];ve===void 0&&(ve=new Tn,ve.layers.enable(te),ve.viewport=new Ve,M[te]=ve),ve.matrix.fromArray(he.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(he.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),te===0&&(_.matrix.copy(ve.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),xt===!0&&_.cameras.push(ve)}let Zt=s.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")){let te=u.getDepthInformation(Bt[0]);te&&te.isValid&&te.texture&&v.init(t,te,s.renderState)}}for(let Bt=0;Bt<b.length;Bt++){let xt=E[Bt],Zt=b[Bt];xt!==null&&Zt!==void 0&&Zt.update(xt,vt,c||o)}Rt&&Rt(st,vt),vt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:vt}),p=null}let _e=new Qd;_e.setAnimationLoop(Nt),this.setAnimationLoop=function(st){Rt=st},this.dispose=function(){}}},Js=new pi,pE=new Ce;function mE(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Jd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,b,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,E)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,S,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===yn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===yn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),b=S.envMap,E=S.envMapRotation;b&&(g.envMap.value=b,Js.copy(E),Js.x*=-1,Js.y*=-1,Js.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),g.envMapRotation.value.setFromMatrix4(pE.makeRotationFromEuler(Js)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=b*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gE(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){let E=b.program;i.uniformBlockBinding(S,E)}function c(S,b){let E=s[S.id];E===void 0&&(p(S),E=h(S),s[S.id]=E,S.addEventListener("dispose",g));let R=b.program;i.updateUBOMapping(S,R);let T=t.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function h(S){let b=u();S.__bindingPointIndex=b;let E=n.createBuffer(),R=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let b=s[S.id],E=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,A=E.length;T<A;T++){let w=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,_=w.length;M<_;M++){let I=w[M];if(d(I,T,M,R)===!0){let $=I.__offset,G=Array.isArray(I.value)?I.value:[I.value],U=0;for(let z=0;z<G.length;z++){let D=G[z],q=v(D);typeof D=="number"||typeof D=="boolean"?(I.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,$+U,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=0,I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=0,I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=0):(D.toArray(I.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,b,E,R){let T=S.value,A=b+"_"+E;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let w=R[A];if(typeof T=="number"||typeof T=="boolean"){if(w!==T)return R[A]=T,!0}else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function p(S){let b=S.uniforms,E=0,R=16;for(let A=0,w=b.length;A<w;A++){let M=Array.isArray(b[A])?b[A]:[b[A]];for(let _=0,I=M.length;_<I;_++){let $=M[_],G=Array.isArray($.value)?$.value:[$.value];for(let U=0,z=G.length;U<z;U++){let D=G[U],q=v(D),k=E%R,ot=k%q.boundary,pt=k+ot;E+=ot,pt!==0&&R-pt<q.storage&&(E+=R-pt),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=q.storage}}}let T=E%R;return T>0&&(E+=R-T),S.__size=E,S.__cache={},this}function v(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function g(S){let b=S.target;b.removeEventListener("dispose",g);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var pl=class{constructor(t={}){let{canvas:e=M1(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,S=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Ni,this.toneMappingExposure=1;let E=this,R=!1,T=0,A=0,w=null,M=-1,_=null,I=new Ve,$=new Ve,G=null,U=new Yt(0),z=0,D=e.width,q=e.height,k=1,ot=null,pt=null,Rt=new Ve(0,0,D,q),Nt=new Ve(0,0,D,q),_e=!1,st=new Ko,vt=!1,Bt=!1,xt=new Ce,Zt=new Ce,te=new P,he=new Ve,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function ze(){return w===null?k:1}let N=i;function Nn(x,O){return e.getContext(x,O)}try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vh}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),N===null){let O="webgl2";if(N=Nn(O,x),N===null)throw Nn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let _t,qt,At,Se,Vt,C,y,Y,lt,dt,rt,Wt,wt,Lt,Te,gt,Dt,Qt,ee,Ut,Ae,me,Xe,B;function Tt(){_t=new Ig(N),_t.init(),me=new hE(N,_t),qt=new Tg(N,_t,t,me),At=new aE(N,_t),qt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),Se=new Ug(N),Vt=new Zv,C=new cE(N,_t,At,Vt,qt,me,Se),y=new wg(E),Y=new Fg(E),lt=new G1(N),Xe=new Ag(N,lt),dt=new Lg(N,lt,Se,Xe),rt=new Ng(N,dt,lt,Se),ee=new Bg(N,qt,C),gt=new Rg(Vt),Wt=new Yv(E,y,Y,_t,qt,Xe,gt),wt=new mE(E,Vt),Lt=new Jv,Te=new nE(_t),Qt=new xg(E,y,Y,At,rt,d,l),Dt=new rE(E,rt,qt),B=new gE(N,Se,qt,At),Ut=new Sg(N,_t,Se),Ae=new Dg(N,_t,Se),Se.programs=Wt.programs,E.capabilities=qt,E.extensions=_t,E.properties=Vt,E.renderLists=Lt,E.shadowMap=Dt,E.state=At,E.info=Se}Tt();let et=new J0(E,N);this.xr=et,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let x=_t.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=_t.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(x){x!==void 0&&(k=x,this.setSize(D,q,!1))},this.getSize=function(x){return x.set(D,q)},this.setSize=function(x,O,J=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=x,q=O,e.width=Math.floor(x*k),e.height=Math.floor(O*k),J===!0&&(e.style.width=x+"px",e.style.height=O+"px"),this.setViewport(0,0,x,O)},this.getDrawingBufferSize=function(x){return x.set(D*k,q*k).floor()},this.setDrawingBufferSize=function(x,O,J){D=x,q=O,k=J,e.width=Math.floor(x*J),e.height=Math.floor(O*J),this.setViewport(0,0,x,O)},this.getCurrentViewport=function(x){return x.copy(I)},this.getViewport=function(x){return x.copy(Rt)},this.setViewport=function(x,O,J,Q){x.isVector4?Rt.set(x.x,x.y,x.z,x.w):Rt.set(x,O,J,Q),At.viewport(I.copy(Rt).multiplyScalar(k).round())},this.getScissor=function(x){return x.copy(Nt)},this.setScissor=function(x,O,J,Q){x.isVector4?Nt.set(x.x,x.y,x.z,x.w):Nt.set(x,O,J,Q),At.scissor($.copy(Nt).multiplyScalar(k).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(x){At.setScissorTest(_e=x)},this.setOpaqueSort=function(x){ot=x},this.setTransparentSort=function(x){pt=x},this.getClearColor=function(x){return x.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(x=!0,O=!0,J=!0){let Q=0;if(x){let H=!1;if(w!==null){let Et=w.texture.format;H=Et===Ah||Et===xh||Et===bh}if(H){let Et=w.texture.type,Pt=Et===es||Et===ns||Et===Jo||Et===jr||Et===_h||Et===Mh,Ot=Qt.getClearColor(),Ht=Qt.getClearAlpha(),se=Ot.r,de=Ot.g,zt=Ot.b;Pt?(p[0]=se,p[1]=de,p[2]=zt,p[3]=Ht,N.clearBufferuiv(N.COLOR,0,p)):(v[0]=se,v[1]=de,v[2]=zt,v[3]=Ht,N.clearBufferiv(N.COLOR,0,v))}else Q|=N.COLOR_BUFFER_BIT}O&&(Q|=N.DEPTH_BUFFER_BIT),J&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),Lt.dispose(),Te.dispose(),Vt.dispose(),y.dispose(),Y.dispose(),rt.dispose(),Xe.dispose(),B.dispose(),Wt.dispose(),et.dispose(),et.removeEventListener("sessionstart",_u),et.removeEventListener("sessionend",Mu),Ws.stop()};function ct(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let x=Se.autoReset,O=Dt.enabled,J=Dt.autoUpdate,Q=Dt.needsUpdate,H=Dt.type;Tt(),Se.autoReset=x,Dt.enabled=O,Dt.autoUpdate=J,Dt.needsUpdate=Q,Dt.type=H}function Ct(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ue(x){let O=x.target;O.removeEventListener("dispose",ue),on(O)}function on(x){Cn(x),Vt.remove(x)}function Cn(x){let O=Vt.get(x).programs;O!==void 0&&(O.forEach(function(J){Wt.releaseProgram(J)}),x.isShaderMaterial&&Wt.releaseShaderCache(x))}this.renderBufferDirect=function(x,O,J,Q,H,Et){O===null&&(O=Ne);let Pt=H.isMesh&&H.matrixWorld.determinant()<0,Ot=Fp(x,O,J,Q,H);At.setMaterial(Q,Pt);let Ht=J.index,se=1;if(Q.wireframe===!0){if(Ht=dt.getWireframeAttribute(J),Ht===void 0)return;se=2}let de=J.drawRange,zt=J.attributes.position,we=de.start*se,qe=(de.start+de.count)*se;Et!==null&&(we=Math.max(we,Et.start*se),qe=Math.min(qe,(Et.start+Et.count)*se)),Ht!==null?(we=Math.max(we,0),qe=Math.min(qe,Ht.count)):zt!=null&&(we=Math.max(we,0),qe=Math.min(qe,zt.count));let Ze=qe-we;if(Ze<0||Ze===1/0)return;Xe.setup(H,Q,Ot,J,Ht);let Xn,Le=Ut;if(Ht!==null&&(Xn=lt.get(Ht),Le=Ae,Le.setIndex(Xn)),H.isMesh)Q.wireframe===!0?(At.setLineWidth(Q.wireframeLinewidth*ze()),Le.setMode(N.LINES)):Le.setMode(N.TRIANGLES);else if(H.isLine){let Xt=Q.linewidth;Xt===void 0&&(Xt=1),At.setLineWidth(Xt*ze()),H.isLineSegments?Le.setMode(N.LINES):H.isLineLoop?Le.setMode(N.LINE_LOOP):Le.setMode(N.LINE_STRIP)}else H.isPoints?Le.setMode(N.POINTS):H.isSprite&&Le.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Le.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Le.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Xt=H._multiDrawStarts,Wi=H._multiDrawCounts,De=H._multiDrawCount,_i=Ht?lt.get(Ht).bytesPerElement:1,Rr=Vt.get(Q).currentProgram.getUniforms();for(let ti=0;ti<De;ti++)Rr.setValue(N,"_gl_DrawID",ti),Le.render(Xt[ti]/_i,Wi[ti])}else if(H.isInstancedMesh)Le.renderInstances(we,Ze,H.count);else if(J.isInstancedBufferGeometry){let Xt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Wi=Math.min(J.instanceCount,Xt);Le.renderInstances(we,Ze,Wi)}else Le.render(we,Ze)};function Oe(x,O,J){x.transparent===!0&&x.side===an&&x.forceSinglePass===!1?(x.side=yn,x.needsUpdate=!0,Aa(x,O,J),x.side=Ss,x.needsUpdate=!0,Aa(x,O,J),x.side=an):Aa(x,O,J)}this.compile=function(x,O,J=null){J===null&&(J=x),m=Te.get(J),m.init(O),b.push(m),J.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),x!==J&&x.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let Q=new Set;return x.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let Et=H.material;if(Et)if(Array.isArray(Et))for(let Pt=0;Pt<Et.length;Pt++){let Ot=Et[Pt];Oe(Ot,J,H),Q.add(Ot)}else Oe(Et,J,H),Q.add(Et)}),b.pop(),m=null,Q},this.compileAsync=function(x,O,J=null){let Q=this.compile(x,O,J);return new Promise(H=>{function Et(){if(Q.forEach(function(Pt){Vt.get(Pt).currentProgram.isReady()&&Q.delete(Pt)}),Q.size===0){H(x);return}setTimeout(Et,10)}_t.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let yi=null;function Vi(x){yi&&yi(x)}function _u(){Ws.stop()}function Mu(){Ws.start()}let Ws=new Qd;Ws.setAnimationLoop(Vi),typeof self<"u"&&Ws.setContext(self),this.setAnimationLoop=function(x){yi=x,et.setAnimationLoop(x),x===null?Ws.stop():Ws.start()},et.addEventListener("sessionstart",_u),et.addEventListener("sessionend",Mu),this.render=function(x,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(O),O=et.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,O,w),m=Te.get(x,b.length),m.init(O),b.push(m),Zt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),st.setFromProjectionMatrix(Zt),Bt=this.localClippingEnabled,vt=gt.init(this.clippingPlanes,Bt),g=Lt.get(x,S.length),g.init(),S.push(g),et.enabled===!0&&et.isPresenting===!0){let Et=E.xr.getDepthSensingMesh();Et!==null&&uc(Et,O,-1/0,E.sortObjects)}uc(x,O,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(ot,pt),ve=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,ve&&Qt.addToRenderList(g,x),this.info.render.frame++,vt===!0&&gt.beginShadows();let J=m.state.shadowsArray;Dt.render(J,x,O),vt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=g.opaque,H=g.transmissive;if(m.setupLights(),O.isArrayCamera){let Et=O.cameras;if(H.length>0)for(let Pt=0,Ot=Et.length;Pt<Ot;Pt++){let Ht=Et[Pt];xu(Q,H,x,Ht)}ve&&Qt.render(x);for(let Pt=0,Ot=Et.length;Pt<Ot;Pt++){let Ht=Et[Pt];bu(g,x,Ht,Ht.viewport)}}else H.length>0&&xu(Q,H,x,O),ve&&Qt.render(x),bu(g,x,O);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),x.isScene===!0&&x.onAfterRender(E,x,O),Xe.resetDefaultState(),M=-1,_=null,b.pop(),b.length>0?(m=b[b.length-1],vt===!0&&gt.setGlobalState(E.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function uc(x,O,J,Q){if(x.visible===!1)return;if(x.layers.test(O.layers)){if(x.isGroup)J=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(O);else if(x.isLight)m.pushLight(x),x.castShadow&&m.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||st.intersectsSprite(x)){Q&&he.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Zt);let Pt=rt.update(x),Ot=x.material;Ot.visible&&g.push(x,Pt,Ot,J,he.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||st.intersectsObject(x))){let Pt=rt.update(x),Ot=x.material;if(Q&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),he.copy(x.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),he.copy(Pt.boundingSphere.center)),he.applyMatrix4(x.matrixWorld).applyMatrix4(Zt)),Array.isArray(Ot)){let Ht=Pt.groups;for(let se=0,de=Ht.length;se<de;se++){let zt=Ht[se],we=Ot[zt.materialIndex];we&&we.visible&&g.push(x,Pt,we,J,he.z,zt)}}else Ot.visible&&g.push(x,Pt,Ot,J,he.z,null)}}let Et=x.children;for(let Pt=0,Ot=Et.length;Pt<Ot;Pt++)uc(Et[Pt],O,J,Q)}function bu(x,O,J,Q){let H=x.opaque,Et=x.transmissive,Pt=x.transparent;m.setupLightsView(J),vt===!0&&gt.setGlobalState(E.clippingPlanes,J),Q&&At.viewport(I.copy(Q)),H.length>0&&xa(H,O,J),Et.length>0&&xa(Et,O,J),Pt.length>0&&xa(Pt,O,J),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function xu(x,O,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new _n(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Jn:es,minFilter:er,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));let Et=m.state.transmissionRenderTarget[Q.id],Pt=Q.viewport||I;Et.setSize(Pt.z,Pt.w);let Ot=E.getRenderTarget();E.setRenderTarget(Et),E.getClearColor(U),z=E.getClearAlpha(),z<1&&E.setClearColor(16777215,.5),E.clear(),ve&&Qt.render(J);let Ht=E.toneMapping;E.toneMapping=Ni;let se=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),vt===!0&&gt.setGlobalState(E.clippingPlanes,Q),xa(x,J,Q),C.updateMultisampleRenderTarget(Et),C.updateRenderTargetMipmap(Et),_t.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let zt=0,we=O.length;zt<we;zt++){let qe=O[zt],Ze=qe.object,Xn=qe.geometry,Le=qe.material,Xt=qe.group;if(Le.side===an&&Ze.layers.test(Q.layers)){let Wi=Le.side;Le.side=yn,Le.needsUpdate=!0,Au(Ze,J,Q,Xn,Le,Xt),Le.side=Wi,Le.needsUpdate=!0,de=!0}}de===!0&&(C.updateMultisampleRenderTarget(Et),C.updateRenderTargetMipmap(Et))}E.setRenderTarget(Ot),E.setClearColor(U,z),se!==void 0&&(Q.viewport=se),E.toneMapping=Ht}function xa(x,O,J){let Q=O.isScene===!0?O.overrideMaterial:null;for(let H=0,Et=x.length;H<Et;H++){let Pt=x[H],Ot=Pt.object,Ht=Pt.geometry,se=Q===null?Pt.material:Q,de=Pt.group;Ot.layers.test(J.layers)&&Au(Ot,O,J,Ht,se,de)}}function Au(x,O,J,Q,H,Et){x.onBeforeRender(E,O,J,Q,H,Et),x.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(E,O,J,Q,x,Et),H.transparent===!0&&H.side===an&&H.forceSinglePass===!1?(H.side=yn,H.needsUpdate=!0,E.renderBufferDirect(J,O,Q,H,x,Et),H.side=Ss,H.needsUpdate=!0,E.renderBufferDirect(J,O,Q,H,x,Et),H.side=an):E.renderBufferDirect(J,O,Q,H,x,Et),x.onAfterRender(E,O,J,Q,H,Et)}function Aa(x,O,J){O.isScene!==!0&&(O=Ne);let Q=Vt.get(x),H=m.state.lights,Et=m.state.shadowsArray,Pt=H.state.version,Ot=Wt.getParameters(x,H.state,Et,O,J),Ht=Wt.getProgramCacheKey(Ot),se=Q.programs;Q.environment=x.isMeshStandardMaterial?O.environment:null,Q.fog=O.fog,Q.envMap=(x.isMeshStandardMaterial?Y:y).get(x.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&x.envMap===null?O.environmentRotation:x.envMapRotation,se===void 0&&(x.addEventListener("dispose",ue),se=new Map,Q.programs=se);let de=se.get(Ht);if(de!==void 0){if(Q.currentProgram===de&&Q.lightsStateVersion===Pt)return Tu(x,Ot),de}else Ot.uniforms=Wt.getUniforms(x),x.onBeforeCompile(Ot,E),de=Wt.acquireProgram(Ot,Ht),se.set(Ht,de),Q.uniforms=Ot.uniforms;let zt=Q.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(zt.clippingPlanes=gt.uniform),Tu(x,Ot),Q.needsLights=Lp(x),Q.lightsStateVersion=Pt,Q.needsLights&&(zt.ambientLightColor.value=H.state.ambient,zt.lightProbe.value=H.state.probe,zt.directionalLights.value=H.state.directional,zt.directionalLightShadows.value=H.state.directionalShadow,zt.spotLights.value=H.state.spot,zt.spotLightShadows.value=H.state.spotShadow,zt.rectAreaLights.value=H.state.rectArea,zt.ltc_1.value=H.state.rectAreaLTC1,zt.ltc_2.value=H.state.rectAreaLTC2,zt.pointLights.value=H.state.point,zt.pointLightShadows.value=H.state.pointShadow,zt.hemisphereLights.value=H.state.hemi,zt.directionalShadowMap.value=H.state.directionalShadowMap,zt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,zt.spotShadowMap.value=H.state.spotShadowMap,zt.spotLightMatrix.value=H.state.spotLightMatrix,zt.spotLightMap.value=H.state.spotLightMap,zt.pointShadowMap.value=H.state.pointShadowMap,zt.pointShadowMatrix.value=H.state.pointShadowMatrix),Q.currentProgram=de,Q.uniformsList=null,de}function Su(x){if(x.uniformsList===null){let O=x.currentProgram.getUniforms();x.uniformsList=$r.seqWithValue(O.seq,x.uniforms)}return x.uniformsList}function Tu(x,O){let J=Vt.get(x);J.outputColorSpace=O.outputColorSpace,J.batching=O.batching,J.batchingColor=O.batchingColor,J.instancing=O.instancing,J.instancingColor=O.instancingColor,J.instancingMorph=O.instancingMorph,J.skinning=O.skinning,J.morphTargets=O.morphTargets,J.morphNormals=O.morphNormals,J.morphColors=O.morphColors,J.morphTargetsCount=O.morphTargetsCount,J.numClippingPlanes=O.numClippingPlanes,J.numIntersection=O.numClipIntersection,J.vertexAlphas=O.vertexAlphas,J.vertexTangents=O.vertexTangents,J.toneMapping=O.toneMapping}function Fp(x,O,J,Q,H){O.isScene!==!0&&(O=Ne),C.resetTextureUnits();let Et=O.fog,Pt=Q.isMeshStandardMaterial?O.environment:null,Ot=w===null?E.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Cs,Ht=(Q.isMeshStandardMaterial?Y:y).get(Q.envMap||Pt),se=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,de=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),zt=!!J.morphAttributes.position,we=!!J.morphAttributes.normal,qe=!!J.morphAttributes.color,Ze=Ni;Q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ze=E.toneMapping);let Xn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Le=Xn!==void 0?Xn.length:0,Xt=Vt.get(Q),Wi=m.state.lights;if(vt===!0&&(Bt===!0||x!==_)){let di=x===_&&Q.id===M;gt.setState(Q,x,di)}let De=!1;Q.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Wi.state.version||Xt.outputColorSpace!==Ot||H.isBatchedMesh&&Xt.batching===!1||!H.isBatchedMesh&&Xt.batching===!0||H.isBatchedMesh&&Xt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Xt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Xt.instancing===!1||!H.isInstancedMesh&&Xt.instancing===!0||H.isSkinnedMesh&&Xt.skinning===!1||!H.isSkinnedMesh&&Xt.skinning===!0||H.isInstancedMesh&&Xt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Xt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Xt.instancingMorph===!1&&H.morphTexture!==null||Xt.envMap!==Ht||Q.fog===!0&&Xt.fog!==Et||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==gt.numPlanes||Xt.numIntersection!==gt.numIntersection)||Xt.vertexAlphas!==se||Xt.vertexTangents!==de||Xt.morphTargets!==zt||Xt.morphNormals!==we||Xt.morphColors!==qe||Xt.toneMapping!==Ze||Xt.morphTargetsCount!==Le)&&(De=!0):(De=!0,Xt.__version=Q.version);let _i=Xt.currentProgram;De===!0&&(_i=Aa(Q,O,H));let Rr=!1,ti=!1,Uo=!1,$e=_i.getUniforms(),Ii=Xt.uniforms;if(At.useProgram(_i.program)&&(Rr=!0,ti=!0,Uo=!0),Q.id!==M&&(M=Q.id,ti=!0),Rr||_!==x){At.buffers.depth.getReversed()?(xt.copy(x.projectionMatrix),x1(xt),A1(xt),$e.setValue(N,"projectionMatrix",xt)):$e.setValue(N,"projectionMatrix",x.projectionMatrix),$e.setValue(N,"viewMatrix",x.matrixWorldInverse);let fs=$e.map.cameraPosition;fs!==void 0&&fs.setValue(N,te.setFromMatrixPosition(x.matrixWorld)),qt.logarithmicDepthBuffer&&$e.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&$e.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),_!==x&&(_=x,ti=!0,Uo=!0)}if(H.isSkinnedMesh){$e.setOptional(N,H,"bindMatrix"),$e.setOptional(N,H,"bindMatrixInverse");let di=H.skeleton;di&&(di.boneTexture===null&&di.computeBoneTexture(),$e.setValue(N,"boneTexture",di.boneTexture,C))}H.isBatchedMesh&&($e.setOptional(N,H,"batchingTexture"),$e.setValue(N,"batchingTexture",H._matricesTexture,C),$e.setOptional(N,H,"batchingIdTexture"),$e.setValue(N,"batchingIdTexture",H._indirectTexture,C),$e.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&$e.setValue(N,"batchingColorTexture",H._colorsTexture,C));let Bo=J.morphAttributes;if((Bo.position!==void 0||Bo.normal!==void 0||Bo.color!==void 0)&&ee.update(H,J,_i),(ti||Xt.receiveShadow!==H.receiveShadow)&&(Xt.receiveShadow=H.receiveShadow,$e.setValue(N,"receiveShadow",H.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ii.envMap.value=Ht,Ii.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&O.environment!==null&&(Ii.envMapIntensity.value=O.environmentIntensity),ti&&($e.setValue(N,"toneMappingExposure",E.toneMappingExposure),Xt.needsLights&&Ip(Ii,Uo),Et&&Q.fog===!0&&wt.refreshFogUniforms(Ii,Et),wt.refreshMaterialUniforms(Ii,Q,k,q,m.state.transmissionRenderTarget[x.id]),$r.upload(N,Su(Xt),Ii,C)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&($r.upload(N,Su(Xt),Ii,C),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&$e.setValue(N,"center",H.center),$e.setValue(N,"modelViewMatrix",H.modelViewMatrix),$e.setValue(N,"normalMatrix",H.normalMatrix),$e.setValue(N,"modelMatrix",H.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let di=Q.uniformsGroups;for(let fs=0,ps=di.length;fs<ps;fs++){let Ru=di[fs];B.update(Ru,_i),B.bind(Ru,_i)}}return _i}function Ip(x,O){x.ambientLightColor.needsUpdate=O,x.lightProbe.needsUpdate=O,x.directionalLights.needsUpdate=O,x.directionalLightShadows.needsUpdate=O,x.pointLights.needsUpdate=O,x.pointLightShadows.needsUpdate=O,x.spotLights.needsUpdate=O,x.spotLightShadows.needsUpdate=O,x.rectAreaLights.needsUpdate=O,x.hemisphereLights.needsUpdate=O}function Lp(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(x,O,J){Vt.get(x.texture).__webglTexture=O,Vt.get(x.depthTexture).__webglTexture=J;let Q=Vt.get(x);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,O){let J=Vt.get(x);J.__webglFramebuffer=O,J.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(x,O=0,J=0){w=x,T=O,A=J;let Q=!0,H=null,Et=!1,Pt=!1;if(x){let Ht=Vt.get(x);if(Ht.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1;else if(Ht.__webglFramebuffer===void 0)C.setupRenderTarget(x);else if(Ht.__hasExternalTextures)C.rebindTextures(x,Vt.get(x.texture).__webglTexture,Vt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let zt=x.depthTexture;if(Ht.__boundDepthTexture!==zt){if(zt!==null&&Vt.has(zt)&&(x.width!==zt.image.width||x.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(x)}}let se=x.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Pt=!0);let de=Vt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(de[O])?H=de[O][J]:H=de[O],Et=!0):x.samples>0&&C.useMultisampledRTT(x)===!1?H=Vt.get(x).__webglMultisampledFramebuffer:Array.isArray(de)?H=de[J]:H=de,I.copy(x.viewport),$.copy(x.scissor),G=x.scissorTest}else I.copy(Rt).multiplyScalar(k).floor(),$.copy(Nt).multiplyScalar(k).floor(),G=_e;if(At.bindFramebuffer(N.FRAMEBUFFER,H)&&Q&&At.drawBuffers(x,H),At.viewport(I),At.scissor($),At.setScissorTest(G),Et){let Ht=Vt.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ht.__webglTexture,J)}else if(Pt){let Ht=Vt.get(x.texture),se=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ht.__webglTexture,J||0,se)}M=-1},this.readRenderTargetPixels=function(x,O,J,Q,H,Et,Pt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Vt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ot=Ot[Pt]),Ot){At.bindFramebuffer(N.FRAMEBUFFER,Ot);try{let Ht=x.texture,se=Ht.format,de=Ht.type;if(!qt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=x.width-Q&&J>=0&&J<=x.height-H&&N.readPixels(O,J,Q,H,me.convert(se),me.convert(de),Et)}finally{let Ht=w!==null?Vt.get(w).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(x,O,J,Q,H,Et,Pt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Vt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ot=Ot[Pt]),Ot){let Ht=x.texture,se=Ht.format,de=Ht.type;if(!qt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=x.width-Q&&J>=0&&J<=x.height-H){At.bindFramebuffer(N.FRAMEBUFFER,Ot);let zt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,zt),N.bufferData(N.PIXEL_PACK_BUFFER,Et.byteLength,N.STREAM_READ),N.readPixels(O,J,Q,H,me.convert(se),me.convert(de),0);let we=w!==null?Vt.get(w).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,we);let qe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await b1(N,qe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,zt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Et),N.deleteBuffer(zt),N.deleteSync(qe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,O=null,J=0){x.isTexture!==!0&&(Xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,x=arguments[1]);let Q=Math.pow(2,-J),H=Math.floor(x.image.width*Q),Et=Math.floor(x.image.height*Q),Pt=O!==null?O.x:0,Ot=O!==null?O.y:0;C.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,Pt,Ot,H,Et),At.unbindTexture()},this.copyTextureToTexture=function(x,O,J=null,Q=null,H=0){x.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,x=arguments[1],O=arguments[2],H=arguments[3]||0,J=null);let Et,Pt,Ot,Ht,se,de,zt,we,qe,Ze=x.isCompressedTexture?x.mipmaps[H]:x.image;J!==null?(Et=J.max.x-J.min.x,Pt=J.max.y-J.min.y,Ot=J.isBox3?J.max.z-J.min.z:1,Ht=J.min.x,se=J.min.y,de=J.isBox3?J.min.z:0):(Et=Ze.width,Pt=Ze.height,Ot=Ze.depth||1,Ht=0,se=0,de=0),Q!==null?(zt=Q.x,we=Q.y,qe=Q.z):(zt=0,we=0,qe=0);let Xn=me.convert(O.format),Le=me.convert(O.type),Xt;O.isData3DTexture?(C.setTexture3D(O,0),Xt=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Xt=N.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Xt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let Wi=N.getParameter(N.UNPACK_ROW_LENGTH),De=N.getParameter(N.UNPACK_IMAGE_HEIGHT),_i=N.getParameter(N.UNPACK_SKIP_PIXELS),Rr=N.getParameter(N.UNPACK_SKIP_ROWS),ti=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ze.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ht),N.pixelStorei(N.UNPACK_SKIP_ROWS,se),N.pixelStorei(N.UNPACK_SKIP_IMAGES,de);let Uo=x.isDataArrayTexture||x.isData3DTexture,$e=O.isDataArrayTexture||O.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){let Ii=Vt.get(x),Bo=Vt.get(O),di=Vt.get(Ii.__renderTarget),fs=Vt.get(Bo.__renderTarget);At.bindFramebuffer(N.READ_FRAMEBUFFER,di.__webglFramebuffer),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,fs.__webglFramebuffer);for(let ps=0;ps<Ot;ps++)Uo&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Vt.get(x).__webglTexture,H,de+ps),x.isDepthTexture?($e&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Vt.get(O).__webglTexture,H,qe+ps),N.blitFramebuffer(Ht,se,Et,Pt,zt,we,Et,Pt,N.DEPTH_BUFFER_BIT,N.NEAREST)):$e?N.copyTexSubImage3D(Xt,H,zt,we,qe+ps,Ht,se,Et,Pt):N.copyTexSubImage2D(Xt,H,zt,we,qe+ps,Ht,se,Et,Pt);At.bindFramebuffer(N.READ_FRAMEBUFFER,null),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else $e?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(Xt,H,zt,we,qe,Et,Pt,Ot,Xn,Le,Ze.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Xt,H,zt,we,qe,Et,Pt,Ot,Xn,Ze.data):N.texSubImage3D(Xt,H,zt,we,qe,Et,Pt,Ot,Xn,Le,Ze):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,zt,we,Et,Pt,Xn,Le,Ze.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,zt,we,Ze.width,Ze.height,Xn,Ze.data):N.texSubImage2D(N.TEXTURE_2D,H,zt,we,Et,Pt,Xn,Le,Ze);N.pixelStorei(N.UNPACK_ROW_LENGTH,Wi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,De),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_i),N.pixelStorei(N.UNPACK_SKIP_ROWS,Rr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ti),H===0&&O.generateMipmaps&&N.generateMipmap(Xt),At.unbindTexture()},this.copyTextureToTexture3D=function(x,O,J=null,Q=null,H=0){return x.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,x=arguments[2],O=arguments[3],H=arguments[4]||0),Xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,O,J,Q,H)},this.initRenderTarget=function(x){Vt.get(x).__webglFramebuffer===void 0&&C.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?C.setTextureCube(x,0):x.isData3DTexture?C.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?C.setTexture2DArray(x,0):C.setTexture2D(x,0),At.unbindTexture()},this.resetState=function(){T=0,A=0,w=null,At.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Re._getDrawingBufferColorSpace(t),e.unpackColorSpace=Re._getUnpackColorSpace()}};var so=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ir=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Q0=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=L0,this.updateRanges=[],this.version=0,this.uuid=As()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=As()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=As()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},On=new P,ml=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)On.fromBufferAttribute(this,e),On.applyMatrix4(t),this.setXYZ(e,On.x,On.y,On.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.applyNormalMatrix(t),this.setXYZ(e,On.x,On.y,On.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.transformDirection(t),this.setXYZ(e,On.x,On.y,On.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Di(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Di(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Di(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Di(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Di(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ws=class extends Rs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gr,ko=new P,Vr=new P,Wr=new P,Xr=new mt,Go=new mt,nf=new Ce,qa=new P,Vo=new P,Ya=new P,Td=new mt,Gc=new mt,Rd=new mt,sr=class extends Mn{constructor(t=new ws){if(super(),this.isSprite=!0,this.type="Sprite",Gr===void 0){Gr=new wn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Q0(e,5);Gr.setIndex([0,1,2,0,2,3]),Gr.setAttribute("position",new ml(i,3,0,!1)),Gr.setAttribute("uv",new ml(i,2,3,!1))}this.geometry=Gr,this.material=t,this.center=new mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vr.setFromMatrixScale(this.matrixWorld),nf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Wr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vr.multiplyScalar(-Wr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Za(qa.set(-.5,-.5,0),Wr,o,Vr,s,r),Za(Vo.set(.5,-.5,0),Wr,o,Vr,s,r),Za(Ya.set(.5,.5,0),Wr,o,Vr,s,r),Td.set(0,0),Gc.set(1,0),Rd.set(1,1);let a=t.ray.intersectTriangle(qa,Vo,Ya,!1,ko);if(a===null&&(Za(Vo.set(-.5,.5,0),Wr,o,Vr,s,r),Gc.set(0,1),a=t.ray.intersectTriangle(qa,Ya,Vo,!1,ko),a===null))return;let l=t.ray.origin.distanceTo(ko);l<t.near||l>t.far||e.push({distance:l,point:ko.clone(),uv:bs.getInterpolation(ko,qa,Vo,Ya,Td,Gc,Rd,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Za(n,t,e,i,s,r){Xr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Go.x=r*Xr.x-s*Xr.y,Go.y=s*Xr.x+r*Xr.y):Go.copy(Xr),n.copy(t),n.x+=Go.x,n.y+=Go.y,n.applyMatrix4(nf)}var gl=class extends Yn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=zn,h=zn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var is=class extends Yn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new mt:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new P,s=[],r=[],o=[],a=new P,l=new Ce;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Sn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Sn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},jo=class extends mi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},K0=class extends jo{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Th(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var $a=new P,Vc=new Th,Wc=new Th,Xc=new Th,ta=class extends mi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($a.subVectors(s[0],s[1]).add(s[0]),c=$a);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($a.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$a),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Vc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,v,g),Wc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,v,g),Xc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Wc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Xc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Vc.calc(l),Wc.calc(l),Xc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function wd(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function vE(n,t){let e=1-n;return e*e*t}function EE(n,t){return 2*(1-n)*n*t}function yE(n,t){return n*n*t}function Zo(n,t,e,i){return vE(n,t)+EE(n,e)+yE(n,i)}function _E(n,t){let e=1-n;return e*e*e*t}function ME(n,t){let e=1-n;return 3*e*e*n*t}function bE(n,t){return 3*(1-n)*n*n*t}function xE(n,t){return n*n*n*t}function $o(n,t,e,i,s){return _E(n,t)+ME(n,e)+bE(n,i)+xE(n,s)}var vl=class extends mi{constructor(t=new mt,e=new mt,i=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new mt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($o(t,s.x,r.x,o.x,a.x),$o(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},j0=class extends mi{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($o(t,s.x,r.x,o.x,a.x),$o(t,s.y,r.y,o.y,a.y),$o(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},El=class extends mi{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},th=class extends mi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yl=class extends mi{constructor(t=new mt,e=new mt,i=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new mt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Zo(t,s.x,r.x,o.x),Zo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends mi{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Zo(t,s.x,r.x,o.x),Zo(t,s.y,r.y,o.y),Zo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ml=class extends mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(wd(a,l.x,c.x,h.x,u.x),wd(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new mt().fromArray(s))}return this}},eh=Object.freeze({__proto__:null,ArcCurve:K0,CatmullRomCurve3:ta,CubicBezierCurve:vl,CubicBezierCurve3:j0,EllipseCurve:jo,LineCurve:El,LineCurve3:th,QuadraticBezierCurve:yl,QuadraticBezierCurve3:_l,SplineCurve:Ml}),nh=class extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new eh[s.type]().fromJSON(s))}return this}},ih=class extends nh{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new El(this.currentPoint.clone(),new mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new yl(this.currentPoint.clone(),new mt(t,e),new mt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new vl(this.currentPoint.clone(),new mt(t,e),new mt(i,s),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ml(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new jo(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ea=class n extends wn{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Sn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new P,f=new mt,d=new P,p=new P,v=new P,g=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-g,d.z=m*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(p)}for(let S=0;S<=e;S++){let b=i+S*h*s,E=Math.sin(b),R=Math.cos(b);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*E,u.y=t[T].y,u.z=t[T].x*R,o.push(u.x,u.y,u.z),f.x=S/e,f.y=T/(t.length-1),a.push(f.x,f.y);let A=l[3*T+0]*E,w=l[3*T+1],M=l[3*T+0]*R;c.push(A,w,M)}}for(let S=0;S<e;S++)for(let b=0;b<t.length-1;b++){let E=b+S*t.length,R=E,T=E+t.length,A=E+t.length+1,w=E+1;r.push(R,T,w),r.push(A,w,T)}this.setIndex(r),this.setAttribute("position",new Fe(o,3)),this.setAttribute("uv",new Fe(a,2)),this.setAttribute("normal",new Fe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},bl=class n extends ea{constructor(t=1,e=1,i=4,s=8){let r=new ih;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},In=class n extends wn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new P,h=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Fe(o,3)),this.setAttribute("normal",new Fe(a,3)),this.setAttribute("uv",new Fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Zn=class n extends wn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,v=[],g=i/2,m=0;S(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(f,3)),this.setAttribute("uv",new Fe(d,2));function S(){let E=new P,R=new P,T=0,A=(e-t)/i;for(let w=0;w<=r;w++){let M=[],_=w/r,I=_*(e-t)+t;for(let $=0;$<=s;$++){let G=$/s,U=G*l+a,z=Math.sin(U),D=Math.cos(U);R.x=I*z,R.y=-_*i+g,R.z=I*D,u.push(R.x,R.y,R.z),E.set(z,A,D).normalize(),f.push(E.x,E.y,E.z),d.push(G,1-_),M.push(p++)}v.push(M)}for(let w=0;w<s;w++)for(let M=0;M<r;M++){let _=v[M][w],I=v[M+1][w],$=v[M+1][w+1],G=v[M][w+1];(t>0||M!==0)&&(h.push(_,I,G),T+=3),(e>0||M!==r-1)&&(h.push(I,$,G),T+=3)}c.addGroup(m,T,0),m+=T}function b(E){let R=p,T=new mt,A=new P,w=0,M=E===!0?t:e,_=E===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,g*_,0),f.push(0,_,0),d.push(.5,.5),p++;let I=p;for(let $=0;$<=s;$++){let U=$/s*l+a,z=Math.cos(U),D=Math.sin(U);A.x=M*D,A.y=g*_,A.z=M*z,u.push(A.x,A.y,A.z),f.push(0,_,0),T.x=z*.5+.5,T.y=D*.5*_+.5,d.push(T.x,T.y),p++}for(let $=0;$<s;$++){let G=R+$,U=I+$;E===!0?h.push(U,U+1,G):h.push(U+1,U,G),w+=3}c.addGroup(m,w,E===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},si=class n extends Zn{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var re=class n extends wn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,f=new P,d=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){let S=[],b=m/i,E=0;m===0&&o===0?E=.5/e:m===i&&l===Math.PI&&(E=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+b*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(T+E,1-b),S.push(c++)}h.push(S)}for(let m=0;m<i;m++)for(let S=0;S<e;S++){let b=h[m][S+1],E=h[m][S],R=h[m+1][S],T=h[m+1][S+1];(m!==0||o>0)&&d.push(b,E,T),(m!==i-1||l<Math.PI)&&d.push(E,R,T)}this.setIndex(d),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(v,3)),this.setAttribute("uv",new Fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var pn=class n extends wn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=i;d++)for(let p=0;p<=s;p++){let v=p/s*r,g=d/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=s;p++){let v=(s+1)*d+p-1,g=(s+1)*(d-1)+p-1,m=(s+1)*(d-1)+p,S=(s+1)*d+p;o.push(v,g,S),o.push(g,m,S)}this.setIndex(o),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(l,3)),this.setAttribute("uv",new Fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var xl=class n extends wn{constructor(t=new _l(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new mt,h=new P,u=[],f=[],d=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(f,3)),this.setAttribute("uv",new Fe(d,2));function v(){for(let b=0;b<e;b++)g(b);g(r===!1?e:0),S(),m()}function g(b){h=t.getPointAt(b/e,h);let E=o.normals[b],R=o.binormals[b];for(let T=0;T<=s;T++){let A=T/s*Math.PI*2,w=Math.sin(A),M=-Math.cos(A);l.x=M*E.x+w*R.x,l.y=M*E.y+w*R.y,l.z=M*E.z+w*R.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=e;b++)for(let E=1;E<=s;E++){let R=(s+1)*(b-1)+(E-1),T=(s+1)*b+(E-1),A=(s+1)*b+E,w=(s+1)*(b-1)+E;p.push(R,T,w),p.push(T,A,w)}}function S(){for(let b=0;b<=e;b++)for(let E=0;E<=s;E++)c.x=b/e,c.y=E/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new eh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var pe=class extends Rs{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Yt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Ja(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function AE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ro=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sh=class extends ro{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fu,endingEnd:Fu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Iu:r=t,a=2*e-i;break;case Lu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Iu:o=t,l=2*i-e;break;case Lu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-e)/(s-e),v=p*p,g=v*p,m=-f*g+2*f*v-f*p,S=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*p+1,b=(-1-d)*g+(1.5+d)*v+.5*p,E=d*g-d*v;for(let R=0;R!==a;++R)r[R]=m*o[h+R]+S*o[c+R]+b*o[l+R]+E*o[u+R];return r}},rh=class extends ro{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},oh=class extends ro{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Si=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ja(e,this.TimeBufferType),this.values=Ja(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ja(t.times,Array),values:Ja(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new oh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case nl:e=this.InterpolantFactoryMethodDiscrete;break;case I0:e=this.InterpolantFactoryMethodLinear;break;case fc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nl;case this.InterpolantFactoryMethodLinear:return I0;case this.InterpolantFactoryMethodSmooth:return fc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&AE(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let v=e[u+p];if(v!==e[f+p]||v!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=I0;var rr=class extends Si{constructor(t,e,i){super(t,e,i)}};rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=nl;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var ah=class extends Si{};ah.prototype.ValueTypeName="color";var lh=class extends Si{};lh.prototype.ValueTypeName="number";var ch=class extends ro{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Al=class extends Si{InterpolantFactoryMethodLinear(t){return new ch(this.times,this.values,this.getValueSize(),t)}};Al.prototype.ValueTypeName="quaternion";Al.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends Si{constructor(t,e,i){super(t,e,i)}};or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=nl;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var hh=class extends Si{};hh.prototype.ValueTypeName="vector";var uh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}},SE=new uh,dh=class{constructor(t){this.manager=t!==void 0?t:SE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};dh.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends Mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},oo=class extends ar{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},qc=new Ce,Cd=new P,Pd=new P,na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Cd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cd),Pd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pd),e.updateMatrixWorld(),qc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fh=class extends na{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=sl*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ao=class extends ar{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Fd=new Ce,Wo=new P,Yc=new P,ph=class extends na{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Wo.setFromMatrixPosition(t.matrixWorld),i.position.copy(Wo),Yc.copy(i.position),Yc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Yc),i.updateMatrixWorld(),s.makeTranslation(-Wo.x,-Wo.y,-Wo.z),Fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd)}},bn=class extends ar{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ph}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},mh=class extends na{constructor(){super(new no(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sl=class extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new mh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},$n=class extends ar{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Tl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Id(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Id();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Id(){return 0}var Rh="\\[\\]\\.:\\/",TE=new RegExp("["+Rh+"]","g"),wh="[^"+Rh+"]",RE="[^"+Rh.replace("\\.","")+"]",wE=/((?:WC+[\/:])*)/.source.replace("WC",wh),CE=/(WCOD+)?/.source.replace("WCOD",RE),PE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),FE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),IE=new RegExp("^"+wE+CE+PE+FE+"$"),LE=["material","materials","bones","map"],gh=class{constructor(t,e,i){let s=i||tn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},tn=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(TE,"")}static parseTrackName(t){let e=IE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);LE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tn.Composite=gh;tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tn.prototype.GetterByBindingType=[tn.prototype._getValue_direct,tn.prototype._getValue_array,tn.prototype._getValue_arrayElement,tn.prototype._getValue_toArray];tn.prototype.SetterByBindingTypeAndVersioning=[[tn.prototype._setValue_direct,tn.prototype._setValue_direct_setNeedsUpdate,tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_array,tn.prototype._setValue_array_setNeedsUpdate,tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_arrayElement,tn.prototype._setValue_arrayElement_setNeedsUpdate,tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_fromArray,tn.prototype._setValue_fromArray_setNeedsUpdate,tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ay=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);var Pl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ss=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},DE=new no(-1,1,1,-1,0,1),Ch=class extends wn{constructor(){super(),this.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Fe([0,2,0,0,2,0],2))}},UE=new Ch,ho=class{constructor(t){this._mesh=new at(UE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,DE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var lr=class extends ss{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof cn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=lo.clone(t.uniforms),this.material=new cn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ho(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ia=class extends ss{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Fl=class extends ss{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Il=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new mt);this._width=i.width,this._height=i.height,e=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lr(Pl),this.copyPass.material.blending=Bi,this.clock=new Tl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ia!==void 0&&(o instanceof ia?i=!0:o instanceof Fl&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var sf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var uo=class n extends ss{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new mt(t.x,t.y):new mt(256,256),this.clearColor=new Yt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(r,o,{type:Jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new _n(r,o,{type:Jn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new _n(r,o,{type:Jn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=sf;this.highPassUniforms=lo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new cn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new mt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Pl;this.copyUniforms=lo.clone(h.uniforms),this.blendMaterial=new cn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Oi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Yt,this.oldClearAlpha=1,this.basic=new Me,this.fsQuad=new ho(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new mt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new cn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new mt(.5,.5)},direction:{value:new mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new cn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};uo.BlurDirectionX=new mt(1,0);uo.BlurDirectionY=new mt(0,1);var rs=1920,os=1080;function xe(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var yt=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),V=(n,t,e)=>n+(t-n)*e,j=(n,t,e)=>{let i=yt((e-n)/(t-n));return i*i*(3-2*i)},Ue=n=>1-Math.pow(1-yt(n),3),gi=n=>Math.pow(yt(n),3),Dl=n=>(n=yt(n),n*n*(3-2*n));function Ul(n,t){if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){let i=Dl((t-n[e-1][0])/(n[e][0]-n[e-1][0])),s=n[e-1][1],r=n[e][1];return Array.isArray(s)?s.map((o,a)=>V(o,r[a],i)):V(s,r,i)}return n[n.length-1][1]}var BE={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new mt(rs,os)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){if(maxBlur<.6){gl_FragColor=vec4(texture2D(tColor,vUv).rgb,1.);return;}float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<44;i++){float fi=float(i);float r=sqrt(fi/44.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},NE={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new Yt(1,1,1)},sat:{value:1},flash:{value:0},toon:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash,toon;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=mix(aces(c*.88),c/(1.+.18*c),toon);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(1.,.66);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1920.,1080.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Ll=class{constructor(t){let e=this.r=new pl({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(rs,os,!1),e.shadowMap.enabled=!0,e.shadowMap.type=Eh,e.toneMapping=Ni,e.outputColorSpace=Cs;let i=new io(rs,os);i.type=ns,this.rt=new _n(rs,os,{type:Jn,samples:4,depthTexture:i}),this.composer=new Il(e,new _n(rs,os,{type:Jn})),this.dof=new lr(BE,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new uo(new mt(rs/2,os/2),.45,.75,.82),this.grade=new lr(NE),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(o=>t>=o.t0&&t<o.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let i=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.toon.value=i.toon??0,r.frame.value=Math.floor(t*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function rf(n,t,e,i=40){let s=new ir;s.background=new Yt(e);let r=new Tn(i,rs/os,.08,400);return{t0:n,t1:t,scene:s,camera:r,update(){return{}}}}function of(n,t,e,i=0){n.position.set(t[0],t[1],t[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(e[0],e[1],e[2])}var sa=new P;function vi(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;sa.copy(t),sa[i]=0,sa.normalize();let c=.5*o/(o+a),h=1-sa.angleTo(n)/l;return Math.sign(sa[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Bl=class extends be{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new P,l=new P,c=new P(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,p=new P,v=.5/s;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*r,h[g+1]=c.y*Math.sign(a.y)+l.y*r,h[g+2]=c.z*Math.sign(a.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/d)){case 0:p.set(1,0,0),f[m+0]=vi(p,l,"z","y",r,i),f[m+1]=1-vi(p,l,"y","z",r,e);break;case 1:p.set(-1,0,0),f[m+0]=1-vi(p,l,"z","y",r,i),f[m+1]=1-vi(p,l,"y","z",r,e);break;case 2:p.set(0,1,0),f[m+0]=1-vi(p,l,"x","z",r,t),f[m+1]=vi(p,l,"z","x",r,i);break;case 3:p.set(0,-1,0),f[m+0]=1-vi(p,l,"x","z",r,t),f[m+1]=1-vi(p,l,"z","x",r,i);break;case 4:p.set(0,0,1),f[m+0]=1-vi(p,l,"x","y",r,t),f[m+1]=1-vi(p,l,"y","x",r,e);break;case 5:p.set(0,0,-1),f[m+0]=vi(p,l,"x","y",r,t),f[m+1]=1-vi(p,l,"y","x",r,e);break}}};var Ps=null;function Lh(){if(Ps)return Ps;let n=new Uint8Array([118,118,118,255,196,196,196,255,255,255,255,255]);return Ps=new gl(n,3,1,ii),Ps.minFilter=Ps.magFilter=zn,Ps.generateMipmaps=!1,Ps.needsUpdate=!0,Ps}var Ph=new Map;function kt(n,t){if(!t){let e=String(n);if(Ph.has(e))return Ph.get(e);let i=new pe({color:n,gradientMap:Lh()});return Ph.set(e,i),i}return new pe({color:n,gradientMap:Lh(),...t})}var OE=`uniform float w; uniform float minPx; uniform vec2 res;
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
}`,HE="uniform vec3 col; uniform float op; void main(){ gl_FragColor = vec4(col, op); }",Fh=new Map;function zE(n=.014,t="#17131C",e=1.6){let i=n+t+e;if(Fh.has(i))return Fh.get(i);let s=new cn({uniforms:{w:{value:n},minPx:{value:e},res:{value:new mt(rs,os)},col:{value:new Yt(t).convertSRGBToLinear()},op:{value:1}},vertexShader:OE,fragmentShader:HE,side:yn});return Fh.set(i,s),s}function Nl(n,t=.014,e,i){let s=new at(n.geometry,zE(t,e,i));return s.castShadow=!1,s.receiveShadow=!1,s.userData.isOutline=!0,n.add(s),n}function Qe(n,t,e={}){let i=new at(n,t&&t.isMaterial?t:kt(t));return i.castShadow=e.shadow??!0,i.receiveShadow=!0,e.out&&Nl(i,e.out===!0?.014:e.out,e.outCol,e.minPx),e.pos&&i.position.set(...e.pos),e.rot&&i.rotation.set(...e.rot),i}var fo=(n,t,e,i=.04,s=3)=>new Bl(n,t,e,s,Math.min(i,n/2-.001,t/2-.001,e/2-.001));function ft(n,t,e,i,s=0,r=0,o=0,a={}){return Qe(fo(n,t,e,a.r??Math.min(.05,Math.min(n,t,e)*.18)),i,{pos:[s,r,o],...a})}function tt(n,t,e,i,s=0,r=0,o=0,a={}){return Qe(new be(n,t,e),i,{pos:[s,r,o],...a})}function bt(n,t,e,i,s=0,r=0,o=0,a={}){return Qe(new Zn(n,t,e,a.seg||24),i,{pos:[s,r,o],...a})}function Ie(n,t,e=0,i=0,s=0,r={}){return Qe(new re(n,r.seg||24,Math.max(12,(r.seg||24)*.6|0)),t,{pos:[e,i,s],...r})}function ne(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t;let s=i.getContext("2d");e(s,n,t);let r=new is(i);return r.colorSpace=un,r.anisotropy=8,r}var Ee=(n,t={})=>new pe({map:n,gradientMap:Lh(),...t}),Ih=null;function Dh(n=.32,t=.38){Ih||(Ih=ne(128,128,i=>{let s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(20,16,30,1)"),s.addColorStop(.55,"rgba(20,16,30,.55)"),s.addColorStop(1,"rgba(20,16,30,0)"),i.fillStyle=s,i.fillRect(0,0,128,128)}));let e=new at(new $t(n*2,n*2),new Me({map:Ih,transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return e.rotation.x=-Math.PI/2,e.renderOrder=1,e}function Ti(n,t={}){let e=new oo(t.sky||"#EAF2FF",t.ground||"#B9A898",t.hemi??1.5);n.add(e);let i=new Sl(t.key||"#FFF4E2",t.ki??2.2);i.position.set(...t.pos||[6,10,7]),i.castShadow=t.shadow??!0,i.shadow.mapSize.set(2048,2048);let s=t.r||12;return Object.assign(i.shadow.camera,{left:-s,right:s,top:s,bottom:-s,near:.5,far:t.far||60}),i.shadow.bias=-4e-4,i.shadow.normalBias=.02,i.shadow.radius=3,t.target&&(i.target.position.set(...t.target),n.add(i.target),i.position.set(t.target[0]+(t.pos||[6,10,7])[0],t.target[1]+(t.pos||[6,10,7])[1],t.target[2]+(t.pos||[6,10,7])[2])),n.add(i),{hemi:e,k:i}}var af=(n={})=>({toon:1,blur:0,bloom:.18,bloomT:.95,bloomR:.4,vig:.22,exposure:1,sat:1.05,...n});var kn=Math.PI/180,en=.3,kE=.012,xn={phi0:Math.PI/2-1,phiL:2,th0:.62,thL:1.55,W:1024,H:512},oe=n=>xn.W/2+n/xn.phiL*xn.W,ie=n=>(n-xn.th0)/xn.thL*xn.H,ri=n=>n/xn.phiL*xn.W,Ln=n=>n/xn.thL*xn.H,cr="#1B1420";function GE(n,t,e){n.clearRect(0,0,xn.W,xn.H),n.lineCap="round",n.lineJoin="round";let i=t.emo||"neutro",s=1.45,r=.31;if(t.blush||i==="feliz"||i==="apaixonado"||i==="vergonha"){n.fillStyle="rgba(240,110,110,"+(i==="vergonha"?.55:.3)+")";for(let E of[-1,1])n.beginPath(),n.ellipse(oe(E*.44),ie(1.7),ri(.075),Ln(.045),0,0,7),n.fill()}let o=yt(Math.max(t.blink||0,i==="sono"?.55:i==="triste"||i==="choro"?.22:i==="bravo"?.25:i==="desconfiado"?.4:i==="tedio"?.5:0)),a=i==="surpreso"||i==="medo"?1.15:1;for(let E of[-1,1]){let R=oe(E*r),T=ie(s),A=ri(.128)*a,w=Ln(.158)*a;if(i==="feliz"&&!t.olhosAbertos||(t.blink||0)>.92){n.strokeStyle=cr,n.lineWidth=11,n.beginPath(),i==="feliz"||i==="rindo"?n.arc(R,T+w*.25,A*.85,Math.PI*1.12,Math.PI*1.88):(n.moveTo(R-A*.9,T+w*.15),n.quadraticCurveTo(R,T+w*.55,R+A*.9,T+w*.15)),n.stroke();continue}n.save(),n.beginPath(),n.ellipse(R,T,A,w,0,0,7),n.clip(),n.fillStyle="#FFFFFF",n.fillRect(R-A,T-w,A*2,w*2);let M=i==="surpreso"||i==="medo"?.55:.68,_=yt(e[0],-1,1),I=yt(e[1],-1,1),$=R+_*A*.38,G=T+I*w*.32+w*.06;n.fillStyle="#231A26",n.beginPath(),n.ellipse($,G,A*M,w*M*.98,0,0,7),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.ellipse($-A*.22,G-w*.28,A*.2,w*.17,0,0,7),n.fill(),n.beginPath(),n.ellipse($+A*.2,G+w*.22,A*.08,w*.07,0,0,7),n.fill();let U=i==="bravo"?-E*.45:i==="triste"||i==="choro"||i==="preocupado"?E*.35:0;if(o>.02||U){let z=T-w+w*2*o;n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.moveTo(R-A*1.2,T-w*1.3),n.lineTo(R+A*1.2,T-w*1.3),n.lineTo(R+A*1.2,z+Math.tan(U)*A*1.2),n.lineTo(R-A*1.2,z-Math.tan(U)*A*1.2),n.closePath(),n.fill(),n.strokeStyle=cr,n.lineWidth=8,n.beginPath(),n.moveTo(R-A*1.1,z-Math.tan(U)*A*1.1),n.lineTo(R+A*1.1,z+Math.tan(U)*A*1.1),n.stroke()}n.restore(),n.strokeStyle=cr,n.lineWidth=8,n.beginPath(),n.ellipse(R,T,A,w,0,0,7),n.stroke(),t.cilios&&(n.lineWidth=7,n.beginPath(),n.moveTo(R+E*A*.7,T-w*.72),n.lineTo(R+E*A*1.15,T-w*1.02),n.stroke())}if(i==="choro"||t.lagrima){n.fillStyle="rgba(120,200,255,.85)";for(let E of[-1,1]){let R=oe(E*r),T=ie(s)+Ln(.12);n.beginPath(),n.moveTo(R-ri(.02),T),n.quadraticCurveTo(R,T+Ln(.22),R+ri(.02),T),n.fill(),n.beginPath(),n.ellipse(R,T+Ln(.2),ri(.028),Ln(.035),0,0,7),n.fill()}}let l={neutro:[0,0],feliz:[.04,-.1],rindo:[.04,-.1],triste:[.02,.45],choro:[.03,.5],bravo:[-.03,-.55],surpreso:[.09,0],medo:[.08,.4],preocupado:[.04,.38],desconfiado:[-.01,-.2],sono:[-.01,.1],vergonha:[.03,.3],determinado:[-.02,-.35],tedio:[-.01,.05],apaixonado:[.05,.2]}[i]||[0,0],c=l[0]+(t.brow||0)*.05,h=l[1];n.strokeStyle=t.sobr||cr,n.lineWidth=t.sobrW||15;for(let E of[-1,1]){let R=oe(E*r),T=ie(s-.2-c),A=ri(.085),w=E*h*.5;n.beginPath(),n.moveTo(R-A*Math.cos(w),T-A*Math.sin(w)*(E<0,1)),n.quadraticCurveTo(R,T-Ln(.025),R+A*Math.cos(w),T+A*Math.sin(w)),n.stroke()}if(t.rugas){n.strokeStyle="rgba(90,50,40,.5)",n.lineWidth=5;for(let E of[-1,1]){let R=oe(E*(r+.17));for(let T=0;T<3;T++)n.beginPath(),n.moveTo(R,ie(s-.05+T*.06)),n.lineTo(R+E*ri(.05),ie(s-.07+T*.07)),n.stroke()}n.beginPath(),n.moveTo(oe(-.12),ie(1.12)),n.quadraticCurveTo(oe(0),ie(1.09),oe(.12),ie(1.12)),n.stroke()}if(t.oculosEscuros){n.fillStyle="#15121A";for(let E of[-1,1])n.beginPath(),n.ellipse(oe(E*r),ie(s+.02),ri(.16),Ln(.13),0,0,7),n.fill();n.strokeStyle="#15121A",n.lineWidth=10,n.beginPath(),n.moveTo(oe(-r+.14),ie(s)),n.lineTo(oe(r-.14),ie(s)),n.stroke(),n.fillStyle="rgba(255,255,255,.35)";for(let E of[-1,1])n.beginPath(),n.ellipse(oe(E*r-.05),ie(s-.03),ri(.04),Ln(.025),-.5,0,7),n.fill()}if(t.oculos){n.strokeStyle="#6A4A3A",n.lineWidth=8;for(let E of[-1,1])n.beginPath(),n.ellipse(oe(E*r),ie(s),ri(.15),Ln(.16),0,0,7),n.stroke();n.beginPath(),n.moveTo(oe(-r+.15),ie(s-.02)),n.quadraticCurveTo(oe(0),ie(s-.08),oe(r-.15),ie(s-.02)),n.stroke()}t.nariz&&(n.strokeStyle="rgba(60,30,30,.55)",n.lineWidth=7,n.beginPath(),n.arc(oe(0),ie(1.66),ri(.035),.2,Math.PI-.2),n.stroke());let u=t.mouth||{},f=yt(u.open||0),d=yt(u.round||0),p=u.smile??({feliz:.8,rindo:.9,triste:-.6,choro:-.7,bravo:-.4,medo:-.3,preocupado:-.35,apaixonado:.6,vergonha:.3,determinado:-.05,desconfiado:-.15,tedio:-.2}[i]||0),v=ie(t.bigode?1.93:1.88),g=oe(0),m=ri(.15+.05*(1-d)+(i==="rindo"?.04:0)),S=v-p*Ln(.035),b=()=>{if(f<.07)n.strokeStyle=cr,n.lineWidth=11,n.beginPath(),n.moveTo(g-m*.85,S),n.quadraticCurveTo(g,v+p*Ln(.075),g+m*.85,S),n.stroke();else{let E=Ln(.05+.2*f),R=m*(1-.38*d);n.beginPath(),d>.55?n.ellipse(g,v+E*.35,R*.75,E*.62,0,0,7):(n.moveTo(g-R,S),n.quadraticCurveTo(g,v+p*Ln(.03)-E*.12,g+R,S),n.bezierCurveTo(g+R*.95,S+E*1.25,g-R*.95,S+E*1.25,g-R,S),n.closePath()),n.fillStyle="#5A1E2A",n.fill(),n.save(),n.clip(),f>.28&&d<.55&&(n.fillStyle="#FFFFFF",n.fillRect(g-R,S-E,R*2,E*1.18)),n.fillStyle="#E8707E",n.beginPath(),n.ellipse(g,S+E*1.05,R*.58,E*.42,0,0,7),n.fill(),n.restore(),n.strokeStyle=cr,n.lineWidth=9,n.stroke()}};if(t.barba||b(),t.barba&&(n.fillStyle=t.barba,n.globalAlpha=.92,n.beginPath(),n.moveTo(oe(-.44),ie(1.5)),n.quadraticCurveTo(oe(-.46),ie(2.05),oe(0),ie(2.2)),n.quadraticCurveTo(oe(.46),ie(2.05),oe(.44),ie(1.5)),n.quadraticCurveTo(oe(.36),ie(1.78),oe(.2),ie(1.8)),n.quadraticCurveTo(oe(0),ie(1.72),oe(-.2),ie(1.8)),n.quadraticCurveTo(oe(-.36),ie(1.78),oe(-.44),ie(1.5)),n.fill(),n.globalAlpha=1,n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.ellipse(g,v+Ln(.03),m*1.15,Ln(.09+.12*f),0,0,7),n.fill(),b()),t.olheiras){n.strokeStyle="rgba(90,60,90,.45)",n.lineWidth=7;for(let E of[-1,1])n.beginPath(),n.arc(oe(E*.31),ie(1.5),ri(.1),.35,Math.PI-.35),n.stroke()}if(t.sardas){n.fillStyle="rgba(150,80,50,.55)";for(let E of[-1,1])for(let R=0;R<5;R++)n.beginPath(),n.arc(oe(E*(.36+R%3*.05)),ie(1.66+Math.floor(R/3)*.05+R%2*.02),4.5,0,7),n.fill()}t.bigode&&(n.fillStyle=t.bigode,n.strokeStyle=cr,n.lineWidth=6,n.beginPath(),n.moveTo(oe(0),ie(1.76)),n.bezierCurveTo(oe(.12),ie(1.7),oe(.24),ie(1.76),oe(.27),ie(1.9)),n.bezierCurveTo(oe(.17),ie(1.84),oe(.08),ie(1.87),oe(0),ie(1.83)),n.bezierCurveTo(oe(-.08),ie(1.87),oe(-.17),ie(1.84),oe(-.27),ie(1.9)),n.bezierCurveTo(oe(-.24),ie(1.76),oe(-.12),ie(1.7),oe(0),ie(1.76)),n.fill(),n.stroke())}var lf={},oi=0,Fs=(n,t)=>{let e="c"+n+t+oi;return lf[e]||(lf[e]=new bl(n,t,oi?3:6,oi?10:18))};function cf(n,t=.82,e=36){let i=new ea(n.map(([l,c])=>new mt(l,c)),e,Math.PI,Math.PI*2);i.applyMatrix4(new Ce().makeScale(1,1,t));let s=i.attributes.position,r=i.attributes.uv,o=1e9,a=-1e9;for(let l=0;l<s.count;l++)o=Math.min(o,s.getY(l)),a=Math.max(a,s.getY(l));for(let l=0;l<s.count;l++)r.setY(l,(s.getY(l)-o)/(a-o));return i.computeVertexNormals(),i}var VE={magro:[[0,.5],[.14,.5],[.165,.53],[.172,.62],[.172,.72],[.165,.8],[.14,.86],[.09,.895],[.04,.905],[0,.906]],barriga:[[0,.47],[.16,.47],[.2,.52],[.225,.6],[.225,.68],[.205,.77],[.17,.845],[.11,.89],[.04,.905],[0,.906]],senhora:[[0,.5],[.15,.5],[.17,.55],[.175,.64],[.17,.74],[.16,.81],[.13,.865],[.08,.898],[0,.906]]},WE=[[0,.24],[.25,.24],[.245,.26],[.22,.36],[.19,.5],[.165,.62],[0,.62]];function Uh(n={}){oi=n.simples?1:0;let t=n.pele||"#C98B5E",e=n.camisa||"#E8453C",i=n.calca||"#2E4A7A",s=n.tenis||"#F4F1EA",r=new it,o=new it;r.add(o);let a=new it;a.position.y=.52,o.add(a);let l=(U,z,D,q,k=kE)=>{let ot=new at(z,typeof D=="string"?kt(D):D);return ot.castShadow=!0,ot.receiveShadow=!0,q&&ot.position.set(...q),k&&Nl(ot,k),U.add(ot),ot},c=ne(1024,512,(U,z,D)=>{U.fillStyle=e,U.fillRect(0,0,z,D),n.estampa&&n.estampa(U,z,D)}),h=Ee(c),u=l(a,cf(VE[n.tronco||"magro"]),h,[0,-.52,0]);n.saia&&l(a,cf(WE,.86),n.saia,[0,-.52,0]),l(a,new Zn(.06,.065,.1,16),t,[0,.4,0],0);let f=new it;f.position.y=.38,a.add(f);let d=l(f,new re(en,oi?24:48,oi?16:32),t,[0,en*.86,0]);d.receiveShadow=!1;for(let U of[-1,1])l(f,new re(.055,16,12),t,[U*en*.96,en*.82,-.01]).scale.set(.6,1,.9);let p=document.createElement("canvas");p.width=xn.W>>oi,p.height=xn.H>>oi;let v=p.getContext("2d");oi&&v.scale(.5,.5);let g=new is(p);g.colorSpace=un,g.anisotropy=8;let m=new pe({map:g,gradientMap:kt("#fff").gradientMap,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),S=new at(new re(en*1.002,oi?24:48,oi?16:32,xn.phi0,xn.phiL,xn.th0,xn.thL),m);S.position.y=en*.86,S.renderOrder=2,f.add(S);let b=n.corCabelo||"#1E1618",E=new it;if(E.position.y=en*.86,f.add(E),n.cabelo==="cacheado"){let U=new re(1,oi?8:14,oi?6:10),z=0;for(let D=0;D<70;D++){let q=Math.acos(1-2*((D+.5)/70)),k=D*2.39996,ot=Math.cos(q),pt=Math.sin(q),Rt=Math.cos(k)*pt,Nt=Math.sin(k)*pt;if(ot<.28&&Nt>-.2||ot<-.25||Nt>.55&&ot<.62||Math.abs(Rt)>.8&&ot<.45&&Nt>-.5)continue;let _e=.075+D*37%10/10*.03,st=l(E,U,b,[Rt*en*.98,ot*en*.98+.01,Nt*en*.98],.009);st.scale.setScalar(_e),st.castShadow=!1,z++}}else if(n.cabelo==="tigela"||n.cabelo==="rabo"||n.cabelo==="coque"){if(l(E,new re(en*1.04,40,28),b,[0,.055,-.065]),n.cabelo==="rabo"){let U=l(E,Fs(.085,.26),b,[0,.06,-.42]);U.rotation.x=.75;let z=l(E,new re(.1,18,14),b,[0,-.07,-.5]);l(E,new re(.065,16,12),n.laco||"#F25C8A",[0,.22,-.31]);for(let D of[-1,1]){let q=l(E,Fs(.06,.2),b,[D*.27,-.08,.02]);q.rotation.z=-D*.08}}n.cabelo==="coque"&&l(E,new re(.12,24,16),b,[0,.3,-.12]);for(let U=-2;U<=2;U++)l(E,new re(.075,16,12),b,[U*.07,.2-Math.abs(U)*.025,.2-Math.abs(U)*.02],.008).scale.set(1,.8,.7)}else if(n.cabelo==="careca")for(let U of[-1,1])for(let z=0;z<4;z++){let D=-.6-z*.35;l(E,new re(.07,14,10),b,[U*Math.cos(D)*en*.93*(z<3?1:.9),-.02,Math.sin(D)*en*.93+.12],.008).scale.set(1,1.2,1)}if(n.cabelo==="topete"){l(E,new re(en*1.03,40,28,0,Math.PI*2,0,1.45),b,[0,.03,-.05]),l(E,new re(en*1.035,48,32,Math.PI+.18,Math.PI-.36,0,2.3),b,[0,0,0],.008);for(let z=0;z<5;z++)l(E,new si(.085,.22,10),b,[(z-2)*.075,.27-Math.abs(z-2)*.02,.12-Math.abs(z-2)*.02],.008).rotation.set(1.05,0,-(z-2)*.22);l(E,new re(.16,18,12),b,[0,.26,.05],.008).scale.set(1.2,.6,1.1)}else if(n.cabelo==="curto")l(E,new re(en*1.025,40,28,0,Math.PI*2,0,1.3),b,[0,.025,-.03]),l(E,new re(en*1.03,48,32,Math.PI+.18,Math.PI-.36,0,2.25),n.corCabelo2||b,[0,0,0],.008);else if(n.cabelo==="chanel"){l(E,new re(en*1.06,40,28),b,[0,.05,-.07]);for(let z of[-1,1])l(E,new re(.2,20,14),b,[z*.25,-.12,-.06]).scale.set(.55,1.15,1);l(E,new re(.26,24,14),b,[0,.19,.12],.008).scale.set(1.05,.42,.6)}else if(n.cabelo==="afro"&&(l(E,new re(en*1.32,40,28),b,[0,.14,-.1]).scale.set(1.08,1,1),n.faixa)){let z=l(E,new pn(en*1.02,.035,10,40),n.faixa,[0,.1,0],.006);z.rotation.x=Math.PI/2-.25}if(n.brincos)for(let U of[-1,1])l(f,new re(.03,12,10),n.brincos,[U*en*1,en*.62,.02],.005);if(n.bone){let U=l(E,new re(en*1.05,32,16,0,Math.PI*2,0,1.25),n.bone,[0,.03,-.01]),z=l(E,fo(.36,.03,.22,.012),n.bone,[0,.12,n.boneTras?-.32:.3])}let R=U=>{let z=new it;z.position.set(U*.185,.3,0),a.add(z);let D=n.manga==="regata",q=D||(n.manga||"curta")==="curta";D?l(z,Fs(.06,.17),t,[0,-.1,0]):l(z,Fs(q?.064:.058,q?.07:.17),e,[0,q?-.055:-.1,0]),q&&!D&&l(z,Fs(.05,.15),t,[0,-.11,0]);let k=new it;k.position.y=-.21,z.add(k),l(k,Fs(.048,.14),q?t:e,[0,-.085,0]);let ot=new it;ot.position.y=-.2,k.add(ot);let pt=new re(.062,20,14);return l(ot,pt,n.luva||t,[0,-.01,0]).scale.set(.85,1.05,.8),l(ot,new re(.026,12,10),n.luva||t,[-U*.045,.02,.03],.007),n.forte&&(z.children.forEach(Nt=>Nt.isMesh&&Nt.scale.set(n.forte,1,n.forte)),k.children.forEach(Nt=>Nt.isMesh&&Nt.scale.set(n.forte*.92,1,n.forte*.92))),{sh:z,el:k,hand:ot}},T=R(1),A=R(-1),w=U=>{let z=new it;z.position.set(U*.085,.52,0),o.add(z),l(z,Fs(.07,.17),n.saia?t:i,[0,-.11,0]);let D=new it;D.position.y=-.22,z.add(D),l(D,Fs(.063,.16),n.meia||(n.saia?t:i),[0,-.1,0]);let q=new it;q.position.y=-.22,D.add(q);let k=l(q,fo(.13,.095,.23,.045),s,[0,-.037,.035]);return n.sola!==!1&&l(q,fo(.135,.03,.235,.014),n.sola||"#FFFFFF",[0,-.075,.035],.006),{hp:z,kn:D,an:q}},M=w(1),_=w(-1),I=Dh(.36,.4);I.position.y=.006,r.add(I),n.escala&&r.scale.setScalar(n.escala),E.traverse(U=>{U.isMesh&&(U.castShadow=!1)});let $={look:[0,0],key:""},G={root:r,pelvis:o,torsoG:a,headG:f,head:d,hair:E,torso:u,hands:{L:T.hand,R:A.hand},arms:{L:T,R:A},legs:{L:M,R:_},sombra:I,place(U,z,D=0,q=0){return r.position.set(U,D,z),r.rotation.y=q,G},pose(U={}){o.position.y=U.bob||0,o.position.z=U.dz||0,a.rotation.set((U.lean||0)*kn,(U.twist||0)*kn,(U.tilt||0)*kn),f.rotation.set((U.headX||0)*kn,(U.headY||0)*kn,(U.headZ||0)*kn);let z=(q,k,ot,pt)=>{q.sh.rotation.set(-(k[0]||0)*kn,(k[2]||0)*kn*pt,pt*(k[1]??8)*kn),q.el.rotation.set(-(ot||0)*kn,0,0)};z(T,U.shL||[0,8],U.elL??8,1),z(A,U.shR||[0,8],U.elR??8,-1);let D=(q,k,ot,pt)=>{q.hp.rotation.set(-(k[0]||0)*kn,0,pt*(k[1]||0)*kn),q.kn.rotation.set((ot||0)*kn,0,0),q.an.rotation.set(-(k[0]||0)*kn*0+(ot||0)*kn*-.4*(k[2]??1),0,0)};return D(M,U.hipL||[0,0],U.knL||0,1),D(_,U.hipR||[0,0],U.knR||0,-1),G},face(U={}){let z=U.look||[0,0],D=U.mouth||{},q=(ot,pt=20)=>Math.round((ot||0)*pt),k=[U.emo,q(U.blink,10),q(z[0],8),q(z[1],8),q(D.open,12),q(D.round,6),D.smile===void 0?"u":q(D.smile,8),q(U.brow,6),U.lagrima?1:0,U.olhosAbertos?1:0].join("|");return k!==$.key&&($.key=k,GE(v,{...n.rosto,...U,pele:t,oculos:n.oculos,rugas:n.rugas,oculosEscuros:n.oculosEscuros,bigode:n.bigode,barba:n.barba,olheiras:n.olheiras,sardas:n.sardas,nariz:n.nariz,cilios:n.cilios,sobr:n.sobr,sobrW:n.sobrW},z),g.needsUpdate=!0),G},faceTo(U,z){return r.rotation.y=Math.atan2(U-r.position.x,z-r.position.z),G},hold(U,z="R"){return G.hands[z].add(U),U}};return G.estatua=(U="#A9A49C")=>{G.congelado=!0;let z=kt(U);return r.traverse(D=>{D.isMesh&&!D.userData.isOutline&&D!==I&&D!==S&&(D.material=z)}),m.color.set("#B8B4AC"),G},G.pose({}),G.face({}),G}function Bh(n,t=1.8,e=1,i=0){let s=(n*t+i)*Math.PI*2,r=Math.sin(s),o=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.025*e-.012,lean:4*e,twist:r*4*e,hipL:[28*r*e,0],hipR:[-28*r*e,0],knL:Math.max(0,-o)*45*e+5,knR:Math.max(0,o)*45*e+5,shL:[-24*r*e,7],shR:[24*r*e,7],elL:18+Math.max(0,-r)*18,elR:18+Math.max(0,r)*18,headX:-2}}function Nh(n,t=2.9,e=1,i=0){let s=(n*t+i)*Math.PI*2,r=Math.sin(s),o=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.06*e-.02,lean:16*e,twist:r*7*e,hipL:[50*r*e+8,0],hipR:[-50*r*e+8,0],knL:(Math.max(0,-o)*85+18)*e,knR:(Math.max(0,o)*85+18)*e,shL:[-45*r*e,10],shR:[45*r*e,10],elL:85,elR:85,headX:-10*e}}function hf(n,t=0){let e=3.1+t%5*.37,i=(n+t*.77)%e/e*e;return i<.07?i/.07:i<.14?1-(i-.07)/.07:0}var Hl=(n,t=.9)=>(e,i,s)=>{e.fillStyle=n,e.fillRect(0,s*t,i,s*(1-t))},XE={pele:"#E3AE86",cabelo:"topete",corCabelo:"#4A2A18",nariz:!0,sobr:"#3A2014"},uf=(n,t,e)=>{n.fillStyle="#80868E",n.beginPath(),n.roundRect(t*.3,e*.56,t*.4,e*.3,26),n.fill(),n.strokeStyle="#6C727A",n.lineWidth=6,n.beginPath(),n.moveTo(t*.33,e*.6),n.lineTo(t*.33,e*.82),n.moveTo(t*.67,e*.6),n.lineTo(t*.67,e*.82),n.stroke(),n.strokeStyle="#F4F1EA",n.lineWidth=7;for(let i of[-1,1])n.beginPath(),n.moveTo(t/2+i*34,0),n.lineTo(t/2+i*40,e*.3),n.stroke(),n.fillStyle="#F4F1EA",n.beginPath(),n.arc(t/2+i*40,e*.31,9,0,7),n.fill();n.fillStyle="#7A8088",n.fillRect(0,e*.92,t,e*.08)},Jt={...XE,camisa:"#959BA3",manga:"longa",calca:"#1E1E22",meia:"#E3AE86",tenis:"#E3AE86",sola:"#1E2A44",chinelo:"#1E2A44",escala:.95,estampa:uf},We={...Jt,luva:"#1A1A1E"},qE=(n,t,e)=>{n.fillStyle="#F7F1E3",n.beginPath(),n.roundRect(t*.27,e*.16,t*.46,e*.84,30),n.fill();let i=["#E2443A","#F2C230","#3E7CC8","#5AA84E","#E57AA0"];for(let s=0;s<30;s++){let r=t*.29+s*97%(t*.42),o=e*.2+s*53%(e*.76);n.fillStyle=i[s%5];for(let a=0;a<5;a++){let l=a/5*6.283;n.beginPath(),n.arc(r+Math.cos(l)*9,o+Math.sin(l)*9,7,0,7),n.fill()}n.fillStyle="#F2C230",n.beginPath(),n.arc(r,o,5,0,7),n.fill()}n.strokeStyle="#E2443A",n.lineWidth=8,n.beginPath(),n.moveTo(t*.27,e*.5),n.lineTo(0,e*.5),n.moveTo(t*.73,e*.5),n.lineTo(t,e*.5),n.stroke()},Ke={pele:"#D9A07A",cabelo:"coque",corCabelo:"#C9C6C0",oculos:!0,rugas:!0,cilios:!0,nariz:!0,tronco:"senhora",camisa:"#7FA6C9",calca:"#5A6A8A",saia:"#5A6A8A",meia:"#D9A07A",tenis:"#D9A07A",sola:"#C84E4E",chinelo:"#C84E4E",escala:.84,estampa:qE},df={...Ke,camisa:"#B23A5A",saia:"#B23A5A",calca:"#B23A5A",sola:"#3A2A2A",estampa:(n,t,e)=>{n.fillStyle="#F4D8E0";for(let i=0;i<46;i++)n.beginPath(),n.arc(i*131%t,i*67%e,7,0,7),n.fill();Hl("#8E2A44",.9)(n,t,e)},batom:!0},Is={pele:"#8A5A3E",cabelo:"curto",corCabelo:"#1A1212",bone:"#E2443A",boneTras:!0,nariz:!0,tronco:"barriga",camisa:"#F2C230",calca:"#3E5A7A",tenis:"#F4F1EA",sola:"#E2443A",escala:.97,estampa:(n,t,e)=>{n.fillStyle="#1E1E22",n.font="900 120px Inter",n.textAlign="center",n.textBaseline="middle",n.fillText("23",t/2,e*.5),Hl("#D9A520",.9)(n,t,e)}},ff={pele:"#C98C66",cabelo:"curto",corCabelo:"#2A1E1A",nariz:!0,manga:"regata",forte:1.45,tronco:"barriga",camisa:"#1E1E22",calca:"#3A3A44",tenis:"#F4F1EA",sola:"#2A2A30",escala:1.07,estampa:(n,t,e)=>{n.fillStyle="#C98C66",n.beginPath(),n.moveTo(t*.36,0),n.quadraticCurveTo(t/2,e*.22,t*.64,0),n.fill(),n.strokeStyle="#E8C547",n.lineWidth=9,n.setLineDash([10,6]),n.beginPath(),n.moveTo(t*.38,0),n.quadraticCurveTo(t/2,e*.3,t*.62,0),n.stroke(),n.setLineDash([])}},zl={pele:"#B8805A",cabelo:"curto",corCabelo:"#4A4440",bigode:"#3A3230",nariz:!0,rugas:!0,tronco:"barriga",camisa:"#B8463A",calca:"#3E4A5A",tenis:"#4A3222",sola:"#2A1E16",escala:1.05,estampa:(n,t,e)=>{n.strokeStyle="#7E2A22",n.lineWidth=16;for(let i=0;i<12;i++)n.beginPath(),n.moveTo(i*90,0),n.lineTo(i*90,e),n.stroke(),n.beginPath(),n.moveTo(0,i*50),n.lineTo(t,i*50),n.stroke();n.fillStyle="#7E2A2255",n.beginPath(),n.ellipse(t*.5,e*.35,120,70,0,0,7),n.fill()}},pf={pele:"#D9A07A",cabelo:"careca",corCabelo:"#2A2020",barba:"#3A2A20",nariz:!0,forte:1.3,tronco:"barriga",camisa:"#1E1E22",calca:"#2A2A30",tenis:"#E2443A",sola:"#F4F1EA",escala:1.08,estampa:(n,t,e)=>{n.fillStyle="#F2C230",n.font="900 70px Inter",n.textAlign="center",n.textBaseline="middle",n.fillText("FERRO",t/2,e*.42),n.font="800 40px Inter",n.fillText("FORTE",t/2,e*.56)}},hr={pele:"#8A5A3E",cabelo:"curto",corCabelo:"#9A9690",bigode:"#8A8680",nariz:!0,rugas:!0,camisa:"#3E5A7A",calca:"#2A2E38",tenis:"#1E1A18",sola:"#1E1A18",escala:1,estampa:(n,t,e)=>{n.fillStyle="#F2C230",n.fillRect(t*.6,e*.3,60,30),Hl("#2E4A68",.9)(n,t,e)}},po={pele:"#B8805A",cabelo:"curto",corCabelo:"#2A2020",bone:"#E2862E",nariz:!0,camisa:"#E2862E",calca:"#2F4E86",tenis:"#2A2A30",sola:"#2A2A30",estampa:(n,t,e)=>{n.fillStyle="#FFFFFF",n.font="900 64px Inter",n.textAlign="center",n.textBaseline="middle",n.fillText("G\xC1S",t/2,e*.45)}},Ol=[["#3E7CC8","#2A2A33","#2A1E1A","topete","#D9A07A"],["#E57AA0","#3A3550","#5A3020","chanel","#E8B48C"],["#58B26A","#2F4E86","#1C1416","afro","#8E5A3A"],["#F2994A","#3A3A44","#C9A060","curto","#F0C8A6"],["#9B6CC4","#2A2A33","#1C1416","curto","#B07A52"],["#2FB5A8","#4A3A2A","#3A2418","rabo","#E3B28E"],["#F2D24A","#2F4E86","#2A1E1A","tigela","#6E4430"],["#E8E4DE","#5A5A66","#6A5A4A","coque","#D9A07A"]],nn=(n,t={})=>{let[e,i,s,r,o]=Ol[n%Ol.length];return{camisa:e,calca:i,corCabelo:s,cabelo:r,pele:o,cilios:["rabo","coque","chanel"].includes(r),nariz:!0,tenis:["#F4F1EA","#2A2A30","#E2443A"][n%3],...t}},mo=(n,t={})=>nn(n,{camisa:"#F6F4EE",calca:"#2F4E86",escala:.94,estampa:(e,i,s)=>{Hl("#2F4E86",.88)(e,i,s),e.fillStyle="#2F4E86",e.beginPath(),e.arc(i/2+120,s*.55,34,0,7),e.fill()},...t}),kl=(n,t={})=>nn(n+2,{escala:.66,meia:Ol[(n+2)%8][4],tenis:Ol[(n+2)%8][4],sola:["#2D8CD6","#E2443A","#F2C230"][n%3],chinelo:["#2D8CD6","#E2443A","#F2C230"][n%3],...t});function go(n){let t=Uh(n);if(n.estampa===uf){let e=Qe(new pn(.13,.055,10,22),n.camisa,{out:.008});e.rotation.x=Math.PI/2.4,e.position.set(0,.34,-.09),t.torsoG.add(e);let i=Ie(.1,"#80868E",0,.3,-.15,{seg:14});i.scale.set(1.2,.7,.6),t.torsoG.add(i)}if(n.chinelo)for(let e of["L","R"]){let i=t.legs[e].an;for(let s of[-1,1]){let r=Qe(new be(.016,.014,.1),n.chinelo,{out:.003});r.position.set(s*.032,.013,.085),r.rotation.set(0,-s*.62,0),i.add(r)}i.add(Qe(new re(.011,8,6),n.chinelo,{pos:[0,.014,.125]}))}return t}var m_=1/420;var Oh={value:0};function Hh(n,t){(n.userData.vida||=[]).push(t)}var ZE={out:.012},$E=(n,t,e="#FFFFFF",i=512,s=128,r=64)=>ne(i,s,o=>{o.fillStyle=t,o.fillRect(0,0,i,s),o.strokeStyle="#00000033",o.lineWidth=8,o.strokeRect(4,4,i-8,s-8),o.fillStyle=e,o.font=`900 ${r}px Inter`,o.textAlign="center",o.textBaseline="middle",o.fillText(n,i/2,s/2+4)});function gf(n="#2F8F5B"){let t=new it;return t.add(bt(.22,.19,.8,n,0,.4,0,{seg:14,...ZE})),t.add(bt(.25,.25,.07,"#24724A",0,.82,0,{seg:14})),t.add(bt(.03,.03,.9,"#5A6270",-.28,.45,0,{seg:6})),t}var mf=[["PADARIA","#C9472F"],["FARM\xC1CIA","#2F8F5B"],["LANCHES","#F2A33A"],["\xD3TICA","#2E6FB8"],["CAF\xC9","#7A5236"],["BANCO","#3A3A44"],["LIVRARIA","#8A4FA8"],["SAPATOS","#D8577A"],["CELULARES","#1F7FA0"],["MERCADO","#E2443A"]];function vf(n,t=5){let[e,i]=mf[n%mf.length],s=new it,r=new at(new be(t,.9,.2),[kt(i),kt(i),kt(i),kt(i),Ee($E(e,i,"#FFFFFF",640,128,72)),kt(i)]);s.add(r);let o=ne(128,64,l=>{for(let c=0;c<8;c++)l.fillStyle=c%2?"#FFFFFF":i,l.fillRect(c*16,0,16,64)}),a=new at(new be(t*.9,.06,1.3),[kt(i),kt(i),Ee(o),kt(i),kt(i),kt(i)]);return a.position.set(0,-.75,.6),a.rotation.x=.28,s.add(a),s}function zh(n,t={}){let e=xe(t.seed||5),i=t.n||7,s=kt("#2A2630",{side:an}),r=[],o=new $t(.55,.22);o.translate(.27,0,0);for(let f=0;f<i;f++){let d=new it,p=new at(o,s),v=new at(o,s);v.rotation.y=Math.PI,d.add(p,v),d.add(Ie(.09,"#2A2630",0,0,0,{seg:6})),d.scale.setScalar(t.escala||1),n.add(d),r.push({g:d,L:p,Rr:v,dx:(e()-.5)*8,dy:(e()-.5)*3,dz:(e()-.5)*8,ph:e()*6})}let[a,l,c]=t.centro||[0,22,-40],h=t.raio||30,u=t.v||.12;Hh(n,(f,d)=>{r.forEach((p,v)=>{let g=d*u+(t.fase||0),m=a+Math.cos(g)*h+p.dx+Math.sin(d*.7+p.ph)*.6,S=c+Math.sin(g)*h*.5+p.dz,b=l+p.dy+Math.sin(d*1.3+p.ph)*.4;p.g.position.set(m,b,S),p.g.rotation.y=-g+Math.PI;let E=Math.sin(d*11+p.ph)*.7;p.L.rotation.x=0,p.L.rotation.z=E,p.Rr.rotation.z=-E})})}var Gl={total:840,segs:[{quem:"mot",start:12,end:13.95,trechos:[0]},{quem:"n",start:25.5,end:32.9,trechos:[1,2]},{quem:"n",start:33.6,end:38.63,trechos:[3,4]},{quem:"gui",start:58,end:59.44,trechos:[5]},{quem:"n",start:66,end:75.55,trechos:[6,7,8,9]},{quem:"cida",start:84,end:87.06,trechos:[10]},{quem:"cida",start:124,end:124.76,trechos:[11]},{quem:"gui",start:125.4,end:126.81,trechos:[12]},{quem:"n",start:143,end:149.13,trechos:[13,14]},{quem:"cida",start:170,end:172.29,trechos:[15]},{quem:"rafa",start:186,end:188.51,trechos:[16]},{quem:"tiago",start:208,end:211.43,trechos:[17]},{quem:"cida",start:249,end:250.97,trechos:[18]},{quem:"n",start:255,end:266.23,trechos:[19,20,21,22]},{quem:"dono",start:343,end:344.73,trechos:[23]},{quem:"n",start:347,end:354.82,trechos:[24,25,26]},{quem:"cida",start:398,end:400.87,trechos:[27,28]},{quem:"gui",start:405,end:408.74,trechos:[29,30]},{quem:"n",start:418,end:424.65,trechos:[31,32]},{quem:"tiago",start:456,end:458.74,trechos:[33]},{quem:"gui",start:476,end:478.86,trechos:[34]},{quem:"n",start:483,end:489.24,trechos:[35,36,37]},{quem:"cida",start:508,end:510,trechos:[38]},{quem:"cida",start:553,end:557.23,trechos:[39,40]},{quem:"mot",start:593,end:595.32,trechos:[41]},{quem:"gui",start:597.6,end:599.22,trechos:[42]},{quem:"n",start:605,end:611.05,trechos:[43,44,45]},{quem:"n",start:636,end:641.82,trechos:[46,47,48]},{quem:"cida",start:688,end:689.71,trechos:[49]},{quem:"gui",start:713,end:713.92,trechos:[50]},{quem:"n",start:722,end:730.57,trechos:[51,52,53]},{quem:"gui",start:736,end:737.37,trechos:[54]},{quem:"cida",start:746,end:749.16,trechos:[55]},{quem:"n",start:754,end:761.2,trechos:[56,57,58]},{quem:"n",start:785,end:790.88,trechos:[59,60]},{quem:"n",start:812,end:818.76,trechos:[61,62,63]},{quem:"n",start:822,end:827.949,trechos:[64,65]}],falas:[{quem:"mot",start:11.933,end:14.067,boca:[0,0,0,.38,.59,.66,.72,.82,.88,.86,.81,.84,.93,.93,.8,.62,.47,.36,.31,.43,.7,.89,.95,.97,.99,.99,.97,.87,.78,.8,.9,.93,.89,.89,.95,.97,.97,.99,1,.99,.99,.95,.87,.67,.49,.58,.78,.83,.79,.74,.69,.62,.54,.42,.3,.19,0,0,0,0,0,0,0,0],round:[0,0,0,.11,0,0,0,.09,.59,.51,.42,.72,.4,.51,.39,0,0,0,0,0,.14,.72,.52,.23,.14,.01,.36,.88,1,0,0,.96,1,1,1,.92,.86,.86,.88,.57,.64,.58,.65,.39,.44,0,.01,.69,.52,.51,.54,.23,.09,.02,0,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:57.933,end:59.567,boca:[0,0,0,.34,.56,.63,.67,.71,.78,.83,.84,.84,.85,.86,.87,.91,.95,.99,1,1,.95,.87,.85,.88,.91,.96,.97,.96,.94,.89,.78,.65,.57,.52,.45,.37,.24,0,0,0,0,0,0,0,0,0,0,0,0],round:[0,0,0,.32,.47,.31,.01,.47,0,0,0,0,.48,.89,.94,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,.84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"cida",start:83.933,end:87.167,boca:[0,0,.21,.61,.8,.77,.72,.67,.64,.73,.91,.92,.7,.5,.39,.27,.21,.37,.57,.66,.71,.73,.74,.73,.7,.64,.48,.24,0,.19,.54,.79,.83,.82,.82,.78,.74,.73,.75,.77,.79,.83,.92,.98,.97,.94,.93,.89,.73,.46,.2,.25,.66,.94,.93,.92,.97,.95,.88,.82,.8,.87,.89,.85,.88,.95,.96,.88,.77,.62,.36,.27,.56,.89,.98,.96,.94,.92,.88,.86,.85,.8,.7,.56,.34,.13,0,0,0,0,0,0,0,0,0,0,0],round:[0,0,0,.95,0,0,0,0,0,0,.61,1,.67,0,.56,0,0,.16,0,0,0,0,0,0,0,.21,.71,0,0,0,0,.9,.99,1,.89,.82,1,1,1,.76,.7,1,.93,.91,.71,0,.07,.74,1,.97,0,0,.47,.75,.9,1,.99,1,0,0,0,.86,.96,1,1,.97,.92,.66,.89,1,.95,0,0,.64,.64,.64,.84,.89,1,.84,.94,.97,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"cida",start:123.933,end:124.867,boca:[0,0,.43,.79,.94,.98,1,.99,.99,.97,.93,.86,.8,.74,.66,.59,.51,.44,.38,.36,.35,.35,.35,.33,.22,0,0,0],round:[0,0,0,1,1,.91,.77,.84,.86,.86,.79,.39,0,0,.21,.47,.86,.45,.81,1,1,1,1,1,0,0,0,0]},{quem:"gui",start:125.333,end:126.933,boca:[0,0,.27,.61,.79,.82,.85,.87,.88,.87,.87,.85,.85,.85,.85,.86,.91,.96,.99,.99,.96,.96,.98,.99,.98,.96,.97,.99,.98,.95,.93,.94,.97,.96,.88,.71,.46,.2,0,0,0,0,0,0,0,0,0,0],round:[0,0,0,.69,.89,.92,.92,1,1,1,0,0,0,0,0,0,0,1,1,.96,.44,.29,.9,1,.95,1,.99,.86,.84,.91,.84,.94,.99,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0]},{quem:"cida",start:169.933,end:172.4,boca:[0,0,.16,.53,.79,.7,.42,.22,.27,.54,.79,.89,.94,.98,1,.99,.94,.89,.87,.81,.79,.88,.76,.43,.17,0,0,.3,.63,.81,.9,.96,.96,.92,.86,.87,.95,.87,.63,.62,.79,.85,.86,.86,.84,.88,.88,.81,.82,.85,.78,.72,.78,.84,.85,.83,.83,.83,.83,.8,.77,.74,.71,.68,.61,.41,.18,0,0,0,0,0,0,0],round:[0,0,0,.17,.83,.92,.79,0,0,0,.84,.92,1,1,1,1,1,1,1,1,.35,.99,.48,.89,0,0,0,0,0,0,.34,.97,.77,.96,1,0,0,0,0,0,1,1,1,1,.4,.56,1,1,.94,1,1,.41,0,.62,1,1,1,.89,.57,.82,1,1,1,1,1,.84,0,0,0,0,0,0,0,0]},{quem:"rafa",start:185.933,end:188.633,boca:[0,0,.15,.48,.68,.77,.89,.98,.98,.95,.94,.98,1,.99,.98,.97,.96,.9,.82,.82,.89,.95,.96,.94,.92,.88,.81,.78,.78,.77,.71,.63,.59,.59,.42,.13,.14,.45,.7,.88,.96,.93,.91,.91,.93,.97,.98,.92,.9,.94,.87,.58,.49,.77,.95,.85,.71,.67,.76,.84,.89,.93,.95,.95,.93,.91,.88,.83,.77,.65,.51,.42,.26,0,0,0,0,0,0,0,0],round:[0,0,0,.99,.98,0,.17,.8,.37,.45,.29,.45,.64,1,1,.95,.68,.67,.99,.93,.79,.86,.79,.68,.69,.91,.91,1,.99,1,1,1,1,1,1,0,0,.99,1,.76,.47,0,0,0,0,.69,.72,.7,.33,.65,.72,1,.64,.42,.92,.74,1,.99,0,0,.63,1,1,1,1,1,.95,.92,.91,.93,.96,.98,0,0,0,0,0,0,0,0,0]},{quem:"tiago",start:207.933,end:211.533,boca:[0,0,0,.41,.68,.81,.91,.98,.99,.94,.9,.86,.8,.79,.83,.83,.73,.46,.13,.21,.63,.78,.49,.33,.57,.83,.88,.8,.69,.7,.79,.9,.98,.97,.92,.84,.72,.7,.77,.82,.81,.8,.82,.87,.91,.86,.77,.72,.78,.92,.95,.89,.76,.6,.44,.23,0,.18,.59,.82,.66,.33,.26,.62,.91,.91,.8,.69,.65,.7,.79,.88,.95,.96,.94,.96,.92,.8,.67,.67,.75,.79,.79,.81,.86,.89,.86,.77,.7,.68,.77,.9,.93,.88,.8,.68,.54,.32,0,0,0,0,0,0,0,0,0,0],round:[0,0,0,.81,1,1,.97,.95,.79,.47,.52,.48,.99,.93,.94,.97,1,1,0,0,.27,.97,1,.99,.19,.69,.95,1,1,1,.97,.86,.79,.87,.69,.73,.81,1,1,1,.89,.64,.39,.65,.79,.79,.58,0,.16,.94,.81,.74,.67,.62,.63,0,0,0,0,1,1,1,0,0,.83,.42,.75,1,1,1,.9,.85,.86,.83,.84,.82,.77,.75,1,1,1,.95,.77,.7,.46,.58,.77,.9,.49,.53,.71,.94,.72,.84,.82,.75,.66,.8,0,0,0,0,0,0,0,0,0,0]},{quem:"cida",start:248.933,end:251.1,boca:[0,.14,.51,.82,.93,.98,.96,.9,.87,.91,.96,.95,.94,.96,.97,.95,.92,.87,.85,.84,.88,.94,.98,.99,1,.99,.97,.89,.81,.83,.89,.9,.89,.89,.92,.92,.9,.89,.9,.93,.96,.98,.99,1,.98,.94,.91,.9,.88,.84,.77,.69,.6,.53,.42,.23,0,0,0,0,0,0,0,0,0],round:[0,0,0,.11,.46,.53,.74,0,0,0,.96,.92,.64,.78,.43,.14,.34,0,0,0,0,.52,.4,.39,.31,.47,0,0,0,0,.62,.63,.84,.92,.39,.01,.69,1,.34,0,.02,.03,.12,.44,.62,1,.96,.93,.87,.87,.91,.92,.97,.97,1,0,0,0,0,0,0,0,0,0,0]},{quem:"dono",start:342.933,end:344.833,boca:[0,0,.2,.5,.71,.82,.89,.93,.94,.93,.9,.89,.95,.98,.94,.91,.89,.87,.86,.88,.91,.92,.88,.84,.87,.92,.94,.95,.98,.97,.92,.91,.93,.94,.94,.96,.99,1,.98,.94,.9,.89,.86,.81,.79,.74,.6,.42,.23,0,0,0,0,0,0,0,0],round:[0,0,0,0,0,.54,.09,0,0,0,0,0,1,1,.92,.51,.29,.66,.62,.55,.66,.72,1,1,.08,0,0,.55,1,.92,.32,.26,.51,.82,.56,0,0,0,0,0,0,1,.97,.84,.93,1,1,.69,0,0,0,0,0,0,0,0,0]},{quem:"cida",start:397.933,end:401,boca:[0,0,.23,.7,.97,1,1,.98,.96,.95,.92,.82,.76,.8,.86,.82,.69,.54,.49,.64,.79,.87,.92,.93,.92,.9,.86,.77,.67,.65,.76,.89,.96,.94,.81,.69,.66,.65,.63,.59,.56,.51,.3,0,0,.13,.44,.71,.88,.97,.96,.95,.97,.97,.96,.97,.97,.94,.91,.9,.94,.97,.93,.84,.8,.79,.8,.82,.83,.81,.79,.79,.8,.82,.79,.72,.62,.58,.56,.53,.45,.31,0,0,0,0,0,0,0,0,0,0],round:[0,0,0,1,1,1,1,1,.92,.92,.82,.86,.96,.87,.76,.79,1,1,1,.62,.89,.86,.76,.8,.71,.7,.84,.87,.92,.92,0,0,0,0,0,.77,1,1,1,1,1,1,1,0,0,0,1,1,.91,1,1,.36,.92,.82,1,1,1,1,1,1,1,1,1,.66,.37,.45,.68,.99,1,.99,1,1,1,.85,.75,.89,.99,1,.94,.96,1,1,0,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:404.933,end:408.867,boca:[0,0,.27,.59,.77,.82,.85,.88,.9,.93,.93,.9,.9,.97,1,1,1,1,.99,.95,.89,.85,.86,.89,.88,.88,.89,.9,.86,.75,.63,.56,.5,.4,.27,.12,0,0,0,0,0,0,0,0,.12,.44,.71,.81,.85,.86,.86,.84,.8,.86,.94,.96,.93,.9,.91,.95,.96,.97,.97,.98,.98,.96,.91,.87,.83,.81,.83,.83,.75,.51,.19,0,0,0,0,0,0,.39,.74,.84,.77,.76,.83,.89,.92,.94,.98,.97,.92,.88,.85,.83,.87,.93,.94,.83,.66,.61,.67,.74,.75,.7,.57,.38,.18,0,0,0,0,0,0,0,0,0],round:[0,0,0,1,1,1,.92,1,1,1,1,1,1,1,1,1,1,1,1,1,.55,0,.48,.99,1,1,1,1,1,.82,.46,.17,.53,.66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,.54,.94,1,1,1,1,.96,.89,.85,.89,.88,.97,0,0,0,0,.78,1,1,.72,0,0,0,0,0,0,0,.41,1,.96,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,.62,0,.29,.7,1,1,1,1,0,0,0,0,0,0,0,0,0,0]},{quem:"tiago",start:455.933,end:458.867,boca:[0,0,.19,.52,.71,.77,.86,.96,.98,.95,.93,.94,.9,.77,.61,.45,.25,0,0,0,.35,.72,.92,.95,.94,.94,.95,.96,.96,.96,.96,.97,.98,.97,.97,.99,.97,.92,.9,.91,.89,.9,.95,.96,.92,.92,.95,.95,.91,.89,.89,.82,.74,.79,.84,.76,.71,.83,.95,.96,.9,.84,.83,.89,.97,1,.98,.88,.67,.52,.6,.77,.89,.94,.91,.81,.65,.45,.24,0,0,0,0,0,0,0,0,0],round:[0,0,0,1,1,.99,.66,.85,.69,.96,.51,.48,.87,.33,0,.31,0,0,0,0,.24,.82,.92,.84,1,1,1,1,1,1,1,1,1,1,.97,1,1,.88,.67,.81,.56,.34,1,.97,.69,.57,1,1,.84,0,.95,0,0,0,.98,1,.37,.45,.84,.69,.68,.26,.33,.89,1,1,1,.81,.98,1,.04,.22,1,1,1,1,.96,.84,0,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:475.933,end:478.967,boca:[0,0,.41,.69,.78,.81,.91,.98,1,1,.99,.94,.88,.86,.88,.86,.79,.64,.49,.38,.27,.15,0,0,0,0,0,0,0,0,.42,.72,.86,.93,.96,.95,.83,.7,.76,.91,.96,.91,.87,.85,.85,.89,.9,.88,.93,.98,.99,.99,.98,.98,.98,.99,1,.99,.97,.94,.9,.91,.93,.9,.85,.86,.93,.97,.96,.94,.92,.92,.92,.9,.84,.78,.78,.79,.79,.73,.58,.37,.19,0,0,0,0,0,0,0,0],round:[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,.88,.26,.38,0,0,0,0,0,0,0,0,0,0,.84,1,1,1,1,1,1,.34,.82,1,1,0,0,0,0,.73,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.97,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.82,.65,0,0,0,0,0,0,0,0,0]},{quem:"cida",start:507.933,end:510.133,boca:[0,0,.34,.78,.98,.97,.92,.91,.94,.97,.98,.99,1,.96,.9,.84,.81,.77,.74,.67,.52,.32,.18,0,0,0,.21,.56,.82,.91,.91,.89,.86,.81,.78,.75,.69,.71,.83,.89,.89,.92,.96,.97,.92,.86,.8,.71,.64,.59,.49,.33,.18,0,0,0,0,0,0,0,0,0,0,0,0,0],round:[0,0,.59,.76,.87,.86,.74,1,.96,.71,.88,.97,1,1,.96,.98,1,1,1,1,1,.89,0,0,0,0,0,0,0,0,0,0,.76,.67,.91,1,.79,0,.79,.69,1,1,1,.74,.8,.75,.72,.48,.2,.11,.02,.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"cida",start:552.933,end:557.333,boca:[0,0,.23,.7,.93,.94,.98,.97,.87,.84,.92,.97,.93,.89,.88,.85,.69,.39,0,0,0,.23,.68,.92,.93,.96,.97,.94,.92,.94,.94,.9,.95,.98,.93,.9,.91,.91,.88,.86,.86,.85,.82,.76,.71,.62,.44,.22,0,0,.35,.62,.74,.55,.35,.53,.81,.93,.91,.85,.81,.8,.78,.74,.72,.74,.79,.86,.93,.96,.94,.88,.8,.63,.36,0,0,0,.36,.61,.78,.87,.92,.94,.88,.78,.54,.41,.64,.83,.83,.81,.8,.79,.76,.74,.75,.8,.88,.93,.95,.98,.97,.82,.59,.56,.72,.76,.7,.68,.69,.66,.52,.37,.45,.72,.86,.84,.75,.62,.37,0,0,0,0,0,0,0,0,0,0,0],round:[0,0,0,.79,0,0,.66,1,1,.93,.99,.91,.84,.94,.83,.86,1,1,0,0,0,0,.46,.84,.97,1,1,1,1,1,.93,1,1,.67,0,.07,.91,.92,.9,.92,.95,1,.92,.88,1,1,1,0,0,0,0,0,1,.66,0,0,.37,.6,.89,1,1,.99,.72,.51,.81,1,.86,.64,.52,.66,.67,.69,.99,1,1,0,0,0,.98,.88,.95,.98,0,0,0,.89,.82,.49,.65,.84,.88,1,1,1,1,.79,.7,.59,.82,.92,0,0,0,0,0,0,.71,.93,.72,.26,.06,0,0,.74,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"mot",start:592.933,end:595.433,boca:[0,0,.29,.6,.77,.83,.87,.88,.89,.92,.95,.96,.98,.97,.86,.7,.63,.71,.78,.78,.73,.67,.59,.48,.29,0,0,0,0,0,0,0,0,0,0,0,0,.34,.66,.86,.93,.94,.94,.96,.98,.99,.84,.45,.2,.38,.69,.83,.88,.94,.96,.98,1,.99,.97,.9,.73,.5,.28,0,0,0,0,0,0,0,0,0,0,0,0],round:[0,0,0,1,.99,1,.92,1,1,1,.96,.98,.95,.91,.52,0,0,0,0,0,0,.21,.33,.57,0,0,0,0,0,0,0,0,0,0,0,0,0,.86,0,.91,1,1,.98,.99,.97,1,.98,.77,0,.4,0,0,0,1,.82,1,.93,1,1,1,.81,.67,0,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:597.533,end:599.333,boca:[0,0,.16,.52,.77,.83,.86,.9,.93,.96,.99,1,.96,.75,.52,.61,.79,.83,.81,.84,.9,.9,.85,.84,.91,.97,.98,.99,1,.98,.93,.91,.9,.89,.85,.83,.88,.91,.9,.87,.88,.92,.92,.81,.64,.51,.39,.22,0,0,0,0,0,0],round:[0,0,0,.92,1,1,1,1,1,1,1,1,1,1,.71,0,.02,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,.71,.53,.53,0,0,0,0,0,0,0]},{quem:"cida",start:687.933,end:689.833,boca:[0,0,0,.14,.48,.76,.86,.89,.89,.89,.93,.96,.95,.92,.78,.65,.76,.88,.89,.89,.9,.94,.89,.79,.82,.93,.92,.9,.96,.98,.95,.96,.98,.95,.92,.93,.93,.91,.92,.95,.94,.88,.78,.71,.68,.66,.61,.53,.45,.36,.19,0,0,0,0,0,0],round:[0,0,0,0,0,0,0,0,0,0,0,.42,.71,1,1,.99,.94,.56,.37,.73,.63,.8,.79,.99,.76,.79,.77,0,0,0,0,.79,.81,.86,0,0,0,0,0,.83,1,1,1,.96,.76,.64,.79,.79,.9,.84,0,0,0,0,0,0,0]},{quem:"gui",start:712.933,end:714.033,boca:[0,0,.25,.58,.77,.79,.79,.82,.9,.97,.99,.99,.99,.99,1,.99,.98,.96,.94,.91,.87,.82,.76,.69,.6,.47,.29,.15,0,0,0,0,0],round:[0,0,0,1,.86,.57,.41,.01,.3,.77,.92,.79,.56,.47,.44,.61,.57,.46,.67,.67,.71,.78,.77,.76,.68,.66,0,0,0,0,0,0,0]},{quem:"gui",start:735.933,end:737.5,boca:[0,0,.26,.58,.76,.8,.75,.55,.45,.64,.84,.88,.86,.81,.79,.8,.85,.93,.98,1,.99,.98,.98,.96,.91,.86,.85,.89,.93,.94,.95,.97,.98,.96,.88,.76,.64,.55,.47,.33,.15,0,0,0,0,0,0],round:[0,0,0,0,0,0,1,.76,0,.69,.81,.59,.51,.89,1,1,.76,.36,.68,1,.92,.79,.95,1,.84,.72,.61,.86,.72,.8,.91,.89,.91,1,1,.57,0,0,0,.31,0,0,0,0,0,0,0]},{quem:"cida",start:745.933,end:749.267,boca:[0,0,.15,.49,.7,.63,.48,.43,.59,.82,.72,.34,0,0,0,.2,.47,.66,.72,.75,.74,.73,.71,.69,.54,.19,0,0,.24,.28,.38,.7,.88,.89,.91,.9,.86,.82,.85,.92,.98,.98,.93,.89,.77,.6,.63,.81,.85,.76,.73,.84,.91,.83,.75,.74,.81,.89,.88,.87,.89,.9,.88,.88,.87,.85,.88,.96,.87,.61,.45,.43,.53,.76,.91,.94,.93,.9,.93,.89,.68,.37,.2,.27,.41,.59,.69,.6,.54,.6,.53,.26,0,0,0,0,0,0,0,0],round:[0,0,0,.4,0,0,0,0,0,1,.78,.42,0,0,0,0,0,0,0,0,0,0,0,.15,.86,0,0,0,0,0,0,.74,.66,.76,.79,.89,.86,.92,.82,.84,.84,.92,.91,.52,.76,.76,0,.47,1,.92,.79,.93,1,.12,0,0,0,.89,.9,1,.85,.93,.94,.8,.76,.82,.77,.82,.81,0,0,0,0,0,.77,.82,.76,.77,.76,.64,.94,.97,0,0,0,.96,.99,1,1,1,1,0,0,0,0,0,0,0,0,0]}]};var I_=Gl.total,L_=Gl.segs;function Ef(n,t){for(let e of Gl.falas){if(e.quem!==n||t<e.start-.05||t>e.end+.05)continue;let i=(t-e.start)*30,s=Math.floor(i),r=i-s,o=e.boca[Math.max(0,Math.min(e.boca.length-1,s))]||0,a=e.boca[Math.max(0,Math.min(e.boca.length-1,s+1))]||0,l=e.round[Math.max(0,Math.min(e.round.length-1,Math.round(i)))]||0;return{open:o+(a-o)*r,round:l}}return{open:0,round:0}}var yf=null,QE=()=>yf||(yf=ne(128,128,n=>{let t=n.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.5,"rgba(255,255,255,.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=t,n.fillRect(0,0,128,128)}));function Ri(n,t,e=1,i=!0){let s=new sr(new ws({map:QE(),color:n,transparent:!0,opacity:e,depthWrite:!1,blending:i?Oi:xs,fog:!1}));return s.scale.setScalar(t),s}function vo(n,t,e={}){let i=xe(e.seed||3),s=[];for(let r=0;r<(e.n||30);r++){let o=t[r%t.length],a=Ri(e.cor||"#D9CDB8",1,0,!1);a.position.set(o[0]+(i()-.5)*(e.sp||3),o[1]+i()*.5,o[2]+(i()-.5)*(e.sp||3)),a.userData={b:a.position.clone(),d:i()*(e.spread||.6),v:new P((i()-.5)*2,i()*1.2,(i()-.5)*2),s:(e.size||2)*(.6+i()*.8)},n.add(a),s.push(a)}return r=>s.forEach(o=>{let a=o.userData,l=r-a.d;if(o.visible=l>0&&l<(e.life||4),!o.visible)return;let c=l/(e.life||4);o.position.copy(a.b).addScaledVector(a.v,l*.8),o.scale.setScalar(a.s*(.4+c*1.4)),o.material.opacity=(e.op||.75)*Math.sin(Math.min(1,c*4)*Math.PI/2)*(1-c)})}function kh(n,t){return[Math.sin(n*47)*t+Math.sin(n*89)*t*.5,Math.sin(n*53+1)*t+Math.sin(n*97)*t*.4,0]}function Z(n,t,e,i){let s=rf(n,t,e.bg||"#BFE3F7",e.fov||32),r=s.scene.background;s.camera.near=e.near||.05,s.camera.far=e.far||500,s.camera.updateProjectionMatrix();let o=null,a=null,l=()=>{Vl&&Vl!==s&&Vl._desmonta(),Vl=s,a=s.scene=new ir,a.background=r,e.fog&&(a.fog=new so(e.fog[0],e.fog[1],e.fog[2])),o=i(a,s)||(()=>({}))};return s._desmonta=()=>{o&&(a.traverse(c=>{if(c.geometry&&c.geometry.dispose(),c.material)for(let h of[].concat(c.material))h.map&&!h.map.userData.fixa&&h.map.image&&h.map.image.tagName==="CANVAS"&&h.map.image.__dyn&&h.map.dispose(),h.dispose()}),s.scene=new ir,s.scene.background=r,o=null,a=null)},s.update=(c,h)=>{o||l(),Oh.value=c,wi={t0:n,t1:t,viva:e.viva??1,scene:a,perto:e.perto},KE(a);let u=o(c,h,s.camera)||{};e.limpa!==!1&&jE(a,s.camera);let f=a.userData.vida;if(f&&e.vida!==!1){let d=c;for(let p of f)p(c,d,h)}return af(u)},s}var Vl=null,wi={t0:0,t1:1,viva:1},Ci=new P,Eo=new P,Wl=new P,Gh=n=>n.userData._at||(n.userData._at=(()=>{let t=[];return n.traverse(e=>{e.userData&&e.userData.ator&&t.push(e.userData.ator)}),t})());function KE(n){for(let t of Gh(n))t._ocultei&&(t.root.visible=!0,t._ocultei=!1)}function jE(n,t){let e=t.userData.alvo;if(!e)return;n.updateMatrixWorld(!0),Eo.copy(t.position),Wl.set(e[0],e[1],e[2]);let i=Wl.clone().sub(Eo),s=i.lengthSq();for(let r of Gh(n)){if(!r.root.visible||r.fixo)continue;let o=!1;for(let u=r.root.parent;u;u=u.parent)if(u.visible===!1){o=!0;break}if(o)continue;r.headG.getWorldPosition(Ci),Ci.y+=.26*(r.root.scale.x||1);let a=Ci.distanceTo(Eo),l=Math.max(0,Math.min(1,Ci.clone().sub(Eo).dot(i)/s)),c=Ci.distanceTo(Eo.clone().addScaledVector(i,l)),h=Ci.distanceTo(Wl)<.55;(a<.75||!h&&l>.02&&l<.8&&c<.3*(r.root.scale.x||1)&&a<Eo.distanceTo(Wl)-.4)&&(r.root.visible=!1,r._ocultei=!0)}}var yo=(n,t)=>Math.sin(n*.71+t)*.6+Math.sin(n*1.37+t*2.1)*.3+Math.sin(n*2.9+t*3.3)*.1;function _f(n,t,e,i,s=0,r=wi.viva){let o=Ul(t,i),a=Ul(e,i);if(r>0){let l=Oh.value,c=Math.hypot(o[0]-a[0],o[1]-a[1],o[2]-a[2]),h=Math.min(1,Math.max(0,(l-wi.t0)/Math.max(.5,wi.t1-wi.t0))),u=wi.t1-wi.t0>6.5&&h>.5?.2*r:0,f=.05*r*(h*h*(3-2*h))+u;for(let p=0;p<3;p++)o[p]+=(a[p]-o[p])*f;let d=c*.011*r;o[0]+=yo(l,1)*d,o[1]+=yo(l,4)*d*.7,o[2]+=yo(l,7)*d*.5,a[0]+=yo(l,9)*d*.35,a[1]+=yo(l,12)*d*.3,s+=yo(l,15)*.006*r}if(wi.scene&&wi.perto!==!0){let l=Gh(wi.scene);for(let c of l)if(c.root.visible&&(c.headG.getWorldPosition(Ci),Ci.y+=.26*(c.root.scale.x||1),Math.hypot(Ci.x-a[0],Ci.y-a[1],Ci.z-a[2])<.45)){let h=(wi.perto||.71*(c.root.scale.x||1))/Math.tan(n.fov*Math.PI/360),u=Math.hypot(o[0]-a[0],o[1]-a[1],o[2]-a[2]);if(u<h&&u>.001)for(let f=0;f<3;f++)o[f]=a[f]+(o[f]-a[f])*h/u;break}}of(n,o,a,s),n.userData.alvo=a}function L(n,t,e,i="neutro",s={}){let r=t?Ef(t,e):{open:0,round:0},o=s.mouth||(r.open>0?{open:r.open,round:r.round,smile:s.smile}:{open:0,smile:s.smile});n.face({emo:i,blink:s.blink??hf(e,n.seed||0),look:s.look||[0,0],brow:s.brow,lagrima:s.lagrima,olhosAbertos:s.olhosAbertos,blush:s.blush,mouth:o});let a=n.headG.rotation,l=n.torsoG.rotation,c=n._viva;if(c&&a.x===c.r[0]&&a.y===c.r[1]&&a.z===c.r[2]&&l.x===c.r[3]&&l.z===c.r[4]&&(a.x-=c.d[0],a.y-=c.d[1],a.z-=c.d[2],l.x-=c.d[3],l.z-=c.d[4]),!n.congelado&&s.vivo!==!1){let h=(n.seed||0)*1.7,u=e*(s.lento??1),f=r.open||0,d=[.03*Math.sin(u*1.05+h)+f*.09*(.6+.4*Math.sin(u*7.3+h)),.045*Math.sin(u*.63+h*2)+f*.05*Math.sin(u*3.1+h),.025*Math.sin(u*.81+h*3),.018*Math.sin(u*2.2+h),.01*Math.sin(u*.9+h)];a.x+=d[0],a.y+=d[1],a.z+=d[2],l.x+=d[3],l.z+=d[4],n._viva={d,r:[a.x,a.y,a.z,l.x,l.z]}}else n._viva=null;return n}function ra(n,t=.4){let e=ne(256,256,s=>{if(s.lineJoin="round",s.lineWidth=14,s.strokeStyle="#1B1420",s.textAlign="center",s.textBaseline="middle",n==="coracao")s.fillStyle="#F2546E",s.beginPath(),s.moveTo(128,214),s.bezierCurveTo(20,140,30,50,100,52),s.bezierCurveTo(118,54,128,70,128,82),s.bezierCurveTo(128,70,138,54,156,52),s.bezierCurveTo(226,50,236,140,128,214),s.fill(),s.stroke(),s.fillStyle="#FFFFFF88",s.beginPath(),s.ellipse(88,92,18,12,-.6,0,7),s.fill();else if(n==="gota")s.fillStyle="#8FD3F2",s.beginPath(),s.moveTo(128,30),s.bezierCurveTo(200,130,200,210,128,214),s.bezierCurveTo(56,210,56,130,128,30),s.fill(),s.stroke();else{let r={interrogacao:"?",exclamacao:"!",zzz:"Z",notas:"\u266A"}[n]||n;s.font="900 200px Inter",s.fillStyle=n==="exclamacao"?"#F2C14E":"#FFFFFF",s.strokeText(r,128,136),s.fillText(r,128,136)}}),i=new sr(new ws({map:e,transparent:!0,depthWrite:!1}));return i.scale.setScalar(t),i.renderOrder=10,i}function Qn(n,t,e,i=0,s=.48){let r=n.root.scale.x||1;return n.place(t,e,s-.28*r,i),n.sombra.visible=!1,n}var W=(n,t,e,i,s=0,r)=>_f(n,typeof t[0]=="number"?[[0,t]]:t,typeof e[0]=="number"?[[0,e]]:e,i,s,r);function K(n,t,e=0,i=0,s=0,r=0){let o=go(t);return o.place(e,i,r,s),n.add(o.root),o.root.userData.ator=o,o.seed=Math.abs(e*13+i*7|0)%9,o}var ur=(n,t=0,e=0,i=0)=>{let s=n.localToWorld(new P(t,e,i));return[s.x,s.y,s.z]};function Kn(n,t,e,i,s=0,r,o){if(W(n,t,e,i,0,o),s>0){let a=kh(r??i*3.7,s);n.position.x+=a[0],n.position.y+=a[1]}}var hM=Math.PI/180;var uM={s:0,n:Math.PI,e:Math.PI/2,w:-Math.PI/2};function Mf(n,t,e,i=0,s=0,r=0,o=0){let a=new at(new $t(n,t),e);return a.position.set(i,s,r),a.rotation.y=o,a.receiveShadow=!0,a}var oa=(n,t)=>t[Math.floor(n()*t.length)%t.length];var ai=(n,...t)=>{let e=new it;for(let i of t)e.add(i);return e.userData.pe=n,e};var ey=["#3E7CC8","#C84E4E","#5AA84E","#8E6CC4","#D98A3A","#4FB8A0","#7A8696","#B5603E"];function bf(n=2.1,t="#3E7CC8"){let e=ai([n,.9]),i=new Yt(t).multiplyScalar(.82).getStyle();e.add(ft(n,.42,.86,t,0,.21+.08,0,{out:.014,r:.08})),e.add(ft(n,.5,.22,i,0,.62,-.32,{out:.014,r:.08}));for(let r of[-1,1])e.add(ft(.2,.58,.86,i,r*(n/2-.1),.37,0,{out:.014,r:.07}));let s=Math.max(2,Math.round(n/.8));for(let r=0;r<s;r++)e.add(ft((n-.44)/s-.03,.14,.62,t,-n/2+.22+(n-.44)/s*(r+.5),.56,.06,{out:.012,r:.06}));for(let r of[-1,1])for(let o of[-1,1])e.add(bt(.03,.02,.08,"#3A2A20",r*(n/2-.1),.04,o*.34,{seg:6}));return e.add(ft(.4,.36,.12,"#F2C230",-n/2+.45,.72,-.17,{out:.012,r:.06,rot:[-.25,.2,0]})),e}function xf(n=1.6,t="#7A5233"){let e=ai([n,.45]);e.add(ft(n,.5,.42,t,0,.25,0,{out:.012}));for(let s of[-1,1])e.add(tt(n/2-.06,.36,.01,"#5E3E26",s*n/4,.25,.215));e.add(ft(1.2,.7,.06,"#1B1A20",0,.5+.45,-.05,{out:.012})),e.add(tt(.3,.03,.18,"#2A2A30",0,.515,-.05)),e.add(tt(.06,.1,.04,"#2A2A30",0,.56,-.05));let i=ny();return i.position.set(0,.95,-.016),e.add(i),e.userData.tela=i,e.add(ft(.3,.06,.15,"#2A2A30",.45,.53,.05)),e}var aa=null;function ny(n=1.12,t=.62){aa||(aa=ne(512,1024,s=>{[["#6FB4EC","#5AA84E"],["#F2994A","#3E2A60"],["#2E6FB8","#E8DCC8"],["#58B26A","#F2C230"]].forEach(([o,a],l)=>{let c=l*256;s.fillStyle=o,s.fillRect(0,c,512,256),s.fillStyle=a,s.fillRect(0,c+170,512,86),s.fillStyle="#F4D2B0",s.beginPath(),s.arc(180+l*40,c+120,44,0,7),s.fill(),s.fillStyle="#2A1E1A",s.beginPath(),s.arc(180+l*40,c+100,44,Math.PI,0),s.fill(),s.fillStyle=["#E2443A","#2E9C6A","#F2C230","#3E7CC8"][l],s.fillRect(120+l*40,c+160,120,96),s.fillStyle="rgba(0,0,0,.55)",s.fillRect(0,c+214,512,42),s.fillStyle="#FFF",s.font="700 26px Inter, Arial",s.fillText(["JORNAL DA SERRA","NOVELA DAS NOVE","PREVIS\xC3O DO TEMPO","FUTEBOL AO VIVO"][l],16,c+244)})}),aa.wrapT=Ai,aa.repeat.set(1,.25));let e=aa.clone();e.needsUpdate=!0,e.repeat.set(1,.25);let i=new at(new $t(n,t),new Me({map:e,toneMapped:!1}));return i.userData.vivo=!0,i.userData.tv=!0,i}function Af(n=1,t=0){let e=ai([.45,.45]),i=xe(t+2);e.add(bt(.2,.15,.38,oa(i,["#C8643C","#F4F1EA","#3A3A44","#D9B07A"]),0,.19,0,{out:.012,seg:14})),e.add(bt(.18,.18,.02,"#5A3A24",0,.37,0));for(let s=0;s<7;s++){let r=s/7*6.283,o=Qe(new re(.16,10,6),s%2?"#4E9A48":"#5FAE52",{out:.01});o.scale.set(.6,1.8*n,.35),o.position.set(Math.cos(r)*.12,.55+n*.25,Math.sin(r)*.12),o.rotation.set(Math.sin(r)*.5,r,-Math.cos(r)*.5),e.add(o)}return e}function Xl(n,t,e=0,i="paisagem"){let s=xe(e+8),r=ne(256,Math.round(256*t/n),(l,c,h)=>{if(i==="paisagem")l.fillStyle="#8EC8EC",l.fillRect(0,0,c,h),l.fillStyle="#6FA866",l.beginPath(),l.moveTo(0,h*.7),l.quadraticCurveTo(c*.3,h*.35,c*.6,h*.62),l.quadraticCurveTo(c*.8,h*.5,c,h*.6),l.lineTo(c,h),l.lineTo(0,h),l.fill(),l.fillStyle="#9E9A94",l.beginPath(),l.ellipse(c*.66,h*.45,c*.1,h*.22,0,Math.PI,0),l.fill(),l.fillStyle="#F2C230",l.beginPath(),l.arc(c*.2,h*.22,h*.09,0,7),l.fill();else if(i==="familia"){l.fillStyle="#E8DCC8",l.fillRect(0,0,c,h);for(let u=0;u<3;u++){let f=c*(.28+u*.22),d=h*.45;l.fillStyle=["#2C6E7F","#E57AA0","#3A9AD9"][u],l.fillRect(f-26,d+20,52,h),l.fillStyle=["#9A6646","#E8B48C","#E3AE86"][u],l.beginPath(),l.arc(f,d,24,0,7),l.fill(),l.fillStyle=["#2B2422","#5A3020","#4A2A18"][u],l.beginPath(),l.arc(f,d-6,24,Math.PI,0),l.fill()}}else if(i==="poster")l.fillStyle=oa(s,["#1F2D4E","#3E2A60","#E2443A"]),l.fillRect(0,0,c,h),l.fillStyle="#F2C230",l.beginPath(),l.arc(c/2,h*.4,c*.25,0,7),l.fill(),l.fillStyle="#FFF",l.font=`900 ${c*.13}px Inter, Arial`,l.textAlign="center",l.fillText(oa(s,["ROCK","GAMER","FUTEBOL","ESPA\xC7O"]),c/2,h*.85);else{l.fillStyle="#F4F1EA",l.fillRect(0,0,c,h);for(let u=0;u<6;u++)l.fillStyle=oa(s,ey),l.beginPath(),l.arc(s()*c,s()*h,10+s()*30,0,7),l.fill()}}),o=ai([0,0]);o.add(ft(n+.08,t+.08,.04,"#7A5233",0,0,.02,{out:.008}));let a=Mf(n,t,Ee(r),0,0,.042);return o.add(a),o}function Sf(n=2.2,t="#F4F1EA",e="#3A3A44"){let i=ai([n,.62]);i.add(ft(n,.86,.58,t,0,.43,0,{out:.012,r:.02})),i.add(tt(n+.02,.04,.62,e,0,.88,0,{out:.01}));let s=Math.round(n/.5);for(let a=0;a<s;a++){let l=-n/2+n/s*(a+.5);i.add(tt(n/s-.03,.7,.01,t,l,.45,.295)),i.add(tt(.12,.02,.02,"#9AA0A8",l+(a%2?-.12:.12),.7,.31))}i.add(tt(.6,.02,.4,"#C9CED6",-n/4,.905,0)),i.add(tt(.52,.03,.34,"#8D949C",-n/4,.9,0));let r=new it;r.position.set(-n/4,.9,-.22),r.add(bt(.02,.02,.28,"#C9CED6",0,.14,0,{seg:8}));let o=bt(.015,.015,.2,"#C9CED6",0,.28,.08,{seg:8});return o.rotation.x=Math.PI/2,r.add(o),i.add(r),i.add(bt(.1,.09,.24,"#B5603E",n/2-.3,1.02,0,{out:.01})),i.add(bt(.11,.11,.03,"#8E4A2E",n/2-.3,1.15,0)),i.add(ft(.3,.05,.2,"#F2C230",n/4,.93,.05)),i}function Tf(n=2,t="#F4F1EA"){let e=ai([0,0]);e.add(ft(n,.65,.34,t,0,0,0,{out:.012,r:.02}));let i=Math.round(n/.5);for(let s=0;s<i;s++){let r=-n/2+n/i*(s+.5);e.add(tt(n/i-.03,.6,.01,t,r,0,.175)),e.add(tt(.02,.1,.02,"#9AA0A8",r+(s%2?-.18:.18),-.2,.19))}return e}function Rf(n="#F4F1EA"){let t=ai([.62,.62]);t.add(ft(.6,.86,.6,n,0,.43,0,{out:.012,r:.02})),t.add(tt(.5,.38,.01,"#2A2A30",0,.36,.301)),t.add(tt(.44,.3,.01,"#4A4A52",0,.36,.305)),t.add(tt(.6,.02,.6,"#2A2A30",0,.87,0));for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(bt(.08,.08,.02,"#4A4A52",s*.14,.89,r*.14,{seg:14})),t.add(bt(.05,.05,.03,"#1B1A20",s*.14,.9,r*.14,{seg:10}));for(let s=0;s<4;s++)t.add(bt(.025,.025,.03,"#1B1A20",-.2+s*.13,.8,.31,{rot:[Math.PI/2,0,0],seg:8}));t.add(tt(.6,.5,.04,n,0,1.12,-.29));let e=new it;e.position.set(.14,.9,.14),e.add(bt(.12,.11,.14,"#9AA0A8",0,.07,0,{out:.01})),e.add(bt(.125,.125,.015,"#8D949C",0,.15,0));let i=tt(.2,.02,.03,"#2A2A30",.2,.1,0);return e.add(i),t.add(e),t}function wf(n="#F4F1EA"){let t=ai([.72,.7]);t.add(ft(.7,1.8,.68,n,0,.9,0,{out:.014,r:.05})),t.add(tt(.66,.015,.01,"#C9CED6",0,1.25,.345)),t.add(tt(.03,.4,.04,"#C9CED6",-.28,1.5,.36)),t.add(tt(.03,.5,.04,"#C9CED6",-.28,.8,.36));for(let e=0;e<4;e++)t.add(ft(.08,.06,.01,["#E2443A","#F2C230","#3E7CC8","#5AA84E"][e],-.1+e*.1-(e>1?.05:0),1.55-e%2*.12,.345));return t.add(ft(.3,.26,.3,"#E8DCC8",0,1.93,0)),t}function Cf(n="#9A6236"){let t=ai([.45,.45]);t.add(ft(.42,.05,.42,n,0,.46,0,{out:.01}));for(let[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(tt(.04,.46,.04,n,e*.18,.23,i*.18));return t.add(tt(.04,.5,.04,n,-.18,.72,-.18)),t.add(tt(.04,.5,.04,n,.18,.72,-.18)),t.add(ft(.4,.2,.03,n,0,.85,-.19,{out:.01})),t}function Pf(n,t=.16){let e=ai([0,0]);e.add(bt(t+.02,t+.02,.04,"#E2443A",0,0,0,{rot:[Math.PI/2,0,0],out:.008}));let i=ne(128,128,a=>{a.fillStyle="#FFF",a.beginPath(),a.arc(64,64,62,0,7),a.fill(),a.fillStyle="#1B1420";for(let l=0;l<12;l++){let c=l/12*6.283;a.fillRect(64+Math.cos(c)*50-3,64+Math.sin(c)*50-3,6,6)}}),s=new at(new In(t,24),new Me({map:i}));s.position.z=.021,e.add(s);let r=new it,o=new it;return r.position.z=o.position.z=.025,r.userData.vivo=o.userData.vivo=!0,r.add(tt(.016,t*.55,.005,"#1B1420",0,t*.27,0)),o.add(tt(.01,t*.8,.005,"#1B1420",0,t*.4,0)),e.add(r,o),n.vivos.push(()=>{let a=n.h||12;o.rotation.z=-(a%1)*Math.PI*2,r.rotation.z=-(a%12)/12*Math.PI*2}),e}function Ff(n=1,t="#B87A4A"){let e=ai([n,.45]);e.add(ft(n,.85,.44,t,0,.425,0,{out:.012}));for(let i=0;i<3;i++)e.add(tt(n-.08,.22,.01,new Yt(t).multiplyScalar(.88).getStyle(),0,.18+i*.25,.221)),e.add(tt(.16,.02,.02,"#7A5233",0,.25+i*.25,.23));return e.add(bt(.06,.08,.03,"#F4F1EA",n/2-.2,.87,0)),e.add(ft(.2,.25,.03,"#7A5233",-n/4,.98,-.1,{rot:[-.15,0,0]})),e}function If(){let n=ai([.4,.65]);return n.add(Qe(new Zn(.19,.15,.4,18),"#FFFFFF",{pos:[0,.2,.05],out:.01})),n.add(bt(.2,.2,.04,"#F4F1EA",0,.42,.05,{out:.008})),n.add(ft(.38,.38,.17,"#FFFFFF",0,.6,-.22,{out:.01})),n.add(tt(.06,.02,.02,"#C9CED6",.12,.8,-.13)),n}function Lf(n=!0){let t=ai([.55,.45]);return t.add(ft(.55,.2,.45,"#FFFFFF",0,.78,0,{out:.01})),t.add(bt(.08,.1,.7,"#FFFFFF",0,.35,-.05,{seg:12})),t.add(bt(.016,.016,.16,"#C9CED6",0,.96,-.15,{seg:8})),n&&(t.add(ft(.5,.7,.03,"#C9CED6",0,1.5,-.21,{out:.01})),t.add(new at(new $t(.44,.64),new pe({color:"#CFE6F2",emissive:"#9CC9E8",emissiveIntensity:.3})).translateY(1.5).translateZ(-.19))),t}var Wh=new Map,la=(n,t)=>(Wh.has(n)||Wh.set(n,t()),Wh.get(n)),ca=(n,t=1,e=1)=>(n.wrapS=n.wrapT=Ai,n.repeat.set(t,e),n);var Df=()=>la("asf",()=>ca(ne(256,256,n=>{n.fillStyle="#5B5F68",n.fillRect(0,0,256,256);let t=xe(7);for(let e=0;e<900;e++)n.fillStyle=t()<.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.07)",n.fillRect(t()*256,t()*256,2+t()*3,2+t()*3);n.strokeStyle="rgba(30,30,36,.18)",n.lineWidth=3,n.beginPath(),n.moveTo(30,200),n.bezierCurveTo(80,180,120,230,170,210),n.stroke()}))),Uf=(n="#D9D2C5",t="#CBC2B3")=>la("calc"+n,()=>ca(ne(128,128,e=>{e.fillStyle=n,e.fillRect(0,0,128,128),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillRect(64,64,64,64),e.strokeStyle="rgba(0,0,0,.12)",e.lineWidth=2,e.strokeRect(1,1,126,126),e.beginPath(),e.moveTo(64,0),e.lineTo(64,128),e.moveTo(0,64),e.lineTo(128,64),e.stroke()})));var _o=n=>la("reb"+n,()=>ca(ne(128,128,t=>{t.fillStyle=n,t.fillRect(0,0,128,128);let e=xe(n.length*13);for(let i=0;i<160;i++)t.fillStyle=e()<.5?"rgba(0,0,0,.035)":"rgba(255,255,255,.05)",t.fillRect(e()*128,e()*128,3+e()*5,2+e()*4)})));var dr=(n="madeira",t="#C8935E",e="#B98450")=>la("piso"+n+t+e,()=>ca(ne(256,256,i=>{if(n==="madeira")for(let s=0;s<8;s++){i.fillStyle=s%2?t:e,i.fillRect(0,s*32,256,32),i.fillStyle="rgba(0,0,0,.12)",i.fillRect(0,s*32,256,2),i.fillRect(s*97%256,s*32,2,32),i.fillStyle="rgba(80,40,10,.08)";for(let r=0;r<4;r++)i.fillRect((s*37+r*61)%256,s*32+10+r*3,40,2)}else if(n==="xadrez")for(let s=0;s<4;s++)for(let r=0;r<4;r++)i.fillStyle=(s+r)%2?t:e,i.fillRect(s*64,r*64,64,64);else if(n==="granilite"){i.fillStyle=t,i.fillRect(0,0,256,256);let s=xe(17);for(let r=0;r<900;r++)i.fillStyle=["#00000022","#FFFFFF33",e+"88"][r%3],i.fillRect(s()*256,s()*256,2+s()*4,2+s()*3)}else{i.fillStyle=t,i.fillRect(0,0,256,256),i.strokeStyle=e,i.lineWidth=4;for(let s=0;s<=4;s++)i.beginPath(),i.moveTo(s*64,0),i.lineTo(s*64,256),i.moveTo(0,s*64),i.lineTo(256,s*64),i.stroke();i.fillStyle="rgba(255,255,255,.08)",i.fillRect(8,8,40,20)}}))),Bf=(n="#F4F1EA",t="#D9E8EE",e="#7FB2C8")=>la("azu"+n+t+e,()=>ca(ne(128,128,i=>{i.fillStyle=n,i.fillRect(0,0,128,128),i.fillStyle=t,i.fillRect(64,0,64,64),i.fillRect(0,64,64,64),i.strokeStyle=e,i.lineWidth=3,i.beginPath(),i.arc(96,32,14,0,7),i.arc(32,96,14,0,7),i.stroke(),i.strokeStyle="rgba(0,0,0,.14)",i.lineWidth=2,i.strokeRect(0,0,64,64),i.strokeRect(64,64,64,64),i.strokeRect(64,0,64,64),i.strokeRect(0,64,64,64)})));function ql(){let n=new it;n.add(bt(.17,.17,.36,"#5E7A99",0,.25,0,{seg:24,out:.008})),n.add(Ie(.17,"#5E7A99",0,.43,0,{seg:24}).translateY(0)),n.children[1].scale.y=.45,n.add(bt(.17,.15,.08,"#4E6A88",0,.04,0,{seg:24,out:.006})),n.add(bt(.04,.05,.06,"#B9BEC6",0,.53,0,{seg:12}));let t=new at(new pn(.11,.018,8,24,Math.PI),kt("#4E6A88"));t.position.set(0,.52,0),n.add(t);let e=new at(new $t(.18,.12),Ee(ne(180,120,i=>{i.fillStyle="#F2C230",i.fillRect(0,0,180,120),i.fillStyle="#C0392B",i.font="900 40px Inter",i.textAlign="center",i.fillText("G\xC1S",90,60),i.font="700 22px Inter",i.fillText("13 kg",90,95)})));return e.position.set(0,.26,.172),n.add(e),n.userData.alca=[0,.62,0],n}function Ls(){let n=new it;n.add(ft(.22,.26,.12,"#E2C08A",0,.13,0,{out:.006,r:.01}));for(let e=0;e<3;e++){let i=Ie(.05,"#D9984A",-.06+e*.06,.27,0,{seg:10});i.scale.set(1.3,.8,1),n.add(i)}let t=[];for(let e=0;e<3;e++)t.push(n.children[e+1]);return n.userData.paes=t,n}function Nf(){let n=new it,t=Ie(.06,"#D9984A",0,.045,0,{seg:12,out:.005});return t.scale.set(1.5,.75,1),n.add(t),n.add(tt(.08,.006,.02,"#B87A30",0,.085,0)),n}function Of(){let n=new it,t=bt(.07,.07,.16,"#7FA45A",0,.08,0,{seg:18,out:.005});t.material=new pe({color:"#9CC46E",transparent:!0,opacity:.85}),n.add(t);for(let i=0;i<9;i++)n.add(Ie(.022,"#4E6A2E",Math.cos(i)*.04,.03+i%4*.03,Math.sin(i*2)*.04,{seg:8}));let e=bt(.075,.075,.03,"#C0392B",0,.175,0,{seg:18,out:.005});return n.add(e),n.userData.tampa=e,n}function Hf(){let n=new it;n.add(bt(.05,.038,.08,"#F4F1EA",0,.04,0,{seg:16,out:.005}));let t=bt(.044,.044,.004,"#5A3418",0,.074,0,{seg:16});n.add(t),n.userData.cafe=t;let e=new at(new pn(.022,.007,6,14),kt("#F4F1EA"));return e.position.set(.055,.045,0),n.add(e),n.add(bt(.075,.07,.01,"#F4F1EA",0,.005,0,{seg:18})),n}function fr(n="#2E6FB8"){let t=new it;return t.add(ft(.3,.38,.16,n,0,0,0,{out:.008,r:.05})),t.add(ft(.22,.16,.06,new Yt(n).multiplyScalar(.8).getStyle(),0,-.07,.1,{r:.03})),t}function Yl(n="#3EA6FF"){let t=new it,e=tt(.012,.1,.01,n,0,.05,0),i=tt(.012,.08,.01,n,0,.14,0);return i.add(tt(.014,.03,.012,"#F4F1EA",0,.03,.008)),t.add(e,i),t.userData.cabo=e,t.userData.ponta=i,t}function Gn(n){let t=new it;t.add(ft(.075,.15,.012,"#1B1A20",0,0,0,{r:.008}));let e=document.createElement("canvas");e.width=300,e.height=600;let i=e.getContext("2d"),s=new is(e);s.colorSpace=un;let r=new at(new $t(.066,.132),new Me({map:s}));return r.position.z=.007,t.add(r),t.desenha=o=>{o(i,300,600),s.needsUpdate=!0},n&&t.desenha(n),t}function pr(){let n=new it;return n.add(bt(.02,.02,.08,"#C9CED6",0,0,.04,{rot:[Math.PI/2,0,0],seg:10,out:.004})),n.add(bt(.018,.018,.07,"#C9CED6",0,-.03,.08,{seg:10})),n.add(tt(.06,.015,.015,"#C9CED6",0,.03,.03)),n}function Xh(n="#F4F1EA"){let t=new it,e=ft(.44,.04,.42,n,0,.44,0,{out:.006});t.add(e);let i=ft(.44,.4,.04,n,0,.68,-.2,{out:.006});i.rotation.x=-.12,t.add(i);let s=[];for(let[r,o]of[[-.19,-.18],[.19,-.18],[-.19,.18],[.19,.18]]){let a=new it;a.position.set(r,.43,o),a.add(bt(.02,.025,.44,n,0,-.22,0,{seg:8,out:.004})),t.add(a),s.push([a,r,o])}return t.abrir=r=>{e.position.y=.44-.38*r,i.position.y=.68-.38*r,i.rotation.x=-.12-.5*r,s.forEach(([o,a,l])=>{o.position.y=.43-.38*r,o.rotation.set(Math.sign(l)*1.4*r,0,-Math.sign(a)*1.4*r)})},t}function mr(n="#F2E6D0"){let t=Ie(.022,n,0,.028,0,{seg:14,out:.003});t.scale.set(1,1.3,1);let e=new it;return e.add(t),e}function qh(n=30){let t=new it;t.add(ft(.3,.04,.36,"#B8A47E",0,.02,0,{out:.004}));let e=[];for(let i=0;i<n;i++){let s=mr();s.position.set(-.12+i%5*.06,.025,-.15+Math.floor(i/5)*.06),t.add(s),e.push(s)}return t.userData.ovos=e,t}function Zl(n=.05){let t=new it,e=new at(new In(n*1.6,18),new pe({color:"#F4F1E4",transparent:!0,opacity:.85}));e.rotation.x=-Math.PI/2,t.add(e);let i=Ie(n*.55,"#F2B430",0,.006,0,{seg:12});return i.scale.y=.4,t.add(i),t}function $l(n=0){let t=xe(n+5),e=new it;for(let i=0;i<4;i++){let s=new at(new re(.02,6,4,0,2,0,1.2),kt("#F2E6D0"));s.position.set((t()-.5)*.08,.005,(t()-.5)*.08),s.rotation.set(t()*3,t()*3,t()*3),e.add(s)}return e}function zf(){let n=new it;n.add(bt(.2,.2,.03,"#F4F1EA",0,.015,0,{seg:28,out:.005})),n.add(bt(.16,.16,.12,"#5A3018",0,.09,0,{seg:28,out:.006}));let t=bt(.165,.165,.025,"#3A1E10",0,.16,0,{seg:28});n.add(t);for(let s=0;s<12;s++){let r=s/12*6.283;n.add(Ie(.014,"#F2546E",Math.cos(r)*.14,.175,Math.sin(r)*.14,{seg:6}))}let e=new it;e.position.y=.17,n.add(e);for(let[s,r]of[[-1,"7"],[1,"2"]]){let o=new at(new $t(.07,.09),Ee(ne(70,90,a=>{a.fillStyle="#F2C230",a.font="900 86px Inter",a.textAlign="center",a.textBaseline="middle",a.strokeStyle="#B88A1A",a.lineWidth=6,a.strokeText(r,35,48),a.fillText(r,35,48)}),{transparent:!0,alphaTest:.4,side:an}));o.position.set(s*.035,.055,0),e.add(o)}let i=new at(new si(.012,.035,8),new Me({color:"#FFB43A"}));return i.position.set(0,.13,0),e.add(i),e.add(tt(.003,.02,.003,"#2A2A2A",0,.105,0)),n.userData.chama=i,n.userData.cobertura=t,n}function kf(){let n=new it,t=new at(new Zn(.035,.03,.11,16,1,!0),new pe({color:"#DDEFF7",transparent:!0,opacity:.45,side:an}));t.position.y=.055,n.add(t);let e=new at(new Zn(.032,.029,.07,16),new pe({color:"#8FCBEA",transparent:!0,opacity:.55}));return e.position.y=.04,n.add(e),n.userData.agua=e,n}function Gf(){let n=new it,t=new it,e=new it;n.add(t,e),t.add(ft(.6,.1,.8,"#A9A49C",-.3,.78,0,{out:.008,r:.02})),e.add(ft(.6,.1,.8,"#A9A49C",.3,.78,0,{out:.008,r:.02})),n.add(bt(.14,.18,.74,"#9A958C",0,.37,0,{seg:12,out:.008}));for(let i of[-1,1]){let s=new it;s.add(ft(.9,.08,.3,"#A9A49C",0,.44,0,{out:.006})),s.add(bt(.08,.1,.42,"#9A958C",0,.21,0,{seg:10})),s.position.z=i*.75,n.add(s)}return n.userData.A=t,n.userData.B=e,n}function ha(n="#E2443A"){let t=new it;t.add(ft(1.7,.55,3.7,n,0,.5,0,{out:.012,r:.12})),t.add(ft(1.5,.5,2,n,0,1,-.25,{out:.01,r:.14}));let e=new pe({color:"#2A3A4E"});for(let[s,r,o,a,l,c]of[[1.38,.38,0,1.02,.76,0],[1.38,.36,0,1.02,-1.26,Math.PI]]){let h=new at(new $t(s,r),e);h.position.set(o,a,l),h.rotation.y=c,t.add(h)}for(let s of[-1,1]){let r=new at(new $t(1.8,.36),e);r.position.set(s*.76,1.02,-.25),r.rotation.y=s*Math.PI/2,t.add(r)}let i=[];for(let[s,r]of[[-.78,1.15],[.78,1.15],[-.78,-1.2],[.78,-1.2]]){let o=bt(.32,.32,.22,"#1E1E22",s,.32,r,{rot:[0,0,Math.PI/2],seg:18,out:.006});t.add(o),i.push(o),t.add(bt(.16,.16,.23,"#B9BEC6",s,.32,r,{rot:[0,0,Math.PI/2],seg:12}))}for(let s of[-1,1])t.add(tt(.3,.14,.04,"#F4F1EA",s*.55,.62,1.86)),t.add(tt(.26,.12,.04,"#E2443A",s*.58,.66,-1.86));return t.add(tt(1.6,.14,.14,"#2A2A30",0,.3,1.88)),t.add(tt(1.6,.14,.14,"#2A2A30",0,.3,-1.88)),t.userData.rodas=i,t}function Vf(){let n=new it,t=new it;n.add(t);let e={side:an};t.add(ft(2.5,.14,2.4,"#E8E4DC",0,3.04,5.2,{out:.012,r:.05})),t.add(ft(2.5,2.2,.14,"#E8E4DC",0,2,4.07,{out:.012,r:.05}));for(let u of[-1,1])t.add(ft(.12,2.2,2.4,"#E8E4DC",u*1.19,2,5.2,{out:.012,r:.04})),t.add(tt(.14,1.08,.14,"#E8E4DC",u*1.16,2.55,6.36));t.add(ft(2.5,1.15,.14,"#E8E4DC",0,1.47,6.33,{out:.012,r:.04})),t.add(tt(2.2,.16,.45,"#2A2A30",0,1.86,6.08)),t.add(Qe(new be(2.3,.1,2.2),"#3A3A40",{pos:[0,.95,5.2]})),t.add(ft(.6,.5,.5,"#4A3A30",.55,1.25,5.3)),t.add(ft(.6,.8,.14,"#4A3A30",.55,1.75,4.95)),t.add(ft(2.4,.9,1.4,"#E8E4DC",0,1.25,6.6,{out:.014,r:.1})),t.add(tt(2.52,.3,2.42,"#2E6FB8",0,1.5,5.2)),t.add(tt(2.42,.2,1.42,"#2E6FB8",0,1,6.6));let i=new at(new $t(2.2,1),new pe({color:"#3A4E66"}));i.position.set(0,2.55,6.42),i.rotation.x=-.1,t.add(i);let s=ft(1.6,.7,.08,"#9EA4AC",0,1.25,7.32,{out:.008});t.add(s);let r=new it;r.position.set(0,.75,7.42),t.add(r),r.add(ft(2.5,.34,.22,"#C9CED6",0,0,0,{out:.01,r:.05}));for(let u of[-1,1]){t.add(tt(.36,.22,.06,"#FFF4C8",u*.9,1.35,7.32));let f=ft(.08,.5,.3,"#2A2A30",u*1.35,2.5,6.2);t.add(f)}let o=new it;o.position.set(1.26,1.6,5.9),t.add(o),o.add(tt(.04,1.6,1.2,"#E8E4DC",0,.2,-.6)),o.add(tt(.045,.1,.1,"#2A2A30",0,.3,-1.05));let a=new at(new $t(1,.7),new pe({color:"#3A4E66",side:an}));a.position.set(.025,.75,-.6),a.rotation.y=Math.PI/2,o.add(a),t.add(bt(.09,.09,1.6,"#8E949C",-1.1,3,4.3,{seg:10}));let l=ft(2.6,3,9.5,"#F2F0EA",0,2.5,-1.2,{out:.018,r:.06});n.add(l);let c=new at(new $t(8,1.4),Ee(ne(1024,180,u=>{u.fillStyle="#F2F0EA",u.fillRect(0,0,1024,180),u.fillStyle="#2E6FB8",u.font="900 120px Inter",u.textAlign="center",u.textBaseline="middle",u.fillText("TRANSPORTES SERRA",512,92)})));for(let u of[-1,1]){let f=c.clone();f.position.set(u*1.31,2.7,-1.2),f.rotation.y=u*Math.PI/2,n.add(f)}let h=[];for(let u of[6.4,4.4,3.4,-3.6,-4.6,-5.6])for(let f of[-1,1]){let d=bt(.52,.52,.4,"#1E1E22",f*1.1,.52,u,{rot:[0,0,Math.PI/2],seg:18,out:.008});n.add(d),n.add(bt(.25,.25,.41,"#B9BEC6",f*1.1,.52,u,{rot:[0,0,Math.PI/2],seg:10})),h.push(d)}return n.add(tt(2.2,.3,13,"#2A2A30",0,.9,-.2)),n.userData={parachoque:r,cabine:t,porta:o,rodas:h,grade:s,vidro:i},n}function Wf(n="#E2443A"){let t=new it;for(let e of[-.65,.65]){let i=new at(new pn(.3,.08,8,20),kt("#1E1E22"));i.position.set(0,.32,e),i.rotation.y=Math.PI/2,t.add(i)}return t.add(ft(.3,.3,1,n,0,.7,0,{out:.008})),t.add(ft(.28,.12,.6,"#2A2A30",0,.88,-.2)),t.add(tt(.6,.04,.04,"#3A3A44",0,1,.5)),t}function Xf(){let n=new it;n.add(ft(.34,.1,1.3,"#2A2A30",0,.45,0,{out:.008})),n.add(tt(.06,.4,.06,"#3A3A44",0,.2,.5)),n.add(tt(.06,.4,.06,"#3A3A44",0,.2,-.5));for(let i of[-1,1])n.add(bt(.03,.03,1.15,"#3A3A44",i*.5,.58,-.55,{seg:8})),n.add(tt(.08,.04,.1,"#3A3A44",i*.5,1.1,-.5));let t=new it;t.position.set(0,1.15,-.55),n.add(t),t.add(bt(.018,.018,2.1,"#C9CED6",0,0,0,{rot:[0,0,Math.PI/2],seg:10,out:.004}));let e=[];for(let i of[-1,1])for(let s=0;s<6;s++){let r=.24-s*.02,o=bt(r,r,.045,["#1E1E22","#E2443A","#2E6FB8","#F2C230","#1E1E22","#5AA84E"][s],i*(.72+s*.05),0,0,{rot:[0,0,Math.PI/2],seg:22,out:.005});t.add(o),e.push(o)}return n.userData.barra=t,n.userData.anilhas=e,n}function qf(n,t){n.children[0].scale.y=1,n.children.forEach((e,i)=>{if(i===0)return;let s=Math.sign(e.position.x)||1,r=e.userData.x0??(e.userData.x0=e.position.x);e.position.x=r*(1-.35*t),e.position.y=-Math.abs(r)*.9*t,e.rotation.z=Math.PI/2+s*1.1*t}),n.children[0].scale.set(1,1-.3*t,1)}function Yf(n="#1E1E22",t=.22){return bt(t,t,.045,n,0,t,0,{rot:[0,0,Math.PI/2],seg:22,out:.005})}function Zf(){let n=new it;n.add(ft(.6,.04,.45,"#C9A06A",0,.72,0,{out:.006})),n.add(tt(.04,.7,.04,"#4A4E58",-.26,.35,-.18)),n.add(tt(.04,.7,.04,"#4A4E58",.26,.35,-.18)),n.add(tt(.04,.7,.04,"#4A4E58",-.26,.35,.18)),n.add(tt(.04,.7,.04,"#4A4E58",.26,.35,.18));let t=n.children[0];return n.userData.tampo=t,n}function $f(){let n=new it,t=new it;return n.add(t),t.add(bt(.08,.1,4.2,"#8E949C",0,2.1,0,{seg:10,out:.006})),t.add(tt(.9,.06,.06,"#8E949C",.45,4.1,0)),t.add(ft(.3,.1,.16,"#5A6270",.85,4.05,0)),n.entortar=e=>{t.rotation.z=-e*.45},n}function iy(n=1,t="#2A2420"){return ne(512,512,e=>{e.clearRect(0,0,512,512);let i=xe(n);e.strokeStyle=t,e.lineCap="round";for(let s=0;s<14;s++){let r=s/14*6.283+i()*.3,o=256,a=256,l=9;e.beginPath(),e.moveTo(o,a);for(let c=0;c<9;c++){r+=(i()-.5)*.6;let h=14+i()*22;o+=Math.cos(r)*h,a+=Math.sin(r)*h,e.lineWidth=l,e.lineTo(o,a),l*=.8}e.stroke(),i()>.5&&(e.lineWidth=2,e.beginPath(),e.moveTo(256+Math.cos(r)*80,256+Math.sin(r)*80),e.lineTo(256+Math.cos(r+.5)*140,256+Math.sin(r+.5)*140),e.stroke())}e.fillStyle=t,e.beginPath(),e.arc(256,256,18,0,7),e.fill()})}function gr(n=1.5,t=1,e){let i=new at(new $t(n,n),new Me({map:iy(t,e),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return i.crescer=s=>{i.visible=s>.01,i.scale.setScalar(Math.max(.01,s)),i.material.opacity=Math.min(1,s*3)},i}function ua(){return new at(new $t(.2,.24),new Me({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,map:ne(200,240,n=>{n.fillStyle="#3A2414AA",n.strokeStyle="#2A1808",n.lineWidth=4,n.beginPath(),n.ellipse(100,150,52,62,0,0,7),n.fill(),n.stroke();for(let t=0;t<4;t++)n.beginPath(),n.ellipse(52+t*32,62-(t===1||t===2?22:6),13,36,(t-1.5)*.12,0,7),n.fill(),n.stroke();n.beginPath(),n.ellipse(162,150,12,30,-.9,0,7),n.fill(),n.stroke()})}))}function Jf(){let n=new it;n.add(bt(.16,.2,.04,"#5A6270",0,.02,0,{seg:16,out:.005})),n.add(bt(.02,.02,1,"#8E949C",0,.52,0,{seg:8}));let t=new it;t.position.set(0,1.08,.04),n.add(t),t.add(Ie(.07,"#5A6270",0,0,-.04,{seg:12}));let e=new at(new pn(.2,.008,6,28),kt("#C9CED6"));t.add(e);let i=new it;t.add(i);for(let s=0;s<3;s++){let r=ft(.08,.18,.01,"#3EA6FF",0,.1,0),o=new it;o.rotation.z=s*2.094,o.add(r),i.add(o)}return n.girar=s=>{i.rotation.z=s*14,t.rotation.y=Math.sin(s*.4)*.6},n}function Ds(n=.4){let t=new it;t.add(tt(.008,n,.008,"#2A2A30",0,-n/2,0));let e=new at(new re(.045,14,10),new pe({color:"#FFF2C8",emissive:"#FFE6A0",emissiveIntensity:1}));return e.position.y=-n-.03,t.add(e),t.userData.bulbo=e,t}function Hi(){let n=new it,t=ne(128,128,e=>{for(let i=0;i<8;i++)e.fillStyle=["#E2443A","#F4F1EA","#3E7CC8","#F4F1EA"][i%4],e.fillRect(0,i*16,128,16)});n.add(Qe(new be(.24,.22,.12),Ee(t),{pos:[0,.11,0],out:.005}));for(let e of[-1,1]){let i=new at(new pn(.06,.008,6,12,Math.PI),kt("#C0392B"));i.position.set(e*.05,.22,0),n.add(i)}return n.add(bt(.012,.012,.2,"#5AA84E",-.05,.28,0,{seg:6,rot:[0,0,.3]})),n.add(Ie(.04,"#5AA84E",-.08,.36,0,{seg:8})),n.add(Ie(.035,"#E2443A",.04,.24,.02,{seg:8})),n.add(Ie(.03,"#F2C230",.07,.23,-.02,{seg:8})),n}function Qf(){let n=new it;return n.add(tt(.02,.14,.02,"#E2443A",0,0,0)),n.add(tt(.012,.06,.012,"#C9CED6",0,.1,0)),n}function Yh(){let n=new it;n.add(bt(.06,.07,.03,"#5A4A3A",0,.015,0,{seg:12})),n.add(bt(.01,.01,.25,"#5A4A3A",0,.15,0,{seg:6}));let t=new at(new Zn(.06,.1,.12,14,1,!0),new pe({color:"#F2E2B8",emissive:"#FFE2A0",emissiveIntensity:.8,side:an}));return t.position.y=.3,n.add(t),n.userData.bulbo=t,n}var as=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=Ai,i.repeat.set(t,e),i.needsUpdate=!0,i},sn=(n,t,e,i,s,r,o=0,a=0)=>{let l=new at(new $t(n,t),e);return l.position.set(i,s,r),l.rotation.set(o,a,0),l.receiveShadow=!0,l},Mo=(n,t=1,e=1)=>Ee(as(_o(n),t,e));function Kf(n,t,e=220){let i=ne(8,512,r=>{let o=r.createLinearGradient(0,0,0,512);t.forEach(([a,l])=>o.addColorStop(a,l)),r.fillStyle=o,r.fillRect(0,0,8,512)}),s=new at(new re(e,24,16),new Me({map:i,side:yn,fog:!1,depthWrite:!1}));return s.renderOrder=-10,n.add(s),s}var jf={tarde:[[0,"#5A7AB8"],[.38,"#E89A62"],[.5,"#F7C98A"],[.56,"#F2B070"],[1,"#C8946A"]],dia:[[0,"#5EA8E8"],[.45,"#A8D6F4"],[.55,"#E4F2FA"],[1,"#CFE4EE"]],manha:[[0,"#6CB0EA"],[.45,"#B4DCF4"],[.55,"#F4EAD2"],[1,"#D8E6EE"]]};function sy(n,t,e,i,s,r={}){let o=new it,a=3.2+i*2.8,l=s[t%s.length];o.add(Qe(new be(4,a,e),Ee(as(_o(l),2,2)),{pos:[-2,a/2,0],out:.012}));for(let h=0;h<i;h++)for(let u=0;u<Math.max(1,Math.floor(e/2.4));u++){let f=-e/2+(u+.5)*e/Math.max(1,Math.floor(e/2.4));o.add(tt(.06,1.2,1,"#E8E2D6",.02,3.2+h*2.8+1.2,f)),o.add(sn(.9,1.1,kt(n()>.5?"#6E8CA8":"#8EA8BE"),.06,3.2+h*2.8+1.2,f,0,Math.PI/2)),o.add(tt(.18,.06,1.1,"#D8D2C4",.1,3.2+h*2.8+.6,f))}let c=null;if(r.casa){o.add(tt(.12,1.6,e,new Yt(l).multiplyScalar(.85).getStyle(),1.6,.8,0,{out:.008}));let h=new it;h.position.set(1.62,0,-e*.2),o.add(h);for(let u=0;u<9;u++)h.add(tt(.03,1.5,.03,"#2F4A3A",0,.75,-.6+u*.15));h.add(tt(.04,.05,1.3,"#2F4A3A",0,1.45,0)),h.add(tt(.04,.05,1.3,"#2F4A3A",0,.2,0)),o.add(tt(.06,1.1,1.3,"#E8E2D6",.02,1.7,e*.2)),o.add(sn(1.2,1,kt("#7E98B0"),.06,1.7,e*.2,0,Math.PI/2)),o.add(Qe(new be(4.6,.25,e+.3),kt("#B8643C"),{pos:[-2,a+.1,0],out:.01}))}else{c=sn(e*.7,2,new pe({color:"#BFD6E2",emissive:"#FFE8C0",emissiveIntensity:.25,transparent:!0,opacity:.85}),.03,1.35,0,0,Math.PI/2),o.add(c),o.add(tt(.08,2.3,.12,"#3A3A44",.04,1.2,-e*.35)),o.add(tt(.08,2.3,.12,"#3A3A44",.04,1.2,e*.35)),o.add(tt(.08,.1,e*.72,"#3A3A44",.04,2.4,0));for(let u=0;u<3;u++)o.add(tt(.3,.04,e*.6,"#8A6A4A",-.4,.7+u*.55,0));for(let u=0;u<12;u++)o.add(tt(.12,.16+n()*.1,.14,["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F2546E"][u%5],-.4,.82+u%3*.55,-e*.28+u/12*e*.56));let h=vf(r.loja??t,e*.9);h.position.set(.15,2.95,0),h.rotation.y=Math.PI/2,o.add(h)}return{g:o,vid:c,H:a}}function bo(n,t={}){let e=(t.incl??0)*Math.PI/180,i=t.hora||"dia",s=xe(t.seed||31),r=i==="tarde";Kf(n,jf[i]);let o=Ti(n,{r:26,pos:r?[-14,9,-30]:[10,18,8],ki:r?2.4:2,hemi:r?1.05:1.5,sky:r?"#F4C08A":"#EAF2FF",ground:r?"#8E6A5A":"#B9A898",key:r?"#FFB070":"#FFF4E2",far:120,target:[0,0,-8]});n.add(new $n(r?"#FFC898":"#FFFFFF",r?.35:.25)),t.fog!==!1&&(n.fog=new so(r?"#F0C49A":"#CFE4EE",80,230));let a=new it;a.rotation.x=-e,n.add(a);let l=t.z0??-90,c=t.z1??40,h=c-l,u=(l+c)/2,f=t.largura||8;a.add(sn(f,h,Ee(as(Df(),f/4,h/4)),0,0,u,-Math.PI/2));for(let E=l;E<c;E+=4)a.add(sn(.14,2,kt("#F2E6B0"),0,.005,E,-Math.PI/2));if(t.faixa!==!1)for(let E=0;E<8;E++)a.add(sn(.55,3,kt("#F4F1EA"),-f/2+.6+E*(f-1.2)/7,.006,0,-Math.PI/2));let d=3;for(let E of[-1,1])a.add(Qe(new be(d,.16,h),Ee(as(Uf(),d,h)),{pos:[E*(f/2+d/2),.08,u]})),a.add(tt(.12,.17,h,"#B8B2A8",E*(f/2+.06),.085,u));let p=t.tipo==="casas"?["#E8C88A","#9CC4B0","#E8A08A","#B8C8E8","#F2E0B0","#D8B8D8"]:["#D8C4A8","#C8B098","#E2D2BC","#B8A890","#D4B89A","#E8D8C0"],v=[],g=f/2+d;for(let E of[-1,1]){let R=l,T=E>0?3:0;for(;R<c;){let A=t.tipo==="casas"?7+s()*3:5+s()*3,w=sy(s,T,A,t.tipo==="casas"?0:1+Math.floor(s()*2),p,{casa:t.tipo==="casas",loja:T});w.g.position.set(E*g,.16,R+A/2),w.g.rotation.y=E>0?Math.PI:0,a.add(w.g),w.vid&&v.push(w.vid),R+=A,T++}}let m=[];for(let E=l+6;E<c;E+=14)for(let R of[-1,1]){let T=$f();T.position.set(R*(f/2+.5),.16,E+(R>0?7:0)),T.rotation.y=R>0?Math.PI:0,a.add(T),m.push(T)}for(let E=l+10;E<c;E+=11){let R=s()>.5?1:-1,T=Zh(s);T.position.set(R*(f/2+1.6),.16,E),a.add(T);let A=gf();A.position.set(-R*(f/2+.5),.16,E+3),a.add(A)}let S=[];for(let[E,R,T]of t.carros||[[1,-26,"#3E7CC8"],[-1,-14,"#F4F1EA"],[1,18,"#5AA84E"],[-1,26,"#2A2A30"]]){let A=ha(T);A.position.set(E*(f/2-1.1),0,R),a.add(A),S.push(A)}return t.passaros!==!1&&zh(n,{centro:[0,26,-40],raio:30,n:6}),{g:a,w:(E,R,T)=>{let A=new P(E,R,T).applyMatrix4(new Ce().makeRotationX(-e));return[A.x,A.y,A.z]},vidros:v,postes:m,parados:S,RW:f,CW:d,luz:o,incl:e}}function Zh(n){let t=new it;t.add(bt(.12,.16,2.4,"#6A4A30",0,1.2,0,{seg:8,out:.006}));for(let e=0;e<4;e++){let i=Ie(.8+n()*.4,["#4C8A3E","#5DA04A","#3E7A34"][e%3],(n()-.5)*1,2.8+n()*.9,(n()-.5)*1,{seg:10,out:.01});t.add(i)}return t.add(tt(1,.3,1,"#7A6A5A",0,.15,0)),t}function tp(n){Kf(n,jf.dia),Ti(n,{r:14,pos:[6,12,6],ki:2,hemi:1.5}),n.add(new $n("#FFFFFF",.25));let t=new it;n.add(t);let e=xe(9);t.add(sn(30,30,Ee(as(dr("granilite","#C8C2B6","#A8A296"),10,10)),0,0,0,-Math.PI/2));for(let[h,u,f,d]of[[0,-8,0,24],[-12,0,Math.PI/2,16],[12,0,-Math.PI/2,16]])t.add(sn(d,1.2,kt("#4E9A6A"),h,.6,u,0,f)),t.add(sn(d,2.6,Mo("#F2E6C8",d/3,1),h,2.5,u,0,f));t.add(Qe(new be(24,7,1),Ee(as(_o("#F2E6C8"),6,2)),{pos:[0,3.5,-8.6]}));for(let h=0;h<9;h++)for(let u=0;u<2;u++)t.add(sn(1.6,1.1,kt("#7E98B0"),-10+h*2.5,2.4+u*3,-7.98)),t.add(tt(1.7,.06,.1,"#E8E2D6",-10+h*2.5,1.8+u*3,-7.95));let i=new at(new $t(4.4,.7),Ee(ne(880,140,h=>{h.fillStyle="#2E6A4A",h.fillRect(0,0,880,140),h.fillStyle="#F4F1EA",h.font="900 70px Inter",h.textAlign="center",h.textBaseline="middle",h.fillText("ESCOLA ESTADUAL",440,74)})));i.position.set(0,6.2,-7.97),t.add(i);let s=Gf();t.add(s);let r=Zh(e);r.position.set(-5.5,0,-4),t.add(r);let o=Zh(e);o.position.set(6.5,0,-5),t.add(o);let a=new it;a.position.set(9,0,-6.5),t.add(a),a.add(bt(.08,.08,3.2,"#3A3A44",0,1.6,0,{seg:8})),a.add(tt(1.2,.8,.05,"#F4F1EA",0,3.2,.3,{out:.006}));let l=new at(new pn(.22,.015,6,18),kt("#E2443A"));l.rotation.x=Math.PI/2,l.position.set(0,2.95,.6),a.add(l);let c=new it;c.position.set(-9,0,-7.6),t.add(c),c.add(ft(.6,1,.4,"#C9CED6",0,.5,0,{out:.006}));for(let h=0;h<6;h++){let u=new it;u.position.set(-11+h*.5,0,-7.7),u.add(ft(.36,.4,.2,["#E2443A","#3E7CC8","#F2C230","#5AA84E"][h%4],0,.2,0,{out:.005})),t.add(u)}return zh(n,{centro:[0,18,-20],raio:14,n:5}),{g:t,mesa:s}}function Jl(n){Ti(n,{r:10,pos:[3,8,4],ki:1,hemi:1.4}),n.add(new $n("#FFF4E6",.45));let t=new it;n.add(t);let e=3,i=22,s=3;t.add(sn(e,i,Ee(as(dr("ceramica","#D8CDB4","#C4B89E"),3,22)),0,0,-6,-Math.PI/2));for(let o of[-1,1])t.add(sn(i,1.1,kt("#3E8A6A"),o*e/2,.55,-6,0,-o*Math.PI/2)),t.add(sn(i,1.9,Mo("#F2E6C8",6,1),o*e/2,2.05,-6,0,-o*Math.PI/2));let r=sn(e,i,kt("#F4F0E8"),0,s,-6,Math.PI/2);t.add(r),t.add(sn(e,s,Mo("#F2E6C8"),0,s/2,-17));for(let o=0;o<4;o++)for(let a of[-1,1]){let l=1-o*5+(a>0?2:0),c=new it;c.position.set(a*(e/2-.02),0,l),c.rotation.y=-a*Math.PI/2,t.add(c),c.add(tt(.9,2.1,.04,"#8A6040",0,1.05,0,{out:.006})),c.add(tt(1,.08,.06,"#5E3E26",0,2.14,0));let h=new at(new $t(.3,.2),Ee(ne(150,100,u=>{u.fillStyle="#F4F1EA",u.fillRect(0,0,150,100),u.fillStyle="#2A2A30",u.font="900 54px Inter",u.textAlign="center",u.textBaseline="middle",u.fillText(String(o*2+(a>0?2:1))+"\xBA",75,54)})));h.position.set(0,1.75,.03),c.add(h)}for(let o=0;o<3;o++){let a=Xl(1.2,.8,50+o,"paisagem");a.position.set(-e/2+.03,1.6,-1.5-o*5),a.rotation.y=Math.PI/2,t.add(a)}for(let o=0;o<5;o++){let a=new bn("#FFF2D8",3,6,1.6);a.position.set(0,2.7,2-o*4.5),t.add(a),t.add(tt(1.2,.04,.2,"#FFFDF0",0,s-.02,2-o*4.5))}return{g:t,W:e,L:i}}function $h(n){Ti(n,{r:8,pos:[5,7,2],ki:1.4,hemi:1.4}),n.add(new $n("#FFF4E6",.45));let t=new it;n.add(t);let e=7,i=7.5,s=3;t.add(sn(e,i,Ee(as(dr("ceramica","#D8CDB4","#C4B89E"),7,7)),0,0,0,-Math.PI/2));for(let[p,v,g,m]of[[e,0,-i/2,0],[e,0,i/2,Math.PI],[i,-e/2,0,Math.PI/2],[i,e/2,0,-Math.PI/2]])t.add(sn(p,1.1,kt("#3E8A6A"),v,.55,g,0,m)),t.add(sn(p,1.9,Mo("#F2E6C8",3,1),v,2.05,g,0,m));t.add(sn(e,i,kt("#F4F0E8"),0,s,0,Math.PI/2));let r=tt(3.6,1.3,.05,"#2E5A44",0,1.65,-i/2+.04,{out:.008});t.add(r),t.add(tt(3.7,.06,.12,"#9A7A5A",0,.98,-i/2+.08));let o=new at(new $t(3.4,1.1),new Me({transparent:!0,map:ne(1024,330,p=>{p.strokeStyle="#F4F1EA",p.fillStyle="#F4F1EA",p.font="600 48px Caveat",p.fillText("F\xEDsica \u2014 For\xE7a e Movimento",40,70),p.font="700 72px Caveat",p.fillText("F = m \xB7 a",80,180),p.font="600 40px Caveat",p.fillText("1 kgf \u2248 9,8 N",520,170),p.lineWidth=4,p.beginPath(),p.moveTo(560,250),p.lineTo(820,250),p.lineTo(800,236),p.moveTo(820,250),p.lineTo(800,264),p.stroke()})}));o.position.set(0,1.65,-i/2+.07),t.add(o);let a=new it;a.position.set(2.2,2.45,-i/2+.04),t.add(a),a.add(bt(.22,.22,.05,"#F4F1EA",0,0,0,{rot:[Math.PI/2,0,0],seg:28,out:.006}));let l=new at(new pn(.22,.02,8,28),kt("#2A2A30"));a.add(l);for(let p=0;p<12;p++){let v=p/12*6.283;a.add(tt(.012,p%3?.02:.04,.01,"#2A2A30",Math.sin(v)*.18,Math.cos(v)*.18,.03))}let c=new it,h=new it;c.add(tt(.016,.11,.01,"#1E1E22",0,.05,0)),h.add(tt(.01,.17,.01,"#1E1E22",0,.08,0)),c.position.z=.035,h.position.z=.04,a.add(c,h),a.add(Ie(.012,"#C0392B",0,0,.045,{seg:8})),a.hora=(p,v)=>{h.rotation.z=-v/60*6.283,c.rotation.z=-(p%12+v/60)/12*6.283};let u=[];for(let p=0;p<4;p++)for(let v=0;v<5;v++){let g=Zf();g.position.set(-2.4+v*1.2,0,-1.4+p*1.3),t.add(g),u.push(g);let m=Cf("#4A4E58");m.position.set(-2.4+v*1.2,0,-1+p*1.3),m.rotation.y=Math.PI,t.add(m)}for(let p=0;p<3;p++){let v=new at(new $t(1.4,1.1),new Me({color:"#CFE6F4"}));v.position.set(e/2-.02,1.9,-2+p*2.2),v.rotation.y=-Math.PI/2,t.add(v),t.add(tt(.08,.06,1.5,"#E8E2D6",e/2-.05,1.33,-2+p*2.2))}let f=new ao("#FFE8C0",14,12,.7,.6,1.2);f.position.set(e/2+2,3.5,0),f.target.position.set(0,0,0),n.add(f,f.target);let d=ft(1.2,.06,.6,"#9A6236",-1.8,.76,-i/2+1.1,{out:.008});return t.add(d),t.add(tt(1.1,.7,.5,"#7A4E2E",-1.8,.36,-i/2+1.1)),{g:t,relogio:a,carteiras:u,D:i,W:e}}function ep(n){Ti(n,{r:9,pos:[3,8,5],ki:1.1,hemi:1.2,key:"#F4F6FF"}),n.add(new $n("#E8ECF8",.5));let t=new it;n.add(t);let e=10,i=8,s=3.4;t.add(sn(e,i,Ee(as(ne(64,64,d=>{d.fillStyle="#26262C",d.fillRect(0,0,64,64),d.strokeStyle="#1A1A1E",d.lineWidth=2,d.strokeRect(0,0,64,64);for(let p=0;p<60;p++)d.fillStyle="#3A3A42",d.fillRect(p*37%64,p*23%64,2,2)}),10,8)),0,0,0,-Math.PI/2));for(let[d,p,v,g,m]of[[i,-e/2,0,Math.PI/2,"#E2443A"],[i,e/2,0,-Math.PI/2,"#3A3A44"],[e,0,i/2,Math.PI,"#3A3A44"]])t.add(sn(d,s,Mo(m,3,1),p,s/2,v,0,g));t.add(sn(e,i,kt("#2A2A30"),0,s,0,Math.PI/2)),t.add(sn(e,s,Mo("#3A3A44",3,1),0,s/2,-i/2));let r=new at(new $t(8,2.1),new Me({map:ne(1024,270,d=>{let p=d.createLinearGradient(0,0,0,270);p.addColorStop(0,"#4A5058"),p.addColorStop(.55,"#3A3E46"),p.addColorStop(1,"#22252A"),d.fillStyle=p,d.fillRect(0,0,1024,270),d.fillStyle="#9A3A34",d.fillRect(0,20,120,250),d.fillStyle="#E8ECF4";for(let v of[180,500,820])d.fillRect(v,8,150,10);d.fillStyle="#2A2C32",d.fillRect(760,120,230,12),d.fillRect(760,175,230,12);for(let v=0;v<8;v++)d.fillStyle="#18181C",d.beginPath(),d.arc(775+v*29,110+v%2*55,11,0,7),d.fill();d.fillStyle="#30333A",d.fillRect(140,150,90,120),d.fillStyle="#C8D0D8",d.fillRect(470,150,90,4),d.fillStyle="#B88A6A",d.beginPath(),d.arc(330,120,26,0,7),d.fill(),d.fillStyle="#3A3A44",d.fillRect(312,146,36,90)})}));r.position.set(0,1.45,-i/2+.02),t.add(r);let o=new at(new $t(8,2.1),new Me({transparent:!0,opacity:.35,map:ne(1024,270,d=>{let p=d.createLinearGradient(0,0,1024,270);p.addColorStop(0,"rgba(255,255,255,0)"),p.addColorStop(.45,"rgba(255,255,255,.5)"),p.addColorStop(.55,"rgba(255,255,255,0)"),d.fillStyle=p,d.fillRect(0,0,1024,270)})}));o.position.set(0,1.45,-i/2+.03),t.add(o),t.add(tt(8.1,.06,.06,"#9EA4AC",0,2.52,-i/2+.04)),t.add(tt(8.1,.06,.06,"#9EA4AC",0,.38,-i/2+.04));let a=new at(new $t(3.2,.8),Ee(ne(800,200,d=>{d.fillStyle="#1E1E22",d.fillRect(0,0,800,200),d.fillStyle="#F2C230",d.font="900 120px Inter",d.textAlign="center",d.textBaseline="middle",d.fillText("FERRO FORTE",400,106)})));a.position.set(-e/2+.03,2.6,0),a.rotation.y=Math.PI/2,t.add(a);let l=Xf();l.position.set(0,0,-.5),t.add(l);let c=new it;c.position.set(3.8,0,-2.6),t.add(c),c.add(ft(1.8,.08,.5,"#3A3A44",0,.5,0)),c.add(ft(1.8,.08,.5,"#3A3A44",0,.9,0));for(let d of[-1,1])c.add(tt(.06,.95,.5,"#3A3A44",d*.87,.47,0));for(let d=0;d<8;d++){let p=new it;p.position.set(-.75+d*.21,.6+d%2*.4,0),p.add(bt(.012,.012,.3,"#9EA4AC",0,0,0,{rot:[Math.PI/2,0,0],seg:6}));for(let v of[-1,1])p.add(bt(.05,.05,.06,"#1E1E22",0,0,v*.12,{rot:[Math.PI/2,0,0],seg:12}));c.add(p)}let h=[];for(let d=0;d<6;d++){let p=Yf(["#1E1E22","#E2443A","#2E6FB8"][d%3],.2);p.position.set(-3.8,.045+d*.05,-2.8),p.rotation.set(Math.PI/2,0,0),t.add(p),h.push(p)}let u=new it;u.position.set(-3.6,0,1.2),u.rotation.y=Math.PI/2,t.add(u),u.add(ft(.7,.15,1.6,"#2A2A30",0,.1,0)),u.add(tt(.6,.02,1.4,"#1A1A1E",0,.19,0));for(let d of[-1,1])u.add(tt(.05,1.1,.05,"#5A6270",d*.32,.7,.7));u.add(ft(.7,.3,.1,"#3A3A44",0,1.25,.72));let f=ft(.5,.8,.4,"#1A1A1E",e/2-.4,2.6,-i/2+.5,{out:.006});t.add(f),t.add(bt(.14,.14,.02,"#3A3A44",e/2-.4,2.75,-i/2+.71,{rot:[Math.PI/2,0,0],seg:16}));for(let d=0;d<3;d++){let p=new bn("#F2F4FF",5,8,1.4);p.position.set(-3+d*3,3,0),t.add(p),t.add(tt(1.4,.04,.3,"#FFFFFF",-3+d*3,s-.02,0))}return{g:t,supino:l,espelho:r,extras:h,som:f,W:e,D:i}}var Us=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=Ai,i.repeat.set(t,e),i.needsUpdate=!0,i},Dn=(n,t,e,i,s,r,o=0,a=0)=>{let l=new at(new $t(n,t),e);return l.position.set(i,s,r),l.rotation.set(o,a,0),l.receiveShadow=!0,l},Jh={};function ry(n=1,t="#E8E2CF",e="#B9B09A"){let i=n+t+e;return Jh[i]?Jh[i]:Jh[i]=ne(512,512,s=>{let r=xe(n);s.fillStyle=e,s.fillRect(0,0,512,512);for(let o=0;o<8;o++)for(let a=0;a<8;a++){let l=(r()-.5)*14,c=new Yt(t).offsetHSL(0,0,l/255);s.fillStyle=c.getStyle(),s.fillRect(o*64+2,a*64+2,60,60)}s.strokeStyle="#6E665488",s.lineWidth=2;for(let o=0;o<5;o++){let a=r()*512,l=r()*512;s.beginPath(),s.moveTo(a,l);for(let c=0;c<6;c++)a+=(r()-.5)*50,l+=r()*40,s.lineTo(a,l);s.stroke()}for(let o=0;o<6;o++)s.fillStyle="#8E846833",s.beginPath(),s.ellipse(r()*512,r()*512,20+r()*40,10+r()*30,r()*3,0,7),s.fill()})}var np=n=>Ee(Us(_o(n),1,1)),vr=(n,t,e,i)=>Ee(Us(ry(e,i),n/1.6,t/1.6)),nt=2.8,xo=.175,Er=.27,Qh=8,ut=-.62,Gt=.62,Mt=1.5,ye=Mt-Qh*Er,da=4;function ip(n,t={}){let e=new it;n.add(e),n.add(new oo("#FFF1D6","#5A4E40",.75)),n.add(new $n("#FFE9C4",.35));let i=kt("#B8B0A4"),s=kt("#8E8678"),r=kt("#A8A094"),o=(da+1)*nt;for(let E=0;E<da;E++){let R=E*nt;for(let A=0;A<Qh;A++){let w=Mt-(A+.5)*Er,M=R+(A+1)*xo,_=Qe(new be(1.06,xo+.16,Er),i,{pos:[ut,M-(xo+.16)/2,w],out:.006});e.add(_),e.add(tt(1.06,.02,.03,"#7A7266",ut,M-.01,w+Er/2-.015))}e.add(Qe(new be(2.4,.22,1.24),r,{pos:[0,R+1.4-.11,ye-.62],out:.006}));for(let A=0;A<Qh;A++){let w=ye+(A+.5)*Er,M=R+1.4+(A+1)*xo;e.add(Qe(new be(1.06,xo+.16,Er),i,{pos:[Gt,M-(xo+.16)/2,w],out:.006})),e.add(tt(1.06,.02,.03,"#7A7266",Gt,M-.01,w-Er/2+.015))}e.add(Qe(new be(2.4,.22,1.4),r,{pos:[0,R+nt-.11,Mt+.7],out:.006}));for(let[A,w,M,_,I]of[[ut+.55,Mt,ye,R,R+1.4],[Gt-.55,ye,Mt,R+1.4,R+nt]]){let $=Math.hypot(M-w,I-_),G=Math.atan2(I-_,Math.abs(M-w))*Math.sign(w-M),U=bt(.025,.025,$,"#2F4A3A",A,(_+I)/2+.9,(w+M)/2,{rot:[Math.PI/2+G,0,0],seg:8,out:.004});e.add(U);for(let z=0;z<=8;z++){let D=z/8;e.add(bt(.012,.012,.9,"#2F4A3A",A,_+(I-_)*D+.45,w+(M-w)*D,{seg:6}))}}let T=Ds(.25);T.position.set(0,R+1.4+2.6,ye-.7),e.add(T)}let a=vr(o,o,3,"#E2DCC4");e.add(Dn(4.8,o,vr(4.8,o,4,"#E2DCC4"),-1.2,o/2,.5,0,Math.PI/2));let l=Dn(4.8,o,a,1.2,o/2,.5,0,-Math.PI/2);e.add(l),e.add(Dn(2.4,o,vr(2.4,o,5,"#E2DCC4"),0,o/2,-1.9));let c=[];for(let E=1;E<=da;E++){let R=E*nt,T=vr(2.4,nt,10+E,"#E2DCC4");e.add(Dn(.15,nt,T,-1.125,R+nt/2,2.9,0,Math.PI)),e.add(Dn(1.35,nt,T,.525,R+nt/2,2.9,0,Math.PI)),e.add(Dn(.9,nt-2.12,T,-.6,R+2.12+(nt-2.12)/2,2.9,0,Math.PI)),e.add(Dn(2,2.4,kt("#D8C8A8"),-.6,R+1.2,4.2,0,Math.PI)),e.add(Dn(1.4,2,kt("#B89A70"),-.6,R+.002,3.55,-Math.PI/2));for(let I of[-1.05,-.15])e.add(Dn(1.3,2.12,kt("#CDBB98"),I,R+1.06,3.55,0,I<-.6?Math.PI/2:-Math.PI/2));let A=new it;A.position.set(-1.05,R,2.88),e.add(A);let w=new it;w.position.x=.45,A.add(w),w.add(tt(.9,2.1,.05,"#7A5236",0,1.05,0,{out:.008})),w.add(Ie(.03,"#C9A030",.33,1,-.04,{seg:8}));let M=new at(new $t(.18,.12),Ee(ne(120,80,I=>{I.fillStyle="#C9A030",I.fillRect(0,0,120,80),I.fillStyle="#2A1E14",I.font="900 56px Inter",I.textAlign="center",I.textBaseline="middle",I.fillText(E+"1",60,42)})));M.position.set(0,1.75,-.03),M.rotation.y=Math.PI,w.add(M),e.add(tt(.06,2.2,.1,"#5E3E26",-1.08,R+1.1,2.88)),e.add(tt(.06,2.2,.1,"#5E3E26",-.12,R+1.1,2.88)),e.add(tt(1.02,.08,.1,"#5E3E26",-.6,R+2.16,2.88)),c.push(A);let _=Ds(.2);_.position.set(0,R+nt-.02,Mt+.7),e.add(_),e.add(tt(.6,.01,.35,["#8E3A2E","#3E5A7A","#5A7A3E","#7A5A2E"][E%4],-.6,R+.005,2.6))}let h=Ee(Us(dr("granilite","#CFC8B8","#8E8678"),4,4));e.add(Dn(4.8,5.8,h,1.2,.001,4.3,-Math.PI/2)),e.add(Dn(4.8,2.8,np("#D8CDB4"),1.2,1.4,7.2,0,Math.PI)),e.add(Dn(4.3,2.8,vr(4.3,2.8,7,"#DCD5BE"),3.6,1.4,5.05,0,-Math.PI/2)),e.add(Dn(4.3,2.8,vr(4.3,2.8,8,"#DCD5BE"),-1.2,1.4,5.05,0,Math.PI/2)),e.add(Dn(2.4,2.8,vr(2.4,2.8,9,"#DCD5BE"),2.4,1.4,2.9));let u=new at(new $t(4.8,4.3),kt("#E8E2D4"));u.rotation.x=Math.PI/2,u.position.set(1.2,2.8,5.05),e.add(u);let f=new it;f.position.set(1.6,0,7.17),e.add(f),f.add(tt(1.4,2.3,.05,"#2F4A3A",0,1.15,0,{out:.008}));let d=new at(new $t(1.2,1.4),new pe({color:"#CDE3EA",emissive:"#FFE9B8",emissiveIntensity:.45}));d.position.set(0,1.45,-.03),d.rotation.y=Math.PI,f.add(d);for(let E=0;E<5;E++)f.add(tt(.02,1.4,.02,"#2F4A3A",-.5+E*.25,1.45,-.04));for(let E=0;E<8;E++)e.add(ft(.3,.2,.12,"#9A8A6A",3.55,1.2+E%2*.24,3.6+Math.floor(E/2)*.34,{out:.004}));let p=ft(1.1,1,.5,"#7A5236",2.7,.5,5.6,{out:.01});e.add(p),e.add(tt(1.2,.04,.6,"#5E3E26",2.7,1.02,5.6)),e.add(bt(.08,.08,.4,"#C0392B",-1.1,1,4.2,{seg:12,out:.005}));let v=new at(new $t(.6,.45),Ee(ne(300,220,E=>{E.fillStyle="#C9A06A",E.fillRect(0,0,300,220),E.fillStyle="#F4F1EA",E.fillRect(20,20,120,80),E.fillRect(160,40,110,70),E.fillRect(40,120,130,80),E.fillStyle="#2A2A30",E.font="700 18px Inter",E.fillText("AVISO",40,50),E.fillText("\xC1GUA",175,70),E.fillText("REUNI\xC3O",52,150)})));v.position.set(-1.19,1.6,5.6),v.rotation.y=Math.PI/2,e.add(v);let g=Ds(.25);g.position.set(1.2,2.8,4.6),e.add(g);let m=[];for(let E=0;E<=da;E++){let R=new bn("#FFD89A",6,6.5,1.6);R.position.set(0,E*nt+2.2,.3),e.add(R),m.push(R)}let S=new bn("#FFE2AE",5,7,1.6);S.position.set(1.2,2.4,4.8),e.add(S),m.push(S);let b=[];return e.traverse(E=>{E.userData.bulbo&&b.push(E.userData.bulbo)}),{g:e,portas:c,luzes:m,lamps:b,portaRua:f,paredeDir:l}}function Bs(n=0,t=da,e={}){let i=[];n===0&&e.portaria!==!1&&i.push([e.x0??1.4,0,e.z0??5],[ut,0,2.3]);for(let s=n;s<t;s++){let r=s*nt;i.push([ut,r,Mt+.05],[ut,r+1.4,ye-.05],[ut+.15,r+1.4,ye-.6],[Gt-.15,r+1.4,ye-.6],[Gt,r+1.4,ye-.05],[Gt,r+nt,Mt+.05]),s<t-1&&i.push([Gt-.1,r+nt,Mt+.6],[ut+.1,r+nt,Mt+.6])}return e.porta&&i.push([Gt-.2,t*nt,Mt+.8],[-.6,t*nt,2.5]),i}function sp(n,t,e=.7){let i=[0];for(let a=1;a<n.length;a++)i.push(i[a-1]+Math.hypot(n[a][0]-n[a-1][0],(n[a][1]-n[a-1][1])*.3,n[a][2]-n[a-1][2]));let s=i.at(-1),r=a=>{a=Math.max(0,Math.min(s,a));let l=1;for(;l<i.length-1&&i[l]<a;)l++;let c=(a-i[l-1])/Math.max(1e-6,i[l]-i[l-1]);return{p:n[l-1].map((h,u)=>h+(n[l][u]-h)*c),i:l}},o=0;return(a,l=e)=>{let c=(a-t)*l,h=r(c),u=r(c+.35),f=u.p[0]-h.p[0],d=u.p[2]-h.p[2];Math.hypot(f,d)>.001&&(o=Math.atan2(f,d));let p=Math.abs(n[h.i][1]-n[h.i-1][1])>.01;return{p:h.p,ry:o,sobe:p,fim:c>=s,prog:c/s,tot:s}}}function Ao(n,t=1.6,e=1,i=0){let s=n*t*Math.PI*2,r=Math.sin(s),o=Math.cos(s);return{bob:Math.abs(o)*.03-.02,lean:10+i*6,twist:r*3,hipL:[40*Math.max(0,r)*e+8,0],hipR:[40*Math.max(0,-r)*e+8,0],knL:55*Math.max(0,r)*e+6,knR:55*Math.max(0,-r)*e+6,shL:[-14*r,8],shR:[14*r,8],elL:20,elR:20,headX:4}}function Ql(n,t,e,i,s={}){let r=new it;n.add(r),r.add(Dn(t,e,Ee(Us(dr(...s.piso||["ceramica","#D8CFBE","#C4B9A4"]),t*1.2,e*1.2)),0,0,0,-Math.PI/2));let o=s.azul?Ee(Us(Bf("#F6F4EE","#E2E6E4","#B8C8C8"),t/.8,i/.8)):np(s.parede||"#EDE6D6"),a=[[t,0,-e/2,0],[t,0,e/2,Math.PI],[e,-t/2,0,Math.PI/2],[e,t/2,0,-Math.PI/2]].map(([c,h,u,f])=>{let d=Dn(c,i,o,h,i/2,u,0,f);return r.add(d),d}),l=new at(new $t(t,e),kt("#F4F0E8"));l.rotation.x=Math.PI/2,l.position.y=i,r.add(l);for(let[c,h,u,f]of[[0,-e/2+.01,t,.02],[0,e/2-.01,t,.02],[-t/2+.01,0,.02,e],[t/2-.01,0,.02,e]])r.add(tt(u,.08,f,"#C8BEAE",c,.04,h,{shadow:!1}));return{g:r,paredes:a}}function fa(n,t,e="manha",i=1){let s={manha:["#8CC8F0","#E8F4FA","#F4E0B0"],tarde:["#F2A65A","#F7D28A","#E8B070"],noite:["#141A38","#2A2E58","#F2C76A"],madrugada:["#2E3A6A","#6A6E9A","#E8C88A"]}[e],r=ne(512,360,l=>{let c=l.createLinearGradient(0,0,0,360);c.addColorStop(0,s[0]),c.addColorStop(1,s[1]),l.fillStyle=c,l.fillRect(0,0,512,360);let h=xe(i);for(let u=0;u<9;u++){let f=40+h()*40,d=120+h()*160,p=u*58-10;l.fillStyle=e==="noite"||e==="madrugada"?"#1E2238":["#D8CDB8","#C8B8A0","#E2D2BC","#B8A890"][u%4],l.fillRect(p,360-d,f,d);for(let v=0;v<6;v++)for(let g=0;g<3;g++)l.fillStyle=e==="noite"||e==="madrugada"?h()>.55?s[2]:"#2A2E44":"#8EA6B8",l.fillRect(p+6+g*(f/3),360-d+12+v*24,f/3-10,12)}}),o=new it,a=new at(new $t(n,t),new Me({map:r}));o.add(a);for(let l of[-1,1])o.add(tt(.05,t+.05,.06,"#E8E2D6",l*n/2,0,.02));return o.add(tt(n,.05,.06,"#E8E2D6",0,t/2,.02)),o.add(tt(n+.14,.05,.14,"#E8E2D6",0,-t/2,.06)),o.add(tt(.03,t,.03,"#E8E2D6",0,0,.02)),o.userData.vidro=a,o}function je(n,t={}){let e=t.hora||"manha";Ti(n,{r:6,pos:e==="noite"?[1,6,2]:[-2,6,-5],ki:e==="noite"?.7:1.5,hemi:e==="noite"?1:1.6,key:e==="noite"?"#FFD9A0":"#FFF2DC"}),n.add(new $n(e==="noite"?"#FFD49A":"#FFF4E6",e==="noite"?.55:.5));let i=3.4,s=3.2,r=2.6,{g:o}=Ql(n,i,s,r,{azul:!0,piso:["ceramica","#C9BBA4","#B5A68C"]}),a=fa(1,.9,e,2);a.position.set(.4,1.6,-s/2+.02),n.add(a);let l=Rf("#F4F1EA");l.position.set(-1.05,0,-s/2+.34),n.add(l);let c=ql();c.scale.setScalar(.65),c.position.set(-1.5,0,-s/2+.25),n.add(c);let h=Sf(1.5,"#F4F1EA","#8E8678");h.position.set(.45,0,-s/2+.32),n.add(h),h.children.forEach(A=>{A.isGroup&&Math.abs(A.position.y-.9)<.01&&(A.visible=!1)});let u=pr();u.position.set(.45-.375,1.05,-s/2+.02),n.add(u);let f=wf("#F4F1EA");f.position.set(1.32,0,-s/2+.38),n.add(f);let d=Tf(1.6,"#F4F1EA");d.position.set(-.3,2.05,-s/2+.18),n.add(d);let p=new it;p.position.set(.15,0,.45),n.add(p);let v=ne(256,256,A=>{for(let w=0;w<8;w++)for(let M=0;M<8;M++)A.fillStyle=(w+M)%2?"#E2443A":"#F6F2EA",A.fillRect(w*32,M*32,32,32)}),g=new at(new be(1.12,.012,.82),Ee(Us(v,2,1.5)));g.position.y=.77,p.add(g);for(let A of[-1,1]){let w=new at(new $t(1.12,.14),Ee(Us(v,2,.3),{side:an}));w.position.set(0,.7,A*.41),p.add(w);let M=new at(new $t(.82,.14),Ee(Us(v,1.5,.3),{side:an}));M.position.set(A*.56,.7,0),M.rotation.y=Math.PI/2,p.add(M)}p.add(ft(1,.04,.7,"#B87A4A",0,.745,0));for(let[A,w]of[[-1,-1],[1,-1],[-1,1],[1,1]])p.add(tt(.05,.72,.05,"#9A6236",A*.44,.36,w*.29));let m=Xh();m.position.set(.15,0,1.12),m.rotation.y=Math.PI,n.add(m);let S=Xh();S.position.set(.15,0,-.22),n.add(S);let b=new it;b.position.set(-i/2+.01,0,.9),n.add(b),b.add(tt(.04,2.1,.85,"#8A6040",0,1.05,0)),b.add(tt(.06,2.2,.06,"#6A4630",0,1.1,-.45)),b.add(tt(.06,2.2,.06,"#6A4630",0,1.1,.45));let E=new at(new $t(.32,.42),Ee(ne(160,210,A=>{A.fillStyle="#F6F2EA",A.fillRect(0,0,160,210),A.fillStyle="#C0392B",A.fillRect(0,0,160,46),A.fillStyle="#FFF",A.font="900 26px Inter",A.textAlign="center",A.fillText("MERCADO",80,32),A.fillStyle="#2A2A30",A.font="700 14px Inter";for(let w=0;w<5;w++)for(let M=0;M<7;M++)A.fillText(String(w*7+M+1),14+M*22,72+w*28)})));E.position.set(i/2-.02,1.6,.2),E.rotation.y=-Math.PI/2,n.add(E);let R=Ds(.3);R.position.set(0,r,.2),n.add(R);let T=new bn("#FFE2AE",e==="noite"?7:2.5,6,1.6);return T.position.set(0,2.1,.2),n.add(T),{g:o,fogao:l,botijao:c,pia:h,torneira:u,mesa:p,cad1:m,cad2:S,W:i,D:s,Hh:r,janela:a,luz:T,lamp:R}}function So(n,t={}){let e=t.hora||"noite",i=e==="noite"||e==="madrugada";Ti(n,{r:6,pos:[3,6,-2],ki:i?.5:1.4,hemi:i?.55:1.5,sky:i?"#8E9CD0":"#EAF2FF",key:i?"#9FB4F0":"#FFF2DC"}),n.add(new $n(i?"#5A6AA8":"#FFF4E6",i?.35:.5));let s=2.8,r=3,o=2.6,{g:a}=Ql(n,s,r,o,{parede:"#C9D6C8",piso:["madeira","#9A6A42","#8A5E3A"]}),l=new it;l.position.set(.62,0,-.35),n.add(l),l.add(ft(.95,.32,1.95,"#8A5A36",0,.18,0,{out:.01})),l.add(ft(.95,.7,.06,"#7A4E2E",0,.55,-.98,{out:.01}));let c=ft(.88,.1,1.85,"#7FA6C9",0,.39,0,{out:.008});l.add(c);let h=ft(.6,.14,.3,"#F4F1EA",0,.5,-.8,{out:.006});l.add(h);let u=ft(.9,.04,1.1,"#E8B86A",0,.45,.35,{out:.006});l.add(u);let f=Jf();f.position.set(-.9,0,-1.1),f.rotation.y=.6,n.add(f);let d=fa(.9,.9,e,4);d.position.set(.6,1.55,-r/2+.02),n.add(d);let p=new ao(i?"#FFC870":"#FFF4DC",i?18:6,7,.6,.6,1.4);p.position.set(.6,2.2,-r/2-.5),p.target.position.set(.4,0,.4),n.add(p,p.target);let v=new it;v.position.set(-s/2+.01,0,.75),n.add(v),v.add(tt(.03,2.05,.8,"#8A6040",0,1.03,0));let g=tt(.08,2.15,.08,"#B88A5E",.02,1.08,-.44,{out:.006});v.add(g),v.add(tt(.08,2.15,.08,"#B88A5E",.02,1.08,.44,{out:.006})),v.add(tt(.08,.08,.96,"#B88A5E",.02,2.15,0));let m=new at(new $t(.5,.7),Ee(ne(250,350,R=>{R.fillStyle="#1E2A44",R.fillRect(0,0,250,350),R.fillStyle="#F2C230",R.font="900 46px Inter",R.textAlign="center",R.fillText("TREINO",125,70),R.fillStyle="#E2443A",R.beginPath(),R.arc(125,200,70,0,7),R.fill(),R.fillStyle="#F4F1EA",R.font="900 60px Inter",R.fillText("10",125,222)})));m.position.set(s/2-.02,1.6,.2),m.rotation.y=-Math.PI/2,n.add(m);let S=Ff(.7,"#B87A4A");S.position.set(-.85,0,1.15),S.rotation.y=Math.PI,n.add(S);let b=Ds(.25);b.position.set(0,o,0),n.add(b);let E=new bn("#FFE2AE",i?0:3,5,1.6);return E.position.set(0,2.2,0),n.add(E),{g:a,cama:l,colchao:c,lencol:u,travesseiro:h,ventilador:f,janela:d,porta:v,batente:g,luz:E,lamp:b,rua:p,W:s,D:r,Hh:o}}function Kh(n){Ti(n,{r:5,pos:[2,6,3],ki:1.2,hemi:1.5}),n.add(new $n("#FFF4E6",.5));let t=2,e=2.2,i=2.5,{g:s}=Ql(n,t,e,i,{azul:!0,piso:["ceramica","#B8C8C8","#A0B4B4"]}),r=Lf(!0);r.position.set(.3,0,-e/2+.25),n.add(r);let o=If();o.position.set(-.55,0,-e/2+.35),n.add(o);let a=bt(.03,.025,.09,"#3EA6FF",.55,.925,-e/2+.2,{seg:10,out:.003});n.add(a);let l=new it;l.position.set(0,0,e/2-.02),n.add(l),l.add(tt(.8,2.05,.04,"#E8E2D6",0,1.03,0,{out:.006}));let c=new it;c.position.set(-.3,1,-.04),l.add(c),c.add(bt(.02,.02,.05,"#C9A030",0,0,0,{rot:[Math.PI/2,0,0],seg:8})),c.add(tt(.12,.02,.02,"#C9A030",.05,0,-.03));let h=pr();h.position.set(.3,.98,-e/2+.05),n.add(h);let u=Ds(.15);return u.position.set(0,i,0),n.add(u),{g:s,pia:r,porta:l,macaneta:c,torneira:h,copo:a,W:t,D:e}}function pa(n,t={}){Ti(n,{r:6,pos:[2,6,4],ki:1,hemi:1.3,key:"#FFE8C8"}),n.add(new $n("#FFE9D0",.5));let e=3.6,i=3.2,s=2.6,{g:r}=Ql(n,e,i,s,{parede:"#E8D8B8",piso:["madeira","#A87A4E","#966A42"]}),o=bf(1.8,"#7A6A5A");o.position.set(-.6,0,-i/2+.5),n.add(o);let a=ft(1,.04,.7,"#C84E4E",-.9,.78,-i/2+.62,{out:.005});a.rotation.x=-.5,n.add(a);let l=xf(1,"#7A5236");l.position.set(1.2,0,i/2-.3),l.rotation.y=Math.PI,n.add(l);let c=new it;c.position.set(1.2,.5,i/2-.32),c.rotation.y=Math.PI,n.add(c),c.add(ft(.62,.5,.45,"#3A3A40",0,.25,-.05,{out:.008}));let h=new at(new $t(.48,.36),new pe({color:"#5A6A7A",emissive:"#3A4A5A",emissiveIntensity:.4}));h.position.set(0,.26,.18),c.add(h);let u=new it;u.position.set(.2,0,.35),n.add(u),u.add(ft(.9,.04,.6,"#9A6236",0,.74,0,{out:.008})),u.add(tt(.86,.01,.58,"#F4F1EA",0,.765,0));for(let[g,m]of[[-1,-1],[1,-1],[-1,1],[1,1]])u.add(tt(.05,.72,.05,"#7A4E2E",g*.38,.36,m*.24));let f=fa(1.1,1,"tarde",6);f.position.set(e/2-.02,1.55,-.4),f.rotation.y=-Math.PI/2,n.add(f);let d=new at(new $t(.5,.3),new Me({transparent:!0,map:ne(250,150,g=>{g.strokeStyle="#2F4A3A",g.lineWidth=6;for(let m=0;m<9;m++)g.beginPath(),g.moveTo(20+m*26,10),g.quadraticCurveTo(30+m*26+(m>2&&m<7?30:0),80,20+m*26,145),g.stroke();g.beginPath(),g.moveTo(10,14),g.quadraticCurveTo(125,60,240,14),g.stroke(),g.beginPath(),g.moveTo(10,140),g.lineTo(240,140),g.stroke()})}));d.position.set(e/2-.04,1.25,-.35),d.rotation.y=-Math.PI/2,n.add(d);for(let g=0;g<2;g++){let m=Xl(.5,.4,30+g,"paisagem");m.position.set(-e/2+.02,1.7,-.6+g*.9),m.rotation.y=Math.PI/2,n.add(m)}let p=Af(.9,4);p.position.set(-e/2+.35,0,i/2-.35),n.add(p);let v=Ds(.3);return v.position.set(0,s,.2),n.add(v),{g:r,mesa:u,sofa:o,tv:c,janela:f,W:e,D:i,Hh:s,manta:a}}var tu={shL:[0,8],shR:[0,8],hipL:[0,0],hipR:[0,0]},eu={elL:8,elR:8};function F(n,...t){let e={...n};for(let i of t)if(i)for(let s in i){let r=i[s];if(Array.isArray(r)){let o=e[s]||tu[s]||[0,0];e[s]=[o[0]+(r[0]||0),o[1]+(r[1]||0),(o[2]||0)+(r[2]||0)]}else e[s]=(e[s]??eu[s]??0)+r}return e}function Pe(n,t,e){let i={},s=new Set([...Object.keys(n),...Object.keys(t)]);for(let r of s){let o=n[r],a=t[r];if(Array.isArray(o)||Array.isArray(a)){let l=o||tu[r]||[0,0],c=a||tu[r]||[0,0];i[r]=[V(l[0],c[0],e),V(l[1]??0,c[1]??0,e),V(l[2]||0,c[2]||0,e)]}else i[r]=V(o??eu[r]??0,a??eu[r]??0,e)}return i}var rp={io:Dl,out:Ue,in:gi,lin:n=>yt(n),back:n=>{n=yt(n);let t=1.9;return 1+(t+1)*Math.pow(n-1,3)+t*Math.pow(n-1,2)},mola:n=>(n=yt(n),1-Math.cos(n*Math.PI*2.5)*Math.exp(-n*5))};function Un(n,t){if(n<=t[0][0])return t[0][1];for(let e=1;e<t.length;e++)if(n<=t[e][0]){let i=(n-t[e-1][0])/Math.max(1e-6,t[e][0]-t[e-1][0]);return Pe(t[e-1][1],t[e][1],rp[t[e][2]||"io"](i))}return t[t.length-1][1]}function He(n,t){if(n<=t[0][0])return t[0][1];for(let e=1;e<t.length;e++)if(n<=t[e][0]){let i=rp[t[e][2]||"io"]((n-t[e-1][0])/Math.max(1e-6,t[e][0]-t[e-1][0])),s=t[e-1][1],r=t[e][1];return Array.isArray(s)?s.map((o,a)=>V(o,r[a],i)):V(s,r,i)}return t[t.length-1][1]}var jh=(n,t)=>Math.sin(n*.71+t)*.6+Math.sin(n*1.37+t*2.1)*.3+Math.sin(n*2.9+t*3.3)*.1;function An(n,t=0,e=1){let i=Math.sin(n*1.9+t),s=jh(n*.35,t*2.3),r=jh(n*.6,t*4.1);return{bob:i*.004*e-Math.abs(s)*.008*e,lean:i*.8*e,tilt:s*2.2*e,hipL:[0,s*2*e],hipR:[0,-s*2*e],knL:Math.max(0,s)*9*e,knR:Math.max(0,-s)*9*e,shL:[r*3*e,i*1.2*e],shR:[-r*3*e,i*1.2*e],elL:(4+r*4)*e,elR:(4-r*4)*e,headY:jh(n*.4,t*7)*6*e,headZ:-s*1.5*e}}var X=(n,t=0,e=1)=>F({shL:[0,9],shR:[0,9],elL:12,elR:12},An(n,t,e)),zi=(n,t=1)=>{let e=Math.sin(n*5.2);return{lean:(6+e*3)*t,bob:e*.008*t,shL:[e*3*t,e*2*t],shR:[e*3*t,e*2*t],headX:(-2+e*3)*t}},Be=(n,t=1)=>{let e=Math.sin(n*41)*t,i=Math.sin(n*57+1)*t;return{lean:e*.8,tilt:i*.7,shL:[e*1.5,i],shR:[i*1.5,e],headZ:e*.8,bob:i*.002}};function ae(n,t={}){let e=t.f||1.8,i=t.amp??1,s=t.ph||0,r=Bh(n,e,i,s),o=Math.sin((n*e+s)*Math.PI*2);return r.headY=-o*3*i,r.tilt=o*1.8*i,r.headZ=-o*1.2*i,t.chinelo&&(r.knL*=.8,r.knR*=.8,r.hipL[0]*=.85,r.hipR[0]*=.85),t.curvado&&(r.lean+=10,r.headX=-6),t.maos==="bolso"&&(r.shL=[18+o*2,0,-90],r.shR=[18-o*2,0,-90],r.elL=105,r.elR=105),r}var Ns=(n,t=2.9,e=1)=>{let i=Nh(n,t,e),s=Math.sin(n*t*Math.PI*2);return i.headY=-s*3,i.tilt=s*2.5,i},ht={bracoCruzado:{shL:[30,4,-75],shR:[26,4,-80],elL:95,elR:95,lean:-3},maosCintura:{shL:[-15,55,-90],shR:[-15,55,-90],elL:85,elR:85,lean:-2},maosBolso:{shL:[18,0,-90],shR:[18,0,-90],elL:105,elR:105,lean:2,headX:4},maosCabeca:{shL:[150,38],shR:[150,38],elL:130,elR:130,headX:-6},bracosAbertos:{shL:[55,55],shR:[55,55],elL:22,elR:22,lean:-4,headX:-4},abraco:{shL:[70,20,-80],shR:[70,20,-80],elL:50,elR:50,lean:8},maosFrente:{shL:[80,8],shR:[80,8],elL:14,elR:14,lean:6},desculpa:{shL:[55,22],shR:[55,22],elL:85,elR:85,lean:-3,headX:6,headZ:6},ombros:{shL:[10,24],shR:[10,24],elL:70,elR:70,headZ:10,bob:.015},celular:{shR:[62,6],elR:72,shL:[30,10],elL:60},filmar:{shR:[88,2],elR:38,shL:[70,-6],elL:60,headX:2},co\u00E7arOlho:{shR:[118,-8],elR:150,headX:8,headZ:-6},apontar:{shR:[92,6],elR:4},punhoFecha:{shR:[70,10],elR:105,headX:18},pegaChao:{lean:52,bob:-.18,hipL:[64,6],hipR:[60,6],knL:85,knR:80,shL:[74,6],shR:[74,6],elL:6,elR:6,headX:-20},carregaFrente:{lean:-10,shL:[22,-4],shR:[22,-4],elL:50,elR:50,knL:12,knR:12,bob:-.02,headX:-6},quadril:{shL:[-6,30],elL:100,shR:[8,10],elR:20,tilt:-6,lean:3},ajoelhado:{bob:-.3,lean:6,hipL:[92,4],hipR:[-6,4],knL:92,knR:98,shL:[12,10],shR:[12,10],elL:25,elR:25},sentadoChao:{bob:-.48,lean:-10,hipL:[80,18],hipR:[80,18],knL:30,knR:30,shL:[-30,20],shR:[-30,20],elL:10,elR:10},testaParede:{lean:22,shL:[100,18],elL:85,shR:[10,8],elR:15,headX:16},comemora:{shL:[160,30],shR:[160,30],elL:20,elR:20,headX:-12},assustado:{shL:[30,22],shR:[30,22],elL:100,elR:100,lean:-8,headX:-6},aceno:{shR:[150,30],elR:30}},op=(n,t=1)=>({shR:[148,30+Math.sin(n*7)*14*t],elR:32+Math.sin(n*7+1)*18*t}),ki=(n,t=1)=>{let e=Math.abs(Math.sin(n*9));return{bob:e*.01*t,headX:-8*t-e*4*t,shL:[e*5*t,8+e*4*t],shR:[e*5*t,8+e*4*t],lean:-3*t}},To=(n,t=2.2,e=0)=>{let i=Math.max(0,Math.sin((n*t+e)*Math.PI*2));return{bob:i*.16,knL:(1-i)*30,knR:(1-i)*30,hipL:[(1-i)*18,4],hipR:[(1-i)*18,4],shL:[140+i*20,30],shR:[140+i*20,30],elL:30,elR:30,headX:-10}},ap=n=>({shR:[40+Math.sin(n*18)*15,20],elR:70+Math.sin(n*18+1)*30,shL:[20,10],elL:60});var lp=(n,t=0)=>{let e=Math.sin(n*13.1+t)*Math.sin(n*3.7+t*2),i=(n*.37+t*.13)%1;return i>.82&&e>.2?.25:i>.8&&i<.83?.55:1};function ce(n,t={}){let e=ip(n,t),i=e.luzes.map(s=>s.intensity);return Hh(n,s=>{e.luzes.forEach((r,o)=>{let a=o===e.luzes.length-1?1:lp(s,o*1.7);r.intensity=i[o]*a*(t.luz??1)}),e.lamps.forEach((r,o)=>{r.material.emissiveIntensity=lp(s,o%5*1.7)})}),e}var rn=()=>{let n=ql();return n.scale.setScalar(.65),n};function cp(n,t,e,i="R",s=1){let r=new it;t.position.set(0,-e,0),r.add(t),n.hands[i].add(r),r.position.set(0,-.04,0);let o=new Rn,a=new Rn,l=new pi;return r.prumo=(c=0)=>{n.root.updateMatrixWorld(!0),n.hands[i].getWorldQuaternion(o),n.root.getWorldQuaternion(a),l.set(Math.sin(c*3.1)*.06*s,0,Math.sin(c*2.3)*.05*s),r.quaternion.copy(o.invert().multiply(a).multiply(new Rn().setFromEuler(l)))},r}var li=(n,t="R",e=1)=>{let i=rn(),s=cp(n,i,.405,t,e);return s.obj=i,s},Vn=(n,t="L",e=1)=>{let i=Ls();i.scale.setScalar(.8);let s=cp(n,i,.22,t,e);return s.obj=i,s};function hn(n,t,e,i,s=.7,r={}){let a=(n._and||(n._and=sp(t,i,s)))(e,r.v??s);n.place(a.p[0],a.p[2],a.p[1],a.ry);let l=e<i||a.fim,c=l?F({shL:[0,9],shR:[0,9],elL:12,elR:12},An(e,n.seed||0,.7)):a.sobe?Ao(e,r.f||1.6,r.amp??1,r.carga||0):ae(e,{f:r.fw||1.7,chinelo:!0});return!l&&r.carga&&(c=F(c,Be(e,r.carga*.6),{lean:r.carga*8})),r.pose&&(c=r.pose(e,a,c)||c),n.pose(c),{...a,parado:l}}function hp(n,t,e={}){let i=xe(e.seed||3),s=t.map((r,o)=>{let a=gr(e.tam||.6*(.7+i()*.6),(e.seed||3)+o*7,e.cor||"#3A3028");return a.position.set(r[0],r[1]+.004,r[2]),a.rotation.set(...r[3]||[-Math.PI/2,0,i()*6]),n.add(a),a.crescer(0),a});return r=>s.forEach((o,a)=>o.crescer(yt(r*s.length-a*.6,0,1)))}var jn=22.6,iu=.42,oy=[[0,-160],[4,-118],[8.2,-62],[11,-40],[14.2,-28],[16.4,-17],[19.5,-6],[20.6,-3],[jn,-iu]],Os=.58,Hs=7.53*Os,su=n=>n<20.6?n:n<23.6?20.6+(n-20.6)*.3:21.5+(n-23.6),nu=su(jn),up=n=>n>=jn?-iu+.25*Ue((su(n)-nu)/.14):He(n,oy.map(([t,e])=>[t,e,"lin"]));function dp(n){return n<32.6?n:n<38.6?32.6:Math.max(3.4,32.6-(n-38.6)*8.6)}var Kl=(n,t,e,i={})=>L(n,i.quem||null,t,e,i);function jl(n,t={}){let e=bo(n,{incl:6,hora:t.hora||"tarde",tipo:"lojas",z0:-210,z1:50,seed:31,carros:[[1,-36,"#3E7CC8"],[-1,-21,"#F4F1EA"],[1,21,"#5AA84E"],[-1,31,"#2A2A30"]]}),i=e.g,s=xe(17),r=(D,q,k,ot)=>{let pt=go(D);return pt.place(q,k,0,ot),i.add(pt.root),pt.root.userData.ator=pt,pt.seed=Math.abs(q*13+k*7|0)%9,pt},o=r(Jt,0,0,Math.PI),a=Vn(o,"L",.6),l=Ls();l.scale.setScalar(.8),i.add(l);let c=Nf();c.scale.setScalar(.8),i.add(c);let h=new it;i.add(h);let u=Vf();u.scale.setScalar(Os),h.add(u);let f=u.userData;f.vidro.material=new pe({color:"#9EC0DA",transparent:!0,opacity:.28,depthWrite:!1});let d=go(zl);d.place(.55*Os,5.5*Os,1.52*Os-.28*1.05+.02,0),d.sombra.visible=!1,h.add(d.root),d.seed=4;let p=new at(new pn(.2,.025,8,24),kt("#2A2A30"));p.position.set(.55,1.92,6),p.rotation.x=-.9,u.add(p);let v=f.parachoque,g=[-1,1].map(D=>{let q=ua();return q.scale.setScalar(.9),q.position.set(D*.2,.02,.115),v.add(q),q.visible=!1,q}),m=ha("#E2862E");i.add(m);let S=ha("#8E5AB8");i.add(S);let b=Wf("#C0392B");i.add(b);let E=go(nn(4,{bone:"#2A2A30"}));i.add(E.root),E.seed=2;let T=[[-4.5,-9,-1,2.8,-2.5],[-4.4,-15,-1,3.4,3],[4.5,-12,1,2.9,2.5],[4.6,-20,1,3.6,-3],[-4.4,-26,-1,4.2,2],[4.4,-6,1,3.1,-2.5],[-4.6,-3,-1,2.6,3],[4.5,-30,1,4.6,3]].map(([D,q,k,ot,pt],Rt)=>({k:r(nn(Rt+1),D,q,k>0?-Math.PI/2:Math.PI/2),x:D,z:q,s:k,td:ot,dz:pt})),A=[];for(let D=0;D<70;D++){let q=Ri(D%3?"#FFB43A":"#FFF2A0",.09+s()*.06,1);q.userData={ph:s(),vx:(s()-.5)*1.6,vy:.6+s()*2,roda:Math.floor(s()*6)},i.add(q),A.push(q)}let w=[];for(let D=0;D<46;D++){let q=Ri("#A8A29A",1,0,!1);q.userData={ph:s(),roda:Math.floor(s()*6),dx:(s()-.5)*.6},i.add(q),w.push(q)}let M=[[-1.1,-3.6],[1.1,-3.6],[-1.1,-4.6],[1.1,-4.6],[-1.1,-5.6],[1.1,-5.6]].map(([D,q])=>[D*Os,q*Os]),_=gr(4.2,5,"#1A1614");_.rotation.set(-Math.PI/2,0,.3),_.position.set(0,.012,.15),i.add(_);let I=gr(2.2,9,"#1A1614");I.rotation.set(-Math.PI/2,0,1.4),I.position.set(.3,.013,.5),i.add(I);let $=[];for(let D=0;D<18;D++){let q=D/18*6.283;$.push([Math.cos(q)*.6,.05,.2+Math.sin(q)*.6])}let G=vo(i,$,{n:48,size:1.4,life:5,op:.32,sp:.4,spread:.25,cor:"#C8B8A0"}),U=[];for(let D=0;D<14;D++){let q=Ri("#E8E4DE",.6,0,!1);q.userData={ph:D/14},h.add(q),U.push(q)}function z(D,q,k={}){let ot=up(q),pt=su(q),Rt=pt-nu,Nt=Rt>0,_e=pt;h.position.set(0,0,ot-Hs),f.rodas.forEach(_t=>{_t.rotation.x=Nt?0:-ot/(.52*Os)});let st=yt(Rt/.12);v.scale.z=1-.45*st,v.position.z=7.42-.05*st,g.forEach(_t=>{_t.visible=st>.05}),f.grade.position.z=7.32-.06*st,h.rotation.x=Nt?-Math.sin(Math.min(1,Rt/.5)*Math.PI)*.015*Math.exp(-Rt*2):0;let vt=Nt?ot+iu:0;o.place(0,vt,0,Math.PI);let Bt=k.guiPose?k.guiPose(D,q):F(ht.maosFrente,{shL:[-16,0],shR:[-16,0],hipL:[30,6],knL:38,hipR:[-22,4],knR:8,lean:16},Be(D,Nt?1:0));o.pose(Bt),a.visible=q<(t.tSolta??19.75),a.prumo(D);let xt=q-(t.tSolta??19.75);if(l.visible=xt>=0,xt>=0){let _t=Math.max(0,.42-4.9*xt*xt);l.position.set(-.3,_t,.1),l.rotation.set(0,.3,-1.3*j(.15,.4,xt))}let Zt=pt-(nu+.45);if(c.visible=Zt>0,Zt>0){let _t=Math.min(7.5,.55*Zt+.02*Zt*Zt);c.position.set(-.45-_t*.05,.02,.25+_t),c.rotation.set(_t/.05,0,0)}let te=Nt?Math.exp(-Rt*3)*Math.sin(Math.min(1,Rt*4)*Math.PI):0;d.pose(k.motPose?k.motPose(D,q):{bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,lean:8+te*30,shL:[62,6],shR:[52+Math.max(0,Math.sin(D*11))*12,4],elL:40,elR:55,headX:-6+te*10});let he=(_t,qt=30,At=16)=>yt((ot-(_t-qt))/At),Ne=Ue(he(-62,34,14)),ve=Ue(he(-44,32,12));m.position.set(V(2.2,5.3,Ne),.16*j(.5,.7,Ne),-62-1.5*Ne),m.rotation.y=Math.PI-Math.sin(Ne*Math.PI)*.55-Ne*.25,S.position.set(V(-2.2,-5.2,ve),.16*j(.5,.7,ve),-44-1.2*ve),S.rotation.y=Math.PI+Math.sin(ve*Math.PI)*.5+ve*.3;let ze=he(-27,26,8),N=-27-1.5*ze;if(b.position.set(1.6+1.6*Ue(ze),0,N),b.rotation.set(0,Math.PI,1.45*Ue(ze)),ze<=0)E.place(1.6,N+.1,.35,Math.PI),E.pose({bob:-.17,hipL:[80,14],hipR:[80,14],knL:85,knR:85,shL:[70,10],shR:[70,10],elL:20,elR:20,lean:18});else{let _t=Ue(yt(ze*1.4));E.place(1.6+2.6*_t,N+.6,0,Math.PI+1.2),E.pose(F(ht.sentadoChao,{shL:[60,30],shR:[40,20]}))}Kl(E,D,ze>0?"medo":"preocupado"),T.forEach((_t,qt)=>{let At=(ot-(_t.z-34-qt*2))/9,Se=_t.s*6.95,Vt=_t.z+_t.dz,C=Math.hypot(Se-_t.x,_t.dz),y=yt(Math.max(0,At)*_t.td/C);_t.k.root.visible=y<.999,_t.k.place(V(_t.x,Se,y),V(_t.z,Vt,y),.16,At>0?Math.atan2(Se-_t.x,_t.dz):qt%2?0:Math.PI),_t.k.pose(At>0?Ns(D+qt*.3,3):F(ht.assustado,An(D,qt))),Kl(_t.k,D,At>0?"medo":"surpreso")});let Nn=ot-Hs;A.forEach(_t=>{let qt=_t.userData,At=(_e*2.6+qt.ph)%1*.45,[Se,Vt]=M[qt.roda];_t.visible=!Nt&&_e>3,_t.position.set(Se+qt.vx*At,.06+qt.vy*At-4.9*At*At,Nn+Vt-2*At),_t.material.opacity=1-At/.45}),w.forEach(_t=>{let qt=_t.userData,At=(_e*.5+qt.ph)%1*2.2,[Se,Vt]=M[qt.roda],C=up(Math.min(q,jn)-At)-Hs+Vt;_t.position.set(Se+qt.dx*(1+At),.3+At*.6,Math.min(C,Nn+Vt)),_t.scale.setScalar(.5+At*1.3),_t.material.opacity=(Nt?.35:.5)*Math.sin(Math.min(1,At/2.2)*Math.PI),_t.visible=_e>3}),U.forEach(_t=>{let qt=_t.userData,At=(_e*.45+qt.ph)%1;_t.visible=Rt>.3,_t.position.set((qt.ph-.5)*.6,1.15+At*1.1,4.6+At*.3),_t.scale.setScalar(.3+At*.9),_t.material.opacity=.35*Math.sin(At*Math.PI)}),_.crescer(yt(Rt/.35)),I.crescer(yt((Rt-.1)/.4)),G(Nt?Rt*1.6:-1),e.vidros.forEach((_t,qt)=>{let At=Nt?Math.exp(-Rt*2.5)*.03:0;_t.position.y=1.35+Math.sin(_e*70+qt)*At,_t.material.emissiveIntensity=.25+At*6}),Kl(o,D,k.guiEmo||"determinado",k.guiExtra),Kl(d,D,k.motEmo||"medo",{quem:"mot"})}return{L:e,g:i,gui:o,ca:u,cw:h,mot:d,sacC:l,paoR:c,carA:m,carB:S,mo:b,pil:E,povo:T,upd:z,marcas:g}}var ci=dp,fp={tint:"#FFF0E0",sat:1.08},hi=(n,t,e,i={})=>Z(n,t,{bg:"#E8B080",fov:i.fov||40,far:600,perto:i.perto},s=>{let r=jl(s,i),o=e(r,s);return(a,l,c)=>(r.g.updateMatrixWorld(!0),{...fp,...o(a,l,c)||{}})}),jt=(n,t,e,i)=>n.L.w(t,e,i),yr=(n,t)=>{let e=t>jn,i=yt((t-jn)/.2);return F(ht.maosFrente,{shL:[-22,0],shR:[-22,0],hipL:[24,6],knL:24+8*i,hipR:[-18-6*i,4],knR:6,lean:2+5*i,bob:-.02*i},Be(n,e?1.2*Math.exp(-(t-jn)*.8)+.25:0))},ay=(n,t)=>Un(t,[[0,F({shL:[0,9],shR:[4,9],elL:14,elR:12,headX:2},An(n,3,.6))],[19.6,{shL:[6,10],shR:[4,9],elL:18,elR:12,headX:-4}],[19.85,{shL:[-6,14],shR:[2,10],elL:6,elR:10,headX:-2},"out"],[20.5,F(ht.maosFrente,{shL:[-18,0],shR:[-18,0],hipL:[24,6],knL:22,hipR:[-18,4],knR:6,lean:2}),"back"]]),Ei=(n,t)=>t<20.5?ay(n,t):yr(n,t),ly=n=>n<19.4?"neutro":"determinado",pp=[Z(0,4,{bg:"#000000"},()=>()=>({vig:0,exposure:0})),hi(4,8.2,n=>(t,e,i)=>{let s=ci(t);n.upd(t,s,{guiPose:Ei,guiEmo:ly(s)});let r=n.cw.position.z+Hs;return W(i,[[0,jt(n,2.6,13,9)],[1,jt(n,2.2,11.5,5)]],jt(n,0,0,r*.55-4),e/4.2),{bloom:.3}}),hi(8.2,11,n=>(t,e,i)=>{let s=ci(t);n.upd(t,s,{guiPose:Ei});let r=n.cw.position.z+Hs;return Kn(i,[[0,jt(n,2.3,.55,-6.5)],[1,jt(n,2.1,.7,-7.6)]],[[0,jt(n,-.5,2.2,r)],[1,jt(n,-.5,2,r)]],e/2.8,.012+e*.004),{focus:30,range:40,blur:2}}),hi(11,14.2,n=>(t,e,i)=>{let s=ci(t);n.upd(t,s,{guiPose:Ei,motEmo:"medo"}),n.ca.updateMatrixWorld(!0);let r=ur(n.ca,-.7+e*.15,2.25,10.6-e*.4),o=ur(n.ca,.55,2.4,5.5);return Kn(i,r,o,e/3.2,.02),{focus:3.2,range:2,blur:5}},{perto:!0}),hi(14.2,16.4,n=>(t,e,i)=>{let s=ci(t);return n.upd(t,s,{guiPose:Ei}),W(i,[[0,jt(n,.55,.12,.9)],[1,jt(n,.45,.14,.75)]],[[0,jt(n,0,.08,0)],[1,jt(n,0,.1,-.05)]],e/2.2),{focus:.9,range:.4,blur:14}}),hi(16.4,19.5,n=>(t,e,i)=>{let s=ci(t);n.upd(t,s,{guiPose:Ei,guiEmo:"neutro"});let r=j(0,1,e/3.1);return W(i,[[0,jt(n,1,.35,-1.1)],[1,jt(n,1.05,1.22,-1.05)]],[[0,jt(n,.1,.35,0)],[.5,jt(n,0,.8,0)],[1,jt(n,0,1.16,0)]],r,0,.4),{focus:1.6,range:1,blur:6}}),hi(19.5,20.6,n=>(t,e,i)=>{let s=ci(t);return n.upd(t,s,{guiPose:Ei,guiEmo:"determinado"}),W(i,[[0,jt(n,-1.7,1.1,-1.3)],[1,jt(n,-1.55,1.05,-1.15)]],[[0,jt(n,0,.95,0)],[1,jt(n,0,.9,-.1)]],e/1.1),{focus:2.2,range:1.2,blur:5}}),hi(20.6,22.55,n=>(t,e,i)=>{let s=ci(t);return n.upd(t,s,{guiPose:Ei,guiEmo:"determinado"}),W(i,[[0,jt(n,1.9,.95,-.2)],[1,jt(n,1.6,.9,-.35)]],[[0,jt(n,0,.82,-.6)],[1,jt(n,0,.82,-.45)]],e/1.95),{focus:1.9,range:.8,blur:8,sat:1.15}}),hi(22.55,23.6,n=>(t,e,i)=>{let s=ci(t);n.upd(t,s,{guiPose:Ei,guiEmo:"bravo"});let r=Math.max(0,s-jn);return Kn(i,[[0,jt(n,3.6,1.6,2.6)],[1,jt(n,3.9,1.7,2.9)]],[[0,jt(n,0,.7,-.4)],[1,jt(n,0,.7,-.4)]],e/1.05,.07*Math.exp(-r*6)*(r>0)),{flash:r>0?.5*Math.exp(-r*18):0,bloom:.5}}),hi(23.6,25.5,n=>(t,e,i)=>{let s=ci(t);n.upd(t,s,{guiPose:Ei,guiEmo:"determinado"});let r=n.paoR.position;return W(i,[[0,jt(n,-1,.22,2.4)],[1,jt(n,-.9,.25,2.8)]],[[0,jt(n,-.3,.35,.2)],[1,jt(n,-.3,.4,.5)]],e/1.9),{focus:2.2,range:1.5,blur:5}}),hi(25.5,29.3,n=>(t,e,i)=>{let s=ci(t);return n.upd(t,s,{guiPose:Ei,guiEmo:"determinado"}),W(i,[[0,jt(n,-2.7,.3,-1.05)],[1,jt(n,-2.35,.36,-.8)]],[[0,jt(n,0,.95,.2)],[1,jt(n,0,.95,.22)]],e/3.8,0,0),{focus:2,range:2,blur:4,bloom:.35}}),hi(29.3,33.6,n=>(t,e,i)=>{let s=ci(t),r=Math.min(t,32.6);n.upd(r,s,{guiPose:Ei,guiEmo:"determinado"});let o=j(32.5,32.8,t);return W(i,[[0,jt(n,.5,1.24,-.76)],[1,jt(n,.26,1.16,-.52)]],[[0,jt(n,0,1.06,.22)],[1,jt(n,0,1.08,.24)]],e/4.3,0,0),{focus:1.4,range:.8,blur:8,sat:1.08-.5*o,tint:o>0?"#E8EEF8":fp.tint,flash:o*(1-j(32.8,33.1,t))*.5}},{perto:!0}),hi(33.6,38.6,n=>{let t=Gn();t.scale.setScalar(4.2),n.g.add(t);let e=(r,o)=>t.desenha((a,l,c)=>{a.fillStyle="#F4F6FA",a.fillRect(0,0,l,c),a.fillStyle="#E2443A",a.fillRect(0,0,l,60),a.fillStyle="#FFFFFF",a.font="800 30px Inter",a.textAlign="center",a.fillText("\u25B6 v\xEDdeo",l/2,42),a.save(),a.translate(l/2,c*.48),a.scale(1+r*.25,1+r*.25),a.lineWidth=12,a.lineJoin="round",a.strokeStyle=o?"#2D8CD6":"#2A2A30",a.fillStyle=o?"#2D8CD6":"rgba(0,0,0,0)",a.beginPath(),a.moveTo(-70,-10),a.lineTo(-30,-10),a.lineTo(-10,-80),a.quadraticCurveTo(15,-95,18,-60),a.lineTo(12,-18),a.lineTo(70,-18),a.quadraticCurveTo(92,-15,86,10),a.lineTo(70,75),a.quadraticCurveTo(64,90,45,90),a.lineTo(-30,90),a.lineTo(-30,-10),a.closePath(),o&&a.fill(),a.stroke(),a.strokeRect(-70,-10,40,100),a.restore(),a.fillStyle=o?"#2D8CD6":"#5A5A66",a.font="900 52px Inter",a.fillText(o?"Curtido!":"Curtir",l/2,c*.74)});e(0,!1);let i=-1,s=(r,o)=>Un(r,[[33.6,yr(32.6,o)],[34.9,yr(32.6,o)],[35.7,F(yr(32.6,o),{shR:[60,30],elR:50,twist:-6}),"io"],[36.1,F(yr(32.6,o),{shR:[82,42],elR:22,twist:-8}),"out"],[36.7,F(yr(32.6,o),{shR:[82,42],elR:22,twist:-8})],[37.5,yr(32.6,o)]]);return(r,o,a)=>{let l=ci(r);n.upd(32.6,l,{guiPose:(d,p)=>s(r,p),guiEmo:r>36.1?"feliz":"determinado",guiExtra:{look:r>34.6?[-.7,0]:[0,0],smile:r>36.2?.6:void 0}});let c=Ue(yt((r-33.8)/.55)),h=r>36.05,u=h?Math.exp(-(r-36.05)*5):0,f=h?1:0;return(f!==i||h)&&(e(u,h),i=f),t.position.set(.5+(1-c)*1,1.12+Math.sin(r*2)*.01,-.02),t.rotation.set(0,-2.85+u*.05,Math.sin(r*1.7)*.02+u*.04),W(a,jt(n,.3,1.3,-.76),jt(n,.16,1.04,.15),o/5,0,0),{sat:.62,tint:"#E8EEF8",focus:1.9,range:1,blur:4}}},{perto:!0}),hi(38.6,42,n=>(t,e,i)=>{let s=ci(t);n.upd(t,s,{guiPose:Ei,guiEmo:"neutro"});let r=e/3.4;return W(i,[[0,jt(n,2.4,14,11)],[1,jt(n,2,16,13)]],[[0,jt(n,0,0,-40)],[1,jt(n,0,0,-55)]],r,Math.sin(t*30)*.004,0),{tint:r<.5?"#FFE0C8":"#F4F4FF",exposure:1+Math.sin(t*40)*.06,sat:.8}})];var ui={tint:"#FFF4E4"},cy={shL:[24,-6],shR:[24,-6],elL:52,elR:52},ru={lean:-6,bob:-.06,knL:22,knR:18,hipL:[14,6],hipR:[10,6],shL:[-8,14],shR:[-8,14],elL:14,elR:14,headX:-14,headZ:6},ou=(n,t,e=1)=>F({...n,...cy,lean:(n.lean||0)-8},Be(t,.7*e)),hy=n=>{let t=rn();return t.position.set(0,.1,.27),n.root.add(t),t};function Ro(n,t,e={}){let i=ra("gota",e.tam||.12);return n.add(i),s=>{let r=s*(e.v||.8)%1,o=ur(t.headG,.17*(e.lado||1),.42-r*.25,.16);i.position.set(...o),i.material.opacity=Math.sin(r*Math.PI),i.visible=e.on??!0}}var mp=[Z(42,45.6,{bg:"#2A2420",fov:38},n=>{let t=ce(n),e=K(n,po,1.6,7,Math.PI),i=K(n,Jt,-.25,3.55,.35),s=K(n,hr,2.75,6.25,-Math.PI/2-.5),r=li(e,"R",.5),o=rn();return o.position.set(.85,0,4.25),n.add(o),(a,l,c)=>{let h=a-42,u=yt(h/1.4),f=yt((h-2.5)/1.1),d=V(1.6,1,u)+V(0,.5,f),p=V(7,4.75,u)+V(0,2.3,f);e.place(d,p,0,f>0?.15:Math.PI+.25);let v=He(h,[[1.35,0],[1.75,1],[2.15,1],[2.5,0]]);return e.pose(h<1.4?ae(a,{f:1.9}):f>0?ae(a,{f:1.9}):F(Pe(X(a,1),{lean:45,bob:-.12,hipL:[40,6],hipR:[40,6],knL:50,knR:50,shR:[55,8],elR:5,headX:-15},v))),r.visible=h<1.95,o.visible=h>=1.95,r.prumo(a),L(e,null,a,h>2.2?"feliz":"neutro"),i.pose(F(ht.maosBolso,An(a,2,.8))),L(i,null,a,"neutro",{look:[Math.sin(h)*.3,0]}),s.pose(F(X(a,4),{shR:[40,10],elR:90,shL:[35,10],elL:90,headX:10})),L(s,null,a,"tedio"),t.portaRua.rotation.y=-1.2*(j(0,.4,h)*(1-j(1,1.4,h))+j(3,3.3,h)),W(c,[[0,[-.85,1.55,6.7]],[1,[-.7,1.5,6.4]]],[[0,[.8,.85,4.3]],[1,[.6,.8,4.1]]],l/3.6),ui}}),Z(45.6,51,{limpa:!1,bg:"#2A2420",fov:36},n=>{let t=ce(n),e=K(n,Jt,-.25,3.55,.35),i=K(n,hr,2.75,6.25,-Math.PI/2-.3),s=rn();n.add(s);let r=Ro(n,e,{v:.9});return(o,a,l)=>{let c=o-45.6,h=yt(c/1.1);e.place(V(-.25,.85,h),V(3.55,3.85,h),0,V(.35,0,h));let u={lean:34,bob:-.2,hipL:[68,10],hipR:[68,10],knL:96,knR:96,shL:[56,4],shR:[56,4],elL:8,elR:8,headX:-12},f=Un(c,[[0,ae(o,{chinelo:!0})],[1.1,X(o,2)],[1.6,u],[2,F(u,{headX:-24})],[3.4,F(u,{lean:28,bob:-.17,headX:-30})],[4.6,F({lean:-6,shL:[24,-6],shR:[24,-6],elL:52,elR:52,knL:14,knR:14,bob:-.03,headX:0})]]);e.pose(c<1.1?ae(o,{chinelo:!0}):F(f,Be(o,c>1.9?1.3:0)));let d=j(3.4,4.6,c);if(s.position.set(.85,.1*d,4.25-0*d),c>3.4){let p=e.root.localToWorld(new P(0,.1*d,.27));s.position.copy(p).lerp(new P(.85,0,4.25),1-d)}return s.rotation.z=Math.sin(o*40)*.02*(c>2),L(e,null,o,c>1.9?"vergonha":"neutro",{look:[0,c>1.9?.3:0],mouth:c>1.9&&c<4.2?{open:.15,smile:-.6}:void 0}),r(o),i.pose(F(X(o,4),{shR:[40,10],elR:90,shL:[35,10],elL:90,headX:4})),L(i,null,o,"desconfiado",{look:[-.6,0]}),W(l,[[0,[2.3,1.25,6]],[1,[2.1,1.1,5.7]]],[[0,[.5,.75,3.9]],[1,[.75,.65,4]]],a/5.4),ui}}),Z(51,55,{bg:"#2A2420",fov:50},n=>{let t=ce(n),e=K(n,Jt,ut,2.3,Math.PI),i=hy(e),s=[[ut,0,2.5],...Bs(0,1,{portaria:!1})];return(r,o,a)=>{let l=hn(e,s,r,50.4,.5,{f:1.35,pose:(c,h,u)=>ou(u,c,.5)});return L(e,null,r,"preocupado",{look:[0,-.2]}),W(a,[[0,[1.05,1.15,.3]],[1,[1.05,1.3,.1]]],[[0,[-.62,1.05,1.5]],[1,[-.62,1.65,.5]]],o/4),ui}}),Z(55,58,{bg:"#2A2420",fov:50},n=>{let t=ce(n),e=K(n,Jt,ut,Mt,Math.PI,nt),i=rn();n.add(i);let s=Ro(n,e,{v:1.1}),r=[[ut,nt,Mt+.3],[ut,nt,Mt+.05],[ut,nt+.7,Mt-1.08]];return(o,a,l)=>{let c=o-55,h=hn(e,r,o,54.6,.32,{f:.9,carga:1,pose:(p,v,g)=>ou(g,p,1.2)}),u=j(1.55,2.1,c),f=e.root.localToWorld(new P(0,.1,.27)),d=new P(ut-.05,nt+.9,Mt-1.5);return i.position.copy(f).lerp(d,u),i.rotation.set(0,0,0),c>1.55&&(e.root.rotation.y=V(Math.PI,2*Math.PI-.86,j(1.7,2.4,c)),e.root.position.x=V(ut,-.86,j(1.8,2.5,c)),e.pose(F(Pe(ou(Ao(o,.9),o),ht.testaParede,j(1.6,2.5,c)),zi(o,j(2,2.6,c))))),L(e,null,o,c>2.2?"sono":"vergonha",{mouth:{open:.25+.1*Math.sin(o*9),smile:-.4}}),s(o),W(l,[[0,[1.05,nt+1.3,1.1]],[1,[1.05,nt+1.35,.95]]],[[0,[-.62,nt+1.25,.8]],[1,[-.85,nt+1.4,.45]]],a/3),ui}}),Z(58,59.6,{bg:"#2A2420",fov:34},n=>{let t=ce(n),e=K(n,Jt,-.95,Mt-1.08,Math.PI/2,nt+.7),i=rn();i.position.set(ut-.05,nt+.9,Mt-1.5),n.add(i);let s=Ro(n,e,{v:1.2}),r=Ro(n,e,{v:.9,lado:-1});return(o,a,l)=>(e.pose(F(ru,zi(o,1.2))),L(e,"gui",o,"sono",{look:[.5,.2]}),s(o),r(o+.4),W(l,[[0,[.25,nt+1.5,.75]],[1,[.15,nt+1.48,.7]]],[[0,[-.92,nt+1.6,.42]],[1,[-.92,nt+1.6,.42]]],a/1.6),{...ui,focus:.9,range:.5,blur:6})}),Z(59.6,63,{bg:"#2A2420",fov:50},n=>{let t=ce(n),e=K(n,Jt,-.95,Mt-1.08,Math.PI/2,nt+.7),i=rn();i.position.set(ut-.05,nt+.9,Mt-1.5),n.add(i);let s=K(n,Ke,Gt,-.2,0,nt-.7),r=Hi();r.position.set(0,-.2,0),s.hands.R.add(r);let o=Ls();o.scale.setScalar(.8),o.position.set(.06,-.18,.04),s.hands.R.add(o);let a=[[Gt,nt-1.4+.2,ye+.3],[Gt,nt,Mt+.05],[Gt-.1,nt,Mt+.6],[ut+.1,nt,Mt+.6],[ut,nt,Mt+.05],[ut,nt+.5,Mt-.75]];return(l,c,h)=>{let u=hn(s,a,l,59.6,.9,{f:2});L(s,null,l,"neutro");let f=j(60.6,61.3,l);return e.pose(F(ru,zi(l,1),{headY:-40*f,headX:4*f})),L(e,null,l,f>.5?"surpreso":"sono",{look:[.6*f,.4]}),W(h,[[0,[-.1,nt+1.95,2.75]],[1,[-.15,nt+1.9,2.65]]],[[0,[-.75,nt+1,.55]],[1,[-.7,nt+1,.6]]],c/3.4),ui}}),Z(63,66.4,{limpa:!1,bg:"#2A2420",fov:56,perto:!0},n=>{let t=ce(n),e=K(n,Jt,-.95,Mt-1.08,Math.PI/2,nt+.7),i=rn();n.add(i);let s=K(n,Ke,ut,Mt-.75,Math.PI,nt+.5),r=Hi();r.position.set(0,-.2,0),s.hands.R.add(r);let o=Ls();o.scale.setScalar(.8),n.add(o);let a=Vn(e,"R",.08),l=[[ut,nt+.5,Mt-.75],[ut+.03,nt+.5,Mt-.76],[ut+.14,nt+1.4,ye-.05],[ut+.15,nt+1.4,ye-.6],[Gt-.15,nt+1.4,ye-.6]];return(c,h,u)=>{let f=c-63,d=f>1.9,p=d&&hn(s,l,c,64.9,.8,{f:2,pose:(S,b,E)=>d?F(E,{shL:[-6,30],elL:100,tilt:-5}):null});if(!d){s.place(ut,Mt-.75+.05,nt+.5,Math.PI-.5*j(0,.4,f));let S=He(f,[[.1,0],[.6,1],[1.2,1],[1.7,0]]);s.pose(F(Pe(X(c,3),{lean:50,bob:-.1,hipL:[40,8],hipR:[40,8],knL:40,knR:40,shL:[70,10],elL:10,headX:-10},S),f>1.2?{shL:[-6,30],elL:100,tilt:-5}:{}))}let v=f>1.15,g=new P;if(v)s.root.updateMatrixWorld(!0),s.root.localToWorld(g.set(.24,.22,.02)),i.position.copy(g),i.rotation.set(0,s.root.rotation.y,-.35);else if(i.position.set(ut-.05,nt+.9,Mt-1.5),i.rotation.set(0,0,0),f>.6){let S=j(.6,1.15,f);s.root.updateMatrixWorld(!0),s.root.localToWorld(g.set(.24,.22,.02)),i.position.lerp(g,S)}let m=yt((f-2.1)/.4);if(o.visible=m<1,a.visible=m>=1,m<1){s.hands.R.updateMatrixWorld(!0);let S=s.hands.R.localToWorld(new P(.05,-.15,.05));e.hands.R.updateMatrixWorld(!0);let b=e.hands.R.localToWorld(new P(0,-.26,0));o.position.copy(S.lerp(b,Ue(m)))}return e.place(-.95,Mt-1.08+.1,nt+.7,V(Math.PI/2,Math.PI*.1,j(.2,.9,f))),e.pose(F(Pe(F(ru,zi(c,1)),X(c,2),j(.2,1,f)),{shR:[He(f,[[1.8,0],[2.2,40],[3,15]]),8],elR:He(f,[[1.8,12],[2.2,40],[3,25]])})),a.prumo(c),L(e,null,c,"surpreso",{look:[Math.sin(f*2)*.3,-.3]}),L(s,null,c,f>2.5?"determinado":"neutro"),W(u,[[0,[.25,nt+2.35,2]],[1,[.2,nt+2.3,1.9]]],[[0,[-.8,nt+.9,.55]],[1,[-.75,nt+1,.45]]],h/3.4),ui}}),Z(66.4,70.4,{bg:"#2A2420",fov:52},n=>{let t=ce(n),e=K(n,Jt,ut,Mt,Math.PI,nt),i=K(n,Ke,ut,Mt,Math.PI,nt),s=rn();i.root.add(s),s.position.set(.24/.84,.22/.84,.02),s.rotation.z=-.35,s.scale.setScalar(.65/.84);let r=Hi();r.position.set(0,-.2,0),i.hands.R.add(r);let o=Vn(e,"R",.6),a=[[ut,nt+.9,Mt-1.4],[ut,nt+1.4,ye-.05],[ut+.15,nt+1.4,ye-.6],[Gt-.15,nt+1.4,ye-.6],[Gt,nt+1.4,ye-.05],[Gt,2*nt,Mt]],l=[[ut,nt+.7,Mt-1.08],[ut,nt+1.4,ye-.05],[ut+.15,nt+1.4,ye-.6],[Gt-.15,nt+1.4,ye-.6]];return(c,h,u)=>{hn(i,a,c,66.4,.85,{f:2.1,pose:(d,p,v)=>F(v,{shL:[-6,30],elL:100,tilt:-5})}),L(i,null,c,"determinado"),hn(e,l,c,66.9,.42,{f:1.1,pose:(d,p,v)=>F(v,zi(d,.5))}),o.prumo(c),L(e,null,c,"sono");let f=e.root.position;return W(u,[[0,[-.1,nt+1.95,2.75]],[1,[0,nt+2.05,2.7]]],[[0,[f.x,f.y+.9,f.z]],[1,[f.x,f.y+.9,f.z]]],h/4),ui}}),Z(70.4,76.2,{limpa:!1,bg:"#2A2420",fov:40},n=>{let t=ce(n),e=K(n,Jt,Gt,ye,0,2*nt+1.4),i=K(n,Ke,Gt,ye,0,2*nt+1.4),s=rn();i.root.add(s),s.position.set(.24/.84,.22/.84,.02),s.rotation.z=-.35,s.scale.setScalar(.65/.84);let r=Hi();r.position.set(0,-.2,0),i.hands.R.add(r);let o=Vn(e,"R",.6),a=Ro(n,e,{v:1}),l=[[Gt,2*nt+1.4,ye-.05],[Gt,3*nt,Mt+.05],[Gt-.1,3*nt,Mt+.6],[ut+.1,3*nt,Mt+.6],[ut,3*nt,Mt+.05],[ut,3*nt+1.4,ye-.05]],c=[[ut+.15,2*nt+1.4,ye-.6],[Gt-.15,2*nt+1.4,ye-.6],[Gt,2*nt+1.4,ye-.05],[Gt,3*nt,Mt+.05],[Gt-.1,3*nt,Mt+.6]];return(h,u,f)=>{hn(i,l,h,70.4,.9,{f:2.2,pose:(g,m,S)=>F(S,{shL:[-6,30],elL:100,tilt:-5})}),L(i,null,h,"feliz");let d=hn(e,c,h,72.4,.33,{f:.95,pose:(g,m,S)=>F(S,zi(g,.9),{shL:[40,30],elL:30})});o.prumo(h),L(e,null,h,"sono",{mouth:{open:.3+.1*Math.sin(h*8)}}),a(h);let p=e.root.position,v=j(71.6,73,h);return W(f,[[0,[Gt+.25,3*nt+1.95,Mt+1.25]],[1,[Gt+.2,3*nt+1.9,Mt+1.2]]],[[0,[V(Gt,p.x,v),V(2*nt+1.6,p.y+.9,v),V(-.4,p.z,v)]],[1,[V(Gt,p.x,v),V(2*nt+1.6,p.y+.9,v),V(-.4,p.z,v)]]],u/5.8),ui}}),Z(76.2,80,{bg:"#2A2420",fov:50},n=>{let t=ce(n),e=4*nt,i=K(n,Jt,Gt,ye,0,3*nt+1.4),s=K(n,Ke,-.3,2.3,Math.PI,e),r=rn();s.root.add(r),r.position.set(.24/.84,.22/.84,.02),r.rotation.z=-.35,r.scale.setScalar(.65/.84);let o=Hi();o.position.set(0,-.2,0),s.hands.R.add(o);let a=Vn(i,"R",.6),l=Ro(n,i,{v:1}),c=[[Gt,3*nt+1.4,ye+.3],[Gt,e,Mt+.05],[Gt-.2,e,Mt+.5],[-.4,e,2.3]];return(h,u,f)=>{let d=h-76.2,p=t.portas[3];p.rotation.y=-1.4*j(.3,1,d);let v=yt((d-1)/1.2);return s.place(V(-.45,-.6,v),V(2.35,3.4,v),e,Math.PI*(1-v)+0),s.root.rotation.y=v>0?0:Math.PI,s.root.visible=v<.95,s.pose(d<.9?F(X(h,3),{shR:[60,6],elR:40,shL:[-6,30],elL:100,tilt:-5}):F(ae(h,{f:2}),{shL:[-6,30],elL:100,tilt:-5})),L(s,null,h,"neutro"),hn(i,c,h,76.2,.38,{f:1,pose:(g,m,S)=>F(S,zi(g,1))}),a.prumo(h),L(i,null,h,"sono",{mouth:{open:.3+.12*Math.sin(h*8)}}),l(h),W(f,[[0,[.15,e+2,-.7]],[1,[.15,e+1.95,-.6]]],[[0,[-.4,e+.8,2.5]],[1,[0,e+.6,1.6]]],u/3.8),ui}}),Z(80,84,{bg:"#3A3028",fov:38},n=>{let t=je(n,{hora:"tarde"}),e=K(n,Ke,-1.05,-.55,Math.PI,0),i=K(n,Jt,-1.25,.9,Math.PI/2+.3),s=Vn(i,"R",.4),r=Qf();r.position.set(0,-.08,.03),e.hands.R.add(r);let o=lu(n,-1.19,.91,-1.12);return(a,l,c)=>{let h=a-80;e.place(-1.2+.15*j(1.6,2.2,h),-.6,0,He(h,[[0,Math.PI*.85],[1.6,Math.PI*.85],[2.1,Math.PI]]));let u=Un(h,[[0,F(ht.ajoelhado,{lean:22,shL:[60,10],elL:60,shR:[55,0],elR:70})],[1.5,F(ht.ajoelhado,{lean:22,shL:[60,10],elL:60,shR:[55,0],elR:70,headX:-8})],[2.1,F(X(a,3),{lean:22,shL:[50,4],elL:40,shR:[45,4],elR:50,headX:10})],[3.2,F(X(a,3),{lean:14,shL:[50,4],elL:40,shR:[50,4],elR:50,headX:12})],[3.7,F(X(a,3),{lean:4,shL:[10,10],elL:30,shR:[30,10],elR:60})]]);return e.pose(F(u,h<1.5?{elR:70+Math.sin(a*9)*25}:{})),L(e,null,a,h>3.2?"feliz":"determinado"),o(a,j(3.15,3.35,h)),i.pose(F(X(a,2),zi(a,.6))),s.prumo(a),L(i,null,a,"sono"),W(c,[[0,[.25,1.25,.55]],[1,[.05,1.15,.35]]],[[0,[-1.2,.75,-1]],[1,[-1.2,.85,-1.05]]],l/4),{...ui,bloom:.35}}}),Z(84,87.4,{bg:"#3A3028",fov:36},n=>{let t=je(n,{hora:"tarde"}),e=K(n,Ke,-1,-.45,.35),i=K(n,Jt,-1.2,.95,Math.PI-.35),s=Vn(i,"R",.4),r=lu(n,-1.19,.91,-1.12);return(o,a,l)=>(e.pose(F(X(o,3),ki(o,.8*yt((o-84.3)*2)),{shR:[30+20*Math.max(0,Math.sin(o*3)),20],elR:70})),L(e,"cida",o,"feliz",{smile:.9}),r(o,1),i.pose(F(X(o,2),zi(o,.3))),s.prumo(o),L(i,null,o,"vergonha"),W(l,[[0,[-.05,1.12,.75]],[1,[-.15,1.08,.6]]],[[0,[-1,.9,-.45]],[1,[-1,.9,-.45]]],a/3.4),ui)}),Z(87.4,92,{bg:"#3A3028",fov:38},n=>{let t=je(n,{hora:"tarde"}),e=K(n,Ke,-1,-.45,.35),i=K(n,Jt,-1.2,.95,Math.PI-.35),s=Vn(i,"R",.4),r=Ls();r.scale.setScalar(.8),r.position.set(-.15,.785,.35),n.add(r);let o=lu(n,-1.19,.91,-1.12);return(a,l,c)=>{let h=a-87.4,u=yt((h-1.2)/1.3);i.place(V(-1.2,-.55,u),V(.95,.55,u),0,V(Math.PI-.35,Math.PI/2+.25,j(1,1.6,h)));let f=He(h,[[2.5,0],[3,1],[3.5,1],[3.9,0]]);return i.pose(u>0&&u<1?ae(a,{f:1.7}):F(X(a,2),{shR:[55*f,8],elR:12+20*f,lean:10*f})),s.visible=h<3.05,r.visible=h>=3.05,s.prumo(a),L(i,null,a,h<1.2?"vergonha":"neutro",{smile:h<1.2?.25:void 0}),e.pose(F(X(a,3),ki(a,.3*(1-j(0,2,h))))),L(e,null,a,h<1.5?"rindo":"feliz",{look:[.4,0]}),o(a,1),W(c,[[0,[.75,1.2,1.3]],[1,[.6,1.15,1.15]]],[[0,[-.9,.9,.4]],[1,[-.4,.85,.45]]],l/4.6),ui}}),Z(92,98.4,{bg:"#101018",fov:38},n=>{let t=So(n,{hora:"noite"});t.luz.intensity=2.2,t.lamp.userData.bulbo.material.emissiveIntensity=1;let e=au(n),i=Yh();i.position.set(1.25,.45,-1.2),n.add(i);let s=new at(new be(.32,.45,.32),new pe({color:"#8A6A4A"}));return s.position.set(1.25,.225,-1.2),n.add(s),(r,o,a)=>{let l=r-92;t.ventilador.girar(r);let c=j(.3,1.3,l)*(1-j(5.6,6.4,l));e.pose({shR:[V(10,95,c),12],elR:V(10,25,c)+8*Math.sin(l*.7),shL:[10,14],elL:20,headX:-10*c,headY:-18*c,bob:0,hipL:[4,2],hipR:[2,2],knL:6,knR:4});let h=f=>j(f,f+.25,l)*(1-j(f+.9,f+1.15,l)),u=Math.max(h(1.8),h(3.4),j(4.8,5.05,l));return e.hands.R.scale.set(1-.12*u,1-.3*u,1+.08*u),L(e,null,r,l>4.6?"triste":"neutro",{look:[.5*c,-.6*c],lento:.5}),W(a,[[0,[.62,1.55,.95]],[1,[.6,1.45,.75]]],[[0,[.62,.75,-.55]],[1,[.62,.8,-.6]]],o/6.4),{tint:"#E8E8FF"}}}),Z(98.4,102.4,{bg:"#101018",fov:40},n=>{let t=So(n,{hora:"noite"}),e=au(n),i=Yh();i.position.set(1.25,.45,-1.2),n.add(i);let s=new at(new be(.32,.45,.32),new pe({color:"#8A6A4A"}));s.position.set(1.25,.225,-1.2),n.add(s);let r=new bn("#FFD89A",3,4,1.6);return r.position.set(1.25,.8,-1.1),n.add(r),(o,a,l)=>{let c=o-98.4;t.ventilador.girar(o);let h=Math.sin(yt(c/1.6)*Math.PI),u=c>2.55,f=He(c,[[1.5,0],[2.3,1],[2.7,1],[3.2,0]]);return e.pose({lean:-4*h,bob:.01*h,shL:[10,14],elL:20,shR:[V(8,60,f),V(12,70,f)],elR:V(15,10,f),headY:-25*f,headX:-4,hipL:[4,2],hipR:[2,2],knL:6,knR:4}),r.intensity=u?0:3,t.luz.intensity=0,i.userData.bulbo.material.emissiveIntensity=u?0:.9,t.lamp.userData.bulbo.material.emissiveIntensity=0,L(e,null,o,"triste",{blink:c>1&&c<1.5?1:void 0,mouth:{open:.25*h}}),W(l,[[0,[-.6,1.5,.9]],[1,[-.45,1.4,.7]]],[[0,[.8,.5,-.6]],[1,[.85,.5,-.65]]],a/4),{tint:u?"#AAB4E8":"#E8E8FF",exposure:u?.55:1}}}),Z(102.4,108,{bg:"#05050A",fov:40},n=>{let t=So(n,{hora:"noite"}),e=au(n);return t.luz.intensity=0,t.lamp.userData.bulbo.material.emissiveIntensity=0,(i,s,r)=>{t.ventilador.girar(i),e.pose({shL:[10,14],elL:20,shR:[8,12],elR:15,hipL:[4,2],hipR:[2,2],knL:6,knR:4,lean:Math.sin(i*1.2)*1.5}),L(e,null,i,"sono",{blink:i>103.5?1:void 0});let o=Math.exp(-Math.max(0,i-104.2)*6)*(i>104.2);return W(r,[[0,[-.2,1.7,.6]],[1,[.2,1.5,.2]]],[[0,[.7,.45,-.6]],[1,[.7,.45,-.6]]],s/5.6,Math.sin(i*40)*.004*o),{tint:"#8E9CE0",exposure:.42+.25*o-.4*j(106.8,108,i),vig:.6}}})];function au(n){let t=K(n,Jt,.62,.45,0);return t.root.rotation.set(-Math.PI/2,0,0),t.root.position.set(.62,.5,.42),t.sombra.visible=!1,t}function lu(n,t,e,i){let s=new it;s.position.set(t,e,i),n.add(s);let r=[];for(let a=0;a<12;a++){let l=new at(new si(.012,.05,6),new Me({color:a%2?"#5AA8FF":"#2E6FFF",transparent:!0,opacity:.9})),c=a/12*6.283;l.position.set(Math.cos(c)*.05,.025,Math.sin(c)*.05),s.add(l),r.push(l)}let o=new bn("#5A8CFF",0,1.5,1.6);return o.position.set(t,e+.15,i),n.add(o),(a,l)=>{s.visible=l>.01;let c=l<1?1+1.8*Math.sin(l*Math.PI):1;r.forEach((h,u)=>{h.scale.set(c,(.8+.3*Math.sin(a*20+u*1.7))*c,c)}),o.intensity=1.2*l*c}}var _r=new P,gp=new Rn;function Kt(n,t,e="R",i=[0,-.08,.03],s){t.root.updateMatrixWorld(!0);let r=t.hands[e];r.localToWorld(_r.set(...i)),n.position.copy(_r),s!==!1&&(r.getWorldQuaternion(gp),n.quaternion.copy(gp),s&&n.rotateX(s[0]).rotateY(s[1]).rotateZ(s[2]))}function tc(n,t,e,i={}){let s=xe(i.seed||4),r=i.n||60,o=[];for(let a=0;a<r;a++){let l=Ri(a%3?"#BFE4FF":"#FFFFFF",(i.tam||.05)*(.6+s()*.8),.85,!1);l.userData={ph:s(),dx:(s()-.5)*(i.abre||.5),dy:(s()-.5)*(i.abre||.5),dz:(s()-.5)*(i.abre||.5)},n.add(l),o.push(l)}return(a,l=1)=>o.forEach(c=>{let h=c.userData,u=(a*(i.taxa||2.2)+h.ph)%1*(i.vida||.45);c.visible=l>.01,c.position.set(t[0]+(e[0]+h.dx)*u,t[1]+(e[1]+h.dy)*u-4.9*u*u,t[2]+(e[2]+h.dz)*u),c.material.opacity=.85*l*(1-u/(i.vida||.45)*.6),c.position.y<(i.chao??0)&&(c.position.y=i.chao??0)})}function zs(n,t,e={}){let i=xe(e.seed||9),s=e.n||26,r=[];for(let o=0;o<s;o++){let a=Ri(e.cores?e.cores[o%e.cores.length]:e.cor||"#F2B430",(e.tam||.03)*(.6+i()),1,!1),l=i()*6.28,c=i()*(e.cone??1.2);a.userData={v:[Math.cos(l)*Math.sin(c)*(e.v||1.6),Math.cos(c)*(e.v||1.6)*(e.up??1),Math.sin(l)*Math.sin(c)*(e.v||1.6)]},n.add(a),r.push(a)}return o=>{let a=o-(e.t0||0);r.forEach(l=>{if(l.visible=a>0&&a<(e.vida||.8),!l.visible)return;let c=l.userData.v;l.position.set(t[0]+c[0]*a,Math.max(e.chao??-9,t[1]+c[1]*a-4.9*a*a),t[2]+c[2]*a),l.material.opacity=1-a/(e.vida||.8)})}}function ma(n,t,e={}){let i=xe(e.seed||2),s=e.n||14,r=[];for(let o=0;o<s;o++){let a=Ri("#A8D8FF",.025,.9,!1);a.userData={ph:i(),x:(i()-.5)*.4,y:.4+i()*.8,z:(i()-.5)*.25},n.add(a),r.push(a)}return o=>{t.root.updateMatrixWorld(!0),r.forEach(a=>{let l=a.userData,c=(o*.9+l.ph)%1*.6;t.root.localToWorld(_r.set(l.x,l.y,l.z)),a.position.set(_r.x,Math.max(e.chao||0,_r.y-4.9*c*c),_r.z),a.material.opacity=.9*(1-c/.6)})}}function cu(n,t){let e=[0,1,2].map(()=>{let i=ra("notas",.14);return n.add(i),i});return(i,s=1)=>e.forEach((r,o)=>{let a=(i*.7+o/3)%1,l=t.headG.localToWorld(_r.set(.12+a*.2,.3+a*.35,.3));r.position.copy(l),r.material.opacity=s*Math.sin(a*Math.PI),r.visible=s>.01})}var wo={tint:"#FFF8EC",bloom:.25},Gi=[-.12,.783,.42];function Co(n){let t=je(n,{hora:"manha"}),e=K(n,Ke,-.7,-.25,.5),i=K(n,Jt,-1.6,.9,Math.PI/2),s=Of();n.add(s);let r=s.userData.tampa;s.remove(r),n.add(r);let o=Hf();o.position.set(...Gi),n.add(o);let a=ft(.16,.02,.12,"#F2C230",0,0,0);n.add(a);let l=zs(n,[Gi[0],Gi[1]+.08,Gi[2]],{t0:123.15,cor:"#6A3A1A",n:22,v:1.1,tam:.025,chao:.78});return{K:t,ci:e,gui:i,pote:s,tampa:r,xic:o,pano:a,sp:l}}function Po(n,t){let{ci:e,gui:i,pote:s,tampa:r,pano:o}=n,a=t>121.3;Kt(s,a?i:e,"R",[0,-.1,.05],!1),s.rotation.set(0,0,0),!a&&t>114.6&&t<118.4?(o.visible=!0,Kt(o,e,"L",[0,-.06,.05])):o.visible=!1;let l=t-122.35,c=new P(s.position.x,s.position.y+.175,s.position.z);if(l<0)r.position.copy(c),r.rotation.set(0,a?(t-121.6)*4*(t>121.6):Math.sin(t*9)*.3,0);else if(l<.3){let h=Ue(l/.3);r.position.set(V(c.x,-.3,h),V(c.y,2.55,h),V(c.z,.45,h)),r.rotation.set(l*30,l*20,0)}else if(l<.8){let h=gi((l-.3)/.5);r.position.set(V(-.3,Gi[0],h),V(2.55,Gi[1]+.07,h),V(.45,Gi[2],h)),r.rotation.set(l*30,l*20,0)}else r.position.set(Gi[0],Gi[1]+.055,Gi[2]),r.rotation.set(.25,0,.1)}var hu=(n,t=1)=>({shR:[28,4],elR:72,shL:[30,8,-40],elL:78+Math.sin(n*11)*14*t,lean:6,twist:Math.sin(n*11)*6*t,headX:14}),vp=[Z(108,113.2,{bg:"#C8D8E0",fov:38},n=>{let t=Co(n);return(e,i,s)=>{let{ci:r,gui:o}=t;return o.root.visible=!1,Po(t,e),t.sp(e),r.pose(F(X(e,3,.5),hu(e,1+j(110,112,e)),Be(e,.8))),L(r,null,e,e>110.5?"bravo":"determinado",{look:[.3,.5],mouth:e>110.5?{open:.1,smile:-.7}:void 0}),W(s,[[0,[.8,1.22,1.25]],[1,[.6,1.15,1]]],[[0,[-.6,.9,-.1]],[1,[-.65,.95,-.2]]],i/5.2),wo}}),Z(113.2,118.6,{bg:"#C8D8E0",fov:46},n=>{let t=Co(n);return(e,i,s)=>{let{ci:r,gui:o}=t;o.root.visible=!1;let a=e-113.2,l=j(0,.9,a);r.place(V(-.7,-.05,l),V(-.25,-.78,l),0,V(.5,Math.PI-.25,l));let c=a>.9&&a<3.2?Math.max(0,Math.sin((a-.9)*9)):0,h=j(3.3,3.7,a);return r.pose(a<.9?ae(e,{f:2}):F(Pe({shR:[40+50*c,6],elR:40+30*c,shL:[30,8],elL:60,lean:3+4*c,headX:-4},hu(e,1.3),h),Be(e,.6*h))),Po(t,e),L(r,null,e,h>.5?"vergonha":"bravo",{mouth:{open:.1+.2*c,smile:-.8},look:[0,.4]}),W(s,[[0,[.45,1.15,.2]],[.25,[.42,1.02,-1.48]],[1,[.4,1,-1.46]]],[[0,[-.2,.95,-.6]],[.25,[-.05,.88,-.78]],[1,[-.05,.9,-.78]]],i/5.4),wo}}),Z(118.6,121.6,{bg:"#C8D8E0",fov:38},n=>{let t=Co(n);return(e,i,s)=>{let{ci:r,gui:o}=t,a=e-118.6,l=yt(a/2.2);return o.place(V(-1.6,-.62,l),V(.9,.62,l),0,Math.PI/2-.1),o.pose(F(ae(e,{f:1.3,amp:.7,curvado:!0}),ht.co\u00E7arOlho)),l>=1&&o.pose(F(X(e,2),ht.co\u00E7arOlho)),L(o,null,e,"sono",{blink:Math.sin(e*2)>.6?1:void 0}),r.place(-.05,-.78,0,V(Math.PI-.25,.9,j(.6,1.4,a))),r.pose(F(X(e,3),hu(e,.6),Be(e,.5))),Po(t,e),L(r,null,e,"vergonha",{mouth:{open:.1,smile:-.8}}),W(s,[[0,[.95,1.25,1.3]],[1,[.8,1.2,1.15]]],[[0,[-1.1,1,.6]],[1,[-.7,1,.5]]],i/3),wo}}),Z(121.6,123.9,{bg:"#C8D8E0",fov:44},n=>{let t=Co(n);return(e,i,s)=>{let{ci:r,gui:o}=t;o.place(-.62,.62,0,Math.PI/2-.1),r.place(-.15,-.55,0,.9),o.pose(Un(e,[[121.6,F(X(e,2),{shR:[40,8],elR:60})],[121.9,F(X(e,2),{shR:[38,6],elR:68,shL:[45,8,-30],elL:95})],[122.3,F(X(e,2),{shR:[38,6],elR:68,shL:[45,8,-30],elL:80,twist:-4})],[122.45,F(X(e,2),{shR:[38,6],elR:68,shL:[70,20],elL:40,twist:8,headX:-20}),"out"]])),r.pose(F(X(e,3),e>122.4?{shL:[40,20],elL:60,shR:[40,20],elR:60,lean:-6,headX:-20}:{shR:[50,10],elR:30})),Po(t,e),t.sp(e),L(o,null,e,e>122.4?"surpreso":"sono",{look:e>122.4?[0,-.8]:[0,.5]}),L(r,null,e,e>122.4?"surpreso":"neutro",{look:e>122.4?[0,-.8]:[-.3,.3]});let a=j(122.35,123.3,e);return W(s,[[0,[1.25,.95,1.75]],[1,[1.15,.95,1.6]]],[[0,[-.4,1.1+1*Math.sin(a*Math.PI)*(a<.6?1:.6),.4]],[1,[-.2,.85,.42]]],a,0,.3),wo}}),Z(123.9,127.1,{bg:"#C8D8E0",fov:36},n=>{let t=Co(n);return(e,i,s)=>{let{ci:r,gui:o}=t;return o.place(-.62,.62,0,Math.PI/2-.1),r.place(-.15,-.55,0,.9),Po(t,e),r.pose(F(X(e,3),{shL:[30,20],elL:70,shR:[30,20],elR:70,lean:-5})),L(r,"cida",e,"surpreso",{look:[-.4,.2]}),o.pose(F(X(e,2),{shR:[38,6],elR:68,shL:[30+30*j(125.4,125.8,e),30],elL:60},ht.ombros&&e>125.5?{headZ:8}:{})),L(o,"gui",e,"preocupado",{look:[.4,0]}),W(s,[[0,[.95,1.18,.95]],[1,[.85,1.15,.85]]],[[0,[-.45,1,.1]],[1,[-.45,1,.1]]],i/3.2),wo}}),Z(127.1,132,{bg:"#C8D8E0",fov:34},n=>{let t=Co(n);return(e,i,s)=>{let{ci:r,gui:o}=t;o.place(-.62,.62,0,Math.PI/2-.1),r.place(-.15,-.55,0,.9),Po(t,e);let a=j(129.6,130.1,e);return o.pose(F(X(e,2),{shR:[42,6],elR:70,headX:14*(1-a),headY:30*a})),L(o,null,e,"desconfiado",{look:[a?.5:0,.5*(1-a)]}),r.pose(F(X(e,3),{headX:18*(1-a),headY:-20*a,lean:6})),L(r,null,e,"desconfiado",{look:[-.5*a,.5*(1-a)]}),W(s,[[0,[.75,1.3,1.35]],[1,[.65,1.28,1.2]]],[[0,[-.45,.95,.1]],[1,[-.4,1,.1]]],i/4.9),wo}}),Z(132,138.4,{bg:"#F2E6C8",fov:42,limpa:!1},n=>{Jl(n);let t=K(n,Jt,0,1,Math.PI),e=K(n,mo(3),-.75,0,Math.PI),i=[0,1,2,4,5].map(r=>K(n,mo(r),r%2?.7:-.7,-6-r*1.6,r%2?0:Math.PI)),s=fr("#2E6FB8");return n.add(s),(r,o,a)=>{let l=r-132,c=1-Math.min(l,2.6)*.9;t.place(0,c,0,Math.PI),e.place(-.72,c-.3-Math.min(l,2.6)*0,0,Math.PI),e.place(-.72,.7-Math.min(l,2.6)*.9,0,Math.PI);let h=yt((l-2.6)/.35);t.pose(l<2.6?F(ae(r,{f:1.6}),{shR:[10,10],elR:10}):Un(l,[[2.6,F(X(r,2),{shR:[-20,12],elR:10})],[2.8,F(X(r,2),{shR:[150,30],elR:40,twist:12}),"out"],[3.4,F(X(r,2),{shR:[60,10],elR:120,twist:-4})]]));let u=He(l,[[2.75,0],[2.95,1],[3.8,1],[4.4,0]]);if(e.pose(l<2.6?ae(r+.3,{f:1.6}):F(X(r,1),Pe({},{bob:-.28,lean:30,knL:70,knR:70,hipL:[40,6],hipR:[40,6],shL:[120,30],shR:[120,30],elL:120,elR:120,headX:20},u))),L(e,null,r,u>.3?"medo":"neutro"),L(t,null,r,l>3?"surpreso":"neutro",{look:l>3?[.6,0]:[0,0]}),t.root.updateMatrixWorld(!0),h<=0)Kt(s,t,"R",[0,-.2,0]);else{let f=-1.2+h*5.2,d=.55,p=t.root.localToWorld(new P(-.15-Math.sin(f)*.2,.85+Math.sin(f)*d*.6,-Math.cos(f)*d));h<1?s.position.copy(p):s.position.copy(t.root.localToWorld(new P(-.12,.72,-.2))),s.rotation.set(h*9,0,0),h>=1&&s.rotation.set(0,Math.PI,.2)}return i.forEach((f,d)=>{f.pose(ae(r+d,{f:1.6})),f.place(f.root.position.x,-6.5-d*1.4+(d%2?-1:1)*((r-132)*.9%3),0,d%2?Math.PI:0),L(f,null,r,"neutro")}),W(a,[[0,[.6,1.5,-3.4]],[1,[.55,1.45,-3.7]]],[[0,[-.1,1,.5]],[1,[-.2,1,-.8]]],o/6.4),{tint:"#FFF6EA"}}}),Z(138.4,143,{bg:"#F2E6C8",fov:34},n=>{Jl(n);let t=K(n,Jt,0,-1.4,Math.PI),e=K(n,mo(3),-.8,-2.1,Math.PI*.7),i=fr("#2E6FB8");return n.add(i),(s,r,o)=>{let a=s-138.4;return t.pose(F(X(s,2),{shR:[12,14],elR:25,headY:-25,headX:26})),Kt(i,t,"R",[0,-.22,0]),i.rotation.y+=Math.sin(s*1.3)*.2,L(t,null,s,"desconfiado",{look:[-.7,.3]}),e.pose(F(X(s,1),ht.assustado,{lean:-10})),L(e,null,s,"medo",{look:[.5,0]}),W(o,[[0,[.55,1.4,-3.4]],[1,[.45,1.35,-3.15]]],[[0,[-.3,1,-1.5]],[1,[-.3,1,-1.5]]],r/4.6),{tint:"#FFF6EA"}}}),Z(143,152,{bg:"#F2E6C8",fov:30},n=>{Jl(n);let t=K(n,Jt,0,-1.4,Math.PI),e=fr("#2E6FB8");return t.root.add(e),e.position.set(.08,.72,-.2),e.rotation.set(0,Math.PI,.2),(i,s,r)=>{let o=i-143;t.pose(F(X(i,2,.6),{shL:[75,6],elL:70,headX:16,headY:10}));let a=Math.max(0,Math.sin(o*1.4));return t.hands.L.scale.set(1-.12*a,1-.3*a,1+.08*a),L(t,null,i,o>4.5?"determinado":"desconfiado",{look:[.2,.7],lento:.6}),W(r,[[0,[.6,1,-2.9]],[.5,[.4,1.1,-2.6]],[1,[.3,1.25,-3.1]]],[[0,[.05,.85,-1.55]],[.5,[.05,1,-1.5]],[1,[0,1.15,-1.45]]],s/9),{tint:"#FFF2E0",focus:.7,range:.4,blur:8}}}),Z(152,156.6,{bg:"#2A2420",fov:50},n=>{let t=ce(n),e=K(n,Jt,ut,2.3,Math.PI),i=li(e,"R",1.5),s=Vn(e,"L",1),r=cu(n,e),o=[[ut,0,2.7],...Bs(0,1,{portaria:!1})];return(a,l,c)=>{hn(e,o,a,152,.8,{f:1.3,amp:1.5,pose:(u,f,d)=>F(d,{shR:[Math.sin(u*4)*18,12],elR:10,lean:-2})}),i.prumo(a),s.prumo(a),r(a),L(e,null,a,"feliz",{mouth:{open:.2,round:1}});let h=e.root.position;return W(c,[[0,[.35,1.95,2.75]],[1,[.3,2,2.7]]],[[0,[h.x,h.y+.9,h.z]],[1,[h.x,h.y+.9,h.z]]],l/4.6),{tint:"#FFF4E4"}}}),Z(156.6,170,{bg:"#2A2420",fov:46},n=>{let t=ce(n),e=4*nt,i=K(n,Jt,Gt,ye,0,3*nt+1.4),s=li(i,"R",1.5),r=Vn(i,"L",1),o=cu(n,i),a=K(n,Ke,-.15,2.45,Math.PI-.5,e),l=[[Gt,3*nt+1.4,ye+.2],[Gt,e,Mt+.05],[Gt-.2,e,Mt+.4],[.2,e,1.75]];return(c,h,u)=>{let f=c-156.6;t.portas[3].rotation.y=-1.4;let d=hn(i,l,c,158.2,1,{f:1.4,amp:1.4,pose:(m,S,b)=>S.parado?F(X(m,2),{shR:[6,12],elR:10}):F(b,{shR:[Math.sin(m*4)*18,12],elR:10})});s.prumo(c),r.prumo(c),o(c,1-j(162,163,c)),L(i,null,c,c<162.5?"feliz":"neutro",{mouth:c<162.5?{open:.2,round:1}:void 0,look:[-.4,-.2]});let p=j(161.8,163.5,c);a.pose(F(X(c,3),{shL:[55,30],elL:30,headX:14*p,lean:4*p})),L(a,null,c,p>.5?"desconfiado":"neutro",{look:[0,-.55*p]});let v=i.root.position,g=j(.36,.5,h/13.4);return W(u,[[0,[.25,e+1.95,2.3]],[.36,[.1,e+1.9,2.2]],[.5,[-.95,e+1.6,.6]],[1,[-.97,e+1.6,.65]]],[[0,[V(v.x,-.15,g),V(v.y+.9,e+1,g),V(v.z,2.4,g)]],[1,[V(v.x,-.15,g),V(v.y+.9,e+1,g),V(v.z,2.4,g)]]],h/13.4,0,.3),{tint:"#FFF4E4"}}}),Z(170,172.6,{bg:"#2A2420",fov:32},n=>{let t=ce(n),e=4*nt,i=K(n,Ke,-.15,2.45,Math.PI-.5,e),s=K(n,Jt,.35,1.6,-.53,e);return li(s,"R"),Vn(s,"L"),(r,o,a)=>(t.portas[3].rotation.y=-1.4,i.pose(F(X(r,3),{shL:[55,30],elL:30,headX:14,lean:4,shR:[30+15*Math.sin(r*3),20],elR:80})),L(i,"cida",r,"desconfiado",{look:[0,-.55]}),s.pose(X(r,2)),L(s,null,r,"neutro"),s.root.visible=!1,W(a,[[0,[.6,e+1.12,1.1]],[1,[.55,e+1.1,1.2]]],[[0,[-.15,e+.92,2.45]],[1,[-.15,e+.92,2.45]]],o/2.6),{tint:"#FFF4E4"})}),Z(172.6,176,{limpa:!1,bg:"#2A2420",fov:42},n=>{let t=ce(n),e=4*nt,i=K(n,Ke,-.15,2.45,Math.PI-.5,e),s=K(n,Jt,.2,1.75,-.4,e),r=li(s,"R",1.2),o=Vn(s,"L",1);return(a,l,c)=>{let h=a-172.6;t.portas[3].rotation.y=-1.4;let u=He(h,[[.1,0],[.4,1],[1,1],[1.3,0]]),f=yt((h-1.4)/1.6);s.place(V(.2,-.6,f),V(1.75,3.2,f),e,f>0?-.5+.5*f:-.4),s.root.visible=f<.9,s.pose(f>0?ae(a,{f:1.8}):F(X(a,2),{shL:[10,24*u],elL:40*u,headZ:8*u,bob:.015*u})),r.prumo(a),o.prumo(a),L(s,null,a,"feliz",{look:[-.4,0]});let d=j(1.1,2,h);return i.place(V(-.15,.4,d),V(2.45,2.55,d),e,V(Math.PI-.5,Math.PI+.6,j(1.4,2.6,h))),i.pose(F(X(a,3),{shL:[55,30],elL:30,headX:10})),L(i,null,a,"desconfiado",{look:[.3,-.5]}),W(c,[[0,[1.2,e+2,1.15]],[1,[1.1,e+1.95,1.25]]],[[0,[-.15,e+.9,2.5]],[1,[-.3,e+.9,2.7]]],l/3.4),{tint:"#FFF4E4"}}})];var Bn={tint:"#FFFBF2",bloom:.22},Mr=195.7,uy=Array.from({length:11},(n,t)=>{let e=-2.4+t*.48;return[Math.sin(e)*2.25,Math.cos(e)*2.25*.9-.1,e]});function ls(n){let t=tp(n),e=t.mesa,{A:i,B:s}=e.userData,r=K(n,ff,.2,-.75,0);Qn(r,.2,-.75,0,.48);let o=K(n,Jt,1.1,1.75,Math.PI+.5),a=K(n,Is,1.55,1.5,Math.PI+.7),l=Gn((d,p,v)=>{d.fillStyle="#1A1A20",d.fillRect(0,0,p,v),d.fillStyle="#E2443A",d.beginPath(),d.arc(40,40,14,0,7),d.fill(),d.fillStyle="#FFF",d.font="700 30px Inter",d.fillText("REC",64,50)});n.add(l);let c=uy.map(([d,p,v],g)=>K(n,mo(g),d,p,Math.atan2(-d,-p+.1))).filter((d,p)=>p!==6&&p!==7),h=gr(.8,3,"#3A3430");h.rotation.set(-Math.PI/2,0,0),h.position.set(0,.835,0),n.add(h);let u=vo(n,[[0,.8,0],[-.3,.5,0],[.3,.5,0]],{n:30,size:.7,life:2.5,op:.6,sp:.4,cor:"#B8B2A8"}),f=zs(n,[0,.84,0],{t0:Mr+.05,cor:"#A9A49C",n:30,v:2.2,tam:.05,chao:.02,vida:1.2});return{P:t,mesa:e,A:i,B:s,rafa:r,gui:o,tia:a,fone:l,alunos:c,rach:h,po:u,pedra:f}}function cs(n,t){let e=t-Mr;n.rach.crescer(yt(e/.12));let i=gi(yt((e-.15)/.45));n.A.rotation.z=i*.9,n.A.position.set(-.12*i,-.32*i,0),n.B.rotation.z=-i*.9,n.B.position.set(.12*i,-.32*i,0),n.rach.visible=e>0&&e<.2,n.po(e),n.pedra(t)}var br=(n=1)=>({bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,lean:22,shR:[72,-8,-25],elR:112,shL:[62,22],elL:70}),Fo=n=>{Qn(n.gui,-.2,.75,Math.PI,.48)};function ec(n,t,e=0){let i=F(br(),Be(t,e<.05?.8:0),{shR:[-25*e,50*e],elR:-60*e,tilt:-10*e,lean:-6*e}),s=F(br(),Be(t,e<.05?.15:0),{shR:[-10*e,-30*e],elR:-30*e,lean:4*e});n.rafa.pose(i),n.gui.pose(s)}var hs=(n,t,e)=>n.alunos.forEach((i,s)=>{let r=e==="pula"?s%3===0?F(X(t,s),ht.maosCabeca,{bob:Math.abs(Math.sin(t*5+s))*.05}):To(t,2.1+s%3*.2,s*.37):e==="ri"?F(X(t,s),ki(t+s*.2,1)):F(X(t,s),s%2?ht.bracoCruzado:{},{lean:6});i.pose(r),L(i,null,t,e==="pula"?s%2?"surpreso":"feliz":e==="ri"?"rindo":"feliz")});function nc(n,t,e,i){return tc(n,t,e,{n:70,tam:.045,vida:.5,abre:.4,...i})}var Ep=[Z(176,181.5,{bg:"#CFE4EE",fov:40},n=>{let t=ls(n);return(e,i,s)=>(t.rafa.pose(F(br(),{shR:[40+30*Math.max(0,Math.sin(e*4)),10],elR:60+40*Math.max(0,Math.sin(e*4)),headY:Math.sin(e*.8)*25})),L(t.rafa,null,e,"feliz",{smile:.6}),hs(t,e,"olha"),t.gui.pose(F(ht.maosBolso,An(e,2))),L(t.gui,null,e,"neutro"),t.tia.pose(F(X(e,5),ht.celular)),Kt(t.fone,t.tia,"R",[0,-.09,.03]),L(t.tia,null,e,"feliz"),cs(t,e),W(s,[[0,[4.5,3.2,4.8]],[1,[3.6,2.4,3.9]]],[[0,[0,.6,0]],[1,[0,.8,0]]],i/5.5),Bn)}),Z(181.5,188.7,{limpa:!1,bg:"#CFE4EE",fov:55},n=>{let t=ls(n);return(e,i,s)=>{let r=e>186;return t.rafa.pose(F(br(),{shL:[70+20*Math.max(0,Math.sin(e*5)),10],elL:50+50*Math.max(0,Math.sin(e*5)),headY:r?22:Math.sin(e)*15,headX:-4})),L(t.rafa,"rafa",e,r?"desconfiado":"feliz",{smile:.7,look:r?[.6,0]:[0,0]}),hs(t,e,"olha"),t.gui.pose(F(ht.maosBolso,An(e,2))),L(t.gui,null,e,"preocupado"),t.tia.pose(F(X(e,5),ht.celular)),Kt(t.fone,t.tia,"R",[0,-.09,.03]),L(t.tia,null,e,"feliz"),cs(t,e),W(s,[[0,[-.7,1.35,1.15]],[.6,[-.6,1.3,1.05]],[1,[-.6,1.28,1]]],[[0,[.2,.95,-.7]],[1,[.2,1,-.75]]],i/7.2),Bn}}),Z(188.7,192.6,{bg:"#CFE4EE",fov:40},n=>{let t=ls(n);return(e,i,s)=>{let r=e-188.7;hs(t,e,r<2.4?"ri":"olha"),t.rafa.pose(F(br(),ki(e,.6))),L(t.rafa,null,e,"rindo");let o=He(r,[[.6,0],[.9,1],[1.3,1],[1.8,0]]);t.tia.pose(r<1.9?F(X(e,5),{shL:[80*o,10],elL:20,shR:[80*o,10],elR:20,lean:15*o}):F(X(e,5),ht.filmar)),Kt(t.fone,t.tia,"R",[0,-.09,.03]),L(t.tia,null,e,"rindo");let a=yt((r-.85)/2.2);return t.gui.place(V(1.1,-.2,a),V(1.75,1.15,a),0,V(Math.PI+.5,Math.PI,a)),t.gui.pose(a>0&&a<1?F(ae(e,{f:1.5}),{lean:12*(1-a)}):X(e,2)),L(t.gui,null,e,"preocupado",{look:[-.3,0]}),cs(t,e),W(s,[[0,[1.9,2.4,2.6]],[1,[1.75,2.3,2.4]]],[[0,[.4,.8,.8]],[1,[0,.8,.6]]],i/3.9),Bn}}),Z(192.6,195.6,{bg:"#CFE4EE",fov:45},n=>{let t=ls(n);return Fo(t),(e,i,s)=>{ec(t,e,0),L(t.rafa,null,e,"determinado",{look:[-.2,.2]}),L(t.gui,null,e,"preocupado",{look:[0,.4]}),hs(t,e,"olha"),t.tia.pose(F(X(e,5),ht.filmar)),Kt(t.fone,t.tia,"R",[0,-.09,.03]),L(t.tia,null,e,"feliz"),cs(t,e);let r=j(192.6,193.6,e);return W(s,[[0,[1.2,2,.6]],[1,[.15,1.95,.35]]],[[0,[0,1,0]],[1,[0,.95,0]]],r,0,.3),{...Bn,focus:.8,range:.5,blur:6}}}),Z(195.6,197.6,{bg:"#CFE4EE",fov:40},n=>{let t=ls(n);return Fo(t),(e,i,s)=>{let r=Ue(yt((e-195.62)/.1));ec(t,e,r),L(t.rafa,null,e,e>Mr?"medo":"determinado"),L(t.gui,null,e,e>Mr?"surpreso":"neutro"),hs(t,e,e>196.2?"pula":"olha"),t.tia.pose(F(X(e,5),ht.filmar)),Kt(t.fone,t.tia,"R",[0,-.09,.03]),L(t.tia,null,e,"surpreso"),cs(t,e);let o=Math.max(0,e-Mr);return Kn(s,[[0,[1.2,1.9,2.2]],[1,[1.3,2,2.35]]],[[0,[0,.75,0]],[1,[0,.7,0]]],i/2,.05*Math.exp(-o*7)*(e>Mr)),{...Bn,flash:e>Mr?.35*Math.exp(-o*14):0}}}),Z(197.6,208,{bg:"#CFE4EE",fov:38},n=>{let t=ls(n);return Fo(t),(e,i,s)=>(ec(t,e,1),t.rafa.pose(F(X(e,1),{bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,lean:-14,shL:[60,-10,-40],elL:95,shR:[20,20],elR:30})),L(t.rafa,null,e,"medo",{look:[0,-.2]}),t.gui.pose(F(X(e,2),{bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shR:[40,10],elR:60,lean:-4})),L(t.gui,null,e,"surpreso",{look:[Math.sin(e*1.5)*.6,0]}),hs(t,e,"pula"),t.tia.pose(F(To(e,2.3),ht.filmar)),Kt(t.fone,t.tia,"R",[0,-.09,.03]),L(t.tia,null,e,"feliz",{mouth:{open:.7}}),cs(t,e),W(s,[[0,[.3,3.4,3.2]],[.5,[1.6,2.9,2.4]],[1,[2.3,2.6,.9]]],[[0,[0,.7,0]],[1,[0,.8,0]]],i/10.4),Bn)}),Z(208,211.8,{bg:"#CFE4EE",fov:40},n=>{let t=ls(n);return Fo(t),t.tia.place(.9,.9,0,Math.PI+1),t.gui.root.visible=!1,t.gui.fixo=!0,(e,i,s)=>(ec(t,e,1),t.tia.pose(F(To(e,2.6),ht.filmar,{shL:[120,40],elL:40})),Kt(t.fone,t.tia,"R",[0,-.09,.03]),L(t.tia,"tiago",e,"feliz",{look:[-.4,0]}),hs(t,e,"pula"),cs(t,e),t.gui.pose(F(X(e,2),{bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shR:[40,10],elR:60})),L(t.gui,null,e,"surpreso"),t.rafa.pose(F(br(),{lean:-14,shL:[60,-10,-40],elL:95,shR:[20,20],elR:30})),L(t.rafa,null,e,"medo"),W(s,[[0,[-.95,1.4,-.3]],[1,[-.9,1.38,-.22]]],[[0,[.9,1.12,.9]],[1,[.9,1.12,.9]]],i/3.8),Bn)}),Z(211.8,216,{bg:"#CFE4EE",fov:32},n=>{let t=ls(n);return Fo(t),(e,i,s)=>(t.rafa.pose(F(X(e,1,.6),{bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,lean:-10,shL:[60,-10,-40],elL:95,shR:[30,10],elR:40},Be(e,.3))),L(t.rafa,null,e,"medo",{look:[0,.1]}),t.gui.pose(F(X(e,2),{bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88})),L(t.gui,null,e,"preocupado"),hs(t,e,"olha"),t.tia.pose(F(X(e,5),ht.filmar)),Kt(t.fone,t.tia,"R",[0,-.09,.03]),cs(t,e),W(s,[[0,[-.75,1.2,.85]],[1,[-.7,1.18,.75]]],[[0,[.2,.95,-.75]],[1,[.2,.95,-.75]]],i/4.2),Bn)}),Z(216,222,{bg:"#CFE4EE",fov:30},n=>{let t=ls(n);return Fo(t),(e,i,s)=>{let r=e-216,o=j(3,4,r);return t.gui.pose(F(X(e,2,.5),{bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88},Pe({shR:[60,4],elR:70,headX:22,headY:-10},ht.maosBolso,o))),t.gui.hands.R.rotation.y=Math.sin(r*1.5)*.8*(1-o),L(t.gui,null,e,o>.5?"preocupado":"desconfiado",{look:o>.5?[.5,0]:[-.2,.7]}),t.rafa.pose(br()),hs(t,e,"olha"),cs(t,e),W(s,[[0,[-.05,1,.02]],[.5,[-.05,1,.05]],[1,[-.1,1.15,-.15]]],[[0,[-.28,.8,.55]],[.5,[-.28,.8,.55]],[1,[-.2,1,.75]]],i/6),{...Bn,focus:.7,range:.5,blur:6}}}),Z(222,226.6,{bg:"#C8D8E0",fov:55},n=>{let t=Kh(n),e=K(n,Jt,-.15,.55,0),i=t.macaneta,s=i.clone();return n.add(s),s.visible=!1,(r,o,a)=>{let l=r-222,c=He(l,[[.8,0],[1.3,1],[1.6,1],[1.9,.3]]),h=l>1.55;return e.pose(F(X(r,2),{shR:[55+10*c,0],elR:30+15*c,lean:-8*c*(h?1.5:1),headX:h?15:0})),i.visible=!h,s.visible=h,h&&Kt(s,e,"R",[0,-.05,.04]),L(e,null,r,h?"surpreso":"sono",{look:h?[.2,.6]:[0,0]}),W(a,[[0,[.8,1.25,.9]],[1,[.75,1.22,.85]]],[[0,[-.2,1,.5]],[1,[-.2,1,.5]]],o/4.6),Bn}}),Z(226.6,232,{bg:"#C8D8E0",fov:64},n=>{let t=Kh(n),e=K(n,Jt,.3,-.45,Math.PI),s=["#3EA6FF","#E2443A","#5AA84E"].map((r,o)=>{let a=Yl(r);n.add(a);let l=Yl(r);return l.userData.cabo.visible=!1,n.add(l),{e:a,meta:l,t0:227.4+o*1.6}});return(r,o,a)=>{let l=r-226.6;s.forEach(({e:h,meta:u,t0:f},d)=>{let p=r>f-.4,v=r>f;if(!p)h.position.set(.55+(d-1)*.012,.93,-.9),h.rotation.set(0,0,(d-1)*.2),u.visible=!1;else if(!v)Kt(h,e,"R",[0,-.06,.05]),u.visible=!1,h.userData.ponta.visible=!0;else{Kt(h,e,"R",[0,-.06,.05]),h.userData.ponta.visible=!1,h.visible=r<f+1.2,u.visible=!0;let g=r-f;u.position.set(.35+d*.03,Math.max(.84,1.05-4.9*g*g),-.75),u.rotation.set(g*6,0,g*4)}});let c=(l-.4)%1.6/1.6;return e.pose(F(X(r,2),{shR:[40+30*Math.sin(c*Math.PI),6],elR:70,headX:16})),L(e,null,r,l>3.4?"tedio":"surpreso",{look:[0,.6]}),W(a,[[0,[.92,1.5,-1]],[1,[.9,1.48,-.98]]],[[0,[.25,1,-.4]],[1,[.25,1,-.4]]],o/5.4),Bn}}),Z(232,236.6,{bg:"#2A2420",fov:30},n=>{let t=je(n,{hora:"manha"}),e=K(n,Jt,.1,.2,Math.PI),i=Gn();n.add(i),i.scale.setScalar(1.3);let s=-1,r=(o,a)=>i.desenha((l,c,h)=>{if(l.fillStyle="#ECE5DD",l.fillRect(0,0,c,h),l.fillStyle="#075E54",l.fillRect(0,0,c,70),l.fillStyle="#FFF",l.font="700 30px Inter",l.fillText("V\xF3 \u2764",20,46),l.fillStyle="#FFF",l.beginPath(),l.roundRect(20,h-90,c-40,60,28),l.fill(),l.fillStyle="#2A2A30",l.font="500 28px Inter",l.fillText("bom dia v\xF3".slice(0,o)+(o<10?"|":""),40,h-50),a){l.strokeStyle="rgba(255,255,255,.95)",l.lineWidth=3;let u=xe(4);for(let f=0;f<16;f++){let d=c*.55,p=h*.4,v=f/16*6.283;l.beginPath(),l.moveTo(d,p);for(let g=0;g<7;g++)v+=(u()-.5)*.7,d+=Math.cos(v)*40,p+=Math.sin(v)*40,l.lineTo(d,p);l.stroke()}l.strokeStyle="rgba(0,0,0,.5)",l.lineWidth=1.5;for(let f=0;f<10;f++)l.beginPath(),l.arc(c*.55,h*.4,20+f*22,0,7),l.stroke()}});return(o,a,l)=>{let c=o-232,h=Math.min(10,Math.floor(Math.max(0,c-.5)*5)),u=c>3,f=h+(u?100:0);return f!==s&&(r(h,u),s=f),e.pose(F(X(o,2),{shR:[62,-6],elR:70+(c<2.8?Math.max(0,Math.sin(o*16))*6:0),shL:[55,-6],elL:75,headX:24})),Kt(i,e,"L",[-.05,-.06,.06],[-.6,.7,0]),L(e,null,o,u?"surpreso":"sono",{look:[0,.8]}),W(l,[[0,[.8,1.2,-.35]],[1,[.75,1.15,-.3]]],[[0,[.05,.88,-.05]],[1,[.05,.88,-.05]]],a/4.6,0,.4),{...Bn,focus:.45,range:.25,blur:10}}}),Z(236.6,241.6,{bg:"#C8D8E0",fov:40},n=>{let t=je(n,{hora:"manha"}),e=K(n,Jt,.075,-.72,Math.PI),i=t.torneira,s=pr();n.add(s),s.visible=!1;let r=nc(n,[.075,1.05,-1.56],[0,1.2,3.2]),o=ma(n,e,{chao:0});return(a,l,c)=>{let h=a-236.6,u=h>1.4;return i.visible=!u,s.visible=u,u&&Kt(s,e,"R",[0,-.06,.04]),e.pose(u?F(X(a,2),{shR:[50,10],elR:40,shL:[60,30],elL:120,lean:-14,headX:-10,headY:Math.sin(a*7)*15}):F(X(a,2),{shR:[75*j(.3,1,h),0],elR:20,lean:6})),r(a,u?1:0),h>1.8&&o(a),L(e,null,a,u?"medo":"sono",{blink:u?1:void 0,mouth:u?{open:.6}:void 0}),W(c,[[0,[.65,1.3,-.15]],[1,[.6,1.28,-.2]]],[[0,[.05,1,-.75]],[1,[.05,1.02,-.75]]],l/5),Bn}}),Z(241.6,249,{bg:"#C8D8E0",fov:40},n=>{let t=je(n,{hora:"manha"});t.torneira.visible=!1;let e=K(n,Jt,.1,-.5,Math.PI*.9),i=pr();n.add(i);let s=t.cad2;s.position.set(.15,0,-.2),s.rotation.y=Math.PI;let r=nc(n,[.075,1.05,-1.56],[0,.9,2.6]),o=ma(n,e,{chao:0});return(a,l,c)=>{let h=a-241.6,u=yt((h-.5)/1.2);e.place(V(.1,.15,u),V(-.5,-.12,u),0,V(Math.PI*.9,0,j(.6,1.4,h)));let f=j(2.2,2.8,h),d=gi(yt((h-3.2)/.35));s.abrir(d);let p={bob:-.17-.3*d,hipL:[88,4+14*d],hipR:[88,4+14*d],knL:88-50*d,knR:88-50*d,lean:-6-10*d,shR:[30,20],elR:50,shL:[20+40*d,30],elL:20};return e.pose(h<1.7?ae(a,{f:1.6}):Pe(X(a,2),p,f)),Kt(i,e,"R",[0,-.06,.04]),r(a,1),o(a),L(e,null,a,d>.5?"surpreso":"tedio",{lagrima:!1}),W(c,[[0,[-.75,1.75,.45]],[1,[-.7,1.65,.35]]],[[0,[.1,.7,-.45]],[1,[.12,.65,-.4]]],l/7.4),Bn}}),Z(249,255,{bg:"#C8D8E0",fov:36},n=>{let t=je(n,{hora:"manha"});t.torneira.visible=!1;let e=K(n,Jt,.15,-.12,0),i=pr();n.add(i);let s=t.cad2;s.position.set(.15,0,-.2),s.rotation.y=Math.PI,s.abrir(1);let r=nc(n,[.075,1.05,-1.56],[0,.9,2.6]),o=ma(n,e,{chao:0}),a=new at(new In(.9,24),new pe({color:"#9EC8E8",transparent:!0,opacity:.45}));return a.rotation.x=-Math.PI/2,a.position.set(.15,.004,-.4),n.add(a),(l,c,h)=>(e.pose(F(X(l,2,.4),{bob:-.47,hipL:[88,18],hipR:[88,18],knL:38,knR:38,lean:-16,shR:[30,20],elR:50,shL:[60,30],elL:20,headY:l>249.2?-40:0})),Kt(i,e,"R",[0,-.06,.04]),r(l,1),o(l),L(e,null,l,"tedio",{look:[-.6,0]}),a.scale.setScalar(.8+.2*j(249,255,l)),W(h,[[0,[-.7,.95,-.55]],[1,[-.65,.92,-.5]]],[[0,[.12,.45,-.15]],[1,[.12,.45,-.15]]],c/6),Bn)}),Z(255,266.4,{bg:"#C8D8E0",fov:40},n=>{let t=je(n,{hora:"manha"});t.torneira.visible=!1;let e=K(n,Jt,.15,-.34,0),i=t.cad2;i.position.set(.15,0,-.42),i.rotation.y=Math.PI,i.abrir(1);let s=K(n,Ke,-1.3,.9,Math.PI/2),r=nc(n,[.075,1.05,-1.56],[0,.9,2.6]),o=ma(n,e,{chao:0}),a=Gn((h,u,f)=>{h.fillStyle="#1A1A20",h.fillRect(0,0,u,f),h.strokeStyle="#FFF",h.lineWidth=3;for(let d=0;d<12;d++)h.beginPath(),h.moveTo(160,240),h.lineTo(160+Math.cos(d)*300,240+Math.sin(d*1.3)*300),h.stroke()});a.position.set(.35,.79,.55),a.rotation.x=-Math.PI/2,n.add(a);let l=[0,1,2].map(h=>{let u=Yl(["#3EA6FF","#E2443A","#5AA84E"][h]);return u.position.set(-.05+h*.06,.79,.6),u.rotation.set(Math.PI/2,0,h*.7),n.add(u),u}),c=bt(.02,.02,.06,"#C9A030",.15,.8,.35,{rot:[Math.PI/2,0,.5]});return n.add(c),(h,u,f)=>{let d=h-255,p=h>257.5;r(h,p?Math.max(0,1-(h-257.5)*2):1),o(h);let v=yt((d-.3)/2);return s.place(V(-1.3,-1.05,v),V(.9,-1.1,v),0,v<1?Math.PI*.9:Math.PI),s.pose(v<1?ae(h,{f:2.2}):F(ht.pegaChao,{lean:40})),L(s,null,h,"bravo"),e.pose(F(X(h,2,.4),{bob:-.47,hipL:[88,18],hipR:[88,18],knL:38,knR:38,lean:-16,shR:[20,20],elR:30,shL:[20,30],elL:20})),L(e,null,h,"triste",{lento:.5}),W(f,[[0,[1.35,1.9,1.3]],[.45,[1.2,1.9,1.25]],[.6,[1.5,.78,.15]],[1,[1.45,.76,.12]]],[[0,[-.1,.4,-.3]],[.45,[.2,.8,.35]],[.6,[.15,.62,-.05]],[1,[.15,.6,-.05]]],u/11.4,0,.3),Bn}}),Z(266.4,271,{bg:"#2A2420",fov:38},n=>{let t=ce(n),e=K(n,Jt,1,4.4,Math.PI/2),i=K(n,hr,2,4.4,-Math.PI/2);return(s,r,o)=>{let a=s-266.4,l=j(.8,1.4,a),c=a>1.6;return e.pose(F(X(s,2),{shR:[55*l,4],elR:15+(c?Math.sin(s*9)*4:0)})),i.pose(F(X(s,4),{shR:[55*j(1.1,1.6,a),4],elR:15+(c?Math.sin(s*9)*4:0)})),L(e,null,s,"feliz"),L(i,null,s,"feliz"),W(o,[[0,[1.5,1.4,2.2]],[1,[1.5,1.35,2.45]]],[[0,[1.5,1,4.4]],[1,[1.5,1,4.4]]],r/4.6),{tint:"#FFF4E4"}}}),Z(271,275,{bg:"#2A2420",fov:30},n=>{let t=ce(n),e=K(n,Jt,1,4.4,Math.PI/2),i=K(n,hr,2,4.4,-Math.PI/2);return(s,r,o)=>(e.pose(F(X(s,2),{shR:[55,4],elR:15})),i.pose(F(X(s,4),{shR:[55,4],elR:15,lean:8*j(271.3,272,s),bob:-.06*j(271.3,272,s)},Be(s,.8*j(271.3,272,s)))),L(e,null,s,"feliz"),L(i,null,s,s>271.4?"medo":"feliz",{mouth:s>271.6?{open:.5,smile:-.8}:void 0}),W(o,[[0,[1.5,1.4,2.6]],[1,[1.52,1.38,2.75]]],[[0,[2,1.1,4.4]],[1,[2,1.1,4.4]]],r/4),{tint:"#FFF4E4"})}),Z(275,290,{bg:"#2A2420",fov:38},n=>{let t=ce(n),e=K(n,Jt,1,4.4,Math.PI/2),i=K(n,hr,2,4.4,-Math.PI/2);return(s,r,o)=>{let a=s-275,l=He(a,[[.2,0],[.6,1],[2.6,1],[3.2,0]]),c=j(3,3.6,a),h=yt((a-6)/4);return e.place(V(1,1.5,h),V(4.4,6.8,h),0,h>0?V(Math.PI/2,0,j(0,.2,h)):Math.PI/2),e.pose(h>0?ae(s,{maos:"bolso",f:1.9}):F(X(s,2),Pe(Pe({},F(ht.desculpa,{shL:[55,22+Math.sin(s*8)*8],shR:[55,22-Math.sin(s*8)*8]}),l),ht.maosBolso,c))),L(e,null,s,"vergonha",{mouth:l>.5?{open:.2+.2*Math.sin(s*9)}:void 0}),i.pose(F(X(s,4),ap(s))),L(i,null,s,a<4?"medo":"surpreso",{look:[h>0?.5:0,0]}),t.portaRua.rotation.y=-1.2*j(8.5,9.2,a),W(o,[[0,[1.5,1.4,2.2]],[.5,[1.45,1.4,2.2]],[1,[1,1.5,2.3]]],[[0,[1.5,1,4.4]],[.5,[1.6,1,4.6]],[1,[1.6,1,5.8]]],r/15),{tint:"#FFF4E4"}}})];var xr={tint:"#FFFAF0",bloom:.25},du=2.9,yp=-1;var uu=[2.75,.1,-1.9];function Ar(n){let t=bo(n,{incl:0,hora:"manha",tipo:"casas",faixa:!1,z0:-60,z1:50,seed:44,carros:[[-1,-12,"#F4F1EA"],[1,15,"#5AA84E"],[-1,20,"#2A2A30"]]}),e=new it;e.position.set(du,.32,yp+1.15),t.g.add(e);let i=dy();i.position.set(0,-.32,-1.15),e.add(i);for(let u of[-6.5,4.5])for(let f of[-1,1])for(let d of[-.07,.07]){let p=ft(.1,.025,.24,["#2D8CD6","#E2443A"][f>0?0:1],-.6+f*.7+d,.012,u);t.g.add(p)}let s=[0,1,2,3].map(u=>K(t.g,kl(u),[-.5,.4,1.1,-1.2][u],[-2.5,-.2,-3.5,1.2][u],0)),r=Ie(.09,"#F4F1EA",0,0,0,{seg:14,out:.006});t.g.add(r);let o=Ie(.091,"#1E1E22",0,0,0,{seg:6});o.material.wireframe=!0,r.add(o);let a=bt(.012,.012,1.3,"#C89A5A",0,0,0,{seg:6});t.g.add(a);let l=K(t.g,Jt,1.6,-9,0),c=K(t.g,Is,-2.6,2.8,Math.PI-.6),h=Gn((u,f,d)=>{u.fillStyle="#1A1A20",u.fillRect(0,0,f,d),u.fillStyle="#E2443A",u.beginPath(),u.arc(40,40,14,0,7),u.fill()});return t.g.add(h),{L:t,piv:e,ca:i,kids:s,bola:r,vass:a,gui:l,tia:c,fone:h}}function dy(){let n=new it,t="#C0392B";n.add(ft(1.7,.55,3.7,t,0,.5,0,{out:.012,r:.12})),n.add(ft(1.5,.5,2,t,0,1,-.25,{out:.01,r:.14}));let e=new pe({color:"#2A3A4E"});for(let[s,r,o,a,l,c]of[[1.38,.38,0,1.02,.76,0],[1.38,.36,0,1.02,-1.26,Math.PI]]){let h=new at(new $t(s,r),e);h.position.set(o,a,l),h.rotation.y=c,n.add(h)}for(let s of[-1,1]){let r=new at(new $t(1.8,.36),e);r.position.set(s*.76,1.02,-.25),r.rotation.y=s*Math.PI/2,n.add(r)}for(let[s,r]of[[-.78,1.15],[.78,1.15],[-.78,-1.2],[.78,-1.2]])n.add(bt(.32,.32,.22,"#1E1E22",s,.32,r,{rot:[0,0,Math.PI/2],seg:18,out:.006})),n.add(bt(.16,.16,.23,"#B9BEC6",s,.32,r,{rot:[0,0,Math.PI/2],seg:12}));let i=[];for(let s of[-1,1]){n.add(tt(.3,.14,.04,"#F4F1EA",s*.55,.62,1.86));let r=new at(new be(.26,.12,.04),new pe({color:"#E2443A",emissive:"#FF3A2A",emissiveIntensity:0}));r.position.set(s*.58,.66,-1.86),n.add(r),i.push(r)}return n.add(tt(1.6,.14,.14,"#2A2A30",0,.3,1.88)),n.add(tt(1.6,.14,.14,"#2A2A30",0,.3,-1.88)),n.userData.luz=i,n}var fy=.27;function Sr(n,t){let{piv:e,ca:i,kids:s,bola:r,vass:o,gui:a,tia:l,fone:c}=n,h=t>309.6;if(t<296){let v=t-290;r.position.set(.3+Math.sin(v*1.3)*1.3,.09+Math.abs(Math.sin(v*3.2))*.25,-1.2+Math.sin(v*.9)*2.3)}else if(t<298){let v=Ue((t-296)/2),g=[.3+Math.sin(6*1.3)*1.3,.09,-1.2+Math.sin(6*.9)*2.3];r.position.set(V(g[0],uu[0],v),.09,V(g[2],uu[2],v))}else h||r.position.set(...uu);r.rotation.set(t*6,t*4,0);let u=Ue(yt((t-306.8)/1.6))*(1-gi(yt((t-311.4)/3.2)));e.rotation.x=fy*u;let f=t>314.6&&t<330;i.userData.luz.forEach(v=>{v.material.emissiveIntensity=f&&Math.sin(t*14)>0?2.2:0}),s.forEach((v,g)=>{let m=[[-.5,-2.5],[.4,-.2],[1.1,-3.5],[-1.2,1.2]][g];if(t<298){let S=t*1.4+g*1.7;v.place(m[0]+Math.sin(S)*.6,m[1]+Math.cos(S*.8)*.6,0,Math.atan2(r.position.x-v.root.position.x,r.position.z-v.root.position.z)),v.pose(Ns(t+g*.4,2.6,.8)),L(v,null,t,"feliz")}else{let S=[[2.05,-2.2],[2,-1.5],[1.75,-2.75],[1.5,-.9]][g],b=yt((t-298-g*.25)/1.4);v.place(V(m[0],S[0],b),V(m[1],S[1],b),0,b<1?Math.atan2(S[0]-m[0],S[1]-m[1]):Math.PI/2+(g-1.5)*.3);let E=t>300&&t<308.6,R=t>308.6?j(308.6,309.2,t):0,T=b<1?Ns(t+g,2.8,.8):E?g===0?F(ht.pegaChao,{lean:62,shR:[95,4],elR:4,bob:-.24}):g===2?F(ht.ajoelhado,{shR:[60,10],elR:30,shL:[60,10],elL:30,lean:16}):F(ht.pegaChao,{lean:50}):F(X(t,g),Pe({},{shL:[40,30],elL:80,shR:[40,30],elR:80,lean:-10,headX:-14},R));if(g===2&&t>308.6){let A=j(308.6,309.8,t);v.place(V(1.75,2.15,A),V(-2.75,-3.65,A),0,A<.15?V(1.72,2.72,A/.15):V(2.72,1.19,j(.8,1,A))),A>0&&A<1&&(T=F(ae(t,{f:2}),{shL:[40,30],shR:[40,30],elL:60,elR:60}))}if(g===1&&t>309.4){let A=yt((t-309.4)/1.4);v.place(V(2,-.6,A),V(-1.5,-.2,A),0,-Math.PI/2-.3),T=A<1?Ns(t,3):F(X(t,1),{shL:[140,30],shR:[140,30],elL:30,elR:30})}v.pose(T),L(v,null,t,t>314.6?"surpreso":E?"preocupado":"neutro",{mouth:t>314.8?{open:.8}:void 0})}}),h&&Kt(r,s[1],"R",[0,-.1,.06],!1),o.visible=t>302&&t<308.5,o.visible&&(Kt(o,s[2],"R",[0,-.05,0]),o.rotateX(1.2));let d=yt((t-302.8)/3.6);a.place(V(1.6,du,j(0,1,d)),V(-9,yp-2.35,d),0,d<1?Math.atan2(du-1.6,6.65):0);let p=Un(t,[[306.2,F(X(t,2),ht.maosBolso)],[306.7,{lean:30,bob:-.08,knL:30,knR:30,hipL:[30,6],hipR:[30,6],shL:[55,0],shR:[55,0],elL:5,elR:5,headX:-10}],[308.4,F(X(t,2),{shL:[60,-4],shR:[60,-4],elL:70,elR:70,lean:-3})],[311.4,F(X(t,2),{shL:[60,-4],shR:[60,-4],elL:70,elR:70,lean:-3})],[314.6,{lean:30,bob:-.08,knL:30,knR:30,hipL:[30,6],hipR:[30,6],shL:[55,0],shR:[55,0],elL:5,elR:5}],[315.4,F(X(t,2),ht.maosBolso)]]);a.pose(d<1?ae(t,{maos:"bolso",f:1.7}):p),L(a,null,t,t>314.6?"vergonha":"neutro",{look:t>308&&t<312?[-.6,.2]:[0,0]}),l.pose(F(X(t,5),ht.filmar)),Kt(c,l,"R",[0,-.09,.03]),L(l,null,t,t>308?"surpreso":"feliz")}function Io(n){let t=ep(n),e=t.supino.userData.barra,i=t.supino,s=K(n,Jt,.3,3.3,Math.PI),r=K(n,Is,.7,3.6,Math.PI),o=K(n,pf,-2.6,.3,Math.PI/2-.3),a=new it;a.add(Ie(.32,"#2A2A30",0,0,0,{seg:20})),a.children[0].scale.set(1,.55,1),a.add(ft(.36,.03,.22,"#2A2A30",0,-.02,.32)),o.headG.add(a),a.position.set(0,.3,-.01);let l=[K(n,nn(2),3,-1.2,-Math.PI/2-.4),K(n,nn(5,{camisa:"#E57AA0"}),-3.6,1.2,Math.PI/2),K(n,nn(4),2.4,1.6,-Math.PI/2-.8)],c=bt(.012,.012,.3,"#9EA4AC",0,0,0,{seg:6});n.add(c);let h=Gn((v,g,m)=>{v.fillStyle="#1A1A20",v.fillRect(0,0,g,m),v.fillStyle="#E2443A",v.beginPath(),v.arc(40,40,14,0,7),v.fill()});n.add(h),i.updateMatrixWorld(!0);let u=i.userData.anilhas,f=u.map((v,g)=>{let m=v.clone();return n.add(m),m.visible=!1,m}),d=new ta([[-.6,.7],[-.45,.35],[-.25,.08],[0,0],[.25,.08],[.45,.35],[.6,.7]].map(([v,g])=>new P(v,g,0))),p=new at(new xl(d,40,.018,8),kt("#C9CED6"));return i.add(p),p.visible=!1,{A:t,B:e,sup:i,gui:s,tia:r,dono:o,bone:a,extras:l,hal:c,fone:h,an:u,caem:f,u:p}}var ic=340.2,ks=341.4,ga=341.9;function Lo(n,t){let{B:e,sup:i,gui:s,tia:r,dono:o,bone:a,extras:l,hal:c,fone:h,an:u,caem:f}=n,d=yt((t-335)/3.2),p=yt((t-338.4)/1.4),v=p>0?[V(.15,.25,p),V(1.2,-.3,p)]:[V(.3,.15,d),V(3.3,1.2,d)];s.place(v[0],v[1],0,Math.PI),r.place(V(.7,.85,d),V(3.6,1,d),0,Math.PI+.3*(t>338.5));let g=d>0&&d<1||p>0&&p<1,m=j(ic-.4,ic+.5,t),S=Ue(yt((t-ks)/.35)),b=g?ae(t,{f:1.7}):X(t,2);if(t>ic-.6&&(b=F(X(t,2),{shR:[V(70,168,m),4],elR:V(30,5,m),lean:-2,headX:-20*m},Be(t,.1))),d>0&&d<1&&(b=F(b,{shL:[50,10],elL:20})),s.pose(b),L(s,null,t,t>ga+.4?"vergonha":t>ks?"surpreso":"neutro",{look:t>ks?[0,-.7]:[0,0]}),r.pose(t<338.5?F(ae(t,{f:1.8}),{shR:[60,-10],elR:20}):F(X(t,5),ht.filmar)),Kt(h,r,"R",[0,-.09,.03]),L(r,null,t,t>ks?"surpreso":"feliz"),t<ic-.2)e.position.set(0,1.15,-.55),e.rotation.set(0,0,0);else{s.root.updateMatrixWorld(!0);let A=s.hands.R.localToWorld(new P(0,-.05,0));i.worldToLocal(A),e.position.copy(A),e.rotation.set(0,0,0)}qf(e,S),e.children[0].visible=S<.5,n.u.visible=S>=.5,n.u.visible&&(n.u.position.copy(e.position),n.u.position.y+=.16,n.u.scale.setScalar(.6+.4*S));let E=t>ga;u.forEach(A=>{A.visible=!E}),f.forEach((A,w)=>{if(A.visible=E,!E)return;let M=u[w],_=Math.sign(M.userData.x0??M.position.x),I=t-ga,$=e.position.y-.35,G=_*(.35+w%6*.04),U=Math.max(.22-w%6*.02,$-4.9*I*I+(I>.45,0));A.position.set(G+_*I*.8,U,-.5+w%6*.03-.55+.3),A.rotation.set(Math.min(1.57,I*4),0,Math.PI/2+_*Math.min(1.2,I*3))});let R=j(342.4,343.6,t);o.pose(F(X(t,6),{shR:[V(0,150,R*(1-j(343.6,344.6,t))),20],elR:V(10,60,R),headX:-6})),R>.5&&(Kt(a,o,"R",[0,-.06,.06]),a.parent!==o.headG.parent?.parent&&a.parent===o.headG&&(o.headG.remove(a),s.root.parent.add(a))),L(o,"dono",t,t>ks?"surpreso":"neutro",{look:[.5,0]});let T=j(336,337,t);l.forEach((A,w)=>{let M=Math.sin(t*2.6+w),_=w===0?F(X(t,w),{shR:[10,10],elR:60+50*M}):w===1?F(X(t,w),{bob:-.12*(1+M),knL:50*(1+M),knR:50*(1+M),hipL:[40*(1+M),8],hipR:[40*(1+M),8],lean:20*(1+M),shL:[80,6],shR:[80,6]}):F(X(t,w),{shL:[20,10],shR:[20,10]});A.pose(Pe(_,F(X(t,w),t>ks?ht.maosCabeca:{}),T)),L(A,null,t,t>ks?"surpreso":T>.5?"desconfiado":"determinado",{mouth:t>ks+.3?{open:.7}:void 0})}),Kt(c,l[0],"R",[0,-.04,0]),c.rotateZ(Math.PI/2)}var _p=[Z(290,296,{bg:"#CFE4EE",fov:40},n=>{let t=Ar(n);return(e,i,s)=>(Sr(t,e),W(s,[[0,[-4.6,2.4,5.5]],[1,[-3.8,1.9,4.2]]],[[0,[.3,.4,-1]],[1,[.6,.5,-1.3]]],i/6),xr)}),Z(296,300,{limpa:!1,bg:"#CFE4EE",fov:38},n=>{let t=Ar(n);return(e,i,s)=>(Sr(t,e),W(s,[[0,[1.5,.4,-4.6]],[1,[1.8,.35,-4.2]]],[[0,[2,.2,-1.6]],[1,[2.8,.15,-1.9]]],i/4),{...xr,focus:2.5,range:1.5,blur:4})}),Z(300,305.6,{bg:"#CFE4EE",fov:40},n=>{let t=Ar(n);return(e,i,s)=>(Sr(t,e),W(s,[[0,[.2,.9,-4.6]],[1,[.4,.8,-4.3]]],[[0,[2.2,.3,-2]],[1,[2.3,.3,-1.9]]],i/5.6),xr)}),Z(305.6,311.4,{limpa:!1,bg:"#CFE4EE",fov:40},n=>{let t=Ar(n);return(e,i,s)=>(Sr(t,e),W(s,[[0,[0,1.2,-6.2]],[.5,[.4,1,-5.4]],[1,[.9,.95,-5.2]]],[[0,[1.8,.9,-4]],[.5,[2.6,.7,-3.2]],[1,[2.5,.7,-2.6]]],i/5.8),xr)}),Z(311.4,316,{limpa:!1,bg:"#CFE4EE",fov:38},n=>{let t=Ar(n);return(e,i,s)=>(Sr(t,e),W(s,[[0,[1,1.15,-5.6]],[1,[1.2,1.1,-5.3]]],[[0,[2.8,.75,-3]],[1,[2.8,.65,-2.6]]],i/4.6),xr)}),Z(316,320.4,{bg:"#CFE4EE",fov:36},n=>{let t=Ar(n);return(e,i,s)=>(Sr(t,e),W(s,[[0,[.2,1.05,-5]],[1,[.1,1,-4.7]]],[[0,[1.6,.55,-2]],[1,[0,.8,.6]]],i/4.4),xr)}),Z(320.4,330,{bg:"#CFE4EE",fov:30},n=>{let t=Ar(n),e=Gn();e.scale.setScalar(4.2),t.L.g.add(e);let i="",s=o=>o>=1e6?(o/1e6).toFixed(1).replace(".",",").replace(",0","")+" milh\xF5es":o>=1e3?Math.round(o/1e3)+" mil":String(Math.round(o)),r=[[322.2,"\xC9 fake","#E2443A"],[323.6,"Montagem","#3E7CC8"],[325,"Onde esse cara mora??","#5AA84E"],[326.4,"Quero ver levantar um \xF4nibus","#F2994A"],[327.6,"kkkkkk o alarme","#9B6CC4"],[328.6,"MANO???","#2FB5A8"]];return(o,a,l)=>{Sr(t,316);let c=o<321?1e4:o<324?1e4*Math.pow(30,(o-321)/3):o<327?3e5*Math.pow(6.67,(o-324)/3):2e6+(o-327)*12e4,h=r.filter(([p])=>o>p),u=s(c)+h.length+Math.floor(o*10%3);u!==i&&(i=u,e.desenha((p,v,g)=>{p.fillStyle="#101014",p.fillRect(0,0,v,g),p.fillStyle="#C8D8E0",p.fillRect(0,50,v,190),p.fillStyle="#C0392B",p.save(),p.translate(v*.62,170),p.rotate(-.18),p.fillRect(-60,-24,120,40),p.restore(),p.fillStyle="#8A8A8A",p.fillRect(0,210,v,30),p.fillStyle="#959BA3",p.fillRect(v*.4,120,22,60),p.fillStyle="#E3AE86",p.beginPath(),p.arc(v*.4+11,112,16,0,7),p.fill(),p.fillStyle="rgba(0,0,0,.5)",p.beginPath(),p.arc(v/2,145,26,0,7),p.fill(),p.fillStyle="#FFF",p.beginPath(),p.moveTo(v/2-8,131),p.lineTo(v/2+14,145),p.lineTo(v/2-8,159),p.fill(),p.fillStyle="#FFF",p.font="800 20px Inter",p.fillText("levantou o carro na rua \u{1F633}",12,270),p.fillStyle="#AAB",p.font="600 17px Inter",p.fillText("@tiago23",12,294),p.fillStyle="#FFF",p.font="900 34px Inter",p.fillText("\u{1F441} "+s(c),12,340),h.slice(-5).forEach(([m,S,b],E)=>{let R=380+E*44;p.fillStyle=b,p.beginPath(),p.arc(26,R,14,0,7),p.fill(),p.fillStyle="#FFF",p.font="600 19px Inter",p.fillText(S,48,R+7)})})),Kt(e,t.tia,"R",[0,-.12,.08],[-.4,0,0]),t.tia.pose(F(X(o,5),{shR:[62,-6],elR:80,shL:[55,-6],elL:75,headX:22})),L(t.tia,null,o,"feliz",{look:[0,.8]});let f=t.tia.headG.localToWorld(new P(-.5,.3,-.3));t.tia.fixo=!0;let d=e.position.clone();return W(l,[f.x,f.y,f.z],[d.x,d.y,d.z],a/9.6,0,.3),{...xr,focus:.55,range:.25,blur:10}}}),Z(330,335.2,{bg:"#2A2A30",fov:42},n=>{let t=Io(n);return(e,i,s)=>(Lo(t,e),W(s,[[0,[-1.4,2.3,3.6]],[1,[-1,2,3.2]]],[[0,[1,1,-1]],[1,[.6,1,-1.2]]],i/5.2),{bloom:.3})}),Z(335.2,339.6,{limpa:!1,bg:"#2A2A30",fov:40},n=>{let t=Io(n);return(e,i,s)=>(Lo(t,e),W(s,[[0,[-.8,1.5,-1.8]],[1,[-.6,1.45,-1.5]]],[[0,[.4,1,2.8]],[1,[.3,1,1.6]]],i/4.4),{bloom:.3})}),Z(339.6,342.6,{bg:"#2A2A30",fov:40},n=>{let t=Io(n);return(e,i,s)=>{Lo(t,e);let r=Math.max(0,e-ga-.3);return Kn(s,[[0,[-1.6,1.4,1.6]],[1,[-1.45,1.55,1.45]]],[[0,[.2,1.3,-.5]],[1,[.2,1.6,-.4]]],i/3,e>ga+.3?.04*Math.exp(-r*5):0),{bloom:.3}}}),Z(342.6,346.6,{bg:"#2A2A30",fov:32},n=>{let t=Io(n);return(e,i,s)=>(Lo(t,e),W(s,[[0,[-1,1.35,1.6]],[1,[-1.15,1.32,1.45]]],[[0,[-2.6,1.2,.3]],[1,[-2.6,1.22,.3]]],i/4),{bloom:.2})}),Z(346.6,355,{bg:"#2A2A30",fov:40},n=>{let t=Io(n);return(e,i,s)=>{Lo(t,e);let r=(e-346.6)/8.4,o=2.3+r*1.6;return W(s,[.25+Math.sin(o)*2.6,1.3+r*.3,-.3+Math.cos(o)*2.6],[.25,1.35,-.3],i/8.4,0,.3),{bloom:.25}}}),Z(355,360,{bg:"#2A2A30",fov:36},n=>{let t=Io(n);return(e,i,s)=>(Lo(t,e),t.tia.pose(F(To(e,2.2),ht.filmar)),W(s,[[0,[1.9,1.4,-1.2]],[1,[1.8,1.38,-1]]],[[0,[.6,1.1,.6]],[1,[.6,1.1,.7]]],i/5),{bloom:.25})})];var sc={tint:"#C8D0FF",exposure:.8,vig:.5};function fu(n,t=.62,e=.5,i=.42){let s=K(n,Jt,t,i,0);return s.sombra.visible=!1,s._b=[t,e,i],s}var pu=(n,t=0,e=0)=>{let[i,s,r]=n._b;n.root.rotation.set(-Math.PI/2,t,0,"XZY"),n.root.rotation.order="XYZ",n.root.rotation.set(-Math.PI/2,0,0),n.root.rotateY(t),n.root.position.set(i,s+e+Math.abs(Math.sin(t))*.08,r)};function va(n,t="noite"){let e=So(n,{hora:t});return e.luz.intensity=0,e.lamp.userData.bulbo.material.emissiveIntensity=0,e.rua.intensity=t==="noite"?26:6,e}function Gs(n){let t=pa(n),e=zf();e.position.set(.2,.765,.35),n.add(e);let i=e.userData.chama,s=e.userData.cobertura,r=new bn("#FFB45A",1.6,2.5,1.6);r.position.set(.2,1.15,.35),n.add(r);let o=K(n,df,-.45,.5,Math.PI/2-.25),a=K(n,Jt,.95,.55,-Math.PI/2+.1),l=new at(new re(.13,14,8,0,Math.PI),kt("#3A1E10"));l.scale.set(1,.25,1),n.add(l),l.visible=!1;let c=new at(new In(.16,18),new pe({color:"#3A1E10",transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2}));c.position.set(-1.785,1.15,.25),c.rotation.y=Math.PI/2,c.scale.set(1.3,1,1),n.add(c),c.visible=!1;let h=[];for(let u=0;u<4;u++){let f=new at(new In(.025,8),c.material);f.position.set(-1.784,1-u*.05,.2+u*.05),f.rotation.y=Math.PI/2,f.scale.set(1,2+u,1),n.add(f),h.push(f)}return{S:t,b:e,ch:i,cob:s,L:r,ci:o,gui:a,voa:l,mancha:c,pingos:h}}var py=415.2;function Vs(n,t,e=0){let i=t-py,s=i>.15;n.ch.visible=!s,n.ch.scale.set(1,1+.2*Math.sin(t*17),1),n.L.intensity=s?0:1.6*(.9+.1*Math.sin(t*13)),!s&&i>0&&(n.ch.rotation.z=-i*6);let r=yt((i-.1)/.4);n.voa.visible=r>0&&r<1,n.voa.visible&&n.voa.position.set(V(.2,-1.75,r),V(.95,1.15,r)+Math.sin(r*Math.PI)*.25,V(.35,.25,r)),n.cob.scale.set(1,1,r>0?.5:1),n.cob.position.z=r>0?.08:0;let o=i>.5&&e<1;n.mancha.visible=o,n.mancha.material.opacity=1-e,n.pingos.forEach((a,l)=>{a.visible=o,a.position.y=1-l*.05-Math.min(.1,Math.max(0,i-.5)*.01)})}function Ea(n){let t=ce(n),e=4*nt,i=[[.15,e,2],[Gt,e-.2,1.2],[Gt,e-.55,.7],[Gt,e-.9,.15],[Gt,e-1.25,-.4],[.3,3*nt+1.4,-1.25],[-.3,3*nt+1.4,-1.25]],s=[nn(3,{camisa:"#8E6A3A",calca:"#6A4A2A",estampa:(d,p,v)=>{d.fillStyle="#5A3A1A";for(let g=0;g<30;g++)d.beginPath(),d.arc(g*131%p,v*.5+g*61%(v*.5),14,0,7),d.fill()}}),nn(1),nn(0),{...nn(2),camisa:"#2A2E38",calca:"#2A2E38",estampa:(d,p,v)=>{d.fillStyle="#F4F1EA",d.beginPath(),d.moveTo(p/2-40,0),d.lineTo(p/2,v*.4),d.lineTo(p/2+40,0),d.fill(),d.fillStyle="#C0392B",d.fillRect(p/2-8,0,16,v*.45)}},kl(1),nn(4),nn(5),nn(6),nn(7)],r=i.map(([d,p,v],g)=>K(n,s[g],d,v,g<5?Math.PI:g<7?-Math.PI/2:Math.PI,p));r[0].place(-.3,1.75,e,-.79);let o=tt(.03,.06,.01,"#C9CED6",0,0,0);n.add(o);let a=Gn((d,p,v)=>{d.fillStyle="#F4F6FA",d.fillRect(0,0,p,v),d.fillStyle="#C8CDD4",d.fillRect(90,120,120,300),d.fillStyle="#9AA0A8",d.fillRect(90,260,120,6),d.fillRect(190,160,8,60),d.fillStyle="#2A2A30",d.font="700 26px Inter",d.fillText("geladeira \u{1F629}",60,480)});a.scale.setScalar(1.5),n.add(a);let l=new it;l.add(bt(.015,.015,.6,"#B8864A",0,-.2,0,{seg:6})),l.add(tt(.14,.07,.07,"#3A3A44",0,.1,0)),n.add(l);let c=tt(.07,.045,.004,"#F4F1EA",0,0,0);n.add(c);let h=K(n,Is,-.9,2.35,.3,e),u=ft(.15,.2,.02,"#E8D8A0",0,0,0);n.add(u);let f=bt(.006,.006,.12,"#2A4AA8",0,0,0,{seg:6});return n.add(f),{P:t,ks:r,chave:o,tel:a,marreta:l,cartao:c,tia:h,cad:u,can:f,Y:e}}function ya(n,t){let{ks:e,chave:i,tel:s,marreta:r,cartao:o,tia:a,cad:l,can:c}=n;e.forEach((u,f)=>{let d=F(X(t,f),{lean:4});f===0&&(d=F(d,{shR:[60,6],elR:40})),f===1&&(d=F(d,{shR:[70,-6],elR:70,headX:10})),f===2&&(d=F(d,{shR:[30+20*Math.max(0,Math.sin(t*2)),10],elR:90,shL:[85,30],elL:5})),f===3&&(d=F(d,{shR:[75,0],elR:20})),f===4&&(d=F(d,{shL:[140,20],elL:30,bob:Math.abs(Math.sin(t*6))*.04})),u.pose(d),L(u,null,t,f===4?"feliz":f===2?"bravo":f===3?"feliz":"neutro",{look:[Math.sin(t*.7+f)*.4,-.3]})}),Kt(i,e[0],"R",[0,-.06,.03]),Kt(s,e[1],"R",[0,-.08,.05],[-.5,0,0]),Kt(r,e[2],"R",[0,-.05,0]),Kt(o,e[3],"R",[0,-.06,.04]);let h=Math.max(0,Math.sin(t*3));a.pose(F(X(t,5),{shL:[55,-6],elL:80,shR:[50,-4],elR:85+10*h,headX:14})),Kt(l,a,"L",[0,-.06,.06],[-1.2,0,0]),Kt(c,a,"R",[0,-.04,.05],[-.8,0,.4])}function rc(n){let t=je(n,{hora:"tarde"}),e=bt(.024,.024,.03,"#9AA0A8",0,0,0,{seg:10});e.rotation.x=Math.PI/2,e.position.set(.075,1.05,-1.55),n.add(e),t.cad2.position.z=.08;let i=K(n,Jt,.1,-.7,Math.PI),s=kf();n.add(s);let r=K(n,Is,-1.45,.9,Math.PI/2-.2),o=ft(.15,.2,.02,"#E8D8A0",0,0,0);n.add(o);let a=tc(n,[.075,1.02,-1.48],[0,-.4,0],{n:20,tam:.02,vida:.25,abre:.05}),l=[0,0,0],c=zs(n,l,{t0:472.6,cores:["#E8F4FF","#FFFFFF","#BFE4FF"],n:40,v:.9,tam:.018,vida:1.2,chao:0}),h=[];for(let u=0;u<16;u++){let f=Ri("#8FCBEA",.03,.9,!1);f.userData={ph:u/16},n.add(f),h.push(f)}return{K:t,gui:i,cp:s,tia:r,cad:o,enche:a,po:c,pp:l,gotas:h}}var Mp=472.6;function oc(n,t){let{gui:e,cp:i,tia:s,cad:r,enche:o,gotas:a}=n,l=t,c=j(469.6,470.4,l);e.place(.1,V(-.7,-.55,c),0,V(Math.PI,Math.PI*.25,c));let h=j(470.8,472.4,l),u=l>Mp,f=j(473.2,474.2,l);e.pose(F(X(t,2,.6),{shR:[V(55,95,h)-30*f,6],elR:V(30,95,h)-20*f,headX:-8*h*(u?0:1)+22*f,lean:2})),i.visible=!u,u||Kt(i,e,"R",[0,-.08,.05],!1),i.userData.agua.scale.y=Math.max(.05,j(467.2,469.4,l)),o(t,l>467&&l<469.4?1:0),e.root.updateMatrixWorld(!0);let d=e.hands.R.localToWorld(new P(0,-.08,.05));l<Mp&&n.pp.splice(0,3,d.x,d.y,d.z),a.forEach(v=>{let g=v.userData,m=(t*1.6+g.ph)%1;v.visible=u&&t<482,v.position.set(d.x+(g.ph-.5)*.05,Math.max(0,d.y-m*d.y),d.z),v.scale.setScalar(.03*(1-m*.5))}),L(e,l>476&&l<479?"gui":null,t,u?"triste":"neutro",{look:u?[0,.7*f]:[0,0],olhosAbertos:!0});let p=j(479.2,481,l);s.pose(F(X(t,5),{shL:[V(55,5,p),-6],elL:V(80,20,p),headX:6})),Kt(r,s,"L",[0,-.06,.06],[-1.2,0,0]),L(s,null,t,l>473?"preocupado":"feliz")}var bp=[Z(360,366,{bg:"#08080E",fov:40},n=>{let t=va(n),e=fu(n),i=vo(n,[[.62,.3,-.3],[.62,.3,.3]],{n:16,size:.5,life:2,op:.4,sp:.8});return(s,r,o)=>{t.ventilador.girar(s);let a=He(s,[[361.2,0],[361.9,1.2]]),l=gi(yt((s-362.3)/.15));return pu(e,a,-.08*l),t.colchao.position.y=.39-.08*l,t.travesseiro.position.y=.5-.08*l,t.lencol.position.y=.45-.08*l,e.pose({shL:[30,10],elL:60,shR:[20,14],elR:30,hipL:[30,4],hipR:[20,4],knL:40,knR:30}),L(e,null,s,s>362.4?"surpreso":"sono",{blink:s<362.3?1:void 0}),i(s-362.3),Kn(o,[[0,[-.9,1.9,1.3]],[1,[-.7,1.7,1]]],[[0,[.62,.4,-.2]],[1,[.62,.45,-.25]]],r/6,s>362.3?.02*Math.exp(-(s-362.3)*6):0),sc}}),Z(366,371,{bg:"#08080E",fov:40},n=>{let t=va(n),e=fu(n);return(i,s,r)=>{t.ventilador.girar(i),t.colchao.position.y=.31,t.lencol.position.y=.37,t.travesseiro.position.y=.42;let o=He(i,[[366.6,1.2],[367.4,-1.1]]),a=Ue(yt((i-367.6)/.2));return t.cama.rotation.z=.1*a,t.cama.position.y=-.05*a,pu(e,o,-.02-.01*a),e.root.position.x+=.03*a,e.pose({shL:[20,14],elL:30,shR:[30,10],elR:60,hipL:[20,4],hipR:[30,4],knL:30,knR:40}),L(e,null,i,i>367.7?"medo":"sono",{blink:i<367.6&&i>366.2?.6:void 0}),Kn(r,[[0,[1.3,1.1,1.4]],[1,[1.25,1.05,1.3]]],[[0,[.62,.3,.2]],[1,[.62,.35,-.1]]],s/5,i>367.6?.015*Math.exp(-(i-367.6)*6):0),sc}}),Z(371,375.2,{bg:"#08080E",fov:40},n=>{let t=va(n);t.cama.rotation.z=.1,t.cama.position.y=-.05;let e=K(n,Jt,0,-.1,Math.PI/2);return(i,s,r)=>{t.ventilador.girar(i);let o=i-371,a=j(1.2,3.2,o);return t.colchao.position.set(V(0,-1.07,a),V(.31,.1,a),0),t.travesseiro.position.set(V(0,-1.07,a),V(.42,.22,a),-.8),e.place(V(-.75,-1.15,a),.35,0,Math.PI/2),e.pose(F(ht.pegaChao,{lean:40,shL:[60,6],shR:[60,6]},{bob:-.1})),L(e,null,i,"triste"),W(r,[[0,[-1.1,1.5,1.3]],[1,[-1,1.4,1.15]]],[[0,[.2,.3,-.3]],[1,[-.2,.3,-.3]]],s/4.2),sc}}),Z(375.2,381,{bg:"#08080E",fov:40},n=>{let t=va(n);t.cama.rotation.z=.1,t.cama.position.y=-.05,t.colchao.position.set(-1.07,.1,0),t.travesseiro.position.set(-1.07,.22,-.8);let e=fu(n,-.45,.22,.42);return(i,s,r)=>(t.ventilador.girar(i),pu(e,0,0),e.pose(F(ht.bracoCruzado,{lean:0,headX:-4})),L(e,null,i,"triste",{look:[0,0],olhosAbertos:!0,lento:.3}),W(r,[[0,[-.45,2.2,.95]],[1,[-.45,2.1,.8]]],[[0,[-.45,0,-.3]],[1,[-.45,0,-.4]]],s/5.8),{...sc,exposure:.75})}),Z(381,390,{bg:"#C8D8E0",fov:44,limpa:!1,perto:!0},n=>{let t=va(n,"manha");t.luz.intensity=3;let e=[[1.38,.5],[1.12,.55]].map(([s,r])=>{let o=ua();return o.position.set(-1.373,s,r),o.rotation.y=Math.PI/2,o.scale.setScalar(.85),n.add(o),o}),i=K(n,Jt,-.95,.88,-Math.PI/2-.64);return(s,r,o)=>{let a=s-381,l=j(3.5,4.5,a);return i.pose(F(X(s,2,.6),{shR:[V(10,92,l),V(10,-10,l)],elR:V(10,20,l)+8*Math.sin(s*1.3)*l,headY:15,headX:6})),L(i,null,s,"preocupado",{look:[.4,0]}),W(o,[[0,[-.3,1.4,-.05]],[.35,[-.25,1.4,-.1]],[1,[-.12,1.45,-.2]]],[[0,[-1.25,1.2,.62]],[.35,[-1.22,1.18,.64]],[1,[-1.15,1.12,.72]]],r/9,0,.3),{tint:"#FFF4E4"}}}),Z(390,398,{bg:"#3A3028",fov:40},n=>{let t=Gs(n);return(e,i,s)=>{Vs(t,e);let r=j(395.5,397,e);return t.ci.pose(F(X(e,3),Pe({},ht.bracosAbertos,r))),L(t.ci,null,e,"feliz",{smile:.8}),t.gui.pose(F(X(e,2),ht.maosBolso)),L(t.gui,null,e,"neutro"),W(s,[[0,[1.5,1.7,1.7]],[.5,[1,1.5,1.6]],[1,[.5,1.35,1.6]]],[[0,[0,.8,.3]],[1,[-.35,1,.45]]],i/8),{bloom:.3}}}),Z(398,401.2,{bg:"#3A3028",fov:34},n=>{let t=Gs(n);return(e,i,s)=>(Vs(t,e),t.ci.pose(F(X(e,3),ht.bracosAbertos,{shL:[55+6*Math.sin(e*3),55],shR:[55+6*Math.sin(e*3+1),55]})),L(t.ci,"cida",e,"feliz",{smile:.8}),t.gui.pose(F(X(e,2),ht.maosBolso)),W(s,[[0,[.3,1.2,1.45]],[1,[.25,1.18,1.4]]],[[0,[-.45,.92,.5]],[1,[-.45,.92,.5]]],i/3.2),{bloom:.3})}),Z(401.2,405,{bg:"#3A3028",fov:36},n=>{let t=Gs(n);return(e,i,s)=>{Vs(t,e);let r=j(401.6,402.4,e);return t.gui.place(V(.95,1.25,r),V(.55,.45,r),0,-Math.PI/2+.1),t.gui.pose(r>0&&r<1?ae(e,{f:1.4,amp:.6}):F(X(e,2),ht.maosBolso,{lean:-6})),L(t.gui,null,e,"triste",{look:[0,.2]}),t.ci.pose(F(X(e,3),ht.bracosAbertos)),L(t.ci,null,e,"feliz"),W(s,[[0,[-.4,1.25,-.3]],[1,[-.35,1.22,-.35]]],[[0,[1.4,1.1,.35]],[1,[1.6,1.15,.22]]],i/3.8),{bloom:.3}}}),Z(405,409,{bg:"#3A3028",fov:32},n=>{let t=Gs(n);return t.gui.place(1.25,.45,0,-Math.PI/2+.1),(e,i,s)=>(Vs(t,e),t.gui.pose(F(X(e,2,.6),ht.maosBolso,{headX:10,lean:-4})),L(t.gui,"gui",e,"triste",{lagrima:e>406.5,look:[0,.3]}),t.ci.pose(F(X(e,3),ht.bracosAbertos)),W(s,[[0,[.3,1.15,.75]],[1,[.35,1.13,.72]]],[[0,[1.25,1,.45]],[1,[1.25,1,.45]]],i/4),{bloom:.3})}),Z(409,413,{bg:"#3A3028",fov:32,perto:!0},n=>{let t=Gs(n);return t.gui.place(1.25,.45,0,-Math.PI/2+.1),(e,i,s)=>{Vs(t,e);let r=j(409.3,412.2,e);return t.ci.pose(F(X(e,3,.4),Pe(ht.bracosAbertos,{shL:[5,10],shR:[5,10],elL:20,elR:20},r))),L(t.ci,null,e,r>.6?"triste":"feliz",{smile:.8*(1-r),lento:.4}),t.gui.pose(F(X(e,2),ht.maosBolso)),W(s,[[0,[.95,1.05,.95]],[1,[.88,1.04,.9]]],[[0,[-.45,.9,.5]],[1,[-.3,.9,.45]]],i/4),{bloom:.3}}}),Z(413,418,{bg:"#3A3028",fov:38},n=>{let t=Gs(n);return t.gui.place(1.25,.45,0,-Math.PI/2+.1),(e,i,s)=>{Vs(t,e);let r=He(e,[[414.3,0],[415,1],[415.6,1],[416.4,0]]);t.gui.pose(F(X(e,2),ht.maosBolso,{lean:18*r,headX:8*r})),L(t.gui,null,e,"triste",{mouth:e>415&&e<415.5?{open:.3,round:1}:void 0});let o=j(415.2,415.8,e);return t.ci.pose(F(X(e,3),{headY:30*o,lean:-4*o})),L(t.ci,null,e,e>415.4?"surpreso":"triste",{look:[-.5*o,0]}),W(s,[[0,[.35,1.35,1.75]],[1,[.3,1.3,1.65]]],[[0,[-.4,.95,.35]],[1,[-.6,1,.3]]],i/5),{bloom:.3}}}),Z(418,425.4,{bg:"#3A3028",fov:38},n=>{let t=Gs(n);return t.gui.place(1.25,.45,0,-Math.PI/2+.1),(e,i,s)=>(Vs(t,e),t.ci.pose(F(X(e,3,.4),{headX:10})),L(t.ci,null,e,"triste",{lento:.4,look:[0,.4]}),t.gui.pose(F(X(e,2,.4),ht.maosBolso,{headX:16})),L(t.gui,null,e,"triste",{lagrima:!0,lento:.4}),W(s,[[0,[.2,2,2]],[1,[.25,1.6,1.4]]],[[0,[.3,.8,.4]],[1,[.3,.9,.4]]],i/7.4),{bloom:.25,sat:.85})}),Z(425.4,440,{limpa:!1,bg:"#3A3028",fov:38},n=>{let t=Gs(n);t.ci.place(-1.4,.3,0,-Math.PI/2),t.gui.place(1.5,1.35,0,-Math.PI/2-.5);let e=ft(.12,.1,.03,"#F2C230",0,0,0);return n.add(e),(i,s,r)=>{let o=j(427,438,i);Vs(t,i,o*.95);let a=Math.sin(i*5);return t.ci.pose(F(X(i,3,.4),{shR:[100+12*a,10+10*a],elR:40,headX:-8,lean:4})),Kt(e,t.ci,"R",[0,-.07,.02]),L(t.ci,null,i,"triste",{lento:.5}),t.gui.pose(F(X(i,2,.4),{shL:[6,10],shR:[6,10],elL:20,elR:20})),t.gui.hands.L.scale.set(.9,.7,1.05),t.gui.hands.R.scale.set(.9,.7,1.05),L(t.gui,null,i,"triste",{lagrima:!0}),W(r,[[0,[1.6,1.5,1.1]],[1,[1.55,1.45,1]]],[[0,[-.6,1,.3]],[1,[-1,1.05,.3]]],s/14.6),{bloom:.25,sat:.85}}}),Z(440,446.5,{limpa:!1,bg:"#2A2420",fov:58},n=>{let t=Ea(n);return(e,i,s)=>{ya(t,e);let r=t.Y;return W(s,[[0,[1,r+2.55,2.75]],[1,[.95,r+2.5,2.65]]],[[0,[Gt,r-1.3,-.3]],[1,[.3,r-1.6,-1]]],i/6.5),{tint:"#FFF4E4"}}}),Z(446.5,452,{limpa:!1,bg:"#2A2420",fov:48},n=>{let t=Ea(n);return(e,i,s)=>{ya(t,e);let r=t.Y;return W(s,[[0,[-.75,r-.6,-.9]],[1,[-.75,r-.55,-.6]]],[[0,[Gt,r-.5,1]],[1,[Gt,r-.9,-.2]]],i/5.5),{tint:"#FFF4E4"}}}),Z(452,456,{bg:"#2A2420",fov:36},n=>{let t=Ea(n);return(e,i,s)=>{ya(t,e),t.ks[0].root.visible=!1,L(t.tia,null,e,"feliz",{look:[0,.6]});let r=t.Y;return W(s,[[0,[-.3,r+1.25,1.45]],[1,[-.35,r+1.22,1.55]]],[[0,[-.85,r+.95,2.35]],[1,[-.85,r+.9,2.35]]],i/4),{tint:"#FFF4E4"}}}),Z(456,459.4,{limpa:!1,bg:"#2A2420",fov:34},n=>{let t=Ea(n);return(e,i,s)=>{ya(t,e),t.ks[0].root.visible=!1,t.tia.pose(F(X(e,5),{shL:[55,-6],elL:80,shR:[70+20*Math.sin(e*4),20],elR:60,lean:-4})),L(t.tia,"tiago",e,"feliz",{look:[.4,0]});let r=t.Y;return W(s,[[0,[-.15,r+1.2,1.4]],[1,[-.2,r+1.18,1.5]]],[[0,[-.85,r+1,2.35]],[1,[-.85,r+1,2.35]]],i/3.4),{tint:"#FFF4E4"}}}),Z(459.4,465,{limpa:!1,bg:"#2A2420",fov:44},n=>{let t=Ea(n);return(e,i,s)=>{ya(t,e),L(t.tia,null,e,"feliz");let r=t.Y;return W(s,[[0,[1,r+2,2.6]],[1,[.95,r+2.5,2.65]]],[[0,[-.7,r+.8,2.2]],[1,[.3,r-1.6,-1]]],i/5.6),{tint:"#FFF4E4"}}}),Z(465,470.6,{bg:"#3A3028",fov:38},n=>{let t=rc(n);return(e,i,s)=>(oc(t,e),W(s,[[0,[.85,1.3,.3]],[1,[.75,1.25,.1]]],[[0,[.1,1,-1.1]],[1,[.1,1,-1]]],i/5.6),{tint:"#FFF0DC"})}),Z(470.6,476,{bg:"#3A3028",fov:34},n=>{let t=rc(n);return(e,i,s)=>(oc(t,e),t.po(e),W(s,[[0,[.75,1.2,.55]],[.5,[.6,1.15,.4]],[1,[.55,1.05,.35]]],[[0,[.1,1.05,-.45]],[.5,[.15,.95,-.4]],[1,[.15,.85,-.35]]],i/5.4),{tint:"#FFF0DC",focus:1,range:.6,blur:6})}),Z(476,483,{limpa:!1,bg:"#3A3028",fov:36},n=>{let t=rc(n);return(e,i,s)=>(oc(t,e),W(s,[[0,[-.7,1.3,.6]],[.55,[-.75,1.3,.55]],[1,[.7,1.25,.2]]],[[0,[.1,1.05,-.55]],[.55,[.1,1.05,-.55]],[1,[-1.4,1,.9]]],i/7,0,.3),{tint:"#FFF0DC"})}),Z(483,489.4,{bg:"#3A3028",fov:30},n=>{let t=rc(n);return(e,i,s)=>(oc(t,e),t.gui.pose(F(X(e,2,.4),{shR:[70,6],elR:80,headX:18})),L(t.gui,null,e,"determinado",{look:[0,.5]}),W(s,[[0,[.55,1.05,.2]],[1,[.4,1.15,.1]]],[[0,[.15,.9,-.35]],[1,[.1,1.05,-.5]]],i/6.4),{tint:"#FFF0DC",focus:.8,range:.4,blur:8})})];var Wn={tint:"#FFF0D8",bloom:.12,vig:.45,exposure:.9},us=1.7,Tr=[512.4,514.6,515.6,516.6,520.4,523.8,530],Ye=(n={})=>({bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,lean:10,shL:[40,4],elL:60,shR:[50,0],elR:65,...n});function mn(n,t={}){let e=je(n,{hora:t.hora||"noite"});t.hora||(e.luz.intensity=3.5,e.lamp.userData.bulbo.material.emissiveIntensity=1.2);let i=fa(1,.9,"madrugada",2);i.position.set(.4,1.6,-1.6+.03),n.add(i),i.traverse(p=>{p.material&&(p.material=p.material.clone(),p.material.transparent=!0)}),i.userData.vidro.material.opacity=0;let s=K(n,t.luva?t.luva:Jt,.15,1.05,Math.PI);Qn(s,.15,1.05,Math.PI,.46);let r=K(n,Ke,.15,-.15,0);Qn(r,.15,-.15,0,.46);let o=qh(30);o.position.set(.25,.785,.45),o.scale.setScalar(us),n.add(o);let a=mr();a.scale.setScalar(us),n.add(a);let l=xe(7),c=Tr.map((p,v)=>{let g=Zl(.035);return g.position.set(-.2+l()*.5,.786,.55+l()*.3),g.scale.setScalar(.8+l()*.5),n.add(g),g}),h=[];for(let p=0;p<26;p++){let v=$l(p);v.position.set(-.5+l()*1.4,.005,.6+l()*1),v.scale.setScalar(us),n.add(v),h.push(v)}let u=Tr.map(()=>[0,0,0]),f=Tr.map((p,v)=>zs(n,u[v],{t0:p,cores:["#F2B430","#F4F1E4","#F2B430"],n:24,v:v===0?2.2:1.4,up:v===0?1.4:1,tam:.03,vida:.9,chao:.79})),d=Ie(.05,"#F2B430",0,0,0,{seg:10});return d.scale.set(1.3,.5,.4),s.headG.add(d),d.position.set(.08,.28,.29),d.visible=!1,{K:e,jm:i,gui:s,ci:r,band:o,mao:a,gem:c,chao:h,sp:f,ps:u,cara:d}}function gn(n,t,e={}){let{gui:i,mao:s,gem:r,chao:o,sp:a,cara:l,band:c}=n,h=Tr.filter(d=>d<=t),u=h.length&&t-h[h.length-1]<.9;if(r.forEach((d,p)=>{d.visible=t>Tr[p]+.15}),o.forEach((d,p)=>{d.visible=t>527+p*.05&&p<26}),l.visible=t>Tr[0]&&t<518,s.visible=!u&&!e.semOvo,s.visible){i.root.updateMatrixWorld(!0);let d=i.hands.R.localToWorld(new P(0,-.02,.06));s.position.copy(d),s.rotation.set(0,0,0)}i.root.updateMatrixWorld(!0);let f=i.hands.R.localToWorld(new P(0,-.02,.06));Tr.forEach((d,p)=>{t<d&&n.ps[p].splice(0,3,f.x,f.y,f.z),Math.abs(t-d)<1?a[p](t):a[p](-99)}),c.userData.ovos.forEach((d,p)=>{d.visible=p>=Math.min(h.length,7)||t>527.4})}var xp=[Z(489.4,500,{bg:"#1A1610",fov:40},n=>{let t=mn(n);return t.ci.root.visible=!1,t.band.visible=!1,(e,i,s)=>(gn(t,489,{semOvo:!0}),t.gui.pose(F(Ye({shR:[45,6],elR:80,shL:[45,6],elL:80,headX:16}),An(e,2,.3))),L(t.gui,null,e,"triste",{look:[0,.7],lento:.5}),W(s,[[0,[1.6,1.7,-.6]],[1,[1.2,1.4,-.3]]],[[0,[.15,.8,.8]],[1,[.15,.9,.9]]],i/10.6),Wn)}),Z(500,508,{bg:"#1A1610",fov:40},n=>{let t=mn(n);return(e,i,s)=>{let r=e-500;gn(t,489,{semOvo:!0});let o=yt(r/2.4),a=r>4.4;return a?Qn(t.ci,.15,-.15,0,.46):t.ci.place(V(-1.4,.15,o),V(.9,-.5,o),0,o<1?Math.atan2(1.55,-1.4):0),t.band.visible=!0,r<2.6?(Kt(t.band,t.ci,"R",[.08,-.08,.12],!1),t.band.rotation.set(0,0,0)):t.band.position.set(.25,.785,.45),t.ci.pose(a?F(Ye({lean:-4}),Pe({},ht.bracoCruzado,j(5,5.8,r))):r<2.4?F(ae(e,{f:2}),{shR:[60,-10],elR:60,shL:[60,-10],elL:60}):r<3.4?F(X(e,3),{lean:20,shR:[60,0],elR:20,shL:[60,0],elL:20}):F(X(e,3),{shL:[40,10],elL:20,lean:10})),L(t.ci,null,e,"determinado"),t.gui.pose(Ye({shR:[45,6],elR:80,shL:[45,6],elL:80,headX:r<3?16:0})),L(t.gui,null,e,r>3?"surpreso":"triste",{look:r>3?[0,.5]:[0,.7]}),W(s,[[0,[1.7,1.45,.95]],[1,[1.6,1.4,.8]]],[[0,[-.5,1,.3]],[1,[.15,.95,.3]]],i/8),Wn}}),Z(508,510.4,{bg:"#1A1610",fov:38},n=>{let t=mn(n);return(e,i,s)=>(gn(t,489,{semOvo:!0}),t.ci.pose(F(Ye({lean:-4}),ht.bracoCruzado,{headX:-2})),L(t.ci,"cida",e,"determinado"),t.gui.pose(Ye({shR:[45,6],elR:80,shL:[45,6],elL:80})),W(s,[[0,[.42,1.32,1.6]],[1,[.4,1.3,1.5]]],[[0,[.15,.92,-.15]],[1,[.15,.92,-.15]]],i/2.4),Wn)}),Z(510.4,513.6,{bg:"#1A1610",fov:40},n=>{let t=mn(n);return(e,i,s)=>{gn(t,e);let r=j(510.8,511.6,e);return t.gui.pose(F(Ye({shR:[V(50,62,r),0],elR:V(65,75,r),headX:10}),e>512.4?{lean:-12,headX:-14}:{})),L(t.gui,null,e,e>512.45?"surpreso":"determinado",{blink:e>512.45&&e<513?1:void 0,look:[0,.5]}),t.ci.pose(F(Ye({lean:-4}),ht.bracoCruzado)),L(t.ci,null,e,"neutro"),W(s,[[0,[1.15,1.3,-.05]],[1,[1.1,1.27,0]]],[[0,[.12,.95,.95]],[1,[.12,1,1]]],i/3.2),Wn}}),Z(513.6,517.6,{bg:"#1A1610",fov:38},n=>{let t=mn(n);return(e,i,s)=>{gn(t,e);let r=(e-513.6)%1;return t.gui.pose(Ye({shR:[55+8*Math.sin(r*Math.PI),0],elR:70,headX:12})),L(t.gui,null,e,"tedio",{look:[0,.6]}),t.ci.pose(F(Ye({lean:-4}),ht.bracoCruzado)),L(t.ci,null,e,"neutro"),W(s,[[0,[.95,1.15,.95]],[1,[.85,1.1,.85]]],[[0,[.1,.85,.7]],[1,[.1,.85,.7]]],i/4),Wn}}),Z(517.6,521.6,{bg:"#1A1610",fov:36},n=>{let t=mn(n);return t.ci.root.visible=!1,(e,i,s)=>{gn(t,e);let r=Math.sin(yt((e-518.2)/1.8)*Math.PI);return t.gui.pose(Ye({shR:[58,0],elR:72,lean:10-5*r,shL:[40+4*r,8],headX:-4*r})),L(t.gui,null,e,e>520.5?"triste":"neutro",{blink:e>518.2&&e<520.4?1:void 0}),t.ci.pose(F(Ye({lean:-4}),ht.bracoCruzado)),W(s,[[0,[.62,1.42,.38]],[1,[.58,1.38,.42]]],[[0,[.15,1,1]],[1,[.15,1,1]]],i/4),Wn}}),Z(521.6,525,{bg:"#1A1610",fov:30},n=>{let t=mn(n);return(e,i,s)=>(gn(t,e),t.gui.pose(Ye({shR:[62,0],elR:80,headX:14})),t.gui.hands.R.scale.set(.85,1.15,.7),L(t.gui,null,e,e>523.9?"bravo":"determinado",{look:[0,.7]}),t.ci.pose(F(Ye({lean:-4}),ht.bracoCruzado)),W(s,[[0,[.75,1.05,.55]],[1,[.68,1.02,.6]]],[[0,[.1,.92,.78]],[1,[.1,.92,.8]]],i/3.4),{...Wn,focus:.7,range:.4,blur:6})}),Z(525,528.6,{bg:"#1A1610",fov:40},n=>{let t=mn(n),e=qh(30);return e.scale.setScalar(us),n.add(e),(i,s,r)=>{let o=i-525;gn(t,i);let a=He(o,[[.4,0],[1.6,1],[2,1],[3.2,0]]);return t.ci.place(V(.15,.9,a),V(-.15,-.9,a),0,o<1.8?Math.PI*.8:-Math.PI*.1),t.ci.pose(a>.05&&a<.95?F(ae(i,{f:2}),o>1.8?{shR:[60,-10],elR:60,shL:[60,-10],elL:60}:{}):F(X(i,3),o>1.8?{shR:[60,-10],elR:60,shL:[60,-10],elL:60}:{})),L(t.ci,null,i,"determinado"),o>1.8&&o<3.3?Kt(e,t.ci,"R",[.08,-.08,.12],!1):o>=3.3?e.position.set(-.15,.785,.45):e.position.set(1.32,.93,-1),e.rotation.set(0,0,0),t.gui.pose(Ye({shR:[45,6],elR:80,headX:6})),L(t.gui,null,i,"tedio",{look:[.4,0]}),W(r,[[0,[-1.4,1.5,.55]],[1,[-1.3,1.45,.45]]],[[0,[.4,.9,-.3]],[1,[.3,.9,-.2]]],s/3.6),Wn}}),Z(528.6,532.6,{bg:"#1A1610",fov:40},n=>{let t=mn(n);return(e,i,s)=>{gn(t,e);let r=He(e,[[530.4,0],[530.9,1],[531.8,1],[532.3,0]]);return t.gui.pose(Ye({shR:[55,0],elR:70,shL:[V(40,115,r),V(4,-20,r)],elL:V(60,140,r)+10*Math.sin(e*9)*r,headX:6})),L(t.gui,null,e,"tedio",{blink:r>.5?1:void 0}),t.ci.pose(F(Ye({lean:-4}),ht.bracoCruzado)),W(s,[[0,[1.3,.55,1.9]],[1,[1.2,.8,1.7]]],[[0,[0,.1,1.1]],[1,[.15,.85,1]]],i/4),Wn}}),Z(532.6,536.6,{bg:"#1A1610",fov:34},n=>{let t=mn(n);return t.ci.root.visible=!1,t.gui.root.visible=!1,(e,i,s)=>{gn(t,e);let r=j(533.2,535.8,e);return t.jm.userData.vidro.material.opacity=r,t.gui.pose(Ye({shR:[55,0],elR:70,headX:10})),t.ci.pose(F(Ye({lean:-4}),ht.bracoCruzado,{headX:14*r})),W(s,[[0,[-.2,1.5,.4]],[1,[-.1,1.5,.2]]],[[0,[.4,1.55,-1.6]],[1,[.4,1.5,-1.6]]],i/4),{...Wn,tint:r>.5?"#D8DCFF":Wn.tint}}}),Z(536.6,540.6,{bg:"#1A1610",fov:36},n=>{let t=mn(n);return t.jm.userData.vidro.material.opacity=1,(e,i,s)=>{gn(t,e);let r=j(538.4,538.8,e),o=j(539,539.5,e);return t.ci.pose(F(Ye({lean:-4}),Pe(F(ht.bracoCruzado,{headX:28+4*Math.sin(e*1.5),headZ:10}),{shR:[75,6],elR:10,shL:[30,10],elL:60},o),{headX:-28*r*(1-o)})),L(t.ci,null,e,r<.5?"sono":"determinado",{blink:r<.5?1:void 0,look:[0,.4*o]}),t.gui.pose(Ye({shR:[55,0],elR:70})),L(t.gui,null,e,"sono"),W(s,[[0,[.45,1.3,1.55]],[1,[.42,1.28,1.45]]],[[0,[.15,.9,-.15]],[1,[.15,.9,-.15]]],i/4),{...Wn,tint:"#E0E0FF"}}}),Z(540.6,548,{bg:"#1A1610",fov:38,perto:!0},n=>{let t=mn(n);return t.jm.userData.vidro.material.opacity=1,(e,i,s)=>{gn(t,e);let r=j(542,544,e);t.gui.pose(Ye({shR:[92,-4],elR:62,headX:12})),t.gui.hands.R.scale.set(1,1-.15*(1-r),1),t.gui.root.updateMatrixWorld(!0);let o=t.gui.hands.R.localToWorld(new P(0,-.02,.06));t.mao.position.copy(o).add(new P(0,.03*r,0)),L(t.gui,null,e,"surpreso",{look:[0,.7],blink:0}),t.ci.pose(F(Ye({lean:6}),{shL:[40,10],elL:60,shR:[40,10],elR:60,headX:10}));let a=t.mao.position,l=t.gui.root.rotation.y,c=Math.sin(l),h=Math.cos(l),u=h,f=-c,d=V(1.25,1,Ue(yt(i/7.4)));return W(s,[[0,[a.x+c*.45-u*d,a.y+.3,a.z+h*.45-f*d]],[1,[a.x+c*.4-u*d*.9,a.y+.26,a.z+h*.4-f*d*.9]]],[[0,[a.x,a.y+.08,a.z]],[1,[a.x,a.y+.08,a.z]]],i/7.4,0,.2),{...Wn,tint:"#FFF0D0",focus:s.position.distanceTo(a),range:.5,blur:8,sat:1.1}}}),Z(548,553,{bg:"#1A1610",fov:34},n=>{let t=mn(n);return t.jm.userData.vidro.material.opacity=1,(e,i,s)=>{gn(t,e);let r=j(548.8,550.5,e);return t.ci.pose(F(Ye({lean:6}),{shL:[40,10],elL:60,shR:[40,10],elR:60,headX:4})),L(t.ci,null,e,r>.6?"feliz":"neutro",{smile:r,lento:.5,olhosAbertos:!0}),t.gui.pose(Ye({shR:[58,0],elR:80})),W(s,[[0,[.42,1.3,1.55]],[1,[.4,1.25,1.4]]],[[0,[.15,.92,-.15]],[1,[.15,.95,-.15]]],i/5),{...Wn,tint:"#FFE8D0"}}}),Z(553,560,{bg:"#1A1610",fov:36},n=>{let t=mn(n);return t.jm.userData.vidro.material.opacity=1,(e,i,s)=>{gn(t,e);let r=e>557.4;return t.ci.pose(F(Ye({lean:4}),{shR:[45+20*Math.max(0,Math.sin(e*3))*(e<557.3),12],elR:50,shL:[40,10],elL:60})),L(t.ci,"cida",e,"feliz",{smile:.8,olhosAbertos:!0}),t.gui.pose(Ye({shR:[58,0],elR:80,headX:r?12:0})),L(t.gui,null,e,r?"feliz":"surpreso",{look:[0,r?.7:0],smile:r?.4:void 0}),W(s,[[0,[2.25,1.45,.45]],[1,[2.1,1.4,.45]]],[[0,[.15,.95,.45]],[1,[.15,.95,.45]]],i/7),{...Wn,tint:"#FFE8D0"}}})];var my={tint:"#FFF0E0",sat:1.08},Pi=(n,t,e,i={})=>Z(n,t,{bg:"#E8B080",fov:i.fov||40,far:600,limpa:i.limpa},s=>{let r=jl(s,i),o=e(r,s);return(a,l,c)=>(r.g.updateMatrixWorld(!0),{...my,...o(a,l,c)||{}})}),le=(n,t,e,i)=>n.L.w(t,e,i),Ap=(n,t)=>{let e=yt((t-jn)/.2);return F(ht.maosFrente,{shL:[-22,0],shR:[-22,0],hipL:[24,6],knL:24+8*e,hipR:[-18-6*e,4],knR:6,lean:2+5*e,bob:-.02*e},Be(n,t>jn?.9*Math.exp(-(t-jn)*.8)+.15:0))},gy=(n,t)=>Un(t,[[0,F({shL:[0,9],shR:[4,9],elL:14,elR:12},An(n,3,.6))],[19.6,{shL:[6,10],shR:[4,9],elL:18,elR:12}],[19.85,{shL:[-6,14],shR:[2,10],elL:6,elR:10},"out"],[20.5,F(ht.maosFrente,{shL:[-18,0],shR:[-18,0],hipL:[24,6],knL:22,hipR:[-18,4],knR:6,lean:2}),"back"]]),ac=(n,t)=>t<20.5?gy(n,t):Ap(n,t);function vy(n){let t=new at(new re(.18,24,16),new Me({color:"#FFF6E0",transparent:!0,opacity:0,depthWrite:!1,blending:Oi}));return t.scale.set(1,1.3,1),n.add(t),t}function Do(n){let t=K(n.g,zl,1,-1,0);return t.root.visible=!1,t}var lc=n=>n<566?4+(n-560)*2.6:n<572?20.2+(n-566)*(1.95/6):n<574?22.15+(n-572)*.3:22.75+(n-574)*.8,Sp=[Pi(560,566,n=>(t,e,i)=>{let s=lc(t);n.upd(t,s,{guiPose:ac});let r=n.cw.position.z+Hs;return W(i,[[0,le(n,2.6,13,9)],[1,le(n,2.2,11.5,5)]],le(n,0,0,r*.55-4),e/6),{bloom:.3}}),Pi(566,572,n=>(t,e,i)=>{let s=lc(t);return n.upd(t,s,{guiPose:ac,guiEmo:"determinado"}),W(i,[[0,le(n,1.5,.85,.1)],[1,le(n,1.2,.8,-.05)]],[[0,le(n,0,.7,-.5)],[1,le(n,0,.72,-.42)]],e/6,0,0),{focus:1.3,range:.6,blur:9,sat:1.15}}),Pi(572,574,(n,t)=>{let e=vy(n.g);return(i,s,r)=>{let o=lc(i);n.upd(i,o,{guiPose:(l,c)=>F(ac(l,c),{elL:4*j(572.2,572.8,i),elR:4*j(572.2,572.8,i)}),guiEmo:"determinado",guiExtra:{blink:i>572.5&&i<573?.6:void 0}}),n.gui.hands.L.scale.set(1.15,1,1.2),n.gui.hands.R.scale.set(1.15,1,1.2);let a=ur(n.gui.hands.R,0,0,0);return e.position.set(0,.78,n.gui.root.position.z-.42),e.material.opacity=.5*Math.sin(yt((i-572.3)/1.2)*Math.PI),W(r,[[0,le(n,1,.9,-.15)],[1,le(n,.9,.88,-.1)]],[[0,le(n,0,.75,-.42)],[1,le(n,0,.75,-.4)]],s/2,0,0),{focus:1,range:.5,blur:10,bloom:.6,bloomT:.6}}}),Pi(574,578.2,n=>(t,e,i)=>{let s=lc(t);n.upd(t,s,{guiPose:ac,guiEmo:"determinado"});let r=Math.max(0,s-jn);return Kn(i,[[0,le(n,-2.6,1.6,1.8)],[1,le(n,-2.9,1.7,2.1)]],[[0,le(n,0,1,-1)],[1,le(n,0,1,-1.2)]],e/4.2,.04*Math.exp(-r*5)),{bloom:.35}}),Pi(578.2,585,n=>{let t=Do(n);return(e,i,s)=>{n.upd(e,25,{guiPose:c=>F(Ap(c,25),{lean:0}),guiEmo:"neutro"});let o=e-578.2;n.ca.userData.porta.rotation.y=1.3*j(.3,1.2,o);let a=o>1.4;n.mot.root.visible=!a,t.root.visible=a;let l=n.cw.position.z;if(a){let c=yt((o-1.4)/4);t.place(V(1.05,.75,c),V(l+3.2,.55,c),0,V(0,-Math.PI/2-.3,j(.5,1,c))),t.pose(c<1?F(ae(e,{f:1.3,amp:.7}),Be(e,.8)):F(X(e,4),Be(e,.9))),L(t,null,e,"medo")}return W(s,[[0,le(n,4.2,1.9,-2.2)],[1,le(n,3.4,2.7,-1.6)]],[[0,le(n,.8,1,l+3.2)],[1,le(n,.4,.9,.4)]],i/6.8),{bloom:.3}}}),Pi(585,592.8,n=>{let t=Do(n);return t.root.visible=!0,(e,i,s)=>{n.upd(e,25,{guiPose:o=>F(X(o,2),{shL:[10,10],shR:[10,10]}),guiEmo:"preocupado"}),n.mot.root.visible=!1;let r=e-585;return t.place(.75,.6,0,-Math.PI/2-.25),t.pose(F(Pe(X(e,4),ht.ajoelhado,j(.3,1.2,r)),{headX:-18*j(1.5,2.5,r),shL:[30,10],shR:[30,10],elL:30,elR:30},Be(e,.5))),L(t,null,e,"choro",{look:[0,-.6]}),W(s,[[0,le(n,-.55,1.15,2.1)],[1,le(n,-.45,1.1,1.9)]],[[0,le(n,.4,.75,.4)],[1,le(n,.45,.78,.45)]],i/7.8),{bloom:.3}}}),Pi(592.8,596.4,n=>{let t=Do(n);return t.root.visible=!0,(e,i,s)=>(n.upd(e,25,{guiPose:r=>X(r,2),guiEmo:"preocupado"}),n.mot.root.visible=!1,t.place(.75,.6,0,-Math.PI/2-.25),t.pose(F(ht.ajoelhado,{headX:-18,shL:[40+10*Math.sin(e*3),20],elL:40,shR:[40,20],elR:40},Be(e,.4))),L(t,"mot",e,"choro",{look:[0,-.6]}),W(s,[[0,le(n,.15,1.02,1.15)],[1,le(n,.2,1,1.08)]],[[0,le(n,.75,.78,.6)],[1,le(n,.75,.78,.6)]],i/3.6),{bloom:.3})}),Pi(596.4,599.6,n=>{let t=Do(n);return t.root.visible=!0,(e,i,s)=>(n.upd(e,25,{guiPose:r=>F(X(r,2),ht.maosBolso,{headX:16}),guiEmo:"vergonha",guiExtra:{quem:"gui",look:[0,.5]}}),n.gui.root.rotation.y=Math.PI/2,n.mot.root.visible=!1,t.place(.75,.6,0,-Math.PI/2-.25),t.pose(F(ht.ajoelhado,{headX:-18})),L(t,null,e,"choro",{look:[0,-.6]}),W(s,[[0,le(n,1.6,.7,.45)],[1,le(n,1.55,.72,.42)]],[[0,le(n,0,1.05,.25)],[1,le(n,0,1.05,.25)]],i/3.2),{bloom:.3})}),Pi(599.6,605,(n,t)=>{let e=Do(n);e.root.visible=!0;let i=[[-4.8,-3.2],[-5.4,-1],[4.9,-2.4],[5.2,.8],[-4.6,1.6]].map(([s,r],o)=>{let a=K(n.g,nn(o+2),s,r,s>0?-Math.PI/2:Math.PI/2),l=Gn();return a.hands.R.add(l),l.position.set(0,-.08,.04),a});return(s,r,o)=>{let a=s-599.6;n.upd(s,25,{guiPose:u=>X(u,2),guiEmo:"neutro"}),n.mot.root.visible=!1,n.sacC.visible=!1;let l=He(a,[[.4,0],[.9,1],[1.3,0]]),c=yt((a-1.4)/3.6);n.gui.place(V(0,.5,c),V(.25,3.5,c),0,c>0?.15:Math.PI),n.gui.pose(c>0?ae(s,{f:1.7}):F(X(s,2),Pe({},ht.pegaChao,l)));let h=n.sacC;return h.visible=!0,a>.9&&Kt(h,n.gui,"L",[0,-.22,0],!1),h.rotation.set(0,0,0),L(n.gui,null,s,"neutro"),e.place(.75,.6,0,-Math.PI/2-.25+.9*j(2,3.5,a)),e.pose(F(ht.ajoelhado,{headX:-10})),L(e,null,s,"choro",{look:[.5,-.4]}),i.forEach((u,f)=>{u.pose(F(X(s,f),ht.filmar)),L(u,null,s,"surpreso"),u.faceTo(n.gui.root.position.x,n.gui.root.position.z)}),W(o,[[0,le(n,-2.6,1.6,2.6)],[1,le(n,-2.4,1.7,3.2)]],[[0,le(n,.2,.8,.6)],[1,le(n,.3,.9,2)]],r/5.4),{bloom:.3}}}),Pi(605,611.2,n=>{let t=Do(n);return t.root.visible=!0,(e,i,s)=>{let r=e>608.4&&e<610.6;return n.upd(e,25,{guiPose:o=>X(o,2)}),n.mot.root.visible=!1,n.gui.root.visible=!1,n.sacC.visible=!1,n.ca.scale.set(.58,.58*(r?.78:1),.58*(r?.62:1)),n.ca.rotation.z=r?.06:0,t.root.visible=!r,t.place(.75,.6,0,-Math.PI/2+.6),t.pose(F(ht.ajoelhado,{headX:-6})),L(t,null,e,"choro"),W(s,[[0,le(n,4.6,2.6,4.5)],[1,le(n,4,2.3,3.6)]],[[0,le(n,0,1,-1.5)],[1,le(n,0,1,-1.8)]],i/6.2),r?{sat:0,tint:"#C8C8D0",exposure:.85,vig:.7}:{bloom:.3}}}),Pi(611.2,620,(n,t)=>{let e=[[-3,4],[-2,4.8],[2.4,4.4],[1.2,5.6],[3.6,5.2],[-.6,6]].map(([s,r],o)=>{let a=K(n.g,nn(o),s,r,Math.PI),l=Gn();return a.hands.R.add(l),l.position.set(0,-.08,.04),a}),i=Ie(.33,"#959BA3",0,0,0,{seg:18});return i.scale.set(1.05,1,1.08),n.gui.headG.add(i),i.position.set(0,.27,-.04),(s,r,o)=>{let a=s-611.2;return n.upd(s,25,{}),n.mot.root.visible=!1,n.sacC.visible=!0,n.gui.place(.6,9-a*.95,0,Math.PI),n.gui.pose(ae(s,{f:1.5,curvado:!0})),Kt(n.sacC,n.gui,"L",[0,-.22,0],!1),n.sacC.rotation.set(0,0,0),L(n.gui,null,s,"neutro"),e.forEach((l,c)=>{l.place(l.root.position.x,l.root.position.z-.015,0,Math.PI),l.pose(F(X(s,c),ht.filmar)),L(l,null,s,"surpreso")}),W(o,[[0,le(n,.3,1.6,12.5)],[1,le(n,.2,1.9,13.5)]],[[0,le(n,.5,1,4)],[1,le(n,.5,1.6,-4)]],r/8.8),{bloom:.35,tint:"#FFE6CC"}}},{limpa:!1})],mu=[4.5,-5];function _a(n){let t=bo(n,{incl:0,hora:"dia",tipo:"lojas",faixa:!1,z0:-60,z1:40,seed:52,carros:[[1,-14,"#3E7CC8"],[-1,-8,"#F4F1EA"],[1,12,"#E2443A"]]}),e=t.postes.find(o=>Math.abs(o.position.x-mu[0])<.1&&Math.abs(o.position.z-mu[1])<1)||t.postes[0];t.g.children.forEach(o=>{o.isGroup&&o.children.length===6&&Math.abs(o.position.y-.16)<.01&&Math.abs(o.position.x-mu[0])<1.2&&o.position.z>-11&&o.position.z<0&&(o.visible=!1)});let i=new at(new In(.22,16),kt("#3A3630"));i.rotation.x=-Math.PI/2,i.scale.set(1.3,1,1),i.position.set(5,.162,-3.9),t.g.add(i);let s=K(t.g,We,5.3,8,Math.PI),r=[[6,-6,0],[5.6,-9.5,0],[5.2,-45,0],[5.85,1.5,Math.PI],[5.7,32,Math.PI]].map(([o,a,l],c)=>({k:K(t.g,nn(c+1),o,a,l),x:o,z:a,r:l}));return{L:t,pt:e,gui:s,gente:r}}function Ma(n,t){let{pt:e,gui:i,gente:s}=n,r=t<630.6?8-(t-620)*1.15:-4.2-.32*j(630.6,631.2,t),o=s.reduce((h,u)=>{let f=u.z+(u.r?1:-1)*(t-620)*-1,d=Math.abs(f-r);return h+(d<2?(1-d/2)*.55:0)},0),a=s.reduce((h,u)=>{let f=u.z+(u.r?1:-1)*(t-620)*-1,d=Math.abs(f-r);return h+(d<2.2?Math.sin(Math.PI/2*Math.min(1,(2.2-d)/1.2))*Math.sign(5.3-u.x):0)},0),l=t>630.6;i.place(5.3+(t<630.6?a*.62:-.62*j(630.6,631.2,t)),r,0,l?Math.PI-.5*j(630.6,631,t):Math.PI);let c=ae(t,{f:1.2,amp:.55,maos:"bolso"});o>.1&&!l&&(c=F(c,{shL:[20,30],shR:[20,30],elL:40,elR:40,lean:-4,twist:12*o})),l&&(c=Un(t,[[630.6,c],[630.9,F(X(t,2),{lean:25,shL:[70,40],elL:5,knR:40,hipR:[30,4],bob:-.08})],[631.6,F(X(t,2),{lean:12,shL:[60,50],elL:10,bob:-.02})],[633.6,F(X(t,2),{lean:12,shL:[60,50],elL:10})],[634.4,F(X(t,2),ht.maosBolso)]])),i.pose(c),L(i,null,t,l?t>631.4?"medo":"surpreso":"preocupado",{look:l?[-.6,-.2]:[Math.sin(t)*.4,.2]}),e.entortar(j(630.95,632.2,t)*.9),s.forEach((h,u)=>{let f=h.z+(h.r?1:-1)*(t-620)*-1;h.k.place(h.x,f,.16,h.r),h.k.pose(ae(t+u,{f:1.7})),L(h.k,null,t,"neutro")})}var cc=n=>{let t=mr();return t.scale.setScalar(us),n.add(t),t},Tp=[Z(620,627,{limpa:!1,bg:"#CFE4EE",fov:40},n=>{let t=_a(n);return(e,i,s)=>{Ma(t,e);let r=t.gui.root.position.z;return W(s,[[0,[4.4,1.45,r-3.2]],[1,[4.4,1.4,r-3]]],[5.2,1,r],i/7),{tint:"#FFFAF0"}}}),Z(627,630.4,{bg:"#CFE4EE",fov:46},n=>{let t=_a(n);return(e,i,s)=>{Ma(t,e);let r=t.gui.root.position.z;return W(s,[[0,[1.5,3.2,r-6]],[1,[1.8,3,r-5.4]]],[5.2,1,r],i/3.4),{sat:.35,tint:"#F4ECD8",exposure:1.05}}}),Z(630.4,636,{bg:"#CFE4EE",fov:40},n=>{let t=_a(n);return(e,i,s)=>(Ma(t,e),Kn(s,[[0,[5.9,1.35,-7.4]],[1,[5.85,1.6,-7.6]]],[[0,[4.7,1,-4.5]],[1,[4.6,1.7,-4.8]]],i/5.6,e>631&&e<632.3?.01:0),{tint:"#FFFAF0"})}),Z(636,642,{bg:"#CFE4EE",fov:38},n=>{let t=_a(n);return(e,i,s)=>(Ma(t,e),W(s,[[0,[5.8,1.5,-7.6]],[1,[5.75,1.45,-7.3]]],[[0,[4.65,1.5,-4.7]],[1,[4.75,1.25,-4.4]]],i/6),{tint:"#FFFAF0"})}),Z(642,650,{bg:"#CFE4EE",fov:40},n=>{let t=_a(n);return(e,i,s)=>{Ma(t,640);let r=e-642,o=t.gui,a=yt((r-2.6)/5);return o.place(4.68+.4*a,-4.52-a*6,0,r<2.6?Math.PI+Math.sin(r*2.4)*.9:Math.PI),o.pose(a>0?ae(e,{f:2,maos:"bolso",curvado:!0}):F(X(e,2),ht.maosBolso,{headY:Math.sin(r*2.4)*40})),L(o,null,e,"preocupado"),t.pt.entortar(.9),W(s,[[0,[5.75,1.45,-7.3]],[1,[5.9,1.5,-12.8]]],[o.root.position.x,1,o.root.position.z],i/8,0,.3),{tint:"#FFFAF0"}}}),Z(650,655,{bg:"#C8D8E0",fov:36},n=>{let t=mn(n,{luva:We,hora:"tarde"});t.band.visible=!0;let e=cc(n);return(i,s,r)=>{gn(t,489,{});let o=i>652.6;return t.gui.pose({bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,lean:6,shR:[60,0],elR:80,shL:[o?60:30,0],elL:o?80:50,headX:12}),e.visible=o,Kt(e,t.gui,"L",[0,-.02,.06],!1),L(t.gui,null,i,"determinado",{look:[0,.6]}),t.ci.pose({bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,...ht.bracoCruzado}),L(t.ci,null,i,"feliz"),W(r,[[0,[.42,1.3,-.65]],[1,[.4,1.25,-.55]]],[[0,[.15,.95,.95]],[1,[.15,.95,.95]]],s/5),{tint:"#FFF6E8"}}}),Z(655,660,{bg:"#C8D8E0",fov:40,perto:!0},n=>{let t=mn(n,{luva:We,hora:"tarde"});t.ci.root.visible=!1,t.mao.visible=!1;let e=cc(n);return(i,s,r)=>{gn(t,489,{semOvo:!0}),t.gui.pose({bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,lean:6,shR:[80,10],elR:66,shL:[80,10],elL:66,headX:14});let o=(Math.sin(i*2.2)+1)/2;t.gui.root.updateMatrixWorld(!0);let a=t.gui.hands.R.localToWorld(new P(0,-.02,.06)),l=t.gui.hands.L.localToWorld(new P(0,-.02,.06));return e.position.copy(a).lerp(l,o),e.position.y+=Math.sin(o*Math.PI)*.3,e.rotation.z=o*6,L(t.gui,null,i,"feliz",{look:[(o-.5)*1.2,.6]}),t.ci.pose({bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,...ht.bracoCruzado}),W(r,[[0,[.8,1.6,-.45]],[1,[.74,1.56,-.38]]],[[0,[.15,1,.7]],[1,[.15,1.02,.72]]],s/5),{tint:"#FFF6E8"}}}),Z(660,665,{bg:"#C8D8E0",fov:30,perto:!0},n=>{let t=mn(n,{luva:We,hora:"tarde"});t.ci.root.visible=!1;let e=[0,1,2,3,4].map(()=>cc(n));return(i,s,r)=>(gn(t,489,{semOvo:!0}),t.gui.pose({bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,lean:4,shR:[75,0],elR:90,headX:8}),t.gui.root.updateMatrixWorld(!0),e.forEach((o,a)=>{let l=t.gui.hands.R.localToWorld(new P((a-2)*.028,.06+Math.sin(i*3+a)*.002,.02+Math.abs(a-2)*.01));o.position.copy(l),o.rotation.z=Math.sin(i*2+a)*.05}),L(t.gui,null,i,"determinado",{look:[0,-.2]}),W(r,[[0,[1.25,1.55,-.5]],[1,[1.18,1.5,-.42]]],[[0,[.2,.98,.75]],[1,[.2,1,.75]]],s/5),{tint:"#FFF6E8"})}),Z(665,670,{bg:"#C8D8E0",fov:34},n=>{let t=mn(n,{luva:We,hora:"tarde"}),e=[0,1,2,3,4].map(()=>cc(n));return(i,s,r)=>{gn(t,489,{semOvo:!0}),t.gui.pose({bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,lean:4,shR:[75,0],elR:90}),t.gui.root.updateMatrixWorld(!0),e.forEach((a,l)=>{a.position.copy(t.gui.hands.R.localToWorld(new P((l-2)*.028,.06,.02+Math.abs(l-2)*.01)))});let o=Math.abs(Math.sin(i*6));return t.ci.pose({bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,lean:4,shL:[62,-8+10*o,-30],elL:70,shR:[62,-8+10*o,-30],elR:70}),L(t.ci,null,i,"feliz",{smile:.9}),W(r,[[0,[.45,1.3,1.6]],[1,[.42,1.28,1.5]]],[[0,[.15,.92,-.15]],[1,[.15,.92,-.15]]],s/5),{tint:"#FFF6E8"}}}),Z(670,674.5,{bg:"#F2E6C8",fov:36},n=>{$h(n).relogio.hora(2,40);let e=K(n,We,1.2,.2,Math.PI);e.sombra.visible=!1,e.place(1.2,.1,.02,Math.PI);let i=[[-1.2,-1],[0,-1],[-2.4,.3],[0,.3],[2.4,-1]].map(([s,r],o)=>{let a=K(n,nn(o,{camisa:"#F6F4EE",calca:"#2F4E86"}),s,r+.4,Math.PI);return a.place(s,r+.4,.02,Math.PI),a});return(s,r,o)=>(e.pose({bob:-.2,hipL:[88,4],hipR:[88,4],knL:88,knR:88,lean:6,shL:[40,6],elL:70,shR:[40,6],elR:70,headX:-14,headY:20}),L(e,null,s,"tedio",{look:[.4,-.6]}),i.forEach((a,l)=>{a.pose({bob:-.2,hipL:[88,4],hipR:[88,4],knL:88,knR:88,lean:10,shL:[40,6],elL:70,shR:[40+10*Math.sin(s*2+l),6],elR:70,headX:12}),L(a,null,s,"tedio")}),W(o,[[0,[3.2,1.4,.8]],[.45,[3.1,1.4,.7]],[1,[1.6,1.9,.6]]],[[0,[1.2,1.05,.1]],[.45,[1.2,1.1,.1]],[1,[2.2,2.45,-3.7]]],r/4.5),{tint:"#FFF8EC"})}),Z(674.5,680,{bg:"#F2E6C8",fov:30},n=>{let t=$h(n),e=K(n,We,1.2,.1,Math.PI);e.place(1.2,.36,.02,Math.PI);let i=t.carteiras.reduce((s,r)=>Math.hypot(r.position.x-1.2,r.position.z+.1)<Math.hypot(s.position.x-1.2,s.position.z+.1)?r:s);return(s,r,o)=>{let a=Math.max(0,Math.sin(s*9));e.pose({bob:-.2,hipL:[88,4],hipR:[88,4],knL:88,knR:88,lean:0,shL:[62,6],elL:62,shR:[66,6],elR:62+a*8,headX:4});let l=j(676.5,677.2,s);return i.userData.tampo.position.y=.72-.03*l,i.userData.tampo.rotation.z=.05*l,L(e,null,s,l>.5?"surpreso":"tedio",{look:[0,.6]}),W(o,[[0,[1.85,1.45,-.45]],[1,[1.8,1.4,-.4]]],[[0,[1.15,.82,-.05]],[1,[1.15,.8,-.05]]],r/5.5),{tint:"#FFF8EC",focus:.7,range:.4,blur:6}}}),Z(680,684,{bg:"#2A2420",fov:38},n=>{let t=ce(n),e=K(n,po,1.6,7,Math.PI),i=li(e,"R",.5),s=rn();return s.position.set(.85,0,4.25),n.add(s),(r,o,a)=>{let l=r-680,c=yt(l/1.3),h=yt((l-2.3)/1.4);return e.place(V(1.6,1,c)+.5*h,V(7,4.75,c)+2.3*h,0,h>0?.15:Math.PI+.25),e.pose(l<1.3||h>0?ae(r,{f:1.9}):F(X(r,1),{lean:40,bob:-.1,knL:40,knR:40,hipL:[35,6],hipR:[35,6],shR:[55,8],elR:5})),i.visible=l<1.85,s.visible=l>=1.85,i.prumo(r),L(e,null,r,"neutro"),t.portaRua.rotation.y=-1.2*(j(0,.4,l)*(1-j(.9,1.3,l))+j(2.8,3.1,l)),W(a,[[0,[-.85,1,5.5]],[1,[-.7,.9,5.2]]],[[0,[.9,.3,4.3]],[1,[.85,.3,4.25]]],o/4),{tint:"#FFF4E4"}}}),Z(684,690.2,{bg:"#C8D8E0",fov:36},n=>{let t=je(n,{hora:"tarde"}),e=Pf({vivos:[]},.14);e.position.set(-1,2,-1.58),n.add(e);let i=K(n,Ke,-.2,-.2,Math.PI);return(s,r,o)=>{let a=s-684,l=He(a,[[0,0],[.6,1],[1.8,1],[2.4,2],[3.6,2],[4,3]]),c=l<1?V(Math.PI,Math.PI+.5,l):l<2?V(Math.PI+.5,Math.PI-.2,l-1):V(Math.PI-.2,.3,l-2);i.place(-.2,-.2,0,c);let h=a>3.4&&a<4;return i.pose(F(X(s,3),ht.maosCintura,{headX:l<2?-18*Math.min(1,l):0,bob:h?-.02:0},a>4?{shR:[30+20*Math.max(0,Math.sin(s*3)),20],elR:70}:{})),L(i,a>4?"cida":null,s,a>3.4?"bravo":"preocupado",{mouth:h?{open:.4,round:1}:void 0,look:l<1?[0,-.6]:[0,0]}),W(o,[[0,[1.45,1.6,1.45]],[.55,[1.35,1.5,1.2]],[1,[1.05,1.3,.6]]],[[0,[-.55,1.45,-1]],[.55,[-.4,1.2,-.6]],[1,[-.2,1,-.2]]],r/6.2),{tint:"#FFF0DC"}}}),Z(690.2,695,{bg:"#C8D8E0",fov:38},n=>{let t=je(n,{hora:"tarde"}),e=K(n,Ke,-.2,-.2,.3),i=K(n,{...Ke,estampa:void 0,camisa:"#7FA6C9"},-.2,-.2,.3),s=ft(.3,.4,.02,"#F7F1E3",0,0,0);return n.add(s),(r,o,a)=>{let l=r-690.2,c=l>1.2;e.root.visible=!c,i.root.visible=c;let h=c?i:e,u=yt((l-2.8)/1.8);return h.place(V(-.2,-1.75,u),V(-.2,.9,u),0,u>0?-Math.PI/2-.5:.3),h.pose(u>0?ae(r,{f:2.3}):F(X(r,3),l<1.2?{shL:[60,30],elL:120,shR:[60,30],elR:120,headX:10}:l<2.6?{shL:[160,30],elL:120,shR:[160,30],elR:120,headX:8}:{})),L(h,null,r,"determinado"),s.visible=c,s.position.set(.6,.8,.5),s.rotation.set(-1.4,0,.3),W(a,[[0,[1.1,1.3,1.2]],[1,[1,1.25,1.05]]],[[0,[-.3,.95,-.1]],[1,[-1,.95,.5]]],o/4.8),{tint:"#FFF0DC"}}})];var Fi={tint:"#FFF4E4"},ba={tint:"#DCE4FF",sat:.72,vig:.6},vn={...Ke,camisa:"#7FA6C9",estampa:void 0},It=2*nt,ds=[ut,It+.875,Mt-5*Ey()];function Ey(){return .27}var yu=708.6,yy=729.6,_y=n=>yt((n-yu)/(yy-yu));function hc(n,t){let e=_y(t),i=e<.1?e*2.5*e*4:e,s=ut,r=V(It+.875,It+.55,Ue(e))+Math.sin(Math.min(1,e*3)*Math.PI)*.12,o=V(ds[2]+.05,Mt-.25,Ue(e));n.root.position.set(s,r,o),n.root.rotation.set(V(0,1.15,Ue(Math.min(1,e*2.2))),Math.PI,0),n.pose({shL:[70+30*e,60],shR:[70+30*e,60],elL:20,elR:20,hipL:[50*e+20,10],hipR:[30*e,10],knL:40,knR:20,headX:-20})}var My=new Rn().setFromRotationMatrix(new Ce().makeBasis(new P(0,.34,.94),new P(1,0,0),new P(0,.94,-.34)));function Rp(n,t){n.root.updateMatrixWorld(!0);let e=n.root.localToWorld(new P(0,.6,.3)),i=n.root.quaternion.clone().multiply(My),s=new P(0,1,0).applyQuaternion(i);t.root.quaternion.copy(i),t.root.position.copy(e).addScaledVector(s,-.5),t.sombra&&(t.sombra.visible=!1)}function gu(n){let t=[];for(let e=0;e<2;e++){for(let i=1;i<8;i+=2)t.push([ut,e*nt+(i+1)*.175,Mt-(i+.5)*.27]);for(let i=1;i<8;i+=2)t.push([Gt,e*nt+1.4+(i+1)*.175,ye+(i+.5)*.27])}for(let e=1;e<4;e+=2)t.push([ut,It+(e+1)*.175,Mt-(e+.5)*.27]);return{pts:t,f:hp(n,t,{tam:.5,seed:8})}}var by=()=>[[1.4,0,5],[ut,0,2.3],...Bs(0,2,{portaria:!1}),[ut,It,Mt+.05],[ut,It+.175,Mt-.2]],xy=714.2;function vu(n,t,e={}){return hn(n,by(),t,xy,1.5,{f:1.4,amp:1.5,pose:(s,r,o)=>r.fim?null:F(r.sobe?F(o,{lean:18}):Ns(s,1.6,1.2),{shL:[-30*Math.sin(s*9),10],shR:[30*Math.sin(s*9),10]})})}function wp(n){n.g.traverse(t=>{t.isMesh&&Math.abs(t.position.x-(ut+.55))<.01&&t.position.y>It&&t.position.y<It+2.5&&(t.visible=!1)})}var Cp=[Z(695,700,{bg:"#2A2420",fov:50},n=>{let t=ce(n),e=K(n,vn,ut,2.3,Math.PI),i=rn();e.root.add(i),i.position.set(.24/.84,.22/.84,.02),i.rotation.z=-.35,i.scale.setScalar(.65/.84);let s=[[ut,0,2.6],...Bs(0,1,{portaria:!1})];return(r,o,a)=>(hn(e,s,r,694.6,.7,{f:1.8,pose:(l,c,h)=>F(h,{shL:[-6,30],elL:100,tilt:-5})}),L(e,null,r,"determinado"),W(a,[[0,[1.05,1.15,.3]],[1,[1.05,1.3,.1]]],[[0,[-.62,1.05,1.5]],[1,[-.62,1.65,.5]]],o/5),Fi)}),Z(700,705,{bg:"#2A2420",fov:50},n=>{let t=ce(n),e=K(n,vn,Gt,ye,0,nt+1.4),i=rn();e.root.add(i),i.position.set(.24/.84,.22/.84,.02),i.rotation.z=-.35,i.scale.setScalar(.65/.84);let s=[[Gt,nt+1.4,ye+.2],[Gt,2*nt,Mt+.05],[Gt-.1,2*nt,Mt+.6]];return(r,o,a)=>{let l=r-700,c=l>2.2&&l<3.6,h=hn(e,s,r,700,c?0:.5,{v:c?0:l<2.2?.5:.45,f:1.2,pose:(u,f,d)=>F(c?X(u,3):d,{shL:[-6,30],elL:100,tilt:-5},{lean:10},c?{shR:[30,30],elR:60}:{})});return L(e,null,r,c?"sono":"determinado",{mouth:{open:.25+.1*Math.sin(r*8)}}),W(a,[[0,[ut+.2,2*nt+1.5,Mt+.9]],[1,[ut+.25,2*nt+1.45,Mt+.8]]],[[0,[Gt,nt+1.9,-.2]],[1,[Gt-.1,2*nt+.9,1.1]]],o/5),Fi}}),Z(705,708.6,{bg:"#2A2420",fov:36},n=>{let t=ce(n),e=K(n,vn,ut,Mt,Math.PI,It),i=rn();e.root.add(i),i.position.set(.24/.84,.22/.84,.02),i.rotation.z=-.35,i.scale.setScalar(.65/.84);let s=new at(new In(.2,18),new pe({color:"#BFE0F4",transparent:!0,opacity:.6,emissive:"#FFFFFF",emissiveIntensity:.25}));s.rotation.x=-Math.PI/2,s.scale.set(1.6,.6,1),s.position.set(ut-.1,It+.876,ds[2]),n.add(s);let r=[[ut,It,Mt+.2],[ut,It+1.4,ye-.05]];return(o,a,l)=>(hn(e,r,o,705.2,.36,{f:1.1,pose:(c,h,u)=>F(u,{shL:[-6,30],elL:100,tilt:-5})}),L(e,null,o,"sono"),W(l,[[0,[ut+.12,It+2.2,ds[2]-.75]],[1,[ut+.12,It+2.2,ds[2]-.7]]],[[0,[ut,It+.85,ds[2]+.9]],[1,[ut,It+1.2,ds[2]+.35]]],a/3.6,0,.2),{...Fi})}),Z(708.6,711,{bg:"#2A2420",fov:46,perto:!0},n=>{let t=ce(n),e=K(n,vn,ut,Mt,Math.PI,It),i=rn();return n.add(i),(s,r,o)=>{hc(e,s),L(e,null,s,"medo",{mouth:{open:.5}});let a=(s-yu)*1.6,l=Math.min(5,Math.floor(a)),c=a-Math.floor(a);return i.position.set(ut+.2,It+.875-l*.175+Math.sin(c*Math.PI)*.25+.05,ds[2]+.05+l*.27+c*.27),i.rotation.set(a*1.3,0,a*.7),W(o,[[0,[1.05,It+1.95,1.4]],[1,[1.05,It+1.9,1.55]]],[[0,[ut,It+1.35,ds[2]]],[1,[ut,It+1.05,ds[2]+.4]]],r/2.4),ba}}),Z(711,713,{bg:"#2A2420",fov:38},n=>{let t=ce(n),e=K(n,We,1.6,6.6,Math.PI),i=fr("#2E6FB8");return e.root.add(i),i.position.set(0,.72,-.22),(s,r,o)=>{let a=s-711,l=yt(a/.8);e.place(1.6,V(6.6,5.9,l),0,Math.PI);let c=j(1,1.4,a);return e.pose(l<1?ae(s,{f:1.7,maos:"bolso"}):F(X(s,2),{headX:-24*c,headY:15*c})),L(e,null,s,c>.5?"surpreso":"neutro",{look:[0,-.6*c]}),t.portaRua.rotation.y=-1.2*(1-j(.6,1.2,a)),W(o,[[0,[1,1.25,4]],[1,[1.1,1.2,4.2]]],[[0,[1.6,1.05,6.2]],[1,[1.6,1.15,5.9]]],r/2),Fi}}),Z(713,714.2,{bg:"#2A2420",fov:32},n=>{let t=ce(n),e=K(n,We,1.6,5.9,Math.PI),i=fr("#2E6FB8");return e.root.add(i),i.position.set(0,.72,-.22),(s,r,o)=>(e.pose(F(X(s,2),{headX:-18,lean:-6,shL:[20,20],shR:[20,20]})),L(e,"gui",s,"medo",{look:[0,-.4]}),W(o,[[0,[1.45,1.05,4.4]],[1,[1.5,1.02,4.5]]],[[0,[1.6,1.15,5.9]],[1,[1.6,1.15,5.9]]],r/1.2),Fi)}),Z(714.2,718.4,{bg:"#2A2420",fov:50,perto:!0},n=>{let t=ce(n),e=K(n,We,1.4,5,Math.PI),i=gu(n);return(s,r,o)=>{let a=vu(e,s);return i.f(yt(a.prog*1.25)),L(e,null,s,"determinado"),W(o,[[0,[1.05,1,.1]],[1,[1.05,1.4,-.2]]],[[0,[-.3,.9,2.6]],[1,[-.62,1.4,.4]]],r/4.2),ba}}),Z(718.4,722,{bg:"#2A2420",fov:44,perto:!0},n=>{let t=ce(n),e=K(n,vn,ut,Mt,Math.PI,It),i=rn();return i.position.set(ut+.2,It+.05,Mt+.5),n.add(i),(s,r,o)=>{hc(e,s),L(e,null,s,"medo",{blink:.6}),e.root.updateMatrixWorld(!0);let a=e.root.localToWorld(new P(0,.6,0));return W(o,[[0,[.95,It+1.45,.75]],[1,[.95,It+1.45,.95]]],[a.x,a.y,a.z],r/3.6,0,.2),ba}}),Z(722,726,{bg:"#2A2420",fov:56,perto:!0},n=>{let t=ce(n),e=K(n,We,1.4,5,Math.PI),i=gu(n),s=K(n,vn,ut,Mt,Math.PI,It);return(r,o,a)=>{let l=vu(e,r);i.f(yt(l.prog*1.25)),L(e,null,r,"determinado"),hc(s,r),L(s,null,r,"medo",{blink:.7}),s.root.updateMatrixWorld(!0);let c=s.root.localToWorld(new P(0,.75,0));return W(a,[[0,[.95,It+2.1,2.85]],[1,[.9,It+2,2.75]]],[[0,[c.x+.3,c.y-.1,c.z-.3]],[1,[c.x+.25,c.y-.1,c.z-.25]]],o/4),ba}}),Z(726,730.6,{bg:"#2A2420",fov:46,perto:!0,limpa:!1},n=>{let t=ce(n),e=K(n,We,1.4,5,Math.PI);gu(n).f(1);let s=K(n,vn,ut,Mt,Math.PI,It),r=new at(new re(.22,24,16),new Me({color:"#FFF6E0",transparent:!0,opacity:0,depthWrite:!1,blending:Oi}));return r.scale.set(1,1.3,1),n.add(r),(o,a,l)=>{let c=vu(e,o),h=j(727,728.6,o);return c.fim&&(e.place(ut,Mt-.15,It+.175,Math.PI),e.pose(F(Pe(X(o,2),ht.maosFrente,h),{shL:[10*h,10*h],shR:[10*h,10*h],elL:30*h,elR:30*h}))),L(e,null,o,"determinado"),hc(s,o),L(s,null,o,"medo",{blink:.8}),r.position.set(ut,It+1,Mt-.55),r.material.opacity=.45*Math.sin(yt((o-728.4)/1.1)*Math.PI),W(l,[[0,[.9,It+1.35,.3]],[1,[.9,It+1.35,.45]]],[[0,[ut,It+.85,1.05]],[1,[ut,It+.95,1.2]]],a/4.6,0,.2),{...ba,bloom:.4,bloomT:.88}}}),Z(730.6,736,{bg:"#2A2420",fov:36,perto:!0},n=>{let t=ce(n),e=K(n,We,ut,Mt-.15,Math.PI,It+.175),i=K(n,vn,ut,Mt,Math.PI,It);return i.fixo=!0,e.fixo=!0,(s,r,o)=>{e.pose(F(X(s,2,.3),ht.abraco,{lean:4,elL:70,elR:70},Be(s,.25))),L(e,null,s,"preocupado",{look:[0,.5]}),Rp(e,i),i.pose({shL:[30,20],shR:[50,10],elL:50,elR:70,hipL:[80,4],hipR:[80,4],knL:85,knR:85,headX:8});let a=j(732.5,734.5,s);return L(i,null,s,a>.6?"surpreso":"neutro",{blink:1-a,lento:.3}),W(o,[[0,[ut+.42,It+2.25,-.05]],[1,[ut+.38,It+2.15,.05]]],[[0,[ut,It+.85,1.2]],[1,[ut,It+.85,1.15]]],r/5.4),{tint:"#F0F0FF",sat:.9}}}),Z(736,738,{bg:"#2A2420",fov:32,perto:!0},n=>{let t=ce(n),e=K(n,We,ut,Mt-.15,Math.PI,It+.175),i=K(n,vn,ut,Mt,Math.PI,It);return i.fixo=!0,e.fixo=!0,(s,r,o)=>(e.pose(F(X(s,2,.3),ht.abraco,{lean:4,elL:70,elR:70,headX:14},Be(s,.35))),L(e,"gui",s,"triste",{lagrima:!0,look:[0,.6]}),Rp(e,i),i.pose({shL:[30,20],shR:[50,10],elL:50,elR:70,hipL:[80,4],hipR:[80,4],knL:85,knR:85,headX:8}),L(i,null,s,"surpreso"),W(o,[[0,[-.35,It+1.7,-.75]],[1,[-.38,It+1.68,-.7]]],[[0,[ut,It+1.4,.4]],[1,[ut,It+1.4,.4]]],r/2),{tint:"#F0F0FF",sat:.95})}),Z(738,746,{bg:"#2A2420",fov:50,perto:!0,limpa:!1},n=>{let t=ce(n);wp(t);let e=K(n,vn,ut,Mt-.5,0,It),i=K(n,We,ut,Mt+.1,Math.PI,It);return(s,r,o)=>{let a=s-738;Qn(e,ut,Mt-.45,0,It+.35+.1),e.root.position.y=It+.175+.175-.28*.84+.02;let l=j(1.8,2.8,a),c=j(3.6,4.6,a);i.place(ut,Mt+.36,It,Math.PI),i.pose(F(ht.ajoelhado,Pe(Pe({},F(ht.bracosAbertos,{shL:[40,40],shR:[40,40]}),l),ht.abraco,c),Be(s,.3*l*(1-c)),{lean:3*c})),e.pose(F({bob:-.17,hipL:[80,4],hipR:[80,4],knL:80,knR:80},Pe({shL:[20,10],shR:[20,10],elL:30,elR:30},ht.abraco,j(3.3,4.2,a)),{lean:2*c})),L(e,null,s,a>3?"feliz":"neutro",{lagrima:a>3}),L(i,null,s,c>.5?"triste":"medo",{lagrima:!0});let h=a/8*.9;return W(o,[[0,[.8,It+1.3,1.15]],[1,[.75,It+1.25,1.3]]],[[0,[ut,It+.8,1.3]],[1,[ut,It+.82,1.32]]],r/8,0,.3),{tint:"#FFF0E4"}}}),Z(746,754,{bg:"#2A2420",fov:50,perto:!0,limpa:!1},n=>{let t=ce(n);wp(t);let e=K(n,vn,ut,Mt-.45,0,It),i=K(n,We,ut,Mt+.36,Math.PI,It),s=rn();return s.position.set(-.3,It-nt+nt,Mt+.9),s.rotation.z=1.4,s.position.y=It+.17,n.add(s),(r,o,a)=>{e.root.position.set(ut,It+.175+.175-.28*.84+.02,Mt-.45),e.root.rotation.y=0,e.sombra.visible=!1,i.pose(F(ht.ajoelhado,ht.abraco,{lean:3},An(r,2,.3))),e.pose(F({bob:-.17,hipL:[80,4],hipR:[80,4],knL:80,knR:80},ht.abraco,{lean:2},ki(r,.4))),L(e,"cida",r,"feliz",{lagrima:!0}),L(i,null,r,"feliz",{lagrima:!0,blink:1});let l=1.6+(r-746)/8*.8;return W(a,[[0,[.75,It+1.25,1.5]],[1,[.65,It+1.2,1.35]]],[[0,[ut,It+.82,1.3]],[1,[ut,It+.84,1.3]]],o/8,0,.3),{tint:"#FFF0E4",bloom:.35}}}),Z(754,762,{bg:"#3A3028",fov:38},n=>{let t=pa(n);t.manta.visible=!1;let e=K(n,We,-.28,-1.05,0);Qn(e,-.28,-1.05,0,.45);let i=K(n,vn,-1.04,-1.05,0);return Qn(i,-1.04,-1.05,0,.45),(s,r,o)=>(e.pose({bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shL:[30,30],elL:40,shR:[20,8],elR:50,lean:-6}),i.pose({bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shL:[20,8],elL:50,shR:[30,10],elR:60,tilt:-8,headZ:-10,lean:-6}),L(e,null,s,"feliz",{look:[0,0]}),L(i,null,s,"feliz",{blink:1}),W(o,[[0,[.9,1.5,1.6]],[1,[.7,1.3,1.3]]],[[0,[-.65,.9,-1]],[1,[-.65,.9,-1]]],r/8),{bloom:.3,tint:"#FFE8D0"})}),Z(762,770,{bg:"#3A3028",fov:32},n=>{let t=pa(n);t.manta.visible=!1;let e=K(n,We,-.28,-1.05,0);Qn(e,-.28,-1.05,0,.45);let i=K(n,vn,-1.04,-1.05,0);return Qn(i,-1.04,-1.05,0,.45),(s,r,o)=>(e.pose({bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shL:[30,30],elL:40,shR:[20,8],elR:50,lean:-6}),i.pose({bob:-.17,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shL:[20,8],elL:50,shR:[30,10],elR:60,tilt:-8,headZ:-10,lean:-6}),L(e,null,s,"feliz",{smile:.5}),L(i,null,s,"feliz",{blink:1}),W(o,[[0,[-.2,1.15,.2]],[1,[-.3,1.12,.1]]],[[0,[-.6,.95,-1.05]],[1,[-.62,.95,-1.05]]],r/8),{bloom:.3,tint:"#FFE8D0"})}),Z(770,774.4,{bg:"#2A2420",fov:38},n=>{let t=ce(n),e=K(n,po,1.6,7,Math.PI),i=li(e,"R",.5),s=rn();s.position.set(.85,0,4.25),n.add(s);let r=K(n,We,-.1,3.6,.35),o=K(n,vn,-.55,3.7,.6),a=Hi();return a.position.set(0,-.2,0),o.hands.R.add(a),(l,c,h)=>{let u=l-770,f=yt(u/1.3),d=yt((u-2.4)/1.4);return e.place(V(1.6,1,f)+.5*d,V(7,4.75,f)+2.3*d,0,d>0?.15:Math.PI+.25),e.pose(u<1.3||d>0?ae(l,{f:1.9}):F(X(l,1),{lean:40,bob:-.1,knL:40,knR:40,hipL:[35,6],hipR:[35,6],shR:[55,8],elR:5})),i.visible=u<1.85,s.visible=u>=1.85,i.prumo(l),L(e,null,l,"feliz"),r.pose(F(X(l,2),ht.maosBolso)),L(r,null,l,"feliz"),o.pose(X(l,3)),L(o,null,l,"feliz"),t.portaRua.rotation.y=-1.2*(j(0,.4,u)*(1-j(.9,1.3,u))+j(2.9,3.2,u)),W(h,[[0,[-.85,1.55,6.7]],[1,[-.7,1.5,6.4]]],[[0,[.5,.85,4.1]],[1,[.4,.8,4]]],c/4.4),Fi}}),Z(774.4,779.6,{bg:"#2A2420",fov:36,limpa:!1},n=>{let t=ce(n),e=K(n,We,-.1,3.6,.35),i=K(n,vn,-.55,3.7,.6),s=Hi();s.position.set(0,-.2,0),i.hands.R.add(s);let r=rn();r.position.set(.85,0,4.25),n.add(r);let o=li(e,"R",.6);return(a,l,c)=>{let h=a-774.4,u=yt(h/1.2);e.place(V(-.1,.55,u),V(3.6,3.95,u),0,.35);let f=He(h,[[1.2,0],[1.6,1],[2,0]]),d=yt((h-2.1)/1.2);h>2.1&&e.place(V(.55,-.25,d),V(3.95,3.55,d),0,V(.35,Math.PI+.4,j(0,.5,d))),o.visible=h>1.6,r.visible=h<=1.6,o.prumo(a);let p=j(3.4,4,h);return e.pose(u<1||d>0&&d<1?ae(a,{f:1.7}):F(X(a,2),Pe({},{lean:30,knL:25,knR:25,hipL:[25,4],hipR:[25,4],shR:[50,6],elR:5},f),{shL:[25*p,-10*p],elL:15})),L(e,null,a,"feliz"),i.place(-.55,3.7,0,V(.6,Math.PI+.4,j(2.6,3.2,h))),i.pose(F(X(a,3),{shL:[25*p,-10*p],elL:15})),L(i,null,a,"feliz",{smile:.5}),W(c,[[0,[1.9,1.25,5.6]],[1,[1.7,1.2,5.4]]],[[0,[.3,.75,3.8]],[1,[-.3,.8,3.5]]],l/5.2),Fi}}),Z(779.6,791,{bg:"#2A2420",fov:50,limpa:!1},n=>{let t=ce(n),e=K(n,We,ut+.22,2.3,Math.PI),i=K(n,vn,ut-.22,2.3,Math.PI),s=li(e,"R",.6),r=Hi();r.position.set(0,-.2,0),i.hands.R.add(r);let o=a=>[[ut+a,0,2.6],...Bs(0,1,{portaria:!1}).map(([l,c,h])=>[l+(Math.abs(l-ut)<.3?a:Math.abs(l-Gt)<.3?-a:0),c,h])];return(a,l,c)=>{hn(e,o(.2),a,779.6,.32,{f:.9,pose:(f,d,p)=>F(p,{shL:[25,-12],elL:15})}),hn(i,o(-.22),a,779.6,.32,{f:.9,pose:(f,d,p)=>F(p,{shR:[25,-12],elR:15})}),s.prumo(a);let h=a>786.5&&a<789.5;L(i,null,a,"feliz",{mouth:h?{open:.3+.25*Math.abs(Math.sin(a*9))}:void 0,look:[.5,0]}),L(e,null,a,a>789.2?"rindo":"feliz",{look:[-.4,0]}),a>789.2&&e.pose(F(Ao(a,.9),ki(a,.6),{shL:[25,-12],elL:15}));let u=e.root.position.clone().add(i.root.position).multiplyScalar(.5);return W(c,[[0,[.6,2.15,2.85]],[.3,[.4,2,2.78]],[1,[.3,2.05,2.7]]],[u.x,u.y+.9,u.z],l/11.4,0,.3),Fi}}),Z(791,796.4,{bg:"#3A3028",fov:38},n=>{let t=je(n,{hora:"tarde"}),e=K(n,vn,-1.05,-.55,Math.PI),i=K(n,We,.2,.5,-Math.PI/2-.3),s=Eu(n,-1.19,.91,-1.12);return(r,o,a)=>{let l=r-791;return e.pose(Un(l,[[0,F(ht.ajoelhado,{lean:22,shL:[60,10],elL:60,shR:[55,0],elR:70+Math.sin(r*9)*25})],[2,F(ht.ajoelhado,{lean:22,shL:[60,10],elL:60,shR:[55,0],elR:70})],[2.6,F(X(r,3),{lean:18,shR:[50,4],elR:50})],[4.4,F(X(r,3),{lean:4,shR:[30,10],elR:60})]])),L(e,null,r,l>3.9?"feliz":"determinado"),s(r,j(3.8,4,l)),i.pose(F(X(r,2),ht.maosBolso)),L(i,null,r,"feliz",{look:[-.5,0]}),W(a,[[0,[.25,1.25,.55]],[1,[.05,1.15,.35]]],[[0,[-1.2,.75,-1]],[1,[-1.2,.85,-1.05]]],o/5.4),{...Fi,bloom:.35}}}),Z(796.4,803.6,{bg:"#3A3028",fov:32,limpa:!1},n=>{let t=je(n,{hora:"tarde"}),e=K(n,vn,-1.3,-.1,.6),i=K(n,We,-.75,-.6,Math.PI*.85),s=Eu(n,-1.19,.91,-1.12),r=new it;r.position.set(-1.19,.93,-1.12),n.add(r),r.add(bt(.14,.12,.04,"#2A2A30",0,.02,0,{seg:20,out:.005})),r.add(tt(.25,.02,.03,"#2A2A30",.25,.03,0));let o=Zl(.05);o.position.set(0,.042,0),r.add(o),o.visible=!1;let a=mr();a.scale.setScalar(us),n.add(a);let l=$l(3);return l.scale.setScalar(us),n.add(l),(c,h,u)=>{let f=c-796.4;s(c,1);let d=j(1,1.6,f)*(1-j(3.6,4,f)),p=f>5;return i.pose(F(X(c,2),{shR:[V(40,70,d),0],elR:V(40,90,d),headX:12,shL:[p?0:50*j(4,4.6,f),0],elL:40},f>4?{shR:[62,-10],elR:50,lean:10}:{})),L(i,null,c,f>2?"feliz":"neutro",{look:[0,.6],smile:f>2.2?.7:void 0}),a.visible=!p,Kt(a,i,"R",[0,-.02,.06],!1),o.visible=p,o.scale.setScalar(Math.min(1,(f-5)*4)),l.visible=p,l.position.set(-.95,.87,-1.2),e.pose(F(X(c,3),ht.bracoCruzado)),L(e,null,c,"feliz",{smile:.8}),W(u,[[0,[-.2,1.45,.3]],[.45,[-.35,1.6,.4]],[1,[-1,2,.55]]],[[0,[-.75,1,-.6]],[.45,[-.8,1,-.7]],[1,[-1.05,.95,-.95]]],h/7.2,0,0),{...Fi,bloom:.35}}}),Z(803.6,812,{bg:"#3A3028",fov:40},n=>{let t=je(n,{hora:"tarde"}),e=K(n,vn,-1.25,-.15,.7),i=K(n,We,-.75,-.6,Math.PI*.85),s=Eu(n,-1.19,.91,-1.12);return(r,o,a)=>(s(r,1),i.pose(F(X(r,2),{shR:[55,-6],elR:40+15*Math.sin(r*2),lean:6})),e.pose(F(X(r,3),ki(r,.4),ht.bracoCruzado)),L(i,null,r,"feliz"),L(e,null,r,"rindo"),W(a,[[0,[1.25,1.7,1.45]],[1,[1.05,1.5,1.25]]],[[0,[-.7,.9,-.6]],[1,[-.8,.9,-.6]]],o/8.4),{...Fi,bloom:.4,tint:"#FFE8C8"})}),Z(812,822,{bg:"#3A3028",fov:30},n=>{let t=je(n,{hora:"tarde"});t.cad1.visible=!1;let e=K(n,We,.15,1.2,0);return(i,s,r)=>(e.pose(F(X(i,2,.6),ht.maosBolso)),L(e,null,i,"feliz",{smile:.5}),W(r,[[0,[.15,1.15,3.6]],[1,[.15,1.12,3.3]]],[[0,[.15,1.08,1.2]],[1,[.15,1.08,1.2]]],s/10,0,.3),{tint:"#FFE8C8",blur:0})}),Z(822,840,{bg:"#3A3028",fov:34},n=>{let t=je(n,{hora:"tarde"});t.cad1.visible=!1;let e=K(n,We,.55,1.15,-.25);return(i,s,r)=>(e.pose(F(X(i,2,.6),op(i*.45,.8))),L(e,null,i,"feliz",{smile:.6}),W(r,[[0,[-.1,1.2,4]],[1,[-.05,1.18,3.8]]],[[0,[-.25,1,1.1]],[1,[-.2,1,1.1]]],s/18,0,.3),{tint:"#FFE8C8",blur:0,exposure:i>837.5?1-j(837.5,840,i):1})})];function Eu(n,t,e,i){let s=new it;s.position.set(t,e,i),n.add(s);let r=[];for(let a=0;a<12;a++){let l=new at(new si(.012,.05,6),new Me({color:a%2?"#5AA8FF":"#2E6FFF",transparent:!0,opacity:.9})),c=a/12*6.283;l.position.set(Math.cos(c)*.05,.025,Math.sin(c)*.05),s.add(l),r.push(l)}let o=new bn("#5A8CFF",0,1.5,1.6);return o.position.set(t,e+.15,i),n.add(o),(a,l)=>{s.visible=l>.01;let c=l<1?1+1.8*Math.sin(l*Math.PI):1;r.forEach((h,u)=>{h.scale.set(c,(.8+.3*Math.sin(a*20+u*1.7))*c,c)}),o.intensity=1.2*l*c}}var Pp=[...pp,...mp,...vp,...Ep,..._p,...bp,...xp,...Sp,...Tp,...Cp];window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(t=>document.fonts.load(t))).catch(()=>{});let n=new Ll(document.getElementById("film3d"));for(let t of Pp)n.add(t);window.addEventListener("hf-seek",t=>n.render(t.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
