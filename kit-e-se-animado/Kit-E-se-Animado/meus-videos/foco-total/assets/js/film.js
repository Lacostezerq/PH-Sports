var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var j0="170";var Vd=0,ah=1,Wd=2;var mu=1,tc=2,Si=3,hi=0,$e=1,ke=2,li=0,or=1,hr=2,lh=3,ch=4,Xd=5,Es=100,qd=101,Yd=102,Zd=103,$d=104,Jd=200,Kd=201,Qd=202,jd=203,Cl=204,Fl=205,tf=206,ef=207,nf=208,sf=209,rf=210,of=211,af=212,lf=213,cf=214,Pl=0,Il=1,Dl=2,ur=3,Ll=4,Bl=5,Ul=6,Hl=7,gu=0,hf=1,uf=2,ci=0,df=1,ff=2,pf=3,mf=4,gf=5,Ef=6,yf=7;var Eu=300,dr=301,fr=302,Nl=303,Ol=304,va=306,xn=1e3,vs=1001,zl=1002,_n=1003,vf=1004;var Eo=1005;var ai=1006,Ya=1007;var Ms=1008;var Fi=1009,yu=1010,vu=1011,qr=1012,ec=1013,Pi=1014,Ri=1015,wn=1016,nc=1017,ic=1018,pr=1020,Mu=35902,_u=1021,bu=1022,Dn=1023,Au=1024,Tu=1025,ar=1026,mr=1027,Su=1028,sc=1029,xu=1030,rc=1031;var oc=1033,Xo=33776,qo=33777,Yo=33778,Zo=33779,kl=35840,Gl=35841,Vl=35842,Wl=35843,Xl=36196,ql=37492,Yl=37496,Zl=37808,$l=37809,Jl=37810,Kl=37811,Ql=37812,jl=37813,t0=37814,e0=37815,n0=37816,i0=37817,s0=37818,r0=37819,o0=37820,a0=37821,$o=36492,l0=36494,c0=36495,Ru=36283,h0=36284,u0=36285,d0=36286;var Jo=2300,f0=2301,Za=2302,hh=2400,uh=2401,dh=2402;var Mf=3200,_f=3201;var wu=0,bf=1,Ji="",Fe="srgb",ns="srgb-linear",Ma="linear",be="srgb";var ks=7680;var fh=519,Af=512,Tf=513,Sf=514,Cu=515,xf=516,Rf=517,wf=518,Cf=519,p0=35044;var ph="300 es",wi=2e3,Ko=2001,ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $a=Math.PI/180,Qo=180/Math.PI;function Qi(){let n=__sr()*4294967295|0,t=__sr()*4294967295|0,e=__sr()*4294967295|0,i=__sr()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function an(n,t,e){return Math.max(t,Math.min(e,n))}function Ff(n,t){return(n%t+t)%t}function Ja(n,t,e){return(1-e)*n+e*t}function oi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var tt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],E=s[0],m=s[3],p=s[6],b=s[1],A=s[4],y=s[7],C=s[2],x=s[5],w=s[8];return r[0]=o*E+a*b+l*C,r[3]=o*m+a*A+l*x,r[6]=o*p+a*y+l*w,r[1]=c*E+h*b+u*C,r[4]=c*m+h*A+u*x,r[7]=c*p+h*y+u*w,r[2]=d*E+f*b+g*C,r[5]=d*m+f*A+g*x,r[8]=d*p+f*y+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return t[0]=u*E,t[1]=(s*c-h*i)*E,t[2]=(a*i-s*o)*E,t[3]=d*E,t[4]=(h*e-s*l)*E,t[5]=(s*r-a*e)*E,t[6]=f*E,t[7]=(i*l-c*e)*E,t[8]=(o*e-i*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ka.makeScale(t,e)),this}rotate(t){return this.premultiply(Ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ka=new $t;function Fu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pf(){let n=jo("canvas");return n.style.display="block",n}var mh={};function kr(n){n in mh||(mh[n]=!0,console.warn(n))}function If(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Df(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lf(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ce={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===be&&(n.r=Ci(n.r),n.g=Ci(n.g),n.b=Ci(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===be&&(n.r=lr(n.r),n.g=lr(n.g),n.b=lr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ji?Ma:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var gh=[.64,.33,.3,.6,.15,.06],Eh=[.2126,.7152,.0722],yh=[.3127,.329],vh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[ns]:{primaries:gh,whitePoint:yh,transfer:Ma,toXYZ:vh,fromXYZ:Mh,luminanceCoefficients:Eh,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:gh,whitePoint:yh,transfer:be,toXYZ:vh,fromXYZ:Mh,luminanceCoefficients:Eh,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});var Gs,m0=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gs===void 0&&(Gs=jo("canvas")),Gs.width=t.width,Gs.height=t.height;let i=Gs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=jo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ci(e[i]/255)*255):e[i]=Ci(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bf=0,ta=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qa(s[o].image)):r.push(Qa(s[o]))}else r=Qa(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?m0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Uf=0,Rn=class n extends ji{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=vs,s=vs,r=ai,o=Ms,a=Dn,l=Fi,c=n.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Qi(),this.name="",this.source=new ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xn:t.x=t.x-Math.floor(t.x);break;case vs:t.x=t.x<0?0:1;break;case zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xn:t.y=t.y-Math.floor(t.y);break;case vs:t.y=t.y<0?0:1;break;case zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Eu;Rn.DEFAULT_ANISOTROPY=1;var Te=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(f+1)/2,C=(p+1)/2,x=(h+d)/4,w=(u+E)/4,F=(g+m)/4;return A>y&&A>C?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=x/i,r=w/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=x/s,r=F/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=w/r,s=F/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-E)*(u-E)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-E)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},g0=class extends ji{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ta(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends g0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ea=class extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var E0=class extends Rn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],E=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=E;return}if(u!==E||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*E,b=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){let C=Math.sqrt(A),x=Math.atan2(C,p*b);m=Math.sin(m*x)/C,a=Math.sin(a*x)/C}let y=a*b;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+E*y,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*__sr(),e=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let t=__sr()*Math.PI*2,e=__sr()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ja=new R,_h=new zn,_s=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(t.matrixWorld),this.union(yo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),vo.subVectors(this.max,Dr),Vs.subVectors(t.a,Dr),Ws.subVectors(t.b,Dr),Xs.subVectors(t.c,Dr),Wi.subVectors(Ws,Vs),Xi.subVectors(Xs,Ws),hs.subVectors(Vs,Xs);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-hs.z,hs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,hs.z,0,-hs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-hs.y,hs.x,0];return!tl(e,Vs,Ws,Xs,vo)||(e=[1,0,0,0,1,0,0,0,1],!tl(e,Vs,Ws,Xs,vo))?!1:(Mo.crossVectors(Wi,Xi),e=[Mo.x,Mo.y,Mo.z],tl(e,Vs,Ws,Xs,vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mi=[new R,new R,new R,new R,new R,new R,new R,new R],Zn=new R,yo=new _s,Vs=new R,Ws=new R,Xs=new R,Wi=new R,Xi=new R,hs=new R,Dr=new R,vo=new R,Mo=new R,us=new R;function tl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){us.fromArray(n,r);let a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=t.dot(us),c=e.dot(us),h=i.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Hf=new _s,Lr=new R,el=new R,gr=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Hf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);let e=Lr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Lr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(el.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(el)),this.expandByPoint(Lr.copy(t.center).sub(el))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new R,nl=new R,_o=new R,qi=new R,il=new R,bo=new R,sl=new R,na=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){nl.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(nl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=qi.dot(this.direction),l=-qi.dot(_o),c=qi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let E=1/h;u*=E,d*=E,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nl).addScaledVector(_o,d),f}intersectSphere(t,e){_i.subVectors(t.center,this.origin);let i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,i,s,r){il.subVectors(e,t),bo.subVectors(i,t),sl.crossVectors(il,bo);let o=this.direction.dot(sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,t);let l=a*this.direction.dot(bo.crossVectors(qi,bo));if(l<0)return null;let c=a*this.direction.dot(il.cross(qi));if(c<0||l+c>o)return null;let h=-a*qi.dot(sl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,E,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,E,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/qs.setFromMatrixColumn(t,0).length(),r=1/qs.setFromMatrixColumn(t,1).length(),o=1/qs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,E=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-E*c,e[9]=-a*l,e[2]=E-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,E=c*u;e[0]=d+E*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=E+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,E=c*u;e[0]=d-E*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=E-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,E=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+E,e[1]=l*u,e[5]=E*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,E=a*c;e[0]=l*h,e[4]=E-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-E*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,E=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+E,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=E*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Of)}lookAt(t,e,i){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Yi.crossVectors(i,Pn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Yi.crossVectors(i,Pn)),Yi.normalize(),Ao.crossVectors(Pn,Yi),s[0]=Yi.x,s[4]=Ao.x,s[8]=Pn.x,s[1]=Yi.y,s[5]=Ao.y,s[9]=Pn.y,s[2]=Yi.z,s[6]=Ao.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],E=i[6],m=i[10],p=i[14],b=i[3],A=i[7],y=i[11],C=i[15],x=s[0],w=s[4],F=s[8],T=s[12],M=s[1],P=s[5],W=s[9],O=s[13],I=s[2],N=s[6],H=s[10],q=s[14],z=s[3],K=s[7],ct=s[11],bt=s[15];return r[0]=o*x+a*M+l*I+c*z,r[4]=o*w+a*P+l*N+c*K,r[8]=o*F+a*W+l*H+c*ct,r[12]=o*T+a*O+l*q+c*bt,r[1]=h*x+u*M+d*I+f*z,r[5]=h*w+u*P+d*N+f*K,r[9]=h*F+u*W+d*H+f*ct,r[13]=h*T+u*O+d*q+f*bt,r[2]=g*x+E*M+m*I+p*z,r[6]=g*w+E*P+m*N+p*K,r[10]=g*F+E*W+m*H+p*ct,r[14]=g*T+E*O+m*q+p*bt,r[3]=b*x+A*M+y*I+C*z,r[7]=b*w+A*P+y*N+C*K,r[11]=b*F+A*W+y*H+C*ct,r[15]=b*T+A*O+y*q+C*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],E=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+E*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],E=t[13],m=t[14],p=t[15],b=u*m*c-E*d*c+E*l*f-a*m*f-u*l*p+a*d*p,A=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,y=h*E*c-g*u*c+g*a*f-o*E*f-h*a*p+o*u*p,C=g*u*l-h*E*l-g*a*d+o*E*d+h*a*m-o*u*m,x=e*b+i*A+s*y+r*C;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/x;return t[0]=b*w,t[1]=(E*d*r-u*m*r-E*s*f+i*m*f+u*s*p-i*d*p)*w,t[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*p+i*l*p)*w,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*w,t[4]=A*w,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*w,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*w,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*w,t[8]=y*w,t[9]=(g*u*r-h*E*r-g*i*f+e*E*f+h*i*p-e*u*p)*w,t[10]=(o*E*r-g*a*r+g*i*c-e*E*c-o*i*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*w,t[12]=C*w,t[13]=(h*E*s-g*u*s+g*i*d-e*E*d-h*i*m+e*u*m)*w,t[14]=(g*a*s-o*E*s-g*i*l+e*E*l+o*i*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*w,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,E=o*h,m=o*u,p=a*u,b=l*c,A=l*h,y=l*u,C=i.x,x=i.y,w=i.z;return s[0]=(1-(E+p))*C,s[1]=(f+y)*C,s[2]=(g-A)*C,s[3]=0,s[4]=(f-y)*x,s[5]=(1-(d+p))*x,s[6]=(m+b)*x,s[7]=0,s[8]=(g+A)*w,s[9]=(m-b)*w,s[10]=(1-(d+E))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=qs.set(s[0],s[1],s[2]).length(),o=qs.set(s[4],s[5],s[6]).length(),a=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$n.copy(this);let c=1/r,h=1/o,u=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,e.setFromRotationMatrix($n),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=wi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,g;if(a===wi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ko)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=wi){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h,g,E;if(a===wi)g=(o+r)*u,E=-2*u;else if(a===Ko)g=r*u,E=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},qs=new R,$n=new ye,Nf=new R(0,0,0),Of=new R(1,1,1),Yi=new R,Ao=new R,Pn=new R,bh=new ye,Ah=new zn,Ii=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var ia=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zf=0,Th=new R,Ys=new zn,bi=new ye,To=new R,Br=new R,kf=new R,Gf=new zn,Sh=new R(1,0,0),xh=new R(0,1,0),Rh=new R(0,0,1),wh={type:"added"},Vf={type:"removed"},Zs={type:"childadded",child:null},rl={type:"childremoved",child:null},Je=class n extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new R,e=new Ii,i=new zn,s=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new $t}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(Sh,t)}rotateY(t){return this.rotateOnAxis(xh,t)}rotateZ(t){return this.rotateOnAxis(Rh,t)}translateOnAxis(t,e){return Th.copy(t).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sh,t)}translateY(t){return this.translateOnAxis(xh,t)}translateZ(t){return this.translateOnAxis(Rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?To.copy(t):To.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Br,To,this.up):bi.lookAt(To,Br,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(bi),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wh),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vf),rl.child=t,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wh),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Je.DEFAULT_UP=new R(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new R,Ai=new R,ol=new R,Ti=new R,$s=new R,Js=new R,Ch=new R,al=new R,ll=new R,cl=new R,hl=new Te,ul=new Te,dl=new Te,Ki=class n{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Jn.subVectors(t,e),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Jn.subVectors(s,e),Ai.subVectors(i,e),ol.subVectors(t,e);let o=Jn.dot(Jn),a=Jn.dot(Ai),l=Jn.dot(ol),c=Ai.dot(Ai),h=Ai.dot(ol),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return hl.setScalar(0),ul.setScalar(0),dl.setScalar(0),hl.fromBufferAttribute(t,e),ul.fromBufferAttribute(t,i),dl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(hl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(t,e,i,s){return Jn.subVectors(i,e),Ai.subVectors(t,e),Jn.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Jn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;$s.subVectors(s,i),Js.subVectors(r,i),al.subVectors(t,i);let l=$s.dot(al),c=Js.dot(al);if(l<=0&&c<=0)return e.copy(i);ll.subVectors(t,s);let h=$s.dot(ll),u=Js.dot(ll);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector($s,o);cl.subVectors(t,r);let f=$s.dot(cl),g=Js.dot(cl);if(g>=0&&f<=g)return e.copy(r);let E=f*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Js,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ch.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Ch,a);let p=1/(m+E+d);return o=E*p,a=d*p,e.copy(i).addScaledVector($s,o).addScaledVector(Js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},So={h:0,s:0,l:0};function fl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var xt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ce.workingColorSpace){if(t=Ff(t,1),e=an(e,0,1),i=an(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=fl(o,r,t+1/3),this.g=fl(o,r,t),this.b=fl(o,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let i=Pu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ce.fromWorkingColorSpace(fn.copy(this),t),Math.round(an(fn.r*255,0,255))*65536+Math.round(an(fn.g*255,0,255))*256+Math.round(an(fn.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(fn.copy(this),e);let i=fn.r,s=fn.g,r=fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Fe){ce.fromWorkingColorSpace(fn.copy(this),t);let e=fn.r,i=fn.g,s=fn.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(So);let i=Ja(Zi.h,So.h,e),s=Ja(Zi.s,So.s,e),r=Ja(Zi.l,So.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new xt;xt.NAMES=Pu;var Wf=0,Di=class extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Qi(),this.name="",this.blending=or,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Fl,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cl&&(i.blendSrc=this.blendSrc),this.blendDst!==Fl&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},re=class extends Di{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new R,xo=new tt,pn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=p0,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==p0&&(t.usage=this.usage),t}};var sa=class extends pn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ra=class extends pn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var xe=class extends pn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Xf=0,On=new ye,pl=new Je,Ks=new R,In=new _s,Ur=new _s,en=new R,sn=class n extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fu(t)?ra:sa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,i){return On.makeTranslation(t,e,i),this.applyMatrix4(On),this}scale(t,e,i){return On.makeScale(t,e,i),this.applyMatrix4(On),this}lookAt(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(In.min,Ur.min),In.expandByPoint(en),en.addVectors(In.max,Ur.max),In.expandByPoint(en)):(In.expandByPoint(Ur.min),In.expandByPoint(Ur.max))}In.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(t,c),en.add(Ks)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new R,l[F]=new R;let c=new R,h=new R,u=new R,d=new tt,f=new tt,g=new tt,E=new R,m=new R;function p(F,T,M){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[F].add(E),a[T].add(E),a[M].add(E),l[F].add(m),l[T].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let F=0,T=b.length;F<T;++F){let M=b[F],P=M.start,W=M.count;for(let O=P,I=P+W;O<I;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let A=new R,y=new R,C=new R,x=new R;function w(F){C.fromBufferAttribute(s,F),x.copy(C);let T=a[F];A.copy(T),A.sub(C.multiplyScalar(C.dot(T))).normalize(),y.crossVectors(x,T);let P=y.dot(l[F])<0?-1:1;o.setXYZW(F,A.x,A.y,A.z,P)}for(let F=0,T=b.length;F<T;++F){let M=b[F],P=M.start,W=M.count;for(let O=P,I=P+W;O<I;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),E=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,E),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new pn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fh=new ye,ds=new na,Ro=new gr,Ph=new R,wo=new R,Co=new R,Fo=new R,ml=new R,Po=new R,Ih=new R,Io=new R,rt=class extends Je{constructor(t=new sn,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ml.fromBufferAttribute(u,t),o?Po.addScaledVector(ml,h):Po.addScaledVector(ml.sub(e),h))}e.add(Po)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),ds.copy(t.ray).recast(t.near),!(Ro.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Ro,Ph)===null||ds.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Fh.copy(r).invert(),ds.copy(t.ray).applyMatrix4(Fh),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=d.length;g<E;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,C=A;y<C;y+=3){let x=a.getX(y),w=a.getX(y+1),F=a.getX(y+2);s=Do(this,p,t,i,c,h,u,x,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let b=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);s=Do(this,o,t,i,c,h,u,b,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=d.length;g<E;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,C=A;y<C;y+=3){let x=y,w=y+1,F=y+2;s=Do(this,p,t,i,c,h,u,x,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let b=m,A=m+1,y=m+2;s=Do(this,o,t,i,c,h,u,b,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function qf(n,t,e,i,s,r,o,a){let l;if(t.side===$e?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===hi,a),l===null)return null;Io.copy(a),Io.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Io);return c<e.near||c>e.far?null:{distance:c,point:Io.clone(),object:n}}function Do(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,wo),n.getVertexPosition(l,Co),n.getVertexPosition(c,Fo);let h=qf(n,t,e,i,wo,Co,Fo,Ih);if(h){let u=new R;Ki.getBarycoord(Ih,wo,Co,Fo,u),s&&(h.uv=Ki.getInterpolatedAttribute(s,a,l,c,u,new tt)),r&&(h.uv1=Ki.getInterpolatedAttribute(r,a,l,c,u,new tt)),o&&(h.normal=Ki.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};Ki.getNormal(wo,Co,Fo,d.normal),h.face=d,h.barycoord=u}return h}var Ge=class n extends sn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function g(E,m,p,b,A,y,C,x,w,F,T){let M=y/w,P=C/F,W=y/2,O=C/2,I=x/2,N=w+1,H=F+1,q=0,z=0,K=new R;for(let ct=0;ct<H;ct++){let bt=ct*P-O;for(let Ht=0;Ht<N;Ht++){let ae=Ht*M-W;K[E]=ae*b,K[m]=bt*A,K[p]=I,c.push(K.x,K.y,K.z),K[E]=0,K[m]=0,K[p]=x>0?1:-1,h.push(K.x,K.y,K.z),u.push(Ht/w),u.push(1-ct/F),q+=1}}for(let ct=0;ct<F;ct++)for(let bt=0;bt<w;bt++){let Ht=d+bt+N*ct,ae=d+bt+N*(ct+1),Y=d+(bt+1)+N*(ct+1),et=d+(bt+1)+N*ct;l.push(Ht,ae,et),l.push(ae,Y,et),z+=6}a.addGroup(f,z,T),f+=z,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Er(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Mn(n){let t={};for(let e=0;e<n.length;e++){let i=Er(n[e]);for(let s in i)t[s]=i[s]}return t}function Yf(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Iu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var _r={clone:Er,merge:Mn},Zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Di{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=Yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},oa=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$i=new R,Dh=new tt,Lh=new tt,ln=class extends oa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Dh,Lh),e.subVectors(Lh,Dh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($a*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Qs=-90,js=1,y0=class extends Je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(Qs,js,t,e);s.layers=this.layers,this.add(s);let r=new ln(Qs,js,t,e);r.layers=this.layers,this.add(r);let o=new ln(Qs,js,t,e);o.layers=this.layers,this.add(o);let a=new ln(Qs,js,t,e);a.layers=this.layers,this.add(a);let l=new ln(Qs,js,t,e);l.layers=this.layers,this.add(l);let c=new ln(Qs,js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},aa=class extends Rn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:dr,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},v0=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new aa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$e,blending:li});r.uniforms.tEquirect.value=e;let o=new rt(s,r),a=e.minFilter;return e.minFilter===Ms&&(e.minFilter=ai),new y0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},gl=new R,Jf=new R,Kf=new $t,xi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=gl.subVectors(i,e).cross(Jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(gl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Kf.getNormalMatrix(t),s=this.coplanarPoint(gl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new gr,Lo=new R,Yr=class{constructor(t=new xi,e=new xi,i=new xi,s=new xi,r=new xi,o=new xi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],E=s[10],m=s[11],p=s[12],b=s[13],A=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,m-f,y-p).normalize(),i[1].setComponents(l+r,d+c,m+f,y+p).normalize(),i[2].setComponents(l+o,d+h,m+g,y+b).normalize(),i[3].setComponents(l-o,d-h,m-g,y-b).normalize(),i[4].setComponents(l-a,d-u,m-E,y-A).normalize(),e===wi)i[5].setComponents(l+a,d+u,m+E,y+A).normalize();else if(e===Ko)i[5].setComponents(a,u,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Du(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.__noRaf(s)}return{start:function(){t!==!0&&e!==null&&(i=n.__noRaf(s),t=!0)},stop:function(){n.__noCaf(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Qf(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],E=u[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++d,u[d]=E)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let E=u[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Bt=class n extends sn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],E=[],m=[];for(let p=0;p<h;p++){let b=p*d-o;for(let A=0;A<c;A++){let y=A*u-r;g.push(y,-b,0),E.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let A=b+c*p,y=b+c*(p+1),C=b+1+c*(p+1),x=b+1+c*p;f.push(A,y,x),f.push(y,C,x)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(E,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tp=`#ifdef USE_ALPHAHASH
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
#endif`,ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
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
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
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
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dp=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bp=`#define PI 3.141592653589793
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
} // validated`,Ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
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
}`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
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
#endif`,Kp=`struct PhysicalMaterial {
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
}`,Qp=`
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,t1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l1=`#if defined( USE_POINTS_UV )
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
#endif`,c1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`#ifdef USE_MORPHTARGETS
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
#endif`,m1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_1=`#ifdef USE_NORMALMAP
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
#endif`,b1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H1=`float getShadowMask() {
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
}`,N1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O1=`#ifdef USE_SKINNING
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
#endif`,z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k1=`#ifdef USE_SKINNING
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
#endif`,G1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q1=`#ifdef USE_TRANSMISSION
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
#endif`,Y1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j1=`uniform sampler2D t2D;
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
}`,om=`#define DISTANCE
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
}`,am=`#define DISTANCE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
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
}`,um=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,fm=`uniform vec3 diffuse;
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define MATCAP
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
}`,Em=`#define MATCAP
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
}`,ym=`#define NORMAL
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
}`,vm=`#define NORMAL
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
}`,Mm=`#define PHONG
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
}`,_m=`#define PHONG
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
}`,bm=`#define STANDARD
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
}`,Am=`#define STANDARD
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
}`,Tm=`#define TOON
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
}`,Sm=`#define TOON
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
}`,xm=`uniform float size;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Cm=`uniform vec3 color;
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
}`,Fm=`uniform float rotation;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:jf,alphahash_pars_fragment:tp,alphamap_fragment:ep,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:sp,aomap_fragment:rp,aomap_pars_fragment:op,batching_pars_vertex:ap,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:hp,bsdfs:up,iridescence_fragment:dp,bumpmap_pars_fragment:fp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:Ep,color_fragment:yp,color_pars_fragment:vp,color_pars_vertex:Mp,color_vertex:_p,common:bp,cube_uv_reflection_fragment:Ap,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Sp,displacementmap_vertex:xp,emissivemap_fragment:Rp,emissivemap_pars_fragment:wp,colorspace_fragment:Cp,colorspace_pars_fragment:Fp,envmap_fragment:Pp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Dp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Xp,envmap_vertex:Bp,fog_vertex:Up,fog_pars_vertex:Hp,fog_fragment:Np,fog_pars_fragment:Op,gradientmap_pars_fragment:zp,lightmap_pars_fragment:kp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Vp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:Zp,lights_phong_pars_fragment:$p,lights_physical_fragment:Jp,lights_physical_pars_fragment:Kp,lights_fragment_begin:Qp,lights_fragment_maps:jp,lights_fragment_end:t1,logdepthbuf_fragment:e1,logdepthbuf_pars_fragment:n1,logdepthbuf_pars_vertex:i1,logdepthbuf_vertex:s1,map_fragment:r1,map_pars_fragment:o1,map_particle_fragment:a1,map_particle_pars_fragment:l1,metalnessmap_fragment:c1,metalnessmap_pars_fragment:h1,morphinstance_vertex:u1,morphcolor_vertex:d1,morphnormal_vertex:f1,morphtarget_pars_vertex:p1,morphtarget_vertex:m1,normal_fragment_begin:g1,normal_fragment_maps:E1,normal_pars_fragment:y1,normal_pars_vertex:v1,normal_vertex:M1,normalmap_pars_fragment:_1,clearcoat_normal_fragment_begin:b1,clearcoat_normal_fragment_maps:A1,clearcoat_pars_fragment:T1,iridescence_pars_fragment:S1,opaque_fragment:x1,packing:R1,premultiplied_alpha_fragment:w1,project_vertex:C1,dithering_fragment:F1,dithering_pars_fragment:P1,roughnessmap_fragment:I1,roughnessmap_pars_fragment:D1,shadowmap_pars_fragment:L1,shadowmap_pars_vertex:B1,shadowmap_vertex:U1,shadowmask_pars_fragment:H1,skinbase_vertex:N1,skinning_pars_vertex:O1,skinning_vertex:z1,skinnormal_vertex:k1,specularmap_fragment:G1,specularmap_pars_fragment:V1,tonemapping_fragment:W1,tonemapping_pars_fragment:X1,transmission_fragment:q1,transmission_pars_fragment:Y1,uv_pars_fragment:Z1,uv_pars_vertex:$1,uv_vertex:J1,worldpos_vertex:K1,background_vert:Q1,background_frag:j1,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:Em,meshnormal_vert:ym,meshnormal_frag:vm,meshphong_vert:Mm,meshphong_frag:_m,meshphysical_vert:bm,meshphysical_frag:Am,meshtoon_vert:Tm,meshtoon_frag:Sm,points_vert:xm,points_frag:Rm,shadow_vert:wm,shadow_frag:Cm,sprite_vert:Fm,sprite_frag:Pm},ut={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ri={basic:{uniforms:Mn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Mn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new xt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Mn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Mn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Mn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new xt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Mn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Mn([ut.points,ut.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Mn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Mn([ut.common,ut.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Mn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Mn([ut.sprite,ut.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Mn([ut.common,ut.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Mn([ut.lights,ut.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};ri.physical={uniforms:Mn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Bo={r:0,b:0,g:0},ps=new Ii,Im=new ye;function Dm(n,t,e,i,s,r,o){let a=new xt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?e:t).get(A)),A}function E(b){let A=!1,y=g(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),A=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,A){let y=g(A);y&&(y.isCubeTexture||y.mapping===va)?(h===void 0&&(h=new rt(new Ge(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Er(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,x,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ps.copy(A.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(ps)),h.material.toneMapped=ce.getTransfer(y.colorSpace)!==be,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new rt(new Bt(2,2),new Xe({name:"BackgroundMaterial",uniforms:Er(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ce.getTransfer(y.colorSpace)!==be,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,A){b.getRGB(Bo,Iu(n)),i.buffers.color.setClear(Bo.r,Bo.g,Bo.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),l=A,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:E,addToRenderList:m}}function Lm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,P,W,O,I){let N=!1,H=u(O,W,P);r!==H&&(r=H,c(r.object)),N=f(M,O,W,I),N&&g(M,O,W,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,y(M,P,W,O),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,P,W){let O=W.wireframe===!0,I=i[M.id];I===void 0&&(I={},i[M.id]=I);let N=I[P.id];N===void 0&&(N={},I[P.id]=N);let H=N[O];return H===void 0&&(H=d(l()),N[O]=H),H}function d(M){let P=[],W=[],O=[];for(let I=0;I<e;I++)P[I]=0,W[I]=0,O[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,P,W,O){let I=r.attributes,N=P.attributes,H=0,q=W.getAttributes();for(let z in q)if(q[z].location>=0){let ct=I[z],bt=N[z];if(bt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),ct===void 0||ct.attribute!==bt||bt&&ct.data!==bt.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(M,P,W,O){let I={},N=P.attributes,H=0,q=W.getAttributes();for(let z in q)if(q[z].location>=0){let ct=N[z];ct===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));let bt={};bt.attribute=ct,ct&&ct.data&&(bt.data=ct.data),I[z]=bt,H++}r.attributes=I,r.attributesNum=H,r.index=O}function E(){let M=r.newAttributes;for(let P=0,W=M.length;P<W;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){let W=r.newAttributes,O=r.enabledAttributes,I=r.attributeDivisors;W[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),I[M]!==P&&(n.vertexAttribDivisor(M,P),I[M]=P)}function b(){let M=r.newAttributes,P=r.enabledAttributes;for(let W=0,O=P.length;W<O;W++)P[W]!==M[W]&&(n.disableVertexAttribArray(W),P[W]=0)}function A(M,P,W,O,I,N,H){H===!0?n.vertexAttribIPointer(M,P,W,I,N):n.vertexAttribPointer(M,P,W,O,I,N)}function y(M,P,W,O){E();let I=O.attributes,N=W.getAttributes(),H=P.defaultAttributeValues;for(let q in N){let z=N[q];if(z.location>=0){let K=I[q];if(K===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){let ct=K.normalized,bt=K.itemSize,Ht=t.get(K);if(Ht===void 0)continue;let ae=Ht.buffer,Y=Ht.type,et=Ht.bytesPerElement,Rt=Y===n.INT||Y===n.UNSIGNED_INT||K.gpuType===ec;if(K.isInterleavedBufferAttribute){let ht=K.data,Lt=ht.stride,zt=K.offset;if(ht.isInstancedInterleavedBuffer){for(let Jt=0;Jt<z.locationSize;Jt++)p(z.location+Jt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Jt=0;Jt<z.locationSize;Jt++)m(z.location+Jt);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let Jt=0;Jt<z.locationSize;Jt++)A(z.location+Jt,bt/z.locationSize,Y,ct,Lt*et,(zt+bt/z.locationSize*Jt)*et,Rt)}else{if(K.isInstancedBufferAttribute){for(let ht=0;ht<z.locationSize;ht++)p(z.location+ht,K.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ht=0;ht<z.locationSize;ht++)m(z.location+ht);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let ht=0;ht<z.locationSize;ht++)A(z.location+ht,bt/z.locationSize,Y,ct,bt*et,bt/z.locationSize*ht*et,Rt)}}else if(H!==void 0){let ct=H[q];if(ct!==void 0)switch(ct.length){case 2:n.vertexAttrib2fv(z.location,ct);break;case 3:n.vertexAttrib3fv(z.location,ct);break;case 4:n.vertexAttrib4fv(z.location,ct);break;default:n.vertexAttrib1fv(z.location,ct)}}}}b()}function C(){F();for(let M in i){let P=i[M];for(let W in P){let O=P[W];for(let I in O)h(O[I].object),delete O[I];delete P[W]}delete i[M]}}function x(M){if(i[M.id]===void 0)return;let P=i[M.id];for(let W in P){let O=P[W];for(let I in O)h(O[I].object),delete O[I];delete P[W]}delete i[M.id]}function w(M){for(let P in i){let W=i[P];if(W[M.id]===void 0)continue;let O=W[M.id];for(let I in O)h(O[I].object),delete O[I];delete W[M.id]}}function F(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:x,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:m,disableUnusedAttributes:b}}function Bm(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let E=0;E<u;E++)g+=h[E]*d[E];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Um(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Dn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let F=w===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Fi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ri&&!F)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,x=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:C,maxSamples:x}}function Hm(n){let t=this,e=null,i=0,s=!1,r=!1,o=new xi,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,E=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:i,A=b*4,y=p.clippingState||null;l.value=y,y=h(g,d,A,f);for(let C=0;C!==A;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let E=u!==null?u.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let p=f+E*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,y=f;A!==E;++A,y+=4)o.copy(u[A]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}function Nm(n){let t=new WeakMap;function e(o,a){return a===Nl?o.mapping=dr:a===Ol&&(o.mapping=fr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Nl||a===Ol)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new v0(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var yr=class extends oa{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rr=4,Bh=[.125,.215,.35,.446,.526,.582],ys=20,El=new yr,Uh=new xt,yl=null,vl=0,Ml=0,_l=!1,gs=(1+Math.sqrt(5))/2,tr=1/gs,Hh=[new R(-gs,tr,0),new R(gs,tr,0),new R(-tr,0,gs),new R(tr,0,gs),new R(0,gs,-tr),new R(0,gs,tr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],la=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){yl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,vl,Ml),this._renderer.xr.enabled=_l,t.scissorTest=!1,Uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dr||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:wn,format:Dn,colorSpace:ns,depthBuffer:!1},s=Nh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Om(r)),this._blurMaterial=zm(r,t,e)}return s}_compileMaterial(t){let e=new rt(this._lodPlanes[0],t);this._renderer.compile(e,El)}_sceneToCubeUV(t,e,i,s){let a=new ln(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Uh),h.toneMapping=ci,h.autoClear=!1;let f=new re({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new rt(new Ge,f),E=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,E=!0):(f.color.copy(Uh),E=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let A=this._cubeSize;Uo(s,b*A,p>2?A:0,A,A),h.setRenderTarget(s),E&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===dr||t.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Uo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,El)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hh[(s-r-1)%Hh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new rt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ys-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):ys;m>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);let p=[],b=0;for(let w=0;w<ys;++w){let F=w/E,T=Math.exp(-F*F/2);p.push(T),w===0?b+=T:w<m&&(b+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-i;let y=this._sizeLods[s],C=3*y*(s>A-rr?s-A+rr:0),x=4*(this._cubeSize-y);Uo(e,C,x,3*y,2*y),l.setRenderTarget(e),l.render(u,El)}};function Om(n){let t=[],e=[],i=[],s=n,r=n-rr+1+Bh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-rr?l=Bh[o-n+rr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,E=3,m=2,p=1,b=new Float32Array(E*g*f),A=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let x=0;x<f;x++){let w=x%3*2/3-1,F=x>2?0:-1,T=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];b.set(T,E*g*x),A.set(d,m*g*x);let M=[x,x,x,x,x,x];y.set(M,p*g*x)}let C=new sn;C.setAttribute("position",new pn(b,E)),C.setAttribute("uv",new pn(A,m)),C.setAttribute("faceIndex",new pn(y,p)),t.push(C),s>rr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Nh(n,t,e){let i=new nn(n,t,e);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function zm(n,t,e){let i=new Float32Array(ys),s=new R(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ac(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Oh(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function zh(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function km(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Nl||l===Ol,h=l===dr||l===fr;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new la(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new la(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Gm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&kr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Vm(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let E=d.morphAttributes[g];for(let m=0,p=E.length;m<p;m++)t.remove(E[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let E=f[g];for(let m=0,p=E.length;m<p;m++)t.update(E[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,E=0;if(f!==null){let b=f.array;E=f.version;for(let A=0,y=b.length;A<y;A+=3){let C=b[A+0],x=b[A+1],w=b[A+2];d.push(C,x,x,w,w,C)}}else if(g!==void 0){let b=g.array;E=g.version;for(let A=0,y=b.length/3-1;A<y;A+=3){let C=A+0,x=A+1,w=A+2;d.push(C,x,x,w,w,C)}}else return;let m=new(Fu(d)?ra:sa)(d,1);m.version=E;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Wm(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,E){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],E[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,E,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*E[b];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Xm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function qm(n,t,e){let i=new WeakMap,s=new Te;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let T=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),E===!0&&(A=3);let y=a.attributes.position.count*A,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let x=new Float32Array(y*C*4*u),w=new ea(x,y,C,u);w.type=Ri,w.needsUpdate=!0;let F=A*4;for(let M=0;M<u;M++){let P=m[M],W=p[M],O=b[M],I=y*C*4*M;for(let N=0;N<P.count;N++){let H=N*F;f===!0&&(s.fromBufferAttribute(P,N),x[I+H+0]=s.x,x[I+H+1]=s.y,x[I+H+2]=s.z,x[I+H+3]=0),g===!0&&(s.fromBufferAttribute(W,N),x[I+H+4]=s.x,x[I+H+5]=s.y,x[I+H+6]=s.z,x[I+H+7]=0),E===!0&&(s.fromBufferAttribute(O,N),x[I+H+8]=s.x,x[I+H+9]=s.y,x[I+H+10]=s.z,x[I+H+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new tt(y,C)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Ym(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var vr=class extends Rn{constructor(t,e,i,s,r,o,a,l,c,h=ar){if(h!==ar&&h!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ar&&(i=Pi),i===void 0&&h===mr&&(i=pr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Lu=new Rn,kh=new vr(1,1),Bu=new ea,Uu=new E0,Hu=new aa,Gh=[],Vh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),qh=new Float32Array(4);function br(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _a(n,t){let e=Vh[t];e===void 0&&(e=new Int32Array(t),Vh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Zm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $m(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2fv(this.addr,t),Qe(e,t)}}function Jm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;n.uniform3fv(this.addr,t),Qe(e,t)}}function Km(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4fv(this.addr,t),Qe(e,t)}}function Qm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,i))return;qh.set(i),n.uniformMatrix2fv(this.addr,!1,qh),Qe(e,i)}}function jm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,i))return;Xh.set(i),n.uniformMatrix3fv(this.addr,!1,Xh),Qe(e,i)}}function t2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,i))return;Wh.set(i),n.uniformMatrix4fv(this.addr,!1,Wh),Qe(e,i)}}function e2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function n2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2iv(this.addr,t),Qe(e,t)}}function i2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3iv(this.addr,t),Qe(e,t)}}function s2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4iv(this.addr,t),Qe(e,t)}}function r2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function o2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2uiv(this.addr,t),Qe(e,t)}}function a2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3uiv(this.addr,t),Qe(e,t)}}function l2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4uiv(this.addr,t),Qe(e,t)}}function c2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(kh.compareFunction=Cu,r=kh):r=Lu,e.setTexture2D(t||r,s)}function h2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Uu,s)}function u2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Hu,s)}function d2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Bu,s)}function f2(n){switch(n){case 5126:return Zm;case 35664:return $m;case 35665:return Jm;case 35666:return Km;case 35674:return Qm;case 35675:return jm;case 35676:return t2;case 5124:case 35670:return e2;case 35667:case 35671:return n2;case 35668:case 35672:return i2;case 35669:case 35673:return s2;case 5125:return r2;case 36294:return o2;case 36295:return a2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return h2;case 35680:case 36300:case 36308:case 36293:return u2;case 36289:case 36303:case 36311:case 36292:return d2}}function p2(n,t){n.uniform1fv(this.addr,t)}function m2(n,t){let e=br(t,this.size,2);n.uniform2fv(this.addr,e)}function g2(n,t){let e=br(t,this.size,3);n.uniform3fv(this.addr,e)}function E2(n,t){let e=br(t,this.size,4);n.uniform4fv(this.addr,e)}function y2(n,t){let e=br(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function v2(n,t){let e=br(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function M2(n,t){let e=br(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _2(n,t){n.uniform1iv(this.addr,t)}function b2(n,t){n.uniform2iv(this.addr,t)}function A2(n,t){n.uniform3iv(this.addr,t)}function T2(n,t){n.uniform4iv(this.addr,t)}function S2(n,t){n.uniform1uiv(this.addr,t)}function x2(n,t){n.uniform2uiv(this.addr,t)}function R2(n,t){n.uniform3uiv(this.addr,t)}function w2(n,t){n.uniform4uiv(this.addr,t)}function C2(n,t,e){let i=this.cache,s=t.length,r=_a(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lu,r[o])}function F2(n,t,e){let i=this.cache,s=t.length,r=_a(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Uu,r[o])}function P2(n,t,e){let i=this.cache,s=t.length,r=_a(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Hu,r[o])}function I2(n,t,e){let i=this.cache,s=t.length,r=_a(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bu,r[o])}function D2(n){switch(n){case 5126:return p2;case 35664:return m2;case 35665:return g2;case 35666:return E2;case 35674:return y2;case 35675:return v2;case 35676:return M2;case 5124:case 35670:return _2;case 35667:case 35671:return b2;case 35668:case 35672:return A2;case 35669:case 35673:return T2;case 5125:return S2;case 36294:return x2;case 36295:return R2;case 36296:return w2;case 35678:case 36198:case 36298:case 36306:case 35682:return C2;case 35679:case 36299:case 36307:return F2;case 35680:case 36300:case 36308:case 36293:return P2;case 36289:case 36303:case 36311:case 36292:return I2}}var M0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=f2(e.type)}},_0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D2(e.type)}},b0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},bl=/(\w+)(\])?(\[|\.)?/g;function Yh(n,t){n.seq.push(t),n.map[t.id]=t}function L2(n,t,e){let i=n.name,s=i.length;for(bl.lastIndex=0;;){let r=bl.exec(i),o=bl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yh(e,c===void 0?new M0(a,n,t):new _0(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new b0(a),Yh(e,u)),e=u}}}var cr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);L2(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Zh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var B2=37297,U2=0;function H2(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var $h=new $t;function N2(n){ce._getMatrix($h,ce.workingColorSpace,n);let t=`mat3( ${$h.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(n)){case Ma:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Jh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+H2(n.getShaderSource(t),o)}else return s}function O2(n,t){let e=N2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function z2(n,t){let e;switch(t){case df:e="Linear";break;case ff:e="Reinhard";break;case pf:e="Cineon";break;case mf:e="ACESFilmic";break;case Ef:e="AgX";break;case yf:e="Neutral";break;case gf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ho=new R;function k2(){ce.getLuminanceCoefficients(Ho);let n=Ho.x.toFixed(4),t=Ho.y.toFixed(4),e=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function V2(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function W2(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Gr(n){return n!==""}function Kh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X2=/^[ \t]*#include +<([\w\d./]+)>/gm;function A0(n){return n.replace(X2,Y2)}var q2=new Map;function Y2(n,t){let e=Qt[t];if(e===void 0){let i=q2.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return A0(e)}var Z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(n){return n.replace(Z2,$2)}function $2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function J2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===mu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===tc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function K2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case fr:t="ENVMAP_TYPE_CUBE";break;case va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Q2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fr:t="ENVMAP_MODE_REFRACTION";break}return t}function j2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gu:t="ENVMAP_BLENDING_MULTIPLY";break;case hf:t="ENVMAP_BLENDING_MIX";break;case uf:t="ENVMAP_BLENDING_ADD";break}return t}function tg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function eg(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=J2(e),c=K2(e),h=Q2(e),u=j2(e),d=tg(e),f=G2(e),g=V2(r),E=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(m=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ci?z2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,O2("linearToOutputTexel",e.outputColorSpace),k2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),o=A0(o),o=Kh(o,e),o=Qh(o,e),a=A0(a),a=Kh(a,e),a=Qh(a,e),o=jh(o),a=jh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=b+m+o,y=b+p+a,C=Zh(s,s.VERTEX_SHADER,A),x=Zh(s,s.FRAGMENT_SHADER,y);s.attachShader(E,C),s.attachShader(E,x),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function w(P){if(n.debug.checkShaderErrors){let W=s.getProgramInfoLog(E).trim(),O=s.getShaderInfoLog(C).trim(),I=s.getShaderInfoLog(x).trim(),N=!0,H=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,C,x);else{let q=Jh(s,C,"vertex"),z=Jh(s,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+q+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(O===""||I==="")&&(H=!1);H&&(P.diagnostics={runnable:N,programLog:W,vertexShader:{log:O,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(C),s.deleteShader(x),F=new cr(s,E),T=W2(s,E)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(E,B2)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U2++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=x,this}var ng=0,T0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new S0(t),e.set(t,i)),i}},S0=class{constructor(t){this.id=ng++,this.code=t,this.usedTimes=0}};function ig(n,t,e,i,s,r,o){let a=new ia,l=new T0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,P,W,O){let I=W.fog,N=O.geometry,H=T.isMeshStandardMaterial?W.environment:null,q=(T.isMeshStandardMaterial?e:t).get(T.envMap||H),z=q&&q.mapping===va?q.image.height:null,K=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let ct=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,bt=ct!==void 0?ct.length:0,Ht=0;N.morphAttributes.position!==void 0&&(Ht=1),N.morphAttributes.normal!==void 0&&(Ht=2),N.morphAttributes.color!==void 0&&(Ht=3);let ae,Y,et,Rt;if(K){let Ee=ri[K];ae=Ee.vertexShader,Y=Ee.fragmentShader}else ae=T.vertexShader,Y=T.fragmentShader,l.update(T),et=l.getVertexShaderID(T),Rt=l.getFragmentShaderID(T);let ht=n.getRenderTarget(),Lt=n.state.buffers.depth.getReversed(),zt=O.isInstancedMesh===!0,Jt=O.isBatchedMesh===!0,ge=!!T.map,te=!!T.matcap,Be=!!q,B=!!T.aoMap,yn=!!T.lightMap,ee=!!T.bumpMap,se=!!T.normalMap,Ut=!!T.displacementMap,yt=!!T.emissiveMap,dt=!!T.metalnessMap,S=!!T.roughnessMap,v=T.anisotropy>0,k=T.clearcoat>0,$=T.dispersion>0,j=T.iridescence>0,Z=T.sheen>0,It=T.transmission>0,mt=v&&!!T.anisotropyMap,At=k&&!!T.clearcoatMap,le=k&&!!T.clearcoatNormalMap,nt=k&&!!T.clearcoatRoughnessMap,Tt=j&&!!T.iridescenceMap,Nt=j&&!!T.iridescenceThicknessMap,kt=Z&&!!T.sheenColorMap,St=Z&&!!T.sheenRoughnessMap,oe=!!T.specularMap,Kt=!!T.specularColorMap,we=!!T.specularIntensityMap,D=It&&!!T.transmissionMap,pt=It&&!!T.thicknessMap,X=!!T.gradientMap,J=!!T.alphaMap,vt=T.alphaTest>0,gt=!!T.alphaHash,Yt=!!T.extensions,ze=ci;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ze=n.toneMapping);let un={shaderID:K,shaderType:T.type,shaderName:T.name,vertexShader:ae,fragmentShader:Y,defines:T.defines,customVertexShaderID:et,customFragmentShaderID:Rt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Jt,batchingColor:Jt&&O._colorsTexture!==null,instancing:zt,instancingColor:zt&&O.instanceColor!==null,instancingMorph:zt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ns,alphaToCoverage:!!T.alphaToCoverage,map:ge,matcap:te,envMap:Be,envMapMode:Be&&q.mapping,envMapCubeUVHeight:z,aoMap:B,lightMap:yn,bumpMap:ee,normalMap:se,displacementMap:d&&Ut,emissiveMap:yt,normalMapObjectSpace:se&&T.normalMapType===bf,normalMapTangentSpace:se&&T.normalMapType===wu,metalnessMap:dt,roughnessMap:S,anisotropy:v,anisotropyMap:mt,clearcoat:k,clearcoatMap:At,clearcoatNormalMap:le,clearcoatRoughnessMap:nt,dispersion:$,iridescence:j,iridescenceMap:Tt,iridescenceThicknessMap:Nt,sheen:Z,sheenColorMap:kt,sheenRoughnessMap:St,specularMap:oe,specularColorMap:Kt,specularIntensityMap:we,transmission:It,transmissionMap:D,thicknessMap:pt,gradientMap:X,opaque:T.transparent===!1&&T.blending===or&&T.alphaToCoverage===!1,alphaMap:J,alphaTest:vt,alphaHash:gt,combine:T.combine,mapUv:ge&&E(T.map.channel),aoMapUv:B&&E(T.aoMap.channel),lightMapUv:yn&&E(T.lightMap.channel),bumpMapUv:ee&&E(T.bumpMap.channel),normalMapUv:se&&E(T.normalMap.channel),displacementMapUv:Ut&&E(T.displacementMap.channel),emissiveMapUv:yt&&E(T.emissiveMap.channel),metalnessMapUv:dt&&E(T.metalnessMap.channel),roughnessMapUv:S&&E(T.roughnessMap.channel),anisotropyMapUv:mt&&E(T.anisotropyMap.channel),clearcoatMapUv:At&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:le&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:St&&E(T.sheenRoughnessMap.channel),specularMapUv:oe&&E(T.specularMap.channel),specularColorMapUv:Kt&&E(T.specularColorMap.channel),specularIntensityMapUv:we&&E(T.specularIntensityMap.channel),transmissionMapUv:D&&E(T.transmissionMap.channel),thicknessMapUv:pt&&E(T.thicknessMap.channel),alphaMapUv:J&&E(T.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(se||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(ge||J),fog:!!I,useFog:T.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ht,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:ge&&T.map.isVideoTexture===!0&&ce.getTransfer(T.map.colorSpace)===be,decodeVideoTextureEmissive:yt&&T.emissiveMap.isVideoTexture===!0&&ce.getTransfer(T.emissiveMap.colorSpace)===be,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ke,flipSided:T.side===$e,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Yt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&T.extensions.multiDraw===!0||Jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return un.vertexUv1s=c.has(1),un.vertexUv2s=c.has(2),un.vertexUv3s=c.has(3),c.clear(),un}function p(T){let M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(let P in T.defines)M.push(P),M.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(b(M,T),A(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function b(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function A(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){let M=g[T.type],P;if(M){let W=ri[M];P=_r.clone(W.uniforms)}else P=T.uniforms;return P}function C(T,M){let P;for(let W=0,O=h.length;W<O;W++){let I=h[W];if(I.cacheKey===M){P=I,++P.usedTimes;break}}return P===void 0&&(P=new eg(n,M,T,r),h.push(P)),P}function x(T){if(--T.usedTimes===0){let M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function w(T){l.remove(T)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:x,releaseShaderCache:w,programs:h,dispose:F}}function sg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function rg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function eu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function nu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,E,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:E,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=E,p.group=m),t++,p}function a(u,d,f,g,E,m){let p=o(u,d,f,g,E,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,E,m){let p=o(u,d,f,g,E,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||rg),i.length>1&&i.sort(d||eu),s.length>1&&s.sort(d||eu)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function og(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new nu,n.set(i,[o])):s>=r.length?(o=new nu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ag(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new xt};break;case"SpotLight":e={position:new R,direction:new R,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function lg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var cg=0;function hg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ug(n){let t=new ag,e=lg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let s=new R,r=new ye,o=new ye;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,b=0,A=0,y=0,C=0,x=0,w=0;c.sort(hg);for(let T=0,M=c.length;T<M;T++){let P=c[T],W=P.color,O=P.intensity,I=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=W.r*O,u+=W.g*O,d+=W.b*O;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],O);w++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let q=P.shadow,z=e.get(P);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=P.shadow.matrix,b++}i.directional[f]=H,f++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(W).multiplyScalar(O),H.distance=I,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[E]=H;let q=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,q.updateMatrices(P),P.castShadow&&x++),i.spotLightMatrix[E]=q.matrix,P.castShadow){let z=e.get(P);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,i.spotShadow[E]=z,i.spotShadowMap[E]=N,y++}E++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(W).multiplyScalar(O),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let q=P.shadow,z=e.get(P);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,z.shadowCameraNear=q.camera.near,z.shadowCameraFar=q.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=P.shadow.matrix,A++}i.point[g]=H,g++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(O),H.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==b||F.numPointShadows!==A||F.numSpotShadows!==y||F.numSpotMaps!==C||F.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=w,F.directionalLength=f,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=b,F.numPointShadows=A,F.numSpotShadows=y,F.numSpotMaps=C,F.numLightProbes=w,i.version=cg++)}function l(c,h){let u=0,d=0,f=0,g=0,E=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let A=c[p];if(A.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(A.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(A.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function iu(n){let t=new ug(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function dg(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new iu(n),t.set(s,[a])):r>=o.length?(a=new iu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var x0=class extends Di{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},R0=class extends Di{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
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
}`;function mg(n,t,e){let i=new Yr,s=new tt,r=new tt,o=new Te,a=new x0({depthPacking:_f}),l=new R0,c={},h=e.maxTextureSize,u={[hi]:$e,[$e]:hi,[ke]:ke},d=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:fg,fragmentShader:pg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new sn;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let p=this.type;this.render=function(x,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;let T=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),W=n.state;W.setBlending(li),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let O=p!==Si&&this.type===Si,I=p===Si&&this.type!==Si;for(let N=0,H=x.length;N<H;N++){let q=x[N],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let K=z.getFrameExtents();if(s.multiply(K),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,z.mapSize.y=r.y)),z.map===null||O===!0||I===!0){let bt=this.type!==Si?{minFilter:_n,magFilter:_n}:{};z.map!==null&&z.map.dispose(),z.map=new nn(s.x,s.y,bt),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let ct=z.getViewportCount();for(let bt=0;bt<ct;bt++){let Ht=z.getViewport(bt);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),W.viewport(o),z.updateMatrices(q,bt),i=z.getFrustum(),y(w,F,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===Si&&b(z,F),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,M,P)};function b(x,w){let F=t.update(E);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new nn(s.x,s.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(w,null,F,d,E,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(w,null,F,f,E,null)}function A(x,w,F,T){let M=null,P=F.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(P!==void 0)M=P;else if(M=F.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let W=M.uuid,O=w.uuid,I=c[W];I===void 0&&(I={},c[W]=I);let N=I[O];N===void 0&&(N=M.clone(),I[O]=N,w.addEventListener("dispose",C)),M=N}if(M.visible=w.visible,M.wireframe=w.wireframe,T===Si?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let W=n.properties.get(M);W.light=F}return M}function y(x,w,F,T,M){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===Si)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld);let O=t.update(x),I=x.material;if(Array.isArray(I)){let N=O.groups;for(let H=0,q=N.length;H<q;H++){let z=N[H],K=I[z.materialIndex];if(K&&K.visible){let ct=A(x,K,T,M);x.onBeforeShadow(n,x,w,F,O,ct,z),n.renderBufferDirect(F,null,O,ct,x,z),x.onAfterShadow(n,x,w,F,O,ct,z)}}}else if(I.visible){let N=A(x,I,T,M);x.onBeforeShadow(n,x,w,F,O,N,null),n.renderBufferDirect(F,null,O,N,x,null),x.onAfterShadow(n,x,w,F,O,N,null)}}let W=x.children;for(let O=0,I=W.length;O<I;O++)y(W[O],w,F,T,M)}function C(x){x.target.removeEventListener("dispose",C);for(let F in c){let T=c[F],M=x.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}var gg={[Pl]:Il,[Dl]:Ul,[Ll]:Hl,[ur]:Bl,[Il]:Pl,[Ul]:Dl,[Hl]:Ll,[Bl]:ur};function Eg(n,t){function e(){let D=!1,pt=new Te,X=null,J=new Te(0,0,0,0);return{setMask:function(vt){X!==vt&&!D&&(n.colorMask(vt,vt,vt,vt),X=vt)},setLocked:function(vt){D=vt},setClear:function(vt,gt,Yt,ze,un){un===!0&&(vt*=ze,gt*=ze,Yt*=ze),pt.set(vt,gt,Yt,ze),J.equals(pt)===!1&&(n.clearColor(vt,gt,Yt,ze),J.copy(pt))},reset:function(){D=!1,X=null,J.set(-1,0,0,0)}}}function i(){let D=!1,pt=!1,X=null,J=null,vt=null;return{setReversed:function(gt){if(pt!==gt){let Yt=t.get("EXT_clip_control");pt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let ze=vt;vt=null,this.setClear(ze)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?ht(n.DEPTH_TEST):Lt(n.DEPTH_TEST)},setMask:function(gt){X!==gt&&!D&&(n.depthMask(gt),X=gt)},setFunc:function(gt){if(pt&&(gt=gg[gt]),J!==gt){switch(gt){case Pl:n.depthFunc(n.NEVER);break;case Il:n.depthFunc(n.ALWAYS);break;case Dl:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case Ll:n.depthFunc(n.EQUAL);break;case Bl:n.depthFunc(n.GEQUAL);break;case Ul:n.depthFunc(n.GREATER);break;case Hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=gt}},setLocked:function(gt){D=gt},setClear:function(gt){vt!==gt&&(pt&&(gt=1-gt),n.clearDepth(gt),vt=gt)},reset:function(){D=!1,X=null,J=null,vt=null,pt=!1}}}function s(){let D=!1,pt=null,X=null,J=null,vt=null,gt=null,Yt=null,ze=null,un=null;return{setTest:function(Ee){D||(Ee?ht(n.STENCIL_TEST):Lt(n.STENCIL_TEST))},setMask:function(Ee){pt!==Ee&&!D&&(n.stencilMask(Ee),pt=Ee)},setFunc:function(Ee,qn,yi){(X!==Ee||J!==qn||vt!==yi)&&(n.stencilFunc(Ee,qn,yi),X=Ee,J=qn,vt=yi)},setOp:function(Ee,qn,yi){(gt!==Ee||Yt!==qn||ze!==yi)&&(n.stencilOp(Ee,qn,yi),gt=Ee,Yt=qn,ze=yi)},setLocked:function(Ee){D=Ee},setClear:function(Ee){un!==Ee&&(n.clearStencil(Ee),un=Ee)},reset:function(){D=!1,pt=null,X=null,J=null,vt=null,gt=null,Yt=null,ze=null,un=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,E=!1,m=null,p=null,b=null,A=null,y=null,C=null,x=null,w=new xt(0,0,0),F=0,T=!1,M=null,P=null,W=null,O=null,I=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,q=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=q>=1):z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=q>=2);let K=null,ct={},bt=n.getParameter(n.SCISSOR_BOX),Ht=n.getParameter(n.VIEWPORT),ae=new Te().fromArray(bt),Y=new Te().fromArray(Ht);function et(D,pt,X,J){let vt=new Uint8Array(4),gt=n.createTexture();n.bindTexture(D,gt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<X;Yt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(pt,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(pt+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return gt}let Rt={};Rt[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),Rt[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Rt[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(n.DEPTH_TEST),o.setFunc(ur),ee(!1),se(ah),ht(n.CULL_FACE),B(li);function ht(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Lt(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function zt(D,pt){return u[D]!==pt?(n.bindFramebuffer(D,pt),u[D]=pt,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pt),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pt),!0):!1}function Jt(D,pt){let X=f,J=!1;if(D){X=d.get(pt),X===void 0&&(X=[],d.set(pt,X));let vt=D.textures;if(X.length!==vt.length||X[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Yt=vt.length;gt<Yt;gt++)X[gt]=n.COLOR_ATTACHMENT0+gt;X.length=vt.length,J=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,J=!0);J&&n.drawBuffers(X)}function ge(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let te={[Es]:n.FUNC_ADD,[qd]:n.FUNC_SUBTRACT,[Yd]:n.FUNC_REVERSE_SUBTRACT};te[Zd]=n.MIN,te[$d]=n.MAX;let Be={[Jd]:n.ZERO,[Kd]:n.ONE,[Qd]:n.SRC_COLOR,[Cl]:n.SRC_ALPHA,[rf]:n.SRC_ALPHA_SATURATE,[nf]:n.DST_COLOR,[tf]:n.DST_ALPHA,[jd]:n.ONE_MINUS_SRC_COLOR,[Fl]:n.ONE_MINUS_SRC_ALPHA,[sf]:n.ONE_MINUS_DST_COLOR,[ef]:n.ONE_MINUS_DST_ALPHA,[of]:n.CONSTANT_COLOR,[af]:n.ONE_MINUS_CONSTANT_COLOR,[lf]:n.CONSTANT_ALPHA,[cf]:n.ONE_MINUS_CONSTANT_ALPHA};function B(D,pt,X,J,vt,gt,Yt,ze,un,Ee){if(D===li){E===!0&&(Lt(n.BLEND),E=!1);return}if(E===!1&&(ht(n.BLEND),E=!0),D!==Xd){if(D!==m||Ee!==T){if((p!==Es||y!==Es)&&(n.blendEquation(n.FUNC_ADD),p=Es,y=Es),Ee)switch(D){case or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hr:n.blendFunc(n.ONE,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ch:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ch:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,A=null,C=null,x=null,w.set(0,0,0),F=0,m=D,T=Ee}return}vt=vt||pt,gt=gt||X,Yt=Yt||J,(pt!==p||vt!==y)&&(n.blendEquationSeparate(te[pt],te[vt]),p=pt,y=vt),(X!==b||J!==A||gt!==C||Yt!==x)&&(n.blendFuncSeparate(Be[X],Be[J],Be[gt],Be[Yt]),b=X,A=J,C=gt,x=Yt),(ze.equals(w)===!1||un!==F)&&(n.blendColor(ze.r,ze.g,ze.b,un),w.copy(ze),F=un),m=D,T=!1}function yn(D,pt){D.side===ke?Lt(n.CULL_FACE):ht(n.CULL_FACE);let X=D.side===$e;pt&&(X=!X),ee(X),D.blending===or&&D.transparent===!1?B(li):B(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):Lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function se(D){D!==Vd?(ht(n.CULL_FACE),D!==P&&(D===ah?n.cullFace(n.BACK):D===Wd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Lt(n.CULL_FACE),P=D}function Ut(D){D!==W&&(H&&n.lineWidth(D),W=D)}function yt(D,pt,X){D?(ht(n.POLYGON_OFFSET_FILL),(O!==pt||I!==X)&&(n.polygonOffset(pt,X),O=pt,I=X)):Lt(n.POLYGON_OFFSET_FILL)}function dt(D){D?ht(n.SCISSOR_TEST):Lt(n.SCISSOR_TEST)}function S(D){D===void 0&&(D=n.TEXTURE0+N-1),K!==D&&(n.activeTexture(D),K=D)}function v(D,pt,X){X===void 0&&(K===null?X=n.TEXTURE0+N-1:X=K);let J=ct[X];J===void 0&&(J={type:void 0,texture:void 0},ct[X]=J),(J.type!==D||J.texture!==pt)&&(K!==X&&(n.activeTexture(X),K=X),n.bindTexture(D,pt||Rt[D]),J.type=D,J.texture=pt)}function k(){let D=ct[K];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(D){ae.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ae.copy(D))}function St(D){Y.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function oe(D,pt){let X=c.get(pt);X===void 0&&(X=new WeakMap,c.set(pt,X));let J=X.get(D);J===void 0&&(J=n.getUniformBlockIndex(pt,D.name),X.set(D,J))}function Kt(D,pt){let J=c.get(pt).get(D);l.get(pt)!==J&&(n.uniformBlockBinding(pt,J,D.__bindingPointIndex),l.set(pt,J))}function we(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,ct={},u={},d=new WeakMap,f=[],g=null,E=!1,m=null,p=null,b=null,A=null,y=null,C=null,x=null,w=new xt(0,0,0),F=0,T=!1,M=null,P=null,W=null,O=null,I=null,ae.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Lt,bindFramebuffer:zt,drawBuffers:Jt,useProgram:ge,setBlending:B,setMaterial:yn,setFlipSided:ee,setCullFace:se,setLineWidth:Ut,setPolygonOffset:yt,setScissorTest:dt,activeTexture:S,bindTexture:v,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:Tt,texImage3D:Nt,updateUBOMapping:oe,uniformBlockBinding:Kt,texStorage2D:le,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:It,compressedTexSubImage2D:mt,compressedTexSubImage3D:At,scissor:kt,viewport:St,reset:we}}function su(n,t,e,i){let s=yg(i);switch(e){case _u:return n*t;case Au:return n*t;case Tu:return n*t*2;case Su:return n*t/s.components*s.byteLength;case sc:return n*t/s.components*s.byteLength;case xu:return n*t*2/s.components*s.byteLength;case rc:return n*t*2/s.components*s.byteLength;case bu:return n*t*3/s.components*s.byteLength;case Dn:return n*t*4/s.components*s.byteLength;case oc:return n*t*4/s.components*s.byteLength;case Xo:case qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Yo:case Zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gl:case Wl:return Math.max(n,16)*Math.max(t,8)/4;case kl:case Vl:return Math.max(n,8)*Math.max(t,8)/2;case Xl:case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case t0:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case e0:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case n0:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case i0:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case s0:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case r0:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case o0:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case a0:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case $o:case l0:case c0:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ru:case h0:return Math.ceil(n/4)*Math.ceil(t/4)*8;case u0:case d0:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yg(n){switch(n){case Fi:case yu:return{byteLength:1,components:1};case qr:case vu:case wn:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Pi:case ec:case Ri:return{byteLength:4,components:1};case Mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function vg(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return f?new OffscreenCanvas(S,v):jo("canvas")}function E(S,v,k){let $=1,j=dt(S);if((j.width>k||j.height>k)&&($=k/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let Z=Math.floor($*j.width),It=Math.floor($*j.height);u===void 0&&(u=g(Z,It));let mt=v?g(Z,It):u;return mt.width=Z,mt.height=It,mt.getContext("2d").drawImage(S,0,0,Z,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+It+")."),mt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(S,v,k,$,j=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Z=v;if(v===n.RED&&(k===n.FLOAT&&(Z=n.R32F),k===n.HALF_FLOAT&&(Z=n.R16F),k===n.UNSIGNED_BYTE&&(Z=n.R8)),v===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.R8UI),k===n.UNSIGNED_SHORT&&(Z=n.R16UI),k===n.UNSIGNED_INT&&(Z=n.R32UI),k===n.BYTE&&(Z=n.R8I),k===n.SHORT&&(Z=n.R16I),k===n.INT&&(Z=n.R32I)),v===n.RG&&(k===n.FLOAT&&(Z=n.RG32F),k===n.HALF_FLOAT&&(Z=n.RG16F),k===n.UNSIGNED_BYTE&&(Z=n.RG8)),v===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RG8UI),k===n.UNSIGNED_SHORT&&(Z=n.RG16UI),k===n.UNSIGNED_INT&&(Z=n.RG32UI),k===n.BYTE&&(Z=n.RG8I),k===n.SHORT&&(Z=n.RG16I),k===n.INT&&(Z=n.RG32I)),v===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),k===n.UNSIGNED_INT&&(Z=n.RGB32UI),k===n.BYTE&&(Z=n.RGB8I),k===n.SHORT&&(Z=n.RGB16I),k===n.INT&&(Z=n.RGB32I)),v===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),k===n.UNSIGNED_INT&&(Z=n.RGBA32UI),k===n.BYTE&&(Z=n.RGBA8I),k===n.SHORT&&(Z=n.RGBA16I),k===n.INT&&(Z=n.RGBA32I)),v===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),v===n.RGBA){let It=j?Ma:ce.getTransfer($);k===n.FLOAT&&(Z=n.RGBA32F),k===n.HALF_FLOAT&&(Z=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Z=It===be?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(S,v){let k;return S?v===null||v===Pi||v===pr?k=n.DEPTH24_STENCIL8:v===Ri?k=n.DEPTH32F_STENCIL8:v===qr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Pi||v===pr?k=n.DEPTH_COMPONENT24:v===Ri?k=n.DEPTH_COMPONENT32F:v===qr&&(k=n.DEPTH_COMPONENT16),k}function C(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==_n&&S.minFilter!==ai?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function x(S){let v=S.target;v.removeEventListener("dispose",x),F(v),v.isVideoTexture&&h.delete(v)}function w(S){let v=S.target;v.removeEventListener("dispose",w),M(v)}function F(S){let v=i.get(S);if(v.__webglInit===void 0)return;let k=S.source,$=d.get(k);if($){let j=$[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(S),Object.keys($).length===0&&d.delete(k)}i.remove(S)}function T(S){let v=i.get(S);n.deleteTexture(v.__webglTexture);let k=S.source,$=d.get(k);delete $[v.__cacheKey],o.memory.textures--}function M(S){let v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let j=0;j<v.__webglFramebuffer[$].length;j++)n.deleteFramebuffer(v.__webglFramebuffer[$][j]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=S.textures;for(let $=0,j=k.length;$<j;$++){let Z=i.get(k[$]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(k[$])}i.remove(S)}let P=0;function W(){P=0}function O(){let S=P;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),P+=1,S}function I(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function N(S,v){let k=i.get(S);if(S.isVideoTexture&&Ut(S),S.isRenderTargetTexture===!1&&S.version>0&&k.__version!==S.version){let $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,S,v);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+v)}function H(S,v){let k=i.get(S);if(S.version>0&&k.__version!==S.version){Y(k,S,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+v)}function q(S,v){let k=i.get(S);if(S.version>0&&k.__version!==S.version){Y(k,S,v);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+v)}function z(S,v){let k=i.get(S);if(S.version>0&&k.__version!==S.version){et(k,S,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+v)}let K={[xn]:n.REPEAT,[vs]:n.CLAMP_TO_EDGE,[zl]:n.MIRRORED_REPEAT},ct={[_n]:n.NEAREST,[vf]:n.NEAREST_MIPMAP_NEAREST,[Eo]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[Ya]:n.LINEAR_MIPMAP_NEAREST,[Ms]:n.LINEAR_MIPMAP_LINEAR},bt={[Af]:n.NEVER,[Cf]:n.ALWAYS,[Tf]:n.LESS,[Cu]:n.LEQUAL,[Sf]:n.EQUAL,[wf]:n.GEQUAL,[xf]:n.GREATER,[Rf]:n.NOTEQUAL};function Ht(S,v){if(v.type===Ri&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ai||v.magFilter===Ya||v.magFilter===Eo||v.magFilter===Ms||v.minFilter===ai||v.minFilter===Ya||v.minFilter===Eo||v.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,K[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,K[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,K[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ct[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ct[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,bt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===_n||v.minFilter!==Eo&&v.minFilter!==Ms||v.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ae(S,v){let k=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",x));let $=v.source,j=d.get($);j===void 0&&(j={},d.set($,j));let Z=I(v);if(Z!==S.__cacheKey){j[Z]===void 0&&(j[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[Z].usedTimes++;let It=j[S.__cacheKey];It!==void 0&&(j[S.__cacheKey].usedTimes--,It.usedTimes===0&&T(v)),S.__cacheKey=Z,S.__webglTexture=j[Z].texture}return k}function Y(S,v,k){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);let j=ae(S,v),Z=v.source;e.bindTexture($,S.__webglTexture,n.TEXTURE0+k);let It=i.get(Z);if(Z.version!==It.__version||j===!0){e.activeTexture(n.TEXTURE0+k);let mt=ce.getPrimaries(ce.workingColorSpace),At=v.colorSpace===Ji?null:ce.getPrimaries(v.colorSpace),le=v.colorSpace===Ji||mt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let nt=E(v.image,!1,s.maxTextureSize);nt=yt(v,nt);let Tt=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type),kt=A(v.internalFormat,Tt,Nt,v.colorSpace,v.isVideoTexture);Ht($,v);let St,oe=v.mipmaps,Kt=v.isVideoTexture!==!0,we=It.__version===void 0||j===!0,D=Z.dataReady,pt=C(v,nt);if(v.isDepthTexture)kt=y(v.format===mr,v.type),we&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,kt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,kt,nt.width,nt.height,0,Tt,Nt,null));else if(v.isDataTexture)if(oe.length>0){Kt&&we&&e.texStorage2D(n.TEXTURE_2D,pt,kt,oe[0].width,oe[0].height);for(let X=0,J=oe.length;X<J;X++)St=oe[X],Kt?D&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,St.width,St.height,Tt,Nt,St.data):e.texImage2D(n.TEXTURE_2D,X,kt,St.width,St.height,0,Tt,Nt,St.data);v.generateMipmaps=!1}else Kt?(we&&e.texStorage2D(n.TEXTURE_2D,pt,kt,nt.width,nt.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,Tt,Nt,nt.data)):e.texImage2D(n.TEXTURE_2D,0,kt,nt.width,nt.height,0,Tt,Nt,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Kt&&we&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,kt,oe[0].width,oe[0].height,nt.depth);for(let X=0,J=oe.length;X<J;X++)if(St=oe[X],v.format!==Dn)if(Tt!==null)if(Kt){if(D)if(v.layerUpdates.size>0){let vt=su(St.width,St.height,v.format,v.type);for(let gt of v.layerUpdates){let Yt=St.data.subarray(gt*vt/St.data.BYTES_PER_ELEMENT,(gt+1)*vt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,gt,St.width,St.height,1,Tt,Yt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,nt.depth,Tt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,kt,St.width,St.height,nt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,nt.depth,Tt,Nt,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,kt,St.width,St.height,nt.depth,0,Tt,Nt,St.data)}else{Kt&&we&&e.texStorage2D(n.TEXTURE_2D,pt,kt,oe[0].width,oe[0].height);for(let X=0,J=oe.length;X<J;X++)St=oe[X],v.format!==Dn?Tt!==null?Kt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,St.width,St.height,Tt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,X,kt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?D&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,St.width,St.height,Tt,Nt,St.data):e.texImage2D(n.TEXTURE_2D,X,kt,St.width,St.height,0,Tt,Nt,St.data)}else if(v.isDataArrayTexture)if(Kt){if(we&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,kt,nt.width,nt.height,nt.depth),D)if(v.layerUpdates.size>0){let X=su(nt.width,nt.height,v.format,v.type);for(let J of v.layerUpdates){let vt=nt.data.subarray(J*X/nt.data.BYTES_PER_ELEMENT,(J+1)*X/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,Tt,Nt,vt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Tt,Nt,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,kt,nt.width,nt.height,nt.depth,0,Tt,Nt,nt.data);else if(v.isData3DTexture)Kt?(we&&e.texStorage3D(n.TEXTURE_3D,pt,kt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Tt,Nt,nt.data)):e.texImage3D(n.TEXTURE_3D,0,kt,nt.width,nt.height,nt.depth,0,Tt,Nt,nt.data);else if(v.isFramebufferTexture){if(we)if(Kt)e.texStorage2D(n.TEXTURE_2D,pt,kt,nt.width,nt.height);else{let X=nt.width,J=nt.height;for(let vt=0;vt<pt;vt++)e.texImage2D(n.TEXTURE_2D,vt,kt,X,J,0,Tt,Nt,null),X>>=1,J>>=1}}else if(oe.length>0){if(Kt&&we){let X=dt(oe[0]);e.texStorage2D(n.TEXTURE_2D,pt,kt,X.width,X.height)}for(let X=0,J=oe.length;X<J;X++)St=oe[X],Kt?D&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,Tt,Nt,St):e.texImage2D(n.TEXTURE_2D,X,kt,Tt,Nt,St);v.generateMipmaps=!1}else if(Kt){if(we){let X=dt(nt);e.texStorage2D(n.TEXTURE_2D,pt,kt,X.width,X.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,Nt,nt)}else e.texImage2D(n.TEXTURE_2D,0,kt,Tt,Nt,nt);m(v)&&p($),It.__version=Z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function et(S,v,k){if(v.image.length!==6)return;let $=ae(S,v),j=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+k);let Z=i.get(j);if(j.version!==Z.__version||$===!0){e.activeTexture(n.TEXTURE0+k);let It=ce.getPrimaries(ce.workingColorSpace),mt=v.colorSpace===Ji?null:ce.getPrimaries(v.colorSpace),At=v.colorSpace===Ji||It===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let le=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,Tt=[];for(let J=0;J<6;J++)!le&&!nt?Tt[J]=E(v.image[J],!0,s.maxCubemapSize):Tt[J]=nt?v.image[J].image:v.image[J],Tt[J]=yt(v,Tt[J]);let Nt=Tt[0],kt=r.convert(v.format,v.colorSpace),St=r.convert(v.type),oe=A(v.internalFormat,kt,St,v.colorSpace),Kt=v.isVideoTexture!==!0,we=Z.__version===void 0||$===!0,D=j.dataReady,pt=C(v,Nt);Ht(n.TEXTURE_CUBE_MAP,v);let X;if(le){Kt&&we&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,oe,Nt.width,Nt.height);for(let J=0;J<6;J++){X=Tt[J].mipmaps;for(let vt=0;vt<X.length;vt++){let gt=X[vt];v.format!==Dn?kt!==null?Kt?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,gt.width,gt.height,kt,gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,oe,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,gt.width,gt.height,kt,St,gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,oe,gt.width,gt.height,0,kt,St,gt.data)}}}else{if(X=v.mipmaps,Kt&&we){X.length>0&&pt++;let J=dt(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,oe,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Kt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Tt[J].width,Tt[J].height,kt,St,Tt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,oe,Tt[J].width,Tt[J].height,0,kt,St,Tt[J].data);for(let vt=0;vt<X.length;vt++){let Yt=X[vt].image[J].image;Kt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,Yt.width,Yt.height,kt,St,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,oe,Yt.width,Yt.height,0,kt,St,Yt.data)}}else{Kt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,kt,St,Tt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,oe,kt,St,Tt[J]);for(let vt=0;vt<X.length;vt++){let gt=X[vt];Kt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,kt,St,gt.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,oe,kt,St,gt.image[J])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),Z.__version=j.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Rt(S,v,k,$,j,Z){let It=r.convert(k.format,k.colorSpace),mt=r.convert(k.type),At=A(k.internalFormat,It,mt,k.colorSpace),le=i.get(v),nt=i.get(k);if(nt.__renderTarget=v,!le.__hasExternalTextures){let Tt=Math.max(1,v.width>>Z),Nt=Math.max(1,v.height>>Z);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,At,Tt,Nt,v.depth,0,It,mt,null):e.texImage2D(j,Z,At,Tt,Nt,0,It,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),se(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,j,nt.__webglTexture,0,ee(v)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,j,nt.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(S,v,k){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){let $=v.depthTexture,j=$&&$.isDepthTexture?$.type:null,Z=y(v.stencilBuffer,j),It=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=ee(v);se(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt,Z,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,Z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,S)}else{let $=v.textures;for(let j=0;j<$.length;j++){let Z=$[j],It=r.convert(Z.format,Z.colorSpace),mt=r.convert(Z.type),At=A(Z.internalFormat,It,mt,Z.colorSpace),le=ee(v);k&&se(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,At,v.width,v.height):se(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,At,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,At,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),N(v.depthTexture,0);let j=$.__webglTexture,Z=ee(v);if(v.depthTexture.format===ar)se(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(v.depthTexture.format===mr)se(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function zt(S){let v=i.get(S),k=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let $=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=$}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Lt(v.__webglFramebuffer,S)}else if(k){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),ht(v.__webglDepthbuffer[$],S,!1);else{let j=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ht(v.__webglDepthbuffer,S,!1);else{let $=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,j)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Jt(S,v,k){let $=i.get(S);v!==void 0&&Rt($.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&zt(S)}function ge(S){let v=S.texture,k=i.get(S),$=i.get(v);S.addEventListener("dispose",w);let j=S.textures,Z=S.isWebGLCubeRenderTarget===!0,It=j.length>1;if(It||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[mt]=[];for(let At=0;At<v.mipmaps.length;At++)k.__webglFramebuffer[mt][At]=n.createFramebuffer()}else k.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let mt=0;mt<v.mipmaps.length;mt++)k.__webglFramebuffer[mt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(It)for(let mt=0,At=j.length;mt<At;mt++){let le=i.get(j[mt]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&se(S)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let mt=0;mt<j.length;mt++){let At=j[mt];k.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[mt]);let le=r.convert(At.format,At.colorSpace),nt=r.convert(At.type),Tt=A(At.internalFormat,le,nt,At.colorSpace,S.isXRRenderTarget===!0),Nt=ee(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,Tt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,k.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(k.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,v);for(let mt=0;mt<6;mt++)if(v.mipmaps&&v.mipmaps.length>0)for(let At=0;At<v.mipmaps.length;At++)Rt(k.__webglFramebuffer[mt][At],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At);else Rt(k.__webglFramebuffer[mt],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let mt=0,At=j.length;mt<At;mt++){let le=j[mt],nt=i.get(le);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),Ht(n.TEXTURE_2D,le),Rt(k.__webglFramebuffer,S,le,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,0),m(le)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(mt=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,$.__webglTexture),Ht(mt,v),v.mipmaps&&v.mipmaps.length>0)for(let At=0;At<v.mipmaps.length;At++)Rt(k.__webglFramebuffer[At],S,v,n.COLOR_ATTACHMENT0,mt,At);else Rt(k.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,mt,0);m(v)&&p(mt),e.unbindTexture()}S.depthBuffer&&zt(S)}function te(S){let v=S.textures;for(let k=0,$=v.length;k<$;k++){let j=v[k];if(m(j)){let Z=b(S),It=i.get(j).__webglTexture;e.bindTexture(Z,It),p(Z),e.unbindTexture()}}}let Be=[],B=[];function yn(S){if(S.samples>0){if(se(S)===!1){let v=S.textures,k=S.width,$=S.height,j=n.COLOR_BUFFER_BIT,Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=i.get(S),mt=v.length>1;if(mt)for(let At=0;At<v.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let At=0;At<v.length;At++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,It.__webglColorRenderbuffer[At]);let le=i.get(v[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,j,n.NEAREST),l===!0&&(Be.length=0,B.length=0,Be.push(n.COLOR_ATTACHMENT0+At),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Be.push(Z),B.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Be))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let At=0;At<v.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,It.__webglColorRenderbuffer[At]);let le=i.get(v[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,le,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ee(S){return Math.min(s.maxSamples,S.samples)}function se(S){let v=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ut(S){let v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function yt(S,v){let k=S.colorSpace,$=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||k!==ns&&k!==Ji&&(ce.getTransfer(k)===be?($!==Dn||j!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function dt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=W,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=z,this.rebindTextures=Jt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=se}function Mg(n,t){function e(i,s=Ji){let r,o=ce.getTransfer(s);if(i===Fi)return n.UNSIGNED_BYTE;if(i===nc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yu)return n.BYTE;if(i===vu)return n.SHORT;if(i===qr)return n.UNSIGNED_SHORT;if(i===ec)return n.INT;if(i===Pi)return n.UNSIGNED_INT;if(i===Ri)return n.FLOAT;if(i===wn)return n.HALF_FLOAT;if(i===_u)return n.ALPHA;if(i===bu)return n.RGB;if(i===Dn)return n.RGBA;if(i===Au)return n.LUMINANCE;if(i===Tu)return n.LUMINANCE_ALPHA;if(i===ar)return n.DEPTH_COMPONENT;if(i===mr)return n.DEPTH_STENCIL;if(i===Su)return n.RED;if(i===sc)return n.RED_INTEGER;if(i===xu)return n.RG;if(i===rc)return n.RG_INTEGER;if(i===oc)return n.RGBA_INTEGER;if(i===Xo||i===qo||i===Yo||i===Zo)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kl||i===Gl||i===Vl||i===Wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xl||i===ql||i===Yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xl||i===ql)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zl||i===$l||i===Jl||i===Kl||i===Ql||i===jl||i===t0||i===e0||i===n0||i===i0||i===s0||i===r0||i===o0||i===a0)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$l)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===t0)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===e0)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===n0)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===i0)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===s0)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===r0)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===o0)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===a0)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$o||i===l0||i===c0)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===$o)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===l0)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===c0)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ru||i===h0||i===u0||i===d0)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===$o)return r.COMPRESSED_RED_RGTC1_EXT;if(i===h0)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===u0)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===d0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var w0=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Q=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},_g={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Q,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Q,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Q,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let E of t.hand.values()){let m=e.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Q;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ag=`
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

}`,C0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Xe({vertexShader:bg,fragmentShader:Ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new rt(new Bt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},F0=class extends ji{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,E=new C0,m=e.getContextAttributes(),p=null,b=null,A=[],y=[],C=new tt,x=null,w=new ln;w.viewport=new Te;let F=new ln;F.viewport=new Te;let T=[w,F],M=new w0,P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=A[Y];return et===void 0&&(et=new Vr,A[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=A[Y];return et===void 0&&(et=new Vr,A[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=A[Y];return et===void 0&&(et=new Vr,A[Y]=et),et.getHandSpace()};function O(Y){let et=y.indexOf(Y.inputSource);if(et===-1)return;let Rt=A[et];Rt!==void 0&&(Rt.update(Y.inputSource,Y.frame,c||o),Rt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function I(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",N);for(let Y=0;Y<A.length;Y++){let et=y[Y];et!==null&&(y[Y]=null,A[Y].disconnect(et))}P=null,W=null,E.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",I),s.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new nn(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,Rt=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?mr:ar,Rt=m.stencil?pr:Pi);let Lt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new nn(d.textureWidth,d.textureHeight,{format:Dn,type:Fi,depthTexture:new vr(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function N(Y){for(let et=0;et<Y.removed.length;et++){let Rt=Y.removed[et],ht=y.indexOf(Rt);ht>=0&&(y[ht]=null,A[ht].disconnect(Rt))}for(let et=0;et<Y.added.length;et++){let Rt=Y.added[et],ht=y.indexOf(Rt);if(ht===-1){for(let zt=0;zt<A.length;zt++)if(zt>=y.length){y.push(Rt),ht=zt;break}else if(y[zt]===null){y[zt]=Rt,ht=zt;break}if(ht===-1)break}let Lt=A[ht];Lt&&Lt.connect(Rt)}}let H=new R,q=new R;function z(Y,et,Rt){H.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(Rt.matrixWorld);let ht=H.distanceTo(q),Lt=et.projectionMatrix.elements,zt=Rt.projectionMatrix.elements,Jt=Lt[14]/(Lt[10]-1),ge=Lt[14]/(Lt[10]+1),te=(Lt[9]+1)/Lt[5],Be=(Lt[9]-1)/Lt[5],B=(Lt[8]-1)/Lt[0],yn=(zt[8]+1)/zt[0],ee=Jt*B,se=Jt*yn,Ut=ht/(-B+yn),yt=Ut*-B;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(yt),Y.translateZ(Ut),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Lt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let dt=Jt+Ut,S=ge+Ut,v=ee-yt,k=se+(ht-yt),$=te*ge/S*dt,j=Be*ge/S*dt;Y.projectionMatrix.makePerspective(v,k,$,j,dt,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function K(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,Rt=Y.far;E.texture!==null&&(E.depthNear>0&&(et=E.depthNear),E.depthFar>0&&(Rt=E.depthFar)),M.near=F.near=w.near=et,M.far=F.far=w.far=Rt,(P!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,W=M.far),w.layers.mask=Y.layers.mask|2,F.layers.mask=Y.layers.mask|4,M.layers.mask=w.layers.mask|F.layers.mask;let ht=Y.parent,Lt=M.cameras;K(M,ht);for(let zt=0;zt<Lt.length;zt++)K(Lt[zt],ht);Lt.length===2?z(M,w,F):M.projectionMatrix.copy(w.projectionMatrix),ct(Y,M,ht)};function ct(Y,et,Rt){Rt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(Rt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(M)};let bt=null;function Ht(Y,et){if(h=et.getViewerPose(c||o),g=et,h!==null){let Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let ht=!1;Rt.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let zt=0;zt<Rt.length;zt++){let Jt=Rt[zt],ge=null;if(f!==null)ge=f.getViewport(Jt);else{let Be=u.getViewSubImage(d,Jt);ge=Be.viewport,zt===0&&(t.setRenderTargetTextures(b,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),t.setRenderTarget(b))}let te=T[zt];te===void 0&&(te=new ln,te.layers.enable(zt),te.viewport=new Te,T[zt]=te),te.matrix.fromArray(Jt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Jt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ge.x,ge.y,ge.width,ge.height),zt===0&&(M.matrix.copy(te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push(te)}let Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){let zt=u.getDepthInformation(Rt[0]);zt&&zt.isValid&&zt.texture&&E.init(t,zt,s.renderState)}}for(let Rt=0;Rt<A.length;Rt++){let ht=y[Rt],Lt=A[Rt];ht!==null&&Lt!==void 0&&Lt.update(ht,et,c||o)}bt&&bt(Y,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}let ae=new Du;ae.setAnimationLoop(Ht),this.setAnimationLoop=function(Y){bt=Y},this.dispose=function(){}}},ms=new Ii,Tg=new ye;function Sg(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Iu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,A,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),E(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),A=b.envMap,y=b.envMapRotation;A&&(m.envMap.value=A,ms.copy(y),ms.x*=-1,ms.y*=-1,ms.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.envMapRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(ms)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xg(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){let y=A.program;i.uniformBlockBinding(b,y)}function c(b,A){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));let C=A.program;i.updateUBOMapping(b,C);let x=t.render.frame;r[b.id]!==x&&(d(b),r[b.id]=x)}function h(b){let A=u();b.__bindingPointIndex=A;let y=n.createBuffer(),C=b.__size,x=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let A=s[b.id],y=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let x=0,w=y.length;x<w;x++){let F=Array.isArray(y[x])?y[x]:[y[x]];for(let T=0,M=F.length;T<M;T++){let P=F[T];if(f(P,x,T,C)===!0){let W=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],I=0;for(let N=0;N<O.length;N++){let H=O[N],q=E(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,W+I,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,A,y,C){let x=b.value,w=A+"_"+y;if(C[w]===void 0)return typeof x=="number"||typeof x=="boolean"?C[w]=x:C[w]=x.clone(),!0;{let F=C[w];if(typeof x=="number"||typeof x=="boolean"){if(F!==x)return C[w]=x,!0}else if(F.equals(x)===!1)return F.copy(x),!0}return!1}function g(b){let A=b.uniforms,y=0,C=16;for(let w=0,F=A.length;w<F;w++){let T=Array.isArray(A[w])?A[w]:[A[w]];for(let M=0,P=T.length;M<P;M++){let W=T[M],O=Array.isArray(W.value)?W.value:[W.value];for(let I=0,N=O.length;I<N;I++){let H=O[I],q=E(H),z=y%C,K=z%q.boundary,ct=z+K;y+=K,ct!==0&&C-ct<q.storage&&(y+=C-ct),W.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=q.storage}}}let x=y%C;return x>0&&(y+=C-x),b.__size=y,b.__cache={},this}function E(b){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),A}function m(b){let A=b.target;A.removeEventListener("dispose",m);let y=o.indexOf(A.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ca=class{constructor(t={}){let{canvas:e=Pf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,p=null,b=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=ci,this.toneMappingExposure=1;let y=this,C=!1,x=0,w=0,F=null,T=-1,M=null,P=new Te,W=new Te,O=null,I=new xt(0),N=0,H=e.width,q=e.height,z=1,K=null,ct=null,bt=new Te(0,0,H,q),Ht=new Te(0,0,H,q),ae=!1,Y=new Yr,et=!1,Rt=!1,ht=new ye,Lt=new ye,zt=new R,Jt=new Te,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function Be(){return F===null?z:1}let B=i;function yn(_,L){return e.getContext(_,L)}try{let _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${j0}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),B===null){let L="webgl2";if(B=yn(L,_),B===null)throw yn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let ee,se,Ut,yt,dt,S,v,k,$,j,Z,It,mt,At,le,nt,Tt,Nt,kt,St,oe,Kt,we,D;function pt(){ee=new Gm(B),ee.init(),Kt=new Mg(B,ee),se=new Um(B,ee,t,Kt),Ut=new Eg(B,ee),se.reverseDepthBuffer&&d&&Ut.buffers.depth.setReversed(!0),yt=new Xm(B),dt=new sg,S=new vg(B,ee,Ut,dt,se,Kt,yt),v=new Nm(y),k=new km(y),$=new Qf(B),we=new Lm(B,$),j=new Vm(B,$,yt,we),Z=new Ym(B,j,$,yt),kt=new qm(B,se,S),nt=new Hm(dt),It=new ig(y,v,k,ee,se,we,nt),mt=new Sg(y,dt),At=new og,le=new dg(ee),Nt=new Dm(y,v,k,Ut,Z,f,l),Tt=new mg(y,Z,se),D=new xg(B,yt,se,Ut),St=new Bm(B,ee,yt),oe=new Wm(B,ee,yt),yt.programs=It.programs,y.capabilities=se,y.extensions=ee,y.properties=dt,y.renderLists=At,y.shadowMap=Tt,y.state=Ut,y.info=yt}pt();let X=new F0(y,B);this.xr=X,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let _=ee.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ee.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(_){_!==void 0&&(z=_,this.setSize(H,q,!1))},this.getSize=function(_){return _.set(H,q)},this.setSize=function(_,L,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=_,q=L,e.width=Math.floor(_*z),e.height=Math.floor(L*z),G===!0&&(e.style.width=_+"px",e.style.height=L+"px"),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(H*z,q*z).floor()},this.setDrawingBufferSize=function(_,L,G){H=_,q=L,z=G,e.width=Math.floor(_*G),e.height=Math.floor(L*G),this.setViewport(0,0,_,L)},this.getCurrentViewport=function(_){return _.copy(P)},this.getViewport=function(_){return _.copy(bt)},this.setViewport=function(_,L,G,V){_.isVector4?bt.set(_.x,_.y,_.z,_.w):bt.set(_,L,G,V),Ut.viewport(P.copy(bt).multiplyScalar(z).round())},this.getScissor=function(_){return _.copy(Ht)},this.setScissor=function(_,L,G,V){_.isVector4?Ht.set(_.x,_.y,_.z,_.w):Ht.set(_,L,G,V),Ut.scissor(W.copy(Ht).multiplyScalar(z).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(_){Ut.setScissorTest(ae=_)},this.setOpaqueSort=function(_){K=_},this.setTransparentSort=function(_){ct=_},this.getClearColor=function(_){return _.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(_=!0,L=!0,G=!0){let V=0;if(_){let U=!1;if(F!==null){let st=F.texture.format;U=st===oc||st===rc||st===sc}if(U){let st=F.texture.type,Et=st===Fi||st===Pi||st===qr||st===pr||st===nc||st===ic,wt=Nt.getClearColor(),Ct=Nt.getClearAlpha(),Vt=wt.r,Zt=wt.g,Ft=wt.b;Et?(g[0]=Vt,g[1]=Zt,g[2]=Ft,g[3]=Ct,B.clearBufferuiv(B.COLOR,0,g)):(E[0]=Vt,E[1]=Zt,E[2]=Ft,E[3]=Ct,B.clearBufferiv(B.COLOR,0,E))}else V|=B.COLOR_BUFFER_BIT}L&&(V|=B.DEPTH_BUFFER_BIT),G&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),At.dispose(),le.dispose(),dt.dispose(),v.dispose(),k.dispose(),Z.dispose(),we.dispose(),D.dispose(),It.dispose(),X.dispose(),X.removeEventListener("sessionstart",jc),X.removeEventListener("sessionend",th),cs.stop()};function J(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let _=yt.autoReset,L=Tt.enabled,G=Tt.autoUpdate,V=Tt.needsUpdate,U=Tt.type;pt(),yt.autoReset=_,Tt.enabled=L,Tt.autoUpdate=G,Tt.needsUpdate=V,Tt.type=U}function gt(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Yt(_){let L=_.target;L.removeEventListener("dispose",Yt),ze(L)}function ze(_){un(_),dt.remove(_)}function un(_){let L=dt.get(_).programs;L!==void 0&&(L.forEach(function(G){It.releaseProgram(G)}),_.isShaderMaterial&&It.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,G,V,U,st){L===null&&(L=ge);let Et=U.isMesh&&U.matrixWorld.determinant()<0,wt=zd(_,L,G,V,U);Ut.setMaterial(V,Et);let Ct=G.index,Vt=1;if(V.wireframe===!0){if(Ct=j.getWireframeAttribute(G),Ct===void 0)return;Vt=2}let Zt=G.drawRange,Ft=G.attributes.position,ue=Zt.start*Vt,Ce=(Zt.start+Zt.count)*Vt;st!==null&&(ue=Math.max(ue,st.start*Vt),Ce=Math.min(Ce,(st.start+st.count)*Vt)),Ct!==null?(ue=Math.max(ue,0),Ce=Math.min(Ce,Ct.count)):Ft!=null&&(ue=Math.max(ue,0),Ce=Math.min(Ce,Ft.count));let Ie=Ce-ue;if(Ie<0||Ie===1/0)return;we.setup(U,V,wt,G,Ct);let Sn,de=St;if(Ct!==null&&(Sn=$.get(Ct),de=oe,de.setIndex(Sn)),U.isMesh)V.wireframe===!0?(Ut.setLineWidth(V.wireframeLinewidth*Be()),de.setMode(B.LINES)):de.setMode(B.TRIANGLES);else if(U.isLine){let Dt=V.linewidth;Dt===void 0&&(Dt=1),Ut.setLineWidth(Dt*Be()),U.isLineSegments?de.setMode(B.LINES):U.isLineLoop?de.setMode(B.LINE_LOOP):de.setMode(B.LINE_STRIP)}else U.isPoints?de.setMode(B.POINTS):U.isSprite&&de.setMode(B.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)de.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))de.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Dt=U._multiDrawStarts,vi=U._multiDrawCounts,fe=U._multiDrawCount,Yn=Ct?$.get(Ct).bytesPerElement:1,zs=dt.get(V).currentProgram.getUniforms();for(let Fn=0;Fn<fe;Fn++)zs.setValue(B,"_gl_DrawID",Fn),de.render(Dt[Fn]/Yn,vi[Fn])}else if(U.isInstancedMesh)de.renderInstances(ue,Ie,U.count);else if(G.isInstancedBufferGeometry){let Dt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,vi=Math.min(G.instanceCount,Dt);de.renderInstances(ue,Ie,vi)}else de.render(ue,Ie)};function Ee(_,L,G){_.transparent===!0&&_.side===ke&&_.forceSinglePass===!1?(_.side=$e,_.needsUpdate=!0,go(_,L,G),_.side=hi,_.needsUpdate=!0,go(_,L,G),_.side=ke):go(_,L,G)}this.compile=function(_,L,G=null){G===null&&(G=_),p=le.get(G),p.init(L),A.push(p),G.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),_!==G&&_.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let V=new Set;return _.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let st=U.material;if(st)if(Array.isArray(st))for(let Et=0;Et<st.length;Et++){let wt=st[Et];Ee(wt,G,U),V.add(wt)}else Ee(st,G,U),V.add(st)}),A.pop(),p=null,V},this.compileAsync=function(_,L,G=null){let V=this.compile(_,L,G);return new Promise(U=>{function st(){if(V.forEach(function(Et){dt.get(Et).currentProgram.isReady()&&V.delete(Et)}),V.size===0){U(_);return}setTimeout(st,10)}ee.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let qn=null;function yi(_){qn&&qn(_)}function jc(){cs.stop()}function th(){cs.start()}let cs=new Du;cs.setAnimationLoop(yi),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(_){qn=_,X.setAnimationLoop(_),_===null?cs.stop():cs.start()},X.addEventListener("sessionstart",jc),X.addEventListener("sessionend",th),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(L),L=X.getCamera()),_.isScene===!0&&_.onBeforeRender(y,_,L,F),p=le.get(_,A.length),p.init(L),A.push(p),Lt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(Lt),Rt=this.localClippingEnabled,et=nt.init(this.clippingPlanes,Rt),m=At.get(_,b.length),m.init(),b.push(m),X.enabled===!0&&X.isPresenting===!0){let st=y.xr.getDepthSensingMesh();st!==null&&qa(st,L,-1/0,y.sortObjects)}qa(_,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(K,ct),te=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,te&&Nt.addToRenderList(m,_),this.info.render.frame++,et===!0&&nt.beginShadows();let G=p.state.shadowsArray;Tt.render(G,_,L),et===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,U=m.transmissive;if(p.setupLights(),L.isArrayCamera){let st=L.cameras;if(U.length>0)for(let Et=0,wt=st.length;Et<wt;Et++){let Ct=st[Et];nh(V,U,_,Ct)}te&&Nt.render(_);for(let Et=0,wt=st.length;Et<wt;Et++){let Ct=st[Et];eh(m,_,Ct,Ct.viewport)}}else U.length>0&&nh(V,U,_,L),te&&Nt.render(_),eh(m,_,L);F!==null&&(S.updateMultisampleRenderTarget(F),S.updateRenderTargetMipmap(F)),_.isScene===!0&&_.onAfterRender(y,_,L),we.resetDefaultState(),T=-1,M=null,A.pop(),A.length>0?(p=A[A.length-1],et===!0&&nt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function qa(_,L,G,V){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)G=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Y.intersectsSprite(_)){V&&Jt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Lt);let Et=Z.update(_),wt=_.material;wt.visible&&m.push(_,Et,wt,G,Jt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Y.intersectsObject(_))){let Et=Z.update(_),wt=_.material;if(V&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Jt.copy(_.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Jt.copy(Et.boundingSphere.center)),Jt.applyMatrix4(_.matrixWorld).applyMatrix4(Lt)),Array.isArray(wt)){let Ct=Et.groups;for(let Vt=0,Zt=Ct.length;Vt<Zt;Vt++){let Ft=Ct[Vt],ue=wt[Ft.materialIndex];ue&&ue.visible&&m.push(_,Et,ue,G,Jt.z,Ft)}}else wt.visible&&m.push(_,Et,wt,G,Jt.z,null)}}let st=_.children;for(let Et=0,wt=st.length;Et<wt;Et++)qa(st[Et],L,G,V)}function eh(_,L,G,V){let U=_.opaque,st=_.transmissive,Et=_.transparent;p.setupLightsView(G),et===!0&&nt.setGlobalState(y.clippingPlanes,G),V&&Ut.viewport(P.copy(V)),U.length>0&&mo(U,L,G),st.length>0&&mo(st,L,G),Et.length>0&&mo(Et,L,G),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function nh(_,L,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new nn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?wn:Fi,minFilter:Ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let st=p.state.transmissionRenderTarget[V.id],Et=V.viewport||P;st.setSize(Et.z,Et.w);let wt=y.getRenderTarget();y.setRenderTarget(st),y.getClearColor(I),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear(),te&&Nt.render(G);let Ct=y.toneMapping;y.toneMapping=ci;let Vt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),et===!0&&nt.setGlobalState(y.clippingPlanes,V),mo(_,G,V),S.updateMultisampleRenderTarget(st),S.updateRenderTargetMipmap(st),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ft=0,ue=L.length;Ft<ue;Ft++){let Ce=L[Ft],Ie=Ce.object,Sn=Ce.geometry,de=Ce.material,Dt=Ce.group;if(de.side===ke&&Ie.layers.test(V.layers)){let vi=de.side;de.side=$e,de.needsUpdate=!0,ih(Ie,G,V,Sn,de,Dt),de.side=vi,de.needsUpdate=!0,Zt=!0}}Zt===!0&&(S.updateMultisampleRenderTarget(st),S.updateRenderTargetMipmap(st))}y.setRenderTarget(wt),y.setClearColor(I,N),Vt!==void 0&&(V.viewport=Vt),y.toneMapping=Ct}function mo(_,L,G){let V=L.isScene===!0?L.overrideMaterial:null;for(let U=0,st=_.length;U<st;U++){let Et=_[U],wt=Et.object,Ct=Et.geometry,Vt=V===null?Et.material:V,Zt=Et.group;wt.layers.test(G.layers)&&ih(wt,L,G,Ct,Vt,Zt)}}function ih(_,L,G,V,U,st){_.onBeforeRender(y,L,G,V,U,st),_.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),U.onBeforeRender(y,L,G,V,_,st),U.transparent===!0&&U.side===ke&&U.forceSinglePass===!1?(U.side=$e,U.needsUpdate=!0,y.renderBufferDirect(G,L,V,U,_,st),U.side=hi,U.needsUpdate=!0,y.renderBufferDirect(G,L,V,U,_,st),U.side=ke):y.renderBufferDirect(G,L,V,U,_,st),_.onAfterRender(y,L,G,V,U,st)}function go(_,L,G){L.isScene!==!0&&(L=ge);let V=dt.get(_),U=p.state.lights,st=p.state.shadowsArray,Et=U.state.version,wt=It.getParameters(_,U.state,st,L,G),Ct=It.getProgramCacheKey(wt),Vt=V.programs;V.environment=_.isMeshStandardMaterial?L.environment:null,V.fog=L.fog,V.envMap=(_.isMeshStandardMaterial?k:v).get(_.envMap||V.environment),V.envMapRotation=V.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,Vt===void 0&&(_.addEventListener("dispose",Yt),Vt=new Map,V.programs=Vt);let Zt=Vt.get(Ct);if(Zt!==void 0){if(V.currentProgram===Zt&&V.lightsStateVersion===Et)return rh(_,wt),Zt}else wt.uniforms=It.getUniforms(_),_.onBeforeCompile(wt,y),Zt=It.acquireProgram(wt,Ct),Vt.set(Ct,Zt),V.uniforms=wt.uniforms;let Ft=V.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ft.clippingPlanes=nt.uniform),rh(_,wt),V.needsLights=Gd(_),V.lightsStateVersion=Et,V.needsLights&&(Ft.ambientLightColor.value=U.state.ambient,Ft.lightProbe.value=U.state.probe,Ft.directionalLights.value=U.state.directional,Ft.directionalLightShadows.value=U.state.directionalShadow,Ft.spotLights.value=U.state.spot,Ft.spotLightShadows.value=U.state.spotShadow,Ft.rectAreaLights.value=U.state.rectArea,Ft.ltc_1.value=U.state.rectAreaLTC1,Ft.ltc_2.value=U.state.rectAreaLTC2,Ft.pointLights.value=U.state.point,Ft.pointLightShadows.value=U.state.pointShadow,Ft.hemisphereLights.value=U.state.hemi,Ft.directionalShadowMap.value=U.state.directionalShadowMap,Ft.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ft.spotShadowMap.value=U.state.spotShadowMap,Ft.spotLightMatrix.value=U.state.spotLightMatrix,Ft.spotLightMap.value=U.state.spotLightMap,Ft.pointShadowMap.value=U.state.pointShadowMap,Ft.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Zt,V.uniformsList=null,Zt}function sh(_){if(_.uniformsList===null){let L=_.currentProgram.getUniforms();_.uniformsList=cr.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function rh(_,L){let G=dt.get(_);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function zd(_,L,G,V,U){L.isScene!==!0&&(L=ge),S.resetTextureUnits();let st=L.fog,Et=V.isMeshStandardMaterial?L.environment:null,wt=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ns,Ct=(V.isMeshStandardMaterial?k:v).get(V.envMap||Et),Vt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Zt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ft=!!G.morphAttributes.position,ue=!!G.morphAttributes.normal,Ce=!!G.morphAttributes.color,Ie=ci;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ie=y.toneMapping);let Sn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,de=Sn!==void 0?Sn.length:0,Dt=dt.get(V),vi=p.state.lights;if(et===!0&&(Rt===!0||_!==M)){let Nn=_===M&&V.id===T;nt.setState(V,_,Nn)}let fe=!1;V.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==vi.state.version||Dt.outputColorSpace!==wt||U.isBatchedMesh&&Dt.batching===!1||!U.isBatchedMesh&&Dt.batching===!0||U.isBatchedMesh&&Dt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Dt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Dt.instancing===!1||!U.isInstancedMesh&&Dt.instancing===!0||U.isSkinnedMesh&&Dt.skinning===!1||!U.isSkinnedMesh&&Dt.skinning===!0||U.isInstancedMesh&&Dt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Dt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Dt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Dt.instancingMorph===!1&&U.morphTexture!==null||Dt.envMap!==Ct||V.fog===!0&&Dt.fog!==st||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==nt.numPlanes||Dt.numIntersection!==nt.numIntersection)||Dt.vertexAlphas!==Vt||Dt.vertexTangents!==Zt||Dt.morphTargets!==Ft||Dt.morphNormals!==ue||Dt.morphColors!==Ce||Dt.toneMapping!==Ie||Dt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Dt.__version=V.version);let Yn=Dt.currentProgram;fe===!0&&(Yn=go(V,L,U));let zs=!1,Fn=!1,Pr=!1,De=Yn.getUniforms(),si=Dt.uniforms;if(Ut.useProgram(Yn.program)&&(zs=!0,Fn=!0,Pr=!0),V.id!==T&&(T=V.id,Fn=!0),zs||M!==_){Ut.buffers.depth.getReversed()?(ht.copy(_.projectionMatrix),Df(ht),Lf(ht),De.setValue(B,"projectionMatrix",ht)):De.setValue(B,"projectionMatrix",_.projectionMatrix),De.setValue(B,"viewMatrix",_.matrixWorldInverse);let Gi=De.map.cameraPosition;Gi!==void 0&&Gi.setValue(B,zt.setFromMatrixPosition(_.matrixWorld)),se.logarithmicDepthBuffer&&De.setValue(B,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&De.setValue(B,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,Fn=!0,Pr=!0)}if(U.isSkinnedMesh){De.setOptional(B,U,"bindMatrix"),De.setOptional(B,U,"bindMatrixInverse");let Nn=U.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),De.setValue(B,"boneTexture",Nn.boneTexture,S))}U.isBatchedMesh&&(De.setOptional(B,U,"batchingTexture"),De.setValue(B,"batchingTexture",U._matricesTexture,S),De.setOptional(B,U,"batchingIdTexture"),De.setValue(B,"batchingIdTexture",U._indirectTexture,S),De.setOptional(B,U,"batchingColorTexture"),U._colorsTexture!==null&&De.setValue(B,"batchingColorTexture",U._colorsTexture,S));let Ir=G.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0)&&kt.update(U,G,Yn),(Fn||Dt.receiveShadow!==U.receiveShadow)&&(Dt.receiveShadow=U.receiveShadow,De.setValue(B,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(si.envMap.value=Ct,si.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&L.environment!==null&&(si.envMapIntensity.value=L.environmentIntensity),Fn&&(De.setValue(B,"toneMappingExposure",y.toneMappingExposure),Dt.needsLights&&kd(si,Pr),st&&V.fog===!0&&mt.refreshFogUniforms(si,st),mt.refreshMaterialUniforms(si,V,z,q,p.state.transmissionRenderTarget[_.id]),cr.upload(B,sh(Dt),si,S)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(cr.upload(B,sh(Dt),si,S),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&De.setValue(B,"center",U.center),De.setValue(B,"modelViewMatrix",U.modelViewMatrix),De.setValue(B,"normalMatrix",U.normalMatrix),De.setValue(B,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Nn=V.uniformsGroups;for(let Gi=0,Vi=Nn.length;Gi<Vi;Gi++){let oh=Nn[Gi];D.update(oh,Yn),D.bind(oh,Yn)}}return Yn}function kd(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function Gd(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(_,L,G){dt.get(_.texture).__webglTexture=L,dt.get(_.depthTexture).__webglTexture=G;let V=dt.get(_);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,L){let G=dt.get(_);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(_,L=0,G=0){F=_,x=L,w=G;let V=!0,U=null,st=!1,Et=!1;if(_){let Ct=dt.get(_);if(Ct.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(B.FRAMEBUFFER,null),V=!1;else if(Ct.__webglFramebuffer===void 0)S.setupRenderTarget(_);else if(Ct.__hasExternalTextures)S.rebindTextures(_,dt.get(_.texture).__webglTexture,dt.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ft=_.depthTexture;if(Ct.__boundDepthTexture!==Ft){if(Ft!==null&&dt.has(Ft)&&(_.width!==Ft.image.width||_.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(_)}}let Vt=_.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Et=!0);let Zt=dt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Zt[L])?U=Zt[L][G]:U=Zt[L],st=!0):_.samples>0&&S.useMultisampledRTT(_)===!1?U=dt.get(_).__webglMultisampledFramebuffer:Array.isArray(Zt)?U=Zt[G]:U=Zt,P.copy(_.viewport),W.copy(_.scissor),O=_.scissorTest}else P.copy(bt).multiplyScalar(z).floor(),W.copy(Ht).multiplyScalar(z).floor(),O=ae;if(Ut.bindFramebuffer(B.FRAMEBUFFER,U)&&V&&Ut.drawBuffers(_,U),Ut.viewport(P),Ut.scissor(W),Ut.setScissorTest(O),st){let Ct=dt.get(_.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ct.__webglTexture,G)}else if(Et){let Ct=dt.get(_.texture),Vt=L||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.__webglTexture,G||0,Vt)}T=-1},this.readRenderTargetPixels=function(_,L,G,V,U,st,Et){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=dt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Et!==void 0&&(wt=wt[Et]),wt){Ut.bindFramebuffer(B.FRAMEBUFFER,wt);try{let Ct=_.texture,Vt=Ct.format,Zt=Ct.type;if(!se.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-V&&G>=0&&G<=_.height-U&&B.readPixels(L,G,V,U,Kt.convert(Vt),Kt.convert(Zt),st)}finally{let Ct=F!==null?dt.get(F).__webglFramebuffer:null;Ut.bindFramebuffer(B.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(_,L,G,V,U,st,Et){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=dt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Et!==void 0&&(wt=wt[Et]),wt){let Ct=_.texture,Vt=Ct.format,Zt=Ct.type;if(!se.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=_.width-V&&G>=0&&G<=_.height-U){Ut.bindFramebuffer(B.FRAMEBUFFER,wt);let Ft=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ft),B.bufferData(B.PIXEL_PACK_BUFFER,st.byteLength,B.STREAM_READ),B.readPixels(L,G,V,U,Kt.convert(Vt),Kt.convert(Zt),0);let ue=F!==null?dt.get(F).__webglFramebuffer:null;Ut.bindFramebuffer(B.FRAMEBUFFER,ue);let Ce=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await If(B,Ce,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ft),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,st),B.deleteBuffer(Ft),B.deleteSync(Ce),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,L=null,G=0){_.isTexture!==!0&&(kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,_=arguments[1]);let V=Math.pow(2,-G),U=Math.floor(_.image.width*V),st=Math.floor(_.image.height*V),Et=L!==null?L.x:0,wt=L!==null?L.y:0;S.setTexture2D(_,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,Et,wt,U,st),Ut.unbindTexture()},this.copyTextureToTexture=function(_,L,G=null,V=null,U=0){_.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,_=arguments[1],L=arguments[2],U=arguments[3]||0,G=null);let st,Et,wt,Ct,Vt,Zt,Ft,ue,Ce,Ie=_.isCompressedTexture?_.mipmaps[U]:_.image;G!==null?(st=G.max.x-G.min.x,Et=G.max.y-G.min.y,wt=G.isBox3?G.max.z-G.min.z:1,Ct=G.min.x,Vt=G.min.y,Zt=G.isBox3?G.min.z:0):(st=Ie.width,Et=Ie.height,wt=Ie.depth||1,Ct=0,Vt=0,Zt=0),V!==null?(Ft=V.x,ue=V.y,Ce=V.z):(Ft=0,ue=0,Ce=0);let Sn=Kt.convert(L.format),de=Kt.convert(L.type),Dt;L.isData3DTexture?(S.setTexture3D(L,0),Dt=B.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(S.setTexture2DArray(L,0),Dt=B.TEXTURE_2D_ARRAY):(S.setTexture2D(L,0),Dt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,L.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,L.unpackAlignment);let vi=B.getParameter(B.UNPACK_ROW_LENGTH),fe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Yn=B.getParameter(B.UNPACK_SKIP_PIXELS),zs=B.getParameter(B.UNPACK_SKIP_ROWS),Fn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ie.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ie.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ct),B.pixelStorei(B.UNPACK_SKIP_ROWS,Vt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Zt);let Pr=_.isDataArrayTexture||_.isData3DTexture,De=L.isDataArrayTexture||L.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){let si=dt.get(_),Ir=dt.get(L),Nn=dt.get(si.__renderTarget),Gi=dt.get(Ir.__renderTarget);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Vi=0;Vi<wt;Vi++)Pr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dt.get(_).__webglTexture,U,Zt+Vi),_.isDepthTexture?(De&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dt.get(L).__webglTexture,U,Ce+Vi),B.blitFramebuffer(Ct,Vt,st,Et,Ft,ue,st,Et,B.DEPTH_BUFFER_BIT,B.NEAREST)):De?B.copyTexSubImage3D(Dt,U,Ft,ue,Ce+Vi,Ct,Vt,st,Et):B.copyTexSubImage2D(Dt,U,Ft,ue,Ce+Vi,Ct,Vt,st,Et);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else De?_.isDataTexture||_.isData3DTexture?B.texSubImage3D(Dt,U,Ft,ue,Ce,st,Et,wt,Sn,de,Ie.data):L.isCompressedArrayTexture?B.compressedTexSubImage3D(Dt,U,Ft,ue,Ce,st,Et,wt,Sn,Ie.data):B.texSubImage3D(Dt,U,Ft,ue,Ce,st,Et,wt,Sn,de,Ie):_.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,U,Ft,ue,st,Et,Sn,de,Ie.data):_.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,U,Ft,ue,Ie.width,Ie.height,Sn,Ie.data):B.texSubImage2D(B.TEXTURE_2D,U,Ft,ue,st,Et,Sn,de,Ie);B.pixelStorei(B.UNPACK_ROW_LENGTH,vi),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Yn),B.pixelStorei(B.UNPACK_SKIP_ROWS,zs),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Fn),U===0&&L.generateMipmaps&&B.generateMipmap(Dt),Ut.unbindTexture()},this.copyTextureToTexture3D=function(_,L,G=null,V=null,U=0){return _.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,_=arguments[2],L=arguments[3],U=arguments[4]||0),kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,L,G,V,U)},this.initRenderTarget=function(_){dt.get(_).__webglFramebuffer===void 0&&S.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?S.setTextureCube(_,0):_.isData3DTexture?S.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?S.setTexture2DArray(_,0):S.setTexture2D(_,0),Ut.unbindTexture()},this.resetState=function(){x=0,w=0,F=null,Ut.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var Zr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new xt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bs=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},P0=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=p0,this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new R,ha=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=oi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=oi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=oi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=oi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kn=class extends Di{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},er,Hr=new R,nr=new R,ir=new R,sr=new tt,Nr=new tt,Nu=new ye,No=new R,Or=new R,Oo=new R,ru=new tt,Al=new tt,ou=new tt,Kn=class extends Je{constructor(t=new kn){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new sn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new P0(e,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new ha(i,3,0,!1)),er.setAttribute("uv",new ha(i,2,3,!1))}this.geometry=er,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),Nu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;zo(No.set(-.5,-.5,0),ir,o,nr,s,r),zo(Or.set(.5,-.5,0),ir,o,nr,s,r),zo(Oo.set(.5,.5,0),ir,o,nr,s,r),ru.set(0,0),Al.set(1,0),ou.set(1,1);let a=t.ray.intersectTriangle(No,Or,Oo,!1,Hr);if(a===null&&(zo(Or.set(-.5,.5,0),ir,o,nr,s,r),Al.set(0,1),a=t.ray.intersectTriangle(No,Oo,Or,!1,Hr),a===null))return;let l=t.ray.origin.distanceTo(Hr);l<t.near||l>t.far||e.push({distance:l,point:Hr.clone(),uv:Ki.getInterpolation(Hr,No,Or,Oo,ru,Al,ou,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function zo(n,t,e,i,s,r){sr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Nr.x=r*sr.x-s*sr.y,Nr.y=s*sr.x+r*sr.y):Nr.copy(sr),n.copy(t),n.x+=Nr.x,n.y+=Nr.y,n.applyMatrix4(Nu)}var ua=class extends Rn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=_n,h=_n,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $r=class extends Di{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},au=new ye,I0=new na,ko=new gr,Go=new R,da=class extends Je{constructor(t=new sn,e=new $r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,t.ray.intersectsSphere(ko)===!1)return;au.copy(s).invert(),I0.copy(t.ray).applyMatrix4(au);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,E=f;g<E;g++){let m=c.getX(g);Go.fromBufferAttribute(u,m),lu(Go,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,E=f;g<E;g++)Go.fromBufferAttribute(u,g),lu(Go,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lu(n,t,e,i,s,r,o){let a=I0.distanceSqToPoint(n);if(a<e){let l=new R;I0.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var mn=class extends Rn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new tt:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new R,s=[],r=[],o=[],a=new R,l=new ye;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(an(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(an(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Jr=class extends Gn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},D0=class extends Jr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Vo=new R,Tl=new lc,Sl=new lc,xl=new lc,L0=class extends Gn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new R){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Vo.subVectors(s[0],s[1]).add(s[0]),c=Vo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Vo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Vo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),E=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),Tl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,E,m),Sl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,E,m),xl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),xl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Tl.calc(l),Sl.calc(l),xl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Rg(n,t){let e=1-n;return e*e*t}function wg(n,t){return 2*(1-n)*n*t}function Cg(n,t){return n*n*t}function Wr(n,t,e,i){return Rg(n,t)+wg(n,e)+Cg(n,i)}function Fg(n,t){let e=1-n;return e*e*e*t}function Pg(n,t){let e=1-n;return 3*e*e*n*t}function Ig(n,t){return 3*(1-n)*n*n*t}function Dg(n,t){return n*n*n*t}function Xr(n,t,e,i,s){return Fg(n,t)+Pg(n,e)+Ig(n,i)+Dg(n,s)}var fa=class extends Gn{constructor(t=new tt,e=new tt,i=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new tt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xr(t,s.x,r.x,o.x,a.x),Xr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},B0=class extends Gn{constructor(t=new R,e=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new R){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xr(t,s.x,r.x,o.x,a.x),Xr(t,s.y,r.y,o.y,a.y),Xr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pa=class extends Gn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},U0=class extends Gn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends Gn{constructor(t=new tt,e=new tt,i=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new tt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Wr(t,s.x,r.x,o.x),Wr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},H0=class extends Gn{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Wr(t,s.x,r.x,o.x),Wr(t,s.y,r.y,o.y),Wr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends Gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(cu(a,l.x,c.x,h.x,u.x),cu(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},hu=Object.freeze({__proto__:null,ArcCurve:D0,CatmullRomCurve3:L0,CubicBezierCurve:fa,CubicBezierCurve3:B0,EllipseCurve:Jr,LineCurve:pa,LineCurve3:U0,QuadraticBezierCurve:ma,QuadraticBezierCurve3:H0,SplineCurve:ga}),N0=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new hu[s.type]().fromJSON(s))}return this}},O0=class extends N0{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new pa(this.currentPoint.clone(),new tt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new ma(this.currentPoint.clone(),new tt(t,e),new tt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new fa(this.currentPoint.clone(),new tt(t,e),new tt(i,s),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ga(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Jr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ts=class n extends sn{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=an(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,d=new tt,f=new R,g=new R,E=new R,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,E.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(E.x,E.y,E.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=E.x,f.y+=E.y,f.z+=E.z,f.normalize(),l.push(f.x,f.y,f.z),E.copy(g)}for(let b=0;b<=e;b++){let A=i+b*h*s,y=Math.sin(A),C=Math.cos(A);for(let x=0;x<=t.length-1;x++){u.x=t[x].x*y,u.y=t[x].y,u.z=t[x].x*C,o.push(u.x,u.y,u.z),d.x=b/e,d.y=x/(t.length-1),a.push(d.x,d.y);let w=l[3*x+0]*y,F=l[3*x+1],T=l[3*x+0]*C;c.push(w,F,T)}}for(let b=0;b<e;b++)for(let A=0;A<t.length-1;A++){let y=A+b*t.length,C=y,x=y+t.length,w=y+t.length+1,F=y+1;r.push(C,x,F),r.push(w,F,x)}this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("uv",new xe(a,2)),this.setAttribute("normal",new xe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Kr=class n extends ts{constructor(t=1,e=1,i=4,s=8){let r=new O0;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},ui=class n extends sn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(a,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ln=class n extends sn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,E=[],m=i/2,p=0;b(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(f,2));function b(){let y=new R,C=new R,x=0,w=(e-t)/i;for(let F=0;F<=r;F++){let T=[],M=F/r,P=M*(e-t)+t;for(let W=0;W<=s;W++){let O=W/s,I=O*l+a,N=Math.sin(I),H=Math.cos(I);C.x=P*N,C.y=-M*i+m,C.z=P*H,u.push(C.x,C.y,C.z),y.set(N,w,H).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-M),T.push(g++)}E.push(T)}for(let F=0;F<s;F++)for(let T=0;T<r;T++){let M=E[T][F],P=E[T+1][F],W=E[T+1][F+1],O=E[T][F+1];(t>0||T!==0)&&(h.push(M,P,O),x+=3),(e>0||T!==r-1)&&(h.push(P,W,O),x+=3)}c.addGroup(p,x,0),p+=x}function A(y){let C=g,x=new tt,w=new R,F=0,T=y===!0?t:e,M=y===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let P=g;for(let W=0;W<=s;W++){let I=W/s*l+a,N=Math.cos(I),H=Math.sin(I);w.x=T*H,w.y=m*M,w.z=T*N,u.push(w.x,w.y,w.z),d.push(0,M,0),x.x=N*.5+.5,x.y=H*.5*M+.5,f.push(x.x,x.y),g++}for(let W=0;W<s;W++){let O=C+W,I=P+W;y===!0?h.push(I,I+1,O):h.push(I+1,I,O),F+=3}c.addGroup(p,F,y===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},di=class n extends Ln{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ie=class n extends sn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,d=new R,f=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){let b=[],A=p/i,y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){let x=C/e;u.x=-t*Math.cos(s+x*r)*Math.sin(o+A*a),u.y=t*Math.cos(o+A*a),u.z=t*Math.sin(s+x*r)*Math.sin(o+A*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),E.push(d.x,d.y,d.z),m.push(x+y,1-A),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let A=h[p][b+1],y=h[p][b],C=h[p+1][b],x=h[p+1][b+1];(p!==0||o>0)&&f.push(A,y,x),(p!==i-1||l<Math.PI)&&f.push(y,C,x)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(E,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var je=class n extends sn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let E=g/s*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(E),u.y=(t+e*Math.cos(m))*Math.sin(E),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(E),h.y=t*Math.sin(E),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let E=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(E,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ve=class extends Di{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new xt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wu,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Wo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Lg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Mr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},z0=class extends Mr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uh:r=t,a=2*e-i;break;case dh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case uh:o=t,l=2*i-e;break;case dh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),E=g*g,m=E*g,p=-d*m+2*d*E-d*g,b=(1+d)*m+(-1.5-2*d)*E+(-.5+d)*g+1,A=(-1-f)*m+(1.5+f)*E+.5*g,y=f*m-f*E;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+b*o[c+C]+A*o[l+C]+y*o[u+C];return r}},k0=class extends Mr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},G0=class extends Mr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wo(e,this.TimeBufferType),this.values=Wo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Wo(t.times,Array),values:Wo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new G0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new k0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new z0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Jo:e=this.InterpolantFactoryMethodDiscrete;break;case f0:e=this.InterpolantFactoryMethodLinear;break;case Za:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jo;case this.InterpolantFactoryMethodLinear:return f0;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Lg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Za,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let E=e[u+g];if(E!==e[d+g]||E!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=f0;var As=class extends Qn{constructor(t,e,i){super(t,e,i)}};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Jo;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var V0=class extends Qn{};V0.prototype.ValueTypeName="color";var W0=class extends Qn{};W0.prototype.ValueTypeName="number";var X0=class extends Mr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)zn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ea=class extends Qn{InterpolantFactoryMethodLinear(t){return new X0(this.times,this.values,this.getValueSize(),t)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends Qn{constructor(t,e,i){super(t,e,i)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Jo;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var q0=class extends Qn{};q0.prototype.ValueTypeName="vector";var Y0=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Bg=new Y0,Z0=class{constructor(t){this.manager=t!==void 0?t:Bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Z0.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ss=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},xs=class extends Ss{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Rl=new ye,uu=new R,du=new R,Qr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(uu),du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(du),e.updateMatrixWorld(),Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},$0=class extends Qr{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Qo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},fi=class extends Ss{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},fu=new ye,zr=new R,wl=new R,J0=class extends Qr{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Te(2,1,1,1),new Te(0,1,1,1),new Te(3,1,1,1),new Te(1,1,1,1),new Te(3,0,1,1),new Te(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),zr.setFromMatrixPosition(t.matrixWorld),i.position.copy(zr),wl.copy(i.position),wl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(wl),i.updateMatrixWorld(),s.makeTranslation(-zr.x,-zr.y,-zr.z),fu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu)}},rn=class extends Ss{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new J0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},K0=class extends Qr{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},es=class extends Ss{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new K0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},bn=class extends Ss{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ya=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=pu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function pu(){return 0}var cc="\\[\\]\\.:\\/",Ug=new RegExp("["+cc+"]","g"),hc="[^"+cc+"]",Hg="[^"+cc.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",hc),Og=/(WCOD+)?/.source.replace("WCOD",Hg),zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),Gg=new RegExp("^"+Ng+Og+zg+kg+"$"),Vg=["material","materials","bones","map"],Q0=class{constructor(t,e,i){let s=i||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Le=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ug,"")}static parseTrackName(t){let e=Gg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Vg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Q0;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var PE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:j0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=j0);var ba={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Wg=new yr(-1,1,1,-1,0,1),uc=class extends sn{constructor(){super(),this.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xe([0,2,0,0,2,0],2))}},Xg=new uc,Ar=class{constructor(t){this._mesh=new rt(Xg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Wg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Rs=class extends Li{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=_r.clone(t.uniforms),this.material=new Xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ar(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var jr=class extends Li{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Aa=class extends Li{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ta=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new tt);this._width=i.width,this._height=i.height,e=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rs(ba),this.copyPass.material.blending=li,this.clock=new ya}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jr!==void 0&&(o instanceof jr?i=!0:o instanceof Aa&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ou={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Tr=class n extends Li{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,o,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new nn(r,o,{type:wn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new nn(r,o,{type:wn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Ou;this.highPassUniforms=_r.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new tt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ba;this.copyUniforms=_r.clone(h.uniforms),this.blendMaterial=new Xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:hr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xt,this.oldClearAlpha=1,this.basic=new re,this.fsQuad=new Ar(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new tt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};Tr.BlurDirectionX=new tt(1,0);Tr.BlurDirectionY=new tt(0,1);var Bi=1920,Ui=1080;function He(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Pt=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),Wt=(n,t,e)=>n+(t-n)*e,An=(n,t,e)=>{let i=Pt((e-n)/(t-n));return i*i*(3-2*i)},Bn=n=>1-Math.pow(1-Pt(n),3),xa=n=>Math.pow(Pt(n),3),Cn=n=>(n=Pt(n),n*n*(3-2*n));function to(n,t){if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){let i=Cn((t-n[e-1][0])/(n[e][0]-n[e-1][0])),s=n[e-1][1],r=n[e][1];return Array.isArray(s)?s.map((o,a)=>Wt(o,r[a],i)):Wt(s,r,i)}return n[n.length-1][1]}var qg={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new tt(Bi,Ui)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){if(maxBlur<.6){gl_FragColor=vec4(texture2D(tColor,vUv).rgb,1.);return;}float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<44;i++){float fi=float(i);float r=sqrt(fi/44.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},Yg={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new xt(1,1,1)},sat:{value:1},flash:{value:0},toon:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash,toon;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=mix(aces(c*.88),c/(1.+.18*c),toon);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(1.,.66);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1920.,1080.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Sa=class{constructor(t){let e=this.r=new ca({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(Bi,Ui,!1),e.shadowMap.enabled=!0,e.shadowMap.type=tc,e.toneMapping=ci,e.outputColorSpace=ns;let i=new vr(Bi,Ui);i.type=Pi,this.rt=new nn(Bi,Ui,{type:wn,samples:4,depthTexture:i}),this.composer=new Ta(e,new nn(Bi,Ui,{type:wn})),this.dof=new Rs(qg,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new Tr(new tt(Bi/2,Ui/2),.45,.75,.82),this.grade=new Rs(Yg),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(o=>t>=o.t0&&t<o.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let i=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.toon.value=i.toon??0,r.frame.value=Math.floor(t*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function zu(n,t,e,i=40){let s=new bs;s.background=new xt(e);let r=new ln(i,Bi/Ui,.08,400);return{t0:n,t1:t,scene:s,camera:r,update(){return{}}}}function ku(n,t,e,i=0){n.position.set(t[0],t[1],t[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(e[0],e[1],e[2])}var ry=1/420;var dc={value:0};var eo=new R;function Vn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;eo.copy(t),eo[i]=0,eo.normalize();let c=.5*o/(o+a),h=1-eo.angleTo(n)/l;return Math.sign(eo[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Ra=class extends Ge{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new R,l=new R,c=new R(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new R,E=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*E,l.y-=Math.sign(l.y)*E,l.z-=Math.sign(l.z)*E,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Vn(g,l,"z","y",r,i),d[p+1]=1-Vn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-Vn(g,l,"z","y",r,i),d[p+1]=1-Vn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-Vn(g,l,"x","z",r,t),d[p+1]=Vn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[p+0]=1-Vn(g,l,"x","z",r,t),d[p+1]=1-Vn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[p+0]=1-Vn(g,l,"x","y",r,t),d[p+1]=1-Vn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=Vn(g,l,"x","y",r,t),d[p+1]=1-Vn(g,l,"y","x",r,e);break}}};var is=null;function gc(){if(is)return is;let n=new Uint8Array([118,118,118,255,196,196,196,255,255,255,255,255]);return is=new ua(n,3,1,Dn),is.minFilter=is.magFilter=_n,is.generateMipmaps=!1,is.needsUpdate=!0,is}var fc=new Map;function Me(n,t){if(!t){let e=String(n);if(fc.has(e))return fc.get(e);let i=new ve({color:n,gradientMap:gc()});return fc.set(e,i),i}return new ve({color:n,gradientMap:gc(),...t})}var $g=`uniform float w; uniform float minPx; uniform vec2 res;
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
}`,Jg="uniform vec3 col; uniform float op; void main(){ gl_FragColor = vec4(col, op); }",pc=new Map;function Ec(n=.014,t="#17131C",e=1.6){let i=n+t+e;if(pc.has(i))return pc.get(i);let s=new Xe({uniforms:{w:{value:n},minPx:{value:e},res:{value:new tt(Bi,Ui)},col:{value:new xt(t).convertSRGBToLinear()},op:{value:1}},vertexShader:$g,fragmentShader:Jg,side:$e});return pc.set(i,s),s}function ws(n,t=.014,e,i){let s=new rt(n.geometry,Ec(t,e,i));return s.castShadow=!1,s.receiveShadow=!1,s.userData.isOutline=!0,n.add(s),n}function Pe(n,t,e={}){let i=new rt(n,t&&t.isMaterial?t:Me(t));return i.castShadow=e.shadow??!0,i.receiveShadow=!0,e.out&&ws(i,e.out===!0?.014:e.out,e.outCol,e.minPx),e.pos&&i.position.set(...e.pos),e.rot&&i.rotation.set(...e.rot),i}var Cs=(n,t,e,i=.04,s=3)=>new Ra(n,t,e,s,Math.min(i,n/2-.001,t/2-.001,e/2-.001));function at(n,t,e,i,s=0,r=0,o=0,a={}){return Pe(Cs(n,t,e,a.r??Math.min(.05,Math.min(n,t,e)*.18)),i,{pos:[s,r,o],...a})}function it(n,t,e,i,s=0,r=0,o=0,a={}){return Pe(new Ge(n,t,e),i,{pos:[s,r,o],...a})}function _t(n,t,e,i,s=0,r=0,o=0,a={}){return Pe(new Ln(n,t,e,a.seg||24),i,{pos:[s,r,o],...a})}function pe(n,t,e=0,i=0,s=0,r={}){return Pe(new ie(n,r.seg||24,Math.max(12,(r.seg||24)*.6|0)),t,{pos:[e,i,s],...r})}function qt(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t;let s=i.getContext("2d");e(s,n,t);let r=new mn(i);return r.colorSpace=Fe,r.anisotropy=8,r}var he=(n,t={})=>new ve({map:n,gradientMap:gc(),...t}),mc=null;function wa(n=.32,t=.38){mc||(mc=qt(128,128,i=>{let s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(20,16,30,1)"),s.addColorStop(.55,"rgba(20,16,30,.55)"),s.addColorStop(1,"rgba(20,16,30,0)"),i.fillStyle=s,i.fillRect(0,0,128,128)}));let e=new rt(new Bt(n*2,n*2),new re({map:mc,transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return e.rotation.x=-Math.PI/2,e.renderOrder=1,e}function Wn(n,t={}){let e=new xs(t.sky||"#EAF2FF",t.ground||"#B9A898",t.hemi??1.5);n.add(e);let i=new es(t.key||"#FFF4E2",t.ki??2.2);i.position.set(...t.pos||[6,10,7]),i.castShadow=t.shadow??!0,i.shadow.mapSize.set(2048,2048);let s=t.r||12;return Object.assign(i.shadow.camera,{left:-s,right:s,top:s,bottom:-s,near:.5,far:t.far||60}),i.shadow.bias=-4e-4,i.shadow.normalBias=.02,i.shadow.radius=3,t.target&&(i.target.position.set(...t.target),n.add(i.target),i.position.set(t.target[0]+(t.pos||[6,10,7])[0],t.target[1]+(t.pos||[6,10,7])[1],t.target[2]+(t.pos||[6,10,7])[2])),n.add(i),{hemi:e,k:i}}var Gu=(n={})=>({toon:1,blur:0,bloom:.18,bloomT:.95,bloomR:.4,vig:.22,exposure:1,sat:1.05,...n});var Tn=Math.PI/180,Ne=.3,Kg=.012,on={phi0:Math.PI/2-1,phiL:2,th0:.62,thL:1.55,W:1024,H:512},Xt=n=>on.W/2+n/on.phiL*on.W,Gt=n=>(n-on.th0)/on.thL*on.H,Un=n=>n/on.phiL*on.W,gn=n=>n/on.thL*on.H,Fs="#1B1420";function Qg(n,t,e){n.clearRect(0,0,on.W,on.H),n.lineCap="round",n.lineJoin="round";let i=t.emo||"neutro",s=1.45,r=.31;if(t.blush||i==="feliz"||i==="apaixonado"||i==="vergonha"){n.fillStyle="rgba(240,110,110,"+(i==="vergonha"?.55:.3)+")";for(let y of[-1,1])n.beginPath(),n.ellipse(Xt(y*.44),Gt(1.7),Un(.075),gn(.045),0,0,7),n.fill()}let o=Pt(Math.max(t.blink||0,i==="sono"?.55:i==="triste"||i==="choro"?.22:i==="bravo"?.25:i==="desconfiado"?.4:i==="tedio"?.5:0)),a=i==="surpreso"||i==="medo"?1.15:1;for(let y of[-1,1]){let C=Xt(y*r),x=Gt(s),w=Un(.128)*a,F=gn(.158)*a;if(i==="feliz"&&!t.olhosAbertos||(t.blink||0)>.92){n.strokeStyle=Fs,n.lineWidth=11,n.beginPath(),i==="feliz"||i==="rindo"?n.arc(C,x+F*.25,w*.85,Math.PI*1.12,Math.PI*1.88):(n.moveTo(C-w*.9,x+F*.15),n.quadraticCurveTo(C,x+F*.55,C+w*.9,x+F*.15)),n.stroke();continue}n.save(),n.beginPath(),n.ellipse(C,x,w,F,0,0,7),n.clip(),n.fillStyle="#FFFFFF",n.fillRect(C-w,x-F,w*2,F*2);let T=i==="surpreso"||i==="medo"?.55:.68,M=Pt(e[0],-1,1),P=Pt(e[1],-1,1),W=C+M*w*.38,O=x+P*F*.32+F*.06;n.fillStyle="#231A26",n.beginPath(),n.ellipse(W,O,w*T,F*T*.98,0,0,7),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.ellipse(W-w*.22,O-F*.28,w*.2,F*.17,0,0,7),n.fill(),n.beginPath(),n.ellipse(W+w*.2,O+F*.22,w*.08,F*.07,0,0,7),n.fill();let I=i==="bravo"?-y*.45:i==="triste"||i==="choro"||i==="preocupado"?y*.35:0;if(o>.02||I){let N=x-F+F*2*o;n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.moveTo(C-w*1.2,x-F*1.3),n.lineTo(C+w*1.2,x-F*1.3),n.lineTo(C+w*1.2,N+Math.tan(I)*w*1.2),n.lineTo(C-w*1.2,N-Math.tan(I)*w*1.2),n.closePath(),n.fill(),n.strokeStyle=Fs,n.lineWidth=8,n.beginPath(),n.moveTo(C-w*1.1,N-Math.tan(I)*w*1.1),n.lineTo(C+w*1.1,N+Math.tan(I)*w*1.1),n.stroke()}n.restore(),n.strokeStyle=Fs,n.lineWidth=8,n.beginPath(),n.ellipse(C,x,w,F,0,0,7),n.stroke(),t.cilios&&(n.lineWidth=7,n.beginPath(),n.moveTo(C+y*w*.7,x-F*.72),n.lineTo(C+y*w*1.15,x-F*1.02),n.stroke())}if(i==="choro"||t.lagrima){n.fillStyle="rgba(120,200,255,.85)";for(let y of[-1,1]){let C=Xt(y*r),x=Gt(s)+gn(.12);n.beginPath(),n.moveTo(C-Un(.02),x),n.quadraticCurveTo(C,x+gn(.22),C+Un(.02),x),n.fill(),n.beginPath(),n.ellipse(C,x+gn(.2),Un(.028),gn(.035),0,0,7),n.fill()}}let l={neutro:[0,0],feliz:[.04,-.1],rindo:[.04,-.1],triste:[.02,.45],choro:[.03,.5],bravo:[-.03,-.55],surpreso:[.09,0],medo:[.08,.4],preocupado:[.04,.38],desconfiado:[-.01,-.2],sono:[-.01,.1],vergonha:[.03,.3],determinado:[-.02,-.35],tedio:[-.01,.05],apaixonado:[.05,.2]}[i]||[0,0],c=l[0]+(t.brow||0)*.05,h=l[1];n.strokeStyle=t.sobr||Fs,n.lineWidth=t.sobrW||15;for(let y of[-1,1]){let C=Xt(y*r),x=Gt(s-.2-c),w=Un(.085),F=y*h*.5;n.beginPath(),n.moveTo(C-w*Math.cos(F),x-w*Math.sin(F)*(y<0,1)),n.quadraticCurveTo(C,x-gn(.025),C+w*Math.cos(F),x+w*Math.sin(F)),n.stroke()}if(t.rugas){n.strokeStyle="rgba(90,50,40,.5)",n.lineWidth=5;for(let y of[-1,1]){let C=Xt(y*(r+.17));for(let x=0;x<3;x++)n.beginPath(),n.moveTo(C,Gt(s-.05+x*.06)),n.lineTo(C+y*Un(.05),Gt(s-.07+x*.07)),n.stroke()}n.beginPath(),n.moveTo(Xt(-.12),Gt(1.12)),n.quadraticCurveTo(Xt(0),Gt(1.09),Xt(.12),Gt(1.12)),n.stroke()}if(t.oculosEscuros){n.fillStyle="#15121A";for(let y of[-1,1])n.beginPath(),n.ellipse(Xt(y*r),Gt(s+.02),Un(.16),gn(.13),0,0,7),n.fill();n.strokeStyle="#15121A",n.lineWidth=10,n.beginPath(),n.moveTo(Xt(-r+.14),Gt(s)),n.lineTo(Xt(r-.14),Gt(s)),n.stroke(),n.fillStyle="rgba(255,255,255,.35)";for(let y of[-1,1])n.beginPath(),n.ellipse(Xt(y*r-.05),Gt(s-.03),Un(.04),gn(.025),-.5,0,7),n.fill()}if(t.oculos){n.strokeStyle="#6A4A3A",n.lineWidth=8;for(let y of[-1,1])n.beginPath(),n.ellipse(Xt(y*r),Gt(s),Un(.15),gn(.16),0,0,7),n.stroke();n.beginPath(),n.moveTo(Xt(-r+.15),Gt(s-.02)),n.quadraticCurveTo(Xt(0),Gt(s-.08),Xt(r-.15),Gt(s-.02)),n.stroke()}t.nariz&&(n.strokeStyle="rgba(60,30,30,.55)",n.lineWidth=7,n.beginPath(),n.arc(Xt(0),Gt(1.66),Un(.035),.2,Math.PI-.2),n.stroke());let u=t.mouth||{},d=Pt(u.open||0),f=Pt(u.round||0),g=u.smile??({feliz:.8,rindo:.9,triste:-.6,choro:-.7,bravo:-.4,medo:-.3,preocupado:-.35,apaixonado:.6,vergonha:.3,determinado:-.05,desconfiado:-.15,tedio:-.2}[i]||0),E=Gt(t.bigode?1.93:1.88),m=Xt(0),p=Un(.15+.05*(1-f)+(i==="rindo"?.04:0)),b=E-g*gn(.035),A=()=>{if(d<.07)n.strokeStyle=Fs,n.lineWidth=11,n.beginPath(),n.moveTo(m-p*.85,b),n.quadraticCurveTo(m,E+g*gn(.075),m+p*.85,b),n.stroke();else{let y=gn(.05+.2*d),C=p*(1-.38*f);n.beginPath(),f>.55?n.ellipse(m,E+y*.35,C*.75,y*.62,0,0,7):(n.moveTo(m-C,b),n.quadraticCurveTo(m,E+g*gn(.03)-y*.12,m+C,b),n.bezierCurveTo(m+C*.95,b+y*1.25,m-C*.95,b+y*1.25,m-C,b),n.closePath()),n.fillStyle="#5A1E2A",n.fill(),n.save(),n.clip(),d>.28&&f<.55&&(n.fillStyle="#FFFFFF",n.fillRect(m-C,b-y,C*2,y*1.18),t.banguela&&(n.fillStyle="#5A1E2A",n.fillRect(m+C*.08,b-y,C*.26,y*.62))),n.fillStyle="#E8707E",n.beginPath(),n.ellipse(m,b+y*1.05,C*.58,y*.42,0,0,7),n.fill(),n.restore(),n.strokeStyle=Fs,n.lineWidth=9,n.stroke()}};if(t.barba||A(),t.barba&&(n.fillStyle=t.barba,n.globalAlpha=.92,n.beginPath(),n.moveTo(Xt(-.44),Gt(1.5)),n.quadraticCurveTo(Xt(-.46),Gt(2.05),Xt(0),Gt(2.2)),n.quadraticCurveTo(Xt(.46),Gt(2.05),Xt(.44),Gt(1.5)),n.quadraticCurveTo(Xt(.36),Gt(1.78),Xt(.2),Gt(1.8)),n.quadraticCurveTo(Xt(0),Gt(1.72),Xt(-.2),Gt(1.8)),n.quadraticCurveTo(Xt(-.36),Gt(1.78),Xt(-.44),Gt(1.5)),n.fill(),n.globalAlpha=1,n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.ellipse(m,E+gn(.03),p*1.15,gn(.09+.12*d),0,0,7),n.fill(),A()),t.olheiras){n.strokeStyle="rgba(90,60,90,.45)",n.lineWidth=7;for(let y of[-1,1])n.beginPath(),n.arc(Xt(y*.31),Gt(1.5),Un(.1),.35,Math.PI-.35),n.stroke()}if(t.sardas){n.fillStyle="rgba(150,80,50,.55)";for(let y of[-1,1])for(let C=0;C<5;C++)n.beginPath(),n.arc(Xt(y*(.36+C%3*.05)),Gt(1.66+Math.floor(C/3)*.05+C%2*.02),4.5,0,7),n.fill()}t.bigode&&(n.fillStyle=t.bigode,n.strokeStyle=Fs,n.lineWidth=6,n.beginPath(),n.moveTo(Xt(0),Gt(1.76)),n.bezierCurveTo(Xt(.12),Gt(1.7),Xt(.24),Gt(1.76),Xt(.27),Gt(1.9)),n.bezierCurveTo(Xt(.17),Gt(1.84),Xt(.08),Gt(1.87),Xt(0),Gt(1.83)),n.bezierCurveTo(Xt(-.08),Gt(1.87),Xt(-.17),Gt(1.84),Xt(-.27),Gt(1.9)),n.bezierCurveTo(Xt(-.24),Gt(1.76),Xt(-.12),Gt(1.7),Xt(0),Gt(1.76)),n.fill(),n.stroke())}var Vu={},Hn=0,ss=(n,t)=>{let e="c"+n+t+Hn;return Vu[e]||(Vu[e]=new Kr(n,t,Hn?3:6,Hn?10:18))};function Wu(n,t=.82,e=36){let i=new ts(n.map(([l,c])=>new tt(l,c)),e,Math.PI,Math.PI*2);i.applyMatrix4(new ye().makeScale(1,1,t));let s=i.attributes.position,r=i.attributes.uv,o=1e9,a=-1e9;for(let l=0;l<s.count;l++)o=Math.min(o,s.getY(l)),a=Math.max(a,s.getY(l));for(let l=0;l<s.count;l++)r.setY(l,(s.getY(l)-o)/(a-o));return i.computeVertexNormals(),i}var jg={magro:[[0,.5],[.14,.5],[.165,.53],[.172,.62],[.172,.72],[.165,.8],[.14,.86],[.09,.895],[.04,.905],[0,.906]],barriga:[[0,.47],[.16,.47],[.2,.52],[.225,.6],[.225,.68],[.205,.77],[.17,.845],[.11,.89],[.04,.905],[0,.906]],senhora:[[0,.5],[.15,.5],[.17,.55],[.175,.64],[.17,.74],[.16,.81],[.13,.865],[.08,.898],[0,.906]]},tE=[[0,.24],[.25,.24],[.245,.26],[.22,.36],[.19,.5],[.165,.62],[0,.62]];function yc(n={}){Hn=n.simples?1:0;let t=n.pele||"#C98B5E",e=n.camisa||"#E8453C",i=n.calca||"#2E4A7A",s=n.tenis||"#F4F1EA",r=new Q,o=new Q;r.add(o);let a=new Q;a.position.y=.52,o.add(a);let l=(I,N,H,q,z=Kg)=>{let K=new rt(N,typeof H=="string"?Me(H):H);return K.castShadow=!0,K.receiveShadow=!0,q&&K.position.set(...q),z&&ws(K,z),I.add(K),K},c=qt(1024,512,(I,N,H)=>{I.fillStyle=e,I.fillRect(0,0,N,H),n.estampa&&n.estampa(I,N,H)}),h=he(c),u=l(a,Wu(jg[n.tronco||"magro"]),h,[0,-.52,0]);n.saia&&l(a,Wu(tE,.86),n.saia,[0,-.52,0]),l(a,new Ln(.06,.065,.1,16),t,[0,.4,0],0);let d=new Q;d.position.y=.38,a.add(d);let f=l(d,new ie(Ne,Hn?24:48,Hn?16:32),t,[0,Ne*.86,0]);f.receiveShadow=!1;for(let I of[-1,1])l(d,new ie(.055,16,12),t,[I*Ne*.96,Ne*.82,-.01]).scale.set(.6,1,.9);let g=document.createElement("canvas");g.width=on.W>>Hn,g.height=on.H>>Hn;let E=g.getContext("2d");Hn&&E.scale(.5,.5);let m=new mn(g);m.colorSpace=Fe,m.anisotropy=8;let p=new ve({map:m,gradientMap:Me("#fff").gradientMap,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),b=new rt(new ie(Ne*1.002,Hn?24:48,Hn?16:32,on.phi0,on.phiL,on.th0,on.thL),p);b.position.y=Ne*.86,b.renderOrder=2,d.add(b);let A=n.corCabelo||"#1E1618",y=new Q;if(y.position.y=Ne*.86,d.add(y),n.cabelo==="cacheado"){let I=new ie(1,Hn?8:14,Hn?6:10),N=0;for(let H=0;H<70;H++){let q=Math.acos(1-2*((H+.5)/70)),z=H*2.39996,K=Math.cos(q),ct=Math.sin(q),bt=Math.cos(z)*ct,Ht=Math.sin(z)*ct;if(K<.28&&Ht>-.2||K<-.25||Ht>.55&&K<.62||Math.abs(bt)>.8&&K<.45&&Ht>-.5)continue;let ae=.075+H*37%10/10*.03,Y=l(y,I,A,[bt*Ne*.98,K*Ne*.98+.01,Ht*Ne*.98],.009);Y.scale.setScalar(ae),Y.castShadow=!1,N++}}else if(n.cabelo==="tigela"||n.cabelo==="rabo"||n.cabelo==="coque"){if(l(y,new ie(Ne*1.04,40,28),A,[0,.055,-.065]),n.cabelo==="rabo"){let I=l(y,ss(.085,.26),A,[0,.06,-.42]);I.rotation.x=.75;let N=l(y,new ie(.1,18,14),A,[0,-.07,-.5]);l(y,new ie(.065,16,12),n.laco||"#F25C8A",[0,.22,-.31]);for(let H of[-1,1]){let q=l(y,ss(.06,.2),A,[H*.27,-.08,.02]);q.rotation.z=-H*.08}}n.cabelo==="coque"&&l(y,new ie(.12,24,16),A,[0,.3,-.12]);for(let I=-2;I<=2;I++)l(y,new ie(.075,16,12),A,[I*.07,.2-Math.abs(I)*.025,.2-Math.abs(I)*.02],.008).scale.set(1,.8,.7)}else if(n.cabelo==="careca")for(let I of[-1,1])for(let N=0;N<4;N++){let H=-.6-N*.35;l(y,new ie(.07,14,10),A,[I*Math.cos(H)*Ne*.93*(N<3?1:.9),-.02,Math.sin(H)*Ne*.93+.12],.008).scale.set(1,1.2,1)}if(n.cabelo==="topete"){l(y,new ie(Ne*1.03,40,28,0,Math.PI*2,0,1.45),A,[0,.03,-.05]),l(y,new ie(Ne*1.035,48,32,Math.PI+.18,Math.PI-.36,0,2.3),A,[0,0,0],.008);for(let N=0;N<5;N++)l(y,new di(.085,.22,10),A,[(N-2)*.075,.27-Math.abs(N-2)*.02,.12-Math.abs(N-2)*.02],.008).rotation.set(1.05,0,-(N-2)*.22);l(y,new ie(.16,18,12),A,[0,.26,.05],.008).scale.set(1.2,.6,1.1)}else if(n.cabelo==="curto")l(y,new ie(Ne*1.025,40,28,0,Math.PI*2,0,1.3),A,[0,.025,-.03]),l(y,new ie(Ne*1.03,48,32,Math.PI+.18,Math.PI-.36,0,2.25),n.corCabelo2||A,[0,0,0],.008);else if(n.cabelo==="chanel"){l(y,new ie(Ne*1.06,40,28),A,[0,.05,-.07]);for(let N of[-1,1])l(y,new ie(.2,20,14),A,[N*.25,-.12,-.06]).scale.set(.55,1.15,1);l(y,new ie(.26,24,14),A,[0,.19,.12],.008).scale.set(1.05,.42,.6)}else if(n.cabelo==="afro"&&(l(y,new ie(Ne*1.32,40,28),A,[0,.14,-.1]).scale.set(1.08,1,1),n.faixa)){let N=l(y,new je(Ne*1.02,.035,10,40),n.faixa,[0,.1,0],.006);N.rotation.x=Math.PI/2-.25}if(n.brincos)for(let I of[-1,1])l(d,new ie(.03,12,10),n.brincos,[I*Ne*1,Ne*.62,.02],.005);if(n.bone){let I=l(y,new ie(Ne*1.05,32,16,0,Math.PI*2,0,1.25),n.bone,[0,.03,-.01]),N=l(y,Cs(.36,.03,.22,.012),n.bone,[0,.12,n.boneTras?-.32:.3])}let C=I=>{let N=new Q;N.position.set(I*.185,.3,0),a.add(N);let H=n.manga==="regata",q=H||(n.manga||"curta")==="curta";H?l(N,ss(.06,.17),t,[0,-.1,0]):l(N,ss(q?.064:.058,q?.07:.17),e,[0,q?-.055:-.1,0]),q&&!H&&l(N,ss(.05,.15),t,[0,-.11,0]);let z=new Q;z.position.y=-.21,N.add(z),l(z,ss(.048,.14),q?t:e,[0,-.085,0]);let K=new Q;K.position.y=-.2,z.add(K);let ct=new ie(.062,20,14);return l(K,ct,n.luva||t,[0,-.01,0]).scale.set(.85,1.05,.8),l(K,new ie(.026,12,10),n.luva||t,[-I*.045,.02,.03],.007),n.forte&&(N.children.forEach(Ht=>Ht.isMesh&&Ht.scale.set(n.forte,1,n.forte)),z.children.forEach(Ht=>Ht.isMesh&&Ht.scale.set(n.forte*.92,1,n.forte*.92))),{sh:N,el:z,hand:K}},x=C(1),w=C(-1),F=I=>{let N=new Q;N.position.set(I*.085,.52,0),o.add(N),l(N,ss(.07,.17),n.saia?t:i,[0,-.11,0]);let H=new Q;H.position.y=-.22,N.add(H),l(H,ss(.063,.16),n.meia||(n.saia?t:i),[0,-.1,0]);let q=new Q;q.position.y=-.22,H.add(q);let z=l(q,Cs(.13,.095,.23,.045),s,[0,-.037,.035]);return n.sola!==!1&&l(q,Cs(.135,.03,.235,.014),n.sola||"#FFFFFF",[0,-.075,.035],.006),{hp:N,kn:H,an:q}},T=F(1),M=F(-1),P=wa(.36,.4);P.position.y=.006,r.add(P),n.escala&&r.scale.setScalar(n.escala),y.traverse(I=>{I.isMesh&&(I.castShadow=!1)});let W={look:[0,0],key:""},O={root:r,pelvis:o,torsoG:a,headG:d,head:f,hair:y,torso:u,hands:{L:x.hand,R:w.hand},arms:{L:x,R:w},legs:{L:T,R:M},sombra:P,place(I,N,H=0,q=0){return r.position.set(I,H,N),r.rotation.y=q,O},pose(I={}){o.position.y=I.bob||0,o.position.z=I.dz||0,a.rotation.set((I.lean||0)*Tn,(I.twist||0)*Tn,(I.tilt||0)*Tn),d.rotation.set((I.headX||0)*Tn,(I.headY||0)*Tn,(I.headZ||0)*Tn);let N=(q,z,K,ct)=>{q.sh.rotation.set(-(z[0]||0)*Tn,(z[2]||0)*Tn*ct,ct*(z[1]??8)*Tn),q.el.rotation.set(-(K||0)*Tn,0,0)};N(x,I.shL||[0,8],I.elL??8,1),N(w,I.shR||[0,8],I.elR??8,-1);let H=(q,z,K,ct)=>{q.hp.rotation.set(-(z[0]||0)*Tn,0,ct*(z[1]||0)*Tn),q.kn.rotation.set((K||0)*Tn,0,0),q.an.rotation.set(-(z[0]||0)*Tn*0+(K||0)*Tn*-.4*(z[2]??1),0,0)};return H(T,I.hipL||[0,0],I.knL||0,1),H(M,I.hipR||[0,0],I.knR||0,-1),O},face(I={}){let N=I.look||[0,0],H=I.mouth||{},q=(K,ct=20)=>Math.round((K||0)*ct),z=[I.emo,q(I.blink,10),q(N[0],8),q(N[1],8),q(H.open,12),q(H.round,6),H.smile===void 0?"u":q(H.smile,8),q(I.brow,6),I.lagrima?1:0,I.olhosAbertos?1:0].join("|");return z!==W.key&&(W.key=z,Qg(E,{...n.rosto,...I,pele:t,oculos:n.oculos,rugas:n.rugas,oculosEscuros:n.oculosEscuros,bigode:n.bigode,barba:n.barba,olheiras:n.olheiras,sardas:n.sardas,nariz:n.nariz,cilios:n.cilios,sobr:n.sobr,sobrW:n.sobrW,banguela:n.banguela},N),m.needsUpdate=!0),O},faceTo(I,N){return r.rotation.y=Math.atan2(I-r.position.x,N-r.position.z),O},hold(I,N="R"){return O.hands[N].add(I),I}};return O.estatua=(I="#A9A49C")=>{O.congelado=!0;let N=Me(I);return r.traverse(H=>{H.isMesh&&!H.userData.isOutline&&H!==P&&H!==b&&(H.material=N)}),p.color.set("#B8B4AC"),O},O.pose({}),O.face({}),O}function Ca(n,t=1.8,e=1,i=0){let s=(n*t+i)*Math.PI*2,r=Math.sin(s),o=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.025*e-.012,lean:4*e,twist:r*4*e,hipL:[28*r*e,0],hipR:[-28*r*e,0],knL:Math.max(0,-o)*45*e+5,knR:Math.max(0,o)*45*e+5,shL:[-24*r*e,7],shR:[24*r*e,7],elL:18+Math.max(0,-r)*18,elR:18+Math.max(0,r)*18,headX:-2}}function Fa(n,t=2.9,e=1,i=0){let s=(n*t+i)*Math.PI*2,r=Math.sin(s),o=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.06*e-.02,lean:16*e,twist:r*7*e,hipL:[50*r*e+8,0],hipR:[-50*r*e+8,0],knL:(Math.max(0,-o)*85+18)*e,knR:(Math.max(0,o)*85+18)*e,shL:[-45*r*e,10],shR:[45*r*e,10],elL:85,elR:85,headX:-10*e}}var Ot=(n={})=>({bob:-.17,dz:-.02,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shL:[12,8],shR:[12,8],elL:30,elR:30,...n});function Xu(n,t=0){let e=3.1+t%5*.37,i=(n+t*.77)%e/e*e;return i<.07?i/.07:i<.14?1-(i-.07)/.07:0}var Pa={total:747,segs:[{quem:"n",pensa:!1,start:0,end:85.48,a:0,b:282},{quem:"davi",pensa:!1,start:85.48,end:87.32,a:283,b:287},{quem:"gui",pensa:!1,start:87.32,end:88.52,a:288,b:289},{quem:"davi",pensa:!1,start:88.52,end:90.24,a:290,b:294},{quem:"gui",pensa:!1,start:90.24,end:92.04,a:295,b:297},{quem:"n",pensa:!1,start:92.04,end:103.48,a:298,b:332},{quem:"mae",pensa:!1,start:103.48,end:105.84,a:333,b:339},{quem:"gui",pensa:!1,start:105.84,end:106.88,a:340,b:341},{quem:"mae",pensa:!1,start:106.88,end:108.28,a:342,b:346},{quem:"gui",pensa:!1,start:108.28,end:110.56,a:347,b:350},{quem:"mae",pensa:!1,start:110.56,end:114.32,a:351,b:360},{quem:"n",pensa:!1,start:114.32,end:156.76,a:361,b:478},{quem:"mae",pensa:!1,start:156.76,end:158.44,a:479,b:482},{quem:"gui",pensa:!1,start:158.44,end:160.56,a:483,b:488},{quem:"n",pensa:!1,start:160.56,end:180.24,a:489,b:544},{quem:"prof",pensa:!1,start:180.24,end:182.96,a:545,b:549},{quem:"tiago",pensa:!1,start:182.96,end:184.96,a:550,b:554},{quem:"n",pensa:!1,start:184.96,end:210.56,a:555,b:624},{quem:"tiago",pensa:!1,start:210.978,end:212.478,a:625,b:628},{quem:"gui",pensa:!1,start:212.478,end:215.478,a:629,b:634},{quem:"n",pensa:!1,start:215.478,end:249.678,a:635,b:742},{quem:"tiago",pensa:!1,start:249.678,end:251.878,a:743,b:748},{quem:"gui",pensa:!1,start:251.878,end:253.778,a:749,b:751},{quem:"n",pensa:!1,start:253.778,end:266.877,a:752,b:792},{quem:"mae",pensa:!1,start:266.877,end:269.178,a:793,b:795},{quem:"n",pensa:!1,start:269.178,end:325.978,a:796,b:953},{quem:"davi",pensa:!1,start:326.109,end:327.555,a:954,b:955},{quem:"gui",pensa:!1,start:327.687,end:330.577,a:956,b:960},{quem:"n",pensa:!1,start:330.577,end:356.278,a:961,b:1043},{quem:"davi",pensa:!1,start:356.433,end:358.909,a:1044,b:1047},{quem:"gui",pensa:!1,start:359.065,end:361.077,a:1048,b:1050},{quem:"n",pensa:!1,start:361.077,end:388.478,a:1051,b:1124},{quem:"caio",pensa:!1,start:388.582,end:391.279,a:1125,b:1129},{quem:"n",pensa:!1,start:391.384,end:398.978,a:1130,b:1153},{quem:"pef",pensa:!1,start:399.047,end:403.338,a:1154,b:1164},{quem:"n",pensa:!1,start:403.643,end:430.491,a:1165,b:1243},{quem:"cic",pensa:!1,start:430.491,end:431.474,a:1244,b:1246},{quem:"n",pensa:!1,start:431.474,end:467.679,a:1247,b:1346},{quem:"tiago",pensa:!1,start:467.679,end:471.963,a:1347,b:1359},{quem:"mae",pensa:!1,start:472.843,end:475.863,a:1360,b:1368},{quem:"gui",pensa:!1,start:475.863,end:477.529,a:1369,b:1373},{quem:"n",pensa:!1,start:477.529,end:500.083,a:1374,b:1438},{quem:"mae",pensa:!1,start:500.323,end:510.643,a:1439,b:1473},{quem:"gui",pensa:!1,start:510.643,end:512.058,a:1474,b:1476},{quem:"n",pensa:!1,start:512.058,end:530.123,a:1477,b:1520},{quem:"n",pensa:!1,start:530.803,end:548.243,a:1521,b:1565},{quem:"juiz",pensa:!1,start:548.643,end:549.468,a:1566,b:1567},{quem:"n",pensa:!1,start:549.468,end:579.01,a:1568,b:1650},{quem:"gui",pensa:!1,start:579.01,end:580.233,a:1651,b:1651},{quem:"n",pensa:!1,start:580.243,end:591.283,a:1652,b:1682},{quem:"n",pensa:!1,start:591.923,end:620.483,a:1683,b:1769},{quem:"gui",pensa:!1,start:620.963,end:622.963,a:1770,b:1772},{quem:"davi",pensa:!1,start:623.363,end:625.123,a:1773,b:1777},{quem:"n",pensa:!1,start:625.123,end:646.163,a:1778,b:1834},{quem:"gui",pensa:!1,start:646.563,end:648.003,a:1835,b:1838},{quem:"davi",pensa:!1,start:648.003,end:650.003,a:1839,b:1843},{quem:"gui",pensa:!1,start:650.323,end:652.323,a:1844,b:1848},{quem:"n",pensa:!1,start:652.483,end:674.163,a:1849,b:1917},{quem:"davi",pensa:!1,start:674.563,end:678.083,a:1918,b:1929},{quem:"davi",pensa:!1,start:678.723,end:680.723,a:1930,b:1937},{quem:"n",pensa:!1,start:680.723,end:693.123,a:1938,b:1974},{quem:"gui",pensa:!1,start:693.523,end:695.523,a:1975,b:1982},{quem:"davi",pensa:!1,start:696.643,end:699.523,a:1983,b:1993},{quem:"n",pensa:!1,start:699.923,end:706.563,a:1994,b:2013},{quem:"n",pensa:!1,start:707.283,end:729.363,a:2014,b:2075},{quem:"n",pensa:!1,start:730.083,end:744.681,a:2076,b:2121}],falas:[{quem:"davi",start:85.4,end:87.433,boca:[0,0,0,0,.17,.54,.78,.88,.97,1,.98,.92,.81,.69,.62,.66,.79,.93,.99,.96,.86,.79,.78,.68,.4,0,0,.22,.67,.93,.91,.87,.86,.83,.82,.82,.75,.7,.81,.9,.88,.83,.85,.9,.9,.86,.83,.83,.84,.86,.87,.85,.78,.66,.51,.32,0,0,.33,.59,.52],round:[0,0,0,0,0,1,.84,0,.67,.93,.59,.58,.77,.61,.97,1,0,.42,.85,.71,.22,.46,.91,1,1,0,0,0,0,.27,.76,.44,.63,1,1,.77,.64,1,.41,.3,.78,0,0,.89,.76,.7,.34,.64,.91,1,1,.93,1,1,1,1,0,0,.96,1,1]},{quem:"gui",start:87.267,end:88.633,boca:[0,0,.32,.57,.73,.84,.85,.64,.29,.25,.61,.87,.93,.96,.99,1,1,1,.98,.9,.79,.77,.86,.87,.78,.7,.71,.75,.73,.68,.64,.62,.56,.4,.2,0,0,0,.18,.58,.64],round:[0,0,.96,1,1,.92,.96,1,0,0,.81,.99,.96,.93,.94,.98,.88,.9,.94,.82,0,.52,1,1,1,.87,1,1,1,1,1,1,1,.76,0,0,0,0,0,0,0]},{quem:"davi",start:88.467,end:90.367,boca:[0,0,0,.45,.85,.9,.67,.57,.67,.55,.18,0,.37,.62,.52,.23,.27,.58,.77,.7,.57,.57,.62,.63,.6,.6,.62,.65,.71,.76,.71,.66,.79,.9,.69,.28,.16,.46,.73,.73,.65,.44,.17,.24,.62,.89,.84,.66,.58,.58,.49,.3,0,0,.29,.61,.65],round:[0,0,0,0,0,.44,.39,.49,.42,.51,0,0,.23,.91,.74,0,0,.01,0,0,.65,.96,.96,1,1,1,1,.96,.97,.97,1,1,.91,1,.85,0,0,0,.7,.44,0,0,0,0,.92,.81,.68,.57,.46,.3,.29,0,0,0,0,1,.76]},{quem:"gui",start:90.167,end:92.167,boca:[.43,.47,.44,.57,.76,.91,.93,.71,.36,0,.22,.67,.93,.97,.99,1,1,.99,.97,.93,.86,.75,.66,.62,.6,.56,.46,.41,.54,.7,.75,.75,.81,.79,.68,.57,.57,.7,.79,.79,.79,.79,.77,.77,.78,.77,.74,.63,.41,.14,0,0,0,0,0,0,0,.23,.41,.34],round:[.21,.18,.77,1,1,.76,.9,1,1,0,0,1,.92,.86,.77,.89,.92,.87,.94,.81,.87,.33,0,0,0,0,0,0,.77,1,1,.22,.89,1,0,0,0,.94,.93,.92,1,.79,.97,.77,.85,1,.97,1,.95,0,0,0,0,0,0,0,0,0,1,1]},{quem:"mae",start:103.4,end:105.967,boca:[0,0,0,0,.16,.49,.68,.75,.81,.83,.86,.93,.97,.99,1,.98,.93,.88,.86,.88,.9,.88,.83,.76,.7,.62,.47,.25,0,0,0,0,.12,.4,.64,.75,.79,.78,.8,.88,.94,.96,.99,.93,.8,.78,.87,.93,.95,.84,.62,.64,.82,.82,.64,.6,.74,.9,.92,.9,.89,.89,.86,.86,.89,.9,.86,.76,.63,.42,.17,0,0,0,.17,.57,.61],round:[0,0,0,0,0,.89,.99,.89,.76,.96,.87,.65,.53,.51,.48,.46,.87,1,1,1,.99,.99,1,.99,1,1,1,0,0,0,0,0,0,1,1,.92,0,0,0,.66,.82,1,1,1,.49,.16,.86,.83,.98,1,1,.11,1,.97,0,0,.65,.86,.8,.95,.88,.47,.82,.79,.7,.91,.98,1,1,1,0,0,0,0,0,.64,1]},{quem:"gui",start:105.767,end:107,boca:[.14,.15,0,.19,.55,.8,.87,.92,.95,.94,.91,.9,.95,.99,1,.99,.98,.97,.98,.98,.96,.92,.89,.87,.8,.66,.45,.23,0,0,0,0,0,0,.19,.57,.58],round:[0,0,0,0,.64,1,1,1,1,1,.79,.36,.96,.89,.89,.98,.96,1,1,1,1,1,1,.88,1,1,.32,0,0,0,0,0,0,0,0,.99,1]},{quem:"mae",start:106.8,end:108.4,boca:[0,0,0,.2,.62,.86,.82,.56,.35,.56,.86,.95,.95,.96,.98,.96,.73,.36,.29,.51,.73,.9,.99,.93,.75,.59,.63,.83,.96,.95,.93,.94,.93,.88,.79,.7,.63,.58,.41,.18,0,0,0,0,.14,.44,.67,.56],round:[0,0,0,0,.99,1,1,.85,.61,0,.92,.87,.9,1,1,1,1,.98,0,0,0,.11,1,1,.57,0,0,.94,.91,.97,1,.93,.62,.77,.82,.83,.77,1,.98,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:108.2,end:110.667,boca:[0,0,.15,.47,.7,.8,.87,.89,.88,.86,.8,.7,.58,.36,0,0,0,0,0,0,0,0,.29,.58,.72,.76,.85,.92,.93,.92,.94,.93,.84,.56,.42,.73,.98,1,1,1,1,.99,.97,.93,.89,.84,.74,.56,.31,0,0,.2,.45,.64,.72,.74,.73,.72,.7,.68,.65,.61,.58,.58,.56,.51,.45,.41,.4,.38,.35,.32,.25,.12],round:[0,0,0,0,0,0,1,.93,.97,.87,.98,.57,.91,0,0,0,0,0,0,0,0,0,0,0,0,0,.16,.85,.82,.71,.9,.92,1,.96,.07,.84,1,1,.98,.96,1,.99,1,1,.99,.95,.95,.93,.89,0,0,0,.09,0,0,0,0,.01,.34,.41,.42,.53,.39,.74,.87,.55,.42,.31,.22,.19,0,.15,0,0]},{quem:"mae",start:110.5,end:114.433,boca:[0,0,0,0,0,.27,.49,.68,.77,.73,.62,.62,.78,.91,.92,.91,.86,.77,.6,.43,.53,.77,.78,.51,.26,.4,.68,.78,.71,.62,.64,.69,.79,.93,.99,1,.99,.98,.98,.95,.9,.87,.75,.57,.5,.47,.46,.6,.8,.89,.86,.77,.71,.75,.79,.75,.68,.6,.45,.23,0,0,0,0,.25,.62,.74,.61,.62,.83,.94,.93,.92,.9,.72,.35,0,0,.19,.64,.94,1,.97,.95,.98,1,.97,.88,.78,.72,.65,.71,.88,.94,.92,.93,.9,.82,.74,.75,.84,.82,.64,.47,.41,.44,.47,.46,.42,.29,0,0,0,0,0,.16,.56,.64],round:[0,0,0,0,0,0,0,0,.97,1,1,1,.59,.86,.82,.8,.87,.23,0,0,0,.94,.94,.88,0,0,.72,.88,1,1,1,1,.97,1,1,1,.97,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,.91,.98,0,0,.99,.84,.96,.96,.82,1,.99,0,0,0,0,.92,.91,.85,.76,1,1,1,.48,.01,.4,.86,.92,.97,.94,.8,1,1,.98,.61,.46,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,.13,.85]},{quem:"mae",start:156.7,end:158.567,boca:[0,0,0,.23,.5,.67,.76,.68,.44,.39,.63,.89,.93,.71,.37,.16,.21,.54,.82,.89,.91,.88,.82,.8,.77,.77,.87,.91,.84,.82,.89,.97,1,.98,.95,.88,.8,.77,.77,.75,.76,.79,.78,.77,.73,.57,.33,.14,0,0,0,0,0,0,.21,.42],round:[0,0,0,0,0,0,.13,.96,.96,.81,0,.94,.84,.77,.91,0,0,0,.89,.79,.96,.86,0,0,0,0,.62,.69,.74,.73,.88,.72,.71,.96,.95,1,0,0,0,0,0,.99,.92,1,1,1,.74,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:158.367,end:160.667,boca:[0,0,0,0,.22,.59,.81,.85,.85,.86,.9,.91,.88,.88,.93,.96,.98,.99,1,1,.97,.82,.57,.34,.16,0,0,0,0,0,0,.17,.49,.68,.74,.8,.83,.84,.81,.8,.85,.81,.75,.83,.87,.79,.78,.86,.91,.91,.9,.94,.98,.99,.96,.92,.89,.86,.84,.77,.61,.37,.13,0,0,0,0,0,.14],round:[0,0,0,0,0,0,0,0,0,0,0,.94,.81,.87,1,.91,.78,.82,.74,.92,1,.91,0,0,0,0,0,0,0,0,0,0,1,1,.97,1,1,.93,0,0,.93,1,.66,.67,.88,0,0,.47,.89,.89,.62,.52,.97,1,1,1,1,1,1,1,1,.71,0,0,0,0,0,0,0]},{quem:"prof",start:180.167,end:183.067,boca:[0,0,0,.19,.6,.85,.85,.84,.86,.83,.84,.9,.89,.79,.71,.76,.89,.96,.87,.54,.17,.22,.65,.94,.99,.99,.99,.98,.93,.86,.88,.92,.89,.82,.79,.82,.86,.82,.73,.63,.55,.58,.66,.66,.56,.4,.24,0,0,0,0,.31,.49,.62,.8,.92,.92,.89,.86,.8,.78,.87,.87,.59,.23,0,.17,.57,.9,.99,1,.94,.82,.79,.89,.92,.75,.53,.36,.2,0,0,0,0,0,.23,.28],round:[0,0,0,0,0,1,.67,.64,.64,.38,0,1,.94,0,0,0,.59,1,1,.72,0,0,.37,1,.97,.87,.84,.91,.9,0,0,.82,.86,.59,.01,.4,.85,.64,.67,.71,.75,0,0,0,.73,0,0,0,0,0,0,1,1,.86,.55,.91,.27,.41,.89,1,.74,.67,.92,.32,0,0,0,0,.55,1,1,1,1,1,.86,1,.87,.69,.78,0,0,0,0,0,0,0,0]},{quem:"tiago",start:182.9,end:185.067,boca:[0,0,.16,.52,.79,.91,.97,.98,.97,.96,.91,.85,.85,.86,.81,.75,.67,.51,.27,0,0,0,.17,.53,.79,.89,.95,.94,.85,.76,.71,.79,.92,.91,.85,.87,.91,.91,.87,.86,.87,.89,.9,.9,.92,.93,.94,.98,.99,.99,1,1,1,.99,.94,.82,.67,.46,.2,0,0,0,.12,.44,.51],round:[0,0,0,.55,.88,.87,.61,.41,.36,.22,0,.56,.65,.58,.28,.14,.6,.71,0,0,0,0,0,.26,.21,0,0,0,0,0,.08,.26,0,.04,0,0,.14,0,.14,.91,.97,.15,0,.04,.07,.44,.27,.06,0,0,0,0,0,0,.04,0,.16,.27,0,0,0,0,0,0,0]},{quem:"tiago",start:210.9,end:212.6,boca:[0,0,0,.17,.38,.48,.47,.42,.36,.36,.44,.47,.49,.68,.91,.91,.62,.44,.56,.71,.87,.99,.93,.8,.71,.74,.86,.93,.91,.88,.84,.87,.92,.92,.93,.95,.95,.92,.87,.83,.77,.71,.57,.32,0,0,0,0,0,.3,.41],round:[0,0,0,0,0,0,0,0,0,0,0,.84,0,0,.64,1,.99,.71,0,.08,.39,.78,.92,1,1,1,.97,.66,.77,.92,.68,.85,1,1,.94,.99,.79,.9,.94,.97,.91,.98,1,1,0,0,0,0,0,0,0]},{quem:"gui",start:212.4,end:215.6,boca:[0,0,0,0,.29,.58,.73,.78,.85,.91,.92,.91,.93,.94,.86,.77,.79,.85,.83,.75,.6,.42,.29,.22,.12,0,0,0,0,0,.3,.66,.79,.75,.76,.82,.7,.46,.5,.74,.87,.85,.77,.72,.71,.7,.71,.75,.84,.89,.89,.89,.91,.94,.95,.94,.87,.77,.68,.65,.68,.79,.94,1,1,.98,.96,.95,.97,.98,1,.99,.93,.83,.75,.71,.73,.82,.92,.96,.89,.78,.74,.81,.86,.83,.76,.6,.35,0,0,0,0,0,0,0],round:[0,0,0,0,0,0,0,0,.07,.98,.92,1,1,1,1,1,1,1,1,1,.84,0,0,0,0,0,0,0,0,0,.17,.78,0,0,0,0,1,.81,.22,.54,1,.81,0,0,0,0,0,0,1,1,.87,.91,1,1,1,1,1,1,1,1,1,.74,.99,1,1,.96,1,1,1,1,.99,.96,1,.51,.03,0,0,.34,1,1,.99,1,1,.62,.98,.97,1,1,.89,0,0,0,0,0,0,0]},{quem:"tiago",start:249.6,end:252,boca:[.15,0,0,0,0,0,.23,.7,.95,.92,.89,.93,.93,.78,.56,.56,.78,.95,.98,.95,.87,.78,.78,.8,.76,.67,.54,.36,.16,0,0,0,.38,.75,.94,.9,.75,.72,.84,.91,.93,.93,.91,.91,.92,.94,.92,.85,.81,.82,.88,.92,.88,.86,.88,.92,.96,.99,.98,.93,.9,.9,.89,.88,.81,.7,.57,.37,.16,0,0,0],round:[0,0,0,0,0,0,0,.51,.79,.86,.66,.73,.72,.96,.85,.63,.11,.96,1,1,.89,1,.88,.94,.96,1,1,1,0,0,0,0,.36,0,.97,.83,1,.95,.76,.87,.89,1,1,.91,.99,.89,0,0,0,0,.39,1,1,1,.99,1,1,1,.87,.75,.46,.67,.71,.74,.89,.74,.81,.86,0,0,0,0]},{quem:"gui",start:251.8,end:253.9,boca:[.34,.27,0,0,0,0,.23,.69,.85,.67,.54,.49,.58,.82,.77,.47,.4,.63,.79,.6,.25,0,.18,.39,.53,.58,.64,.75,.65,.38,.43,.71,.89,.95,.98,.98,.95,.92,.95,.98,.95,.82,.51,.31,.55,.87,.97,.99,.98,.97,.96,.94,.88,.79,.75,.76,.74,.63,.44,.22,0,0,0],round:[.81,0,0,0,0,0,0,.61,.66,0,0,0,0,1,.44,0,0,.28,1,.15,0,0,0,0,0,0,0,.84,1,.86,0,1,1,.99,.84,.87,.93,.31,.81,.7,.74,.89,1,.16,0,.74,.58,.77,.81,.87,1,1,1,.71,0,.41,1,1,1,0,0,0,0]},{quem:"mae",start:266.8,end:269.3,boca:[0,0,0,0,0,0,.35,.57,.7,.76,.76,.74,.78,.88,.96,.99,1,1,1,.95,.89,.87,.87,.87,.87,.87,.88,.88,.9,.92,.94,.91,.81,.59,.3,0,0,0,0,.16,.5,.82,.94,.92,.85,.78,.7,.66,.68,.78,.88,.91,.93,.95,.95,.93,.9,.86,.7,.38,.33,.68,.92,.93,.86,.78,.71,.63,.52,.37,.19,0,0,0,0],round:[0,0,0,0,0,0,.96,.94,.9,.68,.89,.36,.52,.44,.37,.41,.47,.54,.42,.56,.87,1,1,1,.67,.53,.38,.36,.3,.14,.12,.38,1,.96,.49,0,0,0,0,0,.59,.54,.59,.53,.67,1,0,0,0,.31,.6,.46,.51,.61,.56,.64,.67,.99,1,.94,.71,.51,.53,.57,.61,.66,.7,.79,.98,.83,0,0,0,0,0]},{quem:"davi",start:326.033,end:327.667,boca:[.46,.6,.57,.59,.74,.91,.97,.91,.74,.64,.76,.78,.47,.26,.51,.84,.95,.98,.99,.96,.88,.72,.61,.71,.86,.88,.76,.55,.29,0,0,0,0,0,0,0,0,.15,.26,.43,.66,.78,.8,.83,.84,.81,.77,.71,.5],round:[.51,.44,0,0,0,.47,1,1,1,.89,.89,1,1,0,.34,1,1,1,1,.95,.63,.66,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,.6,.96,.99,.96,1,1,.96,.95,.74,.46]},{quem:"gui",start:327.633,end:330.7,boca:[.52,.63,.56,.52,.49,.44,.37,.29,.25,.19,0,0,0,0,0,0,0,0,.24,.43,.57,.7,.85,.92,.93,.97,1,1,.98,.97,.98,1,.98,.95,.88,.71,.48,.32,.23,.14,0,0,0,.15,.45,.62,.64,.66,.67,.69,.7,.67,.61,.57,.56,.56,.56,.54,.52,.53,.53,.54,.58,.62,.66,.69,.71,.66,.53,.54,.68,.65,.43,.32,.41,.6,.79,.84,.79,.74,.71,.66,.47,.16,0,0,0,0,0,0,0,.17],round:[.46,.05,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,.9,.82,.84,.74,.81,.7,.87,.89,.97,1,1,1,1,.91,0,0,0,0,0,0,0,0,1,1,1,.81,.83,.87,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,.99,1,1,1,1,1,1,.81,0,0,0,.99,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0]},{quem:"davi",start:356.367,end:359.033,boca:[.53,.74,.81,.93,.98,.95,.88,.83,.78,.69,.59,.6,.76,.86,.85,.86,.9,.87,.81,.73,.55,.32,.12,0,0,.19,.62,.9,.95,.98,.94,.83,.79,.84,.89,.89,.9,.89,.83,.76,.77,.83,.86,.87,.88,.88,.82,.72,.58,.34,0,0,0,0,0,0,0,0,0,0,.25,.75,.86,.47,0,.18,.56,.78,.77,.73,.73,.72,.71,.75,.86,.87,.77,.83,.93,.69],round:[.97,1,0,.82,.81,.56,.24,.16,.81,.99,1,.78,.37,.62,.5,.49,.88,.94,1,1,.99,1,0,0,0,0,1,1,.53,.94,.84,.43,.64,.68,.9,.47,0,0,.34,0,0,0,0,.57,.67,1,.99,1,1,1,0,0,0,0,0,0,0,0,0,0,0,.76,1,0,0,0,.34,1,1,.94,.9,.85,.72,.57,.79,1,.97,.76,1,1]},{quem:"gui",start:359,end:361.2,boca:[.71,.98,.97,.91,.76,.46,.26,.4,.52,.51,.52,.57,.63,.51,.22,0,.26,.39,.44,.52,.71,.88,.95,.92,.84,.78,.75,.79,.91,.99,.99,.97,.95,.95,.96,.96,.96,.97,.99,1,.98,.89,.82,.83,.85,.84,.79,.73,.72,.78,.8,.77,.71,.59,.36,0,0,0,0,0,0,0,0,0,.17,.14],round:[1,.87,1,.96,.97,1,0,.28,.27,0,0,.08,.74,1,0,0,0,0,0,0,.51,.95,.84,.92,1,1,1,.94,1,1,.98,.96,1,.96,.82,.74,.89,.74,.56,.64,.69,.66,0,0,0,0,0,0,0,.69,1,1,1,1,.49,0,0,0,0,0,0,0,0,0,0,0]},{quem:"caio",start:388.5,end:391.4,boca:[0,.3,.68,.87,.73,.6,.77,.93,.96,.97,.96,.95,.98,1,.99,.96,.91,.91,.95,.97,.98,.99,.95,.84,.79,.85,.93,.93,.81,.6,.36,.14,0,0,0,0,0,0,0,0,.15,.45,.64,.7,.7,.65,.63,.67,.69,.69,.76,.83,.85,.87,.84,.69,.68,.86,.94,.94,.95,.94,.93,.76,.45,.42,.71,.9,.84,.75,.75,.75,.7,.62,.45,.19,0,0,0,0,.36,.58,.75,.88,.92,.87,.61],round:[0,0,.97,.94,1,.53,.93,.97,.84,1,1,1,.94,.97,.99,1,1,1,1,1,.84,.87,.76,.42,0,.16,.89,.91,1,.84,.79,0,0,0,0,0,0,0,0,0,0,1,1,.86,.75,.56,.77,0,0,0,0,.86,.82,.71,.89,.37,0,.8,.89,.65,.29,.71,.76,.97,1,0,0,1,.99,1,1,1,1,1,1,0,0,0,0,0,0,0,0,.97,.91,.68,.17]},{quem:"pef",start:398.967,end:403.467,boca:[0,0,0,.14,.5,.83,.97,.99,1,1,.99,.96,.88,.79,.74,.75,.72,.59,.41,.25,0,0,0,0,0,0,0,.27,.75,.98,.94,.85,.79,.88,.97,.92,.84,.88,.97,.98,.94,.92,.95,.95,.85,.71,.73,.83,.83,.73,.63,.71,.88,.9,.84,.87,.95,.97,.96,.94,.92,.91,.93,.95,.87,.79,.89,.96,.93,.94,.95,.95,.95,.92,.87,.8,.71,.67,.67,.6,.44,.28,.15,0,0,0,0,0,.43,.8,.89,.83,.88,.96,.87,.73,.77,.88,.9,.84,.77,.69,.69,.83,.91,.86,.75,.74,.88,.97,.95,.94,.9,.76,.6,.55,.6,.74,.91,.95,.91,.87,.79,.65,.54,.45,.4,.31,.13,0,0,0,0,0,0],round:[0,0,0,0,.96,.64,1,1,1,.95,.87,.78,.47,.11,.92,1,.7,0,0,0,0,0,0,0,0,0,0,0,.6,.97,1,.71,.14,0,1,1,.92,1,1,.99,.94,1,.82,.78,.91,.97,0,.82,.19,0,0,0,.97,.94,1,1,1,1,.98,.89,.97,1,1,1,1,1,.84,1,1,1,1,.92,.92,.87,.81,.97,.94,.84,1,.86,.74,0,0,0,0,0,0,0,.82,1,.68,0,.41,1,1,.86,0,.04,.81,.01,0,0,0,.57,.95,.81,.43,0,.72,.9,.89,.88,.87,.89,1,1,1,.29,.91,.91,.87,.73,.68,.57,.6,0,0,.34,0,0,0,0,0,0,0]},{quem:"cic",start:430.433,end:431.6,boca:[.38,.43,.27,0,0,0,0,0,0,.42,.78,.88,.79,.66,.59,.58,.58,.61,.74,.9,.98,.99,.97,.91,.81,.72,.76,.79,.73,.71,.79,.87,.92,.97,.75],round:[1,1,0,0,0,0,0,0,0,0,.75,.65,.65,0,0,0,0,0,0,.33,1,.99,.76,.61,.77,1,.99,.92,1,1,1,1,1,.91,.74]},{quem:"tiago",start:467.6,end:472.067,boca:[.24,.36,.52,.72,.86,.93,.98,1,1,.94,.71,.46,.44,.54,.57,.57,.59,.63,.66,.66,.7,.69,.54,.37,.3,.23,0,0,0,0,0,0,0,.17,.17,.25,.57,.79,.73,.45,.29,.47,.44,.14,.25,.75,.94,.71,.54,.59,.54,.49,.57,.62,.66,.73,.82,.92,.98,.98,.85,.59,.31,.26,.52,.76,.84,.78,.68,.63,.63,.56,.52,.62,.72,.69,.42,.23,.4,.64,.79,.86,.82,.69,.56,.35,0,0,0,0,0,0,0,0,0,.12,.32,.6,.78,.79,.67,.57,.55,.61,.79,.95,.97,.77,.61,.69,.66,.55,.45,.29,.36,.6,.53,.21,.22,.59,.75,.67,.72,.83,.81,.69,.42,.15,0,0,0,0,0,0],round:[0,.86,.91,.79,.76,.64,.7,.68,.67,.75,.72,.01,.01,.49,.71,.59,.63,.69,.67,.64,.58,.6,.62,.53,.76,0,0,0,0,0,0,0,0,0,0,0,.35,.92,.97,.97,0,.78,1,0,0,.79,.74,.84,.98,.86,.92,.2,.51,1,.86,.92,.86,.66,.64,.55,.62,0,0,0,.69,.7,.63,.34,0,.07,.44,.81,.57,0,.47,.66,.67,0,.96,.84,.81,.67,.62,.55,.64,.7,0,0,0,0,0,0,0,0,0,0,1,.99,.82,.77,.42,0,0,0,.81,.81,.71,.64,0,0,.34,.98,.84,0,.42,.82,.75,0,0,.74,.58,.47,.59,.55,.66,.68,.73,0,0,0,0,0,0,0]},{quem:"mae",start:472.767,end:475.967,boca:[.17,.15,0,0,0,0,0,0,0,0,.21,.59,.86,.89,.85,.88,.9,.65,.46,.71,.96,.99,.98,.96,.82,.53,.4,.59,.8,.92,.98,1,.99,.92,.8,.76,.8,.74,.6,.51,.47,.56,.79,.92,.9,.83,.79,.81,.81,.76,.66,.43,.19,0,0,0,0,0,0,.26,.62,.83,.88,.86,.74,.67,.78,.89,.89,.85,.71,.56,.62,.79,.85,.86,.83,.62,.39,.42,.53,.58,.67,.85,.91,.82,.66,.41,.14,0,0,0,0,.17,.59,.67],round:[0,0,0,0,0,0,0,0,0,0,0,.76,.99,0,0,0,1,.97,.93,.49,.87,.68,.95,1,1,.31,.03,0,.64,.84,.81,.9,.91,.86,0,0,1,1,0,0,0,0,.87,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,.97,.98,0,0,.72,.99,1,1,1,.99,.47,.92,.9,.88,1,.99,.66,0,0,0,0,1,1,1,1,.92,0,0,0,0,0,0,.54,1]},{quem:"gui",start:475.8,end:477.633,boca:[0,0,0,.29,.68,.92,.98,1,1,1,1,.98,.92,.83,.75,.63,.41,.18,0,0,0,0,0,0,.35,.54,.66,.71,.71,.7,.69,.68,.68,.7,.76,.76,.75,.74,.54,.35,.55,.72,.66,.65,.73,.8,.84,.87,.88,.88,.86,.86,.86,.82,.58],round:[0,0,0,0,1,1,1,1,1,1,1,1,1,.96,1,.97,.74,0,0,0,0,0,0,0,.81,.89,.79,.22,0,0,0,0,0,0,1,1,1,.89,1,.75,.6,.94,1,1,1,1,1,1,1,1,1,1,1,1,1]},{quem:"mae",start:500.267,end:510.767,boca:[0,0,0,0,0,0,0,.21,.66,.94,.99,.99,.99,.99,.99,.99,1,.99,.99,.98,.99,.99,.99,.91,.75,.61,.52,.6,.84,.97,.98,.95,.93,.91,.88,.77,.63,.6,.65,.58,.4,.47,.78,.97,.99,.99,.98,.91,.76,.67,.77,.92,.98,.93,.87,.88,.81,.58,.39,.44,.7,.86,.88,.9,.93,.97,.99,.98,.95,.95,.94,.91,.9,.9,.89,.85,.81,.74,.55,.37,.49,.81,.96,.92,.9,.89,.8,.76,.85,.84,.76,.83,.89,.83,.7,.58,.63,.77,.82,.77,.68,.52,.25,0,0,0,0,0,0,0,0,0,0,0,.32,.67,.92,.99,.93,.81,.82,.94,.99,.96,.77,.58,.69,.89,.95,.89,.85,.92,.95,.84,.72,.75,.86,.89,.87,.73,.59,.67,.83,.85,.79,.79,.88,.97,1,1,.98,.94,.9,.89,.9,.89,.82,.63,.41,.4,.6,.8,.89,.83,.68,.61,.67,.72,.76,.75,.51,.16,0,.12,.48,.82,.94,.92,.84,.8,.83,.86,.89,.9,.92,.92,.9,.86,.82,.78,.71,.66,.66,.61,.39,0,0,0,0,0,0,0,0,0,0,0,0,0,.14,.52,.84,.92,.76,.49,.5,.69,.84,.92,.96,.98,.98,.98,.98,1,1,1,1,.99,.83,.58,.56,.54,.35,.38,.59,.63,.6,.67,.71,.66,.61,.63,.71,.75,.64,.55,.63,.77,.8,.74,.65,.54,.34,0,0,0,0,0,0,0,0,0,0,0,0,0,.3,.64,.84,.88,.9,.9,.84,.75,.77,.85,.7,.35,.3,.63,.79,.71,.66,.69,.73,.71,.74,.79,.71,.62,.61,.68,.76,.8,.77,.73,.77,.81,.84,.84,.74,.47,.25,.26,.37,.54,.67,.68,.66,.65,.62,.59,.57,.51,.31],round:[0,0,0,0,0,0,0,0,.98,1,1,1,.94,.87,.99,1,.95,.79,.87,.92,.87,.92,.92,1,0,0,.79,1,.74,.85,.88,.79,.71,1,1,1,0,0,0,0,0,0,.95,1,1,1,1,1,1,0,0,.91,.98,.96,1,1,.92,0,0,0,1,1,1,1,1,1,.94,1,1,1,.89,1,1,.97,.96,1,0,0,0,.63,.19,.96,.86,.95,1,.97,1,1,1,1,1,.94,.97,.95,1,.7,.83,1,1,.96,1,1,0,0,0,0,0,0,0,0,0,0,0,0,.9,.68,.98,1,1,.97,.87,.91,.82,.88,.99,1,.41,.99,1,.42,.39,.94,1,1,1,.64,.86,.94,1,1,.54,.98,.79,.89,1,1,1,.9,.78,.81,.82,1,1,.99,1,1,.91,.85,0,0,.11,.99,.97,1,.77,0,.54,1,.89,.89,1,0,0,0,0,1,1,1,1,1,.97,1,1,1,1,1,1,1,1,1,1,.94,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.49,1,.9,.96,.95,0,0,.89,1,1,1,1,1,1,1,1,1,.99,1,1,.87,0,1,.9,0,.25,1,.16,.99,.92,0,0,0,.38,1,1,.8,1,.91,.95,.9,.99,1,.91,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.83,1,1,1,1,1,.88,1,1,.96,.89,.12,1,1,0,0,0,1,1,.97,1,0,0,0,.53,.77,.92,1,1,1,1,1,1,1,.54,0,0,.04,.81,.93,.89,.98,1,1,1,1,1,1]},{quem:"gui",start:510.567,end:512.167,boca:[.48,.63,.61,.6,.57,.42,.19,0,0,0,0,.13,.48,.81,.95,.98,.98,.96,.97,.99,1,1,1,.99,.97,.86,.66,.5,.44,.4,.36,.32,.28,.21,0,0,0,.16,.55,.81,.85,.89,.95,.96,.93,.9,.87,.62],round:[1,1,1,1,1,1,0,0,0,0,0,0,.31,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,.52,1,.97,1,1,.95,0,0,0,0]},{quem:"juiz",start:548.567,end:549.6,boca:[0,0,0,.21,.66,.95,.99,.91,.79,.82,.9,.83,.73,.79,.92,.94,.95,.91,.78,.71,.74,.84,.87,.73,.51,.34,.3,.25,.15,0,0],round:[0,0,0,0,.46,.94,.85,.89,1,1,.99,1,1,.94,1,1,1,.94,0,0,0,.85,.84,.84,.81,.43,0,0,0,0,0]},{quem:"gui",start:578.933,end:580.333,boca:[0,0,0,0,0,0,0,0,.28,.6,.8,.85,.87,.91,.97,.97,.81,.63,.74,.94,1,.99,.98,.97,.93,.87,.75,.66,.73,.79,.75,.66,.54,.45,.35,.2,0,0,0,0,0,.2],round:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,.88,.62,.81,.72,0,.57,1,1,1,.82,.84,.95,1,.42,0,0,0,1,.36,.43,.37,0,0,0,0,0,0,0]},{quem:"gui",start:620.9,end:623.067,boca:[0,0,0,.4,.73,.89,.89,.8,.77,.85,.94,.97,.95,.91,.8,.56,.29,0,0,0,0,0,.15,.14,0,0,0,0,0,0,0,.35,.68,.85,.85,.7,.53,.61,.84,.96,.97,.86,.6,.43,.61,.85,.9,.83,.68,.54,.46,.4,.43,.52,.56,.7,.9,.98,1,1,.98,.94,.84,.56,.17],round:[0,0,0,1,1,.81,.85,.17,0,.82,.96,1,.8,.86,.97,.27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.42,.22,0,0,0,0,0,.91,1,.98,1,1,.56,.22,.93,1,.76,.22,0,0,.07,0,.76,.84,.8,.64,.99,.99,1,1,1,1,.89,0]},{quem:"davi",start:623.3,end:625.233,boca:[0,0,0,.44,.83,.99,.97,.88,.87,.95,.99,.98,.97,.96,.96,.95,.94,.9,.86,.86,.78,.69,.75,.83,.84,.88,.89,.88,.89,.84,.77,.81,.9,.89,.83,.84,.89,.9,.89,.88,.86,.85,.84,.78,.65,.44,.22,0,0,0,0,0,0,0,0,0,0,.21],round:[0,0,0,0,.21,1,1,1,.39,1,1,1,1,1,1,1,1,1,.95,.97,1,.97,.03,.58,.32,1,.99,0,0,0,0,.94,1,1,.72,1,1,1,1,1,1,1,1,1,1,.55,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:646.5,end:648.133,boca:[0,0,0,.13,.5,.86,.99,1,1,.99,.98,.97,.93,.87,.85,.88,.89,.88,.9,.94,.95,.91,.88,.89,.92,.93,.91,.88,.86,.84,.82,.8,.7,.48,.21,0,0,0,0,0,0,.13,.44,.72,.8,.78,.77,.85,.69],round:[0,0,0,0,.78,1,1,1,1,1,1,1,.11,0,0,.97,1,1,1,1,1,.78,0,0,1,1,1,.99,1,1,1,1,1,.9,0,0,0,0,0,0,0,0,0,.74,1,1,1,1,1]},{quem:"davi",start:647.933,end:650.133,boca:[.41,.58,.52,.51,.7,.91,.97,.96,.94,.91,.79,.66,.71,.82,.88,.91,.9,.88,.88,.87,.87,.94,.98,.97,.96,.96,.93,.9,.88,.86,.85,.77,.69,.7,.75,.75,.67,.43,.13,0,0,0,0,0,0,0,0,.14,.46,.78,.95,.99,.89,.68,.64,.82,.93,.83,.73,.78,.89,.89,.85,.78,.52,.16],round:[.74,1,1,1,1,1,1,1,1,1,1,.97,.74,.93,.97,0,0,0,.87,.84,0,.79,1,1,1,1,1,1,.97,1,.99,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.39,0,1,.95,1,1,.33,.49,1,1,1,1,1,1,1,1,1,0]},{quem:"gui",start:650.267,end:652.433,boca:[0,0,0,.15,.53,.84,.94,.96,.92,.89,.89,.9,.95,.97,.94,.95,.97,.94,.91,.92,.92,.92,.93,.97,.99,.99,.97,.94,.9,.74,.46,.19,0,0,0,0,0,0,0,0,0,.31,.65,.9,.88,.75,.79,.93,.98,.98,.99,.98,.94,.89,.89,.91,.91,.88,.8,.64,.43,.22,0,0,0],round:[0,0,0,0,.4,.94,.99,1,0,0,0,0,1,.56,0,.15,1,.89,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,.15,.27,1,1,1,0,.51,1,1,1,1,.72,0,.08,1,1,1,1,.96,.3,0,0,0,0]},{quem:"davi",start:674.5,end:678.2,boca:[0,0,0,.18,.61,.93,.95,.89,.91,.94,.96,.97,.95,.91,.88,.89,.88,.84,.82,.6,.35,.55,.87,.97,.97,.96,.95,.94,.7,.42,.53,.79,.89,.88,.83,.84,.89,.89,.71,.44,.46,.71,.8,.75,.66,.51,.28,0,0,0,0,0,0,0,0,0,0,0,.14,.5,.63,.45,.49,.75,.83,.68,.68,.87,.9,.84,.81,.87,.91,.89,.87,.6,.25,.4,.79,.87,.69,.6,.7,.87,.96,.98,.96,.93,.92,.95,.98,.99,.98,.98,.97,.96,.93,.85,.76,.65,.48,.47,.68,.82,.85,.85,.85,.84,.76,.62,.39],round:[0,0,0,0,0,.31,.92,.91,.96,1,.97,.97,1,1,.73,0,0,0,.26,1,.86,0,.47,1,1,1,.98,.97,1,.89,.36,1,.96,.29,0,.34,1,1,1,1,0,.9,.94,.77,.93,.88,0,0,0,0,0,0,0,0,0,0,0,0,0,.53,.9,1,0,.89,1,0,0,1,.47,0,0,.16,1,1,1,1,0,.42,1,.94,1,.79,0,.42,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.77,0,.15,.8,.52,.9,1,.95,1,1]},{quem:"davi",start:678.667,end:680.833,boca:[0,0,.13,.44,.66,.73,.75,.81,.92,.99,1,1,.99,.93,.85,.85,.91,.97,.99,.99,.88,.74,.74,.81,.85,.89,.94,.96,.95,.94,.93,.97,.99,.98,.95,.94,.95,.84,.69,.73,.89,.98,.98,.96,.95,.94,.92,.9,.88,.81,.64,.34,0,0,0,0,0,0,0,0,.22,.69,.96,.98,.73],round:[0,0,0,0,0,0,0,0,.08,1,1,1,1,1,1,0,0,.52,.91,1,1,.96,0,0,1,.92,1,.47,0,0,0,1,1,1,1,1,1,1,.99,.16,1,1,1,1,1,1,1,1,1,1,1,.95,0,0,0,0,0,0,0,0,0,.86,1,0,0]},{quem:"gui",start:693.467,end:695.633,boca:[0,0,0,0,.2,.65,.93,.93,.86,.79,.72,.68,.68,.69,.71,.72,.77,.91,.99,.95,.79,.56,.4,.45,.65,.79,.86,.93,.92,.83,.77,.59,.33,.4,.56,.54,.62,.74,.72,.68,.71,.69,.64,.71,.89,.91,.69,.52,.67,.81,.76,.74,.83,.94,.98,.97,.99,.95,.74,.37,0,0,0,0,0],round:[0,0,0,0,0,1,1,.97,1,0,0,0,0,0,.87,.97,1,1,1,1,.51,0,0,0,.69,.97,1,.75,.88,0,0,.99,.06,0,1,1,.9,.89,0,0,0,.63,.53,.52,.74,.99,.12,0,0,.83,.83,.88,.89,.72,.82,.89,1,.95,.96,.34,0,0,0,0,0]},{quem:"davi",start:696.567,end:699.633,boca:[0,0,0,.18,.61,.92,.97,.83,.58,.63,.89,.91,.66,.42,.44,.61,.65,.53,.45,.47,.46,.41,.48,.62,.63,.5,.47,.55,.66,.74,.71,.59,.51,.58,.7,.76,.84,.95,.94,.83,.79,.77,.7,.55,.24,.13,.37,.58,.6,.6,.64,.67,.72,.8,.89,.91,.87,.83,.79,.76,.65,.47,.51,.6,.34,0,0,.31,.6,.73,.69,.64,.6,.43,.39,.42,.2,0,.17,.43,.4,.29,.27,.14,0,0,0,0,.19,.18,0,0],round:[0,0,0,0,.21,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.99,.94,1,1,1,1,1,1,1,1,1,1,1,.86,0,0,.98,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.84,1,1,0,0,.97,1,1,1,.77,1,1,.89,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0]}]};var Ly=Pa.total,By=Pa.segs;function Ia(n,t){for(let e of Pa.falas){if(e.quem!==n||t<e.start-.05||t>e.end+.05)continue;let i=(t-e.start)*30,s=Math.floor(i),r=i-s,o=e.boca[Math.max(0,Math.min(e.boca.length-1,s))]||0,a=e.boca[Math.max(0,Math.min(e.boca.length-1,s+1))]||0,l=e.round[Math.max(0,Math.min(e.round.length-1,Math.round(i)))]||0;return{open:o+(a-o)*r,round:l}}return{open:0,round:0}}function vc(n,t,e,i){let s=zu(n,t,e.bg||"#BFE3F7",e.fov||32),r=s.scene.background;s.camera.near=e.near||.05,s.camera.far=e.far||500,s.camera.updateProjectionMatrix();let o=null,a=null,l=()=>{Da&&Da!==s&&Da._desmonta(),Da=s,a=s.scene=new bs,a.background=r,e.fog&&(a.fog=new Zr(e.fog[0],e.fog[1],e.fog[2])),o=i(a,s)||(()=>({}))};return s._desmonta=()=>{o&&(a.traverse(c=>{if(c.geometry&&c.geometry.dispose(),c.material)for(let h of[].concat(c.material))h.map&&!h.map.userData.fixa&&h.map.image&&h.map.image.tagName==="CANVAS"&&h.map.image.__dyn&&h.map.dispose(),h.dispose()}),s.scene=new bs,s.scene.background=r,o=null,a=null)},s.update=(c,h)=>{o||l(),dc.value=c,jn={t0:n,t1:t,viva:e.viva??1,scene:a,perto:e.perto},iE(a);let u=o(c,h,s.camera)||{};e.limpa!==!1&&sE(a,s.camera);let d=a.userData.vida;if(d&&e.vida!==!1){let f=c;for(let g of d)g(c,f,h)}return Gu(u)},s}var Da=null,jn={t0:0,t1:1,viva:1},ti=new R,Sr=new R,La=new R,Mc=n=>n.userData._at||(n.userData._at=(()=>{let t=[];return n.traverse(e=>{e.userData&&e.userData.ator&&t.push(e.userData.ator)}),t})());function iE(n){for(let t of Mc(n))t._ocultei&&(t.root.visible=!0,t._ocultei=!1)}function sE(n,t){let e=t.userData.alvo;if(!e)return;n.updateMatrixWorld(!0),Sr.copy(t.position),La.set(e[0],e[1],e[2]);let i=La.clone().sub(Sr),s=i.lengthSq();for(let r of Mc(n)){if(!r.root.visible||r.fixo)continue;let o=!1;for(let u=r.root.parent;u;u=u.parent)if(u.visible===!1){o=!0;break}if(o)continue;r.headG.getWorldPosition(ti),ti.y+=.26*(r.root.scale.x||1);let a=ti.distanceTo(Sr),l=Math.max(0,Math.min(1,ti.clone().sub(Sr).dot(i)/s)),c=ti.distanceTo(Sr.clone().addScaledVector(i,l)),h=ti.distanceTo(La)<.55;(a<.75||!h&&l>.02&&l<.8&&c<.3*(r.root.scale.x||1)&&a<Sr.distanceTo(La)-.4)&&(r.root.visible=!1,r._ocultei=!0)}}var xr=(n,t)=>Math.sin(n*.71+t)*.6+Math.sin(n*1.37+t*2.1)*.3+Math.sin(n*2.9+t*3.3)*.1;function qu(n,t,e,i,s=0,r=jn.viva){let o=to(t,i),a=to(e,i);if(r>0){let l=dc.value,c=Math.hypot(o[0]-a[0],o[1]-a[1],o[2]-a[2]),h=Math.min(1,Math.max(0,(l-jn.t0)/Math.max(.5,jn.t1-jn.t0))),u=jn.t1-jn.t0>6.5&&h>.5?.2*r:0,d=.05*r*(h*h*(3-2*h))+u;for(let g=0;g<3;g++)o[g]+=(a[g]-o[g])*d;let f=c*.011*r;o[0]+=xr(l,1)*f,o[1]+=xr(l,4)*f*.7,o[2]+=xr(l,7)*f*.5,a[0]+=xr(l,9)*f*.35,a[1]+=xr(l,12)*f*.3,s+=xr(l,15)*.006*r}if(jn.scene&&jn.perto!==!0){let l=Mc(jn.scene);for(let c of l)if(c.root.visible&&(c.headG.getWorldPosition(ti),ti.y+=.26*(c.root.scale.x||1),Math.hypot(ti.x-a[0],ti.y-a[1],ti.z-a[2])<.45)){let h=(jn.perto||.71*(c.root.scale.x||1))/Math.tan(n.fov*Math.PI/360),u=Math.hypot(o[0]-a[0],o[1]-a[1],o[2]-a[2]);if(u<h&&u>.001)for(let d=0;d<3;d++)o[d]=a[d]+(o[d]-a[d])*h/u;break}}ku(n,o,a,s),n.userData.alvo=a}function lt(n,t,e,i="neutro",s={}){let r=t?Ia(t,e):{open:0,round:0},o=s.mouth||(r.open>0?{open:r.open,round:r.round,smile:s.smile}:{open:0,smile:s.smile});n.face({emo:i,blink:s.blink??Xu(e,n.seed||0),look:s.look||[0,0],brow:s.brow,lagrima:s.lagrima,olhosAbertos:s.olhosAbertos,blush:s.blush,mouth:o});let a=n.headG.rotation,l=n.torsoG.rotation,c=n._viva;if(c&&a.x===c.r[0]&&a.y===c.r[1]&&a.z===c.r[2]&&l.x===c.r[3]&&l.z===c.r[4]&&(a.x-=c.d[0],a.y-=c.d[1],a.z-=c.d[2],l.x-=c.d[3],l.z-=c.d[4]),!n.congelado&&s.vivo!==!1){let h=(n.seed||0)*1.7,u=e*(s.lento??1),d=r.open||0,f=[.03*Math.sin(u*1.05+h)+d*.09*(.6+.4*Math.sin(u*7.3+h)),.045*Math.sin(u*.63+h*2)+d*.05*Math.sin(u*3.1+h),.025*Math.sin(u*.81+h*3),.018*Math.sin(u*2.2+h),.01*Math.sin(u*.9+h)];a.x+=f[0],a.y+=f[1],a.z+=f[2],l.x+=f[3],l.z+=f[4],n._viva={d:f,r:[a.x,a.y,a.z,l.x,l.z]}}else n._viva=null;return n}function _c(n,t,e={},i=1){let s=Ia(n,t).open,r=Math.sin(t*2.3),o=Math.sin(t*1.7+1);return{...e,shR:[(e.shR?.[0]??0)+18*s*i+6*r*i,(e.shR?.[1]??8)+6*s*i],elR:(e.elR??10)+40*s*i,shL:[(e.shL?.[0]??0)+8*s*i*o,e.shL?.[1]??8],headX:(e.headX??0)-3*s+1.5*r,headZ:(e.headZ??0)+2*o*s}}function no(n,t,e,i,s=0){return n.root.rotation.set(-Math.PI/2+s,0,0),n.root.position.set(t,e+.2,i),n.sombra.visible=!1,n}function Ps(n,t=.4){let e=qt(256,256,s=>{if(s.lineJoin="round",s.lineWidth=14,s.strokeStyle="#1B1420",s.textAlign="center",s.textBaseline="middle",n==="coracao")s.fillStyle="#F2546E",s.beginPath(),s.moveTo(128,214),s.bezierCurveTo(20,140,30,50,100,52),s.bezierCurveTo(118,54,128,70,128,82),s.bezierCurveTo(128,70,138,54,156,52),s.bezierCurveTo(226,50,236,140,128,214),s.fill(),s.stroke(),s.fillStyle="#FFFFFF88",s.beginPath(),s.ellipse(88,92,18,12,-.6,0,7),s.fill();else if(n==="gota")s.fillStyle="#8FD3F2",s.beginPath(),s.moveTo(128,30),s.bezierCurveTo(200,130,200,210,128,214),s.bezierCurveTo(56,210,56,130,128,30),s.fill(),s.stroke();else{let r={interrogacao:"?",exclamacao:"!",zzz:"Z",notas:"\u266A"}[n]||n;s.font="900 200px Inter",s.fillStyle=n==="exclamacao"?"#F2C14E":"#FFFFFF",s.strokeText(r,128,136),s.fillText(r,128,136)}}),i=new Kn(new kn({map:e,transparent:!0,depthWrite:!1}));return i.scale.setScalar(t),i.renderOrder=10,i}function qe(n,t,e,i=0,s=.48){let r=n.root.scale.x||1;return n.place(t,e,s-.28*r,i),n.sombra.visible=!1,n}function Ve(n,t,e,i="neutro",s={},r=1,o={}){return n.pose(_c(t,e,s,r)),lt(n,t,e,i,o)}var _e={mundo:{value:0},ouro:{value:0},alvo:{value:0},claro:{value:0}},rE=`{ float l_ = dot(gl_FragColor.rgb, vec3(.2126,.7152,.0722));
  vec3 cinza_ = vec3(l_) * .7 + .08;
  vec3 ouro_ = vec3(l_) * vec3(1.32, 1.02, .52) + vec3(.1, .06, .0);
  vec3 alvo_ = mix(cinza_, ouro_, uOuro);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, alvo_, uCinza); }
#include <dithering_fragment>`;function Yu(n,t){!n||n.userData.fp||n.isShaderMaterial||n.isRawShaderMaterial||n.isLineBasicMaterial||(n.userData.fp=t,n.onBeforeCompile=e=>{e.uniforms.uCinza=t==="alvo"?_e.alvo:_e.mundo,e.uniforms.uOuro=t==="alvo"?_e.claro:_e.ouro,e.fragmentShader=`uniform float uCinza; uniform float uOuro;
`+e.fragmentShader.replace("#include <dithering_fragment>",rE)},n.customProgramCacheKey=()=>"foco-"+t,n.needsUpdate=!0)}function Ye(n,t={}){let e=Ec(t.borda??.03,t.cor||"#FFFFFF",3.2).clone();e.uniforms.res.value.set(1920,1080);let i=[];for(let r of[].concat(n)){let o=[];r.traverse(a=>{a.isMesh&&!a.userData.isOutline&&!a.userData.borda&&o.push(a)});for(let a of o)if(a.material=[].concat(a.material).map(l=>{if(l.userData.fp==="alvo")return l;let c=l.clone();return c.userData={...l.userData},delete c.userData.fp,Yu(c,"alvo"),c}),a.material.length===1&&(a.material=a.material[0]),!(t.semBorda||a.isSkinnedMesh||a.material.transparent&&!a.material.alphaTest)&&a.geometry&&a.geometry.attributes.normal&&!a.userData.semBorda){let l=new rt(a.geometry,e);l.userData.isOutline=!0,l.userData.borda=!0,l.renderOrder=-1,a.add(l),i.push(l)}}let s=(r,o=0)=>{let a=r>.02;for(let l of i)l.visible=a;e.uniforms.w.value=(t.borda??.03)*r*(.75+.25*Math.sin(o*6))};return s(0),s}function Zu(n){n.traverse(t=>{if((t.isMesh||t.isSprite||t.isPoints)&&!t.userData.isOutline)for(let e of[].concat(t.material))Yu(e,"mundo")})}function tn(n,t,e,i=0){let s=new xt(t),r=s.r*.2126+s.g*.7152+s.b*.0722,o=new xt(r*.7+.08,r*.7+.08,r*.7+.08),a=new xt(r*1.32+.1,r*1.02+.06,r*.52);o.lerp(a,i),n.background=s.clone().lerp(o,e)}function $u(){_e.mundo.value=0,_e.ouro.value=0,_e.alvo.value=0,_e.claro.value=0}var Ku=(n,t=.9)=>(e,i,s)=>{e.fillStyle=n,e.fillRect(0,s*t,i,s*(1-t))},oE={pele:"#E3AE86",cabelo:"topete",corCabelo:"#4A2A18",nariz:!0,sobr:"#3A2014"},Qu=(n,t,e)=>{n.fillStyle="#80868E",n.beginPath(),n.roundRect(t*.3,e*.56,t*.4,e*.3,26),n.fill(),n.strokeStyle="#6C727A",n.lineWidth=6,n.beginPath(),n.moveTo(t*.33,e*.6),n.lineTo(t*.33,e*.82),n.moveTo(t*.67,e*.6),n.lineTo(t*.67,e*.82),n.stroke(),n.strokeStyle="#F4F1EA",n.lineWidth=7;for(let i of[-1,1])n.beginPath(),n.moveTo(t/2+i*34,0),n.lineTo(t/2+i*40,e*.3),n.stroke(),n.fillStyle="#F4F1EA",n.beginPath(),n.arc(t/2+i*40,e*.31,9,0,7),n.fill();n.fillStyle="#7A8088",n.fillRect(0,e*.92,t,e*.08)},jt={...oE,camisa:"#959BA3",manga:"longa",calca:"#1E1E22",meia:"#E3AE86",tenis:"#E3AE86",sola:"#1E2A44",chinelo:"#1E2A44",escala:.95,estampa:Qu},sv={...jt,luva:"#1A1A1E"},aE=(n,t,e)=>{n.fillStyle="#F7F1E3",n.beginPath(),n.roundRect(t*.27,e*.16,t*.46,e*.84,30),n.fill();let i=["#E2443A","#F2C230","#3E7CC8","#5AA84E","#E57AA0"];for(let s=0;s<30;s++){let r=t*.29+s*97%(t*.42),o=e*.2+s*53%(e*.76);n.fillStyle=i[s%5];for(let a=0;a<5;a++){let l=a/5*6.283;n.beginPath(),n.arc(r+Math.cos(l)*9,o+Math.sin(l)*9,7,0,7),n.fill()}n.fillStyle="#F2C230",n.beginPath(),n.arc(r,o,5,0,7),n.fill()}n.strokeStyle="#E2443A",n.lineWidth=8,n.beginPath(),n.moveTo(t*.27,e*.5),n.lineTo(0,e*.5),n.moveTo(t*.73,e*.5),n.lineTo(t,e*.5),n.stroke()},lE={pele:"#D9A07A",cabelo:"coque",corCabelo:"#C9C6C0",oculos:!0,rugas:!0,cilios:!0,nariz:!0,tronco:"senhora",camisa:"#7FA6C9",calca:"#5A6A8A",saia:"#5A6A8A",meia:"#D9A07A",tenis:"#D9A07A",sola:"#C84E4E",chinelo:"#C84E4E",escala:.84,estampa:aE},rv={...lE,camisa:"#B23A5A",saia:"#B23A5A",calca:"#B23A5A",sola:"#3A2A2A",estampa:(n,t,e)=>{n.fillStyle="#F4D8E0";for(let i=0;i<46;i++)n.beginPath(),n.arc(i*131%t,i*67%e,7,0,7),n.fill();Ku("#8E2A44",.9)(n,t,e)},batom:!0};var Ju=[["#3E7CC8","#2A2A33","#2A1E1A","topete","#D9A07A"],["#E57AA0","#3A3550","#5A3020","chanel","#E8B48C"],["#58B26A","#2F4E86","#1C1416","afro","#8E5A3A"],["#F2994A","#3A3A44","#C9A060","curto","#F0C8A6"],["#9B6CC4","#2A2A33","#1C1416","curto","#B07A52"],["#2FB5A8","#4A3A2A","#3A2418","rabo","#E3B28E"],["#F2D24A","#2F4E86","#2A1E1A","tigela","#6E4430"],["#E8E4DE","#5A5A66","#6A5A4A","coque","#D9A07A"]],Is=(n,t={})=>{let[e,i,s,r,o]=Ju[n%Ju.length];return{camisa:e,calca:i,corCabelo:s,cabelo:r,pele:o,cilios:["rabo","coque","chanel"].includes(r),nariz:!0,tenis:["#F4F1EA","#2A2A30","#E2443A"][n%3],...t}},io=(n,t={})=>Is(n,{camisa:"#F6F4EE",calca:"#2F4E86",escala:.94,estampa:(e,i,s)=>{Ku("#2F4E86",.88)(e,i,s),e.fillStyle="#2F4E86",e.beginPath(),e.arc(i/2+120,s*.55,34,0,7),e.fill()},...t});function ju(n){let t=yc(n);if(n.estampa===Qu){let e=Pe(new je(.13,.055,10,22),n.camisa,{out:.008});e.rotation.x=Math.PI/2.4,e.position.set(0,.34,-.09),t.torsoG.add(e);let i=pe(.1,"#80868E",0,.3,-.15,{seg:14});i.scale.set(1.2,.7,.6),t.torsoG.add(i)}if(n.chinelo)for(let e of["L","R"]){let i=t.legs[e].an;for(let s of[-1,1]){let r=Pe(new Ge(.016,.014,.1),n.chinelo,{out:.003});r.position.set(s*.032,.013,.085),r.rotation.set(0,-s*.62,0),i.add(r)}i.add(Pe(new ie(.011,8,6),n.chinelo,{pos:[0,.014,.125]}))}return t}var ot=(n,t,e,i,s=0,r)=>qu(n,typeof t[0]=="number"?[[0,t]]:t,typeof e[0]=="number"?[[0,e]]:e,i,s,r);function Mt(n,t,e=0,i=0,s=0,r=0){let o=ju(t);return o.place(e,i,r,s),n.add(o.root),o.root.userData.ator=o,o.seed=Math.abs(e*13+i*7|0)%9,o}var hE={shL:[0,8],shR:[0,8],hipL:[0,0],hipR:[0,0]},uE={elL:8,elR:8};function me(n,...t){let e={...n};for(let i of t)if(i)for(let s in i){let r=i[s];if(Array.isArray(r)){let o=e[s]||hE[s]||[0,0];e[s]=[o[0]+(r[0]||0),o[1]+(r[1]||0),(o[2]||0)+(r[2]||0)]}else e[s]=(e[s]??uE[s]??0)+r}return e}var dE={io:Cn,out:Bn,in:xa,lin:n=>Pt(n),back:n=>{n=Pt(n);let t=1.9;return 1+(t+1)*Math.pow(n-1,3)+t*Math.pow(n-1,2)},mola:n=>(n=Pt(n),1-Math.cos(n*Math.PI*2.5)*Math.exp(-n*5))};function Ac(n,t){if(n<=t[0][0])return t[0][1];for(let e=1;e<t.length;e++)if(n<=t[e][0]){let i=dE[t[e][2]||"io"]((n-t[e-1][0])/Math.max(1e-6,t[e][0]-t[e-1][0])),s=t[e-1][1],r=t[e][1];return Array.isArray(s)?s.map((o,a)=>Wt(o,r[a],i)):Wt(s,r,i)}return t[t.length-1][1]}var bc=(n,t)=>Math.sin(n*.71+t)*.6+Math.sin(n*1.37+t*2.1)*.3+Math.sin(n*2.9+t*3.3)*.1;function Oe(n,t=0,e=1){let i=Math.sin(n*1.9+t),s=bc(n*.35,t*2.3),r=bc(n*.6,t*4.1);return{bob:i*.004*e-Math.abs(s)*.008*e,lean:i*.8*e,tilt:s*2.2*e,hipL:[0,s*2*e],hipR:[0,-s*2*e],knL:Math.max(0,s)*9*e,knR:Math.max(0,-s)*9*e,shL:[r*3*e,i*1.2*e],shR:[-r*3*e,i*1.2*e],elL:(4+r*4)*e,elR:(4-r*4)*e,headY:bc(n*.4,t*7)*6*e,headZ:-s*1.5*e}}var rs=(n,t=0,e=1)=>me({shL:[0,9],shR:[0,9],elL:12,elR:12},Oe(n,t,e));function so(n,t={}){let e=t.f||1.8,i=t.amp??1,s=t.ph||0,r=Ca(n,e,i,s),o=Math.sin((n*e+s)*Math.PI*2);return r.headY=-o*3*i,r.tilt=o*1.8*i,r.headZ=-o*1.2*i,t.chinelo&&(r.knL*=.8,r.knR*=.8,r.hipL[0]*=.85,r.hipR[0]*=.85),t.curvado&&(r.lean+=10,r.headX=-6),t.maos==="bolso"&&(r.shL=[18+o*2,0,-90],r.shR=[18-o*2,0,-90],r.elL=105,r.elR=105),r}var Tc=(n,t=2.9,e=1)=>{let i=Fa(n,t,e),s=Math.sin(n*t*Math.PI*2);return i.headY=-s*3,i.tilt=s*2.5,i},pi={bracoCruzado:{shL:[30,4,-75],shR:[26,4,-80],elL:95,elR:95,lean:-3},maosCintura:{shL:[-15,55,-90],shR:[-15,55,-90],elL:85,elR:85,lean:-2},maosBolso:{shL:[18,0,-90],shR:[18,0,-90],elL:105,elR:105,lean:2,headX:4},maosCabeca:{shL:[150,38],shR:[150,38],elL:130,elR:130,headX:-6},bracosAbertos:{shL:[55,55],shR:[55,55],elL:22,elR:22,lean:-4,headX:-4},abraco:{shL:[70,20,-80],shR:[70,20,-80],elL:50,elR:50,lean:8},maosFrente:{shL:[80,8],shR:[80,8],elL:14,elR:14,lean:6},desculpa:{shL:[55,22],shR:[55,22],elL:85,elR:85,lean:-3,headX:6,headZ:6},ombros:{shL:[10,24],shR:[10,24],elL:70,elR:70,headZ:10,bob:.015},celular:{shR:[62,6],elR:72,shL:[30,10],elL:60},filmar:{shR:[88,2],elR:38,shL:[70,-6],elL:60,headX:2},co\u00E7arOlho:{shR:[118,-8],elR:150,headX:8,headZ:-6},apontar:{shR:[92,6],elR:4},punhoFecha:{shR:[70,10],elR:105,headX:18},pegaChao:{lean:52,bob:-.18,hipL:[64,6],hipR:[60,6],knL:85,knR:80,shL:[74,6],shR:[74,6],elL:6,elR:6,headX:-20},carregaFrente:{lean:-10,shL:[22,-4],shR:[22,-4],elL:50,elR:50,knL:12,knR:12,bob:-.02,headX:-6},quadril:{shL:[-6,30],elL:100,shR:[8,10],elR:20,tilt:-6,lean:3},ajoelhado:{bob:-.3,lean:6,hipL:[92,4],hipR:[-6,4],knL:92,knR:98,shL:[12,10],shR:[12,10],elL:25,elR:25},sentadoChao:{bob:-.48,lean:-10,hipL:[80,18],hipR:[80,18],knL:30,knR:30,shL:[-30,20],shR:[-30,20],elL:10,elR:10},testaParede:{lean:22,shL:[100,18],elL:85,shR:[10,8],elR:15,headX:16},comemora:{shL:[160,30],shR:[160,30],elL:20,elR:20,headX:-12},assustado:{shL:[30,22],shR:[30,22],elL:100,elR:100,lean:-8,headX:-6},aceno:{shR:[150,30],elR:30}};var ed=new R,nd=new zn;function Se(n,t,e="R",i=[0,-.08,.03],s){t.root.updateMatrixWorld(!0);let r=t.hands[e];r.localToWorld(ed.set(...i)),n.position.copy(ed),s!==!1&&(r.getWorldQuaternion(nd),n.quaternion.copy(nd),s&&n.rotateX(s[0]).rotateY(s[1]).rotateZ(s[2]))}function ft(n,t,e,i){return e={perto:.42,...e},vc(n,t,e,(s,r)=>{let o=i(s,r);return Zu(s),(a,l,c)=>($u(),o?o(a,l,c)||{}:{})})}var Ba={w:300,h:600};function ei(n,t,e,i="#14161C"){n.fillStyle=i,n.fillRect(0,0,t,e)}var Re=(n,t,e,i,s,r,o=800,a="center")=>{n.fillStyle=r,n.font=`${o} ${s}px Inter`,n.textAlign=a,n.textBaseline="middle",n.fillText(t,e,i)},xc={apagada:(n,t,e)=>ei(n,t,e,"#0A0A0E"),bloqueio:(n,t,e,i=0)=>{let s=n.createLinearGradient(0,0,0,e);s.addColorStop(0,"#3A4A8A"),s.addColorStop(1,"#8A4A7A"),n.fillStyle=s,n.fillRect(0,0,t,e),Re(n,"19:42",t/2,120,64,"#FFFFFF",300),n.fillStyle="rgba(255,255,255,.85)",n.beginPath(),n.roundRect(20,200,t-40,70,16),n.fill(),n.fillStyle="#3EC860",n.beginPath(),n.roundRect(32,212,46,46,10),n.fill(),Re(n,"Tiago",92,225,20,"#1A1A1E",800,"left"),Re(n,"mano olha isso kkkk",92,250,16,"#3A3A44",600,"left")},chat:(n,t,e,i=0)=>{ei(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),Re(n,"Tiago",70,38,22,"#FFF",800,"left"),[[0,"mano olha isso kkkk"],[1,"kkkkkkk"],[0,"bora jogar?"],[1,"depois"]].slice(0,1+Math.floor(i*4)).forEach(([r,o],a)=>{n.fillStyle=r?"#D8F8C8":"#FFFFFF";let l=30+o.length*10;n.beginPath(),n.roundRect(r?t-l-16:16,100+a*70,l,48,12),n.fill(),Re(n,o,r?t-l/2-16:16+l/2,124+a*70,18,"#1A1A1E",600)})},foto:(n,t,e,i=0)=>{ei(n,t,e,"#FFFFFF"),n.fillStyle="#F4A05A",n.fillRect(0,80,t,300),n.fillStyle="#F2C230",n.beginPath(),n.arc(200,170,40,0,7),n.fill(),n.fillStyle="#5AA84E",n.beginPath(),n.moveTo(0,380),n.lineTo(120,240),n.lineTo(240,380),n.fill();let s=1+Math.sin(Math.min(1,i*2)*Math.PI)*.5;n.save(),n.translate(50,420),n.scale(s,s),n.fillStyle=i>.2?"#F2546E":"#FFFFFF",n.strokeStyle="#1A1A1E",n.lineWidth=3,n.beginPath(),n.moveTo(0,14),n.bezierCurveTo(-26,-6,-12,-24,0,-10),n.bezierCurveTo(12,-24,26,-6,0,14),n.fill(),n.stroke(),n.restore(),Re(n,1203+(i>.2?1:0)+" curtidas",80,420,18,"#1A1A1E",800,"left")},tapete:(n,t,e,i=0)=>{ei(n,t,e,"#0E0E12"),n.fillStyle="#5A4A3A",n.fillRect(0,160,t,280);let s=t*Pt(i);n.fillStyle="#C8463A",n.fillRect(0,160,s,280),n.strokeStyle="#F2C230",n.lineWidth=6;for(let r=0;r<6;r++)n.beginPath(),n.arc(s/2,300,20+r*22,0,7),n.stroke();n.fillStyle="rgba(255,255,255,.7)",n.fillRect(s-6,160,12,280),n.fillStyle="#FF2A2A",n.fillRect(0,e-12,t*(.2+i*.7),6),Re(n,"LIMPEZA DE TAPETE SATISFAT\xD3RIA",t/2,500,15,"#FFFFFF",800)},xadrez:(n,t,e,i=0)=>{ei(n,t,e,"#262421");let s=t/8;for(let o=0;o<8;o++)for(let a=0;a<8;a++)n.fillStyle=(o+a)%2?"#769656":"#EEEED2",n.fillRect(o*s,150+a*s,s,s);let r=["\u265C","\u265E","\u265D","\u265B","\u265A","\u265D","\u265E","\u265C"];n.font=`${s*.8}px serif`,n.textAlign="center",n.textBaseline="middle",r.forEach((o,a)=>{n.fillStyle="#1A1A1E",n.fillText(o,a*s+s/2,150+s/2),n.fillText("\u265F",a*s+s/2,150+s*1.5),n.fillStyle="#FFFFFF",n.fillText("\u2659",a*s+s/2,150+s*6.5),n.fillText(r[a].replace("\u265C","\u2656").replace("\u265E","\u2658").replace("\u265D","\u2657").replace("\u265B","\u2655").replace("\u265A","\u2654"),a*s+s/2,150+s*7.5)}),Re(n,"ABERTURAS: SICILIANA",t/2,90,18,"#FFFFFF",800),Re(n,"Partida "+Math.floor(1+i*199),t/2,500,20,"#B8B8B8",700)},mensagens:(n,t,e,i=0)=>{xc.bloqueio(n,t,e),n.fillStyle="rgba(20,20,28,.9)",n.beginPath(),n.roundRect(16,200,t-32,110,18),n.fill(),Re(n,String(Math.round(27*Pt(i*1.3))),t/2,240,50,"#3EC860",900),Re(n,"MENSAGENS N\xC3O LIDAS",t/2,286,17,"#FFFFFF",800)},views:(n,t,e,i=0)=>{ei(n,t,e,"#0E0E12"),n.fillStyle="#3A3A44",n.fillRect(0,60,t,300),n.fillStyle="#C9893E",n.beginPath(),n.ellipse(t/2,220,70,90,0,0,7),n.fill(),n.fillStyle="#E3AE86",n.beginPath(),n.arc(t/2,110,36,0,7),n.fill();let s=Math.round(2e5*Math.pow(Pt(i),2.2));Re(n,s.toLocaleString("pt-BR")+" visualiza\xE7\xF5es",20,390,20,"#FFFFFF",800,"left"),n.fillStyle="#F2546E",Re(n,"\u2665 "+Math.round(s/9).toLocaleString("pt-BR"),20,425,20,"#F2546E",800,"left")},chamadas:(n,t,e,i=0)=>{ei(n,t,e,"#101016"),Re(n,"14",t/2,180,110,"#FF4A4A",900),Re(n,"CHAMADAS PERDIDAS",t/2,260,20,"#FFFFFF",900),Re(n,i>.5?"M\xC3E":"",t/2,310,34,"#FFFFFF",900),n.strokeStyle="rgba(255,255,255,.55)",n.lineWidth=2;let s=210,r=120;for(let o=0;o<9;o++){let a=o*.7;n.beginPath(),n.moveTo(s,r),n.lineTo(s+Math.cos(a)*260,r+Math.sin(a)*260),n.stroke()}n.beginPath(),n.arc(s,r,40,0,7),n.stroke()},chamadasBorrado:(n,t,e,i=0)=>{ei(n,t,e,"#101016"),n.filter="blur(5px)",Re(n,"14",t/2,180,110,"#FF4A4A",900),Re(n,"CHAMADAS PERDIDAS",t/2,260,20,"#FFFFFF",900),Re(n,"\u25A0\u25A0\u25A0",t/2,310,34,"#FFFFFF",900),n.filter="none",n.strokeStyle="rgba(255,255,255,.7)",n.lineWidth=2;let s=90,r=420;for(let o=0;o<9;o++){let a=o*.7;n.beginPath(),n.moveTo(s,r),n.lineTo(s+Math.cos(a)*300,r+Math.sin(a)*300),n.stroke()}n.beginPath(),n.arc(s,r,36,0,7),n.stroke()},mensagemMae:(n,t,e,i=0)=>{xc.chamadas(n,t,e,1);let s="ele ficou esperando voc\xEA na porta da escola at\xE9 a apresenta\xE7\xE3o acabar",r=Math.floor(s.length*Pt(i));n.fillStyle="#2E8E6A",n.beginPath(),n.roundRect(16,360,t-32,190,16),n.fill(),Re(n,"M\xE3e",32,382,16,"#D8F8C8",800,"left"),n.fillStyle="#FFFFFF",n.font="700 19px Inter",n.textAlign="left";let o=s.slice(0,r).split(" "),a="",l=414;for(let c of o)n.measureText(a+c).width>t-70&&(n.fillText(a,32,l),a="",l+=26),a+=c+" ";n.fillText(a,32,l)},audio:(n,t,e,i=0)=>{ei(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),Re(n,"Tiago",70,38,22,"#FFF",800,"left"),n.fillStyle="#FFFFFF",n.beginPath(),n.roundRect(16,240,t-60,70,18),n.fill(),n.fillStyle="#2E8E6A";for(let s=0;s<26;s++){let r=6+Math.abs(Math.sin(s*1.7+i*30))*30*(s/26<i?1:.4);n.fillRect(70+s*7,275-r/2,4,r)}n.beginPath(),n.moveTo(36,260),n.lineTo(56,275),n.lineTo(36,290),n.fill()},coxinha:(n,t,e,i=0)=>{ei(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),Re(n,"Tiago",70,38,22,"#FFF",800,"left"),n.fillStyle="#D8F8C8",n.beginPath(),n.roundRect(60,120,t-76,260,14),n.fill(),n.fillStyle="#F4E6C0",n.fillRect(72,132,t-100,180),n.fillStyle="#D9892E",n.beginPath(),n.moveTo(t/2+20,160),n.quadraticCurveTo(t/2+90,280,t/2+20,290),n.quadraticCurveTo(t/2-50,280,t/2+20,160),n.fill(),Re(n,"desculpa mano, bora?",t/2+20,345,18,"#1A1A1E",800),i>.5&&Re(n,"\u2713\u2713",t-40,365,14,"#3EA6FF",900)},conversa:(n,t,e)=>{ei(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),Re(n,"Tiago",70,38,22,"#FFF",800,"left"),n.fillStyle="#FFFFFF",n.beginPath(),n.roundRect(16,380,230,60,12),n.fill(),Re(n,"vem aqui em casa hoje? \u{1F382}",130,410,16,"#1A1A1E",700),Re(n,"\u2713\u2713",220,430,13,"#9A9A9A",900)}};function Hi(){let n=new Q;n.add(at(.075,.15,.012,"#1B1A20",0,0,0,{r:.008,out:.003}));let t=document.createElement("canvas");t.width=Ba.w,t.height=Ba.h;let e=t.getContext("2d"),i=new mn(t);i.colorSpace=Fe;let s=new re({map:i}),r=new rt(new Bt(.066,.132),s);r.position.z=.0065,n.add(r);let o="";return n.tela=(a,l=0,c=1)=>{let h=a+"|"+Math.round(l*60);h!==o&&(o=h,xc[a](e,Ba.w,Ba.h,l),i.needsUpdate=!0),s.color.setScalar(c)},n.tela("apagada"),n.userData.tela=r,n.scale.setScalar(1.7),n}function id(n=1){let t=new Q,e=Me("#E8B828",{emissive:"#5A4008",emissiveIntensity:.2});t.add(Pe(new Ln(.16,.16,.05,40),e,{out:.006,rot:[Math.PI/2,0,0]})),t.add(_t(.03,.03,.05,e,0,.19,0,{out:.004})),t.add(Pe(new je(.04,.01,8,18),e,{out:.003,pos:[0,.25,0]}));let i=document.createElement("canvas");i.width=512,i.height=512;let s=i.getContext("2d"),r=new mn(i);r.colorSpace=Fe;let o=new rt(new ui(.14,40),new re({map:r,color:"#D8D0C0"}));o.position.z=.026,t.add(o);let a=-1;return t.set=(l,c=0)=>{let h=Math.round(l*4)+c*1e3;if(h===a)return;a=h,s.fillStyle="#FFF8E6",s.fillRect(0,0,512,512),s.strokeStyle="#8A6A10",s.lineWidth=8;for(let g=0;g<60;g++){let E=g/60*6.283;s.beginPath(),s.moveTo(256+Math.sin(E)*230,256-Math.cos(E)*230),s.lineTo(256+Math.sin(E)*(g%5?214:196),256-Math.cos(E)*(g%5?214:196)),s.stroke()}let u=Math.floor(l/60),d=Math.floor(l%60);c>0&&(s.shadowColor="#F2C230",s.shadowBlur=40*c),s.fillStyle="#3A2A08",s.font="700 120px 'IBM Plex Mono'",s.textAlign="center",s.textBaseline="middle",s.fillText(String(u).padStart(2,"0")+":"+String(d).padStart(2,"0"),256,330),s.shadowBlur=0;let f=l%60/60*6.283;s.strokeStyle="#C8302A",s.lineWidth=10,s.beginPath(),s.moveTo(256,256),s.lineTo(256+Math.sin(f)*190,256-Math.cos(f)*190),s.stroke(),s.fillStyle="#C8302A",s.beginPath(),s.arc(256,256,14,0,7),s.fill(),r.needsUpdate=!0},t.set(0),t.scale.setScalar(n),t}var Sc=null;function mi(n,t,e={}){let i=e.n||40,s=e.cor||"#7AF0B0",r=[];Sc||(Sc=qt(64,64,o=>{let a=o.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.6,"rgba(255,255,255,.85)"),a.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=a,o.fillRect(0,0,64,64)}));for(let o=0;o<i;o++){let a=new Kn(new kn({map:Sc,color:s,transparent:!0,depthWrite:!1}));a.scale.setScalar(e.tam||.02),n.add(a);let l=__sr()*6.283,c=__sr()*2-1;r.push({s:a,d:new R(Math.cos(l)*Math.sqrt(1-c*c),c*.6+(e.sobe||0),Math.sin(l)*Math.sqrt(1-c*c)),v:.4+__sr()*.6,ph:__sr()})}return(o,a=0)=>{for(let l of r){let c=Pt((o-l.ph*.3)/.7);l.s.visible=c>0&&c<1,l.s.position.set(t[0]+l.d.x*c*(e.r||.3)*l.v,t[1]+l.d.y*c*(e.r||.3)*l.v+(e.g||0)*c*c,t[2]+l.d.z*c*(e.r||.3)*l.v),l.s.material.opacity=1-c}}}var ro=(n,t,e=.35)=>t.some(i=>n>=i&&n<i+e)?Math.sin(n*90)*.004:0;function Rc(n,t=.4,e=0,i=0){n.updateMatrixWorld(!0);let s=new R(i,0,1).applyQuaternion(n.getWorldQuaternion(new zn)).normalize(),r=n.getWorldPosition(new R);return[r.x+s.x*t,r.y+s.y*t+e,r.z+s.z*t]}var $v=Math.PI/180;var Jv={s:0,n:Math.PI,e:Math.PI/2,w:-Math.PI/2};function sd(n,t,e,i=0,s=0,r=0,o=0){let a=new rt(new Bt(n,t),e);return a.position.set(i,s,r),a.rotation.y=o,a.receiveShadow=!0,a}var oo=(n,t)=>t[Math.floor(n()*t.length)%t.length];var ni=(n,...t)=>{let e=new Q;for(let i of t)e.add(i);return e.userData.pe=n,e};var fE=["#3E7CC8","#C84E4E","#5AA84E","#8E6CC4","#D98A3A","#4FB8A0","#7A8696","#B5603E"];function rd(n=2.1,t="#3E7CC8"){let e=ni([n,.9]),i=new xt(t).multiplyScalar(.82).getStyle();e.add(at(n,.42,.86,t,0,.21+.08,0,{out:.014,r:.08})),e.add(at(n,.5,.22,i,0,.62,-.32,{out:.014,r:.08}));for(let r of[-1,1])e.add(at(.2,.58,.86,i,r*(n/2-.1),.37,0,{out:.014,r:.07}));let s=Math.max(2,Math.round(n/.8));for(let r=0;r<s;r++)e.add(at((n-.44)/s-.03,.14,.62,t,-n/2+.22+(n-.44)/s*(r+.5),.56,.06,{out:.012,r:.06}));for(let r of[-1,1])for(let o of[-1,1])e.add(_t(.03,.02,.08,"#3A2A20",r*(n/2-.1),.04,o*.34,{seg:6}));return e.add(at(.4,.36,.12,"#F2C230",-n/2+.45,.72,-.17,{out:.012,r:.06,rot:[-.25,.2,0]})),e}function od(n=1.6,t="#7A5233"){let e=ni([n,.45]);e.add(at(n,.5,.42,t,0,.25,0,{out:.012}));for(let s of[-1,1])e.add(it(n/2-.06,.36,.01,"#5E3E26",s*n/4,.25,.215));e.add(at(1.2,.7,.06,"#1B1A20",0,.5+.45,-.05,{out:.012})),e.add(it(.3,.03,.18,"#2A2A30",0,.515,-.05)),e.add(it(.06,.1,.04,"#2A2A30",0,.56,-.05));let i=pE();return i.position.set(0,.95,-.016),e.add(i),e.userData.tela=i,e.add(at(.3,.06,.15,"#2A2A30",.45,.53,.05)),e}var ao=null;function pE(n=1.12,t=.62){ao||(ao=qt(512,1024,s=>{[["#6FB4EC","#5AA84E"],["#F2994A","#3E2A60"],["#2E6FB8","#E8DCC8"],["#58B26A","#F2C230"]].forEach(([o,a],l)=>{let c=l*256;s.fillStyle=o,s.fillRect(0,c,512,256),s.fillStyle=a,s.fillRect(0,c+170,512,86),s.fillStyle="#F4D2B0",s.beginPath(),s.arc(180+l*40,c+120,44,0,7),s.fill(),s.fillStyle="#2A1E1A",s.beginPath(),s.arc(180+l*40,c+100,44,Math.PI,0),s.fill(),s.fillStyle=["#E2443A","#2E9C6A","#F2C230","#3E7CC8"][l],s.fillRect(120+l*40,c+160,120,96),s.fillStyle="rgba(0,0,0,.55)",s.fillRect(0,c+214,512,42),s.fillStyle="#FFF",s.font="700 26px Inter, Arial",s.fillText(["JORNAL DA SERRA","NOVELA DAS NOVE","PREVIS\xC3O DO TEMPO","FUTEBOL AO VIVO"][l],16,c+244)})}),ao.wrapT=xn,ao.repeat.set(1,.25));let e=ao.clone();e.needsUpdate=!0,e.repeat.set(1,.25);let i=new rt(new Bt(n,t),new re({map:e,toneMapped:!1}));return i.userData.vivo=!0,i.userData.tv=!0,i}function ad(n=1,t=0){let e=ni([.45,.45]),i=He(t+2);e.add(_t(.2,.15,.38,oo(i,["#C8643C","#F4F1EA","#3A3A44","#D9B07A"]),0,.19,0,{out:.012,seg:14})),e.add(_t(.18,.18,.02,"#5A3A24",0,.37,0));for(let s=0;s<7;s++){let r=s/7*6.283,o=Pe(new ie(.16,10,6),s%2?"#4E9A48":"#5FAE52",{out:.01});o.scale.set(.6,1.8*n,.35),o.position.set(Math.cos(r)*.12,.55+n*.25,Math.sin(r)*.12),o.rotation.set(Math.sin(r)*.5,r,-Math.cos(r)*.5),e.add(o)}return e}function wc(n,t,e=0,i="paisagem"){let s=He(e+8),r=qt(256,Math.round(256*t/n),(l,c,h)=>{if(i==="paisagem")l.fillStyle="#8EC8EC",l.fillRect(0,0,c,h),l.fillStyle="#6FA866",l.beginPath(),l.moveTo(0,h*.7),l.quadraticCurveTo(c*.3,h*.35,c*.6,h*.62),l.quadraticCurveTo(c*.8,h*.5,c,h*.6),l.lineTo(c,h),l.lineTo(0,h),l.fill(),l.fillStyle="#9E9A94",l.beginPath(),l.ellipse(c*.66,h*.45,c*.1,h*.22,0,Math.PI,0),l.fill(),l.fillStyle="#F2C230",l.beginPath(),l.arc(c*.2,h*.22,h*.09,0,7),l.fill();else if(i==="familia"){l.fillStyle="#E8DCC8",l.fillRect(0,0,c,h);for(let u=0;u<3;u++){let d=c*(.28+u*.22),f=h*.45;l.fillStyle=["#2C6E7F","#E57AA0","#3A9AD9"][u],l.fillRect(d-26,f+20,52,h),l.fillStyle=["#9A6646","#E8B48C","#E3AE86"][u],l.beginPath(),l.arc(d,f,24,0,7),l.fill(),l.fillStyle=["#2B2422","#5A3020","#4A2A18"][u],l.beginPath(),l.arc(d,f-6,24,Math.PI,0),l.fill()}}else if(i==="poster")l.fillStyle=oo(s,["#1F2D4E","#3E2A60","#E2443A"]),l.fillRect(0,0,c,h),l.fillStyle="#F2C230",l.beginPath(),l.arc(c/2,h*.4,c*.25,0,7),l.fill(),l.fillStyle="#FFF",l.font=`900 ${c*.13}px Inter, Arial`,l.textAlign="center",l.fillText(oo(s,["ROCK","GAMER","FUTEBOL","ESPA\xC7O"]),c/2,h*.85);else{l.fillStyle="#F4F1EA",l.fillRect(0,0,c,h);for(let u=0;u<6;u++)l.fillStyle=oo(s,fE),l.beginPath(),l.arc(s()*c,s()*h,10+s()*30,0,7),l.fill()}}),o=ni([0,0]);o.add(at(n+.08,t+.08,.04,"#7A5233",0,0,.02,{out:.008}));let a=sd(n,t,he(r),0,0,.042);return o.add(a),o}function Cc(n=2.2,t="#F4F1EA",e="#3A3A44"){let i=ni([n,.62]);i.add(at(n,.86,.58,t,0,.43,0,{out:.012,r:.02})),i.add(it(n+.02,.04,.62,e,0,.88,0,{out:.01}));let s=Math.round(n/.5);for(let a=0;a<s;a++){let l=-n/2+n/s*(a+.5);i.add(it(n/s-.03,.7,.01,t,l,.45,.295)),i.add(it(.12,.02,.02,"#9AA0A8",l+(a%2?-.12:.12),.7,.31))}i.add(it(.6,.02,.4,"#C9CED6",-n/4,.905,0)),i.add(it(.52,.03,.34,"#8D949C",-n/4,.9,0));let r=new Q;r.position.set(-n/4,.9,-.22),r.add(_t(.02,.02,.28,"#C9CED6",0,.14,0,{seg:8}));let o=_t(.015,.015,.2,"#C9CED6",0,.28,.08,{seg:8});return o.rotation.x=Math.PI/2,r.add(o),i.add(r),i.add(_t(.1,.09,.24,"#B5603E",n/2-.3,1.02,0,{out:.01})),i.add(_t(.11,.11,.03,"#8E4A2E",n/2-.3,1.15,0)),i.add(at(.3,.05,.2,"#F2C230",n/4,.93,.05)),i}function Fc(n="#F4F1EA"){let t=ni([.62,.62]);t.add(at(.6,.86,.6,n,0,.43,0,{out:.012,r:.02})),t.add(it(.5,.38,.01,"#2A2A30",0,.36,.301)),t.add(it(.44,.3,.01,"#4A4A52",0,.36,.305)),t.add(it(.6,.02,.6,"#2A2A30",0,.87,0));for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(_t(.08,.08,.02,"#4A4A52",s*.14,.89,r*.14,{seg:14})),t.add(_t(.05,.05,.03,"#1B1A20",s*.14,.9,r*.14,{seg:10}));for(let s=0;s<4;s++)t.add(_t(.025,.025,.03,"#1B1A20",-.2+s*.13,.8,.31,{rot:[Math.PI/2,0,0],seg:8}));t.add(it(.6,.5,.04,n,0,1.12,-.29));let e=new Q;e.position.set(.14,.9,.14),e.add(_t(.12,.11,.14,"#9AA0A8",0,.07,0,{out:.01})),e.add(_t(.125,.125,.015,"#8D949C",0,.15,0));let i=it(.2,.02,.03,"#2A2A30",.2,.1,0);return e.add(i),t.add(e),t}function Pc(n="#F4F1EA"){let t=ni([.72,.7]);t.add(at(.7,1.8,.68,n,0,.9,0,{out:.014,r:.05})),t.add(it(.66,.015,.01,"#C9CED6",0,1.25,.345)),t.add(it(.03,.4,.04,"#C9CED6",-.28,1.5,.36)),t.add(it(.03,.5,.04,"#C9CED6",-.28,.8,.36));for(let e=0;e<4;e++)t.add(at(.08,.06,.01,["#E2443A","#F2C230","#3E7CC8","#5AA84E"][e],-.1+e*.1-(e>1?.05:0),1.55-e%2*.12,.345));return t.add(at(.3,.26,.3,"#E8DCC8",0,1.93,0)),t}function lo(n="#9A6236"){let t=ni([.45,.45]);t.add(at(.42,.05,.42,n,0,.46,0,{out:.01}));for(let[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(it(.04,.46,.04,n,e*.18,.23,i*.18));return t.add(it(.04,.5,.04,n,-.18,.72,-.18)),t.add(it(.04,.5,.04,n,.18,.72,-.18)),t.add(at(.4,.2,.03,n,0,.85,-.19,{out:.01})),t}function Ic(n=1,t="#B87A4A"){let e=ni([n,.45]);e.add(at(n,.85,.44,t,0,.425,0,{out:.012}));for(let i=0;i<3;i++)e.add(it(n-.08,.22,.01,new xt(t).multiplyScalar(.88).getStyle(),0,.18+i*.25,.221)),e.add(it(.16,.02,.02,"#7A5233",0,.25+i*.25,.23));return e.add(_t(.06,.08,.03,"#F4F1EA",n/2-.2,.87,0)),e.add(at(.2,.25,.03,"#7A5233",-n/4,.98,-.1,{rot:[-.15,0,0]})),e}function ld(){let n=ni([.4,.65]);return n.add(Pe(new Ln(.19,.15,.4,18),"#FFFFFF",{pos:[0,.2,.05],out:.01})),n.add(_t(.2,.2,.04,"#F4F1EA",0,.42,.05,{out:.008})),n.add(at(.38,.38,.17,"#FFFFFF",0,.6,-.22,{out:.01})),n.add(it(.06,.02,.02,"#C9CED6",.12,.8,-.13)),n}function cd(n=!0){let t=ni([.55,.45]);return t.add(at(.55,.2,.45,"#FFFFFF",0,.78,0,{out:.01})),t.add(_t(.08,.1,.7,"#FFFFFF",0,.35,-.05,{seg:12})),t.add(_t(.016,.016,.16,"#C9CED6",0,.96,-.15,{seg:8})),n&&(t.add(at(.5,.7,.03,"#C9CED6",0,1.5,-.21,{out:.01})),t.add(new rt(new Bt(.44,.64),new ve({color:"#CFE6F2",emissive:"#9CC9E8",emissiveIntensity:.3})).translateY(1.5).translateZ(-.19))),t}var Lc=new Map,Bc=(n,t)=>(Lc.has(n)||Lc.set(n,t()),Lc.get(n)),Uc=(n,t=1,e=1)=>(n.wrapS=n.wrapT=xn,n.repeat.set(t,e),n);var Rr=n=>Bc("reb"+n,()=>Uc(qt(128,128,t=>{t.fillStyle=n,t.fillRect(0,0,128,128);let e=He(n.length*13);for(let i=0;i<160;i++)t.fillStyle=e()<.5?"rgba(0,0,0,.035)":"rgba(255,255,255,.05)",t.fillRect(e()*128,e()*128,3+e()*5,2+e()*4)})));var os=(n="madeira",t="#C8935E",e="#B98450")=>Bc("piso"+n+t+e,()=>Uc(qt(256,256,i=>{if(n==="madeira")for(let s=0;s<8;s++){i.fillStyle=s%2?t:e,i.fillRect(0,s*32,256,32),i.fillStyle="rgba(0,0,0,.12)",i.fillRect(0,s*32,256,2),i.fillRect(s*97%256,s*32,2,32),i.fillStyle="rgba(80,40,10,.08)";for(let r=0;r<4;r++)i.fillRect((s*37+r*61)%256,s*32+10+r*3,40,2)}else if(n==="xadrez")for(let s=0;s<4;s++)for(let r=0;r<4;r++)i.fillStyle=(s+r)%2?t:e,i.fillRect(s*64,r*64,64,64);else if(n==="granilite"){i.fillStyle=t,i.fillRect(0,0,256,256);let s=He(17);for(let r=0;r<900;r++)i.fillStyle=["#00000022","#FFFFFF33",e+"88"][r%3],i.fillRect(s()*256,s()*256,2+s()*4,2+s()*3)}else{i.fillStyle=t,i.fillRect(0,0,256,256),i.strokeStyle=e,i.lineWidth=4;for(let s=0;s<=4;s++)i.beginPath(),i.moveTo(s*64,0),i.lineTo(s*64,256),i.moveTo(0,s*64),i.lineTo(256,s*64),i.stroke();i.fillStyle="rgba(255,255,255,.08)",i.fillRect(8,8,40,20)}}))),Ua=(n="#F4F1EA",t="#D9E8EE",e="#7FB2C8")=>Bc("azu"+n+t+e,()=>Uc(qt(128,128,i=>{i.fillStyle=n,i.fillRect(0,0,128,128),i.fillStyle=t,i.fillRect(64,0,64,64),i.fillRect(0,64,64,64),i.strokeStyle=e,i.lineWidth=3,i.beginPath(),i.arc(96,32,14,0,7),i.arc(32,96,14,0,7),i.stroke(),i.strokeStyle="rgba(0,0,0,.14)",i.lineWidth=2,i.strokeRect(0,0,64,64),i.strokeRect(64,64,64,64),i.strokeRect(64,0,64,64),i.strokeRect(0,64,64,64)})));function Hc(){let n=new Q;n.add(_t(.17,.17,.36,"#5E7A99",0,.25,0,{seg:24,out:.008})),n.add(pe(.17,"#5E7A99",0,.43,0,{seg:24}).translateY(0)),n.children[1].scale.y=.45,n.add(_t(.17,.15,.08,"#4E6A88",0,.04,0,{seg:24,out:.006})),n.add(_t(.04,.05,.06,"#B9BEC6",0,.53,0,{seg:12}));let t=new rt(new je(.11,.018,8,24,Math.PI),Me("#4E6A88"));t.position.set(0,.52,0),n.add(t);let e=new rt(new Bt(.18,.12),he(qt(180,120,i=>{i.fillStyle="#F2C230",i.fillRect(0,0,180,120),i.fillStyle="#C0392B",i.font="900 40px Inter",i.textAlign="center",i.fillText("G\xC1S",90,60),i.font="700 22px Inter",i.fillText("13 kg",90,95)})));return e.position.set(0,.26,.172),n.add(e),n.userData.alca=[0,.62,0],n}function Nc(){let n=new Q;n.add(_t(.05,.038,.08,"#F4F1EA",0,.04,0,{seg:16,out:.005}));let t=_t(.044,.044,.004,"#5A3418",0,.074,0,{seg:16});n.add(t),n.userData.cafe=t;let e=new rt(new je(.022,.007,6,14),Me("#F4F1EA"));return e.position.set(.055,.045,0),n.add(e),n.add(_t(.075,.07,.01,"#F4F1EA",0,.005,0,{seg:18})),n}function hd(n="#2E6FB8"){let t=new Q;return t.add(at(.3,.38,.16,n,0,0,0,{out:.008,r:.05})),t.add(at(.22,.16,.06,new xt(n).multiplyScalar(.8).getStyle(),0,-.07,.1,{r:.03})),t}function ud(n="#3EA6FF"){let t=new Q,e=it(.012,.1,.01,n,0,.05,0),i=it(.012,.08,.01,n,0,.14,0);return i.add(it(.014,.03,.012,"#F4F1EA",0,.03,.008)),t.add(e,i),t.userData.cabo=e,t.userData.ponta=i,t}function dd(){let n=new Q;return n.add(_t(.02,.02,.08,"#C9CED6",0,0,.04,{rot:[Math.PI/2,0,0],seg:10,out:.004})),n.add(_t(.018,.018,.07,"#C9CED6",0,-.03,.08,{seg:10})),n.add(it(.06,.015,.015,"#C9CED6",0,.03,.03)),n}function Oc(n="#F4F1EA"){let t=new Q,e=at(.44,.04,.42,n,0,.44,0,{out:.006});t.add(e);let i=at(.44,.4,.04,n,0,.68,-.2,{out:.006});i.rotation.x=-.12,t.add(i);let s=[];for(let[r,o]of[[-.19,-.18],[.19,-.18],[-.19,.18],[.19,.18]]){let a=new Q;a.position.set(r,.43,o),a.add(_t(.02,.025,.44,n,0,-.22,0,{seg:8,out:.004})),t.add(a),s.push([a,r,o])}return t.abrir=r=>{e.position.y=.44-.38*r,i.position.y=.68-.38*r,i.rotation.x=-.12-.5*r,s.forEach(([o,a,l])=>{o.position.y=.43-.38*r,o.rotation.set(Math.sign(l)*1.4*r,0,-Math.sign(a)*1.4*r)})},t}function fd(){let n=new Q;n.add(at(.6,.04,.45,"#C9A06A",0,.72,0,{out:.006})),n.add(it(.04,.7,.04,"#4A4E58",-.26,.35,-.18)),n.add(it(.04,.7,.04,"#4A4E58",.26,.35,-.18)),n.add(it(.04,.7,.04,"#4A4E58",-.26,.35,.18)),n.add(it(.04,.7,.04,"#4A4E58",.26,.35,.18));let t=n.children[0];return n.userData.tampo=t,n}function Ds(n=.4){let t=new Q;t.add(it(.008,n,.008,"#2A2A30",0,-n/2,0));let e=new rt(new ie(.045,14,10),new ve({color:"#FFF2C8",emissive:"#FFE6A0",emissiveIntensity:1}));return e.position.y=-n-.03,t.add(e),t.userData.bulbo=e,t}var pd=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=xn,i.repeat.set(t,e),i.needsUpdate=!0,i},Ha=(n,t,e,i,s,r,o=0,a=0)=>{let l=new rt(new Bt(n,t),e);return l.position.set(i,s,r),l.rotation.set(o,a,0),l.receiveShadow=!0,l},gE=(n,t=1,e=1)=>he(pd(Rr(n),t,e));function md(n,t={}){Wn(n,{r:8,pos:[5,7,2],ki:1.4,hemi:1.4}),n.add(new bn("#FFF4E6",.45));let e=new Q;n.add(e);let i=7,s=7.5,r=3;e.add(Ha(i,s,he(pd(os("ceramica","#D8CDB4","#C4B89E"),7,7)),0,0,0,-Math.PI/2));for(let[E,m,p,b]of[[i,0,-s/2,0],[i,0,s/2,Math.PI],[s,-i/2,0,Math.PI/2],[s,i/2,0,-Math.PI/2]])e.add(Ha(E,1.1,Me("#3E8A6A"),m,.55,p,0,b)),e.add(Ha(E,1.9,gE("#F2E6C8",3,1),m,2.05,p,0,b));e.add(Ha(i,s,Me("#F4F0E8"),0,r,0,Math.PI/2));let o=it(3.6,1.3,.05,"#2E5A44",0,1.65,-s/2+.04,{out:.008});e.add(o),e.add(it(3.7,.06,.12,"#9A7A5A",0,.98,-s/2+.08));let a=new rt(new Bt(3.4,1.1),new re({transparent:!0,map:qt(1024,330,E=>{if(t.giz){t.giz(E);return}E.strokeStyle="#F4F1EA",E.fillStyle="#F4F1EA",E.font="600 48px Caveat",E.fillText("F\xEDsica \u2014 For\xE7a e Movimento",40,70),E.font="700 72px Caveat",E.fillText("F = m \xB7 a",80,180),E.font="600 40px Caveat",E.fillText("1 kgf \u2248 9,8 N",520,170),E.lineWidth=4,E.beginPath(),E.moveTo(560,250),E.lineTo(820,250),E.lineTo(800,236),E.moveTo(820,250),E.lineTo(800,264),E.stroke()})}));a.position.set(0,1.65,-s/2+.07),e.add(a);let l=new Q;l.position.set(2.2,2.45,-s/2+.04),e.add(l),l.add(_t(.22,.22,.05,"#F4F1EA",0,0,0,{rot:[Math.PI/2,0,0],seg:28,out:.006}));let c=new rt(new je(.22,.02,8,28),Me("#2A2A30"));l.add(c);for(let E=0;E<12;E++){let m=E/12*6.283;l.add(it(.012,E%3?.02:.04,.01,"#2A2A30",Math.sin(m)*.18,Math.cos(m)*.18,.03))}let h=new Q,u=new Q;h.add(it(.016,.11,.01,"#1E1E22",0,.05,0)),u.add(it(.01,.17,.01,"#1E1E22",0,.08,0)),h.position.z=.035,u.position.z=.04,l.add(h,u),l.add(pe(.012,"#C0392B",0,0,.045,{seg:8})),l.hora=(E,m)=>{u.rotation.z=-m/60*6.283,h.rotation.z=-(E%12+m/60)/12*6.283};let d=[];for(let E=0;E<4;E++)for(let m=0;m<5;m++){let p=fd();p.position.set(-2.4+m*1.2,0,-1.4+E*1.3),e.add(p),d.push(p);let b=lo("#4A4E58");b.position.set(-2.4+m*1.2,0,-1+E*1.3),b.rotation.y=Math.PI,e.add(b)}for(let E=0;E<3;E++){let m=new rt(new Bt(1.4,1.1),new re({color:"#CFE6F4"}));m.position.set(i/2-.02,1.9,-2+E*2.2),m.rotation.y=-Math.PI/2,e.add(m),e.add(it(.08,.06,1.5,"#E8E2D6",i/2-.05,1.33,-2+E*2.2))}let f=new fi("#FFE8C0",14,12,.7,.6,1.2);f.position.set(i/2+2,3.5,0),f.target.position.set(0,0,0),n.add(f,f.target);let g=at(1.2,.06,.6,"#9A6236",-1.8,.76,-s/2+1.1,{out:.008});return e.add(g),e.add(it(1.1,.7,.5,"#7A4E2E",-1.8,.36,-s/2+1.1)),{g:e,relogio:l,carteiras:d,D:s,W:i}}var zc=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=xn,i.repeat.set(t,e),i.needsUpdate=!0,i},gd=(n,t,e,i,s,r,o=0,a=0)=>{let l=new rt(new Bt(n,t),e);return l.position.set(i,s,r),l.rotation.set(o,a,0),l.receiveShadow=!0,l};var EE=n=>he(zc(Rr(n),1,1));var yE=.27,vE=8;var ME=1.5,HM=ME-vE*yE;function Ed(n,t,e,i,s={}){let r=new Q;n.add(r),r.add(gd(t,e,he(zc(os(...s.piso||["ceramica","#D8CFBE","#C4B9A4"]),t*1.2,e*1.2)),0,0,0,-Math.PI/2));let o=s.azul?he(zc(Ua("#F6F4EE","#E2E6E4","#B8C8C8"),t/.8,i/.8)):EE(s.parede||"#EDE6D6"),a=[[t,0,-e/2,0],[t,0,e/2,Math.PI],[e,-t/2,0,Math.PI/2],[e,t/2,0,-Math.PI/2]].map(([c,h,u,d])=>{let f=gd(c,i,o,h,i/2,u,0,d);return r.add(f),f}),l=new rt(new Bt(t,e),Me("#F4F0E8"));l.rotation.x=Math.PI/2,l.position.y=i,r.add(l);for(let[c,h,u,d]of[[0,-e/2+.01,t,.02],[0,e/2-.01,t,.02],[-t/2+.01,0,.02,e],[t/2-.01,0,.02,e]])r.add(it(u,.08,d,"#C8BEAE",c,.04,h,{shadow:!1}));return{g:r,paredes:a}}function wr(n,t,e="manha",i=1){let s={manha:["#8CC8F0","#E8F4FA","#F4E0B0"],tarde:["#F2A65A","#F7D28A","#E8B070"],noite:["#141A38","#2A2E58","#F2C76A"],madrugada:["#2E3A6A","#6A6E9A","#E8C88A"]}[e],r=qt(512,360,l=>{let c=l.createLinearGradient(0,0,0,360);c.addColorStop(0,s[0]),c.addColorStop(1,s[1]),l.fillStyle=c,l.fillRect(0,0,512,360);let h=He(i);for(let u=0;u<9;u++){let d=40+h()*40,f=120+h()*160,g=u*58-10;l.fillStyle=e==="noite"||e==="madrugada"?"#1E2238":["#D8CDB8","#C8B8A0","#E2D2BC","#B8A890"][u%4],l.fillRect(g,360-f,d,f);for(let E=0;E<6;E++)for(let m=0;m<3;m++)l.fillStyle=e==="noite"||e==="madrugada"?h()>.55?s[2]:"#2A2E44":"#8EA6B8",l.fillRect(g+6+m*(d/3),360-f+12+E*24,d/3-10,12)}}),o=new Q,a=new rt(new Bt(n,t),new re({map:r}));o.add(a);for(let l of[-1,1])o.add(it(.05,t+.05,.06,"#E8E2D6",l*n/2,0,.02));return o.add(it(n,.05,.06,"#E8E2D6",0,t/2,.02)),o.add(it(n+.14,.05,.14,"#E8E2D6",0,-t/2,.06)),o.add(it(.03,t,.03,"#E8E2D6",0,0,.02)),o.userData.vidro=a,o}function yd(n){Wn(n,{r:5,pos:[2,6,3],ki:1.2,hemi:1.5}),n.add(new bn("#FFF4E6",.5));let t=2,e=2.2,i=2.5,{g:s}=Ed(n,t,e,i,{azul:!0,piso:["ceramica","#B8C8C8","#A0B4B4"]}),r=cd(!0);r.position.set(.3,0,-e/2+.25),n.add(r);let o=ld();o.position.set(-.55,0,-e/2+.35),n.add(o);let a=_t(.03,.025,.09,"#3EA6FF",.55,.925,-e/2+.2,{seg:10,out:.003});n.add(a);let l=new Q;l.position.set(0,0,e/2-.02),n.add(l),l.add(it(.8,2.05,.04,"#E8E2D6",0,1.03,0,{out:.006}));let c=new Q;c.position.set(-.3,1,-.04),l.add(c),c.add(_t(.02,.02,.05,"#C9A030",0,0,0,{rot:[Math.PI/2,0,0],seg:8})),c.add(it(.12,.02,.02,"#C9A030",.05,0,-.03));let h=dd();h.position.set(.3,.98,-e/2+.05),n.add(h);let u=Ds(.15);return u.position.set(0,i,0),n.add(u),{g:s,pia:r,porta:l,macaneta:c,torneira:h,copo:a,W:t,D:e}}function kc(n,t={}){Wn(n,{r:6,pos:[2,6,4],ki:1,hemi:1.3,key:"#FFE8C8"}),n.add(new bn("#FFE9D0",.5));let e=3.6,i=3.2,s=2.6,{g:r}=Ed(n,e,i,s,{parede:"#E8D8B8",piso:["madeira","#A87A4E","#966A42"]}),o=rd(1.8,"#7A6A5A");o.position.set(-.6,0,-i/2+.5),n.add(o);let a=at(1,.04,.7,"#C84E4E",-.9,.78,-i/2+.62,{out:.005});a.rotation.x=-.5,n.add(a);let l=od(1,"#7A5236");l.position.set(1.2,0,i/2-.3),l.rotation.y=Math.PI,n.add(l);let c=new Q;c.position.set(1.2,.5,i/2-.32),c.rotation.y=Math.PI,n.add(c),c.add(at(.62,.5,.45,"#3A3A40",0,.25,-.05,{out:.008}));let h=new rt(new Bt(.48,.36),new ve({color:"#5A6A7A",emissive:"#3A4A5A",emissiveIntensity:.4}));h.position.set(0,.26,.18),c.add(h);let u=new Q;u.position.set(.2,0,.35),n.add(u),u.add(at(.9,.04,.6,"#9A6236",0,.74,0,{out:.008})),u.add(it(.86,.01,.58,"#F4F1EA",0,.765,0));for(let[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])u.add(it(.05,.72,.05,"#7A4E2E",m*.38,.36,p*.24));let d=wr(1.1,1,"tarde",6);d.position.set(e/2-.02,1.55,-.4),d.rotation.y=-Math.PI/2,n.add(d);let f=new rt(new Bt(.5,.3),new re({transparent:!0,map:qt(250,150,m=>{m.strokeStyle="#2F4A3A",m.lineWidth=6;for(let p=0;p<9;p++)m.beginPath(),m.moveTo(20+p*26,10),m.quadraticCurveTo(30+p*26+(p>2&&p<7?30:0),80,20+p*26,145),m.stroke();m.beginPath(),m.moveTo(10,14),m.quadraticCurveTo(125,60,240,14),m.stroke(),m.beginPath(),m.moveTo(10,140),m.lineTo(240,140),m.stroke()})}));f.position.set(e/2-.04,1.25,-.35),f.rotation.y=-Math.PI/2,n.add(f);for(let m=0;m<2;m++){let p=wc(.5,.4,30+m,"paisagem");p.position.set(-e/2+.02,1.7,-.6+m*.9),p.rotation.y=Math.PI/2,n.add(p)}let g=ad(.9,4);g.position.set(-e/2+.35,0,i/2-.35),n.add(g);let E=Ds(.3);return E.position.set(0,s,.2),n.add(E),{g:r,mesa:u,sofa:o,tv:c,janela:d,W:e,D:i,Hh:s,manta:a}}var Cr=(n,t,e=20)=>Pe(new ts(n.map(([i,s])=>new tt(i,s)),e),t,{out:.004});function _E(n,t=!0,e=1){let i=t?"#F2EBDA":"#2A2630",s=new Q,r=[[0,0],[.018,0],[.018,.006],[.014,.009],[.011,.012]];if(n==="p")s.add(Cr([...r,[.007,.03],[.009,.032],[0,.033]],i)),s.add(pe(.0095,i,0,.04,0,{out:.003,seg:14}));else if(n==="t")s.add(Cr([...r,[.011,.042],[.014,.044],[.014,.056],[0,.056]],i));else if(n==="c"){s.add(Cr([...r,[.01,.03],[0,.03]],i));let o=at(.016,.036,.03,i,0,.046,.002,{out:.003,r:.006});o.rotation.x=-.35,s.add(o),s.add(at(.014,.014,.024,i,0,.056,.016,{out:.003,r:.005}))}else if(n==="b")s.add(Cr([...r,[.007,.044],[.011,.05],[.006,.064],[0,.066]],i)),s.add(pe(.0035,i,0,.069,0,{seg:8}));else if(n==="d"){s.add(Cr([...r,[.008,.052],[.013,.058],[.011,.066],[.006,.07],[0,.072]],i));for(let o=0;o<6;o++){let a=o/6*6.283;s.add(pe(.003,i,Math.cos(a)*.011,.069,Math.sin(a)*.011,{seg:6}))}}else n==="r"&&(s.add(Cr([...r,[.008,.056],[.013,.062],[.011,.07],[0,.072]],i)),s.add(it(.004,.02,.004,i,0,.082,0,{out:.002})),s.add(it(.014,.004,.004,i,0,.084,0,{out:.002})));return s.scale.setScalar(e),s.userData={tipo:n,branca:t},s}var bE=["tcbdrbct","pppppppp","","","","","pppppppp","tcbdrbct"];function Gc(n=.045,t={}){let e=new Q,i=n*8;e.add(at(i+n*.8,.02,i+n*.8,t.borda||"#6A4022",0,.01,0,{out:.006,r:.006}));let s=qt(512,512,(h,u)=>{for(let d=0;d<8;d++)for(let f=0;f<8;f++)h.fillStyle=(d+f)%2?t.escura||"#7A9A5A":t.clara||"#EEE8D0",h.fillRect(d*u/8,f*u/8,u/8,u/8)}),r=new rt(new Bt(i,i),he(s));r.rotation.x=-Math.PI/2,r.position.y=.0205,e.add(r);let o=h=>{let u=h.charCodeAt(0)-97,d=+h[1]-1;return new R((u-3.5)*n,.021,(3.5-d)*n)},a={},l=n/.045;t.pecas!==!1&&bE.forEach((h,u)=>{[...h].forEach((d,f)=>{let g=String.fromCharCode(97+f)+(8-u),E=u>=4,m=_E(d,E,l);m.position.copy(o(g)),d==="c"&&(m.rotation.y=E?0:Math.PI),e.add(m),a[g]=m})});let c=(h,u,d,f)=>{let g=o(u),E=o(d),m=Cn(Pt(f));h.position.lerpVectors(g,E,m),h.position.y+=Math.sin(Math.PI*m)*n*.9};return e.userData={P:a,casa:o,s:n},{g:e,P:a,casa:o,move:c,s:n}}function Md(){let n=new Q,t=at(.2,.08,.08,"#2A2630",0,.04,0,{out:.005,r:.012});t.rotation.x=0,n.add(t);let e=document.createElement("canvas");e.width=512,e.height=160;let i=e.getContext("2d"),s=new mn(e);s.colorSpace=Fe;let r=new rt(new Bt(.18,.056),new re({map:s}));r.position.set(0,.045,.041),n.add(r);let o=[-.05,.05].map(l=>{let c=_t(.012,.012,.02,"#E2443A",l,.085,0,{out:.003,seg:12});return n.add(c),c}),a=(l,c,h=0)=>{i.fillStyle="#1A1A1E",i.fillRect(0,0,512,160);for(let[u,d]of[[0,l],[1,c]])i.fillStyle="#B8E8C8",i.fillRect(16+u*256,16,224,128),i.fillStyle="#16301E",i.font="700 86px 'IBM Plex Mono'",i.textAlign="center",i.textBaseline="middle",i.fillText(d,128+u*256,84);s.needsUpdate=!0,o[0].position.y=h===0?.08:.086,o[1].position.y=h===1?.08:.086};return a("10:00","10:00"),n.userData.set=a,n}function _d(n={}){let t=new Q,e=n.cor||"#C9893E",i=new Q;t.add(i);for(let[o,a]of[[.17,-.02],[.13,.2]]){let l=_t(o,o,.09,e,a,0,0,{rot:[Math.PI/2,0,0],out:.006,seg:28});i.add(l)}let s=_t(.055,.055,.002,"#2A1A12",.07,0,.046,{rot:[Math.PI/2,0,0],seg:20});i.add(s),i.add(it(.03,.1,.012,"#4A2A16",-.09,0,.05));let r=it(.5,.05,.025,"#5A361E",.58,0,.03,{out:.005});t.add(r),t.add(at(.12,.07,.03,"#3A2214",.88,0,.03,{out:.005}));for(let o=0;o<6;o++)n.semCorda!==o&&t.add(it(.86,.0025,.0025,"#E8E0C8",.44,-.018+o*.0072,.052,{shadow:!1}));if(n.teia){let o=new rt(new Bt(.3,.3),new re({transparent:!0,depthWrite:!1,map:qt(256,256,a=>{a.strokeStyle="rgba(240,240,240,.8)",a.lineWidth=2;for(let l=0;l<8;l++){let c=l/8*6.283;a.beginPath(),a.moveTo(128,128),a.lineTo(128+Math.cos(c)*128,128+Math.sin(c)*128),a.stroke()}for(let l=20;l<128;l+=22)a.beginPath(),a.arc(128,128,l,0,7),a.stroke()})}));o.position.set(-.1,.1,.05),t.add(o),t.userData.teia=o}return t.userData.corpo=i,t}function vd(n,t,e,i={}){n.fillStyle="#FBF7EC",n.fillRect(0,0,t,e);let s=(u,d=10)=>{n.strokeStyle=u,n.fillStyle=u,n.lineWidth=d*t/1024,n.lineCap="round",n.lineJoin="round"},r=u=>u*t/1024,o=u=>u*e/768;s("#4FB04A",14);for(let u=0;u<70;u++){let d=520+u%14*16;n.beginPath(),n.moveTo(r(60+u*37%60),o(d)),n.lineTo(r(960-u*53%70),o(d+Math.sin(u)*8)),n.stroke()}s("#8A8A8A",10);for(let u of[120,900])n.beginPath(),n.arc(r(u),o(520),r(22),0,7),n.fill();s("#F2C230",10),n.beginPath(),n.arc(r(900),o(110),r(55),0,7),n.fill();for(let u=0;u<10;u++){let d=u/10*6.283;n.beginPath(),n.moveTo(r(900+Math.cos(d)*70),o(110+Math.sin(d)*70)),n.lineTo(r(900+Math.cos(d)*100),o(110+Math.sin(d)*100)),n.stroke()}let a=(u,d,f,g,E,m)=>{let p=f*.22;s("#2A2A30",9),n.beginPath(),n.moveTo(r(u-f*.08),o(d)),n.lineTo(r(u-f*.04),o(d-f*.38)),n.moveTo(r(u+f*.08),o(d)),n.lineTo(r(u+f*.04),o(d-f*.38)),n.stroke(),s(g,12),n.beginPath(),n.moveTo(r(u-f*.13),o(d-f*.36)),n.lineTo(r(u+f*.13),o(d-f*.36)),n.lineTo(r(u+f*.11),o(d-f*.72)),n.lineTo(r(u-f*.11),o(d-f*.72)),n.closePath(),n.fill(),s("#E3AE86",9);let b=d-f*.68;E?(n.beginPath(),n.moveTo(r(u-f*.11),o(b)),n.lineTo(r(u-f*.3),o(b-f*.3)),n.moveTo(r(u+f*.11),o(b)),n.lineTo(r(u+f*.3),o(b-f*.3)),n.stroke()):(n.beginPath(),n.moveTo(r(u-f*.11),o(b)),n.lineTo(r(u-f*.26),o(b+f*.2)),n.moveTo(r(u+f*.11),o(b)),n.lineTo(r(u+f*.28),o(b+f*.12)),n.stroke());let A=d-f*.72-p;if(n.fillStyle="#E3AE86",n.beginPath(),n.arc(r(u),o(A),r(p),0,7),n.fill(),s("#2A2A30",6),n.beginPath(),n.arc(r(u),o(A),r(p),0,7),n.stroke(),s("#4A2A18",14),n.beginPath(),n.arc(r(u),o(A-p*.2),r(p*.95),Math.PI*1.05,Math.PI*1.95),n.stroke(),s("#2A2A30",7),m)n.beginPath(),n.arc(r(u-p*.35),o(A-p*.05),r(5),0,7),n.fill(),n.beginPath(),n.moveTo(r(u+p*.2),o(A-p*.05)),n.lineTo(r(u+p*.5),o(A-p*.05)),n.stroke(),n.beginPath(),n.arc(r(u),o(A+p*.35),r(p*.35),0,Math.PI),n.stroke(),s("#F2546E",8),n.beginPath(),n.ellipse(r(u+p*.05),o(A+p*.72),r(p*.14),o(p*.2),0,0,7),n.fill();else{for(let y of[-1,1])n.beginPath(),n.arc(r(u+y*p*.35),o(A-p*.05),r(5),0,7),n.fill();n.beginPath(),n.arc(r(u),o(A+p*.2),r(p*.45),.2,Math.PI-.2),n.stroke()}};a(330,600,330,"#8E949C",!0,!1),a(640,610,210,"#F2C230",!1,!0),s("#2A2A30",6),n.fillStyle="#FFFFFF",n.beginPath(),n.arc(r(745),o(590),r(26),0,7),n.fill(),n.stroke(),n.fillStyle="#2A2A30",n.beginPath(),n.arc(r(745),o(590),r(9),0,7),n.fill();let l=i.brilho||0;n.save(),n.translate(r(512),o(120)),n.rotate(-.04),l>0&&(n.shadowColor=`rgba(255,220,120,${l})`,n.shadowBlur=40*l*t/1024),n.fillStyle="#2E5EC8",n.font=`700 ${Math.round(74*t/1024)}px Caveat`,n.textAlign="center",n.textBaseline="middle";let c="o melhor dia da minha vida",h=-n.measureText(c).width/2;for(let u=0;u<c.length;u++){let d=c[u],f=n.measureText(d).width;n.save(),n.translate(h+f/2,Math.sin(u*1.7)*6*t/1024),n.rotate(Math.sin(u*2.3)*.08),n.fillText(d,0,0),n.restore(),h+=f}n.restore()}function ii(n={}){let t=n.w||.3,e=n.h||.225,i=new Q,s=document.createElement("canvas");s.width=1024,s.height=768;let r=s.getContext("2d");vd(r,1024,768,{});let o=new mn(s);o.colorSpace=Fe;let a=qt(64,64,b=>{b.fillStyle="#F4EFE0",b.fillRect(0,0,64,64),b.fillStyle="#4FB04A55",b.fillRect(40,40,24,24)}),l=[],c=(b,A)=>{let y=new Bt(t/2,e/2),C=y.attributes.uv;for(let F=0;F<C.count;F++)C.setXY(F,(C.getX(F)+b)/2,(C.getY(F)+A)/2);let x=new rt(y,[new ve({map:o,side:hi})][0]),w=new rt(y,new ve({map:a,side:$e}));return x.add(w),ws(x,.002),x},h=new Q;i.add(h);let u=new Q;h.add(u);let d=new Q;h.add(d);for(let[b,A]of[[d,0],[u,1]]){let y=new Q;b.add(y);let C=new Q;b.add(C);let x=c(A,0);x.position.set((A?1:-1)*t/4,-e/4,0),y.add(x);let w=c(A,1);w.position.set((A?1:-1)*t/4,e/4,0),C.add(w),l.push({lado:b,baixo:y,cima:C})}let f=new Q;i.add(f);let g=at(t/2,e/2,.006,"#F4EFE0",-t/4,-e/4,0,{out:.002,r:.002});f.add(g);let E=new rt(new Bt(t/2*.9,.002),new re({color:"#C8C0A8"}));E.position.set(-t/4,-e/4,.0035),f.add(E);let m=new rt(new Bt(.02,.015),new re({color:"#4FB04A"}));m.position.set(-t/2+.015,-e/2+.012,.0035),f.add(m);let p=(b=0,A=0)=>{b=Pt(b);let y=b<.015;f.visible=y,h.visible=!y;let C=Cn(Pt(b*2)),x=Cn(Pt(b*2-1));for(let w of l)w.cima.rotation.x=-(1-C)*Math.PI*.98,w.cima.position.z=(1-C)*.002;l[1].lado.rotation.y=-(1-x)*Math.PI*.98,l[1].lado.position.z=(1-x)*.004,A!==i.userData.br&&(i.userData.br=A,vd(r,1024,768,{brilho:A}),o.needsUpdate=!0)};return p(n.aberta??0),i.userData.set=p,i.set=p,i}function Vc(n=0){let t=new Q,e=Pe(new ts([[0,0],[.035,.006],[.045,.025],[.04,.05],[.022,.075],[.006,.09],[0,.092]].map(([r,o])=>new tt(r,o)),18),"#D9892E",{out:.004});t.add(e);let i=pe(.03,"#F4E6C0",.02,.06,.02,{seg:12});i.visible=!1,t.add(i);let s=pe(.012,"#FFF8E8",.03,.055,.03,{seg:10});return s.visible=!1,t.add(s),t.userData.morde=r=>{i.visible=r>0,s.visible=r>.5,s.position.y=.055-(r-.5)*.03},t.userData.morde(n),t}function Wc(n,t,e=.21,i=.297){let s=new rt(new Bt(e,i),he(qt(512,724,(r,o,a)=>{r.fillStyle="#FBF8EE",r.fillRect(0,0,o,a),r.fillStyle="#2A2A30",r.font="800 34px Inter",r.fillText("PROVA \u2014 HIST\xD3RIA",40,60),r.strokeStyle="#B8BCC4",r.lineWidth=3;for(let l=120;l<a-40;l+=44)r.beginPath(),r.moveTo(40,l),r.lineTo(o-40,l),r.stroke();r.strokeStyle=t,r.lineWidth=10,r.beginPath(),r.arc(o-120,150,80,0,7),r.stroke(),r.fillStyle=t,r.font="700 120px Caveat",r.textAlign="center",r.textBaseline="middle",r.fillText(n,o-120,158)})));return s.rotation.x=-Math.PI/2,s}function co(){let n=new Q,t=pe(.06,"#D9A050",0,.02,0,{out:.004,seg:16});t.scale.set(1.4,.4,.8),n.add(t);let e=it(.15,.004,.08,"#F4E6C0",0,.04,0);n.add(e);let i=it(.14,.003,.074,"#FFE680",0,.043,0);return i.material=Me("#FFE680",{emissive:"#FFE680",emissiveIntensity:.1}),n.add(i),n.userData.passa=s=>{i.scale.x=Math.max(.01,s),i.position.x=-.07+.07*s},n}function bd(){let n=new Q;return n.add(it(.08,.004,.016,"#C9CED6",.05,0,0,{out:.002})),n.add(it(.07,.012,.014,"#3A2A20",-.03,0,0,{out:.002})),n}function ho(n,t,e=512,i=!0){let s=document.createElement("canvas");s.width=e,s.height=Math.round(e*t/n);let r=s.getContext("2d"),o=new mn(s);o.colorSpace=Fe,o.anisotropy=8;let a=new rt(new Bt(n,t),i?new re({map:o,toneMapped:!1}):he(o)),l=null;return a.paint=(c,h)=>(c!==l&&(l=c,r.setTransform(1,0,0,1,0,0),h(r,s.width,s.height),o.needsUpdate=!0),a),a}var AE="#E8742A";function Xc(n,t,e,i){n.fillStyle="#FBF8EE",n.fillRect(0,0,t,e),n.strokeStyle="#9CC4E4",n.lineWidth=2;for(let s=e*.14;s<e;s+=e*.062)n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke();n.strokeStyle="#E88A8A",n.lineWidth=3,n.beginPath(),n.moveTo(t*.12,0),n.lineTo(t*.12,e),n.stroke(),i&&i(n,t,e)}var Ad=(n,t,e,i,s,r="#2A3A7A",o="left")=>{n.fillStyle=r,n.font=`700 ${s}px Caveat`,n.textAlign=o,n.textBaseline="middle",n.fillText(t,e,i)};function Td(){let n=new Q;n.add(at(.62,.02,.4,AE,0,.01,0,{r:.006,out:.004}));let t=ho(.29,.38,512,!1),e=ho(.29,.38,512,!1);return t.rotation.x=e.rotation.x=-Math.PI/2,t.position.set(-.148,.023,0),e.position.set(.148,.023,0),n.add(t,e),n.add(_t(.006,.006,.38,"#9EA6B0",0,.03,0,{rot:[Math.PI/2,0,0],seg:6})),n.userData={E:t,D:e},n}var Bs=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=xn,i.repeat.set(t,e),i.needsUpdate=!0,i},cn=(n,t,e,i,s,r,o=0,a=0)=>{let l=new rt(new Bt(n,t),e);return l.position.set(i,s,r),l.rotation.set(o,a,0),l.receiveShadow=!0,l},Fr=(n,t=1,e=1)=>he(Bs(Rr(n),t,e)),Ls=(n,t,e,i,s,r,o=900,a="center",l="Inter")=>{n.fillStyle=r,n.font=`${o} ${s}px ${l}`,n.textAlign=a,n.textBaseline="middle",n.fillText(t,e,i)};function Na(n,t,e,i,s,r={}){let o=he(Bs(os(...r.piso||["madeira","#A87A4E","#966A42"]),e*1.1,i*1.1));n.add(cn(e,i,o,t,0,0,-Math.PI/2));let a=r.azul?he(Bs(Ua("#F6F4EE","#E2E6E4","#B8C8C8"),e/.8,s/.8)):Fr(r.parede||"#EDE6D6"),l={};l.fundo=cn(e,s,a,t,s/2,-i/2,0,0),n.add(l.fundo),l.frente=cn(e,s,a,t,s/2,i/2,0,Math.PI),n.add(l.frente),l.esq=cn(i,s,a,t-e/2,s/2,0,0,Math.PI/2),n.add(l.esq),l.dir=cn(i,s,a,t+e/2,s/2,0,0,-Math.PI/2),n.add(l.dir),l.teto=cn(e,i,Me("#F4F0E8"),t,s,0,Math.PI/2),n.add(l.teto);for(let[c,h,u,d]of[[t,-i/2+.01,e,.02],[t-e/2+.01,0,.02,i],[t+e/2-.01,0,.02,i]])n.add(it(u,.08,d,"#C8BEAE",c,.04,h,{shadow:!1}));return l}function qc(n,t,e,i=1,s="#8A6040"){let r=new Q;r.position.set(t,0,e),n.add(r);for(let a of[-1,1])r.add(it(.1,2.12,.07,"#B88A5E",0,1.06,a*.44,{out:.005}));r.add(it(.1,.07,.95,"#B88A5E",0,2.12,0,{out:.005}));let o=new Q;return o.position.set(0,0,-.4),r.add(o),o.add(it(.035,2.05,.8,s,0,1.03,.4,{out:.005})),o.add(pe(.025,"#C9A030",i*.03,1,.72,{seg:8})),r.folha=o,r.abre=a=>{o.rotation.y=-i*a*1.6},r}function Sd(n,t={}){let e=t.hora||"manha",i=e==="noite",s=Wn(n,{r:9,pos:i?[2,6,3]:[3,8,6],ki:i?.45:1.5,hemi:i?.7:1.5,sky:i?"#8E9CD0":"#EAF2FF",key:i?"#9FB4F0":"#FFF2DC"});n.add(new bn(i?"#6A78B8":"#FFF4E6",i?.35:.45));let r=new Q;n.add(r);let o=3,a=2.6,l=Na(r,-3.1,3,o,a,{azul:!0,piso:["ceramica","#C9BBA4","#B5A68C"]}),c=Fc("#F4F1EA");c.position.set(-4,0,-o/2+.34),r.add(c);let h=[];for(let yt=0;yt<2;yt++){let dt=new rt(new di(.035,.06,10,1,!0),new re({color:"#5AB0FF",transparent:!0,opacity:.85}));dt.position.set(-4.12+yt*.24,.93,-o/2+.3),r.add(dt),h.push(dt)}let u=new Q;u.position.set(-4.12,.92,-o/2+.3),r.add(u),u.add(_t(.11,.1,.12,"#9EA6B0",0,.06,0,{out:.004,seg:16})),u.add(it(.18,.015,.02,"#2A2A30",.17,.1,0));let d=Hc();d.scale.setScalar(.65),d.position.set(-4.45,0,-o/2+.25),r.add(d);let f=Cc(1.3,"#F4F1EA","#8E8678");f.position.set(-2.85,0,-o/2+.32),r.add(f);let g=Pc("#F4F1EA");g.position.set(-1.98,0,-o/2+.38),r.add(g);let E=wr(.9,.8,e,2);E.position.set(-3.1,1.6,-o/2+.02),r.add(E);let m=new Q;m.position.set(-3,0,.45),r.add(m);let p=qt(256,256,yt=>{for(let dt=0;dt<8;dt++)for(let S=0;S<8;S++)yt.fillStyle=(dt+S)%2?"#3E7CC8":"#F6F2EA",yt.fillRect(dt*32,S*32,32,32)});{let yt=new rt(new Ge(1.12,.012,.82),he(Bs(p,2,1.5)));yt.position.y=.77,m.add(yt)}m.add(at(1,.04,.7,"#B87A4A",0,.745,0));for(let[yt,dt]of[[-1,-1],[1,-1],[-1,1],[1,1]])m.add(it(.05,.72,.05,"#9A6236",yt*.44,.36,dt*.29));let b=[[-.55,0,Math.PI/2],[.55,0,-Math.PI/2],[0,-.62,0]].map(([yt,dt,S])=>{let v=Oc();return v.position.set(-3+yt,0,.45+dt),v.rotation.y=S,r.add(v),v}),A=Ds(.3);A.position.set(-3.1,a,.2),r.add(A);let y=new rn("#FFE2AE",i?6:2,6,1.6);y.position.set(-3.1,2.1,.2),r.add(y);let C=Na(r,0,3,o,a,{parede:"#B8D0DC",piso:["madeira","#9A6A42","#8A5E3A"]}),x=new Q;x.position.set(.95,0,-.45),r.add(x),x.add(at(.95,.3,1.95,"#8A5A36",0,.17,0,{out:.01})),x.add(at(.95,.7,.06,"#7A4E2E",0,.55,-.98,{out:.01})),x.add(at(.88,.1,1.85,"#F4F1EA",0,.37,0,{out:.008}));let w=at(.6,.14,.3,"#F4F1EA",0,.49,-.8,{out:.006});x.add(w);let F=at(.92,.05,1.2,"#3E6EC8",0,.44,.3,{out:.006});x.add(F);let T=new Q;T.position.set(-1.12,0,.2),r.add(T),T.add(at(.6,.04,1.05,"#F4F1EA",0,.74,0,{out:.008}));for(let[yt,dt]of[[-1,-1],[1,-1],[-1,1],[1,1]])T.add(it(.04,.72,.04,"#C9CED6",yt*.26,.36,dt*.48));let M=Td();M.position.set(.02,.76,.05),M.rotation.y=-Math.PI/2,M.scale.setScalar(.8),T.add(M);let P=new Q;P.position.set(-.16,.76,-.38),T.add(P),P.add(_t(.06,.07,.02,"#2A2A30",0,.01,0)),P.add(_t(.01,.01,.3,"#2A2A30",0,.16,0));let W=_t(.05,.1,.12,"#F2C230",0,.32,0,{out:.004});P.add(W);let O=new rn("#FFD89A",0,3,1.6);O.position.set(-.1,1,-.2),T.add(O);let I=lo("#3E6EC8");I.position.set(-.55,0,.25),I.rotation.y=-Math.PI/2,r.add(I);let N=wr(.9,.9,e,4);N.position.set(.4,1.55,-o/2+.02),r.add(N);let H=new fi(i?"#B8C8FF":"#FFF0D0",i?8:10,7,.55,.6,1.4);H.position.set(.4,2.3,-o/2-.6),H.target.position.set(.2,0,.6),r.add(H,H.target);let q=qc(r,1.5,.9,-1),z=_d({teia:!0,semCorda:2});z.position.set(-1.36,.22,1.36),z.rotation.set(0,Math.PI/2,Math.PI/2-.2),r.add(z);let K=new Q;K.position.set(-1.48,1.35,-.95),K.rotation.y=Math.PI/2,r.add(K),K.add(at(.5,.8,.03,"#7A5236",0,0,0,{out:.005}));let ct=new rt(new Bt(.44,.74),new re({color:"#9AB0C0"}));ct.position.z=.017,K.add(ct);let bt=new Q;bt.position.set(-.3,0,-1.25),r.add(bt);let Ht=Ic(.8,"#B87A4A");bt.add(Ht),bt.add(at(.5,.34,.06,"#2A2A30",0,1.06,-.02,{out:.006}));let ae=ho(.44,.28,256);ae.position.set(0,1.06,.015),bt.add(ae);let Y=new rt(new Bt(.45,.6),he(qt(225,300,yt=>{yt.fillStyle="#2A2E44",yt.fillRect(0,0,225,300),yt.fillStyle="#F2C230",yt.beginPath(),yt.arc(112,130,70,0,7),yt.fill(),Ls(yt,"ROCK",112,250,50,"#F4F1EA")})));Y.position.set(1,1.7,-o/2+.02),r.add(Y);let et=Ds(.25);et.position.set(0,a,0),r.add(et);let Rt=new rn("#FFE2AE",i?0:1.5,5,1.6);Rt.position.set(0,2.2,0),r.add(Rt);let ht=Na(r,2.85,2.5,o,a,{parede:"#F2D89A",piso:["madeira","#B88A5A","#A87A4A"]}),Lt=new Q;Lt.position.set(3.55,0,-.55),r.add(Lt),Lt.add(at(.75,.26,1.6,"#E2443A",0,.15,0,{out:.008})),Lt.add(at(.7,.09,1.5,"#F4F1EA",0,.32,0,{out:.006}));let zt=at(.45,.12,.24,"#F4F1EA",0,.42,-.6,{out:.005});Lt.add(zt);let Jt=at(.72,.045,1,"#F2C230",0,.39,.2,{out:.005});Lt.add(Jt);for(let yt=0;yt<9;yt++){let dt=new rt(new ui(.04,5),new re({color:"#FFF2A0"}));dt.position.set(2+yt%3*.5,1.7+Math.floor(yt/3)*.25,-o/2+.015),r.add(dt)}let ge=new Q;ge.position.set(2.1,1,-o/2+.03),r.add(ge),ge.add(at(.45,.9,.03,"#F2546E",0,0,0,{out:.005}));{let yt=new rt(new Bt(.39,.84),new re({color:"#A8C0D0"}));yt.position.z=.017,ge.add(yt)}let te=hd("#3E7CC8");te.position.set(2.15,.19,.9),te.rotation.y=.6,r.add(te);let Be=[];for(let yt=0;yt<3;yt++){let dt=new rt(new Bt(.3,.22),he(qt(150,110,S=>{S.fillStyle="#FBF7EC",S.fillRect(0,0,150,110),S.strokeStyle=["#E2443A","#3E7CC8","#5AA84E"][yt],S.lineWidth=6,S.beginPath(),S.arc(75,50,26,0,7),S.stroke(),S.beginPath(),S.moveTo(20,95),S.lineTo(130,90),S.stroke()})));dt.position.set(4.08,1.5,-.4+yt*.4),dt.rotation.y=-Math.PI/2,r.add(dt),Be.push(dt)}let B=wr(.7,.7,e,7);B.position.set(3.3,1.6,-o/2+.02),r.add(B);let yn=Ds(.22);yn.position.set(2.85,a,0),r.add(yn);let ee=new rn("#FFE2AE",i?0:1.5,5,1.6);ee.position.set(2.85,2.2,0),r.add(ee);for(let yt of[-1.55,1.55])r.add(it(.1,a,o,"#E8E0D0",yt,a/2,0));let se=qc(r,-1.55,.85,1),Ut=qc(r,1.55,.85,-1);if(q.visible=!1,t.corte)for(let yt of[l,C,ht])yt.frente.visible=!1,yt.teto.visible=!1;if(t.semTeto)for(let yt of[l,C,ht])yt.teto.visible=!1;return{g:r,D:o,H:a,PK:l,PG:C,PD:ht,fogao:c,chama:h,panela:u,geladeira:g,mesa:m,cadK:b,cama:x,coberta:F,trav:w,escrivaninha:T,caderno:M,abajur:P,luzAbaj:O,cadEsc:I,janela:N,violao:z,espelho:K,tv:bt,telaTV:ae,camaD:Lt,travD:zt,cobD:Jt,mochila:te,espelhoD:ge,portaK:se,portaD:Ut,luzes:{LK:y,LG:Rt,LD:ee,sol:H},luz:s}}function xd(n){Wn(n,{r:10,pos:[3,9,5],ki:1.2,hemi:1.6}),n.add(new bn("#FFFFFF",.5));let t=new Q;n.add(t);let e=He(41);t.add(cn(20,16,he(Bs(os("ceramica","#E8E4DC","#D8D2C6"),14,12)),0,0,-3,-Math.PI/2)),t.add(cn(20,5,Fr("#F4EEDC",6,2),0,2.5,-9));let i=cn(20,16,Me("#F4F4F0"),0,3.6,-3,Math.PI/2);t.add(i);for(let g=0;g<6;g++){let E=it(1.6,.05,.25,"#FFFFF4",-6+g*2.6,3.55,-2);E.material=Me("#FFFFF4",{emissive:"#FFFFF4",emissiveIntensity:.8}),t.add(E)}for(let g=0;g<3;g++){let E=-3.5-g*1.8;for(let m of[-1,1]){let p=new Q;p.position.set(m*3.2,0,E),t.add(p),p.add(it(4.5,1.7,.5,"#C9CED6",0,.85,0,{out:.008}));for(let b=0;b<4;b++)for(let A=0;A<14;A++)p.add(it(.22,.2+e()*.1,.14,["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F2546E","#F4F1EA","#9B6CC4"][(A+b*3+g)%7],-2.05+A*.31,.3+b*.42,.3))}}let s=new rt(new Bt(5,.9),he(qt(1e3,180,g=>{g.fillStyle="#C8302A",g.fillRect(0,0,1e3,180),Ls(g,"MERCADO BOM PRE\xC7O",500,95,92,"#FFE08A")})));s.position.set(0,3,-8.95),t.add(s);let r=new Q;t.add(r),r.add(at(2.4,.85,.7,"#3A3A44",.5,.425,.2,{out:.01}));let o=new rt(new Ge(1.5,.02,.5),he(Bs(qt(64,64,g=>{g.fillStyle="#2A2A30",g.fillRect(0,0,64,64),g.fillStyle="#3A3A44",g.fillRect(0,0,64,8)}),8,1)));o.position.set(.95,.86,.2),r.add(o);let a=new Q;a.position.set(.05,.86,.2),r.add(a),a.add(at(.3,.02,.3,"#5A5A66",0,0,0));let l=new rt(new Bt(.24,.24),new re({color:"#FF3A3A",transparent:!0,opacity:.5}));l.rotation.x=-Math.PI/2,l.position.y=.012,a.add(l);let c=new Q;c.position.set(-.5,.86,.05),r.add(c),c.add(_t(.02,.02,.3,"#2A2A30",0,.15,0)),c.add(at(.32,.24,.04,"#2A2A30",0,.4,0,{out:.005}));let h=ho(.28,.2,256);h.position.set(0,.4,.022),c.add(h);let u=new Q;u.position.set(-.5,0,-.3),r.add(u),u.add(_t(.03,.03,2,"#9EA6B0",0,1,0,{seg:8}));let d=_t(.14,.14,.08,"#C8302A",0,2.05,0,{rot:[Math.PI/2,0,0],out:.004});u.add(d);let f=[];for(let g=0;g<5;g++){let E=at(.12,.16,.1,["#F2C230","#3E7CC8","#E2443A","#5AA84E","#F4F1EA"][g],1.6-g*.2,.95,.2,{out:.004});t.add(E),f.push(E)}return{g:t,leitor:a,laser:l,telaM:h,prods:f,esteira:o}}function Rd(n){Wn(n,{r:9,pos:[4,8,5],ki:1.4,hemi:1.5}),n.add(new bn("#FFF4E6",.45));let t=new Q;n.add(t);let e=9,i=8,r=Na(t,0,e,i,3.2,{parede:"#F2E6C8",piso:["ceramica","#D8CDB4","#C4B89E"]});r.frente.visible=!1,t.add(cn(e,1.2,Me("#E2843A"),0,.6,-i/2+.01));let o=at(3.6,1,.7,"#E2843A",-1.4,.5,-i/2+.7,{out:.01});t.add(o);let a=new rt(new Ge(3.4,.4,.5),new ve({color:"#CFE6F4",transparent:!0,opacity:.45}));a.position.set(-1.4,1.2,-i/2+.7),t.add(a);for(let h=0;h<12;h++){let u=pe(.05,["#D9892E","#C9A050","#E8B060"][h%3],-2.9+h*.26,1.07,-i/2+.6+h%2*.15,{seg:8});u.scale.set(1,.8,1.3),t.add(u)}let l=new rt(new Bt(1.6,1),he(qt(480,300,h=>{h.fillStyle="#2E2A26",h.fillRect(0,0,480,300),Ls(h,"CANTINA",240,50,50,"#F2C230"),[["Coxinha","R$ 4,00"],["Pastel","R$ 5,00"],["Suco","R$ 3,00"],["P\xE3o de queijo","R$ 2,50"]].forEach(([d,f],g)=>{Ls(h,d,40,110+g*46,34,"#F4F1EA",700,"left","Caveat"),Ls(h,f,440,110+g*46,34,"#F4F1EA",700,"right","Caveat")})})));l.position.set(-1.4,2.3,-i/2+.02),t.add(l);let c=[];for(let h=0;h<2;h++){let u=new Q;u.position.set(1.4,0,-1.2+h*2.4),t.add(u),u.add(at(2.4,.06,.8,"#F4F1EA",0,.74,0,{out:.008}));for(let d of[-1,1])u.add(it(.06,.72,.7,"#9EA6B0",d*1,.36,0)),u.add(at(2.4,.05,.3,"#3E7CC8",0,.44,d*.65,{out:.006})),u.add(it(.05,.42,.25,"#9EA6B0",d*1,.21,.65)),u.add(it(.05,.42,.25,"#9EA6B0",d*1,.21,-.65));c.push(u)}for(let h=0;h<3;h++){let u=wr(1.4,1,"manha",10+h);u.position.set(e/2-.02,1.8,-2.5+h*2.4),u.rotation.y=-Math.PI/2,t.add(u)}return{g:t,mesas:c,W:e,D:i}}function wd(n,t={}){Wn(n,{r:18,pos:[4,14,6],ki:.6,hemi:.55,sky:"#C8D0E8",ground:"#5A5048"}),n.add(new bn("#B8C0D8",.25));let e=new Q;n.add(e);let i=He(5);e.add(cn(40,40,he(Bs(os("madeira","#8A6A4A","#7A5A3E"),16,16)),0,0,0,-Math.PI/2)),e.add(cn(40,12,Fr("#3A3A48",8,3),0,6,-16)),e.add(cn(40,12,Fr("#3A3A48",8,3),-16,6,0,0,Math.PI/2)),e.add(cn(40,12,Fr("#3A3A48",8,3),16,6,0,0,-Math.PI/2)),e.add(cn(40,12,Fr("#3A3A48",8,3),0,6,16,0,Math.PI)),e.add(cn(40,40,Me("#2A2A34"),0,11,0,Math.PI/2));let s=new rt(new Bt(12,1.6),he(qt(1500,200,d=>{d.fillStyle="#1E3A6A",d.fillRect(0,0,1500,200),Ls(d,"CAMPEONATO ESTADUAL DE XADREZ",750,80,84,"#F2C230"),Ls(d,"FINAL",750,165,52,"#F4F1EA")})));s.position.set(0,7,-15.9),e.add(s);let r=at(4.2,.3,3.2,"#5A2A2A",0,.15,0,{out:.01});e.add(r),e.add(cn(4,3,Me("#8E1E2A"),0,.305,0,-Math.PI/2));let o=new Q;o.position.set(0,.3,0),e.add(o),o.add(at(1,.05,.8,"#F4F1EA",0,.74,0,{out:.008})),o.add(it(.9,.7,.7,"#E8E2D6",0,.37,0));let a=Gc(.055);a.g.position.set(0,.765,0),o.add(a.g);let l=Md();l.position.set(.42,.765,-.02),l.rotation.y=Math.PI/2,l.scale.setScalar(1.1),o.add(l);for(let d of[.62,-.62]){let f=lo("#2A2A30");f.position.set(0,.3,d),f.rotation.y=d>0?Math.PI:0,e.add(f)}let c=new fi("#FFF4E0",60,20,.32,.5,1.2);c.position.set(0,9,1.5),c.target.position.set(0,.8,0),c.castShadow=!0,e.add(c,c.target);let h=new rt(new di(2.4,8.5,32,1,!0),new re({color:"#FFF4D8",transparent:!0,opacity:.07,depthWrite:!1,side:ke}));h.position.set(0,4.9,.7),h.rotation.x=-.17,e.add(h);let u=[];for(let d=0;d<5;d++)for(let f=0;f<10;f++){let g=-11+f*2.45,E=-12+d*3.1;if(Math.abs(g)<3.2&&Math.abs(E)<3)continue;let m=new Q;m.position.set(g,0,E),e.add(m),m.add(at(.9,.05,.7,"#F4F1EA",0,.74,0,{out:.006})),m.add(it(.8,.7,.6,"#E8E2D6",0,.37,0));let p=Gc(.045);p.g.position.y=.765,m.add(p.g),u.push(m)}for(let d=0;d<8;d++){let f=new rn("#FFE8C8",9,10,1.6);f.position.set(-10+d*3,6,-8+d%2*8),e.add(f)}for(let d=0;d<20;d++)e.add(_t(.03,.03,.9,"#C9A030",-4+d*.42,.45,2.4,{seg:6}));return e.add(_t(.015,.015,8,"#C8302A",0,.85,2.4,{rot:[0,0,Math.PI/2],seg:6})),{g:e,T:a,rel:l,mesaF:o,mesas:u,holo:c,cone:h,tab:r}}function Oa(n,t={}){n.add(new bn("#FFFFFF",.6));let e=new es("#FFF4E0",1.6);e.position.set(3,8,4),n.add(e);let i=new Q;n.add(i);let s=He(99),r=new sn,o=400,a=new Float32Array(o*3);for(let c=0;c<o;c++)a[c*3]=(s()-.5)*40,a[c*3+1]=(s()-.2)*20,a[c*3+2]=(s()-.5)*40;r.setAttribute("position",new pn(a,3));let l=new da(r,new $r({color:t.cor||"#C8D4FF",size:.06,transparent:!0,opacity:.6}));return i.add(l),{g:i,pontos:l}}var za=(n,t=.9)=>(e,i,s)=>{e.fillStyle=n,e.fillRect(0,s*t,i,s*(1-t))},TE=(n,t,e,i=.5)=>(s,r,o)=>{s.fillStyle=t,s.font=`900 ${e}px Inter`,s.textAlign="center",s.textBaseline="middle",s.fillText(n,r/2,o*i)},as={pele:"#E3AE86",cabelo:"cacheado",corCabelo:"#3A2216",nariz:!0,banguela:!0,sardas:!0,camisa:"#F6C83A",calca:"#3E6EC8",meia:"#E3AE86",tenis:"#E3AE86",sola:"#E2443A",chinelo:"#E2443A",escala:.64,estampa:(n,t,e)=>{za("#E0A824",.88)(n,t,e),n.fillStyle="#E2443A",n.beginPath();for(let i=0;i<5;i++){let s=-Math.PI/2+i*2.513;n.lineTo(t/2+Math.cos(s)*46,e*.5+Math.sin(s)*46);let r=s+1.256;n.lineTo(t/2+Math.cos(r)*19,e*.5+Math.sin(r)*19)}n.fill()}},Us={...as,camisa:"#6E8ED8",calca:"#6E8ED8",manga:"longa",estampa:(n,t,e)=>{n.fillStyle="#F6E27A";for(let i=0;i<22;i++){let s=i*137%t,r=i*71%e;n.beginPath();for(let o=0;o<5;o++){let a=-Math.PI/2+o*2.513;n.lineTo(s+Math.cos(a)*13,r+Math.sin(a)*13),n.lineTo(s+Math.cos(a+1.256)*5,r+Math.sin(a+1.256)*5)}n.fill()}}},SE=(n,t,e)=>{za("#B02A24",.9)(n,t,e),n.fillStyle="#B02A24",n.fillRect(t/2-6,0,12,e*.3),n.fillStyle="#F4F1EA",n.fillRect(t/2+70,e*.3,120,70),n.fillStyle="#2A2A30",n.font="900 30px Inter",n.textAlign="center",n.textBaseline="middle",n.fillText("ROSE",t/2+130,e*.3+35),n.fillStyle="#FFE08A",n.font="900 36px Inter",n.fillText("BOM PRE\xC7O",t/2-110,e*.62)},gi={pele:"#D9A07A",cabelo:"coque",corCabelo:"#2E1E16",cilios:!0,nariz:!0,brincos:"#F2C230",camisa:"#D8362E",calca:"#2A2A30",tenis:"#2A2A30",sola:"#F4F1EA",escala:.93,estampa:SE},E_={...gi,camisa:"#9C7AC8",estampa:za("#8A66B8",.9)},ka={pele:"#8A5A3E",cabelo:"curto",corCabelo:"#1A1212",bone:"#E2443A",boneTras:!0,nariz:!0,tronco:"barriga",camisa:"#3EA864",calca:"#3E5A7A",tenis:"#F4F1EA",sola:"#E2443A",escala:.97,estampa:(n,t,e)=>{TE("23","#F4F1EA",120)(n,t,e),za("#2E8E50",.9)(n,t,e)}},y_={...io(2),pele:"#8A5A3E",cabelo:"curto",corCabelo:"#1A1212",bone:"#E2443A",boneTras:!0,tronco:"barriga",escala:.97};var Cd={pele:"#E3B28E",cabelo:"curto",corCabelo:"#8A8680",bigode:"#7A7670",oculos:!0,nariz:!0,rugas:!0,tronco:"barriga",camisa:"#E2D2A8",manga:"longa",calca:"#5A4A3A",tenis:"#3A2A20",sola:"#2A1E16",escala:1.04,estampa:(n,t,e)=>{n.fillStyle="#7A2E2E",n.beginPath(),n.moveTo(t/2-16,0),n.lineTo(t/2+16,0),n.lineTo(t/2+22,e*.6),n.lineTo(t/2,e*.7),n.lineTo(t/2-22,e*.6),n.fill()}},Yc={pele:"#B8805A",cabelo:"curto",corCabelo:"#2A2020",nariz:!0,camisa:"#2E5EB8",manga:"longa",calca:"#2E5EB8",tenis:"#F4F1EA",sola:"#2A2A30",escala:1.04,estampa:(n,t,e)=>{n.fillStyle="#F4F1EA",n.fillRect(t*.18,0,18,e),n.fillRect(t*.82-18,0,18,e),n.strokeStyle="#E8E4DC",n.lineWidth=5,n.beginPath(),n.moveTo(t/2-50,0),n.lineTo(t/2,e*.3),n.lineTo(t/2+50,0),n.stroke(),n.fillStyle="#C9CED6",n.beginPath(),n.ellipse(t/2,e*.32,22,14,0,0,7),n.fill()}},v_={...io(0),pele:"#F0C8A6",cabelo:"topete",corCabelo:"#C99A4A",oculos:!0,nariz:!0,escala:1,sobr:"#9A7030"},Fd={pele:"#C98C66",cabelo:"curto",corCabelo:"#1A1212",nariz:!0,sobr:"#1A1212",camisa:"#1E2028",manga:"longa",calca:"#1E2028",tenis:"#121216",sola:"#121216",escala:1.02,estampa:(n,t,e)=>{n.fillStyle="#F4F1EA",n.beginPath(),n.moveTo(t/2-60,0),n.lineTo(t/2,e*.42),n.lineTo(t/2+60,0),n.fill(),n.fillStyle="#7A1E2E",n.fillRect(t/2-9,0,18,e*.4),n.strokeStyle="#E2443A",n.lineWidth=14,n.beginPath(),n.arc(t/2,-10,92,.15,Math.PI-.15),n.stroke(),n.fillStyle="#E2443A";for(let i of[-1,1])n.beginPath(),n.ellipse(t/2+i*86,40,24,30,0,0,7),n.fill()}},Pd={pele:"#E3B28E",cabelo:"careca",corCabelo:"#7A7670",barba:"#9A968F",oculos:!0,nariz:!0,tronco:"barriga",camisa:"#F4F1EA",manga:"longa",calca:"#2A2A30",tenis:"#1E1A18",sola:"#1E1A18",escala:1.03,estampa:(n,t,e)=>{n.fillStyle="#2A2E3A",n.fillRect(0,0,t*.34,e),n.fillRect(t*.66,0,t*.34,e),n.fillStyle="#F2C230",n.fillRect(t*.7,e*.3,70,50)}};var Zc=.3+.48;function Ei(n,t={}){let e=wd(n,t),i=Mt(n,jt,0,.62,Math.PI);qe(i,0,.62,Math.PI,Zc);let s=Mt(n,Fd,0,-.62,0);qe(s,0,-.62,0,Zc);let r=Mt(n,Pd,1.25,-.1,-Math.PI/2,.3),o=Mt(n,t.profX?Yc:Yc,-2.6,2.9,Math.PI),a=[],l=[];if(!t.semGente){e.mesas.forEach((h,u)=>{if(u%2)return;let d=Mt(n,Is(u,{escala:.95}),0,0,0),f=u%4?1:-1;qe(d,h.position.x,h.position.z+f*.55,f>0?Math.PI:0,.48),d.seed=u%9,a.push(d)});for(let h=0;h<18;h++){let u=Mt(n,Is(h+3),-3.8+h%9*.95,2.75+Math.floor(h/9)*.7,Math.PI);u.seed=h,l.push(u)}}let c=Hi();return n.add(c),{...e,gui:i,adv:s,juiz:r,prof:o,jog:a,pub:l,tel:c}}function Ni(n,t,e="jogo"){n.jog.forEach((i,s)=>{i.pose(Ot(me({shR:[60,8],elR:100,headX:18,shL:[30,8],elL:70},Oe(t,s,.6)))),lt(i,null,t,s%3?"neutro":"determinado")}),n.pub.forEach((i,s)=>{let r=rs(t,s,.8);if(e==="aplauso"){let o=Math.abs(Math.sin(t*9+s));r=me({shL:[70,-10],shR:[70,-10],elL:60+o*30,elR:60+o*30},{bob:o*.01})}e==="tensao"&&s%3===0&&(r=me(r,{shR:[120,-10],elR:140,headX:6})),i.pose(r),lt(i,null,t,e==="aplauso"?"feliz":e==="tensao"?"preocupado":"neutro",{look:[0,.2]})}),lt(n.juiz,null,t,"neutro"),n.juiz._pose||n.juiz.pose(me(pi.bracoCruzado,Oe(t,3,.5)))}function Id(n,t,e=0){let i=n.gui.root.position;n.tel.position.set(i.x-.18+e,Zc+.1,i.z-.16),n.tel.rotation.set(0,-Math.PI/2-.5,Math.PI/2-.2)}var Oi={bg:"#121218",far:120},Dd=[13.96,14.25,14.5,14.72,14.9,15.05,15.2,15.33,15.45,15.56,15.66,15.76,15.86,15.95],zi=(n,t,e="determinado",i={})=>{n.gui.pose(Ot(me({shR:[48,6],elR:96,shL:[44,6],elL:98,lean:12,headX:16},i.parado?{}:Oe(t,1,.3)))),lt(n.gui,null,t,e,{look:[0,.45],vivo:!i.parado,blink:i.parado?0:void 0})},ki=(n,t)=>{n.adv.pose(Ot(me({shR:[40,6],elR:100,shL:[30,6],elL:90,lean:10,headX:14},Oe(t,4,.4)))),lt(n.adv,null,t,"determinado",{look:[0,.4]})},Ld=[ft(0,1.05,{...Oi,fov:30},n=>{let t=Ei(n,{semGente:!0});return t.holo.intensity=30,(e,i,s)=>{zi(t,e),ki(t,e),Ni(t,e);let r=600-e;return t.rel.userData.set("09:5"+Math.floor(9-e*3),"10:00",0),ot(s,[.75,1.32,.35],[.46,1.1,-.02],i/1.05,0,0),{exposure:.7,vig:.6}}}),ft(1.05,3.36,{...Oi,fov:24,perto:!0,limpa:!1},n=>{let t=Ei(n,{semGente:!0});return t.holo.intensity=22,(e,i,s)=>{zi(t,e),ki(t,e),t.adv.root.visible=!1;let r=t.gui;r.headG.updateMatrixWorld(!0);let o=r.headG.localToWorld(new R(0,.26,.3));return ot(s,[[0,[o.x+.05,o.y+.02,o.z-.95]],[1,[o.x+.02,o.y,o.z-.6]]],[o.x,o.y-.02,o.z+.2],i/2.3,0,0),{exposure:.78,vig:.6}}}),ft(3.36,5.92,{...Oi,fov:34},n=>{let t=Ei(n);return(e,i,s)=>{zi(t,e),ki(t,e),Ni(t,e);let r=Wt(-.9,-.5,i/2.56);return ot(s,[Math.sin(r)*2.2,1.55,Math.cos(r)*2.2],[0,1.05,0],i/2.56,0,0),{vig:.45}}}),ft(5.92,9.84,{...Oi,fov:40},n=>{let t=Ei(n);return(e,i,s)=>{zi(t,e),ki(t,e),Ni(t,e);let r=Cn(i/3.92);ot(s,[Wt(1.2,7.5,r),Wt(1.5,7.5,r),Wt(1.6,11,r)],[0,Wt(1,.4,r),Wt(0,-2.5,r)],i/3.92,0,0);let o=An(8.7,9.6,e);return _e.mundo.value=o,{vig:.4}}}),ft(9.84,11.44,{...Oi,fov:28,limpa:!1},n=>{let t=Ei(n),e=Ye([t.T.g,t.rel]);return(i,s,r)=>{zi(t,i),ki(t,i),Ni(t,i);let o=Math.max(0,9*60+41-Math.floor((i-9.84)*6));return t.rel.userData.set("0"+Math.floor(o/60)+":"+String(o%60).padStart(2,"0"),"10:00",0),_e.mundo.value=1,e(1,i),tn(n,"#121218",1),ot(r,[[0,[.9,1.3,.55]],[1,[.75,1.22,.4]]],[.42,1.09,-.02],s/1.6,0,0),{focus:1,range:.3,blur:10,vig:.5}}}),ft(11.44,16.56,{...Oi,fov:32,perto:!0,limpa:!1},n=>{let t=Ei(n),e=Ye([t.tel]),i=new rn("#9FD8FF",0,1,2);return n.add(i),(s,r,o)=>{zi(t,s),ki(t,s),Ni(t,s);let a=ro(s,Dd);Id(t,s,a);let l=Dd.some(u=>s>=u&&s<u+.3);t.tel.tela(l?"chamadasBorrado":"apagada",0),i.position.copy(t.tel.position),i.position.y+=.08,i.intensity=l?2.5:0,_e.mundo.value=1,e(1,s),tn(n,"#121218",1);let c=Cn(Pt((r-1.2)/2.6)),h=t.tel.position;return ot(o,[Wt(-1.1,-.6,c),Wt(1.42,1.02,c),Wt(.2,.52,c)],[Wt(0,h.x,c),Wt(1.25,h.y,c),Wt(.62,h.z,c)],r/5.12,0,0),{focus:Wt(.95,.55,c),range:.25,blur:12,vig:.5}}}),ft(16.56,18.36,{...Oi,fov:26,perto:!0,limpa:!1},n=>{let t=Ei(n),e=Ye([t.gui.root]);return(i,s,r)=>(zi(t,16.6,"determinado",{parado:!0}),ki(t,16.6),Ni(t,16.6),t.juiz.root.visible=!1,_e.mundo.value=1,e(.6,i),tn(n,"#121218",1),ot(r,[[0,[-.4,1.4,-.42]],[1,[-.34,1.38,-.34]]],[0,1.27,.62],s/1.8,0,0),{vig:.55,exposure:.95})}),ft(18.36,23.52,{bg:"#08080C",fov:30},n=>{let t=Oa(n,{cor:"#8890B0"}),e=Hi();e.position.set(0,.5,0),e.rotation.set(-Math.PI/2+.25,0,.25),n.add(e);let i=at(1.2,.04,.8,"#3A2A22",0,.47,0);n.add(i);let s=new rn("#FF6A6A",2,1.5,2);return s.position.set(0,.7,.1),n.add(s),(r,o,a)=>{let l=ro(r,[18.6,19.6,20.6,21.6,22.6],.4);return e.position.x=l,e.tela("chamadasBorrado",0),s.intensity=1.5+Math.sin(r*6)*.5,ot(a,[[0,[.03,.8,.3]],[1,[.01,.66,.16]]],[0,.5,0],o/5.16,0,0),{vig:.65,focus:.4,range:.2,blur:8}}}),ft(23.52,27.84,{bg:"#0E0C14",fov:30},n=>{Oa(n,{cor:"#C8B8FF"});let t=Mt(n,as,0,0,0),e=ii();n.add(e),e.scale.setScalar(.8);let i=new fi("#FFE8C0",8,4,.5,.8,1.5);return i.position.set(.4,1.6,1.2),i.target.position.set(0,.55,0),n.add(i,i.target),(s,r,o)=>{t.pose({shL:[62,-14],elL:70,shR:[62,-14],elR:70,headX:18}),lt(t,null,s,"neutro",{look:[0,.5]}),t.root.updateMatrixWorld(!0);let a=t.hands.L.localToWorld(new R(0,-.05,.03)),l=t.hands.R.localToWorld(new R(0,-.05,.03));return e.position.copy(a).add(l).multiplyScalar(.5),e.position.z+=.03,e.rotation.set(-.35,0,0),e.set(Pt((s-25.2)/4)*.35),ot(o,[[0,[.25,.8,.75]],[1,[.12,.72,.5]]],[e.position.x,e.position.y,e.position.z],r/4.32,0,0),{vig:.6,exposure:.85}}}),ft(27.84,31.44,{bg:"#0C0A06",fov:30},n=>{Oa(n,{cor:"#F2C230"});let t=id(2.2);t.position.set(0,1,0),n.add(t);let e=mi(n,[0,1,0],{n:60,cor:"#FFD86A",r:1.2,tam:.025}),i=new rn("#FFD86A",4,4,2);return i.position.set(.5,1.5,1.2),n.add(i),(s,r,o)=>{let a=Pt((s-28)/2.3),l=a<1?1200*Bn(a):1200;return t.set(l,s>30.3?Pt((s-30.3)*2)*.6:0),t.rotation.y=Math.sin(s*.8)*.25*(1-a*.6),e((s-27.84)/3.6%1),ot(o,[[0,[.15,1.08,1.6]],[1,[.05,1.02,1.2]]],[0,1,0],r/3.6,0,0),{bloom:.25,bloomT:.9,vig:.5,exposure:.85}}}),ft(31.44,34.44,{...Oi,fov:30,perto:!0,limpa:!1},n=>{let t=Ei(n),e=Ye([t.gui.root]);return(i,s,r)=>(zi(t,16.6,"determinado",{parado:!0}),ki(t,16.6),Ni(t,16.6),t.juiz.root.visible=!1,_e.mundo.value=.85,e(.5,i),tn(n,"#121218",.85),ot(r,[[0,[-.95,1.48,-.42]],[1,[-.85,1.45,-.32]]],[-.1,1.25,.62],s/3,0,0),{vig:.45})}),ft(34.44,35.96,{...Oi,fov:38},n=>{let t=Ei(n),e=Object.values(t.T.P);return(i,s,r)=>{let o=34.44+(35.96-i)*3;zi(t,o*3),ki(t,o*3),Ni(t,o*4,"aplauso"),e.forEach((l,c)=>{l.position.y=.021+Math.abs(Math.sin(i*14+c))*.03*(1-s/1.52),l.rotation.y=i*20*(c%2?1:-1)});let a=Wt(.3,-.6,s/1.52);return ot(r,[Math.sin(a)*4,2.4,Math.cos(a)*4],[0,.9,0],s/1.52,Math.sin(i*30)*.01,0),{sat:.55,tint:"#C8D8FF",vig:.5}}})];var Ga={x:-.62,z:.25,ry:-Math.PI/2,h:.46};function ne(n,t={}){let e=Sd(n,t),i=Hi();return n.add(i),e.tel=i,e}function Ze(n){return qe(n,Ga.x,Ga.z,Ga.ry,Ga.h),n}function hn(n,t,e="L"){Se(n,t,e,[0,-.07,.06],!1),t.headG.updateMatrixWorld(!0);let i=t.headG.localToWorld(new R(0,.2,.25));n.up.set(0,1,0),n.lookAt(i)}function Xn(n,t=1,e=0){let i=n.caderno.userData.D,s="um"+Math.round(t*20)+"|"+Math.round(e*10);i.paint(s,(r,o,a)=>{Xc(r,o,a,()=>{r.save(),r.beginPath(),r.rect(0,0,o*(.15+.3*t),a),r.clip(),e>0&&(r.shadowColor="#FFF2A0",r.shadowBlur=30*e),Ad(r,"1",o*.22,a*.2,90,"#2A3A7A"),r.restore(),r.font="600 34px Caveat",r.fillStyle="#2A3A7A",r.fillText("Li\xE7\xE3o de matem\xE1tica",o*.15,a*.07)})})}function $c(n,t=1){let e=n.caderno.userData.D,i=Math.round(t*30),s="q"+i;e.paint(s,(r,o,a)=>{Xc(r,o,a,()=>{r.font="600 30px Caveat",r.fillStyle="#2A3A7A";for(let l=0;l<i;l++){let c=l%2,h=Math.floor(l/2);r.fillText(`${l+1}) ${l*7%13+2}x = ${(l*7%13+2)*3}  \u2713`,o*(.15+c*.42),a*(.1+h*.058))}})})}function uo(n=.16){let t=new Q;t.add(_t(n,n,.04,"#F4F1EA",0,0,0,{rot:[Math.PI/2,0,0],seg:28,out:.005})),t.add(Pe(new je(n,.015,8,28),"#2A2A30"));for(let s=0;s<12;s++){let r=s/12*6.283;t.add(it(.01,s%3?.016:.03,.01,"#2A2A30",Math.sin(r)*n*.82,Math.cos(r)*n*.82,.025))}let e=new Q,i=new Q;return e.add(it(.014,n*.55,.008,"#1E1E22",0,n*.25,0)),i.add(it(.009,n*.8,.008,"#1E1E22",0,n*.38,0)),e.position.z=.028,i.position.z=.032,t.add(e,i),t.add(pe(.01,"#C0392B",0,0,.036,{seg:8})),t.hora=(s,r)=>{i.rotation.z=-r/60*6.283,e.rotation.z=-(s%12+r/60)/12*6.283},t.hora(7,0),t}function Jc(n,t="#E2443A"){let e=new Q,i=new rt(new Bt(.32,.38,4,6),new ve({color:t,side:ke}));i.position.set(0,-.18,0),e.add(i),e.position.set(0,.3,-.13),n.torsoG.add(e);let s=i.geometry.attributes.position,r=s.array.slice();return e.vento=(o,a=1)=>{for(let l=0;l<s.count;l++){let c=r[l*3+1],h=r[l*3],u=(.19-c)/.38;s.array[l*3+2]=r[l*3+2]-u*u*.35*a+Math.sin(o*12+h*9+c*6)*.025*u*a}s.needsUpdate=!0,e.rotation.x=-.15*a},e}function Bd(){let n=qt(128,128,e=>{for(let i=0;i<10;i++){let s=i/10*6.283;e.fillStyle=`rgba(255,255,255,${.15+i/10*.85})`,e.beginPath(),e.arc(64+Math.cos(s)*44,64+Math.sin(s)*44,10,0,7),e.fill()}}),t=new Kn(new kn({map:n,transparent:!0,depthWrite:!1}));return t.scale.setScalar(.22),t.renderOrder=10,t}var En=(n,t=1)=>Ot(me({shL:[64,4],elL:76,shR:[40,12],elR:70,lean:4,headX:26},Oe(n,t,.4)));var Hs={tint:"#FFF8EC",bloom:.2},xE={tint:"#C8D4FF",exposure:.8},Va=n=>(no(n,.95,.43,.38),n.root.position.y=.43+.2,n),Ud=[ft(35.96,39.12,{bg:"#DDE6EE",fov:38,limpa:!1},n=>{let t=ne(n,{hora:"tarde"}),e=Mt(n,jt,0,0,0);return Va(e),(i,s,r)=>(e.pose({shR:[100,10],elR:70,shL:[96,-8],elL:80,headX:-10}),lt(e,null,i,"tedio",{look:[0,-.6]}),Se(t.tel,e,"R",[0,-.06,.05],[Math.PI/2+.3,0,0]),t.tel.tela("foto",i*.7%1),ot(r,[[0,[-.4,2.2,.9]],[1,[-.15,1.9,.6]]],[.95,.55,-.4],s/3.16,0,0),Hs)}),ft(39.12,42.88,{bg:"#F4F4F0",fov:36},n=>{let t=xd(n),e=Mt(n,gi,-.05,-.42,0),i=Mt(n,Is(4),1.6,1.05,Math.PI+.3),s=_t(.06,.06,.12,"#3E7CC8",0,0,0,{out:.004});return n.add(s),(r,o,a)=>{let l=r*1.25%1,c=t.prods[Math.floor(r*1.25)%5];return e.pose({shR:[55+Math.sin(l*6.28)*10,30-l*40],elR:60,shL:[30,10],elL:70,lean:6,headX:10,twist:Math.sin(l*6.28)*10}),lt(e,null,r,"neutro",{look:[.3,.4]}),Se(s,e,"R",[0,-.06,.05]),t.laser.material.opacity=l>.45&&l<.6?.9:.3,t.telaM.paint(String(Math.floor(r*1.25)),(h,u,d)=>{h.fillStyle="#1E3A5A",h.fillRect(0,0,u,d),h.fillStyle="#9FE8B0",h.font="700 40px 'IBM Plex Mono'",h.fillText("R$ "+(12.5+Math.floor(r*1.25)*4.9).toFixed(2),20,d/2)}),i.pose(rs(r,3)),lt(i,null,r,"neutro",{look:[-.3,.2]}),ot(a,[[0,[1.3,1.45,2]],[1,[.9,1.35,1.6]]],[0,1,-.1],o/3.76),{}}}),ft(42.88,46.44,{bg:"#E8D8B8",fov:40},n=>{let t=kc(n),e=Mt(n,as,0,0,0),i=Jc(e,"#E2443A");return(s,r,o)=>{let a=(s-42.88)*1.6,l=.2+Math.cos(a)*.95,c=.35+Math.sin(a)*.7;return e.place(l,c,0,Math.atan2(-Math.sin(a),Math.cos(a))),e.pose(me(Tc(s,3.2,1),{shR:[150,20],elR:10})),i.vento(s,1),lt(e,null,s,"feliz",{mouth:{open:.5,smile:.9}}),ot(o,[[0,[.2,1.6,1.45]],[1,[.25,1.5,1.35]]],[l*.5+.1,.45,c*.5+.1],r/3.56),Hs}}),ft(46.44,49.72,{bg:"#E8D8B8",fov:34},n=>{let t=kc(n),e=Mt(n,as,.55,.9,-2.5),i=Jc(e,"#E2443A"),s=Mt(n,jt,-.3,-1,0);qe(s,-.4,-1.05,0,.45);let r=Hi();n.add(r);let o=Ps("coracao",.22);return n.add(o),(a,l,c)=>{e.pose(me(rs(a,2),{shL:[40,10],elL:90,shR:[40,10],elR:90,headX:-8,bob:Math.abs(Math.sin(a*6))*.02})),i.vento(a,.2),lt(e,null,a,"apaixonado",{look:[-.5,-.2]}),s.pose(En(a)),lt(s,null,a,"tedio",{look:[0,.6]}),Se(r,s,"R",[0,-.07,.04],[-1.35,0,0]),r.tela("chat",.5);let h=Pt((a-47.4)/.5);o.visible=a>47.4,e.headG.updateMatrixWorld(!0);let u=e.headG.localToWorld(new R(.15,.55,0));return o.position.copy(u),o.position.y+=h*.15,o.scale.setScalar(.22*(h<1?Bn(h)*1.2:1+Math.sin(a*9)*.08)),ot(c,[[0,[-1.5,1.25,.95]],[1,[-1.4,1.2,.85]]],[.05,.7,-.1],l/3.28),Hs}}),ft(49.72,53.24,{bg:"#DDE6EE",fov:46},n=>{let t=ne(n,{hora:"tarde"}),e=Mt(n,jt,0,0,0);Ze(e);let i=uo();return i.position.set(.3,2,1.47),i.rotation.y=Math.PI,n.add(i),(s,r,o)=>{let a=Ac(s,[[49.7,0],[50.3,0],[50.6,1],[51.4,1],[51.7,-1],[52.4,-1],[52.7,.4]]);return e.pose(Ot({shR:[50,6],elR:84,shL:[44,6],elL:80,lean:8,headX:6,headY:a*55})),lt(e,null,s,"neutro",{look:[a*.6,0]}),hn(t.tel,e,"L"),t.tel.tela("apagada"),Xn(t,0),t.telaTV.paint("tv"+Math.floor(s*3),(l,c,h)=>{l.fillStyle=["#3E7CC8","#F2C230","#E2443A"][Math.floor(s*3)%3],l.fillRect(0,0,c,h),l.fillStyle="#FFF",l.beginPath(),l.arc(c*(.3+s%1*.4),h/2,30,0,7),l.fill()}),ot(o,[[0,[-.9,1.55,1.35]],[1,[-.95,1.5,1.2]]],[-.75,1,.15],r/3.52),Hs}}),ft(53.24,56.04,{bg:"#DDE6EE",fov:46},n=>{let t=ne(n,{hora:"tarde"}),e=Mt(n,jt,0,0,0);return Ze(e),(i,s,r)=>{let o=Math.sin((i-53.24)*4.2);return e.pose(Ot({shR:[50,6],elR:84,shL:[44,6],elL:80,lean:8,headX:6,headY:o*50})),lt(e,null,i,"preocupado",{look:[o*.8,0]}),Xn(t,0),ot(r,[[0,[-.8,1.3,1.25]],[1,[-.78,1.28,1.1]]],[-.68,1.18,.25],s/2.8),Hs}}),ft(56.04,60.16,{bg:"#DDE6EE",fov:46,limpa:!1,perto:!0},n=>{let t=ne(n,{hora:"tarde"}),e=Mt(n,jt,0,0,0);Ze(e);let i=_t(.006,.006,.14,"#2E5EC8",0,0,0,{out:.002});return n.add(i),t.tel.position.set(-1.02,.79,-.12),t.tel.rotation.set(-Math.PI/2,0,-Math.PI/2),(s,r,o)=>{e.pose(Ot(me({shR:[58,4],elR:92,shL:[44,6],elL:84,lean:14,headX:26},s>59&&s<60?{shR:[58+Math.sin(s*20)*3,4]}:{}))),lt(e,null,s,"neutro",{look:[0,.7]}),Se(i,e,"R",[0,-.05,.04],[.6,0,0]),Xn(t,Pt((s-59.1)/.9));let a=s>60;return t.tel.tela(a?"bloqueio":"apagada",0),ot(o,[[0,[-1.15,1.3,1]],[1,[-1.2,1.12,.75]]],[-1.12,.79,.25],r/4.12,0,0),Hs}}),ft(60.16,66.84,{bg:"#DDE6EE",fov:46,limpa:!1},n=>{let t=ne(n,{hora:"tarde"}),e=Mt(n,jt,0,0,0);return Ze(e),Xn(t,1),(i,s,r)=>{let o=Pt((i-62.2)/.6);if(e.pose(Ot(me({shR:[Wt(40,66,o),6],elR:Wt(80,108,o),shL:[44,6],elL:84,lean:10,headX:24},Oe(i,1,.2)))),lt(e,null,i,"neutro",{look:[0,.6]}),i<62.2)t.tel.position.set(-1.02,.79,-.12),t.tel.rotation.set(-Math.PI/2,0,-Math.PI/2),t.tel.tela("bloqueio");else{hn(t.tel,e);let l=i<63.7?["bloqueio",0]:i<65.1?["chat",(i-63.7)/1.4]:i<66?["foto",(i-65.1)/.9]:["tapete",0];t.tel.tela(l[0],l[1])}let a=t.tel.position;if(i<62.6)ot(r,[[0,[-.85,1.4,.95]],[1,[-.95,1.25,.7]]],[-1,.8,.1],(i-60.16)/2.44,0,0);else{e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let l=e.headG.localToWorld(new R(0,.3,.05));ot(r,[l.x,l.y,l.z],[a.x,a.y,a.z],(i-62.6)/4.2,0,0)}return{...Hs,focus:.45,range:.25,blur:6}}}),ft(66.84,71.64,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,jt,0,0,0);Ze(e),Xn(t,1);let i=uo();i.position.set(-.5,2,-1.47),n.add(i);let s=new rn("#9FD8FF",.6,1.2,2);return n.add(s),(r,o,a)=>{e.pose(En(r)),lt(e,null,r,"tedio",{look:[0,.55],blink:0}),hn(t.tel,e),t.tel.tela("tapete",(r-66.84)/4.8),s.position.copy(t.tel.position),s.position.x+=.12;let l=Pt((r-66.9)/1.4)*40;return i.hora(19,20+l),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8,r<68?ot(a,[-.6,1.95,-.6],[-.5,2,-1.47],(r-66.84)/1.16,0,0):ot(a,[[0,[-1.2,1.32,-.3]],[1,[-1.15,1.3,-.2]]],[-.62,1.2,.25],(r-68)/3.64,0,0),{tint:"#D8E2FF",exposure:.9}}}),ft(71.64,73.72,{bg:"#C8C0B8",fov:46,limpa:!1,perto:!0},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,jt,0,0,0);return Ze(e),Xn(t,1),t.luzAbaj.intensity=.8,t.luzes.LG.intensity=1.5,(i,s,r)=>{e.pose(En(i));let o=Bn(Pt((i-71.7)/.5));return ot(r,[Wt(-.98,-1.05,o),Wt(1.3,1.02,o),Wt(.45,.32,o)],[-1.08,.79,.3],s/2.08,0,0),{tint:"#E8E2FF",vig:.55,exposure:.85}}}),ft(73.72,82.44,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,jt,0,0,0);return Ze(e),Xn(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8,(i,s,r)=>{e.pose(En(i)),lt(e,null,i,"tedio",{look:[0,.55]}),hn(t.tel,e),t.tel.tela("tapete",.5+i*.2%.5);let o=Wt(.3,1,s/8.72);return ot(r,[-.62+Math.cos(o)*1.6,1.5,.25+Math.sin(o)*1.6],[-.62,1,.25],s/8.72,0,0),{tint:"#D0D8F0",exposure:.7,focus:.5,range:.2,blur:16}}}),ft(82.44,85.48,{bg:"#B8D0DC",fov:46,limpa:!1},n=>{Wn(n,{r:5,pos:[3,6,3],ki:.9,hemi:1.2,key:"#E8E8FF"}),n.add(new bn("#C8D0F0",.4));let t=new ve({color:"#9AB4C4"}),e=new ve({color:"#8A5E3A"}),i=(l,c,h,u,d,f,g,E)=>{let m=new rt(new Bt(l,c),h);m.position.set(u,d,f),m.rotation.set(g,E,0),n.add(m)};i(6,6,e,0,0,0,-Math.PI/2,0);for(let[l,c,h,u]of[[4,.95,.475,0],[4,1.6,2.5,0],[1.6,.8,1.3,-1.15],[1.6,.8,1.3,.95]])i(l,c,t,-1.5,h,u,0,Math.PI/2);i(4,3.3,t,-3.6,1.6,0,0,Math.PI/2),i(4,3.3,t,1.5,1.6,0,0,-Math.PI/2),i(3,3.3,t,0,1.6,-2,0,0),i(3,3.3,t,-2.5,1.6,-2,0,0),i(3,3.3,t,-2.5,1.6,2,0,Math.PI);let s=new Q;s.position.set(-1.49,1.3,-.1),s.rotation.y=Math.PI/2,n.add(s);for(let[l,c,h,u]of[[.74,.06,0,.42],[.74,.06,0,-.42],[.06,.9,-.35,0],[.06,.9,.35,0]])s.add(at(l,c,.05,"#7A5236",h,u,0,{out:.004}));let r=Mt(n,jt,-.95,-.1,-Math.PI/2),o=Mt(n,jt,-2.05,-.1,Math.PI/2),a=Hi();return n.add(a),(l,c,h)=>(r.pose(rs(l,1)),lt(r,null,l,l>83.6?"surpreso":"neutro",{look:[0,0]}),o.pose({shR:[62,6],elR:100,shL:[50,14],elL:92,headX:22}),lt(o,null,l,"tedio",{look:[0,.6]}),Se(a,o,"R",[0,-.07,.04],[-1.35,0,0]),a.tela("tapete",l*.3%1),ot(h,[[0,[.4,1.5,1.05]],[1,[.25,1.48,.95]]],[-1.6,1.22,-.1],c/3.04,0,0),xE)}),ft(85.48,87.32,{bg:"#C8C0B8",fov:46},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,jt,0,0,0);Ze(e),Xn(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8;let i=Mt(n,Us,0,0,0),s=ii();return n.add(s),s.scale.setScalar(.6),t.portaD.abre(1),(r,o,a)=>{e.pose(En(r)),lt(e,null,r,"tedio",{look:[0,.55]}),hn(t.tel,e),t.tel.tela("tapete",.7);let l=Pt((r-85.48)/1),c=Wt(1.5,-.25,Bn(l)),h=Wt(.85,.45,l);return i.place(c,h,0,-Math.PI/2-.3),i.pose(l<1?me(so(r,{f:2.2}),{shL:[70,-10],elL:80}):{shR:[70,20],elR:30,shL:[60,-12],elL:80,lean:6}),Ve(i,"davi",r,"feliz",l<1?so(r,{f:2.2}):{shR:[80+Math.sin(r*14)*6,20],elR:30,shL:[60,-12],elL:80}),Se(s,i,"L",[0,-.05,.04],[-.3,0,0]),s.set(0),ot(a,[[0,[.1,1.5,-1.15]],[1,[0,1.45,-1.05]]],[-.15,.95,.45],o/1.84),{tint:"#E8E2F8"}}}),ft(87.32,88.52,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,jt,0,0,0);Ze(e);let i=new rn("#9FD8FF",0,1,2);return n.add(i),(s,r,o)=>(e.pose(En(s)),Ve(e,"gui",s,"tedio",En(s),.2,{look:[0,.6]}),e.pose(En(s)),hn(t.tel,e),t.tel.tela("tapete",.75),i.position.copy(t.tel.position),ot(o,[[0,[-1.05,1.28,.9]],[1,[-1,1.27,.82]]],[-.66,1.15,.25],r/1.2,0,0),{tint:"#D8E2FF",exposure:.85})}),ft(88.52,90.24,{bg:"#C8C0B8",fov:46},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,Us,-.25,.45,-Math.PI/2-.3),i=ii();return n.add(i),i.scale.setScalar(.6),(s,r,o)=>{Ve(e,"davi",s,"feliz",{shL:[62,-14],elL:70,shR:[62,-14],elR:70,headX:12},.3),e.root.updateMatrixWorld(!0);let a=e.hands.L.localToWorld(new R(0,-.05,.03)),l=e.hands.R.localToWorld(new R(0,-.05,.03));i.position.copy(a).add(l).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.rotateX(-.4),i.set(Pt((s-89.1)/1.6)*.3);let c=Rc(e.root,.7,.45,.9);return ot(o,c,[i.position.x,i.position.y,i.position.z],r/1.72,0,0),{tint:"#E8E2F8"}}}),ft(90.24,92.04,{bg:"#C8C0B8",fov:46},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,jt,0,0,0);Ze(e),Xn(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8;let i=Mt(n,Us,-.25,.45,-Math.PI/2-.3),s=ii();return n.add(s),s.scale.setScalar(.6),(r,o,a)=>{let l=Math.max(0,Math.sin((r-90.4)*9))*(r>90.4&&r<91.4?1:0),c=Ot({shR:[62,6],elR:100,shL:[70+l*20,40+l*20],elL:20+l*40,lean:8,headX:22});Ve(e,"gui",r,"bravo",c,0,{look:[0,.6]}),e.pose(c),hn(t.tel,e),t.tel.tela("tapete",.8),i.pose({shL:[62,-14],elL:70,shR:[62,-14],elR:70,headX:4,lean:-4}),lt(i,null,r,r>91?"triste":"surpreso",{look:[-.6,-.1]}),i.root.updateMatrixWorld(!0);let h=i.hands.L.localToWorld(new R(0,-.05,.03)),u=i.hands.R.localToWorld(new R(0,-.05,.03));return s.position.copy(h).add(u).multiplyScalar(.5),s.quaternion.copy(i.root.quaternion),s.rotateX(-.4),s.set(.3*(1-Pt((r-91.2)/.6))),ot(a,[[0,[.15,1.45,-1.15]],[1,[.05,1.4,-1.05]]],[-.4,.85,.4],o/1.8),{tint:"#E8E2F8"}}}),ft(92.04,98.04,{bg:"#C8C0B8",fov:46},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,jt,0,0,0);Ze(e),Xn(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8;let i=Mt(n,Us,.3,.2,-Math.PI/2-.6),s=ii();return n.add(s),s.scale.setScalar(.6),(r,o,a)=>{e.pose(En(r)),lt(e,null,r,"tedio",{look:[0,.55]}),hn(t.tel,e),t.tel.tela("tapete",.9),i.pose(me({shL:[30,-40],elL:120,shR:[30,-40],elR:120,headX:8},Oe(r,3,.5))),lt(i,null,r,"triste",{look:[-.7,0]}),i.root.updateMatrixWorld(!0);let l=i.hands.L.localToWorld(new R(0,-.04,.04)),c=i.hands.R.localToWorld(new R(0,-.04,.04));return s.position.copy(l).add(c).multiplyScalar(.5),s.quaternion.copy(i.root.quaternion),s.set(0),ot(a,[[0,[.55,1.15,-1.2]],[1,[.45,1.1,-1.05]]],[.1,.75,.25],o/6,0,.6),{tint:"#E0DCF4"}}}),ft(98.04,101.4,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,Us,0,0,0),i=ii();return n.add(i),i.scale.setScalar(.6),(s,r,o)=>{let a=Pt((s-98.2)/2),l=Wt(.3,1.85,a),c=Wt(.2,.85,a);e.place(l,c,0,Math.atan2(1.55,.65)),e.pose(a<1?me(so(s,{f:1.4,amp:.5}),{shL:[30,-40],elL:120,shR:[30,-40],elR:120}):rs(s,2)),lt(e,null,s,"triste",{look:[0,.4]}),e.root.updateMatrixWorld(!0);let h=e.hands.L.localToWorld(new R(0,-.04,.04)),u=e.hands.R.localToWorld(new R(0,-.04,.04));return i.position.copy(h).add(u).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.set(0),t.portaD.abre(1-Pt((s-100.5)/.8)),s<100.2?ot(o,[[0,[-.1,.32,1.25]],[1,[.1,.3,1.25]]],[l,.12,c],r/2.2,0,0):ot(o,[.4,1,1.25],[1.55,.9,.85],(s-100.2)/1.2,0,0),{tint:"#E0DCF4"}}}),ft(101.4,103.48,{bg:"#2A2A34",fov:30,limpa:!1,perto:!0},n=>{ne(n,{hora:"noite"}).portaD.abre(0);let e=Mt(n,Us,2.3,.6,-2.2),i=ii();n.add(i),i.scale.setScalar(1);let s=Ye([i]);return(r,o,a)=>{e.pose({shL:[30,-40],elL:120,shR:[30,-40],elR:120,headX:14}),lt(e,null,101.4,"triste",{look:[0,.5],vivo:!1}),e.root.updateMatrixWorld(!0);let l=e.hands.L.localToWorld(new R(0,-.04,.04)),c=e.hands.R.localToWorld(new R(0,-.04,.04));i.position.copy(l).add(c).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.set(0),_e.mundo.value=.9,s(1,r),tn(n,"#2A2A34",.9);let h=Rc(e.root,.75-o*.05,.5);return ot(a,h,[i.position.x,i.position.y,i.position.z],o/2.08,0,0),{vig:.5}}}),ft(103.48,105.84,{bg:"#E8E0D0",fov:46},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,gi,-3.9,-.95,Math.PI),i=_t(.01,.01,.25,"#9A6236",0,0,0);n.add(i);let s=mi(n,[-4.12,1.08,-1.2],{n:20,cor:"#F4F4F4",r:.25,g:.3,sobe:1.2,tam:.05});return(r,o,a)=>{let l=An(103.6,104.1,r);e.root.rotation.y=Wt(Math.PI,Math.PI*.35,l);let c=me({shR:[55-l*20,10],elR:70+Math.sin(r*7)*15*(1-l),shL:[20,10],elL:40});return Ve(e,"mae",r,"bravo",c,.6),e.pose(c),Se(i,e,"R",[0,-.08,.04]),s(r*.5%1),ot(a,[[0,[-2.2,1.45,1.1]],[1,[-2.4,1.4,.95]]],[-3.8,1.15,-.8],o/2.36),{tint:"#FFF0DC"}}}),ft(105.84,106.88,{bg:"#E8E0D0",fov:46},n=>{let t=ne(n,{hora:"noite"});t.portaK.abre(1);let e=Mt(n,jt,-1.75,.85,-Math.PI/2);return(i,s,r)=>{let o={shR:[62,6],elR:100,shL:[20,8],elL:30,headX:14+Math.sin(i*9)*8};return Ve(e,"gui",i,"tedio",o,0,{look:[0,.5]}),e.pose(o),hn(t.tel,e),t.tel.tela("tapete",.9),ot(r,[[0,[-3.3,1.35,.6]],[1,[-3.15,1.33,.65]]],[-1.75,1.2,.85],s/1.04),{tint:"#FFF0DC"}}}),ft(106.88,108.28,{bg:"#E8E0D0",fov:46},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,gi,-3.6,-.6,Math.PI*.35),i=_t(.01,.01,.25,"#9A6236",0,0,0);return n.add(i),(s,r,o)=>{Ve(e,"mae",s,"desconfiado",pi.bracoCruzado,0),e.pose(pi.bracoCruzado),Se(i,e,"R",[0,-.06,.04]);let a=Bn(Pt((s-107.2)/.3));return ot(o,[Wt(-2.4,-3,a),Wt(1.3,1.25,a),Wt(.6,-.05,a)],[-3.6,1.18,-.6],r/1.4,0,0),{tint:"#FFF0DC"}}}),ft(108.28,110.56,{bg:"#E8E0D0",fov:46,limpa:!1},n=>{let t=ne(n,{hora:"noite"});t.portaK.abre(1);let e=Mt(n,jt,-1.75,.85,-Math.PI/2),i=Bd();return n.add(i),(s,r,o)=>{let a={shR:[62,6],elR:100,shL:[20,8],elL:30,headX:4};Ve(e,"gui",s,"preocupado",a,0,{look:[Math.sin(s*7)*.8,-.3]}),e.pose(a),hn(t.tel,e),t.tel.tela("apagada"),e.headG.updateMatrixWorld(!0);let l=e.headG.localToWorld(new R(0,.75,0));return i.position.copy(l),i.material.rotation=-s*6,ot(o,[[0,[-2.75,1.3,.95]],[1,[-2.6,1.28,.92]]],[-1.75,1.25,.85],r/2.28,0,0),{tint:"#FFF0DC"}}}),ft(110.56,114.32,{bg:"#E8E0D0",fov:46},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,gi,-3.55,-.55,Math.PI*.7),i=_t(.01,.01,.25,"#9A6236",0,0,0);return n.add(i),(s,r,o)=>{let a=s<112.3?pi.apontar:{shR:[40,20],elR:60,shL:[70,10],elL:20+Math.abs(Math.sin(s*6))*20,headX:4};Ve(e,"mae",s,"preocupado",a,.3),e.pose(a),Se(i,e,"R",[0,-.06,.04]);let l=.35+Math.abs(Math.sin(s*13))*.25*(Math.sin(s*3)>-.2?1:.1);return t.chama.forEach(c=>{c.scale.set(1,l,1),c.material.opacity=.4+l}),s<112.3?ot(o,[[0,[-3,1.3,.35]],[1,[-3.4,1.15,-.5]]],[[0,[-3.6,1.1,-.6]],[1,[-4,.95,-1.2]]],(s-110.56)/1.74,0,0):ot(o,[-2.55,1.35,-1],[-3.55,1.1,-.55],(s-112.3)/2,0,0),{tint:"#FFF0DC"}}}),ft(114.32,116.8,{bg:"#E8E0D0",fov:46},n=>{let t=ne(n,{hora:"tarde"}),e=Mt(n,gi,-2.1,.2,-Math.PI/2+.3),i=Mt(n,jt,0,0,0);return Ze(i),t.portaK.abre(1),t.PK.frente.visible=t.PG.frente.visible=!1,(s,r,o)=>{let a=Math.min(2,Math.floor((s-114.32)/.83)),l=s-114.32-a*.83;return e.place([-2.1,-1.9,-2.3][a],[.2,-.3,.7][a],0,-Math.PI/2+.3),e.pose(me(pi.apontar,{shR:[80+Math.sin(l*12)*10,6]})),lt(e,null,s,"bravo",{mouth:{open:Math.abs(Math.sin(l*14))*.6}}),i.pose(En(s)),lt(i,null,s,"tedio",{look:[0,.6]}),hn(t.tel,i),t.tel.tela("tapete",l),ot(o,[[0,[-1,1.7,3.2]],[1,[-1,1.65,3]]],[-1.1,1,.2],r/2.48,0,0),{sat:.35,tint:"#F4DDB8",vig:.55}}}),ft(116.8,122.16,{bg:"#0A0C18",fov:46},n=>{let t=ne(n,{hora:"noite"});t.luzes.sol.intensity=14,t.luzes.sol.target.position.set(-1.1,.78,.25);let e=Mt(n,jt,0,0,0);return Va(e),e.root.rotation.z=-.5,t.tel.visible=!1,(i,s,r)=>(e.pose({shR:[20,10],elR:40,shL:[20,10],elL:40,headY:-30}),lt(e,null,i,"preocupado",{look:[-.8,0]}),Xn(t,1,.4+Math.sin(i*2)*.2),i<119.8?ot(r,[[0,[-.3,1.5,1]],[1,[-.6,1.25,.7]]],[-1.1,.8,.25],(i-116.8)/3,0,0):ot(r,[[0,[.2,1.7,1.2]],[1,[.3,1.6,1]]],[.9,.7,-.3],(i-119.8)/2.36,0,0),{tint:"#B8C8FF",exposure:.75,vig:.5})}),ft(122.16,127.04,{bg:"#0A0C18",fov:46,limpa:!1},n=>{let t=ne(n,{hora:"noite"});t.luzes.sol.intensity=10;let e=Mt(n,jt,0,0,0);return Va(e),t.tel.visible=!1,(i,s,r)=>{e.pose({shR:[10,10],elR:30,shL:[10,10],elL:30});let o=i>122.3&&i<126.6?Math.abs(Math.sin(i*11))*.25:0;lt(e,null,i,"preocupado",{look:[0,-.2],mouth:{open:o}}),e.headG.updateMatrixWorld(!0);let a=e.headG.localToWorld(new R(0,.26,0));return ot(r,[[0,[a.x+.05,a.y+1.25,a.z+.3]],[1,[a.x+.03,a.y+1.05,a.z+.22]]],[a.x,a.y,a.z],s/4.88,0,0),{tint:"#B8C8FF",exposure:.75,vig:.55}}}),ft(127.04,128.96,{bg:"#020206",fov:46},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,jt,0,0,0);return Va(e),t.tel.visible=!1,(i,s,r)=>{let o=i<127.9;return t.luzAbaj.intensity=o?3:0,t.luzes.sol.intensity=o?8:1.5,e.pose({shR:[10,10],elR:30,shL:[10,10],elL:30}),lt(e,null,i,"sono",{blink:i>128.2?1:.5}),ot(r,[[0,[-.2,1.8,1.3]],[1,[-.1,1.75,1.2]]],[.4,.6,-.2],s/1.92,0,0),{tint:"#B8C8FF",exposure:o?.8:.25,vig:.7}}})];function Kc(n,t=.25,e="#BFE8FF"){n._fant||(n._fant=[],n.root.traverse(i=>{if(!i.isMesh||i===n.sombra)return;let s=i.material,r=s.clone();r.transparent=!0,r.depthWrite=!1,r.color&&!i.userData.isOutline&&r.color.lerp(new xt(e),.35),i.material=r,n._fant.push({m:i,orig:s,nm:r})}));for(let{m:i,nm:s}of n._fant)s.opacity=i.userData.isOutline?t*.6:t,s.uniforms&&s.uniforms.op&&(s.uniforms.op.value=t*.6),i.visible=t>.01;return n.sombra.visible=t>.6,n}var Ns={tint:"#FFF8EC",bloom:.22},RE=n=>(no(n,.95,.43,.38),n.root.position.y=.63,n),wE=(n,t=1)=>({shR:[96,-24],elR:142+Math.sin(n*16*t)*8,shL:[10,10],elL:20,headX:-2});function fo(n){let t=yd(n),e=Mt(n,jt,.3,-.3,Math.PI),i=ud("#3EA6FF");return n.add(i),i.scale.setScalar(1.6),{B:t,g:e,e:i}}var po=(n,t,e=1)=>{n.g.pose(wE(t,e)),Se(n.e,n.g,"R",[0,-.04,.04],[Math.PI/2,0,0])};function CE(n){let t=qt(256,256,i=>{if(i.strokeStyle="#8FF0FF",i.fillStyle="rgba(120,230,255,.25)",i.lineWidth=8,i.shadowColor="#8FF0FF",i.shadowBlur=16,i.lineJoin="round",n==="1789")i.font="900 96px Inter",i.textAlign="center",i.textBaseline="middle",i.fillStyle="#B8F8FF",i.fillText("1789",128,128);else if(n==="coroa")i.beginPath(),i.moveTo(40,180),i.lineTo(40,90),i.lineTo(85,130),i.lineTo(128,70),i.lineTo(171,130),i.lineTo(216,90),i.lineTo(216,180),i.closePath(),i.fill(),i.stroke();else if(n==="napoleao")i.beginPath(),i.arc(128,150,55,0,7),i.fill(),i.stroke(),i.beginPath(),i.moveTo(40,110),i.quadraticCurveTo(128,20,216,110),i.quadraticCurveTo(128,80,40,110),i.fill(),i.stroke(),i.beginPath(),i.arc(108,145,6,0,7),i.arc(148,145,6,0,7),i.stroke();else{i.beginPath(),i.rect(50,100,156,110),i.fill(),i.stroke();for(let s of[50,100,150])i.strokeRect(s,70,32,30);i.beginPath(),i.arc(128,210,26,Math.PI,0),i.stroke()}}),e=new Kn(new kn({map:t,transparent:!0,depthWrite:!1,blending:hr}));return e.scale.setScalar(.32),e.renderOrder=12,e}var FE=n=>{n.strokeStyle="#F4F1EA",n.fillStyle="#F4F1EA",n.font="700 64px Caveat",n.fillText("Revolu\xE7\xE3o Francesa",60,80),n.font="600 46px Caveat",n.fillText("1789 \u2014 Queda da Bastilha",80,160),n.fillText("Liberdade, Igualdade, Fraternidade",80,225),n.fillText("Napole\xE3o Bonaparte",600,290)};function ls(n,t={}){let e=md(n,{giz:FE}),i=[];for(let a=0;a<4;a++)for(let l=0;l<5;l++){let c=-2.4+l*1.2,h=-1+a*1.3;if(a===1&&(l===2||l===3)||(a*5+l)%3===2)continue;let u=Mt(n,io(a*5+l),c,h,Math.PI);qe(u,c,h,Math.PI,.46),u.seed=a*5+l,i.push(u)}let s=Mt(n,jt,0,.3,Math.PI);qe(s,0,.3,Math.PI,.46);let r=Mt(n,ka,1.2,.3,Math.PI);qe(r,1.2,.3,Math.PI,.46);let o=Mt(n,Cd,-.4,-2.9,0);return{A:e,L:i,g:s,ti:r,pr:o}}var Os=(n,t,e=1)=>n.L.forEach((i,s)=>{let r=e>0&&s%2===0;i.pose(Ot(r?{lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120}:me({shR:[40,8],elR:80,shL:[40,8],elL:80,lean:6},Oe(t,s,.5)))),lt(i,null,t,r?"sono":"tedio",{blink:r?1:void 0})});function Wa(n){let t=Rd(n),e=Mt(n,jt,1,-1.85,0);qe(e,1,-1.85,0,.47);let i=Mt(n,ka,1.45,-.55,Math.PI);qe(i,1.45,-.55,Math.PI,.47);let s=Vc();s.scale.setScalar(1.8),n.add(s);let r=at(.06,.1,.04,"#F2994A",0,0,0,{out:.003});return n.add(r),{C:t,g:e,ti:i,cx:s,suco:r}}var Xa=(n,t=1)=>Ot({shL:[70,4],elL:115,shR:[30,8],elR:70,lean:6,headX:6}),Hd=[ft(128.96,131.6,{bg:"#DDE6EE",fov:46,limpa:!1},n=>{let t=ne(n,{hora:"manha"}),e=Mt(n,jt,0,0,0);return RE(e),t.tel.visible=!1,(i,s,r)=>{let o=An(129.5,130.8,i);return e.root.rotation.x=Wt(-Math.PI/2,-.1,o),e.root.position.set(.95,Wt(.63,.45,o),Wt(.38,-.3,o)),e.pose(o>.5?Ot({shL:[20,30],shR:[20,30],elL:30,elR:30}):{shR:[10,10],elR:30,shL:[10,10],elL:30}),lt(e,null,i,(o>.3,"sono"),{blink:o<.2?1:.4}),ot(r,[[0,[-.6,1.6,1.2]],[1,[-.5,1.4,1]]],[.9,.7,-.2],s/2.64),Ns}}),ft(131.6,134.2,{bg:"#DDE6EE",fov:46},n=>{let t=fo(n);return(e,i,s)=>(po(t,e),lt(t.g,null,e,"sono",{blink:.4}),ot(s,[[0,[.92,1.4,-.7]],[1,[.9,1.35,-.62]]],[.3,1.12,-.3],i/2.6),Ns)}),ft(134.2,136.68,{bg:"#DDE6EE",fov:30,perto:!0,limpa:!1},n=>{let t=fo(n),e=Ye([t.e]);return(i,s,r)=>{po(t,i,.35),lt(t.g,null,i,"surpreso",{look:[0,.4]});let o=An(134.2,134.7,i);_e.mundo.value=o,e(o,i),tn(n,"#DDE6EE",o);let a=t.e.getWorldPosition(new R);return ot(r,[[0,[a.x+.55,a.y+.12,a.z+.3]],[1,[a.x+.3,a.y+.05,a.z+.2]]],[a.x,a.y,a.z],s/2.48,0,0),{focus:.35,range:.12,blur:14}}}),ft(136.68,138.44,{bg:"#DDE6EE",fov:28,perto:!0,limpa:!1},n=>{let t=fo(n),e=Ye([t.e]),i=[0,0,0],s=mi(n,i,{n:30,cor:"#FFFFFF",r:.18,tam:.03});return(r,o,a)=>{po(t,r,.2),lt(t.g,null,r,"surpreso",{look:[0,.4]}),_e.mundo.value=1,e(1,r),tn(n,"#DDE6EE",1),t.g.headG.updateMatrixWorld(!0);let l=t.g.headG.localToWorld(new R(0,.12,.3));return i[0]=l.x,i[1]=l.y,i[2]=l.z,s((r-136.68)/1.2%1),ot(a,[[0,[l.x+.45,l.y+.05,l.z+.05]],[1,[l.x+.35,l.y+.03,l.z+.02]]],[l.x,l.y,l.z],o/1.76,0,0),{focus:.4,range:.15,blur:12}}}),ft(138.44,142.2,{bg:"#DDE6EE",fov:34,limpa:!1},n=>{let t=fo(n),e=Ye([t.e,t.g.headG]),i=mi(n,[.3,1.18,-.62],{n:70,cor:"#7AF0B0",r:.55,tam:.03});return(s,r,o)=>(po(t,s,.3),lt(t.g,null,s,s>139.4?"surpreso":"neutro",{look:[0,0]}),_e.mundo.value=1,e(1,s),tn(n,"#DDE6EE",1),i(Pt((s-139.3)/1.8)),ot(o,[[0,[.92,1.35,-.72]],[1,[.88,1.3,-.66]]],[.3,1.15,-.35],r/3.76,0,0),{focus:.7,range:.3,blur:10})}),ft(142.2,147.04,{bg:"#DDE6EE",fov:40},n=>{let t=fo(n),e=Ye([t.e]);return(i,s,r)=>{let o=i>145.3;o?(t.g.pose({shR:[70,-10],elR:90,shL:[10,10],elL:20,headX:14}),Se(t.e,t.g,"R",[0,-.04,.04],[Math.PI/2,0,0])):po(t,i),lt(t.g,null,i,o?"medo":"neutro",{look:o?[.3,.6]:[0,0]});let a=1-An(145.1,145.5,i);return _e.mundo.value=a,e(a,i),tn(n,"#DDE6EE",a),ot(r,[[0,[.92,1.45,-.68]],[1,[.88,1.4,-.6]]],[.3,1.12,-.3],s/4.84),Ns}}),ft(147.04,152.4,{bg:"#F4E8D0",fov:36,limpa:!1},n=>{let t=ne(n,{hora:"manha"});t.tel.visible=!1;let e=Mt(n,jt,0,0,0);qe(e,-2.42,.45,-Math.PI/2,.46);let i=co();i.scale.setScalar(1.6),i.position.set(-2.78,.79,.45),i.rotation.y=Math.PI/2,n.add(i);let s=bd();s.scale.setScalar(1.6),n.add(s);let r=Ye([i,s]);return(o,a,l)=>{let c=Pt((o-148)/3.6);e.pose(Ot({shR:[55,8],elR:70,shL:[45,-10],elL:80,lean:16,headX:26})),lt(e,null,o,"determinado",{look:[0,.7]}),i.userData.passa(c),s.position.set(-2.78,.87,.45+Wt(.1,-.1,c)),s.rotation.set(0,Math.PI/2,-.15);let h=An(147.2,147.8,o);return _e.mundo.value=h,r(h,o),tn(n,"#F4E8D0",h),ot(l,[[0,[-3.4,1.15,.95]],[1,[-3.25,1,.8]]],[-2.78,.84,.45],a/5.36,0,0),{...Ns,focus:.65,range:.25,blur:10}}}),ft(152.4,154.2,{bg:"#F4E8D0",fov:26,perto:!0,limpa:!1},n=>{let t=ne(n,{hora:"manha"});t.tel.visible=!1;let e=co();e.scale.setScalar(1.6),e.position.set(-2.78,.79,.45),e.rotation.y=Math.PI/2,n.add(e),e.userData.passa(1);let i=Ye([e]),s=Ps("\u2726",.12);return n.add(s),s.material.color.set("#FFFFFF"),(r,o,a)=>{_e.mundo.value=1,i(1,r),tn(n,"#F4E8D0",1);let l=Pt((r-153.1)/.5);return s.visible=l>0&&l<1,s.position.set(-2.76,.9,.4),s.scale.setScalar(.12*Math.sin(l*Math.PI)+.001),s.material.rotation=l*2,ot(a,[[0,[-2.55,1.05,.78]],[1,[-2.6,.98,.68]]],[-2.78,.86,.45],o/1.8,0,0),{bloom:.5,bloomT:.8,focus:.35,range:.12,blur:10}}}),ft(154.2,156.76,{bg:"#F4E8D0",fov:40},n=>{let t=ne(n,{hora:"manha"});t.tel.visible=!1;let e=Mt(n,gi,-3.55,0,Math.PI/2+.3),i=Mt(n,as,-3,-.17,0);qe(i,-3,-.2,0,.5);let s=Mt(n,jt,0,0,0);qe(s,-2.42,.45,-Math.PI/2,.46);let r=Nc();r.scale.setScalar(1.4),n.add(r);let o=_t(.008,.008,.2,"#C9CED6",0,0,0);n.add(o);let a=ii();a.scale.setScalar(.7),a.position.set(-3,.79,.15),a.rotation.x=-Math.PI/2,n.add(a);let l=co();l.scale.setScalar(1.6),l.position.set(-2.78,.79,.45),l.rotation.y=Math.PI/2,n.add(l),l.userData.passa(1);let c=pe(.012,"#6A3A1A",0,0,0);return n.add(c),(h,u,d)=>{e.pose({shL:[50,-10],elL:80,shR:[70,10],elR:70,headX:10}),lt(e,null,h,"surpreso",{look:[.6,.4]}),Se(r,e,"L",[0,-.06,.06]),Se(o,e,"R",[0,-.06,.05],[.4,0,0]);let f=o.position,g=(h-154.2)*1.4%1;return c.position.set(f.x,f.y-.1-g*.25,f.z),i.pose(Ot(Oe(h,2,.4))),lt(i,null,h,"feliz",{look:[.5,.3]}),s.pose(Ot({shR:[55,8],elR:70,lean:10,headX:20})),lt(s,null,h,"determinado",{look:[0,.7]}),a.set(0),ot(d,[[0,[-2,1.4,1.35]],[1,[-2.15,1.35,1.2]]],[-3.2,1,0],u/2.56),Ns}}),ft(156.76,158.44,{bg:"#F4E8D0",fov:40},n=>{let t=ne(n,{hora:"manha"});t.tel.visible=!1;let e=Mt(n,gi,-3.55,0,Math.PI/2+.3),i=Nc();return i.scale.setScalar(1.4),n.add(i),(s,r,o)=>(Ve(e,"mae",s,"desconfiado",{shL:[50,-10],elL:80},.5,{brow:1,look:[.6,.3]}),Se(i,e,"L",[0,-.06,.06]),ot(o,[[0,[-2.4,1.4,.9]],[1,[-2.6,1.35,.75]]],[-3.55,1.15,0],r/1.68),Ns)}),ft(158.44,160.56,{bg:"#F4E8D0",fov:40},n=>{let t=ne(n,{hora:"manha"});t.tel.visible=!1;let e=Mt(n,jt,0,0,0);qe(e,-2.42,.45,-Math.PI/2,.46);let i=co();return i.scale.setScalar(1.6),n.add(i),i.userData.passa(1),(s,r,o)=>{let a=s>159.8,l=Ot(a?{shR:[90,-10],elR:130,lean:4}:me(pi.ombros,{shR:[30,24],elR:70}));return Ve(e,"gui",s,"neutro",l,.2),e.pose(l),a?Se(i,e,"R",[0,-.05,.06]):(i.position.set(-2.78,.79,.45),i.rotation.set(0,Math.PI/2,0)),ot(o,[[0,[-3.2,1.35,1.25]],[1,[-3.1,1.3,1.1]]],[-2.42,1.05,.45],r/2.12),Ns}}),ft(160.56,164.92,{bg:"#F2E6C8",fov:44},n=>{let t=ls(n),e=pe(.015,"#BFE8FF",0,0,0);return n.add(e),(i,s,r)=>{Os(t,i,1),Ve(t.pr,"n",i,"feliz",me({shR:[80+Math.sin(i*2)*30,30],elR:40},Oe(i,3)),0,{mouth:{open:Math.abs(Math.sin(i*9))*.5}}),t.ti.pose(Ot({lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120})),lt(t.ti,null,i,"sono",{blink:1,mouth:{open:.3}}),t.ti.headG.updateMatrixWorld(!0);let o=t.ti.headG.localToWorld(new R(.05,.05,.28));return e.position.copy(o),e.position.y-=i*.5%1*.1,t.g.pose(Ot({shR:[40,8],elR:80,shL:[40,8],elL:80,lean:6,headX:4})),lt(t.g,null,i,"tedio"),ot(r,[[0,[2.6,2.1,-2.8]],[1,[2.3,1.9,-2.5]]],[0,.9,.3],s/4.36),{}}}),ft(164.92,169.21,{bg:"#F2E6C8",fov:40},n=>{let t=ls(n);return(e,i,s)=>(Os(t,e,1),t.pr.pose(me({shR:[80,30],elR:40},Oe(e,3))),lt(t.pr,null,e,"neutro"),t.ti.pose(Ot(Oe(e,3))),lt(t.ti,null,e,"tedio"),t.g.pose(Ot({lean:44,headX:34,shL:[70,20],elL:125,shR:[70,20],elR:125})),lt(t.g,null,e,"sono",{blink:1,mouth:{open:.25}}),ot(s,[[0,[-1.1,1.4,-.9]],[1,[-.95,1.35,-.75]]],[0,.8,.3],i/4.29),{sat:.3,tint:"#F4DDB8",vig:.55})}),ft(169.21,170.72,{bg:"#F2E6C8",fov:40},n=>{let t=ls(n),e=Ye([t.pr.root]);return(i,s,r)=>{Os(t,i,1),Ve(t.pr,"n",i,"feliz",me({shR:[80+Math.sin(i*2)*30,30],elR:40},Oe(i,3)),0,{mouth:{open:Math.abs(Math.sin(i*9))*.5}}),t.ti.pose(Ot({lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120})),lt(t.ti,null,i,"sono",{blink:1}),t.g.pose(Ot({shR:[30,8],elR:70,shL:[30,8],elL:70,lean:-2,headX:-4})),lt(t.g,null,i,"determinado",{look:[0,-.1]});let o=An(169.3,169.8,i);return _e.mundo.value=o,e(o,i),tn(n,"#F2E6C8",o),ot(r,[[0,[.9,1.3,1.6]],[1,[.7,1.25,1.4]]],[-.2,1.15,-1],s/1.51),{focus:4,range:1.5,blur:8}}}),ft(170.72,180.24,{bg:"#F2E6C8",fov:40},n=>{let t=ls(n),e=["1789","coroa","napoleao","bastilha"].map(r=>{let o=CE(r);return n.add(o),o}),i=Ye([t.g.root]),s=[171.15,172.6,173.1,174.5];return(r,o,a)=>{Os(t,r,1),t.pr.pose(me({shR:[80+Math.sin(r*2)*30,30],elR:40},Oe(r,3))),lt(t.pr,null,r,"feliz",{mouth:{open:Math.abs(Math.sin(r*9))*.5}}),t.ti.pose(Ot({lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120})),lt(t.ti,null,r,"sono",{blink:1}),t.g.pose(Ot({shR:[30,8],elR:70,shL:[30,8],elL:70,lean:-2,headX:-4})),lt(t.g,null,r,r>177.5?"surpreso":"determinado",{look:[Math.sin(r*2)*.5,-.2]}),_e.mundo.value=.85,i(.6,r),tn(n,"#F2E6C8",.85),t.g.headG.updateMatrixWorld(!0);let l=t.g.headG.localToWorld(new R(0,.3,0));return e.forEach((c,h)=>{let u=Pt((r-s[h])/.4),d=Pt((r-177.3-h*.45)/.5),f=r*1.2+h*Math.PI/2,g=.55*(1-d);c.position.set(l.x+Math.cos(f)*g,l.y+.1+Math.sin(r*2+h)*.06-d*.05,l.z+Math.sin(f)*g*.7-d*.1),c.scale.setScalar(.32*Bn(u)*(1-d*.8)+.001),c.visible=u>0&&d<1}),ot(a,[[0,[1.2,1.45,-.9]],[1,[.9,1.35,-.7]]],[0,1.2,.3],o/9.52),{bloom:.45,bloomT:.7,focus:1.5,range:.6,blur:8}}}),ft(180.24,182.96,{bg:"#F2E6C8",fov:44},n=>{let t=ls(n),e=[];for(let i=0;i<14;i++){let s=new rt(new Bt(.21,.29),new ve({color:"#FBF8EE",side:ke}));n.add(s),e.push(s)}return(i,s,r)=>{let o=i>180.5,a=Pt((i-180.6)/.5);t.pr.place(-1.4,-2.3,0,.3),Ve(t.pr,"prof",i,"bravo",o?{shR:[60-Math.max(0,Math.sin((i-180.5)*12))*30,10],elR:20,lean:10}:{shR:[120,10],elR:30},.2),t.L.forEach((c,h)=>{c.pose(Ot(me({shL:[60,30],shR:[60,30],elL:30,elR:30},{bob:Math.sin(a*Math.PI)*.12}))),lt(c,null,i,a>0?"surpreso":"sono")}),t.ti.pose(Ot({bob:Math.sin(a*Math.PI)*.12,shL:[60,30],shR:[60,30]})),lt(t.ti,null,i,"medo"),t.g.pose(Ot({shR:[30,8],elR:70})),lt(t.g,null,i,"neutro"),e.forEach((c,h)=>{let u=Pt((i-180.6)/2);c.visible=u>0,c.position.set(-2.4+h%5*1.2+Math.sin(h)*.3,.8+Math.sin(u*Math.PI)*(1+h%3*.3),-1.4+Math.floor(h/5)*1.3+u*.4),c.rotation.set(u*6+h,u*4,h)}),ot(r,[[0,[2.7,1.9,-3]],[1,[2.5,1.8,-2.8]]],[-.3,1,-.2],s/2.72,0,1);let l=o&&i<180.9?Math.sin(i*80)*.02:0;return r.position.y+=l,{}}}),ft(182.96,184.96,{bg:"#F2E6C8",fov:40},n=>{let t=ls(n),e=Mt(n,ka,1.2,.3,Math.PI);return Kc(e,.35),(i,s,r)=>{Os(t,i,0),t.ti.pose(Ot({shL:[110,10],elL:140,shR:[110,10],elR:140,headX:6})),Ve(t.ti,"tiago",i,"medo",t.ti._p,0),t.ti.pose(Ot({shL:[110,10],elL:140,shR:[110,10],elR:140,headX:6}));let o=Pt((i-183.6)/1.2);return Kc(e,.45*(1-o*.5)),e.place(1.2,.3,.3+o*.6,Math.PI),e.pose({shL:[160,30],shR:[160,30],elL:10,elR:10,bob:0}),lt(e,null,i,"medo"),e.root.visible=i>183.5,t.g.pose(Ot({shR:[30,8],elR:70})),lt(t.g,null,i,"neutro"),ot(r,[[0,[2.3,1.5,-1.2]],[1,[2.15,1.5,-1.05]]],[1.2,1.2,.3],s/2),{}}}),ft(184.96,188.4,{bg:"#F2E6C8",fov:36,perto:!0},n=>{let t=ls(n),e=Wc("3","#D8342C"),i=Wc("10","#2E5EC8");return e.position.set(.98,.78,-.2),i.position.set(.22,.78,-.2),n.add(e,i),(s,r,o)=>(Os(t,s,0),t.ti.pose(Ot({lean:20,headX:20})),lt(t.ti,null,s,"choro"),t.g.pose(Ot({shR:[30,8],elR:70})),lt(t.g,null,s,"feliz"),e.visible=s>185,i.visible=s>186.8,ot(o,[[0,[.75,1.6,.25]],[1,[.6,1.4,.1]]],[.6,.78,-.22],r/3.44,0,0),{})}),ft(188.4,192.8,{bg:"#F2E6C8",fov:40},n=>{let t=ls(n),e=_t(.008,.008,.16,"#2E5EC8",0,0,0,{out:.002});n.add(e);let i=[0,0,0],s=mi(n,i,{n:20,cor:"#FFD86A",r:.12,tam:.015});return(r,o,a)=>{Os(t,r,0),t.ti.pose(Ot({shR:[50,8],elR:80,lean:14,headX:20})),lt(t.ti,null,r,"preocupado");let l=r<190.2;t.g.pose(Ot(l?{shR:[55+Math.sin(r*40)*4,6],elR:85,lean:16,headX:24}:{shR:[70,6],elR:100+Math.sin(r*3)*10,shL:[130,20],elL:140,headX:-8})),lt(t.g,null,r,l?"determinado":"sono",{mouth:l?void 0:{open:r>190.6&&r<191.6?.8:0,round:1}}),Se(e,t.g,"R",[0,-.05,.04]),l||(e.rotation.z=r*12);let c=e.position;return i[0]=c.x,i[1]=c.y-.06,i[2]=c.z,s(l?r*3%1:0),ot(a,[[0,[.9,1.45,-1.2]],[1,[.75,1.4,-1]]],[0,1,.3],o/4.4),{}}}),ft(192.8,199.4,{bg:"#FFFFFF",fov:38},n=>{let t=Wa(n),e=Ye([t.cx]);return(i,s,r)=>{let o=An(194,194.4,i);t.C.g.visible=o<.5,t.ti.root.visible=o<.5,n.background=new xt(o>.5?"#FFFFFF":"#F2E6C8");let a=Pt((i-194.3)/.3);return t.g.pose(Xa(i)),lt(t.g,null,i,o>.5?"feliz":"neutro",{blink:o>.5?1:void 0,mouth:a>0&&a<1?{open:.7}:void 0}),Se(t.cx,t.g,"L",[0,-.04,.08]),t.cx.userData.morde(a),t.ti.pose(Ot(Oe(i,3))),lt(t.ti,null,i,"neutro"),_e.mundo.value=(o<.5,0),e(o,i),ot(r,[[0,[3,1.5,-1]],[1,[2.2,1.3,-1.5]]],[1,1.05,-1.8],s/6.6),{exposure:1+o*.1,bloom:.3}}}),ft(199.4,204.48,{bg:"#FFFFFF",fov:28,perto:!0,limpa:!1},n=>{let t=Vc(1);t.scale.setScalar(4),t.position.set(0,.8,0),n.add(t),n.add(new xs("#FFFFFF","#F4E0C0",1.6));let e=new es("#FFF4E0",1.8);e.position.set(2,4,3),n.add(e);let i=mi(n,[.05,1.1,.08],{n:26,cor:"#FFFFFF",r:.25,g:.4,sobe:1.6,tam:.06}),s=mi(n,[.08,1,.12],{n:30,cor:"#E8B060",r:.3,tam:.015});return(r,o,a)=>(t.rotation.y=.4+r*.1,i((r-199.4)/2.5%1),s(Pt((r-199.6)/1.5)),t.userData.morde(r>203.4?1:.4),ot(a,[[0,[.55,1.05,.6]],[.5,[.4,.98,.45]],[1,[.3,.95,.38]]],[.05,.95,.05],o/5.08,0,0),{bloom:.35})}),ft(204.48,210.98,{bg:"#F2E6C8",fov:40},n=>{let t=Wa(n);t.cx.userData.morde(1);let e=pe(.02,"#9FD8FF",0,0,0);return n.add(e),(i,s,r)=>{t.g.pose(Xa(i)),lt(t.g,null,i,"feliz",{lagrima:!0}),Se(t.cx,t.g,"L",[0,-.04,.08]),t.g.headG.updateMatrixWorld(!0);let o=t.g.headG.localToWorld(new R(.12,.2,.28));return e.position.copy(o),e.position.y-=i*.4%1*.12,t.ti.pose(Ot({shR:[80,6],elR:100,shL:[30,8],elL:60,lean:-6})),lt(t.ti,null,i,"surpreso",{look:[0,.2]}),Se(t.suco,t.ti,"R",[0,-.05,.05]),i<207.6?ot(r,[[0,[2.6,1.35,-.6]],[1,[2.4,1.3,-.7]]],[1.45,1.05,-.55],(i-204.48)/3.12):ot(r,[[0,[2.4,1.35,-2]],[1,[2.2,1.3,-1.9]]],[1,1.05,-1.85],(i-207.6)/3.38),{}}}),ft(210.98,212.48,{bg:"#F2E6C8",fov:40},n=>{let t=Wa(n);t.cx.userData.morde(1);let e=_t(.004,.004,.14,"#F2546E",0,0,0);return n.add(e),(i,s,r)=>{t.g.pose(Xa(i)),lt(t.g,null,i,"feliz",{blink:1}),Se(t.cx,t.g,"L",[0,-.04,.08]);let o=Math.max(0,Math.sin(i*10)),a=Ot({shR:[90-o*10,30],elR:30,shL:[30,8],elL:60,lean:10});return Ve(t.ti,"tiago",i,"preocupado",a,0),t.ti.pose(a),Se(e,t.ti,"R",[0,-.06,.05],[Math.PI/2,0,0]),ot(r,[[0,[2.7,1.4,-1.3]],[1,[2.55,1.35,-1.25]]],[1.2,1.05,-1.2],s/1.5),{}}}),ft(212.48,215.48,{bg:"#F2E6C8",fov:34},n=>{let t=Wa(n);return t.cx.userData.morde(1),(e,i,s)=>{let r=Xa(e);Ve(t.g,"gui",e,"determinado",r,0,{look:[.3,0]}),t.g.pose(r),Se(t.cx,t.g,"L",[0,-.04,.08]),t.g.headG.rotation.z+=Math.sin(e*14)*.03,t.ti.pose(Ot(Oe(e,3))),lt(t.ti,null,e,"surpreso");let o=.5-i/3*.4;return ot(s,[1+Math.sin(o)*1.2,1.3,-1.85+Math.cos(o)*1.2],[1,1.15,-1.85],i/3,.04),{vig:.5,sat:1.15}}}),ft(215.48,224.89,{bg:"#C8C0B8",fov:46},n=>{let t=ne(n,{hora:"noite"});t.luzes.LG.intensity=1.8,t.luzAbaj.intensity=1.2;let e=Mt(n,jt,0,0,0);Ze(e);let i=_t(.006,.006,.14,"#2E5EC8",0,0,0,{out:.002});n.add(i),t.tel.position.set(-1,.79,-.18),t.tel.rotation.set(-Math.PI/2,0,-Math.PI/2);let s=Ye([e.root,t.caderno]),r=[217,218.3,219.1,220.4,221.2,222.5,223.3,224.1];return(o,a,l)=>(e.pose(Ot({shR:[58+Math.sin(o*9)*3,4],elR:92+Math.sin(o*13)*4,shL:[44,6],elL:84,lean:14,headX:26})),lt(e,null,o,"determinado",{look:[0,.7]}),Se(i,e,"R",[0,-.05,.04],[.6,0,0]),$c(t,Pt((o-216.3)/8)),t.tel.position.x=-1+ro(o,r,.4),t.tel.tela(r.some(c=>o>c&&o<c+.4)?"bloqueio":"apagada"),_e.mundo.value=.9,s(.4,o),tn(n,"#C8C0B8",.9),ot(l,[[0,[-.9,1.55,1.35]],[1,[-.95,1.5,1.2]]],[-.75,1,.15],a/9.41),{tint:"#E8E2FF"})}),ft(224.89,227.78,{bg:"#C8C0B8",fov:40},n=>{let t=ne(n,{hora:"noite"});t.luzes.LG.intensity=1.8;let e=uo();e.position.set(-.5,2,-1.47),n.add(e);let i=Mt(n,jt,0,0,0);return Ze(i),(s,r,o)=>{let a=Cn(Pt((s-225)/2.4))*120;return e.hora(19,a),i.pose(Ot({shR:[40,8],elR:80,lean:0,headX:-20,headY:30})),lt(i,null,s,"surpreso",{look:[.5,-.6]}),ot(o,[[0,[-.4,1.85,-.7]],[1,[-.45,1.9,-.85]]],[-.5,2,-1.47],r/2.89,0,0),{tint:"#E8E2FF"}}}),ft(227.78,233.48,{bg:"#C8C0B8",fov:44},n=>{let t=ne(n,{hora:"noite"});t.luzes.LG.intensity=1.8,t.luzAbaj.intensity=1.2;let e=Mt(n,jt,0,0,0);return Ze(e),$c(t,1),(i,s,r)=>{if(e.pose(En(i)),lt(e,null,i,i>230.9?"desconfiado":"surpreso",{look:[0,.55]}),hn(t.tel,e),t.tel.tela("mensagens",Pt((i-228.4)/1.8)),i<230.9){e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let o=e.headG.localToWorld(new R(0,.3,.05)),a=t.tel.position;ot(r,[o.x,o.y,o.z],[a.x,a.y,a.z],(i-227.78)/3.1,0,0)}else e.headG.visible=!0,ot(r,[[0,[-.95,1.35,1.05]],[1,[-.9,1.32,.95]]],[-.66,1.15,.25],(i-230.9)/2.58);return{tint:"#E8E2FF"}}}),ft(233.48,234.68,{bg:"#1A1A22",fov:30,perto:!0,limpa:!1},n=>{let t=ne(n,{hora:"noite"}),e=Mt(n,jt,0,0,0);Ze(e);let i=Ye([t.tel]);return(s,r,o)=>{e.pose(En(233.5)),lt(e,null,233.5,"desconfiado",{vivo:!1}),hn(t.tel,e),t.tel.tela("mensagens",1),_e.mundo.value=.9,i(1,s),tn(n,"#1A1A22",.9);let a=t.tel.position;e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let l=e.headG.localToWorld(new R(0,.25,.1));return ot(o,[l.x,l.y,l.z],[a.x,a.y,a.z],r/1.2,0,0),{vig:.55}}})];var Qc=(n,t)=>ft(n,n+1,{bg:"#DDE6EE",fov:50,limpa:!1,perto:!0},e=>{let i=ne(e,{hora:"tarde"}),s=Mt(e,jt,0,0,0);Ze(s);let r=pe(.02,"#FF0000");return e.add(r),(o,a,l)=>{s.pose(En(o)),lt(s,null,o,"neutro"),hn(i.tel,s),i.tel.tela("chat",.5);let c=[0,0,0];return r.position.set(...c),ot(l,t,[-.8,1,.25],0,0,0),{}}}),Nd=[Qc(0,[-.7,1.3,1.4]),Qc(1,[-.75,2.3,.26]),Qc(2,[.6,1.4,.25])];var Od=location.search.includes("teste")?Nd:[...Ld,...Ud,...Hd];window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(t=>document.fonts.load(t))).catch(()=>{});let n=new Sa(document.getElementById("film3d"));for(let t of Od)n.add(t);window.addEventListener("hf-seek",t=>n.render(t.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
