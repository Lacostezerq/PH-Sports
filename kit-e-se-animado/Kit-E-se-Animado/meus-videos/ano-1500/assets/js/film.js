var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var ac="170";var $d=0,kc=1,Jd=2;var jh=1,lc=2,Qn=3,Mi=0,en=1,he=2,Bn=0,Ei=1,nn=2,Vc=3,Gc=4,Qd=5,ki=100,Kd=101,jd=102,tf=103,ef=104,nf=200,sf=201,rf=202,of=203,Ua=204,Na=205,af=206,lf=207,cf=208,hf=209,uf=210,df=211,ff=212,pf=213,mf=214,Ba=0,Oa=1,Ha=2,Rs=3,za=4,ka=5,Va=6,Ga=7,tu=0,gf=1,yf=2,On=0,vf=1,_f=2,Ef=3,Mf=4,Sf=5,bf=6,Tf=7;var eu=300,Cs=301,Ps=302,Wa=303,Xa=304,Bo=306,Ve=1e3,Gi=1001,Ya=1002,mn=1003,Af=1004;var wr=1005;var Un=1006,jo=1007;var Wi=1008;var ni=1009,nu=1010,iu=1011,ur=1012,cc=1013,ii=1014,Nn=1015,ln=1016,hc=1017,uc=1018,Is=1020,su=35902,ru=1021,ou=1022,Rn=1023,au=1024,lu=1025,As=1026,Fs=1027,dc=1028,fc=1029,cu=1030,pc=1031;var mc=1033,so=33776,ro=33777,oo=33778,ao=33779,Za=35840,qa=35841,$a=35842,Ja=35843,Qa=36196,Ka=37492,ja=37496,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,lo=36492,pl=36494,ml=36495,hu=36283,gl=36284,yl=36285,vl=36286;var co=2300,_l=2301,ta=2302,Wc=2400,Xc=2401,Yc=2402;var xf=3200,Os=3201;var uu=0,wf=1,vi="",ye="srgb",Ci="srgb-linear",Oo="linear",me="srgb";var ss=7680;var Zc=519,Rf=512,Cf=513,Pf=514,du=515,If=516,Ff=517,Df=518,Lf=519,El=35044;var qc="300 es",jn=2e3,ho=2001,Si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ea=Math.PI/180,uo=180/Math.PI;function ti(){let i=__sr()*4294967295|0,t=__sr()*4294967295|0,e=__sr()*4294967295|0,n=__sr()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function Uf(i,t){return(i%t+t)%t}function na(i,t,e){return(1-e)*i+e*t}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var et=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],E=s[1],M=s[4],v=s[7],I=s[2],R=s[5],P=s[8];return r[0]=o*y+a*E+l*I,r[3]=o*m+a*M+l*R,r[6]=o*p+a*v+l*P,r[1]=c*y+h*E+u*I,r[4]=c*m+h*M+u*R,r[7]=c*p+h*v+u*P,r[2]=d*y+f*E+g*I,r[5]=d*m+f*M+g*R,r[8]=d*p+f*v+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ia.makeScale(t,e)),this}rotate(t){return this.premultiply(ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ia=new Jt;function fu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nf(){let i=fo("canvas");return i.style.display="block",i}var $c={};function rr(i){i in $c||($c[i]=!0,console.warn(i))}function Bf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Of(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var re={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=xs(i.r),i.g=xs(i.g),i.b=xs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?Oo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Jc=[.64,.33,.3,.6,.15,.06],Qc=[.2126,.7152,.0722],Kc=[.3127,.329],jc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[Ci]:{primaries:Jc,whitePoint:Kc,transfer:Oo,toXYZ:jc,fromXYZ:th,luminanceCoefficients:Qc,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:Jc,whitePoint:Kc,transfer:me,toXYZ:jc,fromXYZ:th,luminanceCoefficients:Qc,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}});var rs,Ml=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=fo("canvas")),rs.width=t.width,rs.height=t.height;let n=rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zf=0,po=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sa(s[o].image)):r.push(sa(s[o]))}else r=sa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kf=0,on=class i extends Si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Gi,s=Gi,r=Un,o=Wi,a=Rn,l=ni,c=i.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=ti(),this.name="",this.source=new po(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ve:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ve:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=eu;on.DEFAULT_ANISOTROPY=1;var ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(f+1)/2,I=(p+1)/2,R=(h+d)/4,P=(u+y)/4,F=(g+m)/4;return M>v&&M>I?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=P/n):v>I?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=F/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=F/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-y)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sl=class extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new po(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends Sl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},mo=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bl=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*y,E=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let I=Math.sqrt(M),R=Math.atan2(I,p*E);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}let v=a*E;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+y*v,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*__sr(),e=2*Math.PI*__sr(),n=__sr(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ra.copy(this).projectOnVector(t),this.sub(ra)}reflect(t){return this.sub(ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let t=__sr()*Math.PI*2,e=__sr()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ra=new C,eh=new bi,si=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Cr.subVectors(this.max,$s),os.subVectors(t.a,$s),as.subVectors(t.b,$s),ls.subVectors(t.c,$s),di.subVectors(as,os),fi.subVectors(ls,as),Li.subVectors(os,ls);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Li.z,Li.y,di.z,0,-di.x,fi.z,0,-fi.x,Li.z,0,-Li.x,-di.y,di.x,0,-fi.y,fi.x,0,-Li.y,Li.x,0];return!oa(e,os,as,ls,Cr)||(e=[1,0,0,0,1,0,0,0,1],!oa(e,os,as,ls,Cr))?!1:(Pr.crossVectors(di,fi),e=[Pr.x,Pr.y,Pr.z],oa(e,os,as,ls,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Yn=[new C,new C,new C,new C,new C,new C,new C,new C],An=new C,Rr=new si,os=new C,as=new C,ls=new C,di=new C,fi=new C,Li=new C,$s=new C,Cr=new C,Pr=new C,Ui=new C;function oa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ui.fromArray(i,r);let a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=t.dot(Ui),c=e.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Vf=new si,Js=new C,aa=new C,Ti=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(aa)),this.expandByPoint(Js.copy(t.center).sub(aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new C,la=new C,Ir=new C,pi=new C,ca=new C,Fr=new C,ha=new C,go=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){la.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(la);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ir),a=pi.dot(this.direction),l=-pi.dot(Ir),c=pi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(la).addScaledVector(Ir,d),f}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){ca.subVectors(e,t),Fr.subVectors(n,t),ha.crossVectors(ca,Fr);let o=this.direction.dot(ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);let l=a*this.direction.dot(Fr.crossVectors(pi,Fr));if(l<0)return null;let c=a*this.direction.dot(ca.cross(pi));if(c<0||l+c>o)return null;let h=-a*pi.dot(ha);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d+y*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gf,t,Wf)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),mi.crossVectors(n,fn),mi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),mi.crossVectors(n,fn)),mi.normalize(),Dr.crossVectors(fn,mi),s[0]=mi.x,s[4]=Dr.x,s[8]=fn.x,s[1]=mi.y,s[5]=Dr.y,s[9]=fn.y,s[2]=mi.z,s[6]=Dr.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],E=n[3],M=n[7],v=n[11],I=n[15],R=s[0],P=s[4],F=s[8],T=s[12],S=s[1],w=s[5],V=s[9],B=s[13],H=s[2],Q=s[6],W=s[10],st=s[14],X=s[3],ht=s[7],yt=s[11],Tt=s[15];return r[0]=o*R+a*S+l*H+c*X,r[4]=o*P+a*w+l*Q+c*ht,r[8]=o*F+a*V+l*W+c*yt,r[12]=o*T+a*B+l*st+c*Tt,r[1]=h*R+u*S+d*H+f*X,r[5]=h*P+u*w+d*Q+f*ht,r[9]=h*F+u*V+d*W+f*yt,r[13]=h*T+u*B+d*st+f*Tt,r[2]=g*R+y*S+m*H+p*X,r[6]=g*P+y*w+m*Q+p*ht,r[10]=g*F+y*V+m*W+p*yt,r[14]=g*T+y*B+m*st+p*Tt,r[3]=E*R+M*S+v*H+I*X,r[7]=E*P+M*w+v*Q+I*ht,r[11]=E*F+M*V+v*W+I*yt,r[15]=E*T+M*B+v*st+I*Tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+y*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],E=u*m*c-y*d*c+y*l*f-a*m*f-u*l*p+a*d*p,M=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,v=h*y*c-g*u*c+g*a*f-o*y*f-h*a*p+o*u*p,I=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,R=e*E+n*M+s*v+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return t[0]=E*P,t[1]=(y*d*r-u*m*r-y*s*f+n*m*f+u*s*p-n*d*p)*P,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*p+n*l*p)*P,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*P,t[4]=M*P,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*P,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*P,t[8]=v*P,t[9]=(g*u*r-h*y*r-g*n*f+e*y*f+h*n*p-e*u*p)*P,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*p+e*a*p)*P,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*P,t[12]=I*P,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*m+e*u*m)*P,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*m-e*a*m)*P,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,y=o*h,m=o*u,p=a*u,E=l*c,M=l*h,v=l*u,I=n.x,R=n.y,P=n.z;return s[0]=(1-(y+p))*I,s[1]=(f+v)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+p))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+M)*P,s[9]=(m-E)*P,s[10]=(1-(d+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=cs.set(s[0],s[1],s[2]).length(),o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);let c=1/r,h=1/o,u=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=jn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(a===jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ho)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=jn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,g,y;if(a===jn)g=(o+r)*u,y=-2*u;else if(a===ho)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},cs=new C,xn=new _e,Gf=new C(0,0,0),Wf=new C(1,1,1),mi=new C,Dr=new C,fn=new C,nh=new _e,ih=new bi,Hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ih.setFromEuler(this),this.setFromQuaternion(ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var yo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xf=0,sh=new C,hs=new bi,qn=new _e,Lr=new C,Qs=new C,Yf=new C,Zf=new bi,rh=new C(1,0,0),oh=new C(0,1,0),ah=new C(0,0,1),lh={type:"added"},qf={type:"removed"},us={type:"childadded",child:null},ua={type:"childremoved",child:null},Pe=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Hn,n=new bi,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Jt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(rh,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,e){return sh.copy(t).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rh,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Qs,Lr,this.up):qn.lookAt(Lr,Qs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(qn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lh),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qf),ua.child=t,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lh),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new C(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new C,$n=new C,da=new C,Jn=new C,ds=new C,fs=new C,ch=new C,fa=new C,pa=new C,ma=new C,ga=new ve,ya=new ve,va=new ve,_i=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),$n.subVectors(n,e),da.subVectors(t,e);let o=wn.dot(wn),a=wn.dot($n),l=wn.dot(da),c=$n.dot($n),h=$n.dot(da),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ga.setScalar(0),ya.setScalar(0),va.setScalar(0),ga.fromBufferAttribute(t,e),ya.fromBufferAttribute(t,n),va.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ga,r.x),o.addScaledVector(ya,r.y),o.addScaledVector(va,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),$n.subVectors(t,e),wn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),wn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ds.subVectors(s,n),fs.subVectors(r,n),fa.subVectors(t,n);let l=ds.dot(fa),c=fs.dot(fa);if(l<=0&&c<=0)return e.copy(n);pa.subVectors(t,s);let h=ds.dot(pa),u=fs.dot(pa);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ds,o);ma.subVectors(t,r);let f=ds.dot(ma),g=fs.dot(ma);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(fs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ch.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(ch,a);let p=1/(m+y+d);return o=y*p,a=d*p,e.copy(n).addScaledVector(ds,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function _a(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Uf(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=_a(o,r,t+1/3),this.g=_a(o,r,t),this.b=_a(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return re.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Xe(Qe.r*255,0,255))*65536+Math.round(Xe(Qe.g*255,0,255))*256+Math.round(Xe(Qe.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=ye){re.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Ur);let n=na(gi.h,Ur.h,e),s=na(gi.s,Ur.s,e),r=na(gi.l,Ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new Ut;Ut.NAMES=pu;var $f=0,ri=class extends Si{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=ti(),this.name="",this.blending=Ei,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ue=class extends ri{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new C,Nr=new et,Ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==El&&(t.usage=this.usage),t}};var vo=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _o=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},Jf=0,En=new _e,Ea=new Pe,ps=new C,pn=new si,Ks=new si,ke=new C,Re=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fu(t)?_o:vo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Ea.lookAt(t),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(pn.min,Ks.min),pn.expandByPoint(ke),ke.addVectors(pn.max,Ks.max),pn.expandByPoint(ke)):(pn.expandByPoint(Ks.min),pn.expandByPoint(Ks.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(t,c),ke.add(ps)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new C,l[F]=new C;let c=new C,h=new C,u=new C,d=new et,f=new et,g=new et,y=new C,m=new C;function p(F,T,S){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),a[F].add(y),a[T].add(y),a[S].add(y),l[F].add(m),l[T].add(m),l[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let F=0,T=E.length;F<T;++F){let S=E[F],w=S.start,V=S.count;for(let B=w,H=w+V;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new C,v=new C,I=new C,R=new C;function P(F){I.fromBufferAttribute(s,F),R.copy(I);let T=a[F];M.copy(T),M.sub(I.multiplyScalar(I.dot(T))).normalize(),v.crossVectors(R,T);let w=v.dot(l[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,w)}for(let F=0,T=E.length;F<T;++F){let S=E[F],w=S.start,V=S.count;for(let B=w,H=w+V;B<H;B+=3)P(t.getX(B+0)),P(t.getX(B+1)),P(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hh=new _e,Ni=new go,Br=new Ti,uh=new C,Or=new C,Hr=new C,zr=new C,Ma=new C,kr=new C,dh=new C,Vr=new C,Z=class extends Pe{constructor(t=new Re,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ma.fromBufferAttribute(u,t),o?kr.addScaledVector(Ma,h):kr.addScaledVector(Ma.sub(e),h))}e.add(kr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(Br.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Br,uh)===null||Ni.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(hh.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(hh),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,I=M;v<I;v+=3){let R=a.getX(v),P=a.getX(v+1),F=a.getX(v+2);s=Gr(this,p,t,n,c,h,u,R,P,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let E=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=Gr(this,o,t,n,c,h,u,E,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,I=M;v<I;v+=3){let R=v,P=v+1,F=v+2;s=Gr(this,p,t,n,c,h,u,R,P,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let E=m,M=m+1,v=m+2;s=Gr(this,o,t,n,c,h,u,E,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Qf(i,t,e,n,s,r,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Mi,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Vr);return c<e.near||c>e.far?null:{distance:c,point:Vr.clone(),object:i}}function Gr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Or),i.getVertexPosition(l,Hr),i.getVertexPosition(c,zr);let h=Qf(i,t,e,n,Or,Hr,zr,dh);if(h){let u=new C;_i.getBarycoord(dh,Or,Hr,zr,u),s&&(h.uv=_i.getInterpolatedAttribute(s,a,l,c,u,new et)),r&&(h.uv1=_i.getInterpolatedAttribute(r,a,l,c,u,new et)),o&&(h.normal=_i.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};_i.getNormal(Or,Hr,zr,d.normal),h.face=d,h.barycoord=u}return h}var sn=class i extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(y,m,p,E,M,v,I,R,P,F,T){let S=v/P,w=I/F,V=v/2,B=I/2,H=R/2,Q=P+1,W=F+1,st=0,X=0,ht=new C;for(let yt=0;yt<W;yt++){let Tt=yt*w-B;for(let Zt=0;Zt<Q;Zt++){let ae=Zt*S-V;ht[y]=ae*E,ht[m]=Tt*M,ht[p]=H,c.push(ht.x,ht.y,ht.z),ht[y]=0,ht[m]=0,ht[p]=R>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Zt/P),u.push(1-yt/F),st+=1}}for(let yt=0;yt<F;yt++)for(let Tt=0;Tt<P;Tt++){let Zt=d+Tt+Q*yt,ae=d+Tt+Q*(yt+1),J=d+(Tt+1)+Q*(yt+1),ot=d+(Tt+1)+Q*yt;l.push(Zt,ae,ot),l.push(ae,J,ot),X+=6}a.addGroup(f,X,T),f+=X,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ds(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=Ds(i[e]);for(let s in n)t[s]=n[s]}return t}function Kf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Hs={clone:Ds,merge:tn},jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends ri{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Eo=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yi=new C,fh=new et,ph=new et,Ye=class extends Eo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,fh,ph),e.subVectors(ph,fh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ea*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ms=-90,gs=1,Tl=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new Ye(ms,gs,t,e);r.layers=this.layers,this.add(r);let o=new Ye(ms,gs,t,e);o.layers=this.layers,this.add(o);let a=new Ye(ms,gs,t,e);a.layers=this.layers,this.add(a);let l=new Ye(ms,gs,t,e);l.layers=this.layers,this.add(l);let c=new Ye(ms,gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Mo=class extends on{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Al=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sn(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Bn});r.uniforms.tEquirect.value=e;let o=new Z(s,r),a=e.minFilter;return e.minFilter===Wi&&(e.minFilter=Un),new Tl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Sa=new C,ep=new C,np=new Jt,Kn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Sa.subVectors(n,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||np.getNormalMatrix(t),s=this.coplanarPoint(Sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new Ti,Wr=new C,dr=class{constructor(t=new Kn,e=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],E=s[13],M=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+h,m+g,v+E).normalize(),n[3].setComponents(l-o,d-h,m-g,v-E).normalize(),n[4].setComponents(l-a,d-u,m-y,v-M).normalize(),e===jn)n[5].setComponents(l+a,d+u,m+y,v+M).normalize();else if(e===ho)n[5].setComponents(a,u,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Wr.x=s.normal.x>0?t.max.x:t.min.x,Wr.y=s.normal.y>0?t.max.y:t.min.y,Wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.__noRaf(s)}return{start:function(){t!==!0&&e!==null&&(n=i.__noRaf(s),t=!0)},stop:function(){i.__noCaf(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ip(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ft=class i extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let E=p*d-o;for(let M=0;M<c;M++){let v=M*u-r;g.push(v,-E,0),y.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let M=E+c*p,v=E+c*(p+1),I=E+1+c*(p+1),R=E+1+c*p;f.push(M,v,R),f.push(v,I,R)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(y,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yp=`#ifdef USE_IRIDESCENCE
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
#endif`,vp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cp=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e0=`PhysicalMaterial material;
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
#endif`,n0=`struct PhysicalMaterial {
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
}`,i0=`
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f0=`#if defined( USE_POINTS_UV )
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
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
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
#endif`,E0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
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
#endif`,w0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
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
}`,hm=`#if DEPTH_PACKING == 3200
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
}`,um=`#define DISTANCE
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
}`,dm=`#define DISTANCE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
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
}`,gm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,_m=`#define LAMBERT
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
}`,Em=`#define LAMBERT
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
}`,Mm=`#define MATCAP
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
}`,Sm=`#define MATCAP
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
}`,bm=`#define NORMAL
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
}`,Tm=`#define NORMAL
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
}`,Am=`#define PHONG
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
}`,xm=`#define PHONG
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
}`,wm=`#define STANDARD
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
}`,Rm=`#define STANDARD
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
}`,Cm=`#define TOON
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
}`,Pm=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Lm=`uniform vec3 color;
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
}`,Um=`uniform float rotation;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:op,alphamap_pars_fragment:ap,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:hp,aomap_pars_fragment:up,batching_pars_vertex:dp,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:yp,bumpmap_pars_fragment:vp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:Sp,color_fragment:bp,color_pars_fragment:Tp,color_pars_vertex:Ap,color_vertex:xp,common:wp,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Ip,emissivemap_fragment:Fp,emissivemap_pars_fragment:Dp,colorspace_fragment:Lp,colorspace_pars_fragment:Up,envmap_fragment:Np,envmap_common_pars_fragment:Bp,envmap_pars_fragment:Op,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:Jp,envmap_vertex:zp,fog_vertex:kp,fog_pars_vertex:Vp,fog_fragment:Gp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:Yp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:qp,lights_pars_begin:$p,lights_toon_fragment:Qp,lights_toon_pars_fragment:Kp,lights_phong_fragment:jp,lights_phong_pars_fragment:t0,lights_physical_fragment:e0,lights_physical_pars_fragment:n0,lights_fragment_begin:i0,lights_fragment_maps:s0,lights_fragment_end:r0,logdepthbuf_fragment:o0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:c0,map_fragment:h0,map_pars_fragment:u0,map_particle_fragment:d0,map_particle_pars_fragment:f0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphinstance_vertex:g0,morphcolor_vertex:y0,morphnormal_vertex:v0,morphtarget_pars_vertex:_0,morphtarget_vertex:E0,normal_fragment_begin:M0,normal_fragment_maps:S0,normal_pars_fragment:b0,normal_pars_vertex:T0,normal_vertex:A0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:w0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:C0,iridescence_pars_fragment:P0,opaque_fragment:I0,packing:F0,premultiplied_alpha_fragment:D0,project_vertex:L0,dithering_fragment:U0,dithering_pars_fragment:N0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:z0,shadowmap_vertex:k0,shadowmask_pars_fragment:V0,skinbase_vertex:G0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:Y0,specularmap_fragment:Z0,specularmap_pars_fragment:q0,tonemapping_fragment:$0,tonemapping_pars_fragment:J0,transmission_fragment:Q0,transmission_pars_fragment:K0,uv_pars_fragment:j0,uv_pars_vertex:tm,uv_vertex:em,worldpos_vertex:nm,background_vert:im,background_frag:sm,backgroundCube_vert:rm,backgroundCube_frag:om,cube_vert:am,cube_frag:lm,depth_vert:cm,depth_frag:hm,distanceRGBA_vert:um,distanceRGBA_frag:dm,equirect_vert:fm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:ym,meshbasic_frag:vm,meshlambert_vert:_m,meshlambert_frag:Em,meshmatcap_vert:Mm,meshmatcap_frag:Sm,meshnormal_vert:bm,meshnormal_frag:Tm,meshphong_vert:Am,meshphong_frag:xm,meshphysical_vert:wm,meshphysical_frag:Rm,meshtoon_vert:Cm,meshtoon_frag:Pm,points_vert:Im,points_frag:Fm,shadow_vert:Dm,shadow_frag:Lm,sprite_vert:Um,sprite_frag:Nm},ut={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Dn={basic:{uniforms:tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ut(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:tn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:tn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:tn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ut(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:tn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:tn([ut.points,ut.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:tn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:tn([ut.common,ut.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:tn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:tn([ut.sprite,ut.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:tn([ut.common,ut.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:tn([ut.lights,ut.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Dn.physical={uniforms:tn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Xr={r:0,b:0,g:0},Oi=new Hn,Bm=new _e;function Om(i,t,e,n,s,r,o){let a=new Ut(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function y(E){let M=!1,v=g(E);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,M){let v=g(M);v&&(v.isCubeTexture||v.mapping===Bo)?(h===void 0&&(h=new Z(new sn(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:Ds(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Oi.copy(M.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Oi)),h.material.toneMapped=re.getTransfer(v.colorSpace)!==me,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Z(new Ft(2,2),new Oe({name:"BackgroundMaterial",uniforms:Ds(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=re.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,M){E.getRGB(Xr,mu(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:y,addToRenderList:m}}function Hm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(S,w,V,B,H){let Q=!1,W=u(B,V,w);r!==W&&(r=W,c(r.object)),Q=f(S,B,V,H),Q&&g(S,B,V,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(S,w,V,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,w,V){let B=V.wireframe===!0,H=n[S.id];H===void 0&&(H={},n[S.id]=H);let Q=H[w.id];Q===void 0&&(Q={},H[w.id]=Q);let W=Q[B];return W===void 0&&(W=d(l()),Q[B]=W),W}function d(S){let w=[],V=[],B=[];for(let H=0;H<e;H++)w[H]=0,V[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:V,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,w,V,B){let H=r.attributes,Q=w.attributes,W=0,st=V.getAttributes();for(let X in st)if(st[X].location>=0){let yt=H[X],Tt=Q[X];if(Tt===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Tt=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Tt=S.instanceColor)),yt===void 0||yt.attribute!==Tt||Tt&&yt.data!==Tt.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(S,w,V,B){let H={},Q=w.attributes,W=0,st=V.getAttributes();for(let X in st)if(st[X].location>=0){let yt=Q[X];yt===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor));let Tt={};Tt.attribute=yt,yt&&yt.data&&(Tt.data=yt.data),H[X]=Tt,W++}r.attributes=H,r.attributesNum=W,r.index=B}function y(){let S=r.newAttributes;for(let w=0,V=S.length;w<V;w++)S[w]=0}function m(S){p(S,0)}function p(S,w){let V=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;V[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),H[S]!==w&&(i.vertexAttribDivisor(S,w),H[S]=w)}function E(){let S=r.newAttributes,w=r.enabledAttributes;for(let V=0,B=w.length;V<B;V++)w[V]!==S[V]&&(i.disableVertexAttribArray(V),w[V]=0)}function M(S,w,V,B,H,Q,W){W===!0?i.vertexAttribIPointer(S,w,V,H,Q):i.vertexAttribPointer(S,w,V,B,H,Q)}function v(S,w,V,B){y();let H=B.attributes,Q=V.getAttributes(),W=w.defaultAttributeValues;for(let st in Q){let X=Q[st];if(X.location>=0){let ht=H[st];if(ht===void 0&&(st==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),st==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),ht!==void 0){let yt=ht.normalized,Tt=ht.itemSize,Zt=t.get(ht);if(Zt===void 0)continue;let ae=Zt.buffer,J=Zt.type,ot=Zt.bytesPerElement,xt=J===i.INT||J===i.UNSIGNED_INT||ht.gpuType===cc;if(ht.isInterleavedBufferAttribute){let lt=ht.data,Ht=lt.stride,Xt=ht.offset;if(lt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<X.locationSize;Vt++)p(X.location+Vt,lt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Vt=0;Vt<X.locationSize;Vt++)m(X.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Vt=0;Vt<X.locationSize;Vt++)M(X.location+Vt,Tt/X.locationSize,J,yt,Ht*ot,(Xt+Tt/X.locationSize*Vt)*ot,xt)}else{if(ht.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)p(X.location+lt,ht.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let lt=0;lt<X.locationSize;lt++)m(X.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let lt=0;lt<X.locationSize;lt++)M(X.location+lt,Tt/X.locationSize,J,yt,Tt*ot,Tt/X.locationSize*lt*ot,xt)}}else if(W!==void 0){let yt=W[st];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(X.location,yt);break;case 3:i.vertexAttrib3fv(X.location,yt);break;case 4:i.vertexAttrib4fv(X.location,yt);break;default:i.vertexAttrib1fv(X.location,yt)}}}}E()}function I(){F();for(let S in n){let w=n[S];for(let V in w){let B=w[V];for(let H in B)h(B[H].object),delete B[H];delete w[V]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;let w=n[S.id];for(let V in w){let B=w[V];for(let H in B)h(B[H].object),delete B[H];delete w[V]}delete n[S.id]}function P(S){for(let w in n){let V=n[w];if(V[S.id]===void 0)continue;let B=V[S.id];for(let H in B)h(B[H].object),delete B[H];delete V[S.id]}}function F(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function zm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function km(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Rn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let F=P===ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ni&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Nn&&!F)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:I,maxSamples:R}}function Vm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Kn,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,M=E*4,v=p.clippingState||null;l.value=v,v=h(g,d,M,f);for(let I=0;I!==M;++I)v[I]=e[I];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==y;++M,v+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Gm(i){let t=new WeakMap;function e(o,a){return a===Wa?o.mapping=Cs:a===Xa&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wa||a===Xa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Al(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ls=class extends Eo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bs=4,mh=[.125,.215,.35,.446,.526,.582],Vi=20,ba=new Ls,gh=new Ut,Ta=null,Aa=0,xa=0,wa=!1,zi=(1+Math.sqrt(5))/2,ys=1/zi,yh=[new C(-zi,ys,0),new C(zi,ys,0),new C(-ys,0,zi),new C(ys,0,zi),new C(0,zi,-ys),new C(0,zi,ys),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],So=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ta,Aa,xa),this._renderer.xr.enabled=wa,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ln,format:Rn,colorSpace:Ci,depthBuffer:!1},s=vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(r)),this._blurMaterial=Xm(r,t,e)}return s}_compileMaterial(t){let e=new Z(this._lodPlanes[0],t);this._renderer.compile(e,ba)}_sceneToCubeUV(t,e,n,s){let a=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gh),h.toneMapping=On,h.autoClear=!1;let f=new ue({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Z(new sn,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(gh),y=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;Yr(s,E*M,p>2?M:0,M,M),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Cs||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yh[(s-r-1)%yh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Z(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);let p=[],E=0;for(let P=0;P<Vi;++P){let F=P/y,T=Math.exp(-F*F/2);p.push(T),P===0?E+=T:P<m&&(E+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let v=this._sizeLods[s],I=3*v*(s>M-bs?s-M+bs:0),R=4*(this._cubeSize-v);Yr(e,I,R,3*v,2*v),l.setRenderTarget(e),l.render(u,ba)}};function Wm(i){let t=[],e=[],n=[],s=i,r=i-bs+1+mh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-bs?l=mh[o-i+bs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,E=new Float32Array(y*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){let P=R%3*2/3-1,F=R>2?0:-1,T=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];E.set(T,y*g*R),M.set(d,m*g*R);let S=[R,R,R,R,R,R];v.set(S,p*g*R)}let I=new Re;I.setAttribute("position",new Ce(E,y)),I.setAttribute("uv",new Ce(M,m)),I.setAttribute("faceIndex",new Ce(v,p)),t.push(I),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vh(i,t,e){let n=new Ge(i,t,e);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xm(i,t,e){let n=new Float32Array(Vi),s=new C(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function _h(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Eh(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function Ym(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Wa||l===Xa,h=l===Cs||l===Ps;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new So(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new So(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Zm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qm(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let E=f.array;y=f.version;for(let M=0,v=E.length;M<v;M+=3){let I=E[M+0],R=E[M+1],P=E[M+2];d.push(I,R,R,P,P,I)}}else if(g!==void 0){let E=g.array;y=g.version;for(let M=0,v=E.length/3-1;M<v;M+=3){let I=M+0,R=M+1,P=M+2;d.push(I,R,R,P,P,I)}}else return;let m=new(fu(d)?_o:vo)(d,1);m.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function $m(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*y[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qm(i,t,e){let n=new WeakMap,s=new ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let v=a.attributes.position.count*M,I=1;v>t.maxTextureSize&&(I=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let R=new Float32Array(v*I*4*u),P=new mo(R,v,I,u);P.type=Nn,P.needsUpdate=!0;let F=M*4;for(let S=0;S<u;S++){let w=m[S],V=p[S],B=E[S],H=v*I*4*S;for(let Q=0;Q<w.count;Q++){let W=Q*F;f===!0&&(s.fromBufferAttribute(w,Q),R[H+W+0]=s.x,R[H+W+1]=s.y,R[H+W+2]=s.z,R[H+W+3]=0),g===!0&&(s.fromBufferAttribute(V,Q),R[H+W+4]=s.x,R[H+W+5]=s.y,R[H+W+6]=s.z,R[H+W+7]=0),y===!0&&(s.fromBufferAttribute(B,Q),R[H+W+8]=s.x,R[H+W+9]=s.y,R[H+W+10]=s.z,R[H+W+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new et(v,I)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Km(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Us=class extends on{constructor(t,e,n,s,r,o,a,l,c,h=As){if(h!==As&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===As&&(n=ii),n===void 0&&h===Fs&&(n=Is),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yu=new on,Mh=new Us(1,1),vu=new mo,_u=new bl,Eu=new Mo,Sh=[],bh=[],Th=new Float32Array(16),Ah=new Float32Array(9),xh=new Float32Array(4);function zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Sh[s];if(r===void 0&&(r=new Float32Array(s),Sh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ho(i,t){let e=bh[t];e===void 0&&(e=new Int32Array(t),bh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(He(e,n))return;xh.set(n),i.uniformMatrix2fv(this.addr,!1,xh),ze(e,n)}}function sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(He(e,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),ze(e,n)}}function rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(He(e,n))return;Th.set(n),i.uniformMatrix4fv(this.addr,!1,Th),ze(e,n)}}function og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function hg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mh.compareFunction=du,r=Mh):r=yu,e.setTexture2D(t||r,s)}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_u,s)}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Eu,s)}function yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vu,s)}function vg(i){switch(i){case 5126:return jm;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return og;case 35667:case 35671:return ag;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return yg}}function _g(i,t){i.uniform1fv(this.addr,t)}function Eg(i,t){let e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function Mg(i,t){let e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function Sg(i,t){let e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function bg(i,t){let e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tg(i,t){let e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ag(i,t){let e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xg(i,t){i.uniform1iv(this.addr,t)}function wg(i,t){i.uniform2iv(this.addr,t)}function Rg(i,t){i.uniform3iv(this.addr,t)}function Cg(i,t){i.uniform4iv(this.addr,t)}function Pg(i,t){i.uniform1uiv(this.addr,t)}function Ig(i,t){i.uniform2uiv(this.addr,t)}function Fg(i,t){i.uniform3uiv(this.addr,t)}function Dg(i,t){i.uniform4uiv(this.addr,t)}function Lg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yu,r[o])}function Ug(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_u,r[o])}function Ng(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Eu,r[o])}function Bg(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);He(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vu,r[o])}function Og(i){switch(i){case 5126:return _g;case 35664:return Eg;case 35665:return Mg;case 35666:return Sg;case 35674:return bg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return xg;case 35667:case 35671:return wg;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Ig;case 36295:return Fg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Bg}}var xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vg(e.type)}},wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}},Rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ra=/(\w+)(\])?(\[|\.)?/g;function wh(i,t){i.seq.push(t),i.map[t.id]=t}function Hg(i,t,e){let n=i.name,s=n.length;for(Ra.lastIndex=0;;){let r=Ra.exec(n),o=Ra.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wh(e,c===void 0?new xl(a,i,t):new wl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Rl(a),wh(e,u)),e=u}}}var ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Hg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Rh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zg=37297,kg=0;function Vg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ch=new Jt;function Gg(i){re._getMatrix(Ch,re.workingColorSpace,i);let t=`mat3( ${Ch.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Oo:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ph(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vg(i.getShaderSource(t),o)}else return s}function Wg(i,t){let e=Gg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xg(i,t){let e;switch(t){case vf:e="Linear";break;case _f:e="Reinhard";break;case Ef:e="Cineon";break;case Mf:e="ACESFilmic";break;case bf:e="AgX";break;case Tf:e="Neutral";break;case Sf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zr=new C;function Yg(){re.getLuminanceCoefficients(Zr);let i=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function qg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $g(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function or(i){return i!==""}function Ih(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(Jg,Kg)}var Qg=new Map;function Kg(i,t){let e=jt[t];if(e===void 0){let n=Qg.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cl(e)}var jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(i){return i.replace(jg,t1)}function t1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function e1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function n1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cs:case Ps:t="ENVMAP_TYPE_CUBE";break;case Bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function s1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tu:t="ENVMAP_BLENDING_MULTIPLY";break;case gf:t="ENVMAP_BLENDING_MIX";break;case yf:t="ENVMAP_BLENDING_ADD";break}return t}function r1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function o1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=e1(e),c=n1(e),h=i1(e),u=s1(e),d=r1(e),f=Zg(e),g=qg(r),y=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?jt.tonemapping_pars_fragment:"",e.toneMapping!==On?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Wg("linearToOutputTexel",e.outputColorSpace),Yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=Cl(o),o=Ih(o,e),o=Fh(o,e),a=Cl(a),a=Ih(a,e),a=Fh(a,e),o=Dh(o),a=Dh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=E+m+o,v=E+p+a,I=Rh(s,s.VERTEX_SHADER,M),R=Rh(s,s.FRAGMENT_SHADER,v);s.attachShader(y,I),s.attachShader(y,R),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(w){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(I).trim(),H=s.getShaderInfoLog(R).trim(),Q=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,I,R);else{let st=Ph(s,I,"vertex"),X=Ph(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+st+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||H==="")&&(W=!1);W&&(w.diagnostics={runnable:Q,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(I),s.deleteShader(R),F=new ws(s,y),T=$g(s,y)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,zg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=R,this}var a1=0,Pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Il(t),e.set(t,n)),n}},Il=class{constructor(t){this.id=a1++,this.code=t,this.usedTimes=0}};function l1(i,t,e,n,s,r,o){let a=new yo,l=new Pl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,w,V,B){let H=V.fog,Q=B.geometry,W=T.isMeshStandardMaterial?V.environment:null,st=(T.isMeshStandardMaterial?e:t).get(T.envMap||W),X=st&&st.mapping===Bo?st.image.height:null,ht=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let yt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Tt=yt!==void 0?yt.length:0,Zt=0;Q.morphAttributes.position!==void 0&&(Zt=1),Q.morphAttributes.normal!==void 0&&(Zt=2),Q.morphAttributes.color!==void 0&&(Zt=3);let ae,J,ot,xt;if(ht){let de=Dn[ht];ae=de.vertexShader,J=de.fragmentShader}else ae=T.vertexShader,J=T.fragmentShader,l.update(T),ot=l.getVertexShaderID(T),xt=l.getFragmentShaderID(T);let lt=i.getRenderTarget(),Ht=i.state.buffers.depth.getReversed(),Xt=B.isInstancedMesh===!0,Vt=B.isBatchedMesh===!0,se=!!T.map,j=!!T.matcap,rt=!!st,x=!!T.aoMap,It=!!T.lightMap,nt=!!T.bumpMap,Et=!!T.normalMap,ct=!!T.displacementMap,zt=!!T.emissiveMap,vt=!!T.metalnessMap,A=!!T.roughnessMap,_=T.anisotropy>0,O=T.clearcoat>0,q=T.dispersion>0,tt=T.iridescence>0,$=T.sheen>0,wt=T.transmission>0,dt=_&&!!T.anisotropyMap,_t=O&&!!T.clearcoatMap,ee=O&&!!T.clearcoatNormalMap,it=O&&!!T.clearcoatRoughnessMap,St=tt&&!!T.iridescenceMap,kt=tt&&!!T.iridescenceThicknessMap,Wt=$&&!!T.sheenColorMap,bt=$&&!!T.sheenRoughnessMap,ie=!!T.specularMap,Kt=!!T.specularColorMap,Me=!!T.specularIntensityMap,D=wt&&!!T.transmissionMap,ft=wt&&!!T.thicknessMap,Y=!!T.gradientMap,K=!!T.alphaMap,gt=T.alphaTest>0,pt=!!T.alphaHash,qt=!!T.extensions,we=On;T.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(we=i.toneMapping);let $e={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:ae,fragmentShader:J,defines:T.defines,customVertexShaderID:ot,customFragmentShaderID:xt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Vt,batchingColor:Vt&&B._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&B.instanceColor!==null,instancingMorph:Xt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ci,alphaToCoverage:!!T.alphaToCoverage,map:se,matcap:j,envMap:rt,envMapMode:rt&&st.mapping,envMapCubeUVHeight:X,aoMap:x,lightMap:It,bumpMap:nt,normalMap:Et,displacementMap:d&&ct,emissiveMap:zt,normalMapObjectSpace:Et&&T.normalMapType===wf,normalMapTangentSpace:Et&&T.normalMapType===uu,metalnessMap:vt,roughnessMap:A,anisotropy:_,anisotropyMap:dt,clearcoat:O,clearcoatMap:_t,clearcoatNormalMap:ee,clearcoatRoughnessMap:it,dispersion:q,iridescence:tt,iridescenceMap:St,iridescenceThicknessMap:kt,sheen:$,sheenColorMap:Wt,sheenRoughnessMap:bt,specularMap:ie,specularColorMap:Kt,specularIntensityMap:Me,transmission:wt,transmissionMap:D,thicknessMap:ft,gradientMap:Y,opaque:T.transparent===!1&&T.blending===Ei&&T.alphaToCoverage===!1,alphaMap:K,alphaTest:gt,alphaHash:pt,combine:T.combine,mapUv:se&&y(T.map.channel),aoMapUv:x&&y(T.aoMap.channel),lightMapUv:It&&y(T.lightMap.channel),bumpMapUv:nt&&y(T.bumpMap.channel),normalMapUv:Et&&y(T.normalMap.channel),displacementMapUv:ct&&y(T.displacementMap.channel),emissiveMapUv:zt&&y(T.emissiveMap.channel),metalnessMapUv:vt&&y(T.metalnessMap.channel),roughnessMapUv:A&&y(T.roughnessMap.channel),anisotropyMapUv:dt&&y(T.anisotropyMap.channel),clearcoatMapUv:_t&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:ee&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:bt&&y(T.sheenRoughnessMap.channel),specularMapUv:ie&&y(T.specularMap.channel),specularColorMapUv:Kt&&y(T.specularColorMap.channel),specularIntensityMapUv:Me&&y(T.specularIntensityMap.channel),transmissionMapUv:D&&y(T.transmissionMap.channel),thicknessMapUv:ft&&y(T.thicknessMap.channel),alphaMapUv:K&&y(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Et||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Q.attributes.uv&&(se||K),fog:!!H,useFog:T.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ht,skinning:B.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:se&&T.map.isVideoTexture===!0&&re.getTransfer(T.map.colorSpace)===me,decodeVideoTextureEmissive:zt&&T.emissiveMap.isVideoTexture===!0&&re.getTransfer(T.emissiveMap.colorSpace)===me,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===he,flipSided:T.side===en,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&T.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function p(T){let S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(let w in T.defines)S.push(w),S.push(T.defines[w]);return T.isRawShaderMaterial===!1&&(E(S,T),M(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function E(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function M(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){let S=g[T.type],w;if(S){let V=Dn[S];w=Hs.clone(V.uniforms)}else w=T.uniforms;return w}function I(T,S){let w;for(let V=0,B=h.length;V<B;V++){let H=h[V];if(H.cacheKey===S){w=H,++w.usedTimes;break}}return w===void 0&&(w=new o1(i,S,T,r),h.push(w)),w}function R(T){if(--T.usedTimes===0){let S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function P(T){l.remove(T)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:F}}function c1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function h1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Uh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,y,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function a(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||h1),n.length>1&&n.sort(d||Uh),s.length>1&&s.sort(d||Uh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function u1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Nh,i.set(n,[o])):s>=r.length?(o=new Nh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function d1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ut};break;case"SpotLight":e={position:new C,direction:new C,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function f1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var p1=0;function m1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g1(i){let t=new d1,e=f1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new _e,o=new _e;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,E=0,M=0,v=0,I=0,R=0,P=0;c.sort(m1);for(let T=0,S=c.length;T<S;T++){let w=c[T],V=w.color,B=w.intensity,H=w.distance,Q=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=V.r*B,u+=V.g*B,d+=V.b*B;else if(w.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(w.sh.coefficients[W],B);P++}else if(w.isDirectionalLight){let W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let st=w.shadow,X=e.get(w);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=w.shadow.matrix,E++}n.directional[f]=W,f++}else if(w.isSpotLight){let W=t.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(V).multiplyScalar(B),W.distance=H,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,n.spot[y]=W;let st=w.shadow;if(w.map&&(n.spotLightMap[I]=w.map,I++,st.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[y]=st.matrix,w.castShadow){let X=e.get(w);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=Q,v++}y++}else if(w.isRectAreaLight){let W=t.get(w);W.color.copy(V).multiplyScalar(B),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=W,m++}else if(w.isPointLight){let W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){let st=w.shadow,X=e.get(w);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,X.shadowCameraNear=st.camera.near,X.shadowCameraFar=st.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=w.shadow.matrix,M++}n.point[g]=W,g++}else if(w.isHemisphereLight){let W=t.get(w);W.skyColor.copy(w.color).multiplyScalar(B),W.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==E||F.numPointShadows!==M||F.numSpotShadows!==v||F.numSpotMaps!==I||F.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,F.directionalLength=f,F.pointLength=g,F.spotLength=y,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=E,F.numPointShadows=M,F.numSpotShadows=v,F.numSpotMaps=I,F.numLightProbes=P,n.version=p1++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let M=c[p];if(M.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(M.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Bh(i){let t=new g1(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function y1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Bh(i),t.set(s,[a])):r>=o.length?(a=new Bh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ai=class extends ri{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fl=class extends ri{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},v1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_1=`uniform sampler2D shadow_pass;
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
}`;function E1(i,t,e){let n=new dr,s=new et,r=new et,o=new ve,a=new Ai({depthPacking:Os}),l=new Fl,c={},h=e.maxTextureSize,u={[Mi]:en,[en]:Mi,[he]:he},d=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:v1,fragmentShader:_1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Z(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let p=this.type;this.render=function(R,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let T=i.getRenderTarget(),S=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Bn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let B=p!==Qn&&this.type===Qn,H=p===Qn&&this.type!==Qn;for(let Q=0,W=R.length;Q<W;Q++){let st=R[Q],X=st.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ht=X.getFrameExtents();if(s.multiply(ht),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,X.mapSize.y=r.y)),X.map===null||B===!0||H===!0){let Tt=this.type!==Qn?{minFilter:mn,magFilter:mn}:{};X.map!==null&&X.map.dispose(),X.map=new Ge(s.x,s.y,Tt),X.map.texture.name=st.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let yt=X.getViewportCount();for(let Tt=0;Tt<yt;Tt++){let Zt=X.getViewport(Tt);o.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),V.viewport(o),X.updateMatrices(st,Tt),n=X.getFrustum(),v(P,F,X.camera,st,this.type)}X.isPointLightShadow!==!0&&this.type===Qn&&E(X,F),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,S,w)};function E(R,P){let F=t.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ge(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,F,d,y,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,F,f,y,null)}function M(R,P,F,T){let S=null,w=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)S=w;else if(S=F.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let V=S.uuid,B=P.uuid,H=c[V];H===void 0&&(H={},c[V]=H);let Q=H[B];Q===void 0&&(Q=S.clone(),H[B]=Q,P.addEventListener("dispose",I)),S=Q}if(S.visible=P.visible,S.wireframe=P.wireframe,T===Qn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:u[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let V=i.properties.get(S);V.light=F}return S}function v(R,P,F,T,S){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Qn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);let B=t.update(R),H=R.material;if(Array.isArray(H)){let Q=B.groups;for(let W=0,st=Q.length;W<st;W++){let X=Q[W],ht=H[X.materialIndex];if(ht&&ht.visible){let yt=M(R,ht,T,S);R.onBeforeShadow(i,R,P,F,B,yt,X),i.renderBufferDirect(F,null,B,yt,R,X),R.onAfterShadow(i,R,P,F,B,yt,X)}}}else if(H.visible){let Q=M(R,H,T,S);R.onBeforeShadow(i,R,P,F,B,Q,null),i.renderBufferDirect(F,null,B,Q,R,null),R.onAfterShadow(i,R,P,F,B,Q,null)}}let V=R.children;for(let B=0,H=V.length;B<H;B++)v(V[B],P,F,T,S)}function I(R){R.target.removeEventListener("dispose",I);for(let F in c){let T=c[F],S=R.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}var M1={[Ba]:Oa,[Ha]:Va,[za]:Ga,[Rs]:ka,[Oa]:Ba,[Va]:Ha,[Ga]:za,[ka]:Rs};function S1(i,t){function e(){let D=!1,ft=new ve,Y=null,K=new ve(0,0,0,0);return{setMask:function(gt){Y!==gt&&!D&&(i.colorMask(gt,gt,gt,gt),Y=gt)},setLocked:function(gt){D=gt},setClear:function(gt,pt,qt,we,$e){$e===!0&&(gt*=we,pt*=we,qt*=we),ft.set(gt,pt,qt,we),K.equals(ft)===!1&&(i.clearColor(gt,pt,qt,we),K.copy(ft))},reset:function(){D=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let D=!1,ft=!1,Y=null,K=null,gt=null;return{setReversed:function(pt){if(ft!==pt){let qt=t.get("EXT_clip_control");ft?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let we=gt;gt=null,this.setClear(we)}ft=pt},getReversed:function(){return ft},setTest:function(pt){pt?lt(i.DEPTH_TEST):Ht(i.DEPTH_TEST)},setMask:function(pt){Y!==pt&&!D&&(i.depthMask(pt),Y=pt)},setFunc:function(pt){if(ft&&(pt=M1[pt]),K!==pt){switch(pt){case Ba:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=pt}},setLocked:function(pt){D=pt},setClear:function(pt){gt!==pt&&(ft&&(pt=1-pt),i.clearDepth(pt),gt=pt)},reset:function(){D=!1,Y=null,K=null,gt=null,ft=!1}}}function s(){let D=!1,ft=null,Y=null,K=null,gt=null,pt=null,qt=null,we=null,$e=null;return{setTest:function(de){D||(de?lt(i.STENCIL_TEST):Ht(i.STENCIL_TEST))},setMask:function(de){ft!==de&&!D&&(i.stencilMask(de),ft=de)},setFunc:function(de,bn,Wn){(Y!==de||K!==bn||gt!==Wn)&&(i.stencilFunc(de,bn,Wn),Y=de,K=bn,gt=Wn)},setOp:function(de,bn,Wn){(pt!==de||qt!==bn||we!==Wn)&&(i.stencilOp(de,bn,Wn),pt=de,qt=bn,we=Wn)},setLocked:function(de){D=de},setClear:function(de){$e!==de&&(i.clearStencil(de),$e=de)},reset:function(){D=!1,ft=null,Y=null,K=null,gt=null,pt=null,qt=null,we=null,$e=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,E=null,M=null,v=null,I=null,R=null,P=new Ut(0,0,0),F=0,T=!1,S=null,w=null,V=null,B=null,H=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,st=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=st>=1):X.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=st>=2);let ht=null,yt={},Tt=i.getParameter(i.SCISSOR_BOX),Zt=i.getParameter(i.VIEWPORT),ae=new ve().fromArray(Tt),J=new ve().fromArray(Zt);function ot(D,ft,Y,K){let gt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(D,pt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<Y;qt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(ft+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return pt}let xt={};xt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(Rs),nt(!1),Et(kc),lt(i.CULL_FACE),x(Bn);function lt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ht(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Xt(D,ft){return u[D]!==ft?(i.bindFramebuffer(D,ft),u[D]=ft,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Vt(D,ft){let Y=f,K=!1;if(D){Y=d.get(ft),Y===void 0&&(Y=[],d.set(ft,Y));let gt=D.textures;if(Y.length!==gt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,qt=gt.length;pt<qt;pt++)Y[pt]=i.COLOR_ATTACHMENT0+pt;Y.length=gt.length,K=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,K=!0);K&&i.drawBuffers(Y)}function se(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let j={[ki]:i.FUNC_ADD,[Kd]:i.FUNC_SUBTRACT,[jd]:i.FUNC_REVERSE_SUBTRACT};j[tf]=i.MIN,j[ef]=i.MAX;let rt={[nf]:i.ZERO,[sf]:i.ONE,[rf]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[uf]:i.SRC_ALPHA_SATURATE,[cf]:i.DST_COLOR,[af]:i.DST_ALPHA,[of]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[lf]:i.ONE_MINUS_DST_ALPHA,[df]:i.CONSTANT_COLOR,[ff]:i.ONE_MINUS_CONSTANT_COLOR,[pf]:i.CONSTANT_ALPHA,[mf]:i.ONE_MINUS_CONSTANT_ALPHA};function x(D,ft,Y,K,gt,pt,qt,we,$e,de){if(D===Bn){y===!0&&(Ht(i.BLEND),y=!1);return}if(y===!1&&(lt(i.BLEND),y=!0),D!==Qd){if(D!==m||de!==T){if((p!==ki||v!==ki)&&(i.blendEquation(i.FUNC_ADD),p=ki,v=ki),de)switch(D){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nn:i.blendFunc(i.ONE,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,M=null,I=null,R=null,P.set(0,0,0),F=0,m=D,T=de}return}gt=gt||ft,pt=pt||Y,qt=qt||K,(ft!==p||gt!==v)&&(i.blendEquationSeparate(j[ft],j[gt]),p=ft,v=gt),(Y!==E||K!==M||pt!==I||qt!==R)&&(i.blendFuncSeparate(rt[Y],rt[K],rt[pt],rt[qt]),E=Y,M=K,I=pt,R=qt),(we.equals(P)===!1||$e!==F)&&(i.blendColor(we.r,we.g,we.b,$e),P.copy(we),F=$e),m=D,T=!1}function It(D,ft){D.side===he?Ht(i.CULL_FACE):lt(i.CULL_FACE);let Y=D.side===en;ft&&(Y=!Y),nt(Y),D.blending===Ei&&D.transparent===!1?x(Bn):x(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),zt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function Et(D){D!==$d?(lt(i.CULL_FACE),D!==w&&(D===kc?i.cullFace(i.BACK):D===Jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ht(i.CULL_FACE),w=D}function ct(D){D!==V&&(W&&i.lineWidth(D),V=D)}function zt(D,ft,Y){D?(lt(i.POLYGON_OFFSET_FILL),(B!==ft||H!==Y)&&(i.polygonOffset(ft,Y),B=ft,H=Y)):Ht(i.POLYGON_OFFSET_FILL)}function vt(D){D?lt(i.SCISSOR_TEST):Ht(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+Q-1),ht!==D&&(i.activeTexture(D),ht=D)}function _(D,ft,Y){Y===void 0&&(ht===null?Y=i.TEXTURE0+Q-1:Y=ht);let K=yt[Y];K===void 0&&(K={type:void 0,texture:void 0},yt[Y]=K),(K.type!==D||K.texture!==ft)&&(ht!==Y&&(i.activeTexture(Y),ht=Y),i.bindTexture(D,ft||xt[D]),K.type=D,K.texture=ft)}function O(){let D=yt[ht];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(D){ae.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ae.copy(D))}function bt(D){J.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),J.copy(D))}function ie(D,ft){let Y=c.get(ft);Y===void 0&&(Y=new WeakMap,c.set(ft,Y));let K=Y.get(D);K===void 0&&(K=i.getUniformBlockIndex(ft,D.name),Y.set(D,K))}function Kt(D,ft){let K=c.get(ft).get(D);l.get(ft)!==K&&(i.uniformBlockBinding(ft,K,D.__bindingPointIndex),l.set(ft,K))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,yt={},u={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,E=null,M=null,v=null,I=null,R=null,P=new Ut(0,0,0),F=0,T=!1,S=null,w=null,V=null,B=null,H=null,ae.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Ht,bindFramebuffer:Xt,drawBuffers:Vt,useProgram:se,setBlending:x,setMaterial:It,setFlipSided:nt,setCullFace:Et,setLineWidth:ct,setPolygonOffset:zt,setScissorTest:vt,activeTexture:A,bindTexture:_,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:tt,texImage2D:St,texImage3D:kt,updateUBOMapping:ie,uniformBlockBinding:Kt,texStorage2D:ee,texStorage3D:it,texSubImage2D:$,texSubImage3D:wt,compressedTexSubImage2D:dt,compressedTexSubImage3D:_t,scissor:Wt,viewport:bt,reset:Me}}function Oh(i,t,e,n){let s=b1(n);switch(e){case ru:return i*t;case au:return i*t;case lu:return i*t*2;case dc:return i*t/s.components*s.byteLength;case fc:return i*t/s.components*s.byteLength;case cu:return i*t*2/s.components*s.byteLength;case pc:return i*t*2/s.components*s.byteLength;case ou:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case mc:return i*t*4/s.components*s.byteLength;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oo:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case Za:case $a:return Math.max(i,8)*Math.max(t,8)/2;case Qa:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lo:case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hu:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function b1(i){switch(i){case ni:case nu:return{byteLength:1,components:1};case ur:case iu:case ln:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case ii:case cc:case Nn:return{byteLength:4,components:1};case su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function T1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return f?new OffscreenCanvas(A,_):fo("canvas")}function y(A,_,O){let q=1,tt=vt(A);if((tt.width>O||tt.height>O)&&(q=O/Math.max(tt.width,tt.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(q*tt.width),wt=Math.floor(q*tt.height);u===void 0&&(u=g($,wt));let dt=_?g($,wt):u;return dt.width=$,dt.height=wt,dt.getContext("2d").drawImage(A,0,0,$,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+wt+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,_,O,q,tt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=_;if(_===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),_===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),_===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),_===i.RGBA){let wt=tt?Oo:re.getTransfer(q);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=wt===me?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(A,_){let O;return A?_===null||_===ii||_===Is?O=i.DEPTH24_STENCIL8:_===Nn?O=i.DEPTH32F_STENCIL8:_===ur&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ii||_===Is?O=i.DEPTH_COMPONENT24:_===Nn?O=i.DEPTH_COMPONENT32F:_===ur&&(O=i.DEPTH_COMPONENT16),O}function I(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==mn&&A.minFilter!==Un?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){let _=A.target;_.removeEventListener("dispose",R),F(_),_.isVideoTexture&&h.delete(_)}function P(A){let _=A.target;_.removeEventListener("dispose",P),S(_)}function F(A){let _=n.get(A);if(_.__webglInit===void 0)return;let O=A.source,q=d.get(O);if(q){let tt=q[_.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&T(A),Object.keys(q).length===0&&d.delete(O)}n.remove(A)}function T(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let O=A.source,q=d.get(O);delete q[_.__cacheKey],o.memory.textures--}function S(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let tt=0;tt<_.__webglFramebuffer[q].length;tt++)i.deleteFramebuffer(_.__webglFramebuffer[q][tt]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=A.textures;for(let q=0,tt=O.length;q<tt;q++){let $=n.get(O[q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(O[q])}n.remove(A)}let w=0;function V(){w=0}function B(){let A=w;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),w+=1,A}function H(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function Q(A,_){let O=n.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(O,A,_);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function W(A,_){let O=n.get(A);if(A.version>0&&O.__version!==A.version){J(O,A,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function st(A,_){let O=n.get(A);if(A.version>0&&O.__version!==A.version){J(O,A,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function X(A,_){let O=n.get(A);if(A.version>0&&O.__version!==A.version){ot(O,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let ht={[Ve]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},yt={[mn]:i.NEAREST,[Af]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[jo]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},Tt={[Rf]:i.NEVER,[Lf]:i.ALWAYS,[Cf]:i.LESS,[du]:i.LEQUAL,[Pf]:i.EQUAL,[Df]:i.GEQUAL,[If]:i.GREATER,[Ff]:i.NOTEQUAL};function Zt(A,_){if(_.type===Nn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Un||_.magFilter===jo||_.magFilter===wr||_.magFilter===Wi||_.minFilter===Un||_.minFilter===jo||_.minFilter===wr||_.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ht[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ht[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ht[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,yt[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,yt[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Tt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===mn||_.minFilter!==wr&&_.minFilter!==Wi||_.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ae(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));let q=_.source,tt=d.get(q);tt===void 0&&(tt={},d.set(q,tt));let $=H(_);if($!==A.__cacheKey){tt[$]===void 0&&(tt[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),tt[$].usedTimes++;let wt=tt[A.__cacheKey];wt!==void 0&&(tt[A.__cacheKey].usedTimes--,wt.usedTimes===0&&T(_)),A.__cacheKey=$,A.__webglTexture=tt[$].texture}return O}function J(A,_,O){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);let tt=ae(A,_),$=_.source;e.bindTexture(q,A.__webglTexture,i.TEXTURE0+O);let wt=n.get($);if($.version!==wt.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);let dt=re.getPrimaries(re.workingColorSpace),_t=_.colorSpace===vi?null:re.getPrimaries(_.colorSpace),ee=_.colorSpace===vi||dt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let it=y(_.image,!1,s.maxTextureSize);it=zt(_,it);let St=r.convert(_.format,_.colorSpace),kt=r.convert(_.type),Wt=M(_.internalFormat,St,kt,_.colorSpace,_.isVideoTexture);Zt(q,_);let bt,ie=_.mipmaps,Kt=_.isVideoTexture!==!0,Me=wt.__version===void 0||tt===!0,D=$.dataReady,ft=I(_,it);if(_.isDepthTexture)Wt=v(_.format===Fs,_.type),Me&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Wt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Wt,it.width,it.height,0,St,kt,null));else if(_.isDataTexture)if(ie.length>0){Kt&&Me&&e.texStorage2D(i.TEXTURE_2D,ft,Wt,ie[0].width,ie[0].height);for(let Y=0,K=ie.length;Y<K;Y++)bt=ie[Y],Kt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,bt.width,bt.height,St,kt,bt.data):e.texImage2D(i.TEXTURE_2D,Y,Wt,bt.width,bt.height,0,St,kt,bt.data);_.generateMipmaps=!1}else Kt?(Me&&e.texStorage2D(i.TEXTURE_2D,ft,Wt,it.width,it.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,St,kt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Wt,it.width,it.height,0,St,kt,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Kt&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Wt,ie[0].width,ie[0].height,it.depth);for(let Y=0,K=ie.length;Y<K;Y++)if(bt=ie[Y],_.format!==Rn)if(St!==null)if(Kt){if(D)if(_.layerUpdates.size>0){let gt=Oh(bt.width,bt.height,_.format,_.type);for(let pt of _.layerUpdates){let qt=bt.data.subarray(pt*gt/bt.data.BYTES_PER_ELEMENT,(pt+1)*gt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,pt,bt.width,bt.height,1,St,qt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,bt.width,bt.height,it.depth,St,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Wt,bt.width,bt.height,it.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,bt.width,bt.height,it.depth,St,kt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Wt,bt.width,bt.height,it.depth,0,St,kt,bt.data)}else{Kt&&Me&&e.texStorage2D(i.TEXTURE_2D,ft,Wt,ie[0].width,ie[0].height);for(let Y=0,K=ie.length;Y<K;Y++)bt=ie[Y],_.format!==Rn?St!==null?Kt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Wt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,bt.width,bt.height,St,kt,bt.data):e.texImage2D(i.TEXTURE_2D,Y,Wt,bt.width,bt.height,0,St,kt,bt.data)}else if(_.isDataArrayTexture)if(Kt){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Wt,it.width,it.height,it.depth),D)if(_.layerUpdates.size>0){let Y=Oh(it.width,it.height,_.format,_.type);for(let K of _.layerUpdates){let gt=it.data.subarray(K*Y/it.data.BYTES_PER_ELEMENT,(K+1)*Y/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,St,kt,gt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,St,kt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Wt,it.width,it.height,it.depth,0,St,kt,it.data);else if(_.isData3DTexture)Kt?(Me&&e.texStorage3D(i.TEXTURE_3D,ft,Wt,it.width,it.height,it.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,St,kt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Wt,it.width,it.height,it.depth,0,St,kt,it.data);else if(_.isFramebufferTexture){if(Me)if(Kt)e.texStorage2D(i.TEXTURE_2D,ft,Wt,it.width,it.height);else{let Y=it.width,K=it.height;for(let gt=0;gt<ft;gt++)e.texImage2D(i.TEXTURE_2D,gt,Wt,Y,K,0,St,kt,null),Y>>=1,K>>=1}}else if(ie.length>0){if(Kt&&Me){let Y=vt(ie[0]);e.texStorage2D(i.TEXTURE_2D,ft,Wt,Y.width,Y.height)}for(let Y=0,K=ie.length;Y<K;Y++)bt=ie[Y],Kt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,St,kt,bt):e.texImage2D(i.TEXTURE_2D,Y,Wt,St,kt,bt);_.generateMipmaps=!1}else if(Kt){if(Me){let Y=vt(it);e.texStorage2D(i.TEXTURE_2D,ft,Wt,Y.width,Y.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,kt,it)}else e.texImage2D(i.TEXTURE_2D,0,Wt,St,kt,it);m(_)&&p(q),wt.__version=$.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ot(A,_,O){if(_.image.length!==6)return;let q=ae(A,_),tt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let $=n.get(tt);if(tt.version!==$.__version||q===!0){e.activeTexture(i.TEXTURE0+O);let wt=re.getPrimaries(re.workingColorSpace),dt=_.colorSpace===vi?null:re.getPrimaries(_.colorSpace),_t=_.colorSpace===vi||wt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let ee=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,St=[];for(let K=0;K<6;K++)!ee&&!it?St[K]=y(_.image[K],!0,s.maxCubemapSize):St[K]=it?_.image[K].image:_.image[K],St[K]=zt(_,St[K]);let kt=St[0],Wt=r.convert(_.format,_.colorSpace),bt=r.convert(_.type),ie=M(_.internalFormat,Wt,bt,_.colorSpace),Kt=_.isVideoTexture!==!0,Me=$.__version===void 0||q===!0,D=tt.dataReady,ft=I(_,kt);Zt(i.TEXTURE_CUBE_MAP,_);let Y;if(ee){Kt&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,ie,kt.width,kt.height);for(let K=0;K<6;K++){Y=St[K].mipmaps;for(let gt=0;gt<Y.length;gt++){let pt=Y[gt];_.format!==Rn?Wt!==null?Kt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,Wt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,ie,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,pt.width,pt.height,Wt,bt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,ie,pt.width,pt.height,0,Wt,bt,pt.data)}}}else{if(Y=_.mipmaps,Kt&&Me){Y.length>0&&ft++;let K=vt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,ie,K.width,K.height)}for(let K=0;K<6;K++)if(it){Kt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St[K].width,St[K].height,Wt,bt,St[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ie,St[K].width,St[K].height,0,Wt,bt,St[K].data);for(let gt=0;gt<Y.length;gt++){let qt=Y[gt].image[K].image;Kt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,qt.width,qt.height,Wt,bt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,ie,qt.width,qt.height,0,Wt,bt,qt.data)}}else{Kt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Wt,bt,St[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ie,Wt,bt,St[K]);for(let gt=0;gt<Y.length;gt++){let pt=Y[gt];Kt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,Wt,bt,pt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,ie,Wt,bt,pt.image[K])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),$.__version=tt.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function xt(A,_,O,q,tt,$){let wt=r.convert(O.format,O.colorSpace),dt=r.convert(O.type),_t=M(O.internalFormat,wt,dt,O.colorSpace),ee=n.get(_),it=n.get(O);if(it.__renderTarget=_,!ee.__hasExternalTextures){let St=Math.max(1,_.width>>$),kt=Math.max(1,_.height>>$);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,_t,St,kt,_.depth,0,wt,dt,null):e.texImage2D(tt,$,_t,St,kt,0,wt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,tt,it.__webglTexture,0,nt(_)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,tt,it.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let q=_.depthTexture,tt=q&&q.isDepthTexture?q.type:null,$=v(_.stencilBuffer,tt),wt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=nt(_);Et(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,$,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,A)}else{let q=_.textures;for(let tt=0;tt<q.length;tt++){let $=q[tt],wt=r.convert($.format,$.colorSpace),dt=r.convert($.type),_t=M($.internalFormat,wt,dt,$.colorSpace),ee=nt(_);O&&Et(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,_t,_.width,_.height):Et(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,_t,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,_t,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);let tt=q.__webglTexture,$=nt(_);if(_.depthTexture.format===As)Et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(_.depthTexture.format===Fs)Et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Xt(A){let _=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",tt)};q.addEventListener("dispose",tt),_.__depthDisposeCallback=tt}_.__boundDepthTexture=q}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ht(_.__webglFramebuffer,A)}else if(O){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),lt(_.__webglDepthbuffer[q],A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),lt(_.__webglDepthbuffer,A,!1);else{let q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(A,_,O){let q=n.get(A);_!==void 0&&xt(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Xt(A)}function se(A){let _=A.texture,O=n.get(A),q=n.get(_);A.addEventListener("dispose",P);let tt=A.textures,$=A.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[dt]=[];for(let _t=0;_t<_.mipmaps.length;_t++)O.__webglFramebuffer[dt][_t]=i.createFramebuffer()}else O.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let dt=0;dt<_.mipmaps.length;dt++)O.__webglFramebuffer[dt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(wt)for(let dt=0,_t=tt.length;dt<_t;dt++){let ee=n.get(tt[dt]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Et(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let dt=0;dt<tt.length;dt++){let _t=tt[dt];O.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[dt]);let ee=r.convert(_t.format,_t.colorSpace),it=r.convert(_t.type),St=M(_t.internalFormat,ee,it,_t.colorSpace,A.isXRRenderTarget===!0),kt=nt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,St,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,O.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,_);for(let dt=0;dt<6;dt++)if(_.mipmaps&&_.mipmaps.length>0)for(let _t=0;_t<_.mipmaps.length;_t++)xt(O.__webglFramebuffer[dt][_t],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,_t);else xt(O.__webglFramebuffer[dt],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let dt=0,_t=tt.length;dt<_t;dt++){let ee=tt[dt],it=n.get(ee);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Zt(i.TEXTURE_2D,ee),xt(O.__webglFramebuffer,A,ee,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(ee)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,q.__webglTexture),Zt(dt,_),_.mipmaps&&_.mipmaps.length>0)for(let _t=0;_t<_.mipmaps.length;_t++)xt(O.__webglFramebuffer[_t],A,_,i.COLOR_ATTACHMENT0,dt,_t);else xt(O.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,dt,0);m(_)&&p(dt),e.unbindTexture()}A.depthBuffer&&Xt(A)}function j(A){let _=A.textures;for(let O=0,q=_.length;O<q;O++){let tt=_[O];if(m(tt)){let $=E(A),wt=n.get(tt).__webglTexture;e.bindTexture($,wt),p($),e.unbindTexture()}}}let rt=[],x=[];function It(A){if(A.samples>0){if(Et(A)===!1){let _=A.textures,O=A.width,q=A.height,tt=i.COLOR_BUFFER_BIT,$=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(A),dt=_.length>1;if(dt)for(let _t=0;_t<_.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let _t=0;_t<_.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);let ee=n.get(_[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,tt,i.NEAREST),l===!0&&(rt.length=0,x.length=0,rt.push(i.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(rt.push($),x.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,x)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let _t=0;_t<_.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);let ee=n.get(_[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function nt(A){return Math.min(s.maxSamples,A.samples)}function Et(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ct(A){let _=o.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function zt(A,_){let O=A.colorSpace,q=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ci&&O!==vi&&(re.getTransfer(O)===me?(q!==Rn||tt!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function vt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=st,this.setTextureCube=X,this.rebindTextures=Vt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Et}function A1(i,t){function e(n,s=vi){let r,o=re.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nu)return i.BYTE;if(n===iu)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===cc)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===ru)return i.ALPHA;if(n===ou)return i.RGB;if(n===Rn)return i.RGBA;if(n===au)return i.LUMINANCE;if(n===lu)return i.LUMINANCE_ALPHA;if(n===As)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===cu)return i.RG;if(n===pc)return i.RG_INTEGER;if(n===mc)return i.RGBA_INTEGER;if(n===so||n===ro||n===oo||n===ao)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===qa||n===$a||n===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===Ka||n===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===Ka)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===pl||n===ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lo)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hu||n===gl||n===yl||n===vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Dl=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Nt=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},x1={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},w1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
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

}`,Ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new on,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Oe({vertexShader:w1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new Ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ul=class extends Si{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=new Ll,m=e.getContextAttributes(),p=null,E=null,M=[],v=[],I=new et,R=null,P=new Ye;P.viewport=new ve;let F=new Ye;F.viewport=new ve;let T=[P,F],S=new Dl,w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ot=M[J];return ot===void 0&&(ot=new ar,M[J]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(J){let ot=M[J];return ot===void 0&&(ot=new ar,M[J]=ot),ot.getGripSpace()},this.getHand=function(J){let ot=M[J];return ot===void 0&&(ot=new ar,M[J]=ot),ot.getHandSpace()};function B(J){let ot=v.indexOf(J.inputSource);if(ot===-1)return;let xt=M[ot];xt!==void 0&&(xt.update(J.inputSource,J.frame,c||o),xt.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Q);for(let J=0;J<M.length;J++){let ot=v[J];ot!==null&&(v[J]=null,M[J].disconnect(ot))}w=null,V=null,y.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,E=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Ge(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,xt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Fs:As,xt=m.stencil?Is:ii);let Ht={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ht),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Ge(d.textureWidth,d.textureHeight,{format:Rn,type:ni,depthTexture:new Us(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(J){for(let ot=0;ot<J.removed.length;ot++){let xt=J.removed[ot],lt=v.indexOf(xt);lt>=0&&(v[lt]=null,M[lt].disconnect(xt))}for(let ot=0;ot<J.added.length;ot++){let xt=J.added[ot],lt=v.indexOf(xt);if(lt===-1){for(let Xt=0;Xt<M.length;Xt++)if(Xt>=v.length){v.push(xt),lt=Xt;break}else if(v[Xt]===null){v[Xt]=xt,lt=Xt;break}if(lt===-1)break}let Ht=M[lt];Ht&&Ht.connect(xt)}}let W=new C,st=new C;function X(J,ot,xt){W.setFromMatrixPosition(ot.matrixWorld),st.setFromMatrixPosition(xt.matrixWorld);let lt=W.distanceTo(st),Ht=ot.projectionMatrix.elements,Xt=xt.projectionMatrix.elements,Vt=Ht[14]/(Ht[10]-1),se=Ht[14]/(Ht[10]+1),j=(Ht[9]+1)/Ht[5],rt=(Ht[9]-1)/Ht[5],x=(Ht[8]-1)/Ht[0],It=(Xt[8]+1)/Xt[0],nt=Vt*x,Et=Vt*It,ct=lt/(-x+It),zt=ct*-x;if(ot.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(zt),J.translateZ(ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ht[10]===-1)J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let vt=Vt+ct,A=se+ct,_=nt-zt,O=Et+(lt-zt),q=j*se/A*vt,tt=rt*se/A*vt;J.projectionMatrix.makePerspective(_,O,q,tt,vt,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ht(J,ot){ot===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ot.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ot=J.near,xt=J.far;y.texture!==null&&(y.depthNear>0&&(ot=y.depthNear),y.depthFar>0&&(xt=y.depthFar)),S.near=F.near=P.near=ot,S.far=F.far=P.far=xt,(w!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,V=S.far),P.layers.mask=J.layers.mask|2,F.layers.mask=J.layers.mask|4,S.layers.mask=P.layers.mask|F.layers.mask;let lt=J.parent,Ht=S.cameras;ht(S,lt);for(let Xt=0;Xt<Ht.length;Xt++)ht(Ht[Xt],lt);Ht.length===2?X(S,P,F):S.projectionMatrix.copy(P.projectionMatrix),yt(J,S,lt)};function yt(J,ot,xt){xt===null?J.matrix.copy(ot.matrixWorld):(J.matrix.copy(xt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ot.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=uo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let Tt=null;function Zt(J,ot){if(h=ot.getViewerPose(c||o),g=ot,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let lt=!1;xt.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let Xt=0;Xt<xt.length;Xt++){let Vt=xt[Xt],se=null;if(f!==null)se=f.getViewport(Vt);else{let rt=u.getViewSubImage(d,Vt);se=rt.viewport,Xt===0&&(t.setRenderTargetTextures(E,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(E))}let j=T[Xt];j===void 0&&(j=new Ye,j.layers.enable(Xt),j.viewport=new ve,T[Xt]=j),j.matrix.fromArray(Vt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Vt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(se.x,se.y,se.width,se.height),Xt===0&&(S.matrix.copy(j.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(j)}let Ht=s.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){let Xt=u.getDepthInformation(xt[0]);Xt&&Xt.isValid&&Xt.texture&&y.init(t,Xt,s.renderState)}}for(let xt=0;xt<M.length;xt++){let lt=v[xt],Ht=M[xt];lt!==null&&Ht!==void 0&&Ht.update(lt,ot,c||o)}Tt&&Tt(J,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}let ae=new gu;ae.setAnimationLoop(Zt),this.setAnimationLoop=function(J){Tt=J},this.dispose=function(){}}},Hi=new Hn,C1=new _e;function P1(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),M=E.envMap,v=E.envMapRotation;M&&(m.envMap.value=M,Hi.copy(v),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(C1.makeRotationFromEuler(Hi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){let v=M.program;n.uniformBlockBinding(E,v)}function c(E,M){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));let I=M.program;n.updateUBOMapping(E,I);let R=t.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function h(E){let M=u();E.__bindingPointIndex=M;let v=i.createBuffer(),I=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let M=s[E.id],v=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,P=v.length;R<P;R++){let F=Array.isArray(v[R])?v[R]:[v[R]];for(let T=0,S=F.length;T<S;T++){let w=F[T];if(f(w,R,T,I)===!0){let V=w.__offset,B=Array.isArray(w.value)?w.value:[w.value],H=0;for(let Q=0;Q<B.length;Q++){let W=B[Q],st=y(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,V+H,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,H),H+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,M,v,I){let R=E.value,P=M+"_"+v;if(I[P]===void 0)return typeof R=="number"||typeof R=="boolean"?I[P]=R:I[P]=R.clone(),!0;{let F=I[P];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return I[P]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(E){let M=E.uniforms,v=0,I=16;for(let P=0,F=M.length;P<F;P++){let T=Array.isArray(M[P])?M[P]:[M[P]];for(let S=0,w=T.length;S<w;S++){let V=T[S],B=Array.isArray(V.value)?V.value:[V.value];for(let H=0,Q=B.length;H<Q;H++){let W=B[H],st=y(W),X=v%I,ht=X%st.boundary,yt=X+ht;v+=ht,yt!==0&&I-yt<st.storage&&(v+=I-yt),V.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=st.storage}}}let R=v%I;return R>0&&(v+=I-R),E.__size=v,E.__cache={},this}function y(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){let M=E.target;M.removeEventListener("dispose",m);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var bo=class{constructor(t={}){let{canvas:e=Nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=On,this.toneMappingExposure=1;let v=this,I=!1,R=0,P=0,F=null,T=-1,S=null,w=new ve,V=new ve,B=null,H=new Ut(0),Q=0,W=e.width,st=e.height,X=1,ht=null,yt=null,Tt=new ve(0,0,W,st),Zt=new ve(0,0,W,st),ae=!1,J=new dr,ot=!1,xt=!1,lt=new _e,Ht=new _e,Xt=new C,Vt=new ve,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function rt(){return F===null?X:1}let x=n;function It(b,L){return e.getContext(b,L)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),x===null){let L="webgl2";if(x=It(L,b),x===null)throw It(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let nt,Et,ct,zt,vt,A,_,O,q,tt,$,wt,dt,_t,ee,it,St,kt,Wt,bt,ie,Kt,Me,D;function ft(){nt=new Zm(x),nt.init(),Kt=new A1(x,nt),Et=new km(x,nt,t,Kt),ct=new S1(x,nt),Et.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),zt=new Jm(x),vt=new c1,A=new T1(x,nt,ct,vt,Et,Kt,zt),_=new Gm(v),O=new Ym(v),q=new ip(x),Me=new Hm(x,q),tt=new qm(x,q,zt,Me),$=new Km(x,tt,q,zt),Wt=new Qm(x,Et,A),it=new Vm(vt),wt=new l1(v,_,O,nt,Et,Me,it),dt=new P1(v,vt),_t=new u1,ee=new y1(nt),kt=new Om(v,_,O,ct,$,f,l),St=new E1(v,$,Et),D=new I1(x,zt,Et,ct),bt=new zm(x,nt,zt),ie=new $m(x,nt,zt),zt.programs=wt.programs,v.capabilities=Et,v.extensions=nt,v.properties=vt,v.renderLists=_t,v.shadowMap=St,v.state=ct,v.info=zt}ft();let Y=new Ul(v,x);this.xr=Y,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){let b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(W,st,!1))},this.getSize=function(b){return b.set(W,st)},this.setSize=function(b,L,z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,st=L,e.width=Math.floor(b*X),e.height=Math.floor(L*X),z===!0&&(e.style.width=b+"px",e.style.height=L+"px"),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(W*X,st*X).floor()},this.setDrawingBufferSize=function(b,L,z){W=b,st=L,X=z,e.width=Math.floor(b*z),e.height=Math.floor(L*z),this.setViewport(0,0,b,L)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(Tt)},this.setViewport=function(b,L,z,k){b.isVector4?Tt.set(b.x,b.y,b.z,b.w):Tt.set(b,L,z,k),ct.viewport(w.copy(Tt).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Zt)},this.setScissor=function(b,L,z,k){b.isVector4?Zt.set(b.x,b.y,b.z,b.w):Zt.set(b,L,z,k),ct.scissor(V.copy(Zt).multiplyScalar(X).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){ct.setScissorTest(ae=b)},this.setOpaqueSort=function(b){ht=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(b=!0,L=!0,z=!0){let k=0;if(b){let U=!1;if(F!==null){let at=F.texture.format;U=at===mc||at===pc||at===fc}if(U){let at=F.texture.type,mt=at===ni||at===ii||at===ur||at===Is||at===hc||at===uc,Rt=kt.getClearColor(),Ct=kt.getClearAlpha(),Yt=Rt.r,$t=Rt.g,Pt=Rt.b;mt?(g[0]=Yt,g[1]=$t,g[2]=Pt,g[3]=Ct,x.clearBufferuiv(x.COLOR,0,g)):(y[0]=Yt,y[1]=$t,y[2]=Pt,y[3]=Ct,x.clearBufferiv(x.COLOR,0,y))}else k|=x.COLOR_BUFFER_BIT}L&&(k|=x.DEPTH_BUFFER_BIT),z&&(k|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),_t.dispose(),ee.dispose(),vt.dispose(),_.dispose(),O.dispose(),$.dispose(),Me.dispose(),D.dispose(),wt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Dc),Y.removeEventListener("sessionend",Lc),Di.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let b=zt.autoReset,L=St.enabled,z=St.autoUpdate,k=St.needsUpdate,U=St.type;ft(),zt.autoReset=b,St.enabled=L,St.autoUpdate=z,St.needsUpdate=k,St.type=U}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qt(b){let L=b.target;L.removeEventListener("dispose",qt),we(L)}function we(b){$e(b),vt.remove(b)}function $e(b){let L=vt.get(b).programs;L!==void 0&&(L.forEach(function(z){wt.releaseProgram(z)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,z,k,U,at){L===null&&(L=se);let mt=U.isMesh&&U.matrixWorld.determinant()<0,Rt=Yd(b,L,z,k,U);ct.setMaterial(k,mt);let Ct=z.index,Yt=1;if(k.wireframe===!0){if(Ct=tt.getWireframeAttribute(z),Ct===void 0)return;Yt=2}let $t=z.drawRange,Pt=z.attributes.position,oe=$t.start*Yt,Se=($t.start+$t.count)*Yt;at!==null&&(oe=Math.max(oe,at.start*Yt),Se=Math.min(Se,(at.start+at.count)*Yt)),Ct!==null?(oe=Math.max(oe,0),Se=Math.min(Se,Ct.count)):Pt!=null&&(oe=Math.max(oe,0),Se=Math.min(Se,Pt.count));let be=Se-oe;if(be<0||be===1/0)return;Me.setup(U,k,Rt,z,Ct);let rn,le=bt;if(Ct!==null&&(rn=q.get(Ct),le=ie,le.setIndex(rn)),U.isMesh)k.wireframe===!0?(ct.setLineWidth(k.wireframeLinewidth*rt()),le.setMode(x.LINES)):le.setMode(x.TRIANGLES);else if(U.isLine){let Dt=k.linewidth;Dt===void 0&&(Dt=1),ct.setLineWidth(Dt*rt()),U.isLineSegments?le.setMode(x.LINES):U.isLineLoop?le.setMode(x.LINE_LOOP):le.setMode(x.LINE_STRIP)}else U.isPoints?le.setMode(x.POINTS):U.isSprite&&le.setMode(x.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)le.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))le.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Dt=U._multiDrawStarts,Xn=U._multiDrawCounts,ce=U._multiDrawCount,Tn=Ct?q.get(Ct).bytesPerElement:1,is=vt.get(k).currentProgram.getUniforms();for(let dn=0;dn<ce;dn++)is.setValue(x,"_gl_DrawID",dn),le.render(Dt[dn]/Tn,Xn[dn])}else if(U.isInstancedMesh)le.renderInstances(oe,be,U.count);else if(z.isInstancedBufferGeometry){let Dt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Xn=Math.min(z.instanceCount,Dt);le.renderInstances(oe,be,Xn)}else le.render(oe,be)};function de(b,L,z){b.transparent===!0&&b.side===he&&b.forceSinglePass===!1?(b.side=en,b.needsUpdate=!0,xr(b,L,z),b.side=Mi,b.needsUpdate=!0,xr(b,L,z),b.side=he):xr(b,L,z)}this.compile=function(b,L,z=null){z===null&&(z=b),p=ee.get(z),p.init(L),M.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==z&&b.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let k=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let at=U.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){let Rt=at[mt];de(Rt,z,U),k.add(Rt)}else de(at,z,U),k.add(at)}),M.pop(),p=null,k},this.compileAsync=function(b,L,z=null){let k=this.compile(b,L,z);return new Promise(U=>{function at(){if(k.forEach(function(mt){vt.get(mt).currentProgram.isReady()&&k.delete(mt)}),k.size===0){U(b);return}setTimeout(at,10)}nt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let bn=null;function Wn(b){bn&&bn(b)}function Dc(){Di.stop()}function Lc(){Di.start()}let Di=new gu;Di.setAnimationLoop(Wn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(b){bn=b,Y.setAnimationLoop(b),b===null?Di.stop():Di.start()},Y.addEventListener("sessionstart",Dc),Y.addEventListener("sessionend",Lc),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(L),L=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,L,F),p=ee.get(b,M.length),p.init(L),M.push(p),Ht.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),J.setFromProjectionMatrix(Ht),xt=this.localClippingEnabled,ot=it.init(this.clippingPlanes,xt),m=_t.get(b,E.length),m.init(),E.push(m),Y.enabled===!0&&Y.isPresenting===!0){let at=v.xr.getDepthSensingMesh();at!==null&&Ko(at,L,-1/0,v.sortObjects)}Ko(b,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ht,yt),j=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,j&&kt.addToRenderList(m,b),this.info.render.frame++,ot===!0&&it.beginShadows();let z=p.state.shadowsArray;St.render(z,b,L),ot===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,U=m.transmissive;if(p.setupLights(),L.isArrayCamera){let at=L.cameras;if(U.length>0)for(let mt=0,Rt=at.length;mt<Rt;mt++){let Ct=at[mt];Nc(k,U,b,Ct)}j&&kt.render(b);for(let mt=0,Rt=at.length;mt<Rt;mt++){let Ct=at[mt];Uc(m,b,Ct,Ct.viewport)}}else U.length>0&&Nc(k,U,b,L),j&&kt.render(b),Uc(m,b,L);F!==null&&(A.updateMultisampleRenderTarget(F),A.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(v,b,L),Me.resetDefaultState(),T=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],ot===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ko(b,L,z,k){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){k&&Vt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ht);let mt=$.update(b),Rt=b.material;Rt.visible&&m.push(b,mt,Rt,z,Vt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){let mt=$.update(b),Rt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Vt.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Vt.copy(mt.boundingSphere.center)),Vt.applyMatrix4(b.matrixWorld).applyMatrix4(Ht)),Array.isArray(Rt)){let Ct=mt.groups;for(let Yt=0,$t=Ct.length;Yt<$t;Yt++){let Pt=Ct[Yt],oe=Rt[Pt.materialIndex];oe&&oe.visible&&m.push(b,mt,oe,z,Vt.z,Pt)}}else Rt.visible&&m.push(b,mt,Rt,z,Vt.z,null)}}let at=b.children;for(let mt=0,Rt=at.length;mt<Rt;mt++)Ko(at[mt],L,z,k)}function Uc(b,L,z,k){let U=b.opaque,at=b.transmissive,mt=b.transparent;p.setupLightsView(z),ot===!0&&it.setGlobalState(v.clippingPlanes,z),k&&ct.viewport(w.copy(k)),U.length>0&&Ar(U,L,z),at.length>0&&Ar(at,L,z),mt.length>0&&Ar(mt,L,z),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Nc(b,L,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Ge(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ln:ni,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let at=p.state.transmissionRenderTarget[k.id],mt=k.viewport||w;at.setSize(mt.z,mt.w);let Rt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(H),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),j&&kt.render(z);let Ct=v.toneMapping;v.toneMapping=On;let Yt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),ot===!0&&it.setGlobalState(v.clippingPlanes,k),Ar(b,z,k),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),nt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Pt=0,oe=L.length;Pt<oe;Pt++){let Se=L[Pt],be=Se.object,rn=Se.geometry,le=Se.material,Dt=Se.group;if(le.side===he&&be.layers.test(k.layers)){let Xn=le.side;le.side=en,le.needsUpdate=!0,Bc(be,z,k,rn,le,Dt),le.side=Xn,le.needsUpdate=!0,$t=!0}}$t===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}v.setRenderTarget(Rt),v.setClearColor(H,Q),Yt!==void 0&&(k.viewport=Yt),v.toneMapping=Ct}function Ar(b,L,z){let k=L.isScene===!0?L.overrideMaterial:null;for(let U=0,at=b.length;U<at;U++){let mt=b[U],Rt=mt.object,Ct=mt.geometry,Yt=k===null?mt.material:k,$t=mt.group;Rt.layers.test(z.layers)&&Bc(Rt,L,z,Ct,Yt,$t)}}function Bc(b,L,z,k,U,at){b.onBeforeRender(v,L,z,k,U,at),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(v,L,z,k,b,at),U.transparent===!0&&U.side===he&&U.forceSinglePass===!1?(U.side=en,U.needsUpdate=!0,v.renderBufferDirect(z,L,k,U,b,at),U.side=Mi,U.needsUpdate=!0,v.renderBufferDirect(z,L,k,U,b,at),U.side=he):v.renderBufferDirect(z,L,k,U,b,at),b.onAfterRender(v,L,z,k,U,at)}function xr(b,L,z){L.isScene!==!0&&(L=se);let k=vt.get(b),U=p.state.lights,at=p.state.shadowsArray,mt=U.state.version,Rt=wt.getParameters(b,U.state,at,L,z),Ct=wt.getProgramCacheKey(Rt),Yt=k.programs;k.environment=b.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(b.isMeshStandardMaterial?O:_).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,Yt===void 0&&(b.addEventListener("dispose",qt),Yt=new Map,k.programs=Yt);let $t=Yt.get(Ct);if($t!==void 0){if(k.currentProgram===$t&&k.lightsStateVersion===mt)return Hc(b,Rt),$t}else Rt.uniforms=wt.getUniforms(b),b.onBeforeCompile(Rt,v),$t=wt.acquireProgram(Rt,Ct),Yt.set(Ct,$t),k.uniforms=Rt.uniforms;let Pt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=it.uniform),Hc(b,Rt),k.needsLights=qd(b),k.lightsStateVersion=mt,k.needsLights&&(Pt.ambientLightColor.value=U.state.ambient,Pt.lightProbe.value=U.state.probe,Pt.directionalLights.value=U.state.directional,Pt.directionalLightShadows.value=U.state.directionalShadow,Pt.spotLights.value=U.state.spot,Pt.spotLightShadows.value=U.state.spotShadow,Pt.rectAreaLights.value=U.state.rectArea,Pt.ltc_1.value=U.state.rectAreaLTC1,Pt.ltc_2.value=U.state.rectAreaLTC2,Pt.pointLights.value=U.state.point,Pt.pointLightShadows.value=U.state.pointShadow,Pt.hemisphereLights.value=U.state.hemi,Pt.directionalShadowMap.value=U.state.directionalShadowMap,Pt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Pt.spotShadowMap.value=U.state.spotShadowMap,Pt.spotLightMatrix.value=U.state.spotLightMatrix,Pt.spotLightMap.value=U.state.spotLightMap,Pt.pointShadowMap.value=U.state.pointShadowMap,Pt.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=$t,k.uniformsList=null,$t}function Oc(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=ws.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function Hc(b,L){let z=vt.get(b);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function Yd(b,L,z,k,U){L.isScene!==!0&&(L=se),A.resetTextureUnits();let at=L.fog,mt=k.isMeshStandardMaterial?L.environment:null,Rt=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ci,Ct=(k.isMeshStandardMaterial?O:_).get(k.envMap||mt),Yt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,$t=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pt=!!z.morphAttributes.position,oe=!!z.morphAttributes.normal,Se=!!z.morphAttributes.color,be=On;k.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(be=v.toneMapping);let rn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,le=rn!==void 0?rn.length:0,Dt=vt.get(k),Xn=p.state.lights;if(ot===!0&&(xt===!0||b!==S)){let _n=b===S&&k.id===T;it.setState(k,b,_n)}let ce=!1;k.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Xn.state.version||Dt.outputColorSpace!==Rt||U.isBatchedMesh&&Dt.batching===!1||!U.isBatchedMesh&&Dt.batching===!0||U.isBatchedMesh&&Dt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Dt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Dt.instancing===!1||!U.isInstancedMesh&&Dt.instancing===!0||U.isSkinnedMesh&&Dt.skinning===!1||!U.isSkinnedMesh&&Dt.skinning===!0||U.isInstancedMesh&&Dt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Dt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Dt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Dt.instancingMorph===!1&&U.morphTexture!==null||Dt.envMap!==Ct||k.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==it.numPlanes||Dt.numIntersection!==it.numIntersection)||Dt.vertexAlphas!==Yt||Dt.vertexTangents!==$t||Dt.morphTargets!==Pt||Dt.morphNormals!==oe||Dt.morphColors!==Se||Dt.toneMapping!==be||Dt.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Dt.__version=k.version);let Tn=Dt.currentProgram;ce===!0&&(Tn=xr(k,L,U));let is=!1,dn=!1,Zs=!1,Te=Tn.getUniforms(),Fn=Dt.uniforms;if(ct.useProgram(Tn.program)&&(is=!0,dn=!0,Zs=!0),k.id!==T&&(T=k.id,dn=!0),is||S!==b){ct.buffers.depth.getReversed()?(lt.copy(b.projectionMatrix),Of(lt),Hf(lt),Te.setValue(x,"projectionMatrix",lt)):Te.setValue(x,"projectionMatrix",b.projectionMatrix),Te.setValue(x,"viewMatrix",b.matrixWorldInverse);let hi=Te.map.cameraPosition;hi!==void 0&&hi.setValue(x,Xt.setFromMatrixPosition(b.matrixWorld)),Et.logarithmicDepthBuffer&&Te.setValue(x,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Te.setValue(x,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,dn=!0,Zs=!0)}if(U.isSkinnedMesh){Te.setOptional(x,U,"bindMatrix"),Te.setOptional(x,U,"bindMatrixInverse");let _n=U.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Te.setValue(x,"boneTexture",_n.boneTexture,A))}U.isBatchedMesh&&(Te.setOptional(x,U,"batchingTexture"),Te.setValue(x,"batchingTexture",U._matricesTexture,A),Te.setOptional(x,U,"batchingIdTexture"),Te.setValue(x,"batchingIdTexture",U._indirectTexture,A),Te.setOptional(x,U,"batchingColorTexture"),U._colorsTexture!==null&&Te.setValue(x,"batchingColorTexture",U._colorsTexture,A));let qs=z.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Wt.update(U,z,Tn),(dn||Dt.receiveShadow!==U.receiveShadow)&&(Dt.receiveShadow=U.receiveShadow,Te.setValue(x,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Fn.envMap.value=Ct,Fn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Fn.envMapIntensity.value=L.environmentIntensity),dn&&(Te.setValue(x,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&Zd(Fn,Zs),at&&k.fog===!0&&dt.refreshFogUniforms(Fn,at),dt.refreshMaterialUniforms(Fn,k,X,st,p.state.transmissionRenderTarget[b.id]),ws.upload(x,Oc(Dt),Fn,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ws.upload(x,Oc(Dt),Fn,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Te.setValue(x,"center",U.center),Te.setValue(x,"modelViewMatrix",U.modelViewMatrix),Te.setValue(x,"normalMatrix",U.normalMatrix),Te.setValue(x,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let _n=k.uniformsGroups;for(let hi=0,ui=_n.length;hi<ui;hi++){let zc=_n[hi];D.update(zc,Tn),D.bind(zc,Tn)}}return Tn}function Zd(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function qd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,L,z){vt.get(b.texture).__webglTexture=L,vt.get(b.depthTexture).__webglTexture=z;let k=vt.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,L){let z=vt.get(b);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,z=0){F=b,R=L,P=z;let k=!0,U=null,at=!1,mt=!1;if(b){let Ct=vt.get(b);if(Ct.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(x.FRAMEBUFFER,null),k=!1;else if(Ct.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Ct.__hasExternalTextures)A.rebindTextures(b,vt.get(b.texture).__webglTexture,vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Pt=b.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&vt.has(Pt)&&(b.width!==Pt.image.width||b.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}let Yt=b.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(mt=!0);let $t=vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($t[L])?U=$t[L][z]:U=$t[L],at=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?U=vt.get(b).__webglMultisampledFramebuffer:Array.isArray($t)?U=$t[z]:U=$t,w.copy(b.viewport),V.copy(b.scissor),B=b.scissorTest}else w.copy(Tt).multiplyScalar(X).floor(),V.copy(Zt).multiplyScalar(X).floor(),B=ae;if(ct.bindFramebuffer(x.FRAMEBUFFER,U)&&k&&ct.drawBuffers(b,U),ct.viewport(w),ct.scissor(V),ct.setScissorTest(B),at){let Ct=vt.get(b.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ct.__webglTexture,z)}else if(mt){let Ct=vt.get(b.texture),Yt=L||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ct.__webglTexture,z||0,Yt)}T=-1},this.readRenderTargetPixels=function(b,L,z,k,U,at,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(Rt=Rt[mt]),Rt){ct.bindFramebuffer(x.FRAMEBUFFER,Rt);try{let Ct=b.texture,Yt=Ct.format,$t=Ct.type;if(!Et.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-k&&z>=0&&z<=b.height-U&&x.readPixels(L,z,k,U,Kt.convert(Yt),Kt.convert($t),at)}finally{let Ct=F!==null?vt.get(F).__webglFramebuffer:null;ct.bindFramebuffer(x.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(b,L,z,k,U,at,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(Rt=Rt[mt]),Rt){let Ct=b.texture,Yt=Ct.format,$t=Ct.type;if(!Et.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=b.width-k&&z>=0&&z<=b.height-U){ct.bindFramebuffer(x.FRAMEBUFFER,Rt);let Pt=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Pt),x.bufferData(x.PIXEL_PACK_BUFFER,at.byteLength,x.STREAM_READ),x.readPixels(L,z,k,U,Kt.convert(Yt),Kt.convert($t),0);let oe=F!==null?vt.get(F).__webglFramebuffer:null;ct.bindFramebuffer(x.FRAMEBUFFER,oe);let Se=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Bf(x,Se,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Pt),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,at),x.deleteBuffer(Pt),x.deleteSync(Se),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,L=null,z=0){b.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,b=arguments[1]);let k=Math.pow(2,-z),U=Math.floor(b.image.width*k),at=Math.floor(b.image.height*k),mt=L!==null?L.x:0,Rt=L!==null?L.y:0;A.setTexture2D(b,0),x.copyTexSubImage2D(x.TEXTURE_2D,z,0,0,mt,Rt,U,at),ct.unbindTexture()},this.copyTextureToTexture=function(b,L,z=null,k=null,U=0){b.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],L=arguments[2],U=arguments[3]||0,z=null);let at,mt,Rt,Ct,Yt,$t,Pt,oe,Se,be=b.isCompressedTexture?b.mipmaps[U]:b.image;z!==null?(at=z.max.x-z.min.x,mt=z.max.y-z.min.y,Rt=z.isBox3?z.max.z-z.min.z:1,Ct=z.min.x,Yt=z.min.y,$t=z.isBox3?z.min.z:0):(at=be.width,mt=be.height,Rt=be.depth||1,Ct=0,Yt=0,$t=0),k!==null?(Pt=k.x,oe=k.y,Se=k.z):(Pt=0,oe=0,Se=0);let rn=Kt.convert(L.format),le=Kt.convert(L.type),Dt;L.isData3DTexture?(A.setTexture3D(L,0),Dt=x.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(A.setTexture2DArray(L,0),Dt=x.TEXTURE_2D_ARRAY):(A.setTexture2D(L,0),Dt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,L.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,L.unpackAlignment);let Xn=x.getParameter(x.UNPACK_ROW_LENGTH),ce=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Tn=x.getParameter(x.UNPACK_SKIP_PIXELS),is=x.getParameter(x.UNPACK_SKIP_ROWS),dn=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,be.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,be.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ct),x.pixelStorei(x.UNPACK_SKIP_ROWS,Yt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,$t);let Zs=b.isDataArrayTexture||b.isData3DTexture,Te=L.isDataArrayTexture||L.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Fn=vt.get(b),qs=vt.get(L),_n=vt.get(Fn.__renderTarget),hi=vt.get(qs.__renderTarget);ct.bindFramebuffer(x.READ_FRAMEBUFFER,_n.__webglFramebuffer),ct.bindFramebuffer(x.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ui=0;ui<Rt;ui++)Zs&&x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,vt.get(b).__webglTexture,U,$t+ui),b.isDepthTexture?(Te&&x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,vt.get(L).__webglTexture,U,Se+ui),x.blitFramebuffer(Ct,Yt,at,mt,Pt,oe,at,mt,x.DEPTH_BUFFER_BIT,x.NEAREST)):Te?x.copyTexSubImage3D(Dt,U,Pt,oe,Se+ui,Ct,Yt,at,mt):x.copyTexSubImage2D(Dt,U,Pt,oe,Se+ui,Ct,Yt,at,mt);ct.bindFramebuffer(x.READ_FRAMEBUFFER,null),ct.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else Te?b.isDataTexture||b.isData3DTexture?x.texSubImage3D(Dt,U,Pt,oe,Se,at,mt,Rt,rn,le,be.data):L.isCompressedArrayTexture?x.compressedTexSubImage3D(Dt,U,Pt,oe,Se,at,mt,Rt,rn,be.data):x.texSubImage3D(Dt,U,Pt,oe,Se,at,mt,Rt,rn,le,be):b.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,U,Pt,oe,at,mt,rn,le,be.data):b.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,U,Pt,oe,be.width,be.height,rn,be.data):x.texSubImage2D(x.TEXTURE_2D,U,Pt,oe,at,mt,rn,le,be);x.pixelStorei(x.UNPACK_ROW_LENGTH,Xn),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ce),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Tn),x.pixelStorei(x.UNPACK_SKIP_ROWS,is),x.pixelStorei(x.UNPACK_SKIP_IMAGES,dn),U===0&&L.generateMipmaps&&x.generateMipmap(Dt),ct.unbindTexture()},this.copyTextureToTexture3D=function(b,L,z=null,k=null,U=0){return b.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,b=arguments[2],L=arguments[3],U=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,L,z,k,U)},this.initRenderTarget=function(b){vt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),ct.unbindTexture()},this.resetState=function(){R=0,P=0,F=null,ct.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}},To=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ao=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new C,xo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xi=class extends ri{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vs,js=new C,_s=new C,Es=new C,Ms=new et,tr=new et,Mu=new _e,qr=new C,er=new C,$r=new C,Hh=new et,Ca=new et,zh=new et,Xi=class extends Pe{constructor(t=new xi){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nl(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new xo(n,3,0,!1)),vs.setAttribute("uv",new xo(n,2,3,!1))}this.geometry=vs,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),Mu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-Es.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Jr(qr.set(-.5,-.5,0),Es,o,_s,s,r),Jr(er.set(.5,-.5,0),Es,o,_s,s,r),Jr($r.set(.5,.5,0),Es,o,_s,s,r),Hh.set(0,0),Ca.set(1,0),zh.set(1,1);let a=t.ray.intersectTriangle(qr,er,$r,!1,js);if(a===null&&(Jr(er.set(-.5,.5,0),Es,o,_s,s,r),Ca.set(0,1),a=t.ray.intersectTriangle(qr,$r,er,!1,js),a===null))return;let l=t.ray.origin.distanceTo(js);l<t.near||l>t.far||e.push({distance:l,point:js.clone(),uv:_i.getInterpolation(js,qr,er,$r,Hh,Ca,zh,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Jr(i,t,e,n,s,r){Ms.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*Ms.x-s*Ms.y,tr.y=s*Ms.x+r*Ms.y):tr.copy(Ms),i.copy(t),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(Mu)}var Bl=class extends on{constructor(t=null,e=1,n=1,s,r,o,a,l,c=mn,h=mn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wo=class extends Ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ss=new _e,kh=new _e,Qr=[],Vh=new si,F1=new _e,nr=new Z,ir=new Ti,Ro=class extends Z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,F1)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),Vh.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Vh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),ir.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),t.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),kh.multiplyMatrices(n,Ss),nr.matrixWorld=kh,nr.raycast(t,Qr);for(let o=0,a=Qr.length;o<a;o++){let l=Qr[o];l.instanceId=r,l.object=this,e.push(l)}Qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bl(new Float32Array(s*this.count),s,this.count,dc,Nn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var wi=class extends ri{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gh=new _e,Ol=new go,Kr=new Ti,jr=new C,Yi=class extends Pe{constructor(t=new Re,e=new wi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;Gh.copy(s).invert(),Ol.copy(t.ray).applyMatrix4(Gh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);jr.fromBufferAttribute(u,m),Wh(jr,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)jr.fromBufferAttribute(u,g),Wh(jr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wh(i,t,e,n,s,r,o){let a=Ol.distanceSqToPoint(i);if(a<e){let l=new C;Ol.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ke=class extends on{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new et:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],o=[],a=new C,l=new _e;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Xe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Xe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fr=class extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Hl=class extends fr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function yc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var to=new C,Pa=new yc,Ia=new yc,Fa=new yc,zl=class extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(to.subVectors(s[0],s[1]).add(s[0]),c=to);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(to.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=to),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Pa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),Ia.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),Fa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Pa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ia.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Fa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Pa.calc(l),Ia.calc(l),Fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Xh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function D1(i,t){let e=1-i;return e*e*t}function L1(i,t){return 2*(1-i)*i*t}function U1(i,t){return i*i*t}function lr(i,t,e,n){return D1(i,t)+L1(i,e)+U1(i,n)}function N1(i,t){let e=1-i;return e*e*e*t}function B1(i,t){let e=1-i;return 3*e*e*i*t}function O1(i,t){return 3*(1-i)*i*i*t}function H1(i,t){return i*i*i*t}function cr(i,t,e,n,s){return N1(i,t)+B1(i,e)+O1(i,n)+H1(i,s)}var Co=class extends Mn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kl=class extends Mn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y),cr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Po=class extends Mn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vl=class extends Mn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends Mn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gl=class extends Mn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y),lr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Xh(a,l.x,c.x,h.x,u.x),Xh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new et().fromArray(s))}return this}},Wl=Object.freeze({__proto__:null,ArcCurve:Hl,CatmullRomCurve3:zl,CubicBezierCurve:Co,CubicBezierCurve3:kl,EllipseCurve:fr,LineCurve:Po,LineCurve3:Vl,QuadraticBezierCurve:Io,QuadraticBezierCurve3:Gl,SplineCurve:Fo}),Xl=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Wl[s.type]().fromJSON(s))}return this}},pr=class extends Xl{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Po(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Io(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Co(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new fr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Do=class i extends Re{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Xe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,d=new et,f=new C,g=new C,y=new C,m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let E=0;E<=e;E++){let M=n+E*h*s,v=Math.sin(M),I=Math.cos(M);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*v,u.y=t[R].y,u.z=t[R].x*I,o.push(u.x,u.y,u.z),d.x=E/e,d.y=R/(t.length-1),a.push(d.x,d.y);let P=l[3*R+0]*v,F=l[3*R+1],T=l[3*R+0]*I;c.push(P,F,T)}}for(let E=0;E<e;E++)for(let M=0;M<t.length-1;M++){let v=M+E*t.length,I=v,R=v+t.length,P=v+t.length+1,F=v+1;r.push(I,R,F),r.push(P,F,R)}this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("uv",new fe(a,2)),this.setAttribute("normal",new fe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Zi=class i extends Do{constructor(t=1,e=1,n=4,s=8){let r=new pr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},an=class i extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ee=class i extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=n/2,p=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function E(){let v=new C,I=new C,R=0,P=(e-t)/n;for(let F=0;F<=r;F++){let T=[],S=F/r,w=S*(e-t)+t;for(let V=0;V<=s;V++){let B=V/s,H=B*l+a,Q=Math.sin(H),W=Math.cos(H);I.x=w*Q,I.y=-S*n+m,I.z=w*W,u.push(I.x,I.y,I.z),v.set(Q,P,W).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-S),T.push(g++)}y.push(T)}for(let F=0;F<s;F++)for(let T=0;T<r;T++){let S=y[T][F],w=y[T+1][F],V=y[T+1][F+1],B=y[T][F+1];(t>0||T!==0)&&(h.push(S,w,B),R+=3),(e>0||T!==r-1)&&(h.push(w,V,B),R+=3)}c.addGroup(p,R,0),p+=R}function M(v){let I=g,R=new et,P=new C,F=0,T=v===!0?t:e,S=v===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let w=g;for(let V=0;V<=s;V++){let H=V/s*l+a,Q=Math.cos(H),W=Math.sin(H);P.x=T*W,P.y=m*S,P.z=T*Q,u.push(P.x,P.y,P.z),d.push(0,S,0),R.x=Q*.5+.5,R.y=W*.5*S+.5,f.push(R.x,R.y),g++}for(let V=0;V<s;V++){let B=I+V,H=w+V;v===!0?h.push(H,H+1,B):h.push(H+1,H,B),F+=3}c.addGroup(p,F,v===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qi=class i extends Ee{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var mr=class extends pr{constructor(t){super(t),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new pr().fromJSON(s))}return this}},z1={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Su(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=X1(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return gr(r,o,e,a,l,f,0),o}};function Su(i,t,e,n,s){let r,o;if(s===n2(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Yh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Yh(r,i[r],i[r+1],o);return o&&zo(o,o.next)&&(vr(o),o=o.next),o}function $i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zo(e,e.next)||xe(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function gr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&J1(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?V1(i,n,s,r):k1(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),vr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=G1($i(i),t,e),gr(i,t,e,n,s,r,2)):o===2&&W1(i,t,e,n,s,r):gr($i(i),t,e,n,s,r,1);break}}}function k1(i){let t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ts(s,a,r,l,o,c,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function V1(i,t,e,n){let s=i.prev,r=i,o=i.next;if(xe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Yl(f,g,t,e,n),E=Yl(y,m,t,e,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=E;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ts(a,h,l,u,c,d,M.x,M.y)&&xe(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ts(a,h,l,u,c,d,v.x,v.y)&&xe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ts(a,h,l,u,c,d,M.x,M.y)&&xe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ts(a,h,l,u,c,d,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function G1(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!zo(s,r)&&bu(s,n,n.next,r)&&yr(s,r)&&yr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),vr(n),vr(n.next),n=i=r),n=n.next}while(n!==i);return $i(n)}function W1(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&j1(o,a)){let l=Tu(o,a);o=$i(o,o.next),l=$i(l,l.next),gr(o,t,e,n,s,r,0),gr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function X1(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Su(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(K1(c));for(s.sort(Y1),r=0;r<s.length;r++)e=Z1(s[r],e);return e}function Y1(i,t){return i.x-t.x}function Z1(i,t){let e=q1(i,t);if(!e)return t;let n=Tu(e,i);return $i(n,n.next),$i(e,e.next)}function q1(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ts(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),yr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&$1(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function $1(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function J1(i,t,e,n){let s=i;do s.z===0&&(s.z=Yl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Q1(s)}function Q1(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Yl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function K1(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ts(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function j1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!t2(i,t)&&(yr(i,t)&&yr(t,i)&&e2(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||zo(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zo(i,t){return i.x===t.x&&i.y===t.y}function bu(i,t,e,n){let s=no(xe(i,t,e)),r=no(xe(i,t,n)),o=no(xe(e,n,i)),a=no(xe(e,n,t));return!!(s!==r&&o!==a||s===0&&eo(i,e,t)||r===0&&eo(i,n,t)||o===0&&eo(e,i,n)||a===0&&eo(e,t,n))}function eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function no(i){return i>0?1:i<0?-1:0}function t2(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function e2(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Tu(i,t){let e=new Zl(i.i,i.x,i.y),n=new Zl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yh(i,t,e,n){let s=new Zl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function n2(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var hr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Zh(t),qh(n,t);let o=t.length;e.forEach(Zh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,qh(n,e[l]);let a=z1.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Zh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function qh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Lo=class i extends Re{constructor(t=new mr([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:i2,M,v=!1,I,R,P,F;p&&(M=p.getSpacedPoints(h),v=!0,d=!1,I=p.computeFrenetFrames(h,!1),R=new C,P=new C,F=new C),d||(m=0,f=0,g=0,y=0);let T=a.extractPoints(c),S=T.shape,w=T.holes;if(!hr.isClockWise(S)){S=S.reverse();for(let j=0,rt=w.length;j<rt;j++){let x=w[j];hr.isClockWise(x)&&(w[j]=x.reverse())}}let B=hr.triangulateShape(S,w),H=S;for(let j=0,rt=w.length;j<rt;j++){let x=w[j];S=S.concat(x)}function Q(j,rt,x){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(rt,x)}let W=S.length,st=B.length;function X(j,rt,x){let It,nt,Et,ct=j.x-rt.x,zt=j.y-rt.y,vt=x.x-j.x,A=x.y-j.y,_=ct*ct+zt*zt,O=ct*A-zt*vt;if(Math.abs(O)>Number.EPSILON){let q=Math.sqrt(_),tt=Math.sqrt(vt*vt+A*A),$=rt.x-zt/q,wt=rt.y+ct/q,dt=x.x-A/tt,_t=x.y+vt/tt,ee=((dt-$)*A-(_t-wt)*vt)/(ct*A-zt*vt);It=$+ct*ee-j.x,nt=wt+zt*ee-j.y;let it=It*It+nt*nt;if(it<=2)return new et(It,nt);Et=Math.sqrt(it/2)}else{let q=!1;ct>Number.EPSILON?vt>Number.EPSILON&&(q=!0):ct<-Number.EPSILON?vt<-Number.EPSILON&&(q=!0):Math.sign(zt)===Math.sign(A)&&(q=!0),q?(It=-zt,nt=ct,Et=Math.sqrt(_)):(It=ct,nt=zt,Et=Math.sqrt(_/2))}return new et(It/Et,nt/Et)}let ht=[];for(let j=0,rt=H.length,x=rt-1,It=j+1;j<rt;j++,x++,It++)x===rt&&(x=0),It===rt&&(It=0),ht[j]=X(H[j],H[x],H[It]);let yt=[],Tt,Zt=ht.concat();for(let j=0,rt=w.length;j<rt;j++){let x=w[j];Tt=[];for(let It=0,nt=x.length,Et=nt-1,ct=It+1;It<nt;It++,Et++,ct++)Et===nt&&(Et=0),ct===nt&&(ct=0),Tt[It]=X(x[It],x[Et],x[ct]);yt.push(Tt),Zt=Zt.concat(Tt)}for(let j=0;j<m;j++){let rt=j/m,x=f*Math.cos(rt*Math.PI/2),It=g*Math.sin(rt*Math.PI/2)+y;for(let nt=0,Et=H.length;nt<Et;nt++){let ct=Q(H[nt],ht[nt],It);lt(ct.x,ct.y,-x)}for(let nt=0,Et=w.length;nt<Et;nt++){let ct=w[nt];Tt=yt[nt];for(let zt=0,vt=ct.length;zt<vt;zt++){let A=Q(ct[zt],Tt[zt],It);lt(A.x,A.y,-x)}}}let ae=g+y;for(let j=0;j<W;j++){let rt=d?Q(S[j],Zt[j],ae):S[j];v?(P.copy(I.normals[0]).multiplyScalar(rt.x),R.copy(I.binormals[0]).multiplyScalar(rt.y),F.copy(M[0]).add(P).add(R),lt(F.x,F.y,F.z)):lt(rt.x,rt.y,0)}for(let j=1;j<=h;j++)for(let rt=0;rt<W;rt++){let x=d?Q(S[rt],Zt[rt],ae):S[rt];v?(P.copy(I.normals[j]).multiplyScalar(x.x),R.copy(I.binormals[j]).multiplyScalar(x.y),F.copy(M[j]).add(P).add(R),lt(F.x,F.y,F.z)):lt(x.x,x.y,u/h*j)}for(let j=m-1;j>=0;j--){let rt=j/m,x=f*Math.cos(rt*Math.PI/2),It=g*Math.sin(rt*Math.PI/2)+y;for(let nt=0,Et=H.length;nt<Et;nt++){let ct=Q(H[nt],ht[nt],It);lt(ct.x,ct.y,u+x)}for(let nt=0,Et=w.length;nt<Et;nt++){let ct=w[nt];Tt=yt[nt];for(let zt=0,vt=ct.length;zt<vt;zt++){let A=Q(ct[zt],Tt[zt],It);v?lt(A.x,A.y+M[h-1].y,M[h-1].x+x):lt(A.x,A.y,u+x)}}}J(),ot();function J(){let j=s.length/3;if(d){let rt=0,x=W*rt;for(let It=0;It<st;It++){let nt=B[It];Ht(nt[2]+x,nt[1]+x,nt[0]+x)}rt=h+m*2,x=W*rt;for(let It=0;It<st;It++){let nt=B[It];Ht(nt[0]+x,nt[1]+x,nt[2]+x)}}else{for(let rt=0;rt<st;rt++){let x=B[rt];Ht(x[2],x[1],x[0])}for(let rt=0;rt<st;rt++){let x=B[rt];Ht(x[0]+W*h,x[1]+W*h,x[2]+W*h)}}n.addGroup(j,s.length/3-j,0)}function ot(){let j=s.length/3,rt=0;xt(H,rt),rt+=H.length;for(let x=0,It=w.length;x<It;x++){let nt=w[x];xt(nt,rt),rt+=nt.length}n.addGroup(j,s.length/3-j,1)}function xt(j,rt){let x=j.length;for(;--x>=0;){let It=x,nt=x-1;nt<0&&(nt=j.length-1);for(let Et=0,ct=h+m*2;Et<ct;Et++){let zt=W*Et,vt=W*(Et+1),A=rt+It+zt,_=rt+nt+zt,O=rt+nt+vt,q=rt+It+vt;Xt(A,_,O,q)}}}function lt(j,rt,x){l.push(j),l.push(rt),l.push(x)}function Ht(j,rt,x){Vt(j),Vt(rt),Vt(x);let It=s.length/3,nt=E.generateTopUV(n,s,It-3,It-2,It-1);se(nt[0]),se(nt[1]),se(nt[2])}function Xt(j,rt,x,It){Vt(j),Vt(rt),Vt(It),Vt(rt),Vt(x),Vt(It);let nt=s.length/3,Et=E.generateSideWallUV(n,s,nt-6,nt-3,nt-2,nt-1);se(Et[0]),se(Et[1]),se(Et[3]),se(Et[1]),se(Et[2]),se(Et[3])}function Vt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function se(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return s2(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wl[s.type]().fromJSON(s)),new i(n,t.options)}},i2={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new et(r,o),new et(a,l),new et(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new et(o,1-l),new et(c,1-u),new et(d,1-g),new et(y,1-p)]:[new et(a,1-l),new et(h,1-u),new et(f,1-g),new et(m,1-p)]}};function s2(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ze=class i extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let E=[],M=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){let R=I/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(R+v,1-M),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let M=h[p][E+1],v=h[p][E],I=h[p+1][E],R=h[p+1][E+1];(p!==0||o>0)&&f.push(M,v,R),(p!==n-1||l<Math.PI)&&f.push(v,I,R)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(y,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gn=class i extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;o.push(y,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Lt=class extends ri{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function io(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function r2(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ns=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ql=class extends Ns{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wc,endingEnd:Wc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xc:r=t,a=2*e-n;break;case Yc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xc:o=t,l=2*n-e;break;case Yc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,E=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+E*o[c+I]+M*o[l+I]+v*o[u+I];return r}},$l=class extends Ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Jl=class extends Ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=io(e,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:io(t.times,Array),values:io(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ql(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case co:e=this.InterpolantFactoryMethodDiscrete;break;case _l:e=this.InterpolantFactoryMethodLinear;break;case ta:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return _l;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&r2(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ta,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=_l;var Ji=class extends Cn{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=co;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends Cn{};Ql.prototype.ValueTypeName="color";var Kl=class extends Cn{};Kl.prototype.ValueTypeName="number";var jl=class extends Ns{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)bi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Uo=class extends Cn{InterpolantFactoryMethodLinear(t){return new jl(this.times,this.values,this.getValueSize(),t)}};Uo.prototype.ValueTypeName="quaternion";Uo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=co;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends Cn{};tc.prototype.ValueTypeName="vector";var ec=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},o2=new ec,nc=class{constructor(t){this.manager=t!==void 0?t:o2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};nc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bs=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},We=class extends Bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Da=new _e,$h=new C,Jh=new C,_r=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;$h.setFromMatrixPosition(t.matrixWorld),e.position.copy($h),Jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jh),e.updateMatrixWorld(),Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ic=class extends _r{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=uo*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},zn=class extends Bs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ic}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Qh=new _e,sr=new C,La=new C,sc=class extends _r{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(sr),La.copy(n.position),La.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(La),n.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),Qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh)}},yn=class extends Bs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},rc=class extends _r{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ri=class extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new rc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var No=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Kh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Kh(){return 0}var vc="\\[\\]\\.:\\/",a2=new RegExp("["+vc+"]","g"),_c="[^"+vc+"]",l2="[^"+vc.replace("\\.","")+"]",c2=/((?:WC+[\/:])*)/.source.replace("WC",_c),h2=/(WCOD+)?/.source.replace("WCOD",l2),u2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),d2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),f2=new RegExp("^"+c2+h2+u2+d2+"$"),p2=["material","materials","bones","map"],oc=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(a2,"")}static parseTrackName(t){let e=f2.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);p2.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=oc;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var X2=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);var ko={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var oi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},m2=new Ls(-1,1,1,-1,0,1),Ec=class extends Re{constructor(){super(),this.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fe([0,2,0,0,2,0],2))}},g2=new Ec,ks=class{constructor(t){this._mesh=new Z(g2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,m2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ki=class extends oi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Hs.clone(t.uniforms),this.material=new Oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ks(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Er=class extends oi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Vo=class extends oi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Go=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new et);this._width=n.width,this._height=n.height,e=new Ge(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ln}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ki(ko),this.copyPass.material.blending=Bn,this.clock=new No}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Er!==void 0&&(o instanceof Er?n=!0:o instanceof Vo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Au={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ut(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Vs=class i extends oi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new Ut(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ge(r,o,{type:ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ge(r,o,{type:ln});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ge(r,o,{type:ln});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Au;this.highPassUniforms=Hs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ko;this.copyUniforms=Hs.clone(h.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:nn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ut,this.oldClearAlpha=1,this.basic=new ue,this.fsQuad=new ks(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Oe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};Vs.BlurDirectionX=new et(1,0);Vs.BlurDirectionY=new et(0,1);var ji=1920,ts=1080;function Qt(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var xu=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Gt=(i,t,e)=>i+(t-i)*e,At=(i,t,e)=>{let n=xu((e-i)/(t-i));return n*n*(3-2*n)};var y2=i=>(i=xu(i),i*i*(3-2*i));function Mc(i,t){if(t<=i[0][0])return i[0][1];for(let e=1;e<i.length;e++)if(t<=i[e][0]){let n=y2((t-i[e-1][0])/(i[e][0]-i[e-1][0])),s=i[e-1][1],r=i[e][1];return Array.isArray(s)?s.map((o,a)=>Gt(o,r[a],n)):Gt(s,r,n)}return i[i.length-1][1]}var v2={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new et(ji,ts)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<44;i++){float fi=float(i);float r=sqrt(fi/44.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},_2={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new Ut(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(1.,.66);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1920.,1080.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Wo=class{constructor(t){let e=this.r=new bo({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(ji,ts,!1),e.shadowMap.enabled=!0,e.shadowMap.type=lc,e.toneMapping=On,e.outputColorSpace=Ci;let n=new Us(ji,ts);n.type=ii,this.rt=new Ge(ji,ts,{type:ln,samples:4,depthTexture:n}),this.composer=new Go(e,new Ge(ji,ts,{type:ln})),this.dof=new Ki(v2,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=n,this.bloom=new Vs(new et(ji/2,ts/2),.45,.75,.82),this.grade=new Ki(_2),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(o=>t>=o.t0&&t<o.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let n=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=n.focus??6,s.range.value=n.range??3,s.maxBlur.value=n.blur??20,this.bloom.strength=n.bloom??.45,this.bloom.threshold=n.bloomT??.82,this.bloom.radius=n.bloomR??.75,r.vig.value=n.vig??.42,r.exposure.value=n.exposure??1,r.sat.value=n.sat??1,r.flash.value=n.flash??0,r.frame.value=Math.floor(t*30)%97,r.tint.value.set(n.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function wu(i,t,e,n=40){let s=new Ao;s.background=new Ut(e);let r=new Ye(n,ji/ts,.08,400);return{t0:i,t1:t,scene:s,camera:r,update(){return{}}}}function Ru(i,t,e,n=0){i.position.set(t[0],t[1],t[2]),i.up.set(Math.sin(n),Math.cos(n),0),i.lookAt(e[0],e[1],e[2])}var hn=1/420,Sc=new Map;function un(i,t,e,n){if(Sc.has(i))return Sc.get(i);let s=document.createElement("canvas");s.width=t*2,s.height=e*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",n(r,t,e);let o=new Ke(s);return o.colorSpace=ye,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,Sc.set(i,o),o}var te=i=>new Path2D(i);function Ie(i,t,e){i.save(),i.fillStyle=e,i.fill(t),i.restore()}function vn(i,t,e,n,s,...r){let o=i.createLinearGradient(t,e,n,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var E2={camisa:{a:"#FFFFFF",b:"#E2E2EA",c:"#C4C4CE",s:"#FFFFFF",kind:"shirt",cuff:"#EDEDF2",pants:"#4E3A2C",belt:"#2A1E16"},mae:{a:"#9A3040",b:"#7A2232",c:"#5A1824",s:"#C25466",kind:"dress",cuff:"#111",belt:"#F4EFE4",flora:"#9A3040"},parteira:{a:"#7A6A5A",b:"#5E5042",c:"#4A3E32",s:"#9A8A78",kind:"dress",cuff:"#111",belt:"#E8E0D0",flora:"#7A6A5A"},campones:{a:"#8E6A4A",b:"#6E4E34",c:"#5A3E28",s:"#B08A64",kind:"hoodie",cuff:"#5A3E28"},campones2:{a:"#5E7A5A",b:"#4A6046",c:"#3A4C36",s:"#82A07C",kind:"hoodie",cuff:"#3A4C36"},padre:{a:"#2A2830",b:"#16141A",c:"#0A0A0E",s:"#44424C",kind:"robe",cuff:"#16141A",collar:"#F4F2EA",cross:"#C9A04A"},inquisidor:{a:"#F0EEE8",b:"#D4D0C8",c:"#B0ACA4",s:"#FFFFFF",kind:"robe",cuff:"#1A1A22",collar:"#1A1A22",belt:"#1A1A22"},mercador:{a:"#2A4A7A",b:"#1E3A62",c:"#142A4A",s:"#4A6A9A",kind:"robe",cuff:"#C9A04A",collar:"#C9A04A",belt:"#C9A04A"},hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function M2(i,t){return un("torso_"+t,300,320,e=>{if(e.translate(150,20),i.kind==="hoodie"){let n=te("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");Ie(e,n,vn(e,-100,0,100,260,i.a,i.b)),e.fillStyle=i.c,e.globalAlpha=.3,e.fill(te("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),e.globalAlpha=1,e.fillStyle=i.b,e.fill(te("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),e.fillStyle=i.c,e.fill(te("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),e.strokeStyle="#F4F4EE",e.lineWidth=5,e.beginPath(),e.moveTo(-18,66),e.lineTo(-20,126),e.moveTo(18,66),e.lineTo(20,126),e.stroke(),e.fillStyle="#F4F4EE",e.beginPath(),e.arc(-20,130,4.5,0,7),e.arc(20,130,4.5,0,7),e.fill(),e.fillStyle=i.b,e.strokeStyle=i.c,e.lineWidth=3.5;let s=te("M-62 164 L62 164 L78 240 L-78 240Z");e.fill(s),e.stroke(s),e.fillStyle=i.c,e.fillRect(-104,240,208,24),e.strokeStyle=i.b,e.lineWidth=2.5;for(let r=-100;r<104;r+=10)e.beginPath(),e.moveTo(r,242),e.lineTo(r,263),e.stroke()}else if(i.kind==="shirt"){Ie(e,te("M-84 22 Q-40 6 0 8 Q40 6 84 22 Q96 110 84 200 L-84 200 Q-96 110 -84 22Z"),vn(e,-80,0,80,200,i.a,i.b)),e.strokeStyle="#B8B8C488",e.lineWidth=3,[[-50,60,-40,190],[46,70,38,190],[-22,120,-26,195]].forEach(([r,o,a,l])=>{e.beginPath(),e.moveTo(r,o),e.quadraticCurveTo(r+8,(o+l)/2,a,l),e.stroke()}),e.fillStyle="#0a0a12",e.fill(te("M-16 8 L16 8 L0 36Z"));let n=te("M-32 6 L0 40 L-12 54 L-46 22Z"),s=te("M32 6 L0 40 L12 54 L46 22Z");e.fillStyle="#FFFFFF",e.fill(n),e.fill(s),e.strokeStyle="#A8A8B6",e.lineWidth=2.5,e.stroke(n),e.stroke(s),e.strokeStyle="#C4C4CE",e.lineWidth=3,e.beginPath(),e.moveTo(0,42),e.lineTo(0,196),e.stroke(),e.fillStyle="#8A8A98";for(let r=64;r<196;r+=30)e.beginPath(),e.arc(7,r,4,0,7),e.fill();e.strokeStyle="#C4C4CE",e.lineWidth=2.5,e.strokeRect(-64,70,32,34),Ie(e,te("M-80 196 L80 196 L84 276 L-84 276Z"),i.pants||"#4E3A2C",null),e.fillStyle=i.belt||"#2A1E16",e.fillRect(-82,190,164,14),e.fillStyle="#C9A04A",e.fillRect(-9,190,18,14)}else if(i.kind==="robe")Ie(e,te("M-80 20 Q-40 2 0 4 Q40 2 80 20 Q100 150 112 300 L-112 300 Q-100 150 -80 20Z"),vn(e,-90,0,90,300,i.a,i.b)),e.fillStyle=i.collar||"#F4F2EA",e.fill(te("M-28 4 L28 4 L20 28 L-20 28Z")),e.strokeStyle=i.c,e.lineWidth=3,e.beginPath(),e.moveTo(0,28),e.lineTo(0,300),e.stroke(),i.cross&&(e.fillStyle=i.cross,e.fillRect(-6,70,12,60),e.fillRect(-22,86,44,12)),e.fillStyle=i.belt||i.c,e.fillRect(-92,168,184,10);else if(i.kind==="suit"){Ie(e,te("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),vn(e,-100,0,100,280,i.a,i.b)),e.strokeStyle="#ffffff10",e.lineWidth=2;for(let n=-92;n<96;n+=13)e.beginPath(),e.moveTo(n,30),e.lineTo(n,280),e.stroke();e.fillStyle="#F4F2EA",e.fill(te("M-34 6 L34 6 L10 138 L-10 138Z")),e.fillStyle="#39AE9F",e.fill(te("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),e.strokeStyle="#8FDCCF",e.lineWidth=2;for(let n=0;n<4;n++)e.beginPath(),e.moveTo(-10,52+n*20),e.lineTo(10,44+n*20),e.stroke();e.fillStyle=i.c,e.fill(te("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),e.fill(te("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),e.fillStyle="#39AE9F",e.fill(te("M-70 86 L-34 86 L-46 70 L-58 70Z")),e.fillStyle="#0d0f14",e.beginPath(),e.arc(0,176,7,0,7),e.arc(0,216,7,0,7),e.fill()}else if(i.kind==="coat")Ie(e,te("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),vn(e,-100,0,100,290,i.a,i.b)),e.fillStyle="#39AE9F",e.fill(te("M-30 6 L30 6 L12 118 L-12 118Z")),e.fillStyle="#20273a",e.fillRect(-13,16,26,100),e.fillStyle=i.c,e.fill(te("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),e.fill(te("M30 6 L54 24 L30 78 L6 128 L12 134Z")),e.strokeStyle=i.c,e.lineWidth=3,e.beginPath(),e.moveTo(0,130),e.lineTo(0,292),e.stroke(),e.strokeRect(-76,188,54,46),e.strokeRect(22,188,54,46),e.fillStyle="#3F6FB0",e.fillRect(44,182,5,26),e.fillStyle="#C9361F",e.fillRect(56,182,5,22);else if(i.kind==="dress"){Ie(e,te("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),vn(e,-60,0,60,120,i.a,i.b)),Ie(e,te("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),vn(e,-100,120,100,300,i.a,i.b)),e.fillStyle=i.belt,e.fillRect(-58,104,116,20);let n=7,s=()=>(n=n*16807%2147483647)/2147483647;e.fillStyle=i.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)e.beginPath(),e.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),e.fill()}}else Ie(e,te("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),vn(e,-70,0,70,200,i.a,i.b)),e.fillStyle="#0a0a12",e.fill(te("M-22 26 L22 26 L0 64Z")),Ie(e,te("M-68 196 L68 196 L74 276 L-74 276Z"),i.pants||"#555",null),e.fillStyle=i.belt||i.c,e.fillRect(-70,192,140,12)})}function Cu(i,t,e){return un("sl_"+t+e,90,170,n=>{if(n.translate(45,10),i.kind==="dress"||i.kind==="blouse"){e==="u"?(Ie(n,te("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),vn(n,-26,0,26,50,i.a,i.b)),n.fillStyle="#17161e",n.fillRect(-7,48,14,100)):(Ie(n,te("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",i.kind?"#FFE9C8":null,3),n.fillStyle="#3a3a48",n.fillRect(-2,0,3,130));return}let s=134,r=e==="u"?27:23,o=e==="u"?23:18;Ie(n,te(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),vn(n,-r,0,r,0,i.a,i.b)),n.fillStyle=i.s,n.globalAlpha=.5,n.fill(te(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),n.globalAlpha=1,e==="f"&&(n.fillStyle=i.cuff,n.fill(te(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function S2(){return un("hand",90,100,i=>{i.translate(45,14);let t=te("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");Ie(i,t,vn(i,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),i.strokeStyle="#4a4a58",i.lineWidth=2,i.beginPath(),i.moveTo(-12,18),i.quadraticCurveTo(0,8,12,16),i.stroke()})}function Pu(i){return un("leg"+i,50,160,t=>{t.translate(25,6),t.fillStyle="#191922",t.beginPath(),t.roundRect(-9,-6,18,158,9),t.fill(),t.fillStyle="#46465a",t.fillRect(-2.5,2,3,140)})}function b2(){return un("foot",80,40,i=>{i.translate(26,6),Ie(i,te("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),i.fillStyle="#E8E4DA",i.fillRect(-14,19,56,5)})}function T2(i="round"){return un("head"+i,300,300,t=>{t.translate(150,150);let e=new Path2D;e.arc(0,0,118,0,7);let n=t.createRadialGradient(10,-46,2,0,0,122);n.addColorStop(0,"#2C2E44"),n.addColorStop(.42,"#14141F"),n.addColorStop(1,"#08080E"),t.fillStyle=n,t.fill(e),t.save(),t.clip(e),t.globalAlpha=.1,t.fillStyle="#9fa4d8",t.beginPath(),t.ellipse(-4,-98,70,16,0,0,7),t.fill(),t.restore()})}var Du={open(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(0,0,18,27,t*.06,0,7),i.fill()},look(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(11,0,18,26,0,0,7),i.fill()},lookl(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(-11,0,18,26,0,0,7),i.fill()},down(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(0,16,18,22,0,0,7),i.fill()},wide(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(0,-2,23,33,0,0,7),i.fill()},small(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(0,0,10,14,0,0,7),i.fill()},happy(i,t){i.strokeStyle="#F6EFE6",i.lineWidth=8.5,i.beginPath(),i.moveTo(-22,8),i.quadraticCurveTo(0,-24,22,8),i.stroke()},shut(i,t){i.strokeStyle="#F6EFE6",i.lineWidth=8.5,i.beginPath(),i.moveTo(-22,-6),i.quadraticCurveTo(0,18,22,-6),i.stroke()},flat(i,t){i.strokeStyle="#F6EFE6",i.lineWidth=8.5,i.beginPath(),i.moveTo(-22,2),i.lineTo(22,2),i.stroke()},smug(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.moveTo(-22,-6),i.lineTo(22,-6),i.quadraticCurveTo(20,24,0,24),i.quadraticCurveTo(-20,24,-22,-6),i.fill()},sad(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.moveTo(-19,t>0?-14:2),i.lineTo(19,t>0?2:-14),i.quadraticCurveTo(20,26,0,26),i.quadraticCurveTo(-20,26,-19,t>0?-14:2),i.fill()},angry(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.moveTo(-19,t>0?6:-14),i.lineTo(19,t>0?-14:6),i.quadraticCurveTo(20,26,0,26),i.quadraticCurveTo(-20,26,-19,t>0?6:-14),i.fill()},heart(i,t){i.fillStyle="#F0728C",i.beginPath(),i.moveTo(0,22),i.bezierCurveTo(-34,-2,-18,-30,0,-10),i.bezierCurveTo(18,-30,34,-2,0,22),i.fill()}};function A2(i,t){return un("eye_"+i+(t?"L":""),300,300,e=>{e.translate(150,150),[-1,1].forEach(n=>{e.save(),e.translate(n*42,0),Du[i](e,n),t&&(e.strokeStyle="#F6EFE6",e.lineWidth=3.5,[0,1,2].forEach(s=>{e.beginPath(),e.moveTo(n*(8+s*6),-22+s*3),e.quadraticCurveTo(n*(16+s*7),-34+s*2,n*(26+s*6),-36+s*5),e.stroke()})),e.restore()}),t&&(e.fillStyle="#E8667F55",[-1,1].forEach(n=>{e.beginPath(),e.ellipse(n*48,40,26,13,0,0,7),e.fill()}))})}function x2(i,t,e){return un("hair_"+i+t,420,500,n=>{if(n.translate(210,170),i==="long"){let s=te("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");Ie(n,s,vn(n,-120,-150,120,250,t,e||t)),n.strokeStyle="#ffffff30",n.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{n.beginPath(),n.moveTo(r,o),n.quadraticCurveTo(r*1.25,(o+l)/2,a,l),n.stroke()})}if(i==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),Ie(n,s,t);let r=te("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");Ie(n,r,t),n.strokeStyle="#ffffff33",n.lineWidth=6,n.beginPath(),n.moveTo(-60,-112),n.quadraticCurveTo(-10,-128,40,-112),n.stroke()}if(i==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),Ie(n,l,t)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),n.strokeStyle="#ffffff22",n.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{n.beginPath(),n.arc(r,o,26,3.6,5.4),n.stroke()})}if(i==="bob"){let s=te("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");Ie(n,s,vn(n,0,-150,0,100,t,e||t)),n.strokeStyle="#ffffff30",n.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{n.beginPath(),n.moveTo(r,o),n.quadraticCurveTo(r*1.22,(o+l)/2,a,l),n.stroke()})}i==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),Ie(n,l,"#E9E9EF")})})})}var Iu=(i,t={})=>new ue({map:i,alphaTest:.5,alphaToCoverage:!0,side:he,...t}),Fu=new Map,bc=new Map,w2=[];function R2(i){if(bc.has(i))return bc.get(i);let t=i.image,e=document.createElement("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;n.drawImage(t,Math.cos(a)*s,Math.sin(a)*s)}n.globalCompositeOperation="source-in",n.fillStyle="#FFFFFF",n.fillRect(0,0,e.width,e.height);let r=new Ke(e);return r.colorSpace=ye,r.anisotropy=8,bc.set(i,r),r}function cn(i,t,e,n,s,r=0,o,a=!1){let l=new Ft(t*hn,e*hn);l.translate((t/2-n)*hn,(s-e/2)*hn,0);let c=Iu(i);o.push(c);let h=new Z(l,c);if(h.position.z=r,h.castShadow=!0,!a){let d=Iu(R2(i),{color:"#FFE9C8"});w2.push(d);let f=new Z(l,d);f.position.z=-.045-r,h.add(f)}let u=Fu.get(i);return u||(u=new Ai({depthPacking:Os,map:i,alphaTest:.5,side:he}),Fu.set(i,u)),h.customDepthMaterial=u,h}function C2(){return un("blob",128,128,i=>{let t=i.createRadialGradient(64,64,2,64,64,62);t.addColorStop(0,"#000000AA"),t.addColorStop(.55,"#00000055"),t.addColorStop(1,"#00000000"),i.fillStyle=t,i.fillRect(0,0,128,128)})}function P2(){return un("halo",256,512,i=>{let t=i.createRadialGradient(128,256,10,128,256,128);t.addColorStop(0,"#FFE6C0"),t.addColorStop(.62,"#FFE6C066"),t.addColorStop(1,"#FFE6C000"),i.save(),i.translate(0,0),i.scale(1,2),i.translate(0,-128),i.fillStyle=t,i.fillRect(0,0,256,512),i.restore()})}function Mr(i={}){let t=E2[i.outfit||"hero"],e=i.outfit||"hero",n=new Nt,s=[],r=new Nt;n.add(r);let o=316,a=o+262,l={},c={};for(let[m,p,E]of[["L",-1,-.012],["R",1,-.01]]){let M=new Nt;M.position.set(p*34*hn,o*hn,E);let v=new Nt;v.position.y=-142*hn,M.add(cn(Pu(1),50,160,25,6,0,s)),v.add(cn(Pu(1),50,160,25,6,0,s));let I=cn(b2(),80,40,26,6,.001,s);I.position.y=-142*hn,p<0&&(I.scale.x=-1),v.add(I),M.add(v),r.add(M),l[m]={th:M,shin:v}}let h=cn(M2(t,e),300,320,150,20,0,s);h.position.y=(a+4)*hn,r.add(h);for(let[m,p,E]of[["L",-1,-.006],["R",1,.006]]){let M=new Nt;M.position.set(p*(t.kind==="dress"?66:84)*hn,(a-24)*hn,E);let v=new Nt;v.position.y=-124*hn,M.add(cn(Cu(t,e,"u"),90,170,45,10,0,s)),v.add(cn(Cu(t,e,"f"),90,170,45,10,.001,s));let I=cn(S2(),90,100,45,14,.002,s);I.position.y=-128*hn,I.scale.set(p>0?-.8:.8,.8,1),v.add(I),M.add(v),r.add(M),c[m]={u:M,f:v,hand:I}}let u=new Nt;if(u.position.set(0,(a+104)*hn,.02),r.add(u),i.hair){let m=cn(x2(i.hair,i.hairc||"#4a2c1a",i.hairhi),420,500,210,170,-.03,s);u.add(m)}if(u.add(cn(T2(),300,300,150,150,0,s)),i.hair&&i.hair!=="old"&&i.hair!=="afro"){let m=cn(un("fringe_"+i.hair+(i.hairc||""),300,300,p=>{p.translate(150,150);let E=i.hairc||"#4a2c1a";p.fillStyle=E,p.fill(te(i.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),p.strokeStyle="#ffffff2c",p.lineWidth=5,p.beginPath(),p.moveTo(-70,-92),p.quadraticCurveTo(-10,-114,54,-96),p.stroke()}),300,300,150,150,.003,s,!0);u.add(m)}if(i.lash){let m=cn(un("earring",300,300,p=>{p.translate(150,150),[-1,1].forEach(E=>{p.strokeStyle="#F2C94C",p.lineWidth=6,p.beginPath(),p.arc(E*124,58,15,0,7),p.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,u.add(m)}let d={};for(let m of Object.keys(Du)){let p=cn(A2(m,i.lash),300,300,150,150,.002,s,!0);p.castShadow=!1,p.visible=m==="open",u.add(p),d[m]=p}if(i.glasses){let m=cn(un("glasses",300,300,p=>{p.translate(150,150),p.strokeStyle="#E4E6EC",p.lineWidth=7,p.beginPath(),p.arc(-42,0,36,0,7),p.stroke(),p.beginPath(),p.arc(42,0,36,0,7),p.stroke(),p.beginPath(),p.moveTo(-6,0),p.lineTo(6,0),p.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,u.add(m)}if(i.hat){let m=cn(i.hat(un),300,300,150,150,.006,s);u.add(m)}let f=new Z(new Ft(1,.4),new ue({map:C2(),transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.012,n.add(f);let g=null;i.glow&&(g=new Z(new Ft(2.1,3),new ue({map:P2(),transparent:!0,depthWrite:!1,opacity:i.glow,blending:nn,side:he})),g.position.set(0,.95,-.09),r.add(g));let y={root:n,body:r,head:u,arms:c,legs:l,eyes:d,mats:s,torso:h,tint(m){s.forEach(p=>p.color.set(m))},eye(m){for(let p in d)d[p].visible=p===m},cheer(m,p=0,E=1){let M=m*6+p,v=Math.sin(M);y.pose({armL:[150+v*16*E,18+v*10],armR:[150-v*16*E,18-v*10],bob:Math.abs(Math.sin(M*.5))*.07*E,head:v*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(p=>{p.transparent=m<1,p.opacity=m,p.alphaTest=m<1?.02:.5,p.alphaToCoverage=m>=1,p.depthWrite=m>=1}),f.material.opacity=m,g&&(g.material.opacity=(i.glow||0)*m)},pose(m={}){let p=Math.PI/180,E=m.armL||[6,4],M=m.armR||[6,4],v=m.legL||[0,0],I=m.legR||[0,0];c.L.u.rotation.z=-E[0]*p,c.L.f.rotation.z=-E[1]*p,c.R.u.rotation.z=M[0]*p,c.R.f.rotation.z=M[1]*p,l.L.th.rotation.z=-v[0]*p,l.L.shin.rotation.z=-v[1]*p,l.R.th.rotation.z=I[0]*p,l.R.shin.rotation.z=I[1]*p,u.rotation.z=(m.head||0)*p,r.rotation.z=(m.lean||0)*p,r.position.y=m.bob||0;let R=m.squash||0;r.scale.set(1-R*.5,1+R,1)},walk(m,p=1,E=1){let M=m*6.4*p,v=Math.sin(M),I=Math.cos(M);y.pose({legL:[v*15*E,Math.max(0,-v)*26*E],legR:[-v*15*E,Math.max(0,v)*26*E],armL:[8-v*12*E,6],armR:[8+v*12*E,6],bob:Math.abs(I)*.03*E,head:v*2})},place(m,p,E=0,M=1){n.position.set(m,E,p),n.scale.setScalar(M)},face(m){let p=m.position;n.rotation.y=Math.atan2(p.x-n.position.x,p.z-n.position.z),f.rotation.z=-n.rotation.y}};return y.pose(),y}function Mt(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t;let s=n.getContext("2d");e(s,i,t);let r=new Ke(n);return r.colorSpace=ye,r.anisotropy=8,r}var ai=(i,t={})=>new Lt({color:i,roughness:.88,metalness:0,...t});function N(i,t,e,n,s=0,r=0,o=0,a=!0){let l=new Z(new sn(i,t,e),typeof n=="string"?ai(n):n);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function Fe(i,t,e=1){let n=Mt(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new Xi(new xi({map:n,color:i,transparent:!0,depthWrite:!1,opacity:e,blending:nn}));return s.scale.set(t,t,1),s}var Lu=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function I2(i,t,e,n,s,r=.42){let o=Qt(i),a=256*t,l=300*e,c,h=Mt(a,l,d=>{d.fillStyle=n,d.fillRect(0,0,a,l);for(let f=0;f<l;f+=12)for(let g=f/12%2*-14;g<a;g+=30)d.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,d.fillRect(g,f,28,10);for(let f=0;f<e;f++)d.fillStyle="rgba(255,240,220,.14)",d.fillRect(0,f*300+292,a,8)}),u=Mt(a,l,d=>{d.fillStyle="#000",d.fillRect(0,0,a,l);let f=h.image.getContext("2d");for(let g=0;g<e;g++)for(let y=0;y<t;y++){let m=y*256+56,p=g*300+60,E=144,M=196,v=o()<r,I=o();if(f.fillStyle="#E8E0CE",f.fillRect(m-9,p-9,E+18,M+18),f.fillStyle="rgba(0,0,0,.35)",f.fillRect(m-18,p+M+9,E+36,12),f.fillStyle="rgba(245,235,215,.8)",f.fillRect(m-18,p+M+6,E+36,8),f.fillStyle=s?v?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",f.fillRect(m,p,E,M),v||!s){let R=v?I<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";f.fillStyle=R,f.fillRect(m,p,26,M),f.fillRect(m+E-26,p,26,M)}s||(f.fillStyle="#ffffff30",f.beginPath(),f.moveTo(m+20,p+M),f.lineTo(m+90,p),f.lineTo(m+124,p),f.lineTo(m+54,p+M),f.fill()),f.fillStyle="#E8E0CE",f.fillRect(m+E/2-3,p,6,M),f.fillRect(m,p+M*.45,E,6),v&&s&&(d.fillStyle=I<.5?"#FFC47A":"#FFD79C",d.fillRect(m,p,E,M),d.fillStyle="#000",d.fillRect(m+E/2-3,p,6,M),d.fillRect(m,p+M*.45,E,6))}h.needsUpdate=!0});return u.colorSpace=ye,{map:h,emissiveMap:u}}function Tc(i,t){let{x:e,z:n,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=t,u=Qt(i),d=new Nt,f=o*2.9+3.6,g=c||Lu[Math.floor(u()*Lu.length)],y=Math.max(2,Math.round(r/2.1)),m=I2(i,y,o,g,l,t.lit??.42),p=new Lt({map:m.map,emissiveMap:m.emissiveMap,emissive:new Ut(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),E=ai(g),M=[a>0?p:E,a>0?E:p,ai("#2c2730"),E,E,E],v=new Z(new sn(s,o*2.9,r),M);v.position.set(e,3.6+o*1.45,n),v.castShadow=v.receiveShadow=!0,d.add(v),d.add(N(s+.5,.5,r+.5,"#3d3540",e,f+.25,n)),d.add(N(s+.3,.35,r+.3,g,e,3.6,n));let I=e+a*(s/2+.01);if(h){let R=Mt(1024,180,w=>{w.fillStyle=h.bg,w.fillRect(0,0,1024,180),w.fillStyle="#ffffff22",w.fillRect(0,0,1024,8),w.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,w.textAlign="center",w.textBaseline="middle",w.fillStyle=h.fg||"#FFF4DC",w.shadowColor=h.fg||"#FFF4DC",w.shadowBlur=l?26:0,w.fillText(h.name,512,96)}),P=new Z(new sn(.18,1.05,r-.3),[new Lt({map:R,emissiveMap:R,emissive:new Ut(l?.85:0,l?.85:0,l?.85:0)}),new Lt({map:R,emissiveMap:R,emissive:new Ut(l?.85:0,l?.85:0,l?.85:0)}),ai("#222"),ai("#222"),ai("#222"),ai("#222")]);P.position.set(I+a*.1,3.25,n),a>0&&(P.scale.z=-1),P.castShadow=!0,d.add(P);let F=Mt(512,256,w=>{let V=w.createLinearGradient(0,0,0,256);V.addColorStop(0,h.win||"#F4C783"),V.addColorStop(1,"#D59A5C"),w.fillStyle=V,w.fillRect(0,0,512,256);let B=Qt(i+9);for(let H=0;H<26;H++)w.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(B()*6)],w.fillRect(B()*490,30+Math.floor(B()*3)*76,12+B()*26,52);for(let H of[84,160,236])w.fillStyle="#6b4530",w.fillRect(0,H,512,7)}),T=new Lt({map:F,emissiveMap:F,emissive:new Ut(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});d.add(N(.3,2.8,r-.1,"#3a2a24",I-a*.1,1.4,n));let S=new Z(new Ft(r-.9,2.1),T);S.rotation.y=a*Math.PI/2,S.position.set(I+a*.07,1.5,n),d.add(S);for(let w=-1;w<=1;w++)d.add(N(.08,2.3,.09,"#2a1d18",I+a*.1,1.5,n+w*(r-.9)/2));if(h.awning){let w=Mt(512,128,B=>{for(let H=0;H<12;H++)B.fillStyle=H%2?h.awning:"#F4EEDF",B.fillRect(H*512/12,0,42.666666666666664,128)}),V=new Z(new Ft(r-.3,1.3),new Lt({map:w,side:he,roughness:.9}));V.rotation.y=a*Math.PI/2,V.rotation.order="YXZ",V.rotation.x=-1,V.position.set(I+a*.55,2.56,n),V.castShadow=!0,d.add(V)}if(l){let w=new yn(h.light||"#FFC88A",3.2,7,1.8);w.position.set(I+a*1.7,2.1,n),d.add(w)}}return d}function Uu(i,t,e){let n=new Z(new Ft(i,t),e);return n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n}function F2(i="#A99D90"){let t=Mt(512,512,e=>{e.fillStyle=i,e.fillRect(0,0,512,512);let n=Qt(4);for(let s=0;s<2400;s++)e.fillStyle=`rgba(${n()<.5?"255,255,255":"0,0,0"},.035)`,e.fillRect(n()*512,n()*512,2,2);e.strokeStyle="rgba(30,20,20,.42)",e.lineWidth=4,e.strokeRect(0,0,512,512)});return t.wrapS=t.wrapT=Ve,t}function Bu(i,t){let e=Mt(1024,1024,s=>{s.fillStyle=t?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=Qt(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});e.wrapS=e.wrapT=Ve,e.repeat.set(1,12);let n=Uu(9,240,new Lt({map:e,roughness:.78,metalness:.05}));n.position.set(0,0,-100),i.add(n);for(let s of[-1,1]){let r=F2(t?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=Uu(4.4,240,new Lt({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),i.add(o),i.add(N(.22,.16,240,t?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function Ac(i,t,e,n,s=!0,r=5.5){let o=new Nt;o.add(N(.09,3.7,.09,"#15151b",t,1.85,e)),o.add(N(.26,.3,.26,"#15151b",t,.15,e));let a=N(.26,.4,.26,new Lt({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),t,3.85,e,!1);if(o.add(a),o.add(N(.34,.06,.34,"#15151b",t,4.08,e,!1)),s){let l=Fe("#FFB870",1.8,.4);l.position.set(t,3.85,e),o.add(l);let c=new yn("#FFC688",r,11,1.6);c.position.set(t,3.5,e),o.add(c)}return i.add(o),o}var Nu={};function es(i,t,e,n=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new Nt;o.add(N(.18*n,2.6*n,.18*n,"#2b1e18",t,1.3*n,e));let a=s.join()+r%3,l=Nu[a]||(Nu[a]=Mt(512,512,c=>{let h=Qt(r%3+3),u=(d,f,g,y)=>{c.fillStyle=y,c.beginPath();for(let m=0;m<=26;m++){let p=m/26*6.283,E=g*(.86+.14*Math.sin(p*5+d)+h()*.05);c.lineTo(d+Math.cos(p)*E,f+Math.sin(p)*E)}c.fill()};for(let[d,f,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])u(d,f,g,s[0]);for(let[d,f,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])u(d,f,g,s[1]);for(let[d,f,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])u(d,f,g,s[2]);c.fillStyle=s[3];for(let d=0;d<70;d++){let f=90+h()*330,g=70+h()*300;c.save(),c.translate(f,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new Z(new Ft(3.6*n,3.6*n),new Lt({map:l,alphaTest:.5,side:he,roughness:1}));h.position.set(t,3.5*n,e),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new Ai({depthPacking:Os,map:l,alphaTest:.5,side:he}),o.add(h)}return i.add(o),o}function Ou(i,t,e,n="#27425A",s=1,r=!0){let o=new Nt,a=new Lt({color:n,roughness:.38,metalness:.25}),l=new Lt({color:"#1A2233",roughness:.12,metalness:.55});o.add(N(1.75,.5,4.1,a,0,.58,0)),o.add(N(1.6,.42,2.05,l,0,1.03,-.1)),o.add(N(1.5,.05,1.9,a,0,1.26,-.1)),o.add(N(1.8,.16,4.2,"#B9BCC2",0,.37,0));for(let[u,d]of[[-.86,1.3],[.86,1.3],[-.86,-1.3],[.86,-1.3]]){let f=new Z(new Ee(.33,.33,.2,20),ai("#111"));f.rotation.z=Math.PI/2,f.position.set(u,.33,d),f.castShadow=!0,o.add(f);let g=new Z(new Ee(.16,.16,.21,14),ai("#AEB2BA"));g.rotation.z=Math.PI/2,g.position.set(u,.33,d),o.add(g)}let c=new Lt({color:"#fff",emissive:"#FFE8BE",emissiveIntensity:r?5:1}),h=new Lt({color:"#900",emissive:"#FF2C2C",emissiveIntensity:r?2.5:.5});for(let u of[-.6,.6])o.add(N(.3,.16,.05,c,u,.64,2.06,!1)),o.add(N(.3,.12,.05,h,u,.68,-2.06,!1));return o.position.set(t,0,e),o.rotation.y=s>0?0:Math.PI,i.add(o),o}function xc(i,t,e,n,s,r,o=3,a=0){let l=Mt(1600,900,h=>{h.clearRect(0,0,1600,900);let u=Qt(o);for(let d=0;d<3;d++)for(let f=-40;f<1620;){let g=50+u()*110,y=180+u()*(d===0?660:400);if(h.fillStyle=s[d],h.fillRect(f,900-y,g,y),u()<.2&&h.fillRect(f+g/2-4,900-y-60,8,60),r)for(let m=900-y+12;m<890;m+=18)for(let p=f+8;p<f+g-8;p+=14)u()<.34&&(h.fillStyle=d===2?"#FFD999":d===1?"#E9C28C":"#A98BA0",h.fillRect(p,m,7,10));f+=g*.92}}),c=new Z(new Ft(e,n),new ue({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+n/2,t),i.add(c),c}function In(i,t,e,n,s){let r=Mt(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new Z(new Ft(e,n),new ue({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,n*.32,t),i.add(o),o}var G=(i,t={})=>new Lt({color:i,roughness:.85,...t});function pe(i,t,e,n={}){let s=new Z(new Ft(t,e),new ue({map:i,alphaTest:n.blend?0:.5,transparent:!!n.blend,depthWrite:!n.blend,side:he,color:n.color||"#fff",blending:n.add?nn:Ei,fog:n.fog??!0}));return n.shadow&&(s.castShadow=!0,s.customDepthMaterial=new Ai({depthPacking:Os,map:i,alphaTest:.5,side:he})),s}function Ue(i,t){i.rotation.y=Math.atan2(t.position.x-i.position.x,t.position.z-i.position.z)}var wc={value:0};var Hu=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function D2(i,t){let[e,n,s,r]=Hu[i];return Mt(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=e,o.lineWidth=22,o.beginPath(),t?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=e,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=n,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),t?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function Xo(i,t,e={}){let{h:n=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=e,a=Qt(o),l={};for(let c of t){let h=Math.floor(a()*Hu.length)+(a()<(e.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,u=c%100,d=D2(u,h),f=new ue({map:d,alphaTest:.5,side:he,color:r});f.onBeforeCompile=m=>{m.uniforms.uT=wc,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+u%3).toFixed(1)} + ph))*${s.toFixed(3)}/${n.toFixed(2)};`)};let g=new Ro(new Ft(n*.5,n),f,l[c].length),y=new Pe;l[c].forEach((m,p)=>{y.position.set(m[0],(m[2]||0)+n/2,m[1]),y.rotation.y=m[3]||0;let E=.92+a()*.16;y.scale.set(E,E,1),y.updateMatrix(),g.setMatrixAt(p,y.matrix)}),g.frustumCulled=!1,i.add(g)}}function Pi(i,t=2600,e=300,n=1){let s=Qt(n),r=new Float32Array(t*3),o=new Float32Array(t*3);for(let u=0;u<t;u++){let d=s()*2-1,f=s()*6.283,g=Math.sqrt(1-d*d);r[u*3]=g*Math.cos(f)*e,r[u*3+1]=d*e,r[u*3+2]=g*Math.sin(f)*e;let y=.55+s()*.45,m=s();o[u*3]=y*(m>.8?1:.9),o[u*3+1]=y*.94,o[u*3+2]=y*(m<.2?.8:1)}let a=new Re;a.setAttribute("position",new Ce(r,3)),a.setAttribute("color",new Ce(o,3));let l=Mt(32,32,u=>{let d=u.createRadialGradient(16,16,0,16,16,16);d.addColorStop(0,"#fff"),d.addColorStop(.35,"#ffffffaa"),d.addColorStop(1,"#ffffff00"),u.fillStyle=d,u.fillRect(0,0,32,32)}),c=new wi({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new Yi(a,c);return h.frustumCulled=!1,i.add(h),h}function Sr(i,t,e,n,s,r,o=2,a=.45){let l=Mt(512,512,h=>{let u=Qt(o);h.clearRect(0,0,512,512);for(let d=0;d<60;d++){let f=256+(u()-.5)*360,g=256+(u()-.5)*360,y=40+u()*110,m=h.createRadialGradient(f,g,0,f,g,y);m.addColorStop(0,r+"30"),m.addColorStop(1,r+"00"),h.fillStyle=m,h.fillRect(0,0,512,512)}}),c=new Xi(new xi({map:l,transparent:!0,depthWrite:!1,blending:nn,opacity:a,fog:!1}));return c.position.set(t,e,n),c.scale.set(s,s,1),i.add(c),c}function kn(i,t,e,n={}){let{spread:s=.3,rise:r=3,size:o=1.3,col:a="#D8D6D2",t0:l=0,life:c=2.6,seed:h=3}=n,u=Qt(h),d=Mt(128,128,g=>{let y=g.createRadialGradient(64,64,0,64,64,64);y.addColorStop(0,"#ffffffAA"),y.addColorStop(1,"#ffffff00"),g.fillStyle=y,g.fillRect(0,0,128,128)}),f=[];for(let g=0;g<t;g++){let y=new Xi(new xi({map:d,color:a,transparent:!0,depthWrite:!1,opacity:0}));i.add(y),f.push({s:y,ph:u()*c,x:(u()-.5)*s,z:(u()-.5)*s,d:(u()-.5)*1.2})}return g=>{for(let y of f){let m=(g-l+y.ph)%c/c;y.s.position.set(e[0]+y.x+y.d*m,e[1]+r*m,e[2]+y.z),y.s.scale.setScalar(o*(.35+m)),y.s.material.opacity=Math.sin(m*Math.PI)*.42}}}var zu=(i,t,e,n,s)=>{let r=Mt(1024,1024,a=>{a.fillStyle=e,a.fillRect(0,0,1024,1024);let l=Qt(8);for(let c=0;c<11;c++){let h=c*94;a.fillStyle=`rgba(${l()<.5?"255,220,180":"20,10,5"},${l()*.12})`,a.fillRect(h,0,94,1024),a.fillStyle="#21140D",a.fillRect(h,0,3,1024);let u=l()*300;for(;u<1024;)a.fillRect(h,u,94,3),u+=340+l()*300}});r.wrapS=r.wrapT=Ve,r.repeat.set(n,s);let o=new Z(new Ft(i,t),new Lt({map:r,roughness:.5}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o};function Bt(i,t,e,n){let s=wu(i,t,e.bg||"#141228",e.fov||34),r=s.scene;e.fog&&(r.fog=new To(e.fog[0],e.fog[1])),e.far&&(s.camera.far=e.far,s.camera.updateProjectionMatrix());let o=n(r,s)||(()=>({}));return s.update=(a,l)=>(wc.value=a,{focus:6,range:3,blur:12,bloom:.3,bloomT:.92,vig:.45,exposure:1,...o(a,l,s.camera)||{}}),s}function Ot(i,t,e,n,s=0){Ru(i,Mc(t,n),Mc(e,n),s)}var Vu=(i,t,e,n,s,r,o=0)=>{let a=Mr({outfit:t,hair:e,hairc:n,lash:!!e});return a.place(s,r,o),i.add(a.root),a};function qe(i,t={}){let e=t.night??!1;i.add(new We(t.sky||(e?"#6E74C0":"#FFF0DC"),t.ground||"#3a2a20",t.hemi??(e?.75:1.1)));let n=new Ri(t.key||(e?"#8FA0FF":"#FFE2B8"),t.ki??(e?1.1:2.8));n.position.set(...t.pos||[-8,12,8]),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);let s=t.r||14;return Object.assign(n.shadow.camera,{left:-s,right:s,top:s,bottom:-s,far:80}),n.shadow.bias=-5e-4,n.shadow.radius=4,i.add(n),t.target&&(n.target.position.set(...t.target),i.add(n.target)),n}function Ii(i,t,e,n,s,r,o=-.5,a="#FFE2B0",l=.22){let c=Mt(64,256,u=>{let d=u.createLinearGradient(0,0,0,256);d.addColorStop(0,"#ffffffcc"),d.addColorStop(1,"#ffffff00"),u.fillStyle=d,u.fillRect(0,0,64,256)}),h=new Z(new Ft(s,r),new ue({map:c,color:a,transparent:!0,opacity:l,depthWrite:!1,blending:nn,side:he,fog:!1}));return h.position.set(t,e,n),h.rotation.z=o,i.add(h),h}function Yo(i,t,e,n=2,s="#FFE8C0"){let r=Qt(n),o=new Re,a=new Float32Array(t*3),l=[];for(let u=0;u<t;u++)l.push([e[0]+r()*(e[1]-e[0]),e[2]+r()*(e[3]-e[2]),e[4]+r()*(e[5]-e[4]),r()*6]);o.setAttribute("position",new Ce(a,3));let c=Mt(32,32,u=>{let d=u.createRadialGradient(16,16,0,16,16,16);d.addColorStop(0,"#fff"),d.addColorStop(1,"#ffffff00"),u.fillStyle=d,u.fillRect(0,0,32,32)}),h=new Yi(o,new wi({map:c,color:s,size:.035,transparent:!0,opacity:.7,depthWrite:!1,blending:nn}));return h.frustumCulled=!1,i.add(h),u=>{for(let d=0;d<t;d++){let f=l[d];a[d*3]=f[0]+Math.sin(u*.3+f[3])*.15,a[d*3+1]=f[1]+Math.sin(u*.2+f[3]*2)*.1,a[d*3+2]=f[2]}o.attributes.position.needsUpdate=!0}}function Gu(i,t,e,n,s,r,o,a=0,l="#C9A46A"){let c=new Nt;c.add(N(s+.08,r+.08,.04,l,0,0,-.02,!1));let h=new Z(new Ft(s,r),new Lt({map:Mt(256,Math.max(16,Math.round(256*r/s)),o),roughness:.8}));return h.position.z=.005,c.add(h),c.position.set(t,e,n),c.rotation.y=a,i.add(c),c}function br(i,t,e,n,s,r=.8,o="Fraunces"){let a=Mt(1024,Math.round(1024*e/t),(l,c,h)=>{l.fillStyle=n,l.fillRect(0,0,c,h),l.fillStyle=s,l.shadowColor=s,l.shadowBlur=20,l.font=`900 ${Math.round(h*.62)}px ${o}`,l.textAlign="center",l.textBaseline="middle",l.fillText(i,c/2,h*.54)});return new Z(new Ft(t,e),new Lt({map:a,emissiveMap:a,emissive:"#fff",emissiveIntensity:r}))}function Wu(i,t,e,n=1,s="#C76B4A"){let r=new Z(new Ee(.28*n,.2*n,.45*n,18),G(s));r.position.set(t,.225*n,e),r.castShadow=!0,i.add(r);let o=Mt(256,256,l=>{l.clearRect(0,0,256,256);for(let c=0;c<11;c++)l.fillStyle=c%2?"#3E8A52":"#2F6E42",l.save(),l.translate(128,250),l.rotate((c-5)*.26),l.beginPath(),l.ellipse(0,-100,17,100,0,0,7),l.fill(),l.restore()}),a=pe(o,1.3*n,1.3*n,{shadow:!0});return a.position.set(t,.45*n+.6*n,e),i.add(a),a}function Xu(i,t={}){let e=t.w??12,n=t.d??9,s=t.h??4.2,r=t.wz??-4,o=t.wall??"#2F5A5E";i.add(zu(e+6,n+8,t.floor??"#6A4530",4,3.5)).position.z=r+n/2;let a=Mt(512,512,h=>{h.fillStyle=o,h.fillRect(0,0,512,512);let u=new Ut(o),d="#"+u.clone().offsetHSL(0,0,.03).getHexString(),f="#"+u.clone().offsetHSL(0,0,-.03).getHexString();for(let g=0;g<8;g++){h.fillStyle=g%2?d:f,h.fillRect(g*64,0,64,512),h.fillStyle="#E8D8A022";for(let y=20;y<512;y+=64)h.beginPath(),h.arc(g*64+32,y+g%2*32,6,0,7),h.fill()}});a.wrapS=a.wrapT=Ve;let l=(h,u)=>{let d=a.clone();return d.needsUpdate=!0,d.repeat.set(h/1.6,u/1.6),new Lt({map:d,roughness:.95})},c=t.win;if(c){let[h,u,d,f]=c;for(let[y,m,p,E]of[[(-e+h)/2,s/2,h+e,s],[(u+e)/2,s/2,e-u,s],[(h+u)/2,d/2,u-h,d],[(h+u)/2,(f+s)/2,u-h,s-f]])i.add(N(p,E,.3,l(p,E),y,m,r));for(let[y,m,p,E]of[[h,(d+f)/2,.14,f-d+.14],[u,(d+f)/2,.14,f-d+.14],[(h+u)/2,f,u-h+.14,.14],[(h+u)/2,(d+f)/2,.07,f-d],[(h+u)/2,d+(f-d)*.62,u-h,.06]])i.add(N(p,E,.22,"#EDE5D2",y,m,r+.02));i.add(N(u-h+.5,.1,.36,"#EDE5D2",(h+u)/2,d-.02,r+.16));let g=y=>{let m=Mt(256,512,E=>{for(let M=0;M<8;M++)E.fillStyle=M%2?t.cur1??"#B0506A":t.cur2??"#8E3A54",E.fillRect(M*32,0,32,512)}),p=new Z(new Ft(.8,f-d+.9),new Lt({map:m,roughness:1,side:he}));p.position.set(y,(d+f)/2+.1,r+.3),p.castShadow=!0,i.add(p)};g(h-.3),g(u+.3),i.add(N(u-h+1.6,.05,.05,"#2a1d18",(h+u)/2,f+.45,r+.32,!1))}else i.add(N(e*2,s,.3,l(e*2,s),0,s/2,r));if(i.add(N(e*2,.3,.06,"#4A2E20",0,.15,r+.18)),i.add(N(e*2,.05,.05,"#D8C8A0",0,1,r+.17,!1)),t.side!==!1){let h=t.sideX??e/2,u=N(.3,s,n+4,l(n+4,s),h,s/2,r+(n+4)/2);i.add(u)}return{WZ:r,W:e,D:n,Hh:s}}function Zo(i=.36,t=.74){let e=new Nt,n=document.createElement("canvas");n.width=540,n.height=1110;let s=n.getContext("2d"),r=new Ke(n);r.colorSpace=ye,r.anisotropy=8,e.add(N(i,t,.03,G("#15151C",{roughness:.25,metalness:.6}),0,0,0));let o=new Z(new Ft(i*.92,t*.95),new ue({map:r}));o.position.z=.017,e.add(o);let a="";return e.paint=(l,c)=>{l!==a&&(a=l,c(s),r.needsUpdate=!0)},e.scr=o,e}var ku=(i,t="#2B3A72",e="#10152C")=>{let n=i.createLinearGradient(0,0,0,1110);n.addColorStop(0,t),n.addColorStop(1,e),i.fillStyle=n,i.fillRect(0,0,540,1110)},Yu={bloqueio(i,t="07:12",e=84){ku(i),i.fillStyle="#fff",i.textAlign="center",i.font="700 120px Inter",i.fillText(t,270,260),i.font="600 34px Inter",i.fillStyle="#C8D0E8",i.fillText("segunda-feira",270,320),i.font="600 30px Inter",i.fillStyle="#8E9AC0",i.fillText("Nenhuma notifica\xE7\xE3o",270,620),i.fillStyle="#fff",i.font="700 26px Inter",i.textAlign="right",i.fillText(e+"%",500,50),i.strokeStyle="#fff",i.lineWidth=3,i.strokeRect(420,30,30,16),i.fillRect(422,32,26*e/100,12)},grupo(i,t=0){i.fillStyle="#ECE5DD",i.fillRect(0,0,540,1110),i.fillStyle="#1F7C72",i.fillRect(0,0,540,150),i.fillStyle="#fff",i.font="800 40px Inter",i.textAlign="left",i.fillText("Fam\xEDlia \u2764",120,92),i.font="600 24px Inter",i.fillText("ningu\xE9m online",120,128),i.beginPath(),i.arc(70,85,34,0,7),i.fillStyle="#F2C14E",i.fill(),[["Tia Cida","Bom dia! \u{1F33B}","#fff"],["M\xE3e","Vai almo\xE7ar aqui domingo?","#fff"],["Voc\xEA","vou sim","#DCF8C6"]].forEach(([n,s,r],o)=>{let a=220+o*150,l=n==="Voc\xEA";i.fillStyle=r,i.beginPath(),i.roundRect(l?180:30,a,330,120,18),i.fill(),i.fillStyle="#1F7C72",i.font="700 24px Inter",i.fillText(n,l?200:50,a+38),i.fillStyle="#20202A",i.font="600 30px Inter",i.fillText(s,l?200:50,a+86)}),i.fillStyle="#C9C2B6",i.beginPath(),i.roundRect(150,700,240,50,25),i.fill(),i.fillStyle="#555",i.font="600 24px Inter",i.textAlign="center",i.fillText("HOJE",270,733),i.fillStyle="#8A8478",i.font="600 28px Inter",i.fillText("...sil\xEAncio...",270,860)},bateria(i,t){i.fillStyle="#0B0B10",i.fillRect(0,0,540,1110),i.strokeStyle=t<.2?"#E9483A":"#fff",i.lineWidth=12,i.strokeRect(150,380,220,380),i.fillStyle=i.strokeStyle,i.fillRect(220,350,80,30),i.fillRect(166,396+348*(1-t),188,348*t),i.fillStyle="#fff",i.font="800 60px Inter",i.textAlign="center",i.fillText(Math.round(t*100)+"%",270,880)},galeria(i){i.fillStyle="#0E0E14",i.fillRect(0,0,540,1110),i.fillStyle="#fff",i.font="800 40px Inter",i.textAlign="left",i.fillText("Galeria",30,80);let t=Qt(3);for(let e=0;e<9;e++){let n=20+e%3*170,s=120+Math.floor(e/3)*170;i.fillStyle=["#F2C14E","#36AEA2","#D2728A","#4A86C7","#E9483A","#8EAE86"][Math.floor(t()*6)],i.fillRect(n,s,160,160)}i.fillStyle="#fff",i.fillRect(30,660,480,400),i.fillStyle="#20202A",i.font="900 46px Inter",i.fillText("BOLETO",60,730),i.font="600 26px Inter",i.fillText("Vencimento: 10/11",60,790),i.fillText("Valor: R$ 289,90",60,840);for(let e=0;e<40;e++)i.fillRect(60+e*10,900,e%3?4:7,110);i.fillStyle="#E9483A",i.font="800 24px Inter",i.fillText("\xDALTIMA FOTO",60,1050)},notifs(i,t){ku(i,"#3A4A88","#141A34"),i.fillStyle="#fff",i.textAlign="center",i.font="700 110px Inter",i.fillText("07:12",270,200);let e=[["Fam\xEDlia \u2764","Bom dia!! \u{1F33B}\u{1F33B}","#F2C14E"],["Chefe","Reuni\xE3o \xE0s 9h","#C9361F"],["Banco","Seu boleto vence hoje","#4A86C7"],["Tia Cida","[foto de flor]","#F2C14E"],["M\xE3e","acordou?","#D2728A"],["Grupo do trampo","47 mensagens","#36AEA2"]];for(let n=0;n<Math.min(t,e.length);n++)i.save(),i.translate(26,270+n*136),i.fillStyle="rgba(245,247,250,.96)",i.beginPath(),i.roundRect(0,0,488,118,24),i.fill(),i.fillStyle=e[n][2],i.beginPath(),i.roundRect(16,20,74,74,18),i.fill(),i.fillStyle="#1A1A24",i.textAlign="left",i.font="800 30px Inter",i.fillText(e[n][0],108,50),i.font="600 28px Inter",i.fillStyle="#3a3a48",i.fillText(e[n][1],108,92),i.restore()}};function Zu(i,t={}){let e=!!t.night,n=t.overgrown??0;t.noSky||(In(i,-170,600,300,e?[[0,"#0E1030"],[.55,"#2A2252"],[.85,"#6B3A62"],[1,"#B05A5E"]]:t.skyStops||[[0,"#6FA7D8"],[.55,"#BFD8EE"],[.85,"#F8DDB8"],[1,"#FFE9C8"]]),xc(i,-150,500,160,e?["#2F2748","#3B2F54","#4A3A5E"]:["#A8B4C8","#9AA8BE","#8E9CB4"],e,6)),Bu(i,e);let s=t.shops||[{name:"PADARIA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARM\xC1CIA",bg:"#2E7A5E",fg:"#F4FFF6"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIVROS",bg:"#3A4F7A",fg:"#FFF0C8",awning:"#E9B44C"},{name:"PIZZARIA",bg:"#8E2A22",fg:"#FFE7B8",awning:"#F4EEDF"}],r=8,o=0;for(;r>-110;){let h=7+o*37%5;i.add(Tc(100+o+(t.seed||0),{x:13,z:r-h/2,w:8,d:h,floors:4+o%3,side:-1,night:e,lit:t.lit??.4,shop:s[o%s.length]})),i.add(Tc(200+o+(t.seed||0),{x:-13,z:r-h/2,w:8,d:h,floors:5+o%3,side:1,night:e,lit:t.lit??.4,shop:s[(o+2)%s.length]})),r-=h,o++}let a=n>.5?["#2E4F2C","#3B6636","#55813F","#A9B65A"]:void 0;for(let h=0;h<9;h++)Ac(i,5,4-h*12,-1,e&&(t.lampsOn??!0),5),Ac(i,-5,-2-h*12,1,e&&(t.lampsOn??!0),5),es(i,5.6,-2-h*12,1.05+n*1.2,a,h),es(i,-5.6,-8-h*12,1.05+n*1.2,a,h+3);let l=[],c=[];if(t.cars!==!1&&[[-2.6,-6,"#27425A",1],[2.6,-14,"#8A2F2F",-1],[-2.6,-24,"#D7D7D2",1],[2.6,-33,"#3E7A5C",-1],[-2.6,-45,"#E9B44C",1]].forEach(([h,u,d,f])=>c.push(Ou(i,h,u,d,f,e))),n>0){let h=Mt(256,128,f=>{f.clearRect(0,0,256,128);for(let g=0;g<40;g++){f.strokeStyle=["#4F7A36","#6E9A50","#3E6A2C"][g%3],f.lineWidth=5,f.beginPath();let y=10+g*6;f.moveTo(y,128),f.quadraticCurveTo(y+(g%5-2)*6,70,y+(g%7-3)*8,20+g%4*18),f.stroke()}}),u=Qt(8),d=Math.floor(n*160);for(let f=0;f<d;f++){let g=pe(h,1.2+u()*1.4*n,.6+u()*.8*n);g.position.set((u()-.5)*18,.3+n*.2,4-u()*70),g.rotation.y=u()*3,i.add(g),l.push(g)}}return qe(i,{night:e,pos:e?[-14,26,10]:[-20,22,14],ki:e?1:3,r:40}),{cars:c,mato:l}}var L2={outfit:"camisa",glow:.12},De=(i,t,e,n=0,s=1,r={})=>{let o=Mr({...L2,...r});return o.place(t,e,n,s),i.add(o.root),o.tint("#CFCBC4"),o},Gs=(i,t,e,n=0)=>De(i,t,e,n,1,{hair:"old"}),Sn=(i,t,e,n=0)=>De(i,t,e,n,.62),ne=(i,t,e,n,s,r,o=0,a=1)=>{let l=Mr({outfit:t,hair:e,hairc:n,lash:!!e&&t!=="padre"&&t!=="inquisidor"});return l.place(s,r,o,a),i.add(l.root),l},qu=["#F2EBDD","#EFD9B4","#E8C9A8","#F4E4C8","#E6D2C0","#F0DCCC","#DCC8A8"],$u=["#2E6A5A","#2A4E7A","#7A3A2A","#5A4A3A","#3E6A3A"],U2=()=>{let i=Mt(256,256,t=>{t.fillStyle="#A8482E",t.fillRect(0,0,256,256);for(let e=0;e<16;e++)for(let n=0;n<9;n++)t.fillStyle=(e+n)%3?"#B8583A":"#984028",t.beginPath(),t.ellipse(n*32+e%2*16,e*16+8,15,9,0,0,Math.PI),t.fill()});return i.wrapS=i.wrapT=Ve,i},Rc=null;function Vn(i,t=6,e=2,n={}){let s=Qt(i),r=new Nt,o=e*2.8+.4,a=n.col||qu[Math.floor(s()*qu.length)],l=$u[Math.floor(s()*$u.length)],c=Mt(256,256,m=>{m.fillStyle=a,m.fillRect(0,0,256,256);for(let p=0;p<600;p++)m.fillStyle=`rgba(${s()<.5?"255,250,240":"90,70,50"},${s()*.06})`,m.fillRect(s()*256,s()*256,6+s()*20,4+s()*12);m.fillStyle="rgba(80,60,40,.12)",m.fillRect(0,230,256,26)});c.wrapS=c.wrapT=Ve,c.repeat.set(t/3,o/3);let h=new Z(new sn(t,o,5),new Lt({map:c,roughness:.95}));h.position.y=o/2,h.castShadow=h.receiveShadow=!0,r.add(h),Rc||(Rc=U2());let u=new Lt({map:Rc,roughness:.9});for(let m of[-1,1]){let p=N(t+.5,.16,3.1,u,0,o+.62,m*1.32);p.rotation.x=m*.45,r.add(p)}r.add(N(t+.5,.2,.3,"#8E3A22",0,o+1.28,0)),r.add(N(t+.3,.18,5.3,"#C8B8A0",0,o,0));let d=n.night?.55:0,f=Math.max(1,Math.floor(t/2));for(let m=0;m<e;m++)for(let p=0;p<f;p++){let E=-t/2+(p+.5)*t/f,M=m*2.8+1.5;if(m===0&&p===Math.floor(f/2))continue;let v=new Z(new Ft(.8,1.2),new Lt({color:"#1A1612",emissive:"#FFB860",emissiveIntensity:s()<.5?d:d*.2}));v.position.set(E,M,2.51),r.add(v),r.add(N(1,.1,.2,"#D8C8B0",E,M-.65,2.55)),r.add(N(1,.1,.12,"#D8C8B0",E,M+.65,2.53));for(let I of[-1,1]){let R=N(.42,1.2,.05,G(l),E+I*.64,M,2.56);R.rotation.y=I*.25,r.add(R)}if(m>0&&s()<.4){r.add(N(1.3,.08,.5,"#3A2E26",E,M-.7,2.75));for(let I=0;I<6;I++)r.add(N(.03,.5,.03,"#2A2420",E-.6+I*.24,M-.45,2.98,!1))}s()<.4&&(r.add(N(.5,.18,.2,"#B8583A",E,M-.58,2.7)),r.add(N(.45,.16,.15,s()<.5?"#4E8A3E":"#C9363A",E,M-.44,2.7)))}let g=Mt(128,256,m=>{m.fillStyle="#5A3A22",m.fillRect(0,0,128,256),m.strokeStyle="#3A2414",m.lineWidth=4;for(let p=16;p<128;p+=22)m.beginPath(),m.moveTo(p,0),m.lineTo(p,256),m.stroke();m.fillStyle="#C9A04A",m.beginPath(),m.arc(96,140,6,0,7),m.fill()}),y=new Z(new Ft(1.1,2.2),new Lt({map:g}));return y.position.set(0,1.1,2.52),r.add(y),r.add(new Z(new gn(.62,.1,6,16,Math.PI),G("#D8C8B0"))).position.set(0,2.2,2.55),n.cruz&&(y.material=new Lt({map:Mt(128,256,m=>{m.fillStyle="#5A3A22",m.fillRect(0,0,128,256),m.strokeStyle="#C91E1E",m.lineWidth=16,m.beginPath(),m.moveTo(64,50),m.lineTo(64,190),m.moveTo(24,100),m.lineTo(104,100),m.stroke()})})),r.userData={H:o,w:t},r}function ns(i,t=60,e=120,n=-40,s="#B8AC98"){let r=Mt(1024,1024,a=>{a.fillStyle="#6E6458",a.fillRect(0,0,1024,1024);let l=Qt(3);for(let c=0;c<32;c++)for(let h=0;h<33;h++){let u=l();a.fillStyle=s,a.globalAlpha=.65+u*.35,a.beginPath(),a.roundRect(h*32+c%2*16-16+2,c*32+2,28,28,7),a.fill()}a.globalAlpha=1});r.wrapS=r.wrapT=Ve,r.repeat.set(t/4,e/4);let o=new Z(new Ft(t,e),new Lt({map:r,roughness:.95}));return o.rotation.x=-Math.PI/2,o.position.z=n,o.receiveShadow=!0,i.add(o),o}function Gn(i,t={}){let e=!!t.noite;In(i,-220,900,360,e?[[0,"#0A0C24"],[.6,"#22204A"],[.9,"#4A3A5A"],[1,"#6A4A5A"]]:t.stops||[[0,"#5E9AD8"],[.55,"#A8CCE8"],[.85,"#F4DCC0"],[1,"#FCE8C8"]]);let n=Mt(2048,700,r=>{r.clearRect(0,0,2048,700);let o=Qt(t.seed||5);r.fillStyle=e?"#2A2840":"#A8A090",r.beginPath(),r.moveTo(0,700);for(let c=0;c<=2048;c+=32)r.lineTo(c,300-Math.sin(c/2048*Math.PI)*200+Math.sin(c*.01)*20);r.lineTo(2048,700),r.fill();for(let c=0;c<380;c++){let h=o()*2048,u=300-Math.sin(h/2048*Math.PI)*200+20,d=u+o()*(700-u),f=14+o()*22,g=10+o()*14;r.fillStyle=e?o()<.25?"#F2C878":"#3A3858":["#F4EEE2","#EAD8B8","#F0E4D0","#E8D0C0"][Math.floor(o()*4)],r.fillRect(h,d,f,g),e||(r.fillStyle="#B85A3A",r.fillRect(h-2,d-4,f+4,5))}r.fillStyle=e?"#34324C":"#C8BCA8";let a=1100,l=110;r.fillRect(a-160,l,320,60);for(let c=0;c<9;c++)r.fillRect(a-160+c*40,l-16,22,18);for(let c of[-170,170]){r.fillRect(a+c-24,l-50,48,110);for(let h=0;h<3;h++)r.fillRect(a+c-24+h*18,l-64,12,16)}}),s=new Z(new Ft(t.w||520,(t.w||520)*700/2048),new ue({map:n,transparent:!0,depthWrite:!1,fog:!1}));return s.position.set(t.x||0,(t.y??-6)+(t.w||520)*350/2048,t.z||-170),i.add(s),s}function Ws(i,t=400,e=300,n=-150,s=0){let r=Mt(512,512,a=>{a.fillStyle="#3A6E8A",a.fillRect(0,0,512,512);let l=Qt(3);a.strokeStyle="#ffffff30",a.lineWidth=3;for(let c=0;c<220;c++){let h=l()*512,u=l()*512;a.beginPath(),a.moveTo(h,u),a.quadraticCurveTo(h+10,u-4,h+20,u),a.stroke()}});r.wrapS=r.wrapT=Ve,r.repeat.set(t/16,e/16);let o=new Z(new Ft(t,e),new Lt({map:r,roughness:.15,metalness:.15}));return o.rotation.x=-Math.PI/2,o.position.set(0,s,n),i.add(o),r}var N2=()=>Mt(256,256,i=>{i.fillStyle="#F2EAD8",i.fillRect(0,0,256,256),i.strokeStyle="#D8CCB0",i.lineWidth=3;for(let t=0;t<256;t+=32)i.beginPath(),i.moveTo(t,0),i.lineTo(t,256),i.stroke();i.fillStyle="#C21A1A",i.fillRect(108,50,40,156),i.fillRect(50,108,156,40),i.fillStyle="#F2EAD8",i.fillRect(122,64,12,128),i.fillRect(64,122,128,12)}),Cc=null;function Xs(i=1){let t=new Nt;Cc||(Cc=N2());let e=G("#5A3A22"),n=G("#7A5232"),s=new mr;s.moveTo(-6,1.2),s.lineTo(-7.2,3),s.lineTo(-4,2.2),s.lineTo(3,2.2),s.lineTo(4.2,4.2),s.lineTo(6.6,4.4),s.lineTo(6.2,1),s.quadraticCurveTo(4,-1,0,-1.2),s.quadraticCurveTo(-4,-1,-6,1.2);let r=new Z(new Lo(s,{depth:3,bevelEnabled:!0,bevelSize:.3,bevelThickness:.4,bevelSegments:2}),e);r.position.z=-1.5,r.castShadow=!0,t.add(r),t.add(N(13,.12,3.2,n,-.4,2.25,0)),t.add(N(3,.4,3.6,G("#C9A04A"),5.2,4.3,0));let o=new Lt({map:Cc,side:he,roughness:.9});return[[-3.6,9,3.2],[.6,11,4.2],[4.4,7,2.6]].forEach(([a,l,c])=>{let h=new Z(new Ee(.12,.16,l,8),e);h.position.set(a,2.2+l/2,0),t.add(h);for(let[d,f]of[[2.2+l*.45,1],[2.2+l*.8,.7]]){let g=new Z(new Ft(c*f,c*f*.9,6,4),o),y=g.geometry.attributes.position;for(let m=0;m<y.count;m++)y.setZ(m,Math.cos(y.getX(m)/(c*f)*Math.PI)*.5*f);g.geometry.computeVertexNormals(),g.position.set(a,d,.3),g.rotation.y=Math.PI/2,g.castShadow=!0,t.add(g),t.add(N(.08,.08,c*f+.4,e,a,d+c*f*.45,0,!1))}let u=new Z(new Ft(.8,.4),G("#C21A1A",{side:he}));u.position.set(a+.4,2.3+l,0),t.add(u)}),t.add(N(.08,.08,6,e,-6.8,3.4,0,!1)).rotation.z=.4,t.scale.setScalar(i),t}function Ne(i,t={}){let s=Mt(512,512,y=>{y.fillStyle="#8A7A68",y.fillRect(0,0,512,512);let m=Qt(2);for(let p=0;p<12;p++)for(let E=0;E<9;E++)y.fillStyle=`rgb(${120+m()*40},${105+m()*35},${90+m()*30})`,y.beginPath(),y.roundRect(E*60+p%2*30-30,p*44,56,40,8),y.fill()});s.wrapS=s.wrapT=Ve,s.repeat.set(4,3);let r=new Z(new Ft(20,16),new Lt({map:s,roughness:1}));r.rotation.x=-Math.PI/2,r.position.z=2,r.receiveShadow=!0,i.add(r);let o=Mt(512,512,y=>{y.fillStyle=t.parede||"#D8C8A8",y.fillRect(0,0,512,512);let m=Qt(5);for(let p=0;p<500;p++)y.fillStyle=`rgba(${m()<.5?"255,245,230":"90,70,50"},${m()*.08})`,y.fillRect(m()*512,m()*512,10+m()*40,6+m()*20)});o.wrapS=o.wrapT=Ve,o.repeat.set(3,1.2);let a=new Lt({map:o,roughness:1});i.add(N(24,5,.3,a,0,2.5,-4)),i.add(N(.3,5,16,a,-6.5,2.5,2)),i.add(N(.3,5,16,a,6.5,2.5,2));for(let y=-5;y<=5;y+=1.6)i.add(N(.25,.3,16,"#4A3220",y,4.6,2));i.add(N(24,.35,.35,"#4A3220",0,4.4,-4+.2));let l=new Nt;l.add(N(2.6,2.2,.8,G("#7A6A58"),0,1.1,0)),l.add(N(1.8,1.4,.82,G("#1A1410"),0,.7,.02)),l.add(N(3,.25,1,G("#6A5A48"),0,2.3,.1)),l.add(N(1.2,2.6,.7,G("#7A6A58"),0,3.6,-.05));let c=new Z(new Ze(.38,18,12,0,6.3,1.2,1.94),G("#2A2A2E",{metalness:.6,roughness:.5}));c.position.set(0,.7,.25),l.add(c),l.position.set(t.lareiraX??-3.4,0,-4+.45),i.add(l);let h=[];for(let y=0;y<4;y++){let m=Fe(y%2?"#FF8A30":"#FFC860",.6+y*.1,.9);m.position.set(l.position.x-.3+y*.2,.35,l.position.z+.3),i.add(m),h.push(m)}let u=new yn("#FF9A4A",16,10,1.4);u.position.set(l.position.x,1,l.position.z+1.2),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),i.add(u);let d=kn(i,10,[l.position.x,1.1,l.position.z+.3],{col:"#FFFFFF",size:.7,rise:1.6,spread:.2,seed:4,life:2.4});i.add(N(2.4,.1,1.1,G("#7A5232"),1.6,.85,-2.4));for(let[y,m]of[[.5,-2.85],[2.7,-2.85],[.5,-1.95],[2.7,-1.95]])i.add(N(.1,.82,.1,"#4A3220",y,.41,m));for(let y of[.8,2.4])i.add(N(.45,.45,.45,G("#6A4A2E"),y,.23,-1.4));[["#B8683A",.8,-2.5,.18],["#D8C8A8",1.4,-2.3,.12],["#8A5A3A",2.2,-2.6,.22]].forEach(([y,m,p,E])=>{let M=new Z(new Ee(E*.8,E,E*2,14),G(y));M.position.set(m,.9+E,p),M.castShadow=!0,i.add(M)});let f=new Z(new Zi(.1,.25,4,10),G("#C8904A"));f.rotation.z=Math.PI/2,f.position.set(1.8,.98,-2.2),i.add(f),i.add(N(.06,.5,.04,"#4A3220",1.6,2.8,-4+.18)),i.add(N(.3,.06,.04,"#4A3220",1.6,2.9,-4+.18));for(let y=0;y<5;y++){let m=pe(Mt(64,128,p=>{p.clearRect(0,0,64,128),p.strokeStyle="#6A7A3A",p.lineWidth=4;for(let E=0;E<8;E++)p.beginPath(),p.moveTo(32,0),p.lineTo(16+E*4,120),p.stroke()}),.3,.6);m.position.set(-1+y*.5,3.9,-4+.4),i.add(m)}let g=new Z(new Ft(1,1.2),new ue({color:t.noite?"#2A3058":"#F8E8C8"}));g.position.set(4.2,2.6,-4+.16),i.add(g),i.add(N(1.2,.1,.3,"#5A3A22",4.2,1.95,-4+.2));for(let y of[-1,1])i.add(N(.08,1.3,.2,"#5A3A22",4.2+y*.55,2.6,-4+.2));return t.noite||Ii(i,3.6,2,-2,1.2,4.2,.45,"#FFE2B0",.12),i.add(new We("#C8A880","#2A1A10",t.noite?.35:.65)),{fogo:h,fl:u,vapor:d,cald:c,L:l,upd(y){h.forEach((m,p)=>{let E=.85+Math.sin(y*15+p*2)*.1+Math.sin(y*27+p)*.05;m.scale.setScalar((.6+p*.1)*E)}),u.intensity=16*(.88+Math.sin(y*13)*.08),d(y)}}}function li(i,t,e,n,s=1){let r=new Nt,o=pe(Mt(256,320,u=>{u.fillStyle="#E2D6C0",u.beginPath(),u.ellipse(128,200,100,118,0,0,7),u.fill(),u.strokeStyle="#D8CCB4",u.lineWidth=6;for(let d=0;d<4;d++)u.beginPath(),u.moveTo(40,140+d*40),u.quadraticCurveTo(128,170+d*40,216,130+d*40),u.stroke();u.fillStyle="#D8C8AC",u.beginPath(),u.ellipse(128,96,108,74,0,Math.PI,0),u.fill()}),.5,.62);o.material.color.set("#BDB2A2"),o.position.y=.1,r.add(o);let a=pe(Mt(256,256,u=>{let d=u.createRadialGradient(110,90,4,128,128,110);d.addColorStop(0,"#2C2E44"),d.addColorStop(1,"#08080E"),u.fillStyle=d,u.beginPath(),u.arc(128,128,110,0,7),u.fill(),u.strokeStyle="#FFE9C8",u.lineWidth=6,u.beginPath(),u.arc(128,128,110,0,7),u.stroke()}),.3,.3);a.position.set(0,.3,.01),r.add(a);let l={},c=u=>Mt(256,256,d=>{d.clearRect(0,0,256,256),d.fillStyle="#F6EFE6",d.strokeStyle="#F6EFE6",d.lineWidth=12,d.lineCap="round";for(let f of[-1,1]){let g=128+f*40;u==="open"?(d.beginPath(),d.ellipse(g,128,16,24,0,0,7),d.fill()):u==="wide"?(d.beginPath(),d.ellipse(g,124,22,32,0,0,7),d.fill()):u==="cry"?(d.beginPath(),d.moveTo(g-20,120),d.quadraticCurveTo(g,140,g+20,120),d.stroke(),d.fillStyle="#9FD8FF",d.beginPath(),d.ellipse(g+f*6,160,8,14,0,0,7),d.fill(),d.fillStyle="#F6EFE6"):u==="flat"?(d.beginPath(),d.moveTo(g-20,128),d.lineTo(g+20,128),d.stroke()):u==="happy"&&(d.beginPath(),d.moveTo(g-20,136),d.quadraticCurveTo(g,108,g+20,136),d.stroke())}u==="cry"&&(d.beginPath(),d.ellipse(128,190,22,16,0,0,7),d.fillStyle="#F6EFE6",d.fill())});for(let u of["open","wide","cry","flat","happy"]){let d=pe(c(u),.3,.3);d.position.set(0,.3,.02),d.visible=u==="open",r.add(d),l[u]=d}let h=pe(Mt(64,96,u=>{u.fillStyle="#1C1C25",u.beginPath(),u.ellipse(32,30,20,24,0,0,7),u.fill(),u.fillRect(22,40,20,56),u.strokeStyle="#FFE9C8",u.lineWidth=3,u.beginPath(),u.ellipse(32,30,20,24,0,0,7),u.stroke()}),.1,.15);return h.position.set(.14,.2,.02),h.visible=!1,r.add(h),r.position.set(t,e,n),r.scale.setScalar(s),i.add(r),r.olhos=u=>{for(let d in l)l[d].visible=d===u},r.mao=h,r.cab=a,r.ests=l,r.face=u=>Ue(r,u),r}function qo(i){let t=pe(Mt(256,128,e=>{e.clearRect(0,0,256,128),e.strokeStyle="#F6EFE6",e.lineWidth=12,e.lineCap="round",e.beginPath(),e.moveTo(50,40),e.quadraticCurveTo(128,120,206,40),e.stroke(),e.fillStyle="#F6EFE6",e.fillRect(140,62,18,26)}),.3,.15);return t.position.set(0,-.13,.03),i.head.add(t),t}var B2=()=>Mt(256,160,i=>{i.lineCap="round",i.strokeStyle="#8A7A7A",i.lineWidth=6,i.beginPath(),i.moveTo(40,110),i.quadraticCurveTo(0,130,10,60),i.stroke(),i.fillStyle="#6E6466",i.beginPath(),i.ellipse(110,110,70,40,0,0,7),i.fill(),i.fillStyle="#121218",i.beginPath(),i.ellipse(190,96,44,34,0,0,7),i.fill(),i.beginPath(),i.arc(178,62,18,0,7),i.fill(),i.fillStyle="#E8A0A8",i.beginPath(),i.arc(178,62,9,0,7),i.fill(),i.beginPath(),i.arc(232,104,7,0,7),i.fill(),i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(200,90,7,10,0,0,7),i.fill(),i.strokeStyle="#ddd",i.lineWidth=2;for(let t of[-8,0,8])i.beginPath(),i.moveTo(228,104),i.lineTo(252,100+t),i.stroke();i.fillStyle="#2A1A10";for(let t=0;t<9;t++)i.beginPath(),i.arc(80+t*37%80,86+t*23%40,3,0,7),i.fill()});function Pc(i,t,e,n=.5){let s=pe(B2(),n,n*.625,{shadow:!0});return s.position.set(t,n*.31,e),i.add(s),s}function ci(i,t,e,n){let s=document.createElement("canvas");s.width=1024,s.height=Math.round(1024*e/t);let r=s.getContext("2d"),o=new Ke(s);o.colorSpace=ye;let a=new Z(new Ft(t,e),new Lt({map:o,roughness:.9}));i.add(a);let l=-1;return a.paint=c=>{let h=Math.round(c*60);if(h===l)return;l=h;let u=r.createRadialGradient(s.width/2,s.height/2,50,s.width/2,s.height/2,s.width*.7);u.addColorStop(0,"#F2E2B8"),u.addColorStop(1,"#C8A86A"),r.fillStyle=u,r.fillRect(0,0,s.width,s.height),n(r,c,s.width,s.height),o.needsUpdate=!0},a}function Be(i,t,e,n,s=1){i.add(N(.06*s,.25*s,.06*s,"#F4EEDC",t,e+.125*s,n,!1));let r=Fe("#FFC67A",.35*s,1);r.position.set(t,e+.3*s,n),i.add(r);let o=new yn("#FFB060",2.5*s,4*s,1.6);return o.position.set(t,e+.4*s,n),i.add(o),{f:r,L:o,upd(a){let l=.9+Math.sin(a*19+t*7)*.08;r.scale.setScalar(.35*s*l),o.intensity=2.5*s*l}}}function Ic(i,t={}){let e=Ne(i,{lareiraX:3.6,noite:!0,parede:"#C8B494"}),n=new Nt;n.add(N(2.2,.4,1.6,G("#6A4A2E"),0,.2,0)),n.add(N(2.1,.2,1.5,G("#E8DCC0"),0,.5,0)),n.add(N(2.1,.08,1.2,G("#B8483A"),0,.62,.1)),n.add(N(.6,.16,.9,G("#F4EEDC"),-.75,.66,0)),n.position.set(-1.6,0,-2.6),i.add(n);let s=[Be(i,-3,.9,-3.2),Be(i,.2,.9,-2.4),Be(i,1.6,.9,-2.4)];i.add(N(.5,.9,.5,G("#5A3A22"),-3,.45,-3.2));let r=new Z(new Ee(.35,.25,.2,20),G("#B8683A"));r.position.set(-.2,.1,-1.4),i.add(r);let o=new Z(new an(.3,20),G("#9A2A2A",{roughness:.2}));return o.rotation.x=-Math.PI/2,o.position.set(-.2,.19,-1.4),i.add(o),{I:e,vs:s,upd(a){e.upd(a),s.forEach(l=>l.upd(a))}}}function Ju(i,t){return Bt(i,t,{bg:"#1A0808",fog:["#2A1010",.03],fov:34},e=>{let n=Ic(e),s=ne(e,"parteira","bun","#C8C8C8",-.4,-1.6);s.tint("#FFD8C0");let r=[];for(let o of[-1,1]){let a=new Z(new Ft(4,1.2),new ue({color:"#000",fog:!1,depthTest:!1}));a.renderOrder=99,r.push([a,o]),e.add(a)}return(o,a,l)=>{n.upd(a),Ot(l,[[0,[-.4,1.5,.6]],[3.74,[-.4,1.55,.3]]],[[0,[-.4,1.4,-1.6]],[3.74,[-.4,1.5,-1.6]]],a,Math.sin(a*2)*.04),s.face(l),s.eye("open"),s.pose({armL:[40,-60],armR:[40,-60],head:Math.sin(a*2)*4});let c=At(.3,2.6,a)+Math.sin(a*3)*.04*(1-At(2,3,a));return r.forEach(([h,u])=>{let f=new C;l.getWorldDirection(f),h.position.copy(l.position).addScaledVector(f,.5),h.quaternion.copy(l.quaternion),h.translateY(u*Gt(.6,.82,c))}),{focus:Gt(.3,2.1,At(.4,3,a)),range:Gt(.3,1.5,At(.4,3,a)),blur:Gt(30,12,At(.4,3,a)),bloom:.5,bloomT:.7,vig:.7,tint:a<2.2?"#FF6050":"#FFC8B0",sat:1.2,exposure:Gt(.6,1,At(0,2,a))}}})}function Qu(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.03],fov:32},e=>{let n=Ic(e),s=ne(e,"parteira","bun","#C8C8C8",-.4,-1.6);s.tint("#FFE0C8"),qo(s);let r=li(e,-.4,1.05,-1.35,1),o=ne(e,"mae","long","#3A2418",-1.7,-2.4,.25);return o.tint("#F0D0C0"),(a,l,c)=>(n.upd(l),Ot(c,[[0,[-.4,1.62,.25]],[3.3,[-.35,1.6,.2]],[6.4,[.6,1.6,1.8]]],[[0,[-.4,1.52,-1.6]],[3.3,[-.4,1.52,-1.6]],[6.4,[-.6,1.2,-1.8]]],l),s.face(c),s.eye(l<3.2?"happy":"smug"),s.pose({armL:[30,-80],armR:[30,-80],head:Math.sin(l*3)*5}),r.face(c),r.olhos(l<3.3?"wide":"cry"),r.position.y=1.05+Math.sin(l*12)*.006,o.face(c),o.eye("shut"),o.pose({armL:[10,6],armR:[10,6],head:-8}),{focus:c.position.distanceTo(s.root.position)-.2,range:1.4,blur:14,bloom:.45,bloomT:.78,vig:.6,tint:"#FFE4D0"})})}function Ku(i,t){return Bt(i,t,{bg:"#A8CCE8",fog:["#C8DCE8",.004],fov:36,far:900},e=>{Gn(e,{z:-260,w:700,y:-4});let n=Ws(e,600,260,-140,0),s=[];for(let o=0;o<13;o++){let a=Xs(.7+o%3*.1);a.position.set(-40+o*7+o%2*3,0,-90-o%4*14),a.rotation.y=-.2,e.add(a),s.push(a)}let r=new Z(new Ft(400,60),G("#B8A888"));r.rotation.x=-Math.PI/2,r.position.set(0,.3,-2),e.add(r);for(let o=0;o<14;o++){let a=Vn(40+o,5+o%3,2+o%2);a.position.set(-36+o*5.6,.3,-14-o%2*2),a.rotation.y=Math.PI,e.add(a)}return qe(e,{ki:3,key:"#FFE2B8",pos:[-40,40,30],r:100,hemi:1.1}),(o,a,l)=>(n.offset.x=a*.03,s.forEach((c,h)=>{c.position.y=Math.sin(a*1.4+h)*.12,c.rotation.z=Math.sin(a*1.1+h)*.02}),Ot(l,[[0,[-6,14,30]],[2.7,[2,12,22]]],[[0,[0,4,-100]],[2.7,[4,3,-100]]],a),{focus:90,range:120,blur:4,bloom:.2,bloomT:1,vig:.38})})}function ju(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.03],fov:32},e=>{let n=Ic(e),s=ne(e,"mae","long","#3A2418",-1.1,-1.8);s.tint("#FFE0C8");let r=li(e,-1,1.15,-1.55,1.1);return(o,a,l)=>(n.upd(a),Ot(l,[[0,[-1,1.25,.2]],[7,[-.8,1.4,1.2]]],[[0,[-1,1.2,-1.6]],[7,[-1,1.35,-1.8]]],a),s.face(l),s.eye(a<3.2?"happy":"look"),s.pose({armL:[30,-100],armR:[30,-100],head:Math.sin(a*1.5)*5}),r.position.y=1.15+Math.sin(a*3)*.02,r.rotation.z=Math.sin(a*3)*.05,r.face(l),r.olhos(a<3.4?"cry":a<5?"wide":"open"),{focus:l.position.distanceTo(r.position),range:1.2,blur:14,bloom:.45,bloomT:.78,vig:.6,tint:"#FFE4D0"})})}var O2={celular:i=>{i.fillStyle="#15151C",i.beginPath(),i.roundRect(46,14,68,132,12),i.fill(),i.fillStyle="#4A86C7",i.fillRect(52,26,56,104),i.fillStyle="#F2C14E",i.fillRect(58,36,18,18),i.fillStyle="#36AEA2",i.fillRect(82,36,18,18),i.fillStyle="#E9483A",i.fillRect(58,60,18,18)},internet:i=>{i.strokeStyle="#8FF0E0",i.lineWidth=10,i.lineCap="round";for(let t of[20,40,60])i.beginPath(),i.arc(80,120,t,-2.4,-.75),i.stroke();i.fillStyle="#8FF0E0",i.beginPath(),i.arc(80,120,8,0,7),i.fill()},pix:i=>{i.save(),i.translate(80,80),i.rotate(Math.PI/4),i.strokeStyle="#4AD8B8",i.lineWidth=12,i.strokeRect(-34,-34,68,68),i.restore(),i.fillStyle="#4AD8B8",i.beginPath(),i.arc(80,80,10,0,7),i.fill()},vacina:i=>{i.save(),i.translate(80,80),i.rotate(-.7),i.fillStyle="#E8F4FF",i.fillRect(-14,-50,28,80),i.fillStyle="#9FD8FF",i.fillRect(-10,-30,20,50),i.fillStyle="#C8CCD4",i.fillRect(-3,30,6,30),i.fillRect(-20,-56,40,8),i.restore()},microondas:i=>{i.fillStyle="#D8DCE2",i.beginPath(),i.roundRect(14,40,132,84,10),i.fill(),i.fillStyle="#2A2A36",i.fillRect(24,50,84,64),i.fillStyle="#F2C14E",i.fillRect(32,70,30,24),i.fillStyle="#4A4A58";for(let t=0;t<3;t++)i.beginPath(),i.arc(126,62+t*20,6,0,7),i.fill()},lampada:i=>{i.fillStyle="#FFE8A0",i.beginPath(),i.arc(80,66,40,0,7),i.fill(),i.fillStyle="#B8BCC4",i.fillRect(60,102,40,30)},motor:i=>{i.fillStyle="#B8BCC4",i.save(),i.translate(80,80);for(let t=0;t<8;t++)i.rotate(Math.PI/4),i.fillRect(-10,-60,20,24);i.beginPath(),i.arc(0,0,42,0,7),i.fill(),i.fillStyle="#4A4A58",i.beginPath(),i.arc(0,0,14,0,7),i.fill(),i.restore()}};function Ys(i,t=.8){return pe(Mt(160,160,e=>{let n=e.createRadialGradient(80,80,10,80,80,80);n.addColorStop(0,"#2A3A6Acc"),n.addColorStop(1,"#2A3A6A00"),e.fillStyle=n,e.fillRect(0,0,160,160),O2[i](e)}),t,t,{blend:!0,add:!0})}function td(i,t){return Bt(i,t,{bg:"#0A0818",fov:34,far:900},e=>{Pi(e,2500,200,7),Sr(e,0,0,-60,120,"#7E6BFF",3,.25),Sr(e,30,10,-70,100,"#FF6FB0",5,.15);let n=li(e,0,0,0,2.2),s=Fe("#AFC8FF",3,.4);s.position.set(0,.6,-.2),e.add(s);let r=["celular","internet","pix","vacina","microondas"],o=[2.55,3.15,4,4.55,5.2],a=r.map(c=>{let h=Ys(c,.9);return e.add(h),h}),l=pe(Mt(512,512,c=>{c.clearRect(0,0,512,512),c.strokeStyle="#8FF0E088",c.lineWidth=4,c.setLineDash([12,14]),c.beginPath(),c.arc(256,256,240,0,7),c.stroke()}),4.4,4.4,{blend:!0,add:!0});return l.position.set(0,.6,-.1),e.add(l),(c,h,u)=>{Ot(u,[[0,[0,.7,5]],[10.6,[0,.65,3.4]]],[[0,[0,.6,0]],[10.6,[0,.6,0]]],h),n.olhos(h<2.4?"open":h<7?"wide":"flat");let d=h>7.2?Math.sin(h*5)*.25:0;n.cab.rotation.z=d,n.cab.position.x=Math.sin(h*5)*(h>7.2?.05:0);for(let f in n.ests)n.ests[f].rotation.z=d,n.ests[f].position.x=n.cab.position.x;return a.forEach((f,g)=>{let y=At(o[g],o[g]+.3,h);f.visible=y>.02;let m=g/5*6.283+h*.35;f.position.set(Math.cos(m)*2.1,.6+Math.sin(m)*1.4,Math.sin(m)*.3),f.scale.setScalar(y*(1+Math.sin(h*4+g)*.04)),Ue(f,u)}),l.rotation.z=h*.1,l.material.opacity=At(2.5,4,h)*.8,s.material.opacity=.3+Math.sin(h*2)*.1,{focus:u.position.z,range:3,blur:6,bloom:.6,bloomT:.6,vig:.55}}})}function ed(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.03],fov:32},e=>{let n=Ne(e,{lareiraX:-3.4,noite:!0}),s=new Nt;s.add(N(1.2,.5,.7,G("#7A5232"),0,.55,0)),s.add(N(1.1,.1,.6,G("#E8DCC0"),0,.78,0));for(let[a,l]of[[-.55,-.3],[.55,-.3],[-.55,.3],[.55,.3]])s.add(N(.06,.5,.06,"#4A3220",a,.25,l));for(let a of[-1,1]){let l=new Z(new gn(.35,.04,6,16,Math.PI),G("#5A3A22"));l.rotation.y=Math.PI/2,l.position.set(a*.6,.8,0),s.add(l)}s.position.set(.4,0,-1.8),e.add(s);let r=li(e,.4,.95,-1.7,1),o=[Be(e,1.4,.9,-2.6)];return e.add(N(.4,.9,.4,G("#5A3A22"),1.4,.45,-2.6)),(a,l,c)=>{n.upd(l),o.forEach(u=>u.upd(l)),Ot(c,[[0,[.6,1.6,1.4]],[9.7,[.45,1.35,.3]]],[[0,[.4,.95,-1.7]],[9.7,[.4,1.05,-1.7]]],l),r.face(c);let h=At(1.4,1.8,l)*(1-At(6,6.4,l));return r.mao.visible=h>.05,r.mao.position.set(.18,.2+h*.28,.03),r.mao.rotation.z=-.2,r.olhos(l<1.4?"open":l<6.3?"happy":"flat"),{focus:c.position.distanceTo(r.position),range:1.2,blur:13,bloom:.45,bloomT:.8,vig:.55}}})}function nd(i,t){return Bt(i,t,{bg:"#A8CCE8",fog:["#C8DCE8",.006],fov:34,far:900},e=>{Gn(e,{z:-320,w:800,y:-6,seed:9});let n=Ws(e,600,300,-150,-.4),s=new Z(new Ft(200,30),new Lt({color:"#A89878",roughness:1}));s.rotation.x=-Math.PI/2,s.position.set(0,0,10),s.receiveShadow=!0,e.add(s),e.add(N(200,1.2,1,G("#8A7A60"),0,-.4,-5));for(let u=0;u<20;u++)e.add(N(.3,1.2,.3,"#5A3A22",-40+u*4.2,.3,-4.8));let r=[];for(let u=0;u<13;u++){let d=Xs(1);d.position.set(-30+u%5*14+Math.floor(u/5)*6,-.4,-30-Math.floor(u/5)*22-u%2*6),d.rotation.y=-Math.PI/2+.15,e.add(d),r.push(d)}let o=Qt(4),a=[];for(let u=0;u<420;u++){let d=(o()-.5)*50;Math.abs(d)<2.4&&o()<.8||a.push([d,-3.4+o()*5.6,0,Math.PI+(o()-.5)*.4])}Xo(e,a,{raised:.55,jump:.12,seed:5,tint:"#F4E8D8"});let l=ne(e,"mae","long","#3A2418",.6,3.2);l.tint("#FFFFFF");let c=li(e,.62,1.18,3.42,.9),h=[];for(let u=0;u<10;u++){let d=new Z(new Ft(1,.6),G(u%2?"#C21A1A":"#F4EEDC",{side:he}));d.position.set(-20+u*4.4,3,-4),e.add(d),e.add(N(.06,3,.06,"#5A3A22",-20.5+u*4.4,1.5,-4)),h.push(d)}return qe(e,{ki:3.2,key:"#FFE2B8",pos:[-30,40,30],r:80,hemi:1.1}),(u,d,f)=>(n.offset.x=d*.03,r.forEach((g,y)=>{g.position.x+=0,g.position.z=-30-Math.floor(y/5)*22-y%2*6-d*1.2,g.position.y=-.4+Math.sin(d*1.4+y)*.12}),h.forEach((g,y)=>g.rotation.y=Math.sin(d*3+y)*.3),Ot(f,[[0,[3.5,1.8,7.5]],[5,[1.6,2.2,6.2]],[10.4,[-2,6,14]]],[[0,[.6,1.3,3.2]],[5,[.4,1.5,0]],[10.4,[-4,3,-40]]],d),l.face(f),l.eye(d<6?"happy":"look"),l.pose({armL:[30,-100],armR:d>2&&d<5?[140,10]:[30,-100]}),c.face(f),c.olhos(d>6.4?"wide":"open"),{focus:Gt(f.position.distanceTo(l.root.position),40,At(4,8,d)),range:Gt(2,40,At(4,8,d)),blur:10,bloom:.25,bloomT:.95,vig:.38})})}function id(i,t){return Bt(i,t,{bg:"#1A1008",fog:["#2A1A10",.03],fov:30},e=>{e.add(N(6,.1,4,G("#5A3A22"),0,.9,-1.6));let n=ci(e,4.2,2.8,(o,a,l,c)=>{o.strokeStyle="#8A6A3A",o.lineWidth=3;for(let d=0;d<l;d+=64)o.beginPath(),o.moveTo(d,0),o.lineTo(d,c),o.stroke();o.fillStyle="#B89A6A",o.beginPath(),o.moveTo(650,120),o.lineTo(760,110),o.lineTo(800,220),o.lineTo(720,300),o.lineTo(660,260),o.fill(),o.beginPath(),o.moveTo(690,320),o.lineTo(820,360),o.lineTo(870,520),o.lineTo(760,640),o.lineTo(700,520),o.fill(),o.fillStyle="#6A4A2A",o.font="700 44px Caveat",o.fillText("Lisboa",640,205),a>.55&&(o.globalAlpha=At(.55,.8,a),o.fillStyle="#7A9A5A",o.beginPath(),o.moveTo(160,360),o.lineTo(300,340),o.lineTo(360,420),o.lineTo(300,600),o.lineTo(200,640),o.lineTo(150,520),o.fill(),o.fillStyle="#3A2A10",o.font="700 60px Caveat",o.fillText("Brasil",180,500),o.globalAlpha=1),o.strokeStyle="#C21A1A",o.lineWidth=6,o.setLineDash([16,12]),o.beginPath();let h=[[690,230],[600,330],[480,420],[360,440]],u=Math.max(1,Math.floor(a*1.6*h.length));o.moveTo(h[0][0],h[0][1]);for(let d=1;d<Math.min(u,h.length);d++)o.lineTo(h[d][0],h[d][1]);o.stroke(),o.setLineDash([]),o.save(),o.translate(820,560),o.strokeStyle="#6A4A2A",o.lineWidth=3;for(let d=0;d<16;d++)o.rotate(Math.PI/8),o.beginPath(),o.moveTo(0,0),o.lineTo(0,d%2?40:70),o.stroke();o.restore()});n.rotation.x=-Math.PI/2,n.position.set(0,.96,-1.6);let s=Be(e,2.2,.95,-1,1.4),r=Xs(.05);return r.position.set(.6,1,-1.7),e.add(r),e.add(new We("#A88A60","#1A1008",.5)),(o,a,l)=>{s.upd(a),n.paint(At(.2,4.5,a));let c=At(.2,4,a);return r.position.set(Gt(.9,-.75,c),1,Gt(-2,-1.4,c)),Ot(l,[[0,[.2,4.6,1.2]],[6.3,[-.2,4,.6]]],[[0,[0,.96,-1.6]],[6.3,[-.3,.96,-1.5]]],a),{focus:l.position.distanceTo(new C(0,.96,-1.6)),range:2.5,blur:10,bloom:.4,bloomT:.8,vig:.6}}})}function sd(i,t){return Bt(i,t,{bg:"#A8CCE8",fog:["#C8DCE8",.006],fov:32,far:900},e=>{Gn(e,{z:-300,w:800,y:-6,seed:9}),Ws(e,600,300,-150,-.4);let n=new Z(new Ft(200,30),G("#A89878"));n.rotation.x=-Math.PI/2,n.position.set(0,0,10),e.add(n);let s=ne(e,"mae","long","#3A2418",0,0);s.tint("#FFFFFF");let r=li(e,.02,1.18,.22,.9),o=pe(Mt(320,200,a=>{a.fillStyle="#FBF7EC",a.beginPath(),a.roundRect(10,10,300,140,40),a.fill(),a.beginPath(),a.moveTo(110,148),a.lineTo(120,196),a.lineTo(160,148),a.fill(),a.fillStyle="#20202A",a.font="900 84px Fraunces",a.textAlign="center",a.textBaseline="middle",a.fillText("agu",160,84)}),.5,.31);return e.add(o),qe(e,{ki:3,pos:[-30,40,30],r:30}),(a,l,c)=>{Ot(c,[[0,[.4,1.35,3]],[2.9,[.25,1.3,2.5]]],[[0,[0,1.3,.2]],[2.9,[0,1.35,.2]]],l),s.face(c),s.pose({armL:[30,-100],armR:[30,-100]}),s.eye("look"),r.face(c),r.olhos(l<1.4?"wide":l<2.2?"happy":"flat");let h=At(1.9,2.1,l);return o.visible=h>.02,o.scale.setScalar(h),o.position.set(.35,1.6,.25),Ue(o,c),{focus:c.position.distanceTo(r.position),range:1.2,blur:12,bloom:.25,bloomT:.95,vig:.4}}})}function rd(i,t){return Bt(i,t,{bg:"#9AA4B0",fog:["#B0B8C0",.02],fov:34,far:600},e=>{In(e,-120,500,260,[[0,"#6A7488"],[.6,"#A8B0BC"],[1,"#D8D4CC"]]);let n=new Z(new Ft(200,200),G("#5E6A44"));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n);let s=new Nt;s.add(N(8,6,6,G("#C8BCA8"),0,3,0));for(let h of[-1,1]){let u=N(8.4,.2,4.2,G("#9A4A2E"),0,6.9,h*1.6);u.rotation.x=h*.55,s.add(u)}s.add(N(1.6,3,1.6,G("#C8BCA8"),0,8.5,2.2)),s.add(N(.12,1.2,.12,"#3A2A1A",0,10.6,2.2)),s.add(N(.7,.12,.12,"#3A2A1A",0,10.8,2.2));let r=new Z(new Ee(.2,.35,.5,12),G("#8A6A3A",{metalness:.7}));r.position.set(0,8.6,3),s.add(r),s.add(N(1.4,2.4,.1,G("#4A3220"),0,1.2,3.02)),s.position.set(-4,0,-14),e.add(s),e.add(N(30,1.2,.5,G("#9A9082"),0,.6,-9));for(let h=0;h<12;h++)es(e,-14+h*2.6,-12-h%2*3,1.2+h%3*.3,["#3E4E34","#4E5E3E","#5E6E46","#8A8A5A"],h);let o=Qt(3),a=[];for(let h=0;h<28;h++){let u=-6+h%7*1.6+(o()-.5)*.3,d=-1-Math.floor(h/7)*1.7,f=new Nt;f.add(N(.08,.7,.06,"#6A4A2E",0,.35,0)),f.add(N(.36,.07,.06,"#6A4A2E",0,.52,0)),f.position.set(u,0,d),f.rotation.z=(o()-.5)*.15,e.add(f),a.push(f);let g=new Z(new Ze(.06,8,6),G(["#E8E0D0","#D2728A","#F2C14E"][h%3]));g.position.set(u+.15,.06,d+.15),e.add(g)}let l=ne(e,"mae","long","#3A2418",1.6,.6);l.tint("#D8D8E0"),qe(e,{ki:1.4,key:"#D8DCE8",pos:[-10,20,10],r:20,hemi:.9});let c=[];for(let h=0;h<60;h++){let u=new Z(new Ze(.02,4,3),new ue({color:"#E8ECF0"}));e.add(u),c.push({m:u,x:(o()-.5)*14,z:-o()*10,p:o()*6})}return(h,u,d)=>(c.forEach(f=>f.m.position.set(f.x+Math.sin(u+f.p)*.3,4-(u*.6+f.p)%4,f.z)),Ot(d,[[0,[-1,1.2,6]],[6,[0,1.4,4]],[13.4,[2.4,1.5,3.4]]],[[0,[-2,1,-6]],[6,[0,.6,-2]],[13.4,[1.6,1.2,.4]]],u),l.face(d),l.eye(u<7?"sad":"shut"),l.pose({armL:[20,-110],armR:[20,-110],head:-8}),{focus:Gt(8,d.position.distanceTo(l.root.position),At(5,9,u)),range:4,blur:10,bloom:.15,bloomT:1,vig:.5,sat:.65})})}function od(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.03],fov:32},e=>{let n=Ne(e,{lareiraX:3.6,noite:!0});e.add(N(1.8,.35,1,G("#6A4A2E"),-1.2,.18,-2.4)),e.add(N(1.7,.18,.95,G("#E2D6C0"),-1.2,.44,-2.4)),e.add(N(1.7,.1,.7,G("#7A5A8A"),-.9,.55,-2.3));let s=ne(e,"campones2",null,null,-1.5,-2.2,-.35,.6);s.tint("#F0D8C8");let r=Fe("#FF5A3A",.5,.4);e.add(r);let o=ne(e,"mae","long","#3A2418",-.1,-1.9);o.tint("#FFE0C8");let a=N(.2,.06,.14,"#F4EEDC",0,0,0);e.add(a);let l=new Z(new Ee(.22,.18,.3,14),G("#6A4A2E"));l.position.set(.6,.15,-1.4),e.add(l);let c=new Z(new an(.2,16),G("#5A5A3A",{roughness:.2}));c.rotation.x=-Math.PI/2,c.position.set(.6,.29,-1.4),e.add(c);let h=br("+",.9,.9,"#14141A","#3ADE6A",1.2,"Inter");h.position.set(1.4,2.3,-1),e.add(h);let u=[Be(e,-2.4,.9,-3)];return e.add(N(.4,.9,.4,G("#5A3A22"),-2.4,.45,-3)),(d,f,g)=>{n.upd(f),u.forEach(m=>m.upd(f)),Ot(g,[[0,[0,1.5,2.2]],[7.2,[.4,1.5,1.4]]],[[0,[-1,.8,-2.3]],[7.2,[.4,1.5,-1.4]]],f),s.face(g),s.eye("shut"),s.pose({head:Math.sin(f*8)*3,bob:Math.abs(Math.sin(f*4))*.01}),r.position.set(-1.5,.55,-2),r.material.opacity=.3+Math.sin(f*3)*.1,o.face(g),o.eye("sad"),o.pose({armL:[10,6],armR:[55,-30]}),a.position.set(-.4,1,-1.8);let y=f>5.75?f<6.3&&Math.sin(f*60)>0?1:0:At(4.9,5.3,f);return h.visible=y>.5,Ue(h,g),{focus:g.position.distanceTo(new C(-.8,1,-2)),range:2.2,blur:13,bloom:.45,bloomT:.8,vig:.6}}})}function ad(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.025],fov:32},e=>{let n=Ne(e,{lareiraX:-1.2}),s=Sn(e,-.2,-2.6),r=N(.04,.8,.04,"#7A5232",0,0,0);e.add(r);let o=kn(e,18,[-1.2,1,-3.2],{col:"#FFFFFF",size:.9,rise:2.4,spread:.25,seed:7,life:2}),a=[];for(let l=0;l<10;l++){let c=new Z(new Ze(.035,8,6),new Lt({color:"#CFE8FF",transparent:!0,opacity:.7}));e.add(c),a.push(c)}return(l,c,h)=>{n.upd(c),o(c),a.forEach((d,f)=>{let g=(c*1.5+f*.1)%1;d.position.set(-1.2+Math.cos(f*2)*.2,.82+g*.1,-3.3+Math.sin(f*2)*.15),d.scale.setScalar(1-g)}),Ot(h,[[0,[.8,1.2,.6]],[7.6,[.2,1.1,-.6]]],[[0,[-.8,.9,-3.2]],[7.6,[-.6,.9,-3]]],c),s.face(h);let u=Math.sin(c*4);return s.pose({armL:[10,6],armR:[60+u*10,-40],head:6}),s.eye(c<3.5?"down":"happy"),r.position.set(s.root.position.x-.38+u*.05,.95,s.root.position.z-.5),r.rotation.z=.9,{focus:h.position.distanceTo(s.root.position),range:1.6,blur:13,bloom:.5,bloomT:.75,vig:.55}}})}function ld(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.02],fov:34},e=>{let n=Ne(e,{lareiraX:-3.4}),s=Sn(e,.3,-1.8),r=ne(e,"mae","long","#3A2418",-1.4,-2.6);r.tint("#FFE0C8");let o=ne(e,"campones",null,null,3.4,-2);o.tint("#FFE0C8");let a=ne(e,"parteira","bun","#5A3A22",4.2,-4.5,.9);a.tint("#FFE8D0");let l=[ne(e,"campones2",null,null,-.6,-1.2,0,.55),ne(e,"mae","bob","#3A2418",1.2,-1.1,0,.5)];l.forEach(h=>h.tint("#FFE0C8"));let c=l.map(()=>{let h=new Z(new Ee(.05,.04,.1,10),G("#B8683A"));return e.add(h),h});return(h,u,d)=>(n.upd(u),Ot(d,[[0,[-1.4,1.6,.4]],[1.8,[-1.2,1.6,.2]],[2.4,[3,1.6,1.4]],[3.6,[3.2,1.6,1.2]],[4,[4,2.2,-1.2]],[5.6,[4,2.2,-1.5]],[6.4,[.4,1.3,2.4]],[10.2,[.3,1.2,1.6]]],[[0,[-1.4,1.5,-2.6]],[1.8,[-1.4,1.5,-2.6]],[2.4,[3.4,1.5,-2]],[3.6,[3.4,1.5,-2]],[4,[4.2,2.4,-4.5]],[5.6,[4.2,2.4,-4.5]],[6.4,[.3,.8,-1.4]],[10.2,[.3,.8,-1.4]]],u),r.face(d),r.eye("look"),r.pose({armL:[20,-100],armR:[20,-100],head:8}),o.face(d),o.eye(u<3?"small":"flat"),o.pose({armL:[10,6],armR:[50,-150],head:-6}),a.face(d),a.eye("wide"),a.pose({armL:[60,-150],armR:[10,6],lean:-4}),s.face(d),s.eye("happy"),s.pose({armR:[40,-90]}),l.forEach((y,m)=>{y.face(d),y.eye(u>7?"happy":"look");let p=u>7+m*.4;y.pose({armR:p?[50,-120]:[10,6]}),c[m].visible=p,c[m].position.set(y.root.position.x+.2,p?.9:.5,y.root.position.z+.1)}),{focus:u<6?3:d.position.distanceTo(s.root.position),range:2.2,blur:12,bloom:.4,bloomT:.82,vig:.55})})}function cd(i,t){return Bt(i,t,{bg:"#F2D9B0",fog:["#E8D0A8",.02],fov:32},e=>{let n=Ne(e,{lareiraX:-3.4}),s=Sn(e,0,-2);s.root.children.forEach(a=>{});let r=new zn("#FFE2B0",80,12,.4,.5,1.2);r.position.set(3,5,2),r.target.position.set(0,.6,-2),e.add(r,r.target);let o=Yo(e,120,[-1.5,1.5,.2,2.5,-3,-.5],4,"#FFE8B0");return(a,l,c)=>{n.upd(l),o(l),Ot(c,[[0,[0,1,1.6]],[5.8,[0,.95,.4]]],[[0,[0,.95,-2]],[5.8,[0,1,-2]]],l),s.face(c);let h=At(.8,1.6,l);return s.pose({armL:[Gt(10,40,h),Gt(6,-100,h)],armR:[Gt(10,40,h),Gt(6,-100,h)],head:-h*4}),s.eye(l<1.6?"down":l<3?"wide":"happy"),{focus:c.position.distanceTo(s.root.position),range:1.4,blur:12,bloom:.55,bloomT:.72,vig:.5,exposure:1.05}}})}function hd(i,t){return Bt(i,t,{bg:"#2A1A10",fog:["#2A1A10",.025],fov:34},e=>{let n=Ne(e,{lareiraX:-3.4,parede:"#B8A080"}),s=Sn(e,.2,-1.8),r=Mt(64,64,h=>{let u=h.createRadialGradient(26,26,2,32,32,30);u.addColorStop(0,"#FFF0A0"),u.addColorStop(1,"#C9902A"),h.fillStyle=u,h.beginPath(),h.arc(32,32,30,0,7),h.fill(),h.strokeStyle="#8A6010",h.lineWidth=3,h.beginPath(),h.arc(32,32,22,0,7),h.stroke()}),o=Qt(5),a=[];for(let h=0;h<80;h++){let u=pe(r,.14,.14);e.add(u),a.push({m:u,x:-2+o()*4.4,z:-3+o()*2.4,p:o()*3,s:1+o()})}let l=new Z(new qi(.6,.4,16),G("#D9A83A",{metalness:.8,roughness:.3}));l.position.set(.2,.2,-1.4),e.add(l);let c=Fe("#FFD870",2.4,.4);return c.position.set(.2,.5,-1.4),e.add(c),(h,u,d)=>(n.upd(u),a.forEach(f=>{let g=4-(u*f.s+f.p)%4.2;f.m.position.set(f.x,Math.max(.05,g),f.z),f.m.rotation.y=u*4+f.p}),l.scale.set(1,At(0,6,u)+.2,1),Ot(d,[[0,[.2,1.3,2]],[7,[.2,1.6,3.2]]],[[0,[.2,1,-1.8]],[7,[.2,1.3,-1.8]]],u),s.face(d),s.cheer(u,0,.8),s.eye("happy"),{focus:d.position.distanceTo(s.root.position),range:2,blur:12,bloom:.55,bloomT:.72,vig:.5})})}function ud(i,t){return Bt(i,t,{bg:"#2A1A10",fog:["#3A2414",.02],fov:34},e=>{let n=Ne(e,{lareiraX:-9,parede:"#C8B090"}),s=(l,c,h,u)=>{let d=Mt(256,192,g=>{g.fillStyle="#9A7A52",g.fillRect(0,0,256,192),g.strokeStyle="#6A4A2E",g.lineWidth=8,g.strokeRect(4,4,248,184),g.fillStyle=u,g.font="900 46px Fraunces",g.textAlign="center",g.fillText(h,128,112)}),f=new Z(new sn(.9,.7,.7),new Lt({map:d}));return f.position.set(l,.35,c),f.castShadow=!0,e.add(f),f};for(let l=0;l<6;l++)s(-3.4+l%3*.95,-3.2+Math.floor(l/3)*.8,"A\xC7\xDACAR","#F4EEDC");for(let l=0;l<3;l++)s(-3.4+l*.95,-3.2,"A\xC7\xDACAR","#F4EEDC").position.y=1.05;[["#2A1A14","PIMENTA"],["#8A4A22","CANELA"],["#E9A830","A\xC7AFR\xC3O"],["#5A3A1A","CRAVO"]].forEach(([l,c],h)=>{let u=new Z(new Ee(.35,.42,.7,16),G("#C8B08A"));u.position.set(-.2+h*.9,.35,-2.6),e.add(u);let d=new Z(new qi(.34,.3,16),G(l));d.position.set(-.2+h*.9,.85,-2.6),e.add(d);let f=br(c,.7,.16,"#F4EEDC","#3A2414",0,"Inter");f.position.set(-.2+h*.9,.45,-2.24),e.add(f)});let r=new Nt;r.add(N(1.2,.6,.7,G("#5A3A22"),0,.3,0)),r.add(N(1.24,.08,.74,G("#C9A04A",{metalness:.7}),0,.62,0));for(let l=0;l<30;l++){let c=new Z(new Ee(.06,.06,.02,12),G("#E9B84A",{metalness:.8,roughness:.3}));c.position.set(-.45+l%8*.13,.66+Math.floor(l/8)*.02,-.2+l%3*.15),r.add(c)}r.position.set(3.4,0,-2.4),e.add(r);let o=Fe("#FFD870",2,.35);o.position.set(3.4,.9,-2.4),e.add(o);let a=ci(e,3,2,(l,c,h,u)=>{l.fillStyle="#B89A6A",[[700,200,90,130],[760,520,120,180],[200,500,120,200],[880,640,60,90]].forEach(([d,f,g,y])=>{l.beginPath(),l.ellipse(d,f,g,y,0,0,7),l.fill()}),l.strokeStyle="#2A6A3A",l.lineWidth=6,l.setLineDash([14,10]),l.beginPath(),l.moveTo(690,240),l.quadraticCurveTo(500,600,760,700),l.quadraticCurveTo(900,640,960,420),l.stroke(),l.beginPath(),l.moveTo(690,240),l.quadraticCurveTo(400,420,260,480),l.stroke(),l.setLineDash([]),c>.5&&(l.strokeStyle="#C21A1A",l.lineWidth=12,l.beginPath(),l.moveTo(520,360),l.lineTo(580,420),l.moveTo(580,360),l.lineTo(520,420),l.stroke()),l.fillStyle="#3A2A10",l.font="700 48px Caveat",l.fillText("\xCDndia",900,380),l.fillText("Brasil",200,480),l.fillText("Lisboa",640,190)});return a.position.set(1.4,2.4,-3.82),(l,c,h)=>(n.upd(c),a.paint(At(5.5,6.5,c)),Ot(h,[[0,[-3,1.6,1.6]],[3.4,[-.6,1.4,1.2]],[6,[3,1.5,1.2]],[9.6,[1.4,2.4,.6]]],[[0,[-3,.7,-3]],[3.4,[.8,.7,-2.6]],[6,[3.4,.6,-2.4]],[9.6,[1.4,2.4,-3.8]]],c),o.material.opacity=.3+Math.sin(c*3)*.1,{focus:3.6,range:2.4,blur:11,bloom:.45,bloomT:.78,vig:.5})})}function dd(i,t){return Bt(i,t,{bg:"#2A1A10",fog:["#3A2414",.02],fov:32},e=>{let n=Ne(e,{lareiraX:-9,parede:"#C8B090"});e.add(N(3,1.1,.7,G("#5A3A22"),.6,.55,-2.2)),e.add(N(3.1,.08,.8,G("#7A5232"),.6,1.12,-2.2));let s=new Nt;s.add(N(.04,.5,.04,"#C9A04A",0,.25,0)),s.add(N(.6,.03,.03,"#C9A04A",0,.5,0));for(let a of[-1,1]){let l=new Z(new Ee(.12,.1,.03,14),G("#C9A04A",{metalness:.7}));l.position.set(a*.3,.3,0),s.add(l)}s.position.set(1.4,1.16,-2.2),e.add(s);let r=ne(e,"mercador",null,null,.9,-2.9);r.tint("#FFE8D0");let o=Sn(e,-1.3,-1.5);return(a,l,c)=>{n.upd(l),Ot(c,[[0,[-1.8,1.2,1.4]],[5.9,[-1.2,1.3,.8]]],[[0,[.3,1.2,-2.2]],[5.9,[.4,1.3,-2.4]]],l),o.face(c),o.pose({armL:[60+Math.sin(l*6)*20,-20],armR:[60-Math.sin(l*6)*20,-20],head:-6}),o.eye(l<3?"look":"sad"),r.face(c);let h=l>2.6;return r.pose({armL:h?[40,-120]:[10,6],armR:h?[40,-120]:[10,6],head:h?Math.sin(l*14)*5:0,bob:h?Math.abs(Math.sin(l*14))*.02:0}),r.eye(h?"happy":"smug"),{focus:c.position.distanceTo(r.root.position),range:2.4,blur:12,bloom:.4,bloomT:.82,vig:.5}}})}function Fc(i){let t=new Z(new Ft(20,30),G("#9A8A78",{roughness:.6}));t.rotation.x=-Math.PI/2,t.position.z=-6,t.receiveShadow=!0,i.add(t);let e=G("#C8BCA8");i.add(N(20,12,.4,e,0,6,-14));for(let o of[-1,1])i.add(N(.4,12,30,e,o*7,6,-4));for(let o=0;o<4;o++)for(let a of[-1,1]){let l=new Z(new Ee(.35,.4,7,16),e);l.position.set(a*4.2,3.5,-2-o*3.4),i.add(l);let c=new Z(new gn(1.7,.25,8,20,Math.PI),e);c.position.set(a*4.2,7,-3.7-o*3.4),c.rotation.y=Math.PI/2,i.add(c)}i.add(N(3,1.2,1.2,G("#E8DCC4"),0,.6,-12.4)),i.add(N(3.2,.1,1.3,G("#C9A04A",{metalness:.6}),0,1.25,-12.4)),i.add(N(.12,1.6,.1,G("#C9A04A",{metalness:.7}),0,2.1,-12.6)),i.add(N(.9,.12,.1,G("#C9A04A",{metalness:.7}),0,2.5,-12.6));let n=new Z(new an(1.6,24),new ue({map:Mt(256,256,o=>{o.translate(128,128);for(let a=0;a<12;a++)o.save(),o.rotate(a*.5236),o.fillStyle=["#C9361F","#2A6AC8","#F2C14E","#3E9A5A"][a%4],o.beginPath(),o.moveTo(0,0),o.lineTo(-30,-120),o.lineTo(30,-120),o.fill(),o.restore();o.strokeStyle="#1A1A22",o.lineWidth=8,o.beginPath(),o.arc(0,0,124,0,7),o.stroke()})}));n.position.set(0,8,-13.78),i.add(n),Ii(i,0,5,-10,3,12,.35,"#FFE0C0",.12).rotation.x=-.5;let s=[];for(let o of[-1.2,-.6,.6,1.2])s.push(Be(i,o,1.3,-12.2,1.2));for(let o=0;o<5;o++)for(let a of[-1,1])i.add(N(2.6,.5,.5,G("#5A3A22"),a*1.9,.25,-1-o*1.6)),i.add(N(2.6,.9,.1,G("#4A3220"),a*1.9,.7,-.75-o*1.6));i.add(new We("#B8A890","#2A2018",.6));let r=new zn("#FFE0C0",120,30,.5,.5,1.2);return r.position.set(0,10,-11),r.target.position.set(0,0,-4),r.castShadow=!0,i.add(r,r.target),{vs:s,upd(o){s.forEach(a=>a.upd(o))}}}function fd(i,t){return Bt(i,t,{bg:"#2A2018",fog:["#3A2E24",.02],fov:34},e=>{let n=Fc(e),s=ne(e,"padre",null,null,.1,-7.6);s.tint("#FFE8D0");let r=Sn(e,-.3,-6.1),o=pe(Mt(128,128,l=>{l.clearRect(0,0,128,128),l.fillStyle="#5A3A22";for(let c=0;c<20;c++){let h=c/20*6.283;l.beginPath(),l.arc(64+Math.cos(h)*40,50+Math.sin(h)*30,5,0,7),l.fill()}l.fillRect(60,80,8,30),l.fillRect(50,90,28,6)}),.25,.25);e.add(o);let a=Ys("internet",.7);return e.add(a),(l,c,h)=>{n.upd(c),Ot(h,[[0,[.2,1.6,-2.2]],[7.4,[.1,1.4,-3.2]]],[[0,[.1,1.2,-6]],[7.4,[.1,1.1,-6]]],c);let u=c>3.4;return r.face(h),r.root.position.y=u?-.35:0,r.pose(u?{armL:[30,-130],armR:[30,-130],head:8}:{armL:[80+Math.sin(c*7)*25,-20],armR:[80-Math.sin(c*7)*25,-20]}),r.eye(u?"shut":"happy"),s.face(h),s.pose({armL:[10,6],armR:c>2.7?[70,0]:[20,-60],head:c<2.7?Math.sin(c*1.5)*3:0}),s.eye(c<2.7?"flat":"smug"),a.visible=c<2.8,a.position.set(-.3,1.9,-6.1),a.scale.setScalar(.7+Math.sin(c*4)*.05),Ue(a,h),o.visible=u,o.position.set(r.root.position.x,.78,r.root.position.z+.1),Ue(o,h),{focus:h.position.distanceTo(r.root.position),range:2.6,blur:12,bloom:.45,bloomT:.8,vig:.5}}})}function Fi(i){let t=Ne(i,{lareiraX:-9,noite:!0,parede:"#A89070"});i.add(N(2.6,.1,1.2,G("#6A4A2E"),0,.9,-2.4));for(let[s,r]of[[-1.2,-2.9],[1.2,-2.9],[-1.2,-1.9],[1.2,-1.9]])i.add(N(.08,.88,.08,"#4A3220",s,.44,r));[["#8A8A92",-.8],["#6A4A2E",-.5],["#8A8A92",.9]].forEach(([s,r])=>i.add(N(.3,.04,.08,G(s,{metalness:.5}),r,.97,-2.2)));let n=[Be(i,-1,.95,-2.6,1.2),Be(i,1.1,.95,-2.7,1.2)];for(let s=0;s<6;s++){let r=N(.22,.3,.16,["#7A2A2A","#2A4A6A","#6A5A2A"][s%3],-3+s*.24,1.6,-3.7);i.add(r)}return i.add(N(1.6,.05,.3,"#5A3A22",-2.4,1.44,-3.7)),{I:t,vs:n,upd(s){t.upd(s),n.forEach(r=>r.upd(s))}}}function pd(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.025],fov:34},e=>{let n=Fi(e),s=Sn(e,0,-1.5),o=["celular","lampada","motor"].map(l=>{let c=Ys(l,.7);return e.add(c),c}),a=[2.1,2.7,3.2];return(l,c,h)=>(n.upd(c),Ot(h,[[0,[0,1.3,2.2]],[8.1,[0,1.5,1.2]]],[[0,[0,1.3,-1.6]],[8.1,[0,1.6,-1.6]]],c),s.face(h),s.pose({armL:[10,6],armR:[c>1.4?140:10,10],head:-6}),s.eye(c<1.5?"look":"happy"),o.forEach((u,d)=>{let f=At(a[d],a[d]+.3,c);u.visible=f>.02,u.scale.setScalar(f*(1+Math.sin(c*3+d)*.05)),u.position.set(-.9+d*.9,2.2+Math.sin(c*2+d)*.08,-1.6),Ue(u,h)}),{focus:h.position.distanceTo(s.root.position),range:2,blur:12,bloom:.5,bloomT:.75,vig:.55})})}function md(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.02],fov:30},e=>{let n=Fi(e),s=Sn(e,0,-3.1),r=ci(e,1.4,1,(a,l,c,h)=>{a.strokeStyle="#2A1A10",a.lineWidth=7,a.lineCap="round";let u=At(0,.35,l);a.beginPath(),a.roundRect(380,120,260*Math.min(1,u*1.5),480*u,30),a.stroke(),l>.3&&(a.strokeRect(410,170,200,360),a.beginPath(),a.arc(510,570,16,0,7),a.stroke());let d=[[.45,"tela?",190,260,410,300],[.6,"bateria?",700,180,610,300],[.72,"fio?",700,540,620,560],[.82,"eletricidade?",150,640,390,560]];a.font="700 64px Caveat",a.fillStyle="#7A1A10",a.strokeStyle="#7A1A10",a.lineWidth=4;for(let[f,g,y,m,p,E]of d)l>f&&(a.fillText(g,y,m),a.beginPath(),a.moveTo(y+60,m+12),a.lineTo(p,E),a.stroke())});r.rotation.x=-Math.PI/2+.35,r.position.set(0,1,-2.3);let o=N(.02,.4,.02,"#F4EEDC",0,0,0);return e.add(o),(a,l,c)=>{n.upd(l);let h=At(.2,11.6,l);return r.paint(h),o.position.set(Gt(-.2,.3,Math.sin(l*2)*.5+.5),1.2,-2.2),o.rotation.z=.5,Ot(c,[[0,[0,2.95,-.85]],[11.5,[0,2.85,-.95]],[13.6,[1.4,1.35,-1.3]]],[[0,[0,1,-2.3]],[11.5,[0,1,-2.3]],[13.6,[0,1.05,-3.1]]],l),s.face(c),s.eye(l>11.7?"flat":"down"),s.pose({armR:[40,-70]}),{focus:l<11.5?c.position.distanceTo(r.position):c.position.distanceTo(s.root.position),range:1.2,blur:11,bloom:.4,bloomT:.82,vig:.55}}})}function $o(i){Xu(i,{win:[-3.2,-.6,1.2,3.4],wall:"#E8E4DC",floor:"#B89878",cur1:"#B8C4D0",cur2:"#A8B4C0",side:!1}),In(i,-30,80,50,[[0,"#7FB2E0"],[1,"#F7E9C8"]]);let t=new Nt;t.add(N(3,.9,.6,G("#4A5A6A"),0,.45,0)),t.add(N(3.1,.05,.65,G("#E8E4DA"),0,.92,0)),t.position.set(1.8,0,-3.5),i.add(t);let e=new Nt;e.add(N(.7,.42,.45,G("#D8DCE2",{metalness:.4}),0,.21,0));let n=new Z(new Ft(.42,.32),new Lt({color:"#1A1A22",emissive:"#FFC870",emissiveIntensity:0}));n.position.set(-.08,.21,.226),e.add(n);let s=new Z(new an(.03,12),new Lt({color:"#333",emissive:"#4AFF8A",emissiveIntensity:.8}));return s.position.set(.25,.2,.226),e.add(s),e.position.set(2.4,.95,-3.5),i.add(e),Wu(i,-3.8,-3.4,1.1),Gu(i,2,2.6,-3.83,1.2,.8,(r,o,a)=>{r.fillStyle="#36AEA2",r.fillRect(0,0,o,a),r.fillStyle="#F2C14E",r.beginPath(),r.arc(80,70,34,0,7),r.fill()}),qe(i,{pos:[-3,6,-10],target:[0,0,0]}),Ii(i,-1.9,2.2,-2.4,1.4,4.5,-.5,"#FFE2B0",.12),{porta:n,botao:s}}function gd(i,t){return Bt(i,t,{bg:"#E8E0D0",fog:["#E8E0D0",.015],fov:34},e=>{let n=$o(e),s=De(e,1,-2.6),r=Zo(.18,.36);e.add(r);let o=Ys("internet",.6);e.add(o);let a=h=>{let u=new Nt;for(let d=0;d<10;d++){let f=Fe(["#FFE8A0","#AFFFF0","#F8B0E0"][d%3],.2,1);f.userData.a=d/10*6.283,u.add(f)}return u.position.set(...h),e.add(u),u},l=[a([1.45,1.4,-2.4]),a([.3,2.2,-2.6]),a([2.4,1.2,-3.4])],c=[8.1,9.5,11.1];return(h,u,d)=>{r.paint("b",g=>Yu.bloqueio(g,"10:30",96)),r.position.set(1.45,1.35,-2.45),r.rotation.x=-.2,l.forEach((g,y)=>{let m=At(c[y],c[y]+.2,u)*(1-At(c[y]+.9,c[y]+1.3,u));g.visible=m>.02,g.children.forEach((p,E)=>{let M=p.userData.a+u*3;p.position.set(Math.cos(M)*.35*m,Math.sin(M)*.35*m,0),p.material.opacity=m})}),o.position.set(.3,2.2,-2.6),o.visible=u>9.3&&u<10.8,Ue(o,d);let f=u>11.8;return n.porta.material.emissiveIntensity=f?1.2:0,Ot(d,[[0,[-.4,1.5,2.6]],[7.5,[.6,1.5,1.4]],[13.6,[1.8,1.4,-1.4]]],[[0,[.8,1.3,-2.6]],[7.5,[1.2,1.4,-2.6]],[13.6,[2.3,1.1,-3.4]]],u),s.face(d),s.pose({armL:[10,6],armR:f?[70,-10]:[40,-70],head:u>6&&u<7.8?-6:0}),s.eye(u<2.4?"look":u<6?"down":"happy"),{focus:d.position.distanceTo(s.root.position),range:2.4,blur:12,bloom:.5,bloomT:.78,vig:.42}}})}function yd(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.025],fov:32},e=>{let n=Fi(e),s=Sn(e,0,-1.6),r=N(.12,.1,.1,"#5A5A62",0,0,0);e.add(r);let o=Qt(3),a=[];for(let c=0;c<16;c++){let h=Fe("#FFD070",.08,1);e.add(h),a.push({s:h,vx:(o()-.5)*1.2,vy:o()*1.2,p:o()})}let l=new Z(new qi(.2,.12,10),G("#C8A860"));return l.position.set(0,.97,-1.9),e.add(l),(c,h,u)=>{n.upd(h);let d=h*2.2%1;return Ot(u,[[0,[.3,1.2,.6]],[5.1,[.2,1.15,.1]]],[[0,[0,1,-1.7]],[5.1,[0,1,-1.7]]],h),s.face(u),s.pose({armL:[40,-60],armR:[Gt(60,30,d),-70]}),s.eye(h<2.5?"down":h<4?"angry":"sad"),r.position.set(.2,1.1-d*.1,-1.5),a.forEach(f=>{let g=d*.3;f.s.visible=d<.35,f.s.position.set(.2+f.vx*g,1.05+f.vy*g-g*g*3,-1.5),f.s.material.opacity=1-d*3}),{focus:u.position.distanceTo(s.root.position),range:1.4,blur:12,bloom:.5,bloomT:.75,vig:.6}}})}function vd(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.02],fov:34},e=>{let n=Fi(e),s=De(e,-1.2,-1.8),r=new Nt;r.add(N(1,1.9,.7,G("#7A5232"),0,.95,0));let o=new Nt;o.add(N(.06,1.8,.9,G("#8A6242"),0,.95,.45)),o.position.set(.5,0,.35),r.add(o);for(let h=0;h<4;h++)r.add(N(.9,.05,.02,"#C9A04A",0,.3+h*.5,.36,!1));let a=[];for(let h=0;h<4;h++){let u=new Z(new sn(.3,.25,.3),new Lt({color:"#CFEFFF",transparent:!0,opacity:.75,roughness:.1}));u.position.set(-.2+h%2*.4,.5+Math.floor(h/2)*.6,0),r.add(u),a.push(u)}let l=br("GELADEIRA",.9,.2,"#F4EEDC","#3A2414",0,"Caveat");l.position.set(0,1.75,.36),r.add(l),r.position.set(.9,0,-2.6),e.add(r);let c=new Z(new an(.6,24),G("#9FD8F0",{roughness:.1,transparent:!0,opacity:.7}));return c.rotation.x=-Math.PI/2,c.position.set(.9,.015,-1.9),e.add(c),(h,u,d)=>{n.upd(u);let f=At(7.8,8.3,u);o.rotation.y=-f*1.4,a.forEach((y,m)=>y.scale.setScalar(Gt(1,.5,At(0,11,u)))),c.scale.setScalar(Gt(.3,1.4,At(0,11,u))),Ot(d,[[0,[-.2,1.5,2.4]],[7.6,[-.4,1.5,1.4]],[11.5,[.2,1.4,1.6]]],[[0,[-.4,1.4,-2]],[7.6,[-.8,1.5,-1.8]],[11.5,[.6,1.1,-2.4]]],u),s.face(d);let g=u<5;return s.pose({armL:g?[30,-40]:[10,6],armR:g?[80,30]:u>8?[70,0]:[10,6],head:g?6:0}),s.eye(u<5?"look":u<8?"smug":"wide"),{focus:d.position.distanceTo(s.root.position),range:2.4,blur:12,bloom:.45,bloomT:.8,vig:.55}}})}function _d(i,t){return Bt(i,t,{bg:"#A8CCE8",fog:["#D8D0C0",.012],fov:34,far:900},e=>{Gn(e,{z:-200,w:600,y:-2,seed:12}),ns(e,20,120,-40);for(let a=0;a<8;a++)for(let l of[-1,1]){let c=Vn(70+a*2+(l>0?1:0),6,2+(a+(l>0?1:0))%2);c.position.set(l*6.2,0,-4-a*6.4),c.rotation.y=-l*Math.PI/2,e.add(c)}let n=qe(e,{ki:3,pos:[-10,20,10],r:40,hemi:1}),s=Qt(2),r=Sn(e,0,-6),o=De(e,0,-6);return o.root.visible=!1,(a,l,c)=>{let h=l*1.6;n.position.set(Math.cos(h)*30,12+Math.sin(h)*14,10),n.intensity=2+Math.sin(h);let u=At(2.2,4.4,l);r.root.visible=u<.5,o.root.visible=u>=.5;let d=-6+l*.9;for(let f of[r,o])f.root.position.z=d,f.walk(l,1,1),f.face(c),f.eye("look");return r.root.scale.setScalar(Gt(.62,1,u)),o.root.scale.setScalar(Gt(.62,1,u)),Ot(c,[[0,[1.4,1.4,1.6]],[6.4,[1.2,1.6,2.4]]],[[0,[0,1.1,-6]],[6.4,[0,1.3,-1]]],l),{focus:c.position.distanceTo(o.root.position),range:3,blur:10,bloom:.25,bloomT:.95,vig:.4}}})}function Ed(i,t){return Bt(i,t,{bg:"#0E0A0C",fog:["#140E10",.03],fov:34},e=>{let n=new Z(new Ft(20,20),G("#3A3230",{roughness:.7}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n),e.add(N(20,8,.3,G("#2A2224"),0,4,-6)),e.add(N(5,.9,1.2,G("#5A1A1A"),0,.45,-3.6)),e.add(N(5.2,.08,1.3,G("#7A2A2A"),0,.92,-3.6));let s=new Nt;s.add(N(.25,3,.15,G("#3A2414"),0,0,0)),s.add(N(1.4,.25,.15,G("#3A2414"),0,.6,0)),s.position.set(0,4,-5.8),e.add(s);let r=[-1.6,0,1.6].map((c,h)=>{let u=ne(e,"inquisidor","bob","#1A1A22",c,-4.4,.3);return u.tint("#E8D8C8"),u}),o=[Be(e,-2.2,.95,-3.4,1.4),Be(e,2.2,.95,-3.4,1.4)],a=De(e,0,-.6),l=new zn("#FFD8A8",60,14,.4,.5,1.3);return l.position.set(0,7,2),l.target.position.set(0,0,-.6),l.castShadow=!0,e.add(l,l.target),e.add(new We("#4A3A40","#0A0808",.4)),(c,h,u)=>(o.forEach(d=>d.upd(h)),Ot(u,[[0,[0,2.4,4.4]],[7.3,[.4,1.6,2.2]]],[[0,[0,1.6,-4]],[7.3,[0,1.4,-2]]],h),r.forEach((d,f)=>{d.face(u),d.eye(h>6.2?"angry":"flat"),d.pose({armL:[20,-110],armR:h>6.2&&f===1?[100,0]:[20,-110]})}),a.face(u),a.eye(h>6.2?"wide":"look"),a.pose({head:h>6.2?-6:0}),{focus:u.position.distanceTo(new C(0,1.5,-3)),range:4,blur:11,bloom:.45,bloomT:.78,vig:.65,flash:At(6.3,6.4,h)*(1-At(6.4,6.9,h))*.3,tint:h>6.3?"#FFB8A8":"#ffffff"})})}function Md(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.02],fov:32},e=>{let n=Fi(e),s=De(e,-1.4,-2),r=new Z(new Ze(.14,20,14),new Lt({color:"#F2C14E",emissive:"#FFB040",emissiveIntensity:1.2}));r.position.set(-.3,1.3,-2.4),e.add(r);let o=[["#4A86C7",.32,.05],["#C8643A",.48,.04],["#8EAE56",.64,.035]].map(([c,h,u])=>{let d=new Z(new Ze(u,14,10),G(c));return e.add(d),[d,h]});for(let[,c]of o){let h=new Z(new gn(c,.004,4,60),G("#C9A04A",{metalness:.7}));h.rotation.x=Math.PI/2,h.position.copy(r.position),e.add(h)}let a=pe(Mt(256,256,c=>{c.fillStyle="#E8F4D8",c.beginPath(),c.arc(128,128,120,0,7),c.fill(),c.strokeStyle="#5A3A22",c.lineWidth=10,c.stroke();let h=Qt(4);for(let u=0;u<9;u++)c.fillStyle=["#7AC85A","#C85A9A","#5A8AC8"][u%3],c.beginPath(),c.ellipse(60+h()*130,60+h()*130,14,8,h()*3,0,7),c.fill()}),.5,.5);a.material.color.set("#B8B8A8"),a.position.set(.6,1.5,-2.4),e.add(a);let l=new Nt;return l.add(N(.5,.06,.08,G("#E8E4DA"),0,0,0)),l.add(N(.1,.02,.6,G("#E8E4DA"),.05,0,0)),l.add(N(.06,.14,.02,G("#C9361F"),-.22,.06,0)),e.add(l),(c,h,u)=>{n.upd(h),o.forEach(([f,g],y)=>{let m=h*(1.6-y*.4);f.position.set(r.position.x+Math.cos(m)*g,1.3,r.position.z+Math.sin(m)*g)}),a.visible=h>2.1,a.scale.setScalar(At(2.1,2.4,h)),Ue(a,u),l.visible=h>4.4;let d=(h-4.4)*1.2;return l.position.set(Math.cos(d)*1.2,2.2+Math.sin(d*2)*.1,-2.2+Math.sin(d)*.5),l.rotation.y=-d-Math.PI/2,Ot(u,[[0,[.2,1.6,0]],[2.1,[.3,1.6,-.3]],[6.6,[-.4,1.7,1.2]]],[[0,[-.3,1.3,-2.4]],[2.1,[.4,1.4,-2.4]],[6.6,[-.6,1.6,-2.2]]],h),s.face(u),s.pose({armL:[10,6],armR:[70,10]}),s.eye("happy"),{focus:u.position.distanceTo(new C(0,1.4,-2.4)),range:1.6,blur:12,bloom:.45,bloomT:.8,vig:.55}}})}function Sd(i,t){return Bt(i,t,{bg:"#0E0810",fog:["#1A0E14",.02],fov:34,far:600},e=>{Pi(e,1500,200,3),ns(e,60,60,-10,"#7A6A5E");for(let c=0;c<6;c++){let h=Vn(90+c,7,3,{night:!0});h.position.set(-18+c*7.2,0,-16),e.add(h)}let n=new Nt;for(let c=0;c<18;c++){let h=N(1.6,.14,.14,"#4A3220",0,.1+Math.floor(c/6)*.14,0);h.rotation.y=c*.52,n.add(h)}n.add(N(.18,3.4,.18,"#3A2414",0,1.7,0)),n.position.set(0,0,-6),e.add(n);let s=[];for(let c=0;c<9;c++){let h=Fe(c%2?"#FF6A20":"#FFC050",1.2,.9);h.position.set((c%3-1)*.4,.5+Math.floor(c/3)*.4,-6),e.add(h),s.push(h)}let r=new yn("#FF7A30",60,30,1.4);r.position.set(0,1.5,-5.4),r.castShadow=!0,e.add(r);let o=kn(e,18,[0,2,-6],{col:"#3A2A2A",size:4,rise:10,spread:1,seed:6,life:3}),a=Qt(4),l=[];for(let c=0;c<160;c++){let h=Math.PI*1.08+a()*Math.PI*.84,u=3.5+a()*5;l.push([Math.cos(h)*u,-6+Math.sin(h)*u,0,Math.atan2(-Math.cos(h),-Math.sin(h))])}return Xo(e,l,{raised:.15,jump:.02,seed:3,tint:"#C87A5A"}),e.add(new We("#2A1A2A","#0A0606",.4)),(c,h,u)=>(o(h),s.forEach((d,f)=>{let g=.8+Math.sin(h*17+f*2)*.15;d.scale.setScalar(1.2*g),d.position.y=.5+Math.floor(f/3)*.4+Math.sin(h*9+f)*.05}),r.intensity=60*(.85+Math.sin(h*13)*.1),Ot(u,[[0,[0,1.6,6]],[3.2,[0,1.8,4]]],[[0,[0,1.6,-6]],[3.2,[0,2,-6]]],h),{focus:10,range:6,blur:10,bloom:.6,bloomT:.7,vig:.65})})}function bd(i,t){return Bt(i,t,{bg:"#0E0A0C",fog:["#140E10",.03],fov:32},e=>{let n=Fi(e),s=De(e,0,-1.6),r=new zn("#AFC0FF",40,10,.3,.6,1.3);return r.position.set(3,3,1),r.target.position.set(0,1.4,-1.6),e.add(r,r.target),(o,a,l)=>(n.upd(a),Ot(l,[[0,[.3,1.5,.8]],[4.3,[.15,1.55,.1]]],[[0,[0,1.5,-1.6]],[4.3,[0,1.55,-1.6]]],a),s.face(l),s.pose({armL:[10,6],armR:[40,-150],head:Math.sin(a*2)*2}),s.eye(Math.floor(a*1.5)%2?"look":"lookl"),{focus:l.position.distanceTo(s.root.position),range:1.2,blur:13,bloom:.4,bloomT:.82,vig:.7,sat:.8})})}function Td(i,t){return Bt(i,t,{bg:"#2A1A10",fog:["#3A2414",.02],fov:34},e=>{let n=Fi(e),s=De(e,-1.2,-1.9),r=new Nt;r.add(N(.8,1.1,.16,G("#6A1A1A"),0,0,0));let o=new Z(new Ft(.72,1),new Lt({map:Mt(256,360,u=>{u.fillStyle="#6A1A1A",u.fillRect(0,0,256,360),u.strokeStyle="#D9B46A",u.lineWidth=8,u.strokeRect(16,16,224,328),u.fillStyle="#E9C870",u.font="900 40px Fraunces",u.textAlign="center",u.fillText("OS",128,130),u.fillText("LUS\xCDADAS",128,180),u.font="700 30px Caveat",u.fillText("por\u2026 voc\xEA?",128,260)}),emissive:"#3A1A0A",emissiveIntensity:.3}));o.position.z=.085,r.add(o),r.position.set(.6,2.1,-2.2),e.add(r);let a=Fe("#FFD870",2.4,.5);a.position.copy(r.position),e.add(a);let l=Qt(3),c=[];for(let u=0;u<80;u++)c.push([-3+l()*6,-3.2-l()*.4,0,0]);let h=pe(Mt(256,256,u=>{u.clearRect(0,0,256,256),u.strokeStyle="#7AA84A",u.lineWidth=10,u.beginPath(),u.arc(128,128,90,Math.PI*.6,Math.PI*2.4),u.stroke(),u.fillStyle="#8AC85A";for(let d=0;d<16;d++){let f=Math.PI*.6+d*.11*1.6;u.beginPath(),u.ellipse(128+Math.cos(f)*90,128+Math.sin(f)*90,16,7,f,0,7),u.fill()}}),.9,.9);return e.add(h),(u,d,f)=>(n.upd(d),r.rotation.y=Math.sin(d)*.2,r.position.y=2.1+Math.sin(d*1.5)*.05,h.position.set(-1.2,2,-1.9),h.visible=d>3&&d<9,Ue(h,f),Ot(f,[[0,[-.4,1.6,2]],[12.9,[0,1.8,.8]]],[[0,[-.3,1.7,-2]],[12.9,[.4,1.9,-2.2]]],d),s.face(f),s.cheer(d,0,d>3&&d<9?.6:0),d>3&&d<9||s.pose({armR:[60,-20]}),s.eye(d>9?"smug":"happy"),{focus:f.position.distanceTo(s.root.position),range:2.4,blur:12,bloom:.5,bloomT:.75,vig:.55})})}function Ad(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.02],fov:30},e=>{let n=Fi(e),s=De(e,0,-3.2),r=ci(e,1.5,1.05,(c,h,u,d)=>{let f="As armas e os bar\xF5es assinalados",g=Math.floor(At(.08,.42,h)*f.length);c.fillStyle="#2A1A10",c.font="700 64px Caveat",c.fillText(f.slice(0,g),70,170),c.strokeStyle="#C8A86A88",c.lineWidth=3;for(let y=0;y<9;y++)c.beginPath(),c.moveTo(60,230+y*60),c.lineTo(u-60,230+y*60),c.stroke();h>.7&&(c.fillStyle="#5A3A1A",c.beginPath(),c.ellipse(520,330,30,22,.3,0,7),c.fill())});r.rotation.x=-Math.PI/2+.35,r.position.set(0,1,-2.3);let o=N(.02,.4,.02,"#F4EEDC",0,0,0);e.add(o);let a=Be(e,.8,.95,-2.2,1.6),l=N(.06,.25,.06,"#F4EEDC",.8,1.07,-2.2,!1);return e.add(l),(c,h,u)=>{n.upd(h),a.upd(h);let d=At(0,14,h);r.paint(d);let f=h<5.8;o.position.set(f?Gt(-.5,.4,At(1,5.6,h)):.5,f?1.12+Math.abs(Math.sin(h*14))*.02:1.25,-2.25),o.rotation.z=.5;let g=At(7,14,h);return l.scale.y=Gt(1,.25,g),l.position.y=.95+.125*l.scale.y,a.f.position.y=.95+.25*l.scale.y+.05,a.L.position.y=a.f.position.y+.1,Ot(u,[[0,[0,2.95,-.85]],[6,[0,2.85,-.95]],[7.4,[0,1.4,-.5]],[14,[.2,1.5,.4]]],[[0,[0,1,-2.3]],[6,[0,1,-2.3]],[7.4,[0,1.3,-3.2]],[14,[0,1.4,-3.2]]],h),s.face(u),s.eye(h<6.4?"down":h<9?"flat":"sad"),s.pose({armR:f?[40,-70]:[10,6],head:h>9?-6:0}),{focus:h<6.6?u.position.distanceTo(r.position):u.position.distanceTo(s.root.position),range:1.2,blur:12,bloom:.45,bloomT:.8,vig:.6}}})}function xd(i,t){return Bt(i,t,{bg:"#2A1A10",fog:["#3A2414",.02],fov:34},e=>{let n=Ne(e,{lareiraX:-9,parede:"#C8B090"});for(let l=0;l<4;l++){e.add(N(5,.06,.5,"#5A3A22",0,.5+l*.7,-3.7));for(let c=0;c<22;c++)e.add(N(.16,.5,.32,["#6A1A1A","#2A3A5A","#5A4A2A","#3A5A3A"][(c+l)%4],-2.3+c*.22,.78+l*.7,-3.6))}let s=new Nt;s.add(N(1.2,1.6,.8,G("#5A3A22"),0,.8,0)),s.add(N(.1,1.2,.1,G("#3A2414"),0,2.2,0)),s.add(N(1,.1,.1,G("#3A2414"),0,2.4,0)),s.position.set(3.4,0,-2.2),e.add(s);let r=ne(e,"mercador",null,null,-2.4,-2.8);r.tint("#FFE8D0");let o=De(e,-.4,-1.6),a=N(.3,.4,.06,G("#6A1A1A"),0,0,0);return e.add(a),(l,c,h)=>{n.upd(c),Ot(h,[[0,[-1,1.5,2.4]],[7.5,[-.4,1.4,1.2]]],[[0,[-1.2,1.2,-2.4]],[7.5,[-.4,1.4,-1.6]]],c),r.face(h),r.eye("happy"),r.pose({armR:c<3?[60,-20]:[10,6]}),o.face(h);let u=c>3;return o.pose({armL:u?[30,-110]:[10,6],armR:[40,-100],head:u?8:0}),o.eye(u?"down":"happy"),a.position.set(o.root.position.x+(u?0:.3),u?1.25:1,o.root.position.z+.2),a.rotation.x=u?-.6:0,{focus:h.position.distanceTo(o.root.position),range:2.4,blur:12,bloom:.4,bloomT:.82,vig:.5}}})}function wd(i,t){return Bt(i,t,{bg:"#1A1210",fog:["#1A1210",.02],fov:34},e=>{let n=Fc(e),s=De(e,0,-5),r=document.createElement("canvas");r.width=800,r.height=200;let o=r.getContext("2d"),a=new Ke(r);a.colorSpace=ye;let l=u=>{o.clearRect(0,0,800,200),o.fillStyle=u?"#4A4A58":"#C21A1A",o.beginPath(),o.roundRect(10,10,780,180,90),o.fill(),o.fillStyle="#fff",o.font="900 80px Inter",o.textAlign="center",o.textBaseline="middle",o.fillText(u?"INSCRITO \u2713":"INSCREVER-SE",400,104),a.needsUpdate=!0},c=new Z(new Ft(3,.75),new Lt({map:a,emissiveMap:a,emissive:"#fff",emissiveIntensity:.6,transparent:!0}));c.position.set(0,3.2,-6),e.add(c);let h=-1;return(u,d,f)=>{n.upd(d);let g=d>2.6?1:0;return g!==h&&(l(g),h=g),c.scale.setScalar(1+(d>2.5&&d<2.9?Math.sin((d-2.5)/.4*Math.PI)*.1:0)),Ot(f,[[0,[0,2.2,0]],[7.2,[0,2,-1.2]]],[[0,[0,2.4,-6]],[7.2,[0,2.2,-6]]],d),s.face(f),s.pose({armL:[10,6],armR:d<2.6?[130,20]:[10,6]}),s.eye(d<4?"happy":"smug"),{focus:f.position.distanceTo(s.root.position),range:3,blur:10,bloom:.45,bloomT:.8,vig:.5}}})}function Jo(i,t={}){Gn(i,{z:-200,w:600,y:-2,seed:t.seed||12,noite:t.noite,stops:t.stops}),ns(i,20,120,-40);let e=[];for(let n=0;n<8;n++)for(let s of[-1,1]){let r=Vn(70+n*2+(s>0?1:0)+(t.seed||0),6,2+(n+(s>0?1:0))%2,{night:t.noite,cruz:t.cruz&&(n+(s>0?1:0))%3===0});r.position.set(s*6.2,0,-4-n*6.4),r.rotation.y=-s*Math.PI/2,i.add(r),e.push(r)}return e}function Qo(i,t,e,n,s=1){let r=new Z(new Ee(.35*s,.25*s,.18*s,24),G("#B8683A"));r.position.set(t,e+.09*s,n),i.add(r);let o=new Z(new an(.31*s,24),new Lt({color:"#9FD8F0",roughness:.05,metalness:.2}));o.rotation.x=-Math.PI/2,o.position.set(t,e+.17*s,n),i.add(o);let a=N(.14*s,.06*s,.08*s,"#F4EEDC",t+.45*s,e+.03*s,n);return i.add(a),{b:r,a:o}}var V2=()=>Mt(128,160,i=>{i.fillStyle="#1C1C25",i.beginPath(),i.roundRect(30,60,70,90,20),i.fill();for(let t=0;t<4;t++)i.beginPath(),i.roundRect(30+t*18,6+Math.abs(t-1.5)*8,14,64,7),i.fill();i.beginPath(),i.roundRect(90,70,30,14,7),i.fill()});function Rd(i,t){return Bt(i,t,{bg:"#A8CCE8",fog:["#D8D0C0",.012],fov:34,far:900},e=>{Jo(e,{seed:20}),qe(e,{ki:3,pos:[-10,20,10],r:40,hemi:1});let n=De(e,0,-6),s=[["mae","long","#3A2418",-3.6,-10],["parteira","bun","#5A3A22",3.6,-13],["mae","bun","#2a1b18",-3.4,-16]].map(([r,o,a,l,c])=>{let h=ne(e,r,o,a,l,c);return h.tint("#FFF0E0"),h});return(r,o,a)=>{let l=-6-o*.9;return n.root.position.z=l,n.walk(o,.8,.8),n.face(a),n.eye(o<3?"look":"lookl"),s.forEach(c=>{c.face(a),c.eye("sad"),c.pose({armL:[20,-110],armR:[20,-110]})}),Ot(a,[[0,[1.4,1.5,-1]],[6.7,[1.2,1.6,-6]]],[[0,[0,1.3,-8]],[6.7,[0,1.3,-14]]],o),{focus:a.position.distanceTo(n.root.position),range:3,blur:10,bloom:.25,bloomT:.95,vig:.42,sat:.85}}})}function Cd(i,t){return Bt(i,t,{bg:"#0E0808",fog:["#1A1010",.03],fov:32},e=>{let n=Ne(e,{lareiraX:3.6,noite:!0});e.add(N(2.2,.4,1.6,G("#6A4A2E"),-1,.2,-2.6)),e.add(N(2.1,.2,1.5,G("#E2D6C0"),-1,.5,-2.6)),e.add(N(2.1,.08,1.2,G("#5A4A6A"),-.8,.62,-2.5));let s=ne(e,"mae","long","#3A2418",-1.5,-2.7,-.3);s.tint("#C8C0D0");let r=[Be(e,-2.4,.9,-3.2),Be(e,.6,.9,-2)];e.add(N(.5,.9,.5,G("#5A3A22"),-2.4,.45,-3.2)),e.add(N(.4,.9,.4,G("#5A3A22"),.6,.45,-2));let o=ne(e,"campones",null,null,.5,-2.8);return o.tint("#E0D0C8"),(a,l,c)=>(n.upd(l),r.forEach(h=>h.upd(l)),Ot(c,[[0,[.6,1.4,1.6]],[4.9,[.2,1.3,.8]]],[[0,[-1,.9,-2.6]],[4.9,[-1,1,-2.6]]],l),s.face(c),s.eye("shut"),s.pose({head:-10}),o.face(c),o.eye("sad"),o.pose({armL:[20,-120],armR:[20,-120],head:10}),{focus:c.position.distanceTo(s.root.position),range:1.8,blur:13,bloom:.45,bloomT:.78,vig:.7,sat:.7})})}function Pd(i,t){return Bt(i,t,{bg:"#2A1A10",fog:["#2A1A10",.02],fov:30},e=>{let n=Ne(e,{lareiraX:-9});e.add(N(2,.1,1.2,G("#6A4A2E"),0,.9,-2));let s=Qo(e,0,.95,-2,1.2),r=V2(),o=[pe(r,.22,.28),pe(r,.22,.28)];o.forEach(h=>e.add(h)),o[1].scale.x=-1;let a=Qt(2),l=[];for(let h=0;h<24;h++){let u=new Z(new Ze(.015,6,4),new Lt({color:"#CFEFFF",emissive:"#6AB8E0",emissiveIntensity:.4}));e.add(u),l.push({g:u,vx:(a()-.5)*.8,vy:a()*1.2,p:a()})}let c=[];for(let h=0;h<16;h++){let u=new Z(new Ze(.03+a()*.03,8,6),new Lt({color:"#FFFFFF",transparent:!0,opacity:.8}));e.add(u),c.push({s:u,x:(a()-.5)*.4,p:a()*6})}return(h,u,d)=>{n.upd(u);let f=Math.sin(u*9);return o[0].position.set(-.08+f*.05,1.2,-1.95),o[1].position.set(.08-f*.05,1.2,-1.93),o.forEach(g=>{g.rotation.z=f*.2,Ue(g,d)}),l.forEach(g=>{let y=(u*1.4+g.p)%1;g.g.position.set(g.vx*y*.5,1.1+g.vy*y*.3-y*y*.5,-1.95)}),c.forEach(g=>{g.s.position.set(g.x+Math.sin(u+g.p)*.03,1.12+Math.abs(Math.sin(u*2+g.p))*.08,-1.95)}),Ot(d,[[0,[.3,1.6,-.6]],[6.1,[.1,1.5,-1]]],[[0,[0,1.1,-2]],[6.1,[0,1.15,-2]]],u),{focus:d.position.distanceTo(new C(0,1.15,-1.95)),range:.8,blur:12,bloom:.4,bloomT:.82,vig:.55}}})}function Id(i,t){return Bt(i,t,{bg:"#C8C8C0",fog:["#D8D4CC",.02],fov:34},e=>{let n=new Z(new Ft(30,30),G("#8A7A6A",{roughness:.5}));n.rotation.x=-Math.PI/2,n.position.z=-8,n.receiveShadow=!0,e.add(n),e.add(N(30,6,.3,G("#E8E0D0"),0,3,-10));for(let a of[-1,1])e.add(N(.3,6,30,G("#E0D8C8"),a*6,3,-6));for(let a=0;a<4;a++){let l=new Z(new Ft(1.2,2.4),new ue({color:"#F4F0E0"}));l.position.set(-4.5+a*3,3,-9.8),e.add(l),Ii(e,-4.5+a*3,2.4,-7,1.2,5,.3,"#FFF4D8",.1).rotation.x=-.6}for(let a=0;a<6;a++)for(let l of[-1,1])e.add(N(.9,.5,2,G("#E8E4DA"),l*4.6,.5,-1-a*1.4)),e.add(N(.9,.1,.3,G("#F4F2EE"),l*4.6,.8,-1.8-a*1.4));let s=ne(e,"terno",null,null,-.8,-4);s.tint("#FFFFFF");let r=Qo(e,.4,.9,-4.2,1);e.add(N(.6,.9,.6,G("#5A3A22"),.4,.45,-4.2));let o=ci(e,2.2,1.4,(a,l,c,h)=>{a.fillStyle="#3A2A1A",a.font="700 48px Caveat",a.fillText("mortes na ala",60,80),a.strokeStyle="#3A2A1A",a.lineWidth=4,a.beginPath(),a.moveTo(80,120),a.lineTo(80,620),a.lineTo(980,620),a.stroke(),a.strokeStyle="#C21A1A",a.lineWidth=10,a.beginPath();let u=[[120,180],[300,170],[460,160],[600,560],[800,580],[960,570]],d=Math.max(2,Math.floor(l*u.length)+1);a.moveTo(...u[0]);for(let f=1;f<Math.min(d,u.length);f++)a.lineTo(...u[f]);a.stroke(),a.fillStyle="#C21A1A",a.font="900 52px Fraunces",a.fillText("18%",140,160),l>.8&&a.fillText("2%",820,540)});return o.position.set(2.6,2.6,-9.8),qe(e,{ki:2.4,pos:[-10,20,10],r:20,hemi:1.1}),(a,l,c)=>(o.paint(At(3,7.5,l)),Ot(c,[[0,[-1.6,1.7,3]],[4,[0,1.8,0]],[8.8,[1.8,2.4,-6]]],[[0,[-.6,1.3,-4]],[4,[.6,1.6,-5]],[8.8,[2.6,2.6,-9.8]]],l),s.face(c),s.eye(l<4?"look":"happy"),s.pose({armR:[50,-40],armL:[50,-40],head:6}),{focus:Gt(5,c.position.distanceTo(o.position),At(4,7,l)),range:2.4,blur:11,bloom:.3,bloomT:.92,vig:.45,sat:.8})})}function Fd(i,t){return Bt(i,t,{bg:"#2A1A10",fog:["#3A2414",.02],fov:32},e=>{let n=Ne(e,{lareiraX:-3.4});e.add(N(1.4,.9,.8,G("#5A3A22"),.2,.45,-2.4)),Qo(e,.2,.9,-2.4,1.1);let s=De(e,-.9,-2.2),r=ne(e,"parteira","bun","#C8C8C8",1.3,-2.3);r.tint("#FFE8D0"),qo(r);let o=pe(Mt(128,128,a=>{a.clearRect(0,0,128,128),a.fillStyle="#C9A04A",a.fillRect(54,10,20,108),a.fillRect(24,36,80,18)}),.3,.3,{blend:!0});return e.add(o),(a,l,c)=>{n.upd(l),Ot(c,[[0,[.2,1.5,2.4]],[13.4,[.2,1.45,1.1]]],[[0,[.2,1.3,-2.3]],[13.4,[.2,1.35,-2.3]]],l),s.face(c),s.pose({armL:[10,6],armR:l<6?[70+Math.sin(l*6)*15,-10]:[40,-60]}),s.eye(l<2.6?"look":l<6?"smug":"happy"),r.face(c);let h=l>8.5;return r.pose({armL:h?[40,-60]:[10,6],armR:h?[40,-60]:[10,6],head:h?8:Math.sin(l*2)*4}),r.eye(l<6?"look":"happy"),o.visible=l>5.3&&l<8.6,o.position.set(-.5,2.1,-2.2),o.material.opacity=At(5.3,5.6,l)*(1-At(8.2,8.6,l)),Ue(o,c),{focus:c.position.distanceTo(new C(.2,1.3,-2.3)),range:2,blur:12,bloom:.4,bloomT:.82,vig:.5}}})}function Dd(i,t){return Bt(i,t,{bg:"#F2D9B0",fog:["#E8D8C0",.012],fov:34,far:900},e=>{Jo(e,{seed:30,stops:[[0,"#6FA7D8"],[.6,"#F2D0A8"],[1,"#FFE8C0"]]}),qe(e,{ki:3.2,key:"#FFD8A0",pos:[-10,14,10],r:40,hemi:1.1});let n=[[-2.4,-6,"mae","long","#3A2418"],[-.8,-8,"parteira","bun","#5A3A22"],[1.2,-7,"mae","bun","#2a1b18"],[2.6,-9,"mae","bob","#5A3A22"]].map(([o,a,l,c,h],u)=>{let d=ne(e,l,c,h,o,a);d.tint("#FFF4E8");let f=li(e,o+.02,1.18,a+.22,.9);return d.b=f,d.ph=u,d}),s=De(e,4.2,-4.6),r=Yo(e,80,[-4,5,.5,4,-10,-3],3,"#FFE8B0");return(o,a,l)=>(r(a),n.forEach(c=>{c.face(l),c.eye("happy"),c.pose({armL:[30,-100],armR:[30,-100],head:Math.sin(a*2+c.ph)*4}),c.b.face(l),c.b.olhos(Math.sin(a+c.ph)>.5?"happy":"open")}),s.face(l),s.eye(a<3?"look":"happy"),Ot(l,[[0,[0,1.4,1.5]],[6.8,[2.6,1.5,-.4]]],[[0,[0,1.3,-7]],[6.8,[3.6,1.4,-4.6]]],a),{focus:l.position.distanceTo(a<4?n[1].root.position:s.root.position),range:3,blur:10,bloom:.35,bloomT:.9,vig:.38})})}function Ld(i,t){return Bt(i,t,{bg:"#A8C0D8",fog:["#C8C8C0",.012],fov:34,far:900},e=>{let n=In(e,-200,900,400,[[0,"#6FA7D8"],[.6,"#C8D8E0"],[1,"#F4E8D0"]]);Gn(e,{z:-180,w:520,y:-2,seed:40}),ns(e,30,30,-4);let s=Vn(51,8,2);s.position.set(-4,0,-9),e.add(s);let r=Vn(52,6,2);r.position.set(4.6,0,-9),e.add(r),es(e,1.6,-7,1.4,void 0,2);let o=Gs(e,0,-3),a=[[-1.4,-2.6,"campones2",null],[1.2,-2.4,"mae","bob"],[-2.4,-3.4,"campones",null],[2.2,-3.2,"mae","long"]].map(([h,u,d,f],g)=>{let y=ne(e,d,f,"#3A2418",h,u,0,.58);return y.tint("#FFF0E0"),y.ph=g,y}),l=kn(e,20,[0,18,-60],{col:"#3A3440",size:30,rise:6,spread:30,seed:4,life:6}),c=qe(e,{ki:3,pos:[-10,20,10],r:20,hemi:1});return(h,u,d)=>{let f=At(4.5,8.5,u);return c.intensity=Gt(3,.8,f),l(f>.05?u:-99),a.forEach(g=>{g.face(d),f<.5?g.cheer(u,g.ph,.6):g.pose({armL:[20,-110],armR:[20,-110]}),g.eye(f<.5?"happy":"wide")}),o.face(d),o.eye(f<.5?"happy":"look"),o.pose({armL:[20,-20],armR:[20,-20],head:f*8}),Ot(d,[[0,[0,1.3,3.4]],[9.4,[.4,1.6,4.6]]],[[0,[0,1,-3]],[9.4,[0,3.4,-20]]],u),{focus:d.position.distanceTo(o.root.position),range:4,blur:10,bloom:.25,bloomT:.95,vig:Gt(.4,.65,f),sat:Gt(1,.6,f),exposure:Gt(1,.8,f)}}})}function Ud(i,t){return Bt(i,t,{bg:"#4A4A50",fog:["#5A5658",.03],fov:34,far:900},e=>{Jo(e,{seed:50,cruz:!0,stops:[[0,"#4A4A58"],[.6,"#7A7A80"],[1,"#9A948C"]]}),qe(e,{ki:1.2,key:"#C8C8D0",pos:[-10,20,10],r:40,hemi:.7});let n=new Nt;n.add(N(2.2,.3,1.2,G("#5A3A22"),0,.7,0));for(let l of[-1,1]){let c=new Z(new gn(.4,.06,6,16),G("#3A2414"));c.position.set(-.4,.4,l*.65),n.add(c)}for(let l=0;l<3;l++){let c=new Z(new Zi(.18,1.1,4,8),G("#D8D0C0"));c.rotation.z=Math.PI/2,c.position.set(0,1+l*.12,-.35+l*.35),n.add(c)}n.position.set(-1.5,0,-9),e.add(n);let s=ne(e,"padre",null,null,2.2,-6.2);s.tint("#E8E0E0");let r=N(.4,.05,.3,G("#5A1A1A"),0,0,0);e.add(r);let o=kn(e,16,[0,1,-14],{col:"#6A6466",size:4,rise:4,spread:6,seed:2,life:5}),a=Qt(5);for(let l=0;l<6;l++)Pc(e,(a()-.5)*6,-3-a()*10,.45);return(l,c,h)=>{o(c),n.position.x=-1.5+c*.25,s.face(h),s.eye("sad");let u=Math.sin(c*8);return s.pose({armL:[30,-100],armR:[40+u*8,-90],head:10}),r.position.set(s.root.position.x,1.1,s.root.position.z+.2),Ot(h,[[0,[-.4,1.6,2]],[11,[1.2,1.7,-2.6]]],[[0,[0,1.3,-10]],[11,[2.2,1.3,-6.2]]],c),{focus:h.position.distanceTo(c<5?n.position:s.root.position),range:3,blur:10,bloom:.2,bloomT:1,vig:.65,sat:.45}}})}function Nd(i,t){return Bt(i,t,{bg:"#1A1418",fog:["#2A2226",.02],fov:34,far:600},e=>{Pi(e,1e3,200,5);let n=Vn(61,10,3,{night:!0,col:"#C8BCA8"});n.position.set(0,0,-6),e.add(n),ns(e,30,30,-2,"#6A6058");let s=[];[[-3.33,1.5],[0,1.5],[3.33,1.5],[-3.33,4.3],[0,4.3],[3.33,4.3],[-3.33,7.1],[3.33,7.1]].forEach(([a,l],c)=>{let h=new Nt;for(let d of[-1,1]){let f=N(.45,1.2,.06,G("#3A2A1A"),d*.23,0,0);h.add(f)}h.position.set(a,l,-3.4),e.add(h),s.push(h);let u=Fe("#FFC67A",.4,.8);u.position.set(a,l-.3,-3.45),e.add(u),h.v=u});let r=kn(e,12,[0,.5,-2],{col:"#B8B0C0",size:2,rise:5,spread:3,seed:8,life:4});e.add(new We("#3A3A5A","#0A0808",.5));let o=new Ri("#8A8AB8",.8);return o.position.set(-5,10,10),e.add(o),(a,l,c)=>(r(l),s.forEach((h,u)=>{let d=At(3+u*.35,3.4+u*.35,l);h.children.forEach((f,g)=>{f.position.x=(g?1:-1)*Gt(.7,.23,d)}),h.v.material.opacity=Gt(.8,.25,d)}),Ot(c,[[0,[0,3,10]],[8.1,[0,4,7]]],[[0,[0,4,-6]],[8.1,[0,4.4,-6]]],l),{focus:11,range:8,blur:8,bloom:.5,bloomT:.75,vig:.6,sat:.6})})}function Bd(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.025],fov:32},e=>{let n=Ne(e,{lareiraX:-3.4}),s=Qt(7),r=[];for(let u=0;u<5;u++){let d=Pc(e,-1+u*.5,-1.2-s()*.6,.55);r.push({r:d,x:d.position.x,p:s()*6})}let o=[];for(let u=0;u<30;u++){let d=new Z(new Ze(.012,5,4),G("#2A1A10"));e.add(d),o.push({p:d,i:u%5,a:s()*6,h:s()})}let a=Gs(e,1.4,-2.4),l=new Nt;l.add(N(.04,1.3,.04,"#B8864A",0,.65,0)),l.add(N(.36,.14,.08,"#E9B44C",0,.05,0)),e.add(l);let c=N(.4,.1,.3,G("#E8E0D0"),-3.4,1.05,-3.4);e.add(c);let h=ne(e,"campones2",null,null,2.6,-3,0,.58);return h.tint("#FFF0E0"),(u,d,f)=>{n.upd(d);let g=d<2.6?0:1,y=At(5,7,d);r.forEach(p=>{p.r.position.x=p.x-y*6+Math.sin(d*6+p.p)*.05,p.r.position.y=.17+Math.abs(Math.sin(d*10+p.p))*.02,Ue(p.r,f)}),o.forEach(p=>{let E=r[p.i].r;p.p.position.set(E.position.x+Math.cos(d*9+p.a)*.2,E.position.y+.1+Math.abs(Math.sin(d*12+p.a))*.15*p.h,E.position.z+Math.sin(d*7+p.a)*.1)}),c.position.y=1.05+Math.sin(d*3)*.03,Ot(f,g?[[2.6,[.6,1.4,1.2]],[11.1,[.4,1.5,.4]]]:[[0,[-.2,.45,.4]],[2.6,[-.3,.5,.2]]],g?[[2.6,[.4,1,-2.4]],[11.1,[.6,1.1,-2.6]]]:[[0,[0,.2,-1.4]],[2.6,[-.2,.2,-1.4]]],d),a.face(f);let m=Math.sin(d*5);return a.pose({armL:[30,-60],armR:[30,-60],lean:m*4,head:6}),a.eye(d<6?"angry":"look"),l.position.set(a.root.position.x+.25+m*.2,0,a.root.position.z+.2),l.rotation.z=-.3-m*.2,h.face(f),h.cheer(d,1,.4),h.eye("happy"),{focus:d<2.6?.9:f.position.distanceTo(a.root.position),range:d<2.6?.6:2.4,blur:12,bloom:.4,bloomT:.82,vig:.55}}})}function Od(i,t){return Bt(i,t,{bg:"#F2D9B0",fog:["#E8D8C0",.012],fov:34,far:900},e=>{Jo(e,{seed:60,stops:[[0,"#6FA7D8"],[.6,"#F2D0A8"],[1,"#FFE8C0"]]});let n=qe(e,{ki:1.2,key:"#C8C8D0",pos:[-10,14,10],r:40,hemi:.8}),s=[ne(e,"parteira","bun","#5A3A22",-3.6,-8),ne(e,"campones",null,null,-3.4,-10)];s.forEach(l=>l.tint("#E8E0D8"));let r=Gs(e,.6,-6.4),o=[[-.6,-6.8,"mae","long",1],[1.8,-6.8,"campones",null,1],[-.2,-5.8,"campones2",null,.58],[1.2,-5.7,"mae","bob",.55],[2.6,-5.9,"mae","long",.58]].map(([l,c,h,u,d],f)=>{let g=ne(e,h,u,"#3A2418",l,c,0,d);return g.tint("#FFF4E8"),g.ph=f,g}),a=Fe("#FFE0A0",6,0);return a.position.set(.8,1.4,-6.6),e.add(a),(l,c,h)=>{let u=At(2.6,3.6,c);return n.intensity=Gt(1.2,3.2,u),a.material.opacity=u*.35,s.forEach(d=>{d.root.visible=u<.5,d.face(h),d.eye("angry"),d.pose({armL:[20,-110],armR:[70,-140],head:8})}),o.forEach(d=>{d.root.visible=u>.5,d.face(h),d.eye("happy"),d.pose({head:Math.sin(c*2+d.ph)*4})}),r.face(h),r.eye(u<.5?"flat":"happy"),Ot(h,[[0,[-1.6,1.6,-3]],[2.6,[-1.4,1.6,-3.4]],[3.6,[.8,1.5,-.6]],[9.2,[.8,1.6,-1.6]]],[[0,[-3.4,1.5,-9]],[2.6,[-3.4,1.5,-9]],[3.6,[.8,1.2,-6.4]],[9.2,[.8,1.3,-6.4]]],c),{focus:h.position.distanceTo(u<.5?s[0].root.position:r.root.position),range:3,blur:10,bloom:.35,bloomT:.9,vig:.42,sat:Gt(.6,1,u)}}})}var G2=i=>Mt(200,200,t=>{if(t.fillStyle="#10162Bdd",t.beginPath(),t.arc(100,100,94,0,7),t.fill(),t.strokeStyle="#F2C14E",t.lineWidth=6,t.stroke(),t.lineCap="round",i===0){t.fillStyle="#F4EEDC",t.beginPath(),t.roundRect(60,70,50,70,14),t.fill();for(let e=0;e<4;e++)t.beginPath(),t.roundRect(60+e*13,34+Math.abs(e-1.5)*6,10,46,5),t.fill();t.fillStyle="#9FD8FF";for(let[e,n]of[[130,60],[140,100],[126,130]])t.beginPath(),t.moveTo(e,n-14),t.quadraticCurveTo(e+12,n+4,e,n+8),t.quadraticCurveTo(e-12,n+4,e,n-14),t.fill()}if(i===1){t.fillStyle="#5A5A62",t.beginPath(),t.arc(100,120,44,0,Math.PI),t.fill(),t.fillRect(52,108,96,14),t.strokeStyle="#E8E4DA",t.lineWidth=6;for(let e of[76,100,124])t.beginPath(),t.moveTo(e,96),t.quadraticCurveTo(e-12,76,e,56),t.quadraticCurveTo(e+12,40,e,30),t.stroke();t.fillStyle="#FF8A30",t.beginPath(),t.moveTo(70,172),t.lineTo(100,150),t.lineTo(130,172),t.fill()}i===2&&(t.drawImage(Tr,30,50,140,88),t.strokeStyle="#E9483A",t.lineWidth=12,t.beginPath(),t.arc(100,100,80,0,7),t.moveTo(44,44),t.lineTo(156,156),t.stroke())}),Tr=null;function Hd(i,t){return Bt(i,t,{bg:"#0A0C24",fog:["#141838",.004],fov:34,far:900},e=>{Gn(e,{noite:!0,z:-280,w:700,y:-6,seed:9}),Pi(e,3e3,300,11);let n=Fe("#E8ECFF",30,.9);n.position.set(60,70,-260),n.material.fog=!1,e.add(n);let s=Ws(e,600,300,-150,-.4),r=new Z(new Ft(200,30),G("#5A5248"));r.rotation.x=-Math.PI/2,r.position.set(0,0,10),e.add(r),e.add(N(200,1.2,1,G("#4A4238"),0,-.4,-5));for(let d=0;d<10;d++)e.add(N(.3,1.2,.3,"#3A2A1A",-20+d*4.2,.3,-4.8));let o=[];for(let d=0;d<13;d++){let f=Xs(1);f.traverse(g=>{g.material&&(g.material=g.material.clone(),g.material.transparent=!0,g.material.opacity=0,g.material.depthWrite=!1)}),f.position.set(-30+d%5*14,-.4,-40-Math.floor(d/5)*22),f.rotation.y=-Math.PI/2+.15,e.add(f),o.push(f)}let a=Gs(e,.2,-3.6,-.2),l=Be(e,-.8,0,-3.4,1.4);Tr||(Tr=document.createElement("canvas"),Tr.width=256,Tr.height=160);let c=[0,1,2].map(d=>{let f=pe(G2(d),.8,.8);return e.add(f),f}),h=[16.6,17.6,18.8];e.add(new We("#3A3A6A","#0A0808",.55));let u=new Ri("#A8B8FF",.8);return u.position.set(30,20,-30),e.add(u),(d,f,g)=>{s.offset.x=f*.02,l.upd(f);let y=At(4,7,f)*(1-At(12,15,f));return o.forEach((m,p)=>{m.traverse(E=>{E.material&&(E.material.opacity=y*.35)}),m.position.z=-40-Math.floor(p/5)*22-f*.6}),c.forEach((m,p)=>{let E=At(h[p],h[p]+.3,f);m.visible=E>.02,m.scale.setScalar(E),m.position.set(-1.1+p*1.1,2.6,-3.4),Ue(m,g)}),a.face(g),a.eye(f<7?"look":f<13?"sad":"happy"),a.pose({armL:[10,6],armR:[10,6],head:Math.sin(f*.6)*3}),Ot(g,[[0,[3.5,1.6,2]],[8,[1.2,1.4,0]],[15.5,[.3,1.6,1.8]],[19.9,[.2,2,2.6]]],[[0,[0,1.2,-3.6]],[8,[-6,3,-40]],[15.5,[0,1.6,-3.6]],[19.9,[0,2.1,-3.6]]],f),{focus:Gt(g.position.distanceTo(a.root.position),40,At(5,8,f)*(1-At(13,15.5,f))),range:4,blur:10,bloom:.5,bloomT:.75,vig:.55}}})}function zd(i,t){return Bt(i,t,{bg:"#E8E0D0",fog:["#E8E0D0",.015],fov:32},e=>{$o(e);let n=new Nt,s=G("#36AEA2");n.add(N(2.8,.46,1,s,0,.3,0)),n.add(N(2.8,.9,.3,s,0,.78,-.4));for(let c of[-1.5,1.5])n.add(N(.3,.7,1.05,G("#43C4B4"),c,.42,0));n.position.set(-.6,0,-2.4),e.add(n);let r=De(e,-.6,-1.9,-.1),o=Zo(.16,.32);e.add(o);let a=new yn("#AFC8FF",2,2);e.add(a);let l=[];for(let c=0;c<18;c++){let h=Fe("#FFE8A0",.08,0);e.add(h),l.push(h)}return(c,h,u)=>{o.paint("s"+Math.floor(h*2),f=>{f.fillStyle="#0E0E14",f.fillRect(0,0,540,1110);let g=h*120%300;for(let y=-1;y<5;y++)f.fillStyle=["#36AEA2","#E9483A","#F2C14E","#4A86C7"][(y+8+Math.floor(h*2))%4],f.fillRect(30,60+y*300-g,480,260)}),o.position.set(-.35,1.18,-1.7),o.rotation.set(-.3,0,0),a.position.set(-.35,1.4,-1.3);let d=At(10,12,h)*(1-At(17,19,h));return l.forEach((f,g)=>{let y=g/18*6.283+h;f.position.set(-.6+Math.cos(y)*.5,1.9+Math.sin(y)*.25,-1.85),f.material.opacity=d}),Ot(u,[[0,[-.6,1.4,2.4]],[12,[-.6,1.45,.5]],[19,[-.6,1.5,.2]]],[[0,[-.6,1.2,-2]],[12,[-.6,1.5,-2]],[19,[-.6,1.6,-2]]],h),r.face(u),r.pose({armL:[20,-80],armR:[20,-80],head:h<12?8:0}),r.eye(h<5.4?"down":h<12?"look":h<15?"wide":"flat"),{focus:u.position.distanceTo(r.root.position),range:1.6,blur:12,bloom:.4,bloomT:.82,vig:Gt(.4,.65,At(10,19,h))}}})}function kd(i,t){return Bt(i,t,{bg:"#BFD8EE",fog:["#E8E0D8",.01],fov:34},e=>{Zu(e,{seed:77});let n=De(e,5.4,-3,.14),s=Vu(e,"roxo","old","#E8E8EE",6.4,-3.2,.14);s.tint("#FFFFFF");let r=[N(.3,.4,.2,G("#E8D8B8"),0,0,0),N(.3,.4,.2,G("#E8D8B8"),0,0,0)];return r.forEach(o=>e.add(o)),(o,a,l)=>{let c=At(1.6,2.4,a);n.face(l),s.face(l),n.pose({armL:[20,6],armR:[Gt(10,30,c),Gt(6,-20,c)]}),n.eye("happy"),s.pose({armL:[10,6],armR:[Gt(30,10,c),Gt(-20,6,c)],head:6}),s.eye(c>.5?"happy":"sad");let h=-3-At(2.6,6,a)*1.6;return n.root.position.z=h,s.root.position.z=h-.2,a>2.6&&(n.walk(a,.6,.5),s.walk(a,.5,.4)),r[0].position.set(Gt(s.root.position.x+.35,n.root.position.x+.4,c),.75,s.root.position.z+.1),r[1].position.set(n.root.position.x+.45,.75,n.root.position.z+.1),r[1].visible=c>.5,Ot(l,[[0,[3.6,1.5,1.6]],[6.1,[3.8,1.5,-.6]]],[[0,[5.9,1.2,-3]],[6.1,[5.9,1.2,-4.6]]],a),{focus:l.position.distanceTo(n.root.position),range:3,blur:10,bloom:.25,bloomT:.95,vig:.4}}})}function Vd(i,t){return Bt(i,t,{bg:"#1A0C08",fog:["#2A1410",.02],fov:34},e=>{let n=Ne(e,{lareiraX:-3.4,noite:!0});e.add(N(4.4,.1,1.4,G("#7A5232"),.4,.85,-2.2));for(let[c,h]of[[-1.6,-2.7],[2.4,-2.7],[-1.6,-1.7],[2.4,-1.7]])e.add(N(.1,.82,.1,"#4A3220",c,.41,h));let s=[-.8,.4,1.6].map(c=>Be(e,c,.9,-2.2,1.2));for(let c=0;c<6;c++){let h=new Z(new Ee(.16,.12,.05,16),G("#E8DCC4"));h.position.set(-1.2+c*.65,.93,-1.8),e.add(h)}let r=new Z(new Zi(.12,.4,4,10),G("#C8904A"));r.rotation.z=Math.PI/2,r.position.set(.4,1,-2.4),e.add(r),Qo(e,2.9,.9,-2.4,.8);let o=Gs(e,-2.2,-2.3),a=[];return[["mae","long",-.9,-2.9],["campones2",null,-.2,-2.95],["mae","bob",.5,-2.9],["campones",null,1.2,-2.95],["mae","bun",1.9,-2.9],["campones2",null,2.6,-2.95]].forEach(([c,h,u,d],f)=>{let g=ne(e,c,h,"#3A2418",u,d,-.15,.62+f%3*.08);g.tint("#FFF0E0"),g.ph=f,a.push(g)}),(c,h,u)=>(n.upd(h),s.forEach(d=>d.upd(h)),a.forEach(d=>{d.face(u),d.eye(Math.sin(h*1.5+d.ph)>-.3?"happy":"open"),d.pose({head:Math.sin(h*2+d.ph)*5,armL:[20,-60],armR:[20,-60]})}),o.face(u),o.eye("happy"),o.pose({armL:[20,-60],armR:[20,-60]}),Ot(u,[[0,[.4,1.6,2.6]],[9.5,[.2,1.8,3.8]]],[[0,[.2,1.2,-2.6]],[9.5,[.2,1.3,-2.6]]],h),{focus:u.position.distanceTo(new C(.2,1.2,-2.6)),range:3,blur:10,bloom:.5,bloomT:.75,vig:.5})})}function Gd(i,t){return Bt(i,t,{bg:"#1A1638",fog:["#1A1638",.02],fov:34},e=>{Pi(e,1500,200,3),Sr(e,0,10,-60,120,"#C78BFF",4,.12);let n=new Z(new Ft(40,40),G("#2A2450",{roughness:.4,metalness:.2}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n);let s=De(e,0,-.6),o=["1500","1822","1888","1969","2100","3000"].map((l,c)=>{let h=pe(Mt(320,180,u=>{u.fillStyle="#10162Bee",u.beginPath(),u.roundRect(6,6,308,168,24),u.fill(),u.strokeStyle=c===0?"#F2C14E":"#8FF0E0",u.lineWidth=6,u.stroke(),u.fillStyle=c===0?"#F2C14E":"#EAF6FF",u.font="900 96px Fraunces",u.textAlign="center",u.textBaseline="middle",u.fillText(l,160,96)}),1.1,.62,{blend:!0});return e.add(h),h}),a=new zn("#FFE8C8",60,12,.6,.5,1.4);return a.position.set(0,5,3),a.target.position.set(0,1,-1),a.castShadow=!0,e.add(a,a.target),e.add(new We("#8A7AC8","#101018",.7)),(l,c,h)=>(o.forEach((u,d)=>{let f=d/6*6.283+c*.3;u.position.set(Math.cos(f)*2.6,2.2+Math.sin(f*2)*.3,-.6+Math.sin(f)*1.2),u.material.opacity=At(.3+d*.2,.6+d*.2,c),Ue(u,h)}),Ot(h,[[0,[0,1.6,5]],[8.8,[.4,1.8,4]]],[[0,[0,1.8,-.6]],[8.8,[0,1.9,-.6]]],c),s.face(h),s.pose({armL:[10,6],armR:c<5?[70+Math.sin(c*2)*10,10]:[25,0],head:c>5?-8:0}),s.eye(c<5?"look":"happy"),{focus:h.position.distanceTo(s.root.position),range:3,blur:8,bloom:.45,bloomT:.8,vig:.5})})}function Wd(i,t){return Bt(i,t,{bg:"#E8E0D0",fog:["#E8E0D0",.015],fov:32},e=>{$o(e);let n=De(e,1.5,-2.9);e.add(N(.6,.05,.4,G("#E8E8EC",{metalness:.3}),1.5,.93,-3.3));let s=new Z(new Ee(.02,.02,.3,8),new Lt({color:"#BFE8FF",transparent:!0,opacity:.8,emissive:"#5FA8D8",emissiveIntensity:.4}));s.position.set(1.5,1.2,-3.45),e.add(s);let r=N(.04,.25,.04,G("#C8CCD4",{metalness:.8}),1.5,1.42,-3.6);e.add(r);let o=document.createElement("canvas");o.width=800,o.height=200;let a=o.getContext("2d"),l=new Ke(o);l.colorSpace=ye;let c=f=>{a.clearRect(0,0,800,200),a.fillStyle=f?"#4A4A58":"#E9483A",a.beginPath(),a.roundRect(10,10,780,180,90),a.fill(),a.fillStyle="#fff",a.font="900 80px Inter",a.textAlign="center",a.textBaseline="middle",a.fillText(f?"INSCRITO \u2713":"INSCREVER-SE",400,104),l.needsUpdate=!0},h=new Z(new Ft(1.8,.45),new Lt({map:l,emissiveMap:l,emissive:"#fff",emissiveIntensity:.6,transparent:!0}));h.position.set(.2,2.6,-2.6),e.add(h);let u=pe(Mt(200,200,f=>{f.fillStyle="#F2C14E",f.beginPath(),f.moveTo(100,30),f.quadraticCurveTo(160,40,160,120),f.lineTo(176,150),f.lineTo(24,150),f.lineTo(40,120),f.quadraticCurveTo(40,40,100,30),f.fill(),f.beginPath(),f.arc(100,168,18,0,7),f.fill()}),.4,.4);u.position.set(1.4,2.6,-2.6),e.add(u);let d=-1;return(f,g,y)=>{let m=g>2.3?1:0;m!==d&&(c(m),d=m),u.rotation.z=g>2.8&&g<4.2?Math.sin(g*30)*.3:0;let p=g>5.3;return h.visible=!p||g<5.6,u.visible=h.visible,s.visible=p,n.face(y),n.pose(p?{armL:[40,-70+Math.sin(g*9)*10],armR:[40,-70-Math.sin(g*9)*10],head:6}:{armL:[10,6],armR:g<2.3?[130,20]:[10,6]}),n.eye(g<7.6?p?"down":"happy":Math.floor(g*3)%4===0?"shut":"happy"),Ot(y,[[0,[.8,1.7,1.6]],[5.3,[1,1.6,.8]],[8.8,[1.3,1.5,-.8]]],[[0,[.8,1.9,-2.6]],[5.3,[1.2,1.5,-2.8]],[8.8,[1.5,1.3,-3]]],g),{focus:y.position.distanceTo(n.root.position),range:2,blur:12,bloom:.4,bloomT:.85,vig:Gt(.4,.7,At(7.6,8.8,g)),exposure:Gt(1,0,At(8,8.8,g))}}})}var Xd=[[Ju,0,3.74],[Qu,3.74,10.17],[Ku,10.17,12.85],[ju,12.85,19.81],[td,19.81,30.42],[ed,30.42,40.14],[nd,40.14,50.53],[id,50.53,56.81],[sd,56.81,59.66],[rd,59.66,73.03],[od,73.03,80.25],[ad,80.25,87.84],[ld,87.84,98.06],[cd,98.06,103.83],[hd,103.83,110.89],[ud,110.89,120.46],[dd,120.46,126.33],[fd,126.33,133.69],[pd,133.69,141.77],[md,141.77,155.34],[gd,155.34,168.97],[yd,168.97,174.08],[vd,174.08,185.53],[_d,185.53,191.92],[Ed,191.92,199.26],[Md,199.26,205.85],[Sd,205.85,209.05],[bd,209.05,213.32],[Td,213.32,226.25],[Ad,226.25,240.31],[xd,240.31,247.82],[wd,247.82,254.97],[Rd,254.97,261.68],[Cd,261.68,266.62],[Pd,266.62,272.73],[Id,272.73,281.56],[Fd,281.56,294.94],[Dd,294.94,301.76],[Ld,301.76,311.12],[Ud,311.12,322.14],[Nd,322.14,330.22],[Bd,330.22,341.34],[Od,341.34,350.54],[Hd,350.54,370.46],[zd,370.46,389.45],[kd,389.45,395.58],[Vd,395.58,405.1],[Gd,405.1,413.9],[Wd,413.9,422.7]];window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(t=>document.fonts.load(t))).catch(()=>{});let i=new Wo(document.getElementById("film3d"));for(let[t,e,n]of Xd)i.add(t(e,n));window.addEventListener("hf-seek",t=>i.render(t.detail.time)),i.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
