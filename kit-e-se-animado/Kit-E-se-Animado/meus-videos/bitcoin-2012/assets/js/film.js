var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var l0="170";var Hd=0,th=1,Gd=2;var au=1,c0=2,Ei=3,Ji=0,Ge=1,De=2,ri=0,Zi=1,rr=2,eh=3,nh=4,Vd=5,ys=100,Wd=101,Xd=102,qd=103,Yd=104,Zd=200,$d=201,Jd=202,Qd=203,Ol=204,zl=205,Kd=206,jd=207,tf=208,ef=209,nf=210,sf=211,rf=212,of=213,af=214,kl=0,Hl=1,Gl=2,or=3,Vl=4,Wl=5,Xl=6,ql=7,lu=0,lf=1,cf=2,oi=0,hf=1,uf=2,df=3,ff=4,pf=5,mf=6,gf=7;var cu=300,ar=301,lr=302,Yl=303,Zl=304,Ia=306,on=1e3,vs=1001,$l=1002,fn=1003,yf=1004;var To=1005;var si=1006,nl=1007;var _s=1008;var Si=1009,hu=1010,uu=1011,Qr=1012,h0=1013,bi=1014,vi=1015,an=1016,u0=1017,d0=1018,cr=1020,du=35902,fu=1021,pu=1022,Rn=1023,mu=1024,gu=1025,nr=1026,hr=1027,yu=1028,f0=1029,Eu=1030,p0=1031;var m0=1033,ta=33776,ea=33777,na=33778,ia=33779,Jl=35840,Ql=35841,Kl=35842,jl=35843,tc=36196,ec=37492,nc=37496,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,hc=37815,uc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,sa=36492,yc=36494,Ec=36495,vu=36283,vc=36284,_c=36285,Mc=36286;var ra=2300,Sc=2301,il=2302,ih=2400,sh=2401,rh=2402;var Ef=3200,vf=3201;var _u=0,_f=1,qi="",Ue="srgb",es="srgb-linear",Da="linear",Me="srgb";var Ns=7680;var oh=519,Mf=512,Sf=513,bf=514,Mu=515,Af=516,xf=517,Tf=518,wf=519,bc=35044;var ah="300 es",_i=2e3,oa=2001,Qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sl=Math.PI/180,Ac=180/Math.PI;function $i(){let n=__sr()*4294967295|0,t=__sr()*4294967295|0,e=__sr()*4294967295|0,i=__sr()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function je(n,t,e){return Math.max(t,Math.min(e,n))}function Rf(n,t){return(n%t+t)%t}function rl(n,t,e){return(1-e)*n+e*t}function ii(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Se(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var at=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class n{constructor(t,e,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],E=s[0],g=s[3],m=s[6],S=s[1],v=s[4],y=s[7],T=s[2],x=s[5],w=s[8];return r[0]=a*E+o*S+l*T,r[3]=a*g+o*v+l*x,r[6]=a*m+o*y+l*w,r[1]=c*E+h*S+u*T,r[4]=c*g+h*v+u*x,r[7]=c*m+h*y+u*w,r[2]=d*E+f*S+p*T,r[5]=d*g+f*v+p*x,r[8]=d*m+f*y+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=e*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/p;return t[0]=u*E,t[1]=(s*c-h*i)*E,t[2]=(o*i-s*a)*E,t[3]=d*E,t[4]=(h*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=f*E,t[7]=(i*l-c*e)*E,t[8]=(a*e-i*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ol.makeScale(t,e)),this}rotate(t){return this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ol=new Jt;function Su(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cf(){let n=aa("canvas");return n.style.display="block",n}var lh={};function qr(n){n in lh||(lh[n]=!0,console.warn(n))}function Ff(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Pf(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function If(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var he={enabled:!0,workingColorSpace:es,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Me&&(n.r=Mi(n.r),n.g=Mi(n.g),n.b=Mi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Me&&(n.r=ir(n.r),n.g=ir(n.g),n.b=ir(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===qi?Da:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ch=[.64,.33,.3,.6,.15,.06],hh=[.2126,.7152,.0722],uh=[.3127,.329],dh=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[es]:{primaries:ch,whitePoint:uh,transfer:Da,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:hh,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:ch,whitePoint:uh,transfer:Me,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:hh,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});var Os,xc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Os===void 0&&(Os=aa("canvas")),Os.width=t.width,Os.height=t.height;let i=Os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=aa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Mi(e[i]/255)*255):e[i]=Mi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Df=0,la=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(al(s[a].image)):r.push(al(s[a]))}else r=al(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lf=0,_n=class n extends Qi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=vs,s=vs,r=si,a=_s,o=Rn,l=Si,c=n.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=$i(),this.name="",this.source=new la(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case on:t.x=t.x-Math.floor(t.x);break;case vs:t.x=t.x<0?0:1;break;case $l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case on:t.y=t.y-Math.floor(t.y);break;case vs:t.y=t.y<0?0:1;break;case $l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=cu;_n.DEFAULT_ANISOTROPY=1;var me=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],E=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-E)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+E)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(f+1)/2,T=(m+1)/2,x=(h+d)/4,w=(u+E)/4,F=(p+g)/4;return v>y&&v>T?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=x/i,r=w/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=x/s,r=F/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=w/r,s=F/r),this.set(i,s,r,e),this}let S=Math.sqrt((g-p)*(g-p)+(u-E)*(u-E)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-E)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tc=class extends Qi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new la(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ve=class extends Tc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ca=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wc=class extends _n{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],p=r[a+2],E=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=E;return}if(u!==E||l!==d||c!==f||h!==p){let g=1-o,m=l*d+c*f+h*p+u*E,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let T=Math.sqrt(v),x=Math.atan2(T,m*S);g=Math.sin(g*x)/T,o=Math.sin(o*x)/T}let y=o*S;if(l=l*g+d*y,c=c*g+f*y,h=h*g+p*y,u=u*g+E*y,g===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*__sr(),e=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ph.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let t=__sr()*Math.PI*2,e=__sr()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new C,ph=new Ai,Ms=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),Ro.subVectors(this.max,Or),zs.subVectors(t.a,Or),ks.subVectors(t.b,Or),Hs.subVectors(t.c,Or),ki.subVectors(ks,zs),Hi.subVectors(Hs,ks),hs.subVectors(zs,Hs);let e=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-hs.z,hs.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,hs.z,0,-hs.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-hs.y,hs.x,0];return!cl(e,zs,ks,Hs,Ro)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,zs,ks,Hs,Ro))?!1:(Co.crossVectors(ki,Hi),e=[Co.x,Co.y,Co.z],cl(e,zs,ks,Hs,Ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},fi=[new C,new C,new C,new C,new C,new C,new C,new C],Wn=new C,wo=new Ms,zs=new C,ks=new C,Hs=new C,ki=new C,Hi=new C,hs=new C,Or=new C,Ro=new C,Co=new C,us=new C;function cl(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){us.fromArray(n,r);let o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=t.dot(us),c=e.dot(us),h=i.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Bf=new Ms,zr=new C,hl=new C,ur=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Bf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);let e=zr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(zr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(hl)),this.expandByPoint(zr.copy(t.center).sub(hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new C,ul=new C,Fo=new C,Gi=new C,dl=new C,Po=new C,fl=new C,ha=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ul.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),Gi.copy(this.origin).sub(ul);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Fo),o=Gi.dot(this.direction),l=-Gi.dot(Fo),c=Gi.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let E=1/h;u*=E,d*=E,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ul).addScaledVector(Fo,d),f}intersectSphere(t,e){pi.subVectors(t.center,this.origin);let i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,i,s,r){dl.subVectors(e,t),Po.subVectors(i,t),fl.crossVectors(dl,Po);let a=this.direction.dot(fl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,t);let l=o*this.direction.dot(Po.crossVectors(Gi,Po));if(l<0)return null;let c=o*this.direction.dot(dl.cross(Gi));if(c<0||l+c>a)return null;let h=-o*Gi.dot(fl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class n{constructor(t,e,i,s,r,a,o,l,c,h,u,d,f,p,E,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,d,f,p,E,g)}set(t,e,i,s,r,a,o,l,c,h,u,d,f,p,E,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=E,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Gs.setFromMatrixColumn(t,0).length(),r=1/Gs.setFromMatrixColumn(t,1).length(),a=1/Gs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,E=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-E*c,e[9]=-o*l,e[2]=E-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,E=c*u;e[0]=d+E*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=E+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,E=c*u;e[0]=d-E*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=E-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,E=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+E,e[1]=l*u,e[5]=E*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,E=o*c;e[0]=l*h,e[4]=E-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-E*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,E=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+E,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=E*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uf,t,Nf)}lookAt(t,e,i){let s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Vi.crossVectors(i,Tn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Vi.crossVectors(i,Tn)),Vi.normalize(),Io.crossVectors(Tn,Vi),s[0]=Vi.x,s[4]=Io.x,s[8]=Tn.x,s[1]=Vi.y,s[5]=Io.y,s[9]=Tn.y,s[2]=Vi.z,s[6]=Io.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],E=i[6],g=i[10],m=i[14],S=i[3],v=i[7],y=i[11],T=i[15],x=s[0],w=s[4],F=s[8],A=s[12],M=s[1],P=s[5],W=s[9],k=s[13],I=s[2],z=s[6],O=s[10],$=s[14],G=s[3],ot=s[7],mt=s[11],Dt=s[15];return r[0]=a*x+o*M+l*I+c*G,r[4]=a*w+o*P+l*z+c*ot,r[8]=a*F+o*W+l*O+c*mt,r[12]=a*A+o*k+l*$+c*Dt,r[1]=h*x+u*M+d*I+f*G,r[5]=h*w+u*P+d*z+f*ot,r[9]=h*F+u*W+d*O+f*mt,r[13]=h*A+u*k+d*$+f*Dt,r[2]=p*x+E*M+g*I+m*G,r[6]=p*w+E*P+g*z+m*ot,r[10]=p*F+E*W+g*O+m*mt,r[14]=p*A+E*k+g*$+m*Dt,r[3]=S*x+v*M+y*I+T*G,r[7]=S*w+v*P+y*z+T*ot,r[11]=S*F+v*W+y*O+T*mt,r[15]=S*A+v*k+y*$+T*Dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],E=t[7],g=t[11],m=t[15];return p*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*f-i*l*f)+E*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+g*(+e*c*u-e*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+m*(-s*o*h-e*l*u+e*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],E=t[13],g=t[14],m=t[15],S=u*g*c-E*d*c+E*l*f-o*g*f-u*l*m+o*d*m,v=p*d*c-h*g*c-p*l*f+a*g*f+h*l*m-a*d*m,y=h*E*c-p*u*c+p*o*f-a*E*f-h*o*m+a*u*m,T=p*u*l-h*E*l-p*o*d+a*E*d+h*o*g-a*u*g,x=e*S+i*v+s*y+r*T;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/x;return t[0]=S*w,t[1]=(E*d*r-u*g*r-E*s*f+i*g*f+u*s*m-i*d*m)*w,t[2]=(o*g*r-E*l*r+E*s*c-i*g*c-o*s*m+i*l*m)*w,t[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*f-i*l*f)*w,t[4]=v*w,t[5]=(h*g*r-p*d*r+p*s*f-e*g*f-h*s*m+e*d*m)*w,t[6]=(p*l*r-a*g*r-p*s*c+e*g*c+a*s*m-e*l*m)*w,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*w,t[8]=y*w,t[9]=(p*u*r-h*E*r-p*i*f+e*E*f+h*i*m-e*u*m)*w,t[10]=(a*E*r-p*o*r+p*i*c-e*E*c-a*i*m+e*o*m)*w,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*f-e*o*f)*w,t[12]=T*w,t[13]=(h*E*s-p*u*s+p*i*d-e*E*d-h*i*g+e*u*g)*w,t[14]=(p*o*s-a*E*s-p*i*l+e*E*l+a*i*g-e*o*g)*w,t[15]=(a*u*s-h*o*s+h*i*l-e*u*l-a*i*d+e*o*d)*w,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,E=a*h,g=a*u,m=o*u,S=l*c,v=l*h,y=l*u,T=i.x,x=i.y,w=i.z;return s[0]=(1-(E+m))*T,s[1]=(f+y)*T,s[2]=(p-v)*T,s[3]=0,s[4]=(f-y)*x,s[5]=(1-(d+m))*x,s[6]=(g+S)*x,s[7]=0,s[8]=(p+v)*w,s[9]=(g-S)*w,s[10]=(1-(d+E))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Gs.set(s[0],s[1],s[2]).length(),a=Gs.set(s[4],s[5],s[6]).length(),o=Gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xn.copy(this);let c=1/r,h=1/a,u=1/o;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,e.setFromRotationMatrix(Xn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=_i){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,p;if(o===_i)f=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===oa)f=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=_i){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(a-r),d=(e+t)*c,f=(i+s)*h,p,E;if(o===_i)p=(a+r)*u,E=-2*u;else if(o===oa)p=r*u,E=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Gs=new C,Xn=new ue,Uf=new C(0,0,0),Nf=new C(1,1,1),Vi=new C,Io=new C,Tn=new C,mh=new ue,gh=new Ai,ai=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gh.setFromEuler(this),this.setFromQuaternion(gh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var ua=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Of=0,yh=new C,Vs=new Ai,mi=new ue,Do=new C,kr=new C,zf=new C,kf=new Ai,Eh=new C(1,0,0),vh=new C(0,1,0),_h=new C(0,0,1),Mh={type:"added"},Hf={type:"removed"},Ws={type:"childadded",child:null},pl={type:"childremoved",child:null},tn=class n extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new ai,i=new Ai,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Jt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(Eh,t)}rotateY(t){return this.rotateOnAxis(vh,t)}rotateZ(t){return this.rotateOnAxis(_h,t)}translateOnAxis(t,e){return yh.copy(t).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eh,t)}translateY(t){return this.translateOnAxis(vh,t)}translateZ(t){return this.translateOnAxis(_h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Do.copy(t):Do.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(kr,Do,this.up):mi.lookAt(Do,kr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(mi),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mh),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf),pl.child=t,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mh),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};tn.DEFAULT_UP=new C(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new C,gi=new C,ml=new C,yi=new C,Xs=new C,qs=new C,Sh=new C,gl=new C,yl=new C,El=new C,vl=new me,_l=new me,Ml=new me,Yi=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),qn.subVectors(t,e),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){qn.subVectors(s,e),gi.subVectors(i,e),ml.subVectors(t,e);let a=qn.dot(qn),o=qn.dot(gi),l=qn.dot(ml),c=gi.dot(gi),h=gi.dot(ml),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return vl.setScalar(0),_l.setScalar(0),Ml.setScalar(0),vl.fromBufferAttribute(t,e),_l.fromBufferAttribute(t,i),Ml.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(vl,r.x),a.addScaledVector(_l,r.y),a.addScaledVector(Ml,r.z),a}static isFrontFacing(t,e,i,s){return qn.subVectors(i,e),gi.subVectors(t,e),qn.cross(gi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),qn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Xs.subVectors(s,i),qs.subVectors(r,i),gl.subVectors(t,i);let l=Xs.dot(gl),c=qs.dot(gl);if(l<=0&&c<=0)return e.copy(i);yl.subVectors(t,s);let h=Xs.dot(yl),u=qs.dot(yl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Xs,a);El.subVectors(t,r);let f=Xs.dot(El),p=qs.dot(El);if(p>=0&&f<=p)return e.copy(r);let E=f*c-l*p;if(E<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(qs,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Sh.subVectors(r,s),o=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(Sh,o);let m=1/(g+E+d);return a=E*m,o=d*m,e.copy(i).addScaledVector(Xs,a).addScaledVector(qs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Sl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Nt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=Rf(t,1),e=je(e,0,1),i=je(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Sl(a,r,t+1/3),this.g=Sl(a,r,t),this.b=Sl(a,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let i=bu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return he.fromWorkingColorSpace(rn.copy(this),t),Math.round(je(rn.r*255,0,255))*65536+Math.round(je(rn.g*255,0,255))*256+Math.round(je(rn.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(rn.copy(this),e);let i=rn.r,s=rn.g,r=rn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Ue){he.fromWorkingColorSpace(rn.copy(this),t);let e=rn.r,i=rn.g,s=rn.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(Lo);let i=rl(Wi.h,Lo.h,e),s=rl(Wi.s,Lo.s,e),r=rl(Wi.l,Lo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Nt;Nt.NAMES=bu;var Gf=0,xi=class extends Qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=$i(),this.name="",this.blending=Zi,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=zl,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ol&&(i.blendSrc=this.blendSrc),this.blendDst!==zl&&(i.blendDst=this.blendDst),this.blendEquation!==ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},te=class extends xi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new C,Bo=new at,Cn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bc,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Bo.fromBufferAttribute(this,e),Bo.applyMatrix3(t),this.setXY(e,Bo.x,Bo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Se(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),t}};var da=class extends Cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var fa=class extends Cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ie=class extends Cn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Vf=0,Ln=new ue,bl=new tn,Ys=new C,wn=new Ms,Hr=new Ms,$e=new C,ke=class n extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Su(t)?fa:da)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,i){return Ln.makeTranslation(t,e,i),this.applyMatrix4(Ln),this}scale(t,e,i){return Ln.makeScale(t,e,i),this.applyMatrix4(Ln),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Hr.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(wn.min,Hr.min),wn.expandByPoint($e),$e.addVectors(wn.max,Hr.max),wn.expandByPoint($e)):(wn.expandByPoint(Hr.min),wn.expandByPoint(Hr.max))}wn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$e.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(t,c),$e.add(Ys)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new C,l[F]=new C;let c=new C,h=new C,u=new C,d=new at,f=new at,p=new at,E=new C,g=new C;function m(F,A,M){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(E.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),o[F].add(E),o[A].add(E),o[M].add(E),l[F].add(g),l[A].add(g),l[M].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let F=0,A=S.length;F<A;++F){let M=S[F],P=M.start,W=M.count;for(let k=P,I=P+W;k<I;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let v=new C,y=new C,T=new C,x=new C;function w(F){T.fromBufferAttribute(s,F),x.copy(T);let A=o[F];v.copy(A),v.sub(T.multiplyScalar(T.dot(A))).normalize(),y.crossVectors(x,A);let P=y.dot(l[F])<0?-1:1;a.setXYZW(F,v.x,v.y,v.z,P)}for(let F=0,A=S.length;F<A;++F){let M=S[F],P=M.start,W=M.count;for(let k=P,I=P+W;k<I;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),E=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?f=l[E]*o.data.stride+o.offset:f=l[E]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Cn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bh=new ue,ds=new ha,Uo=new ur,Ah=new C,No=new C,Oo=new C,zo=new C,Al=new C,ko=new C,xh=new C,Ho=new C,it=class extends tn{constructor(t=new ke,e=new te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Al.fromBufferAttribute(u,t),a?ko.addScaledVector(Al,h):ko.addScaledVector(Al.sub(e),h))}e.add(ko)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),ds.copy(t.ray).recast(t.near),!(Uo.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Uo,Ah)===null||ds.origin.distanceToSquared(Ah)>(t.far-t.near)**2))&&(bh.copy(r).invert(),ds.copy(t.ray).applyMatrix4(bh),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,E=d.length;p<E;p++){let g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=S,T=v;y<T;y+=3){let x=o.getX(y),w=o.getX(y+1),F=o.getX(y+2);s=Go(this,m,t,i,c,h,u,x,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),E=Math.min(o.count,f.start+f.count);for(let g=p,m=E;g<m;g+=3){let S=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);s=Go(this,a,t,i,c,h,u,S,v,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,E=d.length;p<E;p++){let g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=S,T=v;y<T;y+=3){let x=y,w=y+1,F=y+2;s=Go(this,m,t,i,c,h,u,x,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let g=p,m=E;g<m;g+=3){let S=g,v=g+1,y=g+2;s=Go(this,a,t,i,c,h,u,S,v,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Wf(n,t,e,i,s,r,a,o){let l;if(t.side===Ge?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ji,o),l===null)return null;Ho.copy(o),Ho.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ho);return c<e.near||c>e.far?null:{distance:c,point:Ho.clone(),object:n}}function Go(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,No),n.getVertexPosition(l,Oo),n.getVertexPosition(c,zo);let h=Wf(n,t,e,i,No,Oo,zo,xh);if(h){let u=new C;Yi.getBarycoord(xh,No,Oo,zo,u),s&&(h.uv=Yi.getInterpolatedAttribute(s,o,l,c,u,new at)),r&&(h.uv1=Yi.getInterpolatedAttribute(r,o,l,c,u,new at)),a&&(h.normal=Yi.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};Yi.getNormal(No,Oo,zo,d.normal),h.face=d,h.barycoord=u}return h}var be=class n extends ke{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,s,a,2),p("x","z","y",1,-1,t,i,-e,s,a,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function p(E,g,m,S,v,y,T,x,w,F,A){let M=y/w,P=T/F,W=y/2,k=T/2,I=x/2,z=w+1,O=F+1,$=0,G=0,ot=new C;for(let mt=0;mt<O;mt++){let Dt=mt*P-k;for(let qt=0;qt<z;qt++){let ve=qt*M-W;ot[E]=ve*S,ot[g]=Dt*v,ot[m]=I,c.push(ot.x,ot.y,ot.z),ot[E]=0,ot[g]=0,ot[m]=x>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(qt/w),u.push(1-mt/F),$+=1}}for(let mt=0;mt<F;mt++)for(let Dt=0;Dt<w;Dt++){let qt=d+Dt+z*mt,ve=d+Dt+z*(mt+1),Q=d+(Dt+1)+z*(mt+1),dt=d+(Dt+1)+z*mt;l.push(qt,ve,dt),l.push(ve,Q,dt),G+=6}o.addGroup(f,G,A),f+=G,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function dr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function dn(n){let t={};for(let e=0;e<n.length;e++){let i=dr(n[e]);for(let s in i)t[s]=i[s]}return t}function Xf(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Au(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var ns={clone:dr,merge:dn},qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ne=class extends xi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.uniformsGroups=Xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},pa=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new C,Th=new at,wh=new at,Je=class extends pa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ac*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ac*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,Th,wh),e.subVectors(wh,Th)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zs=-90,$s=1,Rc=class extends tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(Zs,$s,t,e);s.layers=this.layers,this.add(s);let r=new Je(Zs,$s,t,e);r.layers=this.layers,this.add(r);let a=new Je(Zs,$s,t,e);a.layers=this.layers,this.add(a);let o=new Je(Zs,$s,t,e);o.layers=this.layers,this.add(o);let l=new Je(Zs,$s,t,e);l.layers=this.layers,this.add(l);let c=new Je(Zs,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===_i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ma=class extends _n{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ar,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cc=class extends Ve{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ma(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new be(5,5,5),r=new Ne({name:"CubemapFromEquirect",uniforms:dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:ri});r.uniforms.tEquirect.value=e;let a=new it(s,r),o=e.minFilter;return e.minFilter===_s&&(e.minFilter=si),new Rc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},xl=new C,Zf=new C,$f=new Jt,Yn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=xl.subVectors(i,e).cross(Zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(xl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||$f.getNormalMatrix(t),s=this.coplanarPoint(xl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new ur,Vo=new C,Kr=class{constructor(t=new Yn,e=new Yn,i=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_i){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],E=s[10],g=s[11],m=s[12],S=s[13],v=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,g-f,y-m).normalize(),i[1].setComponents(l+r,d+c,g+f,y+m).normalize(),i[2].setComponents(l+a,d+h,g+p,y+S).normalize(),i[3].setComponents(l-a,d-h,g-p,y-S).normalize(),i[4].setComponents(l-o,d-u,g-E,y-v).normalize(),e===_i)i[5].setComponents(l+o,d+u,g+E,y+v).normalize();else if(e===oa)i[5].setComponents(o,u,E,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Vo.x=s.normal.x>0?t.max.x:t.min.x,Vo.y=s.normal.y>0?t.max.y:t.min.y,Vo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xu(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.__noRaf(s)}return{start:function(){t!==!0&&e!==null&&(i=n.__noRaf(s),t=!0)},stop:function(){n.__noCaf(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Jf(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],E=u[f];E.start<=p.start+p.count+1?p.count=Math.max(p.count,E.start+E.count-p.start):(++d,u[d]=E)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let E=u[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ot=class n extends ke{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],E=[],g=[];for(let m=0;m<h;m++){let S=m*d-a;for(let v=0;v<c;v++){let y=v*u-r;p.push(y,-S,0),E.push(0,0,1),g.push(v/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let v=S+c*m,y=S+c*(m+1),T=S+1+c*(m+1),x=S+1+c*m;f.push(v,y,x),f.push(y,T,x)}this.setIndex(f),this.setAttribute("position",new ie(p,3)),this.setAttribute("normal",new ie(E,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
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
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
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
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,up=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_p=`#define PI 3.141592653589793
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
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sp=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
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
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zp=`PhysicalMaterial material;
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
#endif`,$p=`struct PhysicalMaterial {
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
}`,Jp=`
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bm=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
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
}`,i1=`#if DEPTH_PACKING == 3200
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
}`,s1=`#define DISTANCE
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
}`,r1=`#define DISTANCE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
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
}`,c1=`uniform vec3 diffuse;
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
}`,h1=`#include <common>
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
}`,u1=`uniform vec3 diffuse;
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
}`,d1=`#define LAMBERT
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
}`,f1=`#define LAMBERT
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
}`,p1=`#define MATCAP
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
}`,m1=`#define MATCAP
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
}`,g1=`#define NORMAL
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
}`,y1=`#define NORMAL
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
}`,E1=`#define PHONG
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
}`,v1=`#define PHONG
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
}`,_1=`#define STANDARD
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
}`,M1=`#define STANDARD
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
}`,S1=`#define TOON
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
}`,b1=`#define TOON
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
}`,A1=`uniform float size;
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
}`,x1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,w1=`uniform vec3 color;
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
}`,R1=`uniform float rotation;
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
}`,C1=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Qf,alphahash_pars_fragment:Kf,alphamap_fragment:jf,alphamap_pars_fragment:tp,alphatest_fragment:ep,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:rp,batching_vertex:op,begin_vertex:ap,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:yp,color_pars_vertex:Ep,color_vertex:vp,common:_p,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:bp,displacementmap_vertex:Ap,emissivemap_fragment:xp,emissivemap_pars_fragment:Tp,colorspace_fragment:wp,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Fp,envmap_pars_fragment:Pp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Vp,envmap_vertex:Dp,fog_vertex:Lp,fog_pars_vertex:Bp,fog_fragment:Up,fog_pars_fragment:Np,gradientmap_pars_fragment:Op,lightmap_pars_fragment:zp,lights_lambert_fragment:kp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Gp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:qp,lights_phong_pars_fragment:Yp,lights_physical_fragment:Zp,lights_physical_pars_fragment:$p,lights_fragment_begin:Jp,lights_fragment_maps:Qp,lights_fragment_end:Kp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:om,metalnessmap_fragment:am,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:ym,normal_vertex:Em,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:bm,opaque_fragment:Am,packing:xm,premultiplied_alpha_fragment:Tm,project_vertex:wm,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Dm,shadowmap_vertex:Lm,shadowmask_pars_fragment:Bm,skinbase_vertex:Um,skinning_pars_vertex:Nm,skinning_vertex:Om,skinnormal_vertex:zm,specularmap_fragment:km,specularmap_pars_fragment:Hm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Vm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:Ym,uv_vertex:Zm,worldpos_vertex:$m,background_vert:Jm,background_frag:Qm,backgroundCube_vert:Km,backgroundCube_frag:jm,cube_vert:t1,cube_frag:e1,depth_vert:n1,depth_frag:i1,distanceRGBA_vert:s1,distanceRGBA_frag:r1,equirect_vert:o1,equirect_frag:a1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:h1,meshbasic_frag:u1,meshlambert_vert:d1,meshlambert_frag:f1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:y1,meshphong_vert:E1,meshphong_frag:v1,meshphysical_vert:_1,meshphysical_frag:M1,meshtoon_vert:S1,meshtoon_frag:b1,points_vert:A1,points_frag:x1,shadow_vert:T1,shadow_frag:w1,sprite_vert:R1,sprite_frag:C1},gt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ni={basic:{uniforms:dn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:dn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:dn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:dn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:dn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:dn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:dn([gt.points,gt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:dn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:dn([gt.common,gt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:dn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:dn([gt.sprite,gt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:dn([gt.common,gt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:dn([gt.lights,gt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};ni.physical={uniforms:dn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Wo={r:0,b:0,g:0},ps=new ai,F1=new ue;function P1(n,t,e,i,s,r,a){let o=new Nt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function E(S){let v=!1,y=p(S);y===null?m(o,l):y&&y.isColor&&(m(y,1),v=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(S,v){let y=p(v);y&&(y.isCubeTexture||y.mapping===Ia)?(h===void 0&&(h=new it(new be(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:dr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,x,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ps.copy(v.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(F1.makeRotationFromEuler(ps)),h.material.toneMapped=he.getTransfer(y.colorSpace)!==Me,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new it(new Ot(2,2),new Ne({name:"BackgroundMaterial",uniforms:dr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=he.getTransfer(y.colorSpace)!==Me,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,v){S.getRGB(Wo,Au(n)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:E,addToRenderList:g}}function I1(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(M,P,W,k,I){let z=!1,O=u(k,W,P);r!==O&&(r=O,c(r.object)),z=f(M,k,W,I),z&&p(M,k,W,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(M,P,W,k),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,P,W){let k=W.wireframe===!0,I=i[M.id];I===void 0&&(I={},i[M.id]=I);let z=I[P.id];z===void 0&&(z={},I[P.id]=z);let O=z[k];return O===void 0&&(O=d(l()),z[k]=O),O}function d(M){let P=[],W=[],k=[];for(let I=0;I<e;I++)P[I]=0,W[I]=0,k[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,P,W,k){let I=r.attributes,z=P.attributes,O=0,$=W.getAttributes();for(let G in $)if($[G].location>=0){let mt=I[G],Dt=z[G];if(Dt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Dt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Dt=M.instanceColor)),mt===void 0||mt.attribute!==Dt||Dt&&mt.data!==Dt.data)return!0;O++}return r.attributesNum!==O||r.index!==k}function p(M,P,W,k){let I={},z=P.attributes,O=0,$=W.getAttributes();for(let G in $)if($[G].location>=0){let mt=z[G];mt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor));let Dt={};Dt.attribute=mt,mt&&mt.data&&(Dt.data=mt.data),I[G]=Dt,O++}r.attributes=I,r.attributesNum=O,r.index=k}function E(){let M=r.newAttributes;for(let P=0,W=M.length;P<W;P++)M[P]=0}function g(M){m(M,0)}function m(M,P){let W=r.newAttributes,k=r.enabledAttributes,I=r.attributeDivisors;W[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),I[M]!==P&&(n.vertexAttribDivisor(M,P),I[M]=P)}function S(){let M=r.newAttributes,P=r.enabledAttributes;for(let W=0,k=P.length;W<k;W++)P[W]!==M[W]&&(n.disableVertexAttribArray(W),P[W]=0)}function v(M,P,W,k,I,z,O){O===!0?n.vertexAttribIPointer(M,P,W,I,z):n.vertexAttribPointer(M,P,W,k,I,z)}function y(M,P,W,k){E();let I=k.attributes,z=W.getAttributes(),O=P.defaultAttributeValues;for(let $ in z){let G=z[$];if(G.location>=0){let ot=I[$];if(ot===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){let mt=ot.normalized,Dt=ot.itemSize,qt=t.get(ot);if(qt===void 0)continue;let ve=qt.buffer,Q=qt.type,dt=qt.bytesPerElement,It=Q===n.INT||Q===n.UNSIGNED_INT||ot.gpuType===h0;if(ot.isInterleavedBufferAttribute){let vt=ot.data,Ht=vt.stride,Yt=ot.offset;if(vt.isInstancedInterleavedBuffer){for(let ne=0;ne<G.locationSize;ne++)m(G.location+ne,vt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ne=0;ne<G.locationSize;ne++)g(G.location+ne);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let ne=0;ne<G.locationSize;ne++)v(G.location+ne,Dt/G.locationSize,Q,mt,Ht*dt,(Yt+Dt/G.locationSize*ne)*dt,It)}else{if(ot.isInstancedBufferAttribute){for(let vt=0;vt<G.locationSize;vt++)m(G.location+vt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let vt=0;vt<G.locationSize;vt++)g(G.location+vt);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let vt=0;vt<G.locationSize;vt++)v(G.location+vt,Dt/G.locationSize,Q,mt,Dt*dt,Dt/G.locationSize*vt*dt,It)}}else if(O!==void 0){let mt=O[$];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv(G.location,mt);break;case 3:n.vertexAttrib3fv(G.location,mt);break;case 4:n.vertexAttrib4fv(G.location,mt);break;default:n.vertexAttrib1fv(G.location,mt)}}}}S()}function T(){F();for(let M in i){let P=i[M];for(let W in P){let k=P[W];for(let I in k)h(k[I].object),delete k[I];delete P[W]}delete i[M]}}function x(M){if(i[M.id]===void 0)return;let P=i[M.id];for(let W in P){let k=P[W];for(let I in k)h(k[I].object),delete k[I];delete P[W]}delete i[M.id]}function w(M){for(let P in i){let W=i[P];if(W[M.id]===void 0)continue;let k=W[M.id];for(let I in k)h(k[I].object),delete k[I];delete W[M.id]}}function F(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:x,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:g,disableUnusedAttributes:S}}function D1(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let p=0;for(let E=0;E<u;E++)p+=h[E]*d[E];e.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function L1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Rn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let F=w===an&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Si&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==vi&&!F)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,x=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:E,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:T,maxSamples:x}}function B1(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Yn,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,E=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let S=r?0:i,v=S*4,y=m.clippingState||null;l.value=y,y=h(p,d,v,f);for(let T=0;T!==v;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let E=u!==null?u.length:0,g=null;if(E!==0){if(g=l.value,p!==!0||g===null){let m=f+E*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=f;v!==E;++v,y+=4)a.copy(u[v]).applyMatrix4(S,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,g}}function U1(n){let t=new WeakMap;function e(a,o){return o===Yl?a.mapping=ar:o===Zl&&(a.mapping=lr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Yl||o===Zl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Cc(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var fr=class extends pa{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},er=4,Rh=[.125,.215,.35,.446,.526,.582],Es=20,Tl=new fr,Ch=new Nt,wl=null,Rl=0,Cl=0,Fl=!1,gs=(1+Math.sqrt(5))/2,Js=1/gs,Fh=[new C(-gs,Js,0),new C(gs,Js,0),new C(-Js,0,gs),new C(Js,0,gs),new C(0,gs,-Js),new C(0,gs,Js),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],ga=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){wl=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wl,Rl,Cl),this._renderer.xr.enabled=Fl,t.scissorTest=!1,Xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ar||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wl=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:si,minFilter:si,generateMipmaps:!1,type:an,format:Rn,colorSpace:es,depthBuffer:!1},s=Ph(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N1(r)),this._blurMaterial=O1(r,t,e)}return s}_compileMaterial(t){let e=new it(this._lodPlanes[0],t);this._renderer.compile(e,Tl)}_sceneToCubeUV(t,e,i,s){let o=new Je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ch),h.toneMapping=oi,h.autoClear=!1;let f=new te({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),p=new it(new be,f),E=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,E=!0):(f.color.copy(Ch),E=!0);for(let m=0;m<6;m++){let S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let v=this._cubeSize;Xo(s,S*v,m>2?v:0,v,v),h.setRenderTarget(s),E&&h.render(p,o),h.render(t,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ar||t.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Xo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Tl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fh[(s-r-1)%Fh.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new it(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Es-1),E=r/p,g=isFinite(r)?1+Math.floor(h*E):Es;g>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Es}`);let m=[],S=0;for(let w=0;w<Es;++w){let F=w/E,A=Math.exp(-F*F/2);m.push(A),w===0?S+=A:w<g&&(S+=2*A)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-i;let y=this._sizeLods[s],T=3*y*(s>v-er?s-v+er:0),x=4*(this._cubeSize-y);Xo(e,T,x,3*y,2*y),l.setRenderTarget(e),l.render(u,Tl)}};function N1(n){let t=[],e=[],i=[],s=n,r=n-er+1+Rh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-er?l=Rh[a-n+er-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,E=3,g=2,m=1,S=new Float32Array(E*p*f),v=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let x=0;x<f;x++){let w=x%3*2/3-1,F=x>2?0:-1,A=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];S.set(A,E*p*x),v.set(d,g*p*x);let M=[x,x,x,x,x,x];y.set(M,m*p*x)}let T=new ke;T.setAttribute("position",new Cn(S,E)),T.setAttribute("uv",new Cn(v,g)),T.setAttribute("faceIndex",new Cn(y,m)),t.push(T),s>er&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ph(n,t,e){let i=new Ve(n,t,e);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function O1(n,t,e){let i=new Float32Array(Es),s=new C(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:g0(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ih(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:g0(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Dh(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:g0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function g0(){return`

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
	`}function z1(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Yl||l===Zl,h=l===ar||l===lr;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ga(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ga(n)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function k1(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&qr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function H1(n,t,e,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let E=d.morphAttributes[p];for(let g=0,m=E.length;g<m;g++)t.remove(E[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let E=f[p];for(let g=0,m=E.length;g<m;g++)t.update(E[g],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,E=0;if(f!==null){let S=f.array;E=f.version;for(let v=0,y=S.length;v<y;v+=3){let T=S[v+0],x=S[v+1],w=S[v+2];d.push(T,x,x,w,w,T)}}else if(p!==void 0){let S=p.array;E=p.version;for(let v=0,y=S.length/3-1;v<y;v+=3){let T=v+0,x=v+1,w=v+2;d.push(T,x,x,w,w,T)}}else return;let g=new(Su(d)?fa:da)(d,1);g.version=E;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function G1(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),e.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*a,p),e.update(f,i,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function u(d,f,p,E){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],E[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,E,0,p);let m=0;for(let S=0;S<p;S++)m+=f[S]*E[S];e.update(m,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function V1(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function W1(n,t,e){let i=new WeakMap,s=new me;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let A=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),E===!0&&(v=3);let y=o.attributes.position.count*v,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let x=new Float32Array(y*T*4*u),w=new ca(x,y,T,u);w.type=vi,w.needsUpdate=!0;let F=v*4;for(let M=0;M<u;M++){let P=g[M],W=m[M],k=S[M],I=y*T*4*M;for(let z=0;z<P.count;z++){let O=z*F;f===!0&&(s.fromBufferAttribute(P,z),x[I+O+0]=s.x,x[I+O+1]=s.y,x[I+O+2]=s.z,x[I+O+3]=0),p===!0&&(s.fromBufferAttribute(W,z),x[I+O+4]=s.x,x[I+O+5]=s.y,x[I+O+6]=s.z,x[I+O+7]=0),E===!0&&(s.fromBufferAttribute(k,z),x[I+O+8]=s.x,x[I+O+9]=s.y,x[I+O+10]=s.z,x[I+O+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new at(y,T)},i.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function X1(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var pr=class extends _n{constructor(t,e,i,s,r,a,o,l,c,h=nr){if(h!==nr&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===nr&&(i=bi),i===void 0&&h===hr&&(i=cr),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Tu=new _n,Lh=new pr(1,1),wu=new ca,Ru=new wc,Cu=new ma,Bh=[],Uh=[],Nh=new Float32Array(16),Oh=new Float32Array(9),zh=new Float32Array(4);function Er(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Bh[s];if(r===void 0&&(r=new Float32Array(s),Bh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function La(n,t){let e=Uh[t];e===void 0&&(e=new Int32Array(t),Uh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function q1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Y1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Ye(e,t)}}function Z1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Ye(e,t)}}function $1(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Ye(e,t)}}function J1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;zh.set(i),n.uniformMatrix2fv(this.addr,!1,zh),Ye(e,i)}}function Q1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Oh.set(i),n.uniformMatrix3fv(this.addr,!1,Oh),Ye(e,i)}}function K1(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Nh.set(i),n.uniformMatrix4fv(this.addr,!1,Nh),Ye(e,i)}}function j1(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function t2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Ye(e,t)}}function e2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Ye(e,t)}}function n2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Ye(e,t)}}function i2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function s2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Ye(e,t)}}function r2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Ye(e,t)}}function o2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Ye(e,t)}}function a2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Lh.compareFunction=Mu,r=Lh):r=Tu,e.setTexture2D(t||r,s)}function l2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ru,s)}function c2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Cu,s)}function h2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wu,s)}function u2(n){switch(n){case 5126:return q1;case 35664:return Y1;case 35665:return Z1;case 35666:return $1;case 35674:return J1;case 35675:return Q1;case 35676:return K1;case 5124:case 35670:return j1;case 35667:case 35671:return t2;case 35668:case 35672:return e2;case 35669:case 35673:return n2;case 5125:return i2;case 36294:return s2;case 36295:return r2;case 36296:return o2;case 35678:case 36198:case 36298:case 36306:case 35682:return a2;case 35679:case 36299:case 36307:return l2;case 35680:case 36300:case 36308:case 36293:return c2;case 36289:case 36303:case 36311:case 36292:return h2}}function d2(n,t){n.uniform1fv(this.addr,t)}function f2(n,t){let e=Er(t,this.size,2);n.uniform2fv(this.addr,e)}function p2(n,t){let e=Er(t,this.size,3);n.uniform3fv(this.addr,e)}function m2(n,t){let e=Er(t,this.size,4);n.uniform4fv(this.addr,e)}function g2(n,t){let e=Er(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function y2(n,t){let e=Er(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function E2(n,t){let e=Er(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function v2(n,t){n.uniform1iv(this.addr,t)}function _2(n,t){n.uniform2iv(this.addr,t)}function M2(n,t){n.uniform3iv(this.addr,t)}function S2(n,t){n.uniform4iv(this.addr,t)}function b2(n,t){n.uniform1uiv(this.addr,t)}function A2(n,t){n.uniform2uiv(this.addr,t)}function x2(n,t){n.uniform3uiv(this.addr,t)}function T2(n,t){n.uniform4uiv(this.addr,t)}function w2(n,t,e){let i=this.cache,s=t.length,r=La(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Tu,r[a])}function R2(n,t,e){let i=this.cache,s=t.length,r=La(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ru,r[a])}function C2(n,t,e){let i=this.cache,s=t.length,r=La(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Cu,r[a])}function F2(n,t,e){let i=this.cache,s=t.length,r=La(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wu,r[a])}function P2(n){switch(n){case 5126:return d2;case 35664:return f2;case 35665:return p2;case 35666:return m2;case 35674:return g2;case 35675:return y2;case 35676:return E2;case 5124:case 35670:return v2;case 35667:case 35671:return _2;case 35668:case 35672:return M2;case 35669:case 35673:return S2;case 5125:return b2;case 36294:return A2;case 36295:return x2;case 36296:return T2;case 35678:case 36198:case 36298:case 36306:case 35682:return w2;case 35679:case 36299:case 36307:return R2;case 35680:case 36300:case 36308:case 36293:return C2;case 36289:case 36303:case 36311:case 36292:return F2}}var Fc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=u2(e.type)}},Pc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P2(e.type)}},Ic=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Pl=/(\w+)(\])?(\[|\.)?/g;function kh(n,t){n.seq.push(t),n.map[t.id]=t}function I2(n,t,e){let i=n.name,s=i.length;for(Pl.lastIndex=0;;){let r=Pl.exec(i),a=Pl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){kh(e,c===void 0?new Fc(o,n,t):new Pc(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Ic(o),kh(e,u)),e=u}}}var sr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);I2(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Hh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var D2=37297,L2=0;function B2(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Gh=new Jt;function U2(n){he._getMatrix(Gh,he.workingColorSpace,n);let t=`mat3( ${Gh.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case Da:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Vh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+B2(n.getShaderSource(t),a)}else return s}function N2(n,t){let e=U2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function O2(n,t){let e;switch(t){case hf:e="Linear";break;case uf:e="Reinhard";break;case df:e="Cineon";break;case ff:e="ACESFilmic";break;case mf:e="AgX";break;case gf:e="Neutral";break;case pf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qo=new C;function z2(){he.getLuminanceCoefficients(qo);let n=qo.x.toFixed(4),t=qo.y.toFixed(4),e=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function H2(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function G2(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Yr(n){return n!==""}function Wh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var V2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(n){return n.replace(V2,X2)}var W2=new Map;function X2(n,t){let e=jt[t];if(e===void 0){let i=W2.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Dc(e)}var q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(n){return n.replace(q2,Y2)}function Y2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Z2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===au?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===c0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function $2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ar:case lr:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function J2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lr:t="ENVMAP_MODE_REFRACTION";break}return t}function Q2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lu:t="ENVMAP_BLENDING_MULTIPLY";break;case lf:t="ENVMAP_BLENDING_MIX";break;case cf:t="ENVMAP_BLENDING_ADD";break}return t}function K2(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function j2(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Z2(e),c=$2(e),h=J2(e),u=Q2(e),d=K2(e),f=k2(e),p=H2(r),E=s.createProgram(),g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Yr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(g=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?jt.tonemapping_pars_fragment:"",e.toneMapping!==oi?O2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,N2("linearToOutputTexel",e.outputColorSpace),z2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),a=Dc(a),a=Wh(a,e),a=Xh(a,e),o=Dc(o),o=Wh(o,e),o=Xh(o,e),a=qh(a),o=qh(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=S+g+a,y=S+m+o,T=Hh(s,s.VERTEX_SHADER,v),x=Hh(s,s.FRAGMENT_SHADER,y);s.attachShader(E,T),s.attachShader(E,x),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function w(P){if(n.debug.checkShaderErrors){let W=s.getProgramInfoLog(E).trim(),k=s.getShaderInfoLog(T).trim(),I=s.getShaderInfoLog(x).trim(),z=!0,O=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,T,x);else{let $=Vh(s,T,"vertex"),G=Vh(s,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+$+`
`+G)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||I==="")&&(O=!1);O&&(P.diagnostics={runnable:z,programLog:W,vertexShader:{log:k,prefix:g},fragmentShader:{log:I,prefix:m}})}s.deleteShader(T),s.deleteShader(x),F=new sr(s,E),A=G2(s,E)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(E,D2)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=L2++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=x,this}var tg=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Bc(t),e.set(t,i)),i}},Bc=class{constructor(t){this.id=tg++,this.code=t,this.usedTimes=0}};function eg(n,t,e,i,s,r,a){let o=new ua,l=new Lc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return c.add(A),A===0?"uv":`uv${A}`}function g(A,M,P,W,k){let I=W.fog,z=k.geometry,O=A.isMeshStandardMaterial?W.environment:null,$=(A.isMeshStandardMaterial?e:t).get(A.envMap||O),G=$&&$.mapping===Ia?$.image.height:null,ot=p[A.type];A.precision!==null&&(f=s.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));let mt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Dt=mt!==void 0?mt.length:0,qt=0;z.morphAttributes.position!==void 0&&(qt=1),z.morphAttributes.normal!==void 0&&(qt=2),z.morphAttributes.color!==void 0&&(qt=3);let ve,Q,dt,It;if(ot){let _e=ni[ot];ve=_e.vertexShader,Q=_e.fragmentShader}else ve=A.vertexShader,Q=A.fragmentShader,l.update(A),dt=l.getVertexShaderID(A),It=l.getFragmentShaderID(A);let vt=n.getRenderTarget(),Ht=n.state.buffers.depth.getReversed(),Yt=k.isInstancedMesh===!0,ne=k.isBatchedMesh===!0,Ie=!!A.map,le=!!A.matcap,ze=!!$,N=!!A.aoMap,In=!!A.lightMap,se=!!A.bumpMap,re=!!A.normalMap,zt=!!A.displacementMap,Te=!!A.emissiveMap,Ut=!!A.metalnessMap,R=!!A.roughnessMap,_=A.anisotropy>0,V=A.clearcoat>0,tt=A.dispersion>0,st=A.iridescence>0,j=A.sheen>0,Lt=A.transmission>0,_t=_&&!!A.anisotropyMap,Tt=V&&!!A.clearcoatMap,ce=V&&!!A.clearcoatNormalMap,ct=V&&!!A.clearcoatRoughnessMap,wt=st&&!!A.iridescenceMap,kt=st&&!!A.iridescenceThicknessMap,Gt=j&&!!A.sheenColorMap,Rt=j&&!!A.sheenRoughnessMap,oe=!!A.specularMap,Kt=!!A.specularColorMap,Ae=!!A.specularIntensityMap,D=Lt&&!!A.transmissionMap,yt=Lt&&!!A.thicknessMap,Z=!!A.gradientMap,et=!!A.alphaMap,bt=A.alphaTest>0,Mt=!!A.alphaHash,Zt=!!A.extensions,Be=oi;A.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Be=n.toneMapping);let nn={shaderID:ot,shaderType:A.type,shaderName:A.name,vertexShader:ve,fragmentShader:Q,defines:A.defines,customVertexShaderID:dt,customFragmentShaderID:It,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:ne,batchingColor:ne&&k._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&k.instanceColor!==null,instancingMorph:Yt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:vt===null?n.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:es,alphaToCoverage:!!A.alphaToCoverage,map:Ie,matcap:le,envMap:ze,envMapMode:ze&&$.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:In,bumpMap:se,normalMap:re,displacementMap:d&&zt,emissiveMap:Te,normalMapObjectSpace:re&&A.normalMapType===_f,normalMapTangentSpace:re&&A.normalMapType===_u,metalnessMap:Ut,roughnessMap:R,anisotropy:_,anisotropyMap:_t,clearcoat:V,clearcoatMap:Tt,clearcoatNormalMap:ce,clearcoatRoughnessMap:ct,dispersion:tt,iridescence:st,iridescenceMap:wt,iridescenceThicknessMap:kt,sheen:j,sheenColorMap:Gt,sheenRoughnessMap:Rt,specularMap:oe,specularColorMap:Kt,specularIntensityMap:Ae,transmission:Lt,transmissionMap:D,thicknessMap:yt,gradientMap:Z,opaque:A.transparent===!1&&A.blending===Zi&&A.alphaToCoverage===!1,alphaMap:et,alphaTest:bt,alphaHash:Mt,combine:A.combine,mapUv:Ie&&E(A.map.channel),aoMapUv:N&&E(A.aoMap.channel),lightMapUv:In&&E(A.lightMap.channel),bumpMapUv:se&&E(A.bumpMap.channel),normalMapUv:re&&E(A.normalMap.channel),displacementMapUv:zt&&E(A.displacementMap.channel),emissiveMapUv:Te&&E(A.emissiveMap.channel),metalnessMapUv:Ut&&E(A.metalnessMap.channel),roughnessMapUv:R&&E(A.roughnessMap.channel),anisotropyMapUv:_t&&E(A.anisotropyMap.channel),clearcoatMapUv:Tt&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:ce&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&E(A.sheenRoughnessMap.channel),specularMapUv:oe&&E(A.specularMap.channel),specularColorMapUv:Kt&&E(A.specularColorMap.channel),specularIntensityMapUv:Ae&&E(A.specularIntensityMap.channel),transmissionMapUv:D&&E(A.transmissionMap.channel),thicknessMapUv:yt&&E(A.thicknessMap.channel),alphaMapUv:et&&E(A.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(re||_),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(Ie||et),fog:!!I,useFog:A.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ht,skinning:k.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:qt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ie&&A.map.isVideoTexture===!0&&he.getTransfer(A.map.colorSpace)===Me,decodeVideoTextureEmissive:Te&&A.emissiveMap.isVideoTexture===!0&&he.getTransfer(A.emissiveMap.colorSpace)===Me,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===De,flipSided:A.side===Ge,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Zt&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&A.extensions.multiDraw===!0||ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return nn.vertexUv1s=c.has(1),nn.vertexUv2s=c.has(2),nn.vertexUv3s=c.has(3),c.clear(),nn}function m(A){let M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(let P in A.defines)M.push(P),M.push(A.defines[P]);return A.isRawShaderMaterial===!1&&(S(M,A),v(M,A),M.push(n.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function S(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function v(A,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),A.push(o.mask)}function y(A){let M=p[A.type],P;if(M){let W=ni[M];P=ns.clone(W.uniforms)}else P=A.uniforms;return P}function T(A,M){let P;for(let W=0,k=h.length;W<k;W++){let I=h[W];if(I.cacheKey===M){P=I,++P.usedTimes;break}}return P===void 0&&(P=new j2(n,M,A,r),h.push(P)),P}function x(A){if(--A.usedTimes===0){let M=h.indexOf(A);h[M]=h[h.length-1],h.pop(),A.destroy()}}function w(A){l.remove(A)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:x,releaseShaderCache:w,programs:h,dispose:F}}function ng(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ig(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Zh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $h(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,d,f,p,E,g){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:E,group:g},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=E,m.group=g),t++,m}function o(u,d,f,p,E,g){let m=a(u,d,f,p,E,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,p,E,g){let m=a(u,d,f,p,E,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||ig),i.length>1&&i.sort(d||Zh),s.length>1&&s.sort(d||Zh)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function sg(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new $h,n.set(i,[a])):s>=r.length?(a=new $h,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function rg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Nt};break;case"SpotLight":e={position:new C,direction:new C,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function og(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var ag=0;function lg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function cg(n){let t=new rg,e=og(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new ue,a=new ue;function o(c){let h=0,u=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,p=0,E=0,g=0,m=0,S=0,v=0,y=0,T=0,x=0,w=0;c.sort(lg);for(let A=0,M=c.length;A<M;A++){let P=c[A],W=P.color,k=P.intensity,I=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=W.r*k,u+=W.g*k,d+=W.b*k;else if(P.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(P.sh.coefficients[O],k);w++}else if(P.isDirectionalLight){let O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,G=e.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=P.shadow.matrix,S++}i.directional[f]=O,f++}else if(P.isSpotLight){let O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(W).multiplyScalar(k),O.distance=I,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,i.spot[E]=O;let $=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,$.updateMatrices(P),P.castShadow&&x++),i.spotLightMatrix[E]=$.matrix,P.castShadow){let G=e.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.spotShadow[E]=G,i.spotShadowMap[E]=z,y++}E++}else if(P.isRectAreaLight){let O=t.get(P);O.color.copy(W).multiplyScalar(k),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=O,g++}else if(P.isPointLight){let O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let $=P.shadow,G=e.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,i.pointShadow[p]=G,i.pointShadowMap[p]=z,i.pointShadowMatrix[p]=P.shadow.matrix,v++}i.point[p]=O,p++}else if(P.isHemisphereLight){let O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(k),O.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[m]=O,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let F=i.hash;(F.directionalLength!==f||F.pointLength!==p||F.spotLength!==E||F.rectAreaLength!==g||F.hemiLength!==m||F.numDirectionalShadows!==S||F.numPointShadows!==v||F.numSpotShadows!==y||F.numSpotMaps!==T||F.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+T-x,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=w,F.directionalLength=f,F.pointLength=p,F.spotLength=E,F.rectAreaLength=g,F.hemiLength=m,F.numDirectionalShadows=S,F.numPointShadows=v,F.numSpotShadows=y,F.numSpotMaps=T,F.numLightProbes=w,i.version=ag++)}function l(c,h){let u=0,d=0,f=0,p=0,E=0,g=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){let v=c[m];if(v.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(v.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function Jh(n){let t=new cg(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function hg(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Jh(n),t.set(s,[o])):r>=a.length?(o=new Jh(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Uc=class extends xi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Nc=class extends xi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
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
}`;function fg(n,t,e){let i=new Kr,s=new at,r=new at,a=new me,o=new Uc({depthPacking:vf}),l=new Nc,c={},h=e.maxTextureSize,u={[Ji]:Ge,[Ge]:Ji,[De]:De},d=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:ug,fragmentShader:dg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ke;p.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new it(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let m=this.type;this.render=function(x,w,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||x.length===0)return;let A=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),W=n.state;W.setBlending(ri),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let k=m!==Ei&&this.type===Ei,I=m===Ei&&this.type!==Ei;for(let z=0,O=x.length;z<O;z++){let $=x[z],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ot=G.getFrameExtents();if(s.multiply(ot),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,G.mapSize.y=r.y)),G.map===null||k===!0||I===!0){let Dt=this.type!==Ei?{minFilter:fn,magFilter:fn}:{};G.map!==null&&G.map.dispose(),G.map=new Ve(s.x,s.y,Dt),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let mt=G.getViewportCount();for(let Dt=0;Dt<mt;Dt++){let qt=G.getViewport(Dt);a.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),W.viewport(a),G.updateMatrices($,Dt),i=G.getFrustum(),y(w,F,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===Ei&&S(G,F),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(A,M,P)};function S(x,w){let F=t.update(E);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Ve(s.x,s.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(w,null,F,d,E,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(w,null,F,f,E,null)}function v(x,w,F,A){let M=null,P=F.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(P!==void 0)M=P;else if(M=F.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let W=M.uuid,k=w.uuid,I=c[W];I===void 0&&(I={},c[W]=I);let z=I[k];z===void 0&&(z=M.clone(),I[k]=z,w.addEventListener("dispose",T)),M=z}if(M.visible=w.visible,M.wireframe=w.wireframe,A===Ei?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let W=n.properties.get(M);W.light=F}return M}function y(x,w,F,A,M){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===Ei)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld);let k=t.update(x),I=x.material;if(Array.isArray(I)){let z=k.groups;for(let O=0,$=z.length;O<$;O++){let G=z[O],ot=I[G.materialIndex];if(ot&&ot.visible){let mt=v(x,ot,A,M);x.onBeforeShadow(n,x,w,F,k,mt,G),n.renderBufferDirect(F,null,k,mt,x,G),x.onAfterShadow(n,x,w,F,k,mt,G)}}}else if(I.visible){let z=v(x,I,A,M);x.onBeforeShadow(n,x,w,F,k,z,null),n.renderBufferDirect(F,null,k,z,x,null),x.onAfterShadow(n,x,w,F,k,z,null)}}let W=x.children;for(let k=0,I=W.length;k<I;k++)y(W[k],w,F,A,M)}function T(x){x.target.removeEventListener("dispose",T);for(let F in c){let A=c[F],M=x.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}var pg={[kl]:Hl,[Gl]:Xl,[Vl]:ql,[or]:Wl,[Hl]:kl,[Xl]:Gl,[ql]:Vl,[Wl]:or};function mg(n,t){function e(){let D=!1,yt=new me,Z=null,et=new me(0,0,0,0);return{setMask:function(bt){Z!==bt&&!D&&(n.colorMask(bt,bt,bt,bt),Z=bt)},setLocked:function(bt){D=bt},setClear:function(bt,Mt,Zt,Be,nn){nn===!0&&(bt*=Be,Mt*=Be,Zt*=Be),yt.set(bt,Mt,Zt,Be),et.equals(yt)===!1&&(n.clearColor(bt,Mt,Zt,Be),et.copy(yt))},reset:function(){D=!1,Z=null,et.set(-1,0,0,0)}}}function i(){let D=!1,yt=!1,Z=null,et=null,bt=null;return{setReversed:function(Mt){if(yt!==Mt){let Zt=t.get("EXT_clip_control");yt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);let Be=bt;bt=null,this.setClear(Be)}yt=Mt},getReversed:function(){return yt},setTest:function(Mt){Mt?vt(n.DEPTH_TEST):Ht(n.DEPTH_TEST)},setMask:function(Mt){Z!==Mt&&!D&&(n.depthMask(Mt),Z=Mt)},setFunc:function(Mt){if(yt&&(Mt=pg[Mt]),et!==Mt){switch(Mt){case kl:n.depthFunc(n.NEVER);break;case Hl:n.depthFunc(n.ALWAYS);break;case Gl:n.depthFunc(n.LESS);break;case or:n.depthFunc(n.LEQUAL);break;case Vl:n.depthFunc(n.EQUAL);break;case Wl:n.depthFunc(n.GEQUAL);break;case Xl:n.depthFunc(n.GREATER);break;case ql:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=Mt}},setLocked:function(Mt){D=Mt},setClear:function(Mt){bt!==Mt&&(yt&&(Mt=1-Mt),n.clearDepth(Mt),bt=Mt)},reset:function(){D=!1,Z=null,et=null,bt=null,yt=!1}}}function s(){let D=!1,yt=null,Z=null,et=null,bt=null,Mt=null,Zt=null,Be=null,nn=null;return{setTest:function(_e){D||(_e?vt(n.STENCIL_TEST):Ht(n.STENCIL_TEST))},setMask:function(_e){yt!==_e&&!D&&(n.stencilMask(_e),yt=_e)},setFunc:function(_e,Gn,ui){(Z!==_e||et!==Gn||bt!==ui)&&(n.stencilFunc(_e,Gn,ui),Z=_e,et=Gn,bt=ui)},setOp:function(_e,Gn,ui){(Mt!==_e||Zt!==Gn||Be!==ui)&&(n.stencilOp(_e,Gn,ui),Mt=_e,Zt=Gn,Be=ui)},setLocked:function(_e){D=_e},setClear:function(_e){nn!==_e&&(n.clearStencil(_e),nn=_e)},reset:function(){D=!1,yt=null,Z=null,et=null,bt=null,Mt=null,Zt=null,Be=null,nn=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,E=!1,g=null,m=null,S=null,v=null,y=null,T=null,x=null,w=new Nt(0,0,0),F=0,A=!1,M=null,P=null,W=null,k=null,I=null,z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,$=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=$>=2);let ot=null,mt={},Dt=n.getParameter(n.SCISSOR_BOX),qt=n.getParameter(n.VIEWPORT),ve=new me().fromArray(Dt),Q=new me().fromArray(qt);function dt(D,yt,Z,et){let bt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(D,Mt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<Z;Zt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(yt+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return Mt}let It={};It[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),It[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),It[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(n.DEPTH_TEST),a.setFunc(or),se(!1),re(th),vt(n.CULL_FACE),N(ri);function vt(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Ht(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Yt(D,yt){return u[D]!==yt?(n.bindFramebuffer(D,yt),u[D]=yt,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=yt),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function ne(D,yt){let Z=f,et=!1;if(D){Z=d.get(yt),Z===void 0&&(Z=[],d.set(yt,Z));let bt=D.textures;if(Z.length!==bt.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,Zt=bt.length;Mt<Zt;Mt++)Z[Mt]=n.COLOR_ATTACHMENT0+Mt;Z.length=bt.length,et=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,et=!0);et&&n.drawBuffers(Z)}function Ie(D){return p!==D?(n.useProgram(D),p=D,!0):!1}let le={[ys]:n.FUNC_ADD,[Wd]:n.FUNC_SUBTRACT,[Xd]:n.FUNC_REVERSE_SUBTRACT};le[qd]=n.MIN,le[Yd]=n.MAX;let ze={[Zd]:n.ZERO,[$d]:n.ONE,[Jd]:n.SRC_COLOR,[Ol]:n.SRC_ALPHA,[nf]:n.SRC_ALPHA_SATURATE,[tf]:n.DST_COLOR,[Kd]:n.DST_ALPHA,[Qd]:n.ONE_MINUS_SRC_COLOR,[zl]:n.ONE_MINUS_SRC_ALPHA,[ef]:n.ONE_MINUS_DST_COLOR,[jd]:n.ONE_MINUS_DST_ALPHA,[sf]:n.CONSTANT_COLOR,[rf]:n.ONE_MINUS_CONSTANT_COLOR,[of]:n.CONSTANT_ALPHA,[af]:n.ONE_MINUS_CONSTANT_ALPHA};function N(D,yt,Z,et,bt,Mt,Zt,Be,nn,_e){if(D===ri){E===!0&&(Ht(n.BLEND),E=!1);return}if(E===!1&&(vt(n.BLEND),E=!0),D!==Vd){if(D!==g||_e!==A){if((m!==ys||y!==ys)&&(n.blendEquation(n.FUNC_ADD),m=ys,y=ys),_e)switch(D){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rr:n.blendFunc(n.ONE,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,v=null,T=null,x=null,w.set(0,0,0),F=0,g=D,A=_e}return}bt=bt||yt,Mt=Mt||Z,Zt=Zt||et,(yt!==m||bt!==y)&&(n.blendEquationSeparate(le[yt],le[bt]),m=yt,y=bt),(Z!==S||et!==v||Mt!==T||Zt!==x)&&(n.blendFuncSeparate(ze[Z],ze[et],ze[Mt],ze[Zt]),S=Z,v=et,T=Mt,x=Zt),(Be.equals(w)===!1||nn!==F)&&(n.blendColor(Be.r,Be.g,Be.b,nn),w.copy(Be),F=nn),g=D,A=!1}function In(D,yt){D.side===De?Ht(n.CULL_FACE):vt(n.CULL_FACE);let Z=D.side===Ge;yt&&(Z=!Z),se(Z),D.blending===Zi&&D.transparent===!1?N(ri):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let et=D.stencilWrite;o.setTest(et),et&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Te(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):Ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function re(D){D!==Hd?(vt(n.CULL_FACE),D!==P&&(D===th?n.cullFace(n.BACK):D===Gd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ht(n.CULL_FACE),P=D}function zt(D){D!==W&&(O&&n.lineWidth(D),W=D)}function Te(D,yt,Z){D?(vt(n.POLYGON_OFFSET_FILL),(k!==yt||I!==Z)&&(n.polygonOffset(yt,Z),k=yt,I=Z)):Ht(n.POLYGON_OFFSET_FILL)}function Ut(D){D?vt(n.SCISSOR_TEST):Ht(n.SCISSOR_TEST)}function R(D){D===void 0&&(D=n.TEXTURE0+z-1),ot!==D&&(n.activeTexture(D),ot=D)}function _(D,yt,Z){Z===void 0&&(ot===null?Z=n.TEXTURE0+z-1:Z=ot);let et=mt[Z];et===void 0&&(et={type:void 0,texture:void 0},mt[Z]=et),(et.type!==D||et.texture!==yt)&&(ot!==Z&&(n.activeTexture(Z),ot=Z),n.bindTexture(D,yt||It[D]),et.type=D,et.texture=yt)}function V(){let D=mt[ot];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(D){ve.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ve.copy(D))}function Rt(D){Q.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Q.copy(D))}function oe(D,yt){let Z=c.get(yt);Z===void 0&&(Z=new WeakMap,c.set(yt,Z));let et=Z.get(D);et===void 0&&(et=n.getUniformBlockIndex(yt,D.name),Z.set(D,et))}function Kt(D,yt){let et=c.get(yt).get(D);l.get(yt)!==et&&(n.uniformBlockBinding(yt,et,D.__bindingPointIndex),l.set(yt,et))}function Ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ot=null,mt={},u={},d=new WeakMap,f=[],p=null,E=!1,g=null,m=null,S=null,v=null,y=null,T=null,x=null,w=new Nt(0,0,0),F=0,A=!1,M=null,P=null,W=null,k=null,I=null,ve.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:vt,disable:Ht,bindFramebuffer:Yt,drawBuffers:ne,useProgram:Ie,setBlending:N,setMaterial:In,setFlipSided:se,setCullFace:re,setLineWidth:zt,setPolygonOffset:Te,setScissorTest:Ut,activeTexture:R,bindTexture:_,unbindTexture:V,compressedTexImage2D:tt,compressedTexImage3D:st,texImage2D:wt,texImage3D:kt,updateUBOMapping:oe,uniformBlockBinding:Kt,texStorage2D:ce,texStorage3D:ct,texSubImage2D:j,texSubImage3D:Lt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Tt,scissor:Gt,viewport:Rt,reset:Ae}}function Qh(n,t,e,i){let s=gg(i);switch(e){case fu:return n*t;case mu:return n*t;case gu:return n*t*2;case yu:return n*t/s.components*s.byteLength;case f0:return n*t/s.components*s.byteLength;case Eu:return n*t*2/s.components*s.byteLength;case p0:return n*t*2/s.components*s.byteLength;case pu:return n*t*3/s.components*s.byteLength;case Rn:return n*t*4/s.components*s.byteLength;case m0:return n*t*4/s.components*s.byteLength;case ta:case ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case na:case ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ql:case jl:return Math.max(n,16)*Math.max(t,8)/4;case Jl:case Kl:return Math.max(n,8)*Math.max(t,8)/2;case tc:case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sa:case yc:case Ec:return Math.ceil(n/4)*Math.ceil(t/4)*16;case vu:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case _c:case Mc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gg(n){switch(n){case Si:case hu:return{byteLength:1,components:1};case Qr:case uu:case an:return{byteLength:2,components:1};case u0:case d0:return{byteLength:2,components:4};case bi:case h0:case vi:return{byteLength:4,components:1};case du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function yg(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,_){return f?new OffscreenCanvas(R,_):aa("canvas")}function E(R,_,V){let tt=1,st=Ut(R);if((st.width>V||st.height>V)&&(tt=V/Math.max(st.width,st.height)),tt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let j=Math.floor(tt*st.width),Lt=Math.floor(tt*st.height);u===void 0&&(u=p(j,Lt));let _t=_?p(j,Lt):u;return _t.width=j,_t.height=Lt,_t.getContext("2d").drawImage(R,0,0,j,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+j+"x"+Lt+")."),_t}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(R,_,V,tt,st=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=_;if(_===n.RED&&(V===n.FLOAT&&(j=n.R32F),V===n.HALF_FLOAT&&(j=n.R16F),V===n.UNSIGNED_BYTE&&(j=n.R8)),_===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.R8UI),V===n.UNSIGNED_SHORT&&(j=n.R16UI),V===n.UNSIGNED_INT&&(j=n.R32UI),V===n.BYTE&&(j=n.R8I),V===n.SHORT&&(j=n.R16I),V===n.INT&&(j=n.R32I)),_===n.RG&&(V===n.FLOAT&&(j=n.RG32F),V===n.HALF_FLOAT&&(j=n.RG16F),V===n.UNSIGNED_BYTE&&(j=n.RG8)),_===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RG8UI),V===n.UNSIGNED_SHORT&&(j=n.RG16UI),V===n.UNSIGNED_INT&&(j=n.RG32UI),V===n.BYTE&&(j=n.RG8I),V===n.SHORT&&(j=n.RG16I),V===n.INT&&(j=n.RG32I)),_===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGB8UI),V===n.UNSIGNED_SHORT&&(j=n.RGB16UI),V===n.UNSIGNED_INT&&(j=n.RGB32UI),V===n.BYTE&&(j=n.RGB8I),V===n.SHORT&&(j=n.RGB16I),V===n.INT&&(j=n.RGB32I)),_===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),V===n.UNSIGNED_INT&&(j=n.RGBA32UI),V===n.BYTE&&(j=n.RGBA8I),V===n.SHORT&&(j=n.RGBA16I),V===n.INT&&(j=n.RGBA32I)),_===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),_===n.RGBA){let Lt=st?Da:he.getTransfer(tt);V===n.FLOAT&&(j=n.RGBA32F),V===n.HALF_FLOAT&&(j=n.RGBA16F),V===n.UNSIGNED_BYTE&&(j=Lt===Me?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(R,_){let V;return R?_===null||_===bi||_===cr?V=n.DEPTH24_STENCIL8:_===vi?V=n.DEPTH32F_STENCIL8:_===Qr&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===bi||_===cr?V=n.DEPTH_COMPONENT24:_===vi?V=n.DEPTH_COMPONENT32F:_===Qr&&(V=n.DEPTH_COMPONENT16),V}function T(R,_){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==si?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function x(R){let _=R.target;_.removeEventListener("dispose",x),F(_),_.isVideoTexture&&h.delete(_)}function w(R){let _=R.target;_.removeEventListener("dispose",w),M(_)}function F(R){let _=i.get(R);if(_.__webglInit===void 0)return;let V=R.source,tt=d.get(V);if(tt){let st=tt[_.__cacheKey];st.usedTimes--,st.usedTimes===0&&A(R),Object.keys(tt).length===0&&d.delete(V)}i.remove(R)}function A(R){let _=i.get(R);n.deleteTexture(_.__webglTexture);let V=R.source,tt=d.get(V);delete tt[_.__cacheKey],a.memory.textures--}function M(R){let _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(_.__webglFramebuffer[tt]))for(let st=0;st<_.__webglFramebuffer[tt].length;st++)n.deleteFramebuffer(_.__webglFramebuffer[tt][st]);else n.deleteFramebuffer(_.__webglFramebuffer[tt]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[tt])}else{if(Array.isArray(_.__webglFramebuffer))for(let tt=0;tt<_.__webglFramebuffer.length;tt++)n.deleteFramebuffer(_.__webglFramebuffer[tt]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let tt=0;tt<_.__webglColorRenderbuffer.length;tt++)_.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[tt]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let V=R.textures;for(let tt=0,st=V.length;tt<st;tt++){let j=i.get(V[tt]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(V[tt])}i.remove(R)}let P=0;function W(){P=0}function k(){let R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function I(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function z(R,_){let V=i.get(R);if(R.isVideoTexture&&zt(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){let tt=R.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,R,_);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+_)}function O(R,_){let V=i.get(R);if(R.version>0&&V.__version!==R.version){Q(V,R,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+_)}function $(R,_){let V=i.get(R);if(R.version>0&&V.__version!==R.version){Q(V,R,_);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+_)}function G(R,_){let V=i.get(R);if(R.version>0&&V.__version!==R.version){dt(V,R,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+_)}let ot={[on]:n.REPEAT,[vs]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},mt={[fn]:n.NEAREST,[yf]:n.NEAREST_MIPMAP_NEAREST,[To]:n.NEAREST_MIPMAP_LINEAR,[si]:n.LINEAR,[nl]:n.LINEAR_MIPMAP_NEAREST,[_s]:n.LINEAR_MIPMAP_LINEAR},Dt={[Mf]:n.NEVER,[wf]:n.ALWAYS,[Sf]:n.LESS,[Mu]:n.LEQUAL,[bf]:n.EQUAL,[Tf]:n.GEQUAL,[Af]:n.GREATER,[xf]:n.NOTEQUAL};function qt(R,_){if(_.type===vi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===si||_.magFilter===nl||_.magFilter===To||_.magFilter===_s||_.minFilter===si||_.minFilter===nl||_.minFilter===To||_.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ot[_.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ot[_.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ot[_.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,mt[_.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,mt[_.minFilter]),_.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Dt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===fn||_.minFilter!==To&&_.minFilter!==_s||_.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ve(R,_){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",x));let tt=_.source,st=d.get(tt);st===void 0&&(st={},d.set(tt,st));let j=I(_);if(j!==R.__cacheKey){st[j]===void 0&&(st[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),st[j].usedTimes++;let Lt=st[R.__cacheKey];Lt!==void 0&&(st[R.__cacheKey].usedTimes--,Lt.usedTimes===0&&A(_)),R.__cacheKey=j,R.__webglTexture=st[j].texture}return V}function Q(R,_,V){let tt=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(tt=n.TEXTURE_3D);let st=ve(R,_),j=_.source;e.bindTexture(tt,R.__webglTexture,n.TEXTURE0+V);let Lt=i.get(j);if(j.version!==Lt.__version||st===!0){e.activeTexture(n.TEXTURE0+V);let _t=he.getPrimaries(he.workingColorSpace),Tt=_.colorSpace===qi?null:he.getPrimaries(_.colorSpace),ce=_.colorSpace===qi||_t===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let ct=E(_.image,!1,s.maxTextureSize);ct=Te(_,ct);let wt=r.convert(_.format,_.colorSpace),kt=r.convert(_.type),Gt=v(_.internalFormat,wt,kt,_.colorSpace,_.isVideoTexture);qt(tt,_);let Rt,oe=_.mipmaps,Kt=_.isVideoTexture!==!0,Ae=Lt.__version===void 0||st===!0,D=j.dataReady,yt=T(_,ct);if(_.isDepthTexture)Gt=y(_.format===hr,_.type),Ae&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,Gt,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,Gt,ct.width,ct.height,0,wt,kt,null));else if(_.isDataTexture)if(oe.length>0){Kt&&Ae&&e.texStorage2D(n.TEXTURE_2D,yt,Gt,oe[0].width,oe[0].height);for(let Z=0,et=oe.length;Z<et;Z++)Rt=oe[Z],Kt?D&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,wt,kt,Rt.data):e.texImage2D(n.TEXTURE_2D,Z,Gt,Rt.width,Rt.height,0,wt,kt,Rt.data);_.generateMipmaps=!1}else Kt?(Ae&&e.texStorage2D(n.TEXTURE_2D,yt,Gt,ct.width,ct.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,wt,kt,ct.data)):e.texImage2D(n.TEXTURE_2D,0,Gt,ct.width,ct.height,0,wt,kt,ct.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Kt&&Ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Gt,oe[0].width,oe[0].height,ct.depth);for(let Z=0,et=oe.length;Z<et;Z++)if(Rt=oe[Z],_.format!==Rn)if(wt!==null)if(Kt){if(D)if(_.layerUpdates.size>0){let bt=Qh(Rt.width,Rt.height,_.format,_.type);for(let Mt of _.layerUpdates){let Zt=Rt.data.subarray(Mt*bt/Rt.data.BYTES_PER_ELEMENT,(Mt+1)*bt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Mt,Rt.width,Rt.height,1,wt,Zt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Rt.width,Rt.height,ct.depth,wt,Rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Gt,Rt.width,Rt.height,ct.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Rt.width,Rt.height,ct.depth,wt,kt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,Gt,Rt.width,Rt.height,ct.depth,0,wt,kt,Rt.data)}else{Kt&&Ae&&e.texStorage2D(n.TEXTURE_2D,yt,Gt,oe[0].width,oe[0].height);for(let Z=0,et=oe.length;Z<et;Z++)Rt=oe[Z],_.format!==Rn?wt!==null?Kt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,wt,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,Gt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?D&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,wt,kt,Rt.data):e.texImage2D(n.TEXTURE_2D,Z,Gt,Rt.width,Rt.height,0,wt,kt,Rt.data)}else if(_.isDataArrayTexture)if(Kt){if(Ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Gt,ct.width,ct.height,ct.depth),D)if(_.layerUpdates.size>0){let Z=Qh(ct.width,ct.height,_.format,_.type);for(let et of _.layerUpdates){let bt=ct.data.subarray(et*Z/ct.data.BYTES_PER_ELEMENT,(et+1)*Z/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,ct.width,ct.height,1,wt,kt,bt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,wt,kt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Gt,ct.width,ct.height,ct.depth,0,wt,kt,ct.data);else if(_.isData3DTexture)Kt?(Ae&&e.texStorage3D(n.TEXTURE_3D,yt,Gt,ct.width,ct.height,ct.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,wt,kt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,Gt,ct.width,ct.height,ct.depth,0,wt,kt,ct.data);else if(_.isFramebufferTexture){if(Ae)if(Kt)e.texStorage2D(n.TEXTURE_2D,yt,Gt,ct.width,ct.height);else{let Z=ct.width,et=ct.height;for(let bt=0;bt<yt;bt++)e.texImage2D(n.TEXTURE_2D,bt,Gt,Z,et,0,wt,kt,null),Z>>=1,et>>=1}}else if(oe.length>0){if(Kt&&Ae){let Z=Ut(oe[0]);e.texStorage2D(n.TEXTURE_2D,yt,Gt,Z.width,Z.height)}for(let Z=0,et=oe.length;Z<et;Z++)Rt=oe[Z],Kt?D&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,wt,kt,Rt):e.texImage2D(n.TEXTURE_2D,Z,Gt,wt,kt,Rt);_.generateMipmaps=!1}else if(Kt){if(Ae){let Z=Ut(ct);e.texStorage2D(n.TEXTURE_2D,yt,Gt,Z.width,Z.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,kt,ct)}else e.texImage2D(n.TEXTURE_2D,0,Gt,wt,kt,ct);g(_)&&m(tt),Lt.__version=j.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function dt(R,_,V){if(_.image.length!==6)return;let tt=ve(R,_),st=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);let j=i.get(st);if(st.version!==j.__version||tt===!0){e.activeTexture(n.TEXTURE0+V);let Lt=he.getPrimaries(he.workingColorSpace),_t=_.colorSpace===qi?null:he.getPrimaries(_.colorSpace),Tt=_.colorSpace===qi||Lt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ce=_.isCompressedTexture||_.image[0].isCompressedTexture,ct=_.image[0]&&_.image[0].isDataTexture,wt=[];for(let et=0;et<6;et++)!ce&&!ct?wt[et]=E(_.image[et],!0,s.maxCubemapSize):wt[et]=ct?_.image[et].image:_.image[et],wt[et]=Te(_,wt[et]);let kt=wt[0],Gt=r.convert(_.format,_.colorSpace),Rt=r.convert(_.type),oe=v(_.internalFormat,Gt,Rt,_.colorSpace),Kt=_.isVideoTexture!==!0,Ae=j.__version===void 0||tt===!0,D=st.dataReady,yt=T(_,kt);qt(n.TEXTURE_CUBE_MAP,_);let Z;if(ce){Kt&&Ae&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,oe,kt.width,kt.height);for(let et=0;et<6;et++){Z=wt[et].mipmaps;for(let bt=0;bt<Z.length;bt++){let Mt=Z[bt];_.format!==Rn?Gt!==null?Kt?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt,0,0,Mt.width,Mt.height,Gt,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt,oe,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt,0,0,Mt.width,Mt.height,Gt,Rt,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt,oe,Mt.width,Mt.height,0,Gt,Rt,Mt.data)}}}else{if(Z=_.mipmaps,Kt&&Ae){Z.length>0&&yt++;let et=Ut(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,oe,et.width,et.height)}for(let et=0;et<6;et++)if(ct){Kt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,wt[et].width,wt[et].height,Gt,Rt,wt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,oe,wt[et].width,wt[et].height,0,Gt,Rt,wt[et].data);for(let bt=0;bt<Z.length;bt++){let Zt=Z[bt].image[et].image;Kt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt+1,0,0,Zt.width,Zt.height,Gt,Rt,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt+1,oe,Zt.width,Zt.height,0,Gt,Rt,Zt.data)}}else{Kt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Gt,Rt,wt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,oe,Gt,Rt,wt[et]);for(let bt=0;bt<Z.length;bt++){let Mt=Z[bt];Kt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt+1,0,0,Gt,Rt,Mt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,bt+1,oe,Gt,Rt,Mt.image[et])}}}g(_)&&m(n.TEXTURE_CUBE_MAP),j.__version=st.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function It(R,_,V,tt,st,j){let Lt=r.convert(V.format,V.colorSpace),_t=r.convert(V.type),Tt=v(V.internalFormat,Lt,_t,V.colorSpace),ce=i.get(_),ct=i.get(V);if(ct.__renderTarget=_,!ce.__hasExternalTextures){let wt=Math.max(1,_.width>>j),kt=Math.max(1,_.height>>j);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,j,Tt,wt,kt,_.depth,0,Lt,_t,null):e.texImage2D(st,j,Tt,wt,kt,0,Lt,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),re(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,st,ct.__webglTexture,0,se(_)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,st,ct.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(R,_,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),_.depthBuffer){let tt=_.depthTexture,st=tt&&tt.isDepthTexture?tt.type:null,j=y(_.stencilBuffer,st),Lt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=se(_);re(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,j,_.width,_.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,j,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,j,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Lt,n.RENDERBUFFER,R)}else{let tt=_.textures;for(let st=0;st<tt.length;st++){let j=tt[st],Lt=r.convert(j.format,j.colorSpace),_t=r.convert(j.type),Tt=v(j.internalFormat,Lt,_t,j.colorSpace),ce=se(_);V&&re(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Tt,_.width,_.height):re(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Tt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ht(R,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=i.get(_.depthTexture);tt.__renderTarget=_,(!tt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),z(_.depthTexture,0);let st=tt.__webglTexture,j=se(_);if(_.depthTexture.format===nr)re(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,st,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,st,0);else if(_.depthTexture.format===hr)re(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,st,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Yt(R){let _=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let tt=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),tt){let st=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,tt.removeEventListener("dispose",st)};tt.addEventListener("dispose",st),_.__depthDisposeCallback=st}_.__boundDepthTexture=tt}if(R.depthTexture&&!_.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ht(_.__webglFramebuffer,R)}else if(V){_.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[tt]),_.__webglDepthbuffer[tt]===void 0)_.__webglDepthbuffer[tt]=n.createRenderbuffer(),vt(_.__webglDepthbuffer[tt],R,!1);else{let st=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),vt(_.__webglDepthbuffer,R,!1);else{let tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,st)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(R,_,V){let tt=i.get(R);_!==void 0&&It(tt.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Yt(R)}function Ie(R){let _=R.texture,V=i.get(R),tt=i.get(_);R.addEventListener("dispose",w);let st=R.textures,j=R.isWebGLCubeRenderTarget===!0,Lt=st.length>1;if(Lt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=_.version,a.memory.textures++),j){V.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[_t]=[];for(let Tt=0;Tt<_.mipmaps.length;Tt++)V.__webglFramebuffer[_t][Tt]=n.createFramebuffer()}else V.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let _t=0;_t<_.mipmaps.length;_t++)V.__webglFramebuffer[_t]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Lt)for(let _t=0,Tt=st.length;_t<Tt;_t++){let ce=i.get(st[_t]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&re(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let _t=0;_t<st.length;_t++){let Tt=st[_t];V.__webglColorRenderbuffer[_t]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[_t]);let ce=r.convert(Tt.format,Tt.colorSpace),ct=r.convert(Tt.type),wt=v(Tt.internalFormat,ce,ct,Tt.colorSpace,R.isXRRenderTarget===!0),kt=se(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,wt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,V.__webglColorRenderbuffer[_t])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),qt(n.TEXTURE_CUBE_MAP,_);for(let _t=0;_t<6;_t++)if(_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)It(V.__webglFramebuffer[_t][Tt],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt);else It(V.__webglFramebuffer[_t],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);g(_)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let _t=0,Tt=st.length;_t<Tt;_t++){let ce=st[_t],ct=i.get(ce);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),qt(n.TEXTURE_2D,ce),It(V.__webglFramebuffer,R,ce,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,0),g(ce)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,tt.__webglTexture),qt(_t,_),_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)It(V.__webglFramebuffer[Tt],R,_,n.COLOR_ATTACHMENT0,_t,Tt);else It(V.__webglFramebuffer,R,_,n.COLOR_ATTACHMENT0,_t,0);g(_)&&m(_t),e.unbindTexture()}R.depthBuffer&&Yt(R)}function le(R){let _=R.textures;for(let V=0,tt=_.length;V<tt;V++){let st=_[V];if(g(st)){let j=S(R),Lt=i.get(st).__webglTexture;e.bindTexture(j,Lt),m(j),e.unbindTexture()}}}let ze=[],N=[];function In(R){if(R.samples>0){if(re(R)===!1){let _=R.textures,V=R.width,tt=R.height,st=n.COLOR_BUFFER_BIT,j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Lt=i.get(R),_t=_.length>1;if(_t)for(let Tt=0;Tt<_.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Tt=0;Tt<_.length;Tt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),_t){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);let ce=i.get(_[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,V,tt,0,0,V,tt,st,n.NEAREST),l===!0&&(ze.length=0,N.length=0,ze.push(n.COLOR_ATTACHMENT0+Tt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ze.push(j),N.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ze))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_t)for(let Tt=0;Tt<_.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);let ce=i.get(_[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,ce,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let _=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function se(R){return Math.min(s.maxSamples,R.samples)}function re(R){let _=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function zt(R){let _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function Te(R,_){let V=R.colorSpace,tt=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==es&&V!==qi&&(he.getTransfer(V)===Me?(tt!==Rn||st!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),_}function Ut(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=ne,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=In,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=re}function Eg(n,t){function e(i,s=qi){let r,a=he.getTransfer(s);if(i===Si)return n.UNSIGNED_BYTE;if(i===u0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===d0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===du)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hu)return n.BYTE;if(i===uu)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===h0)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===vi)return n.FLOAT;if(i===an)return n.HALF_FLOAT;if(i===fu)return n.ALPHA;if(i===pu)return n.RGB;if(i===Rn)return n.RGBA;if(i===mu)return n.LUMINANCE;if(i===gu)return n.LUMINANCE_ALPHA;if(i===nr)return n.DEPTH_COMPONENT;if(i===hr)return n.DEPTH_STENCIL;if(i===yu)return n.RED;if(i===f0)return n.RED_INTEGER;if(i===Eu)return n.RG;if(i===p0)return n.RG_INTEGER;if(i===m0)return n.RGBA_INTEGER;if(i===ta||i===ea||i===na||i===ia)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jl||i===Ql||i===Kl||i===jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tc||i===ec||i===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===tc||i===ec)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc||i===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ic)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ac)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sa||i===yc||i===Ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===sa)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vu||i===vc||i===_c||i===Mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===sa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Oc=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Y=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},vg={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Y,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Y,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Y,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let E of t.hand.values()){let g=e.getJointPose(E,i),m=this._getHandJoint(c,E);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Y;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},_g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mg=`
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

}`,zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new _n,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ne({vertexShader:_g,fragmentShader:Mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Ot(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kc=class extends Qi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,E=new zc,g=e.getContextAttributes(),m=null,S=null,v=[],y=[],T=new at,x=null,w=new Je;w.viewport=new me;let F=new Je;F.viewport=new me;let A=[w,F],M=new Oc,P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let dt=v[Q];return dt===void 0&&(dt=new Zr,v[Q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Q){let dt=v[Q];return dt===void 0&&(dt=new Zr,v[Q]=dt),dt.getGripSpace()},this.getHand=function(Q){let dt=v[Q];return dt===void 0&&(dt=new Zr,v[Q]=dt),dt.getHandSpace()};function k(Q){let dt=y.indexOf(Q.inputSource);if(dt===-1)return;let It=v[dt];It!==void 0&&(It.update(Q.inputSource,Q.frame,c||a),It.dispatchEvent({type:Q.type,data:Q.inputSource}))}function I(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",z);for(let Q=0;Q<v.length;Q++){let dt=y[Q];dt!==null&&(y[Q]=null,v[Q].disconnect(dt))}P=null,W=null,E.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,S=null,ve.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",I),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){let dt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ve(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let dt=null,It=null,vt=null;g.depth&&(vt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=g.stencil?hr:nr,It=g.stencil?cr:bi);let Ht={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ht),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Ve(d.textureWidth,d.textureHeight,{format:Rn,type:Si,depthTexture:new pr(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function z(Q){for(let dt=0;dt<Q.removed.length;dt++){let It=Q.removed[dt],vt=y.indexOf(It);vt>=0&&(y[vt]=null,v[vt].disconnect(It))}for(let dt=0;dt<Q.added.length;dt++){let It=Q.added[dt],vt=y.indexOf(It);if(vt===-1){for(let Yt=0;Yt<v.length;Yt++)if(Yt>=y.length){y.push(It),vt=Yt;break}else if(y[Yt]===null){y[Yt]=It,vt=Yt;break}if(vt===-1)break}let Ht=v[vt];Ht&&Ht.connect(It)}}let O=new C,$=new C;function G(Q,dt,It){O.setFromMatrixPosition(dt.matrixWorld),$.setFromMatrixPosition(It.matrixWorld);let vt=O.distanceTo($),Ht=dt.projectionMatrix.elements,Yt=It.projectionMatrix.elements,ne=Ht[14]/(Ht[10]-1),Ie=Ht[14]/(Ht[10]+1),le=(Ht[9]+1)/Ht[5],ze=(Ht[9]-1)/Ht[5],N=(Ht[8]-1)/Ht[0],In=(Yt[8]+1)/Yt[0],se=ne*N,re=ne*In,zt=vt/(-N+In),Te=zt*-N;if(dt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Te),Q.translateZ(zt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ht[10]===-1)Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{let Ut=ne+zt,R=Ie+zt,_=se-Te,V=re+(vt-Te),tt=le*Ie/R*Ut,st=ze*Ie/R*Ut;Q.projectionMatrix.makePerspective(_,V,tt,st,Ut,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ot(Q,dt){dt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(dt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let dt=Q.near,It=Q.far;E.texture!==null&&(E.depthNear>0&&(dt=E.depthNear),E.depthFar>0&&(It=E.depthFar)),M.near=F.near=w.near=dt,M.far=F.far=w.far=It,(P!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,W=M.far),w.layers.mask=Q.layers.mask|2,F.layers.mask=Q.layers.mask|4,M.layers.mask=w.layers.mask|F.layers.mask;let vt=Q.parent,Ht=M.cameras;ot(M,vt);for(let Yt=0;Yt<Ht.length;Yt++)ot(Ht[Yt],vt);Ht.length===2?G(M,w,F):M.projectionMatrix.copy(w.projectionMatrix),mt(Q,M,vt)};function mt(Q,dt,It){It===null?Q.matrix.copy(dt.matrixWorld):(Q.matrix.copy(It.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(dt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ac*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(M)};let Dt=null;function qt(Q,dt){if(h=dt.getViewerPose(c||a),p=dt,h!==null){let It=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let vt=!1;It.length!==M.cameras.length&&(M.cameras.length=0,vt=!0);for(let Yt=0;Yt<It.length;Yt++){let ne=It[Yt],Ie=null;if(f!==null)Ie=f.getViewport(ne);else{let ze=u.getViewSubImage(d,ne);Ie=ze.viewport,Yt===0&&(t.setRenderTargetTextures(S,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),t.setRenderTarget(S))}let le=A[Yt];le===void 0&&(le=new Je,le.layers.enable(Yt),le.viewport=new me,A[Yt]=le),le.matrix.fromArray(ne.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ne.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Yt===0&&(M.matrix.copy(le.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),vt===!0&&M.cameras.push(le)}let Ht=s.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){let Yt=u.getDepthInformation(It[0]);Yt&&Yt.isValid&&Yt.texture&&E.init(t,Yt,s.renderState)}}for(let It=0;It<v.length;It++){let vt=y[It],Ht=v[It];vt!==null&&Ht!==void 0&&Ht.update(vt,dt,c||a)}Dt&&Dt(Q,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),p=null}let ve=new xu;ve.setAnimationLoop(qt),this.setAnimationLoop=function(Q){Dt=Q},this.dispose=function(){}}},ms=new ai,Sg=new ue;function bg(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Au(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),E(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ge&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ge&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),v=S.envMap,y=S.envMapRotation;v&&(g.envMap.value=v,ms.copy(y),ms.x*=-1,ms.y*=-1,ms.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),g.envMapRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(ms)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function E(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ag(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){let y=v.program;i.uniformBlockBinding(S,y)}function c(S,v){let y=s[S.id];y===void 0&&(p(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",g));let T=v.program;i.updateUBOMapping(S,T);let x=t.render.frame;r[S.id]!==x&&(d(S),r[S.id]=x)}function h(S){let v=u();S.__bindingPointIndex=v;let y=n.createBuffer(),T=S.__size,x=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let v=s[S.id],y=S.uniforms,T=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let x=0,w=y.length;x<w;x++){let F=Array.isArray(y[x])?y[x]:[y[x]];for(let A=0,M=F.length;A<M;A++){let P=F[A];if(f(P,x,A,T)===!0){let W=P.__offset,k=Array.isArray(P.value)?P.value:[P.value],I=0;for(let z=0;z<k.length;z++){let O=k[z],$=E(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,W+I,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,v,y,T){let x=S.value,w=v+"_"+y;if(T[w]===void 0)return typeof x=="number"||typeof x=="boolean"?T[w]=x:T[w]=x.clone(),!0;{let F=T[w];if(typeof x=="number"||typeof x=="boolean"){if(F!==x)return T[w]=x,!0}else if(F.equals(x)===!1)return F.copy(x),!0}return!1}function p(S){let v=S.uniforms,y=0,T=16;for(let w=0,F=v.length;w<F;w++){let A=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,P=A.length;M<P;M++){let W=A[M],k=Array.isArray(W.value)?W.value:[W.value];for(let I=0,z=k.length;I<z;I++){let O=k[I],$=E(O),G=y%T,ot=G%$.boundary,mt=G+ot;y+=ot,mt!==0&&T-mt<$.storage&&(y+=T-mt),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=$.storage}}}let x=y%T;return x>0&&(y+=T-x),S.__size=y,S.__cache={},this}function E(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function g(S){let v=S.target;v.removeEventListener("dispose",g);let y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var ya=class{constructor(t={}){let{canvas:e=Cf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),E=new Int32Array(4),g=null,m=null,S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=oi,this.toneMappingExposure=1;let y=this,T=!1,x=0,w=0,F=null,A=-1,M=null,P=new me,W=new me,k=null,I=new Nt(0),z=0,O=e.width,$=e.height,G=1,ot=null,mt=null,Dt=new me(0,0,O,$),qt=new me(0,0,O,$),ve=!1,Q=new Kr,dt=!1,It=!1,vt=new ue,Ht=new ue,Yt=new C,ne=new me,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function ze(){return F===null?G:1}let N=i;function In(b,L){return e.getContext(b,L)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${l0}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),N===null){let L="webgl2";if(N=In(L,b),N===null)throw In(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let se,re,zt,Te,Ut,R,_,V,tt,st,j,Lt,_t,Tt,ce,ct,wt,kt,Gt,Rt,oe,Kt,Ae,D;function yt(){se=new k1(N),se.init(),Kt=new Eg(N,se),re=new L1(N,se,t,Kt),zt=new mg(N,se),re.reverseDepthBuffer&&d&&zt.buffers.depth.setReversed(!0),Te=new V1(N),Ut=new ng,R=new yg(N,se,zt,Ut,re,Kt,Te),_=new U1(y),V=new z1(y),tt=new Jf(N),Ae=new I1(N,tt),st=new H1(N,tt,Te,Ae),j=new X1(N,st,tt,Te),Gt=new W1(N,re,R),ct=new B1(Ut),Lt=new eg(y,_,V,se,re,Ae,ct),_t=new bg(y,Ut),Tt=new sg,ce=new hg(se),kt=new P1(y,_,V,zt,j,f,l),wt=new fg(y,j,re),D=new Ag(N,Te,re,zt),Rt=new D1(N,se,Te),oe=new G1(N,se,Te),Te.programs=Lt.programs,y.capabilities=re,y.extensions=se,y.properties=Ut,y.renderLists=Tt,y.shadowMap=wt,y.state=zt,y.info=Te}yt();let Z=new kc(y,N);this.xr=Z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(O,$,!1))},this.getSize=function(b){return b.set(O,$)},this.setSize=function(b,L,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,$=L,e.width=Math.floor(b*G),e.height=Math.floor(L*G),X===!0&&(e.style.width=b+"px",e.style.height=L+"px"),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(O*G,$*G).floor()},this.setDrawingBufferSize=function(b,L,X){O=b,$=L,G=X,e.width=Math.floor(b*X),e.height=Math.floor(L*X),this.setViewport(0,0,b,L)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(Dt)},this.setViewport=function(b,L,X,q){b.isVector4?Dt.set(b.x,b.y,b.z,b.w):Dt.set(b,L,X,q),zt.viewport(P.copy(Dt).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(qt)},this.setScissor=function(b,L,X,q){b.isVector4?qt.set(b.x,b.y,b.z,b.w):qt.set(b,L,X,q),zt.scissor(W.copy(qt).multiplyScalar(G).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(b){zt.setScissorTest(ve=b)},this.setOpaqueSort=function(b){ot=b},this.setTransparentSort=function(b){mt=b},this.getClearColor=function(b){return b.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(b=!0,L=!0,X=!0){let q=0;if(b){let B=!1;if(F!==null){let ht=F.texture.format;B=ht===m0||ht===p0||ht===f0}if(B){let ht=F.texture.type,St=ht===Si||ht===bi||ht===Qr||ht===cr||ht===u0||ht===d0,Ct=kt.getClearColor(),Ft=kt.getClearAlpha(),Wt=Ct.r,$t=Ct.g,Pt=Ct.b;St?(p[0]=Wt,p[1]=$t,p[2]=Pt,p[3]=Ft,N.clearBufferuiv(N.COLOR,0,p)):(E[0]=Wt,E[1]=$t,E[2]=Pt,E[3]=Ft,N.clearBufferiv(N.COLOR,0,E))}else q|=N.COLOR_BUFFER_BIT}L&&(q|=N.DEPTH_BUFFER_BIT),X&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Tt.dispose(),ce.dispose(),Ut.dispose(),_.dispose(),V.dispose(),j.dispose(),Ae.dispose(),D.dispose(),Lt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",q0),Z.removeEventListener("sessionend",Y0),cs.stop()};function et(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=Te.autoReset,L=wt.enabled,X=wt.autoUpdate,q=wt.needsUpdate,B=wt.type;yt(),Te.autoReset=b,wt.enabled=L,wt.autoUpdate=X,wt.needsUpdate=q,wt.type=B}function Mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Zt(b){let L=b.target;L.removeEventListener("dispose",Zt),Be(L)}function Be(b){nn(b),Ut.remove(b)}function nn(b){let L=Ut.get(b).programs;L!==void 0&&(L.forEach(function(X){Lt.releaseProgram(X)}),b.isShaderMaterial&&Lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,X,q,B,ht){L===null&&(L=Ie);let St=B.isMesh&&B.matrixWorld.determinant()<0,Ct=Od(b,L,X,q,B);zt.setMaterial(q,St);let Ft=X.index,Wt=1;if(q.wireframe===!0){if(Ft=st.getWireframeAttribute(X),Ft===void 0)return;Wt=2}let $t=X.drawRange,Pt=X.attributes.position,fe=$t.start*Wt,xe=($t.start+$t.count)*Wt;ht!==null&&(fe=Math.max(fe,ht.start*Wt),xe=Math.min(xe,(ht.start+ht.count)*Wt)),Ft!==null?(fe=Math.max(fe,0),xe=Math.min(xe,Ft.count)):Pt!=null&&(fe=Math.max(fe,0),xe=Math.min(xe,Pt.count));let we=xe-fe;if(we<0||we===1/0)return;Ae.setup(B,q,Ct,X,Ft);let vn,ye=Rt;if(Ft!==null&&(vn=tt.get(Ft),ye=oe,ye.setIndex(vn)),B.isMesh)q.wireframe===!0?(zt.setLineWidth(q.wireframeLinewidth*ze()),ye.setMode(N.LINES)):ye.setMode(N.TRIANGLES);else if(B.isLine){let Bt=q.linewidth;Bt===void 0&&(Bt=1),zt.setLineWidth(Bt*ze()),B.isLineSegments?ye.setMode(N.LINES):B.isLineLoop?ye.setMode(N.LINE_LOOP):ye.setMode(N.LINE_STRIP)}else B.isPoints?ye.setMode(N.POINTS):B.isSprite&&ye.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ye.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ye.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Bt=B._multiDrawStarts,di=B._multiDrawCounts,Ee=B._multiDrawCount,Vn=Ft?tt.get(Ft).bytesPerElement:1,Us=Ut.get(q).currentProgram.getUniforms();for(let xn=0;xn<Ee;xn++)Us.setValue(N,"_gl_DrawID",xn),ye.render(Bt[xn]/Vn,di[xn])}else if(B.isInstancedMesh)ye.renderInstances(fe,we,B.count);else if(X.isInstancedBufferGeometry){let Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,di=Math.min(X.instanceCount,Bt);ye.renderInstances(fe,we,di)}else ye.render(fe,we)};function _e(b,L,X){b.transparent===!0&&b.side===De&&b.forceSinglePass===!1?(b.side=Ge,b.needsUpdate=!0,xo(b,L,X),b.side=Ji,b.needsUpdate=!0,xo(b,L,X),b.side=De):xo(b,L,X)}this.compile=function(b,L,X=null){X===null&&(X=b),m=ce.get(X),m.init(L),v.push(m),X.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==X&&b.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();let q=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ht=B.material;if(ht)if(Array.isArray(ht))for(let St=0;St<ht.length;St++){let Ct=ht[St];_e(Ct,X,B),q.add(Ct)}else _e(ht,X,B),q.add(ht)}),v.pop(),m=null,q},this.compileAsync=function(b,L,X=null){let q=this.compile(b,L,X);return new Promise(B=>{function ht(){if(q.forEach(function(St){Ut.get(St).currentProgram.isReady()&&q.delete(St)}),q.size===0){B(b);return}setTimeout(ht,10)}se.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Gn=null;function ui(b){Gn&&Gn(b)}function q0(){cs.stop()}function Y0(){cs.start()}let cs=new xu;cs.setAnimationLoop(ui),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(b){Gn=b,Z.setAnimationLoop(b),b===null?cs.stop():cs.start()},Z.addEventListener("sessionstart",q0),Z.addEventListener("sessionend",Y0),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(L),L=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,L,F),m=ce.get(b,v.length),m.init(L),v.push(m),Ht.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Q.setFromProjectionMatrix(Ht),It=this.localClippingEnabled,dt=ct.init(this.clippingPlanes,It),g=Tt.get(b,S.length),g.init(),S.push(g),Z.enabled===!0&&Z.isPresenting===!0){let ht=y.xr.getDepthSensingMesh();ht!==null&&el(ht,L,-1/0,y.sortObjects)}el(b,L,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ot,mt),le=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,le&&kt.addToRenderList(g,b),this.info.render.frame++,dt===!0&&ct.beginShadows();let X=m.state.shadowsArray;wt.render(X,b,L),dt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,B=g.transmissive;if(m.setupLights(),L.isArrayCamera){let ht=L.cameras;if(B.length>0)for(let St=0,Ct=ht.length;St<Ct;St++){let Ft=ht[St];$0(q,B,b,Ft)}le&&kt.render(b);for(let St=0,Ct=ht.length;St<Ct;St++){let Ft=ht[St];Z0(g,b,Ft,Ft.viewport)}}else B.length>0&&$0(q,B,b,L),le&&kt.render(b),Z0(g,b,L);F!==null&&(R.updateMultisampleRenderTarget(F),R.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(y,b,L),Ae.resetDefaultState(),A=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],dt===!0&&ct.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function el(b,L,X,q){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){q&&ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ht);let St=j.update(b),Ct=b.material;Ct.visible&&g.push(b,St,Ct,X,ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){let St=j.update(b),Ct=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ne.copy(b.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),ne.copy(St.boundingSphere.center)),ne.applyMatrix4(b.matrixWorld).applyMatrix4(Ht)),Array.isArray(Ct)){let Ft=St.groups;for(let Wt=0,$t=Ft.length;Wt<$t;Wt++){let Pt=Ft[Wt],fe=Ct[Pt.materialIndex];fe&&fe.visible&&g.push(b,St,fe,X,ne.z,Pt)}}else Ct.visible&&g.push(b,St,Ct,X,ne.z,null)}}let ht=b.children;for(let St=0,Ct=ht.length;St<Ct;St++)el(ht[St],L,X,q)}function Z0(b,L,X,q){let B=b.opaque,ht=b.transmissive,St=b.transparent;m.setupLightsView(X),dt===!0&&ct.setGlobalState(y.clippingPlanes,X),q&&zt.viewport(P.copy(q)),B.length>0&&Ao(B,L,X),ht.length>0&&Ao(ht,L,X),St.length>0&&Ao(St,L,X),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function $0(b,L,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Ve(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?an:Si,minFilter:_s,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let ht=m.state.transmissionRenderTarget[q.id],St=q.viewport||P;ht.setSize(St.z,St.w);let Ct=y.getRenderTarget();y.setRenderTarget(ht),y.getClearColor(I),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),le&&kt.render(X);let Ft=y.toneMapping;y.toneMapping=oi;let Wt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),dt===!0&&ct.setGlobalState(y.clippingPlanes,q),Ao(b,X,q),R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht),se.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Pt=0,fe=L.length;Pt<fe;Pt++){let xe=L[Pt],we=xe.object,vn=xe.geometry,ye=xe.material,Bt=xe.group;if(ye.side===De&&we.layers.test(q.layers)){let di=ye.side;ye.side=Ge,ye.needsUpdate=!0,J0(we,X,q,vn,ye,Bt),ye.side=di,ye.needsUpdate=!0,$t=!0}}$t===!0&&(R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht))}y.setRenderTarget(Ct),y.setClearColor(I,z),Wt!==void 0&&(q.viewport=Wt),y.toneMapping=Ft}function Ao(b,L,X){let q=L.isScene===!0?L.overrideMaterial:null;for(let B=0,ht=b.length;B<ht;B++){let St=b[B],Ct=St.object,Ft=St.geometry,Wt=q===null?St.material:q,$t=St.group;Ct.layers.test(X.layers)&&J0(Ct,L,X,Ft,Wt,$t)}}function J0(b,L,X,q,B,ht){b.onBeforeRender(y,L,X,q,B,ht),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(y,L,X,q,b,ht),B.transparent===!0&&B.side===De&&B.forceSinglePass===!1?(B.side=Ge,B.needsUpdate=!0,y.renderBufferDirect(X,L,q,B,b,ht),B.side=Ji,B.needsUpdate=!0,y.renderBufferDirect(X,L,q,B,b,ht),B.side=De):y.renderBufferDirect(X,L,q,B,b,ht),b.onAfterRender(y,L,X,q,B,ht)}function xo(b,L,X){L.isScene!==!0&&(L=Ie);let q=Ut.get(b),B=m.state.lights,ht=m.state.shadowsArray,St=B.state.version,Ct=Lt.getParameters(b,B.state,ht,L,X),Ft=Lt.getProgramCacheKey(Ct),Wt=q.programs;q.environment=b.isMeshStandardMaterial?L.environment:null,q.fog=L.fog,q.envMap=(b.isMeshStandardMaterial?V:_).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,Wt===void 0&&(b.addEventListener("dispose",Zt),Wt=new Map,q.programs=Wt);let $t=Wt.get(Ft);if($t!==void 0){if(q.currentProgram===$t&&q.lightsStateVersion===St)return K0(b,Ct),$t}else Ct.uniforms=Lt.getUniforms(b),b.onBeforeCompile(Ct,y),$t=Lt.acquireProgram(Ct,Ft),Wt.set(Ft,$t),q.uniforms=Ct.uniforms;let Pt=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=ct.uniform),K0(b,Ct),q.needsLights=kd(b),q.lightsStateVersion=St,q.needsLights&&(Pt.ambientLightColor.value=B.state.ambient,Pt.lightProbe.value=B.state.probe,Pt.directionalLights.value=B.state.directional,Pt.directionalLightShadows.value=B.state.directionalShadow,Pt.spotLights.value=B.state.spot,Pt.spotLightShadows.value=B.state.spotShadow,Pt.rectAreaLights.value=B.state.rectArea,Pt.ltc_1.value=B.state.rectAreaLTC1,Pt.ltc_2.value=B.state.rectAreaLTC2,Pt.pointLights.value=B.state.point,Pt.pointLightShadows.value=B.state.pointShadow,Pt.hemisphereLights.value=B.state.hemi,Pt.directionalShadowMap.value=B.state.directionalShadowMap,Pt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pt.spotShadowMap.value=B.state.spotShadowMap,Pt.spotLightMatrix.value=B.state.spotLightMatrix,Pt.spotLightMap.value=B.state.spotLightMap,Pt.pointShadowMap.value=B.state.pointShadowMap,Pt.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=$t,q.uniformsList=null,$t}function Q0(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=sr.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function K0(b,L){let X=Ut.get(b);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function Od(b,L,X,q,B){L.isScene!==!0&&(L=Ie),R.resetTextureUnits();let ht=L.fog,St=q.isMeshStandardMaterial?L.environment:null,Ct=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:es,Ft=(q.isMeshStandardMaterial?V:_).get(q.envMap||St),Wt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$t=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pt=!!X.morphAttributes.position,fe=!!X.morphAttributes.normal,xe=!!X.morphAttributes.color,we=oi;q.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(we=y.toneMapping);let vn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ye=vn!==void 0?vn.length:0,Bt=Ut.get(q),di=m.state.lights;if(dt===!0&&(It===!0||b!==M)){let Dn=b===M&&q.id===A;ct.setState(q,b,Dn)}let Ee=!1;q.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==di.state.version||Bt.outputColorSpace!==Ct||B.isBatchedMesh&&Bt.batching===!1||!B.isBatchedMesh&&Bt.batching===!0||B.isBatchedMesh&&Bt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Bt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Bt.instancing===!1||!B.isInstancedMesh&&Bt.instancing===!0||B.isSkinnedMesh&&Bt.skinning===!1||!B.isSkinnedMesh&&Bt.skinning===!0||B.isInstancedMesh&&Bt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Bt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Bt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Bt.instancingMorph===!1&&B.morphTexture!==null||Bt.envMap!==Ft||q.fog===!0&&Bt.fog!==ht||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ct.numPlanes||Bt.numIntersection!==ct.numIntersection)||Bt.vertexAlphas!==Wt||Bt.vertexTangents!==$t||Bt.morphTargets!==Pt||Bt.morphNormals!==fe||Bt.morphColors!==xe||Bt.toneMapping!==we||Bt.morphTargetsCount!==ye)&&(Ee=!0):(Ee=!0,Bt.__version=q.version);let Vn=Bt.currentProgram;Ee===!0&&(Vn=xo(q,L,B));let Us=!1,xn=!1,Ur=!1,Re=Vn.getUniforms(),ei=Bt.uniforms;if(zt.useProgram(Vn.program)&&(Us=!0,xn=!0,Ur=!0),q.id!==A&&(A=q.id,xn=!0),Us||M!==b){zt.buffers.depth.getReversed()?(vt.copy(b.projectionMatrix),Pf(vt),If(vt),Re.setValue(N,"projectionMatrix",vt)):Re.setValue(N,"projectionMatrix",b.projectionMatrix),Re.setValue(N,"viewMatrix",b.matrixWorldInverse);let Oi=Re.map.cameraPosition;Oi!==void 0&&Oi.setValue(N,Yt.setFromMatrixPosition(b.matrixWorld)),re.logarithmicDepthBuffer&&Re.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Re.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,xn=!0,Ur=!0)}if(B.isSkinnedMesh){Re.setOptional(N,B,"bindMatrix"),Re.setOptional(N,B,"bindMatrixInverse");let Dn=B.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Re.setValue(N,"boneTexture",Dn.boneTexture,R))}B.isBatchedMesh&&(Re.setOptional(N,B,"batchingTexture"),Re.setValue(N,"batchingTexture",B._matricesTexture,R),Re.setOptional(N,B,"batchingIdTexture"),Re.setValue(N,"batchingIdTexture",B._indirectTexture,R),Re.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&Re.setValue(N,"batchingColorTexture",B._colorsTexture,R));let Nr=X.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&Gt.update(B,X,Vn),(xn||Bt.receiveShadow!==B.receiveShadow)&&(Bt.receiveShadow=B.receiveShadow,Re.setValue(N,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ei.envMap.value=Ft,ei.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&L.environment!==null&&(ei.envMapIntensity.value=L.environmentIntensity),xn&&(Re.setValue(N,"toneMappingExposure",y.toneMappingExposure),Bt.needsLights&&zd(ei,Ur),ht&&q.fog===!0&&_t.refreshFogUniforms(ei,ht),_t.refreshMaterialUniforms(ei,q,G,$,m.state.transmissionRenderTarget[b.id]),sr.upload(N,Q0(Bt),ei,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(sr.upload(N,Q0(Bt),ei,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Re.setValue(N,"center",B.center),Re.setValue(N,"modelViewMatrix",B.modelViewMatrix),Re.setValue(N,"normalMatrix",B.normalMatrix),Re.setValue(N,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Dn=q.uniformsGroups;for(let Oi=0,zi=Dn.length;Oi<zi;Oi++){let j0=Dn[Oi];D.update(j0,Vn),D.bind(j0,Vn)}}return Vn}function zd(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function kd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,L,X){Ut.get(b.texture).__webglTexture=L,Ut.get(b.depthTexture).__webglTexture=X;let q=Ut.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,L){let X=Ut.get(b);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,X=0){F=b,x=L,w=X;let q=!0,B=null,ht=!1,St=!1;if(b){let Ft=Ut.get(b);if(Ft.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(N.FRAMEBUFFER,null),q=!1;else if(Ft.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Ft.__hasExternalTextures)R.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Pt=b.depthTexture;if(Ft.__boundDepthTexture!==Pt){if(Pt!==null&&Ut.has(Pt)&&(b.width!==Pt.image.width||b.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}let Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(St=!0);let $t=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($t[L])?B=$t[L][X]:B=$t[L],ht=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?B=Ut.get(b).__webglMultisampledFramebuffer:Array.isArray($t)?B=$t[X]:B=$t,P.copy(b.viewport),W.copy(b.scissor),k=b.scissorTest}else P.copy(Dt).multiplyScalar(G).floor(),W.copy(qt).multiplyScalar(G).floor(),k=ve;if(zt.bindFramebuffer(N.FRAMEBUFFER,B)&&q&&zt.drawBuffers(b,B),zt.viewport(P),zt.scissor(W),zt.setScissorTest(k),ht){let Ft=Ut.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ft.__webglTexture,X)}else if(St){let Ft=Ut.get(b.texture),Wt=L||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.__webglTexture,X||0,Wt)}A=-1},this.readRenderTargetPixels=function(b,L,X,q,B,ht,St){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){zt.bindFramebuffer(N.FRAMEBUFFER,Ct);try{let Ft=b.texture,Wt=Ft.format,$t=Ft.type;if(!re.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-q&&X>=0&&X<=b.height-B&&N.readPixels(L,X,q,B,Kt.convert(Wt),Kt.convert($t),ht)}finally{let Ft=F!==null?Ut.get(F).__webglFramebuffer:null;zt.bindFramebuffer(N.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(b,L,X,q,B,ht,St){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){let Ft=b.texture,Wt=Ft.format,$t=Ft.type;if(!re.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=b.width-q&&X>=0&&X<=b.height-B){zt.bindFramebuffer(N.FRAMEBUFFER,Ct);let Pt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.bufferData(N.PIXEL_PACK_BUFFER,ht.byteLength,N.STREAM_READ),N.readPixels(L,X,q,B,Kt.convert(Wt),Kt.convert($t),0);let fe=F!==null?Ut.get(F).__webglFramebuffer:null;zt.bindFramebuffer(N.FRAMEBUFFER,fe);let xe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ff(N,xe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ht),N.deleteBuffer(Pt),N.deleteSync(xe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,L=null,X=0){b.isTexture!==!0&&(qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,b=arguments[1]);let q=Math.pow(2,-X),B=Math.floor(b.image.width*q),ht=Math.floor(b.image.height*q),St=L!==null?L.x:0,Ct=L!==null?L.y:0;R.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,St,Ct,B,ht),zt.unbindTexture()},this.copyTextureToTexture=function(b,L,X=null,q=null,B=0){b.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],L=arguments[2],B=arguments[3]||0,X=null);let ht,St,Ct,Ft,Wt,$t,Pt,fe,xe,we=b.isCompressedTexture?b.mipmaps[B]:b.image;X!==null?(ht=X.max.x-X.min.x,St=X.max.y-X.min.y,Ct=X.isBox3?X.max.z-X.min.z:1,Ft=X.min.x,Wt=X.min.y,$t=X.isBox3?X.min.z:0):(ht=we.width,St=we.height,Ct=we.depth||1,Ft=0,Wt=0,$t=0),q!==null?(Pt=q.x,fe=q.y,xe=q.z):(Pt=0,fe=0,xe=0);let vn=Kt.convert(L.format),ye=Kt.convert(L.type),Bt;L.isData3DTexture?(R.setTexture3D(L,0),Bt=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(R.setTexture2DArray(L,0),Bt=N.TEXTURE_2D_ARRAY):(R.setTexture2D(L,0),Bt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let di=N.getParameter(N.UNPACK_ROW_LENGTH),Ee=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Vn=N.getParameter(N.UNPACK_SKIP_PIXELS),Us=N.getParameter(N.UNPACK_SKIP_ROWS),xn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,we.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,we.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ft),N.pixelStorei(N.UNPACK_SKIP_ROWS,Wt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,$t);let Ur=b.isDataArrayTexture||b.isData3DTexture,Re=L.isDataArrayTexture||L.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let ei=Ut.get(b),Nr=Ut.get(L),Dn=Ut.get(ei.__renderTarget),Oi=Ut.get(Nr.__renderTarget);zt.bindFramebuffer(N.READ_FRAMEBUFFER,Dn.__webglFramebuffer),zt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let zi=0;zi<Ct;zi++)Ur&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.get(b).__webglTexture,B,$t+zi),b.isDepthTexture?(Re&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.get(L).__webglTexture,B,xe+zi),N.blitFramebuffer(Ft,Wt,ht,St,Pt,fe,ht,St,N.DEPTH_BUFFER_BIT,N.NEAREST)):Re?N.copyTexSubImage3D(Bt,B,Pt,fe,xe+zi,Ft,Wt,ht,St):N.copyTexSubImage2D(Bt,B,Pt,fe,xe+zi,Ft,Wt,ht,St);zt.bindFramebuffer(N.READ_FRAMEBUFFER,null),zt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Re?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Bt,B,Pt,fe,xe,ht,St,Ct,vn,ye,we.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(Bt,B,Pt,fe,xe,ht,St,Ct,vn,we.data):N.texSubImage3D(Bt,B,Pt,fe,xe,ht,St,Ct,vn,ye,we):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,Pt,fe,ht,St,vn,ye,we.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,Pt,fe,we.width,we.height,vn,we.data):N.texSubImage2D(N.TEXTURE_2D,B,Pt,fe,ht,St,vn,ye,we);N.pixelStorei(N.UNPACK_ROW_LENGTH,di),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ee),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Vn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Us),N.pixelStorei(N.UNPACK_SKIP_IMAGES,xn),B===0&&L.generateMipmaps&&N.generateMipmap(Bt),zt.unbindTexture()},this.copyTextureToTexture3D=function(b,L,X=null,q=null,B=0){return b.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,b=arguments[2],L=arguments[3],B=arguments[4]||0),qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,L,X,q,B)},this.initRenderTarget=function(b){Ut.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),zt.unbindTexture()},this.resetState=function(){x=0,w=0,F=null,zt.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var mr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ea=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new C,va=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Se(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ti=class extends xi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qs,Gr=new C,Ks=new C,js=new C,tr=new at,Vr=new at,Fu=new ue,Yo=new C,Wr=new C,Zo=new C,Kh=new at,Il=new at,jh=new at,Ki=class extends tn{constructor(t=new Ti){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hc(e,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new va(i,3,0,!1)),Qs.setAttribute("uv",new va(i,2,3,!1))}this.geometry=Qs,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),Fu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-js.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;$o(Yo.set(-.5,-.5,0),js,a,Ks,s,r),$o(Wr.set(.5,-.5,0),js,a,Ks,s,r),$o(Zo.set(.5,.5,0),js,a,Ks,s,r),Kh.set(0,0),Il.set(1,0),jh.set(1,1);let o=t.ray.intersectTriangle(Yo,Wr,Zo,!1,Gr);if(o===null&&($o(Wr.set(-.5,.5,0),js,a,Ks,s,r),Il.set(0,1),o=t.ray.intersectTriangle(Yo,Zo,Wr,!1,Gr),o===null))return;let l=t.ray.origin.distanceTo(Gr);l<t.near||l>t.far||e.push({distance:l,point:Gr.clone(),uv:Yi.getInterpolation(Gr,Yo,Wr,Zo,Kh,Il,jh,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function $o(n,t,e,i,s,r){tr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Vr.x=r*tr.x-s*tr.y,Vr.y=s*tr.x+r*tr.y):Vr.copy(tr),n.copy(t),n.x+=Vr.x,n.y+=Vr.y,n.applyMatrix4(Fu)}var _a=class extends _n{constructor(t=null,e=1,i=1,s,r,a,o,l,c=fn,h=fn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jr=class extends xi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tu=new ue,Gc=new ha,Jo=new ur,Qo=new C,Ma=class extends tn{constructor(t=new ke,e=new jr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,t.ray.intersectsSphere(Jo)===!1)return;tu.copy(s).invert(),Gc.copy(t.ray).applyMatrix4(tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,E=f;p<E;p++){let g=c.getX(p);Qo.fromBufferAttribute(u,g),eu(Qo,g,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,E=f;p<E;p++)Qo.fromBufferAttribute(u,p),eu(Qo,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function eu(n,t,e,i,s,r,a){let o=Gc.distanceSqToPoint(n);if(o<e){let l=new C;Gc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Bn=class extends _n{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new C,s=[],r=[],a=[],o=new C,l=new ue;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(je(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},to=class extends Un{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Vc=class extends to{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function y0(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Ko=new C,Dl=new y0,Ll=new y0,Bl=new y0,gr=class extends Un{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ko.subVectors(s[0],s[1]).add(s[0]),c=Ko);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ko.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ko),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),E=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);E<1e-4&&(E=1),p<1e-4&&(p=E),g<1e-4&&(g=E),Dl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,E,g),Ll.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,E,g),Bl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,E,g)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ll.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Bl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Dl.calc(l),Ll.calc(l),Bl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function xg(n,t){let e=1-n;return e*e*t}function Tg(n,t){return 2*(1-n)*n*t}function wg(n,t){return n*n*t}function $r(n,t,e,i){return xg(n,t)+Tg(n,e)+wg(n,i)}function Rg(n,t){let e=1-n;return e*e*e*t}function Cg(n,t){let e=1-n;return 3*e*e*n*t}function Fg(n,t){return 3*(1-n)*n*n*t}function Pg(n,t){return n*n*n*t}function Jr(n,t,e,i,s){return Rg(n,t)+Cg(n,e)+Fg(n,i)+Pg(n,s)}var Sa=class extends Un{constructor(t=new at,e=new at,i=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new at){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Jr(t,s.x,r.x,a.x,o.x),Jr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wc=class extends Un{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Jr(t,s.x,r.x,a.x,o.x),Jr(t,s.y,r.y,a.y,o.y),Jr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ba=class extends Un{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xc=class extends Un{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends Un{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set($r(t,s.x,r.x,a.x),$r(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xa=class extends Un{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set($r(t,s.x,r.x,a.x),$r(t,s.y,r.y,a.y),$r(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ta=class extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(nu(o,l.x,c.x,h.x,u.x),nu(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},qc=Object.freeze({__proto__:null,ArcCurve:Vc,CatmullRomCurve3:gr,CubicBezierCurve:Sa,CubicBezierCurve3:Wc,EllipseCurve:to,LineCurve:ba,LineCurve3:Xc,QuadraticBezierCurve:Aa,QuadraticBezierCurve3:xa,SplineCurve:Ta}),Yc=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new qc[s.type]().fromJSON(s))}return this}},Zc=class extends Yc{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ba(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Aa(this.currentPoint.clone(),new at(t,e),new at(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Sa(this.currentPoint.clone(),new at(t,e),new at(i,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ta(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new to(t,e,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},eo=class n extends ke{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=je(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new at,f=new C,p=new C,E=new C,g=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-g,f.z=m*0,E.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(E.x,E.y,E.z);break;default:g=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=E.x,f.y+=E.y,f.z+=E.z,f.normalize(),l.push(f.x,f.y,f.z),E.copy(p)}for(let S=0;S<=e;S++){let v=i+S*h*s,y=Math.sin(v),T=Math.cos(v);for(let x=0;x<=t.length-1;x++){u.x=t[x].x*y,u.y=t[x].y,u.z=t[x].x*T,a.push(u.x,u.y,u.z),d.x=S/e,d.y=x/(t.length-1),o.push(d.x,d.y);let w=l[3*x+0]*y,F=l[3*x+1],A=l[3*x+0]*T;c.push(w,F,A)}}for(let S=0;S<e;S++)for(let v=0;v<t.length-1;v++){let y=v+S*t.length,T=y,x=y+t.length,w=y+t.length+1,F=y+1;r.push(T,x,F),r.push(w,F,x)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("uv",new ie(o,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},wa=class n extends eo{constructor(t=1,e=1,i=4,s=8){let r=new Zc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},Mn=class n extends ke{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qe=class n extends ke{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,E=[],g=i/2,m=0;S(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function S(){let y=new C,T=new C,x=0,w=(e-t)/i;for(let F=0;F<=r;F++){let A=[],M=F/r,P=M*(e-t)+t;for(let W=0;W<=s;W++){let k=W/s,I=k*l+o,z=Math.sin(I),O=Math.cos(I);T.x=P*z,T.y=-M*i+g,T.z=P*O,u.push(T.x,T.y,T.z),y.set(z,w,O).normalize(),d.push(y.x,y.y,y.z),f.push(k,1-M),A.push(p++)}E.push(A)}for(let F=0;F<s;F++)for(let A=0;A<r;A++){let M=E[A][F],P=E[A+1][F],W=E[A+1][F+1],k=E[A][F+1];(t>0||A!==0)&&(h.push(M,P,k),x+=3),(e>0||A!==r-1)&&(h.push(P,W,k),x+=3)}c.addGroup(m,x,0),m+=x}function v(y){let T=p,x=new at,w=new C,F=0,A=y===!0?t:e,M=y===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;let P=p;for(let W=0;W<=s;W++){let I=W/s*l+o,z=Math.cos(I),O=Math.sin(I);w.x=A*O,w.y=g*M,w.z=A*z,u.push(w.x,w.y,w.z),d.push(0,M,0),x.x=z*.5+.5,x.y=O*.5*M+.5,f.push(x.x,x.y),p++}for(let W=0;W<s;W++){let k=T+W,I=P+W;y===!0?h.push(I,I+1,k):h.push(I+1,I,k),F+=3}c.addGroup(m,F,y===!0?1:2),m+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},li=class n extends Qe{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$c=class n extends ke{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let v=new C,y=new C,T=new C;for(let x=0;x<e.length;x+=3)f(e[x+0],v),f(e[x+1],y),f(e[x+2],T),l(v,y,T,S)}function l(S,v,y,T){let x=T+1,w=[];for(let F=0;F<=x;F++){w[F]=[];let A=S.clone().lerp(y,F/x),M=v.clone().lerp(y,F/x),P=x-F;for(let W=0;W<=P;W++)W===0&&F===x?w[F][W]=A:w[F][W]=A.clone().lerp(M,W/P)}for(let F=0;F<x;F++)for(let A=0;A<2*(x-F)-1;A++){let M=Math.floor(A/2);A%2===0?(d(w[F][M+1]),d(w[F+1][M]),d(w[F][M])):(d(w[F][M+1]),d(w[F+1][M+1]),d(w[F+1][M]))}}function c(S){let v=new C;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(S),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let S=new C;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let y=g(S)/2/Math.PI+.5,T=m(S)/Math.PI+.5;a.push(y,1-T)}p(),u()}function u(){for(let S=0;S<a.length;S+=6){let v=a[S+0],y=a[S+2],T=a[S+4],x=Math.max(v,y,T),w=Math.min(v,y,T);x>.9&&w<.1&&(v<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,v){let y=S*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function p(){let S=new C,v=new C,y=new C,T=new C,x=new at,w=new at,F=new at;for(let A=0,M=0;A<r.length;A+=9,M+=6){S.set(r[A+0],r[A+1],r[A+2]),v.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),x.set(a[M+0],a[M+1]),w.set(a[M+2],a[M+3]),F.set(a[M+4],a[M+5]),T.copy(S).add(v).add(y).divideScalar(3);let P=g(T);E(x,M+0,S,P),E(w,M+2,v,P),E(F,M+4,y,P)}}function E(S,v,y,T){T<0&&S.x===1&&(a[v]=S.x-1),y.x===0&&y.z===0&&(a[v]=T/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var Ra=class n extends $c{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var ee=class n extends ke{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],p=[],E=[],g=[];for(let m=0;m<=i;m++){let S=[],v=m/i,y=0;m===0&&a===0?y=.5/e:m===i&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){let x=T/e;u.x=-t*Math.cos(s+x*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+x*r)*Math.sin(a+v*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),E.push(d.x,d.y,d.z),g.push(x+y,1-v),S.push(c++)}h.push(S)}for(let m=0;m<i;m++)for(let S=0;S<e;S++){let v=h[m][S+1],y=h[m][S],T=h[m+1][S],x=h[m+1][S+1];(m!==0||a>0)&&f.push(v,y,x),(m!==i-1||l<Math.PI)&&f.push(y,T,x)}this.setIndex(f),this.setAttribute("position",new ie(p,3)),this.setAttribute("normal",new ie(E,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Zn=class n extends ke{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){let E=p/s*r,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(E),u.y=(t+e*Math.cos(g))*Math.sin(E),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(E),h.y=t*Math.sin(E),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){let E=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,S=(s+1)*f+p;a.push(E,g,S),a.push(g,m,S)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var no=class n extends ke{constructor(t=new xa(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new at,h=new C,u=[],d=[],f=[],p=[];E(),this.setIndex(p),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function E(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),S(),m()}function g(v){h=t.getPointAt(v/e,h);let y=a.normals[v],T=a.binormals[v];for(let x=0;x<=s;x++){let w=x/s*Math.PI*2,F=Math.sin(w),A=-Math.cos(w);l.x=A*y.x+F*T.x,l.y=A*y.y+F*T.y,l.z=A*y.z+F*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=e;v++)for(let y=1;y<=s;y++){let T=(s+1)*(v-1)+(y-1),x=(s+1)*v+(y-1),w=(s+1)*v+y,F=(s+1)*(v-1)+y;p.push(T,x,F),p.push(x,w,F)}}function S(){for(let v=0;v<=e;v++)for(let y=0;y<=s;y++)c.x=v/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new qc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var We=class extends xi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Nt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function jo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ig(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var yr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jc=class extends yr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sh:r=t,o=2*e-i;break;case rh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case sh:a=t,l=2*i-e;break;case rh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),E=p*p,g=E*p,m=-d*g+2*d*E-d*p,S=(1+d)*g+(-1.5-2*d)*E+(-.5+d)*p+1,v=(-1-f)*g+(1.5+f)*E+.5*p,y=f*g-f*E;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+S*a[c+T]+v*a[l+T]+y*a[u+T];return r}},Qc=class extends yr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Kc=class extends yr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$n=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jo(e,this.TimeBufferType),this.values=jo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:jo(t.times,Array),values:jo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ra:e=this.InterpolantFactoryMethodDiscrete;break;case Sc:e=this.InterpolantFactoryMethodLinear;break;case il:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return Sc;case this.InterpolantFactoryMethodSmooth:return il}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ig(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===il,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let E=e[u+p];if(E!==e[d+p]||E!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Sc;var Ss=class extends $n{constructor(t,e,i){super(t,e,i)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=ra;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends $n{};jc.prototype.ValueTypeName="color";var t0=class extends $n{};t0.prototype.ValueTypeName="number";var e0=class extends yr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ai.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ca=class extends $n{InterpolantFactoryMethodLinear(t){return new e0(this.times,this.values,this.getValueSize(),t)}};Ca.prototype.ValueTypeName="quaternion";Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends $n{constructor(t,e,i){super(t,e,i)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=ra;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var n0=class extends $n{};n0.prototype.ValueTypeName="vector";var i0=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},Dg=new i0,s0=class{constructor(t){this.manager=t!==void 0?t:Dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};s0.DEFAULT_MATERIAL_NAME="__DEFAULT";var io=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ji=class extends io{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ul=new ue,iu=new C,su=new C,Fa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(iu),su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(su),e.updateMatrixWorld(),Ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ru=new ue,Xr=new C,Nl=new C,r0=class extends Fa{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Xr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Xr),Nl.copy(i.position),Nl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Nl),i.updateMatrixWorld(),s.makeTranslation(-Xr.x,-Xr.y,-Xr.z),ru.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru)}},Ze=class extends io{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new r0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},o0=class extends Fa{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ts=class extends io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new o0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Pa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ou();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ou(){return 0}var E0="\\[\\]\\.:\\/",Lg=new RegExp("["+E0+"]","g"),v0="[^"+E0+"]",Bg="[^"+E0.replace("\\.","")+"]",Ug=/((?:WC+[\/:])*)/.source.replace("WC",v0),Ng=/(WCOD+)?/.source.replace("WCOD",Bg),Og=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",v0),zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",v0),kg=new RegExp("^"+Ug+Ng+Og+zg+"$"),Hg=["material","materials","bones","map"],a0=class{constructor(t,e,i){let s=i||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Fe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lg,"")}static parseTrackName(t){let e=kg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Hg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=a0;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:l0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=l0);var Ba={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var wi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Gg=new fr(-1,1,1,-1,0,1),_0=class extends ke{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}},Vg=new _0,vr=class{constructor(t){this._mesh=new it(Vg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Gg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var As=class extends wi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ne?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ns.clone(t.uniforms),this.material=new Ne({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new vr(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var so=class extends wi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ua=class extends wi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Na=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new at);this._width=i.width,this._height=i.height,e=new Ve(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new As(Ba),this.copyPass.material.blending=ri,this.clock=new Pa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}so!==void 0&&(a instanceof so?i=!0:a instanceof Ua&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Pu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Nt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _r=class n extends wi{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new Nt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ve(r,a,{type:an}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ve(r,a,{type:an});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ve(r,a,{type:an});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Pu;this.highPassUniforms=ns.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ne({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ba;this.copyUniforms=ns.clone(h.uniforms),this.blendMaterial=new Ne({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:rr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Nt,this.oldClearAlpha=1,this.basic=new te,this.fsQuad=new vr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ne({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ne({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};_r.BlurDirectionX=new at(1,0);_r.BlurDirectionY=new at(0,1);var Ri=1920,Ci=1080;function Pe(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Xe=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),At=(n,t,e)=>n+(t-n)*e,lt=(n,t,e)=>{let i=Xe((e-n)/(t-n));return i*i*(3-2*i)};var Wg=n=>(n=Xe(n),n*n*(3-2*n));function M0(n,t){if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){let i=Wg((t-n[e-1][0])/(n[e][0]-n[e-1][0])),s=n[e-1][1],r=n[e][1];return Array.isArray(s)?s.map((a,o)=>At(a,r[o],i)):At(s,r,i)}return n[n.length-1][1]}var Xg={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new at(Ri,Ci)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){if(maxBlur<.6){gl_FragColor=vec4(texture2D(tColor,vUv).rgb,1.);return;}float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<44;i++){float fi=float(i);float r=sqrt(fi/44.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},qg={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new Nt(1,1,1)},sat:{value:1},flash:{value:0},toon:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash,toon;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=mix(aces(c*.88),c/(1.+.18*c),toon);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(1.,.66);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1920.,1080.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Oa=class{constructor(t){let e=this.r=new ya({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(Ri,Ci,!1),e.shadowMap.enabled=!0,e.shadowMap.type=c0,e.toneMapping=oi,e.outputColorSpace=es;let i=new pr(Ri,Ci);i.type=bi,this.rt=new Ve(Ri,Ci,{type:an,samples:4,depthTexture:i}),this.composer=new Na(e,new Ve(Ri,Ci,{type:an})),this.dof=new As(Xg,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new _r(new at(Ri/2,Ci/2),.45,.75,.82),this.grade=new As(qg),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(a=>t>=a.t0&&t<a.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let i=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.toon.value=i.toon??0,r.frame.value=Math.floor(t*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function Iu(n,t,e,i=40){let s=new Ea;s.background=new Nt(e);let r=new Je(i,Ri/Ci,.08,400);return{t0:n,t1:t,scene:s,camera:r,update(){return{}}}}function Du(n,t,e,i=0){n.position.set(t[0],t[1],t[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(e[0],e[1],e[2])}var ro=new C;function Nn(n,t,e,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;ro.copy(t),ro[i]=0,ro.normalize();let c=.5*a/(a+o),h=1-ro.angleTo(n)/l;return Math.sign(ro[e])===1?h*c:o/(a+o)+c+c*(1-h)}var za=class extends be{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new C,l=new C,c=new C(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new C,E=.5/s;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*E,l.y-=Math.sign(l.y)*E,l.z-=Math.sign(l.z)*E,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*r,h[g+1]=c.y*Math.sign(o.y)+l.y*r,h[g+2]=c.z*Math.sign(o.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=Nn(p,l,"z","y",r,i),d[m+1]=1-Nn(p,l,"y","z",r,e);break;case 1:p.set(-1,0,0),d[m+0]=1-Nn(p,l,"z","y",r,i),d[m+1]=1-Nn(p,l,"y","z",r,e);break;case 2:p.set(0,1,0),d[m+0]=1-Nn(p,l,"x","z",r,t),d[m+1]=Nn(p,l,"z","x",r,i);break;case 3:p.set(0,-1,0),d[m+0]=1-Nn(p,l,"x","z",r,t),d[m+1]=1-Nn(p,l,"z","x",r,i);break;case 4:p.set(0,0,1),d[m+0]=1-Nn(p,l,"x","y",r,t),d[m+1]=1-Nn(p,l,"y","x",r,e);break;case 5:p.set(0,0,-1),d[m+0]=Nn(p,l,"x","y",r,t),d[m+1]=1-Nn(p,l,"y","x",r,e);break}}};var is=null;function x0(){if(is)return is;let n=new Uint8Array([118,118,118,255,196,196,196,255,255,255,255,255]);return is=new _a(n,3,1,Rn),is.minFilter=is.magFilter=fn,is.generateMipmaps=!1,is.needsUpdate=!0,is}var S0=new Map;function xt(n,t){if(!t){let e=String(n);if(S0.has(e))return S0.get(e);let i=new We({color:n,gradientMap:x0()});return S0.set(e,i),i}return new We({color:n,gradientMap:x0(),...t})}var Yg=`uniform float w; uniform float minPx; uniform vec2 res;
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
}`,Zg="uniform vec3 col; uniform float op; void main(){ gl_FragColor = vec4(col, op); }",b0=new Map;function $g(n=.014,t="#17131C",e=1.6){let i=n+t+e;if(b0.has(i))return b0.get(i);let s=new Ne({uniforms:{w:{value:n},minPx:{value:e},res:{value:new at(Ri,Ci)},col:{value:new Nt(t).convertSRGBToLinear()},op:{value:1}},vertexShader:Yg,fragmentShader:Zg,side:Ge});return b0.set(i,s),s}function Fi(n,t=.014,e,i){let s=new it(n.geometry,$g(t,e,i));return s.castShadow=!1,s.receiveShadow=!1,s.userData.isOutline=!0,n.add(s),n}function mn(n,t,e={}){let i=new it(n,t&&t.isMaterial?t:xt(t));return i.castShadow=e.shadow??!0,i.receiveShadow=!0,e.out&&Fi(i,e.out===!0?.014:e.out,e.outCol,e.minPx),e.pos&&i.position.set(...e.pos),e.rot&&i.rotation.set(...e.rot),i}var ss=(n,t,e,i=.04,s=3)=>new za(n,t,e,s,Math.min(i,n/2-.001,t/2-.001,e/2-.001));function H(n,t,e,i,s=0,r=0,a=0,o={}){return mn(ss(n,t,e,o.r??Math.min(.05,Math.min(n,t,e)*.18)),i,{pos:[s,r,a],...o})}function ft(n,t,e,i,s=0,r=0,a=0,o={}){return mn(new be(n,t,e),i,{pos:[s,r,a],...o})}function J(n,t,e,i,s=0,r=0,a=0,o={}){return mn(new Qe(n,t,e,o.seg||24),i,{pos:[s,r,a],...o})}function de(n,t,e=0,i=0,s=0,r={}){return mn(new ee(n,r.seg||24,Math.max(12,(r.seg||24)*.6|0)),t,{pos:[e,i,s],...r})}function Qt(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t;let s=i.getContext("2d");e(s,n,t);let r=new Bn(i);return r.colorSpace=Ue,r.anisotropy=8,r}var pe=(n,t={})=>new We({map:n,gradientMap:x0(),...t}),A0=null;function xs(n=.32,t=.38){A0||(A0=Qt(128,128,i=>{let s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(20,16,30,1)"),s.addColorStop(.55,"rgba(20,16,30,.55)"),s.addColorStop(1,"rgba(20,16,30,0)"),i.fillStyle=s,i.fillRect(0,0,128,128)}));let e=new it(new Ot(n*2,n*2),new te({map:A0,transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return e.rotation.x=-Math.PI/2,e.renderOrder=1,e}function Mr(n,t={}){let e=new ji(t.sky||"#EAF2FF",t.ground||"#B9A898",t.hemi??1.5);n.add(e);let i=new ts(t.key||"#FFF4E2",t.ki??2.2);i.position.set(...t.pos||[6,10,7]),i.castShadow=t.shadow??!0,i.shadow.mapSize.set(2048,2048);let s=t.r||12;return Object.assign(i.shadow.camera,{left:-s,right:s,top:s,bottom:-s,near:.5,far:t.far||60}),i.shadow.bias=-4e-4,i.shadow.normalBias=.02,i.shadow.radius=3,t.target&&(i.target.position.set(...t.target),n.add(i.target),i.position.set(t.target[0]+(t.pos||[6,10,7])[0],t.target[1]+(t.pos||[6,10,7])[1],t.target[2]+(t.pos||[6,10,7])[2])),n.add(i),{hemi:e,k:i}}var Lu=(n={})=>({toon:1,blur:0,bloom:.18,bloomT:.95,bloomR:.4,vig:.22,exposure:1,sat:1.05,...n});var gn=Math.PI/180,Le=.3,Jg=.012,Ke={phi0:Math.PI/2-1,phiL:2,th0:.62,thL:1.55,W:1024,H:512},Xt=n=>Ke.W/2+n/Ke.phiL*Ke.W,Vt=n=>(n-Ke.th0)/Ke.thL*Ke.H,Fn=n=>n/Ke.phiL*Ke.W,ln=n=>n/Ke.thL*Ke.H,Ts="#1B1420";function Qg(n,t,e){n.clearRect(0,0,Ke.W,Ke.H),n.lineCap="round",n.lineJoin="round";let i=t.emo||"neutro",s=1.45,r=.31;if(t.blush||i==="feliz"||i==="apaixonado"||i==="vergonha"){n.fillStyle="rgba(240,110,110,"+(i==="vergonha"?.55:.3)+")";for(let y of[-1,1])n.beginPath(),n.ellipse(Xt(y*.44),Vt(1.7),Fn(.075),ln(.045),0,0,7),n.fill()}let a=Xe(Math.max(t.blink||0,i==="sono"?.55:i==="triste"||i==="choro"?.22:i==="bravo"?.25:i==="desconfiado"?.4:i==="tedio"?.5:0)),o=i==="surpreso"||i==="medo"?1.15:1;for(let y of[-1,1]){let T=Xt(y*r),x=Vt(s),w=Fn(.128)*o,F=ln(.158)*o;if(i==="feliz"&&!t.olhosAbertos||(t.blink||0)>.92){n.strokeStyle=Ts,n.lineWidth=11,n.beginPath(),i==="feliz"||i==="rindo"?n.arc(T,x+F*.25,w*.85,Math.PI*1.12,Math.PI*1.88):(n.moveTo(T-w*.9,x+F*.15),n.quadraticCurveTo(T,x+F*.55,T+w*.9,x+F*.15)),n.stroke();continue}n.save(),n.beginPath(),n.ellipse(T,x,w,F,0,0,7),n.clip(),n.fillStyle="#FFFFFF",n.fillRect(T-w,x-F,w*2,F*2);let A=i==="surpreso"||i==="medo"?.55:.68,M=Xe(e[0],-1,1),P=Xe(e[1],-1,1),W=T+M*w*.38,k=x+P*F*.32+F*.06;n.fillStyle="#231A26",n.beginPath(),n.ellipse(W,k,w*A,F*A*.98,0,0,7),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.ellipse(W-w*.22,k-F*.28,w*.2,F*.17,0,0,7),n.fill(),n.beginPath(),n.ellipse(W+w*.2,k+F*.22,w*.08,F*.07,0,0,7),n.fill();let I=i==="bravo"?-y*.45:i==="triste"||i==="choro"||i==="preocupado"?y*.35:0;if(a>.02||I){let z=x-F+F*2*a;n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.moveTo(T-w*1.2,x-F*1.3),n.lineTo(T+w*1.2,x-F*1.3),n.lineTo(T+w*1.2,z+Math.tan(I)*w*1.2),n.lineTo(T-w*1.2,z-Math.tan(I)*w*1.2),n.closePath(),n.fill(),n.strokeStyle=Ts,n.lineWidth=8,n.beginPath(),n.moveTo(T-w*1.1,z-Math.tan(I)*w*1.1),n.lineTo(T+w*1.1,z+Math.tan(I)*w*1.1),n.stroke()}n.restore(),n.strokeStyle=Ts,n.lineWidth=8,n.beginPath(),n.ellipse(T,x,w,F,0,0,7),n.stroke(),t.cilios&&(n.lineWidth=7,n.beginPath(),n.moveTo(T+y*w*.7,x-F*.72),n.lineTo(T+y*w*1.15,x-F*1.02),n.stroke())}if(i==="choro"||t.lagrima){n.fillStyle="rgba(120,200,255,.85)";for(let y of[-1,1]){let T=Xt(y*r),x=Vt(s)+ln(.12);n.beginPath(),n.moveTo(T-Fn(.02),x),n.quadraticCurveTo(T,x+ln(.22),T+Fn(.02),x),n.fill(),n.beginPath(),n.ellipse(T,x+ln(.2),Fn(.028),ln(.035),0,0,7),n.fill()}}let l={neutro:[0,0],feliz:[.04,-.1],rindo:[.04,-.1],triste:[.02,.45],choro:[.03,.5],bravo:[-.03,-.55],surpreso:[.09,0],medo:[.08,.4],preocupado:[.04,.38],desconfiado:[-.01,-.2],sono:[-.01,.1],vergonha:[.03,.3],determinado:[-.02,-.35],tedio:[-.01,.05],apaixonado:[.05,.2]}[i]||[0,0],c=l[0]+(t.brow||0)*.05,h=l[1];n.strokeStyle=t.sobr||Ts,n.lineWidth=t.sobrW||15;for(let y of[-1,1]){let T=Xt(y*r),x=Vt(s-.2-c),w=Fn(.085),F=y*h*.5;n.beginPath(),n.moveTo(T-w*Math.cos(F),x-w*Math.sin(F)*(y<0,1)),n.quadraticCurveTo(T,x-ln(.025),T+w*Math.cos(F),x+w*Math.sin(F)),n.stroke()}if(t.rugas){n.strokeStyle="rgba(90,50,40,.5)",n.lineWidth=5;for(let y of[-1,1]){let T=Xt(y*(r+.17));for(let x=0;x<3;x++)n.beginPath(),n.moveTo(T,Vt(s-.05+x*.06)),n.lineTo(T+y*Fn(.05),Vt(s-.07+x*.07)),n.stroke()}n.beginPath(),n.moveTo(Xt(-.12),Vt(1.12)),n.quadraticCurveTo(Xt(0),Vt(1.09),Xt(.12),Vt(1.12)),n.stroke()}if(t.oculosEscuros){n.fillStyle="#15121A";for(let y of[-1,1])n.beginPath(),n.ellipse(Xt(y*r),Vt(s+.02),Fn(.16),ln(.13),0,0,7),n.fill();n.strokeStyle="#15121A",n.lineWidth=10,n.beginPath(),n.moveTo(Xt(-r+.14),Vt(s)),n.lineTo(Xt(r-.14),Vt(s)),n.stroke(),n.fillStyle="rgba(255,255,255,.35)";for(let y of[-1,1])n.beginPath(),n.ellipse(Xt(y*r-.05),Vt(s-.03),Fn(.04),ln(.025),-.5,0,7),n.fill()}if(t.oculos){n.strokeStyle="#6A4A3A",n.lineWidth=8;for(let y of[-1,1])n.beginPath(),n.ellipse(Xt(y*r),Vt(s),Fn(.15),ln(.16),0,0,7),n.stroke();n.beginPath(),n.moveTo(Xt(-r+.15),Vt(s-.02)),n.quadraticCurveTo(Xt(0),Vt(s-.08),Xt(r-.15),Vt(s-.02)),n.stroke()}t.nariz&&(n.strokeStyle="rgba(60,30,30,.55)",n.lineWidth=7,n.beginPath(),n.arc(Xt(0),Vt(1.66),Fn(.035),.2,Math.PI-.2),n.stroke());let u=t.mouth||{},d=Xe(u.open||0),f=Xe(u.round||0),p=u.smile??({feliz:.8,rindo:.9,triste:-.6,choro:-.7,bravo:-.4,medo:-.3,preocupado:-.35,apaixonado:.6,vergonha:.3,determinado:-.05,desconfiado:-.15,tedio:-.2}[i]||0),E=Vt(t.bigode?1.93:1.88),g=Xt(0),m=Fn(.15+.05*(1-f)+(i==="rindo"?.04:0)),S=E-p*ln(.035),v=()=>{if(d<.07)n.strokeStyle=Ts,n.lineWidth=11,n.beginPath(),n.moveTo(g-m*.85,S),n.quadraticCurveTo(g,E+p*ln(.075),g+m*.85,S),n.stroke();else{let y=ln(.05+.2*d),T=m*(1-.38*f);n.beginPath(),f>.55?n.ellipse(g,E+y*.35,T*.75,y*.62,0,0,7):(n.moveTo(g-T,S),n.quadraticCurveTo(g,E+p*ln(.03)-y*.12,g+T,S),n.bezierCurveTo(g+T*.95,S+y*1.25,g-T*.95,S+y*1.25,g-T,S),n.closePath()),n.fillStyle="#5A1E2A",n.fill(),n.save(),n.clip(),d>.28&&f<.55&&(n.fillStyle="#FFFFFF",n.fillRect(g-T,S-y,T*2,y*1.18)),n.fillStyle="#E8707E",n.beginPath(),n.ellipse(g,S+y*1.05,T*.58,y*.42,0,0,7),n.fill(),n.restore(),n.strokeStyle=Ts,n.lineWidth=9,n.stroke()}};if(t.barba||v(),t.barba&&(n.fillStyle=t.barba,n.globalAlpha=.92,n.beginPath(),n.moveTo(Xt(-.44),Vt(1.5)),n.quadraticCurveTo(Xt(-.46),Vt(2.05),Xt(0),Vt(2.2)),n.quadraticCurveTo(Xt(.46),Vt(2.05),Xt(.44),Vt(1.5)),n.quadraticCurveTo(Xt(.36),Vt(1.78),Xt(.2),Vt(1.8)),n.quadraticCurveTo(Xt(0),Vt(1.72),Xt(-.2),Vt(1.8)),n.quadraticCurveTo(Xt(-.36),Vt(1.78),Xt(-.44),Vt(1.5)),n.fill(),n.globalAlpha=1,n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.ellipse(g,E+ln(.03),m*1.15,ln(.09+.12*d),0,0,7),n.fill(),v()),t.olheiras){n.strokeStyle="rgba(90,60,90,.45)",n.lineWidth=7;for(let y of[-1,1])n.beginPath(),n.arc(Xt(y*.31),Vt(1.5),Fn(.1),.35,Math.PI-.35),n.stroke()}if(t.sardas){n.fillStyle="rgba(150,80,50,.55)";for(let y of[-1,1])for(let T=0;T<5;T++)n.beginPath(),n.arc(Xt(y*(.36+T%3*.05)),Vt(1.66+Math.floor(T/3)*.05+T%2*.02),4.5,0,7),n.fill()}t.bigode&&(n.fillStyle=t.bigode,n.strokeStyle=Ts,n.lineWidth=6,n.beginPath(),n.moveTo(Xt(0),Vt(1.76)),n.bezierCurveTo(Xt(.12),Vt(1.7),Xt(.24),Vt(1.76),Xt(.27),Vt(1.9)),n.bezierCurveTo(Xt(.17),Vt(1.84),Xt(.08),Vt(1.87),Xt(0),Vt(1.83)),n.bezierCurveTo(Xt(-.08),Vt(1.87),Xt(-.17),Vt(1.84),Xt(-.27),Vt(1.9)),n.bezierCurveTo(Xt(-.24),Vt(1.76),Xt(-.12),Vt(1.7),Xt(0),Vt(1.76)),n.fill(),n.stroke())}var Bu={},Pn=0,ws=(n,t)=>{let e="c"+n+t+Pn;return Bu[e]||(Bu[e]=new wa(n,t,Pn?3:6,Pn?10:18))};function Uu(n,t=.82,e=36){let i=new eo(n.map(([l,c])=>new at(l,c)),e,Math.PI,Math.PI*2);i.applyMatrix4(new ue().makeScale(1,1,t));let s=i.attributes.position,r=i.attributes.uv,a=1e9,o=-1e9;for(let l=0;l<s.count;l++)a=Math.min(a,s.getY(l)),o=Math.max(o,s.getY(l));for(let l=0;l<s.count;l++)r.setY(l,(s.getY(l)-a)/(o-a));return i.computeVertexNormals(),i}var Kg={magro:[[0,.5],[.14,.5],[.165,.53],[.172,.62],[.172,.72],[.165,.8],[.14,.86],[.09,.895],[.04,.905],[0,.906]],barriga:[[0,.47],[.16,.47],[.2,.52],[.225,.6],[.225,.68],[.205,.77],[.17,.845],[.11,.89],[.04,.905],[0,.906]],senhora:[[0,.5],[.15,.5],[.17,.55],[.175,.64],[.17,.74],[.16,.81],[.13,.865],[.08,.898],[0,.906]]},jg=[[0,.24],[.25,.24],[.245,.26],[.22,.36],[.19,.5],[.165,.62],[0,.62]];function ka(n={}){Pn=n.simples?1:0;let t=n.pele||"#C98B5E",e=n.camisa||"#E8453C",i=n.calca||"#2E4A7A",s=n.tenis||"#F4F1EA",r=new Y,a=new Y;r.add(a);let o=new Y;o.position.y=.52,a.add(o);let l=(I,z,O,$,G=Jg)=>{let ot=new it(z,typeof O=="string"?xt(O):O);return ot.castShadow=!0,ot.receiveShadow=!0,$&&ot.position.set(...$),G&&Fi(ot,G),I.add(ot),ot},c=Qt(1024,512,(I,z,O)=>{I.fillStyle=e,I.fillRect(0,0,z,O),n.estampa&&n.estampa(I,z,O)}),h=pe(c),u=l(o,Uu(Kg[n.tronco||"magro"]),h,[0,-.52,0]);n.saia&&l(o,Uu(jg,.86),n.saia,[0,-.52,0]),l(o,new Qe(.06,.065,.1,16),t,[0,.4,0],0);let d=new Y;d.position.y=.38,o.add(d);let f=l(d,new ee(Le,Pn?24:48,Pn?16:32),t,[0,Le*.86,0]);for(let I of[-1,1])l(d,new ee(.055,16,12),t,[I*Le*.96,Le*.82,-.01]).scale.set(.6,1,.9);let p=document.createElement("canvas");p.width=Ke.W>>Pn,p.height=Ke.H>>Pn;let E=p.getContext("2d");Pn&&E.scale(.5,.5);let g=new Bn(p);g.colorSpace=Ue,g.anisotropy=8;let m=new We({map:g,gradientMap:xt("#fff").gradientMap,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),S=new it(new ee(Le*1.002,Pn?24:48,Pn?16:32,Ke.phi0,Ke.phiL,Ke.th0,Ke.thL),m);S.position.y=Le*.86,S.renderOrder=2,d.add(S);let v=n.corCabelo||"#1E1618",y=new Y;if(y.position.y=Le*.86,d.add(y),n.cabelo==="cacheado"){let I=new ee(1,Pn?8:14,Pn?6:10),z=0;for(let O=0;O<70;O++){let $=Math.acos(1-2*((O+.5)/70)),G=O*2.39996,ot=Math.cos($),mt=Math.sin($),Dt=Math.cos(G)*mt,qt=Math.sin(G)*mt;if(ot<.28&&qt>-.2||ot<-.25||qt>.55&&ot<.62||Math.abs(Dt)>.8&&ot<.45&&qt>-.5)continue;let ve=.075+O*37%10/10*.03,Q=l(y,I,v,[Dt*Le*.98,ot*Le*.98+.01,qt*Le*.98],.009);Q.scale.setScalar(ve),Q.castShadow=!1,z++}}else if(n.cabelo==="tigela"||n.cabelo==="rabo"||n.cabelo==="coque"){if(l(y,new ee(Le*1.04,40,28),v,[0,.055,-.065]),n.cabelo==="rabo"){let I=l(y,ws(.085,.26),v,[0,.06,-.42]);I.rotation.x=.75;let z=l(y,new ee(.1,18,14),v,[0,-.07,-.5]);l(y,new ee(.065,16,12),n.laco||"#F25C8A",[0,.22,-.31]);for(let O of[-1,1]){let $=l(y,ws(.06,.2),v,[O*.27,-.08,.02]);$.rotation.z=-O*.08}}n.cabelo==="coque"&&l(y,new ee(.12,24,16),v,[0,.3,-.12]);for(let I=-2;I<=2;I++)l(y,new ee(.075,16,12),v,[I*.07,.2-Math.abs(I)*.025,.2-Math.abs(I)*.02],.008).scale.set(1,.8,.7)}else if(n.cabelo==="careca")for(let I of[-1,1])for(let z=0;z<4;z++){let O=-.6-z*.35;l(y,new ee(.07,14,10),v,[I*Math.cos(O)*Le*.93*(z<3?1:.9),-.02,Math.sin(O)*Le*.93+.12],.008).scale.set(1,1.2,1)}if(n.cabelo==="topete"){l(y,new ee(Le*1.03,40,28,0,Math.PI*2,0,1.45),v,[0,.03,-.05]),l(y,new ee(Le*1.035,40,28,Math.PI-.35,Math.PI+.7,0,1.95),v,[0,0,0],.008);for(let z=0;z<5;z++)l(y,new li(.085,.22,10),v,[(z-2)*.075,.27-Math.abs(z-2)*.02,.12-Math.abs(z-2)*.02],.008).rotation.set(1.05,0,-(z-2)*.22);l(y,new ee(.16,18,12),v,[0,.26,.05],.008).scale.set(1.2,.6,1.1)}else if(n.cabelo==="curto")l(y,new ee(Le*1.025,40,28,0,Math.PI*2,0,1.3),v,[0,.025,-.03]),l(y,new ee(Le*1.03,40,28,Math.PI-.35,Math.PI+.7,0,1.9),n.corCabelo2||v,[0,0,0],.008);else if(n.cabelo==="chanel"){l(y,new ee(Le*1.06,40,28),v,[0,.05,-.07]);for(let z of[-1,1])l(y,new ee(.2,20,14),v,[z*.25,-.12,-.06]).scale.set(.55,1.15,1);l(y,new ee(.26,24,14),v,[0,.19,.12],.008).scale.set(1.05,.42,.6)}else if(n.cabelo==="afro"&&(l(y,new ee(Le*1.32,40,28),v,[0,.14,-.1]).scale.set(1.08,1,1),n.faixa)){let z=l(y,new Zn(Le*1.02,.035,10,40),n.faixa,[0,.1,0],.006);z.rotation.x=Math.PI/2-.25}if(n.brincos)for(let I of[-1,1])l(d,new ee(.03,12,10),n.brincos,[I*Le*1,Le*.62,.02],.005);if(n.bone){let I=l(y,new ee(Le*1.05,32,16,0,Math.PI*2,0,1.25),n.bone,[0,.03,-.01]),z=l(y,ss(.36,.03,.22,.012),n.bone,[0,.12,n.boneTras?-.32:.3])}let T=I=>{let z=new Y;z.position.set(I*.185,.3,0),o.add(z);let O=(n.manga||"curta")==="curta";l(z,ws(O?.064:.058,O?.07:.17),e,[0,O?-.055:-.1,0]),O&&l(z,ws(.05,.15),t,[0,-.11,0]);let $=new Y;$.position.y=-.21,z.add($),l($,ws(.048,.14),O?t:e,[0,-.085,0]);let G=new Y;G.position.y=-.2,$.add(G);let ot=new ee(.062,20,14);return l(G,ot,n.luva||t,[0,-.01,0]).scale.set(.85,1.05,.8),l(G,new ee(.026,12,10),n.luva||t,[-I*.045,.02,.03],.007),{sh:z,el:$,hand:G}},x=T(1),w=T(-1),F=I=>{let z=new Y;z.position.set(I*.085,.52,0),a.add(z),l(z,ws(.07,.17),n.saia?t:i,[0,-.11,0]);let O=new Y;O.position.y=-.22,z.add(O),l(O,ws(.063,.16),n.meia||(n.saia?t:i),[0,-.1,0]);let $=new Y;$.position.y=-.22,O.add($);let G=l($,ss(.13,.095,.23,.045),s,[0,-.037,.035]);return n.sola!==!1&&l($,ss(.135,.03,.235,.014),n.sola||"#FFFFFF",[0,-.075,.035],.006),{hp:z,kn:O,an:$}},A=F(1),M=F(-1),P=xs(.36,.4);P.position.y=.006,r.add(P),n.escala&&r.scale.setScalar(n.escala);let W={look:[0,0],key:""},k={root:r,pelvis:a,torsoG:o,headG:d,head:f,hair:y,torso:u,hands:{L:x.hand,R:w.hand},arms:{L:x,R:w},legs:{L:A,R:M},sombra:P,place(I,z,O=0,$=0){return r.position.set(I,O,z),r.rotation.y=$,k},pose(I={}){a.position.y=I.bob||0,a.position.z=I.dz||0,o.rotation.set((I.lean||0)*gn,(I.twist||0)*gn,(I.tilt||0)*gn),d.rotation.set((I.headX||0)*gn,(I.headY||0)*gn,(I.headZ||0)*gn);let z=($,G,ot,mt)=>{$.sh.rotation.set(-(G[0]||0)*gn,(G[2]||0)*gn*mt,mt*(G[1]??8)*gn),$.el.rotation.set(-(ot||0)*gn,0,0)};z(x,I.shL||[0,8],I.elL??8,1),z(w,I.shR||[0,8],I.elR??8,-1);let O=($,G,ot,mt)=>{$.hp.rotation.set(-(G[0]||0)*gn,0,mt*(G[1]||0)*gn),$.kn.rotation.set((ot||0)*gn,0,0),$.an.rotation.set(-(G[0]||0)*gn*0+(ot||0)*gn*-.4*(G[2]??1),0,0)};return O(A,I.hipL||[0,0],I.knL||0,1),O(M,I.hipR||[0,0],I.knR||0,-1),k},face(I={}){let z=I.look||[0,0],O=I.mouth||{},$=(ot,mt=20)=>Math.round((ot||0)*mt),G=[I.emo,$(I.blink,10),$(z[0],8),$(z[1],8),$(O.open,12),$(O.round,6),O.smile===void 0?"u":$(O.smile,8),$(I.brow,6),I.lagrima?1:0,I.olhosAbertos?1:0].join("|");return G!==W.key&&(W.key=G,Qg(E,{...n.rosto,...I,pele:t,oculos:n.oculos,rugas:n.rugas,oculosEscuros:n.oculosEscuros,bigode:n.bigode,barba:n.barba,olheiras:n.olheiras,sardas:n.sardas,nariz:n.nariz,cilios:n.cilios,sobr:n.sobr,sobrW:n.sobrW},z),g.needsUpdate=!0),k},faceTo(I,z){return r.rotation.y=Math.atan2(I-r.position.x,z-r.position.z),k},hold(I,z="R"){return k.hands[z].add(I),I}};return k.estatua=(I="#A9A49C")=>{k.congelado=!0;let z=xt(I);return r.traverse(O=>{O.isMesh&&!O.userData.isOutline&&O!==P&&O!==S&&(O.material=z)}),m.color.set("#B8B4AC"),k},k.pose({}),k.face({}),k}var ut=(n,t=0,e=1)=>{let i=Math.sin((n+t)*2.1);return{bob:i*.006*e,headX:i*1.5*e,shL:[i*2,8+i*1.5],shR:[-i*2,8+i*1.5],elL:10,elR:10}};function Jn(n,t=1.8,e=1,i=0){let s=(n*t+i)*Math.PI*2,r=Math.sin(s),a=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.025*e-.012,lean:4*e,twist:r*4*e,hipL:[28*r*e,0],hipR:[-28*r*e,0],knL:Math.max(0,-a)*45*e+5,knR:Math.max(0,a)*45*e+5,shL:[-24*r*e,7],shR:[24*r*e,7],elL:18+Math.max(0,-r)*18,elR:18+Math.max(0,r)*18,headX:-2}}function On(n,t=2.9,e=1,i=0){let s=(n*t+i)*Math.PI*2,r=Math.sin(s),a=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.06*e-.02,lean:16*e,twist:r*7*e,hipL:[50*r*e+8,0],hipR:[-50*r*e+8,0],knL:(Math.max(0,-a)*85+18)*e,knR:(Math.max(0,a)*85+18)*e,shL:[-45*r*e,10],shR:[45*r*e,10],elL:85,elR:85,headX:-10*e}}var Et=(n={})=>({bob:-.17,dz:-.02,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shL:[12,8],shR:[12,8],elL:30,elR:30,...n});function zn(n,t,e){let i={},s=new Set([...Object.keys(n),...Object.keys(t)]);for(let r of s){let a=n[r],o=t[r];if(Array.isArray(a)||Array.isArray(o)){let l=a||[0,8],c=o||[0,8];i[r]=l.map((h,u)=>At(h,c[u]??h,e))}else i[r]=At(a??0,o??0,e)}return i}function Nu(n,t=0){let e=3.1+t%5*.37,i=(n+t*.77)%e/e*e;return i<.07?i/.07:i<.14?1-(i-.07)/.07:0}var h_=1/420;var T0={value:0};function Qn(n,t){(n.userData.vida||=[]).push(t)}var Rs={out:.012},w0=(n,t,e="#FFFFFF",i=512,s=128,r=64)=>Qt(i,s,a=>{a.fillStyle=t,a.fillRect(0,0,i,s),a.strokeStyle="#00000033",a.lineWidth=8,a.strokeRect(4,4,i-8,s-8),a.fillStyle=e,a.font=`900 ${r}px Inter`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,i/2,s/2+4)});function ey(n="#2F8F5B"){let t=new Y;return t.add(J(.22,.19,.8,n,0,.4,0,{seg:14,...Rs})),t.add(J(.25,.25,.07,"#24724A",0,.82,0,{seg:14})),t.add(J(.03,.03,.9,"#5A6270",-.28,.45,0,{seg:6})),t}function ny(){let n=new Y;return n.add(J(.12,.14,.55,"#D8392F",0,.28,0,{seg:12,...Rs})),n.add(de(.13,"#D8392F",0,.58,0,{seg:12})),n.add(J(.05,.05,.32,"#B52C24",0,.38,0,{seg:8,rot:[0,0,Math.PI/2]})),n}function R0(){let n=new Y;for(let t=0;t<3;t++)n.add(H(1.5,.05,.12,"#A8743E",0,.45,-.12+t*.13,{r:.02}));for(let t=0;t<2;t++)n.add(H(1.5,.12,.04,"#A8743E",0,.62+t*.15,-.2,{r:.015}));for(let t of[-.6,.6])n.add(ft(.06,.45,.4,"#3A3A44",t,.22,-.05));return n}function iy(n="pare"){let t=new Y;t.add(J(.035,.035,2.4,"#8A9099",0,1.2,0,{seg:8}));let e=Qt(256,256,s=>{if(s.translate(128,128),n==="pare"){s.fillStyle="#D8392F",s.beginPath();for(let r=0;r<8;r++){let a=Math.PI/8+r*Math.PI/4;s.lineTo(120*Math.cos(a),120*Math.sin(a))}s.fill(),s.strokeStyle="#fff",s.lineWidth=10,s.stroke(),s.fillStyle="#fff",s.font="900 70px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("PARE",0,6)}else s.fillStyle="#fff",s.beginPath(),s.arc(0,0,122,0,7),s.fill(),s.strokeStyle="#D8392F",s.lineWidth=26,s.beginPath(),s.arc(0,0,106,0,7),s.stroke(),s.fillStyle="#1B1420",s.font="900 96px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText(n,0,8)}),i=new it(new Mn(.32,24),new We({map:e,transparent:!0,side:De}));return i.position.set(0,2.25,.04),t.add(i),t}function sy(){let n=new Y;n.add(J(.06,.07,3.4,"#3A3A44",0,1.7,0,{seg:8})),n.add(H(.32,.9,.26,"#2A2A30",0,3.25,.1,{...Rs}));let t=["#E2443A","#F2C14E","#4CC46A"].map((e,i)=>{let s=new it(new Mn(.09,16),new te({color:e}));return s.position.set(0,3.52-i*.27,.235),n.add(s),s});return n.userData.luzes=t,n}function ry(n=0){let t=new Y;t.add(H(2.2,2.2,1.6,"#2E6FB8",0,1.1,0,{...Rs})),t.add(H(2.5,.12,1.9,"#25599A",0,2.26,.1));let e=Qt(512,256,r=>{let a=Pe(n+9);r.fillStyle="#E8E2D6",r.fillRect(0,0,512,256);for(let o=0;o<3;o++)for(let l=0;l<8;l++)r.fillStyle=["#E2443A","#F2C14E","#8FD3C1","#E8A0B8","#9EC1E8","#F28F6B"][Math.floor(a()*6)],r.fillRect(8+l*63,10+o*82,54,72),r.fillStyle="#ffffffaa",r.fillRect(14+l*63,16+o*82,40,10)}),i=new it(new Ot(1.9,1.1),pe(e));i.position.set(0,1.3,.81),t.add(i);let s=new it(new Ot(1.6,.32),pe(w0("BANCA","#F2C14E","#1B1420")));return s.position.set(0,2.05,.82),t.add(s),t}function oy(){let n=new Y;for(let i of[-1.1,1.1])n.add(J(.05,.05,2.4,"#8A9099",i,1.2,-.4,{seg:8}));n.add(H(2.6,.1,1.2,"#5A6270",0,2.45,0,{...Rs}));let t=new it(new Ot(2.3,1.6),new We({color:"#BFE3F7",transparent:!0,opacity:.45}));t.position.set(0,1.4,-.45),n.add(t),n.add(H(2,.06,.35,"#A8743E",0,.48,-.25));let e=new it(new Ot(.8,.25),pe(w0("\xD4NIBUS","#2F7DC4")));return e.position.set(0,2.62,.61),n.add(e),n}function Sr(n=0){let t=Pe(n+21),e=new Y;e.add(J(.22,.16,.35,["#C46A4A","#E8E2D6","#8A6A5A"][n%3],0,.18,0,{seg:12,...Rs}));for(let i=0;i<4;i++){let s=de(.16+t()*.08,["#4C9A44","#5DAA4E","#6DBB57"][i%3],(t()-.5)*.25,.45+t()*.2,(t()-.5)*.25,{seg:8});e.add(s)}return e}function ay(){let n=new Y;for(let t of[-.45,.45]){let e=new it(new Zn(.3,.03,6,18),xt("#2A2A30"));e.position.set(0,.3,t),e.rotation.y=Math.PI/2,n.add(e)}return n.add(J(.02,.02,.9,"#C8392F",0,.45,0,{seg:6,rot:[Math.PI/2,0,0]})),n.add(J(.02,.02,.45,"#C8392F",0,.55,.2,{seg:6})),n}function ly(){let n=new Y;return n.add(J(.02,.16,.5,"#F28F2B",0,.25,0,{seg:12,...Rs})),n.add(J(.12,.12,.07,"#FFFFFF",0,.25,0,{seg:12})),n.add(ft(.36,.04,.36,"#F28F2B",0,.02,0)),n}var Ou=[["PADARIA","#C9472F"],["FARM\xC1CIA","#2F8F5B"],["LANCHES","#F2A33A"],["\xD3TICA","#2E6FB8"],["CAF\xC9","#7A5236"],["BANCO","#3A3A44"],["LIVRARIA","#8A4FA8"],["SAPATOS","#D8577A"],["CELULARES","#1F7FA0"],["MERCADO","#E2443A"]];function zu(n,t=5){let[e,i]=Ou[n%Ou.length],s=new Y,r=new it(new be(t,.9,.2),[xt(i),xt(i),xt(i),xt(i),pe(w0(e,i,"#FFFFFF",640,128,72)),xt(i)]);s.add(r);let a=Qt(128,64,l=>{for(let c=0;c<8;c++)l.fillStyle=c%2?"#FFFFFF":i,l.fillRect(c*16,0,16,64)}),o=new it(new be(t*.9,.06,1.3),[xt(i),xt(i),pe(a),xt(i),xt(i),xt(i)]);return o.position.set(0,-.75,.6),o.rotation.x=.28,s.add(o),s}function ku(n,t={}){let e=Pe(t.seed||77),[i,s]=t.xs||[12.3,17.2],r=t.z0??22,a=t.z1??-180,o=t.evita||[],l=t.bairro?["lixeira","vaso","hidrante","placa","vaso","bike","lixeira","cone"]:["lixeira","banco","hidrante","placa","banca","ponto","vaso","bike","semaforo"],c=u=>o.every(d=>Math.abs(((u-d[0])%d[1]+d[1])%d[1])>1.2&&Math.abs(((u-d[0])%d[1]+d[1])%d[1]-d[1])>1.2),h=[];for(let u of[-1,1]){let d=r-e()*4;for(;d>a;){if(c(d)){let f=l[Math.floor(e()*l.length)],p,E=u*i,g=-u*Math.PI/2;f==="lixeira"?p=ey():f==="hidrante"?p=ny():f==="banco"?(p=R0(),E=u*(i+.9),g=u>0?-Math.PI/2:Math.PI/2):f==="placa"?p=iy(e()<.5?"pare":String([30,40,50,60][Math.floor(e()*4)])):f==="banca"?(p=ry(Math.floor(e()*99)),E=u*(s-1.2)):f==="ponto"?(p=oy(),E=u*(i+.8)):f==="vaso"?(p=Sr(Math.floor(e()*9)),E=u*(t.bairro?s:s-.3)):f==="bike"?(p=ay(),E=u*(i+.4),g=0):f==="cone"?p=ly():(p=sy(),h.push(p)),(f==="banca"||f==="ponto")&&(g=u>0?-Math.PI/2:Math.PI/2),p.position.set(E,.15,d),p.rotation.y=g,n.add(p)}d-=(t.passo||7)+e()*(t.passo||7)}}h.length&&Qn(n,(u,d)=>{let f=Math.floor(d/6)%3;h.forEach((p,E)=>p.userData.luzes.forEach((g,m)=>g.material.color.set(m===(f+E)%3?["#FF5A4A","#FFD25A","#5AE07A"][m]:"#2A2A30")))})}function oo(n,t={}){let e=Pe(t.seed||5),i=t.n||7,s=xt("#2A2630",{side:De}),r=[],a=new Ot(.55,.22);a.translate(.27,0,0);for(let d=0;d<i;d++){let f=new Y,p=new it(a,s),E=new it(a,s);E.rotation.y=Math.PI,f.add(p,E),f.add(de(.09,"#2A2630",0,0,0,{seg:6})),f.scale.setScalar(t.escala||1),n.add(f),r.push({g:f,L:p,Rr:E,dx:(e()-.5)*8,dy:(e()-.5)*3,dz:(e()-.5)*8,ph:e()*6})}let[o,l,c]=t.centro||[0,22,-40],h=t.raio||30,u=t.v||.12;Qn(n,(d,f)=>{r.forEach((p,E)=>{let g=f*u+(t.fase||0),m=o+Math.cos(g)*h+p.dx+Math.sin(f*.7+p.ph)*.6,S=c+Math.sin(g)*h*.5+p.dz,v=l+p.dy+Math.sin(f*1.3+p.ph)*.4;p.g.position.set(m,v,S),p.g.rotation.y=-g+Math.PI;let y=Math.sin(f*11+p.ph)*.7;p.L.rotation.x=0,p.L.rotation.z=y,p.Rr.rotation.z=-y})})}function br(n,t,e,i,s={}){let r=Qt(64,64,l=>{let c=l.createRadialGradient(32,32,2,32,32,30);c.addColorStop(0,"rgba(255,255,255,.9)"),c.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=c,l.fillRect(0,0,64,64)}),a=s.n||8,o=[];for(let l=0;l<a;l++){let c=new Ki(new Ti({map:r,transparent:!0,depthWrite:!1,color:s.cor||"#FFFFFF"}));n.add(c),o.push(c)}Qn(n,(l,c)=>o.forEach((h,u)=>{let d=(c*(s.v||.35)+u/a)%1;h.position.set(t+Math.sin(c*1.3+u)*.06*(1+d*3),e+d*(s.alt||.9),i+Math.cos(c+u*2)*.04*(1+d*3));let f=(s.tam||.18)*(.5+d*1.6);h.scale.set(f,f,1),h.material.opacity=(s.op||.45)*Math.sin(d*Math.PI)}))}function Ha(n,t,e,i){let s=new Y;s.add(J(.02,.02,.4,"#5A6270",0,-.2,0,{seg:6})),s.add(J(.12,.1,.14,"#E8E2D6",0,-.42,0,{seg:12,out:.008}));let r=new Y;for(let a=0;a<4;a++){let o=H(.62,.02,.14,"#A8743E",.38,0,0,{r:.01}),l=new Y;l.add(o),l.rotation.y=a*Math.PI/2,r.add(l)}return r.position.y=-.47,s.add(r),s.traverse(a=>{a.castShadow=!1}),s.position.set(t,e,i),n.add(s),Qn(n,(a,o)=>{r.rotation.y=o*7}),s}function ao(n,t={}){let e=document.createElement("canvas");e.width=256,e.height=128;let i=e.getContext("2d"),s=new Bn(e);s.colorSpace=Ue,n.material=new te({map:s});let r=-1;return a=>{let o=Math.round(a*24);if(o===r)return;r=o,i.fillStyle="#0B231C",i.fillRect(0,0,256,128),i.strokeStyle="#1E4A3A",i.lineWidth=1;for(let h=0;h<256;h+=32)i.beginPath(),i.moveTo(h,0),i.lineTo(h,128),i.stroke();i.strokeStyle="#5CF2A0",i.lineWidth=4,i.beginPath();let l=t.bpm||62,c=60/l;for(let h=0;h<=256;h+=2){let d=((a-(256-h)/256*2.4)%c+c)%c/c,f=0;d>.1&&d<.14?f=-.12:d>.18&&d<.2?f=.15:d>.2&&d<.23?f=-.9:d>.23&&d<.26?f=.35:d>.4&&d<.5&&(f=-.15*Math.sin((d-.4)/.1*Math.PI));let p=72+f*52;h?i.lineTo(h,p):i.moveTo(h,p)}i.stroke(),i.fillStyle="#5CF2A0",i.font="700 22px IBM Plex Mono",i.fillText(String(l),200,28),s.needsUpdate=!0}}var Ga={total:480.7,segs:[{quem:"n",start:1.05,end:53.865,a:0,b:165},{quem:"regina",start:53.865,end:57.645,a:166,b:175},{quem:"n",start:57.645,end:77.538,a:176,b:238},{quem:"marcos",start:77.538,end:79.828,a:239,b:245},{quem:"gui",start:80.816,end:83.876,a:246,b:252},{quem:"marcos",start:84.014,end:87.004,a:253,b:259},{quem:"n",start:87.176,end:94.738,a:260,b:281},{quem:"n",start:95.428,end:125.73,a:282,b:373},{quem:"marcos",start:125.73,end:130.89,a:374,b:388},{quem:"gui",start:130.89,end:132.732,a:389,b:392},{quem:"marcos",start:132.732,end:136.232,a:393,b:402},{quem:"n",start:136.415,end:178.951,a:403,b:544},{quem:"dudu",start:179.12,end:183.82,a:545,b:558},{quem:"gui",start:184.057,end:185.067,a:559,b:561},{quem:"n",start:186.467,end:205.96,a:562,b:618},{quem:"dudu",start:206.17,end:208.03,a:619,b:622},{quem:"n",start:209.39,end:219.749,a:623,b:660},{quem:"n",start:220.667,end:264.29,a:661,b:781},{quem:"gui",start:264.42,end:268.4,a:782,b:791},{quem:"marcos",start:268.4,end:273.467,a:792,b:805},{quem:"gui",start:273.467,end:275.218,a:806,b:808},{quem:"marcos",start:275.218,end:278.358,a:809,b:817},{quem:"n",start:278.547,end:305.756,a:818,b:906},{quem:"gui",start:305.756,end:309.27,a:907,b:914},{quem:"marcos",start:309.27,end:313.47,a:915,b:930},{quem:"n",start:313.47,end:407.475,a:931,b:1223},{quem:"n",start:408.408,end:423.169,a:1224,b:1263},{quem:"marcos",start:423.484,end:429.994,a:1264,b:1280},{quem:"gui",start:429.994,end:435.186,a:1281,b:1291},{quem:"marcos",start:435.292,end:439.052,a:1292,b:1301},{quem:"gui",start:439.992,end:444.152,a:1302,b:1310},{quem:"n",start:444.346,end:478.47,a:1311,b:1433}],falas:[{quem:"regina",start:53.8,end:57.767,boca:[0,0,0,0,0,.16,.38,.48,.46,.46,.6,.82,.92,.96,.99,.99,.91,.77,.72,.71,.68,.64,.56,.49,.43,.27,0,0,0,0,.25,.52,.78,.95,.93,.72,.49,.36,.31,.48,.79,.95,.98,.99,.82,.42,.29,.59,.58,.26,.29,.46,.5,.67,.84,.65,.29,.31,.61,.65,.59,.78,.89,.61,.31,.46,.77,.82,.71,.58,.56,.73,.85,.8,.74,.71,.75,.86,.93,.94,.82,.63,.5,.44,.53,.57,.44,.42,.62,.87,.91,.73,.48,.28,.15,0,.15,.54,.87,.96,.96,.98,.99,.99,.95,.86,.82,.8,.68,.44,.23,0,0,0,0,0,0,.2,.39],round:[0,0,0,0,0,0,.99,.69,.83,.97,1,.76,.42,.29,.31,.32,.49,.97,1,1,.95,.54,.46,.42,.82,0,0,0,0,0,0,.95,.72,.69,.48,.89,1,1,1,1,.85,.81,.71,.54,.53,.96,0,.29,.51,0,0,.64,.87,.8,.49,.32,0,0,.51,.74,.82,.62,.44,.71,.71,.43,.51,.82,.82,.97,1,.56,.64,.79,.84,.89,.85,.87,.87,.48,.52,.95,.47,1,.79,.77,.37,.67,.85,.39,.51,.51,0,0,0,0,0,.06,.77,.81,.83,.75,.71,.59,.62,.77,.67,.66,.76,.83,0,0,0,0,0,0,0,0,1]},{quem:"marcos",start:77.467,end:79.933,boca:[0,0,.14,.48,.74,.86,.9,.81,.55,.36,.52,.7,.75,.87,.95,.89,.77,.7,.75,.84,.87,.84,.81,.86,.93,.95,.98,.91,.72,.62,.7,.82,.81,.79,.79,.75,.69,.64,.68,.76,.77,.75,.75,.75,.7,.57,.32,0,0,.31,.42,.31,0,0,0,0,0,0,0,0,0,0,.32,.51,.66,.83,.96,1,1,.98,.89,.77,.77,.62],round:[0,0,0,0,0,.07,.29,.14,1,.77,.01,0,.14,.56,.88,.63,.62,.66,.59,.56,.66,.81,.71,.6,.53,.34,.51,.77,.75,0,0,0,0,.51,.79,1,1,1,1,.98,.98,.86,.91,.59,.52,.68,.47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.83,.22,0,.74,.71,.94,.72,.42,.55,0,0,0]},{quem:"gui",start:80.733,end:84,boca:[0,.2,.63,.88,.9,.91,.91,.9,.93,.96,.9,.79,.72,.56,.25,.26,.68,.9,.82,.79,.79,.73,.59,.44,.33,.19,0,0,.25,.35,.34,.32,.31,.3,.23,.14,0,0,0,0,0,0,0,0,0,.29,.51,.61,.65,.66,.7,.75,.81,.84,.85,.86,.91,.87,.55,.16,.26,.75,1,.92,.85,.92,.81,.54,.58,.82,.9,.88,.91,.89,.85,.93,.98,.9,.76,.7,.8,.92,.92,.88,.86,.77,.69,.72,.69,.57,.45,.33,.19,0,0,0,0,0],round:[0,0,.72,1,1,1,1,1,1,.92,1,.98,.92,.94,0,0,.43,.91,.74,.41,.44,.14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,.91,.93,.97,.99,1,.16,0,0,0,.23,.97,.92,0,0,.66,.89,.81,.92,.82,.97,.98,.72,.99,1,0,0,0,0,.84,.81,1,1,1,.98,.94,.93,.91,.98,1,.89,0,0,0,0,.11,0,0,0,0,0,0]},{quem:"marcos",start:83.933,end:87.133,boca:[0,.15,.52,.81,.91,.95,.93,.89,.86,.82,.76,.69,.61,.55,.52,.54,.62,.68,.7,.75,.87,.95,.94,.89,.89,.9,.84,.71,.56,.42,.31,.2,0,0,0,0,0,0,0,0,0,0,0,.18,.59,.89,.95,.94,.94,.94,.95,.95,.96,.99,.97,.92,.88,.88,.93,.96,.96,.96,.95,.95,.98,.99,.93,.81,.78,.86,.9,.9,.93,.98,1,.99,.98,.97,.94,.94,.94,.78,.62,.76,.89,.81,.7,.57,.42,.25,0,0,0,0,0,0],round:[0,0,0,0,0,0,0,.05,.74,.96,1,.98,1,1,1,.21,.37,.72,.76,.94,.87,.86,1,1,.92,0,0,.19,.37,.28,.51,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.9,.06,0,0,0,1,1,1,1,1,.84,.54,.1,.78,.94,.94,1,1,1,1,.8,1,.83,0,.41,.99,.91,.96,1,1,1,1,.97,1,1,1,1,.48,0,0,0,.86,.46,.34,0,0,0,0,0,0,0]},{quem:"marcos",start:125.667,end:131,boca:[0,0,0,0,.25,.5,.66,.77,.92,1,.99,.91,.73,.47,.3,.4,.65,.83,.9,.8,.51,.42,.67,.9,.9,.8,.74,.74,.68,.52,.4,.43,.63,.77,.66,.4,.38,.68,.91,.83,.45,0,0,0,.4,.76,.87,.84,.85,.88,.81,.49,.24,.46,.78,.6,.18,.17,.55,.77,.59,.43,.53,.61,.65,.77,.81,.73,.7,.73,.77,.81,.86,.88,.81,.56,.23,0,0,.17,.59,.88,.87,.83,.78,.73,.72,.7,.62,.51,.38,.25,.19,.32,.61,.85,.91,.85,.73,.61,.57,.54,.46,.33,0,.17,.53,.61,.31,.24,.59,.81,.67,.36,.24,.47,.68,.72,.71,.64,.65,.78,.83,.83,.86,.9,.95,.91,.82,.81,.74,.67,.76,.89,.87,.55,.4,.73,.84,.5,.16,.14,.3,.33,.39,.59,.76,.64,.28,.2,.52,.56,.35,.28,.13,0,0,0,0,0],round:[0,0,0,0,0,0,.9,.45,0,0,0,0,.56,.96,0,0,.94,.87,1,1,1,1,.89,1,1,1,1,1,.92,.6,.36,0,.16,.97,1,1,.52,0,.96,1,1,0,0,0,.09,.77,.87,.94,1,1,1,1,0,0,1,1,0,0,.81,.85,.58,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,.68,.97,.94,.82,.95,1,.92,.59,0,0,0,0,0,0,.99,.89,.97,.94,1,0,.02,.89,0,0,0,0,.9,.83,.72,0,.87,1,1,1,0,.79,.92,.76,.86,1,.45,.16,.94,1,1,1,.96,.99,1,1,1,.45,.08,1,1,1,.39,.78,.77,.81,0,0,0,1,.67,.79,.82,.81,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:130.833,end:132.833,boca:[.37,.38,.29,.27,.2,.28,.66,.95,1,.99,.94,.86,.72,.58,.5,.45,.35,.23,0,0,0,0,0,0,0,0,0,.16,.54,.83,.91,.9,.84,.76,.73,.73,.72,.75,.84,.91,.95,.97,.96,.95,.94,.91,.89,.89,.9,.9,.88,.87,.84,.75,.58,.38,.23,.14,0,0],round:[.94,.84,0,0,0,0,.16,.82,.75,.63,.67,.69,.66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.79,1,.99,1,0,0,0,0,0,.61,.62,.68,.75,.82,.81,1,1,1,1,.69,.65,1,1,1,1,.99,.77,0,0,0,0]},{quem:"marcos",start:132.667,end:136.333,boca:[0,0,0,0,0,.13,.36,.58,.77,.85,.76,.56,.49,.53,.61,.81,.92,.85,.79,.79,.76,.74,.75,.67,.42,.16,.29,.67,.81,.79,.78,.81,.89,.97,.92,.81,.82,.86,.63,.2,.25,.73,.89,.76,.72,.8,.87,.9,.94,.94,.91,.91,.94,.98,.96,.88,.84,.86,.8,.74,.78,.84,.9,.93,.88,.85,.91,.85,.61,.4,.26,.13,.21,.61,.93,1,.98,.86,.58,.43,.58,.7,.65,.67,.73,.51,.33,.62,.87,.74,.44,.21,.23,.59,.89,.81,.57,.42,.49,.68,.78,.78,.65,.32,0,0,0,0,0,0],round:[0,0,0,0,0,0,.59,.17,.82,1,1,0,0,0,0,.89,.84,.81,.72,.71,.89,.97,.91,1,1,0,0,.42,.89,.74,.66,.69,.66,.6,.88,0,0,.41,.92,0,0,.97,1,1,.12,0,.68,1,1,1,1,1,.79,.89,.97,.88,1,1,1,1,1,1,1,.86,.78,.98,.95,1,1,1,0,0,0,.72,.62,.65,.92,1,1,0,.91,1,1,1,1,1,.33,1,1,1,.95,0,0,0,.95,.91,1,1,1,1,1,1,.99,.64,0,0,0,0,0,0]},{quem:"dudu",start:179.067,end:183.933,boca:[0,0,0,0,0,0,0,0,0,0,0,0,.28,.39,.45,.69,.9,.92,.93,.84,.64,.59,.82,.98,1,.99,1,1,.96,.88,.87,.92,.92,.81,.78,.9,.94,.88,.83,.78,.66,.56,.6,.62,.58,.55,.49,.31,0,0,0,.15,.54,.86,.84,.63,.64,.84,.91,.85,.68,.49,.55,.82,.98,.96,.93,.94,.96,.96,.94,.9,.86,.75,.47,.16,0,0,.2,.25,.26,.18,0,0,.2,.66,.94,.97,.93,.75,.57,.61,.76,.9,.96,.86,.7,.7,.88,.91,.77,.73,.84,.94,.96,.93,.84,.74,.71,.74,.8,.83,.81,.77,.82,.92,.97,.96,.94,.9,.83,.8,.83,.86,.88,.89,.88,.87,.91,.83,.61,.52,.69,.89,.91,.82,.55,.23,.24,.45,.43,.23,0,0,0,0],round:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,.26,.56,.75,.57,.65,.88,1,.97,.7,.74,.87,.42,.67,.66,.71,.87,.86,.88,.75,1,1,.82,.81,.72,.84,1,1,.41,0,0,.44,1,.89,.72,0,0,0,0,0,.96,1,1,.47,.86,.76,.84,0,0,0,.4,.79,.73,.72,.72,.69,.61,.78,.74,.84,.97,1,0,0,0,0,0,0,0,0,0,0,.86,1,.87,.86,1,.27,.63,.89,.89,.86,.51,0,0,.58,1,1,1,.99,.87,.84,.87,.87,0,0,0,.44,.79,.86,1,.55,.72,.88,.86,.9,.76,.91,.92,.8,.78,.74,.61,.58,.91,.81,.93,.97,.69,.82,.97,.91,.92,.96,0,0,1,.91,0,0,0,0,0]},{quem:"gui",start:184,end:185.2,boca:[0,0,.18,.47,.71,.82,.86,.86,.84,.89,.97,1,.87,.5,.23,.41,.72,.82,.88,.95,.96,.92,.86,.81,.79,.74,.66,.58,.49,.33,.18,0,0,0,0,0],round:[0,0,0,0,0,0,0,0,0,0,.71,.53,.78,.9,0,0,0,0,.67,.92,.72,.8,.86,1,1,1,1,1,1,.69,0,0,0,0,0,0]},{quem:"dudu",start:206.1,end:208.133,boca:[0,.25,.67,.84,.85,.92,.97,.96,.9,.87,.86,.77,.63,.5,.35,.17,0,.2,.33,.38,.38,.36,.32,.25,.15,0,0,0,0,0,0,0,.22,.65,.85,.89,.94,.94,.94,.98,.98,.91,.84,.86,.92,.95,.97,.99,.99,.93,.85,.85,.89,.89,.83,.71,.59,.47,.34,.2,0],round:[0,0,.27,.34,.57,.63,.75,.89,.47,.33,.59,.55,.41,.35,.47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.34,1,1,1,1,1,0,0,.5,.97,0,0,0,0,0,0,.92,.87,.82,.54,.12,.12,.09,.31,0,0]},{quem:"gui",start:264.367,end:268.533,boca:[0,.19,.61,.88,.94,.94,.88,.79,.68,.58,.46,.31,.15,0,0,0,0,0,0,0,0,0,.2,.38,.48,.48,.55,.74,.86,.88,.87,.83,.8,.81,.87,.91,.88,.82,.78,.77,.79,.81,.82,.82,.79,.7,.7,.7,.53,.46,.65,.82,.86,.88,.86,.79,.79,.82,.79,.75,.78,.81,.8,.77,.75,.7,.62,.5,.3,0,0,0,0,0,0,0,.26,.55,.73,.74,.77,.91,.99,.95,.9,.87,.87,.89,.9,.9,.87,.8,.71,.56,.35,.15,0,0,0,0,.33,.72,.94,.87,.61,.26,.27,.69,.97,1,1,.97,.86,.71,.64,.67,.66,.56,.42,.31,.21,.13,.26,.58,.56],round:[0,0,.62,.89,.74,.75,.7,.64,.73,.46,.24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.88,.86,.93,1,.2,0,.32,1,1,.86,.72,0,0,0,.64,.97,1,.76,1,1,1,1,.76,.72,1,.99,1,1,.21,0,0,0,0,.6,.84,.71,.95,.91,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,.82,.85,.86,.98,1,1,1,1,1,1,1,1,1,.42,0,0,0,0,0,.69,.63,.99,1,1,0,0,.71,.89,.82,.77,.73,.96,1,1,1,.99,.99,.79,.43,0,0,0,1,.35]},{quem:"marcos",start:268.333,end:273.6,boca:[0,0,0,.16,.5,.75,.89,.94,.96,.98,1,.98,.91,.79,.72,.73,.73,.61,.42,.22,0,0,0,0,.2,.63,.77,.46,.29,.59,.89,.94,.92,.91,.93,.96,.99,.98,.87,.56,.36,.6,.82,.76,.61,.51,.44,.32,.17,0,0,0,0,0,0,.19,.63,.92,.93,.93,.98,.96,.87,.82,.86,.87,.88,.92,.92,.92,.96,.96,.74,.42,.47,.75,.8,.75,.81,.88,.89,.87,.88,.9,.91,.92,.93,.83,.66,.71,.85,.67,.26,.14,.47,.85,.97,.96,.96,.95,.96,.97,.98,.97,.92,.82,.73,.71,.63,.46,.28,0,0,0,0,0,0,.37,.72,.87,.82,.69,.58,.61,.81,.96,.96,.91,.9,.93,.91,.82,.83,.87,.59,.18,.18,.61,.93,.98,.96,.95,.93,.85,.71,.53,.46,.57,.67,.67,.64,.51,.26,0,0,.22,.67,.69],round:[0,0,0,0,1,.35,.87,.99,1,.92,.61,.67,.67,.61,.57,1,1,.53,.09,0,0,0,0,0,0,.49,.99,1,0,0,.9,1,1,1,1,1,.96,.82,.68,.61,.79,0,0,0,.87,1,1,1,0,0,0,0,0,0,0,0,.56,.8,.62,.73,.83,.76,1,1,1,1,0,0,0,0,.67,.71,.83,.74,.52,1,1,.84,.2,0,0,0,.88,1,1,.82,.84,1,.92,.06,.86,.91,0,0,0,.84,.6,.72,.99,1,1,1,1,.96,1,.84,0,0,0,.5,0,0,0,0,0,0,0,.87,1,.77,1,1,1,1,.45,.82,.5,.57,0,0,0,.34,.96,1,.95,0,0,.49,.85,.81,.84,.9,.86,.85,.62,.27,0,0,0,0,0,0,0,0,0,0,.93,.77]},{quem:"gui",start:273.4,end:275.333,boca:[.18,0,0,.21,.66,.91,.94,.94,.9,.81,.7,.62,.53,.4,.28,.18,0,0,0,0,0,0,.18,.57,.81,.8,.69,.59,.55,.49,.56,.84,1,.92,.72,.54,.48,.48,.58,.73,.84,.91,.97,.98,.95,.9,.76,.55,.42,.41,.38,.29,.15,0,0,.41,.75,.68],round:[0,0,0,0,.93,.77,.71,.71,.65,.68,.66,.46,.46,0,0,0,0,0,0,0,0,0,0,.89,1,1,.47,0,0,0,0,.86,.77,.83,.82,.18,0,0,0,1,1,1,1,.94,.97,.8,.86,.74,.37,.26,.22,0,0,0,0,0,0,0]},{quem:"marcos",start:275.167,end:278.467,boca:[0,0,.37,.7,.89,.95,.97,.98,.99,.98,.87,.75,.8,.87,.83,.82,.84,.85,.87,.9,.85,.68,.42,.28,.37,.43,.37,.24,0,0,0,0,0,.18,.62,.93,.93,.85,.84,.87,.89,.89,.88,.85,.84,.86,.89,.95,.95,.79,.47,.13,.16,.56,.9,.99,.97,.93,.86,.74,.56,.35,.16,0,.14,.47,.76,.89,.96,.99,.97,.9,.84,.8,.83,.9,.9,.87,.84,.74,.57,.53,.58,.64,.76,.9,.96,.89,.77,.67,.59,.49,.33,.13,0,0,0,0,0],round:[0,0,0,0,0,0,0,0,.51,.72,.53,.99,.75,.74,.93,.99,.93,1,.89,.72,.69,.68,.27,0,.01,0,.46,0,0,0,0,0,0,0,.99,.93,.6,.51,0,0,0,.37,.84,.06,0,0,0,.89,1,1,1,0,0,0,.81,.7,.66,.64,.69,.66,.4,.12,0,0,0,1,1,1,1,.77,.76,.8,1,0,0,0,0,.86,.93,1,0,0,0,0,.46,.46,.22,.61,.93,1,.85,.78,.69,0,0,0,0,0,0]},{quem:"gui",start:305.7,end:309.4,boca:[.18,.16,0,0,0,0,.44,.84,.99,.95,.91,.93,.93,.87,.82,.8,.74,.68,.62,.57,.47,.29,0,0,.27,.39,.42,.41,.38,.32,.23,0,0,0,0,0,.16,.51,.76,.83,.86,.89,.9,.9,.92,.84,.73,.77,.84,.86,.91,.9,.86,.9,.92,.92,.94,.94,.84,.73,.78,.93,.95,.88,.88,.91,.94,.96,.86,.53,.15,0,.23,.69,.9,.89,.93,.98,1,1,.99,.98,.96,.95,.88,.64,.29,.21,.55,.9,.99,.96,.89,.76,.47,.31,.55,.75,.74,.7,.64,.57,.52,.44,.34,.21,0,0,0,0,.19],round:[0,0,0,0,0,0,0,.97,.81,.76,.59,.75,.67,.07,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.86,.84,0,0,0,0,.96,1,1,0,0,0,.96,1,1,1,1,1,1,.8,.99,1,1,1,1,1,.94,0,0,0,0,0,0,0,0,0,.87,.71,.87,.91,1,1,1,.94,1,1,1,1,0,0,.08,1,.97,1,.82,.97,1,.87,0,.27,.52,.49,.37,.36,.46,.26,.41,0,0,0,0,0,0]},{quem:"marcos",start:309.2,end:313.6,boca:[0,0,0,0,0,.24,.74,.97,.85,.77,.85,.88,.85,.9,.92,.89,.9,.92,.87,.79,.71,.69,.7,.59,.58,.75,.83,.78,.78,.85,.89,.87,.83,.78,.7,.53,.25,0,0,0,.16,.12,0,.21,.63,.93,.87,.76,.84,.91,.88,.85,.85,.91,.88,.76,.73,.78,.84,.68,.36,.35,.64,.86,.9,.85,.76,.61,.48,.44,.33,0,0,0,0,0,.18,.6,.88,.92,.95,.97,.89,.79,.75,.71,.75,.9,.9,.68,.47,.53,.76,.86,.84,.76,.55,.49,.71,.61,.39,.65,.93,.93,.8,.5,.15,.18,.57,.87,.89,.8,.77,.75,.72,.79,.94,1,.98,.91,.84,.73,.58,.47,.42,.4,.29,0,0,0,0,0],round:[0,0,0,0,0,0,.87,.86,.84,.91,.83,.87,.26,0,0,0,.56,.84,.89,.91,1,.86,.93,.44,.08,.99,1,.26,0,.16,.97,.85,1,.95,.82,.47,0,0,0,0,0,0,0,0,.66,.89,.68,.89,.93,.9,0,0,0,.86,.95,.8,.72,1,.95,1,1,.38,.47,.94,.86,.79,.86,.7,.63,.93,.96,0,0,0,0,0,0,.73,.92,.31,0,.86,.99,.63,0,.36,.72,.97,1,1,.97,.4,1,.89,0,0,0,0,1,1,.55,.25,.84,.92,1,.97,0,0,.59,.66,.74,1,1,1,1,.76,1,1,.94,.93,.84,.77,.91,.4,.21,.32,0,0,0,0,0,0]},{quem:"marcos",start:423.433,end:430.1,boca:[.31,.56,.72,.81,.9,.97,.97,.89,.84,.82,.71,.53,.39,.3,.18,0,0,0,0,0,0,0,0,0,0,0,.15,.51,.82,.95,.97,.87,.82,.9,.96,.96,.97,.98,.97,.97,.96,.96,.9,.64,.39,.54,.86,.98,.89,.6,.47,.73,.92,.87,.83,.73,.61,.73,.92,.89,.73,.71,.82,.9,.89,.88,.87,.82,.77,.76,.68,.5,.29,.12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.13,.52,.88,.99,1,.98,.93,.9,.88,.89,.95,.92,.75,.72,.88,.93,.67,.26,0,0,0,.3,.74,.91,.88,.88,.85,.58,.31,.49,.83,.89,.82,.82,.89,.92,.89,.9,.9,.66,.47,.68,.91,.93,.94,.95,.96,.96,.93,.92,.95,.97,.97,.99,1,1,.98,.93,.92,.93,.89,.83,.86,.93,.94,.9,.85,.8,.81,.89,.96,.95,.9,.85,.83,.84,.64,.38,.52,.84,.94,.95,.98,.99,.95,.92,.92,.91,.83,.59,.24,.2,.55,.84,.92,.9,.84,.82,.86,.87,.82,.8,.77,.66,.46,.28,.13,0,0,0,0,0],round:[0,0,0,0,.32,.99,.97,.97,.96,.84,.82,.54,.46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.42,.51,0,0,0,0,1,.92,1,1,1,.94,.99,1,1,1,.9,.71,0,1,1,1,.95,.48,.34,.9,1,.98,1,.75,.37,.94,.88,1,1,.84,1,1,1,.99,.91,1,1,.98,.76,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,.96,.35,0,0,.02,.99,.41,0,.9,1,1,1,1,1,1,0,0,0,0,0,.64,1,1,1,1,.94,.99,.14,.91,.99,.68,0,0,0,0,.6,.76,.72,.56,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.96,1,1,.2,0,1,1,1,1,1,1,1,1,.97,.79,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,.84,.76,.72,0,0,.06,.85,.96,.92,1,1,1,.95,0,0,.72,.86,.57,0,0,0,0,0,0,0]},{quem:"gui",start:429.933,end:435.3,boca:[0,0,0,0,0,.18,.4,.51,.6,.8,.91,.9,.91,.91,.92,.92,.91,.91,.9,.89,.88,.85,.76,.5,.33,.53,.78,.79,.7,.65,.62,.54,.4,.3,.24,.16,0,0,0,.22,.3,.3,.31,.3,.27,.23,.14,0,0,.45,.79,.91,.88,.81,.81,.89,.93,.82,.75,.87,.98,.96,.81,.64,.55,.51,.59,.83,.98,.98,.96,.95,.94,.9,.85,.69,.5,.59,.85,.98,.94,.81,.7,.7,.82,.95,1,.99,.98,.89,.74,.67,.68,.65,.58,.46,.32,.22,0,0,0,0,0,0,0,0,0,0,0,0,.13,.4,.61,.72,.81,.82,.79,.8,.83,.81,.77,.8,.88,.92,.91,.82,.59,.27,0,0,.19,.62,.92,.95,.83,.63,.55,.67,.88,.91,.77,.73,.82,.87,.84,.75,.6,.64,.88,.96,.84,.69,.58,.51,.39,.2,0,0,0,0,0],round:[0,0,0,0,0,0,0,0,0,.02,.8,1,.91,.91,.95,.71,.66,.76,.67,.76,.98,.96,1,1,1,.41,.87,.88,.77,.81,.89,.88,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.61,.85,.94,1,.44,0,.61,.97,1,1,.52,.71,.77,.82,0,0,0,0,.86,.91,.88,.86,.92,.84,.91,1,1,1,.2,.51,.67,.73,1,1,1,1,.7,.73,.76,.75,.77,.86,1,1,1,.96,.94,.56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,.98,.82,1,1,0,0,0,0,0,.32,.83,.77,.76,.96,1,0,0,0,0,0,.92,.99,.74,0,0,0,1,.89,1,1,1,1,0,0,.29,.24,.68,.63,.72,.78,.36,.36,0,0,0,0,0,0,0]},{quem:"marcos",start:435.233,end:439.167,boca:[0,.2,.61,.7,.43,.36,.59,.87,.84,.7,.79,.86,.85,.89,.87,.76,.68,.49,.23,.4,.8,.93,.92,.86,.74,.75,.78,.64,.5,.53,.74,.9,.84,.63,.57,.68,.51,.26,.42,.73,.86,.84,.8,.79,.72,.47,.14,0,0,0,0,0,0,0,0,.23,.67,.79,.66,.79,.97,.95,.84,.78,.84,.88,.87,.85,.88,.94,.92,.8,.74,.74,.77,.82,.81,.79,.87,.97,.94,.79,.64,.63,.79,.9,.88,.89,.82,.65,.7,.83,.8,.76,.79,.85,.88,.91,.9,.75,.59,.64,.75,.74,.6,.35,0,0,0,0,0,.16,.32,.29,.13,0,.17,.32],round:[0,0,.15,.34,0,0,0,.68,.61,.71,.86,.17,0,0,0,0,.67,1,0,0,.76,.45,.74,1,1,.01,.96,1,1,1,.83,1,.99,.97,.14,0,0,0,.22,.89,.92,.82,.74,.72,.87,1,0,0,0,0,0,0,0,0,0,0,.72,.66,0,.16,.85,.9,1,1,0,.51,1,1,.94,.97,.9,.86,.99,1,.84,.42,1,1,1,.92,.87,1,1,1,.97,.84,.86,.56,.82,1,.83,1,1,1,1,.87,.8,.67,.99,.86,.41,1,1,1,1,1,0,0,0,0,0,0,.76,0,0,0,0,.48]},{quem:"gui",start:439.933,end:444.267,boca:[0,0,.33,.43,.51,.75,.94,.99,1,1,.98,.91,.87,.84,.68,.36,0,.17,.54,.72,.64,.52,.45,.35,.16,0,0,0,0,0,0,.14,.17,.18,.16,0,0,0,0,0,.3,.56,.72,.81,.83,.78,.72,.71,.75,.78,.75,.75,.85,.9,.84,.79,.7,.63,.74,.82,.61,.43,.54,.47,.14,.16,.54,.8,.86,.86,.83,.79,.8,.77,.64,.49,.41,.48,.69,.79,.79,.81,.81,.82,.8,.73,.7,.71,.75,.88,.98,1,.89,.69,.68,.82,.81,.64,.54,.71,.92,.89,.73,.69,.8,.85,.73,.61,.59,.66,.79,.74,.62,.77,.92,.81,.6,.51,.57,.6,.42,.18,.15,.15,0,0,0,0,0,0],round:[0,0,.27,0,0,.1,.56,.59,.62,.76,.76,.69,.74,.75,.88,1,0,0,.37,.71,.77,.71,.76,.55,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.65,1,1,.75,.57,.69,.89,0,0,0,0,0,.6,.59,.6,.81,1,1,.8,.21,.82,.42,0,0,0,0,.52,.92,.82,.63,.47,.67,1,1,0,0,0,0,.49,1,1,.96,.71,.98,1,0,0,0,0,.03,.73,.68,.59,1,1,.61,.73,0,0,0,.84,.87,.11,0,.82,.93,.47,0,0,0,.93,1,.25,.67,.73,.72,.82,.79,0,0,0,0,0,0,0,0,0,0,0,0]}]};var w_=Ga.total,R_=Ga.segs;function C0(n,t){for(let e of Ga.falas){if(e.quem!==n||t<e.start-.05||t>e.end+.05)continue;let i=(t-e.start)*30,s=Math.floor(i),r=i-s,a=e.boca[Math.max(0,Math.min(e.boca.length-1,s))]||0,o=e.boca[Math.max(0,Math.min(e.boca.length-1,s+1))]||0,l=e.round[Math.max(0,Math.min(e.round.length-1,Math.round(i)))]||0;return{open:a+(o-a)*r,round:l}}return{open:0,round:0}}var Hu=null,hy=()=>Hu||(Hu=Qt(128,128,n=>{let t=n.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.5,"rgba(255,255,255,.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=t,n.fillRect(0,0,128,128)}));function lo(n,t,e=1,i=!0){let s=new Ki(new Ti({map:hy(),color:n,transparent:!0,opacity:e,depthWrite:!1,blending:i?rr:Zi,fog:!1}));return s.scale.setScalar(t),s}function Gu(n,t,e={}){let i=Pe(e.seed||3),s=[];for(let r=0;r<(e.n||30);r++){let a=t[r%t.length],o=lo(e.cor||"#D9CDB8",1,0,!1);o.position.set(a[0]+(i()-.5)*(e.sp||3),a[1]+i()*.5,a[2]+(i()-.5)*(e.sp||3)),o.userData={b:o.position.clone(),d:i()*(e.spread||.6),v:new C((i()-.5)*2,i()*1.2,(i()-.5)*2),s:(e.size||2)*(.6+i()*.8)},n.add(o),s.push(o)}return r=>s.forEach(a=>{let o=a.userData,l=r-o.d;if(a.visible=l>0&&l<(e.life||4),!a.visible)return;let c=l/(e.life||4);a.position.copy(o.b).addScaledVector(o.v,l*.8),a.scale.setScalar(o.s*(.4+c*1.4)),a.material.opacity=(e.op||.75)*Math.sin(Math.min(1,c*4)*Math.PI/2)*(1-c)})}function Sn(n,t,e={}){let i=new Y;i.position.set(...t),n.add(i);let s=lo(e.cor||"#FFD45A",e.size||3,0);i.add(s);let r=Pe(e.seed||5),a=[];for(let o=0;o<(e.n||40);o++){let l=lo(o%3?e.cor||"#FFD45A":"#FFFFFF",(.12+r()*.1)*(e.ps||1),0);l.userData={a:r()*6.28,r:.3+r()*.6,ph:r(),sp:.6+r()},i.add(l),a.push(l)}return(o,l)=>{i.visible=l>.01,i.visible&&(s.material.opacity=(e.aura??.45)*l*(.85+.15*Math.sin(o*7)),s.scale.setScalar((e.size||3)*(.9+.1*Math.sin(o*3))),a.forEach(c=>{let h=c.userData,u=(o*.5*h.sp+h.ph)%1;c.position.set(Math.cos(h.a+o)*h.r,u*(e.alt||2.2)-.2,Math.sin(h.a+o)*h.r),c.material.opacity=l*Math.sin(u*Math.PI)}))}}function Vu(n,t){return[Math.sin(n*47)*t+Math.sin(n*89)*t*.5,Math.sin(n*53+1)*t+Math.sin(n*97)*t*.4,0]}function K(n,t,e,i){let s=Iu(n,t,e.bg||"#BFE3F7",e.fov||32),r=s.scene;e.fog&&(r.fog=new mr(e.fog[0],e.fog[1],e.fog[2])),s.camera.near=e.near||.05,s.camera.far=e.far||500,s.camera.updateProjectionMatrix();let a=i(r,s)||(()=>({}));return s.update=(o,l)=>{T0.value=o,Cs={t0:n,t1:t,viva:e.viva??1};let c=a(o,l,s.camera)||{},h=r.userData.vida;if(h&&e.vida!==!1){let u=o;for(let d of h)d(o,u,l)}return Lu(c)},s}var Cs={t0:0,t1:1,viva:1},Ar=(n,t)=>Math.sin(n*.71+t)*.6+Math.sin(n*1.37+t*2.1)*.3+Math.sin(n*2.9+t*3.3)*.1;function nt(n,t,e,i,s=0,r=Cs.viva){let a=M0(t,i),o=M0(e,i);if(r>0){let l=T0.value,c=Math.hypot(a[0]-o[0],a[1]-o[1],a[2]-o[2]),h=Math.min(1,Math.max(0,(l-Cs.t0)/Math.max(.5,Cs.t1-Cs.t0))),u=Cs.t1-Cs.t0>6.5&&h>.5?.2*r:0,d=.05*r*(h*h*(3-2*h))+u;for(let p=0;p<3;p++)a[p]+=(o[p]-a[p])*d;let f=c*.011*r;a[0]+=Ar(l,1)*f,a[1]+=Ar(l,4)*f*.7,a[2]+=Ar(l,7)*f*.5,o[0]+=Ar(l,9)*f*.35,o[1]+=Ar(l,12)*f*.3,s+=Ar(l,15)*.006*r}Du(n,a,o,s)}function rt(n,t,e=0,i=0,s=0,r=0){let a=ka(t);return a.place(e,i,r,s),n.add(a.root),a.seed=Math.abs(e*13+i*7|0)%9,a}function U(n,t,e,i="neutro",s={}){let r=t?C0(t,e):{open:0,round:0},a=s.mouth||(r.open>0?{open:r.open,round:r.round,smile:s.smile}:{open:0,smile:s.smile});n.face({emo:i,blink:s.blink??Nu(e,n.seed||0),look:s.look||[0,0],brow:s.brow,lagrima:s.lagrima,olhosAbertos:s.olhosAbertos,mouth:a});let o=n.headG.rotation,l=n.torsoG.rotation,c=n._viva;if(c&&o.x===c.r[0]&&o.y===c.r[1]&&o.z===c.r[2]&&l.x===c.r[3]&&l.z===c.r[4]&&(o.x-=c.d[0],o.y-=c.d[1],o.z-=c.d[2],l.x-=c.d[3],l.z-=c.d[4]),!n.congelado&&s.vivo!==!1){let h=(n.seed||0)*1.7,u=e*(s.lento??1),d=r.open||0,f=[.03*Math.sin(u*1.05+h)+d*.09*(.6+.4*Math.sin(u*7.3+h)),.045*Math.sin(u*.63+h*2)+d*.05*Math.sin(u*3.1+h),.025*Math.sin(u*.81+h*3),.018*Math.sin(u*2.2+h),.01*Math.sin(u*.9+h)];o.x+=f[0],o.y+=f[1],o.z+=f[2],l.x+=f[3],l.z+=f[4],n._viva={d:f,r:[o.x,o.y,o.z,l.x,l.z]}}else n._viva=null;return n}function Ce(n,t,e={},i=1){let s=C0(n,t).open,r=Math.sin(t*2.3),a=Math.sin(t*1.7+1);return{...e,shR:[(e.shR?.[0]??0)+18*s*i+6*r*i,(e.shR?.[1]??8)+6*s*i],elR:(e.elR??10)+40*s*i,shL:[(e.shL?.[0]??0)+8*s*i*a,e.shL?.[1]??8],headX:(e.headX??0)-3*s+1.5*r,headZ:(e.headZ??0)+2*a*s}}function Kn(n,t,e,i,s=0,r=i){if(nt(n,t,e,i),s>0){let a=Vu(r,s);n.position.x+=a[0],n.position.y+=a[1]}}function F0(n,t,e,i,s=0){return n.root.rotation.set(-Math.PI/2+s,0,0),n.root.position.set(t,e+.2,i),n.sombra.visible=!1,n}function jn(n,t=.4){let e=Qt(256,256,s=>{if(s.lineJoin="round",s.lineWidth=14,s.strokeStyle="#1B1420",s.textAlign="center",s.textBaseline="middle",n==="coracao")s.fillStyle="#F2546E",s.beginPath(),s.moveTo(128,214),s.bezierCurveTo(20,140,30,50,100,52),s.bezierCurveTo(118,54,128,70,128,82),s.bezierCurveTo(128,70,138,54,156,52),s.bezierCurveTo(226,50,236,140,128,214),s.fill(),s.stroke(),s.fillStyle="#FFFFFF88",s.beginPath(),s.ellipse(88,92,18,12,-.6,0,7),s.fill();else if(n==="gota")s.fillStyle="#8FD3F2",s.beginPath(),s.moveTo(128,30),s.bezierCurveTo(200,130,200,210,128,214),s.bezierCurveTo(56,210,56,130,128,30),s.fill(),s.stroke();else{let r={interrogacao:"?",exclamacao:"!",zzz:"Z",notas:"\u266A"}[n]||n;s.font="900 200px Inter",s.fillStyle=n==="exclamacao"?"#F2C14E":"#FFFFFF",s.strokeText(r,128,136),s.fillText(r,128,136)}}),i=new Ki(new Ti({map:e,transparent:!0,depthWrite:!1}));return i.scale.setScalar(t),i.renderOrder=10,i}function kn(n,t,e,i={}){let s=Qt(Math.round(512*(i.res||1)),Math.round(512*t/n*(i.res||1)),(a,o,l)=>e(a,o,l));return new it(new Ot(n,t),i.basic?new te({map:s,transparent:!!i.transp,side:De}):new We({map:s,transparent:!!i.transp,side:De}))}function ae(n,t,e,i=0,s=.48){let r=n.root.scale.x||1;return n.place(t,e,s-.28*r,i),n.sombra.visible=!1,n}var Va={sat:.45,tint:"#F4DDB8",vig:.45},co={tint:"#D6DEFF"};var xr=(n,t=.9)=>(e,i,s)=>{e.fillStyle=n,e.fillRect(0,s*t,i,s*(1-t))},Tr={pele:"#E3AE86",cabelo:"topete",corCabelo:"#4A2A18",nariz:!0,sobr:"#3A2014"},ti={...Tr,sardas:!0,camisa:"#F6F4EE",calca:"#3D4F73",tenis:"#F08A2C",sola:"#FFFFFF",escala:.93,estampa:(n,t,e)=>{xr("#2E9C6A",.88)(n,t,e),n.fillStyle="#2E9C6A",n.fillRect(0,0,t,e*.05);let i=t/2+120,s=e*.55;n.beginPath(),n.arc(i,s,44,0,7),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(i,s-26),n.lineTo(i+24,s+18),n.lineTo(i-24,s+18),n.closePath(),n.fill()}},yn={...Tr,sardas:!0,camisa:"#3A9AD9",calca:"#3D4F73",tenis:"#F08A2C",escala:.93,estampa:(n,t,e)=>{n.fillStyle="#F6F4EE";for(let i=0;i<6;i++)n.fillRect(0,e*(.12+i*.15),t,e*.05)}},Oe={...Tr,camisa:"#E2A630",manga:"longa",calca:"#30384A",tenis:"#F4F1EA",sola:"#F08A2C",estampa:(n,t,e)=>{n.fillStyle="#C98C1E",n.fillRect(t*.36,e*.58,t*.28,e*.2),n.strokeStyle="#6E4A10",n.lineWidth=6,n.beginPath(),n.moveTo(t/2-30,0),n.lineTo(t/2-30,e*.3),n.moveTo(t/2+30,0),n.lineTo(t/2+30,e*.3),n.stroke()}},ho={...Tr,camisa:"#8E9AA8",calca:"#2F5E5A",tenis:"#E3AE86",sola:"#2D8CD6",meia:"#E3AE86",estampa:(n,t,e)=>{xr("#7A8696")(n,t,e)}},Wa={...Tr,barba:"#5A3826",olheiras:!0,camisa:"#2C6E7F",manga:"longa",calca:"#8C7656",tenis:"#3A2A20",sola:"#F4F1EA",estampa:(n,t,e)=>{n.fillStyle="#245B69",n.fillRect(t/2-4,0,8,e);for(let i=0;i<5;i++)n.fillStyle="#F4F1EA",n.beginPath(),n.arc(t/2+14,e*(.25+i*.14),6,0,7),n.fill()}},Xa={...Tr,barba:"#5A3826",camisa:"#4FB8A0",calca:"#8C7656",tenis:"#F4F1EA",sola:"#2C6E7F",estampa:(n,t,e)=>{xr("#3C9A84")(n,t,e)}},uy=(n,t,e)=>{n.fillStyle="#F2C230",n.fillRect(0,e*.62,t,e*.07);let i=t/2-120,s=e*.4;n.fillStyle="#F2C230",n.fillRect(i-46,s-30,92,60),n.fillStyle="#1F2D4E",n.font="900 26px Inter",n.textAlign="center",n.textBaseline="middle",n.fillText("CF",i,s+2),n.fillStyle="#F2C230",n.font="800 22px Inter",n.fillText("CASA FORTE",t/2+160,e*.42)},en={pele:"#9A6646",cabelo:"curto",corCabelo:"#2B2422",barba:"#4E4642",nariz:!0,sobr:"#2B2422",sobrW:19,camisa:"#22355E",calca:"#3E3A36",tenis:"#4A3222",sola:"#2A1E16",escala:1.07,estampa:(n,t,e)=>{uy(n,t,e),xr("#1A2848")(n,t,e)}},P0={...en,camisa:"#B8463A",estampa:(n,t,e)=>{n.strokeStyle="#8E2F28",n.lineWidth=14;for(let i=0;i<12;i++)n.beginPath(),n.moveTo(i*90,0),n.lineTo(i*90,e),n.stroke(),n.beginPath(),n.moveTo(0,i*50),n.lineTo(t,i*50),n.stroke()}},qa={...en,corCabelo:"#2E2A28",barba:"#8E8782",camisa:"#F4F1EA",calca:"#3E3A36",escala:1.03,estampa:(n,t,e)=>{n.fillStyle="#2E7D4F",n.fillRect(t*.3,e*.3,t*.4,e*.7),n.fillStyle="#F4F1EA",n.font="900 34px Inter",n.textAlign="center",n.fillText("MESTRE",t/2,e*.6),n.fillText("DO FOGO",t/2,e*.72)}},bn={pele:"#C98C66",cabelo:"chanel",corCabelo:"#7A2E1E",brincos:"#F2C230",cilios:!0,nariz:!0,camisa:"#2FB0A8",calca:"#7E3352",saia:"#7E3352",tenis:"#7E3352",sola:"#4E1E33",escala:.95,estampa:(n,t,e)=>{n.fillStyle="#F6F4EE";for(let i=0;i<40;i++)n.beginPath(),n.arc(i*137%t,i*71%e,9,0,7),n.fill()}},uo={pele:"#6E4430",cabelo:"afro",corCabelo:"#1A1212",faixa:"#E2443A",nariz:!0,camisa:"#7B4FC9",calca:"#2A2A33",tenis:"#F2C230",sola:"#FFFFFF",escala:.95,estampa:(n,t,e)=>{n.fillStyle="#F2C230";let i=t/2,s=e*.5;n.beginPath(),n.moveTo(i+10,s-70),n.lineTo(i-30,s+6),n.lineTo(i,s+6),n.lineTo(i-14,s+70),n.lineTo(i+34,s-10),n.lineTo(i+4,s-10),n.closePath(),n.fill()}},I0={...uo,camisa:"#F6D33A",estampa:(n,t,e)=>{xr("#2E9C4A",.86)(n,t,e),n.fillStyle="#2E9C4A",n.fillRect(0,e*.1,t,e*.04)}},fo={pele:"#E8B898",cabelo:"rabo",corCabelo:"#2A1A14",laco:"#F4F1EA",cilios:!0,camisa:"#F4F6F8",manga:"longa",calca:"#4FA3B8",tenis:"#F4F6F8",estampa:(n,t,e)=>{n.fillStyle="#4FA3B8",n.fillRect(t/2-50,e*.5,100,e*.5),n.strokeStyle="#3A3A44",n.lineWidth=5,n.beginPath(),n.arc(t/2+140,e*.45,30,0,Math.PI),n.stroke()}},D0={pele:"#8A5A3E",cabelo:"curto",corCabelo:"#1A1212",camisa:"#5FB6A4",calca:"#5FB6A4",tenis:"#F4F6F8",manga:"curta"};var Xu={pele:"#D9A07A",cabelo:"coque",corCabelo:"#5A3A2A",oculos:!0,cilios:!0,camisa:"#8E5BB8",manga:"longa",calca:"#3A3A44",saia:"#3A3A44",tenis:"#3A2A20"},Wu=[["#3E7CC8","#2A2A33","#2A1E1A","topete","#D9A07A"],["#E57AA0","#3A3550","#5A3020","chanel","#E8B48C"],["#58B26A","#2F4E86","#1C1416","afro","#8E5A3A"],["#F2994A","#3A3A44","#C9A060","curto","#F0C8A6"],["#9B6CC4","#2A2A33","#1C1416","curto","#B07A52"],["#2FB5A8","#4A3A2A","#3A2418","rabo","#E3B28E"],["#F2D24A","#2F4E86","#2A1E1A","tigela","#6E4430"],["#E8E4DE","#5A5A66","#6A5A4A","coque","#D9A07A"]],Pi=(n,t={})=>{let[e,i,s,r,a]=Wu[n%Wu.length];return ka({camisa:e,calca:i,corCabelo:s,cabelo:r,pele:a,cilios:["rabo","coque","chanel"].includes(r),tenis:["#F4F1EA","#2A2A30","#E2443A"][n%3],...t})},qu=(n,t={})=>Pi(n,{camisa:n%4===3?"#2E9C4A":"#F6D33A",estampa:xr(n%4===3?"#F6D33A":"#2E9C4A",.86),...t});var L0={};function Yu(n="janelas",t="#E8DCC8",e={}){let i=n+t+JSON.stringify(e);if(L0[i])return L0[i];let s=Qt(256,256,r=>{if(n==="vidro"){let a=r.createLinearGradient(0,0,256,256);a.addColorStop(0,e.v1||"#9CC9E8"),a.addColorStop(.55,e.v2||"#6FA6D2"),a.addColorStop(1,e.v1||"#9CC9E8"),r.fillStyle=a,r.fillRect(0,0,256,256),r.fillStyle="rgba(255,255,255,.28)",r.beginPath(),r.moveTo(30,256),r.lineTo(130,0),r.lineTo(175,0),r.lineTo(75,256),r.fill(),r.fillStyle=e.mul||"#46607A";for(let o=0;o<4;o++)r.fillRect(o*64,0,7,256),r.fillRect(0,o*64,256,9);if(e.quebrado){let o=Pe(e.quebrado);for(let l=0;l<16;l++){if(o()<.3)continue;let c=l%4*64+35,h=Math.floor(l/4)*64+36;r.fillStyle="#1D2633",r.beginPath();for(let u=0;u<9;u++){let d=u/9*6.283,f=14+o()*16;r.lineTo(c+Math.cos(d)*f,h+Math.sin(d)*f*.9)}r.fill()}}}else{r.fillStyle=t,r.fillRect(0,0,256,256),r.fillStyle="rgba(0,0,0,.06)",r.fillRect(0,118,256,10),r.fillRect(0,246,256,10);for(let a=0;a<2;a++)for(let o=0;o<2;o++){let l=o*128+26,c=a*128+22,h=76,u=80,d=e.noite&&(a*3+o*7+(e.seed||0))%5<2;r.fillStyle="rgba(0,0,0,.12)",r.fillRect(l-6,c-6,h+12,u+14),r.fillStyle=e.noite?d?"#FFD98A":"#2B3550":e.vj||"#8DB8D8",r.fillRect(l,c,h,u),e.noite||(r.fillStyle="rgba(255,255,255,.35)",r.beginPath(),r.moveTo(l+8,c+u),r.lineTo(l+40,c),r.lineTo(l+56,c),r.lineTo(l+24,c+u),r.fill()),r.fillStyle=e.caixilho||"#F4F1EA",r.fillRect(l+h/2-3,c,6,u),r.fillRect(l,c+u*.55,h,5),e.quebrado&&(a+o+e.quebrado)%3!==0&&(r.fillStyle="#1D2633",r.beginPath(),r.moveTo(l+10,c+8),r.lineTo(l+60,c+20),r.lineTo(l+50,c+70),r.lineTo(l+15,c+60),r.fill())}}});return s.wrapS=s.wrapT=on,L0[i]=s,s}function po(n){let{w:t=12,d:e=12,h:i=40,tipo:s="janelas",cor:r="#E8DCC8"}=n,a=n.andar||3.2,o=Yu(s,r,n),l=[e,e,t,t,t,t].map((u,d)=>{if(d===2||d===3)return xt(n.teto||"#B8B2A8");let f=o.clone();return f.needsUpdate=!0,f.repeat.set(Math.max(1,Math.round(u/(a*2))),Math.max(1,Math.round(i/(a*2)))),pe(f)}),c=new Y,h=new it(new be(t,i,e),l);return h.position.y=i/2,h.castShadow=h.receiveShadow=!0,c.add(h),c.add(ft(t+.4,.6,e+.4,n.topo||"#D9D2C4",0,i+.3,0)),n.terreo!==!1&&c.add(ft(t+.2,3.6,e+.2,n.corTerreo||"#4A4E58",0,1.8,0)),c.userData.mats=l,c.userData.base={tipo:s,cor:r,o:n},c}function dy(n=4,t={}){let e=Qt(512,512,i=>{i.fillStyle=t.cor||"#56585F",i.fillRect(0,0,512,512);let s=Pe(3);for(let r=0;r<1500;r++)i.fillStyle=`rgba(255,255,255,${s()*.05})`,i.fillRect(s()*512,s()*512,3,3);i.fillStyle="#F4F1EA";for(let r=1;r<n;r++)for(let a=0;a<512;a+=128)i.fillRect(r*512/n-4,a+20,8,70);i.fillStyle="#F2C94C",t.centro&&(i.fillRect(250,0,5,512),i.fillRect(258,0,5,512))});return e.wrapS=e.wrapT=on,e}function fy(n="#D8D2C8",t="#C9C2B6"){let e=Qt(256,256,i=>{i.fillStyle=n,i.fillRect(0,0,256,256),i.fillStyle=t;for(let s=0;s<4;s++)for(let r=0;r<4;r++)(s+r)%2&&i.fillRect(s*64+2,r*64+2,60,60);i.strokeStyle="rgba(0,0,0,.08)",i.lineWidth=3;for(let s=0;s<=4;s++)i.beginPath(),i.moveTo(s*64,0),i.lineTo(s*64,256),i.stroke(),i.beginPath(),i.moveTo(0,s*64),i.lineTo(256,s*64),i.stroke()});return e.wrapS=e.wrapT=on,e}function wr(n,t,e,i,s=0,r=0,a=0,o=[1,1]){let l=new it(new Ot(t,e),typeof i=="string"?xt(i):i);return l.material.map&&l.material.map.repeat.set(...o),l.rotation.x=-Math.PI/2,l.position.set(s,a,r),l.receiveShadow=!0,n.add(l),l}function Zu(n,t={}){let{largura:e=14,comp:i=200,z:s=-60,faixas:r=4,calc:a=5}=t,o=dy(r,t);wr(n,e,i,pe(o),0,s,0,[1,i/e]);let l=fy(t.c1,t.c2);for(let c of[-1,1]){let h=wr(n,a,i,pe(l.clone()),c*(e/2+a/2),s,.15,[a/2,i/2]);h.material.map.needsUpdate=!0,n.add(ft(.25,.16,i,"#B9B2A6",c*(e/2+.12),.08,s))}}function $u(n,t,e,i=14,s=0){let r=new Y;for(let a=0;a<8;a++){let o=new it(new Ot(i/16,3),xt("#F4F1EA"));o.rotation.x=-Math.PI/2,o.position.set(-i/2+(a+.5)*i/8,.012,0),r.add(o)}return r.position.set(t,0,e),r.rotation.y=s,n.add(r),r}function rs(n,t="#7EC4F0",e="#D9F0FA",i={}){let s=Qt(16,512,a=>{let o=a.createLinearGradient(0,0,0,512);o.addColorStop(0,t),o.addColorStop(.62,e),o.addColorStop(1,i.chao||e),a.fillStyle=o,a.fillRect(0,0,16,512)}),r=new it(new ee(i.r||420,32,16),new te({map:s,side:Ge,fog:!1,depthWrite:!1}));if(r.renderOrder=-10,n.add(r),i.nuvens!==!1&&i.n!==0)for(let a=0;a<(i.n||7);a++){let o=py(a),l=-1.9+a*.55+(i.giro||0),c=(i.r||420)*.8;o.position.set(Math.sin(l)*c,60+a%3*25+(i.alt||0),-Math.cos(l)*c),o.scale.setScalar(5+a%3*2),o.lookAt(0,o.position.y,0),n.add(o)}return r}function py(n=0){let t=new Y,e=Pe(n+11),i=new te({color:"#FFFFFF",fog:!1});for(let s=0;s<5;s++){let r=new it(new ee(1.2+e()*1.4,16,12),i);r.position.set((s-2)*1.8+e(),e()*1.2,e()*.8),r.scale.y=.7,t.add(r)}return t}function Rr(n,t,e,i=1,s=0){let r=new Y;r.add(J(.16*i,.22*i,2.2*i,"#7A5236",0,1.1*i,0,{seg:10}));let a=Pe(s+3),o=["#5DAA4E","#4C9A44","#6DBB57"];for(let l=0;l<3;l++){let c=new it(new Ra((1+a()*.4)*i,1),new We({color:o[l],gradientMap:xt("#fff").gradientMap,flatShading:!0}));c.position.set((a()-.5)*1.2*i,(2.6+a()*.9)*i,(a()-.5)*1.2*i),c.castShadow=!0,c.receiveShadow=!0,r.add(c)}return r.position.set(t,0,e),n.add(r),r}function Ju(n,t,e,i=1,s=!1){let r=new Y;r.add(J(.07,.1,6,"#5A6270",0,3,0,{seg:10}));let a=ft(1.6,.1,.1,"#5A6270",i*.75,5.95,0);r.add(a);let o=H(.5,.14,.3,s?"#FFF4C8":"#E8E4DA",i*1.45,5.85,0);if(r.add(o),s){let l=new Ze("#FFD99A",14,14,1.6);l.position.set(i*1.45,5.5,0),r.add(l)}return r.position.set(t,0,e),n.add(r),r}function os(n="#E2443A",t={}){let e=new Y,i=new Y;e.add(i),i.add(H(1.8,.62,4,n,0,.62,0,{r:.22,out:t.out?.012:0})),i.add(H(1.55,.55,2.1,n,0,1.15,-.25,{r:.2,out:t.out?.012:0}));let s=xt("#33445C");for(let c of[-1,1]){let h=H(.02,.38,1.7,s,c*.78,1.17,-.25,{r:.01});i.add(h)}i.add(H(1.4,.38,.02,s,0,1.17,.82,{r:.01})),i.add(H(1.4,.36,.02,s,0,1.17,-1.32,{r:.01}));let r=new te({color:t.noite?"#FFF6D0":"#FFF1C8"});for(let c of[-1,1]){let h=new it(new ee(.13,12,8),r);h.position.set(c*.6,.7,2),h.scale.z=.4,i.add(h);let u=new it(new be(.32,.14,.04),new te({color:"#E23A3A"}));u.position.set(c*.6,.75,-2.01),i.add(u)}i.add(H(1.85,.18,.2,"#D8D8DC",0,.42,2.02,{r:.06})),i.add(H(1.85,.18,.2,"#D8D8DC",0,.42,-2.02,{r:.06}));let a=[],o=new Qe(.36,.36,.26,20);o.rotateZ(Math.PI/2);for(let[c,h]of[[-.86,1.3],[.86,1.3],[-.86,-1.3],[.86,-1.3]]){let u=mn(o,"#26262C",{pos:[c,.36,h]});u.add(mn(new Qe(.18,.18,.28,12).rotateZ(Math.PI/2),"#C8CCD2")),e.add(u),a.push(u)}let l=xs(1.6,.35);return l.scale.set(1.15,2.6,1),l.position.y=.01,e.add(l),e.userData.rodas=a,e.userData.body=i,e}function as(n=.1,t=.2){let e=new Y;e.add(H(n,t,.016,"#1E1E26",0,0,0,{r:.012,out:.005}));let i=document.createElement("canvas");i.width=270,i.height=540;let s=i.getContext("2d"),r=new Bn(i);r.colorSpace=Ue;let a=new it(new Ot(n*.88,t*.9),new te({map:r}));a.position.z=.0085,e.add(a);let o="";return e.paint=(l,c)=>(l!==o&&(o=l,c(s,270,540),r.needsUpdate=!0),e),e}function Fs(n={}){let t=new Y;t.add(J(.32,.32,.06,n.cor||"#F4F1EA",0,0,0,{rot:[Math.PI/2,0,0],out:.01})),t.add(J(.34,.34,.05,n.aro||"#3A3A44",0,0,-.02,{rot:[Math.PI/2,0,0]}));for(let r=0;r<12;r++){let a=r/12*Math.PI*2;t.add(ft(.02,r%3?.03:.06,.01,"#3A3A44",Math.sin(a)*.26,Math.cos(a)*.26,.035))}let e=new Y,i=new Y,s=new Y;return[e,i,s].forEach(r=>{r.position.z=.04,t.add(r)}),e.add(ft(.03,.16,.01,"#1B1420",0,.07,0)),i.add(ft(.02,.24,.01,"#1B1420",0,.11,.005)),s.add(ft(.008,.25,.01,"#E2443A",0,.1,.01)),t.add(de(.025,"#1B1420",0,0,.05)),t.set=(r,a,o=0)=>(e.rotation.z=-(r%12+a/60)/12*Math.PI*2,i.rotation.z=-(a+o/60)/60*Math.PI*2,s.rotation.z=-o/60*Math.PI*2,t),t.set(10,10),t}function B0(n=0,t={}){let e=Pe(n+5),i=["#F2C14E","#8FD3C1","#F28F6B","#B9D98C","#F4E3C1","#9EC1E8","#E8A0B8"],s=t.cor||i[Math.floor(e()*i.length)],r=t.w||7,a=t.d||8,o=3.2,l=new Y,c=Yu("janelas",s,{vj:"#7FA6C4",caixilho:"#F4F1EA",noite:t.noite,seed:n}),h=pe((()=>{let f=c.clone();return f.needsUpdate=!0,f.repeat.set(Math.max(1,Math.round(r/6)),1),f})()),u=new it(new be(r,o,a),[xt(s),xt(s),xt("#C9C2B6"),xt(s),h,xt(s)]);if(u.position.y=o/2,u.castShadow=u.receiveShadow=!0,l.add(u),t.andar!==!1&&e()<.7){let f=Qt(256,256,E=>{E.fillStyle="#C46A4A",E.fillRect(0,0,256,256),E.fillStyle="#B25A3C";for(let g=0;g<16;g++)for(let m=0;m<8;m++)E.fillRect(m*32+g%2*16,g*16,30,14)});f.wrapS=f.wrapT=on,f.repeat.set(2,1);let p=new it(new be(r*.7,2.8,a*.7),pe(f));p.position.set(-r*.15,o+1.4,-a*.1),p.castShadow=!0,l.add(p)}l.add(ft(r+.3,.25,a+.3,"#D9D2C4",0,o+.12,0)),l.add(J(.55,.5,.9,"#3E7CC8",r*.3,o+.7,-a*.25,{seg:16})),l.add(J(.6,.6,.12,"#2F68AE",r*.3,o+1.2,-a*.25,{seg:16})),l.add(H(1.1,2.2,.1,t.porta||"#7A5236",-r*.25,1.1,a/2+.02,{r:.03})),l.add(ft(r,1.3,.2,"#E8E2D6",0,.65,a/2+2.2));let d=new Y;for(let f=0;f<9;f++)d.add(ft(.05,1.8,.05,"#3A3A44",-1+f*.25,.9,0));return d.add(ft(2.1,.06,.06,"#3A3A44",0,1.78,0)),d.add(ft(2.1,.06,.06,"#3A3A44",0,.3,0)),d.position.set(-r*.25,0,a/2+2.25),l.add(d),l}function my(n="madeira",t="#C8935E",e="#B98450"){let i=Qt(512,512,s=>{if(n==="madeira")for(let r=0;r<8;r++)s.fillStyle=r%2?t:e,s.fillRect(0,r*64,512,64),s.fillStyle="rgba(0,0,0,.08)",s.fillRect(0,r*64,512,3),s.fillRect(r*197%400+40,r*64,3,64);else if(n==="ladrilho"){s.fillStyle=t,s.fillRect(0,0,512,512),s.fillStyle=e;for(let r=0;r<8;r++)for(let a=0;a<8;a++)(r+a)%2&&s.fillRect(r*64,a*64,64,64)}else{s.fillStyle=t,s.fillRect(0,0,512,512),s.strokeStyle=e,s.lineWidth=4;for(let r=0;r<=8;r++)s.beginPath(),s.moveTo(r*64,0),s.lineTo(r*64,512),s.stroke(),s.beginPath(),s.moveTo(0,r*64),s.lineTo(512,r*64),s.stroke()}});return i.wrapS=i.wrapT=on,i}function Ii(n,t={}){let{w:e=8,d:i=7,h:s=3.2}=t,r=my(t.tipoPiso||"madeira",t.piso1,t.piso2);r.repeat.set(e/2.5,i/2.5);let a=new it(new Ot(e,i),pe(r));a.rotation.x=-Math.PI/2,a.position.set(0,0,-i/2+(t.dz||0)+i*0),a.receiveShadow=!0,n.add(a);let o=xt(t.parede||"#F3E3C8"),l=xt(t.parede2||t.parede||"#F3E3C8"),c=ft(e,s,.2,o,0,s/2,-i,{shadow:!1});return n.add(c),t.lados!==!1&&(n.add(ft(.2,s,i,l,-e/2,s/2,-i/2,{shadow:!1})),n.add(ft(.2,s,i,l,e/2,s/2,-i/2,{shadow:!1}))),t.meiaParede&&n.add(ft(e,s*.38,.05,xt(t.meiaParede),0,s*.19,-i+.12,{shadow:!1})),n.add(ft(e,.12,.06,t.rodape||"#FFFFFF",0,.06,-i+.12,{shadow:!1})),{w:e,d:i,h:s}}function Ps(n,t,e,i,s=1.6,r=1.3,a={}){let o=new Y,l=Qt(128,128,u=>{let d=u.createLinearGradient(0,0,0,128);d.addColorStop(0,a.c1||"#8CCBF2"),d.addColorStop(1,a.c2||"#DDF2FB"),u.fillStyle=d,u.fillRect(0,0,128,128)}),c=new it(new Ot(s,r),new te({map:l,color:a.tint||"#FFFFFF"}));o.add(c),o.userData.vidro=c;let h=a.moldura||"#FFFFFF";if(o.add(ft(s+.16,.1,.1,h,0,r/2,.03)),o.add(ft(s+.16,.1,.14,h,0,-r/2,.05)),o.add(ft(.1,r,.1,h,-s/2,0,.03)),o.add(ft(.1,r,.1,h,s/2,0,.03)),o.add(ft(.05,r,.06,h,0,0,.03)),o.add(ft(s,.05,.06,h,0,0,.03)),a.cortina)for(let u of[-1,1]){let d=H(.35,r+.4,.06,a.cortina,u*(s/2+.1),0,.1,{r:.03});o.add(d)}return o.position.set(t,e,i),a.ry&&(o.rotation.y=a.ry),n.add(o),o}function Cr(n,t,e,i=1.4,s=.8,r=.76,a="#B87A4A"){let o=new Y;o.add(H(i,.07,s,a,0,r,0,{r:.02,out:.008}));for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])o.add(H(.07,r,.07,a,l*(i/2-.08),r/2,c*(s/2-.08),{r:.02}));return o.position.set(t,0,e),n.add(o),o}function mo(n,t,e,i=0,s="#9A6236"){let r=new Y;r.add(H(.44,.06,.42,s,0,.45,0,{r:.02,out:.007})),r.add(H(.44,.5,.05,s,0,.72,-.19,{r:.02,out:.007}));for(let[a,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.add(H(.05,.45,.05,s,a*.18,.22,o*.17,{r:.01}));return r.position.set(t,0,e),r.rotation.y=i,n.add(r),r}function Is(n,t,e,i,s,r,a,o=0){let l=Qt(256,Math.round(256*r/s),(u,d,f)=>a(u,d,f)),c=new Y;c.add(H(s+.08,r+.08,.04,"#7A5236",0,0,0,{r:.01}));let h=new it(new Ot(s,r),pe(l));return h.position.z=.025,c.add(h),c.position.set(t,e,i),c.rotation.y=o,n.add(c),c}function U0(n,t={}){let e=Ii(n,{w:8,d:6,parede:t.noite?"#9FB6C8":"#DDEBF0",parede2:t.noite?"#93AABD":"#D2E3EA",tipoPiso:"grade",piso1:"#E8EEF0",piso2:"#CBD6DA",meiaParede:"#8FC9D8"}),i=new Y;i.add(H(1.1,.5,2.1,"#C8CCD2",0,.4,0,{r:.05,out:.01})),i.add(H(1.04,.16,2,"#FFFFFF",0,.72,0,{r:.07})),i.add(H(1.06,.12,1.25,t.lencol||"#BFE0EE",0,.84,.35,{r:.06})),i.add(H(.72,.2,.4,"#FFFFFF",0,.86,-.7,{r:.09,out:.006})),i.add(H(1.1,.7,.06,"#9EA6B0",0,.85,-1.05,{r:.03,out:.008}));for(let f of[-.98,.98])for(let p of[-.48,.48])i.add(J(.03,.03,.4,"#9EA6B0",p,.2,f,{seg:8}));i.position.set(-.6,0,-3.6),n.add(i);let s=new Y;s.add(H(.5,.4,.3,"#3A3A44",0,1.35,0,{r:.04,out:.008}));let r=new it(new Ot(.42,.3),new te({color:"#0E2A22"}));r.position.set(0,1.35,.16),s.add(r),s.add(J(.03,.03,1.2,"#9EA6B0",0,.6,0,{seg:8})),s.position.set(-1.9,0,-4.5),n.add(s);let a=Ps(n,1.9,1.8,-5.88,1.8,1.3,{c1:t.c1||"#8CCBF2",c2:t.c2||"#DDF2FB",cortina:"#8FC9D8"}),o=Fs();o.position.set(-.6,2.45,-5.88),n.add(o),mo(n,.5,-3.4,-Math.PI/2,"#8FC9D8");let l=new Y;l.add(J(.08,.06,.2,"#F4F1EA",0,.1,0,{out:.005}));for(let f=0;f<3;f++)l.add(J(.006,.006,.25,"#4C9A44",(f-1)*.04,.3,0,{seg:4})),l.add(de(.045,["#F28F6B","#F2C14E","#E8A0B8"][f],(f-1)*.05,.44,0,{seg:10}));l.position.set(1.2,.76,-4.9),n.add(l),Cr(n,1.2,-4.9,.6,.5,.76,"#E8E2D6");let c=ao(r,{bpm:64});Qn(n,(f,p)=>c(p));let h=new Y;h.add(J(.025,.025,2.1,"#C8CCD2",0,1.05,0,{seg:8})),h.add(ft(.5,.03,.03,"#C8CCD2",0,2.08,0));let u=H(.2,.3,.06,"#DDF2FB",.18,1.85,0,{r:.04,out:.006});h.add(u),h.add(J(.006,.006,1.1,"#DDF2FB",.18,1.15,0,{seg:4}));for(let f=0;f<4;f++)h.add(J(.02,.02,.3,"#9EA6B0",Math.cos(f*1.57)*.15,.03,Math.sin(f*1.57)*.15,{seg:4,rot:[0,0,Math.PI/2]}));h.position.set(-1.6,0,-3.2),n.add(h);let d=H(.06,2.2,2.4,"#C9E4EC",-3.4,1.3,-3.4,{r:.02});n.add(d);for(let f=0;f<6;f++)n.add(ft(.08,2.2,.02,"#B6D6E0",-3.36,1.3,-4.5+f*.44));return n.add(H(.7,.2,.45,"#F4F1EA",3.6,.95,-5.6,{r:.05,out:.008})),n.add(J(.02,.02,.25,"#C8CCD2",3.6,1.15,-5.75,{seg:6})),{C:e,cama:i,mon:s,tela:r,jan:a,rel:o}}var go="#1B1420",pt=(n,t,e,i,s,r,a=900,o="center",l="Inter")=>{n.fillStyle=r,n.font=`${a} ${s}px ${l}`,n.textAlign=o,n.textBaseline="middle",n.fillText(t,e,i)};function En(n,t,e=512,i=!0){let s=document.createElement("canvas");s.width=e,s.height=Math.round(e*t/n);let r=s.getContext("2d"),a=new Bn(s);a.colorSpace=Ue,a.anisotropy=8;let o=new it(new Ot(n,t),i?new te({map:a,toneMapped:!1}):pe(a)),l=null;return o.paint=(c,h)=>(c!==l&&(l=c,r.setTransform(1,0,0,1,0,0),h(r,s.width,s.height),a.needsUpdate=!0),o),o}function Ds(n,t,e,i){n.fillStyle="#F2A23A",n.beginPath(),n.arc(t,e,i,0,7),n.fill(),n.lineWidth=i*.08,n.strokeStyle="#C9781E",n.beginPath(),n.arc(t,e,i*.86,0,7),n.stroke(),n.save(),n.translate(t,e),n.rotate(.24),pt(n,"\u20BF",0,i*.06,i*1.25,"#FFFFFF",900),n.restore()}function Ya(){let n=new Y,t=new Y;n.add(t),t.add(H(2.5,2.2,2.2,"#F4F1EA",0,1.75,3.2,{r:.2,out:.012})),t.add(H(2.3,.9,.05,"#3B4A60",0,2.25,4.31,{r:.03}));for(let u of[-1,1])t.add(H(.05,.7,1.1,"#3B4A60",u*1.26,2.2,3.4,{r:.02}));t.add(ft(2.52,.32,2.22,"#2E9C5A",0,1.05,3.2));let e=new te({color:"#FFF4D0"});for(let u of[-1,1]){let d=new it(new Mn(.16,16),e);d.position.set(u*.9,1.1,4.32),t.add(d)}t.add(H(2.6,.3,.3,"#9EA6B0",0,.75,4.35,{r:.08})),t.add(H(2.6,3,5.6,"#F28A2E",0,2.15,-.9,{r:.25,out:.012})),t.add(ft(2.64,.35,5.6,"#2E9C5A",0,1.25,-.9));let i=Qt(1024,256,(u,d,f)=>{u.fillStyle="#F28A2E",u.fillRect(0,0,d,f),pt(u,"LIMPEZA URBANA",d/2,f*.42,120,"#FFFFFF"),u.fillStyle="#FFFFFF",u.fillRect(d*.1,f*.72,d*.8,10),pt(u,"COLETA DOMICILIAR",d/2,f*.86,54,"#FFF2DE",800)});for(let u of[-1,1]){let d=new it(new Ot(4.8,1.2),pe(i));d.position.set(u*1.32,2.4,-.9),d.rotation.y=u*Math.PI/2,t.add(d)}t.add(H(2.7,.45,1.2,"#D9741E",0,2.62,-4.1,{r:.1,out:.012}));for(let u of[-1,1])t.add(H(.3,2.2,1.2,"#D9741E",u*1.2,1.5,-4.1,{r:.08,out:.012}));let s=ft(2.2,1.2,.1,"#2A2420",0,1.3,-3.9);t.add(s),t.add(ft(2.3,.12,.9,"#B8601A",0,.72,-4.3));let r=[],a=Pe(4);for(let u=0;u<9;u++){let d=Di(["#26262C","#3A3A44","#2A3A2A","#F4F1EA","#3E5C8A"][u%5],a()*9);d.scale.setScalar(.55+a()*.2),d.position.set(-.8+u%4*.52,.78+Math.floor(u/4)*.3,-4.15-u%2*.25),t.add(d),r.push(d)}t.add(H(2.8,.25,.3,"#2E9C5A",0,.6,-4.75,{r:.06}));let o=new it(new ee(.16,14,10),new te({color:"#FFB020"}));o.position.set(0,3,2.3),t.add(o);for(let u of[-1,1]){let d=new it(new be(.3,.18,.04),new te({color:"#E23A3A"}));d.position.set(u*1.15,.95,-4.73),t.add(d)}let l=new Qe(.55,.55,.42,20);l.rotateZ(Math.PI/2);let c=[];for(let[u,d]of[[-1.2,3.2],[1.2,3.2],[-1.2,-1.6],[1.2,-1.6],[-1.2,-2.9],[1.2,-2.9]]){let f=mn(l,"#26262C",{pos:[u,.55,d]});f.add(mn(new Qe(.26,.26,.44,12).rotateZ(Math.PI/2),"#C8CCD2")),n.add(f),c.push(f)}let h=xs(2.2,.4);return h.scale.set(1.3,4.2,1),h.position.y=.01,n.add(h),n.userData={rodas:c,gf:o,sacos:r,body:t},n}function Za(n,t){n.userData.rodas.forEach(e=>e.rotation.x=t/.55)}function Di(n="#26262C",t=0){let e=new Y,i=de(.42,n,0,.36,0,{seg:14,out:.01});i.scale.set(1,.85+t%3*.05,.95),e.add(i);let s=J(.05,.12,.2,n,0,.78,0,{seg:8,out:.006});e.add(s);for(let r of[-1,1]){let a=J(.025,.04,.16,n,r*.07,.9,0,{seg:6});a.rotation.z=r*.7,e.add(a)}return e}var N0="#E8742A";function gy(n=N0){return Qt(256,340,(t,e,i)=>{t.fillStyle=n,t.fillRect(0,0,e,i),t.fillStyle="#FFFFFF",t.fillRect(e*.15,i*.14,e*.7,i*.2),pt(t,"CADERNO",e/2,i*.2,30,"#5A3018"),pt(t,"Guilherme \xB7 1\xBA C",e/2,i*.28,18,"#5A3018",700),t.fillStyle="#F2C230",t.beginPath(),t.arc(e*.72,i*.7,34,0,7),t.fill(),pt(t,"\u2605",e*.72,i*.705,44,"#C0392B"),t.fillStyle="#2A2420";for(let s=0;s<14;s++)t.fillRect(4,10+s*23,10,8)})}function ci(n={}){let t=new Y,e=pe(gy(n.cor)),i=xt("#F4F1EA"),s=xt(n.cor||N0),r=new it(ss(.24,.025,.32,.006),[i,i,e,s,i,i]);return r.castShadow=!0,Fi(r,.004),t.add(r),t}function cn(n,t,e,i){n.fillStyle="#FBF8EE",n.fillRect(0,0,t,e),n.strokeStyle="#9CC4E4",n.lineWidth=2;for(let s=e*.14;s<e;s+=e*.062)n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke();n.strokeStyle="#E88A8A",n.lineWidth=3,n.beginPath(),n.moveTo(t*.12,0),n.lineTo(t*.12,e),n.stroke(),i&&i(n,t,e)}var ge=(n,t,e,i,s,r="#2A3A7A",a="left")=>{n.fillStyle=r,n.font=`700 ${s}px Caveat`,n.textAlign=a,n.textBaseline="middle",n.fillText(t,e,i)};function Li(){let n=new Y;n.add(H(.62,.02,.4,N0,0,.01,0,{r:.006,out:.004}));let t=En(.29,.38,512,!1),e=En(.29,.38,512,!1);return t.rotation.x=e.rotation.x=-Math.PI/2,t.position.set(-.148,.023,0),e.position.set(.148,.023,0),n.add(t,e),n.add(J(.006,.006,.38,"#9EA6B0",0,.03,0,{rot:[Math.PI/2,0,0],seg:6})),n.userData={E:t,D:e},n}function O0(n={}){let t=new Y;t.add(H(.5,.025,.34,n.cor||"#8E949C",0,.012,0,{r:.01,out:.005})),t.add(ft(.44,.004,.2,"#2A2A30",0,.027,-.03));let e=new Y;e.position.set(0,.025,-.17),t.add(e),e.add(H(.5,.34,.02,n.cor||"#8E949C",0,.17,-.01,{r:.01,out:.005}));let i=En(.46,.29,512);return i.position.set(0,.17,.002),e.add(i),e.rotation.x=-.25,t.userData={sc:i,tampa:e},t}function Qu(){let n=new Y;n.add(H(.055,.11,.018,"#2A2E38",0,0,0,{r:.012,out:.004}));let t=En(.04,.035,128);t.position.set(0,.025,.0095),n.add(t),t.paint("0",(e,i,s)=>{e.fillStyle="#9FD6A8",e.fillRect(0,0,i,s),pt(e,"07:02",i/2,s*.5,30,"#1E3A22",800,"center","'IBM Plex Mono'")});for(let e=0;e<12;e++)n.add(ft(.01,.007,.004,"#C8CCD2",-.014+e%3*.014,-.008-Math.floor(e/3)*.011,.01));return n}function Ku(){let n=new Y;n.add(H(.5,.42,.44,"#E8E2CC",0,.31,-.05,{r:.04,out:.007})),n.add(H(.38,.3,.3,"#DCD4BA",0,.3,-.32,{r:.08}));let t=En(.4,.3,512);t.position.set(0,.32,.172),n.add(t),n.add(H(.2,.06,.18,"#DCD4BA",0,.05,-.05,{r:.02}));let e=H(.46,.025,.16,"#E8E2CC",0,.02,.32,{r:.01,out:.004});n.add(e);for(let i=0;i<30;i++)n.add(ft(.024,.006,.022,"#CFC7AE",-.2+i%15*.029,.036,.27+Math.floor(i/15)*.035));return n.add(H(.06,.03,.1,"#E8E2CC",.32,.02,.32,{r:.015})),n.userData={sc:t},n}function $a(){let n=new Y;n.add(H(.34,.08,.26,"#2A2A33",0,.04,0,{r:.02,out:.005})),n.add(ft(.12,.004,.01,"#5AE07A",.08,.05,.13));let t=new Y;t.add(H(.16,.04,.09,"#3A3A44",0,0,0,{r:.02,out:.004}));for(let e of[-1,1])t.add(de(.03,"#3A3A44",e*.07,-.005,.03));return t.position.set(.05,.1,.2),n.add(t),n}function ju(n,t=.26,e=.32){let i=new Y;i.add(H(t+.04,e+.04,.025,"#7A5236",0,e/2+.02,0,{r:.008,out:.004}));let s=new it(new Ot(t,e),pe(Qt(256,Math.round(256*e/t),n)));s.position.set(0,e/2+.02,.014),i.add(s);let r=ft(.03,e*.8,.03,"#7A5236",0,e*.4,-.08);return r.rotation.x=-.35,i.add(r),i}function z0(n,t,e){let i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#9FD4F2"),i.addColorStop(1,"#F6E7C8"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="#7CC46A",n.fillRect(0,e*.82,t,e*.18),n.lineWidth=6,n.strokeStyle=go;let s=(r,a,o,l,c)=>{n.fillStyle=l,n.beginPath(),n.arc(r,a,o,0,7),n.fill(),n.stroke(),n.fillStyle=c,n.beginPath(),n.arc(r,a-o*.2,o*1.02,Math.PI*1.05,Math.PI*1.95),n.fill(),n.fillStyle=go;for(let h of[-1,1])n.beginPath(),n.arc(r+h*o*.35,a+o*.05,o*.1,0,7),n.fill();n.beginPath(),n.lineWidth=5,n.arc(r,a+o*.3,o*.3,.3,Math.PI-.3),n.stroke(),n.lineWidth=6};n.fillStyle="#22355E",n.beginPath(),n.ellipse(t/2,e*.95,t*.3,e*.3,0,Math.PI,0),n.fill(),n.stroke(),s(t/2,e*.55,t*.17,"#9A6646","#2B2422"),n.fillStyle="#4E4642",n.beginPath(),n.arc(t/2,e*.62,t*.14,.1,Math.PI-.1),n.fill(),n.fillStyle="#3A9AD9",n.beginPath(),n.ellipse(t/2,e*.37,t*.14,e*.07,0,Math.PI,0),n.fill(),s(t/2,e*.24,t*.11,"#E3AE86","#4A2A18"),n.strokeStyle="rgba(80,60,30,.35)",n.lineWidth=t*.03,n.strokeRect(t*.03,e*.03,t*.94,e*.94)}function k0(n=1.6,t=.9){let e=new Y;e.add(H(n+.08,t+.08,.08,"#1E1E24",0,0,0,{r:.02,out:.008}));let i=En(n,t,768);return i.position.z=.045,e.add(i),e.userData={sc:i},e}function Ls(n=.5){let t=pe(Qt(256,256,r=>{r.fillStyle="#C9781E",r.fillRect(0,0,256,256),Ds(r,128,128,120)})),e=xt("#D98A24"),i=new it(new Qe(n,n,n*.16,40),[e,t,t]);i.rotation.x=Math.PI/2,i.castShadow=!0,Fi(i,.01);let s=new Y;return s.add(i),s}function td(){let n=new Y;n.add(H(1.6,1.8,1.4,"#5A6578",0,.9,0,{r:.08,out:.012}));let t=new Y;t.position.set(-.7,.9,.72),n.add(t),t.add(H(1.4,1.6,.12,"#76839A",.7,0,0,{r:.05,out:.01}));let e=new Y;e.position.set(.7,0,.08),t.add(e),e.add(J(.3,.3,.08,"#C8CCD2",0,0,0,{rot:[Math.PI/2,0,0],out:.006}));for(let s=0;s<4;s++){let r=ft(.06,.5,.05,"#9EA6B0",0,0,.06);r.rotation.z=s*Math.PI/4,e.add(r)}let i=new Y;for(let s=0;s<7;s++){let r=Ls(.22);r.position.set(-.45+s%4*.3,.35+Math.floor(s/4)*.5,-.1),r.rotation.y=.3,i.add(r)}return n.add(i),n.userData={porta:t,vol:e,dentro:i},n}function ed(){let n=new Y;return n.add(J(.12,.12,.05,"#F2C230",0,0,0,{rot:[Math.PI/2,0,0],out:.006})),n.add(J(.05,.05,.07,"#C99A1E",0,0,0,{rot:[Math.PI/2,0,0]})),n.add(ft(.36,.05,.04,"#F2C230",.28,0,0)),n.add(ft(.04,.1,.04,"#F2C230",.38,-.06,0)),n.add(ft(.04,.07,.04,"#F2C230",.3,-.05,0)),n}function nd(){let n=new Y;n.add(H(.5,.42,.2,"#F2C230",0,0,0,{r:.06,out:.008}));let t=new it(new Zn(.16,.045,10,24,Math.PI),xt("#C8CCD2"));return t.position.y=.2,Fi(t,.006),n.add(t),n.add(J(.05,.05,.21,go,0,-.02,0,{rot:[Math.PI/2,0,0]})),n.userData={arco:t},n}function id(){let n=new Y,t=Qt(256,256,a=>{a.fillStyle="#C46A4A",a.fillRect(0,0,256,256),a.fillStyle="#AE563A";for(let o=0;o<16;o++)for(let l=0;l<8;l++)a.fillRect(l*32+o%2*16,o*16,30,14)});t.wrapS=t.wrapT=on,t.repeat.set(2,2);let e=pe(t);n.add(mn(new be(1.8,1,.9),e,{pos:[0,.5,0],out:.01})),n.add(mn(new be(1.8,1.1,.2),e,{pos:[0,1.55,-.35],out:.01}));for(let a of[-1,1])n.add(mn(new be(.2,1.1,.9),e,{pos:[a*.8,1.55,0],out:.01}));n.add(mn(new Qe(.3,.55,1,4),e,{pos:[0,2.6,-.1],out:.01,rot:[0,Math.PI/4,0]})),n.add(mn(new be(.4,1.4,.4),e,{pos:[0,3.6,-.1],out:.01})),n.add(ft(1.4,.12,.7,"#2A2420",0,1.04,0));let i=new it(new be(1.3,.04,.6),new te({color:"#FF7A2A"}));i.position.set(0,1.1,0),n.add(i);for(let a=0;a<7;a++)n.add(J(.008,.008,.7,"#9EA6B0",-.6+a*.2,1.38,0,{rot:[Math.PI/2,0,0],seg:4}));let s=[];for(let a=0;a<4;a++){let o=new Y;o.add(J(.006,.006,.9,"#C8CCD2",0,0,0,{rot:[Math.PI/2,0,0],seg:4}));for(let l=0;l<4;l++){let c=H(.1,.08,.1,l%2?"#8A3A22":"#A84A2A",0,0,-.25+l*.16,{r:.03,out:.004});o.add(c)}o.position.set(-.45+a*.3,1.42,0),n.add(o),s.push(o)}let r=new Ze("#FF8A3A",3,3,1.8);return r.position.set(0,1.4,.5),n.add(r),n.userData={carnes:s,brasa:i,L:r},n}function sd(n="#C98A4A"){let t=new Y,e=H(.5,.26,.24,n,0,.36,0,{r:.1,out:.007});t.add(e);let i=new Y;i.position.set(.3,.52,0),t.add(i),i.add(de(.15,n,0,0,0,{out:.007})),i.add(de(.07,"#E8C89A",.12,-.04,0,{out:.005})),i.add(de(.025,go,.19,-.02,0));for(let a of[-1,1]){i.add(de(.022,go,.1,.05,a*.07));let o=H(.05,.14,.09,"#8A5A2A",-.03,.1,a*.12,{r:.02,out:.004});o.rotation.x=a*.4,i.add(o)}for(let[a,o]of[[-.18,-.08],[-.18,.08],[.18,-.08],[.18,.08]])t.add(J(.04,.04,.26,n,a,.13,o,{seg:8,out:.005}));let s=new Y;s.position.set(-.26,.45,0),s.add(J(.025,.02,.2,n,0,.09,0,{seg:6,out:.004})),t.add(s);let r=xs(.4,.35);return r.position.y=.01,t.add(r),t.userData={cab:i,rabo:s},t}function rd(){let n=new Y;n.add(H(.7,.14,2,"#F4F6F8",0,.85,0,{r:.05,out:.008})),n.add(H(.72,.06,2,"#9EA6B0",0,.74,0,{r:.02}));for(let t of[-.85,.85])for(let e of[-.3,.3])n.add(J(.025,.025,.7,"#9EA6B0",e,.38,t,{seg:6})),n.add(de(.06,"#2A2A30",e,.05,t));return n}function od(){let n=new Y;n.add(J(.18,.14,.3,"#2E8FD8",0,.15,0,{seg:16,out:.006}));let t=new it(new Zn(.17,.01,6,20,Math.PI),xt("#C8CCD2"));return t.position.y=.3,n.add(t),n}function ad(){let n=new Y;n.add(J(.018,.018,1.3,"#C98A4A",0,.65,0,{seg:6,out:.004})),n.add(H(.32,.08,.08,"#E2443A",0,.02,0,{r:.02,out:.004}));for(let t=0;t<8;t++)n.add(ft(.02,.12,.03,"#F2C230",-.13+t*.037,-.07,0));return n}function yo(n="#F4F1EA"){let t=new Y;t.add(J(.045,.035,.08,n,0,.04,0,{seg:14,out:.004})),t.add(J(.038,.038,.005,"#5A3418",0,.078,0,{seg:14}));let e=new it(new Zn(.022,.008,6,12),xt(n));return e.position.set(.05,.045,0),t.add(e),t}function ld(){let n=new Y;return n.add(J(.07,.07,.3,"#C0392B",0,.15,0,{seg:14,out:.005})),n.add(J(.05,.07,.08,"#3A3A44",0,.34,0,{seg:14})),n}function cd(n="GASOLINA SOBE DE NOVO"){return new it(new Ot(.42,.3),pe(Qt(420,300,(t,e,i)=>{t.fillStyle="#EDE8DC",t.fillRect(0,0,e,i),pt(t,"DI\xC1RIO DA CIDADE",e/2,26,26,"#1B1420",900,"center","Fraunces"),t.fillStyle="#1B1420",t.fillRect(10,44,e-20,3),pt(t,n,e/2,80,30,"#B8322B",900),t.fillStyle="#9A958A";for(let s=0;s<9;s++)t.fillRect(14+s%3*136,112+Math.floor(s/3)*56,124,44)}),{side:De}))}function hd(){let n=new Y;return n.add(H(.32,.18,.12,"#8A5A36",0,.09,0,{r:.03,out:.005})),n.add(J(.05,.05,.01,"#E8E2D6",-.08,.09,.062,{rot:[Math.PI/2,0,0]})),n.add(ft(.12,.06,.01,"#F2C230",.07,.11,.062)),n}function Ja(n="#F4F1EA",t=!0){let e=new Y;return e.add(J(.12,.1,.02,n,0,.01,0,{seg:18,out:.004})),t&&(e.add(de(.05,"#F6F1DA",-.03,.03,0,{seg:8})),e.add(de(.04,"#8A4A22",.04,.03,.02,{seg:8})),e.add(de(.03,"#5DAA4E",.02,.03,-.04,{seg:8}))),e}var Hn=(n,t)=>Mr(n,t),Fr={alvorada:{topo:"#5E6FB8",base:"#FFB98A",key:"#FFC48A",sky:"#C9B8F0",ground:"#7A6A80",ki:1.7,hemi:1.05,pos:[-30,9,-40]},dia:{topo:"#5FB4EE",base:"#D6EEF9",key:"#FFF4E2",sky:"#EAF2FF",ground:"#B9A898",ki:2.3,hemi:1.4,pos:[30,50,25]},manha:{topo:"#6EC0F2",base:"#E8F4F8",key:"#FFEFD2",sky:"#EAF2FF",ground:"#B9A898",ki:2.1,hemi:1.35,pos:[25,30,30]},noite:{topo:"#121A3A",base:"#2E3C74",key:"#9FB0FF",sky:"#6A7AC0",ground:"#2A2A40",ki:.45,hemi:.5,pos:[-10,30,10]},tarde:{topo:"#F28E5E",base:"#FFD9A0",key:"#FFB070",sky:"#FFE2C0",ground:"#9A7A6A",ki:2,hemi:1.1,pos:[-30,12,-20]}};function ls(n,t={}){let e=Fr[t.hora||"alvorada"];if(rs(n,e.topo,e.base,{n:t.hora==="noite"?0:6}),t.hora==="alvorada"){let a=new it(new Mn(16,40),new te({color:"#FFE7B0",fog:!1}));a.position.set(-40,18,-380),n.add(a)}Mr(n,{r:t.r||40,far:200,pos:e.pos,target:t.alvo||[0,0,-20],ki:e.ki,hemi:e.hemi,key:e.key,sky:e.sky,ground:e.ground}),Zu(n,{largura:16,comp:300,z:-100,faixas:4,calc:6,c1:"#D3CEC6",c2:"#BFB8AC"});let i=Pe(t.seed||12),s=["#E8DCC8","#D9C9B0","#F2E6D2","#CFC6BC","#E6CDB8","#C8D2D6"],r=[];for(let a of[-1,1]){let o=40,l=0;for(;o>-240;){let c=12+i()*8,h=14+i()*8,u=14+i()*30,d=i()<.4;if(t.cruz!==void 0&&o-h<t.cruz+7&&o>t.cruz-7){o=t.cruz-7;continue}let f=po({w:c,d:h,h:u,tipo:d?"vidro":"janelas",cor:s[(l+(a>0?2:0))%6],v1:"#A8D2EE",v2:"#6FA6D2",vj:t.hora==="noite"?"#FFD98A":"#8DB8D8",seed:l+(a>0?50:0),corTerreo:["#4A4E58","#5A4E46","#3E4A56"][l%3],noite:t.hora==="noite"});if(f.position.set(a*(14+c/2+.5),0,o-h/2),n.add(f),t.lojas!==!1){let p=zu(l*3+(a>0?1:0)+2,Math.min(c*.7,7));p.position.set(a*14.3,4.4,o-h/2),p.rotation.y=-a*Math.PI/2,n.add(p)}r.push(f),o-=h+2+i()*3,l++}}for(let a=0;a<12;a++)for(let o of[-1,1])Ju(n,o*8.6,20-a*22,-o,t.hora==="noite");for(let a=0;a<16;a++)Rr(n,(a%2?1:-1)*12.2,14-a*15,.8,a);if(t.detalhes!==!1&&ku(n,{xs:[8.5,13.3],z0:24,z1:-200,evita:[[20,22],[14,15]],seed:(t.seed||12)+5,passo:7}),t.hora!=="noite"&&t.passaros!==!1&&oo(n,{n:8,centro:[0,26,-70],raio:36,v:.1,seed:3}),t.faixa&&$u(n,0,t.faixa,16),t.cruz!==void 0){let a=new it(new Ot(200,12),xt("#5A5C62"));a.rotation.x=-Math.PI/2,a.position.set(0,.02,t.cruz),a.receiveShadow=!0,n.add(a)}return{P:r}}function Qa(n,t={}){Hn(n,{r:9,pos:[4,9,6],ki:t.noite===!1?2:.35,hemi:t.noite===!1?1.3:.55,sky:"#7A8AD0",key:"#AFC0FF",ground:"#3A3048"});let e=Ii(n,{w:10,d:7,parede:"#5D6D8E",parede2:"#53627F",tipoPiso:"madeira",piso1:"#7A5A44",piso2:"#6E503C"}),i=Qt(512,256,(p,E,g)=>{let m=p.createLinearGradient(0,0,0,g);m.addColorStop(0,"#0E1530"),m.addColorStop(1,"#2C3B70"),p.fillStyle=m,p.fillRect(0,0,E,g);let S=Pe(3);for(let v=0;v<26;v++){let y=14+S()*30,T=40+S()*160,x=v*20;p.fillStyle=["#1B2346","#222B52","#151C3A"][v%3],p.fillRect(x,g-T,y,T);for(let w=0;w<30;w++)S()<.4&&(p.fillStyle=S()<.7?"#FFD98A":"#9FD6FF",p.fillRect(x+3+w%3*5,g-T+6+Math.floor(w/3)*9,3,4))}p.fillStyle="#F4F1EA",p.beginPath(),p.arc(420,50,16,0,7),p.fill()}),s=new it(new Ot(3.6,2),new te({map:i}));s.position.set(1.6,1.75,-6.88),n.add(s);for(let p of[-.2,1.6,3.4])n.add(ft(.08,2,.08,"#2A2A33",p,1.75,-6.85));n.add(ft(3.7,.08,.1,"#2A2A33",1.6,.75,-6.85)),n.add(ft(3.7,.08,.1,"#2A2A33",1.6,2.75,-6.85));let r=new Y;r.add(H(2.6,.45,.95,"#8E4A3A",0,.3,0,{r:.1,out:.01})),r.add(H(2.6,.7,.3,"#8E4A3A",0,.75,-.38,{r:.12,out:.01}));for(let p of[-1,1])r.add(H(.3,.6,.95,"#7E3E30",p*1.2,.5,0,{r:.1,out:.01}));r.add(H(.5,.35,.15,"#E2B13A",-.8,.7,-.15,{r:.07,out:.006})),r.position.set(-1.6,0,-4.4),n.add(r);let a=Cr(n,-1.6,-3,1.3,.6,.42,"#3A3A44"),o=O0();o.position.set(-1.5,.43,-3),o.rotation.y=Math.PI,n.add(o);for(let p=0;p<3;p++){let E=yo(["#F4F1EA","#E2443A","#2E6FB8"][p]);E.position.set(-2.1+p*.16,.43,-2.85+p%2*.1),n.add(E)}n.add(H(.4,.06,.4,"#D9B98A",-1.05,.46,-3.1,{r:.01,out:.004}));for(let p=0;p<4;p++)n.add(J(.03,.03,.1,["#C0392B","#2E9C5A","#9EA6B0"][p%3],-2.15+p*.06,.47,-3.15,{seg:10}));for(let p=0;p<5;p++){let E=new it(new Ot(.2,.28),xt("#F4F1EA"));E.rotation.x=-Math.PI/2,E.rotation.z=p,E.position.set(-.4+p*.3,.012,-2.4-p%2*.4),n.add(E)}n.add(H(2.2,.5,.45,"#3A3A44",2.6,.25,-6.4,{r:.03,out:.008}));let l=ju(z0);l.position.set(2.1,.5,-6.35),l.rotation.y=-.2,n.add(l);let c=new Y;c.add(J(.02,.02,1.5,"#2A2A33",0,.75,0)),c.add(J(.18,.25,.3,"#E8C27A",0,1.55,0,{out:.006})),c.position.set(-3.6,0,-5.6),n.add(c);let h=new Ze("#FFC27A",t.noite===!1?0:3.5,5,1.6);h.position.set(-3.6,1.5,-5.4),n.add(h);let u=new Ze("#8FC4FF",2.4,3,1.8);u.position.set(-1.5,.8,-2.6),n.add(u);let d=Fs({cor:"#F4F1EA",aro:"#2A2A33"});d.position.set(-2.2,2.4,-6.88),n.add(d),d.set(3,12);let f=Sr(5);return f.position.set(4.3,0,-5.2),n.add(f),n.add(H(.6,.9,.5,"#2E6FB8",3.9,.45,-2,{r:.05})),Is(n,-4.85,1.9,-3.2,1,.7,(p,E,g)=>{p.fillStyle="#E2B13A",p.fillRect(0,0,E,g),p.fillStyle="#1B1420",p.beginPath(),p.moveTo(0,g),p.lineTo(E*.4,g*.3),p.lineTo(E*.7,g*.7),p.lineTo(E,g*.2),p.lineTo(E,g),p.fill()},Math.PI/2),{C:e,nb:o,rel:d,sofa:r,pr:l,Ln:u}}function An(n,t={}){Hn(n,{r:10,pos:t.noite?[-6,9,5]:[6,9,6],ki:t.noite?.5:2,hemi:t.noite?.6:1.4,sky:t.noite?"#7A8AD0":"#EAF2FF",key:t.noite?"#AFC0FF":"#FFF0D8"});let e=Ii(n,{w:12,d:7,parede:t.sepia?"#E8D8BE":"#F3D9C9",parede2:"#EDCDBA",tipoPiso:"ladrilho",piso1:"#E6DCCB",piso2:"#D8CBB4",meiaParede:"#DDBBA6"});n.add(H(3.6,.9,.7,"#355C8C",2.6,.45,-6.55,{r:.03,out:.008})),n.add(H(3.7,.06,.74,"#EAE6DD",2.6,.93,-6.55,{r:.02}));for(let v=0;v<4;v++)n.add(H(.84,.7,.04,"#3F6A9C",1.2+v*.92,.45,-6.18,{r:.02}));n.add(H(2.4,.7,.45,"#355C8C",2.2,2.2,-6.7,{r:.03,out:.008}));let i=Qt(256,64,v=>{v.fillStyle="#FFFFFF",v.fillRect(0,0,256,64),v.strokeStyle="#B9DCE6",v.lineWidth=3;for(let y=0;y<=16;y++)v.beginPath(),v.moveTo(y*16,0),v.lineTo(y*16,64),v.stroke();for(let y=0;y<=4;y++)v.beginPath(),v.moveTo(0,y*16),v.lineTo(256,y*16),v.stroke()}),s=new it(new Ot(3.6,.9),pe(i));s.position.set(2.6,1.42,-6.88),n.add(s),n.add(H(.9,.92,.7,"#F4F1EA",4.85,.46,-6.55,{r:.04,out:.008})),n.add(H(.92,.05,.72,"#3A3A44",4.85,.95,-6.55));let r=J(.2,.18,.2,"#C8CCD2",4.75,1.08,-6.55,{out:.006});n.add(r),br(n,4.75,1.2,-6.55,{n:6,tam:.14,alt:.7}),n.add(H(.9,1.95,.75,"#E8EEF2",5.4,.97,-5.2,{r:.1,out:.01})),n.add(H(.04,.4,.06,"#9EA6B0",4.98,1.4,-4.8,{r:.02}));for(let v=0;v<4;v++)n.add(H(.12,.12,.02,["#E2443A","#F2C230","#2E9C5A","#2E6FB8"][v],5,1+v*.2,-4.83-v%2*.2,{r:.03}));let a=Ps(n,3,1.75,-6.88,1.3,1,{cortina:"#F2C230",c1:t.noite?"#1B2550":t.alvorada?"#7A80C8":"#8CCBF2",c2:t.noite?"#3A4A8A":t.alvorada?"#FFB98A":"#DDF2FB"}),o=new Y;o.add(J(.75,.75,.06,"#A8743E",0,.76,0,{seg:32,out:.008})),o.add(J(.08,.12,.74,"#8A5A36",0,.38,0)),o.add(J(.35,.35,.04,"#8A5A36",0,.02,0)),o.position.set(.2,0,-3.6),n.add(o);let l=new it(new Mn(.68,32),pe(Qt(128,128,v=>{v.fillStyle="#F4F1EA",v.fillRect(0,0,128,128),v.fillStyle="#7FB8E0";for(let y=0;y<8;y++)for(let T=0;T<8;T++)(y+T)%2&&v.fillRect(y*16,T*16,16,16)})));l.rotation.x=-Math.PI/2,l.position.set(.2,.795,-3.6),n.add(l);let c=[[-.8,-3.6,Math.PI/2],[1.2,-3.6,-Math.PI/2],[.2,-4.6,0],[.2,-2.6,Math.PI]].map(([v,y,T])=>mo(n,v,y,T,"#8A5A36")),h=ld();h.position.set(.45,.79,-3.85),n.add(h);let u=yo();u.position.set(.85,.79,-3.55),n.add(u),n.add(H(.3,.1,.14,"#E8B86A",-.05,.84,-3.75,{r:.05,out:.004}));let d=hd();d.position.set(1.6,.96,-6.6),n.add(d),n.add(ft(.25,3.2,3.6,"#EDCDBA",-2.6,1.6,-5.2,{shadow:!1}));let f=new Y;for(let v=0;v<12;v++){let y=.24*(v+1);f.add(ft(1.3,y,.3,v%2?"#8A5A36":"#946240",0,y/2,-v*.3)),f.add(ft(1.32,.04,.32,"#6E4628",0,y+.02,-v*.3))}for(let v=0;v<12;v++)f.add(J(.02,.02,.9,"#5A3A22",.62,.24*(v+1)+.45,-v*.3,{seg:6}));let p=J(.035,.035,4.3,"#5A3A22",.62,2.46,-1.65,{seg:8});p.rotation.x=-Math.atan2(3.3,2.64),f.add(p),f.position.set(-5.3,0,-3.4),n.add(f);let E=new Y;E.add(H(1,2.15,.08,"#6E4628",.5,1.08,0,{r:.03,out:.008})),E.add(de(.05,"#E8C060",.88,1.05,.07)),E.position.set(-5.88,0,-1.2),E.rotation.y=Math.PI/2,n.add(E);let g=Fs({cor:"#FFFFFF",aro:"#355C8C"});g.position.set(.4,2.45,-6.88),n.add(g);let m=new it(new Ot(.5,.66),pe(Qt(128,170,(v,y,T)=>{v.fillStyle="#FFFFFF",v.fillRect(0,0,y,T),v.fillStyle="#C0392B",v.fillRect(0,0,y,42),pt(v,t.ano||"2012",y/2,22,28,"#fff"),v.fillStyle="#3A3A44",v.font="600 13px Inter",v.textAlign="center";for(let x=0;x<31;x++)v.fillText(String(x+1),12+x%7*17,62+Math.floor(x/7)*22)})));m.position.set(-1,1.7,-6.88),n.add(m),Is(n,-2.47,1.9,-4.6,.5,.62,z0,Math.PI/2);let S=Sr(2);return S.position.set(-2.1,0,-6.3),n.add(S),{C:e,rel:g,porta:E,mt:o,cads:c,jan:a,xi:u,cal:m}}function hn(n,t={}){let e=!!t.noite;Hn(n,{r:9,pos:e?[-4,9,5]:[5,9,6],ki:e?.35:1.9,hemi:e?.5:1.35,sky:e?"#6A7AC0":"#EAF2FF",key:e?"#9FB0FF":"#FFF0D8"});let i=Ii(n,{w:8,d:6.5,parede:e?"#5E7E78":"#9FD3B9",parede2:e?"#557270":"#8FC6AC",tipoPiso:"madeira",piso1:"#B98A5E",piso2:"#AD7F52"}),s=new Y;s.add(H(1.15,.36,2.1,"#6E4A2E",0,.2,0,{r:.05,out:.01})),s.add(H(1.08,.2,2,"#F4F1EA",0,.46,0,{r:.08})),s.add(H(1.1,.16,1.25,"#2E6FB8",0,.58,.38,{r:.07})),s.add(H(.66,.16,.36,"#FFFFFF",0,.62,-.72,{r:.08,out:.006})),s.add(H(1.15,.9,.1,"#6E4A2E",0,.6,-1.05,{r:.04,out:.01})),s.position.set(-3.3,0,-4.9),s.rotation.y=Math.PI/2,n.add(s),n.add(H(.5,.5,.45,"#C98B5A",-3.5,.25,-6.1,{r:.03,out:.008}));let r=Qu();r.rotation.x=-Math.PI/2,r.position.set(-3.55,.51,-6.05),n.add(r);let a=new Y;a.add(J(.09,.09,.07,"#E2443A",0,0,0,{rot:[Math.PI/2,0,0],out:.005})),a.add(new it(new Mn(.075,20),new te({color:"#F4F1EA"})).translateZ(.036));for(let v of[-1,1])a.add(de(.035,"#E2443A",v*.06,.09,0));a.position.set(-3.3,.6,-6),n.add(a),Cr(n,1.4,-6,1.6,.7,.76,"#C98B5A");let o=Ku();o.position.set(1.3,.79,-6.05),n.add(o);let l=mo(n,1.3,-5.2,Math.PI,"#2E6FB8"),c=new Y;c.add(J(.1,.12,.03,"#3A3A44")),c.add(J(.012,.012,.35,"#3A3A44",0,.18,0)),c.add(J(.07,.14,.14,"#F2C230",0,.38,0,{out:.006})),c.position.set(2,.79,-6.1),n.add(c);let h=new Ze("#FFD99A",e?5:0,4,1.6);h.position.set(2,1.2,-5.8),n.add(h);let u=new Y;u.add(H(1.2,1.9,.35,"#8A5A36",0,.95,0,{r:.02,out:.008}));for(let v=0;v<4;v++)u.add(ft(1.1,.03,.3,"#6E4628",0,.3+v*.45,.03));let d=["#2E6FB8","#2E9C5A","#C0392B","#8E5BB8","#F2C230","#3A3A44"];for(let v=0;v<3;v++)for(let y=0;y<8;y++)v===1&&y===3||u.add(ft(.06+y%3*.015,.3+y%2*.05,.24,d[(y+v*2)%6],-.45+y*.125,.48+v*.45+y%2*.025,.04));let f=ci();f.rotation.set(0,0,Math.PI/2),f.rotation.y=Math.PI/2,f.position.set(-.075,.94,.05),u.add(f),u.position.set(3.8,0,-3.6),u.rotation.y=-Math.PI/2,n.add(u),Is(n,-1.2,1.95,-6.37,.8,1.1,(v,y,T)=>{let x=v.createLinearGradient(0,0,0,T);x.addColorStop(0,"#1B1440"),x.addColorStop(1,"#5A2E7A"),v.fillStyle=x,v.fillRect(0,0,y,T),v.fillStyle="#F2C230";for(let w=0;w<30;w++)v.fillRect(w*53%y,w*97%(T*.6),3,3);v.fillStyle="#E8742A",v.beginPath(),v.arc(y*.6,T*.35,y*.2,0,7),v.fill(),v.fillStyle="#F4F1EA",v.beginPath(),v.moveTo(y*.2,T*.9),v.lineTo(y*.3,T*.55),v.lineTo(y*.4,T*.9),v.fill(),pt(v,"ESPA\xC7O",y/2,T*.95,y*.14,"#F4F1EA")}),Is(n,-3.88,1.9,-2.6,.9,.65,(v,y,T)=>{v.fillStyle="#E2443A",v.fillRect(0,0,y,T),pt(v,"ROCK",y/2,T*.3,T*.3,"#F4F1EA"),v.strokeStyle="#F4F1EA",v.lineWidth=8,v.beginPath(),v.ellipse(y*.45,T*.7,y*.12,T*.14,0,0,7),v.stroke(),v.fillStyle="#F4F1EA",v.fillRect(y*.55,T*.45,y*.3,8)},Math.PI/2);let p=En(.55,.72,256,!1);p.position.set(.2,1.75,-6.38),n.add(p),p.paint(t.ano||"2012",(v,y,T)=>{v.fillStyle="#FFFFFF",v.fillRect(0,0,y,T),v.fillStyle="#2E6FB8",v.fillRect(0,0,y,T*.3),pt(v,t.ano||"2012",y/2,T*.16,T*.2,"#FFFFFF"),v.fillStyle="#3A3A44",v.font=`600 ${T*.045}px Inter`,v.textAlign="center";for(let x=0;x<31;x++)v.fillText(String(x+1),y*.1+x%7*y*.13,T*.4+Math.floor(x/7)*T*.11)});let E=new Y;E.add(H(.7,1.6,.06,"#F4F1EA",0,1,0,{r:.03,out:.006}));let g=new it(new Ot(.58,1.48),new te({color:"#CFE8F2",transparent:!0,opacity:.28,depthWrite:!1}));g.position.set(0,1,.035),E.add(g),E.position.set(3.88,0,-1.4),E.rotation.y=-Math.PI/2,n.add(E),n.add(H(.4,.5,.25,"#E8742A",-1.8,.25,-6.1,{r:.1,out:.008})),n.add(H(.3,.2,.05,"#C95E1E",-1.8,.2,-5.97,{r:.04}));let m=$a();m.position.set(-.3,.02,-2.8),n.add(m);let S=new it(new Mn(1,32),xt("#F2C230"));return S.rotation.x=-Math.PI/2,S.position.set(-.6,.012,-3.3),n.add(S),Ps(n,-2.6,1.85,-6.38,1.2,1,{cortina:"#2E6FB8",c1:e?"#1B2550":"#8CCBF2",c2:e?"#3A4A8A":"#DDF2FB"}),{C:i,cama:s,cel:r,desp:a,pc:o,cad:l,est:u,cadLista:f,cal:p,esp:E,vg:m,Lab:h}}function ud(n,t={}){Hn(n,{r:10,pos:[6,9,6],ki:2,hemi:1.4});let e=Ii(n,{w:12,d:8,parede:"#F2E6C4",parede2:"#E8DAB2",tipoPiso:"grade",piso1:"#E0D6C4",piso2:"#CFC2AA",meiaParede:"#7FB8A8"}),i=En(5,1.8,1024,!1);i.position.set(0,1.9,-7.86),n.add(i),n.add(H(5.2,2,.06,"#8A5A36",0,1.9,-7.9,{r:.02})),n.add(H(5,.06,.14,"#8A5A36",0,.95,-7.82)),i.paint(t.lousa||"prova",(c,h,u)=>{c.fillStyle="#2E5A44",c.fillRect(0,0,h,u);let d=(f,p,E,g)=>{c.fillStyle="#F4F1EA",c.font=`700 ${g}px Caveat`,c.textAlign="left",c.fillText(f,p,E)};d("PROVA DE MATEM\xC1TICA",40,70,64),d("1) 3x + 7 = 22",60,160,54),d("2) \xC1rea do c\xEDrculo de raio 4 = ?",60,240,54),d("3) 15% de 240 = ?",60,320,54)});let s=Cr(n,3.6,-6.4,1.6,.7,.76,"#8A5A36"),r=[];for(let c=0;c<3;c++)for(let h=0;h<4;h++){let u=-3.6+h*2.2,d=-4.8+c*1.6,f=new Y;f.add(H(.7,.05,.5,"#D9B98A",0,.72,0,{r:.01,out:.005})),f.add(J(.025,.025,.7,"#3A3A44",0,.36,0)),f.position.set(u,0,d),n.add(f),mo(n,u,d+.45,Math.PI,"#2E6FB8"),r.push([u,d])}Ps(n,-5.88,1.8,-3.5,2.4,1.2,{ry:Math.PI/2,cortina:"#F2C230"});let a=Fs();a.position.set(-3.6,2.6,-7.88),n.add(a),Ha(n,0,3.05,-4),n.add(ft(12.2,.12,8.2,"#FBF6EA",0,3.26,-4,{shadow:!1}));for(let c=0;c<3;c++)n.add(ft(1.6,.04,.4,"#FFFFFF",-3.5+c*3.5,3.19,-2.6,{shadow:!1}));let o=new Y;o.add(ft(4.2,3.2,.2,xt("#E8DAB2"),-3.9,1.6,0,{shadow:!1})),o.add(ft(5.6,3.2,.2,xt("#E8DAB2"),3.2,1.6,0,{shadow:!1})),o.add(ft(2.2,1,.2,xt("#E8DAB2"),-.7,2.7,0,{shadow:!1})),o.add(H(1,2.2,.08,"#8A5A36",-1.3,1.1,-.05,{r:.02})),o.add(ft(12,.12,.06,"#FFFFFF",0,.06,-.12,{shadow:!1})),n.add(o);let l=En(2.2,1.3,512,!1);return l.paint("mural",(c,h,u)=>{c.fillStyle="#C9A06A",c.fillRect(0,0,h,u);let d=["#F4F1EA","#F2D24A","#9FD8FF","#F7A8C8"];for(let f=0;f<7;f++)c.fillStyle=d[f%4],c.fillRect(20+f%4*120,30+Math.floor(f/4)*140,100,110)}),l.position.set(4.2,1.8,-.12),l.rotation.y=Math.PI,n.add(l),{C:e,lousa:i,carteiras:r,rel:a}}function Bs(n,t={}){let e=Fr.manha;rs(n,e.topo,e.base,{n:6}),Hn(n,{r:18,far:80,pos:e.pos,target:[0,0,-6],ki:e.ki,hemi:e.hemi,key:e.key}),wr(n,60,60,xt("#CFC6B6"),0,-10,0);let i=new it(new Ot(14,22),xt("#4E9A6A"));i.rotation.x=-Math.PI/2,i.position.set(9,.01,-14),n.add(i);for(let o of[-1,1]){let l=new it(new Ot(14,.1),xt("#F4F1EA"));l.rotation.x=-Math.PI/2,l.position.set(9,.02,-14+o*10.9),n.add(l)}let s=new Y;s.add(H(30,7,6,"#F2E6C4",0,3.5,0,{r:.1})),s.add(ft(30.2,.5,6.2,"#C0392B",0,7.2,0));for(let o=0;o<9;o++){let l=Ps(s,-13+o*3.3,4.8,3.02,1.6,1.1,{c1:"#9FCBE8",c2:"#DDEFF8"})}for(let o=0;o<6;o++)s.add(H(1.2,2.2,.1,"#2E6FB8",-12+o*5,1.1,3.02,{r:.02}));let r=En(6,.8,1024,!1);r.paint("esc",(o,l,c)=>{o.fillStyle="#2E9C6A",o.fillRect(0,0,l,c),pt(o,"ESCOLA ESTADUAL VILA AURORA",l/2,c/2,c*.55,"#FFFFFF")}),r.position.set(0,6.3,3.04),s.add(r),s.position.set(0,0,-24),n.add(s);for(let o=0;o<4;o++){let l=R0();l.position.set(-8+o*3.2,0,-16),n.add(l)}for(let o=0;o<5;o++)Rr(n,-14+o*7,-19,.9,o+3);let a=new Y;return a.add(H(.8,1,.5,"#C8CCD2",0,.5,0,{r:.05,out:.008})),a.position.set(-12,0,-18),n.add(a),oo(n,{n:6,centro:[0,18,-30],raio:18,v:.12,seed:8}),{pred:s}}function dd(n,t={}){Hn(n,{r:10,pos:[-4,9,6],ki:.9,hemi:.85,sky:"#FFE2B8",key:"#FFD9A0",ground:"#5A4030"});let e=Ii(n,{w:14,d:9,parede:"#2E5A44",parede2:"#2A5240",tipoPiso:"ladrilho",piso1:"#C9B89A",piso2:"#B5A282",meiaParede:"#8A5A36"}),i=k0(3.6,2);i.position.set(0,2.4,-8.84),n.add(i),n.add(H(.3,.3,.3,"#2A2A33",0,1.3,-8.8));let s=[];for(let l=0;l<3;l++)for(let c=0;c<22;c++){let h=new it(new Ot(.22,.3),new We({color:c%2?"#F6D33A":"#2E9C4A",side:De}));h.position.set(-6.6+c*.63,3.2-Math.sin(c/21*Math.PI)*.35,-2-l*2.6),h.rotation.x=.1,n.add(h),s.push(h)}n.add(H(.9,1.05,5,"#6E4628",-6,.53,-4.5,{r:.04,out:.01})),n.add(H(1,.07,5.1,"#3A2A20",-6,1.08,-4.5));for(let l=0;l<2;l++){n.add(ft(.3,.04,4.6,"#5A3A22",-6.85,1.6+l*.5,-4.5));for(let c=0;c<14;c++)n.add(J(.045,.05,.26,["#2E7D4F","#8A3A22","#E8C27A","#3E5C8A"][(c+l)%4],-6.85,1.76+l*.5,-6.5+c*.3,{seg:8,out:.004}))}let r=[];for(let[l,c]of[[-2.8,-5.6],[0,-4.6],[2.9,-5.6],[-2.4,-2.4],[2.6,-2.6],[4.8,-4]]){let h=new Y;h.add(H(1,.05,1,"#E8E2D6",0,.75,0,{r:.02,out:.006})),h.add(J(.04,.04,.75,"#C0392B",0,.38,0));for(let u=0;u<3;u++)h.add(J(.04,.035,.16,"#F2D27A",-.2+u*.2,.86,u%2*.15-.05,{seg:10,out:.003}));h.position.set(l,0,c),n.add(h),r.push(h)}let a=[[-3,-3],[0,-6],[3,-3]].map(([l,c])=>{n.add(J(.01,.01,.9,"#2A2A30",l,3.45,c)),n.add(J(.12,.28,.22,"#F2C230",l,2.95,c,{out:.006}));let h=new Ze("#FFD48A",4,6,1.6);return h.position.set(l,2.7,c),n.add(h),h}),o=new Ze("#9FE0B0",3,6,1.6);return o.position.set(0,2.2,-7.5),n.add(o),Ha(n,-1.2,3.6,-4.2),Is(n,6.86,2,-5,1.2,.8,(l,c,h)=>{l.fillStyle="#F2C230",l.fillRect(0,0,c,h),pt(l,"BAR DO TONHO",c/2,h*.4,h*.22,"#1B1420"),pt(l,"DESDE 1988",c/2,h*.72,h*.13,"#1B1420",700)},-Math.PI/2),{C:e,T:i,mesas:r,Ls:a,tvL:o,band:s}}function hi(n,t,e=0){n.userData.sc.paint(t+"|"+(e>0?1:0),(i,s,r)=>{i.fillStyle="#2E8A44",i.fillRect(0,0,s,r),i.fillStyle="#34964B";for(let a=0;a<10;a++)a%2&&i.fillRect(a*s/10,0,s/10,r);i.strokeStyle="#F4F1EA",i.lineWidth=5,i.strokeRect(20,20,s-40,r-40),i.beginPath(),i.moveTo(s/2,20),i.lineTo(s/2,r-20),i.stroke(),i.beginPath(),i.arc(s/2,r/2,60,0,7),i.stroke(),i.strokeRect(20,r/2-90,90,180),i.strokeRect(s-110,r/2-90,90,180),i.fillStyle="#0E1422E8",i.fillRect(30,30,300,64),pt(i,`BRA 0 \xD7 ${t} ALE`,180,63,38,"#FFFFFF",900),e>0&&(i.fillStyle="rgba(255,255,255,.85)",i.fillRect(s/2-270,r/2-70,540,140),pt(i,"GOL DA ALEMANHA",s/2,r/2,44,"#C0392B"))})}function fd(n,t={}){Hn(n,{r:8,pos:[5,8,4],ki:1.6,hemi:1.3});let e=new Y;n.add(e),e.add(ft(3,.1,14,"#5A6270",0,0,-5)),e.add(ft(3,.1,14,"#E8E2D6",0,2.5,-5));for(let r of[-1,1])e.add(ft(.1,.9,14,"#2F7DC4",r*1.5,.45,-5)),e.add(ft(.1,.3,14,"#2F7DC4",r*1.5,2.35,-5));for(let r=0;r<6;r++)for(let a of[-1,1]){let o=new Y;o.add(H(.9,.12,.5,"#C0392B",0,.5,0,{r:.04,out:.006})),o.add(H(.9,.6,.1,"#C0392B",0,.85,-.24,{r:.04,out:.006})),o.add(J(.03,.03,.45,"#9EA6B0",0,.22,0)),o.position.set(a*.95,0,-r*1.6),e.add(o)}for(let r=0;r<6;r++)e.add(J(.025,.025,2.4,"#C8CCD2",.35,1.25,-r*1.6-.8,{seg:8}));e.add(J(.02,.02,14,"#C8CCD2",.35,2.2,-5,{rot:[Math.PI/2,0,0],seg:6}));let i=Qt(1024,256,(r,a,o)=>{r.fillStyle="#BFE3F7",r.fillRect(0,0,a,o);let l=Pe(6);for(let c=0;c<40;c++){let h=30+l()*60,u=80+l()*160;r.fillStyle=["#E8DCC8","#CFC6BC","#D9C9B0","#C8D2D6"][c%4],r.fillRect(c*26,o-u,h,u),r.fillStyle="#8DB8D8";for(let d=0;d<12;d++)r.fillRect(c*26+4+d%3*9,o-u+8+Math.floor(d/3)*18,6,10)}});i.wrapS=on;let s=[];for(let r of[-1,1]){let a=new it(new Ot(14,1.5),new te({map:r>0?i:i.clone()}));r<0&&(a.material.map.wrapS=on,a.material.map.needsUpdate=!0),a.position.set(r*1.7,1.6,-5),a.rotation.y=-r*Math.PI/2,e.add(a),s.push(a)}return Qn(n,(r,a)=>s.forEach((o,l)=>{o.material.map.offset.x=a*.08*(l?-1:1)%1})),{g:e}}function Eo(n,t={}){Hn(n,{r:8,pos:[-4,8,5],ki:.55,hemi:.65,sky:"#8A9AD0",key:"#C0CCFF"});let e=Ii(n,{w:7,d:5.5,parede:"#C9B8E0",parede2:"#BBA8D4",tipoPiso:"madeira",piso1:"#9A7A5A",piso2:"#8E6E4E"}),i=new Y;for(let o of[0,1.3])i.add(H(1,.3,2,"#3A3A44",0,.3+o,0,{r:.03,out:.008})),i.add(H(.95,.14,1.9,["#E2443A","#2E9C5A"][o?1:0],0,.5+o,0,{r:.06}));for(let o of[-.48,.48])for(let l of[-.95,.95])i.add(J(.03,.03,2.4,"#3A3A44",o,1.2,l,{seg:6}));i.position.set(-2.7,0,-4.2),i.rotation.y=Math.PI/2,n.add(i),Cr(n,1.2,-4.8,1.4,.6,.76,"#C98B5A");let s=O0({cor:"#3A3A44"});s.position.set(1,.79,-4.85),n.add(s);let r=new Y;r.add(J(.12,.09,.1,"#F4F1EA",0,.05,0,{seg:16,out:.004})),r.add(J(.11,.11,.01,"#F2C76A",0,.095,0,{seg:16}));for(let o=0;o<2;o++){let l=J(.004,.004,.3,"#C98B5A",.03*o,.2,0,{seg:4});l.rotation.z=.4,r.add(l)}r.position.set(1.6,.79,-4.7),n.add(r),br(n,1.6,.9,-4.7,{n:6,tam:.1,alt:.5}),Is(n,0,1.9,-5.38,1,.7,(o,l,c)=>{o.fillStyle="#2E6FB8",o.fillRect(0,0,l,c),pt(o,"ENGENHARIA",l/2,c*.5,c*.17,"#F4F1EA")});let a=new Ze("#FFD99A",3,4,1.6);a.position.set(1.2,1.6,-4.4),n.add(a),Ps(n,2.4,1.8,-5.38,1,.9,{c1:"#1B2550",c2:"#3A4A8A"});for(let o=0;o<6;o++)n.add(H(.3,.05,.25,["#E2443A","#3A3A44","#F2C230"][o%3],-1+o*.25,.03,-2.2-o%2*.3,{r:.02}));return{C:e,nb:s,tig:r}}function Pr(n,t={}){Hn(n,{r:11,pos:[5,10,6],ki:1.7,hemi:1.45,sky:"#F2FAFF",key:"#F4FAFF"});let e=Ii(n,{w:14,d:8,parede:"#DDEBF0",parede2:"#D2E3EA",tipoPiso:"grade",piso1:"#E8EEF0",piso2:"#CBD6DA",meiaParede:"#8FC9D8"}),i=En(3.2,.55,1024,!1);i.paint("ps",(f,p,E)=>{f.fillStyle="#C0392B",f.fillRect(0,0,p,E),pt(f,"\u271A  PRONTO-SOCORRO",p/2,E/2+4,E*.55,"#FFFFFF")}),i.position.set(-3.6,2.7,-7.86),n.add(i),n.add(H(3,1.1,.7,"#F4F1EA",-3.6,.55,-6.6,{r:.04,out:.01})),n.add(H(3.1,.06,.8,"#8FC9D8",-3.6,1.12,-6.6));let s=H(.4,.3,.05,"#2A2A30",-3.2,1.35,-6.7,{r:.02});n.add(s);let r=[];for(let f of[-1,1]){let p=new Y;p.add(H(.95,2.3,.08,"#B9D4DE",f*.475,1.15,0,{r:.02,out:.008})),p.add(new it(new Mn(.16,18),new te({color:"#9FC3D4"})).translateX(f*.475).translateY(1.6).translateZ(.045)),p.position.set(3.4+f*.95,0,-7.86),n.add(p),r.push(p)}let a=En(2.2,.45,1024,!1);a.paint("cc",(f,p,E)=>{f.fillStyle="#2E6FB8",f.fillRect(0,0,p,E),pt(f,"CENTRO CIR\xDARGICO",p/2,E/2+4,E*.5,"#FFFFFF")}),a.position.set(3.4,2.75,-7.86),n.add(a);let o=new it(new be(.9,.22,.06),new te({color:"#552222"}));o.position.set(3.4,2.42,-7.84),n.add(o);let l=En(.86,.2,256);l.position.set(3.4,2.42,-7.8),n.add(l);let c=[];for(let f=0;f<2;f++)for(let p=0;p<5;p++){let E=new Y;E.add(H(.5,.08,.48,"#2E7FB8",0,.46,0,{r:.03,out:.006})),E.add(H(.5,.5,.06,"#2E7FB8",0,.74,-.22,{r:.03,out:.006})),E.position.set(-4.6+p*.56,0,-2.2-f*2),E.rotation.y=0,n.add(E),c.push(E)}n.add(ft(2.8,.06,.5,"#9EA6B0",-3.48,.22,-2.2)),n.add(ft(2.8,.06,.5,"#9EA6B0",-3.48,.22,-4.2));let h=new Y;h.add(H(.5,1.1,.4,"#F4F1EA",0,.55,0,{r:.05,out:.008})),h.add(J(.14,.14,.4,"#9FD6F2",0,1.3,0,{seg:14})),h.position.set(6.3,0,-6.6),n.add(h);let u=k0(1.2,.7);u.position.set(-6.86,2.2,-3.6),u.rotation.y=Math.PI/2,n.add(u),u.userData.sc.paint("tv",(f,p,E)=>{f.fillStyle="#2E6FB8",f.fillRect(0,0,p,E),pt(f,"SA\xDADE",p/2,E*.4,E*.2,"#FFFFFF"),pt(f,"Cuide do seu cora\xE7\xE3o",p/2,E*.66,E*.09,"#DDEFF8",700)});let d=Fs();d.position.set(0,2.6,-7.88),n.add(d);for(let f=0;f<2;f++){let p=Sr(f+6);p.position.set(-.8+f*7.6,0,-7.2),n.add(p)}return{C:e,portas:r,luz:o,luzT:l,cad:c,rel:d}}function Ka(n,t={}){let e=t.tarde?Fr.tarde:Fr.dia;rs(n,e.topo,e.base,{n:7}),Hn(n,{r:16,far:80,pos:t.tarde?[-26,10,-10]:[14,22,14],target:[0,0,-4],ki:e.ki,hemi:e.hemi,key:e.key,sky:e.sky,ground:e.ground}),wr(n,40,40,xt("#7CB85E"),0,-6,0);let i=new it(new Ot(9,6),pe(Qt(256,256,d=>{d.fillStyle="#D9CDB8",d.fillRect(0,0,256,256),d.strokeStyle="#C2B49C",d.lineWidth=4;for(let f=0;f<=4;f++)d.beginPath(),d.moveTo(f*64,0),d.lineTo(f*64,256),d.stroke(),d.beginPath(),d.moveTo(0,f*64),d.lineTo(256,f*64),d.stroke()})));i.rotation.x=-Math.PI/2,i.position.set(0,.012,-3),i.receiveShadow=!0,n.add(i);for(let[d,f,p,E]of[[0,-8,18,0],[-9,-2,12,Math.PI/2],[9,-2,12,Math.PI/2]]){let g=ft(p,2.2,.25,"#F2E6D2",d,1.1,f);g.rotation.y=E,n.add(g)}for(let d=0;d<14;d++)n.add(de(.35+d%3*.1,["#4C9A44","#5DAA4E","#6DBB57"][d%3],-8+d*1.2,1.9+d%2*.3,-7.8,{seg:8}));let s=B0(4,{cor:"#F2C14E",andar:!1});s.position.set(-4,0,-14),n.add(s);let r=B0(9);r.position.set(6,0,-15),n.add(r);let a=id();a.position.set(3.2,0,-6.8),n.add(a),br(n,3.2,4.4,-6.9,{n:9,tam:.5,alt:2.4,op:.35,cor:"#DDD8D0",v:.25}),br(n,3.2,1.5,-6.7,{n:6,tam:.25,alt:.9,op:.3,cor:"#EEE8E0"});let o=new Y;o.add(H(2.2,.06,1,"#F4F1EA",0,.74,0,{r:.02,out:.006}));let l=new it(new Ot(2.3,1.1),pe(Qt(128,64,d=>{d.fillStyle="#F4F1EA",d.fillRect(0,0,128,64),d.fillStyle="#E2443A";for(let f=0;f<16;f++)for(let p=0;p<8;p++)(f+p)%2&&d.fillRect(f*8,p*8,8,8)})));l.rotation.x=-Math.PI/2,l.position.y=.775,o.add(l);for(let[d,f]of[[-1,-.4],[1,-.4],[-1,.4],[1,.4]])o.add(J(.03,.03,.74,"#F4F1EA",d,.37,f,{seg:6}));for(let d=0;d<4;d++){let f=Ja();f.position.set(-.8+d*.52,.78,d%2*.2-.1),o.add(f)}o.add(J(.18,.14,.1,"#F2C230",.2,.82,.25,{seg:14,out:.004})),o.add(J(.06,.06,.28,"#2E7D4F",-.3,.92,.3,{seg:10,out:.004})),o.position.set(-1.6,0,-3.4),n.add(o);let c=[[-2.6,-2.5,Math.PI],[-1.6,-2.5,Math.PI],[-.6,-2.5,Math.PI],[-2.6,-4.3,0],[-.6,-4.3,0]].map(([d,f,p])=>{let E=new Y;E.add(H(.46,.06,.44,"#F4F1EA",0,.45,0,{r:.02,out:.005})),E.add(H(.46,.5,.05,"#F4F1EA",0,.72,-.2,{r:.02,out:.005}));for(let g of[-1,1])for(let m of[-1,1])E.add(J(.02,.02,.45,"#F4F1EA",g*.18,.22,m*.18,{seg:5}));return E.position.set(d,0,f),E.rotation.y=p,n.add(E),E});for(let d of[-7,-3])n.add(J(.04,.04,2.2,"#9EA6B0",d,1.1,-6.6,{seg:6}));n.add(J(.006,.006,4,"#F4F1EA",-5,2.15,-6.6,{rot:[0,0,Math.PI/2],seg:4}));let h=[];for(let d=0;d<4;d++){let f=new it(new Ot(.5,.6),new We({color:["#2E6FB8","#F2C230","#E2443A","#F4F1EA"][d],side:De}));f.position.set(-6.3+d*.9,1.8,-6.6),n.add(f),h.push(f)}Qn(n,(d,f)=>h.forEach((p,E)=>{p.rotation.x=.15*Math.sin(f*1.6+E)})),Rr(n,7,-5.5,1.2,7);let u=sd();return u.position.set(1.2,0,-2),u.rotation.y=.6,n.add(u),Qn(n,(d,f)=>{u.userData.rabo.rotation.z=.6*Math.sin(f*12),u.userData.cab.rotation.z=.08*Math.sin(f*2)}),oo(n,{n:7,centro:[0,16,-20],raio:16,v:.1,seed:11}),Qn(n,(d,f)=>a.userData.carnes.forEach((p,E)=>{p.rotation.z=f*.6+E})),{ch:a,mt:o,cads:c,dog:u}}function pd(n,t={}){rs(n,"#8E98A8","#D8DCE0",{n:8}),Hn(n,{r:30,far:120,pos:[10,30,20],target:[0,0,-10],ki:1.3,hemi:1.3,sky:"#E0E4EA",key:"#F0F0F0",ground:"#8A7A6A"}),wr(n,200,200,xt("#8A8070"),0,-40,0);let e=Pe(9);for(let o=0;o<9;o++){let l=new it(new ee(6+e()*5,20,12,0,Math.PI*2,0,Math.PI/2),xt(["#7E7466","#8A7E6E","#746A5C"][o%3]));l.scale.y=.35+e()*.2,l.position.set(-28+o*7+e()*3,0,-18-e()*22),l.receiveShadow=!0,n.add(l)}let i=["#26262C","#F4F1EA","#3E5C8A","#C0392B","#2E9C5A","#F2C230","#9EA6B0","#3A3A44"];for(let o=0;o<160;o++){let l=(e()-.5)*60,c=-6-e()*40,h=Di(i[o%8],o);h.scale.setScalar(.6+e()*.7),h.position.set(l,0,c),h.rotation.y=e()*6,n.add(h)}for(let o=0;o<40;o++){let l=.4+e()*.6,c=.3+e()*.4,h=.3+e()*.5;n.add(H(l,c,h,i[(o+3)%8],(e()-.5)*50,c/2,-8-e()*36,{r:.05}))}let s=new Y;s.add(H(2.4,1.2,3.2,"#F2C230",0,1.2,0,{r:.15,out:.012})),s.add(H(1.6,1.2,1.4,"#F2C230",-.3,2.3,.6,{r:.12,out:.01})),s.add(H(1.5,1,.05,"#3B4A60",-.3,2.35,1.31,{r:.02}));for(let o of[-1,1])s.add(H(.7,.7,3.6,"#2A2A30",o*1.3,.35,0,{r:.3}));let r=new Y;r.position.set(.6,2.2,1.2),s.add(r),r.add(H(.4,.4,3.4,"#E2B020",0,.5,1.6,{r:.1,out:.008})),r.add(H(1,.8,.8,"#3A3A44",0,-.3,3.4,{r:.08})),r.rotation.x=-.35,s.position.set(-6,1.3,-16),s.rotation.y=.7,n.add(s);for(let o=0;o<14;o++)n.add(J(.05,.05,2.4,"#9EA6B0",-20+o*3,1.2,-2,{seg:6}));n.add(J(.01,.01,40,"#9EA6B0",0,2.2,-2,{rot:[0,0,Math.PI/2],seg:4}));let a=En(3,1,512,!1);return a.paint("at",(o,l,c)=>{o.fillStyle="#2E7D4F",o.fillRect(0,0,l,c),pt(o,"ATERRO SANIT\xC1RIO",l/2,c*.38,c*.26,"#FFFFFF"),pt(o,"PROIBIDA A ENTRADA",l/2,c*.72,c*.17,"#F2C230")}),a.position.set(4,2,-1.9),n.add(a),n.add(J(.05,.05,2,"#5A6270",3,1,-1.95,{seg:6})),n.add(J(.05,.05,2,"#5A6270",5,1,-1.95,{seg:6})),oo(n,{n:12,centro:[0,12,-20],raio:14,v:.16,seed:21,escala:.8}),n.traverse(o=>{o.material&&o.material.color&&o.material.color.getHexString&&o.material.color.getHexString()==="2a2630"&&(o.material=xt("#F4F1EA",{side:De}))}),{esc:s,braco:r}}function Bi(n,t={}){rs(n,t.c1||"#1A1A3A",t.c2||"#3A2A5A",{n:0}),Hn(n,{r:14,far:60,pos:[6,12,8],ki:1.6,hemi:1,sky:"#C8B8FF",key:"#FFE8C8",ground:"#2A2040"});let e=new it(new Ot(200,200),pe((()=>{let l=Qt(256,256,c=>{c.fillStyle=t.chao||"#2A2448",c.fillRect(0,0,256,256),c.strokeStyle="#4A3E7A",c.lineWidth=3,c.strokeRect(0,0,256,256)});return l.wrapS=l.wrapT=on,l.repeat.set(60,60),l})()));e.rotation.x=-Math.PI/2,e.receiveShadow=!0,n.add(e);let i=Pe(t.seed||77),s=["#3A3060","#2E2850","#443A6E","#352C58"];for(let l=0;l<34;l++){let c=l/34*Math.PI*2+i()*.08,h=95+i()*30,u=14+i()*10,d=22+i()*50,f=po({w:u,d:u,h:d,tipo:l%3===0?"vidro":"janelas",cor:s[l%4],v1:"#3A3A70",v2:"#5A4A90",vj:"#FFD98A",noite:!0,seed:300+l,corTerreo:"#241E40",topo:"#2A2448",teto:"#2A2448"});f.position.set(Math.sin(c)*h,0,-Math.cos(c)*h),f.rotation.y=-c,n.add(f)}let r=new ke,a=[];for(let l=0;l<500;l++){let c=i()*Math.PI*2,h=.25+i()*1.2;a.push(Math.cos(c)*Math.cos(h)*300,Math.sin(h)*300,Math.sin(c)*Math.cos(h)*300)}r.setAttribute("position",new ie(a,3)),n.add(new Ma(r,new jr({color:"#FFF4D8",size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85})));let o=new it(new Qe(150,150,40,48,1,!0),new te({map:Qt(8,256,l=>{let c=l.createLinearGradient(0,0,0,256);c.addColorStop(0,"rgba(255,170,120,0)"),c.addColorStop(1,"rgba(255,150,110,.55)"),l.fillStyle=c,l.fillRect(0,0,8,256)}),transparent:!0,side:Ge,depthWrite:!1,fog:!1}));return o.position.y=20,n.add(o),n.fog=new mr(t.c2||"#3A2A5A",40,190),{g:e}}var vo=class n extends it{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new Je;let i=this,s=e.color!==void 0?new Nt(e.color):new Nt(8355711),r=e.textureWidth||512,a=e.textureHeight||512,o=e.clipBias||0,l=e.shader||n.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new Yn,u=new C,d=new C,f=new C,p=new ue,E=new C(0,0,-1),g=new me,m=new C,S=new C,v=new me,y=new ue,T=this.camera,x=new Ve(r,a,{samples:c,type:an}),w=new Ne({name:l.name!==void 0?l.name:"unspecified",uniforms:ns.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});w.uniforms.tDiffuse.value=x.texture,w.uniforms.color.value=s,w.uniforms.textureMatrix.value=y,this.material=w,this.onBeforeRender=function(F,A,M){if(d.setFromMatrixPosition(i.matrixWorld),f.setFromMatrixPosition(M.matrixWorld),p.extractRotation(i.matrixWorld),u.set(0,0,1),u.applyMatrix4(p),m.subVectors(d,f),m.dot(u)>0)return;m.reflect(u).negate(),m.add(d),p.extractRotation(M.matrixWorld),E.set(0,0,-1),E.applyMatrix4(p),E.add(f),S.subVectors(d,E),S.reflect(u).negate(),S.add(d),T.position.copy(m),T.up.set(0,1,0),T.up.applyMatrix4(p),T.up.reflect(u),T.lookAt(S),T.far=M.far,T.updateMatrixWorld(),T.projectionMatrix.copy(M.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(T.projectionMatrix),y.multiply(T.matrixWorldInverse),y.multiply(i.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(T.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let P=T.projectionMatrix;v.x=(Math.sign(g.x)+P.elements[8])/P.elements[0],v.y=(Math.sign(g.y)+P.elements[9])/P.elements[5],v.z=-1,v.w=(1+P.elements[10])/P.elements[14],g.multiplyScalar(2/g.dot(v)),P.elements[2]=g.x,P.elements[6]=g.y,P.elements[10]=g.z+1-o,P.elements[14]=g.w,i.visible=!1;let W=F.getRenderTarget(),k=F.xr.enabled,I=F.shadowMap.autoUpdate;F.xr.enabled=!1,F.shadowMap.autoUpdate=!1,F.setRenderTarget(x),F.state.buffers.depth.setMask(!0),F.autoClear===!1&&F.clear(),F.render(A,T),F.xr.enabled=k,F.shadowMap.autoUpdate=I,F.setRenderTarget(W);let z=M.viewport;z!==void 0&&F.state.viewport(z),i.visible=!0},this.getRenderTarget=function(){return x},this.dispose=function(){x.dispose(),i.material.dispose()}}};vo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var md=6.2,yy=5.6;function _o(n,t={}){ls(n,{hora:"alvorada",seed:12,...t});let e=Ya();e.rotation.y=Math.PI,n.add(e);let i=Di("#F4F1EA",3);i.scale.setScalar(.6),i.position.set(.35,1.38,-4.5),e.userData.body.add(i);let s=ci();s.position.set(.35,1.72,-4.66),s.rotation.set(-.9,.3,.4),e.userData.body.add(s);let r=rt(n,ho,-3,0,Math.PI);return{T:e,G:r,pista:o=>({tz:-9-md*o,gz:2-yy*o}),cad:s}}function Mo(n,t,e){let{tz:i,gz:s}=n.pista(t);return n.T.position.set(-3.2,0,i),Za(n.T,md*t),n.T.userData.gf.material.color.set(Math.floor(t*4)%2?"#FFB020":"#7A5A10"),n.G.root.position.set(-3,0,s),n.G.pose(On(t,2.6,1)),{tz:i,gz:s}}function Ey(n,t){return K(n,t,{},e=>{let i=_o(e);return(s,r,a)=>{let{gz:o}=Mo(i,s,r);return U(i.G,null,s,"determinado"),nt(a,[[0,[6,16,o+16]],[4.6,[2.2,2.4,o+6.5]]],[[0,[-3,1,o-14]],[4.6,[-3,1.3,o-4]]],r),{bloom:.3}}})}function vy(n,t){return K(n,t,{},e=>{let i=_o(e);return(s,r,a)=>{let{gz:o}=Mo(i,s,r);return U(i.G,null,s,"determinado"),nt(a,[[0,[-1.5,.5,o+1.6]],[2.4,[-1.7,.55,o+.9]]],[[0,[-3,.8,o-.3]],[2.4,[-3,.85,o-.6]]],r),{}}})}function _y(n,t){return K(n,t,{},e=>{let i=_o(e);return(s,r,a)=>{let{tz:o,gz:l}=Mo(i,s,r);U(i.G,null,s,"determinado"),i.G.root.position.z=Math.max(l,o+13);let c=o+4.75;return Kn(a,[[0,[-1,2.4,c+3.2]],[4.2,[-2.3,1.9,c+1.7]]],[[0,[-3.2,1.2,c-.4]],[4.2,[-3,1.45,c-.3]]],r,.006,s),{}}})}function My(n,t){return K(n,t,{bg:"#2A2420"},e=>{let i=new ji("#FFD9B0","#3A2A30",1.2);e.add(i);let s=new ts("#FFC48A",2);s.position.set(-2,4,2),s.castShadow=!0,e.add(s);let r=new it(new Ot(10,10),xt("#2A2420"));r.rotation.x=-Math.PI/2,e.add(r);for(let l=0;l<14;l++){let c=Di(["#26262C","#3A3A44","#2A3A2A","#F4F1EA","#3E5C8A"][l%5],l);c.scale.setScalar(.7+l%3*.15),c.position.set(-1.6+l%5*.8,-.15,-1-Math.floor(l/5)*.7+l%2*.2),e.add(c)}for(let l=0;l<16;l++){let c=l/16*Math.PI*2,h=.95+l%3*.3,u=Di(["#26262C","#3A3A44","#2A3A2A","#5A4A3A","#3E5C8A","#2C4A3A"][l%6],l+20);u.scale.setScalar(.45+l%4*.08),u.position.set(Math.cos(c)*h*1.3,-.28+l%2*.05,.3+Math.sin(c)*h),u.rotation.y=l*1.7,e.add(u)}for(let l=0;l<9;l++){let c=l*2.4,h=.55+l%3*.12,u=de(.05+l%3*.015,["#F4F1EA","#E8DCC0","#D9D2C4"][l%3],Math.cos(c)*h*1.4,.1,.3+Math.sin(c)*h*.9);e.add(u)}for(let l=0;l<4;l++){let c=H(.32,.2,.26,["#B88A5A","#C9A06A"][l%2],[-1.1,1,-.7,.9][l],.02,[.9,.8,-.4,-.3][l],{r:.01,out:.005});c.rotation.y=l*.8,e.add(c)}let a=J(.04,.04,.12,"#C0392B",.62,.1,.55,{seg:12,out:.004});a.rotation.z=1.5,e.add(a);for(let l of[-1,1])e.add(H(.1,2.4,4,"#C95E1E",l*2.2,.9,0,{r:.02}));e.add(H(4.5,2.4,.1,"#B8501A",0,.9,-1.8,{r:.02}));let o=Li();return o.position.set(0,.32,.3),o.rotation.set(-.35,.15,.05),e.add(o),o.userData.E.paint("e",(l,c,h)=>cn(l,c,h,()=>{ge(l,"3. ~~~~~~~~",c*.16,h*.25,44,"#2A3A7A"),l.fillStyle="#2A3A7A",l.fillRect(c*.16,h*.23,c*.7,10)})),o.userData.D.paint("d",(l,c,h)=>cn(l,c,h,()=>{ge(l,"SENHA:",c*.16,h*.2,54,"#B8322B"),l.filter="blur(7px)",ge(l,"k7Rq-9xWm-2Lb",c*.16,h*.36,52),ge(l,"Fz4t-Pp81-Vh",c*.16,h*.48,52),l.filter="none",ge(l,"100 BTC",c*.5,h*.7,60,"#B8322B","center"),l.strokeStyle="#B8322B",l.lineWidth=6,l.beginPath(),l.ellipse(c*.5,h*.7,c*.3,h*.07,0,0,7),l.stroke()})),(l,c,h)=>(Kn(h,[[0,[.15,1.25,1.1]],[3,[.05,.95,.78]]],[[0,[0,.3,.3]],[3,[.05,.3,.28]]],c,.004,l),{exposure:1.05})})}function Sy(n,t){return K(n,t,{},e=>{let i=_o(e);return(s,r,a)=>{let{tz:o,gz:l}=Mo(i,s,r);return U(i.G,null,s,"determinado"),nt(a,[[0,[14,34,l+22]],[5,[10,30,l+6]]],[[0,[-3,0,l-20]],[5,[-3,0,o-6]]],r),{bloom:.3}}})}function by(n,t){return K(n,t,{},e=>{let i=_o(e);return(s,r,a)=>{let{gz:o}=Mo(i,s,r),l=lt(2.2,3.2,r);return i.G.pose(zn(On(s,2.6,1),On(s,2.6,.9),l)),U(i.G,null,s,l>.5?"feliz":"determinado",{olhosAbertos:!0,mouth:l>.5?{open:.25,smile:1}:void 0}),nt(a,[[0,[-2.2,1.6,o-4.2]],[4.3,[-2.85,1.48,o-1.6]]],[[0,[-3,1.25,o]],[4.3,[-3,1.42,o]]],r),{}}})}function Ay(n,t){return K(n,t,{bg:"#121A3A"},e=>{ls(e,{hora:"noite",seed:31,detalhes:!1});let i=Sn(e,[0,14,-60],{cor:"#9FD6FF",size:40,n:40,ps:4,alt:20});return(s,r,a)=>(i(r,.4*(1-lt(1.5,3.2,r))),nt(a,[[0,[0,3,20]],[3.2,[-3,18,-26]]],[[0,[0,10,-60]],[3.2,[-16,17,-50]]],r),{...co,bloom:.6,bloomT:.7})})}function xy(n,t){return K(n,t,{bg:"#1E2648"},e=>{let i=Qa(e),s=rt(e,Wa,0,0);return ae(s,-1.4,-4.36,0,.5),i.nb.userData.sc.paint("p",(r,a,o)=>{r.fillStyle="#F4F6F8",r.fillRect(0,0,a,o),r.fillStyle="#2C6E7F",r.fillRect(0,0,a,40),pt(r,"RELAT\xD3RIO_FINAL_v7.xlsx",a/2,21,20,"#fff",700),r.fillStyle="#C8D2D6";for(let l=0;l<12;l++)r.fillRect(20,60+l*20,a-40,10)}),(r,a,o)=>(i.rel.set(3,12+a*.5,a*10),s.pose(Et({shL:[45,14],elL:70,shR:[45,14],elR:70+Math.sin(r*9)*6,headX:12,lean:8})),U(s,null,r,"tedio",{look:[0,.5]}),nt(o,[[0,[1.8,1.6,-.4]],[4.5,[.6,1.25,-1.6]]],[[0,[-1.4,.8,-4]],[4.5,[-1.4,.95,-4]]],a),{...co})})}function Ty(n,t){return K(n,t,{bg:"#1E2648"},e=>{let i=Qa(e),s=rt(e,Wa,2.9,-5.2,-2.6);return(r,a,o)=>(s.pose({...ut(r),shL:[55,10],elL:60,headX:18}),U(s,null,r,"triste",{look:[-.4,.6]}),nt(o,[[0,[1.4,.95,-5]],[5,[1.85,.85,-5.85]]],[[0,[2.1,.7,-6.35]],[5,[2.1,.68,-6.35]]],a),{...co,blur:10,focus:.7,range:.5})})}function H0(n){let t=An(n,{sepia:!0,ano:"2019"}),e=rt(n,en,1.8,-4.6,-.6),i=rt(n,{...Oe,camisa:"#2F4E86",estampa:(s,r,a)=>{s.fillStyle="#24406E",s.fillRect(r*.36,a*.58,r*.28,a*.2)}},-.4,-2.2,2.3);return{K:t,M:e,G:i}}function wy(n,t){return K(n,t,{},e=>{let{K:i,M:s,G:r}=H0(e);return(a,o,l)=>{let c=Math.sin(a*3.1);return r.pose({...ut(a),shR:[40+25*Math.max(0,c),20],elR:60,shL:[20,10],elL:40,lean:6,headX:-6}),U(r,null,a,"bravo",{mouth:{open:.35+.3*Math.abs(Math.sin(a*7))}}),s.pose({...ut(a,1),shL:[55,-10],shR:[55,-10],elL:110,elR:110,headY:-10+8*Math.sin(a*.8)}),U(s,null,a,"bravo",{mouth:o>3.2&&o<5?{open:.4+.3*Math.abs(Math.sin(a*6))}:void 0}),nt(l,[[0,[3,1.65,.6]],[5.8,[2.3,1.5,-.3]]],[[0,[.6,1.15,-3.4]],[5.8,[.7,1.2,-3.4]]],o),Va}})}function Ry(n,t){return K(n,t,{},e=>{let{K:i,M:s,G:r}=H0(e);return i.porta.rotation.y=0,(a,o,l)=>{let c=lt(.2,3.4,o),h=At(-.4,-5.3,c),u=At(-2.2,-1.75,c);r.root.position.set(h,0,u),r.root.rotation.y=o<.3?2.3:Math.atan2(-4.9,.45),r.pose(o<.3?ut(a):Jn(a,1.9,1)),U(r,null,a,"bravo");let d=lt(2.6,3.2,o)*(1-lt(3.6,3.9,o));return i.porta.rotation.y=-1.3*d,r.root.visible=o<3.75,s.pose({...ut(a,1),shL:[55,-10],shR:[55,-10],elL:110,elR:110,headY:-30*c}),U(s,null,a,"bravo",{look:[-.6*c,0]}),nt(l,[[0,[1.6,1.6,.2]],[4.1,[2.6,1.7,-.4]]],[[0,[-1.5,1.2,-2.6]],[4.1,[-4.4,1.2,-1.9]]],o),Va}})}function Cy(n,t){return K(n,t,{},e=>{let{K:i,M:s,G:r}=H0(e);return r.root.visible=!1,(a,o,l)=>(s.pose({...ut(a,1),shL:[10,8],shR:[10,8],headX:12,headY:-25}),U(s,null,a,"triste",{look:[-.7,.3]}),nt(l,[[0,[-1.2,1.6,-1.6]],[1.7,[-.4,1.6,-2.6]]],[[0,[1.8,1.55,-4.6]],[1.7,[1.8,1.6,-4.6]]],o),{...Va,sat:.35})})}function Fy(n,t){return K(n,t,{bg:"#1E2648"},e=>{let i=Qa(e),s=rt(e,Wa,0,0);s.root.rotation.set(0,0,Math.PI/2-.06),s.root.position.set(-.55,.74,-4.35),s.sombra.visible=!1,i.nb.userData.sc.paint("p",(o,l,c)=>{o.fillStyle="#20304A",o.fillRect(0,0,l,c),pt(o,"Sem conex\xE3o",l/2,c/2,30,"#9FB4D8",700)});let r=Sn(e,[-1.6,1.2,-4],{cor:"#FFE6A0",size:4,n:50}),a=jn("zzz",.3);return a.position.set(-2.6,1.6,-4.2),e.add(a),(o,l,c)=>{i.rel.set(4,40+l*2),s.pose({...Et({hipL:[20,0],hipR:[20,0],knL:20,knR:20}),shL:[10,30],shR:[160,30],elR:60,bob:0}),U(s,null,o,"sono",{blink:l<2.7||l<5.3?1:0,mouth:{open:.12}}),a.material.opacity=1-lt(2.4,2.9,l),a.position.y=1.6+l%1.2*.3;let h=lt(2.7,5.6,l);return r(l,h),i.Ln.intensity=2.4*(1-h),nt(c,[[0,[1,2.3,-1.2]],[5.9,[-.2,1.7,-2.2]]],[[0,[-1.8,.8,-4.25]],[5.9,[-2,1,-4.25]]],l),{...co,flash:lt(5.2,5.85,l)*.9,bloom:.35+h*.5,bloomT:.75}}})}function Py(n,t){return K(n,t,{},e=>{let i=An(e,{ano:"2012"}),s=rt(e,bn,-4.6,-2.7,Math.PI-.5);return(r,a,o)=>(s.pose({...ut(r),shL:[140,-28],shR:[140,-28],elL:120,elR:120,headX:-24,lean:-6}),U(s,"regina",r,"bravo",{look:[0,-.7]}),nt(o,[[0,[-2.3,1.35,-1.7]],[3.8,[-2.8,1.3,-2.1]]],[[0,[-4.6,1.2,-2.9]],[3.8,[-4.6,1.25,-2.9]]],a),{flash:.9*(1-lt(0,.5,a))})})}function Iy(n,t){return K(n,t,{},e=>{let i=hn(e),s=rt(e,yn,0,0);return s.root.position.set(-3.75,.48,-4.9),s.sombra.visible=!1,s.root.rotation.y=Math.PI/2,(r,a,o)=>{let l=lt(0,1.3,a);return s.pose({...Et({knL:8,knR:8,hipL:[85,0],hipR:[85,0]}),lean:-82*(1-l),shL:[25,25],shR:[25,25],elL:30,elR:30,headX:10*(1-l),headY:40*Math.sin(a*.8)*lt(1.3,1.9,a)}),U(s,null,r,a<1.4?"sono":"surpreso",{look:[Math.sin(a*.8)*.7,-.1]}),nt(o,[[0,[-1.6,1.5,-3.2]],[1.6,[-1.6,1.5,-3.3]],[2.6,[-1.1,1.8,-4.4]],[3.6,[-1.1,1.85,-4.7]],[4.4,[-2.7,1,-5]],[5.3,[-2.95,.9,-5.2]]],[[0,[-3.6,1,-4.9]],[1.6,[-3.6,1.05,-4.9]],[2.6,[-1.2,1.95,-6.37]],[3.6,[-1.2,1.95,-6.37]],[4.4,[-3.55,.55,-6.05]],[5.3,[-3.55,.52,-6.05]]],a),{}}})}function Dy(n,t){return K(n,t,{},e=>{let i=hn(e),s=rt(e,yn,3.1,-1.5,Math.PI/2),r=new vo(new Ot(.58,1.48),{textureWidth:768,textureHeight:1536,color:14214378});return r.position.set(0,1,.04),i.esp.add(r),(a,o,l)=>{let c={...ut(a),shL:[70+10*Math.sin(a*2),10],elL:100,headX:-4,headY:6*Math.sin(a*1.3)};return s.pose(c),U(s,null,a,o<.6?"neutro":"surpreso",{mouth:o>.6?{open:.5,round:.8}:void 0}),nt(l,[[0,[1.7,1.3,-.55]],[2.8,[1.95,1.28,-.7]]],[[0,[3.88,1.12,-1.45]],[2.8,[3.88,1.12,-1.45]]],o),{}}})}function Ly(n,t){return K(n,t,{},e=>{let i=hn(e);return(s,r,a)=>(nt(a,[[0,[.3,1.65,-4.7]],[2,[.22,1.74,-5.55]]],[[0,[.2,1.75,-6.38]],[2,[.2,1.75,-6.38]]],r,0,.4),{})})}function By(n,t){return K(n,t,{},e=>{let i=An(e,{ano:"2012"}),s=rt(e,yn,0,0);return(r,a,o)=>{let l=lt(0,2.1,a),c=11*(1-l),h=l<1?.24*(c+1)-.24*Math.min(1,c)*0:0,u=l<1?-3.4-.3*c:-3.4+lt(2.1,2.7,a)*.9;return s.root.position.set(-5.3+lt(2.2,2.9,a)*.9,Math.max(0,h-.24*(l>=.999?1:0)),u),s.root.rotation.y=At(0,1.2,lt(2.3,2.8,a)),s.sombra.visible=l>=.999,s.pose(a<2.5?On(r,2.4,.7):ut(r)),U(s,null,r,a<2.5?"determinado":"surpreso",{look:[.6*lt(2.4,2.8,a),0]}),nt(o,[[0,[-3,2.2,-.4]],[3,[-3.2,1.45,-1]]],[[0,[-5.3,2.4,-5.6]],[3,[-4.6,1.1,-2.7]]],a),{}}})}function ja(n){let t=An(n,{ano:"2012"}),e=rt(n,en,0,0);ae(e,1.15,-3.6,-Math.PI/2+.25,.48);let i=t.xi;e.hands.R.add(i),i.position.set(0,-.06,.04);let s=cd();s.position.set(.6,.8,-3.55),s.rotation.x=-Math.PI/2,s.rotation.z=.3,n.add(s);let r=rt(n,yn,-3,-2.1,2);return{K:t,M:e,G:r}}function Uy(n,t){return K(n,t,{},e=>{let{K:i,M:s,G:r}=ja(e);return(a,o,l)=>{i.rel.set(6,50+o*.2);let c=Math.sin(a*.9)>.6?1:0;return s.pose(Et({shR:[60+25*c,10],elR:110+20*c,shL:[30,10],elL:60,headX:c?-12:6,headY:c?0:20*Math.sin(a*1.4)})),U(s,null,a,o>3?"bravo":"neutro",{mouth:o>2.6&&!c?{open:.3+.3*Math.abs(Math.sin(a*7))}:void 0}),r.pose({...ut(a),shL:[5,6],shR:[5,6]}),U(r,null,a,"surpreso",{look:[.5,0],lagrima:o>4.8}),nt(l,[[0,[-3.6,1.5,-.2]],[6.7,[-2.6,1.4,-.9]]],[[0,[.8,1,-3.6]],[6.7,[1,1.1,-3.6]]],o),{}}})}function Ny(n,t){return K(n,t,{},e=>{let{K:i,M:s,G:r}=ja(e);return r.root.position.set(-.9,0,-2.2),r.root.rotation.y=2.17,(a,o,l)=>(s.pose(Ce("marcos",a,Et({shR:[60,10],elR:110,headY:-30}),.6)),U(s,"marcos",a,"desconfiado",{look:[-.5,0]}),r.pose(ut(a)),U(r,null,a,"surpreso",{look:[.6,0]}),nt(l,[[0,[-2.5,1.7,-.15]],[3.3,[-2.3,1.65,-.3]]],[[0,[1.1,1.25,-3.55]],[3.3,[1.1,1.28,-3.55]]],o),{})})}function Oy(n,t){return K(n,t,{},e=>{let{K:i,M:s,G:r}=ja(e);return r.root.position.set(-.9,0,-2.2),r.root.rotation.y=2.17,(a,o,l)=>(s.pose(Et({shR:[60,10],elR:110,headY:-30})),U(s,null,a,"neutro",{look:[-.5,0]}),r.pose(Ce("gui",a,{...ut(a),headX:6},.4)),U(r,"gui",a,"triste",{lagrima:!0,look:[.6,-.1],smile:.3}),nt(l,[[0,[.55,1.3,-3.05]],[3.2,[.35,1.28,-2.9]]],[[0,[-.9,1.1,-2.2]],[3.2,[-.9,1.12,-2.2]]],o),{})})}function zy(n,t){return K(n,t,{},e=>{let{K:i,M:s,G:r}=ja(e);return r.root.position.set(-.9,0,-2.2),r.root.rotation.y=2.17,(a,o,l)=>(s.pose(Ce("marcos",a,Et({shR:[60,10],elR:110,headY:-30,headZ:10}),.8)),U(s,"marcos",a,o<1.3?"surpreso":"feliz",{look:[-.5,0],olhosAbertos:!0}),r.pose(ut(a)),U(r,null,a,"feliz",{lagrima:!0,olhosAbertos:!0}),nt(l,[[0,[-.4,1.5,.7]],[3.2,[-.1,1.45,.3]]],[[0,[.1,1.1,-3]],[3.2,[.15,1.12,-3]]],o),{})})}var gd=[[Ey,0,4.6],[vy,4.6,7],[_y,7,11.2],[My,11.2,14.2],[Sy,14.2,19.2],[by,19.2,23.5],[Ay,23.5,26.7],[xy,26.7,31.2],[Ty,31.2,36.2],[wy,36.2,42.1],[Ry,42.1,46.3],[Cy,46.3,48],[Fy,48,53.85],[Py,53.85,57.65],[Iy,57.65,63],[Dy,63,65.8],[Ly,65.8,67.8],[By,67.8,70.8],[Uy,70.8,77.5],[Ny,77.5,80.75],[Oy,80.75,84],[zy,84,87.18]];var Dr={tint:"#D8DEFF",vig:.4},Ir=(n,t={})=>Pi(n,{camisa:"#F6F4EE",estampa:ti.estampa,simples:!0,...t});function ky(){let n=new Y;return n.add(J(.008,.008,.15,"#2E6FB8",0,0,0,{seg:6})),n.add(J(.004,.008,.02,"#1B1420",0,-.085,0,{seg:6})),n}function tl(n){let t=hn(n,{noite:!0});t.cad.position.x=2.05;let e=rt(n,yn,0,0);ae(e,2.05,-5.2,Math.PI,.48);let i=Li();i.position.set(2.05,.795,-5.78),i.rotation.y=Math.PI,n.add(i);let s=ky();return e.hands.R.add(s),s.position.set(0,-.05,.03),s.rotation.x=1.2,{Q:t,G:e,CA:i,pen:s}}var G0=(n,t=1)=>Et({shR:[70,12],elR:85+6*Math.sin(n*9)*t,shL:[55,18],elL:85,headX:28,lean:14});function V0(n,t,e,i,s=0,r=!1){cn(n,t,e,()=>{if(ge(n,"A LISTA",t*.5,e*.08,60,"#B8322B","center"),i>0&&ge(n,"1. Comprar bitcoin",t*.16,e*.2,46),i>1&&ge(n,"2. N\xE3o contar pra ningu\xE9m",t*.16,e*.32,42),i>2&&(r?(ge(n,"3. Salvar o meu pai",t*.16,e*.44,44,"#B8322B"),ge(n,"14/03/2019",t*.2,e*.53,42,"#B8322B")):ge(n,"3. ...",t*.16,e*.44,44)),s>0){let a=e*.62*s;n.fillStyle="#E8E2D0",n.beginPath(),n.moveTo(0,e),n.lineTo(0,e-a),n.lineTo(t,e-a),n.lineTo(t,e),n.fill(),n.strokeStyle="#B8B0A0",n.lineWidth=4,n.beginPath(),n.moveTo(0,e-a),n.lineTo(t,e-a),n.stroke()}})}function Hy(n,t){return K(n,t,{bg:"#1E2648"},e=>{let{Q:i,G:s,CA:r}=tl(e);return r.userData.D.paint("0",(a,o,l)=>V0(a,o,l,0)),r.userData.E.paint("e",(a,o,l)=>cn(a,o,l)),(a,o,l)=>(s.pose(G0(a,o>2?1:0)),U(s,null,a,"determinado",{look:[0,.8]}),nt(l,[[0,[3.5,2.3,-3.4]],[5,[3.3,2.15,-3.9]]],[[0,[2,.9,-5.75]],[5,[2,.9,-5.75]]],o),Dr)})}function Gy(n,t){return K(n,t,{bg:"#1E2648"},e=>{let{Q:i,G:s,CA:r,pen:a}=tl(e);return r.userData.E.paint("e",(o,l,c)=>cn(o,l,c)),(o,l,c)=>{let h=o<92.3?0:o<94.45?1:o<97.1?2:3,u=lt(100.1,100.9,o);return r.userData.D.paint(h+"|"+Math.round(u*10),(d,f,p)=>V0(d,f,p,h,u)),s.pose(G0(o,o<99.8?1:0)),U(s,null,o,o>98&&o<100?"preocupado":"determinado",{look:[0,.8]}),nt(c,[[0,[3.25,2.1,-6.1]],[9.1,[3.05,1.95,-6.05]]],[[0,[2.05,.8,-5.8]],[9.1,[2.05,.8,-5.8]]],l),Dr}})}function Vy(n,t){return K(n,t,{bg:"#1E2648"},e=>{let{Q:i,G:s,CA:r}=tl(e);r.visible=!1;let a=ci();return a.position.set(2.05,.81,-5.78),e.add(a),(o,l,c)=>{let h=lt(.6,1.6,l);return s.pose(Et({shR:[40,10],elR:60,shL:[40,10],elL:60,headX:4,headY:150*h*0,twist:0})),s.root.rotation.y=At(Math.PI,.9,h),i.cad.rotation.y=s.root.rotation.y,U(s,null,o,"desconfiado",{look:[.3*h,0],mouth:{open:0,smile:.4}}),nt(c,[[0,[3.05,1.3,-4.05]],[3.9,[2.85,1.25,-4.3]]],[[0,[2.05,1.1,-5.2]],[3.9,[2.05,1.1,-5.2]]],l),Dr}})}function Wy(n,t=2.2,e=1.4){let i=Ls(e);i.position.set(0,t,0),n.add(i);let s=new Ze("#FFC060",8,10,1.6);s.position.set(0,t+.5,2),n.add(s);let r=Sn(n,[0,t-1,0],{cor:"#FFC060",size:6,n:50,alt:3});return{m:i,B:r}}function Xy(n,t){return K(n,t,{},e=>{Bi(e);let{m:i,B:s}=Wy(e),r=[];for(let a=0;a<6;a++){let o=-1.2+a*.48,l=Pi(a,{simples:!0});l.place(Math.sin(o)*4.2,Math.cos(o)*3.4-.5,0,o+Math.PI),e.add(l.root);let c=jn("interrogacao",.5);c.position.set(0,1.85,0),l.root.add(c),r.push({k:l,q:c,i:a})}return(a,o,l)=>(i.rotation.y=a*1.6,s(o,.8),r.forEach(({k:c,q:h,i:u})=>{c.pose({...ut(a,u),shL:[30,40],shR:[30,40],elL:90,elR:90,headZ:12*Math.sin(a*2+u)}),U(c,null,a,"desconfiado"),h.position.y=1.85+.08*Math.sin(a*3+u)}),nt(l,[[0,[0,2.6,9]],[3.2,[1.5,2.2,7.2]]],[[0,[0,1.6,0]],[3.2,[0,1.7,0]]],o),{bloom:.5,bloomT:.8})})}function qy(n,t){return K(n,t,{},e=>{Bi(e,{c1:"#2A1A3A",c2:"#5A3A2A"});let i=J(.9,1,1.1,"#F4F1EA",0,.55,0,{out:.01});e.add(i);let s=Ls(.6);s.position.set(0,1.75,0),e.add(s);let r=kn(1.4,.8,(o,l,c)=>{o.fillStyle="#FFFFFF",o.fillRect(0,0,l,c),o.strokeStyle="#B8322B",o.lineWidth=16,o.strokeRect(8,8,l-16,c-16),pt(o,"R$ 16",l/2,c*.45,c*.38,"#B8322B"),pt(o,"\u2248 US$ 8",l/2,c*.78,c*.16,"#3A3A44",800)});r.position.set(1.25,1.2,.4),r.rotation.set(0,-.3,.12),e.add(r),e.add(J(.01,.01,.6,"#9EA6B0",.8,1.45,.25,{rot:[0,0,1.1],seg:4}));let a=Sn(e,[0,1.2,0],{cor:"#FFC060",size:3,n:30,alt:2});return(o,l,c)=>(s.rotation.y=o*1.2,s.position.y=1.75+.05*Math.sin(o*2),a(l,.6),r.rotation.z=.12+.05*Math.sin(o*2.2),nt(c,[[0,[-1.2,1.9,4.2]],[3.1,[-.6,1.7,3.2]]],[[0,[.3,1.4,0]],[3.1,[.45,1.4,0]]],l),{bloom:.45,bloomT:.8})})}function Lr(n){return hn(n)}function Yy(n,t){return K(n,t,{},e=>{let i=Lr(e),s=rt(e,yn,0,0);return ae(s,1.3,-5.15,Math.PI+.4,.48),i.pc.userData.sc.paint("g",(r,a,o)=>{r.fillStyle="#0E1422",r.fillRect(0,0,a,o),pt(r,"BITCOIN?",a/2,44,34,"#FFB43A"),r.strokeStyle="#7DF0A0",r.lineWidth=6,r.beginPath(),r.moveTo(30,o-40),r.bezierCurveTo(200,o-60,300,o-90,a-30,70),r.stroke()}),(r,a,o)=>(s.pose(Et({shR:[30,10],elR:40,shL:[30,10],elL:40,headY:-25})),U(s,null,r,"feliz",{olhosAbertos:!0,look:[.4,0],mouth:{open:0,smile:.7}}),nt(o,[[0,[-.15,1.4,-6.1]],[3.2,[.05,1.35,-6.25]]],[[0,[1.3,1.15,-5.2]],[3.2,[1.3,1.15,-5.2]]],a),{})})}function Zy(){let n=new Y,t=de(.18,"#F28FA8",0,.18,0,{out:.006});t.scale.set(1.25,1,1),n.add(t),n.add(J(.06,.07,.07,"#F28FA8",.23,.2,0,{rot:[0,0,Math.PI/2],out:.004}));for(let e of[-1,1]){n.add(de(.045,"#E07A94",.12,.34,e*.09));for(let i of[-.08,.08])n.add(J(.03,.03,.08,"#F28FA8",e*.1,.03,i,{seg:6}))}return n.add(ft(.08,.01,.02,"#1B1420",0,.36,0)),n}function $y(n,t){return K(n,t,{},e=>{let i=Lr(e),s=rt(e,yn,-.6,-3.3,.2),r=Zy();s.hands.R.add(r),r.position.set(-.1,-.05,.1);let a=[];for(let o=0;o<3;o++){let l=J(.03,.03,.008,"#E8C060",0,0,0,{seg:12});e.add(l),a.push(l)}return(o,l,c)=>{let h=l<2.6?Math.sin(o*22)*14:0;return s.pose({...ut(o),shR:[95+h*.5,20],elR:60+h,shL:[80,-10],elL:70,headX:10}),U(s,null,o,l<2.6?"determinado":l<3.3?"triste":"determinado",{look:[-.2,.4]}),a.forEach((u,d)=>{let f=Xe((l-.8-d*.5)*1.6,0,1);u.position.set(-.55+d*.06,1-f*.99,-3),u.visible=f>0}),nt(c,[[0,[.6,1.3,-1.4]],[3.2,[.3,1.2,-1.8]],[4.7,[-.2,1.15,-2.4]]],[[0,[-.6,1,-3.3]],[4.7,[-.6,1.05,-3.3]]],l),{exposure:1-.08*lt(3.2,4.2,l)}}})}function Jy(n,t){return K(n,t,{},e=>{let i=Lr(e);i.vg.visible=!1;let s=rt(e,yn,-.9,-2.4,1.2),r=rt(e,{pele:"#C98A62",cabelo:"tigela",corCabelo:"#2A1A14",camisa:"#E2443A",calca:"#2A2A33",escala:.92},.5,-2,-1.9),a=$a();e.add(a);let o=kn(.16,.08,(l,c,h)=>{l.fillStyle="#7AC4A0",l.fillRect(0,0,c,h),pt(l,"R$ 50",c/2,h/2,h*.5,"#1E4A33")},{basic:!0});return e.add(o),(l,c,h)=>{let u=lt(.5,1.4,c),d=new C(At(-.6,.25,u),1,At(-2.25,-2.05,u));return a.position.copy(d).add(new C(0,-.08,0)),a.rotation.y=1.2,s.pose({...ut(l),shR:[70-30*u,10],shL:[70-30*u,10],elR:40,elL:40}),U(s,null,l,"triste",{look:[.6,0]}),r.pose({...ut(l,2),shR:[70*u,10],shL:[70*u,10],elR:40,elL:40}),U(r,null,l,"feliz",{look:[-.4,0]}),o.position.set(At(.3,-.5,lt(1.3,1.9,c)),1,-2.1),o.rotation.y=.4,nt(h,[[0,[-.3,1.4,.2]],[2.1,[-.25,1.35,-.2]]],[[0,[-.2,1,-2.2]],[2.1,[-.2,1,-2.2]]],c),{}}})}function Qy(n,t){return K(n,t,{},e=>{let i=Lr(e),s=rt(e,yn,0,0);ae(s,-2.6,-4.4,Math.PI/2,.6);let r=new Y;r.add(J(.1,.1,.2,"#CFE8F2",0,.1,0,{seg:16,out:.004}));for(let l=0;l<6;l++)r.add(J(.03,.03,.008,"#E8C060",(l%3-1)*.04,.02+Math.floor(l/3)*.01,0,{seg:10}));r.position.set(-1.9,.62,-4.4),e.add(r);let a=H(.3,.04,.4,"#2E9C5A",-2.05,.62,-4,{r:.01,out:.004});e.add(a);let o=kn(.26,.34,(l,c,h)=>{l.fillStyle="#2E9C5A",l.fillRect(0,0,c,h),pt(l,"\xC1LBUM",c/2,h*.3,h*.14,"#F6D33A"),pt(l,"FIGURINHAS",c/2,h*.5,h*.1,"#FFFFFF");for(let u=0;u<4;u++)l.fillStyle=["#E2443A","#F2C230","#2E6FB8","#F4F1EA"][u],l.fillRect(c*(.15+u*.18),h*.65,c*.14,h*.18)});return o.rotation.x=-Math.PI/2,o.position.set(-2.05,.645,-4),e.add(o),(l,c,h)=>(s.pose(Et({shR:[60,10],elR:70+10*Math.sin(l*6),shL:[50,10],elL:60,headX:25,lean:8})),U(s,null,l,"determinado",{look:[.3,.8]}),r.rotation.z=.4*lt(.2,.8,c),nt(h,[[0,[-.8,1.3,-3]],[1.8,[-1.1,1.2,-3.4]]],[[0,[-2.1,.7,-4.2]],[1.8,[-2.1,.7,-4.2]]],c),{})})}function Ky(n,t){return K(n,t,{},e=>{let i=Lr(e),s=[];for(let r=0;r<32;r++){let a=kn(.16,.08,(o,l,c)=>{o.fillStyle=["#7AC4A0","#E8B86A","#9FB4E8"][r%3],o.fillRect(0,0,l,c),pt(o,["R$ 50","R$ 20","R$ 10"][r%3],l/2,c/2,c*.45,"#1B1420")},{basic:!0});a.rotation.x=-Math.PI/2,a.rotation.z=r*.7,e.add(a),s.push(a)}return(r,a,o)=>(s.forEach((l,c)=>{let h=Xe((a-c*.04)*3,0,1);l.position.set(-3.6+c%6*.13+c%2*.03,.67+h*0+.002*c+(1-h)*.8,-4.4+Math.floor(c/6)*.12),l.visible=h>0}),nt(o,[[0,[-2.4,1.6,-3.6]],[2.2,[-2.7,1.4,-3.9]]],[[0,[-3.3,.65,-4.2]],[2.2,[-3.3,.65,-4.15]]],a),{})})}function W0(n){let t=Lr(n),e=rt(n,yn,-.8,-3.6,.7),i=rt(n,en,1.2,-1.6,-2.3);return{Q:t,G:e,M:i}}function jy(n,t){return K(n,t,{},e=>{let{Q:i,G:s,M:r}=W0(e);return i.vg.visible=!1,(a,o,l)=>(r.pose(Ce("marcos",a,{...ut(a,1),shR:[80,-5],elR:10,headX:-4},1)),U(r,"marcos",a,"bravo",{look:[-.5,0]}),s.pose({...ut(a),shL:[10,6],shR:[10,6],headX:8}),U(s,null,a,"preocupado",{look:[.6,-.2]}),nt(l,[[0,[-2.4,1.6,-1.6]],[5.1,[-2,1.55,-1.9]]],[[0,[1,1.3,-1.8]],[5.1,[1,1.32,-1.8]]],o),{})})}function tE(n,t){return K(n,t,{},e=>{let{Q:i,G:s,M:r}=W0(e);return i.vg.visible=!1,(a,o,l)=>(r.pose({...ut(a,1),shL:[55,-10],shR:[55,-10],elL:110,elR:110}),U(r,null,a,"bravo"),s.pose(Ce("gui",a,{...ut(a),shR:[60,20],elR:30,shL:[60,20],elL:30},.8)),U(s,"gui",a,"determinado",{look:[.5,-.2]}),nt(l,[[0,[.6,1.25,-2]],[1.8,[.45,1.22,-2.2]]],[[0,[-.8,1.08,-3.6]],[1.8,[-.8,1.1,-3.6]]],o),{})})}function eE(n,t){return K(n,t,{},e=>{let{Q:i,G:s,M:r}=W0(e);return i.vg.visible=!1,i.pc.userData.sc.paint("c",(a,o,l)=>{a.fillStyle="#F4F6F8",a.fillRect(0,0,o,l),a.fillStyle="#2E6FB8",a.fillRect(0,0,o,50),pt(a,"COIN EXCHANGE",o/2,26,26,"#fff")}),(a,o,l)=>{let c=lt(.8,1.5,o);return r.pose(Ce("marcos",a,{...ut(a,1),shR:[70*c,-30*c],elR:10,shL:[55,-10],elL:110,headY:20*c},.6)),U(r,"marcos",a,"desconfiado",{look:[.3,0]}),s.pose(ut(a)),U(s,null,a,"tedio",{look:[.5,0]}),nt(l,[[0,[-2.8,1.65,-.3]],[3.7,[-2.5,1.6,-.6]]],[[0,[.2,1.15,-2.6]],[3.7,[.3,1.15,-2.7]]],o),{}}})}function nE(n,t,e,i,s=0){if(n.fillStyle="#F4F6F8",n.fillRect(0,0,t,e),n.fillStyle="#2E6FB8",n.fillRect(0,0,t,54),pt(n,"COIN EXCHANGE",120,28,24,"#fff",900),pt(n,"Buy \xB7 Sell \xB7 Wallet",t-110,28,16,"#DDEFF8",700),i===0){pt(n,"BUY BITCOIN",t/2,100,34,"#1B1420"),n.fillStyle="#FFFFFF",n.strokeStyle="#9EA6B0",n.lineWidth=2;for(let r=0;r<3;r++)n.fillRect(80,140+r*60,t-160,40),n.strokeRect(80,140+r*60,t-160,40);pt(n,"Amount: 100 BTC",100,160,20,"#3A3A44",600,"left"),pt(n,"Password: \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",100,220,20,"#3A3A44",600,"left"),pt(n,"I agree to the terms",100,280,18,"#3A3A44",600,"left"),n.fillStyle="#F2A23A",n.fillRect(t/2-90,330,180,50),pt(n,"CONFIRM",t/2,356,22,"#fff")}else i===1?(pt(n,"Processing...",t/2,150,32,"#1B1420",800),n.fillStyle="#DDE3E8",n.fillRect(80,200,t-160,30),n.fillStyle="#2E9C5A",n.fillRect(80,200,(t-160)*s,30),pt(n,"Waiting for bank transfer (3-5 days)",t/2,270,18,"#9A3A2A",700)):(Ds(n,t/2,150,60),pt(n,"BALANCE",t/2,240,22,"#3A3A44",800),pt(n,"100.00000000 BTC",t/2,290,40,"#2E9C5A",900),pt(n,"Welcome!",t/2,345,22,"#1B1420",700))}function iE(n,t){return K(n,t,{bg:"#1E2648"},e=>{let i=hn(e,{noite:!0}),s=rt(e,yn,0,0);return ae(s,1.3,-5.15,Math.PI,.48),(r,a,o)=>{let l=r<137.8?0:r<140.55?1:2;return i.pc.userData.sc.paint(l+"|"+Math.round((r-137.8)*4),(c,h,u)=>nE(c,h,u,l,Xe((r-137.8)/2.7))),i.cal.paint("d"+Math.floor(Xe(a*1.6,0,7)),(c,h,u)=>{c.fillStyle="#FFFFFF",c.fillRect(0,0,h,u),c.fillStyle="#2E6FB8",c.fillRect(0,0,h,u*.3),pt(c,"2012",h/2,u*.16,u*.2,"#FFFFFF"),pt(c,String(3+Math.floor(Xe(a*1.6,0,7))),h/2,u*.64,u*.36,"#1B1420")}),s.pose(Et({shR:[55,12],elR:80+(l===0?8*Math.sin(r*11):0),shL:[55,12],elL:80,headX:4,lean:10+(l===2?-8:0),shR:l===2?[150,30]:[55,12]})),U(s,null,r,l===2?"rindo":l===1?"tedio":"determinado"),nt(o,[[0,[1.9,1.4,-4.85]],[2.7,[1.8,1.35,-5.05]],[5.4,[2.9,1.5,-4.2]]],[[0,[1.3,1.1,-5.88]],[2.7,[1.3,1.11,-5.88]],[5.4,[1.4,1,-5.5]]],a),Dr}})}function sE(){let n=new Y;n.add(H(3.2,2.6,2,"#E8E2D6",0,1.3,0,{r:.05,out:.012}));let t=new it(new li(2.2,.8,4),xt("#D8D0C2"));t.rotation.y=Math.PI/4,t.scale.set(1,1,.5),t.position.set(0,3,0),n.add(t);for(let i=0;i<4;i++)n.add(J(.12,.12,2.2,"#F4F1EA",-1.05+i*.7,1.2,1.1,{out:.006}));let e=kn(1.8,.4,(i,s,r)=>{i.fillStyle="#3A3A44",i.fillRect(0,0,s,r),pt(i,"BANCO",s/2,r/2,r*.6,"#F2C230")});return e.position.set(0,2.45,1.02),n.add(e),n}function yd(){let n=new Y;for(let t of[-1,1]){let e=H(3.2,.4,.2,"#E23A3A",0,0,0,{r:.08,out:.01});e.rotation.z=t*Math.PI/4,n.add(e)}return n}function rE(n,t){return K(n,t,{},e=>{Bi(e);let i=sE();i.position.set(-2.6,0,0),e.add(i);let s=yd();s.position.set(-2.6,1.6,1.4),e.add(s);let r=as(.9,1.7);r.position.set(2.6,1.6,.2),e.add(r),r.paint("w",(l,c,h)=>{l.fillStyle="#0E1422",l.fillRect(0,0,c,h),pt(l,"CARTEIRA",c/2,60,30,"#FFB43A"),Ds(l,c/2,190,70),pt(l,"100 BTC",c/2,310,40,"#FFFFFF"),l.fillStyle="#2E3A5A",l.fillRect(30,370,c-60,60),pt(l,"CHAVE: \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",c/2,400,22,"#9FB4D8",700)});let a=new Ze("#8FC4FF",6,6,1.6);a.position.set(2.6,1.8,1.4),e.add(a);let o=rt(e,yn,.2,1.2,0);return(l,c,h)=>{let u=lt(2.2,2.5,c);s.scale.setScalar(u<.01?.001:u),s.rotation.z=.1*Math.sin(l*3);let d=lt(3.6,4.2,c);return r.scale.setScalar(.3+.7*d),r.rotation.y=-.3+.3*Math.sin(l),a.intensity=6*d,o.pose({...ut(l),headY:At(-40,40,lt(1.5,4.5,c))}),U(o,null,l,"neutro",{look:[At(-.6,.6,lt(1.5,4.5,c)),0]}),nt(h,[[0,[-2,2.2,7.4]],[2.6,[-1.2,2,6.6]],[5.6,[1.6,2,6.4]]],[[0,[-2.6,1.5,0]],[2.6,[-2.2,1.5,0]],[5.6,[2,1.5,0]]],c),{bloom:.4,bloomT:.8}}})}function oE(n,t){return K(n,t,{},e=>{Bi(e,{c1:"#1A1A2A",c2:"#2A2A40"});let i=td();e.add(i);let s=ed();e.add(s);let r=nd();r.position.set(0,2.3,.9),e.add(r),r.visible=!1;let a=yd();a.position.set(0,1.25,1.7),e.add(a);let o=Sn(e,[0,.9,.4],{cor:"#FFC060",size:3,n:40,alt:2}),l=new Ze("#FF3A2A",0,6,1.6);return l.position.set(0,1.6,2),e.add(l),(c,h,u)=>{let d=lt(0,.9,h),f=lt(1,1.6,h)*(1-lt(2.2,2.5,h)),p=lt(1.9,2.6,h);return s.position.set(At(1.8,.78,d),At(1.7,.9,d)-p*1.4,At(2,.85,d)),s.rotation.set(0,Math.PI/2*d,p*2),s.visible=p<.98,i.userData.porta.rotation.y=-1.6*f,i.userData.vol.rotation.z=d*3,o(h,f),i.userData.dentro.visible=f>.05,r.userData.arco.position.y=.2+.12*f,a.scale.setScalar(Math.max(.001,.42*lt(2.4,2.75,h))),a.rotation.z=.06*Math.sin(c*3),l.intensity=8*lt(2.4,2.7,h),nt(u,[[0,[1.8,2,5]],[3.95,[.6,1.8,4]]],[[0,[0,1.2,0]],[3.95,[0,1.3,0]]],h),{bloom:.4,bloomT:.8}}})}function aE(n,t){return K(n,t,{bg:"#1E2648"},e=>{let{Q:i,G:s,CA:r}=tl(e);return r.userData.E.paint("lista",(a,o,l)=>V0(a,o,l,2,0)),(a,o,l)=>{let c=Xe((o-.6)/3.2,0,1);return r.userData.D.paint("s"+Math.floor(c*20),(h,u,d)=>cn(h,u,d,()=>{ge(h,"SENHA DA CARTEIRA:",u*.16,d*.14,44,"#B8322B");let f="k7Rq-9xWm-2Lb".slice(0,Math.ceil(c*26)),p="Fz4t-Pp81-Vh".slice(0,Math.max(0,Math.ceil(c*26)-13));h.filter="blur(6px)",ge(h,f,u*.16,d*.3,52),ge(h,p,u*.16,d*.42,52),h.filter="none",c>.95&&ge(h,"N\xC3O PERDER!!!",u*.16,d*.6,48,"#B8322B")})),s.pose(G0(a,c<1?1:0)),U(s,null,a,"determinado",{look:[0,.8]}),nt(l,[[0,[3.2,2.05,-6.05]],[5,[3,1.95,-6.05]]],[[0,[2.05,.8,-5.8]],[5,[2.05,.8,-5.8]]],o),Dr}})}function lE(n,t){return K(n,t,{bg:"#1E2648"},e=>{let i=hn(e,{noite:!0}),s=rt(e,yn,3,-3.5,Math.PI/2),r=ci();s.hands.R.add(r),r.position.set(0,-.06,.06),r.rotation.set(Math.PI/2,0,0);let a=new C;i.cadLista.getWorldPosition(a);let o=Sn(e,[a.x,a.y-.2,a.z],{cor:"#FFB43A",size:1.2,n:24,alt:.6,ps:.6});return(l,c,h)=>{let u=lt(.3,1.6,c);s.pose({...ut(l),shR:[At(40,95,u),10],elR:At(60,15,u),headX:-8}),U(s,null,l,"determinado",{look:[0,-.2]});let d=c>1.7;return r.visible=!d,i.cadLista.visible=d,d&&s.pose({...ut(l),shR:[At(95,10,lt(1.7,2.5,c)),10],elR:15}),o(c,lt(2.4,3.2,c)*.9),nt(h,[[0,[.6,1.85,-.7]],[2,[.8,1.8,-.9]],[4.6,[1.1,1.7,-1.1]]],[[0,[3.3,1,-3.5]],[2,[3.5,1,-3.6]],[4.6,[a.x,a.y,a.z]]],c),Dr}})}function Ed(n,t=10){let e=[];for(let i=0;i<t;i++){let s=Ir(i);s.place(-6+i%5*2.6+i%2*.6,-6-Math.floor(i/5)*3.2,0,(i%3-1)*.8),n.add(s.root),e.push(s)}return e}function cE(n,t){return K(n,t,{},e=>{Bs(e);let i=Ed(e),s=rt(e,ti,0,0,Math.PI);return(r,a,o)=>{let l=1-a*.9;return s.root.position.set(.4,0,l),s.pose(Jn(r,1.6,.9)),U(s,null,r,"feliz",{olhosAbertos:!0}),i.forEach((c,h)=>{c.faceTo(.4,l),c.pose(ut(r,h)),U(c,null,r,h%2?"desconfiado":"surpreso")}),nt(o,[[0,[2.5,1.6,4.4]],[5.5,[1.8,1.5,0]]],[[0,[.4,1,-.5]],[5.5,[.4,1,-4.2]]],a),{}}})}function hE(n,t){return K(n,t,{},e=>{Bs(e);let i=rt(e,ti,0,-8,0),s=[Ir(2),Ir(5),Ir(1)];s.forEach((o,l)=>{let[c,h]=[[-1.5,-7.2],[1.6,-7.5],[-.9,-6.5]][l];o.place(c,h,0,0),o.faceTo(0,-8),e.add(o.root)});let r=[];for(let o=0;o<4;o++){let l=jn("notas",.3);e.add(l),r.push(l)}let a=kn(1,.7,(o,l,c)=>{o.fillStyle="#F4F1EA",o.fillRect(0,0,l,c),o.fillStyle="#F2C230",o.beginPath(),o.arc(l/2,c*.5,c*.3,0,7),o.fill(),o.fillStyle="#1B1420",o.beginPath(),o.arc(l*.44,c*.44,8,0,7),o.arc(l*.56,c*.44,8,0,7),o.fill(),o.lineWidth=6,o.strokeStyle="#1B1420",o.beginPath(),o.arc(l/2,c*.5,c*.16,.2,Math.PI-.2),o.stroke(),pt(o,"MEME",l/2,c*.9,c*.14,"#1B1420")});return e.add(a),(o,l,c)=>{i.pose({...ut(o),headZ:10*Math.sin(o*5),shR:[20+20*Math.abs(Math.sin(o*5)),30],shL:[20+20*Math.abs(Math.sin(o*5+1)),30]}),U(i,null,o,"feliz",{mouth:{open:.3+.2*Math.sin(o*9),round:.7}}),r.forEach((u,d)=>{let f=(l*.5+d/4)%1;u.position.set(.3+Math.sin(f*6+d)*.3,1.6+f*1.2,-8),u.material.opacity=l<2.4?Math.sin(f*Math.PI):0});let h=lt(2.5,2.9,l);return a.position.set(.9,1.9,-7.8),a.scale.setScalar(.01+h),a.rotation.y=-.2,s.forEach((u,d)=>{u.pose({...ut(o,d),shL:[80*(d===1?1:0),10],elL:90}),U(u,null,o,"surpreso",{mouth:{open:.5,round:.8}})}),nt(c,[[0,[2.8,2.3,-3.4]],[4.2,[2.5,2.1,-3.8]]],[[0,[0,1.1,-7.8]],[4.2,[0,1.15,-7.9]]],l),{}}})}function uE(n,t){return K(n,t,{},e=>{let i=ud(e),s=rt(e,Xu,2.4,-6.9,0),r=i.carteiras.map(([c,h],u)=>{if(u===5)return null;let d=Ir(u+2);return ae(d,c,h+.45,Math.PI,.48),e.add(d.root),d}),a=rt(e,ti,0,0),[o,l]=i.carteiras[5];return ae(a,o,l+.45,Math.PI,.48),(c,h,u)=>{let d=lt(1.2,1.6,h);return a.pose(Et({shR:[At(40,165,d),20],elR:At(80,10,d),shL:[50,10],elL:80})),U(a,null,c,d>.5?"feliz":"determinado",{olhosAbertos:!0}),r.forEach((f,p)=>{f&&(f.pose(Et({shR:[50,10],elR:80+6*Math.sin(c*8+p),shL:[50,10],elL:80,headX:20,headY:d>.5&&p%2?40:0})),U(f,null,c,d>.5?"surpreso":"preocupado"))}),s.pose({...ut(c),headY:40*d}),U(s,null,c,d>.5?"surpreso":"neutro"),nt(u,[[0,[4.8,2.6,-7.2]],[3.2,[4.4,2.3,-6.9]]],[[0,[o,1,l]],[3.2,[o,1,l]]],h),{}}})}function dE(n,t){return K(n,t,{},e=>{Bs(e);let i=rt(e,ti,0,-6,0),s=[];for(let o=0;o<6;o++){let l=Ir(o+1),c=-1+o*.4;l.place(Math.sin(c)*2.6,-6+Math.cos(c)*2.6,0,c+Math.PI),e.add(l.root),s.push(l)}let r=de(.28,"#B98AF0",0,1.9,-6,{out:.006});r.material=new We({color:"#B98AF0",transparent:!0,opacity:.8,emissive:"#5A3A9A"}),e.add(r);let a=Sn(e,[0,1.7,-6],{cor:"#C9A8FF",size:1.5,n:20,alt:1});return(o,l,c)=>(i.pose({...ut(o),shL:[40,40],shR:[40,40],elL:60,elR:60}),U(i,null,o,"vergonha",{olhosAbertos:!0}),r.position.y=2.1+.08*Math.sin(o*3),a(l,.7),s.forEach((h,u)=>{h.pose({...ut(o,u),shR:[95,0],elR:0}),U(h,null,o,"surpreso",{mouth:{open:.4+.2*Math.sin(o*6+u)}})}),nt(c,[[0,[0,3.2,1.4]],[3.25,[0,2.4,-.6]]],[[0,[0,1,-6]],[3.25,[0,1.3,-6]]],l),{bloom:.3})})}function fE(n,t){return K(n,t,{},e=>{Bs(e),Ed(e,6);let i=rt(e,ti,-.7,-3.6,.7),s=rt(e,uo,2.2,-1.8,-2.2);return(r,a,o)=>{let l=lt(0,1.4,a);return s.root.position.set(At(2.4,1,l),0,At(-1.2,-2.7,l)),s.pose(a<1.4?zn(Jn(r,1.8,1),{shL:[55,-10],shR:[55,-10],elL:110,elR:110},.5):{...ut(r),shL:[55,-10],shR:[55,-10],elL:110,elR:110}),U(s,null,r,"desconfiado",{look:[-.4,0]}),i.pose(ut(r)),U(i,null,r,"neutro",{look:[.5,0]}),nt(o,[[0,[-.6,1.5,1.6]],[1.8,[-.3,1.45,.8]]],[[0,[.2,1.1,-3]],[1.8,[.3,1.1,-3.1]]],a),{}}})}var vd=[[Hy,87.18,92.2],[Gy,92.2,101.35],[Vy,101.35,105.28],[Xy,105.28,108.5],[qy,108.5,111.6],[Yy,111.6,114.85],[$y,114.85,119.6],[Jy,119.6,121.7],[Qy,121.7,123.5],[Ky,123.5,125.7],[jy,125.7,130.85],[tE,130.85,132.7],[eE,132.7,136.4],[iE,136.4,141.85],[rE,141.85,147.45],[oE,147.45,151.4],[aE,151.4,156.4],[lE,156.4,161.05],[cE,161.05,166.6],[hE,166.6,170.85],[uE,170.85,174.05],[dE,174.05,177.3],[fE,177.3,179.07]];var Md=[194.22,195.19,195.72,196.38,196.97],pE=n=>Md.filter(t=>n>=t).length,mE=(n,t={})=>Pi(n,{camisa:"#F6F4EE",estampa:ti.estampa,simples:!0,...t});function Sd(n){Bs(n);for(let i=0;i<6;i++){let s=mE(i+2);s.place(-7+i*2.4,-10-i%2*2,0,(i%3-1)*.6),n.add(s.root),s.pose(ut(i))}let t=rt(n,ti,-.7,-3.6,.9),e=rt(n,uo,1,-2.7,-2.3);return{G:t,D:e}}function gE(n,t){return K(n,t,{},e=>{let{G:i,D:s}=Sd(e);return(r,a,o)=>(s.pose(Ce("dudu",r,{...ut(r),shL:[55,-10],elL:110},1.2)),U(s,"dudu",r,"desconfiado",{look:[-.5,0],smile:.5}),i.pose(ut(r)),U(i,null,r,"neutro",{look:[.6,0]}),nt(o,[[0,[-1.7,1.55,-4.9]],[4.9,[-1.45,1.5,-4.6]]],[[0,[1,1.2,-2.7]],[4.9,[1,1.2,-2.7]]],a),{})})}function yE(n,t){return K(n,t,{},e=>{let{G:i,D:s}=Sd(e);return(r,a,o)=>{i.pose(ut(r)),U(i,"gui",r,"determinado",{look:[.6,0]});let l=lt(1.1,1.3,a);return s.pose({...ut(r),lean:-12*l,shL:[30*l,30],shR:[30*l,30],headX:-20*l*Math.abs(Math.sin(r*9))}),U(s,null,r,l>.5?"rindo":"surpreso",{mouth:l>.5?{open:.6+.3*Math.sin(r*14)}:void 0}),nt(o,[[0,[.2,1.25,-1.6]],[1.1,[0,1.22,-1.9]],[2.45,[.6,1.4,.2]]],[[0,[-.7,1.1,-3.6]],[1.1,[-.7,1.1,-3.6]],[2.45,[.1,1.1,-3.1]]],a),{}}})}function EE(n,t=18,e={}){let i=[],s=[];for(let r=0;r<3;r++)for(let a=0;a<6;a++)s.push([-5.2+a*1.9+r%2*.8,-6.4+r*1.5]);for(let r=0;r<t;r++){let[a,o]=s[r];if(a>3||e.livre&&Math.hypot(a-e.livre[0],o-e.livre[1])<1.2)continue;let l=qu(r,{simples:!0});l.place(a,o,0,Math.PI+a*.04),n.add(l.root),i.push({k:l,i:r})}return i}var Ui=(n,t,e)=>e===2?{...ut(n,t),shL:[150,-30],shR:[150,-30],elL:140,elR:140,headX:-8}:e===3?{...ut(n,t,.3),shL:[5,6],shR:[5,6],headX:10}:e===1?{...ut(n,t),shL:[60,10],shR:[60,10],elL:120,elR:120}:{...ut(n,t),shR:[20+15*Math.sin(n*2+t),10]};function Ni(n,t={}){let e=dd(n),i=EE(n,18),s=rt(n,vE(),0,0);ae(s,5.3,-3.6,-2.2,.5);let r=rt(n,I0,0,0);ae(r,4.3,-4.5,-2.9,.5);for(let[a,o,l]of[[5.3,-3.6,-2.2],[4.3,-4.5,-2.9]]){let c=new Y;c.add(H(.44,.06,.42,"#C0392B",0,.47,0,{r:.02,out:.005}));for(let h of[-1,1])for(let u of[-1,1])c.add(J(.02,.02,.47,"#9EA6B0",h*.17,.23,u*.17,{seg:5}));c.position.set(a,0,o),n.add(c)}return{B:e,T:i,G:s,D:r}}function vE(){return{...ti,camisa:"#F6D33A",estampa:(n,t,e)=>{n.fillStyle="#2E9C4A",n.fillRect(0,e*.88,t,e*.12)}}}function _E(n,t){return K(n,t,{},e=>{let{B:i,T:s,G:r,D:a}=Ni(e);return hi(i.T,0),(o,l,c)=>(s.forEach(({k:h,i:u})=>{h.pose(Ui(o,u,0)),U(h,null,o,"feliz")}),r.pose(Et({shL:[40,10],elL:90,shR:[40,10],elR:90,headX:25})),U(r,null,o,"preocupado",{look:[0,.6]}),a.pose(Et({shR:[70,10],elR:100})),U(a,null,o,"feliz"),nt(c,[[0,[-5.6,2.8,2.6]],[4.5,[-3,2.2,.6]]],[[0,[0,1.4,-5.5]],[4.5,[1.5,1.3,-5]]],l),{bloom:.3})})}function ME(n,t){return K(n,t,{},e=>{let{B:i,T:s,G:r,D:a}=Ni(e);return hi(i.T,0),(o,l,c)=>(s.forEach(({k:h,i:u})=>{h.pose(Ui(o,u,1)),U(h,null,o,"preocupado")}),r.pose(Et({shL:[150,-25],elL:140,shR:[150,-25],elR:140,headX:20})),U(r,null,o,"preocupado",{look:[0,.7]}),a.pose(Et({shR:[70,10],elR:100,lean:10})),U(a,null,o,"neutro",{look:[-.6,-.2]}),nt(c,[[0,[3,1.3,-1.6]],[3.2,[3.4,1.25,-2]]],[[0,[5,1,-3.8]],[3.2,[5,1,-3.8]]],l),{})})}function SE(n,t){return K(n,t,{},e=>{let{B:i,T:s,G:r,D:a}=Ni(e);return i.band.forEach(o=>o.visible=!1),(o,l,c)=>{let h=pE(o),u=h?o-Md[h-1]:9;return hi(i.T,h,u<.7?1:0),s.forEach(({k:d,i:f})=>{d.pose(Ui(o,f,u<1.2?2:1)),U(d,null,o,u<1.2?"medo":"preocupado",{mouth:u<.8?{open:.7,round:.9}:void 0})}),r.pose(Et({shL:[150,-25],elL:140,shR:[150,-25],elR:140,headX:20})),U(r,null,o,"triste"),a.pose(Et({shR:[150,-20],elR:140,shL:[150,-20],elL:140})),U(a,null,o,"medo"),Kn(c,[[0,[0,1.8,-1.2]],[3.3,[0,1.9,-3.2]]],[[0,[0,2.2,-8.8]],[3.3,[0,2.3,-8.8]]],l,u<.4?.02:0,o),{bloom:.3}}})}function bE(n,t){return K(n,t,{},e=>{let{B:i,T:s,G:r,D:a}=Ni(e);return hi(i.T,5),i.band.forEach(o=>o.visible=!1),(o,l,c)=>(s.forEach(({k:h,i:u})=>{h.pose(Ui(o,u,2)),U(h,null,o,u%3?"choro":"medo")}),r.pose(Et({headX:30})),U(r,null,o,"triste"),a.pose(Et({shR:[150,-20],elR:140,shL:[150,-20],elL:140})),U(a,null,o,"medo"),nt(c,[[0,[-1.6,3.1,-1.6]],[2.95,[-1,2.85,-2.3]]],[[0,[-1.3,1,-5.7]],[2.95,[-1,1,-5.7]]],l),{})})}function AE(n,t){return K(n,t,{},e=>{let{B:i,T:s,G:r,D:a}=Ni(e);return hi(i.T,5),(o,l,c)=>(s.forEach(({k:h,i:u})=>{h.pose(Ui(o,u,3)),U(h,null,o,"triste")}),r.pose(Et({headX:30})),U(r,null,o,"triste"),a.pose(Et({})),U(a,null,o,"surpreso",{look:[-.3,0]}),nt(c,[[0,[2.6,2.8,1.6]],[1.9,[2.4,2.6,.9]]],[[0,[0,1.2,-5.4]],[1.9,[0,1.2,-5.4]]],l,0,.4),{sat:.8})})}var bd={...I0,pele:"#B89A88"};function xE(n,t){return K(n,t,{},e=>{let{B:i,T:s,G:r,D:a}=Ni(e);a.root.visible=!1;let o=rt(e,bd,0,0);return ae(o,4.3,-4.5,-2.9,.5),hi(i.T,5),(l,c,h)=>{let u=lt(.3,3.2,c);return o.root.rotation.y=At(-2.9,-.9,u),o.pose(Et({headY:10*u})),U(o,null,l,"medo",{look:[.5*u,0]}),r.pose(Et({headX:25})),U(r,null,l,"triste",{look:[0,.5]}),s.forEach(({k:d,i:f})=>{d.pose(Ui(l,f,3)),U(d,null,l,"triste")}),nt(h,[[0,[2.6,1.3,-2]],[3.7,[3.1,1.2,-2.6]]],[[0,[4.4,1.05,-4.4]],[3.7,[4.35,1.05,-4.45]]],c),{sat:.85}}})}function TE(n,t){return K(n,t,{},e=>{let{B:i,T:s,G:r,D:a}=Ni(e);a.root.visible=!1;let o=rt(e,bd,0,0);return ae(o,4.3,-4.5,-.9,.5),hi(i.T,5),(l,c,h)=>(o.pose(Ce("dudu",l,Et({headY:10}),.4)),U(o,"dudu",l,"medo",{look:[.5,0]}),r.pose(Et({headX:10,headY:-20})),U(r,null,l,"neutro",{look:[-.6,0]}),s.forEach(({k:u,i:d})=>{u.pose(Ui(l,d,3)),U(u,null,l,"triste")}),nt(h,[[0,[3.3,1.18,-3.7]],[3.1,[3.42,1.15,-3.8]]],[[0,[4.3,1.05,-4.5]],[3.1,[4.3,1.05,-4.5]]],c),{sat:.85})})}function wE(n,t){return K(n,t,{},e=>{let{B:i,T:s,G:r,D:a}=Ni(e);return hi(i.T,5),(o,l,c)=>{s.forEach(({k:u,i:d})=>{u.pose(Ui(0,d,2)),U(u,null,0,d%3?"choro":"medo",{vivo:!1})}),r.pose(Et({headX:30})),U(r,null,o,"triste"),a.pose(Et({})),U(a,null,o,"surpreso");let h=-.9+l*.18;return nt(c,[[0,[Math.sin(h)*7,2.6,-4+Math.cos(h)*7]]],[[0,[0,1.3,-5]]],0),{sat:.9}}})}function RE(n,t){return K(n,t,{},e=>{let{B:i,T:s,G:r,D:a}=Ni(e);return hi(i.T,5),(o,l,c)=>(s.forEach(({k:h,i:u})=>{h.pose(Ui(o,u,3)),U(h,null,o,"triste")}),r.root.rotation.y=-2.2+2.2*lt(.3,1.2,l),r.pose(Et({})),U(r,null,o,"desconfiado",{look:[0,0],smile:.4}),a.pose(Et({})),U(a,null,o,"surpreso"),nt(c,[[0,[5,1.4,-1.2]],[5.1,[5.25,1.25,-2.6]]],[[0,[5.3,1.1,-3.6]],[5.1,[5.3,1.12,-3.6]]],l),{exposure:1-.9*lt(4.3,5.1,l)})})}var _d=[[2012,8],[2013,750],[2014,320],[2015,430],[2016,960],[2017,19e3]];function Ad(n){let t=_d.map(([a,o],l)=>new C(-6+l*2.4,.4+(Math.log10(o)-.9)*1.55,0)),e=new gr(t,!1,"centripetal"),i=new no(e,160,.14,10,!1),s=new it(i,xt("#FFB43A",{emissive:"#7A4A10"}));s.castShadow=!0,n.add(s);let r=i.index.count;return _d.forEach(([a,o],l)=>{let c=kn(1.4,.5,(h,u,d)=>{h.fillStyle="#2A2448",h.fillRect(0,0,u,d),pt(h,String(a),u/2,d/2,d*.6,"#C9C2E8")});c.rotation.x=-Math.PI/2,c.position.set(t[l].x,.02,1.4),n.add(c),n.add(J(.03,.03,t[l].y,"#4A3E7A",t[l].x,t[l].y/2,0,{seg:6}))}),{set:a=>i.setDrawRange(0,Math.floor(r*Xe(a))-Math.floor(r*Xe(a))%3),curva:e,pts:t}}function CE(n,t){return K(n,t,{},e=>{Bi(e);let i=Ad(e);return(s,r,a)=>(i.set(lt(.2,2.6,r)*.82),nt(a,[[0,[-4,3,11]],[2.65,[-1,3.6,12]]],[[0,[-2,2,0]],[2.65,[0,2.6,0]]],r),{bloom:.5,bloomT:.75})})}function FE(n,t){return K(n,t,{},e=>{Bi(e);let i=Ad(e),s=rt(e,Oe,0,0),r=i.pts[5],a=Ls(.7);a.rotation.x=-Math.PI/2,a.position.set(r.x,r.y+.05,0),e.add(a);let o=[];for(let l=0;l<26;l++){let c=Ls(.18);e.add(c),o.push(c)}return(l,c,h)=>(i.set(.82+.18*lt(0,1.2,c)),s.root.position.set(r.x,r.y+.13,0),s.root.rotation.y=.5,s.pose({...ut(l),shL:[160,30],shR:[160,30],elL:10,elR:10}),U(s,null,l,"rindo",{olhosAbertos:!0}),o.forEach((u,d)=>{let f=(c*.35+d/26)%1;u.position.set(r.x-2.5+d*1.37%5,r.y+4-f*5.5,-1.5+d*.71%3),u.rotation.set(l*2+d,l+d,0)}),nt(h,[[0,[r.x-6,r.y+1.5,7]],[6.85,[r.x-2.6,r.y+1,3.6]]],[[0,[r.x-1,r.y+.5,0]],[6.85,[r.x,r.y+1,0]]],c),{bloom:.5,bloomT:.75})})}function PE(n,t){return K(n,t,{},e=>{fd(e);let i=rt(e,Oe,0,0);ae(i,.95,-3.2,0,.56);let s=as(.07,.14);i.hands.R.add(s),s.position.set(0,-.02,.06),s.rotation.x=-.6,s.paint("s",(a,o,l)=>{a.fillStyle="#0E1422",a.fillRect(0,0,o,l),Ds(a,o/2,130,50),pt(a,"100 BTC",o/2,230,34,"#fff")});let r=[];for(let a=0;a<4;a++){let o=Pi(a+2,{simples:!0});o.place(-.35+a%2*.2,-5.2-a*1.5,0,Math.PI/2+a%2*.4),e.add(o.root),r.push(o)}return(a,o,l)=>(i.pose(Et({shR:[55,10],elR:100,shL:[40,10],elL:60,headX:22})),U(i,null,a,"neutro",{look:[0,.7]}),r.forEach((c,h)=>{c.pose({...ut(a,h),shR:[165,10],elR:10,bob:.01*Math.sin(a*7)}),U(c,null,a,"tedio")}),Kn(l,[[0,[.55,1.5,-1.45]],[2.1,[.62,1.45,-1.7]]],[[0,[.95,1,-3.1]],[2.1,[.95,1,-3.1]]],o,.006,a),{})})}function IE(n,t){return K(n,t,{bg:"#1E2648"},e=>{let i=Eo(e),s=rt(e,Oe,0,0);ae(s,1.5,-4.1,Math.PI,.48);let r=new Y;r.add(H(.44,.06,.42,"#3A3A44",0,.45,0,{r:.02})),r.position.set(1.5,0,-4.1),e.add(r);let a=rt(e,{pele:"#E8B898",cabelo:"tigela",corCabelo:"#C9A060",camisa:"#58B26A",calca:"#3A3A44"},0,0);return a.root.rotation.set(-Math.PI/2,0,Math.PI/2),a.root.position.set(-2.4,1.98,-4.2),a.sombra.visible=!1,(o,l,c)=>(s.pose(Et({shR:[70,15],elR:120+15*Math.sin(o*4),shL:[40,10],elL:60,headX:15})),U(s,null,o,"feliz",{look:[.2,.5],mouth:{open:.2*Math.abs(Math.sin(o*5))}}),a.pose({}),U(a,null,o,"sono",{blink:1}),nt(c,[[0,[-.5,1.6,-4.2]],[1.85,[-.3,1.55,-4.45]]],[[0,[1.5,1,-4.4]],[1.85,[1.5,1,-4.4]]],l),{tint:"#E8E2FF"})})}function DE(n,t){return K(n,t,{bg:"#1E2648"},e=>{Eo(e);let i=as(.5,1);i.position.set(0,1,-2.4),e.add(i);let s=Sn(e,[0,.6,-2.4],{cor:"#7DF0A0",size:.9,n:16,alt:.9});return i.paint("s",(r,a,o)=>{r.fillStyle="#0E1422",r.fillRect(0,0,a,o),pt(r,"MINHA CARTEIRA",a/2,50,22,"#9FB4D8",800),Ds(r,a/2,150,54),pt(r,"100 BTC",a/2,250,38,"#FFFFFF"),pt(r,"\u2248 R$ 6.000.000",a/2,320,30,"#7DF0A0"),r.fillStyle="#2E3A5A",r.fillRect(30,380,a-60,120),r.strokeStyle="#7DF0A0",r.lineWidth=5,r.beginPath(),r.moveTo(40,490),r.bezierCurveTo(120,480,160,460,a-40,395),r.stroke()}),(r,a,o)=>(i.rotation.set(-.15+.03*Math.sin(r),.1*Math.sin(r*.7),0),s(a,.7),nt(o,[[0,[.2,1.1,-1]],[2.6,[.05,1.02,-1.55]]],[[0,[0,1,-2.4]],[2.6,[0,1,-2.4]]],a),{bloom:.4,bloomT:.8})})}function LE(){let n=new Y;n.add(H(.5,.4,.4,"#F2C14E",0,.2,0,{r:.03,out:.006}));let t=new it(new li(.42,.3,4),xt("#C0392B"));return t.rotation.y=Math.PI/4,t.position.y=.55,n.add(t),n.add(ft(.1,.18,.01,"#7A5236",0,.09,.2)),n}function BE(){let n=new Y,t=J(.07,.05,.6,"#F4F1EA",0,0,0,{rot:[0,0,Math.PI/2],out:.005});return n.add(t),n.add(H(.12,.02,.7,"#2E6FB8",0,0,0,{r:.01})),n.add(H(.08,.2,.02,"#2E6FB8",-.27,.1,0,{r:.01})),n}function UE(n,t){return K(n,t,{bg:"#1E2648"},e=>{let i=Eo(e),s=rt(e,Oe,.4,-3,.2),r=[LE(),os("#E2443A"),BE()];r[1].scale.setScalar(.14),r.forEach(o=>e.add(o));let a=[237.56,238.38,238.87];return(o,l,c)=>{let h=lt(242,242.6,o);return r.forEach((u,d)=>{let f=lt(a[d],a[d]+.35,o)*(1-h),p=-1+d;u.position.set(.4+Math.sin(p)*.85,1.62+.08*Math.sin(o*2+d)+(d===2?.12:0),-2.9+Math.cos(p)*.2),u.scale.setScalar((d===1?.14:1)*Math.max(.001,f)),u.rotation.y=o*.8+d}),s.pose({...ut(o),shR:[h>.5?0:60,10],elR:h>.5?10:110,headY:h>0&&h<1?0:25*Math.sin((o-242)*9)*h*(1-lt(243,243.4,o))}),U(s,null,o,h>.5?"determinado":"feliz",{olhosAbertos:!0,look:[0,-.5*(1-h)]}),nt(c,[[0,[.9,1.5,.9]],[6.7,[.7,1.45,.1]]],[[0,[.4,1.3,-3]],[6.7,[.4,1.3,-3]]],l),{tint:"#E8E2FF"}}})}function NE(n,t){return K(n,t,{},e=>{Bi(e,{c1:"#2A1A1A",c2:"#4A2A2A"});let i=[];for(let l=0;l<=12;l++)i.push(new C(-7+l*1.2,1.4+1.4*Math.sin(l*1.3)+l%3*.5,0));let s=new gr(i),r=new it(new no(s,200,.12,8),xt("#E2443A"));e.add(r);for(let l of i)e.add(J(.03,.03,l.y,"#5A3A3A",l.x,l.y/2,0,{seg:6}));let a=H(.6,.3,.4,"#F2C230",0,0,0,{r:.08,out:.008});e.add(a);let o=jn("interrogacao",.7);return e.add(o),(l,c,h)=>{let u=c/5.1*.95,d=s.getPointAt(u),f=s.getTangentAt(u);return a.position.copy(d).add(new C(0,.22,0)),a.rotation.z=Math.atan2(f.y,f.x),o.position.set(d.x,d.y+1.1,0),nt(h,[[0,[-3,3,9]],[5.1,[3,3,8]]],[[0,[-2,1.8,0]],[5.1,[2,1.8,0]]],c),{sat:.9}}})}function OE(n,t){return K(n,t,{bg:"#1E2648"},e=>{Eo(e);let i=rt(e,Oe,.4,-3,.2);return(s,r,a)=>{let o=lt(.6,.8,r)*(1-lt(1.4,1.6,r));return i.pose({...ut(s),headZ:8}),U(i,null,s,"feliz",{olhosAbertos:!0,blink:0,mouth:{open:0,smile:.9}}),i.face({emo:"desconfiado",blink:0,look:[.1,0],mouth:{open:0,smile:.9}}),o>.5&&i.face({emo:"feliz",blink:0,look:[0,0],mouth:{open:.1,smile:1}}),nt(a,[[0,[.5,1.35,-.9]],[2.2,[.45,1.3,-1.3]]],[[0,[.4,1.2,-3]],[2.2,[.4,1.2,-3]]],r),{tint:"#E8E2FF"}}})}function zE(n,t){return K(n,t,{},e=>(hn(e,{ano:"2019"}).cal.paint("m",(r,a,o)=>{r.fillStyle="#FFFFFF",r.fillRect(0,0,a,o),r.fillStyle="#C0392B",r.fillRect(0,0,a,o*.18),pt(r,"MAR\xC7O 2019",a/2,o*.09,o*.09,"#FFFFFF"),["D","S","T","Q","Q","S","S"].forEach((u,d)=>pt(r,u,a*.09+d*a*.135,o*.25,o*.04,"#9A958A",800));for(let u=0;u<31;u++){let d=(u+5)%7,f=Math.floor((u+5)/7);pt(r,String(u+1),a*.09+d*a*.135,o*.33+f*o*.11,o*.05,u===13?"#C0392B":"#3A3A44",u===13?900:600)}let c=a*.09+4*a*.135,h=o*.33+2*o*.11;r.strokeStyle="#C0392B",r.lineWidth=8,r.beginPath(),r.ellipse(c,h,a*.07,o*.045,-.2,0,7),r.stroke()}),(r,a,o)=>(nt(o,[[0,[0,1.7,-3.9]],[6,[.15,1.74,-5.45]]],[[0,[.2,1.72,-6.38]],[6,[.2,1.74,-6.38]]],a,0,.5),{})))}function So(n){let t=An(n,{ano:"2018"}),e=rt(n,P0,0,0);ae(e,1.15,-3.6,-Math.PI/2,.48);let i=rt(n,bn,0,0);ae(i,.2,-4.55,0,.48);let s=rt(n,Oe,0,0);ae(s,-.75,-3.6,Math.PI/2,.48);for(let a=0;a<3;a++){let o=Ja();o.position.set([.7,.2,-.3][a],.8,[-3.6,-4.05,-3.6][a]),n.add(o)}let r=J(.22,.2,.09,"#F4F1EA",.2,.84,-3.45,{out:.004});return n.add(r),n.add(de(.16,"#C98A4A",.2,.9,-3.45,{seg:12})),n.add(J(.12,.1,.12,"#E8E2D6",-.1,.86,-3.2,{out:.004})),{K:t,M:e,R:i,G:s}}var X0=(n,t=0)=>Et({shR:[55+10*Math.sin(n*3+t),10],elR:100+20*Math.sin(n*3+t),shL:[40,10],elL:70,headX:10});function kE(n,t){return K(n,t,{},e=>{let{K:i,M:s,R:r,G:a}=So(e);return(o,l,c)=>(s.pose(X0(o)),U(s,null,o,l>3.5?"tedio":"feliz"),r.pose(X0(o,2)),U(r,null,o,"neutro",{look:[-.3,0]}),a.pose(Ce("gui",o,Et({shR:[50,10],elR:60}),1)),U(a,null,o,"preocupado",{mouth:{open:.3*Math.abs(Math.sin(o*6))},look:[.5,0]}),nt(c,[[0,[-1.6,2.6,.6]],[7.6,[-.4,2,-.6]]],[[0,[.2,.9,-3.6]],[7.6,[.25,1,-3.6]]],l),{})})}function HE(n,t){return K(n,t,{},e=>{let{K:i,M:s,R:r,G:a}=So(e);return(o,l,c)=>(s.pose(X0(o)),U(s,null,o,"tedio",{look:[-.5,0]}),r.pose(Et({})),U(r,null,o,"preocupado",{look:[-.4,0]}),a.pose(Ce("gui",o,Et({shR:[50,10],elR:60}),1.2)),U(a,"gui",o,"preocupado",{look:[.6,0]}),nt(c,[[0,[.5,1.35,-2.7]],[4,[.35,1.32,-2.85]]],[[0,[-.75,1.15,-3.6]],[4,[-.75,1.15,-3.6]]],l),{})})}function GE(n,t){return K(n,t,{},e=>{let{K:i,M:s,R:r,G:a}=So(e);return(o,l,c)=>{let h=lt(1.6,2.2,l)*(1-lt(3.6,4.2,l));return s.pose(Ce("marcos",o,Et({shR:[At(30,90,h),At(10,80,h)],elR:At(60,130,h),headY:10}),.7)),U(s,"marcos",o,h>.5?"determinado":"bravo",{look:[-.5,0]}),r.pose(Et({})),U(r,null,o,"preocupado"),a.pose(Et({})),U(a,null,o,"triste",{look:[.6,0]}),nt(c,[[0,[-.1,1.4,-2.8]],[5,[.05,1.38,-2.9]]],[[0,[1.15,1.25,-3.6]],[5,[1.15,1.25,-3.6]]],l),{}}})}function VE(n,t){return K(n,t,{},e=>{let{K:i,M:s,R:r,G:a}=So(e);return(o,l,c)=>(s.pose(Et({shL:[55,-10],shR:[55,-10],elL:110,elR:110})),U(s,null,o,"bravo"),r.pose(Et({})),U(r,null,o,"preocupado"),a.pose(Ce("gui",o,Et({shR:[60,10],elR:40,shL:[60,10],elL:40}),.6)),U(a,"gui",o,"triste",{look:[.6,0],lagrima:l>.9}),nt(c,[[0,[.45,1.3,-2.95]],[1.75,[.3,1.28,-3.05]]],[[0,[-.75,1.15,-3.6]],[1.75,[-.75,1.15,-3.6]]],l),{})})}function WE(n,t){return K(n,t,{},e=>{let{K:i,M:s,R:r,G:a}=So(e);s.root.visible=!1;let o=rt(e,P0,1.6,-3.6,-Math.PI/2);return(l,c,h)=>{let u=lt(0,.5,c);return o.root.position.x=At(1.15,1.55,u),o.pose(zn(Et({}),Ce("marcos",l,{...ut(l),shR:[70,10],elR:20,lean:8},1.3),u)),o.root.position.y=At(.2,0,u),o.sombra.visible=u>.95,U(o,"marcos",l,"bravo",{look:[-.4,-.2]}),r.pose(Et({})),U(r,null,l,"medo"),a.pose(Et({headX:-10})),U(a,null,l,"triste",{look:[.6,-.4]}),Kn(h,[[0,[-1.3,1.1,-2.2]],[3.3,[-1.1,1.15,-2.5]]],[[0,[1.5,1.45,-3.6]],[3.3,[1.5,1.5,-3.6]]],c,c<.6?.01:0,l),{}}})}function XE(n,t){return K(n,t,{bg:"#1E2648"},e=>{let i=hn(e,{noite:!0,ano:"2018"}),s=rt(e,Oe,0,0);return ae(s,-2.42,-4.9,Math.PI/2,.62),(r,a,o)=>(s.pose(Et({shL:[40,10],elL:100,shR:[40,10],elR:100,lean:15,headX:5})),U(s,null,r,a<4?"triste":"determinado",{look:[0,.1]}),nt(o,[[0,[1.2,2,-2]],[8.7,[-1,1.25,-4.4]]],[[0,[-2.42,1,-4.9]],[8.7,[-2.42,1.15,-4.9]]],a),{tint:"#E6EAFF",vig:.35,exposure:1.35})})}var xd=[[gE,179.07,184],[yE,184,186.45],[_E,186.45,191],[ME,191,194.2],[SE,194.2,197.55],[bE,197.55,200.5],[AE,200.5,202.37],[xE,202.37,206.1],[TE,206.1,209.2],[wE,209.2,215.5],[RE,215.5,220.6],[CE,220.6,223.25],[FE,223.25,230.1],[PE,230.1,232.25],[IE,232.25,234.1],[DE,234.1,236.7],[UE,236.7,243.45],[NE,243.45,248.6],[OE,248.6,250.8],[zE,250.8,256.8],[kE,256.8,264.4],[HE,264.4,268.4],[GE,268.4,273.45],[VE,273.45,275.2],[WE,275.2,278.5],[XE,278.5,287.19]];function qE(n,t){return K(n,t,{},e=>{let i=An(e,{ano:"2019",alvorada:!0});return(s,r,a)=>(i.rel.set(6,30,r*8),nt(a,[[0,[.4,2.1,-4.6]],[2.75,[.4,2.35,-5.9]]],[[0,[.4,2.45,-6.88]],[2.75,[.4,2.45,-6.88]]],r,0,.4),{tint:"#FFE8D8"})})}function YE(n,t){return K(n,t,{bg:"#1E2648"},e=>{let i=hn(e,{ano:"2019"}),s=rt(e,Oe,0,0);ae(s,-2.42,-4.9,Math.PI/2,.62);let r=i.desp;return(a,o,l)=>(s.pose(Et({shL:[40,10],elL:100,shR:[40,10],elR:100,lean:15,headX:12})),U(s,null,a,o<4?"preocupado":"determinado",{look:[-.6,-.4]}),nt(l,[[0,[0,1.6,-3.4]],[4.5,[-.5,1.4,-3.9]],[9.9,[-1,1.25,-4.4]]],[[0,[-2.42,1,-4.9]],[4.5,[-2.42,1.05,-4.9]],[9.9,[-2.42,1.1,-4.9]]],o),{tint:"#FFE0D0"})})}function ZE(n,t){return K(n,t,{},e=>{let i=An(e,{ano:"2019",alvorada:!0}),s=rt(e,en,0,0);ae(s,1.15,-3.6,-Math.PI/2+.25,.48);let r=rt(e,Oe,-4.6,-3,1);return(a,o,l)=>{let c=lt(.3,5.4,o);return r.root.position.set(At(-4.8,-1.7,c),0,At(-3.2,-2.6,c)),r.root.rotation.y=1.35,r.pose(zn(Jn(a,1.2,.55),{shR:[55,-25],elR:100,lean:12},.55)),U(r,null,a,"determinado"),s.pose(Et({shR:[60,10],elR:110,headY:-20*lt(4.5,5.6,o)})),U(s,null,a,"neutro",{look:[-.5*lt(4.5,5.6,o),0]}),nt(l,[[0,[-1.6,1.6,.2]],[5.9,[-.6,1.4,-.6]]],[[0,[-4.4,1,-3]],[5.9,[-1.6,1.1,-2.7]]],o),{tint:"#FFE8D8"}}})}function $E(n,t){return K(n,t,{},e=>{let i=An(e,{ano:"2019",alvorada:!0}),s=rt(e,en,0,0);ae(s,1.15,-3.6,-Math.PI/2+.25,.48);let r=rt(e,Oe,-.9,-2.2,2.17);return(a,o,l)=>(r.pose(Ce("gui",a,{shR:[55,-25],elR:100,lean:22,knL:15,knR:15,bob:-.03},.3)),U(r,"gui",a,"preocupado",{look:[.6,-.3]}),s.pose(Et({shR:[30,10],elR:60,headY:-25})),U(s,null,a,o<1.2?"surpreso":"medo",{look:[-.6,0]}),nt(l,[[0,[0,1.45,-.1]],[3.5,[.1,1.4,-.4]]],[[0,[.1,1,-2.9]],[3.5,[.1,1,-2.9]]],o),{tint:"#FFE8D8"})})}function JE(n,t){return K(n,t,{},e=>{let i=An(e,{ano:"2019",alvorada:!0}),s=rt(e,en,.9,-2.9,-1.8),r=rt(e,Oe,-.9,-2.2,2.17),a=rt(e,bn,0,0),o=new Y;return o.add(de(.03,"#C8CCD2")),o.add(ft(.02,.08,.01,"#C8CCD2",0,-.05,0)),a.hands.R.add(o),o.position.set(0,-.07,.03),(l,c,h)=>{s.pose(Ce("marcos",l,{...ut(l),shR:[90,30],elR:20,shL:[70,-10],elL:40,lean:10},1.4)),U(s,"marcos",l,"medo",{look:[-.4,0]}),r.pose({shR:[55,-25],elR:100,lean:22,knL:15,knR:15,bob:-.03}),U(r,null,l,"preocupado");let u=lt(1,3.8,c);return a.root.position.set(At(-4.6,-1.6,u),0,At(-5.5,-3.6,u)),a.root.rotation.y=2.2,a.pose(u<1?On(l,2.6,.9):{...ut(l),shR:[100,10],elR:20}),U(a,null,l,"medo"),Kn(h,[[0,[2.6,1.7,-.4]],[4.3,[2.3,1.6,-.8]]],[[0,[.2,1.2,-3]],[4.3,[-.4,1.2,-3]]],c,.008,l),{tint:"#FFE8D8"}}})}function Td(n,t={}){ls(n,{hora:"manha",seed:44,faixa:-40,...t});let e=os("#2E6FB8",{out:!0});e.rotation.y=Math.PI,n.add(e);let i=rt(n,en,0,0);i.root.scale.multiplyScalar(.9),i.root.position.set(-.38,.25,.1),i.root.rotation.y=Math.PI,i.sombra.visible=!1,e.userData.body.add(i.root),i.root.position.set(-.38,.25,-.1),i.root.rotation.y=0;let s=[];for(let r=0;r<6;r++){let a=os(["#F4F1EA","#E2443A","#3A3A44","#F2C230","#8FD3C1","#E8A0B8"][r]);a.rotation.y=r%2?0:Math.PI,n.add(a),s.push({k:a,x:r%2?3.4:-5.6,z0:-20-r*22,v:r%2?-6:4})}return{K:e,M:i,outros:s}}function wd(n,t,e,i=18){let s=6-i*e;return n.K.position.set(-2.4+.4*Math.sin(e*2.3),0,s),n.K.rotation.y=Math.PI+.06*Math.sin(e*2.3),n.K.userData.rodas.forEach(r=>r.rotation.x=-e*i/.36),n.outros.forEach(({k:r,x:a,z0:o,v:l})=>{r.position.set(a,0,o+(l<0,-l*e*(l<0,1)))}),n.M.pose(Et({shL:[70,10],elL:30,shR:[70,10],elR:30,lean:10})),U(n.M,null,t,"medo"),s}function QE(n,t){return K(n,t,{},e=>{let i=Td(e);return(s,r,a)=>{let o=wd(i,s,r);return nt(a,[[0,[3.6,1.4,o-9]],[2.6,[2.4,1,o-6]]],[[0,[-2.4,.9,o]],[2.6,[-2.4,.9,o]]],r),{}}})}function KE(n,t){return K(n,t,{},e=>{let i=Td(e),s=[];e.traverse(o=>{o.userData&&o.userData.luzes&&s.push(o)});let r=os("#F2C230");r.rotation.y=Math.PI/2,e.add(r);let a=jn("exclamacao",.9);return e.add(a),(o,l,c)=>{let h=wd(i,o,l+1.6,20);return r.position.set(At(-14,-6.5,lt(0,1,l)),0,-40),a.position.set(-6.5,2.4,-40),a.visible=l>.5&&l<1.3&&Math.floor(o*8)%2===0,Kn(c,[[0,[6,3.2,-46]],[1.4,[5,2.6,-44]]],[[0,[-2.4,1,-38]],[1.4,[-3,1,-40]]],l,.02,o),{}}})}function jE(){let n=new Y;n.add(H(18,9,8,"#E8EEF2",0,4.5,0,{r:.1}));for(let i=0;i<2;i++)for(let s=0;s<9;s++){let r=ft(1.3,1.1,.1,"#8FC4E0",-7.6+s*1.9,4.6+i*2.4,4.02);n.add(r)}let t=kn(7,1.1,(i,s,r)=>{i.fillStyle="#FFFFFF",i.fillRect(0,0,s,r),pt(i,"\u271A HOSPITAL SANTA LUZIA",s/2,r/2,r*.5,"#C0392B")});t.position.set(0,8.2,4.06),n.add(t);let e=kn(4,.8,(i,s,r)=>{i.fillStyle="#C0392B",i.fillRect(0,0,s,r),pt(i,"PRONTO-SOCORRO",s/2,r/2,r*.5,"#FFFFFF")});e.position.set(0,3.3,5.6),n.add(e),n.add(ft(8,.2,3,"#C8CCD2",0,3,5.4));for(let i of[-1,1])n.add(J(.12,.12,3,"#C8CCD2",i*3.6,1.5,6.6));return n.add(H(3,2.6,.1,"#9FC3D4",0,1.3,4.05,{r:.02})),n}function tv(n,t){return K(n,t,{},e=>{let i=Fr.manha;rs(e,i.topo,i.base,{n:6});let s=new ji(i.sky,i.ground,1.35);e.add(s);let r=new ts(i.key,2.1);r.position.set(20,30,30),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-20,right:20,top:20,bottom:-20,far:100}),e.add(r);let a=new it(new Ot(160,160),xt("#C9C2B6"));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,e.add(a);let o=jE();o.position.set(0,0,-14),e.add(o);let l=new it(new Ot(160,9),xt("#55575E"));l.rotation.x=-Math.PI/2,l.position.set(0,.01,6),l.receiveShadow=!0,e.add(l);for(let g=0;g<16;g++)e.add(ft(2,.02,.2,"#F4F1EA",-40+g*5.5,.02,6));let c=["#E8DCC8","#D9C9B0","#C8D2D6","#E6CDB8"];[[-19,-16,12,16],[-31,-18,10,24],[19,-16,12,20],[31,-19,10,13],[-14,-34,14,30],[14,-34,14,26]].forEach(([g,m,S,v],y)=>{let T=po({w:S,d:12,h:v,tipo:y%2?"vidro":"janelas",cor:c[y%4],v1:"#A8D2EE",v2:"#6FA6D2",vj:"#8DB8D8",seed:90+y,corTerreo:"#4A4E58"});T.position.set(g,0,m),e.add(T)});for(let g=0;g<7;g++)Rr(e,-12+g*4+(g>2?4:0),-6.5,.75,g+4);for(let g of[-9,9]){let m=H(.12,2.6,.12,"#5A6068",g,1.3,-7.5);e.add(m)}let h=os("#F4F6F8",{out:!0});h.position.set(6.5,0,-8.6),h.rotation.y=-1.2,e.add(h);let u=ft(1.2,.12,.3,"#C0392B",0,1.75,0);h.add(u);let d=os("#2E6FB8",{out:!0});d.position.set(-4.2,0,4.5),d.rotation.y=.35,e.add(d);let f=rt(e,en,0,0),p=rt(e,Oe,0,0);p.sombra.visible=!1;let E=new Y;return f.root.add(E),E.position.set(0,.66,.36),E.add(p.root),p.root.position.set(-.5,0,0),p.root.setRotationFromMatrix(new ue().makeBasis(new C(0,0,1),new C(1,0,0),new C(0,1,0))),(g,m,S)=>{let v=lt(.1,3.9,m),y=At(-2.2,-.2,v),T=At(3.5,-8.4,v);return f.root.position.set(y,0,T),f.root.rotation.y=Math.atan2(2,-11.9),f.pose({...On(g,2.6,.8),shL:[80,8],elL:35,shR:[80,-8],elR:35}),U(f,null,g,"medo"),p.pose({shR:[20,10],elR:40,shL:[10,5],elL:20,hipL:[55,0],hipR:[50,0],knL:95,knR:90,headX:10}),U(p,null,g,"preocupado",{olhosAbertos:.5}),nt(S,[[0,[1.4,2.4,9]],[4,[1.3,2.3,-.8]]],[[0,[-1.4,1.4,1]],[4,[-.1,1.6,-9.6]]],m),{}}})}function ev(n,t){return K(n,t,{},e=>{Mr(e,{r:8,pos:[4,8,5],target:[-.6,0,-3.6],ki:1.6,hemi:1.45,sky:"#F2FAFF",key:"#FFF6EA"});let i=U0(e),s=rt(e,Oe,0,0);s.root.position.set(-.6,.62,-3.8),s.root.rotation.y=Math.PI/2,s.sombra.visible=!1;let r=rt(e,fo,.3,-3.2,-1.7),a=new Y;a.add(J(.04,.04,.02,"#C8CCD2",0,0,0,{rot:[Math.PI/2,0,0]})),r.hands.R.add(a),a.position.set(0,-.07,.04);let o=ao(i.tela,{bpm:72}),l=rt(e,en,-1.9,-1.8,.4);return(c,h,u)=>(o(c),s.pose(Et({shR:[10,10],shL:[10,10],hipL:[85,0],hipR:[85,0],knL:80,knR:80})),U(s,null,c,"vergonha",{look:[.4,0]}),r.pose({...ut(c),shR:[80,-20],elR:30,lean:10}),U(r,null,c,h>2.4?"feliz":"neutro",{look:[-.5,0]}),l.pose({...ut(c),shL:[55,-10],shR:[55,-10],elL:110,elR:110}),U(l,null,c,"preocupado",{look:[.4,0]}),nt(u,[[0,[1.8,1.6,-.4]],[3.7,[1.2,1.45,-1.2]]],[[0,[-.6,1,-3.6]],[3.7,[-.4,1.05,-3.6]]],h),{})})}function Rd(n){let t=Pr(n),e=rt(n,en,0,0);ae(e,-3.48,-2,0,.5);let i=[];for(let[s,r]of[[-4.6,-2],[-2.36,-2],[-4.04,-4],[-2.92,-4]]){let a=Pi(i.length+3,{simples:!0});ae(a,s,r+0,0,.5),n.add(a.root),i.push(a)}return{P:t,M:e,g:i}}function nv(n,t){return K(n,t,{},e=>{let{P:i,M:s,g:r}=Rd(e);return i.luzT.paint("off",(a,o,l)=>{a.fillStyle="#3A2222",a.fillRect(0,0,o,l)}),(a,o,l)=>{let c=lt(3,3.6,o),h=lt(5.3,5.9,o);return s.pose(zn(Et({shL:[20,10],elL:30,shR:[20,10],elR:30}),Et({shR:[55,-30],elR:115,shL:[30,30],elL:30,lean:25+40*h,headX:20}),c)),s.root.rotation.z=-h*.9,s.root.position.y=.5-.28*1.07-h*.25,s.root.position.x=-3.48+h*.4,U(s,null,a,c>.5?"medo":"neutro",{look:[.2,0],mouth:c>.5?{open:.5,round:.6}:void 0}),r.forEach((u,d)=>{u.pose(Et({headY:h>.2?40:0})),U(u,null,a,h>.2?"medo":"tedio")}),Kn(l,[[0,[-1.2,1.5,.8]],[3,[-2,1.3,-.2]],[6.2,[-2.6,1.15,-.8]]],[[0,[-3.4,1,-2]],[6.2,[-3.4,.95,-2]]],o,h>0&&h<1?.015:0,a),{}}})}function iv(n,t){return K(n,t,{},e=>{let{P:i,M:s,g:r}=Rd(e);s.root.visible=!1;let a=rd();e.add(a);let o=rt(e,en,0,0);F0(o,0,.9,0),a.add(o.root),o.root.position.set(0,.93,.55);let l=[rt(e,D0,0,0),rt(e,fo,0,0),rt(e,{...D0,camisa:"#4FA3B8",calca:"#4FA3B8",pele:"#E3B28E",cabelo:"rabo",corCabelo:"#5A3020",cilios:!0},0,0)];return(c,h,u)=>{let d=lt(0,4.6,h);return a.position.set(At(-3,3,d),0,At(-1.4,-6.6,d)),a.rotation.y=Math.atan2(6,-5.2),l.forEach((f,p)=>{let E=[[-.6,.4],[.6,.2],[0,1.4]][p];f.root.position.set(a.position.x+E[0],0,a.position.z+E[1]),f.root.rotation.y=a.rotation.y,f.pose(On(c,2.6,.8,p*.3)),U(f,null,c,"determinado")}),o.pose({}),U(o,null,c,"sono",{blink:1}),r.forEach((f,p)=>{f.pose(Et({headY:30})),U(f,null,c,"medo")}),nt(u,[[0,[3.6,1.8,1.4]],[4.8,[4.8,1.7,-1.6]]],[[0,[-1.4,.9,-2.2]],[4.8,[2.4,.9,-6]]],h),{}}})}function sv(n,t){return K(n,t,{},e=>{let i=Pr(e),s=rt(e,Oe,3.4,-4.6,Math.PI);return i.luzT.paint("on",(r,a,o)=>{r.fillStyle="#FF3A2A",r.fillRect(0,0,a,o),pt(r,"EM CIRURGIA",a/2,o/2+2,o*.6,"#FFFFFF")}),(r,a,o)=>{let l=lt(.2,1.6,a);return i.portas.forEach((c,h)=>{c.rotation.y=(h?1:-1)*1.4*(1-l)}),i.luz.visible=l>.9,i.luzT.visible=l>.9,s.pose({...ut(r),shL:[5,6],shR:[5,6]}),U(s,null,r,"choro"),nt(o,[[0,[3.4,1.6,-1]],[5.2,[3.4,1.5,-2.4]]],[[0,[3.4,1.6,-7.8]],[5.2,[3.4,1.4,-7.8]]],a),{}}})}function rv(n,t){return K(n,t,{},e=>{let i=Pr(e),s=rt(e,Oe,0,0);ae(s,1.5,-6,0,.5);let r=new Y;r.add(H(.5,.08,.48,"#2E7FB8",0,.46,0,{r:.03})),r.position.set(1.5,0,-6),e.add(r);let a=rt(e,fo,3.4,-7.4,0);return(o,l,c)=>{let h=9+l*1;i.rel.set(h,l*60%60);let u=lt(1.6,3.2,l);return i.portas.forEach((d,f)=>d.rotation.y=(f?1:-1)*1.3*u*(1-lt(3,3.3,l))),a.root.position.z=At(-7.5,-6.6,u),a.root.visible=u>.15,a.pose(u<1?Jn(o,1.4,.8):ut(o)),U(a,null,o,"neutro"),s.pose(Et({shL:[40,10],elL:100,shR:[40,10],elR:100,lean:20,headX:l>1.6?-10:20})),s.root.rotation.y=l>1.8?.9:0,U(s,null,o,l>1.6?"surpreso":"triste"),nt(c,[[0,[1.1,1.35,-3.5]],[1.6,[1.2,1.4,-3.7]],[3.2,[.3,1.5,-4.1]]],[[0,[1.5,1,-6]],[1.6,[1.7,1.05,-6.3]],[3.2,[2.9,1.3,-6.9]]],l),{}}})}function ov(n,t){return K(n,t,{},e=>{let i=Pr(e),s=rt(e,fo,3.4,-6.2,.4),r=rt(e,Oe,2.6,-4.9,2.6),a=rt(e,bn,3.6,-4.6,-2.9);return(o,l,c)=>{s.pose(Ce("n",o,{...ut(o),shR:[40+15*Math.sin(o*2),20],elR:60},.2)),U(s,null,o,"feliz",{mouth:l<6?{open:.25+.25*Math.abs(Math.sin(o*6)),smile:.4}:void 0});let h=lt(.2,.8,l);return a.pose({...ut(o),shL:[120*h,-20],shR:[120*h,-20],elL:120,elR:120,headX:10}),U(a,null,o,"choro",{smile:.6}),r.pose({...ut(o),shR:[50*h,30],elR:40}),U(r,null,o,"choro",{smile:.5}),nt(c,[[0,[1.3,1.6,-7.3]],[7.1,[1.8,1.5,-7]]],[[0,[3.1,1.3,-4.8]],[7.1,[3.1,1.3,-4.8]]],l),{}}})}function Cd(n){let t=Pr(n),e=rt(n,Oe,0,0);return ae(e,-2.36,-2,0,.5),{P:t,G:e}}function av(n,t){return K(n,t,{},e=>{let{P:i,G:s}=Cd(e),r=Li();r.scale.setScalar(1.1),e.add(r);let a=Sn(e,[-2.36,1.9,-1.6],{cor:"#FFE6A0",size:2,n:40,alt:1.2});return r.userData.E.paint("e",(o,l,c)=>cn(o,l,c,()=>{ge(o,"A LISTA",l*.5,c*.08,60,"#B8322B","center"),ge(o,"1. Comprar bitcoin",l*.16,c*.2,46),ge(o,"2. N\xE3o contar pra ningu\xE9m",l*.16,c*.32,42)})),r.userData.D.paint("d",(o,l,c)=>{cn(o,l,c),o.fillStyle="#E8E2D0",o.fillRect(0,c*.38,l,c*.62)}),r.traverse(o=>{o.material&&(o.material=o.material.clone(),o.material.transparent=!0)}),(o,l,c)=>{let h=lt(1.2,3.2,l);return r.position.set(-2.36,1.95+.05*Math.sin(o*2),-1.3),r.rotation.set(1.15+.12*Math.sin(o),0,0),r.traverse(u=>{u.material&&(u.material.opacity=h*.82)}),a(l,h),s.pose(Et({shL:[40,10],elL:100,shR:[40,10],elR:100,lean:12,headX:-14})),U(s,null,o,"triste",{look:[0,-.6]}),nt(c,[[0,[-1.2,1.45,.9]],[5.6,[-1.8,1.5,.5]]],[[0,[-2.36,1.6,-1.7]],[5.6,[-2.36,1.62,-1.6]]],l),{bloom:.25,bloomT:.85}}})}function lv(n,t){return K(n,t,{},e=>{let{P:i,G:s}=Cd(e),r=Li();r.scale.setScalar(1.6),r.position.set(-2.36,1.75,-1.3),r.rotation.set(1,0,0),e.add(r);let a=Sn(e,[-2.36,1.9,-1.4],{cor:"#FFE6A0",size:2.5,n:40,alt:1.2});return r.userData.E.paint("e",(o,l,c)=>cn(o,l,c,()=>{ge(o,"A LISTA",l*.5,c*.08,60,"#B8322B","center"),ge(o,"1. Comprar bitcoin",l*.16,c*.2,46),ge(o,"2. N\xE3o contar pra ningu\xE9m",l*.16,c*.32,42)})),(o,l,c)=>{let h=1-lt(0,.8,l);return r.userData.D.paint("d"+Math.round(h*10),(u,d,f)=>cn(u,d,f,()=>{ge(u,"3. Salvar o meu pai",d*.12,f*.46,54,"#B8322B"),ge(u,"14/03/2019",d*.2,f*.58,50,"#B8322B"),h>0&&(u.fillStyle="#E8E2D0",u.fillRect(0,f*(1-.62*h),d,f*.62*h))})),a(l,.8),r.position.y=1.75+.03*Math.sin(o*2),nt(c,[[0,[-2.1,2.05,-.75]],[4.6,[-2.25,2,-.95]]],[[0,[-2.2,1.72,-1.35]],[4.6,[-2.25,1.72,-1.35]]],l),{bloom:.4,bloomT:.78}}})}function cv(n,t){return K(n,t,{},e=>{Mr(e,{r:8,pos:[4,8,5],target:[-.6,0,-3.6],ki:1.5,hemi:1.4,sky:"#F2FAFF",key:"#FFE6C8"});let i=U0(e),s=rt(e,en,0,0);F0(s,-.6,.78,-2.7);let r=ao(i.tela,{bpm:64}),a=rt(e,Oe,.7,-2.4,-2.43),o=lo("#FFB43A",1.2,0,!0);return o.position.set(.6,2,-2.4),e.add(o),(l,c,h)=>(r(l),s.pose({shL:[10,10],shR:[10,10]}),U(s,null,l,"sono",{blink:1}),a.pose({...ut(l),shR:[30,10],elR:20}),U(a,null,l,"feliz",{lagrima:!0,look:[-.6,.3]}),o.material.opacity=.6*(1-lt(1,2.2,c)),nt(h,[[0,[2.3,2.75,-4.9]],[6.2,[2,2.6,-4.7]]],[[0,[-.5,.95,-3.6]],[6.2,[-.5,.95,-3.55]]],c),{})})}var Fd=[[qE,287.19,289.94],[YE,289.94,299.84],[ZE,299.84,305.7],[$E,305.7,309.2],[JE,309.2,313.47],[QE,313.47,316.07],[KE,316.07,317.45],[tv,317.45,321.5],[ev,321.5,325.2],[nv,325.2,331.4],[iv,331.4,336.2],[sv,336.2,341.4],[rv,341.4,344.75],[ov,344.75,351.85],[av,351.85,357.45],[lv,357.45,362.1],[cv,362.1,368.31]];function hv(n,t){return K(n,t,{},e=>{let i=An(e,{ano:"2019"}),s=rt(e,bn,0,-3,0),r=ad();s.hands.R.add(r),r.position.set(0,-.05,.05),r.rotation.x=-.4;let a=od();a.position.set(1.4,0,-2.2),e.add(a);let o=[];for(let c=0;c<3;c++){let h=jn("notas",.3);e.add(h),o.push(h)}let l=Gu(e,[[0,.1,-3]],{n:14,sp:1.5,size:.8,life:2,op:.4,cor:"#E8DCC8"});return(c,h,u)=>{let d=Math.sin(h*1.3)*1.6;return s.root.position.set(d,0,-3+Math.cos(h*1.1)*.6),s.root.rotation.y=Math.cos(h*1.3)>0?1.2:-1.2,s.pose({...Jn(c,1.8,.6),shR:[60+20*Math.sin(c*8),20],elR:40,shL:[40,-10],elL:60,lean:15}),U(s,null,c,"preocupado",{mouth:{open:.2+.2*Math.sin(c*5)}}),r.rotation.z=.4*Math.sin(c*8),l(h*.8%2),o.forEach((f,p)=>{let E=(h*.4+p/3)%1;f.position.set(s.root.position.x+.2,1.6+E,s.root.position.z),f.material.opacity=Math.sin(E*Math.PI)}),nt(u,[[0,[-1.5,2.2,2]],[7.4,[1,1.8,1]]],[[0,[0,1,-3]],[7.4,[0,1,-3]]],h),{}}})}function Pd(n){let t=hn(n,{ano:"2019"}),e=rt(n,bn,2.65,-3,Math.PI/2-.2),i=Di("#26262C",2);i.position.set(2.7,0,-2.2),i.scale.set(.9,1.1,.9),n.add(i);let s=[];for(let r=0;r<6;r++){let a=ci({cor:["#2E6FB8","#2E9C5A","#C0392B","#8E5BB8","#F2C230","#3A3A44"][r]});n.add(a),s.push(a)}return{Q:t,R:e,S:i,pilha:s}}function uv(n,t){return K(n,t,{},e=>{let{Q:i,R:s,S:r,pilha:a}=Pd(e);return(o,l,c)=>(a.forEach((h,u)=>{let d=Xe((l-.4-u*.7)/.6,0,1);h.position.set(At(3.55,2.7,d),At(.6+u*.03,.55-u*.02,d)+Math.sin(d*Math.PI)*.3,At(-3.6,-2.2,d)),h.rotation.set(d*2,u,0),h.visible=d<.98}),s.pose({...ut(o),shR:[70+30*Math.sin(o*3),10],elR:40,shL:[60,10],elL:50,lean:12}),U(s,null,o,"determinado"),nt(c,[[0,[3.5,1.55,-1.3]],[6.5,[3.6,1.45,-1.6]]],[[0,[2.75,1,-2.8]],[6.5,[2.75,.95,-2.7]]],l),{})})}function dv(n,t){return K(n,t,{},e=>{let{Q:i,R:s,S:r,pilha:a}=Pd(e);a.forEach(l=>l.visible=!1),i.cadLista.visible=!1;let o=ci();return e.add(o),(l,c,h)=>{let u=lt(.4,2.6,c);return o.position.set(At(2.95,2.7,u),At(1.2,.75,u),At(-2.6,-2.2,u)),o.rotation.set(-.6-u*.8,.3,.2),o.visible=u<.97,r.scale.set(.9,1.1-.1*lt(2.8,3.4,c),.9),s.pose({...ut(l),shR:[90-40*u,10],elR:30,lean:10}),U(s,null,l,"neutro",{look:[-.3,.4]}),nt(h,[[0,[1.3,1.7,-.4]],[4.5,[1.5,1.55,-.7]]],[[0,[2.75,.95,-2.6]],[4.5,[2.7,.75,-2.3]]],c),{}}})}function Id(n){ls(n,{hora:"alvorada",seed:12,cruz:-78});let t=Ya();n.add(t);let e=rt(n,ho,-3,0,Math.PI);return{T:t,G:e}}function Dd(n,t){let e=9+6.2*(t-386.78),i=-3.2,s=-e,r=Math.PI;if(e>74){let a=Math.min(Math.PI/2,(e-74)/6);i=-3.2+6*(1-Math.cos(a)),s=-74-6*Math.sin(a),r=Math.PI-a,e>74+6*Math.PI/2&&(i+=e-74-6*Math.PI/2)}return n.position.set(i,0,s),n.rotation.y=r,Za(n,e),n.userData.gf.material.color.set(Math.floor(t*4)%2?"#FFB020":"#7A5A10"),{x:i,z:s}}function fv(n,t){return K(n,t,{},e=>{let{T:i,G:s}=Id(e);return(r,a,o)=>{Dd(i,r);let l=2-5.6*(r-386.78);return s.root.position.set(-3,0,l),s.pose(On(r,2.6,1)),U(s,null,r,"determinado"),nt(o,[[0,[-6.5,1.2,l-6]],[3.1,[-6,1.3,l-4]]],[[0,[-3,1.2,l]],[3.1,[-3,1.2,l]]],a),{bloom:.3}}})}function pv(n,t){return K(n,t,{},e=>{let{T:i,G:s}=Id(e);return(r,a,o)=>{let l=Dd(i,r+2.5),c=lt(4.5,6.2,a),h=2-5.6*3.1-5.6*(a-lt(4.5,6.2,a)*(a-4.5)*.7);return s.root.position.set(-3,0,h),s.pose(zn(On(r,2.6,1),{...ut(r),shR:[170,20+25*Math.sin(r*9)],elR:20,shL:[120,-10],elL:60},c*.7+.3*Math.max(0,Math.sin(r*2)))),U(s,null,r,"medo",{mouth:{open:.6+.3*Math.sin(r*9),round:.4}}),nt(o,[[0,[-1.2,2.1,h+7]],[6.3,[-1.6,2,h+6]]],[[0,[-3,1.2,h-20]],[6.3,[-1,1.2,-78]]],a),{bloom:.3}}})}function mv(n,t){return K(n,t,{},e=>{let i=pd(e);return(s,r,a)=>(i.braco.rotation.x=-.35+.25*Math.sin(s*.8),nt(a,[[0,[8,6,10]],[9.2,[-4,5,7]]],[[0,[0,1,-16]],[9.2,[-4,1.4,-16]]],r),{sat:.85})})}function Ld(n){return ls(n,{hora:"alvorada",seed:12,cruz:-78}),{G:rt(n,ho,-3,-20,Math.PI)}}function gv(n,t){return K(n,t,{},e=>{let{G:i}=Ld(e);return(s,r,a)=>{let o=lt(3,3.4,r);return i.pose(zn({...ut(s),lean:30,shL:[30,10],shR:[30,10],elL:30,elR:30,knL:25,knR:25,bob:-.05+.02*Math.sin(s*7)},{...ut(s),lean:-10+6*Math.sin(s*9),shL:[40,30],shR:[40,30],headX:-15},o)),i.root.rotation.y=Math.PI-2.6*lt(.6,2,r),U(i,null,s,o>.5?"rindo":"preocupado",{mouth:o>.5?{open:.6+.3*Math.sin(s*12)}:{open:.4+.2*Math.sin(s*7),round:.6}}),nt(a,[[0,[-2,1.4,-17.4]],[4.3,[-2.3,1.35,-18.2]]],[[0,[-3,1.1,-20]],[4.3,[-3,1.15,-20]]],r),{}}})}function yv(n,t){return K(n,t,{},e=>{let{G:i}=Ld(e);return i.root.rotation.y=Math.PI-2.6,(s,r,a)=>(i.pose({...ut(s),lean:-10+6*Math.sin(s*9),shL:[40,30],shR:[40,30],headX:-15+5*Math.sin(s*9)}),U(i,null,s,r>3.4?"feliz":"rindo",{mouth:r<3.4?{open:.6+.3*Math.sin(s*12)}:{open:.2,smile:1},lagrima:r>3.4}),nt(a,[[0,[-1.6,1.3,-18.6]],[5.3,[2,9,-8]]],[[0,[-3,1.15,-20]],[5.3,[-3,1,-30]]],r),{bloom:.35})})}function Br(n,t={}){let e=Ka(n,t),i=rt(n,qa,3.2,-5.6,Math.PI-.3),s=rt(n,Xa,1.6,-4.6,2),r=rt(n,bn,0,0);ae(r,-2.6,-2.5,Math.PI,.48);let a=new Y;return a.add(J(.006,.006,.6,"#C8CCD2",0,0,0,{rot:[Math.PI/2,0,0],seg:4})),i.hands.R.add(a),a.position.set(0,-.06,.2),{Q:e,M:i,G:s,R:r}}var Bd=n=>({...ut(n),shR:[70+8*Math.sin(n*2),10],elR:60,shL:[20,10],elL:30});function Ev(n,t){return K(n,t,{},e=>{let{Q:i,M:s,G:r,R:a}=Br(e);return(o,l,c)=>(s.pose(Bd(o)),U(s,null,o,"feliz"),r.pose(ut(o)),U(r,null,o,"feliz",{olhosAbertos:!0}),a.pose(Et({shR:[50,10],elR:90})),U(a,null,o,"feliz",{olhosAbertos:!0}),nt(c,[[0,[-4,6,6]],[4.9,[-1.5,2.6,2.4]]],[[0,[1,.8,-4.5]],[4.9,[1.8,1.2,-5]]],l),{bloom:.3})})}function vv(n,t){return K(n,t,{},e=>{let{Q:i,M:s,G:r,R:a}=Br(e);return(o,l,c)=>(s.pose(Bd(o)),U(s,null,o,"feliz",{look:[0,.4]}),r.pose(ut(o)),U(r,null,o,"feliz"),nt(c,[[0,[7,2.5,-2.4]],[3.7,[6.6,2.3,-2.8]]],[[0,[2.6,1.15,-5.5]],[3.7,[2.6,1.15,-5.5]]],l),{})})}function _v(n,t){return K(n,t,{},e=>{let{Q:i,M:s,G:r,R:a}=Br(e);return(o,l,c)=>(s.root.rotation.y=-1,s.pose(Ce("marcos",o,{...ut(o),shL:[20,10]},.7)),U(s,"marcos",o,"feliz",{look:[-.4,0],lagrima:l>4}),r.pose(ut(o)),U(r,null,o,"neutro",{look:[.5,0]}),nt(c,[[0,[1.15,1.6,-3.3]],[6.5,[1.3,1.55,-3.45]]],[[0,[3.2,1.4,-5.6]],[6.5,[3.2,1.42,-5.6]]],l),{})})}function Mv(n,t){return K(n,t,{},e=>{let{Q:i,M:s,G:r,R:a}=Br(e);return(o,l,c)=>(s.root.rotation.y=-1,s.pose(ut(o)),U(s,null,o,"triste",{look:[-.4,0],lagrima:!0}),r.pose(Ce("gui",o,{...ut(o),shR:[30,10]},.6)),U(r,"gui",o,"feliz",{olhosAbertos:!0,look:[.5,-.1]}),nt(c,[[0,[4.5,1.7,-2.7]],[5.3,[4.3,1.65,-2.85]]],[[0,[1.9,1.25,-4.8]],[5.3,[1.9,1.25,-4.8]]],l),{})})}function Sv(n,t){return K(n,t,{},e=>{let{Q:i,M:s,G:r,R:a}=Br(e);return(o,l,c)=>(s.root.rotation.y=-1,s.pose(Ce("marcos",o,{...ut(o),shR:[60,10],elR:90},.8)),U(s,"marcos",o,"desconfiado",{look:[-.4,0],smile:.4}),r.pose(ut(o)),U(r,null,o,"feliz",{olhosAbertos:!0}),nt(c,[[0,[2.2,1.5,-2.6]],[4.6,[2.35,1.48,-2.85]]],[[0,[3.2,1.4,-5.6]],[4.6,[3.2,1.4,-5.6]]],l),{})})}function bv(n,t){return K(n,t,{},e=>{let{Q:i,M:s,G:r,R:a}=Br(e);a.root.visible=!1;let o=rt(e,bn,-1,-3,-1.2),l=J(.16,.12,.1,"#F2C230",0,0,0,{out:.004});return o.hands.R.add(l),l.position.set(.1,-.05,.1),(c,h,u)=>{s.root.rotation.y=-1;let d=h>1.2;s.pose({...ut(c),lean:d?-8+4*Math.sin(c*10):0,shL:[d?40:10,30],headX:d?-10:0}),U(s,null,c,d?"rindo":"surpreso",{mouth:d?{open:.6+.3*Math.sin(c*11)}:void 0}),r.pose(Ce("gui",c,ut(c),.6)),U(r,d?null:"gui",c,d&&h>2.6?"rindo":"feliz",{olhosAbertos:!0,mouth:h>3.5?{open:.5+.3*Math.sin(c*12)}:void 0});let f=lt(1.5,4,h);return o.root.position.set(At(-1.6,.4,f),0,At(-2.6,-3.8,f)),o.pose(f<1?{...Jn(c,1.6,.8),shR:[70,10],elR:60}:{...ut(c),shR:[70,10],elR:60}),U(o,null,c,"feliz"),nt(u,[[0,[-.4,2,-1]],[4.45,[.2,1.8,-1.6]]],[[0,[2.2,1.2,-5]],[4.45,[2,1.2,-4.8]]],h),{}}})}function bo(n,t={}){let e=Ka(n,t),i=rt(n,qa,0,0);ae(i,-1.6,-4.3,0,.48);let s=rt(n,Xa,0,0);ae(s,-.6,-4.3,0,.48);let r=rt(n,bn,0,0);return ae(r,-2.6,-4.3,0,.48),e.cads[1].position.set(-1.6,0,-4.3),e.cads[1].rotation.y=0,{Q:e,M:i,G:s,R:r}}function Av(n,t){return K(n,t,{},e=>{let{Q:i,M:s,G:r,R:a}=bo(e);return(o,l,c)=>([s,r,a].forEach((h,u)=>{h.pose(Et({shR:[50+10*Math.sin(o*2+u),10],elR:90,headY:15*Math.sin(o*.7+u)})),U(h,null,o,"feliz",{olhosAbertos:!0})}),nt(c,[[0,[-1.6,1.5,.4]],[5.9,[-1.2,7.5,6.5]]],[[0,[-1.6,1.05,-4]],[5.9,[-.6,.5,-4]]],l),{bloom:.3})})}function xv(n,t){return K(n,t,{},e=>{let{Q:i,M:s,G:r,R:a}=bo(e),o=as(.08,.16);return r.hands.R.add(o),o.position.set(0,-.02,.07),o.rotation.x=-.6,o.paint("g",(l,c,h)=>{l.fillStyle="#0E1422",l.fillRect(0,0,c,h),pt(l,"BTC",c/2,50,30,"#FFB43A"),l.strokeStyle="#7DF0A0",l.lineWidth=7,l.beginPath(),l.moveTo(20,450);for(let u=0;u<12;u++)l.lineTo(20+u*21,450-u*25-u%2*40);l.stroke()}),(l,c,h)=>{let u=lt(2.2,3.4,c),d=lt(4.4,5.2,c);return r.pose(Et({shR:[At(65,10,u),10],elR:At(110,20,u),headX:At(20,0,u),headY:At(0,45,d)})),o.visible=u<.9,U(r,null,l,d>.5?"feliz":"neutro",{look:[d>.5?.7:0,d>.5?0:.6],olhosAbertos:!0}),s.pose(Et({shR:[50,10],elR:90})),U(s,null,l,"rindo",{mouth:{open:.4+.3*Math.sin(l*6)}}),a.pose(Et({})),U(a,null,l,"feliz"),nt(h,[[0,[-.25,1.35,-2.65]],[3,[-.4,1.35,-2.72]],[5.9,[-.35,1.3,-2.8]]],[[0,[-.6,1,-4.3]],[3,[-.65,1.1,-4.3]],[5.9,[-1.1,1.1,-4.3]]],c),{}}})}function Tv(n,t){return K(n,t,{},e=>{let{Q:i,M:s,G:r,R:a}=bo(e),o=as(.2,.4);return o.position.set(-1.1,.795,-3.12),o.rotation.x=-Math.PI/2,e.add(o),(l,c,h)=>{let u=.5+.5*Math.sin(l*5);return o.paint("c"+Math.round(u*6),(d,f,p)=>{d.fillStyle="#0E1422",d.fillRect(0,0,f,p),pt(d,"CONTATOS",f/2,50,26,"#9FB4D8",800),d.fillStyle="#F2C230",d.beginPath(),d.arc(f/2,170,60,0,7),d.fill(),pt(d,"\u2665",f/2,172,60,"#C0392B"),pt(d,"PAI",f/2,270,46,"#FFFFFF"),pt(d,"M\xC3E",f/2,330,30,"#9FB4D8",700),d.fillStyle=`rgba(46,156,90,${.6+.4*u})`,d.beginPath(),d.arc(f/2,440,46+6*u,0,7),d.fill(),pt(d,"\u260E",f/2,442,46,"#FFFFFF")}),[s,r,a].forEach((d,f)=>{d.pose(Et({})),U(d,null,l,"feliz")}),nt(h,[[0,[-1.1,1.5,-2.55]],[7,[-1.1,1.25,-2.75]]],[[0,[-1.1,.79,-3.15]],[7,[-1.1,.79,-3.14]]],c,0,.5),{blur:8,focus:.55,range:.3}}})}function wv(n,t){return K(n,t,{},e=>{let{Q:i,M:s,G:r,R:a}=bo(e),o=Li();o.scale.setScalar(.75),o.position.set(-1.62,.79,-3.04),e.add(o);let l=J(.008,.008,.15,"#2E6FB8",-1.3,.8,-3,{rot:[0,0,Math.PI/2],seg:6});return e.add(l),o.userData.E.paint("e",(c,h,u)=>cn(c,h,u,()=>{ge(c,"A SUA LISTA",h*.5,u*.08,54,"#B8322B","center"),ge(c,"1. ...",h*.16,u*.2,46),ge(c,"2. ...",h*.16,u*.32,46)})),(c,h,u)=>(o.userData.D.paint("d"+Math.floor(c*2)%2,(d,f,p)=>cn(d,f,p,()=>{ge(d,"3. ",f*.12,p*.2,60,"#B8322B"),d.fillStyle=Math.floor(c*2)%2?"#B8322B":"#FBF8EE",d.fillRect(f*.26,p*.17,6,p*.07),d.strokeStyle="#9CC4E4"})),[s,r,a].forEach(d=>{d.pose(Et({})),U(d,null,c,"feliz")}),nt(u,[[0,[-1.62,1.7,-2.3]],[5.95,[-1.6,1.35,-2.55]]],[[0,[-1.62,.8,-3.05]],[5.95,[-1.6,.8,-3.05]]],h),{})})}function Rv(n,t){return K(n,t,{},e=>{let{Q:i,M:s,G:r,R:a}=bo(e),o=[s,r,a].map(l=>{let c=yo(["#E2443A","#F4F1EA","#2E6FB8"][l===s?0:l===r?1:2]);return l.hands.R.add(c),c.position.set(0,-.06,.05),c});return(l,c,h)=>{let u=lt(1,1.6,c);return[s,r,a].forEach((d,f)=>{d.pose(Et({shR:[At(40,130,u),At(10,-10+f*10,u)],elR:At(90,40,u),headX:-10*u})),U(d,null,l,"rindo",{mouth:{open:.4+.3*Math.sin(l*8+f)}})}),nt(h,[[0,[-1.6,1.55,-.2]],[6.4,[-1.6,1.45,-1]]],[[0,[-1.6,1.2,-4.2]],[6.4,[-1.6,1.3,-4.2]]],c),{bloom:.35}}})}function Cv(n,t){return K(n,t,{},e=>{let i=Ka(e,{tarde:!0}),s=rt(e,qa,-.5,-3.6,1.1),r=rt(e,Xa,.22,-3.24,-2.04),a=rt(e,bn,-1.2,-2.85,.9);return(o,l,c)=>{let h=lt(.3,1.4,l);return s.pose({...ut(o),shL:[At(10,80,h),At(8,-40,h)],elL:60,shR:[At(10,70,h),-30*h],elR:60}),r.pose({...ut(o),shL:[At(10,80,h),-40*h],elL:60,shR:[At(10,80,h),-40*h],elR:60}),a.pose({...ut(o),shR:[70*h,-30*h],elR:50}),U(s,null,o,"feliz",{lagrima:!0}),U(r,null,o,"feliz"),U(a,null,o,"feliz"),nt(c,[[0,[1.6,1.4,1.2]],[5.14,[2.6,3.4,4.6]]],[[0,[-.3,1.2,-3.4]],[5.14,[-.3,1.3,-3.6]]],l),{bloom:.45,exposure:1-.5*lt(4.2,5.14,l)}}})}var Ud=[[hv,368.31,375.76],[uv,375.76,382.29],[dv,382.29,386.78],[fv,386.78,389.87],[pv,389.87,396.13],[mv,396.13,405.33],[gv,405.33,409.61],[yv,409.61,414.89],[Ev,414.89,419.81],[vv,419.81,423.48],[_v,423.48,429.99],[Mv,429.99,435.29],[Sv,435.29,439.9],[bv,439.9,444.35],[Av,444.35,450.27],[xv,450.27,456.2],[Tv,456.2,463.18],[wv,463.18,469.14],[Rv,469.14,475.56],[Cv,475.56,480.7]];var Nd=[...gd,...vd,...xd,...Fd,...Ud];window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(t=>document.fonts.load(t))).catch(()=>{});let n=new Oa(document.getElementById("film3d"));for(let[t,e,i]of Nd)n.add(t(e,i));window.addEventListener("hf-seek",t=>n.render(t.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
