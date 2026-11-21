var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var $f=Object.defineProperty;var Jf=(n,t)=>{for(var e in t)$f(n,e,{get:t[e],enumerable:!0})};var Qc="170";var Kf=0,iu=1,Qf=2;var hd=1,jc=2,_i=3,Wi=0,Ke=1,pe=2,ri=0,Zs=1,Ho=2,su=3,ru=4,jf=5,hs=100,tp=101,ep=102,np=103,ip=104,sp=200,rp=201,op=202,ap=203,Rl=204,Cl=205,lp=206,cp=207,hp=208,up=209,dp=210,fp=211,pp=212,mp=213,gp=214,Fl=0,Pl=1,Il=2,Qs=3,Dl=4,Ll=5,Ul=6,Bl=7,ud=0,vp=1,_p=2,oi=0,yp=1,Ep=2,Mp=3,xp=4,Ap=5,bp=6,Sp=7;var dd=300,js=301,tr=302,Nl=303,Ol=304,fa=306,An=1e3,fs=1001,Hl=1002,mn=1003,Tp=1004;var lo=1005;var si=1006,Ya=1007;var ps=1008;var Ai=1009,fd=1010,pd=1011,Or=1012,th=1013,bi=1014,Ei=1015,Tn=1016,eh=1017,nh=1018,er=1020,md=35902,gd=1021,vd=1022,Pn=1023,_d=1024,yd=1025,$s=1026,nr=1027,Ed=1028,ih=1029,Md=1030,sh=1031;var rh=1033,Lo=33776,Uo=33777,Bo=33778,No=33779,zl=35840,kl=35841,Gl=35842,Vl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37808,Zl=37809,$l=37810,Jl=37811,Kl=37812,Ql=37813,jl=37814,tc=37815,ec=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,Oo=36492,ac=36494,lc=36495,xd=36283,cc=36284,hc=36285,uc=36286;var zo=2300,dc=2301,Za=2302,ou=2400,au=2401,lu=2402;var wp=3200,Rp=3201;var Ad=0,Cp=1,Gi="",Je="srgb",$i="srgb-linear",pa="linear",Ae="srgb";var Is=7680;var cu=519,Fp=512,Pp=513,Ip=514,bd=515,Dp=516,Lp=517,Up=518,Bp=519,hu=35044;var uu="300 es",Mi=2e3,ko=2001,Xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $a=Math.PI/180,fc=180/Math.PI;function hr(){let n=__sr()*4294967295|0,t=__sr()*4294967295|0,e=__sr()*4294967295|0,i=__sr()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function sn(n,t,e){return Math.max(t,Math.min(e,n))}function Np(n,t){return(n%t+t)%t}function Ja(n,t,e){return(1-e)*n+e*t}function wr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var at=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(sn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],E=s[1],y=s[4],v=s[7],A=s[2],S=s[5],T=s[8];return r[0]=o*_+a*E+l*A,r[3]=o*m+a*y+l*S,r[6]=o*f+a*v+l*T,r[1]=c*_+h*E+u*A,r[4]=c*m+h*y+u*S,r[7]=c*f+h*v+u*T,r[2]=d*_+p*E+g*A,r[5]=d*m+p*y+g*S,r[8]=d*f+p*v+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ka.makeScale(t,e)),this}rotate(t){return this.premultiply(Ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ka=new ie;function Sd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Go(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Op(){let n=Go("canvas");return n.style.display="block",n}var du={};function Dr(n){n in du||(du[n]=!0,console.warn(n))}function Hp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function zp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var fe={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ae&&(n.r=xi(n.r),n.g=xi(n.g),n.b=xi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ae&&(n.r=Js(n.r),n.g=Js(n.g),n.b=Js(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Gi?pa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fu=[.64,.33,.3,.6,.15,.06],pu=[.2126,.7152,.0722],mu=[.3127,.329],gu=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);fe.define({[$i]:{primaries:fu,whitePoint:mu,transfer:pa,toXYZ:gu,fromXYZ:vu,luminanceCoefficients:pu,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:fu,whitePoint:mu,transfer:Ae,toXYZ:gu,fromXYZ:vu,luminanceCoefficients:pu,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});var Ds,pc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ds===void 0&&(Ds=Go("canvas")),Ds.width=t.width,Ds.height=t.height;let i=Ds.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Go("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xi(e[i]/255)*255):e[i]=xi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gp=0,Vo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=hr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qa(s[o].image)):r.push(Qa(s[o]))}else r=Qa(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vp=0,bn=class n extends Xi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=fs,s=fs,r=si,o=ps,a=Pn,l=Ai,c=n.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=hr(),this.name="",this.source=new Vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case An:t.x=t.x-Math.floor(t.x);break;case fs:t.x=t.x<0?0:1;break;case Hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case An:t.y=t.y-Math.floor(t.y);break;case fs:t.y=t.y<0?0:1;break;case Hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=dd;bn.DEFAULT_ANISOTROPY=1;var be=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(p+1)/2,A=(f+1)/2,S=(h+d)/4,T=(u+_)/4,b=(g+m)/4;return y>v&&y>A?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=S/i,r=T/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=S/s,r=b/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=T/r,s=b/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mc=class extends Xi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new bn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Vo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends mc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Wo=class extends bn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gc=class extends bn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*_,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let A=Math.sqrt(y),S=Math.atan2(A,f*E);m=Math.sin(m*S)/A,a=Math.sin(a*S)/A}let v=a*E;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*__sr(),e=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_u.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(sn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let t=__sr()*Math.PI*2,e=__sr()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ja=new O,_u=new qi,ms=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),ho.subVectors(this.max,Rr),Ls.subVectors(t.a,Rr),Us.subVectors(t.b,Rr),Bs.subVectors(t.c,Rr),Bi.subVectors(Us,Ls),Ni.subVectors(Bs,Us),is.subVectors(Ls,Bs);let e=[0,-Bi.z,Bi.y,0,-Ni.z,Ni.y,0,-is.z,is.y,Bi.z,0,-Bi.x,Ni.z,0,-Ni.x,is.z,0,-is.x,-Bi.y,Bi.x,0,-Ni.y,Ni.x,0,-is.y,is.x,0];return!tl(e,Ls,Us,Bs,ho)||(e=[1,0,0,0,1,0,0,0,1],!tl(e,Ls,Us,Bs,ho))?!1:(uo.crossVectors(Bi,Ni),e=[uo.x,uo.y,uo.z],tl(e,Ls,Us,Bs,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},fi=[new O,new O,new O,new O,new O,new O,new O,new O],Kn=new O,co=new ms,Ls=new O,Us=new O,Bs=new O,Bi=new O,Ni=new O,is=new O,Rr=new O,ho=new O,uo=new O,ss=new O;function tl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ss.fromArray(n,r);let a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=t.dot(ss),c=e.dot(ss),h=i.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Wp=new ms,Cr=new O,el=new O,Hr=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Wp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);let e=Cr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Cr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(el.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(el)),this.expandByPoint(Cr.copy(t.center).sub(el))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new O,nl=new O,fo=new O,Oi=new O,il=new O,po=new O,sl=new O,vc=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){nl.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(nl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fo),a=Oi.dot(this.direction),l=-Oi.dot(fo),c=Oi.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nl).addScaledVector(fo,d),p}intersectSphere(t,e){pi.subVectors(t.center,this.origin);let i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,i,s,r){il.subVectors(e,t),po.subVectors(i,t),sl.crossVectors(il,po);let o=this.direction.dot(sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,t);let l=a*this.direction.dot(po.crossVectors(Oi,po));if(l<0)return null;let c=a*this.direction.dot(il.cross(Oi));if(c<0||l+c>o)return null;let h=-a*Oi.dot(sl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,p,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),o=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xp,t,qp)}lookAt(t,e,i){let s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Hi.crossVectors(i,Cn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Hi.crossVectors(i,Cn)),Hi.normalize(),mo.crossVectors(Cn,Hi),s[0]=Hi.x,s[4]=mo.x,s[8]=Cn.x,s[1]=Hi.y,s[5]=mo.y,s[9]=Cn.y,s[2]=Hi.z,s[6]=mo.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],E=i[3],y=i[7],v=i[11],A=i[15],S=s[0],T=s[4],b=s[8],x=s[12],M=s[1],w=s[5],F=s[9],P=s[13],C=s[2],B=s[6],U=s[10],z=s[14],H=s[3],Z=s[7],et=s[11],K=s[15];return r[0]=o*S+a*M+l*C+c*H,r[4]=o*T+a*w+l*B+c*Z,r[8]=o*b+a*F+l*U+c*et,r[12]=o*x+a*P+l*z+c*K,r[1]=h*S+u*M+d*C+p*H,r[5]=h*T+u*w+d*B+p*Z,r[9]=h*b+u*F+d*U+p*et,r[13]=h*x+u*P+d*z+p*K,r[2]=g*S+_*M+m*C+f*H,r[6]=g*T+_*w+m*B+f*Z,r[10]=g*b+_*F+m*U+f*et,r[14]=g*x+_*P+m*z+f*K,r[3]=E*S+y*M+v*C+A*H,r[7]=E*T+y*w+v*B+A*Z,r[11]=E*b+y*F+v*U+A*et,r[15]=E*x+y*P+v*z+A*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*p-i*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],E=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,y=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,A=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,S=e*E+i*y+s*v+r*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return t[0]=E*T,t[1]=(_*d*r-u*m*r-_*s*p+i*m*p+u*s*f-i*d*f)*T,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*f+i*l*f)*T,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*p-i*l*p)*T,t[4]=y*T,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*T,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*T,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*T,t[8]=v*T,t[9]=(g*u*r-h*_*r-g*i*p+e*_*p+h*i*f-e*u*f)*T,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*f+e*a*f)*T,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*p-e*a*p)*T,t[12]=A*T,t[13]=(h*_*s-g*u*s+g*i*d-e*_*d-h*i*m+e*u*m)*T,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*T,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,E=l*c,y=l*h,v=l*u,A=i.x,S=i.y,T=i.z;return s[0]=(1-(_+f))*A,s[1]=(p+v)*A,s[2]=(g-y)*A,s[3]=0,s[4]=(p-v)*S,s[5]=(1-(d+f))*S,s[6]=(m+E)*S,s[7]=0,s[8]=(g+y)*T,s[9]=(m-E)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ns.set(s[0],s[1],s[2]).length(),o=Ns.set(s[4],s[5],s[6]).length(),a=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qn.copy(this);let c=1/r,h=1/o,u=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,e.setFromRotationMatrix(Qn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Mi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),p,g;if(a===Mi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ko)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Mi){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,p=(i+s)*h,g,_;if(a===Mi)g=(o+r)*u,_=-2*u;else if(a===ko)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ns=new O,Qn=new xe,Xp=new O(0,0,0),qp=new O(1,1,1),Hi=new O,mo=new O,Cn=new O,yu=new xe,Eu=new qi,Si=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var Xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yp=0,Mu=new O,Os=new qi,mi=new xe,go=new O,Fr=new O,Zp=new O,$p=new qi,xu=new O(1,0,0),Au=new O(0,1,0),bu=new O(0,0,1),Su={type:"added"},Jp={type:"removed"},Hs={type:"childadded",child:null},rl={type:"childremoved",child:null},gn=class n extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new Si,i=new qi,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new ie}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(xu,t)}rotateY(t){return this.rotateOnAxis(Au,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,e){return Mu.copy(t).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xu,t)}translateY(t){return this.translateOnAxis(Au,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?go.copy(t):go.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Fr,go,this.up):mi.lookAt(go,Fr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(mi),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Su),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jp),rl.child=t,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Su),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,Zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,$p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};gn.DEFAULT_UP=new O(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new O,gi=new O,ol=new O,vi=new O,zs=new O,ks=new O,Tu=new O,al=new O,ll=new O,cl=new O,hl=new be,ul=new be,dl=new be,us=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),jn.subVectors(t,e),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){jn.subVectors(s,e),gi.subVectors(i,e),ol.subVectors(t,e);let o=jn.dot(jn),a=jn.dot(gi),l=jn.dot(ol),c=gi.dot(gi),h=gi.dot(ol),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return hl.setScalar(0),ul.setScalar(0),dl.setScalar(0),hl.fromBufferAttribute(t,e),ul.fromBufferAttribute(t,i),dl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(hl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(t,e,i,s){return jn.subVectors(i,e),gi.subVectors(t,e),jn.cross(gi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),jn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;zs.subVectors(s,i),ks.subVectors(r,i),al.subVectors(t,i);let l=zs.dot(al),c=ks.dot(al);if(l<=0&&c<=0)return e.copy(i);ll.subVectors(t,s);let h=zs.dot(ll),u=ks.dot(ll);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(zs,o);cl.subVectors(t,r);let p=zs.dot(cl),g=ks.dot(cl);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ks,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Tu.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Tu,a);let f=1/(m+_+d);return o=_*f,a=d*f,e.copy(i).addScaledVector(zs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},vo={h:0,s:0,l:0};function fl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=i,fe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=fe.workingColorSpace){if(t=Np(t,1),e=sn(e,0,1),i=sn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=fl(o,r,t+1/3),this.g=fl(o,r,t),this.b=fl(o,r,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let i=Td[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return fe.fromWorkingColorSpace(cn.copy(this),t),Math.round(sn(cn.r*255,0,255))*65536+Math.round(sn(cn.g*255,0,255))*256+Math.round(sn(cn.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(cn.copy(this),e);let i=cn.r,s=cn.g,r=cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Je){fe.fromWorkingColorSpace(cn.copy(this),t);let e=cn.r,i=cn.g,s=cn.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(vo);let i=Ja(zi.h,vo.h,e),s=Ja(zi.s,vo.s,e),r=Ja(zi.l,vo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new kt;kt.NAMES=Td;var Kp=0,gs=class extends Xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=hr(),this.name="",this.blending=Zs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Cl&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},De=class extends gs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ke=new O,_o=new at,un=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hu,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=wr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wr(e,this.array)),e}setX(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wr(e,this.array)),e}setY(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wr(e,this.array)),e}setW(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),i=xn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),i=xn(i,this.array),s=xn(s,this.array),r=xn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hu&&(t.usage=this.usage),t}};var qo=class extends un{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Yo=class extends un{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oe=class extends un{constructor(t,e,i){super(new Float32Array(t),e,i)}},Qp=0,zn=new xe,pl=new gn,Gs=new O,Fn=new ms,Pr=new ms,$e=new O,He=class n extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?Yo:qo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ie().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,i){return zn.makeTranslation(t,e,i),this.applyMatrix4(zn),this}scale(t,e,i){return zn.makeScale(t,e,i),this.applyMatrix4(zn),this}lookAt(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(Fn.min,Pr.min),Fn.expandByPoint($e),$e.addVectors(Fn.max,Pr.max),Fn.expandByPoint($e)):(Fn.expandByPoint(Pr.min),Fn.expandByPoint(Pr.max))}Fn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$e.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(t,c),$e.add(Gs)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new O,l[b]=new O;let c=new O,h=new O,u=new O,d=new at,p=new at,g=new at,_=new O,m=new O;function f(b,x,M){c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,x),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,x),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(w),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(w),a[b].add(_),a[x].add(_),a[M].add(_),l[b].add(m),l[x].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let b=0,x=E.length;b<x;++b){let M=E[b],w=M.start,F=M.count;for(let P=w,C=w+F;P<C;P+=3)f(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let y=new O,v=new O,A=new O,S=new O;function T(b){A.fromBufferAttribute(s,b),S.copy(A);let x=a[b];y.copy(x),y.sub(A.multiplyScalar(A.dot(x))).normalize(),v.crossVectors(S,x);let w=v.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,w)}for(let b=0,x=E.length;b<x;++b){let M=E[b],w=M.start,F=M.count;for(let P=w,C=w+F;P<C;P+=3)T(t.getX(P+0)),T(t.getX(P+1)),T(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new un(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wu=new xe,rs=new vc,yo=new Hr,Ru=new O,Eo=new O,Mo=new O,xo=new O,ml=new O,Ao=new O,Cu=new O,bo=new O,gt=class extends gn{constructor(t=new He,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ml.fromBufferAttribute(u,t),o?Ao.addScaledVector(ml,h):Ao.addScaledVector(ml.sub(e),h))}e.add(Ao)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(yo.containsPoint(rs.origin)===!1&&(rs.intersectSphere(yo,Ru)===null||rs.origin.distanceToSquared(Ru)>(t.far-t.near)**2))&&(wu.copy(r).invert(),rs.copy(t.ray).applyMatrix4(wu),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,A=y;v<A;v+=3){let S=a.getX(v),T=a.getX(v+1),b=a.getX(v+2);s=So(this,f,t,i,c,h,u,S,T,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let E=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=So(this,o,t,i,c,h,u,E,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,A=y;v<A;v+=3){let S=v,T=v+1,b=v+2;s=So(this,f,t,i,c,h,u,S,T,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let E=m,y=m+1,v=m+2;s=So(this,o,t,i,c,h,u,E,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function jp(n,t,e,i,s,r,o,a){let l;if(t.side===Ke?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Wi,a),l===null)return null;bo.copy(a),bo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(bo);return c<e.near||c>e.far?null:{distance:c,point:bo.clone(),object:n}}function So(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Eo),n.getVertexPosition(l,Mo),n.getVertexPosition(c,xo);let h=jp(n,t,e,i,Eo,Mo,xo,Cu);if(h){let u=new O;us.getBarycoord(Cu,Eo,Mo,xo,u),s&&(h.uv=us.getInterpolatedAttribute(s,a,l,c,u,new at)),r&&(h.uv1=us.getInterpolatedAttribute(r,a,l,c,u,new at)),o&&(h.normal=us.getInterpolatedAttribute(o,a,l,c,u,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};us.getNormal(Eo,Mo,xo,d.normal),h.face=d,h.barycoord=u}return h}var le=class n extends He{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(_,m,f,E,y,v,A,S,T,b,x){let M=v/T,w=A/b,F=v/2,P=A/2,C=S/2,B=T+1,U=b+1,z=0,H=0,Z=new O;for(let et=0;et<U;et++){let K=et*w-P;for(let ft=0;ft<B;ft++){let ht=ft*M-F;Z[_]=ht*E,Z[m]=K*y,Z[f]=C,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[f]=S>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ft/T),u.push(1-et/b),z+=1}}for(let et=0;et<b;et++)for(let K=0;K<T;K++){let ft=d+K+B*et,ht=d+K+B*(et+1),W=d+(K+1)+B*(et+1),tt=d+(K+1)+B*et;l.push(ft,ht,tt),l.push(ht,W,tt),H+=6}a.addGroup(p,H,x),p+=H,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ir(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function pn(n){let t={};for(let e=0;e<n.length;e++){let i=ir(n[e]);for(let s in i)t[s]=i[s]}return t}function t0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function wd(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var ur={clone:ir,merge:pn},e0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends gs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=t0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Zo=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new O,Fu=new at,Pu=new at,hn=class extends Zo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fc*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,Fu,Pu),e.subVectors(Pu,Fu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($a*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Vs=-90,Ws=1,_c=class extends gn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Vs,Ws,t,e);s.layers=this.layers,this.add(s);let r=new hn(Vs,Ws,t,e);r.layers=this.layers,this.add(r);let o=new hn(Vs,Ws,t,e);o.layers=this.layers,this.add(o);let a=new hn(Vs,Ws,t,e);a.layers=this.layers,this.add(a);let l=new hn(Vs,Ws,t,e);l.layers=this.layers,this.add(l);let c=new hn(Vs,Ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},$o=class extends bn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:js,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yc=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new $o(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new le(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ke,blending:ri});r.uniforms.tEquirect.value=e;let o=new gt(s,r),a=e.minFilter;return e.minFilter===ps&&(e.minFilter=si),new _c(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},gl=new O,i0=new O,s0=new ie,yi=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=gl.subVectors(i,e).cross(i0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(gl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||s0.getNormalMatrix(t),s=this.coplanarPoint(gl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},os=new Hr,To=new O,zr=class{constructor(t=new yi,e=new yi,i=new yi,s=new yi,r=new yi,o=new yi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],E=s[13],y=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,m-p,v-f).normalize(),i[1].setComponents(l+r,d+c,m+p,v+f).normalize(),i[2].setComponents(l+o,d+h,m+g,v+E).normalize(),i[3].setComponents(l-o,d-h,m-g,v-E).normalize(),i[4].setComponents(l-a,d-u,m-_,v-y).normalize(),e===Mi)i[5].setComponents(l+a,d+u,m+_,v+y).normalize();else if(e===ko)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(To.x=s.normal.x>0?t.max.x:t.min.x,To.y=s.normal.y>0?t.max.y:t.min.y,To.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.__noRaf(s)}return{start:function(){t!==!0&&e!==null&&(i=n.__noRaf(s),t=!0)},stop:function(){n.__noCaf(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function r0(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wt=class n extends He{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let E=f*d-o;for(let y=0;y<c;y++){let v=y*u-r;g.push(v,-E,0),_.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){let y=E+c*f,v=E+c*(f+1),A=E+1+c*(f+1),S=E+1+c*f;p.push(y,v,S),p.push(v,A,S)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},o0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a0=`#ifdef USE_ALPHAHASH
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
#endif`,l0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d0=`#ifdef USE_AOMAP
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
#endif`,f0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p0=`#ifdef USE_BATCHING
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
#endif`,m0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y0=`#ifdef USE_IRIDESCENCE
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
#endif`,E0=`#ifdef USE_BUMPMAP
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
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,C0=`#define PI 3.141592653589793
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
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P0=`vec3 transformedNormal = objectNormal;
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
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y0=`#ifdef USE_GRADIENTMAP
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
}`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K0=`uniform bool receiveShadow;
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
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,j0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
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
#endif`,sm=`struct PhysicalMaterial {
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
}`,rm=`
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mm=`#if defined( USE_POINTS_UV )
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
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
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
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wm=`float getShadowMask() {
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
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
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
}`,dg=`#if DEPTH_PACKING == 3200
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
}`,fg=`#define DISTANCE
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
}`,pg=`#define DISTANCE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`uniform float scale;
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
}`,_g=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Mg=`#define LAMBERT
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
}`,xg=`#define LAMBERT
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
}`,Ag=`#define MATCAP
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
}`,bg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,Tg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Rg=`#define PHONG
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
}`,Cg=`#define STANDARD
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
}`,Fg=`#define STANDARD
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
}`,Pg=`#define TOON
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
}`,Ig=`#define TOON
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
}`,Dg=`uniform float size;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Bg=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Og=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:o0,alphahash_pars_fragment:a0,alphamap_fragment:l0,alphamap_pars_fragment:c0,alphatest_fragment:h0,alphatest_pars_fragment:u0,aomap_fragment:d0,aomap_pars_fragment:f0,batching_pars_vertex:p0,batching_vertex:m0,begin_vertex:g0,beginnormal_vertex:v0,bsdfs:_0,iridescence_fragment:y0,bumpmap_pars_fragment:E0,clipping_planes_fragment:M0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:b0,color_fragment:S0,color_pars_fragment:T0,color_pars_vertex:w0,color_vertex:R0,common:C0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:P0,displacementmap_pars_vertex:I0,displacementmap_vertex:D0,emissivemap_fragment:L0,emissivemap_pars_fragment:U0,colorspace_fragment:B0,colorspace_pars_fragment:N0,envmap_fragment:O0,envmap_common_pars_fragment:H0,envmap_pars_fragment:z0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:Q0,envmap_vertex:G0,fog_vertex:V0,fog_pars_vertex:W0,fog_fragment:X0,fog_pars_fragment:q0,gradientmap_pars_fragment:Y0,lightmap_pars_fragment:Z0,lights_lambert_fragment:$0,lights_lambert_pars_fragment:J0,lights_pars_begin:K0,lights_toon_fragment:j0,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:om,lights_fragment_end:am,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:um,map_fragment:dm,map_pars_fragment:fm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:gm,metalnessmap_pars_fragment:vm,morphinstance_vertex:_m,morphcolor_vertex:ym,morphnormal_vertex:Em,morphtarget_pars_vertex:Mm,morphtarget_vertex:xm,normal_fragment_begin:Am,normal_fragment_maps:bm,normal_pars_fragment:Sm,normal_pars_vertex:Tm,normal_vertex:wm,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Fm,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Im,opaque_fragment:Dm,packing:Lm,premultiplied_alpha_fragment:Um,project_vertex:Bm,dithering_fragment:Nm,dithering_pars_fragment:Om,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:zm,shadowmap_pars_fragment:km,shadowmap_pars_vertex:Gm,shadowmap_vertex:Vm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:qm,skinning_vertex:Ym,skinnormal_vertex:Zm,specularmap_fragment:$m,specularmap_pars_fragment:Jm,tonemapping_fragment:Km,tonemapping_pars_fragment:Qm,transmission_fragment:jm,transmission_pars_fragment:tg,uv_pars_fragment:eg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:sg,background_vert:rg,background_frag:og,backgroundCube_vert:ag,backgroundCube_frag:lg,cube_vert:cg,cube_frag:hg,depth_vert:ug,depth_frag:dg,distanceRGBA_vert:fg,distanceRGBA_frag:pg,equirect_vert:mg,equirect_frag:gg,linedashed_vert:vg,linedashed_frag:_g,meshbasic_vert:yg,meshbasic_frag:Eg,meshlambert_vert:Mg,meshlambert_frag:xg,meshmatcap_vert:Ag,meshmatcap_frag:bg,meshnormal_vert:Sg,meshnormal_frag:Tg,meshphong_vert:wg,meshphong_frag:Rg,meshphysical_vert:Cg,meshphysical_frag:Fg,meshtoon_vert:Pg,meshtoon_frag:Ig,points_vert:Dg,points_frag:Lg,shadow_vert:Ug,shadow_frag:Bg,sprite_vert:Ng,sprite_frag:Og},Et={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},ii={basic:{uniforms:pn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:pn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new kt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:pn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:pn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:pn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new kt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:pn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:pn([Et.points,Et.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:pn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:pn([Et.common,Et.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:pn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:pn([Et.sprite,Et.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:pn([Et.common,Et.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:pn([Et.lights,Et.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};ii.physical={uniforms:pn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var wo={r:0,b:0,g:0},as=new Si,Hg=new xe;function zg(n,t,e,i,s,r,o){let a=new kt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function _(E){let y=!1,v=g(E);v===null?f(a,l):v&&v.isColor&&(f(v,1),y=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===fa)?(h===void 0&&(h=new gt(new le(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:ir(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),as.copy(y.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(as)),h.material.toneMapped=fe.getTransfer(v.colorSpace)!==Ae,(u!==v||d!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new gt(new Wt(2,2),new Oe({name:"BackgroundMaterial",uniforms:ir(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=fe.getTransfer(v.colorSpace)!==Ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,y){E.getRGB(wo,wd(n)),i.buffers.color.setClear(wo.r,wo.g,wo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:_,addToRenderList:m}}function kg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,w,F,P,C){let B=!1,U=u(P,F,w);r!==U&&(r=U,c(r.object)),B=p(M,P,F,C),B&&g(M,P,F,C),C!==null&&t.update(C,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(M,w,F,P),C!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,w,F){let P=F.wireframe===!0,C=i[M.id];C===void 0&&(C={},i[M.id]=C);let B=C[w.id];B===void 0&&(B={},C[w.id]=B);let U=B[P];return U===void 0&&(U=d(l()),B[P]=U),U}function d(M){let w=[],F=[],P=[];for(let C=0;C<e;C++)w[C]=0,F[C]=0,P[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:P,object:M,attributes:{},index:null}}function p(M,w,F,P){let C=r.attributes,B=w.attributes,U=0,z=F.getAttributes();for(let H in z)if(z[H].location>=0){let et=C[H],K=B[H];if(K===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),et===void 0||et.attribute!==K||K&&et.data!==K.data)return!0;U++}return r.attributesNum!==U||r.index!==P}function g(M,w,F,P){let C={},B=w.attributes,U=0,z=F.getAttributes();for(let H in z)if(z[H].location>=0){let et=B[H];et===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(et=M.instanceColor));let K={};K.attribute=et,et&&et.data&&(K.data=et.data),C[H]=K,U++}r.attributes=C,r.attributesNum=U,r.index=P}function _(){let M=r.newAttributes;for(let w=0,F=M.length;w<F;w++)M[w]=0}function m(M){f(M,0)}function f(M,w){let F=r.newAttributes,P=r.enabledAttributes,C=r.attributeDivisors;F[M]=1,P[M]===0&&(n.enableVertexAttribArray(M),P[M]=1),C[M]!==w&&(n.vertexAttribDivisor(M,w),C[M]=w)}function E(){let M=r.newAttributes,w=r.enabledAttributes;for(let F=0,P=w.length;F<P;F++)w[F]!==M[F]&&(n.disableVertexAttribArray(F),w[F]=0)}function y(M,w,F,P,C,B,U){U===!0?n.vertexAttribIPointer(M,w,F,C,B):n.vertexAttribPointer(M,w,F,P,C,B)}function v(M,w,F,P){_();let C=P.attributes,B=F.getAttributes(),U=w.defaultAttributeValues;for(let z in B){let H=B[z];if(H.location>=0){let Z=C[z];if(Z===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){let et=Z.normalized,K=Z.itemSize,ft=t.get(Z);if(ft===void 0)continue;let ht=ft.buffer,W=ft.type,tt=ft.bytesPerElement,ct=W===n.INT||W===n.UNSIGNED_INT||Z.gpuType===th;if(Z.isInterleavedBufferAttribute){let rt=Z.data,vt=rt.stride,bt=Z.offset;if(rt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<H.locationSize;Ut++)f(H.location+Ut,rt.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ut=0;Ut<H.locationSize;Ut++)m(H.location+Ut);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let Ut=0;Ut<H.locationSize;Ut++)y(H.location+Ut,K/H.locationSize,W,et,vt*tt,(bt+K/H.locationSize*Ut)*tt,ct)}else{if(Z.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)f(H.location+rt,Z.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let rt=0;rt<H.locationSize;rt++)y(H.location+rt,K/H.locationSize,W,et,K*tt,K/H.locationSize*rt*tt,ct)}}else if(U!==void 0){let et=U[z];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(H.location,et);break;case 3:n.vertexAttrib3fv(H.location,et);break;case 4:n.vertexAttrib4fv(H.location,et);break;default:n.vertexAttrib1fv(H.location,et)}}}}E()}function A(){b();for(let M in i){let w=i[M];for(let F in w){let P=w[F];for(let C in P)h(P[C].object),delete P[C];delete w[F]}delete i[M]}}function S(M){if(i[M.id]===void 0)return;let w=i[M.id];for(let F in w){let P=w[F];for(let C in P)h(P[C].object),delete P[C];delete w[F]}delete i[M.id]}function T(M){for(let w in i){let F=i[w];if(F[M.id]===void 0)continue;let P=F[M.id];for(let C in P)h(P[C].object),delete P[C];delete F[M.id]}}function b(){x(),o=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Gg(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Pn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let b=T===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ai&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ei&&!b)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:S}}function Wg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new yi,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:i,y=E*4,v=f.clippingState||null;l.value=v,v=h(g,d,y,p);for(let A=0;A!==y;++A)v[A]=e[A];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Xg(n){let t=new WeakMap;function e(o,a){return a===Nl?o.mapping=js:a===Ol&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Nl||a===Ol)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new yc(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var sr=class extends Zo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qs=4,Iu=[.125,.215,.35,.446,.526,.582],ds=20,vl=new sr,Du=new kt,_l=null,yl=0,El=0,Ml=!1,cs=(1+Math.sqrt(5))/2,Xs=1/cs,Lu=[new O(-cs,Xs,0),new O(cs,Xs,0),new O(-Xs,0,cs),new O(Xs,0,cs),new O(0,cs,-Xs),new O(0,cs,Xs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Jo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){_l=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_l,yl,El),this._renderer.xr.enabled=Ml,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===js||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_l=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:si,minFilter:si,generateMipmaps:!1,type:Tn,format:Pn,colorSpace:$i,depthBuffer:!1},s=Uu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qg(r)),this._blurMaterial=Yg(r,t,e)}return s}_compileMaterial(t){let e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,vl)}_sceneToCubeUV(t,e,i,s){let a=new hn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Du),h.toneMapping=oi,h.autoClear=!1;let p=new De({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new gt(new le,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Du),_=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let y=this._cubeSize;Ro(s,E*y,f>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===js||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ro(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,vl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lu[(s-r-1)%Lu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new gt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ds-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ds;m>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);let f=[],E=0;for(let T=0;T<ds;++T){let b=T/_,x=Math.exp(-b*b/2);f.push(x),T===0?E+=x:T<m&&(E+=2*x)}for(let T=0;T<f.length;T++)f[T]=f[T]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;let v=this._sizeLods[s],A=3*v*(s>y-qs?s-y+qs:0),S=4*(this._cubeSize-v);Ro(e,A,S,3*v,2*v),l.setRenderTarget(e),l.render(u,vl)}};function qg(n){let t=[],e=[],i=[],s=n,r=n-qs+1+Iu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-qs?l=Iu[o-n+qs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let S=0;S<p;S++){let T=S%3*2/3-1,b=S>2?0:-1,x=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];E.set(x,_*g*S),y.set(d,m*g*S);let M=[S,S,S,S,S,S];v.set(M,f*g*S)}let A=new He;A.setAttribute("position",new un(E,_)),A.setAttribute("uv",new un(y,m)),A.setAttribute("faceIndex",new un(v,f)),t.push(A),s>qs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Uu(n,t,e){let i=new Qe(n,t,e);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Yg(n,t,e){let i=new Float32Array(ds),s=new O(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oh(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Bu(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Nu(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function oh(){return`

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
	`}function Zg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Nl||l===Ol,h=l===js||l===tr;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Jo(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Jo(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function $g(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Dr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Jg(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let y=0,v=E.length;y<v;y+=3){let A=E[y+0],S=E[y+1],T=E[y+2];d.push(A,S,S,T,T,A)}}else if(g!==void 0){let E=g.array;_=g.version;for(let y=0,v=E.length/3-1;y<v;y+=3){let A=y+0,S=y+1,T=y+2;d.push(A,S,S,T,T,A)}}else return;let m=new(Sd(d)?Yo:qo)(d,1);m.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Kg(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function u(d,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function jg(n,t,e){let i=new WeakMap,s=new be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let x=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*A*4*u),T=new Wo(S,v,A,u);T.type=Ei,T.needsUpdate=!0;let b=y*4;for(let M=0;M<u;M++){let w=m[M],F=f[M],P=E[M],C=v*A*4*M;for(let B=0;B<w.count;B++){let U=B*b;p===!0&&(s.fromBufferAttribute(w,B),S[C+U+0]=s.x,S[C+U+1]=s.y,S[C+U+2]=s.z,S[C+U+3]=0),g===!0&&(s.fromBufferAttribute(F,B),S[C+U+4]=s.x,S[C+U+5]=s.y,S[C+U+6]=s.z,S[C+U+7]=0),_===!0&&(s.fromBufferAttribute(P,B),S[C+U+8]=s.x,S[C+U+9]=s.y,S[C+U+10]=s.z,S[C+U+11]=P.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new at(v,A)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function t1(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var rr=class extends bn{constructor(t,e,i,s,r,o,a,l,c,h=$s){if(h!==$s&&h!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$s&&(i=bi),i===void 0&&h===nr&&(i=er),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Cd=new bn,Ou=new rr(1,1),Fd=new Wo,Pd=new gc,Id=new $o,Hu=[],zu=[],ku=new Float32Array(16),Gu=new Float32Array(9),Vu=new Float32Array(4);function dr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Hu[s];if(r===void 0&&(r=new Float32Array(s),Hu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ma(n,t){let e=zu[t];e===void 0&&(e=new Int32Array(t),zu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function e1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function n1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2fv(this.addr,t),qe(e,t)}}function i1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;n.uniform3fv(this.addr,t),qe(e,t)}}function s1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4fv(this.addr,t),qe(e,t)}}function r1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;Vu.set(i),n.uniformMatrix2fv(this.addr,!1,Vu),qe(e,i)}}function o1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;Gu.set(i),n.uniformMatrix3fv(this.addr,!1,Gu),qe(e,i)}}function a1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;ku.set(i),n.uniformMatrix4fv(this.addr,!1,ku),qe(e,i)}}function l1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function c1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2iv(this.addr,t),qe(e,t)}}function h1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3iv(this.addr,t),qe(e,t)}}function u1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4iv(this.addr,t),qe(e,t)}}function d1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function f1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2uiv(this.addr,t),qe(e,t)}}function p1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3uiv(this.addr,t),qe(e,t)}}function m1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4uiv(this.addr,t),qe(e,t)}}function g1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ou.compareFunction=bd,r=Ou):r=Cd,e.setTexture2D(t||r,s)}function v1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Pd,s)}function _1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Id,s)}function y1(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Fd,s)}function E1(n){switch(n){case 5126:return e1;case 35664:return n1;case 35665:return i1;case 35666:return s1;case 35674:return r1;case 35675:return o1;case 35676:return a1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return h1;case 35669:case 35673:return u1;case 5125:return d1;case 36294:return f1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return y1}}function M1(n,t){n.uniform1fv(this.addr,t)}function x1(n,t){let e=dr(t,this.size,2);n.uniform2fv(this.addr,e)}function A1(n,t){let e=dr(t,this.size,3);n.uniform3fv(this.addr,e)}function b1(n,t){let e=dr(t,this.size,4);n.uniform4fv(this.addr,e)}function S1(n,t){let e=dr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function T1(n,t){let e=dr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function w1(n,t){let e=dr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function R1(n,t){n.uniform1iv(this.addr,t)}function C1(n,t){n.uniform2iv(this.addr,t)}function F1(n,t){n.uniform3iv(this.addr,t)}function P1(n,t){n.uniform4iv(this.addr,t)}function I1(n,t){n.uniform1uiv(this.addr,t)}function D1(n,t){n.uniform2uiv(this.addr,t)}function L1(n,t){n.uniform3uiv(this.addr,t)}function U1(n,t){n.uniform4uiv(this.addr,t)}function B1(n,t,e){let i=this.cache,s=t.length,r=ma(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Cd,r[o])}function N1(n,t,e){let i=this.cache,s=t.length,r=ma(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Pd,r[o])}function O1(n,t,e){let i=this.cache,s=t.length,r=ma(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Id,r[o])}function H1(n,t,e){let i=this.cache,s=t.length,r=ma(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fd,r[o])}function z1(n){switch(n){case 5126:return M1;case 35664:return x1;case 35665:return A1;case 35666:return b1;case 35674:return S1;case 35675:return T1;case 35676:return w1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return F1;case 35669:case 35673:return P1;case 5125:return I1;case 36294:return D1;case 36295:return L1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return H1}}var Ec=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=E1(e.type)}},Mc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=z1(e.type)}},xc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},xl=/(\w+)(\])?(\[|\.)?/g;function Wu(n,t){n.seq.push(t),n.map[t.id]=t}function k1(n,t,e){let i=n.name,s=i.length;for(xl.lastIndex=0;;){let r=xl.exec(i),o=xl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wu(e,c===void 0?new Ec(a,n,t):new Mc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new xc(a),Wu(e,u)),e=u}}}var Ks=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);k1(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Xu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var G1=37297,V1=0;function W1(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var qu=new ie;function X1(n){fe._getMatrix(qu,fe.workingColorSpace,n);let t=`mat3( ${qu.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(n)){case pa:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Yu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+W1(n.getShaderSource(t),o)}else return s}function q1(n,t){let e=X1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Y1(n,t){let e;switch(t){case yp:e="Linear";break;case Ep:e="Reinhard";break;case Mp:e="Cineon";break;case xp:e="ACESFilmic";break;case bp:e="AgX";break;case Sp:e="Neutral";break;case Ap:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Co=new O;function Z1(){fe.getLuminanceCoefficients(Co);let n=Co.x.toFixed(4),t=Co.y.toFixed(4),e=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function J1(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function K1(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Lr(n){return n!==""}function Zu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $u(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(n){return n.replace(Q1,t2)}var j1=new Map;function t2(n,t){let e=re[t];if(e===void 0){let i=j1.get(t);if(i!==void 0)e=re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ac(e)}var e2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(n){return n.replace(e2,n2)}function n2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ku(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function i2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_i&&(t="SHADOWMAP_TYPE_VSM"),t}function s2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case js:case tr:t="ENVMAP_TYPE_CUBE";break;case fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function o2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ud:t="ENVMAP_BLENDING_MULTIPLY";break;case vp:t="ENVMAP_BLENDING_MIX";break;case _p:t="ENVMAP_BLENDING_ADD";break}return t}function a2(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function l2(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=i2(e),c=s2(e),h=r2(e),u=o2(e),d=a2(e),p=$1(e),g=J1(r),_=s.createProgram(),m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),f.length>0&&(f+=`
`)):(m=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),f=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?re.tonemapping_pars_fragment:"",e.toneMapping!==oi?Y1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,q1("linearToOutputTexel",e.outputColorSpace),Z1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Ac(o),o=Zu(o,e),o=$u(o,e),a=Ac(a),a=Zu(a,e),a=$u(a,e),o=Ju(o),a=Ju(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=E+m+o,v=E+f+a,A=Xu(s,s.VERTEX_SHADER,y),S=Xu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(w){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(_).trim(),P=s.getShaderInfoLog(A).trim(),C=s.getShaderInfoLog(S).trim(),B=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,S);else{let z=Yu(s,A,"vertex"),H=Yu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+z+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(P===""||C==="")&&(U=!1);U&&(w.diagnostics={runnable:B,programLog:F,vertexShader:{log:P,prefix:m},fragmentShader:{log:C,prefix:f}})}s.deleteShader(A),s.deleteShader(S),b=new Ks(s,_),x=K1(s,_)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,G1)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=S,this}var c2=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sc(t),e.set(t,i)),i}},Sc=class{constructor(t){this.id=c2++,this.code=t,this.usedTimes=0}};function h2(n,t,e,i,s,r,o){let a=new Xo,l=new bc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,w,F,P){let C=F.fog,B=P.geometry,U=x.isMeshStandardMaterial?F.environment:null,z=(x.isMeshStandardMaterial?e:t).get(x.envMap||U),H=z&&z.mapping===fa?z.image.height:null,Z=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,K=et!==void 0?et.length:0,ft=0;B.morphAttributes.position!==void 0&&(ft=1),B.morphAttributes.normal!==void 0&&(ft=2),B.morphAttributes.color!==void 0&&(ft=3);let ht,W,tt,ct;if(Z){let Me=ii[Z];ht=Me.vertexShader,W=Me.fragmentShader}else ht=x.vertexShader,W=x.fragmentShader,l.update(x),tt=l.getVertexShaderID(x),ct=l.getFragmentShaderID(x);let rt=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),bt=P.isInstancedMesh===!0,Ut=P.isBatchedMesh===!0,Yt=!!x.map,st=!!x.matcap,dt=!!z,N=!!x.aoMap,zt=!!x.lightMap,ut=!!x.bumpMap,Pt=!!x.normalMap,_t=!!x.displacementMap,Xt=!!x.emissiveMap,Ct=!!x.metalnessMap,L=!!x.roughnessMap,R=x.anisotropy>0,X=x.clearcoat>0,nt=x.dispersion>0,lt=x.iridescence>0,it=x.sheen>0,Lt=x.transmission>0,Mt=R&&!!x.anisotropyMap,Ft=X&&!!x.clearcoatMap,he=X&&!!x.clearcoatNormalMap,pt=X&&!!x.clearcoatRoughnessMap,It=lt&&!!x.iridescenceMap,qt=lt&&!!x.iridescenceThicknessMap,Zt=it&&!!x.sheenColorMap,Dt=it&&!!x.sheenRoughnessMap,ue=!!x.specularMap,se=!!x.specularColorMap,we=!!x.specularIntensityMap,k=Lt&&!!x.transmissionMap,xt=Lt&&!!x.thicknessMap,j=!!x.gradientMap,ot=!!x.alphaMap,wt=x.alphaTest>0,St=!!x.alphaHash,ee=!!x.extensions,Ne=oi;x.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ne=n.toneMapping);let an={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:ht,fragmentShader:W,defines:x.defines,customVertexShaderID:tt,customFragmentShaderID:ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ut,batchingColor:Ut&&P._colorsTexture!==null,instancing:bt,instancingColor:bt&&P.instanceColor!==null,instancingMorph:bt&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:$i,alphaToCoverage:!!x.alphaToCoverage,map:Yt,matcap:st,envMap:dt,envMapMode:dt&&z.mapping,envMapCubeUVHeight:H,aoMap:N,lightMap:zt,bumpMap:ut,normalMap:Pt,displacementMap:d&&_t,emissiveMap:Xt,normalMapObjectSpace:Pt&&x.normalMapType===Cp,normalMapTangentSpace:Pt&&x.normalMapType===Ad,metalnessMap:Ct,roughnessMap:L,anisotropy:R,anisotropyMap:Mt,clearcoat:X,clearcoatMap:Ft,clearcoatNormalMap:he,clearcoatRoughnessMap:pt,dispersion:nt,iridescence:lt,iridescenceMap:It,iridescenceThicknessMap:qt,sheen:it,sheenColorMap:Zt,sheenRoughnessMap:Dt,specularMap:ue,specularColorMap:se,specularIntensityMap:we,transmission:Lt,transmissionMap:k,thicknessMap:xt,gradientMap:j,opaque:x.transparent===!1&&x.blending===Zs&&x.alphaToCoverage===!1,alphaMap:ot,alphaTest:wt,alphaHash:St,combine:x.combine,mapUv:Yt&&_(x.map.channel),aoMapUv:N&&_(x.aoMap.channel),lightMapUv:zt&&_(x.lightMap.channel),bumpMapUv:ut&&_(x.bumpMap.channel),normalMapUv:Pt&&_(x.normalMap.channel),displacementMapUv:_t&&_(x.displacementMap.channel),emissiveMapUv:Xt&&_(x.emissiveMap.channel),metalnessMapUv:Ct&&_(x.metalnessMap.channel),roughnessMapUv:L&&_(x.roughnessMap.channel),anisotropyMapUv:Mt&&_(x.anisotropyMap.channel),clearcoatMapUv:Ft&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(x.sheenRoughnessMap.channel),specularMapUv:ue&&_(x.specularMap.channel),specularColorMapUv:se&&_(x.specularColorMap.channel),specularIntensityMapUv:we&&_(x.specularIntensityMap.channel),transmissionMapUv:k&&_(x.transmissionMap.channel),thicknessMapUv:xt&&_(x.thicknessMap.channel),alphaMapUv:ot&&_(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Pt||R),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(Yt||ot),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:vt,skinning:P.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Yt&&x.map.isVideoTexture===!0&&fe.getTransfer(x.map.colorSpace)===Ae,decodeVideoTextureEmissive:Xt&&x.emissiveMap.isVideoTexture===!0&&fe.getTransfer(x.emissiveMap.colorSpace)===Ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pe,flipSided:x.side===Ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ee&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&x.extensions.multiDraw===!0||Ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return an.vertexUv1s=c.has(1),an.vertexUv2s=c.has(2),an.vertexUv3s=c.has(3),c.clear(),an}function f(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let w in x.defines)M.push(w),M.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(E(M,x),y(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function E(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){let M=g[x.type],w;if(M){let F=ii[M];w=ur.clone(F.uniforms)}else w=x.uniforms;return w}function A(x,M){let w;for(let F=0,P=h.length;F<P;F++){let C=h[F];if(C.cacheKey===M){w=C,++w.usedTimes;break}}return w===void 0&&(w=new l2(n,M,x,r),h.push(w)),w}function S(x){if(--x.usedTimes===0){let M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),x.destroy()}}function T(x){l.remove(x)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:b}}function u2(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function d2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Qu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ju(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,p,g,_,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||d2),i.length>1&&i.sort(d||Qu),s.length>1&&s.sort(d||Qu)}function h(){for(let u=t,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function f2(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new ju,n.set(i,[o])):s>=r.length?(o=new ju,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function p2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new kt};break;case"SpotLight":e={position:new O,direction:new O,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function m2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var g2=0;function v2(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function _2(n){let t=new p2,e=m2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,r=new xe,o=new xe;function a(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,y=0,v=0,A=0,S=0,T=0;c.sort(v2);for(let x=0,M=c.length;x<M;x++){let w=c[x],F=w.color,P=w.intensity,C=w.distance,B=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=F.r*P,u+=F.g*P,d+=F.b*P;else if(w.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(w.sh.coefficients[U],P);T++}else if(w.isDirectionalLight){let U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let z=w.shadow,H=e.get(w);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=w.shadow.matrix,E++}i.directional[p]=U,p++}else if(w.isSpotLight){let U=t.get(w);U.position.setFromMatrixPosition(w.matrixWorld),U.color.copy(F).multiplyScalar(P),U.distance=C,U.coneCos=Math.cos(w.angle),U.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),U.decay=w.decay,i.spot[_]=U;let z=w.shadow;if(w.map&&(i.spotLightMap[A]=w.map,A++,z.updateMatrices(w),w.castShadow&&S++),i.spotLightMatrix[_]=z.matrix,w.castShadow){let H=e.get(w);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=B,v++}_++}else if(w.isRectAreaLight){let U=t.get(w);U.color.copy(F).multiplyScalar(P),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=U,m++}else if(w.isPointLight){let U=t.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),U.distance=w.distance,U.decay=w.decay,w.castShadow){let z=w.shadow,H=e.get(w);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=w.shadow.matrix,y++}i.point[g]=U,g++}else if(w.isHemisphereLight){let U=t.get(w);U.skyColor.copy(w.color).multiplyScalar(P),U.groundColor.copy(w.groundColor).multiplyScalar(P),i.hemi[f]=U,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let b=i.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==_||b.rectAreaLength!==m||b.hemiLength!==f||b.numDirectionalShadows!==E||b.numPointShadows!==y||b.numSpotShadows!==v||b.numSpotMaps!==A||b.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+A-S,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=T,b.directionalLength=p,b.pointLength=g,b.spotLength=_,b.rectAreaLength=m,b.hemiLength=f,b.numDirectionalShadows=E,b.numPointShadows=y,b.numSpotShadows=v,b.numSpotMaps=A,b.numLightProbes=T,i.version=g2++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let y=c[f];if(y.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function td(n){let t=new _2(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function y2(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new td(n),t.set(s,[a])):r>=o.length?(a=new td(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Tc=class extends gs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wc=class extends gs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},E2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M2=`uniform sampler2D shadow_pass;
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
}`;function x2(n,t,e){let i=new zr,s=new at,r=new at,o=new be,a=new Tc({depthPacking:Rp}),l=new wc,c={},h=e.maxTextureSize,u={[Wi]:Ke,[Ke]:Wi,[pe]:pe},d=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:E2,fragmentShader:M2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new He;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hd;let f=this.type;this.render=function(S,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let x=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ri),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let P=f!==_i&&this.type===_i,C=f===_i&&this.type!==_i;for(let B=0,U=S.length;B<U;B++){let z=S[B],H=z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Z=H.getFrameExtents();if(s.multiply(Z),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,H.mapSize.y=r.y)),H.map===null||P===!0||C===!0){let K=this.type!==_i?{minFilter:mn,magFilter:mn}:{};H.map!==null&&H.map.dispose(),H.map=new Qe(s.x,s.y,K),H.map.texture.name=z.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let et=H.getViewportCount();for(let K=0;K<et;K++){let ft=H.getViewport(K);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),F.viewport(o),H.updateMatrices(z,K),i=H.getFrustum(),v(T,b,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===_i&&E(H,b),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(x,M,w)};function E(S,T){let b=t.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Qe(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,b,d,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,b,p,_,null)}function y(S,T,b,x){let M=null,w=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)M=w;else if(M=b.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let F=M.uuid,P=T.uuid,C=c[F];C===void 0&&(C={},c[F]=C);let B=C[P];B===void 0&&(B=M.clone(),C[P]=B,T.addEventListener("dispose",A)),M=B}if(M.visible=T.visible,M.wireframe=T.wireframe,x===_i?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=n.properties.get(M);F.light=b}return M}function v(S,T,b,x,M){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===_i)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);let P=t.update(S),C=S.material;if(Array.isArray(C)){let B=P.groups;for(let U=0,z=B.length;U<z;U++){let H=B[U],Z=C[H.materialIndex];if(Z&&Z.visible){let et=y(S,Z,x,M);S.onBeforeShadow(n,S,T,b,P,et,H),n.renderBufferDirect(b,null,P,et,S,H),S.onAfterShadow(n,S,T,b,P,et,H)}}}else if(C.visible){let B=y(S,C,x,M);S.onBeforeShadow(n,S,T,b,P,B,null),n.renderBufferDirect(b,null,P,B,S,null),S.onAfterShadow(n,S,T,b,P,B,null)}}let F=S.children;for(let P=0,C=F.length;P<C;P++)v(F[P],T,b,x,M)}function A(S){S.target.removeEventListener("dispose",A);for(let b in c){let x=c[b],M=S.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}var A2={[Fl]:Pl,[Il]:Ul,[Dl]:Bl,[Qs]:Ll,[Pl]:Fl,[Ul]:Il,[Bl]:Dl,[Ll]:Qs};function b2(n,t){function e(){let k=!1,xt=new be,j=null,ot=new be(0,0,0,0);return{setMask:function(wt){j!==wt&&!k&&(n.colorMask(wt,wt,wt,wt),j=wt)},setLocked:function(wt){k=wt},setClear:function(wt,St,ee,Ne,an){an===!0&&(wt*=Ne,St*=Ne,ee*=Ne),xt.set(wt,St,ee,Ne),ot.equals(xt)===!1&&(n.clearColor(wt,St,ee,Ne),ot.copy(xt))},reset:function(){k=!1,j=null,ot.set(-1,0,0,0)}}}function i(){let k=!1,xt=!1,j=null,ot=null,wt=null;return{setReversed:function(St){if(xt!==St){let ee=t.get("EXT_clip_control");xt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);let Ne=wt;wt=null,this.setClear(Ne)}xt=St},getReversed:function(){return xt},setTest:function(St){St?rt(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(St){j!==St&&!k&&(n.depthMask(St),j=St)},setFunc:function(St){if(xt&&(St=A2[St]),ot!==St){switch(St){case Fl:n.depthFunc(n.NEVER);break;case Pl:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case Dl:n.depthFunc(n.EQUAL);break;case Ll:n.depthFunc(n.GEQUAL);break;case Ul:n.depthFunc(n.GREATER);break;case Bl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=St}},setLocked:function(St){k=St},setClear:function(St){wt!==St&&(xt&&(St=1-St),n.clearDepth(St),wt=St)},reset:function(){k=!1,j=null,ot=null,wt=null,xt=!1}}}function s(){let k=!1,xt=null,j=null,ot=null,wt=null,St=null,ee=null,Ne=null,an=null;return{setTest:function(Me){k||(Me?rt(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(Me){xt!==Me&&!k&&(n.stencilMask(Me),xt=Me)},setFunc:function(Me,$n,ui){(j!==Me||ot!==$n||wt!==ui)&&(n.stencilFunc(Me,$n,ui),j=Me,ot=$n,wt=ui)},setOp:function(Me,$n,ui){(St!==Me||ee!==$n||Ne!==ui)&&(n.stencilOp(Me,$n,ui),St=Me,ee=$n,Ne=ui)},setLocked:function(Me){k=Me},setClear:function(Me){an!==Me&&(n.clearStencil(Me),an=Me)},reset:function(){k=!1,xt=null,j=null,ot=null,wt=null,St=null,ee=null,Ne=null,an=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,y=null,v=null,A=null,S=null,T=new kt(0,0,0),b=0,x=!1,M=null,w=null,F=null,P=null,C=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,z=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=z>=1):H.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=z>=2);let Z=null,et={},K=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),ht=new be().fromArray(K),W=new be().fromArray(ft);function tt(k,xt,j,ot){let wt=new Uint8Array(4),St=n.createTexture();n.bindTexture(k,St),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<j;ee++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(xt+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return St}let ct={};ct[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(n.DEPTH_TEST),o.setFunc(Qs),ut(!1),Pt(iu),rt(n.CULL_FACE),N(ri);function rt(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function vt(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function bt(k,xt){return u[k]!==xt?(n.bindFramebuffer(k,xt),u[k]=xt,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=xt),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function Ut(k,xt){let j=p,ot=!1;if(k){j=d.get(xt),j===void 0&&(j=[],d.set(xt,j));let wt=k.textures;if(j.length!==wt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let St=0,ee=wt.length;St<ee;St++)j[St]=n.COLOR_ATTACHMENT0+St;j.length=wt.length,ot=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ot=!0);ot&&n.drawBuffers(j)}function Yt(k){return g!==k?(n.useProgram(k),g=k,!0):!1}let st={[hs]:n.FUNC_ADD,[tp]:n.FUNC_SUBTRACT,[ep]:n.FUNC_REVERSE_SUBTRACT};st[np]=n.MIN,st[ip]=n.MAX;let dt={[sp]:n.ZERO,[rp]:n.ONE,[op]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[dp]:n.SRC_ALPHA_SATURATE,[hp]:n.DST_COLOR,[lp]:n.DST_ALPHA,[ap]:n.ONE_MINUS_SRC_COLOR,[Cl]:n.ONE_MINUS_SRC_ALPHA,[up]:n.ONE_MINUS_DST_COLOR,[cp]:n.ONE_MINUS_DST_ALPHA,[fp]:n.CONSTANT_COLOR,[pp]:n.ONE_MINUS_CONSTANT_COLOR,[mp]:n.CONSTANT_ALPHA,[gp]:n.ONE_MINUS_CONSTANT_ALPHA};function N(k,xt,j,ot,wt,St,ee,Ne,an,Me){if(k===ri){_===!0&&(vt(n.BLEND),_=!1);return}if(_===!1&&(rt(n.BLEND),_=!0),k!==jf){if(k!==m||Me!==x){if((f!==hs||v!==hs)&&(n.blendEquation(n.FUNC_ADD),f=hs,v=hs),Me)switch(k){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ho:n.blendFunc(n.ONE,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ru:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ho:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ru:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}E=null,y=null,A=null,S=null,T.set(0,0,0),b=0,m=k,x=Me}return}wt=wt||xt,St=St||j,ee=ee||ot,(xt!==f||wt!==v)&&(n.blendEquationSeparate(st[xt],st[wt]),f=xt,v=wt),(j!==E||ot!==y||St!==A||ee!==S)&&(n.blendFuncSeparate(dt[j],dt[ot],dt[St],dt[ee]),E=j,y=ot,A=St,S=ee),(Ne.equals(T)===!1||an!==b)&&(n.blendColor(Ne.r,Ne.g,Ne.b,an),T.copy(Ne),b=an),m=k,x=!1}function zt(k,xt){k.side===pe?vt(n.CULL_FACE):rt(n.CULL_FACE);let j=k.side===Ke;xt&&(j=!j),ut(j),k.blending===Zs&&k.transparent===!1?N(ri):N(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let ot=k.stencilWrite;a.setTest(ot),ot&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Xt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(k){M!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),M=k)}function Pt(k){k!==Kf?(rt(n.CULL_FACE),k!==w&&(k===iu?n.cullFace(n.BACK):k===Qf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),w=k}function _t(k){k!==F&&(U&&n.lineWidth(k),F=k)}function Xt(k,xt,j){k?(rt(n.POLYGON_OFFSET_FILL),(P!==xt||C!==j)&&(n.polygonOffset(xt,j),P=xt,C=j)):vt(n.POLYGON_OFFSET_FILL)}function Ct(k){k?rt(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function L(k){k===void 0&&(k=n.TEXTURE0+B-1),Z!==k&&(n.activeTexture(k),Z=k)}function R(k,xt,j){j===void 0&&(Z===null?j=n.TEXTURE0+B-1:j=Z);let ot=et[j];ot===void 0&&(ot={type:void 0,texture:void 0},et[j]=ot),(ot.type!==k||ot.texture!==xt)&&(Z!==j&&(n.activeTexture(j),Z=j),n.bindTexture(k,xt||ct[k]),ot.type=k,ot.texture=xt)}function X(){let k=et[Z];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function nt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(k){ht.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ht.copy(k))}function Dt(k){W.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),W.copy(k))}function ue(k,xt){let j=c.get(xt);j===void 0&&(j=new WeakMap,c.set(xt,j));let ot=j.get(k);ot===void 0&&(ot=n.getUniformBlockIndex(xt,k.name),j.set(k,ot))}function se(k,xt){let ot=c.get(xt).get(k);l.get(xt)!==ot&&(n.uniformBlockBinding(xt,ot,k.__bindingPointIndex),l.set(xt,ot))}function we(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Z=null,et={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,y=null,v=null,A=null,S=null,T=new kt(0,0,0),b=0,x=!1,M=null,w=null,F=null,P=null,C=null,ht.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:vt,bindFramebuffer:bt,drawBuffers:Ut,useProgram:Yt,setBlending:N,setMaterial:zt,setFlipSided:ut,setCullFace:Pt,setLineWidth:_t,setPolygonOffset:Xt,setScissorTest:Ct,activeTexture:L,bindTexture:R,unbindTexture:X,compressedTexImage2D:nt,compressedTexImage3D:lt,texImage2D:It,texImage3D:qt,updateUBOMapping:ue,uniformBlockBinding:se,texStorage2D:he,texStorage3D:pt,texSubImage2D:it,texSubImage3D:Lt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Ft,scissor:Zt,viewport:Dt,reset:we}}function ed(n,t,e,i){let s=S2(i);switch(e){case gd:return n*t;case _d:return n*t;case yd:return n*t*2;case Ed:return n*t/s.components*s.byteLength;case ih:return n*t/s.components*s.byteLength;case Md:return n*t*2/s.components*s.byteLength;case sh:return n*t*2/s.components*s.byteLength;case vd:return n*t*3/s.components*s.byteLength;case Pn:return n*t*4/s.components*s.byteLength;case rh:return n*t*4/s.components*s.byteLength;case Lo:case Uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bo:case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case kl:case Vl:return Math.max(n,16)*Math.max(t,8)/4;case zl:case Gl:return Math.max(n,8)*Math.max(t,8)/2;case Wl:case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Oo:case ac:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case xd:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case hc:case uc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S2(n){switch(n){case Ai:case fd:return{byteLength:1,components:1};case Or:case pd:case Tn:return{byteLength:2,components:1};case eh:case nh:return{byteLength:2,components:4};case bi:case th:case Ei:return{byteLength:4,components:1};case md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function T2(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,R){return p?new OffscreenCanvas(L,R):Go("canvas")}function _(L,R,X){let nt=1,lt=Ct(L);if((lt.width>X||lt.height>X)&&(nt=X/Math.max(lt.width,lt.height)),nt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let it=Math.floor(nt*lt.width),Lt=Math.floor(nt*lt.height);u===void 0&&(u=g(it,Lt));let Mt=R?g(it,Lt):u;return Mt.width=it,Mt.height=Lt,Mt.getContext("2d").drawImage(L,0,0,it,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+it+"x"+Lt+")."),Mt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),L;return L}function m(L){return L.generateMipmaps}function f(L){n.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(L,R,X,nt,lt=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let it=R;if(R===n.RED&&(X===n.FLOAT&&(it=n.R32F),X===n.HALF_FLOAT&&(it=n.R16F),X===n.UNSIGNED_BYTE&&(it=n.R8)),R===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.R8UI),X===n.UNSIGNED_SHORT&&(it=n.R16UI),X===n.UNSIGNED_INT&&(it=n.R32UI),X===n.BYTE&&(it=n.R8I),X===n.SHORT&&(it=n.R16I),X===n.INT&&(it=n.R32I)),R===n.RG&&(X===n.FLOAT&&(it=n.RG32F),X===n.HALF_FLOAT&&(it=n.RG16F),X===n.UNSIGNED_BYTE&&(it=n.RG8)),R===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.RG8UI),X===n.UNSIGNED_SHORT&&(it=n.RG16UI),X===n.UNSIGNED_INT&&(it=n.RG32UI),X===n.BYTE&&(it=n.RG8I),X===n.SHORT&&(it=n.RG16I),X===n.INT&&(it=n.RG32I)),R===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.RGB8UI),X===n.UNSIGNED_SHORT&&(it=n.RGB16UI),X===n.UNSIGNED_INT&&(it=n.RGB32UI),X===n.BYTE&&(it=n.RGB8I),X===n.SHORT&&(it=n.RGB16I),X===n.INT&&(it=n.RGB32I)),R===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),X===n.UNSIGNED_INT&&(it=n.RGBA32UI),X===n.BYTE&&(it=n.RGBA8I),X===n.SHORT&&(it=n.RGBA16I),X===n.INT&&(it=n.RGBA32I)),R===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),R===n.RGBA){let Lt=lt?pa:fe.getTransfer(nt);X===n.FLOAT&&(it=n.RGBA32F),X===n.HALF_FLOAT&&(it=n.RGBA16F),X===n.UNSIGNED_BYTE&&(it=Lt===Ae?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function v(L,R){let X;return L?R===null||R===bi||R===er?X=n.DEPTH24_STENCIL8:R===Ei?X=n.DEPTH32F_STENCIL8:R===Or&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===bi||R===er?X=n.DEPTH_COMPONENT24:R===Ei?X=n.DEPTH_COMPONENT32F:R===Or&&(X=n.DEPTH_COMPONENT16),X}function A(L,R){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==mn&&L.minFilter!==si?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function S(L){let R=L.target;R.removeEventListener("dispose",S),b(R),R.isVideoTexture&&h.delete(R)}function T(L){let R=L.target;R.removeEventListener("dispose",T),M(R)}function b(L){let R=i.get(L);if(R.__webglInit===void 0)return;let X=L.source,nt=d.get(X);if(nt){let lt=nt[R.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&x(L),Object.keys(nt).length===0&&d.delete(X)}i.remove(L)}function x(L){let R=i.get(L);n.deleteTexture(R.__webglTexture);let X=L.source,nt=d.get(X);delete nt[R.__cacheKey],o.memory.textures--}function M(L){let R=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(R.__webglFramebuffer[nt]))for(let lt=0;lt<R.__webglFramebuffer[nt].length;lt++)n.deleteFramebuffer(R.__webglFramebuffer[nt][lt]);else n.deleteFramebuffer(R.__webglFramebuffer[nt]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[nt])}else{if(Array.isArray(R.__webglFramebuffer))for(let nt=0;nt<R.__webglFramebuffer.length;nt++)n.deleteFramebuffer(R.__webglFramebuffer[nt]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let nt=0;nt<R.__webglColorRenderbuffer.length;nt++)R.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[nt]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let X=L.textures;for(let nt=0,lt=X.length;nt<lt;nt++){let it=i.get(X[nt]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),o.memory.textures--),i.remove(X[nt])}i.remove(L)}let w=0;function F(){w=0}function P(){let L=w;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),w+=1,L}function C(L){let R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function B(L,R){let X=i.get(L);if(L.isVideoTexture&&_t(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){let nt=L.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(X,L,R);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+R)}function U(L,R){let X=i.get(L);if(L.version>0&&X.__version!==L.version){W(X,L,R);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+R)}function z(L,R){let X=i.get(L);if(L.version>0&&X.__version!==L.version){W(X,L,R);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+R)}function H(L,R){let X=i.get(L);if(L.version>0&&X.__version!==L.version){tt(X,L,R);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+R)}let Z={[An]:n.REPEAT,[fs]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},et={[mn]:n.NEAREST,[Tp]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[si]:n.LINEAR,[Ya]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},K={[Fp]:n.NEVER,[Bp]:n.ALWAYS,[Pp]:n.LESS,[bd]:n.LEQUAL,[Ip]:n.EQUAL,[Up]:n.GEQUAL,[Dp]:n.GREATER,[Lp]:n.NOTEQUAL};function ft(L,R){if(R.type===Ei&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===si||R.magFilter===Ya||R.magFilter===lo||R.magFilter===ps||R.minFilter===si||R.minFilter===Ya||R.minFilter===lo||R.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,Z[R.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,Z[R.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,Z[R.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,et[R.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,et[R.minFilter]),R.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,K[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===mn||R.minFilter!==lo&&R.minFilter!==ps||R.type===Ei&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function ht(L,R){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",S));let nt=R.source,lt=d.get(nt);lt===void 0&&(lt={},d.set(nt,lt));let it=C(R);if(it!==L.__cacheKey){lt[it]===void 0&&(lt[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),lt[it].usedTimes++;let Lt=lt[L.__cacheKey];Lt!==void 0&&(lt[L.__cacheKey].usedTimes--,Lt.usedTimes===0&&x(R)),L.__cacheKey=it,L.__webglTexture=lt[it].texture}return X}function W(L,R,X){let nt=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(nt=n.TEXTURE_3D);let lt=ht(L,R),it=R.source;e.bindTexture(nt,L.__webglTexture,n.TEXTURE0+X);let Lt=i.get(it);if(it.version!==Lt.__version||lt===!0){e.activeTexture(n.TEXTURE0+X);let Mt=fe.getPrimaries(fe.workingColorSpace),Ft=R.colorSpace===Gi?null:fe.getPrimaries(R.colorSpace),he=R.colorSpace===Gi||Mt===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let pt=_(R.image,!1,s.maxTextureSize);pt=Xt(R,pt);let It=r.convert(R.format,R.colorSpace),qt=r.convert(R.type),Zt=y(R.internalFormat,It,qt,R.colorSpace,R.isVideoTexture);ft(nt,R);let Dt,ue=R.mipmaps,se=R.isVideoTexture!==!0,we=Lt.__version===void 0||lt===!0,k=it.dataReady,xt=A(R,pt);if(R.isDepthTexture)Zt=v(R.format===nr,R.type),we&&(se?e.texStorage2D(n.TEXTURE_2D,1,Zt,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Zt,pt.width,pt.height,0,It,qt,null));else if(R.isDataTexture)if(ue.length>0){se&&we&&e.texStorage2D(n.TEXTURE_2D,xt,Zt,ue[0].width,ue[0].height);for(let j=0,ot=ue.length;j<ot;j++)Dt=ue[j],se?k&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,Dt.width,Dt.height,It,qt,Dt.data):e.texImage2D(n.TEXTURE_2D,j,Zt,Dt.width,Dt.height,0,It,qt,Dt.data);R.generateMipmaps=!1}else se?(we&&e.texStorage2D(n.TEXTURE_2D,xt,Zt,pt.width,pt.height),k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt.width,pt.height,It,qt,pt.data)):e.texImage2D(n.TEXTURE_2D,0,Zt,pt.width,pt.height,0,It,qt,pt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){se&&we&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Zt,ue[0].width,ue[0].height,pt.depth);for(let j=0,ot=ue.length;j<ot;j++)if(Dt=ue[j],R.format!==Pn)if(It!==null)if(se){if(k)if(R.layerUpdates.size>0){let wt=ed(Dt.width,Dt.height,R.format,R.type);for(let St of R.layerUpdates){let ee=Dt.data.subarray(St*wt/Dt.data.BYTES_PER_ELEMENT,(St+1)*wt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,St,Dt.width,Dt.height,1,It,ee)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Dt.width,Dt.height,pt.depth,It,Dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Zt,Dt.width,Dt.height,pt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Dt.width,Dt.height,pt.depth,It,qt,Dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,Zt,Dt.width,Dt.height,pt.depth,0,It,qt,Dt.data)}else{se&&we&&e.texStorage2D(n.TEXTURE_2D,xt,Zt,ue[0].width,ue[0].height);for(let j=0,ot=ue.length;j<ot;j++)Dt=ue[j],R.format!==Pn?It!==null?se?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,Dt.width,Dt.height,It,Dt.data):e.compressedTexImage2D(n.TEXTURE_2D,j,Zt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?k&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,Dt.width,Dt.height,It,qt,Dt.data):e.texImage2D(n.TEXTURE_2D,j,Zt,Dt.width,Dt.height,0,It,qt,Dt.data)}else if(R.isDataArrayTexture)if(se){if(we&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Zt,pt.width,pt.height,pt.depth),k)if(R.layerUpdates.size>0){let j=ed(pt.width,pt.height,R.format,R.type);for(let ot of R.layerUpdates){let wt=pt.data.subarray(ot*j/pt.data.BYTES_PER_ELEMENT,(ot+1)*j/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,pt.width,pt.height,1,It,qt,wt)}R.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,It,qt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Zt,pt.width,pt.height,pt.depth,0,It,qt,pt.data);else if(R.isData3DTexture)se?(we&&e.texStorage3D(n.TEXTURE_3D,xt,Zt,pt.width,pt.height,pt.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,It,qt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Zt,pt.width,pt.height,pt.depth,0,It,qt,pt.data);else if(R.isFramebufferTexture){if(we)if(se)e.texStorage2D(n.TEXTURE_2D,xt,Zt,pt.width,pt.height);else{let j=pt.width,ot=pt.height;for(let wt=0;wt<xt;wt++)e.texImage2D(n.TEXTURE_2D,wt,Zt,j,ot,0,It,qt,null),j>>=1,ot>>=1}}else if(ue.length>0){if(se&&we){let j=Ct(ue[0]);e.texStorage2D(n.TEXTURE_2D,xt,Zt,j.width,j.height)}for(let j=0,ot=ue.length;j<ot;j++)Dt=ue[j],se?k&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,It,qt,Dt):e.texImage2D(n.TEXTURE_2D,j,Zt,It,qt,Dt);R.generateMipmaps=!1}else if(se){if(we){let j=Ct(pt);e.texStorage2D(n.TEXTURE_2D,xt,Zt,j.width,j.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,It,qt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Zt,It,qt,pt);m(R)&&f(nt),Lt.__version=it.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function tt(L,R,X){if(R.image.length!==6)return;let nt=ht(L,R),lt=R.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+X);let it=i.get(lt);if(lt.version!==it.__version||nt===!0){e.activeTexture(n.TEXTURE0+X);let Lt=fe.getPrimaries(fe.workingColorSpace),Mt=R.colorSpace===Gi?null:fe.getPrimaries(R.colorSpace),Ft=R.colorSpace===Gi||Lt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let he=R.isCompressedTexture||R.image[0].isCompressedTexture,pt=R.image[0]&&R.image[0].isDataTexture,It=[];for(let ot=0;ot<6;ot++)!he&&!pt?It[ot]=_(R.image[ot],!0,s.maxCubemapSize):It[ot]=pt?R.image[ot].image:R.image[ot],It[ot]=Xt(R,It[ot]);let qt=It[0],Zt=r.convert(R.format,R.colorSpace),Dt=r.convert(R.type),ue=y(R.internalFormat,Zt,Dt,R.colorSpace),se=R.isVideoTexture!==!0,we=it.__version===void 0||nt===!0,k=lt.dataReady,xt=A(R,qt);ft(n.TEXTURE_CUBE_MAP,R);let j;if(he){se&&we&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,ue,qt.width,qt.height);for(let ot=0;ot<6;ot++){j=It[ot].mipmaps;for(let wt=0;wt<j.length;wt++){let St=j[wt];R.format!==Pn?Zt!==null?se?k&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,0,0,St.width,St.height,Zt,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,ue,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,0,0,St.width,St.height,Zt,Dt,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,ue,St.width,St.height,0,Zt,Dt,St.data)}}}else{if(j=R.mipmaps,se&&we){j.length>0&&xt++;let ot=Ct(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,ue,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(pt){se?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,It[ot].width,It[ot].height,Zt,Dt,It[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ue,It[ot].width,It[ot].height,0,Zt,Dt,It[ot].data);for(let wt=0;wt<j.length;wt++){let ee=j[wt].image[ot].image;se?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,0,0,ee.width,ee.height,Zt,Dt,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,ue,ee.width,ee.height,0,Zt,Dt,ee.data)}}else{se?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Zt,Dt,It[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ue,Zt,Dt,It[ot]);for(let wt=0;wt<j.length;wt++){let St=j[wt];se?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,0,0,Zt,Dt,St.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,ue,Zt,Dt,St.image[ot])}}}m(R)&&f(n.TEXTURE_CUBE_MAP),it.__version=lt.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function ct(L,R,X,nt,lt,it){let Lt=r.convert(X.format,X.colorSpace),Mt=r.convert(X.type),Ft=y(X.internalFormat,Lt,Mt,X.colorSpace),he=i.get(R),pt=i.get(X);if(pt.__renderTarget=R,!he.__hasExternalTextures){let It=Math.max(1,R.width>>it),qt=Math.max(1,R.height>>it);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,it,Ft,It,qt,R.depth,0,Lt,Mt,null):e.texImage2D(lt,it,Ft,It,qt,0,Lt,Mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),Pt(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,lt,pt.__webglTexture,0,ut(R)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,lt,pt.__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(L,R,X){if(n.bindRenderbuffer(n.RENDERBUFFER,L),R.depthBuffer){let nt=R.depthTexture,lt=nt&&nt.isDepthTexture?nt.type:null,it=v(R.stencilBuffer,lt),Lt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=ut(R);Pt(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,it,R.width,R.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,it,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,it,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Lt,n.RENDERBUFFER,L)}else{let nt=R.textures;for(let lt=0;lt<nt.length;lt++){let it=nt[lt],Lt=r.convert(it.format,it.colorSpace),Mt=r.convert(it.type),Ft=y(it.internalFormat,Lt,Mt,it.colorSpace),he=ut(R);X&&Pt(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,Ft,R.width,R.height):Pt(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,Ft,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Ft,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function vt(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=i.get(R.depthTexture);nt.__renderTarget=R,(!nt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),B(R.depthTexture,0);let lt=nt.__webglTexture,it=ut(R);if(R.depthTexture.format===$s)Pt(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0);else if(R.depthTexture.format===nr)Pt(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function bt(L){let R=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){let nt=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),nt){let lt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,nt.removeEventListener("dispose",lt)};nt.addEventListener("dispose",lt),R.__depthDisposeCallback=lt}R.__boundDepthTexture=nt}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");vt(R.__webglFramebuffer,L)}else if(X){R.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[nt]),R.__webglDepthbuffer[nt]===void 0)R.__webglDepthbuffer[nt]=n.createRenderbuffer(),rt(R.__webglDepthbuffer[nt],L,!1);else{let lt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=R.__webglDepthbuffer[nt];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,it)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),rt(R.__webglDepthbuffer,L,!1);else{let nt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,lt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(L,R,X){let nt=i.get(L);R!==void 0&&ct(nt.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&bt(L)}function Yt(L){let R=L.texture,X=i.get(L),nt=i.get(R);L.addEventListener("dispose",T);let lt=L.textures,it=L.isWebGLCubeRenderTarget===!0,Lt=lt.length>1;if(Lt||(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=R.version,o.memory.textures++),it){X.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(R.mipmaps&&R.mipmaps.length>0){X.__webglFramebuffer[Mt]=[];for(let Ft=0;Ft<R.mipmaps.length;Ft++)X.__webglFramebuffer[Mt][Ft]=n.createFramebuffer()}else X.__webglFramebuffer[Mt]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){X.__webglFramebuffer=[];for(let Mt=0;Mt<R.mipmaps.length;Mt++)X.__webglFramebuffer[Mt]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Lt)for(let Mt=0,Ft=lt.length;Mt<Ft;Mt++){let he=i.get(lt[Mt]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Pt(L)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Mt=0;Mt<lt.length;Mt++){let Ft=lt[Mt];X.__webglColorRenderbuffer[Mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[Mt]);let he=r.convert(Ft.format,Ft.colorSpace),pt=r.convert(Ft.type),It=y(Ft.internalFormat,he,pt,Ft.colorSpace,L.isXRRenderTarget===!0),qt=ut(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,It,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,X.__webglColorRenderbuffer[Mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),ft(n.TEXTURE_CUBE_MAP,R);for(let Mt=0;Mt<6;Mt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ft=0;Ft<R.mipmaps.length;Ft++)ct(X.__webglFramebuffer[Mt][Ft],L,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ft);else ct(X.__webglFramebuffer[Mt],L,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(R)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let Mt=0,Ft=lt.length;Mt<Ft;Mt++){let he=lt[Mt],pt=i.get(he);e.bindTexture(n.TEXTURE_2D,pt.__webglTexture),ft(n.TEXTURE_2D,he),ct(X.__webglFramebuffer,L,he,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,0),m(he)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let Mt=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Mt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Mt,nt.__webglTexture),ft(Mt,R),R.mipmaps&&R.mipmaps.length>0)for(let Ft=0;Ft<R.mipmaps.length;Ft++)ct(X.__webglFramebuffer[Ft],L,R,n.COLOR_ATTACHMENT0,Mt,Ft);else ct(X.__webglFramebuffer,L,R,n.COLOR_ATTACHMENT0,Mt,0);m(R)&&f(Mt),e.unbindTexture()}L.depthBuffer&&bt(L)}function st(L){let R=L.textures;for(let X=0,nt=R.length;X<nt;X++){let lt=R[X];if(m(lt)){let it=E(L),Lt=i.get(lt).__webglTexture;e.bindTexture(it,Lt),f(it),e.unbindTexture()}}}let dt=[],N=[];function zt(L){if(L.samples>0){if(Pt(L)===!1){let R=L.textures,X=L.width,nt=L.height,lt=n.COLOR_BUFFER_BIT,it=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Lt=i.get(L),Mt=R.length>1;if(Mt)for(let Ft=0;Ft<R.length;Ft++)e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ft=0;Ft<R.length;Ft++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),Mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ft]);let he=i.get(R[Ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,X,nt,0,0,X,nt,lt,n.NEAREST),l===!0&&(dt.length=0,N.length=0,dt.push(n.COLOR_ATTACHMENT0+Ft),L.depthBuffer&&L.resolveDepthBuffer===!1&&(dt.push(it),N.push(it),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Mt)for(let Ft=0;Ft<R.length;Ft++){e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ft]);let he=i.get(R[Ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,he,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let R=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function ut(L){return Math.min(s.maxSamples,L.samples)}function Pt(L){let R=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function _t(L){let R=o.render.frame;h.get(L)!==R&&(h.set(L,R),L.update())}function Xt(L,R){let X=L.colorSpace,nt=L.format,lt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==$i&&X!==Gi&&(fe.getTransfer(X)===Ae?(nt!==Pn||lt!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),R}function Ct(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=F,this.setTexture2D=B,this.setTexture2DArray=U,this.setTexture3D=z,this.setTextureCube=H,this.rebindTextures=Ut,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Pt}function w2(n,t){function e(i,s=Gi){let r,o=fe.getTransfer(s);if(i===Ai)return n.UNSIGNED_BYTE;if(i===eh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===md)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fd)return n.BYTE;if(i===pd)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===th)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===Ei)return n.FLOAT;if(i===Tn)return n.HALF_FLOAT;if(i===gd)return n.ALPHA;if(i===vd)return n.RGB;if(i===Pn)return n.RGBA;if(i===_d)return n.LUMINANCE;if(i===yd)return n.LUMINANCE_ALPHA;if(i===$s)return n.DEPTH_COMPONENT;if(i===nr)return n.DEPTH_STENCIL;if(i===Ed)return n.RED;if(i===ih)return n.RED_INTEGER;if(i===Md)return n.RG;if(i===sh)return n.RG_INTEGER;if(i===rh)return n.RGBA_INTEGER;if(i===Lo||i===Uo||i===Bo||i===No)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zl||i===kl||i===Gl||i===Vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wl||i===Xl||i===ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wl||i===Xl)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ql)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yl||i===Zl||i===$l||i===Jl||i===Kl||i===Ql||i===jl||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ql)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ic)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oo||i===ac||i===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Oo)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xd||i===cc||i===hc||i===uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Rc=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},q=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},R2={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new q,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new q,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new q,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new q;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},C2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F2=`
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

}`,Cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new bn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Oe({vertexShader:C2,fragmentShader:F2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new Wt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fc=class extends Xi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,_=new Cc,m=e.getContextAttributes(),f=null,E=null,y=[],v=[],A=new at,S=null,T=new hn;T.viewport=new be;let b=new hn;b.viewport=new be;let x=[T,b],M=new Rc,w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let tt=y[W];return tt===void 0&&(tt=new Ur,y[W]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(W){let tt=y[W];return tt===void 0&&(tt=new Ur,y[W]=tt),tt.getGripSpace()},this.getHand=function(W){let tt=y[W];return tt===void 0&&(tt=new Ur,y[W]=tt),tt.getHandSpace()};function P(W){let tt=v.indexOf(W.inputSource);if(tt===-1)return;let ct=y[tt];ct!==void 0&&(ct.update(W.inputSource,W.frame,c||o),ct.dispatchEvent({type:W.type,data:W.inputSource}))}function C(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",B);for(let W=0;W<y.length;W++){let tt=v[W];tt!==null&&(v[W]=null,y[W].disconnect(tt))}w=null,F=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,E=null,ht.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",C),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){let tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Qe(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,ct=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?nr:$s,ct=m.stencil?er:bi);let vt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Qe(d.textureWidth,d.textureHeight,{format:Pn,type:Ai,depthTexture:new rr(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ht.setContext(s),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(W){for(let tt=0;tt<W.removed.length;tt++){let ct=W.removed[tt],rt=v.indexOf(ct);rt>=0&&(v[rt]=null,y[rt].disconnect(ct))}for(let tt=0;tt<W.added.length;tt++){let ct=W.added[tt],rt=v.indexOf(ct);if(rt===-1){for(let bt=0;bt<y.length;bt++)if(bt>=v.length){v.push(ct),rt=bt;break}else if(v[bt]===null){v[bt]=ct,rt=bt;break}if(rt===-1)break}let vt=y[rt];vt&&vt.connect(ct)}}let U=new O,z=new O;function H(W,tt,ct){U.setFromMatrixPosition(tt.matrixWorld),z.setFromMatrixPosition(ct.matrixWorld);let rt=U.distanceTo(z),vt=tt.projectionMatrix.elements,bt=ct.projectionMatrix.elements,Ut=vt[14]/(vt[10]-1),Yt=vt[14]/(vt[10]+1),st=(vt[9]+1)/vt[5],dt=(vt[9]-1)/vt[5],N=(vt[8]-1)/vt[0],zt=(bt[8]+1)/bt[0],ut=Ut*N,Pt=Ut*zt,_t=rt/(-N+zt),Xt=_t*-N;if(tt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Xt),W.translateZ(_t),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),vt[10]===-1)W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let Ct=Ut+_t,L=Yt+_t,R=ut-Xt,X=Pt+(rt-Xt),nt=st*Yt/L*Ct,lt=dt*Yt/L*Ct;W.projectionMatrix.makePerspective(R,X,nt,lt,Ct,L),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Z(W,tt){tt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(tt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let tt=W.near,ct=W.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(ct=_.depthFar)),M.near=b.near=T.near=tt,M.far=b.far=T.far=ct,(w!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,F=M.far),T.layers.mask=W.layers.mask|2,b.layers.mask=W.layers.mask|4,M.layers.mask=T.layers.mask|b.layers.mask;let rt=W.parent,vt=M.cameras;Z(M,rt);for(let bt=0;bt<vt.length;bt++)Z(vt[bt],rt);vt.length===2?H(M,T,b):M.projectionMatrix.copy(T.projectionMatrix),et(W,M,rt)};function et(W,tt,ct){ct===null?W.matrix.copy(tt.matrixWorld):(W.matrix.copy(ct.matrixWorld),W.matrix.invert(),W.matrix.multiply(tt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=fc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let K=null;function ft(W,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){let ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let rt=!1;ct.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let bt=0;bt<ct.length;bt++){let Ut=ct[bt],Yt=null;if(p!==null)Yt=p.getViewport(Ut);else{let dt=u.getViewSubImage(d,Ut);Yt=dt.viewport,bt===0&&(t.setRenderTargetTextures(E,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(E))}let st=x[bt];st===void 0&&(st=new hn,st.layers.enable(bt),st.viewport=new be,x[bt]=st),st.matrix.fromArray(Ut.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Ut.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),bt===0&&(M.matrix.copy(st.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(st)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){let bt=u.getDepthInformation(ct[0]);bt&&bt.isValid&&bt.texture&&_.init(t,bt,s.renderState)}}for(let ct=0;ct<y.length;ct++){let rt=v[ct],vt=y[ct];rt!==null&&vt!==void 0&&vt.update(rt,tt,c||o)}K&&K(W,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}let ht=new Rd;ht.setAnimationLoop(ft),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}},ls=new Si,P2=new xe;function I2(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,wd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=t.get(f),y=E.envMap,v=E.envMapRotation;y&&(m.envMap.value=y,ls.copy(v),ls.x*=-1,ls.y*=-1,ls.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(P2.makeRotationFromEuler(ls)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ke&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function D2(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){let v=y.program;i.uniformBlockBinding(E,v)}function c(E,y){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));let A=y.program;i.updateUBOMapping(E,A);let S=t.render.frame;r[E.id]!==S&&(d(E),r[E.id]=S)}function h(E){let y=u();E.__bindingPointIndex=y;let v=n.createBuffer(),A=E.__size,S=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let y=s[E.id],v=E.uniforms,A=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let S=0,T=v.length;S<T;S++){let b=Array.isArray(v[S])?v[S]:[v[S]];for(let x=0,M=b.length;x<M;x++){let w=b[x];if(p(w,S,x,A)===!0){let F=w.__offset,P=Array.isArray(w.value)?w.value:[w.value],C=0;for(let B=0;B<P.length;B++){let U=P[B],z=_(U);typeof U=="number"||typeof U=="boolean"?(w.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,F+C,w.__data)):U.isMatrix3?(w.__data[0]=U.elements[0],w.__data[1]=U.elements[1],w.__data[2]=U.elements[2],w.__data[3]=0,w.__data[4]=U.elements[3],w.__data[5]=U.elements[4],w.__data[6]=U.elements[5],w.__data[7]=0,w.__data[8]=U.elements[6],w.__data[9]=U.elements[7],w.__data[10]=U.elements[8],w.__data[11]=0):(U.toArray(w.__data,C),C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,y,v,A){let S=E.value,T=y+"_"+v;if(A[T]===void 0)return typeof S=="number"||typeof S=="boolean"?A[T]=S:A[T]=S.clone(),!0;{let b=A[T];if(typeof S=="number"||typeof S=="boolean"){if(b!==S)return A[T]=S,!0}else if(b.equals(S)===!1)return b.copy(S),!0}return!1}function g(E){let y=E.uniforms,v=0,A=16;for(let T=0,b=y.length;T<b;T++){let x=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,w=x.length;M<w;M++){let F=x[M],P=Array.isArray(F.value)?F.value:[F.value];for(let C=0,B=P.length;C<B;C++){let U=P[C],z=_(U),H=v%A,Z=H%z.boundary,et=H+Z;v+=Z,et!==0&&A-et<z.storage&&(v+=A-et),F.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=z.storage}}}let S=v%A;return S>0&&(v+=A-S),E.__size=v,E.__cache={},this}function _(E){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){let y=E.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ko=class{constructor(t={}){let{canvas:e=Op(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,E=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=oi,this.toneMappingExposure=1;let v=this,A=!1,S=0,T=0,b=null,x=-1,M=null,w=new be,F=new be,P=null,C=new kt(0),B=0,U=e.width,z=e.height,H=1,Z=null,et=null,K=new be(0,0,U,z),ft=new be(0,0,U,z),ht=!1,W=new zr,tt=!1,ct=!1,rt=new xe,vt=new xe,bt=new O,Ut=new be,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function dt(){return b===null?H:1}let N=i;function zt(I,G){return e.getContext(I,G)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qc}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",St,!1),N===null){let G="webgl2";if(N=zt(G,I),N===null)throw zt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ut,Pt,_t,Xt,Ct,L,R,X,nt,lt,it,Lt,Mt,Ft,he,pt,It,qt,Zt,Dt,ue,se,we,k;function xt(){ut=new $g(N),ut.init(),se=new w2(N,ut),Pt=new Vg(N,ut,t,se),_t=new b2(N,ut),Pt.reverseDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),Xt=new Qg(N),Ct=new u2,L=new T2(N,ut,_t,Ct,Pt,se,Xt),R=new Xg(v),X=new Zg(v),nt=new r0(N),we=new kg(N,nt),lt=new Jg(N,nt,Xt,we),it=new t1(N,lt,nt,Xt),Zt=new jg(N,Pt,L),pt=new Wg(Ct),Lt=new h2(v,R,X,ut,Pt,we,pt),Mt=new I2(v,Ct),Ft=new f2,he=new y2(ut),qt=new zg(v,R,X,_t,it,p,l),It=new x2(v,it,Pt),k=new D2(N,Xt,Pt,_t),Dt=new Gg(N,ut,Xt),ue=new Kg(N,ut,Xt),Xt.programs=Lt.programs,v.capabilities=Pt,v.extensions=ut,v.properties=Ct,v.renderLists=Ft,v.shadowMap=It,v.state=_t,v.info=Xt}xt();let j=new Fc(v,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let I=ut.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ut.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(I){I!==void 0&&(H=I,this.setSize(U,z,!1))},this.getSize=function(I){return I.set(U,z)},this.setSize=function(I,G,Y=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=I,z=G,e.width=Math.floor(I*H),e.height=Math.floor(G*H),Y===!0&&(e.style.width=I+"px",e.style.height=G+"px"),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(U*H,z*H).floor()},this.setDrawingBufferSize=function(I,G,Y){U=I,z=G,H=Y,e.width=Math.floor(I*Y),e.height=Math.floor(G*Y),this.setViewport(0,0,I,G)},this.getCurrentViewport=function(I){return I.copy(w)},this.getViewport=function(I){return I.copy(K)},this.setViewport=function(I,G,Y,$){I.isVector4?K.set(I.x,I.y,I.z,I.w):K.set(I,G,Y,$),_t.viewport(w.copy(K).multiplyScalar(H).round())},this.getScissor=function(I){return I.copy(ft)},this.setScissor=function(I,G,Y,$){I.isVector4?ft.set(I.x,I.y,I.z,I.w):ft.set(I,G,Y,$),_t.scissor(F.copy(ft).multiplyScalar(H).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(I){_t.setScissorTest(ht=I)},this.setOpaqueSort=function(I){Z=I},this.setTransparentSort=function(I){et=I},this.getClearColor=function(I){return I.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(I=!0,G=!0,Y=!0){let $=0;if(I){let V=!1;if(b!==null){let mt=b.texture.format;V=mt===rh||mt===sh||mt===ih}if(V){let mt=b.texture.type,Tt=mt===Ai||mt===bi||mt===Or||mt===er||mt===eh||mt===nh,Bt=qt.getClearColor(),Nt=qt.getClearAlpha(),Qt=Bt.r,ne=Bt.g,Ot=Bt.b;Tt?(g[0]=Qt,g[1]=ne,g[2]=Ot,g[3]=Nt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Qt,_[1]=ne,_[2]=Ot,_[3]=Nt,N.clearBufferiv(N.COLOR,0,_))}else $|=N.COLOR_BUFFER_BIT}G&&($|=N.DEPTH_BUFFER_BIT),Y&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Ft.dispose(),he.dispose(),Ct.dispose(),R.dispose(),X.dispose(),it.dispose(),we.dispose(),k.dispose(),Lt.dispose(),j.dispose(),j.removeEventListener("sessionstart",$h),j.removeEventListener("sessionend",Jh),ns.stop()};function ot(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let I=Xt.autoReset,G=It.enabled,Y=It.autoUpdate,$=It.needsUpdate,V=It.type;xt(),Xt.autoReset=I,It.enabled=G,It.autoUpdate=Y,It.needsUpdate=$,It.type=V}function St(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ee(I){let G=I.target;G.removeEventListener("dispose",ee),Ne(G)}function Ne(I){an(I),Ct.remove(I)}function an(I){let G=Ct.get(I).programs;G!==void 0&&(G.forEach(function(Y){Lt.releaseProgram(Y)}),I.isShaderMaterial&&Lt.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,Y,$,V,mt){G===null&&(G=Yt);let Tt=V.isMesh&&V.matrixWorld.determinant()<0,Bt=qf(I,G,Y,$,V);_t.setMaterial($,Tt);let Nt=Y.index,Qt=1;if($.wireframe===!0){if(Nt=lt.getWireframeAttribute(Y),Nt===void 0)return;Qt=2}let ne=Y.drawRange,Ot=Y.attributes.position,ge=ne.start*Qt,Re=(ne.start+ne.count)*Qt;mt!==null&&(ge=Math.max(ge,mt.start*Qt),Re=Math.min(Re,(mt.start+mt.count)*Qt)),Nt!==null?(ge=Math.max(ge,0),Re=Math.min(Re,Nt.count)):Ot!=null&&(ge=Math.max(ge,0),Re=Math.min(Re,Ot.count));let Ce=Re-ge;if(Ce<0||Ce===1/0)return;we.setup(V,$,Bt,Y,Nt);let Mn,ye=Dt;if(Nt!==null&&(Mn=nt.get(Nt),ye=ue,ye.setIndex(Mn)),V.isMesh)$.wireframe===!0?(_t.setLineWidth($.wireframeLinewidth*dt()),ye.setMode(N.LINES)):ye.setMode(N.TRIANGLES);else if(V.isLine){let Gt=$.linewidth;Gt===void 0&&(Gt=1),_t.setLineWidth(Gt*dt()),V.isLineSegments?ye.setMode(N.LINES):V.isLineLoop?ye.setMode(N.LINE_LOOP):ye.setMode(N.LINE_STRIP)}else V.isPoints?ye.setMode(N.POINTS):V.isSprite&&ye.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ye.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))ye.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Gt=V._multiDrawStarts,di=V._multiDrawCounts,Ee=V._multiDrawCount,Jn=Nt?nt.get(Nt).bytesPerElement:1,Ps=Ct.get($).currentProgram.getUniforms();for(let Rn=0;Rn<Ee;Rn++)Ps.setValue(N,"_gl_DrawID",Rn),ye.render(Gt[Rn]/Jn,di[Rn])}else if(V.isInstancedMesh)ye.renderInstances(ge,Ce,V.count);else if(Y.isInstancedBufferGeometry){let Gt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,di=Math.min(Y.instanceCount,Gt);ye.renderInstances(ge,Ce,di)}else ye.render(ge,Ce)};function Me(I,G,Y){I.transparent===!0&&I.side===pe&&I.forceSinglePass===!1?(I.side=Ke,I.needsUpdate=!0,ao(I,G,Y),I.side=Wi,I.needsUpdate=!0,ao(I,G,Y),I.side=pe):ao(I,G,Y)}this.compile=function(I,G,Y=null){Y===null&&(Y=I),f=he.get(Y),f.init(G),y.push(f),Y.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),I!==Y&&I.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();let $=new Set;return I.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let mt=V.material;if(mt)if(Array.isArray(mt))for(let Tt=0;Tt<mt.length;Tt++){let Bt=mt[Tt];Me(Bt,Y,V),$.add(Bt)}else Me(mt,Y,V),$.add(mt)}),y.pop(),f=null,$},this.compileAsync=function(I,G,Y=null){let $=this.compile(I,G,Y);return new Promise(V=>{function mt(){if($.forEach(function(Tt){Ct.get(Tt).currentProgram.isReady()&&$.delete(Tt)}),$.size===0){V(I);return}setTimeout(mt,10)}ut.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let $n=null;function ui(I){$n&&$n(I)}function $h(){ns.stop()}function Jh(){ns.start()}let ns=new Rd;ns.setAnimationLoop(ui),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(I){$n=I,j.setAnimationLoop(I),I===null?ns.stop():ns.start()},j.addEventListener("sessionstart",$h),j.addEventListener("sessionend",Jh),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(G),G=j.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,G,b),f=he.get(I,y.length),f.init(G),y.push(f),vt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),W.setFromProjectionMatrix(vt),ct=this.localClippingEnabled,tt=pt.init(this.clippingPlanes,ct),m=Ft.get(I,E.length),m.init(),E.push(m),j.enabled===!0&&j.isPresenting===!0){let mt=v.xr.getDepthSensingMesh();mt!==null&&qa(mt,G,-1/0,v.sortObjects)}qa(I,G,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Z,et),st=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,st&&qt.addToRenderList(m,I),this.info.render.frame++,tt===!0&&pt.beginShadows();let Y=f.state.shadowsArray;It.render(Y,I,G),tt===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,V=m.transmissive;if(f.setupLights(),G.isArrayCamera){let mt=G.cameras;if(V.length>0)for(let Tt=0,Bt=mt.length;Tt<Bt;Tt++){let Nt=mt[Tt];Qh($,V,I,Nt)}st&&qt.render(I);for(let Tt=0,Bt=mt.length;Tt<Bt;Tt++){let Nt=mt[Tt];Kh(m,I,Nt,Nt.viewport)}}else V.length>0&&Qh($,V,I,G),st&&qt.render(I),Kh(m,I,G);b!==null&&(L.updateMultisampleRenderTarget(b),L.updateRenderTargetMipmap(b)),I.isScene===!0&&I.onAfterRender(v,I,G),we.resetDefaultState(),x=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],tt===!0&&pt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function qa(I,G,Y,$){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)Y=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)f.pushLight(I),I.castShadow&&f.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||W.intersectsSprite(I)){$&&Ut.setFromMatrixPosition(I.matrixWorld).applyMatrix4(vt);let Tt=it.update(I),Bt=I.material;Bt.visible&&m.push(I,Tt,Bt,Y,Ut.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||W.intersectsObject(I))){let Tt=it.update(I),Bt=I.material;if($&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ut.copy(I.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Ut.copy(Tt.boundingSphere.center)),Ut.applyMatrix4(I.matrixWorld).applyMatrix4(vt)),Array.isArray(Bt)){let Nt=Tt.groups;for(let Qt=0,ne=Nt.length;Qt<ne;Qt++){let Ot=Nt[Qt],ge=Bt[Ot.materialIndex];ge&&ge.visible&&m.push(I,Tt,ge,Y,Ut.z,Ot)}}else Bt.visible&&m.push(I,Tt,Bt,Y,Ut.z,null)}}let mt=I.children;for(let Tt=0,Bt=mt.length;Tt<Bt;Tt++)qa(mt[Tt],G,Y,$)}function Kh(I,G,Y,$){let V=I.opaque,mt=I.transmissive,Tt=I.transparent;f.setupLightsView(Y),tt===!0&&pt.setGlobalState(v.clippingPlanes,Y),$&&_t.viewport(w.copy($)),V.length>0&&oo(V,G,Y),mt.length>0&&oo(mt,G,Y),Tt.length>0&&oo(Tt,G,Y),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Qh(I,G,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new Qe(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Tn:Ai,minFilter:ps,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));let mt=f.state.transmissionRenderTarget[$.id],Tt=$.viewport||w;mt.setSize(Tt.z,Tt.w);let Bt=v.getRenderTarget();v.setRenderTarget(mt),v.getClearColor(C),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),st&&qt.render(Y);let Nt=v.toneMapping;v.toneMapping=oi;let Qt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),tt===!0&&pt.setGlobalState(v.clippingPlanes,$),oo(I,Y,$),L.updateMultisampleRenderTarget(mt),L.updateRenderTargetMipmap(mt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Ot=0,ge=G.length;Ot<ge;Ot++){let Re=G[Ot],Ce=Re.object,Mn=Re.geometry,ye=Re.material,Gt=Re.group;if(ye.side===pe&&Ce.layers.test($.layers)){let di=ye.side;ye.side=Ke,ye.needsUpdate=!0,jh(Ce,Y,$,Mn,ye,Gt),ye.side=di,ye.needsUpdate=!0,ne=!0}}ne===!0&&(L.updateMultisampleRenderTarget(mt),L.updateRenderTargetMipmap(mt))}v.setRenderTarget(Bt),v.setClearColor(C,B),Qt!==void 0&&($.viewport=Qt),v.toneMapping=Nt}function oo(I,G,Y){let $=G.isScene===!0?G.overrideMaterial:null;for(let V=0,mt=I.length;V<mt;V++){let Tt=I[V],Bt=Tt.object,Nt=Tt.geometry,Qt=$===null?Tt.material:$,ne=Tt.group;Bt.layers.test(Y.layers)&&jh(Bt,G,Y,Nt,Qt,ne)}}function jh(I,G,Y,$,V,mt){I.onBeforeRender(v,G,Y,$,V,mt),I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),V.onBeforeRender(v,G,Y,$,I,mt),V.transparent===!0&&V.side===pe&&V.forceSinglePass===!1?(V.side=Ke,V.needsUpdate=!0,v.renderBufferDirect(Y,G,$,V,I,mt),V.side=Wi,V.needsUpdate=!0,v.renderBufferDirect(Y,G,$,V,I,mt),V.side=pe):v.renderBufferDirect(Y,G,$,V,I,mt),I.onAfterRender(v,G,Y,$,V,mt)}function ao(I,G,Y){G.isScene!==!0&&(G=Yt);let $=Ct.get(I),V=f.state.lights,mt=f.state.shadowsArray,Tt=V.state.version,Bt=Lt.getParameters(I,V.state,mt,G,Y),Nt=Lt.getProgramCacheKey(Bt),Qt=$.programs;$.environment=I.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(I.isMeshStandardMaterial?X:R).get(I.envMap||$.environment),$.envMapRotation=$.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,Qt===void 0&&(I.addEventListener("dispose",ee),Qt=new Map,$.programs=Qt);let ne=Qt.get(Nt);if(ne!==void 0){if($.currentProgram===ne&&$.lightsStateVersion===Tt)return eu(I,Bt),ne}else Bt.uniforms=Lt.getUniforms(I),I.onBeforeCompile(Bt,v),ne=Lt.acquireProgram(Bt,Nt),Qt.set(Nt,ne),$.uniforms=Bt.uniforms;let Ot=$.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ot.clippingPlanes=pt.uniform),eu(I,Bt),$.needsLights=Zf(I),$.lightsStateVersion=Tt,$.needsLights&&(Ot.ambientLightColor.value=V.state.ambient,Ot.lightProbe.value=V.state.probe,Ot.directionalLights.value=V.state.directional,Ot.directionalLightShadows.value=V.state.directionalShadow,Ot.spotLights.value=V.state.spot,Ot.spotLightShadows.value=V.state.spotShadow,Ot.rectAreaLights.value=V.state.rectArea,Ot.ltc_1.value=V.state.rectAreaLTC1,Ot.ltc_2.value=V.state.rectAreaLTC2,Ot.pointLights.value=V.state.point,Ot.pointLightShadows.value=V.state.pointShadow,Ot.hemisphereLights.value=V.state.hemi,Ot.directionalShadowMap.value=V.state.directionalShadowMap,Ot.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ot.spotShadowMap.value=V.state.spotShadowMap,Ot.spotLightMatrix.value=V.state.spotLightMatrix,Ot.spotLightMap.value=V.state.spotLightMap,Ot.pointShadowMap.value=V.state.pointShadowMap,Ot.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=ne,$.uniformsList=null,ne}function tu(I){if(I.uniformsList===null){let G=I.currentProgram.getUniforms();I.uniformsList=Ks.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function eu(I,G){let Y=Ct.get(I);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function qf(I,G,Y,$,V){G.isScene!==!0&&(G=Yt),L.resetTextureUnits();let mt=G.fog,Tt=$.isMeshStandardMaterial?G.environment:null,Bt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:$i,Nt=($.isMeshStandardMaterial?X:R).get($.envMap||Tt),Qt=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ne=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ot=!!Y.morphAttributes.position,ge=!!Y.morphAttributes.normal,Re=!!Y.morphAttributes.color,Ce=oi;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ce=v.toneMapping);let Mn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ye=Mn!==void 0?Mn.length:0,Gt=Ct.get($),di=f.state.lights;if(tt===!0&&(ct===!0||I!==M)){let Hn=I===M&&$.id===x;pt.setState($,I,Hn)}let Ee=!1;$.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==di.state.version||Gt.outputColorSpace!==Bt||V.isBatchedMesh&&Gt.batching===!1||!V.isBatchedMesh&&Gt.batching===!0||V.isBatchedMesh&&Gt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Gt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Gt.instancing===!1||!V.isInstancedMesh&&Gt.instancing===!0||V.isSkinnedMesh&&Gt.skinning===!1||!V.isSkinnedMesh&&Gt.skinning===!0||V.isInstancedMesh&&Gt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Gt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Gt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Gt.instancingMorph===!1&&V.morphTexture!==null||Gt.envMap!==Nt||$.fog===!0&&Gt.fog!==mt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==pt.numPlanes||Gt.numIntersection!==pt.numIntersection)||Gt.vertexAlphas!==Qt||Gt.vertexTangents!==ne||Gt.morphTargets!==Ot||Gt.morphNormals!==ge||Gt.morphColors!==Re||Gt.toneMapping!==Ce||Gt.morphTargetsCount!==ye)&&(Ee=!0):(Ee=!0,Gt.__version=$.version);let Jn=Gt.currentProgram;Ee===!0&&(Jn=ao($,G,V));let Ps=!1,Rn=!1,Sr=!1,Fe=Jn.getUniforms(),ni=Gt.uniforms;if(_t.useProgram(Jn.program)&&(Ps=!0,Rn=!0,Sr=!0),$.id!==x&&(x=$.id,Rn=!0),Ps||M!==I){_t.buffers.depth.getReversed()?(rt.copy(I.projectionMatrix),zp(rt),kp(rt),Fe.setValue(N,"projectionMatrix",rt)):Fe.setValue(N,"projectionMatrix",I.projectionMatrix),Fe.setValue(N,"viewMatrix",I.matrixWorldInverse);let Li=Fe.map.cameraPosition;Li!==void 0&&Li.setValue(N,bt.setFromMatrixPosition(I.matrixWorld)),Pt.logarithmicDepthBuffer&&Fe.setValue(N,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Fe.setValue(N,"isOrthographic",I.isOrthographicCamera===!0),M!==I&&(M=I,Rn=!0,Sr=!0)}if(V.isSkinnedMesh){Fe.setOptional(N,V,"bindMatrix"),Fe.setOptional(N,V,"bindMatrixInverse");let Hn=V.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),Fe.setValue(N,"boneTexture",Hn.boneTexture,L))}V.isBatchedMesh&&(Fe.setOptional(N,V,"batchingTexture"),Fe.setValue(N,"batchingTexture",V._matricesTexture,L),Fe.setOptional(N,V,"batchingIdTexture"),Fe.setValue(N,"batchingIdTexture",V._indirectTexture,L),Fe.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&Fe.setValue(N,"batchingColorTexture",V._colorsTexture,L));let Tr=Y.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&Zt.update(V,Y,Jn),(Rn||Gt.receiveShadow!==V.receiveShadow)&&(Gt.receiveShadow=V.receiveShadow,Fe.setValue(N,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ni.envMap.value=Nt,ni.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(ni.envMapIntensity.value=G.environmentIntensity),Rn&&(Fe.setValue(N,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&Yf(ni,Sr),mt&&$.fog===!0&&Mt.refreshFogUniforms(ni,mt),Mt.refreshMaterialUniforms(ni,$,H,z,f.state.transmissionRenderTarget[I.id]),Ks.upload(N,tu(Gt),ni,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ks.upload(N,tu(Gt),ni,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Fe.setValue(N,"center",V.center),Fe.setValue(N,"modelViewMatrix",V.modelViewMatrix),Fe.setValue(N,"normalMatrix",V.normalMatrix),Fe.setValue(N,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Hn=$.uniformsGroups;for(let Li=0,Ui=Hn.length;Li<Ui;Li++){let nu=Hn[Li];k.update(nu,Jn),k.bind(nu,Jn)}}return Jn}function Yf(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function Zf(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(I,G,Y){Ct.get(I.texture).__webglTexture=G,Ct.get(I.depthTexture).__webglTexture=Y;let $=Ct.get(I);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,G){let Y=Ct.get(I);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,Y=0){b=I,S=G,T=Y;let $=!0,V=null,mt=!1,Tt=!1;if(I){let Nt=Ct.get(I);if(Nt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(Nt.__webglFramebuffer===void 0)L.setupRenderTarget(I);else if(Nt.__hasExternalTextures)L.rebindTextures(I,Ct.get(I.texture).__webglTexture,Ct.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Ot=I.depthTexture;if(Nt.__boundDepthTexture!==Ot){if(Ot!==null&&Ct.has(Ot)&&(I.width!==Ot.image.width||I.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(I)}}let Qt=I.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Tt=!0);let ne=Ct.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ne[G])?V=ne[G][Y]:V=ne[G],mt=!0):I.samples>0&&L.useMultisampledRTT(I)===!1?V=Ct.get(I).__webglMultisampledFramebuffer:Array.isArray(ne)?V=ne[Y]:V=ne,w.copy(I.viewport),F.copy(I.scissor),P=I.scissorTest}else w.copy(K).multiplyScalar(H).floor(),F.copy(ft).multiplyScalar(H).floor(),P=ht;if(_t.bindFramebuffer(N.FRAMEBUFFER,V)&&$&&_t.drawBuffers(I,V),_t.viewport(w),_t.scissor(F),_t.setScissorTest(P),mt){let Nt=Ct.get(I.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,Nt.__webglTexture,Y)}else if(Tt){let Nt=Ct.get(I.texture),Qt=G||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nt.__webglTexture,Y||0,Qt)}x=-1},this.readRenderTargetPixels=function(I,G,Y,$,V,mt,Tt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Ct.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Tt!==void 0&&(Bt=Bt[Tt]),Bt){_t.bindFramebuffer(N.FRAMEBUFFER,Bt);try{let Nt=I.texture,Qt=Nt.format,ne=Nt.type;if(!Pt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-$&&Y>=0&&Y<=I.height-V&&N.readPixels(G,Y,$,V,se.convert(Qt),se.convert(ne),mt)}finally{let Nt=b!==null?Ct.get(b).__webglFramebuffer:null;_t.bindFramebuffer(N.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(I,G,Y,$,V,mt,Tt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Ct.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Tt!==void 0&&(Bt=Bt[Tt]),Bt){let Nt=I.texture,Qt=Nt.format,ne=Nt.type;if(!Pt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=I.width-$&&Y>=0&&Y<=I.height-V){_t.bindFramebuffer(N.FRAMEBUFFER,Bt);let Ot=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ot),N.bufferData(N.PIXEL_PACK_BUFFER,mt.byteLength,N.STREAM_READ),N.readPixels(G,Y,$,V,se.convert(Qt),se.convert(ne),0);let ge=b!==null?Ct.get(b).__webglFramebuffer:null;_t.bindFramebuffer(N.FRAMEBUFFER,ge);let Re=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Hp(N,Re,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ot),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,mt),N.deleteBuffer(Ot),N.deleteSync(Re),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,G=null,Y=0){I.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,I=arguments[1]);let $=Math.pow(2,-Y),V=Math.floor(I.image.width*$),mt=Math.floor(I.image.height*$),Tt=G!==null?G.x:0,Bt=G!==null?G.y:0;L.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,Tt,Bt,V,mt),_t.unbindTexture()},this.copyTextureToTexture=function(I,G,Y=null,$=null,V=0){I.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,I=arguments[1],G=arguments[2],V=arguments[3]||0,Y=null);let mt,Tt,Bt,Nt,Qt,ne,Ot,ge,Re,Ce=I.isCompressedTexture?I.mipmaps[V]:I.image;Y!==null?(mt=Y.max.x-Y.min.x,Tt=Y.max.y-Y.min.y,Bt=Y.isBox3?Y.max.z-Y.min.z:1,Nt=Y.min.x,Qt=Y.min.y,ne=Y.isBox3?Y.min.z:0):(mt=Ce.width,Tt=Ce.height,Bt=Ce.depth||1,Nt=0,Qt=0,ne=0),$!==null?(Ot=$.x,ge=$.y,Re=$.z):(Ot=0,ge=0,Re=0);let Mn=se.convert(G.format),ye=se.convert(G.type),Gt;G.isData3DTexture?(L.setTexture3D(G,0),Gt=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(L.setTexture2DArray(G,0),Gt=N.TEXTURE_2D_ARRAY):(L.setTexture2D(G,0),Gt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);let di=N.getParameter(N.UNPACK_ROW_LENGTH),Ee=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Jn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ps=N.getParameter(N.UNPACK_SKIP_ROWS),Rn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ce.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ce.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Nt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Qt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ne);let Sr=I.isDataArrayTexture||I.isData3DTexture,Fe=G.isDataArrayTexture||G.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let ni=Ct.get(I),Tr=Ct.get(G),Hn=Ct.get(ni.__renderTarget),Li=Ct.get(Tr.__renderTarget);_t.bindFramebuffer(N.READ_FRAMEBUFFER,Hn.__webglFramebuffer),_t.bindFramebuffer(N.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ui=0;Ui<Bt;Ui++)Sr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.get(I).__webglTexture,V,ne+Ui),I.isDepthTexture?(Fe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.get(G).__webglTexture,V,Re+Ui),N.blitFramebuffer(Nt,Qt,mt,Tt,Ot,ge,mt,Tt,N.DEPTH_BUFFER_BIT,N.NEAREST)):Fe?N.copyTexSubImage3D(Gt,V,Ot,ge,Re+Ui,Nt,Qt,mt,Tt):N.copyTexSubImage2D(Gt,V,Ot,ge,Re+Ui,Nt,Qt,mt,Tt);_t.bindFramebuffer(N.READ_FRAMEBUFFER,null),_t.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Fe?I.isDataTexture||I.isData3DTexture?N.texSubImage3D(Gt,V,Ot,ge,Re,mt,Tt,Bt,Mn,ye,Ce.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(Gt,V,Ot,ge,Re,mt,Tt,Bt,Mn,Ce.data):N.texSubImage3D(Gt,V,Ot,ge,Re,mt,Tt,Bt,Mn,ye,Ce):I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,V,Ot,ge,mt,Tt,Mn,ye,Ce.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,V,Ot,ge,Ce.width,Ce.height,Mn,Ce.data):N.texSubImage2D(N.TEXTURE_2D,V,Ot,ge,mt,Tt,Mn,ye,Ce);N.pixelStorei(N.UNPACK_ROW_LENGTH,di),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ee),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Jn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ps),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Rn),V===0&&G.generateMipmaps&&N.generateMipmap(Gt),_t.unbindTexture()},this.copyTextureToTexture3D=function(I,G,Y=null,$=null,V=0){return I.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,I=arguments[2],G=arguments[3],V=arguments[4]||0),Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,G,Y,$,V)},this.initRenderTarget=function(I){Ct.get(I).__webglFramebuffer===void 0&&L.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?L.setTextureCube(I,0):I.isData3DTexture?L.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?L.setTexture2DArray(I,0):L.setTexture2D(I,0),_t.unbindTexture()},this.resetState=function(){S=0,T=0,b=null,_t.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};var Qo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},jo=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ta=class extends bn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=mn,h=mn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yi=class extends bn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new O,s=[],r=[],o=[],a=new O,l=new xe;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(sn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(sn(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},kr=class extends kn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pc=class extends kr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Fo=new O,Al=new ah,bl=new ah,Sl=new ah,Ic=class extends kn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Fo.subVectors(s[0],s[1]).add(s[0]),c=Fo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Al.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),bl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Sl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),bl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Sl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Al.calc(l),bl.calc(l),Sl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nd(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function L2(n,t){let e=1-n;return e*e*t}function U2(n,t){return 2*(1-n)*n*t}function B2(n,t){return n*n*t}function Br(n,t,e,i){return L2(n,t)+U2(n,e)+B2(n,i)}function N2(n,t){let e=1-n;return e*e*e*t}function O2(n,t){let e=1-n;return 3*e*e*n*t}function H2(n,t){return 3*(1-n)*n*n*t}function z2(n,t){return n*n*n*t}function Nr(n,t,e,i,s){return N2(n,t)+O2(n,e)+H2(n,i)+z2(n,s)}var ea=class extends kn{constructor(t=new at,e=new at,i=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new at){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dc=class extends kn{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y),Nr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},na=class extends kn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lc=class extends kn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends kn{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uc=class extends kn{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y),Br(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sa=class extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(nd(a,l.x,c.x,h.x,u.x),nd(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},Bc=Object.freeze({__proto__:null,ArcCurve:Pc,CatmullRomCurve3:Ic,CubicBezierCurve:ea,CubicBezierCurve3:Dc,EllipseCurve:kr,LineCurve:na,LineCurve3:Lc,QuadraticBezierCurve:ia,QuadraticBezierCurve3:Uc,SplineCurve:sa}),Nc=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Bc[s.type]().fromJSON(s))}return this}},vs=class extends Nc{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new na(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new ia(this.currentPoint.clone(),new at(t,e),new at(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new ea(this.currentPoint.clone(),new at(t,e),new at(i,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new sa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new kr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Gr=class n extends He{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=sn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new O,d=new at,p=new O,g=new O,_=new O,m=0,f=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let E=0;E<=e;E++){let y=i+E*h*s,v=Math.sin(y),A=Math.cos(y);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*A,o.push(u.x,u.y,u.z),d.x=E/e,d.y=S/(t.length-1),a.push(d.x,d.y);let T=l[3*S+0]*v,b=l[3*S+1],x=l[3*S+0]*A;c.push(T,b,x)}}for(let E=0;E<e;E++)for(let y=0;y<t.length-1;y++){let v=y+E*t.length,A=v,S=v+t.length,T=v+t.length+1,b=v+1;r.push(A,S,b),r.push(T,b,S)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},ra=class n extends Gr{constructor(t=1,e=1,i=4,s=8){let r=new vs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},vn=class n extends He{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new O,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=i+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ye=class n extends He{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,_=[],m=i/2,f=0;E(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(p,2));function E(){let v=new O,A=new O,S=0,T=(e-t)/i;for(let b=0;b<=r;b++){let x=[],M=b/r,w=M*(e-t)+t;for(let F=0;F<=s;F++){let P=F/s,C=P*l+a,B=Math.sin(C),U=Math.cos(C);A.x=w*B,A.y=-M*i+m,A.z=w*U,u.push(A.x,A.y,A.z),v.set(B,T,U).normalize(),d.push(v.x,v.y,v.z),p.push(P,1-M),x.push(g++)}_.push(x)}for(let b=0;b<s;b++)for(let x=0;x<r;x++){let M=_[x][b],w=_[x+1][b],F=_[x+1][b+1],P=_[x][b+1];(t>0||x!==0)&&(h.push(M,w,P),S+=3),(e>0||x!==r-1)&&(h.push(w,F,P),S+=3)}c.addGroup(f,S,0),f+=S}function y(v){let A=g,S=new at,T=new O,b=0,x=v===!0?t:e,M=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;let w=g;for(let F=0;F<=s;F++){let C=F/s*l+a,B=Math.cos(C),U=Math.sin(C);T.x=x*U,T.y=m*M,T.z=x*B,u.push(T.x,T.y,T.z),d.push(0,M,0),S.x=B*.5+.5,S.y=U*.5*M+.5,p.push(S.x,S.y),g++}for(let F=0;F<s;F++){let P=A+F,C=w+F;v===!0?h.push(C,C+1,P):h.push(C+1,C,P),b+=3}c.addGroup(f,b,v===!0?1:2),f+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},je=class n extends Ye{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oa=class n extends He{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let y=new O,v=new O,A=new O;for(let S=0;S<e.length;S+=3)p(e[S+0],y),p(e[S+1],v),p(e[S+2],A),l(y,v,A,E)}function l(E,y,v,A){let S=A+1,T=[];for(let b=0;b<=S;b++){T[b]=[];let x=E.clone().lerp(v,b/S),M=y.clone().lerp(v,b/S),w=S-b;for(let F=0;F<=w;F++)F===0&&b===S?T[b][F]=x:T[b][F]=x.clone().lerp(M,F/w)}for(let b=0;b<S;b++)for(let x=0;x<2*(S-b)-1;x++){let M=Math.floor(x/2);x%2===0?(d(T[b][M+1]),d(T[b+1][M]),d(T[b][M])):(d(T[b][M+1]),d(T[b+1][M+1]),d(T[b+1][M]))}}function c(E){let y=new O;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(E),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let E=new O;for(let y=0;y<r.length;y+=3){E.x=r[y+0],E.y=r[y+1],E.z=r[y+2];let v=m(E)/2/Math.PI+.5,A=f(E)/Math.PI+.5;o.push(v,1-A)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){let y=o[E+0],v=o[E+2],A=o[E+4],S=Math.max(y,v,A),T=Math.min(y,v,A);S>.9&&T<.1&&(y<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),A<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,y){let v=E*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){let E=new O,y=new O,v=new O,A=new O,S=new at,T=new at,b=new at;for(let x=0,M=0;x<r.length;x+=9,M+=6){E.set(r[x+0],r[x+1],r[x+2]),y.set(r[x+3],r[x+4],r[x+5]),v.set(r[x+6],r[x+7],r[x+8]),S.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),b.set(o[M+4],o[M+5]),A.copy(E).add(y).add(v).divideScalar(3);let w=m(A);_(S,M+0,E,w),_(T,M+2,y,w),_(b,M+4,v,w)}}function _(E,y,v,A){A<0&&E.x===1&&(o[y]=E.x-1),v.x===0&&v.z===0&&(o[y]=A/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},or=class n extends oa{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Sn=class extends vs{constructor(t){super(t),this.uuid=hr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new vs().fromJSON(s))}return this}},k2={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Dd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(i&&(r=q2(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],d=n[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Vr(r,o,e,a,l,p,0),o}};function Dd(n,t,e,i,s){let r,o;if(s===iv(n,t,e,i)>0)for(r=t;r<e;r+=i)o=id(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=id(r,n[r],n[r+1],o);return o&&ga(o,o.next)&&(Xr(o),o=o.next),o}function _s(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ga(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Xr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Vr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&K2(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?V2(n,i,s,r):G2(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Xr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=W2(_s(n),t,e),Vr(n,t,e,i,s,r,2)):o===2&&X2(n,t,e,i,s,r):Vr(_s(n),t,e,i,s,r,1);break}}}function G2(n){let t=n.prev,e=n,i=n.next;if(Ue(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Ys(s,a,r,l,o,c,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function V2(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ue(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=Oc(p,g,t,e,i),E=Oc(_,m,t,e,i),y=n.prevZ,v=n.nextZ;for(;y&&y.z>=f&&v&&v.z<=E;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ys(a,h,l,u,c,d,y.x,y.y)&&Ue(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ys(a,h,l,u,c,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ys(a,h,l,u,c,d,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=E;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ys(a,h,l,u,c,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function W2(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!ga(s,r)&&Ld(s,i,i.next,r)&&Wr(s,r)&&Wr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Xr(i),Xr(i.next),i=n=r),i=i.next}while(i!==n);return _s(i)}function X2(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tv(o,a)){let l=Ud(o,a);o=_s(o,o.next),l=_s(l,l.next),Vr(o,t,e,i,s,r,0),Vr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function q2(n,t,e,i){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Dd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(j2(c));for(s.sort(Y2),r=0;r<s.length;r++)e=Z2(s[r],e);return e}function Y2(n,t){return n.x-t.x}function Z2(n,t){let e=$2(n,t);if(!e)return t;let i=Ud(e,n);return _s(i,i.next),_s(e,e.next)}function $2(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ys(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Wr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&J2(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function J2(n,t){return Ue(n.prev,n,t.prev)<0&&Ue(t.next,n,n.next)<0}function K2(n,t,e,i){let s=n;do s.z===0&&(s.z=Oc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Q2(s)}function Q2(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Oc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function j2(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ys(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function tv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ev(n,t)&&(Wr(n,t)&&Wr(t,n)&&nv(n,t)&&(Ue(n.prev,n,t.prev)||Ue(n,t.prev,t))||ga(n,t)&&Ue(n.prev,n,n.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ga(n,t){return n.x===t.x&&n.y===t.y}function Ld(n,t,e,i){let s=Io(Ue(n,t,e)),r=Io(Ue(n,t,i)),o=Io(Ue(e,i,n)),a=Io(Ue(e,i,t));return!!(s!==r&&o!==a||s===0&&Po(n,e,t)||r===0&&Po(n,i,t)||o===0&&Po(e,n,i)||a===0&&Po(e,t,i))}function Po(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Io(n){return n>0?1:n<0?-1:0}function ev(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ld(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Wr(n,t){return Ue(n.prev,n,n.next)<0?Ue(n,t,n.next)>=0&&Ue(n,n.prev,t)>=0:Ue(n,t,n.prev)<0||Ue(n,n.next,t)<0}function nv(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ud(n,t){let e=new Hc(n.i,n.x,n.y),i=new Hc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function id(n,t,e,i){let s=new Hc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Hc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function iv(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Vi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];sd(t),rd(i,t);let o=t.length;e.forEach(sd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,rd(i,e[l]);let a=k2.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function sd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function rd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ar=class n extends He{constructor(t=new Sn([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:sv,y,v=!1,A,S,T,b;f&&(y=f.getSpacedPoints(h),v=!0,d=!1,A=f.computeFrenetFrames(h,!1),S=new O,T=new O,b=new O),d||(m=0,p=0,g=0,_=0);let x=a.extractPoints(c),M=x.shape,w=x.holes;if(!Vi.isClockWise(M)){M=M.reverse();for(let st=0,dt=w.length;st<dt;st++){let N=w[st];Vi.isClockWise(N)&&(w[st]=N.reverse())}}let P=Vi.triangulateShape(M,w),C=M;for(let st=0,dt=w.length;st<dt;st++){let N=w[st];M=M.concat(N)}function B(st,dt,N){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(dt,N)}let U=M.length,z=P.length;function H(st,dt,N){let zt,ut,Pt,_t=st.x-dt.x,Xt=st.y-dt.y,Ct=N.x-st.x,L=N.y-st.y,R=_t*_t+Xt*Xt,X=_t*L-Xt*Ct;if(Math.abs(X)>Number.EPSILON){let nt=Math.sqrt(R),lt=Math.sqrt(Ct*Ct+L*L),it=dt.x-Xt/nt,Lt=dt.y+_t/nt,Mt=N.x-L/lt,Ft=N.y+Ct/lt,he=((Mt-it)*L-(Ft-Lt)*Ct)/(_t*L-Xt*Ct);zt=it+_t*he-st.x,ut=Lt+Xt*he-st.y;let pt=zt*zt+ut*ut;if(pt<=2)return new at(zt,ut);Pt=Math.sqrt(pt/2)}else{let nt=!1;_t>Number.EPSILON?Ct>Number.EPSILON&&(nt=!0):_t<-Number.EPSILON?Ct<-Number.EPSILON&&(nt=!0):Math.sign(Xt)===Math.sign(L)&&(nt=!0),nt?(zt=-Xt,ut=_t,Pt=Math.sqrt(R)):(zt=_t,ut=Xt,Pt=Math.sqrt(R/2))}return new at(zt/Pt,ut/Pt)}let Z=[];for(let st=0,dt=C.length,N=dt-1,zt=st+1;st<dt;st++,N++,zt++)N===dt&&(N=0),zt===dt&&(zt=0),Z[st]=H(C[st],C[N],C[zt]);let et=[],K,ft=Z.concat();for(let st=0,dt=w.length;st<dt;st++){let N=w[st];K=[];for(let zt=0,ut=N.length,Pt=ut-1,_t=zt+1;zt<ut;zt++,Pt++,_t++)Pt===ut&&(Pt=0),_t===ut&&(_t=0),K[zt]=H(N[zt],N[Pt],N[_t]);et.push(K),ft=ft.concat(K)}for(let st=0;st<m;st++){let dt=st/m,N=p*Math.cos(dt*Math.PI/2),zt=g*Math.sin(dt*Math.PI/2)+_;for(let ut=0,Pt=C.length;ut<Pt;ut++){let _t=B(C[ut],Z[ut],zt);rt(_t.x,_t.y,-N)}for(let ut=0,Pt=w.length;ut<Pt;ut++){let _t=w[ut];K=et[ut];for(let Xt=0,Ct=_t.length;Xt<Ct;Xt++){let L=B(_t[Xt],K[Xt],zt);rt(L.x,L.y,-N)}}}let ht=g+_;for(let st=0;st<U;st++){let dt=d?B(M[st],ft[st],ht):M[st];v?(T.copy(A.normals[0]).multiplyScalar(dt.x),S.copy(A.binormals[0]).multiplyScalar(dt.y),b.copy(y[0]).add(T).add(S),rt(b.x,b.y,b.z)):rt(dt.x,dt.y,0)}for(let st=1;st<=h;st++)for(let dt=0;dt<U;dt++){let N=d?B(M[dt],ft[dt],ht):M[dt];v?(T.copy(A.normals[st]).multiplyScalar(N.x),S.copy(A.binormals[st]).multiplyScalar(N.y),b.copy(y[st]).add(T).add(S),rt(b.x,b.y,b.z)):rt(N.x,N.y,u/h*st)}for(let st=m-1;st>=0;st--){let dt=st/m,N=p*Math.cos(dt*Math.PI/2),zt=g*Math.sin(dt*Math.PI/2)+_;for(let ut=0,Pt=C.length;ut<Pt;ut++){let _t=B(C[ut],Z[ut],zt);rt(_t.x,_t.y,u+N)}for(let ut=0,Pt=w.length;ut<Pt;ut++){let _t=w[ut];K=et[ut];for(let Xt=0,Ct=_t.length;Xt<Ct;Xt++){let L=B(_t[Xt],K[Xt],zt);v?rt(L.x,L.y+y[h-1].y,y[h-1].x+N):rt(L.x,L.y,u+N)}}}W(),tt();function W(){let st=s.length/3;if(d){let dt=0,N=U*dt;for(let zt=0;zt<z;zt++){let ut=P[zt];vt(ut[2]+N,ut[1]+N,ut[0]+N)}dt=h+m*2,N=U*dt;for(let zt=0;zt<z;zt++){let ut=P[zt];vt(ut[0]+N,ut[1]+N,ut[2]+N)}}else{for(let dt=0;dt<z;dt++){let N=P[dt];vt(N[2],N[1],N[0])}for(let dt=0;dt<z;dt++){let N=P[dt];vt(N[0]+U*h,N[1]+U*h,N[2]+U*h)}}i.addGroup(st,s.length/3-st,0)}function tt(){let st=s.length/3,dt=0;ct(C,dt),dt+=C.length;for(let N=0,zt=w.length;N<zt;N++){let ut=w[N];ct(ut,dt),dt+=ut.length}i.addGroup(st,s.length/3-st,1)}function ct(st,dt){let N=st.length;for(;--N>=0;){let zt=N,ut=N-1;ut<0&&(ut=st.length-1);for(let Pt=0,_t=h+m*2;Pt<_t;Pt++){let Xt=U*Pt,Ct=U*(Pt+1),L=dt+zt+Xt,R=dt+ut+Xt,X=dt+ut+Ct,nt=dt+zt+Ct;bt(L,R,X,nt)}}}function rt(st,dt,N){l.push(st),l.push(dt),l.push(N)}function vt(st,dt,N){Ut(st),Ut(dt),Ut(N);let zt=s.length/3,ut=E.generateTopUV(i,s,zt-3,zt-2,zt-1);Yt(ut[0]),Yt(ut[1]),Yt(ut[2])}function bt(st,dt,N,zt){Ut(st),Ut(dt),Ut(zt),Ut(dt),Ut(N),Ut(zt);let ut=s.length/3,Pt=E.generateSideWallUV(i,s,ut-6,ut-3,ut-2,ut-1);Yt(Pt[0]),Yt(Pt[1]),Yt(Pt[3]),Yt(Pt[1]),Yt(Pt[2]),Yt(Pt[3])}function Ut(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function Yt(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return rv(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Bc[s.type]().fromJSON(s)),new n(i,t.options)}},sv={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new at(r,o),new at(a,l),new at(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new at(o,1-l),new at(c,1-u),new at(d,1-g),new at(_,1-f)]:[new at(a,1-l),new at(h,1-u),new at(p,1-g),new at(m,1-f)]}};function rv(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var aa=class n extends oa{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Zi=class n extends He{constructor(t=new Sn([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;Vi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let E=g[m];Vi.isClockWise(E)===!0&&(g[m]=E.reverse())}let _=Vi.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let E=g[m];p=p.concat(E)}for(let m=0,f=p.length;m<f;m++){let E=p[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,f=_.length;m<f;m++){let E=_[m],y=E[0]+u,v=E[1]+u,A=E[2]+u;i.push(y,v,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return ov(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function ov(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var jt=class n extends He{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new O,d=new O,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){let E=[],y=f/i,v=0;f===0&&o===0?v=.5/e:f===i&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){let S=A/e;u.x=-t*Math.cos(s+S*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+S*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(S+v,1-y),E.push(c++)}h.push(E)}for(let f=0;f<i;f++)for(let E=0;E<e;E++){let y=h[f][E+1],v=h[f][E],A=h[f+1][E],S=h[f+1][E+1];(f!==0||o>0)&&p.push(y,v,S),(f!==i-1||l<Math.PI)&&p.push(v,A,S)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Gn=class n extends He{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new O,u=new O,d=new O;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(_,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Vt=class extends gs{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new kt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ad,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Do(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function av(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var lr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zc=class extends lr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ou,endingEnd:ou}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case au:r=t,a=2*e-i;break;case lu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case au:o=t,l=2*i-e;break;case lu:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let A=0;A!==a;++A)r[A]=f*o[h+A]+E*o[c+A]+y*o[l+A]+v*o[u+A];return r}},kc=class extends lr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Gc=class extends lr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ti=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Do(e,this.TimeBufferType),this.values=Do(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Do(t.times,Array),values:Do(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case zo:e=this.InterpolantFactoryMethodDiscrete;break;case dc:e=this.InterpolantFactoryMethodLinear;break;case Za:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zo;case this.InterpolantFactoryMethodLinear:return dc;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&av(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Za,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=dc;var ys=class extends ti{constructor(t,e,i){super(t,e,i)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=zo;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends ti{};Vc.prototype.ValueTypeName="color";var Wc=class extends ti{};Wc.prototype.ValueTypeName="number";var Xc=class extends lr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)qi.slerpFlat(r,0,o,c-a,o,c,l);return r}},la=class extends ti{InterpolantFactoryMethodLinear(t){return new Xc(this.times,this.values,this.getValueSize(),t)}};la.prototype.ValueTypeName="quaternion";la.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends ti{constructor(t,e,i){super(t,e,i)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=zo;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends ti{};qc.prototype.ValueTypeName="vector";var Yc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},lv=new Yc,Zc=class{constructor(t){this.manager=t!==void 0?t:lv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=class extends gn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},qr=class extends cr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Tl=new xe,od=new O,ad=new O,ca=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;od.setFromMatrixPosition(t.matrixWorld),e.position.copy(od),ad.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ad),e.updateMatrixWorld(),Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ld=new xe,Ir=new O,wl=new O,$c=class extends ca{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ir.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ir),wl.copy(i.position),wl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(wl),i.updateMatrixWorld(),s.makeTranslation(-Ir.x,-Ir.y,-Ir.z),ld.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld)}},ha=class extends cr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $c}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Jc=class extends ca{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ua=class extends cr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var da=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=cd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function cd(){return 0}var lh="\\[\\]\\.:\\/",cv=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",hv="[^"+lh.replace("\\.","")+"]",uv=/((?:WC+[\/:])*)/.source.replace("WC",ch),dv=/(WCOD+)?/.source.replace("WCOD",hv),fv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),pv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),mv=new RegExp("^"+uv+dv+fv+pv+"$"),gv=["material","materials","bones","map"],Kc=class{constructor(t,e,i){let s=i||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ie=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cv,"")}static parseTrackName(t){let e=mv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);gv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Kc;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var T_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);var va={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ti=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},vv=new sr(-1,1,1,-1,0,1),hh=class extends He{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}},_v=new hh,fr=class{constructor(t){this._mesh=new gt(_v,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,vv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ms=class extends Ti{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ur.clone(t.uniforms),this.material=new Oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new fr(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Zr=class extends Ti{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},_a=class extends Ti{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ya=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new at);this._width=i.width,this._height=i.height,e=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ms(va),this.copyPass.material.blending=ri,this.clock=new da}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zr!==void 0&&(o instanceof Zr?i=!0:o instanceof _a&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new kt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var pr=class n extends Ti{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new kt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qe(r,o,{type:Tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Qe(r,o,{type:Tn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Qe(r,o,{type:Tn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Bd;this.highPassUniforms=ur.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=va;this.copyUniforms=ur.clone(h.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ho,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new kt,this.oldClearAlpha=1,this.basic=new De,this.fsQuad=new fr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Oe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Oe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};pr.BlurDirectionX=new at(1,0);pr.BlurDirectionY=new at(0,1);var wi=1920,Ri=1080;function $t(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ai=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),mr=(n,t,e)=>n+(t-n)*e,uh=(n,t,e)=>{let i=ai((e-n)/(t-n));return i*i*(3-2*i)};var yv=n=>(n=ai(n),n*n*(3-2*n));function Ma(n,t){if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){let i=yv((t-n[e-1][0])/(n[e][0]-n[e-1][0])),s=n[e-1][1],r=n[e][1];return Array.isArray(s)?s.map((o,a)=>mr(o,r[a],i)):mr(s,r,i)}return n[n.length-1][1]}var Ev={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new at(wi,Ri)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){if(maxBlur<.6){gl_FragColor=vec4(texture2D(tColor,vUv).rgb,1.);return;}float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<44;i++){float fi=float(i);float r=sqrt(fi/44.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},Mv={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new kt(1,1,1)},sat:{value:1},flash:{value:0},toon:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash,toon;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=mix(aces(c*.88),c/(1.+.18*c),toon);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(1.,.66);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1920.,1080.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Ea=class{constructor(t){let e=this.r=new Ko({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(wi,Ri,!1),e.shadowMap.enabled=!0,e.shadowMap.type=jc,e.toneMapping=oi,e.outputColorSpace=$i;let i=new rr(wi,Ri);i.type=bi,this.rt=new Qe(wi,Ri,{type:Tn,samples:4,depthTexture:i}),this.composer=new ya(e,new Qe(wi,Ri,{type:Tn})),this.dof=new Ms(Ev,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new pr(new at(wi/2,Ri/2),.45,.75,.82),this.grade=new Ms(Mv),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(o=>t>=o.t0&&t<o.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let i=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.toon.value=i.toon??0,r.frame.value=Math.floor(t*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function Nd(n,t,e,i=40){let s=new jo;s.background=new kt(e);let r=new hn(i,wi/Ri,.08,400);return{t0:n,t1:t,scene:s,camera:r,update(){return{}}}}function dh(n,t,e,i=0){n.position.set(t[0],t[1],t[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(e[0],e[1],e[2])}var $r=new O;function Vn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;$r.copy(t),$r[i]=0,$r.normalize();let c=.5*o/(o+a),h=1-$r.angleTo(n)/l;return Math.sign($r[e])===1?h*c:a/(o+a)+c+c*(1-h)}var xa=class extends le{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new O,l=new O,c=new O(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new O,_=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=Vn(g,l,"z","y",r,i),d[f+1]=1-Vn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-Vn(g,l,"z","y",r,i),d[f+1]=1-Vn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-Vn(g,l,"x","z",r,t),d[f+1]=Vn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[f+0]=1-Vn(g,l,"x","z",r,t),d[f+1]=1-Vn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[f+0]=1-Vn(g,l,"x","y",r,t),d[f+1]=1-Vn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=Vn(g,l,"x","y",r,t),d[f+1]=1-Vn(g,l,"y","x",r,e);break}}};var Ji=null;function Jr(){if(Ji)return Ji;let n=new Uint8Array([118,118,118,255,196,196,196,255,255,255,255,255]);return Ji=new ta(n,3,1,Pn),Ji.minFilter=Ji.magFilter=mn,Ji.generateMipmaps=!1,Ji.needsUpdate=!0,Ji}var fh=new Map;function Pe(n,t){if(!t){let e=String(n);if(fh.has(e))return fh.get(e);let i=new Vt({color:n,gradientMap:Jr()});return fh.set(e,i),i}return new Vt({color:n,gradientMap:Jr(),...t})}var xv=`uniform float w; uniform float minPx; uniform vec2 res;
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
}`,Av="uniform vec3 col; uniform float op; void main(){ gl_FragColor = vec4(col, op); }",ph=new Map;function bv(n=.014,t="#17131C",e=1.6){let i=n+t+e;if(ph.has(i))return ph.get(i);let s=new Oe({uniforms:{w:{value:n},minPx:{value:e},res:{value:new at(wi,Ri)},col:{value:new kt(t).convertSRGBToLinear()},op:{value:1}},vertexShader:xv,fragmentShader:Av,side:Ke});return ph.set(i,s),s}function Aa(n,t=.014,e,i){let s=new gt(n.geometry,bv(t,e,i));return s.castShadow=!1,s.receiveShadow=!1,s.userData.isOutline=!0,n.add(s),n}function At(n,t,e={}){let i=new gt(n,t&&t.isMaterial?t:Pe(t));return i.castShadow=e.shadow??!0,i.receiveShadow=!0,e.out&&Aa(i,e.out===!0?.014:e.out,e.outCol,e.minPx),e.pos&&i.position.set(...e.pos),e.rot&&i.rotation.set(...e.rot),i}var gr=(n,t,e,i=.04,s=3)=>new xa(n,t,e,s,Math.min(i,n/2-.001,t/2-.001,e/2-.001));function Q(n,t,e,i,s=0,r=0,o=0,a={}){return At(gr(n,t,e,a.r??Math.min(.05,Math.min(n,t,e)*.18)),i,{pos:[s,r,o],...a})}function D(n,t,e,i,s=0,r=0,o=0,a={}){return At(new le(n,t,e),i,{pos:[s,r,o],...a})}function J(n,t,e,i,s=0,r=0,o=0,a={}){return At(new Ye(n,t,e,a.seg||24),i,{pos:[s,r,o],...a})}function ve(n,t,e=0,i=0,s=0,r={}){return At(new jt(n,r.seg||24,Math.max(12,(r.seg||24)*.6|0)),t,{pos:[e,i,s],...r})}function ce(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t;let s=i.getContext("2d");e(s,n,t);let r=new Yi(i);return r.colorSpace=Je,r.anisotropy=8,r}var yt=(n,t={})=>new Vt({map:n,gradientMap:Jr(),...t}),mh=null;function gh(n=.32,t=.38){mh||(mh=ce(128,128,i=>{let s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(20,16,30,1)"),s.addColorStop(.55,"rgba(20,16,30,.55)"),s.addColorStop(1,"rgba(20,16,30,0)"),i.fillStyle=s,i.fillRect(0,0,128,128)}));let e=new gt(new Wt(n*2,n*2),new De({map:mh,transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return e.rotation.x=-Math.PI/2,e.renderOrder=1,e}var Od=(n={})=>({toon:1,blur:0,bloom:.18,bloomT:.95,bloomR:.4,vig:.22,exposure:1,sat:1.05,...n});var yn=Math.PI/180,Be=.3,Sv=.012,tn={phi0:Math.PI/2-1,phiL:2,th0:.62,thL:1.55,W:1024,H:512},te=n=>tn.W/2+n/tn.phiL*tn.W,Jt=n=>(n-tn.th0)/tn.thL*tn.H,In=n=>n/tn.phiL*tn.W,dn=n=>n/tn.thL*tn.H,xs="#1B1420";function Tv(n,t,e){n.clearRect(0,0,tn.W,tn.H),n.lineCap="round",n.lineJoin="round";let i=t.emo||"neutro",s=1.45,r=.31;if(t.blush||i==="feliz"||i==="apaixonado"||i==="vergonha"){n.fillStyle="rgba(240,110,110,"+(i==="vergonha"?.55:.3)+")";for(let v of[-1,1])n.beginPath(),n.ellipse(te(v*.44),Jt(1.7),In(.075),dn(.045),0,0,7),n.fill()}let o=ai(Math.max(t.blink||0,i==="sono"?.55:i==="triste"||i==="choro"?.22:i==="bravo"?.25:i==="desconfiado"?.4:i==="tedio"?.5:0)),a=i==="surpreso"||i==="medo"?1.15:1;for(let v of[-1,1]){let A=te(v*r),S=Jt(s),T=In(.128)*a,b=dn(.158)*a;if(i==="feliz"&&!t.olhosAbertos||(t.blink||0)>.92){n.strokeStyle=xs,n.lineWidth=11,n.beginPath(),i==="feliz"||i==="rindo"?n.arc(A,S+b*.25,T*.85,Math.PI*1.12,Math.PI*1.88):(n.moveTo(A-T*.9,S+b*.15),n.quadraticCurveTo(A,S+b*.55,A+T*.9,S+b*.15)),n.stroke();continue}n.save(),n.beginPath(),n.ellipse(A,S,T,b,0,0,7),n.clip(),n.fillStyle="#FFFFFF",n.fillRect(A-T,S-b,T*2,b*2);let x=i==="surpreso"||i==="medo"?.55:.68,M=ai(e[0],-1,1),w=ai(e[1],-1,1),F=A+M*T*.38,P=S+w*b*.32+b*.06;n.fillStyle="#231A26",n.beginPath(),n.ellipse(F,P,T*x,b*x*.98,0,0,7),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.ellipse(F-T*.22,P-b*.28,T*.2,b*.17,0,0,7),n.fill(),n.beginPath(),n.ellipse(F+T*.2,P+b*.22,T*.08,b*.07,0,0,7),n.fill();let C=i==="bravo"?-v*.45:i==="triste"||i==="choro"||i==="preocupado"?v*.35:0;if(o>.02||C){let B=S-b+b*2*o;n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.moveTo(A-T*1.2,S-b*1.3),n.lineTo(A+T*1.2,S-b*1.3),n.lineTo(A+T*1.2,B+Math.tan(C)*T*1.2),n.lineTo(A-T*1.2,B-Math.tan(C)*T*1.2),n.closePath(),n.fill(),n.strokeStyle=xs,n.lineWidth=8,n.beginPath(),n.moveTo(A-T*1.1,B-Math.tan(C)*T*1.1),n.lineTo(A+T*1.1,B+Math.tan(C)*T*1.1),n.stroke()}n.restore(),n.strokeStyle=xs,n.lineWidth=8,n.beginPath(),n.ellipse(A,S,T,b,0,0,7),n.stroke(),t.cilios&&(n.lineWidth=7,n.beginPath(),n.moveTo(A+v*T*.7,S-b*.72),n.lineTo(A+v*T*1.15,S-b*1.02),n.stroke())}if(i==="choro"||t.lagrima){n.fillStyle="rgba(120,200,255,.85)";for(let v of[-1,1]){let A=te(v*r),S=Jt(s)+dn(.12);n.beginPath(),n.moveTo(A-In(.02),S),n.quadraticCurveTo(A,S+dn(.22),A+In(.02),S),n.fill(),n.beginPath(),n.ellipse(A,S+dn(.2),In(.028),dn(.035),0,0,7),n.fill()}}let l={neutro:[0,0],feliz:[.04,-.1],rindo:[.04,-.1],triste:[.02,.45],choro:[.03,.5],bravo:[-.03,-.55],surpreso:[.09,0],medo:[.08,.4],preocupado:[.04,.38],desconfiado:[-.01,-.2],sono:[-.01,.1],vergonha:[.03,.3],determinado:[-.02,-.35],tedio:[-.01,.05],apaixonado:[.05,.2]}[i]||[0,0],c=l[0]+(t.brow||0)*.05,h=l[1];n.strokeStyle=t.sobr||xs,n.lineWidth=t.sobrW||15;for(let v of[-1,1]){let A=te(v*r),S=Jt(s-.2-c),T=In(.085),b=v*h*.5;n.beginPath(),n.moveTo(A-T*Math.cos(b),S-T*Math.sin(b)*(v<0,1)),n.quadraticCurveTo(A,S-dn(.025),A+T*Math.cos(b),S+T*Math.sin(b)),n.stroke()}if(t.rugas){n.strokeStyle="rgba(90,50,40,.5)",n.lineWidth=5;for(let v of[-1,1]){let A=te(v*(r+.17));for(let S=0;S<3;S++)n.beginPath(),n.moveTo(A,Jt(s-.05+S*.06)),n.lineTo(A+v*In(.05),Jt(s-.07+S*.07)),n.stroke()}n.beginPath(),n.moveTo(te(-.12),Jt(1.12)),n.quadraticCurveTo(te(0),Jt(1.09),te(.12),Jt(1.12)),n.stroke()}if(t.oculosEscuros){n.fillStyle="#15121A";for(let v of[-1,1])n.beginPath(),n.ellipse(te(v*r),Jt(s+.02),In(.16),dn(.13),0,0,7),n.fill();n.strokeStyle="#15121A",n.lineWidth=10,n.beginPath(),n.moveTo(te(-r+.14),Jt(s)),n.lineTo(te(r-.14),Jt(s)),n.stroke(),n.fillStyle="rgba(255,255,255,.35)";for(let v of[-1,1])n.beginPath(),n.ellipse(te(v*r-.05),Jt(s-.03),In(.04),dn(.025),-.5,0,7),n.fill()}if(t.oculos){n.strokeStyle="#6A4A3A",n.lineWidth=8;for(let v of[-1,1])n.beginPath(),n.ellipse(te(v*r),Jt(s),In(.15),dn(.16),0,0,7),n.stroke();n.beginPath(),n.moveTo(te(-r+.15),Jt(s-.02)),n.quadraticCurveTo(te(0),Jt(s-.08),te(r-.15),Jt(s-.02)),n.stroke()}t.nariz&&(n.strokeStyle="rgba(60,30,30,.55)",n.lineWidth=7,n.beginPath(),n.arc(te(0),Jt(1.66),In(.035),.2,Math.PI-.2),n.stroke());let u=t.mouth||{},d=ai(u.open||0),p=ai(u.round||0),g=u.smile??({feliz:.8,rindo:.9,triste:-.6,choro:-.7,bravo:-.4,medo:-.3,preocupado:-.35,apaixonado:.6,vergonha:.3,determinado:-.05,desconfiado:-.15,tedio:-.2}[i]||0),_=Jt(t.bigode?1.93:1.88),m=te(0),f=In(.15+.05*(1-p)+(i==="rindo"?.04:0)),E=_-g*dn(.035),y=()=>{if(d<.07)n.strokeStyle=xs,n.lineWidth=11,n.beginPath(),n.moveTo(m-f*.85,E),n.quadraticCurveTo(m,_+g*dn(.075),m+f*.85,E),n.stroke();else{let v=dn(.05+.2*d),A=f*(1-.38*p);n.beginPath(),p>.55?n.ellipse(m,_+v*.35,A*.75,v*.62,0,0,7):(n.moveTo(m-A,E),n.quadraticCurveTo(m,_+g*dn(.03)-v*.12,m+A,E),n.bezierCurveTo(m+A*.95,E+v*1.25,m-A*.95,E+v*1.25,m-A,E),n.closePath()),n.fillStyle="#5A1E2A",n.fill(),n.save(),n.clip(),d>.28&&p<.55&&(n.fillStyle="#FFFFFF",n.fillRect(m-A,E-v,A*2,v*1.18)),n.fillStyle="#E8707E",n.beginPath(),n.ellipse(m,E+v*1.05,A*.58,v*.42,0,0,7),n.fill(),n.restore(),n.strokeStyle=xs,n.lineWidth=9,n.stroke()}};if(t.barba||y(),t.barba&&(n.fillStyle=t.barba,n.globalAlpha=.92,n.beginPath(),n.moveTo(te(-.44),Jt(1.5)),n.quadraticCurveTo(te(-.46),Jt(2.05),te(0),Jt(2.2)),n.quadraticCurveTo(te(.46),Jt(2.05),te(.44),Jt(1.5)),n.quadraticCurveTo(te(.36),Jt(1.78),te(.2),Jt(1.8)),n.quadraticCurveTo(te(0),Jt(1.72),te(-.2),Jt(1.8)),n.quadraticCurveTo(te(-.36),Jt(1.78),te(-.44),Jt(1.5)),n.fill(),n.globalAlpha=1,n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.ellipse(m,_+dn(.03),f*1.15,dn(.09+.12*d),0,0,7),n.fill(),y()),t.olheiras){n.strokeStyle="rgba(90,60,90,.45)",n.lineWidth=7;for(let v of[-1,1])n.beginPath(),n.arc(te(v*.31),Jt(1.5),In(.1),.35,Math.PI-.35),n.stroke()}if(t.sardas){n.fillStyle="rgba(150,80,50,.55)";for(let v of[-1,1])for(let A=0;A<5;A++)n.beginPath(),n.arc(te(v*(.36+A%3*.05)),Jt(1.66+Math.floor(A/3)*.05+A%2*.02),4.5,0,7),n.fill()}t.bigode&&(n.fillStyle=t.bigode,n.strokeStyle=xs,n.lineWidth=6,n.beginPath(),n.moveTo(te(0),Jt(1.76)),n.bezierCurveTo(te(.12),Jt(1.7),te(.24),Jt(1.76),te(.27),Jt(1.9)),n.bezierCurveTo(te(.17),Jt(1.84),te(.08),Jt(1.87),te(0),Jt(1.83)),n.bezierCurveTo(te(-.08),Jt(1.87),te(-.17),Jt(1.84),te(-.27),Jt(1.9)),n.bezierCurveTo(te(-.24),Jt(1.76),te(-.12),Jt(1.7),te(0),Jt(1.76)),n.fill(),n.stroke())}var Hd={},Dn=0,As=(n,t)=>{let e="c"+n+t+Dn;return Hd[e]||(Hd[e]=new ra(n,t,Dn?3:6,Dn?10:18))};function zd(n,t=.82,e=36){let i=new Gr(n.map(([l,c])=>new at(l,c)),e,Math.PI,Math.PI*2);i.applyMatrix4(new xe().makeScale(1,1,t));let s=i.attributes.position,r=i.attributes.uv,o=1e9,a=-1e9;for(let l=0;l<s.count;l++)o=Math.min(o,s.getY(l)),a=Math.max(a,s.getY(l));for(let l=0;l<s.count;l++)r.setY(l,(s.getY(l)-o)/(a-o));return i.computeVertexNormals(),i}var wv={magro:[[0,.5],[.14,.5],[.165,.53],[.172,.62],[.172,.72],[.165,.8],[.14,.86],[.09,.895],[.04,.905],[0,.906]],barriga:[[0,.47],[.16,.47],[.2,.52],[.225,.6],[.225,.68],[.205,.77],[.17,.845],[.11,.89],[.04,.905],[0,.906]],senhora:[[0,.5],[.15,.5],[.17,.55],[.175,.64],[.17,.74],[.16,.81],[.13,.865],[.08,.898],[0,.906]]},Rv=[[0,.24],[.25,.24],[.245,.26],[.22,.36],[.19,.5],[.165,.62],[0,.62]];function ba(n={}){Dn=n.simples?1:0;let t=n.pele||"#C98B5E",e=n.camisa||"#E8453C",i=n.calca||"#2E4A7A",s=n.tenis||"#F4F1EA",r=new q,o=new q;r.add(o);let a=new q;a.position.y=.52,o.add(a);let l=(C,B,U,z,H=Sv)=>{let Z=new gt(B,typeof U=="string"?Pe(U):U);return Z.castShadow=!0,Z.receiveShadow=!0,z&&Z.position.set(...z),H&&Aa(Z,H),C.add(Z),Z},c=ce(1024,512,(C,B,U)=>{C.fillStyle=e,C.fillRect(0,0,B,U),n.estampa&&n.estampa(C,B,U)}),h=yt(c),u=l(a,zd(wv[n.tronco||"magro"]),h,[0,-.52,0]);n.saia&&l(a,zd(Rv,.86),n.saia,[0,-.52,0]),l(a,new Ye(.06,.065,.1,16),t,[0,.4,0],0);let d=new q;d.position.y=.38,a.add(d);let p=l(d,new jt(Be,Dn?24:48,Dn?16:32),t,[0,Be*.86,0]);p.receiveShadow=!1;for(let C of[-1,1])l(d,new jt(.055,16,12),t,[C*Be*.96,Be*.82,-.01]).scale.set(.6,1,.9);let g=document.createElement("canvas");g.width=tn.W>>Dn,g.height=tn.H>>Dn;let _=g.getContext("2d");Dn&&_.scale(.5,.5);let m=new Yi(g);m.colorSpace=Je,m.anisotropy=8;let f=new Vt({map:m,gradientMap:Pe("#fff").gradientMap,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),E=new gt(new jt(Be*1.002,Dn?24:48,Dn?16:32,tn.phi0,tn.phiL,tn.th0,tn.thL),f);E.position.y=Be*.86,E.renderOrder=2,d.add(E);let y=n.corCabelo||"#1E1618",v=new q;if(v.position.y=Be*.86,d.add(v),n.cabelo==="cacheado"){let C=new jt(1,Dn?8:14,Dn?6:10),B=0;for(let U=0;U<70;U++){let z=Math.acos(1-2*((U+.5)/70)),H=U*2.39996,Z=Math.cos(z),et=Math.sin(z),K=Math.cos(H)*et,ft=Math.sin(H)*et;if(Z<.28&&ft>-.2||Z<-.25||ft>.55&&Z<.62||Math.abs(K)>.8&&Z<.45&&ft>-.5)continue;let ht=.075+U*37%10/10*.03,W=l(v,C,y,[K*Be*.98,Z*Be*.98+.01,ft*Be*.98],.009);W.scale.setScalar(ht),W.castShadow=!1,B++}}else if(n.cabelo==="tigela"||n.cabelo==="rabo"||n.cabelo==="coque"){if(l(v,new jt(Be*1.04,40,28),y,[0,.055,-.065]),n.cabelo==="rabo"){let C=l(v,As(.085,.26),y,[0,.06,-.42]);C.rotation.x=.75;let B=l(v,new jt(.1,18,14),y,[0,-.07,-.5]);l(v,new jt(.065,16,12),n.laco||"#F25C8A",[0,.22,-.31]);for(let U of[-1,1]){let z=l(v,As(.06,.2),y,[U*.27,-.08,.02]);z.rotation.z=-U*.08}}n.cabelo==="coque"&&l(v,new jt(.12,24,16),y,[0,.3,-.12]);for(let C=-2;C<=2;C++)l(v,new jt(.075,16,12),y,[C*.07,.2-Math.abs(C)*.025,.2-Math.abs(C)*.02],.008).scale.set(1,.8,.7)}else if(n.cabelo==="careca")for(let C of[-1,1])for(let B=0;B<4;B++){let U=-.6-B*.35;l(v,new jt(.07,14,10),y,[C*Math.cos(U)*Be*.93*(B<3?1:.9),-.02,Math.sin(U)*Be*.93+.12],.008).scale.set(1,1.2,1)}if(n.cabelo==="topete"){l(v,new jt(Be*1.03,40,28,0,Math.PI*2,0,1.45),y,[0,.03,-.05]),l(v,new jt(Be*1.035,48,32,Math.PI+.18,Math.PI-.36,0,2.3),y,[0,0,0],.008);for(let B=0;B<5;B++)l(v,new je(.085,.22,10),y,[(B-2)*.075,.27-Math.abs(B-2)*.02,.12-Math.abs(B-2)*.02],.008).rotation.set(1.05,0,-(B-2)*.22);l(v,new jt(.16,18,12),y,[0,.26,.05],.008).scale.set(1.2,.6,1.1)}else if(n.cabelo==="curto")l(v,new jt(Be*1.025,40,28,0,Math.PI*2,0,1.3),y,[0,.025,-.03]),l(v,new jt(Be*1.03,48,32,Math.PI+.18,Math.PI-.36,0,2.25),n.corCabelo2||y,[0,0,0],.008);else if(n.cabelo==="chanel"){l(v,new jt(Be*1.06,40,28),y,[0,.05,-.07]);for(let B of[-1,1])l(v,new jt(.2,20,14),y,[B*.25,-.12,-.06]).scale.set(.55,1.15,1);l(v,new jt(.26,24,14),y,[0,.19,.12],.008).scale.set(1.05,.42,.6)}else if(n.cabelo==="afro"&&(l(v,new jt(Be*1.32,40,28),y,[0,.14,-.1]).scale.set(1.08,1,1),n.faixa)){let B=l(v,new Gn(Be*1.02,.035,10,40),n.faixa,[0,.1,0],.006);B.rotation.x=Math.PI/2-.25}if(n.brincos)for(let C of[-1,1])l(d,new jt(.03,12,10),n.brincos,[C*Be*1,Be*.62,.02],.005);if(n.bone){let C=l(v,new jt(Be*1.05,32,16,0,Math.PI*2,0,1.25),n.bone,[0,.03,-.01]),B=l(v,gr(.36,.03,.22,.012),n.bone,[0,.12,n.boneTras?-.32:.3])}let A=C=>{let B=new q;B.position.set(C*.185,.3,0),a.add(B);let U=(n.manga||"curta")==="curta";l(B,As(U?.064:.058,U?.07:.17),e,[0,U?-.055:-.1,0]),U&&l(B,As(.05,.15),t,[0,-.11,0]);let z=new q;z.position.y=-.21,B.add(z),l(z,As(.048,.14),U?t:e,[0,-.085,0]);let H=new q;H.position.y=-.2,z.add(H);let Z=new jt(.062,20,14);return l(H,Z,n.luva||t,[0,-.01,0]).scale.set(.85,1.05,.8),l(H,new jt(.026,12,10),n.luva||t,[-C*.045,.02,.03],.007),{sh:B,el:z,hand:H}},S=A(1),T=A(-1),b=C=>{let B=new q;B.position.set(C*.085,.52,0),o.add(B),l(B,As(.07,.17),n.saia?t:i,[0,-.11,0]);let U=new q;U.position.y=-.22,B.add(U),l(U,As(.063,.16),n.meia||(n.saia?t:i),[0,-.1,0]);let z=new q;z.position.y=-.22,U.add(z);let H=l(z,gr(.13,.095,.23,.045),s,[0,-.037,.035]);return n.sola!==!1&&l(z,gr(.135,.03,.235,.014),n.sola||"#FFFFFF",[0,-.075,.035],.006),{hp:B,kn:U,an:z}},x=b(1),M=b(-1),w=gh(.36,.4);w.position.y=.006,r.add(w),n.escala&&r.scale.setScalar(n.escala),v.traverse(C=>{C.isMesh&&(C.castShadow=!1)});let F={look:[0,0],key:""},P={root:r,pelvis:o,torsoG:a,headG:d,head:p,hair:v,torso:u,hands:{L:S.hand,R:T.hand},arms:{L:S,R:T},legs:{L:x,R:M},sombra:w,place(C,B,U=0,z=0){return r.position.set(C,U,B),r.rotation.y=z,P},pose(C={}){o.position.y=C.bob||0,o.position.z=C.dz||0,a.rotation.set((C.lean||0)*yn,(C.twist||0)*yn,(C.tilt||0)*yn),d.rotation.set((C.headX||0)*yn,(C.headY||0)*yn,(C.headZ||0)*yn);let B=(z,H,Z,et)=>{z.sh.rotation.set(-(H[0]||0)*yn,(H[2]||0)*yn*et,et*(H[1]??8)*yn),z.el.rotation.set(-(Z||0)*yn,0,0)};B(S,C.shL||[0,8],C.elL??8,1),B(T,C.shR||[0,8],C.elR??8,-1);let U=(z,H,Z,et)=>{z.hp.rotation.set(-(H[0]||0)*yn,0,et*(H[1]||0)*yn),z.kn.rotation.set((Z||0)*yn,0,0),z.an.rotation.set(-(H[0]||0)*yn*0+(Z||0)*yn*-.4*(H[2]??1),0,0)};return U(x,C.hipL||[0,0],C.knL||0,1),U(M,C.hipR||[0,0],C.knR||0,-1),P},face(C={}){let B=C.look||[0,0],U=C.mouth||{},z=(Z,et=20)=>Math.round((Z||0)*et),H=[C.emo,z(C.blink,10),z(B[0],8),z(B[1],8),z(U.open,12),z(U.round,6),U.smile===void 0?"u":z(U.smile,8),z(C.brow,6),C.lagrima?1:0,C.olhosAbertos?1:0].join("|");return H!==F.key&&(F.key=H,Tv(_,{...n.rosto,...C,pele:t,oculos:n.oculos,rugas:n.rugas,oculosEscuros:n.oculosEscuros,bigode:n.bigode,barba:n.barba,olheiras:n.olheiras,sardas:n.sardas,nariz:n.nariz,cilios:n.cilios,sobr:n.sobr,sobrW:n.sobrW},B),m.needsUpdate=!0),P},faceTo(C,B){return r.rotation.y=Math.atan2(C-r.position.x,B-r.position.z),P},hold(C,B="R"){return P.hands[B].add(C),C}};return P.estatua=(C="#A9A49C")=>{P.congelado=!0;let B=Pe(C);return r.traverse(U=>{U.isMesh&&!U.userData.isOutline&&U!==w&&U!==E&&(U.material=B)}),f.color.set("#B8B4AC"),P},P.pose({}),P.face({}),P}var Sa=(n,t=0,e=1)=>{let i=Math.sin((n+t)*2.1);return{bob:i*.006*e,headX:i*1.5*e,shL:[i*2,8+i*1.5],shR:[-i*2,8+i*1.5],elL:10,elR:10}};function Kr(n,t=1.8,e=1,i=0){let s=(n*t+i)*Math.PI*2,r=Math.sin(s),o=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.025*e-.012,lean:4*e,twist:r*4*e,hipL:[28*r*e,0],hipR:[-28*r*e,0],knL:Math.max(0,-o)*45*e+5,knR:Math.max(0,o)*45*e+5,shL:[-24*r*e,7],shR:[24*r*e,7],elL:18+Math.max(0,-r)*18,elR:18+Math.max(0,r)*18,headX:-2}}var kd=(n={})=>({bob:-.17,dz:-.02,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shL:[12,8],shR:[12,8],elL:30,elR:30,...n});var Se=[-150,-90,-30,30,90,150],Le=[-120,-60,0,60,120],vh=["Rua do Ip\xEA","Rua Tiradentes","Rua da Matriz","Rua S\xE3o Benedito","Rua dos Tropeiros","Estrada Velha"],_h=["Rua da Serra","Rua Sete de Setembro","Avenida Brasil","Rua das Flores","Rua do Lago"],Ve=50-2*3,li=n=>(Se[n]+Se[n+1])/2,ci=n=>(Le[n]+Le[n+1])/2,Cv=[["res","res","comN","santaCasa","rodoviaria"],["res","comW","praca","comE","res"],["res","escola","comS","res","posto"],["res","res","res","res","campo"]],Ge=Ve/4,bs=Ve/2;function Ta(){let n=[],t=1,e=(h,u,d,p=[])=>{for(let g=0;g<4;g++){let _=h-Ve/2+Ge*(g+.5);n.push({tipo:d[g]||"casa",nome:p[g],x:_,z:u-bs/2,w:Ge,d:bs,frente:"n",seed:t++}),n.push({tipo:d[g+4]||"casa",nome:p[g+4],x:_,z:u+bs/2,w:Ge,d:bs,frente:"s",seed:t++})}};for(let h=0;h<4;h++)for(let u=0;u<5;u++){let d=Cv[h][u],p=li(u),g=ci(h);d==="res"?h===3&&u===1?e(p,g,["casa","casaFamilia","casa","sobrado","casa","casa","sobrado","casa"],[null,"casaFamilia"]):e(p,g,t%3===0?["casa","sobrado","casa","casa","casa","casa","sobrado","casa"]:["casa","casa","sobrado","casa","sobrado","casa","casa","casa"]):d==="comW"?e(p,g,["casa","sobrado","casa","casa","casa","casa","sobrado","casa"]):d==="comE"?e(p,g,["casa","casa","sobrado","casa","casa","sobrado","casa","casa"]):d==="comS"?e(p,g,["casa","sobrado","casa","casa","casa","casa","casa","sobrado"]):d==="comN"?e(p,g,["sobrado","casa","casa","sobrado","casa","casa","casa","casa"]):n.push({tipo:d,nome:d,x:p,z:g,w:Ve,d:Ve,frente:"s",seed:t++})}let i=(h,u,d,p,g={})=>{let _=n.findIndex(m=>Math.abs(m.x-h)<1&&Math.abs(m.z-u)<1);_>=0&&Object.assign(n[_],{tipo:d,nome:p,...g})},s=li(1),r=li(3),o=ci(1)-bs/2,a=ci(1)+bs/2;i(s-Ve/2+Ge*3.5,a,"padaria","padaria"),i(s-Ve/2+Ge*2.5,a,"farmacia","farmacia"),i(s-Ve/2+Ge*1.5,a,"loterica","loterica"),i(s-Ve/2+Ge*3.5,o,"lanchonete","lanchonete"),i(r-Ve/2+Ge*.5,a,"banco","banco"),i(r-Ve/2+Ge*1.5,a,"mercado","mercado",{w:Ge*2,x:r-Ve/2+Ge*2}),n.splice(n.findIndex(h=>Math.abs(h.x-(r-Ve/2+Ge*2.5))<1&&Math.abs(h.z-a)<1),1),i(r-Ve/2+Ge*3.5,a,"sorveteria","sorveteria"),i(r-Ve/2+Ge*.5,o,"lojaRoupas","lojaRoupas");let l=li(2),c=ci(2)-bs/2;return i(l-Ve/2+Ge*.5,c,"bar","bar"),i(l-Ve/2+Ge*1.5,c,"prefeitura","prefeitura",{w:Ge*2,x:l-Ve/2+Ge*2}),n.splice(n.findIndex(h=>Math.abs(h.x-(l-Ve/2+Ge*2.5))<1&&Math.abs(h.z-c)<1),1),i(l-Ve/2+Ge*3.5,c,"lojaMateriais","lojaMateriais"),n}var wa=[[-30,-60],[30,-60],[-30,0],[30,0]],Gd=[{x:-10,z:6.6,ry:Math.PI,nome:"pontoPraca"},{x:36.6,z:-30,ry:-Math.PI/2,nome:"pontoRodoviaria"}];function Wd(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new He,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let p=n[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Vd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][d]);let g=Vd(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Vd(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new un(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){let _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Ra=Math.PI/180;function hi(n){n.updateMatrixWorld(!0);let t=new xe().copy(n.matrixWorld).invert(),e=new Map,i=[],s=o=>{for(let a of[...o.children]){if(a.userData.vivo||a.isMesh&&Array.isArray(a.material)||a.isLight||a.isSprite||a.isPoints||a.isLine||a.isInstancedMesh||a.isSkinnedMesh||a.isCamera){i.push(a);continue}if(a.isMesh&&a.geometry&&!Array.isArray(a.material)&&a.visible){let l=a,c=l.material.uuid+(l.castShadow?"s":"n")+(l.receiveShadow?"r":"")+(l.renderOrder|0);e.has(c)||e.set(c,{mat:l.material,cast:l.castShadow,rec:l.receiveShadow,ro:l.renderOrder,out:!!l.userData.isOutline,geos:[]});let h=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(let u of Object.keys(h.attributes))["position","normal","uv"].includes(u)||h.deleteAttribute(u);h.attributes.uv||h.setAttribute("uv",new un(new Float32Array(h.attributes.position.count*2),2)),h.attributes.normal||h.computeVertexNormals(),h.applyMatrix4(new xe().multiplyMatrices(t,l.matrixWorld)),h.morphAttributes={},h.clearGroups(),e.get(c).geos.push(h)}s(a)}};s(n);let r=new q;r.name=n.name,r.position.copy(n.position),r.rotation.copy(n.rotation),r.scale.copy(n.scale),r.userData=n.userData;for(let o of e.values()){if(!o.geos.length)continue;let a=Wd(o.geos,!1);if(!a)continue;let l=new gt(a,o.mat);l.castShadow=o.cast,l.receiveShadow=o.rec,l.renderOrder=o.ro,l.userData.isOutline=o.out,l.matrixAutoUpdate=!1,r.add(l)}for(let o of i){let a=o.matrixWorld.clone();r.add(o),o.matrix.copy(new xe().multiplyMatrices(t,a)),o.matrix.decompose(o.position,o.quaternion,o.scale)}return r}var Qr={s:0,n:Math.PI,e:Math.PI/2,w:-Math.PI/2};function ei(n,t,e){let i=Qr[n.frente]||0,s=Math.cos(i),r=Math.sin(i);return[n.x+t*s+e*r,n.z-t*r+e*s]}var Xd=(n,t)=>t+(Qr[n.frente]||0);function qd(n,t){let e=new q;e.position.set(t.x,t.y||0,t.z),e.rotation.y=Qr[t.frente]||0,e.name=t.nome||t.tipo;let i={L:t,g:e,cidade:n,add:(...s)=>{for(let r of s)e.add(r);return s[0]},col:(s,r,o,a,l={})=>{let c=Qr[t.frente]||0,h=ei(t,s,r),u=Math.abs(Math.round(Math.sin(c)))===1;n.colisores.push({x:h[0],z:h[1],w:u?a:o,d:u?o:a,h:l.h??2,y:l.y??0,nome:l.nome||t.nome})},ponto:(s,r,o,a=0,l)=>{let c=ei(t,r,o);n.pontos[(t.nome?t.nome+".":"")+s]={x:c[0],z:c[1],y:(l??0)+(t.y||0),ry:Xd(t,a)}},vivo:s=>n.vivos.push(s),pontoLivre:(s,r,o=0)=>{for(let[a,l]of r){let c=ei(t,a,l);if(!n.colisores.some(h=>Math.abs(c[0]-h.x)<h.w/2+.3&&Math.abs(c[1]-h.z)<h.d/2+.3)){i.ponto(s,a,l,o);return}}i.ponto(s,r[0][0],r[0][1],o)},pisoAlto:(s,r,o,a,l)=>{let c=Qr[t.frente]||0,h=ei(t,s,r),u=Math.abs(Math.round(Math.sin(c)))===1;(n.pisosAltos=n.pisosAltos||[]).push({x:h[0],z:h[1],w:u?a:o,d:u?o:a,y:l+(t.y||0)})},figurante:(s,r,o=0,a={})=>{let l=ei(t,s,r);(n.figurantes=n.figurantes||[]).push({x:l[0],z:l[1],ry:Xd(t,o),y:(a.y??0)+(t.y||0),lote:t.nome,nivel:i.nivel,...a})}};return i}function Ze(n,t,e,i=0,s=0,r=0){let o=new gt(new Wt(n,t),e);return o.rotation.x=-Math.PI/2,o.position.set(i,s,r),o.receiveShadow=!0,o}function We(n,t,e,i=0,s=0,r=0,o=0){let a=new gt(new Wt(n,t),e);return a.position.set(i,s,r),a.rotation.y=o,a.receiveShadow=!0,a}function Ca(n,t,e,i,s=1){let r=n.attributes.uv,o=n.attributes.normal;for(let a=0;a<r.count;a++){let l=Math.abs(o.getX(a)),c=Math.abs(o.getY(a)),h=l>.5?i:t,u=c>.5?i:e;r.setXY(a,r.getX(a)*h/s,r.getY(a)*u/s)}return r.needsUpdate=!0,n}function Wn(n,t,e,i,s,r,o,a=1,l={}){let c=Ca(new le(n,t,e),n,t,e,a);return At(c,i,{pos:[s,r,o],...l})}var Ht=(n,t)=>t[Math.floor(n()*t.length)%t.length];var Ch={};Jf(Ch,{agua:()=>wh,asfalto:()=>Eh,azulejo:()=>Th,calcada:()=>Xn,grama:()=>Ci,janelas:()=>Iv,letreiroTex:()=>_e,matTex:()=>Dv,ondas:()=>Mh,paralelepipedo:()=>Fv,piso:()=>Pv,reboco:()=>bh,repetir:()=>en,telha:()=>Ah,terra:()=>xh,tijolo:()=>Sh,vidroTex:()=>Rh});var yh=new Map,En=(n,t)=>(yh.has(n)||yh.set(n,t()),yh.get(n)),Ln=(n,t=1,e=1)=>(n.wrapS=n.wrapT=An,n.repeat.set(t,e),n);function en(n,t,e){let i=n.clone();return i.wrapS=i.wrapT=An,i.repeat.set(t,e),i.needsUpdate=!0,i}var Eh=()=>En("asf",()=>Ln(ce(256,256,n=>{n.fillStyle="#5B5F68",n.fillRect(0,0,256,256);let t=$t(7);for(let e=0;e<900;e++)n.fillStyle=t()<.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.07)",n.fillRect(t()*256,t()*256,2+t()*3,2+t()*3);n.strokeStyle="rgba(30,30,36,.18)",n.lineWidth=3,n.beginPath(),n.moveTo(30,200),n.bezierCurveTo(80,180,120,230,170,210),n.stroke()}))),Xn=(n="#D9D2C5",t="#CBC2B3")=>En("calc"+n,()=>Ln(ce(128,128,e=>{e.fillStyle=n,e.fillRect(0,0,128,128),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillRect(64,64,64,64),e.strokeStyle="rgba(0,0,0,.12)",e.lineWidth=2,e.strokeRect(1,1,126,126),e.beginPath(),e.moveTo(64,0),e.lineTo(64,128),e.moveTo(0,64),e.lineTo(128,64),e.stroke()}))),Mh=()=>En("ondas",()=>Ln(ce(256,256,n=>{n.fillStyle="#EFEAE0",n.fillRect(0,0,256,256),n.fillStyle="#3B3A3F";for(let e=0;e<2;e++){n.beginPath();for(let i=0;i<=256;i+=4)n.lineTo(i,64+e*128+Math.sin(i/256*6.283)*34);for(let i=256;i>=0;i-=4)n.lineTo(i,64+e*128+30+Math.sin(i/256*6.283)*34);n.fill()}let t=$t(3);n.fillStyle="rgba(0,0,0,.08)";for(let e=0;e<500;e++)n.fillRect(t()*256,t()*256,3,3)}))),Ci=(n="#78B85A")=>En("gr"+n,()=>Ln(ce(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let e=$t(11);for(let i=0;i<700;i++){let s=e();t.fillStyle=s<.5?"rgba(40,90,30,.16)":"rgba(220,255,160,.14)";let r=e()*256,o=e()*256;t.fillRect(r,o,2,5+e()*5)}for(let i=0;i<6;i++)t.fillStyle="rgba(40,90,30,.10)",t.beginPath(),t.ellipse(e()*256,e()*256,20+e()*30,12+e()*20,e()*3,0,7),t.fill()}))),xh=()=>En("terra",()=>Ln(ce(256,256,n=>{n.fillStyle="#C49468",n.fillRect(0,0,256,256);let t=$t(5);for(let e=0;e<800;e++)n.fillStyle=t()<.5?"rgba(90,50,20,.12)":"rgba(255,230,190,.12)",n.beginPath(),n.arc(t()*256,t()*256,1+t()*3,0,7),n.fill()}))),Fv=()=>En("para",()=>Ln(ce(256,256,n=>{n.fillStyle="#6E6A66",n.fillRect(0,0,256,256);let t=$t(9);for(let e=0;e<8;e++)for(let i=0;i<6;i++){let s=e%2?21:0,r=100+t()*40|0;n.fillStyle=`rgb(${r},${r-4},${r-8})`,n.beginPath(),n.roundRect(i*43+s-20,e*32+2,39,28,6),n.fill()}}))),Ah=(n="#C8643C")=>En("tel"+n,()=>Ln(ce(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);for(let e=0;e<8;e++){t.fillStyle="rgba(0,0,0,.16)",t.fillRect(0,e*32+26,256,6);for(let i=0;i<8;i++){let s=e%2?16:0;t.fillStyle="rgba(255,255,255,.10)",t.beginPath(),t.ellipse(i*32+s+16,e*32+10,9,6,0,0,7),t.fill(),t.fillStyle="rgba(0,0,0,.08)",t.fillRect(i*32+s,e*32,2,30)}}}))),bh=n=>En("reb"+n,()=>Ln(ce(128,128,t=>{t.fillStyle=n,t.fillRect(0,0,128,128);let e=$t(n.length*13);for(let i=0;i<160;i++)t.fillStyle=e()<.5?"rgba(0,0,0,.035)":"rgba(255,255,255,.05)",t.fillRect(e()*128,e()*128,3+e()*5,2+e()*4)}))),Sh=(n="#B5603E")=>En("tij"+n,()=>Ln(ce(256,256,t=>{t.fillStyle="#D8CBB8",t.fillRect(0,0,256,256);let e=$t(4);for(let i=0;i<16;i++)for(let s=0;s<5;s++){let r=i%2?26:0,o=e()*.2-.1;t.fillStyle=n,t.globalAlpha=.85+o,t.fillRect(s*52+r-26+2,i*16+2,48,12)}t.globalAlpha=1}))),Pv=(n="madeira",t="#C8935E",e="#B98450")=>En("piso"+n+t+e,()=>Ln(ce(256,256,i=>{if(n==="madeira")for(let s=0;s<8;s++){i.fillStyle=s%2?t:e,i.fillRect(0,s*32,256,32),i.fillStyle="rgba(0,0,0,.12)",i.fillRect(0,s*32,256,2),i.fillRect(s*97%256,s*32,2,32),i.fillStyle="rgba(80,40,10,.08)";for(let r=0;r<4;r++)i.fillRect((s*37+r*61)%256,s*32+10+r*3,40,2)}else if(n==="xadrez")for(let s=0;s<4;s++)for(let r=0;r<4;r++)i.fillStyle=(s+r)%2?t:e,i.fillRect(s*64,r*64,64,64);else if(n==="granilite"){i.fillStyle=t,i.fillRect(0,0,256,256);let s=$t(17);for(let r=0;r<900;r++)i.fillStyle=["#00000022","#FFFFFF33",e+"88"][r%3],i.fillRect(s()*256,s()*256,2+s()*4,2+s()*3)}else{i.fillStyle=t,i.fillRect(0,0,256,256),i.strokeStyle=e,i.lineWidth=4;for(let s=0;s<=4;s++)i.beginPath(),i.moveTo(s*64,0),i.lineTo(s*64,256),i.moveTo(0,s*64),i.lineTo(256,s*64),i.stroke();i.fillStyle="rgba(255,255,255,.08)",i.fillRect(8,8,40,20)}}))),Th=(n="#F4F1EA",t="#D9E8EE",e="#7FB2C8")=>En("azu"+n+t+e,()=>Ln(ce(128,128,i=>{i.fillStyle=n,i.fillRect(0,0,128,128),i.fillStyle=t,i.fillRect(64,0,64,64),i.fillRect(0,64,64,64),i.strokeStyle=e,i.lineWidth=3,i.beginPath(),i.arc(96,32,14,0,7),i.arc(32,96,14,0,7),i.stroke(),i.strokeStyle="rgba(0,0,0,.14)",i.lineWidth=2,i.strokeRect(0,0,64,64),i.strokeRect(64,64,64,64),i.strokeRect(64,0,64,64),i.strokeRect(0,64,64,64)}))),wh=()=>En("agua",()=>Ln(ce(256,256,n=>{let t=n.createLinearGradient(0,0,256,256);t.addColorStop(0,"#5DB4D8"),t.addColorStop(1,"#3F95C0"),n.fillStyle=t,n.fillRect(0,0,256,256);let e=$t(21);n.strokeStyle="rgba(255,255,255,.35)",n.lineWidth=3,n.lineCap="round";for(let i=0;i<40;i++){let s=e()*256,r=e()*256,o=10+e()*22;n.beginPath(),n.moveTo(s,r),n.quadraticCurveTo(s+o/2,r-4,s+o,r),n.stroke()}})));function Iv(n,t={}){return En("jan"+n+JSON.stringify(t),()=>Ln(ce(128,128,e=>{e.fillStyle=n,e.fillRect(0,0,128,128),e.fillStyle="rgba(0,0,0,.08)",e.fillRect(0,118,128,10),e.fillStyle=t.moldura||"#F4F1EA",e.fillRect(26,22,76,70),e.fillStyle=t.vidro||"#7FA9C9",e.fillRect(32,28,64,58),e.fillStyle=t.cortina||"#F3E3C0",e.fillRect(32,28,18,58),e.fillRect(78,28,18,58),e.fillStyle="rgba(255,255,255,.35)",e.beginPath(),e.moveTo(52,86),e.lineTo(70,28),e.lineTo(78,28),e.lineTo(60,86),e.fill(),e.fillStyle="rgba(0,0,0,.18)",e.fillRect(26,92,76,6)})))}function Rh(n=0,t="#F3E3C0"){return En("vid"+n+t,()=>ce(128,128,e=>{let i=e.createLinearGradient(0,0,0,128);i.addColorStop(0,"#A9D2EC"),i.addColorStop(1,"#5E86A8"),e.fillStyle=i,e.fillRect(0,0,128,128);let s=$t(n+1);e.fillStyle="rgba(40,40,60,.25)",e.fillRect(20+s()*40,70,40,58),e.fillStyle=t,e.fillRect(0,0,30,128),e.fillRect(98,0,30,128),e.fillStyle="rgba(0,0,0,.12)";for(let r=0;r<4;r++)e.fillRect(6+r*7,0,2,128),e.fillRect(104+r*7,0,2,128);e.fillStyle="rgba(255,255,255,.4)",e.beginPath(),e.moveTo(40,128),e.lineTo(80,0),e.lineTo(96,0),e.lineTo(56,128),e.fill()}))}function _e(n,t={}){let e=t.w||512,i=t.h||128;return En("let"+n+JSON.stringify(t),()=>ce(e,i,s=>{s.fillStyle=t.fundo||"#2E6FB8",s.beginPath(),s.roundRect(0,0,e,i,t.raio??14),s.fill(),t.borda&&(s.strokeStyle=t.borda,s.lineWidth=10,s.beginPath(),s.roundRect(5,5,e-10,i-10,t.raio??12),s.stroke()),s.fillStyle=t.cor||"#FFFFFF",s.textAlign="center",s.textBaseline="middle";let r=t.tam||i*.52;for(s.font=`${t.peso||900} ${r}px ${t.fonte||"Inter, Arial, sans-serif"}`;s.measureText(n).width>e*.9&&r>10;)r-=2,s.font=`${t.peso||900} ${r}px ${t.fonte||"Inter, Arial, sans-serif"}`;s.fillText(n,e/2,i/2+(t.sub?-i*.12:2)),t.sub&&(s.font=`700 ${i*.2}px Inter, Arial, sans-serif`,s.globalAlpha=.9,s.fillText(t.sub,e/2,i*.8),s.globalAlpha=1)}))}var Dv=(n,t)=>yt(n,t);function Fh(n,t,e=0,i=0){let s=((n+(e+i)*.05)%32+32)%32;return t==="x"?s<13?"verde":s<16?"amarelo":"vermelho":s<16?"vermelho":s<29?"verde":s<32?"amarelo":"vermelho"}var Yd="#F2C230",Pa="#F4F1EA";function Zd(n){let t=new q;t.name="ruas";let e=Se[0]-10/2,i=Se[Se.length-1]+10/2,s=Le[0]-10/2,r=Le[Le.length-1]+10/2,o=Eh(),a=yt(en(o,(i-e)/4,(r-s)/4));t.add(Ze(i-e,r-s,a,(e+i)/2,0,(s+r)/2));let l=(E,y,v)=>t.add(Ze(10,v-y,yt(en(o,10/4,(v-y)/4)),E,0,(y+v)/2));l(Se[5],-420,s),l(Se[5],r,160),l(Se[2],r,136);let c=Lv(),h=yt(en(Xn(),c,c)),u=Pe("#B9B3AA");for(let E=0;E<4;E++)for(let y=0;y<5;y++){let v=li(y),A=ci(E),S=new gt(new le(c,.15,c),[u,u,h,u,u,u]);S.position.set(v,.15/2,A),S.receiveShadow=!0,t.add(S),D(c+.06,.02,c+.06,"#E6E1D8",v,.15+.001,A,{shadow:!1}).scale.set(1,1,1)}let d=new q,p=(E,y,v,A,S)=>d.add(Ze(v,A,Pe(S),E,.012,y));for(let E of Le)for(let y=0;y<Se.length-1;y++){let v=Se[y]+10/2+6,A=Se[y+1]-10/2-6;for(let S=v;S<A-2;S+=5)p(S+1.25,E,2.5,.16,Yd)}for(let E of Se)for(let y=0;y<Le.length-1;y++){let v=Le[y]+10/2+6,A=Le[y+1]-10/2-6;for(let S=v;S<A-2;S+=5)p(E,S+1.25,.16,2.5,Yd)}for(let E of Se)for(let y of Le)for(let v of[-1,1]){if(y+v*(10/2+2)>s&&y+v*(10/2+2)<r)for(let A=-4;A<=4;A++)p(E+A*1,y+v*(10/2+2.2),.55,3,Pa);if(E+v*(10/2+2)>e&&E+v*(10/2+2)<i)for(let A=-4;A<=4;A++)p(E+v*(10/2+2.2),y+A*1,3,.55,Pa);p(E+v*(10/2+4.2),y+v*10/4,.35,10/2-.3,Pa),p(E-v*10/4,y+v*(10/2+4.2),10/2-.3,.35,Pa)}t.add(d),n.cena.add(hi(t));let g=new q;g.name="mobiliario";let _=new Vt({color:"#FFF6D8",emissive:"#FFD98A",emissiveIntensity:0});n.acender(_,2.2);let m=(E,y,v)=>{let A=new q;A.position.set(E,.15,y),A.rotation.y=v,A.add(J(.09,.12,7.4,"#8D949C",0,3.7,0,{out:.012,seg:10}));let S=D(.09,.09,1.8,"#8D949C",0,7.2,.9,{out:.012});S.rotation.x=-8*Ra,A.add(S);let T=Q(.42,.16,.8,"#6E747C",0,7.12,1.75,{out:.012});A.add(T);let b=new gt(new le(.32,.04,.62),_);b.position.set(0,7.03,1.75),A.add(b),g.add(A),n.colisores.push({x:E,z:y,w:.3,d:.3,h:7}),n.postes.push([E+Math.sin(v)*1.75,7,y+Math.cos(v)*1.75])},f=10/2+.45;for(let E=0;E<Se.length-1;E++)for(let y of Le)for(let v of[-1,1]){let A=Se[E]+10/2+3,S=Se[E+1]-10/2-3;if(!(y+v*f<Le[0]||y+v*f>Le[Le.length-1]))for(let T=0;T<2;T++){let b=A+(S-A)*(T?.78:.22)+(v>0?5.5:0);m(b,y+v*f,v>0?Math.PI:0)}}for(let E=0;E<Le.length-1;E++)for(let y of Se)for(let v of[-1,1]){let A=Le[E]+10/2+3,S=Le[E+1]-10/2-3;if(y+v*f<Se[0]||y+v*f>Se[Se.length-1])continue;let T=(A+S)/2+(v>0?5.5:-5.5);m(y+v*f,T,v>0?-Math.PI/2:Math.PI/2)}for(let E=0;E<4;E++)for(let y=0;y<5;y++){let v=Se[y]+10/2+.5,A=Le[E]+10/2+.5,S=new q;S.position.set(v,.15,A),S.add(J(.045,.05,2.9,"#5E646C",0,1.45,0,{out:.01,seg:8}));let T=new gt(new le(1.5,.32,.03),[Pe("#2E6FB8"),Pe("#2E6FB8"),Pe("#2E6FB8"),Pe("#2E6FB8"),yt(_e(_h[E],{w:512,h:110})),yt(_e(_h[E],{w:512,h:110}))]);T.position.set(.7,2.75,0),S.add(T);let b=new gt(new le(.03,.32,1.5),[yt(_e(vh[y],{w:512,h:110})),yt(_e(vh[y],{w:512,h:110})),Pe("#2E6FB8"),Pe("#2E6FB8"),Pe("#2E6FB8"),Pe("#2E6FB8")]);b.position.set(0,2.38,.7),S.add(b),g.add(S),n.colisores.push({x:v,z:A,w:.2,d:.2,h:3})}for(let E of Se)for(let y of Le)for(let v of[-1,1]){let A=D(.9,.02,.35,"#3A3C42",E+v*(10/2+5),.01,y+10/2-.25,{shadow:!1});g.add(A)}n.cena.add(hi(g));for(let E of Gd)Bv(n,E);for(let[E,y]of wa)Uv(n,E,y)}var Lv=()=>50;function Uv(n,t,e){let i={vermelho:"#E8443A",amarelo:"#F2C230",verde:"#3CCB6A"},s={x:{},z:{}};for(let a of["x","z"])for(let l in i)s[a][l]=new De({color:"#2A2C30"});let r=(a,l,c,h)=>{let u=new q;u.position.set(a,.15,l),u.rotation.y=c,u.add(J(.07,.09,3.2,"#3A3D44",0,1.6,0,{out:.012,seg:10}));let d=Q(.38,1.05,.3,"#2A2C30",0,3.4,.12,{out:.014});u.add(d),["vermelho","amarelo","verde"].forEach((p,g)=>{let _=new gt(new vn(.11,18),s[h][p]);_.position.set(0,3.72-g*.32,.275),u.add(_);let m=D(.28,.02,.12,"#2A2C30",0,3.84-g*.32,.33);u.add(m)}),n.cena.add(u),n.colisores.push({x:a,z:l,w:.25,d:.25,h:3.5})},o=10/2+.6;r(t-o,e-o,0,"z"),r(t+o,e+o,Math.PI,"z"),r(t+o,e-o,Math.PI/2,"x"),r(t-o,e+o,-Math.PI/2,"x"),n.vivos.push(a=>{for(let l of["x","z"]){let c=Fh(a,l,t,e);for(let h in i)s[l][h].color.set(h===c?i[h]:"#2A2C30")}})}function Bv(n,t){let e=new q;e.position.set(t.x,.15,t.z),e.rotation.y=t.ry;for(let o of[-1,1])e.add(D(.1,2.5,.1,"#3A3D44",o*1.8,1.25,-.6,{out:.01}));e.add(D(4,.08,1.6,"#3A3D44",0,2.55,-.1,{out:.01})),e.add(new gt(new le(3.9,.04,1.5),new Vt({color:"#BFDDF0",transparent:!0,opacity:.5})).translateY(2.52).translateZ(-.1)),e.add(new gt(new Wt(3.5,1.9),new Vt({color:"#BFDDF0",transparent:!0,opacity:.3,side:pe,depthWrite:!1})).translateY(1.25).translateZ(-.62));let i=new gt(new Wt(1.1,1.7),yt(_e("SORVETERIA GELATO",{fundo:"#F2546E",w:256,h:400,sub:"na pra\xE7a!"})));i.position.set(1.75,1.3,-.55),i.rotation.y=-Math.PI/2,e.add(i),e.add(D(.06,1.8,1.2,"#3A3D44",1.8,1.3,-.05));for(let o=0;o<3;o++)e.add(Q(.9,.06,.42,"#C9874E",-1.1+o*1,.48,-.3,{out:.008}));e.add(D(3,.06,.06,"#3A3D44",0,.42,-.3));for(let o of[-1.4,0,1.4])e.add(D(.06,.42,.06,"#3A3D44",o,.21,-.3));let s=new q;s.position.set(-2.4,0,.3),s.add(J(.04,.04,2.6,"#3A3D44",0,1.3,0,{seg:6})),s.add(new gt(new vn(.3,20),yt(_e("P",{fundo:"#2E6FB8",w:128,h:128,raio:64}))).translateY(2.5).translateZ(.02)),e.add(s),n.cena.add(e);let r=Math.abs(Math.sin(t.ry))>.5;n.colisores.push({x:t.x-.3*Math.sin(t.ry),z:t.z-.3*Math.cos(t.ry),w:r?.6:3.4,d:r?3.4:.6,h:.5});for(let o of[-1,1]){let a=t.x+o*1.8*Math.cos(t.ry)-.6*Math.sin(t.ry),l=t.z-o*1.8*Math.sin(t.ry)-.6*Math.cos(t.ry);n.colisores.push({x:a,z:l,w:.15,d:.15,h:2.5})}n.pontos[t.nome]={x:t.x+Math.sin(t.ry)*.6,z:t.z+Math.cos(t.ry)*.6,y:.15,ry:t.ry}}var Ph=new Map,Ia=(n,t=1)=>{let e=n+"_"+t;return Ph.has(e)||Ph.set(e,new aa(n,t)),Ph.get(e)};function qn(n="comum",t=1,e=0){let i=new q,s=$t(e*31+7);if(n==="palmeira"){let r=0,o=7;for(let a=0;a<o;a++){let l=J(.16-a*.008,.18-a*.008,1.05,"#A88A62",Math.sin(a*.35)*.25,r+.52,0,{out:.01,seg:10});l.rotation.z=Math.cos(a*.4)*.05,i.add(l),r+=1}for(let a=0;a<9;a++){let l=new q;l.position.set(.2,r,0),l.rotation.y=a/9*Math.PI*2;let c=At(new je(.5,3.2,4),a%2?"#4E9A48":"#5FAE52",{out:.012});c.scale.set(1,1,.18),c.rotation.z=-Math.PI/2-.5,c.position.set(1.5,-.35,0),l.add(c),i.add(l)}i.add(ve(.32,"#8A6A3E",.2,r-.1,0,{seg:10}))}else if(n==="pinheiro"){i.add(J(.16,.24,2.2,"#6E4A2E",0,1.1,0,{out:.012,seg:10}));for(let r=0;r<4;r++)i.add(At(new je(2.2-r*.45,2.4,9),r%2?"#2F7A4A":"#3A8A55",{out:.016,pos:[0,2.4+r*1.35,0]}))}else{let r={ipeRoxo:["#B566C9","#9A4FB3","#CF8ADE"],ipeAmarelo:["#F2C230","#E2A91E","#F8D860"],quaresmeira:["#8E5BC4","#A877D6","#7646AE"],mangueira:["#3E8A40","#4E9C4C","#2F7434"],comum:["#5AA84E","#4A9644","#6CB85C"]}[n]||["#5AA84E","#4A9644","#6CB85C"],o=n==="mangueira"?1.15:1,a=(2.3+s()*.6)*o,l=J(.17,.27,a,"#7A5233",0,a/2,0,{out:.012,seg:10});i.add(l);for(let h of[0,2.1,4.2]){let u=J(.07,.1,1.3,"#7A5233",Math.cos(h)*.35,a+.25,Math.sin(h)*.35,{seg:8});u.rotation.set(Math.sin(h)*.6,0,-Math.cos(h)*.6),i.add(u)}let c=n==="mangueira"?6:5;for(let h=0;h<c;h++){let u=h/c*6.283+s(),d=1.1+s()*.5,p=(1.05+s()*.45)*(n==="mangueira"?1.2:1);i.add(At(Ia(p,1),r[h%3],{out:.02,pos:[Math.cos(u)*d*.8,a+.9+s()*.9,Math.sin(u)*d*.8]}))}if(i.add(At(Ia(1.45*(n==="mangueira"?1.25:1),1),r[0],{out:.02,pos:[0,a+1.8,0]})),n.startsWith("ipe")||n==="quaresmeira"){let h=new gt(new vn(2.1,20),new Vt({color:r[2],transparent:!0,opacity:.55,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.02,i.add(h)}}return i.scale.setScalar(t),i}function $d(n=1.2,t=.9,e=.9,i="#4E9A48",s=0){let r=new q,o=$t(s+3),a=Math.max(2,Math.round(n/.6));for(let l=0;l<a;l++)r.add(At(Ia(.5,1),l%2?i:"#5FAE52",{out:.014,pos:[-n/2+n*(l+.5)/a,t*.55,(o()-.5)*e*.3]}));return r.children.forEach(l=>l.scale.set(n/a*1.5,t*1.25,e*1.1)),r}function Da(n,t,e=0){let i=new q,s=$t(e+9);i.add(D(n,.25,t,"#8E5A3A",0,.125,0)),i.add(Ze(n-.1,t-.1,Pe("#5A3A24"),0,.26,0));let r=["#F2546E","#F2C230","#FFFFFF","#B566C9","#F08A2C"];for(let o=0;o<Math.round(n*t*4);o++){let a=(s()-.5)*(n-.3),l=(s()-.5)*(t-.3);i.add(J(.012,.012,.22,"#3E8A40",a,.37,l,{shadow:!1,seg:5})),i.add(ve(.07,Ht(s,r),a,.5,l,{seg:8,shadow:!1}))}return i}function Jd(n){let t=new q;t.name="paisagem";let e=yt(en(Ci(),300,300)),i=new Sn;i.moveTo(-700,-700),i.lineTo(700,-700),i.lineTo(700,700),i.lineTo(-700,700),i.lineTo(-700,-700);let s=new vs;s.absellipse(0,-223,206,96,0,Math.PI*2,!0),i.holes.push(s);let r=new Zi(i,48),o=r.attributes.uv;for(let _=0;_<o.count;_++)o.setXY(_,o.getX(_)/3,o.getY(_)/3);let a=new gt(r,yt(Ci()));a.material.map.repeat.set(1,1),a.rotation.x=-Math.PI/2,a.position.y=-.03,a.receiveShadow=!0,t.add(a);let l=$t(77),c=(_,m,f,E,y,v=12)=>{let A=At(new jt(1,v,8,0,Math.PI*2,0,Math.PI/2),y,{shadow:!1});return A.scale.set(f,E,f*(.7+l()*.5)),A.position.set(_,-1,m),A.rotation.y=l()*3,t.add(A),A};for(let _=0;_<34;_++){let m=_/34*Math.PI*2,f=360+l()*90,E=80+l()*60,y=40+l()*45,v=Math.abs(m-Math.PI*1.5)<.45;c(Math.cos(m)*f,Math.sin(m)*f,E,v?y*.35:y,_%2?"#6FA866":"#7DB572")}for(let _=0;_<26;_++){let m=_/26*Math.PI*2+.1,f=620+l()*120;c(Math.cos(m)*f,Math.sin(m)*f,170+l()*90,110+l()*90,_%2?"#8DB3C9":"#9DBFD2")}let h=new q;h.position.set(60,0,-540),c(60,-540,210,120,"#5E9A5C",16);let u=At(new or(1,1),"#9E9A94",{out:.004});u.scale.set(85,120,65),u.position.set(0,135,10),h.add(u);let d=At(new or(1,1),"#8E8A84",{out:.004});d.scale.set(44,70,40),d.position.set(-55,100,0),h.add(d);let p=At(new or(1,1),"#B4AEA6");p.scale.set(30,50,30),p.position.set(28,150,40),h.add(p),t.add(h);for(let _=0;_<3;_++){let m=J(.6,1.2,40,_?"#E8443A":"#F4F1EA",-260+_*14,95,-420,{seg:6});t.add(m)}let g=new q;for(let _=0;_<140;_++){let m=l()*Math.PI*2,f=200+l()*140,E=Math.cos(m)*f*1.1,y=Math.sin(m)*f;if(y>120&&Math.abs(E)<240||Math.abs(E-150)<14)continue;let v=qn(Ht(l,["comum","comum","mangueira","pinheiro","ipeAmarelo","ipeRoxo"]),1.4+l()*.8,_);v.position.set(E,0,y),g.add(v)}t.add(g),n.cena.add(hi(t))}function Kd(n){let t=new q;t.name="lago";let e=127;t.add(D(330,.15,9,"#D9D2C5",0,.075,e+4.5)),t.add(Ze(330,9,yt(en(n.tex.ondas(),165,4.5)),0,.152,e+4.5)),t.add(D(330,.5,.3,"#B9B3AA",0,.25,e+9));let i=new Sn;i.absellipse(0,0,200,90,0,Math.PI*2);let s=yt(en(wh(),20,9));s.transparent=!1;let r=new gt(new Zi(i,64),s);r.rotation.x=-Math.PI/2,r.position.set(0,-.3,e+96),r.receiveShadow=!0,r.userData.vivo=!0,t.add(r);let o=new gt(new Zi((()=>{let l=new Sn;return l.absellipse(0,0,206,96,0,Math.PI*2),l})(),64),Pe("#D8C49A"));o.rotation.x=-Math.PI/2,o.position.set(0,-.7,e+96),t.add(o),n.vivos.push(l=>{s.map.offset.set(l*.01,Math.sin(l*.3)*.02)});let a=new q;a.position.set(-40,0,e+9),a.add(D(4,.2,22,"#9A6A3E",0,.1,11));for(let l=0;l<6;l++)a.add(J(.12,.12,1.4,"#7A5233",-1.9,-.4,1+l*4,{seg:8})),a.add(J(.12,.12,1.4,"#7A5233",1.9,-.4,1+l*4,{seg:8}));a.add(D(.08,.08,22,"#7A5233",-1.95,1.05,11)),a.add(D(.08,.08,22,"#7A5233",1.95,1.05,11));for(let l=0;l<=11;l++)a.add(D(.06,1,.06,"#7A5233",-1.95,.6,l*2)),a.add(D(.06,1,.06,"#7A5233",1.95,.6,l*2));t.add(a),n.colisores.push({x:-40-2.1,z:e+20,w:.2,d:22,h:1.1},{x:-40+2.1,z:e+20,w:.2,d:22,h:1.1}),n.pontos["lago.deck"]={x:-40,z:e+28,y:.2,ry:0};for(let[l,c,h]of[[30,"#E2443A","COCO GELADO"],[75,"#2E9C6A","PASTEL"],[-95,"#F08A2C","MILHO"]]){let u=new q;u.position.set(l,.15,e+4),u.add(Q(3.2,1.1,2,"#F4F1EA",0,.55,0,{out:.014})),u.add(D(3.3,.08,2.1,"#9A6A3E",0,1.14,0));for(let[g,_]of[[-1.5,-.9],[1.5,-.9],[-1.5,.9],[1.5,.9]])u.add(J(.05,.05,1.5,"#7A5233",g,1.9,_,{seg:6}));let d=At(new je(2.6,1.2,4),c,{out:.016,pos:[0,3.2,0],rot:[0,Math.PI/4,0]});d.scale.set(1,1,.8),u.add(d);let p=new gt(new Wt(2.6,.5),yt(n.tex.letreiroTex(h,{fundo:"#F4F1EA",cor:c})));p.position.set(0,2.35,1.1),u.add(p);for(let g=0;g<2;g++){let _=new q;_.position.set(-3+g*6,0,3),_.add(J(.5,.5,.05,"#F4F1EA",0,.75,0)),_.add(J(.04,.04,.75,"#C9C2B6",0,.37,0,{seg:6}));for(let m of[0,2.1,4.2])_.add(J(.22,.22,.45,"#E2443A",Math.cos(m)*.8,.22,Math.sin(m)*.8,{seg:10}));u.add(_),n.colisores.push({x:l-3+g*6,z:e+7,w:1.1,d:1.1,h:.8})}t.add(u),n.colisores.push({x:l,z:e+4,w:3.3,d:2.2,h:1.2})}for(let l=0;l<11;l++){let c=-150+l*30;Math.abs(c+40)<6||(t.add(qn(l%3?"palmeira":"ipeRoxo",1,300+l).translateX(c).translateZ(e+1.2).translateY(.15)),n.colisores.push({x:c,z:e+1.2,w:.5,d:.5,h:3}))}n.cena.add(hi(t));for(let l=0;l<4;l++){let c=new q,h=["#F2F2F0","#F2C230","#5DB4D8","#F2546E"][l],u=At(new jt(1,16,10),h,{out:.014});u.scale.set(1.3,.45,.8),c.add(u);let d=J(.18,.22,1.3,h,.95,.75,0,{out:.014});d.rotation.z=.25,c.add(d),c.add(ve(.36,h,1.15,1.45,0,{out:.014})),c.add(At(new je(.12,.4,8),"#F08A2C",{pos:[1.55,1.42,0],rot:[0,0,-Math.PI/2]})),c.add(ve(.06,"#1B1420",1.35,1.6,.26)),c.add(ve(.06,"#1B1420",1.35,1.6,-.26)),c.add(D(1,.5,1.1,"#F4F1EA",-.3,.55,0)),c.add(D(.08,.5,1.1,h,-.8,.95,0)),n.cena.add(c);let p=-20+l*35,g=e+70+l%2*22,_=10+l*3;n.vivos.push(m=>{let f=m*.03*(l%2?1:-1)+l;c.position.set(p+Math.cos(f)*_,-.25+Math.sin(m*1.3+l)*.05,g+Math.sin(f)*_*.6),c.rotation.y=-f+(l%2?-Math.PI/2:Math.PI/2),c.rotation.z=Math.sin(m*1.1+l)*.03})}}function Qd(n){let t=$t(55),e=new q,i=new Vt({color:"#FFFFFF",gradientMap:Jr(),emissive:"#FFFFFF",emissiveIntensity:.25,fog:!1});n.matNuvem=i;for(let s=0;s<22;s++){let r=new q,o=3+(t()*3|0);for(let c=0;c<o;c++){let h=new gt(Ia(1,2),i);h.scale.set(18+t()*10,10+t()*6,14+t()*6),h.position.set(c*18-o*9,t()*6,t()*8),r.add(h)}let a=t()*Math.PI*2,l=400+t()*500;r.position.set(Math.cos(a)*l,140+t()*80,Math.sin(a)*l),r.userData.base=r.position.clone(),e.add(r)}n.cena.add(e),n.vivos.push(s=>{for(let r of e.children)r.position.x=r.userData.base.x+(s*1.5+2e3)%4e3*.05})}var vr=n=>new kt(n),La=[[0,"#0B1430","#1E2C55","#7F93D6",.35,"#4A5B92","#2A2A3A",.55],[5,"#1A2350","#5A4E7A","#9A8AC8",.4,"#5A6292","#3A3446",.6],[6.3,"#5E8CC8","#F4B48A","#FFB078",1.4,"#C8C8E8","#8E7C70",1],[8,"#6FB4EC","#CBE8F7","#FFF0D8",2.1,"#EAF2FF","#C9BCAE",1.4],[12,"#5FAEEB","#D2ECF8","#FFF6E8",2.4,"#EAF2FF","#C9BCAE",1.5],[16,"#68AEE6","#DCEBF2","#FFE8C8",2.2,"#EAF0FF","#C9BCAE",1.4],[17.6,"#7A9CD6","#F7B27A","#FFAE66",1.7,"#E0C8D8","#A08070",1.15],[18.4,"#4A5C9E","#E8806A","#F2865A",1,"#9A88B8","#6A5262",.85],[19.3,"#1C2556","#4A3E6E","#8A86C8",.45,"#5A6292","#3A3446",.62],[24,"#0B1430","#1E2C55","#7F93D6",.35,"#4A5B92","#2A2A3A",.55]];function Nv(n){n=(n%24+24)%24;let t=1;for(;t<La.length-1&&La[t][0]<n;)t++;let e=La[t-1],i=La[t],s=ai((n-e[0])/(i[0]-e[0])),r=o=>vr(e[o]).lerp(vr(i[o]),s);return{topo:r(1),hor:r(2),sol:r(3),si:mr(e[4],i[4],s),hs:r(5),hc:r(6),hi:mr(e[7],i[7],s)}}var Ov=n=>(n=(n%24+24)%24,n<12?1-uh(5.2,6.6,n):uh(17.8,19.2,n));function jd(n,t){let e=n.cena,i={topo:{value:vr("#5FAEEB")},hor:{value:vr("#D2ECF8")},sol:{value:new O(0,1,0)},corSol:{value:vr("#FFF6E8")},noite:{value:0}},s=new gt(new jt(1800,32,16),new Oe({uniforms:i,side:Ke,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 topo,hor,corSol,sol;uniform float noite;
      float h(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
      void main(){float y=max(vP.y,0.);vec3 c=mix(hor,topo,pow(y,.55));if(vP.y<0.)c=hor*.9;
        float d=max(dot(vP,normalize(sol)),0.);c+=corSol*(pow(d,900.)*2.5+pow(d,12.)*.25)*(1.-noite*.7);
        vec3 q=floor(vP*260.);float s=step(.997,h(q))*noite*smoothstep(.05,.3,y);c+=vec3(s);
        gl_FragColor=vec4(pow(c,vec3(1./2.2))*0.+c,1.);}`}));s.renderOrder=-10,s.frustumCulled=!1,e.add(s),n.ceu=s,e.background=null;let r=new qr("#EAF2FF","#B9A898",1.5);e.add(r);let o=new ua("#FFF4E6",0);e.add(o),n.luzDentro=(u=1)=>{n._dentro=u,a()};let a=()=>{let u=n.n||0,d=n._dentro||0;o.intensity=d*(.75+u*1.1),o.color.set(u>.5?"#FFE2B8":"#FFF4E6")},l=new Yr("#FFF6E8",2.4);l.castShadow=!0,e.add(l),e.add(l.target);let c=t.sombra||45;l.shadow.mapSize.set(4096,4096),Object.assign(l.shadow.camera,{left:-c,right:c,top:c,bottom:-c,near:1,far:600}),l.shadow.bias=-5e-4,l.shadow.normalBias=.03,l.shadow.radius=3,e.fog=new Qo("#D2ECF8",t.neblina?.[0]??260,t.neblina?.[1]??1500);let h=[];for(let u=0;u<6;u++){let d=new ha("#FFD98A",0,22,1.6);e.add(d),h.push(d)}n.luz={hemi:r,sol:l,pts:h},n.hora=u=>{n.h=u;let d=Nv(u),p=Ov(u);n.n=p,i.topo.value.copy(d.topo),i.hor.value.copy(d.hor),i.corSol.value.copy(d.sol),i.noite.value=p;let g=(u-6)/12*Math.PI,_=Math.sin(g),m=new O(Math.cos(g)*.9,Math.max(_,.12)*1.1,.38).normalize();i.sol.value.copy(m.y>0&&_>-.1?m:new O(-.3,.6,.3)),r.color.copy(d.hs),r.groundColor.copy(d.hc),r.intensity=d.hi,l.color.copy(d.sol),l.intensity=d.si,n._solDir=_>-.1?m:new O(-.35,.8,.4).normalize(),e.fog.color.copy(d.hor);for(let[f,E]of n._acesos)f.emissiveIntensity=E*p;a();for(let f of n._noiteFn)f(p,u);n.matNuvem&&(n.matNuvem.color.copy(d.hor).lerp(vr("#FFFFFF"),.55-p*.4),n.matNuvem.emissive.copy(d.hor),n.matNuvem.emissiveIntensity=.3)},n.focar=(u,d)=>{let p=n._solDir||new O(.5,.8,-.3);l.target.position.set(u,0,d),l.position.set(u+p.x*200,p.y*200,d+p.z*200);let g=n.postes.map(_=>[_,(_[0]-u)**2+(_[2]-d)**2]).sort((_,m)=>_[1]-m[1]);h.forEach((_,m)=>{let f=g[m]?.[0];f&&(_.position.set(f[0],f[1]-.3,f[2]),_.intensity=(n.n||0)*40)})}}var Ih=new Map;function Un(n){return Ih.has(n)||Ih.set(n,yt(bh(n))),Ih.get(n)}function Kt(n,t,e,i,s,r={}){let o=r.h??2.8,a=r.t??.14,l=r.y??0,c=(r.vaos||[]).slice().sort((m,f)=>m.a-f.a),h=Math.abs(s-e)<1e-6,u=h?i-t:s-e,d=Math.sign(u)||1,p=Math.abs(u),g=(m,f,E,y)=>{if(f-m<.005||y-E<.005)return;let v=(m+f)/2*d,A=f-m,S=y-E,T=l+(E+y)/2,b=h?t+v:t,x=h?e:e+v;for(let[M,w]of[[-1,r.corA],[1,r.corB]]){if(!w)continue;let F=M*a/4,P=h?Ca(new le(A,S,a/2),A,S,a/2,1):Ca(new le(a/2,S,A),a/2,S,A,1),C=At(P,Un(w),{pos:[h?b:b+F,T,h?x+F:x]});C.castShadow=r.sombra??!0,n.add(C)}if(r.rodape&&E<.01)for(let[M,w]of[[-1,r.corA],[1,r.corB]]){if(!w||w===r.semRodape)continue;let F=M*(a/2+.006);n.add(D(h?A:.012,.08,h?.012:A,r.rodape,h?b:b+F,l+.04,h?x+F:x,{shadow:!1}))}E<1.2&&!r.semCol&&n.col(b,x,h?A:a,h?a:A,{h:y})},_=0;for(let m of c)g(_,m.a,0,o),g(m.a,m.b,0,m.y0??0),g(m.a,m.b,m.y1??2.1,o),_=m.b;g(_,p,0,o)}function tf(n,t,e,i,s,r,o,a,l="#F4F1EA"){let h=a+.04,u=d=>n.add(D(i?.07:h,o-r,i?h:.07,l,i?t+d*(s/2+.07/2-.02):t,(r+o)/2,i?e:e+d*(s/2+.07/2-.02),{shadow:!1}));u(-1),u(1),n.add(D(i?s+.07*2:h,.07,i?h:s+.07*2,l,t,o+.07/2-.02,e,{shadow:!1})),r>.05&&n.add(D(i?s+.07*2:h+.06,.05,i?h+.06:s+.07*2,l,t,r-.02,e,{shadow:!1}))}function ze(n,t,e,i,s,r=.82,o={}){let{C:a}={C:n.cidade},l=o.h??2.1,c=o.t??.14,h=o.dobra??-1,u=o.abre??1,d=o.cor||"#B87A4A";tf(n,e,i,s,r,0,l,c,o.batente);let p=new q;p.userData.vivo=!0;let g=s?e+h*r/2:e,_=s?i:i+h*r/2;p.position.set(g,0,_);let m=new q;p.add(m);let f=r-.02,E=.045,y=o.tipo||"madeira",v=(b,x,M,w)=>Q(s?b:E,x,s?E:b,d,s?M:0,w,s?0:M,{out:.01,r:.012}),A=-h*f/2;if(y==="vidro"){m.add(v(f,.25,A,.125)),m.add(v(f,.15,A,l-.08));for(let x of[-1,1])m.add(v(.08,l,A+x*(f/2-.04),l/2));let b=new gt(new Wt(f-.16,l-.4),new Vt({color:"#CFE6F2",transparent:!0,opacity:.35,depthWrite:!1,side:pe}));b.position.set(s?A:0,l/2+.03,s?0:A),s||(b.rotation.y=Math.PI/2),m.add(b)}else{m.add(v(f,l-.01,A,l/2));for(let[b,x]of[[.25,.95],[1.15,1.85]])for(let M of[-1,1]){let w=D(s?f-.2:.012,x-b,s?.012:f-.2,new kt(d).multiplyScalar(.88).getStyle(),s?A:M*E/2,(b+x)/2,s?M*E/2:A,{shadow:!1});m.add(w)}}for(let b of[-1,1]){let x=new q;x.position.set(s?A*2+h*.08:b*.04,1.02,s?b*.04:A*2+h*.08),x.add(J(.025,.025,.04,"#C9CED6",0,0,0,{rot:s?[Math.PI/2,0,0]:[0,0,Math.PI/2],seg:8})),x.add(D(s?.12:.02,.02,s?.02:.12,"#C9CED6",s?-h*-.05:0,0,s?0:-h*-.05)),m.add(x)}n.add(p);let S=s?-h*u:h*u,T={nome:t,aberta:o.aberta??0,auto:o.auto??!0,alvo:null,piv:p,max:(o.max??95)*Ra,abrir(b){T.aberta=b,p.rotation.y=S*T.max*Math.max(0,Math.min(1,b))},mundo:ei(n.L,e,i),lote:n.L.nome};return T.abrir(T.aberta),a.portas[(n.L.nome?n.L.nome+".":"")+t]=T,T}function nn(n,t,e,i,s,r,o,a={}){let l=a.t??.14;tf(n,t,e,i,s,r,o,l,a.moldura||"#F4F1EA");let c=o-r,h=(r+o)/2,u=n.nivel!=="perto",d=u?yt(Rh(a.seed||0,a.cortina||"#F3E3C0")):new Vt({color:"#BFDDF0",transparent:!0,opacity:.28,depthWrite:!1,side:pe}),p=new gt(new Wt(s,c),d);if(p.position.set(t,h,e),i||(p.rotation.y=Math.PI/2),a.virar&&(p.rotation.y+=Math.PI),p.castShadow=!1,n.add(p),u&&!a.duplo){let g=p.clone();g.rotation.y+=Math.PI,n.add(g)}if(n.add(D(i?.04:.05,c,i?.05:.04,a.moldura||"#F4F1EA",t,h,e,{shadow:!1})),a.grade)for(let g=1;g<Math.round(s/.14);g++){let _=-s/2+g*s/Math.round(s/.14);n.add(D(.02,c,.02,a.grade,i?t+_:t+(a.fora??1)*(l/2+.05),h,i?e+(a.fora??1)*(l/2+.05):e+_,{shadow:!1}))}if(!u&&a.cortina!==!1){let g=-(a.fora??1)*(l/2+.08),_=a.cortina||"#F3E3C0";for(let m of[-1,1]){let f=s*.28,E=Q(i?f:.03,c+.3,i?.03:f,_,i?t+m*(s/2-f/2+.12):t+g,h+.08,i?e+g:e+m*(s/2-f/2+.12),{r:.012,out:.008});n.add(E)}n.add(D(i?s+.5:.03,.03,i?.03:s+.5,"#8D949C",t+(i?0:g),o+.22,e+(i?g:0),{shadow:!1}))}}function Ua(n,t,e,i,s,r,o={}){let a=o.beiral??.6,l=i+a*2,c=s+a*2,h=o.sobe??Math.min(l,c)*.28,u=o.duas,d=new He,p=[],g=[],_=l>=c,m=l/2,f=c/2,E=u?_?m:f:Math.abs(m-f),y=(T,b,x)=>p.push(...T,...b,...x),v=(T,b,x,M)=>{y(T,b,x),y(T,x,M)};if(_){let T=[-E,h,0],b=[E,h,0];v([-m,0,f],[m,0,f],b,T),v([m,0,-f],[-m,0,-f],T,b),u||(y([m,0,f],[m,0,-f],b),y([-m,0,-f],[-m,0,f],T))}else{let T=[0,h,-E],b=[0,h,E];v([m,0,f],[m,0,-f],T,b),v([-m,0,-f],[-m,0,f],b,T),u||(y([-m,0,f],[m,0,f],b),y([m,0,-f],[-m,0,-f],T))}d.setAttribute("position",new oe(p,3));let A=[];for(let T=0;T<p.length;T+=9){let b=new O(p[T],p[T+1],p[T+2]),x=new O(p[T+3],p[T+4],p[T+5]),M=new O(p[T+6],p[T+7],p[T+8]),w=new O().subVectors(x,b).cross(new O().subVectors(M,b)),F=w.x,P=w.z,C=Math.hypot(F,P)||1,B=[F/C,P/C],U=[-B[1],B[0]];for(let z of[b,x,M])A.push((z.x*U[0]+z.z*U[1])/2,(z.y-(z.x*B[0]+z.z*B[1]))/2)}d.setAttribute("uv",new oe(A,2)),d.computeVertexNormals();let S=At(d,yt(Ah(o.cor||"#C8643C")),{pos:[t,r,e],out:.02});if(S.material.side=pe,S.castShadow=o.sombra??!0,n.add(S),n.add(D(l,.06,c,o.forro||"#F4F1EA",t,r-.03,e,{shadow:!1})),u){let T=new Sn,b=_?c:l;T.moveTo(-b/2+a,0),T.lineTo(b/2-a,0),T.lineTo(0,h*(b/2-a)/(b/2)),T.lineTo(-b/2+a,0);for(let x of[-1,1]){let M=At(new Zi(T),Un(o.parede||"#E8DCC8"),{});M.material.side=pe,_?(M.rotation.y=Math.PI/2,M.position.set(t+x*(i/2),r,e)):M.position.set(t,r,e+x*(s/2)),n.add(M)}}return S}function Ki(n,t,e,i,s,r,o,a={}){let l=a.alt??.8,c=.18;n.add(D(i+.02,.14,s+.02,"#C9C2B6",t,r+.07,e,{shadow:!0}));for(let[h,u,d,p]of[[0,s/2,i+c,c],[0,-s/2,i+c,c],[i/2,0,c,s],[-i/2,0,c,s]])n.add(Wn(d,l,p,Un(o),t+h,r+l/2,e+u,1,{out:.016}));n.add(D(i+c+.08,.06,.06+c,"#F4F1EA",t,r+l+.03,e+s/2,{shadow:!1})),n.add(D(1.4,.9,1.2,"#3E7CC8",t+i/4,r+.55,e-s/4,{out:.014}))}var Dh=new Map;function Yn(n,t,e,i,s,r,o="#F7F4EE"){Dh.has(o)||Dh.set(o,new Vt({color:o,emissive:o,emissiveIntensity:.62}));let a=new gt(new Wt(i,s),Dh.get(o));return a.rotation.x=Math.PI/2,a.position.set(t,r,e),a.castShadow=!1,a.receiveShadow=!1,n.add(a),a}function Zn(n,t,e,i,s,r,o=.01,a=1){let l=r.map?r.map.clone():null,c=r;l&&(l.wrapS=l.wrapT=An,l.repeat.set(i/a,s/a),l.needsUpdate=!0,c=yt(l));let h=Ze(i,s,c,t,o,e);return n.add(h),h}var ae=(n,...t)=>{let e=new q;for(let i of t)e.add(i);return e.userData.pe=n,e};var ef=["#3E7CC8","#C84E4E","#5AA84E","#8E6CC4","#D98A3A","#4FB8A0","#7A8696","#B5603E"];function Ba(n=2.1,t="#3E7CC8"){let e=ae([n,.9]),i=new kt(t).multiplyScalar(.82).getStyle();e.add(Q(n,.42,.86,t,0,.21+.08,0,{out:.014,r:.08})),e.add(Q(n,.5,.22,i,0,.62,-.32,{out:.014,r:.08}));for(let r of[-1,1])e.add(Q(.2,.58,.86,i,r*(n/2-.1),.37,0,{out:.014,r:.07}));let s=Math.max(2,Math.round(n/.8));for(let r=0;r<s;r++)e.add(Q((n-.44)/s-.03,.14,.62,t,-n/2+.22+(n-.44)/s*(r+.5),.56,.06,{out:.012,r:.06}));for(let r of[-1,1])for(let o of[-1,1])e.add(J(.03,.02,.08,"#3A2A20",r*(n/2-.1),.04,o*.34,{seg:6}));return e.add(Q(.4,.36,.12,"#F2C230",-n/2+.45,.72,-.17,{out:.012,r:.06,rot:[-.25,.2,0]})),e}function nf(n="#C84E4E"){let t=Ba(.95,n);return t.userData.pe=[.95,.9],t}function sf(n=1.1,t=.6,e="#9A6236"){let i=ae([n,t],Q(n,.06,t,e,0,.42,0,{out:.012}));for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.add(D(.05,.4,.05,e,s*(n/2-.07),.2,r*(t/2-.07)));return i.add(D(n-.12,.03,t-.12,e,0,.12,0)),i.add(Q(.24,.03,.17,"#E2443A",.2,.46,.05)),i.add(J(.08,.06,.1,"#F4F1EA",-.25,.5,0,{out:.01})),i}function Na(n=2,t=1.4,e="#C84E4E",i="#F2C230"){let s=ce(256,Math.round(256*t/n),(a,l,c)=>{a.fillStyle=e,a.fillRect(0,0,l,c),a.strokeStyle=i,a.lineWidth=10,a.strokeRect(14,14,l-28,c-28),a.lineWidth=4,a.strokeRect(32,32,l-64,c-64),a.fillStyle=i,a.beginPath(),a.ellipse(l/2,c/2,l*.16,c*.2,0,0,7),a.fill()}),r=Ze(n,t,yt(s),0,.012,0);return r.castShadow=!1,ae([0,0],r)}function _r(n=1.6,t="#7A5233"){let e=ae([n,.45]);e.add(Q(n,.5,.42,t,0,.25,0,{out:.012}));for(let s of[-1,1])e.add(D(n/2-.06,.36,.01,"#5E3E26",s*n/4,.25,.215));e.add(Q(1.2,.7,.06,"#1B1A20",0,.5+.45,-.05,{out:.012})),e.add(D(.3,.03,.18,"#2A2A30",0,.515,-.05)),e.add(D(.06,.1,.04,"#2A2A30",0,.56,-.05));let i=Hv();return i.position.set(0,.95,-.016),e.add(i),e.userData.tela=i,e.add(Q(.3,.06,.15,"#2A2A30",.45,.53,.05)),e}var jr=null;function Hv(n=1.12,t=.62){jr||(jr=ce(512,1024,s=>{[["#6FB4EC","#5AA84E"],["#F2994A","#3E2A60"],["#2E6FB8","#E8DCC8"],["#58B26A","#F2C230"]].forEach(([o,a],l)=>{let c=l*256;s.fillStyle=o,s.fillRect(0,c,512,256),s.fillStyle=a,s.fillRect(0,c+170,512,86),s.fillStyle="#F4D2B0",s.beginPath(),s.arc(180+l*40,c+120,44,0,7),s.fill(),s.fillStyle="#2A1E1A",s.beginPath(),s.arc(180+l*40,c+100,44,Math.PI,0),s.fill(),s.fillStyle=["#E2443A","#2E9C6A","#F2C230","#3E7CC8"][l],s.fillRect(120+l*40,c+160,120,96),s.fillStyle="rgba(0,0,0,.55)",s.fillRect(0,c+214,512,42),s.fillStyle="#FFF",s.font="700 26px Inter, Arial",s.fillText(["JORNAL DA SERRA","NOVELA DAS NOVE","PREVIS\xC3O DO TEMPO","FUTEBOL AO VIVO"][l],16,c+244)})}),jr.wrapT=An,jr.repeat.set(1,.25));let e=jr.clone();e.needsUpdate=!0,e.repeat.set(1,.25);let i=new gt(new Wt(n,t),new De({map:e,toneMapped:!1}));return i.userData.vivo=!0,i.userData.tv=!0,i}function yr(n,t,e=0){let i=Math.floor((t+e*3.1)/6.5)%4;n.material.map.offset.set(Math.sin(t*.8+e)*.01,.75-i*.25)}function Uh(n=1.2,t=1.8,e="#9A6236",i=0){let s=ae([n,.35]),r=$t(i+5);for(let a of[-1,1])s.add(D(.04,t,.34,e,a*(n/2-.02),t/2,0,{out:.01}));s.add(D(n,.04,.34,e,0,t,0,{out:.01})),s.add(D(n,t,.02,new kt(e).multiplyScalar(.8).getStyle(),0,t/2,-.16));let o=Math.round(t/.42);for(let a=0;a<o;a++){let l=.05+a*t/o;s.add(D(n-.08,.03,.32,e,0,l,0));let c=-n/2+.08;for(;c<n/2-.14;){if(r()<.2){c+=.12;continue}let h=.04+r()*.05,u=.2+r()*.12;s.add(D(h,u,.22,Ht(r,ef),c+h/2,l+.015+u/2,.02)),c+=h+.008}a===1&&s.add(J(.08,.06,.16,"#F4F1EA",n/2-.14,l+.1,0,{out:.01}))}return s}function on(n=1,t=0){let e=ae([.45,.45]),i=$t(t+2);e.add(J(.2,.15,.38,Ht(i,["#C8643C","#F4F1EA","#3A3A44","#D9B07A"]),0,.19,0,{out:.012,seg:14})),e.add(J(.18,.18,.02,"#5A3A24",0,.37,0));for(let s=0;s<7;s++){let r=s/7*6.283,o=At(new jt(.16,10,6),s%2?"#4E9A48":"#5FAE52",{out:.01});o.scale.set(.6,1.8*n,.35),o.position.set(Math.cos(r)*.12,.55+n*.25,Math.sin(r)*.12),o.rotation.set(Math.sin(r)*.5,r,-Math.cos(r)*.5),e.add(o)}return e}function rf(){let n=ae([.35,.35]);n.add(J(.16,.18,.03,"#2A2A30",0,.015,0)),n.add(J(.015,.015,1.45,"#2A2A30",0,.74,0,{seg:6}));let t=new Vt({color:"#F6E6C0",emissive:"#FFD98A",emissiveIntensity:.25});return n.add(At(new Ye(.14,.22,.3,16,1,!0),t,{pos:[0,1.5,0],out:.01})),n}function wn(n,t,e=0,i="paisagem"){let s=$t(e+8),r=ce(256,Math.round(256*t/n),(l,c,h)=>{if(i==="paisagem")l.fillStyle="#8EC8EC",l.fillRect(0,0,c,h),l.fillStyle="#6FA866",l.beginPath(),l.moveTo(0,h*.7),l.quadraticCurveTo(c*.3,h*.35,c*.6,h*.62),l.quadraticCurveTo(c*.8,h*.5,c,h*.6),l.lineTo(c,h),l.lineTo(0,h),l.fill(),l.fillStyle="#9E9A94",l.beginPath(),l.ellipse(c*.66,h*.45,c*.1,h*.22,0,Math.PI,0),l.fill(),l.fillStyle="#F2C230",l.beginPath(),l.arc(c*.2,h*.22,h*.09,0,7),l.fill();else if(i==="familia"){l.fillStyle="#E8DCC8",l.fillRect(0,0,c,h);for(let u=0;u<3;u++){let d=c*(.28+u*.22),p=h*.45;l.fillStyle=["#2C6E7F","#E57AA0","#3A9AD9"][u],l.fillRect(d-26,p+20,52,h),l.fillStyle=["#9A6646","#E8B48C","#E3AE86"][u],l.beginPath(),l.arc(d,p,24,0,7),l.fill(),l.fillStyle=["#2B2422","#5A3020","#4A2A18"][u],l.beginPath(),l.arc(d,p-6,24,Math.PI,0),l.fill()}}else if(i==="poster")l.fillStyle=Ht(s,["#1F2D4E","#3E2A60","#E2443A"]),l.fillRect(0,0,c,h),l.fillStyle="#F2C230",l.beginPath(),l.arc(c/2,h*.4,c*.25,0,7),l.fill(),l.fillStyle="#FFF",l.font=`900 ${c*.13}px Inter, Arial`,l.textAlign="center",l.fillText(Ht(s,["ROCK","GAMER","FUTEBOL","ESPA\xC7O"]),c/2,h*.85);else{l.fillStyle="#F4F1EA",l.fillRect(0,0,c,h);for(let u=0;u<6;u++)l.fillStyle=Ht(s,ef),l.beginPath(),l.arc(s()*c,s()*h,10+s()*30,0,7),l.fill()}}),o=ae([0,0]);o.add(Q(n+.08,t+.08,.04,"#7A5233",0,0,.02,{out:.008}));let a=We(n,t,yt(r),0,0,.042);return o.add(a),o}function to(n=2.8){let t=ae([0,0]);t.add(J(.02,.02,.3,"#F4F1EA",0,n-.15,0,{seg:6})),t.add(J(.12,.1,.14,"#F4F1EA",0,n-.35,0,{out:.01}));let e=new q;e.position.y=n-.36,e.userData.vivo=!0;for(let i=0;i<4;i++){let s=Q(.62,.02,.14,"#C8935E",.38,0,0,{out:.008}),r=new q;r.rotation.y=i*Math.PI/2,r.add(s),e.add(r)}return t.add(e),t.userData.pas=e,t}function Ss(n,t=2.8){let e=new Vt({color:"#FFF8E6",emissive:"#FFE8B0",emissiveIntensity:0});return n.acender(e,1.6),ae([0,0],At(new Ye(.22,.25,.07,18),e,{pos:[0,t-.035,0],shadow:!1}))}function of(n=2.2,t="#F4F1EA",e="#3A3A44"){let i=ae([n,.62]);i.add(Q(n,.86,.58,t,0,.43,0,{out:.012,r:.02})),i.add(D(n+.02,.04,.62,e,0,.88,0,{out:.01}));let s=Math.round(n/.5);for(let a=0;a<s;a++){let l=-n/2+n/s*(a+.5);i.add(D(n/s-.03,.7,.01,t,l,.45,.295)),i.add(D(.12,.02,.02,"#9AA0A8",l+(a%2?-.12:.12),.7,.31))}i.add(D(.6,.02,.4,"#C9CED6",-n/4,.905,0)),i.add(D(.52,.03,.34,"#8D949C",-n/4,.9,0));let r=new q;r.position.set(-n/4,.9,-.22),r.add(J(.02,.02,.28,"#C9CED6",0,.14,0,{seg:8}));let o=J(.015,.015,.2,"#C9CED6",0,.28,.08,{seg:8});return o.rotation.x=Math.PI/2,r.add(o),i.add(r),i.add(J(.1,.09,.24,"#B5603E",n/2-.3,1.02,0,{out:.01})),i.add(J(.11,.11,.03,"#8E4A2E",n/2-.3,1.15,0)),i.add(Q(.3,.05,.2,"#F2C230",n/4,.93,.05)),i}function af(n=2,t="#F4F1EA"){let e=ae([0,0]);e.add(Q(n,.65,.34,t,0,0,0,{out:.012,r:.02}));let i=Math.round(n/.5);for(let s=0;s<i;s++){let r=-n/2+n/i*(s+.5);e.add(D(n/i-.03,.6,.01,t,r,0,.175)),e.add(D(.02,.1,.02,"#9AA0A8",r+(s%2?-.18:.18),-.2,.19))}return e}function lf(n="#F4F1EA"){let t=ae([.62,.62]);t.add(Q(.6,.86,.6,n,0,.43,0,{out:.012,r:.02})),t.add(D(.5,.38,.01,"#2A2A30",0,.36,.301)),t.add(D(.44,.3,.01,"#4A4A52",0,.36,.305)),t.add(D(.6,.02,.6,"#2A2A30",0,.87,0));for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(J(.08,.08,.02,"#4A4A52",s*.14,.89,r*.14,{seg:14})),t.add(J(.05,.05,.03,"#1B1A20",s*.14,.9,r*.14,{seg:10}));for(let s=0;s<4;s++)t.add(J(.025,.025,.03,"#1B1A20",-.2+s*.13,.8,.31,{rot:[Math.PI/2,0,0],seg:8}));t.add(D(.6,.5,.04,n,0,1.12,-.29));let e=new q;e.position.set(.14,.9,.14),e.add(J(.12,.11,.14,"#9AA0A8",0,.07,0,{out:.01})),e.add(J(.125,.125,.015,"#8D949C",0,.15,0));let i=D(.2,.02,.03,"#2A2A30",.2,.1,0);return e.add(i),t.add(e),t}function cf(n="#F4F1EA"){let t=ae([.72,.7]);t.add(Q(.7,1.8,.68,n,0,.9,0,{out:.014,r:.05})),t.add(D(.66,.015,.01,"#C9CED6",0,1.25,.345)),t.add(D(.03,.4,.04,"#C9CED6",-.28,1.5,.36)),t.add(D(.03,.5,.04,"#C9CED6",-.28,.8,.36));for(let e=0;e<4;e++)t.add(Q(.08,.06,.01,["#E2443A","#F2C230","#3E7CC8","#5AA84E"][e],-.1+e*.1-(e>1?.05:0),1.55-e%2*.12,.345));return t.add(Q(.3,.26,.3,"#E8DCC8",0,1.93,0)),t}function Oa(n=1.2,t=.8,e="#B87A4A",i=4,s="#9A6236"){let r=ae([n+.9,t+.9]);r.add(Q(n,.05,t,e,0,.76,0,{out:.012}));for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.add(D(.06,.74,.06,e,l*(n/2-.08),.37,c*(t/2-.08)));let o=Ze(n*.6,t+.1,Pe("#F4F1EA"),0,.79,0);r.add(o),r.add(J(.14,.1,.08,"#E2A630",0,.83,0,{out:.01}));for(let l=0;l<3;l++)r.add(ve(.05,["#E2443A","#F2C230","#5AA84E"][l],-.04+l*.04,.9,(l-1)*.03,{seg:10}));let a=i===4?[[0,t/2+.25,Math.PI],[0,-t/2-.25,0],[n/2+.25,0,-Math.PI/2],[-n/2-.25,0,Math.PI/2]]:[[-n/4,t/2+.25,Math.PI],[n/4,t/2+.25,Math.PI],[-n/4,-t/2-.25,0],[n/4,-t/2-.25,0],[n/2+.25,0,-Math.PI/2],[-n/2-.25,0,Math.PI/2]];for(let[l,c,h]of a){let u=Er(s);u.position.set(l,0,c),u.rotation.y=h,r.add(u)}return r}function Er(n="#9A6236"){let t=ae([.45,.45]);t.add(Q(.42,.05,.42,n,0,.46,0,{out:.01}));for(let[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(D(.04,.46,.04,n,e*.18,.23,i*.18));return t.add(D(.04,.5,.04,n,-.18,.72,-.18)),t.add(D(.04,.5,.04,n,.18,.72,-.18)),t.add(Q(.4,.2,.03,n,0,.85,-.19,{out:.01})),t}function hf(){let n=ae([0,0]);return n.add(Q(.5,.3,.36,"#F4F1EA",0,.15,0,{out:.01})),n.add(D(.32,.22,.01,"#2A2A30",-.06,.15,.181)),n.add(D(.08,.2,.01,"#9AA0A8",.18,.15,.181)),n}function Qi(n,t=.16){let e=ae([0,0]);e.add(J(t+.02,t+.02,.04,"#E2443A",0,0,0,{rot:[Math.PI/2,0,0],out:.008}));let i=ce(128,128,a=>{a.fillStyle="#FFF",a.beginPath(),a.arc(64,64,62,0,7),a.fill(),a.fillStyle="#1B1420";for(let l=0;l<12;l++){let c=l/12*6.283;a.fillRect(64+Math.cos(c)*50-3,64+Math.sin(c)*50-3,6,6)}}),s=new gt(new vn(t,24),new De({map:i}));s.position.z=.021,e.add(s);let r=new q,o=new q;return r.position.z=o.position.z=.025,r.userData.vivo=o.userData.vivo=!0,r.add(D(.016,t*.55,.005,"#1B1420",0,t*.27,0)),o.add(D(.01,t*.8,.005,"#1B1420",0,t*.4,0)),e.add(r,o),n.vivos.push(()=>{let a=n.h||12;o.rotation.z=-(a%1)*Math.PI*2,r.rotation.z=-(a%12)/12*Math.PI*2}),e}function Ts(n=.95,t="#3E7CC8",e="#9A6236",i=2){let s=ae([n+.05,i+.05]);s.add(Q(n+.05,.3,i+.05,e,0,.2,0,{out:.012})),s.add(Q(n+.05,.8,.07,e,0,.5,-i/2,{out:.012})),s.add(Q(n-.02,.2,i-.05,"#F4F1EA",0,.44,.01,{r:.06}));let r=Q(n+.02,.08,i*.68,t,0,.54,i*.15,{out:.012,r:.04});s.add(r),s.add(D(n+.04,.26,.02,t,0,.42,i*.49));for(let a of[-1,1])s.add(D(.02,.26,i*.68,t,a*(n/2+.01),.42,i*.15));let o=n>1.2?2:1;for(let a=0;a<o;a++)s.add(Q(o===2?n/2-.1:n-.2,.14,.34,"#FFFFFF",o===2?(a?1:-1)*n/4:0,.6,-i/2+.28,{out:.01,r:.06}));return s}function eo(n="#9A6236",t=!0,e){let i=ae([.45,.4]);if(i.add(Q(.44,.55,.38,n,0,.275,0,{out:.012})),i.add(D(.38,.18,.01,new kt(n).multiplyScalar(.85).getStyle(),0,.4,.191)),i.add(D(.08,.02,.02,"#C9CED6",0,.4,.2)),t){i.add(J(.06,.08,.2,"#F4F1EA",-.08,.65,0,{out:.008}));let s=new Vt({color:"#F6E6C0",emissive:"#FFD98A",emissiveIntensity:0});e&&e.acender(s,1.2),i.add(At(new Ye(.09,.14,.17,14,1,!0),s,{pos:[-.08,.84,0],out:.008}))}return i.add(Q(.12,.03,.08,"#2A2A30",.12,.57,.04)),i}function ws(n=1.6,t=2.1,e="#D9B07A"){let i=ae([n,.6]);i.add(Q(n,t,.58,e,0,t/2,0,{out:.014,r:.02}));let s=n>1.2?3:2;for(let r=0;r<s;r++){let o=-n/2+n/s*(r+.5);i.add(D(n/s-.03,t-.12,.01,new kt(e).multiplyScalar(.93).getStyle(),o,t/2,.291)),i.add(D(.02,.3,.03,"#7A5233",o+(r%2?-1:1)*(n/s/2-.08),t/2,.31))}return i.add(Q(.5,.3,.4,"#C84E4E",-n/4,t+.15,0)),i}function Fi(n=1.1,t="#F4F1EA",e=!0,i=0){let s=ae([n,.6]);s.add(Q(n,.04,.58,t,0,.74,0,{out:.012})),s.add(D(.04,.72,.56,t,-n/2+.02,.36,0)),s.add(Q(.4,.72,.56,t,n/2-.2,.36,0,{out:.01}));for(let r=0;r<3;r++)s.add(D(.34,.2,.01,"#D9D2C5",n/2-.2,.58-r*.23,.281));if(e){s.add(Q(.55,.34,.04,"#1B1A20",-.05,1,-.15,{out:.01}));let r=new gt(new Wt(.5,.3),new De({map:zv(i)}));r.position.set(-.05,1,-.128),s.add(r),s.add(D(.06,.14,.06,"#2A2A30",-.05,.83,-.15)),s.add(D(.2,.02,.14,"#2A2A30",-.05,.77,-.15)),s.add(Q(.42,.02,.14,"#2A2A30",-.05,.77,.08)),s.add(Q(.06,.02,.1,"#2A2A30",.24,.77,.1))}return s.add(J(.04,.04,.1,"#3E7CC8",.3,.81,-.15,{seg:10})),s}var Lh=new Map;function zv(n){return Lh.has(n%3)||Lh.set(n%3,ce(256,160,t=>{t.fillStyle=["#2E6FB8","#1F2D4E","#3E2A60"][n%3],t.fillRect(0,0,256,160),t.fillStyle="#F4F1EA",t.fillRect(16,16,140,90),t.fillStyle="#5AA84E",t.fillRect(24,60,60,38),t.fillStyle="#F2C230",t.fillRect(100,30,46,70),t.fillStyle="#2A2A30",t.fillRect(0,140,256,20),t.fillStyle="#FFF";for(let e=0;e<4;e++)t.fillRect(8+e*22,144,14,12)})),Lh.get(n%3)}function ji(n="#2A2A30"){let t=ae([.55,.55]);for(let e=0;e<5;e++){let i=e/5*6.283,s=D(.3,.03,.04,n,Math.cos(i)*.14,.06,Math.sin(i)*.14);s.rotation.y=-i,t.add(s)}return t.add(J(.03,.03,.38,"#8D949C",0,.26,0,{seg:8})),t.add(Q(.48,.08,.46,n,0,.47,0,{out:.01})),t.add(Q(.44,.55,.07,n,0,.82,-.22,{out:.01})),t}function uf(n=1,t="#B87A4A"){let e=ae([n,.45]);e.add(Q(n,.85,.44,t,0,.425,0,{out:.012}));for(let i=0;i<3;i++)e.add(D(n-.08,.22,.01,new kt(t).multiplyScalar(.88).getStyle(),0,.18+i*.25,.221)),e.add(D(.16,.02,.02,"#7A5233",0,.25+i*.25,.23));return e.add(J(.06,.08,.03,"#F4F1EA",n/2-.2,.87,0)),e.add(Q(.2,.25,.03,"#7A5233",-n/4,.98,-.1,{rot:[-.15,0,0]})),e}function df(){let n=ae([.4,.65]);return n.add(At(new Ye(.19,.15,.4,18),"#FFFFFF",{pos:[0,.2,.05],out:.01})),n.add(J(.2,.2,.04,"#F4F1EA",0,.42,.05,{out:.008})),n.add(Q(.38,.38,.17,"#FFFFFF",0,.6,-.22,{out:.01})),n.add(D(.06,.02,.02,"#C9CED6",.12,.8,-.13)),n}function Ha(n=!0){let t=ae([.55,.45]);return t.add(Q(.55,.2,.45,"#FFFFFF",0,.78,0,{out:.01})),t.add(J(.08,.1,.7,"#FFFFFF",0,.35,-.05,{seg:12})),t.add(J(.016,.016,.16,"#C9CED6",0,.96,-.15,{seg:8})),n&&(t.add(Q(.5,.7,.03,"#C9CED6",0,1.5,-.21,{out:.01})),t.add(new gt(new Wt(.44,.64),new Vt({color:"#CFE6F2",emissive:"#9CC9E8",emissiveIntensity:.3})).translateY(1.5).translateZ(-.19))),t}function ff(n=1,t=1){let e=ae([n,t]);e.add(D(n,.06,t,"#E8E4DC",0,.03,0));let i=new Vt({color:"#CFE6F2",transparent:!0,opacity:.35,depthWrite:!1});e.add(At(new Wt(n,1.9),i,{pos:[0,1,t/2],shadow:!1})),e.add(D(n,.04,.04,"#C9CED6",0,1.95,t/2)),e.add(D(.04,1.95,.04,"#C9CED6",n/2-.02,1,t/2));let s=new q;return s.position.set(0,2.05,-t/2+.1),s.add(J(.12,.12,.04,"#C9CED6",0,0,.2,{seg:14})),s.add(D(.03,.03,.25,"#C9CED6",0,.02,.08)),e.add(s),e}function pf(n="#F2546E"){let t=ae([0,0]);return t.add(D(.5,.02,.02,"#C9CED6",0,0,.03)),t.add(Q(.45,.55,.03,n,0,-.28,.05,{r:.01})),t}function mf(){let n=ae([.6,.55]);return n.add(Q(.6,.3,.55,"#E8E4DC",0,.78,0,{out:.01})),n.add(D(.08,.62,.08,"#E8E4DC",-.2,.31,0)),n.add(D(.08,.62,.08,"#E8E4DC",.2,.31,0)),n.add(J(.016,.016,.2,"#C9CED6",0,1.02,-.24,{seg:8})),n.add(Q(.12,.14,.08,"#3E7CC8",.18,.98,.05)),n}function gf(){let n=ae([.62,.62]);return n.add(Q(.6,.9,.6,"#F4F1EA",0,.45,0,{out:.012,r:.04})),n.add(J(.2,.2,.02,"#9AA0A8",0,.5,.3,{rot:[Math.PI/2,0,0],seg:20})),n.add(J(.16,.16,.02,"#7FA9C9",0,.5,.31,{rot:[Math.PI/2,0,0],seg:20})),n.add(D(.5,.1,.01,"#C9CED6",0,.8,.301)),n}function vf(n=3,t=["#3E7CC8","#F2546E","#F4F1EA","#F2C230","#5AA84E"]){let e=ae([0,0]);for(let r of[-1,1])e.add(J(.03,.03,1.9,"#9AA0A8",r*n/2,.95,0,{seg:6}));e.add(D(n,.01,.01,"#E8E4DC",0,1.85,0));let i=$t(n*10),s=-n/2+.3;for(;s<n/2-.4;){let r=.3+i()*.3,o=.35+i()*.35,a=Q(r,o,.02,Ht(i,t),s+r/2,1.83-o/2,0,{r:.01});a.userData.vivo=!0,e.add(a),s+=r+.12}return e}function _f(){let n=ae([1.4,.8]);n.add(D(1.4,.9,.8,"#B5603E",0,.45,0,{out:.014})),n.add(D(1.5,.06,.9,"#D8CBB8",0,.93,0)),n.add(D(1,.5,.1,"#3A2A20",0,1.2,.3)),n.add(D(1.2,.8,.7,"#B5603E",0,1.36,-.05,{out:.014}));let t=At(new Ye(.18,.6,.6,4),"#B5603E",{pos:[0,2.06,-.05],rot:[0,Math.PI/4,0],out:.014});t.scale.set(1.3,1,.9),n.add(t),n.add(D(.36,1.2,.36,"#B5603E",0,2.95,-.05,{out:.014})),n.add(D(.9,.02,.5,"#3A3A44",0,1,.1));for(let e=0;e<5;e++)n.add(ve(.05,"#2A1A14",-.3+e*.15,1.02,.1,{seg:8}));return n}function za(n="#F4F1EA",t=!1){let e=ae([2.2,2.2]);e.add(J(.45,.45,.04,n,0,.72,0,{out:.01,seg:20}));for(let i of[0,1.57,3.14,4.71]){let s=D(.04,.72,.04,n,Math.cos(i)*.35,.36,Math.sin(i)*.35);s.rotation.z=Math.cos(i)*.12,e.add(s)}for(let i of[.4,2.1,3.7,5.2]){let s=kv(n);s.position.set(Math.cos(i)*.85,0,Math.sin(i)*.85),s.rotation.y=-i-Math.PI/2,e.add(s)}if(t){e.add(J(.02,.02,2.2,"#9AA0A8",0,1.1,0,{seg:6}));let i=At(new je(1.3,.45,8,1,!0),"#E2443A",{pos:[0,2.2,0],out:.012});e.add(i)}return e}function kv(n="#F4F1EA"){let t=new q;t.add(Q(.44,.04,.42,n,0,.44,0,{out:.008}));for(let[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(D(.04,.44,.04,n,e*.19,.22,i*.18));return t.add(Q(.44,.4,.04,n,0,.68,-.2,{out:.008,rot:[-.12,0,0]})),t}function yf(n="#C84E4E"){let t=ae([1,1.1]);t.add(D(.9,.7,1,"#D9B07A",0,.35,0,{out:.012}));let e=At(new Ye(.01,.72,.5,4,1),n,{pos:[0,.95,0],rot:[0,Math.PI/4,0],out:.012});return e.scale.set(1,1,1.2),t.add(e),t.add(At(new vn(.22,16),"#2A1E1A",{pos:[0,.32,.505]})),t.add(D(.44,.2,.01,"#2A1E1A",0,.12,.505)),t}function Bh(n=0){let t=on(1.3,n);return t.scale.setScalar(1.3),t.userData.pe=[.6,.6],t}function Nh(n="#2FA37A"){let t=ae([1.7,.4]);for(let s of[-1,1]){let r=At(new Gn(.32,.03,8,24),"#2A2A30",{pos:[s*.55,.34,0]});t.add(r)}let e=D(1,.04,.04,n,0,.55,0);t.add(e);let i=D(.04,.4,.04,n,-.2,.5,0);return i.rotation.z=.3,t.add(i),t.add(Q(.22,.05,.1,"#2A2A30",-.28,.75,0)),t.add(D(.04,.04,.45,"#2A2A30",.45,.8,0)),t}function Pi(n="#E2443A",t=0){let e=ae([1.8,4.1]),i=$t(t+1);e.add(Q(1.74,.62,4,n,0,.55,0,{out:.016,r:.16})),e.add(Q(1.56,.52,2.1,n,0,1.08,-.25,{out:.016,r:.14}));let s=Pe("#6E95B8");e.add(D(1.4,.4,.02,s,0,1.08,.81,{rot:[-.35,0,0]})),e.add(D(1.4,.38,.02,s,0,1.08,-1.31,{rot:[.3,0,0]}));for(let o of[-1,1])e.add(D(.02,.36,.85,s,o*.785,1.08,.2)),e.add(D(.02,.36,.8,s,o*.785,1.08,-.75));for(let[o,a]of[[-.8,1.25],[.8,1.25],[-.8,-1.3],[.8,-1.3]]){let l=new q;l.position.set(o,.34,a),l.add(J(.34,.34,.24,"#1B1A20",0,0,0,{rot:[0,0,Math.PI/2],out:.012,seg:18})),l.add(J(.18,.18,.25,"#C9CED6",0,0,0,{rot:[0,0,Math.PI/2],seg:14})),l.userData.roda=!0,e.add(l)}let r=new Vt({color:"#FFF6D8",emissive:"#FFF0C0",emissiveIntensity:.2});for(let o of[-1,1])e.add(At(new le(.34,.14,.04),r,{pos:[o*.58,.68,2]})),e.add(D(.3,.12,.04,"#E8443A",o*.62,.7,-2));return e.add(D(1.3,.14,.05,"#3A3A44",0,.38,2.02)),e.add(D(1.3,.14,.05,"#3A3A44",0,.38,-2.02)),e.add(Q(.4,.12,.03,"#F4F1EA",0,.45,-2.04)),e}function Ef(n=0){let t=ae([0,0]),e=$t(n+61);t.add(D(1.2,.03,.25,"#F4F1EA",0,0,0,{out:.006})),t.add(D(1.2,.03,.25,"#F4F1EA",0,.45,0,{out:.006}));for(let i=0;i<2;i++)for(let s=0;s<6;s++){let r=Ht(e,["#3E7CC8","#5AA84E","#F2C230","#E2443A","#F2546E","#F4F1EA"]);t.add(J(.045,.05,.2,r,-.5+s*.2,.12+i*.45,0,{seg:8})),t.add(J(.015,.02,.05,r,-.5+s*.2,.245+i*.45,0,{seg:6}))}return t}function Mf(){let n=ae([.5,.4]);return n.add(J(.22,.18,.5,"#D9B07A",0,.25,0,{out:.01,seg:14})),n.add(Q(.36,.12,.3,"#3E7CC8",0,.52,0,{r:.05})),n.add(Q(.2,.1,.2,"#F2546E",.05,.58,.04,{r:.04})),n}function xf(){let n=ae([.35,.35]);n.add(J(.15,.12,.28,"#3E7CC8",0,.14,0,{out:.01,seg:14})),n.add(At(new Gn(.14,.008,6,16,Math.PI),"#9AA0A8",{pos:[0,.28,0]}));let t=new q;return t.position.set(.3,0,0),t.add(J(.012,.012,1.3,"#F2C230",0,.65,0,{seg:6})),t.add(D(.4,.05,.05,"#2A2A30",0,.03,0)),t.rotation.z=.15,n.add(t),n}var Gv=["#F2D8A8","#E8DCC8","#CFE3D2","#F4C7B4","#D8E2EE","#F6E7A6","#E7C9DE","#F2F0EA","#C9DDE8","#EFC7A0"],ka=["#F7F1E3","#EAF1F4","#F6E8E0","#EEF2E4","#F4EEDC","#E9E4F2"],Vv=["#C8643C","#B8573A","#D07A4A","#A85A40"],Wv=["#B87A4A","#8E5A3A","#F4F1EA","#3E7CC8","#2E7A5A"];function Xv(n){let t=$t(n.seed*97+13);if(n.tipo==="casaFamilia")return{ext:"#F2D8A8",faixa:"#C9874E",sala:"#F7F1E3",q1:"#D9ECF7",q2:"#F3E6EE",coz:"#FFFFFF",ser:"#EAF1F4",ban:"#FFFFFF",cor:"#F4EEDC",telha:"#C8643C",porta:"#8E5A3A",sofa:"#3E7CC8",cama1:"#2E9C6A",cama2:"#C84E4E",carro:"#E2443A",m:1,telhado:"4aguas",grade:"#3A3D44",muro:"reboco",carroSim:!0,R:t};let e=Ht(t,Gv);return{ext:e,faixa:new kt(e).multiplyScalar(.78).getStyle(),sala:Ht(t,ka),q1:Ht(t,["#D9ECF7","#E8F4E0","#F7E3D9","#EDE3F7"]),q2:Ht(t,ka),coz:"#FFFFFF",ser:Ht(t,ka),ban:"#FFFFFF",cor:Ht(t,ka),telha:Ht(t,Vv),porta:Ht(t,Wv),sofa:Ht(t,["#3E7CC8","#C84E4E","#7A8696","#5AA84E","#8E6CC4","#D98A3A"]),cama1:Ht(t,["#2E9C6A","#3E7CC8","#F2546E","#F2C230"]),cama2:Ht(t,["#C84E4E","#8E6CC4","#4FB8A0","#D98A3A"]),carro:Ht(t,["#E2443A","#3E7CC8","#F4F1EA","#2A2A30","#9AA0A8","#F2C230","#2E9C6A"]),m:t()<.5?1:-1,telhado:t()<.62?"4aguas":t()<.55?"2aguas":"platibanda",grade:Ht(t,["#3A3D44","#F4F1EA","#2E6FB8","#7A2A2A"]),muro:t()<.3?"tijolo":"reboco",carroSim:t()<.65,R:t}}function Af(n,t){Hh(n,t,!1)}function bf(n,t){Hh(n,t,!0)}var Sf=(n,t)=>Hh(n,t,!1);function Hh(n,t,e){let i=n.L,s=Xv(i),r=s.m,o=n.cidade,a=s.R,l=t==="perto",c=H=>H*r,h=2.8,u=.2,d=.12,p=yt(en(Xn("#CFC9BF","#C4BDB2"),1,1));if(no(n,c(-2.45),8.2,5.9,5.4,p),no(n,c(2.95),8.2,4.9,5.4,yt(en(Ci(),1,1)),3),no(n,0,-8.75,10.7,4.5,p),no(n,c(-5.1),-.5,.6,12,p),no(n,c(5.1),-.5,.6,12,p),qv(n,s,c,t),t!=="longe"){let H=qn(Ht(a,["ipeAmarelo","quaresmeira","comum","ipeRoxo"]),.7,i.seed);H.position.set(c(3.6),0,8.6),n.add(H),n.col(c(3.6),8.6,.5,.5);let Z=$d(3.2,.8,.7,"#4E9A48",i.seed);if(Z.position.set(c(3),0,6.1),n.add(Z),n.col(c(3),6.1,3.2,.7),i.tipo==="casaFamilia"||a()<.5){let et=Da(1.6,.7,i.seed);et.position.set(c(1.7),0,10.2),n.add(et),n.col(c(1.7),10.2,1.6,.7)}}if(s.carroSim){let H=Pi(s.carro,i.seed);H.position.set(c(-3),0,8.5),H.rotation.y=a()<.5?0:Math.PI,i.tipo==="casaFamilia"&&(H.rotation.y=Math.PI),n.add(H),n.col(c(-3),8.5,1.8,4.1,{nome:"carro"})}else if(l){let H=Nh(Ht(a,["#2FA37A","#E2443A","#3E7CC8"]));H.position.set(c(-4.6),0,7.5),H.rotation.y=Math.PI/2,n.add(H)}let g=s,_=s.ext,m=l?s.sala:null,f=l?s.q1:null,E=l?s.q2:null,y=l?s.coz:null,v=l?s.ser:null,A=l?s.ban:null,S=l?s.cor:null,T=(H,Z,et,K,ft,ht,W={})=>{let tt=Math.min(c(Z),c(et)),ct=Math.max(c(Z),c(et)),rt=(K||[]).map(vt=>({a:c(vt.c)-vt.w/2-tt,b:c(vt.c)+vt.w/2-tt,y0:vt.y0??0,y1:vt.y1??2.1}));Kt(n,tt,H,ct,H,{vaos:rt,corA:ft,corB:ht,h:W.h??h,t:W.t??d,y:W.y??0,rodape:l?"#E8E4DC":null,semRodape:_})},b=(H,Z,et,K,ft,ht,W={})=>{let tt=c(H),[ct,rt]=r>0?[ft,ht]:[ht,ft],vt=(K||[]).map(bt=>({a:bt.c-bt.w/2-Z,b:bt.c+bt.w/2-Z,y0:bt.y0??0,y1:bt.y1??2.1}));Kt(n,tt,Z,tt,et,{vaos:vt,corA:ct,corB:rt,h:W.h??h,t:W.t??d,y:W.y??0,rodape:l?"#E8E4DC":null,semRodape:_})},x=(H,Z,et,K,ft,ht,W,tt={})=>nn(n,c(H),Z,et,K,ft,ht,{t:u,fora:et?W:W*r,grade:s.grade,cortina:Ht($t(i.seed+H*7),["#F3E3C0","#D9ECF7","#F7D9E3","#E8F4E0"]),seed:i.seed+(H*3|0),...tt});n.pisoAlto(0,-.5,9.4,12,.125),n.add(D(9.6,.12,12.2,"#C9C2B6",0,.06,-.5,{shadow:!1}));let M=[{c:-3.35,w:.9},{c:-1.2,w:1.4,y0:.95,y1:2.15}],w=[{c:2.75,w:1.3,y0:.95,y1:2.15}],F=[{c:-3.2,w:.85},{c:-1.2,w:.7,y0:1.3,y1:2.1}],P=[{c:2.7,w:1.3,y0:.95,y1:2.15}];T(5.5,-4.7,.8,M,m,_,{t:u}),T(5.5,.8,4.7,w,f,_,{t:u}),T(-6.5,-4.7,.8,F,_,v,{t:u}),T(-6.5,.8,4.7,P,_,E,{t:u}),b(-4.7,1.5,5.5,[{c:3.5,w:1.2,y0:.95,y1:2.15}],_,m,{t:u}),b(-4.7,-3.2,1.5,[{c:-.9,w:1.2,y0:1.05,y1:2.15}],_,y,{t:u}),b(-4.7,-6.5,-3.2,[],_,v,{t:u}),b(4.7,1.5,5.5,[],f,_,{t:u}),b(4.7,-1.8,1.5,[{c:-.6,w:.6,y0:1.45,y1:2.1}],S,_,{t:u}),b(4.7,-6.5,-1.8,[],E,_,{t:u}),ze(n,"frente",c(-3.35),5.5,!0,.9,{t:u,dobra:-r,abre:-1,cor:s.porta,batente:"#F4F1EA"}),ze(n,"fundos",c(-3.2),-6.5,!0,.85,{t:u,dobra:-r,abre:-1,cor:s.porta}),x(-1.2,5.5,!0,1.4,.95,2.15,1),x(2.75,5.5,!0,1.3,.95,2.15,1),x(-1.2,-6.5,!0,.7,1.3,2.1,-1,{grade:null}),x(2.7,-6.5,!0,1.3,.95,2.15,-1),x(-4.7,3.5,!1,1.2,.95,2.15,-1),x(-4.7,-.9,!1,1.2,1.05,2.15,-1),x(4.7,-.6,!1,.6,1.45,2.1,1,{grade:null,cortina:!1}),n.add(D(1.3,.1,.5,"#C9C2B6",c(-3.35),.05,5.85));let C=new Vt({color:"#FFF6D8",emissive:"#FFD98A",emissiveIntensity:0});o.acender(C,2),n.add(At(new jt(.1,12,8),C,{pos:[c(-2.6),2.25,5.66]}));let B=10+i.seed*7%890,U=new gt(new Wt(.36,.2),yt(o.tex.letreiroTex(String(B),{w:128,h:72,fundo:"#2E6FB8"})));U.position.set(c(-.4),1.6,10.99+.02),n.add(U);for(let[H,Z,et,K]of[[0,5.62,9.6,.04],[0,-6.62,9.6,.04],[-4.82,-.5,.04,12.2],[4.82,-.5,.04,12.2]])n.add(D(et,.45,K,s.faixa,c(H),.3,Z,{shadow:!1}));if(l){T(1.5,-4.7,.8,[{c:-2.7,w:2.4,y1:2.35}],y,m),b(.8,1.5,5.5,[],m,f),T(1.5,.8,4.7,[{c:1.5,w:.8}],S,f),b(.8,.3,1.5,[{c:.9,w:.8}],y,S),b(.8,-1.8,.3,[],y,A),b(.8,-3.2,-1.8,[],y,E),b(.8,-6.5,-3.2,[],v,E),T(-3.2,-4.7,.8,[{c:-1,w:.8}],v,y),T(.3,.8,3,[{c:1.85,w:.7}],A,S),b(3,-1.8,.3,[],A,S),T(-1.8,.8,3,[],E,A),T(-1.8,3,4.7,[{c:3.85,w:.8}],E,S);let H={t:d,cor:"#F4F1EA",batente:"#F4F1EA"};ze(n,"quarto1",c(1.5),1.5,!0,.8,{...H,dobra:-r,abre:1}),ze(n,"cozinha",c(.8),.9,!1,.8,{...H,dobra:1,abre:r}),ze(n,"servico",c(-1),-3.2,!0,.8,{...H,dobra:r,abre:-1}),ze(n,"banheiro",c(1.85),.3,!0,.7,{...H,dobra:r,abre:-1}),ze(n,"quarto2",c(3.85),-1.8,!0,.8,{...H,dobra:r,abre:1});let Z=o.tex.piso("madeira","#C8935E","#B98450"),et=o.tex.piso("ceramica","#E8E0D2","#D4CABA"),K=o.tex.piso("xadrez","#F4F1EA","#9AB8C8"),ft=(ct,rt,vt,bt,Ut,Yt="#F7F4EE")=>{let st=Math.min(c(ct),c(rt)),dt=Math.max(c(ct),c(rt));Zn(n,(st+dt)/2,(vt+bt)/2,dt-st,bt-vt,yt(Ut),.125),Yn(n,(st+dt)/2,(vt+bt)/2,dt-st,bt-vt,h-.005,Yt)};ft(-4.7,.8,1.5,5.5,Z),ft(.8,4.7,1.5,5.5,Z),ft(-4.7,.8,-3.2,1.5,et),ft(-4.7,.8,-6.5,-3.2,et),ft(.8,3,-1.8,.3,K),ft(.8,4.7,.3,1.5,Z),ft(3,4.7,-1.8,.3,Z),ft(.8,4.7,-6.5,-1.8,Z);let ht=yt(en(Th(),1,1));((ct,rt,vt,bt,Ut)=>{let Yt=ht.map.clone();Yt.repeat.set(vt/.6,bt/.6),Yt.needsUpdate=!0;let st=new gt(new Wt(vt,bt),yt(Yt));st.position.set(c(ct),.125+bt/2+.9,rt),st.rotation.y=Ut,n.add(st)})(-4.6+.005,-1.5,2.4,.7,r>0?Math.PI/2:-Math.PI/2);let tt=(ct,rt,vt,bt)=>{let Ut=ht.map.clone();Ut.repeat.set(vt/.6,1.6/.6),Ut.needsUpdate=!0;let Yt=new gt(new Wt(vt,1.6),yt(Ut));Yt.position.set(c(ct),.125+.8,rt),Yt.rotation.y=bt,n.add(Yt)};tt(1.9,-1.8+.065,2.2,0),tt(.8+.065,-.75,2.1,r>0?Math.PI/2:-Math.PI/2),tt(3-.065,-.75,2.1,r>0?-Math.PI/2:Math.PI/2),Yv(n,s,c,r)}else n.add(D(9.2,2.6,11.8,"#3A3540",0,1.4,-.5,{shadow:!1}));let z=e?h*2+.15:h;e&&Zv(n,s,c,t),s.telhado==="platibanda"?Ki(n,0,-.5,9.4,12,z+.02,s.ext):Ua(n,0,-.5,9.4,12,z+.02,{cor:s.telha,duas:s.telhado==="2aguas",parede:s.ext,sombra:!(o.dentro||[]).includes(i.nome),sobe:2.2}),n.ponto("frente",c(-3.35),6.05,Math.PI),n.ponto("portao",c(-.22),11.8,Math.PI),n.ponto("rua",c(-.22),14.5,Math.PI),n.ponto("sala",c(-1),2.6),n.ponto("cozinha",c(-2.6),-2.4),n.ponto("quarto1",c(2.5),3.4),n.ponto("quarto2",c(3.2),-4.2),n.ponto("banheiro",c(1.9),-.5),n.ponto("quintal",c(-.5),-8.6),n.ponto("garagem",c(-.3),8.2)}function no(n,t,e,i,s,r,o=1){let a=r.map.clone();a.repeat.set(i/o,s/o),a.needsUpdate=!0;let l=Ze(i,s,yt(a),t,.015,e);n.add(l)}function qv(n,t,e,i){let s=n.L,r=t.ext,o=t.muro==="tijolo"?yt(Sh()):null,a=(w,F,P,C,B)=>{let U=Math.abs(F-w)||.15,z=Math.abs(C-P)||.15,H=(w+F)/2,Z=(P+C)/2,et=o?Wn(U,B,z,o,H,B/2,Z,1.2,{out:.012}):Wn(U,B,z,Un(r),H,B/2,Z,1,{out:.012});n.add(et),n.add(D(U+.04,.06,z+.04,"#E8E4DC",H,B+.03,Z,{shadow:!1})),n.col(H,Z,U,z,{h:B})},l=s.w/2-.075,c=s.d/2-.075;a(-l,-l,-c,c-.1,2),a(l,l,-c,c-.1,2),a(-l,l,-c,-c,2);let h=c,u=[e(-4.85),e(-1.15)].sort((w,F)=>w-F),d=[e(-.9),e(.45)].sort((w,F)=>w-F),p=[[-l,Math.min(u[0],d[0])],[Math.min(u[1],d[1]),Math.max(u[0],d[0])],[Math.max(u[1],d[1]),l]];for(let[w,F]of p)if(!(F-w<.05)&&(a(w,F,h,h,1),i!=="longe")){let P=Math.max(1,Math.round((F-w)/.13));for(let C=0;C<=P;C++)n.add(D(.025,.95,.025,t.grade,w+(F-w)*C/P,1.5,h,{shadow:!1}));n.add(D(F-w,.04,.04,t.grade,(w+F)/2,1.97,h,{shadow:!1}))}for(let w of[u[0],u[1],d[0],d[1]])n.add(D(.3,2.1,.3,r,w,1.05,h,{out:.012})),n.col(w,h,.3,.3);let g=n.cidade,_=new q;_.userData.vivo=!0;let m=u[1]-u[0]-.3;_.add(D(m,.06,.05,t.grade,0,.1,0)),_.add(D(m,.06,.05,t.grade,0,1.95,0));for(let w=0;w<=Math.round(m/.12);w++)_.add(D(.03,1.85,.03,t.grade,-m/2+w*m/Math.round(m/.12),1.02,0));_.add(D(m,.5,.02,t.grade,0,.45,0));let f=(u[0]+u[1])/2;_.position.set(f,0,h-.12),n.add(_);let E=(s.nome?s.nome+".":"")+"garagem",y=e(1)>0?1:-1;g.portas[E]={nome:E,aberta:0,auto:!1,abrir(w){this.aberta=w,_.position.x=f+y*Math.max(0,Math.min(1,w))*(m+.1)},lote:s.nome};let v=new q;v.userData.vivo=!0;let A=d[1]-d[0]-.3,S=e(1)>0?d[0]+.15:d[1]-.15;v.position.set(S,0,h);let T=e(1)>0?1:-1,b=new q;v.add(b),b.add(D(A,.06,.05,t.grade,T*A/2,.1,0)),b.add(D(A,.06,.05,t.grade,T*A/2,1.95,0));for(let w=0;w<=6;w++)b.add(D(.03,1.85,.03,t.grade,T*w*A/6,1.02,0));n.add(v);let x=(s.nome?s.nome+".":"")+"portao",M={nome:x,aberta:0,auto:!0,abrir(w){this.aberta=w,v.rotation.y=T*Math.max(0,Math.min(1,w))*1.5},mundo:ei(s,(d[0]+d[1])/2,h),lote:s.nome};g.portas[x]=M,n.add(Q(.3,.4,.15,"#E2443A",e(.55),1.3,h+.1,{out:.01}))}function Yv(n,t,e,i){let s=n.cidade,r=t.R,o=.125,a=(m,f,E,y=0,v=!0,A=0)=>{m.position.set(e(f),o+A,E),m.rotation.y=i>0?y:-y,n.add(m);let S=m.userData.pe;if(v&&S&&S[0]>0){let T=Math.abs(Math.round(Math.sin(y)))===1;n.col(e(f),E,T?S[1]:S[0],T?S[0]:S[1],{h:1})}return m},l=(m,f,E,y,v)=>(m.position.set(e(f),o+y,E),m.rotation.y=i>0?v:-v,n.add(m),m),c=n.L.tipo==="casaFamilia";a(Na(2.4,1.8,Ht(r,["#C84E4E","#3E7CC8","#8E6CC4","#D98A3A"]),"#F2C230"),-2.1,3.45,Math.PI/2,!1),a(Ba(2.1,t.sofa),-4.15,3.45,Math.PI/2);let u=a(_r(1.6),.55,3.45,-Math.PI/2).userData.tela;s.vivos.push(m=>yr(u,m,n.L.seed)),a(sf(1.1,.6),-2.1,3.45,Math.PI/2),a(nf(Ht(r,["#C84E4E","#F2C230","#5AA84E"])),-1.9,4.95,Math.PI),a(Uh(1,1.8,"#9A6236",n.L.seed),-.6,1.75,0),a(on(1,n.L.seed),.4,5.1),a(on(1.2,n.L.seed+1),-4.35,1.95),a(rf(),-4.35,4.95),l(wn(1.2,.7,n.L.seed,"paisagem"),-4.6+.01,3.45,1.55,Math.PI/2),l(wn(.45,.55,n.L.seed+2,c?"familia":"abstrato"),-4.3,1.56+.01,1.5,0);let p=a(to(2.68),-2.1,3.45,0,!1).userData.pas;s.vivos.push(m=>{p.rotation.y=m*7}),a(of(2.4),-4.29,-1.5,Math.PI/2),a(lf(),-4.29,.05,Math.PI/2),a(cf(),-4.29,1,Math.PI/2),l(af(1),-4.43,-2.2,1.85,Math.PI/2),l(hf(),-4.3,-2.45,.92,Math.PI/2),a(Oa(1.2,.8,"#B87A4A",4,"#9A6236"),-1.6,-1.1,0),l(Qi(s),.8-.07,-1.2,2,-Math.PI/2),a(Ss(s,2.795),-2,-.9,0,!1),a(mf(),.45,-5.9,-Math.PI/2),a(gf(),.45,-5,-Math.PI/2),a(Nh(Ht(r,["#2FA37A","#E2443A","#3E7CC8"])),-4.45,-4.9,Math.PI/2),a(new q().add(Q(.5,1.8,.45,"#F4F1EA",0,.9,0,{out:.012})),-4.4,-3.55,Math.PI/2,!1),n.col(e(-4.4),-3.55,.45,.5),a(Ss(s,2.795),-2,-4.9,0,!1),l(Ef(n.L.seed),-4.7+.2,-5,1.45,Math.PI/2),a(Mf(),.45,-4.1,0),a(xf(),-2,-6.15,0),a(ff(1,1),1.35,-1.25,0),a(df(),2.6,-1.4,0),a(Ha(!0),2.72,-.35,-Math.PI/2),l(pf(Ht(r,["#F2546E","#3E7CC8","#F2C230"])),2,-1.8+.08,1.5,0),a(Ss(s,2.795),1.9,-.75,0,!1),l(wn(.5,.6,n.L.seed+4,"abstrato"),4.6-.01,-.75,1.55,-Math.PI/2),a(Ss(s,2.795),3.85,.3,0,!1),a(Na(1.4,1,"#3E7CC8","#F4F1EA"),2.6,3.6,0,!1),a(Ts(.95,t.cama1,"#9A6236"),4.15,2.6,0),a(eo("#9A6236",!0,s),3.3,1.78,0),a(Fi(1.1,"#F4F1EA",!0,n.L.seed),2.6,5.12,Math.PI),a(ji(),2.6,4.45,Math.PI),a(ws(1.6,2.1,"#D9B07A"),1.16,3.5,Math.PI/2),l(wn(.5,.7,n.L.seed+5,"poster"),4.6-.01,4.3,1.6,-Math.PI/2),l(wn(.45,.6,n.L.seed+6,"poster"),3.3,1.5+.07,1.75,0),a(Ss(s,2.795),2.75,3.5,0,!1),a(Na(2,1.4,"#E8DCC8","#C9874E"),2.2,-4.3,Math.PI/2,!1),a(Ts(1.4,t.cama2,"#7A5233"),1.85,-4.3,Math.PI/2),a(eo("#7A5233",!0,s),1.05,-5.35,Math.PI/2),a(eo("#7A5233",!0,s),1.05,-3.25,Math.PI/2),a(ws(1.8,2.1,"#B87A4A"),4.34,-4.6,-Math.PI/2),a(uf(1,"#B87A4A"),1.3,-6.18,0),l(wn(1,.6,n.L.seed+7,c?"familia":"paisagem"),.8+.07,-4.3,1.75,Math.PI/2);let _=a(to(2.68),2.6,-4.2,0,!1).userData.pas;s.vivos.push(m=>{_.rotation.y=-m*6}),a(_f(),3.4,-10.45,0),a(za(Ht(r,["#F4F1EA","#E2443A","#F2C230"]),!0),1.4,-8.6,0),a(vf(3),-4.95,-8.8,Math.PI/2,!1),n.col(e(-4.95),-7.3,.1,.1),n.col(e(-4.95),-10.3,.1,.1),a(yf(Ht(r,["#C84E4E","#3E7CC8","#2E9C6A"])),-1.4,-10.4,0),a(Bh(n.L.seed),4.8,-7.1),a(Bh(n.L.seed+3),-3.8,-10.5)}function Zv(n,t,e,i){let r=2.9499999999999997,o=i==="perto",a=t.ext,l=o?t.q1:null;n.add(D(9.6,.15,12.2,"#E8E4DC",0,2.8+.075,-.5));let c=(d,p,g,_,m,f)=>{let E=Math.min(e(p),e(g)),y=Math.max(e(p),e(g));Kt(n,E,d,y,d,{y:r,h:2.8,t:.2,corA:m,corB:f,semCol:!0,vaos:_.map(v=>({a:e(v.c)-v.w/2-E,b:e(v.c)+v.w/2-E,y0:v.y0,y1:v.y1}))})},h=(d,p,g,_,m,f)=>{let[E,y]=e(1)>0?[m,f]:[f,m];Kt(n,e(d),p,e(d),g,{y:r,h:2.8,t:.2,corA:E,corB:y,semCol:!0,vaos:_.map(v=>({a:v.c-v.w/2-p,b:v.c+v.w/2-p,y0:v.y0,y1:v.y1}))})},u=(d,p,g,_,m,f,E)=>nn(n,e(d),p,g,_,r+m,r+f,{t:.2,fora:g?E:E*(e(1)>0?1:-1),cortina:"#F3E3C0",seed:n.L.seed+50+d});c(5.5,-4.7,4.7,[{c:-2.2,w:2.2,y0:0,y1:2.2},{c:2.6,w:1.4,y0:.95,y1:2.15}],l,a),c(-6.5,-4.7,4.7,[{c:-2.2,w:1.4,y0:.95,y1:2.15},{c:2.6,w:1.4,y0:.95,y1:2.15}],a,l),h(-4.7,-6.5,5.5,[{c:0,w:1.2,y0:.95,y1:2.15}],a,l),h(4.7,-6.5,5.5,[{c:-3,w:1.2,y0:.95,y1:2.15}],l,a),u(2.6,5.5,!0,1.4,.95,2.15,1),u(-2.2,-6.5,!0,1.4,.95,2.15,-1),u(2.6,-6.5,!0,1.4,.95,2.15,-1),u(-4.7,0,!1,1.2,.95,2.15,-1),u(4.7,-3,!1,1.2,.95,2.15,1),nn(n,e(-2.2),5.5,!0,2.2,r,r+2.2,{t:.2,fora:1,cortina:o?"#F3E3C0":!1,seed:9}),n.add(D(4.2,.15,1.6,"#E8E4DC",e(-2.2),2.8+.075,6.3));for(let d=0;d<=14;d++)n.add(D(.03,1,.03,t.grade,e(-4.3+d*.3),r+.5,7.05,{shadow:!1}));if(n.add(D(4.2,.05,.06,t.grade,e(-2.2),r+1.02,7.05,{shadow:!1})),n.add(J(.09,.09,2.8,"#E8E4DC",e(-4.15),2.8/2,6.95,{seg:10})),n.add(J(.09,.09,2.8,"#E8E4DC",e(-.25),2.8/2,6.95,{seg:10})),o){let d=n.cidade,p=t.R,g=(_,m,f,E=0)=>{_.position.set(e(m),r+.01,f),_.rotation.y=e(1)>0?E:-E,n.add(_)};Zn(n,0,-.5,9.2,11.8,yt(d.tex.piso("madeira","#B98450","#A8763F")),r+.005),Yn(n,0,-.5,9.2,11.8,r+2.8-.01),Kt(n,e(-4.7),0,e(4.7),0,{y:r,h:2.8,t:.12,corA:l,corB:l,semCol:!0,vaos:[{a:4.2,b:5}]}),g(Ts(1.4,Ht(p,["#C84E4E","#3E7CC8","#8E6CC4"])),2.6,1.9,0),g(eo("#7A5233",!0,d),1.6,1),g(ws(1.6),-.4,.35,0),g(Fi(1.2,"#F4F1EA",!0,n.L.seed+1),-3.4,-6.1,0),g(ji(),-3.4,-5.4,Math.PI),g(Uh(1.2,1.8,"#9A6236",n.L.seed+9),-4.35,-2.5,Math.PI/2),g(Ts(.95,Ht(p,["#2E9C6A","#F2C230"])),3.9,-4.8,0),g(Ba(1.6,t.sofa),-.8,4.7,Math.PI),g(Ss(d,2.8-.01),0,3)}else n.add(D(9.2,2.6,11.8,"#3A3540",0,r+1.3,-.5,{shadow:!1}))}var Gh=["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F08A2C","#8E6CC4","#F2546E","#4FB8A0","#F4F1EA","#2A2A30"];function fn(n=2,t=2,e=.45,i=0,s="misto",r="#F4F1EA"){let o=new q,a=$t(i*7+3);o.userData.pe=[n,e],o.add(D(n,t,.04,r,0,t/2,-e/2+.02));for(let c of[-1,1])o.add(D(.04,t,e,r,c*(n/2-.02),t/2,0,{out:.01}));let l=Math.max(3,Math.round(t/.45));for(let c=0;c<l;c++){let h=.08+c*(t-.1)/l;o.add(D(n-.06,.03,e,r,0,h,0,{out:.006}));let u=-n/2+.07,d=(t-.1)/l-.06;for(;u<n/2-.12;){let p=s==="misto"?Ht(a,["caixa","lata","garrafa","caixa"]):s,g=Ht(a,Gh);if(p==="caixa"){let _=.1+a()*.12,m=Math.min(d,.14+a()*.18);o.add(D(_,m,e*.7,g,u+_/2,h+.015+m/2,0)),u+=_+.01}else if(p==="lata"){let _=.045+a()*.03,m=Math.min(d,.12+a()*.1);for(let f=0;f<2;f++)o.add(J(_,_,m,g,u+_,h+.015+m/2,-e*.2+f*e*.4,{seg:10}));u+=_*2+.01}else if(p==="garrafa"){let m=Math.min(d-.05,.22+a()*.08);o.add(J(.04,.04,m,g,u+.04,h+.015+m/2,0,{seg:8})),o.add(J(.015,.03,.07,g,u+.04,h+.015+m+.035,0,{seg:8})),u+=.04*2+.015}else if(p==="pao"){let _=.16+a()*.06,m=At(new jt(1,10,6),Ht(a,["#D99A4E","#C98A3E","#E8B060"]),{out:.006});m.scale.set(_/2,.055,.09),m.position.set(u+_/2,h+.07,(a()-.5)*.1),o.add(m),u+=_+.02}else if(p==="remedio"){let _=.06+a()*.05,m=Math.min(d,.08+a()*.07);o.add(D(_,m,.1,Ht(a,["#F4F1EA","#E2443A","#3E7CC8","#5AA84E","#F2C230","#F2546E"]),u+_/2,h+.015+m/2,e/2-.1)),u+=_+.008}else p==="tinta"?(o.add(J(.12,.12,.26,g,u+.12,h+.145,0,{seg:12,out:.006})),o.add(J(.12*.95,.12*.95,.01,"#C9CED6",u+.12,h+.28,0,{seg:12})),u+=.12*2+.03):u+=.1}}return o}function Bn(n=2.4,t="#B87A4A",e="#F4F1EA",i=!1){let s=new q;if(s.userData.pe=[n,.7],s.add(Q(n,.95,.65,t,0,.475,0,{out:.012,r:.02})),s.add(D(n+.06,.05,.72,e,0,.97,0,{out:.01})),i){let r=new Vt({color:"#CFE6F2",transparent:!0,opacity:.3,depthWrite:!1,side:pe});s.add(At(new le(n-.1,.42,.5),r,{pos:[0,1.21,0],shadow:!1})),s.add(D(n-.1,.02,.5,"#C9CED6",0,1.42,0))}return s}function Di(){let n=new q;return n.add(Q(.4,.12,.36,"#2A2A30",0,.06,0,{out:.01})),n.add(Q(.32,.2,.04,"#2A2A30",0,.25,-.08,{out:.01,rot:[-.3,0,0]})),n.add(D(.26,.14,.01,"#5AA84E",0,.25,-.055).rotateX(-.3)),n.add(Q(.3,.02,.14,"#9AA0A8",0,.13,.08)),n}function zh(n="#E2443A"){let t=new q;return t.userData.pe=[.4,.4],t.add(J(.2,.2,.08,n,0,.76,0,{out:.01,seg:16})),t.add(J(.03,.03,.72,"#9AA0A8",0,.36,0,{seg:8})),t.add(J(.18,.2,.03,"#9AA0A8",0,.015,0,{seg:14})),t.add(At(new Gn(.15,.012,6,16),"#9AA0A8",{pos:[0,.28,0],rot:[Math.PI/2,0,0]})),t}function ts(n="#E2443A",t=0){let e=new q,i=$t(t+4);e.userData.pe=[.75,.7],e.add(Q(.75,2,.7,n,0,1,0,{out:.014,r:.03})),e.add(D(.62,1.5,.02,"#2A3A48",0,1,.35));for(let r=0;r<5;r++)for(let o=0;o<6;o++)e.add(J(.035,.035,.2,Ht(i,["#E2443A","#F2C230","#5AA84E","#3E7CC8","#F08A2C","#2A2A30"]),-.25+o*.1,.4+r*.29,.3,{seg:8,shadow:!1}));let s=new gt(new Wt(.62,1.5),new Vt({color:"#CFE6F2",transparent:!0,opacity:.25,depthWrite:!1}));return s.position.set(0,1,.362),e.add(s),e.add(D(.7,.3,.02,"#FFFFFF",0,1.88,.352)),e}function Ga(n="#F2C230",t=0){let e=za(n,!1);return e.userData.pe=[2,2],e}function kh(n=1.6,t=0){let e=new q,i=$t(t+11);e.userData.pe=[n,.55];for(let s of[-1,1])e.add(J(.02,.02,1.5,"#9AA0A8",s*n/2,.75,0,{seg:6})),e.add(D(.04,.03,.5,"#9AA0A8",s*n/2,.02,0));e.add(D(n,.025,.025,"#9AA0A8",0,1.5,0));for(let s=-n/2+.1;s<n/2-.05;s+=.11){let r=Ht(i,Gh);e.add(Q(.07,.7,.45,r,s,1.1,0,{r:.02}))}return e}function Tf(n="#E2443A"){let t=new q;return t.userData.pe=[.5,.5],t.add(J(.2,.2,.03,"#2A2A30",0,.015,0)),t.add(J(.02,.02,.8,"#9AA0A8",0,.4,0,{seg:6})),t.add(Q(.4,.6,.22,n,0,1.1,0,{out:.01,r:.08})),t.add(ve(.12,"#F4F1EA",0,1.55,0,{out:.01})),t}function $v(n=4,t=0){let e=new q;e.userData.pe=[n,1];let i=fn(n,1.7,.45,t,"misto");i.position.z=.26;let s=fn(n,1.7,.45,t+50,"misto");return s.rotation.y=Math.PI,s.position.z=-.26,e.add(i,s),e.add(D(n,.3,.3,"#F2C230",0,1.95,0)),e}function Jv(n=0){let t=new q;return t.userData.pe=[.9,2.4],t.add(Q(.8,.9,2.2,"#F4F1EA",0,.45,0,{out:.012})),t.add(D(.6,.02,1.4,"#2A2A30",0,.91,.3)),t.add(Di().translateX(0).translateY(.92).translateZ(-.7)),t.add(J(.03,.03,1.4,"#9AA0A8",.35,1.6,-.9,{seg:6})),t.add(Q(.3,.3,.05,"#E2443A",.35,2.3,-.9,{out:.01})),t}function Kv(){let n=new q;n.userData.pe=[.55,.9];let t="#C9CED6";n.add(D(.5,.4,.75,t,0,.7,0,{out:.01})),n.add(D(.46,.36,.71,"#E2443A",0,.7,0)),n.add(D(.5,.03,.03,"#E2443A",0,1,-.45));for(let[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(D(.03,.5,.03,t,e*.22,.25,i*.3)),n.add(J(.05,.05,.04,"#2A2A30",e*.22,.05,i*.3,{rot:[0,0,Math.PI/2],seg:10}));return n}function Qv(n=0){let t=new q,e=$t(n+31);t.userData.pe=[1.6,.9],t.add(Q(1.6,.7,.9,"#9A6236",0,.35,0,{out:.012}));let i=D(1.6,.05,.9,"#7A5233",0,.72,0);i.rotation.x=.25,t.add(i);for(let s=0;s<4;s++){let r=["#E2443A","#F2C230","#5AA84E","#F08A2C"][s];for(let o=0;o<12;o++)t.add(ve(.06,r,-.6+s*.4+(e()-.5)*.25,.82+o%3*.04-o/12*.1,-.3+o/12*.6,{seg:8}))}return t}function jv(){let n=new q;n.userData.pe=[.8,.7],n.add(Q(.75,1.6,.65,"#E8E4DC",0,.8,0,{out:.012})),n.add(D(.65,.25,.02,"#2E6FB8",0,1.5,.33));let t=new gt(new Wt(.36,.26),new De({color:"#7FB2E8"}));return t.position.set(0,1.18,.335),t.rotation.x=-.2,n.add(t),n.add(D(.3,.12,.2,"#9AA0A8",0,.98,.38)),n.add(D(.2,.02,.02,"#2A2A30",0,.82,.33)),n}function es(n=4,t="#3E7CC8"){let e=new q;e.userData.pe=[n*.55,.6],e.add(D(n*.55,.04,.05,"#8D949C",0,.3,0));for(let i of[-1,1])e.add(D(.04,.3,.4,"#8D949C",i*(n*.55/2-.1),.15,0));for(let i=0;i<n;i++){let s=-n*.55/2+.275+i*.55;e.add(Q(.48,.06,.44,t,s,.46,0,{out:.01})),e.add(Q(.48,.44,.06,t,s,.72,-.2,{out:.01,rot:[-.1,0,0]})),e.add(D(.04,.16,.04,"#8D949C",s,.37,0))}return e}function io(n,t=0){let e=new q;e.add(Q(.8,.4,.08,"#2A2A30",0,0,0,{out:.01}));let i=document.createElement("canvas");i.width=256,i.height=128;let s=i.getContext("2d"),r=new Yi(i);r.colorSpace=Je;let o=new gt(new Wt(.7,.32),new De({map:r}));o.position.z=.045,o.userData.vivo=!0,e.add(o);let a=-1;return n.vivos.push(l=>{let c=120+Math.floor((l+t)/9)%80;c!==a&&(a=c,s.fillStyle="#100808",s.fillRect(0,0,256,128),s.fillStyle="#FF5A3A",s.font="900 34px Inter, Arial",s.textAlign="center",s.fillText("SENHA",128,40),s.font="900 64px Inter, Arial",s.fillText("A"+c,128,108),r.needsUpdate=!0)}),e}function t_(){let n=new q;n.userData.pe=[2.4,1.4],n.add(Q(2.3,.25,1.3,"#7A5233",0,.7,0,{out:.014})),n.add(D(2,.02,1,"#2E8A4A",0,.83,0));for(let[i,s]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(D(.14,.6,.14,"#7A5233",i*1,.3,s*.5));let t=$t(5);for(let i=0;i<9;i++)n.add(ve(.03,Ht(t,Gh),-.3+i%3*.07+(t()-.5)*.3,.87,-.2+Math.floor(i/3)*.07,{seg:8}));n.add(ve(.03,"#FFFFFF",.6,.87,0,{seg:8}));let e=J(.012,.02,1.4,"#D9B07A",.2,.9,.3,{seg:6});return e.rotation.z=Math.PI/2-.05,n.add(e),n}function Ii(n,t,e,i="#2A2A30"){let s=ce(512,Math.round(512*t/n),(r,o,a)=>{r.fillStyle=i,r.fillRect(0,0,o,a),r.strokeStyle="#F2C230",r.lineWidth=8,r.strokeRect(10,10,o-20,a-20),r.fillStyle="#FFFFFF",r.textBaseline="middle";let l=(a-60)/e.length;e.forEach(([c,h],u)=>{r.font=`700 ${Math.min(40,l*.5)}px Inter, Arial`,r.textAlign="left",r.fillText(c,30,40+l*(u+.5)),r.textAlign="right",r.fillStyle="#F2C230",r.fillText(h,o-30,40+l*(u+.5)),r.fillStyle="#FFFFFF"})});return new gt(new Wt(n,t),new De({map:s}))}var e_={padaria:{nome:"PADARIA P\xC3O DA SERRA",sub:"p\xE3es \u2022 doces \u2022 caf\xE9",fundo:"#C9874E",toldo:["#C84E4E","#F4F1EA"],ext:"#F2E2C4",int:"#FFF3DC",piso:["xadrez","#F4F1EA","#C84E4E"]},farmacia:{nome:"DROGARIA SERRANA",sub:"aberta 24 horas",fundo:"#2E9C6A",toldo:["#2E9C6A","#F4F1EA"],ext:"#F4F1EA",int:"#F4FAF6",piso:["ceramica","#F4F1EA","#DDE6E0"]},loterica:{nome:"LOT\xC9RICA TREVO DA SORTE",sub:"jogos \u2022 contas",fundo:"#2E6FB8",toldo:["#F2C230","#2E6FB8"],ext:"#DDE8F2",int:"#F2F6FA",piso:["ceramica","#EDEAE2","#D6D0C4"]},lanchonete:{nome:"LANCHONETE DO Z\xC9",sub:"x-tudo \u2022 pastel \u2022 suco",fundo:"#E2443A",toldo:["#F2C230","#E2443A"],ext:"#F6E7A6",int:"#FFF6E0",piso:["xadrez","#F4F1EA","#2A2A30"]},banco:{nome:"BANCO DA SERRA",sub:"ag\xEAncia 0412",fundo:"#1F4E86",toldo:null,ext:"#DDE3EA",int:"#F2F4F7",piso:["granilite","#E4E2DC","#8D949C"]},mercado:{nome:"SUPERMERCADO BOM PRE\xC7O",sub:"ofertas todo dia",fundo:"#E2443A",toldo:["#E2443A","#F2C230"],ext:"#F4F1EA",int:"#F7F6F2",piso:["ceramica","#EDEAE2","#D6D0C4"]},sorveteria:{nome:"SORVETERIA GELATO",sub:"a\xE7a\xED \u2022 picol\xE9 \u2022 sorvete",fundo:"#F2546E",toldo:["#F2546E","#F4F1EA"],ext:"#F7E3EC",int:"#FFF4F8",piso:["xadrez","#F4F1EA","#8FD3F2"]},lojaRoupas:{nome:"BOUTIQUE ESTILO",sub:"moda feminina e masculina",fundo:"#8E6CC4",toldo:["#8E6CC4","#F4F1EA"],ext:"#EDE3F7",int:"#FBF8FF",piso:["madeira","#D9B07A","#C8935E"]},bar:{nome:"BAR DO TONHO",sub:"futebol \u2022 petisco \u2022 sinuca",fundo:"#2E7A5A",toldo:["#2E7A5A","#F2C230"],ext:"#CFE3D2",int:"#F2F0E4",piso:["ceramica","#C9874E","#B5703E"]},lojaMateriais:{nome:"MATERIAIS S\xC3O JOS\xC9",sub:"constru\xE7\xE3o \u2022 tintas \u2022 ferragens",fundo:"#F08A2C",toldo:["#F08A2C","#2A2A30"],ext:"#F2D8A8",int:"#F4EEE2",piso:["granilite","#D6D0C4","#8D949C"]}};function wf(n){return(t,e)=>{let i=e_[n],s=t.L,r=t.cidade,o=e==="perto",a=s.w-.3,l=$t(s.seed+3),c=-2,h=s.d/2-.1,u=h-c,d=4,p=(c+h)/2,g=-a/2,_=a/2,m=i.ext,f=o?i.int:null,E=yt(en(Xn("#CFC9BF","#C4BDB2"),s.w,s.d/2+c));t.add(Ze(s.w,s.d/2+c,E,0,.015,(-s.d/2+c)/2));for(let[M,w,F,P]of[[-s.w/2+.075,-s.w/2+.075,-s.d/2,c],[s.w/2-.075,s.w/2-.075,-s.d/2,c],[-s.w/2,s.w/2,-s.d/2+.075,-s.d/2+.075]]){let C=Math.abs(w-M)||.15,B=Math.abs(P-F)||.15;t.add(Wn(C,2.2,B,Un(m),(M+w)/2,1.1,(F+P)/2,1,{out:.012})),t.col((M+w)/2,(F+P)/2,C,B,{h:2.2})}if(e!=="longe")for(let M=0;M<4;M++)t.add(Q(.6,.5+M%2*.3,.6,Ht(l,["#9A6236","#C9874E","#7A8696"]),-s.w/2+1+M*.75,.3,-s.d/2+.8,{out:.01}));let y=["farmacia","loterica","lanchonete","sorveteria","lojaRoupas","bar"].includes(n)&&s.seed%2===0;Kt(t,g,c,g,h,{h:d,t:.2,corA:m,corB:f}),Kt(t,_,c,_,h,{h:d,t:.2,corA:f,corB:m});let v=n==="mercado"?5:n==="banco"?2:3.4,A=n==="mercado"?0:g+1.2+v/2;Kt(t,g,c,_,c,{h:d,t:.2,corA:m,corB:f,vaos:o?[{a:a-1.6,b:a-.8}]:[]});let S=n==="banco"?[]:[{a:A+v/2-g+.6,b:a-.5,y0:.6,y1:2.8}];n==="mercado"&&(S.length=0,S.push({a:.5,b:a/2-3,y0:.6,y1:2.8},{a:a/2+3,b:a-.5,y0:.6,y1:2.8}));let T=[{a:A-v/2-g,b:A+v/2-g,y0:0,y1:3},...S];n==="banco"&&T.push({a:.6,b:A-v/2-g-.6,y0:.4,y1:3.2},{a:A+v/2-g+.6,b:a-.6,y0:.4,y1:3.2}),Kt(t,g,h,_,h,{h:d,t:.2,corA:f,corB:m,vaos:T,rodape:o?"#E8E4DC":null,semRodape:m});for(let M of T.slice(1))nn(t,g+(M.a+M.b)/2,h,!0,M.b-M.a,M.y0,M.y1,{t:.2,fora:1,cortina:!1,moldura:"#2A2A30",seed:s.seed});if(o&&ze(t,"fundos",_-1.2,c,!0,.8,{t:.2,dobra:1,abre:-1,cor:"#8D949C"}),n==="banco")ze(t,"entrada1",A-.5,h,!0,1,{t:.2,tipo:"vidro",cor:"#C9CED6",dobra:-1,abre:-1}),ze(t,"entrada2",A+.5,h,!0,1,{t:.2,tipo:"vidro",cor:"#C9CED6",dobra:1,abre:-1});else{t.add(Q(v+.2,.45,.35,"#8D949C",A,3.25,h+.12,{out:.012}));for(let M=0;M<3;M++)t.add(D(v,.04,.02,"#6E747C",A,3.08+M*.1,h+.3))}let b=new gt(new Wt(a-.6,1),new Vt({map:_e(i.nome,{fundo:i.fundo,sub:i.sub,w:1024,h:180,borda:"#FFFFFF"}),emissive:"#FFFFFF",emissiveMap:_e(i.nome,{fundo:i.fundo,sub:i.sub,w:1024,h:180,borda:"#FFFFFF"}),emissiveIntensity:0}));if(b.position.set(0,4.05,h+.115),b.scale.y=.9,t.add(b),r.acender(b.material,.9),t.add(D(a-.4,1,.1,"#2A2A30",0,4.05,h+.06,{shadow:!1})),i.toldo){let M=n_(a-.6,i.toldo);M.position.set(0,3,h+.1),t.add(M)}if(n==="farmacia"){let M=new q,w=new Vt({color:"#2EBF6A",emissive:"#2EBF6A",emissiveIntensity:.2});M.add(At(new le(.7,.22,.1),w)),M.add(At(new le(.22,.7,.1),w)),M.position.set(_-.2,3,h+.6),M.rotation.y=Math.PI/2,t.add(M),t.add(D(.06,.06,.5,"#8D949C",_-.2,3,h+.3)),r.vivos.push(F=>{w.emissiveIntensity=.2+(r.n||0)*1.4*(Math.sin(F*3)>0?1:.4)})}if(y){let M=d;Kt(t,g,c,g,h,{y:M,h:2.8,t:.2,corA:m,corB:"#3A3540",semCol:!0}),Kt(t,_,c,_,h,{y:M,h:2.8,t:.2,corA:"#3A3540",corB:m,semCol:!0}),Kt(t,g,c,_,c,{y:M,h:2.8,t:.2,corA:m,corB:"#3A3540",semCol:!0}),Kt(t,g,h,_,h,{y:M,h:2.8,t:.2,corA:"#3A3540",corB:m,semCol:!0,vaos:[{a:1.2,b:2.6,y0:.9,y1:2.2},{a:a-2.6,b:a-1.2,y0:.9,y1:2.2}]}),nn(t,g+1.9,h,!0,1.4,M+.9,M+2.2,{t:.2,fora:1,seed:s.seed+1,cortina:"#F7D9E3",duplo:!1}),nn(t,_-1.9,h,!0,1.4,M+.9,M+2.2,{t:.2,fora:1,seed:s.seed+2}),t.add(D(a-.2,2.6,u-.4,"#3A3540",0,M+1.4,p,{shadow:!1}));for(let w of[-1,1])t.add(D(1.6,.1,.5,"#E8E4DC",w*(a/2-1.9),M+.85,h+.3))}let x=y?d+2.8:d;if(t.add(D(a+.1,.15,u+.2,"#C9C2B6",0,x+.07,p)),Ki(t,0,p,a,u,x,m,{alt:y?.9:1}),o){Zn(t,0,p,a-.2,u-.2,yt(r.tex.piso(...i.piso)),.02),Yn(t,0,p,a-.2,u-.2,d-.01);for(let M of[[-a/4,p-2],[a/4,p-2],[-a/4,p+3],[a/4,p+3]]){let w=new Vt({color:"#FFFFFF",emissive:"#F4F8FF",emissiveIntensity:.5});t.add(At(new le(1.2,.05,.25),w,{pos:[M[0],d-.04,M[1]],shadow:!1}))}}else t.add(D(a-.4,d-.4,u-.4,"#3A3540",0,d/2,p,{shadow:!1}));o&&s_[n]?.(t,{W:a,z0:c,z1:h,H:d,R:l,C:r,pc:A,portaW:v});for(let[M,w,F,P]of i_[n]?.({W:a,z0:c,z1:h})||[])t.figurante(M,w,F,P||{});t.ponto("entrada",A,h+1.2,Math.PI),t.pontoLivre("dentro",[[A,h-1.2],[A,h-2.2],[A+1,h-1.2],[A-1,h-1.5],[0,h-1.2],[0,h-3]],Math.PI)}}function n_(n,[t,e]){let i=ce(512,128,a=>{for(let l=0;l<16;l++)a.fillStyle=l%2?e:t,a.fillRect(l*32,0,32,128);a.fillStyle="rgba(0,0,0,.12)",a.fillRect(0,110,512,18)});i.wrapS=An,i.repeat.set(n/4,1);let s=new q,r=new gt(new Wt(n,1.3),yt(i));r.material.side=pe,r.rotation.x=-Math.PI/2+.5,r.position.set(0,-.3,.55),r.castShadow=!0,s.add(r);let o=new gt(new Wt(n,.25),yt(i));return o.material.side=pe,o.position.set(0,-.75,1.12),s.add(o),s}var Rs=n=>({sentado:!0,assento:n}),i_={padaria:({z0:n,z1:t})=>[[.5,n+3.3,0],[-1.8+.65,t-2.6,-Math.PI/2,Rs(.8)],[1.5,n+5.4,Math.PI]],farmacia:({z0:n})=>[[0,n+1.6,0],[.4,n+3.4,Math.PI]],loterica:({z0:n})=>[[-2.5,n+2.2,0],[2.5,n+2.2,0],[0,n+4.3,Math.PI],[0,n+5.3,Math.PI]],lanchonete:({z0:n})=>[[-.3,n+2.2,0],[-1.3,n+3.75,Math.PI,Rs(.8)],[.7,n+3.75,Math.PI,Rs(.8)]],banco:({W:n,z0:t,z1:e})=>[[-1,t+1.6,0],[3,t+1.6,0],[.6-1.1,(t+e)/2+.85,Math.PI,Rs(.49)],[.6+.55,(t+e)/2+2.25,Math.PI,Rs(.49)],[1,t+3.3,Math.PI]],mercado:({W:n,z1:t})=>[[-n/2+2.8,t-3.2,-Math.PI/2],[-n/2+5,t-3.2,-Math.PI/2],[-n/2+3.5,t-2.2,Math.PI],[4,t-6,Math.PI/2]],bar:({z0:n,z1:t})=>[[-.4,n+2,0],[-1,n+3.55,Math.PI,Rs(.8)],[.1,n+3.55,Math.PI,Rs(.8)],[2.6,t-4.2,-Math.PI/2]],sorveteria:({z0:n})=>[[0,n+2.2,0],[.6,n+4.2,Math.PI]],lojaRoupas:({W:n,z0:t})=>[[n/2-1.6,t+1.7,0],[-1,t+5,Math.PI/2]],lojaMateriais:({z0:n})=>[[0,n+2.2,0],[.8,n+4,Math.PI]]},Rt=(n,t,e,i,s=0,r=!0)=>{t.position.set(e,.02,i),t.rotation.y=s,n.add(t);let o=t.userData.pe;if(r&&o){let a=Math.abs(Math.round(Math.sin(s)))===1;n.col(e,i,a?o[1]:o[0],a?o[0]:o[1],{h:1.2})}return t},Te=(n,t,e,i,s,r=0)=>(t.position.set(e,i,s),t.rotation.y=r,n.add(t),t),s_={padaria(n,{W:t,z0:e,z1:i,R:s,C:r}){Rt(n,Bn(4.2,"#B87A4A","#F4F1EA",!0),.5,e+4.2,0),Te(n,Di(),2.2,1,e+4.2,0);for(let c=0;c<4;c++)for(let h=0;h<6;h++){let u=ve(.08,Ht(s,["#F2546E","#F2C230","#8E5A3A","#F4F1EA"]),-.9+h*.35,1.08,e+4.2+(c-1.5)*.1,{seg:8});n.add(u)}Rt(n,fn(4.6,2.2,.45,1,"pao","#C9874E"),.2,e+.35,0),Rt(n,ts("#E2443A",1),-t/2+.5,e+6.5,Math.PI/2);let o=new q;o.add(Q(.6,.5,.45,"#C9CED6",0,.25,0,{out:.01})),o.add(J(.05,.05,.12,"#2A2A30",-.1,.12,.2,{seg:8})),Te(n,o,-1.4,1,e+4.2);for(let c=0;c<2;c++){let h=new q;h.userData.pe=[.7,.7],h.add(J(.35,.35,.04,"#F4F1EA",0,1.05,0,{out:.01})),h.add(J(.04,.04,1.05,"#8D949C",0,.52,0,{seg:8})),Rt(n,h,-1.8+c*3.2,i-2.6);for(let u of[-1,1])Rt(n,zh("#C84E4E"),-1.8+c*3.2+u*.65,i-2.6,0)}Te(n,Ii(2.2,1.2,[["P\xE3o franc\xEAs","R$ 0,90"],["Caf\xE9 com leite","R$ 5,00"],["P\xE3o de queijo","R$ 4,50"],["Bolo (fatia)","R$ 7,00"],["Coxinha","R$ 6,00"]]),2.6,2.6,e+.12),Rt(n,fn(2.4,1.5,.8,5,"misto","#C9874E"),t/2-.5,e+7,-Math.PI/2);let a=new q;a.userData.pe=[1.6,1],a.add(Q(1.6,.9,1,"#B87A4A",0,.45,0,{out:.012}));for(let c=0;c<3;c++)a.add(J(.22,.24,.14,Ht(s,["#8E5A3A","#F2C230","#F4F1EA"]),-.5+c*.5,.97,0,{out:.01})),a.add(J(.27,.27,.02,"#F4F1EA",-.5+c*.5,.91,0));Rt(n,a,-t/2+1.1,e+7.6);let l=new q;l.add(Q(1.4,1.6,.8,"#8D949C",0,.8,0,{out:.012})),l.add(D(1,.6,.02,"#2A2A30",0,1,.41)),Rt(n,Object.assign(l,{userData:{pe:[1.4,.8]}}),t/2-1,e+.6)},farmacia(n,{W:t,z0:e,z1:i}){Rt(n,fn(t-2.6,2.2,.4,20,"remedio"),-.8,e+.3,0),Rt(n,fn(6,2,.4,24,"remedio"),-t/2+.3,(e+i)/2-1,Math.PI/2),Rt(n,fn(6,2,.4,25,"misto"),t/2-.3,(e+i)/2-1,-Math.PI/2),Rt(n,Bn(3.2,"#2E9C6A","#F4F1EA"),0,e+2.4,0),Te(n,Di(),1.1,1,e+2.4),Rt(n,fn(1.6,1.4,.5,26,"misto"),0,(e+i)/2+2,0);let s=new q;s.userData.pe=[.6,.6],s.add(D(.5,.08,.5,"#F4F1EA",0,.04,0,{out:.01})),s.add(J(.03,.03,1.1,"#C9CED6",0,.6,-.2,{seg:8})),s.add(Q(.3,.3,.1,"#2E9C6A",0,1.2,-.2,{out:.01})),Rt(n,s,t/2-1,i-1.5)},loterica(n,{W:t,z0:e,z1:i,C:s,R:r}){Rt(n,Bn(t-.6,"#2E6FB8","#F4F1EA",!1),0,e+3,0);let o=new Vt({color:"#CFE6F2",transparent:!0,opacity:.3,depthWrite:!1,side:pe});n.add(At(new Wt(t-.6,1.4),o,{pos:[0,1.7,e+3.2],shadow:!1}));for(let l=0;l<3;l++)Te(n,Q(.5,.3,.02,"#F2C230",0,0,0,{out:.006}),-2.5+l*2.5,2.6,e+3.25),Te(n,Di(),-2.5+l*2.5,.99,e+2.9,Math.PI);Te(n,io(s,3),0,3.1,e+3.25),Te(n,Ii(2.6,1,[["MEGA DA SERRA","R$ 5,00"],["QUINA","R$ 2,50"],["LOTOF\xC1CIL","R$ 3,00"]],"#1F4E86"),-t/2+.12,2.2,(e+i)/2+2,Math.PI/2);let a=new q;a.userData.pe=[2.2,.6],a.add(D(2.2,.05,.5,"#F4F1EA",0,1.05,0,{out:.01})),a.add(D(2.1,1,.05,"#2E6FB8",0,.52,0)),Rt(n,a,t/2-1.4,(e+i)/2+2.5,-Math.PI/2),Rt(n,es(4,"#2E6FB8"),-t/2+.5,(e+i)/2+1,Math.PI/2),Te(n,Ii(1.6,1,[["ACUMULOU!",""],["R$ 45 MILH\xD5ES",""]],"#2E9C6A"),t/2-.12,2.4,(e+i)/2-1.2,-Math.PI/2),Rt(n,on(1.2,6),t/2-.6,i-.7),Te(n,Qi(s,.25),0,3.4,e+3.26)},lanchonete(n,{W:t,z0:e,z1:i,C:s,R:r}){Rt(n,Bn(5,"#E2443A","#F4F1EA"),-.3,e+3,0);for(let l=0;l<5;l++)Rt(n,zh("#F2C230"),-2.3+l*1,e+3.75,0,!1);let o=new q;o.add(D(1.4,.9,.7,"#8D949C",0,.45,0,{out:.012})),o.add(D(1.3,.04,.6,"#2A2A30",0,.92,0));for(let l=0;l<3;l++)o.add(J(.1,.1,.05,"#8E5A3A",-.4+l*.4,.96,0,{seg:12}));Rt(n,Object.assign(o,{userData:{pe:[1.4,.7]}}),-1.2,e+.5),Rt(n,ts("#E2443A",2),1.4,e+.45),Rt(n,ts("#2E6FB8",3),2.3,e+.45),Te(n,Ii(3,1.3,[["X-TUDO","R$ 22"],["X-SALADA","R$ 18"],["PASTEL","R$ 9"],["SUCO NATURAL","R$ 8"],["REFRIGERANTE","R$ 6"]],"#2A2A30"),-.6,2.6,e+.12);for(let l=0;l<2;l++)Rt(n,Ga(Ht(r,["#E2443A","#F2C230"]),l),-1.8+l*3.6,i-2.4,0);let a=r_(s,-1.2,1.4,e+.5);n.add(a)},banco(n,{W:t,z0:e,z1:i,C:s}){for(let c=0;c<3;c++)Rt(n,jv(),-t/2+1+c*1,i-2.2,Math.PI/2*0+Math.PI);Rt(n,Bn(t-4,"#1F4E86","#E8E4DC"),1.2,e+2.4,0);let r=new Vt({color:"#CFE6F2",transparent:!0,opacity:.3,depthWrite:!1,side:pe});n.add(At(new Wt(t-4,1),r,{pos:[1.2,1.5,e+2.3],shadow:!1}));for(let c=0;c<3;c++)Te(n,Di(),-1+c*2,.99,e+2.1,Math.PI);Te(n,io(s,7),t/2-1.5,3,e+.12),Rt(n,es(5,"#1F4E86"),.6,(e+i)/2+.8,Math.PI),Rt(n,es(5,"#1F4E86"),.6,(e+i)/2+2.2,Math.PI),Rt(n,on(1.4,3),t/2-.6,i-.8),Rt(n,on(1.4,4),-t/2+.6,e+.6),Te(n,Ii(2.4,.5,[["ATENDIMENTO 10h \xE0s 16h",""]],"#1F4E86"),-2,2.9,e+.12);let o=new gt(new Wt(3.2,1.1),yt(_e("BANCO DA SERRA",{fundo:"#1F4E86",sub:"seu dinheiro em boas m\xE3os",w:1024,h:340,borda:"#F2C230"})));o.position.set(-t/2+.12,2.6,(e+i)/2-.5),o.rotation.y=Math.PI/2,n.add(o),Te(n,wn(1.6,1,21,"paisagem"),t/2-.12,2.2,(e+i)/2-.5,-Math.PI/2);for(let c=0;c<2;c++){let h=new q;h.add(J(.18,.2,.04,"#9AA0A8",0,.02,0)),h.add(J(.03,.03,1,"#9AA0A8",0,.5,0,{seg:8})),h.add(ve(.05,"#9AA0A8",0,1.02,0)),Te(n,h,-1.6+c*3.6,.02,e+4.2)}let a=D(3.6,.05,.02,"#E2443A",.2,.95,e+4.2);n.add(a),Rt(n,on(1.3,9),-t/2+.6,(e+i)/2+3),Rt(n,on(1.3,10),t/2-.6,e+.6);let l=Fi(1.4,"#7A5233",!0,2);l.userData.pe=[1.4,.6],Rt(n,l,t/2-1.3,(e+i)/2-1.5,-Math.PI/2),Rt(n,ji(),t/2-.55,(e+i)/2-1.5,-Math.PI/2,!1),Rt(n,Er("#1F4E86"),t/2-2.3,(e+i)/2-1.2,Math.PI/2,!1)},mercado(n,{W:t,z0:e,z1:i,R:s}){for(let o=0;o<4;o++)Rt(n,$v(6,o*9),-t/2+3.5+o*3.6,(e+i)/2-1.5,Math.PI/2);Rt(n,fn(t-1.6,2,.45,77,"garrafa"),0,e+.35,0);for(let o=0;o<3;o++)Rt(n,Jv(o),-t/2+2+o*2.2,i-3,0);for(let o=0;o<3;o++)Rt(n,Qv(o),t/2-1.2,i-2.5-o*1.4,-Math.PI/2);for(let o=0;o<4;o++)Rt(n,Kv(),t/2-3.2+o%2*.2,i-1-o*.05,Math.PI/2*(o%2),!1);let r=new q;r.userData.pe=[3,.9],r.add(Q(3,.85,.9,"#F4F1EA",0,.43,0,{out:.012})),r.add(D(2.8,.02,.8,"#8FD3F2",0,.86,0)),Rt(n,r,3,e+1.6);for(let[o,a]of[[-t/2+3.5,"MERCEARIA"],[-t/2+7.1,"BEBIDAS"],[-t/2+10.7,"LIMPEZA"],[-t/2+14.3,"HIGIENE"]]){let l=new gt(new Wt(1.6,.4),new De({map:_e(a,{fundo:"#E2443A",w:384,h:96}),side:pe}));l.position.set(o,3.1,(e+i)/2-1.5),l.rotation.y=Math.PI/2,n.add(l),n.add(D(.02,.9,.02,"#8D949C",o,3.6,(e+i)/2-1.5))}},sorveteria(n,{W:t,z0:e,z1:i,R:s}){let r=new q;r.userData.pe=[4,.9],r.add(Q(4,.95,.85,"#F4F1EA",0,.48,0,{out:.012}));let o=new Vt({color:"#CFE6F2",transparent:!0,opacity:.35,depthWrite:!1});r.add(At(new le(3.8,.35,.7),o,{pos:[0,1.15,0],shadow:!1}));for(let c=0;c<12;c++)r.add(J(.12,.12,.1,Ht(s,["#F2546E","#F2C230","#8E5A3A","#F4F1EA","#5AA84E","#8E6CC4","#8FD3F2"]),-1.65+c%6*.66,1,-.15+Math.floor(c/6)*.3,{seg:12}));Rt(n,r,0,e+3),Rt(n,ts("#F2546E",5),-t/2+.5,e+.5,Math.PI/2),Te(n,Ii(2.6,1.2,[["1 BOLA","R$ 8"],["2 BOLAS","R$ 14"],["A\xC7A\xCD 500ml","R$ 20"],["PICOL\xC9","R$ 5"]],"#F2546E"),0,2.6,e+.12);for(let c=0;c<2;c++)Rt(n,Ga(Ht(s,["#F2546E","#8FD3F2"]),c),-1.8+c*3.6,i-2.4,0);Rt(n,Ga("#8FD3F2",3),-2.4,e+6.6,0);let a=new q;a.userData.pe=[1.4,.8],a.add(Q(1.4,.85,.8,"#F4F1EA",0,.43,0,{out:.012})),a.add(We(1.2,.35,yt(_e("PICOL\xC9",{fundo:"#8FD3F2",cor:"#F2546E"})),0,.55,.41));for(let c=0;c<10;c++)a.add(Q(.08,.2,.03,Ht(s,["#F2546E","#F2C230","#8E5A3A","#5AA84E"]),-.5+c*.11,.95,0,{r:.03}));Rt(n,a,t/2-.7,e+6.2,-Math.PI/2),Te(n,wn(1,1.3,51,"abstrato"),-t/2+.12,2,e+6,Math.PI/2),Rt(n,on(1.2,4),t/2-.6,i-.7);let l=new q;l.add(At(new je(.35,1,12),"#D9B07A",{pos:[0,.5,0],rot:[Math.PI,0,0],out:.014})),l.add(ve(.38,"#F2546E",0,1.15,0,{out:.014})),l.add(ve(.15,"#E2443A",0,1.55,0,{out:.01})),Te(n,l,-t/2+.8,2.4,i-.7)},lojaRoupas(n,{W:t,z0:e,z1:i,R:s}){Rt(n,kh(2.2,1),-t/2+.8,(e+i)/2-2,Math.PI/2),Rt(n,kh(2.2,2),-t/2+.8,(e+i)/2+1.5,Math.PI/2),Rt(n,kh(1.6,3),1.2,(e+i)/2,0),Rt(n,fn(4,2.2,.45,40,"caixa"),0,e+.35,0),Rt(n,Bn(2,"#8E6CC4","#F4F1EA"),t/2-1.6,e+2.5,0),Rt(n,Tf("#F2546E"),1.2,i-1),Rt(n,Tf("#3E7CC8"),2.4,i-1);let r=new q;r.userData.pe=[1.2,1.2],r.add(D(1.2,2.2,.05,"#8E6CC4",0,1.1,-.6,{out:.01})),r.add(D(.05,2.2,1.2,"#8E6CC4",-.6,1.1,0,{out:.01}));let o=Q(1.1,1.9,.03,"#F2C230",0,1.15,.6,{r:.01});r.add(o),Rt(n,r,t/2-.7,(e+i)/2+1);let a=new gt(new Wt(.7,1.6),new Vt({color:"#CFE6F2",emissive:"#9CC9E8",emissiveIntensity:.3}));a.position.set(t/2-.12,1.2,(e+i)/2-2),a.rotation.y=-Math.PI/2,n.add(a)},bar(n,{W:t,z0:e,z1:i,C:s,R:r}){Rt(n,Bn(4.6,"#7A5233","#3A3A44"),-.4,e+2.8,0);for(let l=0;l<4;l++)Rt(n,zh("#2E7A5A"),-2.1+l*1.1,e+3.55,0,!1);Rt(n,fn(4,2,.35,60,"garrafa","#7A5233"),-.4,e+.3,0),Rt(n,ts("#E2443A",9),t/2-.6,e+.5);let o=_r(.01),a=o.userData.tela;o.children.slice(0,3).forEach(l=>l.visible=!1),Te(n,o,-t/2+.2,1.6,e+5,Math.PI/2),s.vivos.push(l=>yr(a,l,3)),Rt(n,t_(),1.2,i-4.2,0),Rt(n,Ga("#F2C230",1),-2.4,i-2,0),Te(n,Ii(2,1,[["CERVEJA","R$ 10"],["POR\xC7\xC3O FRITAS","R$ 25"],["REFRI","R$ 6"]],"#2E7A5A"),t/2-.12,2.4,i-3,-Math.PI/2)},lojaMateriais(n,{W:t,z0:e,z1:i}){Rt(n,fn(t-1.6,2.4,.5,80,"tinta","#8D949C"),0,e+.35,0),Rt(n,fn(6,2.4,.5,81,"tinta","#8D949C"),-t/2+.35,(e+i)/2,Math.PI/2);for(let s=0;s<6;s++){let r=Q(.6,.15,.4,"#B9B3AA",0,0,0,{out:.008});Te(n,r,t/2-1.2,.1+s*.15,i-2.5)}n.col(t/2-1.2,i-2.5,.7,.5);for(let s=0;s<4;s++)for(let r=0;r<3;r++)Te(n,D(.2,.1,.1,"#B5603E",0,0,0),t/2-2.6+r*.22,.06+s*.1,i-4);n.col(t/2-2.4,i-4,.8,.3),Rt(n,Bn(2.4,"#F08A2C","#F4F1EA"),0,e+3,0),Te(n,Di(),.7,1,e+3);for(let s=0;s<5;s++){let r=J(.04,.04,3,"#F4F1EA",0,0,0,{seg:8});r.rotation.z=Math.PI/2,Te(n,r,0,.3+s*.09,i-6)}n.col(0,i-6,3,.3)}};function r_(n,t,e,i){let s=new q;s.position.set(t,e,i),s.userData.vivo=!0;let r=new De({color:"#FFFFFF",transparent:!0,opacity:.25,depthWrite:!1}),o=[];for(let a=0;a<6;a++){let l=new gt(new jt(.12,8,6),r);s.add(l),o.push(l)}return n.vivos.push(a=>o.forEach((l,c)=>{let h=(a*.5+c/6)%1;l.position.set(Math.sin(a+c)*.08,h*1,Math.cos(a*.7+c)*.05),l.scale.setScalar(.6+h*1.3)})),s}function Rf(n,t){let e=n.L,i=n.cidade,s=e.w-.4,r=-7,o=e.d/2-2.5,a=7.6,l=(r+o)/2,c=t==="perto",h="#F2EBDD",u=c?"#F7F2E6":null;n.add(Ze(e.w,e.d,yt(en(i.tex.ondas(),e.w/2,e.d/2)),0,.015,0));for(let f=0;f<4;f++)n.add(D(s*.5,.15,.4,"#E8E4DC",0,.075+f*.15,o+1.6-f*.4,{out:.01}));n.col(-s*.25-.3,o+1,.3,1.5),n.col(s*.25+.3,o+1,.3,1.5),Kt(n,-s/2,r,-s/2,o,{h:a,t:.3,corA:h,corB:u}),Kt(n,s/2,r,s/2,o,{h:a,t:.3,corA:u,corB:h}),Kt(n,-s/2,r,s/2,r,{h:a,t:.3,corA:h,corB:u});let d=[];for(let f=0;f<6;f++){let E=-s/2+1.8+f*(s-3.6)/5;Math.abs(E)<2||d.push({c:E,y0:1,y1:3},{c:E,y0:4.6,y1:6.6})}Kt(n,-s/2,o,s/2,o,{h:a,t:.3,corA:u,corB:h,vaos:[{a:s/2-1.2,b:s/2+1.2,y0:0,y1:3.2},...d.map(f=>({a:f.c-.6+s/2,b:f.c+.6+s/2,y0:f.y0,y1:f.y1}))]});for(let f of d)nn(n,f.c,o,!0,1.2,f.y0,f.y1,{t:.3,fora:1,cortina:"#F3E3C0",seed:f.c*3|0,moldura:"#E8E4DC"});ze(n,"entrada1",-.6,o,!0,1.2,{t:.3,h:3.2,dobra:-1,abre:-1,cor:"#7A5233"}),ze(n,"entrada2",.6,o,!0,1.2,{t:.3,h:3.2,dobra:1,abre:-1,cor:"#7A5233"});for(let f=0;f<6;f++){let E=-s/2+1.5+f*(s-3)/5;n.add(J(.32,.36,a-.2,"#F4F1EA",E,(a-.2)/2+.6,o+1.3,{out:.014,seg:16})),n.col(E,o+1.3,.7,.7,{h:a})}n.add(D(s+.6,.6,2.6,"#F4F1EA",0,a+.3,o+.3,{out:.014}));let p=new Sn;p.moveTo(-s/2-.3,0),p.lineTo(s/2+.3,0),p.lineTo(0,2),p.lineTo(-s/2-.3,0);let g=At(new ar(p,{depth:.4,bevelEnabled:!1}),"#F4F1EA",{pos:[0,a+.6,o+1.2],out:.014});n.add(g);let _=_e("PREFEITURA MUNICIPAL DE PEDRA ALTA",{fundo:"#F4F1EA",cor:"#7A5233",w:1024,h:96,peso:900});n.add(We(s*.8,.5,yt(_),0,a+.3,o+1.62));let m=new gt(new vn(.6,24),yt(ce(128,128,f=>{f.fillStyle="#2E6FB8",f.beginPath(),f.arc(64,64,62,0,7),f.fill(),f.fillStyle="#F2C230",f.beginPath(),f.moveTo(64,14),f.lineTo(112,100),f.lineTo(16,100),f.fill(),f.fillStyle="#9E9A94",f.beginPath(),f.moveTo(64,40),f.lineTo(92,96),f.lineTo(36,96),f.fill()})));m.position.set(0,a+1.25,o+1.61),n.add(m),n.add(D(s+.2,.2,o_(r,o)+.2,"#C9C2B6",0,a+.1,l)),Ki(n,0,l,s,o-r,a,h,{alt:.6});for(let f=0;f<3;f++){let E=-9.5+f*2.6,y=e.d/2-.8;n.add(J(.05,.06,8,"#C9CED6",E,4,y,{seg:8})),n.col(E,y,.2,.2);let v=[["#2E9C4A","#F2C230","#2E6FB8"],["#E2443A","#F4F1EA","#2A2A30"],["#2E6FB8","#F4F1EA","#F2C230"]][f],A=ce(128,80,x=>{x.fillStyle=v[0],x.fillRect(0,0,128,80),x.fillStyle=v[1],x.beginPath(),x.moveTo(64,8),x.lineTo(120,40),x.lineTo(64,72),x.lineTo(8,40),x.fill(),x.fillStyle=v[2],x.beginPath(),x.arc(64,40,18,0,7),x.fill()}),S=new Wt(1.5,.95,12,1),T=new gt(S,new Vt({map:A,side:pe}));T.userData.vivo=!0,T.position.set(E+.78,7.4,y),n.add(T);let b=S.attributes.position.array.slice();i.vivos.push(x=>{let M=S.attributes.position;for(let w=0;w<M.count;w++){let F=(b[w*3]+.75)/1.5;M.setZ(w,Math.sin(x*4+F*5+f)*.12*F)}M.needsUpdate=!0,S.computeVertexNormals()})}c?(Zn(n,0,l,s-.3,o-r-.3,yt(i.tex.piso("granilite","#E8E0D2","#8D949C")),.02),Yn(n,0,l,s-.3,o-r-.3,3.6),Rt(n,Bn(4,"#7A5233","#F4F1EA"),0,r+3,0),Rt(n,es(5,"#7A5233"),-4,o-3,Math.PI),Rt(n,es(5,"#7A5233"),4,o-3,Math.PI),Te(n,wn(1.4,1,3,"paisagem"),0,2.4,r+.17),Rt(n,on(1.5,1),-s/2+.8,o-.8),Rt(n,on(1.5,2),s/2-.8,o-.8),Te(n,io(i,12),3,2.6,r+.17)):n.add(D(s-.6,a-.4,o-r-.6,"#3A3540",0,a/2,l,{shadow:!1})),n.ponto("entrada",0,o+3,Math.PI),n.ponto("escadaria",0,o+1.8,Math.PI)}var o_=(n,t)=>t-n;var de=(n,t,e,i,s=0,r=!0,o=.02)=>{t.position.set(e,o,i),t.rotation.y=s,n.add(t);let a=t.userData.pe;if(r&&a&&a[0]){let l=Math.abs(Math.round(Math.sin(s)))===1;n.col(e,i,l?a[1]:a[0],l?a[0]:a[1],{h:1.2})}return t},Nn=(n,t,e,i,s,r,o=1,a=.015)=>{let l=t.clone();l.wrapS=l.wrapT=An,l.repeat.set(s/o,r/o),l.needsUpdate=!0,n.add(Ze(s,r,yt(l),e,a,i))};function Va(n="#2E7A5A"){let t=new q;t.userData.pe=[1.8,.7];for(let e of[-1,1])t.add(D(.08,.45,.55,"#3A3D44",e*.75,.225,0)),t.add(D(.08,.5,.06,"#3A3D44",e*.75,.7,-.26));for(let e=0;e<3;e++)t.add(Q(1.8,.05,.14,n,0,.47,-.18+e*.17,{out:.008,r:.015}));for(let e=0;e<2;e++)t.add(Q(1.8,.12,.04,n,0,.68+e*.17,-.28,{out:.008,r:.015}));return t}function a_(n="#2E9C6A"){let t=new q;return t.userData.pe=[.45,.45],t.add(J(.2,.17,.75,n,0,.45,0,{out:.01,seg:14})),t.add(J(.04,.04,.45,"#3A3D44",0,.22,0,{seg:8})),t.add(J(.21,.21,.04,"#3A3D44",0,.84,0,{seg:14})),t}function l_(n){let t=new q;t.userData.pe=[.3,.3],t.add(J(.07,.11,3.6,"#2A2C30",0,1.8,0,{out:.01,seg:10})),t.add(J(.18,.14,.2,"#2A2C30",0,3.65,0,{seg:10}));let e=new Vt({color:"#FFF6D8",emissive:"#FFD98A",emissiveIntensity:0});return n.acender(e,2),t.add(At(new Ye(.2,.14,.5,8),e,{pos:[0,4,0],out:.01})),t.add(At(new je(.3,.25,8),"#2A2C30",{pos:[0,4.38,0],out:.01})),n.postes.push([0,4,0]),t.userData.luz=!0,t}function Ff(){let n=new q;return n.userData.pe=[.4,.4],n.add(Q(.35,1,.35,"#C9CED6",0,.5,0,{out:.01})),n.add(J(.15,.12,.1,"#E8E4DC",0,1.05,0,{seg:12})),n}function Pf(n,t){let e=n.cidade,i=22,s=t==="perto",r=$t(42);Nn(n,Mh(),0,0,44,44,2);let o=Ci("#7CC05C");for(let[P,C]of[[-12.5,12.5],[12.5,12.5],[-12.5,-1],[12.5,-1]]){let U=C>5?14:8;n.add(D(14+.3,.2,U+.3,"#C9C2B6",P,.1,C)),Nn(n,o,P,C,14,U,3,.205)}let a=[[-15,16,"ipeRoxo"],[-9,9,"mangueira"],[15,16,"ipeAmarelo"],[9,9,"comum"],[-16,7,"quaresmeira"],[16,7,"ipeRoxo"],[-14,-1,"comum"],[14,-1,"mangueira"],[-9,18,"comum"],[9,18,"ipeRoxo"]];for(let[P,C,B]of a){let U=qn(B,1.2,P*3+C);U.position.set(P,.2,C),n.add(U),n.col(P,C,.7,.7,{h:4})}for(let P of[-20,-16,-12,-8])for(let C of[-1,1]){let B=qn("palmeira",1.25,P*C);B.position.set(C*10.5,0,P),n.add(B),n.col(C*10.5,P,.5,.5,{h:5})}for(let[P,C]of[[-12.5,13],[12.5,13]]){let B=Da(5,2.2,P);B.position.set(P,.2,C),n.add(B),n.col(P,C,5,2.2,{h:.5})}for(let[P,C,B]of[[-3,6,Math.PI/2],[3,6,-Math.PI/2],[-3,18,Math.PI/2],[3,18,-Math.PI/2],[-7,4,Math.PI],[7,4,Math.PI],[-7,20.5,0],[7,20.5,0],[-19,4,Math.PI],[19,4,Math.PI]])de(n,Va(),P,C,B);for(let[P,C]of[[-3,3.5],[3,3.5],[-3,21],[3,21],[-20,4.2],[20,4.2]])de(n,a_(),P,C);for(let[P,C]of[[-3.2,0],[3.2,0],[-3.2,10],[3.2,10],[-3.2,20],[3.2,20],[-10,4.2],[10,4.2],[-20,6],[20,6]]){let B=l_(e),U=e.postes.pop();de(n,B,P,C,0,!0,0);let z=c_(n,P,C);e.postes.push([z[0],4.4,z[1]])}let l=new q;l.position.set(0,0,11);let c=3.6;l.add(J(c+.2,c+.3,.9,"#E8E4DC",0,.45,0,{seg:8,out:.014})),l.add(J(c+.25,c+.25,.06,"#C9C2B6",0,.93,0,{seg:8}));for(let P=0;P<3;P++)l.add(D(2,.3,.5,"#E8E4DC",0,.15+P*.3-0,c+.9-P*.45,{out:.01}));for(let P=0;P<8;P++){let C=P/8*Math.PI*2+Math.PI/8;if(l.add(J(.1,.12,3,"#F4F1EA",Math.cos(C)*c,2.4,Math.sin(C)*c,{seg:10,out:.012})),P!==1&&P!==2){let B=D(2*c*Math.sin(Math.PI/8)-.2,.08,.06,"#F4F1EA",Math.cos(C+Math.PI/8)*c*.93,1.8,Math.sin(C+Math.PI/8)*c*.93);B.rotation.y=-(C+Math.PI/8)+Math.PI/2,l.add(B);for(let U=-3;U<=3;U++){let z=D(.04,.8,.04,"#F4F1EA",Math.cos(C+Math.PI/8)*c*.93+Math.cos(C+Math.PI/8+Math.PI/2)*U*.35,1.35,Math.sin(C+Math.PI/8)*c*.93+Math.sin(C+Math.PI/8+Math.PI/2)*U*.35);l.add(z)}}}let h=At(new je(c+.9,2.2,8),"#C84E4E",{pos:[0,5,0],rot:[0,Math.PI/8,0],out:.02});l.add(h),l.add(J(.05,.05,.9,"#F2C230",0,6.5,0,{seg:6})),l.add(ve(.15,"#F2C230",0,7,0)),l.add(J(c+.3,c+.3,.15,"#F4F1EA",0,3.9,0,{seg:8,out:.012})),n.add(l),n.col(0,11,6.5,6.5,{h:.9,nome:"coreto"});let u=new q;u.position.set(0,0,1.5),u.add(J(2.3,2.4,.6,"#E8E4DC",0,.3,0,{seg:24,out:.014}));let d=new gt(new vn(2.1,24),yt(en(e.tex.agua(),2,2)));d.rotation.x=-Math.PI/2,d.position.y=.5,d.userData.vivo=!0,u.add(d),u.add(J(.3,.4,1.4,"#E8E4DC",0,.9,0,{seg:12,out:.012})),u.add(J(.9,.5,.25,"#E8E4DC",0,1.65,0,{seg:16,out:.012}));let p=new Vt({color:"#BFE6F7",transparent:!0,opacity:.7,emissive:"#8FD3F2",emissiveIntensity:.2}),g=new q;g.userData.vivo=!0,u.add(g);let _=[];for(let P=0;P<14;P++){let C=new gt(new jt(.07,6,4),p);g.add(C),_.push(C)}g.add(At(new Ye(.05,.08,.9,8),p,{pos:[0,2.2,0],shadow:!1})),n.add(u),n.col(0,1.5,4.8,4.8,{h:.6,nome:"fonte"}),e.vivos.push(P=>{d.material.map.offset.set(P*.03,P*.02),_.forEach((C,B)=>{let U=(P*.9+B/14)%1,z=B/14*Math.PI*2;C.position.set(Math.cos(z)*U*.9,2.6+U*.5-U*U*1.7,Math.sin(z)*U*.9)})});let m=new q;m.position.set(-14,.2,12.5),Nn(n,xh(),-14,12.5,7,5,2,.21);let f=new q;f.add(D(.06,2,.06,"#E2443A",-.4,1,-.5)),f.add(D(.06,2,.06,"#E2443A",.4,1,-.5)),f.add(D(.9,.06,.9,"#F2C230",0,1.6,-.5));let E=D(.7,.05,2.6,"#3E7CC8",0,.85,.8);E.rotation.x=.62,f.add(E);for(let P=0;P<5;P++)f.add(D(.8,.04,.04,"#E2443A",0,.3+P*.3,-1));f.position.set(-2,0,0),m.add(f);let y=new q;y.position.set(1.8,0,0);for(let P of[-1,1]){let C=D(.08,2.4,.08,"#2E9C6A",P*1.3,1.15,0);C.rotation.z=P*.12,y.add(C)}y.add(D(2.8,.08,.08,"#2E9C6A",0,2.35,0));let v=[];for(let P of[-1,1]){let C=new q;C.position.set(P*.6,2.35,0),C.userData.vivo=!0,C.add(D(.02,1.8,.02,"#9AA0A8",-.2,-.9,0)),C.add(D(.02,1.8,.02,"#9AA0A8",.2,-.9,0)),C.add(Q(.5,.05,.25,"#F2C230",0,-1.8,0,{out:.008})),y.add(C),v.push(C)}m.add(y);let A=new q;A.position.set(-.2,0,2),A.add(D(.2,.4,.2,"#F2C230",0,.2,0));let S=D(3,.08,.25,"#E2443A",0,.45,0);A.add(S),m.add(A),e.vivos.push(P=>{v.forEach((C,B)=>C.rotation.x=Math.sin(P*2.1+B*1.3)*(B?.35:.15)),S.rotation.z=Math.sin(P*1.4)*.18}),n.add(m),n.col(-16,12.5,2,3),n.col(-12.2,12.5,3,.6);let T=new q;T.position.set(17,.2,19.5),T.add(Q(3.2,2.4,2.2,"#2E6FB8",0,1.2,0,{out:.014})),T.add(D(3.5,.1,2.6,"#1F4E86",0,2.45,0));let b=new gt(new Wt(2.8,.5),yt(_e("BANCA DO JO\xC3O",{fundo:"#F2C230",cor:"#1F4E86"})));b.position.set(0,2.1,1.11),T.add(b);for(let P=0;P<12;P++)T.add(D(.22,.3,.02,Ht(r,["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F2546E","#F4F1EA"]),-1.3+P%6*.5,1+Math.floor(P/6)*.42,1.115));T.add(D(1,.9,.02,"#2A2A30",0,.55,1.111)),n.add(T),n.col(17,19.5,3.2,2.2,{h:2.4});let x=new q;x.position.set(5.5,.02,20.5),x.userData.pe=[1.4,.8],x.add(Q(1.2,.9,.7,"#E2443A",0,.75,0,{out:.012}));let M=new Vt({color:"#FFF6D8",transparent:!0,opacity:.5});x.add(At(new le(1,.6,.6),M,{pos:[0,1.5,0]}));for(let P=0;P<24;P++)x.add(ve(.05,"#FFF6D8",(r()-.5)*.8,1.25+r()*.25,(r()-.5)*.4,{seg:6,shadow:!1}));x.add(D(1.3,.06,.8,"#F2C230",0,1.85,0));for(let P of[-1,1])x.add(J(.25,.25,.05,"#2A2A30",P*.5,.25,.37,{rot:[Math.PI/2,0,0]}));let w=new gt(new Wt(1.1,.3),yt(_e("PIPOCA",{fundo:"#F2C230",cor:"#E2443A"})));w.position.set(0,1,.36),x.add(w),de(n,x,5.5,20.5,0),de(n,Ff(),-5,21);let F=[];for(let P=0;P<8;P++){let C=new q;C.userData.vivo=!0,C.add(ve(.12,"#8D94A8",0,.12,0,{seg:8,out:.008})),C.add(ve(.07,"#6E7488",.1,.22,0,{seg:8})),C.add(At(new je(.025,.06,6),"#F08A2C",{pos:[.17,.21,0],rot:[0,0,-Math.PI/2]})),C.children[0].scale.set(1.3,.9,.9),n.add(C),F.push(C)}e.vivos.push(P=>F.forEach((C,B)=>{let U=B*1.7+Math.floor(P/3+B)*.9,z=3.4+B%3*.5,H=Math.max(0,Math.sin(P*9+B*2))*.06;C.position.set(Math.cos(U)*z+Math.sin(P*.3+B)*.3,.02+H*.3,1.5+Math.sin(U)*z),C.rotation.y=-U+Math.sin(P*2+B)*.8,C.rotation.z=-H*2}));for(let[P,C,B]of[[-3+.05,6.4,Math.PI/2],[3-.05,18,-Math.PI/2],[-7.3,20.6,0],[7,4.05,Math.PI]])n.figurante(P,C,B,{sentado:!0,assento:.5});n.figurante(17,21.6,Math.PI),n.figurante(4.3,20.5,Math.PI/2),h_(n,t),n.ponto("coreto",0,15.5,0),n.ponto("fonte",0,5,0),n.ponto("banco1",-2.2,6,Math.PI/2),n.ponto("banca",17,21.5,0),n.ponto("parquinho",-14,15.5,0),n.ponto("igrejaFrente",0,-2,Math.PI),n.ponto("centro",0,6.5,0)}var c_=(n,t,e)=>{let i=n.L;return[i.x+t,i.z+e]};function h_(n,t){let e=n.cidade,i=t==="perto",s=12,r=-21,o=-5,a=8.5,l="#F4EEDC",c=i?"#FBF6EA":null;for(let v=0;v<4;v++)n.add(D(7,.15,.5,"#E8E4DC",0,.075+v*.15,o+1.7-v*.45,{out:.008}));let h=[];for(let v=0;v<4;v++)h.push({a:2.5+v*3.4,b:3.7+v*3.4,y0:2.6,y1:6.2});Kt(n,-s/2,r,-s/2,o,{h:a,t:.4,corA:l,corB:c,vaos:h}),Kt(n,s/2,r,s/2,o,{h:a,t:.4,corA:c,corB:l,vaos:h}),Kt(n,-s/2,r,s/2,r,{h:a,t:.4,corA:l,corB:c}),Kt(n,-s/2,o,s/2,o,{h:a,t:.4,corA:c,corB:l,vaos:[{a:s/2-1.3,b:s/2+1.3,y0:0,y1:3.8}]});let u=v=>ce(128,256,A=>{let S=$t(v);A.fillStyle="#2A2A30",A.fillRect(0,0,128,256);for(let T=0;T<14;T++)for(let b=0;b<6;b++)A.fillStyle=Ht(S,["#E2443A","#F2C230","#3E7CC8","#5AA84E","#8E6CC4","#F08A2C"]),A.fillRect(6+b*20,6+T*18,17,15);A.fillStyle="#F4F1EA",A.beginPath(),A.arc(64,70,26,0,7),A.fill()});for(let v of[-1,1])for(let A of h){let S=r+(A.a+A.b)/2,T=new Vt({map:u(S*v*7|0),emissive:"#FFFFFF",emissiveMap:u(S*v*7|0),emissiveIntensity:.35,side:pe}),b=new gt(new Wt(1.2,3.6),T);b.position.set(v*s/2,4.4,S),b.rotation.y=Math.PI/2,n.add(b),n.add(D(.5,.1,1.4,"#E8E4DC",v*s/2,2.55,S))}let d=new gt(new vn(.85,24),new Vt({map:u(99),emissive:"#FFFFFF",emissiveMap:u(99),emissiveIntensity:.35,side:pe}));d.position.set(0,5.8,o+.21),n.add(d);let p=d.clone();p.position.z=o-.21,n.add(p),n.add(At(new Gn(.88,.08,8,28),"#E8DCC0",{pos:[0,5.8,o+.22]})),ze(n,"portaA",-.65,o,!0,1.3,{t:.4,h:3.8,dobra:-1,abre:-1,cor:"#7A3A20",aberta:.9,auto:!1}),ze(n,"portaB",.65,o,!0,1.3,{t:.4,h:3.8,dobra:1,abre:-1,cor:"#7A3A20",aberta:.9,auto:!1}),n.add(J(1.3,1.3,.4,l,0,3.8,o,{rot:[Math.PI/2,0,0],seg:20})),Ua(n,0,(r+o)/2,s,o-r,a,{cor:"#B8573A",duas:!0,parede:l,beiral:.5,sobe:3.2});let g=new Sn;g.moveTo(-s/2-.3,0),g.lineTo(s/2+.3,0),g.lineTo(s/2+.3,1.2),g.quadraticCurveTo(s/4,1.6,2,3),g.lineTo(-2,3),g.quadraticCurveTo(-s/4,1.6,-s/2-.3,1.2),g.lineTo(-s/2-.3,0),n.add(At(new ar(g,{depth:.5,bevelEnabled:!1}),Un(l),{pos:[0,a,o-.25],out:.016}));for(let v of[-1,1])n.add(D(.7,a+1.2,.7,"#E8DCC0",v*(s/2+.05),(a+1.2)/2,o+.1,{out:.014})),n.add(ve(.4,"#E8DCC0",v*(s/2+.05),a+1.6,o+.1,{out:.012})),n.col(v*(s/2+.05),o+.1,.7,.7,{h:a});let _=new q;_.position.set(0,a+3,o-.2),_.add(Wn(3.4,5,3.4,Un(l),0,2.5,0,1,{out:.016})),_.add(D(3.8,.3,3.8,"#E8DCC0",0,5.1,0,{out:.012}));for(let[v,A,S]of[[0,1.71,0],[0,-1.71,0],[1.71,0,Math.PI/2],[-1.71,0,Math.PI/2]]){let T=D(S?.05:1.4,2,S?1.4:.05,"#2A2A30",v,3.6,A);_.add(T)}let m=At(new Ye(.25,.55,.8,16,1,!0),"#C9A23A",{out:.012,pos:[0,3.5,0]});m.material=m.material.clone(),m.material.side=pe;let f=new q;f.position.set(0,4.2,0),m.position.set(0,-.6,0),f.add(m),f.userData.vivo=!0,_.add(f),e.vivos.push(v=>{let S=(e.h||12)%1<.02?1:0;f.rotation.z=Math.sin(v*5)*.4*S}),_.add(At(new je(2.7,4.2,4),"#B8573A",{pos:[0,7.35,0],rot:[0,Math.PI/4,0],out:.016}));let E=new q;E.position.set(0,10.2,0),E.add(D(.12,1.4,.12,"#C9A23A")),E.add(D(.8,.12,.12,"#C9A23A",0,.25,0)),_.add(E);let y=Qi(e,.85);if(y.position.set(0,1.6,1.73),_.add(y),n.add(_),i){Zn(n,0,(r+o)/2,s-.4,o-r-.4,yt(e.tex.piso("xadrez","#F4F1EA","#B5603E")),.02),Yn(n,0,(r+o)/2,s-.4,o-r-.4,a-.02,"#F4EEDC"),Nn(n,e.tex.piso("ceramica","#B83A3A","#A03030"),0,(r+o)/2+1,1.6,o-r-4,1,.03);for(let A=0;A<7;A++)for(let S of[-1,1]){let T=new q;T.userData.pe=[3.6,.7],T.add(Q(3.6,.08,.45,"#8E5A3A",0,.46,0,{out:.01})),T.add(Q(3.6,.5,.06,"#8E5A3A",0,.82,-.22,{out:.01}));for(let b of[-1,0,1])T.add(D(.06,.46,.45,"#7A4A2E",b*1.75,.23,0));T.add(D(3.5,.06,.2,"#7A4A2E",0,.2,.3)),de(n,T,S*2.9,o-3.5-A*1.35,0)}for(let[A,S,T]of[[-1,1,-.8],[1,2,.6],[-1,4,.3],[1,5,-1]])n.figurante(A*2.9+T,o-3.5-S*1.35+.02,Math.PI,{sentado:!0,assento:.5});n.add(D(s-.4,.45,3.2,"#E8E4DC",0,.225,r+1.8,{out:.01})),n.col(0,r+1.8,s-.4,3.2,{h:.45});for(let A=0;A<2;A++)n.add(D(3,.15,.4,"#E8E4DC",0,.075+A*.15,r+3.6-A*.3));n.add(Q(2.4,.95,.9,"#F4F1EA",0,.45+.48,r+2,{out:.012})),n.add(D(2.5,.02,.95,"#C9A23A",0,1.42,r+2));for(let A of[-1,1]){n.add(J(.05,.07,.5,"#C9A23A",A*.9,1.68,r+2,{seg:8}));let S=new Vt({color:"#FFF6D8",emissive:"#FFD98A",emissiveIntensity:.6});n.add(At(new jt(.04,8,6),S,{pos:[A*.9,1.98,r+2]}))}let v=new q;v.position.set(0,4.2,r+.3),v.add(D(.25,3.2,.15,"#7A4A2E",0,0,0,{out:.012})),v.add(D(1.7,.25,.15,"#7A4A2E",0,.8,0,{out:.012})),n.add(v);for(let A of[-1,1]){let S=new q;S.position.set(A*4,.45,r+.8),S.add(J(.3,.35,1,"#E8E4DC",0,.5,0,{out:.01})),S.add(Q(.4,1,.3,A>0?"#3E7CC8":"#8E5A3A",0,1.5,0,{out:.01,r:.12})),S.add(ve(.15,"#E8B48C",0,2.15,0,{out:.01})),n.add(S)}for(let A=0;A<3;A++){let S=new q;S.position.set(0,a-.02,r+4+A*4.5),S.add(J(.01,.01,1.8,"#2A2A30",0,-.9,0,{seg:4})),S.add(J(.5,.3,.25,"#C9A23A",0,-1.9,0,{out:.01,seg:12}));let T=new Vt({color:"#FFF6D8",emissive:"#FFD98A",emissiveIntensity:.5});for(let b=0;b<6;b++){let x=b/6*Math.PI*2;S.add(At(new jt(.06,8,6),T,{pos:[Math.cos(x)*.45,-1.72,Math.sin(x)*.45]}))}n.add(S)}}else n.add(D(s-.8,a-.3,o-r-.8,"#3A3540",0,a/2,(r+o)/2,{shadow:!1}));n.ponto("igrejaDentro",0,o-1.5,Math.PI),n.ponto("altar",0,r+4.5,0)}function If(n,t){let e=n.cidade,i=t==="perto",s=$t(7),r="#F2E2B4",o="#2E9C6A";Nn(n,Xn("#D6D0C4","#CCC5B8"),0,0,44,44,1);for(let[F,P,C,B]of[[-21.9,0,.2,44],[21.9,0,.2,44],[0,-21.9,44,.2],[-12.5,21.9,19,.2],[12.5,21.9,19,.2]])n.add(Wn(C,2.2,B,Un(r),F,1.1,P,1,{out:.012})),n.add(D(C+.02,.25,B+.02,o,F,.2,P,{shadow:!1})),n.col(F,P,C,B,{h:2.2});for(let F of[-1,1])n.add(D(.5,3.6,.5,o,F*3.2,1.8,21.9,{out:.012})),n.col(F*3.2,21.9,.5,.5);n.add(D(7,.9,.3,o,0,4,21.9,{out:.012})),n.add(We(6.6,.7,yt(_e("E.E. PROF. ANT\xD4NIO SERRA",{fundo:o,w:1024,h:110})),0,4,22.06));let a=F=>{let P=new q;P.userData.vivo=!0,P.position.set(F*2.95,0,21.9);let C=new q;P.add(C);for(let B=0;B<=8;B++)C.add(D(.04,2,.04,"#2A2C30",-F*B*.35,1.05,0));return C.add(D(2.8,.06,.06,"#2A2C30",-F*1.4,2,0)),C.add(D(2.8,.06,.06,"#2A2C30",-F*1.4,.1,0)),n.add(P),P},l=a(-1),c=a(1),h=(n.L.nome?n.L.nome+".":"")+"portao";e.portas[h]={nome:h,aberta:1,auto:!1,abrir(F){this.aberta=F,l.rotation.y=-F*1.4,c.rotation.y=F*1.4}},e.portas[h].abrir(1);let u=-20.5,d=-11,p=-20,g=20,_=3.4;for(let F=0;F<2;F++){let P=F*(_+.2),C=i&&F===0?"#F7F4EA":null;Kt(n,p,u,g,u,{y:P,h:_,t:.25,corA:r,corB:C,semCol:F>0,vaos:[0,1,2,3].map(U=>({a:U*10+2.5,b:U*10+7.5,y0:1.2,y1:2.6}))}),Kt(n,p,u,p,d,{y:P,h:_,t:.25,corA:r,corB:C,semCol:F>0}),Kt(n,g,u,g,d,{y:P,h:_,t:.25,corA:C,corB:r,semCol:F>0});let B=[];for(let U=0;U<4;U++)B.push({a:U*10+1,b:U*10+2,y0:0,y1:2.2},{a:U*10+3.5,b:U*10+8.5,y0:1,y1:2.6});Kt(n,p,d,g,d,{y:P,h:_,t:.25,corA:C,corB:r,semCol:F>0,vaos:B});for(let U=0;U<4;U++)nn(n,p+U*10+6,d,!0,5,P+1,P+2.6,{t:.25,fora:1,cortina:!1,seed:U+F*4,grade:"#2E9C6A"}),nn(n,p+U*10+5,u,!0,5,P+1.2,P+2.6,{t:.25,fora:-1,cortina:!1,seed:U+9+F*4,grade:"#2E9C6A"}),F===0&&i?ze(n,"sala"+(U+1),p+U*10+1.5,d,!0,1,{t:.25,dobra:-1,abre:-1,cor:"#2E9C6A"}):n.add(D(1,2.2,.08,"#2E9C6A",p+U*10+1.5,P+1.1,d+.06)),U>0&&Kt(n,p+U*10,u,p+U*10,d,{y:P,h:_,t:.15,corA:C,corB:C,semCol:F>0});n.add(D(g-p+.4,.2,d-u+3.4,"#E8E4DC",0,P+_+.1,(u+d)/2+1.5));for(let U=0;U<=8;U++)n.add(J(.15,.15,_,o,p+U*5,P+_/2,d+2.8,{seg:10,out:.012})),F===0&&n.col(p+U*5,d+2.8,.3,.3,{h:_});if(F===1){for(let U=0;U<=40;U++)n.add(D(.04,1,.04,"#2E9C6A",p+U,P+.5,d+2.9,{shadow:!1}));n.add(D(40,.06,.08,"#2E9C6A",0,P+1,d+2.9)),n.add(D(9.6,3.6,.2,"#3A3540",0,P+1.8,d-.3))}i&&F===0||n.add(D(g-p-.4,_-.2,d-u-.4,"#3A3540",0,P+_/2,(u+d)/2,{shadow:!1}))}for(let F=0;F<17;F++)n.add(D(1.4,.2,.3,"#E8E4DC",g+1,.1+F*.2,d+2.5-F*.28,{out:.006}));if(n.col(g+1,d-.2,1.4,5.5,{h:3.6}),Ki(n,0,(u+d)/2+1.5,g-p+.4,d-u+3.4,2*(_+.2),r,{alt:.7}),n.add(D(g-p+.5,.5,.1,o,0,2*(_+.2)+.35,d+3.25)),i){for(let F=0;F<4;F++)u_(n,p+F*10+5,(u+d)/2,9.8,d-u-.3,_,F);Nn(n,e.tex.piso("ceramica","#E8E0D2","#D4CABA"),0,d+1.5,40,3,1,.02)}let m=7,f=7,E=26,y=15;Nn(n,ce(512,300,F=>{F.fillStyle="#3E8A5A",F.fillRect(0,0,512,300),F.fillStyle="#C84E4E",F.fillRect(30,30,452,240),F.strokeStyle="#FFFFFF",F.lineWidth=5,F.strokeRect(30,30,452,240),F.beginPath(),F.moveTo(256,30),F.lineTo(256,270),F.stroke(),F.beginPath(),F.arc(256,150,40,0,7),F.stroke(),F.beginPath(),F.arc(30,150,70,-1.57,1.57),F.stroke(),F.beginPath(),F.arc(482,150,70,1.57,4.71),F.stroke()}),m,f,E,y,E,.02);for(let F of[-1,1]){let P=new q;P.position.set(m+F*(E/2-1.3),0,f),P.add(D(.1,2,.1,"#F4F1EA",0,1,-1.5)),P.add(D(.1,2,.1,"#F4F1EA",0,1,1.5)),P.add(D(.1,.1,3.1,"#F4F1EA",0,2,0));let C=new gt(new Wt(3,2),new De({color:"#FFFFFF",transparent:!0,opacity:.25,side:pe}));C.rotation.y=Math.PI/2,C.position.set(F*.8,1,0),P.add(C),n.add(P),n.col(m+F*(E/2-1.3),f-1.5,.2,.2),n.col(m+F*(E/2-1.3),f+1.5,.2,.2);let B=new q;B.position.set(m+F*(E/2+.5),0,f),B.add(J(.1,.1,3.6,"#8D949C",0,1.8,0,{seg:8})),B.add(D(.08,1.1,1.8,"#F4F1EA",-F*.5,3.4,0,{out:.01})),B.add(At(new Gn(.23,.02,6,16),"#F08A2C",{pos:[-F*.8,3.05,0],rot:[Math.PI/2,0,0]})),n.add(B),n.col(m+F*(E/2+.5),f,.2,.2)}for(let F of[-1,1])for(let P=0;P<5;P++){let C=m-E/2-1+P*(E+2)/4,B=f+F*(y/2+1);n.add(J(.14,.14,7,"#8D949C",C,3.5,B,{seg:8,out:.01})),n.col(C,B,.3,.3,{h:7})}let v=new gt(new Ye(y/2+1.5,y/2+1.5,E+3,24,1,!0,Math.PI/2-Math.PI*.3,Math.PI*.6),Pe("#C9CED6"));v.material=v.material.clone(),v.material.side=pe,v.rotation.z=Math.PI/2,v.rotation.y=0,v.position.set(m,7-(y/2+1.5)*Math.cos(Math.PI*.3),f),v.rotation.x=0,n.add(v);let A=ve(.12,"#F08A2C",m+3,.14,f+2,{out:.008});n.add(A);for(let F=0;F<3;F++)n.add(D(E-4,.4,.7,"#E8E4DC",m,.2+F*.4,f+y/2+2.6+F*.7,{out:.008}));n.col(m,f+y/2+3.3,E-4,2.1,{h:1.2});for(let[F,P,C]of[[-16,3,"ipeAmarelo"],[-16,15,"comum"],[-10,9,"mangueira"]]){let B=qn(C,1.2,F+P);B.position.set(F,0,P),n.add(B),n.col(F,P,.7,.7,{h:4})}for(let[F,P,C]of[[-13,3,0],[-13,15,Math.PI],[-19.5,9,Math.PI/2]])de(n,Va("#2E9C6A"),F,P,C);let S=J(.06,.07,9,"#C9CED6",-6,4.5,18,{seg:8});n.add(S),n.col(-6,18,.2,.2);let T=new Wt(1.6,1.1,12,1),b=ce(160,110,F=>{F.fillStyle="#2E9C4A",F.fillRect(0,0,160,110),F.fillStyle="#F2C230",F.beginPath(),F.moveTo(80,10),F.lineTo(150,55),F.lineTo(80,100),F.lineTo(10,55),F.fill(),F.fillStyle="#2E6FB8",F.beginPath(),F.arc(80,55,24,0,7),F.fill()}),x=new gt(T,new Vt({map:b,side:pe}));x.position.set(-6+.82,8.4,18),x.userData.vivo=!0,n.add(x);let M=T.attributes.position.array.slice();e.vivos.push(F=>{let P=T.attributes.position;for(let C=0;C<P.count;C++){let B=(M[C*3]+.8)/1.6;P.setZ(C,Math.sin(F*4+B*5)*.12*B)}P.needsUpdate=!0,T.computeVertexNormals()});let w=new q;w.position.set(-15,0,-4),w.add(Wn(10,3.2,6,Un(r),0,1.6,0,1,{out:.014})),w.add(D(11,.2,7.5,"#E8E4DC",0,3.3,.6)),w.add(We(4,.6,yt(_e("CANTINA",{fundo:o})),0,2.7,3.02)),w.add(D(5,.9,.1,"#2A2A30",1,1.6,3.01)),w.add(D(5.4,.1,.6,"#F4F1EA",1,1.1,3.25)),n.add(w),n.col(-15,-4,10,6,{h:3.2});for(let F=0;F<2;F++)de(n,Oa(2.2,.8,"#F4F1EA",6,"#2E9C6A"),-17+F*5,.8,0);n.ponto("portao",0,24,Math.PI),n.ponto("patio",-8,10,0),n.ponto("quadra",m,f,0),n.ponto("corredor",-10,d+1.5,Math.PI/2),n.ponto("sala1",-18.5,-12.2,0),n.ponto("sala2",-8.5,-12.2,0)}function u_(n,t,e,i,s,r,o){let a=n.cidade,l=$t(o*13+1);Zn(n,t,e,i-.2,s-.1,yt(a.tex.piso("granilite","#E4E0D4","#9AA0A8")),.02),Yn(n,t,e,i-.2,s-.1,r-.02);let c=[["MATEM\xC1TICA","2 + 3 = 5","x\xB2 + 2x = 0"],["PORTUGU\xCAS","Substantivo","Verbo \u2022 Adjetivo"],["HIST\xD3RIA","Brasil Col\xF4nia","1500 - 1822"],["CI\xCANCIAS","O ciclo da \xE1gua","Evapora\xE7\xE3o"]][o%4],h=new gt(new Wt(4,1.3),yt(ce(512,166,f=>{f.fillStyle="#2E5A44",f.fillRect(0,0,512,166),f.fillStyle="#F4F1EA",f.font="700 30px Caveat, cursive",f.fillText(c[0],20,40),f.font="700 26px Caveat, cursive",f.fillText(c[1],40,90),f.fillText(c[2],40,130),f.fillText("Data: hoje",360,40)})));h.position.set(t-i/2+.165,1.6,e),h.rotation.y=Math.PI/2,n.add(h),n.add(D(.06,1.42,4.12,"#9A6236",t-i/2+.12,1.6,e)),n.add(D(.12,.04,4,"#9A6236",t-i/2+.18,.92,e));let u=Fi(1.2,"#9A6236",!1);u.position.set(t-i/2+1.5,.02,e-1.5),u.rotation.y=Math.PI/2,n.add(u),n.col(t-i/2+1.5,e-1.5,.6,1.2);let d=Er("#9A6236");d.position.set(t-i/2+.85,.02,e-1.5),d.rotation.y=Math.PI/2,n.add(d);for(let f=0;f<4;f++)for(let E=0;E<4;E++){let y=t-i/2+3.3+f*1.45,v=e-2.7+E*1.75,A=new q;A.position.set(y,.02,v),A.rotation.y=Math.PI/2,o===0&&(f+E)%2===0&&n.figurante(y+.35,v,-Math.PI/2,{sentado:!0,assento:.48}),A.add(Q(.6,.04,.45,"#D9B07A",0,.72,-.05,{out:.008})),A.add(D(.04,.7,.04,"#3E7CC8",-.26,.36,.1)),A.add(D(.04,.7,.04,"#3E7CC8",.26,.36,.1)),A.add(Q(.42,.04,.38,"#3E7CC8",0,.44,.35,{out:.008})),A.add(Q(.42,.35,.04,"#3E7CC8",0,.7,.55,{out:.008}));for(let S of[-1,1])A.add(D(.03,.44,.03,"#3A3D44",S*.18,.22,.35));l()<.6&&A.add(Q(.22,.02,.3,Ht(l,["#E2443A","#3E7CC8","#F2C230","#5AA84E"]),(l()-.5)*.2,.75,-.05)),n.add(A),n.col(y,v,.55,.8,{h:.8})}for(let f=0;f<3;f++){let E=wn(.8,.6,o*10+f,f===1?"paisagem":"abstrato");E.position.set(t-i/2+3.5+f*2.2,2.2,e-s/2+.15),n.add(E)}o===0&&n.figurante(t-i/2+1.2,e+1.2,Math.PI/2);let p=ws(1.4,1.9,"#9AA0A8");p.position.set(t+i/2-.45,.02,e-s/2+1.4),p.rotation.y=-Math.PI/2,n.add(p),n.col(t+i/2-.45,e-s/2+1.4,.6,1.4);let g=to(r-.02);g.position.set(t,0,e),n.add(g);let _=g.userData.pas;a.vivos.push(f=>{_.rotation.y=f*6+o});let m=Qi(a,.18);m.position.set(t+i/2-.1,2.6,e),m.rotation.y=-Math.PI/2,n.add(m)}function Df(n,t){let e=n.cidade,i=t==="perto",s="#F4F1EA",r="#2E6FB8",o=-16,a=16,l=-10,c=6,h=3.6,u=3;Nn(n,Xn("#D6D0C4","#CCC5B8"),0,0,44,44,1);for(let y=0;y<u;y++){let v=y*h,A=i&&y===0?"#F2F7FA":null,S=[];for(let T=0;T<8;T++){let b=o+2+T*4;y===0&&b>-6&&b<4||S.push({c:b,y0:1,y1:2.6})}Kt(n,o,c,a,c,{y:v,h,t:.25,corA:A,corB:s,semCol:y>0,vaos:[...y===0?[{a:13,b:19,y0:0,y1:2.8}]:[],...S.map(T=>({a:T.c-.9-o,b:T.c+.9-o,y0:T.y0,y1:T.y1}))]});for(let T of S)nn(n,T.c,c,!0,1.8,v+T.y0,v+T.y1,{t:.25,fora:1,cortina:y===0&&i?"#D9ECF7":!1,seed:T.c+y*9,moldura:"#E8E4DC"});Kt(n,o,l,a,l,{y:v,h,t:.25,corA:s,corB:A,semCol:y>0,vaos:[2,6,10,14,18,22,26,30].map(T=>({a:T-.9,b:T+.9,y0:1,y1:2.6}))});for(let T of[2,6,10,14,18,22,26,30])nn(n,o+T,l,!0,1.8,v+1,v+2.6,{t:.25,fora:-1,cortina:!1,seed:T+y});Kt(n,o,l,o,c,{y:v,h,t:.25,corA:s,corB:A,semCol:y>0}),Kt(n,a,l,a,c,{y:v,h,t:.25,corA:A,corB:s,semCol:y>0}),n.add(D(a-o+.4,.14,c-l+.4,"#E8E4DC",0,v+h,(l+c)/2)),n.add(D(a-o+.5,.3,.1,r,0,v+h-.1,c+.22)),i&&y===0||n.add(D(a-o-.5,h-.3,c-l-.5,"#3A3540",0,v+h/2,(l+c)/2,{shadow:!1}))}Ki(n,0,(l+c)/2,a-o,c-l,u*h,s,{alt:.8}),n.add(We(9,1.2,yt(_e("SANTA CASA DE PEDRA ALTA",{fundo:r,w:1024,h:140})),0,u*h+.4,c+.14));let d=new Vt({color:"#E2443A",emissive:"#E2443A",emissiveIntensity:.2});e.acender(d,1.5);let p=new q;p.add(At(new le(1.4,.45,.15),d)),p.add(At(new le(.45,1.4,.15),d)),p.position.set(a-2,u*h+.6,c+.2),n.add(p),n.add(D(9,.3,5,"#E8E4DC",0,3.2,c+2.5,{out:.014}));for(let y of[-1,1])n.add(J(.18,.18,3.1,"#E8E4DC",y*4.2,1.55,c+4.6,{seg:10,out:.01})),n.col(y*4.2,c+4.6,.4,.4,{h:3});n.add(We(5,.5,yt(_e("PRONTO-SOCORRO",{fundo:"#E2443A"})),0,3.2,c+5.02));let g=new q,_=new q;g.userData.vivo=_.userData.vivo=!0;let m=new Vt({color:"#CFE6F2",transparent:!0,opacity:.35,depthWrite:!1,side:pe});for(let[y,v]of[[g,-1],[_,1]])y.add(At(new Wt(1.5,2.6),m,{pos:[0,1.3,0],shadow:!1})),y.add(D(1.5,.08,.06,"#9AA0A8",0,2.6,0)),y.add(D(.06,2.6,.06,"#9AA0A8",v*.75,1.3,0)),y.position.set(v*.75,0,c+.2),n.add(y);let f=(n.L.nome?n.L.nome+".":"")+"entrada",{paraMundo:E}={paraMundo:(y,v,A)=>[y.x+v,y.z+A]};e.portas[f]={nome:f,aberta:0,auto:!0,abrir(y){this.aberta=y;let v=Math.max(0,Math.min(1,y))*1.45;g.position.x=-.75-v,_.position.x=.75+v},mundo:E(n.L,0,c),lote:n.L.nome};for(let y of[-2.25,2.25])n.add(D(1.5,2.8,.25,s,y,1.4,c));m_(n,7,c+6.5,Math.PI/2);for(let y=0;y<6;y++)if(n.add(D(.1,.01,4.5,"#F4F1EA",-18+y*2.6,.03,14)),y<5&&y%2===0){let v=Pi(Ht($t(y+3),["#3E7CC8","#F4F1EA","#2A2A30","#9AA0A8","#E2443A"]),y);v.position.set(-16.7+y*2.6,0,14),n.add(v),n.col(-16.7+y*2.6,14,1.8,4.1)}for(let[y,v,A]of[[14,15,"ipeRoxo"],[19,9,"comum"],[-19,19,"mangueira"],[19,19,"comum"]]){let S=qn(A,1.1,y);S.position.set(y,0,v),n.add(S),n.col(y,v,.7,.7,{h:4})}for(let[y,v]of[[11,19],[16,19]])de(n,Va("#2E6FB8"),y,v,0);if(i){Zn(n,0,(l+c)/2,a-o-.3,c-l-.3,yt(e.tex.piso("granilite","#EEF2F2","#9AB8C8")),.02),Yn(n,0,(l+c)/2,a-o-.3,c-l-.3,h-.02),de(n,Bn(3.4,"#2E6FB8","#F4F1EA"),0,c-4.5,Math.PI),de(n,ji(),0,c-5.4,Math.PI*0,!1);let y=Fi(.01,"#F4F1EA",!1);n.add(y);for(let A=0;A<3;A++)de(n,es(5,"#3E7CC8"),-9,c-2.5-A*1.6,Math.PI);for(let[A,S]of[[-10.1,0],[-7.9,1],[-9,2],[-7.35,0]])n.figurante(A,c-2.5-S*1.6+.05,Math.PI,{sentado:!0,assento:.49});n.figurante(0,c-5.3,0),n.figurante(-7,l+1.8,Math.PI,{sentado:!0,assento:.5,roupa:{camisa:"#F4F1EA"}});let v=_r(.01);v.children.slice(0,3).forEach(A=>A.visible=!1),v.position.set(-9,1.6,l+.2+6),n.add(v),e.vivos.push(A=>yr(v.userData.tela,A,8)),n.add(io(e,5).translateX(-5).translateY(2.6).translateZ(c-.2).rotateY(Math.PI)),de(n,d_(),-14.5,c-1.2),de(n,on(1.5,5),4.5,c-.7),de(n,on(1.5,6),-4.5,c-.7),Kt(n,-15.9,l+6,-3,l+6,{h,t:.12,corA:"#F2F7FA",corB:"#F2F7FA",vaos:[{a:4.5,b:5.5}]}),ze(n,"consultorio",-11.4+0,l+6,!0,1,{t:.12,cor:"#F4F1EA",dobra:-1,abre:-1}),Kt(n,-3,l,-3,l+6,{h,t:.12,corA:"#F2F7FA",corB:"#F2F7FA"}),de(n,f_(),-14,l+2,Math.PI/2),de(n,Fi(1.3,"#F4F1EA",!0,2),-7,l+1,0),de(n,ji(),-7,l+1.8,Math.PI),de(n,Er("#3E7CC8"),-7.3,l+3.4,Math.PI),de(n,ws(1.2,1.9,"#F4F1EA"),-4.2,l+.5,0),n.add(wn(1.2,.8,31,"abstrato").translateX(-10).translateY(1.8).translateZ(l+.15)),de(n,Ha(!0),-15.5,l+4.5,Math.PI/2),de(n,on(1.2,7),-4,l+5.4),de(n,Cf(),-12.6,l+.9),Kt(n,3,l,3,l+6,{h,t:.12,corA:"#F2F7FA",corB:"#F2F7FA"}),Kt(n,3,l+6,15.9,l+6,{h,t:.12,corA:"#F2F7FA",corB:"#F2F7FA",vaos:[{a:1,b:2.2}]}),ze(n,"enfermaria",4.6,l+6,!0,1.2,{t:.12,cor:"#F4F1EA",dobra:-1,abre:-1});for(let A=0;A<3;A++)de(n,p_(A),6.5+A*3.4,l+1.4,0),de(n,Cf(),7.5+A*3.4,l+.6,0)}else n.add(D(a-o-.5,h-.3,c-l-.5,"#3A3540",0,h/2,(l+c)/2,{shadow:!1}));n.ponto("entrada",0,c+3.5,Math.PI),n.ponto("espera",-9,c-3,Math.PI),n.ponto("consultorio",-10,l+3,0),n.ponto("enfermaria",9,l+4,0),n.ponto("ambulancia",7,c+8.4,0)}function d_(){return Ff()}function f_(){let n=new q;n.userData.pe=[2,.8],n.add(Q(1.9,.15,.7,"#F4F1EA",0,.8,0,{out:.01})),n.add(Q(.5,.1,.6,"#F4F1EA",-.7,.92,0,{rot:[0,0,.3]}));for(let[t,e]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(D(.04,.75,.04,"#9AA0A8",t*.85,.37,e*.3));return n.add(D(1.9,.02,.72,"#8FD3F2",0,.89,0)),n}function p_(n=0){let t=Ts(.95,"#8FD3F2","#C9CED6");t.userData.pe=[1,2.1],t.add(D(1,.05,.05,"#9AA0A8",0,.75,.8));let e=new gt(new Wt(2.2,2),new Vt({color:"#B9DCE8",side:pe}));return e.position.set(1.4,1.2,0),e.rotation.y=Math.PI/2,t.add(e),t.add(D(.03,.03,2.2,"#9AA0A8",1.4,2.22,0)),t}function Cf(){let n=new q;return n.userData.pe=[.3,.3],n.add(J(.18,.18,.03,"#9AA0A8",0,.02,0)),n.add(J(.015,.015,1.9,"#C9CED6",0,.95,0,{seg:6})),n.add(D(.3,.02,.02,"#C9CED6",0,1.88,0)),n.add(Q(.14,.22,.05,"#E6F4FA",.12,1.72,0,{r:.02})),n}function m_(n,t,e,i){let s=new q;s.position.set(t,0,e),s.rotation.y=i,s.add(Q(2.1,2.2,3.6,"#F4F1EA",0,1.45,-.8,{out:.016,r:.1})),s.add(Q(2,1.2,1.6,"#F4F1EA",0,.95,1.75,{out:.016,r:.1})),s.add(D(2.12,.3,3.6,"#E2443A",0,1.2,-.8)),s.add(D(1.8,.5,.02,"#6E95B8",0,1.35,2.56).rotateX(-.3));let r=new Vt({color:"#E2443A",emissive:"#E2443A",emissiveIntensity:.2}),o=new Vt({color:"#3E7CC8",emissive:"#3E7CC8",emissiveIntensity:.2});s.add(At(new le(.5,.15,.25),r,{pos:[-.35,2.62,.6]})),s.add(At(new le(.5,.15,.25),o,{pos:[.35,2.62,.6]}));for(let[c,h]of[[-1,1.6],[1,1.6],[-1,-1.8],[1,-1.8]])s.add(J(.38,.38,.26,"#1B1A20",c*.98,.38,h,{rot:[0,0,Math.PI/2],seg:16,out:.012}));let a=new q;a.add(D(.7,.22,.02,"#E2443A")),a.add(D(.22,.7,.02,"#E2443A"));for(let c of[-1,1]){let h=a.clone();h.position.set(c*1.06,1.8,-.8),h.rotation.y=Math.PI/2,s.add(h)}n.add(s);let l=Math.abs(Math.sin(i))>.5;return n.col(t,e,l?5.4:2.3,l?2.3:5.4,{h:2.6}),n.cidade.vivos.push(c=>{let h=Math.sin(c*8)>0;r.emissiveIntensity=h?1.2:.1,o.emissiveIntensity=h?.1:1.2}),s}function Lf(n,t){let e=n.cidade,i=t==="perto",s="#E8DCC8",r=$t(31);Nn(n,Xn("#D6D0C4","#CCC5B8"),0,0,44,44,1),Nn(n,e.tex.asfalto(),0,-13,44,18,4,.02);let o=-16,a=16,l=-3,c=9,h=4.2;Kt(n,o,l,a,l,{h,t:.25,corA:s,corB:i?"#F4EEE2":null,vaos:[{a:4,b:8,y0:0,y1:3},{a:24,b:28,y0:0,y1:3}]}),Kt(n,o,c,a,c,{h,t:.25,corA:i?"#F4EEE2":null,corB:s,vaos:[{a:13,b:19,y0:0,y1:3.2},{a:2,b:10,y0:1,y1:3},{a:22,b:30,y0:1,y1:3}]}),nn(n,-10,c,!0,8,1,3,{t:.25,fora:1,cortina:!1}),nn(n,10,c,!0,8,1,3,{t:.25,fora:1,cortina:!1}),Kt(n,o,l,o,c,{h,t:.25,corA:s,corB:i?"#F4EEE2":null}),Kt(n,a,l,a,c,{h,t:.25,corA:i?"#F4EEE2":null,corB:s}),n.add(D(a-o+1,.3,c-l+16,"#E8E4DC",0,h+.15,(l+c)/2-4,{out:.014}));for(let p=0;p<=6;p++)n.add(J(.2,.2,h,"#8D949C",o+p*32/6,h/2,l-9,{seg:10,out:.01})),n.col(o+p*32/6,l-9,.4,.4,{h});n.add(We(12,1.3,yt(_e("RODOVI\xC1RIA DE PEDRA ALTA",{fundo:"#2E6FB8",w:1024,h:120})),0,h+.9,c+.1)),n.add(D(12.4,1.5,.15,"#1F4E86",0,h+.9,c));let u=Qi(e,.5);u.position.set(0,3.6,c+.14),n.add(u),n.add(D(36,.2,2.5,"#E8E4DC",0,.1,l-1.3)),n.pisoAlto(0,l-1.3,36,2.5,.2);for(let p=0;p<5;p++){let g=-13+p*6.5;if(n.add(We(.8,.5,yt(_e(String(p+1),{fundo:"#F2C230",cor:"#1F4E86",w:128,h:80})),g,3.6,l-2.5)),n.add(D(.06,.6,.06,"#8D949C",g,4,l-2.5)),p%2===0){let _=Vh(Ht(r,["#2E6FB8","#E2443A","#2E9C6A"]),["S\xC3O PAULO","CAMPINAS","BRAGAN\xC7A"][p/2]);_.position.set(g,0,l-9),_.rotation.y=Math.PI,n.add(_),n.col(g,l-9,2.6,12,{h:3.4})}}for(let p=0;p<4;p++)de(n,Va("#2E6FB8"),-12+p*8,l-1.6,Math.PI);for(let[p,g,_]of[[-15,17,"ipeAmarelo"],[15,17,"ipeRoxo"],[-6,19,"palmeira"],[6,19,"palmeira"]]){let m=qn(_,1.1,p);m.position.set(p,0,g),n.add(m),n.col(p,g,.6,.6,{h:4})}let d=Pi("#F2C230",4);if(d.position.set(-10,0,14.5),d.rotation.y=Math.PI/2,d.add(Q(.5,.2,.3,"#F4F1EA",0,1.45,0)),n.add(d),n.col(-10,14.5,4.1,1.8),n.add(We(1.2,.5,yt(_e("T\xC1XI",{fundo:"#2A2A30",cor:"#F2C230"})),-13.5,2.4,13)),n.add(J(.04,.04,2.6,"#8D949C",-13.5,1.3,12.98,{seg:6})),i){Zn(n,0,(l+c)/2,a-o-.3,c-l-.3,yt(e.tex.piso("granilite","#E4E0D4","#9AA0A8")),.02),Yn(n,0,(l+c)/2,a-o-.3,c-l-.3,h-.02);for(let g=0;g<3;g++){let _=new q;_.userData.pe=[2.4,.8],_.add(Q(2.3,1.1,.7,"#2E6FB8",0,.55,0,{out:.012})),_.add(D(2.3,1.3,.04,"#CFE6F2",0,1.8,.2)),_.add(We(2,.4,yt(_e(["VIA\xC7\xC3O SERRANA","EXPRESSO PAULISTA","TURISMO DO VALE"][g],{fundo:"#1F4E86",w:512,h:96})),0,2.7,.3)),de(n,_,-12+g*3,l+1.2,0),_.add(Di().translateY(1.1))}for(let g=0;g<2;g++)de(n,es(6,"#2E6FB8"),5,l+4+g*1.8,Math.PI);n.figurante(-12,l+.55,0),n.figurante(-9,l+.55,0),n.figurante(3.9,l+4.05,Math.PI,{sentado:!0,assento:.49}),n.figurante(6.6,l+5.85,Math.PI,{sentado:!0,assento:.49}),n.figurante(-12,l+2.4,Math.PI),de(n,Bn(3,"#E2443A","#F4F1EA"),12.5,l+1.5,0),de(n,ts("#E2443A",4),15,l+4,-Math.PI/2),n.add(Ii(2,.9,[["CAF\xC9","R$ 4"],["P\xC3O DE QUEIJO","R$ 5"],["SALGADO","R$ 7"]]).translateX(12.5).translateY(2.6).translateZ(l+.14));let p=new gt(new Wt(4,2),yt(ce(512,256,g=>{g.fillStyle="#100808",g.fillRect(0,0,512,256),g.font="700 26px IBM Plex Mono, monospace",g.fillStyle="#F2C230",["HORA  DESTINO      BAIA","14:30 S\xC3O PAULO     1","15:10 CAMPINAS      3","16:00 BRAGAN\xC7A      5","17:20 S\xC3O PAULO     1","18:45 ATIBAIA       2"].forEach((_,m)=>g.fillText(_,16,36+m*40))})));p.position.set(-3,2.6,c-.15),p.rotation.y=Math.PI,n.add(p)}else n.add(D(a-o-.5,h-.3,c-l-.5,"#3A3540",0,h/2,(l+c)/2,{shadow:!1}));n.ponto("entrada",0,c+2,Math.PI),n.ponto("plataforma",0,l-1.5,0),n.ponto("guiche",-9,l+2.6,0)}function Vh(n="#2E6FB8",t="S\xC3O PAULO"){let e=new q;e.add(Q(2.5,2.8,12,n,0,1.75,0,{out:.018,r:.18})),e.add(D(2.52,.3,12,"#F4F1EA",0,1,0));for(let i of[-1,1]){e.add(D(.02,.9,10.5,"#3A4E62",i*1.26,2.3,-.3));for(let s of[-4.3,0,4.3])e.add(J(.48,.48,.3,"#1B1A20",i*1.15,.48,s,{rot:[0,0,Math.PI/2],seg:16,out:.012}))}return e.add(D(2.2,1.3,.02,"#3A4E62",0,2.3,6.01)),e.add(We(2,.35,yt(_e(t,{fundo:"#100808",cor:"#F2C230",w:384,h:64})),0,3,6.03)),e}function Uf(n,t){let e=n.cidade,i=t==="perto",s=$t(91);Nn(n,Xn("#C9C4BA","#BDB7AC"),0,0,44,44,2);let r=9;n.add(Q(20,.9,12,"#F4F1EA",0,5.6,r,{out:.016})),n.add(D(20.2,.45,12.2,"#2E9C6A",0,5.25,r)),n.add(We(6,.8,yt(_e("AUTO POSTO SERRA",{fundo:"#2E9C6A"})),0,5.6,r+6.03));let o=new Vt({color:"#FFFFFF",emissive:"#F4F8FF",emissiveIntensity:.1});e.acender(o,1.6);for(let f=0;f<3;f++)for(let E=0;E<2;E++)n.add(At(new le(2,.05,.4),o,{pos:[-6+f*6,5.13,r-3+E*6],shadow:!1}));for(let[f,E]of[[-6,r],[6,r]]){n.add(J(.35,.35,5.2,"#F4F1EA",f,2.6,E,{seg:12,out:.012})),n.add(D(1.4,.25,5,"#E8E4DC",f,.125,E)),n.col(f,E,1.4,5,{h:1.8});for(let y of[-1,1]){let v=new q;v.position.set(f,.25,E+y*1.6),v.add(Q(.9,1.8,.55,"#F4F1EA",0,.9,0,{out:.012})),v.add(D(.92,.5,.57,"#2E9C6A",0,1.5,0)),v.add(D(.6,.3,.02,"#100808",0,1.15,.29)),v.add(D(.6,.3,.02,"#100808",0,1.15,-.29)),v.add(J(.05,.05,.8,"#2A2A30",.5,1,0,{seg:6})),n.add(v)}}let a=new q;a.position.set(-19,0,19),a.add(Q(1.6,6,.6,"#2E9C6A",0,3,0,{out:.014})),a.add(We(1.4,2.2,yt(ce(256,400,f=>{f.fillStyle="#F4F1EA",f.fillRect(0,0,256,400),f.fillStyle="#100808",f.font="900 34px Inter",["GASOLINA","6,29","ETANOL","4,19","DIESEL","6,09"].forEach((E,y)=>{f.fillStyle=y%2?"#E2443A":"#100808",f.font=(y%2?"900 58px ":"800 34px ")+"Inter",f.fillText(E,20,50+y*62)})})),0,3,.31)),n.add(a),n.col(-19,19,1.6,.6,{h:6});let l=-16,c=-2,h=-14,u=-4,d=3.6;if(Kt(n,l,h,c,h,{h:d,t:.25,corA:"#F4F1EA",corB:i?"#F7F7F2":null}),Kt(n,l,h,l,u,{h:d,t:.25,corA:"#F4F1EA",corB:i?"#F7F7F2":null}),Kt(n,c,h,c,u,{h:d,t:.25,corA:i?"#F7F7F2":null,corB:"#F4F1EA"}),Kt(n,l,u,c,u,{h:d,t:.25,corA:i?"#F7F7F2":null,corB:"#F4F1EA",vaos:[{a:1,b:6,y0:.5,y1:2.8},{a:7,b:9,y0:0,y1:2.6},{a:10,b:13,y0:.5,y1:2.8}]}),nn(n,l+3.5,u,!0,5,.5,2.8,{t:.25,fora:1,cortina:!1,moldura:"#2A2A30"}),nn(n,l+11.5,u,!0,3,.5,2.8,{t:.25,fora:1,cortina:!1,moldura:"#2A2A30"}),ze(n,"loja",l+8,u,!0,2,{t:.25,tipo:"vidro",cor:"#9AA0A8",dobra:-1,abre:1}),n.add(D(c-l+.4,.2,u-h+2,"#E8E4DC",(l+c)/2,d+.1,(h+u)/2+.8)),n.add(We(8,.7,yt(_e("CONVENI\xCANCIA 24h",{fundo:"#2E9C6A"})),(l+c)/2,d+.55,u+1.82)),i){Zn(n,(l+c)/2,(h+u)/2,c-l-.3,u-h-.3,yt(e.tex.piso("ceramica","#EDEAE2","#D6D0C4")),.02),Yn(n,(l+c)/2,(h+u)/2,c-l-.3,u-h-.3,d-.02);for(let f=0;f<4;f++)de(n,ts(Ht(s,["#E2443A","#2E6FB8","#2E9C6A"]),f),l+1+f*.8,h+.5);de(n,fn(5,1.6,.45,3,"misto"),(l+c)/2+2.5,h+.35),de(n,fn(3.5,1.4,.8,4,"misto"),(l+c)/2,(h+u)/2+.5),de(n,Bn(2.4,"#2E9C6A","#F4F1EA"),c-1.6,(h+u)/2+1.5,-Math.PI/2),n.add(Di().translateX(c-1.6).translateY(1).translateZ((h+u)/2+1.5))}else n.add(D(c-l-.5,d-.3,u-h-.5,"#3A3540",(l+c)/2,d/2,(h+u)/2,{shadow:!1}));let p=new q;p.add(Q(.4,1.3,.3,"#E2443A",0,.65,0,{out:.01})),p.add(J(.12,.12,.06,"#F4F1EA",0,1,.16,{rot:[Math.PI/2,0,0]})),p.position.set(14,0,20),n.add(p),n.col(14,20,.4,.3);let g=new q;g.position.set(12,0,-12),g.add(D(12,.25,10,"#E8E4DC",0,4.2,0,{out:.014}));for(let[f,E]of[[-5.8,-4.8],[5.8,-4.8],[-5.8,4.8],[5.8,4.8]])g.add(D(.3,4.2,.3,"#2E6FB8",f,2.1,E,{out:.01}));g.add(We(5,.7,yt(_e("LAVA-R\xC1PIDO",{fundo:"#2E6FB8"})),0,3.7,5.02)),g.add(D(12,4.2,.2,"#F4F1EA",0,2.1,-5));let _=Pi("#3E7CC8",9);_.position.set(0,0,0),g.add(_),n.add(g),n.col(12,-17,12,.3,{h:4}),n.col(12,-12,1.8,4.1);for(let[f,E]of[[-5.8,-4.8],[5.8,-4.8],[-5.8,4.8],[5.8,4.8]])n.col(12+f,-12+E,.3,.3);let m=Pi("#F4F1EA",5);m.position.set(-6,0,r+3.2),m.rotation.y=Math.PI/2,n.add(m),n.col(-6,r+3.2,4.1,1.8);for(let[f,E,y]of[[19,2,"comum"],[-19,2,"ipeAmarelo"],[19,12,"palmeira"]]){let v=qn(y,1.1,f+E);v.position.set(f,0,E),n.add(v),n.col(f,E,.6,.6,{h:4})}n.figurante(-4.6,r+1.6,Math.PI/2,{roupa:{camisa:"#2E9C6A"}}),n.ponto("bombas",0,r+2,Math.PI),n.ponto("loja",-9,-2,Math.PI),n.ponto("lojaDentro",-8,-5.3,0)}function Bf(n,t){let e=n.cidade,i=$t(5);Nn(n,Ci("#7DB86A"),0,0,44,44,3);let s=36,r=24,o=-3;Nn(n,ce(720,480,c=>{c.fillStyle="#6FAE5A",c.fillRect(0,0,720,480);for(let h=0;h<12;h++)c.fillStyle=h%2?"#79B864":"#6FAE5A",c.fillRect(h*60,0,60,480);c.fillStyle="rgba(196,148,104,.6)",c.beginPath(),c.ellipse(360,240,70,50,0,0,7),c.fill(),c.beginPath(),c.ellipse(50,240,40,80,0,0,7),c.fill(),c.beginPath(),c.ellipse(670,240,40,80,0,0,7),c.fill(),c.strokeStyle="#FFFFFF",c.lineWidth=5,c.strokeRect(10,10,700,460),c.beginPath(),c.moveTo(360,10),c.lineTo(360,470),c.stroke(),c.beginPath(),c.arc(360,240,60,0,7),c.stroke(),c.strokeRect(10,140,90,200),c.strokeRect(620,140,90,200)}),0,o,s,r,s,.02);for(let c of[-1,1]){let h=new q;h.position.set(c*(s/2-.3),0,o),h.add(J(.07,.07,2.4,"#F4F1EA",0,1.2,-2.5,{seg:8,out:.01})),h.add(J(.07,.07,2.4,"#F4F1EA",0,1.2,2.5,{seg:8,out:.01})),h.add(J(.07,.07,5.1,"#F4F1EA",0,2.4,0,{rot:[Math.PI/2,0,0],seg:8,out:.01}));let u=new gt(new le(1.2,2.4,5),new De({color:"#FFFFFF",transparent:!0,opacity:.2,wireframe:!0}));u.position.set(c*.6,1.2,0),h.add(u),n.add(h),n.col(c*(s/2-.3),o-2.5,.2,.2),n.col(c*(s/2-.3),o+2.5,.2,.2)}for(let[c,h,u,d]of[[0,-21.5,43,.05],[-21.5,0,.05,43],[21.5,0,.05,43],[-12,21.5,19,.05],[12,21.5,19,.05]]){let p=new gt(new le(u,3,d),new De({color:"#8D949C",transparent:!0,opacity:.35,wireframe:!1}));p.position.set(c,1.5,h),n.add(p),n.col(c,h,u||.1,d||.1,{h:3});let g=Math.round(Math.max(u,d)/3);for(let _=0;_<=g;_++)n.add(J(.05,.05,3.1,"#6E747C",c+(u>1?-u/2+_*u/g:0),1.55,h+(d>1?-d/2+_*d/g:0),{seg:6}))}for(let c=0;c<4;c++)n.add(D(20,.35,.75,"#B87A4A",0,.3+c*.45,12.5+c*.75,{out:.008}));for(let c=0;c<6;c++)n.add(D(.12,1.9,.12,"#7A5233",-9.5+c*3.8,.95,15.3));n.col(0,13.6,20,3,{h:1.8,nome:"arquibancada"});for(let[c,h]of[[-20,-16],[20,-16],[-20,10],[20,10]]){n.add(J(.15,.2,12,"#8D949C",c,6,h,{seg:8,out:.01}));let u=new Vt({color:"#FFFFFF",emissive:"#F4F8FF",emissiveIntensity:0});e.acender(u,2);let d=At(new le(2,1.2,.3),u,{pos:[c,12.4,h],out:.012});d.lookAt(0,0,o),n.add(d),n.col(c,h,.4,.4,{h:12})}let a=new q;a.position.set(14,0,16.5),a.add(Wn(8,3,4,Un("#CFE3D2"),0,1.5,0,1,{out:.014})),a.add(D(8.6,.2,5,"#E8E4DC",0,3.1,.3)),a.add(We(4,.6,yt(_e("E.C. PEDRA ALTA",{fundo:"#2E7A5A"})),0,2.5,2.02)),a.add(D(.9,2.1,.06,"#2E7A5A",-2,1.05,2.02)),a.add(D(.9,2.1,.06,"#2E7A5A",2,1.05,2.02)),n.add(a),n.col(14,16.5,8,4,{h:3});let l=ve(.12,"#F4F1EA",3,.14,o+1,{out:.008});n.add(l);for(let[c,h,u]of[[-17,17,"mangueira"],[-12,18.5,"comum"]]){let d=qn(u,1.2,c);d.position.set(c,0,h),n.add(d),n.col(c,h,.7,.7,{h:4})}n.ponto("meio",0,o,0),n.ponto("gol",-s/2+2,o,Math.PI/2),n.ponto("arquibancada",0,11.4,Math.PI)}var Wa={casa:Af,sobrado:bf,casaFamilia:Sf,prefeitura:Rf,praca:Pf,escola:If,santaCasa:Df,rodoviaria:Lf,posto:Uf,campo:Bf};for(let n of["padaria","farmacia","loterica","lanchonete","banco","mercado","sorveteria","lojaRoupas","bar","lojaMateriais"])Wa[n]=wf(n);var so=(n,t=.9)=>(e,i,s)=>{e.fillStyle=n,e.fillRect(0,s*t,i,s*(1-t))},Mr={pele:"#E3AE86",cabelo:"topete",corCabelo:"#4A2A18",nariz:!0,sobr:"#3A2014"},DE={...Mr,sardas:!0,camisa:"#F6F4EE",calca:"#3D4F73",tenis:"#F08A2C",sola:"#FFFFFF",escala:.93,estampa:(n,t,e)=>{so("#2E9C6A",.88)(n,t,e),n.fillStyle="#2E9C6A",n.fillRect(0,0,t,e*.05);let i=t/2+120,s=e*.55;n.beginPath(),n.arc(i,s,44,0,7),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(i,s-26),n.lineTo(i+24,s+18),n.lineTo(i-24,s+18),n.closePath(),n.fill()}},LE={...Mr,sardas:!0,camisa:"#3A9AD9",calca:"#3D4F73",tenis:"#F08A2C",escala:.93,estampa:(n,t,e)=>{n.fillStyle="#F6F4EE";for(let i=0;i<6;i++)n.fillRect(0,e*(.12+i*.15),t,e*.05)}},UE={...Mr,camisa:"#E2A630",manga:"longa",calca:"#30384A",tenis:"#F4F1EA",sola:"#F08A2C",estampa:(n,t,e)=>{n.fillStyle="#C98C1E",n.fillRect(t*.36,e*.58,t*.28,e*.2),n.strokeStyle="#6E4A10",n.lineWidth=6,n.beginPath(),n.moveTo(t/2-30,0),n.lineTo(t/2-30,e*.3),n.moveTo(t/2+30,0),n.lineTo(t/2+30,e*.3),n.stroke()}},BE={...Mr,camisa:"#8E9AA8",calca:"#2F5E5A",tenis:"#E3AE86",sola:"#2D8CD6",meia:"#E3AE86",estampa:(n,t,e)=>{so("#7A8696")(n,t,e)}},Wh={...Mr,barba:"#5A3826",olheiras:!0,camisa:"#2C6E7F",manga:"longa",calca:"#8C7656",tenis:"#3A2A20",sola:"#F4F1EA",estampa:(n,t,e)=>{n.fillStyle="#245B69",n.fillRect(t/2-4,0,8,e);for(let i=0;i<5;i++)n.fillStyle="#F4F1EA",n.beginPath(),n.arc(t/2+14,e*(.25+i*.14),6,0,7),n.fill()}},NE={...Mr,barba:"#5A3826",camisa:"#4FB8A0",calca:"#8C7656",tenis:"#F4F1EA",sola:"#2C6E7F",estampa:(n,t,e)=>{so("#3C9A84")(n,t,e)}},g_=(n,t,e)=>{n.fillStyle="#F2C230",n.fillRect(0,e*.62,t,e*.07);let i=t/2-120,s=e*.4;n.fillStyle="#F2C230",n.fillRect(i-46,s-30,92,60),n.fillStyle="#1F2D4E",n.font="900 26px Inter",n.textAlign="center",n.textBaseline="middle",n.fillText("CF",i,s+2),n.fillStyle="#F2C230",n.font="800 22px Inter",n.fillText("CASA FORTE",t/2+160,e*.42)},Of={pele:"#9A6646",cabelo:"curto",corCabelo:"#2B2422",barba:"#4E4642",nariz:!0,sobr:"#2B2422",sobrW:19,camisa:"#22355E",calca:"#3E3A36",tenis:"#4A3222",sola:"#2A1E16",escala:1.07,estampa:(n,t,e)=>{g_(n,t,e),so("#1A2848")(n,t,e)}},OE={...Of,camisa:"#B8463A",estampa:(n,t,e)=>{n.strokeStyle="#8E2F28",n.lineWidth=14;for(let i=0;i<12;i++)n.beginPath(),n.moveTo(i*90,0),n.lineTo(i*90,e),n.stroke(),n.beginPath(),n.moveTo(0,i*50),n.lineTo(t,i*50),n.stroke()}},HE={...Of,corCabelo:"#2E2A28",barba:"#8E8782",camisa:"#F4F1EA",calca:"#3E3A36",escala:1.03,estampa:(n,t,e)=>{n.fillStyle="#2E7D4F",n.fillRect(t*.3,e*.3,t*.4,e*.7),n.fillStyle="#F4F1EA",n.font="900 34px Inter",n.textAlign="center",n.fillText("MESTRE",t/2,e*.6),n.fillText("DO FOGO",t/2,e*.72)}};var v_={pele:"#6E4430",cabelo:"afro",corCabelo:"#1A1212",faixa:"#E2443A",nariz:!0,camisa:"#7B4FC9",calca:"#2A2A33",tenis:"#F2C230",sola:"#FFFFFF",escala:.95,estampa:(n,t,e)=>{n.fillStyle="#F2C230";let i=t/2,s=e*.5;n.beginPath(),n.moveTo(i+10,s-70),n.lineTo(i-30,s+6),n.lineTo(i,s+6),n.lineTo(i-14,s+70),n.lineTo(i+34,s-10),n.lineTo(i+4,s-10),n.closePath(),n.fill()}},zE={...v_,camisa:"#F6D33A",estampa:(n,t,e)=>{so("#2E9C4A",.86)(n,t,e),n.fillStyle="#2E9C4A",n.fillRect(0,e*.1,t,e*.04)}};var Nf=[["#3E7CC8","#2A2A33","#2A1E1A","topete","#D9A07A"],["#E57AA0","#3A3550","#5A3020","chanel","#E8B48C"],["#58B26A","#2F4E86","#1C1416","afro","#8E5A3A"],["#F2994A","#3A3A44","#C9A060","curto","#F0C8A6"],["#9B6CC4","#2A2A33","#1C1416","curto","#B07A52"],["#2FB5A8","#4A3A2A","#3A2418","rabo","#E3B28E"],["#F2D24A","#2F4E86","#2A1E1A","tigela","#6E4430"],["#E8E4DE","#5A5A66","#6A5A4A","coque","#D9A07A"]],Xh=(n,t={})=>{let[e,i,s,r,o]=Nf[n%Nf.length];return ba({camisa:e,calca:i,corCabelo:s,cabelo:r,pele:o,cilios:["rabo","coque","chanel"].includes(r),tenis:["#F4F1EA","#2A2A30","#E2443A"][n%3],...t})};var Hf=2.5,__=8.5,y_=4.2,xr=.1,Cs=7.2;function Ar(n){let t=n.map(([o,a])=>[Se[o],Le[a]]),e=[],i=[],s=t.length;for(let o=0;o<s;o++){let a=t[o],l=t[(o+1)%s],c=t[(o+2)%s],h=zf([l[0]-a[0],l[1]-a[1]]),u=zf([c[0]-l[0],c[1]-l[1]]),d=kf(h),p=kf(u),g=[a[0]+h[0]*Cs+d[0],a[1]+h[1]*Cs+d[1]],_=[l[0]-h[0]*Cs+d[0],l[1]-h[1]*Cs+d[1]],m=Math.hypot(_[0]-g[0],_[1]-g[1]);for(let v=0;v<m;v+=.5)e.push([g[0]+h[0]*v,g[1]+h[1]*v,l]),i.push(0);let f=[l[0]+u[0]*Cs+p[0],l[1]+u[1]*Cs+p[1]],E=h[0]*u[0]+h[1]*u[1]>.9?[(_[0]+f[0])/2,(_[1]+f[1])/2]:[l[0]+d[0]+p[0],l[1]+d[1]+p[1]],y=h[0]*u[0]+h[1]*u[1]<.9;for(let v=0;v<1;v+=1/28){let A=1-v;e.push([A*A*_[0]+2*A*v*E[0]+v*v*f[0],A*A*_[1]+2*A*v*E[1]+v*v*f[1],null]),i.push(y?1:0)}}let r=[0];for(let o=1;o<=e.length;o++){let a=e[o-1],l=e[o%e.length];r.push(r[o-1]+Math.hypot(l[0]-a[0],l[1]-a[1]))}return{pts:e,curva:i,L:r,tot:r[e.length]}}var zf=n=>{let t=Math.hypot(n[0],n[1])||1;return[n[0]/t,n[1]/t]},kf=n=>[-n[1]*Hf,n[0]*Hf];function qh(n,t){t=(t%n.tot+n.tot)%n.tot;let e=0,i=n.pts.length;for(;i-e>1;){let a=e+i>>1;n.L[a]<=t?e=a:i=a}let s=n.pts[e],r=n.pts[(e+1)%n.pts.length],o=(t-n.L[e])/Math.max(1e-6,n.L[e+1]-n.L[e]);return{x:s[0]+(r[0]-s[0])*o,z:s[1]+(r[1]-s[1])*o,ang:Math.atan2(r[0]-s[0],r[1]-s[1]),i:e}}function Gf(n,t={}){let e=n.foco,i=(b,x,M)=>Math.hypot(b-e[0],x-e[1])<M,s=[Ar([[0,0],[5,0],[5,4],[0,4]]),Ar([[0,4],[5,4],[5,0],[0,0]]),Ar([[2,1],[3,1],[3,2],[2,2]]),Ar([[0,2],[5,2],[5,3],[0,3]]),Ar([[1,1],[1,3],[4,3],[4,1]]),Ar([[5,2],[0,2],[0,1],[5,1]])],r=t.carros??26,o=$t(2026),a=[];for(let b=0;b<r;b++){let x=b%s.length;a.push({r:x,s:s[x].tot*(Math.floor(b/s.length)/Math.ceil(r/s.length))+o()*8,v:0,id:b,cor:["#E2443A","#3E7CC8","#F4F1EA","#2A2A30","#9AA0A8","#F2C230","#2E9C6A","#8E6CC4","#F08A2C"][b%9],onibus:b===3})}let l=[],c=-30,h=()=>a.map(b=>[b.s,b.v]),u=a.map(()=>null),d=b=>{for(let x of a){let M=qh(s[x.r],x.s);x._p=M}for(let x of a){let M=s[x.r],w=x._p,F=x.onibus?12:4.2,P=M.curva[w.i]||M.curva[(w.i+6)%M.pts.length]?y_:__;x.onibus&&(P*=.8);let C=M.pts[(w.i+1)%M.pts.length][2];if(C){let z=C;if(wa.some(([Z,et])=>Z===z[0]&&et===z[1])){let Z=Math.abs(Math.sin(w.ang))>.7?"x":"z",et=Fh(b,Z,z[0],z[1]),K=Math.hypot(z[0]-w.x,z[1]-w.z)-Cs-F/2+1.6;et!=="verde"&&K>-.5&&K<30&&(et==="amarelo"&&K<4||(P=Math.min(P,Math.max(0,K)*.55)))}}let B=Math.sin(w.ang),U=Math.cos(w.ang);for(let z of a){if(z===x)continue;let H=z._p.x-w.x,Z=z._p.z-w.z,et=H*B+Z*U,K=Math.abs(-H*U+Z*B),ft=et-(F+(z.onibus?12:4.2))/2-1.8;if(et>0&&et<26&&K<1.9){if(z._espera===x&&x.id<z.id)continue;P=Math.min(P,Math.max(0,ft)*.8),ft<2&&(x._espera=z)}}for(let z of n.andantes){if(z.calcada||z.desligado)continue;let H=z.pos(b),Z=H[0]-w.x,et=H[1]-w.z,K=Z*B+et*U,ft=Math.abs(-Z*U+et*B);K>0&&K<14&&ft<2.4&&(P=Math.min(P,Math.max(0,K-F/2-1.5)*.7))}if(x.onibus)for(let z of n.pontosOnibus||[]){let H=Math.hypot(z[0]-w.x,z[1]-w.z),Z=(b+400)%90;H<14&&Z<9&&(P=Math.min(P,Math.max(0,H-1)*.5))}x.v+=Math.max(-6*xr,Math.min(2.4*xr,P-x.v)),x.v=Math.max(0,x.v)}for(let x of a)x.s+=x.v*xr,x._espera=null},p=b=>{for(;c<b;)l.push(h()),d(c),c+=xr},g=b=>{p(b+xr);let x=(b+30)/xr,M=Math.max(0,Math.min(l.length-2,Math.floor(x))),w=x-M;return l[M].map((F,P)=>[F[0]+(l[M+1][P][0]-F[0])*w,F[1]])};n.pontosOnibus=[[-10,2.5],[96.6-2,-30]];let _=a.map(b=>{let x=b.onibus?Vh("#2E9C6A","CIRCULAR - CENTRO"):Pi(b.cor,b.id),M=[];x.traverse(F=>{F.userData.roda&&(F.userData.vivo=!0,M.push(F))});let w=hi(x);return w.userData.rodas=[],w.traverse(F=>{F.userData.roda&&w.userData.rodas.push(F)}),w.traverse(F=>{F.material&&F.material.emissive&&F.material.color&&F.material.color.getHexString()==="fff6d8"&&n.acender(F.material,2.5)}),n.cena.add(w),w});n.vivos.push(b=>{g(b).forEach(([M,w],F)=>{let P=a[F],C=qh(s[P.r],M),B=_[F];B.position.set(C.x,0,C.z),B.rotation.y=C.ang;for(let U of B.userData.rodas)U.rotation.x=M/.34})}),n.carros={pos:(b,x)=>{let M=g(x),w=qh(s[a[b].r],M[b][0]);return[w.x,w.z,w.ang]},n:a.length,objs:_};let m=t.pedestres??16,f=[],E=[];for(let b=0;b<5;b++)for(let x=0;x<4;x++)E.push([li(b),ci(x)]);E.sort((b,x)=>Math.hypot(b[0]-e[0],b[1]-e[1])-Math.hypot(x[0]-e[0],x[1]-e[1]));for(let b=0;b<m;b++){let[x,M]=E[b%Math.min(5,E.length)],w=b%2?1:-1,F=w>0?23.7:22.8,P=Xh(b+3);P.root.scale.setScalar(.9+b%4*.04),n.cena.add(P.root),P.seed=b;let C=8*F,B=1+b%5*.08,U=b*37.3%C,z=(ht,W)=>{ht=(ht%C+C)%C;let tt=Math.floor(ht/(2*F)),ct=ht%(2*F)-F,rt=[[ct,-W],[W,ct],[-ct,W],[-W,-ct]][tt];return[x+rt[0],M+rt[1]]},H=Math.ceil(C/.5),Z=new Float32Array(H);for(let ht=0;ht<H;ht++){let W=ht*.5;if(!n.livre(...z(W,F),.3)){for(let tt of[-.5,.5,-1,1,-1.5,1.5,-2])if(!(F+tt>24.4||F+tt<22.2)&&n.livre(...z(W,F+tt),.3)){Z[ht]=tt;break}}}let et=new Float32Array(H);for(let ht=0;ht<H;ht++){let W=0;for(let tt=-6;tt<=6;tt++){let ct=Z[(ht+tt+H)%H];Math.abs(ct)>Math.abs(W)&&(W=ct*(1-Math.abs(tt)/7))}et[ht]=W}let K=ht=>{ht=(ht%C+C)%C;let W=ht/.5,tt=Math.floor(W)%H,ct=(tt+1)%H,rt=W-Math.floor(W);return z(ht,F+et[tt]*(1-rt)+et[ct]*rt)},ft={pos:ht=>K(U+w*B*ht),desligado:!1,calcada:!0};n.andantes.push(ft),n.vivos.push(ht=>{let W=K(U+w*B*ht),tt=K(U+w*B*(ht+.4));P.place(W[0],W[1],.15,Math.atan2(tt[0]-W[0],tt[1]-W[1])),P.pose(Kr(ht+b,1.7,.9)),P.face({emo:"neutro",blink:(ht*.37+b*.13)%1<.04?1:0})}),f.push(P)}let y=(n.figurantes||[]).filter(b=>b.nivel==="perto").sort((b,x)=>Math.hypot(b.x-e[0],b.z-e[1])-Math.hypot(x.x-e[0],x.z-e[1])),v=0;for(let b of y){if(v>=(t.figurantes??30))break;v++;let x=Xh(v*5+1,b.roupa||{});x.seed=v,n.cena.add(x.root),b.sentado?(x.place(b.x,b.z,b.y+(b.assento??.46)-.28,b.ry),x.sombra.visible=!1):x.place(b.x,b.z,b.y,b.ry),n.vivos.push(M=>{b.sentado?x.pose({...kd,...b.pose||{},headX:Math.sin(M*.7+v)*3}):x.pose({...Sa(M,v),...b.pose||{}}),x.face({emo:b.emo||"neutro",blink:(M*.41+v*.17)%1<.04?1:0,look:[Math.sin(M*.3+v)*.6,0]})})}let A=new q,S=[];for(let b=0;b<9;b++){let x=new q;x.add(ve(.12,"#2A2A30",0,0,0,{seg:6}));for(let M of[-1,1]){let w=D(.36,.02,.14,"#2A2A30",M*.2,0,0);w.userData.s=M,x.add(w)}A.add(x),S.push(x)}n.cena.add(A),n.vivos.push(b=>{let x=b*.12;A.position.set(e[0]+Math.cos(x)*35,24+Math.sin(b*.3)*3,e[1]+Math.sin(x)*35),A.rotation.y=-x,S.forEach((M,w)=>{M.position.set(w%3*1.6-1.6,Math.sin(b+w)*.4,Math.floor(w/3)*1.4),M.children.forEach(F=>{F.userData.s&&(F.rotation.z=F.userData.s*Math.sin(b*14+w)*.6)})})});let T=n.pontos["casaFamilia.quintal"];if(T&&i(T.x,T.z,120)){let b=E_();n.cena.add(b.g),n.vivos.push(x=>{let M=x%16/16,w=M*Math.PI*2,F=Math.cos(w)*1.6,P=Math.sin(w)*.7,C=T.ry,B=Math.cos(C),U=Math.sin(C);b.g.position.set(T.x+F*B+P*U,.15+.02,T.z-F*U+P*B),b.g.rotation.y=C+Math.atan2(-Math.sin(w)*1.6,Math.cos(w)*.7)+Math.PI/2,b.anda(x)})}}function E_(n="#C98A4A"){let t=new q,e=new q;t.add(e),e.add(Q(.62,.3,.28,n,0,.42,0,{out:.012,r:.12}));let i=new q;i.position.set(.38,.62,0),e.add(i),i.add(Q(.26,.24,.24,n,0,0,0,{out:.012,r:.1})),i.add(Q(.14,.11,.14,"#E8C090",.15,-.05,0,{out:.01,r:.05})),i.add(ve(.03,"#1B1420",.23,-.01,0));for(let o of[-1,1]){i.add(ve(.025,"#1B1420",.1,.05,o*.07));let a=Q(.06,.14,.1,"#8E5A2A",-.02,.13,o*.1,{r:.03});a.rotation.x=o*.3,i.add(a)}let s=new q;s.position.set(-.3,.5,0),s.add(J(.025,.035,.26,n,0,.12,0,{seg:6})),s.rotation.z=.6,e.add(s);let r=[];for(let[o,a]of[[.2,.09],[.2,-.09],[-.2,.09],[-.2,-.09]]){let l=new q;l.position.set(o,.32,a),l.add(J(.04,.035,.3,n,0,-.15,0,{seg:6})),e.add(l),r.push(l)}return{g:t,anda:o=>{s.rotation.x=Math.sin(o*14)*.5,r.forEach((a,l)=>a.rotation.z=Math.sin(o*8+(l%2?0:Math.PI)+(l>1?Math.PI:0))*.4),e.position.y=Math.abs(Math.sin(o*8))*.02,i.rotation.z=Math.sin(o*2)*.08}}}var br=4;function Vf(n){let t=new Map,e=(r,o)=>r*100003+o;n.colisores.forEach((r,o)=>{let a=Math.floor((r.x-r.w/2)/br),l=Math.floor((r.x+r.w/2)/br),c=Math.floor((r.z-r.d/2)/br),h=Math.floor((r.z+r.d/2)/br);for(let u=a;u<=l;u++)for(let d=c;d<=h;d++){let p=e(u,d);t.has(p)||t.set(p,[]),t.get(p).push(o)}}),n.livre=(r,o,a=.22,l)=>{let c=t.get(e(Math.floor(r/br),Math.floor(o/br)));if(!c)return!0;for(let h of c){let u=n.colisores[h];if(!(l&&l(u))&&!(u.h!==void 0&&u.h<.12)&&Math.abs(r-u.x)<u.w/2+a&&Math.abs(o-u.z)<u.d/2+a)return!1}return!0},n.alturaChao=(r,o)=>{for(let a of n.pisosAltos||[])if(Math.abs(r-a.x)<a.w/2&&Math.abs(o-a.z)<a.d/2)return a.y;return i(r,o)?.15:0};let i=(r,o)=>{for(let a=0;a<5;a++)if(Math.abs(r-li(a))<=25){for(let l=0;l<4;l++)if(Math.abs(o-ci(l))<=25)return!0}return o>127&&o<136&&Math.abs(r)<165},s=(r,o)=>{for(let a of Se)for(let l of Le){let c=Math.abs(r-a),h=Math.abs(o-l);if(c<5&&h>5&&h<8.6||h<5&&c>5&&c<8.6)return!0}return!1};n.naQuadra=i,n.caminho=(r,o,a={})=>{let l=Math.hypot(o[0]-r[0],o[1]-r[1]),c=a.res||(l<50?.2:l<140?.4:.7),h=a.raio??.22,u=a.margem??Math.min(30,8+l*.3),d=Math.min(r[0],o[0])-u,p=Math.min(r[1],o[1])-u,g=Math.ceil((Math.abs(o[0]-r[0])+2*u)/c),_=Math.ceil((Math.abs(o[1]-r[1])+2*u)/c),m=g*_,f=new Float32Array(m);for(let K=0;K<_;K++)for(let ft=0;ft<g;ft++){let ht=d+(ft+.5)*c,W=p+(K+.5)*c;f[K*g+ft]=n.livre(ht,W,h)?i(ht,W)?1:s(ht,W)?1.5:a.rua?1.2:25:0}let E=K=>{let ft=Math.max(0,Math.min(g-1,Math.floor((K[0]-d)/c)));return Math.max(0,Math.min(_-1,Math.floor((K[1]-p)/c)))*g+ft},y=E(r),v=E(o);f[y]=f[y]||1,f[v]=f[v]||1;let A=new Float32Array(m).fill(1/0),S=new Int32Array(m).fill(-1),T=new Uint8Array(m),b=[],x=(K,ft)=>{b.push([ft,K]);let ht=b.length-1;for(;ht>0;){let W=ht-1>>1;if(b[W][0]<=b[ht][0])break;[b[W],b[ht]]=[b[ht],b[W]],ht=W}},M=()=>{let K=b[0],ft=b.pop();if(b.length){b[0]=ft;let ht=0;for(;;){let W=2*ht+1,tt=W+1,ct=ht;if(W<b.length&&b[W][0]<b[ct][0]&&(ct=W),tt<b.length&&b[tt][0]<b[ct][0]&&(ct=tt),ct===ht)break;[b[ct],b[ht]]=[b[ht],b[ct]],ht=ct}}return K},w=v%g,F=v/g|0,P=K=>Math.hypot(K%g-w,(K/g|0)-F);A[y]=0,x(y,P(y));let C=!1,B=0,U=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;b.length&&B++<3e6;){let[,K]=M();if(T[K])continue;if(T[K]=1,K===v){C=!0;break}let ft=K%g,ht=K/g|0;for(let[W,tt,ct]of U){let rt=ft+W,vt=ht+tt;if(rt<0||vt<0||rt>=g||vt>=_)continue;let bt=vt*g+rt,Ut=f[bt];if(!Ut||T[bt]||W&&tt&&(!f[ht*g+rt]||!f[vt*g+ft]))continue;let Yt=A[K]+ct*Ut;Yt<A[bt]&&(A[bt]=Yt,S[bt]=K,x(bt,Yt+P(bt)))}}if(!C){console.warn("[cidade] caminho n\xE3o encontrado",r,o);let K=[r,o];return K.falhou=!0,K}let z=[];for(let K=v;K!==-1;K=S[K])z.push([d+(K%g+.5)*c,p+((K/g|0)+.5)*c]);z.reverse(),z[0]=r,z[z.length-1]=o;let H=(K,ft)=>{let ht=Math.hypot(ft[0]-K[0],ft[1]-K[1]),W=Math.ceil(ht/(c*.5)),tt=i(K[0],K[1]);for(let ct=1;ct<W;ct++){let rt=K[0]+(ft[0]-K[0])*ct/W,vt=K[1]+(ft[1]-K[1])*ct/W;if(!n.livre(rt,vt,h*.95)||!i(rt,vt)&&!s(rt,vt)&&!a.rua)return!1}return!0},Z=[z[0]],et=0;for(;et<z.length-1;){let K=z.length-1;for(;K>et+1&&!H(z[et],z[K]);)K--;Z.push(z[K]),et=K}return Z},n.ponto=r=>{if(Array.isArray(r))return r;let o=n.pontos[r];return o?[o.x,o.z]:(console.warn("[cidade] ponto desconhecido: "+r+". Pontos: "+Object.keys(n.pontos).slice(0,40).join(", ")),[0,0])},n.andar=(r,o,a=0,l={})=>{let c=[];for(let A=0;A<o.length-1;A++){let S=n.ponto(o[A]),T=n.ponto(o[A+1]),b=l.direto?[S,T]:n.caminho(S,T,l);c.length&&b.shift(),c.push(...b)}o.length===1&&c.push(n.ponto(o[0]));let h=[0];for(let A=1;A<c.length;A++)h.push(h[A-1]+Math.hypot(c[A][0]-c[A-1][0],c[A][1]-c[A-1][1]));let u=h[h.length-1],d=l.vel||(l.correr?3.2:1.25),p=Math.min(1,u/d),g=u/d+p,_=A=>{let S=A-a;return S<=0?0:S>=g?u:S<p?d*S*S/(2*p):S<g-p?d*(S-p/2):u-d*(g-S)**2/(2*p)},m=A=>{let S=A-a;return S<=0||S>=g?0:Math.min(1,S/p,(g-S)/p)},f=A=>{let S=1;for(;S<h.length-1&&h[S]<A;)S++;let T=(A-h[S-1])/Math.max(1e-6,h[S]-h[S-1]);return[c[S-1][0]+(c[S][0]-c[S-1][0])*Math.min(1,T),c[S-1][1]+(c[S][1]-c[S-1][1])*Math.min(1,T)]},E={k:r,pts:c,t0:a,dur:g,fim:a+g,tot:u,pos:A=>f(_(A)),rumo:A=>{let S=_(A),T=f(Math.max(0,S-.35)),b=f(Math.min(u,S+.6));return Math.abs(b[0]-T[0])+Math.abs(b[1]-T[1])<1e-4?null:Math.atan2(b[0]-T[0],b[1]-T[1])}},y=l.olharIni??(c.length>1?Math.atan2(c[1][0]-c[0][0],c[1][1]-c[0][1]):0),v=c.length>1?Math.atan2(c.at(-1)[0]-c.at(-2)[0],c.at(-1)[1]-c.at(-2)[1]):y;return r&&n.vivos.push(A=>{if(E.desligado)return;let S=E.pos(A),T=A>a&&A<E.fim,b=n.alturaChao(S[0],S[1]),x=E.rumo(A),M=A<=a?y:A>=E.fim?l.olharFim??v:x??v;r.place(S[0],S[1],b,M);let w=m(A);l.semPose||r.pose(T?l.correr?Kr(A,2.6,1.3*w):Kr(A,1.8,w):Sa(A,r.seed||0))}),n.andantes.push(E),E},n.vivos.push(r=>{for(let o in n.portas){let a=n.portas[o];if(!a.auto||!a.mundo)continue;let l=0;for(let c of n.andantes){if(c.desligado)continue;let h=c.pos(r),u=Math.hypot(h[0]-a.mundo[0],h[1]-a.mundo[1]);l=Math.max(l,1-Math.max(0,Math.min(1,(u-1)/1.4)))}a.abrir(Math.max(a.abertaFixa??0,l*l*(3-2*l)))}})}var ro={casaFrente:["casaFamilia",[-3.5,2.4,18.5],[.8,1.8,5.5],44,15,"Fachada da casa da fam\xEDlia vista da Rua das Flores"],portao:["casaFamilia",[-.2,1.6,13.5],[-2.6,1.3,7],45,15,"Port\xE3o e garagem com o carro"],sala:["casaFamilia",[-1.6,1.6,5.15],[-1.6,.95,1.6],62,15,"Sala: sof\xE1, TV, estante, ventilador"],salaTV:["casaFamilia",[-.6,1.3,2.4],[-4.4,.9,3.8],50,20,"Sala vista do lado da TV (sof\xE1 de frente)"],cozinha:["casaFamilia",[.3,1.6,-2.9],[-4.3,1,.1],55,12,"Cozinha: pia, fog\xE3o, geladeira, mesa"],mesaJantar:["casaFamilia",[-.2,1.5,.9],[-2.4,.8,-1.8],50,19.5,"Mesa de jantar da fam\xEDlia"],quartoFilho:["casaFamilia",[1.7,1.75,5],[4,.75,1.9],62,16,"Quarto do filho: cama, computador, p\xF4steres"],quartoCasal:["casaFamilia",[3.7,1.6,-2.4],[1.2,.7,-5],55,21,"Quarto do casal"],banheiro:["casaFamilia",[2.75,1.8,.12],[1.2,.7,-1.55],75,9,"Banheiro"],servico:["casaFamilia",[-4,1.6,-3.6],[.4,.9,-5.8],55,10,"\xC1rea de servi\xE7o: tanque e m\xE1quina"],quintal:["casaFamilia",[-4.2,1.7,-7],[2.8,.8,-10.2],50,17,"Quintal com churrasqueira, mesa e cachorro"],praca:["praca",[24,9,30],[0,2,4],45,10,"Pra\xE7a da Matriz vista de cima, de lado"],pracaChao:["praca",[11,1.7,23],[-1,2.5,6],45,16,"Pra\xE7a no n\xEDvel dos olhos: coreto, \xE1rvores, bancos"],igreja:["praca",[5,1.7,7],[0,6,-10],55,9,"Igreja Matriz de frente"],igrejaDentro:["praca",[1.2,1.7,-6.5],[0,2.4,-19],60,10,"Dentro da igreja: bancos, altar, vitrais"],coreto:["praca",[-9,2.2,19],[0,2.8,11],45,17.5,"Coreto"],fonte:["praca",[5.5,1.3,7],[0,1.2,1.5],45,11,"Fonte da pra\xE7a"],parquinho:["praca",[-10.5,1.65,20.8],[-14.5,.9,12],55,16,"Parquinho"],avenida:[null,[-2,1.7,3.2],[-60,2,-2],45,15,"Avenida Brasil com as lojas"],padaria:["padaria",[2.6,1.65,9],[-1.5,1.1,0],58,7.5,"Dentro da padaria"],padariaFrente:["padaria",[1.5,1.6,17],[0,2.6,10],45,7.5,"Fachada da padaria"],farmacia:["farmacia",[3.2,1.65,9],[-1,1.1,-1],58,15,"Dentro da farm\xE1cia"],loterica:["loterica",[3.5,1.65,9.5],[-1,1.4,0],58,14,"Dentro da lot\xE9rica"],lanchonete:["lanchonete",[3.5,1.65,9.5],[-1.2,1.1,0],58,13,"Dentro da lanchonete"],banco:["banco",[4,1.7,9.5],[-1,1.2,0],58,11,"Dentro do banco: caixas, fila, senha"],mercado:["mercado",[8.5,1.8,9.5],[-2,1.1,0],58,10,"Dentro do supermercado"],sorveteria:["sorveteria",[3.5,1.65,9.5],[-.5,1.1,0],58,15,"Dentro da sorveteria"],lojaRoupas:["lojaRoupas",[3.5,1.65,9.5],[-1.5,1.1,0],58,15,"Dentro da loja de roupas"],bar:["bar",[-3.6,1.7,9.6],[1.5,1,1],58,19.5,"Dentro do bar"],prefeitura:["prefeitura",[5,1.6,22],[0,5,6],50,11,"Prefeitura com colunas e bandeiras"],escola:["escola",[6,1.7,30],[0,3,18],45,7.2,"Port\xE3o da escola"],salaDeAula:["escola",[-10.6,2.1,-11.7],[-19,1.1,-17],62,9,"Sala de aula com alunos"],quadra:["escola",[-9,2.6,4],[10,.8,8],55,15,"Quadra coberta da escola"],hospital:["santaCasa",[-8,1.7,21],[2,3,7],45,14,"Fachada da Santa Casa com a ambul\xE2ncia"],salaEspera:["santaCasa",[2.5,1.7,4.8],[-12,1,-1],60,14,"Sala de espera do hospital"],enfermaria:["santaCasa",[4,1.7,-4.5],[10,.8,-9],60,22,"Enfermaria com leitos"],consultorio:["santaCasa",[-4.3,1.7,-4.6],[-12,1,-8],60,10,"Consult\xF3rio"],rodoviaria:["rodoviaria",[-.8,1.7,25],[0,3,8],48,16,"Rodovi\xE1ria"],plataforma:["rodoviaria",[17.5,2,-3.9],[-8,1.5,-9],55,16,"Plataforma com os \xF4nibus"],posto:["posto",[12,1.7,24],[0,2.5,8],45,18,"Posto de gasolina"],campo:["campo",[0,3.4,15],[0,1,-4],50,16.5,"Campo de futebol de v\xE1rzea"],cidadeAerea:[null,[210,150,230],[0,0,0],45,15,"A cidade inteira de cima"],pedraAlta:[null,[36,30,-112],[60,135,-540],42,16.5,"A Pedra Alta vista da cidade"],lago:[null,[5,3,178],[-35,6,132],50,17.4,"Orla do lago vista da \xE1gua: deck, quiosques, palmeiras e a cidade atr\xE1s"],ruaDasFlores:[null,[-90,1.7,63],[-40,2,64],45,15,"Rua das Flores (rua da casa da fam\xEDlia)"],noitePraca:["praca",[22,6,28],[0,2.5,6],45,20.5,"Pra\xE7a \xE0 noite, com tudo aceso"]},Yh=null,M_=new Set(["sala","salaTV","cozinha","mesaJantar","quartoFilho","quartoCasal","banheiro","servico","igrejaDentro","padaria","farmacia","loterica","lanchonete","banco","mercado","sorveteria","lojaRoupas","bar","salaDeAula","salaEspera","enfermaria","consultorio"]);function x_(n){let t=ro[n];if(!t)return null;Yh=Yh||Ta();let e=t[0]?Yh.find(o=>o.nome===t[0]):null,i=o=>{if(!e)return o.slice();let a=ei(e,o[0],o[2]);return[a[0],o[1]+.15,a[1]]},s=i(t[1]),r=i(t[2]);return{cam:s,alvo:r,fov:t[3],hora:t[4],texto:t[5],dentro:M_.has(n),foco:e?[e.x,e.z]:[r[0]*.3+s[0]*.7,r[2]*.3+s[2]*.7]}}var Fs=new Proxy({},{get:(n,t)=>typeof t=="string"?x_(t):void 0,ownKeys:()=>Object.keys(ro),getOwnPropertyDescriptor:(n,t)=>ro[t]?{enumerable:!0,configurable:!0}:void 0,has:(n,t)=>t in ro}),A_=Object.fromEntries(Object.entries(ro).map(([n,t])=>[n,t[5]]));function Wf(n,t={}){if(t.vista&&Fs[t.vista]){let o=Fs[t.vista];t={foco:o.foco,hora:o.hora,dentro:o.dentro,...t}}let e=t.foco||[0,-30],i=t.raio??70,s={cena:n,foco:e,raio:i,colisores:[],pontos:{},portas:{},vivos:[],postes:[],lugares:{},tex:Ch,_acesos:[],_noiteFn:[],andantes:[],acender:(o,a=1)=>s._acesos.push([o,a]),aNoite:o=>s._noiteFn.push(o)};jd(s,t),Jd(s),Zd(s),Kd(s),Qd(s);let r=o=>Math.max(0,Math.hypot(o.x-e[0],o.z-e[1])-Math.hypot(o.w,o.d)/2);for(let o of Ta()){let a=r(o),l=a<i?"perto":a<i*2.2?"medio":"longe",c=qd(s,{...o,y:.15});c.nivel=l,(Wa[o.tipo]||Wa.casa)(c,l),s.lugares[o.nome||o.tipo+o.seed]=o,n.add(t.fundir===!1?c.g:hi(c.g))}return Vf(s),s.vista=o=>Fs[o],t.vida!==!1&&Gf(s,t),s.hora(t.hora??15),s.focar(e[0],e[1]),t.dentro&&s.luzDentro(1),s.atualizar=(o,a)=>{t.horaAnda&&s.hora((t.hora??15)+o*t.horaAnda/3600);for(let l of s.vivos)l(o);if(a){let l=new O;a.getWorldDirection(l);let c=Math.max(6,Math.min(40,a.position.y*1.2+10));s.focar(a.position.x+l.x*c,a.position.z+l.z*c),s.ceu.position.copy(a.position)}},(n.userData.vida=n.userData.vida||[]).push(o=>s.atualizar(o)),s}var Xa=null;function b_(n){!n||!n._montada||(n.scene.traverse(t=>{t.geometry&&!t.geometry._comp&&t.geometry.dispose()}),n.scene.clear(),n._montada=!1,n.C=null)}function On(n,t,e={},i){let s=e.vista?Fs[e.vista]:null,r=Nd(n,t,"#BFE3F7",e.fov||s?.fov||45);r.camera.near=e.near||.08,r.camera.far=3e3,r.camera.updateProjectionMatrix();let o=null,a=()=>{Xa&&Xa!==r&&b_(Xa),Xa=r,r._montada=!0;let c=Wf(r.scene,{...e,foco:e.foco||s?.foco,hora:e.hora??s?.hora,dentro:e.dentro??s?.dentro});r.C=c,r.scene.userData.vida=[],o=i?i(c,r):null},l=e.mover?e.mover.map(([c,h])=>{let u=typeof h=="string"?Fs[h]:h;return[c,u.cam,u.alvo,u.fov??r.camera.fov]}):null;return r.update=(c,h)=>{r._montada||a();let u=r.C,d=r.camera;if(l){let g=Ma(l.map(f=>[f[0],f[1]]),h),_=Ma(l.map(f=>[f[0],f[2]]),h),m=Ma(l.map(f=>[f[0],f[3]]),h);dh(d,g,_),Math.abs(d.fov-m)>.01&&(d.fov=m,d.updateProjectionMatrix())}else s&&dh(d,s.cam,s.alvo);let p=o?o(c,h,d)||{}:{};return u.atualizar(c,d),Od({...e.fx||{},...p})},r}function Zh(n,t,e=0,i=0,s=0){let r=ba(t);return n.cena.add(r.root),r.place(e,i,n.alturaChao?n.alturaChao(e,i):0,s),r.seed=Math.abs(e*13+i*7|0)%9,r}var Xf=[On(0,7,{vista:"cidadeAerea",mover:[[0,"cidadeAerea"],[7,{cam:[95,55,75],alvo:[0,2,-25]}]]}),On(7,14,{vista:"avenida",mover:[[0,"avenida"],[7,{cam:[-16,1.7,3.3],alvo:[-75,2,-2.5]}]]}),On(14,21,{vista:"pracaChao",mover:[[0,{cam:[8,6,0],alvo:[0,2.2,-22]}],[7,{cam:[-8,6,0],alvo:[0,2.6,-21]}]]}),On(21,27,{vista:"igrejaDentro",mover:[[0,"igrejaDentro"],[6,{cam:[.6,1.9,-40],alvo:[0,2.6,-50]}]]}),On(27,37,{vista:"casaFrente",mover:[[0,"casaFrente"],[4,"casaFrente"],[10,{cam:[-66.7,3.15,65.2],alvo:[-62.7,1.15,72.8]}]]},n=>{let t=Zh(n,Wh);n.andar(t,["casaFamilia.rua","casaFamilia.portao","casaFamilia.frente"],27.6),n.portas["casaFamilia.portao"]&&(n.portas["casaFamilia.portao"].auto=!0)}),On(37,44,{vista:"sala"},n=>{let t=Zh(n,Wh);n.andar(t,["casaFamilia.frente","casaFamilia.sala","casaFamilia.cozinha"],37.2)}),On(44,50,{vista:"quartoFilho",mover:[[0,"quartoFilho"],[6,{cam:[-69.2,1.8,74.2],alvo:[-69.4,.8,77.6]}]]}),On(50,56,{vista:"padaria"}),On(56,62,{vista:"salaDeAula"}),On(62,68,{vista:"salaEspera"}),On(68,75,{vista:"lago",mover:[[0,"lago"],[7,{cam:[-8,3,180],alvo:[-45,6,133]}]]}),On(75,84,{vista:"noitePraca",mover:[[0,"noitePraca"],[9,{cam:[30,16,12],alvo:[0,2,-28]}]]})];window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter"].map(t=>document.fonts.load(t))).catch(()=>{});let n=new Ea(document.getElementById("film3d"));for(let t of Xf)n.add(t);window.addEventListener("hf-seek",t=>n.render(t.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
