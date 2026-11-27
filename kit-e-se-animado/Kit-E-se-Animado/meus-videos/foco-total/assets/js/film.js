var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var Ic="170";var Nf=0,Uh=1,Of=2;var Wu=1,Dc=2,Ni=3,wi=0,sn=1,We=2,Ri=0,Po=1,Bo=2,Hh=3,Nh=4,zf=5,Os=100,kf=101,Gf=102,Vf=103,Wf=104,Xf=200,qf=201,Yf=202,Zf=203,ll=204,cl=205,$f=206,Jf=207,Kf=208,Qf=209,jf=210,tp=211,ep=212,np=213,ip=214,hl=0,ul=1,dl=2,Uo=3,fl=4,pl=5,ml=6,gl=7,Xu=0,sp=1,op=2,xi=0,rp=1,ap=2,lp=3,cp=4,hp=5,up=6,dp=7;var qu=300,Ho=301,No=302,El=303,yl=304,$a=306,Un=1e3,ks=1001,vl=1002,Pn=1003,fp=1004;var Yr=1005;var Si=1006,R0=1007;var Gs=1008;var Vi=1009,Yu=1010,Zu=1011,Sr=1012,Lc=1013,Wi=1014,zi=1015,Nn=1016,Bc=1017,Uc=1018,Oo=1020,$u=35902,Ju=1021,Ku=1022,Xn=1023,Qu=1024,ju=1025,Io=1026,zo=1027,td=1028,Hc=1029,ed=1030,Nc=1031;var Oc=1033,_a=33776,ba=33777,Aa=33778,Ta=33779,Ml=35840,_l=35841,bl=35842,Al=35843,Tl=36196,Sl=37492,Rl=37496,xl=37808,wl=37809,Cl=37810,Fl=37811,Pl=37812,Il=37813,Dl=37814,Ll=37815,Bl=37816,Ul=37817,Hl=37818,Nl=37819,Ol=37820,zl=37821,Sa=36492,kl=36494,Gl=36495,nd=36283,Vl=36284,Wl=36285,Xl=36286;var Ra=2300,ql=2301,x0=2302,Oh=2400,zh=2401,kh=2402;var pp=3200,mp=3201;var id=0,gp=1,fs="",Be="srgb",vs="srgb-linear",Ja="linear",Pe="srgb";var uo=7680;var Gh=519,Ep=512,yp=513,vp=514,sd=515,Mp=516,_p=517,bp=518,Ap=519,Yl=35044;var Vh="300 es",ki=2e3,xa=2001,gs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var w0=Math.PI/180,wa=180/Math.PI;function ms(){let n=__sr()*4294967295|0,t=__sr()*4294967295|0,e=__sr()*4294967295|0,i=__sr()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function Mn(n,t,e){return Math.max(t,Math.min(e,n))}function Tp(n,t){return(n%t+t)%t}function C0(n,t,e){return(1-e)*n+e*t}function Ti(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var lt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Mn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class n{constructor(t,e,i,s,o,r,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c)}set(t,e,i,s,o,r,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],E=s[0],m=s[3],p=s[6],b=s[1],A=s[4],y=s[7],C=s[2],R=s[5],w=s[8];return o[0]=r*E+a*b+l*C,o[3]=r*m+a*A+l*R,o[6]=r*p+a*y+l*w,o[1]=c*E+h*b+u*C,o[4]=c*m+h*A+u*R,o[7]=c*p+h*y+u*w,o[2]=d*E+f*b+g*C,o[5]=d*m+f*A+g*R,o[8]=d*p+f*y+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-i*o*h+i*a*l+s*o*c-s*r*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,f=c*o-r*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return t[0]=u*E,t[1]=(s*c-h*i)*E,t[2]=(a*i-s*r)*E,t[3]=d*E,t[4]=(h*e-s*l)*E,t[5]=(s*o-a*e)*E,t[6]=f*E,t[7]=(i*l-c*e)*E,t[8]=(r*e-i*o)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){let l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(F0.makeScale(t,e)),this}rotate(t){return this.premultiply(F0.makeRotation(-t)),this}translate(t,e){return this.premultiply(F0.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},F0=new ie;function od(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sp(){let n=Ca("canvas");return n.style.display="block",n}var Wh={};function Mr(n){n in Wh||(Wh[n]=!0,console.warn(n))}function Rp(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function xp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var be={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Pe&&(n.r=Gi(n.r),n.g=Gi(n.g),n.b=Gi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Pe&&(n.r=Do(n.r),n.g=Do(n.g),n.b=Do(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===fs?Ja:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Do(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xh=[.64,.33,.3,.6,.15,.06],qh=[.2126,.7152,.0722],Yh=[.3127,.329],Zh=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);be.define({[vs]:{primaries:Xh,whitePoint:Yh,transfer:Ja,toXYZ:Zh,fromXYZ:$h,luminanceCoefficients:qh,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:Xh,whitePoint:Yh,transfer:Pe,toXYZ:Zh,fromXYZ:$h,luminanceCoefficients:qh,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});var fo,Zl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fo===void 0&&(fo=Ca("canvas")),fo.width=t.width,fo.height=t.height;let i=fo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=fo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ca("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Gi(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gi(e[i]/255)*255):e[i]=Gi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cp=0,Fa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(P0(s[r].image)):o.push(P0(s[r]))}else o=P0(s);i.url=o}return e||(t.images[this.uuid]=i),i}};function P0(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fp=0,Hn=class n extends gs{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ks,s=ks,o=Si,r=Gs,a=Xn,l=Vi,c=n.DEFAULT_ANISOTROPY,h=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=ms(),this.name="",this.source=new Fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Un:t.x=t.x-Math.floor(t.x);break;case ks:t.x=t.x<0?0:1;break;case vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Un:t.y=t.y-Math.floor(t.y);break;case ks:t.y=t.y<0?0:1;break;case vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=qu;Hn.DEFAULT_ANISOTROPY=1;var De=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(f+1)/2,C=(p+1)/2,R=(h+d)/4,w=(u+E)/4,F=(g+m)/4;return A>y&&A>C?A<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(A),s=R/i,o=w/i):y>C?y<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(y),i=R/s,o=F/s):C<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(C),i=w/o,s=F/o),this.set(i,s,o,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-E)*(u-E)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-E)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$l=class extends gs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let o=new Hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];let r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends $l{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Pa=class extends Hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jl=class extends Hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=o[r+0],f=o[r+1],g=o[r+2],E=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=E;return}if(u!==E||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*E,b=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){let C=Math.sqrt(A),R=Math.atan2(C,p*b);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}let y=a*b;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+E*y,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=o[r],d=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(o/2),d=l(i/2),f=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-i*c,this._z=o*h+r*c+i*l-s*a,this._w=r*h-i*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,o=this._z,r=this._w,a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*__sr(),e=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},x=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+l*c+r*u-a*h,this.y=i+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-i*l,this.z=i*a-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return I0.copy(this).projectOnVector(t),this.sub(I0)}reflect(t){return this.sub(I0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Mn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let t=__sr()*Math.PI*2,e=__sr()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},I0=new x,Jh=new jn,Vs=class{constructor(t=new x(1/0,1/0,1/0),e=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,hi):hi.fromBufferAttribute(o,r),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}let s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),$r.subVectors(this.max,dr),po.subVectors(t.a,dr),mo.subVectors(t.b,dr),go.subVectors(t.c,dr),as.subVectors(mo,po),ls.subVectors(go,mo),Is.subVectors(po,go);let e=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Is.z,Is.y,as.z,0,-as.x,ls.z,0,-ls.x,Is.z,0,-Is.x,-as.y,as.x,0,-ls.y,ls.x,0,-Is.y,Is.x,0];return!D0(e,po,mo,go,$r)||(e=[1,0,0,0,1,0,0,0,1],!D0(e,po,mo,go,$r))?!1:(Jr.crossVectors(as,ls),e=[Jr.x,Jr.y,Jr.z],D0(e,po,mo,go,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Di=[new x,new x,new x,new x,new x,new x,new x,new x],hi=new x,Zr=new Vs,po=new x,mo=new x,go=new x,as=new x,ls=new x,Is=new x,dr=new x,$r=new x,Jr=new x,Ds=new x;function D0(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Ds.fromArray(n,o);let a=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),l=t.dot(Ds),c=e.dot(Ds),h=i.dot(Ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pp=new Vs,fr=new x,L0=new x,ko=class{constructor(t=new x,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Pp.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);let e=fr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(fr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(L0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(L0)),this.expandByPoint(fr.copy(t.center).sub(L0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new x,B0=new x,Kr=new x,cs=new x,U0=new x,Qr=new x,H0=new x,Ia=class{constructor(t=new x,e=new x(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){B0.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),cs.copy(this.origin).sub(B0);let o=t.distanceTo(e)*.5,r=-this.direction.dot(Kr),a=cs.dot(this.direction),l=-cs.dot(Kr),c=cs.lengthSq(),h=Math.abs(1-r*r),u,d,f,g;if(h>0)if(u=r*l-a,d=r*a-l,g=o*h,u>=0)if(d>=-g)if(d<=g){let E=1/h;u*=E,d*=E,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(B0).addScaledVector(Kr,d),f}intersectSphere(t,e){Li.subVectors(t.center,this.origin);let i=Li.dot(this.direction),s=Li.dot(Li)-i*i,o=t.radius*t.radius;if(s>o)return null;let r=Math.sqrt(o-s),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,i,s,o){U0.subVectors(e,t),Qr.subVectors(i,t),H0.crossVectors(U0,Qr);let r=this.direction.dot(H0),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;cs.subVectors(this.origin,t);let l=a*this.direction.dot(Qr.crossVectors(cs,Qr));if(l<0)return null;let c=a*this.direction.dot(U0.cross(cs));if(c<0||l+c>r)return null;let h=-a*cs.dot(H0);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class n{constructor(t,e,i,s,o,r,a,l,c,h,u,d,f,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c,h,u,d,f,g,E,m)}set(t,e,i,s,o,r,a,l,c,h,u,d,f,g,E,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Eo.setFromMatrixColumn(t,0).length(),o=1/Eo.setFromMatrixColumn(t,1).length(),r=1/Eo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let d=r*h,f=r*u,g=a*h,E=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-E*c,e[9]=-a*l,e[2]=E-d*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,E=c*u;e[0]=d+E*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-g,e[6]=E+d*a,e[10]=r*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,E=c*u;e[0]=d-E*a,e[4]=-r*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*h,e[9]=E-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){let d=r*h,f=r*u,g=a*h,E=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+E,e[1]=l*u,e[5]=E*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){let d=r*l,f=r*c,g=a*l,E=a*c;e[0]=l*h,e[4]=E-d*u,e[8]=g*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-E*u}else if(t.order==="XZY"){let d=r*l,f=r*c,g=a*l,E=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+E,e[5]=r*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=E*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ip,t,Dp)}lookAt(t,e,i){let s=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),hs.crossVectors(i,Vn),hs.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),hs.crossVectors(i,Vn)),hs.normalize(),jr.crossVectors(Vn,hs),s[0]=hs.x,s[4]=jr.x,s[8]=Vn.x,s[1]=hs.y,s[5]=jr.y,s[9]=Vn.y,s[2]=hs.z,s[6]=jr.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],E=i[6],m=i[10],p=i[14],b=i[3],A=i[7],y=i[11],C=i[15],R=s[0],w=s[4],F=s[8],T=s[12],M=s[1],P=s[5],q=s[9],z=s[13],I=s[2],N=s[6],H=s[10],K=s[14],k=s[3],it=s[7],pt=s[11],xt=s[15];return o[0]=r*R+a*M+l*I+c*k,o[4]=r*w+a*P+l*N+c*it,o[8]=r*F+a*q+l*H+c*pt,o[12]=r*T+a*z+l*K+c*xt,o[1]=h*R+u*M+d*I+f*k,o[5]=h*w+u*P+d*N+f*it,o[9]=h*F+u*q+d*H+f*pt,o[13]=h*T+u*z+d*K+f*xt,o[2]=g*R+E*M+m*I+p*k,o[6]=g*w+E*P+m*N+p*it,o[10]=g*F+E*q+m*H+p*pt,o[14]=g*T+E*z+m*K+p*xt,o[3]=b*R+A*M+y*I+C*k,o[7]=b*w+A*P+y*N+C*it,o[11]=b*F+A*q+y*H+C*pt,o[15]=b*T+A*z+y*K+C*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],E=t[7],m=t[11],p=t[15];return g*(+o*l*u-s*c*u-o*a*d+i*c*d+s*a*f-i*l*f)+E*(+e*l*f-e*c*d+o*r*d-s*r*f+s*c*h-o*l*h)+m*(+e*c*u-e*a*f-o*r*u+i*r*f+o*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*r*u-i*r*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],E=t[13],m=t[14],p=t[15],b=u*m*c-E*d*c+E*l*f-a*m*f-u*l*p+a*d*p,A=g*d*c-h*m*c-g*l*f+r*m*f+h*l*p-r*d*p,y=h*E*c-g*u*c+g*a*f-r*E*f-h*a*p+r*u*p,C=g*u*l-h*E*l-g*a*d+r*E*d+h*a*m-r*u*m,R=e*b+i*A+s*y+o*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return t[0]=b*w,t[1]=(E*d*o-u*m*o-E*s*f+i*m*f+u*s*p-i*d*p)*w,t[2]=(a*m*o-E*l*o+E*s*c-i*m*c-a*s*p+i*l*p)*w,t[3]=(u*l*o-a*d*o-u*s*c+i*d*c+a*s*f-i*l*f)*w,t[4]=A*w,t[5]=(h*m*o-g*d*o+g*s*f-e*m*f-h*s*p+e*d*p)*w,t[6]=(g*l*o-r*m*o-g*s*c+e*m*c+r*s*p-e*l*p)*w,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*f+e*l*f)*w,t[8]=y*w,t[9]=(g*u*o-h*E*o-g*i*f+e*E*f+h*i*p-e*u*p)*w,t[10]=(r*E*o-g*a*o+g*i*c-e*E*c-r*i*p+e*a*p)*w,t[11]=(h*a*o-r*u*o-h*i*c+e*u*c+r*i*f-e*a*f)*w,t[12]=C*w,t[13]=(h*E*s-g*u*s+g*i*d-e*E*d-h*i*m+e*u*m)*w,t[14]=(g*a*s-r*E*s-g*i*l+e*E*l+r*i*m-e*a*m)*w,t[15]=(r*u*s-h*a*s+h*i*l-e*u*l-r*i*d+e*a*d)*w,this}scale(t){let e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,f=o*h,g=o*u,E=r*h,m=r*u,p=a*u,b=l*c,A=l*h,y=l*u,C=i.x,R=i.y,w=i.z;return s[0]=(1-(E+p))*C,s[1]=(f+y)*C,s[2]=(g-A)*C,s[3]=0,s[4]=(f-y)*R,s[5]=(1-(d+p))*R,s[6]=(m+b)*R,s[7]=0,s[8]=(g+A)*w,s[9]=(m-b)*w,s[10]=(1-(d+E))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,o=Eo.set(s[0],s[1],s[2]).length(),r=Eo.set(s[4],s[5],s[6]).length(),a=Eo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ui.copy(this);let c=1/o,h=1/r,u=1/a;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,e.setFromRotationMatrix(ui),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=ki){let l=this.elements,c=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,g;if(a===ki)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===xa)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=ki){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(r-o),d=(e+t)*c,f=(i+s)*h,g,E;if(a===ki)g=(r+o)*u,E=-2*u;else if(a===xa)g=o*u,E=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Eo=new x,ui=new we,Ip=new x(0,0,0),Dp=new x(1,1,1),hs=new x,jr=new x,Vn=new x,Kh=new we,Qh=new jn,Xi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Mn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var Da=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lp=0,jh=new x,yo=new jn,Bi=new we,ta=new x,pr=new x,Bp=new x,Up=new jn,tu=new x(1,0,0),eu=new x(0,1,0),nu=new x(0,0,1),iu={type:"added"},Hp={type:"removed"},vo={type:"childadded",child:null},N0={type:"childremoved",child:null},hn=class n extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new x,e=new Xi,i=new jn,s=new x(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new ie}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yo.setFromAxisAngle(t,e),this.quaternion.multiply(yo),this}rotateOnWorldAxis(t,e){return yo.setFromAxisAngle(t,e),this.quaternion.premultiply(yo),this}rotateX(t){return this.rotateOnAxis(tu,t)}rotateY(t){return this.rotateOnAxis(eu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tu,t)}translateY(t){return this.translateOnAxis(eu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ta.copy(t):ta.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(pr,ta,this.up):Bi.lookAt(ta,pr,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),yo.setFromRotationMatrix(Bi),this.quaternion.premultiply(yo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(iu),vo.child=t,this.dispatchEvent(vo),vo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hp),N0.child=t,this.dispatchEvent(N0),N0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(iu),vo.child=t,this.dispatchEvent(vo),vo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,Bp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){let a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};hn.DEFAULT_UP=new x(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new x,Ui=new x,O0=new x,Hi=new x,Mo=new x,_o=new x,su=new x,z0=new x,k0=new x,G0=new x,V0=new De,W0=new De,X0=new De,ps=class n{constructor(t=new x,e=new x,i=new x){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),di.subVectors(t,e),s.cross(di);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){di.subVectors(s,e),Ui.subVectors(i,e),O0.subVectors(t,e);let r=di.dot(di),a=di.dot(Ui),l=di.dot(O0),c=Ui.dot(Ui),h=Ui.dot(O0),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(r*h-a*l)*d;return o.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,i,s,o,r,a,l){return this.getBarycoord(t,e,i,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Hi.x),l.addScaledVector(r,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(t,e,i,s,o,r){return V0.setScalar(0),W0.setScalar(0),X0.setScalar(0),V0.fromBufferAttribute(t,e),W0.fromBufferAttribute(t,i),X0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(V0,o.x),r.addScaledVector(W0,o.y),r.addScaledVector(X0,o.z),r}static isFrontFacing(t,e,i,s){return di.subVectors(i,e),Ui.subVectors(t,e),di.cross(Ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),di.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,o=this.c,r,a;Mo.subVectors(s,i),_o.subVectors(o,i),z0.subVectors(t,i);let l=Mo.dot(z0),c=_o.dot(z0);if(l<=0&&c<=0)return e.copy(i);k0.subVectors(t,s);let h=Mo.dot(k0),u=_o.dot(k0);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(Mo,r);G0.subVectors(t,o);let f=Mo.dot(G0),g=_o.dot(G0);if(g>=0&&f<=g)return e.copy(o);let E=f*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(_o,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return su.subVectors(o,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(su,a);let p=1/(m+E+d);return r=E*p,a=d*p,e.copy(i).addScaledVector(Mo,r).addScaledVector(_o,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},ea={h:0,s:0,l:0};function q0(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Pt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=i,be.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=be.workingColorSpace){if(t=Tp(t,1),e=Mn(e,0,1),i=Mn(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=q0(r,o,t+1/3),this.g=q0(r,o,t),this.b=q0(r,o,t-1/3)}return be.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let i=rd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Do(t.r),this.g=Do(t.g),this.b=Do(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return be.fromWorkingColorSpace(Sn.copy(this),t),Math.round(Mn(Sn.r*255,0,255))*65536+Math.round(Mn(Sn.g*255,0,255))*256+Math.round(Mn(Sn.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(Sn.copy(this),e);let i=Sn.r,s=Sn.g,o=Sn.b,r=Math.max(i,s,o),a=Math.min(i,s,o),l,c,h=(a+r)/2;if(a===r)l=0,c=0;else{let u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case i:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-i)/u+2;break;case o:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=Be){be.fromWorkingColorSpace(Sn.copy(this),t);let e=Sn.r,i=Sn.g,s=Sn.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(us),this.setHSL(us.h+t,us.s+e,us.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(us),t.getHSL(ea);let i=C0(us.h,ea.h,e),s=C0(us.s,ea.s,e),o=C0(us.l,ea.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Pt;Pt.NAMES=rd;var Np=0,qi=class extends gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=ms(),this.name="",this.blending=Po,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Po&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ll&&(i.blendSrc=this.blendSrc),this.blendDst!==cl&&(i.blendDst=this.blendDst),this.blendEquation!==Os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){let r=[];for(let a in o){let l=o[a];delete l.metadata,r.push(l)}return r}if(e){let o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ae=class extends qi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var nn=new x,na=new lt,Rn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Yl,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array),o=Ie(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yl&&(t.usage=this.usage),t}};var La=class extends Rn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ba=class extends Rn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ue=class extends Rn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Op=0,Qn=new we,Y0=new hn,bo=new x,Wn=new Vs,mr=new Vs,pn=new x,gn=class n extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(od(t)?Ba:La)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new ie().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,i){return Qn.makeTranslation(t,e,i),this.applyMatrix4(Qn),this}scale(t,e,i){return Qn.makeScale(t,e,i),this.applyMatrix4(Qn),this}lookAt(t){return Y0.lookAt(t),Y0.updateMatrix(),this.applyMatrix4(Y0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,o=t.length;s<o;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ue(i,3))}else{for(let i=0,s=e.count;i<s;i++){let o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let o=e[i];Wn.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ko);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(t){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(Wn.min,mr.min),Wn.expandByPoint(pn),pn.addVectors(Wn.max,mr.max),Wn.expandByPoint(pn)):(Wn.expandByPoint(mr.min),Wn.expandByPoint(mr.max))}Wn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)pn.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(pn));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pn.fromBufferAttribute(a,c),l&&(bo.fromBufferAttribute(t,c),pn.add(bo)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new x,l[F]=new x;let c=new x,h=new x,u=new x,d=new lt,f=new lt,g=new lt,E=new x,m=new x;function p(F,T,M){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,M),d.fromBufferAttribute(o,F),f.fromBufferAttribute(o,T),g.fromBufferAttribute(o,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[F].add(E),a[T].add(E),a[M].add(E),l[F].add(m),l[T].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let F=0,T=b.length;F<T;++F){let M=b[F],P=M.start,q=M.count;for(let z=P,I=P+q;z<I;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let A=new x,y=new x,C=new x,R=new x;function w(F){C.fromBufferAttribute(s,F),R.copy(C);let T=a[F];A.copy(T),A.sub(C.multiplyScalar(C.dot(T))).normalize(),y.crossVectors(R,T);let P=y.dot(l[F])<0?-1:1;r.setXYZW(F,A.x,A.y,A.z,P)}for(let F=0,T=b.length;F<T;++F){let M=b[F],P=M.start,q=M.count;for(let z=P,I=P+q;z<I;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new x,o=new x,r=new x,a=new x,l=new x,c=new x,h=new x,u=new x;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),E=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,E),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,l=r.length;a<l;a++){let c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ou=new we,Ls=new Ia,ia=new ko,ru=new x,sa=new x,oa=new x,ra=new x,Z0=new x,aa=new x,au=new x,la=new x,st=class extends hn{constructor(t=new gn,e=new ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){aa.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],u=o[l];h!==0&&(Z0.fromBufferAttribute(u,t),r?aa.addScaledVector(Z0,h):aa.addScaledVector(Z0.sub(e),h))}e.add(aa)}return e}raycast(t,e){let i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(o),Ls.copy(t.ray).recast(t.near),!(ia.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(ia,ru)===null||Ls.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(ou.copy(o).invert(),Ls.copy(t.ray).applyMatrix4(ou),!(i.boundingBox!==null&&Ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ls)))}_computeIntersections(t,e,i){let s,o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,E=d.length;g<E;g++){let m=d[g],p=r[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,C=A;y<C;y+=3){let R=a.getX(y),w=a.getX(y+1),F=a.getX(y+2);s=ca(this,p,t,i,c,h,u,R,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let b=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);s=ca(this,r,t,i,c,h,u,b,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,E=d.length;g<E;g++){let m=d[g],p=r[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,C=A;y<C;y+=3){let R=y,w=y+1,F=y+2;s=ca(this,p,t,i,c,h,u,R,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let b=m,A=m+1,y=m+2;s=ca(this,r,t,i,c,h,u,b,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function zp(n,t,e,i,s,o,r,a){let l;if(t.side===sn?l=i.intersectTriangle(r,o,s,!0,a):l=i.intersectTriangle(s,o,r,t.side===wi,a),l===null)return null;la.copy(a),la.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(la);return c<e.near||c>e.far?null:{distance:c,point:la.clone(),object:n}}function ca(n,t,e,i,s,o,r,a,l,c){n.getVertexPosition(a,sa),n.getVertexPosition(l,oa),n.getVertexPosition(c,ra);let h=zp(n,t,e,i,sa,oa,ra,au);if(h){let u=new x;ps.getBarycoord(au,sa,oa,ra,u),s&&(h.uv=ps.getInterpolatedAttribute(s,a,l,c,u,new lt)),o&&(h.uv1=ps.getInterpolatedAttribute(o,a,l,c,u,new lt)),r&&(h.normal=ps.getInterpolatedAttribute(r,a,l,c,u,new x),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new x,materialIndex:0};ps.getNormal(sa,oa,ra,d.normal),h.face=d,h.barycoord=u}return h}var Te=class n extends gn{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};let a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,r,o,0),g("z","y","x",1,-1,i,e,-t,r,o,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,o,4),g("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function g(E,m,p,b,A,y,C,R,w,F,T){let M=y/w,P=C/F,q=y/2,z=C/2,I=R/2,N=w+1,H=F+1,K=0,k=0,it=new x;for(let pt=0;pt<H;pt++){let xt=pt*P-z;for(let Wt=0;Wt<N;Wt++){let Me=Wt*M-q;it[E]=Me*b,it[m]=xt*A,it[p]=I,c.push(it.x,it.y,it.z),it[E]=0,it[m]=0,it[p]=R>0?1:-1,h.push(it.x,it.y,it.z),u.push(Wt/w),u.push(1-pt/F),K+=1}}for(let pt=0;pt<F;pt++)for(let xt=0;xt<w;xt++){let Wt=d+xt+N*pt,Me=d+xt+N*(pt+1),Q=d+(xt+1)+N*(pt+1),ut=d+(xt+1)+N*pt;l.push(Wt,Me,ut),l.push(Me,Q,ut),k+=6}a.addGroup(f,k,T),f+=k,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Go(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Fn(n){let t={};for(let e=0;e<n.length;e++){let i=Go(n[e]);for(let s in i)t[s]=i[s]}return t}function kp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ad(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var Yo={clone:Go,merge:Fn},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends qi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Go(t.uniforms),this.uniformsGroups=kp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ua=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ds=new x,lu=new lt,cu=new lt,_n=class extends Ua{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(w0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(w0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,e){return this.getViewBounds(t,lu,cu),e.subVectors(cu,lu)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(w0*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ao=-90,To=1,Kl=class extends hn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(Ao,To,t,e);s.layers=this.layers,this.add(s);let o=new _n(Ao,To,t,e);o.layers=this.layers,this.add(o);let r=new _n(Ao,To,t,e);r.layers=this.layers,this.add(r);let a=new _n(Ao,To,t,e);a.layers=this.layers,this.add(a);let l=new _n(Ao,To,t,e);l.layers=this.layers,this.add(l);let c=new _n(Ao,To,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,l]=e;for(let c of e)this.remove(c);if(t===ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ha=class extends Hn{constructor(t,e,i,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ho,super(t,e,i,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ql=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ha(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Te(5,5,5),o=new on({name:"CubemapFromEquirect",uniforms:Go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Ri});o.uniforms.tEquirect.value=e;let r=new st(s,o),a=e.minFilter;return e.minFilter===Gs&&(e.minFilter=Si),new Kl(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}},$0=new x,Wp=new x,Xp=new ie,Oi=class{constructor(t=new x(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=$0.subVectors(i,e).cross(Wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta($0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Xp.getNormalMatrix(t),s=this.coplanarPoint($0).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bs=new ko,ha=new x,Rr=class{constructor(t=new Oi,e=new Oi,i=new Oi,s=new Oi,o=new Oi,r=new Oi){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ki){let i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],E=s[10],m=s[11],p=s[12],b=s[13],A=s[14],y=s[15];if(i[0].setComponents(l-o,d-c,m-f,y-p).normalize(),i[1].setComponents(l+o,d+c,m+f,y+p).normalize(),i[2].setComponents(l+r,d+h,m+g,y+b).normalize(),i[3].setComponents(l-r,d-h,m-g,y-b).normalize(),i[4].setComponents(l-a,d-u,m-E,y-A).normalize(),e===ki)i[5].setComponents(l+a,d+u,m+E,y+A).normalize();else if(e===xa)i[5].setComponents(a,u,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(t){return Bs.center.set(0,0,0),Bs.radius=.7071067811865476,Bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ha.x=s.normal.x>0?t.max.x:t.min.x,ha.y=s.normal.y>0?t.max.y:t.min.y,ha.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ld(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.__noRaf(s)}return{start:function(){t!==!0&&e!==null&&(i=n.__noRaf(s),t=!0)},stop:function(){n.__noCaf(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function qp(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],E=u[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++d,u[d]=E)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let E=u[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var St=class n extends gn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let o=t/2,r=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],E=[],m=[];for(let p=0;p<h;p++){let b=p*d-r;for(let A=0;A<c;A++){let y=A*u-o;g.push(y,-b,0),E.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let A=b+c*p,y=b+c*(p+1),C=b+1+c*(p+1),R=b+1+c*p;f.push(A,y,R),f.push(y,C,R)}this.setIndex(f),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(E,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jp=`#ifdef USE_AOMAP
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
#endif`,t1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e1=`#ifdef USE_BATCHING
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
#endif`,n1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,r1=`#ifdef USE_IRIDESCENCE
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
#endif`,a1=`#ifdef USE_BUMPMAP
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
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,g1=`#define PI 3.141592653589793
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
} // validated`,E1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y1=`vec3 transformedNormal = objectNormal;
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
#endif`,v1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A1="gl_FragColor = linearToOutputTexel( gl_FragColor );",T1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S1=`#ifdef USE_ENVMAP
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
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x1=`#ifdef USE_ENVMAP
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
#endif`,w1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
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
#endif`,F1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L1=`#ifdef USE_GRADIENTMAP
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
}`,B1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N1=`uniform bool receiveShadow;
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
#endif`,O1=`#ifdef USE_ENVMAP
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
#endif`,z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W1=`PhysicalMaterial material;
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
#endif`,X1=`struct PhysicalMaterial {
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
}`,q1=`
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
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nm=`#if defined( USE_POINTS_UV )
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
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
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
}`,jm=`#if DEPTH_PACKING == 3200
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
}`,t2=`#define DISTANCE
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
}`,e2=`#define DISTANCE
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
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s2=`uniform float scale;
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
}`,o2=`uniform vec3 diffuse;
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
}`,r2=`#include <common>
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
}`,a2=`uniform vec3 diffuse;
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
}`,l2=`#define LAMBERT
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
}`,c2=`#define LAMBERT
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
}`,h2=`#define MATCAP
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
}`,u2=`#define MATCAP
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
}`,d2=`#define NORMAL
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
}`,f2=`#define NORMAL
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
}`,p2=`#define PHONG
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
}`,m2=`#define PHONG
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
}`,g2=`#define STANDARD
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
}`,E2=`#define STANDARD
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
}`,y2=`#define TOON
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
}`,v2=`#define TOON
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
}`,M2=`uniform float size;
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
}`,_2=`uniform vec3 diffuse;
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
}`,b2=`#include <common>
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
}`,A2=`uniform vec3 color;
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
}`,T2=`uniform float rotation;
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
}`,S2=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Yp,alphahash_pars_fragment:Zp,alphamap_fragment:$p,alphamap_pars_fragment:Jp,alphatest_fragment:Kp,alphatest_pars_fragment:Qp,aomap_fragment:jp,aomap_pars_fragment:t1,batching_pars_vertex:e1,batching_vertex:n1,begin_vertex:i1,beginnormal_vertex:s1,bsdfs:o1,iridescence_fragment:r1,bumpmap_pars_fragment:a1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:h1,clipping_planes_vertex:u1,color_fragment:d1,color_pars_fragment:f1,color_pars_vertex:p1,color_vertex:m1,common:g1,cube_uv_reflection_fragment:E1,defaultnormal_vertex:y1,displacementmap_pars_vertex:v1,displacementmap_vertex:M1,emissivemap_fragment:_1,emissivemap_pars_fragment:b1,colorspace_fragment:A1,colorspace_pars_fragment:T1,envmap_fragment:S1,envmap_common_pars_fragment:R1,envmap_pars_fragment:x1,envmap_pars_vertex:w1,envmap_physical_pars_fragment:O1,envmap_vertex:C1,fog_vertex:F1,fog_pars_vertex:P1,fog_fragment:I1,fog_pars_fragment:D1,gradientmap_pars_fragment:L1,lightmap_pars_fragment:B1,lights_lambert_fragment:U1,lights_lambert_pars_fragment:H1,lights_pars_begin:N1,lights_toon_fragment:z1,lights_toon_pars_fragment:k1,lights_phong_fragment:G1,lights_phong_pars_fragment:V1,lights_physical_fragment:W1,lights_physical_pars_fragment:X1,lights_fragment_begin:q1,lights_fragment_maps:Y1,lights_fragment_end:Z1,logdepthbuf_fragment:$1,logdepthbuf_pars_fragment:J1,logdepthbuf_pars_vertex:K1,logdepthbuf_vertex:Q1,map_fragment:j1,map_pars_fragment:tm,map_particle_fragment:em,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:om,morphcolor_vertex:rm,morphnormal_vertex:am,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:ym,iridescence_pars_fragment:vm,opaque_fragment:Mm,packing:_m,premultiplied_alpha_fragment:bm,project_vertex:Am,dithering_fragment:Tm,dithering_pars_fragment:Sm,roughnessmap_fragment:Rm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Fm,shadowmask_pars_fragment:Pm,skinbase_vertex:Im,skinning_pars_vertex:Dm,skinning_vertex:Lm,skinnormal_vertex:Bm,specularmap_fragment:Um,specularmap_pars_fragment:Hm,tonemapping_fragment:Nm,tonemapping_pars_fragment:Om,transmission_fragment:zm,transmission_pars_fragment:km,uv_pars_fragment:Gm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:Zm,backgroundCube_frag:$m,cube_vert:Jm,cube_frag:Km,depth_vert:Qm,depth_frag:jm,distanceRGBA_vert:t2,distanceRGBA_frag:e2,equirect_vert:n2,equirect_frag:i2,linedashed_vert:s2,linedashed_frag:o2,meshbasic_vert:r2,meshbasic_frag:a2,meshlambert_vert:l2,meshlambert_frag:c2,meshmatcap_vert:h2,meshmatcap_frag:u2,meshnormal_vert:d2,meshnormal_frag:f2,meshphong_vert:p2,meshphong_frag:m2,meshphysical_vert:g2,meshphysical_frag:E2,meshtoon_vert:y2,meshtoon_frag:v2,points_vert:M2,points_frag:_2,shadow_vert:b2,shadow_frag:A2,sprite_vert:T2,sprite_frag:S2},gt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Ai={basic:{uniforms:Fn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Fn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Fn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Fn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Fn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Fn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Fn([gt.points,gt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Fn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Fn([gt.common,gt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Fn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Fn([gt.sprite,gt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:Fn([gt.common,gt.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:Fn([gt.lights,gt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Ai.physical={uniforms:Fn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var ua={r:0,b:0,g:0},Us=new Xi,R2=new we;function x2(n,t,e,i,s,o,r){let a=new Pt(0),l=o===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?e:t).get(A)),A}function E(b){let A=!1,y=g(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),A=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,A){let y=g(A);y&&(y.isCubeTexture||y.mapping===$a)?(h===void 0&&(h=new st(new Te(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Go(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Us.copy(A.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(R2.makeRotationFromEuler(Us)),h.material.toneMapped=be.getTransfer(y.colorSpace)!==Pe,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new st(new St(2,2),new on({name:"BackgroundMaterial",uniforms:Go(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=be.getTransfer(y.colorSpace)!==Pe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,A){b.getRGB(ua,ad(n)),i.buffers.color.setClear(ua.r,ua.g,ua.b,A,r)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),l=A,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:E,addToRenderList:m}}function w2(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),o=s,r=!1;function a(M,P,q,z,I){let N=!1,H=u(z,q,P);o!==H&&(o=H,c(o.object)),N=f(M,z,q,I),N&&g(M,z,q,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,y(M,P,q,z),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,P,q){let z=q.wireframe===!0,I=i[M.id];I===void 0&&(I={},i[M.id]=I);let N=I[P.id];N===void 0&&(N={},I[P.id]=N);let H=N[z];return H===void 0&&(H=d(l()),N[z]=H),H}function d(M){let P=[],q=[],z=[];for(let I=0;I<e;I++)P[I]=0,q[I]=0,z[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:z,object:M,attributes:{},index:null}}function f(M,P,q,z){let I=o.attributes,N=P.attributes,H=0,K=q.getAttributes();for(let k in K)if(K[k].location>=0){let pt=I[k],xt=N[k];if(xt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),pt===void 0||pt.attribute!==xt||xt&&pt.data!==xt.data)return!0;H++}return o.attributesNum!==H||o.index!==z}function g(M,P,q,z){let I={},N=P.attributes,H=0,K=q.getAttributes();for(let k in K)if(K[k].location>=0){let pt=N[k];pt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor));let xt={};xt.attribute=pt,pt&&pt.data&&(xt.data=pt.data),I[k]=xt,H++}o.attributes=I,o.attributesNum=H,o.index=z}function E(){let M=o.newAttributes;for(let P=0,q=M.length;P<q;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){let q=o.newAttributes,z=o.enabledAttributes,I=o.attributeDivisors;q[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),I[M]!==P&&(n.vertexAttribDivisor(M,P),I[M]=P)}function b(){let M=o.newAttributes,P=o.enabledAttributes;for(let q=0,z=P.length;q<z;q++)P[q]!==M[q]&&(n.disableVertexAttribArray(q),P[q]=0)}function A(M,P,q,z,I,N,H){H===!0?n.vertexAttribIPointer(M,P,q,I,N):n.vertexAttribPointer(M,P,q,z,I,N)}function y(M,P,q,z){E();let I=z.attributes,N=q.getAttributes(),H=P.defaultAttributeValues;for(let K in N){let k=N[K];if(k.location>=0){let it=I[K];if(it===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){let pt=it.normalized,xt=it.itemSize,Wt=t.get(it);if(Wt===void 0)continue;let Me=Wt.buffer,Q=Wt.type,ut=Wt.bytesPerElement,Dt=Q===n.INT||Q===n.UNSIGNED_INT||it.gpuType===Lc;if(it.isInterleavedBufferAttribute){let mt=it.data,zt=mt.stride,Zt=it.offset;if(mt.isInstancedInterleavedBuffer){for(let se=0;se<k.locationSize;se++)p(k.location+se,mt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let se=0;se<k.locationSize;se++)m(k.location+se);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let se=0;se<k.locationSize;se++)A(k.location+se,xt/k.locationSize,Q,pt,zt*ut,(Zt+xt/k.locationSize*se)*ut,Dt)}else{if(it.isInstancedBufferAttribute){for(let mt=0;mt<k.locationSize;mt++)p(k.location+mt,it.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let mt=0;mt<k.locationSize;mt++)m(k.location+mt);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let mt=0;mt<k.locationSize;mt++)A(k.location+mt,xt/k.locationSize,Q,pt,xt*ut,xt/k.locationSize*mt*ut,Dt)}}else if(H!==void 0){let pt=H[K];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(k.location,pt);break;case 3:n.vertexAttrib3fv(k.location,pt);break;case 4:n.vertexAttrib4fv(k.location,pt);break;default:n.vertexAttrib1fv(k.location,pt)}}}}b()}function C(){F();for(let M in i){let P=i[M];for(let q in P){let z=P[q];for(let I in z)h(z[I].object),delete z[I];delete P[q]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;let P=i[M.id];for(let q in P){let z=P[q];for(let I in z)h(z[I].object),delete z[I];delete P[q]}delete i[M.id]}function w(M){for(let P in i){let q=i[P];if(q[M.id]===void 0)continue;let z=q[M.id];for(let I in z)h(z[I].object),delete z[I];delete q[M.id]}}function F(){T(),r=!0,o!==s&&(o=s,c(o.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:m,disableUnusedAttributes:b}}function C2(n,t,e){let i;function s(c){i=c}function o(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let E=0;E<u;E++)g+=h[E]*d[E];e.update(g,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function F2(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Xn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let F=w===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Vi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==zi&&!F)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:C,maxSamples:R}}function P2(n){let t=this,e=null,i=0,s=!1,o=!1,r=new Oi,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,E=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{let b=o?0:i,A=b*4,y=p.clippingState||null;l.value=y,y=h(g,d,A,f);for(let C=0;C!==A;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let E=u!==null?u.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let p=f+E*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,y=f;A!==E;++A,y+=4)r.copy(u[A]).applyMatrix4(b,a),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}function I2(n){let t=new WeakMap;function e(r,a){return a===El?r.mapping=Ho:a===yl&&(r.mapping=No),r}function i(r){if(r&&r.isTexture){let a=r.mapping;if(a===El||a===yl)if(t.has(r)){let l=t.get(r).texture;return e(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Ql(l.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){let a=r.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}var Vo=class extends Ua{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=i-t,r=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fo=4,hu=[.125,.215,.35,.446,.526,.582],zs=20,J0=new Vo,uu=new Pt,K0=null,Q0=0,j0=0,tl=!1,Ns=(1+Math.sqrt(5))/2,So=1/Ns,du=[new x(-Ns,So,0),new x(Ns,So,0),new x(-So,0,Ns),new x(So,0,Ns),new x(0,Ns,-So),new x(0,Ns,So),new x(-1,1,-1),new x(1,1,-1),new x(-1,1,1),new x(1,1,1)],Na=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){K0=this._renderer.getRenderTarget(),Q0=this._renderer.getActiveCubeFace(),j0=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(K0,Q0,j0),this._renderer.xr.enabled=tl,t.scissorTest=!1,da(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ho||t.mapping===No?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),K0=this._renderer.getRenderTarget(),Q0=this._renderer.getActiveCubeFace(),j0=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Nn,format:Xn,colorSpace:vs,depthBuffer:!1},s=fu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(t,e,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D2(o)),this._blurMaterial=L2(o,t,e)}return s}_compileMaterial(t){let e=new st(this._lodPlanes[0],t);this._renderer.compile(e,J0)}_sceneToCubeUV(t,e,i,s){let a=new _n(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(uu),h.toneMapping=xi,h.autoClear=!1;let f=new ae({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new st(new Te,f),E=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,E=!0):(f.color.copy(uu),E=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let A=this._cubeSize;da(s,b*A,p>2?A:0,A,A),h.setRenderTarget(s),E&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ho||t.mapping===No;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());let o=s?this._cubemapMaterial:this._equirectMaterial,r=new st(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;da(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,J0)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let o=1;o<s;o++){let r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=du[(s-o-1)%du.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new st(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*zs-1),E=o/g,m=isFinite(o)?1+Math.floor(h*E):zs;m>zs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zs}`);let p=[],b=0;for(let w=0;w<zs;++w){let F=w/E,T=Math.exp(-F*F/2);p.push(T),w===0?b+=T:w<m&&(b+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-i;let y=this._sizeLods[s],C=3*y*(s>A-Fo?s-A+Fo:0),R=4*(this._cubeSize-y);da(e,C,R,3*y,2*y),l.setRenderTarget(e),l.render(u,J0)}};function D2(n){let t=[],e=[],i=[],s=n,o=n-Fo+1+hu.length;for(let r=0;r<o;r++){let a=Math.pow(2,s);e.push(a);let l=1/a;r>n-Fo?l=hu[r-n+Fo-1]:r===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,E=3,m=2,p=1,b=new Float32Array(E*g*f),A=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let R=0;R<f;R++){let w=R%3*2/3-1,F=R>2?0:-1,T=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];b.set(T,E*g*R),A.set(d,m*g*R);let M=[R,R,R,R,R,R];y.set(M,p*g*R)}let C=new gn;C.setAttribute("position",new Rn(b,E)),C.setAttribute("uv",new Rn(A,m)),C.setAttribute("faceIndex",new Rn(y,p)),t.push(C),s>Fo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fu(n,t,e){let i=new mn(n,t,e);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function da(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function L2(n,t,e){let i=new Float32Array(zs),s=new x(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function pu(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function mu(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function zc(){return`

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
	`}function B2(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===El||l===yl,h=l===Ho||l===No;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Na(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Na(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){let l=a.target;l.removeEventListener("dispose",o);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function U2(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Mr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function H2(n,t,e,i){let s={},o=new WeakMap;function r(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let E=d.morphAttributes[g];for(let m=0,p=E.length;m<p;m++)t.remove(E[m])}d.removeEventListener("dispose",r),delete s[d.id];let f=o.get(d);f&&(t.remove(f),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let E=f[g];for(let m=0,p=E.length;m<p;m++)t.update(E[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,E=0;if(f!==null){let b=f.array;E=f.version;for(let A=0,y=b.length;A<y;A+=3){let C=b[A+0],R=b[A+1],w=b[A+2];d.push(C,R,R,w,w,C)}}else if(g!==void 0){let b=g.array;E=g.version;for(let A=0,y=b.length/3-1;A<y;A+=3){let C=A+0,R=A+1,w=A+2;d.push(C,R,R,w,w,C)}}else return;let m=new(od(d)?Ba:La)(d,1);m.version=E;let p=o.get(u);p&&t.remove(p),o.set(u,m)}function h(u){let d=o.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function N2(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,f){n.drawElements(i,f,o,d*r),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,o,d*r,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,E){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],E[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,o,d,0,E,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*E[b];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function O2(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function z2(n,t,e){let i=new WeakMap,s=new De;function o(r,a,l){let c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let T=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),E===!0&&(A=3);let y=a.attributes.position.count*A,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let R=new Float32Array(y*C*4*u),w=new Pa(R,y,C,u);w.type=zi,w.needsUpdate=!0;let F=A*4;for(let M=0;M<u;M++){let P=m[M],q=p[M],z=b[M],I=y*C*4*M;for(let N=0;N<P.count;N++){let H=N*F;f===!0&&(s.fromBufferAttribute(P,N),R[I+H+0]=s.x,R[I+H+1]=s.y,R[I+H+2]=s.z,R[I+H+3]=0),g===!0&&(s.fromBufferAttribute(q,N),R[I+H+4]=s.x,R[I+H+5]=s.y,R[I+H+6]=s.z,R[I+H+7]=0),E===!0&&(s.fromBufferAttribute(z,N),R[I+H+8]=s.x,R[I+H+9]=s.y,R[I+H+10]=s.z,R[I+H+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new lt(y,C)},i.set(a,d),a.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function k2(n,t,e,i){let s=new WeakMap;function o(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}var Wo=class extends Hn{constructor(t,e,i,s,o,r,a,l,c,h=Io){if(h!==Io&&h!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Io&&(i=Wi),i===void 0&&h===zo&&(i=Oo),super(null,s,o,r,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},cd=new Hn,gu=new Wo(1,1),hd=new Pa,ud=new Jl,dd=new Ha,Eu=[],yu=[],vu=new Float32Array(16),Mu=new Float32Array(9),_u=new Float32Array(4);function Zo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,o=Eu[s];if(o===void 0&&(o=new Float32Array(s),Eu[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function un(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function dn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ka(n,t){let e=yu[t];e===void 0&&(e=new Int32Array(t),yu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function G2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function V2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2fv(this.addr,t),dn(e,t)}}function W2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;n.uniform3fv(this.addr,t),dn(e,t)}}function X2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4fv(this.addr,t),dn(e,t)}}function q2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(un(e,i))return;_u.set(i),n.uniformMatrix2fv(this.addr,!1,_u),dn(e,i)}}function Y2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(un(e,i))return;Mu.set(i),n.uniformMatrix3fv(this.addr,!1,Mu),dn(e,i)}}function Z2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(un(e,i))return;vu.set(i),n.uniformMatrix4fv(this.addr,!1,vu),dn(e,i)}}function $2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function J2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2iv(this.addr,t),dn(e,t)}}function K2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3iv(this.addr,t),dn(e,t)}}function Q2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4iv(this.addr,t),dn(e,t)}}function j2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function tg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2uiv(this.addr,t),dn(e,t)}}function eg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3uiv(this.addr,t),dn(e,t)}}function ng(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4uiv(this.addr,t),dn(e,t)}}function ig(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(gu.compareFunction=sd,o=gu):o=cd,e.setTexture2D(t||o,s)}function sg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ud,s)}function og(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||dd,s)}function rg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||hd,s)}function ag(n){switch(n){case 5126:return G2;case 35664:return V2;case 35665:return W2;case 35666:return X2;case 35674:return q2;case 35675:return Y2;case 35676:return Z2;case 5124:case 35670:return $2;case 35667:case 35671:return J2;case 35668:case 35672:return K2;case 35669:case 35673:return Q2;case 5125:return j2;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return rg}}function lg(n,t){n.uniform1fv(this.addr,t)}function cg(n,t){let e=Zo(t,this.size,2);n.uniform2fv(this.addr,e)}function hg(n,t){let e=Zo(t,this.size,3);n.uniform3fv(this.addr,e)}function ug(n,t){let e=Zo(t,this.size,4);n.uniform4fv(this.addr,e)}function dg(n,t){let e=Zo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function fg(n,t){let e=Zo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function pg(n,t){let e=Zo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function mg(n,t){n.uniform1iv(this.addr,t)}function gg(n,t){n.uniform2iv(this.addr,t)}function Eg(n,t){n.uniform3iv(this.addr,t)}function yg(n,t){n.uniform4iv(this.addr,t)}function vg(n,t){n.uniform1uiv(this.addr,t)}function Mg(n,t){n.uniform2uiv(this.addr,t)}function _g(n,t){n.uniform3uiv(this.addr,t)}function bg(n,t){n.uniform4uiv(this.addr,t)}function Ag(n,t,e){let i=this.cache,s=t.length,o=Ka(e,s);un(i,o)||(n.uniform1iv(this.addr,o),dn(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||cd,o[r])}function Tg(n,t,e){let i=this.cache,s=t.length,o=Ka(e,s);un(i,o)||(n.uniform1iv(this.addr,o),dn(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||ud,o[r])}function Sg(n,t,e){let i=this.cache,s=t.length,o=Ka(e,s);un(i,o)||(n.uniform1iv(this.addr,o),dn(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||dd,o[r])}function Rg(n,t,e){let i=this.cache,s=t.length,o=Ka(e,s);un(i,o)||(n.uniform1iv(this.addr,o),dn(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||hd,o[r])}function xg(n){switch(n){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return Eg;case 35669:case 35673:return yg;case 5125:return vg;case 36294:return Mg;case 36295:return _g;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Rg}}var jl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ag(e.type)}},tc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xg(e.type)}},ec=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let o=0,r=s.length;o!==r;++o){let a=s[o];a.setValue(t,e[a.id],i)}}},el=/(\w+)(\])?(\[|\.)?/g;function bu(n,t){n.seq.push(t),n.map[t.id]=t}function wg(n,t,e){let i=n.name,s=i.length;for(el.lastIndex=0;;){let o=el.exec(i),r=el.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){bu(e,c===void 0?new jl(a,n,t):new tc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new ec(a),bu(e,u)),e=u}}}var Lo=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);wg(o,r,this)}}setValue(t,e,i,s){let o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){let a=e[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,o=t.length;s!==o;++s){let r=t[s];r.id in e&&i.push(r)}return i}};function Au(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Cg=37297,Fg=0;function Pg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){let a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}var Tu=new ie;function Ig(n){be._getMatrix(Tu,be.workingColorSpace,n);let t=`mat3( ${Tu.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(n)){case Ja:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Su(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Pg(n.getShaderSource(t),r)}else return s}function Dg(n,t){let e=Ig(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Lg(n,t){let e;switch(t){case rp:e="Linear";break;case ap:e="Reinhard";break;case lp:e="Cineon";break;case cp:e="ACESFilmic";break;case up:e="AgX";break;case dp:e="Neutral";break;case hp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fa=new x;function Bg(){be.getLuminanceCoefficients(fa);let n=fa.x.toFixed(4),t=fa.y.toFixed(4),e=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function Hg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ng(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let o=n.getActiveAttrib(t,s),r=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function _r(n){return n!==""}function Ru(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(n){return n.replace(Og,kg)}var zg=new Map;function kg(n,t){let e=re[t];if(e===void 0){let i=zg.get(t);if(i!==void 0)e=re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return nc(e)}var Gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(n){return n.replace(Gg,Vg)}function Vg(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Cu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Wg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function Xg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ho:case No:t="ENVMAP_TYPE_CUBE";break;case $a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case No:t="ENVMAP_MODE_REFRACTION";break}return t}function Yg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xu:t="ENVMAP_BLENDING_MULTIPLY";break;case sp:t="ENVMAP_BLENDING_MIX";break;case op:t="ENVMAP_BLENDING_ADD";break}return t}function Zg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function $g(n,t,e,i){let s=n.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,l=Wg(e),c=Xg(e),h=qg(e),u=Yg(e),d=Zg(e),f=Ug(e),g=Hg(o),E=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),p.length>0&&(p+=`
`)):(m=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),p=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?re.tonemapping_pars_fragment:"",e.toneMapping!==xi?Lg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Dg("linearToOutputTexel",e.outputColorSpace),Bg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),r=nc(r),r=Ru(r,e),r=xu(r,e),a=nc(a),a=Ru(a,e),a=xu(a,e),r=wu(r),a=wu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=b+m+r,y=b+p+a,C=Au(s,s.VERTEX_SHADER,A),R=Au(s,s.FRAGMENT_SHADER,y);s.attachShader(E,C),s.attachShader(E,R),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function w(P){if(n.debug.checkShaderErrors){let q=s.getProgramInfoLog(E).trim(),z=s.getShaderInfoLog(C).trim(),I=s.getShaderInfoLog(R).trim(),N=!0,H=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,C,R);else{let K=Su(s,C,"vertex"),k=Su(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+K+`
`+k)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(z===""||I==="")&&(H=!1);H&&(P.diagnostics={runnable:N,programLog:q,vertexShader:{log:z,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(C),s.deleteShader(R),F=new Lo(s,E),T=Ng(s,E)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(E,Cg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fg++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=R,this}var Jg=0,ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new sc(t),e.set(t,i)),i}},sc=class{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}};function Kg(n,t,e,i,s,o,r){let a=new Da,l=new ic,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,P,q,z){let I=q.fog,N=z.geometry,H=T.isMeshStandardMaterial?q.environment:null,K=(T.isMeshStandardMaterial?e:t).get(T.envMap||H),k=K&&K.mapping===$a?K.image.height:null,it=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let pt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,xt=pt!==void 0?pt.length:0,Wt=0;N.morphAttributes.position!==void 0&&(Wt=1),N.morphAttributes.normal!==void 0&&(Wt=2),N.morphAttributes.color!==void 0&&(Wt=3);let Me,Q,ut,Dt;if(it){let Fe=Ai[it];Me=Fe.vertexShader,Q=Fe.fragmentShader}else Me=T.vertexShader,Q=T.fragmentShader,l.update(T),ut=l.getVertexShaderID(T),Dt=l.getFragmentShaderID(T);let mt=n.getRenderTarget(),zt=n.state.buffers.depth.getReversed(),Zt=z.isInstancedMesh===!0,se=z.isBatchedMesh===!0,Ce=!!T.map,ue=!!T.matcap,Ye=!!K,B=!!T.aoMap,wn=!!T.lightMap,de=!!T.bumpMap,Ee=!!T.normalMap,Gt=!!T.displacementMap,At=!!T.emissiveMap,Et=!!T.metalnessMap,S=!!T.roughnessMap,v=T.anisotropy>0,V=T.clearcoat>0,et=T.dispersion>0,ot=T.iridescence>0,j=T.sheen>0,Nt=T.transmission>0,vt=v&&!!T.anisotropyMap,wt=V&&!!T.clearcoatMap,_e=V&&!!T.clearcoatNormalMap,dt=V&&!!T.clearcoatRoughnessMap,Ct=ot&&!!T.iridescenceMap,qt=ot&&!!T.iridescenceThicknessMap,$t=j&&!!T.sheenColorMap,Ft=j&&!!T.sheenRoughnessMap,ye=!!T.specularMap,oe=!!T.specularColorMap,Oe=!!T.specularIntensityMap,D=Nt&&!!T.transmissionMap,yt=Nt&&!!T.thicknessMap,$=!!T.gradientMap,nt=!!T.alphaMap,Tt=T.alphaTest>0,Mt=!!T.alphaHash,ee=!!T.extensions,Ke=xi;T.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Ke=n.toneMapping);let An={shaderID:it,shaderType:T.type,shaderName:T.name,vertexShader:Me,fragmentShader:Q,defines:T.defines,customVertexShaderID:ut,customFragmentShaderID:Dt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:se,batchingColor:se&&z._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&z.instanceColor!==null,instancingMorph:Zt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:vs,alphaToCoverage:!!T.alphaToCoverage,map:Ce,matcap:ue,envMap:Ye,envMapMode:Ye&&K.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:wn,bumpMap:de,normalMap:Ee,displacementMap:d&&Gt,emissiveMap:At,normalMapObjectSpace:Ee&&T.normalMapType===gp,normalMapTangentSpace:Ee&&T.normalMapType===id,metalnessMap:Et,roughnessMap:S,anisotropy:v,anisotropyMap:vt,clearcoat:V,clearcoatMap:wt,clearcoatNormalMap:_e,clearcoatRoughnessMap:dt,dispersion:et,iridescence:ot,iridescenceMap:Ct,iridescenceThicknessMap:qt,sheen:j,sheenColorMap:$t,sheenRoughnessMap:Ft,specularMap:ye,specularColorMap:oe,specularIntensityMap:Oe,transmission:Nt,transmissionMap:D,thicknessMap:yt,gradientMap:$,opaque:T.transparent===!1&&T.blending===Po&&T.alphaToCoverage===!1,alphaMap:nt,alphaTest:Tt,alphaHash:Mt,combine:T.combine,mapUv:Ce&&E(T.map.channel),aoMapUv:B&&E(T.aoMap.channel),lightMapUv:wn&&E(T.lightMap.channel),bumpMapUv:de&&E(T.bumpMap.channel),normalMapUv:Ee&&E(T.normalMap.channel),displacementMapUv:Gt&&E(T.displacementMap.channel),emissiveMapUv:At&&E(T.emissiveMap.channel),metalnessMapUv:Et&&E(T.metalnessMap.channel),roughnessMapUv:S&&E(T.roughnessMap.channel),anisotropyMapUv:vt&&E(T.anisotropyMap.channel),clearcoatMapUv:wt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:_e&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&E(T.sheenRoughnessMap.channel),specularMapUv:ye&&E(T.specularMap.channel),specularColorMapUv:oe&&E(T.specularColorMap.channel),specularIntensityMapUv:Oe&&E(T.specularIntensityMap.channel),transmissionMapUv:D&&E(T.transmissionMap.channel),thicknessMapUv:yt&&E(T.thicknessMap.channel),alphaMapUv:nt&&E(T.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ee||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!N.attributes.uv&&(Ce||nt),fog:!!I,useFog:T.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:zt,skinning:z.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Ce&&T.map.isVideoTexture===!0&&be.getTransfer(T.map.colorSpace)===Pe,decodeVideoTextureEmissive:At&&T.emissiveMap.isVideoTexture===!0&&be.getTransfer(T.emissiveMap.colorSpace)===Pe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===We,flipSided:T.side===sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ee&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&T.extensions.multiDraw===!0||se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return An.vertexUv1s=c.has(1),An.vertexUv2s=c.has(2),An.vertexUv3s=c.has(3),c.clear(),An}function p(T){let M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(let P in T.defines)M.push(P),M.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(b(M,T),A(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function b(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function A(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){let M=g[T.type],P;if(M){let q=Ai[M];P=Yo.clone(q.uniforms)}else P=T.uniforms;return P}function C(T,M){let P;for(let q=0,z=h.length;q<z;q++){let I=h[q];if(I.cacheKey===M){P=I,++P.usedTimes;break}}return P===void 0&&(P=new $g(n,M,T,o),h.push(P)),P}function R(T){if(--T.usedTimes===0){let M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function w(T){l.remove(T)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:F}}function Qg(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,l){n.get(r)[a]=l}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function jg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Fu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Pu(){let n=[],t=0,e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,f,g,E,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:E,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=E,p.group=m),t++,p}function a(u,d,f,g,E,m){let p=r(u,d,f,g,E,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,E,m){let p=r(u,d,f,g,E,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||jg),i.length>1&&i.sort(d||Fu),s.length>1&&s.sort(d||Fu)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function tE(){let n=new WeakMap;function t(i,s){let o=n.get(i),r;return o===void 0?(r=new Pu,n.set(i,[r])):s>=o.length?(r=new Pu,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function eE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new x,color:new Pt};break;case"SpotLight":e={position:new x,direction:new x,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new x,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new x,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new x,halfWidth:new x,halfHeight:new x};break}return n[t.id]=e,e}}}function nE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var iE=0;function sE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function oE(n){let t=new eE,e=nE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new x);let s=new x,o=new we,r=new we;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,b=0,A=0,y=0,C=0,R=0,w=0;c.sort(sE);for(let T=0,M=c.length;T<M;T++){let P=c[T],q=P.color,z=P.intensity,I=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=q.r*z,u+=q.g*z,d+=q.b*z;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],z);w++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,k=e.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=P.shadow.matrix,b++}i.directional[f]=H,f++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(q).multiplyScalar(z),H.distance=I,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[E]=H;let K=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,K.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[E]=K.matrix,P.castShadow){let k=e.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,i.spotShadow[E]=k,i.spotShadowMap[E]=N,y++}E++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(q).multiplyScalar(z),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let K=P.shadow,k=e.get(P);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=P.shadow.matrix,A++}i.point[g]=H,g++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(z),H.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==b||F.numPointShadows!==A||F.numSpotShadows!==y||F.numSpotMaps!==C||F.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,F.directionalLength=f,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=b,F.numPointShadows=A,F.numSpotShadows=y,F.numSpotMaps=C,F.numLightProbes=w,i.version=iE++)}function l(c,h){let u=0,d=0,f=0,g=0,E=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let A=c[p];if(A.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(A.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(A.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),r.identity(),o.copy(A.matrixWorld),o.premultiply(m),r.extractRotation(o),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(A.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function Iu(n){let t=new oE(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function rE(n){let t=new WeakMap;function e(s,o=0){let r=t.get(s),a;return r===void 0?(a=new Iu(n),t.set(s,[a])):o>=r.length?(a=new Iu(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var oc=class extends qi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rc=class extends qi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},aE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lE=`uniform sampler2D shadow_pass;
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
}`;function cE(n,t,e){let i=new Rr,s=new lt,o=new lt,r=new De,a=new oc({depthPacking:mp}),l=new rc,c={},h=e.maxTextureSize,u={[wi]:sn,[sn]:wi,[We]:We},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:aE,fragmentShader:lE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new gn;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new st(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let p=this.type;this.render=function(R,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let T=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Ri),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let z=p!==Ni&&this.type===Ni,I=p===Ni&&this.type!==Ni;for(let N=0,H=R.length;N<H;N++){let K=R[N],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let it=k.getFrameExtents();if(s.multiply(it),o.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/it.x),s.x=o.x*it.x,k.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/it.y),s.y=o.y*it.y,k.mapSize.y=o.y)),k.map===null||z===!0||I===!0){let xt=this.type!==Ni?{minFilter:Pn,magFilter:Pn}:{};k.map!==null&&k.map.dispose(),k.map=new mn(s.x,s.y,xt),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let pt=k.getViewportCount();for(let xt=0;xt<pt;xt++){let Wt=k.getViewport(xt);r.set(o.x*Wt.x,o.y*Wt.y,o.x*Wt.z,o.y*Wt.w),q.viewport(r),k.updateMatrices(K,xt),i=k.getFrustum(),y(w,F,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===Ni&&b(k,F),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,M,P)};function b(R,w){let F=t.update(E);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new mn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,F,d,E,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,F,f,E,null)}function A(R,w,F,T){let M=null,P=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)M=P;else if(M=F.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let q=M.uuid,z=w.uuid,I=c[q];I===void 0&&(I={},c[q]=I);let N=I[z];N===void 0&&(N=M.clone(),I[z]=N,w.addEventListener("dispose",C)),M=N}if(M.visible=w.visible,M.wireframe=w.wireframe,T===Ni?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let q=n.properties.get(M);q.light=F}return M}function y(R,w,F,T,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Ni)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);let z=t.update(R),I=R.material;if(Array.isArray(I)){let N=z.groups;for(let H=0,K=N.length;H<K;H++){let k=N[H],it=I[k.materialIndex];if(it&&it.visible){let pt=A(R,it,T,M);R.onBeforeShadow(n,R,w,F,z,pt,k),n.renderBufferDirect(F,null,z,pt,R,k),R.onAfterShadow(n,R,w,F,z,pt,k)}}}else if(I.visible){let N=A(R,I,T,M);R.onBeforeShadow(n,R,w,F,z,N,null),n.renderBufferDirect(F,null,z,N,R,null),R.onAfterShadow(n,R,w,F,z,N,null)}}let q=R.children;for(let z=0,I=q.length;z<I;z++)y(q[z],w,F,T,M)}function C(R){R.target.removeEventListener("dispose",C);for(let F in c){let T=c[F],M=R.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}var hE={[hl]:ul,[dl]:ml,[fl]:gl,[Uo]:pl,[ul]:hl,[ml]:dl,[gl]:fl,[pl]:Uo};function uE(n,t){function e(){let D=!1,yt=new De,$=null,nt=new De(0,0,0,0);return{setMask:function(Tt){$!==Tt&&!D&&(n.colorMask(Tt,Tt,Tt,Tt),$=Tt)},setLocked:function(Tt){D=Tt},setClear:function(Tt,Mt,ee,Ke,An){An===!0&&(Tt*=Ke,Mt*=Ke,ee*=Ke),yt.set(Tt,Mt,ee,Ke),nt.equals(yt)===!1&&(n.clearColor(Tt,Mt,ee,Ke),nt.copy(yt))},reset:function(){D=!1,$=null,nt.set(-1,0,0,0)}}}function i(){let D=!1,yt=!1,$=null,nt=null,Tt=null;return{setReversed:function(Mt){if(yt!==Mt){let ee=t.get("EXT_clip_control");yt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);let Ke=Tt;Tt=null,this.setClear(Ke)}yt=Mt},getReversed:function(){return yt},setTest:function(Mt){Mt?mt(n.DEPTH_TEST):zt(n.DEPTH_TEST)},setMask:function(Mt){$!==Mt&&!D&&(n.depthMask(Mt),$=Mt)},setFunc:function(Mt){if(yt&&(Mt=hE[Mt]),nt!==Mt){switch(Mt){case hl:n.depthFunc(n.NEVER);break;case ul:n.depthFunc(n.ALWAYS);break;case dl:n.depthFunc(n.LESS);break;case Uo:n.depthFunc(n.LEQUAL);break;case fl:n.depthFunc(n.EQUAL);break;case pl:n.depthFunc(n.GEQUAL);break;case ml:n.depthFunc(n.GREATER);break;case gl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}nt=Mt}},setLocked:function(Mt){D=Mt},setClear:function(Mt){Tt!==Mt&&(yt&&(Mt=1-Mt),n.clearDepth(Mt),Tt=Mt)},reset:function(){D=!1,$=null,nt=null,Tt=null,yt=!1}}}function s(){let D=!1,yt=null,$=null,nt=null,Tt=null,Mt=null,ee=null,Ke=null,An=null;return{setTest:function(Fe){D||(Fe?mt(n.STENCIL_TEST):zt(n.STENCIL_TEST))},setMask:function(Fe){yt!==Fe&&!D&&(n.stencilMask(Fe),yt=Fe)},setFunc:function(Fe,li,Pi){($!==Fe||nt!==li||Tt!==Pi)&&(n.stencilFunc(Fe,li,Pi),$=Fe,nt=li,Tt=Pi)},setOp:function(Fe,li,Pi){(Mt!==Fe||ee!==li||Ke!==Pi)&&(n.stencilOp(Fe,li,Pi),Mt=Fe,ee=li,Ke=Pi)},setLocked:function(Fe){D=Fe},setClear:function(Fe){An!==Fe&&(n.clearStencil(Fe),An=Fe)},reset:function(){D=!1,yt=null,$=null,nt=null,Tt=null,Mt=null,ee=null,Ke=null,An=null}}}let o=new e,r=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,E=!1,m=null,p=null,b=null,A=null,y=null,C=null,R=null,w=new Pt(0,0,0),F=0,T=!1,M=null,P=null,q=null,z=null,I=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=K>=2);let it=null,pt={},xt=n.getParameter(n.SCISSOR_BOX),Wt=n.getParameter(n.VIEWPORT),Me=new De().fromArray(xt),Q=new De().fromArray(Wt);function ut(D,yt,$,nt){let Tt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(D,Mt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<$;ee++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,nt,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(yt+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return Mt}let Dt={};Dt[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),Dt[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Dt[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),mt(n.DEPTH_TEST),r.setFunc(Uo),de(!1),Ee(Uh),mt(n.CULL_FACE),B(Ri);function mt(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function zt(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Zt(D,yt){return u[D]!==yt?(n.bindFramebuffer(D,yt),u[D]=yt,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=yt),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function se(D,yt){let $=f,nt=!1;if(D){$=d.get(yt),$===void 0&&($=[],d.set(yt,$));let Tt=D.textures;if($.length!==Tt.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,ee=Tt.length;Mt<ee;Mt++)$[Mt]=n.COLOR_ATTACHMENT0+Mt;$.length=Tt.length,nt=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,nt=!0);nt&&n.drawBuffers($)}function Ce(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let ue={[Os]:n.FUNC_ADD,[kf]:n.FUNC_SUBTRACT,[Gf]:n.FUNC_REVERSE_SUBTRACT};ue[Vf]=n.MIN,ue[Wf]=n.MAX;let Ye={[Xf]:n.ZERO,[qf]:n.ONE,[Yf]:n.SRC_COLOR,[ll]:n.SRC_ALPHA,[jf]:n.SRC_ALPHA_SATURATE,[Kf]:n.DST_COLOR,[$f]:n.DST_ALPHA,[Zf]:n.ONE_MINUS_SRC_COLOR,[cl]:n.ONE_MINUS_SRC_ALPHA,[Qf]:n.ONE_MINUS_DST_COLOR,[Jf]:n.ONE_MINUS_DST_ALPHA,[tp]:n.CONSTANT_COLOR,[ep]:n.ONE_MINUS_CONSTANT_COLOR,[np]:n.CONSTANT_ALPHA,[ip]:n.ONE_MINUS_CONSTANT_ALPHA};function B(D,yt,$,nt,Tt,Mt,ee,Ke,An,Fe){if(D===Ri){E===!0&&(zt(n.BLEND),E=!1);return}if(E===!1&&(mt(n.BLEND),E=!0),D!==zf){if(D!==m||Fe!==T){if((p!==Os||y!==Os)&&(n.blendEquation(n.FUNC_ADD),p=Os,y=Os),Fe)switch(D){case Po:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bo:n.blendFunc(n.ONE,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Po:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,A=null,C=null,R=null,w.set(0,0,0),F=0,m=D,T=Fe}return}Tt=Tt||yt,Mt=Mt||$,ee=ee||nt,(yt!==p||Tt!==y)&&(n.blendEquationSeparate(ue[yt],ue[Tt]),p=yt,y=Tt),($!==b||nt!==A||Mt!==C||ee!==R)&&(n.blendFuncSeparate(Ye[$],Ye[nt],Ye[Mt],Ye[ee]),b=$,A=nt,C=Mt,R=ee),(Ke.equals(w)===!1||An!==F)&&(n.blendColor(Ke.r,Ke.g,Ke.b,An),w.copy(Ke),F=An),m=D,T=!1}function wn(D,yt){D.side===We?zt(n.CULL_FACE):mt(n.CULL_FACE);let $=D.side===sn;yt&&($=!$),de($),D.blending===Po&&D.transparent===!1?B(Ri):B(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),o.setMask(D.colorWrite);let nt=D.stencilWrite;a.setTest(nt),nt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),At(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?mt(n.SAMPLE_ALPHA_TO_COVERAGE):zt(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function Ee(D){D!==Nf?(mt(n.CULL_FACE),D!==P&&(D===Uh?n.cullFace(n.BACK):D===Of?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):zt(n.CULL_FACE),P=D}function Gt(D){D!==q&&(H&&n.lineWidth(D),q=D)}function At(D,yt,$){D?(mt(n.POLYGON_OFFSET_FILL),(z!==yt||I!==$)&&(n.polygonOffset(yt,$),z=yt,I=$)):zt(n.POLYGON_OFFSET_FILL)}function Et(D){D?mt(n.SCISSOR_TEST):zt(n.SCISSOR_TEST)}function S(D){D===void 0&&(D=n.TEXTURE0+N-1),it!==D&&(n.activeTexture(D),it=D)}function v(D,yt,$){$===void 0&&(it===null?$=n.TEXTURE0+N-1:$=it);let nt=pt[$];nt===void 0&&(nt={type:void 0,texture:void 0},pt[$]=nt),(nt.type!==D||nt.texture!==yt)&&(it!==$&&(n.activeTexture($),it=$),n.bindTexture(D,yt||Dt[D]),nt.type=D,nt.texture=yt)}function V(){let D=pt[it];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function et(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(D){Me.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Me.copy(D))}function Ft(D){Q.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Q.copy(D))}function ye(D,yt){let $=c.get(yt);$===void 0&&($=new WeakMap,c.set(yt,$));let nt=$.get(D);nt===void 0&&(nt=n.getUniformBlockIndex(yt,D.name),$.set(D,nt))}function oe(D,yt){let nt=c.get(yt).get(D);l.get(yt)!==nt&&(n.uniformBlockBinding(yt,nt,D.__bindingPointIndex),l.set(yt,nt))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},it=null,pt={},u={},d=new WeakMap,f=[],g=null,E=!1,m=null,p=null,b=null,A=null,y=null,C=null,R=null,w=new Pt(0,0,0),F=0,T=!1,M=null,P=null,q=null,z=null,I=null,Me.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:mt,disable:zt,bindFramebuffer:Zt,drawBuffers:se,useProgram:Ce,setBlending:B,setMaterial:wn,setFlipSided:de,setCullFace:Ee,setLineWidth:Gt,setPolygonOffset:At,setScissorTest:Et,activeTexture:S,bindTexture:v,unbindTexture:V,compressedTexImage2D:et,compressedTexImage3D:ot,texImage2D:Ct,texImage3D:qt,updateUBOMapping:ye,uniformBlockBinding:oe,texStorage2D:_e,texStorage3D:dt,texSubImage2D:j,texSubImage3D:Nt,compressedTexSubImage2D:vt,compressedTexSubImage3D:wt,scissor:$t,viewport:Ft,reset:Oe}}function Du(n,t,e,i){let s=dE(i);switch(e){case Ju:return n*t;case Qu:return n*t;case ju:return n*t*2;case td:return n*t/s.components*s.byteLength;case Hc:return n*t/s.components*s.byteLength;case ed:return n*t*2/s.components*s.byteLength;case Nc:return n*t*2/s.components*s.byteLength;case Ku:return n*t*3/s.components*s.byteLength;case Xn:return n*t*4/s.components*s.byteLength;case Oc:return n*t*4/s.components*s.byteLength;case _a:case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Aa:case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:case Al:return Math.max(n,16)*Math.max(t,8)/4;case Ml:case bl:return Math.max(n,8)*Math.max(t,8)/2;case Tl:case Sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Sa:case kl:case Gl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case nd:case Vl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dE(n){switch(n){case Vi:case Yu:return{byteLength:1,components:1};case Sr:case Zu:case Nn:return{byteLength:2,components:1};case Bc:case Uc:return{byteLength:2,components:4};case Wi:case Lc:case zi:return{byteLength:4,components:1};case $u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function fE(n,t,e,i,s,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return f?new OffscreenCanvas(S,v):Ca("canvas")}function E(S,v,V){let et=1,ot=Et(S);if((ot.width>V||ot.height>V)&&(et=V/Math.max(ot.width,ot.height)),et<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let j=Math.floor(et*ot.width),Nt=Math.floor(et*ot.height);u===void 0&&(u=g(j,Nt));let vt=v?g(j,Nt):u;return vt.width=j,vt.height=Nt,vt.getContext("2d").drawImage(S,0,0,j,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+j+"x"+Nt+")."),vt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(S,v,V,et,ot=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let j=v;if(v===n.RED&&(V===n.FLOAT&&(j=n.R32F),V===n.HALF_FLOAT&&(j=n.R16F),V===n.UNSIGNED_BYTE&&(j=n.R8)),v===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.R8UI),V===n.UNSIGNED_SHORT&&(j=n.R16UI),V===n.UNSIGNED_INT&&(j=n.R32UI),V===n.BYTE&&(j=n.R8I),V===n.SHORT&&(j=n.R16I),V===n.INT&&(j=n.R32I)),v===n.RG&&(V===n.FLOAT&&(j=n.RG32F),V===n.HALF_FLOAT&&(j=n.RG16F),V===n.UNSIGNED_BYTE&&(j=n.RG8)),v===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RG8UI),V===n.UNSIGNED_SHORT&&(j=n.RG16UI),V===n.UNSIGNED_INT&&(j=n.RG32UI),V===n.BYTE&&(j=n.RG8I),V===n.SHORT&&(j=n.RG16I),V===n.INT&&(j=n.RG32I)),v===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGB8UI),V===n.UNSIGNED_SHORT&&(j=n.RGB16UI),V===n.UNSIGNED_INT&&(j=n.RGB32UI),V===n.BYTE&&(j=n.RGB8I),V===n.SHORT&&(j=n.RGB16I),V===n.INT&&(j=n.RGB32I)),v===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),V===n.UNSIGNED_INT&&(j=n.RGBA32UI),V===n.BYTE&&(j=n.RGBA8I),V===n.SHORT&&(j=n.RGBA16I),V===n.INT&&(j=n.RGBA32I)),v===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),v===n.RGBA){let Nt=ot?Ja:be.getTransfer(et);V===n.FLOAT&&(j=n.RGBA32F),V===n.HALF_FLOAT&&(j=n.RGBA16F),V===n.UNSIGNED_BYTE&&(j=Nt===Pe?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(S,v){let V;return S?v===null||v===Wi||v===Oo?V=n.DEPTH24_STENCIL8:v===zi?V=n.DEPTH32F_STENCIL8:v===Sr&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wi||v===Oo?V=n.DEPTH_COMPONENT24:v===zi?V=n.DEPTH_COMPONENT32F:v===Sr&&(V=n.DEPTH_COMPONENT16),V}function C(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Pn&&S.minFilter!==Si?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function R(S){let v=S.target;v.removeEventListener("dispose",R),F(v),v.isVideoTexture&&h.delete(v)}function w(S){let v=S.target;v.removeEventListener("dispose",w),M(v)}function F(S){let v=i.get(S);if(v.__webglInit===void 0)return;let V=S.source,et=d.get(V);if(et){let ot=et[v.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&T(S),Object.keys(et).length===0&&d.delete(V)}i.remove(S)}function T(S){let v=i.get(S);n.deleteTexture(v.__webglTexture);let V=S.source,et=d.get(V);delete et[v.__cacheKey],r.memory.textures--}function M(S){let v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(v.__webglFramebuffer[et]))for(let ot=0;ot<v.__webglFramebuffer[et].length;ot++)n.deleteFramebuffer(v.__webglFramebuffer[et][ot]);else n.deleteFramebuffer(v.__webglFramebuffer[et]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[et])}else{if(Array.isArray(v.__webglFramebuffer))for(let et=0;et<v.__webglFramebuffer.length;et++)n.deleteFramebuffer(v.__webglFramebuffer[et]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let et=0;et<v.__webglColorRenderbuffer.length;et++)v.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[et]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=S.textures;for(let et=0,ot=V.length;et<ot;et++){let j=i.get(V[et]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),r.memory.textures--),i.remove(V[et])}i.remove(S)}let P=0;function q(){P=0}function z(){let S=P;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),P+=1,S}function I(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function N(S,v){let V=i.get(S);if(S.isVideoTexture&&Gt(S),S.isRenderTargetTexture===!1&&S.version>0&&V.__version!==S.version){let et=S.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,S,v);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+v)}function H(S,v){let V=i.get(S);if(S.version>0&&V.__version!==S.version){Q(V,S,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+v)}function K(S,v){let V=i.get(S);if(S.version>0&&V.__version!==S.version){Q(V,S,v);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+v)}function k(S,v){let V=i.get(S);if(S.version>0&&V.__version!==S.version){ut(V,S,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+v)}let it={[Un]:n.REPEAT,[ks]:n.CLAMP_TO_EDGE,[vl]:n.MIRRORED_REPEAT},pt={[Pn]:n.NEAREST,[fp]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[Si]:n.LINEAR,[R0]:n.LINEAR_MIPMAP_NEAREST,[Gs]:n.LINEAR_MIPMAP_LINEAR},xt={[Ep]:n.NEVER,[Ap]:n.ALWAYS,[yp]:n.LESS,[sd]:n.LEQUAL,[vp]:n.EQUAL,[bp]:n.GEQUAL,[Mp]:n.GREATER,[_p]:n.NOTEQUAL};function Wt(S,v){if(v.type===zi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Si||v.magFilter===R0||v.magFilter===Yr||v.magFilter===Gs||v.minFilter===Si||v.minFilter===R0||v.minFilter===Yr||v.minFilter===Gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,it[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,it[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,it[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,pt[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,pt[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,xt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Pn||v.minFilter!==Yr&&v.minFilter!==Gs||v.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Me(S,v){let V=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",R));let et=v.source,ot=d.get(et);ot===void 0&&(ot={},d.set(et,ot));let j=I(v);if(j!==S.__cacheKey){ot[j]===void 0&&(ot[j]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,V=!0),ot[j].usedTimes++;let Nt=ot[S.__cacheKey];Nt!==void 0&&(ot[S.__cacheKey].usedTimes--,Nt.usedTimes===0&&T(v)),S.__cacheKey=j,S.__webglTexture=ot[j].texture}return V}function Q(S,v,V){let et=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=n.TEXTURE_3D);let ot=Me(S,v),j=v.source;e.bindTexture(et,S.__webglTexture,n.TEXTURE0+V);let Nt=i.get(j);if(j.version!==Nt.__version||ot===!0){e.activeTexture(n.TEXTURE0+V);let vt=be.getPrimaries(be.workingColorSpace),wt=v.colorSpace===fs?null:be.getPrimaries(v.colorSpace),_e=v.colorSpace===fs||vt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let dt=E(v.image,!1,s.maxTextureSize);dt=At(v,dt);let Ct=o.convert(v.format,v.colorSpace),qt=o.convert(v.type),$t=A(v.internalFormat,Ct,qt,v.colorSpace,v.isVideoTexture);Wt(et,v);let Ft,ye=v.mipmaps,oe=v.isVideoTexture!==!0,Oe=Nt.__version===void 0||ot===!0,D=j.dataReady,yt=C(v,dt);if(v.isDepthTexture)$t=y(v.format===zo,v.type),Oe&&(oe?e.texStorage2D(n.TEXTURE_2D,1,$t,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,$t,dt.width,dt.height,0,Ct,qt,null));else if(v.isDataTexture)if(ye.length>0){oe&&Oe&&e.texStorage2D(n.TEXTURE_2D,yt,$t,ye[0].width,ye[0].height);for(let $=0,nt=ye.length;$<nt;$++)Ft=ye[$],oe?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Ft.width,Ft.height,Ct,qt,Ft.data):e.texImage2D(n.TEXTURE_2D,$,$t,Ft.width,Ft.height,0,Ct,qt,Ft.data);v.generateMipmaps=!1}else oe?(Oe&&e.texStorage2D(n.TEXTURE_2D,yt,$t,dt.width,dt.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,Ct,qt,dt.data)):e.texImage2D(n.TEXTURE_2D,0,$t,dt.width,dt.height,0,Ct,qt,dt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){oe&&Oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,$t,ye[0].width,ye[0].height,dt.depth);for(let $=0,nt=ye.length;$<nt;$++)if(Ft=ye[$],v.format!==Xn)if(Ct!==null)if(oe){if(D)if(v.layerUpdates.size>0){let Tt=Du(Ft.width,Ft.height,v.format,v.type);for(let Mt of v.layerUpdates){let ee=Ft.data.subarray(Mt*Tt/Ft.data.BYTES_PER_ELEMENT,(Mt+1)*Tt/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,Mt,Ft.width,Ft.height,1,Ct,ee)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ft.width,Ft.height,dt.depth,Ct,Ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,$t,Ft.width,Ft.height,dt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ft.width,Ft.height,dt.depth,Ct,qt,Ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,$t,Ft.width,Ft.height,dt.depth,0,Ct,qt,Ft.data)}else{oe&&Oe&&e.texStorage2D(n.TEXTURE_2D,yt,$t,ye[0].width,ye[0].height);for(let $=0,nt=ye.length;$<nt;$++)Ft=ye[$],v.format!==Xn?Ct!==null?oe?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Ft.width,Ft.height,Ct,Ft.data):e.compressedTexImage2D(n.TEXTURE_2D,$,$t,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Ft.width,Ft.height,Ct,qt,Ft.data):e.texImage2D(n.TEXTURE_2D,$,$t,Ft.width,Ft.height,0,Ct,qt,Ft.data)}else if(v.isDataArrayTexture)if(oe){if(Oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,$t,dt.width,dt.height,dt.depth),D)if(v.layerUpdates.size>0){let $=Du(dt.width,dt.height,v.format,v.type);for(let nt of v.layerUpdates){let Tt=dt.data.subarray(nt*$/dt.data.BYTES_PER_ELEMENT,(nt+1)*$/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,dt.width,dt.height,1,Ct,qt,Tt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,qt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,$t,dt.width,dt.height,dt.depth,0,Ct,qt,dt.data);else if(v.isData3DTexture)oe?(Oe&&e.texStorage3D(n.TEXTURE_3D,yt,$t,dt.width,dt.height,dt.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,qt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,$t,dt.width,dt.height,dt.depth,0,Ct,qt,dt.data);else if(v.isFramebufferTexture){if(Oe)if(oe)e.texStorage2D(n.TEXTURE_2D,yt,$t,dt.width,dt.height);else{let $=dt.width,nt=dt.height;for(let Tt=0;Tt<yt;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,$t,$,nt,0,Ct,qt,null),$>>=1,nt>>=1}}else if(ye.length>0){if(oe&&Oe){let $=Et(ye[0]);e.texStorage2D(n.TEXTURE_2D,yt,$t,$.width,$.height)}for(let $=0,nt=ye.length;$<nt;$++)Ft=ye[$],oe?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Ct,qt,Ft):e.texImage2D(n.TEXTURE_2D,$,$t,Ct,qt,Ft);v.generateMipmaps=!1}else if(oe){if(Oe){let $=Et(dt);e.texStorage2D(n.TEXTURE_2D,yt,$t,$.width,$.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,qt,dt)}else e.texImage2D(n.TEXTURE_2D,0,$t,Ct,qt,dt);m(v)&&p(et),Nt.__version=j.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ut(S,v,V){if(v.image.length!==6)return;let et=Me(S,v),ot=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+V);let j=i.get(ot);if(ot.version!==j.__version||et===!0){e.activeTexture(n.TEXTURE0+V);let Nt=be.getPrimaries(be.workingColorSpace),vt=v.colorSpace===fs?null:be.getPrimaries(v.colorSpace),wt=v.colorSpace===fs||Nt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let _e=v.isCompressedTexture||v.image[0].isCompressedTexture,dt=v.image[0]&&v.image[0].isDataTexture,Ct=[];for(let nt=0;nt<6;nt++)!_e&&!dt?Ct[nt]=E(v.image[nt],!0,s.maxCubemapSize):Ct[nt]=dt?v.image[nt].image:v.image[nt],Ct[nt]=At(v,Ct[nt]);let qt=Ct[0],$t=o.convert(v.format,v.colorSpace),Ft=o.convert(v.type),ye=A(v.internalFormat,$t,Ft,v.colorSpace),oe=v.isVideoTexture!==!0,Oe=j.__version===void 0||et===!0,D=ot.dataReady,yt=C(v,qt);Wt(n.TEXTURE_CUBE_MAP,v);let $;if(_e){oe&&Oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,ye,qt.width,qt.height);for(let nt=0;nt<6;nt++){$=Ct[nt].mipmaps;for(let Tt=0;Tt<$.length;Tt++){let Mt=$[Tt];v.format!==Xn?$t!==null?oe?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,Mt.width,Mt.height,$t,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,ye,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,Mt.width,Mt.height,$t,Ft,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,ye,Mt.width,Mt.height,0,$t,Ft,Mt.data)}}}else{if($=v.mipmaps,oe&&Oe){$.length>0&&yt++;let nt=Et(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,ye,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(dt){oe?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ct[nt].width,Ct[nt].height,$t,Ft,Ct[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ye,Ct[nt].width,Ct[nt].height,0,$t,Ft,Ct[nt].data);for(let Tt=0;Tt<$.length;Tt++){let ee=$[Tt].image[nt].image;oe?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,ee.width,ee.height,$t,Ft,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,ye,ee.width,ee.height,0,$t,Ft,ee.data)}}else{oe?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,$t,Ft,Ct[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ye,$t,Ft,Ct[nt]);for(let Tt=0;Tt<$.length;Tt++){let Mt=$[Tt];oe?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,$t,Ft,Mt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,ye,$t,Ft,Mt.image[nt])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),j.__version=ot.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Dt(S,v,V,et,ot,j){let Nt=o.convert(V.format,V.colorSpace),vt=o.convert(V.type),wt=A(V.internalFormat,Nt,vt,V.colorSpace),_e=i.get(v),dt=i.get(V);if(dt.__renderTarget=v,!_e.__hasExternalTextures){let Ct=Math.max(1,v.width>>j),qt=Math.max(1,v.height>>j);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,j,wt,Ct,qt,v.depth,0,Nt,vt,null):e.texImage2D(ot,j,wt,Ct,qt,0,Nt,vt,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),Ee(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,ot,dt.__webglTexture,0,de(v)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,ot,dt.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(S,v,V){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){let et=v.depthTexture,ot=et&&et.isDepthTexture?et.type:null,j=y(v.stencilBuffer,ot),Nt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=de(v);Ee(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt,j,v.width,v.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,j,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Nt,n.RENDERBUFFER,S)}else{let et=v.textures;for(let ot=0;ot<et.length;ot++){let j=et[ot],Nt=o.convert(j.format,j.colorSpace),vt=o.convert(j.type),wt=A(j.internalFormat,Nt,vt,j.colorSpace),_e=de(v);V&&Ee(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,wt,v.width,v.height):Ee(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,wt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,wt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=i.get(v.depthTexture);et.__renderTarget=v,(!et.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),N(v.depthTexture,0);let ot=et.__webglTexture,j=de(v);if(v.depthTexture.format===Io)Ee(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0);else if(v.depthTexture.format===zo)Ee(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Zt(S){let v=i.get(S),V=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let et=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),et){let ot=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,et.removeEventListener("dispose",ot)};et.addEventListener("dispose",ot),v.__depthDisposeCallback=ot}v.__boundDepthTexture=et}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");zt(v.__webglFramebuffer,S)}else if(V){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]===void 0)v.__webglDepthbuffer[et]=n.createRenderbuffer(),mt(v.__webglDepthbuffer[et],S,!1);else{let ot=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),mt(v.__webglDepthbuffer,S,!1);else{let et=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function se(S,v,V){let et=i.get(S);v!==void 0&&Dt(et.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Zt(S)}function Ce(S){let v=S.texture,V=i.get(S),et=i.get(v);S.addEventListener("dispose",w);let ot=S.textures,j=S.isWebGLCubeRenderTarget===!0,Nt=ot.length>1;if(Nt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=v.version,r.memory.textures++),j){V.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[vt]=[];for(let wt=0;wt<v.mipmaps.length;wt++)V.__webglFramebuffer[vt][wt]=n.createFramebuffer()}else V.__webglFramebuffer[vt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let vt=0;vt<v.mipmaps.length;vt++)V.__webglFramebuffer[vt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Nt)for(let vt=0,wt=ot.length;vt<wt;vt++){let _e=i.get(ot[vt]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),r.memory.textures++)}if(S.samples>0&&Ee(S)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let vt=0;vt<ot.length;vt++){let wt=ot[vt];V.__webglColorRenderbuffer[vt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[vt]);let _e=o.convert(wt.format,wt.colorSpace),dt=o.convert(wt.type),Ct=A(wt.internalFormat,_e,dt,wt.colorSpace,S.isXRRenderTarget===!0),qt=de(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,Ct,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,V.__webglColorRenderbuffer[vt])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(V.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),Wt(n.TEXTURE_CUBE_MAP,v);for(let vt=0;vt<6;vt++)if(v.mipmaps&&v.mipmaps.length>0)for(let wt=0;wt<v.mipmaps.length;wt++)Dt(V.__webglFramebuffer[vt][wt],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt);else Dt(V.__webglFramebuffer[vt],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let vt=0,wt=ot.length;vt<wt;vt++){let _e=ot[vt],dt=i.get(_e);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),Wt(n.TEXTURE_2D,_e),Dt(V.__webglFramebuffer,S,_e,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,0),m(_e)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(vt=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,et.__webglTexture),Wt(vt,v),v.mipmaps&&v.mipmaps.length>0)for(let wt=0;wt<v.mipmaps.length;wt++)Dt(V.__webglFramebuffer[wt],S,v,n.COLOR_ATTACHMENT0,vt,wt);else Dt(V.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,vt,0);m(v)&&p(vt),e.unbindTexture()}S.depthBuffer&&Zt(S)}function ue(S){let v=S.textures;for(let V=0,et=v.length;V<et;V++){let ot=v[V];if(m(ot)){let j=b(S),Nt=i.get(ot).__webglTexture;e.bindTexture(j,Nt),p(j),e.unbindTexture()}}}let Ye=[],B=[];function wn(S){if(S.samples>0){if(Ee(S)===!1){let v=S.textures,V=S.width,et=S.height,ot=n.COLOR_BUFFER_BIT,j=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Nt=i.get(S),vt=v.length>1;if(vt)for(let wt=0;wt<v.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let wt=0;wt<v.length;wt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),vt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Nt.__webglColorRenderbuffer[wt]);let _e=i.get(v[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,V,et,0,0,V,et,ot,n.NEAREST),l===!0&&(Ye.length=0,B.length=0,Ye.push(n.COLOR_ATTACHMENT0+wt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ye.push(j),B.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ye))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),vt)for(let wt=0;wt<v.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,Nt.__webglColorRenderbuffer[wt]);let _e=i.get(v[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,_e,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function de(S){return Math.min(s.maxSamples,S.samples)}function Ee(S){let v=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Gt(S){let v=r.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function At(S,v){let V=S.colorSpace,et=S.format,ot=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||V!==vs&&V!==fs&&(be.getTransfer(V)===Pe?(et!==Xn||ot!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function Et(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=q,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ee}function pE(n,t){function e(i,s=fs){let o,r=be.getTransfer(s);if(i===Vi)return n.UNSIGNED_BYTE;if(i===Bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$u)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yu)return n.BYTE;if(i===Zu)return n.SHORT;if(i===Sr)return n.UNSIGNED_SHORT;if(i===Lc)return n.INT;if(i===Wi)return n.UNSIGNED_INT;if(i===zi)return n.FLOAT;if(i===Nn)return n.HALF_FLOAT;if(i===Ju)return n.ALPHA;if(i===Ku)return n.RGB;if(i===Xn)return n.RGBA;if(i===Qu)return n.LUMINANCE;if(i===ju)return n.LUMINANCE_ALPHA;if(i===Io)return n.DEPTH_COMPONENT;if(i===zo)return n.DEPTH_STENCIL;if(i===td)return n.RED;if(i===Hc)return n.RED_INTEGER;if(i===ed)return n.RG;if(i===Nc)return n.RG_INTEGER;if(i===Oc)return n.RGBA_INTEGER;if(i===_a||i===ba||i===Aa||i===Ta)if(r===Pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===_a)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===_a)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ba)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Aa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ta)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===_l||i===bl||i===Al)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ml)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_l)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Al)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Sl||i===Rl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Tl||i===Sl)return r===Pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Rl)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xl||i===wl||i===Cl||i===Fl||i===Pl||i===Il||i===Dl||i===Ll||i===Bl||i===Ul||i===Hl||i===Nl||i===Ol||i===zl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===xl)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wl)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cl)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pl)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Il)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dl)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ll)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bl)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ul)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hl)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nl)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ol)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zl)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sa||i===kl||i===Gl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Sa)return r===Pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nd||i===Vl||i===Wl||i===Xl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Sa)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Vl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Oo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var ac=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},J=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},mE={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new J,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new J,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new J,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let E of t.hand.values()){let m=e.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new J;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},gE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EE=`
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

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Hn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new on({vertexShader:gE,fragmentShader:EE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new St(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends gs{constructor(t,e){super();let i=this,s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,E=new lc,m=e.getContextAttributes(),p=null,b=null,A=[],y=[],C=new lt,R=null,w=new _n;w.viewport=new De;let F=new _n;F.viewport=new De;let T=[w,F],M=new ac,P=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ut=A[Q];return ut===void 0&&(ut=new br,A[Q]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Q){let ut=A[Q];return ut===void 0&&(ut=new br,A[Q]=ut),ut.getGripSpace()},this.getHand=function(Q){let ut=A[Q];return ut===void 0&&(ut=new br,A[Q]=ut),ut.getHandSpace()};function z(Q){let ut=y.indexOf(Q.inputSource);if(ut===-1)return;let Dt=A[ut];Dt!==void 0&&(Dt.update(Q.inputSource,Q.frame,c||r),Dt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function I(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",N);for(let Q=0;Q<A.length;Q++){let ut=y[Q];ut!==null&&(y[Q]=null,A[Q].disconnect(ut))}P=null,q=null,E.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,Me.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",I),s.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new mn(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,Dt=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?zo:Io,Dt=m.stencil?Oo:Wi);let zt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new mn(d.textureWidth,d.textureHeight,{format:Xn,type:Vi,depthTexture:new Wo(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function N(Q){for(let ut=0;ut<Q.removed.length;ut++){let Dt=Q.removed[ut],mt=y.indexOf(Dt);mt>=0&&(y[mt]=null,A[mt].disconnect(Dt))}for(let ut=0;ut<Q.added.length;ut++){let Dt=Q.added[ut],mt=y.indexOf(Dt);if(mt===-1){for(let Zt=0;Zt<A.length;Zt++)if(Zt>=y.length){y.push(Dt),mt=Zt;break}else if(y[Zt]===null){y[Zt]=Dt,mt=Zt;break}if(mt===-1)break}let zt=A[mt];zt&&zt.connect(Dt)}}let H=new x,K=new x;function k(Q,ut,Dt){H.setFromMatrixPosition(ut.matrixWorld),K.setFromMatrixPosition(Dt.matrixWorld);let mt=H.distanceTo(K),zt=ut.projectionMatrix.elements,Zt=Dt.projectionMatrix.elements,se=zt[14]/(zt[10]-1),Ce=zt[14]/(zt[10]+1),ue=(zt[9]+1)/zt[5],Ye=(zt[9]-1)/zt[5],B=(zt[8]-1)/zt[0],wn=(Zt[8]+1)/Zt[0],de=se*B,Ee=se*wn,Gt=mt/(-B+wn),At=Gt*-B;if(ut.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(At),Q.translateZ(Gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),zt[10]===-1)Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let Et=se+Gt,S=Ce+Gt,v=de-At,V=Ee+(mt-At),et=ue*Ce/S*Et,ot=Ye*Ce/S*Et;Q.projectionMatrix.makePerspective(v,V,et,ot,Et,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function it(Q,ut){ut===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ut.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ut=Q.near,Dt=Q.far;E.texture!==null&&(E.depthNear>0&&(ut=E.depthNear),E.depthFar>0&&(Dt=E.depthFar)),M.near=F.near=w.near=ut,M.far=F.far=w.far=Dt,(P!==M.near||q!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,q=M.far),w.layers.mask=Q.layers.mask|2,F.layers.mask=Q.layers.mask|4,M.layers.mask=w.layers.mask|F.layers.mask;let mt=Q.parent,zt=M.cameras;it(M,mt);for(let Zt=0;Zt<zt.length;Zt++)it(zt[Zt],mt);zt.length===2?k(M,w,F):M.projectionMatrix.copy(w.projectionMatrix),pt(Q,M,mt)};function pt(Q,ut,Dt){Dt===null?Q.matrix.copy(ut.matrixWorld):(Q.matrix.copy(Dt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ut.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=wa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(M)};let xt=null;function Wt(Q,ut){if(h=ut.getViewerPose(c||r),g=ut,h!==null){let Dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let mt=!1;Dt.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let Zt=0;Zt<Dt.length;Zt++){let se=Dt[Zt],Ce=null;if(f!==null)Ce=f.getViewport(se);else{let Ye=u.getViewSubImage(d,se);Ce=Ye.viewport,Zt===0&&(t.setRenderTargetTextures(b,Ye.colorTexture,d.ignoreDepthValues?void 0:Ye.depthStencilTexture),t.setRenderTarget(b))}let ue=T[Zt];ue===void 0&&(ue=new _n,ue.layers.enable(Zt),ue.viewport=new De,T[Zt]=ue),ue.matrix.fromArray(se.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(se.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Zt===0&&(M.matrix.copy(ue.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(ue)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Zt=u.getDepthInformation(Dt[0]);Zt&&Zt.isValid&&Zt.texture&&E.init(t,Zt,s.renderState)}}for(let Dt=0;Dt<A.length;Dt++){let mt=y[Dt],zt=A[Dt];mt!==null&&zt!==void 0&&zt.update(mt,ut,c||r)}xt&&xt(Q,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),g=null}let Me=new ld;Me.setAnimationLoop(Wt),this.setAnimationLoop=function(Q){xt=Q},this.dispose=function(){}}},Hs=new Xi,yE=new we;function vE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ad(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,A,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),E(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),A=b.envMap,y=b.envMapRotation;A&&(m.envMap.value=A,Hs.copy(y),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),m.envMapRotation.value.setFromMatrix4(yE.makeRotationFromEuler(Hs)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ME(n,t,e,i){let s={},o={},r=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){let y=A.program;i.uniformBlockBinding(b,y)}function c(b,A){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));let C=A.program;i.updateUBOMapping(b,C);let R=t.render.frame;o[b.id]!==R&&(d(b),o[b.id]=R)}function h(b){let A=u();b.__bindingPointIndex=A;let y=n.createBuffer(),C=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function u(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let A=s[b.id],y=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let R=0,w=y.length;R<w;R++){let F=Array.isArray(y[R])?y[R]:[y[R]];for(let T=0,M=F.length;T<M;T++){let P=F[T];if(f(P,R,T,C)===!0){let q=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],I=0;for(let N=0;N<z.length;N++){let H=z[N],K=E(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,q+I,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,A,y,C){let R=b.value,w=A+"_"+y;if(C[w]===void 0)return typeof R=="number"||typeof R=="boolean"?C[w]=R:C[w]=R.clone(),!0;{let F=C[w];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return C[w]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(b){let A=b.uniforms,y=0,C=16;for(let w=0,F=A.length;w<F;w++){let T=Array.isArray(A[w])?A[w]:[A[w]];for(let M=0,P=T.length;M<P;M++){let q=T[M],z=Array.isArray(q.value)?q.value:[q.value];for(let I=0,N=z.length;I<N;I++){let H=z[I],K=E(H),k=y%C,it=k%K.boundary,pt=k+it;y+=it,pt!==0&&C-pt<K.storage&&(y+=C-pt),q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=K.storage}}}let R=y%C;return R>0&&(y+=C-R),b.__size=y,b.__cache={},this}function E(b){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),A}function m(b){let A=b.target;A.removeEventListener("dispose",m);let y=r.indexOf(A.__bindingPointIndex);r.splice(y,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete o[A.id]}function p(){for(let b in s)n.deleteBuffer(s[b]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}var Oa=class{constructor(t={}){let{canvas:e=Sp(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;let g=new Uint32Array(4),E=new Int32Array(4),m=null,p=null,b=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=xi,this.toneMappingExposure=1;let y=this,C=!1,R=0,w=0,F=null,T=-1,M=null,P=new De,q=new De,z=null,I=new Pt(0),N=0,H=e.width,K=e.height,k=1,it=null,pt=null,xt=new De(0,0,H,K),Wt=new De(0,0,H,K),Me=!1,Q=new Rr,ut=!1,Dt=!1,mt=new we,zt=new we,Zt=new x,se=new De,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function Ye(){return F===null?k:1}let B=i;function wn(_,L){return e.getContext(_,L)}try{let _={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ic}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),B===null){let L="webgl2";if(B=wn(L,_),B===null)throw wn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let de,Ee,Gt,At,Et,S,v,V,et,ot,j,Nt,vt,wt,_e,dt,Ct,qt,$t,Ft,ye,oe,Oe,D;function yt(){de=new U2(B),de.init(),oe=new pE(B,de),Ee=new F2(B,de,t,oe),Gt=new uE(B,de),Ee.reverseDepthBuffer&&d&&Gt.buffers.depth.setReversed(!0),At=new O2(B),Et=new Qg,S=new fE(B,de,Gt,Et,Ee,oe,At),v=new I2(y),V=new B2(y),et=new qp(B),Oe=new w2(B,et),ot=new H2(B,et,At,Oe),j=new k2(B,ot,et,At),$t=new z2(B,Ee,S),dt=new P2(Et),Nt=new Kg(y,v,V,de,Ee,Oe,dt),vt=new vE(y,Et),wt=new tE,_e=new rE(de),qt=new x2(y,v,V,Gt,j,f,l),Ct=new cE(y,j,Ee),D=new ME(B,At,Ee,Gt),Ft=new C2(B,de,At),ye=new N2(B,de,At),At.programs=Nt.programs,y.capabilities=Ee,y.extensions=de,y.properties=Et,y.renderLists=wt,y.shadowMap=Ct,y.state=Gt,y.info=At}yt();let $=new cc(y,B);this.xr=$,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let _=de.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=de.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(_){_!==void 0&&(k=_,this.setSize(H,K,!1))},this.getSize=function(_){return _.set(H,K)},this.setSize=function(_,L,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=_,K=L,e.width=Math.floor(_*k),e.height=Math.floor(L*k),W===!0&&(e.style.width=_+"px",e.style.height=L+"px"),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(H*k,K*k).floor()},this.setDrawingBufferSize=function(_,L,W){H=_,K=L,k=W,e.width=Math.floor(_*W),e.height=Math.floor(L*W),this.setViewport(0,0,_,L)},this.getCurrentViewport=function(_){return _.copy(P)},this.getViewport=function(_){return _.copy(xt)},this.setViewport=function(_,L,W,X){_.isVector4?xt.set(_.x,_.y,_.z,_.w):xt.set(_,L,W,X),Gt.viewport(P.copy(xt).multiplyScalar(k).round())},this.getScissor=function(_){return _.copy(Wt)},this.setScissor=function(_,L,W,X){_.isVector4?Wt.set(_.x,_.y,_.z,_.w):Wt.set(_,L,W,X),Gt.scissor(q.copy(Wt).multiplyScalar(k).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(_){Gt.setScissorTest(Me=_)},this.setOpaqueSort=function(_){it=_},this.setTransparentSort=function(_){pt=_},this.getClearColor=function(_){return _.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(_=!0,L=!0,W=!0){let X=0;if(_){let U=!1;if(F!==null){let ft=F.texture.format;U=ft===Oc||ft===Nc||ft===Hc}if(U){let ft=F.texture.type,_t=ft===Vi||ft===Wi||ft===Sr||ft===Oo||ft===Bc||ft===Uc,Lt=qt.getClearColor(),Bt=qt.getClearAlpha(),Qt=Lt.r,ne=Lt.g,Ut=Lt.b;_t?(g[0]=Qt,g[1]=ne,g[2]=Ut,g[3]=Bt,B.clearBufferuiv(B.COLOR,0,g)):(E[0]=Qt,E[1]=ne,E[2]=Ut,E[3]=Bt,B.clearBufferiv(B.COLOR,0,E))}else X|=B.COLOR_BUFFER_BIT}L&&(X|=B.DEPTH_BUFFER_BIT),W&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),wt.dispose(),_e.dispose(),Et.dispose(),v.dispose(),V.dispose(),j.dispose(),Oe.dispose(),D.dispose(),Nt.dispose(),$.dispose(),$.removeEventListener("sessionstart",wh),$.removeEventListener("sessionend",Ch),Ps.stop()};function nt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let _=At.autoReset,L=Ct.enabled,W=Ct.autoUpdate,X=Ct.needsUpdate,U=Ct.type;yt(),At.autoReset=_,Ct.enabled=L,Ct.autoUpdate=W,Ct.needsUpdate=X,Ct.type=U}function Mt(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ee(_){let L=_.target;L.removeEventListener("dispose",ee),Ke(L)}function Ke(_){An(_),Et.remove(_)}function An(_){let L=Et.get(_).programs;L!==void 0&&(L.forEach(function(W){Nt.releaseProgram(W)}),_.isShaderMaterial&&Nt.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,W,X,U,ft){L===null&&(L=Ce);let _t=U.isMesh&&U.matrixWorld.determinant()<0,Lt=Bf(_,L,W,X,U);Gt.setMaterial(X,_t);let Bt=W.index,Qt=1;if(X.wireframe===!0){if(Bt=ot.getWireframeAttribute(W),Bt===void 0)return;Qt=2}let ne=W.drawRange,Ut=W.attributes.position,Ae=ne.start*Qt,ze=(ne.start+ne.count)*Qt;ft!==null&&(Ae=Math.max(Ae,ft.start*Qt),ze=Math.min(ze,(ft.start+ft.count)*Qt)),Bt!==null?(Ae=Math.max(Ae,0),ze=Math.min(ze,Bt.count)):Ut!=null&&(Ae=Math.max(Ae,0),ze=Math.min(ze,Ut.count));let Ge=ze-Ae;if(Ge<0||Ge===1/0)return;Oe.setup(U,X,Lt,W,Bt);let Bn,Re=Ft;if(Bt!==null&&(Bn=et.get(Bt),Re=ye,Re.setIndex(Bn)),U.isMesh)X.wireframe===!0?(Gt.setLineWidth(X.wireframeLinewidth*Ye()),Re.setMode(B.LINES)):Re.setMode(B.TRIANGLES);else if(U.isLine){let Ot=X.linewidth;Ot===void 0&&(Ot=1),Gt.setLineWidth(Ot*Ye()),U.isLineSegments?Re.setMode(B.LINES):U.isLineLoop?Re.setMode(B.LINE_LOOP):Re.setMode(B.LINE_STRIP)}else U.isPoints?Re.setMode(B.POINTS):U.isSprite&&Re.setMode(B.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Re.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))Re.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ot=U._multiDrawStarts,Ii=U._multiDrawCounts,xe=U._multiDrawCount,ci=Bt?et.get(Bt).bytesPerElement:1,ho=Et.get(X).currentProgram.getUniforms();for(let Gn=0;Gn<xe;Gn++)ho.setValue(B,"_gl_DrawID",Gn),Re.render(Ot[Gn]/ci,Ii[Gn])}else if(U.isInstancedMesh)Re.renderInstances(Ae,Ge,U.count);else if(W.isInstancedBufferGeometry){let Ot=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ii=Math.min(W.instanceCount,Ot);Re.renderInstances(Ae,Ge,Ii)}else Re.render(Ae,Ge)};function Fe(_,L,W){_.transparent===!0&&_.side===We&&_.forceSinglePass===!1?(_.side=sn,_.needsUpdate=!0,qr(_,L,W),_.side=wi,_.needsUpdate=!0,qr(_,L,W),_.side=We):qr(_,L,W)}this.compile=function(_,L,W=null){W===null&&(W=_),p=_e.get(W),p.init(L),A.push(p),W.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),_!==W&&_.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let X=new Set;return _.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ft=U.material;if(ft)if(Array.isArray(ft))for(let _t=0;_t<ft.length;_t++){let Lt=ft[_t];Fe(Lt,W,U),X.add(Lt)}else Fe(ft,W,U),X.add(ft)}),A.pop(),p=null,X},this.compileAsync=function(_,L,W=null){let X=this.compile(_,L,W);return new Promise(U=>{function ft(){if(X.forEach(function(_t){Et.get(_t).currentProgram.isReady()&&X.delete(_t)}),X.size===0){U(_);return}setTimeout(ft,10)}de.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let li=null;function Pi(_){li&&li(_)}function wh(){Ps.stop()}function Ch(){Ps.start()}let Ps=new ld;Ps.setAnimationLoop(Pi),typeof self<"u"&&Ps.setContext(self),this.setAnimationLoop=function(_){li=_,$.setAnimationLoop(_),_===null?Ps.stop():Ps.start()},$.addEventListener("sessionstart",wh),$.addEventListener("sessionend",Ch),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(L),L=$.getCamera()),_.isScene===!0&&_.onBeforeRender(y,_,L,F),p=_e.get(_,A.length),p.init(L),A.push(p),zt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Q.setFromProjectionMatrix(zt),Dt=this.localClippingEnabled,ut=dt.init(this.clippingPlanes,Dt),m=wt.get(_,b.length),m.init(),b.push(m),$.enabled===!0&&$.isPresenting===!0){let ft=y.xr.getDepthSensingMesh();ft!==null&&S0(ft,L,-1/0,y.sortObjects)}S0(_,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(it,pt),ue=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ue&&qt.addToRenderList(m,_),this.info.render.frame++,ut===!0&&dt.beginShadows();let W=p.state.shadowsArray;Ct.render(W,_,L),ut===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,U=m.transmissive;if(p.setupLights(),L.isArrayCamera){let ft=L.cameras;if(U.length>0)for(let _t=0,Lt=ft.length;_t<Lt;_t++){let Bt=ft[_t];Ph(X,U,_,Bt)}ue&&qt.render(_);for(let _t=0,Lt=ft.length;_t<Lt;_t++){let Bt=ft[_t];Fh(m,_,Bt,Bt.viewport)}}else U.length>0&&Ph(X,U,_,L),ue&&qt.render(_),Fh(m,_,L);F!==null&&(S.updateMultisampleRenderTarget(F),S.updateRenderTargetMipmap(F)),_.isScene===!0&&_.onAfterRender(y,_,L),Oe.resetDefaultState(),T=-1,M=null,A.pop(),A.length>0?(p=A[A.length-1],ut===!0&&dt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function S0(_,L,W,X){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)W=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Q.intersectsSprite(_)){X&&se.setFromMatrixPosition(_.matrixWorld).applyMatrix4(zt);let _t=j.update(_),Lt=_.material;Lt.visible&&m.push(_,_t,Lt,W,se.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Q.intersectsObject(_))){let _t=j.update(_),Lt=_.material;if(X&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),se.copy(_.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),se.copy(_t.boundingSphere.center)),se.applyMatrix4(_.matrixWorld).applyMatrix4(zt)),Array.isArray(Lt)){let Bt=_t.groups;for(let Qt=0,ne=Bt.length;Qt<ne;Qt++){let Ut=Bt[Qt],Ae=Lt[Ut.materialIndex];Ae&&Ae.visible&&m.push(_,_t,Ae,W,se.z,Ut)}}else Lt.visible&&m.push(_,_t,Lt,W,se.z,null)}}let ft=_.children;for(let _t=0,Lt=ft.length;_t<Lt;_t++)S0(ft[_t],L,W,X)}function Fh(_,L,W,X){let U=_.opaque,ft=_.transmissive,_t=_.transparent;p.setupLightsView(W),ut===!0&&dt.setGlobalState(y.clippingPlanes,W),X&&Gt.viewport(P.copy(X)),U.length>0&&Xr(U,L,W),ft.length>0&&Xr(ft,L,W),_t.length>0&&Xr(_t,L,W),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Ph(_,L,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new mn(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?Nn:Vi,minFilter:Gs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));let ft=p.state.transmissionRenderTarget[X.id],_t=X.viewport||P;ft.setSize(_t.z,_t.w);let Lt=y.getRenderTarget();y.setRenderTarget(ft),y.getClearColor(I),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear(),ue&&qt.render(W);let Bt=y.toneMapping;y.toneMapping=xi;let Qt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ut===!0&&dt.setGlobalState(y.clippingPlanes,X),Xr(_,W,X),S.updateMultisampleRenderTarget(ft),S.updateRenderTargetMipmap(ft),de.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Ut=0,Ae=L.length;Ut<Ae;Ut++){let ze=L[Ut],Ge=ze.object,Bn=ze.geometry,Re=ze.material,Ot=ze.group;if(Re.side===We&&Ge.layers.test(X.layers)){let Ii=Re.side;Re.side=sn,Re.needsUpdate=!0,Ih(Ge,W,X,Bn,Re,Ot),Re.side=Ii,Re.needsUpdate=!0,ne=!0}}ne===!0&&(S.updateMultisampleRenderTarget(ft),S.updateRenderTargetMipmap(ft))}y.setRenderTarget(Lt),y.setClearColor(I,N),Qt!==void 0&&(X.viewport=Qt),y.toneMapping=Bt}function Xr(_,L,W){let X=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ft=_.length;U<ft;U++){let _t=_[U],Lt=_t.object,Bt=_t.geometry,Qt=X===null?_t.material:X,ne=_t.group;Lt.layers.test(W.layers)&&Ih(Lt,L,W,Bt,Qt,ne)}}function Ih(_,L,W,X,U,ft){_.onBeforeRender(y,L,W,X,U,ft),_.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),U.onBeforeRender(y,L,W,X,_,ft),U.transparent===!0&&U.side===We&&U.forceSinglePass===!1?(U.side=sn,U.needsUpdate=!0,y.renderBufferDirect(W,L,X,U,_,ft),U.side=wi,U.needsUpdate=!0,y.renderBufferDirect(W,L,X,U,_,ft),U.side=We):y.renderBufferDirect(W,L,X,U,_,ft),_.onAfterRender(y,L,W,X,U,ft)}function qr(_,L,W){L.isScene!==!0&&(L=Ce);let X=Et.get(_),U=p.state.lights,ft=p.state.shadowsArray,_t=U.state.version,Lt=Nt.getParameters(_,U.state,ft,L,W),Bt=Nt.getProgramCacheKey(Lt),Qt=X.programs;X.environment=_.isMeshStandardMaterial?L.environment:null,X.fog=L.fog,X.envMap=(_.isMeshStandardMaterial?V:v).get(_.envMap||X.environment),X.envMapRotation=X.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,Qt===void 0&&(_.addEventListener("dispose",ee),Qt=new Map,X.programs=Qt);let ne=Qt.get(Bt);if(ne!==void 0){if(X.currentProgram===ne&&X.lightsStateVersion===_t)return Lh(_,Lt),ne}else Lt.uniforms=Nt.getUniforms(_),_.onBeforeCompile(Lt,y),ne=Nt.acquireProgram(Lt,Bt),Qt.set(Bt,ne),X.uniforms=Lt.uniforms;let Ut=X.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ut.clippingPlanes=dt.uniform),Lh(_,Lt),X.needsLights=Hf(_),X.lightsStateVersion=_t,X.needsLights&&(Ut.ambientLightColor.value=U.state.ambient,Ut.lightProbe.value=U.state.probe,Ut.directionalLights.value=U.state.directional,Ut.directionalLightShadows.value=U.state.directionalShadow,Ut.spotLights.value=U.state.spot,Ut.spotLightShadows.value=U.state.spotShadow,Ut.rectAreaLights.value=U.state.rectArea,Ut.ltc_1.value=U.state.rectAreaLTC1,Ut.ltc_2.value=U.state.rectAreaLTC2,Ut.pointLights.value=U.state.point,Ut.pointLightShadows.value=U.state.pointShadow,Ut.hemisphereLights.value=U.state.hemi,Ut.directionalShadowMap.value=U.state.directionalShadowMap,Ut.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ut.spotShadowMap.value=U.state.spotShadowMap,Ut.spotLightMatrix.value=U.state.spotLightMatrix,Ut.spotLightMap.value=U.state.spotLightMap,Ut.pointShadowMap.value=U.state.pointShadowMap,Ut.pointShadowMatrix.value=U.state.pointShadowMatrix),X.currentProgram=ne,X.uniformsList=null,ne}function Dh(_){if(_.uniformsList===null){let L=_.currentProgram.getUniforms();_.uniformsList=Lo.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function Lh(_,L){let W=Et.get(_);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function Bf(_,L,W,X,U){L.isScene!==!0&&(L=Ce),S.resetTextureUnits();let ft=L.fog,_t=X.isMeshStandardMaterial?L.environment:null,Lt=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:vs,Bt=(X.isMeshStandardMaterial?V:v).get(X.envMap||_t),Qt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ne=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ut=!!W.morphAttributes.position,Ae=!!W.morphAttributes.normal,ze=!!W.morphAttributes.color,Ge=xi;X.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ge=y.toneMapping);let Bn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Re=Bn!==void 0?Bn.length:0,Ot=Et.get(X),Ii=p.state.lights;if(ut===!0&&(Dt===!0||_!==M)){let Kn=_===M&&X.id===T;dt.setState(X,_,Kn)}let xe=!1;X.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ii.state.version||Ot.outputColorSpace!==Lt||U.isBatchedMesh&&Ot.batching===!1||!U.isBatchedMesh&&Ot.batching===!0||U.isBatchedMesh&&Ot.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ot.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ot.instancing===!1||!U.isInstancedMesh&&Ot.instancing===!0||U.isSkinnedMesh&&Ot.skinning===!1||!U.isSkinnedMesh&&Ot.skinning===!0||U.isInstancedMesh&&Ot.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ot.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ot.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ot.instancingMorph===!1&&U.morphTexture!==null||Ot.envMap!==Bt||X.fog===!0&&Ot.fog!==ft||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==dt.numPlanes||Ot.numIntersection!==dt.numIntersection)||Ot.vertexAlphas!==Qt||Ot.vertexTangents!==ne||Ot.morphTargets!==Ut||Ot.morphNormals!==Ae||Ot.morphColors!==ze||Ot.toneMapping!==Ge||Ot.morphTargetsCount!==Re)&&(xe=!0):(xe=!0,Ot.__version=X.version);let ci=Ot.currentProgram;xe===!0&&(ci=qr(X,L,U));let ho=!1,Gn=!1,hr=!1,Ve=ci.getUniforms(),bi=Ot.uniforms;if(Gt.useProgram(ci.program)&&(ho=!0,Gn=!0,hr=!0),X.id!==T&&(T=X.id,Gn=!0),ho||M!==_){Gt.buffers.depth.getReversed()?(mt.copy(_.projectionMatrix),xp(mt),wp(mt),Ve.setValue(B,"projectionMatrix",mt)):Ve.setValue(B,"projectionMatrix",_.projectionMatrix),Ve.setValue(B,"viewMatrix",_.matrixWorldInverse);let os=Ve.map.cameraPosition;os!==void 0&&os.setValue(B,Zt.setFromMatrixPosition(_.matrixWorld)),Ee.logarithmicDepthBuffer&&Ve.setValue(B,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ve.setValue(B,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,Gn=!0,hr=!0)}if(U.isSkinnedMesh){Ve.setOptional(B,U,"bindMatrix"),Ve.setOptional(B,U,"bindMatrixInverse");let Kn=U.skeleton;Kn&&(Kn.boneTexture===null&&Kn.computeBoneTexture(),Ve.setValue(B,"boneTexture",Kn.boneTexture,S))}U.isBatchedMesh&&(Ve.setOptional(B,U,"batchingTexture"),Ve.setValue(B,"batchingTexture",U._matricesTexture,S),Ve.setOptional(B,U,"batchingIdTexture"),Ve.setValue(B,"batchingIdTexture",U._indirectTexture,S),Ve.setOptional(B,U,"batchingColorTexture"),U._colorsTexture!==null&&Ve.setValue(B,"batchingColorTexture",U._colorsTexture,S));let ur=W.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&$t.update(U,W,ci),(Gn||Ot.receiveShadow!==U.receiveShadow)&&(Ot.receiveShadow=U.receiveShadow,Ve.setValue(B,"receiveShadow",U.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(bi.envMap.value=Bt,bi.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&L.environment!==null&&(bi.envMapIntensity.value=L.environmentIntensity),Gn&&(Ve.setValue(B,"toneMappingExposure",y.toneMappingExposure),Ot.needsLights&&Uf(bi,hr),ft&&X.fog===!0&&vt.refreshFogUniforms(bi,ft),vt.refreshMaterialUniforms(bi,X,k,K,p.state.transmissionRenderTarget[_.id]),Lo.upload(B,Dh(Ot),bi,S)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Lo.upload(B,Dh(Ot),bi,S),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ve.setValue(B,"center",U.center),Ve.setValue(B,"modelViewMatrix",U.modelViewMatrix),Ve.setValue(B,"normalMatrix",U.normalMatrix),Ve.setValue(B,"modelMatrix",U.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Kn=X.uniformsGroups;for(let os=0,rs=Kn.length;os<rs;os++){let Bh=Kn[os];D.update(Bh,ci),D.bind(Bh,ci)}}return ci}function Uf(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function Hf(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(_,L,W){Et.get(_.texture).__webglTexture=L,Et.get(_.depthTexture).__webglTexture=W;let X=Et.get(_);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,L){let W=Et.get(_);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(_,L=0,W=0){F=_,R=L,w=W;let X=!0,U=null,ft=!1,_t=!1;if(_){let Bt=Et.get(_);if(Bt.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(B.FRAMEBUFFER,null),X=!1;else if(Bt.__webglFramebuffer===void 0)S.setupRenderTarget(_);else if(Bt.__hasExternalTextures)S.rebindTextures(_,Et.get(_.texture).__webglTexture,Et.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ut=_.depthTexture;if(Bt.__boundDepthTexture!==Ut){if(Ut!==null&&Et.has(Ut)&&(_.width!==Ut.image.width||_.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(_)}}let Qt=_.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(_t=!0);let ne=Et.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(ne[L])?U=ne[L][W]:U=ne[L],ft=!0):_.samples>0&&S.useMultisampledRTT(_)===!1?U=Et.get(_).__webglMultisampledFramebuffer:Array.isArray(ne)?U=ne[W]:U=ne,P.copy(_.viewport),q.copy(_.scissor),z=_.scissorTest}else P.copy(xt).multiplyScalar(k).floor(),q.copy(Wt).multiplyScalar(k).floor(),z=Me;if(Gt.bindFramebuffer(B.FRAMEBUFFER,U)&&X&&Gt.drawBuffers(_,U),Gt.viewport(P),Gt.scissor(q),Gt.setScissorTest(z),ft){let Bt=Et.get(_.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+L,Bt.__webglTexture,W)}else if(_t){let Bt=Et.get(_.texture),Qt=L||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Bt.__webglTexture,W||0,Qt)}T=-1},this.readRenderTargetPixels=function(_,L,W,X,U,ft,_t){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Et.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_t!==void 0&&(Lt=Lt[_t]),Lt){Gt.bindFramebuffer(B.FRAMEBUFFER,Lt);try{let Bt=_.texture,Qt=Bt.format,ne=Bt.type;if(!Ee.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-X&&W>=0&&W<=_.height-U&&B.readPixels(L,W,X,U,oe.convert(Qt),oe.convert(ne),ft)}finally{let Bt=F!==null?Et.get(F).__webglFramebuffer:null;Gt.bindFramebuffer(B.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(_,L,W,X,U,ft,_t){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Et.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_t!==void 0&&(Lt=Lt[_t]),Lt){let Bt=_.texture,Qt=Bt.format,ne=Bt.type;if(!Ee.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=_.width-X&&W>=0&&W<=_.height-U){Gt.bindFramebuffer(B.FRAMEBUFFER,Lt);let Ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.bufferData(B.PIXEL_PACK_BUFFER,ft.byteLength,B.STREAM_READ),B.readPixels(L,W,X,U,oe.convert(Qt),oe.convert(ne),0);let Ae=F!==null?Et.get(F).__webglFramebuffer:null;Gt.bindFramebuffer(B.FRAMEBUFFER,Ae);let ze=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Rp(B,ze,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ft),B.deleteBuffer(Ut),B.deleteSync(ze),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,L=null,W=0){_.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,_=arguments[1]);let X=Math.pow(2,-W),U=Math.floor(_.image.width*X),ft=Math.floor(_.image.height*X),_t=L!==null?L.x:0,Lt=L!==null?L.y:0;S.setTexture2D(_,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,_t,Lt,U,ft),Gt.unbindTexture()},this.copyTextureToTexture=function(_,L,W=null,X=null,U=0){_.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,_=arguments[1],L=arguments[2],U=arguments[3]||0,W=null);let ft,_t,Lt,Bt,Qt,ne,Ut,Ae,ze,Ge=_.isCompressedTexture?_.mipmaps[U]:_.image;W!==null?(ft=W.max.x-W.min.x,_t=W.max.y-W.min.y,Lt=W.isBox3?W.max.z-W.min.z:1,Bt=W.min.x,Qt=W.min.y,ne=W.isBox3?W.min.z:0):(ft=Ge.width,_t=Ge.height,Lt=Ge.depth||1,Bt=0,Qt=0,ne=0),X!==null?(Ut=X.x,Ae=X.y,ze=X.z):(Ut=0,Ae=0,ze=0);let Bn=oe.convert(L.format),Re=oe.convert(L.type),Ot;L.isData3DTexture?(S.setTexture3D(L,0),Ot=B.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(S.setTexture2DArray(L,0),Ot=B.TEXTURE_2D_ARRAY):(S.setTexture2D(L,0),Ot=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,L.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,L.unpackAlignment);let Ii=B.getParameter(B.UNPACK_ROW_LENGTH),xe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ci=B.getParameter(B.UNPACK_SKIP_PIXELS),ho=B.getParameter(B.UNPACK_SKIP_ROWS),Gn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ge.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ge.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Bt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ne);let hr=_.isDataArrayTexture||_.isData3DTexture,Ve=L.isDataArrayTexture||L.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){let bi=Et.get(_),ur=Et.get(L),Kn=Et.get(bi.__renderTarget),os=Et.get(ur.__renderTarget);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,Kn.__webglFramebuffer),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,os.__webglFramebuffer);for(let rs=0;rs<Lt;rs++)hr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Et.get(_).__webglTexture,U,ne+rs),_.isDepthTexture?(Ve&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Et.get(L).__webglTexture,U,ze+rs),B.blitFramebuffer(Bt,Qt,ft,_t,Ut,Ae,ft,_t,B.DEPTH_BUFFER_BIT,B.NEAREST)):Ve?B.copyTexSubImage3D(Ot,U,Ut,Ae,ze+rs,Bt,Qt,ft,_t):B.copyTexSubImage2D(Ot,U,Ut,Ae,ze+rs,Bt,Qt,ft,_t);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ve?_.isDataTexture||_.isData3DTexture?B.texSubImage3D(Ot,U,Ut,Ae,ze,ft,_t,Lt,Bn,Re,Ge.data):L.isCompressedArrayTexture?B.compressedTexSubImage3D(Ot,U,Ut,Ae,ze,ft,_t,Lt,Bn,Ge.data):B.texSubImage3D(Ot,U,Ut,Ae,ze,ft,_t,Lt,Bn,Re,Ge):_.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,U,Ut,Ae,ft,_t,Bn,Re,Ge.data):_.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,U,Ut,Ae,Ge.width,Ge.height,Bn,Ge.data):B.texSubImage2D(B.TEXTURE_2D,U,Ut,Ae,ft,_t,Bn,Re,Ge);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ii),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ci),B.pixelStorei(B.UNPACK_SKIP_ROWS,ho),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Gn),U===0&&L.generateMipmaps&&B.generateMipmap(Ot),Gt.unbindTexture()},this.copyTextureToTexture3D=function(_,L,W=null,X=null,U=0){return _.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,_=arguments[2],L=arguments[3],U=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,L,W,X,U)},this.initRenderTarget=function(_){Et.get(_).__webglFramebuffer===void 0&&S.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?S.setTextureCube(_,0):_.isData3DTexture?S.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?S.setTexture2DArray(_,0):S.setTexture2D(_,0),Gt.unbindTexture()},this.resetState=function(){R=0,w=0,F=null,Gt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};var Xo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ws=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},hc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yl,this.updateRanges=[],this.version=0,this.uuid=ms()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Cn=new x,za=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ti(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array),o=Ie(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qn=class extends qi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ro,gr=new x,xo=new x,wo=new x,Co=new lt,Er=new lt,fd=new we,pa=new x,yr=new x,ma=new x,Lu=new lt,nl=new lt,Bu=new lt,ti=class extends hn{constructor(t=new qn){if(super(),this.isSprite=!0,this.type="Sprite",Ro===void 0){Ro=new gn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hc(e,5);Ro.setIndex([0,1,2,0,2,3]),Ro.setAttribute("position",new za(i,3,0,!1)),Ro.setAttribute("uv",new za(i,2,3,!1))}this.geometry=Ro,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xo.setFromMatrixScale(this.matrixWorld),fd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xo.multiplyScalar(-wo.z);let i=this.material.rotation,s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));let r=this.center;ga(pa.set(-.5,-.5,0),wo,r,xo,s,o),ga(yr.set(.5,-.5,0),wo,r,xo,s,o),ga(ma.set(.5,.5,0),wo,r,xo,s,o),Lu.set(0,0),nl.set(1,0),Bu.set(1,1);let a=t.ray.intersectTriangle(pa,yr,ma,!1,gr);if(a===null&&(ga(yr.set(-.5,.5,0),wo,r,xo,s,o),nl.set(0,1),a=t.ray.intersectTriangle(pa,ma,yr,!1,gr),a===null))return;let l=t.ray.origin.distanceTo(gr);l<t.near||l>t.far||e.push({distance:l,point:gr.clone(),uv:ps.getInterpolation(gr,pa,yr,ma,Lu,nl,Bu,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ga(n,t,e,i,s,o){Co.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Er.x=o*Co.x-s*Co.y,Er.y=s*Co.x+o*Co.y):Er.copy(Co),n.copy(t),n.x+=Er.x,n.y+=Er.y,n.applyMatrix4(fd)}var ka=class extends Hn{constructor(t=null,e=1,i=1,s,o,r,a,l,c=Pn,h=Pn,u,d){super(null,r,a,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xr=class extends qi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Uu=new we,uc=new Ia,Ea=new ko,ya=new x,Ga=class extends hn{constructor(t=new gn,e=new xr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=o,t.ray.intersectsSphere(Ea)===!1)return;Uu.copy(s).invert(),uc.copy(t.ray).applyMatrix4(Uu);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,E=f;g<E;g++){let m=c.getX(g);ya.fromBufferAttribute(u,m),Hu(ya,m,l,s,t,e,this)}}else{let d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,E=f;g<E;g++)ya.fromBufferAttribute(u,g),Hu(ya,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Hu(n,t,e,i,s,o,r){let a=uc.distanceSqToPoint(n);if(a<e){let l=new x;uc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var bn=class extends Hn{constructor(t,e,i,s,o,r,a,l,c){super(t,e,i,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,o=i.length,r;e?r=e:r=t*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(o-1);let h=i[s],d=i[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);let r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new lt:new x);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new x,s=[],o=[],r=[],a=new x,l=new we;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new x)}o[0]=new x,r[0]=new x;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Mn(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Mn(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},wr=class extends ei{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){let i=e,s=Math.PI*2,o=this.aEndAngle-this.aStartAngle,r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);let a=this.aStartAngle+t*o,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dc=class extends wr{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}};function kc(){let n=0,t=0,e=0,i=0;function s(o,r,a,l){n=o,t=a,e=-3*o+3*r-2*a-l,i=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){let r=o*o,a=r*o;return n+t*o+e*r+i*a}}}var va=new x,il=new kc,sl=new kc,ol=new kc,fc=class extends ei{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new x){let i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t,a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(va.subVectors(s[0],s[1]).add(s[0]),c=va);let u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(va.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=va),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),E=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),il.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,E,m),sl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,E,m),ol.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),sl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ol.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(il.calc(l),sl.calc(l),ol.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new x().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nu(n,t,e,i,s){let o=(i-t)*.5,r=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+o+r)*l+(-3*e+3*i-2*o-r)*a+o*n+e}function _E(n,t){let e=1-n;return e*e*t}function bE(n,t){return 2*(1-n)*n*t}function AE(n,t){return n*n*t}function Ar(n,t,e,i){return _E(n,t)+bE(n,e)+AE(n,i)}function TE(n,t){let e=1-n;return e*e*e*t}function SE(n,t){let e=1-n;return 3*e*e*n*t}function RE(n,t){return 3*(1-n)*n*n*t}function xE(n,t){return n*n*n*t}function Tr(n,t,e,i,s){return TE(n,t)+SE(n,e)+RE(n,i)+xE(n,s)}var Va=class extends ei{constructor(t=new lt,e=new lt,i=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new lt){let i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Tr(t,s.x,o.x,r.x,a.x),Tr(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pc=class extends ei{constructor(t=new x,e=new x,i=new x,s=new x){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new x){let i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Tr(t,s.x,o.x,r.x,a.x),Tr(t,s.y,o.y,r.y,a.y),Tr(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wa=class extends ei{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mc=class extends ei{constructor(t=new x,e=new x){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new x){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new x){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xa=class extends ei{constructor(t=new lt,e=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new lt){let i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(Ar(t,s.x,o.x,r.x),Ar(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gc=class extends ei{constructor(t=new x,e=new x,i=new x){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new x){let i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(Ar(t,s.x,o.x,r.x),Ar(t,s.y,o.y,r.y),Ar(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qa=class extends ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(Nu(a,l.x,c.x,h.x,u.x),Nu(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},Ou=Object.freeze({__proto__:null,ArcCurve:dc,CatmullRomCurve3:fc,CubicBezierCurve:Va,CubicBezierCurve3:pc,EllipseCurve:wr,LineCurve:Wa,LineCurve3:mc,QuadraticBezierCurve:Xa,QuadraticBezierCurve3:gc,SplineCurve:qa}),Ec=class extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ou[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),o=0;for(;o<s.length;){if(s[o]>=i){let r=s[o]-i,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,o=this.curves;s<o.length;s++){let r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ou[s.type]().fromJSON(s))}return this}},yc=class extends Ec{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Wa(this.currentPoint.clone(),new lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let o=new Xa(this.currentPoint.clone(),new lt(t,e),new lt(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){let a=new Va(this.currentPoint.clone(),new lt(t,e),new lt(i,s),new lt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new qa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,o,r,a,l),this}absellipse(t,e,i,s,o,r,a,l){let c=new wr(t,e,i,s,o,r,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Es=class n extends gn{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Mn(s,0,Math.PI*2);let o=[],r=[],a=[],l=[],c=[],h=1/e,u=new x,d=new lt,f=new x,g=new x,E=new x,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,E.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(E.x,E.y,E.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=E.x,f.y+=E.y,f.z+=E.z,f.normalize(),l.push(f.x,f.y,f.z),E.copy(g)}for(let b=0;b<=e;b++){let A=i+b*h*s,y=Math.sin(A),C=Math.cos(A);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*y,u.y=t[R].y,u.z=t[R].x*C,r.push(u.x,u.y,u.z),d.x=b/e,d.y=R/(t.length-1),a.push(d.x,d.y);let w=l[3*R+0]*y,F=l[3*R+1],T=l[3*R+0]*C;c.push(w,F,T)}}for(let b=0;b<e;b++)for(let A=0;A<t.length-1;A++){let y=A+b*t.length,C=y,R=y+t.length,w=y+t.length+1,F=y+1;o.push(C,R,F),o.push(w,F,R)}this.setIndex(o),this.setAttribute("position",new Ue(r,3)),this.setAttribute("uv",new Ue(a,2)),this.setAttribute("normal",new Ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Cr=class n extends Es{constructor(t=1,e=1,i=4,s=8){let o=new yc;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},fi=class n extends gn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let o=[],r=[],a=[],l=[],c=new x,h=new lt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(a,3)),this.setAttribute("uv",new Ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Yn=class n extends gn{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),o=Math.floor(o);let h=[],u=[],d=[],f=[],g=0,E=[],m=i/2,p=0;b(),r===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(f,2));function b(){let y=new x,C=new x,R=0,w=(e-t)/i;for(let F=0;F<=o;F++){let T=[],M=F/o,P=M*(e-t)+t;for(let q=0;q<=s;q++){let z=q/s,I=z*l+a,N=Math.sin(I),H=Math.cos(I);C.x=P*N,C.y=-M*i+m,C.z=P*H,u.push(C.x,C.y,C.z),y.set(N,w,H).normalize(),d.push(y.x,y.y,y.z),f.push(z,1-M),T.push(g++)}E.push(T)}for(let F=0;F<s;F++)for(let T=0;T<o;T++){let M=E[T][F],P=E[T+1][F],q=E[T+1][F+1],z=E[T][F+1];(t>0||T!==0)&&(h.push(M,P,z),R+=3),(e>0||T!==o-1)&&(h.push(P,q,z),R+=3)}c.addGroup(p,R,0),p+=R}function A(y){let C=g,R=new lt,w=new x,F=0,T=y===!0?t:e,M=y===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let P=g;for(let q=0;q<=s;q++){let I=q/s*l+a,N=Math.cos(I),H=Math.sin(I);w.x=T*H,w.y=m*M,w.z=T*N,u.push(w.x,w.y,w.z),d.push(0,M,0),R.x=N*.5+.5,R.y=H*.5*M+.5,f.push(R.x,R.y),g++}for(let q=0;q<s;q++){let z=C+q,I=P+q;y===!0?h.push(I,I+1,z):h.push(I+1,I,z),F+=3}c.addGroup(p,F,y===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zn=class n extends Yn{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var fe=class n extends gn{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(r+a,Math.PI),c=0,h=[],u=new x,d=new x,f=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){let b=[],A=p/i,y=0;p===0&&r===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){let R=C/e;u.x=-t*Math.cos(s+R*o)*Math.sin(r+A*a),u.y=t*Math.cos(r+A*a),u.z=t*Math.sin(s+R*o)*Math.sin(r+A*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),E.push(d.x,d.y,d.z),m.push(R+y,1-A),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let A=h[p][b+1],y=h[p][b],C=h[p+1][b],R=h[p+1][b+1];(p!==0||r>0)&&f.push(A,y,R),(p!==i-1||l<Math.PI)&&f.push(y,C,R)}this.setIndex(f),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(E,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qe=class n extends gn{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);let r=[],a=[],l=[],c=[],h=new x,u=new x,d=new x;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let E=g/s*o,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(E),u.y=(t+e*Math.cos(m))*Math.sin(E),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(E),h.y=t*Math.sin(E),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let E=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;r.push(E,m,b),r.push(m,p,b)}this.setIndex(r),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var me=class extends qi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Ma(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function wE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var qo=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],o=e[i-1];n:{t:{let r;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=s,s=e[++i],t<s)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(i=2,o=a);for(let l=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=o,o=e[--i-1],t>=o)break t}r=i,i=0;break e}break n}for(;i<r;){let a=i+r>>>1;t<e[a]?r=a:i=a+1}if(s=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,s)}return this.interpolate_(i,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=i[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vc=class extends qo{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(t,e,i){let s=this.parameterPositions,o=t-2,r=t+1,a=s[o],l=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case zh:o=t,a=2*e-i;break;case kh:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zh:r=t,l=2*i-e;break;case kh:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),E=g*g,m=E*g,p=-d*m+2*d*E-d*g,b=(1+d)*m+(-1.5-2*d)*E+(-.5+d)*g+1,A=(-1-f)*m+(1.5+f)*E+.5*g,y=f*m-f*E;for(let C=0;C!==a;++C)o[C]=p*r[h+C]+b*r[c+C]+A*r[l+C]+y*r[u+C];return o}},Mc=class extends qo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)o[d]=r[c+d]*u+r[l+d]*h;return o}},_c=class extends qo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ma(e,this.TimeBufferType),this.values=Ma(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ma(t.times,Array),values:Ma(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ra:e=this.InterpolantFactoryMethodDiscrete;break;case ql:e=this.InterpolantFactoryMethodLinear;break;case x0:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return ql;case this.InterpolantFactoryMethodSmooth:return x0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,o=0,r=s-1;for(;o!==s&&i[o]<t;)++o;for(;r!==-1&&i[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=i.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(s!==void 0&&wE(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===x0,o=t.length-1,r=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let E=e[u+g];if(E!==e[d+g]||E!==e[f+g]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];let u=a*i,d=r*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++r}}if(o>0){t[r]=t[o];for(let a=o*i,l=r*i,c=0;c!==i;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=ql;var Xs=class extends pi{constructor(t,e,i){super(t,e,i)}};Xs.prototype.ValueTypeName="bool";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=Ra;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends pi{};bc.prototype.ValueTypeName="color";var Ac=class extends pi{};Ac.prototype.ValueTypeName="number";var Tc=class extends qo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)jn.slerpFlat(o,0,r,c-a,r,c,l);return o}},Ya=class extends pi{InterpolantFactoryMethodLinear(t){return new Tc(this.times,this.values,this.getValueSize(),t)}};Ya.prototype.ValueTypeName="quaternion";Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var qs=class extends pi{constructor(t,e,i){super(t,e,i)}};qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Ra;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Sc=class extends pi{};Sc.prototype.ValueTypeName="vector";var Rc=class{constructor(t,e,i){let s=this,o=!1,r=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},CE=new Rc,xc=class{constructor(t){this.manager=t!==void 0?t:CE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ys=class extends hn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Yi=class extends Ys{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},rl=new we,zu=new x,ku=new x,Fr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(zu),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wc=class extends Fr{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=wa*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(i!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=i,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},In=class extends Ys{constructor(t,e,i=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=i,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new wc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Gu=new we,vr=new x,al=new x,Cc=class extends Fr{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new De(2,1,1,1),new De(0,1,1,1),new De(3,1,1,1),new De(1,1,1,1),new De(3,0,1,1),new De(1,0,1,1)],this._cubeDirections=[new x(1,0,0),new x(-1,0,0),new x(0,0,1),new x(0,0,-1),new x(0,1,0),new x(0,-1,0)],this._cubeUps=[new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,0,1),new x(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),vr.setFromMatrixPosition(t.matrixWorld),i.position.copy(vr),al.copy(i.position),al.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(al),i.updateMatrixWorld(),s.makeTranslation(-vr.x,-vr.y,-vr.z),Gu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu)}},fn=class extends Ys{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Fc=class extends Fr{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends Ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new Fc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},je=class extends Ys{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Za=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Vu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Vu(){return 0}var Gc="\\[\\]\\.:\\/",FE=new RegExp("["+Gc+"]","g"),Vc="[^"+Gc+"]",PE="[^"+Gc.replace("\\.","")+"]",IE=/((?:WC+[\/:])*)/.source.replace("WC",Vc),DE=/(WCOD+)?/.source.replace("WCOD",PE),LE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),BE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),UE=new RegExp("^"+IE+DE+LE+BE+"$"),HE=["material","materials","bones","map"],Pc=class{constructor(t,e,i){let s=i||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=i.length;s!==o;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},qe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(FE,"")}static parseTrackName(t){let e=UE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);HE.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=Pc;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);var Qa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Zi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},NE=new Vo(-1,1,1,-1,0,1),Wc=class extends gn{constructor(){super(),this.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ue([0,2,0,0,2,0],2))}},OE=new Wc,$o=class{constructor(t){this._mesh=new st(OE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,NE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Zs=class extends Zi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof on?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Yo.clone(t.uniforms),this.material=new on({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new $o(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Pr=class extends Zi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}},ja=class extends Zi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var t0=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new lt);this._width=i.width,this._height=i.height,e=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zs(Qa),this.copyPass.material.blending=Ri,this.clock=new Za}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,o=this.passes.length;s<o;s++){let r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Pr!==void 0&&(r instanceof Pr?i=!0:r instanceof ja&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var pd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Jo=class n extends Zi{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new Pt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(o,r,{type:Nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new mn(o,r,{type:Nn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new mn(o,r,{type:Nn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),r=Math.round(r/2)}let a=pd;this.highPassUniforms=Yo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new lt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new x(1,1,1),new x(1,1,1),new x(1,1,1),new x(1,1,1),new x(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Qa;this.copyUniforms=Yo.clone(h.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Bo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pt,this.oldClearAlpha=1,this.basic=new ae,this.fsQuad=new $o(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new lt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new on({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new on({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Jo.BlurDirectionX=new lt(1,0);Jo.BlurDirectionY=new lt(0,1);var $i=1920,Ji=1080;function Se(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ct=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),ht=(n,t,e)=>n+(t-n)*e,ge=(n,t,e)=>{let i=ct((e-n)/(t-n));return i*i*(3-2*i)},En=n=>1-Math.pow(1-ct(n),3),n0=n=>Math.pow(ct(n),3),On=n=>(n=ct(n),n*n*(3-2*n));function Ir(n,t){if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){let i=On((t-n[e-1][0])/(n[e][0]-n[e-1][0])),s=n[e-1][1],o=n[e][1];return Array.isArray(s)?s.map((r,a)=>ht(r,o[a],i)):ht(s,o,i)}return n[n.length-1][1]}var zE={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new lt($i,Ji)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){if(maxBlur<.6){gl_FragColor=vec4(texture2D(tColor,vUv).rgb,1.);return;}float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<44;i++){float fi=float(i);float r=sqrt(fi/44.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},kE={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new Pt(1,1,1)},sat:{value:1},flash:{value:0},toon:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash,toon;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=mix(aces(c*.88),c/(1.+.18*c),toon);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(1.,.66);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1920.,1080.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},e0=class{constructor(t){let e=this.r=new Oa({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize($i,Ji,!1),e.shadowMap.enabled=!0,e.shadowMap.type=Dc,e.toneMapping=xi,e.outputColorSpace=vs;let i=new Wo($i,Ji);i.type=Wi,this.rt=new mn($i,Ji,{type:Nn,samples:4,depthTexture:i}),this.composer=new t0(e,new mn($i,Ji,{type:Nn})),this.dof=new Zs(zE,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new Jo(new lt($i/2,Ji/2),.45,.75,.82),this.grade=new Zs(kE),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(r=>t>=r.t0&&t<r.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let i=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,o=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,o.vig.value=i.vig??.42,o.exposure.value=i.exposure??1,o.sat.value=i.sat??1,o.flash.value=i.flash??0,o.toon.value=i.toon??0,o.frame.value=Math.floor(t*30)%97,o.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function md(n,t,e,i=40){let s=new Ws;s.background=new Pt(e);let o=new _n(i,$i/Ji,.08,400);return{t0:n,t1:t,scene:s,camera:o,update(){return{}}}}function gd(n,t,e,i=0){n.position.set(t[0],t[1],t[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(e[0],e[1],e[2])}var e3=1/420;var Xc={value:0};var Dr=new x;function ni(n,t,e,i,s,o){let r=2*Math.PI*s/4,a=Math.max(o-2*s,0),l=Math.PI/4;Dr.copy(t),Dr[i]=0,Dr.normalize();let c=.5*r/(r+a),h=1-Dr.angleTo(n)/l;return Math.sign(Dr[e])===1?h*c:a/(r+a)+c+c*(1-h)}var i0=class extends Te{constructor(t=1,e=1,i=1,s=2,o=.1){if(s=s*2+1,o=Math.min(t/2,e/2,i/2,o),super(1,1,1,s,s,s),s===1)return;let r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;let a=new x,l=new x,c=new x(t,e,i).divideScalar(2).subScalar(o),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new x,E=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*E,l.y-=Math.sign(l.y)*E,l.z-=Math.sign(l.z)*E,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*o,h[m+1]=c.y*Math.sign(a.y)+l.y*o,h[m+2]=c.z*Math.sign(a.z)+l.z*o,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=ni(g,l,"z","y",o,i),d[p+1]=1-ni(g,l,"y","z",o,e);break;case 1:g.set(-1,0,0),d[p+0]=1-ni(g,l,"z","y",o,i),d[p+1]=1-ni(g,l,"y","z",o,e);break;case 2:g.set(0,1,0),d[p+0]=1-ni(g,l,"x","z",o,t),d[p+1]=ni(g,l,"z","x",o,i);break;case 3:g.set(0,-1,0),d[p+0]=1-ni(g,l,"x","z",o,t),d[p+1]=1-ni(g,l,"z","x",o,i);break;case 4:g.set(0,0,1),d[p+0]=1-ni(g,l,"x","y",o,t),d[p+1]=1-ni(g,l,"y","x",o,e);break;case 5:g.set(0,0,-1),d[p+0]=ni(g,l,"x","y",o,t),d[p+1]=1-ni(g,l,"y","x",o,e);break}}};var Ms=null;function $c(){if(Ms)return Ms;let n=new Uint8Array([118,118,118,255,196,196,196,255,255,255,255,255]);return Ms=new ka(n,3,1,Xn),Ms.minFilter=Ms.magFilter=Pn,Ms.generateMipmaps=!1,Ms.needsUpdate=!0,Ms}var qc=new Map;function Vt(n,t){if(!t){let e=String(n);if(qc.has(e))return qc.get(e);let i=new me({color:n,gradientMap:$c()});return qc.set(e,i),i}return new me({color:n,gradientMap:$c(),...t})}var VE=`uniform float w; uniform float minPx; uniform vec2 res;
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
}`,WE="uniform vec3 col; uniform float op; void main(){ gl_FragColor = vec4(col, op); }",Yc=new Map;function Jc(n=.014,t="#17131C",e=1.6){let i=n+t+e;if(Yc.has(i))return Yc.get(i);let s=new on({uniforms:{w:{value:n},minPx:{value:e},res:{value:new lt($i,Ji)},col:{value:new Pt(t).convertSRGBToLinear()},op:{value:1}},vertexShader:VE,fragmentShader:WE,side:sn});return Yc.set(i,s),s}function $s(n,t=.014,e,i){let s=new st(n.geometry,Jc(t,e,i));return s.castShadow=!1,s.receiveShadow=!1,s.userData.isOutline=!0,n.add(s),n}function ve(n,t,e={}){let i=new st(n,t&&t.isMaterial?t:Vt(t));return i.castShadow=e.shadow??!0,i.receiveShadow=!0,e.out&&$s(i,e.out===!0?.014:e.out,e.outCol,e.minPx),e.pos&&i.position.set(...e.pos),e.rot&&i.rotation.set(...e.rot),i}var Js=(n,t,e,i=.04,s=3)=>new i0(n,t,e,s,Math.min(i,n/2-.001,t/2-.001,e/2-.001));function rt(n,t,e,i,s=0,o=0,r=0,a={}){return ve(Js(n,t,e,a.r??Math.min(.05,Math.min(n,t,e)*.18)),i,{pos:[s,o,r],...a})}function tt(n,t,e,i,s=0,o=0,r=0,a={}){return ve(new Te(n,t,e),i,{pos:[s,o,r],...a})}function at(n,t,e,i,s=0,o=0,r=0,a={}){return ve(new Yn(n,t,e,a.seg||24),i,{pos:[s,o,r],...a})}function he(n,t,e=0,i=0,s=0,o={}){return ve(new fe(n,o.seg||24,Math.max(12,(o.seg||24)*.6|0)),t,{pos:[e,i,s],...o})}function kt(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t;let s=i.getContext("2d");e(s,n,t);let o=new bn(i);return o.colorSpace=Be,o.anisotropy=8,o}var Xt=(n,t={})=>new me({map:n,gradientMap:$c(),...t}),Zc=null;function s0(n=.32,t=.38){Zc||(Zc=kt(128,128,i=>{let s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(20,16,30,1)"),s.addColorStop(.55,"rgba(20,16,30,.55)"),s.addColorStop(1,"rgba(20,16,30,0)"),i.fillStyle=s,i.fillRect(0,0,128,128)}));let e=new st(new St(n*2,n*2),new ae({map:Zc,transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return e.rotation.x=-Math.PI/2,e.renderOrder=1,e}function Dn(n,t={}){let e=new Yi(t.sky||"#EAF2FF",t.ground||"#B9A898",t.hemi??1.5);n.add(e);let i=new ys(t.key||"#FFF4E2",t.ki??2.2);i.position.set(...t.pos||[6,10,7]),i.castShadow=t.shadow??!0,i.shadow.mapSize.set(2048,2048);let s=t.r||12;return Object.assign(i.shadow.camera,{left:-s,right:s,top:s,bottom:-s,near:.5,far:t.far||60}),i.shadow.bias=-4e-4,i.shadow.normalBias=.02,i.shadow.radius=3,t.target&&(i.target.position.set(...t.target),n.add(i.target),i.position.set(t.target[0]+(t.pos||[6,10,7])[0],t.target[1]+(t.pos||[6,10,7])[1],t.target[2]+(t.pos||[6,10,7])[2])),n.add(i),{hemi:e,k:i}}var Ed=(n={})=>({toon:1,blur:0,bloom:.18,bloomT:.95,bloomR:.4,vig:.22,exposure:1,sat:1.05,...n});function XE(n,t){(n.userData.vida||=[]).push(t)}var qE={out:.012},YE=(n,t,e="#FFFFFF",i=512,s=128,o=64)=>kt(i,s,r=>{r.fillStyle=t,r.fillRect(0,0,i,s),r.strokeStyle="#00000033",r.lineWidth=8,r.strokeRect(4,4,i-8,s-8),r.fillStyle=e,r.font=`900 ${o}px Inter`,r.textAlign="center",r.textBaseline="middle",r.fillText(n,i/2,s/2+4)});function vd(n="#2F8F5B"){let t=new J;return t.add(at(.22,.19,.8,n,0,.4,0,{seg:14,...qE})),t.add(at(.25,.25,.07,"#24724A",0,.82,0,{seg:14})),t.add(at(.03,.03,.9,"#5A6270",-.28,.45,0,{seg:6})),t}var yd=[["PADARIA","#C9472F"],["FARM\xC1CIA","#2F8F5B"],["LANCHES","#F2A33A"],["\xD3TICA","#2E6FB8"],["CAF\xC9","#7A5236"],["BANCO","#3A3A44"],["LIVRARIA","#8A4FA8"],["SAPATOS","#D8577A"],["CELULARES","#1F7FA0"],["MERCADO","#E2443A"]];function Md(n,t=5){let[e,i]=yd[n%yd.length],s=new J,o=new st(new Te(t,.9,.2),[Vt(i),Vt(i),Vt(i),Vt(i),Xt(YE(e,i,"#FFFFFF",640,128,72)),Vt(i)]);s.add(o);let r=kt(128,64,l=>{for(let c=0;c<8;c++)l.fillStyle=c%2?"#FFFFFF":i,l.fillRect(c*16,0,16,64)}),a=new st(new Te(t*.9,.06,1.3),[Vt(i),Vt(i),Xt(r),Vt(i),Vt(i),Vt(i)]);return a.position.set(0,-.75,.6),a.rotation.x=.28,s.add(a),s}function Lr(n,t={}){let e=Se(t.seed||5),i=t.n||7,s=Vt("#2A2630",{side:We}),o=[],r=new St(.55,.22);r.translate(.27,0,0);for(let d=0;d<i;d++){let f=new J,g=new st(r,s),E=new st(r,s);E.rotation.y=Math.PI,f.add(g,E),f.add(he(.09,"#2A2630",0,0,0,{seg:6})),f.scale.setScalar(t.escala||1),n.add(f),o.push({g:f,L:g,Rr:E,dx:(e()-.5)*8,dy:(e()-.5)*3,dz:(e()-.5)*8,ph:e()*6})}let[a,l,c]=t.centro||[0,22,-40],h=t.raio||30,u=t.v||.12;XE(n,(d,f)=>{o.forEach((g,E)=>{let m=f*u+(t.fase||0),p=a+Math.cos(m)*h+g.dx+Math.sin(f*.7+g.ph)*.6,b=c+Math.sin(m)*h*.5+g.dz,A=l+g.dy+Math.sin(f*1.3+g.ph)*.4;g.g.position.set(p,A,b),g.g.rotation.y=-m+Math.PI;let y=Math.sin(f*11+g.ph)*.7;g.L.rotation.x=0,g.L.rotation.z=y,g.Rr.rotation.z=-y})})}var Ln=Math.PI/180,Ze=.3,ZE=.012,yn={phi0:Math.PI/2-1,phiL:2,th0:.62,thL:1.55,W:1024,H:512},jt=n=>yn.W/2+n/yn.phiL*yn.W,Jt=n=>(n-yn.th0)/yn.thL*yn.H,$n=n=>n/yn.phiL*yn.W,rn=n=>n/yn.thL*yn.H,_s="#1B1420";function $E(n,t,e){n.clearRect(0,0,yn.W,yn.H),n.lineCap="round",n.lineJoin="round";let i=t.emo||"neutro",s=1.45,o=.31;if(t.blush||i==="feliz"||i==="apaixonado"||i==="vergonha"){n.fillStyle="rgba(240,110,110,"+(i==="vergonha"?.55:.3)+")";for(let y of[-1,1])n.beginPath(),n.ellipse(jt(y*.44),Jt(1.7),$n(.075),rn(.045),0,0,7),n.fill()}let r=ct(Math.max(t.blink||0,i==="sono"?.55:i==="triste"||i==="choro"?.22:i==="bravo"?.25:i==="desconfiado"?.4:i==="tedio"?.5:0)),a=i==="surpreso"||i==="medo"?1.15:1;for(let y of[-1,1]){let C=jt(y*o),R=Jt(s),w=$n(.128)*a,F=rn(.158)*a;if(i==="feliz"&&!t.olhosAbertos||(t.blink||0)>.92||t.pisca1&&y<0){n.strokeStyle=_s,n.lineWidth=11,n.beginPath(),i==="feliz"||i==="rindo"?n.arc(C,R+F*.25,w*.85,Math.PI*1.12,Math.PI*1.88):(n.moveTo(C-w*.9,R+F*.15),n.quadraticCurveTo(C,R+F*.55,C+w*.9,R+F*.15)),n.stroke();continue}n.save(),n.beginPath(),n.ellipse(C,R,w,F,0,0,7),n.clip(),n.fillStyle="#FFFFFF",n.fillRect(C-w,R-F,w*2,F*2);let T=i==="surpreso"||i==="medo"?.55:.68,M=ct(e[0],-1,1),P=ct(e[1],-1,1),q=C+M*w*.38,z=R+P*F*.32+F*.06;n.fillStyle="#231A26",n.beginPath(),n.ellipse(q,z,w*T,F*T*.98,0,0,7),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.ellipse(q-w*.22,z-F*.28,w*.2,F*.17,0,0,7),n.fill(),n.beginPath(),n.ellipse(q+w*.2,z+F*.22,w*.08,F*.07,0,0,7),n.fill();let I=i==="bravo"?-y*.45:i==="triste"||i==="choro"||i==="preocupado"?y*.35:0;if(r>.02||I){let N=R-F+F*2*r;n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.moveTo(C-w*1.2,R-F*1.3),n.lineTo(C+w*1.2,R-F*1.3),n.lineTo(C+w*1.2,N+Math.tan(I)*w*1.2),n.lineTo(C-w*1.2,N-Math.tan(I)*w*1.2),n.closePath(),n.fill(),n.strokeStyle=_s,n.lineWidth=8,n.beginPath(),n.moveTo(C-w*1.1,N-Math.tan(I)*w*1.1),n.lineTo(C+w*1.1,N+Math.tan(I)*w*1.1),n.stroke()}n.restore(),n.strokeStyle=_s,n.lineWidth=8,n.beginPath(),n.ellipse(C,R,w,F,0,0,7),n.stroke(),t.cilios&&(n.lineWidth=7,n.beginPath(),n.moveTo(C+y*w*.7,R-F*.72),n.lineTo(C+y*w*1.15,R-F*1.02),n.stroke())}if(i==="choro"||t.lagrima){n.fillStyle="rgba(120,200,255,.85)";for(let y of[-1,1]){let C=jt(y*o),R=Jt(s)+rn(.12);n.beginPath(),n.moveTo(C-$n(.02),R),n.quadraticCurveTo(C,R+rn(.22),C+$n(.02),R),n.fill(),n.beginPath(),n.ellipse(C,R+rn(.2),$n(.028),rn(.035),0,0,7),n.fill()}}let l={neutro:[0,0],feliz:[.04,-.1],rindo:[.04,-.1],triste:[.02,.45],choro:[.03,.5],bravo:[-.03,-.55],surpreso:[.09,0],medo:[.08,.4],preocupado:[.04,.38],desconfiado:[-.01,-.2],sono:[-.01,.1],vergonha:[.03,.3],determinado:[-.02,-.35],tedio:[-.01,.05],apaixonado:[.05,.2]}[i]||[0,0],c=l[0]+(t.brow||0)*.05,h=l[1];n.strokeStyle=t.sobr||_s,n.lineWidth=t.sobrW||15;for(let y of[-1,1]){let C=jt(y*o),R=Jt(s-.2-c),w=$n(.085),F=y*h*.5;n.beginPath(),n.moveTo(C-w*Math.cos(F),R-w*Math.sin(F)*(y<0,1)),n.quadraticCurveTo(C,R-rn(.025),C+w*Math.cos(F),R+w*Math.sin(F)),n.stroke()}if(t.rugas){n.strokeStyle="rgba(90,50,40,.5)",n.lineWidth=5;for(let y of[-1,1]){let C=jt(y*(o+.17));for(let R=0;R<3;R++)n.beginPath(),n.moveTo(C,Jt(s-.05+R*.06)),n.lineTo(C+y*$n(.05),Jt(s-.07+R*.07)),n.stroke()}n.beginPath(),n.moveTo(jt(-.12),Jt(1.12)),n.quadraticCurveTo(jt(0),Jt(1.09),jt(.12),Jt(1.12)),n.stroke()}if(t.oculosEscuros){n.fillStyle="#15121A";for(let y of[-1,1])n.beginPath(),n.ellipse(jt(y*o),Jt(s+.02),$n(.16),rn(.13),0,0,7),n.fill();n.strokeStyle="#15121A",n.lineWidth=10,n.beginPath(),n.moveTo(jt(-o+.14),Jt(s)),n.lineTo(jt(o-.14),Jt(s)),n.stroke(),n.fillStyle="rgba(255,255,255,.35)";for(let y of[-1,1])n.beginPath(),n.ellipse(jt(y*o-.05),Jt(s-.03),$n(.04),rn(.025),-.5,0,7),n.fill()}if(t.oculos){n.strokeStyle="#6A4A3A",n.lineWidth=8;for(let y of[-1,1])n.beginPath(),n.ellipse(jt(y*o),Jt(s),$n(.15),rn(.16),0,0,7),n.stroke();n.beginPath(),n.moveTo(jt(-o+.15),Jt(s-.02)),n.quadraticCurveTo(jt(0),Jt(s-.08),jt(o-.15),Jt(s-.02)),n.stroke()}t.nariz&&(n.strokeStyle="rgba(60,30,30,.55)",n.lineWidth=7,n.beginPath(),n.arc(jt(0),Jt(1.66),$n(.035),.2,Math.PI-.2),n.stroke());let u=t.mouth||{},d=ct(u.open||0),f=ct(u.round||0),g=u.smile??({feliz:.8,rindo:.9,triste:-.6,choro:-.7,bravo:-.4,medo:-.3,preocupado:-.35,apaixonado:.6,vergonha:.3,determinado:-.05,desconfiado:-.15,tedio:-.2}[i]||0),E=Jt(t.bigode?1.93:1.88),m=jt(0),p=$n(.15+.05*(1-f)+(i==="rindo"?.04:0)),b=E-g*rn(.035),A=()=>{if(d<.07)n.strokeStyle=_s,n.lineWidth=11,n.beginPath(),n.moveTo(m-p*.85,b),n.quadraticCurveTo(m,E+g*rn(.075),m+p*.85,b),n.stroke();else{let y=rn(.05+.2*d),C=p*(1-.38*f);n.beginPath(),f>.55?n.ellipse(m,E+y*.35,C*.75,y*.62,0,0,7):(n.moveTo(m-C,b),n.quadraticCurveTo(m,E+g*rn(.03)-y*.12,m+C,b),n.bezierCurveTo(m+C*.95,b+y*1.25,m-C*.95,b+y*1.25,m-C,b),n.closePath()),n.fillStyle="#5A1E2A",n.fill(),n.save(),n.clip(),d>.28&&f<.55&&(n.fillStyle="#FFFFFF",n.fillRect(m-C,b-y,C*2,y*1.18),t.banguela&&(n.fillStyle="#5A1E2A",n.fillRect(m+C*.08,b-y,C*.26,y*.62))),n.fillStyle="#E8707E",n.beginPath(),n.ellipse(m,b+y*1.05,C*.58,y*.42,0,0,7),n.fill(),n.restore(),n.strokeStyle=_s,n.lineWidth=9,n.stroke()}};if(t.barba||A(),t.lingua&&(n.fillStyle="#F2707E",n.strokeStyle=_s,n.lineWidth=7,n.beginPath(),n.ellipse(m+p*.25,E+rn(.07),p*.32,rn(.075),.2,0,7),n.fill(),n.stroke(),n.strokeStyle="#C8505E",n.lineWidth=4,n.beginPath(),n.moveTo(m+p*.25,E+rn(.02)),n.lineTo(m+p*.27,E+rn(.1)),n.stroke()),t.barba&&(n.fillStyle=t.barba,n.globalAlpha=.92,n.beginPath(),n.moveTo(jt(-.44),Jt(1.5)),n.quadraticCurveTo(jt(-.46),Jt(2.05),jt(0),Jt(2.2)),n.quadraticCurveTo(jt(.46),Jt(2.05),jt(.44),Jt(1.5)),n.quadraticCurveTo(jt(.36),Jt(1.78),jt(.2),Jt(1.8)),n.quadraticCurveTo(jt(0),Jt(1.72),jt(-.2),Jt(1.8)),n.quadraticCurveTo(jt(-.36),Jt(1.78),jt(-.44),Jt(1.5)),n.fill(),n.globalAlpha=1,n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.ellipse(m,E+rn(.03),p*1.15,rn(.09+.12*d),0,0,7),n.fill(),A()),t.olheiras){n.strokeStyle="rgba(90,60,90,.45)",n.lineWidth=7;for(let y of[-1,1])n.beginPath(),n.arc(jt(y*.31),Jt(1.5),$n(.1),.35,Math.PI-.35),n.stroke()}if(t.sardas){n.fillStyle="rgba(150,80,50,.55)";for(let y of[-1,1])for(let C=0;C<5;C++)n.beginPath(),n.arc(jt(y*(.36+C%3*.05)),Jt(1.66+Math.floor(C/3)*.05+C%2*.02),4.5,0,7),n.fill()}t.bigode&&(n.fillStyle=t.bigode,n.strokeStyle=_s,n.lineWidth=6,n.beginPath(),n.moveTo(jt(0),Jt(1.76)),n.bezierCurveTo(jt(.12),Jt(1.7),jt(.24),Jt(1.76),jt(.27),Jt(1.9)),n.bezierCurveTo(jt(.17),Jt(1.84),jt(.08),Jt(1.87),jt(0),Jt(1.83)),n.bezierCurveTo(jt(-.08),Jt(1.87),jt(-.17),Jt(1.84),jt(-.27),Jt(1.9)),n.bezierCurveTo(jt(-.24),Jt(1.76),jt(-.12),Jt(1.7),jt(0),Jt(1.76)),n.fill(),n.stroke())}var _d={},Jn=0,bs=(n,t)=>{let e="c"+n+t+Jn;return _d[e]||(_d[e]=new Cr(n,t,Jn?3:6,Jn?10:18))};function bd(n,t=.82,e=36){let i=new Es(n.map(([l,c])=>new lt(l,c)),e,Math.PI,Math.PI*2);i.applyMatrix4(new we().makeScale(1,1,t));let s=i.attributes.position,o=i.attributes.uv,r=1e9,a=-1e9;for(let l=0;l<s.count;l++)r=Math.min(r,s.getY(l)),a=Math.max(a,s.getY(l));for(let l=0;l<s.count;l++)o.setY(l,(s.getY(l)-r)/(a-r));return i.computeVertexNormals(),i}var JE={magro:[[0,.5],[.14,.5],[.165,.53],[.172,.62],[.172,.72],[.165,.8],[.14,.86],[.09,.895],[.04,.905],[0,.906]],barriga:[[0,.47],[.16,.47],[.2,.52],[.225,.6],[.225,.68],[.205,.77],[.17,.845],[.11,.89],[.04,.905],[0,.906]],senhora:[[0,.5],[.15,.5],[.17,.55],[.175,.64],[.17,.74],[.16,.81],[.13,.865],[.08,.898],[0,.906]]},KE=[[0,.24],[.25,.24],[.245,.26],[.22,.36],[.19,.5],[.165,.62],[0,.62]];function Kc(n={}){Jn=n.simples?1:0;let t=n.pele||"#C98B5E",e=n.camisa||"#E8453C",i=n.calca||"#2E4A7A",s=n.tenis||"#F4F1EA",o=new J,r=new J;o.add(r);let a=new J;a.position.y=.52,r.add(a);let l=(I,N,H,K,k=ZE)=>{let it=new st(N,typeof H=="string"?Vt(H):H);return it.castShadow=!0,it.receiveShadow=!0,K&&it.position.set(...K),k&&$s(it,k),I.add(it),it},c=kt(1024,512,(I,N,H)=>{I.fillStyle=e,I.fillRect(0,0,N,H),n.estampa&&n.estampa(I,N,H)}),h=Xt(c),u=l(a,bd(JE[n.tronco||"magro"]),h,[0,-.52,0]);n.saia&&l(a,bd(KE,.86),n.saia,[0,-.52,0]),l(a,new Yn(.06,.065,.1,16),t,[0,.4,0],0);let d=new J;d.position.y=.38,a.add(d);let f=l(d,new fe(Ze,Jn?24:48,Jn?16:32),t,[0,Ze*.86,0]);f.receiveShadow=!1;for(let I of[-1,1])l(d,new fe(.055,16,12),t,[I*Ze*.96,Ze*.82,-.01]).scale.set(.6,1,.9);let g=document.createElement("canvas");g.width=yn.W>>Jn,g.height=yn.H>>Jn;let E=g.getContext("2d");Jn&&E.scale(.5,.5);let m=new bn(g);m.colorSpace=Be,m.anisotropy=8;let p=new me({map:m,gradientMap:Vt("#fff").gradientMap,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),b=new st(new fe(Ze*1.002,Jn?24:48,Jn?16:32,yn.phi0,yn.phiL,yn.th0,yn.thL),p);b.position.y=Ze*.86,b.renderOrder=2,d.add(b);let A=n.corCabelo||"#1E1618",y=new J;if(y.position.y=Ze*.86,d.add(y),n.cabelo==="cacheado"){let I=new fe(1,Jn?8:14,Jn?6:10),N=0;for(let H=0;H<70;H++){let K=Math.acos(1-2*((H+.5)/70)),k=H*2.39996,it=Math.cos(K),pt=Math.sin(K),xt=Math.cos(k)*pt,Wt=Math.sin(k)*pt;if(it<.28&&Wt>-.2||it<-.25||Wt>.55&&it<.62||Math.abs(xt)>.8&&it<.45&&Wt>-.5)continue;let Me=.075+H*37%10/10*.03,Q=l(y,I,A,[xt*Ze*.98,it*Ze*.98+.01,Wt*Ze*.98],.009);Q.scale.setScalar(Me),Q.castShadow=!1,N++}}else if(n.cabelo==="tigela"||n.cabelo==="rabo"||n.cabelo==="coque"){if(l(y,new fe(Ze*1.04,40,28),A,[0,.055,-.065]),n.cabelo==="rabo"){let I=l(y,bs(.085,.26),A,[0,.06,-.42]);I.rotation.x=.75;let N=l(y,new fe(.1,18,14),A,[0,-.07,-.5]);l(y,new fe(.065,16,12),n.laco||"#F25C8A",[0,.22,-.31]);for(let H of[-1,1]){let K=l(y,bs(.06,.2),A,[H*.27,-.08,.02]);K.rotation.z=-H*.08}}n.cabelo==="coque"&&l(y,new fe(.12,24,16),A,[0,.3,-.12]);for(let I=-2;I<=2;I++)l(y,new fe(.075,16,12),A,[I*.07,.2-Math.abs(I)*.025,.2-Math.abs(I)*.02],.008).scale.set(1,.8,.7)}else if(n.cabelo==="careca")for(let I of[-1,1])for(let N=0;N<4;N++){let H=-.6-N*.35;l(y,new fe(.07,14,10),A,[I*Math.cos(H)*Ze*.93*(N<3?1:.9),-.02,Math.sin(H)*Ze*.93+.12],.008).scale.set(1,1.2,1)}if(n.cabelo==="topete"){l(y,new fe(Ze*1.03,40,28,0,Math.PI*2,0,1.45),A,[0,.03,-.05]),l(y,new fe(Ze*1.035,48,32,Math.PI+.18,Math.PI-.36,0,2.3),A,[0,0,0],.008);for(let N=0;N<5;N++)l(y,new Zn(.085,.22,10),A,[(N-2)*.075,.27-Math.abs(N-2)*.02,.12-Math.abs(N-2)*.02],.008).rotation.set(1.05,0,-(N-2)*.22);l(y,new fe(.16,18,12),A,[0,.26,.05],.008).scale.set(1.2,.6,1.1)}else if(n.cabelo==="curto")l(y,new fe(Ze*1.025,40,28,0,Math.PI*2,0,1.3),A,[0,.025,-.03]),l(y,new fe(Ze*1.03,48,32,Math.PI+.18,Math.PI-.36,0,2.25),n.corCabelo2||A,[0,0,0],.008);else if(n.cabelo==="chanel"){l(y,new fe(Ze*1.06,40,28),A,[0,.05,-.07]);for(let N of[-1,1])l(y,new fe(.2,20,14),A,[N*.25,-.12,-.06]).scale.set(.55,1.15,1);l(y,new fe(.26,24,14),A,[0,.19,.12],.008).scale.set(1.05,.42,.6)}else if(n.cabelo==="afro"&&(l(y,new fe(Ze*1.32,40,28),A,[0,.14,-.1]).scale.set(1.08,1,1),n.faixa)){let N=l(y,new Qe(Ze*1.02,.035,10,40),n.faixa,[0,.1,0],.006);N.rotation.x=Math.PI/2-.25}if(n.brincos)for(let I of[-1,1])l(d,new fe(.03,12,10),n.brincos,[I*Ze*1,Ze*.62,.02],.005);if(n.bone){let I=l(y,new fe(Ze*1.05,32,16,0,Math.PI*2,0,1.25),n.bone,[0,.03,-.01]),N=l(y,Js(.36,.03,.22,.012),n.bone,[0,.12,n.boneTras?-.32:.3])}let C=I=>{let N=new J;N.position.set(I*.185,.3,0),a.add(N);let H=n.manga==="regata",K=H||(n.manga||"curta")==="curta";H?l(N,bs(.06,.17),t,[0,-.1,0]):l(N,bs(K?.064:.058,K?.07:.17),e,[0,K?-.055:-.1,0]),K&&!H&&l(N,bs(.05,.15),t,[0,-.11,0]);let k=new J;k.position.y=-.21,N.add(k),l(k,bs(.048,.14),K?t:e,[0,-.085,0]);let it=new J;it.position.y=-.2,k.add(it);let pt=new fe(.062,20,14);return l(it,pt,n.luva||t,[0,-.01,0]).scale.set(.85,1.05,.8),l(it,new fe(.026,12,10),n.luva||t,[-I*.045,.02,.03],.007),n.forte&&(N.children.forEach(Wt=>Wt.isMesh&&Wt.scale.set(n.forte,1,n.forte)),k.children.forEach(Wt=>Wt.isMesh&&Wt.scale.set(n.forte*.92,1,n.forte*.92))),{sh:N,el:k,hand:it}},R=C(1),w=C(-1),F=I=>{let N=new J;N.position.set(I*.085,.52,0),r.add(N),l(N,bs(.07,.17),n.saia?t:i,[0,-.11,0]);let H=new J;H.position.y=-.22,N.add(H),l(H,bs(.063,.16),n.meia||(n.saia?t:i),[0,-.1,0]);let K=new J;K.position.y=-.22,H.add(K);let k=l(K,Js(.13,.095,.23,.045),s,[0,-.037,.035]);return n.sola!==!1&&l(K,Js(.135,.03,.235,.014),n.sola||"#FFFFFF",[0,-.075,.035],.006),{hp:N,kn:H,an:K}},T=F(1),M=F(-1),P=s0(.36,.4);P.position.y=.006,o.add(P),n.escala&&o.scale.setScalar(n.escala),y.traverse(I=>{I.isMesh&&(I.castShadow=!1)});let q={look:[0,0],key:""},z={root:o,pelvis:r,torsoG:a,headG:d,head:f,hair:y,torso:u,hands:{L:R.hand,R:w.hand},arms:{L:R,R:w},legs:{L:T,R:M},sombra:P,place(I,N,H=0,K=0){return o.position.set(I,H,N),o.rotation.y=K,z},pose(I={}){r.position.y=I.bob||0,r.position.z=I.dz||0,a.rotation.set((I.lean||0)*Ln,(I.twist||0)*Ln,(I.tilt||0)*Ln),d.rotation.set((I.headX||0)*Ln,(I.headY||0)*Ln,(I.headZ||0)*Ln);let N=(K,k,it,pt)=>{K.sh.rotation.set(-(k[0]||0)*Ln,(k[2]||0)*Ln*pt,pt*(k[1]??8)*Ln),K.el.rotation.set(-(it||0)*Ln,0,0)};N(R,I.shL||[0,8],I.elL??8,1),N(w,I.shR||[0,8],I.elR??8,-1);let H=(K,k,it,pt)=>{K.hp.rotation.set(-(k[0]||0)*Ln,0,pt*(k[1]||0)*Ln),K.kn.rotation.set((it||0)*Ln,0,0),K.an.rotation.set(-(k[0]||0)*Ln*0+(it||0)*Ln*-.4*(k[2]??1),0,0)};return H(T,I.hipL||[0,0],I.knL||0,1),H(M,I.hipR||[0,0],I.knR||0,-1),z},face(I={}){let N=I.look||[0,0],H=I.mouth||{},K=(it,pt=20)=>Math.round((it||0)*pt),k=[I.emo,K(I.blink,10),K(N[0],8),K(N[1],8),K(H.open,12),K(H.round,6),H.smile===void 0?"u":K(H.smile,8),K(I.brow,6),I.lagrima?1:0,I.olhosAbertos?1:0,I.lingua?1:0,I.pisca1?1:0].join("|");return k!==q.key&&(q.key=k,$E(E,{...n.rosto,...I,pele:t,oculos:n.oculos,rugas:n.rugas,oculosEscuros:n.oculosEscuros,bigode:n.bigode,barba:n.barba,olheiras:n.olheiras,sardas:n.sardas,nariz:n.nariz,cilios:n.cilios,sobr:n.sobr,sobrW:n.sobrW,banguela:n.banguela},N),m.needsUpdate=!0),z},faceTo(I,N){return o.rotation.y=Math.atan2(I-o.position.x,N-o.position.z),z},hold(I,N="R"){return z.hands[N].add(I),I}};return z.estatua=(I="#A9A49C")=>{z.congelado=!0;let N=Vt(I);return o.traverse(H=>{H.isMesh&&!H.userData.isOutline&&H!==P&&H!==b&&(H.material=N)}),p.color.set("#B8B4AC"),z},z.pose({}),z.face({}),z}function o0(n,t=1.8,e=1,i=0){let s=(n*t+i)*Math.PI*2,o=Math.sin(s),r=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.025*e-.012,lean:4*e,twist:o*4*e,hipL:[28*o*e,0],hipR:[-28*o*e,0],knL:Math.max(0,-r)*45*e+5,knR:Math.max(0,r)*45*e+5,shL:[-24*o*e,7],shR:[24*o*e,7],elL:18+Math.max(0,-o)*18,elR:18+Math.max(0,o)*18,headX:-2}}function r0(n,t=2.9,e=1,i=0){let s=(n*t+i)*Math.PI*2,o=Math.sin(s),r=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.06*e-.02,lean:16*e,twist:o*7*e,hipL:[50*o*e+8,0],hipR:[-50*o*e+8,0],knL:(Math.max(0,-r)*85+18)*e,knR:(Math.max(0,r)*85+18)*e,shL:[-45*o*e,10],shR:[45*o*e,10],elL:85,elR:85,headX:-10*e}}var bt=(n={})=>({bob:-.17,dz:-.02,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shL:[12,8],shR:[12,8],elL:30,elR:30,...n});function Ad(n,t=0){let e=3.1+t%5*.37,i=(n+t*.77)%e/e*e;return i<.07?i/.07:i<.14?1-(i-.07)/.07:0}var a0={total:747,segs:[{quem:"n",pensa:!1,start:0,end:85.48,a:0,b:282},{quem:"davi",pensa:!1,start:85.48,end:87.32,a:283,b:287},{quem:"gui",pensa:!1,start:87.32,end:88.52,a:288,b:289},{quem:"davi",pensa:!1,start:88.52,end:90.24,a:290,b:294},{quem:"gui",pensa:!1,start:90.24,end:92.04,a:295,b:297},{quem:"n",pensa:!1,start:92.04,end:103.48,a:298,b:332},{quem:"mae",pensa:!1,start:103.48,end:105.84,a:333,b:339},{quem:"gui",pensa:!1,start:105.84,end:106.88,a:340,b:341},{quem:"mae",pensa:!1,start:106.88,end:108.28,a:342,b:346},{quem:"gui",pensa:!1,start:108.28,end:110.56,a:347,b:350},{quem:"mae",pensa:!1,start:110.56,end:114.32,a:351,b:360},{quem:"n",pensa:!1,start:114.32,end:156.76,a:361,b:478},{quem:"mae",pensa:!1,start:156.76,end:158.44,a:479,b:482},{quem:"gui",pensa:!1,start:158.44,end:160.56,a:483,b:488},{quem:"n",pensa:!1,start:160.56,end:180.24,a:489,b:544},{quem:"prof",pensa:!1,start:180.24,end:182.96,a:545,b:549},{quem:"tiago",pensa:!1,start:182.96,end:184.96,a:550,b:554},{quem:"n",pensa:!1,start:184.96,end:210.56,a:555,b:624},{quem:"tiago",pensa:!1,start:210.978,end:212.478,a:625,b:628},{quem:"gui",pensa:!1,start:212.478,end:215.478,a:629,b:634},{quem:"n",pensa:!1,start:215.478,end:249.678,a:635,b:742},{quem:"tiago",pensa:!1,start:249.678,end:251.878,a:743,b:748},{quem:"gui",pensa:!1,start:251.878,end:253.778,a:749,b:751},{quem:"n",pensa:!1,start:253.778,end:266.877,a:752,b:792},{quem:"mae",pensa:!1,start:266.877,end:269.178,a:793,b:795},{quem:"n",pensa:!1,start:269.178,end:325.978,a:796,b:953},{quem:"davi",pensa:!1,start:326.109,end:327.555,a:954,b:955},{quem:"gui",pensa:!1,start:327.687,end:330.577,a:956,b:960},{quem:"n",pensa:!1,start:330.577,end:356.278,a:961,b:1043},{quem:"davi",pensa:!1,start:356.433,end:358.909,a:1044,b:1047},{quem:"gui",pensa:!1,start:359.065,end:361.077,a:1048,b:1050},{quem:"n",pensa:!1,start:361.077,end:388.478,a:1051,b:1124},{quem:"caio",pensa:!1,start:388.582,end:391.279,a:1125,b:1129},{quem:"n",pensa:!1,start:391.384,end:398.978,a:1130,b:1153},{quem:"pef",pensa:!1,start:399.047,end:403.338,a:1154,b:1164},{quem:"n",pensa:!1,start:403.643,end:430.491,a:1165,b:1243},{quem:"cic",pensa:!1,start:430.491,end:431.474,a:1244,b:1246},{quem:"n",pensa:!1,start:431.474,end:467.679,a:1247,b:1346},{quem:"tiago",pensa:!1,start:467.679,end:471.963,a:1347,b:1359},{quem:"mae",pensa:!1,start:472.843,end:475.863,a:1360,b:1368},{quem:"gui",pensa:!1,start:475.863,end:477.529,a:1369,b:1373},{quem:"n",pensa:!1,start:477.529,end:500.083,a:1374,b:1438},{quem:"mae",pensa:!1,start:500.323,end:510.643,a:1439,b:1473},{quem:"gui",pensa:!1,start:510.643,end:512.058,a:1474,b:1476},{quem:"n",pensa:!1,start:512.058,end:530.123,a:1477,b:1520},{quem:"n",pensa:!1,start:530.803,end:548.243,a:1521,b:1565},{quem:"juiz",pensa:!1,start:548.643,end:549.468,a:1566,b:1567},{quem:"n",pensa:!1,start:549.468,end:579.01,a:1568,b:1650},{quem:"gui",pensa:!1,start:579.01,end:580.233,a:1651,b:1651},{quem:"n",pensa:!1,start:580.243,end:591.283,a:1652,b:1682},{quem:"n",pensa:!1,start:591.923,end:620.483,a:1683,b:1769},{quem:"gui",pensa:!1,start:620.963,end:622.963,a:1770,b:1772},{quem:"davi",pensa:!1,start:623.363,end:625.123,a:1773,b:1777},{quem:"n",pensa:!1,start:625.123,end:646.163,a:1778,b:1834},{quem:"gui",pensa:!1,start:646.563,end:648.003,a:1835,b:1838},{quem:"davi",pensa:!1,start:648.003,end:650.003,a:1839,b:1843},{quem:"gui",pensa:!1,start:650.323,end:652.323,a:1844,b:1848},{quem:"n",pensa:!1,start:652.483,end:674.163,a:1849,b:1917},{quem:"davi",pensa:!1,start:674.563,end:678.083,a:1918,b:1929},{quem:"davi",pensa:!1,start:678.723,end:680.723,a:1930,b:1937},{quem:"n",pensa:!1,start:680.723,end:693.123,a:1938,b:1974},{quem:"gui",pensa:!1,start:693.523,end:695.523,a:1975,b:1982},{quem:"davi",pensa:!1,start:696.643,end:699.523,a:1983,b:1993},{quem:"n",pensa:!1,start:699.923,end:706.563,a:1994,b:2013},{quem:"n",pensa:!1,start:707.283,end:729.363,a:2014,b:2075},{quem:"n",pensa:!1,start:730.083,end:744.681,a:2076,b:2121}],falas:[{quem:"davi",start:85.4,end:87.433,boca:[0,0,0,0,.17,.54,.78,.88,.97,1,.98,.92,.81,.69,.62,.66,.79,.93,.99,.96,.86,.79,.78,.68,.4,0,0,.22,.67,.93,.91,.87,.86,.83,.82,.82,.75,.7,.81,.9,.88,.83,.85,.9,.9,.86,.83,.83,.84,.86,.87,.85,.78,.66,.51,.32,0,0,.33,.59,.52],round:[0,0,0,0,0,1,.84,0,.67,.93,.59,.58,.77,.61,.97,1,0,.42,.85,.71,.22,.46,.91,1,1,0,0,0,0,.27,.76,.44,.63,1,1,.77,.64,1,.41,.3,.78,0,0,.89,.76,.7,.34,.64,.91,1,1,.93,1,1,1,1,0,0,.96,1,1]},{quem:"gui",start:87.267,end:88.633,boca:[0,0,.32,.57,.73,.84,.85,.64,.29,.25,.61,.87,.93,.96,.99,1,1,1,.98,.9,.79,.77,.86,.87,.78,.7,.71,.75,.73,.68,.64,.62,.56,.4,.2,0,0,0,.18,.58,.64],round:[0,0,.96,1,1,.92,.96,1,0,0,.81,.99,.96,.93,.94,.98,.88,.9,.94,.82,0,.52,1,1,1,.87,1,1,1,1,1,1,1,.76,0,0,0,0,0,0,0]},{quem:"davi",start:88.467,end:90.367,boca:[0,0,0,.45,.85,.9,.67,.57,.67,.55,.18,0,.37,.62,.52,.23,.27,.58,.77,.7,.57,.57,.62,.63,.6,.6,.62,.65,.71,.76,.71,.66,.79,.9,.69,.28,.16,.46,.73,.73,.65,.44,.17,.24,.62,.89,.84,.66,.58,.58,.49,.3,0,0,.29,.61,.65],round:[0,0,0,0,0,.44,.39,.49,.42,.51,0,0,.23,.91,.74,0,0,.01,0,0,.65,.96,.96,1,1,1,1,.96,.97,.97,1,1,.91,1,.85,0,0,0,.7,.44,0,0,0,0,.92,.81,.68,.57,.46,.3,.29,0,0,0,0,1,.76]},{quem:"gui",start:90.167,end:92.167,boca:[.43,.47,.44,.57,.76,.91,.93,.71,.36,0,.22,.67,.93,.97,.99,1,1,.99,.97,.93,.86,.75,.66,.62,.6,.56,.46,.41,.54,.7,.75,.75,.81,.79,.68,.57,.57,.7,.79,.79,.79,.79,.77,.77,.78,.77,.74,.63,.41,.14,0,0,0,0,0,0,0,.23,.41,.34],round:[.21,.18,.77,1,1,.76,.9,1,1,0,0,1,.92,.86,.77,.89,.92,.87,.94,.81,.87,.33,0,0,0,0,0,0,.77,1,1,.22,.89,1,0,0,0,.94,.93,.92,1,.79,.97,.77,.85,1,.97,1,.95,0,0,0,0,0,0,0,0,0,1,1]},{quem:"mae",start:103.4,end:105.967,boca:[0,0,0,0,.16,.49,.68,.75,.81,.83,.86,.93,.97,.99,1,.98,.93,.88,.86,.88,.9,.88,.83,.76,.7,.62,.47,.25,0,0,0,0,.12,.4,.64,.75,.79,.78,.8,.88,.94,.96,.99,.93,.8,.78,.87,.93,.95,.84,.62,.64,.82,.82,.64,.6,.74,.9,.92,.9,.89,.89,.86,.86,.89,.9,.86,.76,.63,.42,.17,0,0,0,.17,.57,.61],round:[0,0,0,0,0,.89,.99,.89,.76,.96,.87,.65,.53,.51,.48,.46,.87,1,1,1,.99,.99,1,.99,1,1,1,0,0,0,0,0,0,1,1,.92,0,0,0,.66,.82,1,1,1,.49,.16,.86,.83,.98,1,1,.11,1,.97,0,0,.65,.86,.8,.95,.88,.47,.82,.79,.7,.91,.98,1,1,1,0,0,0,0,0,.64,1]},{quem:"gui",start:105.767,end:107,boca:[.14,.15,0,.19,.55,.8,.87,.92,.95,.94,.91,.9,.95,.99,1,.99,.98,.97,.98,.98,.96,.92,.89,.87,.8,.66,.45,.23,0,0,0,0,0,0,.19,.57,.58],round:[0,0,0,0,.64,1,1,1,1,1,.79,.36,.96,.89,.89,.98,.96,1,1,1,1,1,1,.88,1,1,.32,0,0,0,0,0,0,0,0,.99,1]},{quem:"mae",start:106.8,end:108.4,boca:[0,0,0,.2,.62,.86,.82,.56,.35,.56,.86,.95,.95,.96,.98,.96,.73,.36,.29,.51,.73,.9,.99,.93,.75,.59,.63,.83,.96,.95,.93,.94,.93,.88,.79,.7,.63,.58,.41,.18,0,0,0,0,.14,.44,.67,.56],round:[0,0,0,0,.99,1,1,.85,.61,0,.92,.87,.9,1,1,1,1,.98,0,0,0,.11,1,1,.57,0,0,.94,.91,.97,1,.93,.62,.77,.82,.83,.77,1,.98,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:108.2,end:110.667,boca:[0,0,.15,.47,.7,.8,.87,.89,.88,.86,.8,.7,.58,.36,0,0,0,0,0,0,0,0,.29,.58,.72,.76,.85,.92,.93,.92,.94,.93,.84,.56,.42,.73,.98,1,1,1,1,.99,.97,.93,.89,.84,.74,.56,.31,0,0,.2,.45,.64,.72,.74,.73,.72,.7,.68,.65,.61,.58,.58,.56,.51,.45,.41,.4,.38,.35,.32,.25,.12],round:[0,0,0,0,0,0,1,.93,.97,.87,.98,.57,.91,0,0,0,0,0,0,0,0,0,0,0,0,0,.16,.85,.82,.71,.9,.92,1,.96,.07,.84,1,1,.98,.96,1,.99,1,1,.99,.95,.95,.93,.89,0,0,0,.09,0,0,0,0,.01,.34,.41,.42,.53,.39,.74,.87,.55,.42,.31,.22,.19,0,.15,0,0]},{quem:"mae",start:110.5,end:114.433,boca:[0,0,0,0,0,.27,.49,.68,.77,.73,.62,.62,.78,.91,.92,.91,.86,.77,.6,.43,.53,.77,.78,.51,.26,.4,.68,.78,.71,.62,.64,.69,.79,.93,.99,1,.99,.98,.98,.95,.9,.87,.75,.57,.5,.47,.46,.6,.8,.89,.86,.77,.71,.75,.79,.75,.68,.6,.45,.23,0,0,0,0,.25,.62,.74,.61,.62,.83,.94,.93,.92,.9,.72,.35,0,0,.19,.64,.94,1,.97,.95,.98,1,.97,.88,.78,.72,.65,.71,.88,.94,.92,.93,.9,.82,.74,.75,.84,.82,.64,.47,.41,.44,.47,.46,.42,.29,0,0,0,0,0,.16,.56,.64],round:[0,0,0,0,0,0,0,0,.97,1,1,1,.59,.86,.82,.8,.87,.23,0,0,0,.94,.94,.88,0,0,.72,.88,1,1,1,1,.97,1,1,1,.97,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,.91,.98,0,0,.99,.84,.96,.96,.82,1,.99,0,0,0,0,.92,.91,.85,.76,1,1,1,.48,.01,.4,.86,.92,.97,.94,.8,1,1,.98,.61,.46,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,.13,.85]},{quem:"mae",start:156.7,end:158.567,boca:[0,0,0,.23,.5,.67,.76,.68,.44,.39,.63,.89,.93,.71,.37,.16,.21,.54,.82,.89,.91,.88,.82,.8,.77,.77,.87,.91,.84,.82,.89,.97,1,.98,.95,.88,.8,.77,.77,.75,.76,.79,.78,.77,.73,.57,.33,.14,0,0,0,0,0,0,.21,.42],round:[0,0,0,0,0,0,.13,.96,.96,.81,0,.94,.84,.77,.91,0,0,0,.89,.79,.96,.86,0,0,0,0,.62,.69,.74,.73,.88,.72,.71,.96,.95,1,0,0,0,0,0,.99,.92,1,1,1,.74,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:158.367,end:160.667,boca:[0,0,0,0,.22,.59,.81,.85,.85,.86,.9,.91,.88,.88,.93,.96,.98,.99,1,1,.97,.82,.57,.34,.16,0,0,0,0,0,0,.17,.49,.68,.74,.8,.83,.84,.81,.8,.85,.81,.75,.83,.87,.79,.78,.86,.91,.91,.9,.94,.98,.99,.96,.92,.89,.86,.84,.77,.61,.37,.13,0,0,0,0,0,.14],round:[0,0,0,0,0,0,0,0,0,0,0,.94,.81,.87,1,.91,.78,.82,.74,.92,1,.91,0,0,0,0,0,0,0,0,0,0,1,1,.97,1,1,.93,0,0,.93,1,.66,.67,.88,0,0,.47,.89,.89,.62,.52,.97,1,1,1,1,1,1,1,1,.71,0,0,0,0,0,0,0]},{quem:"prof",start:180.167,end:183.067,boca:[0,0,0,.19,.6,.85,.85,.84,.86,.83,.84,.9,.89,.79,.71,.76,.89,.96,.87,.54,.17,.22,.65,.94,.99,.99,.99,.98,.93,.86,.88,.92,.89,.82,.79,.82,.86,.82,.73,.63,.55,.58,.66,.66,.56,.4,.24,0,0,0,0,.31,.49,.62,.8,.92,.92,.89,.86,.8,.78,.87,.87,.59,.23,0,.17,.57,.9,.99,1,.94,.82,.79,.89,.92,.75,.53,.36,.2,0,0,0,0,0,.23,.28],round:[0,0,0,0,0,1,.67,.64,.64,.38,0,1,.94,0,0,0,.59,1,1,.72,0,0,.37,1,.97,.87,.84,.91,.9,0,0,.82,.86,.59,.01,.4,.85,.64,.67,.71,.75,0,0,0,.73,0,0,0,0,0,0,1,1,.86,.55,.91,.27,.41,.89,1,.74,.67,.92,.32,0,0,0,0,.55,1,1,1,1,1,.86,1,.87,.69,.78,0,0,0,0,0,0,0,0]},{quem:"tiago",start:182.9,end:185.067,boca:[0,0,.16,.52,.79,.91,.97,.98,.97,.96,.91,.85,.85,.86,.81,.75,.67,.51,.27,0,0,0,.17,.53,.79,.89,.95,.94,.85,.76,.71,.79,.92,.91,.85,.87,.91,.91,.87,.86,.87,.89,.9,.9,.92,.93,.94,.98,.99,.99,1,1,1,.99,.94,.82,.67,.46,.2,0,0,0,.12,.44,.51],round:[0,0,0,.55,.88,.87,.61,.41,.36,.22,0,.56,.65,.58,.28,.14,.6,.71,0,0,0,0,0,.26,.21,0,0,0,0,0,.08,.26,0,.04,0,0,.14,0,.14,.91,.97,.15,0,.04,.07,.44,.27,.06,0,0,0,0,0,0,.04,0,.16,.27,0,0,0,0,0,0,0]},{quem:"tiago",start:210.9,end:212.6,boca:[0,0,0,.17,.38,.48,.47,.42,.36,.36,.44,.47,.49,.68,.91,.91,.62,.44,.56,.71,.87,.99,.93,.8,.71,.74,.86,.93,.91,.88,.84,.87,.92,.92,.93,.95,.95,.92,.87,.83,.77,.71,.57,.32,0,0,0,0,0,.3,.41],round:[0,0,0,0,0,0,0,0,0,0,0,.84,0,0,.64,1,.99,.71,0,.08,.39,.78,.92,1,1,1,.97,.66,.77,.92,.68,.85,1,1,.94,.99,.79,.9,.94,.97,.91,.98,1,1,0,0,0,0,0,0,0]},{quem:"gui",start:212.4,end:215.6,boca:[0,0,0,0,.29,.58,.73,.78,.85,.91,.92,.91,.93,.94,.86,.77,.79,.85,.83,.75,.6,.42,.29,.22,.12,0,0,0,0,0,.3,.66,.79,.75,.76,.82,.7,.46,.5,.74,.87,.85,.77,.72,.71,.7,.71,.75,.84,.89,.89,.89,.91,.94,.95,.94,.87,.77,.68,.65,.68,.79,.94,1,1,.98,.96,.95,.97,.98,1,.99,.93,.83,.75,.71,.73,.82,.92,.96,.89,.78,.74,.81,.86,.83,.76,.6,.35,0,0,0,0,0,0,0],round:[0,0,0,0,0,0,0,0,.07,.98,.92,1,1,1,1,1,1,1,1,1,.84,0,0,0,0,0,0,0,0,0,.17,.78,0,0,0,0,1,.81,.22,.54,1,.81,0,0,0,0,0,0,1,1,.87,.91,1,1,1,1,1,1,1,1,1,.74,.99,1,1,.96,1,1,1,1,.99,.96,1,.51,.03,0,0,.34,1,1,.99,1,1,.62,.98,.97,1,1,.89,0,0,0,0,0,0,0]},{quem:"tiago",start:249.6,end:252,boca:[.15,0,0,0,0,0,.23,.7,.95,.92,.89,.93,.93,.78,.56,.56,.78,.95,.98,.95,.87,.78,.78,.8,.76,.67,.54,.36,.16,0,0,0,.38,.75,.94,.9,.75,.72,.84,.91,.93,.93,.91,.91,.92,.94,.92,.85,.81,.82,.88,.92,.88,.86,.88,.92,.96,.99,.98,.93,.9,.9,.89,.88,.81,.7,.57,.37,.16,0,0,0],round:[0,0,0,0,0,0,0,.51,.79,.86,.66,.73,.72,.96,.85,.63,.11,.96,1,1,.89,1,.88,.94,.96,1,1,1,0,0,0,0,.36,0,.97,.83,1,.95,.76,.87,.89,1,1,.91,.99,.89,0,0,0,0,.39,1,1,1,.99,1,1,1,.87,.75,.46,.67,.71,.74,.89,.74,.81,.86,0,0,0,0]},{quem:"gui",start:251.8,end:253.9,boca:[.34,.27,0,0,0,0,.23,.69,.85,.67,.54,.49,.58,.82,.77,.47,.4,.63,.79,.6,.25,0,.18,.39,.53,.58,.64,.75,.65,.38,.43,.71,.89,.95,.98,.98,.95,.92,.95,.98,.95,.82,.51,.31,.55,.87,.97,.99,.98,.97,.96,.94,.88,.79,.75,.76,.74,.63,.44,.22,0,0,0],round:[.81,0,0,0,0,0,0,.61,.66,0,0,0,0,1,.44,0,0,.28,1,.15,0,0,0,0,0,0,0,.84,1,.86,0,1,1,.99,.84,.87,.93,.31,.81,.7,.74,.89,1,.16,0,.74,.58,.77,.81,.87,1,1,1,.71,0,.41,1,1,1,0,0,0,0]},{quem:"mae",start:266.8,end:269.3,boca:[0,0,0,0,0,0,.35,.57,.7,.76,.76,.74,.78,.88,.96,.99,1,1,1,.95,.89,.87,.87,.87,.87,.87,.88,.88,.9,.92,.94,.91,.81,.59,.3,0,0,0,0,.16,.5,.82,.94,.92,.85,.78,.7,.66,.68,.78,.88,.91,.93,.95,.95,.93,.9,.86,.7,.38,.33,.68,.92,.93,.86,.78,.71,.63,.52,.37,.19,0,0,0,0],round:[0,0,0,0,0,0,.96,.94,.9,.68,.89,.36,.52,.44,.37,.41,.47,.54,.42,.56,.87,1,1,1,.67,.53,.38,.36,.3,.14,.12,.38,1,.96,.49,0,0,0,0,0,.59,.54,.59,.53,.67,1,0,0,0,.31,.6,.46,.51,.61,.56,.64,.67,.99,1,.94,.71,.51,.53,.57,.61,.66,.7,.79,.98,.83,0,0,0,0,0]},{quem:"davi",start:326.033,end:327.667,boca:[.46,.6,.57,.59,.74,.91,.97,.91,.74,.64,.76,.78,.47,.26,.51,.84,.95,.98,.99,.96,.88,.72,.61,.71,.86,.88,.76,.55,.29,0,0,0,0,0,0,0,0,.15,.26,.43,.66,.78,.8,.83,.84,.81,.77,.71,.5],round:[.51,.44,0,0,0,.47,1,1,1,.89,.89,1,1,0,.34,1,1,1,1,.95,.63,.66,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,.6,.96,.99,.96,1,1,.96,.95,.74,.46]},{quem:"gui",start:327.633,end:330.7,boca:[.52,.63,.56,.52,.49,.44,.37,.29,.25,.19,0,0,0,0,0,0,0,0,.24,.43,.57,.7,.85,.92,.93,.97,1,1,.98,.97,.98,1,.98,.95,.88,.71,.48,.32,.23,.14,0,0,0,.15,.45,.62,.64,.66,.67,.69,.7,.67,.61,.57,.56,.56,.56,.54,.52,.53,.53,.54,.58,.62,.66,.69,.71,.66,.53,.54,.68,.65,.43,.32,.41,.6,.79,.84,.79,.74,.71,.66,.47,.16,0,0,0,0,0,0,0,.17],round:[.46,.05,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,.9,.82,.84,.74,.81,.7,.87,.89,.97,1,1,1,1,.91,0,0,0,0,0,0,0,0,1,1,1,.81,.83,.87,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,.99,1,1,1,1,1,1,.81,0,0,0,.99,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0]},{quem:"davi",start:356.367,end:359.033,boca:[.53,.74,.81,.93,.98,.95,.88,.83,.78,.69,.59,.6,.76,.86,.85,.86,.9,.87,.81,.73,.55,.32,.12,0,0,.19,.62,.9,.95,.98,.94,.83,.79,.84,.89,.89,.9,.89,.83,.76,.77,.83,.86,.87,.88,.88,.82,.72,.58,.34,0,0,0,0,0,0,0,0,0,0,.25,.75,.86,.47,0,.18,.56,.78,.77,.73,.73,.72,.71,.75,.86,.87,.77,.83,.93,.69],round:[.97,1,0,.82,.81,.56,.24,.16,.81,.99,1,.78,.37,.62,.5,.49,.88,.94,1,1,.99,1,0,0,0,0,1,1,.53,.94,.84,.43,.64,.68,.9,.47,0,0,.34,0,0,0,0,.57,.67,1,.99,1,1,1,0,0,0,0,0,0,0,0,0,0,0,.76,1,0,0,0,.34,1,1,.94,.9,.85,.72,.57,.79,1,.97,.76,1,1]},{quem:"gui",start:359,end:361.2,boca:[.71,.98,.97,.91,.76,.46,.26,.4,.52,.51,.52,.57,.63,.51,.22,0,.26,.39,.44,.52,.71,.88,.95,.92,.84,.78,.75,.79,.91,.99,.99,.97,.95,.95,.96,.96,.96,.97,.99,1,.98,.89,.82,.83,.85,.84,.79,.73,.72,.78,.8,.77,.71,.59,.36,0,0,0,0,0,0,0,0,0,.17,.14],round:[1,.87,1,.96,.97,1,0,.28,.27,0,0,.08,.74,1,0,0,0,0,0,0,.51,.95,.84,.92,1,1,1,.94,1,1,.98,.96,1,.96,.82,.74,.89,.74,.56,.64,.69,.66,0,0,0,0,0,0,0,.69,1,1,1,1,.49,0,0,0,0,0,0,0,0,0,0,0]},{quem:"caio",start:388.5,end:391.4,boca:[0,.3,.68,.87,.73,.6,.77,.93,.96,.97,.96,.95,.98,1,.99,.96,.91,.91,.95,.97,.98,.99,.95,.84,.79,.85,.93,.93,.81,.6,.36,.14,0,0,0,0,0,0,0,0,.15,.45,.64,.7,.7,.65,.63,.67,.69,.69,.76,.83,.85,.87,.84,.69,.68,.86,.94,.94,.95,.94,.93,.76,.45,.42,.71,.9,.84,.75,.75,.75,.7,.62,.45,.19,0,0,0,0,.36,.58,.75,.88,.92,.87,.61],round:[0,0,.97,.94,1,.53,.93,.97,.84,1,1,1,.94,.97,.99,1,1,1,1,1,.84,.87,.76,.42,0,.16,.89,.91,1,.84,.79,0,0,0,0,0,0,0,0,0,0,1,1,.86,.75,.56,.77,0,0,0,0,.86,.82,.71,.89,.37,0,.8,.89,.65,.29,.71,.76,.97,1,0,0,1,.99,1,1,1,1,1,1,0,0,0,0,0,0,0,0,.97,.91,.68,.17]},{quem:"pef",start:398.967,end:403.467,boca:[0,0,0,.14,.5,.83,.97,.99,1,1,.99,.96,.88,.79,.74,.75,.72,.59,.41,.25,0,0,0,0,0,0,0,.27,.75,.98,.94,.85,.79,.88,.97,.92,.84,.88,.97,.98,.94,.92,.95,.95,.85,.71,.73,.83,.83,.73,.63,.71,.88,.9,.84,.87,.95,.97,.96,.94,.92,.91,.93,.95,.87,.79,.89,.96,.93,.94,.95,.95,.95,.92,.87,.8,.71,.67,.67,.6,.44,.28,.15,0,0,0,0,0,.43,.8,.89,.83,.88,.96,.87,.73,.77,.88,.9,.84,.77,.69,.69,.83,.91,.86,.75,.74,.88,.97,.95,.94,.9,.76,.6,.55,.6,.74,.91,.95,.91,.87,.79,.65,.54,.45,.4,.31,.13,0,0,0,0,0,0],round:[0,0,0,0,.96,.64,1,1,1,.95,.87,.78,.47,.11,.92,1,.7,0,0,0,0,0,0,0,0,0,0,0,.6,.97,1,.71,.14,0,1,1,.92,1,1,.99,.94,1,.82,.78,.91,.97,0,.82,.19,0,0,0,.97,.94,1,1,1,1,.98,.89,.97,1,1,1,1,1,.84,1,1,1,1,.92,.92,.87,.81,.97,.94,.84,1,.86,.74,0,0,0,0,0,0,0,.82,1,.68,0,.41,1,1,.86,0,.04,.81,.01,0,0,0,.57,.95,.81,.43,0,.72,.9,.89,.88,.87,.89,1,1,1,.29,.91,.91,.87,.73,.68,.57,.6,0,0,.34,0,0,0,0,0,0,0]},{quem:"cic",start:430.433,end:431.6,boca:[.38,.43,.27,0,0,0,0,0,0,.42,.78,.88,.79,.66,.59,.58,.58,.61,.74,.9,.98,.99,.97,.91,.81,.72,.76,.79,.73,.71,.79,.87,.92,.97,.75],round:[1,1,0,0,0,0,0,0,0,0,.75,.65,.65,0,0,0,0,0,0,.33,1,.99,.76,.61,.77,1,.99,.92,1,1,1,1,1,.91,.74]},{quem:"tiago",start:467.6,end:472.067,boca:[.24,.36,.52,.72,.86,.93,.98,1,1,.94,.71,.46,.44,.54,.57,.57,.59,.63,.66,.66,.7,.69,.54,.37,.3,.23,0,0,0,0,0,0,0,.17,.17,.25,.57,.79,.73,.45,.29,.47,.44,.14,.25,.75,.94,.71,.54,.59,.54,.49,.57,.62,.66,.73,.82,.92,.98,.98,.85,.59,.31,.26,.52,.76,.84,.78,.68,.63,.63,.56,.52,.62,.72,.69,.42,.23,.4,.64,.79,.86,.82,.69,.56,.35,0,0,0,0,0,0,0,0,0,.12,.32,.6,.78,.79,.67,.57,.55,.61,.79,.95,.97,.77,.61,.69,.66,.55,.45,.29,.36,.6,.53,.21,.22,.59,.75,.67,.72,.83,.81,.69,.42,.15,0,0,0,0,0,0],round:[0,.86,.91,.79,.76,.64,.7,.68,.67,.75,.72,.01,.01,.49,.71,.59,.63,.69,.67,.64,.58,.6,.62,.53,.76,0,0,0,0,0,0,0,0,0,0,0,.35,.92,.97,.97,0,.78,1,0,0,.79,.74,.84,.98,.86,.92,.2,.51,1,.86,.92,.86,.66,.64,.55,.62,0,0,0,.69,.7,.63,.34,0,.07,.44,.81,.57,0,.47,.66,.67,0,.96,.84,.81,.67,.62,.55,.64,.7,0,0,0,0,0,0,0,0,0,0,1,.99,.82,.77,.42,0,0,0,.81,.81,.71,.64,0,0,.34,.98,.84,0,.42,.82,.75,0,0,.74,.58,.47,.59,.55,.66,.68,.73,0,0,0,0,0,0,0]},{quem:"mae",start:472.767,end:475.967,boca:[.17,.15,0,0,0,0,0,0,0,0,.21,.59,.86,.89,.85,.88,.9,.65,.46,.71,.96,.99,.98,.96,.82,.53,.4,.59,.8,.92,.98,1,.99,.92,.8,.76,.8,.74,.6,.51,.47,.56,.79,.92,.9,.83,.79,.81,.81,.76,.66,.43,.19,0,0,0,0,0,0,.26,.62,.83,.88,.86,.74,.67,.78,.89,.89,.85,.71,.56,.62,.79,.85,.86,.83,.62,.39,.42,.53,.58,.67,.85,.91,.82,.66,.41,.14,0,0,0,0,.17,.59,.67],round:[0,0,0,0,0,0,0,0,0,0,0,.76,.99,0,0,0,1,.97,.93,.49,.87,.68,.95,1,1,.31,.03,0,.64,.84,.81,.9,.91,.86,0,0,1,1,0,0,0,0,.87,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,.97,.98,0,0,.72,.99,1,1,1,.99,.47,.92,.9,.88,1,.99,.66,0,0,0,0,1,1,1,1,.92,0,0,0,0,0,0,.54,1]},{quem:"gui",start:475.8,end:477.633,boca:[0,0,0,.29,.68,.92,.98,1,1,1,1,.98,.92,.83,.75,.63,.41,.18,0,0,0,0,0,0,.35,.54,.66,.71,.71,.7,.69,.68,.68,.7,.76,.76,.75,.74,.54,.35,.55,.72,.66,.65,.73,.8,.84,.87,.88,.88,.86,.86,.86,.82,.58],round:[0,0,0,0,1,1,1,1,1,1,1,1,1,.96,1,.97,.74,0,0,0,0,0,0,0,.81,.89,.79,.22,0,0,0,0,0,0,1,1,1,.89,1,.75,.6,.94,1,1,1,1,1,1,1,1,1,1,1,1,1]},{quem:"mae",start:500.267,end:510.767,boca:[0,0,0,0,0,0,0,.21,.66,.94,.99,.99,.99,.99,.99,.99,1,.99,.99,.98,.99,.99,.99,.91,.75,.61,.52,.6,.84,.97,.98,.95,.93,.91,.88,.77,.63,.6,.65,.58,.4,.47,.78,.97,.99,.99,.98,.91,.76,.67,.77,.92,.98,.93,.87,.88,.81,.58,.39,.44,.7,.86,.88,.9,.93,.97,.99,.98,.95,.95,.94,.91,.9,.9,.89,.85,.81,.74,.55,.37,.49,.81,.96,.92,.9,.89,.8,.76,.85,.84,.76,.83,.89,.83,.7,.58,.63,.77,.82,.77,.68,.52,.25,0,0,0,0,0,0,0,0,0,0,0,.32,.67,.92,.99,.93,.81,.82,.94,.99,.96,.77,.58,.69,.89,.95,.89,.85,.92,.95,.84,.72,.75,.86,.89,.87,.73,.59,.67,.83,.85,.79,.79,.88,.97,1,1,.98,.94,.9,.89,.9,.89,.82,.63,.41,.4,.6,.8,.89,.83,.68,.61,.67,.72,.76,.75,.51,.16,0,.12,.48,.82,.94,.92,.84,.8,.83,.86,.89,.9,.92,.92,.9,.86,.82,.78,.71,.66,.66,.61,.39,0,0,0,0,0,0,0,0,0,0,0,0,0,.14,.52,.84,.92,.76,.49,.5,.69,.84,.92,.96,.98,.98,.98,.98,1,1,1,1,.99,.83,.58,.56,.54,.35,.38,.59,.63,.6,.67,.71,.66,.61,.63,.71,.75,.64,.55,.63,.77,.8,.74,.65,.54,.34,0,0,0,0,0,0,0,0,0,0,0,0,0,.3,.64,.84,.88,.9,.9,.84,.75,.77,.85,.7,.35,.3,.63,.79,.71,.66,.69,.73,.71,.74,.79,.71,.62,.61,.68,.76,.8,.77,.73,.77,.81,.84,.84,.74,.47,.25,.26,.37,.54,.67,.68,.66,.65,.62,.59,.57,.51,.31],round:[0,0,0,0,0,0,0,0,.98,1,1,1,.94,.87,.99,1,.95,.79,.87,.92,.87,.92,.92,1,0,0,.79,1,.74,.85,.88,.79,.71,1,1,1,0,0,0,0,0,0,.95,1,1,1,1,1,1,0,0,.91,.98,.96,1,1,.92,0,0,0,1,1,1,1,1,1,.94,1,1,1,.89,1,1,.97,.96,1,0,0,0,.63,.19,.96,.86,.95,1,.97,1,1,1,1,1,.94,.97,.95,1,.7,.83,1,1,.96,1,1,0,0,0,0,0,0,0,0,0,0,0,0,.9,.68,.98,1,1,.97,.87,.91,.82,.88,.99,1,.41,.99,1,.42,.39,.94,1,1,1,.64,.86,.94,1,1,.54,.98,.79,.89,1,1,1,.9,.78,.81,.82,1,1,.99,1,1,.91,.85,0,0,.11,.99,.97,1,.77,0,.54,1,.89,.89,1,0,0,0,0,1,1,1,1,1,.97,1,1,1,1,1,1,1,1,1,1,.94,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.49,1,.9,.96,.95,0,0,.89,1,1,1,1,1,1,1,1,1,.99,1,1,.87,0,1,.9,0,.25,1,.16,.99,.92,0,0,0,.38,1,1,.8,1,.91,.95,.9,.99,1,.91,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.83,1,1,1,1,1,.88,1,1,.96,.89,.12,1,1,0,0,0,1,1,.97,1,0,0,0,.53,.77,.92,1,1,1,1,1,1,1,.54,0,0,.04,.81,.93,.89,.98,1,1,1,1,1,1]},{quem:"gui",start:510.567,end:512.167,boca:[.48,.63,.61,.6,.57,.42,.19,0,0,0,0,.13,.48,.81,.95,.98,.98,.96,.97,.99,1,1,1,.99,.97,.86,.66,.5,.44,.4,.36,.32,.28,.21,0,0,0,.16,.55,.81,.85,.89,.95,.96,.93,.9,.87,.62],round:[1,1,1,1,1,1,0,0,0,0,0,0,.31,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,.52,1,.97,1,1,.95,0,0,0,0]},{quem:"juiz",start:548.567,end:549.6,boca:[0,0,0,.21,.66,.95,.99,.91,.79,.82,.9,.83,.73,.79,.92,.94,.95,.91,.78,.71,.74,.84,.87,.73,.51,.34,.3,.25,.15,0,0],round:[0,0,0,0,.46,.94,.85,.89,1,1,.99,1,1,.94,1,1,1,.94,0,0,0,.85,.84,.84,.81,.43,0,0,0,0,0]},{quem:"gui",start:578.933,end:580.333,boca:[0,0,0,0,0,0,0,0,.28,.6,.8,.85,.87,.91,.97,.97,.81,.63,.74,.94,1,.99,.98,.97,.93,.87,.75,.66,.73,.79,.75,.66,.54,.45,.35,.2,0,0,0,0,0,.2],round:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,.88,.62,.81,.72,0,.57,1,1,1,.82,.84,.95,1,.42,0,0,0,1,.36,.43,.37,0,0,0,0,0,0,0]},{quem:"gui",start:620.9,end:623.067,boca:[0,0,0,.4,.73,.89,.89,.8,.77,.85,.94,.97,.95,.91,.8,.56,.29,0,0,0,0,0,.15,.14,0,0,0,0,0,0,0,.35,.68,.85,.85,.7,.53,.61,.84,.96,.97,.86,.6,.43,.61,.85,.9,.83,.68,.54,.46,.4,.43,.52,.56,.7,.9,.98,1,1,.98,.94,.84,.56,.17],round:[0,0,0,1,1,.81,.85,.17,0,.82,.96,1,.8,.86,.97,.27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.42,.22,0,0,0,0,0,.91,1,.98,1,1,.56,.22,.93,1,.76,.22,0,0,.07,0,.76,.84,.8,.64,.99,.99,1,1,1,1,.89,0]},{quem:"davi",start:623.3,end:625.233,boca:[0,0,0,.44,.83,.99,.97,.88,.87,.95,.99,.98,.97,.96,.96,.95,.94,.9,.86,.86,.78,.69,.75,.83,.84,.88,.89,.88,.89,.84,.77,.81,.9,.89,.83,.84,.89,.9,.89,.88,.86,.85,.84,.78,.65,.44,.22,0,0,0,0,0,0,0,0,0,0,.21],round:[0,0,0,0,.21,1,1,1,.39,1,1,1,1,1,1,1,1,1,.95,.97,1,.97,.03,.58,.32,1,.99,0,0,0,0,.94,1,1,.72,1,1,1,1,1,1,1,1,1,1,.55,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:646.5,end:648.133,boca:[0,0,0,.13,.5,.86,.99,1,1,.99,.98,.97,.93,.87,.85,.88,.89,.88,.9,.94,.95,.91,.88,.89,.92,.93,.91,.88,.86,.84,.82,.8,.7,.48,.21,0,0,0,0,0,0,.13,.44,.72,.8,.78,.77,.85,.69],round:[0,0,0,0,.78,1,1,1,1,1,1,1,.11,0,0,.97,1,1,1,1,1,.78,0,0,1,1,1,.99,1,1,1,1,1,.9,0,0,0,0,0,0,0,0,0,.74,1,1,1,1,1]},{quem:"davi",start:647.933,end:650.133,boca:[.41,.58,.52,.51,.7,.91,.97,.96,.94,.91,.79,.66,.71,.82,.88,.91,.9,.88,.88,.87,.87,.94,.98,.97,.96,.96,.93,.9,.88,.86,.85,.77,.69,.7,.75,.75,.67,.43,.13,0,0,0,0,0,0,0,0,.14,.46,.78,.95,.99,.89,.68,.64,.82,.93,.83,.73,.78,.89,.89,.85,.78,.52,.16],round:[.74,1,1,1,1,1,1,1,1,1,1,.97,.74,.93,.97,0,0,0,.87,.84,0,.79,1,1,1,1,1,1,.97,1,.99,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.39,0,1,.95,1,1,.33,.49,1,1,1,1,1,1,1,1,1,0]},{quem:"gui",start:650.267,end:652.433,boca:[0,0,0,.15,.53,.84,.94,.96,.92,.89,.89,.9,.95,.97,.94,.95,.97,.94,.91,.92,.92,.92,.93,.97,.99,.99,.97,.94,.9,.74,.46,.19,0,0,0,0,0,0,0,0,0,.31,.65,.9,.88,.75,.79,.93,.98,.98,.99,.98,.94,.89,.89,.91,.91,.88,.8,.64,.43,.22,0,0,0],round:[0,0,0,0,.4,.94,.99,1,0,0,0,0,1,.56,0,.15,1,.89,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,.15,.27,1,1,1,0,.51,1,1,1,1,.72,0,.08,1,1,1,1,.96,.3,0,0,0,0]},{quem:"davi",start:674.5,end:678.2,boca:[0,0,0,.18,.61,.93,.95,.89,.91,.94,.96,.97,.95,.91,.88,.89,.88,.84,.82,.6,.35,.55,.87,.97,.97,.96,.95,.94,.7,.42,.53,.79,.89,.88,.83,.84,.89,.89,.71,.44,.46,.71,.8,.75,.66,.51,.28,0,0,0,0,0,0,0,0,0,0,0,.14,.5,.63,.45,.49,.75,.83,.68,.68,.87,.9,.84,.81,.87,.91,.89,.87,.6,.25,.4,.79,.87,.69,.6,.7,.87,.96,.98,.96,.93,.92,.95,.98,.99,.98,.98,.97,.96,.93,.85,.76,.65,.48,.47,.68,.82,.85,.85,.85,.84,.76,.62,.39],round:[0,0,0,0,0,.31,.92,.91,.96,1,.97,.97,1,1,.73,0,0,0,.26,1,.86,0,.47,1,1,1,.98,.97,1,.89,.36,1,.96,.29,0,.34,1,1,1,1,0,.9,.94,.77,.93,.88,0,0,0,0,0,0,0,0,0,0,0,0,0,.53,.9,1,0,.89,1,0,0,1,.47,0,0,.16,1,1,1,1,0,.42,1,.94,1,.79,0,.42,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.77,0,.15,.8,.52,.9,1,.95,1,1]},{quem:"davi",start:678.667,end:680.833,boca:[0,0,.13,.44,.66,.73,.75,.81,.92,.99,1,1,.99,.93,.85,.85,.91,.97,.99,.99,.88,.74,.74,.81,.85,.89,.94,.96,.95,.94,.93,.97,.99,.98,.95,.94,.95,.84,.69,.73,.89,.98,.98,.96,.95,.94,.92,.9,.88,.81,.64,.34,0,0,0,0,0,0,0,0,.22,.69,.96,.98,.73],round:[0,0,0,0,0,0,0,0,.08,1,1,1,1,1,1,0,0,.52,.91,1,1,.96,0,0,1,.92,1,.47,0,0,0,1,1,1,1,1,1,1,.99,.16,1,1,1,1,1,1,1,1,1,1,1,.95,0,0,0,0,0,0,0,0,0,.86,1,0,0]},{quem:"gui",start:693.467,end:695.633,boca:[0,0,0,0,.2,.65,.93,.93,.86,.79,.72,.68,.68,.69,.71,.72,.77,.91,.99,.95,.79,.56,.4,.45,.65,.79,.86,.93,.92,.83,.77,.59,.33,.4,.56,.54,.62,.74,.72,.68,.71,.69,.64,.71,.89,.91,.69,.52,.67,.81,.76,.74,.83,.94,.98,.97,.99,.95,.74,.37,0,0,0,0,0],round:[0,0,0,0,0,1,1,.97,1,0,0,0,0,0,.87,.97,1,1,1,1,.51,0,0,0,.69,.97,1,.75,.88,0,0,.99,.06,0,1,1,.9,.89,0,0,0,.63,.53,.52,.74,.99,.12,0,0,.83,.83,.88,.89,.72,.82,.89,1,.95,.96,.34,0,0,0,0,0]},{quem:"davi",start:696.567,end:699.633,boca:[0,0,0,.18,.61,.92,.97,.83,.58,.63,.89,.91,.66,.42,.44,.61,.65,.53,.45,.47,.46,.41,.48,.62,.63,.5,.47,.55,.66,.74,.71,.59,.51,.58,.7,.76,.84,.95,.94,.83,.79,.77,.7,.55,.24,.13,.37,.58,.6,.6,.64,.67,.72,.8,.89,.91,.87,.83,.79,.76,.65,.47,.51,.6,.34,0,0,.31,.6,.73,.69,.64,.6,.43,.39,.42,.2,0,.17,.43,.4,.29,.27,.14,0,0,0,0,.19,.18,0,0],round:[0,0,0,0,.21,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.99,.94,1,1,1,1,1,1,1,1,1,1,1,.86,0,0,.98,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.84,1,1,0,0,.97,1,1,1,.77,1,1,.89,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0]}]};var F3=a0.total,P3=a0.segs;function l0(n,t){for(let e of a0.falas){if(e.quem!==n||t<e.start-.05||t>e.end+.05)continue;let i=(t-e.start)*30,s=Math.floor(i),o=i-s,r=e.boca[Math.max(0,Math.min(e.boca.length-1,s))]||0,a=e.boca[Math.max(0,Math.min(e.boca.length-1,s+1))]||0,l=e.round[Math.max(0,Math.min(e.round.length-1,Math.round(i)))]||0;return{open:r+(a-r)*o,round:l}}return{open:0,round:0}}function Qc(n,t,e,i){let s=md(n,t,e.bg||"#BFE3F7",e.fov||32),o=s.scene.background;s.camera.near=e.near||.05,s.camera.far=e.far||500,s.camera.updateProjectionMatrix();let r=null,a=null,l=()=>{c0&&c0!==s&&c0._desmonta(),c0=s,a=s.scene=new Ws,a.background=o,e.fog&&(a.fog=new Xo(e.fog[0],e.fog[1],e.fog[2])),r=i(a,s)||(()=>({}))};return s._desmonta=()=>{r&&(a.traverse(c=>{if(c.geometry&&c.geometry.dispose(),c.material)for(let h of[].concat(c.material))h.map&&!h.map.userData.fixa&&h.map.image&&h.map.image.tagName==="CANVAS"&&h.map.image.__dyn&&h.map.dispose(),h.dispose()}),s.scene=new Ws,s.scene.background=o,r=null,a=null)},s.update=(c,h)=>{r||l(),Xc.value=c,mi={t0:n,t1:t,viva:e.viva??1,scene:a,perto:e.perto},ty(a);let u=r(c,h,s.camera)||{};e.limpa!==!1&&ey(a,s.camera);let d=a.userData.vida;if(d&&e.vida!==!1){let f=c;for(let g of d)g(c,f,h)}return Ed(u)},s}var c0=null,mi={t0:0,t1:1,viva:1},gi=new x,Ko=new x,h0=new x,jc=n=>n.userData._at||(n.userData._at=(()=>{let t=[];return n.traverse(e=>{e.userData&&e.userData.ator&&t.push(e.userData.ator)}),t})());function ty(n){for(let t of jc(n))t._ocultei&&(t.root.visible=!0,t._ocultei=!1)}function ey(n,t){let e=t.userData.alvo;if(!e)return;n.updateMatrixWorld(!0),Ko.copy(t.position),h0.set(e[0],e[1],e[2]);let i=h0.clone().sub(Ko),s=i.lengthSq();for(let o of jc(n)){if(!o.root.visible||o.fixo)continue;let r=!1;for(let u=o.root.parent;u;u=u.parent)if(u.visible===!1){r=!0;break}if(r)continue;o.headG.getWorldPosition(gi),gi.y+=.26*(o.root.scale.x||1);let a=gi.distanceTo(Ko),l=Math.max(0,Math.min(1,gi.clone().sub(Ko).dot(i)/s)),c=gi.distanceTo(Ko.clone().addScaledVector(i,l)),h=gi.distanceTo(h0)<.55;(a<.75||!h&&l>.02&&l<.8&&c<.3*(o.root.scale.x||1)&&a<Ko.distanceTo(h0)-.4)&&(o.root.visible=!1,o._ocultei=!0)}}var Qo=(n,t)=>Math.sin(n*.71+t)*.6+Math.sin(n*1.37+t*2.1)*.3+Math.sin(n*2.9+t*3.3)*.1;function Td(n,t,e,i,s=0,o=mi.viva){let r=Ir(t,i),a=Ir(e,i);if(o>0){let l=Xc.value,c=Math.hypot(r[0]-a[0],r[1]-a[1],r[2]-a[2]),h=Math.min(1,Math.max(0,(l-mi.t0)/Math.max(.5,mi.t1-mi.t0))),u=mi.t1-mi.t0>6.5&&h>.5?.2*o:0,d=.05*o*(h*h*(3-2*h))+u;for(let g=0;g<3;g++)r[g]+=(a[g]-r[g])*d;let f=c*.011*o;r[0]+=Qo(l,1)*f,r[1]+=Qo(l,4)*f*.7,r[2]+=Qo(l,7)*f*.5,a[0]+=Qo(l,9)*f*.35,a[1]+=Qo(l,12)*f*.3,s+=Qo(l,15)*.006*o}if(mi.scene&&mi.perto!==!0){let l=jc(mi.scene);for(let c of l)if(c.root.visible&&(c.headG.getWorldPosition(gi),gi.y+=.26*(c.root.scale.x||1),Math.hypot(gi.x-a[0],gi.y-a[1],gi.z-a[2])<.45)){let h=(mi.perto||.71*(c.root.scale.x||1))/Math.tan(n.fov*Math.PI/360),u=Math.hypot(r[0]-a[0],r[1]-a[1],r[2]-a[2]);if(u<h&&u>.001)for(let d=0;d<3;d++)r[d]=a[d]+(r[d]-a[d])*h/u;break}}gd(n,r,a,s),n.userData.alvo=a}function O(n,t,e,i="neutro",s={}){let o=t?l0(t,e):{open:0,round:0},r=s.mouth||(o.open>0?{open:o.open,round:o.round,smile:s.smile}:{open:0,smile:s.smile});n.face({emo:i,blink:s.blink??Ad(e,n.seed||0),look:s.look||[0,0],brow:s.brow,lagrima:s.lagrima,olhosAbertos:s.olhosAbertos,blush:s.blush,lingua:s.lingua,pisca1:s.pisca1,mouth:r});let a=n.headG.rotation,l=n.torsoG.rotation,c=n._viva;if(c&&a.x===c.r[0]&&a.y===c.r[1]&&a.z===c.r[2]&&l.x===c.r[3]&&l.z===c.r[4]&&(a.x-=c.d[0],a.y-=c.d[1],a.z-=c.d[2],l.x-=c.d[3],l.z-=c.d[4]),!n.congelado&&s.vivo!==!1){let h=(n.seed||0)*1.7,u=e*(s.lento??1),d=o.open||0,f=[.03*Math.sin(u*1.05+h)+d*.09*(.6+.4*Math.sin(u*7.3+h)),.045*Math.sin(u*.63+h*2)+d*.05*Math.sin(u*3.1+h),.025*Math.sin(u*.81+h*3),.018*Math.sin(u*2.2+h),.01*Math.sin(u*.9+h)];a.x+=f[0],a.y+=f[1],a.z+=f[2],l.x+=f[3],l.z+=f[4],n._viva={d:f,r:[a.x,a.y,a.z,l.x,l.z]}}else n._viva=null;return n}function th(n,t,e={},i=1){let s=l0(n,t).open,o=Math.sin(t*2.3),r=Math.sin(t*1.7+1);return{...e,shR:[(e.shR?.[0]??0)+18*s*i+6*o*i,(e.shR?.[1]??8)+6*s*i],elR:(e.elR??10)+40*s*i,shL:[(e.shL?.[0]??0)+8*s*i*r,e.shL?.[1]??8],headX:(e.headX??0)-3*s+1.5*o,headZ:(e.headZ??0)+2*r*s}}function As(n,t,e,i,s=0){return n.root.rotation.set(-Math.PI/2+s,0,0),n.root.position.set(t,e+.2,i),n.sombra.visible=!1,n}function Ei(n,t=.4){let e=kt(256,256,s=>{if(s.lineJoin="round",s.lineWidth=14,s.strokeStyle="#1B1420",s.textAlign="center",s.textBaseline="middle",n==="coracao")s.fillStyle="#F2546E",s.beginPath(),s.moveTo(128,214),s.bezierCurveTo(20,140,30,50,100,52),s.bezierCurveTo(118,54,128,70,128,82),s.bezierCurveTo(128,70,138,54,156,52),s.bezierCurveTo(226,50,236,140,128,214),s.fill(),s.stroke(),s.fillStyle="#FFFFFF88",s.beginPath(),s.ellipse(88,92,18,12,-.6,0,7),s.fill();else if(n==="gota")s.fillStyle="#8FD3F2",s.beginPath(),s.moveTo(128,30),s.bezierCurveTo(200,130,200,210,128,214),s.bezierCurveTo(56,210,56,130,128,30),s.fill(),s.stroke();else{let o={interrogacao:"?",exclamacao:"!",zzz:"Z",notas:"\u266A"}[n]||n;s.font="900 200px Inter",s.fillStyle=n==="exclamacao"?"#F2C14E":"#FFFFFF",s.strokeText(o,128,136),s.fillText(o,128,136)}}),i=new ti(new qn({map:e,transparent:!0,depthWrite:!1}));return i.scale.setScalar(t),i.renderOrder=10,i}function le(n,t,e,i=0,s=.48){let o=n.root.scale.x||1;return n.place(t,e,s-.28*o,i),n.sombra.visible=!1,n}function pe(n,t,e,i="neutro",s={},o=1,r={}){return n.pose(th(t,e,s,o)),O(n,t,e,i,r)}var Yt={mundo:{value:0},ouro:{value:0},alvo:{value:0},claro:{value:0}},ny=`{ float l_ = dot(gl_FragColor.rgb, vec3(.2126,.7152,.0722));
  vec3 cinza_ = vec3(l_) * .7 + .08;
  vec3 ouro_ = vec3(l_) * vec3(1.32, 1.02, .52) + vec3(.1, .06, .0);
  vec3 alvo_ = mix(cinza_, ouro_, uOuro);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, alvo_, uCinza); }
#include <dithering_fragment>`;function Sd(n,t){!n||n.userData.fpOk===n.uuid||n.isShaderMaterial||n.isRawShaderMaterial||n.isLineBasicMaterial||n.userData.fp&&n.userData.fp!==t&&n.userData.fpOk===n.uuid||(n.userData.fp=n.userData.fp==="alvo"?"alvo":t,t=n.userData.fp,n.userData.fpOk=n.uuid,n.onBeforeCompile=e=>{e.uniforms.uCinza=t==="alvo"?Yt.alvo:Yt.mundo,e.uniforms.uOuro=t==="alvo"?Yt.claro:Yt.ouro,e.fragmentShader=`uniform float uCinza; uniform float uOuro;
`+e.fragmentShader.replace("#include <dithering_fragment>",ny)},n.customProgramCacheKey=()=>"foco-"+t,n.needsUpdate=!0)}function Kt(n,t={}){let e=Jc(t.borda??.03,t.cor||"#FFFFFF",3.2).clone();e.uniforms.res.value.set(1920,1080);let i=[];for(let o of[].concat(n)){let r=[];o.traverse(a=>{a.isMesh&&!a.userData.isOutline&&!a.userData.borda&&r.push(a)});for(let a of r)if(a.material=[].concat(a.material).map(l=>{if(l.userData.fp==="alvo"&&l.userData.fpOk===l.uuid)return l;let c=l.clone();return c.userData={...l.userData},c.userData.fp="alvo",delete c.userData.fpOk,Sd(c,"alvo"),c}),a.material.length===1&&(a.material=a.material[0]),!(t.semBorda||a.isSkinnedMesh||a.material.transparent&&!a.material.alphaTest)&&a.geometry&&a.geometry.attributes.normal&&!a.userData.semBorda){let l=new st(a.geometry,e);l.userData.isOutline=!0,l.userData.borda=!0,l.renderOrder=-1,a.add(l),i.push(l)}}let s=(o,r=0)=>{let a=o>.02;for(let l of i)l.visible=a;e.uniforms.w.value=(t.borda??.03)*o*(.75+.25*Math.sin(r*6))};return s(0),s}function Rd(n){n.traverse(t=>{if((t.isMesh||t.isSprite||t.isPoints)&&!t.userData.isOutline)for(let e of[].concat(t.material))Sd(e,"mundo")})}function te(n,t,e,i=0){let s=new Pt(t),o=s.r*.2126+s.g*.7152+s.b*.0722,r=new Pt(o*.7+.08,o*.7+.08,o*.7+.08),a=new Pt(o*1.32+.1,o*1.02+.06,o*.52);r.lerp(a,i),n.background=s.clone().lerp(r,e)}function xd(){Yt.mundo.value=0,Yt.ouro.value=0,Yt.alvo.value=0,Yt.claro.value=0}var Cd=(n,t=.9)=>(e,i,s)=>{e.fillStyle=n,e.fillRect(0,s*t,i,s*(1-t))},iy={pele:"#E3AE86",cabelo:"topete",corCabelo:"#4A2A18",nariz:!0,sobr:"#3A2014"},Fd=(n,t,e)=>{n.fillStyle="#80868E",n.beginPath(),n.roundRect(t*.3,e*.56,t*.4,e*.3,26),n.fill(),n.strokeStyle="#6C727A",n.lineWidth=6,n.beginPath(),n.moveTo(t*.33,e*.6),n.lineTo(t*.33,e*.82),n.moveTo(t*.67,e*.6),n.lineTo(t*.67,e*.82),n.stroke(),n.strokeStyle="#F4F1EA",n.lineWidth=7;for(let i of[-1,1])n.beginPath(),n.moveTo(t/2+i*34,0),n.lineTo(t/2+i*40,e*.3),n.stroke(),n.fillStyle="#F4F1EA",n.beginPath(),n.arc(t/2+i*40,e*.31,9,0,7),n.fill();n.fillStyle="#7A8088",n.fillRect(0,e*.92,t,e*.08)},Rt={...iy,camisa:"#959BA3",manga:"longa",calca:"#1E1E22",meia:"#E3AE86",tenis:"#E3AE86",sola:"#1E2A44",chinelo:"#1E2A44",escala:.95,estampa:Fd},tv={...Rt,luva:"#1A1A1E"},sy=(n,t,e)=>{n.fillStyle="#F7F1E3",n.beginPath(),n.roundRect(t*.27,e*.16,t*.46,e*.84,30),n.fill();let i=["#E2443A","#F2C230","#3E7CC8","#5AA84E","#E57AA0"];for(let s=0;s<30;s++){let o=t*.29+s*97%(t*.42),r=e*.2+s*53%(e*.76);n.fillStyle=i[s%5];for(let a=0;a<5;a++){let l=a/5*6.283;n.beginPath(),n.arc(o+Math.cos(l)*9,r+Math.sin(l)*9,7,0,7),n.fill()}n.fillStyle="#F2C230",n.beginPath(),n.arc(o,r,5,0,7),n.fill()}n.strokeStyle="#E2443A",n.lineWidth=8,n.beginPath(),n.moveTo(t*.27,e*.5),n.lineTo(0,e*.5),n.moveTo(t*.73,e*.5),n.lineTo(t,e*.5),n.stroke()},oy={pele:"#D9A07A",cabelo:"coque",corCabelo:"#C9C6C0",oculos:!0,rugas:!0,cilios:!0,nariz:!0,tronco:"senhora",camisa:"#7FA6C9",calca:"#5A6A8A",saia:"#5A6A8A",meia:"#D9A07A",tenis:"#D9A07A",sola:"#C84E4E",chinelo:"#C84E4E",escala:.84,estampa:sy},ev={...oy,camisa:"#B23A5A",saia:"#B23A5A",calca:"#B23A5A",sola:"#3A2A2A",estampa:(n,t,e)=>{n.fillStyle="#F4D8E0";for(let i=0;i<46;i++)n.beginPath(),n.arc(i*131%t,i*67%e,7,0,7),n.fill();Cd("#8E2A44",.9)(n,t,e)},batom:!0};var wd=[["#3E7CC8","#2A2A33","#2A1E1A","topete","#D9A07A"],["#E57AA0","#3A3550","#5A3020","chanel","#E8B48C"],["#58B26A","#2F4E86","#1C1416","afro","#8E5A3A"],["#F2994A","#3A3A44","#C9A060","curto","#F0C8A6"],["#9B6CC4","#2A2A33","#1C1416","curto","#B07A52"],["#2FB5A8","#4A3A2A","#3A2418","rabo","#E3B28E"],["#F2D24A","#2F4E86","#2A1E1A","tigela","#6E4430"],["#E8E4DE","#5A5A66","#6A5A4A","coque","#D9A07A"]],Ki=(n,t={})=>{let[e,i,s,o,r]=wd[n%wd.length];return{camisa:e,calca:i,corCabelo:s,cabelo:o,pele:r,cilios:["rabo","coque","chanel"].includes(o),nariz:!0,tenis:["#F4F1EA","#2A2A30","#E2443A"][n%3],...t}},Ts=(n,t={})=>Ki(n,{camisa:"#F6F4EE",calca:"#2F4E86",escala:.94,estampa:(e,i,s)=>{Cd("#2F4E86",.88)(e,i,s),e.fillStyle="#2F4E86",e.beginPath(),e.arc(i/2+120,s*.55,34,0,7),e.fill()},...t});function Pd(n){let t=Kc(n);if(n.estampa===Fd){let e=ve(new Qe(.13,.055,10,22),n.camisa,{out:.008});e.rotation.x=Math.PI/2.4,e.position.set(0,.34,-.09),t.torsoG.add(e);let i=he(.1,"#80868E",0,.3,-.15,{seg:14});i.scale.set(1.2,.7,.6),t.torsoG.add(i)}if(n.chinelo)for(let e of["L","R"]){let i=t.legs[e].an;for(let s of[-1,1]){let o=ve(new Te(.016,.014,.1),n.chinelo,{out:.003});o.position.set(s*.032,.013,.085),o.rotation.set(0,-s*.62,0),i.add(o)}i.add(ve(new fe(.011,8,6),n.chinelo,{pos:[0,.014,.125]}))}return t}var G=(n,t,e,i,s=0,o)=>Td(n,typeof t[0]=="number"?[[0,t]]:t,typeof e[0]=="number"?[[0,e]]:e,i,s,o);function Z(n,t,e=0,i=0,s=0,o=0){let r=Pd(t);return r.place(e,i,o,s),n.add(r.root),r.root.userData.ator=r,r.seed=Math.abs(e*13+i*7|0)%9,r}var ay={shL:[0,8],shR:[0,8],hipL:[0,0],hipR:[0,0]},ly={elL:8,elR:8};function Ht(n,...t){let e={...n};for(let i of t)if(i)for(let s in i){let o=i[s];if(Array.isArray(o)){let r=e[s]||ay[s]||[0,0];e[s]=[r[0]+(o[0]||0),r[1]+(o[1]||0),(r[2]||0)+(o[2]||0)]}else e[s]=(e[s]??ly[s]??0)+o}return e}var cy={io:On,out:En,in:n0,lin:n=>ct(n),back:n=>{n=ct(n);let t=1.9;return 1+(t+1)*Math.pow(n-1,3)+t*Math.pow(n-1,2)},mola:n=>(n=ct(n),1-Math.cos(n*Math.PI*2.5)*Math.exp(-n*5))};function nh(n,t){if(n<=t[0][0])return t[0][1];for(let e=1;e<t.length;e++)if(n<=t[e][0]){let i=cy[t[e][2]||"io"]((n-t[e-1][0])/Math.max(1e-6,t[e][0]-t[e-1][0])),s=t[e-1][1],o=t[e][1];return Array.isArray(s)?s.map((r,a)=>ht(r,o[a],i)):ht(s,o,i)}return t[t.length-1][1]}var eh=(n,t)=>Math.sin(n*.71+t)*.6+Math.sin(n*1.37+t*2.1)*.3+Math.sin(n*2.9+t*3.3)*.1;function Xe(n,t=0,e=1){let i=Math.sin(n*1.9+t),s=eh(n*.35,t*2.3),o=eh(n*.6,t*4.1);return{bob:i*.004*e-Math.abs(s)*.008*e,lean:i*.8*e,tilt:s*2.2*e,hipL:[0,s*2*e],hipR:[0,-s*2*e],knL:Math.max(0,s)*9*e,knR:Math.max(0,-s)*9*e,shL:[o*3*e,i*1.2*e],shR:[-o*3*e,i*1.2*e],elL:(4+o*4)*e,elR:(4-o*4)*e,headY:eh(n*.4,t*7)*6*e,headZ:-s*1.5*e}}var Le=(n,t=0,e=1)=>Ht({shL:[0,9],shR:[0,9],elL:12,elR:12},Xe(n,t,e));function tn(n,t={}){let e=t.f||1.8,i=t.amp??1,s=t.ph||0,o=o0(n,e,i,s),r=Math.sin((n*e+s)*Math.PI*2);return o.headY=-r*3*i,o.tilt=r*1.8*i,o.headZ=-r*1.2*i,t.chinelo&&(o.knL*=.8,o.knR*=.8,o.hipL[0]*=.85,o.hipR[0]*=.85),t.curvado&&(o.lean+=10,o.headX=-6),t.maos==="bolso"&&(o.shL=[18+r*2,0,-90],o.shR=[18-r*2,0,-90],o.elL=105,o.elR=105),o}var zn=(n,t=2.9,e=1)=>{let i=r0(n,t,e),s=Math.sin(n*t*Math.PI*2);return i.headY=-s*3,i.tilt=s*2.5,i},$e={bracoCruzado:{shL:[30,4,-75],shR:[26,4,-80],elL:95,elR:95,lean:-3},maosCintura:{shL:[-15,55,-90],shR:[-15,55,-90],elL:85,elR:85,lean:-2},maosBolso:{shL:[18,0,-90],shR:[18,0,-90],elL:105,elR:105,lean:2,headX:4},maosCabeca:{shL:[150,38],shR:[150,38],elL:130,elR:130,headX:-6},bracosAbertos:{shL:[55,55],shR:[55,55],elL:22,elR:22,lean:-4,headX:-4},abraco:{shL:[70,20,-80],shR:[70,20,-80],elL:50,elR:50,lean:8},maosFrente:{shL:[80,8],shR:[80,8],elL:14,elR:14,lean:6},desculpa:{shL:[55,22],shR:[55,22],elL:85,elR:85,lean:-3,headX:6,headZ:6},ombros:{shL:[10,24],shR:[10,24],elL:70,elR:70,headZ:10,bob:.015},celular:{shR:[62,6],elR:72,shL:[30,10],elL:60},filmar:{shR:[88,2],elR:38,shL:[70,-6],elL:60,headX:2},co\u00E7arOlho:{shR:[118,-8],elR:150,headX:8,headZ:-6},apontar:{shR:[92,6],elR:4},punhoFecha:{shR:[70,10],elR:105,headX:18},pegaChao:{lean:52,bob:-.18,hipL:[64,6],hipR:[60,6],knL:85,knR:80,shL:[74,6],shR:[74,6],elL:6,elR:6,headX:-20},carregaFrente:{lean:-10,shL:[22,-4],shR:[22,-4],elL:50,elR:50,knL:12,knR:12,bob:-.02,headX:-6},quadril:{shL:[-6,30],elL:100,shR:[8,10],elR:20,tilt:-6,lean:3},ajoelhado:{bob:-.3,lean:6,hipL:[92,4],hipR:[-6,4],knL:92,knR:98,shL:[12,10],shR:[12,10],elL:25,elR:25},sentadoChao:{bob:-.48,lean:-10,hipL:[80,18],hipR:[80,18],knL:30,knR:30,shL:[-30,20],shR:[-30,20],elL:10,elR:10},testaParede:{lean:22,shL:[100,18],elL:85,shR:[10,8],elR:15,headX:16},comemora:{shL:[160,30],shR:[160,30],elL:20,elR:20,headX:-12},assustado:{shL:[30,22],shR:[30,22],elL:100,elR:100,lean:-8,headX:-6},aceno:{shR:[150,30],elR:30}};var Ks=(n,t=1)=>{let e=Math.abs(Math.sin(n*9));return{bob:e*.01*t,headX:-8*t-e*4*t,shL:[e*5*t,8+e*4*t],shR:[e*5*t,8+e*4*t],lean:-3*t}},u0=(n,t=2.2,e=0)=>{let i=Math.max(0,Math.sin((n*t+e)*Math.PI*2));return{bob:i*.16,knL:(1-i)*30,knR:(1-i)*30,hipL:[(1-i)*18,4],hipR:[(1-i)*18,4],shL:[140+i*20,30],shR:[140+i*20,30],elL:30,elR:30,headX:-10}};var Dd=new x,Ld=new jn;function ce(n,t,e="R",i=[0,-.08,.03],s){t.root.updateMatrixWorld(!0);let o=t.hands[e];o.localToWorld(Dd.set(...i)),n.position.copy(Dd),s!==!1&&(o.getWorldQuaternion(Ld),n.quaternion.copy(Ld),s&&n.rotateX(s[0]).rotateY(s[1]).rotateZ(s[2]))}function Y(n,t,e,i){return e={perto:.42,...e},Qc(n,t,e,(s,o)=>{let r=i(s,o);return Rd(s),(a,l,c)=>(xd(),r?r(a,l,c)||{}:{})})}var d0={w:300,h:600};function yi(n,t,e,i="#14161C"){n.fillStyle=i,n.fillRect(0,0,t,e)}var He=(n,t,e,i,s,o,r=800,a="center")=>{n.fillStyle=o,n.font=`${r} ${s}px Inter`,n.textAlign=a,n.textBaseline="middle",n.fillText(t,e,i)},sh={apagada:(n,t,e)=>yi(n,t,e,"#0A0A0E"),bloqueio:(n,t,e,i=0)=>{let s=n.createLinearGradient(0,0,0,e);s.addColorStop(0,"#3A4A8A"),s.addColorStop(1,"#8A4A7A"),n.fillStyle=s,n.fillRect(0,0,t,e),He(n,"19:42",t/2,120,64,"#FFFFFF",300),n.fillStyle="rgba(255,255,255,.85)",n.beginPath(),n.roundRect(20,200,t-40,70,16),n.fill(),n.fillStyle="#3EC860",n.beginPath(),n.roundRect(32,212,46,46,10),n.fill(),He(n,"Tiago",92,225,20,"#1A1A1E",800,"left"),He(n,"mano olha isso kkkk",92,250,16,"#3A3A44",600,"left")},chat:(n,t,e,i=0)=>{yi(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),He(n,"Tiago",70,38,22,"#FFF",800,"left"),[[0,"mano olha isso kkkk"],[1,"kkkkkkk"],[0,"bora jogar?"],[1,"depois"]].slice(0,1+Math.floor(i*4)).forEach(([o,r],a)=>{n.fillStyle=o?"#D8F8C8":"#FFFFFF";let l=30+r.length*10;n.beginPath(),n.roundRect(o?t-l-16:16,100+a*70,l,48,12),n.fill(),He(n,r,o?t-l/2-16:16+l/2,124+a*70,18,"#1A1A1E",600)})},foto:(n,t,e,i=0)=>{yi(n,t,e,"#FFFFFF"),n.fillStyle="#F4A05A",n.fillRect(0,80,t,300),n.fillStyle="#F2C230",n.beginPath(),n.arc(200,170,40,0,7),n.fill(),n.fillStyle="#5AA84E",n.beginPath(),n.moveTo(0,380),n.lineTo(120,240),n.lineTo(240,380),n.fill();let s=1+Math.sin(Math.min(1,i*2)*Math.PI)*.5;n.save(),n.translate(50,420),n.scale(s,s),n.fillStyle=i>.2?"#F2546E":"#FFFFFF",n.strokeStyle="#1A1A1E",n.lineWidth=3,n.beginPath(),n.moveTo(0,14),n.bezierCurveTo(-26,-6,-12,-24,0,-10),n.bezierCurveTo(12,-24,26,-6,0,14),n.fill(),n.stroke(),n.restore(),He(n,1203+(i>.2?1:0)+" curtidas",80,420,18,"#1A1A1E",800,"left")},tapete:(n,t,e,i=0)=>{yi(n,t,e,"#0E0E12"),n.fillStyle="#5A4A3A",n.fillRect(0,160,t,280);let s=t*ct(i);n.fillStyle="#C8463A",n.fillRect(0,160,s,280),n.strokeStyle="#F2C230",n.lineWidth=6;for(let o=0;o<6;o++)n.beginPath(),n.arc(s/2,300,20+o*22,0,7),n.stroke();n.fillStyle="rgba(255,255,255,.7)",n.fillRect(s-6,160,12,280),n.fillStyle="#FF2A2A",n.fillRect(0,e-12,t*(.2+i*.7),6),He(n,"LIMPEZA DE TAPETE SATISFAT\xD3RIA",t/2,500,15,"#FFFFFF",800)},xadrez:(n,t,e,i=0)=>{yi(n,t,e,"#262421");let s=t/8;for(let r=0;r<8;r++)for(let a=0;a<8;a++)n.fillStyle=(r+a)%2?"#769656":"#EEEED2",n.fillRect(r*s,150+a*s,s,s);let o=["\u265C","\u265E","\u265D","\u265B","\u265A","\u265D","\u265E","\u265C"];n.font=`${s*.8}px serif`,n.textAlign="center",n.textBaseline="middle",o.forEach((r,a)=>{n.fillStyle="#1A1A1E",n.fillText(r,a*s+s/2,150+s/2),n.fillText("\u265F",a*s+s/2,150+s*1.5),n.fillStyle="#FFFFFF",n.fillText("\u2659",a*s+s/2,150+s*6.5),n.fillText(o[a].replace("\u265C","\u2656").replace("\u265E","\u2658").replace("\u265D","\u2657").replace("\u265B","\u2655").replace("\u265A","\u2654"),a*s+s/2,150+s*7.5)}),He(n,"ABERTURAS: SICILIANA",t/2,90,18,"#FFFFFF",800),He(n,"Partida "+Math.floor(1+i*199),t/2,500,20,"#B8B8B8",700)},mensagens:(n,t,e,i=0)=>{sh.bloqueio(n,t,e),n.fillStyle="rgba(20,20,28,.9)",n.beginPath(),n.roundRect(16,200,t-32,110,18),n.fill(),He(n,String(Math.round(27*ct(i*1.3))),t/2,240,50,"#3EC860",900),He(n,"MENSAGENS N\xC3O LIDAS",t/2,286,17,"#FFFFFF",800)},views:(n,t,e,i=0)=>{yi(n,t,e,"#0E0E12"),n.fillStyle="#3A3A44",n.fillRect(0,60,t,300),n.fillStyle="#C9893E",n.beginPath(),n.ellipse(t/2,220,70,90,0,0,7),n.fill(),n.fillStyle="#E3AE86",n.beginPath(),n.arc(t/2,110,36,0,7),n.fill();let s=Math.round(2e5*Math.pow(ct(i),2.2));He(n,s.toLocaleString("pt-BR")+" visualiza\xE7\xF5es",20,390,20,"#FFFFFF",800,"left"),n.fillStyle="#F2546E",He(n,"\u2665 "+Math.round(s/9).toLocaleString("pt-BR"),20,425,20,"#F2546E",800,"left")},chamadas:(n,t,e,i=0)=>{yi(n,t,e,"#101016"),He(n,"14",t/2,180,110,"#FF4A4A",900),He(n,"CHAMADAS PERDIDAS",t/2,260,20,"#FFFFFF",900),He(n,i>.5?"M\xC3E":"",t/2,310,34,"#FFFFFF",900),n.strokeStyle="rgba(255,255,255,.55)",n.lineWidth=2;let s=210,o=120;for(let r=0;r<9;r++){let a=r*.7;n.beginPath(),n.moveTo(s,o),n.lineTo(s+Math.cos(a)*260,o+Math.sin(a)*260),n.stroke()}n.beginPath(),n.arc(s,o,40,0,7),n.stroke()},chamadasBorrado:(n,t,e,i=0)=>{yi(n,t,e,"#101016"),n.filter="blur(5px)",He(n,"14",t/2,180,110,"#FF4A4A",900),He(n,"CHAMADAS PERDIDAS",t/2,260,20,"#FFFFFF",900),He(n,"\u25A0\u25A0\u25A0",t/2,310,34,"#FFFFFF",900),n.filter="none",n.strokeStyle="rgba(255,255,255,.7)",n.lineWidth=2;let s=90,o=420;for(let r=0;r<9;r++){let a=r*.7;n.beginPath(),n.moveTo(s,o),n.lineTo(s+Math.cos(a)*300,o+Math.sin(a)*300),n.stroke()}n.beginPath(),n.arc(s,o,36,0,7),n.stroke()},mensagemMae:(n,t,e,i=0)=>{sh.chamadas(n,t,e,1);let s="ele ficou esperando voc\xEA na porta da escola at\xE9 a apresenta\xE7\xE3o acabar",o=Math.floor(s.length*ct(i));n.fillStyle="#2E8E6A",n.beginPath(),n.roundRect(16,360,t-32,190,16),n.fill(),He(n,"M\xE3e",32,382,16,"#D8F8C8",800,"left"),n.fillStyle="#FFFFFF",n.font="700 19px Inter",n.textAlign="left";let r=s.slice(0,o).split(" "),a="",l=414;for(let c of r)n.measureText(a+c).width>t-70&&(n.fillText(a,32,l),a="",l+=26),a+=c+" ";n.fillText(a,32,l)},audio:(n,t,e,i=0)=>{yi(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),He(n,"Tiago",70,38,22,"#FFF",800,"left"),n.fillStyle="#FFFFFF",n.beginPath(),n.roundRect(16,240,t-60,70,18),n.fill(),n.fillStyle="#2E8E6A";for(let s=0;s<26;s++){let o=6+Math.abs(Math.sin(s*1.7+i*30))*30*(s/26<i?1:.4);n.fillRect(70+s*7,275-o/2,4,o)}n.beginPath(),n.moveTo(36,260),n.lineTo(56,275),n.lineTo(36,290),n.fill()},coxinha:(n,t,e,i=0)=>{yi(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),He(n,"Tiago",70,38,22,"#FFF",800,"left"),n.fillStyle="#D8F8C8",n.beginPath(),n.roundRect(60,120,t-76,260,14),n.fill(),n.fillStyle="#F4E6C0",n.fillRect(72,132,t-100,180),n.fillStyle="#D9892E",n.beginPath(),n.moveTo(t/2+20,160),n.quadraticCurveTo(t/2+90,280,t/2+20,290),n.quadraticCurveTo(t/2-50,280,t/2+20,160),n.fill(),He(n,"desculpa mano, bora?",t/2+20,345,18,"#1A1A1E",800),i>.5&&He(n,"\u2713\u2713",t-40,365,14,"#3EA6FF",900)},conversa:(n,t,e)=>{yi(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),He(n,"Tiago",70,38,22,"#FFF",800,"left"),n.fillStyle="#FFFFFF",n.beginPath(),n.roundRect(16,380,230,60,12),n.fill(),He(n,"vem aqui em casa hoje? \u{1F382}",130,410,16,"#1A1A1E",700),He(n,"\u2713\u2713",220,430,13,"#9A9A9A",900)}};function Je(){let n=new J;n.add(rt(.075,.15,.012,"#1B1A20",0,0,0,{r:.008,out:.003}));let t=document.createElement("canvas");t.width=d0.w,t.height=d0.h;let e=t.getContext("2d"),i=new bn(t);i.colorSpace=Be;let s=new ae({map:i}),o=new st(new St(.066,.132),s);o.position.z=.0065,n.add(o);let r="";return n.tela=(a,l=0,c=1)=>{let h=a+"|"+Math.round(l*60);h!==r&&(r=h,sh[a](e,d0.w,d0.h,l),i.needsUpdate=!0),s.color.setScalar(c)},n.tela("apagada"),n.userData.tela=o,n.scale.setScalar(1.7),n}function Bd(n=1){let t=new J,e=Vt("#E8B828",{emissive:"#5A4008",emissiveIntensity:.2});t.add(ve(new Yn(.16,.16,.05,40),e,{out:.006,rot:[Math.PI/2,0,0]})),t.add(at(.03,.03,.05,e,0,.19,0,{out:.004})),t.add(ve(new Qe(.04,.01,8,18),e,{out:.003,pos:[0,.25,0]}));let i=document.createElement("canvas");i.width=512,i.height=512;let s=i.getContext("2d"),o=new bn(i);o.colorSpace=Be;let r=new st(new fi(.14,40),new ae({map:o,color:"#D8D0C0"}));r.position.z=.026,t.add(r);let a=-1;return t.set=(l,c=0)=>{let h=Math.round(l*4)+c*1e3;if(h===a)return;a=h,s.fillStyle="#FFF8E6",s.fillRect(0,0,512,512),s.strokeStyle="#8A6A10",s.lineWidth=8;for(let g=0;g<60;g++){let E=g/60*6.283;s.beginPath(),s.moveTo(256+Math.sin(E)*230,256-Math.cos(E)*230),s.lineTo(256+Math.sin(E)*(g%5?214:196),256-Math.cos(E)*(g%5?214:196)),s.stroke()}let u=Math.floor(l/60),d=Math.floor(l%60);c>0&&(s.shadowColor="#F2C230",s.shadowBlur=40*c),s.fillStyle="#3A2A08",s.font="700 120px 'IBM Plex Mono'",s.textAlign="center",s.textBaseline="middle",s.fillText(String(u).padStart(2,"0")+":"+String(d).padStart(2,"0"),256,330),s.shadowBlur=0;let f=l%60/60*6.283;s.strokeStyle="#C8302A",s.lineWidth=10,s.beginPath(),s.moveTo(256,256),s.lineTo(256+Math.sin(f)*190,256-Math.cos(f)*190),s.stroke(),s.fillStyle="#C8302A",s.beginPath(),s.arc(256,256,14,0,7),s.fill(),o.needsUpdate=!0},t.set(0),t.scale.setScalar(n),t}var ih=null;function ii(n,t,e={}){let i=e.n||40,s=e.cor||"#7AF0B0",o=[];ih||(ih=kt(64,64,r=>{let a=r.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.6,"rgba(255,255,255,.85)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,64,64)}));for(let r=0;r<i;r++){let a=new ti(new qn({map:ih,color:s,transparent:!0,depthWrite:!1}));a.scale.setScalar(e.tam||.02),n.add(a);let l=__sr()*6.283,c=__sr()*2-1;o.push({s:a,d:new x(Math.cos(l)*Math.sqrt(1-c*c),c*.6+(e.sobe||0),Math.sin(l)*Math.sqrt(1-c*c)),v:.4+__sr()*.6,ph:__sr()})}return(r,a=0)=>{for(let l of o){let c=ct((r-l.ph*.3)/.7);l.s.visible=c>0&&c<1,l.s.position.set(t[0]+l.d.x*c*(e.r||.3)*l.v,t[1]+l.d.y*c*(e.r||.3)*l.v+(e.g||0)*c*c,t[2]+l.d.z*c*(e.r||.3)*l.v),l.s.material.opacity=1-c}}}function Ud(n,t,e,i,s={}){let o=["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F2546E","#FFFFFF"],r=[];for(let a=0;a<(s.n||90);a++){let l=new st(new St(.035,.022),new ae({color:o[a%6],side:We}));n.add(l),r.push({m:l,x:(__sr()-.5)*(s.w||3),z:(__sr()-.5)*(s.d||2),ph:__sr()*(s.h||3),r:__sr()*6})}return a=>{for(let l of r){let c=e+(s.h||3)-(a*(s.v||.8)+l.ph)%(s.h||3);l.m.position.set(t+l.x+Math.sin(a*2+l.r)*.1,c,i+l.z),l.m.rotation.set(a*3+l.r,a*2+l.r,0)}}}var Br=(n,t,e=.35)=>t.some(i=>n>=i&&n<i+e)?Math.sin(n*90)*.004:0;function oh(n,t=.4,e=0,i=0){n.updateMatrixWorld(!0);let s=new x(i,0,1).applyQuaternion(n.getWorldQuaternion(new jn)).normalize(),o=n.getWorldPosition(new x);return[o.x+s.x*t,o.y+s.y*t+e,o.z+s.z*t]}var Vv=Math.PI/180;var Wv={s:0,n:Math.PI,e:Math.PI/2,w:-Math.PI/2};function Hd(n,t,e,i=0,s=0,o=0,r=0){let a=new st(new St(n,t),e);return a.position.set(i,s,o),a.rotation.y=r,a.receiveShadow=!0,a}var Ur=(n,t)=>t[Math.floor(n()*t.length)%t.length];var vi=(n,...t)=>{let e=new J;for(let i of t)e.add(i);return e.userData.pe=n,e};var hy=["#3E7CC8","#C84E4E","#5AA84E","#8E6CC4","#D98A3A","#4FB8A0","#7A8696","#B5603E"];function Nd(n=2.1,t="#3E7CC8"){let e=vi([n,.9]),i=new Pt(t).multiplyScalar(.82).getStyle();e.add(rt(n,.42,.86,t,0,.21+.08,0,{out:.014,r:.08})),e.add(rt(n,.5,.22,i,0,.62,-.32,{out:.014,r:.08}));for(let o of[-1,1])e.add(rt(.2,.58,.86,i,o*(n/2-.1),.37,0,{out:.014,r:.07}));let s=Math.max(2,Math.round(n/.8));for(let o=0;o<s;o++)e.add(rt((n-.44)/s-.03,.14,.62,t,-n/2+.22+(n-.44)/s*(o+.5),.56,.06,{out:.012,r:.06}));for(let o of[-1,1])for(let r of[-1,1])e.add(at(.03,.02,.08,"#3A2A20",o*(n/2-.1),.04,r*.34,{seg:6}));return e.add(rt(.4,.36,.12,"#F2C230",-n/2+.45,.72,-.17,{out:.012,r:.06,rot:[-.25,.2,0]})),e}function Od(n=1.6,t="#7A5233"){let e=vi([n,.45]);e.add(rt(n,.5,.42,t,0,.25,0,{out:.012}));for(let s of[-1,1])e.add(tt(n/2-.06,.36,.01,"#5E3E26",s*n/4,.25,.215));e.add(rt(1.2,.7,.06,"#1B1A20",0,.5+.45,-.05,{out:.012})),e.add(tt(.3,.03,.18,"#2A2A30",0,.515,-.05)),e.add(tt(.06,.1,.04,"#2A2A30",0,.56,-.05));let i=uy();return i.position.set(0,.95,-.016),e.add(i),e.userData.tela=i,e.add(rt(.3,.06,.15,"#2A2A30",.45,.53,.05)),e}var Hr=null;function uy(n=1.12,t=.62){Hr||(Hr=kt(512,1024,s=>{[["#6FB4EC","#5AA84E"],["#F2994A","#3E2A60"],["#2E6FB8","#E8DCC8"],["#58B26A","#F2C230"]].forEach(([r,a],l)=>{let c=l*256;s.fillStyle=r,s.fillRect(0,c,512,256),s.fillStyle=a,s.fillRect(0,c+170,512,86),s.fillStyle="#F4D2B0",s.beginPath(),s.arc(180+l*40,c+120,44,0,7),s.fill(),s.fillStyle="#2A1E1A",s.beginPath(),s.arc(180+l*40,c+100,44,Math.PI,0),s.fill(),s.fillStyle=["#E2443A","#2E9C6A","#F2C230","#3E7CC8"][l],s.fillRect(120+l*40,c+160,120,96),s.fillStyle="rgba(0,0,0,.55)",s.fillRect(0,c+214,512,42),s.fillStyle="#FFF",s.font="700 26px Inter, Arial",s.fillText(["JORNAL DA SERRA","NOVELA DAS NOVE","PREVIS\xC3O DO TEMPO","FUTEBOL AO VIVO"][l],16,c+244)})}),Hr.wrapT=Un,Hr.repeat.set(1,.25));let e=Hr.clone();e.needsUpdate=!0,e.repeat.set(1,.25);let i=new st(new St(n,t),new ae({map:e,toneMapped:!1}));return i.userData.vivo=!0,i.userData.tv=!0,i}function zd(n=1,t=0){let e=vi([.45,.45]),i=Se(t+2);e.add(at(.2,.15,.38,Ur(i,["#C8643C","#F4F1EA","#3A3A44","#D9B07A"]),0,.19,0,{out:.012,seg:14})),e.add(at(.18,.18,.02,"#5A3A24",0,.37,0));for(let s=0;s<7;s++){let o=s/7*6.283,r=ve(new fe(.16,10,6),s%2?"#4E9A48":"#5FAE52",{out:.01});r.scale.set(.6,1.8*n,.35),r.position.set(Math.cos(o)*.12,.55+n*.25,Math.sin(o)*.12),r.rotation.set(Math.sin(o)*.5,o,-Math.cos(o)*.5),e.add(r)}return e}function rh(n,t,e=0,i="paisagem"){let s=Se(e+8),o=kt(256,Math.round(256*t/n),(l,c,h)=>{if(i==="paisagem")l.fillStyle="#8EC8EC",l.fillRect(0,0,c,h),l.fillStyle="#6FA866",l.beginPath(),l.moveTo(0,h*.7),l.quadraticCurveTo(c*.3,h*.35,c*.6,h*.62),l.quadraticCurveTo(c*.8,h*.5,c,h*.6),l.lineTo(c,h),l.lineTo(0,h),l.fill(),l.fillStyle="#9E9A94",l.beginPath(),l.ellipse(c*.66,h*.45,c*.1,h*.22,0,Math.PI,0),l.fill(),l.fillStyle="#F2C230",l.beginPath(),l.arc(c*.2,h*.22,h*.09,0,7),l.fill();else if(i==="familia"){l.fillStyle="#E8DCC8",l.fillRect(0,0,c,h);for(let u=0;u<3;u++){let d=c*(.28+u*.22),f=h*.45;l.fillStyle=["#2C6E7F","#E57AA0","#3A9AD9"][u],l.fillRect(d-26,f+20,52,h),l.fillStyle=["#9A6646","#E8B48C","#E3AE86"][u],l.beginPath(),l.arc(d,f,24,0,7),l.fill(),l.fillStyle=["#2B2422","#5A3020","#4A2A18"][u],l.beginPath(),l.arc(d,f-6,24,Math.PI,0),l.fill()}}else if(i==="poster")l.fillStyle=Ur(s,["#1F2D4E","#3E2A60","#E2443A"]),l.fillRect(0,0,c,h),l.fillStyle="#F2C230",l.beginPath(),l.arc(c/2,h*.4,c*.25,0,7),l.fill(),l.fillStyle="#FFF",l.font=`900 ${c*.13}px Inter, Arial`,l.textAlign="center",l.fillText(Ur(s,["ROCK","GAMER","FUTEBOL","ESPA\xC7O"]),c/2,h*.85);else{l.fillStyle="#F4F1EA",l.fillRect(0,0,c,h);for(let u=0;u<6;u++)l.fillStyle=Ur(s,hy),l.beginPath(),l.arc(s()*c,s()*h,10+s()*30,0,7),l.fill()}}),r=vi([0,0]);r.add(rt(n+.08,t+.08,.04,"#7A5233",0,0,.02,{out:.008}));let a=Hd(n,t,Xt(o),0,0,.042);return r.add(a),r}function ah(n=2.2,t="#F4F1EA",e="#3A3A44"){let i=vi([n,.62]);i.add(rt(n,.86,.58,t,0,.43,0,{out:.012,r:.02})),i.add(tt(n+.02,.04,.62,e,0,.88,0,{out:.01}));let s=Math.round(n/.5);for(let a=0;a<s;a++){let l=-n/2+n/s*(a+.5);i.add(tt(n/s-.03,.7,.01,t,l,.45,.295)),i.add(tt(.12,.02,.02,"#9AA0A8",l+(a%2?-.12:.12),.7,.31))}i.add(tt(.6,.02,.4,"#C9CED6",-n/4,.905,0)),i.add(tt(.52,.03,.34,"#8D949C",-n/4,.9,0));let o=new J;o.position.set(-n/4,.9,-.22),o.add(at(.02,.02,.28,"#C9CED6",0,.14,0,{seg:8}));let r=at(.015,.015,.2,"#C9CED6",0,.28,.08,{seg:8});return r.rotation.x=Math.PI/2,o.add(r),i.add(o),i.add(at(.1,.09,.24,"#B5603E",n/2-.3,1.02,0,{out:.01})),i.add(at(.11,.11,.03,"#8E4A2E",n/2-.3,1.15,0)),i.add(rt(.3,.05,.2,"#F2C230",n/4,.93,.05)),i}function lh(n="#F4F1EA"){let t=vi([.62,.62]);t.add(rt(.6,.86,.6,n,0,.43,0,{out:.012,r:.02})),t.add(tt(.5,.38,.01,"#2A2A30",0,.36,.301)),t.add(tt(.44,.3,.01,"#4A4A52",0,.36,.305)),t.add(tt(.6,.02,.6,"#2A2A30",0,.87,0));for(let[s,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(at(.08,.08,.02,"#4A4A52",s*.14,.89,o*.14,{seg:14})),t.add(at(.05,.05,.03,"#1B1A20",s*.14,.9,o*.14,{seg:10}));for(let s=0;s<4;s++)t.add(at(.025,.025,.03,"#1B1A20",-.2+s*.13,.8,.31,{rot:[Math.PI/2,0,0],seg:8}));t.add(tt(.6,.5,.04,n,0,1.12,-.29));let e=new J;e.position.set(.14,.9,.14),e.add(at(.12,.11,.14,"#9AA0A8",0,.07,0,{out:.01})),e.add(at(.125,.125,.015,"#8D949C",0,.15,0));let i=tt(.2,.02,.03,"#2A2A30",.2,.1,0);return e.add(i),t.add(e),t}function ch(n="#F4F1EA"){let t=vi([.72,.7]);t.add(rt(.7,1.8,.68,n,0,.9,0,{out:.014,r:.05})),t.add(tt(.66,.015,.01,"#C9CED6",0,1.25,.345)),t.add(tt(.03,.4,.04,"#C9CED6",-.28,1.5,.36)),t.add(tt(.03,.5,.04,"#C9CED6",-.28,.8,.36));for(let e=0;e<4;e++)t.add(rt(.08,.06,.01,["#E2443A","#F2C230","#3E7CC8","#5AA84E"][e],-.1+e*.1-(e>1?.05:0),1.55-e%2*.12,.345));return t.add(rt(.3,.26,.3,"#E8DCC8",0,1.93,0)),t}function Nr(n="#9A6236"){let t=vi([.45,.45]);t.add(rt(.42,.05,.42,n,0,.46,0,{out:.01}));for(let[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(tt(.04,.46,.04,n,e*.18,.23,i*.18));return t.add(tt(.04,.5,.04,n,-.18,.72,-.18)),t.add(tt(.04,.5,.04,n,.18,.72,-.18)),t.add(rt(.4,.2,.03,n,0,.85,-.19,{out:.01})),t}function hh(n=1,t="#B87A4A"){let e=vi([n,.45]);e.add(rt(n,.85,.44,t,0,.425,0,{out:.012}));for(let i=0;i<3;i++)e.add(tt(n-.08,.22,.01,new Pt(t).multiplyScalar(.88).getStyle(),0,.18+i*.25,.221)),e.add(tt(.16,.02,.02,"#7A5233",0,.25+i*.25,.23));return e.add(at(.06,.08,.03,"#F4F1EA",n/2-.2,.87,0)),e.add(rt(.2,.25,.03,"#7A5233",-n/4,.98,-.1,{rot:[-.15,0,0]})),e}function kd(){let n=vi([.4,.65]);return n.add(ve(new Yn(.19,.15,.4,18),"#FFFFFF",{pos:[0,.2,.05],out:.01})),n.add(at(.2,.2,.04,"#F4F1EA",0,.42,.05,{out:.008})),n.add(rt(.38,.38,.17,"#FFFFFF",0,.6,-.22,{out:.01})),n.add(tt(.06,.02,.02,"#C9CED6",.12,.8,-.13)),n}function Gd(n=!0){let t=vi([.55,.45]);return t.add(rt(.55,.2,.45,"#FFFFFF",0,.78,0,{out:.01})),t.add(at(.08,.1,.7,"#FFFFFF",0,.35,-.05,{seg:12})),t.add(at(.016,.016,.16,"#C9CED6",0,.96,-.15,{seg:8})),n&&(t.add(rt(.5,.7,.03,"#C9CED6",0,1.5,-.21,{out:.01})),t.add(new st(new St(.44,.64),new me({color:"#CFE6F2",emissive:"#9CC9E8",emissiveIntensity:.3})).translateY(1.5).translateZ(-.19))),t}var dh=new Map,Ss=(n,t)=>(dh.has(n)||dh.set(n,t()),dh.get(n)),Rs=(n,t=1,e=1)=>(n.wrapS=n.wrapT=Un,n.repeat.set(t,e),n);var Vd=()=>Ss("asf",()=>Rs(kt(256,256,n=>{n.fillStyle="#5B5F68",n.fillRect(0,0,256,256);let t=Se(7);for(let e=0;e<900;e++)n.fillStyle=t()<.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.07)",n.fillRect(t()*256,t()*256,2+t()*3,2+t()*3);n.strokeStyle="rgba(30,30,36,.18)",n.lineWidth=3,n.beginPath(),n.moveTo(30,200),n.bezierCurveTo(80,180,120,230,170,210),n.stroke()}))),Wd=(n="#D9D2C5",t="#CBC2B3")=>Ss("calc"+n,()=>Rs(kt(128,128,e=>{e.fillStyle=n,e.fillRect(0,0,128,128),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillRect(64,64,64,64),e.strokeStyle="rgba(0,0,0,.12)",e.lineWidth=2,e.strokeRect(1,1,126,126),e.beginPath(),e.moveTo(64,0),e.lineTo(64,128),e.moveTo(0,64),e.lineTo(128,64),e.stroke()})));var Xd=(n="#78B85A")=>Ss("gr"+n,()=>Rs(kt(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let e=Se(11);for(let i=0;i<700;i++){let s=e();t.fillStyle=s<.5?"rgba(40,90,30,.16)":"rgba(220,255,160,.14)";let o=e()*256,r=e()*256;t.fillRect(o,r,2,5+e()*5)}for(let i=0;i<6;i++)t.fillStyle="rgba(40,90,30,.10)",t.beginPath(),t.ellipse(e()*256,e()*256,20+e()*30,12+e()*20,e()*3,0,7),t.fill()}))),qd=()=>Ss("terra",()=>Rs(kt(256,256,n=>{n.fillStyle="#C49468",n.fillRect(0,0,256,256);let t=Se(5);for(let e=0;e<800;e++)n.fillStyle=t()<.5?"rgba(90,50,20,.12)":"rgba(255,230,190,.12)",n.beginPath(),n.arc(t()*256,t()*256,1+t()*3,0,7),n.fill()})));var Qi=n=>Ss("reb"+n,()=>Rs(kt(128,128,t=>{t.fillStyle=n,t.fillRect(0,0,128,128);let e=Se(n.length*13);for(let i=0;i<160;i++)t.fillStyle=e()<.5?"rgba(0,0,0,.035)":"rgba(255,255,255,.05)",t.fillRect(e()*128,e()*128,3+e()*5,2+e()*4)}))),Yd=(n="#B5603E")=>Ss("tij"+n,()=>Rs(kt(256,256,t=>{t.fillStyle="#D8CBB8",t.fillRect(0,0,256,256);let e=Se(4);for(let i=0;i<16;i++)for(let s=0;s<5;s++){let o=i%2?26:0,r=e()*.2-.1;t.fillStyle=n,t.globalAlpha=.85+r,t.fillRect(s*52+o-26+2,i*16+2,48,12)}t.globalAlpha=1}))),ji=(n="madeira",t="#C8935E",e="#B98450")=>Ss("piso"+n+t+e,()=>Rs(kt(256,256,i=>{if(n==="madeira")for(let s=0;s<8;s++){i.fillStyle=s%2?t:e,i.fillRect(0,s*32,256,32),i.fillStyle="rgba(0,0,0,.12)",i.fillRect(0,s*32,256,2),i.fillRect(s*97%256,s*32,2,32),i.fillStyle="rgba(80,40,10,.08)";for(let o=0;o<4;o++)i.fillRect((s*37+o*61)%256,s*32+10+o*3,40,2)}else if(n==="xadrez")for(let s=0;s<4;s++)for(let o=0;o<4;o++)i.fillStyle=(s+o)%2?t:e,i.fillRect(s*64,o*64,64,64);else if(n==="granilite"){i.fillStyle=t,i.fillRect(0,0,256,256);let s=Se(17);for(let o=0;o<900;o++)i.fillStyle=["#00000022","#FFFFFF33",e+"88"][o%3],i.fillRect(s()*256,s()*256,2+s()*4,2+s()*3)}else{i.fillStyle=t,i.fillRect(0,0,256,256),i.strokeStyle=e,i.lineWidth=4;for(let s=0;s<=4;s++)i.beginPath(),i.moveTo(s*64,0),i.lineTo(s*64,256),i.moveTo(0,s*64),i.lineTo(256,s*64),i.stroke();i.fillStyle="rgba(255,255,255,.08)",i.fillRect(8,8,40,20)}}))),f0=(n="#F4F1EA",t="#D9E8EE",e="#7FB2C8")=>Ss("azu"+n+t+e,()=>Rs(kt(128,128,i=>{i.fillStyle=n,i.fillRect(0,0,128,128),i.fillStyle=t,i.fillRect(64,0,64,64),i.fillRect(0,64,64,64),i.strokeStyle=e,i.lineWidth=3,i.beginPath(),i.arc(96,32,14,0,7),i.arc(32,96,14,0,7),i.stroke(),i.strokeStyle="rgba(0,0,0,.14)",i.lineWidth=2,i.strokeRect(0,0,64,64),i.strokeRect(64,64,64,64),i.strokeRect(64,0,64,64),i.strokeRect(0,64,64,64)})));function fh(){let n=new J;n.add(at(.17,.17,.36,"#5E7A99",0,.25,0,{seg:24,out:.008})),n.add(he(.17,"#5E7A99",0,.43,0,{seg:24}).translateY(0)),n.children[1].scale.y=.45,n.add(at(.17,.15,.08,"#4E6A88",0,.04,0,{seg:24,out:.006})),n.add(at(.04,.05,.06,"#B9BEC6",0,.53,0,{seg:12}));let t=new st(new Qe(.11,.018,8,24,Math.PI),Vt("#4E6A88"));t.position.set(0,.52,0),n.add(t);let e=new st(new St(.18,.12),Xt(kt(180,120,i=>{i.fillStyle="#F2C230",i.fillRect(0,0,180,120),i.fillStyle="#C0392B",i.font="900 40px Inter",i.textAlign="center",i.fillText("G\xC1S",90,60),i.font="700 22px Inter",i.fillText("13 kg",90,95)})));return e.position.set(0,.26,.172),n.add(e),n.userData.alca=[0,.62,0],n}function ph(){let n=new J;n.add(at(.05,.038,.08,"#F4F1EA",0,.04,0,{seg:16,out:.005}));let t=at(.044,.044,.004,"#5A3418",0,.074,0,{seg:16});n.add(t),n.userData.cafe=t;let e=new st(new Qe(.022,.007,6,14),Vt("#F4F1EA"));return e.position.set(.055,.045,0),n.add(e),n.add(at(.075,.07,.01,"#F4F1EA",0,.005,0,{seg:18})),n}function Or(n="#2E6FB8"){let t=new J;return t.add(rt(.3,.38,.16,n,0,0,0,{out:.008,r:.05})),t.add(rt(.22,.16,.06,new Pt(n).multiplyScalar(.8).getStyle(),0,-.07,.1,{r:.03})),t}function Zd(n="#3EA6FF"){let t=new J,e=tt(.012,.1,.01,n,0,.05,0),i=tt(.012,.08,.01,n,0,.14,0);return i.add(tt(.014,.03,.012,"#F4F1EA",0,.03,.008)),t.add(e,i),t.userData.cabo=e,t.userData.ponta=i,t}function $d(){let n=new J;return n.add(at(.02,.02,.08,"#C9CED6",0,0,.04,{rot:[Math.PI/2,0,0],seg:10,out:.004})),n.add(at(.018,.018,.07,"#C9CED6",0,-.03,.08,{seg:10})),n.add(tt(.06,.015,.015,"#C9CED6",0,.03,.03)),n}function mh(n="#F4F1EA"){let t=new J,e=rt(.44,.04,.42,n,0,.44,0,{out:.006});t.add(e);let i=rt(.44,.4,.04,n,0,.68,-.2,{out:.006});i.rotation.x=-.12,t.add(i);let s=[];for(let[o,r]of[[-.19,-.18],[.19,-.18],[-.19,.18],[.19,.18]]){let a=new J;a.position.set(o,.43,r),a.add(at(.02,.025,.44,n,0,-.22,0,{seg:8,out:.004})),t.add(a),s.push([a,o,r])}return t.abrir=o=>{e.position.y=.44-.38*o,i.position.y=.68-.38*o,i.rotation.x=-.12-.5*o,s.forEach(([r,a,l])=>{r.position.y=.43-.38*o,r.rotation.set(Math.sign(l)*1.4*o,0,-Math.sign(a)*1.4*o)})},t}function gh(){let n=new J;n.add(at(.2,.2,.03,"#F4F1EA",0,.015,0,{seg:28,out:.005})),n.add(at(.16,.16,.12,"#5A3018",0,.09,0,{seg:28,out:.006}));let t=at(.165,.165,.025,"#3A1E10",0,.16,0,{seg:28});n.add(t);for(let s=0;s<12;s++){let o=s/12*6.283;n.add(he(.014,"#F2546E",Math.cos(o)*.14,.175,Math.sin(o)*.14,{seg:6}))}let e=new J;e.position.y=.17,n.add(e);for(let[s,o]of[[-1,"7"],[1,"2"]]){let r=new st(new St(.07,.09),Xt(kt(70,90,a=>{a.fillStyle="#F2C230",a.font="900 86px Inter",a.textAlign="center",a.textBaseline="middle",a.strokeStyle="#B88A1A",a.lineWidth=6,a.strokeText(o,35,48),a.fillText(o,35,48)}),{transparent:!0,alphaTest:.4,side:We}));r.position.set(s*.035,.055,0),e.add(r)}let i=new st(new Zn(.012,.035,8),new ae({color:"#FFB43A"}));return i.position.set(0,.13,0),e.add(i),e.add(tt(.003,.02,.003,"#2A2A2A",0,.105,0)),n.userData.chama=i,n.userData.cobertura=t,n}function Jd(){let n=new J,t=new J,e=new J;n.add(t,e),t.add(rt(.6,.1,.8,"#A9A49C",-.3,.78,0,{out:.008,r:.02})),e.add(rt(.6,.1,.8,"#A9A49C",.3,.78,0,{out:.008,r:.02})),n.add(at(.14,.18,.74,"#9A958C",0,.37,0,{seg:12,out:.008}));for(let i of[-1,1]){let s=new J;s.add(rt(.9,.08,.3,"#A9A49C",0,.44,0,{out:.006})),s.add(at(.08,.1,.42,"#9A958C",0,.21,0,{seg:10})),s.position.z=i*.75,n.add(s)}return n.userData.A=t,n.userData.B=e,n}function p0(n="#E2443A"){let t=new J;t.add(rt(1.7,.55,3.7,n,0,.5,0,{out:.012,r:.12})),t.add(rt(1.5,.5,2,n,0,1,-.25,{out:.01,r:.14}));let e=new me({color:"#2A3A4E"});for(let[s,o,r,a,l,c]of[[1.38,.38,0,1.02,.76,0],[1.38,.36,0,1.02,-1.26,Math.PI]]){let h=new st(new St(s,o),e);h.position.set(r,a,l),h.rotation.y=c,t.add(h)}for(let s of[-1,1]){let o=new st(new St(1.8,.36),e);o.position.set(s*.76,1.02,-.25),o.rotation.y=s*Math.PI/2,t.add(o)}let i=[];for(let[s,o]of[[-.78,1.15],[.78,1.15],[-.78,-1.2],[.78,-1.2]]){let r=at(.32,.32,.22,"#1E1E22",s,.32,o,{rot:[0,0,Math.PI/2],seg:18,out:.006});t.add(r),i.push(r),t.add(at(.16,.16,.23,"#B9BEC6",s,.32,o,{rot:[0,0,Math.PI/2],seg:12}))}for(let s of[-1,1])t.add(tt(.3,.14,.04,"#F4F1EA",s*.55,.62,1.86)),t.add(tt(.26,.12,.04,"#E2443A",s*.58,.66,-1.86));return t.add(tt(1.6,.14,.14,"#2A2A30",0,.3,1.88)),t.add(tt(1.6,.14,.14,"#2A2A30",0,.3,-1.88)),t.userData.rodas=i,t}function Kd(){let n=new J;n.add(rt(.6,.04,.45,"#C9A06A",0,.72,0,{out:.006})),n.add(tt(.04,.7,.04,"#4A4E58",-.26,.35,-.18)),n.add(tt(.04,.7,.04,"#4A4E58",.26,.35,-.18)),n.add(tt(.04,.7,.04,"#4A4E58",-.26,.35,.18)),n.add(tt(.04,.7,.04,"#4A4E58",.26,.35,.18));let t=n.children[0];return n.userData.tampo=t,n}function Qd(){let n=new J,t=new J;return n.add(t),t.add(at(.08,.1,4.2,"#8E949C",0,2.1,0,{seg:10,out:.006})),t.add(tt(.9,.06,.06,"#8E949C",.45,4.1,0)),t.add(rt(.3,.1,.16,"#5A6270",.85,4.05,0)),n.entortar=e=>{t.rotation.z=-e*.45},n}function Qs(n=.4){let t=new J;t.add(tt(.008,n,.008,"#2A2A30",0,-n/2,0));let e=new st(new fe(.045,14,10),new me({color:"#FFF2C8",emissive:"#FFE6A0",emissiveIntensity:1}));return e.position.y=-n-.03,t.add(e),t.userData.bulbo=e,t}var js=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=Un,i.repeat.set(t,e),i.needsUpdate=!0,i},kn=(n,t,e,i,s,o,r=0,a=0)=>{let l=new st(new St(n,t),e);return l.position.set(i,s,o),l.rotation.set(r,a,0),l.receiveShadow=!0,l},jd=(n,t=1,e=1)=>Xt(js(Qi(n),t,e));function m0(n,t,e=220){let i=kt(8,512,o=>{let r=o.createLinearGradient(0,0,0,512);t.forEach(([a,l])=>r.addColorStop(a,l)),o.fillStyle=r,o.fillRect(0,0,8,512)}),s=new st(new fe(e,24,16),new ae({map:i,side:sn,fog:!1,depthWrite:!1}));return s.renderOrder=-10,n.add(s),s}var tf={tarde:[[0,"#5A7AB8"],[.38,"#E89A62"],[.5,"#F7C98A"],[.56,"#F2B070"],[1,"#C8946A"]],dia:[[0,"#5EA8E8"],[.45,"#A8D6F4"],[.55,"#E4F2FA"],[1,"#CFE4EE"]],manha:[[0,"#6CB0EA"],[.45,"#B4DCF4"],[.55,"#F4EAD2"],[1,"#D8E6EE"]]};function dy(n,t,e,i,s,o={}){let r=new J,a=3.2+i*2.8,l=s[t%s.length];r.add(ve(new Te(4,a,e),Xt(js(Qi(l),2,2)),{pos:[-2,a/2,0],out:.012}));for(let h=0;h<i;h++)for(let u=0;u<Math.max(1,Math.floor(e/2.4));u++){let d=-e/2+(u+.5)*e/Math.max(1,Math.floor(e/2.4));r.add(tt(.06,1.2,1,"#E8E2D6",.02,3.2+h*2.8+1.2,d)),r.add(kn(.9,1.1,Vt(n()>.5?"#6E8CA8":"#8EA8BE"),.06,3.2+h*2.8+1.2,d,0,Math.PI/2)),r.add(tt(.18,.06,1.1,"#D8D2C4",.1,3.2+h*2.8+.6,d))}let c=null;if(o.casa){r.add(tt(.12,1.6,e,new Pt(l).multiplyScalar(.85).getStyle(),1.6,.8,0,{out:.008}));let h=new J;h.position.set(1.62,0,-e*.2),r.add(h);for(let u=0;u<9;u++)h.add(tt(.03,1.5,.03,"#2F4A3A",0,.75,-.6+u*.15));h.add(tt(.04,.05,1.3,"#2F4A3A",0,1.45,0)),h.add(tt(.04,.05,1.3,"#2F4A3A",0,.2,0)),r.add(tt(.06,1.1,1.3,"#E8E2D6",.02,1.7,e*.2)),r.add(kn(1.2,1,Vt("#7E98B0"),.06,1.7,e*.2,0,Math.PI/2)),r.add(ve(new Te(4.6,.25,e+.3),Vt("#B8643C"),{pos:[-2,a+.1,0],out:.01}))}else{c=kn(e*.7,2,new me({color:"#BFD6E2",emissive:"#FFE8C0",emissiveIntensity:.25,transparent:!0,opacity:.85}),.03,1.35,0,0,Math.PI/2),r.add(c),r.add(tt(.08,2.3,.12,"#3A3A44",.04,1.2,-e*.35)),r.add(tt(.08,2.3,.12,"#3A3A44",.04,1.2,e*.35)),r.add(tt(.08,.1,e*.72,"#3A3A44",.04,2.4,0));for(let u=0;u<3;u++)r.add(tt(.3,.04,e*.6,"#8A6A4A",-.4,.7+u*.55,0));for(let u=0;u<12;u++)r.add(tt(.12,.16+n()*.1,.14,["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F2546E"][u%5],-.4,.82+u%3*.55,-e*.28+u/12*e*.56));let h=Md(o.loja??t,e*.9);h.position.set(.15,2.95,0),h.rotation.y=Math.PI/2,r.add(h)}return{g:r,vid:c,H:a}}function jo(n,t={}){let e=(t.incl??0)*Math.PI/180,i=t.hora||"dia",s=Se(t.seed||31),o=i==="tarde";m0(n,tf[i]);let r=Dn(n,{r:26,pos:o?[-14,9,-30]:[10,18,8],ki:o?2.4:2,hemi:o?1.05:1.5,sky:o?"#F4C08A":"#EAF2FF",ground:o?"#8E6A5A":"#B9A898",key:o?"#FFB070":"#FFF4E2",far:120,target:[0,0,-8]});n.add(new je(o?"#FFC898":"#FFFFFF",o?.35:.25)),t.fog!==!1&&(n.fog=new Xo(o?"#F0C49A":"#CFE4EE",80,230));let a=new J;a.rotation.x=-e,n.add(a);let l=t.z0??-90,c=t.z1??40,h=c-l,u=(l+c)/2,d=t.largura||8;a.add(kn(d,h,Xt(js(Vd(),d/4,h/4)),0,0,u,-Math.PI/2));for(let y=l;y<c;y+=4)a.add(kn(.14,2,Vt("#F2E6B0"),0,.005,y,-Math.PI/2));if(t.faixa!==!1)for(let y=0;y<8;y++)a.add(kn(.55,3,Vt("#F4F1EA"),-d/2+.6+y*(d-1.2)/7,.006,0,-Math.PI/2));let f=3;for(let y of[-1,1])a.add(ve(new Te(f,.16,h),Xt(js(Wd(),f,h)),{pos:[y*(d/2+f/2),.08,u]})),a.add(tt(.12,.17,h,"#B8B2A8",y*(d/2+.06),.085,u));let g=t.tipo==="casas"?["#E8C88A","#9CC4B0","#E8A08A","#B8C8E8","#F2E0B0","#D8B8D8"]:["#D8C4A8","#C8B098","#E2D2BC","#B8A890","#D4B89A","#E8D8C0"],E=[],m=d/2+f;for(let y of[-1,1]){let C=l,R=y>0?3:0;for(;C<c;){let w=t.tipo==="casas"?7+s()*3:5+s()*3,F=dy(s,R,w,t.tipo==="casas"?0:1+Math.floor(s()*2),g,{casa:t.tipo==="casas",loja:R});F.g.position.set(y*m,.16,C+w/2),F.g.rotation.y=y>0?Math.PI:0,a.add(F.g),F.vid&&E.push(F.vid),C+=w,R++}}let p=[];for(let y=l+6;y<c;y+=14)for(let C of[-1,1]){let R=Qd();R.position.set(C*(d/2+.5),.16,y+(C>0?7:0)),R.rotation.y=C>0?Math.PI:0,a.add(R),p.push(R)}for(let y=l+10;y<c;y+=11){let C=s()>.5?1:-1,R=Eh(s);R.position.set(C*(d/2+1.6),.16,y),a.add(R);let w=vd();w.position.set(-C*(d/2+.5),.16,y+3),a.add(w)}let b=[];for(let[y,C,R]of t.carros||[[1,-26,"#3E7CC8"],[-1,-14,"#F4F1EA"],[1,18,"#5AA84E"],[-1,26,"#2A2A30"]]){let w=p0(R);w.position.set(y*(d/2-1.1),0,C),a.add(w),b.push(w)}return t.passaros!==!1&&Lr(n,{centro:[0,26,-40],raio:30,n:6}),{g:a,w:(y,C,R)=>{let w=new x(y,C,R).applyMatrix4(new we().makeRotationX(-e));return[w.x,w.y,w.z]},vidros:E,postes:p,parados:b,RW:d,CW:f,luz:r,incl:e}}function Eh(n){let t=new J;t.add(at(.12,.16,2.4,"#6A4A30",0,1.2,0,{seg:8,out:.006}));for(let e=0;e<4;e++){let i=he(.8+n()*.4,["#4C8A3E","#5DA04A","#3E7A34"][e%3],(n()-.5)*1,2.8+n()*.9,(n()-.5)*1,{seg:10,out:.01});t.add(i)}return t.add(tt(1,.3,1,"#7A6A5A",0,.15,0)),t}function ef(n){m0(n,tf.dia),Dn(n,{r:14,pos:[6,12,6],ki:2,hemi:1.5}),n.add(new je("#FFFFFF",.25));let t=new J;n.add(t);let e=Se(9);t.add(kn(30,30,Xt(js(ji("granilite","#C8C2B6","#A8A296"),10,10)),0,0,0,-Math.PI/2));for(let[h,u,d,f]of[[0,-8,0,24],[-12,0,Math.PI/2,16],[12,0,-Math.PI/2,16]])t.add(kn(f,1.2,Vt("#4E9A6A"),h,.6,u,0,d)),t.add(kn(f,2.6,jd("#F2E6C8",f/3,1),h,2.5,u,0,d));t.add(ve(new Te(24,7,1),Xt(js(Qi("#F2E6C8"),6,2)),{pos:[0,3.5,-8.6]}));for(let h=0;h<9;h++)for(let u=0;u<2;u++)t.add(kn(1.6,1.1,Vt("#7E98B0"),-10+h*2.5,2.4+u*3,-7.98)),t.add(tt(1.7,.06,.1,"#E8E2D6",-10+h*2.5,1.8+u*3,-7.95));let i=new st(new St(4.4,.7),Xt(kt(880,140,h=>{h.fillStyle="#2E6A4A",h.fillRect(0,0,880,140),h.fillStyle="#F4F1EA",h.font="900 70px Inter",h.textAlign="center",h.textBaseline="middle",h.fillText("ESCOLA ESTADUAL",440,74)})));i.position.set(0,6.2,-7.97),t.add(i);let s=Jd();t.add(s);let o=Eh(e);o.position.set(-5.5,0,-4),t.add(o);let r=Eh(e);r.position.set(6.5,0,-5),t.add(r);let a=new J;a.position.set(9,0,-6.5),t.add(a),a.add(at(.08,.08,3.2,"#3A3A44",0,1.6,0,{seg:8})),a.add(tt(1.2,.8,.05,"#F4F1EA",0,3.2,.3,{out:.006}));let l=new st(new Qe(.22,.015,6,18),Vt("#E2443A"));l.rotation.x=Math.PI/2,l.position.set(0,2.95,.6),a.add(l);let c=new J;c.position.set(-9,0,-7.6),t.add(c),c.add(rt(.6,1,.4,"#C9CED6",0,.5,0,{out:.006}));for(let h=0;h<6;h++){let u=new J;u.position.set(-11+h*.5,0,-7.7),u.add(rt(.36,.4,.2,["#E2443A","#3E7CC8","#F2C230","#5AA84E"][h%4],0,.2,0,{out:.005})),t.add(u)}return Lr(n,{centro:[0,18,-20],raio:14,n:5}),{g:t,mesa:s}}function nf(n,t={}){Dn(n,{r:8,pos:[5,7,2],ki:1.4,hemi:1.4}),n.add(new je("#FFF4E6",.45));let e=new J;n.add(e);let i=7,s=7.5,o=3;e.add(kn(i,s,Xt(js(ji("ceramica","#D8CDB4","#C4B89E"),7,7)),0,0,0,-Math.PI/2));for(let[E,m,p,b]of[[i,0,-s/2,0],[i,0,s/2,Math.PI],[s,-i/2,0,Math.PI/2],[s,i/2,0,-Math.PI/2]])e.add(kn(E,1.1,Vt("#3E8A6A"),m,.55,p,0,b)),e.add(kn(E,1.9,jd("#F2E6C8",3,1),m,2.05,p,0,b));e.add(kn(i,s,Vt("#F4F0E8"),0,o,0,Math.PI/2));let r=tt(3.6,1.3,.05,"#2E5A44",0,1.65,-s/2+.04,{out:.008});e.add(r),e.add(tt(3.7,.06,.12,"#9A7A5A",0,.98,-s/2+.08));let a=new st(new St(3.4,1.1),new ae({transparent:!0,map:kt(1024,330,E=>{if(t.giz){t.giz(E);return}E.strokeStyle="#F4F1EA",E.fillStyle="#F4F1EA",E.font="600 48px Caveat",E.fillText("F\xEDsica \u2014 For\xE7a e Movimento",40,70),E.font="700 72px Caveat",E.fillText("F = m \xB7 a",80,180),E.font="600 40px Caveat",E.fillText("1 kgf \u2248 9,8 N",520,170),E.lineWidth=4,E.beginPath(),E.moveTo(560,250),E.lineTo(820,250),E.lineTo(800,236),E.moveTo(820,250),E.lineTo(800,264),E.stroke()})}));a.position.set(0,1.65,-s/2+.07),e.add(a);let l=new J;l.position.set(2.2,2.45,-s/2+.04),e.add(l),l.add(at(.22,.22,.05,"#F4F1EA",0,0,0,{rot:[Math.PI/2,0,0],seg:28,out:.006}));let c=new st(new Qe(.22,.02,8,28),Vt("#2A2A30"));l.add(c);for(let E=0;E<12;E++){let m=E/12*6.283;l.add(tt(.012,E%3?.02:.04,.01,"#2A2A30",Math.sin(m)*.18,Math.cos(m)*.18,.03))}let h=new J,u=new J;h.add(tt(.016,.11,.01,"#1E1E22",0,.05,0)),u.add(tt(.01,.17,.01,"#1E1E22",0,.08,0)),h.position.z=.035,u.position.z=.04,l.add(h,u),l.add(he(.012,"#C0392B",0,0,.045,{seg:8})),l.hora=(E,m)=>{u.rotation.z=-m/60*6.283,h.rotation.z=-(E%12+m/60)/12*6.283};let d=[];for(let E=0;E<4;E++)for(let m=0;m<5;m++){let p=Kd();p.position.set(-2.4+m*1.2,0,-1.4+E*1.3),e.add(p),d.push(p);let b=Nr("#4A4E58");b.position.set(-2.4+m*1.2,0,-1+E*1.3),b.rotation.y=Math.PI,e.add(b)}for(let E=0;E<3;E++){let m=new st(new St(1.4,1.1),new ae({color:"#CFE6F4"}));m.position.set(i/2-.02,1.9,-2+E*2.2),m.rotation.y=-Math.PI/2,e.add(m),e.add(tt(.08,.06,1.5,"#E8E2D6",i/2-.05,1.33,-2+E*2.2))}let f=new In("#FFE8C0",14,12,.7,.6,1.2);f.position.set(i/2+2,3.5,0),f.target.position.set(0,0,0),n.add(f,f.target);let g=rt(1.2,.06,.6,"#9A6236",-1.8,.76,-s/2+1.1,{out:.008});return e.add(g),e.add(tt(1.1,.7,.5,"#7A4E2E",-1.8,.36,-s/2+1.1)),{g:e,relogio:l,carteiras:d,D:s,W:i}}var yh=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=Un,i.repeat.set(t,e),i.needsUpdate=!0,i},sf=(n,t,e,i,s,o,r=0,a=0)=>{let l=new st(new St(n,t),e);return l.position.set(i,s,o),l.rotation.set(r,a,0),l.receiveShadow=!0,l};var fy=n=>Xt(yh(Qi(n),1,1));var py=.27,my=8;var gy=1.5,T4=gy-my*py;function of(n,t,e,i,s={}){let o=new J;n.add(o),o.add(sf(t,e,Xt(yh(ji(...s.piso||["ceramica","#D8CFBE","#C4B9A4"]),t*1.2,e*1.2)),0,0,0,-Math.PI/2));let r=s.azul?Xt(yh(f0("#F6F4EE","#E2E6E4","#B8C8C8"),t/.8,i/.8)):fy(s.parede||"#EDE6D6"),a=[[t,0,-e/2,0],[t,0,e/2,Math.PI],[e,-t/2,0,Math.PI/2],[e,t/2,0,-Math.PI/2]].map(([c,h,u,d])=>{let f=sf(c,i,r,h,i/2,u,0,d);return o.add(f),f}),l=new st(new St(t,e),Vt("#F4F0E8"));l.rotation.x=Math.PI/2,l.position.y=i,o.add(l);for(let[c,h,u,d]of[[0,-e/2+.01,t,.02],[0,e/2-.01,t,.02],[-t/2+.01,0,.02,e],[t/2-.01,0,.02,e]])o.add(tt(u,.08,d,"#C8BEAE",c,.04,h,{shadow:!1}));return{g:o,paredes:a}}function tr(n,t,e="manha",i=1){let s={manha:["#8CC8F0","#E8F4FA","#F4E0B0"],tarde:["#F2A65A","#F7D28A","#E8B070"],noite:["#141A38","#2A2E58","#F2C76A"],madrugada:["#2E3A6A","#6A6E9A","#E8C88A"]}[e],o=kt(512,360,l=>{let c=l.createLinearGradient(0,0,0,360);c.addColorStop(0,s[0]),c.addColorStop(1,s[1]),l.fillStyle=c,l.fillRect(0,0,512,360);let h=Se(i);for(let u=0;u<9;u++){let d=40+h()*40,f=120+h()*160,g=u*58-10;l.fillStyle=e==="noite"||e==="madrugada"?"#1E2238":["#D8CDB8","#C8B8A0","#E2D2BC","#B8A890"][u%4],l.fillRect(g,360-f,d,f);for(let E=0;E<6;E++)for(let m=0;m<3;m++)l.fillStyle=e==="noite"||e==="madrugada"?h()>.55?s[2]:"#2A2E44":"#8EA6B8",l.fillRect(g+6+m*(d/3),360-f+12+E*24,d/3-10,12)}}),r=new J,a=new st(new St(n,t),new ae({map:o}));r.add(a);for(let l of[-1,1])r.add(tt(.05,t+.05,.06,"#E8E2D6",l*n/2,0,.02));return r.add(tt(n,.05,.06,"#E8E2D6",0,t/2,.02)),r.add(tt(n+.14,.05,.14,"#E8E2D6",0,-t/2,.06)),r.add(tt(.03,t,.03,"#E8E2D6",0,0,.02)),r.userData.vidro=a,r}function rf(n){Dn(n,{r:5,pos:[2,6,3],ki:1.2,hemi:1.5}),n.add(new je("#FFF4E6",.5));let t=2,e=2.2,i=2.5,{g:s}=of(n,t,e,i,{azul:!0,piso:["ceramica","#B8C8C8","#A0B4B4"]}),o=Gd(!0);o.position.set(.3,0,-e/2+.25),n.add(o);let r=kd();r.position.set(-.55,0,-e/2+.35),n.add(r);let a=at(.03,.025,.09,"#3EA6FF",.55,.925,-e/2+.2,{seg:10,out:.003});n.add(a);let l=new J;l.position.set(0,0,e/2-.02),n.add(l),l.add(tt(.8,2.05,.04,"#E8E2D6",0,1.03,0,{out:.006}));let c=new J;c.position.set(-.3,1,-.04),l.add(c),c.add(at(.02,.02,.05,"#C9A030",0,0,0,{rot:[Math.PI/2,0,0],seg:8})),c.add(tt(.12,.02,.02,"#C9A030",.05,0,-.03));let h=$d();h.position.set(.3,.98,-e/2+.05),n.add(h);let u=Qs(.15);return u.position.set(0,i,0),n.add(u),{g:s,pia:o,porta:l,macaneta:c,torneira:h,copo:a,W:t,D:e}}function er(n,t={}){Dn(n,{r:6,pos:[2,6,4],ki:1,hemi:1.3,key:"#FFE8C8"}),n.add(new je("#FFE9D0",.5));let e=3.6,i=3.2,s=2.6,{g:o}=of(n,e,i,s,{parede:"#E8D8B8",piso:["madeira","#A87A4E","#966A42"]}),r=Nd(1.8,"#7A6A5A");r.position.set(-.6,0,-i/2+.5),n.add(r);let a=rt(1,.04,.7,"#C84E4E",-.9,.78,-i/2+.62,{out:.005});a.rotation.x=-.5,n.add(a);let l=Od(1,"#7A5236");l.position.set(1.2,0,i/2-.3),l.rotation.y=Math.PI,n.add(l);let c=new J;c.position.set(1.2,.5,i/2-.32),c.rotation.y=Math.PI,n.add(c),c.add(rt(.62,.5,.45,"#3A3A40",0,.25,-.05,{out:.008}));let h=new st(new St(.48,.36),new me({color:"#5A6A7A",emissive:"#3A4A5A",emissiveIntensity:.4}));h.position.set(0,.26,.18),c.add(h);let u=new J;u.position.set(.2,0,.35),n.add(u),u.add(rt(.9,.04,.6,"#9A6236",0,.74,0,{out:.008})),u.add(tt(.86,.01,.58,"#F4F1EA",0,.765,0));for(let[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])u.add(tt(.05,.72,.05,"#7A4E2E",m*.38,.36,p*.24));let d=tr(1.1,1,"tarde",6);d.position.set(e/2-.02,1.55,-.4),d.rotation.y=-Math.PI/2,n.add(d);let f=new st(new St(.5,.3),new ae({transparent:!0,map:kt(250,150,m=>{m.strokeStyle="#2F4A3A",m.lineWidth=6;for(let p=0;p<9;p++)m.beginPath(),m.moveTo(20+p*26,10),m.quadraticCurveTo(30+p*26+(p>2&&p<7?30:0),80,20+p*26,145),m.stroke();m.beginPath(),m.moveTo(10,14),m.quadraticCurveTo(125,60,240,14),m.stroke(),m.beginPath(),m.moveTo(10,140),m.lineTo(240,140),m.stroke()})}));f.position.set(e/2-.04,1.25,-.35),f.rotation.y=-Math.PI/2,n.add(f);for(let m=0;m<2;m++){let p=rh(.5,.4,30+m,"paisagem");p.position.set(-e/2+.02,1.7,-.6+m*.9),p.rotation.y=Math.PI/2,n.add(p)}let g=zd(.9,4);g.position.set(-e/2+.35,0,i/2-.35),n.add(g);let E=Qs(.3);return E.position.set(0,s,.2),n.add(E),{g:o,mesa:u,sofa:r,tv:c,janela:d,W:e,D:i,Hh:s,manta:a}}var nr=(n,t,e=20)=>ve(new Es(n.map(([i,s])=>new lt(i,s)),e),t,{out:.004});function vh(n,t=!0,e=1){let i=t?"#F2EBDA":"#2A2630",s=new J,o=[[0,0],[.018,0],[.018,.006],[.014,.009],[.011,.012]];if(n==="p")s.add(nr([...o,[.007,.03],[.009,.032],[0,.033]],i)),s.add(he(.0095,i,0,.04,0,{out:.003,seg:14}));else if(n==="t")s.add(nr([...o,[.011,.042],[.014,.044],[.014,.056],[0,.056]],i));else if(n==="c"){s.add(nr([...o,[.01,.03],[0,.03]],i));let r=rt(.016,.036,.03,i,0,.046,.002,{out:.003,r:.006});r.rotation.x=-.35,s.add(r),s.add(rt(.014,.014,.024,i,0,.056,.016,{out:.003,r:.005}))}else if(n==="b")s.add(nr([...o,[.007,.044],[.011,.05],[.006,.064],[0,.066]],i)),s.add(he(.0035,i,0,.069,0,{seg:8}));else if(n==="d"){s.add(nr([...o,[.008,.052],[.013,.058],[.011,.066],[.006,.07],[0,.072]],i));for(let r=0;r<6;r++){let a=r/6*6.283;s.add(he(.003,i,Math.cos(a)*.011,.069,Math.sin(a)*.011,{seg:6}))}}else n==="r"&&(s.add(nr([...o,[.008,.056],[.013,.062],[.011,.07],[0,.072]],i)),s.add(tt(.004,.02,.004,i,0,.082,0,{out:.002})),s.add(tt(.014,.004,.004,i,0,.084,0,{out:.002})));return s.scale.setScalar(e),s.userData={tipo:n,branca:t},s}var Ey=["tcbdrbct","pppppppp","","","","","pppppppp","tcbdrbct"];function si(n=.045,t={}){let e=new J,i=n*8;e.add(rt(i+n*.8,.02,i+n*.8,t.borda||"#6A4022",0,.01,0,{out:.006,r:.006}));let s=kt(512,512,(h,u)=>{for(let d=0;d<8;d++)for(let f=0;f<8;f++)h.fillStyle=(d+f)%2?t.escura||"#7A9A5A":t.clara||"#EEE8D0",h.fillRect(d*u/8,f*u/8,u/8,u/8)}),o=new st(new St(i,i),Xt(s));o.rotation.x=-Math.PI/2,o.position.y=.0205,e.add(o);let r=h=>{let u=h.charCodeAt(0)-97,d=+h[1]-1;return new x((u-3.5)*n,.021,(3.5-d)*n)},a={},l=n/.045;t.pecas!==!1&&Ey.forEach((h,u)=>{[...h].forEach((d,f)=>{let g=String.fromCharCode(97+f)+(8-u),E=u>=4,m=vh(d,E,l);m.position.copy(r(g)),d==="c"&&(m.rotation.y=E?0:Math.PI),e.add(m),a[g]=m})});let c=(h,u,d,f)=>{let g=r(u),E=r(d),m=On(ct(f));h.position.lerpVectors(g,E,m),h.position.y+=Math.sin(Math.PI*m)*n*.9};return e.userData={P:a,casa:r,s:n},{g:e,P:a,casa:r,move:c,s:n}}function lf(){let n=new J,t=rt(.2,.08,.08,"#2A2630",0,.04,0,{out:.005,r:.012});t.rotation.x=0,n.add(t);let e=document.createElement("canvas");e.width=512,e.height=160;let i=e.getContext("2d"),s=new bn(e);s.colorSpace=Be;let o=new st(new St(.18,.056),new ae({map:s}));o.position.set(0,.045,.041),n.add(o);let r=[-.05,.05].map(l=>{let c=at(.012,.012,.02,"#E2443A",l,.085,0,{out:.003,seg:12});return n.add(c),c}),a=(l,c,h=0)=>{i.fillStyle="#1A1A1E",i.fillRect(0,0,512,160);for(let[u,d]of[[0,l],[1,c]])i.fillStyle="#B8E8C8",i.fillRect(16+u*256,16,224,128),i.fillStyle="#16301E",i.font="700 86px 'IBM Plex Mono'",i.textAlign="center",i.textBaseline="middle",i.fillText(d,128+u*256,84);s.needsUpdate=!0,r[0].position.y=h===0?.08:.086,r[1].position.y=h===1?.08:.086};return a("10:00","10:00"),n.userData.set=a,n}function ir(n={}){let t=new J,e=n.cor||"#C9893E",i=new J;t.add(i);for(let[r,a]of[[.17,-.02],[.13,.2]]){let l=at(r,r,.09,e,a,0,0,{rot:[Math.PI/2,0,0],out:.006,seg:28});i.add(l)}let s=at(.055,.055,.002,"#2A1A12",.07,0,.046,{rot:[Math.PI/2,0,0],seg:20});i.add(s),i.add(tt(.03,.1,.012,"#4A2A16",-.09,0,.05));let o=tt(.5,.05,.025,"#5A361E",.58,0,.03,{out:.005});t.add(o),t.add(rt(.12,.07,.03,"#3A2214",.88,0,.03,{out:.005}));for(let r=0;r<6;r++)n.semCorda!==r&&t.add(tt(.86,.0025,.0025,"#E8E0C8",.44,-.018+r*.0072,.052,{shadow:!1}));if(n.teia){let r=new st(new St(.3,.3),new ae({transparent:!0,depthWrite:!1,map:kt(256,256,a=>{a.strokeStyle="rgba(240,240,240,.8)",a.lineWidth=2;for(let l=0;l<8;l++){let c=l/8*6.283;a.beginPath(),a.moveTo(128,128),a.lineTo(128+Math.cos(c)*128,128+Math.sin(c)*128),a.stroke()}for(let l=20;l<128;l+=22)a.beginPath(),a.arc(128,128,l,0,7),a.stroke()})}));r.position.set(-.1,.1,.05),t.add(r),t.userData.teia=r}return t.userData.corpo=i,t}function g0(n=.35){let t=new J,e=he(.11,"#F4F1EA",0,.11*(1-n*.3),0,{out:.006,seg:18});e.scale.set(1+n*.12,1-n*.3,1+n*.12),t.add(e);for(let i=0;i<6;i++){let s=i/6*6.283,o=he(.032,"#2A2A30",Math.cos(s)*.085*(1+n*.12),.11*(1-n*.3)+Math.sin(i*1.7)*.04,Math.sin(s)*.085*(1+n*.12),{seg:8});o.scale.set(1,.5,1),o.lookAt(0,.11,0),t.add(o)}return t.userData.b=e,t}function af(n,t,e,i={}){n.fillStyle="#FBF7EC",n.fillRect(0,0,t,e);let s=(u,d=10)=>{n.strokeStyle=u,n.fillStyle=u,n.lineWidth=d*t/1024,n.lineCap="round",n.lineJoin="round"},o=u=>u*t/1024,r=u=>u*e/768;s("#4FB04A",14);for(let u=0;u<70;u++){let d=520+u%14*16;n.beginPath(),n.moveTo(o(60+u*37%60),r(d)),n.lineTo(o(960-u*53%70),r(d+Math.sin(u)*8)),n.stroke()}s("#8A8A8A",10);for(let u of[120,900])n.beginPath(),n.arc(o(u),r(520),o(22),0,7),n.fill();s("#F2C230",10),n.beginPath(),n.arc(o(900),r(110),o(55),0,7),n.fill();for(let u=0;u<10;u++){let d=u/10*6.283;n.beginPath(),n.moveTo(o(900+Math.cos(d)*70),r(110+Math.sin(d)*70)),n.lineTo(o(900+Math.cos(d)*100),r(110+Math.sin(d)*100)),n.stroke()}let a=(u,d,f,g,E,m)=>{let p=f*.22;s("#2A2A30",9),n.beginPath(),n.moveTo(o(u-f*.08),r(d)),n.lineTo(o(u-f*.04),r(d-f*.38)),n.moveTo(o(u+f*.08),r(d)),n.lineTo(o(u+f*.04),r(d-f*.38)),n.stroke(),s(g,12),n.beginPath(),n.moveTo(o(u-f*.13),r(d-f*.36)),n.lineTo(o(u+f*.13),r(d-f*.36)),n.lineTo(o(u+f*.11),r(d-f*.72)),n.lineTo(o(u-f*.11),r(d-f*.72)),n.closePath(),n.fill(),s("#E3AE86",9);let b=d-f*.68;E?(n.beginPath(),n.moveTo(o(u-f*.11),r(b)),n.lineTo(o(u-f*.3),r(b-f*.3)),n.moveTo(o(u+f*.11),r(b)),n.lineTo(o(u+f*.3),r(b-f*.3)),n.stroke()):(n.beginPath(),n.moveTo(o(u-f*.11),r(b)),n.lineTo(o(u-f*.26),r(b+f*.2)),n.moveTo(o(u+f*.11),r(b)),n.lineTo(o(u+f*.28),r(b+f*.12)),n.stroke());let A=d-f*.72-p;if(n.fillStyle="#E3AE86",n.beginPath(),n.arc(o(u),r(A),o(p),0,7),n.fill(),s("#2A2A30",6),n.beginPath(),n.arc(o(u),r(A),o(p),0,7),n.stroke(),s("#4A2A18",14),n.beginPath(),n.arc(o(u),r(A-p*.2),o(p*.95),Math.PI*1.05,Math.PI*1.95),n.stroke(),s("#2A2A30",7),m)n.beginPath(),n.arc(o(u-p*.35),r(A-p*.05),o(5),0,7),n.fill(),n.beginPath(),n.moveTo(o(u+p*.2),r(A-p*.05)),n.lineTo(o(u+p*.5),r(A-p*.05)),n.stroke(),n.beginPath(),n.arc(o(u),r(A+p*.35),o(p*.35),0,Math.PI),n.stroke(),s("#F2546E",8),n.beginPath(),n.ellipse(o(u+p*.05),r(A+p*.72),o(p*.14),r(p*.2),0,0,7),n.fill();else{for(let y of[-1,1])n.beginPath(),n.arc(o(u+y*p*.35),r(A-p*.05),o(5),0,7),n.fill();n.beginPath(),n.arc(o(u),r(A+p*.2),o(p*.45),.2,Math.PI-.2),n.stroke()}};a(330,600,330,"#8E949C",!0,!1),a(640,610,210,"#F2C230",!1,!0),s("#2A2A30",6),n.fillStyle="#FFFFFF",n.beginPath(),n.arc(o(745),r(590),o(26),0,7),n.fill(),n.stroke(),n.fillStyle="#2A2A30",n.beginPath(),n.arc(o(745),r(590),o(9),0,7),n.fill();let l=i.brilho||0;n.save(),n.translate(o(512),r(120)),n.rotate(-.04),l>0&&(n.shadowColor=`rgba(255,220,120,${l})`,n.shadowBlur=40*l*t/1024),n.fillStyle="#2E5EC8",n.font=`700 ${Math.round(74*t/1024)}px Caveat`,n.textAlign="center",n.textBaseline="middle";let c="o melhor dia da minha vida",h=-n.measureText(c).width/2;for(let u=0;u<c.length;u++){let d=c[u],f=n.measureText(d).width;n.save(),n.translate(h+f/2,Math.sin(u*1.7)*6*t/1024),n.rotate(Math.sin(u*2.3)*.08),n.fillText(d,0,0),n.restore(),h+=f}n.restore()}function vn(n={}){let t=n.w||.3,e=n.h||.225,i=new J,s=document.createElement("canvas");s.width=1024,s.height=768;let o=s.getContext("2d");af(o,1024,768,{});let r=new bn(s);r.colorSpace=Be;let a=kt(64,64,b=>{b.fillStyle="#F4EFE0",b.fillRect(0,0,64,64),b.fillStyle="#4FB04A55",b.fillRect(40,40,24,24)}),l=[],c=(b,A)=>{let y=new St(t/2,e/2),C=y.attributes.uv;for(let F=0;F<C.count;F++)C.setXY(F,(C.getX(F)+b)/2,(C.getY(F)+A)/2);let R=new st(y,[new me({map:r,side:wi})][0]),w=new st(y,new me({map:a,side:sn}));return R.add(w),$s(R,.002),R},h=new J;i.add(h);let u=new J;h.add(u);let d=new J;h.add(d);for(let[b,A]of[[d,0],[u,1]]){let y=new J;b.add(y);let C=new J;b.add(C);let R=c(A,0);R.position.set((A?1:-1)*t/4,-e/4,0),y.add(R);let w=c(A,1);w.position.set((A?1:-1)*t/4,e/4,0),C.add(w),l.push({lado:b,baixo:y,cima:C})}let f=new J;i.add(f);let g=rt(t/2,e/2,.006,"#F4EFE0",-t/4,-e/4,0,{out:.002,r:.002});f.add(g);let E=new st(new St(t/2*.9,.002),new ae({color:"#C8C0A8"}));E.position.set(-t/4,-e/4,.0035),f.add(E);let m=new st(new St(.02,.015),new ae({color:"#4FB04A"}));m.position.set(-t/2+.015,-e/2+.012,.0035),f.add(m);let p=(b=0,A=0)=>{b=ct(b);let y=b<.015;f.visible=y,h.visible=!y;let C=On(ct(b*2)),R=On(ct(b*2-1));for(let w of l)w.cima.rotation.x=-(1-C)*Math.PI*.98,w.cima.position.z=(1-C)*.002;l[1].lado.rotation.y=-(1-R)*Math.PI*.98,l[1].lado.position.z=(1-R)*.004,A!==i.userData.br&&(i.userData.br=A,af(o,1024,768,{brilho:A}),r.needsUpdate=!0)};return p(n.aberta??0),i.userData.set=p,i.set=p,i}function zr(n="#2E5EB8"){let t=new J,e=[];for(let s of[-.5,.5]){let o=new J;o.position.set(0,.33,s),t.add(o),o.add(ve(new Qe(.31,.022,8,26),"#1E1E22",{out:.004,rot:[0,Math.PI/2,0]}));for(let r=0;r<6;r++){let a=tt(.006,.6,.006,"#C9CED6",0,0,0);a.rotation.x=r/6*Math.PI,o.add(a)}e.push(o)}let i=(s,o,r=.03)=>{let a=new x(...s),l=new x(...o),c=at(r/2,r/2,a.distanceTo(l),n,0,0,0,{out:.004,seg:8});c.position.copy(a).add(l).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new x(0,1,0),l.clone().sub(a).normalize()),t.add(c)};return i([0,.33,-.5],[0,.62,-.05]),i([0,.33,-.5],[0,.36,.02]),i([0,.36,.02],[0,.62,-.05]),i([0,.62,-.05],[0,.72,.38]),i([0,.36,.02],[0,.7,.4]),i([0,.7,.4],[0,.33,.5]),t.add(rt(.08,.03,.18,"#2A2A30",0,.68,-.08,{out:.003})),t.add(at(.012,.012,.44,"#2A2A30",0,.86,.42,{rot:[0,0,Math.PI/2],out:.003})),i([0,.72,.38],[0,.86,.42],.025),t.userData.gira=s=>e.forEach(o=>o.rotation.x=s),t}function Mh(n=0){let t=new J,e=ve(new Es([[0,0],[.035,.006],[.045,.025],[.04,.05],[.022,.075],[.006,.09],[0,.092]].map(([o,r])=>new lt(o,r)),18),"#D9892E",{out:.004});t.add(e);let i=he(.03,"#F4E6C0",.02,.06,.02,{seg:12});i.visible=!1,t.add(i);let s=he(.012,"#FFF8E8",.03,.055,.03,{seg:10});return s.visible=!1,t.add(s),t.userData.morde=o=>{i.visible=o>0,s.visible=o>.5,s.position.y=.055-(o-.5)*.03},t.userData.morde(n),t}function sr(n,t,e=.21,i=.297){let s=new st(new St(e,i),Xt(kt(512,724,(o,r,a)=>{o.fillStyle="#FBF8EE",o.fillRect(0,0,r,a),o.fillStyle="#2A2A30",o.font="800 34px Inter",o.fillText("PROVA \u2014 HIST\xD3RIA",40,60),o.strokeStyle="#B8BCC4",o.lineWidth=3;for(let l=120;l<a-40;l+=44)o.beginPath(),o.moveTo(40,l),o.lineTo(r-40,l),o.stroke();o.strokeStyle=t,o.lineWidth=10,o.beginPath(),o.arc(r-120,150,80,0,7),o.stroke(),o.fillStyle=t,o.font="700 120px Caveat",o.textAlign="center",o.textBaseline="middle",o.fillText(n,r-120,158)})));return s.rotation.x=-Math.PI/2,s}function cf(n=.16,t=.11){return new st(new St(n,t),Xt(kt(512,352,(i,s,o)=>{i.fillStyle="#FFFFFF",i.fillRect(0,0,s,o),i.fillStyle="#E2443A",i.fillRect(0,0,s,26),i.fillStyle="#2A2A30",i.textAlign="center",i.font="900 52px Inter",i.fillText("DIA DA FAM\xCDLIA",s/2,110),i.font="700 36px Inter",i.fillText("DOMINGO, 10H",s/2,180),i.font="700 30px Inter",i.fillText("TRAGA QUEM VOC\xCA AMA",s/2,250),i.fillStyle="#E2443A",i.beginPath(),i.moveTo(s/2,320),i.bezierCurveTo(s/2-40,290,s/2-20,260,s/2,285),i.bezierCurveTo(s/2+20,260,s/2+40,290,s/2,320),i.fill()})))}function kr(){let n=new J,t=he(.06,"#D9A050",0,.02,0,{out:.004,seg:16});t.scale.set(1.4,.4,.8),n.add(t);let e=tt(.15,.004,.08,"#F4E6C0",0,.04,0);n.add(e);let i=tt(.14,.003,.074,"#FFE680",0,.043,0);return i.material=Vt("#FFE680",{emissive:"#FFE680",emissiveIntensity:.1}),n.add(i),n.userData.passa=s=>{i.scale.x=Math.max(.01,s),i.position.x=-.07+.07*s},n}function hf(){let n=new J;return n.add(tt(.08,.004,.016,"#C9CED6",.05,0,0,{out:.002})),n.add(tt(.07,.012,.014,"#3A2A20",-.03,0,0,{out:.002})),n}function Gr(n,t,e=512,i=!0){let s=document.createElement("canvas");s.width=e,s.height=Math.round(e*t/n);let o=s.getContext("2d"),r=new bn(s);r.colorSpace=Be,r.anisotropy=8;let a=new st(new St(n,t),i?new ae({map:r,toneMapped:!1}):Xt(r)),l=null;return a.paint=(c,h)=>(c!==l&&(l=c,o.setTransform(1,0,0,1,0,0),h(o,s.width,s.height),r.needsUpdate=!0),a),a}var yy="#E8742A";function _h(n,t,e,i){n.fillStyle="#FBF8EE",n.fillRect(0,0,t,e),n.strokeStyle="#9CC4E4",n.lineWidth=2;for(let s=e*.14;s<e;s+=e*.062)n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke();n.strokeStyle="#E88A8A",n.lineWidth=3,n.beginPath(),n.moveTo(t*.12,0),n.lineTo(t*.12,e),n.stroke(),i&&i(n,t,e)}var uf=(n,t,e,i,s,o="#2A3A7A",r="left")=>{n.fillStyle=o,n.font=`700 ${s}px Caveat`,n.textAlign=r,n.textBaseline="middle",n.fillText(t,e,i)};function df(){let n=new J;n.add(rt(.62,.02,.4,yy,0,.01,0,{r:.006,out:.004}));let t=Gr(.29,.38,512,!1),e=Gr(.29,.38,512,!1);return t.rotation.x=e.rotation.x=-Math.PI/2,t.position.set(-.148,.023,0),e.position.set(.148,.023,0),n.add(t,e),n.add(at(.006,.006,.38,"#9EA6B0",0,.03,0,{rot:[Math.PI/2,0,0],seg:6})),n.userData={E:t,D:e},n}var Mi=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=Un,i.repeat.set(t,e),i.needsUpdate=!0,i},an=(n,t,e,i,s,o,r=0,a=0)=>{let l=new st(new St(n,t),e);return l.position.set(i,s,o),l.rotation.set(r,a,0),l.receiveShadow=!0,l},or=(n,t=1,e=1)=>Xt(Mi(Qi(n),t,e)),to=(n,t,e,i,s,o,r=900,a="center",l="Inter")=>{n.fillStyle=o,n.font=`${r} ${s}px ${l}`,n.textAlign=a,n.textBaseline="middle",n.fillText(t,e,i)};function E0(n,t,e,i,s,o={}){let r=Xt(Mi(ji(...o.piso||["madeira","#A87A4E","#966A42"]),e*1.1,i*1.1));n.add(an(e,i,r,t,0,0,-Math.PI/2));let a=o.azul?Xt(Mi(f0("#F6F4EE","#E2E6E4","#B8C8C8"),e/.8,s/.8)):or(o.parede||"#EDE6D6"),l={};l.fundo=an(e,s,a,t,s/2,-i/2,0,0),n.add(l.fundo),l.frente=an(e,s,a,t,s/2,i/2,0,Math.PI),n.add(l.frente),l.esq=an(i,s,a,t-e/2,s/2,0,0,Math.PI/2),n.add(l.esq),l.dir=an(i,s,a,t+e/2,s/2,0,0,-Math.PI/2),n.add(l.dir),l.teto=an(e,i,Vt("#F4F0E8"),t,s,0,Math.PI/2),n.add(l.teto);for(let[c,h,u,d]of[[t,-i/2+.01,e,.02],[t-e/2+.01,0,.02,i],[t+e/2-.01,0,.02,i]])n.add(tt(u,.08,d,"#C8BEAE",c,.04,h,{shadow:!1}));return l}function bh(n,t,e,i=1,s="#8A6040"){let o=new J;o.position.set(t,0,e),n.add(o);for(let a of[-1,1])o.add(tt(.1,2.12,.07,"#B88A5E",0,1.06,a*.44,{out:.005}));o.add(tt(.1,.07,.95,"#B88A5E",0,2.12,0,{out:.005}));let r=new J;return r.position.set(0,0,-.4),o.add(r),r.add(tt(.035,2.05,.8,s,0,1.03,.4,{out:.005})),r.add(he(.025,"#C9A030",i*.03,1,.72,{seg:8})),o.folha=r,o.abre=a=>{r.rotation.y=-i*a*1.6},o}function ff(n,t={}){let e=t.hora||"manha",i=e==="noite",s=Dn(n,{r:9,pos:i?[2,6,3]:[3,8,6],ki:i?.45:1.5,hemi:i?.7:1.5,sky:i?"#8E9CD0":"#EAF2FF",key:i?"#9FB4F0":"#FFF2DC"});n.add(new je(i?"#6A78B8":"#FFF4E6",i?.35:.45));let o=new J;n.add(o);let r=3,a=2.6,l=E0(o,-3.1,3,r,a,{azul:!0,piso:["ceramica","#C9BBA4","#B5A68C"]}),c=lh("#F4F1EA");c.position.set(-4,0,-r/2+.34),o.add(c);let h=[];for(let At=0;At<2;At++){let Et=new st(new Zn(.035,.06,10,1,!0),new ae({color:"#5AB0FF",transparent:!0,opacity:.85}));Et.position.set(-4.12+At*.24,.93,-r/2+.3),o.add(Et),h.push(Et)}let u=new J;u.position.set(-4.12,.92,-r/2+.3),o.add(u),u.add(at(.11,.1,.12,"#9EA6B0",0,.06,0,{out:.004,seg:16})),u.add(tt(.18,.015,.02,"#2A2A30",.17,.1,0));let d=fh();d.scale.setScalar(.65),d.position.set(-4.45,0,-r/2+.25),o.add(d);let f=ah(1.3,"#F4F1EA","#8E8678");f.position.set(-2.85,0,-r/2+.32),o.add(f);let g=ch("#F4F1EA");g.position.set(-1.98,0,-r/2+.38),o.add(g);let E=tr(.9,.8,e,2);E.position.set(-3.1,1.6,-r/2+.02),o.add(E);let m=new J;m.position.set(-3,0,.45),o.add(m);let p=kt(256,256,At=>{for(let Et=0;Et<8;Et++)for(let S=0;S<8;S++)At.fillStyle=(Et+S)%2?"#3E7CC8":"#F6F2EA",At.fillRect(Et*32,S*32,32,32)});{let At=new st(new Te(1.12,.012,.82),Xt(Mi(p,2,1.5)));At.position.y=.77,m.add(At)}m.add(rt(1,.04,.7,"#B87A4A",0,.745,0));for(let[At,Et]of[[-1,-1],[1,-1],[-1,1],[1,1]])m.add(tt(.05,.72,.05,"#9A6236",At*.44,.36,Et*.29));let b=[[-.55,0,Math.PI/2],[.55,0,-Math.PI/2],[0,-.62,0]].map(([At,Et,S])=>{let v=mh();return v.position.set(-3+At,0,.45+Et),v.rotation.y=S,o.add(v),v}),A=Qs(.3);A.position.set(-3.1,a,.2),o.add(A);let y=new fn("#FFE2AE",i?6:2,6,1.6);y.position.set(-3.1,2.1,.2),o.add(y);let C=E0(o,0,3,r,a,{parede:"#B8D0DC",piso:["madeira","#9A6A42","#8A5E3A"]}),R=new J;R.position.set(.95,0,-.45),o.add(R),R.add(rt(.95,.3,1.95,"#8A5A36",0,.17,0,{out:.01})),R.add(rt(.95,.7,.06,"#7A4E2E",0,.55,-.98,{out:.01})),R.add(rt(.88,.1,1.85,"#F4F1EA",0,.37,0,{out:.008}));let w=rt(.6,.14,.3,"#F4F1EA",0,.49,-.8,{out:.006});R.add(w);let F=rt(.92,.05,1.2,"#3E6EC8",0,.44,.3,{out:.006});R.add(F);let T=new J;T.position.set(-1.12,0,.2),o.add(T),T.add(rt(.6,.04,1.05,"#F4F1EA",0,.74,0,{out:.008}));for(let[At,Et]of[[-1,-1],[1,-1],[-1,1],[1,1]])T.add(tt(.04,.72,.04,"#C9CED6",At*.26,.36,Et*.48));let M=df();M.position.set(.02,.76,.05),M.rotation.y=-Math.PI/2,M.scale.setScalar(.8),T.add(M);let P=new J;P.position.set(-.16,.76,-.38),T.add(P),P.add(at(.06,.07,.02,"#2A2A30",0,.01,0)),P.add(at(.01,.01,.3,"#2A2A30",0,.16,0));let q=at(.05,.1,.12,"#F2C230",0,.32,0,{out:.004});P.add(q);let z=new fn("#FFD89A",0,3,1.6);z.position.set(-.1,1,-.2),T.add(z);let I=Nr("#3E6EC8");I.position.set(-.55,0,.25),I.rotation.y=-Math.PI/2,o.add(I);let N=tr(.9,.9,e,4);N.position.set(.4,1.55,-r/2+.02),o.add(N);let H=new In(i?"#B8C8FF":"#FFF0D0",i?8:10,7,.55,.6,1.4);H.position.set(.4,2.3,-r/2-.6),H.target.position.set(.2,0,.6),o.add(H,H.target);let K=bh(o,1.5,.9,-1),k=ir({teia:!0,semCorda:2});k.position.set(-1.36,.22,1.36),k.rotation.set(0,Math.PI/2,Math.PI/2-.2),o.add(k);let it=new J;it.position.set(-1.48,1.35,-.95),it.rotation.y=Math.PI/2,o.add(it),it.add(rt(.5,.8,.03,"#7A5236",0,0,0,{out:.005}));let pt=new st(new St(.44,.74),new ae({color:"#9AB0C0"}));pt.position.z=.017,it.add(pt);let xt=new J;xt.position.set(-.3,0,-1.25),o.add(xt);let Wt=hh(.8,"#B87A4A");xt.add(Wt),xt.add(rt(.5,.34,.06,"#2A2A30",0,1.06,-.02,{out:.006}));let Me=Gr(.44,.28,256);Me.position.set(0,1.06,.015),xt.add(Me);let Q=new st(new St(.45,.6),Xt(kt(225,300,At=>{At.fillStyle="#2A2E44",At.fillRect(0,0,225,300),At.fillStyle="#F2C230",At.beginPath(),At.arc(112,130,70,0,7),At.fill(),to(At,"ROCK",112,250,50,"#F4F1EA")})));Q.position.set(1,1.7,-r/2+.02),o.add(Q);let ut=Qs(.25);ut.position.set(0,a,0),o.add(ut);let Dt=new fn("#FFE2AE",i?0:1.5,5,1.6);Dt.position.set(0,2.2,0),o.add(Dt);let mt=E0(o,2.85,2.5,r,a,{parede:"#F2D89A",piso:["madeira","#B88A5A","#A87A4A"]}),zt=new J;zt.position.set(3.55,0,-.55),o.add(zt),zt.add(rt(.75,.26,1.6,"#E2443A",0,.15,0,{out:.008})),zt.add(rt(.7,.09,1.5,"#F4F1EA",0,.32,0,{out:.006}));let Zt=rt(.45,.12,.24,"#F4F1EA",0,.42,-.6,{out:.005});zt.add(Zt);let se=rt(.72,.045,1,"#F2C230",0,.39,.2,{out:.005});zt.add(se);for(let At=0;At<9;At++){let Et=new st(new fi(.04,5),new ae({color:"#FFF2A0"}));Et.position.set(2+At%3*.5,1.7+Math.floor(At/3)*.25,-r/2+.015),o.add(Et)}let Ce=new J;Ce.position.set(2.1,1,-r/2+.03),o.add(Ce),Ce.add(rt(.45,.9,.03,"#F2546E",0,0,0,{out:.005}));{let At=new st(new St(.39,.84),new ae({color:"#A8C0D0"}));At.position.z=.017,Ce.add(At)}let ue=Or("#3E7CC8");ue.position.set(2.15,.19,.9),ue.rotation.y=.6,o.add(ue);let Ye=[];for(let At=0;At<3;At++){let Et=new st(new St(.3,.22),Xt(kt(150,110,S=>{S.fillStyle="#FBF7EC",S.fillRect(0,0,150,110),S.strokeStyle=["#E2443A","#3E7CC8","#5AA84E"][At],S.lineWidth=6,S.beginPath(),S.arc(75,50,26,0,7),S.stroke(),S.beginPath(),S.moveTo(20,95),S.lineTo(130,90),S.stroke()})));Et.position.set(4.08,1.5,-.4+At*.4),Et.rotation.y=-Math.PI/2,o.add(Et),Ye.push(Et)}let B=tr(.7,.7,e,7);B.position.set(3.3,1.6,-r/2+.02),o.add(B);let wn=Qs(.22);wn.position.set(2.85,a,0),o.add(wn);let de=new fn("#FFE2AE",i?0:1.5,5,1.6);de.position.set(2.85,2.2,0),o.add(de);for(let At of[-1.55,1.55])o.add(tt(.1,a,r,"#E8E0D0",At,a/2,0));let Ee=bh(o,-1.55,.85,1),Gt=bh(o,1.55,.85,-1);if(K.visible=!1,t.corte)for(let At of[l,C,mt])At.frente.visible=!1,At.teto.visible=!1;if(t.semTeto)for(let At of[l,C,mt])At.teto.visible=!1;return{g:o,D:r,H:a,PK:l,PG:C,PD:mt,fogao:c,chama:h,panela:u,geladeira:g,mesa:m,cadK:b,cama:R,coberta:F,trav:w,escrivaninha:T,caderno:M,abajur:P,luzAbaj:z,cadEsc:I,janela:N,violao:k,espelho:it,tv:xt,telaTV:Me,camaD:zt,travD:Zt,cobD:se,mochila:ue,espelhoD:Ce,portaK:Ee,portaD:Gt,luzes:{LK:y,LG:Dt,LD:de,sol:H},luz:s}}function pf(n){Dn(n,{r:10,pos:[3,9,5],ki:1.2,hemi:1.6}),n.add(new je("#FFFFFF",.5));let t=new J;n.add(t);let e=Se(41);t.add(an(20,16,Xt(Mi(ji("ceramica","#E8E4DC","#D8D2C6"),14,12)),0,0,-3,-Math.PI/2)),t.add(an(20,5,or("#F4EEDC",6,2),0,2.5,-9));let i=an(20,16,Vt("#F4F4F0"),0,3.6,-3,Math.PI/2);t.add(i);for(let g=0;g<6;g++){let E=tt(1.6,.05,.25,"#FFFFF4",-6+g*2.6,3.55,-2);E.material=Vt("#FFFFF4",{emissive:"#FFFFF4",emissiveIntensity:.8}),t.add(E)}for(let g=0;g<3;g++){let E=-3.5-g*1.8;for(let m of[-1,1]){let p=new J;p.position.set(m*3.2,0,E),t.add(p),p.add(tt(4.5,1.7,.5,"#C9CED6",0,.85,0,{out:.008}));for(let b=0;b<4;b++)for(let A=0;A<14;A++)p.add(tt(.22,.2+e()*.1,.14,["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F2546E","#F4F1EA","#9B6CC4"][(A+b*3+g)%7],-2.05+A*.31,.3+b*.42,.3))}}let s=new st(new St(5,.9),Xt(kt(1e3,180,g=>{g.fillStyle="#C8302A",g.fillRect(0,0,1e3,180),to(g,"MERCADO BOM PRE\xC7O",500,95,92,"#FFE08A")})));s.position.set(0,3,-8.95),t.add(s);let o=new J;t.add(o),o.add(rt(2.4,.85,.7,"#3A3A44",.5,.425,.2,{out:.01}));let r=new st(new Te(1.5,.02,.5),Xt(Mi(kt(64,64,g=>{g.fillStyle="#2A2A30",g.fillRect(0,0,64,64),g.fillStyle="#3A3A44",g.fillRect(0,0,64,8)}),8,1)));r.position.set(.95,.86,.2),o.add(r);let a=new J;a.position.set(.05,.86,.2),o.add(a),a.add(rt(.3,.02,.3,"#5A5A66",0,0,0));let l=new st(new St(.24,.24),new ae({color:"#FF3A3A",transparent:!0,opacity:.5}));l.rotation.x=-Math.PI/2,l.position.y=.012,a.add(l);let c=new J;c.position.set(-.5,.86,.05),o.add(c),c.add(at(.02,.02,.3,"#2A2A30",0,.15,0)),c.add(rt(.32,.24,.04,"#2A2A30",0,.4,0,{out:.005}));let h=Gr(.28,.2,256);h.position.set(0,.4,.022),c.add(h);let u=new J;u.position.set(-.5,0,-.3),o.add(u),u.add(at(.03,.03,2,"#9EA6B0",0,1,0,{seg:8}));let d=at(.14,.14,.08,"#C8302A",0,2.05,0,{rot:[Math.PI/2,0,0],out:.004});u.add(d);let f=[];for(let g=0;g<5;g++){let E=rt(.12,.16,.1,["#F2C230","#3E7CC8","#E2443A","#5AA84E","#F4F1EA"][g],1.6-g*.2,.95,.2,{out:.004});t.add(E),f.push(E)}return{g:t,leitor:a,laser:l,telaM:h,prods:f,esteira:r}}function mf(n){Dn(n,{r:9,pos:[4,8,5],ki:1.4,hemi:1.5}),n.add(new je("#FFF4E6",.45));let t=new J;n.add(t);let e=9,i=8,o=E0(t,0,e,i,3.2,{parede:"#F2E6C8",piso:["ceramica","#D8CDB4","#C4B89E"]});o.frente.visible=!1,t.add(an(e,1.2,Vt("#E2843A"),0,.6,-i/2+.01));let r=rt(3.6,1,.7,"#E2843A",-1.4,.5,-i/2+.7,{out:.01});t.add(r);let a=new st(new Te(3.4,.4,.5),new me({color:"#CFE6F4",transparent:!0,opacity:.45}));a.position.set(-1.4,1.2,-i/2+.7),t.add(a);for(let h=0;h<12;h++){let u=he(.05,["#D9892E","#C9A050","#E8B060"][h%3],-2.9+h*.26,1.07,-i/2+.6+h%2*.15,{seg:8});u.scale.set(1,.8,1.3),t.add(u)}let l=new st(new St(1.6,1),Xt(kt(480,300,h=>{h.fillStyle="#2E2A26",h.fillRect(0,0,480,300),to(h,"CANTINA",240,50,50,"#F2C230"),[["Coxinha","R$ 4,00"],["Pastel","R$ 5,00"],["Suco","R$ 3,00"],["P\xE3o de queijo","R$ 2,50"]].forEach(([d,f],g)=>{to(h,d,40,110+g*46,34,"#F4F1EA",700,"left","Caveat"),to(h,f,440,110+g*46,34,"#F4F1EA",700,"right","Caveat")})})));l.position.set(-1.4,2.3,-i/2+.02),t.add(l);let c=[];for(let h=0;h<2;h++){let u=new J;u.position.set(1.4,0,-1.2+h*2.4),t.add(u),u.add(rt(2.4,.06,.8,"#F4F1EA",0,.74,0,{out:.008}));for(let d of[-1,1])u.add(tt(.06,.72,.7,"#9EA6B0",d*1,.36,0)),u.add(rt(2.4,.05,.3,"#3E7CC8",0,.44,d*.65,{out:.006})),u.add(tt(.05,.42,.25,"#9EA6B0",d*1,.21,.65)),u.add(tt(.05,.42,.25,"#9EA6B0",d*1,.21,-.65));c.push(u)}for(let h=0;h<3;h++){let u=tr(1.4,1,"manha",10+h);u.position.set(e/2-.02,1.8,-2.5+h*2.4),u.rotation.y=-Math.PI/2,t.add(u)}return{g:t,mesas:c,W:e,D:i}}function gf(n,t={}){m0(n,[[0,"#5EA8E8"],[.45,"#A8D6F4"],[.55,"#F4EAD2"],[1,"#D8E6EE"]]);let e=Dn(n,{r:14,pos:[-6,9,7],ki:2.1,hemi:1.4,key:"#FFE8C0"});n.add(new je("#FFF4E0",.3));let i=new J;n.add(i);let s=Se(77);i.add(an(60,60,Xt(Mi(Xd("#78B85A"),20,20)),0,-.01,0,-Math.PI/2)),i.add(an(13,8,Xt(Mi(qd(),5,3)),0,0,0,-Math.PI/2));let o=[];for(let a of[-5.6,5.6])for(let l of[-.9,.9]){let c=he(.18,"#9A968E",a,.1,l,{out:.006,seg:10});c.scale.set(1.2,.7,1),i.add(c),o.push(c)}i.add(ve(new Te(30,1.4,.25),Xt(Mi(Yd("#B5603E"),10,1)),{pos:[0,.7,-6.5],out:.01}));let r=["#E8C88A","#9CC4B0","#E8A08A","#B8C8E8","#F2E0B0","#D8B8D8"];for(let a=0;a<8;a++){let l=3+s()*1.5,c=3+s()*2.5,h=new J;h.position.set(-14+a*4,0,-9-s()*2),i.add(h),h.add(ve(new Te(l,c,3),Xt(Mi(Qi(r[a%6]),2,2)),{pos:[0,c/2,0],out:.01})),h.add(ve(new Te(l+.3,.25,3.3),Vt("#B8643C"),{pos:[0,c+.1,0],out:.008}));for(let u=0;u<2;u++)h.add(an(.7,.7,Vt("#7E98B0"),-l/4+u*l/2,c*.6,1.51))}for(let a=0;a<5;a++){let l=new J;l.position.set(-10+a*5+s()*2,0,-5-s()*1),i.add(l),l.add(at(.1,.14,2.2,"#6A4A30",0,1.1,0,{seg:8,out:.006}));for(let c=0;c<3;c++)l.add(he(.7+s()*.3,["#4C8A3E","#5DA04A","#3E7A34"][c],s()-.5,2.6+s()*.6,s()-.5,{seg:10,out:.01}))}for(let a=0;a<40;a++){let l=new st(new Zn(.04,.12,4),Vt("#5A9A44"));l.position.set((s()-.5)*12,.05,(s()-.5)*7),i.add(l)}return Lr(n,{centro:[0,14,-14],raio:12,n:5}),{g:i,traves:o,luz:e}}function Ef(n,t={}){Dn(n,{r:18,pos:[4,14,6],ki:.6,hemi:.55,sky:"#C8D0E8",ground:"#5A5048"}),n.add(new je("#B8C0D8",.25));let e=new J;n.add(e);let i=Se(5);e.add(an(40,40,Xt(Mi(ji("madeira","#8A6A4A","#7A5A3E"),16,16)),0,0,0,-Math.PI/2)),e.add(an(40,12,or("#3A3A48",8,3),0,6,-16)),e.add(an(40,12,or("#3A3A48",8,3),-16,6,0,0,Math.PI/2)),e.add(an(40,12,or("#3A3A48",8,3),16,6,0,0,-Math.PI/2)),e.add(an(40,12,or("#3A3A48",8,3),0,6,16,0,Math.PI)),e.add(an(40,40,Vt("#2A2A34"),0,11,0,Math.PI/2));let s=new st(new St(12,1.6),Xt(kt(1500,200,d=>{d.fillStyle="#1E3A6A",d.fillRect(0,0,1500,200),to(d,"CAMPEONATO ESTADUAL DE XADREZ",750,80,84,"#F2C230"),to(d,"FINAL",750,165,52,"#F4F1EA")})));s.position.set(0,7,-15.9),e.add(s);let o=rt(4.2,.3,3.2,"#5A2A2A",0,.15,0,{out:.01});e.add(o),e.add(an(4,3,Vt("#8E1E2A"),0,.305,0,-Math.PI/2));let r=new J;r.position.set(0,.3,0),e.add(r),r.add(rt(1,.05,.8,"#F4F1EA",0,.74,0,{out:.008})),r.add(tt(.9,.7,.7,"#E8E2D6",0,.37,0));let a=si(.055);a.g.position.set(0,.765,0),r.add(a.g);let l=lf();l.position.set(.42,.765,-.02),l.rotation.y=Math.PI/2,l.scale.setScalar(1.1),r.add(l);for(let d of[.62,-.62]){let f=Nr("#2A2A30");f.position.set(0,.3,d),f.rotation.y=d>0?Math.PI:0,e.add(f)}let c=new In("#FFF4E0",60,20,.32,.5,1.2);c.position.set(0,9,1.5),c.target.position.set(0,.8,0),c.castShadow=!0,e.add(c,c.target);let h=new st(new Zn(2.4,8.5,32,1,!0),new ae({color:"#FFF4D8",transparent:!0,opacity:.07,depthWrite:!1,side:We}));h.position.set(0,4.9,.7),h.rotation.x=-.17,e.add(h);let u=[];for(let d=0;d<5;d++)for(let f=0;f<10;f++){let g=-11+f*2.45,E=-12+d*3.1;if(Math.abs(g)<3.2&&Math.abs(E)<3)continue;let m=new J;m.position.set(g,0,E),e.add(m),m.add(rt(.9,.05,.7,"#F4F1EA",0,.74,0,{out:.006})),m.add(tt(.8,.7,.6,"#E8E2D6",0,.37,0));let p=si(.045);p.g.position.y=.765,m.add(p.g),u.push(m)}for(let d=0;d<8;d++){let f=new fn("#FFE8C8",9,10,1.6);f.position.set(-10+d*3,6,-8+d%2*8),e.add(f)}for(let d=0;d<20;d++)e.add(at(.03,.03,.9,"#C9A030",-4+d*.42,.45,2.4,{seg:6}));return e.add(at(.015,.015,8,"#C8302A",0,.85,2.4,{rot:[0,0,Math.PI/2],seg:6})),{g:e,T:a,rel:l,mesaF:r,mesas:u,holo:c,cone:h,tab:o}}function eo(n,t={}){n.add(new je("#FFFFFF",.6));let e=new ys("#FFF4E0",1.6);e.position.set(3,8,4),n.add(e);let i=new J;n.add(i);let s=Se(99),o=new gn,r=400,a=new Float32Array(r*3);for(let c=0;c<r;c++)a[c*3]=(s()-.5)*40,a[c*3+1]=(s()-.2)*20,a[c*3+2]=(s()-.5)*40;o.setAttribute("position",new Rn(a,3));let l=new Ga(o,new xr({color:t.cor||"#C8D4FF",size:.06,transparent:!0,opacity:.6}));return i.add(l),{g:i,pontos:l}}var y0=(n,t=.9)=>(e,i,s)=>{e.fillStyle=n,e.fillRect(0,s*t,i,s*(1-t))},vy=(n,t,e,i=.5)=>(s,o,r)=>{s.fillStyle=t,s.font=`900 ${e}px Inter`,s.textAlign="center",s.textBaseline="middle",s.fillText(n,o/2,r*i)},ln={pele:"#E3AE86",cabelo:"cacheado",corCabelo:"#3A2216",nariz:!0,banguela:!0,sardas:!0,camisa:"#F6C83A",calca:"#3E6EC8",meia:"#E3AE86",tenis:"#E3AE86",sola:"#E2443A",chinelo:"#E2443A",escala:.64,estampa:(n,t,e)=>{y0("#E0A824",.88)(n,t,e),n.fillStyle="#E2443A",n.beginPath();for(let i=0;i<5;i++){let s=-Math.PI/2+i*2.513;n.lineTo(t/2+Math.cos(s)*46,e*.5+Math.sin(s)*46);let o=s+1.256;n.lineTo(t/2+Math.cos(o)*19,e*.5+Math.sin(o)*19)}n.fill()}},no={...ln,camisa:"#6E8ED8",calca:"#6E8ED8",manga:"longa",estampa:(n,t,e)=>{n.fillStyle="#F6E27A";for(let i=0;i<22;i++){let s=i*137%t,o=i*71%e;n.beginPath();for(let r=0;r<5;r++){let a=-Math.PI/2+r*2.513;n.lineTo(s+Math.cos(a)*13,o+Math.sin(a)*13),n.lineTo(s+Math.cos(a+1.256)*5,o+Math.sin(a+1.256)*5)}n.fill()}}},My=(n,t,e)=>{y0("#B02A24",.9)(n,t,e),n.fillStyle="#B02A24",n.fillRect(t/2-6,0,12,e*.3),n.fillStyle="#F4F1EA",n.fillRect(t/2+70,e*.3,120,70),n.fillStyle="#2A2A30",n.font="900 30px Inter",n.textAlign="center",n.textBaseline="middle",n.fillText("ROSE",t/2+130,e*.3+35),n.fillStyle="#FFE08A",n.font="900 36px Inter",n.fillText("BOM PRE\xC7O",t/2-110,e*.62)},xn={pele:"#D9A07A",cabelo:"coque",corCabelo:"#2E1E16",cilios:!0,nariz:!0,brincos:"#F2C230",camisa:"#D8362E",calca:"#2A2A30",tenis:"#2A2A30",sola:"#F4F1EA",escala:.93,estampa:My},io={...xn,camisa:"#9C7AC8",estampa:y0("#8A66B8",.9)},_i={pele:"#8A5A3E",cabelo:"curto",corCabelo:"#1A1212",bone:"#E2443A",boneTras:!0,nariz:!0,tronco:"barriga",camisa:"#3EA864",calca:"#3E5A7A",tenis:"#F4F1EA",sola:"#E2443A",escala:.97,estampa:(n,t,e)=>{vy("23","#F4F1EA",120)(n,t,e),y0("#2E8E50",.9)(n,t,e)}},t5={...Ts(2),pele:"#8A5A3E",cabelo:"curto",corCabelo:"#1A1212",bone:"#E2443A",boneTras:!0,tronco:"barriga",escala:.97};var yf={pele:"#E3B28E",cabelo:"curto",corCabelo:"#8A8680",bigode:"#7A7670",oculos:!0,nariz:!0,rugas:!0,tronco:"barriga",camisa:"#E2D2A8",manga:"longa",calca:"#5A4A3A",tenis:"#3A2A20",sola:"#2A1E16",escala:1.04,estampa:(n,t,e)=>{n.fillStyle="#7A2E2E",n.beginPath(),n.moveTo(t/2-16,0),n.lineTo(t/2+16,0),n.lineTo(t/2+22,e*.6),n.lineTo(t/2,e*.7),n.lineTo(t/2-22,e*.6),n.fill()}},so={pele:"#B8805A",cabelo:"curto",corCabelo:"#2A2020",nariz:!0,camisa:"#2E5EB8",manga:"longa",calca:"#2E5EB8",tenis:"#F4F1EA",sola:"#2A2A30",escala:1.04,estampa:(n,t,e)=>{n.fillStyle="#F4F1EA",n.fillRect(t*.18,0,18,e),n.fillRect(t*.82-18,0,18,e),n.strokeStyle="#E8E4DC",n.lineWidth=5,n.beginPath(),n.moveTo(t/2-50,0),n.lineTo(t/2,e*.3),n.lineTo(t/2+50,0),n.stroke(),n.fillStyle="#C9CED6",n.beginPath(),n.ellipse(t/2,e*.32,22,14,0,0,7),n.fill()}},rr={...Ts(0),pele:"#F0C8A6",cabelo:"topete",corCabelo:"#C99A4A",oculos:!0,nariz:!0,escala:1,sobr:"#9A7030"},vf={pele:"#C98C66",cabelo:"curto",corCabelo:"#1A1212",nariz:!0,sobr:"#1A1212",camisa:"#1E2028",manga:"longa",calca:"#1E2028",tenis:"#121216",sola:"#121216",escala:1.02,estampa:(n,t,e)=>{n.fillStyle="#F4F1EA",n.beginPath(),n.moveTo(t/2-60,0),n.lineTo(t/2,e*.42),n.lineTo(t/2+60,0),n.fill(),n.fillStyle="#7A1E2E",n.fillRect(t/2-9,0,18,e*.4),n.strokeStyle="#E2443A",n.lineWidth=14,n.beginPath(),n.arc(t/2,-10,92,.15,Math.PI-.15),n.stroke(),n.fillStyle="#E2443A";for(let i of[-1,1])n.beginPath(),n.ellipse(t/2+i*86,40,24,30,0,0,7),n.fill()}},Mf={pele:"#E3B28E",cabelo:"careca",corCabelo:"#7A7670",barba:"#9A968F",oculos:!0,nariz:!0,tronco:"barriga",camisa:"#F4F1EA",manga:"longa",calca:"#2A2A30",tenis:"#1E1A18",sola:"#1E1A18",escala:1.03,estampa:(n,t,e)=>{n.fillStyle="#2A2E3A",n.fillRect(0,0,t*.34,e),n.fillRect(t*.66,0,t*.34,e),n.fillStyle="#F2C230",n.fillRect(t*.7,e*.3,70,50)}},v0={pele:"#B8805A",cabelo:"curto",corCabelo:"#2A2020",nariz:!0,barba:"#3A2A20",camisa:"#F27A2E",calca:"#1E1E22",tenis:"#F4F1EA",sola:"#2A2A30",escala:1.03,estampa:(n,t,e)=>{n.fillStyle="#1E1E22",n.fillRect(0,e*.4,t,e*.08)}};var Ah=.3+.48;function Ci(n,t={}){let e=Ef(n,t),i=Z(n,Rt,0,.62,Math.PI);le(i,0,.62,Math.PI,Ah);let s=Z(n,vf,0,-.62,0);le(s,0,-.62,0,Ah);let o=Z(n,Mf,1.25,-.1,-Math.PI/2,.3),r=Z(n,t.profX?so:so,-2.6,2.9,Math.PI),a=[],l=[];if(!t.semGente){e.mesas.forEach((h,u)=>{if(u%2)return;let d=Z(n,Ki(u,{escala:.95}),0,0,0),f=u%4?1:-1;le(d,h.position.x,h.position.z+f*.55,f>0?Math.PI:0,.48),d.seed=u%9,a.push(d)});for(let h=0;h<18;h++){let u=Z(n,Ki(h+3),-3.8+h%9*.95,2.75+Math.floor(h/9)*.7,Math.PI);u.seed=h,l.push(u)}}let c=Je();return n.add(c),{...e,gui:i,adv:s,juiz:o,prof:r,jog:a,pub:l,tel:c}}function ts(n,t,e="jogo"){n.jog.forEach((i,s)=>{i.pose(bt(Ht({shR:[60,8],elR:100,headX:18,shL:[30,8],elL:70},Xe(t,s,.6)))),O(i,null,t,s%3?"neutro":"determinado")}),n.pub.forEach((i,s)=>{let o=Le(t,s,.8);if(e==="aplauso"){let r=Math.abs(Math.sin(t*9+s));o=Ht({shL:[70,-10],shR:[70,-10],elL:60+r*30,elR:60+r*30},{bob:r*.01})}e==="tensao"&&s%3===0&&(o=Ht(o,{shR:[120,-10],elR:140,headX:6})),i.pose(o),O(i,null,t,e==="aplauso"?"feliz":e==="tensao"?"preocupado":"neutro",{look:[0,.2]})}),O(n.juiz,null,t,"neutro"),n.juiz._pose||n.juiz.pose(Ht($e.bracoCruzado,Xe(t,3,.5)))}function _f(n,t,e=0){let i=n.gui.root.position;n.tel.position.set(i.x-.18+e,Ah+.1,i.z-.16),n.tel.rotation.set(0,-Math.PI/2-.5,Math.PI/2-.2)}var es={bg:"#121218",far:120},bf=[13.96,14.25,14.5,14.72,14.9,15.05,15.2,15.33,15.45,15.56,15.66,15.76,15.86,15.95],ns=(n,t,e="determinado",i={})=>{n.gui.pose(bt(Ht({shR:[48,6],elR:96,shL:[44,6],elL:98,lean:12,headX:16},i.parado?{}:Xe(t,1,.3)))),O(n.gui,null,t,e,{look:[0,.45],vivo:!i.parado,blink:i.parado?0:void 0})},is=(n,t)=>{n.adv.pose(bt(Ht({shR:[40,6],elR:100,shL:[30,6],elL:90,lean:10,headX:14},Xe(t,4,.4)))),O(n.adv,null,t,"determinado",{look:[0,.4]})},Af=[Y(0,1.05,{...es,fov:30},n=>{let t=Ci(n,{semGente:!0});return t.holo.intensity=30,(e,i,s)=>{ns(t,e),is(t,e),ts(t,e);let o=600-e;return t.rel.userData.set("09:5"+Math.floor(9-e*3),"10:00",0),G(s,[.75,1.32,.35],[.46,1.1,-.02],i/1.05,0,0),{exposure:.7,vig:.6}}}),Y(1.05,3.36,{...es,fov:24,perto:!0,limpa:!1},n=>{let t=Ci(n,{semGente:!0});return t.holo.intensity=22,(e,i,s)=>{ns(t,e),is(t,e),t.adv.root.visible=!1;let o=t.gui;o.headG.updateMatrixWorld(!0);let r=o.headG.localToWorld(new x(0,.26,.3));return G(s,[[0,[r.x+.05,r.y+.02,r.z-.95]],[1,[r.x+.02,r.y,r.z-.6]]],[r.x,r.y-.02,r.z+.2],i/2.3,0,0),{exposure:.78,vig:.6}}}),Y(3.36,5.92,{...es,fov:34},n=>{let t=Ci(n);return(e,i,s)=>{ns(t,e),is(t,e),ts(t,e);let o=ht(-.9,-.5,i/2.56);return G(s,[Math.sin(o)*2.2,1.55,Math.cos(o)*2.2],[0,1.05,0],i/2.56,0,0),{vig:.45}}}),Y(5.92,9.84,{...es,fov:40},n=>{let t=Ci(n);return(e,i,s)=>{ns(t,e),is(t,e),ts(t,e);let o=On(i/3.92);G(s,[ht(1.2,7.5,o),ht(1.5,7.5,o),ht(1.6,11,o)],[0,ht(1,.4,o),ht(0,-2.5,o)],i/3.92,0,0);let r=ge(8.7,9.6,e);return Yt.mundo.value=r,{vig:.4}}}),Y(9.84,11.44,{...es,fov:28,limpa:!1},n=>{let t=Ci(n),e=Kt([t.T.g,t.rel]);return(i,s,o)=>{ns(t,i),is(t,i),ts(t,i);let r=Math.max(0,9*60+41-Math.floor((i-9.84)*6));return t.rel.userData.set("0"+Math.floor(r/60)+":"+String(r%60).padStart(2,"0"),"10:00",0),Yt.mundo.value=1,e(1,i),te(n,"#121218",1),G(o,[[0,[.9,1.3,.55]],[1,[.75,1.22,.4]]],[.42,1.09,-.02],s/1.6,0,0),{focus:1,range:.3,blur:10,vig:.5}}}),Y(11.44,16.56,{...es,fov:32,perto:!0,limpa:!1},n=>{let t=Ci(n),e=Kt([t.tel]),i=new fn("#9FD8FF",0,1,2);return n.add(i),(s,o,r)=>{ns(t,s),is(t,s),ts(t,s);let a=Br(s,bf);_f(t,s,a);let l=bf.some(u=>s>=u&&s<u+.3);t.tel.tela(l?"chamadasBorrado":"apagada",0),i.position.copy(t.tel.position),i.position.y+=.08,i.intensity=l?2.5:0,Yt.mundo.value=1,e(1,s),te(n,"#121218",1);let c=On(ct((o-1.2)/2.6)),h=t.tel.position;return G(r,[ht(-1.1,-.6,c),ht(1.42,1.02,c),ht(.2,.52,c)],[ht(0,h.x,c),ht(1.25,h.y,c),ht(.62,h.z,c)],o/5.12,0,0),{focus:ht(.95,.55,c),range:.25,blur:12,vig:.5}}}),Y(16.56,18.36,{...es,fov:26,perto:!0,limpa:!1},n=>{let t=Ci(n),e=Kt([t.gui.root]);return(i,s,o)=>(ns(t,16.6,"determinado",{parado:!0}),is(t,16.6),ts(t,16.6),t.juiz.root.visible=!1,Yt.mundo.value=1,e(.6,i),te(n,"#121218",1),G(o,[[0,[-.4,1.4,-.42]],[1,[-.34,1.38,-.34]]],[0,1.27,.62],s/1.8,0,0),{vig:.55,exposure:.95})}),Y(18.36,23.52,{bg:"#08080C",fov:30},n=>{let t=eo(n,{cor:"#8890B0"}),e=Je();e.position.set(0,.5,0),e.rotation.set(-Math.PI/2+.25,0,.25),n.add(e);let i=rt(1.2,.04,.8,"#3A2A22",0,.47,0);n.add(i);let s=new fn("#FF6A6A",2,1.5,2);return s.position.set(0,.7,.1),n.add(s),(o,r,a)=>{let l=Br(o,[18.6,19.6,20.6,21.6,22.6],.4);return e.position.x=l,e.tela("chamadasBorrado",0),s.intensity=1.5+Math.sin(o*6)*.5,G(a,[[0,[.03,.8,.3]],[1,[.01,.66,.16]]],[0,.5,0],r/5.16,0,0),{vig:.65,focus:.4,range:.2,blur:8}}}),Y(23.52,27.84,{bg:"#0E0C14",fov:30},n=>{eo(n,{cor:"#C8B8FF"});let t=Z(n,ln,0,0,0),e=vn();n.add(e),e.scale.setScalar(.8);let i=new In("#FFE8C0",8,4,.5,.8,1.5);return i.position.set(.4,1.6,1.2),i.target.position.set(0,.55,0),n.add(i,i.target),(s,o,r)=>{t.pose({shL:[62,-14],elL:70,shR:[62,-14],elR:70,headX:18}),O(t,null,s,"neutro",{look:[0,.5]}),t.root.updateMatrixWorld(!0);let a=t.hands.L.localToWorld(new x(0,-.05,.03)),l=t.hands.R.localToWorld(new x(0,-.05,.03));return e.position.copy(a).add(l).multiplyScalar(.5),e.position.z+=.03,e.rotation.set(-.35,0,0),e.set(ct((s-25.2)/4)*.35),G(r,[[0,[.25,.8,.75]],[1,[.12,.72,.5]]],[e.position.x,e.position.y,e.position.z],o/4.32,0,0),{vig:.6,exposure:.85}}}),Y(27.84,31.44,{bg:"#0C0A06",fov:30},n=>{eo(n,{cor:"#F2C230"});let t=Bd(2.2);t.position.set(0,1,0),n.add(t);let e=ii(n,[0,1,0],{n:60,cor:"#FFD86A",r:1.2,tam:.025}),i=new fn("#FFD86A",4,4,2);return i.position.set(.5,1.5,1.2),n.add(i),(s,o,r)=>{let a=ct((s-28)/2.3),l=a<1?1200*En(a):1200;return t.set(l,s>30.3?ct((s-30.3)*2)*.6:0),t.rotation.y=Math.sin(s*.8)*.25*(1-a*.6),e((s-27.84)/3.6%1),G(r,[[0,[.15,1.08,1.6]],[1,[.05,1.02,1.2]]],[0,1,0],o/3.6,0,0),{bloom:.25,bloomT:.9,vig:.5,exposure:.85}}}),Y(31.44,34.44,{...es,fov:30,perto:!0,limpa:!1},n=>{let t=Ci(n),e=Kt([t.gui.root]);return(i,s,o)=>(ns(t,16.6,"determinado",{parado:!0}),is(t,16.6),ts(t,16.6),t.juiz.root.visible=!1,Yt.mundo.value=.85,e(.5,i),te(n,"#121218",.85),G(o,[[0,[-.95,1.48,-.42]],[1,[-.85,1.45,-.32]]],[-.1,1.25,.62],s/3,0,0),{vig:.45})}),Y(34.44,35.96,{...es,fov:38},n=>{let t=Ci(n),e=Object.values(t.T.P);return(i,s,o)=>{let r=34.44+(35.96-i)*3;ns(t,r*3),is(t,r*3),ts(t,r*4,"aplauso"),e.forEach((l,c)=>{l.position.y=.021+Math.abs(Math.sin(i*14+c))*.03*(1-s/1.52),l.rotation.y=i*20*(c%2?1:-1)});let a=ht(.3,-.6,s/1.52);return G(o,[Math.sin(a)*4,2.4,Math.cos(a)*4],[0,.9,0],s/1.52,Math.sin(i*30)*.01,0),{sat:.55,tint:"#C8D8FF",vig:.5}}})];var M0={x:-.62,z:.25,ry:-Math.PI/2,h:.46};function It(n,t={}){let e=ff(n,t),i=Je();return n.add(i),e.tel=i,e}function cn(n){return le(n,M0.x,M0.z,M0.ry,M0.h),n}function Ne(n,t,e="L"){ce(n,t,e,[0,-.07,.06],!1),t.headG.updateMatrixWorld(!0);let i=t.headG.localToWorld(new x(0,.2,.25));n.up.set(0,1,0),n.lookAt(i)}function oi(n,t=1,e=0){let i=n.caderno.userData.D,s="um"+Math.round(t*20)+"|"+Math.round(e*10);i.paint(s,(o,r,a)=>{_h(o,r,a,()=>{o.save(),o.beginPath(),o.rect(0,0,r*(.15+.3*t),a),o.clip(),e>0&&(o.shadowColor="#FFF2A0",o.shadowBlur=30*e),uf(o,"1",r*.22,a*.2,90,"#2A3A7A"),o.restore(),o.font="600 34px Caveat",o.fillStyle="#2A3A7A",o.fillText("Li\xE7\xE3o de matem\xE1tica",r*.15,a*.07)})})}function Th(n,t=1){let e=n.caderno.userData.D,i=Math.round(t*30),s="q"+i;e.paint(s,(o,r,a)=>{_h(o,r,a,()=>{o.font="600 30px Caveat",o.fillStyle="#2A3A7A";for(let l=0;l<i;l++){let c=l%2,h=Math.floor(l/2);o.fillText(`${l+1}) ${l*7%13+2}x = ${(l*7%13+2)*3}  \u2713`,r*(.15+c*.42),a*(.1+h*.058))}})})}function oo(n=.16){let t=new J;t.add(at(n,n,.04,"#F4F1EA",0,0,0,{rot:[Math.PI/2,0,0],seg:28,out:.005})),t.add(ve(new Qe(n,.015,8,28),"#2A2A30"));for(let s=0;s<12;s++){let o=s/12*6.283;t.add(tt(.01,s%3?.016:.03,.01,"#2A2A30",Math.sin(o)*n*.82,Math.cos(o)*n*.82,.025))}let e=new J,i=new J;return e.add(tt(.014,n*.55,.008,"#1E1E22",0,n*.25,0)),i.add(tt(.009,n*.8,.008,"#1E1E22",0,n*.38,0)),e.position.z=.028,i.position.z=.032,t.add(e,i),t.add(he(.01,"#C0392B",0,0,.036,{seg:8})),t.hora=(s,o)=>{i.rotation.z=-o/60*6.283,e.rotation.z=-(s%12+o/60)/12*6.283},t.hora(7,0),t}function Sh(n,t="#E2443A"){let e=new J,i=new st(new St(.32,.38,4,6),new me({color:t,side:We}));i.position.set(0,-.18,0),e.add(i),e.position.set(0,.3,-.13),n.torsoG.add(e);let s=i.geometry.attributes.position,o=s.array.slice();return e.vento=(r,a=1)=>{for(let l=0;l<s.count;l++){let c=o[l*3+1],h=o[l*3],u=(.19-c)/.38;s.array[l*3+2]=o[l*3+2]-u*u*.35*a+Math.sin(r*12+h*9+c*6)*.025*u*a}s.needsUpdate=!0,e.rotation.x=-.15*a},e}function Tf(){let n=kt(128,128,e=>{for(let i=0;i<10;i++){let s=i/10*6.283;e.fillStyle=`rgba(255,255,255,${.15+i/10*.85})`,e.beginPath(),e.arc(64+Math.cos(s)*44,64+Math.sin(s)*44,10,0,7),e.fill()}}),t=new ti(new qn({map:n,transparent:!0,depthWrite:!1}));return t.scale.setScalar(.22),t.renderOrder=10,t}var en=(n,t=1)=>bt(Ht({shL:[64,4],elL:76,shR:[40,12],elR:70,lean:4,headX:26},Xe(n,t,.4)));var ro={tint:"#FFF8EC",bloom:.2},_y={tint:"#C8D4FF",exposure:.8},_0=n=>(As(n,.95,.43,.38),n.root.position.y=.43+.2,n),Sf=[Y(35.96,39.12,{bg:"#DDE6EE",fov:38,limpa:!1},n=>{let t=It(n,{hora:"tarde"}),e=Z(n,Rt,0,0,0);return _0(e),(i,s,o)=>(e.pose({shR:[100,10],elR:70,shL:[96,-8],elL:80,headX:-10}),O(e,null,i,"tedio",{look:[0,-.6]}),ce(t.tel,e,"R",[0,-.06,.05],[Math.PI/2+.3,0,0]),t.tel.tela("foto",i*.7%1),G(o,[[0,[-.4,2.2,.9]],[1,[-.15,1.9,.6]]],[.95,.55,-.4],s/3.16,0,0),ro)}),Y(39.12,42.88,{bg:"#F4F4F0",fov:36},n=>{let t=pf(n),e=Z(n,xn,-.05,-.42,0),i=Z(n,Ki(4),1.6,1.05,Math.PI+.3),s=at(.06,.06,.12,"#3E7CC8",0,0,0,{out:.004});return n.add(s),(o,r,a)=>{let l=o*1.25%1,c=t.prods[Math.floor(o*1.25)%5];return e.pose({shR:[55+Math.sin(l*6.28)*10,30-l*40],elR:60,shL:[30,10],elL:70,lean:6,headX:10,twist:Math.sin(l*6.28)*10}),O(e,null,o,"neutro",{look:[.3,.4]}),ce(s,e,"R",[0,-.06,.05]),t.laser.material.opacity=l>.45&&l<.6?.9:.3,t.telaM.paint(String(Math.floor(o*1.25)),(h,u,d)=>{h.fillStyle="#1E3A5A",h.fillRect(0,0,u,d),h.fillStyle="#9FE8B0",h.font="700 40px 'IBM Plex Mono'",h.fillText("R$ "+(12.5+Math.floor(o*1.25)*4.9).toFixed(2),20,d/2)}),i.pose(Le(o,3)),O(i,null,o,"neutro",{look:[-.3,.2]}),G(a,[[0,[1.3,1.45,2]],[1,[.9,1.35,1.6]]],[0,1,-.1],r/3.76),{}}}),Y(42.88,46.44,{bg:"#E8D8B8",fov:40},n=>{let t=er(n),e=Z(n,ln,0,0,0),i=Sh(e,"#E2443A");return(s,o,r)=>{let a=(s-42.88)*1.6,l=.2+Math.cos(a)*.95,c=.35+Math.sin(a)*.7;return e.place(l,c,0,Math.atan2(-Math.sin(a),Math.cos(a))),e.pose(Ht(zn(s,3.2,1),{shR:[150,20],elR:10})),i.vento(s,1),O(e,null,s,"feliz",{mouth:{open:.5,smile:.9}}),G(r,[[0,[.2,1.6,1.45]],[1,[.25,1.5,1.35]]],[l*.5+.1,.45,c*.5+.1],o/3.56),ro}}),Y(46.44,49.72,{bg:"#E8D8B8",fov:34},n=>{let t=er(n),e=Z(n,ln,.55,.9,-2.5),i=Sh(e,"#E2443A"),s=Z(n,Rt,-.3,-1,0);le(s,-.4,-1.05,0,.45);let o=Je();n.add(o);let r=Ei("coracao",.22);return n.add(r),(a,l,c)=>{e.pose(Ht(Le(a,2),{shL:[40,10],elL:90,shR:[40,10],elR:90,headX:-8,bob:Math.abs(Math.sin(a*6))*.02})),i.vento(a,.2),O(e,null,a,"apaixonado",{look:[-.5,-.2]}),s.pose(en(a)),O(s,null,a,"tedio",{look:[0,.6]}),ce(o,s,"R",[0,-.07,.04],[-1.35,0,0]),o.tela("chat",.5);let h=ct((a-47.4)/.5);r.visible=a>47.4,e.headG.updateMatrixWorld(!0);let u=e.headG.localToWorld(new x(.15,.55,0));return r.position.copy(u),r.position.y+=h*.15,r.scale.setScalar(.22*(h<1?En(h)*1.2:1+Math.sin(a*9)*.08)),G(c,[[0,[-1.5,1.25,.95]],[1,[-1.4,1.2,.85]]],[.05,.7,-.1],l/3.28),ro}}),Y(49.72,53.24,{bg:"#DDE6EE",fov:46},n=>{let t=It(n,{hora:"tarde"}),e=Z(n,Rt,0,0,0);cn(e);let i=oo();return i.position.set(.3,2,1.47),i.rotation.y=Math.PI,n.add(i),(s,o,r)=>{let a=nh(s,[[49.7,0],[50.3,0],[50.6,1],[51.4,1],[51.7,-1],[52.4,-1],[52.7,.4]]);return e.pose(bt({shR:[50,6],elR:84,shL:[44,6],elL:80,lean:8,headX:6,headY:a*55})),O(e,null,s,"neutro",{look:[a*.6,0]}),Ne(t.tel,e,"L"),t.tel.tela("apagada"),oi(t,0),t.telaTV.paint("tv"+Math.floor(s*3),(l,c,h)=>{l.fillStyle=["#3E7CC8","#F2C230","#E2443A"][Math.floor(s*3)%3],l.fillRect(0,0,c,h),l.fillStyle="#FFF",l.beginPath(),l.arc(c*(.3+s%1*.4),h/2,30,0,7),l.fill()}),G(r,[[0,[-.9,1.55,1.35]],[1,[-.95,1.5,1.2]]],[-.75,1,.15],o/3.52),ro}}),Y(53.24,56.04,{bg:"#DDE6EE",fov:46},n=>{let t=It(n,{hora:"tarde"}),e=Z(n,Rt,0,0,0);return cn(e),(i,s,o)=>{let r=Math.sin((i-53.24)*4.2);return e.pose(bt({shR:[50,6],elR:84,shL:[44,6],elL:80,lean:8,headX:6,headY:r*50})),O(e,null,i,"preocupado",{look:[r*.8,0]}),oi(t,0),G(o,[[0,[-.8,1.3,1.25]],[1,[-.78,1.28,1.1]]],[-.68,1.18,.25],s/2.8),ro}}),Y(56.04,60.16,{bg:"#DDE6EE",fov:46,limpa:!1,perto:!0},n=>{let t=It(n,{hora:"tarde"}),e=Z(n,Rt,0,0,0);cn(e);let i=at(.006,.006,.14,"#2E5EC8",0,0,0,{out:.002});return n.add(i),t.tel.position.set(-1.02,.79,-.12),t.tel.rotation.set(-Math.PI/2,0,-Math.PI/2),(s,o,r)=>{e.pose(bt(Ht({shR:[58,4],elR:92,shL:[44,6],elL:84,lean:14,headX:26},s>59&&s<60?{shR:[58+Math.sin(s*20)*3,4]}:{}))),O(e,null,s,"neutro",{look:[0,.7]}),ce(i,e,"R",[0,-.05,.04],[.6,0,0]),oi(t,ct((s-59.1)/.9));let a=s>60;return t.tel.tela(a?"bloqueio":"apagada",0),G(r,[[0,[-1.15,1.3,1]],[1,[-1.2,1.12,.75]]],[-1.12,.79,.25],o/4.12,0,0),ro}}),Y(60.16,66.84,{bg:"#DDE6EE",fov:46,limpa:!1},n=>{let t=It(n,{hora:"tarde"}),e=Z(n,Rt,0,0,0);return cn(e),oi(t,1),(i,s,o)=>{let r=ct((i-62.2)/.6);if(e.pose(bt(Ht({shR:[ht(40,66,r),6],elR:ht(80,108,r),shL:[44,6],elL:84,lean:10,headX:24},Xe(i,1,.2)))),O(e,null,i,"neutro",{look:[0,.6]}),i<62.2)t.tel.position.set(-1.02,.79,-.12),t.tel.rotation.set(-Math.PI/2,0,-Math.PI/2),t.tel.tela("bloqueio");else{Ne(t.tel,e);let l=i<63.7?["bloqueio",0]:i<65.1?["chat",(i-63.7)/1.4]:i<66?["foto",(i-65.1)/.9]:["tapete",0];t.tel.tela(l[0],l[1])}let a=t.tel.position;if(i<62.6)G(o,[[0,[-.85,1.4,.95]],[1,[-.95,1.25,.7]]],[-1,.8,.1],(i-60.16)/2.44,0,0);else{e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let l=e.headG.localToWorld(new x(0,.3,.05));G(o,[l.x,l.y,l.z],[a.x,a.y,a.z],(i-62.6)/4.2,0,0)}return{...ro,focus:.45,range:.25,blur:6}}}),Y(66.84,71.64,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=It(n,{hora:"noite"}),e=Z(n,Rt,0,0,0);cn(e),oi(t,1);let i=oo();i.position.set(-.5,2,-1.47),n.add(i);let s=new fn("#9FD8FF",.6,1.2,2);return n.add(s),(o,r,a)=>{e.pose(en(o)),O(e,null,o,"tedio",{look:[0,.55],blink:0}),Ne(t.tel,e),t.tel.tela("tapete",(o-66.84)/4.8),s.position.copy(t.tel.position),s.position.x+=.12;let l=ct((o-66.9)/1.4)*40;return i.hora(19,20+l),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8,o<68?G(a,[-.6,1.95,-.6],[-.5,2,-1.47],(o-66.84)/1.16,0,0):G(a,[[0,[-1.2,1.32,-.3]],[1,[-1.15,1.3,-.2]]],[-.62,1.2,.25],(o-68)/3.64,0,0),{tint:"#D8E2FF",exposure:.9}}}),Y(71.64,73.72,{bg:"#C8C0B8",fov:46,limpa:!1,perto:!0},n=>{let t=It(n,{hora:"noite"}),e=Z(n,Rt,0,0,0);return cn(e),oi(t,1),t.luzAbaj.intensity=.8,t.luzes.LG.intensity=1.5,(i,s,o)=>{e.pose(en(i));let r=En(ct((i-71.7)/.5));return G(o,[ht(-.98,-1.05,r),ht(1.3,1.02,r),ht(.45,.32,r)],[-1.08,.79,.3],s/2.08,0,0),{tint:"#E8E2FF",vig:.55,exposure:.85}}}),Y(73.72,82.44,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=It(n,{hora:"noite"}),e=Z(n,Rt,0,0,0);return cn(e),oi(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8,(i,s,o)=>{e.pose(en(i)),O(e,null,i,"tedio",{look:[0,.55]}),Ne(t.tel,e),t.tel.tela("tapete",.5+i*.2%.5);let r=ht(.3,1,s/8.72);return G(o,[-.62+Math.cos(r)*1.6,1.5,.25+Math.sin(r)*1.6],[-.62,1,.25],s/8.72,0,0),{tint:"#D0D8F0",exposure:.7,focus:.5,range:.2,blur:16}}}),Y(82.44,85.48,{bg:"#B8D0DC",fov:46,limpa:!1},n=>{Dn(n,{r:5,pos:[3,6,3],ki:.9,hemi:1.2,key:"#E8E8FF"}),n.add(new je("#C8D0F0",.4));let t=new me({color:"#9AB4C4"}),e=new me({color:"#8A5E3A"}),i=(l,c,h,u,d,f,g,E)=>{let m=new st(new St(l,c),h);m.position.set(u,d,f),m.rotation.set(g,E,0),n.add(m)};i(6,6,e,0,0,0,-Math.PI/2,0);for(let[l,c,h,u]of[[4,.95,.475,0],[4,1.6,2.5,0],[1.6,.8,1.3,-1.15],[1.6,.8,1.3,.95]])i(l,c,t,-1.5,h,u,0,Math.PI/2);i(4,3.3,t,-3.6,1.6,0,0,Math.PI/2),i(4,3.3,t,1.5,1.6,0,0,-Math.PI/2),i(3,3.3,t,0,1.6,-2,0,0),i(3,3.3,t,-2.5,1.6,-2,0,0),i(3,3.3,t,-2.5,1.6,2,0,Math.PI);let s=new J;s.position.set(-1.49,1.3,-.1),s.rotation.y=Math.PI/2,n.add(s);for(let[l,c,h,u]of[[.74,.06,0,.42],[.74,.06,0,-.42],[.06,.9,-.35,0],[.06,.9,.35,0]])s.add(rt(l,c,.05,"#7A5236",h,u,0,{out:.004}));let o=Z(n,Rt,-.95,-.1,-Math.PI/2),r=Z(n,Rt,-2.05,-.1,Math.PI/2),a=Je();return n.add(a),(l,c,h)=>(o.pose(Le(l,1)),O(o,null,l,l>83.6?"surpreso":"neutro",{look:[0,0]}),r.pose({shR:[62,6],elR:100,shL:[50,14],elL:92,headX:22}),O(r,null,l,"tedio",{look:[0,.6]}),ce(a,r,"R",[0,-.07,.04],[-1.35,0,0]),a.tela("tapete",l*.3%1),G(h,[[0,[.4,1.5,1.05]],[1,[.25,1.48,.95]]],[-1.6,1.22,-.1],c/3.04,0,0),_y)}),Y(85.48,87.32,{bg:"#C8C0B8",fov:46},n=>{let t=It(n,{hora:"noite"}),e=Z(n,Rt,0,0,0);cn(e),oi(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8;let i=Z(n,no,0,0,0),s=vn();return n.add(s),s.scale.setScalar(.6),t.portaD.abre(1),(o,r,a)=>{e.pose(en(o)),O(e,null,o,"tedio",{look:[0,.55]}),Ne(t.tel,e),t.tel.tela("tapete",.7);let l=ct((o-85.48)/1),c=ht(1.5,-.25,En(l)),h=ht(.85,.45,l);return i.place(c,h,0,-Math.PI/2-.3),i.pose(l<1?Ht(tn(o,{f:2.2}),{shL:[70,-10],elL:80}):{shR:[70,20],elR:30,shL:[60,-12],elL:80,lean:6}),pe(i,"davi",o,"feliz",l<1?tn(o,{f:2.2}):{shR:[80+Math.sin(o*14)*6,20],elR:30,shL:[60,-12],elL:80}),ce(s,i,"L",[0,-.05,.04],[-.3,0,0]),s.set(0),G(a,[[0,[.1,1.5,-1.15]],[1,[0,1.45,-1.05]]],[-.15,.95,.45],r/1.84),{tint:"#E8E2F8"}}}),Y(87.32,88.52,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=It(n,{hora:"noite"}),e=Z(n,Rt,0,0,0);cn(e);let i=new fn("#9FD8FF",0,1,2);return n.add(i),(s,o,r)=>(e.pose(en(s)),pe(e,"gui",s,"tedio",en(s),.2,{look:[0,.6]}),e.pose(en(s)),Ne(t.tel,e),t.tel.tela("tapete",.75),i.position.copy(t.tel.position),G(r,[[0,[-1.05,1.28,.9]],[1,[-1,1.27,.82]]],[-.66,1.15,.25],o/1.2,0,0),{tint:"#D8E2FF",exposure:.85})}),Y(88.52,90.24,{bg:"#C8C0B8",fov:46},n=>{let t=It(n,{hora:"noite"}),e=Z(n,no,-.25,.45,-Math.PI/2-.3),i=vn();return n.add(i),i.scale.setScalar(.6),(s,o,r)=>{pe(e,"davi",s,"feliz",{shL:[62,-14],elL:70,shR:[62,-14],elR:70,headX:12},.3),e.root.updateMatrixWorld(!0);let a=e.hands.L.localToWorld(new x(0,-.05,.03)),l=e.hands.R.localToWorld(new x(0,-.05,.03));i.position.copy(a).add(l).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.rotateX(-.4),i.set(ct((s-89.1)/1.6)*.3);let c=oh(e.root,.7,.45,.9);return G(r,c,[i.position.x,i.position.y,i.position.z],o/1.72,0,0),{tint:"#E8E2F8"}}}),Y(90.24,92.04,{bg:"#C8C0B8",fov:46},n=>{let t=It(n,{hora:"noite"}),e=Z(n,Rt,0,0,0);cn(e),oi(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8;let i=Z(n,no,-.25,.45,-Math.PI/2-.3),s=vn();return n.add(s),s.scale.setScalar(.6),(o,r,a)=>{let l=Math.max(0,Math.sin((o-90.4)*9))*(o>90.4&&o<91.4?1:0),c=bt({shR:[62,6],elR:100,shL:[70+l*20,40+l*20],elL:20+l*40,lean:8,headX:22});pe(e,"gui",o,"bravo",c,0,{look:[0,.6]}),e.pose(c),Ne(t.tel,e),t.tel.tela("tapete",.8),i.pose({shL:[62,-14],elL:70,shR:[62,-14],elR:70,headX:4,lean:-4}),O(i,null,o,o>91?"triste":"surpreso",{look:[-.6,-.1]}),i.root.updateMatrixWorld(!0);let h=i.hands.L.localToWorld(new x(0,-.05,.03)),u=i.hands.R.localToWorld(new x(0,-.05,.03));return s.position.copy(h).add(u).multiplyScalar(.5),s.quaternion.copy(i.root.quaternion),s.rotateX(-.4),s.set(.3*(1-ct((o-91.2)/.6))),G(a,[[0,[.15,1.45,-1.15]],[1,[.05,1.4,-1.05]]],[-.4,.85,.4],r/1.8),{tint:"#E8E2F8"}}}),Y(92.04,98.04,{bg:"#C8C0B8",fov:46},n=>{let t=It(n,{hora:"noite"}),e=Z(n,Rt,0,0,0);cn(e),oi(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8;let i=Z(n,no,.3,.2,-Math.PI/2-.6),s=vn();return n.add(s),s.scale.setScalar(.6),(o,r,a)=>{e.pose(en(o)),O(e,null,o,"tedio",{look:[0,.55]}),Ne(t.tel,e),t.tel.tela("tapete",.9),i.pose(Ht({shL:[30,-40],elL:120,shR:[30,-40],elR:120,headX:8},Xe(o,3,.5))),O(i,null,o,"triste",{look:[-.7,0]}),i.root.updateMatrixWorld(!0);let l=i.hands.L.localToWorld(new x(0,-.04,.04)),c=i.hands.R.localToWorld(new x(0,-.04,.04));return s.position.copy(l).add(c).multiplyScalar(.5),s.quaternion.copy(i.root.quaternion),s.set(0),G(a,[[0,[.55,1.15,-1.2]],[1,[.45,1.1,-1.05]]],[.1,.75,.25],r/6,0,.6),{tint:"#E0DCF4"}}}),Y(98.04,101.4,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=It(n,{hora:"noite"}),e=Z(n,no,0,0,0),i=vn();return n.add(i),i.scale.setScalar(.6),(s,o,r)=>{let a=ct((s-98.2)/2),l=ht(.3,1.85,a),c=ht(.2,.85,a);e.place(l,c,0,Math.atan2(1.55,.65)),e.pose(a<1?Ht(tn(s,{f:1.4,amp:.5}),{shL:[30,-40],elL:120,shR:[30,-40],elR:120}):Le(s,2)),O(e,null,s,"triste",{look:[0,.4]}),e.root.updateMatrixWorld(!0);let h=e.hands.L.localToWorld(new x(0,-.04,.04)),u=e.hands.R.localToWorld(new x(0,-.04,.04));return i.position.copy(h).add(u).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.set(0),t.portaD.abre(1-ct((s-100.5)/.8)),s<100.2?G(r,[[0,[-.1,.32,1.25]],[1,[.1,.3,1.25]]],[l,.12,c],o/2.2,0,0):G(r,[.4,1,1.25],[1.55,.9,.85],(s-100.2)/1.2,0,0),{tint:"#E0DCF4"}}}),Y(101.4,103.48,{bg:"#2A2A34",fov:30,limpa:!1,perto:!0},n=>{It(n,{hora:"noite"}).portaD.abre(0);let e=Z(n,no,2.3,.6,-2.2),i=vn();n.add(i),i.scale.setScalar(1);let s=Kt([i]);return(o,r,a)=>{e.pose({shL:[30,-40],elL:120,shR:[30,-40],elR:120,headX:14}),O(e,null,101.4,"triste",{look:[0,.5],vivo:!1}),e.root.updateMatrixWorld(!0);let l=e.hands.L.localToWorld(new x(0,-.04,.04)),c=e.hands.R.localToWorld(new x(0,-.04,.04));i.position.copy(l).add(c).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.set(0),Yt.mundo.value=.9,s(1,o),te(n,"#2A2A34",.9);let h=oh(e.root,.75-r*.05,.5);return G(a,h,[i.position.x,i.position.y,i.position.z],r/2.08,0,0),{vig:.5}}}),Y(103.48,105.84,{bg:"#E8E0D0",fov:46},n=>{let t=It(n,{hora:"noite"}),e=Z(n,xn,-3.9,-.95,Math.PI),i=at(.01,.01,.25,"#9A6236",0,0,0);n.add(i);let s=ii(n,[-4.12,1.08,-1.2],{n:20,cor:"#F4F4F4",r:.25,g:.3,sobe:1.2,tam:.05});return(o,r,a)=>{let l=ge(103.6,104.1,o);e.root.rotation.y=ht(Math.PI,Math.PI*.35,l);let c=Ht({shR:[55-l*20,10],elR:70+Math.sin(o*7)*15*(1-l),shL:[20,10],elL:40});return pe(e,"mae",o,"bravo",c,.6),e.pose(c),ce(i,e,"R",[0,-.08,.04]),s(o*.5%1),G(a,[[0,[-2.2,1.45,1.1]],[1,[-2.4,1.4,.95]]],[-3.8,1.15,-.8],r/2.36),{tint:"#FFF0DC"}}}),Y(105.84,106.88,{bg:"#E8E0D0",fov:46},n=>{let t=It(n,{hora:"noite"});t.portaK.abre(1);let e=Z(n,Rt,-1.75,.85,-Math.PI/2);return(i,s,o)=>{let r={shR:[62,6],elR:100,shL:[20,8],elL:30,headX:14+Math.sin(i*9)*8};return pe(e,"gui",i,"tedio",r,0,{look:[0,.5]}),e.pose(r),Ne(t.tel,e),t.tel.tela("tapete",.9),G(o,[[0,[-3.3,1.35,.6]],[1,[-3.15,1.33,.65]]],[-1.75,1.2,.85],s/1.04),{tint:"#FFF0DC"}}}),Y(106.88,108.28,{bg:"#E8E0D0",fov:46},n=>{let t=It(n,{hora:"noite"}),e=Z(n,xn,-3.6,-.6,Math.PI*.35),i=at(.01,.01,.25,"#9A6236",0,0,0);return n.add(i),(s,o,r)=>{pe(e,"mae",s,"desconfiado",$e.bracoCruzado,0),e.pose($e.bracoCruzado),ce(i,e,"R",[0,-.06,.04]);let a=En(ct((s-107.2)/.3));return G(r,[ht(-2.4,-3,a),ht(1.3,1.25,a),ht(.6,-.05,a)],[-3.6,1.18,-.6],o/1.4,0,0),{tint:"#FFF0DC"}}}),Y(108.28,110.56,{bg:"#E8E0D0",fov:46,limpa:!1},n=>{let t=It(n,{hora:"noite"});t.portaK.abre(1);let e=Z(n,Rt,-1.75,.85,-Math.PI/2),i=Tf();return n.add(i),(s,o,r)=>{let a={shR:[62,6],elR:100,shL:[20,8],elL:30,headX:4};pe(e,"gui",s,"preocupado",a,0,{look:[Math.sin(s*7)*.8,-.3]}),e.pose(a),Ne(t.tel,e),t.tel.tela("apagada"),e.headG.updateMatrixWorld(!0);let l=e.headG.localToWorld(new x(0,.75,0));return i.position.copy(l),i.material.rotation=-s*6,G(r,[[0,[-2.75,1.3,.95]],[1,[-2.6,1.28,.92]]],[-1.75,1.25,.85],o/2.28,0,0),{tint:"#FFF0DC"}}}),Y(110.56,114.32,{bg:"#E8E0D0",fov:46},n=>{let t=It(n,{hora:"noite"}),e=Z(n,xn,-3.55,-.55,Math.PI*.7),i=at(.01,.01,.25,"#9A6236",0,0,0);return n.add(i),(s,o,r)=>{let a=s<112.3?$e.apontar:{shR:[40,20],elR:60,shL:[70,10],elL:20+Math.abs(Math.sin(s*6))*20,headX:4};pe(e,"mae",s,"preocupado",a,.3),e.pose(a),ce(i,e,"R",[0,-.06,.04]);let l=.35+Math.abs(Math.sin(s*13))*.25*(Math.sin(s*3)>-.2?1:.1);return t.chama.forEach(c=>{c.scale.set(1,l,1),c.material.opacity=.4+l}),s<112.3?G(r,[[0,[-3,1.3,.35]],[1,[-3.4,1.15,-.5]]],[[0,[-3.6,1.1,-.6]],[1,[-4,.95,-1.2]]],(s-110.56)/1.74,0,0):G(r,[-2.55,1.35,-1],[-3.55,1.1,-.55],(s-112.3)/2,0,0),{tint:"#FFF0DC"}}}),Y(114.32,116.8,{bg:"#E8E0D0",fov:46},n=>{let t=It(n,{hora:"tarde"}),e=Z(n,xn,-2.1,.2,-Math.PI/2+.3),i=Z(n,Rt,0,0,0);return cn(i),t.portaK.abre(1),t.PK.frente.visible=t.PG.frente.visible=!1,(s,o,r)=>{let a=Math.min(2,Math.floor((s-114.32)/.83)),l=s-114.32-a*.83;return e.place([-2.1,-1.9,-2.3][a],[.2,-.3,.7][a],0,-Math.PI/2+.3),e.pose(Ht($e.apontar,{shR:[80+Math.sin(l*12)*10,6]})),O(e,null,s,"bravo",{mouth:{open:Math.abs(Math.sin(l*14))*.6}}),i.pose(en(s)),O(i,null,s,"tedio",{look:[0,.6]}),Ne(t.tel,i),t.tel.tela("tapete",l),G(r,[[0,[-1,1.7,3.2]],[1,[-1,1.65,3]]],[-1.1,1,.2],o/2.48,0,0),{sat:.35,tint:"#F4DDB8",vig:.55}}}),Y(116.8,122.16,{bg:"#0A0C18",fov:46},n=>{let t=It(n,{hora:"noite"});t.luzes.sol.intensity=14,t.luzes.sol.target.position.set(-1.1,.78,.25);let e=Z(n,Rt,0,0,0);return _0(e),e.root.rotation.z=-.5,t.tel.visible=!1,(i,s,o)=>(e.pose({shR:[20,10],elR:40,shL:[20,10],elL:40,headY:-30}),O(e,null,i,"preocupado",{look:[-.8,0]}),oi(t,1,.4+Math.sin(i*2)*.2),i<119.8?G(o,[[0,[-.3,1.5,1]],[1,[-.6,1.25,.7]]],[-1.1,.8,.25],(i-116.8)/3,0,0):G(o,[[0,[.2,1.7,1.2]],[1,[.3,1.6,1]]],[.9,.7,-.3],(i-119.8)/2.36,0,0),{tint:"#B8C8FF",exposure:.75,vig:.5})}),Y(122.16,127.04,{bg:"#0A0C18",fov:46,limpa:!1},n=>{let t=It(n,{hora:"noite"});t.luzes.sol.intensity=10;let e=Z(n,Rt,0,0,0);return _0(e),t.tel.visible=!1,(i,s,o)=>{e.pose({shR:[10,10],elR:30,shL:[10,10],elL:30});let r=i>122.3&&i<126.6?Math.abs(Math.sin(i*11))*.25:0;O(e,null,i,"preocupado",{look:[0,-.2],mouth:{open:r}}),e.headG.updateMatrixWorld(!0);let a=e.headG.localToWorld(new x(0,.26,0));return G(o,[[0,[a.x+.05,a.y+1.25,a.z+.3]],[1,[a.x+.03,a.y+1.05,a.z+.22]]],[a.x,a.y,a.z],s/4.88,0,0),{tint:"#B8C8FF",exposure:.75,vig:.55}}}),Y(127.04,128.96,{bg:"#020206",fov:46},n=>{let t=It(n,{hora:"noite"}),e=Z(n,Rt,0,0,0);return _0(e),t.tel.visible=!1,(i,s,o)=>{let r=i<127.9;return t.luzAbaj.intensity=r?3:0,t.luzes.sol.intensity=r?8:1.5,e.pose({shR:[10,10],elR:30,shL:[10,10],elL:30}),O(e,null,i,"sono",{blink:i>128.2?1:.5}),G(o,[[0,[-.2,1.8,1.3]],[1,[-.1,1.75,1.2]]],[.4,.6,-.2],s/1.92,0,0),{tint:"#B8C8FF",exposure:r?.8:.25,vig:.7}}})];function xs(n,t=.25,e="#BFE8FF"){n._fant||(n._fant=[],n.root.traverse(i=>{if(!i.isMesh||i===n.sombra)return;let s=i.material,o=s.clone();o.transparent=!0,o.depthWrite=!1,o.color&&!i.userData.isOutline&&o.color.lerp(new Pt(e),.35),i.material=o,n._fant.push({m:i,orig:s,nm:o})}));for(let{m:i,nm:s}of n._fant)s.opacity=i.userData.isOutline?t*.6:t,s.uniforms&&s.uniforms.op&&(s.uniforms.op.value=t*.6),i.visible=t>.01;return n.sombra.visible=t>.6,n}var ao={tint:"#FFF8EC",bloom:.22},by=n=>(As(n,.95,.43,.38),n.root.position.y=.63,n),Ay=(n,t=1)=>({shR:[96,-24],elR:142+Math.sin(n*16*t)*8,shL:[10,10],elL:20,headX:-2});function Vr(n){let t=rf(n),e=Z(n,Rt,.3,-.3,Math.PI),i=Zd("#3EA6FF");return n.add(i),i.scale.setScalar(1.6),{B:t,g:e,e:i}}var Wr=(n,t,e=1)=>{n.g.pose(Ay(t,e)),ce(n.e,n.g,"R",[0,-.04,.04],[Math.PI/2,0,0])};function Ty(n){let t=kt(256,256,i=>{if(i.strokeStyle="#8FF0FF",i.fillStyle="rgba(120,230,255,.25)",i.lineWidth=8,i.shadowColor="#8FF0FF",i.shadowBlur=16,i.lineJoin="round",n==="1789")i.font="900 96px Inter",i.textAlign="center",i.textBaseline="middle",i.fillStyle="#B8F8FF",i.fillText("1789",128,128);else if(n==="coroa")i.beginPath(),i.moveTo(40,180),i.lineTo(40,90),i.lineTo(85,130),i.lineTo(128,70),i.lineTo(171,130),i.lineTo(216,90),i.lineTo(216,180),i.closePath(),i.fill(),i.stroke();else if(n==="napoleao")i.beginPath(),i.arc(128,150,55,0,7),i.fill(),i.stroke(),i.beginPath(),i.moveTo(40,110),i.quadraticCurveTo(128,20,216,110),i.quadraticCurveTo(128,80,40,110),i.fill(),i.stroke(),i.beginPath(),i.arc(108,145,6,0,7),i.arc(148,145,6,0,7),i.stroke();else{i.beginPath(),i.rect(50,100,156,110),i.fill(),i.stroke();for(let s of[50,100,150])i.strokeRect(s,70,32,30);i.beginPath(),i.arc(128,210,26,Math.PI,0),i.stroke()}}),e=new ti(new qn({map:t,transparent:!0,depthWrite:!1,blending:Bo}));return e.scale.setScalar(.32),e.renderOrder=12,e}var Sy=n=>{n.strokeStyle="#F4F1EA",n.fillStyle="#F4F1EA",n.font="700 64px Caveat",n.fillText("Revolu\xE7\xE3o Francesa",60,80),n.font="600 46px Caveat",n.fillText("1789 \u2014 Queda da Bastilha",80,160),n.fillText("Liberdade, Igualdade, Fraternidade",80,225),n.fillText("Napole\xE3o Bonaparte",600,290)};function ws(n,t={}){let e=nf(n,{giz:Sy}),i=[];for(let a=0;a<4;a++)for(let l=0;l<5;l++){let c=-2.4+l*1.2,h=-1+a*1.3;if(a===1&&(l===2||l===3)||(a*5+l)%3===2)continue;let u=Z(n,Ts(a*5+l),c,h,Math.PI);le(u,c,h,Math.PI,.46),u.seed=a*5+l,i.push(u)}let s=Z(n,Rt,0,.3,Math.PI);le(s,0,.3,Math.PI,.46);let o=Z(n,_i,1.2,.3,Math.PI);le(o,1.2,.3,Math.PI,.46);let r=Z(n,yf,-.4,-2.9,0);return{A:e,L:i,g:s,ti:o,pr:r}}var lo=(n,t,e=1)=>n.L.forEach((i,s)=>{let o=e>0&&s%2===0;i.pose(bt(o?{lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120}:Ht({shR:[40,8],elR:80,shL:[40,8],elL:80,lean:6},Xe(t,s,.5)))),O(i,null,t,o?"sono":"tedio",{blink:o?1:void 0})});function b0(n){let t=mf(n),e=Z(n,Rt,1,-1.85,0);le(e,1,-1.85,0,.47);let i=Z(n,_i,1.45,-.55,Math.PI);le(i,1.45,-.55,Math.PI,.47);let s=Mh();s.scale.setScalar(1.8),n.add(s);let o=rt(.06,.1,.04,"#F2994A",0,0,0,{out:.003});return n.add(o),{C:t,g:e,ti:i,cx:s,suco:o}}var A0=(n,t=1)=>bt({shL:[70,4],elL:115,shR:[30,8],elR:70,lean:6,headX:6}),Rf=[Y(128.96,131.6,{bg:"#DDE6EE",fov:46,limpa:!1},n=>{let t=It(n,{hora:"manha"}),e=Z(n,Rt,0,0,0);return by(e),t.tel.visible=!1,(i,s,o)=>{let r=ge(129.5,130.8,i);return e.root.rotation.x=ht(-Math.PI/2,-.1,r),e.root.position.set(.95,ht(.63,.45,r),ht(.38,-.3,r)),e.pose(r>.5?bt({shL:[20,30],shR:[20,30],elL:30,elR:30}):{shR:[10,10],elR:30,shL:[10,10],elL:30}),O(e,null,i,(r>.3,"sono"),{blink:r<.2?1:.4}),G(o,[[0,[-.6,1.6,1.2]],[1,[-.5,1.4,1]]],[.9,.7,-.2],s/2.64),ao}}),Y(131.6,134.2,{bg:"#DDE6EE",fov:46},n=>{let t=Vr(n);return(e,i,s)=>(Wr(t,e),O(t.g,null,e,"sono",{blink:.4}),G(s,[[0,[.92,1.4,-.7]],[1,[.9,1.35,-.62]]],[.3,1.12,-.3],i/2.6),ao)}),Y(134.2,136.68,{bg:"#DDE6EE",fov:30,perto:!0,limpa:!1},n=>{let t=Vr(n),e=Kt([t.e]);return(i,s,o)=>{Wr(t,i,.35),O(t.g,null,i,"surpreso",{look:[0,.4]});let r=ge(134.2,134.7,i);Yt.mundo.value=r,e(r,i),te(n,"#DDE6EE",r);let a=t.e.getWorldPosition(new x);return G(o,[[0,[a.x+.55,a.y+.12,a.z+.3]],[1,[a.x+.3,a.y+.05,a.z+.2]]],[a.x,a.y,a.z],s/2.48,0,0),{focus:.35,range:.12,blur:14}}}),Y(136.68,138.44,{bg:"#DDE6EE",fov:28,perto:!0,limpa:!1},n=>{let t=Vr(n),e=Kt([t.e]),i=[0,0,0],s=ii(n,i,{n:30,cor:"#FFFFFF",r:.18,tam:.03});return(o,r,a)=>{Wr(t,o,.2),O(t.g,null,o,"surpreso",{look:[0,.4]}),Yt.mundo.value=1,e(1,o),te(n,"#DDE6EE",1),t.g.headG.updateMatrixWorld(!0);let l=t.g.headG.localToWorld(new x(0,.12,.3));return i[0]=l.x,i[1]=l.y,i[2]=l.z,s((o-136.68)/1.2%1),G(a,[[0,[l.x+.45,l.y+.05,l.z+.05]],[1,[l.x+.35,l.y+.03,l.z+.02]]],[l.x,l.y,l.z],r/1.76,0,0),{focus:.4,range:.15,blur:12}}}),Y(138.44,142.2,{bg:"#DDE6EE",fov:34,limpa:!1},n=>{let t=Vr(n),e=Kt([t.e,t.g.headG]),i=ii(n,[.3,1.18,-.62],{n:70,cor:"#7AF0B0",r:.55,tam:.03});return(s,o,r)=>(Wr(t,s,.3),O(t.g,null,s,s>139.4?"surpreso":"neutro",{look:[0,0]}),Yt.mundo.value=1,e(1,s),te(n,"#DDE6EE",1),i(ct((s-139.3)/1.8)),G(r,[[0,[.92,1.35,-.72]],[1,[.88,1.3,-.66]]],[.3,1.15,-.35],o/3.76,0,0),{focus:.7,range:.3,blur:10})}),Y(142.2,147.04,{bg:"#DDE6EE",fov:40},n=>{let t=Vr(n),e=Kt([t.e]);return(i,s,o)=>{let r=i>145.3;r?(t.g.pose({shR:[70,-10],elR:90,shL:[10,10],elL:20,headX:14}),ce(t.e,t.g,"R",[0,-.04,.04],[Math.PI/2,0,0])):Wr(t,i),O(t.g,null,i,r?"medo":"neutro",{look:r?[.3,.6]:[0,0]});let a=1-ge(145.1,145.5,i);return Yt.mundo.value=a,e(a,i),te(n,"#DDE6EE",a),G(o,[[0,[.92,1.45,-.68]],[1,[.88,1.4,-.6]]],[.3,1.12,-.3],s/4.84),ao}}),Y(147.04,152.4,{bg:"#F4E8D0",fov:36,limpa:!1},n=>{let t=It(n,{hora:"manha"});t.tel.visible=!1;let e=Z(n,Rt,0,0,0);le(e,-2.42,.45,-Math.PI/2,.46);let i=kr();i.scale.setScalar(1.6),i.position.set(-2.78,.79,.45),i.rotation.y=Math.PI/2,n.add(i);let s=hf();s.scale.setScalar(1.6),n.add(s);let o=Kt([i,s]);return(r,a,l)=>{let c=ct((r-148)/3.6);e.pose(bt({shR:[55,8],elR:70,shL:[45,-10],elL:80,lean:16,headX:26})),O(e,null,r,"determinado",{look:[0,.7]}),i.userData.passa(c),s.position.set(-2.78,.87,.45+ht(.1,-.1,c)),s.rotation.set(0,Math.PI/2,-.15);let h=ge(147.2,147.8,r);return Yt.mundo.value=h,o(h,r),te(n,"#F4E8D0",h),G(l,[[0,[-3.4,1.15,.95]],[1,[-3.25,1,.8]]],[-2.78,.84,.45],a/5.36,0,0),{...ao,focus:.65,range:.25,blur:10}}}),Y(152.4,154.2,{bg:"#F4E8D0",fov:26,perto:!0,limpa:!1},n=>{let t=It(n,{hora:"manha"});t.tel.visible=!1;let e=kr();e.scale.setScalar(1.6),e.position.set(-2.78,.79,.45),e.rotation.y=Math.PI/2,n.add(e),e.userData.passa(1);let i=Kt([e]),s=Ei("\u2726",.12);return n.add(s),s.material.color.set("#FFFFFF"),(o,r,a)=>{Yt.mundo.value=1,i(1,o),te(n,"#F4E8D0",1);let l=ct((o-153.1)/.5);return s.visible=l>0&&l<1,s.position.set(-2.76,.9,.4),s.scale.setScalar(.12*Math.sin(l*Math.PI)+.001),s.material.rotation=l*2,G(a,[[0,[-2.55,1.05,.78]],[1,[-2.6,.98,.68]]],[-2.78,.86,.45],r/1.8,0,0),{bloom:.5,bloomT:.8,focus:.35,range:.12,blur:10}}}),Y(154.2,156.76,{bg:"#F4E8D0",fov:40},n=>{let t=It(n,{hora:"manha"});t.tel.visible=!1;let e=Z(n,xn,-3.55,0,Math.PI/2+.3),i=Z(n,ln,-3,-.17,0);le(i,-3,-.2,0,.5);let s=Z(n,Rt,0,0,0);le(s,-2.42,.45,-Math.PI/2,.46);let o=ph();o.scale.setScalar(1.4),n.add(o);let r=at(.008,.008,.2,"#C9CED6",0,0,0);n.add(r);let a=vn();a.scale.setScalar(.7),a.position.set(-3,.79,.15),a.rotation.x=-Math.PI/2,n.add(a);let l=kr();l.scale.setScalar(1.6),l.position.set(-2.78,.79,.45),l.rotation.y=Math.PI/2,n.add(l),l.userData.passa(1);let c=he(.012,"#6A3A1A",0,0,0);return n.add(c),(h,u,d)=>{e.pose({shL:[50,-10],elL:80,shR:[70,10],elR:70,headX:10}),O(e,null,h,"surpreso",{look:[.6,.4]}),ce(o,e,"L",[0,-.06,.06]),ce(r,e,"R",[0,-.06,.05],[.4,0,0]);let f=r.position,g=(h-154.2)*1.4%1;return c.position.set(f.x,f.y-.1-g*.25,f.z),i.pose(bt(Xe(h,2,.4))),O(i,null,h,"feliz",{look:[.5,.3]}),s.pose(bt({shR:[55,8],elR:70,lean:10,headX:20})),O(s,null,h,"determinado",{look:[0,.7]}),a.set(0),G(d,[[0,[-2,1.4,1.35]],[1,[-2.15,1.35,1.2]]],[-3.2,1,0],u/2.56),ao}}),Y(156.76,158.44,{bg:"#F4E8D0",fov:40},n=>{let t=It(n,{hora:"manha"});t.tel.visible=!1;let e=Z(n,xn,-3.55,0,Math.PI/2+.3),i=ph();return i.scale.setScalar(1.4),n.add(i),(s,o,r)=>(pe(e,"mae",s,"desconfiado",{shL:[50,-10],elL:80},.5,{brow:1,look:[.6,.3]}),ce(i,e,"L",[0,-.06,.06]),G(r,[[0,[-2.4,1.4,.9]],[1,[-2.6,1.35,.75]]],[-3.55,1.15,0],o/1.68),ao)}),Y(158.44,160.56,{bg:"#F4E8D0",fov:40},n=>{let t=It(n,{hora:"manha"});t.tel.visible=!1;let e=Z(n,Rt,0,0,0);le(e,-2.42,.45,-Math.PI/2,.46);let i=kr();return i.scale.setScalar(1.6),n.add(i),i.userData.passa(1),(s,o,r)=>{let a=s>159.8,l=bt(a?{shR:[90,-10],elR:130,lean:4}:Ht($e.ombros,{shR:[30,24],elR:70}));return pe(e,"gui",s,"neutro",l,.2),e.pose(l),a?ce(i,e,"R",[0,-.05,.06]):(i.position.set(-2.78,.79,.45),i.rotation.set(0,Math.PI/2,0)),G(r,[[0,[-3.2,1.35,1.25]],[1,[-3.1,1.3,1.1]]],[-2.42,1.05,.45],o/2.12),ao}}),Y(160.56,164.92,{bg:"#F2E6C8",fov:44},n=>{let t=ws(n),e=he(.015,"#BFE8FF",0,0,0);return n.add(e),(i,s,o)=>{lo(t,i,1),pe(t.pr,"n",i,"feliz",Ht({shR:[80+Math.sin(i*2)*30,30],elR:40},Xe(i,3)),0,{mouth:{open:Math.abs(Math.sin(i*9))*.5}}),t.ti.pose(bt({lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120})),O(t.ti,null,i,"sono",{blink:1,mouth:{open:.3}}),t.ti.headG.updateMatrixWorld(!0);let r=t.ti.headG.localToWorld(new x(.05,.05,.28));return e.position.copy(r),e.position.y-=i*.5%1*.1,t.g.pose(bt({shR:[40,8],elR:80,shL:[40,8],elL:80,lean:6,headX:4})),O(t.g,null,i,"tedio"),G(o,[[0,[2.6,2.1,-2.8]],[1,[2.3,1.9,-2.5]]],[0,.9,.3],s/4.36),{}}}),Y(164.92,169.21,{bg:"#F2E6C8",fov:40},n=>{let t=ws(n);return(e,i,s)=>(lo(t,e,1),t.pr.pose(Ht({shR:[80,30],elR:40},Xe(e,3))),O(t.pr,null,e,"neutro"),t.ti.pose(bt(Xe(e,3))),O(t.ti,null,e,"tedio"),t.g.pose(bt({lean:44,headX:34,shL:[70,20],elL:125,shR:[70,20],elR:125})),O(t.g,null,e,"sono",{blink:1,mouth:{open:.25}}),G(s,[[0,[-1.1,1.4,-.9]],[1,[-.95,1.35,-.75]]],[0,.8,.3],i/4.29),{sat:.3,tint:"#F4DDB8",vig:.55})}),Y(169.21,170.72,{bg:"#F2E6C8",fov:40},n=>{let t=ws(n),e=Kt([t.pr.root]);return(i,s,o)=>{lo(t,i,1),pe(t.pr,"n",i,"feliz",Ht({shR:[80+Math.sin(i*2)*30,30],elR:40},Xe(i,3)),0,{mouth:{open:Math.abs(Math.sin(i*9))*.5}}),t.ti.pose(bt({lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120})),O(t.ti,null,i,"sono",{blink:1}),t.g.pose(bt({shR:[30,8],elR:70,shL:[30,8],elL:70,lean:-2,headX:-4})),O(t.g,null,i,"determinado",{look:[0,-.1]});let r=ge(169.3,169.8,i);return Yt.mundo.value=r,e(r,i),te(n,"#F2E6C8",r),G(o,[[0,[.9,1.3,1.6]],[1,[.7,1.25,1.4]]],[-.2,1.15,-1],s/1.51),{focus:4,range:1.5,blur:8}}}),Y(170.72,180.24,{bg:"#F2E6C8",fov:40},n=>{let t=ws(n),e=["1789","coroa","napoleao","bastilha"].map(o=>{let r=Ty(o);return n.add(r),r}),i=Kt([t.g.root]),s=[171.15,172.6,173.1,174.5];return(o,r,a)=>{lo(t,o,1),t.pr.pose(Ht({shR:[80+Math.sin(o*2)*30,30],elR:40},Xe(o,3))),O(t.pr,null,o,"feliz",{mouth:{open:Math.abs(Math.sin(o*9))*.5}}),t.ti.pose(bt({lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120})),O(t.ti,null,o,"sono",{blink:1}),t.g.pose(bt({shR:[30,8],elR:70,shL:[30,8],elL:70,lean:-2,headX:-4})),O(t.g,null,o,o>177.5?"surpreso":"determinado",{look:[Math.sin(o*2)*.5,-.2]}),Yt.mundo.value=.85,i(.6,o),te(n,"#F2E6C8",.85),t.g.headG.updateMatrixWorld(!0);let l=t.g.headG.localToWorld(new x(0,.3,0));return e.forEach((c,h)=>{let u=ct((o-s[h])/.4),d=ct((o-177.3-h*.45)/.5),f=o*1.2+h*Math.PI/2,g=.55*(1-d);c.position.set(l.x+Math.cos(f)*g,l.y+.1+Math.sin(o*2+h)*.06-d*.05,l.z+Math.sin(f)*g*.7-d*.1),c.scale.setScalar(.32*En(u)*(1-d*.8)+.001),c.visible=u>0&&d<1}),G(a,[[0,[1.2,1.45,-.9]],[1,[.9,1.35,-.7]]],[0,1.2,.3],r/9.52),{bloom:.45,bloomT:.7,focus:1.5,range:.6,blur:8}}}),Y(180.24,182.96,{bg:"#F2E6C8",fov:44},n=>{let t=ws(n),e=[];for(let i=0;i<14;i++){let s=new st(new St(.21,.29),new me({color:"#FBF8EE",side:We}));n.add(s),e.push(s)}return(i,s,o)=>{let r=i>180.5,a=ct((i-180.6)/.5);t.pr.place(-1.4,-2.3,0,.3),pe(t.pr,"prof",i,"bravo",r?{shR:[60-Math.max(0,Math.sin((i-180.5)*12))*30,10],elR:20,lean:10}:{shR:[120,10],elR:30},.2),t.L.forEach((c,h)=>{c.pose(bt(Ht({shL:[60,30],shR:[60,30],elL:30,elR:30},{bob:Math.sin(a*Math.PI)*.12}))),O(c,null,i,a>0?"surpreso":"sono")}),t.ti.pose(bt({bob:Math.sin(a*Math.PI)*.12,shL:[60,30],shR:[60,30]})),O(t.ti,null,i,"medo"),t.g.pose(bt({shR:[30,8],elR:70})),O(t.g,null,i,"neutro"),e.forEach((c,h)=>{let u=ct((i-180.6)/2);c.visible=u>0,c.position.set(-2.4+h%5*1.2+Math.sin(h)*.3,.8+Math.sin(u*Math.PI)*(1+h%3*.3),-1.4+Math.floor(h/5)*1.3+u*.4),c.rotation.set(u*6+h,u*4,h)}),G(o,[[0,[2.7,1.9,-3]],[1,[2.5,1.8,-2.8]]],[-.3,1,-.2],s/2.72,0,1);let l=r&&i<180.9?Math.sin(i*80)*.02:0;return o.position.y+=l,{}}}),Y(182.96,184.96,{bg:"#F2E6C8",fov:40},n=>{let t=ws(n),e=Z(n,_i,1.2,.3,Math.PI);return xs(e,.35),(i,s,o)=>{lo(t,i,0),t.ti.pose(bt({shL:[110,10],elL:140,shR:[110,10],elR:140,headX:6})),pe(t.ti,"tiago",i,"medo",t.ti._p,0),t.ti.pose(bt({shL:[110,10],elL:140,shR:[110,10],elR:140,headX:6}));let r=ct((i-183.6)/1.2);return xs(e,.45*(1-r*.5)),e.place(1.2,.3,.3+r*.6,Math.PI),e.pose({shL:[160,30],shR:[160,30],elL:10,elR:10,bob:0}),O(e,null,i,"medo"),e.root.visible=i>183.5,t.g.pose(bt({shR:[30,8],elR:70})),O(t.g,null,i,"neutro"),G(o,[[0,[2.3,1.5,-1.2]],[1,[2.15,1.5,-1.05]]],[1.2,1.2,.3],s/2),{}}}),Y(184.96,188.4,{bg:"#F2E6C8",fov:36,perto:!0},n=>{let t=ws(n),e=sr("3","#D8342C"),i=sr("10","#2E5EC8");return e.position.set(.98,.78,-.2),i.position.set(.22,.78,-.2),n.add(e,i),(s,o,r)=>(lo(t,s,0),t.ti.pose(bt({lean:20,headX:20})),O(t.ti,null,s,"choro"),t.g.pose(bt({shR:[30,8],elR:70})),O(t.g,null,s,"feliz"),e.visible=s>185,i.visible=s>186.8,G(r,[[0,[.75,1.6,.25]],[1,[.6,1.4,.1]]],[.6,.78,-.22],o/3.44,0,0),{})}),Y(188.4,192.8,{bg:"#F2E6C8",fov:40},n=>{let t=ws(n),e=at(.008,.008,.16,"#2E5EC8",0,0,0,{out:.002});n.add(e);let i=[0,0,0],s=ii(n,i,{n:20,cor:"#FFD86A",r:.12,tam:.015});return(o,r,a)=>{lo(t,o,0),t.ti.pose(bt({shR:[50,8],elR:80,lean:14,headX:20})),O(t.ti,null,o,"preocupado");let l=o<190.2;t.g.pose(bt(l?{shR:[55+Math.sin(o*40)*4,6],elR:85,lean:16,headX:24}:{shR:[70,6],elR:100+Math.sin(o*3)*10,shL:[130,20],elL:140,headX:-8})),O(t.g,null,o,l?"determinado":"sono",{mouth:l?void 0:{open:o>190.6&&o<191.6?.8:0,round:1}}),ce(e,t.g,"R",[0,-.05,.04]),l||(e.rotation.z=o*12);let c=e.position;return i[0]=c.x,i[1]=c.y-.06,i[2]=c.z,s(l?o*3%1:0),G(a,[[0,[.9,1.45,-1.2]],[1,[.75,1.4,-1]]],[0,1,.3],r/4.4),{}}}),Y(192.8,199.4,{bg:"#FFFFFF",fov:38},n=>{let t=b0(n),e=Kt([t.cx]);return(i,s,o)=>{let r=ge(194,194.4,i);t.C.g.visible=r<.5,t.ti.root.visible=r<.5,n.background=new Pt(r>.5?"#FFFFFF":"#F2E6C8");let a=ct((i-194.3)/.3);return t.g.pose(A0(i)),O(t.g,null,i,r>.5?"feliz":"neutro",{blink:r>.5?1:void 0,mouth:a>0&&a<1?{open:.7}:void 0}),ce(t.cx,t.g,"L",[0,-.04,.08]),t.cx.userData.morde(a),t.ti.pose(bt(Xe(i,3))),O(t.ti,null,i,"neutro"),Yt.mundo.value=(r<.5,0),e(r,i),G(o,[[0,[3,1.5,-1]],[1,[2.2,1.3,-1.5]]],[1,1.05,-1.8],s/6.6),{exposure:1+r*.1,bloom:.3}}}),Y(199.4,204.48,{bg:"#FFFFFF",fov:28,perto:!0,limpa:!1},n=>{let t=Mh(1);t.scale.setScalar(4),t.position.set(0,.8,0),n.add(t),n.add(new Yi("#FFFFFF","#F4E0C0",1.6));let e=new ys("#FFF4E0",1.8);e.position.set(2,4,3),n.add(e);let i=ii(n,[.05,1.1,.08],{n:26,cor:"#FFFFFF",r:.25,g:.4,sobe:1.6,tam:.06}),s=ii(n,[.08,1,.12],{n:30,cor:"#E8B060",r:.3,tam:.015});return(o,r,a)=>(t.rotation.y=.4+o*.1,i((o-199.4)/2.5%1),s(ct((o-199.6)/1.5)),t.userData.morde(o>203.4?1:.4),G(a,[[0,[.55,1.05,.6]],[.5,[.4,.98,.45]],[1,[.3,.95,.38]]],[.05,.95,.05],r/5.08,0,0),{bloom:.35})}),Y(204.48,210.98,{bg:"#F2E6C8",fov:40},n=>{let t=b0(n);t.cx.userData.morde(1);let e=he(.02,"#9FD8FF",0,0,0);return n.add(e),(i,s,o)=>{t.g.pose(A0(i)),O(t.g,null,i,"feliz",{lagrima:!0}),ce(t.cx,t.g,"L",[0,-.04,.08]),t.g.headG.updateMatrixWorld(!0);let r=t.g.headG.localToWorld(new x(.12,.2,.28));return e.position.copy(r),e.position.y-=i*.4%1*.12,t.ti.pose(bt({shR:[80,6],elR:100,shL:[30,8],elL:60,lean:-6})),O(t.ti,null,i,"surpreso",{look:[0,.2]}),ce(t.suco,t.ti,"R",[0,-.05,.05]),i<207.6?G(o,[[0,[2.6,1.35,-.6]],[1,[2.4,1.3,-.7]]],[1.45,1.05,-.55],(i-204.48)/3.12):G(o,[[0,[2.4,1.35,-2]],[1,[2.2,1.3,-1.9]]],[1,1.05,-1.85],(i-207.6)/3.38),{}}}),Y(210.98,212.48,{bg:"#F2E6C8",fov:40},n=>{let t=b0(n);t.cx.userData.morde(1);let e=at(.004,.004,.14,"#F2546E",0,0,0);return n.add(e),(i,s,o)=>{t.g.pose(A0(i)),O(t.g,null,i,"feliz",{blink:1}),ce(t.cx,t.g,"L",[0,-.04,.08]);let r=Math.max(0,Math.sin(i*10)),a=bt({shR:[90-r*10,30],elR:30,shL:[30,8],elL:60,lean:10});return pe(t.ti,"tiago",i,"preocupado",a,0),t.ti.pose(a),ce(e,t.ti,"R",[0,-.06,.05],[Math.PI/2,0,0]),G(o,[[0,[2.7,1.4,-1.3]],[1,[2.55,1.35,-1.25]]],[1.2,1.05,-1.2],s/1.5),{}}}),Y(212.48,215.48,{bg:"#F2E6C8",fov:34},n=>{let t=b0(n);return t.cx.userData.morde(1),(e,i,s)=>{let o=A0(e);pe(t.g,"gui",e,"determinado",o,0,{look:[.3,0]}),t.g.pose(o),ce(t.cx,t.g,"L",[0,-.04,.08]),t.g.headG.rotation.z+=Math.sin(e*14)*.03,t.ti.pose(bt(Xe(e,3))),O(t.ti,null,e,"surpreso");let r=.5-i/3*.4;return G(s,[1+Math.sin(r)*1.2,1.3,-1.85+Math.cos(r)*1.2],[1,1.15,-1.85],i/3,.04),{vig:.5,sat:1.15}}}),Y(215.48,224.89,{bg:"#C8C0B8",fov:46},n=>{let t=It(n,{hora:"noite"});t.luzes.LG.intensity=1.8,t.luzAbaj.intensity=1.2;let e=Z(n,Rt,0,0,0);cn(e);let i=at(.006,.006,.14,"#2E5EC8",0,0,0,{out:.002});n.add(i),t.tel.position.set(-1,.79,-.18),t.tel.rotation.set(-Math.PI/2,0,-Math.PI/2);let s=Kt([e.root,t.caderno]),o=[217,218.3,219.1,220.4,221.2,222.5,223.3,224.1];return(r,a,l)=>(e.pose(bt({shR:[58+Math.sin(r*9)*3,4],elR:92+Math.sin(r*13)*4,shL:[44,6],elL:84,lean:14,headX:26})),O(e,null,r,"determinado",{look:[0,.7]}),ce(i,e,"R",[0,-.05,.04],[.6,0,0]),Th(t,ct((r-216.3)/8)),t.tel.position.x=-1+Br(r,o,.4),t.tel.tela(o.some(c=>r>c&&r<c+.4)?"bloqueio":"apagada"),Yt.mundo.value=.9,s(.4,r),te(n,"#C8C0B8",.9),G(l,[[0,[-.9,1.55,1.35]],[1,[-.95,1.5,1.2]]],[-.75,1,.15],a/9.41),{tint:"#E8E2FF"})}),Y(224.89,227.78,{bg:"#C8C0B8",fov:40},n=>{let t=It(n,{hora:"noite"});t.luzes.LG.intensity=1.8;let e=oo();e.position.set(-.5,2,-1.47),n.add(e);let i=Z(n,Rt,0,0,0);return cn(i),(s,o,r)=>{let a=On(ct((s-225)/2.4))*120;return e.hora(19,a),i.pose(bt({shR:[40,8],elR:80,lean:0,headX:-20,headY:30})),O(i,null,s,"surpreso",{look:[.5,-.6]}),G(r,[[0,[-.4,1.85,-.7]],[1,[-.45,1.9,-.85]]],[-.5,2,-1.47],o/2.89,0,0),{tint:"#E8E2FF"}}}),Y(227.78,233.48,{bg:"#C8C0B8",fov:44},n=>{let t=It(n,{hora:"noite"});t.luzes.LG.intensity=1.8,t.luzAbaj.intensity=1.2;let e=Z(n,Rt,0,0,0);return cn(e),Th(t,1),(i,s,o)=>{if(e.pose(en(i)),O(e,null,i,i>230.9?"desconfiado":"surpreso",{look:[0,.55]}),Ne(t.tel,e),t.tel.tela("mensagens",ct((i-228.4)/1.8)),i<230.9){e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let r=e.headG.localToWorld(new x(0,.3,.05)),a=t.tel.position;G(o,[r.x,r.y,r.z],[a.x,a.y,a.z],(i-227.78)/3.1,0,0)}else e.headG.visible=!0,G(o,[[0,[-.95,1.35,1.05]],[1,[-.9,1.32,.95]]],[-.66,1.15,.25],(i-230.9)/2.58);return{tint:"#E8E2FF"}}}),Y(233.48,234.68,{bg:"#1A1A22",fov:30,perto:!0,limpa:!1},n=>{let t=It(n,{hora:"noite"}),e=Z(n,Rt,0,0,0);cn(e);let i=Kt([t.tel]);return(s,o,r)=>{e.pose(en(233.5)),O(e,null,233.5,"desconfiado",{vivo:!1}),Ne(t.tel,e),t.tel.tela("mensagens",1),Yt.mundo.value=.9,i(1,s),te(n,"#1A1A22",.9);let a=t.tel.position;e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let l=e.headG.localToWorld(new x(0,.25,.1));return G(r,[l.x,l.y,l.z],[a.x,a.y,a.z],o/1.2,0,0),{vig:.55}}})];var ar={tint:"#FFF0DC",bloom:.22},Ry=["#F2546E","#F2C230","#3EA6FF","#5AE07A","#B88AF2"],lr={x:.75,z:.25,ry:-Math.PI/2};function Fi(n,t,e,i=1,s=0){let o=Math.sin(e*9*i);n.pose(bt({shR:[36+o*6,20],elR:60+o*8,shL:[60,-30],elL:40,lean:10,headX:16,headZ:-6})),n.root.updateMatrixWorld(!0);let r=n.root.localToWorld(new x(-.1,.24,.2));t.position.copy(r),t.quaternion.copy(n.root.quaternion),t.rotateZ(.4)}function Cs(n,t={}){let e=It(n,t);e.violao.visible=!1;let i=Z(n,Rt,0,0,0);le(i,lr.x,lr.z,lr.ry,.42);let s=ir({});return n.add(s),e.tel.position.set(.35,.8,-.9),{K:e,g:i,v:s}}function T0(n,t){let e=[];for(let i=0;i<10;i++){let s=Ei("notas",.1);s.material.color.set(Ry[i%5]),n.add(s),e.push(s)}return(i,s=1)=>{let o=t.getWorldPosition(new x);e.forEach((r,a)=>{let l=(i*.5+a/10)%1;r.position.set(o.x+Math.sin(a*2.3+i)*.25*l,o.y+.1+l*.8,o.z+Math.cos(a*1.7)*.25*l),r.material.opacity=s*Math.sin(l*Math.PI),r.visible=s>.01})}}var xf=[Y(234.68,238.86,{bg:"#DDE6EE",fov:44},n=>{let t=It(n,{hora:"tarde"});t.tel.visible=!1;let e=Z(n,Rt,-.4,.3,-Math.PI/2-.4);return(i,s,o)=>{t.portaK.abre(1-ge(234.9,235.8,i));let r=ct((i-236.3)/1.5);return e.place(ht(-.2,-.95,r),ht(.4,1.1,r),0,-2.3),e.pose(r>0&&r<1?tn(i,{f:1.8}):Ht(Le(i,1),r>=1?{lean:30,shR:[70,10],elR:20}:{})),O(e,null,i,"surpreso",{look:[-.3,.6]}),G(o,[[0,[.4,1.35,-.3]],[1,[.25,1.25,-.1]]],[-1.3,.55,1.2],s/4.18),ar}}),Y(238.86,240.88,{bg:"#DDE6EE",fov:40},n=>{let t=It(n,{hora:"tarde"});t.tel.visible=!1,t.violao.visible=!1;let e=Z(n,Rt,-.85,.95,-2.4),i=ir({teia:!0,semCorda:2});n.add(i);let s=[0,0,0],o=ii(n,s,{n:40,cor:"#D8CDB8",r:.5,tam:.07,sobe:.5});return(r,a,l)=>{e.pose({shR:[70,10],elR:40,shL:[80,-20],elL:60,headX:10}),O(e,null,r,"neutro",{mouth:r>239.4&&r<240.2?{open:.4,round:1}:void 0,look:[0,.3]}),ce(i,e,"L",[0,-.05,.05],!1),i.rotation.set(0,-2.4-Math.PI/2,1.2);let c=i.getWorldPosition(new x);return s[0]=c.x,s[1]=c.y+.1,s[2]=c.z,o(ct((r-239.4)/1.4)),G(l,[[0,[0,1.4,-.1]],[1,[-.15,1.35,.1]]],[-.95,1.1,1],a/2.02),ar}}),Y(240.88,243.18,{bg:"#DDE6EE",fov:40},n=>{let t=Cs(n,{hora:"tarde"}),e=at(.04,.035,.1,"#CFE6F4",0,0,0,{out:.003});e.position.set(.35,.82,-1.15),n.add(e),t.K.tel.position.set(.35,.95,-1.12),t.K.tel.rotation.set(-.2,0,0),t.K.tel.tela("views",.02);let i=tt(.002,.002,.9,"#E8E0C8",0,0,0);return n.add(i),(s,o,r)=>{t.g.pose(bt({shR:[70,10],elR:70+Math.sin(s*6)*15,shL:[60,-30],elL:40,lean:16,headX:26})),O(t.g,null,s,"determinado",{look:[.2,.6]}),Fi(t.g,t.v,s,0),t.g.pose(bt({shR:[70,10],elR:70+Math.sin(s*6)*15,shL:[60,-30],elL:40,lean:16,headX:26}));let a=t.v.getWorldPosition(new x);return i.position.set(a.x,a.y+.05,a.z),i.quaternion.copy(t.v.quaternion),i.rotateY(Math.PI/2),i.visible=s>241.2,s<241.75?G(r,[[0,[1.35,1.3,.9]],[1,[1.3,1.2,.8]]],[a.x,a.y,a.z],(s-240.88)/.87,0,0):G(r,[[0,[.9,1.15,-.5]],[1,[.75,1.1,-.6]]],[.35,.95,-1.12],(s-241.75)/1.43,0,0),ar}}),Y(243.18,249.68,{bg:"#DDE6EE",fov:40},n=>{let t=Cs(n,{hora:"tarde"}),e=Kt([t.v,t.g.root]),i=T0(n,t.v),s=t.K.luzes.sol;return(o,r,a)=>{let l=r/6.5;return Fi(t.g,t.v,o,.5+l),O(t.g,null,o,l>.55?"feliz":"determinado",{blink:l>.55?1:void 0,look:[0,.5]}),s.position.set(.4+ht(-1.4,1.4,l),2.3,-2.1),s.color.set(l>.6?"#FFB070":"#FFF0D0"),Yt.mundo.value=ge(243.3,243.8,o),e(1,o),te(n,"#DDE6EE",Yt.mundo.value),i(o,ge(246,246.5,o)),G(a,[[0,[1.4,1.2,1.2]],[.5,[1.3,1.25,-.5]],[1,[1.35,1.3,1]]],[.6,.85,.25],l),{tint:l>.6?"#FFE0C0":"#FFF4E4",bloom:.3}}}),Y(249.68,251.88,{bg:"#DDE6EE",fov:42},n=>{let t=Cs(n,{hora:"tarde"});t.K.portaK.abre(1);let e=Z(n,_i,-1.25,.85,Math.PI/2-.3),i=Je();return n.add(i),(s,o,r)=>{Fi(t.g,t.v,s,1.3),O(t.g,null,s,"feliz",{blink:1});let a=Ht($e.filmar,{bob:0});return pe(e,"tiago",s,"surpreso",a,0),e.pose(a),ce(i,e,"R",[0,-.08,.05],[0,0,Math.PI/2]),i.tela("views",.01),G(r,[[0,[.3,1.45,-1]],[1,[.2,1.4,-.9]]],[-1.2,1.2,.85],o/2.2),ar}}),Y(251.88,253.78,{bg:"#DDE6EE",fov:42},n=>{let t=Cs(n,{hora:"tarde"}),e=T0(n,t.v);return(i,s,o)=>(Fi(t.g,t.v,i,1.3),t.g.root.position.y=.42-.28*.95+Math.abs(Math.sin(i*5))*.01,pe(t.g,"gui",i,"feliz",t.g._ultima||{},0,{look:[-.6,0]}),Fi(t.g,t.v,i,1.3),e(i,1),G(o,[[0,[-.5,1.3,.9]],[1,[-.4,1.25,.8]]],[.7,.9,.25],s/1.9),ar)}),Y(253.78,262.78,{bg:"#DDE6EE",fov:40,limpa:!1},n=>{let t=Cs(n,{hora:"tarde"}),e=Z(n,_i,-.8,.6,Math.PI/2+.3),i=Je();return n.add(i),(s,o,r)=>{Fi(t.g,t.v,s,1.3),O(t.g,null,s,"feliz",{blink:1}),e.pose(Ht(Le(s,2),{shR:[64,4],elR:76,shL:[40,12],elL:70,headX:24})),O(e,null,s,"surpreso",{look:[0,.5]}),Ne(i,e,"R"),i.tela("views",ct((s-254.3)/4.2)),e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let a=e.headG.localToWorld(new x(0,.26,.1)),l=i.position;return G(r,[a.x,a.y,a.z],[l.x,l.y,l.z],o/9,0,0),ar}}),Y(262.78,266.88,{bg:"#B8C8DC",fov:40},n=>{let t=Cs(n,{hora:"tarde"});return(e,i,s)=>(Fi(t.g,t.v,262.8,1.3),O(t.g,null,262.8,"feliz",{blink:1,vivo:!1}),G(s,[[0,[-.55,1.3,.75]],[1,[-.45,1.25,.65]]],[.7,.95,.25],i/4.1),{tint:"#B8D0FF",sat:.55,exposure:.9})}),Y(266.88,269.18,{bg:"#E8E0D0",fov:44},n=>{let t=It(n,{hora:"noite"});t.tel.visible=!1;let e=Z(n,io,-2.4,.9,-Math.PI/2+.6),i=[];for(let s=0;s<3;s++){let o=at(.11,.09,.02,"#F4F1EA",-3.3+s*.3,.79,.45,{out:.003});n.add(o),i.push(o)}return(s,o,r)=>{let a={shR:[110,30],elR:60,shL:[20,10],elL:30,headX:-6};return pe(e,"mae",s,"neutro",a,.3),e.pose(a),G(r,[[0,[-3.9,1.4,1.2]],[1,[-3.75,1.35,1.1]]],[-2.4,1.2,.9],o/2.3),{tint:"#FFF0DC"}}}),Y(269.18,290.18,{bg:"#2A2A34",fov:40,limpa:!1},n=>{let t=It(n,{hora:"noite",corte:!0});t.tel.visible=!1,t.luzes.LG.intensity=2,t.violao.visible=!1;let e=Z(n,Rt,0,0,0);le(e,lr.x,lr.z,lr.ry,.42);let i=ir({});n.add(i);let s=Z(n,io,-3,.9,0),o=Kt([e.root,i]),r=T0(n,i);return(a,l,c)=>{Fi(e,i,a,1.2),O(e,null,a,"feliz",{blink:1}),r(a,1);let h=ct((a-273.1)/1.6);s.place(ht(-3,-2,h),ht(.9,.85,h),0,-Math.PI/2+.1+(h<1&&h>0,0)),s.root.rotation.y=(h>0&&h<1,Math.PI/2);let u=a>275&&a<276.2,d=[269.6,270.3,271.1,271.8,272.4,275.6].some(E=>a>E&&a<E+.5),f=h>0&&h<1?tn(a,{f:1.8}):u?{shR:[90,0],elR:60+Math.abs(Math.sin(a*14))*40}:{shR:[120,30],elR:70,shL:[120,30],elL:70,headX:-6};s.pose(f),O(s,null,a,a>276?"preocupado":"bravo",{mouth:d?{open:.7}:void 0});let g=ge(278.6,279.2,a);return Yt.mundo.value=.25+g*.75,o(1,a),te(n,"#2A2A34",0),a<278.6?G(c,[[0,[-1.6,2.1,6]],[1,[-1.6,2,5.6]]],[-1.6,1.1,0],(a-269.18)/9.4,0,0):a<284.2?G(c,[[0,[.6,1.6,3.4]],[1,[.7,1.4,2.6]]],[.6,.95,.25],(a-278.6)/5.6,0,0):G(c,[[0,[-1.6,1.6,3.6]],[1,[-1.6,1.5,3.3]]],[-1.6,1.1,.5],(a-284.2)/6,0,0),{tint:"#E8E2FF"}}}),Y(290.18,310.68,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=Cs(n,{hora:"noite"});t.K.luzes.LG.intensity=2;let e=Z(n,ln,1.5,.85,-Math.PI/2);xs(e,1);let i=vn();n.add(i),i.scale.setScalar(.6),t.K.portaD.abre(1);let s=oo();s.position.set(-.3,2,-1.47),n.add(s);let o=Kt([t.g.root,t.v]),r=T0(n,t.v);return(a,l,c)=>{Fi(t.g,t.v,a,1.1),O(t.g,null,a,"feliz",{blink:1}),r(a,1);let h=ct((a-291.7)/1.6);e.place(ht(1.5,.25,h),ht(.85,1.05,h),0,ht(-Math.PI/2,2.58-Math.PI*2,h));let u=Math.sin(a*2.2);e.pose(h>0&&h<1?tn(a,{f:2}):Ht({shL:[30,-40],elL:120,shR:[30,-40],elR:120,headX:6,tilt:u*5},{bob:Math.abs(u)*.01})),e.root.position.x+=h>=1?u*.03:0,O(e,null,a,"triste",{look:[-.6,.1]}),e.root.updateMatrixWorld(!0);let d=e.hands.L.localToWorld(new x(0,-.04,.04)),f=e.hands.R.localToWorld(new x(0,-.04,.04));return i.position.copy(d).add(f).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.set(0),s.hora(20,ct((a-294.8)/9)*10),Yt.mundo.value=1,o(.5,a),te(n,"#C8C0B8",1),xs(e,a>308.3?ht(1,.15,ge(308.3,309.2,a))*(a>310.2?1.5:1):1),G(c,[[0,[-1.2,2.05,-1.2]],[1,[-1.1,1.95,-1.1]]],[.7,.8,.5],l/20.5,0,0),{tint:"#E8E2FF"}}}),Y(310.68,313.08,{bg:"#C8C0B8",fov:44},n=>{let t=Cs(n,{hora:"noite"});return t.K.luzes.LG.intensity=2,(e,i,s)=>(Fi(t.g,t.v,310.7,0),t.g.pose(bt({shR:[30,20],elR:40,shL:[40,-20],elL:50,headX:0,headY:Math.sin((e-310.68)*2)*40})),O(t.g,null,e,"neutro",{look:[Math.sin((e-310.68)*2),0]}),Yt.mundo.value=1-ge(310.7,311.3,e),G(s,[[0,[-.6,1.5,1.2]],[1,[-.5,1.4,1.05]]],[.7,.9,.25],i/2.4),{tint:"#E8E2FF"})}),Y(313.08,316.55,{bg:"#E8E0D0",fov:34},n=>{let t=It(n,{hora:"noite"});t.tel.visible=!1;let e=Z(n,Rt,-2.3,.45,-Math.PI/2),i=at(.12,.09,.025,"#F4F1EA",-2.85,.79,.45,{out:.003}),s=at(.12,.09,.025,"#F4F1EA",0,0,0,{out:.003});s.rotation.x=Math.PI,n.add(i,s);let o=he(.07,"#C89A50",-2.85,.8,.45,{seg:10});return o.scale.y=.4,n.add(o),(r,a,l)=>{let c=ge(314.2,314.8,r);return e.pose({shR:[40+c*40,0],elR:60-c*30,lean:14,headX:26}),O(e,null,r,"triste",{look:[0,.7]}),s.position.set(-2.85+c*.1,.82+c*.25,.45),s.rotation.z=c*.6,G(l,[[0,[-3.6,1.25,.25]],[1,[-3.5,1.18,.32]]],[-2.6,.95,.45],a/3.47),{tint:"#FFE8D0",sat:.8}}}),Y(316.55,318.38,{bg:"#10121C",fov:34},n=>{let t=It(n,{hora:"noite"});t.tel.visible=!1,t.portaD.abre(.35);let e=Z(n,ln,0,0,0);As(e,3.55,.38,.2),e.root.position.y=.58;let i=vn();i.scale.setScalar(.6),i.position.set(3.45,.5,-1),i.rotation.set(-Math.PI/2,0,.4),n.add(i);let s=new In("#B8C8FF",12,6,.5,.6,1.2);return s.position.set(3.3,2.4,-2.2),s.target.position.set(3.5,.4,-.6),n.add(s,s.target),(o,r,a)=>(e.pose({shL:[10,10],shR:[10,10]}),O(e,null,o,"sono",{blink:1}),i.set(0),G(a,[[0,[2.3,1.45,1.2]],[1,[2.45,1.35,1.05]]],[3.45,.5,-.6],r/1.83),{tint:"#C8D4FF",exposure:.85})})],ri=n=>{Yt.mundo.value=n,Yt.ouro.value=1};function Rh(n,t,e){let i=e[0],s=e[e.length-1];for(let r=0;r<e.length-1;r++)if(t>=e[r][0]&&t<=e[r+1][0]){i=e[r],s=e[r+1];break}let o=s[0]>i[0]?ct((t-i[0])/(s[0]-i[0])):1;n.position.set(ht(i[1],s[1],o),Math.sin(o*Math.PI)*(s[3]||0),ht(i[2],s[2],o)),n.rotation.z=-n.position.x*4,n.rotation.x=n.position.z*4}function ai(n){let t=gf(n),e=Z(n,ln,0,0,0),i=Z(n,Rt,0,0,0),s=g0(.35);n.add(s);let o=Je();return o.position.set(-3.5,.02,2.3),o.rotation.set(-Math.PI/2,0,.6),n.add(o),{P:t,d:e,g:i,B:s,tel:o}}var wf=[Y(318.38,325.98,{bg:"#F4E8C8",fov:44,limpa:!1},n=>{let t=It(n,{hora:"manha"});t.tel.visible=!1,t.portaD.abre(1);let e=Z(n,ln,1.42,.85,-Math.PI/2),i=g0(.35);n.add(i);let s=Z(n,Rt,0,0,0);return As(s,.95,.43,.38),s.root.position.y=.63,(o,r,a)=>(e.pose(Ht(Le(o,2),{shR:[10,30],elR:80,shL:[0,9]})),O(e,null,o,"feliz",{look:[-.6,0]}),ce(i,e,"R",[-.05,-.05,.08],!1),s.pose({shR:[10,10],elR:30,shL:[10,10],elL:30}),O(s,null,o,"sono",{blink:1}),o<323.9?G(a,[[0,[-.3,1.4,.6]],[1,[0,1.25,.7]]],[1.42,.75,.85],(o-318.38)/5.5):G(a,[[0,[.95,.3,.95]],[1,[1,.25,.9]]],[1.42,.06,.85],(o-323.9)/2.08,0,0),{tint:"#FFE8B8",bloom:.3})}),Y(325.98,327.56,{bg:"#F4E8C8",fov:36},n=>{let t=It(n,{hora:"manha"});t.tel.visible=!1,t.portaD.abre(1);let e=Z(n,ln,1.5,.78,-Math.PI/2),i=g0(.35);return n.add(i),(s,o,r)=>{let a=Ht(Le(s,2),{shR:[10,30],elR:80,shL:[60,20],elL:90,tilt:-8,headZ:-10});return pe(e,"davi",s,"vergonha",a,0,{look:[-.6,0]}),e.pose(a),ce(i,e,"R",[-.05,-.05,.08],!1),G(r,[[0,[.6,.95,.75]],[1,[.7,.92,.76]]],[1.5,.75,.8],o/1.58),{tint:"#FFE8B8",bloom:.3}}}),Y(327.56,330.58,{bg:"#F4E8C8",fov:44},n=>{let t=It(n,{hora:"manha"});t.tel.visible=!1;let e=Z(n,Rt,0,0,0);return le(e,.95,-.2,Math.PI/2,.42),(i,s,o)=>{let r=ge(327.6,328.4,i)*(1-ge(329.3,329.9,i)),a=bt({shL:[ht(20,165,r),20],shR:[ht(20,165,r),20],elL:20,elR:20,headX:-10*r});return pe(e,"gui",i,r>.5?"sono":"feliz",a,0),e.pose(a),t.coberta.position.x=-ge(329.6,330.2,i)*.5,t.coberta.rotation.z=ge(329.6,330.2,i)*.5,G(o,[[0,[1.4,1.35,.95]],[1,[1.38,1.3,.85]]],[.95,.9,-.2],s/3.02),{tint:"#FFE8B8",bloom:.3}}}),Y(330.58,336.68,{bg:"#BFE3F7",fov:40},n=>{let t=ai(n),e=Kt([t.d.root,t.g.root,t.B]);return(i,s,o)=>{let r=ht(-2.5,1.5,s/6.1);t.d.place(r,.2+Math.sin(i*2)*.3,0,Math.PI/2),t.d.pose(zn(i,2.6,.8)),O(t.d,null,i,"feliz",{lingua:!0}),t.B.position.set(r+.3,0,.2+Math.sin(i*2)*.3),t.B.rotation.z=-i*6,t.g.place(r-.9,.9,0,Math.PI/2-.3),t.g.pose(zn(i,2.2,.6)),O(t.g,null,i,"feliz");let a=ge(334.3,335.3,i);return ri(a),e(a,i),te(n,"#BFE3F7",a,1),G(o,[[0,[r-1.5,1.6,4.2]],[1,[r-1,1.4,3.6]]],[r,.6,.4],s/6.1,0,0),{bloom:.3+a*.3,bloomT:.8}}}),Y(336.68,338.99,{bg:"#BFE3F7",fov:32,perto:!0},n=>{let t=ai(n),e=Kt([t.d.root,t.g.root,t.B]);return t.tel.tela("apagada"),(i,s,o)=>(t.d.place(-1.5+(i-336.68)*1.8,1.6,0,Math.PI/2),t.d.pose(zn(i,2.6,.8)),O(t.d,null,i,"feliz"),t.g.place(-1+(i-336.68)*1.6,2.2,0,Math.PI/2),t.g.pose(zn(i,2.2,.6)),O(t.g,null,i,"feliz"),t.B.position.set(-1.2+(i-336.68)*1.8,0,1.7),ri(1),e(1,i),te(n,"#BFE3F7",1,1),G(o,[[0,[-3.9,.35,2.75]],[1,[-3.85,.3,2.65]]],[-3.5,.02,2.3],s/2.31,0,0),{bloom:.45,bloomT:.8,focus:.55,range:.3,blur:10})}),Y(338.99,341.48,{bg:"#BFE3F7",fov:40},n=>{let t=ai(n),e=Kt([t.d.root,t.g.root,t.B]);return(i,s,o)=>(t.d.place(1,.2,0,Math.PI/2),t.d.pose(i<339.4+.3?{hipR:[-30+ct((i-339.4)/.25)*90,0],knR:20,shL:[40,30],shR:[40,30]}:Ht(Le(i,2),{shL:[130,20],elL:120})),O(t.d,null,i,i>339.4+.4?"vergonha":"determinado",{lingua:i<339.4+.3}),Rh(t.B,i,[[339.4,1.3,.2,0],[339.4+1.2,2.5,3,.5],[339.4+2.5,2.8,3.8,.1]]),t.g.place(3,1,0,-Math.PI/2-.2),t.g.pose(i>339.4+.6?Ht(Ks(i,1.3),{lean:25+Math.sin(i*9)*5,shL:[40,10],elL:100,shR:[40,10],elR:100}):Le(i,1)),O(t.g,null,i,i>339.4+.6?"rindo":"feliz",{mouth:i>339.4+.6?{open:.8,smile:1}:void 0}),ri(1),e(1,i),te(n,"#BFE3F7",1,1),G(o,[[0,[2,1.4,-2.6]],[1,[2.1,1.35,-2.3]]],[2,.7,.5],s/2.49),{bloom:.45,bloomT:.8})}),Y(341.48,344.87,{bg:"#BFE3F7",fov:40},n=>{let t=ai(n),e=Kt([t.d.root,t.g.root,t.B]),i=Ud(n,4.4,0,.6,{w:3,d:2,h:3});return(s,o,r)=>{t.d.place(3.6,.1,0,Math.PI/2),t.d.pose(s<341.7+.3?{hipR:[-30+ct((s-341.7)/.25)*90,0],knR:20,shL:[40,30],shR:[40,30]}:Ht(u0(s,2.4),$e.comemora)),O(t.d,null,s,s>341.7+.3?"rindo":"determinado",{pisca1:s<341.7+.3,mouth:s>341.7+.3?{open:.7,smile:1}:void 0}),Rh(t.B,s,[[341.7,3.9,.1,0],[341.7+.5,5.9,.2,.15],[341.7+1.2,6.4,.3,0]]),t.g.place(4.6,1.5,0,-Math.PI*.8);let l=s>341.7+.5;return t.g.pose(l?Ht($e.ajoelhado,$e.comemora):Le(s,1)),O(t.g,null,s,l?"rindo":"surpreso",{mouth:l?{open:.9,smile:1}:void 0}),i(s),n.children.forEach(()=>{}),ri(1),e(1,s),te(n,"#BFE3F7",1,1),G(r,[[0,[2.6,1.3,3.6]],[1,[2.9,1.2,3.2]]],[4.4,.7,.6],o/3.39),{bloom:.45,bloomT:.8}}}),Y(344.87,347.28,{bg:"#BFE3F7",fov:34},n=>{let t=ai(n),e=Kt([t.d.root,t.B]);return(i,s,o)=>{let r=344.87+(i-344.87)*.35,a=ht(-1,0,s/2.41);return t.d.place(a,.3,0,Math.PI/2),t.d.pose(zn(r,2.6,.8)),O(t.d,null,r,"feliz"),t.B.position.set(a+.3,0,.45),t.B.rotation.z=-r*6,t.g.root.visible=!1,ri(1),e(1,i),te(n,"#BFE3F7",1,1),G(o,[[0,[a+.2,.8,2.2]],[1,[a+.5,.75,2]]],[a,.5,.3],s/2.41),{bloom:.45,bloomT:.8}}}),Y(347.28,349.2,{bg:"#BFE3F7",fov:30},n=>{let t=ai(n),e=Kt([t.d.root]);return(i,s,o)=>{let r=347.28+(i-347.28)*.35;return t.d.place(0,.3,0,Math.PI/2-.3),t.d.pose(zn(r,2.6,.8)),O(t.d,null,r,"feliz",{lingua:!0}),t.g.root.visible=!1,t.B.visible=!1,ri(1),e(1,i),te(n,"#BFE3F7",1,1),G(o,[[0,[1.3,.75,1.1]],[1,[1.2,.72,1]]],[0,.62,.3],s/1.92),{bloom:.45,bloomT:.8}}}),Y(349.2,350.88,{bg:"#BFE3F7",fov:30},n=>{let t=ai(n),e=Kt([t.d.root,t.B]);return(i,s,o)=>{let r=ct((i-349.6)/1);return t.d.place(0,.3,0,Math.PI/2),t.d.pose({hipR:[-30+r*70,0],knR:30-r*20,shL:[40,30],shR:[40,30],lean:8}),O(t.d,null,i,"determinado",{pisca1:!0}),t.g.root.visible=!1,t.B.position.set(.3+r*.3,0,.38),ri(1),e(1,i),te(n,"#BFE3F7",1,1),G(o,[[0,[1.25,.65,1]],[1,[1.15,.62,.9]]],[0,.58,.3],s/1.68),{bloom:.45,bloomT:.8}}}),Y(350.88,352.87,{bg:"#BFE3F7",fov:30},n=>{let t=ai(n),e=Kt([t.d.root]);return(i,s,o)=>(t.d.place(.5,.3,0,Math.PI/2+.6),t.d.pose(Ht(zn(i*.5,2.6,.5),{shR:[70,10],elR:120})),O(t.d,null,i,"feliz",{mouth:{open:Math.abs(Math.sin(i*13))*.35}}),t.g.root.visible=!1,t.B.visible=!1,ri(1),e(1,i),te(n,"#BFE3F7",1,1),G(o,[[0,[1.55,.75,1.2]],[1,[1.45,.72,1.1]]],[.5,.6,.3],s/1.99),{bloom:.45,bloomT:.8})}),Y(352.87,356.28,{bg:"#BFE3F7",fov:34},n=>{let t=ai(n),e=Kt([t.d.root,t.g.root]);return(i,s,o)=>{t.d.place(4.6,.2,0,Math.PI/2);let r=ge(353.6,354.3,i);return t.d.root.rotation.y=ht(Math.PI/2,-.6,r),t.d.pose(Ht(Le(i,2),{shL:[130*(1-r),20],elL:40})),O(t.d,null,i,r>.5?"feliz":"rindo",{look:[0,0],brow:r}),t.g.place(3.2,2,0,Math.PI*.8),t.g.pose(Ht($e.comemora,u0(i,2))),O(t.g,null,i,"rindo"),t.B.position.set(5.9,0,.2),ri(1),e(1,i),te(n,"#BFE3F7",1,1),G(o,[[0,[5.6,.9,-.9]],[1,[5.5,.88,-.75]]],[4.4,.62,.4],s/3.41),{bloom:.45,bloomT:.8}}}),Y(356.28,358.91,{bg:"#BFE3F7",fov:34},n=>{let t=ai(n),e=Kt([t.d.root,t.g.root]);return(i,s,o)=>{let r=ht(4.6,3.5,s/2.63),a=ht(.2,1.6,s/2.63);t.d.place(r,a,0,-.7);let l=Ht(zn(i,2.6,.7),$e.bracosAbertos);return pe(t.d,"davi",i,"rindo",l,0),t.d.pose(l),t.g.place(3.2,2.1,0,Math.PI*.85),t.g.pose(Le(i,1)),O(t.g,null,i,"feliz"),ri(1),e(1,i),te(n,"#BFE3F7",1,1),G(o,[[0,[3.3,.85,2.6]],[1,[3.25,.8,2.45]]],[r,.6,a],s/2.63),{bloom:.45,bloomT:.8}}}),Y(358.91,361.08,{bg:"#BFE3F7",fov:38},n=>{let t=ai(n),e=Kt([t.d.root,t.g.root,t.B]);return(i,s,o)=>{let r=ge(359.9,360.5,i);t.g.place(3.2,2.1,0,Math.PI*.85),t.g.root.rotation.x=-r*1.45,t.g.root.position.y=r*.18;let a=r>.1?Ks(i,1):$e.bracosAbertos;return pe(t.g,"gui",i,"rindo",a,0,{mouth:r>.5?{open:.8,smile:1}:void 0}),t.g.pose(a),t.d.place(3.95,1.55,0,-.7),t.d.root.rotation.x=-r*1.4,t.d.root.position.y=r*.12,t.d.pose(Ks(i,1)),O(t.d,null,i,"rindo",{mouth:{open:.8,smile:1}}),Rh(t.B,i,[[359.9,3.6,1.5,0],[361.08,2.2,.2,0]]),ri(1),e(1,i),te(n,"#BFE3F7",1,1),G(o,[[0,[1.6,1.8,3.8]],[1,[1.8,2.2,3.6]]],[3.3,.3,1.6],s/2.17),{bloom:.45,bloomT:.8}}}),Y(361.08,367.28,{bg:"#BFE3F7",fov:36},n=>{let t=ai(n),e=Kt([t.d.root,t.g.root]);return(i,s,o)=>(t.g.place(3.2,2.1,0,Math.PI*.85),t.g.root.rotation.x=-1.45,t.g.root.position.y=.18,t.g.pose(Ks(361.1,1)),O(t.g,null,361.1,"rindo",{mouth:{open:.5,smile:1},vivo:!1}),t.d.place(3.95,1.55,0,-.7),t.d.root.rotation.x=-1.4,t.d.root.position.y=.12,t.d.pose(Ks(361.1,1)),O(t.d,null,361.1,"rindo",{mouth:{open:.6,smile:1},vivo:!1}),t.B.position.set(2.2,0,.2),ri(1),e(1,i),te(n,"#BFE3F7",1,1),G(o,[[0,[3.3,3.8,3.4]],[1,[3.3,3.3,3]]],[3.3,.1,1.5],s/6.2,0,0),{bloom:.5,bloomT:.75,vig:.45})})];var co={bloom:.22};function ss(n,t={}){let e=ef(n),i=si(.05);i.g.position.set(0,.835,0),n.add(i.g);let s=Z(n,Rt,0,.75,Math.PI);le(s,0,.75,Math.PI,.48);let o=Z(n,t.op||_i,0,-.75,0);le(o,0,-.75,0,.48);let r=[];for(let a=0;a<(t.pub??6);a++){let l=Z(n,Ts(a+3),-1.4+a%3*.45+(a>2?2.2:0),.3-a%2*.5,a>2?-Math.PI/2:Math.PI/2);l.seed=a,r.push(l)}return{P:e,T:i,g:s,op:o,pub:r}}var Fs=(n,t=1)=>bt(Ht({shR:[48,6],elR:96,shL:[40,6],elL:90,lean:12,headX:18},Xe(n,t,.3)));function Cf(n,t,e,i=.35){for(let[s,o,r]of e){let a=n.P[s];if(!a)continue;let l=ct((t-r)/i);l<=0||(n.move(a,s,o,l),n.P[o]&&n.P[o]!==a&&l>=1&&(n.P[o].visible=!1))}}var cr=(n,t,e="neutro")=>n.pub.forEach((i,s)=>{i.pose(Ht(Le(t,s),$e.bracoCruzado)),O(i,null,t,e)}),Ff=[Y(367.28,375.08,{bg:"#BFE3F7",fov:42},n=>{let t=ss(n,{pub:0});t.g.root.visible=t.op.root.visible=!1;let e=Z(n,so,0,0,0),i=Z(n,Rt,0,0,0);return(s,o,r)=>{let a=ct((s-367.6)/2.6);e.place(ht(-4,-.6,En(a)),ht(-3,-.2,a),0,a<1?1:Math.PI/2),e.pose(a<1?tn(s,{f:1.8}):s<372.6?{shR:[60,4],elR:40,shL:[60,4],elL:40,lean:20}:Ht(Le(s,3),$e.maosCintura)),O(e,null,s,"feliz"),t.T.g.visible=s>371.4,t.T.g.position.y=.835+(s<372.2?(372.2-s)*.3:0);let l=ct((s-372.4)/2.6);return i.place(ht(3.5,.7,l),ht(2,.9,l),0,-2.2),i.pose(l<1&&l>0?tn(s,{f:1.7}):Le(s,1)),O(i,null,s,"surpreso",{look:[-.4,.5]}),G(r,[[0,[3.4,1.7,3.4]],[1,[2.6,1.5,2.8]]],[0,.8,0],o/7.8),co}}),Y(375.08,377.82,{bg:"#BFE3F7",fov:36,limpa:!1},n=>{let t=ss(n,{pub:0});t.op.root.visible=!1;let e=new st(new St(.21,.29),Xt(kt(256,352,o=>{o.fillStyle="#FBF8EE",o.fillRect(0,0,256,352),o.fillStyle="#2A2A30",o.font="900 26px Inter",o.fillText("REGRAS",70,40),o.font="600 15px Inter",["\u2659 anda 1 casa","\u2656 linha reta","\u2658 em L","\u2657 diagonal","\u2655 tudo","\u2654 1 casa"].forEach((r,a)=>o.fillText(r,24,90+a*40))})));n.add(e);let i=["p","t","c","b","d","r"].map(o=>{let r=vh(o,!0,2.2);return n.add(r),r}),s=Kt([e,...i]);return(o,r,a)=>{t.g.pose(bt({shR:[70,6],elR:100,shL:[70,6],elL:100,headX:26,lean:8})),O(t.g,null,o,"determinado",{look:[0,.6]}),ce(e,t.g,"R",[.08,-.06,.08],[-.9,0,0]);let l=e.position;return i.forEach((c,h)=>{let u=o*1.5+h*1.05,d=ct((o-375.4-h*.2)/.5);c.position.set(l.x+Math.cos(u)*.28*d,l.y+.1+d*.18+Math.sin(o*3+h)*.03,l.z-.15+Math.sin(u)*.15*d),c.rotation.y=o*2,c.visible=d>0}),Yt.mundo.value=ge(375.2,375.6,o),s(1,o),te(n,"#BFE3F7",Yt.mundo.value),G(a,[[0,[.15,1.12,-.45]],[1,[.12,1.1,-.3]]],[0,1.1,.5],r/2.74,0,0),{focus:.5,range:.3,blur:8}}}),Y(377.82,379.88,{bg:"#BFE3F7",fov:40},n=>{let t=ss(n);return(e,i,s)=>{Cf(t.T,e,[["e2","e4",377.9],["e7","e5",378.15],["f1","c4",378.4],["b8","c6",378.65],["d1","h5",378.9],["g8","f6",379.1],["h5","f7",379.3]],.2),t.g.pose(Fs(e)),O(t.g,null,e,"determinado",{look:[0,.5]});let o=ge(379.4,379.6,e);return t.op.pose(bt({lean:10+o*40,headX:10+o*30,shL:[40,20],elL:60,shR:[40,20],elR:60})),O(t.op,null,e,o>.5?"choro":"preocupado"),cr(t,e,"surpreso"),G(s,[[0,[1.3,1.5,-1.3]],[1,[1.15,1.45,-1.15]]],[0,.9,0],i/2.06),co}}),Y(379.88,381.19,{bg:"#BFE3F7",fov:38},n=>{let t=ss(n,{op:so});return(e,i,s)=>{t.g.pose(Fs(e)),O(t.g,null,e,"feliz");let o=t.T.P.e8,r=ge(380.2,380.6,e);return o.rotation.x=-r*1.4,t.op.pose(bt({shR:[60,4],elR:30-r*10,lean:14})),O(t.op,null,e,r>.5?"feliz":"preocupado"),cr(t,e,"surpreso"),G(s,[[0,[-.9,1.35,-1.25]],[1,[-.8,1.3,-1.1]]],[0,.95,-.3],i/1.31),co}}),Y(381.19,388.48,{bg:"#F2B070",fov:36},n=>{let t=ss(n,{pub:6});t.op.root.visible=!1;let e=Z(n,rr,0,0,0),i=Ei("\u2726",.15);return i.material.color.set("#FFFFFF"),n.add(i),(s,o,r)=>{let a=381.19+(s-381.19)*.4,l=ct((s-381.3)/5.4);e.place(ht(-3.5,-.9,l),ht(-3,-1.2,l),0,.7);let c=s>386;e.pose(c?{shR:[150,-20],elR:150,shL:[10,9],elL:12}:tn(a,{f:1.7})),O(e,null,s,"desconfiado",{look:[.4,0]}),e.headG.updateMatrixWorld(!0);let h=e.headG.localToWorld(new x(.1,.28,.3));i.position.copy(h);let u=ct((s-386.6)/.6);return i.visible=u>0&&u<1,i.scale.setScalar(.15*Math.sin(u*Math.PI)+.001),i.material.rotation=u*3,t.g.pose(Fs(s)),O(t.g,null,s,"neutro",{look:[-.6,0]}),cr(t,s,"surpreso"),G(r,[[0,[-3.4,.85,.6]],[1,[-2.6,.95,.2]]],[e.root.position.x,1,e.root.position.z],o/7.29),{tint:"#FFD8A8",bloom:.4}}}),Y(388.48,391.28,{bg:"#F2B070",fov:36},n=>{let t=ss(n,{op:rr});return(e,i,s)=>{let o=bt({shR:[55,6],elR:80,lean:14,headX:10});return pe(t.op,"caio",e,"desconfiado",o,0,{mouth:void 0,smile:.5,look:[0,-.2]}),t.op.pose(o),t.g.pose(Fs(e)),O(t.g,null,e,"neutro",{look:[0,.3]}),cr(t,e),G(s,[[0,[.4,1.25,.5]],[1,[.35,1.22,.35]]],[0,1.15,-.75],i/2.8),{tint:"#FFD8A8"}}}),Y(391.28,396.91,{bg:"#F2B070",fov:34},n=>{let t=ss(n,{op:rr}),e=[["e2","e4"],["e7","e5"],["g1","f3"],["b8","c6"],["f1","b5"],["a7","a6"],["b5","c6"],["d7","c6"],["d2","d3"],["f8","d6"],["c1","g5"],["g8","e7"],["f3","h4"],["h7","h6"],["g5","e7"],["d8","e7"],["d1","h5"],["c8","e6"],["h4","f5"],["e6","f5"],["e4","f5"],["e7","g5"],["h5","f7"]].map(([i,s],o)=>[i,s,391.5+o*.2*(1-o*.012)]);return(i,s,o)=>{Cf(t.T,i,e,.15),t.g.pose(Fs(i)),O(t.g,null,i,"determinado",{look:[0,.5]}),t.op.pose(Fs(i,3)),O(t.op,null,i,i>394?"preocupado":"desconfiado",{look:[0,.5]}),cr(t,i,i>394?"surpreso":"neutro");let r=(i-391.28)*.5;return G(o,[Math.sin(r)*1.1,1.45,Math.cos(r)*1.1],[0,.85,0],s/5.63,0,0),{tint:"#FFD8A8"}}}),Y(396.91,398.98,{bg:"#F2B070",fov:30},n=>{let t=ss(n,{op:rr});return(e,i,s)=>(t.op.pose(bt({shR:[70+Math.sin(e*40)*1.5,6],elR:60,lean:16,headX:22})),O(t.op,null,e,"medo",{look:[0,.6]}),t.g.pose(Fs(397)),O(t.g,null,397,"neutro"),cr(t,397,"surpreso"),t.op.headG.position.y+=0,G(s,[[0,[1,1.2,-.15]],[1,[.92,1.18,-.22]]],[0,1,-.45],i/2.07,0,0),{tint:"#FFD8A8",vig:.5})}),Y(398.98,403.34,{bg:"#F2B070",fov:40},n=>{let t=ss(n,{op:rr,pub:6}),e=Z(n,so,0,0,0),i=rt(.21,.29,.005,"#FBF8EE",0,0,0);n.add(i);let s=t.pub.map(()=>{let o=Je();return n.add(o),o});return(o,r,a)=>{let l=ct((o-399)/2.2);e.place(ht(-3.5,-.6,En(l)),ht(-1.5,.9,l),0,.9);let c=l<1?zn(o,2.6,.8):{shR:[100,10],elR:20,shL:[30,9],elL:20};return pe(e,"pef",o,"feliz",c,0),e.pose(c),ce(i,e,"R",[0,-.06,.06],[-1.4,0,0]),t.g.pose(Fs(o)),O(t.g,null,o,"surpreso",{look:[-.6,0]}),t.op.pose(bt({lean:30,headX:30})),O(t.op,null,o,"triste"),t.pub.forEach((h,u)=>{h.pose(Ht(Le(o,u),$e.filmar)),O(h,null,o,"feliz"),ce(s[u],h,"R",[0,-.08,.05],[0,0,Math.PI/2]),s[u].tela("views",.05)}),G(a,[[0,[2.2,1.6,2.8]],[1,[1.8,1.5,2.4]]],[-.4,.9,.2],r/4.36),{tint:"#FFD8A8"}}}),Y(403.64,411.2,{bg:"#14141C",fov:36},n=>{eo(n,{cor:"#F2C230"}),n.add(new je("#FFF0D8",.8));let t=[],e=[];for(let l=0;l<3;l++){let c=at(.28,.32,.8,"#2A2A34",-1+l,.4,0,{out:.006,seg:24});n.add(c),t.push(c);let h=new In("#FFF0C8",5,6,.35,.6,1.2);h.position.set(-1+l,3,1),h.target.position.set(-1+l,.9,0),n.add(h,h.target)}let i=sr("10","#2E5EC8");i.rotation.set(-.3,0,0),i.scale.setScalar(1.6),n.add(i);let s=Je();s.scale.setScalar(3),n.add(s),s.tela("views",1);let o=si(.035);n.add(o.g),e.push(i,s,o.g);let r=new st(new St(10,6),new me({color:"#2A2A34"}));r.rotation.x=-Math.PI/2,n.add(r);let a=new st(new St(10,5),new me({color:"#3A3A48"}));return a.position.set(0,2.5,-1.6),n.add(a),(l,c,h)=>(e.forEach((u,d)=>{let f=En(ct((l-[404,405.2,406.6][d])/.5));u.position.set(-1+d,.95+.15*f+Math.sin(l*2+d)*.02,0),u.rotation.y=d===2?l*.5:Math.sin(l+d)*.3,u.visible=f>0,u.scale.setScalar([1.6,3,1][d]*f+.001)}),G(h,[[0,[0,1.3,3.2]],[1,[.3,1.25,2.6]]],[0,.95,0],c/7.56),{bloom:.4,bloomT:.75})}),Y(411.2,416.06,{bg:"#0C0C12",fov:40},n=>{n.add(new je("#FFFFFF",.7)),n.add(new Yi("#E8E0FF","#2A2A34",.6));let t=[];for(let l=0;l<3;l++){let c=at(.28,.32,.8,"#2A2A34",-1+l,.4,0,{out:.006,seg:24});c.castShadow=!0,n.add(c)}let e=sr("10","#2E5EC8");e.rotation.set(-.3,0,0),e.scale.setScalar(1.6),e.position.set(-1,1.1,0),n.add(e);let i=Je();i.scale.setScalar(3),i.position.set(0,1.1,0),n.add(i),i.tela("views",1);let s=si(.035);s.g.position.set(1,1.1,0),n.add(s.g),n.traverse(l=>{l.isMesh&&(l.castShadow=!0)});let o=new st(new St(10,6),new me({color:"#2A2A34"}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);let r=new st(new St(12,6),new me({color:"#C8C0B0"}));r.position.set(0,3,-1.6),r.receiveShadow=!0,n.add(r);let a=new In("#FFE8C0",60,14,.8,.3,1);return a.position.set(0,.6,4),a.target.position.set(0,1.2,-1.6),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),n.add(a,a.target),(l,c,h)=>(G(h,[[0,[2.4,1.2,1.8]],[.6,[1.6,1.4,-1]],[1,[.4,1.5,-1.3]]],[[0,[0,1.1,0]],[1,[0,2.2,-1.6]]],c/4.86,0,0),{vig:.55})}),Y(416.06,421.63,{bg:"#F0C49A",fov:38},n=>{let t=jo(n,{hora:"tarde",tipo:"casas"}),e=Z(n,Rt,-5.2,0,Math.PI,.16),i=Je();n.add(i);let s=Kt([e.root,i]);return(o,r,a)=>{let l=-(o-416.06)*.9;e.place(-5.2,l,.16,Math.PI),e.pose(Ht(tn(o,{f:1.6}),{shL:[64,4],elL:76,shR:[40,12],elR:70,headX:26})),O(e,null,o,"determinado",{look:[0,.6]}),Ne(i,e),i.tela("xadrez",r/5.57);let c=ge(419.8,420.6,o);return Yt.mundo.value=c,s(c,o),te(n,"#F0C49A",c),G(a,[[0,[-4.3,1.5,l-2.2]],[1,[-4.4,1.45,l-1.8]]],[-5.2,1.1,l],r/5.57,0,0),{tint:"#FFE0C0"}}}),Y(421.63,425.62,{bg:"#F0C49A",fov:40},n=>{let t=jo(n,{hora:"tarde",tipo:"casas"}),e=Z(n,Rt,-5.2,0,Math.PI,.16),i=Je();n.add(i);let s=Kt([e.root,i]),o=p0("#3E7CC8");n.add(o);let r=Z(n,Ki(1),0,0,0),a=zr("#2E5EB8");n.add(a);let l=Z(n,v0,0,0,0);return(c,h,u)=>{let d=-(c-416.06)*.9;e.place(-5.2,d,.16,Math.PI),e.pose(Ht(tn(c,{f:1.6}),{shL:[64,4],elL:76,shR:[40,12],elR:70,headX:26})),O(e,null,c,"determinado",{look:[0,.6]}),Ne(i,e),i.tela("xadrez",.5+h/8),o.position.set(-2,0,d-6+(c-421.63)*3),o.rotation.y=0,r.place(-6.2,d-4,.16,.5),r.pose(c>423.3?{shR:[150,20],elR:30,shL:[120,30],elL:40,lean:-6}:Le(c,4)),O(r,null,c,c>423.3?"medo":"neutro",{mouth:c>423.3?{open:.9,round:.6}:void 0});let f=d+9-(c-421.63)*4.2;return a.position.set(-4.75,.16,f),a.rotation.y=Math.PI,a.userData.gira(c*10),l.place(-4.75,f+.05,.16+.42,Math.PI),l.pose({hipL:[70+Math.sin(c*10)*25,6],hipR:[70-Math.sin(c*10)*25,6],knL:70,knR:70,shL:[60,10],shR:[60,10],elL:20,elR:20,lean:20}),O(l,null,c,"bravo"),Yt.mundo.value=1,s(1,c),te(n,"#F0C49A",1),G(u,[[0,[-3,1.6,d-3.5]],[1,[-3.2,1.55,d-3]]],[-4.8,1,d+1],h/3.99,0,0),{tint:"#FFE0C0"}}}),Y(425.62,430.49,{bg:"#F0C49A",fov:34,limpa:!1},n=>{let t=jo(n,{hora:"tarde",tipo:"casas"}),e=Z(n,Rt,-5.2,0,Math.PI,.16),i=Je();n.add(i);let s=Kt([e.root,i]),o=zr("#2E5EB8");n.add(o);let r=Z(n,v0,0,0,0),a=-(425.62-416.06)*.9;return(l,c,h)=>{let u=l<428.9?.25:1,d=425.62+Math.min(l-425.62,3.3)*.25+Math.max(0,l-428.92),f=a-(d-425.62)*.9;e.place(-5.2,f,.16,Math.PI);let g=d>426.4;e.pose(g?{shL:[40,50],elL:30,shR:[60,20],elR:110,lean:-8,headX:-10}:Ht(tn(d,{f:1.6}),{shL:[64,4],elL:76,headX:26})),O(e,null,l,g?"medo":"determinado",{look:g?[.5,0]:[0,.6]});let E=f+1.8-(d-425.62)*4.2*1.2;if(o.position.set(-4.72,.16,E),o.rotation.y=Math.PI,o.userData.gira(d*10),r.place(-4.72,E+.05,.58,Math.PI),r.pose({hipL:[70+Math.sin(d*10)*25,6],hipR:[70-Math.sin(d*10)*25,6],knL:70,knR:70,shL:[60,10],shR:[60,10],elL:20,elR:20,lean:20}),O(r,null,l,"bravo"),!g)Ne(i,e),i.tela("xadrez",.8);else{let p=ct((d-426.4)/.7);i.position.set(-5.4-p*.5,.16+Math.max(.012,1+p*.5-p*p*1.6),f-.3-p*.4),i.rotation.set(p*9,p*5,0),i.tela(p>=1?"chamadas":"xadrez",.2)}let m=ge(428.9,429.2,l);return Yt.mundo.value=1-m,s(1-m,l),te(n,"#F0C49A",1-m),G(h,[[0,[-3.9,.95,f-1.2]],[1,[-3.7,.9,f-1.8]]],[-5.2,.75,f],c/4.87,0,0),{tint:"#FFE0C0"}}}),Y(430.49,431.47,{bg:"#F0C49A",fov:36},n=>{let t=jo(n,{hora:"tarde",tipo:"casas"}),e=zr("#2E5EB8");n.add(e);let i=Z(n,v0,0,0,0);return(s,o,r)=>{let a=-14-(s-430.49)*4;e.position.set(-4.72,.16,a),e.rotation.y=Math.PI,e.userData.gira(s*10),i.place(-4.72,a+.05,.58,Math.PI);let l={hipL:[70+Math.sin(s*10)*25,6],hipR:[70-Math.sin(s*10)*25,6],knL:70,knR:70,shL:[60,10],elL:20,shR:[160,20],elR:20,headY:110};return pe(i,"cic",s,"bravo",l,0),i.pose(l),G(r,[-4,1.3,a-3.2],[-4.72,1,a],o,0,0),{tint:"#FFE0C0"}}}),Y(431.47,439.98,{bg:"#F0C49A",fov:38},n=>{let t=jo(n,{hora:"tarde",tipo:"casas"}),e=-(426.4-416.06)*.9,i=Z(n,Rt,-5.2,e,Math.PI,.16),s=Je();n.add(s),s.position.set(-5.9,.175,e-.7),s.rotation.set(-Math.PI/2,0,.6),s.tela("chamadas",0);let o=rt(.08,.015,.005,"#E2443A",0,0,0);return n.add(o),(r,a,l)=>(i.pose({shL:[40,30],elL:40,shR:[50,-30],elR:120,lean:10,headX:30,headY:-20}),O(i,null,r,"triste",{look:[-.4,.7]}),ce(o,i,"L",[0,.08,.03]),G(l,[[0,[-4.5,2,e-2.1]],[1,[-4.6,1.85,e-1.8]]],[-5.5,.5,e-.5],a/8.51),{tint:"#FFE0C0"})}),Y(439.98,443.52,{bg:"#C8C0B8",fov:40,limpa:!1},n=>{let t=It(n,{hora:"noite"});t.tel.visible=!1;let e=Z(n,io,-2,.85,Math.PI/2),i=Z(n,ln,.4,.6,-2.4),s=vn();s.scale.setScalar(.7),n.add(s);let o=zr("#2E5EB8");n.add(o),o.position.set(-.2,0,-.4),o.rotation.y=.8;let r=Kt([i.root,s]);return(a,l,c)=>{let h=a<440.69?0:a<441.7?1:2;o.visible=h===0,e.root.visible=h===1,i.root.visible=s.visible=h===2,o.userData.gira(a*8),e.pose({shR:[90,0],elR:60+Math.abs(Math.sin(a*14))*40}),O(e,null,a,"preocupado"),i.pose({shL:[30,-40],elL:120,shR:[30,-40],elR:120,headX:10}),O(i,null,a,"triste",{look:[0,.3]}),i.root.updateMatrixWorld(!0);let u=i.hands.L.localToWorld(new x(0,-.04,.04)),d=i.hands.R.localToWorld(new x(0,-.04,.04));return s.position.copy(u).add(d).multiplyScalar(.5),s.quaternion.copy(i.root.quaternion),s.set(0),Yt.mundo.value=1,Yt.alvo.value=h===2?.85:0,r(h===2?1:0,a),te(n,"#C8C0B8",1),h===0?G(c,[.9,1,.9],[-.2,.5,-.4],(a-439.98)/.7,0,0):h===1?G(c,[-3,1.4,.3],[-2,1.2,.85],(a-440.69)/1,0,0):G(c,[[0,[-.4,1.1,-.3]],[1,[-.3,1.05,-.2]]],[.4,.75,.6],(a-441.7)/1.8,0,0),{tint:"#E0DCF4",vig:.5}}})],Pf=[Y(443.52,456.23,{bg:"#DDE6EE",fov:46,limpa:!1},n=>{let t=It(n,{hora:"tarde"}),e=Z(n,Rt,0,0,0);le(e,.85,-.1,-Math.PI/2,.42);let i=t.luzes.sol,s=[Z(n,io,0,0,0),Z(n,ln,0,0,0),Z(n,io,0,0,0)];s.forEach(r=>xs(r,.35));let o=at(.11,.09,.02,"#F4F1EA",0,0,0);return n.add(o),(r,a,l)=>{let c=a/12.71;return e.pose(en(r*4)),O(e,null,r,"determinado",{look:[0,.6]}),Ne(t.tel,e),t.tel.tela("xadrez",c),i.position.set(.4+ht(-2,2,c),2.3,-2.1),i.color.set(c>.7?"#FF9A60":"#FFF0D0"),i.intensity=c>.85?4:10,t.luzes.LG.intensity=c>.8?2:0,s.forEach((h,u)=>{let d=ct((r-(446+u*3.2))/1.6);h.root.visible=d>0&&d<1,h.place(ht(-1.4,1.4,d),.9-u*.1,0,Math.PI/2),h.pose(tn(r*3,{f:2})),O(h,null,r,"triste")}),ce(o,s[0],"R",[0,-.06,.1],!1),G(l,[[0,[-1.15,2,1.3]],[1,[-1.05,1.9,1.15]]],[.7,.8,-.1],c,0,0),{tint:c>.7?"#FFD8B0":"#FFF4E8"}}}),Y(456.23,462.08,{bg:"#E8D8B8",fov:40},n=>{let t=er(n),e=gh();e.position.set(.2,.76,.35),n.add(e);let i=Z(n,_i,.2,-.25,0),s=[0,1,2].map(o=>Z(n,Ts(o+5,{camisa:["#E57AA0","#3E7CC8","#F2994A"][o]}),-.5+o*.7,1,Math.PI));return(o,r,a)=>(i.pose(Ht(Le(o,3),{headY:50})),O(i,null,o,"triste",{look:[.8,0]}),s.forEach((l,c)=>{l.pose(Ht(Le(o,c),{shL:[40,-10],shR:[40,-10],elL:60,elR:60})),O(l,null,o,"neutro",{mouth:{open:Math.abs(Math.sin(o*4+c))*.5}})}),e.userData.chama&&(e.userData.chama.scale.y=1+Math.sin(o*15)*.2),G(a,[[0,[1.5,1.35,1.3]],[1,[1.35,1.3,1.15]]],[.2,.95,.3],r/5.85),{tint:"#FFE8C8",sat:.85})}),Y(462.08,467.68,{bg:"#DDE6EE",fov:30,limpa:!1},n=>{eo(n,{cor:"#9FD8FF"});let t=Je();return t.scale.setScalar(5),t.position.set(0,1,0),n.add(t),(e,i,s)=>(t.tela("conversa"),t.rotation.y=Math.sin(e*.6)*.15,G(s,[[0,[0,1.05,1.6]],[1,[0,1,1.25]]],[0,.98,0],i/5.6,0,0),{vig:.5})}),Y(467.68,472.84,{bg:"#E8D8B8",fov:36},n=>{let t=er(n),e=gh();e.position.set(.2,.76,.35),n.add(e);let i=Z(n,_i,.2,-.25,0),s=Je();return n.add(s),(o,r,a)=>{let l=o>471.2,c=l?{lean:20,headX:20,shL:[20,10],shR:[20,10]}:{shR:[80,10],elR:110,headX:10};return pe(i,"tiago",o,"triste",c,0,{mouth:l?{open:.4,round:1}:void 0}),i.pose(c),l?s.visible=!1:(ce(s,i,"R",[0,-.06,.06],!1),s.lookAt(a.position),s.tela("audio",(o-467.68)/3.5),s.visible=!0),e.userData.chama&&(e.userData.chama.visible=o<471.7),G(a,[[0,[.8,1.25,1.3]],[1,[.65,1.2,1.1]]],[.2,1,.1],r/5.16),{tint:"#FFE0C0",sat:.7,vig:.5}}}),Y(472.84,475.86,{bg:"#C8C0B8",fov:40},n=>{let t=It(n,{hora:"noite"});t.luzes.LG.intensity=1.6,t.portaK.abre(1);let e=Z(n,xn,-1.15,.8,Math.PI/2-.3),i=Z(n,Rt,0,0,0);le(i,.85,-.1,-Math.PI/2,.42);let s=Kt([e.root]);return(o,r,a)=>{let l=Ht($e.bracoCruzado,{tilt:6});return pe(e,"mae",o,"triste",l,0),e.pose(l),i.pose(en(o)),O(i,null,o,"determinado",{look:[0,.6]}),Ne(t.tel,i),t.tel.tela("xadrez",.7),Yt.mundo.value=1,s(.3,o),te(n,"#C8C0B8",1),G(a,[[0,[.95,1.45,1.25]],[1,[.85,1.4,1.1]]],[-.6,1.05,.5],r/3.02),{tint:"#E8E2FF"}}}),Y(475.86,477.53,{bg:"#1A1A22",fov:40},n=>{let t=It(n,{hora:"noite"}),e=Z(n,xn,-1.75,.85,-Math.PI/2+.3),i=Z(n,Rt,0,0,0);return le(i,.85,-.1,-Math.PI/2,.42),(s,o,r)=>{let a=en(s);pe(i,"gui",s,"tedio",a,0,{look:[0,.6]}),i.pose(a),Ne(t.tel,i),t.tel.tela("xadrez",.75);let l=ct((s-476.4)/.8);return e.place(-1.75-l*.6,.85,0,Math.PI/2*(l>0,-1)-Math.PI),e.pose(tn(s,{f:1.5})),O(e,null,s,"triste"),t.portaK.abre(1-ct((s-476.8)/.7)),G(r,[[0,[-.2,1.3,.9]],[1,[-.15,1.28,.8]]],[.6,1,-.1],o/1.67),{tint:"#C8D4FF",exposure:.75}}}),Y(477.53,482.48,{bg:"#2A2A34",fov:40,limpa:!1},n=>{let t=It(n,{hora:"noite",corte:!0});t.luzes.LG.intensity=1.6;let e=Z(n,Rt,0,0,0);le(e,.85,-.1,-Math.PI/2,.42);let i=Z(n,ln,0,0,0);return t.portaD.abre(0),(s,o,r)=>{e.pose(en(s)),O(e,null,s,"determinado",{look:[0,.6]}),Ne(t.tel,e),t.tel.tela("xadrez",.8);let a=ct((s-478.2)/3.5);return i.place(ht(4,1.8,a),ht(1.2,.6,a),0,-Math.PI/2-.4),i.pose(a<1?tn(s,{f:1.4,amp:.6}):Le(s,2)),O(i,null,s,"triste",{look:[-.5,.3]}),G(r,[[0,[1.6,1.5,4.2]],[1,[1.7,1.4,3.8]]],[1.6,1,.2],o/4.95,0,0),{tint:"#E8E2FF"}}}),Y(482.48,487.35,{bg:"#E8D8B8",fov:38},n=>{let t=It(n,{hora:"noite"});t.luzes.LD.intensity=1.6,t.mochila.visible=!1;let e=Z(n,ln,0,0,0);le(e,3.4,.5,-Math.PI/2+.2,.36);let i=Or("#3E7CC8");i.position.set(2.85,.1,.5),i.rotation.y=Math.PI/2,i.scale.setScalar(1.3),n.add(i);let s=vn();s.scale.setScalar(.6),n.add(s);let o=rt(.2,.04,.07,"#F2546E",0,0,0,{out:.003});return n.add(o),(r,a,l)=>{let c=ct((r-483.5)/2);e.pose(bt({shL:[ht(30,70,c),-20],elL:ht(110,30,c),shR:[40,-10],elR:80,lean:c*24,headX:20})),O(e,null,r,"triste",{look:[-.3,.7]}),e.root.updateMatrixWorld(!0);let h=e.hands.L.localToWorld(new x(0,-.04,.04));return s.position.lerpVectors(h,new x(2.85,.25,.5),c),s.rotation.set(0,Math.PI/2,0),s.set(0),s.visible=c<.95,o.position.set(2.85,ht(.75,.3,ct((r-485.6)/.8)),.5),o.visible=r>485.4,G(l,[[0,[2.2,1.2,1.35]],[1,[2.3,1.1,1.2]]],[3.05,.45,.5],a/4.87),{tint:"#FFE0C0"}}}),Y(487.35,492.32,{bg:"#E8D8B8",fov:30,perto:!0,limpa:!1},n=>{let t=It(n,{hora:"noite"});t.luzes.LD.intensity=1.6,t.mochila.visible=!1;let e=Or("#3E7CC8");e.position.set(2.85,.1,.5),e.rotation.y=Math.PI/2,e.scale.setScalar(1.3),n.add(e);let i=cf(.2,.14);i.position.set(2.85,.62,.52),i.rotation.set(-.6,0,0),n.add(i);let s=rt(.02,.03,.02,"#C9CED6",0,0,0);return n.add(s),(o,r,a)=>{let l=ct((o-489.6)/2.2);return s.position.set(2.85,.43,ht(.32,.68,l)),i.visible=l<.7,o<489.6?G(a,[[0,[2.85,1.05,.85]],[1,[2.85,.9,.75]]],[2.85,.42,.5],(o-487.35)/2.25,0,0):G(a,[2.7,.9,.85],[2.85,.42,.5],(o-489.6)/2.7,0,0),{tint:"#FFE0C0",vig:.5}}})],If=[Y(492.32,500.32,{bg:"#DDE6EE",fov:42},n=>{let t=It(n,{hora:"tarde"});t.tel.visible=!1;let e=Z(n,Rt,0,0,0);le(e,.85,-.55,-Math.PI/2,.42);let i=si(.04);i.g.position.set(.75,.45,.15),n.add(i.g);let s=Z(n,xn,0,0,0);return t.portaK.abre(1),(o,r,a)=>{e.pose(bt({shR:[40,10],elR:60,shL:[30,10],elL:40,lean:18,headX:30})),O(e,null,o,"determinado",{look:[0,.8]});let l=ct((o-492.6)/3);return o>495.8?(le(s,.55,.45,-2.6,.42),s.pose(bt({shL:[50,-20],elL:40,shR:[20,10],elR:30}))):(s.place(ht(-1.6,.4,l),ht(.85,.6,l),0,.6),s.pose(tn(o,{f:1.5}))),O(s,null,o,"preocupado",{look:[.3,0]}),G(a,[[0,[-.6,1.5,1.3]],[1,[-.45,1.4,1.1]]],[.6,.85,0],r/8),co}}),Y(500.32,510.64,{bg:"#DDE6EE",fov:36},n=>{let t=It(n,{hora:"tarde"});t.tel.visible=!1;let e=Z(n,Rt,0,0,0);le(e,.85,-.55,-Math.PI/2,.42);let i=si(.04);i.g.position.set(.75,.45,.15),n.add(i.g);let s=Z(n,xn,0,0,0);le(s,.55,.45,-2.6,.42);let o=Kt([i.g]);return(r,a,l)=>{e.pose(bt({shR:[40,10],elR:60,shL:[30,10],elL:40,lean:18,headX:30})),O(e,null,r,"determinado",{look:[0,.8]});let c=bt({shL:[50,-20],elL:40,shR:[30,10],elR:60});pe(s,"mae",r,"preocupado",c,.3),s.pose(c);let h=ge(502,509,r);return Yt.mundo.value=h,o(h,r),te(n,"#DDE6EE",h),G(l,[[0,[1,1.3,-.4]],[1,[1,1.25,-.25]]],[.5,1.1,.45],a/10.32),{...co,focus:ht(5,.3,h),range:.3,blur:h*16}}}),Y(510.64,512.06,{bg:"#DDE6EE",fov:22,perto:!0,limpa:!1},n=>{let t=It(n,{hora:"tarde"});t.tel.visible=!1;let e=Z(n,Rt,0,0,0);return le(e,.85,-.55,-Math.PI/2,.42),(i,s,o)=>{let r=bt({shR:[40,10],elR:60,lean:18,headX:30});pe(e,"gui",i,"determinado",r,0,{look:[0,.8]}),e.pose(r),e.headG.updateMatrixWorld(!0);let a=e.headG.localToWorld(new x(0,.28,.25)),l=e.headG.localToWorld(new x(0,.26,.85));return G(o,[l.x,l.y,l.z],[a.x,a.y,a.z],s/1.42,0,0),co}}),Y(512.06,514.84,{bg:"#DDE6EE",fov:40},n=>{let t=It(n,{hora:"tarde"});t.tel.visible=!1;let e=Z(n,Rt,0,0,0);le(e,.85,-.55,-Math.PI/2,.42);let i=si(.04);i.g.position.set(.75,.45,.15),n.add(i.g);let s=Z(n,xn,0,0,0);return t.portaK.abre(1),(o,r,a)=>{e.pose(bt({shR:[40,10],elR:60,lean:18,headX:30})),O(e,null,o,"determinado",{look:[0,.8]});let l=ct((o-513.2)/1.6);return o<513.2?(s.place(.6,-.35,0,-Math.PI/2-.3),s.pose({lean:30,headX:10,shL:[40,10],shR:[40,10]}),O(s,null,o,"feliz",{blink:1})):(s.place(ht(.6,-1.2,l),ht(-.35,.8,l),0,2.4),s.pose(tn(o,{f:1.6})),O(s,null,o,"feliz")),G(a,[[0,[-.5,1.45,1.1]],[1,[-.4,1.4,.95]]],[.6,.95,-.3],r/2.78),co}}),Y(514.84,520.55,{bg:"#1A1A22",fov:30,perto:!0,limpa:!1},n=>{let t=It(n,{hora:"tarde"});t.tel.visible=!1;let e=Z(n,Rt,0,0,0);le(e,.85,-.55,-Math.PI/2,.42);let i=si(.04);i.g.position.set(.75,.45,.15),n.add(i.g);let s=i.P.g8,o=Kt([s]);return(r,a,l)=>{e.pose(bt({shR:[40,10],elR:60,lean:18,headX:30})),O(e,null,r,"determinado",{look:[0,.8]}),i.move(s,"g8","f6",ct((r-515.2)/.6)),Yt.mundo.value=.9,o(1,r),te(n,"#1A1A22",.9),i.g.updateMatrixWorld(!0);let c=s.getWorldPosition(new x),h=En(ct((r-517.8)/.35));return G(l,[c.x+ht(.6,.22,h),c.y+ht(.5,.14,h),c.z+ht(.6,.2,h)],[c.x,c.y+.03,c.z],a/5.71,0,0),{vig:.55,focus:ht(.9,.3,h),range:.15,blur:10}}}),Y(520.55,530.8,{bg:"#2A2A34",fov:40,limpa:!1},n=>{let t=It(n,{hora:"noite",corte:!0});t.luzes.LG.intensity=1.6,t.luzes.LD.intensity=1.6,t.tel.visible=!1;let e=Z(n,Rt,0,0,0);le(e,.85,-.55,-Math.PI/2,.42);let i=si(.04);i.g.position.set(.75,.45,.15),n.add(i.g);let s=Z(n,ln,2.1,-.7,Math.PI),o=vn();return o.scale.setScalar(.6),n.add(o),(r,a,l)=>{e.pose(bt({shR:[40,10],elR:60,lean:18,headX:30})),O(e,null,r,"determinado",{look:[0,.8]});let c=Math.floor((r-520.5)/2.3)%2===1;s.pose(Ht(Le(r,2),{shL:[70,-10],elL:60,shR:[70,-10],elR:60,headX:c?10:-4})),O(s,null,r,c?"preocupado":"feliz",{mouth:{open:Math.abs(Math.sin(r*8))*.35}}),s.root.updateMatrixWorld(!0);let h=s.hands.L.localToWorld(new x(0,-.04,.04)),u=s.hands.R.localToWorld(new x(0,-.04,.04));return o.position.copy(h).add(u).multiplyScalar(.5),o.quaternion.copy(s.root.quaternion),o.rotateY(Math.PI),o.set(0),r<527?G(l,[[0,[1.5,1.6,4.4]],[1,[1.5,1.5,4]]],[1.5,1,-.3],(r-520.55)/6.45,0,0):G(l,[[0,[2.45,1.05,-1.35]],[1,[2.4,1,-1.3]]],[2.1,.78,-.7],(r-527)/3.8,0,0),{tint:"#E8E2FF"}}})];var xh=(n,t)=>Y(n,n+1,{bg:"#DDE6EE",fov:50,limpa:!1,perto:!0},e=>{let i=It(e,{hora:"tarde"}),s=Z(e,Rt,0,0,0);cn(s);let o=he(.02,"#FF0000");return e.add(o),(r,a,l)=>{s.pose(en(r)),O(s,null,r,"neutro"),Ne(i.tel,s),i.tel.tela("chat",.5);let c=[0,0,0];return o.position.set(...c),G(l,t,[-.8,1,.25],0,0,0),{}}}),Df=[xh(0,[-.7,1.3,1.4]),xh(1,[-.75,2.3,.26]),xh(2,[.6,1.4,.25])];var Lf=location.search.includes("teste")?Df:[...Af,...Sf,...Rf,...xf,...wf,...Ff,...Pf,...If];window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(t=>document.fonts.load(t))).catch(()=>{});let n=new e0(document.getElementById("film3d"));for(let t of Lf)n.add(t);window.addEventListener("hf-seek",t=>n.render(t.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
