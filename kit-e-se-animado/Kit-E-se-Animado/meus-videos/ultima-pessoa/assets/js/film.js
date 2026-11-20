var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var Jl="170";var Pf=0,Ac=1,Ff=2;var Uh=1,Kl=2,ti=3,Ti=0,ze=1,te=2,zn=0,Mi=1,Ge=2,wc=3,Rc=4,If=5,Vi=100,Df=101,Lf=102,Uf=103,Bf=104,Nf=200,Hf=201,Of=202,zf=203,Aa=204,wa=205,kf=206,Gf=207,Vf=208,Wf=209,Xf=210,qf=211,Yf=212,Zf=213,$f=214,Ra=0,Ca=1,Pa=2,Rs=3,Fa=4,Ia=5,Da=6,La=7,Bh=0,Jf=1,Kf=2,kn=0,Qf=1,jf=2,tu=3,eu=4,nu=5,iu=6,su=7;var Nh=300,Cs=301,Ps=302,Ua=303,Ba=304,Po=306,pe=1e3,Xi=1001,Na=1002,yn=1003,ru=1004;var Sr=1005;var Hn=1006,Wo=1007;var qi=1008;var si=1009,Hh=1010,Oh=1011,hr=1012,Ql=1013,ri=1014,On=1015,hn=1016,jl=1017,tc=1018,Fs=1020,zh=35902,kh=1021,Gh=1022,Pn=1023,Vh=1024,Wh=1025,xs=1026,Is=1027,ec=1028,nc=1029,Xh=1030,ic=1031;var sc=1033,Kr=33776,Qr=33777,jr=33778,to=33779,Ha=35840,Oa=35841,za=35842,ka=35843,Ga=36196,Va=37492,Wa=37496,Xa=37808,qa=37809,Ya=37810,Za=37811,$a=37812,Ja=37813,Ka=37814,Qa=37815,ja=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,eo=36492,rl=36494,ol=36495,qh=36283,al=36284,ll=36285,cl=36286;var no=2300,hl=2301,Xo=2302,Cc=2400,Pc=2401,Fc=2402;var ou=3200,zs=3201;var Yh=0,au=1,Ei="",ne="srgb",Fi="srgb-linear",Fo="linear",Ee="srgb";var rs=7680;var Ic=519,lu=512,cu=513,hu=514,Zh=515,du=516,fu=517,uu=518,pu=519,dl=35044;var Dc="300 es",ni=2e3,io=2001,bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qo=Math.PI/180,so=180/Math.PI;function Si(){let i=__sr()*4294967295|0,t=__sr()*4294967295|0,e=__sr()*4294967295|0,n=__sr()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Je(i,t,e){return Math.max(t,Math.min(e,i))}function mu(i,t){return(i%t+t)%t}function Yo(i,t,e){return(1-e)*i+e*t}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var it=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],y=s[0],m=s[3],p=s[6],v=s[1],E=s[4],_=s[7],R=s[2],x=s[5],C=s[8];return r[0]=o*y+a*v+l*R,r[3]=o*m+a*E+l*x,r[6]=o*p+a*_+l*C,r[1]=c*y+h*v+f*R,r[4]=c*m+h*E+f*x,r[7]=c*p+h*_+f*C,r[2]=d*y+u*v+g*R,r[5]=d*m+u*E+g*x,r[8]=d*p+u*_+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,g=e*f+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=u*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zo.makeScale(t,e)),this}rotate(t){return this.premultiply(Zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zo=new Jt;function $h(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gu(){let i=ro("canvas");return i.style.display="block",i}var Lc={};function rr(i){i in Lc||(Lc[i]=!0,console.warn(i))}function yu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function vu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Eu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var re={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ee&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ee&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ei?Fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Uc=[.64,.33,.3,.6,.15,.06],Bc=[.2126,.7152,.0722],Nc=[.3127,.329],Hc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[Fi]:{primaries:Uc,whitePoint:Nc,transfer:Fo,toXYZ:Hc,fromXYZ:Oc,luminanceCoefficients:Bc,workingColorSpaceConfig:{unpackColorSpace:ne},outputColorSpaceConfig:{drawingBufferColorSpace:ne}},[ne]:{primaries:Uc,whitePoint:Nc,transfer:Ee,toXYZ:Hc,fromXYZ:Oc,luminanceCoefficients:Bc,outputColorSpaceConfig:{drawingBufferColorSpace:ne}}});var os,fl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=ro("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ro("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_u=0,oo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($o(s[o].image)):r.push($o(s[o]))}else r=$o(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function $o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mu=0,cn=class i extends bi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Xi,s=Xi,r=Hn,o=qi,a=Pn,l=si,c=i.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Si(),this.name="",this.source=new oo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pe:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pe:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Nh;cn.DEFAULT_ANISOTROPY=1;var Me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,_=(u+1)/2,R=(p+1)/2,x=(h+d)/4,C=(f+y)/4,D=(g+m)/4;return E>_&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=x/n,r=C/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=x/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=D/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-y)/v,this.z=(d-h)/v,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ul=class extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new oo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends ul{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ao=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pl=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],u=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=y;return}if(f!==y||l!==d||c!==u||h!==g){let m=1-a,p=l*d+c*u+h*g+f*y,v=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let R=Math.sqrt(E),x=Math.atan2(R,p*v);m=Math.sin(m*x)/R,a=Math.sin(a*x)/R}let _=a*v;if(l=l*m+d*_,c=c*m+u*_,h=h*m+g*_,f=f*m+y*_,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=R,c*=R,h*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*u-c*d,t[e+1]=l*g+h*d+c*f-a*u,t[e+2]=c*g+h*u+a*d-l*f,t[e+3]=h*g-a*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),d=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*__sr(),e=2*Math.PI*__sr(),n=__sr(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let t=__sr()*Math.PI*2,e=__sr()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jo=new P,zc=new xi,oi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),br.subVectors(this.max,$s),as.subVectors(t.a,$s),ls.subVectors(t.b,$s),cs.subVectors(t.c,$s),ui.subVectors(ls,as),pi.subVectors(cs,ls),Bi.subVectors(as,cs);let e=[0,-ui.z,ui.y,0,-pi.z,pi.y,0,-Bi.z,Bi.y,ui.z,0,-ui.x,pi.z,0,-pi.x,Bi.z,0,-Bi.x,-ui.y,ui.x,0,-pi.y,pi.x,0,-Bi.y,Bi.x,0];return!Ko(e,as,ls,cs,br)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,as,ls,cs,br))?!1:(xr.crossVectors(ui,pi),e=[xr.x,xr.y,xr.z],Ko(e,as,ls,cs,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$n=[new P,new P,new P,new P,new P,new P,new P,new P],wn=new P,Tr=new oi,as=new P,ls=new P,cs=new P,ui=new P,pi=new P,Bi=new P,$s=new P,br=new P,xr=new P,Ni=new P;function Ko(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ni.fromArray(i,r);let a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Su=new oi,Js=new P,Qo=new P,Ai=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Su.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Qo)),this.expandByPoint(Js.copy(t.center).sub(Qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new P,jo=new P,Ar=new P,mi=new P,ta=new P,wr=new P,ea=new P,lo=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jo.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(jo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ar),a=mi.dot(this.direction),l=-mi.dot(Ar),c=mi.lengthSq(),h=Math.abs(1-o*o),f,d,u,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){let y=1/h;f*=y,d*=y,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(jo).addScaledVector(Ar,d),u}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){ta.subVectors(e,t),wr.subVectors(n,t),ea.crossVectors(ta,wr);let o=this.direction.dot(ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);let l=a*this.direction.dot(wr.crossVectors(mi,wr));if(l<0)return null;let c=a*this.direction.dot(ta.cross(mi));if(c<0||l+c>o)return null;let h=-a*mi.dot(ea);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class i{constructor(t,e,n,s,r,o,a,l,c,h,f,d,u,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,d,u,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,f,d,u,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*h,u=o*f,g=a*h,y=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,u=l*f,g=c*h,y=c*f;e[0]=d+y*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,u=l*f,g=c*h,y=c*f;e[0]=d-y*a,e[4]=-o*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,u=o*f,g=a*h,y=a*f;e[0]=l*h,e[4]=g*c-u,e[8]=d*c+y,e[1]=l*f,e[5]=y*c+d,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,u=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-d*f,e[8]=g*f+u,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*f+g,e[10]=d-y*f}else if(t.order==="XZY"){let d=o*l,u=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+y,e[5]=o*h,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*h,e[10]=y*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tu,t,bu)}lookAt(t,e,n){let s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),gi.crossVectors(n,mn),gi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),gi.crossVectors(n,mn)),gi.normalize(),Rr.crossVectors(mn,gi),s[0]=gi.x,s[4]=Rr.x,s[8]=mn.x,s[1]=gi.y,s[5]=Rr.y,s[9]=mn.y,s[2]=gi.z,s[6]=Rr.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],y=n[6],m=n[10],p=n[14],v=n[3],E=n[7],_=n[11],R=n[15],x=s[0],C=s[4],D=s[8],b=s[12],M=s[1],F=s[5],z=s[9],O=s[13],W=s[2],j=s[6],Z=s[10],st=s[14],q=s[3],dt=s[7],Et=s[11],Ft=s[15];return r[0]=o*x+a*M+l*W+c*q,r[4]=o*C+a*F+l*j+c*dt,r[8]=o*D+a*z+l*Z+c*Et,r[12]=o*b+a*O+l*st+c*Ft,r[1]=h*x+f*M+d*W+u*q,r[5]=h*C+f*F+d*j+u*dt,r[9]=h*D+f*z+d*Z+u*Et,r[13]=h*b+f*O+d*st+u*Ft,r[2]=g*x+y*M+m*W+p*q,r[6]=g*C+y*F+m*j+p*dt,r[10]=g*D+y*z+m*Z+p*Et,r[14]=g*b+y*O+m*st+p*Ft,r[3]=v*x+E*M+_*W+R*q,r[7]=v*C+E*F+_*j+R*dt,r[11]=v*D+E*z+_*Z+R*Et,r[15]=v*b+E*O+_*st+R*Ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*l*f-s*c*f-r*a*d+n*c*d+s*a*u-n*l*u)+y*(+e*l*u-e*c*d+r*o*d-s*o*u+s*c*h-r*l*h)+m*(+e*c*f-e*a*u-r*o*f+n*o*u+r*a*h-n*c*h)+p*(-s*a*h-e*l*f+e*a*d+s*o*f-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],g=t[12],y=t[13],m=t[14],p=t[15],v=f*m*c-y*d*c+y*l*u-a*m*u-f*l*p+a*d*p,E=g*d*c-h*m*c-g*l*u+o*m*u+h*l*p-o*d*p,_=h*y*c-g*f*c+g*a*u-o*y*u-h*a*p+o*f*p,R=g*f*l-h*y*l-g*a*d+o*y*d+h*a*m-o*f*m,x=e*v+n*E+s*_+r*R;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/x;return t[0]=v*C,t[1]=(y*d*r-f*m*r-y*s*u+n*m*u+f*s*p-n*d*p)*C,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(f*l*r-a*d*r-f*s*c+n*d*c+a*s*u-n*l*u)*C,t[4]=E*C,t[5]=(h*m*r-g*d*r+g*s*u-e*m*u-h*s*p+e*d*p)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*u+e*l*u)*C,t[8]=_*C,t[9]=(g*f*r-h*y*r-g*n*u+e*y*u+h*n*p-e*f*p)*C,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*u-e*a*u)*C,t[12]=R*C,t[13]=(h*y*s-g*f*s+g*n*d-e*y*d-h*n*m+e*f*m)*C,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*m-e*a*m)*C,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,g=r*f,y=o*h,m=o*f,p=a*f,v=l*c,E=l*h,_=l*f,R=n.x,x=n.y,C=n.z;return s[0]=(1-(y+p))*R,s[1]=(u+_)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(u-_)*x,s[5]=(1-(d+p))*x,s[6]=(m+v)*x,s[7]=0,s[8]=(g+E)*C,s[9]=(m-v)*C,s[10]=(1-(d+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Rn.copy(this);let c=1/r,h=1/o,f=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,e.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ni){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),u,g;if(a===ni)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===io)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ni){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(o-r),d=(e+t)*c,u=(n+s)*h,g,y;if(a===ni)g=(o+r)*f,y=-2*f;else if(a===io)g=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new P,Rn=new Se,Tu=new P(0,0,0),bu=new P(1,1,1),gi=new P,Rr=new P,mn=new P,kc=new Se,Gc=new xi,Gn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var co=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xu=0,Vc=new P,ds=new xi,Kn=new Se,Cr=new P,Ks=new P,Au=new P,wu=new xi,Wc=new P(1,0,0),Xc=new P(0,1,0),qc=new P(0,0,1),Yc={type:"added"},Ru={type:"removed"},fs={type:"childadded",child:null},na={type:"childremoved",child:null},Fe=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Gn,n=new xi,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Jt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Wc,t)}rotateY(t){return this.rotateOnAxis(Xc,t)}rotateZ(t){return this.rotateOnAxis(qc,t)}translateOnAxis(t,e){return Vc.copy(t).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wc,t)}translateY(t){return this.translateOnAxis(Xc,t)}translateZ(t){return this.translateOnAxis(qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cr.copy(t):Cr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Ks,Cr,this.up):Kn.lookAt(Cr,Ks,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(Kn),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ru),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,Au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,wu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Fe.DEFAULT_UP=new P(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new P,Qn=new P,ia=new P,jn=new P,us=new P,ps=new P,Zc=new P,sa=new P,ra=new P,oa=new P,aa=new Me,la=new Me,ca=new Me,_i=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Qn.subVectors(n,e),ia.subVectors(t,e);let o=Cn.dot(Cn),a=Cn.dot(Qn),l=Cn.dot(ia),c=Qn.dot(Qn),h=Qn.dot(ia),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return aa.setScalar(0),la.setScalar(0),ca.setScalar(0),aa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(aa,r.x),o.addScaledVector(la,r.y),o.addScaledVector(ca,r.z),o}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Qn.subVectors(t,e),Cn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Cn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;us.subVectors(s,n),ps.subVectors(r,n),sa.subVectors(t,n);let l=us.dot(sa),c=ps.dot(sa);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,s);let h=us.dot(ra),f=ps.dot(ra);if(h>=0&&f<=h)return e.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(us,o);oa.subVectors(t,r);let u=us.dot(oa),g=ps.dot(oa);if(g>=0&&u<=g)return e.copy(r);let y=u*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ps,a);let m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return Zc.subVectors(r,s),a=(f-h)/(f-h+(u-g)),e.copy(s).addScaledVector(Zc,a);let p=1/(m+y+d);return o=y*p,a=d*p,e.copy(n).addScaledVector(us,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=mu(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ha(o,r,t+1/3),this.g=ha(o,r,t),this.b=ha(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ne){let n=Jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ne){return re.fromWorkingColorSpace(tn.copy(this),t),Math.round(Je(tn.r*255,0,255))*65536+Math.round(Je(tn.g*255,0,255))*256+Math.round(Je(tn.b*255,0,255))}getHexString(t=ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(tn.copy(this),e);let n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=ne){re.fromWorkingColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,s=tn.b;return t!==ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Pr);let n=Yo(yi.h,Pr.h,e),s=Yo(yi.s,Pr.s,e),r=Yo(yi.l,Pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Lt;Lt.NAMES=Jh;var Cu=0,ai=class extends bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Si(),this.name="",this.blending=Mi,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=wa,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ce=class extends ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ke=new P,Fr=new it,Ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),t}};var ho=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fo=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},Pu=0,_n=new Se,da=new Fe,ms=new P,gn=new oi,Qs=new oi,qe=new P,Ie=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($h(t)?fo:ho)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(gn.min,Qs.min),gn.expandByPoint(qe),qe.addVectors(gn.max,Qs.max),gn.expandByPoint(qe)):(gn.expandByPoint(Qs.min),gn.expandByPoint(Qs.max))}gn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)qe.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),qe.add(ms)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new P,l[D]=new P;let c=new P,h=new P,f=new P,d=new it,u=new it,g=new it,y=new P,m=new P;function p(D,b,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),u.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),f.sub(c),u.sub(d),g.sub(d);let F=1/(u.x*g.y-g.x*u.y);isFinite(F)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(F),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(F),a[D].add(y),a[b].add(y),a[M].add(y),l[D].add(m),l[b].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,b=v.length;D<b;++D){let M=v[D],F=M.start,z=M.count;for(let O=F,W=F+z;O<W;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let E=new P,_=new P,R=new P,x=new P;function C(D){R.fromBufferAttribute(s,D),x.copy(R);let b=a[D];E.copy(b),E.sub(R.multiplyScalar(R.dot(b))).normalize(),_.crossVectors(x,b);let F=_.dot(l[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,F)}for(let D=0,b=v.length;D<b;++D){let M=v[D],F=M.start,z=M.count;for(let O=F,W=F+z;O<W;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,f=new P;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?u=l[y]*a.data.stride+a.offset:u=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[u++]}return new Ne(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$c=new Se,Hi=new lo,Ir=new Ai,Jc=new P,Dr=new P,Lr=new P,Ur=new P,fa=new P,Br=new P,Kc=new P,Nr=new P,U=class extends Fe{constructor(t=new Ie,e=new ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(fa.fromBufferAttribute(f,t),o?Br.addScaledVector(fa,h):Br.addScaledVector(fa.sub(e),h))}e.add(Br)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(Ir.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Ir,Jc)===null||Hi.origin.distanceToSquared(Jc)>(t.far-t.near)**2))&&($c.copy(r).invert(),Hi.copy(t.ray).applyMatrix4($c),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,u.start),E=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let _=v,R=E;_<R;_+=3){let x=a.getX(_),C=a.getX(_+1),D=a.getX(_+2);s=Hr(this,p,t,n,c,h,f,x,C,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(a.count,u.start+u.count);for(let m=g,p=y;m<p;m+=3){let v=a.getX(m),E=a.getX(m+1),_=a.getX(m+2);s=Hr(this,o,t,n,c,h,f,v,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,u.start),E=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let _=v,R=E;_<R;_+=3){let x=_,C=_+1,D=_+2;s=Hr(this,p,t,n,c,h,f,x,C,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let m=g,p=y;m<p;m+=3){let v=m,E=m+1,_=m+2;s=Hr(this,o,t,n,c,h,f,v,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Fu(i,t,e,n,s,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ti,a),l===null)return null;Nr.copy(a),Nr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Nr);return c<e.near||c>e.far?null:{distance:c,point:Nr.clone(),object:i}}function Hr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Dr),i.getVertexPosition(l,Lr),i.getVertexPosition(c,Ur);let h=Fu(i,t,e,n,Dr,Lr,Ur,Kc);if(h){let f=new P;_i.getBarycoord(Kc,Dr,Lr,Ur,f),s&&(h.uv=_i.getInterpolatedAttribute(s,a,l,c,f,new it)),r&&(h.uv1=_i.getInterpolatedAttribute(r,a,l,c,f,new it)),o&&(h.normal=_i.getInterpolatedAttribute(o,a,l,c,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};_i.getNormal(Dr,Lr,Ur,d.normal),h.face=d,h.barycoord=f}return h}var en=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2));function g(y,m,p,v,E,_,R,x,C,D,b){let M=_/C,F=R/D,z=_/2,O=R/2,W=x/2,j=C+1,Z=D+1,st=0,q=0,dt=new P;for(let Et=0;Et<Z;Et++){let Ft=Et*F-O;for(let Yt=0;Yt<j;Yt++){let ye=Yt*M-z;dt[y]=ye*v,dt[m]=Ft*E,dt[p]=W,c.push(dt.x,dt.y,dt.z),dt[y]=0,dt[m]=0,dt[p]=x>0?1:-1,h.push(dt.x,dt.y,dt.z),f.push(Yt/C),f.push(1-Et/D),st+=1}}for(let Et=0;Et<D;Et++)for(let Ft=0;Ft<C;Ft++){let Yt=d+Ft+j*Et,ye=d+Ft+j*(Et+1),$=d+(Ft+1)+j*(Et+1),rt=d+(Ft+1)+j*Et;l.push(Yt,ye,rt),l.push(ye,$,rt),q+=6}a.addGroup(u,q,b),u+=q,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ds(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function rn(i){let t={};for(let e=0;e<i.length;e++){let n=Ds(i[e]);for(let s in n)t[s]=n[s]}return t}function Iu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var ks={clone:Ds,merge:rn},Du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Du,this.fragmentShader=Lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Iu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},uo=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vi=new P,Qc=new it,jc=new it,Ke=class extends uo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=so*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return so*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,Qc,jc),e.subVectors(jc,Qc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,ys=1,ml=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(gs,ys,t,e);s.layers=this.layers,this.add(s);let r=new Ke(gs,ys,t,e);r.layers=this.layers,this.add(r);let o=new Ke(gs,ys,t,e);o.layers=this.layers,this.add(o);let a=new Ke(gs,ys,t,e);a.layers=this.layers,this.add(a);let l=new Ke(gs,ys,t,e);l.layers=this.layers,this.add(l);let c=new Ke(gs,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===io)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},po=class extends cn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gl=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new po(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:zn});r.uniforms.tEquirect.value=e;let o=new U(s,r),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=Hn),new ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ua=new P,Uu=new P,Bu=new Jt,ei=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ua.subVectors(n,e).cross(Uu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ua),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bu.getNormalMatrix(t),s=this.coplanarPoint(ua).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new Ai,Or=new P,dr=class{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],u=s[8],g=s[9],y=s[10],m=s[11],p=s[12],v=s[13],E=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-u,_-p).normalize(),n[1].setComponents(l+r,d+c,m+u,_+p).normalize(),n[2].setComponents(l+o,d+h,m+g,_+v).normalize(),n[3].setComponents(l-o,d-h,m-g,_-v).normalize(),n[4].setComponents(l-a,d-f,m-y,_-E).normalize(),e===ni)n[5].setComponents(l+a,d+f,m+y,_+E).normalize();else if(e===io)n[5].setComponents(a,f,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Or.x=s.normal.x>0?t.max.x:t.min.x,Or.y=s.normal.y>0?t.max.y:t.min.y,Or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Qh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.__noRaf(s)}return{start:function(){t!==!0&&e!==null&&(n=i.__noRaf(s),t=!0)},stop:function(){i.__noCaf(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nu(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],y=f[u];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let y=f[u];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var lt=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,d=e/l,u=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*d-o;for(let E=0;E<c;E++){let _=E*f-r;g.push(_,-v,0),y.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let E=v+c*p,_=v+c*(p+1),R=v+1+c*(p+1),x=v+1+c*p;u.push(E,_,x),u.push(_,R,x)}this.setIndex(u),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ou=`#ifdef USE_ALPHAHASH
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
#endif`,zu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ku=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wu=`#ifdef USE_AOMAP
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
#endif`,Xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qu=`#ifdef USE_BATCHING
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
#endif`,Yu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Qu=`#ifdef USE_BUMPMAP
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
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ap=`#define PI 3.141592653589793
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
} // validated`,lp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cp=`vec3 transformedNormal = objectNormal;
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
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tp=`#ifdef USE_FOG
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
#endif`,xp=`#ifdef USE_GRADIENTMAP
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
}`,Ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
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
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,Bp=`struct PhysicalMaterial {
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
}`,Np=`
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yp=`#if defined( USE_POINTS_UV )
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
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
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
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o0=`#ifdef USE_NORMALMAP
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
#endif`,a0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S0=`float getShadowMask() {
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
}`,T0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b0=`#ifdef USE_SKINNING
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
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,w0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
}`,X0=`#define DISTANCE
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
}`,q0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`uniform float scale;
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
}`,J0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,Q0=`uniform vec3 diffuse;
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
}`,j0=`#define LAMBERT
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
}`,tm=`#define LAMBERT
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
}`,em=`#define MATCAP
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
}`,nm=`#define MATCAP
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
}`,im=`#define NORMAL
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
}`,sm=`#define NORMAL
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
}`,rm=`#define PHONG
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
}`,om=`#define PHONG
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
}`,am=`#define STANDARD
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
}`,lm=`#define STANDARD
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
}`,cm=`#define TOON
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
}`,hm=`#define TOON
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
}`,dm=`uniform float size;
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
}`,fm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,pm=`uniform vec3 color;
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
}`,mm=`uniform float rotation;
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
}`,gm=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Hu,alphahash_pars_fragment:Ou,alphamap_fragment:zu,alphamap_pars_fragment:ku,alphatest_fragment:Gu,alphatest_pars_fragment:Vu,aomap_fragment:Wu,aomap_pars_fragment:Xu,batching_pars_vertex:qu,batching_vertex:Yu,begin_vertex:Zu,beginnormal_vertex:$u,bsdfs:Ju,iridescence_fragment:Ku,bumpmap_pars_fragment:Qu,clipping_planes_fragment:ju,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:ep,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:sp,color_pars_vertex:rp,color_vertex:op,common:ap,cube_uv_reflection_fragment:lp,defaultnormal_vertex:cp,displacementmap_pars_vertex:hp,displacementmap_vertex:dp,emissivemap_fragment:fp,emissivemap_pars_fragment:up,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:yp,envmap_pars_fragment:vp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Pp,envmap_vertex:_p,fog_vertex:Mp,fog_pars_vertex:Sp,fog_fragment:Tp,fog_pars_fragment:bp,gradientmap_pars_fragment:xp,lightmap_pars_fragment:Ap,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Rp,lights_pars_begin:Cp,lights_toon_fragment:Fp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Dp,lights_phong_pars_fragment:Lp,lights_physical_fragment:Up,lights_physical_pars_fragment:Bp,lights_fragment_begin:Np,lights_fragment_maps:Hp,lights_fragment_end:Op,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:Vp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:qp,map_particle_pars_fragment:Yp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Jp,morphcolor_vertex:Kp,morphnormal_vertex:Qp,morphtarget_pars_vertex:jp,morphtarget_vertex:t0,normal_fragment_begin:e0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:s0,normal_vertex:r0,normalmap_pars_fragment:o0,clearcoat_normal_fragment_begin:a0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:c0,iridescence_pars_fragment:h0,opaque_fragment:d0,packing:f0,premultiplied_alpha_fragment:u0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:_0,shadowmap_vertex:M0,shadowmask_pars_fragment:S0,skinbase_vertex:T0,skinning_pars_vertex:b0,skinning_vertex:x0,skinnormal_vertex:A0,specularmap_fragment:w0,specularmap_pars_fragment:R0,tonemapping_fragment:C0,tonemapping_pars_fragment:P0,transmission_fragment:F0,transmission_pars_fragment:I0,uv_pars_fragment:D0,uv_pars_vertex:L0,uv_vertex:U0,worldpos_vertex:B0,background_vert:N0,background_frag:H0,backgroundCube_vert:O0,backgroundCube_frag:z0,cube_vert:k0,cube_frag:G0,depth_vert:V0,depth_frag:W0,distanceRGBA_vert:X0,distanceRGBA_frag:q0,equirect_vert:Y0,equirect_frag:Z0,linedashed_vert:$0,linedashed_frag:J0,meshbasic_vert:K0,meshbasic_frag:Q0,meshlambert_vert:j0,meshlambert_frag:tm,meshmatcap_vert:em,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:sm,meshphong_vert:rm,meshphong_frag:om,meshphysical_vert:am,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:hm,points_vert:dm,points_frag:fm,shadow_vert:um,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},ft={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Bn={basic:{uniforms:rn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:rn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:rn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:rn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:rn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:rn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:rn([ft.points,ft.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:rn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:rn([ft.common,ft.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:rn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:rn([ft.sprite,ft.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:rn([ft.common,ft.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:rn([ft.lights,ft.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Bn.physical={uniforms:rn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var zr={r:0,b:0,g:0},zi=new Gn,ym=new Se;function vm(i,t,e,n,s,r,o){let a=new Lt(0),l=r===!0?0:1,c,h,f=null,d=0,u=null;function g(v){let E=v.isScene===!0?v.background:null;return E&&E.isTexture&&(E=(v.backgroundBlurriness>0?e:t).get(E)),E}function y(v){let E=!1,_=g(v);_===null?p(a,l):_&&_.isColor&&(p(_,1),E=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,E){let _=g(E);_&&(_.isCubeTexture||_.mapping===Po)?(h===void 0&&(h=new U(new en(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:Ds(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,x,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zi.copy(E.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(zi)),h.material.toneMapped=re.getTransfer(_.colorSpace)!==Ee,(f!==_||d!==_.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,d=_.version,u=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new U(new lt(2,2),new He({name:"BackgroundMaterial",uniforms:Ds(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=re.getTransfer(_.colorSpace)!==Ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,E){v.getRGB(zr,Kh(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:y,addToRenderList:m}}function Em(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,F,z,O,W){let j=!1,Z=f(O,z,F);r!==Z&&(r=Z,c(r.object)),j=u(M,O,z,W),j&&g(M,O,z,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(M,F,z,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,F,z){let O=z.wireframe===!0,W=n[M.id];W===void 0&&(W={},n[M.id]=W);let j=W[F.id];j===void 0&&(j={},W[F.id]=j);let Z=j[O];return Z===void 0&&(Z=d(l()),j[O]=Z),Z}function d(M){let F=[],z=[],O=[];for(let W=0;W<e;W++)F[W]=0,z[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:O,object:M,attributes:{},index:null}}function u(M,F,z,O){let W=r.attributes,j=F.attributes,Z=0,st=z.getAttributes();for(let q in st)if(st[q].location>=0){let Et=W[q],Ft=j[q];if(Ft===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Ft=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Ft=M.instanceColor)),Et===void 0||Et.attribute!==Ft||Ft&&Et.data!==Ft.data)return!0;Z++}return r.attributesNum!==Z||r.index!==O}function g(M,F,z,O){let W={},j=F.attributes,Z=0,st=z.getAttributes();for(let q in st)if(st[q].location>=0){let Et=j[q];Et===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor));let Ft={};Ft.attribute=Et,Et&&Et.data&&(Ft.data=Et.data),W[q]=Ft,Z++}r.attributes=W,r.attributesNum=Z,r.index=O}function y(){let M=r.newAttributes;for(let F=0,z=M.length;F<z;F++)M[F]=0}function m(M){p(M,0)}function p(M,F){let z=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;z[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),W[M]!==F&&(i.vertexAttribDivisor(M,F),W[M]=F)}function v(){let M=r.newAttributes,F=r.enabledAttributes;for(let z=0,O=F.length;z<O;z++)F[z]!==M[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function E(M,F,z,O,W,j,Z){Z===!0?i.vertexAttribIPointer(M,F,z,W,j):i.vertexAttribPointer(M,F,z,O,W,j)}function _(M,F,z,O){y();let W=O.attributes,j=z.getAttributes(),Z=F.defaultAttributeValues;for(let st in j){let q=j[st];if(q.location>=0){let dt=W[st];if(dt===void 0&&(st==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),st==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),dt!==void 0){let Et=dt.normalized,Ft=dt.itemSize,Yt=t.get(dt);if(Yt===void 0)continue;let ye=Yt.buffer,$=Yt.type,rt=Yt.bytesPerElement,At=$===i.INT||$===i.UNSIGNED_INT||dt.gpuType===Ql;if(dt.isInterleavedBufferAttribute){let ct=dt.data,Ot=ct.stride,Gt=dt.offset;if(ct.isInstancedInterleavedBuffer){for(let Wt=0;Wt<q.locationSize;Wt++)p(q.location+Wt,ct.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Wt=0;Wt<q.locationSize;Wt++)m(q.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Wt=0;Wt<q.locationSize;Wt++)E(q.location+Wt,Ft/q.locationSize,$,Et,Ot*rt,(Gt+Ft/q.locationSize*Wt)*rt,At)}else{if(dt.isInstancedBufferAttribute){for(let ct=0;ct<q.locationSize;ct++)p(q.location+ct,dt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ct=0;ct<q.locationSize;ct++)m(q.location+ct);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let ct=0;ct<q.locationSize;ct++)E(q.location+ct,Ft/q.locationSize,$,Et,Ft*rt,Ft/q.locationSize*ct*rt,At)}}else if(Z!==void 0){let Et=Z[st];if(Et!==void 0)switch(Et.length){case 2:i.vertexAttrib2fv(q.location,Et);break;case 3:i.vertexAttrib3fv(q.location,Et);break;case 4:i.vertexAttrib4fv(q.location,Et);break;default:i.vertexAttrib1fv(q.location,Et)}}}}v()}function R(){D();for(let M in n){let F=n[M];for(let z in F){let O=F[z];for(let W in O)h(O[W].object),delete O[W];delete F[z]}delete n[M]}}function x(M){if(n[M.id]===void 0)return;let F=n[M.id];for(let z in F){let O=F[z];for(let W in O)h(O[W].object),delete O[W];delete F[z]}delete n[M.id]}function C(M){for(let F in n){let z=n[F];if(z[M.id]===void 0)continue;let O=z[M.id];for(let W in O)h(O[W].object),delete O[W];delete z[M.id]}}function D(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:x,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function _m(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];e.update(u,n,1)}function l(c,h,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let y=0;y<f;y++)g+=h[y]*d[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Mm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let D=C===hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==si&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==On&&!D)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,x=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:_,vertexTextures:R,maxSamples:x}}function Sm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ei,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,E=v*4,_=p.clippingState||null;l.value=_,_=h(g,d,E,u);for(let R=0;R!==E;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,g){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=u+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,_=u;E!==y;++E,_+=4)o.copy(f[E]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Tm(i){let t=new WeakMap;function e(o,a){return a===Ua?o.mapping=Cs:a===Ba&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ua||a===Ba)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ls=class extends uo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bs=4,th=[.125,.215,.35,.446,.526,.582],Wi=20,pa=new Ls,eh=new Lt,ma=null,ga=0,ya=0,va=!1,Gi=(1+Math.sqrt(5))/2,vs=1/Gi,nh=[new P(-Gi,vs,0),new P(Gi,vs,0),new P(-vs,0,Gi),new P(vs,0,Gi),new P(0,Gi,-vs),new P(0,Gi,vs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],mo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,ya),this._renderer.xr.enabled=va,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:hn,format:Pn,colorSpace:Fi,depthBuffer:!1},s=ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bm(r)),this._blurMaterial=xm(r,t,e)}return s}_compileMaterial(t){let e=new U(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s){let a=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(eh),h.toneMapping=kn,h.autoClear=!1;let u=new ce({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new U(new en,u),y=!1,m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,y=!0):(u.color.copy(eh),y=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let E=this._cubeSize;kr(s,v*E,p>2?E:0,E,E),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Cs||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new U(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;kr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nh[(s-r-1)%nh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new U(this._lodPlanes[s],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Wi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Wi;m>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);let p=[],v=0;for(let C=0;C<Wi;++C){let D=C/y,b=Math.exp(-D*D/2);p.push(b),C===0?v+=b:C<m&&(v+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;let _=this._sizeLods[s],R=3*_*(s>E-bs?s-E+bs:0),x=4*(this._cubeSize-_);kr(e,R,x,3*_,2*_),l.setRenderTarget(e),l.render(f,pa)}};function bm(i){let t=[],e=[],n=[],s=i,r=i-bs+1+th.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-bs?l=th[o-i+bs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,y=3,m=2,p=1,v=new Float32Array(y*g*u),E=new Float32Array(m*g*u),_=new Float32Array(p*g*u);for(let x=0;x<u;x++){let C=x%3*2/3-1,D=x>2?0:-1,b=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];v.set(b,y*g*x),E.set(d,m*g*x);let M=[x,x,x,x,x,x];_.set(M,p*g*x)}let R=new Ie;R.setAttribute("position",new Ne(v,y)),R.setAttribute("uv",new Ne(E,m)),R.setAttribute("faceIndex",new Ne(_,p)),t.push(R),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ih(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xm(i,t,e){let n=new Float32Array(Wi),s=new P(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function sh(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function rh(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function Am(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ua||l===Ba,h=l===Cs||l===Ps;if(c||h){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new mo(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new mo(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function wm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rm(i,t,e,n){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let u=f.morphAttributes;for(let g in u){let y=u[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(f){let d=[],u=f.index,g=f.attributes.position,y=0;if(u!==null){let v=u.array;y=u.version;for(let E=0,_=v.length;E<_;E+=3){let R=v[E+0],x=v[E+1],C=v[E+2];d.push(R,x,x,C,C,R)}}else if(g!==void 0){let v=g.array;y=g.version;for(let E=0,_=v.length/3-1;E<_;E+=3){let R=E+0,x=E+1,C=E+2;d.push(R,x,x,C,C,R)}}else return;let m=new($h(d)?fo:ho)(d,1);m.version=y;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Cm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,d*o,g),e.update(u,n,g))}function h(d,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function f(d,u,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,u[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,y,0,g);let p=0;for(let v=0;v<g;v++)p+=u[v]*y[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Pm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fm(i,t,e){let n=new WeakMap,s=new Me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],E=0;u===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let _=a.attributes.position.count*E,R=1;_>t.maxTextureSize&&(R=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let x=new Float32Array(_*R*4*f),C=new ao(x,_,R,f);C.type=On,C.needsUpdate=!0;let D=E*4;for(let M=0;M<f;M++){let F=m[M],z=p[M],O=v[M],W=_*R*4*M;for(let j=0;j<F.count;j++){let Z=j*D;u===!0&&(s.fromBufferAttribute(F,j),x[W+Z+0]=s.x,x[W+Z+1]=s.y,x[W+Z+2]=s.z,x[W+Z+3]=0),g===!0&&(s.fromBufferAttribute(z,j),x[W+Z+4]=s.x,x[W+Z+5]=s.y,x[W+Z+6]=s.z,x[W+Z+7]=0),y===!0&&(s.fromBufferAttribute(O,j),x[W+Z+8]=s.x,x[W+Z+9]=s.y,x[W+Z+10]=s.z,x[W+Z+11]=O.itemSize===4?s.w:1)}}d={count:f,texture:C,size:new it(_,R)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let y=0;y<c.length;y++)u+=c[y];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Im(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Us=class extends cn{constructor(t,e,n,s,r,o,a,l,c,h=xs){if(h!==xs&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xs&&(n=ri),n===void 0&&h===Is&&(n=Fs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},jh=new cn,oh=new Us(1,1),td=new ao,ed=new pl,nd=new po,ah=[],lh=[],ch=new Float32Array(16),hh=new Float32Array(9),dh=new Float32Array(4);function Gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ah[s];if(r===void 0&&(r=new Float32Array(s),ah[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Io(i,t){let e=lh[t];e===void 0&&(e=new Int32Array(t),lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function Nm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;dh.set(n),i.uniformMatrix2fv(this.addr,!1,dh),We(e,n)}}function Hm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;hh.set(n),i.uniformMatrix3fv(this.addr,!1,hh),We(e,n)}}function Om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;ch.set(n),i.uniformMatrix4fv(this.addr,!1,ch),We(e,n)}}function zm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function Wm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function Ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function Zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oh.compareFunction=Zh,r=oh):r=jh,e.setTexture2D(t||r,s)}function $m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ed,s)}function Jm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nd,s)}function Km(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||td,s)}function Qm(i){switch(i){case 5126:return Dm;case 35664:return Lm;case 35665:return Um;case 35666:return Bm;case 35674:return Nm;case 35675:return Hm;case 35676:return Om;case 5124:case 35670:return zm;case 35667:case 35671:return km;case 35668:case 35672:return Gm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Km}}function jm(i,t){i.uniform1fv(this.addr,t)}function tg(i,t){let e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function eg(i,t){let e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function ng(i,t){let e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function ig(i,t){let e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sg(i,t){let e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function rg(i,t){let e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function og(i,t){i.uniform1iv(this.addr,t)}function ag(i,t){i.uniform2iv(this.addr,t)}function lg(i,t){i.uniform3iv(this.addr,t)}function cg(i,t){i.uniform4iv(this.addr,t)}function hg(i,t){i.uniform1uiv(this.addr,t)}function dg(i,t){i.uniform2uiv(this.addr,t)}function fg(i,t){i.uniform3uiv(this.addr,t)}function ug(i,t){i.uniform4uiv(this.addr,t)}function pg(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||jh,r[o])}function mg(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ed,r[o])}function gg(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nd,r[o])}function yg(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||td,r[o])}function vg(i){switch(i){case 5126:return jm;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return og;case 35667:case 35671:return ag;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return dg;case 36295:return fg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return yg}}var yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qm(e.type)}},vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vg(e.type)}},El=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ea=/(\w+)(\])?(\[|\.)?/g;function fh(i,t){i.seq.push(t),i.map[t.id]=t}function Eg(i,t,e){let n=i.name,s=n.length;for(Ea.lastIndex=0;;){let r=Ea.exec(n),o=Ea.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fh(e,c===void 0?new yl(a,i,t):new vl(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new El(a),fh(e,f)),e=f}}}var ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Eg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function uh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var _g=37297,Mg=0;function Sg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ph=new Jt;function Tg(i){re._getMatrix(ph,re.workingColorSpace,i);let t=`mat3( ${ph.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Fo:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Sg(i.getShaderSource(t),o)}else return s}function bg(i,t){let e=Tg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xg(i,t){let e;switch(t){case Qf:e="Linear";break;case jf:e="Reinhard";break;case tu:e="Cineon";break;case eu:e="ACESFilmic";break;case iu:e="AgX";break;case su:e="Neutral";break;case nu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gr=new P;function Ag(){re.getLuminanceCoefficients(Gr);let i=Gr.x.toFixed(4),t=Gr.y.toFixed(4),e=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function Rg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function or(i){return i!==""}function gh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(Pg,Ig)}var Fg=new Map;function Ig(i,t){let e=Qt[t];if(e===void 0){let n=Fg.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _l(e)}var Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(i){return i.replace(Dg,Lg)}function Lg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ug(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Bg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cs:case Ps:t="ENVMAP_TYPE_CUBE";break;case Po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ng(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function Hg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bh:t="ENVMAP_BLENDING_MULTIPLY";break;case Jf:t="ENVMAP_BLENDING_MIX";break;case Kf:t="ENVMAP_BLENDING_ADD";break}return t}function Og(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ug(e),c=Bg(e),h=Ng(e),f=Hg(e),d=Og(e),u=wg(e),g=Rg(r),y=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[Eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[Eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==kn?xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),Ag(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=_l(o),o=gh(o,e),o=yh(o,e),a=_l(a),a=gh(a,e),a=yh(a,e),o=vh(o),a=vh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=v+m+o,_=v+p+a,R=uh(s,s.VERTEX_SHADER,E),x=uh(s,s.FRAGMENT_SHADER,_);s.attachShader(y,R),s.attachShader(y,x),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(F){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(y).trim(),O=s.getShaderInfoLog(R).trim(),W=s.getShaderInfoLog(x).trim(),j=!0,Z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,R,x);else{let st=mh(s,R,"vertex"),q=mh(s,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+z+`
`+st+`
`+q)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||W==="")&&(Z=!1);Z&&(F.diagnostics={runnable:j,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(R),s.deleteShader(x),D=new ws(s,y),b=Cg(s,y)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,_g)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=x,this}var kg=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sl(t),e.set(t,n)),n}},Sl=class{constructor(t){this.id=kg++,this.code=t,this.usedTimes=0}};function Gg(i,t,e,n,s,r,o){let a=new co,l=new Ml,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,u=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,F,z,O){let W=z.fog,j=O.geometry,Z=b.isMeshStandardMaterial?z.environment:null,st=(b.isMeshStandardMaterial?e:t).get(b.envMap||Z),q=st&&st.mapping===Po?st.image.height:null,dt=g[b.type];b.precision!==null&&(u=s.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let Et=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ft=Et!==void 0?Et.length:0,Yt=0;j.morphAttributes.position!==void 0&&(Yt=1),j.morphAttributes.normal!==void 0&&(Yt=2),j.morphAttributes.color!==void 0&&(Yt=3);let ye,$,rt,At;if(dt){let ve=Bn[dt];ye=ve.vertexShader,$=ve.fragmentShader}else ye=b.vertexShader,$=b.fragmentShader,l.update(b),rt=l.getVertexShaderID(b),At=l.getFragmentShaderID(b);let ct=i.getRenderTarget(),Ot=i.state.buffers.depth.getReversed(),Gt=O.isInstancedMesh===!0,Wt=O.isBatchedMesh===!0,Te=!!b.map,jt=!!b.matcap,X=!!st,I=!!b.aoMap,Ut=!!b.lightMap,Bt=!!b.bumpMap,Xt=!!b.normalMap,Nt=!!b.displacementMap,we=!!b.emissiveMap,zt=!!b.metalnessMap,A=!!b.roughnessMap,S=b.anisotropy>0,k=b.clearcoat>0,K=b.dispersion>0,et=b.iridescence>0,J=b.sheen>0,It=b.transmission>0,mt=S&&!!b.anisotropyMap,_t=k&&!!b.clearcoatMap,se=k&&!!b.clearcoatNormalMap,ot=k&&!!b.clearcoatRoughnessMap,St=et&&!!b.iridescenceMap,kt=et&&!!b.iridescenceThicknessMap,Vt=J&&!!b.sheenColorMap,Tt=J&&!!b.sheenRoughnessMap,ie=!!b.specularMap,Kt=!!b.specularColorMap,be=!!b.specularIntensityMap,L=It&&!!b.transmissionMap,ut=It&&!!b.thicknessMap,Y=!!b.gradientMap,Q=!!b.alphaMap,vt=b.alphaTest>0,gt=!!b.alphaHash,Zt=!!b.extensions,Be=kn;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Be=i.toneMapping);let Qe={shaderID:dt,shaderType:b.type,shaderName:b.name,vertexShader:ye,fragmentShader:$,defines:b.defines,customVertexShaderID:rt,customFragmentShaderID:At,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Wt,batchingColor:Wt&&O._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&O.instanceColor!==null,instancingMorph:Gt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Fi,alphaToCoverage:!!b.alphaToCoverage,map:Te,matcap:jt,envMap:X,envMapMode:X&&st.mapping,envMapCubeUVHeight:q,aoMap:I,lightMap:Ut,bumpMap:Bt,normalMap:Xt,displacementMap:d&&Nt,emissiveMap:we,normalMapObjectSpace:Xt&&b.normalMapType===au,normalMapTangentSpace:Xt&&b.normalMapType===Yh,metalnessMap:zt,roughnessMap:A,anisotropy:S,anisotropyMap:mt,clearcoat:k,clearcoatMap:_t,clearcoatNormalMap:se,clearcoatRoughnessMap:ot,dispersion:K,iridescence:et,iridescenceMap:St,iridescenceThicknessMap:kt,sheen:J,sheenColorMap:Vt,sheenRoughnessMap:Tt,specularMap:ie,specularColorMap:Kt,specularIntensityMap:be,transmission:It,transmissionMap:L,thicknessMap:ut,gradientMap:Y,opaque:b.transparent===!1&&b.blending===Mi&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:vt,alphaHash:gt,combine:b.combine,mapUv:Te&&y(b.map.channel),aoMapUv:I&&y(b.aoMap.channel),lightMapUv:Ut&&y(b.lightMap.channel),bumpMapUv:Bt&&y(b.bumpMap.channel),normalMapUv:Xt&&y(b.normalMap.channel),displacementMapUv:Nt&&y(b.displacementMap.channel),emissiveMapUv:we&&y(b.emissiveMap.channel),metalnessMapUv:zt&&y(b.metalnessMap.channel),roughnessMapUv:A&&y(b.roughnessMap.channel),anisotropyMapUv:mt&&y(b.anisotropyMap.channel),clearcoatMapUv:_t&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:se&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&y(b.sheenRoughnessMap.channel),specularMapUv:ie&&y(b.specularMap.channel),specularColorMapUv:Kt&&y(b.specularColorMap.channel),specularIntensityMapUv:be&&y(b.specularIntensityMap.channel),transmissionMapUv:L&&y(b.transmissionMap.channel),thicknessMapUv:ut&&y(b.thicknessMap.channel),alphaMapUv:Q&&y(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Xt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(Te||Q),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ot,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Yt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:Te&&b.map.isVideoTexture===!0&&re.getTransfer(b.map.colorSpace)===Ee,decodeVideoTextureEmissive:we&&b.emissiveMap.isVideoTexture===!0&&re.getTransfer(b.emissiveMap.colorSpace)===Ee,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===te,flipSided:b.side===ze,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&b.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let F in b.defines)M.push(F),M.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(v(M,b),E(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function E(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let M=g[b.type],F;if(M){let z=Bn[M];F=ks.clone(z.uniforms)}else F=b.uniforms;return F}function R(b,M){let F;for(let z=0,O=h.length;z<O;z++){let W=h[z];if(W.cacheKey===M){F=W,++F.usedTimes;break}}return F===void 0&&(F=new zg(i,M,b,r),h.push(F)),F}function x(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:x,releaseShaderCache:C,programs:h,dispose:D}}function Vg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Wg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _h(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,d,u,g,y,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=y,p.group=m),t++,p}function a(f,d,u,g,y,m){let p=o(f,d,u,g,y,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function l(f,d,u,g,y,m){let p=o(f,d,u,g,y,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||Wg),n.length>1&&n.sort(d||_h),s.length>1&&s.sort(d||_h)}function h(){for(let f=t,d=i.length;f<d;f++){let u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Xg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Mh,i.set(n,[o])):s>=r.length?(o=new Mh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function qg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Lt};break;case"SpotLight":e={position:new P,direction:new P,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Zg=0;function $g(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jg(i){let t=new qg,e=Yg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Se,o=new Se;function a(c){let h=0,f=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let u=0,g=0,y=0,m=0,p=0,v=0,E=0,_=0,R=0,x=0,C=0;c.sort($g);for(let b=0,M=c.length;b<M;b++){let F=c[b],z=F.color,O=F.intensity,W=F.distance,j=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=z.r*O,f+=z.g*O,d+=z.b*O;else if(F.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(F.sh.coefficients[Z],O);C++}else if(F.isDirectionalLight){let Z=t.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let st=F.shadow,q=e.get(F);q.shadowIntensity=st.intensity,q.shadowBias=st.bias,q.shadowNormalBias=st.normalBias,q.shadowRadius=st.radius,q.shadowMapSize=st.mapSize,n.directionalShadow[u]=q,n.directionalShadowMap[u]=j,n.directionalShadowMatrix[u]=F.shadow.matrix,v++}n.directional[u]=Z,u++}else if(F.isSpotLight){let Z=t.get(F);Z.position.setFromMatrixPosition(F.matrixWorld),Z.color.copy(z).multiplyScalar(O),Z.distance=W,Z.coneCos=Math.cos(F.angle),Z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Z.decay=F.decay,n.spot[y]=Z;let st=F.shadow;if(F.map&&(n.spotLightMap[R]=F.map,R++,st.updateMatrices(F),F.castShadow&&x++),n.spotLightMatrix[y]=st.matrix,F.castShadow){let q=e.get(F);q.shadowIntensity=st.intensity,q.shadowBias=st.bias,q.shadowNormalBias=st.normalBias,q.shadowRadius=st.radius,q.shadowMapSize=st.mapSize,n.spotShadow[y]=q,n.spotShadowMap[y]=j,_++}y++}else if(F.isRectAreaLight){let Z=t.get(F);Z.color.copy(z).multiplyScalar(O),Z.halfWidth.set(F.width*.5,0,0),Z.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=Z,m++}else if(F.isPointLight){let Z=t.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),Z.distance=F.distance,Z.decay=F.decay,F.castShadow){let st=F.shadow,q=e.get(F);q.shadowIntensity=st.intensity,q.shadowBias=st.bias,q.shadowNormalBias=st.normalBias,q.shadowRadius=st.radius,q.shadowMapSize=st.mapSize,q.shadowCameraNear=st.camera.near,q.shadowCameraFar=st.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=F.shadow.matrix,E++}n.point[g]=Z,g++}else if(F.isHemisphereLight){let Z=t.get(F);Z.skyColor.copy(F.color).multiplyScalar(O),Z.groundColor.copy(F.groundColor).multiplyScalar(O),n.hemi[p]=Z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==u||D.pointLength!==g||D.spotLength!==y||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==v||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==R||D.numLightProbes!==C)&&(n.directional.length=u,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=_+R-x,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=C,D.directionalLength=u,D.pointLength=g,D.spotLength=y,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=v,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=R,D.numLightProbes=C,n.version=Zg++)}function l(c,h){let f=0,d=0,u=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let E=c[p];if(E.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(E.isSpotLight){let _=n.spot[u];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(E.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Sh(i){let t=new Jg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Kg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Sh(i),t.set(s,[a])):r>=o.length?(a=new Sh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var wi=class extends ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Tl=class extends ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
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
}`;function t1(i,t,e){let n=new dr,s=new it,r=new it,o=new Me,a=new wi({depthPacking:zs}),l=new Tl,c={},h=e.maxTextureSize,f={[Ti]:ze,[ze]:Ti,[te]:te},d=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Qg,fragmentShader:jg}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new U(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let p=this.type;this.render=function(x,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(zn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let O=p!==ti&&this.type===ti,W=p===ti&&this.type!==ti;for(let j=0,Z=x.length;j<Z;j++){let st=x[j],q=st.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let dt=q.getFrameExtents();if(s.multiply(dt),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,q.mapSize.y=r.y)),q.map===null||O===!0||W===!0){let Ft=this.type!==ti?{minFilter:yn,magFilter:yn}:{};q.map!==null&&q.map.dispose(),q.map=new Ye(s.x,s.y,Ft),q.map.texture.name=st.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let Et=q.getViewportCount();for(let Ft=0;Ft<Et;Ft++){let Yt=q.getViewport(Ft);o.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),z.viewport(o),q.updateMatrices(st,Ft),n=q.getFrustum(),_(C,D,q.camera,st,this.type)}q.isPointLightShadow!==!0&&this.type===ti&&v(q,D),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,F)};function v(x,C){let D=t.update(y);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,u.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Ye(s.x,s.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,y,null),u.uniforms.shadow_pass.value=x.mapPass.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(C,null,D,u,y,null)}function E(x,C,D,b){let M=null,F=D.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(F!==void 0)M=F;else if(M=D.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let z=M.uuid,O=C.uuid,W=c[z];W===void 0&&(W={},c[z]=W);let j=W[O];j===void 0&&(j=M.clone(),W[O]=j,C.addEventListener("dispose",R)),M=j}if(M.visible=C.visible,M.wireframe=C.wireframe,b===ti?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=i.properties.get(M);z.light=D}return M}function _(x,C,D,b,M){if(x.visible===!1)return;if(x.layers.test(C.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===ti)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,x.matrixWorld);let O=t.update(x),W=x.material;if(Array.isArray(W)){let j=O.groups;for(let Z=0,st=j.length;Z<st;Z++){let q=j[Z],dt=W[q.materialIndex];if(dt&&dt.visible){let Et=E(x,dt,b,M);x.onBeforeShadow(i,x,C,D,O,Et,q),i.renderBufferDirect(D,null,O,Et,x,q),x.onAfterShadow(i,x,C,D,O,Et,q)}}}else if(W.visible){let j=E(x,W,b,M);x.onBeforeShadow(i,x,C,D,O,j,null),i.renderBufferDirect(D,null,O,j,x,null),x.onAfterShadow(i,x,C,D,O,j,null)}}let z=x.children;for(let O=0,W=z.length;O<W;O++)_(z[O],C,D,b,M)}function R(x){x.target.removeEventListener("dispose",R);for(let D in c){let b=c[D],M=x.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var e1={[Ra]:Ca,[Pa]:Da,[Fa]:La,[Rs]:Ia,[Ca]:Ra,[Da]:Pa,[La]:Fa,[Ia]:Rs};function n1(i,t){function e(){let L=!1,ut=new Me,Y=null,Q=new Me(0,0,0,0);return{setMask:function(vt){Y!==vt&&!L&&(i.colorMask(vt,vt,vt,vt),Y=vt)},setLocked:function(vt){L=vt},setClear:function(vt,gt,Zt,Be,Qe){Qe===!0&&(vt*=Be,gt*=Be,Zt*=Be),ut.set(vt,gt,Zt,Be),Q.equals(ut)===!1&&(i.clearColor(vt,gt,Zt,Be),Q.copy(ut))},reset:function(){L=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let L=!1,ut=!1,Y=null,Q=null,vt=null;return{setReversed:function(gt){if(ut!==gt){let Zt=t.get("EXT_clip_control");ut?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);let Be=vt;vt=null,this.setClear(Be)}ut=gt},getReversed:function(){return ut},setTest:function(gt){gt?ct(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(gt){Y!==gt&&!L&&(i.depthMask(gt),Y=gt)},setFunc:function(gt){if(ut&&(gt=e1[gt]),Q!==gt){switch(gt){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case La:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=gt}},setLocked:function(gt){L=gt},setClear:function(gt){vt!==gt&&(ut&&(gt=1-gt),i.clearDepth(gt),vt=gt)},reset:function(){L=!1,Y=null,Q=null,vt=null,ut=!1}}}function s(){let L=!1,ut=null,Y=null,Q=null,vt=null,gt=null,Zt=null,Be=null,Qe=null;return{setTest:function(ve){L||(ve?ct(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(ve){ut!==ve&&!L&&(i.stencilMask(ve),ut=ve)},setFunc:function(ve,xn,Yn){(Y!==ve||Q!==xn||vt!==Yn)&&(i.stencilFunc(ve,xn,Yn),Y=ve,Q=xn,vt=Yn)},setOp:function(ve,xn,Yn){(gt!==ve||Zt!==xn||Be!==Yn)&&(i.stencilOp(ve,xn,Yn),gt=ve,Zt=xn,Be=Yn)},setLocked:function(ve){L=ve},setClear:function(ve){Qe!==ve&&(i.clearStencil(ve),Qe=ve)},reset:function(){L=!1,ut=null,Y=null,Q=null,vt=null,gt=null,Zt=null,Be=null,Qe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,u=[],g=null,y=!1,m=null,p=null,v=null,E=null,_=null,R=null,x=null,C=new Lt(0,0,0),D=0,b=!1,M=null,F=null,z=null,O=null,W=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,st=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=st>=1):q.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=st>=2);let dt=null,Et={},Ft=i.getParameter(i.SCISSOR_BOX),Yt=i.getParameter(i.VIEWPORT),ye=new Me().fromArray(Ft),$=new Me().fromArray(Yt);function rt(L,ut,Y,Q){let vt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(L,gt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<Y;Zt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(ut+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return gt}let At={};At[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(Rs),Bt(!1),Xt(Ac),ct(i.CULL_FACE),I(zn);function ct(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ot(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Gt(L,ut){return f[L]!==ut?(i.bindFramebuffer(L,ut),f[L]=ut,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ut),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Wt(L,ut){let Y=u,Q=!1;if(L){Y=d.get(ut),Y===void 0&&(Y=[],d.set(ut,Y));let vt=L.textures;if(Y.length!==vt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Zt=vt.length;gt<Zt;gt++)Y[gt]=i.COLOR_ATTACHMENT0+gt;Y.length=vt.length,Q=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Y)}function Te(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let jt={[Vi]:i.FUNC_ADD,[Df]:i.FUNC_SUBTRACT,[Lf]:i.FUNC_REVERSE_SUBTRACT};jt[Uf]=i.MIN,jt[Bf]=i.MAX;let X={[Nf]:i.ZERO,[Hf]:i.ONE,[Of]:i.SRC_COLOR,[Aa]:i.SRC_ALPHA,[Xf]:i.SRC_ALPHA_SATURATE,[Vf]:i.DST_COLOR,[kf]:i.DST_ALPHA,[zf]:i.ONE_MINUS_SRC_COLOR,[wa]:i.ONE_MINUS_SRC_ALPHA,[Wf]:i.ONE_MINUS_DST_COLOR,[Gf]:i.ONE_MINUS_DST_ALPHA,[qf]:i.CONSTANT_COLOR,[Yf]:i.ONE_MINUS_CONSTANT_COLOR,[Zf]:i.CONSTANT_ALPHA,[$f]:i.ONE_MINUS_CONSTANT_ALPHA};function I(L,ut,Y,Q,vt,gt,Zt,Be,Qe,ve){if(L===zn){y===!0&&(Ot(i.BLEND),y=!1);return}if(y===!1&&(ct(i.BLEND),y=!0),L!==If){if(L!==m||ve!==b){if((p!==Vi||_!==Vi)&&(i.blendEquation(i.FUNC_ADD),p=Vi,_=Vi),ve)switch(L){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ge:i.blendFunc(i.ONE,i.ONE);break;case wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ge:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,E=null,R=null,x=null,C.set(0,0,0),D=0,m=L,b=ve}return}vt=vt||ut,gt=gt||Y,Zt=Zt||Q,(ut!==p||vt!==_)&&(i.blendEquationSeparate(jt[ut],jt[vt]),p=ut,_=vt),(Y!==v||Q!==E||gt!==R||Zt!==x)&&(i.blendFuncSeparate(X[Y],X[Q],X[gt],X[Zt]),v=Y,E=Q,R=gt,x=Zt),(Be.equals(C)===!1||Qe!==D)&&(i.blendColor(Be.r,Be.g,Be.b,Qe),C.copy(Be),D=Qe),m=L,b=!1}function Ut(L,ut){L.side===te?Ot(i.CULL_FACE):ct(i.CULL_FACE);let Y=L.side===ze;ut&&(Y=!Y),Bt(Y),L.blending===Mi&&L.transparent===!1?I(zn):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let Q=L.stencilWrite;a.setTest(Q),Q&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),we(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function Xt(L){L!==Pf?(ct(i.CULL_FACE),L!==F&&(L===Ac?i.cullFace(i.BACK):L===Ff?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),F=L}function Nt(L){L!==z&&(Z&&i.lineWidth(L),z=L)}function we(L,ut,Y){L?(ct(i.POLYGON_OFFSET_FILL),(O!==ut||W!==Y)&&(i.polygonOffset(ut,Y),O=ut,W=Y)):Ot(i.POLYGON_OFFSET_FILL)}function zt(L){L?ct(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+j-1),dt!==L&&(i.activeTexture(L),dt=L)}function S(L,ut,Y){Y===void 0&&(dt===null?Y=i.TEXTURE0+j-1:Y=dt);let Q=Et[Y];Q===void 0&&(Q={type:void 0,texture:void 0},Et[Y]=Q),(Q.type!==L||Q.texture!==ut)&&(dt!==Y&&(i.activeTexture(Y),dt=Y),i.bindTexture(L,ut||At[L]),Q.type=L,Q.texture=ut)}function k(){let L=Et[dt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(L){ye.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ye.copy(L))}function Tt(L){$.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function ie(L,ut){let Y=c.get(ut);Y===void 0&&(Y=new WeakMap,c.set(ut,Y));let Q=Y.get(L);Q===void 0&&(Q=i.getUniformBlockIndex(ut,L.name),Y.set(L,Q))}function Kt(L,ut){let Q=c.get(ut).get(L);l.get(ut)!==Q&&(i.uniformBlockBinding(ut,Q,L.__bindingPointIndex),l.set(ut,Q))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},dt=null,Et={},f={},d=new WeakMap,u=[],g=null,y=!1,m=null,p=null,v=null,E=null,_=null,R=null,x=null,C=new Lt(0,0,0),D=0,b=!1,M=null,F=null,z=null,O=null,W=null,ye.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Ot,bindFramebuffer:Gt,drawBuffers:Wt,useProgram:Te,setBlending:I,setMaterial:Ut,setFlipSided:Bt,setCullFace:Xt,setLineWidth:Nt,setPolygonOffset:we,setScissorTest:zt,activeTexture:A,bindTexture:S,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:St,texImage3D:kt,updateUBOMapping:ie,uniformBlockBinding:Kt,texStorage2D:se,texStorage3D:ot,texSubImage2D:J,texSubImage3D:It,compressedTexSubImage2D:mt,compressedTexSubImage3D:_t,scissor:Vt,viewport:Tt,reset:be}}function Th(i,t,e,n){let s=i1(n);switch(e){case kh:return i*t;case Vh:return i*t;case Wh:return i*t*2;case ec:return i*t/s.components*s.byteLength;case nc:return i*t/s.components*s.byteLength;case Xh:return i*t*2/s.components*s.byteLength;case ic:return i*t*2/s.components*s.byteLength;case Gh:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case sc:return i*t*4/s.components*s.byteLength;case Kr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case ka:return Math.max(i,16)*Math.max(t,8)/4;case Ha:case za:return Math.max(i,8)*Math.max(t,8)/2;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case eo:case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qh:case al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function i1(i){switch(i){case si:case Hh:return{byteLength:1,components:1};case hr:case Oh:case hn:return{byteLength:2,components:1};case jl:case tc:return{byteLength:2,components:4};case ri:case Ql:case On:return{byteLength:4,components:1};case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function s1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return u?new OffscreenCanvas(A,S):ro("canvas")}function y(A,S,k){let K=1,et=zt(A);if((et.width>k||et.height>k)&&(K=k/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let J=Math.floor(K*et.width),It=Math.floor(K*et.height);f===void 0&&(f=g(J,It));let mt=S?g(J,It):f;return mt.width=J,mt.height=It,mt.getContext("2d").drawImage(A,0,0,J,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+It+")."),mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,S,k,K,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=S;if(S===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),S===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),S===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){let It=et?Fo:re.getTransfer(K);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=It===Ee?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(A,S){let k;return A?S===null||S===ri||S===Fs?k=i.DEPTH24_STENCIL8:S===On?k=i.DEPTH32F_STENCIL8:S===hr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ri||S===Fs?k=i.DEPTH_COMPONENT24:S===On?k=i.DEPTH_COMPONENT32F:S===hr&&(k=i.DEPTH_COMPONENT16),k}function R(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==yn&&A.minFilter!==Hn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function x(A){let S=A.target;S.removeEventListener("dispose",x),D(S),S.isVideoTexture&&h.delete(S)}function C(A){let S=A.target;S.removeEventListener("dispose",C),M(S)}function D(A){let S=n.get(A);if(S.__webglInit===void 0)return;let k=A.source,K=d.get(k);if(K){let et=K[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(A),Object.keys(K).length===0&&d.delete(k)}n.remove(A)}function b(A){let S=n.get(A);i.deleteTexture(S.__webglTexture);let k=A.source,K=d.get(k);delete K[S.__cacheKey],o.memory.textures--}function M(A){let S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let et=0;et<S.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(S.__webglFramebuffer[K][et]);else i.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)i.deleteFramebuffer(S.__webglFramebuffer[K]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let k=A.textures;for(let K=0,et=k.length;K<et;K++){let J=n.get(k[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(k[K])}n.remove(A)}let F=0;function z(){F=0}function O(){let A=F;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function W(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function j(A,S){let k=n.get(A);if(A.isVideoTexture&&Nt(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,A,S);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function Z(A,S){let k=n.get(A);if(A.version>0&&k.__version!==A.version){$(k,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function st(A,S){let k=n.get(A);if(A.version>0&&k.__version!==A.version){$(k,A,S);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function q(A,S){let k=n.get(A);if(A.version>0&&k.__version!==A.version){rt(k,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}let dt={[pe]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},Et={[yn]:i.NEAREST,[ru]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[Wo]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},Ft={[lu]:i.NEVER,[pu]:i.ALWAYS,[cu]:i.LESS,[Zh]:i.LEQUAL,[hu]:i.EQUAL,[uu]:i.GEQUAL,[du]:i.GREATER,[fu]:i.NOTEQUAL};function Yt(A,S){if(S.type===On&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Hn||S.magFilter===Wo||S.magFilter===Sr||S.magFilter===qi||S.minFilter===Hn||S.minFilter===Wo||S.minFilter===Sr||S.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,dt[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,dt[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,dt[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Et[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Et[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ft[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===yn||S.minFilter!==Sr&&S.minFilter!==qi||S.type===On&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ye(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",x));let K=S.source,et=d.get(K);et===void 0&&(et={},d.set(K,et));let J=W(S);if(J!==A.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),et[J].usedTimes++;let It=et[A.__cacheKey];It!==void 0&&(et[A.__cacheKey].usedTimes--,It.usedTimes===0&&b(S)),A.__cacheKey=J,A.__webglTexture=et[J].texture}return k}function $(A,S,k){let K=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=i.TEXTURE_3D);let et=ye(A,S),J=S.source;e.bindTexture(K,A.__webglTexture,i.TEXTURE0+k);let It=n.get(J);if(J.version!==It.__version||et===!0){e.activeTexture(i.TEXTURE0+k);let mt=re.getPrimaries(re.workingColorSpace),_t=S.colorSpace===Ei?null:re.getPrimaries(S.colorSpace),se=S.colorSpace===Ei||mt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ot=y(S.image,!1,s.maxTextureSize);ot=we(S,ot);let St=r.convert(S.format,S.colorSpace),kt=r.convert(S.type),Vt=E(S.internalFormat,St,kt,S.colorSpace,S.isVideoTexture);Yt(K,S);let Tt,ie=S.mipmaps,Kt=S.isVideoTexture!==!0,be=It.__version===void 0||et===!0,L=J.dataReady,ut=R(S,ot);if(S.isDepthTexture)Vt=_(S.format===Is,S.type),be&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Vt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Vt,ot.width,ot.height,0,St,kt,null));else if(S.isDataTexture)if(ie.length>0){Kt&&be&&e.texStorage2D(i.TEXTURE_2D,ut,Vt,ie[0].width,ie[0].height);for(let Y=0,Q=ie.length;Y<Q;Y++)Tt=ie[Y],Kt?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Tt.width,Tt.height,St,kt,Tt.data):e.texImage2D(i.TEXTURE_2D,Y,Vt,Tt.width,Tt.height,0,St,kt,Tt.data);S.generateMipmaps=!1}else Kt?(be&&e.texStorage2D(i.TEXTURE_2D,ut,Vt,ot.width,ot.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,St,kt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,ot.width,ot.height,0,St,kt,ot.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Kt&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Vt,ie[0].width,ie[0].height,ot.depth);for(let Y=0,Q=ie.length;Y<Q;Y++)if(Tt=ie[Y],S.format!==Pn)if(St!==null)if(Kt){if(L)if(S.layerUpdates.size>0){let vt=Th(Tt.width,Tt.height,S.format,S.type);for(let gt of S.layerUpdates){let Zt=Tt.data.subarray(gt*vt/Tt.data.BYTES_PER_ELEMENT,(gt+1)*vt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,gt,Tt.width,Tt.height,1,St,Zt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Tt.width,Tt.height,ot.depth,St,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Vt,Tt.width,Tt.height,ot.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Tt.width,Tt.height,ot.depth,St,kt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Vt,Tt.width,Tt.height,ot.depth,0,St,kt,Tt.data)}else{Kt&&be&&e.texStorage2D(i.TEXTURE_2D,ut,Vt,ie[0].width,ie[0].height);for(let Y=0,Q=ie.length;Y<Q;Y++)Tt=ie[Y],S.format!==Pn?St!==null?Kt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Tt.width,Tt.height,St,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Vt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Tt.width,Tt.height,St,kt,Tt.data):e.texImage2D(i.TEXTURE_2D,Y,Vt,Tt.width,Tt.height,0,St,kt,Tt.data)}else if(S.isDataArrayTexture)if(Kt){if(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Vt,ot.width,ot.height,ot.depth),L)if(S.layerUpdates.size>0){let Y=Th(ot.width,ot.height,S.format,S.type);for(let Q of S.layerUpdates){let vt=ot.data.subarray(Q*Y/ot.data.BYTES_PER_ELEMENT,(Q+1)*Y/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ot.width,ot.height,1,St,kt,vt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,St,kt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,ot.width,ot.height,ot.depth,0,St,kt,ot.data);else if(S.isData3DTexture)Kt?(be&&e.texStorage3D(i.TEXTURE_3D,ut,Vt,ot.width,ot.height,ot.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,St,kt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,ot.width,ot.height,ot.depth,0,St,kt,ot.data);else if(S.isFramebufferTexture){if(be)if(Kt)e.texStorage2D(i.TEXTURE_2D,ut,Vt,ot.width,ot.height);else{let Y=ot.width,Q=ot.height;for(let vt=0;vt<ut;vt++)e.texImage2D(i.TEXTURE_2D,vt,Vt,Y,Q,0,St,kt,null),Y>>=1,Q>>=1}}else if(ie.length>0){if(Kt&&be){let Y=zt(ie[0]);e.texStorage2D(i.TEXTURE_2D,ut,Vt,Y.width,Y.height)}for(let Y=0,Q=ie.length;Y<Q;Y++)Tt=ie[Y],Kt?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,St,kt,Tt):e.texImage2D(i.TEXTURE_2D,Y,Vt,St,kt,Tt);S.generateMipmaps=!1}else if(Kt){if(be){let Y=zt(ot);e.texStorage2D(i.TEXTURE_2D,ut,Vt,Y.width,Y.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,kt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Vt,St,kt,ot);m(S)&&p(K),It.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function rt(A,S,k){if(S.image.length!==6)return;let K=ye(A,S),et=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let J=n.get(et);if(et.version!==J.__version||K===!0){e.activeTexture(i.TEXTURE0+k);let It=re.getPrimaries(re.workingColorSpace),mt=S.colorSpace===Ei?null:re.getPrimaries(S.colorSpace),_t=S.colorSpace===Ei||It===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let se=S.isCompressedTexture||S.image[0].isCompressedTexture,ot=S.image[0]&&S.image[0].isDataTexture,St=[];for(let Q=0;Q<6;Q++)!se&&!ot?St[Q]=y(S.image[Q],!0,s.maxCubemapSize):St[Q]=ot?S.image[Q].image:S.image[Q],St[Q]=we(S,St[Q]);let kt=St[0],Vt=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type),ie=E(S.internalFormat,Vt,Tt,S.colorSpace),Kt=S.isVideoTexture!==!0,be=J.__version===void 0||K===!0,L=et.dataReady,ut=R(S,kt);Yt(i.TEXTURE_CUBE_MAP,S);let Y;if(se){Kt&&be&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,ie,kt.width,kt.height);for(let Q=0;Q<6;Q++){Y=St[Q].mipmaps;for(let vt=0;vt<Y.length;vt++){let gt=Y[vt];S.format!==Pn?Vt!==null?Kt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,gt.width,gt.height,Vt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,ie,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,gt.width,gt.height,Vt,Tt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,ie,gt.width,gt.height,0,Vt,Tt,gt.data)}}}else{if(Y=S.mipmaps,Kt&&be){Y.length>0&&ut++;let Q=zt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,ie,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ot){Kt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St[Q].width,St[Q].height,Vt,Tt,St[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ie,St[Q].width,St[Q].height,0,Vt,Tt,St[Q].data);for(let vt=0;vt<Y.length;vt++){let Zt=Y[vt].image[Q].image;Kt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,Zt.width,Zt.height,Vt,Tt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,ie,Zt.width,Zt.height,0,Vt,Tt,Zt.data)}}else{Kt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Vt,Tt,St[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ie,Vt,Tt,St[Q]);for(let vt=0;vt<Y.length;vt++){let gt=Y[vt];Kt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,Vt,Tt,gt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,ie,Vt,Tt,gt.image[Q])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),J.__version=et.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function At(A,S,k,K,et,J){let It=r.convert(k.format,k.colorSpace),mt=r.convert(k.type),_t=E(k.internalFormat,It,mt,k.colorSpace),se=n.get(S),ot=n.get(k);if(ot.__renderTarget=S,!se.__hasExternalTextures){let St=Math.max(1,S.width>>J),kt=Math.max(1,S.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,_t,St,kt,S.depth,0,It,mt,null):e.texImage2D(et,J,_t,St,kt,0,It,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Xt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,ot.__webglTexture,0,Bt(S)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,ot.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(A,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){let K=S.depthTexture,et=K&&K.isDepthTexture?K.type:null,J=_(S.stencilBuffer,et),It=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=Bt(S);Xt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,J,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,A)}else{let K=S.textures;for(let et=0;et<K.length;et++){let J=K[et],It=r.convert(J.format,J.colorSpace),mt=r.convert(J.type),_t=E(J.internalFormat,It,mt,J.colorSpace),se=Bt(S);k&&Xt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,_t,S.width,S.height):Xt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,_t,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,_t,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);let et=K.__webglTexture,J=Bt(S);if(S.depthTexture.format===xs)Xt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(S.depthTexture.format===Is)Xt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Gt(A){let S=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let K=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=K}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ot(S.__webglFramebuffer,A)}else if(k){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=i.createRenderbuffer(),ct(S.__webglDepthbuffer[K],A,!1);else{let et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ct(S.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(A,S,k){let K=n.get(A);S!==void 0&&At(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Gt(A)}function Te(A){let S=A.texture,k=n.get(A),K=n.get(S);A.addEventListener("dispose",C);let et=A.textures,J=A.isWebGLCubeRenderTarget===!0,It=et.length>1;if(It||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[mt]=[];for(let _t=0;_t<S.mipmaps.length;_t++)k.__webglFramebuffer[mt][_t]=i.createFramebuffer()}else k.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let mt=0;mt<S.mipmaps.length;mt++)k.__webglFramebuffer[mt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(It)for(let mt=0,_t=et.length;mt<_t;mt++){let se=n.get(et[mt]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Xt(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let mt=0;mt<et.length;mt++){let _t=et[mt];k.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[mt]);let se=r.convert(_t.format,_t.colorSpace),ot=r.convert(_t.type),St=E(_t.internalFormat,se,ot,_t.colorSpace,A.isXRRenderTarget===!0),kt=Bt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,St,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,k.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,S);for(let mt=0;mt<6;mt++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)At(k.__webglFramebuffer[mt][_t],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,_t);else At(k.__webglFramebuffer[mt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let mt=0,_t=et.length;mt<_t;mt++){let se=et[mt],ot=n.get(se);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Yt(i.TEXTURE_2D,se),At(k.__webglFramebuffer,A,se,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(se)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(mt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,K.__webglTexture),Yt(mt,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)At(k.__webglFramebuffer[_t],A,S,i.COLOR_ATTACHMENT0,mt,_t);else At(k.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,mt,0);m(S)&&p(mt),e.unbindTexture()}A.depthBuffer&&Gt(A)}function jt(A){let S=A.textures;for(let k=0,K=S.length;k<K;k++){let et=S[k];if(m(et)){let J=v(A),It=n.get(et).__webglTexture;e.bindTexture(J,It),p(J),e.unbindTexture()}}}let X=[],I=[];function Ut(A){if(A.samples>0){if(Xt(A)===!1){let S=A.textures,k=A.width,K=A.height,et=i.COLOR_BUFFER_BIT,J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(A),mt=S.length>1;if(mt)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[_t]);let se=n.get(S[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,k,K,0,0,k,K,et,i.NEAREST),l===!0&&(X.length=0,I.length=0,X.push(i.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(X.push(J),I.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,It.__webglColorRenderbuffer[_t]);let se=n.get(S[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Bt(A){return Math.min(s.maxSamples,A.samples)}function Xt(A){let S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Nt(A){let S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function we(A,S){let k=A.colorSpace,K=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Fi&&k!==Ei&&(re.getTransfer(k)===Ee?(K!==Pn||et!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function zt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=st,this.setTextureCube=q,this.rebindTextures=Wt,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Xt}function r1(i,t){function e(n,s=Ei){let r,o=re.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hh)return i.BYTE;if(n===Oh)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===Ql)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===kh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===Pn)return i.RGBA;if(n===Vh)return i.LUMINANCE;if(n===Wh)return i.LUMINANCE_ALPHA;if(n===xs)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===ec)return i.RED;if(n===nc)return i.RED_INTEGER;if(n===Xh)return i.RG;if(n===ic)return i.RG_INTEGER;if(n===sc)return i.RGBA_INTEGER;if(n===Kr||n===Qr||n===jr||n===to)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Oa||n===za||n===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Va||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Va)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===Qa||n===ja||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===rl||n===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===eo)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qh||n===al||n===ll||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var bl=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},pt=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},o1={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l1=`
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

}`,xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new cn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:a1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new U(new lt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends bi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null,y=new xl,m=e.getContextAttributes(),p=null,v=null,E=[],_=[],R=new it,x=null,C=new Ke;C.viewport=new Me;let D=new Ke;D.viewport=new Me;let b=[C,D],M=new bl,F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=E[$];return rt===void 0&&(rt=new ar,E[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=E[$];return rt===void 0&&(rt=new ar,E[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=E[$];return rt===void 0&&(rt=new ar,E[$]=rt),rt.getHandSpace()};function O($){let rt=_.indexOf($.inputSource);if(rt===-1)return;let At=E[rt];At!==void 0&&(At.update($.inputSource,$.frame,c||o),At.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let $=0;$<E.length;$++){let rt=_[$];rt!==null&&(_[$]=null,E[$].disconnect(rt))}F=null,z=null,y.reset(),t.setRenderTarget(p),u=null,d=null,f=null,s=null,v=null,ye.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Ye(u.framebufferWidth,u.framebufferHeight,{format:Pn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,At=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Is:xs,At=m.stencil?Fs:ri);let Ot={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Ye(d.textureWidth,d.textureHeight,{format:Pn,type:si,depthTexture:new Us(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j($){for(let rt=0;rt<$.removed.length;rt++){let At=$.removed[rt],ct=_.indexOf(At);ct>=0&&(_[ct]=null,E[ct].disconnect(At))}for(let rt=0;rt<$.added.length;rt++){let At=$.added[rt],ct=_.indexOf(At);if(ct===-1){for(let Gt=0;Gt<E.length;Gt++)if(Gt>=_.length){_.push(At),ct=Gt;break}else if(_[Gt]===null){_[Gt]=At,ct=Gt;break}if(ct===-1)break}let Ot=E[ct];Ot&&Ot.connect(At)}}let Z=new P,st=new P;function q($,rt,At){Z.setFromMatrixPosition(rt.matrixWorld),st.setFromMatrixPosition(At.matrixWorld);let ct=Z.distanceTo(st),Ot=rt.projectionMatrix.elements,Gt=At.projectionMatrix.elements,Wt=Ot[14]/(Ot[10]-1),Te=Ot[14]/(Ot[10]+1),jt=(Ot[9]+1)/Ot[5],X=(Ot[9]-1)/Ot[5],I=(Ot[8]-1)/Ot[0],Ut=(Gt[8]+1)/Gt[0],Bt=Wt*I,Xt=Wt*Ut,Nt=ct/(-I+Ut),we=Nt*-I;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(we),$.translateZ(Nt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ot[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let zt=Wt+Nt,A=Te+Nt,S=Bt-we,k=Xt+(ct-we),K=jt*Te/A*zt,et=X*Te/A*zt;$.projectionMatrix.makePerspective(S,k,K,et,zt,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function dt($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let rt=$.near,At=$.far;y.texture!==null&&(y.depthNear>0&&(rt=y.depthNear),y.depthFar>0&&(At=y.depthFar)),M.near=D.near=C.near=rt,M.far=D.far=C.far=At,(F!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),F=M.near,z=M.far),C.layers.mask=$.layers.mask|2,D.layers.mask=$.layers.mask|4,M.layers.mask=C.layers.mask|D.layers.mask;let ct=$.parent,Ot=M.cameras;dt(M,ct);for(let Gt=0;Gt<Ot.length;Gt++)dt(Ot[Gt],ct);Ot.length===2?q(M,C,D):M.projectionMatrix.copy(C.projectionMatrix),Et($,M,ct)};function Et($,rt,At){At===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(At.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=so*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let Ft=null;function Yt($,rt){if(h=rt.getViewerPose(c||o),g=rt,h!==null){let At=h.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let ct=!1;At.length!==M.cameras.length&&(M.cameras.length=0,ct=!0);for(let Gt=0;Gt<At.length;Gt++){let Wt=At[Gt],Te=null;if(u!==null)Te=u.getViewport(Wt);else{let X=f.getViewSubImage(d,Wt);Te=X.viewport,Gt===0&&(t.setRenderTargetTextures(v,X.colorTexture,d.ignoreDepthValues?void 0:X.depthStencilTexture),t.setRenderTarget(v))}let jt=b[Gt];jt===void 0&&(jt=new Ke,jt.layers.enable(Gt),jt.viewport=new Me,b[Gt]=jt),jt.matrix.fromArray(Wt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Wt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(Te.x,Te.y,Te.width,Te.height),Gt===0&&(M.matrix.copy(jt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ct===!0&&M.cameras.push(jt)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){let Gt=f.getDepthInformation(At[0]);Gt&&Gt.isValid&&Gt.texture&&y.init(t,Gt,s.renderState)}}for(let At=0;At<E.length;At++){let ct=_[At],Ot=E[At];ct!==null&&Ot!==void 0&&Ot.update(ct,rt,c||o)}Ft&&Ft($,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}let ye=new Qh;ye.setAnimationLoop(Yt),this.setAnimationLoop=function($){Ft=$},this.dispose=function(){}}},ki=new Gn,c1=new Se;function h1(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,E,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),E=v.envMap,_=v.envMapRotation;E&&(m.envMap.value=E,ki.copy(_),ki.x*=-1,ki.y*=-1,ki.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(c1.makeRotationFromEuler(ki)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function d1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let _=E.program;n.uniformBlockBinding(v,_)}function c(v,E){let _=s[v.id];_===void 0&&(g(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",m));let R=E.program;n.updateUBOMapping(v,R);let x=t.render.frame;r[v.id]!==x&&(d(v),r[v.id]=x)}function h(v){let E=f();v.__bindingPointIndex=E;let _=i.createBuffer(),R=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,_),_}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let E=s[v.id],_=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,C=_.length;x<C;x++){let D=Array.isArray(_[x])?_[x]:[_[x]];for(let b=0,M=D.length;b<M;b++){let F=D[b];if(u(F,x,b,R)===!0){let z=F.__offset,O=Array.isArray(F.value)?F.value:[F.value],W=0;for(let j=0;j<O.length;j++){let Z=O[j],st=y(Z);typeof Z=="number"||typeof Z=="boolean"?(F.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,z+W,F.__data)):Z.isMatrix3?(F.__data[0]=Z.elements[0],F.__data[1]=Z.elements[1],F.__data[2]=Z.elements[2],F.__data[3]=0,F.__data[4]=Z.elements[3],F.__data[5]=Z.elements[4],F.__data[6]=Z.elements[5],F.__data[7]=0,F.__data[8]=Z.elements[6],F.__data[9]=Z.elements[7],F.__data[10]=Z.elements[8],F.__data[11]=0):(Z.toArray(F.__data,W),W+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,E,_,R){let x=v.value,C=E+"_"+_;if(R[C]===void 0)return typeof x=="number"||typeof x=="boolean"?R[C]=x:R[C]=x.clone(),!0;{let D=R[C];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return R[C]=x,!0}else if(D.equals(x)===!1)return D.copy(x),!0}return!1}function g(v){let E=v.uniforms,_=0,R=16;for(let C=0,D=E.length;C<D;C++){let b=Array.isArray(E[C])?E[C]:[E[C]];for(let M=0,F=b.length;M<F;M++){let z=b[M],O=Array.isArray(z.value)?z.value:[z.value];for(let W=0,j=O.length;W<j;W++){let Z=O[W],st=y(Z),q=_%R,dt=q%st.boundary,Et=q+dt;_+=dt,Et!==0&&R-Et<st.storage&&(_+=R-Et),z.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=st.storage}}}let x=_%R;return x>0&&(_+=R-x),v.__size=_,v.__cache={},this}function y(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),E}function m(v){let E=v.target;E.removeEventListener("dispose",m);let _=o.indexOf(E.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var go=class{constructor(t={}){let{canvas:e=gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,v=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ne,this.toneMapping=kn,this.toneMappingExposure=1;let _=this,R=!1,x=0,C=0,D=null,b=-1,M=null,F=new Me,z=new Me,O=null,W=new Lt(0),j=0,Z=e.width,st=e.height,q=1,dt=null,Et=null,Ft=new Me(0,0,Z,st),Yt=new Me(0,0,Z,st),ye=!1,$=new dr,rt=!1,At=!1,ct=new Se,Ot=new Se,Gt=new P,Wt=new Me,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function X(){return D===null?q:1}let I=n;function Ut(T,B){return e.getContext(T,B)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jl}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),I===null){let B="webgl2";if(I=Ut(B,T),I===null)throw Ut(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Bt,Xt,Nt,we,zt,A,S,k,K,et,J,It,mt,_t,se,ot,St,kt,Vt,Tt,ie,Kt,be,L;function ut(){Bt=new wm(I),Bt.init(),Kt=new r1(I,Bt),Xt=new Mm(I,Bt,t,Kt),Nt=new n1(I,Bt),Xt.reverseDepthBuffer&&d&&Nt.buffers.depth.setReversed(!0),we=new Pm(I),zt=new Vg,A=new s1(I,Bt,Nt,zt,Xt,Kt,we),S=new Tm(_),k=new Am(_),K=new Nu(I),be=new Em(I,K),et=new Rm(I,K,we,be),J=new Im(I,et,K,we),Vt=new Fm(I,Xt,A),ot=new Sm(zt),It=new Gg(_,S,k,Bt,Xt,be,ot),mt=new h1(_,zt),_t=new Xg,se=new Kg(Bt),kt=new vm(_,S,k,Nt,J,u,l),St=new t1(_,J,Xt),L=new d1(I,we,Xt,Nt),Tt=new _m(I,Bt,we),ie=new Cm(I,Bt,we),we.programs=It.programs,_.capabilities=Xt,_.extensions=Bt,_.properties=zt,_.renderLists=_t,_.shadowMap=St,_.state=Nt,_.info=we}ut();let Y=new Al(_,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=Bt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Bt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(Z,st,!1))},this.getSize=function(T){return T.set(Z,st)},this.setSize=function(T,B,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,st=B,e.width=Math.floor(T*q),e.height=Math.floor(B*q),G===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Z*q,st*q).floor()},this.setDrawingBufferSize=function(T,B,G){Z=T,st=B,q=G,e.width=Math.floor(T*G),e.height=Math.floor(B*G),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(Ft)},this.setViewport=function(T,B,G,V){T.isVector4?Ft.set(T.x,T.y,T.z,T.w):Ft.set(T,B,G,V),Nt.viewport(F.copy(Ft).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Yt)},this.setScissor=function(T,B,G,V){T.isVector4?Yt.set(T.x,T.y,T.z,T.w):Yt.set(T,B,G,V),Nt.scissor(z.copy(Yt).multiplyScalar(q).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(T){Nt.setScissorTest(ye=T)},this.setOpaqueSort=function(T){dt=T},this.setTransparentSort=function(T){Et=T},this.getClearColor=function(T){return T.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(T=!0,B=!0,G=!0){let V=0;if(T){let N=!1;if(D!==null){let at=D.texture.format;N=at===sc||at===ic||at===nc}if(N){let at=D.texture.type,yt=at===si||at===ri||at===hr||at===Fs||at===jl||at===tc,wt=kt.getClearColor(),Rt=kt.getClearAlpha(),qt=wt.r,$t=wt.g,Ct=wt.b;yt?(g[0]=qt,g[1]=$t,g[2]=Ct,g[3]=Rt,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=qt,y[1]=$t,y[2]=Ct,y[3]=Rt,I.clearBufferiv(I.COLOR,0,y))}else V|=I.COLOR_BUFFER_BIT}B&&(V|=I.DEPTH_BUFFER_BIT),G&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),_t.dispose(),se.dispose(),zt.dispose(),S.dispose(),k.dispose(),J.dispose(),be.dispose(),L.dispose(),It.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",vc),Y.removeEventListener("sessionend",Ec),Ui.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=we.autoReset,B=St.enabled,G=St.autoUpdate,V=St.needsUpdate,N=St.type;ut(),we.autoReset=T,St.enabled=B,St.autoUpdate=G,St.needsUpdate=V,St.type=N}function gt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Zt(T){let B=T.target;B.removeEventListener("dispose",Zt),Be(B)}function Be(T){Qe(T),zt.remove(T)}function Qe(T){let B=zt.get(T).programs;B!==void 0&&(B.forEach(function(G){It.releaseProgram(G)}),T.isShaderMaterial&&It.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,G,V,N,at){B===null&&(B=Te);let yt=N.isMesh&&N.matrixWorld.determinant()<0,wt=wf(T,B,G,V,N);Nt.setMaterial(V,yt);let Rt=G.index,qt=1;if(V.wireframe===!0){if(Rt=et.getWireframeAttribute(G),Rt===void 0)return;qt=2}let $t=G.drawRange,Ct=G.attributes.position,le=$t.start*qt,xe=($t.start+$t.count)*qt;at!==null&&(le=Math.max(le,at.start*qt),xe=Math.min(xe,(at.start+at.count)*qt)),Rt!==null?(le=Math.max(le,0),xe=Math.min(xe,Rt.count)):Ct!=null&&(le=Math.max(le,0),xe=Math.min(xe,Ct.count));let Re=xe-le;if(Re<0||Re===1/0)return;be.setup(N,V,wt,G,Rt);let ln,fe=Tt;if(Rt!==null&&(ln=K.get(Rt),fe=ie,fe.setIndex(ln)),N.isMesh)V.wireframe===!0?(Nt.setLineWidth(V.wireframeLinewidth*X()),fe.setMode(I.LINES)):fe.setMode(I.TRIANGLES);else if(N.isLine){let Dt=V.linewidth;Dt===void 0&&(Dt=1),Nt.setLineWidth(Dt*X()),N.isLineSegments?fe.setMode(I.LINES):N.isLineLoop?fe.setMode(I.LINE_LOOP):fe.setMode(I.LINE_STRIP)}else N.isPoints?fe.setMode(I.POINTS):N.isSprite&&fe.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)fe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))fe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Dt=N._multiDrawStarts,Zn=N._multiDrawCounts,ue=N._multiDrawCount,An=Rt?K.get(Rt).bytesPerElement:1,ss=zt.get(V).currentProgram.getUniforms();for(let pn=0;pn<ue;pn++)ss.setValue(I,"_gl_DrawID",pn),fe.render(Dt[pn]/An,Zn[pn])}else if(N.isInstancedMesh)fe.renderInstances(le,Re,N.count);else if(G.isInstancedBufferGeometry){let Dt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Zn=Math.min(G.instanceCount,Dt);fe.renderInstances(le,Re,Zn)}else fe.render(le,Re)};function ve(T,B,G){T.transparent===!0&&T.side===te&&T.forceSinglePass===!1?(T.side=ze,T.needsUpdate=!0,Mr(T,B,G),T.side=Ti,T.needsUpdate=!0,Mr(T,B,G),T.side=te):Mr(T,B,G)}this.compile=function(T,B,G=null){G===null&&(G=T),p=se.get(G),p.init(B),E.push(p),G.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==G&&T.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let V=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let yt=0;yt<at.length;yt++){let wt=at[yt];ve(wt,G,N),V.add(wt)}else ve(at,G,N),V.add(at)}),E.pop(),p=null,V},this.compileAsync=function(T,B,G=null){let V=this.compile(T,B,G);return new Promise(N=>{function at(){if(V.forEach(function(yt){zt.get(yt).currentProgram.isReady()&&V.delete(yt)}),V.size===0){N(T);return}setTimeout(at,10)}Bt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let xn=null;function Yn(T){xn&&xn(T)}function vc(){Ui.stop()}function Ec(){Ui.start()}let Ui=new Qh;Ui.setAnimationLoop(Yn),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(T){xn=T,Y.setAnimationLoop(T),T===null?Ui.stop():Ui.start()},Y.addEventListener("sessionstart",vc),Y.addEventListener("sessionend",Ec),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,B,D),p=se.get(T,E.length),p.init(B),E.push(p),Ot.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(Ot),At=this.localClippingEnabled,rt=ot.init(this.clippingPlanes,At),m=_t.get(T,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){let at=_.xr.getDepthSensingMesh();at!==null&&Vo(at,B,-1/0,_.sortObjects)}Vo(T,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(dt,Et),jt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,jt&&kt.addToRenderList(m,T),this.info.render.frame++,rt===!0&&ot.beginShadows();let G=p.state.shadowsArray;St.render(G,T,B),rt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,N=m.transmissive;if(p.setupLights(),B.isArrayCamera){let at=B.cameras;if(N.length>0)for(let yt=0,wt=at.length;yt<wt;yt++){let Rt=at[yt];Mc(V,N,T,Rt)}jt&&kt.render(T);for(let yt=0,wt=at.length;yt<wt;yt++){let Rt=at[yt];_c(m,T,Rt,Rt.viewport)}}else N.length>0&&Mc(V,N,T,B),jt&&kt.render(T),_c(m,T,B);D!==null&&(A.updateMultisampleRenderTarget(D),A.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(_,T,B),be.resetDefaultState(),b=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],rt===!0&&ot.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Vo(T,B,G,V){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){V&&Wt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ot);let yt=J.update(T),wt=T.material;wt.visible&&m.push(T,yt,wt,G,Wt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){let yt=J.update(T),wt=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Wt.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Wt.copy(yt.boundingSphere.center)),Wt.applyMatrix4(T.matrixWorld).applyMatrix4(Ot)),Array.isArray(wt)){let Rt=yt.groups;for(let qt=0,$t=Rt.length;qt<$t;qt++){let Ct=Rt[qt],le=wt[Ct.materialIndex];le&&le.visible&&m.push(T,yt,le,G,Wt.z,Ct)}}else wt.visible&&m.push(T,yt,wt,G,Wt.z,null)}}let at=T.children;for(let yt=0,wt=at.length;yt<wt;yt++)Vo(at[yt],B,G,V)}function _c(T,B,G,V){let N=T.opaque,at=T.transmissive,yt=T.transparent;p.setupLightsView(G),rt===!0&&ot.setGlobalState(_.clippingPlanes,G),V&&Nt.viewport(F.copy(V)),N.length>0&&_r(N,B,G),at.length>0&&_r(at,B,G),yt.length>0&&_r(yt,B,G),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function Mc(T,B,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Ye(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?hn:si,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let at=p.state.transmissionRenderTarget[V.id],yt=V.viewport||F;at.setSize(yt.z,yt.w);let wt=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(W),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),jt&&kt.render(G);let Rt=_.toneMapping;_.toneMapping=kn;let qt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),rt===!0&&ot.setGlobalState(_.clippingPlanes,V),_r(T,G,V),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ct=0,le=B.length;Ct<le;Ct++){let xe=B[Ct],Re=xe.object,ln=xe.geometry,fe=xe.material,Dt=xe.group;if(fe.side===te&&Re.layers.test(V.layers)){let Zn=fe.side;fe.side=ze,fe.needsUpdate=!0,Sc(Re,G,V,ln,fe,Dt),fe.side=Zn,fe.needsUpdate=!0,$t=!0}}$t===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}_.setRenderTarget(wt),_.setClearColor(W,j),qt!==void 0&&(V.viewport=qt),_.toneMapping=Rt}function _r(T,B,G){let V=B.isScene===!0?B.overrideMaterial:null;for(let N=0,at=T.length;N<at;N++){let yt=T[N],wt=yt.object,Rt=yt.geometry,qt=V===null?yt.material:V,$t=yt.group;wt.layers.test(G.layers)&&Sc(wt,B,G,Rt,qt,$t)}}function Sc(T,B,G,V,N,at){T.onBeforeRender(_,B,G,V,N,at),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(_,B,G,V,T,at),N.transparent===!0&&N.side===te&&N.forceSinglePass===!1?(N.side=ze,N.needsUpdate=!0,_.renderBufferDirect(G,B,V,N,T,at),N.side=Ti,N.needsUpdate=!0,_.renderBufferDirect(G,B,V,N,T,at),N.side=te):_.renderBufferDirect(G,B,V,N,T,at),T.onAfterRender(_,B,G,V,N,at)}function Mr(T,B,G){B.isScene!==!0&&(B=Te);let V=zt.get(T),N=p.state.lights,at=p.state.shadowsArray,yt=N.state.version,wt=It.getParameters(T,N.state,at,B,G),Rt=It.getProgramCacheKey(wt),qt=V.programs;V.environment=T.isMeshStandardMaterial?B.environment:null,V.fog=B.fog,V.envMap=(T.isMeshStandardMaterial?k:S).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,qt===void 0&&(T.addEventListener("dispose",Zt),qt=new Map,V.programs=qt);let $t=qt.get(Rt);if($t!==void 0){if(V.currentProgram===$t&&V.lightsStateVersion===yt)return bc(T,wt),$t}else wt.uniforms=It.getUniforms(T),T.onBeforeCompile(wt,_),$t=It.acquireProgram(wt,Rt),qt.set(Rt,$t),V.uniforms=wt.uniforms;let Ct=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ct.clippingPlanes=ot.uniform),bc(T,wt),V.needsLights=Cf(T),V.lightsStateVersion=yt,V.needsLights&&(Ct.ambientLightColor.value=N.state.ambient,Ct.lightProbe.value=N.state.probe,Ct.directionalLights.value=N.state.directional,Ct.directionalLightShadows.value=N.state.directionalShadow,Ct.spotLights.value=N.state.spot,Ct.spotLightShadows.value=N.state.spotShadow,Ct.rectAreaLights.value=N.state.rectArea,Ct.ltc_1.value=N.state.rectAreaLTC1,Ct.ltc_2.value=N.state.rectAreaLTC2,Ct.pointLights.value=N.state.point,Ct.pointLightShadows.value=N.state.pointShadow,Ct.hemisphereLights.value=N.state.hemi,Ct.directionalShadowMap.value=N.state.directionalShadowMap,Ct.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ct.spotShadowMap.value=N.state.spotShadowMap,Ct.spotLightMatrix.value=N.state.spotLightMatrix,Ct.spotLightMap.value=N.state.spotLightMap,Ct.pointShadowMap.value=N.state.pointShadowMap,Ct.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=$t,V.uniformsList=null,$t}function Tc(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=ws.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function bc(T,B){let G=zt.get(T);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function wf(T,B,G,V,N){B.isScene!==!0&&(B=Te),A.resetTextureUnits();let at=B.fog,yt=V.isMeshStandardMaterial?B.environment:null,wt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Fi,Rt=(V.isMeshStandardMaterial?k:S).get(V.envMap||yt),qt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,$t=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ct=!!G.morphAttributes.position,le=!!G.morphAttributes.normal,xe=!!G.morphAttributes.color,Re=kn;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Re=_.toneMapping);let ln=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,fe=ln!==void 0?ln.length:0,Dt=zt.get(V),Zn=p.state.lights;if(rt===!0&&(At===!0||T!==M)){let En=T===M&&V.id===b;ot.setState(V,T,En)}let ue=!1;V.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Zn.state.version||Dt.outputColorSpace!==wt||N.isBatchedMesh&&Dt.batching===!1||!N.isBatchedMesh&&Dt.batching===!0||N.isBatchedMesh&&Dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Dt.instancing===!1||!N.isInstancedMesh&&Dt.instancing===!0||N.isSkinnedMesh&&Dt.skinning===!1||!N.isSkinnedMesh&&Dt.skinning===!0||N.isInstancedMesh&&Dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Dt.instancingMorph===!1&&N.morphTexture!==null||Dt.envMap!==Rt||V.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ot.numPlanes||Dt.numIntersection!==ot.numIntersection)||Dt.vertexAlphas!==qt||Dt.vertexTangents!==$t||Dt.morphTargets!==Ct||Dt.morphNormals!==le||Dt.morphColors!==xe||Dt.toneMapping!==Re||Dt.morphTargetsCount!==fe)&&(ue=!0):(ue=!0,Dt.__version=V.version);let An=Dt.currentProgram;ue===!0&&(An=Mr(V,B,N));let ss=!1,pn=!1,Ys=!1,Ce=An.getUniforms(),Un=Dt.uniforms;if(Nt.useProgram(An.program)&&(ss=!0,pn=!0,Ys=!0),V.id!==b&&(b=V.id,pn=!0),ss||M!==T){Nt.buffers.depth.getReversed()?(ct.copy(T.projectionMatrix),vu(ct),Eu(ct),Ce.setValue(I,"projectionMatrix",ct)):Ce.setValue(I,"projectionMatrix",T.projectionMatrix),Ce.setValue(I,"viewMatrix",T.matrixWorldInverse);let di=Ce.map.cameraPosition;di!==void 0&&di.setValue(I,Gt.setFromMatrixPosition(T.matrixWorld)),Xt.logarithmicDepthBuffer&&Ce.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ce.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,pn=!0,Ys=!0)}if(N.isSkinnedMesh){Ce.setOptional(I,N,"bindMatrix"),Ce.setOptional(I,N,"bindMatrixInverse");let En=N.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ce.setValue(I,"boneTexture",En.boneTexture,A))}N.isBatchedMesh&&(Ce.setOptional(I,N,"batchingTexture"),Ce.setValue(I,"batchingTexture",N._matricesTexture,A),Ce.setOptional(I,N,"batchingIdTexture"),Ce.setValue(I,"batchingIdTexture",N._indirectTexture,A),Ce.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&Ce.setValue(I,"batchingColorTexture",N._colorsTexture,A));let Zs=G.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0)&&Vt.update(N,G,An),(pn||Dt.receiveShadow!==N.receiveShadow)&&(Dt.receiveShadow=N.receiveShadow,Ce.setValue(I,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Un.envMap.value=Rt,Un.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&B.environment!==null&&(Un.envMapIntensity.value=B.environmentIntensity),pn&&(Ce.setValue(I,"toneMappingExposure",_.toneMappingExposure),Dt.needsLights&&Rf(Un,Ys),at&&V.fog===!0&&mt.refreshFogUniforms(Un,at),mt.refreshMaterialUniforms(Un,V,q,st,p.state.transmissionRenderTarget[T.id]),ws.upload(I,Tc(Dt),Un,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ws.upload(I,Tc(Dt),Un,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ce.setValue(I,"center",N.center),Ce.setValue(I,"modelViewMatrix",N.modelViewMatrix),Ce.setValue(I,"normalMatrix",N.normalMatrix),Ce.setValue(I,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let En=V.uniformsGroups;for(let di=0,fi=En.length;di<fi;di++){let xc=En[di];L.update(xc,An),L.bind(xc,An)}}return An}function Rf(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Cf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,B,G){zt.get(T.texture).__webglTexture=B,zt.get(T.depthTexture).__webglTexture=G;let V=zt.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){let G=zt.get(T);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,G=0){D=T,x=B,C=G;let V=!0,N=null,at=!1,yt=!1;if(T){let Rt=zt.get(T);if(Rt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(Rt.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Rt.__hasExternalTextures)A.rebindTextures(T,zt.get(T.texture).__webglTexture,zt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ct=T.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&zt.has(Ct)&&(T.width!==Ct.image.width||T.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}let qt=T.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(yt=!0);let $t=zt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($t[B])?N=$t[B][G]:N=$t[B],at=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?N=zt.get(T).__webglMultisampledFramebuffer:Array.isArray($t)?N=$t[G]:N=$t,F.copy(T.viewport),z.copy(T.scissor),O=T.scissorTest}else F.copy(Ft).multiplyScalar(q).floor(),z.copy(Yt).multiplyScalar(q).floor(),O=ye;if(Nt.bindFramebuffer(I.FRAMEBUFFER,N)&&V&&Nt.drawBuffers(T,N),Nt.viewport(F),Nt.scissor(z),Nt.setScissorTest(O),at){let Rt=zt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Rt.__webglTexture,G)}else if(yt){let Rt=zt.get(T.texture),qt=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.__webglTexture,G||0,qt)}b=-1},this.readRenderTargetPixels=function(T,B,G,V,N,at,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){Nt.bindFramebuffer(I.FRAMEBUFFER,wt);try{let Rt=T.texture,qt=Rt.format,$t=Rt.type;if(!Xt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-V&&G>=0&&G<=T.height-N&&I.readPixels(B,G,V,N,Kt.convert(qt),Kt.convert($t),at)}finally{let Rt=D!==null?zt.get(D).__webglFramebuffer:null;Nt.bindFramebuffer(I.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(T,B,G,V,N,at,yt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){let Rt=T.texture,qt=Rt.format,$t=Rt.type;if(!Xt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-V&&G>=0&&G<=T.height-N){Nt.bindFramebuffer(I.FRAMEBUFFER,wt);let Ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),I.readPixels(B,G,V,N,Kt.convert(qt),Kt.convert($t),0);let le=D!==null?zt.get(D).__webglFramebuffer:null;Nt.bindFramebuffer(I.FRAMEBUFFER,le);let xe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await yu(I,xe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer(Ct),I.deleteSync(xe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,G=0){T.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);let V=Math.pow(2,-G),N=Math.floor(T.image.width*V),at=Math.floor(T.image.height*V),yt=B!==null?B.x:0,wt=B!==null?B.y:0;A.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,yt,wt,N,at),Nt.unbindTexture()},this.copyTextureToTexture=function(T,B,G=null,V=null,N=0){T.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],B=arguments[2],N=arguments[3]||0,G=null);let at,yt,wt,Rt,qt,$t,Ct,le,xe,Re=T.isCompressedTexture?T.mipmaps[N]:T.image;G!==null?(at=G.max.x-G.min.x,yt=G.max.y-G.min.y,wt=G.isBox3?G.max.z-G.min.z:1,Rt=G.min.x,qt=G.min.y,$t=G.isBox3?G.min.z:0):(at=Re.width,yt=Re.height,wt=Re.depth||1,Rt=0,qt=0,$t=0),V!==null?(Ct=V.x,le=V.y,xe=V.z):(Ct=0,le=0,xe=0);let ln=Kt.convert(B.format),fe=Kt.convert(B.type),Dt;B.isData3DTexture?(A.setTexture3D(B,0),Dt=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),Dt=I.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),Dt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);let Zn=I.getParameter(I.UNPACK_ROW_LENGTH),ue=I.getParameter(I.UNPACK_IMAGE_HEIGHT),An=I.getParameter(I.UNPACK_SKIP_PIXELS),ss=I.getParameter(I.UNPACK_SKIP_ROWS),pn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Re.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Re.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rt),I.pixelStorei(I.UNPACK_SKIP_ROWS,qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$t);let Ys=T.isDataArrayTexture||T.isData3DTexture,Ce=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Un=zt.get(T),Zs=zt.get(B),En=zt.get(Un.__renderTarget),di=zt.get(Zs.__renderTarget);Nt.bindFramebuffer(I.READ_FRAMEBUFFER,En.__webglFramebuffer),Nt.bindFramebuffer(I.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let fi=0;fi<wt;fi++)Ys&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.get(T).__webglTexture,N,$t+fi),T.isDepthTexture?(Ce&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.get(B).__webglTexture,N,xe+fi),I.blitFramebuffer(Rt,qt,at,yt,Ct,le,at,yt,I.DEPTH_BUFFER_BIT,I.NEAREST)):Ce?I.copyTexSubImage3D(Dt,N,Ct,le,xe+fi,Rt,qt,at,yt):I.copyTexSubImage2D(Dt,N,Ct,le,xe+fi,Rt,qt,at,yt);Nt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ce?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Dt,N,Ct,le,xe,at,yt,wt,ln,fe,Re.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Dt,N,Ct,le,xe,at,yt,wt,ln,Re.data):I.texSubImage3D(Dt,N,Ct,le,xe,at,yt,wt,ln,fe,Re):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,Ct,le,at,yt,ln,fe,Re.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,Ct,le,Re.width,Re.height,ln,Re.data):I.texSubImage2D(I.TEXTURE_2D,N,Ct,le,at,yt,ln,fe,Re);I.pixelStorei(I.UNPACK_ROW_LENGTH,Zn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue),I.pixelStorei(I.UNPACK_SKIP_PIXELS,An),I.pixelStorei(I.UNPACK_SKIP_ROWS,ss),I.pixelStorei(I.UNPACK_SKIP_IMAGES,pn),N===0&&B.generateMipmaps&&I.generateMipmap(Dt),Nt.unbindTexture()},this.copyTextureToTexture3D=function(T,B,G=null,V=null,N=0){return T.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,T=arguments[2],B=arguments[3],N=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,G,V,N)},this.initRenderTarget=function(T){zt.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Nt.unbindTexture()},this.resetState=function(){x=0,C=0,D=null,Nt.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}},yo=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var vo=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},wl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dl,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new P,Eo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ri=class extends ai{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Es,js=new P,_s=new P,Ms=new P,Ss=new it,tr=new it,id=new Se,Vr=new P,er=new P,Wr=new P,bh=new it,_a=new it,xh=new it,Yi=class extends Fe{constructor(t=new Ri){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wl(e,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Eo(n,3,0,!1)),Es.setAttribute("uv",new Eo(n,2,3,!1))}this.geometry=Es,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),id.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-Ms.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Xr(Vr.set(-.5,-.5,0),Ms,o,_s,s,r),Xr(er.set(.5,-.5,0),Ms,o,_s,s,r),Xr(Wr.set(.5,.5,0),Ms,o,_s,s,r),bh.set(0,0),_a.set(1,0),xh.set(1,1);let a=t.ray.intersectTriangle(Vr,er,Wr,!1,js);if(a===null&&(Xr(er.set(-.5,.5,0),Ms,o,_s,s,r),_a.set(0,1),a=t.ray.intersectTriangle(Vr,Wr,er,!1,js),a===null))return;let l=t.ray.origin.distanceTo(js);l<t.near||l>t.far||e.push({distance:l,point:js.clone(),uv:_i.getInterpolation(js,Vr,er,Wr,bh,_a,xh,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Xr(i,t,e,n,s,r){Ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*Ss.x-s*Ss.y,tr.y=s*Ss.x+r*Ss.y):tr.copy(Ss),i.copy(t),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(id)}var Rl=class extends cn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=yn,h=yn,f,d){super(null,o,a,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _o=class extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ts=new Se,Ah=new Se,qr=[],wh=new oi,f1=new Se,nr=new U,ir=new Ai,Bs=class extends U{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _o(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,f1)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),wh.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(wh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),ir.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),t.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),Ah.multiplyMatrices(n,Ts),nr.matrixWorld=Ah,nr.raycast(t,qr);for(let o=0,a=qr.length;o<a;o++){let l=qr[o];l.instanceId=r,l.object=this,e.push(l)}qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rl(new Float32Array(s*this.count),s,this.count,ec,On));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ci=class extends ai{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rh=new Se,Cl=new lo,Yr=new Ai,Zr=new P,Zi=class extends Fe{constructor(t=new Ie,e=new Ci){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,t.ray.intersectsSphere(Yr)===!1)return;Rh.copy(s).invert(),Cl.copy(t.ray).applyMatrix4(Rh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let g=d,y=u;g<y;g++){let m=c.getX(g);Zr.fromBufferAttribute(f,m),Ch(Zr,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let g=d,y=u;g<y;g++)Zr.fromBufferAttribute(f,g),Ch(Zr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ch(i,t,e,n,s,r,o){let a=Cl.distanceSqToPoint(i);if(a<e){let l=new P;Cl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var De=class extends cn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new it:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],o=[],a=new P,l=new Se;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Je(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Je(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fr=class extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pl=class extends fr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function oc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,s(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var $r=new P,Ma=new oc,Sa=new oc,Ta=new oc,ur=class extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($r.subVectors(s[0],s[1]).add(s[0]),c=$r);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($r.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$r),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),u),y=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ma.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,y,m),Sa.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,y,m),Ta.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Sa.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Ta.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Ma.calc(l),Sa.calc(l),Ta.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ph(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function u1(i,t){let e=1-i;return e*e*t}function p1(i,t){return 2*(1-i)*i*t}function m1(i,t){return i*i*t}function lr(i,t,e,n){return u1(i,t)+p1(i,e)+m1(i,n)}function g1(i,t){let e=1-i;return e*e*e*t}function y1(i,t){let e=1-i;return 3*e*e*i*t}function v1(i,t){return 3*(1-i)*i*i*t}function E1(i,t){return i*i*i*t}function cr(i,t,e,n,s){return g1(i,t)+y1(i,e)+v1(i,n)+E1(i,s)}var Mo=class extends Mn{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fl=class extends Mn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y),cr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},So=class extends Mn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Il=class extends Mn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends Mn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends Mn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y),lr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Ph(a,l.x,c.x,h.x,f.x),Ph(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new it().fromArray(s))}return this}},Dl=Object.freeze({__proto__:null,ArcCurve:Pl,CatmullRomCurve3:ur,CubicBezierCurve:Mo,CubicBezierCurve3:Fl,EllipseCurve:fr,LineCurve:So,LineCurve3:Il,QuadraticBezierCurve:To,QuadraticBezierCurve3:bo,SplineCurve:xo}),Ll=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Dl[s.type]().fromJSON(s))}return this}},Ul=class extends Ll{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new So(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new To(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Mo(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new xo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new fr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ns=class i extends Ie{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Je(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,f=new P,d=new it,u=new P,g=new P,y=new P,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,u.x=p*1,u.y=-m,u.z=p*0,y.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=y.x,u.y+=y.y,u.z+=y.z,u.normalize(),l.push(u.x,u.y,u.z),y.copy(g)}for(let v=0;v<=e;v++){let E=n+v*h*s,_=Math.sin(E),R=Math.cos(E);for(let x=0;x<=t.length-1;x++){f.x=t[x].x*_,f.y=t[x].y,f.z=t[x].x*R,o.push(f.x,f.y,f.z),d.x=v/e,d.y=x/(t.length-1),a.push(d.x,d.y);let C=l[3*x+0]*_,D=l[3*x+1],b=l[3*x+0]*R;c.push(C,D,b)}}for(let v=0;v<e;v++)for(let E=0;E<t.length-1;E++){let _=E+v*t.length,R=_,x=_+t.length,C=_+t.length+1,D=_+1;r.push(R,x,D),r.push(C,D,x)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Hs=class i extends Ns{constructor(t=1,e=1,n=4,s=8){let r=new Ul;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Sn=class i extends Ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new P,h=new it;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ht=class i extends Ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],g=0,y=[],m=n/2,p=0;v(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(u,2));function v(){let _=new P,R=new P,x=0,C=(e-t)/n;for(let D=0;D<=r;D++){let b=[],M=D/r,F=M*(e-t)+t;for(let z=0;z<=s;z++){let O=z/s,W=O*l+a,j=Math.sin(W),Z=Math.cos(W);R.x=F*j,R.y=-M*n+m,R.z=F*Z,f.push(R.x,R.y,R.z),_.set(j,C,Z).normalize(),d.push(_.x,_.y,_.z),u.push(O,1-M),b.push(g++)}y.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){let M=y[b][D],F=y[b+1][D],z=y[b+1][D+1],O=y[b][D+1];(t>0||b!==0)&&(h.push(M,F,O),x+=3),(e>0||b!==r-1)&&(h.push(F,z,O),x+=3)}c.addGroup(p,x,0),p+=x}function E(_){let R=g,x=new it,C=new P,D=0,b=_===!0?t:e,M=_===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*M,0),d.push(0,M,0),u.push(.5,.5),g++;let F=g;for(let z=0;z<=s;z++){let W=z/s*l+a,j=Math.cos(W),Z=Math.sin(W);C.x=b*Z,C.y=m*M,C.z=b*j,f.push(C.x,C.y,C.z),d.push(0,M,0),x.x=j*.5+.5,x.y=Z*.5*M+.5,u.push(x.x,x.y),g++}for(let z=0;z<s;z++){let O=R+z,W=F+z;_===!0?h.push(W,W+1,O):h.push(W+1,W,O),D+=3}c.addGroup(p,D,_===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pi=class i extends Ht{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bl=class i extends Ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let E=new P,_=new P,R=new P;for(let x=0;x<e.length;x+=3)u(e[x+0],E),u(e[x+1],_),u(e[x+2],R),l(E,_,R,v)}function l(v,E,_,R){let x=R+1,C=[];for(let D=0;D<=x;D++){C[D]=[];let b=v.clone().lerp(_,D/x),M=E.clone().lerp(_,D/x),F=x-D;for(let z=0;z<=F;z++)z===0&&D===x?C[D][z]=b:C[D][z]=b.clone().lerp(M,z/F)}for(let D=0;D<x;D++)for(let b=0;b<2*(x-D)-1;b++){let M=Math.floor(b/2);b%2===0?(d(C[D][M+1]),d(C[D+1][M]),d(C[D][M])):(d(C[D][M+1]),d(C[D+1][M+1]),d(C[D+1][M]))}}function c(v){let E=new P;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(v),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function h(){let v=new P;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];let _=m(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;o.push(_,1-R)}g(),f()}function f(){for(let v=0;v<o.length;v+=6){let E=o[v+0],_=o[v+2],R=o[v+4],x=Math.max(E,_,R),C=Math.min(E,_,R);x>.9&&C<.1&&(E<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function u(v,E){let _=v*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function g(){let v=new P,E=new P,_=new P,R=new P,x=new it,C=new it,D=new it;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),x.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),R.copy(v).add(E).add(_).divideScalar(3);let F=m(R);y(x,M+0,v,F),y(C,M+2,E,F),y(D,M+4,_,F)}}function y(v,E,_,R){R<0&&v.x===1&&(o[E]=v.x-1),_.x===0&&_.z===0&&(o[E]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ao=class i extends Bl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ae=class i extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new P,d=new P,u=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let v=[],E=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){let x=R/e;f.x=-t*Math.cos(s+x*r)*Math.sin(o+E*a),f.y=t*Math.cos(o+E*a),f.z=t*Math.sin(s+x*r)*Math.sin(o+E*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),m.push(x+_,1-E),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let E=h[p][v+1],_=h[p][v],R=h[p+1][v],x=h[p+1][v+1];(p!==0||o>0)&&u.push(E,_,x),(p!==n-1||l<Math.PI)&&u.push(_,R,x)}this.setIndex(u),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vn=class i extends Ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,f=new P,d=new P;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){let y=g/s*r,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){let y=(s+1)*u+g-1,m=(s+1)*(u-1)+g-1,p=(s+1)*(u-1)+g,v=(s+1)*u+g;o.push(y,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var wo=class i extends Ie{constructor(t=new bo(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new it,h=new P,f=[],d=[],u=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(u,2));function y(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),v(),p()}function m(E){h=t.getPointAt(E/e,h);let _=o.normals[E],R=o.binormals[E];for(let x=0;x<=s;x++){let C=x/s*Math.PI*2,D=Math.sin(C),b=-Math.cos(C);l.x=b*_.x+D*R.x,l.y=b*_.y+D*R.y,l.z=b*_.z+D*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=e;E++)for(let _=1;_<=s;_++){let R=(s+1)*(E-1)+(_-1),x=(s+1)*E+(_-1),C=(s+1)*E+_,D=(s+1)*(E-1)+_;g.push(R,x,D),g.push(x,C,D)}}function v(){for(let E=0;E<=e;E++)for(let _=0;_<=s;_++)c.x=E/e,c.y=_/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Dl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var tt=class extends ai{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Jr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Os=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nl=class extends Os{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pc:r=t,a=2*e-n;break;case Fc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pc:o=t,l=2*n-e;break;case Fc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,E=(-1-u)*m+(1.5+u)*y+.5*g,_=u*m-u*y;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+v*o[c+R]+E*o[l+R]+_*o[f+R];return r}},Hl=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Ol=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case no:e=this.InterpolantFactoryMethodDiscrete;break;case hl:e=this.InterpolantFactoryMethodLinear;break;case Xo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&_1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let y=e[f+g];if(y!==e[d+g]||y!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=hl;var $i=class extends Fn{constructor(t,e,n){super(t,e,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=no;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends Fn{};zl.prototype.ValueTypeName="color";var kl=class extends Fn{};kl.prototype.ValueTypeName="number";var Gl=class extends Os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)xi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ro=class extends Fn{InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}};Ro.prototype.ValueTypeName="quaternion";Ro.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Fn{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=no;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Fn{};Vl.prototype.ValueTypeName="vector";var Wl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],g=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},M1=new Wl,Xl=class{constructor(t){this.manager=t!==void 0?t:M1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},me=class extends Ki{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ba=new Se,Fh=new P,Ih=new P,pr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fh),Ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ih),e.updateMatrixWorld(),ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ql=class extends pr{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=so*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Wn=class extends Ki{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ql}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Dh=new Se,sr=new P,xa=new P,Yl=class extends pr{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(sr),xa.copy(n.position),xa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xa),n.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),Dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh)}},ge=class extends Ki{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Zl=class extends pr{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ze=class extends Ki{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Zl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},li=class extends Ki{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Co=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Lh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Lh(){return 0}var ac="\\[\\]\\.:\\/",S1=new RegExp("["+ac+"]","g"),lc="[^"+ac+"]",T1="[^"+ac.replace("\\.","")+"]",b1=/((?:WC+[\/:])*)/.source.replace("WC",lc),x1=/(WCOD+)?/.source.replace("WCOD",T1),A1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),w1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),R1=new RegExp("^"+b1+x1+A1+w1+"$"),C1=["material","materials","bones","map"],$l=class{constructor(t,e,n){let s=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(S1,"")}static parseTrackName(t){let e=R1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);C1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=$l;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var l2=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);var Do={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ci=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},P1=new Ls(-1,1,1,-1,0,1),cc=class extends Ie{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}},F1=new cc,Vs=class{constructor(t){this._mesh=new U(F1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,P1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Qi=class extends ci{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof He?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ks.clone(t.uniforms),this.material=new He({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Vs(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var mr=class extends ci{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Lo=class extends ci{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Uo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qi(Do),this.copyPass.material.blending=zn,this.clock=new Co}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}mr!==void 0&&(o instanceof mr?n=!0:o instanceof Lo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var sd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ws=class i extends ci{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new Lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ye(r,o,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let d=new Ye(r,o,{type:hn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Ye(r,o,{type:hn});u.texture.name="UnrealBloomPass.v"+f,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=sd;this.highPassUniforms=ks.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new He({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new it(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Do;this.copyUniforms=ks.clone(h.uniforms),this.blendMaterial=new He({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ge,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Lt,this.oldClearAlpha=1,this.basic=new ce,this.fsQuad=new Vs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new He({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ws.BlurDirectionX=new it(1,0);Ws.BlurDirectionY=new it(0,1);var ji=1920,ts=1080;function Pt(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var No=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),ht=(i,t,e)=>i+(t-i)*e,Mt=(i,t,e)=>{let n=No((e-i)/(t-i));return n*n*(3-2*n)};var I1=i=>(i=No(i),i*i*(3-2*i));function hc(i,t){if(t<=i[0][0])return i[0][1];for(let e=1;e<i.length;e++)if(t<=i[e][0]){let n=I1((t-i[e-1][0])/(i[e][0]-i[e-1][0])),s=i[e-1][1],r=i[e][1];return Array.isArray(s)?s.map((o,a)=>ht(o,r[a],n)):ht(s,r,n)}return i[i.length-1][1]}var D1={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new it(ji,ts)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<44;i++){float fi=float(i);float r=sqrt(fi/44.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},L1={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new Lt(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(1.,.66);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1920.,1080.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Bo=class{constructor(t){let e=this.r=new go({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(ji,ts,!1),e.shadowMap.enabled=!0,e.shadowMap.type=Kl,e.toneMapping=kn,e.outputColorSpace=Fi;let n=new Us(ji,ts);n.type=ri,this.rt=new Ye(ji,ts,{type:hn,samples:4,depthTexture:n}),this.composer=new Uo(e,new Ye(ji,ts,{type:hn})),this.dof=new Qi(D1,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=n,this.bloom=new Ws(new it(ji/2,ts/2),.45,.75,.82),this.grade=new Qi(L1),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(o=>t>=o.t0&&t<o.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let n=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=n.focus??6,s.range.value=n.range??3,s.maxBlur.value=n.blur??20,this.bloom.strength=n.bloom??.45,this.bloom.threshold=n.bloomT??.82,this.bloom.radius=n.bloomR??.75,r.vig.value=n.vig??.42,r.exposure.value=n.exposure??1,r.sat.value=n.sat??1,r.flash.value=n.flash??0,r.frame.value=Math.floor(t*30)%97,r.tint.value.set(n.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function rd(i,t,e,n=40){let s=new vo;s.background=new Lt(e);let r=new Ke(n,ji/ts,.08,400);return{t0:i,t1:t,scene:s,camera:r,update(){return{}}}}function od(i,t,e,n=0){i.position.set(t[0],t[1],t[2]),i.up.set(Math.sin(n),Math.cos(n),0),i.lookAt(e[0],e[1],e[2])}var fn=1/420,dc=new Map;function un(i,t,e,n){if(dc.has(i))return dc.get(i);let s=document.createElement("canvas");s.width=t*2,s.height=e*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",n(r,t,e);let o=new De(s);return o.colorSpace=ne,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,dc.set(i,o),o}var he=i=>new Path2D(i);function $e(i,t,e){i.save(),i.fillStyle=e,i.fill(t),i.restore()}function Dn(i,t,e,n,s,...r){let o=i.createLinearGradient(t,e,n,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var U1={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function B1(i,t){return un("torso_"+t,300,320,e=>{if(e.translate(150,20),i.kind==="hoodie"){let n=he("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");$e(e,n,Dn(e,-100,0,100,260,i.a,i.b)),e.fillStyle=i.c,e.globalAlpha=.3,e.fill(he("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),e.globalAlpha=1,e.fillStyle=i.b,e.fill(he("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),e.fillStyle=i.c,e.fill(he("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),e.strokeStyle="#F4F4EE",e.lineWidth=5,e.beginPath(),e.moveTo(-18,66),e.lineTo(-20,126),e.moveTo(18,66),e.lineTo(20,126),e.stroke(),e.fillStyle="#F4F4EE",e.beginPath(),e.arc(-20,130,4.5,0,7),e.arc(20,130,4.5,0,7),e.fill(),e.fillStyle=i.b,e.strokeStyle=i.c,e.lineWidth=3.5;let s=he("M-62 164 L62 164 L78 240 L-78 240Z");e.fill(s),e.stroke(s),e.fillStyle=i.c,e.fillRect(-104,240,208,24),e.strokeStyle=i.b,e.lineWidth=2.5;for(let r=-100;r<104;r+=10)e.beginPath(),e.moveTo(r,242),e.lineTo(r,263),e.stroke()}else if(i.kind==="suit"){$e(e,he("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),Dn(e,-100,0,100,280,i.a,i.b)),e.strokeStyle="#ffffff10",e.lineWidth=2;for(let n=-92;n<96;n+=13)e.beginPath(),e.moveTo(n,30),e.lineTo(n,280),e.stroke();e.fillStyle="#F4F2EA",e.fill(he("M-34 6 L34 6 L10 138 L-10 138Z")),e.fillStyle="#39AE9F",e.fill(he("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),e.strokeStyle="#8FDCCF",e.lineWidth=2;for(let n=0;n<4;n++)e.beginPath(),e.moveTo(-10,52+n*20),e.lineTo(10,44+n*20),e.stroke();e.fillStyle=i.c,e.fill(he("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),e.fill(he("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),e.fillStyle="#39AE9F",e.fill(he("M-70 86 L-34 86 L-46 70 L-58 70Z")),e.fillStyle="#0d0f14",e.beginPath(),e.arc(0,176,7,0,7),e.arc(0,216,7,0,7),e.fill()}else if(i.kind==="coat")$e(e,he("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),Dn(e,-100,0,100,290,i.a,i.b)),e.fillStyle="#39AE9F",e.fill(he("M-30 6 L30 6 L12 118 L-12 118Z")),e.fillStyle="#20273a",e.fillRect(-13,16,26,100),e.fillStyle=i.c,e.fill(he("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),e.fill(he("M30 6 L54 24 L30 78 L6 128 L12 134Z")),e.strokeStyle=i.c,e.lineWidth=3,e.beginPath(),e.moveTo(0,130),e.lineTo(0,292),e.stroke(),e.strokeRect(-76,188,54,46),e.strokeRect(22,188,54,46),e.fillStyle="#3F6FB0",e.fillRect(44,182,5,26),e.fillStyle="#C9361F",e.fillRect(56,182,5,22);else if(i.kind==="dress"){$e(e,he("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),Dn(e,-60,0,60,120,i.a,i.b)),$e(e,he("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),Dn(e,-100,120,100,300,i.a,i.b)),e.fillStyle=i.belt,e.fillRect(-58,104,116,20);let n=7,s=()=>(n=n*16807%2147483647)/2147483647;e.fillStyle=i.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)e.beginPath(),e.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),e.fill()}}else $e(e,he("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),Dn(e,-70,0,70,200,i.a,i.b)),e.fillStyle="#0a0a12",e.fill(he("M-22 26 L22 26 L0 64Z")),$e(e,he("M-68 196 L68 196 L74 276 L-74 276Z"),i.pants||"#555",null),e.fillStyle=i.belt||i.c,e.fillRect(-70,192,140,12)})}function ad(i,t,e){return un("sl_"+t+e,90,170,n=>{if(n.translate(45,10),i.kind==="dress"||i.kind==="blouse"){e==="u"?($e(n,he("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),Dn(n,-26,0,26,50,i.a,i.b)),n.fillStyle="#17161e",n.fillRect(-7,48,14,100)):($e(n,he("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",i.kind?"#FFE9C8":null,3),n.fillStyle="#3a3a48",n.fillRect(-2,0,3,130));return}let s=134,r=e==="u"?27:23,o=e==="u"?23:18;$e(n,he(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),Dn(n,-r,0,r,0,i.a,i.b)),n.fillStyle=i.s,n.globalAlpha=.5,n.fill(he(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),n.globalAlpha=1,e==="f"&&(n.fillStyle=i.cuff,n.fill(he(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function N1(){return un("hand",90,100,i=>{i.translate(45,14);let t=he("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");$e(i,t,Dn(i,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),i.strokeStyle="#4a4a58",i.lineWidth=2,i.beginPath(),i.moveTo(-12,18),i.quadraticCurveTo(0,8,12,16),i.stroke()})}function ld(i){return un("leg"+i,50,160,t=>{t.translate(25,6),t.fillStyle="#191922",t.beginPath(),t.roundRect(-9,-6,18,158,9),t.fill(),t.fillStyle="#46465a",t.fillRect(-2.5,2,3,140)})}function H1(){return un("foot",80,40,i=>{i.translate(26,6),$e(i,he("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),i.fillStyle="#E8E4DA",i.fillRect(-14,19,56,5)})}function O1(i="round"){return un("head"+i,300,300,t=>{t.translate(150,150);let e=new Path2D;e.arc(0,0,118,0,7);let n=t.createRadialGradient(10,-46,2,0,0,122);n.addColorStop(0,"#2C2E44"),n.addColorStop(.42,"#14141F"),n.addColorStop(1,"#08080E"),t.fillStyle=n,t.fill(e),t.save(),t.clip(e),t.globalAlpha=.1,t.fillStyle="#9fa4d8",t.beginPath(),t.ellipse(-4,-98,70,16,0,0,7),t.fill(),t.restore()})}var dd={open(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(0,0,18,27,t*.06,0,7),i.fill()},look(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(11,0,18,26,0,0,7),i.fill()},lookl(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(-11,0,18,26,0,0,7),i.fill()},down(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(0,16,18,22,0,0,7),i.fill()},wide(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(0,-2,23,33,0,0,7),i.fill()},small(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(0,0,10,14,0,0,7),i.fill()},happy(i,t){i.strokeStyle="#F6EFE6",i.lineWidth=8.5,i.beginPath(),i.moveTo(-22,8),i.quadraticCurveTo(0,-24,22,8),i.stroke()},shut(i,t){i.strokeStyle="#F6EFE6",i.lineWidth=8.5,i.beginPath(),i.moveTo(-22,-6),i.quadraticCurveTo(0,18,22,-6),i.stroke()},flat(i,t){i.strokeStyle="#F6EFE6",i.lineWidth=8.5,i.beginPath(),i.moveTo(-22,2),i.lineTo(22,2),i.stroke()},smug(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.moveTo(-22,-6),i.lineTo(22,-6),i.quadraticCurveTo(20,24,0,24),i.quadraticCurveTo(-20,24,-22,-6),i.fill()},sad(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.moveTo(-19,t>0?-14:2),i.lineTo(19,t>0?2:-14),i.quadraticCurveTo(20,26,0,26),i.quadraticCurveTo(-20,26,-19,t>0?-14:2),i.fill()},angry(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.moveTo(-19,t>0?6:-14),i.lineTo(19,t>0?-14:6),i.quadraticCurveTo(20,26,0,26),i.quadraticCurveTo(-20,26,-19,t>0?6:-14),i.fill()},heart(i,t){i.fillStyle="#F0728C",i.beginPath(),i.moveTo(0,22),i.bezierCurveTo(-34,-2,-18,-30,0,-10),i.bezierCurveTo(18,-30,34,-2,0,22),i.fill()}};function z1(i,t){return un("eye_"+i+(t?"L":""),300,300,e=>{e.translate(150,150),[-1,1].forEach(n=>{e.save(),e.translate(n*42,0),dd[i](e,n),t&&(e.strokeStyle="#F6EFE6",e.lineWidth=3.5,[0,1,2].forEach(s=>{e.beginPath(),e.moveTo(n*(8+s*6),-22+s*3),e.quadraticCurveTo(n*(16+s*7),-34+s*2,n*(26+s*6),-36+s*5),e.stroke()})),e.restore()}),t&&(e.fillStyle="#E8667F55",[-1,1].forEach(n=>{e.beginPath(),e.ellipse(n*48,40,26,13,0,0,7),e.fill()}))})}function k1(i,t,e){return un("hair_"+i+t,420,500,n=>{if(n.translate(210,170),i==="long"){let s=he("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");$e(n,s,Dn(n,-120,-150,120,250,t,e||t)),n.strokeStyle="#ffffff30",n.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{n.beginPath(),n.moveTo(r,o),n.quadraticCurveTo(r*1.25,(o+l)/2,a,l),n.stroke()})}if(i==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),$e(n,s,t);let r=he("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");$e(n,r,t),n.strokeStyle="#ffffff33",n.lineWidth=6,n.beginPath(),n.moveTo(-60,-112),n.quadraticCurveTo(-10,-128,40,-112),n.stroke()}if(i==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),$e(n,l,t)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),n.strokeStyle="#ffffff22",n.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{n.beginPath(),n.arc(r,o,26,3.6,5.4),n.stroke()})}if(i==="bob"){let s=he("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");$e(n,s,Dn(n,0,-150,0,100,t,e||t)),n.strokeStyle="#ffffff30",n.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{n.beginPath(),n.moveTo(r,o),n.quadraticCurveTo(r*1.22,(o+l)/2,a,l),n.stroke()})}i==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),$e(n,l,"#E9E9EF")})})})}var cd=(i,t={})=>new ce({map:i,alphaTest:.5,alphaToCoverage:!0,side:te,...t}),hd=new Map,fc=new Map,G1=[];function V1(i){if(fc.has(i))return fc.get(i);let t=i.image,e=document.createElement("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;n.drawImage(t,Math.cos(a)*s,Math.sin(a)*s)}n.globalCompositeOperation="source-in",n.fillStyle="#FFFFFF",n.fillRect(0,0,e.width,e.height);let r=new De(e);return r.colorSpace=ne,r.anisotropy=8,fc.set(i,r),r}function dn(i,t,e,n,s,r=0,o,a=!1){let l=new lt(t*fn,e*fn);l.translate((t/2-n)*fn,(s-e/2)*fn,0);let c=cd(i);o.push(c);let h=new U(l,c);if(h.position.z=r,h.castShadow=!0,!a){let d=cd(V1(i),{color:"#FFE9C8"});G1.push(d);let u=new U(l,d);u.position.z=-.045-r,h.add(u)}let f=hd.get(i);return f||(f=new wi({depthPacking:zs,map:i,alphaTest:.5,side:te}),hd.set(i,f)),h.customDepthMaterial=f,h}function W1(){return un("blob",128,128,i=>{let t=i.createRadialGradient(64,64,2,64,64,62);t.addColorStop(0,"#000000AA"),t.addColorStop(.55,"#00000055"),t.addColorStop(1,"#00000000"),i.fillStyle=t,i.fillRect(0,0,128,128)})}function X1(){return un("halo",256,512,i=>{let t=i.createRadialGradient(128,256,10,128,256,128);t.addColorStop(0,"#FFE6C0"),t.addColorStop(.62,"#FFE6C066"),t.addColorStop(1,"#FFE6C000"),i.save(),i.translate(0,0),i.scale(1,2),i.translate(0,-128),i.fillStyle=t,i.fillRect(0,0,256,512),i.restore()})}function gr(i={}){let t=U1[i.outfit||"hero"],e=i.outfit||"hero",n=new pt,s=[],r=new pt;n.add(r);let o=316,a=o+262,l={},c={};for(let[m,p,v]of[["L",-1,-.012],["R",1,-.01]]){let E=new pt;E.position.set(p*34*fn,o*fn,v);let _=new pt;_.position.y=-142*fn,E.add(dn(ld(1),50,160,25,6,0,s)),_.add(dn(ld(1),50,160,25,6,0,s));let R=dn(H1(),80,40,26,6,.001,s);R.position.y=-142*fn,p<0&&(R.scale.x=-1),_.add(R),E.add(_),r.add(E),l[m]={th:E,shin:_}}let h=dn(B1(t,e),300,320,150,20,0,s);h.position.y=(a+4)*fn,r.add(h);for(let[m,p,v]of[["L",-1,-.006],["R",1,.006]]){let E=new pt;E.position.set(p*(t.kind==="dress"?66:84)*fn,(a-24)*fn,v);let _=new pt;_.position.y=-124*fn,E.add(dn(ad(t,e,"u"),90,170,45,10,0,s)),_.add(dn(ad(t,e,"f"),90,170,45,10,.001,s));let R=dn(N1(),90,100,45,14,.002,s);R.position.y=-128*fn,R.scale.set(p>0?-.8:.8,.8,1),_.add(R),E.add(_),r.add(E),c[m]={u:E,f:_,hand:R}}let f=new pt;if(f.position.set(0,(a+104)*fn,.02),r.add(f),i.hair){let m=dn(k1(i.hair,i.hairc||"#4a2c1a",i.hairhi),420,500,210,170,-.03,s);f.add(m)}if(f.add(dn(O1(),300,300,150,150,0,s)),i.hair&&i.hair!=="old"&&i.hair!=="afro"){let m=dn(un("fringe_"+i.hair+(i.hairc||""),300,300,p=>{p.translate(150,150);let v=i.hairc||"#4a2c1a";p.fillStyle=v,p.fill(he(i.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),p.strokeStyle="#ffffff2c",p.lineWidth=5,p.beginPath(),p.moveTo(-70,-92),p.quadraticCurveTo(-10,-114,54,-96),p.stroke()}),300,300,150,150,.003,s,!0);f.add(m)}if(i.lash){let m=dn(un("earring",300,300,p=>{p.translate(150,150),[-1,1].forEach(v=>{p.strokeStyle="#F2C94C",p.lineWidth=6,p.beginPath(),p.arc(v*124,58,15,0,7),p.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,f.add(m)}let d={};for(let m of Object.keys(dd)){let p=dn(z1(m,i.lash),300,300,150,150,.002,s,!0);p.castShadow=!1,p.visible=m==="open",f.add(p),d[m]=p}if(i.glasses){let m=dn(un("glasses",300,300,p=>{p.translate(150,150),p.strokeStyle="#E4E6EC",p.lineWidth=7,p.beginPath(),p.arc(-42,0,36,0,7),p.stroke(),p.beginPath(),p.arc(42,0,36,0,7),p.stroke(),p.beginPath(),p.moveTo(-6,0),p.lineTo(6,0),p.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,f.add(m)}if(i.hat){let m=dn(i.hat(un),300,300,150,150,.006,s);f.add(m)}let u=new U(new lt(1,.4),new ce({map:W1(),transparent:!0,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.012,n.add(u);let g=null;i.glow&&(g=new U(new lt(2.1,3),new ce({map:X1(),transparent:!0,depthWrite:!1,opacity:i.glow,blending:Ge,side:te})),g.position.set(0,.95,-.09),r.add(g));let y={root:n,body:r,head:f,arms:c,legs:l,eyes:d,mats:s,torso:h,tint(m){s.forEach(p=>p.color.set(m))},eye(m){for(let p in d)d[p].visible=p===m},cheer(m,p=0,v=1){let E=m*6+p,_=Math.sin(E);y.pose({armL:[150+_*16*v,18+_*10],armR:[150-_*16*v,18-_*10],bob:Math.abs(Math.sin(E*.5))*.07*v,head:_*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(p=>{p.transparent=m<1,p.opacity=m,p.alphaTest=m<1?.02:.5,p.alphaToCoverage=m>=1,p.depthWrite=m>=1}),u.material.opacity=m,g&&(g.material.opacity=(i.glow||0)*m)},pose(m={}){let p=Math.PI/180,v=m.armL||[6,4],E=m.armR||[6,4],_=m.legL||[0,0],R=m.legR||[0,0];c.L.u.rotation.z=-v[0]*p,c.L.f.rotation.z=-v[1]*p,c.R.u.rotation.z=E[0]*p,c.R.f.rotation.z=E[1]*p,l.L.th.rotation.z=-_[0]*p,l.L.shin.rotation.z=-_[1]*p,l.R.th.rotation.z=R[0]*p,l.R.shin.rotation.z=R[1]*p,f.rotation.z=(m.head||0)*p,r.rotation.z=(m.lean||0)*p,r.position.y=m.bob||0;let x=m.squash||0;r.scale.set(1-x*.5,1+x,1)},walk(m,p=1,v=1){let E=m*6.4*p,_=Math.sin(E),R=Math.cos(E);y.pose({legL:[_*15*v,Math.max(0,-_)*26*v],legR:[-_*15*v,Math.max(0,_)*26*v],armL:[8-_*12*v,6],armR:[8+_*12*v,6],bob:Math.abs(R)*.03*v,head:_*2})},place(m,p,v=0,E=1){n.position.set(m,v,p),n.scale.setScalar(E)},face(m){let p=m.position;n.rotation.y=Math.atan2(p.x-n.position.x,p.z-n.position.z),u.rotation.z=-n.rotation.y}};return y.pose(),y}function nt(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t;let s=n.getContext("2d");e(s,i,t);let r=new De(n);return r.colorSpace=ne,r.anisotropy=8,r}var hi=(i,t={})=>new tt({color:i,roughness:.88,metalness:0,...t});function w(i,t,e,n,s=0,r=0,o=0,a=!0){let l=new U(new en(i,t,e),typeof n=="string"?hi(n):n);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function Le(i,t,e=1){let n=nt(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new Yi(new Ri({map:n,color:i,transparent:!0,depthWrite:!1,opacity:e,blending:Ge}));return s.scale.set(t,t,1),s}var fd=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function q1(i,t,e,n,s,r=.42){let o=Pt(i),a=256*t,l=300*e,c,h=nt(a,l,d=>{d.fillStyle=n,d.fillRect(0,0,a,l);for(let u=0;u<l;u+=12)for(let g=u/12%2*-14;g<a;g+=30)d.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,d.fillRect(g,u,28,10);for(let u=0;u<e;u++)d.fillStyle="rgba(255,240,220,.14)",d.fillRect(0,u*300+292,a,8)}),f=nt(a,l,d=>{d.fillStyle="#000",d.fillRect(0,0,a,l);let u=h.image.getContext("2d");for(let g=0;g<e;g++)for(let y=0;y<t;y++){let m=y*256+56,p=g*300+60,v=144,E=196,_=o()<r,R=o();if(u.fillStyle="#E8E0CE",u.fillRect(m-9,p-9,v+18,E+18),u.fillStyle="rgba(0,0,0,.35)",u.fillRect(m-18,p+E+9,v+36,12),u.fillStyle="rgba(245,235,215,.8)",u.fillRect(m-18,p+E+6,v+36,8),u.fillStyle=s?_?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",u.fillRect(m,p,v,E),_||!s){let x=_?R<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";u.fillStyle=x,u.fillRect(m,p,26,E),u.fillRect(m+v-26,p,26,E)}s||(u.fillStyle="#ffffff30",u.beginPath(),u.moveTo(m+20,p+E),u.lineTo(m+90,p),u.lineTo(m+124,p),u.lineTo(m+54,p+E),u.fill()),u.fillStyle="#E8E0CE",u.fillRect(m+v/2-3,p,6,E),u.fillRect(m,p+E*.45,v,6),_&&s&&(d.fillStyle=R<.5?"#FFC47A":"#FFD79C",d.fillRect(m,p,v,E),d.fillStyle="#000",d.fillRect(m+v/2-3,p,6,E),d.fillRect(m,p+E*.45,v,6))}h.needsUpdate=!0});return f.colorSpace=ne,{map:h,emissiveMap:f}}function uc(i,t){let{x:e,z:n,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=t,f=Pt(i),d=new pt,u=o*2.9+3.6,g=c||fd[Math.floor(f()*fd.length)],y=Math.max(2,Math.round(r/2.1)),m=q1(i,y,o,g,l,t.lit??.42),p=new tt({map:m.map,emissiveMap:m.emissiveMap,emissive:new Lt(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),v=hi(g),E=[a>0?p:v,a>0?v:p,hi("#2c2730"),v,v,v],_=new U(new en(s,o*2.9,r),E);_.position.set(e,3.6+o*1.45,n),_.castShadow=_.receiveShadow=!0,d.add(_),d.add(w(s+.5,.5,r+.5,"#3d3540",e,u+.25,n)),d.add(w(s+.3,.35,r+.3,g,e,3.6,n));let R=e+a*(s/2+.01);if(h){let x=nt(1024,180,F=>{F.fillStyle=h.bg,F.fillRect(0,0,1024,180),F.fillStyle="#ffffff22",F.fillRect(0,0,1024,8),F.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,F.textAlign="center",F.textBaseline="middle",F.fillStyle=h.fg||"#FFF4DC",F.shadowColor=h.fg||"#FFF4DC",F.shadowBlur=l?26:0,F.fillText(h.name,512,96)}),C=new U(new en(.18,1.05,r-.3),[new tt({map:x,emissiveMap:x,emissive:new Lt(l?.85:0,l?.85:0,l?.85:0)}),new tt({map:x,emissiveMap:x,emissive:new Lt(l?.85:0,l?.85:0,l?.85:0)}),hi("#222"),hi("#222"),hi("#222"),hi("#222")]);C.position.set(R+a*.1,3.25,n),a>0&&(C.scale.z=-1),C.castShadow=!0,d.add(C);let D=nt(512,256,F=>{let z=F.createLinearGradient(0,0,0,256);z.addColorStop(0,h.win||"#F4C783"),z.addColorStop(1,"#D59A5C"),F.fillStyle=z,F.fillRect(0,0,512,256);let O=Pt(i+9);for(let W=0;W<26;W++)F.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(O()*6)],F.fillRect(O()*490,30+Math.floor(O()*3)*76,12+O()*26,52);for(let W of[84,160,236])F.fillStyle="#6b4530",F.fillRect(0,W,512,7)}),b=new tt({map:D,emissiveMap:D,emissive:new Lt(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});d.add(w(.3,2.8,r-.1,"#3a2a24",R-a*.1,1.4,n));let M=new U(new lt(r-.9,2.1),b);M.rotation.y=a*Math.PI/2,M.position.set(R+a*.07,1.5,n),d.add(M);for(let F=-1;F<=1;F++)d.add(w(.08,2.3,.09,"#2a1d18",R+a*.1,1.5,n+F*(r-.9)/2));if(h.awning){let F=nt(512,128,O=>{for(let W=0;W<12;W++)O.fillStyle=W%2?h.awning:"#F4EEDF",O.fillRect(W*512/12,0,42.666666666666664,128)}),z=new U(new lt(r-.3,1.3),new tt({map:F,side:te,roughness:.9}));z.rotation.y=a*Math.PI/2,z.rotation.order="YXZ",z.rotation.x=-1,z.position.set(R+a*.55,2.56,n),z.castShadow=!0,d.add(z)}if(l){let F=new ge(h.light||"#FFC88A",3.2,7,1.8);F.position.set(R+a*1.7,2.1,n),d.add(F)}}return d}function ud(i,t,e){let n=new U(new lt(i,t),e);return n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n}function Y1(i="#A99D90"){let t=nt(512,512,e=>{e.fillStyle=i,e.fillRect(0,0,512,512);let n=Pt(4);for(let s=0;s<2400;s++)e.fillStyle=`rgba(${n()<.5?"255,255,255":"0,0,0"},.035)`,e.fillRect(n()*512,n()*512,2,2);e.strokeStyle="rgba(30,20,20,.42)",e.lineWidth=4,e.strokeRect(0,0,512,512)});return t.wrapS=t.wrapT=pe,t}function md(i,t){let e=nt(1024,1024,s=>{s.fillStyle=t?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=Pt(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});e.wrapS=e.wrapT=pe,e.repeat.set(1,12);let n=ud(9,240,new tt({map:e,roughness:.78,metalness:.05}));n.position.set(0,0,-100),i.add(n);for(let s of[-1,1]){let r=Y1(t?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=ud(4.4,240,new tt({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),i.add(o),i.add(w(.22,.16,240,t?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function yr(i,t,e,n,s=!0,r=5.5){let o=new pt;o.add(w(.09,3.7,.09,"#15151b",t,1.85,e)),o.add(w(.26,.3,.26,"#15151b",t,.15,e));let a=w(.26,.4,.26,new tt({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),t,3.85,e,!1);if(o.add(a),o.add(w(.34,.06,.34,"#15151b",t,4.08,e,!1)),s){let l=Le("#FFB870",1.8,.4);l.position.set(t,3.85,e),o.add(l);let c=new ge("#FFC688",r,11,1.6);c.position.set(t,3.5,e),o.add(c)}return i.add(o),o}var pd={};function nn(i,t,e,n=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new pt;o.add(w(.18*n,2.6*n,.18*n,"#2b1e18",t,1.3*n,e));let a=s.join()+r%3,l=pd[a]||(pd[a]=nt(512,512,c=>{let h=Pt(r%3+3),f=(d,u,g,y)=>{c.fillStyle=y,c.beginPath();for(let m=0;m<=26;m++){let p=m/26*6.283,v=g*(.86+.14*Math.sin(p*5+d)+h()*.05);c.lineTo(d+Math.cos(p)*v,u+Math.sin(p)*v)}c.fill()};for(let[d,u,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])f(d,u,g,s[0]);for(let[d,u,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])f(d,u,g,s[1]);for(let[d,u,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])f(d,u,g,s[2]);c.fillStyle=s[3];for(let d=0;d<70;d++){let u=90+h()*330,g=70+h()*300;c.save(),c.translate(u,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new U(new lt(3.6*n,3.6*n),new tt({map:l,alphaTest:.5,side:te,roughness:1}));h.position.set(t,3.5*n,e),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new wi({depthPacking:zs,map:l,alphaTest:.5,side:te}),o.add(h)}return i.add(o),o}function Xs(i,t,e,n="#27425A",s=1,r=!0){let o=new pt,a=new tt({color:n,roughness:.38,metalness:.25}),l=new tt({color:"#1A2233",roughness:.12,metalness:.55});o.add(w(1.75,.5,4.1,a,0,.58,0)),o.add(w(1.6,.42,2.05,l,0,1.03,-.1)),o.add(w(1.5,.05,1.9,a,0,1.26,-.1)),o.add(w(1.8,.16,4.2,"#B9BCC2",0,.37,0));for(let[f,d]of[[-.86,1.3],[.86,1.3],[-.86,-1.3],[.86,-1.3]]){let u=new U(new Ht(.33,.33,.2,20),hi("#111"));u.rotation.z=Math.PI/2,u.position.set(f,.33,d),u.castShadow=!0,o.add(u);let g=new U(new Ht(.16,.16,.21,14),hi("#AEB2BA"));g.rotation.z=Math.PI/2,g.position.set(f,.33,d),o.add(g)}let c=new tt({color:"#fff",emissive:"#FFE8BE",emissiveIntensity:r?5:1}),h=new tt({color:"#900",emissive:"#FF2C2C",emissiveIntensity:r?2.5:.5});for(let f of[-.6,.6])o.add(w(.3,.16,.05,c,f,.64,2.06,!1)),o.add(w(.3,.12,.05,h,f,.68,-2.06,!1));return o.position.set(t,0,e),o.rotation.y=s>0?0:Math.PI,i.add(o),o}function Oe(i,t,e,n,s,r,o=3,a=0){let l=nt(1600,900,h=>{h.clearRect(0,0,1600,900);let f=Pt(o);for(let d=0;d<3;d++)for(let u=-40;u<1620;){let g=50+f()*110,y=180+f()*(d===0?660:400);if(h.fillStyle=s[d],h.fillRect(u,900-y,g,y),f()<.2&&h.fillRect(u+g/2-4,900-y-60,8,60),r)for(let m=900-y+12;m<890;m+=18)for(let p=u+8;p<u+g-8;p+=14)f()<.34&&(h.fillStyle=d===2?"#FFD999":d===1?"#E9C28C":"#A98BA0",h.fillRect(p,m,7,10));u+=g*.92}}),c=new U(new lt(e,n),new ce({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+n/2,t),i.add(c),c}function Ae(i,t,e,n,s){let r=nt(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new U(new lt(e,n),new ce({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,n*.32,t),i.add(o),o}var H=(i,t={})=>new tt({color:i,roughness:.85,...t});function de(i,t,e,n={}){let s=new U(new lt(t,e),new ce({map:i,alphaTest:n.blend?0:.5,transparent:!!n.blend,depthWrite:!n.blend,side:te,color:n.color||"#fff",blending:n.add?Ge:Mi,fog:n.fog??!0}));return n.shadow&&(s.castShadow=!0,s.customDepthMaterial=new wi({depthPacking:zs,map:i,alphaTest:.5,side:te})),s}function qs(i,t,e=.5){let n=nt(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#000000EE"),o.addColorStop(.6,"#00000066"),o.addColorStop(1,"#00000000"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new U(new lt(i,t),new ce({map:n,transparent:!0,depthWrite:!1,opacity:e}));return s.rotation.x=-Math.PI/2,s}function Ue(i,t){i.rotation.y=Math.atan2(t.position.x-i.position.x,t.position.z-i.position.z)}var pc={value:0};function gd(i="#8E3D30",t=4,e=3){let n=nt(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=Pt(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=i,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return n.wrapS=n.wrapT=pe,n.repeat.set(t,e),n}var yd=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function Z1(i,t){let[e,n,s,r]=yd[i];return nt(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=e,o.lineWidth=22,o.beginPath(),t?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=e,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=n,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),t?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function vd(i,t,e={}){let{h:n=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=e,a=Pt(o),l={};for(let c of t){let h=Math.floor(a()*yd.length)+(a()<(e.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,f=c%100,d=Z1(f,h),u=new ce({map:d,alphaTest:.5,side:te,color:r});u.onBeforeCompile=m=>{m.uniforms.uT=pc,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+f%3).toFixed(1)} + ph))*${s.toFixed(3)}/${n.toFixed(2)};`)};let g=new Bs(new lt(n*.5,n),u,l[c].length),y=new Fe;l[c].forEach((m,p)=>{y.position.set(m[0],(m[2]||0)+n/2,m[1]),y.rotation.y=m[3]||0;let v=.92+a()*.16;y.scale.set(v,v,1),y.updateMatrix(),g.setMatrixAt(p,y.matrix)}),g.frustumCulled=!1,i.add(g)}}function Ed(){return nt(2048,1024,i=>{let t=i.createLinearGradient(0,0,0,1024);t.addColorStop(0,"#2E5FA8"),t.addColorStop(.5,"#1E4E96"),t.addColorStop(1,"#2A5AA0"),i.fillStyle=t,i.fillRect(0,0,2048,1024);let e=Pt(77),n=[[[250,200],[520,170],[640,250],[560,340],[500,470],[420,470],[330,360],[220,320]],[[520,500],[640,520],[690,600],[640,720],[580,860],[540,820],[520,660]],[[930,200],[1120,170],[1130,280],[1e3,300],[950,280]],[[950,340],[1120,330],[1220,430],[1170,560],[1100,700],[1040,700],[1e3,520],[920,450]],[[1120,170],[1500,130],[1820,220],[1760,340],[1600,420],[1500,480],[1400,420],[1260,360],[1140,300]],[[1600,620],[1780,610],[1820,720],[1680,750],[1590,690]],[[680,60],[860,50],[830,170],[720,190]]];for(let s of n){let r=[];for(let o=0;o<s.length;o++){let[a,l]=s[o],[c,h]=s[(o+1)%s.length];for(let f=0;f<6;f++){let d=f/6;r.push([ht(a,c,d)+(e()-.5)*26,ht(l,h,d)+(e()-.5)*26])}}i.beginPath(),r.forEach(([o,a],l)=>l?i.lineTo(o,a):i.moveTo(o,a)),i.closePath(),i.fillStyle="#5E9A58",i.fill(),i.save(),i.clip();for(let o=0;o<90;o++)i.fillStyle=["#88A85C","#3F7E4A","#C7B070","#B79A60"][Math.floor(e()*4)],i.globalAlpha=.55,i.beginPath(),i.arc(e()*2048,e()*1024,18+e()*70,0,7),i.fill();i.restore(),i.globalAlpha=1}i.fillStyle="#F4F7FA",i.fillRect(0,0,2048,34),i.fillRect(0,980,2048,44);for(let s=0;s<520;s++){i.fillStyle=`rgba(255,255,255,${.12+e()*.42})`;let r=e()*2048,o=e()*1024;i.beginPath(),i.ellipse(r,o,8+e()*44,2+e()*7,(e()-.5)*.4,0,7),i.fill()}})}function Tn(i,t=2600,e=300,n=1){let s=Pt(n),r=new Float32Array(t*3),o=new Float32Array(t*3);for(let f=0;f<t;f++){let d=s()*2-1,u=s()*6.283,g=Math.sqrt(1-d*d);r[f*3]=g*Math.cos(u)*e,r[f*3+1]=d*e,r[f*3+2]=g*Math.sin(u)*e;let y=.55+s()*.45,m=s();o[f*3]=y*(m>.8?1:.9),o[f*3+1]=y*.94,o[f*3+2]=y*(m<.2?.8:1)}let a=new Ie;a.setAttribute("position",new Ne(r,3)),a.setAttribute("color",new Ne(o,3));let l=nt(32,32,f=>{let d=f.createRadialGradient(16,16,0,16,16,16);d.addColorStop(0,"#fff"),d.addColorStop(.35,"#ffffffaa"),d.addColorStop(1,"#ffffff00"),f.fillStyle=d,f.fillRect(0,0,32,32)}),c=new Ci({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new Zi(a,c);return h.frustumCulled=!1,i.add(h),h}function Ii(i,t,e,n,s,r,o=2,a=.45){let l=nt(512,512,h=>{let f=Pt(o);h.clearRect(0,0,512,512);for(let d=0;d<60;d++){let u=256+(f()-.5)*360,g=256+(f()-.5)*360,y=40+f()*110,m=h.createRadialGradient(u,g,0,u,g,y);m.addColorStop(0,r+"30"),m.addColorStop(1,r+"00"),h.fillStyle=m,h.fillRect(0,0,512,512)}}),c=new Yi(new Ri({map:l,transparent:!0,depthWrite:!1,blending:Ge,opacity:a,fog:!1}));return c.position.set(t,e,n),c.scale.set(s,s,1),i.add(c),c}function Di(i,t,e,n={}){let{spread:s=.3,rise:r=3,size:o=1.3,col:a="#D8D6D2",t0:l=0,life:c=2.6,seed:h=3}=n,f=Pt(h),d=nt(128,128,g=>{let y=g.createRadialGradient(64,64,0,64,64,64);y.addColorStop(0,"#ffffffAA"),y.addColorStop(1,"#ffffff00"),g.fillStyle=y,g.fillRect(0,0,128,128)}),u=[];for(let g=0;g<t;g++){let y=new Yi(new Ri({map:d,color:a,transparent:!0,depthWrite:!1,opacity:0}));i.add(y),u.push({s:y,ph:f()*c,x:(f()-.5)*s,z:(f()-.5)*s,d:(f()-.5)*1.2})}return g=>{for(let y of u){let m=(g-l+y.ph)%c/c;y.s.position.set(e[0]+y.x+y.d*m,e[1]+r*m,e[2]+y.z),y.s.scale.setScalar(o*(.35+m)),y.s.material.opacity=Math.sin(m*Math.PI)*.42}}}function $1(i,t=1,e=["#6E6258","#857669","#5A4F47","#9A8A78"]){let n=new Ao(1,4),s=Pt(i),r=n.attributes.position,o=[],a=[];for(let d=0;d<9;d++){let u=new P(s()-.5,s()-.5,s()-.5).normalize();o.push([u,.8+s()*2.2,.025+s()*.05,s()*6])}for(let d=0;d<7;d++)a.push([new P(s()-.5,s()-.5,s()-.5).normalize(),.18+s()*.25,.05+s()*.07]);let l=new Float32Array(r.count*3),c=new P,h=e.map(d=>new Lt(d));for(let d=0;d<r.count;d++){c.fromBufferAttribute(r,d).normalize();let u=1;for(let[p,v,E,_]of o)u+=Math.sin(c.dot(p)*v*3+_)*E;let g=0;for(let[p,v,E]of a){let _=c.angleTo(p);if(_<v){let R=_/v;u-=E*(1-R*R),g=Math.max(g,1-R)}else _<v*1.25&&(u+=E*.4*(1-(_-v)/(v*.25)))}c.multiplyScalar(u*t),r.setXYZ(d,c.x,c.y,c.z);let y=(Math.sin(c.x*3.1/t)+Math.sin(c.y*2.3/t+1)+Math.sin(c.z*4.1/t+2))/6+.5,m=h[Math.floor(y*3.99)].clone();m.multiplyScalar(1-g*.35),l.set([m.r,m.g,m.b],d*3)}n.setAttribute("color",new Ne(l,3)),n.computeVertexNormals();let f=new U(n,new tt({vertexColors:!0,roughness:.9,flatShading:!0}));return f.castShadow=f.receiveShadow=!0,f}function _d(i,t,e=[1,-1,0],n=8){let s=new pt,r=$1(i,t,["#5A3020","#7A3A1E","#3A2018","#8E4A22"]);r.material.emissive=new Lt("#FF6A1E"),r.material.emissiveIntensity=.55,s.add(r);let o=new P(...e).normalize(),a=[];for(let c=0;c<26;c++){let h=c/25,f=Le(c<4?"#FFF2C8":c<12?"#FFB050":"#FF5A20",t*(3.2-h*1.6),(1-h)*.9);f.position.copy(o.clone().multiplyScalar(-h*n*t)),s.add(f),a.push(f)}let l=Le("#FFFFFF",t*2.6,1);return s.add(l),s.rockMesh=r,s.flick=c=>{a.forEach((h,f)=>{h.material.opacity=(1-f/26)*(.75+Math.sin(c*30+f)*.2)}),r.rotation.x=c*.8,r.rotation.y=c*.5},s}function vr(i,t=4){let e=new U(new ae(t,80,56),new tt({map:Ed(),roughness:.72}));i.add(e);let n=new U(new ae(t*1.07,64,40),new He({transparent:!0,depthWrite:!1,side:ze,blending:Ge,vertexShader:"varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 n;void main(){float k=pow(max(.86-abs(n.z),0.),2.4);gl_FragColor=vec4(.35,.65,1.,1.)*k*2.2;}"}));return e.add(n),e}var mc=(i,t,e,n,s)=>{let r=nt(1024,1024,a=>{a.fillStyle=e,a.fillRect(0,0,1024,1024);let l=Pt(8);for(let c=0;c<11;c++){let h=c*94;a.fillStyle=`rgba(${l()<.5?"255,220,180":"20,10,5"},${l()*.12})`,a.fillRect(h,0,94,1024),a.fillStyle="#21140D",a.fillRect(h,0,3,1024);let f=l()*300;for(;f<1024;)a.fillRect(h,f,94,3),f+=340+l()*300}});r.wrapS=r.wrapT=pe,r.repeat.set(n,s);let o=new U(new lt(i,t),new tt({map:r,roughness:.5}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o};function J1(i,t,e=0){if(t==="plantao"){let o=i.createLinearGradient(0,0,0,460);o.addColorStop(0,"#1A2448"),o.addColorStop(1,"#0B1022"),i.fillStyle=o,i.fillRect(0,0,800,460);for(let h=0;h<60;h++)i.fillStyle="#ffffff55",i.fillRect(h*137%800,h*71%300,3,3);let a=470,l=170,c=i.createLinearGradient(a-260,l-150,a,l);c.addColorStop(0,"#FF5A2000"),c.addColorStop(1,"#FFC060"),i.strokeStyle=c,i.lineWidth=46,i.lineCap="round",i.beginPath(),i.moveTo(a-260,l-150),i.lineTo(a,l),i.stroke(),i.fillStyle="#6E5848",i.beginPath(),i.arc(a,l,34,0,7),i.fill(),i.fillStyle="#4A3A30",i.beginPath(),i.arc(a-8,l+6,9,0,7),i.arc(a+12,l-10,6,0,7),i.fill(),i.fillStyle="#2E64B0",i.beginPath(),i.arc(620,470,190,0,7),i.fill(),i.fillStyle="#5E9A58",i.beginPath(),i.ellipse(580,330,70,40,.3,0,7),i.fill(),i.fillStyle="#C9201A",i.fillRect(0,300,800,76),i.fillStyle="#fff",i.font="900 52px Inter",i.textAlign="left",i.textBaseline="middle",i.fillText("PLANT\xC3O",28,340),i.fillStyle="#F2F2F2",i.fillRect(0,376,800,84),i.fillStyle="#16161E",i.font="800 36px Inter",i.fillText("ASTEROIDE EM ROTA COM A TERRA",28,420),Math.floor(e*3)%2===0&&(i.fillStyle="#C9201A",i.beginPath(),i.roundRect(620,24,156,52,10),i.fill(),i.fillStyle="#fff",i.font="800 30px Inter",i.fillText("\u25CF AO VIVO",634,51));return}let r=i.createLinearGradient(0,0,0,460);r.addColorStop(0,"#F3A6B8"),r.addColorStop(1,"#8A4A7E"),i.fillStyle=r,i.fillRect(0,0,800,460),i.fillStyle="#FFD9A855",i.beginPath(),i.arc(400,120,140,0,7),i.fill();for(let[o,a,l]of[[300,"#5A2E1E","#36AEA2"],[500,"#2A1810","#F08AA0"]]){i.fillStyle=l,i.beginPath(),i.roundRect(o-70,300,140,200,30),i.fill(),o===500&&(i.fillStyle=a,i.beginPath(),i.roundRect(o-82,150,164,210,70),i.fill()),i.fillStyle="#121218",i.beginPath(),i.arc(o,230,80,0,7),i.fill(),i.fillStyle="#FF5A7A";for(let c of[-1,1]){let h=o+c*28,f=226;i.beginPath(),i.moveTo(h,f+14),i.bezierCurveTo(h-22,f-2,h-12,f-18,h,f-6),i.bezierCurveTo(h+12,f-18,h+22,f-2,h,f+14),i.fill()}}i.fillStyle="#FF7A9A";for(let o=0;o<7;o++){let a=120+o*95,l=90+Math.sin(o*2+e*3)*30;i.font="40px Inter",i.fillText("\u2665",a,l)}i.fillStyle="#00000066",i.fillRect(0,400,800,60),i.fillStyle="#fff",i.font="700 30px Inter",i.textAlign="left",i.textBaseline="middle",i.fillText("NOVELA DAS NOVE",26,430)}function Md(i,t={}){let e=t.night??!0;i.add(mc(18,16,"#6A4530",4,3.5)).position.z=-1;let n=new U(new lt(4.6,3),new tt({map:nt(512,340,X=>{X.fillStyle="#2F3C5E",X.fillRect(0,0,512,340),X.strokeStyle="#D9B46A",X.lineWidth=8,X.strokeRect(16,16,480,308),X.strokeStyle="#C9564A",X.lineWidth=5,X.strokeRect(38,38,436,264),X.fillStyle="#D9B46A55";for(let I=0;I<9;I++)for(let Ut=0;Ut<5;Ut++)X.beginPath(),X.arc(76+I*45,82+Ut*44,7,0,7),X.fill()}),roughness:1}));n.rotation.x=-Math.PI/2,n.position.set(0,.01,-1.6),n.receiveShadow=!0,i.add(n);let s=nt(512,512,X=>{X.fillStyle="#2F5A5E",X.fillRect(0,0,512,512);for(let I=0;I<8;I++){X.fillStyle=I%2?"#356468":"#2B5357",X.fillRect(I*64,0,64,512),X.fillStyle="#E8D8A033";for(let Ut=20;Ut<512;Ut+=64)X.beginPath(),X.arc(I*64+32,Ut+I%2*32,6,0,7),X.fill()}});s.wrapS=s.wrapT=pe;let r=(X,I)=>{let Ut=s.clone();return Ut.needsUpdate=!0,Ut.repeat.set(X/1.6,I/1.6),new tt({map:Ut,roughness:.95})},o=-4.2,a=-2.1,l=1,c=1.35,h=3.75;for(let[X,I,Ut,Bt]of[[(-9+a)/2,2.75,a+9,5.5],[(l+9)/2,2.75,9-l,5.5],[(a+l)/2,c/2,l-a,c],[(a+l)/2,(h+5.5)/2,l-a,5.5-h]])i.add(w(Ut,Bt,.3,r(Ut,Bt),X,I,o));i.add(w(18,.32,.06,"#4A2E20",0,.16,o+.18)),i.add(w(18,.05,.05,"#D8C8A0",0,1,o+.17,!1));let f="#EDE5D2",d=new pt;for(let[X,I,Ut,Bt]of[[a,(c+h)/2,.14,h-c+.14],[l,(c+h)/2,.14,h-c+.14],[(a+l)/2,h,l-a+.14,.14],[(a+l)/2,(c+h)/2,.07,h-c],[(a+l)/2,c+(h-c)*.62,l-a,.06]])d.add(w(Ut,Bt,.22,f,X,I,o+.02));d.add(w(l-a+.5,.1,.36,f,(a+l)/2,c-.02,o+.16)),i.add(d);let u=X=>{let I=nt(256,512,Bt=>{for(let Xt=0;Xt<8;Xt++)Bt.fillStyle=Xt%2?"#B0506A":"#8E3A54",Bt.fillRect(Xt*32,0,32,512)}),Ut=new U(new lt(.9,3.5),new tt({map:I,roughness:1,side:te}));return Ut.position.set(X,2.4,o+.3),Ut.castShadow=!0,Ut};i.add(u(a-.35),u(l+.35)),i.add(w(4.6,.05,.05,"#2a1d18",(a+l)/2,4.2,o+.32,!1)),Ae(i,-60,160,90,e?[[0,"#0E1030"],[.55,"#2A2252"],[.85,"#6B3A62"],[1,"#B05A5E"]]:[[0,"#6FA7D8"],[1,"#FCE2C0"]]),Oe(i,-40,90,34,["#2F2748","#3B2F54","#4A3A5E"],e,6,-2),Oe(i,-24,60,16,["#241E3A","#2B2342","#30284A"],e,9,-1);let g=new pt,y=H("#B23C33"),m=H("#CD5244");g.add(w(3.4,.46,1.05,y,0,.3,0)),g.add(w(3.4,1,.34,y,0,.82,-.42));for(let X of[-1.85,1.85])g.add(w(.38,.76,1.15,m,X,.44,0));for(let X of[-.85,.85])g.add(w(1.66,.18,.96,m,X,.62,.06)),g.add(w(1.6,.62,.2,m,X,1,-.22));let p=w(.5,.5,.15,H("#E9B44C"),-1.35,1,-.08);p.rotation.z=.25,g.add(p);let v=w(.46,.46,.15,H("#36AEA2"),1.38,.98,-.08);v.rotation.z=-.2,g.add(v),g.position.set(t.sofaX??-.55,0,-3.5),i.add(g);let E=new pt;E.add(w(2,.08,.9,"#8E6242",0,.52,0)),E.add(w(1.9,.4,.82,"#6E4A32",0,.28,0));let _=new U(new Ht(.075,.065,.17,22),H("#36AEA2",{roughness:.4}));_.position.set(-.6,.645,.1),_.castShadow=!0,E.add(_),[["#D2728A",0],["#4A86C7",.05],["#E9B44C",.1]].forEach(([X,I])=>E.add(w(.42,.045,.3,X,.6,.585+I,-.05))),E.add(w(.26,.03,.09,"#1a1a22",.05,.575,.2));let R=new U(new ae(.17,18,10,0,6.3,1.57,1.57),H("#F2EDE2"));R.position.set(-.15,.73,-.15),E.add(R);for(let X=0;X<12;X++){let I=new U(new ae(.035,8,6),H("#FFF4D6"));I.position.set(-.15+Math.cos(X)*.08,.73,-.15+Math.sin(X*1.7)*.08),E.add(I)}E.position.set(t.sofaX??-.55,0,-1.9),i.add(E);let x=new pt;x.add(w(1.3,2.6,.4,"#5C3C28",0,1.3,0));let C=Pt(12);for(let X=0;X<4;X++){x.add(w(1.2,.04,.38,"#7A5238",0,.3+X*.6,.02));let I=-.55;for(;I<.5;){let Ut=.05+C()*.07,Bt=.28+C()*.18;x.add(w(Ut,Bt,.26,["#C9564A","#36AEA2","#E9B44C","#4A86C7","#F2EDE2","#7E5FA8"][Math.floor(C()*6)],I,.32+X*.6+Bt/2,.03)),I+=Ut+.01}}x.position.set(4.7,0,-3.9),i.add(x);let D=(X,I,Ut,Bt,Xt)=>{i.add(w(Ut+.1,Bt+.1,.05,"#C9A46A",X,I,o+.18,!1));let Nt=new U(new lt(Ut,Bt),new tt({map:nt(256,Math.round(256*Bt/Ut),Xt),roughness:.8}));Nt.position.set(X,I,o+.21),i.add(Nt)};D(-3.4,2.7,.8,1,(X,I,Ut)=>{X.fillStyle="#F2C14E",X.fillRect(0,0,I,Ut),X.fillStyle="#C9564A",X.beginPath(),X.arc(128,130,70,0,7),X.fill(),X.fillStyle="#2F5A5E",X.fillRect(0,230,I,90)}),D(-4.4,2.2,.6,.6,(X,I,Ut)=>{X.fillStyle="#E8DCC4",X.fillRect(0,0,I,Ut),X.fillStyle="#36AEA2",X.beginPath(),X.moveTo(20,230),X.lineTo(128,50),X.lineTo(236,230),X.fill()}),D(4.7,3.25,.7,.5,(X,I,Ut)=>{X.fillStyle="#26324F",X.fillRect(0,0,I,Ut),X.fillStyle="#FFE7B0",X.beginPath(),X.arc(180,60,26,0,7),X.fill(),X.fillStyle="#4A3A5E",X.fillRect(0,120,I,70)});let b=document.createElement("canvas");b.width=300,b.height=380;let M=b.getContext("2d"),F=new De(b);F.colorSpace=ne;let z=X=>{if(M.fillStyle="#FBF7EC",M.fillRect(0,0,300,380),M.fillStyle="#C9361F",M.fillRect(0,0,300,90),M.fillStyle="#fff",M.font="900 46px Fraunces",M.textAlign="center",M.textBaseline="middle",M.fillText("SEGUNDA",150,48),M.fillStyle="#20202A",M.font="900 170px Fraunces",M.fillText("17",150,230),M.fillStyle="#7A7E88",M.font="600 28px Inter",M.fillText("trabalho 8h",150,340),X>0){M.strokeStyle="#D21E1E",M.lineWidth=22,M.lineCap="round";let I=Math.min(1,X*2),Ut=Math.max(0,X*2-1);M.beginPath(),M.moveTo(40,110),M.lineTo(40+220*I,110+240*I),Ut>0&&(M.moveTo(260,110),M.lineTo(260-220*Ut,110+240*Ut)),M.stroke()}F.needsUpdate=!0};z(0);let O=new U(new lt(.62,.78),new tt({map:F,roughness:.9}));O.position.set(2.95,2.62,o+.2),i.add(O),i.add(w(.04,.04,.04,"#555",2.95,3.04,o+.2,!1));let W=new U(new Sn(.28,32),new tt({map:nt(256,256,X=>{X.fillStyle="#F4EFE4",X.beginPath(),X.arc(128,128,126,0,7),X.fill(),X.strokeStyle="#2a2a2f",X.lineWidth=12,X.stroke(),X.lineWidth=8,X.beginPath(),X.moveTo(128,128),X.lineTo(128,50),X.moveTo(128,128),X.lineTo(186,150),X.stroke()}),roughness:.6}));W.position.set(-3.4,4,o+.2),i.add(W);let j=(t.sofaX??-.55)-2.55;i.add(w(.05,2.1,.05,"#15151b",j,1.05,-3.3));let Z=new U(new Ht(.22,.38,.42,24,1,!0),new tt({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.4,side:te}));Z.position.set(j,2.2,-3.3),i.add(Z);let st=Le("#FFB870",1.8,.45);st.position.set(j,2.2,-3.3),i.add(st);let q=new ge("#FFB56E",e?16:6,11,1.5);q.position.set(j+.2,2,-2.9),q.castShadow=!0,q.shadow.mapSize.set(1024,1024),q.shadow.radius=6,q.shadow.bias=-.002,i.add(q);let dt=new U(new Ht(.3,.22,.5,20),H("#C76B4A"));dt.position.set(-2.55,.25,-3.6),dt.castShadow=!0,i.add(dt);let Et=nt(256,256,X=>{X.clearRect(0,0,256,256);for(let I=0;I<11;I++)X.fillStyle=I%2?"#3E8A52":"#2F6E42",X.save(),X.translate(128,240),X.rotate((I-5)*.26),X.beginPath(),X.ellipse(0,-110,18,110,0,0,7),X.fill(),X.restore()}),Ft=de(Et,1.5,1.5,{shadow:!0});Ft.position.set(-2.55,1.2,-3.6),i.add(Ft);let Yt=document.createElement("canvas");Yt.width=800,Yt.height=460;let ye=Yt.getContext("2d"),$=new De(Yt);$.colorSpace=ne;let rt="",At=(X,I)=>{let Ut=X+Math.floor(I*6);Ut!==rt&&(rt=Ut,J1(ye,X,I),$.needsUpdate=!0)},ct=new pt;ct.add(w(1.5,.9,.07,H("#121218",{roughness:.3,metalness:.5}),0,0,0));let Ot=new U(new lt(1.42,.82),new ce({map:$}));Ot.position.z=.04,ct.add(Ot),ct.add(w(.3,.3,.06,"#121218",0,-.55,-.03));let Gt=new ge("#9FC8FF",7,9,1.4);Gt.position.set(0,0,.6),ct.add(Gt),ct.position.set(2.95,1.55,o+.22),i.add(ct);let Wt=new pt;Wt.add(w(2,.5,.5,"#6E4A32",0,.25,0)),Wt.add(w(2.04,.05,.54,"#8E6242",0,.52,0)),Wt.add(w(.9,.3,.02,"#4E3222",-.5,.27,.26)),Wt.add(w(.9,.3,.02,"#4E3222",.5,.27,.26)),Wt.position.set(2.95,0,o+.45),i.add(Wt);let Te=new U(new Ht(.08,.12,.32,16),H("#E9B44C"));Te.position.set(3.75,.71,o+.45),i.add(Te);for(let X=0;X<14;X++){let I=-5+X*.75,Ut=4.5-Math.sin(X/13*Math.PI)*.4,Bt=new U(new ae(.04,10,8),new tt({emissive:"#FFD79C",emissiveIntensity:6,color:"#fff"}));Bt.position.set(I,Ut,o+.5),i.add(Bt);let Xt=Le("#FFC67A",.4,.4);Xt.position.copy(Bt.position),i.add(Xt)}i.add(new me(e?"#6E74C0":"#FFF0DC","#2a1a14",e?.7:1.1));let jt=new Ze(e?"#8FA0FF":"#FFE0B0",e?1.1:2.4);return jt.position.set(-2,7,-12),jt.castShadow=!0,jt.shadow.mapSize.set(2048,2048),Object.assign(jt.shadow.camera,{left:-8,right:8,top:8,bottom:-8,far:30}),i.add(jt),{sofa:g,table:E,tv:ct,setTV:At,tvLight:Gt,paintCal:z,win:d,WZ:o,X0:a,X1:l,Y0:c,Y1:h,lamp:q}}function Ho(i,t={}){let e=t.cols??5,n=t.rows??6,s=1.5,r=1.9,o=2.5,a=3,l=e*o+1,c=n*a+1.2,h=new tt({map:gd(t.col??"#8C3E30",l/2.2,c/2.2),roughness:.95}),f=[],d=new pt,u=y=>-l/2+.5+y*o+o/2;for(let y=0;y<=n;y++){let m=y===0?0:.9+(y-1)*a+r,p=y===n?c:.9+y*a;d.add(w(l,p-m,.4,h,0,(m+p)/2,0))}for(let y=0;y<n;y++)for(let m=0;m<=e;m++){let p=m===0?-l/2:u(m-1)+s/2,v=m===e?l/2:u(m)-s/2;d.add(w(v-p,r,.4,h,(p+v)/2,.9+y*a+r/2,0))}let g=Pt(t.seed??4);for(let y=0;y<n;y++)for(let m=0;m<e;m++){let p=u(m),v=.9+y*a+r/2,E=g()<(t.lit??.8),_=g(),R=w(s,r,.1,new tt({color:"#000",emissive:E?_<.5?"#FFC47A":"#FFD9A0":"#1C2238",emissiveIntensity:E?.9:.3}),p,v,-1.2,!1);d.add(R);for(let[x,C,D,b]of[[p-s/2-.06,v,.12,r+.12],[p+s/2+.06,v,.12,r+.12],[p,v+r/2+.06,s+.24,.12]])d.add(w(D,b,.5,"#E8E0CE",x,C,.05));if(d.add(w(s+.5,.12,.6,"#E8E0CE",p,v-r/2-.04,.2)),E){let x=_<.5?"#D69A6A":"#C76A7A";d.add(w(.32,r,.05,x,p-s/2+.16,v,-.9,!1)),d.add(w(.32,r,.05,x,p+s/2-.16,v,-.9,!1))}g()<.3&&(d.add(w(.6,.22,.3,"#C76B4A",p+(g()-.5)*.5,v-r/2+.16,.3)),d.add(w(.5,.18,.2,"#4F8A4A",p+(g()-.5)*.5,v-r/2+.34,.3))),f.push({x:p,y:v-r/2,r:y,k:m,lit:E})}for(let y=1;y<n;y++){let m=u(1);d.add(w(2.6,.06,.9,"#22222a",m,.9+y*a-.1,.7)),d.add(w(2.6,.05,.05,"#22222a",m,.9+y*a+.8,1.12));for(let p=0;p<9;p++)d.add(w(.03,.9,.03,"#22222a",m-1.25+p*.31,.9+y*a+.35,1.12,!1))}return d.add(w(l+.6,.5,.9,"#3d3540",0,c+.25,.1)),i.add(d),{g:d,slots:f,W:l,H:c}}var Sd=()=>nt(400,520,i=>{i.translate(200,0);let t=i.createLinearGradient(-150,0,150,0);t.addColorStop(0,"#27998C"),t.addColorStop(.5,"#43C4B4"),t.addColorStop(1,"#27998C"),i.fillStyle=t,i.beginPath(),i.moveTo(-150,520),i.quadraticCurveTo(-156,330,-110,300),i.quadraticCurveTo(0,270,110,300),i.quadraticCurveTo(156,330,150,520),i.fill(),i.fillStyle="#1F7C72",i.beginPath(),i.moveTo(-82,300),i.quadraticCurveTo(0,410,82,300),i.quadraticCurveTo(0,360,-82,300),i.fill(),i.fillStyle="#6FDCCB55",i.fillRect(-150,400,16,120);let e=i.createRadialGradient(-30,110,10,0,150,140);e.addColorStop(0,"#30344A"),e.addColorStop(1,"#0A0A12"),i.fillStyle=e,i.beginPath(),i.arc(0,160,128,0,7),i.fill(),i.strokeStyle="#F6E2C8aa",i.lineWidth=5,i.beginPath(),i.arc(0,160,126,Math.PI*1.05,Math.PI*1.75),i.stroke(),i.strokeStyle="#FFE8D0",i.lineWidth=4,i.beginPath(),i.moveTo(-150,520),i.quadraticCurveTo(-156,330,-110,300),i.stroke()});function bt(i,t,e,n){let s=rd(i,t,e.bg||"#141228",e.fov||34),r=s.scene;e.fog&&(r.fog=new yo(e.fog[0],e.fog[1])),e.far&&(s.camera.far=e.far,s.camera.updateProjectionMatrix());let o=n(r,s)||(()=>({}));return s.update=(a,l)=>(pc.value=a,{focus:6,range:3,blur:12,bloom:.3,bloomT:.92,vig:.45,exposure:1,...o(a,l,s.camera)||{}}),s}function xt(i,t,e,n,s=0){od(i,hc(t,n),hc(e,n),s)}var ee=(i,t,e,n=0,s=.22)=>{let r=gr({outfit:"hero",glow:s});return r.place(t,e,n),i.add(r.root),r},Oo=(i,t,e,n,s,r,o=0)=>{let a=gr({outfit:t,hair:e,hairc:n,lash:!!e});return a.place(s,r,o),i.add(a.root),a};function Xe(i,t={}){let e=t.night??!1;i.add(new me(t.sky||(e?"#6E74C0":"#FFF0DC"),t.ground||"#3a2a20",t.hemi??(e?.75:1.1)));let n=new Ze(t.key||(e?"#8FA0FF":"#FFE2B8"),t.ki??(e?1.1:2.8));n.position.set(...t.pos||[-8,12,8]),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);let s=t.r||14;return Object.assign(n.shadow.camera,{left:-s,right:s,top:s,bottom:-s,far:80}),n.shadow.bias=-5e-4,n.shadow.radius=4,i.add(n),t.target&&(n.target.position.set(...t.target),i.add(n.target)),n}function bn(i,t,e,n,s,r,o=-.5,a="#FFE2B0",l=.22){let c=nt(64,256,f=>{let d=f.createLinearGradient(0,0,0,256);d.addColorStop(0,"#ffffffcc"),d.addColorStop(1,"#ffffff00"),f.fillStyle=d,f.fillRect(0,0,64,256)}),h=new U(new lt(s,r),new ce({map:c,color:a,transparent:!0,opacity:l,depthWrite:!1,blending:Ge,side:te,fog:!1}));return h.position.set(t,e,n),h.rotation.z=o,i.add(h),h}function ns(i,t,e,n=2,s="#FFE8C0"){let r=Pt(n),o=new Ie,a=new Float32Array(t*3),l=[];for(let f=0;f<t;f++)l.push([e[0]+r()*(e[1]-e[0]),e[2]+r()*(e[3]-e[2]),e[4]+r()*(e[5]-e[4]),r()*6]);o.setAttribute("position",new Ne(a,3));let c=nt(32,32,f=>{let d=f.createRadialGradient(16,16,0,16,16,16);d.addColorStop(0,"#fff"),d.addColorStop(1,"#ffffff00"),f.fillStyle=d,f.fillRect(0,0,32,32)}),h=new Zi(o,new Ci({map:c,color:s,size:.035,transparent:!0,opacity:.7,depthWrite:!1,blending:Ge}));return h.frustumCulled=!1,i.add(h),f=>{for(let d=0;d<t;d++){let u=l[d];a[d*3]=u[0]+Math.sin(f*.3+u[3])*.15,a[d*3+1]=u[1]+Math.sin(f*.2+u[3]*2)*.1,a[d*3+2]=u[2]}o.attributes.position.needsUpdate=!0}}function es(i,t,e,n,s,r,o,a=0,l="#C9A46A"){let c=new pt;c.add(w(s+.08,r+.08,.04,l,0,0,-.02,!1));let h=new U(new lt(s,r),new tt({map:nt(256,Math.max(16,Math.round(256*r/s)),o),roughness:.8}));return h.position.z=.005,c.add(h),c.position.set(t,e,n),c.rotation.y=a,i.add(c),c}function vn(i,t,e,n,s,r=.8,o="Fraunces"){let a=nt(1024,Math.round(1024*e/t),(l,c,h)=>{l.fillStyle=n,l.fillRect(0,0,c,h),l.fillStyle=s,l.shadowColor=s,l.shadowBlur=20,l.font=`900 ${Math.round(h*.62)}px ${o}`,l.textAlign="center",l.textBaseline="middle",l.fillText(i,c/2,h*.54)});return new U(new lt(t,e),new tt({map:a,emissiveMap:a,emissive:"#fff",emissiveIntensity:r}))}function Xn(i,t,e,n=1,s="#C76B4A"){let r=new U(new Ht(.28*n,.2*n,.45*n,18),H(s));r.position.set(t,.225*n,e),r.castShadow=!0,i.add(r);let o=nt(256,256,l=>{l.clearRect(0,0,256,256);for(let c=0;c<11;c++)l.fillStyle=c%2?"#3E8A52":"#2F6E42",l.save(),l.translate(128,250),l.rotate((c-5)*.26),l.beginPath(),l.ellipse(0,-100,17,100,0,0,7),l.fill(),l.restore()}),a=de(o,1.3*n,1.3*n,{shadow:!0});return a.position.set(t,.45*n+.6*n,e),i.add(a),a}function on(i,t={}){let e=t.w??12,n=t.d??9,s=t.h??4.2,r=t.wz??-4,o=t.wall??"#2F5A5E";i.add(mc(e+6,n+8,t.floor??"#6A4530",4,3.5)).position.z=r+n/2;let a=nt(512,512,h=>{h.fillStyle=o,h.fillRect(0,0,512,512);let f=new Lt(o),d="#"+f.clone().offsetHSL(0,0,.03).getHexString(),u="#"+f.clone().offsetHSL(0,0,-.03).getHexString();for(let g=0;g<8;g++){h.fillStyle=g%2?d:u,h.fillRect(g*64,0,64,512),h.fillStyle="#E8D8A022";for(let y=20;y<512;y+=64)h.beginPath(),h.arc(g*64+32,y+g%2*32,6,0,7),h.fill()}});a.wrapS=a.wrapT=pe;let l=(h,f)=>{let d=a.clone();return d.needsUpdate=!0,d.repeat.set(h/1.6,f/1.6),new tt({map:d,roughness:.95})},c=t.win;if(c){let[h,f,d,u]=c;for(let[y,m,p,v]of[[(-e+h)/2,s/2,h+e,s],[(f+e)/2,s/2,e-f,s],[(h+f)/2,d/2,f-h,d],[(h+f)/2,(u+s)/2,f-h,s-u]])i.add(w(p,v,.3,l(p,v),y,m,r));for(let[y,m,p,v]of[[h,(d+u)/2,.14,u-d+.14],[f,(d+u)/2,.14,u-d+.14],[(h+f)/2,u,f-h+.14,.14],[(h+f)/2,(d+u)/2,.07,u-d],[(h+f)/2,d+(u-d)*.62,f-h,.06]])i.add(w(p,v,.22,"#EDE5D2",y,m,r+.02));i.add(w(f-h+.5,.1,.36,"#EDE5D2",(h+f)/2,d-.02,r+.16));let g=y=>{let m=nt(256,512,v=>{for(let E=0;E<8;E++)v.fillStyle=E%2?t.cur1??"#B0506A":t.cur2??"#8E3A54",v.fillRect(E*32,0,32,512)}),p=new U(new lt(.8,u-d+.9),new tt({map:m,roughness:1,side:te}));p.position.set(y,(d+u)/2+.1,r+.3),p.castShadow=!0,i.add(p)};g(h-.3),g(f+.3),i.add(w(f-h+1.6,.05,.05,"#2a1d18",(h+f)/2,u+.45,r+.32,!1))}else i.add(w(e*2,s,.3,l(e*2,s),0,s/2,r));if(i.add(w(e*2,.3,.06,"#4A2E20",0,.15,r+.18)),i.add(w(e*2,.05,.05,"#D8C8A0",0,1,r+.17,!1)),t.side!==!1){let h=t.sideX??e/2,f=w(.3,s,n+4,l(n+4,s),h,s/2,r+(n+4)/2);i.add(f)}return{WZ:r,W:e,D:n,Hh:s}}function is(i,t={}){let e=on(i,{win:[-3.4,-.6,1.1,3.5],wall:t.wall??"#4A5F86",cur1:"#E9D8B0",cur2:"#D8C49A",side:!0,sideX:4.2}),n=new pt;n.add(w(2.2,.35,2.6,"#6E4A32",0,.25,0)),n.add(w(2.3,1.3,.14,"#5C3C28",0,.75,-1.32)),n.add(w(2.1,.28,2.45,H("#F4EFE4"),0,.55,.05));let s=w(2.16,.12,1.7,H(t.blanket??"#D2728A"),0,.74,.45);n.add(s),n.add(w(2.18,.02,.3,"#F4EFE4",0,.81,-.32,!1));for(let g of[-.52,.52]){let y=w(.9,.2,.5,H("#FBF7EC"),g,.82,-.9);y.rotation.x=-.2,n.add(y)}n.position.set(1,0,-2.6),i.add(n);let r=new pt;r.add(w(.6,.6,.5,"#8E6242",0,.3,0)),r.add(w(.5,.03,.02,"#C9A46A",0,.4,.26,!1));let o=new U(new Ht(.1,.14,.25,16),H("#36AEA2"));o.position.set(-.12,.73,-.05),r.add(o);let a=new U(new Ht(.13,.2,.2,18,1,!0),new tt({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:t.lampOn?1.2:.1,side:te}));a.position.set(-.12,.95,-.05),r.add(a),r.add(w(.2,.05,.3,"#4A86C7",.15,.63,0)),r.add(w(.2,.05,.3,"#E9B44C",.15,.68,0)),r.position.set(-.55,0,-3.2),i.add(r);let l=qn(.13,.27);l.rotation.x=-Math.PI/2,l.position.set(-.45,.615,-3.05),i.add(l);let c=new U(new lt(3,2),new tt({map:nt(512,340,g=>{g.fillStyle="#E2C48E",g.fillRect(0,0,512,340),g.strokeStyle="#B2563E",g.lineWidth=10,g.strokeRect(20,20,472,300);for(let y=0;y<6;y++)g.fillStyle="#B2563E55",g.fillRect(60+y*70,60,30,220)}),roughness:1}));c.rotation.x=-Math.PI/2,c.position.set(1,.01,-.4),c.receiveShadow=!0,i.add(c),es(i,1,2.6,e.WZ+.2,1.2,.8,(g,y,m)=>{g.fillStyle="#26324F",g.fillRect(0,0,y,m),g.fillStyle="#F2C14E",g.beginPath(),g.arc(70,60,30,0,7),g.fill(),g.fillStyle="#4A3A5E";for(let p=0;p<8;p++)g.fillRect(p*32,100+p%3*20,28,120)}),es(i,2.4,2.3,e.WZ+.2,.5,.7,(g,y,m)=>{g.fillStyle="#F08AA0",g.fillRect(0,0,y,m),g.fillStyle="#FBF7EC",g.font="900 70px Fraunces",g.textAlign="center",g.fillText("\u263A",128,200)});let h=new pt;h.add(w(1,1.8,.35,"#5C3C28",0,.9,0));let f=Pt(4);for(let g=0;g<3;g++){h.add(w(.92,.04,.33,"#7A5238",0,.3+g*.55,.01));let y=-.4;for(;y<.38;){let m=.05+f()*.06,p=.22+f()*.14;h.add(w(m,p,.22,["#C9564A","#36AEA2","#E9B44C","#4A86C7","#F2EDE2"][Math.floor(f()*5)],y,.32+g*.55+p/2,.03)),y+=m+.01}}h.position.set(3.4,0,-3.7),i.add(h),Xn(i,-3.9,-3.4,1.1);let d=new pt;d.add(w(.55,.06,.5,"#D9483A",0,.5,0)),d.add(w(.55,.6,.06,"#D9483A",0,.82,-.23));for(let[g,y]of[[-.24,-.2],[.24,-.2],[-.24,.2],[.24,.2]])d.add(w(.04,.5,.04,"#2a2a2f",g,.25,y));d.add(w(.5,.3,.1,"#36AEA2",0,.7,-.12)),d.position.set(3,0,-1.6),d.rotation.y=-.6,i.add(d),Ae(i,-30,80,50,t.night?[[0,"#0E1030"],[1,"#6B3A62"]]:[[0,"#7FB2E0"],[.7,"#F7D9B0"],[1,"#FFE9C8"]]),Oe(i,-24,60,18,t.night?["#2F2748","#3B2F54","#4A3A5E"]:["#A8B4C8","#9AA8BE","#8E9CB4"],!!t.night,7,-3);let u=Xe(i,{night:!!t.night,pos:[-5,6,-10],key:"#FFD9A0",ki:t.night?.8:3,target:[0,0,-1]});return t.night||(bn(i,-2,2.2,-2.2,1.4,4.5,-.55,"#FFE2B0",.14),bn(i,-1,2,-1.6,.8,4.5,-.55,"#FFE2B0",.1)),{...e,bed:n,tel:l,ns:r,sun:u}}function qn(i=.36,t=.74){let e=new pt,n=document.createElement("canvas");n.width=540,n.height=1110;let s=n.getContext("2d"),r=new De(n);r.colorSpace=ne,r.anisotropy=8,e.add(w(i,t,.03,H("#15151C",{roughness:.25,metalness:.6}),0,0,0));let o=new U(new lt(i*.92,t*.95),new ce({map:r}));o.position.z=.017,e.add(o);let a="";return e.paint=(l,c)=>{l!==a&&(a=l,c(s),r.needsUpdate=!0)},e.scr=o,e}var Td=(i,t="#2B3A72",e="#10152C")=>{let n=i.createLinearGradient(0,0,0,1110);n.addColorStop(0,t),n.addColorStop(1,e),i.fillStyle=n,i.fillRect(0,0,540,1110)},Ln={bloqueio(i,t="07:12",e=84){Td(i),i.fillStyle="#fff",i.textAlign="center",i.font="700 120px Inter",i.fillText(t,270,260),i.font="600 34px Inter",i.fillStyle="#C8D0E8",i.fillText("segunda-feira",270,320),i.font="600 30px Inter",i.fillStyle="#8E9AC0",i.fillText("Nenhuma notifica\xE7\xE3o",270,620),i.fillStyle="#fff",i.font="700 26px Inter",i.textAlign="right",i.fillText(e+"%",500,50),i.strokeStyle="#fff",i.lineWidth=3,i.strokeRect(420,30,30,16),i.fillRect(422,32,26*e/100,12)},grupo(i,t=0){i.fillStyle="#ECE5DD",i.fillRect(0,0,540,1110),i.fillStyle="#1F7C72",i.fillRect(0,0,540,150),i.fillStyle="#fff",i.font="800 40px Inter",i.textAlign="left",i.fillText("Fam\xEDlia \u2764",120,92),i.font="600 24px Inter",i.fillText("ningu\xE9m online",120,128),i.beginPath(),i.arc(70,85,34,0,7),i.fillStyle="#F2C14E",i.fill(),[["Tia Cida","Bom dia! \u{1F33B}","#fff"],["M\xE3e","Vai almo\xE7ar aqui domingo?","#fff"],["Voc\xEA","vou sim","#DCF8C6"]].forEach(([n,s,r],o)=>{let a=220+o*150,l=n==="Voc\xEA";i.fillStyle=r,i.beginPath(),i.roundRect(l?180:30,a,330,120,18),i.fill(),i.fillStyle="#1F7C72",i.font="700 24px Inter",i.fillText(n,l?200:50,a+38),i.fillStyle="#20202A",i.font="600 30px Inter",i.fillText(s,l?200:50,a+86)}),i.fillStyle="#C9C2B6",i.beginPath(),i.roundRect(150,700,240,50,25),i.fill(),i.fillStyle="#555",i.font="600 24px Inter",i.textAlign="center",i.fillText("HOJE",270,733),i.fillStyle="#8A8478",i.font="600 28px Inter",i.fillText("...sil\xEAncio...",270,860)},bateria(i,t){i.fillStyle="#0B0B10",i.fillRect(0,0,540,1110),i.strokeStyle=t<.2?"#E9483A":"#fff",i.lineWidth=12,i.strokeRect(150,380,220,380),i.fillStyle=i.strokeStyle,i.fillRect(220,350,80,30),i.fillRect(166,396+348*(1-t),188,348*t),i.fillStyle="#fff",i.font="800 60px Inter",i.textAlign="center",i.fillText(Math.round(t*100)+"%",270,880)},galeria(i){i.fillStyle="#0E0E14",i.fillRect(0,0,540,1110),i.fillStyle="#fff",i.font="800 40px Inter",i.textAlign="left",i.fillText("Galeria",30,80);let t=Pt(3);for(let e=0;e<9;e++){let n=20+e%3*170,s=120+Math.floor(e/3)*170;i.fillStyle=["#F2C14E","#36AEA2","#D2728A","#4A86C7","#E9483A","#8EAE86"][Math.floor(t()*6)],i.fillRect(n,s,160,160)}i.fillStyle="#fff",i.fillRect(30,660,480,400),i.fillStyle="#20202A",i.font="900 46px Inter",i.fillText("BOLETO",60,730),i.font="600 26px Inter",i.fillText("Vencimento: 10/11",60,790),i.fillText("Valor: R$ 289,90",60,840);for(let e=0;e<40;e++)i.fillRect(60+e*10,900,e%3?4:7,110);i.fillStyle="#E9483A",i.font="800 24px Inter",i.fillText("\xDALTIMA FOTO",60,1050)},notifs(i,t){Td(i,"#3A4A88","#141A34"),i.fillStyle="#fff",i.textAlign="center",i.font="700 110px Inter",i.fillText("07:12",270,200);let e=[["Fam\xEDlia \u2764","Bom dia!! \u{1F33B}\u{1F33B}","#F2C14E"],["Chefe","Reuni\xE3o \xE0s 9h","#C9361F"],["Banco","Seu boleto vence hoje","#4A86C7"],["Tia Cida","[foto de flor]","#F2C14E"],["M\xE3e","acordou?","#D2728A"],["Grupo do trampo","47 mensagens","#36AEA2"]];for(let n=0;n<Math.min(t,e.length);n++)i.save(),i.translate(26,270+n*136),i.fillStyle="rgba(245,247,250,.96)",i.beginPath(),i.roundRect(0,0,488,118,24),i.fill(),i.fillStyle=e[n][2],i.beginPath(),i.roundRect(16,20,74,74,18),i.fill(),i.fillStyle="#1A1A24",i.textAlign="left",i.font="800 30px Inter",i.fillText(e[n][0],108,50),i.font="600 28px Inter",i.fillStyle="#3a3a48",i.fillText(e[n][1],108,92),i.restore()}};function an(i,t={}){let e=!!t.night,n=t.overgrown??0;t.noSky||(Ae(i,-170,600,300,e?[[0,"#0E1030"],[.55,"#2A2252"],[.85,"#6B3A62"],[1,"#B05A5E"]]:t.skyStops||[[0,"#6FA7D8"],[.55,"#BFD8EE"],[.85,"#F8DDB8"],[1,"#FFE9C8"]]),Oe(i,-150,500,160,e?["#2F2748","#3B2F54","#4A3A5E"]:["#A8B4C8","#9AA8BE","#8E9CB4"],e,6)),md(i,e);let s=t.shops||[{name:"PADARIA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARM\xC1CIA",bg:"#2E7A5E",fg:"#F4FFF6"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIVROS",bg:"#3A4F7A",fg:"#FFF0C8",awning:"#E9B44C"},{name:"PIZZARIA",bg:"#8E2A22",fg:"#FFE7B8",awning:"#F4EEDF"}],r=8,o=0;for(;r>-110;){let h=7+o*37%5;i.add(uc(100+o+(t.seed||0),{x:13,z:r-h/2,w:8,d:h,floors:4+o%3,side:-1,night:e,lit:t.lit??.4,shop:s[o%s.length]})),i.add(uc(200+o+(t.seed||0),{x:-13,z:r-h/2,w:8,d:h,floors:5+o%3,side:1,night:e,lit:t.lit??.4,shop:s[(o+2)%s.length]})),r-=h,o++}let a=n>.5?["#2E4F2C","#3B6636","#55813F","#A9B65A"]:void 0;for(let h=0;h<9;h++)yr(i,5,4-h*12,-1,e&&(t.lampsOn??!0),5),yr(i,-5,-2-h*12,1,e&&(t.lampsOn??!0),5),nn(i,5.6,-2-h*12,1.05+n*1.2,a,h),nn(i,-5.6,-8-h*12,1.05+n*1.2,a,h+3);let l=[],c=[];if(t.cars!==!1&&[[-2.6,-6,"#27425A",1],[2.6,-14,"#8A2F2F",-1],[-2.6,-24,"#D7D7D2",1],[2.6,-33,"#3E7A5C",-1],[-2.6,-45,"#E9B44C",1]].forEach(([h,f,d,u])=>c.push(Xs(i,h,f,d,u,e))),n>0){let h=nt(256,128,u=>{u.clearRect(0,0,256,128);for(let g=0;g<40;g++){u.strokeStyle=["#4F7A36","#6E9A50","#3E6A2C"][g%3],u.lineWidth=5,u.beginPath();let y=10+g*6;u.moveTo(y,128),u.quadraticCurveTo(y+(g%5-2)*6,70,y+(g%7-3)*8,20+g%4*18),u.stroke()}}),f=Pt(8),d=Math.floor(n*160);for(let u=0;u<d;u++){let g=de(h,1.2+f()*1.4*n,.6+f()*.8*n);g.position.set((f()-.5)*18,.3+n*.2,4-f()*70),g.rotation.y=f()*3,i.add(g),l.push(g)}}return Xe(i,{night:e,pos:e?[-14,26,10]:[-20,22,14],ki:e?1:3,r:40}),{cars:c,mato:l}}function K1(i,t="#C98A4A",e){return e=e||new Lt(t).offsetHSL(0,0,-.12).getStyle(),nt(384,288,n=>{n.lineJoin="round",n.lineCap="round";let s=(r,o,a=20,l=90)=>{n.fillStyle=e,n.fillRect(r-a/2,o,a,l)};i==="cao"||i==="lobo"?(s(120,170),s(150,175),s(250,170),s(280,175),n.fillStyle=t,n.beginPath(),n.ellipse(200,165,105,52,0,0,7),n.fill(),n.strokeStyle=t,n.lineWidth=18,n.beginPath(),n.moveTo(98,150),n.quadraticCurveTo(60,i==="lobo"?170:110,46,i==="lobo"?200:96),n.stroke(),n.fillStyle="#121218",n.beginPath(),n.ellipse(300,100,58,50,0,0,7),n.fill(),n.beginPath(),n.moveTo(262,70),n.lineTo(272,i==="lobo"?18:40),n.lineTo(292,60),n.fill(),n.beginPath(),n.moveTo(318,60),n.lineTo(336,i==="lobo"?16:40),n.lineTo(344,72),n.fill(),n.beginPath(),n.ellipse(350,118,28,18,0,0,7),n.fill(),n.fillStyle=i==="lobo"?"#F2D25A":"#F6EFE6",n.beginPath(),n.ellipse(290,96,9,13,0,0,7),n.ellipse(318,96,9,13,0,0,7),n.fill(),i==="cao"&&(n.fillStyle="#D9483A",n.fillRect(250,136,40,12))):i==="gato"?(n.fillStyle=t,n.beginPath(),n.ellipse(190,200,90,60,0,0,7),n.fill(),n.strokeStyle=t,n.lineWidth=16,n.beginPath(),n.moveTo(110,220),n.quadraticCurveTo(40,230,60,150),n.stroke(),n.fillStyle="#121218",n.beginPath(),n.arc(250,130,52,0,7),n.fill(),n.beginPath(),n.moveTo(210,100),n.lineTo(214,50),n.lineTo(244,84),n.fill(),n.beginPath(),n.moveTo(286,100),n.lineTo(290,50),n.lineTo(258,84),n.fill(),n.fillStyle="#9BE07A",n.beginPath(),n.ellipse(232,128,8,4,0,0,7),n.ellipse(270,128,8,4,0,0,7),n.fill()):i==="pombo"?(n.fillStyle="#8E95A6",n.beginPath(),n.ellipse(190,190,90,56,-.2,0,7),n.fill(),n.fillStyle="#6E7486",n.beginPath(),n.ellipse(160,180,60,30,-.3,0,7),n.fill(),n.fillStyle="#121218",n.beginPath(),n.arc(270,130,36,0,7),n.fill(),n.fillStyle="#E9A43C",n.beginPath(),n.moveTo(300,130),n.lineTo(330,140),n.lineTo(300,146),n.fill(),n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(278,124,7,10,0,0,7),n.fill(),n.fillStyle="#E9733C",n.fillRect(180,240,8,40),n.fillRect(210,240,8,40)):i==="cervo"?(s(140,150,16,120),s(170,155,16,115),s(260,150,16,120),s(290,155,16,115),n.fillStyle=t,n.beginPath(),n.ellipse(215,145,100,46,0,0,7),n.fill(),n.lineWidth=30,n.strokeStyle=t,n.beginPath(),n.moveTo(290,130),n.lineTo(320,70),n.stroke(),n.fillStyle="#121218",n.beginPath(),n.ellipse(330,60,40,32,0,0,7),n.fill(),n.strokeStyle="#E8D8B0",n.lineWidth=6,n.beginPath(),n.moveTo(318,32),n.lineTo(300,0),n.moveTo(306,16),n.lineTo(290,14),n.moveTo(342,32),n.lineTo(360,0),n.moveTo(354,16),n.lineTo(372,12),n.stroke(),n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(336,56,7,10,0,0,7),n.fill()):i==="javali"&&(s(130,190,22,70),s(160,195,22,66),s(250,190,22,70),s(280,195,22,66),n.fillStyle=t,n.beginPath(),n.ellipse(205,180,110,60,0,0,7),n.fill(),n.fillStyle="#121218",n.beginPath(),n.ellipse(310,170,54,46,0,0,7),n.fill(),n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(340,190),n.lineTo(356,160),n.lineTo(348,194),n.fill(),n.beginPath(),n.ellipse(306,158,7,10,0,0,7),n.fill())})}function Li(i,t,e,n,s=1,r,o){let a=de(K1(t,r,o),s,s*.75,{shadow:!0});a.position.set(e,s*.375-.02,n),i.add(a);let l=qs(s*.9,s*.35,.45);return l.position.set(e,.015,n),i.add(l),a.blob=l,a}function bd(i,t){return bt(i,t,{bg:"#F2D9B0",fog:["#E8D2B0",.02],fov:32},e=>{let n=is(e),s=ee(e,1,-2.3,-.12);s.tint("#FFF2E2");let r=ns(e,80,[-3,1,.5,3.5,-3.5,-.5]);return(o,a,l)=>{r(a),n.tel.paint("b",h=>Ln.bloqueio(h));let c=Mt(1.9,2.6,a);return n.tel.position.set(ht(-.45,.78,c),ht(.615,1.25,c),ht(-3.05,-2,c)),n.tel.rotation.x=ht(-Math.PI/2,-.25,c),xt(l,[[0,[2.6,1.7,3.6]],[3.4,[1.5,1.5,1.2]]],[[0,[.6,1.2,-2.6]],[3.4,[.9,1.3,-2.3]]],a),s.face(l),s.eye(a<.7?"shut":a<1?"flat":a<2?"open":"down"),s.pose({armR:[ht(10,40,c),ht(6,-70,c)],armL:[10,6],head:a<1?-6:0,squash:a<.7?-.02:0}),{focus:l.position.distanceTo(s.root.position),range:2.2,blur:14,bloom:.3,bloomT:.9,vig:.4,exposure:1.05}}})}function xd(i,t){return bt(i,t,{bg:"#F2D9B0",fog:["#E8D2B0",.02],fov:30},e=>{let n=is(e),s=qn(.36,.74);e.add(s),s.position.set(.4,1.4,-.6),s.rotation.set(-.12,-.15,0);let r=w(.08,.3,.06,"#1C1C25",.2,1.15,-.58);e.add(r);let o=w(.08,.3,.06,"#1C1C25",.6,1.15,-.58);e.add(o);let a=new ge("#AFC8FF",3,2);return a.position.set(.4,1.4,-.2),e.add(a),(l,c,h)=>{let f=c>2.35;return s.paint(f?"g":"b",d=>f?Ln.grupo(d):Ln.bloqueio(d)),s.position.y=1.4+Math.sin(c*1.3)*.006,xt(h,[[0,[.5,1.45,.95]],[5.7,[.42,1.42,.62]]],[[0,[.4,1.4,-.6]],[5.7,[.4,1.38,-.6]]],c,.01),{focus:h.position.distanceTo(s.position),range:1.6,blur:12,bloom:.2,bloomT:.95,vig:.45}}})}function Ad(i,t){return bt(i,t,{bg:"#BFD8EE",fog:["#E8E0D8",.012],fov:34},e=>{an(e,{seed:3});let n=new pt;for(let f of[-.6,.6]){let d=new U(new Vn(.3,.09,10,24),H("#15151b"));d.rotation.y=Math.PI/2,d.position.set(0,.3,f),n.add(d)}n.add(w(.25,.3,1.1,"#C9361F",0,.55,0)),n.add(w(.2,.15,.5,"#1C1C25",0,.78,.15)),n.add(w(.04,.5,.04,"#888",0,.85,-.55)),n.add(w(.5,.04,.04,"#888",0,1.1,-.55));let s=w(.55,.5,.5,H("#E9483A"),0,1.05,.55);n.add(s);let r=new U(new lt(.5,.2),new tt({map:nt(256,100,f=>{f.fillStyle="#E9483A",f.fillRect(0,0,256,100),f.fillStyle="#fff",f.font="900 52px Inter",f.textAlign="center",f.fillText("ENTREGA",128,70)})}));r.position.set(.28,1.05,.55),r.rotation.y=Math.PI/2,n.add(r),n.rotation.z=.12,n.position.set(2.8,0,-3),e.add(n);let o=qs(1,2,.5);o.position.set(2.8,.02,-3),e.add(o);let a=new U(new ae(.17,18,12,0,6.3,0,1.6),H("#F2C14E",{roughness:.3}));a.position.set(2.1,.1,-2.4),e.add(a);let l=Pt(4),c=[],h=nt(32,32,f=>{f.fillStyle="#B5862E",f.beginPath(),f.ellipse(16,16,14,7,.5,0,7),f.fill()});for(let f=0;f<30;f++){let d=de(h,.12,.12);e.add(d),c.push({m:d,x:(l()-.5)*10,z:-l()*20,p:l()*6})}return(f,d,u)=>{for(let g of c)g.m.position.set(g.x+(d*.8+g.p)%6-3,.1+Math.abs(Math.sin(d*2+g.p))*.4,g.z),g.m.rotation.z=d*3+g.p;return xt(u,[[0,[-1.5,1.3,9]],[3.5,[0,1.6,4.5]],[6.5,[1.4,1.1,1]]],[[0,[0,2.5,-40]],[3.5,[.5,1.8,-20]],[6.5,[2.8,.7,-3]]],d),{focus:ht(30,4.2,Mt(3.6,6,d)),range:ht(30,2.5,Mt(3.6,6,d)),blur:10,bloom:.2,bloomT:1,vig:.38}}})}function wd(i,t){return bt(i,t,{bg:"#BFD8EE",fog:["#E8E0D8",.006],fov:36,far:900},e=>{an(e,{seed:9,cars:!0});let n=ee(e,0,-10,0,.3);n.tint("#FFF6EA");let s=[],r=nt(64,32,a=>{a.fillStyle="#5A6070",a.beginPath(),a.moveTo(0,16),a.quadraticCurveTo(16,0,32,14),a.quadraticCurveTo(48,0,64,16),a.quadraticCurveTo(32,10,0,16),a.fill()}),o=Pt(2);for(let a=0;a<9;a++){let l=de(r,.5,.25);e.add(l),s.push({m:l,p:o()*6,x:(o()-.5)*8,y:6+o()*5})}return(a,l,c)=>{for(let h of s)h.m.position.set(h.x+l*1.6,h.y+Math.sin(l*2+h.p)*.3,-18-h.p),h.m.scale.y=.6+Math.abs(Math.sin(l*10+h.p))*.6,Ue(h.m,c);return xt(c,[[0,[.3,1.55,-6.8]],[2.2,[.3,2.2,-4.5]],[6.6,[0,26,14]]],[[0,[0,1.5,-10]],[2.2,[0,1.3,-10]],[6.6,[0,0,-14]]],l),n.face(c),n.eye(l<1.5?"wide":l<3.5?"small":"sad"),n.pose({armL:[12,6],armR:[12,6],head:Math.sin(l*1.2)*3}),{focus:c.position.distanceTo(n.root.position),range:ht(2,20,Mt(2,5,l)),blur:10,bloom:.2,bloomT:1,vig:.45,sat:ht(1,.9,l/6.6)}}})}function Rd(i,t){return bt(i,t,{bg:"#BFD8EE",fog:["#E8E0D8",.01],fov:34},e=>{an(e,{seed:5});let n=ee(e,-1.2,-4,0,.25);n.tint("#FFF6EA");let s=new pt;s.add(w(.7,.9,.6,"#3E7A5C",0,.45,0));let r=w(.74,.06,.64,"#2E6A4C",0,.93,0);s.add(r),s.position.set(1.4,0,-4.3),e.add(s);let o=(l,c)=>de(nt(320,200,h=>{h.fillStyle="#FBF7EC",h.beginPath(),h.roundRect(10,10,300,140,40),h.fill(),h.beginPath(),h.moveTo(110,148),h.lineTo(120,196),h.lineTo(160,148),h.fill(),h.fillStyle="#20202A",h.font=`900 ${c}px Fraunces`,h.textAlign="center",h.textBaseline="middle",h.fillText(l,160,84)}),1,.62),a=[o("AL\xD4?",80),o("AL\xD4?",70),o("al\xF4?",60)];return a.forEach(l=>e.add(l)),(l,c,h)=>{xt(h,[[0,[-.4,1.5,1.4]],[5.2,[-.8,1.55,.2]]],[[0,[-.6,1.5,-4]],[5.2,[-.4,1.5,-4.2]]],c),n.face(h);let f=c>.3&&c<2.6;return n.pose({armL:f?[100,140]:[12,6],armR:f?[100,140]:c>3.2?[40,-30]:[12,6],head:f?-6:0,lean:c>3.2?4:0}),n.eye(f?"wide":c<3.2?"look":"lookl"),r.rotation.x=-Mt(3.2,3.6,c)*1.2,r.position.z=-Mt(3.2,3.6,c)*.3,a.forEach((d,u)=>{let g=.45+u*.55,y=Mt(g,g+.15,c)*(1-Mt(g+1.4,g+1.7,c));d.visible=y>.02,d.scale.setScalar((1-u*.2)*y),d.position.set(-1.2+u*.9,2.6+u*.25,-4.3-u*2.5),Ue(d,h)}),{focus:h.position.distanceTo(n.root.position),range:2.4,blur:12,bloom:.2,bloomT:1,vig:.42}}})}function Cd(i,t){return bt(i,t,{bg:"#BFD8EE",fog:["#E8E0D8",.01],fov:34},e=>{an(e,{seed:11});let n=ee(e,.8,-3,0,.3);n.tint("#FFF6EA");let s=document.createElement("canvas");s.width=800,s.height=450;let r=s.getContext("2d"),o=new De(s);o.colorSpace=ne;let a=h=>{r.fillStyle="#10162B",r.fillRect(0,0,800,450),r.fillStyle="#E9483A",r.beginPath(),r.roundRect(250,70,300,300,40),r.fill(),r.fillStyle="#fff",r.save(),r.translate(400,220),r.scale(1+h*.1,1+h*.1),r.beginPath(),r.roundRect(-70,-10,50,100,10),r.roundRect(-10,-20,100,110,20),r.fill(),r.beginPath(),r.roundRect(-10,-100,46,100,20),r.fill(),r.restore(),r.fillStyle="#fff",r.font="900 46px Inter",r.textAlign="center",o.needsUpdate=!0},l=new U(new lt(6.4,3.6),new tt({map:o,emissiveMap:o,emissive:"#fff",emissiveIntensity:.9}));l.position.set(-1.2,5.8,-9),e.add(l),e.add(w(6.7,3.9,.3,"#15151b",-1.2,5.8,-9.2)),e.add(w(.3,4,.3,"#15151b",-1.2,2,-9.3));let c=-1;return(h,f,d)=>{let u=Math.round(Math.abs(Math.sin(f*4))*4)/4;return u!==c&&(a(u),c=u),xt(d,[[0,[2.2,1.4,3.5]],[5.8,[1.6,1.6,1.8]]],[[0,[-.4,3.2,-6]],[5.8,[.2,2.6,-5]]],f),n.face(d),n.pose({armL:[10,6],armR:f>1.2?[140,10]:[12,6],head:f>3.6?5:0}),n.eye(f<3.6?"happy":"smug"),{focus:d.position.distanceTo(n.root.position),range:3.5,blur:12,bloom:.35,bloomT:.9,vig:.42}}})}function Pd(i,t){return bt(i,t,{bg:"#F2D9B0",fog:["#E8D2B0",.018],fov:34},e=>{on(e,{win:[-2.4,.6,1.2,3.6],wall:"#7A3E4E",side:!1}),Ae(e,-30,80,50,[[0,"#7FB2E0"],[.7,"#F7D9B0"],[1,"#FFE9C8"]]),Oe(e,-24,60,18,["#A8B4C8","#9AA8BE","#8E9CB4"],!1,7,-3);let n=new pt,s=H("#36AEA2"),r=H("#43C4B4");n.add(w(3.2,.46,1,s,0,.3,0)),n.add(w(3.2,.95,.34,s,0,.8,-.4));for(let f of[-1.75,1.75])n.add(w(.36,.74,1.1,r,f,.44,0));n.position.set(-.9,0,-3.3),e.add(n),es(e,2.2,2.5,-3.8,1,.7,(f,d,u)=>{f.fillStyle="#F2C14E",f.fillRect(0,0,d,u),f.fillStyle="#C9564A",f.beginPath(),f.arc(128,90,50,0,7),f.fill()}),Xn(e,2.9,-3.4),Xn(e,-3.4,-3.2,.8,"#36AEA2"),Xe(e,{pos:[-3,6,-10],target:[0,0,0]}),bn(e,-1.2,2.2,-2.4,1.6,4.5,-.5,"#FFE2B0",.14);let o=ee(e,-.9,-2.4,0,.25);o.tint("#FFF2E2");let a=nt(128,160,f=>{f.fillStyle="#FBF7EC",f.fillRect(0,0,128,160),f.fillStyle="#20202A",f.font="900 22px Inter",f.fillText("BOLETO",12,30);for(let d=0;d<16;d++)f.fillRect(12+d*6,120,d%3?2:4,30);f.fillStyle="#9aa";for(let d=0;d<4;d++)f.fillRect(12,50+d*14,100,5)}),l=nt(128,160,f=>{f.fillStyle="#FFF4D6",f.fillRect(0,0,128,160),f.fillStyle="#C9361F",f.font="900 20px Inter",f.fillText("ALUGUEL",12,30),f.fillStyle="#9aa";for(let d=0;d<6;d++)f.fillRect(12,50+d*14,100,5)}),c=Pt(9),h=[];for(let f=0;f<40;f++){let d=de(f%3?a:l,.32,.4);e.add(d),h.push({m:d,vx:(c()-.5)*3,vy:2+c()*2.5,vz:c()*1.5,r:c()*6,d:c()*.8})}return(f,d,u)=>{xt(u,[[0,[-.6,1.5,3.2]],[3,[-.8,1.5,2.2]],[10.5,[-.5,1.7,3.6]]],[[0,[-.9,1.4,-2.4]],[10.5,[-.8,1.9,-2.6]]],d),o.face(u),d<2.9?(o.pose({armL:[150+Math.sin(d*20)*10,30],armR:[150-Math.sin(d*20)*10,30],head:Math.sin(d*18)*5,bob:Math.abs(Math.sin(d*14))*.04}),o.eye("wide")):d<4.2?(o.pose({armL:[10,6],armR:[10,6],head:8}),o.eye("look")):(o.cheer(d,0,.8),o.eye("happy"));for(let y of h){let m=Math.max(0,d-4.3-y.d);y.m.visible=m>0,y.m.position.set(-.9+y.vx*m,1.6+y.vy*m-.9*m*m,-2.3+y.vz*m),y.m.rotation.set(m*3+y.r,m*2,m*4),y.m.position.y<.02&&(y.m.position.y=.02)}return{focus:u.position.distanceTo(o.root.position),range:2.2,blur:12,bloom:.25,bloomT:.95,vig:.42}}})}function Fd(i,t){return bt(i,t,{bg:"#F6B07A",fog:["#F2B48A",.007],fov:36,far:900},e=>{Ae(e,-200,900,400,[[0,"#3A4A8A"],[.45,"#C46A7E"],[.75,"#F7A773"],[1,"#FFE0A0"]]);let n=Le("#FFD9A0",60,.9);n.position.set(-30,18,-190),n.material.fog=!1,e.add(n),Oe(e,-160,700,110,["#7A5A78","#8A6A80","#9A7A88"],!1,4),Oe(e,-90,420,60,["#5A4A6A","#634F70","#6E5878"],!1,12),Oe(e,-50,260,34,["#463A58","#4E405E","#584866"],!1,21);let s=new U(new lt(30,20),new tt({color:"#8A7A70",roughness:.9}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,e.add(s),e.add(w(30,.9,.25,"#6E5A50",0,.45,-6));for(let[a,l]of[[-4,-3],[3.5,-4]])e.add(w(1.4,1.2,1.4,"#9AA0A8",a,.6,l)),e.add(w(1.5,.1,1.5,"#7A8088",a,1.25,l));let r=new U(new Ht(.8,.8,1.6,20),H("#C9C2B6"));r.position.set(-5,2.6,-4.5),e.add(r);for(let a of[-5.6,-4.4])e.add(w(.1,1.8,.1,"#5A4A44",a,.9,-4.5));for(let a=0;a<20;a++){let l=new U(new ae(.05,8,6),new tt({emissive:"#FFD79C",emissiveIntensity:4,color:"#fff"}));l.position.set(-6+a*.6,2.6-Math.sin(a/19*Math.PI)*.5,-2),e.add(l)}Xe(e,{key:"#FFB98C",ki:3,pos:[-20,8,-30],target:[0,0,0],hemi:1});let o=ee(e,0,-3.5,0,.4);return o.tint("#FFE6D0"),(a,l,c)=>{xt(c,[[0,[0,1.2,-1.2]],[5,[0,2.4,3.6]]],[[0,[0,1.6,-3.5]],[5,[0,2.6,-8]]],l),o.face(c);let h=Mt(.3,1.2,l);return o.pose({armL:[ht(10,115,h),ht(6,10,h)],armR:[ht(10,115,h),ht(6,10,h)],head:0}),o.eye(l>1.5?"happy":"open"),{focus:c.position.distanceTo(o.root.position),range:4,blur:10,bloom:.45,bloomT:.85,vig:.4,exposure:1.02}}})}function Id(i,t){return bt(i,t,{bg:"#DDE3EA",fog:["#E4E8EE",.02],fov:34},e=>{let n=new U(new lt(40,30),new tt({map:nt(512,512,c=>{c.fillStyle="#E8E8EC",c.fillRect(0,0,512,512),c.strokeStyle="#C8C8D0",c.lineWidth=3;for(let h=0;h<=512;h+=128)c.beginPath(),c.moveTo(h,0),c.lineTo(h,512),c.moveTo(0,h),c.lineTo(512,h),c.stroke()}),roughness:.12,metalness:.2}));n.material.map.wrapS=n.material.map.wrapT=pe,n.material.map.repeat.set(8,6),n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n),e.add(w(40,6,.3,H("#2E3442"),0,3,-8));let s=vn("AUTO PRIME",7,1.2,"#14171e","#F2C14E",.9);s.position.set(0,4.6,-7.8),e.add(s);for(let c=-3;c<=3;c++){let h=new U(new en(2.4,.05,.3),new tt({emissive:"#FFFFFF",emissiveIntensity:2.4,color:"#fff"}));h.position.set(c*3.2,5.9,-3),e.add(h)}let r=[];[[-4.2,-4.2,"#2A2E3A"],[.4,-3.2,"#C9201A"],[4.8,-4.6,"#F2C14E"]].forEach(([c,h,f],d)=>{let u=new U(new Ht(2.6,2.6,.15,48),H("#B8BCC4",{metalness:.4,roughness:.3}));u.position.set(c,.075,h),e.add(u);let g=new pt;if(g.position.set(c,.15,h),e.add(g),Xs(g,0,0,f,1,!1).scale.set(1.05,.85,1.1),r.push(g),d===1){let m=new Wn("#FFFFFF",80,12,.4,.5,1.2);m.position.set(c,6,h+2),m.target.position.set(c,0,h),m.castShadow=!0,e.add(m,m.target)}}),e.add(w(2.4,1.05,.8,H("#1C2029"),-2.2,.52,.8)),e.add(w(2.5,.06,.9,H("#E8E8EC",{metalness:.2,roughness:.2}),-2.2,1.08,.8));let o=w(.12,.04,.22,H("#C9201A",{metalness:.5}),-2,1.13,.8);e.add(o);let a=Le("#FFE9B0",.5,.5);a.position.set(-2,1.2,.8),e.add(a),e.add(w(.5,.3,.02,"#F4EFE4",-2.8,1.25,.5)),Ae(e,-40,200,60,[[0,"#7FB2E0"],[1,"#F4E9D8"]]),Oe(e,-30,120,20,["#A8B4C8","#9AA8BE","#8E9CB4"],!1,3,-1),Xe(e,{pos:[6,12,8],ki:2,hemi:1.2});let l=ee(e,-2.2,1.7,0,.25);return l.tint("#FFFFFF"),(c,h,f)=>{r.forEach((u,g)=>u.rotation.y=h*.25+g),xt(f,[[0,[-5.5,1.5,6.5]],[5.7,[-3.4,1.6,4.2]]],[[0,[-.5,1,-2]],[5.7,[-2.1,1.25,1]]],h),l.face(f);let d=Mt(2.3,2.7,h);return l.pose({armR:[ht(10,60,d),ht(6,-20,d)],armL:[10,6]}),l.eye(h<2.3?"look":h<4?"smug":"happy"),h>2.6&&(o.position.set(l.root.position.x+.45,ht(1.13,1.5,Mt(2.6,3.2,h)),l.root.position.z+.1),a.position.copy(o.position)),{focus:f.position.distanceTo(l.root.position),range:3,blur:12,bloom:.3,bloomT:.9,vig:.38}}})}function Dd(i,t){return bt(i,t,{bg:"#2A1E2A",fog:["#3A2830",.02],fov:34},e=>{on(e,{w:16,wall:"#5A2E3E",side:!1,floor:"#4A2E22"});for(let y of[-5,-1.7,1.7,5]){let m=new U(new Ht(.22,.26,4.2,20),H("#E8DCC4"));m.position.set(y,2.1,-3.7),m.castShadow=!0,e.add(m)}let n=new pt;n.add(w(3.8,.45,3.2,"#3A2418",0,.3,0)),n.add(w(3.6,.35,3,H("#F4EFE4"),0,.7,.05)),n.add(w(3.66,.14,2.2,H("#8E2A3A"),0,.92,.45)),n.add(w(3.9,2,.2,"#6E3A2A",0,1.3,-1.6));for(let y of[-.9,0,.9]){let m=w(.9,.28,.5,H("#FBF7EC"),y,1,-1.1);m.rotation.x=-.3,n.add(m)}for(let[y,m]of[[-1.85,-1.5],[1.85,-1.5],[-1.85,1.5],[1.85,1.5]])n.add(w(.12,3.4,.12,"#3A2418",y,1.7,m));n.add(w(3.9,.1,3.2,"#8E2A3A",0,3.4,0)),n.position.set(0,0,-1.6),e.add(n);let s=new pt;for(let y=0;y<10;y++){let m=y/10*6.283,p=new U(new ae(.07,10,8),new tt({emissive:"#FFD79C",emissiveIntensity:5,color:"#fff"}));p.position.set(Math.cos(m)*.6,0,Math.sin(m)*.6),s.add(p)}s.add(new U(new Vn(.6,.03,8,40),H("#D9B46A",{metalness:.7}))).rotation.x=Math.PI/2,s.position.set(0,3.9,1.2),e.add(s);let r=Le("#FFD79C",3,.5);r.position.copy(s.position),e.add(r);let o=new ge("#FFD5A0",14,12,1.5);o.position.set(0,3.5,1.2),o.castShadow=!0,e.add(o);let a=document.createElement("canvas");a.width=640,a.height=360;let l=a.getContext("2d"),c=new De(a);c.colorSpace=ne;let h=new pt;h.add(w(2.4,1.4,.08,H("#0E0E14",{metalness:.5}),0,0,0));let f=new U(new lt(2.3,1.3),new ce({map:c}));f.position.z=.045,h.add(f),h.position.set(3.4,2.1,1.5),h.rotation.y=-1.2,e.add(h);let d=new ge("#9FB8FF",6,7);d.position.set(2.6,2,1.5),e.add(d),Xn(e,-3.4,-3.3,1.2),Xn(e,3.4,-3.3,1.2),es(e,-3.4,2.5,-3.8,1,1.3,(y,m,p)=>{y.fillStyle="#2A3A5A",y.fillRect(0,0,m,p),y.fillStyle="#E9B44C",y.beginPath(),y.arc(128,150,60,0,7),y.fill()},0,"#D9B46A"),e.add(new me("#B08AA0","#2a1a14",.7));let u=ee(e,0,-.95,.35,.25);u.tint("#FFE8D8");let g="";return(y,m,p)=>{let v=m>4.25,E=v?"s"+Math.floor(m*12):"p";if(E!==g){if(g=E,v){let R=Pt(Math.floor(m*12)),x=l.createImageData(640,360);for(let C=0;C<x.data.length;C+=4){let D=R()*255;x.data[C]=x.data[C+1]=x.data[C+2]=D,x.data[C+3]=255}l.putImageData(x,0,0),l.fillStyle="#000000aa",l.fillRect(170,140,300,80),l.fillStyle="#fff",l.font="800 44px Inter",l.textAlign="center",l.fillText("SEM SINAL",320,196),l.textAlign="left"}else{let R=l.createLinearGradient(0,0,0,360);R.addColorStop(0,"#F3A6B8"),R.addColorStop(1,"#8A4A7E"),l.fillStyle=R,l.fillRect(0,0,640,360),l.fillStyle="#fff",l.font="800 40px Inter",l.fillText("NOVELA",30,60)}c.needsUpdate=!0}d.color.set(v?"#DDDDEE":"#FFA0C8"),xt(p,[[0,[-1.5,2,5.5]],[7.8,[-.8,1.7,3.2]]],[[0,[.5,1.4,-1]],[7.8,[.4,1.5,-1]]],m),u.face(p);let _=Mt(.2,.8,m);return u.root.position.y=ht(1.6,-.05,_)+(m<1.4?Math.abs(Math.sin(m*9))*.1*(1-Mt(.8,1.4,m)):0),u.pose({armL:[ht(150,60,_),10],armR:m>2.6?[70,-40]:[ht(150,60,_),10],head:v?6:0}),u.eye(m<2.5?"happy":v?"flat":"look"),{focus:p.position.distanceTo(u.root.position),range:2.5,blur:12,bloom:.35,bloomT:.88,vig:.5}}})}function Ld(i,t){return bt(i,t,{bg:"#141228",fog:["#2B1E2E",.02],fov:32},e=>{let n=Md(e),s=ee(e,-.45,-2.75,-.12,.2);s.tint("#E8E0F0");let r=new pt;r.add(w(.7,.03,.48,H("#B8BCC4",{metalness:.6}),0,0,0));let o=document.createElement("canvas");o.width=400,o.height=260;let a=o.getContext("2d"),l=new De(o);l.colorSpace=ne;let c=new U(new lt(.66,.43),new ce({map:l})),h=new pt;h.add(w(.7,.46,.02,H("#B8BCC4",{metalness:.6}),0,.23,-.01)),c.position.set(0,.23,.005),h.add(c),h.position.z=-.24,h.rotation.x=-.25,r.add(h),r.position.set(-.45,.58,-1.9),e.add(r);let f=new ge("#9FC8FF",3,3);f.position.set(-.45,1.1,-1.5),e.add(f);let d=g=>{a.fillStyle="#0B0B14",a.fillRect(0,0,400,260),a.fillStyle="#E9483A",a.font="900 28px Inter",a.fillText("FILMES GR\xC1TIS",16,36);let y=["#36AEA2","#F2C14E","#D2728A","#4A86C7","#8EAE86","#E9733C"];for(let m=0;m<6;m++)a.fillStyle=y[(m+g)%6],a.fillRect(16+m*64,60,56,84),a.fillStyle=y[(m+g+2)%6],a.fillRect(16+m*64,160,56,84);l.needsUpdate=!0},u=-1;return(g,y,m)=>{n.setTV("novela",0);let p=Math.floor(y*1.2)%6;p!==u&&(d(p),u=p);let v=Mt(6.3,7.6,y);xt(m,[[0,[.6,1.4,1.8]],[6.3,[.1,1.45,.6]],[8.6,[-.4,1.62,-.9]]],[[0,[-.45,1.2,-2.6]],[8.6,[-.45,1.6,-2.75]]],y),s.face(m),s.pose({armL:[20,-70],armR:[20,-70],head:v>.5?0:Math.sin(y)*2}),s.eye(y<6.6?Math.floor(y*2)%5===0?"happy":"down":"smug");let E=y>7.9&&Math.sin(y*40)>.3?.55:1;return n.lamp.intensity=16*E,{focus:m.position.distanceTo(s.root.position),range:ht(2.4,1.2,v),blur:13,bloom:.3,bloomT:.92,vig:ht(.45,.65,v),exposure:E>.9?1:.8}}})}var ko=(i,t,e=30,n=400)=>{let s=nt(1024,1024,o=>{o.fillStyle=t,o.fillRect(0,0,1024,1024);let a=Pt(4);for(let l=0;l<6e3;l++)o.fillStyle=`rgba(${a()<.5?"255,255,255":"0,0,0"},.05)`,o.fillRect(a()*1024,a()*1024,4,4)});s.wrapS=s.wrapT=pe,s.repeat.set(e,e);let r=new U(new lt(n,n),new tt({map:s,roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,i.add(r),r},zo=(i=6,t=16,e="#C9C2B6")=>{let n=[];for(let r=0;r<=12;r++){let o=r/12*t,a=o/t-.7;n.push(new it(i*(.62+1.1*a*a),o))}let s=new U(new Ns(n,40),H(e,{side:te}));return s.castShadow=s.receiveShadow=!0,s},gc=(i=14)=>{let t=new pt,e=H("#6E747E",{metalness:.4});for(let[n,s]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let r=w(.14,i,.14,e,n*.9,i/2,s*.9);r.rotation.z=-n*.06,r.rotation.x=s*.06,t.add(r)}for(let n=1;n<6;n++){let s=n*i/6,r=1.9-n*.18;t.add(w(r*2,.08,.08,e,0,s,r-.1,!1)),t.add(w(r*2,.08,.08,e,0,s,-r+.1,!1)),t.add(w(.08,.08,r*2,e,r-.1,s,0,!1)),t.add(w(.08,.08,r*2,e,-r+.1,s,0,!1))}for(let n of[i*.78,i*.93])t.add(w(6,.2,.2,e,0,n,0));return t};function Ud(i,t){return bt(i,t,{bg:"#3A2E4A",fog:["#6A4A5A",.012],fov:34,far:900},e=>{Ae(e,-200,900,400,[[0,"#1A1838"],[.5,"#4A2E52"],[.8,"#A8546A"],[1,"#E8885A"]]),ko(e,"#4A4038");let n=[],s=()=>new tt({color:"#000",emissive:"#FFC47A",emissiveIntensity:1.1});[[-8,-20,10,8,7],[5,-24,14,10,9],[18,-30,9,12,6]].forEach(([d,u,g,y,m])=>{e.add(w(g,y,m,H("#7A6E68"),d,y/2,u));for(let p=0;p<Math.floor(g/1.4);p++)for(let v=0;v<3;v++){let E=new U(new lt(.8,.9),s());E.position.set(d-g/2+1+p*1.4,1.6+v*2.2,u+m/2+.02),e.add(E),n.push(E)}});let r=[];[[-2,-34,34],[3,-36,30],[26,-40,26]].forEach(([d,u,g],y)=>{let m=new U(new Ht(1.1,1.6,g,24),H("#B8B0A8"));m.position.set(d,g/2,u),m.castShadow=!0,e.add(m);for(let v=0;v<3;v++){let E=new U(new Ht(1.15,1.2,1.6,24),H(v%2?"#F4F0E8":"#C9361F"));E.position.set(d,g-1-v*3.2,u),e.add(E)}let p=new U(new ae(.25,8,6),new tt({emissive:"#FF3A20",emissiveIntensity:5,color:"#f00"}));p.position.set(d,g+.3,u),e.add(p),n.push(p),r.push(Di(e,14,[d,g+1,u],{col:"#9A8A90",size:8,rise:26,spread:2,seed:4+y,life:4}))});let o=zo(9,22);o.position.set(-26,0,-48),e.add(o);let a=zo(9,22);a.position.set(-46,0,-56),e.add(a),r.push(Di(e,14,[-26,22,-48],{col:"#E8E2DA",size:14,rise:30,spread:5,seed:9,life:5}));let l=new U(new Pi(6,4,9),H("#1E1C22",{flatShading:!0}));l.position.set(12,2,-8),e.add(l);let c=w(1.2,.3,22,H("#3A3A42"),6,3,-12);c.rotation.x=-.18,e.add(c);for(let d=-20;d<20;d++)e.add(w(.06,1.8,.06,"#555",d*1.2,.9,4,!1));e.add(w(48,.05,.05,"#777",0,1.7,4,!1)),e.add(w(48,.05,.05,"#777",0,.9,4,!1));let h=[];for(let d of[-12,-4,4,12]){let u=yr(e,d,6,1,!0,6);h.push(u)}let f=vn("USINA TERMEL\xC9TRICA",8,1.1,"#2A3550","#F4EFE4",.5,"Inter");return f.position.set(-6,5,6),e.add(f),e.add(w(.2,4.5,.2,"#333",-9.5,2.2,5.9)),e.add(w(.2,4.5,.2,"#333",-2.5,2.2,5.9)),Xe(e,{night:!0,ki:1.4,key:"#FFB08A",pos:[30,20,-40],r:60,target:[0,0,-10]}),(d,u,g)=>(r.forEach(y=>y(u)),n.forEach((y,m)=>{let p=7.7+m%9*.2;y.material.emissiveIntensity=u>p?.02:y.geometry.type==="SphereGeometry"?5:1.1}),h.forEach((y,m)=>{let p=u<8.2+m*.35;y.children.forEach(v=>{v.isPointLight&&(v.intensity=p?6:0),v.isSprite&&(v.visible=p),v.material&&v.material.emissiveIntensity!==void 0&&v.material.emissive&&v.material.emissive.r>.5&&(v.material.emissiveIntensity=p?2.2:0)})}),xt(g,[[0,[-14,3,16]],[10.2,[4,4.5,14]]],[[0,[-4,8,-20]],[10.2,[6,7,-20]]],u),{focus:30,range:30,blur:6,bloom:.45,bloomT:.85,vig:.5,exposure:ht(1,.82,Mt(7.6,10,u))})})}var j1=()=>nt(2048,1024,i=>{i.fillStyle="#04081A",i.fillRect(0,0,2048,1024);let t=Pt(77),e=[[250,200,400,200],[560,640,120,260],[1e3,220,180,110],[1080,520,160,220],[1500,280,420,180],[1700,680,120,60]];i.fillStyle="#0E1630";for(let[n,s,r,o]of e)i.beginPath(),i.ellipse(n,s,r,o,0,0,7),i.fill();for(let[n,s,r,o]of e)for(let a=0;a<r*1.2;a++){let l=t()*6.28,c=Math.sqrt(t()),h=n+Math.cos(l)*r*c,f=s+Math.sin(l)*o*c;i.fillStyle=t()<.3?"#FFE0A0":"#FFB860",i.globalAlpha=.5+t()*.5,i.fillRect(h,f,2+t()*3,2+t()*3)}i.globalAlpha=1});function Bd(i,t){return bt(i,t,{bg:"#020309",fov:34,far:2400},e=>{Tn(e,5e3,900,3),Ii(e,-200,80,-600,900,"#5E6BFF",3,.06);let n=j1(),s=new U(new ae(5,80,56),new tt({map:n,emissiveMap:n,emissive:"#fff",emissiveIntensity:1.2,roughness:.9}));s.position.set(0,-1.5,0),e.add(s);let r=new U(new ae(5.35,64,40),new He({transparent:!0,depthWrite:!1,side:ze,blending:Ge,vertexShader:"varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 n;void main(){float k=pow(max(.86-abs(n.z),0.),2.4);gl_FragColor=vec4(.3,.5,1.,1.)*k*1.6;}"}));r.position.copy(s.position),e.add(r);let o=new Ze("#9FB8FF",.5);return o.position.set(-20,5,-10),e.add(o),e.add(new li("#1A2040",.4)),(a,l,c)=>(s.rotation.y=1+l*.05,s.material.emissiveIntensity=ht(1.2,.05,Mt(.4,2.8,l)),xt(c,[[0,[0,2,13]],[3,[0,1.6,11.5]]],[[0,[0,-.5,0]],[3,[0,-.6,0]]],l),{focus:11,range:20,blur:3,bloom:.6,bloomT:.6,vig:.5})})}function Nd(i,t){return bt(i,t,{bg:"#9EC4E0",fog:["#C8DCE8",.006],fov:36,far:900},e=>{Ae(e,-300,1e3,400,[[0,"#4A86C7"],[.6,"#9EC4E0"],[1,"#EAF2E8"]]);let n=(g,y,m,p,v)=>{let E=new U(new Pi(m,p,9),H(v,{flatShading:!0}));E.position.set(g,p/2-2,y),e.add(E)};for(let g=0;g<12;g++)n(-90+g*16,-140-g%3*20,40,30+g%4*8,["#4E7A44","#5E8A50","#3E6A3A"][g%3]);let s=nt(512,512,g=>{g.fillStyle="#2E6A8E",g.fillRect(0,0,512,512);let y=Pt(3);g.strokeStyle="#ffffff33",g.lineWidth=3;for(let m=0;m<200;m++){let p=y()*512,v=y()*512;g.beginPath(),g.moveTo(p,v),g.quadraticCurveTo(p+10,v-4,p+20,v),g.stroke()}});s.wrapS=s.wrapT=pe,s.repeat.set(20,10);let r=new U(new lt(400,160),new tt({map:s,roughness:.2,metalness:.1}));r.rotation.x=-Math.PI/2,r.position.set(0,18,-100),e.add(r);let o=nt(1024,256,g=>{g.fillStyle="#C9C2B6",g.fillRect(0,0,1024,256),g.strokeStyle="#A8A094",g.lineWidth=4;for(let m=0;m<1024;m+=64)g.beginPath(),g.moveTo(m,0),g.lineTo(m,256),g.stroke();for(let m=0;m<256;m+=64)g.beginPath(),g.moveTo(0,m),g.lineTo(1024,m),g.stroke();let y=Pt(2);for(let m=0;m<300;m++)g.fillStyle="rgba(90,80,70,"+y()*.12+")",g.fillRect(y()*1024,y()*256,20+y()*60,4+y()*30)});o.wrapS=pe,o.repeat.set(3,1);let a=new U(new Ht(60,60,20,80,1,!0,-.55,1.1),new tt({map:o,side:te,roughness:.95}));a.rotation.y=Math.PI,a.position.set(0,10,40),e.add(a),e.add(w(70,1,3,H("#B8B0A4"),0,20.2,-20));for(let g=-12;g<=12;g++)e.add(w(.2,1.4,.2,"#555",g*2.6,21.2,-19,!1));let l=nt(128,512,g=>{let y=g.createLinearGradient(0,0,0,512);y.addColorStop(0,"#DDF2FF"),y.addColorStop(1,"#8FC8E8"),g.fillStyle=y,g.fillRect(0,0,128,512),g.strokeStyle="#ffffff99",g.lineWidth=4;let m=Pt(5);for(let p=0;p<60;p++){let v=m()*128;g.beginPath(),g.moveTo(v,m()*512),g.lineTo(v,m()*512),g.stroke()}});l.wrapS=l.wrapT=pe,l.repeat.set(4,2);let c=new U(new lt(14,22),new tt({map:l,emissive:"#5A8AA8",emissiveIntensity:.3,roughness:.3}));c.position.set(-14,9.5,-18),c.rotation.x=-.15,e.add(c);let h=new U(new lt(60,120),new tt({map:s.clone(),roughness:.2}));h.material.map.needsUpdate=!0,h.material.map.repeat.set(6,12),h.rotation.x=-Math.PI/2,h.position.set(-6,.1,30),e.add(h),ko(e,"#6E8A50",40);let f=Di(e,14,[-14,1,-14],{col:"#FFFFFF",size:7,rise:6,spread:8,seed:3,life:3});e.add(w(16,6,8,H("#E8E2D6"),10,3,-12));for(let g=0;g<6;g++){let y=new U(new lt(1.4,1.6),new tt({color:"#000",emissive:"#FFD79A",emissiveIntensity:1.2}));y.position.set(4+g*2.4,3.5,-7.98),e.add(y)}let d=vn("HIDREL\xC9TRICA",7,1,"#1F5E8A","#FFFFFF",.4,"Inter");d.position.set(10,6.8,-7.9),e.add(d);for(let[g,y]of[[24,-4],[34,10],[44,24]]){let m=gc(16);m.position.set(g,0,y),m.rotation.y=-.9,e.add(m)}Xe(e,{ki:3,pos:[-30,40,30],r:60});let u=ee(e,2,-18.6,20.7,.3);return u.tint("#FFFFFF"),(g,y,m)=>{l.offset.y=-y*1.2,s.offset.x=y*.02,f(y),xt(m,[[0,[-30,12,40]],[6,[-8,16,14]],[9.6,[-1,21.6,-12]]],[[0,[-6,8,-14]],[6,[0,14,-18]],[9.6,[2,21.8,-18.6]]],y),u.face(m);let p=Mt(8.4,8.7,y);return u.pose({armL:[ht(10,50,p),ht(6,110,p)],armR:[ht(10,50,p),ht(6,110,p)],head:p*8}),u.eye(y<8.4?"happy":"flat"),{focus:m.position.distanceTo(u.root.position),range:ht(40,3,Mt(6,9,y)),blur:8,bloom:.25,bloomT:.95,vig:.38}}})}function Hd(i,t){return bt(i,t,{bg:"#F2B48A",fog:["#F0B88E",.008],fov:34,far:900},e=>{Ae(e,-200,900,400,[[0,"#4A4A8A"],[.5,"#C46A7E"],[.8,"#F7A773"],[1,"#FFE0A0"]]),Oe(e,-160,600,70,["#7A5A78","#8A6A80","#9A7A88"],!0,3),ko(e,"#6E7A4A");let n=gc(16),s=gc(16);n.position.set(-14,0,-10),s.position.set(14,0,-10),e.add(n,s);let r=16*.93,o=f=>r-1.6*(1-(f/14)**2),a=[];for(let f of[-2.6,0,2.6]){let d=[];for(let g=0;g<=40;g++){let y=-14+g*.7;d.push(new P(y,o(y)-(f===0?0:1.5),-10+f))}let u=new U(new wo(new ur(d),60,.04,6),H("#1A1A22"));e.add(u),a.push(u)}let l=Le("#9FE0FF",2.5,0);e.add(l),Xe(e,{key:"#FFB98C",ki:3,pos:[-20,10,20],r:40});let c=ee(e,-3,-10,o(-3)-.02,.35);c.tint("#FFE6D0");let h=w(3.2,.05,.05,"#5C3C28",0,0,0,!1);return e.add(h),(f,d,u)=>{let y=-3+No(d/4)*4*.6,m=Mt(4.4,5.6,d),p=Math.sin(d*3)*(6+d*3);c.root.position.set(y,ht(o(y)-.02,o(y)-12,m*m),-10),c.face(u),c.walk(d,d<4.3?.5:0,.5),c.pose({armL:[95,0],armR:[95,0],lean:d<4.3?p*.5:25+m*80,head:-p*.3,legL:[8,10],legR:[-8,10]}),c.eye(d<2.4?"look":d<4.4?"wide":"shut"),h.position.set(y,c.root.position.y+1.5,-9.95),h.rotation.z=(d<4.3?p:25+m*80)*Math.PI/180;let v=d>4.45?Math.abs(Math.sin(d*30))*(1-Mt(4.5,6.2,d)):0;return l.material.opacity=v,l.position.set(-14,r,-10),l.scale.setScalar(2+v*3),a.forEach((E,_)=>{E.position.y=-m*(_+1)*.6}),xt(u,[[0,[-1,13.5,2]],[6.5,[1.5,12,4.5]]],[[0,[-2.5,14.2,-10]],[6.5,[0,11,-10]]],d),{focus:u.position.distanceTo(new P(y,14,-10)),range:6,blur:10,bloom:.45,bloomT:.85,vig:.45,flash:v*.15}}})}function Od(i,t){return bt(i,t,{bg:"#2A3040",fog:["#2A2A38",.02],fov:34},e=>{on(e,{win:[1.2,3.4,1.4,3.4],wall:"#E8DCC4",side:!1,floor:"#8E7A68"});let n=nt(256,256,p=>{p.fillStyle="#F4F1EA",p.fillRect(0,0,256,256),p.strokeStyle="#4A86C7",p.lineWidth=3;for(let v=0;v<=256;v+=32)p.beginPath(),p.moveTo(v,0),p.lineTo(v,256),p.moveTo(0,v),p.lineTo(256,v),p.stroke()});n.wrapS=n.wrapT=pe,n.repeat.set(4,1.5);let s=new U(new lt(6,1.2),new tt({map:n}));s.position.set(-2.2,1.6,-3.83),e.add(s),Ae(e,-30,80,50,[[0,"#1A1838"],[1,"#6B3A62"]]),Oe(e,-24,60,18,["#2F2748","#3B2F54","#4A3A5E"],!0,7,-3),e.add(w(4.6,.9,.65,H("#5C7A8E"),-2.2,.45,-3.5)),e.add(w(4.7,.06,.72,H("#E8E4DA"),-2.2,.93,-3.48));let r=w(.8,.05,.45,H("#B8BCC4",{metalness:.6}),-1.6,.92,-3.48);e.add(r);let o=new pt;o.add(w(.05,.35,.05,H("#C8CCD4",{metalness:.8}),0,.17,0)),o.add(w(.05,.05,.25,H("#C8CCD4",{metalness:.8}),0,.33,.1)),o.position.set(-1.6,.95,-3.72),e.add(o);let a=new U(new Ht(.015,.015,.3,8),new tt({color:"#BFE8FF",transparent:!0,opacity:.8,emissive:"#5FA8D8",emissiveIntensity:.4}));a.position.set(-1.6,1.13,-3.5),e.add(a);for(let p=0;p<4;p++)e.add(w(1.1,.8,.4,H("#5C7A8E"),-3.9+p*1.15,2.7,-3.62));[["#C9361F",-3.3],["#E9B44C",-2.8]].forEach(([p,v])=>{let E=new U(new Ht(.18,.16,.2,18),H(p,{metalness:.3,roughness:.4}));E.position.set(v,1.06,-3.5),e.add(E)});for(let p=0;p<5;p++){let v=new U(new ae(.07,12,8),H(["#E9483A","#F2C14E","#8EAE56"][p%3]));v.position.set(-.6+p%3*.1,1.03+Math.floor(p/3)*.08,-3.4),e.add(v)}let l=new pt;l.add(w(1,2.1,.8,H("#F4F4F0",{roughness:.3}),0,1.05,0));let c=w(.9,1.9,.05,new tt({color:"#fff",emissive:"#E8F4FF",emissiveIntensity:1}),0,1.05,.36,!1);l.add(c);let h=new pt;h.add(w(.06,2,1,H("#F4F4F0",{roughness:.3}),0,1.05,.5)),h.position.set(.5,0,.42),h.rotation.y=-1.2,l.add(h);for(let p=0;p<4;p++)l.add(w(.86,.02,.5,"#DDE8F0",0,.4+p*.45,.1,!1));l.add(w(.2,.3,.15,"#E9483A",-.2,.58,.1)),l.add(w(.15,.25,.15,"#F4F0E0",.2,1.02,.1)),l.position.set(1,0,-3.3),e.add(l);let f=new ge("#E8F4FF",6,4);f.position.set(1,1.2,-2.4),e.add(f),e.add(w(.35,.06,.22,H("#1A1A22"),-3.4,1,-3.4));let d=[];for(let p=0;p<4;p++){let v=new U(new ae(.012,6,4),new tt({color:"#000",emissive:"#4AFF8A",emissiveIntensity:4}));v.position.set(-3.52+p*.07,1.035,-3.28),e.add(v),d.push(v)}e.add(w(.02,.2,.02,"#1A1A22",-3.25,1.12,-3.45));let u=new U(new Sn(.25,32),new tt({map:nt(256,256,p=>{p.fillStyle="#F4EFE4",p.beginPath(),p.arc(128,128,126,0,7),p.fill(),p.strokeStyle="#2a2a2f",p.lineWidth=8,p.beginPath(),p.moveTo(128,128),p.lineTo(128,50),p.moveTo(128,128),p.lineTo(186,150),p.stroke()})}));u.position.set(-.3,2.8,-3.84),e.add(u),e.add(new me("#B8C0E8","#3a2a20",.7));let g=new ge("#FFE8C8",10,9,1.5);g.position.set(-1.5,3.6,-1),g.castShadow=!0,e.add(g);let y=ee(e,-1,-2.6,0,.22);y.tint("#F8F0E8");let m=new U(new Ht(.06,.05,.15,14),new tt({color:"#CDEBFF",transparent:!0,opacity:.6}));return e.add(m),(p,v,E)=>{let _=v>.2,R=v>.9,x=v>2;return d.forEach((C,D)=>C.material.emissiveIntensity=_?0:4*(Math.sin(v*20+D)>0?1:.3)),c.material.emissiveIntensity=R?0:1,f.intensity=R?0:6,g.intensity=R?2.5:10,a.visible=!x||Math.floor(v*5)%3===0&&v<2.8,a.scale.y=x?.3:1,a.position.y=x?1.03+v*1.5%.2:1.13,xt(E,[[0,[.6,1.6,2.6]],[6.7,[-.2,1.5,1.4]]],[[0,[-.6,1.3,-3]],[6.7,[-1,1.4,-3]]],v),y.face(E),y.pose({armL:[10,6],armR:[35,-60],head:v>2.4?6:0}),y.eye(v<1?"look":v<2.4?"wide":"flat"),m.position.set(y.root.position.x+.32,1.12,y.root.position.z+.12),{focus:E.position.distanceTo(y.root.position),range:2.4,blur:12,bloom:.3,bloomT:.9,vig:.5,exposure:R?.85:1}}})}function zd(i,t){return bt(i,t,{bg:"#10141C",fog:["#141C24",.03],fov:36},e=>{let n=new U(new Ht(4,4,120,32,1,!0,Math.PI*.5,Math.PI),new tt({map:(()=>{let u=nt(512,512,g=>{g.fillStyle="#4A4A52",g.fillRect(0,0,512,512),g.strokeStyle="#3A3A42",g.lineWidth=6;for(let y=0;y<512;y+=64)g.beginPath(),g.moveTo(0,y),g.lineTo(512,y),g.stroke();g.fillStyle="#5A4A3A33";for(let y=0;y<30;y++)g.fillRect(y*97%512,y*53%512,40,90)});return u.wrapS=u.wrapT=pe,u.repeat.set(4,20),u})(),side:ze,roughness:.9}));n.rotation.x=Math.PI/2,n.rotation.z=Math.PI,n.position.set(0,2,-50),e.add(n);let s=new U(new lt(8,120),H("#2A2A30"));s.rotation.x=-Math.PI/2,s.position.set(0,0,-50),e.add(s);for(let u of[-.75,.75])e.add(w(.1,.15,120,H("#8A8A92",{metalness:.7}),u,.08,-50));for(let u=0;u<80;u++)e.add(w(2.2,.1,.25,"#3A2E28",0,.03,8-u*1.4));let r=[];for(let u=0;u<12;u++){let g=new U(new en(.2,.2,.5),new tt({emissive:"#FFD79A",emissiveIntensity:3,color:"#fff"}));g.position.set(-3.4,3.2,4-u*9),e.add(g);let y=new ge("#FFCF8E",6,9,1.6);y.position.set(-3,3,4-u*9),e.add(y),r.push([g,y])}let o=new U(new ae(.1,10,8),new tt({emissive:"#FF3020",emissiveIntensity:5}));o.position.set(3.2,2.5,-14),e.add(o),e.add(w(.4,.9,.3,"#1A1A22",3.3,2.4,-14.2));let a=vn("LINHA 4",1.8,.5,"#1A3A6A","#F4EFE4",.5,"Inter");a.position.set(3.6,2.9,-6),a.rotation.y=-Math.PI/2,e.add(a),e.add(w(.8,.8,.8,H("#4A86C7",{metalness:.4}),3,.4,-3));let l=new U(new Ht(.12,.12,3,12),H("#7A8088",{metalness:.5}));l.position.set(3,2,-3),e.add(l);let c=nt(512,512,u=>{u.fillStyle="#2A5A6E",u.fillRect(0,0,512,512);let g=Pt(3);u.strokeStyle="#ffffff22",u.lineWidth=3;for(let y=0;y<160;y++){let m=g()*512,p=g()*512;u.beginPath(),u.moveTo(m,p),u.quadraticCurveTo(m+10,p-4,m+20,p),u.stroke()}});c.wrapS=c.wrapT=pe,c.repeat.set(2,30);let h=new U(new lt(8,120),new tt({map:c,transparent:!0,opacity:.85,roughness:.1,metalness:.2}));h.rotation.x=-Math.PI/2,h.position.set(0,0,-50),e.add(h);let f=[],d=Pt(6);for(let u=0;u<30;u++){let g=new U(new ae(.03,6,4),new tt({color:"#BFE8FF",emissive:"#5FA8D8",emissiveIntensity:.4}));e.add(g),f.push({g,x:(d()-.5)*6,z:-d()*30,p:d()})}return e.add(new me("#8090A8","#101010",.5)),(u,g,y)=>{let m=Mt(.3,8.2,g)*1.4;h.position.y=.02+m,c.offset.y=g*.05,h.visible=!0;for(let p of f){let v=(g*.9+p.p)%1;p.g.position.set(p.x,5.6-v*(5.6-m),p.z)}return r.forEach(([p,v],E)=>{let _=!(g>6&&(E%3===0||Math.sin(g*30+E)>.7));p.material.emissiveIntensity=_?3:.1,v.intensity=_?6:0}),xt(y,[[0,[.6,1.7,6]],[8.2,[.2,2.4,1]]],[[0,[0,1.4,-20]],[8.2,[0,.8,-20]]],g),{focus:10,range:10,blur:8,bloom:.45,bloomT:.8,vig:.55}}})}function kd(i,t){return bt(i,t,{bg:"#0E1030",fog:["#1A1838",.012],fov:34,far:900},e=>{Tn(e,2e3,300,4),Ae(e,-150,500,200,[[0,"#0E1030"],[.6,"#2A2252"],[1,"#5B3460"]]),Oe(e,-120,400,50,["#1E1A30","#241E36","#2A223E"],!1,3),ko(e,"#2A2A32",20,200);let n=w(14,.6,8,H("#E8E8EC"),0,5,-2);e.add(n);let s=w(14.1,.3,8.1,H("#C9361F"),0,4.75,-2);e.add(s);for(let g of[-5,5])e.add(w(.5,5,.5,H("#C8C8CC"),g,2.5,-2));for(let g of[-2.4,2.4]){let y=new pt;y.add(w(.9,1.7,.5,H("#F4F4F0"),0,.85,0)),y.add(w(.92,.4,.52,H("#C9361F"),0,1.5,0));let m=new U(new lt(.5,.3),new tt({color:"#0A0A0A"}));m.position.set(0,1.15,.26),y.add(m),y.position.set(g,0,-2),e.add(y)}let r=new pt;r.add(w(2.4,3.6,.3,H("#1A1A22"),0,5,0)),r.add(w(.3,3.4,.3,"#555",0,1.7,0));let o=new U(new lt(2.2,3.2),new tt({map:nt(256,384,g=>{g.fillStyle="#14141A",g.fillRect(0,0,256,384),g.fillStyle="#3A3A44",g.font="900 60px Inter",g.textAlign="center",g.fillText("8,88",128,120),g.fillText("6,66",128,230),g.fillText("5,55",128,340)})}));o.position.set(0,5,.16),r.add(o),r.position.set(8.5,0,3),e.add(r);let a=w(5,3,4,H("#3A4A5A"),-9,1.5,-5);e.add(a);let l=vn("CONVENI\xCANCIA",4.5,.6,"#1A1A22","#555560",.1,"Inter");l.position.set(-9,3.4,-2.98),e.add(l);let c=Xs(e,0,-.2,"#C9201A",1,!1);c.rotation.y=Math.PI/2,c.scale.set(1.05,.82,1.15);let h=new ge("#B8C8FF",10,14,1.4);h.position.set(2,7,4),h.castShadow=!0,e.add(h),e.add(new me("#4A5490","#101018",.8));let f=ee(e,1.6,.9,0,.25);f.tint("#C8D0F0");let d=w(.08,.08,.4,"#2a2a2f",0,0,0);e.add(d);let u=new U(new Vn(.6,.03,6,20,2.4),H("#1A1A22"));return e.add(u),(g,y,m)=>{xt(m,[[0,[4.2,1.5,5.6]],[5,[2.8,1.5,3.6]],[10.7,[7,6,16]]],[[0,[1.2,1.2,.2]],[5,[1.6,1.3,.9]],[10.7,[0,2,-2]]],y),f.face(m);let p=Math.sin(y*8)>0&&y>1.5&&y<4.5;return f.pose({armR:[50,p?-40:-30],armL:[10,6],head:y>4.5?-5:0}),f.eye(y<1.4?"happy":y<4.5?"look":y<6?"flat":"sad"),d.position.set(f.root.position.x+.5,1.15,f.root.position.z+.15),d.rotation.x=.3,u.position.set(-.6,1.3,-2),u.visible=!1,{focus:m.position.distanceTo(f.root.position),range:ht(2.5,12,Mt(5,10,y)),blur:12,bloom:.35,bloomT:.9,vig:.55}}})}function Gd(i,t){return bt(i,t,{bg:"#0B0B10",fog:["#0B0B10",.03],fov:30},e=>{let n=qn(.36,.74);n.position.set(0,1.4,0),e.add(n);let s=new ge("#FFFFFF",2,2);return s.position.set(0,1.4,.5),e.add(s),e.add(w(4,.05,3,H("#3A2A22"),0,.95,0)),e.add(new me("#40405A","#101010",.4)),(r,o,a)=>{let l=ht(.23,.01,Mt(.2,3.2,o)),c=Math.round(l*100);return n.paint("b"+c,h=>Ln.bateria(h,l)),s.color.set(l<.2?"#FF6A5A":"#FFFFFF"),s.intensity=o>3.4?0:2,n.scr.visible=o<3.45,xt(a,[[0,[.05,1.42,.95]],[3.6,[.02,1.41,.75]]],[[0,[0,1.4,0]],[3.6,[0,1.4,0]]],o,-.03),{focus:a.position.z,range:1.2,blur:10,bloom:.35,bloomT:.85,vig:.55}}})}function Vd(i,t){return bt(i,t,{bg:"#E8E0C8",fog:["#E8DCC4",.02],fov:34},e=>{on(e,{win:[-1,3,1.2,3.4],wall:"#4E6A3E",side:!1,floor:"#7A6A58"}),Ae(e,-30,80,50,[[0,"#7FB2E0"],[1,"#F7E9C8"]]),Oe(e,-24,60,18,["#A8B4C8","#9AA8BE","#8E9CB4"],!1,7,-3);let n=vn("AVENTURA CAMPING",5.5,.7,"#2E4A2A","#F4E8C8",.4);n.position.set(-.5,3.7,-3.82),e.add(n),[[-3.6,-2.6,"#E9733C"],[3.6,-2.8,"#36AEA2"]].forEach(([l,c,h])=>{let f=new U(new Pi(1.1,1.4,4),H(h,{flatShading:!0}));f.position.set(l,.7,c),f.rotation.y=.78,e.add(f)});for(let l=0;l<3;l++){e.add(w(2.4,.05,.5,"#7A5238",-3.6,.6+l*.6,-3.6));for(let c=0;c<6;c++){let h=new U(new Ht(.06,.06,.3,10),H(["#F2C14E","#C9361F","#4A86C7"][c%3]));h.rotation.z=Math.PI/2,h.position.set(-4.6+c*.4,.7+l*.6,-3.55),e.add(h)}}for(let l=0;l<4;l++){let c=w(.5,.7,.3,H(["#4E6A3E","#C9361F","#2A4E7A","#E9B44C"][l]),2.5+l*.55,.35,-3.5);e.add(c)}e.add(w(1.6,.06,.8,"#8E6242",.6,.9,-1.6));for(let[l,c]of[[-.1,-1.9],[1.3,-1.9],[-.1,-1.3],[1.3,-1.3]])e.add(w(.05,.88,.05,"#5C3C28",l,.44,c));let s=new pt,r=nt(256,192,l=>{l.fillStyle="#1A2A5A",l.fillRect(0,0,256,192),l.strokeStyle="#7A9AD8",l.lineWidth=3;for(let c=0;c<=256;c+=32)l.beginPath(),l.moveTo(c,0),l.lineTo(c,192),l.stroke();for(let c=0;c<=192;c+=32)l.beginPath(),l.moveTo(0,c),l.lineTo(256,c),l.stroke()});s.add(new U(new lt(.7,.5),new tt({map:r,roughness:.2,metalness:.5}))),s.position.set(.9,1.05,-1.5),s.rotation.x=-1.1,e.add(s);let o=qn(.12,.25);o.rotation.x=-Math.PI/2,o.position.set(.25,.945,-1.5),e.add(o),Xe(e,{pos:[3,6,-10],target:[0,0,0]}),bn(e,1,2.2,-2.2,1.6,4.5,-.5,"#FFE2B0",.14);let a=ee(e,.5,-2.3,0,.25);return a.tint("#FFF6EA"),(l,c,h)=>{let f=c>1.4;return o.paint(f?"on":"off",d=>{f?(d.fillStyle="#0E0E14",d.fillRect(0,0,540,1110),d.fillStyle="#fff",d.font="800 44px Inter",d.textAlign="left",d.fillText("Contatos",30,90),["M\xE3e","Bia","Chefe","Tia Cida","Z\xE9"].forEach((u,g)=>{d.fillStyle="#2A2A36",d.beginPath(),d.arc(70,190+g*130,40,0,7),d.fill(),d.fillStyle="#777",d.font="700 38px Inter",d.fillText(u,130,202+g*130),d.fillStyle="#C9361F",d.font="600 26px Inter",d.fillText("indispon\xEDvel",330,202+g*130)})):(d.fillStyle="#000",d.fillRect(0,0,540,1110))}),xt(h,[[0,[1.6,1.8,1.8]],[6.1,[.9,1.7,.4]]],[[0,[.5,1.2,-1.8]],[6.1,[.5,1.3,-2]]],c),a.face(h),a.pose({armL:[10,6],armR:f?[30,-60]:[10,6],head:c>3?5:0}),a.eye(c<1.4?"happy":c<3?"down":"sad"),{focus:h.position.distanceTo(a.root.position),range:2,blur:12,bloom:.25,bloomT:.95,vig:.45}}})}function Wd(i,t){return bt(i,t,{bg:"#141228",fog:["#1A1838",.02],fov:32},e=>{on(e,{wall:"#3A2A4A",side:!1});let n=ee(e,0,-1.6,0,.25);n.tint("#C8C8E8");let s=qn(.36,.74);e.add(s);let r=new ge("#DDE6FF",4,3);return e.add(r),e.add(new me("#4A4A7A","#101010",.6)),(o,a,l)=>{s.paint("g",d=>Ln.galeria(d)),s.rotation.set(-.1,0,0),r.position.set(0,1.4,.4);let c=Mt(2.8,4,a);s.position.set(ht(0,.42,c),ht(1.35,1.12,c),ht(-.2,-1.35,c)),s.scale.setScalar(ht(1,.5,c)),xt(l,[[0,[0,1.36,1.25]],[2.4,[0,1.36,1.1]],[4.2,[.3,1.6,2.6]],[6.4,[.2,1.7,2.2]]],[[0,[0,1.35,-.2]],[2.4,[0,1.35,-.2]],[4.2,[0,1.6,-1.6]],[6.4,[0,1.75,-1.6]]],a),n.face(l);let h=Mt(4.4,4.7,a);n.pose({armL:[ht(20,150,h),ht(-60,150,h)],armR:[20,-60],head:h*10}),n.eye(a<4.4?"down":"shut");let f=a<3;return{focus:f?l.position.distanceTo(s.position):l.position.distanceTo(n.root.position),range:f?1.2:2,blur:12,bloom:.3,bloomT:.9,vig:.55}}})}function Go(i,t={}){let e=new U(new lt(14,60),new tt({map:(()=>{let d=nt(256,256,u=>{u.fillStyle="#E8E4DA",u.fillRect(0,0,256,256),u.fillStyle="#D8D2C4",u.fillRect(0,0,128,128),u.fillRect(128,128,128,128)});return d.wrapS=d.wrapT=pe,d.repeat.set(7,30),d})(),roughness:.2,metalness:.1}));e.rotation.x=-Math.PI/2,e.position.z=-20,e.receiveShadow=!0,i.add(e),i.add(w(14,.2,60,H("#D8D8DC"),0,5.2,-20));let n=Pt(t.seed||3),s=["#E9483A","#F2C14E","#36AEA2","#4A86C7","#F4EFE4","#D2728A","#8EAE56","#E9733C","#7E5FA8"],r=new en(1,1,1),o=[],a=2*16*5*9,l=s.map(d=>H(d,{roughness:.5})),c=s.map(()=>[]);for(let d of[-1,1])for(let u=0;u<16;u++){let g=2-u*2.4;i.add(w(.9,2.6,2.4,H("#F4F4F0"),d*2.6,1.3,g));for(let y=0;y<5;y++){i.add(w(.95,.04,2.36,H("#D8D8DC"),d*2.15,.3+y*.5,g,!1));let m=g-1.1;for(;m<g+1.1;){let p=.12+n()*.14,v=.18+n()*.22,E=Math.floor(n()*s.length);c[E].push([d*2.2,.32+y*.5+v/2,m+p/2,p,v]),m+=p+.02}}}c.forEach((d,u)=>{let g=new Bs(r,l[u],d.length),y=new Fe;d.forEach(([m,p,v,E,_],R)=>{y.position.set(m,p,v),y.scale.set(.32,_,E),y.updateMatrix(),g.setMatrixAt(R,y.matrix)}),g.castShadow=!0,i.add(g)});let h=[];for(let d=0;d<10;d++){let u=new U(new en(.4,.06,3),new tt({emissive:"#FFFFFF",emissiveIntensity:2.4,color:"#fff"}));u.position.set(0,5.05,2-d*4.5),i.add(u),h.push(u)}(t.placas||["ENLATADOS","PADARIA","FRIOS","BEBIDAS"]).forEach((d,u)=>{let g=vn(d,2.2,.5,"#1F5E8A","#FFFFFF",.5,"Inter");g.position.set(0,4.1,-2-u*9),i.add(g),i.add(w(.02,1,.02,"#888",-.9,4.7,-2-u*9,!1)),i.add(w(.02,1,.02,"#888",.9,4.7,-2-u*9,!1))}),i.add(new me("#FFFFFF","#B8B0A0",1.2));let f=new Ze("#FFF4E0",1.4);return f.position.set(2,10,6),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),Object.assign(f.shadow.camera,{left:-10,right:10,top:10,bottom:-10,far:40}),i.add(f),{lights:h,key:f}}function e2(i,t,e,n=1){let s=new pt,r=H("#B8BCC4",{metalness:.7,roughness:.3});s.add(w(.6,.03,.9,r,0,.5,0));for(let a of[-1,1])s.add(w(.03,.45,.9,r,a*.3,.72,0));s.add(w(.6,.45,.03,r,0,.72,.45)),s.add(w(.6,.45,.03,r,0,.72,-.45)),s.add(w(.6,.04,.04,H("#C9361F"),0,1,.55));for(let[a,l]of[[-.25,-.38],[.25,-.38],[-.25,.38],[.25,.38]]){s.add(w(.03,.45,.03,r,a,.25,l));let c=new U(new Ht(.06,.06,.04,12),H("#1A1A22"));c.rotation.z=Math.PI/2,c.position.set(a,.06,l),s.add(c)}let o=Pt(5);for(let a=0;a<18*n;a++)s.add(w(.12+o()*.1,.12+o()*.15,.1+o()*.1,H(["#E9483A","#F2C14E","#36AEA2","#4A86C7","#F4EFE4"][a%5]),(o()-.5)*.45,.62+o()*.3,(o()-.5)*.75));return s.position.set(t,0,e),i.add(s),s}function Xd(i,t){return bt(i,t,{bg:"#E8E8EC",fog:["#E8ECEE",.03],fov:36},e=>{Go(e);let n=ee(e,-.4,-2,0,.25);n.tint("#FFFFFF");let s=e2(e,.5,-1.6,1);s.rotation.y=-.4;let r=de(nt(128,128,o=>{o.fillStyle="#E9B44C",o.beginPath(),o.moveTo(64,10),o.lineTo(118,118),o.lineTo(10,118),o.fill(),o.fillStyle="#C9361F";for(let a=0;a<6;a++)o.beginPath(),o.arc(40+a%3*22,70+Math.floor(a/3)*24,9,0,7),o.fill()}),.3,.3);return e.add(r),(o,a,l)=>{xt(l,[[0,[0,1.8,14]],[4.2,[0,1.7,4.5]],[8.5,[-.6,1.6,2.6]]],[[0,[0,1.6,-10]],[4.2,[-.2,1.4,-2]],[8.5,[-.4,1.5,-2]]],a),n.face(l);let c=a>4.2;return n.pose({armL:[10,6],armR:c?[40+Math.sin(a*10)*6,-95]:[10,6],head:c?Math.sin(a*10)*3:0,bob:c?Math.abs(Math.sin(a*10))*.015:0}),n.eye(a<4.2?"wide":"happy"),r.visible=c,r.position.set(n.root.position.x+.2,1.55,n.root.position.z+.15),Ue(r,l),{focus:l.position.distanceTo(n.root.position),range:ht(14,2.5,Mt(3,5,a)),blur:12,bloom:.3,bloomT:.92,vig:.4}}})}function qd(i,t){return bt(i,t,{bg:"#C8D0D8",fog:["#C8D0D0",.03],fov:34},e=>{let n=Go(e,{seed:8,placas:["FRIOS","A\xC7OUGUE","LATIC\xCDNIOS"]}),s=[];for(let c=0;c<5;c++){let h=new pt,f=H("#E8E8EC");h.add(w(1.6,2.4,.1,f,0,1.2,-.45)),h.add(w(.08,2.4,.9,f,-.78,1.2,0)),h.add(w(.08,2.4,.9,f,.78,1.2,0)),h.add(w(1.6,.3,.9,f,0,2.35,0)),h.add(w(1.6,.25,.9,f,0,.12,0));for(let g of[-.39,.39])h.add(w(.04,2.1,.04,"#B8BCC4",g,1.25,.46));let d=w(1.4,2.1,.05,new tt({color:"#8AA8C0",emissive:"#BFE2FF",emissiveIntensity:.5}),0,1.25,-.4,!1);h.add(d);for(let g=0;g<4;g++)for(let y=0;y<6;y++)h.add(w(.2,.3,.3,H(["#E9483A","#F4EFE4","#F2C14E"][(y+g)%3]),-.55+y*.22,.45+g*.5,-.2));let u=new U(new lt(1.5,2.2),new tt({color:"#CFE8FF",transparent:!0,opacity:.2,roughness:.05,depthWrite:!1}));u.position.set(0,1.25,.46),h.add(u),h.position.set(-1.4,0,-3-c*1.7),h.rotation.y=Math.PI/2,e.add(h),s.push(d)}let r=ee(e,.8,-4.5,0,.25);r.tint("#FFFFFF");let o=Di(e,20,[-.8,.8,-5.5],{col:"#9ACD5A",size:2.6,rise:2.8,spread:2.5,seed:4,life:3}),a=Pt(3),l=[];for(let c=0;c<24;c++){let h=new U(new ae(.02,6,4),H("#111"));e.add(h),l.push({m:h,p:a()*6,r:.3+a()*.8,y:1+a()*1.4,z:-4-a()*3})}return(c,h,f)=>{let d=Mt(.4,1.6,h);s.forEach((y,m)=>y.material.emissiveIntensity=.5*(1-Mt(.3+m*.2,.6+m*.2,h))),n.lights.forEach((y,m)=>y.material.emissiveIntensity=m%2&&h>1?.2:2.4);let u=h>3.6;o(u?h:-99),l.forEach(y=>{y.m.visible=h>3.2,y.m.position.set(-.6+Math.cos(h*4+y.p)*y.r,y.y+Math.sin(h*6+y.p)*.2,y.z+Math.sin(h*3+y.p)*y.r)}),xt(f,[[0,[1.6,1.7,1.5]],[8.5,[1.4,1.6,-1.5]]],[[0,[-.6,1.3,-6]],[8.5,[.6,1.5,-4.6]]],h),r.face(f);let g=h>4.6;return r.pose({armL:g?[30,-150]:[10,6],armR:g?[60,40]:[10,6],head:g?-8:0,lean:g?-4:0}),r.eye(h<4.4?"look":"shut"),{focus:f.position.distanceTo(r.root.position),range:2.5,blur:12,bloom:.3,bloomT:.92,vig:.45,tint:u?"#E8FFD8":"#ffffff",exposure:ht(1,.9,d)}}})}function Yd(i,t){return bt(i,t,{bg:"#E8E0D0",fog:["#E8E0D0",.03],fov:32},e=>{Go(e,{seed:12,placas:["PADARIA"]}),e.add(w(3,.9,1,H("#8E6242"),0,.45,-2.4)),e.add(w(3.1,.06,1.1,H("#A87A52"),0,.93,-2.4));let n=[],s=a=>nt(256,128,l=>{l.fillStyle="#D9A05A",l.beginPath(),l.ellipse(128,70,120,52,0,0,7),l.fill(),l.fillStyle="#B8783A";for(let c=0;c<4;c++)l.beginPath(),l.ellipse(60+c*45,52,14,6,-.5,0,7),l.fill()});for(let a=0;a<7;a++){let l=new U(new Hs(.12,.35,6,12),H("#D9A05A"));l.rotation.z=Math.PI/2,l.position.set(-1.2+a*.4,1.06,-2.4+a%2*.2),l.castShadow=!0,e.add(l);let c=Pt(a+4);for(let h=0;h<6;h++){let f=new U(new ae(.05+c()*.04,8,6),H(["#7AA858","#5E8A44","#A8C878"][h%3]));f.position.set(l.position.x+(c()-.5)*.35,1.13+c()*.04,l.position.z+(c()-.5)*.15),f.scale.setScalar(0),e.add(f),n.push({s:f,d:c()})}}let r=ee(e,1.5,-1.6,0,.25);r.tint("#FFFFFF");let o=new U(new Hs(.1,.3,6,12),H("#9AAA6A"));return e.add(o),(a,l,c)=>{n.forEach(f=>f.s.scale.setScalar(Mt(.3+f.d*1.6,1+f.d*2,l))),xt(c,[[0,[-.2,1.5,.4]],[5,[.9,1.5,1.8]]],[[0,[-.2,1.05,-2.4]],[5,[.9,1.15,-1.9]]],l),r.face(c);let h=l>2.6;return r.pose({armL:[10,6],armR:h?[45,-40]:[10,6],head:h?6:0}),r.eye(l<2.6?"look":"sad"),o.visible=h,o.position.set(r.root.position.x+.45,1.25,r.root.position.z+.15),o.rotation.z=1.2,{focus:l<2.5?1.5:c.position.distanceTo(r.root.position),range:1.4,blur:12,bloom:.25,bloomT:.95,vig:.45}}})}function Zd(i,t){return bt(i,t,{bg:"#E8E8EC",fog:["#E8ECEE",.03],fov:34},e=>{Go(e,{seed:21,placas:["ENLATADOS"]});let n=(l,c,h)=>nt(256,128,f=>{f.fillStyle=c,f.fillRect(0,0,256,128),f.fillStyle=h,f.fillRect(0,40,256,48),f.fillStyle="#fff",f.font="900 34px Inter",f.textAlign="center",f.fillText(l,128,76)}),s=[n("FEIJ\xC3O","#7A3A2A","#C9361F"),n("MILHO","#2E7A3E","#F2C14E"),n("ATUM","#1F5E8A","#E9733C")],r=[],o=0;for(let l=0;l<5;l++)for(let c=0;c<5-l;c++){let h=new U(new Ht(.13,.13,.3,20),[new tt({map:s[o%3],roughness:.4,metalness:.2}),H("#C8CCD4",{metalness:.8}),H("#C8CCD4",{metalness:.8})]);h.castShadow=!0,h.userData={x:-.55+c*.27+l*.135,y:.15+l*.31,k:o},e.add(h),r.push(h),o++}let a=ee(e,.9,-.6,0,.25);return a.tint("#FFFFFF"),(l,c,h)=>(r.forEach(f=>{let d=.2+f.userData.k*.3,u=Mt(d,d+.25,c);f.visible=u>0,f.position.set(ht(a.root.position.x+.3,f.userData.x,u),f.userData.y+Math.sin(u*Math.PI)*.4,ht(-.5,-1.2,u))}),xt(h,[[0,[.2,1.2,3.2]],[7.1,[-.1,1.5,2.3]]],[[0,[0,.8,-1.2]],[7.1,[.3,1,-1]]],c),a.face(h),a.pose({armL:[10,6],armR:[40+Math.sin(c*6)*20,-30],head:Math.sin(c*3)*3}),a.eye(c<4.4?"flat":"look"),{focus:h.position.distanceTo(new P(0,1,-1)),range:2.4,blur:12,bloom:.25,bloomT:.95,vig:.42})})}function $d(i,t){return bt(i,t,{bg:"#2A1A10",fog:["#3A2414",.04],fov:34},e=>{let n=nt(1024,512,d=>{d.fillStyle="#C9A46A",d.fillRect(0,0,1024,512);let u=Pt(4);for(let g=0,y=0;y<512;y+=64,g++)for(let m=g%2*-60;m<1024;m+=120)d.strokeStyle="#8E6A3A",d.lineWidth=3,d.strokeRect(m,y,120,64);d.fillStyle="#5A3A1E";for(let g=0;g<70;g++){let y=40+g%14*70,m=60+Math.floor(g/14)*90,p=g%5;d.save(),d.translate(y,m),p===0?(d.beginPath(),d.ellipse(0,0,14,22,0,0,7),d.stroke(),d.fillRect(-2,22,4,20)):p===1?(d.fillRect(-14,-2,28,4),d.beginPath(),d.arc(0,-10,8,0,7),d.fill()):p===2?(d.beginPath(),d.moveTo(-14,16),d.lineTo(0,-16),d.lineTo(14,16),d.fill()):p===3?(d.beginPath(),d.arc(0,0,12,0,7),d.stroke(),d.beginPath(),d.arc(0,0,3,0,7),d.fill()):(d.beginPath(),d.moveTo(-14,0),d.quadraticCurveTo(0,-20,14,0),d.stroke()),d.restore()}});n.wrapS=n.wrapT=pe,n.repeat.set(2,1);let s=new tt({map:n,roughness:1});e.add(w(16,5,.4,s,0,2.5,-4));for(let d of[-1,1]){let u=w(.4,5,12,s,d*5,2.5,0);e.add(u)}let r=new U(new lt(16,16),H("#8E6A3A"));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,e.add(r),e.add(w(1.2,.9,2.6,H("#D9A84A",{metalness:.5,roughness:.4}),-2.6,.45,-2.4)),e.add(w(1,.2,2.4,H("#2A6A8E",{metalness:.3}),-2.6,.95,-2.4));for(let[d,u]of[[2.6,-3.2],[3.4,-2.8],[-4,-.5]]){let g=new U(new Ht(.22,.3,.8,16),H("#A8603A"));g.position.set(d,.4,u),e.add(g)}e.add(w(.8,1,.8,s,.4,.5,-2.2));let o=new U(new Ht(.2,.24,.38,20),new tt({color:"#D99A2A",emissive:"#E8A030",emissiveIntensity:.5,roughness:.3,transparent:!0,opacity:.92}));o.position.set(.4,1.2,-2.2),e.add(o);let a=new U(new Ht(.21,.21,.06,20),H("#8E6A3A"));a.position.set(.4,1.42,-2.2),e.add(a);let l=Le("#FFC060",1.4,.5);l.position.set(.4,1.25,-2.2),e.add(l);let c=[];for(let d of[-3.6,3.6]){e.add(w(.08,.6,.08,"#3A2414",d,2.4,-3.75));let u=Le("#FFA040",.9,.9);u.position.set(d,2.8,-3.7),e.add(u);let g=new ge("#FFA050",12,10,1.5);g.position.set(d,2.8,-3.4),g.castShadow=!0,e.add(g),c.push([u,g])}e.add(new me("#B08050","#2a1a10",.5));let h=Oo(e,"jaleco",null,null,1.4,-1.5);h.tint("#FFE0B0");let f=bn(e,0,3,-2.5,2,6,-.25,"#FFD08A",.1);return(d,u,g)=>{c.forEach(([m,p],v)=>{let E=.85+Math.sin(u*17+v*2)*.1+Math.sin(u*29+v)*.05;m.scale.setScalar(.9*E),p.intensity=12*E}),xt(g,[[0,[-1.2,1.4,4]],[8.9,[.2,1.45,1.6]]],[[0,[.4,1.3,-2.2]],[8.9,[.8,1.3,-1.9]]],u),h.face(g);let y=Mt(4.5,5.2,u);return h.pose({armL:[10,6],armR:[ht(10,70,y),ht(6,-40,y)]}),h.eye(u<4.5?"look":"wide"),y>0&&(o.position.set(ht(.4,h.root.position.x-.1,y),ht(1.2,1.55,y),ht(-2.2,h.root.position.z+.15,y)),a.position.set(o.position.x,o.position.y+.22,o.position.z),l.position.copy(o.position)),{focus:g.position.distanceTo(o.position),range:2.4,blur:12,bloom:.4,bloomT:.85,vig:.55,tint:"#FFE8C8",sat:.9}}})}function Jd(i,t){return bt(i,t,{bg:"#BFD8EE",fog:["#D8E6E8",.012],fov:34,far:900},e=>{Ae(e,-150,600,260,[[0,"#6FA7D8"],[.6,"#BFD8EE"],[1,"#FCE8C8"]]),Oe(e,-120,500,60,["#A8B4C8","#9AA8BE","#8E9CB4"],!1,4);let n=nt(512,512,u=>{u.fillStyle="#6E9A50",u.fillRect(0,0,512,512);let g=Pt(2);for(let y=0;y<4e3;y++){u.strokeStyle=g()<.5?"#5E8A44":"#8BAF56",u.globalAlpha=.4,u.beginPath();let m=g()*512,p=g()*512;u.moveTo(m,p),u.lineTo(m,p-8),u.stroke()}});n.wrapS=n.wrapT=pe,n.repeat.set(30,30);let s=new U(new lt(200,200),new tt({map:n,roughness:1}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,e.add(s);let r=[],o=nt(64,64,u=>{u.fillStyle="#4E8A36",u.beginPath(),u.ellipse(22,30,14,7,-.6,0,7),u.ellipse(42,30,14,7,.6,0,7),u.fill(),u.fillRect(30,30,4,34)});for(let u=0;u<4;u++){let g=w(6,.2,.7,H("#5A3A22"),0,.1,-2-u*1.1);e.add(g);for(let y=0;y<9;y++){let m=de(o,.3,.3);m.position.set(-2.6+y*.65,.32,-2-u*1.1),e.add(m),r.push(m)}}for(let u=-6;u<=6;u++)e.add(w(.1,1,.1,"#B58A62",u*.9,.5,-6.8));e.add(w(12,.08,.05,"#8E6948",0,.8,-6.78));let a=new U(new Ht(.18,.2,.3,16),H("#36AEA2",{metalness:.3}));a.position.set(2.8,.15,-.6),e.add(a),nn(e,-7,-9,1.8,void 0,1),nn(e,7,-10,2,void 0,2),Xe(e,{ki:3,pos:[-10,14,10],r:20});let l=ee(e,.4,-1.2,0,.25);l.tint("#FFFFFF");let c=w(.04,1.4,.04,"#7A5238",0,0,0);e.add(c);let h=new pt,f=new U(new Ht(.12,.09,.18,14),H("#C76B4A"));f.position.y=.09,h.add(f);let d=new U(new Hs(.05,.16,4,8),H("#8A7A3A"));return d.position.y=.25,d.rotation.z=.9,h.add(d),e.add(h),(u,g,y)=>{r.forEach((p,v)=>{p.scale.setScalar(.6+.4*Math.sin(g+v)),Ue(p,y)});let m=g>4.4;if(xt(y,[[0,[2,1.6,3.5]],[4.4,[1.2,1.5,2.2]],[7.4,[.6,1.5,.9]]],[[0,[0,.8,-2]],[4.4,[.4,1.2,-1.2]],[7.4,[.6,1.3,-1.2]]],g),l.face(y),m)c.visible=!1,h.visible=!0,l.pose({armL:[10,6],armR:[40,-60],head:-4}),l.eye(g<5.6?"sad":"flat"),h.position.set(l.root.position.x+.35,1.05,l.root.position.z+.15);else{let p=Math.sin(g*5);l.pose({armL:[40,-40+p*20],armR:[40,-40+p*20],head:4,lean:p*3}),l.eye("down"),c.visible=!0,c.position.set(l.root.position.x+.55,.8,l.root.position.z+.1),c.rotation.z=-.35+p*.15,h.visible=!1}return{focus:y.position.distanceTo(l.root.position),range:2.4,blur:12,bloom:.2,bloomT:1,vig:.38}}})}function Kd(i,t){return bt(i,t,{bg:"#F2D9B0",fog:["#EAD8C0",.012],fov:34},e=>{an(e,{seed:31,cars:!1,skyStops:[[0,"#7FA8D8"],[.6,"#F2D0A8"],[1,"#FFE0B8"]]});let n=Pt(4),s=[],r=["#C98A4A","#F4EFE4","#3A2A22","#D9B07A","#8E6A4A","#E8C890","#5A5A62"];for(let o=0;o<26;o++){let a=.7+n()*.6,l=Li(e,"cao",(n()-.5)*7,-2-n()*26,a,r[o%r.length]);s.push({d:l,x:l.position.x,z:l.position.z,sp:.6+n()*.8,p:n()*6,w:a})}return(o,a,l)=>{for(let c of s){let h=c.z+a*c.sp;c.d.position.set(c.x+Math.sin(a+c.p)*.3,c.w*.375+Math.abs(Math.sin(a*8+c.p))*.05,h),c.d.blob.position.set(c.d.position.x,.015,h),Ue(c.d,l)}return xt(l,[[0,[0,.8,6]],[7.8,[.4,1.3,3]]],[[0,[0,.6,-10]],[7.8,[0,.8,-10]]],a),{focus:7,range:6,blur:10,bloom:.25,bloomT:.95,vig:.4}}})}function Qd(i,t){return bt(i,t,{bg:"#2A2030",fog:["#2A2030",.02],fov:34},e=>{on(e,{wall:"#C9A46A",side:!1});let n=new pt;n.add(w(1.1,2.2,.08,H("#6B3E26"),0,1.1,0));for(let[h,f]of[[.6,.8],[1.6,.8]])n.add(w(.8,f*.8,.02,H("#7A4A2E"),0,h,.05,!1));let s=new pt;s.add(w(.2,.04,.04,H("#D9B46A",{metalness:.8}),.08,0,0)),s.position.set(.38,1,.1),n.add(s),n.position.set(-2.2,0,-3.8),e.add(n),e.add(w(1.3,.1,.12,"#5A3A22",-2.2,2.25,-3.82));let r=Li(e,"cao",-2,-3.3,1,"#D9B07A"),o=new pt,a=H("#7E5FA8");o.add(w(2.6,.46,1,a,0,.3,0)),o.add(w(2.6,.9,.3,a,0,.78,-.4));for(let h of[-1.4,1.4])o.add(w(.3,.7,1.05,H("#8E6FB8"),h,.42,0));o.position.set(2,0,-3.2),e.add(o);let l=Li(e,"gato",2.2,-3,.7,"#E9A04A");l.position.y=.78,l.blob.visible=!1,es(e,0,2.4,-3.8,.8,.6,(h,f,d)=>{h.fillStyle="#36AEA2",h.fillRect(0,0,f,d),h.fillStyle="#F2C14E",h.beginPath(),h.arc(128,96,40,0,7),h.fill()}),Xn(e,.2,-3.4,.9),e.add(new me("#FFE8C8","#3a2a20",.9));let c=new ge("#FFD5A0",12,10,1.5);return c.position.set(0,3.4,-1),c.castShadow=!0,e.add(c),(h,f,d)=>{let u=Math.max(0,Math.sin(f*5));return r.position.y=.375+u*.55,r.rotation.z=u*.3,Ue(r,d),s.rotation.z=-u*.5,l.position.y=.78+Math.sin(f*1.5)*.01,Ue(l,d),xt(d,[[0,[-1.6,1.3,1.6]],[2.6,[-1.4,1.3,1.2]],[4.4,[1.6,1.2,1]],[6.9,[2,1.1,.4]]],[[0,[-2.1,1,-3.6]],[2.6,[-2.1,1,-3.6]],[4.4,[2.1,.9,-3]],[6.9,[2.2,.85,-3]]],f),{focus:d.position.distanceTo(f<3.5?r.position:l.position),range:1.6,blur:12,bloom:.25,bloomT:.95,vig:.45}}})}function jd(i,t){return bt(i,t,{bg:"#BFD8EE",fog:["#D8E6E0",.012],fov:34},e=>{an(e,{seed:41,overgrown:.35});let n=Pt(9),s=[];[["cervo",-1.2,-6,1.6,"#B8784A"],["cervo",1.4,-9,1.5,"#A8683A"],["javali",-.2,-4,1,"#5A4A3A"],["javali",1.8,-5,.9,"#6A5442"],["cervo",-2.4,-14,1.5,"#B8784A"]].forEach(([a,l,c,h,f],d)=>{let u=Li(e,a,l,c,h,f);s.push({b:u,x:l,z:c,w:h,p:d})});let r=[],o=nt(64,32,a=>{a.fillStyle="#3A3A44",a.beginPath(),a.moveTo(0,16),a.quadraticCurveTo(16,0,32,14),a.quadraticCurveTo(48,0,64,16),a.quadraticCurveTo(32,10,0,16),a.fill()});for(let a=0;a<14;a++){let l=de(o,.4,.2);e.add(l),r.push({m:l,p:n()*6,x:(n()-.5)*10,y:4+n()*4,z:-8-n()*10})}return(a,l,c)=>{for(let h of s){let f=h.z+l*.35;h.b.position.set(h.x,h.w*.375+Math.abs(Math.sin(l*4+h.p))*.03,f),h.b.blob.position.set(h.x,.015,f),Ue(h.b,c)}for(let h of r)h.m.position.set(h.x-l*1.5,h.y+Math.sin(l*2+h.p)*.3,h.z),h.m.scale.y=.6+Math.abs(Math.sin(l*10+h.p))*.6,Ue(h.m,c);return xt(c,[[0,[-3,1.1,4]],[7.1,[-1,1.4,1.5]]],[[0,[0,1,-8]],[7.1,[0,1.1,-8]]],l),{focus:8,range:6,blur:10,bloom:.2,bloomT:1,vig:.4}}})}function tf(i,t){return bt(i,t,{bg:"#A8B0A8",fog:["#B8C0B4",.018],fov:34,far:900},e=>{Ae(e,-200,900,400,[[0,"#7A8A98"],[.6,"#B8C0B8"],[1,"#D8D8C8"]]);let n=nt(512,512,c=>{c.fillStyle="#5E7044",c.fillRect(0,0,512,512);let h=Pt(2);for(let f=0;f<4e3;f++){c.strokeStyle=h()<.5?"#4E6034":"#7E8A54",c.globalAlpha=.4,c.beginPath();let d=h()*512,u=h()*512;c.moveTo(d,u),c.lineTo(d,u-10),c.stroke()}});n.wrapS=n.wrapT=pe,n.repeat.set(30,30);let s=new U(new lt(300,300),new tt({map:n,roughness:1}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,e.add(s);for(let[c,h,f]of[[-16,-30,.3],[10,-36,-.2],[30,-26,-.5]]){let d=Ho(e,{cols:6,rows:7,col:"#8A8A8E",seed:3,lit:0});d.g.position.set(c,0,h),d.g.rotation.y=f}let r=new pt,o=new U(new Vn(8,.15,8,64),H("#E9C84A",{metalness:.3}));r.add(o);for(let c=0;c<16;c++){let h=c/16*6.283,f=w(.1,8,.1,H("#C9A83A"),Math.cos(h)*4,Math.sin(h)*4,0,!1);f.rotation.z=h+Math.PI/2,r.add(f);let d=w(.9,1,.9,H("#E9C84A"),Math.cos(h)*8,Math.sin(h)*8-.8,0);r.add(d)}r.position.set(-4,10,-24),e.add(r);for(let c of[-1,1]){let h=w(.3,11,.3,"#B89A3A",-4+c*2.5,5,-24);h.rotation.z=c*.22,e.add(h)}for(let c=0;c<18;c++)nn(e,(c%2?1:-1)*(6+c*13%20),-6-c*3,1.4+c%3*.4,["#3E5A2E","#4E6A36","#6E7A44","#A8A85A"],c);Xe(e,{ki:2,key:"#E8E8D8",pos:[-20,30,20],r:50,hemi:1});let a=Pt(5),l=[];for(let c=0;c<9;c++){let h=1.1+a()*.3,f=Li(e,"lobo",-3+(a()-.5)*5,-4-c*1.4,h,["#8A8A90","#6E6E76","#A8A8AE"][c%3]);l.push({l:f,x:f.position.x,z:f.position.z,p:a()*6,w:h})}return(c,h,f)=>{r.rotation.z=h*.02;for(let d of l){let u=d.x+h*1.4;d.l.position.set(u,d.w*.375+Math.abs(Math.sin(h*9+d.p))*.08,d.z),d.l.blob.position.set(u,.015,d.z),d.l.scale.x=-1,Ue(d.l,f)}return xt(f,[[0,[-10,2.2,10]],[11.3,[6,1.6,6]]],[[0,[-4,4,-20]],[11.3,[8,1.2,-8]]],h),{focus:f.position.distanceTo(l[3].l.position),range:8,blur:10,bloom:.2,bloomT:1,vig:.45,sat:.8,tint:"#F0F4E8"}}})}function ef(i,t){return bt(i,t,{bg:"#0E1030",fog:["#141838",.02],fov:34},e=>{an(e,{seed:51,night:!0,overgrown:.5,lampsOn:!1,cars:!1}),Tn(e,2e3,300,6);let n=new Ze("#A8B8FF",1.4);n.position.set(-10,20,10),e.add(n);let s=ee(e,0,-3,0,.35);s.tint("#C8D0F0");for(let a of[-.12,.12]){let l=w(.12,.025,.26,H("#36AEA2"),a,.012,-2.95);e.add(l)}let r=[],o=Pt(8);for(let a=0;a<16;a++){let l=o()*Math.PI-Math.PI,c=4+o()*6,h=Le("#F2D25A",.4,1),f=Le("#F2D25A",.4,1),u=(a%2?1:-1)*(1.6+o()*3.5),g=-4-o()*6,y=.6+o()*.4;h.position.set(u-.1,y,g),f.position.set(u+.1,y,g),e.add(h,f),r.push({e1:h,e2:f,p:o()*6})}return(a,l,c)=>(r.forEach(h=>{let f=Mt(.5+h.p*.3,.8+h.p*.3,l)*(Math.sin(l*2+h.p*3)>.97?0:1);h.e1.material.opacity=f,h.e2.material.opacity=f}),xt(c,[[0,[0,1.6,2.4]],[3.4,[0,1.3,.2]],[7.1,[0,.45,-1.6]]],[[0,[0,1.3,-3]],[3.4,[0,1.4,-3]],[7.1,[0,.1,-3]]],l),s.face(c),s.pose({armL:[15,-40],armR:[15,-40],head:Math.sin(l*6)*4,bob:Math.sin(l*30)*.004}),s.eye(l<3?"look":l<5?"lookl":"wide"),{focus:c.position.distanceTo(new P(0,l<5.5?1.4:.1,-3)),range:2.2,blur:12,bloom:.5,bloomT:.8,vig:.6})})}var yc=()=>nt(256,256,i=>{i.fillStyle="#F2C14E",i.beginPath(),i.moveTo(128,10),i.lineTo(246,236),i.lineTo(10,236),i.closePath(),i.fill(),i.strokeStyle="#1A1A22",i.lineWidth=12,i.stroke(),i.fillStyle="#1A1A22",i.beginPath(),i.arc(128,160,14,0,7),i.fill();for(let t=0;t<3;t++)i.beginPath(),i.moveTo(128,160),i.arc(128,160,58,-Math.PI/2+t*2.094-.5,-Math.PI/2+t*2.094+.5),i.fill()});function nf(i,t){return bt(i,t,{bg:"#C8B8C0",fog:["#D8C8C0",.003],fov:36,far:900},e=>{Ae(e,-250,1e3,400,[[0,"#5A6A9A"],[.5,"#B8A8C0"],[.85,"#F2C8A8"],[1,"#FFE8C8"]]);let n=new U(new lt(400,400),H("#8A9A6A"));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n);let s=[];[[-18,-40],[6,-46]].forEach(([a,l],c)=>{let h=zo(10,26,"#D8D2C8");h.position.set(a,0,l),e.add(h),s.push(Di(e,18,[a,26,l],{col:"#F4F2EE",size:18,rise:30,spread:6,seed:3+c,life:5}))});let r=new U(new ae(7,40,20,0,6.3,0,1.57),H("#E8E4DC"));r.position.set(24,8,-30),e.add(r),e.add(new U(new Ht(7,7,8,40),H("#D8D2C8"))).position.set(24,4,-30),e.add(w(20,7,10,H("#B8B0A8"),26,3.5,-12));for(let a=0;a<10;a++){let l=new U(new lt(1,.8),new tt({color:"#000",emissive:"#FFD79A",emissiveIntensity:.6}));l.position.set(17.5+a*1.8,4.5,-6.98),e.add(l)}for(let a=-24;a<24;a++)e.add(w(.06,2.2,.06,"#666",a*1.4,1.1,2,!1));for(let a of[.6,1.4,2.1])e.add(w(68,.04,.04,"#777",0,a,2,!1));let o=de(yc(),1.4,1.4);return o.position.set(-4,2.6,2.1),e.add(o),e.add(w(.1,2,.1,"#555",-4,1,2.05)),Xe(e,{ki:2.6,key:"#FFE0C0",pos:[-40,30,40],r:70,hemi:1}),(a,l,c)=>(s.forEach(h=>h(l)),xt(c,[[0,[-14,3,22]],[6,[-4,3.5,14]]],[[0,[-6,10,-40]],[6,[4,9,-35]]],l),{focus:40,range:40,blur:5,bloom:.25,bloomT:.95,vig:.4})})}function sf(i,t){return bt(i,t,{bg:"#0A1428",fog:["#0E1A30",.025],fov:34},e=>{let n=new U(new lt(30,30),H("#3A4048",{roughness:.4,metalness:.3}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n),e.add(w(30,9,.3,H("#2A3240"),0,4.5,-9)),e.add(w(.3,9,20,H("#2A3240"),-9,4.5,0));let s=nt(512,512,v=>{let E=v.createRadialGradient(256,256,20,256,256,300);E.addColorStop(0,"#8FE8FF"),E.addColorStop(1,"#1A6AC8"),v.fillStyle=E,v.fillRect(0,0,512,512),v.strokeStyle="#0A3A7A",v.lineWidth=6;for(let _=0;_<8;_++)for(let R=0;R<8;R++)v.strokeRect(40+_*54,40+R*54,44,44)}),r=new U(new lt(9,7),new tt({map:s,emissiveMap:s,emissive:"#fff",emissiveIntensity:1.1,roughness:.1}));r.rotation.x=-Math.PI/2,r.position.set(0,.02,-3.5),e.add(r);let o=new ge("#5AC8FF",30,14,1.4);o.position.set(0,2,-3.5),e.add(o),e.add(w(9.6,.3,.3,H("#E8C84A"),0,.15,.1)),e.add(w(9.6,.3,.3,H("#E8C84A"),0,.15,-7.1)),e.add(w(11,.5,.5,H("#E9733C"),0,7,-3.5)),e.add(w(1.2,.8,1.2,H("#E9733C"),1,6.4,-3.5)),e.add(w(.05,4,.05,"#222",1,4.2,-3.5));let a=new U(new Ht(.25,.25,8,16),H("#7A8088",{metalness:.6}));a.rotation.z=Math.PI/2,a.position.set(5,.6,1.2),e.add(a),e.add(w(1.2,1.2,1.2,H("#4A86C7",{metalness:.4}),8.5,.6,1.2));let l=new pt;l.add(w(3,1.8,1.6,H("#C9C2B6"),0,.9,0)),l.add(w(3.1,.2,1.7,H("#E9B44C"),0,1.9,0));let c=document.createElement("canvas");c.width=256,c.height=256;let h=c.getContext("2d"),f=new De(c);f.colorSpace=ne;let d=new U(new Sn(.35,32),new ce({map:f}));d.position.set(-.6,1.1,.81),l.add(d);let u=vn("DIESEL",1,.3,"#1A1A22","#F2C14E",.4,"Inter");u.position.set(.6,1.1,.81),l.add(u),l.position.set(-5.5,0,.5),l.rotation.y=.4,e.add(l);let g=v=>{h.fillStyle="#F4F0E4",h.beginPath(),h.arc(128,128,126,0,7),h.fill(),h.strokeStyle="#C9361F",h.lineWidth=16,h.beginPath(),h.arc(128,140,92,Math.PI*1.1,Math.PI*1.3),h.stroke(),h.fillStyle="#1A1A22",h.font="900 30px Inter",h.textAlign="center",h.fillText("E",50,170),h.fillText("F",206,170);let E=Math.PI*(1.1+.8*v);h.strokeStyle="#1A1A22",h.lineWidth=8,h.beginPath(),h.moveTo(128,140),h.lineTo(128+Math.cos(E)*85,140+Math.sin(E)*85),h.stroke(),f.needsUpdate=!0},y=[];for(let v of[-6,6]){let E=new U(new ae(.25,16,10),new tt({color:"#600",emissive:"#FF2A12",emissiveIntensity:0}));E.position.set(v,6,-8.8),e.add(E);let _=new ge("#FF3A20",0,16);_.position.set(v,5.8,-8),e.add(_),y.push([E,_])}let m=de(yc(),1.2,1.2);m.position.set(4,3,-8.8),e.add(m),e.add(new me("#6A8AC8","#101418",.7));let p=-1;return(v,E,_)=>{let R=Math.round(ht(.9,0,Mt(5.5,10.5,E))*40)/40;R!==p&&(g(R),p=R);let x=E>9.5;return y.forEach(([C,D],b)=>{let M=x&&Math.sin(E*8+b*3)>0;C.material.emissiveIntensity=M?5:0,D.intensity=M?60:0}),r.material.emissiveIntensity=1.1+Math.sin(E*2)*.1,xt(_,[[0,[3,5,9]],[5.2,[-1,3,6]],[11.6,[-3.5,1.6,3.6]]],[[0,[0,0,-3.5]],[5.2,[-3,1,-1]],[11.6,[-5.3,1.1,.9]]],E),{focus:E<5?11:_.position.distanceTo(new P(-5.3,1.1,.9)),range:4,blur:10,bloom:.5,bloomT:.78,vig:.55,tint:x?"#FFD8D0":"#ffffff"}}})}function rf(i,t){return bt(i,t,{bg:"#14141E",fog:["#1A1A26",.02],fov:34},e=>{on(e,{wall:"#2A3A4A",side:!1,floor:"#3A3030"});let n=document.createElement("canvas");n.width=1600,n.height=800;let s=n.getContext("2d"),r=new De(n);r.colorSpace=ne;let o=[[330,250],[370,270],[300,300],[800,230],[830,250],[780,270],[870,210],[1290,290],[1330,300],[1250,330],[1400,260],[520,600],[900,560],[1100,330],[1480,520]],a=u=>{s.fillStyle="#E8DCC0",s.fillRect(0,0,1600,800),s.fillStyle="#B8D0C8",s.fillRect(0,0,1600,800),s.fillStyle="#D9C89A",[[220,150,360,260],[440,430,160,300],[700,160,260,160],[740,330,200,300],[1e3,140,520,280],[1380,520,180,120]].forEach(([y,m,p,v])=>{s.beginPath(),s.ellipse(y+p/2,m+v/2,p/2,v/2,0,0,7),s.fill()}),s.strokeStyle="#8A7A5A",s.lineWidth=2;for(let y=0;y<1600;y+=100)s.beginPath(),s.moveTo(y,0),s.lineTo(y,800),s.stroke();for(let y=0;y<800;y+=100)s.beginPath(),s.moveTo(0,y),s.lineTo(1600,y),s.stroke();let g=Math.floor(u*o.length);for(let y=0;y<g;y++){let[m,p]=o[y],v=s.createRadialGradient(m,p,0,m,p,60);v.addColorStop(0,"#E9483Acc"),v.addColorStop(1,"#E9483A00"),s.fillStyle=v,s.beginPath(),s.arc(m,p,60,0,7),s.fill(),s.strokeStyle="#C9201A",s.lineWidth=5,s.beginPath(),s.arc(m,p,30,0,7),s.stroke(),s.beginPath(),s.moveTo(m-20,p-20),s.lineTo(m+20,p+20),s.stroke()}r.needsUpdate=!0},l=new U(new lt(6,3),new tt({map:r,roughness:.8}));l.position.set(0,2.4,-3.78),e.add(l),e.add(w(6.2,3.2,.05,"#5A3A22",0,2.4,-3.82));let c=de(yc(),.9,.9);c.position.set(3.8,2.6,-3.75),e.add(c);let h=new Wn("#FFE8C8",60,12,.6,.5,1.4);h.position.set(0,4.5,1),h.target.position.set(0,2.2,-3.8),h.castShadow=!0,e.add(h,h.target),e.add(new me("#6A6A9A","#202020",.6));let f=ee(e,2.7,-2.6,0,.25);f.tint("#FFFFFF");let d=-1;return(u,g,y)=>{let m=Math.round(Mt(.4,4.5,g)*15)/15;m!==d&&(a(m),d=m),xt(y,[[0,[0,2.4,2.4]],[5,[.6,2.2,3.4]],[9.3,[1.8,1.7,1.6]]],[[0,[0,2.4,-3.8]],[5,[.6,2.2,-3.8]],[9.3,[2.6,1.6,-2.8]]],g),f.face(y);let p=g>5.6;return f.pose({armL:p?[80,0]:[10,6],armR:[10,6],head:p?-5:0}),f.eye(g<5.6?"look":g<7.2?"smug":"wide"),{focus:y.position.distanceTo(g<5?l.position:f.root.position),range:2.5,blur:12,bloom:.3,bloomT:.9,vig:.5}}})}function i2(){let i=new pt,t=H("#D8D8DC",{metalness:.4,roughness:.4}),e=H("#C9A04A",{metalness:.8,roughness:.3});i.add(w(14,.25,.25,t,0,0,0));for(let r=-6;r<=6;r+=1)i.add(w(.05,.4,.4,t,r,0,0,!1));let n=nt(256,512,r=>{r.fillStyle="#1A2A5A",r.fillRect(0,0,256,512),r.strokeStyle="#C9A04A",r.lineWidth=3;for(let o=0;o<=256;o+=32)r.beginPath(),r.moveTo(o,0),r.lineTo(o,512),r.stroke();for(let o=0;o<=512;o+=32)r.beginPath(),r.moveTo(0,o),r.lineTo(256,o),r.stroke()});for(let r of[-6,-4.6,4.6,6])for(let o of[-1,1]){let a=new U(new lt(1.1,4.2),new tt({map:n,metalness:.5,roughness:.3,side:te}));a.rotation.x=-Math.PI/2,a.position.set(r,0,o*2.4),i.add(a)}for(let[r,o,a]of[[0,0,4],[0,-2.4,2],[1.2,0,1.5]]){let l=new U(new Ht(.45,.45,a,18),t);l.rotation.x=Math.PI/2,l.position.set(r,-.6,o),i.add(l)}let s=new U(new lt(2.4,1),H("#F4F4F0",{side:te}));return s.position.set(-2,-.6,1.5),i.add(s),i.add(w(.5,.5,.5,e,0,-.6,2.3)),i}function of(i,t){return bt(i,t,{bg:"#02030A",fov:34,far:2400},e=>{Tn(e,5e3,900,21),Ii(e,-200,60,-600,900,"#5FD8FF",5,.06);let n=new Ze("#FFF4E0",4);n.position.set(30,20,20),e.add(n),e.add(new li("#2A3550",.5));let s=vr(e,60);s.position.set(0,-68,-30);let r=i2();e.add(r);let o=Le("#FFFFFF",1,0);return e.add(o),(a,l,c)=>{s.rotation.y=1+l*.02,r.position.set(0,ht(0,-.6,l/8.3),0),r.rotation.set(.2,l*.03,.05);let h=l>4.6&&l<5.4?Math.sin((l-4.6)/.8*Math.PI):0;return o.material.opacity=h*.8,o.position.set(0,-.6,3.4+h*.5),o.scale.setScalar(.5+h*1.5),xt(c,[[0,[10,4,14]],[8.3,[3,2,10]]],[[0,[0,-.4,0]],[8.3,[0,-1.2,0]]],l),{focus:c.position.length(),range:12,blur:4,bloom:.5,bloomT:.8,vig:.5}}})}function af(i,t){return bt(i,t,{bg:"#0A0C24",fog:["#141838",.002],fov:36,far:900},e=>{Tn(e,3e3,300,9),Ae(e,-200,800,300,[[0,"#0A0C24"],[.6,"#24205A"],[.9,"#5A3A6A"],[1,"#8A5A6A"]]);let n=new U(new lt(300,300),H("#2A3A2A"));n.rotation.x=-Math.PI/2,e.add(n);let s=new U(new ae(30,40,20,0,6.3,0,.5),H("#3A4A30"));s.position.set(0,-26.5,-8),s.receiveShadow=!0,e.add(s),Oe(e,-120,500,40,["#141228","#18142E","#1C1834"],!0,4),nn(e,-6,-12,2,["#1A2A1A","#22321E","#2A3A24","#4A5A34"],1),nn(e,7,-14,2.4,["#1A2A1A","#22321E","#2A3A24","#4A5A34"],2);let r=new Ze("#A8B8FF",1);r.position.set(-10,20,10),e.add(r),e.add(new me("#4A4A8A","#101010",.5));let o=[];for(let l=0;l<5;l++){let c=_d(30+l,2.6-l*.35,[-1,-.35,0],12);e.add(c),o.push(c)}let a=de(Sd(),1.1,1.43);return a.position.set(.3,1.5,-6.5),e.add(a),(l,c,h)=>{let f=Mt(.5,9,c);return o.forEach((d,u)=>{d.flick(c+u);let g=u*.6*Mt(2.5,9,c);d.position.set(ht(80,-60,f)+g*3,ht(55,18,f)-g,-150-u*3)}),xt(h,[[0,[0,1.9,-3]],[9.4,[.6,1.6,-4.4]]],[[0,[0,6,-40]],[9.4,[-5,8,-40]]],c),{focus:3.4,range:60,blur:6,bloom:.6,bloomT:.75,vig:.55}}})}function lf(i,t){return bt(i,t,{bg:"#F2D9B0",fog:["#EAD8C0",.012],fov:34},e=>{an(e,{seed:61,overgrown:.2,skyStops:[[0,"#8AA8D8"],[.6,"#F2C8A0"],[1,"#FFD8A8"]]});let n=ee(e,0,-4,0,.25);n.tint("#FFF0E0");let s=new U(new Ht(.16,.16,.45,16),new tt({color:"#8FC8F0",transparent:!0,opacity:.8}));e.add(s);let r=w(.5,.4,.4,H("#B8864A"),0,0,0);e.add(r);let o=[];for(let a=0;a<8;a++){let l=w(.5,.4,.4,H(a%2?"#B8864A":"#A8764A"),2.4+a%3*.52,.2+Math.floor(a/3)*.41,-5);e.add(l),o.push(l)}for(let a=0;a<4;a++){let l=new U(new Ht(.16,.16,.45,16),new tt({color:"#8FC8F0",transparent:!0,opacity:.8}));l.position.set(-2.4+a*.36,.23,-5),e.add(l)}return(a,l,c)=>{let h=-9+l*1.1;return n.root.position.set(Math.sin(l*.7)*.4,0,h),n.walk(l,1.4,1.1),n.face(c),n.pose({armL:[30,-80],armR:[30,-80],legL:[Math.sin(l*9)*15,Math.max(0,-Math.sin(l*9))*26],legR:[-Math.sin(l*9)*15,Math.max(0,Math.sin(l*9))*26],bob:Math.abs(Math.cos(l*9))*.03}),n.eye(l<5?"down":"flat"),r.position.set(n.root.position.x,1.05,h+.2),s.position.set(n.root.position.x-.42,.62,h+.1),xt(c,[[0,[1.5,1.4,-1]],[9.1,[1,1.5,3.5]]],[[0,[0,1.2,-9]],[9.1,[0,1.2,-1]]],l),{focus:c.position.distanceTo(n.root.position),range:3,blur:12,bloom:.25,bloomT:.95,vig:.42}}})}function cf(i,t){return bt(i,t,{bg:"#2A2030",fog:["#2A2030",.02],fov:34},e=>{on(e,{win:[-2.6,-.4,1.2,3.2],wall:"#5A4A3A",side:!1}),Ae(e,-30,80,50,[[0,"#2A2252"],[1,"#C46A5E"]]),Oe(e,-24,60,18,["#2F2748","#3B2F54","#4A3A5E"],!0,7,-3);let n=nt(512,256,c=>{c.fillStyle="#F4F0E0",c.fillRect(0,0,512,256),c.strokeStyle="#2A6AA8",c.lineWidth=14,c.beginPath(),c.moveTo(0,90),c.quadraticCurveTo(256,30,512,90),c.stroke(),c.strokeStyle="#E9B44C",c.beginPath(),c.moveTo(0,170),c.quadraticCurveTo(256,230,512,170),c.stroke(),c.fillStyle="#9A3A2A",c.save(),c.translate(256,128),c.beginPath(),c.ellipse(0,10,34,40,0,0,7),c.fill();for(let h=0;h<5;h++)c.save(),c.rotate(-.7+h*.35),c.beginPath(),c.ellipse(0,-50,9,26,0,0,7),c.fill(),c.restore();c.restore(),c.fillStyle="#1A1A22",c.beginPath(),c.arc(236,120,6,0,7),c.arc(276,120,6,0,7),c.fill()}),s=new U(new ae(.3,32,20),new tt({map:n,roughness:.6}));s.castShadow=!0,e.add(s);let r=vn("JORGE",.8,.24,"#F4F0E0","#C9361F",0,"Caveat");e.add(r),e.add(w(1.4,.4,.9,H("#8E6242"),.3,.2,-2.6)),Xn(e,2.4,-3.3,.9);let o=Le("#FFC67A",.5,.8);o.position.set(.6,.55,-2.6),e.add(o);let a=new ge("#FFB060",10,6,1.5);a.position.set(1.2,1.8,.2),a.intensity=4,a.castShadow=!0,e.add(a),e.add(new me("#8A7AA8","#2a1a14",.6));let l=ee(e,-1,-1.6,0,.25);return l.tint("#FFE8D0"),(c,h,f)=>{let d=h>5,u=d?Math.abs(Math.sin(h*7))*.25:0;if(s.position.set(.5,.3+u,-1.5),s.rotation.y=1.57+(d?Math.sin(h*7)*.3:0),r.visible=h>3.1,r.position.set(.5,.78+u,-1.5),Ue(r,f),xt(f,[[0,[-.2,1.2,2.6]],[6.8,[-.3,1.1,1.4]]],[[0,[-.3,.8,-1.6]],[6.8,[-.3,.8,-1.6]]],h),l.face(f),!d)l.pose({armL:[10,6],armR:[30+Math.sin(h*5)*15,-40],head:Math.sin(h*3)*4}),l.eye(h<3.1?"happy":"smug");else{let g=Math.sin(h*9);l.pose({armL:[70+g*30,30],armR:[70-g*30,30],head:g*5,lean:g*3}),l.eye("angry")}return{focus:f.position.distanceTo(l.root.position),range:2.4,blur:12,bloom:.35,bloomT:.88,vig:.5}}})}function s2(i){let t=new U(new lt(14,40),H("#D8D2C4",{roughness:.3}));t.rotation.x=-Math.PI/2,t.position.z=-12,t.receiveShadow=!0,i.add(t);let e=Pt(7);for(let s of[-1,1])for(let r=0;r<10;r++){let o=2-r*2.4;i.add(w(.9,2.4,2.4,H("#F4F4F0"),s*2.4,1.2,o));for(let a=0;a<4;a++)for(let l=0;l<8;l++){let c=.2+e()*.2;i.add(w(.3,c,.24,["#E9483A","#F2C14E","#36AEA2","#4A86C7","#F4EFE4"][(l+a+r)%5],s*1.95,.3+a*.5+c/2,o-1+l*.28))}}i.add(new me("#FFFFFF","#B8B0A0",1.2));let n=new Ze("#FFF4E0",1.2);n.position.set(2,10,6),i.add(n)}function hf(i,t){return bt(i,t,{bg:"#E8E8EC",fog:["#E8ECEE",.035],fov:34},e=>{s2(e);let n=ee(e,0,-3,0,.25);n.tint("#FFFFFF");let s=o=>de(nt(320,200,a=>{a.fillStyle="#FBF7EC",a.beginPath(),a.roundRect(10,10,300,140,40),a.fill(),a.beginPath(),a.moveTo(110,148),a.lineTo(120,196),a.lineTo(160,148),a.fill(),a.fillStyle="#20202A",a.font="900 64px Fraunces",a.textAlign="center",a.textBaseline="middle",a.fillText(o,160,84)}),.9,.56),r=[s("..."),s("n\xE9?"),s("pois \xE9")];return r.forEach(o=>e.add(o)),(o,a,l)=>(xt(l,[[0,[.8,1.5,2]],[4.2,[.4,1.5,1]]],[[0,[0,1.5,-3]],[4.2,[0,1.6,-3]]],a),n.face(l),n.pose({armL:[20+Math.sin(a*4)*20,-20],armR:[30+Math.cos(a*4)*20,-30],head:Math.sin(a*3)*5}),n.eye(Math.floor(a*2)%2?"look":"lookl"),r.forEach((c,h)=>{let f=.2+h*1.2,d=Mt(f,f+.15,a)*(1-Mt(f+1.1,f+1.3,a));c.visible=d>.02,c.scale.setScalar(d),c.position.set(-.6+h*.6,2.4,-3),Ue(c,l)}),{focus:l.position.distanceTo(n.root.position),range:2.4,blur:12,bloom:.25,bloomT:.95,vig:.42})})}function df(i,t){return bt(i,t,{bg:"#0E0C18",fog:["#120E1C",.03],fov:32},e=>{on(e,{wall:"#3A2A4A",side:!1}),e.add(w(1.6,.06,1,H("#8E6242"),0,.9,-1.6));for(let[h,f]of[[-.7,-2],[.7,-2],[-.7,-1.2],[.7,-1.2]])e.add(w(.05,.88,.05,"#5C3C28",h,.44,f));let n=new pt,s=new U(new Ht(.3,.3,.22,28),H("#F4D0D8"));s.position.y=.11,n.add(s);let r=new U(new Ht(.31,.31,.04,28),H("#D2728A"));r.position.y=.23,n.add(r);for(let h=0;h<10;h++){let f=h/10*6.283,d=new U(new ae(.03,8,6),H(["#F2C14E","#36AEA2","#E9483A"][h%3]));d.position.set(Math.cos(f)*.24,.26,Math.sin(f)*.24),n.add(d)}n.add(w(.02,.14,.02,"#4A86C7",0,.33,0,!1)),n.position.set(0,.93,-1.6),e.add(n);let o=Le("#FFC67A",.3,1);o.position.set(0,1.35,-1.6),e.add(o);let a=new ge("#FFB060",6,5,1.5);a.position.set(0,1.45,-1.5),a.castShadow=!0,e.add(a);let c=gr({outfit:"hero",glow:.25,hat:h=>h("chapeu",300,300,f=>{f.translate(150,150),f.fillStyle="#F2C14E",f.beginPath(),f.moveTo(-60,-110),f.lineTo(0,-250),f.lineTo(60,-110),f.fill(),f.fillStyle="#E9483A";for(let d=0;d<3;d++)f.beginPath(),f.arc(-20+d*20,-150-d*20,8,0,7),f.fill();f.beginPath(),f.arc(0,-250,14,0,7),f.fill()})});return c.place(0,-2.3,-.2),e.add(c.root),c.tint("#FFE0C0"),e.add(new me("#3A3050","#101010",.4)),(h,f,d)=>{let u=f>3.4,g=f>4.1;return o.visible=!g,a.intensity=g?0:6+Math.sin(f*20)*1,o.scale.setScalar(u?.3*(1-Mt(3.4,4.1,f)):.3+Math.sin(f*17)*.03),xt(d,[[0,[.3,1.5,1.4]],[5.4,[.1,1.5,.6]]],[[0,[0,1.3,-1.8]],[5.4,[0,1.45,-2]]],f),c.face(d),c.pose({armL:[20+(f<3?Math.abs(Math.sin(f*6))*30:0),-40],armR:[20+(f<3?Math.abs(Math.sin(f*6))*30:0),-40],head:u?-6:Math.sin(f*3)*4,lean:u?-4:0}),c.eye(f<2?"happy":f<3.4?"smug":f<4.1?"shut":"sad"),{focus:d.position.distanceTo(c.root.position),range:1.8,blur:13,bloom:.55,bloomT:.75,vig:.6,exposure:g?.7:1}}})}function ff(i,t){return bt(i,t,{bg:"#0C0E1A",fog:["#10121E",.03],fov:34},e=>{let n=new U(new lt(40,40),H("#2A2A34",{roughness:.8}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n),e.add(w(40,10,.3,H("#22222C"),0,5,-6));let s=new pt;for(let c=0;c<6;c++)s.add(w(.08,2.2,.3,"#111",-1.25+c*.5,0,0));s.add(w(2.7,.1,.3,"#111",0,1.1,0)),s.add(w(2.7,.1,.3,"#111",0,-1.1,0)),s.position.set(0,4.5,-5.8),e.add(s);let r=new U(new lt(2.6,2.2),new ce({color:"#BFD0FF"}));r.position.set(0,4.5,-5.95),e.add(r);let o=new Wn("#BFD0FF",160,22,.45,.3,1.2);o.position.set(0,5,-7.5),o.target.position.set(0,0,1.5),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),e.add(o,o.target),bn(e,0,2.6,-3,2.6,6,0,"#BFD0FF",.08).rotation.x=-.9;let a=ns(e,120,[-2,2,0,4.5,-5,2],5,"#CFDCFF");e.add(new me("#2A2A4A","#080808",.4));let l=ee(e,0,.6,0,.2);return l.tint("#C8D4FF"),(c,h,f)=>(a(h),xt(f,[[0,[0,1.5,3.4]],[6,[0,2.2,7]],[12,[0,4.5,12]]],[[0,[0,1.3,.6]],[6,[0,1.2,.6]],[12,[0,1,-1]]],h),l.face(f),l.pose({armL:[6,4],armR:[6,4],head:-6+Math.sin(h*.5)*2,squash:-.02}),l.eye(h<4?"flat":h<8?"sad":"down"),Math.floor(h*10)%47===0&&l.eye("shut"),{focus:f.position.distanceTo(l.root.position),range:3,blur:10,bloom:.45,bloomT:.8,vig:.65,sat:.7})})}function uf(i,t){return bt(i,t,{bg:"#F6C89A",fog:["#F2C8A0",.012],fov:34},e=>{an(e,{seed:71,overgrown:.25,skyStops:[[0,"#6A8AC8"],[.55,"#E8A88A"],[.85,"#FCC88A"],[1,"#FFE0A8"]]});let n=ee(e,5.6,-3,.14,.3);n.tint("#FFE8D0");let s=new pt;s.add(w(.04,1.3,.04,"#B8864A",0,.65,0)),s.add(w(.36,.14,.08,"#E9B44C",0,.05,0)),e.add(s);let r=Pt(5),o=[];for(let l=0;l<7;l++){let c=Li(e,"pombo",4.2+r()*3,-4.6-r()*2,.45);c.position.y+=.14,c.blob.position.y=.155,o.push({p:c,x:c.position.x,z:c.position.z,ph:r()*6})}let a=ns(e,40,[5,6.5,.15,.5,-3.3,-2.6],9,"#E8D8B0");return(l,c,h)=>{a(c);for(let u of o)u.p.position.set(u.x+Math.sin(c*.8+u.ph)*.2,.14+.17+Math.abs(Math.sin(c*6+u.ph))*.02,u.z),u.p.rotation.z=Math.sin(c*5+u.ph)*.1,Ue(u.p,h);let f=c>4.4,d=Math.sin(c*4);return n.face(h),f?(s.position.set(n.root.position.x-.5,.14,n.root.position.z-.1),s.rotation.z=.15,n.pose({armL:[10,6],armR:[150+Math.sin(c*9)*15,20],head:6}),n.eye(c<7?"happy":"flat")):(n.pose({armL:[30,-60],armR:[30,-60],head:4,lean:d*4}),n.eye("down"),s.visible=!0,s.position.set(n.root.position.x+.25+d*.25,.14,n.root.position.z+.2),s.rotation.z=-.3-d*.2),xt(h,[[0,[3.2,1.4,1.5]],[9.2,[3.8,1.3,.2]]],[[0,[5.6,1.1,-3.4]],[9.2,[5.2,.9,-3.8]]],c),{focus:h.position.distanceTo(n.root.position),range:2.8,blur:12,bloom:.35,bloomT:.9,vig:.42}}})}function pf(i,t){return bt(i,t,{bg:"#2A3A2E",fog:["#2A3030",.02],fov:34},e=>{on(e,{wall:"#C9B88A",side:!1,floor:"#6A4A32"});let n=document.createElement("canvas");n.width=1024,n.height=512;let s=n.getContext("2d"),r=new De(n);r.colorSpace=ne;let o=(u,g,y,m="#F4F4EC")=>{s.strokeStyle=m,s.lineWidth=6,s.beginPath(),s.arc(u,g,22*y,0,7),s.stroke(),s.beginPath(),s.moveTo(u,g+22*y),s.lineTo(u,g+90*y),s.moveTo(u-30*y,g+50*y),s.lineTo(u+30*y,g+50*y),s.moveTo(u,g+90*y),s.lineTo(u-22*y,g+140*y),s.moveTo(u,g+90*y),s.lineTo(u+22*y,g+140*y),s.stroke()},a=(u,g)=>{s.fillStyle="#1E3A2A",s.fillRect(0,0,1024,512),s.strokeStyle="#3A2A1A",s.lineWidth=24,s.strokeRect(0,0,1024,512),o(170,140,1.4),s.fillStyle="#F4F4EC",s.font="700 110px Caveat",s.textAlign="center",s.fillText("+",330,280),u>0&&(s.font="700 160px Caveat",s.fillText("?",470,290)),u>1&&(s.font="700 110px Caveat",s.fillText("=",620,280),s.font="700 64px Caveat",s.fillText("humanidade",830,280));for(let y=0;y<g;y++)s.strokeStyle="#8FE08A",s.lineWidth=10,s.beginPath(),s.moveTo(120+y*110,430),s.lineTo(150+y*110,470),s.lineTo(210+y*110,390),s.stroke();r.needsUpdate=!0},l=new U(new lt(4.4,2.2),new tt({map:r,roughness:.9}));l.position.set(-.4,2.2,-3.78),e.add(l);let c=new Wn("#FFE8C8",50,12,.6,.5,1.4);c.position.set(0,4.5,1.5),c.target.position.set(0,1.6,-3.5),c.castShadow=!0,e.add(c,c.target),e.add(new me("#8A8A6A","#202020",.6));let h=ee(e,2.4,-2.8,0,.25);h.tint("#FFF4E0");let f=w(.03,.1,.03,"#F4F4EC",0,0,0);e.add(f);let d="";return(u,g,y)=>{let m=g<1.8?0:g<3.4?1:2,p=g>6.6?Math.min(3,Math.floor((g-6.6)/.5)+1):0,v=m+"_"+p;v!==d&&(a(m,p),d=v),xt(y,[[0,[-.4,2.1,2.6]],[5.5,[.4,1.9,3.4]],[9.2,[1.4,1.7,1.4]]],[[0,[-.4,2.2,-3.8]],[5.5,[.4,2,-3.6]],[9.2,[2.1,1.6,-3]]],g),h.face(y);let E=g>1.6&&g<3.6||g>6.4;return h.pose({armL:[10,6],armR:E?[100+Math.sin(g*14)*6,-20]:[10,6],head:E?-4:6}),h.eye(g<6.4?"look":g<8.2?"down":"sad"),f.visible=E,f.position.set(h.root.position.x-.55,2,h.root.position.z+.1),{focus:y.position.distanceTo(g<5.5?l.position:h.root.position),range:2.6,blur:11,bloom:.3,bloomT:.9,vig:.48}}})}var Er=["#2E4F2C","#3B6636","#55813F","#A9B65A"];function mf(i,t){return bt(i,t,{bg:"#BFD8EE",fog:["#D8E6E0",.012],fov:34},e=>{let n=an(e,{seed:81,overgrown:.8,cars:!0}),s=e.children.find(r=>r.isDirectionalLight);return(r,o,a)=>{let l=Mt(.5,6.5,o);if(n.mato.forEach((c,h)=>{c.scale.set(.2+l*.9,.1+l*(.9+h%5*.15),1)}),s){let c=o*2.2;s.position.set(Math.cos(c)*30,15+Math.sin(c)*15,10),s.intensity=2+Math.sin(c)*1}return xt(a,[[0,[0,.6,3]],[7,[.5,1.4,-1]]],[[0,[0,.4,-10]],[7,[0,.9,-14]]],o),{focus:6,range:5,blur:10,bloom:.25,bloomT:.95,vig:.42}}})}function gf(i,t){return bt(i,t,{bg:"#A8C0B8",fog:["#C0D0C8",.014],fov:36,far:900},e=>{Ae(e,-200,900,400,[[0,"#6A8AA8"],[.6,"#B8D0C8"],[1,"#E8E8D0"]]);let n=new U(new lt(300,300),H("#5E7A44"));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n);let s=Ho(e,{cols:5,rows:5,col:"#7A4A3A",seed:9,lit:0});s.g.position.set(0,0,-10),s.g.rotation.z=.03;for(let a of s.slots)(a.r+a.k)%2===0&&(nn(e,a.x*.99,-9.4,.7+a.r%3*.15,Er,a.r+a.k).position.y=a.y-1.2);nn(e,-3,-10,2.6,Er,3).position.y=s.H-2,nn(e,4,-10,2.2,Er,4).position.y=s.H-2;let r=nt(128,512,a=>{a.clearRect(0,0,128,512);for(let l=0;l<80;l++)a.fillStyle=["#3E6A2C","#4F7A36","#6E9A50"][l%3],a.beginPath(),a.ellipse(64+Math.sin(l)*40,l*6.4,18,10,l,0,7),a.fill()});for(let a=0;a<6;a++){let l=de(r,1.2,8);l.position.set(-6+a*2.4,4,-9.5),e.add(l)}let o=[];for(let[a,l]of[[-12,-4],[11,-3]]){let c=new pt;c.add(w(4,3,4,H("#9A7A5A"),0,1.5,0));let h=new U(new Pi(3.4,1.8,4),H("#6A4A3A"));h.rotation.y=.78,h.position.y=3.9,c.add(h),c.position.set(a,0,l),e.add(c),o.push(c)}for(let a=0;a<10;a++)nn(e,(a%2?1:-1)*(8+a*7%16),2-a*3,1.8+a%3*.5,Er,a);return Xe(e,{ki:2.6,pos:[-20,30,20],r:40}),(a,l,c)=>(o.forEach((h,f)=>{let d=Mt(1+f,2.5+f,l);h.rotation.z=(f?-1:1)*d*.5,h.position.y=-d*1.2}),xt(c,[[0,[0,2,16]],[5,[1,4,10]]],[[0,[0,6,-10]],[5,[0,8,-10]]],l),{focus:20,range:12,blur:8,bloom:.2,bloomT:1,vig:.42})})}function yf(i,t){return bt(i,t,{bg:"#9ABAA8",fog:["#A8C8B0",.018],fov:36,far:900},e=>{Ae(e,-200,900,400,[[0,"#5A8AA8"],[.6,"#A8C8B8"],[1,"#E0E8C8"]]);let n=new U(new lt(300,300),H("#4E6A36"));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n);let s=H("#8A8A84");[[-14,-40,40],[8,-50,60],[24,-36,34],[-30,-60,50]].forEach(([d,u,g])=>{let y=new pt;for(let m=0;m<=g;m+=4)y.add(w(8,.4,8,s,0,m,0));for(let[m,p]of[[-3.8,-3.8],[3.8,-3.8],[-3.8,3.8],[3.8,3.8]])y.add(w(.5,g,.5,s,m,g/2,p));y.position.set(d,0,u),y.rotation.z=d%3*.02,e.add(y)});let r=Pt(4);for(let d=0;d<40;d++)nn(e,(r()-.5)*60,4-r()*60,2+r()*2.5,Er,d);let o=new U(new Ht(.06,.07,.3,16),new tt({color:"#9FD8FF",transparent:!0,opacity:.55,roughness:.1}));o.rotation.z=Math.PI/2,o.position.set(.2,.07,3),e.add(o);let a=new U(new Ht(.03,.03,.04,10),H("#2A6AE8"));a.rotation.z=Math.PI/2,a.position.set(.37,.07,3),e.add(a);let l=new U(new Ht(.05,.07,.32,16),new tt({color:"#4A9A5A",transparent:!0,opacity:.7,roughness:.05,metalness:.2}));l.rotation.set(Math.PI/2,0,.4),l.position.set(-.25,.07,3.1),e.add(l);let c=de(nt(256,128,d=>{d.clearRect(0,0,256,128);for(let u=0;u<40;u++)d.strokeStyle=["#4F7A36","#6E9A50"][u%2],d.lineWidth=5,d.beginPath(),d.moveTo(u*6,128),d.lineTo(u*6+(u%5-2)*4,40+u%4*16),d.stroke()}),1.4,.5);c.position.set(0,.2,2.8),e.add(c),Xe(e,{ki:2.4,pos:[-20,30,20],r:60}),bn(e,-4,10,-10,4,30,-.3,"#FFF2C8",.1);let h=[],f=nt(64,32,d=>{d.fillStyle="#2A2A34",d.beginPath(),d.moveTo(0,16),d.quadraticCurveTo(16,0,32,14),d.quadraticCurveTo(48,0,64,16),d.quadraticCurveTo(32,10,0,16),d.fill()});for(let d=0;d<12;d++){let u=de(f,.8,.4);e.add(u),h.push({m:u,p:r()*6,x:(r()-.5)*30,y:18+r()*10})}return(d,u,g)=>{for(let m of h)m.m.position.set(m.x+u*2,m.y+Math.sin(u*2+m.p),-30),m.m.scale.y=.6+Math.abs(Math.sin(u*8+m.p))*.6,Ue(m.m,g);xt(g,[[0,[0,30,30]],[4.4,[0,8,14]],[8.2,[0,.35,4]]],[[0,[0,10,-40]],[4.4,[0,6,-20]],[8.2,[0,.1,3]]],u);let y=Mt(4.4,7.5,u);return{focus:ht(40,1,y),range:ht(40,.5,y),blur:10,bloom:.25,bloomT:.95,vig:.42}}})}function vf(i,t){return bt(i,t,{bg:"#020206",fov:34,far:2400},e=>{Tn(e,6e3,900,33);let n=nt(1024,1024,f=>{f.fillStyle="#9A9A9E",f.fillRect(0,0,1024,1024);let d=Pt(3);for(let u=0;u<12e3;u++)f.fillStyle=`rgba(${d()<.5?"255,255,255":"0,0,0"},.06)`,f.fillRect(d()*1024,d()*1024,3,3);for(let u=0;u<40;u++){let g=d()*1024,y=d()*1024,m=10+d()*50;f.strokeStyle="rgba(60,60,64,.5)",f.lineWidth=4,f.beginPath(),f.arc(g,y,m,0,7),f.stroke(),f.fillStyle="rgba(70,70,74,.35)",f.fill()}});n.wrapS=n.wrapT=pe,n.repeat.set(10,10);let s=new U(new lt(200,200,60,60),new tt({map:n,roughness:1}));s.rotation.x=-Math.PI/2;let r=s.geometry.attributes.position;for(let f=0;f<r.count;f++){let d=r.getX(f),u=r.getY(f);r.setZ(f,Math.sin(d*.1)*.4+Math.cos(u*.13)*.5)}s.geometry.computeVertexNormals(),s.receiveShadow=!0,e.add(s);let o=nt(64,128,f=>{f.clearRect(0,0,64,128),f.fillStyle="rgba(40,40,44,.75)",f.beginPath(),f.roundRect(8,8,48,112,20),f.fill(),f.strokeStyle="rgba(160,160,164,.6)",f.lineWidth=3;for(let d=0;d<9;d++)f.beginPath(),f.moveTo(12,20+d*11),f.lineTo(52,20+d*11),f.stroke()});for(let f=0;f<26;f++){let d=new U(new lt(.16,.32),new ce({map:o,transparent:!0,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.rotation.z=.3,d.position.set(-1.5+f*.25+f%2*.12,.62+Math.sin((-1.5+f*.25)*.1)*.4*0,2-f*.35),d.position.y=Math.sin(d.position.x*.1)*.4+Math.cos(-d.position.z*.13)*.5+.01,e.add(d)}e.add(w(.03,2,.03,"#D8D8DC",2.6,1.4,-6));let a=new U(new lt(1.2,.7),new tt({map:nt(240,140,f=>{f.fillStyle="#F4F4F0",f.fillRect(0,0,240,140);for(let d=0;d<7;d++)f.fillStyle="#C9201A",f.fillRect(0,d*20,240,10);f.fillStyle="#1F3A8A",f.fillRect(0,0,100,70)}),side:te}));a.position.set(3.2,2,-6),e.add(a);let l=new pt;l.add(w(1.8,.8,1.8,H("#C9A04A",{metalness:.8,roughness:.3}),0,1.1,0));for(let[f,d]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let u=w(.08,1.4,.08,H("#B8B8BC"),f*.9,.6,d*.9);u.rotation.z=f*.3,u.rotation.x=-d*.3,l.add(u),l.add(w(.3,.04,.3,H("#B8B8BC"),f*1.1,.02,d*1.1))}l.position.set(-3,.4,-9),e.add(l);let c=vr(e,6);c.position.set(-30,26,-120);let h=new Ze("#FFFFFF",3.6);return h.position.set(20,10,10),h.castShadow=!0,h.shadow.mapSize.set(2048,2048),Object.assign(h.shadow.camera,{left:-20,right:20,top:20,bottom:-20,far:80}),e.add(h),e.add(new li("#20202A",.4)),(f,d,u)=>(c.rotation.y=d*.03,xt(u,[[0,[-.6,1.4,4.4]],[6,[-.2,1,3.2]],[11.4,[1,3,8]]],[[0,[0,.4,-1]],[6,[.4,.5,-2]],[11.4,[-8,12,-60]]],d),{focus:ht(3.5,40,Mt(6,10,d)),range:ht(3,60,Mt(6,10,d)),blur:8,bloom:.35,bloomT:.85,vig:.5})})}function Ef(i,t){return bt(i,t,{bg:"#02030A",fov:36,far:2400},e=>{Tn(e,6e3,900,41),Ii(e,-200,60,-600,900,"#7E6BFF",3,.08),Ii(e,250,-60,-600,700,"#FF6FB0",9,.05);let n=new Ze("#FFF4E0",3.4);n.position.set(-20,10,20),e.add(n),e.add(new li("#2A3550",.5));let s=vr(e,1.6),r=nt(256,256,c=>{c.clearRect(0,0,256,256),c.strokeStyle="#8FF0E0",c.lineWidth=3,c.shadowColor="#8FF0E0",c.shadowBlur=10,c.beginPath(),c.arc(128,128,120,0,7),c.stroke()}),o=[];for(let c=0;c<9;c++){let h=new U(new lt(1,1),new ce({map:r,transparent:!0,depthWrite:!1,blending:Ge,side:te}));e.add(h),o.push(h)}let a=c=>de(nt(160,160,h=>{h.fillStyle="#10162Bdd",h.beginPath(),h.roundRect(6,6,148,148,26),h.fill(),h.strokeStyle="#8FF0E0",h.lineWidth=4,h.stroke(),c(h)}),.9,.9,{blend:!0}),l=[a(c=>{c.fillStyle="#F4EFE4",c.fillRect(30,40,100,70),c.fillStyle="#F08AA0",c.fillRect(38,48,84,54),c.fillRect(60,112,40,10)}),a(c=>{c.fillStyle="#F4EFE4",c.beginPath(),c.arc(80,80,40,0,7),c.fill(),c.fillStyle="#1A1A22";for(let[h,f]of[[80,60],[60,90],[100,90]])c.beginPath(),c.arc(h,f,10,0,7),c.fill()}),a(c=>{c.fillStyle="#F2C14E",c.fillRect(36,60,88,50),c.fillStyle="#FFF6D8",c.fillRect(36,54,88,12),c.fillStyle="#C9361F",c.font="900 18px Inter",c.textAlign="center",c.fillText("MARGARINA",80,92)}),a(c=>{c.fillStyle="#C9361F",c.fillRect(40,70,80,50),c.fillStyle="#F4EFE4",c.beginPath(),c.arc(64,95,14,0,7),c.fill(),c.fillRect(92,84,18,24),c.strokeStyle="#F4EFE4",c.beginPath(),c.moveTo(60,70),c.lineTo(100,40),c.stroke()})];return l.forEach(c=>e.add(c)),(c,h,f)=>(s.rotation.y=h*.1,o.forEach((d,u)=>{let g=(h*.18+u/o.length)%1;d.scale.setScalar(2+g*40),d.material.opacity=(1-g)*.8,Ue(d,f),d.lookAt(f.position)}),l.forEach((d,u)=>{let g=(h*.07+u*.25)%1,y=u*1.6+.4;d.position.set(Math.cos(y)*(2+g*14),Math.sin(y)*(1.5+g*8),-g*4),d.material.opacity=1-Mt(.8,1,g),Ue(d,f)}),xt(f,[[0,[0,1,7]],[12.3,[3,4,26]]],[[0,[0,0,0]],[12.3,[0,0,0]]],h),{focus:f.position.length(),range:30,blur:4,bloom:.55,bloomT:.75,vig:.5})})}var o2=()=>nt(400,560,i=>{i.translate(200,0),i.fillStyle="#5A3A8A",i.beginPath(),i.roundRect(-110,300,220,260,50),i.fill(),i.fillStyle="#8EE07A",i.beginPath(),i.ellipse(0,180,130,120,0,0,7),i.fill(),i.strokeStyle="#8EE07A",i.lineWidth=12;for(let t of[-1,1])i.beginPath(),i.moveTo(t*50,80),i.lineTo(t*90,10),i.stroke(),i.fillStyle="#F2C14E",i.beginPath(),i.arc(t*90,10,16,0,7),i.fill();i.fillStyle="#121218";for(let[t,e]of[[-55,30],[0,38],[55,30]])i.beginPath(),i.ellipse(t,170,e*.8,e,0,0,7),i.fill();i.fillStyle="#F6EFE6";for(let[t,e]of[[-55,30],[0,38],[55,30]])i.beginPath(),i.ellipse(t+6,160,e*.25,e*.35,0,0,7),i.fill();i.strokeStyle="#3E7A36",i.lineWidth=6,i.beginPath(),i.arc(0,240,30,.2,Math.PI-.2),i.stroke()});function _f(i,t){return bt(i,t,{bg:"#0A0818",fog:["#120E24",.02],fov:34},e=>{let n=new U(new Sn(8,48),H("#2A2440",{metalness:.5,roughness:.3}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n);let s=new U(new Ht(8,8,6,48,1,!0),H("#1E1A34",{side:ze,metalness:.4}));s.position.y=3,e.add(s);for(let m=0;m<24;m++){let p=m/24*6.283,v=new U(new ae(.06,8,6),new tt({emissive:["#8FF0E0","#F2C14E","#F08AA0"][m%3],emissiveIntensity:4}));v.position.set(Math.cos(p)*7.8,1.5+m%3*.5,Math.sin(p)*7.8),e.add(v)}let r=new U(new Sn(1.6,40),new ce({map:nt(256,256,m=>{m.fillStyle="#02030A",m.fillRect(0,0,256,256);for(let p=0;p<80;p++)m.fillStyle="#fff",m.fillRect(p*97%256,p*57%256,2,2);m.fillStyle="#2E64B0",m.beginPath(),m.arc(170,170,50,0,7),m.fill(),m.fillStyle="#5E9A58",m.beginPath(),m.ellipse(160,160,20,14,.4,0,7),m.fill()})}));r.position.set(-3.6,3,-6.6),r.rotation.y=.5,e.add(r);let o=document.createElement("canvas");o.width=800,o.height=450;let a=o.getContext("2d"),l=new De(o);l.colorSpace=ne;let c=m=>{let p=a.createLinearGradient(0,0,0,450);p.addColorStop(0,"#FFE8A8"),p.addColorStop(1,"#F8C870"),a.fillStyle=p,a.fillRect(0,0,800,450),a.fillStyle="#FFF6D0",a.beginPath(),a.arc(650,90,60,0,7),a.fill(),a.fillStyle="#8E6242",a.fillRect(0,330,800,120);for(let[v,E,_]of[[180,"#36AEA2",1],[300,"#F08AA0",.9],[410,"#F2C14E",.6]]){a.fillStyle=E,a.beginPath(),a.roundRect(v-40,330-150*_,80,150*_,20),a.fill(),a.fillStyle="#121218",a.beginPath(),a.arc(v,330-150*_-40,40,0,7),a.fill(),a.strokeStyle="#F6EFE6",a.lineWidth=6;for(let R of[-1,1])a.beginPath(),a.arc(v+R*14,330-150*_-42,8,Math.PI,0),a.stroke()}a.fillStyle="#F2C14E",a.fillRect(560,250,160,80),a.fillStyle="#FFF6D8",a.fillRect(560,240,160,18),a.fillStyle="#C9361F",a.font="900 28px Inter",a.textAlign="center",a.fillText("MARGARINA",640,300),a.fillStyle="#ffffffcc",a.font="900 40px Fraunces",a.fillText("\u2605 ".repeat(1+m%3),400,60),l.needsUpdate=!0},h=new U(new lt(4.8,2.7),new tt({map:l,emissiveMap:l,emissive:"#fff",emissiveIntensity:.95}));h.position.set(1,2.4,-6),h.rotation.y=-.15,e.add(h);let f=new ge("#FFD890",14,10);f.position.set(1,2.4,-4.4),e.add(f);let d=de(o2(),1.4,1.96,{shadow:!0});d.position.set(-.4,.98,-1.2),e.add(d);let u=qs(1.2,.5,.5);u.position.set(-.4,.02,-1.2),e.add(u);let g=new U(new ae(.18,16,10,0,6.3,1.57,1.57),H("#8E6FB8"));g.position.set(.5,.5,-1),e.add(g),e.add(new me("#6A5AA8","#101010",.6));let y=-1;return(m,p,v)=>{let E=Math.floor(p*2);return E!==y&&(c(E),y=E),d.position.y=.98+Math.abs(Math.sin(p*3))*.03,Ue(d,v),xt(v,[[0,[-2.4,1.6,2.4]],[5.3,[-1.4,1.5,1.4]]],[[0,[.6,2,-6]],[5.3,[-.2,1.5,-2]]],p),{focus:v.position.distanceTo(p<2.5?h.position:d.position),range:3,blur:10,bloom:.45,bloomT:.82,vig:.5}}})}function Mf(i,t){return bt(i,t,{bg:"#F2D9B0",fog:["#E8D2B0",.02],fov:32},e=>{let n=is(e),s=ee(e,1,-2.3,-.12,.3);s.tint("#FFF2E2");let r=ns(e,80,[-3,1,.5,3.5,-3.5,-.5]);return(o,a,l)=>{r(a);let c=Math.sin(a*90)*.006;n.tel.paint("n"+Math.min(6,Math.floor(a*1.6)),f=>Ln.notifs(f,Math.min(6,Math.floor(a*1.6)))),n.tel.position.x=-.45+c,n.tel.rotation.z=c*3,xt(l,[[0,[1.5,1.5,1.2]],[5.7,[2.4,1.7,3.4]]],[[0,[.9,1.3,-2.3]],[5.7,[.6,1.2,-2.6]]],a),s.face(l);let h=Mt(.6,1.2,a);return s.pose({armL:[ht(10,150,h*(1-Mt(3,3.5,a))),20],armR:[ht(10,150,h*(1-Mt(3,3.5,a))),20],head:0}),s.eye(a<.5?"shut":a<3?"wide":"happy"),{focus:l.position.distanceTo(s.root.position),range:2.2,blur:13,bloom:.3,bloomT:.9,vig:.4,exposure:1.05}}})}function Sf(i,t){return bt(i,t,{bg:"#F2D9B0",fog:["#E8D2B0",.02],fov:30},e=>{is(e);let n=qn(.36,.74);e.add(n),n.position.set(.4,1.4,-.6),n.rotation.set(-.12,-.15,0);let s=de(nt(256,256,r=>{r.clearRect(0,0,256,256),r.fillStyle="#F2C14E";for(let o=0;o<10;o++)r.save(),r.translate(128,128),r.rotate(o*.628),r.beginPath(),r.ellipse(0,-60,22,50,0,0,7),r.fill(),r.restore();r.fillStyle="#8E5A2A",r.beginPath(),r.arc(128,128,38,0,7),r.fill()}),.3,.3,{blend:!0});return e.add(s),(r,o,a)=>{let l=Math.min(6,1+Math.floor(o*.9));n.paint("n"+l,h=>Ln.notifs(h,l)),n.position.x=.4+Math.sin(o*90)*(o%1.4<.3?.004:0),s.visible=o>3;let c=Mt(3,3.4,o);return s.scale.setScalar(c),s.position.set(.62,1.62,-.5),s.rotation.z=o,xt(a,[[0,[.5,1.45,1]],[8.3,[.42,1.42,.7]]],[[0,[.4,1.38,-.6]],[8.3,[.4,1.38,-.6]]],o),{focus:a.position.distanceTo(n.position),range:1.6,blur:12,bloom:.2,bloomT:.95,vig:.45}}})}function Tf(i,t){return bt(i,t,{bg:"#BFD8EE",fog:["#E8E0D8",.01],fov:34},e=>{an(e,{seed:3});let n=Pt(4),s=[];for(let a=0;a<260;a++){let l=n()<.5?-1:1;s.push([l*(5.2+n()*2.6),2-n()*60,.14,n()<.5?0:Math.PI])}vd(e,s,{raised:.1,jump:.04,seed:3});let r=[["rosa","long","#6B3A22",5.6,-6],["azul","bob","#D9B65A",6.4,-9],["terno2",null,null,5.2,-12],["amarelo","afro","#2a1b18",6.8,-4],["laranja",null,null,4.9,-2]].map(([a,l,c,h,f],d)=>{let u=Oo(e,a,l,c,h,f,.14);return u.ph=d,u}),o=ee(e,6.1,-1,.14,.35);return o.tint("#FFF6EA"),(a,l,c)=>(r.forEach((h,f)=>{h.root.position.z=-12+(l*1.1+f*2.5)%12,h.walk(l+f,1,.8),h.face(c),h.eye("look")}),xt(c,[[0,[4.8,1.5,2.2]],[6.5,[3.2,2.2,5.6]]],[[0,[6.1,1.5,-1]],[6.5,[6,1.6,-4]]],l),o.face(c),o.pose({armL:[10,6],armR:[10,6],head:Math.sin(l)*3}),o.eye(l<2?"look":"happy"),{focus:c.position.distanceTo(o.root.position),range:3.5,blur:10,bloom:.25,bloomT:.95,vig:.4})})}function bf(i,t){return bt(i,t,{bg:"#1A1638",fog:["#1A1638",.02],fov:34},e=>{let n=new U(new lt(40,40),H("#2A2450",{roughness:.4,metalness:.2}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n),Tn(e,1500,200,3),Ii(e,0,10,-60,120,"#C78BFF",4,.12);let s=document.createElement("canvas");s.width=800,s.height=200;let r=s.getContext("2d"),o=new De(s);o.colorSpace=ne;let a=y=>{r.clearRect(0,0,800,200),r.fillStyle=y?"#4A4A58":"#E9483A",r.beginPath(),r.roundRect(10,10,780,180,90),r.fill(),r.fillStyle="#fff",r.font="900 84px Inter",r.textAlign="center",r.textBaseline="middle",r.fillText(y?"INSCRITO \u2713":"INSCREVER-SE",400,104),o.needsUpdate=!0},l=new U(new lt(3.6,.9),new tt({map:o,emissiveMap:o,emissive:"#fff",emissiveIntensity:.7,transparent:!0}));l.position.set(-.8,2.4,-2),e.add(l);let c=de(nt(200,200,y=>{y.fillStyle="#F2C14E",y.beginPath(),y.moveTo(100,30),y.quadraticCurveTo(160,40,160,120),y.lineTo(176,150),y.lineTo(24,150),y.lineTo(40,120),y.quadraticCurveTo(40,40,100,30),y.fill(),y.beginPath(),y.arc(100,168,18,0,7),y.fill(),y.beginPath(),y.arc(100,24,10,0,7),y.fill()}),.8,.8);c.position.set(1.6,2.4,-2),e.add(c);let h=Le("#FFE08A",1.6,0);h.position.set(1.6,2.4,-2.05),e.add(h);let f=de(nt(320,200,y=>{y.fillStyle="#FBF7EC",y.beginPath(),y.roundRect(10,10,300,140,40),y.fill(),y.beginPath(),y.moveTo(110,148),y.lineTo(120,196),y.lineTo(160,148),y.fill(),y.fillStyle="#20202A";for(let m=0;m<3;m++)y.beginPath(),y.arc(110+m*50,82,14,0,7),y.fill()}),.9,.56);e.add(f);let d=ee(e,0,-.6,0,.4);d.tint("#FFF6EA");let u=new Wn("#FFE8C8",60,12,.6,.5,1.4);u.position.set(0,5,3),u.target.position.set(0,1,-1),u.castShadow=!0,e.add(u,u.target),e.add(new me("#8A7AC8","#101018",.7));let g=-1;return(y,m,p)=>{let v=m>4.4?1:0;v!==g&&(a(v),g=v);let E=1+(m>4.3&&m<4.7?Math.sin((m-4.3)/.4*Math.PI)*.12:0);l.scale.setScalar(E);let _=m>5;c.rotation.z=_?Math.sin(m*30)*.35*(1-Mt(5,6.4,m)):0,h.material.opacity=_?.6*(1-Mt(5.2,6.4,m)):0,f.visible=m<1.2,f.position.set(-.8,1.3,-.8),Ue(f,p),xt(p,[[0,[0,1.6,4.4]],[6.5,[.2,1.8,5.4]]],[[0,[0,1.6,-1]],[6.5,[.2,1.8,-1.5]]],m),d.face(p);let R=m<2.2;return d.pose({armL:[10,6],armR:R?[25,0]:m<4.4?[130,20]:[150+Math.sin(m*8)*10,10],head:R?-8:4}),d.eye(R?"smug":"happy"),{focus:p.position.distanceTo(d.root.position),range:3,blur:10,bloom:.45,bloomT:.82,vig:.5}}})}function xf(i,t){return bt(i,t,{bg:"#F2D9B0",fog:["#E8D2B0",.02],fov:32},e=>{let n=is(e),s=ee(e,1,-2.3,-.12,.35);s.tint("#FFF2E2");let r=qn(.36,.74);e.add(r);let o=de(nt(128,128,a=>{a.fillStyle="#E9483A",a.beginPath(),a.moveTo(64,112),a.bezierCurveTo(-10,60,20,4,64,36),a.bezierCurveTo(108,4,138,60,64,112),a.fill()}),.25,.25,{blend:!0});return e.add(o),(a,l,c)=>{let h=l>2.2;r.paint(h?"s":"w",d=>{Ln.grupo(d),d.fillStyle="#ECE5DD",d.fillRect(0,680,540,430),h&&(d.fillStyle="#DCF8C6",d.beginPath(),d.roundRect(160,760,350,120,18),d.fill(),d.fillStyle="#20202A",d.font="700 34px Inter",d.textAlign="left",d.fillText("bom dia, fam\xEDlia! \u2764",180,830)),d.fillStyle="#fff",d.beginPath(),d.roundRect(20,1e3,500,80,40),d.fill(),d.fillStyle="#999",d.font="600 28px Inter",d.fillText(h?"Mensagem":"bom dia, fam\xEDlia! \u2764|",50,1050)}),r.position.set(ht(.4,1.35,Mt(2.6,3.4,l)),ht(1.4,1.1,Mt(2.6,3.4,l)),ht(-.6,-1.95,Mt(2.6,3.4,l))),r.scale.setScalar(ht(1,.35,Mt(2.6,3.4,l))),r.rotation.set(-.12,-.15,0),o.visible=l>2.2;let f=Mt(2.2,4.5,l);return o.position.set(ht(.6,1.6,f),ht(1.6,3,f),ht(-.6,-2.4,f)),o.material.opacity=1-Mt(3.8,4.6,l),Ue(o,c),xt(c,[[0,[.5,1.45,1]],[2.6,[.5,1.45,.9]],[5.1,[2.2,1.7,2.6]]],[[0,[.4,1.38,-.6]],[2.6,[.4,1.38,-.6]],[5.1,[.9,1.4,-2.3]]],l),s.face(c),s.pose({armL:[10,6],armR:[35,-60],head:4}),s.eye("happy"),{focus:l<2.6?c.position.distanceTo(r.position):c.position.distanceTo(s.root.position),range:1.8,blur:12,bloom:.3,bloomT:.9,vig:ht(.4,.7,Mt(4,5,l)),exposure:ht(1,0,Mt(4.4,5.05,l))}}})}var Af=[[bd,0,3.36],[xd,3.36,9.05],[Ad,9.05,15.51],[wd,15.51,22.13],[Rd,22.13,27.29],[Cd,27.29,33.1],[Pd,33.1,43.58],[Fd,43.58,48.59],[Id,48.59,54.29],[Dd,54.29,62.05],[Ld,62.05,70.65],[Ud,70.65,80.85],[Bd,80.85,83.87],[Nd,83.87,93.45],[Hd,93.45,99.94],[Od,99.94,106.65],[zd,106.65,114.89],[kd,114.89,125.6],[Gd,125.6,129.25],[Vd,129.25,135.36],[Wd,135.36,141.74],[Xd,141.74,150.25],[qd,150.25,158.77],[Yd,158.77,163.75],[Zd,163.75,170.89],[$d,170.89,179.75],[Jd,179.75,187.15],[Kd,187.15,194.95],[Qd,194.95,201.82],[jd,201.82,208.92],[tf,208.92,220.25],[ef,220.25,227.31],[nf,227.31,233.35],[sf,233.35,244.95],[rf,244.95,254.2],[of,254.2,262.45],[af,262.45,271.81],[lf,271.81,280.95],[cf,280.95,287.75],[hf,287.75,291.95],[df,291.95,297.32],[ff,297.32,309.35],[uf,309.35,318.5],[pf,318.5,327.65],[mf,327.65,334.65],[gf,334.65,339.65],[yf,339.65,347.85],[vf,347.85,359.24],[Ef,359.24,371.55],[_f,371.55,376.84],[Mf,376.84,382.55],[Sf,382.55,390.82],[Tf,390.82,397.35],[bf,397.35,403.85],[xf,403.85,408.9]];window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(t=>document.fonts.load(t))).catch(()=>{});let i=new Bo(document.getElementById("film3d"));for(let[t,e,n]of Af)i.add(t(e,n));window.addEventListener("hf-seek",t=>i.render(t.detail.time)),i.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
