var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var J0="170";var au=0,Hc=1,lu=2;var Qd=1,Q0=2,yi=3,Ji=0,$e=1,_e=2,oi=0,Zi=1,Si=2,Gc=3,Vc=4,cu=5,Es=100,du=101,hu=102,uu=103,fu=104,pu=200,mu=201,gu=202,xu=203,Al=204,wl=205,vu=206,_u=207,yu=208,Eu=209,Mu=210,bu=211,Su=212,Tu=213,Au=214,Rl=0,Cl=1,Pl=2,lr=3,Fl=4,Il=5,Ll=6,Dl=7,Kd=0,wu=1,Ru=2,ai=0,Cu=1,Pu=2,Fu=3,Iu=4,Lu=5,Du=6,Uu=7;var jd=300,cr=301,dr=302,Ul=303,Bl=304,ba=306,Cn=1e3,bs=1001,Nl=1002,mn=1003,Bu=1004;var uo=1005;var si=1006,Wa=1007;var Ss=1008;var Ti=1009,th=1010,eh=1011,Yr=1012,K0=1013,Ai=1014,ri=1015,Mn=1016,j0=1017,tc=1018,hr=1020,nh=35902,ih=1021,sh=1022,Rn=1023,rh=1024,oh=1025,rr=1026,ur=1027,ec=1028,nc=1029,ah=1030,ic=1031;var sc=1033,Ho=33776,Go=33777,Vo=33778,Wo=33779,Ol=35840,zl=35841,kl=35842,Hl=35843,Gl=36196,Vl=37492,Wl=37496,Xl=37808,ql=37809,Yl=37810,Zl=37811,$l=37812,Jl=37813,Ql=37814,Kl=37815,jl=37816,t0=37817,e0=37818,n0=37819,i0=37820,s0=37821,Xo=36492,r0=36494,o0=36495,lh=36283,a0=36284,l0=36285,c0=36286;var qo=2300,d0=2301,Xa=2302,Wc=2400,Xc=2401,qc=2402;var Nu=3200,ch=3201;var dh=0,Ou=1,qi="",Ce="srgb",es="srgb-linear",Sa="linear",Ee="srgb";var zs=7680;var Yc=519,zu=512,ku=513,Hu=514,hh=515,Gu=516,Vu=517,Wu=518,Xu=519,h0=35044;var Zc="300 es",Mi=2e3,Yo=2001,Qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qa=Math.PI/180,Zo=180/Math.PI;function $i(){let i=__sr()*4294967295|0,t=__sr()*4294967295|0,e=__sr()*4294967295|0,n=__sr()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function je(i,t,e){return Math.max(t,Math.min(e,i))}function qu(i,t){return(i%t+t)%t}function Ya(i,t,e){return(1-e)*i+e*t}function ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],f=n[2],u=n[5],m=n[8],x=s[0],g=s[3],p=s[6],_=s[1],y=s[4],v=s[7],C=s[2],T=s[5],w=s[8];return r[0]=o*x+a*_+l*C,r[3]=o*g+a*y+l*T,r[6]=o*p+a*v+l*w,r[1]=c*x+d*_+h*C,r[4]=c*g+d*y+h*T,r[7]=c*p+d*v+h*w,r[2]=f*x+u*_+m*C,r[5]=f*g+u*y+m*T,r[8]=f*p+u*v+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=d*o-a*c,f=a*l-d*r,u=c*r-o*l,m=e*h+n*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=h*x,t[1]=(s*c-d*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(d*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=u*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Za.makeScale(t,e)),this}rotate(t){return this.premultiply(Za.makeRotation(-t)),this}translate(t,e){return this.premultiply(Za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Za=new Zt;function uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yu(){let i=$o("canvas");return i.style.display="block",i}var $c={};function Gr(i){i in $c||($c[i]=!0,console.warn(i))}function Zu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function $u(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ju(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ae={enabled:!0,workingColorSpace:es,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ee&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ee&&(i.r=or(i.r),i.g=or(i.g),i.b=or(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qi?Sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Jc=[.64,.33,.3,.6,.15,.06],Qc=[.2126,.7152,.0722],Kc=[.3127,.329],jc=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[es]:{primaries:Jc,whitePoint:Kc,transfer:Sa,toXYZ:jc,fromXYZ:td,luminanceCoefficients:Qc,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:Jc,whitePoint:Kc,transfer:Ee,toXYZ:jc,fromXYZ:td,luminanceCoefficients:Qc,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});var ks,u0=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ks===void 0&&(ks=$o("canvas")),ks.width=t.width,ks.height=t.height;let n=ks.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ks}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$o("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qu=0,Jo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($a(s[o].image)):r.push($a(s[o]))}else r=$a(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function $a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?u0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ku=0,En=class i extends Qi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bs,s=bs,r=si,o=Ss,a=Rn,l=Ti,c=i.DEFAULT_ANISOTROPY,d=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=$i(),this.name="",this.source=new Jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cn:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case Nl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cn:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case Nl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=jd;En.DEFAULT_ANISOTROPY=1;var be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],d=l[4],h=l[8],f=l[1],u=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(u+1)/2,C=(p+1)/2,T=(d+f)/4,w=(h+x)/4,F=(m+g)/4;return y>v&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=w/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=F/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=F/r),this.set(n,s,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-x)/_,this.z=(f-d)/_,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},f0=class extends Qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new En(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Jo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Je=class extends f0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qo=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var p0=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3],f=r[o+0],u=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=u,t[e+2]=m,t[e+3]=x;return}if(h!==x||l!==f||c!==u||d!==m){let g=1-a,p=l*f+c*u+d*m+h*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let C=Math.sqrt(y),T=Math.atan2(C,p*_);g=Math.sin(g*T)/C,a=Math.sin(a*T)/C}let v=a*_;if(l=l*g+f*v,c=c*g+u*v,d=d*g+m*v,h=h*g+x*v,g===1-a){let C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return t[e]=a*m+d*h+l*u-c*f,t[e+1]=l*m+d*f+c*h-a*u,t[e+2]=c*m+d*u+a*f-l*h,t[e+3]=d*m-a*h-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),h=a(r/2),f=l(n/2),u=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*d*h+c*u*m,this._y=c*u*h-f*d*m,this._z=c*d*m+f*u*h,this._w=c*d*h-f*u*m;break;case"YXZ":this._x=f*d*h+c*u*m,this._y=c*u*h-f*d*m,this._z=c*d*m-f*u*h,this._w=c*d*h+f*u*m;break;case"ZXY":this._x=f*d*h-c*u*m,this._y=c*u*h+f*d*m,this._z=c*d*m+f*u*h,this._w=c*d*h-f*u*m;break;case"ZYX":this._x=f*d*h-c*u*m,this._y=c*u*h+f*d*m,this._z=c*d*m-f*u*h,this._w=c*d*h+f*u*m;break;case"YZX":this._x=f*d*h+c*u*m,this._y=c*u*h+f*d*m,this._z=c*d*m-f*u*h,this._w=c*d*h-f*u*m;break;case"XZY":this._x=f*d*h-c*u*m,this._y=c*u*h-f*d*m,this._z=c*d*m+f*u*h,this._w=c*d*h+f*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10],f=n+a+h;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(d-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>h){let u=2*Math.sqrt(1+n-a-h);this._w=(d-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>h){let u=2*Math.sqrt(1+a-n-h);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+d)/u}else{let u=2*Math.sqrt(1+h-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-e)*d)/c,f=Math.sin(e*d)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*__sr(),e=2*Math.PI*__sr(),n=__sr(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ed.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ed.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),d=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*d,this.y=n+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let t=__sr()*Math.PI*2,e=__sr()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ja=new R,ed=new $n,wi=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fo.copy(n.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),po.subVectors(this.max,Ir),Hs.subVectors(t.a,Ir),Gs.subVectors(t.b,Ir),Vs.subVectors(t.c,Ir),ki.subVectors(Gs,Hs),Hi.subVectors(Vs,Gs),ps.subVectors(Hs,Vs);let e=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-ps.z,ps.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,ps.z,0,-ps.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-ps.y,ps.x,0];return!Qa(e,Hs,Gs,Vs,po)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,Hs,Gs,Vs,po))?!1:(mo.crossVectors(ki,Hi),e=[mo.x,mo.y,mo.z],Qa(e,Hs,Gs,Vs,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},mi=[new R,new R,new R,new R,new R,new R,new R,new R],qn=new R,fo=new wi,Hs=new R,Gs=new R,Vs=new R,ki=new R,Hi=new R,ps=new R,Ir=new R,po=new R,mo=new R,ms=new R;function Qa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ms.fromArray(i,r);let a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=t.dot(ms),c=e.dot(ms),d=n.dot(ms);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var ju=new wi,Lr=new R,Ka=new R,Ki=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ju.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);let e=Lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(Ka)),this.expandByPoint(Lr.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},gi=new R,ja=new R,go=new R,Gi=new R,tl=new R,xo=new R,el=new R,Ko=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ja.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),Gi.copy(this.origin).sub(ja);let r=t.distanceTo(e)*.5,o=-this.direction.dot(go),a=Gi.dot(this.direction),l=-Gi.dot(go),c=Gi.lengthSq(),d=Math.abs(1-o*o),h,f,u,m;if(d>0)if(h=o*l-a,f=o*a-l,m=r*d,h>=0)if(f>=-m)if(f<=m){let x=1/d;h*=x,f*=x,u=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),u=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),u=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),u=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ja).addScaledVector(go,f),u}intersectSphere(t,e){gi.subVectors(t.center,this.origin);let n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,s,r){tl.subVectors(e,t),xo.subVectors(n,t),el.crossVectors(tl,xo);let o=this.direction.dot(el),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,t);let l=a*this.direction.dot(xo.crossVectors(Gi,xo));if(l<0)return null;let c=a*this.direction.dot(tl.cross(Gi));if(c<0||l+c>o)return null;let d=-a*Gi.dot(el);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,o,a,l,c,d,h,f,u,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,d,h,f,u,m,x,g)}set(t,e,n,s,r,o,a,l,c,d,h,f,u,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=f,p[3]=u,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ws.setFromMatrixColumn(t,0).length(),r=1/Ws.setFromMatrixColumn(t,1).length(),o=1/Ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*d,u=o*h,m=a*d,x=a*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=u+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*d,u=l*h,m=c*d,x=c*h;e[0]=f+x*a,e[4]=m*a-u,e[8]=o*c,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=u*a-m,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*d,u=l*h,m=c*d,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=m+u*a,e[1]=u+m*a,e[5]=o*d,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*d,u=o*h,m=a*d,x=a*h;e[0]=l*d,e[4]=m*c-u,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=u*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,m=a*l,x=a*c;e[0]=l*d,e[4]=x-f*h,e[8]=m*h+u,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=u*h+m,e[10]=f-x*h}else if(t.order==="XZY"){let f=o*l,u=o*c,m=a*l,x=a*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=f*h+x,e[5]=o*d,e[9]=u*h-m,e[2]=m*h-u,e[6]=a*d,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tf,t,ef)}lookAt(t,e,n){let s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Vi.crossVectors(n,An),Vi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Vi.crossVectors(n,An)),Vi.normalize(),vo.crossVectors(An,Vi),s[0]=Vi.x,s[4]=vo.x,s[8]=An.x,s[1]=Vi.y,s[5]=vo.y,s[9]=An.y,s[2]=Vi.z,s[6]=vo.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],f=n[9],u=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],y=n[7],v=n[11],C=n[15],T=s[0],w=s[4],F=s[8],S=s[12],M=s[1],P=s[5],V=s[9],O=s[13],I=s[2],G=s[6],N=s[10],Z=s[14],k=s[3],rt=s[7],ut=s[11],Pt=s[15];return r[0]=o*T+a*M+l*I+c*k,r[4]=o*w+a*P+l*G+c*rt,r[8]=o*F+a*V+l*N+c*ut,r[12]=o*S+a*O+l*Z+c*Pt,r[1]=d*T+h*M+f*I+u*k,r[5]=d*w+h*P+f*G+u*rt,r[9]=d*F+h*V+f*N+u*ut,r[13]=d*S+h*O+f*Z+u*Pt,r[2]=m*T+x*M+g*I+p*k,r[6]=m*w+x*P+g*G+p*rt,r[10]=m*F+x*V+g*N+p*ut,r[14]=m*S+x*O+g*Z+p*Pt,r[3]=_*T+y*M+v*I+C*k,r[7]=_*w+y*P+v*G+C*rt,r[11]=_*F+y*V+v*N+C*ut,r[15]=_*S+y*O+v*Z+C*Pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],h=t[6],f=t[10],u=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*u-n*l*u)+x*(+e*l*u-e*c*f+r*o*f-s*o*u+s*c*d-r*l*d)+g*(+e*c*h-e*a*u-r*o*h+n*o*u+r*a*d-n*c*d)+p*(-s*a*d-e*l*h+e*a*f+s*o*h-n*o*f+n*l*d)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=t[9],f=t[10],u=t[11],m=t[12],x=t[13],g=t[14],p=t[15],_=h*g*c-x*f*c+x*l*u-a*g*u-h*l*p+a*f*p,y=m*f*c-d*g*c-m*l*u+o*g*u+d*l*p-o*f*p,v=d*x*c-m*h*c+m*a*u-o*x*u-d*a*p+o*h*p,C=m*h*l-d*x*l-m*a*f+o*x*f+d*a*g-o*h*g,T=e*_+n*y+s*v+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=_*w,t[1]=(x*f*r-h*g*r-x*s*u+n*g*u+h*s*p-n*f*p)*w,t[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*w,t[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*u-n*l*u)*w,t[4]=y*w,t[5]=(d*g*r-m*f*r+m*s*u-e*g*u-d*s*p+e*f*p)*w,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*w,t[7]=(o*f*r-d*l*r+d*s*c-e*f*c-o*s*u+e*l*u)*w,t[8]=v*w,t[9]=(m*h*r-d*x*r-m*n*u+e*x*u+d*n*p-e*h*p)*w,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*p+e*a*p)*w,t[11]=(d*a*r-o*h*r-d*n*c+e*h*c+o*n*u-e*a*u)*w,t[12]=C*w,t[13]=(d*x*s-m*h*s+m*n*f-e*x*f-d*n*g+e*h*g)*w,t[14]=(m*a*s-o*x*s-m*n*l+e*x*l+o*n*g-e*a*g)*w,t[15]=(o*h*s-d*a*s+d*n*l-e*h*l-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,h=a+a,f=r*c,u=r*d,m=r*h,x=o*d,g=o*h,p=a*h,_=l*c,y=l*d,v=l*h,C=n.x,T=n.y,w=n.z;return s[0]=(1-(x+p))*C,s[1]=(u+v)*C,s[2]=(m-y)*C,s[3]=0,s[4]=(u-v)*T,s[5]=(1-(f+p))*T,s[6]=(g+_)*T,s[7]=0,s[8]=(m+y)*w,s[9]=(g-_)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ws.set(s[0],s[1],s[2]).length(),o=Ws.set(s[4],s[5],s[6]).length(),a=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Yn.copy(this);let c=1/r,d=1/o,h=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,e.setFromRotationMatrix(Yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Mi){let l=this.elements,c=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),u,m;if(a===Mi)u=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Yo)u=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Mi){let l=this.elements,c=1/(e-t),d=1/(n-s),h=1/(o-r),f=(e+t)*c,u=(n+s)*d,m,x;if(a===Mi)m=(o+r)*h,x=-2*h;else if(a===Yo)m=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ws=new R,Yn=new le,tf=new R(0,0,0),ef=new R(1,1,1),Vi=new R,vo=new R,An=new R,nd=new le,id=new $n,Jn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return id.setFromEuler(this),this.setFromQuaternion(id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var jo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nf=0,sd=new R,Xs=new $n,xi=new le,_o=new R,Dr=new R,sf=new R,rf=new $n,rd=new R(1,0,0),od=new R(0,1,0),ad=new R(0,0,1),ld={type:"added"},of={type:"removed"},qs={type:"childadded",child:null},nl={type:"childremoved",child:null},Ve=class i extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Jn,n=new $n,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Zt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.premultiply(Xs),this}rotateX(t){return this.rotateOnAxis(rd,t)}rotateY(t){return this.rotateOnAxis(od,t)}rotateZ(t){return this.rotateOnAxis(ad,t)}translateOnAxis(t,e){return sd.copy(t).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rd,t)}translateY(t){return this.translateOnAxis(od,t)}translateZ(t){return this.translateOnAxis(ad,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_o.copy(t):_o.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Dr,_o,this.up):xi.lookAt(_o,Dr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(xi),this.quaternion.premultiply(Xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ld),qs.child=t,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(of),nl.child=t,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ld),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),h=o(t.shapes),f=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new R(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new R,vi=new R,il=new R,_i=new R,Ys=new R,Zs=new R,cd=new R,sl=new R,rl=new R,ol=new R,al=new be,ll=new be,cl=new be,Yi=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Zn.subVectors(t,e),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Zn.subVectors(s,e),vi.subVectors(n,e),il.subVectors(t,e);let o=Zn.dot(Zn),a=Zn.dot(vi),l=Zn.dot(il),c=vi.dot(vi),d=vi.dot(il),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,u=(c*l-a*d)*f,m=(o*d-a*l)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return al.setScalar(0),ll.setScalar(0),cl.setScalar(0),al.fromBufferAttribute(t,e),ll.fromBufferAttribute(t,n),cl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(al,r.x),o.addScaledVector(ll,r.y),o.addScaledVector(cl,r.z),o}static isFrontFacing(t,e,n,s){return Zn.subVectors(n,e),vi.subVectors(t,e),Zn.cross(vi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Zn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ys.subVectors(s,n),Zs.subVectors(r,n),sl.subVectors(t,n);let l=Ys.dot(sl),c=Zs.dot(sl);if(l<=0&&c<=0)return e.copy(n);rl.subVectors(t,s);let d=Ys.dot(rl),h=Zs.dot(rl);if(d>=0&&h<=d)return e.copy(s);let f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(Ys,o);ol.subVectors(t,r);let u=Ys.dot(ol),m=Zs.dot(ol);if(m>=0&&u<=m)return e.copy(r);let x=u*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Zs,a);let g=d*m-u*h;if(g<=0&&h-d>=0&&u-m>=0)return cd.subVectors(r,s),a=(h-d)/(h-d+(u-m)),e.copy(s).addScaledVector(cd,a);let p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Ys,o).addScaledVector(Zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=qu(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=dl(o,r,t+1/3),this.g=dl(o,r,t),this.b=dl(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=fh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ae.fromWorkingColorSpace(an.copy(this),t),Math.round(je(an.r*255,0,255))*65536+Math.round(je(an.g*255,0,255))*256+Math.round(je(an.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(an.copy(this),e);let n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Ce){ae.fromWorkingColorSpace(an.copy(this),t);let e=an.r,n=an.g,s=an.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(yo);let n=Ya(Wi.h,yo.h,e),s=Ya(Wi.s,yo.s,e),r=Ya(Wi.l,yo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new zt;zt.NAMES=fh;var af=0,Ri=class extends Qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=$i(),this.name="",this.blending=Zi,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=wl,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Al&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==Es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Xt=class extends Ri{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ge=new R,Eo=new ot,en=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=h0,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==h0&&(t.usage=this.usage),t}};var ta=class extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ea=class extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}},lf=0,Nn=new le,hl=new Ve,$s=new R,wn=new wi,Ur=new wi,Ze=new R,Ue=class i extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uh(t)?ea:ta)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return hl.lookAt(t),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(wn.min,Ur.min),wn.expandByPoint(Ze),Ze.addVectors(wn.max,Ur.max),wn.expandByPoint(Ze)):(wn.expandByPoint(Ur.min),wn.expandByPoint(Ur.max))}wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ze.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(t,c),Ze.add($s)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new R,l[F]=new R;let c=new R,d=new R,h=new R,f=new ot,u=new ot,m=new ot,x=new R,g=new R;function p(F,S,M){c.fromBufferAttribute(n,F),d.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,F),u.fromBufferAttribute(r,S),m.fromBufferAttribute(r,M),d.sub(c),h.sub(c),u.sub(f),m.sub(f);let P=1/(u.x*m.y-m.x*u.y);isFinite(P)&&(x.copy(d).multiplyScalar(m.y).addScaledVector(h,-u.y).multiplyScalar(P),g.copy(h).multiplyScalar(u.x).addScaledVector(d,-m.x).multiplyScalar(P),a[F].add(x),a[S].add(x),a[M].add(x),l[F].add(g),l[S].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let F=0,S=_.length;F<S;++F){let M=_[F],P=M.start,V=M.count;for(let O=P,I=P+V;O<I;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let y=new R,v=new R,C=new R,T=new R;function w(F){C.fromBufferAttribute(s,F),T.copy(C);let S=a[F];y.copy(S),y.sub(C.multiplyScalar(C.dot(S))).normalize(),v.crossVectors(T,S);let P=v.dot(l[F])<0?-1:1;o.setXYZW(F,y.x,y.y,y.z,P)}for(let F=0,S=_.length;F<S;++F){let M=_[F],P=M.start,V=M.count;for(let O=P,I=P+V;O<I;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,d=new R,h=new R;if(t)for(let f=0,u=t.count;f<u;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){let c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d),u=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*d;for(let p=0;p<d;p++)f[m++]=c[u++]}return new en(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){let f=c[d],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){let u=c[h];d.push(u.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],h=r[c];for(let f=0,u=h.length;f<u;f++)d.push(h[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,d=o.length;c<d;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dd=new le,gs=new Ko,Mo=new Ki,hd=new R,bo=new R,So=new R,To=new R,ul=new R,Ao=new R,ud=new R,wo=new R,it=class extends Ve{constructor(t=new Ue,e=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],h=r[l];d!==0&&(ul.fromBufferAttribute(h,t),o?Ao.addScaledVector(ul,d):Ao.addScaledVector(ul.sub(e),d))}e.add(Ao)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),gs.copy(t.ray).recast(t.near),!(Mo.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Mo,hd)===null||gs.origin.distanceToSquared(hd)>(t.far-t.near)**2))&&(dd.copy(r).invert(),gs.copy(t.ray).applyMatrix4(dd),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],_=Math.max(g.start,u.start),y=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let v=_,C=y;v<C;v+=3){let T=a.getX(v),w=a.getX(v+1),F=a.getX(v+2);s=Ro(this,p,t,n,c,d,h,T,w,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let g=m,p=x;g<p;g+=3){let _=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);s=Ro(this,o,t,n,c,d,h,_,y,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],_=Math.max(g.start,u.start),y=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let v=_,C=y;v<C;v+=3){let T=v,w=v+1,F=v+2;s=Ro(this,p,t,n,c,d,h,T,w,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let g=m,p=x;g<p;g+=3){let _=g,y=g+1,v=g+2;s=Ro(this,o,t,n,c,d,h,_,y,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function cf(i,t,e,n,s,r,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ji,a),l===null)return null;wo.copy(a),wo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wo);return c<e.near||c>e.far?null:{distance:c,point:wo.clone(),object:i}}function Ro(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,bo),i.getVertexPosition(l,So),i.getVertexPosition(c,To);let d=cf(i,t,e,n,bo,So,To,ud);if(d){let h=new R;Yi.getBarycoord(ud,bo,So,To,h),s&&(d.uv=Yi.getInterpolatedAttribute(s,a,l,c,h,new ot)),r&&(d.uv1=Yi.getInterpolatedAttribute(r,a,l,c,h,new ot)),o&&(d.normal=Yi.getInterpolatedAttribute(o,a,l,c,h,new R),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new R,materialIndex:0};Yi.getNormal(bo,So,To,f.normal),d.face=f,d.barycoord=h}return d}var We=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],h=[],f=0,u=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(h,2));function m(x,g,p,_,y,v,C,T,w,F,S){let M=v/w,P=C/F,V=v/2,O=C/2,I=T/2,G=w+1,N=F+1,Z=0,k=0,rt=new R;for(let ut=0;ut<N;ut++){let Pt=ut*P-O;for(let Vt=0;Vt<G;Vt++){let xe=Vt*M-V;rt[x]=xe*_,rt[g]=Pt*y,rt[p]=I,c.push(rt.x,rt.y,rt.z),rt[x]=0,rt[g]=0,rt[p]=T>0?1:-1,d.push(rt.x,rt.y,rt.z),h.push(Vt/w),h.push(1-ut/F),Z+=1}}for(let ut=0;ut<F;ut++)for(let Pt=0;Pt<w;Pt++){let Vt=f+Pt+G*ut,xe=f+Pt+G*(ut+1),$=f+(Pt+1)+G*(ut+1),ct=f+(Pt+1)+G*ut;l.push(Vt,xe,ct),l.push(xe,$,ct),k+=6}a.addGroup(u,k,S),u+=k,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function pn(i){let t={};for(let e=0;e<i.length;e++){let n=fr(i[e]);for(let s in n)t[s]=n[s]}return t}function df(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ph(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var _r={clone:fr,merge:pn},hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Ri{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},na=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new R,fd=new ot,pd=new ot,tn=class extends na{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,fd,pd),e.subVectors(pd,fd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Js=-90,Qs=1,m0=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Js,Qs,t,e);s.layers=this.layers,this.add(s);let r=new tn(Js,Qs,t,e);r.layers=this.layers,this.add(r);let o=new tn(Js,Qs,t,e);o.layers=this.layers,this.add(o);let a=new tn(Js,Qs,t,e);a.layers=this.layers,this.add(a);let l=new tn(Js,Qs,t,e);l.layers=this.layers,this.add(l);let c=new tn(Js,Qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ia=class extends En{constructor(t,e,n,s,r,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:cr,super(t,e,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},g0=class extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ia(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new We(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:oi});r.uniforms.tEquirect.value=e;let o=new it(s,r),a=e.minFilter;return e.minFilter===Ss&&(e.minFilter=si),new m0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},fl=new R,ff=new R,pf=new Zt,Ei=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=fl.subVectors(n,e).cross(ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(fl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pf.getNormalMatrix(t),s=this.coplanarPoint(fl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xs=new Ki,Co=new R,Zr=class{constructor(t=new Ei,e=new Ei,n=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],h=s[6],f=s[7],u=s[8],m=s[9],x=s[10],g=s[11],p=s[12],_=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,g-u,v-p).normalize(),n[1].setComponents(l+r,f+c,g+u,v+p).normalize(),n[2].setComponents(l+o,f+d,g+m,v+_).normalize(),n[3].setComponents(l-o,f-d,g-m,v-_).normalize(),n[4].setComponents(l-a,f-h,g-x,v-y).normalize(),e===Mi)n[5].setComponents(l+a,f+h,g+x,v+y).normalize();else if(e===Yo)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Co.x=s.normal.x>0?t.max.x:t.min.x,Co.y=s.normal.y>0?t.max.y:t.min.y,Co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function mh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.__noRaf(s)}return{start:function(){t!==!0&&e!==null&&(n=i.__noRaf(s),t=!0)},stop:function(){i.__noCaf(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function mf(i){let t=new WeakMap;function e(a,l){let c=a.array,d=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let d=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,d);else{h.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<h.length;u++){let m=h[f],x=h[u];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let u=0,m=h.length;u<m;u++){let x=h[u];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Dt=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,h=t/a,f=e/l,u=[],m=[],x=[],g=[];for(let p=0;p<d;p++){let _=p*f-o;for(let y=0;y<c;y++){let v=y*h-r;m.push(v,-_,0),x.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let y=_+c*p,v=_+c*(p+1),C=_+1+c*(p+1),T=_+1+c*p;u.push(y,v,T),u.push(v,C,T)}this.setIndex(u),this.setAttribute("position",new ee(m,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
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
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
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
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Pf=`#ifdef USE_BUMPMAP
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zf=`#define PI 3.141592653589793
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
} // validated`,kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hf=`vec3 transformedNormal = objectNormal;
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
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
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
}`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
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
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
#endif`,pp=`struct PhysicalMaterial {
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
}`,mp=`
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tp=`#if defined( USE_POINTS_UV )
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
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
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
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t1=`float getShadowMask() {
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
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n1=`#ifdef USE_SKINNING
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
#endif`,i1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s1=`#ifdef USE_SKINNING
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
#endif`,r1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c1=`#ifdef USE_TRANSMISSION
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
#endif`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,m1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g1=`uniform sampler2D t2D;
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`#include <common>
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
}`,M1=`#if DEPTH_PACKING == 3200
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
}`,b1=`#define DISTANCE
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
}`,S1=`#define DISTANCE
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`uniform float scale;
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
}`,R1=`uniform vec3 diffuse;
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
}`,C1=`#include <common>
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
}`,P1=`uniform vec3 diffuse;
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
}`,F1=`#define LAMBERT
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
}`,I1=`#define LAMBERT
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
}`,L1=`#define MATCAP
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
}`,D1=`#define MATCAP
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
}`,U1=`#define NORMAL
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
}`,B1=`#define NORMAL
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
}`,N1=`#define PHONG
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
}`,O1=`#define PHONG
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
}`,z1=`#define STANDARD
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
}`,k1=`#define STANDARD
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
}`,H1=`#define TOON
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
}`,G1=`#define TOON
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
}`,V1=`uniform float size;
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
}`,W1=`uniform vec3 diffuse;
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
}`,X1=`#include <common>
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
}`,q1=`uniform vec3 color;
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
}`,Y1=`uniform float rotation;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:gf,alphahash_pars_fragment:xf,alphamap_fragment:vf,alphamap_pars_fragment:_f,alphatest_fragment:yf,alphatest_pars_fragment:Ef,aomap_fragment:Mf,aomap_pars_fragment:bf,batching_pars_vertex:Sf,batching_vertex:Tf,begin_vertex:Af,beginnormal_vertex:wf,bsdfs:Rf,iridescence_fragment:Cf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Ff,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Df,color_fragment:Uf,color_pars_fragment:Bf,color_pars_vertex:Nf,color_vertex:Of,common:zf,cube_uv_reflection_fragment:kf,defaultnormal_vertex:Hf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Vf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Xf,colorspace_fragment:qf,colorspace_pars_fragment:Yf,envmap_fragment:Zf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Jf,envmap_pars_vertex:Qf,envmap_physical_pars_fragment:lp,envmap_vertex:Kf,fog_vertex:jf,fog_pars_vertex:tp,fog_fragment:ep,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:rp,lights_lambert_pars_fragment:op,lights_pars_begin:ap,lights_toon_fragment:cp,lights_toon_pars_fragment:dp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:xp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:Ep,map_fragment:Mp,map_pars_fragment:bp,map_particle_fragment:Sp,map_particle_pars_fragment:Tp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:wp,morphinstance_vertex:Rp,morphcolor_vertex:Cp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Fp,morphtarget_vertex:Ip,normal_fragment_begin:Lp,normal_fragment_maps:Dp,normal_pars_fragment:Up,normal_pars_vertex:Bp,normal_vertex:Np,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:kp,clearcoat_pars_fragment:Hp,iridescence_pars_fragment:Gp,opaque_fragment:Vp,packing:Wp,premultiplied_alpha_fragment:Xp,project_vertex:qp,dithering_fragment:Yp,dithering_pars_fragment:Zp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:Kp,shadowmap_vertex:jp,shadowmask_pars_fragment:t1,skinbase_vertex:e1,skinning_pars_vertex:n1,skinning_vertex:i1,skinnormal_vertex:s1,specularmap_fragment:r1,specularmap_pars_fragment:o1,tonemapping_fragment:a1,tonemapping_pars_fragment:l1,transmission_fragment:c1,transmission_pars_fragment:d1,uv_pars_fragment:h1,uv_pars_vertex:u1,uv_vertex:f1,worldpos_vertex:p1,background_vert:m1,background_frag:g1,backgroundCube_vert:x1,backgroundCube_frag:v1,cube_vert:_1,cube_frag:y1,depth_vert:E1,depth_frag:M1,distanceRGBA_vert:b1,distanceRGBA_frag:S1,equirect_vert:T1,equirect_frag:A1,linedashed_vert:w1,linedashed_frag:R1,meshbasic_vert:C1,meshbasic_frag:P1,meshlambert_vert:F1,meshlambert_frag:I1,meshmatcap_vert:L1,meshmatcap_frag:D1,meshnormal_vert:U1,meshnormal_frag:B1,meshphong_vert:N1,meshphong_frag:O1,meshphysical_vert:z1,meshphysical_frag:k1,meshtoon_vert:H1,meshtoon_frag:G1,points_vert:V1,points_frag:W1,shadow_vert:X1,shadow_frag:q1,sprite_vert:Y1,sprite_frag:Z1},ft={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ni={basic:{uniforms:pn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:pn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:pn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:pn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:pn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new zt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:pn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:pn([ft.points,ft.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:pn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:pn([ft.common,ft.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:pn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:pn([ft.sprite,ft.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:pn([ft.common,ft.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:pn([ft.lights,ft.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};ni.physical={uniforms:pn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Po={r:0,b:0,g:0},vs=new Jn,$1=new le;function J1(i,t,e,n,s,r,o){let a=new zt(0),l=r===!0?0:1,c,d,h=null,f=0,u=null;function m(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1,v=m(_);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,y){let v=m(y);v&&(v.isCubeTexture||v.mapping===ba)?(d===void 0&&(d=new it(new We(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:fr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),vs.copy(y.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4($1.makeRotationFromEuler(vs)),d.material.toneMapped=ae.getTransfer(v.colorSpace)!==Ee,(h!==v||f!==v.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new it(new Dt(2,2),new Xe({name:"BackgroundMaterial",uniforms:fr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ae.getTransfer(v.colorSpace)!==Ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(Po,ph(i)),n.buffers.color.setClear(Po.r,Po.g,Po.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:g}}function Q1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,P,V,O,I){let G=!1,N=h(O,V,P);r!==N&&(r=N,c(r.object)),G=u(M,O,V,I),G&&m(M,O,V,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(M,P,V,O),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function h(M,P,V){let O=V.wireframe===!0,I=n[M.id];I===void 0&&(I={},n[M.id]=I);let G=I[P.id];G===void 0&&(G={},I[P.id]=G);let N=G[O];return N===void 0&&(N=f(l()),G[O]=N),N}function f(M){let P=[],V=[],O=[];for(let I=0;I<e;I++)P[I]=0,V[I]=0,O[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:O,object:M,attributes:{},index:null}}function u(M,P,V,O){let I=r.attributes,G=P.attributes,N=0,Z=V.getAttributes();for(let k in Z)if(Z[k].location>=0){let ut=I[k],Pt=G[k];if(Pt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Pt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Pt=M.instanceColor)),ut===void 0||ut.attribute!==Pt||Pt&&ut.data!==Pt.data)return!0;N++}return r.attributesNum!==N||r.index!==O}function m(M,P,V,O){let I={},G=P.attributes,N=0,Z=V.getAttributes();for(let k in Z)if(Z[k].location>=0){let ut=G[k];ut===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));let Pt={};Pt.attribute=ut,ut&&ut.data&&(Pt.data=ut.data),I[k]=Pt,N++}r.attributes=I,r.attributesNum=N,r.index=O}function x(){let M=r.newAttributes;for(let P=0,V=M.length;P<V;P++)M[P]=0}function g(M){p(M,0)}function p(M,P){let V=r.newAttributes,O=r.enabledAttributes,I=r.attributeDivisors;V[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),I[M]!==P&&(i.vertexAttribDivisor(M,P),I[M]=P)}function _(){let M=r.newAttributes,P=r.enabledAttributes;for(let V=0,O=P.length;V<O;V++)P[V]!==M[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function y(M,P,V,O,I,G,N){N===!0?i.vertexAttribIPointer(M,P,V,I,G):i.vertexAttribPointer(M,P,V,O,I,G)}function v(M,P,V,O){x();let I=O.attributes,G=V.getAttributes(),N=P.defaultAttributeValues;for(let Z in G){let k=G[Z];if(k.location>=0){let rt=I[Z];if(rt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){let ut=rt.normalized,Pt=rt.itemSize,Vt=t.get(rt);if(Vt===void 0)continue;let xe=Vt.buffer,$=Vt.type,ct=Vt.bytesPerElement,Ct=$===i.INT||$===i.UNSIGNED_INT||rt.gpuType===K0;if(rt.isInterleavedBufferAttribute){let mt=rt.data,Ot=mt.stride,Wt=rt.offset;if(mt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<k.locationSize;Kt++)p(k.location+Kt,mt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Kt=0;Kt<k.locationSize;Kt++)g(k.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Kt=0;Kt<k.locationSize;Kt++)y(k.location+Kt,Pt/k.locationSize,$,ut,Ot*ct,(Wt+Pt/k.locationSize*Kt)*ct,Ct)}else{if(rt.isInstancedBufferAttribute){for(let mt=0;mt<k.locationSize;mt++)p(k.location+mt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let mt=0;mt<k.locationSize;mt++)g(k.location+mt);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let mt=0;mt<k.locationSize;mt++)y(k.location+mt,Pt/k.locationSize,$,ut,Pt*ct,Pt/k.locationSize*mt*ct,Ct)}}else if(N!==void 0){let ut=N[Z];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(k.location,ut);break;case 3:i.vertexAttrib3fv(k.location,ut);break;case 4:i.vertexAttrib4fv(k.location,ut);break;default:i.vertexAttrib1fv(k.location,ut)}}}}_()}function C(){F();for(let M in n){let P=n[M];for(let V in P){let O=P[V];for(let I in O)d(O[I].object),delete O[I];delete P[V]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let V in P){let O=P[V];for(let I in O)d(O[I].object),delete O[I];delete P[V]}delete n[M.id]}function w(M){for(let P in n){let V=n[P];if(V[M.id]===void 0)continue;let O=V[M.id];for(let I in O)d(O[I].object),delete O[I];delete V[M.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function K1(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function o(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function a(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let u=0;for(let m=0;m<h;m++)u+=d[m];e.update(u,n,1)}function l(c,d,h,f){if(h===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<c.length;m++)o(c[m],d[m],f[m]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,h);let m=0;for(let x=0;x<h;x++)m+=d[x]*f[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function j1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let F=w===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ti&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ri&&!F)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:T}}function tm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ei,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let u=h.length!==0||f||n!==0||s;return s=f,n=h.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,u){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?d(null):c();else{let _=r?0:n,y=_*4,v=p.clippingState||null;l.value=v,v=d(m,f,y,u);for(let C=0;C!==y;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,f,u,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=u+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=u;y!==x;++y,v+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function em(i){let t=new WeakMap;function e(o,a){return a===Ul?o.mapping=cr:a===Bl&&(o.mapping=dr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ul||a===Bl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new g0(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var pr=class extends na{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},sr=4,md=[.125,.215,.35,.446,.526,.582],Ms=20,pl=new pr,gd=new zt,ml=null,gl=0,xl=0,vl=!1,ys=(1+Math.sqrt(5))/2,Ks=1/ys,xd=[new R(-ys,Ks,0),new R(ys,Ks,0),new R(-Ks,0,ys),new R(Ks,0,ys),new R(0,ys,-Ks),new R(0,ys,Ks),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],sa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ml,gl,xl),this._renderer.xr.enabled=vl,t.scissorTest=!1,Fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cr||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:si,minFilter:si,generateMipmaps:!1,type:Mn,format:Rn,colorSpace:es,depthBuffer:!1},s=vd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nm(r)),this._blurMaterial=im(r,t,e)}return s}_compileMaterial(t){let e=new it(this._lodPlanes[0],t);this._renderer.compile(e,pl)}_sceneToCubeUV(t,e,n,s){let a=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(gd),d.toneMapping=ai,d.autoClear=!1;let u=new Xt({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),m=new it(new We,u),x=!1,g=t.background;g?g.isColor&&(u.color.copy(g),t.background=null,x=!0):(u.color.copy(gd),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;Fo(s,_*y,p>2?y:0,y,y),d.setRenderTarget(s),x&&d.render(m,a),d.render(t,a)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===cr||t.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Fo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xd[(s-r-1)%xd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,h=new it(this._lodPlanes[s],c),f=c.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ms-1),x=r/m,g=isFinite(r)?1+Math.floor(d*x):Ms;g>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ms}`);let p=[],_=0;for(let w=0;w<Ms;++w){let F=w/x,S=Math.exp(-F*F/2);p.push(S),w===0?_+=S:w<g&&(_+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;let v=this._sizeLods[s],C=3*v*(s>y-sr?s-y+sr:0),T=4*(this._cubeSize-v);Fo(e,C,T,3*v,2*v),l.setRenderTarget(e),l.render(h,pl)}};function nm(i){let t=[],e=[],n=[],s=i,r=i-sr+1+md.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-sr?l=md[o-i+sr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],u=6,m=6,x=3,g=2,p=1,_=new Float32Array(x*m*u),y=new Float32Array(g*m*u),v=new Float32Array(p*m*u);for(let T=0;T<u;T++){let w=T%3*2/3-1,F=T>2?0:-1,S=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];_.set(S,x*m*T),y.set(f,g*m*T);let M=[T,T,T,T,T,T];v.set(M,p*m*T)}let C=new Ue;C.setAttribute("position",new en(_,x)),C.setAttribute("uv",new en(y,g)),C.setAttribute("faceIndex",new en(v,p)),t.push(C),s>sr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vd(i,t,e){let n=new Je(i,t,e);return n.texture.mapping=ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function im(i,t,e){let n=new Float32Array(Ms),s=new R(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function _d(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function yd(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function sm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ul||l===Bl,d=l===cr||l===dr;if(c||d){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new sa(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let u=a.image;return c&&u&&u.height>0||d&&u&&s(u)?(e===null&&(e=new sa(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function rm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Gr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function om(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}f.removeEventListener("dispose",o),delete s[f.id];let u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let u=h.morphAttributes;for(let m in u){let x=u[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function c(h){let f=[],u=h.index,m=h.attributes.position,x=0;if(u!==null){let _=u.array;x=u.version;for(let y=0,v=_.length;y<v;y+=3){let C=_[y+0],T=_[y+1],w=_[y+2];f.push(C,T,T,w,w,C)}}else if(m!==void 0){let _=m.array;x=m.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let C=y+0,T=y+1,w=y+2;f.push(C,T,T,w,w,C)}}else return;let g=new(uh(f)?ea:ta)(f,1);g.version=x;let p=r.get(h);p&&t.remove(p),r.set(h,g)}function d(h){let f=r.get(h);if(f){let u=h.index;u!==null&&f.version<u.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function am(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,f*o,m),e.update(u,n,m))}function d(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];e.update(g,n,1)}function h(f,u,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,u[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,x,0,m);let p=0;for(let _=0;_<m;_++)p+=u[_]*x[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function lm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cm(i,t,e){let n=new WeakMap,s=new be;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0,f=n.get(a);if(f===void 0||f.count!==h){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;u===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,C=1;v>t.maxTextureSize&&(C=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*C*4*h),w=new Qo(T,v,C,h);w.type=ri,w.needsUpdate=!0;let F=y*4;for(let M=0;M<h;M++){let P=g[M],V=p[M],O=_[M],I=v*C*4*M;for(let G=0;G<P.count;G++){let N=G*F;u===!0&&(s.fromBufferAttribute(P,G),T[I+N+0]=s.x,T[I+N+1]=s.y,T[I+N+2]=s.z,T[I+N+3]=0),m===!0&&(s.fromBufferAttribute(V,G),T[I+N+4]=s.x,T[I+N+5]=s.y,T[I+N+6]=s.z,T[I+N+7]=0),x===!0&&(s.fromBufferAttribute(O,G),T[I+N+8]=s.x,T[I+N+9]=s.y,T[I+N+10]=s.z,T[I+N+11]=O.itemSize===4?s.w:1)}}f={count:h,texture:w,size:new ot(v,C)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function dm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var mr=class extends En{constructor(t,e,n,s,r,o,a,l,c,d=rr){if(d!==rr&&d!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===rr&&(n=Ai),n===void 0&&d===ur&&(n=hr),super(null,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},gh=new En,Ed=new mr(1,1),xh=new Qo,vh=new p0,_h=new ia,Md=[],bd=[],Sd=new Float32Array(16),Td=new Float32Array(9),Ad=new Float32Array(4);function yr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Md[s];if(r===void 0&&(r=new Float32Array(s),Md[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ta(i,t){let e=bd[t];e===void 0&&(e=new Int32Array(t),bd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function mm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Ad.set(n),i.uniformMatrix2fv(this.addr,!1,Ad),Ye(e,n)}}function gm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Td.set(n),i.uniformMatrix3fv(this.addr,!1,Td),Ye(e,n)}}function xm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Sd.set(n),i.uniformMatrix4fv(this.addr,!1,Sd),Ye(e,n)}}function vm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function Em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function Mm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function Sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function Tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function Am(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ed.compareFunction=hh,r=Ed):r=gh,e.setTexture2D(t||r,s)}function wm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vh,s)}function Rm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_h,s)}function Cm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xh,s)}function Pm(i){switch(i){case 5126:return hm;case 35664:return um;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return xm;case 5124:case 35670:return vm;case 35667:case 35671:return _m;case 35668:case 35672:return ym;case 35669:case 35673:return Em;case 5125:return Mm;case 36294:return bm;case 36295:return Sm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}function Fm(i,t){i.uniform1fv(this.addr,t)}function Im(i,t){let e=yr(t,this.size,2);i.uniform2fv(this.addr,e)}function Lm(i,t){let e=yr(t,this.size,3);i.uniform3fv(this.addr,e)}function Dm(i,t){let e=yr(t,this.size,4);i.uniform4fv(this.addr,e)}function Um(i,t){let e=yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bm(i,t){let e=yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nm(i,t){let e=yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Om(i,t){i.uniform1iv(this.addr,t)}function zm(i,t){i.uniform2iv(this.addr,t)}function km(i,t){i.uniform3iv(this.addr,t)}function Hm(i,t){i.uniform4iv(this.addr,t)}function Gm(i,t){i.uniform1uiv(this.addr,t)}function Vm(i,t){i.uniform2uiv(this.addr,t)}function Wm(i,t){i.uniform3uiv(this.addr,t)}function Xm(i,t){i.uniform4uiv(this.addr,t)}function qm(i,t,e){let n=this.cache,s=t.length,r=Ta(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||gh,r[o])}function Ym(i,t,e){let n=this.cache,s=t.length,r=Ta(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vh,r[o])}function Zm(i,t,e){let n=this.cache,s=t.length,r=Ta(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_h,r[o])}function $m(i,t,e){let n=this.cache,s=t.length,r=Ta(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xh,r[o])}function Jm(i){switch(i){case 5126:return Fm;case 35664:return Im;case 35665:return Lm;case 35666:return Dm;case 35674:return Um;case 35675:return Bm;case 35676:return Nm;case 5124:case 35670:return Om;case 35667:case 35671:return zm;case 35668:case 35672:return km;case 35669:case 35673:return Hm;case 5125:return Gm;case 36294:return Vm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return $m}}var x0=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pm(e.type)}},v0=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jm(e.type)}},_0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},_l=/(\w+)(\])?(\[|\.)?/g;function wd(i,t){i.seq.push(t),i.map[t.id]=t}function Qm(i,t,e){let n=i.name,s=n.length;for(_l.lastIndex=0;;){let r=_l.exec(n),o=_l.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wd(e,c===void 0?new x0(a,i,t):new v0(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new _0(a),wd(e,h)),e=h}}}var ar=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Qm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Rd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Km=37297,jm=0;function t2(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Cd=new Zt;function e2(i){ae._getMatrix(Cd,ae.workingColorSpace,i);let t=`mat3( ${Cd.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Sa:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+t2(i.getShaderSource(t),o)}else return s}function n2(i,t){let e=e2(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function i2(i,t){let e;switch(t){case Cu:e="Linear";break;case Pu:e="Reinhard";break;case Fu:e="Cineon";break;case Iu:e="ACESFilmic";break;case Du:e="AgX";break;case Uu:e="Neutral";break;case Lu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Io=new R;function s2(){ae.getLuminanceCoefficients(Io);let i=Io.x.toFixed(4),t=Io.y.toFixed(4),e=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function o2(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function a2(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Vr(i){return i!==""}function Fd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Id(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var l2=/^[ \t]*#include +<([\w\d./]+)>/gm;function y0(i){return i.replace(l2,d2)}var c2=new Map;function d2(i,t){let e=Jt[t];if(e===void 0){let n=c2.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return y0(e)}var h2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(i){return i.replace(h2,u2)}function u2(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function f2(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Q0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function p2(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cr:case dr:t="ENVMAP_TYPE_CUBE";break;case ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m2(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case dr:t="ENVMAP_MODE_REFRACTION";break}return t}function g2(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kd:t="ENVMAP_BLENDING_MULTIPLY";break;case wu:t="ENVMAP_BLENDING_MIX";break;case Ru:t="ENVMAP_BLENDING_ADD";break}return t}function x2(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function v2(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=f2(e),c=p2(e),d=m2(e),h=g2(e),f=x2(e),u=r2(e),m=o2(r),x=s.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(g=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Jt.tonemapping_pars_fragment:"",e.toneMapping!==ai?i2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,n2("linearToOutputTexel",e.outputColorSpace),s2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),o=y0(o),o=Fd(o,e),o=Id(o,e),a=y0(a),a=Fd(a,e),a=Id(a,e),o=Ld(o),a=Ld(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=_+g+o,v=_+p+a,C=Rd(s,s.VERTEX_SHADER,y),T=Rd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,C),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(P){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(C).trim(),I=s.getShaderInfoLog(T).trim(),G=!0,N=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,T);else{let Z=Pd(s,C,"vertex"),k=Pd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+Z+`
`+k)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(O===""||I==="")&&(N=!1);N&&(P.diagnostics={runnable:G,programLog:V,vertexShader:{log:O,prefix:g},fragmentShader:{log:I,prefix:p}})}s.deleteShader(C),s.deleteShader(T),F=new ar(s,x),S=a2(s,x)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Km)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var _2=0,E0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new M0(t),e.set(t,n)),n}},M0=class{constructor(t){this.id=_2++,this.code=t,this.usedTimes=0}};function y2(i,t,e,n,s,r,o){let a=new jo,l=new E0,c=new Set,d=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,u=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,P,V,O){let I=V.fog,G=O.geometry,N=S.isMeshStandardMaterial?V.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||N),k=Z&&Z.mapping===ba?Z.image.height:null,rt=m[S.type];S.precision!==null&&(u=s.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let ut=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Pt=ut!==void 0?ut.length:0,Vt=0;G.morphAttributes.position!==void 0&&(Vt=1),G.morphAttributes.normal!==void 0&&(Vt=2),G.morphAttributes.color!==void 0&&(Vt=3);let xe,$,ct,Ct;if(rt){let ve=ni[rt];xe=ve.vertexShader,$=ve.fragmentShader}else xe=S.vertexShader,$=S.fragmentShader,l.update(S),ct=l.getVertexShaderID(S),Ct=l.getFragmentShaderID(S);let mt=i.getRenderTarget(),Ot=i.state.buffers.depth.getReversed(),Wt=O.isInstancedMesh===!0,Kt=O.isBatchedMesh===!0,Ie=!!S.map,re=!!S.matcap,Oe=!!Z,B=!!S.aoMap,Un=!!S.lightMap,ne=!!S.bumpMap,ie=!!S.normalMap,Bt=!!S.displacementMap,Ae=!!S.emissiveMap,Ut=!!S.metalnessMap,A=!!S.roughnessMap,E=S.anisotropy>0,H=S.clearcoat>0,j=S.dispersion>0,st=S.iridescence>0,J=S.sheen>0,Ft=S.transmission>0,gt=E&&!!S.anisotropyMap,Et=H&&!!S.clearcoatMap,oe=H&&!!S.clearcoatNormalMap,at=H&&!!S.clearcoatRoughnessMap,Mt=st&&!!S.iridescenceMap,Nt=st&&!!S.iridescenceThicknessMap,kt=J&&!!S.sheenColorMap,bt=J&&!!S.sheenRoughnessMap,se=!!S.specularMap,$t=!!S.specularColorMap,Se=!!S.specularIntensityMap,L=Ft&&!!S.transmissionMap,pt=Ft&&!!S.thicknessMap,q=!!S.gradientMap,tt=!!S.alphaMap,_t=S.alphaTest>0,xt=!!S.alphaHash,qt=!!S.extensions,De=ai;S.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(De=i.toneMapping);let rn={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:xe,fragmentShader:$,defines:S.defines,customVertexShaderID:ct,customFragmentShaderID:Ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Kt,batchingColor:Kt&&O._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&O.instanceColor!==null,instancingMorph:Wt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:es,alphaToCoverage:!!S.alphaToCoverage,map:Ie,matcap:re,envMap:Oe,envMapMode:Oe&&Z.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:Un,bumpMap:ne,normalMap:ie,displacementMap:f&&Bt,emissiveMap:Ae,normalMapObjectSpace:ie&&S.normalMapType===Ou,normalMapTangentSpace:ie&&S.normalMapType===dh,metalnessMap:Ut,roughnessMap:A,anisotropy:E,anisotropyMap:gt,clearcoat:H,clearcoatMap:Et,clearcoatNormalMap:oe,clearcoatRoughnessMap:at,dispersion:j,iridescence:st,iridescenceMap:Mt,iridescenceThicknessMap:Nt,sheen:J,sheenColorMap:kt,sheenRoughnessMap:bt,specularMap:se,specularColorMap:$t,specularIntensityMap:Se,transmission:Ft,transmissionMap:L,thicknessMap:pt,gradientMap:q,opaque:S.transparent===!1&&S.blending===Zi&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:_t,alphaHash:xt,combine:S.combine,mapUv:Ie&&x(S.map.channel),aoMapUv:B&&x(S.aoMap.channel),lightMapUv:Un&&x(S.lightMap.channel),bumpMapUv:ne&&x(S.bumpMap.channel),normalMapUv:ie&&x(S.normalMap.channel),displacementMapUv:Bt&&x(S.displacementMap.channel),emissiveMapUv:Ae&&x(S.emissiveMap.channel),metalnessMapUv:Ut&&x(S.metalnessMap.channel),roughnessMapUv:A&&x(S.roughnessMap.channel),anisotropyMapUv:gt&&x(S.anisotropyMap.channel),clearcoatMapUv:Et&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:bt&&x(S.sheenRoughnessMap.channel),specularMapUv:se&&x(S.specularMap.channel),specularColorMapUv:$t&&x(S.specularColorMap.channel),specularIntensityMapUv:Se&&x(S.specularIntensityMap.channel),transmissionMapUv:L&&x(S.transmissionMap.channel),thicknessMapUv:pt&&x(S.thicknessMap.channel),alphaMapUv:tt&&x(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ie||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Ie||tt),fog:!!I,useFog:S.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ot,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Vt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===Ee,decodeVideoTextureEmissive:Ae&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===Ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_e,flipSided:S.side===$e,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&S.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rn.vertexUv1s=c.has(1),rn.vertexUv2s=c.has(2),rn.vertexUv3s=c.has(3),c.clear(),rn}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(_(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let M=m[S.type],P;if(M){let V=ni[M];P=_r.clone(V.uniforms)}else P=S.uniforms;return P}function C(S,M){let P;for(let V=0,O=d.length;V<O;V++){let I=d[V];if(I.cacheKey===M){P=I,++P.usedTimes;break}}return P===void 0&&(P=new v2(i,M,S,r),d.push(P)),P}function T(S){if(--S.usedTimes===0){let M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function w(S){l.remove(S)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:T,releaseShaderCache:w,programs:d,dispose:F}}function E2(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function M2(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ud(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,u,m,x,g){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:u,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=u,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=x,p.group=g),t++,p}function a(h,f,u,m,x,g){let p=o(h,f,u,m,x,g);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function l(h,f,u,m,x,g){let p=o(h,f,u,m,x,g);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||M2),n.length>1&&n.sort(f||Ud),s.length>1&&s.sort(f||Ud)}function d(){for(let h=t,f=i.length;h<f;h++){let u=i[h];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function b2(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bd,i.set(n,[o])):s>=r.length?(o=new Bd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function S2(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new zt};break;case"SpotLight":e={position:new R,direction:new R,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function T2(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var A2=0;function w2(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function R2(i){let t=new S2,e=T2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new le,o=new le;function a(c){let d=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,m=0,x=0,g=0,p=0,_=0,y=0,v=0,C=0,T=0,w=0;c.sort(w2);for(let S=0,M=c.length;S<M;S++){let P=c[S],V=P.color,O=P.intensity,I=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=V.r*O,h+=V.g*O,f+=V.b*O;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],O);w++}else if(P.isDirectionalLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,k=e.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.directionalShadow[u]=k,n.directionalShadowMap[u]=G,n.directionalShadowMatrix[u]=P.shadow.matrix,_++}n.directional[u]=N,u++}else if(P.isSpotLight){let N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(V).multiplyScalar(O),N.distance=I,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[x]=N;let Z=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[x]=Z.matrix,P.castShadow){let k=e.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=G,v++}x++}else if(P.isRectAreaLight){let N=t.get(P);N.color.copy(V).multiplyScalar(O),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=N,g++}else if(P.isPointLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){let Z=P.shadow,k=e.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=N,m++}else if(P.isHemisphereLight){let N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(O),N.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=N,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;let F=n.hash;(F.directionalLength!==u||F.pointLength!==m||F.spotLength!==x||F.rectAreaLength!==g||F.hemiLength!==p||F.numDirectionalShadows!==_||F.numPointShadows!==y||F.numSpotShadows!==v||F.numSpotMaps!==C||F.numLightProbes!==w)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,F.directionalLength=u,F.pointLength=m,F.spotLength=x,F.rectAreaLength=g,F.hemiLength=p,F.numDirectionalShadows=_,F.numPointShadows=y,F.numSpotShadows=v,F.numSpotMaps=C,F.numLightProbes=w,n.version=A2++)}function l(c,d){let h=0,f=0,u=0,m=0,x=0,g=d.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let y=c[p];if(y.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(y.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(y.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Nd(i){let t=new R2(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function C2(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Nd(i),t.set(s,[a])):r>=o.length?(a=new Nd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ra=class extends Ri{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},b0=class extends Ri{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},P2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F2=`uniform sampler2D shadow_pass;
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
}`;function I2(i,t,e){let n=new Zr,s=new ot,r=new ot,o=new be,a=new ra({depthPacking:ch}),l=new b0,c={},d=e.maxTextureSize,h={[Ji]:$e,[$e]:Ji,[_e]:_e},f=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:P2,fragmentShader:F2}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new Ue;m.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new it(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qd;let p=this.type;this.render=function(T,w,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(oi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let O=p!==yi&&this.type===yi,I=p===yi&&this.type!==yi;for(let G=0,N=T.length;G<N;G++){let Z=T[G],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let rt=k.getFrameExtents();if(s.multiply(rt),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/rt.x),s.x=r.x*rt.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/rt.y),s.y=r.y*rt.y,k.mapSize.y=r.y)),k.map===null||O===!0||I===!0){let Pt=this.type!==yi?{minFilter:mn,magFilter:mn}:{};k.map!==null&&k.map.dispose(),k.map=new Je(s.x,s.y,Pt),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let ut=k.getViewportCount();for(let Pt=0;Pt<ut;Pt++){let Vt=k.getViewport(Pt);o.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),V.viewport(o),k.updateMatrices(Z,Pt),n=k.getFrustum(),v(w,F,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===yi&&_(k,F),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,M,P)};function _(T,w){let F=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Je(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,F,f,x,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,F,u,x,null)}function y(T,w,F,S){let M=null,P=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=F.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let V=M.uuid,O=w.uuid,I=c[V];I===void 0&&(I={},c[V]=I);let G=I[O];G===void 0&&(G=M.clone(),I[O]=G,w.addEventListener("dispose",C)),M=G}if(M.visible=w.visible,M.wireframe=w.wireframe,S===yi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let V=i.properties.get(M);V.light=F}return M}function v(T,w,F,S,M){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===yi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);let O=t.update(T),I=T.material;if(Array.isArray(I)){let G=O.groups;for(let N=0,Z=G.length;N<Z;N++){let k=G[N],rt=I[k.materialIndex];if(rt&&rt.visible){let ut=y(T,rt,S,M);T.onBeforeShadow(i,T,w,F,O,ut,k),i.renderBufferDirect(F,null,O,ut,T,k),T.onAfterShadow(i,T,w,F,O,ut,k)}}}else if(I.visible){let G=y(T,I,S,M);T.onBeforeShadow(i,T,w,F,O,G,null),i.renderBufferDirect(F,null,O,G,T,null),T.onAfterShadow(i,T,w,F,O,G,null)}}let V=T.children;for(let O=0,I=V.length;O<I;O++)v(V[O],w,F,S,M)}function C(T){T.target.removeEventListener("dispose",C);for(let F in c){let S=c[F],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var L2={[Rl]:Cl,[Pl]:Ll,[Fl]:Dl,[lr]:Il,[Cl]:Rl,[Ll]:Pl,[Dl]:Fl,[Il]:lr};function D2(i,t){function e(){let L=!1,pt=new be,q=null,tt=new be(0,0,0,0);return{setMask:function(_t){q!==_t&&!L&&(i.colorMask(_t,_t,_t,_t),q=_t)},setLocked:function(_t){L=_t},setClear:function(_t,xt,qt,De,rn){rn===!0&&(_t*=De,xt*=De,qt*=De),pt.set(_t,xt,qt,De),tt.equals(pt)===!1&&(i.clearColor(_t,xt,qt,De),tt.copy(pt))},reset:function(){L=!1,q=null,tt.set(-1,0,0,0)}}}function n(){let L=!1,pt=!1,q=null,tt=null,_t=null;return{setReversed:function(xt){if(pt!==xt){let qt=t.get("EXT_clip_control");pt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let De=_t;_t=null,this.setClear(De)}pt=xt},getReversed:function(){return pt},setTest:function(xt){xt?mt(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(xt){q!==xt&&!L&&(i.depthMask(xt),q=xt)},setFunc:function(xt){if(pt&&(xt=L2[xt]),tt!==xt){switch(xt){case Rl:i.depthFunc(i.NEVER);break;case Cl:i.depthFunc(i.ALWAYS);break;case Pl:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case Fl:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Ll:i.depthFunc(i.GREATER);break;case Dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=xt}},setLocked:function(xt){L=xt},setClear:function(xt){_t!==xt&&(pt&&(xt=1-xt),i.clearDepth(xt),_t=xt)},reset:function(){L=!1,q=null,tt=null,_t=null,pt=!1}}}function s(){let L=!1,pt=null,q=null,tt=null,_t=null,xt=null,qt=null,De=null,rn=null;return{setTest:function(ve){L||(ve?mt(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(ve){pt!==ve&&!L&&(i.stencilMask(ve),pt=ve)},setFunc:function(ve,Wn,fi){(q!==ve||tt!==Wn||_t!==fi)&&(i.stencilFunc(ve,Wn,fi),q=ve,tt=Wn,_t=fi)},setOp:function(ve,Wn,fi){(xt!==ve||qt!==Wn||De!==fi)&&(i.stencilOp(ve,Wn,fi),xt=ve,qt=Wn,De=fi)},setLocked:function(ve){L=ve},setClear:function(ve){rn!==ve&&(i.clearStencil(ve),rn=ve)},reset:function(){L=!1,pt=null,q=null,tt=null,_t=null,xt=null,qt=null,De=null,rn=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,d={},h={},f=new WeakMap,u=[],m=null,x=!1,g=null,p=null,_=null,y=null,v=null,C=null,T=null,w=new zt(0,0,0),F=0,S=!1,M=null,P=null,V=null,O=null,I=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,Z=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=Z>=2);let rt=null,ut={},Pt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),xe=new be().fromArray(Pt),$=new be().fromArray(Vt);function ct(L,pt,q,tt){let _t=new Uint8Array(4),xt=i.createTexture();i.bindTexture(L,xt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<q;qt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(pt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return xt}let Ct={};Ct[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),o.setFunc(lr),ne(!1),ie(Hc),mt(i.CULL_FACE),B(oi);function mt(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function Ot(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Wt(L,pt){return h[L]!==pt?(i.bindFramebuffer(L,pt),h[L]=pt,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pt),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Kt(L,pt){let q=u,tt=!1;if(L){q=f.get(pt),q===void 0&&(q=[],f.set(pt,q));let _t=L.textures;if(q.length!==_t.length||q[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,qt=_t.length;xt<qt;xt++)q[xt]=i.COLOR_ATTACHMENT0+xt;q.length=_t.length,tt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,tt=!0);tt&&i.drawBuffers(q)}function Ie(L){return m!==L?(i.useProgram(L),m=L,!0):!1}let re={[Es]:i.FUNC_ADD,[du]:i.FUNC_SUBTRACT,[hu]:i.FUNC_REVERSE_SUBTRACT};re[uu]=i.MIN,re[fu]=i.MAX;let Oe={[pu]:i.ZERO,[mu]:i.ONE,[gu]:i.SRC_COLOR,[Al]:i.SRC_ALPHA,[Mu]:i.SRC_ALPHA_SATURATE,[yu]:i.DST_COLOR,[vu]:i.DST_ALPHA,[xu]:i.ONE_MINUS_SRC_COLOR,[wl]:i.ONE_MINUS_SRC_ALPHA,[Eu]:i.ONE_MINUS_DST_COLOR,[_u]:i.ONE_MINUS_DST_ALPHA,[bu]:i.CONSTANT_COLOR,[Su]:i.ONE_MINUS_CONSTANT_COLOR,[Tu]:i.CONSTANT_ALPHA,[Au]:i.ONE_MINUS_CONSTANT_ALPHA};function B(L,pt,q,tt,_t,xt,qt,De,rn,ve){if(L===oi){x===!0&&(Ot(i.BLEND),x=!1);return}if(x===!1&&(mt(i.BLEND),x=!0),L!==cu){if(L!==g||ve!==S){if((p!==Es||v!==Es)&&(i.blendEquation(i.FUNC_ADD),p=Es,v=Es),ve)switch(L){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,y=null,C=null,T=null,w.set(0,0,0),F=0,g=L,S=ve}return}_t=_t||pt,xt=xt||q,qt=qt||tt,(pt!==p||_t!==v)&&(i.blendEquationSeparate(re[pt],re[_t]),p=pt,v=_t),(q!==_||tt!==y||xt!==C||qt!==T)&&(i.blendFuncSeparate(Oe[q],Oe[tt],Oe[xt],Oe[qt]),_=q,y=tt,C=xt,T=qt),(De.equals(w)===!1||rn!==F)&&(i.blendColor(De.r,De.g,De.b,rn),w.copy(De),F=rn),g=L,S=!1}function Un(L,pt){L.side===_e?Ot(i.CULL_FACE):mt(i.CULL_FACE);let q=L.side===$e;pt&&(q=!q),ne(q),L.blending===Zi&&L.transparent===!1?B(oi):B(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let tt=L.stencilWrite;a.setTest(tt),tt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ae(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function ie(L){L!==au?(mt(i.CULL_FACE),L!==P&&(L===Hc?i.cullFace(i.BACK):L===lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),P=L}function Bt(L){L!==V&&(N&&i.lineWidth(L),V=L)}function Ae(L,pt,q){L?(mt(i.POLYGON_OFFSET_FILL),(O!==pt||I!==q)&&(i.polygonOffset(pt,q),O=pt,I=q)):Ot(i.POLYGON_OFFSET_FILL)}function Ut(L){L?mt(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+G-1),rt!==L&&(i.activeTexture(L),rt=L)}function E(L,pt,q){q===void 0&&(rt===null?q=i.TEXTURE0+G-1:q=rt);let tt=ut[q];tt===void 0&&(tt={type:void 0,texture:void 0},ut[q]=tt),(tt.type!==L||tt.texture!==pt)&&(rt!==q&&(i.activeTexture(q),rt=q),i.bindTexture(L,pt||Ct[L]),tt.type=L,tt.texture=pt)}function H(){let L=ut[rt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(L){xe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),xe.copy(L))}function bt(L){$.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function se(L,pt){let q=c.get(pt);q===void 0&&(q=new WeakMap,c.set(pt,q));let tt=q.get(L);tt===void 0&&(tt=i.getUniformBlockIndex(pt,L.name),q.set(L,tt))}function $t(L,pt){let tt=c.get(pt).get(L);l.get(pt)!==tt&&(i.uniformBlockBinding(pt,tt,L.__bindingPointIndex),l.set(pt,tt))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},rt=null,ut={},h={},f=new WeakMap,u=[],m=null,x=!1,g=null,p=null,_=null,y=null,v=null,C=null,T=null,w=new zt(0,0,0),F=0,S=!1,M=null,P=null,V=null,O=null,I=null,xe.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:Ot,bindFramebuffer:Wt,drawBuffers:Kt,useProgram:Ie,setBlending:B,setMaterial:Un,setFlipSided:ne,setCullFace:ie,setLineWidth:Bt,setPolygonOffset:Ae,setScissorTest:Ut,activeTexture:A,bindTexture:E,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:st,texImage2D:Mt,texImage3D:Nt,updateUBOMapping:se,uniformBlockBinding:$t,texStorage2D:oe,texStorage3D:at,texSubImage2D:J,texSubImage3D:Ft,compressedTexSubImage2D:gt,compressedTexSubImage3D:Et,scissor:kt,viewport:bt,reset:Se}}function Od(i,t,e,n){let s=U2(n);switch(e){case ih:return i*t;case rh:return i*t;case oh:return i*t*2;case ec:return i*t/s.components*s.byteLength;case nc:return i*t/s.components*s.byteLength;case ah:return i*t*2/s.components*s.byteLength;case ic:return i*t*2/s.components*s.byteLength;case sh:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case sc:return i*t*4/s.components*s.byteLength;case Ho:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vo:case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:case Hl:return Math.max(i,16)*Math.max(t,8)/4;case Ol:case kl:return Math.max(i,8)*Math.max(t,8)/2;case Gl:case Vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case t0:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case e0:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case n0:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case i0:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case s0:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xo:case r0:case o0:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lh:case a0:return Math.ceil(i/4)*Math.ceil(t/4)*8;case l0:case c0:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function U2(i){switch(i){case Ti:case th:return{byteLength:1,components:1};case Yr:case eh:case Mn:return{byteLength:2,components:1};case j0:case tc:return{byteLength:2,components:4};case Ai:case K0:case ri:return{byteLength:4,components:1};case nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function B2(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,d=new WeakMap,h,f=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,E){return u?new OffscreenCanvas(A,E):$o("canvas")}function x(A,E,H){let j=1,st=Ut(A);if((st.width>H||st.height>H)&&(j=H/Math.max(st.width,st.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let J=Math.floor(j*st.width),Ft=Math.floor(j*st.height);h===void 0&&(h=m(J,Ft));let gt=E?m(J,Ft):h;return gt.width=J,gt.height=Ft,gt.getContext("2d").drawImage(A,0,0,J,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+J+"x"+Ft+")."),gt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,E,H,j,st=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=E;if(E===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),E===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8)),E===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),E===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),E===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),E===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),E===i.RGBA){let Ft=st?Sa:ae.getTransfer(j);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=Ft===Ee?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(A,E){let H;return A?E===null||E===Ai||E===hr?H=i.DEPTH24_STENCIL8:E===ri?H=i.DEPTH32F_STENCIL8:E===Yr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ai||E===hr?H=i.DEPTH_COMPONENT24:E===ri?H=i.DEPTH_COMPONENT32F:E===Yr&&(H=i.DEPTH_COMPONENT16),H}function C(A,E){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==mn&&A.minFilter!==si?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function T(A){let E=A.target;E.removeEventListener("dispose",T),F(E),E.isVideoTexture&&d.delete(E)}function w(A){let E=A.target;E.removeEventListener("dispose",w),M(E)}function F(A){let E=n.get(A);if(E.__webglInit===void 0)return;let H=A.source,j=f.get(H);if(j){let st=j[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&S(A),Object.keys(j).length===0&&f.delete(H)}n.remove(A)}function S(A){let E=n.get(A);i.deleteTexture(E.__webglTexture);let H=A.source,j=f.get(H);delete j[E.__cacheKey],o.memory.textures--}function M(A){let E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let st=0;st<E.__webglFramebuffer[j].length;st++)i.deleteFramebuffer(E.__webglFramebuffer[j][st]);else i.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)i.deleteFramebuffer(E.__webglFramebuffer[j]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let H=A.textures;for(let j=0,st=H.length;j<st;j++){let J=n.get(H[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(H[j])}n.remove(A)}let P=0;function V(){P=0}function O(){let A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function I(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function G(A,E){let H=n.get(A);if(A.isVideoTexture&&Bt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){let j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,A,E);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function N(A,E){let H=n.get(A);if(A.version>0&&H.__version!==A.version){$(H,A,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function Z(A,E){let H=n.get(A);if(A.version>0&&H.__version!==A.version){$(H,A,E);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function k(A,E){let H=n.get(A);if(A.version>0&&H.__version!==A.version){ct(H,A,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}let rt={[Cn]:i.REPEAT,[bs]:i.CLAMP_TO_EDGE,[Nl]:i.MIRRORED_REPEAT},ut={[mn]:i.NEAREST,[Bu]:i.NEAREST_MIPMAP_NEAREST,[uo]:i.NEAREST_MIPMAP_LINEAR,[si]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[Ss]:i.LINEAR_MIPMAP_LINEAR},Pt={[zu]:i.NEVER,[Xu]:i.ALWAYS,[ku]:i.LESS,[hh]:i.LEQUAL,[Hu]:i.EQUAL,[Wu]:i.GEQUAL,[Gu]:i.GREATER,[Vu]:i.NOTEQUAL};function Vt(A,E){if(E.type===ri&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===si||E.magFilter===Wa||E.magFilter===uo||E.magFilter===Ss||E.minFilter===si||E.minFilter===Wa||E.minFilter===uo||E.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,rt[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,rt[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,rt[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ut[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ut[E.minFilter]),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Pt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mn||E.minFilter!==uo&&E.minFilter!==Ss||E.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function xe(A,E){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",T));let j=E.source,st=f.get(j);st===void 0&&(st={},f.set(j,st));let J=I(E);if(J!==A.__cacheKey){st[J]===void 0&&(st[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),st[J].usedTimes++;let Ft=st[A.__cacheKey];Ft!==void 0&&(st[A.__cacheKey].usedTimes--,Ft.usedTimes===0&&S(E)),A.__cacheKey=J,A.__webglTexture=st[J].texture}return H}function $(A,E,H){let j=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=i.TEXTURE_3D);let st=xe(A,E),J=E.source;e.bindTexture(j,A.__webglTexture,i.TEXTURE0+H);let Ft=n.get(J);if(J.version!==Ft.__version||st===!0){e.activeTexture(i.TEXTURE0+H);let gt=ae.getPrimaries(ae.workingColorSpace),Et=E.colorSpace===qi?null:ae.getPrimaries(E.colorSpace),oe=E.colorSpace===qi||gt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let at=x(E.image,!1,s.maxTextureSize);at=Ae(E,at);let Mt=r.convert(E.format,E.colorSpace),Nt=r.convert(E.type),kt=y(E.internalFormat,Mt,Nt,E.colorSpace,E.isVideoTexture);Vt(j,E);let bt,se=E.mipmaps,$t=E.isVideoTexture!==!0,Se=Ft.__version===void 0||st===!0,L=J.dataReady,pt=C(E,at);if(E.isDepthTexture)kt=v(E.format===ur,E.type),Se&&($t?e.texStorage2D(i.TEXTURE_2D,1,kt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,kt,at.width,at.height,0,Mt,Nt,null));else if(E.isDataTexture)if(se.length>0){$t&&Se&&e.texStorage2D(i.TEXTURE_2D,pt,kt,se[0].width,se[0].height);for(let q=0,tt=se.length;q<tt;q++)bt=se[q],$t?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,bt.width,bt.height,Mt,Nt,bt.data):e.texImage2D(i.TEXTURE_2D,q,kt,bt.width,bt.height,0,Mt,Nt,bt.data);E.generateMipmaps=!1}else $t?(Se&&e.texStorage2D(i.TEXTURE_2D,pt,kt,at.width,at.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,Mt,Nt,at.data)):e.texImage2D(i.TEXTURE_2D,0,kt,at.width,at.height,0,Mt,Nt,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$t&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,kt,se[0].width,se[0].height,at.depth);for(let q=0,tt=se.length;q<tt;q++)if(bt=se[q],E.format!==Rn)if(Mt!==null)if($t){if(L)if(E.layerUpdates.size>0){let _t=Od(bt.width,bt.height,E.format,E.type);for(let xt of E.layerUpdates){let qt=bt.data.subarray(xt*_t/bt.data.BYTES_PER_ELEMENT,(xt+1)*_t/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,xt,bt.width,bt.height,1,Mt,qt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,bt.width,bt.height,at.depth,Mt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,kt,bt.width,bt.height,at.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,bt.width,bt.height,at.depth,Mt,Nt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,kt,bt.width,bt.height,at.depth,0,Mt,Nt,bt.data)}else{$t&&Se&&e.texStorage2D(i.TEXTURE_2D,pt,kt,se[0].width,se[0].height);for(let q=0,tt=se.length;q<tt;q++)bt=se[q],E.format!==Rn?Mt!==null?$t?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,bt.width,bt.height,Mt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,kt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,bt.width,bt.height,Mt,Nt,bt.data):e.texImage2D(i.TEXTURE_2D,q,kt,bt.width,bt.height,0,Mt,Nt,bt.data)}else if(E.isDataArrayTexture)if($t){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,kt,at.width,at.height,at.depth),L)if(E.layerUpdates.size>0){let q=Od(at.width,at.height,E.format,E.type);for(let tt of E.layerUpdates){let _t=at.data.subarray(tt*q/at.data.BYTES_PER_ELEMENT,(tt+1)*q/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,Mt,Nt,_t)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Mt,Nt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,at.width,at.height,at.depth,0,Mt,Nt,at.data);else if(E.isData3DTexture)$t?(Se&&e.texStorage3D(i.TEXTURE_3D,pt,kt,at.width,at.height,at.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Mt,Nt,at.data)):e.texImage3D(i.TEXTURE_3D,0,kt,at.width,at.height,at.depth,0,Mt,Nt,at.data);else if(E.isFramebufferTexture){if(Se)if($t)e.texStorage2D(i.TEXTURE_2D,pt,kt,at.width,at.height);else{let q=at.width,tt=at.height;for(let _t=0;_t<pt;_t++)e.texImage2D(i.TEXTURE_2D,_t,kt,q,tt,0,Mt,Nt,null),q>>=1,tt>>=1}}else if(se.length>0){if($t&&Se){let q=Ut(se[0]);e.texStorage2D(i.TEXTURE_2D,pt,kt,q.width,q.height)}for(let q=0,tt=se.length;q<tt;q++)bt=se[q],$t?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Mt,Nt,bt):e.texImage2D(i.TEXTURE_2D,q,kt,Mt,Nt,bt);E.generateMipmaps=!1}else if($t){if(Se){let q=Ut(at);e.texStorage2D(i.TEXTURE_2D,pt,kt,q.width,q.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Nt,at)}else e.texImage2D(i.TEXTURE_2D,0,kt,Mt,Nt,at);g(E)&&p(j),Ft.__version=J.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ct(A,E,H){if(E.image.length!==6)return;let j=xe(A,E),st=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);let J=n.get(st);if(st.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+H);let Ft=ae.getPrimaries(ae.workingColorSpace),gt=E.colorSpace===qi?null:ae.getPrimaries(E.colorSpace),Et=E.colorSpace===qi||Ft===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let oe=E.isCompressedTexture||E.image[0].isCompressedTexture,at=E.image[0]&&E.image[0].isDataTexture,Mt=[];for(let tt=0;tt<6;tt++)!oe&&!at?Mt[tt]=x(E.image[tt],!0,s.maxCubemapSize):Mt[tt]=at?E.image[tt].image:E.image[tt],Mt[tt]=Ae(E,Mt[tt]);let Nt=Mt[0],kt=r.convert(E.format,E.colorSpace),bt=r.convert(E.type),se=y(E.internalFormat,kt,bt,E.colorSpace),$t=E.isVideoTexture!==!0,Se=J.__version===void 0||j===!0,L=st.dataReady,pt=C(E,Nt);Vt(i.TEXTURE_CUBE_MAP,E);let q;if(oe){$t&&Se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,se,Nt.width,Nt.height);for(let tt=0;tt<6;tt++){q=Mt[tt].mipmaps;for(let _t=0;_t<q.length;_t++){let xt=q[_t];E.format!==Rn?kt!==null?$t?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,xt.width,xt.height,kt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,se,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,xt.width,xt.height,kt,bt,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,se,xt.width,xt.height,0,kt,bt,xt.data)}}}else{if(q=E.mipmaps,$t&&Se){q.length>0&&pt++;let tt=Ut(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,se,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){$t?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Mt[tt].width,Mt[tt].height,kt,bt,Mt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,se,Mt[tt].width,Mt[tt].height,0,kt,bt,Mt[tt].data);for(let _t=0;_t<q.length;_t++){let qt=q[_t].image[tt].image;$t?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,qt.width,qt.height,kt,bt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,se,qt.width,qt.height,0,kt,bt,qt.data)}}else{$t?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,kt,bt,Mt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,se,kt,bt,Mt[tt]);for(let _t=0;_t<q.length;_t++){let xt=q[_t];$t?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,kt,bt,xt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,se,kt,bt,xt.image[tt])}}}g(E)&&p(i.TEXTURE_CUBE_MAP),J.__version=st.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ct(A,E,H,j,st,J){let Ft=r.convert(H.format,H.colorSpace),gt=r.convert(H.type),Et=y(H.internalFormat,Ft,gt,H.colorSpace),oe=n.get(E),at=n.get(H);if(at.__renderTarget=E,!oe.__hasExternalTextures){let Mt=Math.max(1,E.width>>J),Nt=Math.max(1,E.height>>J);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,J,Et,Mt,Nt,E.depth,0,Ft,gt,null):e.texImage2D(st,J,Et,Mt,Nt,0,Ft,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ie(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,st,at.__webglTexture,0,ne(E)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,st,at.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(A,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer){let j=E.depthTexture,st=j&&j.isDepthTexture?j.type:null,J=v(E.stencilBuffer,st),Ft=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=ne(E);ie(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,J,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,J,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,J,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,A)}else{let j=E.textures;for(let st=0;st<j.length;st++){let J=j[st],Ft=r.convert(J.format,J.colorSpace),gt=r.convert(J.type),Et=y(J.internalFormat,Ft,gt,J.colorSpace),oe=ne(E);H&&ie(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Et,E.width,E.height):ie(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Et,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Et,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(E.depthTexture);j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);let st=j.__webglTexture,J=ne(E);if(E.depthTexture.format===rr)ie(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(E.depthTexture.format===ur)ie(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Wt(A){let E=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){let j=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){let st=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",st)};j.addEventListener("dispose",st),E.__depthDisposeCallback=st}E.__boundDepthTexture=j}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ot(E.__webglFramebuffer,A)}else if(H){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=i.createRenderbuffer(),mt(E.__webglDepthbuffer[j],A,!1);else{let st=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),mt(E.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(A,E,H){let j=n.get(A);E!==void 0&&Ct(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Wt(A)}function Ie(A){let E=A.texture,H=n.get(A),j=n.get(E);A.addEventListener("dispose",w);let st=A.textures,J=A.isWebGLCubeRenderTarget===!0,Ft=st.length>1;if(Ft||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=E.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[gt]=[];for(let Et=0;Et<E.mipmaps.length;Et++)H.__webglFramebuffer[gt][Et]=i.createFramebuffer()}else H.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)H.__webglFramebuffer[gt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let gt=0,Et=st.length;gt<Et;gt++){let oe=n.get(st[gt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&ie(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let gt=0;gt<st.length;gt++){let Et=st[gt];H.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[gt]);let oe=r.convert(Et.format,Et.colorSpace),at=r.convert(Et.type),Mt=y(Et.internalFormat,oe,at,Et.colorSpace,A.isXRRenderTarget===!0),Nt=ne(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,H.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)Ct(H.__webglFramebuffer[gt][Et],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et);else Ct(H.__webglFramebuffer[gt],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let gt=0,Et=st.length;gt<Et;gt++){let oe=st[gt],at=n.get(oe);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),Vt(i.TEXTURE_2D,oe),Ct(H.__webglFramebuffer,A,oe,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),g(oe)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,j.__webglTexture),Vt(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)Ct(H.__webglFramebuffer[Et],A,E,i.COLOR_ATTACHMENT0,gt,Et);else Ct(H.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,gt,0);g(E)&&p(gt),e.unbindTexture()}A.depthBuffer&&Wt(A)}function re(A){let E=A.textures;for(let H=0,j=E.length;H<j;H++){let st=E[H];if(g(st)){let J=_(A),Ft=n.get(st).__webglTexture;e.bindTexture(J,Ft),p(J),e.unbindTexture()}}}let Oe=[],B=[];function Un(A){if(A.samples>0){if(ie(A)===!1){let E=A.textures,H=A.width,j=A.height,st=i.COLOR_BUFFER_BIT,J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(A),gt=E.length>1;if(gt)for(let Et=0;Et<E.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Et=0;Et<E.length;Et++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Et]);let oe=n.get(E[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,st,i.NEAREST),l===!0&&(Oe.length=0,B.length=0,Oe.push(i.COLOR_ATTACHMENT0+Et),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Oe.push(J),B.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Et=0;Et<E.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Et]);let oe=n.get(E[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let E=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ne(A){return Math.min(s.maxSamples,A.samples)}function ie(A){let E=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Bt(A){let E=o.render.frame;d.get(A)!==E&&(d.set(A,E),A.update())}function Ae(A,E){let H=A.colorSpace,j=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==es&&H!==qi&&(ae.getTransfer(H)===Ee?(j!==Rn||st!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function Ut(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.setTexture2D=G,this.setTexture2DArray=N,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=Kt,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Un,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ie}function N2(i,t){function e(n,s=qi){let r,o=ae.getTransfer(s);if(n===Ti)return i.UNSIGNED_BYTE;if(n===j0)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.BYTE;if(n===eh)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===K0)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===ih)return i.ALPHA;if(n===sh)return i.RGB;if(n===Rn)return i.RGBA;if(n===rh)return i.LUMINANCE;if(n===oh)return i.LUMINANCE_ALPHA;if(n===rr)return i.DEPTH_COMPONENT;if(n===ur)return i.DEPTH_STENCIL;if(n===ec)return i.RED;if(n===nc)return i.RED_INTEGER;if(n===ah)return i.RG;if(n===ic)return i.RG_INTEGER;if(n===sc)return i.RGBA_INTEGER;if(n===Ho||n===Go||n===Vo||n===Wo)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===zl||n===kl||n===Hl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Vl||n===Wl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gl||n===Vl)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Ql||n===Kl||n===jl||n===t0||n===e0||n===n0||n===i0||n===s0)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ql)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===t0)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===e0)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===n0)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===i0)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===s0)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xo||n===r0||n===o0)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xo)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===r0)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===o0)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lh||n===a0||n===l0||n===c0)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===a0)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===l0)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===c0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var S0=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},nt=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},O2={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},z2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k2=`
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

}`,T0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new En,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:z2,fragmentShader:k2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Dt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},A0=class extends Qi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,u=null,m=null,x=new T0,g=e.getContextAttributes(),p=null,_=null,y=[],v=[],C=new ot,T=null,w=new tn;w.viewport=new be;let F=new tn;F.viewport=new be;let S=[w,F],M=new S0,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ct=y[$];return ct===void 0&&(ct=new Wr,y[$]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function($){let ct=y[$];return ct===void 0&&(ct=new Wr,y[$]=ct),ct.getGripSpace()},this.getHand=function($){let ct=y[$];return ct===void 0&&(ct=new Wr,y[$]=ct),ct.getHandSpace()};function O($){let ct=v.indexOf($.inputSource);if(ct===-1)return;let Ct=y[ct];Ct!==void 0&&(Ct.update($.inputSource,$.frame,c||o),Ct.dispatchEvent({type:$.type,data:$.inputSource}))}function I(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",G);for(let $=0;$<y.length;$++){let ct=v[$];ct!==null&&(v[$]=null,y[$].disconnect(ct))}P=null,V=null,x.reset(),t.setRenderTarget(p),u=null,f=null,h=null,s=null,_=null,xe.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",I),s.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let ct={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),_=new Je(u.framebufferWidth,u.framebufferHeight,{format:Rn,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ct=null,Ct=null,mt=null;g.depth&&(mt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=g.stencil?ur:rr,Ct=g.stencil?hr:Ai);let Ot={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Je(f.textureWidth,f.textureHeight,{format:Rn,type:Ti,depthTexture:new mr(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G($){for(let ct=0;ct<$.removed.length;ct++){let Ct=$.removed[ct],mt=v.indexOf(Ct);mt>=0&&(v[mt]=null,y[mt].disconnect(Ct))}for(let ct=0;ct<$.added.length;ct++){let Ct=$.added[ct],mt=v.indexOf(Ct);if(mt===-1){for(let Wt=0;Wt<y.length;Wt++)if(Wt>=v.length){v.push(Ct),mt=Wt;break}else if(v[Wt]===null){v[Wt]=Ct,mt=Wt;break}if(mt===-1)break}let Ot=y[mt];Ot&&Ot.connect(Ct)}}let N=new R,Z=new R;function k($,ct,Ct){N.setFromMatrixPosition(ct.matrixWorld),Z.setFromMatrixPosition(Ct.matrixWorld);let mt=N.distanceTo(Z),Ot=ct.projectionMatrix.elements,Wt=Ct.projectionMatrix.elements,Kt=Ot[14]/(Ot[10]-1),Ie=Ot[14]/(Ot[10]+1),re=(Ot[9]+1)/Ot[5],Oe=(Ot[9]-1)/Ot[5],B=(Ot[8]-1)/Ot[0],Un=(Wt[8]+1)/Wt[0],ne=Kt*B,ie=Kt*Un,Bt=mt/(-B+Un),Ae=Bt*-B;if(ct.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ae),$.translateZ(Bt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ot[10]===-1)$.projectionMatrix.copy(ct.projectionMatrix),$.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let Ut=Kt+Bt,A=Ie+Bt,E=ne-Ae,H=ie+(mt-Ae),j=re*Ie/A*Ut,st=Oe*Ie/A*Ut;$.projectionMatrix.makePerspective(E,H,j,st,Ut,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function rt($,ct){ct===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ct.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ct=$.near,Ct=$.far;x.texture!==null&&(x.depthNear>0&&(ct=x.depthNear),x.depthFar>0&&(Ct=x.depthFar)),M.near=F.near=w.near=ct,M.far=F.far=w.far=Ct,(P!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,V=M.far),w.layers.mask=$.layers.mask|2,F.layers.mask=$.layers.mask|4,M.layers.mask=w.layers.mask|F.layers.mask;let mt=$.parent,Ot=M.cameras;rt(M,mt);for(let Wt=0;Wt<Ot.length;Wt++)rt(Ot[Wt],mt);Ot.length===2?k(M,w,F):M.projectionMatrix.copy(w.projectionMatrix),ut($,M,mt)};function ut($,ct,Ct){Ct===null?$.matrix.copy(ct.matrixWorld):($.matrix.copy(Ct.matrixWorld),$.matrix.invert(),$.matrix.multiply(ct.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ct.projectionMatrix),$.projectionMatrixInverse.copy(ct.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Pt=null;function Vt($,ct){if(d=ct.getViewerPose(c||o),m=ct,d!==null){let Ct=d.views;u!==null&&(t.setRenderTargetFramebuffer(_,u.framebuffer),t.setRenderTarget(_));let mt=!1;Ct.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let Wt=0;Wt<Ct.length;Wt++){let Kt=Ct[Wt],Ie=null;if(u!==null)Ie=u.getViewport(Kt);else{let Oe=h.getViewSubImage(f,Kt);Ie=Oe.viewport,Wt===0&&(t.setRenderTargetTextures(_,Oe.colorTexture,f.ignoreDepthValues?void 0:Oe.depthStencilTexture),t.setRenderTarget(_))}let re=S[Wt];re===void 0&&(re=new tn,re.layers.enable(Wt),re.viewport=new be,S[Wt]=re),re.matrix.fromArray(Kt.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Kt.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Wt===0&&(M.matrix.copy(re.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(re)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){let Wt=h.getDepthInformation(Ct[0]);Wt&&Wt.isValid&&Wt.texture&&x.init(t,Wt,s.renderState)}}for(let Ct=0;Ct<y.length;Ct++){let mt=v[Ct],Ot=y[Ct];mt!==null&&Ot!==void 0&&Ot.update(mt,ct,c||o)}Pt&&Pt($,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),m=null}let xe=new mh;xe.setAnimationLoop(Vt),this.setAnimationLoop=function($){Pt=$},this.dispose=function(){}}},_s=new Jn,H2=new le;function G2(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ph(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),d(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&u(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$e&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$e&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),y=_.envMap,v=_.envMapRotation;y&&(g.envMap.value=y,_s.copy(v),_s.x*=-1,_s.y*=-1,_s.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),g.envMapRotation.value.setFromMatrix4(H2.makeRotationFromEuler(_s)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function V2(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let v=y.program;n.uniformBlockBinding(_,v)}function c(_,y){let v=s[_.id];v===void 0&&(m(_),v=d(_),s[_.id]=v,_.addEventListener("dispose",g));let C=y.program;n.updateUBOMapping(_,C);let T=t.render.frame;r[_.id]!==T&&(f(_),r[_.id]=T)}function d(_){let y=h();_.__bindingPointIndex=y;let v=i.createBuffer(),C=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let y=s[_.id],v=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,w=v.length;T<w;T++){let F=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,M=F.length;S<M;S++){let P=F[S];if(u(P,T,S,C)===!0){let V=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],I=0;for(let G=0;G<O.length;G++){let N=O[G],Z=x(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,V+I,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,I),I+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(_,y,v,C){let T=_.value,w=y+"_"+v;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{let F=C[w];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return C[w]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function m(_){let y=_.uniforms,v=0,C=16;for(let w=0,F=y.length;w<F;w++){let S=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,P=S.length;M<P;M++){let V=S[M],O=Array.isArray(V.value)?V.value:[V.value];for(let I=0,G=O.length;I<G;I++){let N=O[I],Z=x(N),k=v%C,rt=k%Z.boundary,ut=k+rt;v+=rt,ut!==0&&C-ut<Z.storage&&(v+=C-ut),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=Z.storage}}}let T=v%C;return T>0&&(v+=C-T),_.__size=v,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){let y=_.target;y.removeEventListener("dispose",g);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var oa=class{constructor(t={}){let{canvas:e=Yu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,_=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=ai,this.toneMappingExposure=1;let v=this,C=!1,T=0,w=0,F=null,S=-1,M=null,P=new be,V=new be,O=null,I=new zt(0),G=0,N=e.width,Z=e.height,k=1,rt=null,ut=null,Pt=new be(0,0,N,Z),Vt=new be(0,0,N,Z),xe=!1,$=new Zr,ct=!1,Ct=!1,mt=new le,Ot=new le,Wt=new R,Kt=new be,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function Oe(){return F===null?k:1}let B=n;function Un(b,D){return e.getContext(b,D)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${J0}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",xt,!1),B===null){let D="webgl2";if(B=Un(D,b),B===null)throw Un(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ne,ie,Bt,Ae,Ut,A,E,H,j,st,J,Ft,gt,Et,oe,at,Mt,Nt,kt,bt,se,$t,Se,L;function pt(){ne=new rm(B),ne.init(),$t=new N2(B,ne),ie=new j1(B,ne,t,$t),Bt=new D2(B,ne),ie.reverseDepthBuffer&&f&&Bt.buffers.depth.setReversed(!0),Ae=new lm(B),Ut=new E2,A=new B2(B,ne,Bt,Ut,ie,$t,Ae),E=new em(v),H=new sm(v),j=new mf(B),Se=new Q1(B,j),st=new om(B,j,Ae,Se),J=new dm(B,st,j,Ae),kt=new cm(B,ie,A),at=new tm(Ut),Ft=new y2(v,E,H,ne,ie,Se,at),gt=new G2(v,Ut),Et=new b2,oe=new C2(ne),Nt=new J1(v,E,H,Bt,J,u,l),Mt=new I2(v,J,ie),L=new V2(B,Ae,ie,Bt),bt=new K1(B,ne,Ae),se=new am(B,ne,Ae),Ae.programs=Ft.programs,v.capabilities=ie,v.extensions=ne,v.properties=Ut,v.renderLists=Et,v.shadowMap=Mt,v.state=Bt,v.info=Ae}pt();let q=new A0(v,B);this.xr=q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(N,Z,!1))},this.getSize=function(b){return b.set(N,Z)},this.setSize=function(b,D,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,Z=D,e.width=Math.floor(b*k),e.height=Math.floor(D*k),W===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(N*k,Z*k).floor()},this.setDrawingBufferSize=function(b,D,W){N=b,Z=D,k=W,e.width=Math.floor(b*W),e.height=Math.floor(D*W),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(Pt)},this.setViewport=function(b,D,W,X){b.isVector4?Pt.set(b.x,b.y,b.z,b.w):Pt.set(b,D,W,X),Bt.viewport(P.copy(Pt).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(Vt)},this.setScissor=function(b,D,W,X){b.isVector4?Vt.set(b.x,b.y,b.z,b.w):Vt.set(b,D,W,X),Bt.scissor(V.copy(Vt).multiplyScalar(k).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(b){Bt.setScissorTest(xe=b)},this.setOpaqueSort=function(b){rt=b},this.setTransparentSort=function(b){ut=b},this.getClearColor=function(b){return b.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(b=!0,D=!0,W=!0){let X=0;if(b){let U=!1;if(F!==null){let lt=F.texture.format;U=lt===sc||lt===ic||lt===nc}if(U){let lt=F.texture.type,vt=lt===Ti||lt===Ai||lt===Yr||lt===hr||lt===j0||lt===tc,At=Nt.getClearColor(),wt=Nt.getClearAlpha(),Gt=At.r,Yt=At.g,Rt=At.b;vt?(m[0]=Gt,m[1]=Yt,m[2]=Rt,m[3]=wt,B.clearBufferuiv(B.COLOR,0,m)):(x[0]=Gt,x[1]=Yt,x[2]=Rt,x[3]=wt,B.clearBufferiv(B.COLOR,0,x))}else X|=B.COLOR_BUFFER_BIT}D&&(X|=B.DEPTH_BUFFER_BIT),W&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Et.dispose(),oe.dispose(),Ut.dispose(),E.dispose(),H.dispose(),J.dispose(),Se.dispose(),L.dispose(),Ft.dispose(),q.dispose(),q.removeEventListener("sessionstart",Lc),q.removeEventListener("sessionend",Dc),fs.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let b=Ae.autoReset,D=Mt.enabled,W=Mt.autoUpdate,X=Mt.needsUpdate,U=Mt.type;pt(),Ae.autoReset=b,Mt.enabled=D,Mt.autoUpdate=W,Mt.needsUpdate=X,Mt.type=U}function xt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qt(b){let D=b.target;D.removeEventListener("dispose",qt),De(D)}function De(b){rn(b),Ut.remove(b)}function rn(b){let D=Ut.get(b).programs;D!==void 0&&(D.forEach(function(W){Ft.releaseProgram(W)}),b.isShaderMaterial&&Ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,W,X,U,lt){D===null&&(D=Ie);let vt=U.isMesh&&U.matrixWorld.determinant()<0,At=su(b,D,W,X,U);Bt.setMaterial(X,vt);let wt=W.index,Gt=1;if(X.wireframe===!0){if(wt=st.getWireframeAttribute(W),wt===void 0)return;Gt=2}let Yt=W.drawRange,Rt=W.attributes.position,ce=Yt.start*Gt,Te=(Yt.start+Yt.count)*Gt;lt!==null&&(ce=Math.max(ce,lt.start*Gt),Te=Math.min(Te,(lt.start+lt.count)*Gt)),wt!==null?(ce=Math.max(ce,0),Te=Math.min(Te,wt.count)):Rt!=null&&(ce=Math.max(ce,0),Te=Math.min(Te,Rt.count));let we=Te-ce;if(we<0||we===1/0)return;Se.setup(U,X,At,W,wt);let yn,pe=bt;if(wt!==null&&(yn=j.get(wt),pe=se,pe.setIndex(yn)),U.isMesh)X.wireframe===!0?(Bt.setLineWidth(X.wireframeLinewidth*Oe()),pe.setMode(B.LINES)):pe.setMode(B.TRIANGLES);else if(U.isLine){let It=X.linewidth;It===void 0&&(It=1),Bt.setLineWidth(It*Oe()),U.isLineSegments?pe.setMode(B.LINES):U.isLineLoop?pe.setMode(B.LINE_LOOP):pe.setMode(B.LINE_STRIP)}else U.isPoints?pe.setMode(B.POINTS):U.isSprite&&pe.setMode(B.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)pe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))pe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let It=U._multiDrawStarts,pi=U._multiDrawCounts,me=U._multiDrawCount,Xn=wt?j.get(wt).bytesPerElement:1,Os=Ut.get(X).currentProgram.getUniforms();for(let Tn=0;Tn<me;Tn++)Os.setValue(B,"_gl_DrawID",Tn),pe.render(It[Tn]/Xn,pi[Tn])}else if(U.isInstancedMesh)pe.renderInstances(ce,we,U.count);else if(W.isInstancedBufferGeometry){let It=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,pi=Math.min(W.instanceCount,It);pe.renderInstances(ce,we,pi)}else pe.render(ce,we)};function ve(b,D,W){b.transparent===!0&&b.side===_e&&b.forceSinglePass===!1?(b.side=$e,b.needsUpdate=!0,ho(b,D,W),b.side=Ji,b.needsUpdate=!0,ho(b,D,W),b.side=_e):ho(b,D,W)}this.compile=function(b,D,W=null){W===null&&(W=b),p=oe.get(W),p.init(D),y.push(p),W.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==W&&b.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let X=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let lt=U.material;if(lt)if(Array.isArray(lt))for(let vt=0;vt<lt.length;vt++){let At=lt[vt];ve(At,W,U),X.add(At)}else ve(lt,W,U),X.add(lt)}),y.pop(),p=null,X},this.compileAsync=function(b,D,W=null){let X=this.compile(b,D,W);return new Promise(U=>{function lt(){if(X.forEach(function(vt){Ut.get(vt).currentProgram.isReady()&&X.delete(vt)}),X.size===0){U(b);return}setTimeout(lt,10)}ne.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Wn=null;function fi(b){Wn&&Wn(b)}function Lc(){fs.stop()}function Dc(){fs.start()}let fs=new mh;fs.setAnimationLoop(fi),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(b){Wn=b,q.setAnimationLoop(b),b===null?fs.stop():fs.start()},q.addEventListener("sessionstart",Lc),q.addEventListener("sessionend",Dc),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(D),D=q.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,D,F),p=oe.get(b,y.length),p.init(D),y.push(p),Ot.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$.setFromProjectionMatrix(Ot),Ct=this.localClippingEnabled,ct=at.init(this.clippingPlanes,Ct),g=Et.get(b,_.length),g.init(),_.push(g),q.enabled===!0&&q.isPresenting===!0){let lt=v.xr.getDepthSensingMesh();lt!==null&&Va(lt,D,-1/0,v.sortObjects)}Va(b,D,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(rt,ut),re=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,re&&Nt.addToRenderList(g,b),this.info.render.frame++,ct===!0&&at.beginShadows();let W=p.state.shadowsArray;Mt.render(W,b,D),ct===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,U=g.transmissive;if(p.setupLights(),D.isArrayCamera){let lt=D.cameras;if(U.length>0)for(let vt=0,At=lt.length;vt<At;vt++){let wt=lt[vt];Bc(X,U,b,wt)}re&&Nt.render(b);for(let vt=0,At=lt.length;vt<At;vt++){let wt=lt[vt];Uc(g,b,wt,wt.viewport)}}else U.length>0&&Bc(X,U,b,D),re&&Nt.render(b),Uc(g,b,D);F!==null&&(A.updateMultisampleRenderTarget(F),A.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(v,b,D),Se.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ct===!0&&at.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Va(b,D,W,X){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){X&&Kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ot);let vt=J.update(b),At=b.material;At.visible&&g.push(b,vt,At,W,Kt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){let vt=J.update(b),At=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Kt.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Kt.copy(vt.boundingSphere.center)),Kt.applyMatrix4(b.matrixWorld).applyMatrix4(Ot)),Array.isArray(At)){let wt=vt.groups;for(let Gt=0,Yt=wt.length;Gt<Yt;Gt++){let Rt=wt[Gt],ce=At[Rt.materialIndex];ce&&ce.visible&&g.push(b,vt,ce,W,Kt.z,Rt)}}else At.visible&&g.push(b,vt,At,W,Kt.z,null)}}let lt=b.children;for(let vt=0,At=lt.length;vt<At;vt++)Va(lt[vt],D,W,X)}function Uc(b,D,W,X){let U=b.opaque,lt=b.transmissive,vt=b.transparent;p.setupLightsView(W),ct===!0&&at.setGlobalState(v.clippingPlanes,W),X&&Bt.viewport(P.copy(X)),U.length>0&&co(U,D,W),lt.length>0&&co(lt,D,W),vt.length>0&&co(vt,D,W),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Bc(b,D,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Je(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Mn:Ti,minFilter:Ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let lt=p.state.transmissionRenderTarget[X.id],vt=X.viewport||P;lt.setSize(vt.z,vt.w);let At=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(I),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),re&&Nt.render(W);let wt=v.toneMapping;v.toneMapping=ai;let Gt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ct===!0&&at.setGlobalState(v.clippingPlanes,X),co(b,W,X),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Rt=0,ce=D.length;Rt<ce;Rt++){let Te=D[Rt],we=Te.object,yn=Te.geometry,pe=Te.material,It=Te.group;if(pe.side===_e&&we.layers.test(X.layers)){let pi=pe.side;pe.side=$e,pe.needsUpdate=!0,Nc(we,W,X,yn,pe,It),pe.side=pi,pe.needsUpdate=!0,Yt=!0}}Yt===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt))}v.setRenderTarget(At),v.setClearColor(I,G),Gt!==void 0&&(X.viewport=Gt),v.toneMapping=wt}function co(b,D,W){let X=D.isScene===!0?D.overrideMaterial:null;for(let U=0,lt=b.length;U<lt;U++){let vt=b[U],At=vt.object,wt=vt.geometry,Gt=X===null?vt.material:X,Yt=vt.group;At.layers.test(W.layers)&&Nc(At,D,W,wt,Gt,Yt)}}function Nc(b,D,W,X,U,lt){b.onBeforeRender(v,D,W,X,U,lt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(v,D,W,X,b,lt),U.transparent===!0&&U.side===_e&&U.forceSinglePass===!1?(U.side=$e,U.needsUpdate=!0,v.renderBufferDirect(W,D,X,U,b,lt),U.side=Ji,U.needsUpdate=!0,v.renderBufferDirect(W,D,X,U,b,lt),U.side=_e):v.renderBufferDirect(W,D,X,U,b,lt),b.onAfterRender(v,D,W,X,U,lt)}function ho(b,D,W){D.isScene!==!0&&(D=Ie);let X=Ut.get(b),U=p.state.lights,lt=p.state.shadowsArray,vt=U.state.version,At=Ft.getParameters(b,U.state,lt,D,W),wt=Ft.getProgramCacheKey(At),Gt=X.programs;X.environment=b.isMeshStandardMaterial?D.environment:null,X.fog=D.fog,X.envMap=(b.isMeshStandardMaterial?H:E).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Gt===void 0&&(b.addEventListener("dispose",qt),Gt=new Map,X.programs=Gt);let Yt=Gt.get(wt);if(Yt!==void 0){if(X.currentProgram===Yt&&X.lightsStateVersion===vt)return zc(b,At),Yt}else At.uniforms=Ft.getUniforms(b),b.onBeforeCompile(At,v),Yt=Ft.acquireProgram(At,wt),Gt.set(wt,Yt),X.uniforms=At.uniforms;let Rt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=at.uniform),zc(b,At),X.needsLights=ou(b),X.lightsStateVersion=vt,X.needsLights&&(Rt.ambientLightColor.value=U.state.ambient,Rt.lightProbe.value=U.state.probe,Rt.directionalLights.value=U.state.directional,Rt.directionalLightShadows.value=U.state.directionalShadow,Rt.spotLights.value=U.state.spot,Rt.spotLightShadows.value=U.state.spotShadow,Rt.rectAreaLights.value=U.state.rectArea,Rt.ltc_1.value=U.state.rectAreaLTC1,Rt.ltc_2.value=U.state.rectAreaLTC2,Rt.pointLights.value=U.state.point,Rt.pointLightShadows.value=U.state.pointShadow,Rt.hemisphereLights.value=U.state.hemi,Rt.directionalShadowMap.value=U.state.directionalShadowMap,Rt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Rt.spotShadowMap.value=U.state.spotShadowMap,Rt.spotLightMatrix.value=U.state.spotLightMatrix,Rt.spotLightMap.value=U.state.spotLightMap,Rt.pointShadowMap.value=U.state.pointShadowMap,Rt.pointShadowMatrix.value=U.state.pointShadowMatrix),X.currentProgram=Yt,X.uniformsList=null,Yt}function Oc(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=ar.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function zc(b,D){let W=Ut.get(b);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function su(b,D,W,X,U){D.isScene!==!0&&(D=Ie),A.resetTextureUnits();let lt=D.fog,vt=X.isMeshStandardMaterial?D.environment:null,At=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:es,wt=(X.isMeshStandardMaterial?H:E).get(X.envMap||vt),Gt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Yt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Rt=!!W.morphAttributes.position,ce=!!W.morphAttributes.normal,Te=!!W.morphAttributes.color,we=ai;X.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(we=v.toneMapping);let yn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=yn!==void 0?yn.length:0,It=Ut.get(X),pi=p.state.lights;if(ct===!0&&(Ct===!0||b!==M)){let Bn=b===M&&X.id===S;at.setState(X,b,Bn)}let me=!1;X.version===It.__version?(It.needsLights&&It.lightsStateVersion!==pi.state.version||It.outputColorSpace!==At||U.isBatchedMesh&&It.batching===!1||!U.isBatchedMesh&&It.batching===!0||U.isBatchedMesh&&It.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&It.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&It.instancing===!1||!U.isInstancedMesh&&It.instancing===!0||U.isSkinnedMesh&&It.skinning===!1||!U.isSkinnedMesh&&It.skinning===!0||U.isInstancedMesh&&It.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&It.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&It.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&It.instancingMorph===!1&&U.morphTexture!==null||It.envMap!==wt||X.fog===!0&&It.fog!==lt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==at.numPlanes||It.numIntersection!==at.numIntersection)||It.vertexAlphas!==Gt||It.vertexTangents!==Yt||It.morphTargets!==Rt||It.morphNormals!==ce||It.morphColors!==Te||It.toneMapping!==we||It.morphTargetsCount!==pe)&&(me=!0):(me=!0,It.__version=X.version);let Xn=It.currentProgram;me===!0&&(Xn=ho(X,D,U));let Os=!1,Tn=!1,Pr=!1,Re=Xn.getUniforms(),ei=It.uniforms;if(Bt.useProgram(Xn.program)&&(Os=!0,Tn=!0,Pr=!0),X.id!==S&&(S=X.id,Tn=!0),Os||M!==b){Bt.buffers.depth.getReversed()?(mt.copy(b.projectionMatrix),$u(mt),Ju(mt),Re.setValue(B,"projectionMatrix",mt)):Re.setValue(B,"projectionMatrix",b.projectionMatrix),Re.setValue(B,"viewMatrix",b.matrixWorldInverse);let Oi=Re.map.cameraPosition;Oi!==void 0&&Oi.setValue(B,Wt.setFromMatrixPosition(b.matrixWorld)),ie.logarithmicDepthBuffer&&Re.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Re.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Tn=!0,Pr=!0)}if(U.isSkinnedMesh){Re.setOptional(B,U,"bindMatrix"),Re.setOptional(B,U,"bindMatrixInverse");let Bn=U.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Re.setValue(B,"boneTexture",Bn.boneTexture,A))}U.isBatchedMesh&&(Re.setOptional(B,U,"batchingTexture"),Re.setValue(B,"batchingTexture",U._matricesTexture,A),Re.setOptional(B,U,"batchingIdTexture"),Re.setValue(B,"batchingIdTexture",U._indirectTexture,A),Re.setOptional(B,U,"batchingColorTexture"),U._colorsTexture!==null&&Re.setValue(B,"batchingColorTexture",U._colorsTexture,A));let Fr=W.morphAttributes;if((Fr.position!==void 0||Fr.normal!==void 0||Fr.color!==void 0)&&kt.update(U,W,Xn),(Tn||It.receiveShadow!==U.receiveShadow)&&(It.receiveShadow=U.receiveShadow,Re.setValue(B,"receiveShadow",U.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ei.envMap.value=wt,ei.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&D.environment!==null&&(ei.envMapIntensity.value=D.environmentIntensity),Tn&&(Re.setValue(B,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&ru(ei,Pr),lt&&X.fog===!0&&gt.refreshFogUniforms(ei,lt),gt.refreshMaterialUniforms(ei,X,k,Z,p.state.transmissionRenderTarget[b.id]),ar.upload(B,Oc(It),ei,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ar.upload(B,Oc(It),ei,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Re.setValue(B,"center",U.center),Re.setValue(B,"modelViewMatrix",U.modelViewMatrix),Re.setValue(B,"normalMatrix",U.normalMatrix),Re.setValue(B,"modelMatrix",U.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Bn=X.uniformsGroups;for(let Oi=0,zi=Bn.length;Oi<zi;Oi++){let kc=Bn[Oi];L.update(kc,Xn),L.bind(kc,Xn)}}return Xn}function ru(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function ou(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,D,W){Ut.get(b.texture).__webglTexture=D,Ut.get(b.depthTexture).__webglTexture=W;let X=Ut.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){let W=Ut.get(b);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,W=0){F=b,T=D,w=W;let X=!0,U=null,lt=!1,vt=!1;if(b){let wt=Ut.get(b);if(wt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(B.FRAMEBUFFER,null),X=!1;else if(wt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(wt.__hasExternalTextures)A.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Rt=b.depthTexture;if(wt.__boundDepthTexture!==Rt){if(Rt!==null&&Ut.has(Rt)&&(b.width!==Rt.image.width||b.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}let Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(vt=!0);let Yt=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Yt[D])?U=Yt[D][W]:U=Yt[D],lt=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?U=Ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Yt)?U=Yt[W]:U=Yt,P.copy(b.viewport),V.copy(b.scissor),O=b.scissorTest}else P.copy(Pt).multiplyScalar(k).floor(),V.copy(Vt).multiplyScalar(k).floor(),O=xe;if(Bt.bindFramebuffer(B.FRAMEBUFFER,U)&&X&&Bt.drawBuffers(b,U),Bt.viewport(P),Bt.scissor(V),Bt.setScissorTest(O),lt){let wt=Ut.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+D,wt.__webglTexture,W)}else if(vt){let wt=Ut.get(b.texture),Gt=D||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,wt.__webglTexture,W||0,Gt)}S=-1},this.readRenderTargetPixels=function(b,D,W,X,U,lt,vt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At){Bt.bindFramebuffer(B.FRAMEBUFFER,At);try{let wt=b.texture,Gt=wt.format,Yt=wt.type;if(!ie.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-X&&W>=0&&W<=b.height-U&&B.readPixels(D,W,X,U,$t.convert(Gt),$t.convert(Yt),lt)}finally{let wt=F!==null?Ut.get(F).__webglFramebuffer:null;Bt.bindFramebuffer(B.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(b,D,W,X,U,lt,vt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(At=At[vt]),At){let wt=b.texture,Gt=wt.format,Yt=wt.type;if(!ie.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-X&&W>=0&&W<=b.height-U){Bt.bindFramebuffer(B.FRAMEBUFFER,At);let Rt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Rt),B.bufferData(B.PIXEL_PACK_BUFFER,lt.byteLength,B.STREAM_READ),B.readPixels(D,W,X,U,$t.convert(Gt),$t.convert(Yt),0);let ce=F!==null?Ut.get(F).__webglFramebuffer:null;Bt.bindFramebuffer(B.FRAMEBUFFER,ce);let Te=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Zu(B,Te,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Rt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,lt),B.deleteBuffer(Rt),B.deleteSync(Te),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,W=0){b.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);let X=Math.pow(2,-W),U=Math.floor(b.image.width*X),lt=Math.floor(b.image.height*X),vt=D!==null?D.x:0,At=D!==null?D.y:0;A.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,vt,At,U,lt),Bt.unbindTexture()},this.copyTextureToTexture=function(b,D,W=null,X=null,U=0){b.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],D=arguments[2],U=arguments[3]||0,W=null);let lt,vt,At,wt,Gt,Yt,Rt,ce,Te,we=b.isCompressedTexture?b.mipmaps[U]:b.image;W!==null?(lt=W.max.x-W.min.x,vt=W.max.y-W.min.y,At=W.isBox3?W.max.z-W.min.z:1,wt=W.min.x,Gt=W.min.y,Yt=W.isBox3?W.min.z:0):(lt=we.width,vt=we.height,At=we.depth||1,wt=0,Gt=0,Yt=0),X!==null?(Rt=X.x,ce=X.y,Te=X.z):(Rt=0,ce=0,Te=0);let yn=$t.convert(D.format),pe=$t.convert(D.type),It;D.isData3DTexture?(A.setTexture3D(D,0),It=B.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),It=B.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),It=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,D.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,D.unpackAlignment);let pi=B.getParameter(B.UNPACK_ROW_LENGTH),me=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Xn=B.getParameter(B.UNPACK_SKIP_PIXELS),Os=B.getParameter(B.UNPACK_SKIP_ROWS),Tn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,we.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,we.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,wt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Gt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Yt);let Pr=b.isDataArrayTexture||b.isData3DTexture,Re=D.isDataArrayTexture||D.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let ei=Ut.get(b),Fr=Ut.get(D),Bn=Ut.get(ei.__renderTarget),Oi=Ut.get(Fr.__renderTarget);Bt.bindFramebuffer(B.READ_FRAMEBUFFER,Bn.__webglFramebuffer),Bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let zi=0;zi<At;zi++)Pr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ut.get(b).__webglTexture,U,Yt+zi),b.isDepthTexture?(Re&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ut.get(D).__webglTexture,U,Te+zi),B.blitFramebuffer(wt,Gt,lt,vt,Rt,ce,lt,vt,B.DEPTH_BUFFER_BIT,B.NEAREST)):Re?B.copyTexSubImage3D(It,U,Rt,ce,Te+zi,wt,Gt,lt,vt):B.copyTexSubImage2D(It,U,Rt,ce,Te+zi,wt,Gt,lt,vt);Bt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Re?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(It,U,Rt,ce,Te,lt,vt,At,yn,pe,we.data):D.isCompressedArrayTexture?B.compressedTexSubImage3D(It,U,Rt,ce,Te,lt,vt,At,yn,we.data):B.texSubImage3D(It,U,Rt,ce,Te,lt,vt,At,yn,pe,we):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,U,Rt,ce,lt,vt,yn,pe,we.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,U,Rt,ce,we.width,we.height,yn,we.data):B.texSubImage2D(B.TEXTURE_2D,U,Rt,ce,lt,vt,yn,pe,we);B.pixelStorei(B.UNPACK_ROW_LENGTH,pi),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,me),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Os),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Tn),U===0&&D.generateMipmaps&&B.generateMipmap(It),Bt.unbindTexture()},this.copyTextureToTexture3D=function(b,D,W=null,X=null,U=0){return b.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],D=arguments[3],U=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,D,W,X,U)},this.initRenderTarget=function(b){Ut.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Bt.unbindTexture()},this.resetState=function(){T=0,w=0,F=null,Bt.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var aa=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},la=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},w0=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=h0,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},fn=new R,ca=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},li=class extends Ri{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},js,Br=new R,tr=new R,er=new R,nr=new ot,Nr=new ot,yh=new le,Lo=new R,Or=new R,Do=new R,zd=new ot,yl=new ot,kd=new ot,Ci=class extends Ve{constructor(t=new li){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new w0(e,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new ca(n,3,0,!1)),js.setAttribute("uv",new ca(n,2,3,!1))}this.geometry=js,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),yh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Uo(Lo.set(-.5,-.5,0),er,o,tr,s,r),Uo(Or.set(.5,-.5,0),er,o,tr,s,r),Uo(Do.set(.5,.5,0),er,o,tr,s,r),zd.set(0,0),yl.set(1,0),kd.set(1,1);let a=t.ray.intersectTriangle(Lo,Or,Do,!1,Br);if(a===null&&(Uo(Or.set(-.5,.5,0),er,o,tr,s,r),yl.set(0,1),a=t.ray.intersectTriangle(Lo,Do,Or,!1,Br),a===null))return;let l=t.ray.origin.distanceTo(Br);l<t.near||l>t.far||e.push({distance:l,point:Br.clone(),uv:Yi.getInterpolation(Br,Lo,Or,Do,zd,yl,kd,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Uo(i,t,e,n,s,r){nr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Nr.x=r*nr.x-s*nr.y,Nr.y=s*nr.x+r*nr.y):Nr.copy(nr),i.copy(t),i.x+=Nr.x,i.y+=Nr.y,i.applyMatrix4(yh)}var $r=class extends En{constructor(t=null,e=1,n=1,s,r,o,a,l,c=mn,d=mn,h,f){super(null,o,a,l,c,d,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var da=class extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ir=new le,Hd=new le,Bo=[],Gd=new wi,W2=new le,zr=new it,kr=new Ki,gr=class extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new da(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,W2)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),Gd.copy(t.boundingBox).applyMatrix4(ir),this.boundingBox.union(Gd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),kr.copy(t.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(kr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(n),t.ray.intersectsSphere(kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),Hd.multiplyMatrices(n,ir),zr.matrixWorld=Hd,zr.raycast(t,Bo);for(let o=0,a=Bo.length;o<a;o++){let l=Bo[o];l.instanceId=r,l.object=this,e.push(l)}Bo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $r(new Float32Array(s*this.count),s,this.count,ec,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Jr=class extends Ri{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vd=new le,R0=new Ko,No=new Ki,Oo=new R,ha=class extends Ve{constructor(t=new Ue,e=new Jr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Vd.copy(s).invert(),R0.copy(t.ray).applyMatrix4(Vd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let m=f,x=u;m<x;m++){let g=c.getX(m);Oo.fromBufferAttribute(h,g),Wd(Oo,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(h.count,o.start+o.count);for(let m=f,x=u;m<x;m++)Oo.fromBufferAttribute(h,m),Wd(Oo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wd(i,t,e,n,s,r,o){let a=R0.distanceSqToPoint(i);if(a<e){let l=new R;R0.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var gn=class extends En{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let d=n[s],f=n[s+1]-d,u=(o-d)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ot:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,l=new le;for(let u=0;u<=t;u++){let m=u/t;s[u]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(je(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,m))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(je(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qr=class extends On{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*d-u*h+this.aX,c=f*h+u*d+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},C0=class extends Qr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function oc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,h){let f=(o-r)/c-(a-r)/(c+d)+(a-o)/d,u=(a-o)/d-(l-o)/(d+h)+(l-a)/h;f*=d,u*=d,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var zo=new R,El=new oc,Ml=new oc,bl=new oc,P0=class extends On{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(zo.subVectors(s[0],s[1]).add(s[0]),c=zo);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=zo),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),u),x=Math.pow(h.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(d),u);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),El.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,m,x,g),Ml.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,m,x,g),bl.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,m,x,g)}else this.curveType==="catmullrom"&&(El.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),Ml.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),bl.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return n.set(El.calc(l),Ml.calc(l),bl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Xd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function X2(i,t){let e=1-i;return e*e*t}function q2(i,t){return 2*(1-i)*i*t}function Y2(i,t){return i*i*t}function Xr(i,t,e,n){return X2(i,t)+q2(i,e)+Y2(i,n)}function Z2(i,t){let e=1-i;return e*e*e*t}function $2(i,t){let e=1-i;return 3*e*e*i*t}function J2(i,t){return 3*(1-i)*i*i*t}function Q2(i,t){return i*i*i*t}function qr(i,t,e,n,s){return Z2(i,t)+$2(i,e)+J2(i,n)+Q2(i,s)}var ua=class extends On{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qr(t,s.x,r.x,o.x,a.x),qr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},F0=class extends On{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qr(t,s.x,r.x,o.x,a.x),qr(t,s.y,r.y,o.y,a.y),qr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends On{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},I0=class extends On{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends On{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,s.x,r.x,o.x),Xr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},L0=class extends On{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,s.x,r.x,o.x),Xr(t,s.y,r.y,o.y),Xr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Xd(a,l.x,c.x,d.x,h.x),Xd(a,l.y,c.y,d.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},qd=Object.freeze({__proto__:null,ArcCurve:C0,CatmullRomCurve3:P0,CubicBezierCurve:ua,CubicBezierCurve3:F0,EllipseCurve:Qr,LineCurve:fa,LineCurve3:I0,QuadraticBezierCurve:pa,QuadraticBezierCurve3:L0,SplineCurve:ma}),D0=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new qd[s.type]().fromJSON(s))}return this}},U0=class extends D0{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fa(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new pa(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ua(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ma(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+c,e+d,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Qr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},xr=class i extends Ue{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=je(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],d=1/e,h=new R,f=new ot,u=new R,m=new R,x=new R,g=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-g,u.z=p*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(m)}for(let _=0;_<=e;_++){let y=n+_*d*s,v=Math.sin(y),C=Math.cos(y);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*v,h.y=t[T].y,h.z=t[T].x*C,o.push(h.x,h.y,h.z),f.x=_/e,f.y=T/(t.length-1),a.push(f.x,f.y);let w=l[3*T+0]*v,F=l[3*T+1],S=l[3*T+0]*C;c.push(w,F,S)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let v=y+_*t.length,C=v,T=v+t.length,w=v+t.length+1,F=v+1;r.push(C,T,F),r.push(w,F,T)}this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(a,2)),this.setAttribute("normal",new ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ga=class i extends xr{constructor(t=1,e=1,n=4,s=8){let r=new U0;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Qn=class i extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,d=new ot;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let u=n+h/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[f]/t+1)/2,d.y=(o[f+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ln=class i extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],h=[],f=[],u=[],m=0,x=[],g=n/2,p=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new ee(h,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(u,2));function _(){let v=new R,C=new R,T=0,w=(e-t)/n;for(let F=0;F<=r;F++){let S=[],M=F/r,P=M*(e-t)+t;for(let V=0;V<=s;V++){let O=V/s,I=O*l+a,G=Math.sin(I),N=Math.cos(I);C.x=P*G,C.y=-M*n+g,C.z=P*N,h.push(C.x,C.y,C.z),v.set(G,w,N).normalize(),f.push(v.x,v.y,v.z),u.push(O,1-M),S.push(m++)}x.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let M=x[S][F],P=x[S+1][F],V=x[S+1][F+1],O=x[S][F+1];(t>0||S!==0)&&(d.push(M,P,O),T+=3),(e>0||S!==r-1)&&(d.push(P,V,O),T+=3)}c.addGroup(p,T,0),p+=T}function y(v){let C=m,T=new ot,w=new R,F=0,S=v===!0?t:e,M=v===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,g*M,0),f.push(0,M,0),u.push(.5,.5),m++;let P=m;for(let V=0;V<=s;V++){let I=V/s*l+a,G=Math.cos(I),N=Math.sin(I);w.x=S*N,w.y=g*M,w.z=S*G,h.push(w.x,w.y,w.z),f.push(0,M,0),T.x=G*.5+.5,T.y=N*.5*M+.5,u.push(T.x,T.y),m++}for(let V=0;V<s;V++){let O=C+V,I=P+V;v===!0?d.push(I,I+1,O):d.push(I+1,I,O),F+=3}c.addGroup(p,F,v===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ci=class i extends ln{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},B0=class i extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),d(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new R,v=new R,C=new R;for(let T=0;T<e.length;T+=3)u(e[T+0],y),u(e[T+1],v),u(e[T+2],C),l(y,v,C,_)}function l(_,y,v,C){let T=C+1,w=[];for(let F=0;F<=T;F++){w[F]=[];let S=_.clone().lerp(v,F/T),M=y.clone().lerp(v,F/T),P=T-F;for(let V=0;V<=P;V++)V===0&&F===T?w[F][V]=S:w[F][V]=S.clone().lerp(M,V/P)}for(let F=0;F<T;F++)for(let S=0;S<2*(T-F)-1;S++){let M=Math.floor(S/2);S%2===0?(f(w[F][M+1]),f(w[F+1][M]),f(w[F][M])):(f(w[F][M+1]),f(w[F+1][M+1]),f(w[F+1][M]))}}function c(_){let y=new R;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function d(){let _=new R;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let v=g(_)/2/Math.PI+.5,C=p(_)/Math.PI+.5;o.push(v,1-C)}m(),h()}function h(){for(let _=0;_<o.length;_+=6){let y=o[_+0],v=o[_+2],C=o[_+4],T=Math.max(y,v,C),w=Math.min(y,v,C);T>.9&&w<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function u(_,y){let v=_*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function m(){let _=new R,y=new R,v=new R,C=new R,T=new ot,w=new ot,F=new ot;for(let S=0,M=0;S<r.length;S+=9,M+=6){_.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),F.set(o[M+4],o[M+5]),C.copy(_).add(y).add(v).divideScalar(3);let P=g(C);x(T,M+0,_,P),x(w,M+2,y,P),x(F,M+4,v,P)}}function x(_,y,v,C){C<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=C/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var xa=class i extends B0{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var va=class i extends Ue{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],d=[],h=t,f=(e-t)/s,u=new R,m=new ot;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;u.x=h*Math.cos(p),u.y=h*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),m.x=(u.x/e+1)/2,m.y=(u.y/e+1)/2,d.push(m.x,m.y)}h+=f}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let _=p+g,y=_,v=_+n+1,C=_+n+2,T=_+1;a.push(y,v,T),a.push(v,C,T)}}this.setIndex(a),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var he=class i extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,d=[],h=new R,f=new R,u=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let _=[],y=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){let T=C/e;h.x=-t*Math.cos(s+T*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+T*r)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(T+v,1-y),_.push(c++)}d.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let y=d[p][_+1],v=d[p][_],C=d[p+1][_],T=d[p+1][_+1];(p!==0||o>0)&&u.push(y,v,T),(p!==n-1||l<Math.PI)&&u.push(v,C,T)}this.setIndex(u),this.setAttribute("position",new ee(m,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ji=class i extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],d=new R,h=new R,f=new R;for(let u=0;u<=n;u++)for(let m=0;m<=s;m++){let x=m/s*r,g=u/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(x),h.y=(t+e*Math.cos(g))*Math.sin(x),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let m=1;m<=s;m++){let x=(s+1)*u+m-1,g=(s+1)*(u-1)+m-1,p=(s+1)*(u-1)+m,_=(s+1)*u+m;o.push(x,g,_),o.push(g,p,_)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ze=class extends Ri{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new zt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function ko(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function K2(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},N0=class extends vr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wc,endingEnd:Wc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xc:r=t,a=2*e-n;break;case qc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xc:o=t,l=2*n-e;break;case qc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,y=(-1-u)*g+(1.5+u)*x+.5*m,v=u*g-u*x;for(let C=0;C!==a;++C)r[C]=p*o[d+C]+_*o[c+C]+y*o[l+C]+v*o[h+C];return r}},O0=class extends vr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(n-e)/(s-e),h=1-d;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*d;return r}},z0=class extends vr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ko(e,this.TimeBufferType),this.values=ko(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ko(t.times,Array),values:ko(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new z0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new O0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new N0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qo:e=this.InterpolantFactoryMethodDiscrete;break;case d0:e=this.InterpolantFactoryMethodLinear;break;case Xa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qo;case this.InterpolantFactoryMethodLinear:return d0;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&K2(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,f=h-n,u=h+n;for(let m=0;m!==n;++m){let x=e[h+m];if(x!==e[f+m]||x!==e[u+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[h+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=d0;var Ts=class extends Kn{constructor(t,e,n){super(t,e,n)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=qo;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var k0=class extends Kn{};k0.prototype.ValueTypeName="color";var H0=class extends Kn{};H0.prototype.ValueTypeName="number";var G0=class extends vr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let d=c+a;c!==d;c+=4)$n.slerpFlat(r,0,o,c-a,o,c,l);return r}},_a=class extends Kn{InterpolantFactoryMethodLinear(t){return new G0(this.times,this.values,this.getValueSize(),t)}};_a.prototype.ValueTypeName="quaternion";_a.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends Kn{constructor(t,e,n){super(t,e,n)}};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=qo;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var V0=class extends Kn{};V0.prototype.ValueTypeName="vector";var W0=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){let u=c[h],m=c[h+1];if(u.global&&(u.lastIndex=0),u.test(d))return m}return null}}},j2=new W0,X0=class{constructor(t){this.manager=t!==void 0?t:j2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};X0.DEFAULT_MATERIAL_NAME="__DEFAULT";var ws=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ts=class extends ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Sl=new le,Yd=new R,Zd=new R,Kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Yd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yd),Zd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zd),e.updateMatrixWorld(),Sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},q0=class extends Kr{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Zo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ya=class extends ws{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new q0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},$d=new le,Hr=new R,Tl=new R,Y0=class extends Kr{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hr),Tl.copy(n.position),Tl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Tl),n.updateMatrixWorld(),s.makeTranslation(-Hr.x,-Hr.y,-Hr.z),$d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($d)}},Pn=class extends ws{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Y0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Z0=class extends Kr{constructor(){super(new pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},di=class extends ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Z0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ea=class extends ws{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ma=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Jd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Jd(){return 0}var ac="\\[\\]\\.:\\/",tg=new RegExp("["+ac+"]","g"),lc="[^"+ac+"]",eg="[^"+ac.replace("\\.","")+"]",ng=/((?:WC+[\/:])*)/.source.replace("WC",lc),ig=/(WCOD+)?/.source.replace("WCOD",eg),sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),og=new RegExp("^"+ng+ig+sg+rg+"$"),ag=["material","materials","bones","map"],$0=class{constructor(t,e,n){let s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tg,"")}static parseTrackName(t){let e=og.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ag.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=$0;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V5=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:J0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=J0);var Aa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},lg=new pr(-1,1,1,-1,0,1),cc=class extends Ue{constructor(){super(),this.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ee([0,2,0,0,2,0],2))}},cg=new cc,Er=class{constructor(t){this._mesh=new it(cg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,lg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Rs=class extends Pi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=_r.clone(t.uniforms),this.material=new Xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Er(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var jr=class extends Pi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},wa=class extends Pi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ra=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ot);this._width=n.width,this._height=n.height,e=new Je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rs(Aa),this.copyPass.material.blending=oi,this.clock=new Ma}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jr!==void 0&&(o instanceof jr?n=!0:o instanceof wa&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Eh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new zt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Mr=class i extends Pi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new zt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Je(r,o,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Je(r,o,{type:Mn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Je(r,o,{type:Mn});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Eh;this.highPassUniforms=_r.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ot(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let d=Aa;this.copyUniforms=_r.clone(d.uniforms),this.blendMaterial=new Xe({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Si,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new zt,this.oldClearAlpha=1,this.basic=new Xt,this.fsQuad=new Er(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ot(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Mr.BlurDirectionX=new ot(1,0);Mr.BlurDirectionY=new ot(0,1);var Fi=1920,Ii=1080;function Pe(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ns=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),jt=(i,t,e)=>i+(t-i)*e,yt=(i,t,e)=>{let n=ns((e-i)/(t-i));return n*n*(3-2*n)};var dg=i=>(i=ns(i),i*i*(3-2*i));function dc(i,t){if(t<=i[0][0])return i[0][1];for(let e=1;e<i.length;e++)if(t<=i[e][0]){let n=dg((t-i[e-1][0])/(i[e][0]-i[e-1][0])),s=i[e-1][1],r=i[e][1];return Array.isArray(s)?s.map((o,a)=>jt(o,r[a],n)):jt(s,r,n)}return i[i.length-1][1]}var hg={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new ot(Fi,Ii)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){if(maxBlur<.6){gl_FragColor=vec4(texture2D(tColor,vUv).rgb,1.);return;}float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<44;i++){float fi=float(i);float r=sqrt(fi/44.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},ug={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new zt(1,1,1)},sat:{value:1},flash:{value:0},toon:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash,toon;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=mix(aces(c*.88),c/(1.+.18*c),toon);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(1.,.66);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1920.,1080.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Ca=class{constructor(t){let e=this.r=new oa({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(Fi,Ii,!1),e.shadowMap.enabled=!0,e.shadowMap.type=Q0,e.toneMapping=ai,e.outputColorSpace=es;let n=new mr(Fi,Ii);n.type=Ai,this.rt=new Je(Fi,Ii,{type:Mn,samples:4,depthTexture:n}),this.composer=new Ra(e,new Je(Fi,Ii,{type:Mn})),this.dof=new Rs(hg,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=n,this.bloom=new Mr(new ot(Fi/2,Ii/2),.45,.75,.82),this.grade=new Rs(ug),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(o=>t>=o.t0&&t<o.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let n=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=n.focus??6,s.range.value=n.range??3,s.maxBlur.value=n.blur??20,this.bloom.strength=n.bloom??.45,this.bloom.threshold=n.bloomT??.82,this.bloom.radius=n.bloomR??.75,r.vig.value=n.vig??.42,r.exposure.value=n.exposure??1,r.sat.value=n.sat??1,r.flash.value=n.flash??0,r.toon.value=n.toon??0,r.frame.value=Math.floor(t*30)%97,r.tint.value.set(n.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function Mh(i,t,e,n=40){let s=new la;s.background=new zt(e);let r=new tn(n,Fi/Ii,.08,400);return{t0:i,t1:t,scene:s,camera:r,update(){return{}}}}function bh(i,t,e,n=0){i.position.set(t[0],t[1],t[2]),i.up.set(Math.sin(n),Math.cos(n),0),i.lookAt(e[0],e[1],e[2])}var to=new R;function zn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;to.copy(t),to[n]=0,to.normalize();let c=.5*o/(o+a),d=1-to.angleTo(i)/l;return Math.sign(to[e])===1?d*c:a/(o+a)+c+c*(1-d)}var Pa=class extends We{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new R,l=new R,c=new R(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,u=d.length/6,m=new R,x=.5/s;for(let g=0,p=0;g<d.length;g+=3,p+=2)switch(a.fromArray(d,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),d[g+0]=c.x*Math.sign(a.x)+l.x*r,d[g+1]=c.y*Math.sign(a.y)+l.y*r,d[g+2]=c.z*Math.sign(a.z)+l.z*r,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/u)){case 0:m.set(1,0,0),f[p+0]=zn(m,l,"z","y",r,n),f[p+1]=1-zn(m,l,"y","z",r,e);break;case 1:m.set(-1,0,0),f[p+0]=1-zn(m,l,"z","y",r,n),f[p+1]=1-zn(m,l,"y","z",r,e);break;case 2:m.set(0,1,0),f[p+0]=1-zn(m,l,"x","z",r,t),f[p+1]=zn(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),f[p+0]=1-zn(m,l,"x","z",r,t),f[p+1]=1-zn(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),f[p+0]=1-zn(m,l,"x","y",r,t),f[p+1]=1-zn(m,l,"y","x",r,e);break;case 5:m.set(0,0,-1),f[p+0]=zn(m,l,"x","y",r,t),f[p+1]=1-zn(m,l,"y","x",r,e);break}}};var is=null;function pc(){if(is)return is;let i=new Uint8Array([118,118,118,255,196,196,196,255,255,255,255,255]);return is=new $r(i,3,1,Rn),is.minFilter=is.magFilter=mn,is.generateMipmaps=!1,is.needsUpdate=!0,is}var hc=new Map;function Tt(i,t){if(!t){let e=String(i);if(hc.has(e))return hc.get(e);let n=new ze({color:i,gradientMap:pc()});return hc.set(e,n),n}return new ze({color:i,gradientMap:pc(),...t})}var fg=`uniform float w; uniform float minPx; uniform vec2 res;
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
}`,pg="uniform vec3 col; uniform float op; void main(){ gl_FragColor = vec4(col, op); }",uc=new Map;function mg(i=.014,t="#17131C",e=1.6){let n=i+t+e;if(uc.has(n))return uc.get(n);let s=new Xe({uniforms:{w:{value:i},minPx:{value:e},res:{value:new ot(Fi,Ii)},col:{value:new zt(t).convertSRGBToLinear()},op:{value:1}},vertexShader:fg,fragmentShader:pg,side:$e});return uc.set(n,s),s}function ss(i,t=.014,e,n){let s=new it(i.geometry,mg(t,e,n));return s.castShadow=!1,s.receiveShadow=!1,s.userData.isOutline=!0,i.add(s),i}function jn(i,t,e={}){let n=new it(i,t&&t.isMaterial?t:Tt(t));return n.castShadow=e.shadow??!0,n.receiveShadow=!0,e.out&&ss(n,e.out===!0?.014:e.out,e.outCol,e.minPx),e.pos&&n.position.set(...e.pos),e.rot&&n.rotation.set(...e.rot),n}var rs=(i,t,e,n=.04,s=3)=>new Pa(i,t,e,s,Math.min(n,i/2-.001,t/2-.001,e/2-.001));function Q(i,t,e,n,s=0,r=0,o=0,a={}){return jn(rs(i,t,e,a.r??Math.min(.05,Math.min(i,t,e)*.18)),n,{pos:[s,r,o],...a})}function Qt(i,t,e,n,s=0,r=0,o=0,a={}){return jn(new We(i,t,e),n,{pos:[s,r,o],...a})}function St(i,t,e,n,s=0,r=0,o=0,a={}){return jn(new ln(i,t,e,a.seg||24),n,{pos:[s,r,o],...a})}function nn(i,t,e=0,n=0,s=0,r={}){return jn(new he(i,r.seg||24,Math.max(12,(r.seg||24)*.6|0)),t,{pos:[e,n,s],...r})}function Ht(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t;let s=n.getContext("2d");e(s,i,t);let r=new gn(n);return r.colorSpace=Ce,r.anisotropy=8,r}var ge=(i,t={})=>new ze({map:i,gradientMap:pc(),...t}),fc=null;function eo(i=.32,t=.38){fc||(fc=Ht(128,128,n=>{let s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(20,16,30,1)"),s.addColorStop(.55,"rgba(20,16,30,.55)"),s.addColorStop(1,"rgba(20,16,30,0)"),n.fillStyle=s,n.fillRect(0,0,128,128)}));let e=new it(new Dt(i*2,i*2),new Xt({map:fc,transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return e.rotation.x=-Math.PI/2,e.renderOrder=1,e}function Lt(i,t={}){let e=new ts(t.sky||"#EAF2FF",t.ground||"#B9A898",t.hemi??1.5);i.add(e);let n=new di(t.key||"#FFF4E2",t.ki??2.2);n.position.set(...t.pos||[6,10,7]),n.castShadow=t.shadow??!0,n.shadow.mapSize.set(2048,2048);let s=t.r||12;return Object.assign(n.shadow.camera,{left:-s,right:s,top:s,bottom:-s,near:.5,far:t.far||60}),n.shadow.bias=-4e-4,n.shadow.normalBias=.02,n.shadow.radius=3,t.target&&(n.target.position.set(...t.target),i.add(n.target),n.position.set(t.target[0]+(t.pos||[6,10,7])[0],t.target[1]+(t.pos||[6,10,7])[1],t.target[2]+(t.pos||[6,10,7])[2])),i.add(n),{hemi:e,k:n}}var Sh=(i={})=>({toon:1,blur:0,bloom:.18,bloomT:.95,bloomR:.4,vig:.22,exposure:1,sat:1.05,...i});var xn=Math.PI/180,bn=.3,gg=.012,Qe={phi0:Math.PI/2-1,phiL:2,th0:.62,thL:1.55,W:1024,H:512},ue=i=>Qe.W/2+i/Qe.phiL*Qe.W,de=i=>(i-Qe.th0)/Qe.thL*Qe.H,kn=i=>i/Qe.phiL*Qe.W,Sn=i=>i/Qe.thL*Qe.H,Cs="#1B1420";function xg(i,t,e){i.clearRect(0,0,Qe.W,Qe.H),i.lineCap="round",i.lineJoin="round";let n=t.emo||"neutro",s=1.45,r=.31;if(t.blush||n==="feliz"||n==="apaixonado"||n==="vergonha"){i.fillStyle="rgba(240,110,110,"+(n==="vergonha"?.55:.3)+")";for(let y of[-1,1])i.beginPath(),i.ellipse(ue(y*.44),de(1.7),kn(.075),Sn(.045),0,0,7),i.fill()}let o=ns(Math.max(t.blink||0,n==="sono"?.55:n==="triste"||n==="choro"?.22:n==="bravo"?.25:n==="desconfiado"?.4:n==="tedio"?.5:0)),a=n==="surpreso"||n==="medo"?1.15:1;for(let y of[-1,1]){let v=ue(y*r),C=de(s),T=kn(.128)*a,w=Sn(.158)*a;if(n==="feliz"&&!t.olhosAbertos||(t.blink||0)>.92){i.strokeStyle=Cs,i.lineWidth=11,i.beginPath(),n==="feliz"||n==="rindo"?i.arc(v,C+w*.25,T*.85,Math.PI*1.12,Math.PI*1.88):(i.moveTo(v-T*.9,C+w*.15),i.quadraticCurveTo(v,C+w*.55,v+T*.9,C+w*.15)),i.stroke();continue}i.save(),i.beginPath(),i.ellipse(v,C,T,w,0,0,7),i.clip(),i.fillStyle="#FFFFFF",i.fillRect(v-T,C-w,T*2,w*2);let F=n==="surpreso"||n==="medo"?.55:.68,S=ns(e[0],-1,1),M=ns(e[1],-1,1),P=v+S*T*.38,V=C+M*w*.32+w*.06;i.fillStyle="#231A26",i.beginPath(),i.ellipse(P,V,T*F,w*F*.98,0,0,7),i.fill(),i.fillStyle="#FFFFFF",i.beginPath(),i.ellipse(P-T*.22,V-w*.28,T*.2,w*.17,0,0,7),i.fill(),i.beginPath(),i.ellipse(P+T*.2,V+w*.22,T*.08,w*.07,0,0,7),i.fill();let O=n==="bravo"?-y*.45:n==="triste"||n==="choro"||n==="preocupado"?y*.35:0;if(o>.02||O){let I=C-w+w*2*o;i.fillStyle=t.pele||"#C98B5E",i.beginPath(),i.moveTo(v-T*1.2,C-w*1.3),i.lineTo(v+T*1.2,C-w*1.3),i.lineTo(v+T*1.2,I+Math.tan(O)*T*1.2),i.lineTo(v-T*1.2,I-Math.tan(O)*T*1.2),i.closePath(),i.fill(),i.strokeStyle=Cs,i.lineWidth=8,i.beginPath(),i.moveTo(v-T*1.1,I-Math.tan(O)*T*1.1),i.lineTo(v+T*1.1,I+Math.tan(O)*T*1.1),i.stroke()}i.restore(),i.strokeStyle=Cs,i.lineWidth=8,i.beginPath(),i.ellipse(v,C,T,w,0,0,7),i.stroke(),t.cilios&&(i.lineWidth=7,i.beginPath(),i.moveTo(v+y*T*.7,C-w*.72),i.lineTo(v+y*T*1.15,C-w*1.02),i.stroke())}if(n==="choro"||t.lagrima){i.fillStyle="rgba(120,200,255,.85)";for(let y of[-1,1]){let v=ue(y*r),C=de(s)+Sn(.12);i.beginPath(),i.moveTo(v-kn(.02),C),i.quadraticCurveTo(v,C+Sn(.22),v+kn(.02),C),i.fill(),i.beginPath(),i.ellipse(v,C+Sn(.2),kn(.028),Sn(.035),0,0,7),i.fill()}}let l={neutro:[0,0],feliz:[.04,-.1],rindo:[.04,-.1],triste:[.02,.45],choro:[.03,.5],bravo:[-.03,-.55],surpreso:[.09,0],medo:[.08,.4],preocupado:[.04,.38],desconfiado:[-.01,-.2],sono:[-.01,.1],vergonha:[.03,.3],determinado:[-.02,-.35],tedio:[-.01,.05],apaixonado:[.05,.2]}[n]||[0,0],c=l[0]+(t.brow||0)*.05,d=l[1];i.strokeStyle=t.sobr||Cs,i.lineWidth=t.sobrW||15;for(let y of[-1,1]){let v=ue(y*r),C=de(s-.2-c),T=kn(.085),w=y*d*.5;i.beginPath(),i.moveTo(v-T*Math.cos(w),C-T*Math.sin(w)*(y<0,1)),i.quadraticCurveTo(v,C-Sn(.025),v+T*Math.cos(w),C+T*Math.sin(w)),i.stroke()}if(t.rugas){i.strokeStyle="rgba(90,50,40,.5)",i.lineWidth=5;for(let y of[-1,1]){let v=ue(y*(r+.17));for(let C=0;C<3;C++)i.beginPath(),i.moveTo(v,de(s-.05+C*.06)),i.lineTo(v+y*kn(.05),de(s-.07+C*.07)),i.stroke()}i.beginPath(),i.moveTo(ue(-.12),de(1.12)),i.quadraticCurveTo(ue(0),de(1.09),ue(.12),de(1.12)),i.stroke()}if(t.oculosEscuros){i.fillStyle="#15121A";for(let y of[-1,1])i.beginPath(),i.ellipse(ue(y*r),de(s+.02),kn(.16),Sn(.13),0,0,7),i.fill();i.strokeStyle="#15121A",i.lineWidth=10,i.beginPath(),i.moveTo(ue(-r+.14),de(s)),i.lineTo(ue(r-.14),de(s)),i.stroke(),i.fillStyle="rgba(255,255,255,.35)";for(let y of[-1,1])i.beginPath(),i.ellipse(ue(y*r-.05),de(s-.03),kn(.04),Sn(.025),-.5,0,7),i.fill()}if(t.oculos){i.strokeStyle="#6A4A3A",i.lineWidth=8;for(let y of[-1,1])i.beginPath(),i.ellipse(ue(y*r),de(s),kn(.15),Sn(.16),0,0,7),i.stroke();i.beginPath(),i.moveTo(ue(-r+.15),de(s-.02)),i.quadraticCurveTo(ue(0),de(s-.08),ue(r-.15),de(s-.02)),i.stroke()}t.nariz&&(i.strokeStyle="rgba(60,30,30,.55)",i.lineWidth=7,i.beginPath(),i.arc(ue(0),de(1.66),kn(.035),.2,Math.PI-.2),i.stroke());let h=t.mouth||{},f=ns(h.open||0),u=ns(h.round||0),m=h.smile??({feliz:.8,rindo:.9,triste:-.6,choro:-.7,bravo:-.4,medo:-.3,preocupado:-.35,apaixonado:.6,vergonha:.3,determinado:-.05,desconfiado:-.15,tedio:-.2}[n]||0),x=de(t.bigode?1.93:1.88),g=ue(0),p=kn(.15+.05*(1-u)+(n==="rindo"?.04:0)),_=x-m*Sn(.035);if(f<.07)i.strokeStyle=Cs,i.lineWidth=11,i.beginPath(),i.moveTo(g-p*.85,_),i.quadraticCurveTo(g,x+m*Sn(.075),g+p*.85,_),i.stroke();else{let y=Sn(.05+.2*f),v=p*(1-.38*u);i.beginPath(),u>.55?i.ellipse(g,x+y*.35,v*.75,y*.62,0,0,7):(i.moveTo(g-v,_),i.quadraticCurveTo(g,x+m*Sn(.03)-y*.12,g+v,_),i.bezierCurveTo(g+v*.95,_+y*1.25,g-v*.95,_+y*1.25,g-v,_),i.closePath()),i.fillStyle="#5A1E2A",i.fill(),i.save(),i.clip(),f>.28&&u<.55&&(i.fillStyle="#FFFFFF",i.fillRect(g-v,_-y,v*2,y*1.18)),i.fillStyle="#E8707E",i.beginPath(),i.ellipse(g,_+y*1.05,v*.58,y*.42,0,0,7),i.fill(),i.restore(),i.strokeStyle=Cs,i.lineWidth=9,i.stroke()}t.bigode&&(i.fillStyle=t.bigode,i.strokeStyle=Cs,i.lineWidth=6,i.beginPath(),i.moveTo(ue(0),de(1.76)),i.bezierCurveTo(ue(.12),de(1.7),ue(.24),de(1.76),ue(.27),de(1.9)),i.bezierCurveTo(ue(.17),de(1.84),ue(.08),de(1.87),ue(0),de(1.83)),i.bezierCurveTo(ue(-.08),de(1.87),ue(-.17),de(1.84),ue(-.27),de(1.9)),i.bezierCurveTo(ue(-.24),de(1.76),ue(-.12),de(1.7),ue(0),de(1.76)),i.fill(),i.stroke())}var Th={},Fn=0,Ps=(i,t)=>{let e="c"+i+t+Fn;return Th[e]||(Th[e]=new ga(i,t,Fn?3:6,Fn?10:18))};function Ah(i,t=.82,e=36){let n=new xr(i.map(([l,c])=>new ot(l,c)),e,Math.PI,Math.PI*2);n.applyMatrix4(new le().makeScale(1,1,t));let s=n.attributes.position,r=n.attributes.uv,o=1e9,a=-1e9;for(let l=0;l<s.count;l++)o=Math.min(o,s.getY(l)),a=Math.max(a,s.getY(l));for(let l=0;l<s.count;l++)r.setY(l,(s.getY(l)-o)/(a-o));return n.computeVertexNormals(),n}var vg={magro:[[0,.5],[.14,.5],[.165,.53],[.172,.62],[.172,.72],[.165,.8],[.14,.86],[.09,.895],[.04,.905],[0,.906]],barriga:[[0,.47],[.16,.47],[.2,.52],[.225,.6],[.225,.68],[.205,.77],[.17,.845],[.11,.89],[.04,.905],[0,.906]],senhora:[[0,.5],[.15,.5],[.17,.55],[.175,.64],[.17,.74],[.16,.81],[.13,.865],[.08,.898],[0,.906]]},_g=[[0,.24],[.25,.24],[.245,.26],[.22,.36],[.19,.5],[.165,.62],[0,.62]];function Fa(i={}){Fn=i.simples?1:0;let t=i.pele||"#C98B5E",e=i.camisa||"#E8453C",n=i.calca||"#2E4A7A",s=i.tenis||"#F4F1EA",r=new nt,o=new nt;r.add(o);let a=new nt;a.position.y=.52,o.add(a);let l=(I,G,N,Z,k=gg)=>{let rt=new it(G,typeof N=="string"?Tt(N):N);return rt.castShadow=!0,rt.receiveShadow=!0,Z&&rt.position.set(...Z),k&&ss(rt,k),I.add(rt),rt},c=Ht(1024,512,(I,G,N)=>{I.fillStyle=e,I.fillRect(0,0,G,N),i.estampa&&i.estampa(I,G,N)}),d=ge(c),h=l(a,Ah(vg[i.tronco||"magro"]),d,[0,-.52,0]);i.saia&&l(a,Ah(_g,.86),i.saia,[0,-.52,0]),l(a,new ln(.06,.065,.1,16),t,[0,.4,0],0);let f=new nt;f.position.y=.38,a.add(f);let u=l(f,new he(bn,Fn?24:48,Fn?16:32),t,[0,bn*.86,0]);for(let I of[-1,1])l(f,new he(.055,16,12),t,[I*bn*.96,bn*.82,-.01]).scale.set(.6,1,.9);let m=document.createElement("canvas");m.width=Qe.W>>Fn,m.height=Qe.H>>Fn;let x=m.getContext("2d");Fn&&x.scale(.5,.5);let g=new gn(m);g.colorSpace=Ce,g.anisotropy=8;let p=new ze({map:g,gradientMap:Tt("#fff").gradientMap,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),_=new it(new he(bn*1.002,Fn?24:48,Fn?16:32,Qe.phi0,Qe.phiL,Qe.th0,Qe.thL),p);_.position.y=bn*.86,_.renderOrder=2,f.add(_);let y=i.corCabelo||"#1E1618",v=new nt;if(v.position.y=bn*.86,f.add(v),i.cabelo==="cacheado"){let I=new he(1,Fn?8:14,Fn?6:10),G=0;for(let N=0;N<70;N++){let Z=Math.acos(1-2*((N+.5)/70)),k=N*2.39996,rt=Math.cos(Z),ut=Math.sin(Z),Pt=Math.cos(k)*ut,Vt=Math.sin(k)*ut;if(rt<.28&&Vt>-.2||rt<-.25||Vt>.55&&rt<.62||Math.abs(Pt)>.8&&rt<.45&&Vt>-.5)continue;let xe=.075+N*37%10/10*.03,$=l(v,I,y,[Pt*bn*.98,rt*bn*.98+.01,Vt*bn*.98],.009);$.scale.setScalar(xe),$.castShadow=!1,G++}}else if(i.cabelo==="tigela"||i.cabelo==="rabo"||i.cabelo==="coque"){if(l(v,new he(bn*1.04,40,28),y,[0,.055,-.065]),i.cabelo==="rabo"){let I=l(v,Ps(.085,.26),y,[0,.06,-.42]);I.rotation.x=.75;let G=l(v,new he(.1,18,14),y,[0,-.07,-.5]);l(v,new he(.065,16,12),i.laco||"#F25C8A",[0,.22,-.31]);for(let N of[-1,1]){let Z=l(v,Ps(.06,.2),y,[N*.27,-.08,.02]);Z.rotation.z=-N*.08}}i.cabelo==="coque"&&l(v,new he(.12,24,16),y,[0,.3,-.12]);for(let I=-2;I<=2;I++)l(v,new he(.075,16,12),y,[I*.07,.2-Math.abs(I)*.025,.2-Math.abs(I)*.02],.008).scale.set(1,.8,.7)}else if(i.cabelo==="careca")for(let I of[-1,1])for(let G=0;G<4;G++){let N=-.6-G*.35;l(v,new he(.07,14,10),y,[I*Math.cos(N)*bn*.93*(G<3?1:.9),-.02,Math.sin(N)*bn*.93+.12],.008).scale.set(1,1.2,1)}if(i.bone){let I=l(v,new he(bn*1.05,32,16,0,Math.PI*2,0,1.25),i.bone,[0,.03,-.01]),G=l(v,rs(.36,.03,.22,.012),i.bone,[0,.12,i.boneTras?-.32:.3])}let C=I=>{let G=new nt;G.position.set(I*.185,.3,0),a.add(G);let N=(i.manga||"curta")==="curta";l(G,Ps(N?.064:.058,N?.07:.17),e,[0,N?-.055:-.1,0]),N&&l(G,Ps(.05,.15),t,[0,-.11,0]);let Z=new nt;Z.position.y=-.21,G.add(Z),l(Z,Ps(.048,.14),N?t:e,[0,-.085,0]);let k=new nt;k.position.y=-.2,Z.add(k);let rt=new he(.062,20,14);return l(k,rt,i.luva||t,[0,-.01,0]).scale.set(.85,1.05,.8),l(k,new he(.026,12,10),i.luva||t,[-I*.045,.02,.03],.007),{sh:G,el:Z,hand:k}},T=C(1),w=C(-1),F=I=>{let G=new nt;G.position.set(I*.085,.52,0),o.add(G),l(G,Ps(.07,.17),i.saia?t:n,[0,-.11,0]);let N=new nt;N.position.y=-.22,G.add(N),l(N,Ps(.063,.16),i.meia||(i.saia?t:n),[0,-.1,0]);let Z=new nt;Z.position.y=-.22,N.add(Z);let k=l(Z,rs(.13,.095,.23,.045),s,[0,-.037,.035]);return i.sola!==!1&&l(Z,rs(.135,.03,.235,.014),i.sola||"#FFFFFF",[0,-.075,.035],.006),{hp:G,kn:N,an:Z}},S=F(1),M=F(-1),P=eo(.36,.4);P.position.y=.006,r.add(P),i.escala&&r.scale.setScalar(i.escala);let V={look:[0,0],key:""},O={root:r,pelvis:o,torsoG:a,headG:f,head:u,hair:v,torso:h,hands:{L:T.hand,R:w.hand},arms:{L:T,R:w},legs:{L:S,R:M},sombra:P,place(I,G,N=0,Z=0){return r.position.set(I,N,G),r.rotation.y=Z,O},pose(I={}){o.position.y=I.bob||0,o.position.z=I.dz||0,a.rotation.set((I.lean||0)*xn,(I.twist||0)*xn,(I.tilt||0)*xn),f.rotation.set((I.headX||0)*xn,(I.headY||0)*xn,(I.headZ||0)*xn);let G=(Z,k,rt,ut)=>{Z.sh.rotation.set(-(k[0]||0)*xn,(k[2]||0)*xn*ut,ut*(k[1]??8)*xn),Z.el.rotation.set(-(rt||0)*xn,0,0)};G(T,I.shL||[0,8],I.elL??8,1),G(w,I.shR||[0,8],I.elR??8,-1);let N=(Z,k,rt,ut)=>{Z.hp.rotation.set(-(k[0]||0)*xn,0,ut*(k[1]||0)*xn),Z.kn.rotation.set((rt||0)*xn,0,0),Z.an.rotation.set(-(k[0]||0)*xn*0+(rt||0)*xn*-.4*(k[2]??1),0,0)};return N(S,I.hipL||[0,0],I.knL||0,1),N(M,I.hipR||[0,0],I.knR||0,-1),O},face(I={}){let G=I.look||[0,0],N=I.mouth||{},Z=(rt,ut=20)=>Math.round((rt||0)*ut),k=[I.emo,Z(I.blink,10),Z(G[0],8),Z(G[1],8),Z(N.open,12),Z(N.round,6),N.smile===void 0?"u":Z(N.smile,8),Z(I.brow,6),I.lagrima?1:0,I.olhosAbertos?1:0].join("|");return k!==V.key&&(V.key=k,xg(x,{...i.rosto,...I,pele:t,oculos:i.oculos,rugas:i.rugas,oculosEscuros:i.oculosEscuros,bigode:i.bigode,nariz:i.nariz,cilios:i.cilios,sobr:i.sobr,sobrW:i.sobrW},G),g.needsUpdate=!0),O},faceTo(I,G){return r.rotation.y=Math.atan2(I-r.position.x,G-r.position.z),O},hold(I,G="R"){return O.hands[G].add(I),I}};return O.estatua=(I="#A9A49C")=>{O.congelado=!0;let G=Tt(I);return r.traverse(N=>{N.isMesh&&!N.userData.isOutline&&N!==P&&N!==_&&(N.material=G)}),p.color.set("#B8B4AC"),O},O.pose({}),O.face({}),O}var dt=(i,t=0,e=1)=>{let n=Math.sin((i+t)*2.1);return{bob:n*.006*e,headX:n*1.5*e,shL:[n*2,8+n*1.5],shR:[-n*2,8+n*1.5],elL:10,elR:10}};function te(i,t=1.8,e=1,n=0){let s=(i*t+n)*Math.PI*2,r=Math.sin(s),o=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.025*e-.012,lean:4*e,twist:r*4*e,hipL:[28*r*e,0],hipR:[-28*r*e,0],knL:Math.max(0,-o)*45*e+5,knR:Math.max(0,o)*45*e+5,shL:[-24*r*e,7],shR:[24*r*e,7],elL:18+Math.max(0,-r)*18,elR:18+Math.max(0,r)*18,headX:-2}}function Le(i,t=2.9,e=1,n=0){let s=(i*t+n)*Math.PI*2,r=Math.sin(s),o=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.06*e-.02,lean:16*e,twist:r*7*e,hipL:[50*r*e+8,0],hipR:[-50*r*e+8,0],knL:(Math.max(0,-o)*85+18)*e,knR:(Math.max(0,o)*85+18)*e,shL:[-45*r*e,10],shR:[45*r*e,10],elL:85,elR:85,headX:-10*e}}function os(i,t=1.1,e=0){let n=(i*t+e)*Math.PI*2;return{bob:-.12,lean:22,hipL:[62+22*Math.sin(n),0],hipR:[62-22*Math.sin(n),0],knL:70+25*Math.cos(n),knR:70-25*Math.cos(n),shL:[62,10],shR:[62,10],elL:25,elR:25,headX:-14}}var Be=(i={})=>({bob:-.17,dz:-.02,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shL:[12,8],shR:[12,8],elL:30,elR:30,...i});function Li(i,t,e){let n={},s=new Set([...Object.keys(i),...Object.keys(t)]);for(let r of s){let o=i[r],a=t[r];if(Array.isArray(o)||Array.isArray(a)){let l=o||[0,8],c=a||[0,8];n[r]=l.map((d,h)=>jt(d,c[h]??d,e))}else n[r]=jt(o??0,a??0,e)}return n}function br(i,t=0){let e=3.1+t%5*.37,n=(i+t*.77)%e/e*e;return n<.07?n/.07:n<.14?1-(n-.07)/.07:0}var bx=1/420;function mc(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t;let s=n.getContext("2d");e(s,i,t);let r=new gn(n);return r.colorSpace=Ce,r.anisotropy=8,r}var gc={value:0};function wh(i,t=2600,e=300,n=1){let s=Pe(n),r=new Float32Array(t*3),o=new Float32Array(t*3);for(let h=0;h<t;h++){let f=s()*2-1,u=s()*6.283,m=Math.sqrt(1-f*f);r[h*3]=m*Math.cos(u)*e,r[h*3+1]=f*e,r[h*3+2]=m*Math.sin(u)*e;let x=.55+s()*.45,g=s();o[h*3]=x*(g>.8?1:.9),o[h*3+1]=x*.94,o[h*3+2]=x*(g<.2?.8:1)}let a=new Ue;a.setAttribute("position",new en(r,3)),a.setAttribute("color",new en(o,3));let l=mc(32,32,h=>{let f=h.createRadialGradient(16,16,0,16,16,16);f.addColorStop(0,"#fff"),f.addColorStop(.35,"#ffffffaa"),f.addColorStop(1,"#ffffff00"),h.fillStyle=f,h.fillRect(0,0,32,32)}),c=new Jr({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),d=new ha(a,c);return d.frustumCulled=!1,i.add(d),d}function Ch(i){return i<188.5?i:i<424.4?188.5+(i-188.5)*.03:188.5+(424.4-188.5)*.03+(i-424.4)}function as(i,t){(i.userData.vida||=[]).push(t)}var Fs={out:.012},xc=(i,t,e="#FFFFFF",n=512,s=128,r=64)=>Ht(n,s,o=>{o.fillStyle=t,o.fillRect(0,0,n,s),o.strokeStyle="#00000033",o.lineWidth=8,o.strokeRect(4,4,n-8,s-8),o.fillStyle=e,o.font=`900 ${r}px Inter`,o.textAlign="center",o.textBaseline="middle",o.fillText(i,n/2,s/2+4)});function yg(i="#2F8F5B"){let t=new nt;return t.add(St(.22,.19,.8,i,0,.4,0,{seg:14,...Fs})),t.add(St(.25,.25,.07,"#24724A",0,.82,0,{seg:14})),t.add(St(.03,.03,.9,"#5A6270",-.28,.45,0,{seg:6})),t}function Eg(){let i=new nt;return i.add(St(.12,.14,.55,"#D8392F",0,.28,0,{seg:12,...Fs})),i.add(nn(.13,"#D8392F",0,.58,0,{seg:12})),i.add(St(.05,.05,.32,"#B52C24",0,.38,0,{seg:8,rot:[0,0,Math.PI/2]})),i}function Mg(){let i=new nt;for(let t=0;t<3;t++)i.add(Q(1.5,.05,.12,"#A8743E",0,.45,-.12+t*.13,{r:.02}));for(let t=0;t<2;t++)i.add(Q(1.5,.12,.04,"#A8743E",0,.62+t*.15,-.2,{r:.015}));for(let t of[-.6,.6])i.add(Qt(.06,.45,.4,"#3A3A44",t,.22,-.05));return i}function bg(i="pare"){let t=new nt;t.add(St(.035,.035,2.4,"#8A9099",0,1.2,0,{seg:8}));let e=Ht(256,256,s=>{if(s.translate(128,128),i==="pare"){s.fillStyle="#D8392F",s.beginPath();for(let r=0;r<8;r++){let o=Math.PI/8+r*Math.PI/4;s.lineTo(120*Math.cos(o),120*Math.sin(o))}s.fill(),s.strokeStyle="#fff",s.lineWidth=10,s.stroke(),s.fillStyle="#fff",s.font="900 70px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("PARE",0,6)}else s.fillStyle="#fff",s.beginPath(),s.arc(0,0,122,0,7),s.fill(),s.strokeStyle="#D8392F",s.lineWidth=26,s.beginPath(),s.arc(0,0,106,0,7),s.stroke(),s.fillStyle="#1B1420",s.font="900 96px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText(i,0,8)}),n=new it(new Qn(.32,24),new ze({map:e,transparent:!0,side:_e}));return n.position.set(0,2.25,.04),t.add(n),t}function Sg(){let i=new nt;i.add(St(.06,.07,3.4,"#3A3A44",0,1.7,0,{seg:8})),i.add(Q(.32,.9,.26,"#2A2A30",0,3.25,.1,{...Fs}));let t=["#E2443A","#F2C14E","#4CC46A"].map((e,n)=>{let s=new it(new Qn(.09,16),new Xt({color:e}));return s.position.set(0,3.52-n*.27,.235),i.add(s),s});return i.userData.luzes=t,i}function Tg(i=0){let t=new nt;t.add(Q(2.2,2.2,1.6,"#2E6FB8",0,1.1,0,{...Fs})),t.add(Q(2.5,.12,1.9,"#25599A",0,2.26,.1));let e=Ht(512,256,r=>{let o=Pe(i+9);r.fillStyle="#E8E2D6",r.fillRect(0,0,512,256);for(let a=0;a<3;a++)for(let l=0;l<8;l++)r.fillStyle=["#E2443A","#F2C14E","#8FD3C1","#E8A0B8","#9EC1E8","#F28F6B"][Math.floor(o()*6)],r.fillRect(8+l*63,10+a*82,54,72),r.fillStyle="#ffffffaa",r.fillRect(14+l*63,16+a*82,40,10)}),n=new it(new Dt(1.9,1.1),ge(e));n.position.set(0,1.3,.81),t.add(n);let s=new it(new Dt(1.6,.32),ge(xc("BANCA","#F2C14E","#1B1420")));return s.position.set(0,2.05,.82),t.add(s),t}function Ag(){let i=new nt;for(let n of[-1.1,1.1])i.add(St(.05,.05,2.4,"#8A9099",n,1.2,-.4,{seg:8}));i.add(Q(2.6,.1,1.2,"#5A6270",0,2.45,0,{...Fs}));let t=new it(new Dt(2.3,1.6),new ze({color:"#BFE3F7",transparent:!0,opacity:.45}));t.position.set(0,1.4,-.45),i.add(t),i.add(Q(2,.06,.35,"#A8743E",0,.48,-.25));let e=new it(new Dt(.8,.25),ge(xc("\xD4NIBUS","#2F7DC4")));return e.position.set(0,2.62,.61),i.add(e),i}function no(i=0){let t=Pe(i+21),e=new nt;e.add(St(.22,.16,.35,["#C46A4A","#E8E2D6","#8A6A5A"][i%3],0,.18,0,{seg:12,...Fs}));for(let n=0;n<4;n++){let s=nn(.16+t()*.08,["#4C9A44","#5DAA4E","#6DBB57"][n%3],(t()-.5)*.25,.45+t()*.2,(t()-.5)*.25,{seg:8});e.add(s)}return e}function wg(){let i=new nt;for(let t of[-.45,.45]){let e=new it(new ji(.3,.03,6,18),Tt("#2A2A30"));e.position.set(0,.3,t),e.rotation.y=Math.PI/2,i.add(e)}return i.add(St(.02,.02,.9,"#C8392F",0,.45,0,{seg:6,rot:[Math.PI/2,0,0]})),i.add(St(.02,.02,.45,"#C8392F",0,.55,.2,{seg:6})),i}function Rg(){let i=new nt;return i.add(St(.02,.16,.5,"#F28F2B",0,.25,0,{seg:12,...Fs})),i.add(St(.12,.12,.07,"#FFFFFF",0,.25,0,{seg:12})),i.add(Qt(.36,.04,.36,"#F28F2B",0,.02,0)),i}var Rh=[["PADARIA","#C9472F"],["FARM\xC1CIA","#2F8F5B"],["LANCHES","#F2A33A"],["\xD3TICA","#2E6FB8"],["CAF\xC9","#7A5236"],["BANCO","#3A3A44"],["LIVRARIA","#8A4FA8"],["SAPATOS","#D8577A"],["CELULARES","#1F7FA0"],["MERCADO","#E2443A"]];function Ph(i,t=5){let[e,n]=Rh[i%Rh.length],s=new nt,r=new it(new We(t,.9,.2),[Tt(n),Tt(n),Tt(n),Tt(n),ge(xc(e,n,"#FFFFFF",640,128,72)),Tt(n)]);s.add(r);let o=Ht(128,64,l=>{for(let c=0;c<8;c++)l.fillStyle=c%2?"#FFFFFF":n,l.fillRect(c*16,0,16,64)}),a=new it(new We(t*.9,.06,1.3),[Tt(n),Tt(n),ge(o),Tt(n),Tt(n),Tt(n)]);return a.position.set(0,-.75,.6),a.rotation.x=.28,s.add(a),s}function vc(i,t={}){let e=Pe(t.seed||77),[n,s]=t.xs||[12.3,17.2],r=t.z0??22,o=t.z1??-180,a=t.evita||[],l=t.bairro?["lixeira","vaso","hidrante","placa","vaso","bike","lixeira","cone"]:["lixeira","banco","hidrante","placa","banca","ponto","vaso","bike","semaforo"],c=h=>a.every(f=>Math.abs(((h-f[0])%f[1]+f[1])%f[1])>1.2&&Math.abs(((h-f[0])%f[1]+f[1])%f[1]-f[1])>1.2),d=[];for(let h of[-1,1]){let f=r-e()*4;for(;f>o;){if(c(f)){let u=l[Math.floor(e()*l.length)],m,x=h*n,g=-h*Math.PI/2;u==="lixeira"?m=yg():u==="hidrante"?m=Eg():u==="banco"?(m=Mg(),x=h*(n+.9),g=h>0?-Math.PI/2:Math.PI/2):u==="placa"?m=bg(e()<.5?"pare":String([30,40,50,60][Math.floor(e()*4)])):u==="banca"?(m=Tg(Math.floor(e()*99)),x=h*(s-1.2)):u==="ponto"?(m=Ag(),x=h*(n+.8)):u==="vaso"?(m=no(Math.floor(e()*9)),x=h*(t.bairro?s:s-.3)):u==="bike"?(m=wg(),x=h*(n+.4),g=0):u==="cone"?m=Rg():(m=Sg(),d.push(m)),(u==="banca"||u==="ponto")&&(g=h>0?-Math.PI/2:Math.PI/2),m.position.set(x,.15,f),m.rotation.y=g,i.add(m)}f-=(t.passo||7)+e()*(t.passo||7)}}d.length&&as(i,(h,f)=>{let u=Math.floor(f/6)%3;d.forEach((m,x)=>m.userData.luzes.forEach((g,p)=>g.material.color.set(p===(u+x)%3?["#FF5A4A","#FFD25A","#5AE07A"][p]:"#2A2A30")))})}function Ia(i,t={}){let e=Pe(t.seed||5),n=t.n||7,s=Tt("#2A2630",{side:_e}),r=[],o=new Dt(.55,.22);o.translate(.27,0,0);for(let f=0;f<n;f++){let u=new nt,m=new it(o,s),x=new it(o,s);x.rotation.y=Math.PI,u.add(m,x),u.add(nn(.09,"#2A2630",0,0,0,{seg:6})),u.scale.setScalar(t.escala||1),i.add(u),r.push({g:u,L:m,Rr:x,dx:(e()-.5)*8,dy:(e()-.5)*3,dz:(e()-.5)*8,ph:e()*6})}let[a,l,c]=t.centro||[0,22,-40],d=t.raio||30,h=t.v||.12;as(i,(f,u)=>{r.forEach((m,x)=>{let g=u*h+(t.fase||0),p=a+Math.cos(g)*d+m.dx+Math.sin(u*.7+m.ph)*.6,_=c+Math.sin(g)*d*.5+m.dz,y=l+m.dy+Math.sin(u*1.3+m.ph)*.4;m.g.position.set(p,y,_),m.g.rotation.y=-g+Math.PI;let v=Math.sin(u*11+m.ph)*.7;m.L.rotation.x=0,m.L.rotation.z=v,m.Rr.rotation.z=-v})})}function _c(i,t,e,n,s={}){let r=Ht(64,64,l=>{let c=l.createRadialGradient(32,32,2,32,32,30);c.addColorStop(0,"rgba(255,255,255,.9)"),c.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=c,l.fillRect(0,0,64,64)}),o=s.n||8,a=[];for(let l=0;l<o;l++){let c=new Ci(new li({map:r,transparent:!0,depthWrite:!1,color:s.cor||"#FFFFFF"}));i.add(c),a.push(c)}as(i,(l,c)=>a.forEach((d,h)=>{let f=(c*(s.v||.35)+h/o)%1;d.position.set(t+Math.sin(c*1.3+h)*.06*(1+f*3),e+f*(s.alt||.9),n+Math.cos(c+h*2)*.04*(1+f*3));let u=(s.tam||.18)*(.5+f*1.6);d.scale.set(u,u,1),d.material.opacity=(s.op||.45)*Math.sin(f*Math.PI)}))}function Fh(i,t,e,n){let s=new nt;s.add(St(.02,.02,.4,"#5A6270",0,-.2,0,{seg:6})),s.add(St(.12,.1,.14,"#E8E2D6",0,-.42,0,{seg:12,out:.008}));let r=new nt;for(let o=0;o<4;o++){let a=Q(.62,.02,.14,"#A8743E",.38,0,0,{r:.01}),l=new nt;l.add(a),l.rotation.y=o*Math.PI/2,r.add(l)}return r.position.y=-.47,s.add(r),s.traverse(o=>{o.castShadow=!1}),s.position.set(t,e,n),i.add(s),as(i,(o,a)=>{r.rotation.y=a*7}),s}function Ih(i,t,e,n,s={}){let r=[];for(let a=0;a<(s.n||6);a++){let l=new it(new ci(.09,.32,7),new Xt({color:a%2?"#FFB43A":"#FF6A2A"}));l.position.set(t+(a-2.5)*(s.dx||.11),e+.16,n),i.add(l),r.push(l)}let o=new Pn("#FF8A3A",s.luz??4,4,1.8);o.position.set(t,e+.4,n+.3),i.add(o),as(i,(a,l)=>{r.forEach((c,d)=>{let h=.75+.35*Math.sin(l*9+d*1.7)+.15*Math.sin(l*23+d);c.scale.set(1,h,1),c.position.y=e+.16*h}),o.intensity=(s.luz??4)*(.85+.15*Math.sin(l*13))})}function Lh(i,t={}){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d"),s=new gn(e);s.colorSpace=Ce,i.material=new Xt({map:s});let r=-1;return o=>{let a=Math.round(o*24);if(a===r)return;r=a,n.fillStyle="#0B231C",n.fillRect(0,0,256,128),n.strokeStyle="#1E4A3A",n.lineWidth=1;for(let d=0;d<256;d+=32)n.beginPath(),n.moveTo(d,0),n.lineTo(d,128),n.stroke();n.strokeStyle="#5CF2A0",n.lineWidth=4,n.beginPath();let l=t.bpm||62,c=60/l;for(let d=0;d<=256;d+=2){let f=((o-(256-d)/256*2.4)%c+c)%c/c,u=0;f>.1&&f<.14?u=-.12:f>.18&&f<.2?u=.15:f>.2&&f<.23?u=-.9:f>.23&&f<.26?u=.35:f>.4&&f<.5&&(u=-.15*Math.sin((f-.4)/.1*Math.PI));let m=72+u*52;d?n.lineTo(d,m):n.moveTo(d,m)}n.stroke(),n.fillStyle="#5CF2A0",n.font="700 22px IBM Plex Mono",n.fillText(String(l),200,28),s.needsUpdate=!0}}var La={total:516.633,segs:[{quem:"n",start:1.6,end:8.2,k:"b",a:0,b:16},{quem:"n",start:9.5,end:20.845,k:"b",a:17,b:51},{quem:"n",start:21.645,end:24.8,k:"b",a:52,b:63},{quem:"n",start:25.3,end:32.095,k:"b",a:64,b:84},{quem:"n",start:33.895,end:41.42,k:"b",a:85,b:110},{quem:"n",start:41.72,end:51.495,k:"b",a:111,b:141},{quem:"n",start:51.795,end:59.24,k:"b",a:142,b:166},{quem:"n",start:60.54,end:62.77,k:"b",a:167,b:172},{quem:"lurdes",start:63.77,end:67.52,k:"b",a:173,b:180,boca:[0,0,.27,.58,.85,.83,.54,.52,.83,1,.94,.79,.65,.55,.5,.66,.9,.99,1,1,1,1,1,1,.96,.91,.96,1,1,.96,.77,.54,.5,.55,.56,.52,.51,.62,.74,.75,.71,.64,.51,.41,.44,.56,.66,.66,.55,.4,.2,0,0,0,0,0,.22,.55,.44,0,.17,.44,.62,.85,1,.98,.91,.81,.72,.49,.38,.71,.98,1,.99,.96,.91,.86,.77,.5,.26,.46,.77,.78,.73,.79,.81,.59,.22,0,.22,.7,.97,.97,.91,.85,.83,.81,.64,.46,.61,.8,.73,.55,.41,.37,.35,.23,0,0,0,0],round:[0,0,0,0,.58,.81,0,0,.88,.57,.58,.99,1,1,0,0,.88,.74,.6,.6,.59,.55,.55,.3,0,.68,1,1,.95,.97,1,0,0,0,0,0,0,.16,.16,0,0,.34,.96,0,.22,.66,.75,.95,1,1,.61,0,0,0,0,0,0,1,.97,0,0,0,0,.55,.4,.64,1,1,1,1,0,.96,.99,.9,.95,.99,1,1,1,.72,0,.32,.21,.32,0,0,0,0,0,0,0,.85,.7,.57,.57,.56,.48,.46,.56,.52,.21,.41,.35,.34,.25,.33,.19,.1,0,0,0,0]},{quem:"n",start:68.22,end:73.24,k:"b",a:181,b:199},{quem:"n",start:73.64,end:77.49,k:"b",a:200,b:208},{quem:"n",start:78.99,end:82.945,k:"b",a:209,b:220},{quem:"n",start:83.245,end:90.685,k:"b",a:221,b:244},{quem:"n",start:90.985,end:94.375,k:"b",a:245,b:254},{quem:"n",start:95.275,end:99.53,k:"b",a:255,b:268},{quem:"jorge",start:99.93,end:103.84,k:"b",a:269,b:276,boca:[.19,.42,.59,.59,.47,.56,.85,1,1,1,1,1,.9,.6,.39,.45,.37,.13,0,0,0,0,0,0,0,0,0,.23,.68,.87,.84,.86,.83,.79,.85,.96,1,1,.87,.74,.87,1,1,1,1,.99,.93,.77,.55,.32,.15,0,0,0,0,0,0,0,0,0,0,0,0,.15,.52,.85,.85,.73,.83,.98,.99,.97,.98,.98,.97,.99,.83,.66,.75,.59,.19,.28,.76,.92,.71,.43,.27,.49,.86,1,.95,.75,.43,.16,0,0,0,0,0,0,0,0,.18,.47,.38,0,0,0,0,0,0,0,0,0,0,0,0],round:[.53,0,.43,.84,1,1,1,.87,.34,.44,.31,0,0,0,0,0,.84,0,0,0,0,0,0,0,0,0,0,0,.11,.01,1,.21,.92,.65,.14,0,0,0,0,0,0,0,1,1,.96,.68,.59,.41,.31,.03,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.13,.08,.91,.67,.24,.38,0,0,0,.04,.05,.24,.48,.67,1,0,0,.95,.68,0,0,0,0,0,.1,0,.27,.15,0,0,0,0,0,0,0,0,0,0,.88,.72,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"n",start:104.54,end:114.505,k:"b",a:277,b:309},{quem:"n",start:114.805,end:121.135,k:"b",a:310,b:330},{quem:"n",start:121.435,end:129.565,k:"b",a:331,b:355},{quem:"jorge",start:129.965,end:135.37,k:"b",a:356,b:372,boca:[.49,.83,.94,.91,.89,.94,.99,1,.97,.88,.68,.41,.34,.54,.64,.42,0,0,0,.22,.48,.63,.81,.97,.99,.93,.9,.96,1,.94,.82,.78,.87,.97,1,.95,.83,.72,.62,.67,.88,1,1,1,1,.97,.7,.43,.66,.96,.98,.97,.98,.93,.86,.93,.96,.89,.82,.76,.68,.6,.49,.36,.24,.2,.16,0,0,0,0,0,.21,.66,.89,.87,.91,.69,.22,0,.25,.75,.99,.98,.99,1,.96,.89,.87,.91,.96,.99,1,1,1,.95,.77,.66,.82,.98,1,.94,.75,.67,.82,.97,1,1,1,1,.98,.71,.23,0,0,0,0,.25,.75,1,1,.99,.98,.99,.96,.9,.93,.77,.45,.56,.89,.94,.89,.94,1,.99,.98,.96,.97,.99,1,1,1,1,1,1,1,1,1,.95,.76,.5,.29,.2,.31,.56,.65,.49,.21,0,0,0],round:[1,1,1,.71,.85,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.48,0,.82,.87,0,.61,.7,.56,1,1,0,.65,.82,.87,1,1,1,1,.46,.4,.25,.07,.01,.64,.99,0,0,.67,.19,.11,0,0,0,.25,.17,.44,.89,.54,.35,.24,.23,.1,0,0,0,0,0,0,0,0,0,.88,.43,0,0,0,0,0,0,.51,.17,.16,.79,.88,.25,.38,1,1,1,1,1,.84,.93,.4,0,.83,0,0,0,1,1,.67,.41,.2,0,.47,.86,0,0,0,0,0,0,0,0,0,.49,0,0,0,0,.21,.18,.9,0,.57,0,0,.41,.05,.36,0,0,0,.5,0,.32,.27,.35,0,0,.53,.46,.3,.27,.23,.67,.27,.99,.18,.5,0,0,0,0,0,0,0,0,0]},{quem:"n",start:135.97,end:142.735,k:"b",a:373,b:391},{quem:"bia",start:143.235,end:147.32,k:"b",a:392,b:400,boca:[0,0,0,.16,.44,.46,.48,.73,.88,.87,.69,.56,.6,.59,.53,.6,.73,.77,.83,.95,.9,.74,.71,.7,.48,.15,.24,.72,.96,.9,.78,.63,.45,.25,0,0,0,0,0,0,0,.3,.74,.83,.75,.89,.84,.61,.71,.89,.8,.65,.74,.84,.73,.62,.67,.82,.77,.69,.8,.93,.95,.79,.44,.28,.6,.9,.94,.93,.95,.97,.99,.97,.87,.81,.86,.83,.73,.8,.93,.94,.82,.66,.58,.51,.39,.47,.78,.98,1,1,1,1,.88,.66,.55,.55,.65,.75,.76,.77,.88,.96,.95,.9,.91,.71,.25,0,.24,.61,.77,.7,.59,.53,.54,.53,.46,.32,.13,0],round:[0,0,0,0,.05,0,0,.58,.53,.82,1,1,1,1,1,1,1,.97,.71,.89,.95,.53,0,0,0,0,0,.59,.78,.93,1,1,.95,1,0,0,0,0,0,0,0,0,.72,.73,0,.81,.93,.39,.52,.91,.74,.01,.49,.71,0,0,0,0,.27,1,.79,.49,.4,.79,.92,0,.27,.72,.8,.93,.86,.18,.15,.16,.23,.33,.74,1,1,.82,.74,1,1,1,1,1,1,1,.85,.9,.94,.68,.55,.37,1,.76,.78,.99,.77,.28,.59,.88,.93,1,.96,.9,.74,1,0,0,0,.94,.97,1,1,.94,0,0,0,0,0,0]},{quem:"augusto",start:147.62,end:150.91,k:"b",a:401,b:404,boca:[0,0,.19,.58,.62,.27,0,.13,.49,.87,1,1,1,1,.99,.97,.93,.89,.82,.76,.77,.78,.65,.56,.67,.57,.19,0,0,0,0,0,0,0,0,0,0,.26,.64,.68,.47,.53,.79,.91,.81,.73,.73,.8,.92,.91,.6,.17,.25,.75,1,1,1,1,1,1,1,1,.98,.85,.5,.14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],round:[0,0,0,.46,0,0,0,0,0,.25,.34,.65,.77,.82,.78,.86,.87,.85,.76,.74,.83,.87,1,.89,.79,.44,0,0,0,0,0,0,0,0,0,0,0,0,.4,.36,.84,1,.08,.34,.13,.5,.5,.46,0,0,.88,0,0,.51,0,0,.1,0,.03,.24,.29,.18,.71,.76,.73,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"n",start:152.01,end:157.01,k:"b",a:405,b:422},{quem:"n",start:157.31,end:164.91,k:"b",a:423,b:447},{quem:"n",start:165.21,end:171.935,k:"b",a:448,b:469},{quem:"n",start:172.235,end:180.06,k:"b",a:470,b:493},{quem:"n",start:180.56,end:187.475,k:"b",a:494,b:518},{quem:"n",start:188.575,end:205.935,k:"b",a:519,b:569},{quem:"bia",start:206.335,end:211.36,k:"b",a:570,b:573,boca:[0,.17,.57,.89,.99,1,.99,.9,.72,.56,.47,.49,.66,.87,.98,1,1,1,1,1,1,.91,.76,.72,.77,.78,.76,.66,.41,.13,0,.24,.48,.68,.75,.75,.73,.68,.53,.28,0,0,0,0,0,0,0,0,0,.25,.46,.51,.51,.58,.67,.77,.87,.92,.86,.74,.73,.84,.94,.99,1,.99,.98,.95,.93,.88,.74,.67,.86,1,1,1,1,1,1,1,1,1,.99,.97,.95,.92,.85,.67,.36,0,0,0,0,0,0,0,0,0,0,0,.39,.73,.86,.84,.83,.84,.85,.85,.85,.83,.81,.78,.66,.45,.31,.26,.17,0,0,0,0,0,0,0,0,.22,.66,.93,.94,.93,.97,.99,1,1,1,1,1,1,1,.97,.86,.69,.42,.14,0,0,0,0,0,0],round:[0,0,.09,.75,.85,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,.98,.9,.79,.62,.3,0,0,0,0,0,0,0,0,0,.84,1,.97,.85,.85,1,1,1,1,1,.41,0,0,0,0,0,0,0,0,0,0,0,0,.98,.9,.83,.73,.72,.68,.75,.78,.73,.85,.86,.87,.87,.94,1,1,.93,0,0,0,0,0,0,0,0,0,0,0,.24,.81,.79,.76,.72,.65,.65,.67,.72,.73,.71,.7,.92,1,1,1,1,0,0,0,0,0,0,0,0,0,.98,.83,.46,.4,.28,.45,.39,.64,.79,.99,1,1,1,1,1,1,.8,0,0,0,0,0,0,0]},{quem:"n",start:212.06,end:226.47,k:"b",a:574,b:615},{quem:"n",start:227.37,end:240.585,k:"b",a:616,b:654},{quem:"n",start:241.685,end:249.305,k:"b",a:655,b:675},{quem:"n",start:249.605,end:272.4,k:"b",a:676,b:747},{quem:"bia",start:272.9,end:278.29,k:"b",a:748,b:764,boca:[0,0,0,.29,.55,.64,.62,.68,.78,.8,.6,.2,.21,.66,.82,.69,.7,.73,.59,.59,.83,.97,.96,.98,1,1,1,1,1,1,1,1,.96,.92,.96,1,1,.92,.7,.5,.48,.65,.76,.76,.74,.68,.56,.5,.49,.34,0,.19,.53,.66,.51,.24,0,0,0,0,0,0,0,0,0,0,0,.13,.51,.84,.86,.81,.84,.81,.51,.35,.65,.91,.79,.44,0,0,.46,.76,.75,.78,.93,.99,.99,1,.99,.98,.94,.89,.91,.97,1,1,1,.99,.94,.83,.73,.72,.75,.78,.83,.87,.87,.87,.89,.93,.98,1,.89,.59,.42,.6,.77,.65,.51,.62,.76,.78,.78,.85,.96,.96,.74,.57,.77,.96,.96,.94,.91,.91,.87,.71,.61,.69,.84,.86,.59,.18,.22,.6,.71,.65,.64,.63,.61,.62,.67,.65,.58,.51,.44,.29,0,0,0],round:[0,0,0,.92,.66,.97,.35,0,0,.76,.88,0,0,.75,.85,.51,0,0,0,0,1,1,1,1,1,1,.9,.95,.93,.93,1,1,1,1,.99,.84,.95,1,1,1,1,1,1,1,1,1,.52,0,0,0,0,0,1,1,1,.83,0,0,0,0,0,0,0,0,0,0,0,0,.87,.88,.82,0,.81,.9,1,0,.58,.43,.28,.26,0,0,0,.31,1,.38,1,1,1,.84,.8,.88,.99,.92,.9,.5,.14,.14,.19,.13,.19,.76,1,1,.77,.74,.17,.55,0,.34,.79,1,1,1,1,.85,.53,.99,1,.98,.45,.4,0,0,0,.73,.54,0,1,1,1,1,1,.96,.38,.35,.58,0,0,0,.57,.87,1,0,0,.98,.95,1,.53,0,0,.8,.64,.61,.69,.51,.54,.6,0,0,0]},{quem:"n",start:279.39,end:289.035,k:"b",a:765,b:795},{quem:"n",start:290.035,end:320.81,k:"b",a:796,b:892},{quem:"n",start:321.41,end:329.76,k:"b",a:893,b:917},{quem:"n",start:330.66,end:336.45,k:"b",a:918,b:932},{quem:"n",start:336.75,end:348.825,k:"b",a:933,b:972},{quem:"n",start:349.925,end:357.585,k:"b",a:973,b:994},{quem:"n",start:358.485,end:361.675,k:"b",a:1057,b:1065},{quem:"n",start:362.575,end:384.72,k:"b",a:1066,b:1133},{quem:"n",start:385.62,end:390.66,k:"b",a:1134,b:1150},{quem:"augusto",start:391.36,end:395.033,k:"b",a:1151,b:1157,boca:[0,0,.14,.41,.55,.67,.88,.99,1,1,.99,.91,.65,.29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.18,.37,.73,.96,.96,.91,.88,.87,.94,.99,.88,.69,.7,.89,1,1,1,.94,.84,.86,.94,.87,.75,.77,.86,.95,.93,.76,.74,.9,1,1,.99,.8,.39,0,.16,.5,.72,.74,.67,.48,.27,.16,0,0,0,0,0,0,0,0,0,0,0,0,0],round:[0,0,0,.8,.57,.5,.83,.91,.77,.75,.67,.21,.25,.13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,.63,.35,.64,0,0,0,.41,.49,.7,.44,.5,.57,.86,.55,.52,.35,.28,.42,.49,.73,0,0,0,.35,.29,1,0,.23,.23,.04,0,0,0,0,0,0,0,.08,.25,.38,.29,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"n",start:396.733,end:408.023,k:"m",a:0,b:27},{quem:"lurdes",start:408.723,end:413.868,k:"m",a:28,b:35,boca:[0,0,0,0,0,0,.17,.57,.82,.87,.92,.81,.62,.57,.67,.89,.99,.74,.27,0,.35,.79,1,1,1,1,.99,.98,.94,.84,.74,.7,.63,.48,.26,0,.34,.78,.99,.98,.83,.64,.63,.71,.76,.78,.8,.89,.93,.89,.86,.8,.74,.69,.67,.7,.71,.53,.24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.4,.81,.71,.23,.15,.51,.72,.76,.9,1,1,.97,.9,.85,.74,.48,.45,.8,1,1,1,1,1,1,1,.98,.83,.46,0,0,0,0,0,0,0,0,.21,.63,.84,.89,.96,.98,.86,.52,.14,0,.44,.83,.92,.84,.77,.72,.57,.32,.25,.39,.43,.36,.26,.14,0,0,0,0,0,0,0,0,0,0,0],round:[0,0,0,0,0,0,0,0,0,0,.79,.16,0,0,0,.52,.41,.46,0,0,0,0,.67,.56,.21,.11,.06,.11,.09,0,0,0,0,0,.09,0,.62,1,.73,.76,.85,0,0,0,0,0,0,.62,.54,.7,.22,.64,0,0,0,.48,.64,.62,.38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.82,1,1,0,0,0,0,0,.89,.56,.56,.77,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,.98,0,0,0,0,0,0,0,0,0,.71,.11,0,0,0,0,0,0,0,0,.6,.4,.12,.19,.1,.19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"n",start:415.868,end:422.548,k:"m",a:36,b:52},{quem:"n",start:424.448,end:451.263,k:"m",a:53,b:124},{quem:"n",start:452.163,end:458.218,k:"m",a:125,b:143},{quem:"jorge",start:458.518,end:462.818,k:"m",a:144,b:154,boca:[.22,.68,.92,.67,.21,.2,.63,.9,.97,.98,.89,.8,.86,.97,.99,.98,.99,1,.87,.7,.79,.95,.97,.98,.99,.99,.96,.93,.93,.95,.99,1,1,1,.98,.96,.96,.99,1,1,1,1,1,1,.96,.88,.8,.64,.35,0,.12,.25,.31,.21,0,0,0,0,0,0,0,0,.21,.67,.96,.99,.9,.58,.41,.73,.96,.92,.85,.82,.9,.98,.99,.99,.99,.96,.68,.33,.48,.84,.95,.96,.93,.88,.92,.98,1,1,.98,.9,.88,.95,.87,.62,.64,.88,.99,.95,.93,.95,.99,1,.94,.88,.91,.81,.71,.87,.97,.94,.97,.97,.95,.98,1,1,1,.99,.99,.93,.65,.24,0,0,0],round:[0,0,0,0,0,0,0,0,0,0,.06,.45,0,0,0,0,.21,0,.01,.99,.02,.45,1,0,0,.16,.92,1,1,1,.63,.7,.24,.09,.07,.67,.32,.68,.88,.83,.73,.57,.43,.14,0,.04,.1,0,0,0,0,0,.05,.04,0,0,0,0,0,0,0,0,0,.53,.65,.61,.22,.92,0,.44,0,.22,.83,.63,.6,.26,0,0,0,0,0,0,0,0,0,.22,1,1,.41,.29,.26,0,0,.48,.38,.6,.48,.78,.89,.16,0,.28,0,0,.02,.32,0,.12,0,.32,.26,.64,.75,0,0,0,0,.59,.71,.56,.42,.56,.86,1,.99,0,0,0,0]},{quem:"n",start:463.418,end:471.238,k:"m",a:155,b:183},{quem:"bia",start:471.838,end:474.643,k:"m",a:184,b:190,boca:[0,0,.29,.35,.46,.78,.98,.98,.95,.9,.87,.89,.83,.62,.43,.4,.33,.13,0,0,.33,.56,.62,.57,.55,.6,.74,.89,.98,1,.95,.84,.7,.56,.59,.81,.97,1,.99,.86,.68,.59,.46,.27,.37,.78,1,1,1,.94,.76,.51,.33,.39,.62,.67,.59,.61,.64,.67,.68,.58,.59,.85,.89,.62,.44,.47,.55,.56,.6,.75,.85,.85,.79,.65,.45,.27,0,0,0,0,0,0],round:[0,0,0,0,0,.41,.49,.64,.73,.72,.71,.62,.8,.64,.93,.67,0,0,0,0,.08,.92,.57,1,1,.89,.85,.63,.69,.58,.71,.48,.36,.8,.86,.57,.3,0,.33,.79,.54,.53,0,0,0,.28,.4,.44,.54,.64,.77,.7,.68,.03,.77,.98,1,1,.96,.93,.45,.01,0,.69,.83,.96,.93,1,.62,.28,.27,.7,.82,.75,.8,.79,.95,1,0,0,0,0,0,0]},{quem:"augusto",start:474.993,end:478.348,k:"m",a:191,b:197,boca:[0,.33,.79,1,.92,.76,.69,.8,.93,.99,1,1,1,.99,.91,.71,.48,.24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.23,.46,.64,.78,.86,.82,.72,.69,.74,.74,.52,.21,0,.39,.81,1,.97,.78,.46,.19,.27,.63,.81,.82,.87,.85,.81,.65,.3,0,0,0,0,0,0,0,0,.13,.45,.69,.77,.8,.58,.18,0,.44,.84,.97,.93,.84,.71,.68,.51,.2,0,0,0,0,0,0,0,0,0,0,0],round:[0,0,.86,.6,0,.93,1,0,0,0,0,0,0,0,0,.49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,.42,.33,.1,.19,.6,0,0,.61,1,0,0,0,0,0,0,.6,1,1,0,.83,.81,.8,.69,.57,.96,1,1,0,0,0,0,0,0,0,0,0,.83,.28,.67,0,0,0,0,.01,.24,0,.43,0,.26,.05,.23,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"n",start:479.648,end:514.033,k:"m",a:198,b:310}],falas:[{quem:"lurdes",start:63.77,end:67.52,k:"b",a:173,b:180,boca:[0,0,.27,.58,.85,.83,.54,.52,.83,1,.94,.79,.65,.55,.5,.66,.9,.99,1,1,1,1,1,1,.96,.91,.96,1,1,.96,.77,.54,.5,.55,.56,.52,.51,.62,.74,.75,.71,.64,.51,.41,.44,.56,.66,.66,.55,.4,.2,0,0,0,0,0,.22,.55,.44,0,.17,.44,.62,.85,1,.98,.91,.81,.72,.49,.38,.71,.98,1,.99,.96,.91,.86,.77,.5,.26,.46,.77,.78,.73,.79,.81,.59,.22,0,.22,.7,.97,.97,.91,.85,.83,.81,.64,.46,.61,.8,.73,.55,.41,.37,.35,.23,0,0,0,0],round:[0,0,0,0,.58,.81,0,0,.88,.57,.58,.99,1,1,0,0,.88,.74,.6,.6,.59,.55,.55,.3,0,.68,1,1,.95,.97,1,0,0,0,0,0,0,.16,.16,0,0,.34,.96,0,.22,.66,.75,.95,1,1,.61,0,0,0,0,0,0,1,.97,0,0,0,0,.55,.4,.64,1,1,1,1,0,.96,.99,.9,.95,.99,1,1,1,.72,0,.32,.21,.32,0,0,0,0,0,0,0,.85,.7,.57,.57,.56,.48,.46,.56,.52,.21,.41,.35,.34,.25,.33,.19,.1,0,0,0,0]},{quem:"jorge",start:99.93,end:103.84,k:"b",a:269,b:276,boca:[.19,.42,.59,.59,.47,.56,.85,1,1,1,1,1,.9,.6,.39,.45,.37,.13,0,0,0,0,0,0,0,0,0,.23,.68,.87,.84,.86,.83,.79,.85,.96,1,1,.87,.74,.87,1,1,1,1,.99,.93,.77,.55,.32,.15,0,0,0,0,0,0,0,0,0,0,0,0,.15,.52,.85,.85,.73,.83,.98,.99,.97,.98,.98,.97,.99,.83,.66,.75,.59,.19,.28,.76,.92,.71,.43,.27,.49,.86,1,.95,.75,.43,.16,0,0,0,0,0,0,0,0,.18,.47,.38,0,0,0,0,0,0,0,0,0,0,0,0],round:[.53,0,.43,.84,1,1,1,.87,.34,.44,.31,0,0,0,0,0,.84,0,0,0,0,0,0,0,0,0,0,0,.11,.01,1,.21,.92,.65,.14,0,0,0,0,0,0,0,1,1,.96,.68,.59,.41,.31,.03,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.13,.08,.91,.67,.24,.38,0,0,0,.04,.05,.24,.48,.67,1,0,0,.95,.68,0,0,0,0,0,.1,0,.27,.15,0,0,0,0,0,0,0,0,0,0,.88,.72,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"jorge",start:129.965,end:135.37,k:"b",a:356,b:372,boca:[.49,.83,.94,.91,.89,.94,.99,1,.97,.88,.68,.41,.34,.54,.64,.42,0,0,0,.22,.48,.63,.81,.97,.99,.93,.9,.96,1,.94,.82,.78,.87,.97,1,.95,.83,.72,.62,.67,.88,1,1,1,1,.97,.7,.43,.66,.96,.98,.97,.98,.93,.86,.93,.96,.89,.82,.76,.68,.6,.49,.36,.24,.2,.16,0,0,0,0,0,.21,.66,.89,.87,.91,.69,.22,0,.25,.75,.99,.98,.99,1,.96,.89,.87,.91,.96,.99,1,1,1,.95,.77,.66,.82,.98,1,.94,.75,.67,.82,.97,1,1,1,1,.98,.71,.23,0,0,0,0,.25,.75,1,1,.99,.98,.99,.96,.9,.93,.77,.45,.56,.89,.94,.89,.94,1,.99,.98,.96,.97,.99,1,1,1,1,1,1,1,1,1,.95,.76,.5,.29,.2,.31,.56,.65,.49,.21,0,0,0],round:[1,1,1,.71,.85,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.48,0,.82,.87,0,.61,.7,.56,1,1,0,.65,.82,.87,1,1,1,1,.46,.4,.25,.07,.01,.64,.99,0,0,.67,.19,.11,0,0,0,.25,.17,.44,.89,.54,.35,.24,.23,.1,0,0,0,0,0,0,0,0,0,.88,.43,0,0,0,0,0,0,.51,.17,.16,.79,.88,.25,.38,1,1,1,1,1,.84,.93,.4,0,.83,0,0,0,1,1,.67,.41,.2,0,.47,.86,0,0,0,0,0,0,0,0,0,.49,0,0,0,0,.21,.18,.9,0,.57,0,0,.41,.05,.36,0,0,0,.5,0,.32,.27,.35,0,0,.53,.46,.3,.27,.23,.67,.27,.99,.18,.5,0,0,0,0,0,0,0,0,0]},{quem:"bia",start:143.235,end:147.32,k:"b",a:392,b:400,boca:[0,0,0,.16,.44,.46,.48,.73,.88,.87,.69,.56,.6,.59,.53,.6,.73,.77,.83,.95,.9,.74,.71,.7,.48,.15,.24,.72,.96,.9,.78,.63,.45,.25,0,0,0,0,0,0,0,.3,.74,.83,.75,.89,.84,.61,.71,.89,.8,.65,.74,.84,.73,.62,.67,.82,.77,.69,.8,.93,.95,.79,.44,.28,.6,.9,.94,.93,.95,.97,.99,.97,.87,.81,.86,.83,.73,.8,.93,.94,.82,.66,.58,.51,.39,.47,.78,.98,1,1,1,1,.88,.66,.55,.55,.65,.75,.76,.77,.88,.96,.95,.9,.91,.71,.25,0,.24,.61,.77,.7,.59,.53,.54,.53,.46,.32,.13,0],round:[0,0,0,0,.05,0,0,.58,.53,.82,1,1,1,1,1,1,1,.97,.71,.89,.95,.53,0,0,0,0,0,.59,.78,.93,1,1,.95,1,0,0,0,0,0,0,0,0,.72,.73,0,.81,.93,.39,.52,.91,.74,.01,.49,.71,0,0,0,0,.27,1,.79,.49,.4,.79,.92,0,.27,.72,.8,.93,.86,.18,.15,.16,.23,.33,.74,1,1,.82,.74,1,1,1,1,1,1,1,.85,.9,.94,.68,.55,.37,1,.76,.78,.99,.77,.28,.59,.88,.93,1,.96,.9,.74,1,0,0,0,.94,.97,1,1,.94,0,0,0,0,0,0]},{quem:"augusto",start:147.62,end:150.91,k:"b",a:401,b:404,boca:[0,0,.19,.58,.62,.27,0,.13,.49,.87,1,1,1,1,.99,.97,.93,.89,.82,.76,.77,.78,.65,.56,.67,.57,.19,0,0,0,0,0,0,0,0,0,0,.26,.64,.68,.47,.53,.79,.91,.81,.73,.73,.8,.92,.91,.6,.17,.25,.75,1,1,1,1,1,1,1,1,.98,.85,.5,.14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],round:[0,0,0,.46,0,0,0,0,0,.25,.34,.65,.77,.82,.78,.86,.87,.85,.76,.74,.83,.87,1,.89,.79,.44,0,0,0,0,0,0,0,0,0,0,0,0,.4,.36,.84,1,.08,.34,.13,.5,.5,.46,0,0,.88,0,0,.51,0,0,.1,0,.03,.24,.29,.18,.71,.76,.73,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"bia",start:206.335,end:211.36,k:"b",a:570,b:573,boca:[0,.17,.57,.89,.99,1,.99,.9,.72,.56,.47,.49,.66,.87,.98,1,1,1,1,1,1,.91,.76,.72,.77,.78,.76,.66,.41,.13,0,.24,.48,.68,.75,.75,.73,.68,.53,.28,0,0,0,0,0,0,0,0,0,.25,.46,.51,.51,.58,.67,.77,.87,.92,.86,.74,.73,.84,.94,.99,1,.99,.98,.95,.93,.88,.74,.67,.86,1,1,1,1,1,1,1,1,1,.99,.97,.95,.92,.85,.67,.36,0,0,0,0,0,0,0,0,0,0,0,.39,.73,.86,.84,.83,.84,.85,.85,.85,.83,.81,.78,.66,.45,.31,.26,.17,0,0,0,0,0,0,0,0,.22,.66,.93,.94,.93,.97,.99,1,1,1,1,1,1,1,.97,.86,.69,.42,.14,0,0,0,0,0,0],round:[0,0,.09,.75,.85,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,.98,.9,.79,.62,.3,0,0,0,0,0,0,0,0,0,.84,1,.97,.85,.85,1,1,1,1,1,.41,0,0,0,0,0,0,0,0,0,0,0,0,.98,.9,.83,.73,.72,.68,.75,.78,.73,.85,.86,.87,.87,.94,1,1,.93,0,0,0,0,0,0,0,0,0,0,0,.24,.81,.79,.76,.72,.65,.65,.67,.72,.73,.71,.7,.92,1,1,1,1,0,0,0,0,0,0,0,0,0,.98,.83,.46,.4,.28,.45,.39,.64,.79,.99,1,1,1,1,1,1,.8,0,0,0,0,0,0,0]},{quem:"bia",start:272.9,end:278.29,k:"b",a:748,b:764,boca:[0,0,0,.29,.55,.64,.62,.68,.78,.8,.6,.2,.21,.66,.82,.69,.7,.73,.59,.59,.83,.97,.96,.98,1,1,1,1,1,1,1,1,.96,.92,.96,1,1,.92,.7,.5,.48,.65,.76,.76,.74,.68,.56,.5,.49,.34,0,.19,.53,.66,.51,.24,0,0,0,0,0,0,0,0,0,0,0,.13,.51,.84,.86,.81,.84,.81,.51,.35,.65,.91,.79,.44,0,0,.46,.76,.75,.78,.93,.99,.99,1,.99,.98,.94,.89,.91,.97,1,1,1,.99,.94,.83,.73,.72,.75,.78,.83,.87,.87,.87,.89,.93,.98,1,.89,.59,.42,.6,.77,.65,.51,.62,.76,.78,.78,.85,.96,.96,.74,.57,.77,.96,.96,.94,.91,.91,.87,.71,.61,.69,.84,.86,.59,.18,.22,.6,.71,.65,.64,.63,.61,.62,.67,.65,.58,.51,.44,.29,0,0,0],round:[0,0,0,.92,.66,.97,.35,0,0,.76,.88,0,0,.75,.85,.51,0,0,0,0,1,1,1,1,1,1,.9,.95,.93,.93,1,1,1,1,.99,.84,.95,1,1,1,1,1,1,1,1,1,.52,0,0,0,0,0,1,1,1,.83,0,0,0,0,0,0,0,0,0,0,0,0,.87,.88,.82,0,.81,.9,1,0,.58,.43,.28,.26,0,0,0,.31,1,.38,1,1,1,.84,.8,.88,.99,.92,.9,.5,.14,.14,.19,.13,.19,.76,1,1,.77,.74,.17,.55,0,.34,.79,1,1,1,1,.85,.53,.99,1,.98,.45,.4,0,0,0,.73,.54,0,1,1,1,1,1,.96,.38,.35,.58,0,0,0,.57,.87,1,0,0,.98,.95,1,.53,0,0,.8,.64,.61,.69,.51,.54,.6,0,0,0]},{quem:"augusto",start:391.36,end:395.033,k:"b",a:1151,b:1157,boca:[0,0,.14,.41,.55,.67,.88,.99,1,1,.99,.91,.65,.29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.18,.37,.73,.96,.96,.91,.88,.87,.94,.99,.88,.69,.7,.89,1,1,1,.94,.84,.86,.94,.87,.75,.77,.86,.95,.93,.76,.74,.9,1,1,.99,.8,.39,0,.16,.5,.72,.74,.67,.48,.27,.16,0,0,0,0,0,0,0,0,0,0,0,0,0],round:[0,0,0,.8,.57,.5,.83,.91,.77,.75,.67,.21,.25,.13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,.63,.35,.64,0,0,0,.41,.49,.7,.44,.5,.57,.86,.55,.52,.35,.28,.42,.49,.73,0,0,0,.35,.29,1,0,.23,.23,.04,0,0,0,0,0,0,0,.08,.25,.38,.29,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"lurdes",start:408.723,end:413.868,k:"m",a:28,b:35,boca:[0,0,0,0,0,0,.17,.57,.82,.87,.92,.81,.62,.57,.67,.89,.99,.74,.27,0,.35,.79,1,1,1,1,.99,.98,.94,.84,.74,.7,.63,.48,.26,0,.34,.78,.99,.98,.83,.64,.63,.71,.76,.78,.8,.89,.93,.89,.86,.8,.74,.69,.67,.7,.71,.53,.24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.4,.81,.71,.23,.15,.51,.72,.76,.9,1,1,.97,.9,.85,.74,.48,.45,.8,1,1,1,1,1,1,1,.98,.83,.46,0,0,0,0,0,0,0,0,.21,.63,.84,.89,.96,.98,.86,.52,.14,0,.44,.83,.92,.84,.77,.72,.57,.32,.25,.39,.43,.36,.26,.14,0,0,0,0,0,0,0,0,0,0,0],round:[0,0,0,0,0,0,0,0,0,0,.79,.16,0,0,0,.52,.41,.46,0,0,0,0,.67,.56,.21,.11,.06,.11,.09,0,0,0,0,0,.09,0,.62,1,.73,.76,.85,0,0,0,0,0,0,.62,.54,.7,.22,.64,0,0,0,.48,.64,.62,.38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.82,1,1,0,0,0,0,0,.89,.56,.56,.77,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,.98,0,0,0,0,0,0,0,0,0,.71,.11,0,0,0,0,0,0,0,0,.6,.4,.12,.19,.1,.19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"jorge",start:458.518,end:462.818,k:"m",a:144,b:154,boca:[.22,.68,.92,.67,.21,.2,.63,.9,.97,.98,.89,.8,.86,.97,.99,.98,.99,1,.87,.7,.79,.95,.97,.98,.99,.99,.96,.93,.93,.95,.99,1,1,1,.98,.96,.96,.99,1,1,1,1,1,1,.96,.88,.8,.64,.35,0,.12,.25,.31,.21,0,0,0,0,0,0,0,0,.21,.67,.96,.99,.9,.58,.41,.73,.96,.92,.85,.82,.9,.98,.99,.99,.99,.96,.68,.33,.48,.84,.95,.96,.93,.88,.92,.98,1,1,.98,.9,.88,.95,.87,.62,.64,.88,.99,.95,.93,.95,.99,1,.94,.88,.91,.81,.71,.87,.97,.94,.97,.97,.95,.98,1,1,1,.99,.99,.93,.65,.24,0,0,0],round:[0,0,0,0,0,0,0,0,0,0,.06,.45,0,0,0,0,.21,0,.01,.99,.02,.45,1,0,0,.16,.92,1,1,1,.63,.7,.24,.09,.07,.67,.32,.68,.88,.83,.73,.57,.43,.14,0,.04,.1,0,0,0,0,0,.05,.04,0,0,0,0,0,0,0,0,0,.53,.65,.61,.22,.92,0,.44,0,.22,.83,.63,.6,.26,0,0,0,0,0,0,0,0,0,.22,1,1,.41,.29,.26,0,0,.48,.38,.6,.48,.78,.89,.16,0,.28,0,0,.02,.32,0,.12,0,.32,.26,.64,.75,0,0,0,0,.59,.71,.56,.42,.56,.86,1,.99,0,0,0,0]},{quem:"bia",start:471.838,end:474.643,k:"m",a:184,b:190,boca:[0,0,.29,.35,.46,.78,.98,.98,.95,.9,.87,.89,.83,.62,.43,.4,.33,.13,0,0,.33,.56,.62,.57,.55,.6,.74,.89,.98,1,.95,.84,.7,.56,.59,.81,.97,1,.99,.86,.68,.59,.46,.27,.37,.78,1,1,1,.94,.76,.51,.33,.39,.62,.67,.59,.61,.64,.67,.68,.58,.59,.85,.89,.62,.44,.47,.55,.56,.6,.75,.85,.85,.79,.65,.45,.27,0,0,0,0,0,0],round:[0,0,0,0,0,.41,.49,.64,.73,.72,.71,.62,.8,.64,.93,.67,0,0,0,0,.08,.92,.57,1,1,.89,.85,.63,.69,.58,.71,.48,.36,.8,.86,.57,.3,0,.33,.79,.54,.53,0,0,0,.28,.4,.44,.54,.64,.77,.7,.68,.03,.77,.98,1,1,.96,.93,.45,.01,0,.69,.83,.96,.93,1,.62,.28,.27,.7,.82,.75,.8,.79,.95,1,0,0,0,0,0,0]},{quem:"augusto",start:474.993,end:478.348,k:"m",a:191,b:197,boca:[0,.33,.79,1,.92,.76,.69,.8,.93,.99,1,1,1,.99,.91,.71,.48,.24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.23,.46,.64,.78,.86,.82,.72,.69,.74,.74,.52,.21,0,.39,.81,1,.97,.78,.46,.19,.27,.63,.81,.82,.87,.85,.81,.65,.3,0,0,0,0,0,0,0,0,.13,.45,.69,.77,.8,.58,.18,0,.44,.84,.97,.93,.84,.71,.68,.51,.2,0,0,0,0,0,0,0,0,0,0,0],round:[0,0,.86,.6,0,.93,1,0,0,0,0,0,0,0,0,.49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,.42,.33,.1,.19,.6,0,0,.61,1,0,0,0,0,0,0,.6,1,1,0,.83,.81,.8,.69,.57,.96,1,1,0,0,0,0,0,0,0,0,0,.83,.28,.67,0,0,0,0,.01,.24,0,.43,0,.26,.05,.23,0,0,0,0,0,0,0,0,0,0,0,0]}]};var Dh=[{text:"Semana",start:1.755,end:2.185},{text:"oito,",start:2.185,end:2.705},{text:"avenida",start:2.705,end:3.105},{text:"Paulista,",start:3.105,end:3.675},{text:"tr\xEAs",start:3.855,end:4.165},{text:"da",start:4.165,end:4.355},{text:"tarde,",start:4.355,end:4.965},{text:"e",start:4.965,end:5.055},{text:"todas",start:5.055,end:5.355},{text:"as",start:5.355,end:5.485},{text:"janelas",start:5.485,end:5.945},{text:"da",start:5.945,end:6.065},{text:"avenida",start:6.085,end:6.575},{text:"explodem",start:6.575,end:7.115},{text:"ao",start:7.115,end:7.195},{text:"mesmo",start:7.195,end:7.595},{text:"tempo.",start:7.595,end:8.055},{text:"Os",start:9.705,end:9.715},{text:"alarmes",start:9.775,end:10.185},{text:"disparam,",start:10.185,end:10.815},{text:"as",start:10.815,end:10.945},{text:"pessoas",start:10.945,end:11.395},{text:"se",start:11.395,end:11.465},{text:"jogam",start:11.555,end:11.835},{text:"no",start:11.875,end:11.965},{text:"ch\xE3o,",start:11.965,end:12.415},{text:"um",start:12.415,end:12.525},{text:"estrondo",start:12.525,end:12.865},{text:"atravessa",start:13.065,end:13.455},{text:"S\xE3o",start:13.455,end:13.615},{text:"Paulo",start:13.615,end:13.915},{text:"inteira,",start:13.915,end:14.775},{text:"e",start:14.775,end:14.935},{text:"no",start:14.935,end:14.985},{text:"meio",start:14.985,end:15.265},{text:"da",start:15.265,end:15.405},{text:"avenida,",start:15.405,end:16.035},{text:"parado,",start:16.035,end:16.595},{text:"sem",start:16.595,end:16.805},{text:"entender",start:16.805,end:17.365},{text:"nada,",start:17.365,end:17.815},{text:"est\xE1",start:17.815,end:18.005},{text:"um",start:18.225,end:18.245},{text:"garoto",start:18.245,end:18.665},{text:"de",start:18.665,end:18.805},{text:"19",start:18.805,end:19.225},{text:"anos",start:19.235,end:19.525},{text:"com",start:19.525,end:19.735},{text:"uma",start:19.735,end:19.855},{text:"pizza",start:19.995,end:20.305},{text:"na",start:20.305,end:20.445},{text:"m\xE3o.",start:20.445,end:20.935},{text:"O",start:21.735,end:21.895},{text:"nome",start:21.895,end:22.015},{text:"dele",start:22.015,end:22.245},{text:"\xE9",start:22.245,end:22.295},{text:"Augusto,",start:22.295,end:22.795},{text:"e",start:22.825,end:22.845},{text:"ele",start:22.845,end:23.015},{text:"s\xF3",start:23.015,end:23.125},{text:"queria",start:23.125,end:23.465},{text:"entregar",start:23.465,end:23.815},{text:"uma",start:23.995,end:24.085},{text:"calabresa.",start:24.085,end:24.805},{text:"Ele",start:25.515,end:25.565},{text:"acabou",start:25.565,end:25.985},{text:"de",start:25.985,end:26.005},{text:"quebrar",start:26.115,end:26.615},{text:"a",start:26.615,end:26.685},{text:"barreira",start:26.685,end:27.195},{text:"do",start:27.295,end:27.385},{text:"som,",start:27.385,end:27.735},{text:"correndo,",start:27.735,end:28.455},{text:"e",start:28.455,end:28.515},{text:"oito",start:28.515,end:28.805},{text:"semanas",start:28.815,end:29.305},{text:"antes",start:29.305,end:29.675},{text:"ele",start:29.675,end:29.805},{text:"era",start:29.815,end:29.955},{text:"o",start:29.955,end:29.995},{text:"entregador",start:29.995,end:30.435},{text:"mais",start:30.575,end:30.795},{text:"lento",start:30.795,end:31.195},{text:"da",start:31.195,end:31.355},{text:"cidade.",start:31.355,end:32.115},{text:"O",start:33.915,end:34.075},{text:"Augusto",start:34.075,end:34.415},{text:"mora",start:34.415,end:34.615},{text:"na",start:34.675,end:34.775},{text:"Zona",start:34.995,end:35.035},{text:"Leste",start:35.035,end:35.345},{text:"com",start:35.345,end:35.535},{text:"a",start:35.535,end:35.595},{text:"av\xF3,",start:35.595,end:35.895},{text:"a",start:35.895,end:35.955},{text:"dona",start:35.955,end:36.205},{text:"Lurdes,",start:36.205,end:36.865},{text:"e",start:36.865,end:36.915},{text:"trabalha",start:36.915,end:37.295},{text:"numa",start:37.365,end:37.475},{text:"pizzaria",start:37.625,end:37.915},{text:"fazendo",start:37.915,end:38.285},{text:"entregas",start:38.285,end:38.715},{text:"de",start:38.715,end:38.805},{text:"bicicleta,",start:38.805,end:39.345},{text:"porque",start:39.515,end:39.685},{text:"moto",start:39.685,end:39.905},{text:"ele",start:39.905,end:40.005},{text:"nunca",start:40.065,end:40.215},{text:"conseguiu",start:40.445,end:40.785},{text:"comprar.",start:40.845,end:41.425},{text:"Ele",start:41.895,end:41.925},{text:"\xE9",start:41.925,end:41.985},{text:"bom",start:41.985,end:42.175},{text:"de",start:42.175,end:42.305},{text:"cora\xE7\xE3o",start:42.305,end:42.555},{text:"e",start:42.815,end:42.825},{text:"p\xE9ssimo",start:42.825,end:43.265},{text:"de",start:43.265,end:43.385},{text:"pontualidade,",start:43.385,end:44.335},{text:"chega",start:44.425,end:44.635},{text:"atrasado",start:44.635,end:45.025},{text:"no",start:45.025,end:45.195},{text:"trabalho,",start:45.195,end:45.735},{text:"chega",start:45.735,end:45.975},{text:"atrasado",start:45.995,end:46.435},{text:"nas",start:46.435,end:46.595},{text:"entregas,",start:46.595,end:47.165},{text:"chega",start:47.335,end:47.455},{text:"atrasado",start:47.455,end:47.825},{text:"at\xE9",start:47.905,end:48.035},{text:"no",start:48.035,end:48.265},{text:"pr\xF3prio",start:48.265,end:48.575},{text:"anivers\xE1rio,",start:48.575,end:49.255},{text:"mas",start:49.435,end:49.515},{text:"teve",start:49.515,end:49.755},{text:"um",start:49.755,end:49.775},{text:"atraso",start:49.865,end:50.215},{text:"que",start:50.215,end:50.365},{text:"ele",start:50.365,end:50.625},{text:"nunca",start:50.625,end:50.705},{text:"perdoou.",start:50.885,end:51.495},{text:"H\xE1",start:51.855,end:51.895},{text:"dois",start:51.955,end:52.175},{text:"anos,",start:52.175,end:52.465},{text:"o",start:52.555,end:52.625},{text:"av\xF4",start:52.625,end:52.815},{text:"dele",start:52.885,end:53.075},{text:"passou",start:53.075,end:53.475},{text:"mal",start:53.475,end:53.635},{text:"de",start:53.735,end:53.805},{text:"madrugada,",start:53.805,end:54.565},{text:"e",start:54.565,end:54.605},{text:"quando",start:54.605,end:54.865},{text:"Augusto",start:54.875,end:55.235},{text:"chegou",start:55.255,end:55.525},{text:"no",start:55.525,end:55.625},{text:"hospital,",start:55.625,end:56.185},{text:"de",start:56.185,end:56.295},{text:"bicicleta,",start:56.295,end:56.875},{text:"debaixo",start:57.015,end:57.505},{text:"de",start:57.505,end:57.655},{text:"chuva,",start:57.655,end:58.225},{text:"j\xE1",start:58.225,end:58.305},{text:"era",start:58.545,end:58.635},{text:"tarde.",start:58.635,end:59.205},{text:"Guarda",start:60.735,end:60.905},{text:"essa",start:60.905,end:61.125},{text:"informa\xE7\xE3o,",start:61.125,end:61.795},{text:"ela",start:61.795,end:61.955},{text:"vai",start:61.955,end:62.115},{text:"importar.",start:62.115,end:62.655},{text:"Devagar,",start:63.935,end:64.685},{text:"meu",start:64.865,end:65.095},{text:"filho,",start:65.095,end:65.855},{text:"o",start:65.855,end:66.035},{text:"que",start:66.035,end:66.305},{text:"\xE9",start:66.305,end:66.375},{text:"bom",start:66.415,end:66.715},{text:"espera.",start:66.735,end:67.495},{text:"Ela",start:68.285,end:68.365},{text:"fala",start:68.365,end:68.595},{text:"isso",start:68.595,end:68.825},{text:"toda",start:68.825,end:69.015},{text:"vez",start:69.015,end:69.055},{text:"que",start:69.285,end:69.395},{text:"ele",start:69.395,end:69.565},{text:"sai",start:69.565,end:69.735},{text:"correndo",start:69.735,end:70.195},{text:"pela",start:70.195,end:70.255},{text:"porta,",start:70.455,end:70.915},{text:"e",start:70.915,end:70.985},{text:"toda",start:70.985,end:71.265},{text:"vez",start:71.265,end:71.445},{text:"ele",start:71.645,end:71.755},{text:"finge",start:71.905,end:72.135},{text:"que",start:72.135,end:72.365},{text:"n\xE3o",start:72.365,end:72.595},{text:"ouviu.",start:72.595,end:73.275},{text:"At\xE9",start:73.835,end:73.905},{text:"que,",start:73.905,end:74.285},{text:"num",start:74.285,end:74.485},{text:"domingo",start:74.485,end:75.045},{text:"\xE0",start:75.045,end:75.105},{text:"meia-noite,",start:75.105,end:76.015},{text:"alguma",start:76.015,end:76.475},{text:"coisa",start:76.475,end:76.745},{text:"muda.",start:77.085,end:77.475},{text:"E",start:79.035,end:79.055},{text:"a",start:79.055,end:79.075},{text:"regra",start:79.135,end:79.395},{text:"\xE9",start:79.395,end:79.455},{text:"simples.",start:79.455,end:80.095},{text:"A",start:80.095,end:80.255},{text:"cada",start:80.255,end:80.425},{text:"semana,",start:80.425,end:80.955},{text:"a",start:80.955,end:81.015},{text:"velocidade",start:81.185,end:81.715},{text:"do",start:81.715,end:81.845},{text:"Augusto",start:81.845,end:82.315},{text:"dobra.",start:82.355,end:82.925},{text:"Uma",start:83.395,end:83.455},{text:"pessoa",start:83.455,end:83.885},{text:"normal",start:83.885,end:84.075},{text:"anda",start:84.325,end:84.605},{text:"uns",start:84.605,end:84.825},{text:"5",start:84.825,end:85.025},{text:"km",start:85.035,end:85.185},{text:"por",start:85.185,end:85.315},{text:"hora,",start:85.495,end:85.835},{text:"ent\xE3o",start:85.925,end:86.135},{text:"na",start:86.135,end:86.255},{text:"primeira",start:86.255,end:86.695},{text:"semana",start:86.695,end:87.025},{text:"o",start:87.025,end:87.075},{text:"Augusto",start:87.075,end:87.455},{text:"anda",start:87.455,end:87.665},{text:"a",start:87.675,end:87.695},{text:"10,",start:87.715,end:88.195},{text:"na",start:88.195,end:88.305},{text:"segunda",start:88.455,end:88.715},{text:"20,",start:88.715,end:89.195},{text:"na",start:89.195,end:89.375},{text:"terceira",start:89.375,end:90.105},{text:"40.",start:90.105,end:90.675},{text:"E",start:91.045,end:91.15},{text:"faz",start:91.15,end:91.255},{text:"a",start:91.255,end:91.325},{text:"conta,",start:91.325,end:91.795},{text:"porque",start:91.795,end:92.205},{text:"essa",start:92.205,end:92.485},{text:"conta",start:92.485,end:92.815},{text:"vai",start:92.815,end:93.035},{text:"virar",start:93.035,end:93.375},{text:"um",start:93.375,end:93.515},{text:"pesadelo.",start:93.515,end:94.165},{text:"Semana",start:95.395,end:95.625},{text:"1,",start:95.625,end:95.885},{text:"o",start:96.005,end:96.015},{text:"Augusto",start:96.015,end:96.465},{text:"chega",start:96.465,end:96.795},{text:"no",start:96.795,end:96.925},{text:"trabalho",start:96.925,end:97.295},{text:"na",start:97.495,end:97.585},{text:"hora,",start:97.585,end:97.975},{text:"pela",start:97.975,end:98.235},{text:"primeira",start:98.235,end:98.765},{text:"vez",start:98.945,end:98.965},{text:"na",start:98.965,end:99.095},{text:"vida.",start:99.095,end:99.475},{text:"Augusto,",start:100.035,end:100.515},{text:"t\xE1",start:100.515,end:100.545},{text:"doente,",start:100.635,end:101.215},{text:"moleque?",start:101.215,end:101.945},{text:"Chegou",start:102.135,end:102.475},{text:"cedo",start:102.575,end:102.905},{text:"por",start:102.905,end:103.065},{text:"qu\xEA?",start:103.325,end:103.835},{text:"Semana",start:104.695,end:105.035},{text:"2,",start:105.035,end:105.415},{text:"20",start:105.625,end:105.945},{text:"km",start:105.945,end:106.105},{text:"por",start:106.105,end:106.355},{text:"hora.",start:106.355,end:106.975},{text:"O",start:106.975,end:107.135},{text:"Augusto",start:107.135,end:107.415},{text:"larga",start:107.415,end:107.625},{text:"a",start:107.625,end:107.745},{text:"bicicleta",start:107.745,end:108.245},{text:"e",start:108.245,end:108.295},{text:"come\xE7a",start:108.295,end:108.625},{text:"a",start:108.635,end:108.685},{text:"entregar",start:108.685,end:109.065},{text:"correndo,",start:109.235,end:109.775},{text:"e",start:109.775,end:109.825},{text:"chega",start:109.825,end:110.055},{text:"antes",start:110.425,end:110.475},{text:"da",start:110.475,end:110.535},{text:"pizza",start:110.685,end:110.925},{text:"esfriar.",start:110.925,end:111.615},{text:"Chega",start:111.705,end:111.875},{text:"antes",start:111.875,end:112.145},{text:"at\xE9",start:112.145,end:112.265},{text:"de",start:112.305,end:112.405},{text:"o",start:112.405,end:112.455},{text:"cliente",start:112.455,end:112.825},{text:"terminar",start:112.825,end:113.255},{text:"de",start:113.255,end:113.355},{text:"pagar",start:113.355,end:113.625},{text:"no",start:113.625,end:113.705},{text:"aplicativo.",start:113.875,end:114.455},{text:"Semana",start:114.955,end:115.215},{text:"3,",start:115.215,end:115.445},{text:"40",start:115.565,end:115.985},{text:"km",start:115.995,end:116.125},{text:"por",start:116.125,end:116.335},{text:"hora.",start:116.335,end:116.835},{text:"Quase",start:116.915,end:117.115},{text:"a",start:117.115,end:117.175},{text:"velocidade",start:117.175,end:117.485},{text:"do",start:117.485,end:117.925},{text:"homem",start:117.925,end:118.165},{text:"mais",start:118.165,end:118.395},{text:"r\xE1pido",start:118.395,end:118.675},{text:"da",start:118.775,end:118.855},{text:"hist\xF3ria,",start:118.855,end:119.435},{text:"e",start:119.525,end:119.585},{text:"ele",start:119.585,end:119.785},{text:"n\xE3o",start:119.785,end:119.955},{text:"est\xE1",start:120.005,end:120.295},{text:"nem",start:120.295,end:120.365},{text:"suado.",start:120.545,end:121.105},{text:"Semana",start:121.575,end:121.875},{text:"4,",start:121.875,end:122.255},{text:"80",start:122.505,end:122.715},{text:"km.",start:122.715,end:123.135},{text:"O",start:123.135,end:123.295},{text:"Augusto",start:123.295,end:123.635},{text:"ultrapassa",start:123.635,end:124.265},{text:"carro",start:124.265,end:124.585},{text:"na",start:124.625,end:124.705},{text:"Radial",start:124.705,end:125.085},{text:"Leste,",start:125.085,end:125.515},{text:"algu\xE9m",start:125.515,end:125.895},{text:"filma,",start:125.895,end:126.305},{text:"o",start:126.305,end:126.385},{text:"v\xEDdeo",start:126.585,end:126.695},{text:"bomba",start:126.845,end:127.135},{text:"e",start:127.135,end:127.195},{text:"de",start:127.195,end:127.315},{text:"repente",start:127.315,end:127.775},{text:"a",start:127.775,end:127.835},{text:"pizzaria",start:127.835,end:128.375},{text:"tem",start:128.375,end:128.575},{text:"fila",start:128.605,end:128.835},{text:"na",start:128.835,end:128.965},{text:"porta.",start:128.965,end:129.535},{text:"Moleque,",start:130.095,end:130.575},{text:"eu",start:130.575,end:130.605},{text:"vou",start:130.695,end:130.875},{text:"dobrar",start:131.025,end:131.355},{text:"o",start:131.355,end:131.365},{text:"teu",start:131.425,end:131.635},{text:"sal\xE1rio,",start:131.635,end:132.335},{text:"mas",start:132.335,end:132.535},{text:"pelo",start:132.555,end:132.835},{text:"amor",start:132.835,end:133.055},{text:"de",start:133.055,end:133.235},{text:"Deus,",start:133.385,end:133.705},{text:"para",start:133.705,end:133.995},{text:"de",start:133.995,end:134.135},{text:"passar",start:134.135,end:134.575},{text:"os",start:134.575,end:134.715},{text:"\xF4nibus.",start:134.715,end:135.455},{text:"E",start:136.125,end:136.14},{text:"a",start:136.14,end:136.155},{text:"Bia,",start:136.215,end:136.545},{text:"a",start:136.545,end:136.615},{text:"atendente",start:136.615,end:137.265},{text:"da",start:137.265,end:137.405},{text:"pizzaria,",start:137.405,end:138.145},{text:"que",start:138.315,end:138.395},{text:"nunca",start:138.395,end:138.655},{text:"tinha",start:138.695,end:138.985},{text:"olhado",start:138.985,end:139.305},{text:"duas",start:139.505,end:139.595},{text:"vezes",start:139.765,end:139.895},{text:"pro",start:139.895,end:140.075},{text:"entregador",start:140.075,end:140.665},{text:"atrasado,",start:140.685,end:141.375},{text:"come\xE7a",start:141.375,end:141.825},{text:"a",start:141.825,end:141.895},{text:"olhar",start:141.895,end:142.265},{text:"tr\xEAs.",start:142.265,end:142.815},{text:"Augusto,",start:143.475,end:143.965},{text:"como",start:144.055,end:144.175},{text:"voc\xEA",start:144.405,end:144.705},{text:"chegou",start:144.705,end:145.105},{text:"em",start:145.255,end:145.355},{text:"Pinheiros",start:145.355,end:145.915},{text:"em",start:146.005,end:146.165},{text:"dois",start:146.165,end:146.395},{text:"minutos?",start:146.765,end:147.395},{text:"Eu",start:147.855,end:148.035},{text:"peguei",start:148.035,end:149.055},{text:"um",start:149.055,end:149.395},{text:"atalho.",start:149.395,end:150.775},{text:"S\xF3",start:152.125,end:152.135},{text:"que",start:152.195,end:152.395},{text:"tem",start:152.395,end:152.615},{text:"uma",start:152.615,end:152.815},{text:"coisa",start:152.825,end:153.195},{text:"que",start:153.235,end:153.415},{text:"ningu\xE9m",start:153.415,end:153.825},{text:"v\xEA",start:153.975,end:154.065},{text:"de",start:154.065,end:154.115},{text:"fora,",start:154.295,end:154.635},{text:"e",start:154.635,end:154.725},{text:"que",start:154.725,end:154.915},{text:"o",start:154.915,end:154.985},{text:"Augusto",start:154.985,end:155.505},{text:"percebe",start:155.505,end:155.975},{text:"na",start:156.005,end:156.145},{text:"Semana",start:156.145,end:156.585},{text:"5.",start:156.585,end:157.115},{text:"Quando",start:157.575,end:157.785},{text:"ele",start:157.785,end:157.965},{text:"chega",start:157.965,end:158.225},{text:"a",start:158.225,end:158.325},{text:"160",start:158.505,end:158.895},{text:"km",start:158.905,end:159.015},{text:"por",start:159.015,end:159.195},{text:"hora,",start:159.195,end:159.505},{text:"o",start:159.505,end:159.675},{text:"c\xE9rebro",start:159.675,end:160.015},{text:"dele",start:160.045,end:160.255},{text:"acelera",start:160.265,end:160.665},{text:"junto,",start:160.865,end:161.215},{text:"sen\xE3o",start:161.215,end:161.575},{text:"ele",start:161.575,end:161.795},{text:"bateria",start:161.795,end:162.305},{text:"em",start:162.305,end:162.445},{text:"tudo,",start:162.445,end:162.815},{text:"e",start:162.815,end:162.845},{text:"o",start:162.885,end:162.945},{text:"mundo",start:162.955,end:163.305},{text:"come\xE7a",start:163.305,end:163.695},{text:"a",start:163.735,end:163.805},{text:"ficar",start:163.805,end:163.865},{text:"devagar.",start:164.165,end:164.825},{text:"Os",start:165.275,end:165.295},{text:"carros",start:165.355,end:165.695},{text:"parecem",start:165.695,end:166.135},{text:"estar",start:166.285,end:166.455},{text:"andando",start:166.455,end:166.895},{text:"de",start:166.895,end:167.015},{text:"r\xE9,",start:167.015,end:167.285},{text:"a",start:167.285,end:167.455},{text:"chuva",start:167.455,end:167.735},{text:"cai",start:167.735,end:167.945},{text:"como",start:167.945,end:168.225},{text:"poeira,",start:168.225,end:168.755},{text:"as",start:168.905,end:168.965},{text:"pessoas",start:168.965,end:169.425},{text:"falam",start:169.425,end:169.755},{text:"como",start:169.755,end:170.015},{text:"um",start:170.015,end:170.145},{text:"\xE1udio",start:170.145,end:170.465},{text:"no",start:170.465,end:170.595},{text:"meio",start:170.595,end:170.855},{text:"da",start:170.855,end:170.985},{text:"velocidade.",start:170.985,end:171.655},{text:"O",start:172.14,end:172.49},{text:"t\xEAnis",start:172.49,end:172.82},{text:"dele",start:172.82,end:173.05},{text:"derrete",start:173.11,end:173.61},{text:"em",start:173.61,end:173.75},{text:"tr\xEAs",start:173.75,end:174.04},{text:"dias,",start:174.04,end:174.47},{text:"ele",start:174.66,end:174.68},{text:"come",start:174.68,end:174.97},{text:"12",start:174.97,end:175.33},{text:"pizzas",start:175.33,end:175.52},{text:"por",start:175.85,end:175.96},{text:"dia",start:176.11,end:176.25},{text:"e",start:176.25,end:176.32},{text:"continua",start:176.32,end:176.86},{text:"com",start:176.89,end:177.11},{text:"fome.",start:177.11,end:177.72},{text:"A",start:177.72,end:177.88},{text:"av\xF3",start:177.88,end:178.04},{text:"acha",start:178.04,end:178.37},{text:"que",start:178.37,end:178.56},{text:"\xE9",start:178.63,end:178.66},{text:"o",start:178.66,end:178.81},{text:"crescimento.",start:178.81,end:180},{text:"E",start:180.56,end:180.625},{text:"se",start:180.625,end:180.69},{text:"voc\xEA",start:180.69,end:180.95},{text:"j\xE1",start:180.95,end:181.08},{text:"est\xE1",start:181.08,end:181.31},{text:"a\xED",start:181.31,end:181.46},{text:"torcendo",start:181.59,end:182},{text:"pelo",start:182,end:182.26},{text:"Augusto,",start:182.26,end:182.85},{text:"deixa",start:182.85,end:183.1},{text:"o",start:183.19,end:183.24},{text:"seu",start:183.24,end:183.44},{text:"like,",start:183.44,end:183.82},{text:"\xE9",start:183.82,end:183.96},{text:"rapidinho,",start:183.96,end:184.74},{text:"bem",start:184.74,end:184.92},{text:"mais",start:184.92,end:185.16},{text:"r\xE1pido",start:185.16,end:185.52},{text:"do",start:185.52,end:185.58},{text:"que",start:185.72,end:185.82},{text:"ele",start:185.82,end:186},{text:"vai",start:186,end:186.18},{text:"ficar",start:186.18,end:186.48},{text:"daqui",start:186.48,end:186.78},{text:"a",start:186.78,end:186.79},{text:"pouco.",start:186.83,end:187.34},{text:"Semana",start:188.6,end:188.94},{text:"6,",start:188.94,end:189.32},{text:"320",start:189.53,end:190.12},{text:"km",start:190.12,end:190.28},{text:"por",start:190.28,end:190.52},{text:"hora,",start:190.7,end:191.04},{text:"quase",start:191.05,end:191.47},{text:"um",start:191.47,end:191.61},{text:"carro",start:191.89,end:192.04},{text:"de",start:192.15,end:192.23},{text:"F\xF3rmula",start:192.23,end:192.515},{text:"1,",start:192.515,end:192.8},{text:"e",start:192.8,end:192.87},{text:"o",start:192.87,end:192.94},{text:"Augusto",start:192.94,end:193.44},{text:"come\xE7a",start:193.44,end:193.87},{text:"a",start:193.87,end:193.94},{text:"pagar",start:193.94,end:194.3},{text:"o",start:194.3,end:194.37},{text:"pre\xE7o.",start:194.37,end:194.9},{text:"Agora,",start:195.16,end:195.57},{text:"para",start:195.57,end:195.81},{text:"ele,",start:196.08,end:196.29},{text:"o",start:196.29,end:196.37},{text:"mundo",start:196.37,end:196.78},{text:"anda",start:196.78,end:197.08},{text:"64",start:197.26,end:197.59},{text:"vezes",start:197.59,end:197.94},{text:"mais",start:197.94,end:198.19},{text:"devagar.",start:198.45,end:199.19},{text:"Uma",start:199.36,end:199.41},{text:"frase",start:199.41,end:199.76},{text:"de",start:199.76,end:199.85},{text:"3",start:199.89,end:200.06},{text:"segundos",start:200.29,end:200.65},{text:"da",start:200.69,end:200.81},{text:"Bia",start:200.81,end:201.02},{text:"demora",start:201.02,end:201.26},{text:"mais",start:201.46,end:201.72},{text:"de",start:201.72,end:201.8},{text:"3",start:201.89,end:202.04},{text:"minutos",start:202.04,end:202.3},{text:"para",start:202.65,end:202.8},{text:"terminar,",start:202.91,end:203.56},{text:"e",start:203.56,end:203.61},{text:"ele",start:203.61,end:203.77},{text:"n\xE3o",start:203.77,end:203.93},{text:"consegue",start:203.93,end:204.28},{text:"mais",start:204.42,end:204.59},{text:"conversar",start:204.59,end:205.08},{text:"com",start:205.08,end:205.21},{text:"ningu\xE9m.",start:205.23,end:205.71},{text:"Augusto,",start:206.4,end:208.3},{text:"voc\xEA",start:208.49,end:209.27},{text:"t\xE1",start:209.27,end:209.78},{text:"bem?",start:209.95,end:211.23},{text:"Ele",start:212.1,end:212.13},{text:"quer",start:212.13,end:212.39},{text:"responder,",start:212.39,end:213.11},{text:"mas",start:213.14,end:213.3},{text:"se",start:213.3,end:213.37},{text:"ele",start:213.43,end:213.62},{text:"falar",start:213.62,end:213.95},{text:"no",start:213.95,end:214.03},{text:"ritmo",start:214.2,end:214.4},{text:"dele,",start:214.4,end:214.78},{text:"ela",start:214.78,end:214.98},{text:"ouve",start:214.98,end:215.23},{text:"s\xF3",start:215.23,end:215.39},{text:"um",start:215.39,end:215.5},{text:"zumbido,",start:215.5,end:216.18},{text:"ent\xE3o",start:216.18,end:216.63},{text:"ele",start:216.63,end:216.9},{text:"espera,",start:216.9,end:217.5},{text:"e",start:217.5,end:217.6},{text:"espera,",start:217.6,end:218.4},{text:"e",start:218.44,end:218.47},{text:"espera.",start:218.69,end:219.5},{text:"E",start:219.56,end:219.695},{text:"pela",start:219.695,end:219.83},{text:"primeira",start:219.83,end:220.15},{text:"vez",start:220.15,end:220.59},{text:"na",start:220.59,end:220.7},{text:"vida,",start:220.7,end:221.1},{text:"o",start:221.1,end:221.15},{text:"garoto",start:221.15,end:221.56},{text:"que",start:221.56,end:221.76},{text:"sempre",start:221.76,end:222.1},{text:"chegava",start:222.19,end:222.62},{text:"atrasado,",start:222.62,end:223.36},{text:"descobre",start:223.36,end:223.92},{text:"que",start:223.92,end:224.11},{text:"agora",start:224.13,end:224.48},{text:"ele",start:224.48,end:224.58},{text:"chega",start:224.72,end:225.04},{text:"cedo",start:225.04,end:225.32},{text:"demais",start:225.32,end:225.73},{text:"em",start:225.73,end:225.79},{text:"tudo.",start:225.88,end:226.42},{text:"Semana",start:227.665,end:228.155},{text:"7,",start:228.275,end:228.865},{text:"640",start:228.865,end:229.985},{text:"km",start:229.985,end:230.265},{text:"por",start:230.265,end:230.275},{text:"hora,",start:230.275,end:230.415},{text:"ele",start:230.415,end:230.585},{text:"n\xE3o",start:230.585,end:230.735},{text:"consegue",start:230.955,end:231.035},{text:"mais",start:231.215,end:231.445},{text:"segurar",start:231.445,end:231.845},{text:"a",start:231.845,end:231.895},{text:"m\xE3o",start:231.895,end:232.065},{text:"da",start:232.065,end:232.175},{text:"Bia",start:232.175,end:232.335},{text:"sem",start:232.335,end:232.505},{text:"medo",start:232.505,end:232.735},{text:"de",start:232.735,end:232.845},{text:"machucar,",start:232.845,end:233.505},{text:"n\xE3o",start:233.505,end:233.695},{text:"consegue",start:233.695,end:233.955},{text:"mais",start:234.255,end:234.475},{text:"abra\xE7ar",start:234.475,end:234.915},{text:"a",start:234.915,end:235.045},{text:"av\xF3,",start:235.045,end:235.335},{text:"n\xE3o",start:235.505,end:235.535},{text:"consegue",start:235.535,end:235.995},{text:"mais",start:236.055,end:236.205},{text:"nem",start:236.435,end:236.505},{text:"dormir",start:236.545,end:236.895},{text:"direito,",start:236.895,end:237.435},{text:"porque",start:237.605,end:237.875},{text:"uma",start:237.875,end:238.065},{text:"noite",start:238.065,end:238.385},{text:"inteira,",start:238.385,end:238.945},{text:"para",start:239.055,end:239.225},{text:"ele,",start:239.225,end:239.545},{text:"dura",start:239.545,end:239.795},{text:"semanas.",start:239.795,end:240.415},{text:"E",start:241.725,end:241.92},{text:"a\xED,",start:241.92,end:242.115},{text:"chega",start:242.115,end:242.455},{text:"semana",start:242.735,end:243.195},{text:"8.",start:243.195,end:243.525},{text:"1.280",start:243.685,end:244.835},{text:"km",start:244.835,end:244.955},{text:"por",start:245.015,end:245.265},{text:"hora,",start:245.265,end:245.845},{text:"mais",start:245.845,end:246.125},{text:"r\xE1pido",start:246.135,end:246.565},{text:"que",start:246.565,end:246.775},{text:"o",start:246.775,end:246.975},{text:"som,",start:246.975,end:247.285},{text:"e",start:247.285,end:247.335},{text:"a",start:247.335,end:247.385},{text:"gente",start:247.385,end:247.665},{text:"volta",start:247.665,end:247.945},{text:"para",start:247.945,end:248.165},{text:"a",start:248.165,end:248.215},{text:"Avenida",start:248.215,end:248.605},{text:"Paulista.",start:248.745,end:249.285},{text:"O",start:249.585,end:249.745},{text:"Augusto",start:249.745,end:250.165},{text:"estava",start:250.165,end:250.405},{text:"atrasado,",start:250.675,end:251.325},{text:"de",start:251.325,end:251.435},{text:"novo,",start:251.525,end:251.895},{text:"ele",start:251.895,end:252.115},{text:"correu,",start:252.115,end:252.755},{text:"e",start:252.755,end:252.835},{text:"quando",start:253.035,end:253.185},{text:"o",start:253.185,end:253.295},{text:"corpo",start:253.295,end:253.525},{text:"dele",start:253.525,end:253.755},{text:"passou",start:253.755,end:254.105},{text:"da",start:254.105,end:254.195},{text:"velocidade",start:254.215,end:254.655},{text:"do",start:254.805,end:254.905},{text:"som,",start:254.905,end:255.265},{text:"o",start:255.265,end:255.335},{text:"ar",start:255.335,end:255.475},{text:"n\xE3o",start:255.475,end:255.595},{text:"aguentou.",start:255.615,end:256.465},{text:"O",start:256.465,end:256.625},{text:"estrondo",start:256.625,end:257.005},{text:"estourou",start:257.005,end:257.485},{text:"os",start:257.555,end:257.605},{text:"vidros",start:257.605,end:257.965},{text:"da",start:257.965,end:258.085},{text:"Avenida",start:258.085,end:258.505},{text:"inteira,",start:258.505,end:259.045},{text:"ningu\xE9m",start:259.045,end:259.405},{text:"se",start:259.405,end:259.575},{text:"machucou",start:259.585,end:260.065},{text:"feio,",start:260.175,end:260.465},{text:"mas",start:260.465,end:260.655},{text:"agora",start:260.655,end:261.005},{text:"o",start:261.005,end:261.065},{text:"Brasil",start:261.065,end:261.475},{text:"inteiro",start:261.475,end:261.955},{text:"sabe",start:261.955,end:262.225},{text:"que",start:262.225,end:262.425},{text:"o",start:262.425,end:262.475},{text:"Augusto",start:262.475,end:262.945},{text:"existe.",start:263.215,end:263.625},{text:"Carro",start:263.785,end:263.915},{text:"de",start:263.915,end:264.035},{text:"televis\xE3o",start:264.035,end:264.545},{text:"na",start:264.545,end:264.715},{text:"porta",start:264.715,end:264.975},{text:"de",start:264.975,end:265.055},{text:"casa,",start:265.115,end:265.445},{text:"cientista",start:265.445,end:265.975},{text:"ligando,",start:265.975,end:266.495},{text:"gente",start:266.495,end:266.705},{text:"do",start:266.705,end:266.905},{text:"governo",start:267.075,end:267.155},{text:"querendo",start:267.335,end:267.795},{text:"conversar,",start:267.795,end:268.575},{text:"e",start:268.575,end:268.655},{text:"a",start:268.655,end:268.705},{text:"Bia,",start:268.815,end:269.145},{text:"parada",start:269.145,end:269.565},{text:"na",start:269.565,end:269.635},{text:"porta",start:269.655,end:270.055},{text:"da",start:270.055,end:270.135},{text:"pizzaria,",start:270.375,end:270.895},{text:"com",start:270.895,end:271.035},{text:"os",start:271.165,end:271.175},{text:"olhos",start:271.175,end:271.465},{text:"cheios",start:271.465,end:271.805},{text:"de",start:271.805,end:271.915},{text:"\xE1gua.",start:271.915,end:272.345},{text:"Voc\xEA",start:273.045,end:273.195},{text:"t\xE1",start:273.195,end:273.345},{text:"sumindo",start:273.345,end:273.745},{text:"Augusto,",start:273.975,end:274.575},{text:"voc\xEA",start:274.575,end:274.885},{text:"t\xE1",start:274.885,end:274.975},{text:"aqui",start:275.145,end:275.345},{text:"do",start:275.345,end:275.485},{text:"meu",start:275.575,end:275.725},{text:"lado,",start:275.725,end:276.165},{text:"e",start:276.165,end:276.335},{text:"eu",start:276.335,end:276.405},{text:"n\xE3o",start:276.405,end:276.635},{text:"consigo",start:276.635,end:277.185},{text:"mais",start:277.185,end:277.495},{text:"te",start:277.495,end:277.645},{text:"alcan\xE7ar.",start:277.645,end:278.405},{text:"E",start:279.57,end:279.69},{text:"aqui",start:279.69,end:279.81},{text:"eu",start:279.81,end:279.93},{text:"quero",start:279.93,end:280.16},{text:"saber",start:280.28,end:280.37},{text:"de",start:280.6,end:280.65},{text:"voc\xEA,",start:280.65,end:281.01},{text:"se",start:281.01,end:281.13},{text:"a",start:281.13,end:281.19},{text:"sua",start:281.19,end:281.35},{text:"velocidade",start:281.45,end:281.97},{text:"dobrasse",start:281.97,end:282.45},{text:"toda",start:282.45,end:282.63},{text:"semana,",start:282.96,end:283.23},{text:"o",start:283.23,end:283.28},{text:"que",start:283.28,end:283.44},{text:"voc\xEA",start:283.44,end:283.66},{text:"faria",start:283.66,end:283.92},{text:"primeiro?",start:283.92,end:284.55},{text:"Escreve",start:284.63,end:284.98},{text:"a\xED",start:284.98,end:285.1},{text:"nos",start:285.1,end:285.2},{text:"coment\xE1rios,",start:285.33,end:286.1},{text:"e",start:286.1,end:286.16},{text:"depois",start:286.16,end:286.54},{text:"volta,",start:286.54,end:286.97},{text:"porque",start:286.97,end:287.35},{text:"agora",start:287.35,end:287.62},{text:"a",start:287.62,end:287.71},{text:"hist\xF3ria",start:288,end:288.15},{text:"fica",start:288.26,end:288.47},{text:"s\xE9ria.",start:288.47,end:289.07},{text:"O",start:290.07,end:290.23},{text:"Augusto",start:290.23,end:290.53},{text:"senta",start:290.53,end:290.77},{text:"no",start:290.83,end:290.93},{text:"quarto",start:291.16,end:291.29},{text:"e",start:291.29,end:291.35},{text:"faz",start:291.35,end:291.5},{text:"a",start:291.56,end:291.59},{text:"conta",start:291.59,end:291.86},{text:"que",start:291.87,end:292.06},{text:"ele",start:292.06,end:292.15},{text:"estava",start:292.33,end:292.59},{text:"evitando.",start:292.59,end:293.24},{text:"Semana",start:293.47,end:293.83},{text:"10,",start:293.83,end:294.53},{text:"mais",start:294.53,end:294.88},{text:"de",start:294.88,end:295.05},{text:"5",start:295.05,end:295.31},{text:"mil",start:295.31,end:295.57},{text:"km",start:295.57,end:295.74},{text:"por",start:295.74,end:295.91},{text:"hora,",start:296,end:296.5},{text:"e",start:296.58,end:296.6},{text:"um",start:296.76,end:296.8},{text:"segundo",start:296.8,end:297.3},{text:"da",start:297.3,end:297.44},{text:"vida",start:297.44,end:297.72},{text:"das",start:297.72,end:297.92},{text:"pessoas",start:297.92,end:298.39},{text:"vira",start:298.53,end:298.71},{text:"17",start:298.71,end:299.14},{text:"minutos",start:299.14,end:299.59},{text:"da",start:299.64,end:299.77},{text:"vida",start:299.77,end:300.06},{text:"dele.",start:300.06,end:300.63},{text:"Semana",start:300.79,end:301.03},{text:"13,",start:301.03,end:301.57},{text:"40",start:301.72,end:301.98},{text:"mil",start:301.98,end:302.18},{text:"km",start:302.18,end:302.31},{text:"por",start:302.31,end:302.47},{text:"hora,",start:302.57,end:302.91},{text:"ele",start:302.91,end:303.1},{text:"vai",start:303.1,end:303.23},{text:"estar",start:303.32,end:303.65},{text:"r\xE1pido",start:303.65,end:303.75},{text:"bastante",start:304.09,end:304.61},{text:"pra",start:304.61,end:304.81},{text:"escapar",start:304.81,end:305.28},{text:"da",start:305.28,end:305.41},{text:"gravidade",start:305.41,end:306.02},{text:"da",start:306.02,end:306.15},{text:"Terra,",start:306.15,end:306.64},{text:"e",start:306.64,end:306.83},{text:"um",start:306.83,end:306.88},{text:"minuto",start:306.88,end:307.3},{text:"pra",start:307.3,end:307.49},{text:"todo",start:307.5,end:307.79},{text:"mundo",start:307.79,end:308.12},{text:"vai",start:308.16,end:308.35},{text:"durar",start:308.35,end:308.7},{text:"quase",start:308.7,end:309.05},{text:"seis",start:309.05,end:309.27},{text:"dias",start:309.36,end:309.6},{text:"pra",start:309.6,end:309.79},{text:"ele,",start:309.81,end:310.23},{text:"e",start:310.23,end:310.38},{text:"se",start:310.38,end:310.42},{text:"continuar",start:310.42,end:311.03},{text:"dobrando,",start:311.03,end:311.73},{text:"em",start:311.73,end:311.74},{text:"uns",start:311.89,end:312.09},{text:"seis",start:312.09,end:312.38},{text:"meses",start:312.38,end:312.68},{text:"ele",start:312.7,end:312.96},{text:"chega",start:312.96,end:313.13},{text:"perto",start:313.42,end:313.71},{text:"da",start:313.71,end:313.85},{text:"velocidade",start:313.85,end:314.52},{text:"da",start:314.63,end:314.71},{text:"luz.",start:314.77,end:315.03},{text:"E",start:315.11,end:315.12},{text:"a",start:315.12,end:315.13},{text:"av\xF3",start:315.19,end:315.43},{text:"dele,",start:315.43,end:315.89},{text:"a",start:315.89,end:315.99},{text:"Bia,",start:316.07,end:316.39},{text:"o",start:316.39,end:316.46},{text:"seu",start:316.46,end:316.71},{text:"Jorge,",start:316.71,end:317.27},{text:"o",start:317.29,end:317.35},{text:"mundo",start:317.35,end:317.75},{text:"inteiro,",start:317.75,end:318.47},{text:"v\xE3o",start:318.48,end:318.56},{text:"virar",start:318.74,end:319.11},{text:"est\xE1tuas",start:319.11,end:319.75},{text:"pra",start:319.75,end:319.99},{text:"sempre.",start:319.99,end:320.75},{text:"Ele",start:321.72,end:321.75},{text:"tenta",start:321.75,end:322.07},{text:"de",start:322.07,end:322.2},{text:"tudo",start:322.2,end:322.39},{text:"pra",start:322.64,end:322.65},{text:"parar,",start:322.65,end:323.11},{text:"para",start:323.11,end:323.35},{text:"de",start:323.36,end:323.41},{text:"correr,",start:323.5,end:324.02},{text:"fica",start:324.02,end:324.28},{text:"deitado",start:324.28,end:324.68},{text:"uma",start:324.73,end:324.81},{text:"semana",start:325.01,end:325.31},{text:"inteira,",start:325.31,end:325.99},{text:"e",start:326,end:326.07},{text:"no",start:326.07,end:326.21},{text:"domingo",start:326.21,end:326.64},{text:"\xE0",start:326.64,end:326.78},{text:"meia-noite",start:326.78,end:327.47},{text:"a",start:327.47,end:327.54},{text:"velocidade",start:327.54,end:327.99},{text:"dobra",start:328.31,end:328.61},{text:"do",start:328.61,end:328.75},{text:"mesmo",start:328.75,end:329.11},{text:"jeito.",start:329.11,end:329.76},{text:"Semana",start:330.965,end:331.265},{text:"13,",start:331.265,end:331.875},{text:"um",start:331.895,end:332.025},{text:"telefone",start:332.025,end:332.635},{text:"toca",start:332.635,end:332.885},{text:"na",start:333.065,end:333.085},{text:"pizzaria,",start:333.085,end:333.885},{text:"\xE9",start:333.885,end:333.945},{text:"o",start:333.945,end:334.015},{text:"hospital,",start:334.265,end:334.745},{text:"a",start:334.775,end:334.855},{text:"dona",start:334.855,end:335.165},{text:"Lurdes",start:335.165,end:335.695},{text:"passou",start:335.695,end:336.155},{text:"mal.",start:336.155,end:336.445},{text:"E",start:336.765,end:336.8},{text:"o",start:336.8,end:336.835},{text:"Augusto",start:336.905,end:337.235},{text:"corre,",start:337.235,end:337.625},{text:"mais",start:337.825,end:337.845},{text:"r\xE1pido",start:337.845,end:338.185},{text:"do",start:338.235,end:338.295},{text:"que",start:338.295,end:338.465},{text:"qualquer",start:338.465,end:338.815},{text:"coisa",start:339.005,end:339.195},{text:"que",start:339.195,end:339.345},{text:"j\xE1",start:339.445,end:339.475},{text:"existiu",start:339.475,end:339.855},{text:"nesse",start:339.855,end:340.205},{text:"planeta.",start:340.205,end:340.825},{text:"Atravessa",start:340.905,end:341.315},{text:"a",start:341.315,end:341.365},{text:"cidade",start:341.365,end:341.635},{text:"antes",start:341.915,end:341.975},{text:"do",start:341.975,end:342.085},{text:"telefone",start:342.085,end:342.525},{text:"e",start:342.525,end:342.575},{text:"voltar",start:342.575,end:342.895},{text:"pro",start:342.895,end:343.085},{text:"gancho,",start:343.085,end:343.585},{text:"e",start:343.585,end:343.635},{text:"entra",start:343.635,end:343.895},{text:"no",start:343.945,end:344.055},{text:"quarto",start:344.275,end:344.425},{text:"do",start:344.535,end:344.545},{text:"hospital.",start:344.545,end:345.225},{text:"Pela",start:345.295,end:345.515},{text:"primeira",start:345.515,end:345.875},{text:"vez",start:346.305,end:346.335},{text:"na",start:346.335,end:346.485},{text:"vida,",start:346.485,end:346.935},{text:"o",start:346.935,end:347.005},{text:"Augusto",start:347.005,end:347.525},{text:"chegou",start:347.525,end:347.975},{text:"a",start:347.975,end:348.035},{text:"tempo.",start:348.035,end:348.705},{text:"O",start:350.03,end:350.19},{text:"m\xE9dico",start:350.19,end:350.49},{text:"diz",start:350.49,end:350.68},{text:"que",start:350.68,end:350.87},{text:"ela",start:350.87,end:350.89},{text:"tem",start:351.12,end:351.29},{text:"pouco",start:351.29,end:351.62},{text:"tempo,",start:351.62,end:352.08},{text:"talvez",start:352.08,end:352.48},{text:"alguns",start:352.48,end:352.84},{text:"minutos,",start:352.84,end:353.51},{text:"s\xF3",start:353.51,end:353.59},{text:"que",start:353.74,end:353.91},{text:"pro",start:353.91,end:354.15},{text:"Augusto,",start:354.15,end:354.86},{text:"um",start:354.86,end:355.02},{text:"minuto",start:355.02,end:355.48},{text:"agora",start:355.5,end:355.89},{text:"dura",start:355.89,end:356.21},{text:"quase",start:356.21,end:356.49},{text:"seis",start:356.78,end:356.93},{text:"dias.",start:356.93,end:357.44},{text:"Ent\xE3o",start:358.595,end:358.885},{text:"ele",start:358.885,end:359.085},{text:"senta",start:359.205,end:359.605},{text:"do",start:359.635,end:359.785},{text:"lado",start:359.785,end:360.145},{text:"da",start:360.145,end:360.275},{text:"cama,",start:360.375,end:360.865},{text:"e",start:360.865,end:360.935},{text:"fica.",start:360.945,end:361.525},{text:"Ele",start:362.695,end:362.755},{text:"olha",start:362.755,end:363.055},{text:"cada",start:363.055,end:363.185},{text:"ruga",start:363.295,end:363.645},{text:"do",start:363.645,end:363.795},{text:"rosto",start:363.795,end:364.165},{text:"dela,",start:364.165,end:364.605},{text:"decora",start:364.795,end:365.055},{text:"cada",start:365.055,end:365.345},{text:"fio",start:365.355,end:365.575},{text:"de",start:365.575,end:365.705},{text:"cabelo",start:365.945,end:366.135},{text:"branco,",start:366.245,end:366.855},{text:"segura",start:366.855,end:367.315},{text:"a",start:367.315,end:367.385},{text:"m\xE3o",start:367.385,end:367.615},{text:"dela",start:367.755,end:367.925},{text:"t\xE3o",start:367.925,end:368.155},{text:"devagar",start:368.155,end:368.695},{text:"que",start:368.695,end:368.925},{text:"nem",start:368.925,end:369.045},{text:"ela",start:369.285,end:369.385},{text:"sente.",start:369.385,end:369.815},{text:"E",start:369.875,end:370.15},{text:"escreve,",start:370.15,end:370.425},{text:"ele",start:370.425,end:370.625},{text:"escreve",start:370.625,end:371.065},{text:"uma",start:371.065,end:371.255},{text:"carta",start:371.255,end:371.575},{text:"inteira,",start:371.575,end:372.135},{text:"tudo",start:372.135,end:372.385},{text:"o",start:372.385,end:372.415},{text:"que",start:372.505,end:372.625},{text:"nunca",start:372.625,end:372.885},{text:"teve",start:372.885,end:373.265},{text:"tempo",start:373.265,end:373.345},{text:"de",start:373.525,end:373.645},{text:"dizer.",start:373.645,end:374.245},{text:"O",start:374.245,end:374.415},{text:"av\xF4,",start:374.415,end:374.675},{text:"a",start:374.675,end:374.745},{text:"chuva,",start:374.745,end:375.195},{text:"a",start:375.195,end:375.345},{text:"bicicleta,",start:375.345,end:376.095},{text:"o",start:376.095,end:376.105},{text:"arrependimento,",start:376.195,end:377.325},{text:"a",start:377.325,end:377.375},{text:"pizza",start:377.425,end:377.765},{text:"que",start:377.765,end:377.985},{text:"ela",start:377.985,end:378.205},{text:"fazia",start:378.205,end:378.565},{text:"no",start:378.565,end:378.695},{text:"domingo,",start:378.705,end:379.455},{text:"dias",start:379.475,end:379.825},{text:"e",start:379.825,end:379.915},{text:"dias",start:379.915,end:380.265},{text:"escrevendo.",start:380.285,end:381.295},{text:"Enquanto",start:381.375,end:381.745},{text:"l\xE1",start:381.745,end:381.855},{text:"fora,",start:381.855,end:382.175},{text:"o",start:382.185,end:382.245},{text:"rel\xF3gio",start:382.375,end:382.635},{text:"do",start:382.635,end:382.725},{text:"hospital",start:382.735,end:383.135},{text:"ainda",start:383.235,end:383.365},{text:"nem",start:383.555,end:383.675},{text:"mudou",start:383.675,end:383.895},{text:"de",start:383.985,end:384.065},{text:"minuto.",start:384.065,end:384.415},{text:"No",start:385.665,end:385.675},{text:"fim,",start:385.735,end:386.095},{text:"ele",start:386.095,end:386.225},{text:"coloca",start:386.345,end:386.765},{text:"a",start:386.775,end:386.835},{text:"carta",start:386.835,end:387.205},{text:"na",start:387.205,end:387.355},{text:"m\xE3o",start:387.355,end:387.575},{text:"dela,",start:387.575,end:388.025},{text:"e",start:388.025,end:388.095},{text:"ela",start:388.095,end:388.315},{text:"consegue",start:388.315,end:388.665},{text:"ler",start:389.025,end:389.135},{text:"s\xF3",start:389.135,end:389.285},{text:"a",start:389.285,end:389.355},{text:"primeira",start:389.355,end:389.955},{text:"linha.",start:389.955,end:390.655},{text:"V\xF3,",start:391.435,end:391.815},{text:"dessa",start:391.815,end:392.165},{text:"vez",start:392.445,end:392.765},{text:"eu",start:392.765,end:393.005},{text:"cheguei",start:393.005,end:393.815},{text:"a",start:393.815,end:393.945},{text:"tempo.",start:393.945,end:394.955},{text:"Ela",start:396.918,end:396.948},{text:"n\xE3o",start:396.948,end:397.168},{text:"consegue",start:397.168,end:397.778},{text:"mais",start:397.778,end:398.078},{text:"falar,",start:398.078,end:398.528},{text:"mas",start:398.688,end:398.808},{text:"mexe",start:398.808,end:399.148},{text:"a",start:399.178,end:399.268},{text:"boca",start:399.268,end:399.638},{text:"devagar.",start:399.638,end:400.328},{text:"T\xE3o",start:400.388,end:400.568},{text:"devagar",start:400.568,end:401.148},{text:"que,",start:401.148,end:401.588},{text:"pro",start:401.588,end:401.778},{text:"Augusto,",start:401.778,end:402.368},{text:"cada",start:402.368,end:402.708},{text:"palavra",start:402.708,end:403.298},{text:"leva",start:403.298,end:403.638},{text:"horas",start:403.638,end:403.708},{text:"pra",start:404.148,end:404.308},{text:"se",start:404.308,end:404.458},{text:"formar.",start:404.458,end:405.068},{text:"E",start:405.128,end:405.263},{text:"ele",start:405.263,end:405.398},{text:"espera.",start:405.398,end:406.148},{text:"Ele",start:406.368,end:406.428},{text:"espera",start:406.428,end:406.958},{text:"todas",start:406.958,end:407.298},{text:"elas.",start:407.398,end:407.858},{text:"Devagar,",start:408.928,end:409.858},{text:"meu",start:409.958,end:410.248},{text:"filho.",start:410.248,end:411.308},{text:"O",start:411.308,end:411.508},{text:"que",start:411.508,end:411.848},{text:"\xE9",start:411.848,end:411.968},{text:"bom,",start:411.968,end:412.658},{text:"espera.",start:412.658,end:413.908},{text:"A",start:416.063,end:416.083},{text:"dona",start:416.213,end:416.373},{text:"Lurdes",start:416.373,end:416.863},{text:"partiu",start:416.863,end:417.293},{text:"naquela",start:417.293,end:417.683},{text:"noite,",start:417.973,end:418.473},{text:"em",start:418.473,end:418.713},{text:"paz,",start:418.763,end:419.173},{text:"segurando",start:419.173,end:419.963},{text:"uma",start:419.963,end:420.223},{text:"carta",start:420.223,end:420.583},{text:"e",start:420.703,end:420.783},{text:"com",start:420.783,end:421.073},{text:"um",start:421.073,end:421.263},{text:"neto",start:421.263,end:421.643},{text:"do",start:421.643,end:421.833},{text:"lado.",start:421.833,end:422.533},{text:"E",start:424.653,end:424.733},{text:"a\xED",start:424.733,end:424.813},{text:"aconteceu",start:424.813,end:425.453},{text:"a",start:425.453,end:425.513},{text:"coisa",start:425.523,end:425.873},{text:"mais",start:425.873,end:426.153},{text:"estranha",start:426.153,end:426.713},{text:"dessa",start:426.713,end:427.063},{text:"hist\xF3ria",start:427.063,end:427.633},{text:"toda.",start:427.633,end:428.023},{text:"No",start:428.023,end:428.383},{text:"domingo",start:428.383,end:428.773},{text:"seguinte,",start:428.773,end:429.433},{text:"\xE0",start:429.433,end:429.493},{text:"meia-noite,",start:429.493,end:430.273},{text:"a",start:430.273,end:430.333},{text:"velocidade",start:430.333,end:430.993},{text:"do",start:430.993,end:431.123},{text:"Augusto",start:431.123,end:431.563},{text:"n\xE3o",start:431.563,end:431.643},{text:"dobrou.",start:431.993,end:432.453},{text:"Ela",start:432.663,end:432.733},{text:"voltou.",start:432.733,end:433.543},{text:"Cinco",start:433.753,end:433.923},{text:"quil\xF4metros",start:433.923,end:434.693},{text:"por",start:434.793,end:434.943},{text:"hora,",start:434.943,end:435.333},{text:"igual",start:435.523,end:435.733},{text:"a",start:435.733,end:435.803},{text:"todo",start:435.803,end:436.093},{text:"mundo.",start:436.093,end:436.743},{text:"Ningu\xE9m",start:436.793,end:437.123},{text:"nunca",start:437.123,end:437.393},{text:"explicou",start:437.393,end:437.823},{text:"por",start:437.853,end:438.103},{text:"qu\xEA.",start:438.103,end:438.353},{text:"Os",start:438.353,end:438.563},{text:"cientistas",start:438.563,end:439.133},{text:"foram",start:439.133,end:439.443},{text:"embora,",start:439.483,end:439.973},{text:"a",start:439.973,end:440.033},{text:"televis\xE3o",start:440.033,end:440.613},{text:"esqueceu.",start:440.613,end:441.163},{text:"E",start:441.213,end:441.258},{text:"o",start:441.258,end:441.303},{text:"Augusto",start:441.363,end:441.813},{text:"acha",start:441.813,end:442.113},{text:"que",start:442.113,end:442.293},{text:"sabe",start:442.393,end:442.633},{text:"a",start:442.633,end:442.703},{text:"resposta.",start:442.703,end:443.563},{text:"Ele",start:443.753,end:443.763},{text:"acha",start:443.763,end:444.033},{text:"que",start:444.033,end:444.223},{text:"a",start:444.233,end:444.263},{text:"velocidade",start:444.323,end:444.973},{text:"veio",start:444.973,end:445.173},{text:"pra",start:445.173,end:445.333},{text:"ele",start:445.523,end:445.643},{text:"conseguir",start:445.643,end:446.233},{text:"chegar",start:446.253,end:446.653},{text:"a",start:446.663,end:446.723},{text:"tempo",start:446.723,end:446.943},{text:"uma",start:447.053,end:447.113},{text:"vez",start:447.373,end:447.463},{text:"na",start:447.463,end:447.583},{text:"vida.",start:447.603,end:447.963},{text:"E",start:448.013,end:448.223},{text:"quando",start:448.223,end:448.433},{text:"ele",start:448.433,end:448.623},{text:"chegou,",start:448.623,end:449.093},{text:"ela",start:449.193,end:449.373},{text:"n\xE3o",start:449.373,end:449.573},{text:"precisava",start:449.573,end:450.183},{text:"mais",start:450.183,end:450.453},{text:"existir.",start:450.453,end:451.203},{text:"Hoje,",start:452.293,end:452.473},{text:"o",start:452.473,end:452.533},{text:"Augusto",start:452.533,end:452.973},{text:"voltou",start:452.973,end:453.343},{text:"a",start:453.343,end:453.403},{text:"entregar",start:453.403,end:453.823},{text:"pizza",start:454.063,end:454.233},{text:"de",start:454.233,end:454.353},{text:"bicicleta.",start:454.353,end:455.183},{text:"Chega",start:455.343,end:455.453},{text:"atrasado",start:455.453,end:455.873},{text:"de",start:455.883,end:455.993},{text:"vez",start:455.993,end:456.153},{text:"em",start:456.153,end:456.263},{text:"quando.",start:456.263,end:456.783},{text:"E",start:456.833,end:456.868},{text:"o",start:456.868,end:456.903},{text:"seu",start:456.983,end:457.093},{text:"Jorge",start:457.093,end:457.413},{text:"reclama.",start:457.413,end:458.083},{text:"Atrasado",start:458.543,end:459.023},{text:"de",start:459.023,end:459.183},{text:"novo,",start:459.183,end:459.663},{text:"moleque.",start:459.663,end:460.483},{text:"Ontem",start:460.673,end:460.813},{text:"voc\xEA",start:460.813,end:461.083},{text:"quebrava",start:461.083,end:461.613},{text:"a",start:461.613,end:461.713},{text:"barreira",start:461.713,end:462.153},{text:"do",start:462.153,end:462.333},{text:"som.",start:462.443,end:462.803},{text:"Mas",start:463.593,end:463.603},{text:"agora,",start:463.603,end:464.053},{text:"toda",start:464.063,end:464.313},{text:"vez",start:464.323,end:464.483},{text:"que",start:464.523,end:464.723},{text:"ele",start:464.723,end:464.923},{text:"termina",start:464.923,end:465.383},{text:"o",start:465.383,end:465.443},{text:"turno,",start:465.443,end:465.963},{text:"ele",start:465.963,end:466.103},{text:"n\xE3o",start:466.153,end:466.283},{text:"sai",start:466.283,end:466.443},{text:"correndo.",start:466.443,end:466.953},{text:"Ele",start:467.273,end:467.303},{text:"espera",start:467.303,end:467.753},{text:"a",start:467.753,end:467.843},{text:"Bia",start:467.843,end:468.033},{text:"fechar",start:468.033,end:468.473},{text:"o",start:468.473,end:468.543},{text:"caixa",start:468.543,end:468.803},{text:"e",start:468.803,end:469.043},{text:"os",start:469.043,end:469.153},{text:"dois",start:469.153,end:469.413},{text:"v\xE3o",start:469.413,end:469.603},{text:"pra",start:469.603,end:469.783},{text:"casa",start:469.833,end:470.053},{text:"a",start:470.053,end:470.113},{text:"p\xE9.",start:470.113,end:470.443},{text:"Devagar.",start:470.673,end:471.153},{text:"A",start:471.863,end:471.883},{text:"gente",start:472.003,end:472.293},{text:"podia",start:472.293,end:472.703},{text:"ir",start:472.703,end:472.863},{text:"mais",start:472.863,end:473.193},{text:"r\xE1pido,",start:473.193,end:473.853},{text:"sabia?",start:473.853,end:474.563},{text:"Podia.",start:475.113,end:476.043},{text:"Mas",start:476.273,end:476.373},{text:"o",start:476.373,end:476.473},{text:"que",start:476.473,end:476.753},{text:"\xE9",start:476.773,end:476.873},{text:"bom,",start:476.873,end:477.363},{text:"espera.",start:477.363,end:478.273},{text:"E",start:479.883,end:479.893},{text:"\xE9",start:479.893,end:480.033},{text:"aqui",start:480.033,end:480.203},{text:"que",start:480.203,end:480.393},{text:"mora",start:480.393,end:480.643},{text:"a",start:480.643,end:480.703},{text:"virada",start:480.703,end:481.083},{text:"dessa",start:481.083,end:481.393},{text:"hist\xF3ria.",start:481.393,end:482.133},{text:"A",start:482.133,end:482.333},{text:"gente",start:482.333,end:482.463},{text:"passa",start:482.463,end:482.743},{text:"a",start:482.743,end:482.783},{text:"vida",start:482.793,end:483.023},{text:"inteira",start:483.023,end:483.423},{text:"querendo",start:483.423,end:483.803},{text:"ser",start:483.873,end:483.963},{text:"mais",start:484.093,end:484.283},{text:"r\xE1pido,",start:484.283,end:484.793},{text:"chegar",start:484.793,end:485.273},{text:"antes,",start:485.273,end:485.843},{text:"fazer",start:485.953,end:486.243},{text:"mais.",start:486.243,end:486.593},{text:"E",start:486.643,end:486.823},{text:"quase",start:486.823,end:487.003},{text:"sempre",start:487.003,end:487.413},{text:"chega",start:487.413,end:487.723},{text:"atrasado",start:487.823,end:488.253},{text:"justamente",start:488.563,end:488.973},{text:"no",start:488.973,end:489.103},{text:"que",start:489.103,end:489.293},{text:"mais",start:489.343,end:489.573},{text:"importa.",start:489.573,end:490.353},{text:"Tem",start:490.353,end:490.553},{text:"algu\xE9m",start:490.553,end:490.813},{text:"na",start:490.813,end:490.913},{text:"sua",start:490.913,end:491.053},{text:"vida",start:491.053,end:491.263},{text:"que",start:491.273,end:491.423},{text:"est\xE1",start:491.423,end:491.633},{text:"esperando",start:491.633,end:492.013},{text:"voc\xEA",start:492.103,end:492.123},{text:"chegar",start:492.323,end:492.623},{text:"faz",start:492.623,end:492.773},{text:"tempo?",start:492.773,end:493.273},{text:"Talvez",start:493.443,end:493.613},{text:"voc\xEA",start:493.613,end:493.843},{text:"n\xE3o",start:493.843,end:493.973},{text:"precise",start:494.033,end:494.403},{text:"de",start:494.503,end:494.523},{text:"superpoder",start:494.523,end:494.963},{text:"nenhum,",start:495.233,end:495.593},{text:"talvez",start:495.593,end:495.943},{text:"s\xF3",start:495.943,end:496.053},{text:"precise",start:496.053,end:496.463},{text:"sair",start:496.463,end:496.643},{text:"um",start:496.643,end:496.733},{text:"pouco",start:497.083,end:497.093},{text:"mais",start:497.093,end:497.323},{text:"cedo.",start:497.323,end:497.793},{text:"Me",start:497.793,end:497.993},{text:"conta",start:497.993,end:498.153},{text:"aqui",start:498.153,end:498.363},{text:"nos",start:498.363,end:498.503},{text:"coment\xE1rios.",start:498.553,end:499.273},{text:"Se",start:499.273,end:499.473},{text:"voc\xEA",start:499.473,end:499.703},{text:"tivesse",start:499.703,end:500.213},{text:"seis",start:500.213,end:500.403},{text:"dias",start:500.503,end:500.793},{text:"dentro",start:500.793,end:500.943},{text:"de",start:501.233,end:501.373},{text:"um",start:501.373,end:501.513},{text:"minuto,",start:501.513,end:502.093},{text:"com",start:502.093,end:502.253},{text:"quem",start:502.253,end:502.463},{text:"voc\xEA",start:502.463,end:502.643},{text:"passaria?",start:502.643,end:503.273},{text:"Escreve",start:503.403,end:503.733},{text:"s\xF3",start:503.733,end:503.863},{text:"o",start:503.863,end:503.923},{text:"nome,",start:503.923,end:504.323},{text:"eu",start:504.323,end:504.403},{text:"leio",start:504.503,end:504.713},{text:"todos.",start:504.713,end:505.353},{text:"E",start:505.403,end:505.468},{text:"se",start:505.468,end:505.533},{text:"essa",start:505.553,end:505.783},{text:"hist\xF3ria",start:505.783,end:506.293},{text:"mexeu",start:506.293,end:506.603},{text:"com",start:506.603,end:506.793},{text:"voc\xEA,",start:506.793,end:507.123},{text:"se",start:507.123,end:507.323},{text:"inscreve",start:507.323,end:507.763},{text:"e",start:507.803,end:507.843},{text:"ativa",start:507.843,end:508.153},{text:"o",start:508.153,end:508.213},{text:"sininho.",start:508.213,end:508.753},{text:"E",start:508.803,end:508.928},{text:"manda",start:508.928,end:509.053},{text:"esse",start:509.053,end:509.253},{text:"v\xEDdeo",start:509.253,end:509.423},{text:"pra",start:509.513,end:509.653},{text:"essa",start:509.653,end:509.833},{text:"pessoa",start:509.873,end:510.153},{text:"que",start:510.153,end:510.303},{text:"voc\xEA",start:510.303,end:510.423},{text:"escreveu",start:510.713,end:510.903},{text:"a\xED.",start:510.913,end:511.173},{text:"Sem",start:511.393,end:511.473},{text:"pressa.",start:511.473,end:512.273},{text:"O",start:512.373,end:512.393},{text:"que",start:512.513,end:512.643},{text:"\xE9",start:512.643,end:512.723},{text:"bom,",start:512.723,end:513.133},{text:"espera.",start:513.133,end:513.913}];var Vx=La.total,Wx=La.segs;function yc(i,t){for(let e of La.falas){if(e.quem!==i||t<e.start-.05||t>e.end+.05)continue;let n=(t-e.start)*30,s=Math.floor(n),r=n-s,o=e.boca[Math.max(0,Math.min(e.boca.length-1,s))]||0,a=e.boca[Math.max(0,Math.min(e.boca.length-1,s+1))]||0,l=e.round[Math.max(0,Math.min(e.round.length-1,Math.round(n)))]||0;return{open:o+(a-o)*r,round:l}}return{open:0,round:0}}var ye=i=>Dh[i].start;var Uh=null,Fg=()=>Uh||(Uh=Ht(128,128,i=>{let t=i.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.5,"rgba(255,255,255,.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,128,128)}));function dn(i,t,e=1,n=!0){let s=new Ci(new li({map:Fg(),color:i,transparent:!0,opacity:e,depthWrite:!1,blending:n?Si:Zi,fog:!1}));return s.scale.setScalar(t),s}function Is(i,t,e={}){let n=e.n||600,s=Pe(e.seed||7),r=new Ue;r.setAttribute("position",new ee([0,.5,0,-.45,-.4,0,.5,-.3,0],3)),r.computeVertexNormals();let o=new Xt({color:e.cor||"#D8F0FF",transparent:!0,opacity:.9,side:_e,depthWrite:!1}),a=new gr(r,o,n);a.frustumCulled=!1,i.add(a);let l=[];for(let u=0;u<n;u++){let m=t[u%t.length],x=new R(...m.n).cross(new R(0,1,0)).normalize();x.lengthSq()<.1&&x.set(1,0,0);let g=new R(...m.p).addScaledVector(x,(s()-.5)*m.w).add(new R(0,(s()-.5)*m.h,0)),p=new R(...m.n).multiplyScalar((e.v||9)*(.4+s())).add(new R((s()-.5)*4,s()*3,(s()-.5)*4));l.push({p:g,v:p,s:(e.size||.25)*(.4+s()),ax:new R(s()-.5,s()-.5,s()-.5).normalize(),sp:4+s()*10,d:s()*(e.spread||.25)})}let c=new le,d=new $n,h=new R,f=new R;return a.count=0,u=>{if(u<0){a.count=0;return}a.count=n;for(let m=0;m<n;m++){let x=l[m],g=Math.max(0,u-x.d);f.copy(x.p).addScaledVector(x.v,g),f.y-=4.9*g*g,f.y<.02&&(f.y=.02),d.setFromAxisAngle(x.ax,g*x.sp),h.setScalar(g>0?x.s:0),c.compose(f,d,h),a.setMatrixAt(m,c)}a.instanceMatrix.needsUpdate=!0,o.opacity=.9*(1-yt(e.fade||6,(e.fade||6)+1.5,u))}}function io(i,t,e={}){let n=new nt;n.position.set(...t),i.add(n);let s=new it(new he(1,48,24),new Xt({color:"#FFFFFF",transparent:!0,opacity:.25,depthWrite:!1,side:_e,blending:Si}));n.add(s);let r=Ht(256,256,a=>{let l=a.createRadialGradient(128,128,90,128,128,128);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.6,"rgba(255,255,255,.9)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,256,256)}),o=new it(new Dt(2,2),new Xt({map:r,transparent:!0,depthWrite:!1,opacity:.8}));return o.rotation.x=-Math.PI/2,o.position.y=.05,n.add(o),a=>{let l=a>0&&a<(e.dur||1.6);if(n.visible=l,!l)return;let c=(e.r||60)*Math.pow(a/(e.dur||1.6),.6);s.scale.setScalar(c),o.scale.setScalar(c);let d=1-a/(e.dur||1.6);s.material.opacity=.28*d,o.material.opacity=.85*d}}function so(i,t={}){let e=Ht(64,256,r=>{let o=r.createLinearGradient(0,0,0,256);o.addColorStop(0,"rgba(255,255,255,0)"),o.addColorStop(.25,"rgba(255,255,255,.85)"),o.addColorStop(.6,"rgba(255,255,255,.35)"),o.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=o,r.fillRect(0,0,64,256)}),n=new ci(t.r||1.1,t.l||2.4,48,1,!0);n.rotateX(-Math.PI/2),n.translate(0,0,-(t.l||2.4)/2+.3);let s=new it(n,new Xt({map:e,transparent:!0,depthWrite:!1,side:_e,opacity:.8}));return s.position.y=t.y??.8,i.add(s),r=>{s.visible=r>.01,s.material.opacity=.8*r}}function ls(i,t,e={}){let n=Pe(e.seed||3),s=[];for(let r=0;r<(e.n||30);r++){let o=t[r%t.length],a=dn(e.cor||"#D9CDB8",1,0,!1);a.position.set(o[0]+(n()-.5)*(e.sp||3),o[1]+n()*.5,o[2]+(n()-.5)*(e.sp||3)),a.userData={b:a.position.clone(),d:n()*(e.spread||.6),v:new R((n()-.5)*2,n()*1.2,(n()-.5)*2),s:(e.size||2)*(.6+n()*.8)},i.add(a),s.push(a)}return r=>s.forEach(o=>{let a=o.userData,l=r-a.d;if(o.visible=l>0&&l<(e.life||4),!o.visible)return;let c=l/(e.life||4);o.position.copy(a.b).addScaledVector(a.v,l*.8),o.scale.setScalar(a.s*(.4+c*1.4)),o.material.opacity=(e.op||.75)*Math.sin(Math.min(1,c*4)*Math.PI/2)*(1-c)})}function Hn(i,t,e={}){t.parent||i.add(t);let n=new nt;t.add(n);let s=Pe(e.seed||9),r=[],o=new Xt({color:e.cor||"#FFFFFF",transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,fog:!1});for(let a=0;a<(e.n||46);a++){let l=s()*Math.PI*2,c=.55+s()*.9,d=new it(new Dt(.012+s()*.02,1),o);d.position.set(Math.cos(l)*c*1.7,Math.sin(l)*c,-2),d.rotation.z=l+Math.PI/2,d.renderOrder=20,d.userData={a:l,r:c,ph:s()},n.add(d),r.push(d)}return(a,l=1)=>{o.opacity=.55*l,n.visible=l>.01,r.forEach(c=>{let d=c.userData,h=(a*(e.vel||3)+d.ph)%1,f=d.r*(1.6-h*.8);c.position.set(Math.cos(d.a)*f*1.7,Math.sin(d.a)*f,-2),c.scale.y=.3+h*.8})}}function Gn(i,t=["#E2443A","#2F4E86","#B5774C"],e={}){let n=new nt;i.add(n);let s=Ht(256,32,o=>{let a=o.createLinearGradient(0,0,256,0);a.addColorStop(0,"rgba(255,255,255,0)"),a.addColorStop(1,"rgba(255,255,255,1)"),o.fillStyle=a,o.fillRect(0,0,256,32)}),r=t.map((o,a)=>{let l=new it(new Dt(1,1),new Xt({map:s,color:o,transparent:!0,opacity:.7,depthWrite:!1,side:_e}));return l.position.y=[.95,.4,1.2][a]??.8,n.add(l),l});return(o,a,l,c,d,h,f=1)=>{n.visible=f>.01,n.visible&&(n.position.set(o,a,l),n.rotation.y=Math.atan2(c,d)+Math.PI/2,r.forEach((u,m)=>{u.scale.set(h,[.5,.45,.35][m]??.4,1),u.position.x=-h/2,u.material.opacity=.65*f}))}}function Da(i,t,e={}){let n=e.n||900,s=Pe(e.seed||4),r=new ln(.008,.008,e.l||.45,4),o=new Xt({color:e.cor||"#BFD8F0",transparent:!0,opacity:e.op||.6,depthWrite:!1}),a=new gr(r,o,n);a.frustumCulled=!1,i.add(a);let l=[];for(let m=0;m<n;m++)l.push([t[0]+s()*(t[1]-t[0]),s(),t[4]+s()*(t[5]-t[4])]);let c=new le,d=new $n().setFromEuler(new Jn(0,0,e.inc||.12)),h=new R(1,1,1),f=new R,u=t[3]-t[2];return(m,x=1)=>{h.set(1,x,1);for(let g=0;g<n;g++){let p=l[g],_=t[2]+((p[1]*u-m*(e.vel||14))%u+u)%u;f.set(p[0],_,p[2]),c.compose(f,d,h),a.setMatrixAt(g,c)}a.instanceMatrix.needsUpdate=!0}}function Ls(i,t,e={}){let n=new nt;n.position.set(...t),i.add(n);let s=dn(e.cor||"#FFD45A",e.size||3,0);n.add(s);let r=Pe(e.seed||5),o=[];for(let a=0;a<(e.n||40);a++){let l=dn(a%3?e.cor||"#FFD45A":"#FFFFFF",(.12+r()*.1)*(e.ps||1),0);l.userData={a:r()*6.28,r:.3+r()*.6,ph:r(),sp:.6+r()},n.add(l),o.push(l)}return(a,l)=>{n.visible=l>.01,n.visible&&(s.material.opacity=(e.aura??.45)*l*(.85+.15*Math.sin(a*7)),s.scale.setScalar((e.size||3)*(.9+.1*Math.sin(a*3))),o.forEach(c=>{let d=c.userData,h=(a*.5*d.sp+d.ph)%1;c.position.set(Math.cos(d.a+a)*d.r,h*(e.alt||2.2)-.2,Math.sin(d.a+a)*d.r),c.material.opacity=l*Math.sin(h*Math.PI)}))}}function Bh(i,t){return[Math.sin(i*47)*t+Math.sin(i*89)*t*.5,Math.sin(i*53+1)*t+Math.sin(i*97)*t*.4,0]}function K(i,t,e,n){let s=Mh(i,t,e.bg||"#BFE3F7",e.fov||32),r=s.scene;e.fog&&(r.fog=new aa(e.fog[0],e.fog[1],e.fog[2])),s.camera.near=e.near||.05,s.camera.far=e.far||500,s.camera.updateProjectionMatrix();let o=n(r,s)||(()=>({}));return s.update=(a,l)=>{gc.value=a,Ds={t0:i,t1:t,viva:e.viva??1};let c=o(a,l,s.camera)||{},d=r.userData.vida;if(d&&e.vida!==!1){let h=Ch(a);for(let f of d)f(a,h,l)}return Sh(c)},s}var Ds={t0:0,t1:1,viva:1},Sr=(i,t)=>Math.sin(i*.71+t)*.6+Math.sin(i*1.37+t*2.1)*.3+Math.sin(i*2.9+t*3.3)*.1;function et(i,t,e,n,s=0,r=Ds.viva){let o=dc(t,n),a=dc(e,n);if(r>0){let l=gc.value,c=Math.hypot(o[0]-a[0],o[1]-a[1],o[2]-a[2]),d=Math.min(1,Math.max(0,(l-Ds.t0)/Math.max(.5,Ds.t1-Ds.t0))),h=Ds.t1-Ds.t0>6.5&&d>.5?.2*r:0,f=.05*r*(d*d*(3-2*d))+h;for(let m=0;m<3;m++)o[m]+=(a[m]-o[m])*f;let u=c*.011*r;o[0]+=Sr(l,1)*u,o[1]+=Sr(l,4)*u*.7,o[2]+=Sr(l,7)*u*.5,a[0]+=Sr(l,9)*u*.35,a[1]+=Sr(l,12)*u*.3,s+=Sr(l,15)*.006*r}bh(i,o,a,s)}function Y(i,t,e=0,n=0,s=0,r=0){let o=Fa(t);return o.place(e,n,r,s),i.add(o.root),o.seed=Math.abs(e*13+n*7|0)%9,o}function z(i,t,e,n="neutro",s={}){let r=t?yc(t,e):{open:0,round:0},o=s.mouth||(r.open>0?{open:r.open,round:r.round,smile:s.smile}:{open:0,smile:s.smile});i.face({emo:n,blink:s.blink??br(e,i.seed||0),look:s.look||[0,0],brow:s.brow,lagrima:s.lagrima,olhosAbertos:s.olhosAbertos,mouth:o});let a=i.headG.rotation,l=i.torsoG.rotation,c=i._viva;if(c&&a.x===c.r[0]&&a.y===c.r[1]&&a.z===c.r[2]&&l.x===c.r[3]&&l.z===c.r[4]&&(a.x-=c.d[0],a.y-=c.d[1],a.z-=c.d[2],l.x-=c.d[3],l.z-=c.d[4]),!i.congelado&&s.vivo!==!1){let d=(i.seed||0)*1.7,h=e*(s.lento??1),f=r.open||0,u=[.03*Math.sin(h*1.05+d)+f*.09*(.6+.4*Math.sin(h*7.3+d)),.045*Math.sin(h*.63+d*2)+f*.05*Math.sin(h*3.1+d),.025*Math.sin(h*.81+d*3),.018*Math.sin(h*2.2+d),.01*Math.sin(h*.9+d)];a.x+=u[0],a.y+=u[1],a.z+=u[2],l.x+=u[3],l.z+=u[4],i._viva={d:u,r:[a.x,a.y,a.z,l.x,l.z]}}else i._viva=null;return i}function hn(i,t,e={},n=1){let s=yc(i,t).open,r=Math.sin(t*2.3),o=Math.sin(t*1.7+1);return{...e,shR:[(e.shR?.[0]??0)+18*s*n+6*r*n,(e.shR?.[1]??8)+6*s*n],elR:(e.elR??10)+40*s*n,shL:[(e.shL?.[0]??0)+8*s*n*o,e.shL?.[1]??8],headX:(e.headX??0)-3*s+1.5*r,headZ:(e.headZ??0)+2*o*s}}function Di(i,t,e,n,s=0,r=n){if(et(i,t,e,n),s>0){let o=Bh(r,s);i.position.x+=o[0],i.position.y+=o[1]}}function Us(i,t,e,n,s=0){return i.root.rotation.set(-Math.PI/2+s,0,0),i.root.position.set(t,e+.2,n),i.sombra.visible=!1,i}function ti(i,t=.4){let e=Ht(256,256,s=>{if(s.lineJoin="round",s.lineWidth=14,s.strokeStyle="#1B1420",s.textAlign="center",s.textBaseline="middle",i==="coracao")s.fillStyle="#F2546E",s.beginPath(),s.moveTo(128,214),s.bezierCurveTo(20,140,30,50,100,52),s.bezierCurveTo(118,54,128,70,128,82),s.bezierCurveTo(128,70,138,54,156,52),s.bezierCurveTo(226,50,236,140,128,214),s.fill(),s.stroke(),s.fillStyle="#FFFFFF88",s.beginPath(),s.ellipse(88,92,18,12,-.6,0,7),s.fill();else if(i==="gota")s.fillStyle="#8FD3F2",s.beginPath(),s.moveTo(128,30),s.bezierCurveTo(200,130,200,210,128,214),s.bezierCurveTo(56,210,56,130,128,30),s.fill(),s.stroke();else{let r={interrogacao:"?",exclamacao:"!",zzz:"Z",notas:"\u266A"}[i]||i;s.font="900 200px Inter",s.fillStyle=i==="exclamacao"?"#F2C14E":"#FFFFFF",s.strokeText(r,128,136),s.fillText(r,128,136)}}),n=new Ci(new li({map:e,transparent:!0,depthWrite:!1}));return n.scale.setScalar(t),n.renderOrder=10,n}function Ke(i,t,e,n={}){let s=Ht(Math.round(512*(n.res||1)),Math.round(512*t/i*(n.res||1)),(o,a,l)=>e(o,a,l));return new it(new Dt(i,t),n.basic?new Xt({map:s,transparent:!!n.transp,side:_e}):new ze({map:s,transparent:!!n.transp,side:_e}))}var Ig=(i,t,e)=>{let n=t/2,s=e*.58;i.fillStyle="#FFD24A",i.beginPath(),i.moveTo(n,s+46),i.lineTo(n-40,s-30),i.quadraticCurveTo(n,s-52,n+40,s-30),i.closePath(),i.fill(),i.fillStyle="#E8792E",i.fillRect(n-40,s-36,80,10),i.fillStyle="#C0392B";for(let[r,o]of[[-14,-12],[12,-8],[-2,12]])i.beginPath(),i.arc(n+r,s+o,7,0,7),i.fill();i.strokeStyle="#1B1420",i.lineWidth=4,i.beginPath(),i.moveTo(n,s+46),i.lineTo(n-40,s-30),i.quadraticCurveTo(n,s-52,n+40,s-30),i.closePath(),i.stroke()},Oh=i=>(t,e,n)=>{t.fillStyle=i,t.fillRect(0,n*.9,e,n*.1)},ht={pele:"#B5774C",cabelo:"cacheado",corCabelo:"#1C1416",camisa:"#E2443A",calca:"#2F4E86",tenis:"#F4F1EA",sola:"#E2443A",estampa:(i,t,e)=>{Ig(i,t,e),Oh("#B8322B")(i,t,e)},nariz:!0},ke={pele:"#E8B48C",cabelo:"rabo",corCabelo:"#5B2E1E",laco:"#E84D6E",camisa:"#F4B63C",calca:"#3A3550",tenis:"#E84D6E",cilios:!0,estampa:(i,t,e)=>{Oh("#D99A22")(i,t,e),i.fillStyle="#1B1420",i.font="900 40px Inter",i.textAlign="center",i.fillText("BIA",t/2+110,e*.62)},escala:.97},vn={rugas:!0,pele:"#E3B28E",cabelo:"coque",corCabelo:"#ECE8E4",camisa:"#9C7BC4",manga:"longa",tronco:"senhora",saia:"#6B5A9C",tenis:"#7A5038",sola:"#5A3828",oculos:!0,nariz:!0,estampa:(i,t,e)=>{i.fillStyle="#8A68B4";for(let n=0;n<6;n++)i.fillRect(t/2-6+(n-2.5)*0,e*(.2+n*.12),12,12);i.fillStyle="#F4F1EA";for(let n=0;n<4;n++)i.beginPath(),i.arc(t/2,e*(.3+n*.15),9,0,7),i.fill()},escala:.9},un={pele:"#D69C76",cabelo:"careca",corCabelo:"#9A9590",camisa:"#F4F1EA",calca:"#34343E",tronco:"barriga",tenis:"#2A2A30",sola:"#F4F1EA",bigode:"#55504C",nariz:!0,sobrW:20,estampa:(i,t,e)=>{i.fillStyle="#C8352E",i.fillRect(t*.36,0,t*.28,e*.62),i.fillStyle="#F4F1EA",i.font="900 34px Inter",i.textAlign="center",i.fillText("JORGE",t/2,e*.32)},escala:1.04};var Ua={pele:"#D8A27E",cabelo:"tigela",corCabelo:"#2A2020",camisa:"#F2F4F6",manga:"longa",calca:"#4E8FA8",tenis:"#F2F4F6",estampa:(i,t,e)=>{i.fillStyle="#4E8FA8",i.fillRect(t/2-40,e*.55,80,e*.45)}},Nh=[["#3E7CC8","#2A2A33","#2A1E1A","tigela","#D9A07A"],["#E57AA0","#3A3550","#5A3020","rabo","#E8B48C"],["#58B26A","#2F4E86","#1C1416","cacheado","#8E5A3A"],["#F2994A","#3A3A44","#C9A060","tigela","#F0C8A6"],["#9B6CC4","#2A2A33","#1C1416","careca","#B07A52"],["#2FB5A8","#4A3A2A","#3A2418","coque","#E3B28E"],["#F2D24A","#2F4E86","#2A1E1A","cacheado","#6E4430"],["#E8E4DE","#5A5A66","#6A5A4A","tigela","#D9A07A"]],In=(i,t={})=>{let[e,n,s,r,o]=Nh[i%Nh.length];return Fa({camisa:e,calca:n,corCabelo:s,cabelo:r,pele:o,cilios:r==="rabo"||r==="coque",tenis:["#F4F1EA","#2A2A30","#E2443A"][i%3],...t})};var Ec={pele:"#D9A07A",cabelo:"careca",corCabelo:"#2A2020",camisa:"#2A2A33",manga:"longa",calca:"#2A2A33",tenis:"#15121A",sola:"#15121A",oculosEscuros:!0,estampa:(i,t,e)=>{i.fillStyle="#F4F1EA",i.beginPath(),i.moveTo(t/2-40,e),i.lineTo(t/2,e*.55),i.lineTo(t/2+40,e),i.fill(),i.fillStyle="#C8352E",i.fillRect(t/2-8,e*.62,16,e*.38)}},Ba={pele:"#E8B48C",cabelo:"tigela",corCabelo:"#C9A060",camisa:"#3E7CC8",manga:"longa",calca:"#2A2A33",cilios:!0},zh={pele:"#E3B28E",cabelo:"careca",corCabelo:"#ECE8E4",camisa:"#F2F4F6",manga:"longa",calca:"#4A4A52",oculos:!0,bigode:"#ECE8E4"};var Mc={};function bc(i="janelas",t="#E8DCC8",e={}){let n=i+t+JSON.stringify(e);if(Mc[n])return Mc[n];let s=Ht(256,256,r=>{if(i==="vidro"){let o=r.createLinearGradient(0,0,256,256);o.addColorStop(0,e.v1||"#9CC9E8"),o.addColorStop(.55,e.v2||"#6FA6D2"),o.addColorStop(1,e.v1||"#9CC9E8"),r.fillStyle=o,r.fillRect(0,0,256,256),r.fillStyle="rgba(255,255,255,.28)",r.beginPath(),r.moveTo(30,256),r.lineTo(130,0),r.lineTo(175,0),r.lineTo(75,256),r.fill(),r.fillStyle=e.mul||"#46607A";for(let a=0;a<4;a++)r.fillRect(a*64,0,7,256),r.fillRect(0,a*64,256,9);if(e.quebrado){let a=Pe(e.quebrado);for(let l=0;l<16;l++){if(a()<.3)continue;let c=l%4*64+35,d=Math.floor(l/4)*64+36;r.fillStyle="#1D2633",r.beginPath();for(let h=0;h<9;h++){let f=h/9*6.283,u=14+a()*16;r.lineTo(c+Math.cos(f)*u,d+Math.sin(f)*u*.9)}r.fill()}}}else{r.fillStyle=t,r.fillRect(0,0,256,256),r.fillStyle="rgba(0,0,0,.06)",r.fillRect(0,118,256,10),r.fillRect(0,246,256,10);for(let o=0;o<2;o++)for(let a=0;a<2;a++){let l=a*128+26,c=o*128+22,d=76,h=80,f=e.noite&&(o*3+a*7+(e.seed||0))%5<2;r.fillStyle="rgba(0,0,0,.12)",r.fillRect(l-6,c-6,d+12,h+14),r.fillStyle=e.noite?f?"#FFD98A":"#2B3550":e.vj||"#8DB8D8",r.fillRect(l,c,d,h),e.noite||(r.fillStyle="rgba(255,255,255,.35)",r.beginPath(),r.moveTo(l+8,c+h),r.lineTo(l+40,c),r.lineTo(l+56,c),r.lineTo(l+24,c+h),r.fill()),r.fillStyle=e.caixilho||"#F4F1EA",r.fillRect(l+d/2-3,c,6,h),r.fillRect(l,c+h*.55,d,5),e.quebrado&&(o+a+e.quebrado)%3!==0&&(r.fillStyle="#1D2633",r.beginPath(),r.moveTo(l+10,c+8),r.lineTo(l+60,c+20),r.lineTo(l+50,c+70),r.lineTo(l+15,c+60),r.fill())}}});return s.wrapS=s.wrapT=Cn,Mc[n]=s,s}function Hh(i){let{w:t=12,d:e=12,h:n=40,tipo:s="janelas",cor:r="#E8DCC8"}=i,o=i.andar||3.2,a=bc(s,r,i),l=[e,e,t,t,t,t].map((h,f)=>{if(f===2||f===3)return Tt(i.teto||"#B8B2A8");let u=a.clone();return u.needsUpdate=!0,u.repeat.set(Math.max(1,Math.round(h/(o*2))),Math.max(1,Math.round(n/(o*2)))),ge(u)}),c=new nt,d=new it(new We(t,n,e),l);return d.position.y=n/2,d.castShadow=d.receiveShadow=!0,c.add(d),c.add(Qt(t+.4,.6,e+.4,i.topo||"#D9D2C4",0,n+.3,0)),i.terreo!==!1&&c.add(Qt(t+.2,3.6,e+.2,i.corTerreo||"#4A4E58",0,1.8,0)),c.userData.mats=l,c.userData.base={tipo:s,cor:r,o:i},c}function Na(i,t=1){let{tipo:e,cor:n,o:s}=i.userData.base,r=bc(e,n,{...s,quebrado:t});i.userData.mats.forEach(o=>{if(o.map){let a=o.map.repeat.clone();o.map=r.clone(),o.map.needsUpdate=!0,o.map.repeat.copy(a)}})}function Lg(i=4,t={}){let e=Ht(512,512,n=>{n.fillStyle=t.cor||"#56585F",n.fillRect(0,0,512,512);let s=Pe(3);for(let r=0;r<1500;r++)n.fillStyle=`rgba(255,255,255,${s()*.05})`,n.fillRect(s()*512,s()*512,3,3);n.fillStyle="#F4F1EA";for(let r=1;r<i;r++)for(let o=0;o<512;o+=128)n.fillRect(r*512/i-4,o+20,8,70);n.fillStyle="#F2C94C",t.centro&&(n.fillRect(250,0,5,512),n.fillRect(258,0,5,512))});return e.wrapS=e.wrapT=Cn,e}function Dg(i="#D8D2C8",t="#C9C2B6"){let e=Ht(256,256,n=>{n.fillStyle=i,n.fillRect(0,0,256,256),n.fillStyle=t;for(let s=0;s<4;s++)for(let r=0;r<4;r++)(s+r)%2&&n.fillRect(s*64+2,r*64+2,60,60);n.strokeStyle="rgba(0,0,0,.08)",n.lineWidth=3;for(let s=0;s<=4;s++)n.beginPath(),n.moveTo(s*64,0),n.lineTo(s*64,256),n.stroke(),n.beginPath(),n.moveTo(0,s*64),n.lineTo(256,s*64),n.stroke()});return e.wrapS=e.wrapT=Cn,e}function kh(i,t,e,n,s=0,r=0,o=0,a=[1,1]){let l=new it(new Dt(t,e),typeof n=="string"?Tt(n):n);return l.material.map&&l.material.map.repeat.set(...a),l.rotation.x=-Math.PI/2,l.position.set(s,o,r),l.receiveShadow=!0,i.add(l),l}function Sc(i,t={}){let{largura:e=14,comp:n=200,z:s=-60,faixas:r=4,calc:o=5}=t,a=Lg(r,t);kh(i,e,n,ge(a),0,s,0,[1,n/e]);let l=Dg(t.c1,t.c2);for(let c of[-1,1]){let d=kh(i,o,n,ge(l.clone()),c*(e/2+o/2),s,.15,[o/2,n/2]);d.material.map.needsUpdate=!0,i.add(Qt(.25,.16,n,"#B9B2A6",c*(e/2+.12),.08,s))}}function Tr(i,t="#7EC4F0",e="#D9F0FA",n={}){let s=Ht(16,512,o=>{let a=o.createLinearGradient(0,0,0,512);a.addColorStop(0,t),a.addColorStop(.62,e),a.addColorStop(1,n.chao||e),o.fillStyle=a,o.fillRect(0,0,16,512)}),r=new it(new he(n.r||420,32,16),new Xt({map:s,side:$e,fog:!1,depthWrite:!1}));if(r.renderOrder=-10,i.add(r),n.nuvens!==!1&&n.n!==0)for(let o=0;o<(n.n||7);o++){let a=Ug(o),l=-1.9+o*.55+(n.giro||0),c=(n.r||420)*.8;a.position.set(Math.sin(l)*c,60+o%3*25+(n.alt||0),-Math.cos(l)*c),a.scale.setScalar(5+o%3*2),a.lookAt(0,a.position.y,0),i.add(a)}return r}function Ug(i=0){let t=new nt,e=Pe(i+11),n=new Xt({color:"#FFFFFF",fog:!1});for(let s=0;s<5;s++){let r=new it(new he(1.2+e()*1.4,16,12),n);r.position.set((s-2)*1.8+e(),e()*1.2,e()*.8),r.scale.y=.7,t.add(r)}return t}function Gh(i,t,e,n=1,s=0){let r=new nt;r.add(St(.16*n,.22*n,2.2*n,"#7A5236",0,1.1*n,0,{seg:10}));let o=Pe(s+3),a=["#5DAA4E","#4C9A44","#6DBB57"];for(let l=0;l<3;l++){let c=new it(new xa((1+o()*.4)*n,1),new ze({color:a[l],gradientMap:Tt("#fff").gradientMap,flatShading:!0}));c.position.set((o()-.5)*1.2*n,(2.6+o()*.9)*n,(o()-.5)*1.2*n),c.castShadow=!0,c.receiveShadow=!0,r.add(c)}return r.position.set(t,0,e),i.add(r),r}function Tc(i,t,e,n=1,s=!1){let r=new nt;r.add(St(.07,.1,6,"#5A6270",0,3,0,{seg:10}));let o=Qt(1.6,.1,.1,"#5A6270",n*.75,5.95,0);r.add(o);let a=Q(.5,.14,.3,s?"#FFF4C8":"#E8E4DA",n*1.45,5.85,0);if(r.add(a),s){let l=new Pn("#FFD99A",14,14,1.6);l.position.set(n*1.45,5.5,0),r.add(l)}return r.position.set(t,0,e),i.add(r),r}function Ui(i="#E2443A",t={}){let e=new nt,n=new nt;e.add(n),n.add(Q(1.8,.62,4,i,0,.62,0,{r:.22,out:t.out?.012:0})),n.add(Q(1.55,.55,2.1,i,0,1.15,-.25,{r:.2,out:t.out?.012:0}));let s=Tt("#33445C");for(let c of[-1,1]){let d=Q(.02,.38,1.7,s,c*.78,1.17,-.25,{r:.01});n.add(d)}n.add(Q(1.4,.38,.02,s,0,1.17,.82,{r:.01})),n.add(Q(1.4,.36,.02,s,0,1.17,-1.32,{r:.01}));let r=new Xt({color:t.noite?"#FFF6D0":"#FFF1C8"});for(let c of[-1,1]){let d=new it(new he(.13,12,8),r);d.position.set(c*.6,.7,2),d.scale.z=.4,n.add(d);let h=new it(new We(.32,.14,.04),new Xt({color:"#E23A3A"}));h.position.set(c*.6,.75,-2.01),n.add(h)}n.add(Q(1.85,.18,.2,"#D8D8DC",0,.42,2.02,{r:.06})),n.add(Q(1.85,.18,.2,"#D8D8DC",0,.42,-2.02,{r:.06}));let o=[],a=new ln(.36,.36,.26,20);a.rotateZ(Math.PI/2);for(let[c,d]of[[-.86,1.3],[.86,1.3],[-.86,-1.3],[.86,-1.3]]){let h=jn(a,"#26262C",{pos:[c,.36,d]});h.add(jn(new ln(.18,.18,.28,12).rotateZ(Math.PI/2),"#C8CCD2")),e.add(h),o.push(h)}let l=eo(1.6,.35);return l.scale.set(1.15,2.6,1),l.position.y=.01,e.add(l),e.userData.rodas=o,e.userData.body=n,e}function Vh(i="#E2443A"){let t=new nt,e=new ji(.3,.09,10,24);e.rotateY(Math.PI/2);for(let n of[-.6,.6])t.add(jn(e,"#26262C",{pos:[0,.38,n],out:.008}));return t.add(Q(.35,.35,1,i,0,.78,0,{r:.12,out:.01})),t.add(Q(.3,.12,.6,"#26262C",0,1,-.2,{r:.05})),t.add(St(.03,.03,.7,"#8A8E96",0,1.05,.52,{rot:[0,0,Math.PI/2]})),t}function Bi(i="#2FA37A"){let t=new nt,e=.3,n=new ji(e,.035,10,32);n.rotateY(Math.PI/2);let s=[];for(let u of[-.5,.5]){let m=new nt;m.position.set(0,e+.035,u),m.add(jn(n,"#26262C",{out:.006}));for(let x=0;x<4;x++){let g=St(.006,.006,e*2,"#B8BCC4",0,0,0,{seg:4});g.rotation.x=x*Math.PI/4,m.add(g)}t.add(m),s.push(m)}let r=(u,m,x=.025)=>{let g=new R(...u),p=new R(...m),_=g.distanceTo(p),y=St(x,x,_,i,0,0,0,{seg:10,out:.006});y.position.copy(g).add(p).multiplyScalar(.5),y.quaternion.setFromUnitVectors(new R(0,1,0),p.clone().sub(g).normalize()),t.add(y)},o=[0,.2,0],a=[0,.5,-.12],l=[0,.62,.38],c=[0,e+.035,.5],d=[0,e+.035,-.5];r(o,a),r(a,l),r(o,l),r(o,d),r(a,d),r(l,c),t.add(Q(.12,.05,.24,"#26262C",0,.53,-.14,{r:.02,out:.006})),t.add(St(.018,.018,.5,"#3A3A40",0,.66,.38,{rot:[0,0,Math.PI/2],out:.006}));let h=new nt;h.position.set(0,.2,0);for(let u of[-1,1]){let m=Qt(.02,.14,.03,"#3A3A40",u*.06,u*.07,0);h.add(m),h.add(Q(.08,.02,.05,"#26262C",u*.09,u*.14,0,{r:.008}))}t.add(h);let f=eo(.8,.3);return f.scale.set(.6,1.4,1),f.position.y=.006,t.add(f),t.userData={rodas:s,pedal:h},t}function Bs(i,t,e){i.userData.rodas.forEach(n=>n.rotation.x=t/.335),i.userData.pedal.rotation.x=t/.335*.55}function sn(i="CALABRESA"){let t=Ht(256,256,r=>{r.fillStyle="#E8D3AE",r.fillRect(0,0,256,256),r.strokeStyle="#C8AC80",r.lineWidth=6,r.strokeRect(10,10,236,236),r.fillStyle="#E2443A",r.beginPath(),r.arc(128,100,52,0,7),r.fill(),r.fillStyle="#FFD24A",r.beginPath(),r.moveTo(128,66),r.lineTo(98,128),r.lineTo(158,128),r.fill(),r.fillStyle="#B8322B",r.font="900 30px Inter",r.textAlign="center",r.fillText(i,128,200),r.font="700 18px Inter",r.fillText("PIZZARIA DO JORGE",128,228)}),e=ge(t),n=Tt("#DCC49C"),s=new it(rs(.36,.06,.36,.012),[n,n,e,n,n,n]);return s.castShadow=!0,ss(s,.006),s}function Ln(){let i=Ht(256,256,s=>{s.fillStyle="#E2443A",s.fillRect(0,0,256,256),s.fillStyle="#FFD24A",s.beginPath(),s.moveTo(128,200),s.lineTo(78,80),s.quadraticCurveTo(128,50,178,80),s.closePath(),s.fill(),s.fillStyle="#F4F1EA",s.font="900 26px Inter",s.textAlign="center",s.fillText("JORGE",128,240)}),t=Tt("#C8352E"),e=ge(i),n=new it(rs(.42,.42,.3,.05),[t,t,t,t,e,t]);return n.castShadow=!0,ss(n,.008),n}function hi(i=.1,t=.2){let e=new nt;e.add(Q(i,t,.016,"#1E1E26",0,0,0,{r:.012,out:.005}));let n=document.createElement("canvas");n.width=270,n.height=540;let s=n.getContext("2d"),r=new gn(n);r.colorSpace=Ce;let o=new it(new Dt(i*.88,t*.9),new Xt({map:r}));o.position.z=.0085,e.add(o);let a="";return e.paint=(l,c)=>(l!==a&&(a=l,c(s,270,540),r.needsUpdate=!0),e),e}function ro(i={}){let t=new nt;t.add(St(.32,.32,.06,i.cor||"#F4F1EA",0,0,0,{rot:[Math.PI/2,0,0],out:.01})),t.add(St(.34,.34,.05,i.aro||"#3A3A44",0,0,-.02,{rot:[Math.PI/2,0,0]}));for(let r=0;r<12;r++){let o=r/12*Math.PI*2;t.add(Qt(.02,r%3?.03:.06,.01,"#3A3A44",Math.sin(o)*.26,Math.cos(o)*.26,.035))}let e=new nt,n=new nt,s=new nt;return[e,n,s].forEach(r=>{r.position.z=.04,t.add(r)}),e.add(Qt(.03,.16,.01,"#1B1420",0,.07,0)),n.add(Qt(.02,.24,.01,"#1B1420",0,.11,.005)),s.add(Qt(.008,.25,.01,"#E2443A",0,.1,.01)),t.add(nn(.025,"#1B1420",0,0,.05)),t.set=(r,o,a=0)=>(e.rotation.z=-(r%12+o/60)/12*Math.PI*2,n.rotation.z=-(o+a/60)/60*Math.PI*2,s.rotation.z=-a/60*Math.PI*2,t),t.set(10,10),t}function oo(i=0,t={}){let e=Pe(i+5),n=["#F2C14E","#8FD3C1","#F28F6B","#B9D98C","#F4E3C1","#9EC1E8","#E8A0B8"],s=t.cor||n[Math.floor(e()*n.length)],r=t.w||7,o=t.d||8,a=3.2,l=new nt,c=bc("janelas",s,{vj:"#7FA6C4",caixilho:"#F4F1EA",noite:t.noite,seed:i}),d=ge((()=>{let u=c.clone();return u.needsUpdate=!0,u.repeat.set(Math.max(1,Math.round(r/6)),1),u})()),h=new it(new We(r,a,o),[Tt(s),Tt(s),Tt("#C9C2B6"),Tt(s),d,Tt(s)]);if(h.position.y=a/2,h.castShadow=h.receiveShadow=!0,l.add(h),t.andar!==!1&&e()<.7){let u=Ht(256,256,x=>{x.fillStyle="#C46A4A",x.fillRect(0,0,256,256),x.fillStyle="#B25A3C";for(let g=0;g<16;g++)for(let p=0;p<8;p++)x.fillRect(p*32+g%2*16,g*16,30,14)});u.wrapS=u.wrapT=Cn,u.repeat.set(2,1);let m=new it(new We(r*.7,2.8,o*.7),ge(u));m.position.set(-r*.15,a+1.4,-o*.1),m.castShadow=!0,l.add(m)}l.add(Qt(r+.3,.25,o+.3,"#D9D2C4",0,a+.12,0)),l.add(St(.55,.5,.9,"#3E7CC8",r*.3,a+.7,-o*.25,{seg:16})),l.add(St(.6,.6,.12,"#2F68AE",r*.3,a+1.2,-o*.25,{seg:16})),l.add(Q(1.1,2.2,.1,t.porta||"#7A5236",-r*.25,1.1,o/2+.02,{r:.03})),l.add(Qt(r,1.3,.2,"#E8E2D6",0,.65,o/2+2.2));let f=new nt;for(let u=0;u<9;u++)f.add(Qt(.05,1.8,.05,"#3A3A44",-1+u*.25,.9,0));return f.add(Qt(2.1,.06,.06,"#3A3A44",0,1.78,0)),f.add(Qt(2.1,.06,.06,"#3A3A44",0,.3,0)),f.position.set(-r*.25,0,o/2+2.25),l.add(f),l}function Wh(i,t="#2E6FB8"){let e=Ht(512,128,r=>{r.fillStyle=t,r.fillRect(0,0,512,128),r.strokeStyle="#F4F1EA",r.lineWidth=8,r.strokeRect(10,10,492,108),r.fillStyle="#F4F1EA",r.font="800 54px Inter",r.textAlign="center",r.fillText(i,256,84)}),n=new nt;n.add(St(.05,.05,3,"#5A6270",0,1.5,0,{seg:8}));let s=new it(new We(1.6,.4,.04),[Tt(t),Tt(t),Tt(t),Tt(t),ge(e),ge(e)]);return s.position.y=3.05,n.add(s),n}function Ne(i,t={}){Tr(i,t.noite?"#1B2550":"#5FB4EE",t.noite?"#3A4A8A":"#D6EEF9"),Lt(i,{r:t.r||40,far:160,pos:[30,50,25],target:t.alvo||[0,0,-20],ki:2.3,hemi:1.4}),Sc(i,{largura:22,comp:260,z:-80,faixas:6,calc:7,c1:"#D3CEC6",c2:"#BFB8AC"}),i.add(Q(1.6,.25,240,"#9C9488",0,.12,-80,{r:.05}));for(let l=0;l<14;l++)Gh(i,0,20-l*14,.8,l);let e=[],n=Pe(t.seed||31),s=["#E8DCC8","#D9C9B0","#F2E6D2","#CFC6BC"];for(let l of[-1,1]){let c=30,d=0;for(;c>-200;){let h=14+n()*8,f=16+n()*10,u=(t.alt||[38,55])[0]+n()*(t.alt||[38,55])[1],m=n()<.55,x=Hh({w:h,d:f,h:u,tipo:m?"vidro":"janelas",cor:s[d%4],v1:["#A8D2EE","#9CC7E0","#B6DCEF"][d%3],v2:["#6FA6D2","#5C94C0","#7CB2DA"][d%3],vj:"#8DB8D8",seed:d,corTerreo:["#4A4E58","#5A4E46","#3E4A56"][d%3]});if(x.position.set(l*(18+h/2+.5),0,c-f/2),i.add(x),t.lojas!==!1){let g=Ph(d*3+(l>0?1:0),Math.min(h*.7,7));g.position.set(l*18.3,4.4,c-f/2),g.rotation.y=-l*Math.PI/2,i.add(g)}e.push({g:x,s:l,z:c-f/2,w:h,d:f,h:u,x:l*(18+.5)}),c-=f+2+n()*4,d++}}if(t.antena!==!1){let l=new nt;for(let c=0;c<6;c++){let d=Qt(1.6-c*.22,12,1.6-c*.22,c%2?"#F4F1EA":"#E2443A",0,6+c*12,0);l.add(d)}l.position.set(-38,40,-230),i.add(l)}for(let l=0;l<9;l++)for(let c of[-1,1])Tc(i,c*11.6,15-l*24,-c);let r=[],o=["#E2443A","#F4F1EA","#2F4E86","#F2C14E","#3A3A44","#8FD3C1","#E8A0B8"];for(let l=0;l<(t.carros??14);l++){let c=l%2?1:-1,d=Ui(o[l%o.length]),h=2.2+l%3*3.1;d.position.set(c*h,0,20-l*11-l%3*3),d.rotation.y=c>0?Math.PI:0,i.add(d),r.push({k:d,s:c,z0:d.position.z,v:6+l%4*2})}let a=[];if(t.gente!==!1)for(let l=0;l<(t.nGente??16);l++){let c=l%2?1:-1,d=In(l,{simples:!0});d.place(c*(13+l%3*1.6),6-l*3.6-l%2*1.5,0,c>0?Math.PI:0),i.add(d.root),a.push({k:d,s:c,z0:d.root.position.z,ph:l*.37,dir:l%3?1:-1})}return t.detalhes!==!1&&vc(i,{xs:[12.4,17.3],z0:22,z1:-170,evita:[[15,24]],seed:(t.seed||31)+5,passo:6}),!t.noite&&t.passaros!==!1&&(Ia(i,{n:8,centro:[0,30,-70],raio:42,v:.1,seed:3}),Ia(i,{n:5,centro:[10,24,-30],raio:26,v:-.14,seed:9,fase:2})),{P:e,carros:r,gente:a}}function fe(i,t={}){t.semCeu||Tr(i,t.noite?"#16204A":"#6DBDF2",t.noite?"#33437E":"#DDF2FB",{n:t.noite?0:6}),t.semLuz||Lt(i,{r:28,far:120,pos:t.noite?[-10,30,10]:[20,30,18],target:[0,0,-10],ki:t.noite?.5:2.2,hemi:t.noite?.55:1.45,sky:t.noite?"#6A7AC0":"#EAF2FF",key:t.noite?"#9FB0FF":"#FFF4E2"}),Sc(i,{largura:8,comp:160,z:-50,faixas:2,calc:3,cor:"#5E6066",c1:"#D8CFC2",c2:"#CBC0B0"});let e=[];for(let n of[-1,1])for(let s=0;s<(t.n||9);s++){let r=oo(s*2+(n>0?1:0)+(t.seed||0),{noite:t.noite});r.position.set(n*13.5,0,18-s*9.2),r.rotation.y=-n*Math.PI/2,i.add(r),e.push(r)}for(let n=0;n<7;n++)Tc(i,(n%2?1:-1)*5.4,12-n*13,n%2?-1:1,t.noite);if(t.fios!==!1)for(let n of[-1,1]){let s=St(.012,.012,150,"#2A2A30",n*5.4,6.1,-50,{seg:4,rot:[Math.PI/2,0,0],shadow:!1});i.add(s)}return t.detalhes!==!1&&vc(i,{bairro:!0,xs:[4.55,6.75],z0:20,z1:-110,evita:[[12,13]],seed:(t.seed||0)+41,passo:7}),!t.noite&&t.passaros!==!1&&Ia(i,{n:6,centro:[0,15,-30],raio:22,v:.12,seed:4+(t.seed||0)}),{casas:e}}function Bg(i="madeira",t="#C8935E",e="#B98450"){let n=Ht(512,512,s=>{if(i==="madeira")for(let r=0;r<8;r++)s.fillStyle=r%2?t:e,s.fillRect(0,r*64,512,64),s.fillStyle="rgba(0,0,0,.08)",s.fillRect(0,r*64,512,3),s.fillRect(r*197%400+40,r*64,3,64);else if(i==="ladrilho"){s.fillStyle=t,s.fillRect(0,0,512,512),s.fillStyle=e;for(let r=0;r<8;r++)for(let o=0;o<8;o++)(r+o)%2&&s.fillRect(r*64,o*64,64,64)}else{s.fillStyle=t,s.fillRect(0,0,512,512),s.strokeStyle=e,s.lineWidth=4;for(let r=0;r<=8;r++)s.beginPath(),s.moveTo(r*64,0),s.lineTo(r*64,512),s.stroke(),s.beginPath(),s.moveTo(0,r*64),s.lineTo(512,r*64),s.stroke()}});return n.wrapS=n.wrapT=Cn,n}function Ar(i,t={}){let{w:e=8,d:n=7,h:s=3.2}=t,r=Bg(t.tipoPiso||"madeira",t.piso1,t.piso2);r.repeat.set(e/2.5,n/2.5);let o=new it(new Dt(e,n),ge(r));o.rotation.x=-Math.PI/2,o.position.set(0,0,-n/2+(t.dz||0)+n*0),o.receiveShadow=!0,i.add(o);let a=Tt(t.parede||"#F3E3C8"),l=Tt(t.parede2||t.parede||"#F3E3C8"),c=Qt(e,s,.2,a,0,s/2,-n,{shadow:!1});return i.add(c),t.lados!==!1&&(i.add(Qt(.2,s,n,l,-e/2,s/2,-n/2,{shadow:!1})),i.add(Qt(.2,s,n,l,e/2,s/2,-n/2,{shadow:!1}))),t.meiaParede&&i.add(Qt(e,s*.38,.05,Tt(t.meiaParede),0,s*.19,-n+.12,{shadow:!1})),i.add(Qt(e,.12,.06,t.rodape||"#FFFFFF",0,.06,-n+.12,{shadow:!1})),{w:e,d:n,h:s}}function Ac(i,t,e,n,s=1.6,r=1.3,o={}){let a=new nt,l=Ht(128,128,h=>{let f=h.createLinearGradient(0,0,0,128);f.addColorStop(0,o.c1||"#8CCBF2"),f.addColorStop(1,o.c2||"#DDF2FB"),h.fillStyle=f,h.fillRect(0,0,128,128)}),c=new it(new Dt(s,r),new Xt({map:l,color:o.tint||"#FFFFFF"}));a.add(c),a.userData.vidro=c;let d=o.moldura||"#FFFFFF";if(a.add(Qt(s+.16,.1,.1,d,0,r/2,.03)),a.add(Qt(s+.16,.1,.14,d,0,-r/2,.05)),a.add(Qt(.1,r,.1,d,-s/2,0,.03)),a.add(Qt(.1,r,.1,d,s/2,0,.03)),a.add(Qt(.05,r,.06,d,0,0,.03)),a.add(Qt(s,.05,.06,d,0,0,.03)),o.cortina)for(let h of[-1,1]){let f=Q(.35,r+.4,.06,o.cortina,h*(s/2+.1),0,.1,{r:.03});a.add(f)}return a.position.set(t,e,n),o.ry&&(a.rotation.y=o.ry),i.add(a),a}function wr(i,t,e,n=1.4,s=.8,r=.76,o="#B87A4A"){let a=new nt;a.add(Q(n,.07,s,o,0,r,0,{r:.02,out:.008}));for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.add(Q(.07,r,.07,o,l*(n/2-.08),r/2,c*(s/2-.08),{r:.02}));return a.position.set(t,0,e),i.add(a),a}function cs(i,t,e,n=0,s="#9A6236"){let r=new nt;r.add(Q(.44,.06,.42,s,0,.45,0,{r:.02,out:.007})),r.add(Q(.44,.5,.05,s,0,.72,-.19,{r:.02,out:.007}));for(let[o,a]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.add(Q(.05,.45,.05,s,o*.18,.22,a*.17,{r:.01}));return r.position.set(t,0,e),r.rotation.y=n,i.add(r),r}function ds(i,t,e,n,s,r,o,a=0){let l=Ht(256,Math.round(256*r/s),(h,f,u)=>o(h,f,u)),c=new nt;c.add(Q(s+.08,r+.08,.04,"#7A5236",0,0,0,{r:.01}));let d=new it(new Dt(s,r),ge(l));return d.position.z=.025,c.add(d),c.position.set(t,e,n),c.rotation.y=a,i.add(c),c}function wc(i,t,e){let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#E9D9B4"),n.addColorStop(1,"#CDB88E"),i.fillStyle=n,i.fillRect(0,0,t,e),i.lineWidth=t*.02,i.strokeStyle="#1B1420",i.lineCap="round",i.fillStyle="#7A9CB8",i.beginPath(),i.ellipse(t/2,e*1.02,t*.42,e*.3,0,Math.PI,0),i.fill(),i.stroke(),i.fillStyle="#F4F1EA",i.beginPath(),i.moveTo(t*.42,e*.74),i.lineTo(t/2,e*.84),i.lineTo(t*.58,e*.74),i.fill(),i.fillStyle="#C98E66",i.beginPath(),i.arc(t/2,e*.44,t*.3,0,7),i.fill(),i.stroke(),i.fillStyle="#E4E0DA";for(let s of[-1,1])i.beginPath(),i.ellipse(t/2+s*t*.27,e*.4,t*.07,e*.09,0,0,7),i.fill();i.fillStyle="#1B1420";for(let s of[-1,1])i.beginPath(),i.ellipse(t/2+s*t*.1,e*.42,t*.035,e*.04,0,0,7),i.fill();i.lineWidth=t*.015;for(let s of[-1,1])i.beginPath(),i.arc(t/2+s*t*.1,e*.42,t*.07,0,7),i.stroke();i.fillStyle="#E4E0DA",i.beginPath(),i.ellipse(t/2,e*.53,t*.13,e*.035,0,0,7),i.fill(),i.lineWidth=t*.018,i.beginPath(),i.arc(t/2,e*.55,t*.07,.3,Math.PI-.3),i.stroke(),i.strokeStyle="rgba(80,60,30,.35)",i.lineWidth=t*.03,i.strokeRect(t*.03,e*.03,t*.94,e*.94)}function Rc(i,t,e){let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#F3E2C4"),n.addColorStop(1,"#E2C9A0"),i.fillStyle=n,i.fillRect(0,0,t,e),i.lineWidth=t*.02,i.strokeStyle="#1B1420",i.lineCap="round",i.fillStyle="#9C7BC4",i.beginPath(),i.ellipse(t/2,e*1.02,t*.42,e*.3,0,Math.PI,0),i.fill(),i.stroke(),i.fillStyle="#ECE8E4",i.beginPath(),i.arc(t/2,e*.2,t*.13,0,7),i.fill(),i.stroke(),i.beginPath(),i.arc(t/2,e*.42,t*.33,Math.PI*1.05,Math.PI*1.95),i.fill(),i.fillStyle="#E3B28E",i.beginPath(),i.arc(t/2,e*.46,t*.29,0,7),i.fill(),i.stroke(),i.fillStyle="#ECE8E4",i.beginPath(),i.ellipse(t/2,e*.25,t*.27,e*.08,0,0,7),i.fill(),i.fillStyle="#1B1420";for(let s of[-1,1])i.beginPath(),i.ellipse(t/2+s*t*.1,e*.45,t*.03,e*.035,0,0,7),i.fill();i.strokeStyle="#6A4A3A",i.lineWidth=t*.014;for(let s of[-1,1])i.beginPath(),i.arc(t/2+s*t*.1,e*.45,t*.075,0,7),i.stroke();i.strokeStyle="#1B1420",i.lineWidth=t*.018,i.beginPath(),i.arc(t/2,e*.54,t*.08,.3,Math.PI-.3),i.stroke(),i.fillStyle="rgba(240,110,110,.35)";for(let s of[-1,1])i.beginPath(),i.ellipse(t/2+s*t*.17,e*.55,t*.05,e*.03,0,0,7),i.fill();i.strokeStyle="rgba(80,60,30,.35)",i.lineWidth=t*.03,i.strokeRect(t*.03,e*.03,t*.94,e*.94)}function _n(i,t={}){let e=Ar(i,{w:9,d:6,parede:"#F6E3B4",parede2:"#EFD7A2",tipoPiso:"ladrilho",piso1:"#E9E2D6",piso2:"#D7CCB9",meiaParede:"#9ED3C4"}),n=Ht(256,128,u=>{u.fillStyle="#FFFFFF",u.fillRect(0,0,256,128),u.strokeStyle="#CFE3EC",u.lineWidth=4;for(let m=0;m<=8;m++)u.beginPath(),u.moveTo(m*32,0),u.lineTo(m*32,128),u.stroke();for(let m=0;m<=4;m++)u.beginPath(),u.moveTo(0,m*32),u.lineTo(256,m*32),u.stroke()});n.wrapS=n.wrapT=Cn,n.repeat.set(3,1);let s=new it(new Dt(4.4,1),ge(n));s.position.set(-1.6,1.45,-5.88),i.add(s),i.add(Q(4.4,.9,.7,"#7FC4B4",-1.6,.45,-5.55,{r:.03})),i.add(Q(4.5,.06,.74,"#E8E2D6",-1.6,.93,-5.55,{r:.02}));for(let u=0;u<4;u++)i.add(Q(.9,.7,.04,"#8FD0C0",-3.2+u*1.08,.45,-5.18,{r:.02}));i.add(Q(2.6,.7,.45,"#7FC4B4",-1.9,2.25,-5.7,{r:.03})),i.add(Q(.9,.92,.7,"#F4F1EA",1.1,.46,-5.55,{r:.04,out:.008})),i.add(Q(.92,.05,.72,"#3A3A44",1.1,.95,-5.55,{r:.02}));let r=St(.22,.2,.24,"#C8CCD2",1,1.1,-5.55,{out:.008});i.add(r),i.add(St(.24,.24,.03,"#9EA2AA",1,1.23,-5.55)),i.add(Q(.9,1.9,.75,"#F4F1EA",2.6,.95,-5.5,{r:.1,out:.01})),i.add(Q(.04,.4,.06,"#B8BCC4",2.25,1.35,-5.1,{r:.02}));let o=wr(i,-.6,-2.6,1.6,.95,.76,"#C98B5A"),a=new it(new Dt(1.5,.85),ge(Ht(128,128,u=>{u.fillStyle="#F4F1EA",u.fillRect(0,0,128,128),u.fillStyle="#E2443A";for(let m=0;m<8;m++)for(let x=0;x<8;x++)(m+x)%2&&u.fillRect(m*16,x*16,16,16)})));a.rotation.x=-Math.PI/2,a.position.set(-.6,.8,-2.6),i.add(a),cs(i,-1.6,-2.6,Math.PI/2),cs(i,.4,-2.6,-Math.PI/2),Ac(i,3.2,1.7,-5.88,1.4,1.1,{cortina:"#F28F6B"});let l=ds(i,-3.9,2,-3.2,.5,.62,wc,Math.PI/2);l.traverse?.(u=>{u.castShadow=!1});let c=ro();c.position.set(0,2.45,-5.88),i.add(c);let d=new nt;d.add(Q(1.05,2.15,.08,"#8A5A36",.52,1.08,0,{r:.03,out:.008})),d.add(nn(.05,"#E8C060",.92,1.05,.07)),d.position.set(-4.4,0,-1.2),d.rotation.y=Math.PI/2,i.add(d),i.add(Qt(.25,2.3,1.3,"#EFD7A2",-4.52,1.15,-1.75,{shadow:!1})),_c(i,1,1.27,-5.55,{n:7,tam:.16,alt:.8}),i.add(St(.2,.14,.08,"#E8E2D6",-.9,.82,-2.6,{out:.006}));for(let u=0;u<5;u++)i.add(nn(.065,["#E2443A","#F2C14E","#F28F2B","#6DBB57","#E2443A"][u],-.98+u%3*.08,.9+(u>2?.07:0),-2.62+u%2*.07,{seg:10}));i.add(Q(1.6,.05,.3,"#C98B5A",-1.9,1.75,-5.8));for(let u=0;u<5;u++)i.add(St(.08,.08,.2+u%2*.06,["#F2C14E","#E8A0B8","#9EC1E8","#F28F6B","#B9D98C"][u],-2.5+u*.3,1.88,-5.78,{seg:10,out:.005}));let h=new it(new Dt(.42,.56),ge(Ht(128,170,u=>{u.fillStyle="#FFFFFF",u.fillRect(0,0,128,170),u.fillStyle="#E2443A",u.fillRect(0,0,128,40),u.fillStyle="#fff",u.font="900 24px Inter",u.textAlign="center",u.fillText("MAR\xC7O",64,28),u.fillStyle="#3A3A44",u.font="600 13px Inter";for(let m=0;m<31;m++)u.fillText(String(m+1),12+m%7*17,62+Math.floor(m/7)*22)})));h.position.set(-3.9+.12,1.6,-4.6),h.rotation.y=Math.PI/2,i.add(h),i.add(Q(.3,.4,.02,"#F28F6B",.7,.7,-5.17,{r:.01}));let f=new it(new Dt(2.2,1.4),ge(Ht(128,96,u=>{u.fillStyle="#C9472F",u.fillRect(0,0,128,96),u.strokeStyle="#F2C14E",u.lineWidth=6,u.strokeRect(8,8,112,80),u.strokeStyle="#F4F1EA",u.lineWidth=3,u.strokeRect(18,18,92,60)})));f.rotation.x=-Math.PI/2,f.position.set(-.6,.012,-2.6),i.add(f);for(let u=0;u<2;u++){let m=no(u+3);m.scale.setScalar(.45),m.position.set(2.95+u*.5,1.12,-5.75),i.add(m)}return{C:e,rel:c,panela:r,porta:d,foto:l}}function Dn(i,t={}){let e=Ar(i,{w:8,d:6,parede:t.noite?"#6F7FB0":"#A9C9E6",parede2:t.noite?"#61709E":"#98BCDD",tipoPiso:"madeira",piso1:"#B98A5E",piso2:"#AD7F52"}),n=new nt;n.add(Q(1.2,.38,2.1,"#8A5A36",0,.22,0,{r:.05,out:.01})),n.add(Q(1.12,.2,2,"#F4F1EA",0,.48,0,{r:.08})),n.add(Q(1.14,.14,1.3,t.lencol||"#E2443A",0,.6,.35,{r:.06})),n.add(Q(.7,.16,.38,"#FFFFFF",0,.64,-.72,{r:.08,out:.006})),n.add(Q(1.2,.9,.1,"#8A5A36",0,.6,-1.05,{r:.04,out:.01})),n.position.set(-2.2,0,-4.4),i.add(n);let s=wr(i,2.2,-5.2,1.5,.7,.76,"#C98B5A"),r=cs(i,2.2,-4.5,Math.PI),o=new nt;if(o.add(St(.12,.14,.04,"#3A3A44",0,0,0)),o.add(St(.015,.015,.4,"#3A3A44",0,.2,0)),o.add(St(.08,.16,.16,"#F2C14E",0,.42,0,{out:.006})),o.position.set(2.75,.8,-5.3),i.add(o),t.noite){let u=new Pn("#FFD99A",6,5,1.6);u.position.set(2.7,1.4,-5.1),i.add(u)}let a=Ac(i,-.2,1.8,-5.88,1.6,1.2,{c1:t.noite?"#1B2550":"#8CCBF2",c2:t.noite?"#3A4A8A":"#DDF2FB",cortina:"#F2C14E"}),l=ro({cor:"#FFFFFF",aro:"#E2443A"});l.position.set(1.6,2.4,-5.88),i.add(l),ds(i,3.9,1.9,-3.4,.9,.65,(u,m,x)=>{u.fillStyle="#F2C14E",u.fillRect(0,0,m,x),u.fillStyle="#E2443A",u.beginPath(),u.arc(m*.3,x*.7,x*.16,0,7),u.arc(m*.72,x*.7,x*.16,0,7),u.fill(),u.fillStyle="#1B1420",u.fillRect(m*.3,x*.45,m*.45,x*.12),u.font=`900 ${x*.16}px Inter`,u.textAlign="center",u.fillText("UM DIA",m/2,x*.28)},-Math.PI/2);let c=new nt;c.add(Q(1.1,1.8,.35,"#8A5A36",0,.9,0,{r:.02,out:.008}));for(let u=0;u<3;u++){c.add(Qt(1,.03,.3,"#6E4628",0,.35+u*.5,.02));for(let m=0;m<7;m++)c.add(Qt(.08+m%3*.02,.3+m%2*.08,.22,["#E2443A","#2E6FB8","#F2C14E","#2FA37A","#8A4FA8","#F28F6B","#F4F1EA"][(m+u)%7],-.4+m*.13,.53+u*.5+m%2*.04,.03))}c.position.set(3.75,0,-2.4),c.rotation.y=-Math.PI/2,i.add(c);let d=new it(new Qn(.9,32),Tt("#E8A0B8"));d.rotation.x=-Math.PI/2,d.position.set(0,.012,-3.4),i.add(d);let h=new it(new va(.7,.78,32),Tt("#F4F1EA"));if(h.rotation.x=-Math.PI/2,h.position.set(0,.014,-3.4),i.add(h),i.add(Q(.55,.5,.45,"#E2443A",-.9,.25,-5.5,{r:.06,out:.008})),i.add(Q(.4,.03,.3,"#F4F1EA",-.9,.5,-5.5)),i.add(Q(.5,.06,.4,"#2E6FB8",2.2,.5,-4.35,{r:.03})),a.children?a:null){let u=[];a.traverse(m=>{m.isMesh&&m.geometry?.parameters?.width===.35&&u.push(m)}),as(i,(m,x)=>u.forEach((g,p)=>{g.rotation.y=.04*Math.sin(x*1.1+p*2)}))}return{C:e,cama:n,mesa:s,cad:r,rel:l,jan:a}}function He(i,t={}){let e=Ar(i,{w:11,d:7,parede:"#F6E7C8",parede2:"#F0DDB4",tipoPiso:"ladrilho",piso1:"#F4F1EA",piso2:"#E2443A",meiaParede:"#2FA37A"}),n=Ht(256,256,p=>{p.fillStyle="#C46A4A",p.fillRect(0,0,256,256),p.fillStyle="#B25A3C";for(let _=0;_<16;_++)for(let y=0;y<8;y++)p.fillRect(y*32+_%2*16,_*16,30,14)});n.wrapS=n.wrapT=Cn,n.repeat.set(2,2);let s=new it(new Dt(3.6,3.2),ge(n));s.position.set(2.8,1.6,-6.88),i.add(s);let r=new nt,o=new it(new he(1.1,32,16,0,Math.PI*2,0,Math.PI/2),Tt("#B25A3C"));o.castShadow=!0,ss(o,.012),r.add(o),r.add(Q(2.6,1,1.8,"#9A4A30",0,-.5,0,{r:.05}));let a=new it(new Qn(.42,24,0,Math.PI),new Xt({color:"#FF9A3C"}));a.position.set(0,0,1),r.add(a);let l=new Pn("#FF9A3C",4,5,1.6);l.position.set(0,.3,1.4),r.add(l),r.position.set(2.8,1,-5.9),i.add(r),i.add(Q(5,.74,.9,"#2FA37A",-1.4,.37,-3.6,{r:.05,out:.012})),i.add(Q(5.1,.07,1,"#E8E2D6",-1.4,.77,-3.6,{r:.03}));let c=Q(.4,.22,.32,"#3A3A44",-3.75,.92,-3.75,{r:.04,out:.008});i.add(c),i.add(Q(.32,.2,.03,"#8FD3C1",-3.75,1.12,-3.86,{r:.02}));for(let p=0;p<3;p++){let _=sn();_.position.set(.4+p*.05,.84+p*.065,-3.6),_.rotation.y=p*.2,i.add(_)}ds(i,-1.6,2.4,-6.88,3,1.1,(p,_,y)=>{p.fillStyle="#1B1420",p.fillRect(0,0,_,y),p.fillStyle="#FFD24A",p.font=`900 ${y*.2}px Inter`,p.textAlign="center",p.fillText("PIZZARIA DO JORGE",_/2,y*.25),p.fillStyle="#F4F1EA",p.font=`600 ${y*.12}px Inter`,p.textAlign="left",["CALABRESA ....... 45","MUSSARELA ....... 42","PORTUGUESA ..... 48","FRANGO C/ CAT.. 50"].forEach((v,C)=>p.fillText(v,_*.08+C%2*_*.46,y*(.52+Math.floor(C/2)*.22)))});let d=ro();d.position.set(-4.6,2.5,-6.88),i.add(d);let h=new nt;h.add(Q(.28,.4,.12,"#E2443A",0,0,0,{r:.04,out:.008}));let f=Q(.1,.38,.1,"#C8352E",-.2,0,.04,{r:.04,out:.008});h.add(f),h.position.set(-5.3,1.6,-4.2),h.rotation.y=Math.PI/2,i.add(h),h.userData.fone=f;for(let[p,_]of[[-3.8,-1.2],[-1,-.6],[3.6,-1.4]]){wr(i,p,_,.9,.9,.74,"#C98B5A");let y=new it(new Dt(.86,.86),ge(Ht(64,64,v=>{v.fillStyle="#F4F1EA",v.fillRect(0,0,64,64),v.fillStyle="#2FA37A";for(let C=0;C<8;C++)for(let T=0;T<8;T++)(C+T)%2&&v.fillRect(C*8,T*8,8,8)})));y.rotation.x=-Math.PI/2,y.position.set(p,.785,_),i.add(y)}for(let p of[-3,0,3])i.add(St(.01,.01,.8,"#3A3A44",p,2.8,-3)),i.add(St(.12,.3,.25,"#E2443A",p,2.35,-3,{out:.008}));Ih(i,2.8,.98,-4.92,{n:6,dx:.1,luz:3}),_c(i,2.8,1.25,-4.85,{n:6,tam:.22,alt:1.2,op:.3,cor:"#E8E2D6"}),Fh(i,-1.2,3.2,-1.8);let u=new nt;u.add(Q(1,2,.7,"#E2443A",0,1,0,{r:.05,out:.01}));let m=new it(new Dt(.8,1.5),ge(Ht(128,240,p=>{p.fillStyle="#BFE3F7",p.fillRect(0,0,128,240);for(let _=0;_<4;_++){p.fillStyle="#9EA6B0",p.fillRect(0,56+_*58,128,4);for(let y=0;y<6;y++)p.fillStyle=["#E2443A","#2FA37A","#F2A33A","#2E6FB8","#3A3A44","#F4F1EA"][(y+_)%6],p.fillRect(6+y*20,14+_*58,14,40)}})));m.position.set(0,1.1,.36),u.add(m),u.position.set(-5,0,-6.2),u.rotation.y=.5,i.add(u),i.add(Q(2.2,.05,.3,"#8A5A36",-1.6,1.55,-6.8));for(let p=0;p<9;p++)i.add(St(.06,.06,.18,["#E2443A","#2FA37A","#F2A33A"][p%3],-2.5+p*.22,1.67,-6.75,{seg:10,out:.004}));let x=no(4);x.position.set(5,0,-2.6),i.add(x);let g=no(7);g.position.set(-5,0,-.6),i.add(g);for(let p=0;p<3;p++)ds(i,-5.4,1.9+p%2*.5,-2.6+p*.7,.45,.35,(_,y,v)=>{_.fillStyle=["#F2C14E","#8FD3C1","#E8A0B8"][p],_.fillRect(0,0,y,v),_.fillStyle="#C9472F",_.beginPath(),_.arc(y/2,v*.55,v*.3,0,7),_.fill(),_.fillStyle="#F2C14E",_.beginPath(),_.arc(y/2,v*.55,v*.24,0,7),_.fill()},Math.PI/2);return{C:e,forno:r,rel:d,tel:h,caixa:c}}function Ni(i={}){let t=new nt,e=9,n=Ht(256,256,d=>{d.fillStyle="#F6E7C8",d.fillRect(0,0,256,256)});t.add(Q(e,4.2,6,"#F6E7C8",0,2.1,-3,{r:.05}));let s=Ht(1024,200,d=>{d.fillStyle="#2FA37A",d.fillRect(0,0,1024,200),d.fillStyle="#FFD24A",d.font="900 110px Inter",d.textAlign="center",d.fillText("PIZZARIA DO JORGE",512,140)}),r=new it(new We(e-.6,1,.2),[Tt("#2FA37A"),Tt("#2FA37A"),Tt("#2FA37A"),Tt("#2FA37A"),ge(s),Tt("#2FA37A")]);r.position.set(0,3.5,.12),t.add(r);let o=Ht(512,128,d=>{for(let h=0;h<12;h++)d.fillStyle=h%2?"#E2443A":"#F4F1EA",d.fillRect(h*512/12,0,512/12,128)}),a=new it(new Dt(e-.6,1.1),ge(o,{side:_e}));a.position.set(0,2.75,.6),a.rotation.x=-.9,t.add(a);let l=Tt(i.noite?"#FFD98A":"#8DB8D8");t.add(Q(2.6,1.8,.06,l,-2.6,1.3,.02,{r:.02})),t.add(Q(2.6,1.8,.06,l,2.6,1.3,.02,{r:.02}));let c=Q(1.3,2.3,.06,i.noite?"#FFE3A8":"#6E9EC0",0,1.15,.03,{r:.02});if(t.add(c),t.add(Qt(e+.4,.2,2.5,"#C9C2B6",0,.1,1.2)),i.noite){let d=new Pn("#FFD99A",10,9,1.6);d.position.set(0,2.2,1.6),t.add(d)}return t}function Ns(i,t={}){let e=Ar(i,{w:8,d:6,parede:t.noite?"#9FB6C8":"#DDEBF0",parede2:t.noite?"#93AABD":"#D2E3EA",tipoPiso:"grade",piso1:"#E8EEF0",piso2:"#CBD6DA",meiaParede:"#8FC9D8"}),n=new nt;n.add(Q(1.1,.5,2.1,"#C8CCD2",0,.4,0,{r:.05,out:.01})),n.add(Q(1.04,.16,2,"#FFFFFF",0,.72,0,{r:.07})),n.add(Q(1.06,.12,1.25,t.lencol||"#BFE0EE",0,.84,.35,{r:.06})),n.add(Q(.72,.2,.4,"#FFFFFF",0,.86,-.7,{r:.09,out:.006})),n.add(Q(1.1,.7,.06,"#9EA6B0",0,.85,-1.05,{r:.03,out:.008}));for(let u of[-.98,.98])for(let m of[-.48,.48])n.add(St(.03,.03,.4,"#9EA6B0",m,.2,u,{seg:8}));n.position.set(-.6,0,-3.6),i.add(n);let s=new nt;s.add(Q(.5,.4,.3,"#3A3A44",0,1.35,0,{r:.04,out:.008}));let r=new it(new Dt(.42,.3),new Xt({color:"#0E2A22"}));r.position.set(0,1.35,.16),s.add(r),s.add(St(.03,.03,1.2,"#9EA6B0",0,.6,0,{seg:8})),s.position.set(-1.9,0,-4.5),i.add(s);let o=Ac(i,1.9,1.8,-5.88,1.8,1.3,{c1:t.c1||"#8CCBF2",c2:t.c2||"#DDF2FB",cortina:"#8FC9D8"}),a=ro();a.position.set(-.6,2.45,-5.88),i.add(a),cs(i,.5,-3.4,-Math.PI/2,"#8FC9D8");let l=new nt;l.add(St(.08,.06,.2,"#F4F1EA",0,.1,0,{out:.005}));for(let u=0;u<3;u++)l.add(St(.006,.006,.25,"#4C9A44",(u-1)*.04,.3,0,{seg:4})),l.add(nn(.045,["#F28F6B","#F2C14E","#E8A0B8"][u],(u-1)*.05,.44,0,{seg:10}));l.position.set(1.2,.76,-4.9),i.add(l),wr(i,1.2,-4.9,.6,.5,.76,"#E8E2D6");let c=Lh(r,{bpm:64});as(i,(u,m)=>c(m));let d=new nt;d.add(St(.025,.025,2.1,"#C8CCD2",0,1.05,0,{seg:8})),d.add(Qt(.5,.03,.03,"#C8CCD2",0,2.08,0));let h=Q(.2,.3,.06,"#DDF2FB",.18,1.85,0,{r:.04,out:.006});d.add(h),d.add(St(.006,.006,1.1,"#DDF2FB",.18,1.15,0,{seg:4}));for(let u=0;u<4;u++)d.add(St(.02,.02,.3,"#9EA6B0",Math.cos(u*1.57)*.15,.03,Math.sin(u*1.57)*.15,{seg:4,rot:[0,0,Math.PI/2]}));d.position.set(-1.6,0,-3.2),i.add(d);let f=Q(.06,2.2,2.4,"#C9E4EC",-3.4,1.3,-3.4,{r:.02});i.add(f);for(let u=0;u<6;u++)i.add(Qt(.08,2.2,.02,"#B6D6E0",-3.36,1.3,-4.5+u*.44));return i.add(Q(.7,.2,.45,"#F4F1EA",3.6,.95,-5.6,{r:.05,out:.008})),i.add(St(.02,.02,.25,"#C8CCD2",3.6,1.15,-5.75,{seg:6})),{C:e,cama:n,mon:s,tela:r,jan:o,rel:a}}var ao=6.58,Oa=(i,t)=>(i.torsoG.add(t),t.position.set(0,.02,.31),t.rotation.y=0,{shL:[42,12],shR:[42,12],elL:72,elR:72}),Xh=(i,t=0)=>({bob:-.28,lean:38,hipL:[85,10],hipR:[85,10],knL:125,knR:125,shL:[150+Math.sin(i*9+t)*3,25],shR:[150,25],elL:115,elR:115,headX:25});function lo(i,t){i.P.forEach((e,n)=>{t&&!e.q&&(Na(e.g,n+1),e.q=1)})}function za(i,t,e){let n=[];return i.P.forEach(s=>{if(s.z<t||s.z>e)return;let r=s.s*18.4;for(let o=0;o<3;o++)n.push({p:[r,6+o*9,s.z],n:[-s.s,0,0],w:s.d*.9,h:8})}),n}function Rr(i,t){i.carros.forEach(({k:e,s:n,z0:s,v:r})=>{let o=((s-20+n*-r*t)%220+440)%220-200+20;e.position.z=o,e.userData.rodas.forEach(a=>a.rotation.x=t*r/.36*-n)})}function Cr(i,t,e=-1){i.gente.forEach(({k:n,s,z0:r,ph:o,dir:a},l)=>{if(e>=0&&t>e){n.pose(Xh(t,o)),z(n,null,t,"medo");return}let c=r-a*t*1.3;n.root.position.z=c,n.root.rotation.y=a>0?Math.PI:0,n.pose(te(t,1.7,1,o)),z(n,null,t,"neutro")})}function Ng(i,t){return K(i,t,{},e=>{let n=Ne(e,{nGente:18});return(s,r,o)=>(Rr(n,s),Cr(n,s),et(o,[[0,[10,42,46]],[5,[6,24,22]]],[[0,[0,12,-70]],[5,[0,6,-60]]],r),{})})}function Og(i,t){return K(i,t,{},e=>{let n=Ne(e,{nGente:18}),s=Is(e,za(n,-70,10),{n:900,v:10,size:.35,fade:9}),r=io(e,[0,1,-40],{r:90,dur:1.4}),o=dn("#FFFFFF",30,0);return o.position.set(0,6,-40),e.add(o),(a,l,c)=>{let d=a-ao;return Rr(n,Math.min(a,ao)+Math.max(0,d)*.25),Cr(n,a,ao+.1),lo(n,d>.05),s(d>0?d*.45:-1),r(d),o.material.opacity=d>0?Math.max(0,.9-d*2):0,Di(c,[[0,[-4,2.2,6]],[4.5,[-5,2.6,2]]],[[0,[12,14,-40]],[4.5,[10,9,-40]]],l,d>0?.25*Math.exp(-d*1.6):0,a),{flash:d>0&&d<.25?.5*(1-d/.25):0}}})}function zg(i,t){return K(i,t,{},e=>{let n=Ne(e,{nGente:18});lo(n,1);let s=Is(e,za(n,-40,10),{n:700,v:6,size:.3,fade:12,seed:3}),r=[];n.carros.slice(0,8).forEach(({k:a})=>{let l=dn("#FFB040",1.4,0);l.position.set(0,.8,2),a.add(l),r.push(l);let c=dn("#FFB040",1.4,0);c.position.set(0,.8,-2),a.add(c),r.push(c)});let o=[];for(let a=0;a<5;a++){let l=In(a+3,{simples:!1});l.place(14+a%3*1.4,-6-a*1.6,0,-Math.PI/2+.3),e.add(l.root),o.push(l)}return(a,l,c)=>(Rr(n,ao),Cr(n,a,0),s(2.2+l*.45),r.forEach((d,h)=>d.material.opacity=(Math.floor(a*3)+h)%2?.9:0),o.forEach((d,h)=>{let f=yt(.2+h*.25,.9+h*.25,l);d.pose(Li(te(l,1.6,1,h),Xh(l,h),f)),z(d,null,a,f>.5?"medo":"surpreso",{look:[-.5,-.3]})}),Di(c,[[0,[9,1.4,2]],[5.2,[8.2,1.2,-1]]],[[0,[14,1,-9]],[5.2,[14,.9,-9]]],l,.04,a),{})})}function kg(i,t){return K(i,t,{},e=>{let n=Ne(e,{nGente:18,carros:10});lo(n,1);let s=Is(e,za(n,-40,0),{n:500,v:5,size:.3,fade:30,seed:5}),r=Y(e,ht,-4,-20),o=sn(),a=Oa(r,o),l=ls(e,[[-4,.2,-26],[4,.2,-30]],{n:18,sp:10,size:3,life:7,op:.35}),c=[];for(let d=0;d<10;d++){let h=new it(new Dt(.25,.32),new ze({color:"#F4F1EA",side:_e}));e.add(h),c.push(h)}return(d,h,f)=>(Rr(n,ao),Cr(n,d,0),s(8+h*.3),l(h*.7+.6),c.forEach((u,m)=>{let x=(h*.12+m/10)%1;u.position.set(-3+m*.7+Math.sin(h+m)*.5,4-x*4,-18-m*.6),u.rotation.set(h*2+m,h+m,0)}),r.pose({...a,...dt(h,0,.4),headY:Math.sin(h*1.1)*18*yt(1.5,2.5,h)}),z(r,null,d,h<3?"surpreso":"medo",{look:[Math.sin(h*1.1)*.6,0]}),Di(f,[[0,[-4.5,5,6]],[4,[-4.2,2,-12]],[6.95,[-4.1,1.45,-16.2]]],[[0,[-4,1,-20]],[6.95,[-4,1.1,-20]]],h,.01,d),{})})}function Hg(i,t){return K(i,t,{},e=>{let n=Ne(e,{nGente:6,carros:6});lo(n,1);let s=Y(e,ht,-4,-20),r=sn(),o=Oa(s,r);return(a,l,c)=>{let d=yt(1.9,2.4,l);return s.pose({...o,...dt(l,0,.4),headX:28*d}),z(s,null,a,d>.5?"preocupado":"surpreso",{look:[0,d*.9]}),et(c,[[0,[-3.3,1.12,-17.9]],[3.6,[-3.45,1.1,-18.2]]],[[0,[-4,1.05,-20]],[3.6,[-4,.95,-20]]],l),{}}})}function Gg(i,t){let e=Y(i,ht,0,0,Math.PI),n=sn();e.hands.R.add(n),n.position.set(0,-.08,.05),n.rotation.x=Math.PI/2;let s=so(e.root,{r:.9,l:2.2,y:.85}),r=Gn(i);return{A:e,V:s,Rr:r}}function Vg(i,t){return K(i,t,{},e=>{let n=Ne(e,{nGente:14}),{A:s,V:r,Rr:o}=Gg(e,n),a=io(e,[0,1,-30],{r:70,dur:1.2});return(l,c,d)=>{Rr(n,l*.05),Cr(n,0);let h=30-c*40;return s.root.position.set(-4,0,h),s.pose(Le(c*.3,2.9,1.1)),z(s,null,l,"determinado"),r(yt(.3,.6,c)),o(-4,0,h,0,-1,9,1),a(c-1.9),et(d,[[0,[-.6,1.2,h-5.5]]],[[0,[-4,1,h+.5]]],0),{}}})}function Wg(i,t){return K(i,t,{},e=>{let n=Ne(e,{nGente:14}),s=Is(e,za(n,-60,10),{n:700,v:10,size:.35,fade:99}),r=Y(e,ht,-4,-20),o=sn(),a=Oa(r,o);return(l,c,d)=>{let h=Math.max(0,1.6-c*1.2);return s(h*.5),c<.05&&lo(n,1),Rr(n,-c*30),Cr(n,-c*3),r.pose({...a}),z(r,null,l,"surpreso"),et(d,[[0,[-4,2,-13]],[1.75,[-2,8,6]]],[[0,[-4,1.1,-20]],[1.75,[0,4,-40]]],c),{sat:.2,tint:"#C8D8FF",exposure:1.12,vig:.6}}})}function Xg(i,t){return K(i,t,{},e=>{fe(e);let n=Bi();n.rotation.y=Math.PI/2,e.add(n);let s=Y(e,ht,0,0,Math.PI/2,.15),r=Ln();s.torsoG.add(r),r.position.set(0,.25,-.27);let o=Y(e,{...vn,camisa:"#E89A6A",saia:"#8A5A36",oculos:!1,cabelo:"coque"},-3,-1.2,Math.PI/2),a=ti("gota",.22);return s.headG.add(a),a.position.set(-.32,.48,.1),(l,c,d)=>{let h=-2+c*.35;n.position.set(h,0,0),s.root.position.set(h-.14*0,.15,0),s.root.position.x=h-.14,Bs(n,c*.35),s.pose(os(c,.45)),z(s,null,l,"tedio");let f=-5+c*1.6;return o.root.position.x=f,o.pose(te(c,1.2,.6)),z(o,null,l,"feliz"),a.position.y=.48-c*.3%.3,et(d,[[0,[-.2,1.1,4.4]],[3.7,[.4,1.1,4.2]]],[[0,[-.6,.8,0]],[3.7,[.2,.8,0]]],c),{}}})}function qg(i,t){return K(i,t,{},e=>{fe(e,{seed:3});let n=new it(new Dt(.8,.8),new Xt({color:"#E2443A",side:_e}));n.rotation.z=Math.PI/4,e.add(n);let s=In(2);return s.place(-5.4,-6,0,.5),e.add(s.root),(r,o,a)=>(n.position.set(4+Math.sin(o)*.6,14+Math.sin(o*1.3)*.5,-30),s.pose(dt(o)),z(s,null,r,"feliz"),et(a,[[0,[-2.5,2.2,10]],[2,[-2.2,2,7.5]]],[[0,[8,2.2,-4]],[2,[8,2.2,-6]]],o),{})})}function Yg(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),_n(e).rel.set(7,40);let s=Y(e,vn,1,-4.8,Math.PI),r=[];for(let o=0;o<6;o++){let a=dn("#FFFFFF",.4,0,!1);e.add(a),r.push(a)}return(o,a,l)=>{let c=yt(.4,1,a);return s.root.rotation.y=Math.PI*(1-c),s.pose({...dt(a),shR:[c*40,20+c*100],elR:30+c*20,headZ:c*8*Math.sin(a*4)}),z(s,null,o,"feliz"),r.forEach((d,h)=>{let f=(a*.5+h/6)%1;d.position.set(1+Math.sin(h+a)*.1,1.3+f*.9,-5.55),d.material.opacity=.5*Math.sin(f*Math.PI),d.scale.setScalar(.3+f*.4)}),et(l,[[0,[-.2,1.6,-.5]],[2.35,[.2,1.5,-1.6]]],[[0,[.8,1.1,-4.8]],[2.35,[1,1.15,-4.8]]],a),{}}})}function Zg(i,t){return K(i,t,{},e=>{fe(e,{seed:5});let n=new nt;n.add(Q(8,4.2,.3,"#E8E2D6",0,2.1,-3)),n.add(Q(.3,4.2,3,"#3A3A44",-4,2.1,-1.5)),n.add(Q(.3,4.2,3,"#3A3A44",4,2.1,-1.5)),n.add(Q(8.3,.9,3.2,"#3A3A44",0,3.75,-1.5)),n.add(Q(8.3,.5,.4,"#3A3A44",0,.25,0));let s=new it(new Dt(7.6,2.8),new Xt({color:"#BFE3F2",transparent:!0,opacity:.22,depthWrite:!1}));s.position.set(0,1.9,.05),n.add(s);let r=new it(new Dt(8,3),Tt("#D9D2C4"));r.rotation.x=-Math.PI/2,r.position.set(0,.02,-1.5),n.add(r);let o=Ke(5,.8,(f,u,m)=>{f.fillStyle="#F2C14E",f.fillRect(0,0,u,m),f.fillStyle="#1B1420",f.font=`900 ${m*.6}px Inter`,f.textAlign="center",f.fillText("MOTOS ZL",u/2,m*.75)});o.position.set(0,3.75,.22),n.add(o);let a=Vh("#E2443A");a.position.set(.2,.02,-1.4),a.rotation.y=1.1,a.scale.setScalar(1.3),n.add(a);let l=Ke(.9,.5,(f,u,m)=>{f.fillStyle="#FFFFFF",f.fillRect(0,0,u,m),f.strokeStyle="#E2443A",f.lineWidth=12,f.strokeRect(6,6,u-12,m-12),f.fillStyle="#E2443A",f.font=`900 ${m*.34}px Inter`,f.textAlign="center",f.fillText("R$ 16.990",u/2,m*.62)});l.position.set(-1.2,1.3,-.6),n.add(l),n.position.set(-7.4,0,-6),n.rotation.y=Math.PI/2,e.add(n);let c=Bi();c.position.set(-4,0,-4.2),e.add(c);let d=Y(e,ht,-5.2,-6,-Math.PI/2),h=Ln();return d.torsoG.add(h),h.position.set(0,.25,-.27),(f,u,m)=>(d.pose({...dt(u),shL:[8,6],headX:4,headZ:-6}),z(d,null,f,u<1.3?"feliz":"triste",{look:[0,-.1]}),et(m,[[0,[-3.3,1.45,-8.9]],[3.5,[-3.6,1.4,-8.6]]],[[0,[-6.6,1.1,-5.6]],[3.5,[-6.6,1.1,-5.7]]],u),{})})}function $g(i,t){return K(i,t,{},e=>{fe(e,{seed:7});let n=Y(e,ht,1,-4,.3),s=Y(e,{...vn,camisa:"#8FD3C1",saia:"#2F68AE",oculos:!0},2.4,-4.6,-1.2),r=Q(.3,.35,.2,"#F2C14E",0,0,0,{out:.006});n.hands.L.add(r),r.position.set(0,-.2,0);let o=ti("coracao",.45);return e.add(o),(a,l,c)=>{n.pose({...dt(l),shL:[10,10],elL:10,shR:[30+Math.sin(l*6)*10,70],elR:30}),z(n,null,a,"feliz"),s.pose(dt(l,2)),z(s,null,a,"feliz");let d=yt(.5,.9,l);return o.position.set(1.7,1.62+l*.08,-4.3),o.scale.setScalar(.45*d*(1+.08*Math.sin(l*8))),et(c,[[0,[1.6,1.5,-.6]],[2.7,[1.7,1.4,-1.2]]],[[0,[1.6,1.1,-4.3]],[2.7,[1.6,1.1,-4.3]]],l),{}}})}function Jg(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),He(e).rel.set(6,42);let s=Y(e,un,.5,-2.2,.4),r=Y(e,ht,-3,-1,Math.PI/2);return(o,a,l)=>{s.pose({...dt(a),shL:[30,30],elL:120,shR:[30,30],elR:120,hipR:[Math.max(0,Math.sin(a*14))*8,0]}),z(s,null,o,"bravo",{look:[-.6,0]});let c=-3+a*1.6;return r.root.position.x=Math.min(c,-1),r.pose(c<-1?te(a,2.2):{lean:20,headX:15,shL:[20,8],shR:[20,8]}),z(r,null,o,"preocupado",{mouth:{open:.45+.25*Math.sin(a*12),round:.5}}),et(l,[[0,[-1.4,1.5,2.2]]],[[0,[-.6,1.1,-2]]],a),{}}})}function Qg(i,t){return K(i,t,{},e=>{fe(e,{seed:9});let n=new nt;n.add(Q(6,3.2,.3,"#9EC1E8",0,1.6,0)),n.add(Q(1.1,2.2,.06,"#5A3A22",-1.4,1.1,.2)),n.add(Q(1.4,1,.06,"#BFE3F2",1.4,1.7,.2,{r:.02})),n.position.set(2.5,0,-10.4),e.add(n);let s=Y(e,{camisa:"#2FB5A8",calca:"#4A3A2A",cabelo:"tigela",corCabelo:"#2A1E1A",pele:"#E3B28E",manga:"longa"},1.1,-9.8,0),r=Y(e,ht,1.1,-8.5,Math.PI),o=sn(),a=Oa(r,o);return(l,c,d)=>{let h=c<.9;return s.pose(h?{...dt(c),shL:[80,25],elL:95,headX:18,headY:10}:{...dt(c),shL:[10,8],shR:[25,25],elR:30}),z(s,null,l,"bravo",{look:h?[-.4,.9]:[0,0]}),r.pose({...a,...dt(c)}),z(r,null,l,"vergonha",{smile:.2}),et(d,[[0,[3.6,1.4,-8.2]],[1.6,[3.4,1.35,-8.4]]],[[0,[1,1.05,-9.2]],[1.6,[1,1.05,-9.2]]],c),{}}})}function Kg(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),_n(e).rel.set(11,50);let s=new nt;s.add(St(.32,.34,.22,"#8A5A36",0,.91,0,{out:.008})),s.add(St(.33,.33,.05,"#F4F1EA",0,1.03,0));for(let a=0;a<5;a++){let l=a/5*6.28;s.add(St(.012,.012,.06,"#F28F6B",Math.cos(l)*.18,1.07,Math.sin(l)*.18,{seg:6}))}s.position.set(-.6,0,-2.6),e.add(s);let r=[];[[vn,-1.6,-2.6,Math.PI/2],[{...un},-.6,-3.5,0],[ke,.4,-2.6,-Math.PI/2]].forEach(([a,l,c,d],h)=>{let f=Y(e,a,l,c,d),u=new it(new ci(.12,.3,16),Tt(["#F2546E","#F2C14E","#3E7CC8"][h]));u.position.set(0,.62,0),f.headG.add(u),r.push(f)});let o=Y(e,ht,-4,-1.2,Math.PI/2);return(a,l,c)=>(r.forEach((d,h)=>{d.pose(h===1?dt(l*.3):Be({headX:12+Math.sin(l+h)*3})),z(d,null,a,l<1?"sono":"surpreso",{look:[-.8,0]})}),o.root.position.x=-4+Math.min(1,l)*1.2,o.pose(l<1?te(l,2):{...dt(l),shR:[40,60],elR:40}),z(o,null,a,"vergonha",{smile:.3}),et(c,[[0,[.5,1.8,1.5]]],[[0,[-1.6,1,-2.6]]],l),{})})}function jg(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:1.4});let n=_n(e),s=Y(e,ht,-3,-3.2,-Math.PI/2);return(r,o,a)=>(s.pose({...dt(o,0,.5),headX:4}),z(s,null,r,"triste",{look:[.1,-.2]}),et(a,[[0,[-1.2,1.55,-1.9]],[2.4,[-1.9,1.75,-2.4]]],[[0,[-3.4,1.5,-3.2]],[2.4,[-3.7,1.75,-3.2]]],o),{sat:jt(1,.7,yt(0,2.4,o)),vig:.35})})}function t3(i,t){return K(i,t,{bg:"#1E2648"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:.6,hemi:.65,sky:"#6A7AC0",key:"#9FB0FF"}),Dn(e,{noite:!0}).rel.set(3,12);let s=Y(e,ht,-2.2,-3.4);Us(s,-2.2,.62,-3.4,.25);let r=hi(.1,.2);r.position.set(-1.3,.8,-4.9),r.rotation.x=-Math.PI/2,e.add(r);let o=new Pn("#AFC8FF",0,2);return o.position.set(-1.3,1,-4.9),e.add(o),(a,l,c)=>{let d=Math.floor(l*4)%2;return r.paint("c"+d,(h,f,u)=>{h.fillStyle=d?"#2F7DC4":"#1B2550",h.fillRect(0,0,f,u),h.fillStyle="#FFFFFF",h.font="700 40px Inter",h.textAlign="center",h.fillText("V\xD3",f/2,u*.35),h.font="600 26px Inter",h.fillText("chamando...",f/2,u*.45)}),r.position.x=-1.3+(d?.01:-.01),o.intensity=d?2:.5,z(s,null,a,"sono",{blink:l<1.4?1:0}),s.pose({headY:l>1.4?25:0}),et(c,[[0,[-.7,1.9,-3]],[2.7,[-.9,1.7,-3.4]]],[[0,[-2,.75,-4.4]],[2.7,[-1.7,.8,-4.6]]],l),{tint:"#C8D4FF"}}})}function e3(i,t){return K(i,t,{bg:"#121A38"},e=>{fe(e,{noite:!0,seed:2});let n=Da(e,[-12,12,0,12,-40,8],{n:1400,vel:16}),s=Bi();s.rotation.y=Math.PI,e.add(s);let r=Y(e,ht,0,0,Math.PI,.15),o=Ke(4,1,(a,l,c)=>{a.fillStyle="#E2443A",a.fillRect(0,0,l,c),a.fillStyle="#FFFFFF",a.font=`900 ${c*.6}px Inter`,a.textAlign="center",a.fillText("+ HOSPITAL",l/2,c*.74)},{basic:!0});return o.position.set(-3,6,-60),e.add(o),(a,l,c)=>{n(a);let d=2-l*3;return s.position.set(0,0,d),r.root.position.set(0,.15,d+.14),Bs(s,l*3),r.pose(os(l,1.6)),z(r,null,a,"choro"),et(c,[[0,[1.6,1.3,d+3.2+l*3]],[3.1,[1.2,1.2,-5.8]]],[[0,[0,.9,-2]],[3.1,[0,.9,-9]]],l),{tint:"#B8C8FF",sat:.8}}})}function n3(i,t){return K(i,t,{bg:"#2A3450"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:.5,hemi:.6,sky:"#8A9AD0"}),Ns(e,{noite:!0,lencol:"#DDE6EC"}).rel.set(4,5);let s=Y(e,ht,1.2,-1.2,Math.PI+.3),r=Y(e,Ua,.2,-1.7,Math.PI*.75);return(o,a,l)=>(s.pose({...dt(a,0,.3),headX:10}),z(s,null,o,"choro",{look:[0,.3]}),r.pose({...dt(a),shR:[60,30],elR:40}),z(r,null,o,"triste"),et(l,[[0,[2.7,1.55,1.2]],[2.9,[2.5,1.5,.8]]],[[0,[-.5,.95,-3.4]],[2.9,[-.5,.95,-3.5]]],a),{tint:"#B8C8FF",sat:.6,vig:.5})})}function i3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>(Lt(e,{r:8,pos:[3,8,6],ki:1.2}),_n(e),(n,s,r)=>(et(r,[[0,[-2.6,2,-3.2]],[2.5,[-3.2,2,-3.2]]],[[0,[-3.9,2,-3.2]],[2.5,[-3.9,2,-3.2]]],s),{vig:.55,sat:.8})))}function s3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),_n(e).rel.set(17,52);let s=Y(e,vn,1.6,-4.5,Math.PI),r=Y(e,ht,3.4,-1.5,-Math.PI/2),o=Ln();return r.torsoG.add(o),o.position.set(0,.25,-.27),(a,l,c)=>{let d=3.4-l*3.2;r.root.position.x=d,r.pose(Le(l,2.6,.8)),z(r,null,a,"determinado");let h=yt(.6,1.3,l);return s.root.rotation.y=Math.PI*(1-h)+h*.5,s.pose(dt(l)),z(s,"lurdes",a,"neutro",{look:[-.6,0]}),et(c,[[0,[.6,1.6,2.4]],[2,[.4,1.55,2]]],[[0,[1.2,1,-3.2]],[2,[1,1,-3.2]]],l),{}}})}function r3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),_n(e);let n=Y(e,vn,1,-4.6,.4);return(s,r,o)=>(n.pose(hn("lurdes",s,{...dt(r),shL:[20,15],elL:60},.8)),z(n,"lurdes",s,"feliz",{olhosAbertos:!0,look:[-.5,0]}),et(o,[[0,[.3,1.35,-3]],[3.2,[.4,1.3,-3.25]]],[[0,[1,1.15,-4.6]],[3.2,[1,1.15,-4.6]]],r),{})})}function o3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]});let n=_n(e),s=Y(e,vn,.2,-3.4,-1.2),r=Y(e,ht,-3.2,-1.4,-Math.PI/2),o=Ln();return r.torsoG.add(o),o.position.set(0,.25,-.27),(a,l,c)=>{let d=yt(1.6,2.6,l);return r.root.position.x=-3.2-d*1.6,r.root.rotation.y=-Math.PI/2-(1-d)*.2,r.pose(l<1.6?{...dt(l),shR:[40+Math.sin(l*9)*15,80],elR:30}:te(l,2.2)),z(r,null,a,"feliz"),r.root.visible=d<.98,n.porta.rotation.y=Math.PI/2-.9*yt(1.4,1.8,l)*(1-yt(3,3.4,l)),s.pose({...dt(l),headZ:l>3.3?Math.sin(l*5)*8:0,headY:l>3.3?Math.sin(l*4)*14:0,shL:[25,15],elL:80,shR:[25,15],elR:80}),z(s,null,a,l>3.3?"feliz":"neutro",{look:[-.6,0]}),et(c,[[0,[1.8,1.6,.8]],[5.4,[1.3,1.5,.2]]],[[0,[-2.2,1,-2.4]],[5.4,[-1.6,1,-2.6]]],l),{}}})}function a3(i,t){return K(i,t,{bg:"#1E2648"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:.35,hemi:.45,sky:"#6A7AC0",key:"#9FB0FF"});let n=Dn(e,{noite:!0}),s=Y(e,ht,-2.2,-3.4);Us(s,-2.2,.62,-3.4,.25);let r=Ls(e,[-2.2,.7,-4.2],{size:2.2,n:40,alt:1.4}),o=new Pn("#FFD45A",0,5,1.4);return o.position.set(-2.2,1.4,-4),e.add(o),(a,l,c)=>{let d=a<75.1?59:0,h=a<75.1?23:0;n.rel.set(h,d,(a-73.64)*20%60);let f=yt(76.3,77,a);return r(l,f),o.intensity=1.1*f*(.8+.2*Math.sin(l*8)),z(s,null,a,"sono",{blink:1}),et(c,[[0,[.8,2.2,-.4]],[1.5,[1.2,2.4,-1]],[1.6,[-.6,1.6,-2]],[3.95,[-.9,1.4,-2.6]]],[[0,[1.6,2.3,-5.9]],[1.5,[1.6,2.3,-5.9]],[1.6,[-2.2,.7,-4]],[3.95,[-2.2,.7,-4.2]]],l),{bloom:.3*f+.18,bloomT:.85}}})}function l3(i,t){return K(i,t,{bg:"#1E2648"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:.4,hemi:.5,sky:"#6A7AC0",key:"#9FB0FF"}),Dn(e,{noite:!0});let n=Y(e,ht,-1.2,-2.6,.3),s=Ls(e,[-1.2,.8,-2.6],{size:1.8,n:24,ps:.5});return(r,o,a)=>{s(o,.5+.2*Math.sin(o*3));let l=yt(1,1.6,o);return n.pose({...dt(o),shL:[70*l,20],elL:70*l,shR:[70*l,20],elR:70*l,headX:22*l}),z(n,null,r,l>.5?"surpreso":"neutro",{look:[0,l*.9]}),et(a,[[0,[-.4,1.4,-.4]],[5.6,[-.7,1.35,-1.1]]],[[0,[-1.2,1.05,-2.6]],[5.6,[-1.2,1,-2.6]]],o),{bloom:.4,bloomT:.75}}})}function c3(i,t){return K(i,t,{},(e,n)=>{fe(e,{seed:11});let s=Y(e,ht,0,0,Math.PI),r=Hn(e,n.camera,{});return(o,a,l)=>{let c=o<87.7?1.4:o<88.7?2.8:o<90.1?5.6:11,d=(o-i)*1.4+Math.max(0,o-87.7)*1.4+Math.max(0,o-88.7)*2.8+Math.max(0,o-90.1)*5.4;s.root.position.z=-d;let h=o<88.7?0:o<90.1?.5:1;return s.pose(h===0?te(o,o<87.7?1.7:2.2):h===.5?Le(o,2.4,.7):Le(o,3.2,1)),z(s,null,o,h<1?"feliz":"surpreso"),et(l,[[0,[3.2,1.3,-d+1.5]]],[[0,[0,.9,-d-.5]]],0),r(o,o>90.1?.8:o>88.7?.35:0),{}}})}function d3(i,t){return K(i,t,{bg:"#1B1E3A"},e=>{e.add(new ts("#EAF2FF","#3A3050",1.4));let n=new di("#FFF4E2",1.6);n.position.set(3,6,5),e.add(n);let s=Y(e,ht,0,0);s.sombra.visible=!1;let r=ti("gota",.25);s.headG.add(r),r.position.set(.33,.52,.05);let a=[5,10,20,40,80,160,320,640,"1.280","2.560","5.120","10.240"].map((l,c)=>{let d=Ke(1.6,.7,(h,f,u)=>{h.fillStyle=c<4?"#F2C14E":c<8?"#F28F6B":"#E2443A",h.beginPath(),h.roundRect(4,4,f-8,u-8,40),h.fill(),h.lineWidth=10,h.strokeStyle="#1B1420",h.stroke(),h.fillStyle="#1B1420";let m=u*.5;h.font=`900 ${m}px Inter`;let x=h.measureText(l+" km/h").width;x>f*.84&&(m*=f*.84/x,h.font=`900 ${m}px Inter`),h.textAlign="center",h.fillText(l+" km/h",f/2,u*.5+m*.36)},{basic:!0,transp:!0});return e.add(d),d});return(l,c,d)=>(a.forEach((h,f)=>{let u=.25+f*.3,m=yt(u,u+.25,c);h.visible=m>.01;let x=f*2.4,g=1.4+f*.16;h.position.set(Math.cos(x)*g*1.3,1.5+Math.sin(x)*g*.5,-1.2-f*.35),h.scale.setScalar(m*(.55+f*.03)),h.lookAt(d.position)}),s.pose({...dt(c),headX:-14,shL:[10,15],shR:[10,15]}),z(s,null,l,"medo",{look:[Math.sin(c*2)*.6,-.6]}),r.position.y=.52-c*.25%.25,et(d,[[0,[0,1.5,3.2]],[4.3,[0,1.8,7]]],[[0,[0,1.3,0]],[4.3,[0,1.8,-1]]],c),{vig:.35})})}var qh=[[Ng,0,5],[Og,5,9.5],[zg,9.5,14.7],[kg,14.7,21.65],[Hg,21.65,25.3],[Vg,25.3,28.45],[Wg,28.45,30.2],[Xg,30.2,33.9],[qg,33.9,35.9],[Yg,35.9,38.25],[Zg,38.25,41.72],[$g,41.72,44.4],[Jg,44.4,45.7],[Qg,45.7,47.3],[Kg,47.3,49.4],[jg,49.4,51.8],[t3,51.8,54.5],[e3,54.5,57.6],[n3,57.6,60.54],[i3,60.54,63],[s3,63,65],[r3,65,68.2],[o3,68.2,73.64],[a3,73.64,77.6],[l3,77.6,83.25],[c3,83.25,90.98],[d3,90.98,95.27]];var h3=(i,t)=>(i.torsoG.add(t),t.position.set(0,.02,.31),{shL:[42,12],shR:[42,12],elL:72,elR:72}),Cc=(i,t)=>{i.hands.R.add(t),t.position.set(0,-.07,.06),t.rotation.set(Math.PI/2,0,0)},Vn=i=>{let t=Ln();return i.torsoG.add(t),t.position.set(0,.25,-.27),t},Yh=i=>(t,e,n)=>{t.fillStyle="#101018",t.fillRect(0,0,e,n),t.fillStyle="#7EC4F0",t.fillRect(0,n*.12,e,n*.42),t.fillStyle="#56585F",t.fillRect(0,n*.4,e,n*.14),t.fillStyle="#E2443A",t.beginPath(),t.arc(e*.55,n*.32,e*.06,0,7),t.fill(),t.fillStyle="#B5774C",t.beginPath(),t.arc(e*.55,n*.25,e*.05,0,7),t.fill(),t.fillStyle="rgba(255,255,255,.7)",t.fillRect(e*.1,n*.3,e*.38,6),t.fillRect(e*.15,n*.34,e*.3,6),t.fillStyle="#FFFFFF",t.font="800 21px Inter",t.textAlign="left",t.fillText("ENTREGADOR MAIS",18,n*.64),t.fillText("R\xC1PIDO QUE CARRO?!",18,n*.69),t.fillStyle="#F2546E",t.font="900 38px Inter",t.fillText("\u2665 "+i,20,n*.8),t.fillStyle="#AAB",t.font="600 24px Inter",t.fillText("visualiza\xE7\xF5es",20,n*.85)};function u3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]});let n=He(e),s=Y(e,un,-.4,-4.4),r=Y(e,ht,-4.6,-1.2,Math.PI/2);return Vn(r),(o,a,l)=>{n.rel.set(17,o<97.5?59:0,o*20%60);let c=Math.min(-1.6,-4.6+a*1.5);r.root.position.x=c,r.pose(c<-1.61?te(a,1.9):{...dt(a),shR:[40,20],elR:30,lean:-4}),z(r,null,o,"feliz");let d=yt(2.2,2.6,a);return s.pose({...dt(a),shL:[15*d,10],shR:[15*d,10],lean:-5*d}),z(s,null,o,d>.5?"surpreso":"neutro",{mouth:{open:.55*d,round:.8},look:[-.5,0]}),et(l,[[0,[-1.6,1.6,2.6]],[4.6,[-1,1.5,1.8]]],[[0,[-1.6,1,-2.6]],[4.6,[-1,1,-2.8]]],a),{}}})}function f3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),He(e);let n=Y(e,un,-.6,-2.4,-1),s=Y(e,ht,-1.6,-2,1.2);return Vn(s),(r,o,a)=>{let l=yt(.4,.8,o)*(1-yt(2.2,2.6,o));return n.pose(hn("jorge",r,{...dt(o),shR:[80*l,20+30*l],elR:40*l,lean:6*l},l>.1?0:1)),z(n,"jorge",r,"desconfiado",{look:[-.6,0]}),s.pose({...dt(o),headX:-4}),z(s,null,r,o<2.5?"feliz":"vergonha",{look:[.6,0]}),et(a,[[0,[-.6,1.5,-.2]],[4.6,[-.7,1.45,-.5]]],[[0,[-1,1.15,-2.3]],[4.6,[-1,1.15,-2.3]]],o),{}}})}function p3(i,t){return K(i,t,{},e=>{fe(e,{seed:13});let n=Ni();n.position.set(-12.5,0,-6),n.rotation.y=Math.PI/2,e.add(n);let s=Bi();e.add(s);let r=Y(e,ht,-5.6,-6,Math.PI/2);return Vn(r),(o,a,l)=>{let c=a>.9;s.position.set(-6.6,0,-5.3),s.rotation.set(0,Math.PI/2,c?jt(0,-.35,yt(.9,1.3,a)):0);let d=-5.6+Math.max(0,a-1.3)*3.5;return r.root.position.x=d,r.pose(a<1.3?{...dt(a),shL:[20,20],elL:20}:Le(a,2.7,.7)),z(r,null,o,a<1.3?"determinado":"feliz"),et(l,[[0,[-3,1.5,-1.8]],[2.5,[-1,1.4,-2.4]]],[[0,[-6,1,-6]],[2.5,[-2.5,1,-6]]],a),{}}})}function m3(i,t){return K(i,t,{},e=>{fe(e,{seed:15});let n=Y(e,ht,0,0,Math.PI),s=sn();Cc(n,s);let r=[];for(let o=0;o<5;o++){let a=dn("#FFFFFF",.25,0,!1);e.add(a),r.push(a)}return(o,a,l)=>{let c=-a*5.5;return n.root.position.set(-1.8,0,c),n.pose(Le(a,2.6,.75)),z(n,null,o,"feliz"),r.forEach((d,h)=>{let f=(a*1.2+h/5)%1;d.position.set(-1.8+.15,1+f*.5,c+.6+f*.4),d.material.opacity=.6*Math.sin(f*Math.PI)}),et(l,[[0,[1.5,1.3,c+2.5]]],[[0,[-1.8,.9,c-.5]]],0),{}}})}function g3(i,t){return K(i,t,{},e=>{fe(e,{seed:9});let n=new nt;n.add(Q(6,3.2,.3,"#F2C14E",0,1.6,0)),n.add(Q(1.1,2.2,.06,"#5A3A22",-1.4,1.1,.2)),n.add(Q(1.4,1,.06,"#BFE3F2",1.4,1.7,.2,{r:.02})),n.position.set(2.5,0,-10.4),e.add(n);let s=Y(e,{camisa:"#9B6CC4",calca:"#2A2A33",cabelo:"rabo",corCabelo:"#1C1416",pele:"#C98B5E",cilios:!0},1.1,-9.8,0),r=hi(.09,.18);s.hands.R.add(r),r.position.set(.02,.03,.08),r.rotation.set(-1.2,0,0);let o=Y(e,ht,1.1,-8.6,Math.PI),a=sn(),l=h3(o,a);return(c,d,h)=>(r.paint("p"+Math.floor(d*3)%4,(f,u,m)=>{f.fillStyle="#F4F1EA",f.fillRect(0,0,u,m),f.fillStyle="#2FA37A",f.font="800 30px Inter",f.textAlign="center",f.fillText("PAGAMENTO",u/2,m*.4),f.fillStyle="#56585F",f.font="600 26px Inter",f.fillText("processando"+".".repeat(Math.floor(d*3)%4),u/2,m*.5)}),s.pose({...dt(d),shR:[70,10],elR:80,headX:20*(1-yt(1.8,2.2,d))}),z(s,null,c,d<1.9?"neutro":"surpreso",{look:d<1.9?[0,.9]:[0,0]}),o.pose({...l,...dt(d)}),z(o,null,c,"feliz"),et(h,[[0,[4.1,1.4,-9.1]],[3.2,[3.9,1.38,-9.2]]],[[0,[1.1,1.05,-9.2]],[3.2,[1.1,1.05,-9.2]]],d),{})})}function x3(i,t){return K(i,t,{},(e,n)=>{fe(e,{seed:17});let s=Y(e,ht,0,0,Math.PI);Vn(s);let r=[];for(let a=0;a<3;a++){let l=Bi(["#3E7CC8","#F28F6B","#58B26A"][a]);l.rotation.y=Math.PI,e.add(l);let c=In(a+1);c.place(0,0,.15,Math.PI),e.add(c.root),r.push({b:l,k:c,z0:-4-a*6})}let o=Hn(e,n.camera);return(a,l,c)=>{let d=-l*11;return s.root.position.set(-1.6,0,d),s.pose(Le(l,3.2,1)),z(s,null,a,"feliz"),r.forEach(({b:h,k:f,z0:u},m)=>{let x=u-l*4.5;h.position.set(1.4-m*.1,0,x),Bs(h,l*4.5),f.root.position.set(1.4-m*.1,.15,x+.14),f.pose(os(l,1.2,m)),z(f,null,a,"surpreso",{look:[-.7,0]})}),et(c,[[0,[-4.2,1.2,d+1]]],[[0,[-1.6,.9,d-1.5]]],0),o(a,.3),{}}})}function v3(i,t){return K(i,t,{},(e,n)=>{fe(e,{seed:19});let s=Y(e,ht,0,0,Math.PI);Vn(s);let r=hi(.09,.18);s.hands.L.add(r),r.position.set(-.02,.02,.08),r.rotation.set(-1.2,0,0);let o=Y(e,{camisa:"#F2D24A",calca:"#2FA37A",cabelo:"careca",corCabelo:"#1C1416",pele:"#7A4A30",estampa:(l,c,d)=>{l.fillStyle="#FFFFFF",l.fillRect(c*.4,d*.35,c*.2,d*.25),l.fillStyle="#1B1420",l.font="900 60px Inter",l.textAlign="center",l.fillText("1",c/2,d*.54)}},0,0,Math.PI),a=Hn(e,n.camera);return(l,c,d)=>{let h=-c*11,f=yt(3,3.4,c);return s.root.position.set(-1,0,h),s.pose(Li(Le(c,3,1),{...Le(c,3,.6),shL:[60,10],elL:100},f)),z(s,null,l,f>.5?"tedio":"feliz",{look:f>.5?[0,.8]:[0,0]}),r.visible=f>.3,o.root.position.set(.4,0,h-.2+Math.sin(c*1.3)*.1),o.pose(Le(c,3.3,1.15,.3)),z(o,null,l,"surpreso",{mouth:{open:.7,round:.3},look:[-.7,0]}),et(d,[[0,[-.3,1.3,h-4.2]]],[[0,[-.3,.95,h]]],0),a(l,.35),{}}})}function Zh(i){let t=Ne(i,{alt:[8,14],antena:!1,nGente:4,carros:0}),e=Wh("RADIAL LESTE","#2E8B57");return e.position.set(-11.4,0,-14),e.rotation.y=Math.PI/2,e.scale.setScalar(1.6),i.add(e),t}function _3(i,t){return K(i,t,{},(e,n)=>{Zh(e);let s=[],r=["#F4F1EA","#2F4E86","#F2C14E","#3A3A44","#8FD3C1","#E8A0B8"];for(let d=0;d<6;d++){let h=Ui(r[d]);h.rotation.y=Math.PI,e.add(h),s.push({k:h,x:-2.2-d%2*3.1,z0:-6-d*9})}let o=Y(e,ht,0,0,Math.PI),a=sn();Cc(o,a);let l=Gn(e),c=Hn(e,n.camera);return(d,h,f)=>{let u=4-h*22;return o.root.position.set(-3.65,0,u),o.pose(Le(h,3.6,1.1)),z(o,null,d,"determinado"),l(-3.65,0,u,0,-1,4,.8),s.forEach(({k:m,x,z0:g})=>{let p=g-h*11;m.position.set(x,0,p),m.userData.rodas.forEach(_=>_.rotation.x=-h*11/.36)}),et(f,[[0,[-7.2,1.6,u+3]]],[[0,[-3.6,1,u-2]]],0),c(d,.5),{}}})}function y3(i,t){return K(i,t,{},e=>{Zh(e);let n=Y(e,{camisa:"#3E7CC8",calca:"#2A2A33",cabelo:"tigela",corCabelo:"#5A3020",pele:"#E8B48C",manga:"longa"},-12.6,-6,2.1),s=hi(.12,.24);n.hands.R.add(s),s.position.set(0,.02,.1),s.rotation.set(-1.4,0,0);let r=Y(e,ht,-6.8,0,Math.PI),o=sn();Cc(r,o);let a=Gn(e);return(l,c,d)=>{n.pose({...dt(c),shR:[95,10],elR:40,shL:[60,10],elL:60,headY:-20+c*25}),z(n,null,l,"surpreso",{look:[.3,0],mouth:{open:.5,round:.8}});let h=2-c*14;return r.root.position.z=h,r.pose(Le(c,3.6,1.1)),z(r,null,l,"feliz"),a(-6.8,0,h,0,-1,4,.8),s.paint("v",Yh("12 mil")),et(d,[[0,[-13.5,1.8,-4.7]],[1.6,[-13.4,1.75,-4.9]]],[[0,[-8.5,1,-8.5]],[1.6,[-8.5,1,-9.5]]],c),{}}})}function E3(i,t){return K(i,t,{},e=>{fe(e,{seed:21});let n=Ni();n.position.set(-12.5,0,-10),n.rotation.y=Math.PI/2,e.add(n);let s=[];for(let o=0;o<9;o++){let a=In(o,{simples:!0});a.place(-6.2+o%2*.3,-10+1.5+o*1,0,Math.PI),e.add(a.root),s.push(a)}let r=hi(1.1,2.2);return r.position.set(0,1.4,1.2),e.add(r),(o,a,l)=>{let c=yt(.3,1.4,a),d=Math.round(jt(12,2300,c*c));return r.paint("v"+d,Yh(d<1e3?d+" mil":(d/1e3).toFixed(1).replace(".",",")+" mi")),r.visible=a<1.45,s.forEach((h,f)=>{h.pose(dt(a,f)),z(h,null,o,f%3?"feliz":"neutro",{look:[0,0]})}),et(l,[[0,[0,1.4,5]],[1.45,[0,1.4,4.6]],[1.5,[-2.5,2.2,2]],[2.9,[-2.8,2,0]]],[[0,[0,1.4,1.2]],[1.45,[0,1.4,1.2]],[1.5,[-7,1.2,-6]],[2.9,[-7,1.2,-7]]],a),{}}})}function M3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),He(e);let n=Y(e,un,.2,-2.4,-.6),s=Y(e,ht,-1,-1.9,.9);return Vn(s),(r,o,a)=>{let l=Math.sin(o*5);return n.pose(hn("jorge",r,{...dt(o),shL:[30+40*Math.max(0,l),50],elL:40,shR:[30,50],elR:40,bob:Math.max(0,l)*.02},1.3)),z(n,"jorge",r,o<3.6?"feliz":"preocupado",{olhosAbertos:!0,look:[-.5,0]}),s.pose({...dt(o),shR:[40,40],elR:100}),z(s,null,r,"vergonha",{smile:.4,look:[.6,0]}),et(a,[[0,[-.2,1.45,.9]],[5.4,[-.3,1.4,.5]]],[[0,[-.3,1.1,-2.2]],[5.4,[-.3,1.1,-2.2]]],o),{}}})}function b3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),He(e);let n=Y(e,ke,-2.8,-4.3),s=Y(e,ht,3,-2.6,-Math.PI/2);Vn(s);let r=ti("coracao",.25);return e.add(r),(o,a,l)=>{let c=3-a*1.25;s.root.position.x=c,s.pose(te(a,1.9)),z(s,null,o,"feliz");let d=[yt(1.6,1.8,a)*(1-yt(2.2,2.4,a)),yt(3,3.2,a)*(1-yt(3.6,3.8,a)),yt(5.4,5.6,a)],h=Math.max(...d);return n.pose({...dt(a),headY:70*h,headX:-4*h,shL:[35,15],elL:70,shR:[35,15],elR:70}),z(n,null,o,h>.5?a>5.3?"apaixonado":"surpreso":"tedio",{look:[h,0]}),r.visible=a>5.6,r.position.set(-2.6,1.75+(a-5.6)*.2,-4.2),r.scale.setScalar(.25*yt(5.6,5.8,a)),et(l,[[0,[-.6,1.5,1.4]],[7.2,[-1.2,1.45,.4]]],[[0,[-1.4,1,-3.6]],[7.2,[-2.6,1.05,-4.2]]],a),{}}})}function S3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),He(e);let n=Y(e,ke,-2.6,-4.3,.5);return(s,r,o)=>(n.pose(hn("bia",s,{...dt(r),shL:[35,15],elL:80,headZ:6},.8)),z(n,"bia",s,"feliz",{olhosAbertos:!0,look:[.5,0]}),et(o,[[0,[-1.6,1.35,-2.7]],[4.3,[-1.7,1.33,-2.9]]],[[0,[-2.6,1.15,-4.3]],[4.3,[-2.6,1.15,-4.3]]],r),{})})}function T3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),He(e);let n=Y(e,ke,-2.6,-4.3,.5),s=Y(e,ht,-1.3,-2.7,-2.4);Vn(s);let r=ti("gota",.2);return s.headG.add(r),r.position.set(.34,.5,0),(o,a,l)=>(s.pose(hn("augusto",o,{...dt(a),shL:[150,25],elL:120,headZ:-6},.6)),z(s,"augusto",o,"vergonha",{olhosAbertos:!0,smile:.4,look:[-.4,0]}),r.position.y=.5-a*.2%.2,n.pose({...dt(a),shL:[35,15],elL:80,shR:[35,15],elR:80,headZ:8}),z(n,null,o,a>3.3?"desconfiado":"feliz",{look:[.4,0],smile:.5}),et(l,[[0,[-3.9,1.4,-2]],[4.5,[-3.7,1.38,-2.2]]],[[0,[-1.95,1.1,-3.5]],[4.5,[-1.95,1.1,-3.5]]],a),{})})}function A3(i,t){return K(i,t,{},e=>{let n=Ne(e,{alt:[10,20],antena:!1,nGente:16,carros:8}),s=Y(e,ht,-12.8,-4,Math.PI);return Vn(s),(r,o,a)=>(n.gente.forEach(({k:l,ph:c,dir:d,z0:h,s:f})=>{let u=h-d*o*1.3;l.root.position.z=u,l.root.rotation.y=d>0?Math.PI:0,l.pose(te(o,1.7,1,c)),z(l,null,r,"neutro")}),s.root.position.z=-4-o*1.2,s.pose(te(o,1.6)),z(s,null,r,o>3?"desconfiado":"neutro",{look:[Math.sin(o)*.5,0]}),et(a,[[0,[-14.4,1.4,-1.8]],[5.3,[-13.8,1.35,-7]]],[[0,[-12.8,1.2,-4.5]],[5.3,[-12.8,1.2,-10]]],o),{})})}function w3(i,t){return K(i,t,{},(e,n)=>{fe(e,{seed:23});let s=Y(e,ht,0,0,Math.PI);Vn(s);let r=dn("#9FE8FF",.8,0);s.headG.add(r),r.position.set(0,.3,.1);let o=Hn(e,n.camera),a=[];for(let l=0;l<40;l++){let c=nn(.03,"#D9CDB8",0,0,0,{seg:6});e.add(c),a.push(c)}return(l,c,d)=>{let h=yt(5.6,6.4,c),f=jt(14,.25,h),u=c<5.6?c:5.6+(c-5.6)*jt(1,.04,h),m=-u*14;s.root.position.set(-1.4,0,m),s.pose(Le(u,3.4,1.1)),z(s,null,l,h>.5?"surpreso":"determinado",{look:h>.5?[.6,0]:[0,0]}),r.material.opacity=yt(2.2,2.8,c)*(1-yt(5,6,c))*(.7+.3*Math.sin(c*12)),a.forEach((g,p)=>{g.position.set(-1.4+Math.sin(p*3.1)*1.2,.1+p%7*.12,m+.4+p%9*.25),g.visible=h>.1});let x=h*(c-5.6)*.6;if(et(d,[[0,[-4.2,1.3,m+1.2]]],[[0,[-1.4,1,m-1]]],0),h>0){let g=-1.2+x;d.position.set(-1.4+Math.sin(g)*3.2,1.3,m+Math.cos(g)*3.2),d.lookAt(-1.4,1,m)}return o(l,.45*(1-h)),{sat:jt(1.05,.8,h),tint:h>.5?"#E8F0FF":"#FFFFFF"}}})}function R3(i,t){return K(i,t,{bg:"#9AA6B8"},e=>{fe(e,{seed:25});let n=Da(e,[-6,6,0,6,-18,4],{n:1500,vel:14,l:.35}),s=Y(e,ht,0,0,Math.PI);Vn(s);let r=[];for(let l=0;l<3;l++){let c=Ui(["#E2443A","#3A3A44","#F2C14E"][l]);c.position.set(1.8,0,-6-l*7),e.add(c),r.push(c)}let o=Y(e,{camisa:"#E57AA0",calca:"#3A3550",cabelo:"rabo",corCabelo:"#5A3020",pele:"#E8B48C",cilios:!0},-2.6,-9,Math.PI/2),a=Ke(1.6,.7,(l,c,d)=>{l.fillStyle="#FFFFFF",l.beginPath(),l.roundRect(6,6,c-12,d-40,40),l.fill(),l.lineWidth=8,l.strokeStyle="#1B1420",l.stroke(),l.fillStyle="#1B1420",l.font=`800 ${d*.26}px Inter`,l.textAlign="center",l.fillText("Ooooiii...",c/2,d*.52)},{basic:!0,transp:!0});return e.add(a),(l,c,d)=>(n(100+c*.02,1),s.root.position.set(-.8,0,-4-c*.9),s.pose(te(c,1.5)),z(s,null,l,c<3?"surpreso":"feliz",{look:[Math.sin(c*.8)*.7,-.2]}),r.forEach((h,f)=>{h.position.z=-6-f*7+c*.25,h.userData.rodas.forEach(u=>u.rotation.x=c*.7)}),o.pose({...dt(c*.05),shR:[40,30],elR:40}),z(o,null,l,"feliz",{mouth:{open:.5+.1*Math.sin(c*.5),round:.9},blink:0}),a.position.set(-2.4,2.1,-9),a.lookAt(d.position),a.visible=c>3.5,a.scale.setScalar(yt(3.5,3.8,c)),et(d,[[0,[.6,1.5,-.6]],[7,[.2,1.4,-4.6]]],[[0,[-.8,1.1,-4.5]],[7,[-1.4,1.1,-10]]],c),{tint:"#E8EEFF",sat:.85})})}function C3(i,t){return K(i,t,{bg:"#A9C9E6"},e=>{Lt(e,{r:6,pos:[3,8,6]});let n=new it(new Dt(10,10),Tt("#B98A5E"));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n);let s=new nt,r=Q(.4,.3,.7,"#F4F1EA",0,.2,0,{r:.12,out:.012});s.add(r),s.add(Q(.42,.08,.74,"#E2443A",0,.05,0,{r:.03,out:.01}));let o=Q(.36,.16,.25,"#F4F1EA",0,.13,.3,{r:.08,out:.01});s.add(o);for(let c=0;c<3;c++)s.add(Q(.22,.02,.04,"#E2443A",0,.36,-.05+c*.1,{r:.01}));s.rotation.y=.6,e.add(s);let a=new it(new Qn(.6,32),Tt("#ECE6DA"));a.rotation.x=-Math.PI/2,a.position.set(.05,.004,.05),e.add(a);let l=[];for(let c=0;c<8;c++){let d=dn("#9C968C",.3,0,!1);e.add(d),l.push(d)}return(c,d,h)=>{let f=yt(0,2.2,d);return r.scale.set(1+f*.2,1-f*.55,1+f*.1),r.position.y=.2-f*.08,a.scale.setScalar(.6+f*.5),l.forEach((u,m)=>{let x=(d*.5+m/8)%1;u.position.set(Math.sin(m*2)*.15,.35+x*1.1,Math.cos(m*2)*.15),u.material.opacity=.45*Math.sin(x*Math.PI),u.scale.setScalar(.25+x*.5)}),et(h,[[0,[1,.85,1.3]],[2.4,[.8,.7,1.05]]],[[0,[0,.15,0]],[2.4,[0,.15,0]]],d),{}}})}function P3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),_n(e),cs(e,-.6,-1.85,Math.PI);let n=Y(e,ht,-.6,-1.9,Math.PI);for(let r=0;r<12;r++){let o=sn();o.position.set(-1.1+r%2*.05,.82+Math.floor(r/2)*.062+r%2*.03,-2.75+r%2*.5),o.rotation.y=r*.3,e.add(o)}let s=new it(new ci(.12,.02,3),Tt("#F2C14E"));return s.rotation.x=Math.PI/2,n.hands.R.add(s),s.position.set(0,-.08,.1),(r,o,a)=>{let l=(Math.sin(o*7)+1)/2;return n.pose(Be({shR:[70+20*l,15],elR:110+10*l,shL:[40,10],elL:50,headX:-4})),n.root.position.y=.13,z(n,null,r,"feliz",{mouth:{open:.2+.5*l,round:.2}}),et(a,[[0,[-.2,1.45,-4.6]],[3,[-.3,1.4,-4.3]]],[[0,[-.6,1,-1.9]],[3,[-.6,1,-1.9]]],o),{}}})}function F3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]});let n=_n(e),s=Y(e,ht,-4.05,-2.2,Math.PI/2),r=Y(e,vn,-3.5,-2.85,-1),o=Ke(.3,1.2,(a,l,c)=>{a.strokeStyle="#5A3A22",a.lineWidth=6,a.font="700 22px Inter",a.fillStyle="#5A3A22";for(let d=0;d<6;d++){let h=c*(.15+d*.14);a.beginPath(),a.moveTo(l*.2,h),a.lineTo(l*.8,h),a.stroke()}},{transp:!0});return o.position.set(-4.39,1.2,-1.75),o.rotation.y=Math.PI/2,e.add(o),(a,l,c)=>(s.pose({...dt(l,0,.3),shL:[5,4],shR:[5,4]}),z(s,null,a,"vergonha",{look:[.6,0],smile:.3}),r.pose({...dt(l),shR:[150,20],elR:30,headX:-15}),z(r,null,a,"feliz",{look:[-.3,-.8]}),et(c,[[0,[-1.7,1.45,-.6]],[2.9,[-1.9,1.42,-.8]]],[[0,[-3.8,1.15,-2.4]],[2.9,[-3.8,1.15,-2.4]]],l),{})})}function I3(i,t){return K(i,t,{},e=>{fe(e,{seed:27});let n=Y(e,ht,0,-3,0);Vn(n);let s=ls(e,[[0,.2,-3]],{n:22,sp:1.6,size:1.6,life:2.6,op:.7}),r=Gn(e);return(o,a,l)=>{let c=yt(4.1,4.35,a);n.root.visible=c<.99,n.root.position.x=-c*14,n.root.rotation.y=c>0?-Math.PI/2:0;let d=yt(.6,1,a)*(1-yt(3.8,4.1,a));return n.pose(c>0?Le(a,3.6,1.2):{...dt(a),shR:[70*d,20+40*d],elR:90*d}),z(n,null,o,"feliz",{olhosAbertos:a>2.2,smile:.8}),r(n.root.position.x,0,-3,-1,0,6,c>0&&c<1?1-c*.6:0),s(a-4.15),et(l,[[0,[0,1.3,1.2]],[4,[0,1.25,.6]]],[[0,[0,1.1,-3]],[4,[0,1.1,-3]]],a),{}}})}var $h=[[u3,95.27,99.9],[f3,99.9,104.5],[p3,104.5,107],[m3,107,111.6],[g3,111.6,114.8],[x3,114.8,117],[v3,117,121.4],[_3,121.4,125.5],[y3,125.5,127.1],[E3,127.1,130],[M3,130,135.97],[b3,135.97,143.2],[S3,143.2,147.5],[T3,147.5,152],[A3,152,157.3],[w3,157.3,165.2],[R3,165.2,172.2],[C3,172.2,174.6],[P3,174.6,177.6],[F3,177.6,180.5],[I3,180.5,188.5]];var hs=i=>{let t=Ln();return i.torsoG.add(t),t.position.set(0,.25,-.27),t},Jh=(i,t)=>{i.hands.R.add(t),t.position.set(0,-.07,.06),t.rotation.set(Math.PI/2,0,0)},L3=(i,t=0)=>({bob:-.28,lean:38,hipL:[85,10],hipR:[85,10],knL:125,knR:125,shL:[150+Math.sin(i*9+t)*3,25],shR:[150,25],elL:115,elR:115,headX:25});function D3(i="#E2443A"){let t=new nt;t.add(Q(.8,.35,3.4,i,0,.35,0,{r:.15,out:.012})),t.add(Q(.5,.3,.8,"#1E1E26",0,.6,-.2,{r:.12})),t.add(Q(1.9,.06,.45,i,0,.22,1.75,{r:.02,out:.01})),t.add(Q(1.4,.35,.1,i,0,.78,-1.6,{r:.03,out:.01})),t.add(Q(.08,.4,.4,"#1E1E26",-.6,.55,-1.6)),t.add(Q(.08,.4,.4,"#1E1E26",.6,.55,-1.6));let e=new ln(.34,.34,.36,18);e.rotateZ(Math.PI/2);let n=[];for(let[r,o]of[[-.75,1.2],[.75,1.2],[-.8,-1.15],[.8,-1.15]]){let a=jn(e,"#1E1E26",{pos:[r,.34,o],out:.01});t.add(a),n.push(a)}t.userData.rodas=n;let s=Ke(.5,.3,(r,o,a)=>{r.fillStyle="#FFFFFF",r.beginPath(),r.arc(o/2,a/2,a*.45,0,7),r.fill(),r.fillStyle="#1B1420",r.font=`900 ${a*.6}px Inter`,r.textAlign="center",r.fillText("7",o/2,a*.72)});return s.position.set(.41,.4,.3),s.rotation.y=Math.PI/2,t.add(s),t}function U3(){let i=Ui("#F4F1EA");i.scale.set(1.15,1.35,1.2);let t=Ke(1.8,.5,(n,s,r)=>{n.fillStyle="#E2443A",n.fillRect(0,0,s,r),n.fillStyle="#FFFFFF",n.font=`900 ${r*.55}px Inter`,n.textAlign="center",n.fillText("TV NOT\xCDCIA",s/2,r*.72)});t.position.set(.92,.65,0),t.rotation.y=Math.PI/2,i.add(t);let e=new it(new he(.45,24,12,0,Math.PI*2,0,1),Tt("#E8E4DA",{side:_e}));return e.position.set(0,1.75,-.5),e.rotation.x=-.8,i.add(e),i.add(St(.04,.04,.4,"#9EA2AA",0,1.55,-.5)),i}function B3(i){let t=new nt;t.add(Q(1.9,1.15,.12,"#1E1E26",0,0,0,{r:.04,out:.012}));let e=Ht(960,560,i),n=new it(new Dt(1.78,1.03),new Xt({map:e}));return n.position.z=.065,t.add(n),t.add(St(.05,.05,.4,"#1E1E26",0,-.75,-.05)),t.add(Q(.6,.05,.3,"#1E1E26",0,-.95,-.05)),t}var N3=(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#7EC4F0"),n.addColorStop(1,"#D6EEF9"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="#9CC9E8";for(let s=0;s<6;s++)i.fillRect(40+s*150,60+s%2*30,110,e*.7);i.fillStyle="#56585F",i.fillRect(0,e*.66,t,e*.34),i.fillStyle="#E2443A",i.beginPath(),i.arc(t*.5,e*.52,38,0,7),i.fill(),i.fillStyle="#B5774C",i.beginPath(),i.arc(t*.5,e*.4,34,0,7),i.fill(),i.fillStyle="#1C1416",i.beginPath(),i.arc(t*.5,e*.36,30,Math.PI,0),i.fill(),i.fillStyle="#E2443A",i.fillRect(0,e*.74,t*.3,50),i.fillStyle="#FFFFFF",i.font="900 34px Inter",i.fillText("PLANT\xC3O",20,e*.74+37),i.fillStyle="#1B1420",i.fillRect(0,e*.74+50,t,80),i.fillStyle="#FFFFFF",i.font="800 40px Inter",i.fillText("GAROTO QUEBRA A BARREIRA DO SOM NA PAULISTA",20,e*.74+105)};function O3(i,t){return K(i,t,{},(e,n)=>{Ne(e,{alt:[12,20],antena:!1,nGente:0,carros:0});let s=D3();s.rotation.y=Math.PI,e.add(s);let r=Y(e,ht,0,0,Math.PI);hs(r);let o=Hn(e,n.camera),a=Gn(e);return(l,c,d)=>{let h=-c*40,f=yt(5.2,5.7,c);return s.position.set(-2.4,0,h-.2+Math.sin(c*2)*.2),s.userData.rodas.forEach(u=>u.rotation.x=-c*40/.34),r.root.position.set(-4.6,0,h),r.pose(Le(c,3.8,1.15)),z(r,null,l,f>.5?"triste":"determinado"),a(-4.6,0,h,0,-1,7,1),et(d,[[0,[-1,1,h-6]]],[[0,[-3.4,.8,h]]],0),o(l,.6),{sat:jt(1.05,.7,f)}}})}function z3(i){let t=He(i),e=Y(i,un,.6,-4.3),n=new it(new ln(.28,.28,.02,24),Tt("#F2E2B8"));n.position.set(.6,2.3,-4),n.rotation.set(.3,0,.2),i.add(n);let s=Y(i,ke,-2.6,-4.3,.3),r=[];for(let o=0;o<2;o++){let a=In(o+4);a.place(-3.6+o*6.5,-1.2+o*.3,0,o?-2.4:2.2),i.add(a.root),r.push(a)}return{Z:t,J:e,B:s,cl:r,massa:n}}function k3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]});let n=z3(e),s=Y(e,ht,2.6,-1.6,-2.2);return hs(s),(r,o,a)=>{n.Z.rel.set(19,42,10+o*.015625*60),n.J.pose({shL:[150,20],elL:20,shR:[150,20],elR:20,headX:-20}),z(n.J,null,r,"feliz",{lento:.02,blink:0,look:[0,-.8]}),n.B.pose({shR:[40,15],elR:60}),z(n.B,null,r,"neutro",{lento:.02,blink:.5}),n.cl.forEach((d,h)=>{d.pose(te(1+h,1.7)),z(d,null,r,"feliz",{lento:.02,mouth:{open:.5,round:.2},blink:0})});let c=2.6-o*.5;return s.root.position.x=c,s.pose(te(o,1.3,.7)),z(s,null,r,"triste",{look:[-.6,0]}),et(a,[[0,[2.6,1.7,1.8]],[5,[1.8,1.65,1.3]]],[[0,[-.2,1.3,-3.6]],[5,[-.4,1.3,-3.6]]],o),{sat:.75,tint:"#E6EEFF"}}})}function H3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),He(e);let n=Y(e,ke,-2.6,-4.3,.3),s=Y(e,ht,-1.6,-2.6,-2.6);hs(s);let r=Ke(1.8,.8,(l,c,d)=>{l.fillStyle="#FFFFFF",l.beginPath(),l.roundRect(6,6,c-12,d-50,46),l.fill(),l.beginPath(),l.moveTo(c*.25,d-46),l.lineTo(c*.18,d-6),l.lineTo(c*.38,d-46),l.fill(),l.lineWidth=8,l.strokeStyle="#1B1420",l.beginPath(),l.roundRect(6,6,c-12,d-50,46),l.stroke()},{basic:!0,transp:!0});e.add(r);let a=["A","u",".",".","."].map((l,c)=>{let d=Ke(.18,.26,(h,f,u)=>{h.fillStyle="#1B1420",h.font=`900 ${u*.8}px Inter`,h.textAlign="center",h.fillText(l,f/2,u*.8)},{basic:!0,transp:!0});return r.add(d),d.position.set(-.5+c*.2,.12,.02),d});return(l,c,d)=>(n.pose({shR:[40,15],elR:60}),z(n,null,l,"neutro",{lento:.02,mouth:{open:.35+.05*Math.sin(c*.4),round:.6},blink:0}),s.pose({...dt(c),hipR:[Math.max(0,Math.sin(c*16))*10,0],shL:[30,30],elL:120,shR:[30,30],elR:120}),z(s,null,l,"tedio",{look:[-.3,0]}),r.position.set(-2.3,2.15,-4.1),r.lookAt(d.position),a.forEach((h,f)=>{h.visible=c>1+f*1.6}),et(d,[[0,[.9,1.55,-3]],[7,[.75,1.52,-3.2]]],[[0,[-2.1,1.35,-3.6]],[7,[-2.1,1.35,-3.6]]],c),{sat:.8})})}function G3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),He(e);let n=Y(e,ke,-2.6,-4.3,.4);return(s,r,o)=>(n.pose({...dt(r*.1),shR:[40,15],elR:60}),z(n,"bia",s,"preocupado",{lento:.15,olhosAbertos:!0,blink:Math.min(1,br(s*.15,2)),look:[.4,0]}),et(o,[[0,[-1.75,1.33,-2.9]],[5.6,[-1.95,1.3,-3.25]]],[[0,[-2.6,1.15,-4.3]],[5.6,[-2.6,1.15,-4.3]]],r),{sat:.8,tint:"#E6EEFF"})})}function V3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),He(e);let n=Y(e,ke,-2.6,-4.3,.4),s=Y(e,ht,-1.6,-2.6,-2.6);hs(s);let r=ti("zzz",.1);e.add(r);let o=Ke(.9,.4,(a,l,c)=>{a.fillStyle="#F2C14E",a.font=`900 ${c*.7}px Inter`,a.textAlign="center",a.lineWidth=10,a.strokeStyle="#1B1420",a.strokeText("BZZZ",l/2,c*.75),a.fillText("BZZZ",l/2,c*.75)},{basic:!0,transp:!0});return e.add(o),(a,l,c)=>{n.pose({shR:[40,15],elR:60}),z(n,null,a,"preocupado",{lento:.02,mouth:{open:.3,round:.7},blink:0});let d=ye(595),h=ye(597),f=ye(599),u;a<213.6?u={...dt(l),shR:[30,20],elR:40}:a<d?u={...dt(l),shL:[20,20],shR:[20,20]}:a<h?u=Be({headX:8}):a<f?u={...dt(l),shL:[150,20],elL:150,shR:[150,20],elR:150,headZ:10}:u=Be({lean:-20,headX:-10,shL:[40,40],shR:[40,40]}),s.pose(u),s.root.position.y=a>=d&&a<h||a>=f?-.02:0;let m=a>212.7&&a<214.4;return z(s,null,a,a<d?"determinado":"tedio",{mouth:m?{open:.3+.6*(Math.floor(a*40)%2),round:.2}:void 0,look:[-.3,0]}),o.visible=m||a>214.4&&a<215.8,o.position.set(-2.1,1.9,-3.4),o.lookAt(c.position),r.visible=!1,et(c,[[0,[.9,1.5,-2.9]],[7.6,[.75,1.47,-3.1]]],[[0,[-2.1,1.05,-3.6]],[7.6,[-2.1,1.05,-3.6]]],l),{sat:.8}}})}function W3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:1.2,hemi:1}),He(e).rel.set(6,2);let s=new nt;e.add(s);let r=Y(e,ht,1.6,-.2,-.5);hs(r),cs(e,1.6,-.28,-.5);for(let[a,l]of[[-3.8,-1.2],[3.6,-1.4]])for(let c of[-1,1]){let d=new nt;d.add(Q(.44,.06,.42,"#9A6236",0,0,0,{r:.02})),d.add(Q(.44,.5,.05,"#9A6236",0,-.27,-.19,{r:.02}));for(let[h,f]of[[-1,-1],[1,-1],[-1,1],[1,1]])d.add(Q(.05,.45,.05,"#9A6236",h*.18,.23,f*.17,{r:.01}));d.position.set(a+c*.22,.84,l),d.rotation.z=Math.PI,e.add(d)}let o=Ke(.6,.3,(a,l,c)=>{a.fillStyle="#E2443A",a.fillRect(0,0,l,c),a.fillStyle="#FFFFFF",a.font=`900 ${c*.5}px Inter`,a.textAlign="center",a.fillText("FECHADO",l/2,c*.68)});return o.position.set(-4.6,2,-6.85),e.add(o),(a,l,c)=>(r.pose(Be({headX:10,shL:[30,10],elL:60,shR:[30,10],elR:60})),r.root.position.y=.13,z(r,null,a,"tedio",{look:[0,.3]}),et(c,[[0,[-.6,1.9,2.6]],[7.9,[.2,1.6,1.6]]],[[0,[1.4,.8,-.6]],[7.9,[1.5,.85,-.4]]],l),{sat:.7,exposure:.95})})}function X3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),He(e);let n=Y(e,ke,-1.9,-4.3,0),s=Y(e,ht,-1.9,-2.85,Math.PI);return hs(s),(r,o,a)=>{n.pose({...dt(o),shR:[80,2],elR:6}),z(n,null,r,"apaixonado",{look:[0,.2]});let l=yt(.5,2.5,o),c=yt(3.8,4.6,o),d=Math.sin(o*60)*2*l*(1-c);return s.pose({...dt(o),lean:10*l*(1-c),shL:[80*l*(1-c)+d,4],elL:6}),z(s,null,r,c>.5?"triste":"preocupado",{look:[0,.6]}),et(a,[[0,[.6,1.25,-3.55]],[6,[.45,1.22,-3.55]]],[[0,[-1.9,.95,-3.57]],[6,[-1.9,.95,-3.57]]],o),{}}})}function q3(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6]}),_n(e);let n=Y(e,vn,.4,-3.6,-1),s=Y(e,ht,-.9,-3,1.2);return(r,o,a)=>{n.pose({...dt(o),shL:[90,50],elL:20,shR:[90,50],elR:20}),z(n,null,r,"feliz",{olhosAbertos:!0,look:[-.5,0]});let l=yt(.6,1.4,o);return s.root.position.x=-.9-l*.4,s.pose({...dt(o),shL:[30*(1-l),30],shR:[30*(1-l),30],lean:-6*l}),z(s,null,r,l>.5?"triste":"feliz",{look:[.5,0]}),et(a,[[0,[-.2,1.45,-.4]],[2,[-.3,1.4,-.7]]],[[0,[-.3,1.05,-3.3]],[2,[-.3,1.05,-3.3]]],o),{}}})}function Y3(i,t){return K(i,t,{bg:"#1E2648"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:.6,hemi:.6,sky:"#6A7AC0",key:"#9FB0FF"}),Dn(e,{noite:!0}).rel.set(2,17);let s=nn(.25,"#FFF6D8",-.2,2.1,-6.2,{seg:16});s.material=new Xt({color:"#FFF6D8"}),e.add(s);let r=Y(e,ht,-2.2,-3.4);return Us(r,-2.2,.62,-3.4,.25),(o,a,l)=>{let c=Math.sin(a*1.4);return r.pose({headY:c*30}),z(r,null,o,"tedio",{olhosAbertos:!0,look:[0,-.4],blink:0}),et(l,[[0,[-2.1,1.95,-3.9]],[6.2,[-2.12,1.9,-4]]],[[0,[-2.2,1.1,-4.52]],[6.2,[-2.2,1.1,-4.52]]],a),{tint:"#C8D4FF"}}})}function Z3(i,t){return K(i,t,{},e=>{let n=Ne(e,{nGente:18});return(s,r,o)=>(n.carros.forEach(({k:a,s:l,z0:c,v:d})=>{a.position.z=c+l*-d*s*0}),et(o,[[0,[-2,30,40]],[2,[-2,26,34]]],[[0,[0,10,-60]],[2,[0,9,-60]]],r),{sat:.9})})}function $3(i,t){return K(i,t,{},(e,n)=>{let s=Ne(e,{nGente:18}),r=Y(e,ht,-4,0,Math.PI),o=sn();Jh(r,o);let a=so(r.root,{r:.9,l:2.2,y:.85}),l=Gn(e),c=Hn(e,n.camera);return(d,h,f)=>{let u=40-h*12;return r.root.position.z=u,r.pose(Le(h*.5,3.2,1.1)),z(r,null,d,"determinado"),a(yt(3.5,5.5,h)*.6),l(-4,0,u,0,-1,6,1),et(f,[[0,[-1.5,1.2,u-6]]],[[0,[-4,1,u]]],0),c(d,.3),{}}})}function J3(i,t){return K(i,t,{},e=>{let n=Ne(e,{nGente:18}),s=Y(e,ht,-4,0,Math.PI),r=sn();Jh(s,r);let o=so(s.root,{r:1,l:2.6,y:.85}),a=Gn(e),l=io(e,[-4,1,0],{r:80,dur:1.4}),c=hi(.09,.18);return s.hands.L.add(c),c.position.set(-.02,.02,.08),c.rotation.set(-1.2,0,0),(d,h,f)=>{c.paint("h",(p,_,y)=>{p.fillStyle="#1B2550",p.fillRect(0,0,_,y),p.fillStyle="#FFFFFF",p.font="800 70px Inter",p.textAlign="center",p.fillText("15:03",_/2,y*.4),p.fillStyle="#F2546E",p.font="700 28px Inter",p.fillText("ATRASADO!",_/2,y*.55)});let u=(d-i)*.12,m=10-u*30;s.root.position.z=m;let x=d<252.1;s.pose(x?{...Le(u*3,3.2,1.1),shL:[70,10],elL:110,headX:15}:Le(u*3,3.2,1.1)),z(s,null,d,x?"medo":"determinado",{look:x?[-.3,.8]:[0,0]}),c.visible=x;let g=yt(ye(697)-.2,ye(699),d);return o(g),a(-4,0,m,0,-1,5,.6+g*.4),l(d-(ye(700)+.1)),s.root.position.z=m,Di(f,[[0,[-1.6,1.25,m-3.6]]],[[0,[-4,1,m]]],0,d>ye(700)?.15*Math.exp(-(d-ye(700))*2):0,d),{flash:d>ye(700)+.1&&d<ye(700)+.35?.5:0}}})}function Q3(i,t){return K(i,t,{},e=>{let n=Ne(e,{nGente:18}),s=Is(e,(()=>{let r=[];return n.P.forEach(o=>{if(!(o.z<-60||o.z>20))for(let a=0;a<3;a++)r.push({p:[o.s*18.4,6+a*9,o.z],n:[-o.s,0,0],w:o.d*.9,h:8})}),r})(),{n:900,v:10,size:.35,fade:9,seed:11});return(r,o,a)=>{o>.05&&n.P.forEach((c,d)=>{c.q||(Na(c.g,d+5),c.q=1)}),s(o*.5);let l=yt(2.6,3.6,o);return n.gente.forEach(({k:c,ph:d},h)=>{c.pose(Li(L3(o,d),dt(o,d),l)),z(c,null,r,l>.5?"surpreso":"medo",{lento:.05})}),Di(a,[[0,[6,3,14]],[4,[5,3.5,10]]],[[0,[-2,8,-30]],[4,[-2,7,-30]]],o,.12*Math.exp(-o*1.5),r),{}}})}function K3(i,t){return K(i,t,{bg:"#F3E3C8"},e=>{Lt(e,{r:8,pos:[3,8,6]}),Ar(e,{w:8,d:6,parede:"#F3D9B0",tipoPiso:"madeira"});let n=B3(N3);n.position.set(0,1.5,-5.5),e.add(n);let s=new nt;s.add(Q(2.6,.45,.9,"#3E7CC8",0,.3,0,{r:.1,out:.01})),s.add(Q(2.6,.7,.25,"#3E7CC8",0,.7,.4,{r:.1,out:.01})),s.position.set(0,0,-1.4),e.add(s);let r=[];for(let o=0;o<3;o++){let a=In(o+2);a.place(-.8+o*.8,-1.45,.1,Math.PI),e.add(a.root),r.push(a)}return(o,a,l)=>(r.forEach((c,d)=>{c.pose(Be({headX:-6,shL:[20+30*(d===1),10],elL:40})),z(c,null,o,"surpreso",{lento:.05,mouth:{open:.5,round:.9}})}),et(l,[[0,[0,2.15,.4]],[3.4,[0,2,-.9]]],[[0,[0,1.35,-5]],[3.4,[0,1.45,-5]]],a),{})})}function j3(i,t){return K(i,t,{},e=>{fe(e,{seed:0});let n=U3();n.position.set(-6.6,0,-6),e.add(n);let s=Y(e,Ba,-4.4,-8.8,Math.PI/2+.6),r=St(.03,.03,.2,"#1E1E26",0,0,0);r.add(nn(.05,"#E2443A",0,.12,0)),s.hands.R.add(r),r.position.set(0,.05,.06);let o=Y(e,zh,-1.8,-10.6,-.6),a=hi(.09,.18);o.hands.R.add(a),a.position.set(.02,.1,.02),a.rotation.set(0,0,0);let l=Y(e,Ec,-3,-11.4,0),c=Y(e,Ec,-2.3,-12,0);return(d,h,f)=>(s.pose(hn(null,d,{...dt(h),shR:[70,15],elR:60})),z(s,null,d,"feliz",{mouth:{open:(Math.sin(h*11)+1)*.3,round:.2}}),o.pose({...dt(h),shR:[150,10],elR:150}),z(o,null,d,"surpreso",{mouth:{open:(Math.sin(h*9)+1)*.3,round:.5}}),l.pose(dt(h)),z(l,null,d,"neutro"),c.pose(dt(h,1)),z(c,null,d,"neutro"),et(f,[[0,[1.6,1.8,-3]],[4.8,[1,1.7,-4.4]]],[[0,[-3.4,1.1,-10]],[4.8,[-3,1.1,-10.5]]],h),{})})}function t5(i,t){return K(i,t,{},e=>{fe(e,{seed:21});let n=Ni();n.position.set(0,0,-12),e.add(n);let s=Y(e,ke,0,-11.4,0);return(r,o,a)=>(s.pose({...dt(o,0,.5),shL:[30,10],elL:60,shR:[30,10],elR:60}),z(s,null,r,"choro",{look:[.2,0]}),et(a,[[0,[-.5,2.2,-5]],[4.3,[0,1.4,-9.3]]],[[0,[0,2,-11.5]],[4.3,[0,1.15,-11.5]]],o),{sat:.9})})}function e5(i,t){return K(i,t,{},e=>{fe(e,{seed:21});let n=Ni();n.position.set(0,0,-12),e.add(n);let s=Y(e,ke,0,-11.4,0),r=Y(e,ht,.4,-10.6,Math.PI+.3);return hs(r),(o,a,l)=>(s.pose(hn("bia",o,{...dt(a,0,.5),shL:[30,10],elL:60},.5)),z(s,"bia",o,"choro",{olhosAbertos:!0,look:[.4,0]}),r.pose({...dt(a,0,.4),shR:[25,10],elR:30}),z(r,null,o,"triste",{look:[-.4,0]}),et(l,[[0,[-.9,1.4,-9.2]],[6.5,[-1,1.35,-9.5]]],[[0,[0,1.15,-11.4]],[6.5,[0,1.15,-11.4]]],a),{sat:.9})})}function n5(i,t){return K(i,t,{bg:"#151830"},e=>{e.add(new ts("#AFC0FF","#151830",1));let n=new di("#FFD99A",2);n.position.set(-3,4,3),e.add(n);let s=Y(e,ht,2.2,0,-.4);hs(s),s.sombra.visible=!1;let r=Ke(1.1,1,(o,a,l)=>{o.fillStyle="#FFFFFF",o.beginPath(),o.roundRect(10,10,a-20,l*.72,50),o.fill(),o.beginPath(),o.moveTo(a*.25,l*.7),o.lineTo(a*.2,l*.95),o.lineTo(a*.45,l*.7),o.fill(),o.fillStyle="#3E7CC8";for(let c=0;c<3;c++)o.beginPath(),o.arc(a*(.3+c*.2),l*.38,a*.06,0,7),o.fill()},{basic:!0,transp:!0});return r.position.set(1.2,2.1,.2),e.add(r),(o,a,l)=>(s.pose({...dt(a),shR:[60,40],elR:90,headZ:8}),z(s,null,o,"feliz",{look:[-.6,.2]}),r.scale.setScalar(yt(.2,.6,a)*(1+.05*Math.sin(a*4))),r.position.y=2.1+Math.sin(a*2)*.05,et(l,[[0,[1,1.4,4.4]],[10.6,[1.2,1.4,3.6]]],[[0,[1,1.3,0]],[10.6,[1.2,1.3,0]]],a),{vig:.5})})}var Qh=[[O3,188.5,194.2],[k3,194.2,199.2],[H3,199.2,206.3],[G3,206.3,211.9],[V3,211.9,219.5],[W3,219.5,227.4],[X3,227.4,233.4],[q3,233.4,235.4],[Y3,235.4,241.6],[Z3,241.6,243.6],[$3,243.6,249.6],[J3,249.6,256.4],[Q3,256.4,260.4],[K3,260.4,263.8],[j3,263.8,268.6],[t5,268.6,272.9],[e5,272.9,279.4],[n5,279.4,290]];var Kh=i=>{let t=Ln();return i.torsoG.add(t),t.position.set(0,.25,-.27),t};function ka(i,t=.6,e=.8){let n=document.createElement("canvas");n.width=600,n.height=800;let s=n.getContext("2d"),r=new gn(n);r.colorSpace=Ce;let o=new it(new Dt(t,e),new ze({map:r})),a=-1;return o.paint=l=>{let c=i.reduce((f,[,u],m)=>l>=u?m+1:f,0),d=c<i.length?0:1,h=c;if(h!==a){a=h,s.fillStyle="#FBF7EC",s.fillRect(0,0,600,800),s.strokeStyle="#C9D8EE",s.lineWidth=3;for(let f=0;f<14;f++)s.beginPath(),s.moveTo(30,90+f*52),s.lineTo(570,90+f*52),s.stroke();s.fillStyle="#2A3A7A",s.font="700 50px Caveat",i.slice(0,c).forEach(([f],u)=>s.fillText(f,44,82+u*104)),r.needsUpdate=!0}},o}function i5(i=3){let t=Ht(1024,512,r=>{r.fillStyle="#2E6FB8",r.fillRect(0,0,1024,512);let o=Pe(3);r.fillStyle="#5DAA4E";for(let a=0;a<14;a++){let l=o()*1024,c=100+o()*312;r.beginPath();for(let d=0;d<12;d++){let h=d/12*6.283,f=40+o()*70;r.lineTo(l+Math.cos(h)*f*1.4,c+Math.sin(h)*f)}r.fill()}r.fillStyle="#F4F1EA",r.fillRect(0,0,1024,30),r.fillRect(0,482,1024,30),r.fillStyle="rgba(255,255,255,.55)";for(let a=0;a<30;a++)r.beginPath(),r.ellipse(o()*1024,o()*512,40+o()*60,8+o()*10,0,0,7),r.fill()}),e=new nt,n=new it(new he(i,64,32),new ze({map:t,gradientMap:Tt("#fff").gradientMap}));e.add(n);let s=dn("#8FD0FF",i*2.6,.5);return e.add(s),e.userData.m=n,e}var us=[-.6,1.25,-4.18];function Pc(i){let t=Y(i,vn,-.6,-3.15);t.root.rotation.set(-Math.PI/2+.15,0,0),t.root.position.set(-.6,1.1,-3.15),t.sombra.visible=!1;let e=Q(1.04,.46,1.25,"#BFE0EE",-.6,1.02,-3.42,{r:.09,out:.01});return i.add(e),t}var Fc=(i,t,e=0)=>et(i,[[0,[us[0]+.1,us[1]+.82,us[2]+.5]],[8,[us[0]+.08-e,us[1]+.74,us[2]+.44]]],[[0,us],[8,us]],t);function s5(i,t){return K(i,t,{bg:"#1E2648"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:.5,hemi:.55,sky:"#6A7AC0",key:"#9FB0FF"}),Dn(e,{noite:!0});let n=Y(e,ht,2.2,-4.55,Math.PI),s=ka([["?",0]]);return s.rotation.x=-Math.PI/2,s.position.set(2.1,.8,-5.15),s.scale.setScalar(.6),e.add(s),(r,o,a)=>{s.paint(1);let l=yt(0,1.2,o);return n.pose(Li(te(o,1.4),Be({lean:18,headX:18,shR:[60,10],elR:70,shL:[50,10],elL:60}),l)),n.root.position.y=.13*l,z(n,null,r,"preocupado",{look:[0,.7]}),et(a,[[0,[.4,1.6,-2.4]],[3.4,[1,1.55,-3.2]]],[[0,[2.2,1,-4.8]],[3.4,[2.2,1,-4.9]]],o),{}}})}function r5(i,t){return K(i,t,{bg:"#1E2648"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:.7,hemi:.6,sky:"#6A7AC0"}),Dn(e,{noite:!0});let n=ka([["Semana 10:",ye(816)],["5.120 km/h",ye(820)],["1 segundo =",ye(826)],["17 minutos!",ye(833)]]);n.rotation.x=-Math.PI/2,n.position.set(2.1,.8,-5.15),n.scale.setScalar(.6),e.add(n);let s=St(.012,.012,.3,"#F2C14E",0,0,0,{seg:6});return e.add(s),(r,o,a)=>(n.paint(r),s.position.set(2.25+Math.sin(o*9)*.03,.86,-5.1+Math.cos(o*7)*.02),s.rotation.set(.6,0,-.6),et(a,[[0,[2.1,1.45,-4.85]],[7.3,[2.1,1.32,-4.95]]],[[0,[2.1,.8,-5.17]],[7.3,[2.1,.8,-5.17]]],o),{})})}function o5(i,t){return K(i,t,{bg:"#05060F"},e=>{wh(e,2500,200,4);let n=i5(4);n.position.set(0,0,-14),e.add(n);let s=new di("#FFFFFF",2.4);s.position.set(-5,3,4),e.add(s),e.add(new Ea("#4A5A8A",.5));let r=[];for(let o=0;o<12;o++){let a=dn(o?"#FFD45A":"#FFFFFF",o?.25-o*.015:.5,0);e.add(a),r.push(a)}return(o,a,l)=>{n.userData.m.rotation.y=a*.05;let c=yt(1.5,5.9,a);return r.forEach((d,h)=>{let f=Math.max(0,c-h*.02),u=f*5,m=4.3+f*6;d.position.set(Math.cos(u)*m,Math.sin(u)*m*.4,-14+Math.sin(u)*m*.6),d.material.opacity=c>.01?1-h/12:0}),et(l,[[0,[0,2,0]],[5.9,[1,3,2]]],[[0,[0,0,-14]],[5.9,[0,0,-14]]],a),{bloom:.5,bloomT:.7}}})}function a5(i,t){return K(i,t,{bg:"#1E2648"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:.7,hemi:.6,sky:"#6A7AC0"});let n=Dn(e,{noite:!0});return(s,r,o)=>(n.rel.set(2,30,r*.004*60%60),et(o,[[0,[1.6,2.4,-4.4]],[3.6,[1.6,2.4,-4.9]]],[[0,[1.6,2.4,-5.9]],[3.6,[1.6,2.4,-5.9]]],r),{vig:.5})})}function l5(i,t){return K(i,t,{bg:"#03040B"},e=>{let n=Pe(9),s=[];for(let o=0;o<260;o++){let a=new it(new Dt(.03,1),new Xt({color:n()<.3?"#BFE0FF":"#FFFFFF",transparent:!0,opacity:.8})),l=n()*6.283,c=1+n()*8;a.userData={a:l,r:c,z:-n()*80},e.add(a),s.push(a)}let r=dn("#FFFFFF",3,1);return r.position.set(0,0,-30),e.add(r),(o,a,l)=>{let c=yt(0,4.8,a);return s.forEach(d=>{let h=d.userData,f=(h.z+a*(20+c*120))%80-80;d.position.set(Math.cos(h.a)*h.r,Math.sin(h.a)*h.r,f),d.scale.y=1+c*18,d.rotation.x=Math.PI/2,d.lookAt(0,0,f+50),d.rotation.z=0,d.rotateX(Math.PI/2)}),r.scale.setScalar(3+c*30),r.material.opacity=.4+c*.6,et(l,[[0,[0,0,5]]],[[0,[0,0,-30]]],0),{flash:yt(4,4.8,a)*.7,bloom:.6,bloomT:.6}}})}function c5(i,t){return K(i,t,{bg:"#C8C4BC"},e=>{let n=Ne(e,{nGente:10,carros:6,antena:!1});n.gente.forEach(({k:a})=>a.estatua());let s=Y(e,vn,-4,-6,.3).estatua(),r=Y(e,ke,-2.6,-9,-.2).estatua(),o=Y(e,un,-5.2,-12,.4).estatua();return[s,r,o].forEach((a,l)=>{a.pose({...dt(1+l),shR:[30+l*20,30],elR:40}),z(a,null,0,["feliz","feliz","surpreso"][l],{blink:0})}),n.gente.forEach(({k:a},l)=>{a.pose(te(l*.3,1.7)),z(a,null,0,"neutro",{blink:0})}),(a,l,c)=>(et(c,[[0,[-2.2,1.4,-3.6]],[1.2,[-2,1.4,-6.4]],[2,[-3.6,1.4,-9.6]],[3.2,[-2,6,-2]],[6.4,[0,18,20]]],[[0,[-4,1.1,-6]],[1.2,[-2.6,1.1,-9]],[2,[-5.2,1.2,-12]],[3.2,[-3,3,-20]],[6.4,[0,6,-60]]],l),{sat:.05,tint:"#E8E4DC",vig:.5})})}function d5(i,t){return K(i,t,{bg:"#26305A"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:.9,hemi:.8});let n=Dn(e,{noite:!1}),s=Y(e,ht,-2.2,-3.4);Us(s,-2.2,.62,-3.4,.25);let r=new nt;r.add(Q(.6,.75,.03,"#FFFFFF",0,0,0,{r:.02,out:.006}));let o=new it(new Dt(.56,.55),new ze({map:Ht(256,256,()=>{})}));o.position.set(0,-.07,.02),r.add(o),r.add(Q(.6,.14,.035,"#E2443A",0,.3,.005,{r:.02})),r.position.set(-.2,2.3,-5.88),e.add(r);let l=o.material.map.image.getContext("2d"),c=-1,d=Ls(e,[-2.2,.7,-4.2],{size:2,n:30,ps:.7}),h=n.jan.userData.vidro;return(f,u,m)=>{let x=ye(918),g=Math.min(6,Math.floor(u*1.2)),p=f>x?7:g;p!==c&&(c=p,l.fillStyle="#FFFFFF",l.fillRect(0,0,256,256),l.fillStyle=p===7?"#E2443A":"#1B1420",l.font="900 120px Inter",l.textAlign="center",l.fillText(String(1+p),128,150),l.font="700 34px Inter",l.fillText(["SEG","TER","QUA","QUI","SEX","S\xC1B","DOM","DOM"][p],128,215),o.material.map.needsUpdate=!0);let _=(Math.sin(u*7.5)+1)/2;h.material.color.setRGB(jt(.25,1,_),jt(.3,1,_),jt(.6,1,_)),n.rel.set(f>x?0:u*30%12,f>x?0:u*360%60);let y=yt(x+.2,x+.8,f);return d(u,y),z(s,null,f,y>.5?"choro":"tedio",{olhosAbertos:!0,look:[0,-.5]}),et(m,[[0,[-.4,2.2,-2.2]],[9.3,[-.8,2,-2.6]]],[[0,[-1.6,1.1,-4.6]],[9.3,[-1.8,1,-4.6]]],u),{exposure:jt(.75,1,_)}}})}function h5(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:1.4});let n=He(e),s=Y(e,un,-4.4,-4.3,-Math.PI/2+.6),r=Y(e,ht,-1.6,-2.4,-1.2);Kh(r);let o=ti("exclamacao",.3);e.add(o);let a=n.tel.userData.fone;return(l,c,d)=>{let h=l>ye(933)-.4;o.visible=!h,o.position.set(-5.1,2.05,-4.2),o.scale.setScalar(.3*(1+.2*Math.sin(c*30))),n.tel.position.x=-5.3+(h?0:Math.sin(c*60)*.01),h&&(a.position.set(.4,.15,.3),a.rotation.z=1.2),s.pose(h?{...dt(c),shR:[120,60],elR:130}:{...dt(c),shR:[40,40],elR:40}),z(s,null,l,l>ye(935)?"medo":"neutro",{look:[-.4,0]});let f=yt(ye(937)-.3,ye(937)+.3,l);return r.root.rotation.y=-1.2-f*.8,r.pose({...dt(c),headY:-20*f}),z(r,null,l,f>.5?"medo":"neutro"),et(d,[[0,[-1,1.6,1]],[6,[-1.6,1.5,.2]]],[[0,[-3.6,1.2,-3.6]],[6,[-3.4,1.2,-3.6]]],c),{}}})}function u5(i,t){return K(i,t,{bg:"#F2A764"},(e,n)=>{let s=Ne(e,{nGente:10,carros:10,alt:[14,30],antena:!1}),r=Gn(e,["#FFFFFF","#E2443A","#FFD45A"]),o=Hn(e,n.camera),a=ls(e,[[-4,.2,-20],[-4,.2,-40],[-4,.2,-60]],{n:30,sp:4,size:2,life:3,op:.6});return(l,c,d)=>{let f=30-c*60;return r(-4,0,f,0,-1,40,c<3.6?1:0),a(c-.4),s.gente.forEach(({k:u},m)=>{u.pose({...dt(c,m),headY:40}),z(u,null,l,"surpreso")}),Di(d,[[0,[-9,1.6,-17]],[4.1,[-9,1.6,-21]]],[[0,[-4,1,-27]],[4.1,[-4,1,-27]]],c,.08,l),o(l,.5),{tint:"#FFE8CC"}}})}function f5(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:1.4});let n=He(e),s=Y(e,un,-4.4,-4.3,-Math.PI/2+.6),r=n.tel.userData.fone,o=ls(e,[[-1.6,.2,-2.4]],{n:14,sp:1,size:1.2,life:2.5,op:.6});return(a,l,c)=>{let d=yt(0,2.7,l);return r.position.set(jt(.4,0,d),jt(.15,0,d),jt(.3,.04,d)),r.rotation.z=jt(1.2,0,d),s.pose({...dt(l*.05),shR:[jt(120,60,d),60],elR:130}),z(s,null,a,"surpreso",{blink:0,mouth:{open:.5,round:.8}}),o(l+.3),et(c,[[0,[-3.2,1.75,-2.4]],[2.7,[-3.4,1.7,-2.7]]],[[0,[-5.1,1.5,-4.1]],[2.7,[-5.1,1.5,-4.1]]],l),{sat:.85}}})}function p5(i,t){return K(i,t,{bg:"#DDEBF0"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:.9});let n=Ns(e,{c1:"#F2A764",c2:"#F8D9A8"}),s=Pc(e),r=Y(e,ht,2.6,-1,-2.2);Kh(r);let o=ls(e,[[2.6,.1,-1.6]],{n:8,sp:.8,size:.6,life:1.6,op:.45});return(a,l,c)=>(z(s,null,a,"sono",{blink:.7}),r.pose({...dt(l),lean:8}),z(r,null,a,"medo",{look:[-.6,.2]}),o(l),et(c,[[0,[3.4,1.7,1.6]],[1.7,[3.2,1.65,1.2]]],[[0,[.6,1,-2.6]],[1.7,[.6,1,-2.6]]],l),{})})}function m5(i,t){return K(i,t,{bg:"#DDEBF0"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:.9}),Ns(e,{c1:"#F2A764",c2:"#F8D9A8"});let n=Pc(e),s=Y(e,ht,.55,-3.6,-1.6);return(r,o,a)=>(z(n,null,r,"feliz",{blink:.5,look:[.6,0]}),s.pose({...dt(o,0,.5),lean:10,headX:8}),z(s,null,r,o>2?"choro":"surpreso",{olhosAbertos:!0,look:[-.6,.3],smile:.3}),et(a,[[0,[1.9,1.6,-1.8]],[4.7,[1.6,1.55,-2.3]]],[[0,[-.1,1.15,-3.8]],[4.7,[-.1,1.15,-3.8]]],o),{bloom:.25,bloomT:.9})})}function ui(i,t={}){Lt(i,{r:8,pos:[3,8,6],ki:t.ki??.8,hemi:t.hemi??.9});let e=Ns(i,{noite:t.noite,c1:t.c1||"#1B2550",c2:t.c2||"#3A4A8A"});e.rel.set(21,14);let n=Pc(i);return{H:e,L:n}}function g5(i,t){return K(i,t,{bg:"#2A3450"},e=>{let{H:n,L:s}=ui(e,{noite:!0}),r=Y(e,Ua,1.6,-2.2,-1),o=Y(e,ht,.5,-1.5,2.2);return(a,l,c)=>{z(s,null,a,"sono",{blink:1}),r.pose(hn(null,a,{...dt(l),shR:[30+15*Math.sin(l*2),20],elR:40})),z(r,null,a,"triste",{mouth:a<ye(992)+.5?{open:(Math.sin(l*10)+1)*.2,round:.3}:void 0,look:[-.4,0]}),o.pose({...dt(l,0,.4)}),z(o,null,a,"triste",{look:[.5,0]});let d=a>ye(997);return et(c,d?[[0,[-.6,2.45,-4.6]]]:[[0,[3.2,1.6,.6]],[8.6,[2.8,1.55,.2]]],d?[[0,[-.6,2.45,-5.9]]]:[[0,[.8,1.1,-2.2]],[8.6,[.8,1.1,-2.2]]],l),{tint:"#D8E0FF",sat:.85}}})}function x5(i,t){return K(i,t,{bg:"#2A3450"},e=>{let{L:n}=ui(e,{noite:!0}),s=Y(e,ht,.55,-3.4,-Math.PI/2);return(r,o,a)=>{z(n,null,r,"sono",{blink:1});let l=yt(.3,1.6,o);return s.pose(Li(dt(o),Be({headX:10,lean:10}),l)),s.root.position.y=.13*l,z(s,null,r,"triste",{look:[-.7,.3]}),et(a,[[0,[2.6,1.5,-1]],[4.1,[2.2,1.4,-1.6]]],[[0,[-.1,1,-3.4]],[4.1,[-.1,.95,-3.4]]],o),{tint:"#D8E0FF",sat:.85}}})}function v5(i,t){return K(i,t,{bg:"#2A3450"},e=>{let{L:n}=ui(e,{noite:!0});return(s,r,o)=>(z(n,null,s,"sono",{blink:1}),Fc(o,r,.1),{tint:"#E0E6FF",sat:.9,vig:.45})})}function _5(i,t){return K(i,t,{bg:"#2A3450"},e=>{let{L:n}=ui(e,{noite:!0}),s=Y(e,ht,.55,-3.4,-Math.PI/2);return s.root.position.y=.13,(r,o,a)=>{z(n,null,r,"sono",{blink:1}),n.pose({shL:[30,6],elL:8});let l=yt(0,2.8,o);return s.pose(Be({lean:20,shR:[60+25*l,10],elR:20-10*l,headX:20})),z(s,null,r,"triste",{look:[-.5,.6]}),et(a,[[0,[.75,1.95,-2.35]],[3,[.65,1.9,-2.5]]],[[0,[-.3,1.25,-3.45]],[3,[-.3,1.25,-3.45]]],o),{tint:"#D8E0FF",sat:.85}}})}function y5(i,t){return K(i,t,{bg:"#2A3450"},e=>{let{H:n,L:s}=ui(e,{noite:!0}),r=Y(e,ht,.55,-3.4,-Math.PI/2);r.root.position.y=.13,wr(e,1,-3.9,.7,.5,.76,"#E8E2D6");let o=[];for(let c=0;c<14;c++){let d=new it(new Dt(.22,.3),Tt("#FBF7EC"));d.rotation.x=-Math.PI/2,d.rotation.z=(c%3-1)*.2,d.position.set(1.1+c%2*.02,.785+c*.006,-3.95),e.add(d),o.push(d)}let a=n.jan.userData.vidro,l=St(.008,.008,.16,"#F2C14E",0,0,0,{seg:6});return r.hands.R.add(l),l.position.set(0,-.06,.04),l.rotation.x=.6,(c,d,h)=>{z(s,null,c,"sono",{blink:1});let f=Math.sin(d*8);r.pose(Be({lean:18,headX:22,shR:[55,-5],elR:60+f*6,shL:[40,5],elL:50})),r.root.rotation.y=-Math.PI/2+.5,z(r,null,c,"determinado",{look:[.3,.9],blink:br(c,3)});let u=Math.min(14,Math.floor(d*1.4));o.forEach((x,g)=>x.visible=g<u);let m=(Math.sin(d*2.4-1.6)+1)/2;return a.material.color.setRGB(jt(.3,1.6,m),jt(.35,1.4,m),jt(.75,1,m)),et(h,[[0,[2.6,1.6,-1.4]],[11.5,[2,1.5,-2]]],[[0,[.4,1,-3.6]],[11.5,[.6,.95,-3.7]]],d),{exposure:jt(.8,1.08,m),tint:m>.5?"#FFF2DC":"#D8E0FF"}}})}function E5(i,t){return K(i,t,{bg:"#2A3450"},e=>{let{H:n}=ui(e,{noite:!0});return(s,r,o)=>(n.rel.set(21,14,3+r*.02),et(o,[[0,[-.6,2.45,-4.9]],[4.3,[-.6,2.45,-5.1]]],[[0,[-.6,2.45,-5.9]],[4.3,[-.6,2.45,-5.9]]],r),{vig:.5,tint:"#E0E6FF"})})}function M5(i,t){return K(i,t,{bg:"#2A3450"},e=>{let{L:n}=ui(e,{noite:!0}),s=Y(e,ht,.55,-3.4,-Math.PI/2);s.root.position.y=.13;let r=ka([["V\xF3, dessa vez",0],["eu cheguei a tempo.",0]],.3,.4);r.paint(1),e.add(r);let o=ye(1094)-.3;return(a,l,c)=>{let d=yt(.2,1.6,l);return s.pose(Be({lean:24,shR:[60+20*d,5],elR:30,headX:22})),z(s,null,a,"triste",{look:[-.5,.6]}),n.pose({shL:[30*d+10,6],elL:8}),z(n,null,a,(a>o,"sono"),{blink:a>o?.45:.9,look:[0,.5]}),r.position.set(jt(.2,-.1,d),jt(1.3,1.42,d),jt(-3.3,-3.35,d)),r.rotation.set(-1.25,0,.3),a<o?et(c,[[0,[1.6,1.6,-1.6]],[3,[1.4,1.5,-2]]],[[0,[-.2,1,-3.2]],[3,[-.2,1,-3.2]]],l):et(c,[[0,[-.02,2,-2.95]]],[[0,[-.1,1.42,-3.35]]],0),{tint:"#E0E6FF",sat:.9}}})}function b5(i,t){return K(i,t,{bg:"#2A3450"},e=>{let{L:n}=ui(e,{noite:!0}),s=Y(e,ht,.55,-3.4,-Math.PI/2+.6);return s.root.position.y=.13,(r,o,a)=>(s.pose(Be({lean:6,headX:-6,shR:[25,8],elR:45})),z(s,"augusto",r,"choro",{olhosAbertos:!0,look:[-.6,.3],smile:.2}),z(n,null,r,"sono",{blink:.5}),et(a,[[0,[.15,1.22,-2.35]],[5.4,[.2,1.2,-2.5]]],[[0,[.55,1.1,-3.4]],[5.4,[.55,1.1,-3.4]]],o),{tint:"#E0E6FF",sat:.9})})}function S5(i,t){return K(i,t,{bg:"#2A3450"},e=>{let{H:n,L:s}=ui(e,{noite:!0}),r=Y(e,ht,.55,-3.4,-Math.PI/2+.6);r.root.position.y=.13;let o=n.jan.userData.vidro;return(a,l,c)=>{let d=(Math.sin(l*.6)+1)/2;z(s,null,a,"feliz",{blink:.35,mouth:{open:d*.35,round:.6},look:[.7,0]}),r.pose(Be({lean:6,headX:-4,shR:[70,5],elR:30})),z(r,null,a,"choro",{olhosAbertos:!0,look:[-.6,.3]});let h=(Math.sin(l*1.2-1.6)+1)/2;return o.material.color.setRGB(jt(.3,1.6,h),jt(.35,1.4,h),jt(.75,1,h)),(l<6?0:1)?et(c,[[0,[.15,1.22,-2.35]],[11.8,[.2,1.2,-2.5]]],[[0,[.55,1.1,-3.4]],[11.8,[.55,1.1,-3.4]]],l):Fc(c,l),{tint:h>.5?"#FFF2DC":"#D8E0FF",exposure:jt(.85,1.05,h)}}})}function T5(i,t){return K(i,t,{bg:"#2A3450"},e=>{let{L:n}=ui(e,{noite:!0});return(s,r,o)=>(z(n,"lurdes",s,"feliz",{blink:.35,look:[.7,0],smile:.5}),Fc(o,r*.6,-.05),{tint:"#FFF0E0",bloom:.3,bloomT:.85})})}function A5(i,t){return K(i,t,{bg:"#1E2648"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:.45,hemi:.55,sky:"#7A8AD0",key:"#AFC0FF"});let n=Ns(e,{noite:!0,c1:"#1B2550",c2:"#3A4A8A"}),s=ka([["V\xF3, dessa vez",0],["eu cheguei a tempo.",0]],.26,.34);s.paint(1),s.rotation.set(-Math.PI/2+.2,0,.4),s.position.set(-.55,.98,-4.2),e.add(s);let r=new ya("#C8D8FF",30,12,.4,.7,1.2);return r.position.set(2,3.2,-5.6),r.target.position.set(-.6,.9,-4),e.add(r,r.target),(o,a,l)=>(et(l,[[0,[2.8,1.9,1.2]],[8.5,[1,1.4,-2.2]]],[[0,[-.6,.9,-3.8]],[8.5,[-.6,.95,-4.1]]],a),{tint:"#D0D8FF",sat:.8,vig:.5})})}var jh=[[s5,290,293.4],[r5,293.4,300.7],[o5,300.7,306.6],[a5,306.6,310.2],[l5,310.2,315],[c5,315,321.4],[d5,321.4,330.7],[h5,330.7,336.7],[u5,336.7,340.8],[f5,340.8,343.5],[p5,343.5,345.2],[m5,345.2,349.9],[g5,349.9,358.5],[x5,358.5,362.6],[v5,362.6,366.8],[_5,366.8,369.8],[y5,369.8,381.3],[E5,381.3,385.6],[M5,385.6,391.3],[b5,391.3,396.7],[S5,396.7,408.5],[T5,408.5,415.9],[A5,415.9,424.4]];var tu=i=>{let t=Ln();return i.torsoG.add(t),t.position.set(0,.25,-.27),t},Ha={topo:"#F27E5E",base:"#FFD9A0"};function w5(){let i=Ui("#F4F1EA");i.scale.set(1.15,1.35,1.2);let t=Ke(1.8,.5,(e,n,s)=>{e.fillStyle="#E2443A",e.fillRect(0,0,n,s),e.fillStyle="#FFFFFF",e.font=`900 ${s*.55}px Inter`,e.textAlign="center",e.fillText("TV NOT\xCDCIA",n/2,s*.72)});return t.position.set(.92,.65,0),t.rotation.y=Math.PI/2,i.add(t),i}function Ic(i,t={}){return Tr(i,Ha.topo,Ha.base,{n:5,alt:-20}),Lt(i,{r:28,far:120,pos:[-30,10,-20],target:[0,0,-10],ki:2,hemi:1.1,sky:"#FFE2C0",key:"#FFB070",ground:"#9A7A6A"}),fe(i,{...t,semCeu:!0,semLuz:!0})}function eu(i){Tr(i,Ha.topo,Ha.base,{n:5,alt:-20}),Lt(i,{r:20,far:120,pos:[-30,14,-10],target:[0,0,-6],ki:2,hemi:1.1,sky:"#FFE2C0",key:"#FFB070",ground:"#9A7A6A"});let t=new it(new Dt(300,300),Tt("#C9B8A0"));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,i.add(t);let e=oo(2,{cor:"#F2C14E",andar:!1});return e.position.set(0,0,-6),i.add(e),[[-10,-10,.3,5],[10,-12,-.4,7],[-18,-26,.2,9],[16,-28,-.2,11],[0,-30,0,13],[-28,-12,.5,15],[26,-10,-.5,17]].forEach(([n,s,r,o])=>{let a=oo(o);a.position.set(n,0,s),a.rotation.y=r,i.add(a)}),e}function R5(i,t){return K(i,t,{bg:"#1E2648"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:.5,hemi:.6,sky:"#6A7AC0",key:"#9FB0FF"});let n=Dn(e,{noite:!0}),s=Y(e,ht,-2.2,-3,.4);s.root.position.y=.22;let r=Ls(e,[-2.2,.9,-3],{size:1.2,n:14,ps:.5});return(o,a,l)=>{let c=ye(1174);n.rel.set(o<c?23:0,o<c?59:0,o<c?40+a*4:(o-c)*1);let d=yt(c,c+.4,o)*(1-yt(c+.8,c+1.6,o));return r(a,d*.8),s.pose(Be({headX:o<c?-10:-4,shL:[20,10],elL:50,shR:[20,10],elR:50})),z(s,null,o,o<c+1.6?"preocupado":"surpreso",{look:o<c?[.6,-.6]:[0,.3]}),et(l,[[0,[-.4,1.4,-.6]],[8.2,[-.9,1.3,-1.3]]],[[0,[-2,1,-3.2]],[8.2,[-2.1,1,-3.2]]],a),{tint:"#D0D8FF"}}})}function C5(i,t){return K(i,t,{},e=>{fe(e,{seed:31});let n=Y(e,ht,-1.2,2,Math.PI),s=[];for(let r=0;r<4;r++){let o=In(r+1);o.place(r%2?1.6:-2.6,-3-r*3,0,r%2?Math.PI:0),e.add(o.root),s.push(o)}return(r,o,a)=>{let l=2-o*1.4;return n.root.position.z=l,n.pose(te(o,1.6)),z(n,null,r,o>1.5?"feliz":"surpreso",{look:[Math.sin(o)*.3,0]}),s.forEach((c,d)=>{c.root.position.z+=0,c.pose(te(o+d,1.6)),c.root.position.z=-3-d*3+(d%2?-1:1)*o*1.3,z(c,null,r,"feliz")}),et(a,[[0,[.6,1.4,l-3.2]]],[[0,[-1.2,1,l]]],0),{}}})}function P5(i,t){return K(i,t,{},e=>{fe(e,{seed:0});let n=w5();e.add(n);let s=Y(e,Ba,-3.6,-8.2,Math.PI/2);return(r,o,a)=>{let l=-8-o*o*2.4;return n.position.set(-2.2,0,l),n.rotation.y=Math.PI,n.userData.rodas.forEach(c=>c.rotation.x=o*3),s.root.position.x=-3.6+Math.min(o,1)*.8,s.pose(o<1?te(o,1.7):dt(o)),z(s,null,r,"tedio"),s.root.visible=o<1.1,et(a,[[0,[3,1.8,-2]],[2.9,[3,1.8,-3]]],[[0,[-2.2,1,-10]],[2.9,[-2.2,1,-13]]],o),{}}})}function F5(i,t){return K(i,t,{bg:"#F27E5E"},e=>{eu(e);let n=Y(e,ht,-1.5,-2.25,0);n.root.position.y=3.1;let s=new nt;return ds(s,-.17,0,0,.3,.37,wc),ds(s,.17,0,0,.3,.37,Rc),n.torsoG.add(s),s.position.set(0,.05,.36),s.rotation.x=-.5,(r,o,a)=>{n.pose(Be({shL:[55,10],elL:60,shR:[55,10],elR:60,headX:o<6?18:-8})),z(n,null,r,o<6?"triste":"feliz",{look:o<6?[0,.8]:[0,-.2],smile:o>6?.3:void 0});let l=.5-o*.06;return et(a,[[0,[-1.5+Math.sin(l)*2.4,4,-2.25+Math.cos(l)*2.4]],[11,[-1.5+Math.sin(l)*3.2,4.4,-2.25+Math.cos(l)*3.2]]],[[0,[-1.5,3.75,-2.25]],[11,[-1.5,3.85,-2.25]]],o),{tint:"#FFE8D0"}}})}function I5(i,t){return K(i,t,{},e=>{fe(e,{seed:13});let n=Ni();n.position.set(-12.5,0,-20),n.rotation.y=Math.PI/2,e.add(n);let s=Bi();s.rotation.y=Math.PI,e.add(s);let r=Y(e,ht,0,0,Math.PI,.15);tu(r);let o=Y(e,un,-6.4,-20,Math.PI/2);return(a,l,c)=>{let d=Math.min(l,4.6),h=4-d*4.6,f=-2-yt(3.4,4.6,l)*2.4;return s.position.set(f,0,h),r.root.position.set(f,.15,h+.14),Bs(s,d*4.6),r.pose(l<4.6?os(l,1.1):{...os(4.6),shR:[120,30],elR:30}),z(r,null,a,"feliz"),o.pose({...dt(l),shL:[30,30],elL:120,shR:[30,30],elR:120}),z(o,null,a,"bravo",{look:[.6,0]}),l<4.2?et(c,[[0,[f+2.6,1.5,h+3]]],[[0,[f,1,h]]],0):et(c,[[4.2,[f+2.6,1.5,h+3]],[6.3,[-.8,1.6,-13.5]]],[[4.2,[f,1,h]],[6.3,[-5.5,1.1,-19.5]]],l),{}}})}function L5(i,t){return K(i,t,{},e=>{fe(e,{seed:13});let n=Ni();n.position.set(-12.5,0,-20),n.rotation.y=Math.PI/2,e.add(n);let s=Y(e,un,-6.4,-20,Math.PI/2-.3),r=Y(e,ht,-4.6,-19.4,-Math.PI/2-.4);return tu(r),(o,a,l)=>{let c=o>ye(1260)+.6;return s.pose(hn("jorge",o,c?{...dt(a),shR:[60,30],elR:60}:{...dt(a),shL:[30,30],elL:120,shR:[30,30],elR:120},.5)),z(s,"jorge",o,c?"feliz":"bravo",{olhosAbertos:!0,look:[.5,0]}),r.pose({...dt(a),shR:[150,25],elR:120}),z(r,null,o,"vergonha",{smile:.5,look:[-.5,0]}),et(l,[[0,[-4.4,1.45,-17.4]],[4.9,[-4.6,1.42,-17.8]]],[[0,[-6.2,1.2,-19.9]],[4.9,[-6.2,1.2,-19.9]]],a),{}}})}function D5(i,t){return K(i,t,{bg:"#1E2648"},e=>{let n=ye(1280)-.2,s=!0,r=new nt;e.add(r),Lt(r,{r:8,pos:[3,8,6],ki:.9,hemi:.8,key:"#FFE2B8"}),He(r).rel.set(23,2);let a=Y(r,ke,-3.3,-4.3,.1),l=Y(r,ht,-1.2,-2.6,2.6),c=new nt;e.add(c),fe(c,{noite:!0,seed:21});let d=Y(c,ke,.3,0,Math.PI),h=Y(c,ht,-.3,0,Math.PI);return(f,u,m)=>{let x=f>n;if(r.visible=!x,c.visible=x,!x)a.pose({...dt(u),shR:[60,10],elR:70,shL:[60,10],elL:70,headX:20}),z(a,null,f,"feliz",{look:[0,.7]}),l.pose({...dt(u),shL:[10,10]}),z(l,null,f,"feliz",{look:[-.5,0]}),et(m,[[0,[.6,1.6,.6]],[4,[.2,1.5,.2]]],[[0,[-2.4,1,-3.6]],[4,[-2.4,1,-3.6]]],u);else{let g=f-n,p=-g*.7;d.root.position.z=p,h.root.position.z=p,d.pose(te(g,1.1,.6)),h.pose(te(g,1.1,.6,.5)),z(d,null,f,"feliz",{look:[-.6,0]}),z(h,null,f,"feliz",{look:[.6,0]}),et(m,[[0,[0,1.5,p-4.2]]],[[0,[0,1,p]]],0)}return{}}})}function Ga(i,t=0){let e=Y(i,ke,.27,t,Math.PI);return{A:Y(i,ht,-.27,t,Math.PI),B:e}}function U5(i,t){return K(i,t,{bg:"#1E2648"},e=>{fe(e,{noite:!0,seed:21});let{A:n,B:s}=Ga(e);return(r,o,a)=>{let l=r-i+4.4,c=-l*.7;return n.root.position.z=c,s.root.position.z=c,s.pose(hn("bia",r,te(l,1.1,.6),.4)),n.pose(te(l,1.1,.6,.5)),z(s,"bia",r,"feliz",{olhosAbertos:!0,look:[-.7,0]}),z(n,null,r,"feliz",{look:[.7,0]}),s.pose({...te(l,1.1,.6),headY:-25}),n.pose({...te(l,1.1,.6,.5),headY:20}),et(a,[[0,[.6,1.35,c-2.2]]],[[0,[0,1.15,c]]],0),{}}})}function B5(i,t){return K(i,t,{bg:"#1E2648"},e=>{fe(e,{noite:!0,seed:21});let{A:n,B:s}=Ga(e);return(r,o,a)=>{let l=r-i+7.5,c=-l*.6;n.root.position.z=c,s.root.position.z=c;let d=yt(2.2,3,o);return n.pose({...hn("augusto",r,te(l,1,.5,.5),.2),headY:25,shL:[0,8+14*d],elL:8}),s.pose({...te(l,1,.5),headY:-20,shR:[0,8+14*d],elR:8}),z(n,"augusto",r,"feliz",{olhosAbertos:!0,look:[.7,0],smile:.5}),z(s,null,r,"apaixonado",{look:[-.6,0]}),et(a,[[0,[-.6,1.35,c-2.2]],[4.7,[-.2,1.3,c-2.6]]],[[0,[0,1.1,c]],[4.7,[0,1,c]]],o),{}}})}function N5(i,t){return K(i,t,{},e=>{let n=Ne(e,{nGente:22,carros:12}),s=ye(1336)-.4,r=new nt;return e.add(r),r.visible=!1,(o,a,l)=>(n.gente.forEach(({k:c,z0:d,dir:h,ph:f})=>{let u=d-h*a*4.2;c.root.position.z=(u+120)%140-120,c.root.rotation.y=h>0?Math.PI:0,c.pose(Le(a,3,.6,f)),z(c,null,o,"preocupado")}),n.carros.forEach(({k:c,s:d,z0:h,v:f})=>{c.position.z=(h+d*-f*3*a+220)%220-200}),et(l,[[0,[12,8,12]],[10.7,[10,6,2]]],[[0,[0,1,-30]],[10.7,[0,1,-40]]],a),{sat:.85})})}function O5(i,t){return K(i,t,{bg:"#F6E3B4"},e=>{Lt(e,{r:8,pos:[3,8,6],ki:1.1}),_n(e),ds(e,-3.9,2,-2.45,.5,.62,Rc,Math.PI/2);let n=new nt;n.add(St(.07,.05,.18,"#F4F1EA",0,.09,0,{out:.005}));for(let s=0;s<3;s++)n.add(St(.006,.006,.22,"#4C9A44",(s-1)*.04,.27,0,{seg:4})),n.add(nn(.04,["#F28F6B","#F2C14E","#E8A0B8"][s],(s-1)*.05,.39,0,{seg:10}));return n.position.set(-.6,.8,-2.6),e.add(n),(s,r,o)=>(et(o,[[0,[-1.6,1.7,-1]],[3.8,[-2.4,1.8,-1.8]]],[[0,[-3.9,1.6,-2.8]],[3.8,[-3.9,1.85,-2.8]]],r),{sat:.85,vig:.4})})}function z5(i,t){return K(i,t,{bg:"#F27E5E"},e=>{Ic(e,{seed:6});let{A:n,B:s}=Ga(e,0);return(r,o,a)=>{let l=-o*.6;return n.root.position.z=l,s.root.position.z=l,n.pose({...te(o,1,.5,.5),shL:[0,22],elL:8}),s.pose({...te(o,1,.5),shR:[0,22],elR:8}),z(n,null,r,"feliz",{look:[.5,0]}),z(s,null,r,"feliz",{look:[-.5,0]}),et(a,[[0,[0,1.4,l+4]],[7.4,[0,4.5,l+12]]],[[0,[0,1,l]],[7.4,[0,1.5,l-6]]],o),{tint:"#FFE8D0"}}})}function k5(i,t){return K(i,t,{bg:"#F27E5E"},e=>{eu(e);let n=Y(e,ht,-1.5,-2.25,0);n.root.position.y=3.1;let s=Y(e,ke,-.9,-2.25,0);return s.root.position.y=3.1,(r,o,a)=>(n.pose(Be({shR:[10,30],elR:10})),s.pose(Be({shL:[10,30],elL:10,headZ:-10})),z(n,null,r,"feliz",{look:[.3,-.2],smile:.3}),z(s,null,r,"feliz",{look:[-.3,-.2]}),et(a,[[0,[-1.2,4,1.9]],[7.6,[-1.2,4.05,1.3]]],[[0,[-1.2,4.05,-2.25]],[7.6,[-1.2,4.1,-2.25]]],o),{tint:"#FFE8D0",vig:.45})})}function H5(i,t){return K(i,t,{bg:"#F27E5E"},e=>{Ic(e,{seed:6});let n=Y(e,ht,0,-2,0);return(s,r,o)=>{let a=yt(.3,.8,r);return n.pose({...dt(r),shR:[60*a+90*a,20+40*a],elR:30+Math.sin(r*8)*15*a}),z(n,null,s,"feliz",{olhosAbertos:!0,smile:.8}),et(o,[[0,[0,1.35,1.2]],[6,[0,1.3,.7]]],[[0,[0,1.1,-2]],[6,[0,1.1,-2]]],r),{tint:"#FFE8D0"}}})}function G5(i,t){return K(i,t,{bg:"#F27E5E"},e=>{Ic(e,{seed:6});let{A:n,B:s}=Ga(e,-1);return(r,o,a)=>{let l=-1-o*.55;return n.root.position.z=l,s.root.position.z=l,n.pose({...te(o,.95,.5,.5),shL:[0,22],elL:8,headY:15}),s.pose({...te(o,.95,.5),shR:[0,22],elR:8,headY:-15}),z(n,null,r,"feliz"),z(s,null,r,"feliz"),et(a,[[0,[0,1.6,3]],[5.3,[0,2.2,5]]],[[0,[0,1,-4]],[5.3,[0,1.2,-8]]],o),{tint:"#FFE8D0",exposure:1-yt(3.9,5.2,o)}}})}var nu=[[R5,424.4,432.6],[C5,432.6,438.3],[P5,438.3,441.2],[F5,441.2,452.2],[I5,452.2,458.5],[L5,458.5,463.4],[D5,463.4,471.8],[U5,471.8,474.9],[B5,474.9,479.6],[N5,479.6,486.2],[O5,486.2,490.3],[z5,490.3,497.7],[k5,497.7,505.3],[H5,505.3,511.3],[G5,511.3,516.63]];var iu=[...qh,...$h,...Qh,...jh,...nu];window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(t=>document.fonts.load(t))).catch(()=>{});let i=new Ca(document.getElementById("film3d"));for(let[t,e,n]of iu)i.add(t(e,n));window.addEventListener("hf-seek",t=>i.render(t.detail.time)),i.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
