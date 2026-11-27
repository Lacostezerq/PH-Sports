var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var pc="170";var uf=0,_h=1,df=2;var Cu=1,mc=2,Di=3,bi=0,$e=1,Ge=2,Mi=0,yo=1,bo=2,bh=3,Ah=4,ff=5,Rs=100,pf=101,mf=102,gf=103,Ef=104,yf=200,vf=201,Mf=202,_f=203,W0=204,X0=205,bf=206,Af=207,Tf=208,Sf=209,xf=210,Rf=211,wf=212,Cf=213,Ff=214,q0=0,Y0=1,Z0=2,Ao=3,$0=4,J0=5,K0=6,Q0=7,Fu=0,Pf=1,If=2,_i=0,Df=1,Lf=2,Bf=3,Uf=4,Hf=5,Nf=6,Of=7;var Pu=300,To=301,So=302,j0=303,tl=304,Ia=306,wn=1e3,Cs=1001,el=1002,Sn=1003,zf=1004;var Fr=1005;var vi=1006,l0=1007;var Fs=1008;var Ni=1009,Iu=1010,Du=1011,cr=1012,gc=1013,Oi=1014,Bi=1015,Fn=1016,Ec=1017,yc=1018,xo=1020,Lu=35902,Bu=1021,Uu=1022,Hn=1023,Hu=1024,Nu=1025,vo=1026,Ro=1027,Ou=1028,vc=1029,zu=1030,Mc=1031;var _c=1033,sa=33776,oa=33777,ra=33778,aa=33779,nl=35840,il=35841,sl=35842,ol=35843,rl=36196,al=37492,ll=37496,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,El=37816,yl=37817,vl=37818,Ml=37819,_l=37820,bl=37821,la=36492,Al=36494,Tl=36495,ku=36283,Sl=36284,xl=36285,Rl=36286;var ca=2300,wl=2301,c0=2302,Th=2400,Sh=2401,xh=2402;var kf=3200,Gf=3201;var Gu=0,Vf=1,os="",Ie="srgb",us="srgb-linear",Da="linear",we="srgb";var Qs=7680;var Rh=519,Wf=512,Xf=513,qf=514,Vu=515,Yf=516,Zf=517,$f=518,Jf=519,Cl=35044;var wh="300 es",Ui=2e3,ha=2001,ls=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var h0=Math.PI/180,ua=180/Math.PI;function as(){let n=__sr()*4294967295|0,t=__sr()*4294967295|0,e=__sr()*4294967295|0,i=__sr()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[e&63|128]+En[e>>8&255]+"-"+En[e>>16&255]+En[e>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function fn(n,t,e){return Math.max(t,Math.min(e,n))}function Kf(n,t){return(n%t+t)%t}function u0(n,t,e){return(1-e)*n+e*t}function yi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var it=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class n{constructor(t,e,i,s,o,r,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c)}set(t,e,i,s,o,r,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],E=s[0],m=s[3],p=s[6],b=s[1],A=s[4],y=s[7],C=s[2],x=s[5],w=s[8];return o[0]=r*E+a*b+l*C,o[3]=r*m+a*A+l*x,o[6]=r*p+a*y+l*w,o[1]=c*E+h*b+u*C,o[4]=c*m+h*A+u*x,o[7]=c*p+h*y+u*w,o[2]=d*E+f*b+g*C,o[5]=d*m+f*A+g*x,o[8]=d*p+f*y+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-i*o*h+i*a*l+s*o*c-s*r*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,f=c*o-r*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return t[0]=u*E,t[1]=(s*c-h*i)*E,t[2]=(a*i-s*r)*E,t[3]=d*E,t[4]=(h*e-s*l)*E,t[5]=(s*o-a*e)*E,t[6]=f*E,t[7]=(i*l-c*e)*E,t[8]=(r*e-i*o)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){let l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(d0.makeScale(t,e)),this}rotate(t){return this.premultiply(d0.makeRotation(-t)),this}translate(t,e){return this.premultiply(d0.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},d0=new Qt;function Wu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qf(){let n=da("canvas");return n.style.display="block",n}var Ch={};function sr(n){n in Ch||(Ch[n]=!0,console.warn(n))}function jf(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function tp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ep(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var me={enabled:!0,workingColorSpace:us,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(n.r=Hi(n.r),n.g=Hi(n.g),n.b=Hi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(n.r=Mo(n.r),n.g=Mo(n.g),n.b=Mo(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===os?Da:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Fh=[.64,.33,.3,.6,.15,.06],Ph=[.2126,.7152,.0722],Ih=[.3127,.329],Dh=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);me.define({[us]:{primaries:Fh,whitePoint:Ih,transfer:Da,toXYZ:Dh,fromXYZ:Lh,luminanceCoefficients:Ph,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:Fh,whitePoint:Ih,transfer:we,toXYZ:Dh,fromXYZ:Lh,luminanceCoefficients:Ph,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});var js,Fl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{js===void 0&&(js=da("canvas")),js.width=t.width,js.height=t.height;let i=js.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=js}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=da("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Hi(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hi(e[i]/255)*255):e[i]=Hi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},np=0,fa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(f0(s[r].image)):o.push(f0(s[r]))}else o=f0(s);i.url=o}return e||(t.images[this.uuid]=i),i}};function f0(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ip=0,Cn=class n extends ls{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Cs,s=Cs,o=vi,r=Fs,a=Hn,l=Ni,c=n.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=as(),this.name="",this.source=new fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wn:t.x=t.x-Math.floor(t.x);break;case Cs:t.x=t.x<0?0:1;break;case el:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wn:t.y=t.y-Math.floor(t.y);break;case Cs:t.y=t.y<0?0:1;break;case el:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Pu;Cn.DEFAULT_ANISOTROPY=1;var Fe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(f+1)/2,C=(p+1)/2,x=(h+d)/4,w=(u+E)/4,F=(g+m)/4;return A>y&&A>C?A<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(A),s=x/i,o=w/i):y>C?y<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(y),i=x/s,o=F/s):C<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(C),i=w/o,s=F/o),this.set(i,s,o,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-E)*(u-E)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-E)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pl=class extends ls{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let o=new Cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];let r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new fa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends Pl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},pa=class extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Il=class extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=o[r+0],f=o[r+1],g=o[r+2],E=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=E;return}if(u!==E||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*E,b=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){let C=Math.sqrt(A),x=Math.atan2(C,p*b);m=Math.sin(m*x)/C,a=Math.sin(a*x)/C}let y=a*b;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+E*y,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=o[r],d=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(o/2),d=l(i/2),f=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-i*c,this._z=o*h+r*c+i*l-s*a,this._w=r*h-i*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,o=this._z,r=this._w,a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*__sr(),e=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+l*c+r*u-a*h,this.y=i+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-i*l,this.z=i*a-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return p0.copy(this).projectOnVector(t),this.sub(p0)}reflect(t){return this.sub(p0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let t=__sr()*Math.PI*2,e=__sr()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},p0=new R,Bh=new Yn,Ps=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ri):ri.fromBufferAttribute(o,r),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}let s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jo),Ir.subVectors(this.max,Jo),to.subVectors(t.a,Jo),eo.subVectors(t.b,Jo),no.subVectors(t.c,Jo),ji.subVectors(eo,to),ts.subVectors(no,eo),Ms.subVectors(to,no);let e=[0,-ji.z,ji.y,0,-ts.z,ts.y,0,-Ms.z,Ms.y,ji.z,0,-ji.x,ts.z,0,-ts.x,Ms.z,0,-Ms.x,-ji.y,ji.x,0,-ts.y,ts.x,0,-Ms.y,Ms.x,0];return!m0(e,to,eo,no,Ir)||(e=[1,0,0,0,1,0,0,0,1],!m0(e,to,eo,no,Ir))?!1:(Dr.crossVectors(ji,ts),e=[Dr.x,Dr.y,Dr.z],m0(e,to,eo,no,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},wi=[new R,new R,new R,new R,new R,new R,new R,new R],ri=new R,Pr=new Ps,to=new R,eo=new R,no=new R,ji=new R,ts=new R,Ms=new R,Jo=new R,Ir=new R,Dr=new R,_s=new R;function m0(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){_s.fromArray(n,o);let a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),h=i.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var sp=new Ps,Ko=new R,g0=new R,wo=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):sp.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);let e=Ko.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ko,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(g0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(g0)),this.expandByPoint(Ko.copy(t.center).sub(g0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ci=new R,E0=new R,Lr=new R,es=new R,y0=new R,Br=new R,v0=new R,ma=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){E0.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),es.copy(this.origin).sub(E0);let o=t.distanceTo(e)*.5,r=-this.direction.dot(Lr),a=es.dot(this.direction),l=-es.dot(Lr),c=es.lengthSq(),h=Math.abs(1-r*r),u,d,f,g;if(h>0)if(u=r*l-a,d=r*a-l,g=o*h,u>=0)if(d>=-g)if(d<=g){let E=1/h;u*=E,d*=E,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(E0).addScaledVector(Lr,d),f}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);let i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,o=t.radius*t.radius;if(s>o)return null;let r=Math.sqrt(o-s),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,s,o){y0.subVectors(e,t),Br.subVectors(i,t),v0.crossVectors(y0,Br);let r=this.direction.dot(v0),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;es.subVectors(this.origin,t);let l=a*this.direction.dot(Br.crossVectors(es,Br));if(l<0)return null;let c=a*this.direction.dot(y0.cross(es));if(c<0||l+c>r)return null;let h=-a*es.dot(v0);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class n{constructor(t,e,i,s,o,r,a,l,c,h,u,d,f,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c,h,u,d,f,g,E,m)}set(t,e,i,s,o,r,a,l,c,h,u,d,f,g,E,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/io.setFromMatrixColumn(t,0).length(),o=1/io.setFromMatrixColumn(t,1).length(),r=1/io.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let d=r*h,f=r*u,g=a*h,E=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-E*c,e[9]=-a*l,e[2]=E-d*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,E=c*u;e[0]=d+E*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-g,e[6]=E+d*a,e[10]=r*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,E=c*u;e[0]=d-E*a,e[4]=-r*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*h,e[9]=E-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){let d=r*h,f=r*u,g=a*h,E=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+E,e[1]=l*u,e[5]=E*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){let d=r*l,f=r*c,g=a*l,E=a*c;e[0]=l*h,e[4]=E-d*u,e[8]=g*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-E*u}else if(t.order==="XZY"){let d=r*l,f=r*c,g=a*l,E=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+E,e[5]=r*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=E*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(op,t,rp)}lookAt(t,e,i){let s=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),ns.crossVectors(i,Bn),ns.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),ns.crossVectors(i,Bn)),ns.normalize(),Ur.crossVectors(Bn,ns),s[0]=ns.x,s[4]=Ur.x,s[8]=Bn.x,s[1]=ns.y,s[5]=Ur.y,s[9]=Bn.y,s[2]=ns.z,s[6]=Ur.z,s[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],E=i[6],m=i[10],p=i[14],b=i[3],A=i[7],y=i[11],C=i[15],x=s[0],w=s[4],F=s[8],T=s[12],M=s[1],P=s[5],W=s[9],O=s[13],I=s[2],N=s[6],H=s[10],q=s[14],z=s[3],tt=s[7],ut=s[11],At=s[15];return o[0]=r*x+a*M+l*I+c*z,o[4]=r*w+a*P+l*N+c*tt,o[8]=r*F+a*W+l*H+c*ut,o[12]=r*T+a*O+l*q+c*At,o[1]=h*x+u*M+d*I+f*z,o[5]=h*w+u*P+d*N+f*tt,o[9]=h*F+u*W+d*H+f*ut,o[13]=h*T+u*O+d*q+f*At,o[2]=g*x+E*M+m*I+p*z,o[6]=g*w+E*P+m*N+p*tt,o[10]=g*F+E*W+m*H+p*ut,o[14]=g*T+E*O+m*q+p*At,o[3]=b*x+A*M+y*I+C*z,o[7]=b*w+A*P+y*N+C*tt,o[11]=b*F+A*W+y*H+C*ut,o[15]=b*T+A*O+y*q+C*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],E=t[7],m=t[11],p=t[15];return g*(+o*l*u-s*c*u-o*a*d+i*c*d+s*a*f-i*l*f)+E*(+e*l*f-e*c*d+o*r*d-s*r*f+s*c*h-o*l*h)+m*(+e*c*u-e*a*f-o*r*u+i*r*f+o*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*r*u-i*r*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],E=t[13],m=t[14],p=t[15],b=u*m*c-E*d*c+E*l*f-a*m*f-u*l*p+a*d*p,A=g*d*c-h*m*c-g*l*f+r*m*f+h*l*p-r*d*p,y=h*E*c-g*u*c+g*a*f-r*E*f-h*a*p+r*u*p,C=g*u*l-h*E*l-g*a*d+r*E*d+h*a*m-r*u*m,x=e*b+i*A+s*y+o*C;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/x;return t[0]=b*w,t[1]=(E*d*o-u*m*o-E*s*f+i*m*f+u*s*p-i*d*p)*w,t[2]=(a*m*o-E*l*o+E*s*c-i*m*c-a*s*p+i*l*p)*w,t[3]=(u*l*o-a*d*o-u*s*c+i*d*c+a*s*f-i*l*f)*w,t[4]=A*w,t[5]=(h*m*o-g*d*o+g*s*f-e*m*f-h*s*p+e*d*p)*w,t[6]=(g*l*o-r*m*o-g*s*c+e*m*c+r*s*p-e*l*p)*w,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*f+e*l*f)*w,t[8]=y*w,t[9]=(g*u*o-h*E*o-g*i*f+e*E*f+h*i*p-e*u*p)*w,t[10]=(r*E*o-g*a*o+g*i*c-e*E*c-r*i*p+e*a*p)*w,t[11]=(h*a*o-r*u*o-h*i*c+e*u*c+r*i*f-e*a*f)*w,t[12]=C*w,t[13]=(h*E*s-g*u*s+g*i*d-e*E*d-h*i*m+e*u*m)*w,t[14]=(g*a*s-r*E*s-g*i*l+e*E*l+r*i*m-e*a*m)*w,t[15]=(r*u*s-h*a*s+h*i*l-e*u*l-r*i*d+e*a*d)*w,this}scale(t){let e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,f=o*h,g=o*u,E=r*h,m=r*u,p=a*u,b=l*c,A=l*h,y=l*u,C=i.x,x=i.y,w=i.z;return s[0]=(1-(E+p))*C,s[1]=(f+y)*C,s[2]=(g-A)*C,s[3]=0,s[4]=(f-y)*x,s[5]=(1-(d+p))*x,s[6]=(m+b)*x,s[7]=0,s[8]=(g+A)*w,s[9]=(m-b)*w,s[10]=(1-(d+E))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,o=io.set(s[0],s[1],s[2]).length(),r=io.set(s[4],s[5],s[6]).length(),a=io.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ai.copy(this);let c=1/o,h=1/r,u=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,e.setFromRotationMatrix(ai),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Ui){let l=this.elements,c=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,g;if(a===Ui)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===ha)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Ui){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(r-o),d=(e+t)*c,f=(i+s)*h,g,E;if(a===Ui)g=(r+o)*u,E=-2*u;else if(a===ha)g=o*u,E=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},io=new R,ai=new Se,op=new R(0,0,0),rp=new R(1,1,1),ns=new R,Ur=new R,Bn=new R,Uh=new Se,Hh=new Yn,zi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-fn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var ga=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ap=0,Nh=new R,so=new Yn,Fi=new Se,Hr=new R,Qo=new R,lp=new R,cp=new Yn,Oh=new R(1,0,0),zh=new R(0,1,0),kh=new R(0,0,1),Gh={type:"added"},hp={type:"removed"},oo={type:"childadded",child:null},M0={type:"childremoved",child:null},en=class n extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new R,e=new zi,i=new Yn,s=new R(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Qt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return so.setFromAxisAngle(t,e),this.quaternion.multiply(so),this}rotateOnWorldAxis(t,e){return so.setFromAxisAngle(t,e),this.quaternion.premultiply(so),this}rotateX(t){return this.rotateOnAxis(Oh,t)}rotateY(t){return this.rotateOnAxis(zh,t)}rotateZ(t){return this.rotateOnAxis(kh,t)}translateOnAxis(t,e){return Nh.copy(t).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oh,t)}translateY(t){return this.translateOnAxis(zh,t)}translateZ(t){return this.translateOnAxis(kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hr.copy(t):Hr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Qo,Hr,this.up):Fi.lookAt(Hr,Qo,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),so.setFromRotationMatrix(Fi),this.quaternion.premultiply(so.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gh),oo.child=t,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hp),M0.child=t,this.dispatchEvent(M0),M0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gh),oo.child=t,this.dispatchEvent(oo),oo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,t,lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){let a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};en.DEFAULT_UP=new R(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new R,Pi=new R,_0=new R,Ii=new R,ro=new R,ao=new R,Vh=new R,b0=new R,A0=new R,T0=new R,S0=new Fe,x0=new Fe,R0=new Fe,rs=class n{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){li.subVectors(s,e),Pi.subVectors(i,e),_0.subVectors(t,e);let r=li.dot(li),a=li.dot(Pi),l=li.dot(_0),c=Pi.dot(Pi),h=Pi.dot(_0),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(r*h-a*l)*d;return o.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,i,s,o,r,a,l){return this.getBarycoord(t,e,i,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ii.x),l.addScaledVector(r,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(t,e,i,s,o,r){return S0.setScalar(0),x0.setScalar(0),R0.setScalar(0),S0.fromBufferAttribute(t,e),x0.fromBufferAttribute(t,i),R0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(S0,o.x),r.addScaledVector(x0,o.y),r.addScaledVector(R0,o.z),r}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),Pi.subVectors(t,e),li.cross(Pi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),li.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,o=this.c,r,a;ro.subVectors(s,i),ao.subVectors(o,i),b0.subVectors(t,i);let l=ro.dot(b0),c=ao.dot(b0);if(l<=0&&c<=0)return e.copy(i);A0.subVectors(t,s);let h=ro.dot(A0),u=ao.dot(A0);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(ro,r);T0.subVectors(t,o);let f=ro.dot(T0),g=ao.dot(T0);if(g>=0&&f<=g)return e.copy(o);let E=f*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ao,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Vh.subVectors(o,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Vh,a);let p=1/(m+E+d);return r=E*p,a=d*p,e.copy(i).addScaledVector(ro,r).addScaledVector(ao,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function w0(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=i,me.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=me.workingColorSpace){if(t=Kf(t,1),e=fn(e,0,1),i=fn(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=w0(r,o,t+1/3),this.g=w0(r,o,t),this.b=w0(r,o,t-1/3)}return me.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let i=Xu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return me.fromWorkingColorSpace(yn.copy(this),t),Math.round(fn(yn.r*255,0,255))*65536+Math.round(fn(yn.g*255,0,255))*256+Math.round(fn(yn.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(yn.copy(this),e);let i=yn.r,s=yn.g,o=yn.b,r=Math.max(i,s,o),a=Math.min(i,s,o),l,c,h=(a+r)/2;if(a===r)l=0,c=0;else{let u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case i:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-i)/u+2;break;case o:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=Ie){me.fromWorkingColorSpace(yn.copy(this),t);let e=yn.r,i=yn.g,s=yn.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(is),this.setHSL(is.h+t,is.s+e,is.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(is),t.getHSL(Nr);let i=u0(is.h,Nr.h,e),s=u0(is.s,Nr.s,e),o=u0(is.l,Nr.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new wt;wt.NAMES=Xu;var up=0,ki=class extends ls{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=as(),this.name="",this.blending=yo,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=W0,this.blendDst=X0,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==W0&&(i.blendSrc=this.blendSrc),this.blendDst!==X0&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){let r=[];for(let a in o){let l=o[a];delete l.metadata,r.push(l)}return r}if(e){let o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ne=class extends ki{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ze=new R,Or=new it,vn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Cl,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array),o=Ce(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cl&&(t.usage=this.usage),t}};var Ea=class extends vn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ya=class extends vn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var De=class extends vn{constructor(t,e,i){super(new Float32Array(t),e,i)}},dp=0,qn=new Se,C0=new en,lo=new R,Un=new Ps,jo=new Ps,an=new R,cn=class n extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wu(t)?ya:Ea)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new Qt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,i){return qn.makeTranslation(t,e,i),this.applyMatrix4(qn),this}scale(t,e,i){return qn.makeScale(t,e,i),this.applyMatrix4(qn),this}lookAt(t){return C0.lookAt(t),C0.updateMatrix(),this.applyMatrix4(C0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,o=t.length;s<o;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new De(i,3))}else{for(let i=0,s=e.count;i<s;i++){let o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let o=e[i];Un.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Un.min,jo.min),Un.expandByPoint(an),an.addVectors(Un.max,jo.max),Un.expandByPoint(an)):(Un.expandByPoint(jo.min),Un.expandByPoint(jo.max))}Un.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)an.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(an));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(lo.fromBufferAttribute(t,c),an.add(lo)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new R,l[F]=new R;let c=new R,h=new R,u=new R,d=new it,f=new it,g=new it,E=new R,m=new R;function p(F,T,M){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,M),d.fromBufferAttribute(o,F),f.fromBufferAttribute(o,T),g.fromBufferAttribute(o,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[F].add(E),a[T].add(E),a[M].add(E),l[F].add(m),l[T].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let F=0,T=b.length;F<T;++F){let M=b[F],P=M.start,W=M.count;for(let O=P,I=P+W;O<I;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let A=new R,y=new R,C=new R,x=new R;function w(F){C.fromBufferAttribute(s,F),x.copy(C);let T=a[F];A.copy(T),A.sub(C.multiplyScalar(C.dot(T))).normalize(),y.crossVectors(x,T);let P=y.dot(l[F])<0?-1:1;r.setXYZW(F,A.x,A.y,A.z,P)}for(let F=0,T=b.length;F<T;++F){let M=b[F],P=M.start,W=M.count;for(let O=P,I=P+W;O<I;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new R,o=new R,r=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),E=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,E),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new vn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,l=r.length;a<l;a++){let c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wh=new Se,bs=new ma,zr=new wo,Xh=new R,kr=new R,Gr=new R,Vr=new R,F0=new R,Wr=new R,qh=new R,Xr=new R,ot=class extends en{constructor(t=new cn,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){Wr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],u=o[l];h!==0&&(F0.fromBufferAttribute(u,t),r?Wr.addScaledVector(F0,h):Wr.addScaledVector(F0.sub(e),h))}e.add(Wr)}return e}raycast(t,e){let i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(o),bs.copy(t.ray).recast(t.near),!(zr.containsPoint(bs.origin)===!1&&(bs.intersectSphere(zr,Xh)===null||bs.origin.distanceToSquared(Xh)>(t.far-t.near)**2))&&(Wh.copy(o).invert(),bs.copy(t.ray).applyMatrix4(Wh),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bs)))}_computeIntersections(t,e,i){let s,o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,E=d.length;g<E;g++){let m=d[g],p=r[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,C=A;y<C;y+=3){let x=a.getX(y),w=a.getX(y+1),F=a.getX(y+2);s=qr(this,p,t,i,c,h,u,x,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let b=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);s=qr(this,r,t,i,c,h,u,b,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,E=d.length;g<E;g++){let m=d[g],p=r[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,C=A;y<C;y+=3){let x=y,w=y+1,F=y+2;s=qr(this,p,t,i,c,h,u,x,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let b=m,A=m+1,y=m+2;s=qr(this,r,t,i,c,h,u,b,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function fp(n,t,e,i,s,o,r,a){let l;if(t.side===$e?l=i.intersectTriangle(r,o,s,!0,a):l=i.intersectTriangle(s,o,r,t.side===bi,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Xr);return c<e.near||c>e.far?null:{distance:c,point:Xr.clone(),object:n}}function qr(n,t,e,i,s,o,r,a,l,c){n.getVertexPosition(a,kr),n.getVertexPosition(l,Gr),n.getVertexPosition(c,Vr);let h=fp(n,t,e,i,kr,Gr,Vr,qh);if(h){let u=new R;rs.getBarycoord(qh,kr,Gr,Vr,u),s&&(h.uv=rs.getInterpolatedAttribute(s,a,l,c,u,new it)),o&&(h.uv1=rs.getInterpolatedAttribute(o,a,l,c,u,new it)),r&&(h.normal=rs.getInterpolatedAttribute(r,a,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};rs.getNormal(kr,Gr,Vr,d.normal),h.face=d,h.barycoord=u}return h}var Oe=class n extends cn{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};let a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,r,o,0),g("z","y","x",1,-1,i,e,-t,r,o,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,o,4),g("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2));function g(E,m,p,b,A,y,C,x,w,F,T){let M=y/w,P=C/F,W=y/2,O=C/2,I=x/2,N=w+1,H=F+1,q=0,z=0,tt=new R;for(let ut=0;ut<H;ut++){let At=ut*P-O;for(let Ot=0;Ot<N;Ot++){let fe=Ot*M-W;tt[E]=fe*b,tt[m]=At*A,tt[p]=I,c.push(tt.x,tt.y,tt.z),tt[E]=0,tt[m]=0,tt[p]=x>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Ot/w),u.push(1-ut/F),q+=1}}for(let ut=0;ut<F;ut++)for(let At=0;At<w;At++){let Ot=d+At+N*ut,fe=d+At+N*(ut+1),Y=d+(At+1)+N*(ut+1),rt=d+(At+1)+N*ut;l.push(Ot,fe,rt),l.push(fe,Y,rt),z+=6}a.addGroup(f,z,T),f+=z,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Co(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Tn(n){let t={};for(let e=0;e<n.length;e++){let i=Co(n[e]);for(let s in i)t[s]=i[s]}return t}function pp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function qu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var Do={clone:Co,merge:Tn},mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends ki{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Co(t.uniforms),this.uniformsGroups=pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},va=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ss=new R,Yh=new it,Zh=new it,pn=class extends va{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(h0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(h0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,e){return this.getViewBounds(t,Yh,Zh),e.subVectors(Zh,Yh)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(h0*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},co=-90,ho=1,Dl=class extends en{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(co,ho,t,e);s.layers=this.layers,this.add(s);let o=new pn(co,ho,t,e);o.layers=this.layers,this.add(o);let r=new pn(co,ho,t,e);r.layers=this.layers,this.add(r);let a=new pn(co,ho,t,e);a.layers=this.layers,this.add(a);let l=new pn(co,ho,t,e);l.layers=this.layers,this.add(l);let c=new pn(co,ho,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,l]=e;for(let c of e)this.remove(c);if(t===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ma=class extends Cn{constructor(t,e,i,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:To,super(t,e,i,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ll=class extends ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ma(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oe(5,5,5),o=new Je({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$e,blending:Mi});o.uniforms.tEquirect.value=e;let r=new ot(s,o),a=e.minFilter;return e.minFilter===Fs&&(e.minFilter=vi),new Dl(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}},P0=new R,Ep=new R,yp=new Qt,Li=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=P0.subVectors(i,e).cross(Ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(P0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||yp.getNormalMatrix(t),s=this.coplanarPoint(P0).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},As=new wo,Yr=new R,hr=class{constructor(t=new Li,e=new Li,i=new Li,s=new Li,o=new Li,r=new Li){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ui){let i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],E=s[10],m=s[11],p=s[12],b=s[13],A=s[14],y=s[15];if(i[0].setComponents(l-o,d-c,m-f,y-p).normalize(),i[1].setComponents(l+o,d+c,m+f,y+p).normalize(),i[2].setComponents(l+r,d+h,m+g,y+b).normalize(),i[3].setComponents(l-r,d-h,m-g,y-b).normalize(),i[4].setComponents(l-a,d-u,m-E,y-A).normalize(),e===Ui)i[5].setComponents(l+a,d+u,m+E,y+A).normalize();else if(e===ha)i[5].setComponents(a,u,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yu(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.__noRaf(s)}return{start:function(){t!==!0&&e!==null&&(i=n.__noRaf(s),t=!0)},stop:function(){n.__noCaf(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function vp(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],E=u[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++d,u[d]=E)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let E=u[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var Bt=class n extends cn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let o=t/2,r=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],E=[],m=[];for(let p=0;p<h;p++){let b=p*d-r;for(let A=0;A<c;A++){let y=A*u-o;g.push(y,-b,0),E.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let A=b+c*p,y=b+c*(p+1),C=b+1+c*(p+1),x=b+1+c*p;f.push(A,y,x),f.push(y,C,x)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(E,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_p=`#ifdef USE_ALPHAHASH
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
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xp=`#ifdef USE_AOMAP
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
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
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
#endif`,Cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dp=`#ifdef USE_IRIDESCENCE
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
#endif`,Lp=`#ifdef USE_BUMPMAP
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vp=`#define PI 3.141592653589793
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
} // validated`,Wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xp=`vec3 transformedNormal = objectNormal;
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
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t1=`#ifdef USE_ENVMAP
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
#endif`,e1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a1=`#ifdef USE_GRADIENTMAP
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
}`,l1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u1=`uniform bool receiveShadow;
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
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,f1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E1=`PhysicalMaterial material;
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
#endif`,y1=`struct PhysicalMaterial {
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
}`,v1=`
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
#endif`,M1=`#if defined( RE_IndirectDiffuse )
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
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C1=`#if defined( USE_POINTS_UV )
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
#endif`,F1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B1=`#ifdef USE_MORPHTARGETS
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
#endif`,U1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G1=`#ifdef USE_NORMALMAP
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
#endif`,V1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
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
}`,om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
}`,Rm=`#define DISTANCE
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
}`,wm=`#define DISTANCE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Bm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Hm=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,Om=`#define NORMAL
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
}`,zm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,Gm=`#define PHONG
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
}`,Vm=`#define STANDARD
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,qm=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Jm=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Mp,alphahash_pars_fragment:_p,alphamap_fragment:bp,alphamap_pars_fragment:Ap,alphatest_fragment:Tp,alphatest_pars_fragment:Sp,aomap_fragment:xp,aomap_pars_fragment:Rp,batching_pars_vertex:wp,batching_vertex:Cp,begin_vertex:Fp,beginnormal_vertex:Pp,bsdfs:Ip,iridescence_fragment:Dp,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:Np,color_fragment:Op,color_pars_fragment:zp,color_pars_vertex:kp,color_vertex:Gp,common:Vp,cube_uv_reflection_fragment:Wp,defaultnormal_vertex:Xp,displacementmap_pars_vertex:qp,displacementmap_vertex:Yp,emissivemap_fragment:Zp,emissivemap_pars_fragment:$p,colorspace_fragment:Jp,colorspace_pars_fragment:Kp,envmap_fragment:Qp,envmap_common_pars_fragment:jp,envmap_pars_fragment:t1,envmap_pars_vertex:e1,envmap_physical_pars_fragment:d1,envmap_vertex:n1,fog_vertex:i1,fog_pars_vertex:s1,fog_fragment:o1,fog_pars_fragment:r1,gradientmap_pars_fragment:a1,lightmap_pars_fragment:l1,lights_lambert_fragment:c1,lights_lambert_pars_fragment:h1,lights_pars_begin:u1,lights_toon_fragment:f1,lights_toon_pars_fragment:p1,lights_phong_fragment:m1,lights_phong_pars_fragment:g1,lights_physical_fragment:E1,lights_physical_pars_fragment:y1,lights_fragment_begin:v1,lights_fragment_maps:M1,lights_fragment_end:_1,logdepthbuf_fragment:b1,logdepthbuf_pars_fragment:A1,logdepthbuf_pars_vertex:T1,logdepthbuf_vertex:S1,map_fragment:x1,map_pars_fragment:R1,map_particle_fragment:w1,map_particle_pars_fragment:C1,metalnessmap_fragment:F1,metalnessmap_pars_fragment:P1,morphinstance_vertex:I1,morphcolor_vertex:D1,morphnormal_vertex:L1,morphtarget_pars_vertex:B1,morphtarget_vertex:U1,normal_fragment_begin:H1,normal_fragment_maps:N1,normal_pars_fragment:O1,normal_pars_vertex:z1,normal_vertex:k1,normalmap_pars_fragment:G1,clearcoat_normal_fragment_begin:V1,clearcoat_normal_fragment_maps:W1,clearcoat_pars_fragment:X1,iridescence_pars_fragment:q1,opaque_fragment:Y1,packing:Z1,premultiplied_alpha_fragment:$1,project_vertex:J1,dithering_fragment:K1,dithering_pars_fragment:Q1,roughnessmap_fragment:j1,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:em,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:om,skinning_pars_vertex:rm,skinning_vertex:am,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:Em,worldpos_vertex:ym,background_vert:vm,background_frag:Mm,backgroundCube_vert:_m,backgroundCube_frag:bm,cube_vert:Am,cube_frag:Tm,depth_vert:Sm,depth_frag:xm,distanceRGBA_vert:Rm,distanceRGBA_frag:wm,equirect_vert:Cm,equirect_frag:Fm,linedashed_vert:Pm,linedashed_frag:Im,meshbasic_vert:Dm,meshbasic_frag:Lm,meshlambert_vert:Bm,meshlambert_frag:Um,meshmatcap_vert:Hm,meshmatcap_frag:Nm,meshnormal_vert:Om,meshnormal_frag:zm,meshphong_vert:km,meshphong_frag:Gm,meshphysical_vert:Vm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:Ym,points_frag:Zm,shadow_vert:$m,shadow_frag:Jm,sprite_vert:Km,sprite_frag:Qm},ft={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Ei={basic:{uniforms:Tn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Tn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new wt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Tn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Tn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Tn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new wt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Tn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Tn([ft.points,ft.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Tn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Tn([ft.common,ft.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Tn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Tn([ft.sprite,ft.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Tn([ft.common,ft.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Tn([ft.lights,ft.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Ei.physical={uniforms:Tn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Zr={r:0,b:0,g:0},Ts=new zi,jm=new Se;function t2(n,t,e,i,s,o,r){let a=new wt(0),l=o===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?e:t).get(A)),A}function E(b){let A=!1,y=g(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),A=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,A){let y=g(A);y&&(y.isCubeTexture||y.mapping===Ia)?(h===void 0&&(h=new ot(new Oe(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:Co(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,x,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ts.copy(A.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jm.makeRotationFromEuler(Ts)),h.material.toneMapped=me.getTransfer(y.colorSpace)!==we,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ot(new Bt(2,2),new Je({name:"BackgroundMaterial",uniforms:Co(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=me.getTransfer(y.colorSpace)!==we,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,A){b.getRGB(Zr,qu(n)),i.buffers.color.setClear(Zr.r,Zr.g,Zr.b,A,r)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),l=A,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:E,addToRenderList:m}}function e2(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),o=s,r=!1;function a(M,P,W,O,I){let N=!1,H=u(O,W,P);o!==H&&(o=H,c(o.object)),N=f(M,O,W,I),N&&g(M,O,W,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,y(M,P,W,O),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,P,W){let O=W.wireframe===!0,I=i[M.id];I===void 0&&(I={},i[M.id]=I);let N=I[P.id];N===void 0&&(N={},I[P.id]=N);let H=N[O];return H===void 0&&(H=d(l()),N[O]=H),H}function d(M){let P=[],W=[],O=[];for(let I=0;I<e;I++)P[I]=0,W[I]=0,O[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,P,W,O){let I=o.attributes,N=P.attributes,H=0,q=W.getAttributes();for(let z in q)if(q[z].location>=0){let ut=I[z],At=N[z];if(At===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(At=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(At=M.instanceColor)),ut===void 0||ut.attribute!==At||At&&ut.data!==At.data)return!0;H++}return o.attributesNum!==H||o.index!==O}function g(M,P,W,O){let I={},N=P.attributes,H=0,q=W.getAttributes();for(let z in q)if(q[z].location>=0){let ut=N[z];ut===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));let At={};At.attribute=ut,ut&&ut.data&&(At.data=ut.data),I[z]=At,H++}o.attributes=I,o.attributesNum=H,o.index=O}function E(){let M=o.newAttributes;for(let P=0,W=M.length;P<W;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){let W=o.newAttributes,O=o.enabledAttributes,I=o.attributeDivisors;W[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),I[M]!==P&&(n.vertexAttribDivisor(M,P),I[M]=P)}function b(){let M=o.newAttributes,P=o.enabledAttributes;for(let W=0,O=P.length;W<O;W++)P[W]!==M[W]&&(n.disableVertexAttribArray(W),P[W]=0)}function A(M,P,W,O,I,N,H){H===!0?n.vertexAttribIPointer(M,P,W,I,N):n.vertexAttribPointer(M,P,W,O,I,N)}function y(M,P,W,O){E();let I=O.attributes,N=W.getAttributes(),H=P.defaultAttributeValues;for(let q in N){let z=N[q];if(z.location>=0){let tt=I[q];if(tt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){let ut=tt.normalized,At=tt.itemSize,Ot=t.get(tt);if(Ot===void 0)continue;let fe=Ot.buffer,Y=Ot.type,rt=Ot.bytesPerElement,Ct=Y===n.INT||Y===n.UNSIGNED_INT||tt.gpuType===gc;if(tt.isInterleavedBufferAttribute){let dt=tt.data,Ut=dt.stride,Wt=tt.offset;if(dt.isInstancedInterleavedBuffer){for(let jt=0;jt<z.locationSize;jt++)p(z.location+jt,dt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let jt=0;jt<z.locationSize;jt++)m(z.location+jt);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let jt=0;jt<z.locationSize;jt++)A(z.location+jt,At/z.locationSize,Y,ut,Ut*rt,(Wt+At/z.locationSize*jt)*rt,Ct)}else{if(tt.isInstancedBufferAttribute){for(let dt=0;dt<z.locationSize;dt++)p(z.location+dt,tt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let dt=0;dt<z.locationSize;dt++)m(z.location+dt);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let dt=0;dt<z.locationSize;dt++)A(z.location+dt,At/z.locationSize,Y,ut,At*rt,At/z.locationSize*dt*rt,Ct)}}else if(H!==void 0){let ut=H[q];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(z.location,ut);break;case 3:n.vertexAttrib3fv(z.location,ut);break;case 4:n.vertexAttrib4fv(z.location,ut);break;default:n.vertexAttrib1fv(z.location,ut)}}}}b()}function C(){F();for(let M in i){let P=i[M];for(let W in P){let O=P[W];for(let I in O)h(O[I].object),delete O[I];delete P[W]}delete i[M]}}function x(M){if(i[M.id]===void 0)return;let P=i[M.id];for(let W in P){let O=P[W];for(let I in O)h(O[I].object),delete O[I];delete P[W]}delete i[M.id]}function w(M){for(let P in i){let W=i[P];if(W[M.id]===void 0)continue;let O=W[M.id];for(let I in O)h(O[I].object),delete O[I];delete W[M.id]}}function F(){T(),r=!0,o!==s&&(o=s,c(o.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:x,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:m,disableUnusedAttributes:b}}function n2(n,t,e){let i;function s(c){i=c}function o(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let E=0;E<u;E++)g+=h[E]*d[E];e.update(g,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function i2(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Hn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let F=w===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ni&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Bi&&!F)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,x=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:C,maxSamples:x}}function s2(n){let t=this,e=null,i=0,s=!1,o=!1,r=new Li,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,E=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{let b=o?0:i,A=b*4,y=p.clippingState||null;l.value=y,y=h(g,d,A,f);for(let C=0;C!==A;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let E=u!==null?u.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let p=f+E*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,y=f;A!==E;++A,y+=4)r.copy(u[A]).applyMatrix4(b,a),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}function o2(n){let t=new WeakMap;function e(r,a){return a===j0?r.mapping=To:a===tl&&(r.mapping=So),r}function i(r){if(r&&r.isTexture){let a=r.mapping;if(a===j0||a===tl)if(t.has(r)){let l=t.get(r).texture;return e(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Ll(l.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){let a=r.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}var Fo=class extends va{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=i-t,r=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Eo=4,$h=[.125,.215,.35,.446,.526,.582],ws=20,I0=new Fo,Jh=new wt,D0=null,L0=0,B0=0,U0=!1,xs=(1+Math.sqrt(5))/2,uo=1/xs,Kh=[new R(-xs,uo,0),new R(xs,uo,0),new R(-uo,0,xs),new R(uo,0,xs),new R(0,xs,-uo),new R(0,xs,uo),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],_a=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){D0=this._renderer.getRenderTarget(),L0=this._renderer.getActiveCubeFace(),B0=this._renderer.getActiveMipmapLevel(),U0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(D0,L0,B0),this._renderer.xr.enabled=U0,t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===To||t.mapping===So?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),D0=this._renderer.getRenderTarget(),L0=this._renderer.getActiveCubeFace(),B0=this._renderer.getActiveMipmapLevel(),U0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Fn,format:Hn,colorSpace:us,depthBuffer:!1},s=Qh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(t,e,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r2(o)),this._blurMaterial=a2(o,t,e)}return s}_compileMaterial(t){let e=new ot(this._lodPlanes[0],t);this._renderer.compile(e,I0)}_sceneToCubeUV(t,e,i,s){let a=new pn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jh),h.toneMapping=_i,h.autoClear=!1;let f=new ne({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new ot(new Oe,f),E=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,E=!0):(f.color.copy(Jh),E=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let A=this._cubeSize;$r(s,b*A,p>2?A:0,A,A),h.setRenderTarget(s),E&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===To||t.mapping===So;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());let o=s?this._cubemapMaterial:this._equirectMaterial,r=new ot(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;$r(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,I0)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let o=1;o<s;o++){let r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Kh[(s-o-1)%Kh.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ot(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*ws-1),E=o/g,m=isFinite(o)?1+Math.floor(h*E):ws;m>ws&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ws}`);let p=[],b=0;for(let w=0;w<ws;++w){let F=w/E,T=Math.exp(-F*F/2);p.push(T),w===0?b+=T:w<m&&(b+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-i;let y=this._sizeLods[s],C=3*y*(s>A-Eo?s-A+Eo:0),x=4*(this._cubeSize-y);$r(e,C,x,3*y,2*y),l.setRenderTarget(e),l.render(u,I0)}};function r2(n){let t=[],e=[],i=[],s=n,o=n-Eo+1+$h.length;for(let r=0;r<o;r++){let a=Math.pow(2,s);e.push(a);let l=1/a;r>n-Eo?l=$h[r-n+Eo-1]:r===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,E=3,m=2,p=1,b=new Float32Array(E*g*f),A=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let x=0;x<f;x++){let w=x%3*2/3-1,F=x>2?0:-1,T=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];b.set(T,E*g*x),A.set(d,m*g*x);let M=[x,x,x,x,x,x];y.set(M,p*g*x)}let C=new cn;C.setAttribute("position",new vn(b,E)),C.setAttribute("uv",new vn(A,m)),C.setAttribute("faceIndex",new vn(y,p)),t.push(C),s>Eo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Qh(n,t,e){let i=new ln(n,t,e);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function a2(n,t,e){let i=new Float32Array(ws),s=new R(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function jh(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function tu(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function l2(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===j0||l===tl,h=l===To||l===So;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new _a(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new _a(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){let l=a.target;l.removeEventListener("dispose",o);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function c2(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&sr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function h2(n,t,e,i){let s={},o=new WeakMap;function r(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let E=d.morphAttributes[g];for(let m=0,p=E.length;m<p;m++)t.remove(E[m])}d.removeEventListener("dispose",r),delete s[d.id];let f=o.get(d);f&&(t.remove(f),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let E=f[g];for(let m=0,p=E.length;m<p;m++)t.update(E[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,E=0;if(f!==null){let b=f.array;E=f.version;for(let A=0,y=b.length;A<y;A+=3){let C=b[A+0],x=b[A+1],w=b[A+2];d.push(C,x,x,w,w,C)}}else if(g!==void 0){let b=g.array;E=g.version;for(let A=0,y=b.length/3-1;A<y;A+=3){let C=A+0,x=A+1,w=A+2;d.push(C,x,x,w,w,C)}}else return;let m=new(Wu(d)?ya:Ea)(d,1);m.version=E;let p=o.get(u);p&&t.remove(p),o.set(u,m)}function h(u){let d=o.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function u2(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,f){n.drawElements(i,f,o,d*r),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,o,d*r,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,E){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],E[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,o,d,0,E,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*E[b];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function d2(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function f2(n,t,e){let i=new WeakMap,s=new Fe;function o(r,a,l){let c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let T=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),E===!0&&(A=3);let y=a.attributes.position.count*A,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let x=new Float32Array(y*C*4*u),w=new pa(x,y,C,u);w.type=Bi,w.needsUpdate=!0;let F=A*4;for(let M=0;M<u;M++){let P=m[M],W=p[M],O=b[M],I=y*C*4*M;for(let N=0;N<P.count;N++){let H=N*F;f===!0&&(s.fromBufferAttribute(P,N),x[I+H+0]=s.x,x[I+H+1]=s.y,x[I+H+2]=s.z,x[I+H+3]=0),g===!0&&(s.fromBufferAttribute(W,N),x[I+H+4]=s.x,x[I+H+5]=s.y,x[I+H+6]=s.z,x[I+H+7]=0),E===!0&&(s.fromBufferAttribute(O,N),x[I+H+8]=s.x,x[I+H+9]=s.y,x[I+H+10]=s.z,x[I+H+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new it(y,C)},i.set(a,d),a.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function p2(n,t,e,i){let s=new WeakMap;function o(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}var Po=class extends Cn{constructor(t,e,i,s,o,r,a,l,c,h=vo){if(h!==vo&&h!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===vo&&(i=Oi),i===void 0&&h===Ro&&(i=xo),super(null,s,o,r,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Zu=new Cn,eu=new Po(1,1),$u=new pa,Ju=new Il,Ku=new Ma,nu=[],iu=[],su=new Float32Array(16),ou=new Float32Array(9),ru=new Float32Array(4);function Lo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,o=nu[s];if(o===void 0&&(o=new Float32Array(s),nu[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function nn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function sn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function La(n,t){let e=iu[t];e===void 0&&(e=new Int32Array(t),iu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function m2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function g2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2fv(this.addr,t),sn(e,t)}}function E2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;n.uniform3fv(this.addr,t),sn(e,t)}}function y2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4fv(this.addr,t),sn(e,t)}}function v2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;ru.set(i),n.uniformMatrix2fv(this.addr,!1,ru),sn(e,i)}}function M2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;ou.set(i),n.uniformMatrix3fv(this.addr,!1,ou),sn(e,i)}}function _2(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;su.set(i),n.uniformMatrix4fv(this.addr,!1,su),sn(e,i)}}function b2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function A2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2iv(this.addr,t),sn(e,t)}}function T2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3iv(this.addr,t),sn(e,t)}}function S2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4iv(this.addr,t),sn(e,t)}}function x2(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function R2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2uiv(this.addr,t),sn(e,t)}}function w2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3uiv(this.addr,t),sn(e,t)}}function C2(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4uiv(this.addr,t),sn(e,t)}}function F2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(eu.compareFunction=Vu,o=eu):o=Zu,e.setTexture2D(t||o,s)}function P2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ju,s)}function I2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ku,s)}function D2(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$u,s)}function L2(n){switch(n){case 5126:return m2;case 35664:return g2;case 35665:return E2;case 35666:return y2;case 35674:return v2;case 35675:return M2;case 35676:return _2;case 5124:case 35670:return b2;case 35667:case 35671:return A2;case 35668:case 35672:return T2;case 35669:case 35673:return S2;case 5125:return x2;case 36294:return R2;case 36295:return w2;case 36296:return C2;case 35678:case 36198:case 36298:case 36306:case 35682:return F2;case 35679:case 36299:case 36307:return P2;case 35680:case 36300:case 36308:case 36293:return I2;case 36289:case 36303:case 36311:case 36292:return D2}}function B2(n,t){n.uniform1fv(this.addr,t)}function U2(n,t){let e=Lo(t,this.size,2);n.uniform2fv(this.addr,e)}function H2(n,t){let e=Lo(t,this.size,3);n.uniform3fv(this.addr,e)}function N2(n,t){let e=Lo(t,this.size,4);n.uniform4fv(this.addr,e)}function O2(n,t){let e=Lo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function z2(n,t){let e=Lo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function k2(n,t){let e=Lo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function G2(n,t){n.uniform1iv(this.addr,t)}function V2(n,t){n.uniform2iv(this.addr,t)}function W2(n,t){n.uniform3iv(this.addr,t)}function X2(n,t){n.uniform4iv(this.addr,t)}function q2(n,t){n.uniform1uiv(this.addr,t)}function Y2(n,t){n.uniform2uiv(this.addr,t)}function Z2(n,t){n.uniform3uiv(this.addr,t)}function $2(n,t){n.uniform4uiv(this.addr,t)}function J2(n,t,e){let i=this.cache,s=t.length,o=La(e,s);nn(i,o)||(n.uniform1iv(this.addr,o),sn(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Zu,o[r])}function K2(n,t,e){let i=this.cache,s=t.length,o=La(e,s);nn(i,o)||(n.uniform1iv(this.addr,o),sn(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Ju,o[r])}function Q2(n,t,e){let i=this.cache,s=t.length,o=La(e,s);nn(i,o)||(n.uniform1iv(this.addr,o),sn(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Ku,o[r])}function j2(n,t,e){let i=this.cache,s=t.length,o=La(e,s);nn(i,o)||(n.uniform1iv(this.addr,o),sn(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||$u,o[r])}function tg(n){switch(n){case 5126:return B2;case 35664:return U2;case 35665:return H2;case 35666:return N2;case 35674:return O2;case 35675:return z2;case 35676:return k2;case 5124:case 35670:return G2;case 35667:case 35671:return V2;case 35668:case 35672:return W2;case 35669:case 35673:return X2;case 5125:return q2;case 36294:return Y2;case 36295:return Z2;case 36296:return $2;case 35678:case 36198:case 36298:case 36306:case 35682:return J2;case 35679:case 36299:case 36307:return K2;case 35680:case 36300:case 36308:case 36293:return Q2;case 36289:case 36303:case 36311:case 36292:return j2}}var Bl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=L2(e.type)}},Ul=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tg(e.type)}},Hl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let o=0,r=s.length;o!==r;++o){let a=s[o];a.setValue(t,e[a.id],i)}}},H0=/(\w+)(\])?(\[|\.)?/g;function au(n,t){n.seq.push(t),n.map[t.id]=t}function eg(n,t,e){let i=n.name,s=i.length;for(H0.lastIndex=0;;){let o=H0.exec(i),r=H0.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){au(e,c===void 0?new Bl(a,n,t):new Ul(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Hl(a),au(e,u)),e=u}}}var _o=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);eg(o,r,this)}}setValue(t,e,i,s){let o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){let a=e[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,o=t.length;s!==o;++s){let r=t[s];r.id in e&&i.push(r)}return i}};function lu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var ng=37297,ig=0;function sg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){let a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}var cu=new Qt;function og(n){me._getMatrix(cu,me.workingColorSpace,n);let t=`mat3( ${cu.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(n)){case Da:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function hu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+sg(n.getShaderSource(t),r)}else return s}function rg(n,t){let e=og(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ag(n,t){let e;switch(t){case Df:e="Linear";break;case Lf:e="Reinhard";break;case Bf:e="Cineon";break;case Uf:e="ACESFilmic";break;case Nf:e="AgX";break;case Of:e="Neutral";break;case Hf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jr=new R;function lg(){me.getLuminanceCoefficients(Jr);let n=Jr.x.toFixed(4),t=Jr.y.toFixed(4),e=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function hg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ug(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let o=n.getActiveAttrib(t,s),r=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function or(n){return n!==""}function uu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function du(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(n){return n.replace(dg,pg)}var fg=new Map;function pg(n,t){let e=ee[t];if(e===void 0){let i=fg.get(t);if(i!==void 0)e=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Nl(e)}var mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(n){return n.replace(mg,gg)}function gg(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function pu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Eg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===mc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function yg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case To:case So:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case So:t="ENVMAP_MODE_REFRACTION";break}return t}function Mg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fu:t="ENVMAP_BLENDING_MULTIPLY";break;case Pf:t="ENVMAP_BLENDING_MIX";break;case If:t="ENVMAP_BLENDING_ADD";break}return t}function _g(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function bg(n,t,e,i){let s=n.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,l=Eg(e),c=yg(e),h=vg(e),u=Mg(e),d=_g(e),f=cg(e),g=hg(o),E=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?ee.tonemapping_pars_fragment:"",e.toneMapping!==_i?ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,rg("linearToOutputTexel",e.outputColorSpace),lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),r=Nl(r),r=uu(r,e),r=du(r,e),a=Nl(a),a=uu(a,e),a=du(a,e),r=fu(r),a=fu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=b+m+r,y=b+p+a,C=lu(s,s.VERTEX_SHADER,A),x=lu(s,s.FRAGMENT_SHADER,y);s.attachShader(E,C),s.attachShader(E,x),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function w(P){if(n.debug.checkShaderErrors){let W=s.getProgramInfoLog(E).trim(),O=s.getShaderInfoLog(C).trim(),I=s.getShaderInfoLog(x).trim(),N=!0,H=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,C,x);else{let q=hu(s,C,"vertex"),z=hu(s,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+q+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(O===""||I==="")&&(H=!1);H&&(P.diagnostics={runnable:N,programLog:W,vertexShader:{log:O,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(C),s.deleteShader(x),F=new _o(s,E),T=ug(s,E)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(E,ng)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ig++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=x,this}var Ag=0,Ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new zl(t),e.set(t,i)),i}},zl=class{constructor(t){this.id=Ag++,this.code=t,this.usedTimes=0}};function Tg(n,t,e,i,s,o,r){let a=new ga,l=new Ol,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,P,W,O){let I=W.fog,N=O.geometry,H=T.isMeshStandardMaterial?W.environment:null,q=(T.isMeshStandardMaterial?e:t).get(T.envMap||H),z=q&&q.mapping===Ia?q.image.height:null,tt=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let ut=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,At=ut!==void 0?ut.length:0,Ot=0;N.morphAttributes.position!==void 0&&(Ot=1),N.morphAttributes.normal!==void 0&&(Ot=2),N.morphAttributes.color!==void 0&&(Ot=3);let fe,Y,rt,Ct;if(tt){let Te=Ei[tt];fe=Te.vertexShader,Y=Te.fragmentShader}else fe=T.vertexShader,Y=T.fragmentShader,l.update(T),rt=l.getVertexShaderID(T),Ct=l.getFragmentShaderID(T);let dt=n.getRenderTarget(),Ut=n.state.buffers.depth.getReversed(),Wt=O.isInstancedMesh===!0,jt=O.isBatchedMesh===!0,Ae=!!T.map,ie=!!T.matcap,We=!!q,B=!!T.aoMap,bn=!!T.lightMap,se=!!T.bumpMap,ce=!!T.normalMap,Nt=!!T.displacementMap,Mt=!!T.emissiveMap,pt=!!T.metalnessMap,S=!!T.roughnessMap,v=T.anisotropy>0,k=T.clearcoat>0,K=T.dispersion>0,nt=T.iridescence>0,J=T.sheen>0,Dt=T.transmission>0,Et=v&&!!T.anisotropyMap,Tt=k&&!!T.clearcoatMap,pe=k&&!!T.clearcoatNormalMap,at=k&&!!T.clearcoatRoughnessMap,St=nt&&!!T.iridescenceMap,Gt=nt&&!!T.iridescenceThicknessMap,Xt=J&&!!T.sheenColorMap,xt=J&&!!T.sheenRoughnessMap,de=!!T.specularMap,te=!!T.specularColorMap,Be=!!T.specularIntensityMap,D=Dt&&!!T.transmissionMap,mt=Dt&&!!T.thicknessMap,X=!!T.gradientMap,Q=!!T.alphaMap,_t=T.alphaTest>0,yt=!!T.alphaHash,Jt=!!T.extensions,Ye=_i;T.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Ye=n.toneMapping);let gn={shaderID:tt,shaderType:T.type,shaderName:T.name,vertexShader:fe,fragmentShader:Y,defines:T.defines,customVertexShaderID:rt,customFragmentShaderID:Ct,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:jt,batchingColor:jt&&O._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&O.instanceColor!==null,instancingMorph:Wt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:us,alphaToCoverage:!!T.alphaToCoverage,map:Ae,matcap:ie,envMap:We,envMapMode:We&&q.mapping,envMapCubeUVHeight:z,aoMap:B,lightMap:bn,bumpMap:se,normalMap:ce,displacementMap:d&&Nt,emissiveMap:Mt,normalMapObjectSpace:ce&&T.normalMapType===Vf,normalMapTangentSpace:ce&&T.normalMapType===Gu,metalnessMap:pt,roughnessMap:S,anisotropy:v,anisotropyMap:Et,clearcoat:k,clearcoatMap:Tt,clearcoatNormalMap:pe,clearcoatRoughnessMap:at,dispersion:K,iridescence:nt,iridescenceMap:St,iridescenceThicknessMap:Gt,sheen:J,sheenColorMap:Xt,sheenRoughnessMap:xt,specularMap:de,specularColorMap:te,specularIntensityMap:Be,transmission:Dt,transmissionMap:D,thicknessMap:mt,gradientMap:X,opaque:T.transparent===!1&&T.blending===yo&&T.alphaToCoverage===!1,alphaMap:Q,alphaTest:_t,alphaHash:yt,combine:T.combine,mapUv:Ae&&E(T.map.channel),aoMapUv:B&&E(T.aoMap.channel),lightMapUv:bn&&E(T.lightMap.channel),bumpMapUv:se&&E(T.bumpMap.channel),normalMapUv:ce&&E(T.normalMap.channel),displacementMapUv:Nt&&E(T.displacementMap.channel),emissiveMapUv:Mt&&E(T.emissiveMap.channel),metalnessMapUv:pt&&E(T.metalnessMap.channel),roughnessMapUv:S&&E(T.roughnessMap.channel),anisotropyMapUv:Et&&E(T.anisotropyMap.channel),clearcoatMapUv:Tt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:pe&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:xt&&E(T.sheenRoughnessMap.channel),specularMapUv:de&&E(T.specularMap.channel),specularColorMapUv:te&&E(T.specularColorMap.channel),specularIntensityMapUv:Be&&E(T.specularIntensityMap.channel),transmissionMapUv:D&&E(T.transmissionMap.channel),thicknessMapUv:mt&&E(T.thicknessMap.channel),alphaMapUv:Q&&E(T.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ce||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(Ae||Q),fog:!!I,useFog:T.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ut,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ae&&T.map.isVideoTexture===!0&&me.getTransfer(T.map.colorSpace)===we,decodeVideoTextureEmissive:Mt&&T.emissiveMap.isVideoTexture===!0&&me.getTransfer(T.emissiveMap.colorSpace)===we,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ge,flipSided:T.side===$e,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Jt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&T.extensions.multiDraw===!0||jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return gn.vertexUv1s=c.has(1),gn.vertexUv2s=c.has(2),gn.vertexUv3s=c.has(3),c.clear(),gn}function p(T){let M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(let P in T.defines)M.push(P),M.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(b(M,T),A(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function b(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function A(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){let M=g[T.type],P;if(M){let W=Ei[M];P=Do.clone(W.uniforms)}else P=T.uniforms;return P}function C(T,M){let P;for(let W=0,O=h.length;W<O;W++){let I=h[W];if(I.cacheKey===M){P=I,++P.usedTimes;break}}return P===void 0&&(P=new bg(n,M,T,o),h.push(P)),P}function x(T){if(--T.usedTimes===0){let M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function w(T){l.remove(T)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:x,releaseShaderCache:w,programs:h,dispose:F}}function Sg(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,l){n.get(r)[a]=l}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function xg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function mu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function gu(){let n=[],t=0,e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,f,g,E,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:E,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=E,p.group=m),t++,p}function a(u,d,f,g,E,m){let p=r(u,d,f,g,E,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,E,m){let p=r(u,d,f,g,E,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||xg),i.length>1&&i.sort(d||mu),s.length>1&&s.sort(d||mu)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function Rg(){let n=new WeakMap;function t(i,s){let o=n.get(i),r;return o===void 0?(r=new gu,n.set(i,[r])):s>=o.length?(r=new gu,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function wg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new wt};break;case"SpotLight":e={position:new R,direction:new R,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function Cg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Fg=0;function Pg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ig(n){let t=new wg,e=Cg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let s=new R,o=new Se,r=new Se;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,b=0,A=0,y=0,C=0,x=0,w=0;c.sort(Pg);for(let T=0,M=c.length;T<M;T++){let P=c[T],W=P.color,O=P.intensity,I=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=W.r*O,u+=W.g*O,d+=W.b*O;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],O);w++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let q=P.shadow,z=e.get(P);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=P.shadow.matrix,b++}i.directional[f]=H,f++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(W).multiplyScalar(O),H.distance=I,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[E]=H;let q=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,q.updateMatrices(P),P.castShadow&&x++),i.spotLightMatrix[E]=q.matrix,P.castShadow){let z=e.get(P);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,i.spotShadow[E]=z,i.spotShadowMap[E]=N,y++}E++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(W).multiplyScalar(O),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let q=P.shadow,z=e.get(P);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,z.shadowCameraNear=q.camera.near,z.shadowCameraFar=q.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=P.shadow.matrix,A++}i.point[g]=H,g++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(O),H.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==b||F.numPointShadows!==A||F.numSpotShadows!==y||F.numSpotMaps!==C||F.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=w,F.directionalLength=f,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=b,F.numPointShadows=A,F.numSpotShadows=y,F.numSpotMaps=C,F.numLightProbes=w,i.version=Fg++)}function l(c,h){let u=0,d=0,f=0,g=0,E=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let A=c[p];if(A.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(A.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(A.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),r.identity(),o.copy(A.matrixWorld),o.premultiply(m),r.extractRotation(o),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(A.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function Eu(n){let t=new Ig(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Dg(n){let t=new WeakMap;function e(s,o=0){let r=t.get(s),a;return r===void 0?(a=new Eu(n),t.set(s,[a])):o>=r.length?(a=new Eu(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var kl=class extends ki{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gl=class extends ki{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bg=`uniform sampler2D shadow_pass;
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
}`;function Ug(n,t,e){let i=new hr,s=new it,o=new it,r=new Fe,a=new kl({depthPacking:Gf}),l=new Gl,c={},h=e.maxTextureSize,u={[bi]:$e,[$e]:bi,[Ge]:Ge},d=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Lg,fragmentShader:Bg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new cn;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let p=this.type;this.render=function(x,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;let T=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Mi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let O=p!==Di&&this.type===Di,I=p===Di&&this.type!==Di;for(let N=0,H=x.length;N<H;N++){let q=x[N],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let tt=z.getFrameExtents();if(s.multiply(tt),o.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/tt.x),s.x=o.x*tt.x,z.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/tt.y),s.y=o.y*tt.y,z.mapSize.y=o.y)),z.map===null||O===!0||I===!0){let At=this.type!==Di?{minFilter:Sn,magFilter:Sn}:{};z.map!==null&&z.map.dispose(),z.map=new ln(s.x,s.y,At),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let ut=z.getViewportCount();for(let At=0;At<ut;At++){let Ot=z.getViewport(At);r.set(o.x*Ot.x,o.y*Ot.y,o.x*Ot.z,o.y*Ot.w),W.viewport(r),z.updateMatrices(q,At),i=z.getFrustum(),y(w,F,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===Di&&b(z,F),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,M,P)};function b(x,w){let F=t.update(E);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new ln(s.x,s.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(w,null,F,d,E,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(w,null,F,f,E,null)}function A(x,w,F,T){let M=null,P=F.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(P!==void 0)M=P;else if(M=F.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let W=M.uuid,O=w.uuid,I=c[W];I===void 0&&(I={},c[W]=I);let N=I[O];N===void 0&&(N=M.clone(),I[O]=N,w.addEventListener("dispose",C)),M=N}if(M.visible=w.visible,M.wireframe=w.wireframe,T===Di?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let W=n.properties.get(M);W.light=F}return M}function y(x,w,F,T,M){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===Di)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld);let O=t.update(x),I=x.material;if(Array.isArray(I)){let N=O.groups;for(let H=0,q=N.length;H<q;H++){let z=N[H],tt=I[z.materialIndex];if(tt&&tt.visible){let ut=A(x,tt,T,M);x.onBeforeShadow(n,x,w,F,O,ut,z),n.renderBufferDirect(F,null,O,ut,x,z),x.onAfterShadow(n,x,w,F,O,ut,z)}}}else if(I.visible){let N=A(x,I,T,M);x.onBeforeShadow(n,x,w,F,O,N,null),n.renderBufferDirect(F,null,O,N,x,null),x.onAfterShadow(n,x,w,F,O,N,null)}}let W=x.children;for(let O=0,I=W.length;O<I;O++)y(W[O],w,F,T,M)}function C(x){x.target.removeEventListener("dispose",C);for(let F in c){let T=c[F],M=x.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}var Hg={[q0]:Y0,[Z0]:K0,[$0]:Q0,[Ao]:J0,[Y0]:q0,[K0]:Z0,[Q0]:$0,[J0]:Ao};function Ng(n,t){function e(){let D=!1,mt=new Fe,X=null,Q=new Fe(0,0,0,0);return{setMask:function(_t){X!==_t&&!D&&(n.colorMask(_t,_t,_t,_t),X=_t)},setLocked:function(_t){D=_t},setClear:function(_t,yt,Jt,Ye,gn){gn===!0&&(_t*=Ye,yt*=Ye,Jt*=Ye),mt.set(_t,yt,Jt,Ye),Q.equals(mt)===!1&&(n.clearColor(_t,yt,Jt,Ye),Q.copy(mt))},reset:function(){D=!1,X=null,Q.set(-1,0,0,0)}}}function i(){let D=!1,mt=!1,X=null,Q=null,_t=null;return{setReversed:function(yt){if(mt!==yt){let Jt=t.get("EXT_clip_control");mt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);let Ye=_t;_t=null,this.setClear(Ye)}mt=yt},getReversed:function(){return mt},setTest:function(yt){yt?dt(n.DEPTH_TEST):Ut(n.DEPTH_TEST)},setMask:function(yt){X!==yt&&!D&&(n.depthMask(yt),X=yt)},setFunc:function(yt){if(mt&&(yt=Hg[yt]),Q!==yt){switch(yt){case q0:n.depthFunc(n.NEVER);break;case Y0:n.depthFunc(n.ALWAYS);break;case Z0:n.depthFunc(n.LESS);break;case Ao:n.depthFunc(n.LEQUAL);break;case $0:n.depthFunc(n.EQUAL);break;case J0:n.depthFunc(n.GEQUAL);break;case K0:n.depthFunc(n.GREATER);break;case Q0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=yt}},setLocked:function(yt){D=yt},setClear:function(yt){_t!==yt&&(mt&&(yt=1-yt),n.clearDepth(yt),_t=yt)},reset:function(){D=!1,X=null,Q=null,_t=null,mt=!1}}}function s(){let D=!1,mt=null,X=null,Q=null,_t=null,yt=null,Jt=null,Ye=null,gn=null;return{setTest:function(Te){D||(Te?dt(n.STENCIL_TEST):Ut(n.STENCIL_TEST))},setMask:function(Te){mt!==Te&&!D&&(n.stencilMask(Te),mt=Te)},setFunc:function(Te,si,xi){(X!==Te||Q!==si||_t!==xi)&&(n.stencilFunc(Te,si,xi),X=Te,Q=si,_t=xi)},setOp:function(Te,si,xi){(yt!==Te||Jt!==si||Ye!==xi)&&(n.stencilOp(Te,si,xi),yt=Te,Jt=si,Ye=xi)},setLocked:function(Te){D=Te},setClear:function(Te){gn!==Te&&(n.clearStencil(Te),gn=Te)},reset:function(){D=!1,mt=null,X=null,Q=null,_t=null,yt=null,Jt=null,Ye=null,gn=null}}}let o=new e,r=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,E=!1,m=null,p=null,b=null,A=null,y=null,C=null,x=null,w=new wt(0,0,0),F=0,T=!1,M=null,P=null,W=null,O=null,I=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,q=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=q>=1):z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=q>=2);let tt=null,ut={},At=n.getParameter(n.SCISSOR_BOX),Ot=n.getParameter(n.VIEWPORT),fe=new Fe().fromArray(At),Y=new Fe().fromArray(Ot);function rt(D,mt,X,Q){let _t=new Uint8Array(4),yt=n.createTexture();n.bindTexture(D,yt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Jt=0;Jt<X;Jt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(mt+Jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return yt}let Ct={};Ct[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ct[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ct[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(n.DEPTH_TEST),r.setFunc(Ao),se(!1),ce(_h),dt(n.CULL_FACE),B(Mi);function dt(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Ut(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Wt(D,mt){return u[D]!==mt?(n.bindFramebuffer(D,mt),u[D]=mt,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=mt),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function jt(D,mt){let X=f,Q=!1;if(D){X=d.get(mt),X===void 0&&(X=[],d.set(mt,X));let _t=D.textures;if(X.length!==_t.length||X[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,Jt=_t.length;yt<Jt;yt++)X[yt]=n.COLOR_ATTACHMENT0+yt;X.length=_t.length,Q=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,Q=!0);Q&&n.drawBuffers(X)}function Ae(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let ie={[Rs]:n.FUNC_ADD,[pf]:n.FUNC_SUBTRACT,[mf]:n.FUNC_REVERSE_SUBTRACT};ie[gf]=n.MIN,ie[Ef]=n.MAX;let We={[yf]:n.ZERO,[vf]:n.ONE,[Mf]:n.SRC_COLOR,[W0]:n.SRC_ALPHA,[xf]:n.SRC_ALPHA_SATURATE,[Tf]:n.DST_COLOR,[bf]:n.DST_ALPHA,[_f]:n.ONE_MINUS_SRC_COLOR,[X0]:n.ONE_MINUS_SRC_ALPHA,[Sf]:n.ONE_MINUS_DST_COLOR,[Af]:n.ONE_MINUS_DST_ALPHA,[Rf]:n.CONSTANT_COLOR,[wf]:n.ONE_MINUS_CONSTANT_COLOR,[Cf]:n.CONSTANT_ALPHA,[Ff]:n.ONE_MINUS_CONSTANT_ALPHA};function B(D,mt,X,Q,_t,yt,Jt,Ye,gn,Te){if(D===Mi){E===!0&&(Ut(n.BLEND),E=!1);return}if(E===!1&&(dt(n.BLEND),E=!0),D!==ff){if(D!==m||Te!==T){if((p!==Rs||y!==Rs)&&(n.blendEquation(n.FUNC_ADD),p=Rs,y=Rs),Te)switch(D){case yo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bo:n.blendFunc(n.ONE,n.ONE);break;case bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ah:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case yo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ah:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,A=null,C=null,x=null,w.set(0,0,0),F=0,m=D,T=Te}return}_t=_t||mt,yt=yt||X,Jt=Jt||Q,(mt!==p||_t!==y)&&(n.blendEquationSeparate(ie[mt],ie[_t]),p=mt,y=_t),(X!==b||Q!==A||yt!==C||Jt!==x)&&(n.blendFuncSeparate(We[X],We[Q],We[yt],We[Jt]),b=X,A=Q,C=yt,x=Jt),(Ye.equals(w)===!1||gn!==F)&&(n.blendColor(Ye.r,Ye.g,Ye.b,gn),w.copy(Ye),F=gn),m=D,T=!1}function bn(D,mt){D.side===Ge?Ut(n.CULL_FACE):dt(n.CULL_FACE);let X=D.side===$e;mt&&(X=!X),se(X),D.blending===yo&&D.transparent===!1?B(Mi):B(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),o.setMask(D.colorWrite);let Q=D.stencilWrite;a.setTest(Q),Q&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Mt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):Ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function ce(D){D!==uf?(dt(n.CULL_FACE),D!==P&&(D===_h?n.cullFace(n.BACK):D===df?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ut(n.CULL_FACE),P=D}function Nt(D){D!==W&&(H&&n.lineWidth(D),W=D)}function Mt(D,mt,X){D?(dt(n.POLYGON_OFFSET_FILL),(O!==mt||I!==X)&&(n.polygonOffset(mt,X),O=mt,I=X)):Ut(n.POLYGON_OFFSET_FILL)}function pt(D){D?dt(n.SCISSOR_TEST):Ut(n.SCISSOR_TEST)}function S(D){D===void 0&&(D=n.TEXTURE0+N-1),tt!==D&&(n.activeTexture(D),tt=D)}function v(D,mt,X){X===void 0&&(tt===null?X=n.TEXTURE0+N-1:X=tt);let Q=ut[X];Q===void 0&&(Q={type:void 0,texture:void 0},ut[X]=Q),(Q.type!==D||Q.texture!==mt)&&(tt!==X&&(n.activeTexture(X),tt=X),n.bindTexture(D,mt||Ct[D]),Q.type=D,Q.texture=mt)}function k(){let D=ut[tt];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(D){fe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),fe.copy(D))}function xt(D){Y.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function de(D,mt){let X=c.get(mt);X===void 0&&(X=new WeakMap,c.set(mt,X));let Q=X.get(D);Q===void 0&&(Q=n.getUniformBlockIndex(mt,D.name),X.set(D,Q))}function te(D,mt){let Q=c.get(mt).get(D);l.get(mt)!==Q&&(n.uniformBlockBinding(mt,Q,D.__bindingPointIndex),l.set(mt,Q))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},tt=null,ut={},u={},d=new WeakMap,f=[],g=null,E=!1,m=null,p=null,b=null,A=null,y=null,C=null,x=null,w=new wt(0,0,0),F=0,T=!1,M=null,P=null,W=null,O=null,I=null,fe.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:dt,disable:Ut,bindFramebuffer:Wt,drawBuffers:jt,useProgram:Ae,setBlending:B,setMaterial:bn,setFlipSided:se,setCullFace:ce,setLineWidth:Nt,setPolygonOffset:Mt,setScissorTest:pt,activeTexture:S,bindTexture:v,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:nt,texImage2D:St,texImage3D:Gt,updateUBOMapping:de,uniformBlockBinding:te,texStorage2D:pe,texStorage3D:at,texSubImage2D:J,texSubImage3D:Dt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Tt,scissor:Xt,viewport:xt,reset:Be}}function yu(n,t,e,i){let s=Og(i);switch(e){case Bu:return n*t;case Hu:return n*t;case Nu:return n*t*2;case Ou:return n*t/s.components*s.byteLength;case vc:return n*t/s.components*s.byteLength;case zu:return n*t*2/s.components*s.byteLength;case Mc:return n*t*2/s.components*s.byteLength;case Uu:return n*t*3/s.components*s.byteLength;case Hn:return n*t*4/s.components*s.byteLength;case _c:return n*t*4/s.components*s.byteLength;case sa:case oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ra:case aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case il:case ol:return Math.max(n,16)*Math.max(t,8)/4;case nl:case sl:return Math.max(n,8)*Math.max(t,8)/2;case rl:case al:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ul:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case fl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case pl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case yl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _l:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case bl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case la:case Al:case Tl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ku:case Sl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xl:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Og(n){switch(n){case Ni:case Iu:return{byteLength:1,components:1};case cr:case Du:case Fn:return{byteLength:2,components:1};case Ec:case yc:return{byteLength:2,components:4};case Oi:case gc:case Bi:return{byteLength:4,components:1};case Lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function zg(n,t,e,i,s,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return f?new OffscreenCanvas(S,v):da("canvas")}function E(S,v,k){let K=1,nt=pt(S);if((nt.width>k||nt.height>k)&&(K=k/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let J=Math.floor(K*nt.width),Dt=Math.floor(K*nt.height);u===void 0&&(u=g(J,Dt));let Et=v?g(J,Dt):u;return Et.width=J,Et.height=Dt,Et.getContext("2d").drawImage(S,0,0,J,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+Dt+")."),Et}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(S,v,k,K,nt=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let J=v;if(v===n.RED&&(k===n.FLOAT&&(J=n.R32F),k===n.HALF_FLOAT&&(J=n.R16F),k===n.UNSIGNED_BYTE&&(J=n.R8)),v===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.R8UI),k===n.UNSIGNED_SHORT&&(J=n.R16UI),k===n.UNSIGNED_INT&&(J=n.R32UI),k===n.BYTE&&(J=n.R8I),k===n.SHORT&&(J=n.R16I),k===n.INT&&(J=n.R32I)),v===n.RG&&(k===n.FLOAT&&(J=n.RG32F),k===n.HALF_FLOAT&&(J=n.RG16F),k===n.UNSIGNED_BYTE&&(J=n.RG8)),v===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RG8UI),k===n.UNSIGNED_SHORT&&(J=n.RG16UI),k===n.UNSIGNED_INT&&(J=n.RG32UI),k===n.BYTE&&(J=n.RG8I),k===n.SHORT&&(J=n.RG16I),k===n.INT&&(J=n.RG32I)),v===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGB8UI),k===n.UNSIGNED_SHORT&&(J=n.RGB16UI),k===n.UNSIGNED_INT&&(J=n.RGB32UI),k===n.BYTE&&(J=n.RGB8I),k===n.SHORT&&(J=n.RGB16I),k===n.INT&&(J=n.RGB32I)),v===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),k===n.UNSIGNED_INT&&(J=n.RGBA32UI),k===n.BYTE&&(J=n.RGBA8I),k===n.SHORT&&(J=n.RGBA16I),k===n.INT&&(J=n.RGBA32I)),v===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),v===n.RGBA){let Dt=nt?Da:me.getTransfer(K);k===n.FLOAT&&(J=n.RGBA32F),k===n.HALF_FLOAT&&(J=n.RGBA16F),k===n.UNSIGNED_BYTE&&(J=Dt===we?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function y(S,v){let k;return S?v===null||v===Oi||v===xo?k=n.DEPTH24_STENCIL8:v===Bi?k=n.DEPTH32F_STENCIL8:v===cr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Oi||v===xo?k=n.DEPTH_COMPONENT24:v===Bi?k=n.DEPTH_COMPONENT32F:v===cr&&(k=n.DEPTH_COMPONENT16),k}function C(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Sn&&S.minFilter!==vi?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function x(S){let v=S.target;v.removeEventListener("dispose",x),F(v),v.isVideoTexture&&h.delete(v)}function w(S){let v=S.target;v.removeEventListener("dispose",w),M(v)}function F(S){let v=i.get(S);if(v.__webglInit===void 0)return;let k=S.source,K=d.get(k);if(K){let nt=K[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&T(S),Object.keys(K).length===0&&d.delete(k)}i.remove(S)}function T(S){let v=i.get(S);n.deleteTexture(v.__webglTexture);let k=S.source,K=d.get(k);delete K[v.__cacheKey],r.memory.textures--}function M(S){let v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let nt=0;nt<v.__webglFramebuffer[K].length;nt++)n.deleteFramebuffer(v.__webglFramebuffer[K][nt]);else n.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)n.deleteFramebuffer(v.__webglFramebuffer[K]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=S.textures;for(let K=0,nt=k.length;K<nt;K++){let J=i.get(k[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),r.memory.textures--),i.remove(k[K])}i.remove(S)}let P=0;function W(){P=0}function O(){let S=P;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),P+=1,S}function I(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function N(S,v){let k=i.get(S);if(S.isVideoTexture&&Nt(S),S.isRenderTargetTexture===!1&&S.version>0&&k.__version!==S.version){let K=S.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,S,v);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+v)}function H(S,v){let k=i.get(S);if(S.version>0&&k.__version!==S.version){Y(k,S,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+v)}function q(S,v){let k=i.get(S);if(S.version>0&&k.__version!==S.version){Y(k,S,v);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+v)}function z(S,v){let k=i.get(S);if(S.version>0&&k.__version!==S.version){rt(k,S,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+v)}let tt={[wn]:n.REPEAT,[Cs]:n.CLAMP_TO_EDGE,[el]:n.MIRRORED_REPEAT},ut={[Sn]:n.NEAREST,[zf]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[vi]:n.LINEAR,[l0]:n.LINEAR_MIPMAP_NEAREST,[Fs]:n.LINEAR_MIPMAP_LINEAR},At={[Wf]:n.NEVER,[Jf]:n.ALWAYS,[Xf]:n.LESS,[Vu]:n.LEQUAL,[qf]:n.EQUAL,[$f]:n.GEQUAL,[Yf]:n.GREATER,[Zf]:n.NOTEQUAL};function Ot(S,v){if(v.type===Bi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===vi||v.magFilter===l0||v.magFilter===Fr||v.magFilter===Fs||v.minFilter===vi||v.minFilter===l0||v.minFilter===Fr||v.minFilter===Fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,tt[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,tt[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,tt[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ut[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,At[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Sn||v.minFilter!==Fr&&v.minFilter!==Fs||v.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function fe(S,v){let k=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",x));let K=v.source,nt=d.get(K);nt===void 0&&(nt={},d.set(K,nt));let J=I(v);if(J!==S.__cacheKey){nt[J]===void 0&&(nt[J]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,k=!0),nt[J].usedTimes++;let Dt=nt[S.__cacheKey];Dt!==void 0&&(nt[S.__cacheKey].usedTimes--,Dt.usedTimes===0&&T(v)),S.__cacheKey=J,S.__webglTexture=nt[J].texture}return k}function Y(S,v,k){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);let nt=fe(S,v),J=v.source;e.bindTexture(K,S.__webglTexture,n.TEXTURE0+k);let Dt=i.get(J);if(J.version!==Dt.__version||nt===!0){e.activeTexture(n.TEXTURE0+k);let Et=me.getPrimaries(me.workingColorSpace),Tt=v.colorSpace===os?null:me.getPrimaries(v.colorSpace),pe=v.colorSpace===os||Et===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let at=E(v.image,!1,s.maxTextureSize);at=Mt(v,at);let St=o.convert(v.format,v.colorSpace),Gt=o.convert(v.type),Xt=A(v.internalFormat,St,Gt,v.colorSpace,v.isVideoTexture);Ot(K,v);let xt,de=v.mipmaps,te=v.isVideoTexture!==!0,Be=Dt.__version===void 0||nt===!0,D=J.dataReady,mt=C(v,at);if(v.isDepthTexture)Xt=y(v.format===Ro,v.type),Be&&(te?e.texStorage2D(n.TEXTURE_2D,1,Xt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Xt,at.width,at.height,0,St,Gt,null));else if(v.isDataTexture)if(de.length>0){te&&Be&&e.texStorage2D(n.TEXTURE_2D,mt,Xt,de[0].width,de[0].height);for(let X=0,Q=de.length;X<Q;X++)xt=de[X],te?D&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,xt.width,xt.height,St,Gt,xt.data):e.texImage2D(n.TEXTURE_2D,X,Xt,xt.width,xt.height,0,St,Gt,xt.data);v.generateMipmaps=!1}else te?(Be&&e.texStorage2D(n.TEXTURE_2D,mt,Xt,at.width,at.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,St,Gt,at.data)):e.texImage2D(n.TEXTURE_2D,0,Xt,at.width,at.height,0,St,Gt,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){te&&Be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Xt,de[0].width,de[0].height,at.depth);for(let X=0,Q=de.length;X<Q;X++)if(xt=de[X],v.format!==Hn)if(St!==null)if(te){if(D)if(v.layerUpdates.size>0){let _t=yu(xt.width,xt.height,v.format,v.type);for(let yt of v.layerUpdates){let Jt=xt.data.subarray(yt*_t/xt.data.BYTES_PER_ELEMENT,(yt+1)*_t/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,yt,xt.width,xt.height,1,St,Jt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,xt.width,xt.height,at.depth,St,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Xt,xt.width,xt.height,at.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,xt.width,xt.height,at.depth,St,Gt,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,Xt,xt.width,xt.height,at.depth,0,St,Gt,xt.data)}else{te&&Be&&e.texStorage2D(n.TEXTURE_2D,mt,Xt,de[0].width,de[0].height);for(let X=0,Q=de.length;X<Q;X++)xt=de[X],v.format!==Hn?St!==null?te?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,xt.width,xt.height,St,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,X,Xt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?D&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,xt.width,xt.height,St,Gt,xt.data):e.texImage2D(n.TEXTURE_2D,X,Xt,xt.width,xt.height,0,St,Gt,xt.data)}else if(v.isDataArrayTexture)if(te){if(Be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Xt,at.width,at.height,at.depth),D)if(v.layerUpdates.size>0){let X=yu(at.width,at.height,v.format,v.type);for(let Q of v.layerUpdates){let _t=at.data.subarray(Q*X/at.data.BYTES_PER_ELEMENT,(Q+1)*X/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,at.width,at.height,1,St,Gt,_t)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,St,Gt,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Xt,at.width,at.height,at.depth,0,St,Gt,at.data);else if(v.isData3DTexture)te?(Be&&e.texStorage3D(n.TEXTURE_3D,mt,Xt,at.width,at.height,at.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,St,Gt,at.data)):e.texImage3D(n.TEXTURE_3D,0,Xt,at.width,at.height,at.depth,0,St,Gt,at.data);else if(v.isFramebufferTexture){if(Be)if(te)e.texStorage2D(n.TEXTURE_2D,mt,Xt,at.width,at.height);else{let X=at.width,Q=at.height;for(let _t=0;_t<mt;_t++)e.texImage2D(n.TEXTURE_2D,_t,Xt,X,Q,0,St,Gt,null),X>>=1,Q>>=1}}else if(de.length>0){if(te&&Be){let X=pt(de[0]);e.texStorage2D(n.TEXTURE_2D,mt,Xt,X.width,X.height)}for(let X=0,Q=de.length;X<Q;X++)xt=de[X],te?D&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,St,Gt,xt):e.texImage2D(n.TEXTURE_2D,X,Xt,St,Gt,xt);v.generateMipmaps=!1}else if(te){if(Be){let X=pt(at);e.texStorage2D(n.TEXTURE_2D,mt,Xt,X.width,X.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Gt,at)}else e.texImage2D(n.TEXTURE_2D,0,Xt,St,Gt,at);m(v)&&p(K),Dt.__version=J.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function rt(S,v,k){if(v.image.length!==6)return;let K=fe(S,v),nt=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+k);let J=i.get(nt);if(nt.version!==J.__version||K===!0){e.activeTexture(n.TEXTURE0+k);let Dt=me.getPrimaries(me.workingColorSpace),Et=v.colorSpace===os?null:me.getPrimaries(v.colorSpace),Tt=v.colorSpace===os||Dt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let pe=v.isCompressedTexture||v.image[0].isCompressedTexture,at=v.image[0]&&v.image[0].isDataTexture,St=[];for(let Q=0;Q<6;Q++)!pe&&!at?St[Q]=E(v.image[Q],!0,s.maxCubemapSize):St[Q]=at?v.image[Q].image:v.image[Q],St[Q]=Mt(v,St[Q]);let Gt=St[0],Xt=o.convert(v.format,v.colorSpace),xt=o.convert(v.type),de=A(v.internalFormat,Xt,xt,v.colorSpace),te=v.isVideoTexture!==!0,Be=J.__version===void 0||K===!0,D=nt.dataReady,mt=C(v,Gt);Ot(n.TEXTURE_CUBE_MAP,v);let X;if(pe){te&&Be&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,de,Gt.width,Gt.height);for(let Q=0;Q<6;Q++){X=St[Q].mipmaps;for(let _t=0;_t<X.length;_t++){let yt=X[_t];v.format!==Hn?Xt!==null?te?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,yt.width,yt.height,Xt,yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,de,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,yt.width,yt.height,Xt,xt,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,de,yt.width,yt.height,0,Xt,xt,yt.data)}}}else{if(X=v.mipmaps,te&&Be){X.length>0&&mt++;let Q=pt(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,de,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(at){te?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St[Q].width,St[Q].height,Xt,xt,St[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,de,St[Q].width,St[Q].height,0,Xt,xt,St[Q].data);for(let _t=0;_t<X.length;_t++){let Jt=X[_t].image[Q].image;te?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,Jt.width,Jt.height,Xt,xt,Jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,de,Jt.width,Jt.height,0,Xt,xt,Jt.data)}}else{te?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Xt,xt,St[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,de,Xt,xt,St[Q]);for(let _t=0;_t<X.length;_t++){let yt=X[_t];te?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,Xt,xt,yt.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,de,Xt,xt,yt.image[Q])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),J.__version=nt.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Ct(S,v,k,K,nt,J){let Dt=o.convert(k.format,k.colorSpace),Et=o.convert(k.type),Tt=A(k.internalFormat,Dt,Et,k.colorSpace),pe=i.get(v),at=i.get(k);if(at.__renderTarget=v,!pe.__hasExternalTextures){let St=Math.max(1,v.width>>J),Gt=Math.max(1,v.height>>J);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,Tt,St,Gt,v.depth,0,Dt,Et,null):e.texImage2D(nt,J,Tt,St,Gt,0,Dt,Et,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),ce(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,nt,at.__webglTexture,0,se(v)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,nt,at.__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(S,v,k){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){let K=v.depthTexture,nt=K&&K.isDepthTexture?K.type:null,J=y(v.stencilBuffer,nt),Dt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=se(v);ce(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et,J,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,S)}else{let K=v.textures;for(let nt=0;nt<K.length;nt++){let J=K[nt],Dt=o.convert(J.format,J.colorSpace),Et=o.convert(J.type),Tt=A(J.internalFormat,Dt,Et,J.colorSpace),pe=se(v);k&&ce(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Tt,v.width,v.height):ce(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,Tt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Tt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ut(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),N(v.depthTexture,0);let nt=K.__webglTexture,J=se(v);if(v.depthTexture.format===vo)ce(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(v.depthTexture.format===Ro)ce(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Wt(S){let v=i.get(S),k=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let K=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){let nt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),v.__depthDisposeCallback=nt}v.__boundDepthTexture=K}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ut(v.__webglFramebuffer,S)}else if(k){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=n.createRenderbuffer(),dt(v.__webglDepthbuffer[K],S,!1);else{let nt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,J)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),dt(v.__webglDepthbuffer,S,!1);else{let K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(S,v,k){let K=i.get(S);v!==void 0&&Ct(K.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Wt(S)}function Ae(S){let v=S.texture,k=i.get(S),K=i.get(v);S.addEventListener("dispose",w);let nt=S.textures,J=S.isWebGLCubeRenderTarget===!0,Dt=nt.length>1;if(Dt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,r.memory.textures++),J){k.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[Et]=[];for(let Tt=0;Tt<v.mipmaps.length;Tt++)k.__webglFramebuffer[Et][Tt]=n.createFramebuffer()}else k.__webglFramebuffer[Et]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Et=0;Et<v.mipmaps.length;Et++)k.__webglFramebuffer[Et]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Dt)for(let Et=0,Tt=nt.length;Et<Tt;Et++){let pe=i.get(nt[Et]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),r.memory.textures++)}if(S.samples>0&&ce(S)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Et=0;Et<nt.length;Et++){let Tt=nt[Et];k.__webglColorRenderbuffer[Et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Et]);let pe=o.convert(Tt.format,Tt.colorSpace),at=o.convert(Tt.type),St=A(Tt.internalFormat,pe,at,Tt.colorSpace,S.isXRRenderTarget===!0),Gt=se(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,St,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,k.__webglColorRenderbuffer[Et])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(k.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ot(n.TEXTURE_CUBE_MAP,v);for(let Et=0;Et<6;Et++)if(v.mipmaps&&v.mipmaps.length>0)for(let Tt=0;Tt<v.mipmaps.length;Tt++)Ct(k.__webglFramebuffer[Et][Tt],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Tt);else Ct(k.__webglFramebuffer[Et],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let Et=0,Tt=nt.length;Et<Tt;Et++){let pe=nt[Et],at=i.get(pe);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),Ot(n.TEXTURE_2D,pe),Ct(k.__webglFramebuffer,S,pe,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,0),m(pe)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let Et=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Et=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Et,K.__webglTexture),Ot(Et,v),v.mipmaps&&v.mipmaps.length>0)for(let Tt=0;Tt<v.mipmaps.length;Tt++)Ct(k.__webglFramebuffer[Tt],S,v,n.COLOR_ATTACHMENT0,Et,Tt);else Ct(k.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,Et,0);m(v)&&p(Et),e.unbindTexture()}S.depthBuffer&&Wt(S)}function ie(S){let v=S.textures;for(let k=0,K=v.length;k<K;k++){let nt=v[k];if(m(nt)){let J=b(S),Dt=i.get(nt).__webglTexture;e.bindTexture(J,Dt),p(J),e.unbindTexture()}}}let We=[],B=[];function bn(S){if(S.samples>0){if(ce(S)===!1){let v=S.textures,k=S.width,K=S.height,nt=n.COLOR_BUFFER_BIT,J=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Dt=i.get(S),Et=v.length>1;if(Et)for(let Tt=0;Tt<v.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Tt=0;Tt<v.length;Tt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),Et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[Tt]);let pe=i.get(v[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,k,K,0,0,k,K,nt,n.NEAREST),l===!0&&(We.length=0,B.length=0,We.push(n.COLOR_ATTACHMENT0+Tt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(We.push(J),B.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,We))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Et)for(let Tt=0;Tt<v.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[Tt]);let pe=i.get(v[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,pe,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function se(S){return Math.min(s.maxSamples,S.samples)}function ce(S){let v=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Nt(S){let v=r.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function Mt(S,v){let k=S.colorSpace,K=S.format,nt=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||k!==us&&k!==os&&(me.getTransfer(k)===we?(K!==Hn||nt!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function pt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=W,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=z,this.rebindTextures=jt,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ce}function kg(n,t){function e(i,s=os){let o,r=me.getTransfer(s);if(i===Ni)return n.UNSIGNED_BYTE;if(i===Ec)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Iu)return n.BYTE;if(i===Du)return n.SHORT;if(i===cr)return n.UNSIGNED_SHORT;if(i===gc)return n.INT;if(i===Oi)return n.UNSIGNED_INT;if(i===Bi)return n.FLOAT;if(i===Fn)return n.HALF_FLOAT;if(i===Bu)return n.ALPHA;if(i===Uu)return n.RGB;if(i===Hn)return n.RGBA;if(i===Hu)return n.LUMINANCE;if(i===Nu)return n.LUMINANCE_ALPHA;if(i===vo)return n.DEPTH_COMPONENT;if(i===Ro)return n.DEPTH_STENCIL;if(i===Ou)return n.RED;if(i===vc)return n.RED_INTEGER;if(i===zu)return n.RG;if(i===Mc)return n.RG_INTEGER;if(i===_c)return n.RGBA_INTEGER;if(i===sa||i===oa||i===ra||i===aa)if(r===we)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===sa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===sa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===aa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nl||i===il||i===sl||i===ol)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===nl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===il)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ol)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rl||i===al||i===ll)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===rl||i===al)return r===we?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ll)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===El||i===yl||i===vl||i===Ml||i===_l||i===bl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===cl)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hl)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ul)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dl)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fl)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pl)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ml)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gl)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===El)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yl)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ml)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_l)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bl)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===Al||i===Tl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===la)return r===we?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Al)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ku||i===Sl||i===xl||i===Rl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===la)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Vl=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},j=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gg={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new j,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new j,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new j,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let E of t.hand.values()){let m=e.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new j;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wg=`
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

}`,Wl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Cn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Je({vertexShader:Vg,fragmentShader:Wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new Bt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xl=class extends ls{constructor(t,e){super();let i=this,s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,E=new Wl,m=e.getContextAttributes(),p=null,b=null,A=[],y=[],C=new it,x=null,w=new pn;w.viewport=new Fe;let F=new pn;F.viewport=new Fe;let T=[w,F],M=new Vl,P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let rt=A[Y];return rt===void 0&&(rt=new rr,A[Y]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Y){let rt=A[Y];return rt===void 0&&(rt=new rr,A[Y]=rt),rt.getGripSpace()},this.getHand=function(Y){let rt=A[Y];return rt===void 0&&(rt=new rr,A[Y]=rt),rt.getHandSpace()};function O(Y){let rt=y.indexOf(Y.inputSource);if(rt===-1)return;let Ct=A[rt];Ct!==void 0&&(Ct.update(Y.inputSource,Y.frame,c||r),Ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function I(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",N);for(let Y=0;Y<A.length;Y++){let rt=y[Y];rt!==null&&(y[Y]=null,A[Y].disconnect(rt))}P=null,W=null,E.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,fe.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",I),s.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ln(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,Ct=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Ro:vo,Ct=m.stencil?xo:Oi);let Ut={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ln(d.textureWidth,d.textureHeight,{format:Hn,type:Ni,depthTexture:new Po(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function N(Y){for(let rt=0;rt<Y.removed.length;rt++){let Ct=Y.removed[rt],dt=y.indexOf(Ct);dt>=0&&(y[dt]=null,A[dt].disconnect(Ct))}for(let rt=0;rt<Y.added.length;rt++){let Ct=Y.added[rt],dt=y.indexOf(Ct);if(dt===-1){for(let Wt=0;Wt<A.length;Wt++)if(Wt>=y.length){y.push(Ct),dt=Wt;break}else if(y[Wt]===null){y[Wt]=Ct,dt=Wt;break}if(dt===-1)break}let Ut=A[dt];Ut&&Ut.connect(Ct)}}let H=new R,q=new R;function z(Y,rt,Ct){H.setFromMatrixPosition(rt.matrixWorld),q.setFromMatrixPosition(Ct.matrixWorld);let dt=H.distanceTo(q),Ut=rt.projectionMatrix.elements,Wt=Ct.projectionMatrix.elements,jt=Ut[14]/(Ut[10]-1),Ae=Ut[14]/(Ut[10]+1),ie=(Ut[9]+1)/Ut[5],We=(Ut[9]-1)/Ut[5],B=(Ut[8]-1)/Ut[0],bn=(Wt[8]+1)/Wt[0],se=jt*B,ce=jt*bn,Nt=dt/(-B+bn),Mt=Nt*-B;if(rt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Mt),Y.translateZ(Nt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ut[10]===-1)Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let pt=jt+Nt,S=Ae+Nt,v=se-Mt,k=ce+(dt-Mt),K=ie*Ae/S*pt,nt=We*Ae/S*pt;Y.projectionMatrix.makePerspective(v,k,K,nt,pt,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function tt(Y,rt){rt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(rt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let rt=Y.near,Ct=Y.far;E.texture!==null&&(E.depthNear>0&&(rt=E.depthNear),E.depthFar>0&&(Ct=E.depthFar)),M.near=F.near=w.near=rt,M.far=F.far=w.far=Ct,(P!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,W=M.far),w.layers.mask=Y.layers.mask|2,F.layers.mask=Y.layers.mask|4,M.layers.mask=w.layers.mask|F.layers.mask;let dt=Y.parent,Ut=M.cameras;tt(M,dt);for(let Wt=0;Wt<Ut.length;Wt++)tt(Ut[Wt],dt);Ut.length===2?z(M,w,F):M.projectionMatrix.copy(w.projectionMatrix),ut(Y,M,dt)};function ut(Y,rt,Ct){Ct===null?Y.matrix.copy(rt.matrixWorld):(Y.matrix.copy(Ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(rt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ua*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(M)};let At=null;function Ot(Y,rt){if(h=rt.getViewerPose(c||r),g=rt,h!==null){let Ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let dt=!1;Ct.length!==M.cameras.length&&(M.cameras.length=0,dt=!0);for(let Wt=0;Wt<Ct.length;Wt++){let jt=Ct[Wt],Ae=null;if(f!==null)Ae=f.getViewport(jt);else{let We=u.getViewSubImage(d,jt);Ae=We.viewport,Wt===0&&(t.setRenderTargetTextures(b,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),t.setRenderTarget(b))}let ie=T[Wt];ie===void 0&&(ie=new pn,ie.layers.enable(Wt),ie.viewport=new Fe,T[Wt]=ie),ie.matrix.fromArray(jt.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(jt.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Wt===0&&(M.matrix.copy(ie.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),dt===!0&&M.cameras.push(ie)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){let Wt=u.getDepthInformation(Ct[0]);Wt&&Wt.isValid&&Wt.texture&&E.init(t,Wt,s.renderState)}}for(let Ct=0;Ct<A.length;Ct++){let dt=y[Ct],Ut=A[Ct];dt!==null&&Ut!==void 0&&Ut.update(dt,rt,c||r)}At&&At(Y,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),g=null}let fe=new Yu;fe.setAnimationLoop(Ot),this.setAnimationLoop=function(Y){At=Y},this.dispose=function(){}}},Ss=new zi,Xg=new Se;function qg(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,qu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,A,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),E(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),A=b.envMap,y=b.envMapRotation;A&&(m.envMap.value=A,Ss.copy(y),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),m.envMapRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(Ss)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Yg(n,t,e,i){let s={},o={},r=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){let y=A.program;i.uniformBlockBinding(b,y)}function c(b,A){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));let C=A.program;i.updateUBOMapping(b,C);let x=t.render.frame;o[b.id]!==x&&(d(b),o[b.id]=x)}function h(b){let A=u();b.__bindingPointIndex=A;let y=n.createBuffer(),C=b.__size,x=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function u(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let A=s[b.id],y=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let x=0,w=y.length;x<w;x++){let F=Array.isArray(y[x])?y[x]:[y[x]];for(let T=0,M=F.length;T<M;T++){let P=F[T];if(f(P,x,T,C)===!0){let W=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],I=0;for(let N=0;N<O.length;N++){let H=O[N],q=E(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,W+I,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,A,y,C){let x=b.value,w=A+"_"+y;if(C[w]===void 0)return typeof x=="number"||typeof x=="boolean"?C[w]=x:C[w]=x.clone(),!0;{let F=C[w];if(typeof x=="number"||typeof x=="boolean"){if(F!==x)return C[w]=x,!0}else if(F.equals(x)===!1)return F.copy(x),!0}return!1}function g(b){let A=b.uniforms,y=0,C=16;for(let w=0,F=A.length;w<F;w++){let T=Array.isArray(A[w])?A[w]:[A[w]];for(let M=0,P=T.length;M<P;M++){let W=T[M],O=Array.isArray(W.value)?W.value:[W.value];for(let I=0,N=O.length;I<N;I++){let H=O[I],q=E(H),z=y%C,tt=z%q.boundary,ut=z+tt;y+=tt,ut!==0&&C-ut<q.storage&&(y+=C-ut),W.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=q.storage}}}let x=y%C;return x>0&&(y+=C-x),b.__size=y,b.__cache={},this}function E(b){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),A}function m(b){let A=b.target;A.removeEventListener("dispose",m);let y=r.indexOf(A.__bindingPointIndex);r.splice(y,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete o[A.id]}function p(){for(let b in s)n.deleteBuffer(s[b]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}var ba=class{constructor(t={}){let{canvas:e=Qf(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;let g=new Uint32Array(4),E=new Int32Array(4),m=null,p=null,b=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=_i,this.toneMappingExposure=1;let y=this,C=!1,x=0,w=0,F=null,T=-1,M=null,P=new Fe,W=new Fe,O=null,I=new wt(0),N=0,H=e.width,q=e.height,z=1,tt=null,ut=null,At=new Fe(0,0,H,q),Ot=new Fe(0,0,H,q),fe=!1,Y=new hr,rt=!1,Ct=!1,dt=new Se,Ut=new Se,Wt=new R,jt=new Fe,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function We(){return F===null?z:1}let B=i;function bn(_,L){return e.getContext(_,L)}try{let _={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pc}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",yt,!1),B===null){let L="webgl2";if(B=bn(L,_),B===null)throw bn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let se,ce,Nt,Mt,pt,S,v,k,K,nt,J,Dt,Et,Tt,pe,at,St,Gt,Xt,xt,de,te,Be,D;function mt(){se=new c2(B),se.init(),te=new kg(B,se),ce=new i2(B,se,t,te),Nt=new Ng(B,se),ce.reverseDepthBuffer&&d&&Nt.buffers.depth.setReversed(!0),Mt=new d2(B),pt=new Sg,S=new zg(B,se,Nt,pt,ce,te,Mt),v=new o2(y),k=new l2(y),K=new vp(B),Be=new e2(B,K),nt=new h2(B,K,Mt,Be),J=new p2(B,nt,K,Mt),Xt=new f2(B,ce,S),at=new s2(pt),Dt=new Tg(y,v,k,se,ce,Be,at),Et=new qg(y,pt),Tt=new Rg,pe=new Dg(se),Gt=new t2(y,v,k,Nt,J,f,l),St=new Ug(y,J,ce),D=new Yg(B,Mt,ce,Nt),xt=new n2(B,se,Mt),de=new u2(B,se,Mt),Mt.programs=Dt.programs,y.capabilities=ce,y.extensions=se,y.properties=pt,y.renderLists=Tt,y.shadowMap=St,y.state=Nt,y.info=Mt}mt();let X=new Xl(y,B);this.xr=X,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let _=se.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=se.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(_){_!==void 0&&(z=_,this.setSize(H,q,!1))},this.getSize=function(_){return _.set(H,q)},this.setSize=function(_,L,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=_,q=L,e.width=Math.floor(_*z),e.height=Math.floor(L*z),G===!0&&(e.style.width=_+"px",e.style.height=L+"px"),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(H*z,q*z).floor()},this.setDrawingBufferSize=function(_,L,G){H=_,q=L,z=G,e.width=Math.floor(_*G),e.height=Math.floor(L*G),this.setViewport(0,0,_,L)},this.getCurrentViewport=function(_){return _.copy(P)},this.getViewport=function(_){return _.copy(At)},this.setViewport=function(_,L,G,V){_.isVector4?At.set(_.x,_.y,_.z,_.w):At.set(_,L,G,V),Nt.viewport(P.copy(At).multiplyScalar(z).round())},this.getScissor=function(_){return _.copy(Ot)},this.setScissor=function(_,L,G,V){_.isVector4?Ot.set(_.x,_.y,_.z,_.w):Ot.set(_,L,G,V),Nt.scissor(W.copy(Ot).multiplyScalar(z).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(_){Nt.setScissorTest(fe=_)},this.setOpaqueSort=function(_){tt=_},this.setTransparentSort=function(_){ut=_},this.getClearColor=function(_){return _.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(_=!0,L=!0,G=!0){let V=0;if(_){let U=!1;if(F!==null){let ct=F.texture.format;U=ct===_c||ct===Mc||ct===vc}if(U){let ct=F.texture.type,vt=ct===Ni||ct===Oi||ct===cr||ct===xo||ct===Ec||ct===yc,Ft=Gt.getClearColor(),Pt=Gt.getClearAlpha(),Zt=Ft.r,Kt=Ft.g,It=Ft.b;vt?(g[0]=Zt,g[1]=Kt,g[2]=It,g[3]=Pt,B.clearBufferuiv(B.COLOR,0,g)):(E[0]=Zt,E[1]=Kt,E[2]=It,E[3]=Pt,B.clearBufferiv(B.COLOR,0,E))}else V|=B.COLOR_BUFFER_BIT}L&&(V|=B.DEPTH_BUFFER_BIT),G&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Tt.dispose(),pe.dispose(),pt.dispose(),v.dispose(),k.dispose(),J.dispose(),Be.dispose(),D.dispose(),Dt.dispose(),X.dispose(),X.removeEventListener("sessionstart",fh),X.removeEventListener("sessionend",ph),vs.stop()};function Q(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let _=Mt.autoReset,L=St.enabled,G=St.autoUpdate,V=St.needsUpdate,U=St.type;mt(),Mt.autoReset=_,St.enabled=L,St.autoUpdate=G,St.needsUpdate=V,St.type=U}function yt(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Jt(_){let L=_.target;L.removeEventListener("dispose",Jt),Ye(L)}function Ye(_){gn(_),pt.remove(_)}function gn(_){let L=pt.get(_).programs;L!==void 0&&(L.forEach(function(G){Dt.releaseProgram(G)}),_.isShaderMaterial&&Dt.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,G,V,U,ct){L===null&&(L=Ae);let vt=U.isMesh&&U.matrixWorld.determinant()<0,Ft=lf(_,L,G,V,U);Nt.setMaterial(V,vt);let Pt=G.index,Zt=1;if(V.wireframe===!0){if(Pt=nt.getWireframeAttribute(G),Pt===void 0)return;Zt=2}let Kt=G.drawRange,It=G.attributes.position,ye=Kt.start*Zt,Ue=(Kt.start+Kt.count)*Zt;ct!==null&&(ye=Math.max(ye,ct.start*Zt),Ue=Math.min(Ue,(ct.start+ct.count)*Zt)),Pt!==null?(ye=Math.max(ye,0),Ue=Math.min(Ue,Pt.count)):It!=null&&(ye=Math.max(ye,0),Ue=Math.min(Ue,It.count));let He=Ue-ye;if(He<0||He===1/0)return;Be.setup(U,V,Ft,G,Pt);let Rn,ve=xt;if(Pt!==null&&(Rn=K.get(Pt),ve=de,ve.setIndex(Rn)),U.isMesh)V.wireframe===!0?(Nt.setLineWidth(V.wireframeLinewidth*We()),ve.setMode(B.LINES)):ve.setMode(B.TRIANGLES);else if(U.isLine){let Lt=V.linewidth;Lt===void 0&&(Lt=1),Nt.setLineWidth(Lt*We()),U.isLineSegments?ve.setMode(B.LINES):U.isLineLoop?ve.setMode(B.LINE_LOOP):ve.setMode(B.LINE_STRIP)}else U.isPoints?ve.setMode(B.POINTS):U.isSprite&&ve.setMode(B.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ve.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ve.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Lt=U._multiDrawStarts,Ri=U._multiDrawCounts,Me=U._multiDrawCount,oi=Pt?K.get(Pt).bytesPerElement:1,Ks=pt.get(V).currentProgram.getUniforms();for(let Ln=0;Ln<Me;Ln++)Ks.setValue(B,"_gl_DrawID",Ln),ve.render(Lt[Ln]/oi,Ri[Ln])}else if(U.isInstancedMesh)ve.renderInstances(ye,He,U.count);else if(G.isInstancedBufferGeometry){let Lt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ri=Math.min(G.instanceCount,Lt);ve.renderInstances(ye,He,Ri)}else ve.render(ye,He)};function Te(_,L,G){_.transparent===!0&&_.side===Ge&&_.forceSinglePass===!1?(_.side=$e,_.needsUpdate=!0,Cr(_,L,G),_.side=bi,_.needsUpdate=!0,Cr(_,L,G),_.side=Ge):Cr(_,L,G)}this.compile=function(_,L,G=null){G===null&&(G=_),p=pe.get(G),p.init(L),A.push(p),G.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),_!==G&&_.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let V=new Set;return _.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ct=U.material;if(ct)if(Array.isArray(ct))for(let vt=0;vt<ct.length;vt++){let Ft=ct[vt];Te(Ft,G,U),V.add(Ft)}else Te(ct,G,U),V.add(ct)}),A.pop(),p=null,V},this.compileAsync=function(_,L,G=null){let V=this.compile(_,L,G);return new Promise(U=>{function ct(){if(V.forEach(function(vt){pt.get(vt).currentProgram.isReady()&&V.delete(vt)}),V.size===0){U(_);return}setTimeout(ct,10)}se.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let si=null;function xi(_){si&&si(_)}function fh(){vs.stop()}function ph(){vs.start()}let vs=new Yu;vs.setAnimationLoop(xi),typeof self<"u"&&vs.setContext(self),this.setAnimationLoop=function(_){si=_,X.setAnimationLoop(_),_===null?vs.stop():vs.start()},X.addEventListener("sessionstart",fh),X.addEventListener("sessionend",ph),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(L),L=X.getCamera()),_.isScene===!0&&_.onBeforeRender(y,_,L,F),p=pe.get(_,A.length),p.init(L),A.push(p),Ut.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(Ut),Ct=this.localClippingEnabled,rt=at.init(this.clippingPlanes,Ct),m=Tt.get(_,b.length),m.init(),b.push(m),X.enabled===!0&&X.isPresenting===!0){let ct=y.xr.getDepthSensingMesh();ct!==null&&a0(ct,L,-1/0,y.sortObjects)}a0(_,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(tt,ut),ie=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ie&&Gt.addToRenderList(m,_),this.info.render.frame++,rt===!0&&at.beginShadows();let G=p.state.shadowsArray;St.render(G,_,L),rt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,U=m.transmissive;if(p.setupLights(),L.isArrayCamera){let ct=L.cameras;if(U.length>0)for(let vt=0,Ft=ct.length;vt<Ft;vt++){let Pt=ct[vt];gh(V,U,_,Pt)}ie&&Gt.render(_);for(let vt=0,Ft=ct.length;vt<Ft;vt++){let Pt=ct[vt];mh(m,_,Pt,Pt.viewport)}}else U.length>0&&gh(V,U,_,L),ie&&Gt.render(_),mh(m,_,L);F!==null&&(S.updateMultisampleRenderTarget(F),S.updateRenderTargetMipmap(F)),_.isScene===!0&&_.onAfterRender(y,_,L),Be.resetDefaultState(),T=-1,M=null,A.pop(),A.length>0?(p=A[A.length-1],rt===!0&&at.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function a0(_,L,G,V){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)G=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Y.intersectsSprite(_)){V&&jt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ut);let vt=J.update(_),Ft=_.material;Ft.visible&&m.push(_,vt,Ft,G,jt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Y.intersectsObject(_))){let vt=J.update(_),Ft=_.material;if(V&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),jt.copy(_.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),jt.copy(vt.boundingSphere.center)),jt.applyMatrix4(_.matrixWorld).applyMatrix4(Ut)),Array.isArray(Ft)){let Pt=vt.groups;for(let Zt=0,Kt=Pt.length;Zt<Kt;Zt++){let It=Pt[Zt],ye=Ft[It.materialIndex];ye&&ye.visible&&m.push(_,vt,ye,G,jt.z,It)}}else Ft.visible&&m.push(_,vt,Ft,G,jt.z,null)}}let ct=_.children;for(let vt=0,Ft=ct.length;vt<Ft;vt++)a0(ct[vt],L,G,V)}function mh(_,L,G,V){let U=_.opaque,ct=_.transmissive,vt=_.transparent;p.setupLightsView(G),rt===!0&&at.setGlobalState(y.clippingPlanes,G),V&&Nt.viewport(P.copy(V)),U.length>0&&wr(U,L,G),ct.length>0&&wr(ct,L,G),vt.length>0&&wr(vt,L,G),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function gh(_,L,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new ln(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Fn:Ni,minFilter:Fs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let ct=p.state.transmissionRenderTarget[V.id],vt=V.viewport||P;ct.setSize(vt.z,vt.w);let Ft=y.getRenderTarget();y.setRenderTarget(ct),y.getClearColor(I),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear(),ie&&Gt.render(G);let Pt=y.toneMapping;y.toneMapping=_i;let Zt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),rt===!0&&at.setGlobalState(y.clippingPlanes,V),wr(_,G,V),S.updateMultisampleRenderTarget(ct),S.updateRenderTargetMipmap(ct),se.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let It=0,ye=L.length;It<ye;It++){let Ue=L[It],He=Ue.object,Rn=Ue.geometry,ve=Ue.material,Lt=Ue.group;if(ve.side===Ge&&He.layers.test(V.layers)){let Ri=ve.side;ve.side=$e,ve.needsUpdate=!0,Eh(He,G,V,Rn,ve,Lt),ve.side=Ri,ve.needsUpdate=!0,Kt=!0}}Kt===!0&&(S.updateMultisampleRenderTarget(ct),S.updateRenderTargetMipmap(ct))}y.setRenderTarget(Ft),y.setClearColor(I,N),Zt!==void 0&&(V.viewport=Zt),y.toneMapping=Pt}function wr(_,L,G){let V=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ct=_.length;U<ct;U++){let vt=_[U],Ft=vt.object,Pt=vt.geometry,Zt=V===null?vt.material:V,Kt=vt.group;Ft.layers.test(G.layers)&&Eh(Ft,L,G,Pt,Zt,Kt)}}function Eh(_,L,G,V,U,ct){_.onBeforeRender(y,L,G,V,U,ct),_.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),U.onBeforeRender(y,L,G,V,_,ct),U.transparent===!0&&U.side===Ge&&U.forceSinglePass===!1?(U.side=$e,U.needsUpdate=!0,y.renderBufferDirect(G,L,V,U,_,ct),U.side=bi,U.needsUpdate=!0,y.renderBufferDirect(G,L,V,U,_,ct),U.side=Ge):y.renderBufferDirect(G,L,V,U,_,ct),_.onAfterRender(y,L,G,V,U,ct)}function Cr(_,L,G){L.isScene!==!0&&(L=Ae);let V=pt.get(_),U=p.state.lights,ct=p.state.shadowsArray,vt=U.state.version,Ft=Dt.getParameters(_,U.state,ct,L,G),Pt=Dt.getProgramCacheKey(Ft),Zt=V.programs;V.environment=_.isMeshStandardMaterial?L.environment:null,V.fog=L.fog,V.envMap=(_.isMeshStandardMaterial?k:v).get(_.envMap||V.environment),V.envMapRotation=V.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,Zt===void 0&&(_.addEventListener("dispose",Jt),Zt=new Map,V.programs=Zt);let Kt=Zt.get(Pt);if(Kt!==void 0){if(V.currentProgram===Kt&&V.lightsStateVersion===vt)return vh(_,Ft),Kt}else Ft.uniforms=Dt.getUniforms(_),_.onBeforeCompile(Ft,y),Kt=Dt.acquireProgram(Ft,Pt),Zt.set(Pt,Kt),V.uniforms=Ft.uniforms;let It=V.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(It.clippingPlanes=at.uniform),vh(_,Ft),V.needsLights=hf(_),V.lightsStateVersion=vt,V.needsLights&&(It.ambientLightColor.value=U.state.ambient,It.lightProbe.value=U.state.probe,It.directionalLights.value=U.state.directional,It.directionalLightShadows.value=U.state.directionalShadow,It.spotLights.value=U.state.spot,It.spotLightShadows.value=U.state.spotShadow,It.rectAreaLights.value=U.state.rectArea,It.ltc_1.value=U.state.rectAreaLTC1,It.ltc_2.value=U.state.rectAreaLTC2,It.pointLights.value=U.state.point,It.pointLightShadows.value=U.state.pointShadow,It.hemisphereLights.value=U.state.hemi,It.directionalShadowMap.value=U.state.directionalShadowMap,It.directionalShadowMatrix.value=U.state.directionalShadowMatrix,It.spotShadowMap.value=U.state.spotShadowMap,It.spotLightMatrix.value=U.state.spotLightMatrix,It.spotLightMap.value=U.state.spotLightMap,It.pointShadowMap.value=U.state.pointShadowMap,It.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Kt,V.uniformsList=null,Kt}function yh(_){if(_.uniformsList===null){let L=_.currentProgram.getUniforms();_.uniformsList=_o.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function vh(_,L){let G=pt.get(_);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function lf(_,L,G,V,U){L.isScene!==!0&&(L=Ae),S.resetTextureUnits();let ct=L.fog,vt=V.isMeshStandardMaterial?L.environment:null,Ft=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:us,Pt=(V.isMeshStandardMaterial?k:v).get(V.envMap||vt),Zt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Kt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),It=!!G.morphAttributes.position,ye=!!G.morphAttributes.normal,Ue=!!G.morphAttributes.color,He=_i;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(He=y.toneMapping);let Rn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ve=Rn!==void 0?Rn.length:0,Lt=pt.get(V),Ri=p.state.lights;if(rt===!0&&(Ct===!0||_!==M)){let Xn=_===M&&V.id===T;at.setState(V,_,Xn)}let Me=!1;V.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Ri.state.version||Lt.outputColorSpace!==Ft||U.isBatchedMesh&&Lt.batching===!1||!U.isBatchedMesh&&Lt.batching===!0||U.isBatchedMesh&&Lt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Lt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Lt.instancing===!1||!U.isInstancedMesh&&Lt.instancing===!0||U.isSkinnedMesh&&Lt.skinning===!1||!U.isSkinnedMesh&&Lt.skinning===!0||U.isInstancedMesh&&Lt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Lt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Lt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Lt.instancingMorph===!1&&U.morphTexture!==null||Lt.envMap!==Pt||V.fog===!0&&Lt.fog!==ct||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==at.numPlanes||Lt.numIntersection!==at.numIntersection)||Lt.vertexAlphas!==Zt||Lt.vertexTangents!==Kt||Lt.morphTargets!==It||Lt.morphNormals!==ye||Lt.morphColors!==Ue||Lt.toneMapping!==He||Lt.morphTargetsCount!==ve)&&(Me=!0):(Me=!0,Lt.__version=V.version);let oi=Lt.currentProgram;Me===!0&&(oi=Cr(V,L,U));let Ks=!1,Ln=!1,Zo=!1,Ne=oi.getUniforms(),gi=Lt.uniforms;if(Nt.useProgram(oi.program)&&(Ks=!0,Ln=!0,Zo=!0),V.id!==T&&(T=V.id,Ln=!0),Ks||M!==_){Nt.buffers.depth.getReversed()?(dt.copy(_.projectionMatrix),tp(dt),ep(dt),Ne.setValue(B,"projectionMatrix",dt)):Ne.setValue(B,"projectionMatrix",_.projectionMatrix),Ne.setValue(B,"viewMatrix",_.matrixWorldInverse);let Ki=Ne.map.cameraPosition;Ki!==void 0&&Ki.setValue(B,Wt.setFromMatrixPosition(_.matrixWorld)),ce.logarithmicDepthBuffer&&Ne.setValue(B,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ne.setValue(B,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,Ln=!0,Zo=!0)}if(U.isSkinnedMesh){Ne.setOptional(B,U,"bindMatrix"),Ne.setOptional(B,U,"bindMatrixInverse");let Xn=U.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),Ne.setValue(B,"boneTexture",Xn.boneTexture,S))}U.isBatchedMesh&&(Ne.setOptional(B,U,"batchingTexture"),Ne.setValue(B,"batchingTexture",U._matricesTexture,S),Ne.setOptional(B,U,"batchingIdTexture"),Ne.setValue(B,"batchingIdTexture",U._indirectTexture,S),Ne.setOptional(B,U,"batchingColorTexture"),U._colorsTexture!==null&&Ne.setValue(B,"batchingColorTexture",U._colorsTexture,S));let $o=G.morphAttributes;if(($o.position!==void 0||$o.normal!==void 0||$o.color!==void 0)&&Xt.update(U,G,oi),(Ln||Lt.receiveShadow!==U.receiveShadow)&&(Lt.receiveShadow=U.receiveShadow,Ne.setValue(B,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(gi.envMap.value=Pt,gi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&L.environment!==null&&(gi.envMapIntensity.value=L.environmentIntensity),Ln&&(Ne.setValue(B,"toneMappingExposure",y.toneMappingExposure),Lt.needsLights&&cf(gi,Zo),ct&&V.fog===!0&&Et.refreshFogUniforms(gi,ct),Et.refreshMaterialUniforms(gi,V,z,q,p.state.transmissionRenderTarget[_.id]),_o.upload(B,yh(Lt),gi,S)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(_o.upload(B,yh(Lt),gi,S),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ne.setValue(B,"center",U.center),Ne.setValue(B,"modelViewMatrix",U.modelViewMatrix),Ne.setValue(B,"normalMatrix",U.normalMatrix),Ne.setValue(B,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Xn=V.uniformsGroups;for(let Ki=0,Qi=Xn.length;Ki<Qi;Ki++){let Mh=Xn[Ki];D.update(Mh,oi),D.bind(Mh,oi)}}return oi}function cf(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function hf(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(_,L,G){pt.get(_.texture).__webglTexture=L,pt.get(_.depthTexture).__webglTexture=G;let V=pt.get(_);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,L){let G=pt.get(_);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(_,L=0,G=0){F=_,x=L,w=G;let V=!0,U=null,ct=!1,vt=!1;if(_){let Pt=pt.get(_);if(Pt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(B.FRAMEBUFFER,null),V=!1;else if(Pt.__webglFramebuffer===void 0)S.setupRenderTarget(_);else if(Pt.__hasExternalTextures)S.rebindTextures(_,pt.get(_.texture).__webglTexture,pt.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let It=_.depthTexture;if(Pt.__boundDepthTexture!==It){if(It!==null&&pt.has(It)&&(_.width!==It.image.width||_.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(_)}}let Zt=_.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(vt=!0);let Kt=pt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Kt[L])?U=Kt[L][G]:U=Kt[L],ct=!0):_.samples>0&&S.useMultisampledRTT(_)===!1?U=pt.get(_).__webglMultisampledFramebuffer:Array.isArray(Kt)?U=Kt[G]:U=Kt,P.copy(_.viewport),W.copy(_.scissor),O=_.scissorTest}else P.copy(At).multiplyScalar(z).floor(),W.copy(Ot).multiplyScalar(z).floor(),O=fe;if(Nt.bindFramebuffer(B.FRAMEBUFFER,U)&&V&&Nt.drawBuffers(_,U),Nt.viewport(P),Nt.scissor(W),Nt.setScissorTest(O),ct){let Pt=pt.get(_.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+L,Pt.__webglTexture,G)}else if(vt){let Pt=pt.get(_.texture),Zt=L||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pt.__webglTexture,G||0,Zt)}T=-1},this.readRenderTargetPixels=function(_,L,G,V,U,ct,vt){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=pt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&vt!==void 0&&(Ft=Ft[vt]),Ft){Nt.bindFramebuffer(B.FRAMEBUFFER,Ft);try{let Pt=_.texture,Zt=Pt.format,Kt=Pt.type;if(!ce.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-V&&G>=0&&G<=_.height-U&&B.readPixels(L,G,V,U,te.convert(Zt),te.convert(Kt),ct)}finally{let Pt=F!==null?pt.get(F).__webglFramebuffer:null;Nt.bindFramebuffer(B.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(_,L,G,V,U,ct,vt){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=pt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&vt!==void 0&&(Ft=Ft[vt]),Ft){let Pt=_.texture,Zt=Pt.format,Kt=Pt.type;if(!ce.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=_.width-V&&G>=0&&G<=_.height-U){Nt.bindFramebuffer(B.FRAMEBUFFER,Ft);let It=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,It),B.bufferData(B.PIXEL_PACK_BUFFER,ct.byteLength,B.STREAM_READ),B.readPixels(L,G,V,U,te.convert(Zt),te.convert(Kt),0);let ye=F!==null?pt.get(F).__webglFramebuffer:null;Nt.bindFramebuffer(B.FRAMEBUFFER,ye);let Ue=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jf(B,Ue,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,It),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ct),B.deleteBuffer(It),B.deleteSync(Ue),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,L=null,G=0){_.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,_=arguments[1]);let V=Math.pow(2,-G),U=Math.floor(_.image.width*V),ct=Math.floor(_.image.height*V),vt=L!==null?L.x:0,Ft=L!==null?L.y:0;S.setTexture2D(_,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,vt,Ft,U,ct),Nt.unbindTexture()},this.copyTextureToTexture=function(_,L,G=null,V=null,U=0){_.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,_=arguments[1],L=arguments[2],U=arguments[3]||0,G=null);let ct,vt,Ft,Pt,Zt,Kt,It,ye,Ue,He=_.isCompressedTexture?_.mipmaps[U]:_.image;G!==null?(ct=G.max.x-G.min.x,vt=G.max.y-G.min.y,Ft=G.isBox3?G.max.z-G.min.z:1,Pt=G.min.x,Zt=G.min.y,Kt=G.isBox3?G.min.z:0):(ct=He.width,vt=He.height,Ft=He.depth||1,Pt=0,Zt=0,Kt=0),V!==null?(It=V.x,ye=V.y,Ue=V.z):(It=0,ye=0,Ue=0);let Rn=te.convert(L.format),ve=te.convert(L.type),Lt;L.isData3DTexture?(S.setTexture3D(L,0),Lt=B.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(S.setTexture2DArray(L,0),Lt=B.TEXTURE_2D_ARRAY):(S.setTexture2D(L,0),Lt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,L.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,L.unpackAlignment);let Ri=B.getParameter(B.UNPACK_ROW_LENGTH),Me=B.getParameter(B.UNPACK_IMAGE_HEIGHT),oi=B.getParameter(B.UNPACK_SKIP_PIXELS),Ks=B.getParameter(B.UNPACK_SKIP_ROWS),Ln=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,He.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,He.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Pt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Zt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Kt);let Zo=_.isDataArrayTexture||_.isData3DTexture,Ne=L.isDataArrayTexture||L.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){let gi=pt.get(_),$o=pt.get(L),Xn=pt.get(gi.__renderTarget),Ki=pt.get($o.__renderTarget);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,Xn.__webglFramebuffer),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let Qi=0;Qi<Ft;Qi++)Zo&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pt.get(_).__webglTexture,U,Kt+Qi),_.isDepthTexture?(Ne&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pt.get(L).__webglTexture,U,Ue+Qi),B.blitFramebuffer(Pt,Zt,ct,vt,It,ye,ct,vt,B.DEPTH_BUFFER_BIT,B.NEAREST)):Ne?B.copyTexSubImage3D(Lt,U,It,ye,Ue+Qi,Pt,Zt,ct,vt):B.copyTexSubImage2D(Lt,U,It,ye,Ue+Qi,Pt,Zt,ct,vt);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ne?_.isDataTexture||_.isData3DTexture?B.texSubImage3D(Lt,U,It,ye,Ue,ct,vt,Ft,Rn,ve,He.data):L.isCompressedArrayTexture?B.compressedTexSubImage3D(Lt,U,It,ye,Ue,ct,vt,Ft,Rn,He.data):B.texSubImage3D(Lt,U,It,ye,Ue,ct,vt,Ft,Rn,ve,He):_.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,U,It,ye,ct,vt,Rn,ve,He.data):_.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,U,It,ye,He.width,He.height,Rn,He.data):B.texSubImage2D(B.TEXTURE_2D,U,It,ye,ct,vt,Rn,ve,He);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ri),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Me),B.pixelStorei(B.UNPACK_SKIP_PIXELS,oi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ks),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ln),U===0&&L.generateMipmaps&&B.generateMipmap(Lt),Nt.unbindTexture()},this.copyTextureToTexture3D=function(_,L,G=null,V=null,U=0){return _.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,_=arguments[2],L=arguments[3],U=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,L,G,V,U)},this.initRenderTarget=function(_){pt.get(_).__webglFramebuffer===void 0&&S.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?S.setTextureCube(_,0):_.isData3DTexture?S.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?S.setTexture2DArray(_,0):S.setTexture2D(_,0),Nt.unbindTexture()},this.resetState=function(){x=0,w=0,F=null,Nt.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var ur=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Is=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ql=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Cl,this.updateRanges=[],this.version=0,this.uuid=as()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=as()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=as()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},An=new R,Aa=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array),o=Ce(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nn=class extends ki{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fo,tr=new R,po=new R,mo=new R,go=new it,er=new it,Qu=new Se,Kr=new R,nr=new R,Qr=new R,vu=new it,N0=new it,Mu=new it,Zn=class extends en{constructor(t=new Nn){if(super(),this.isSprite=!0,this.type="Sprite",fo===void 0){fo=new cn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ql(e,5);fo.setIndex([0,1,2,0,2,3]),fo.setAttribute("position",new Aa(i,3,0,!1)),fo.setAttribute("uv",new Aa(i,2,3,!1))}this.geometry=fo,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),po.setFromMatrixScale(this.matrixWorld),Qu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&po.multiplyScalar(-mo.z);let i=this.material.rotation,s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));let r=this.center;jr(Kr.set(-.5,-.5,0),mo,r,po,s,o),jr(nr.set(.5,-.5,0),mo,r,po,s,o),jr(Qr.set(.5,.5,0),mo,r,po,s,o),vu.set(0,0),N0.set(1,0),Mu.set(1,1);let a=t.ray.intersectTriangle(Kr,nr,Qr,!1,tr);if(a===null&&(jr(nr.set(-.5,.5,0),mo,r,po,s,o),N0.set(0,1),a=t.ray.intersectTriangle(Kr,Qr,nr,!1,tr),a===null))return;let l=t.ray.origin.distanceTo(tr);l<t.near||l>t.far||e.push({distance:l,point:tr.clone(),uv:rs.getInterpolation(tr,Kr,nr,Qr,vu,N0,Mu,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function jr(n,t,e,i,s,o){go.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(er.x=o*go.x-s*go.y,er.y=s*go.x+o*go.y):er.copy(go),n.copy(t),n.x+=er.x,n.y+=er.y,n.applyMatrix4(Qu)}var Ta=class extends Cn{constructor(t=null,e=1,i=1,s,o,r,a,l,c=Sn,h=Sn,u,d){super(null,r,a,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dr=class extends ki{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_u=new Se,Yl=new ma,ta=new wo,ea=new R,Sa=class extends en{constructor(t=new cn,e=new dr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),ta.radius+=o,t.ray.intersectsSphere(ta)===!1)return;_u.copy(s).invert(),Yl.copy(t.ray).applyMatrix4(_u);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,E=f;g<E;g++){let m=c.getX(g);ea.fromBufferAttribute(u,m),bu(ea,m,l,s,t,e,this)}}else{let d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,E=f;g<E;g++)ea.fromBufferAttribute(u,g),bu(ea,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function bu(n,t,e,i,s,o,r){let a=Yl.distanceSqToPoint(n);if(a<e){let l=new R;Yl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var mn=class extends Cn{constructor(t,e,i,s,o,r,a,l,c){super(t,e,i,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,o=i.length,r;e?r=e:r=t*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(o-1);let h=i[s],d=i[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);let r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new it:new R);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new R,s=[],o=[],r=[],a=new R,l=new Se;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new R)}o[0]=new R,r[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(fn(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(fn(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fr=class extends $n{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){let i=e,s=Math.PI*2,o=this.aEndAngle-this.aStartAngle,r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);let a=this.aStartAngle+t*o,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Zl=class extends fr{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Ac(){let n=0,t=0,e=0,i=0;function s(o,r,a,l){n=o,t=a,e=-3*o+3*r-2*a-l,i=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){let r=o*o,a=r*o;return n+t*o+e*r+i*a}}}var na=new R,O0=new Ac,z0=new Ac,k0=new Ac,$l=class extends $n{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new R){let i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t,a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(na.subVectors(s[0],s[1]).add(s[0]),c=na);let u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(na.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=na),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),E=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),O0.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,E,m),z0.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,E,m),k0.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(O0.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),z0.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),k0.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(O0.calc(l),z0.calc(l),k0.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Au(n,t,e,i,s){let o=(i-t)*.5,r=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+o+r)*l+(-3*e+3*i-2*o-r)*a+o*n+e}function Zg(n,t){let e=1-n;return e*e*t}function $g(n,t){return 2*(1-n)*n*t}function Jg(n,t){return n*n*t}function ar(n,t,e,i){return Zg(n,t)+$g(n,e)+Jg(n,i)}function Kg(n,t){let e=1-n;return e*e*e*t}function Qg(n,t){let e=1-n;return 3*e*e*n*t}function jg(n,t){return 3*(1-n)*n*n*t}function tE(n,t){return n*n*n*t}function lr(n,t,e,i,s){return Kg(n,t)+Qg(n,e)+jg(n,i)+tE(n,s)}var xa=class extends $n{constructor(t=new it,e=new it,i=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new it){let i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(lr(t,s.x,o.x,r.x,a.x),lr(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jl=class extends $n{constructor(t=new R,e=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new R){let i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(lr(t,s.x,o.x,r.x,a.x),lr(t,s.y,o.y,r.y,a.y),lr(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ra=class extends $n{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kl=class extends $n{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wa=class extends $n{constructor(t=new it,e=new it,i=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new it){let i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(ar(t,s.x,o.x,r.x),ar(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ql=class extends $n{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(ar(t,s.x,o.x,r.x),ar(t,s.y,o.y,r.y),ar(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ca=class extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(Au(a,l.x,c.x,h.x,u.x),Au(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new it().fromArray(s))}return this}},Tu=Object.freeze({__proto__:null,ArcCurve:Zl,CatmullRomCurve3:$l,CubicBezierCurve:xa,CubicBezierCurve3:Jl,EllipseCurve:fr,LineCurve:Ra,LineCurve3:Kl,QuadraticBezierCurve:wa,QuadraticBezierCurve3:Ql,SplineCurve:Ca}),jl=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),o=0;for(;o<s.length;){if(s[o]>=i){let r=s[o]-i,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,o=this.curves;s<o.length;s++){let r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Tu[s.type]().fromJSON(s))}return this}},tc=class extends jl{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ra(this.currentPoint.clone(),new it(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let o=new wa(this.currentPoint.clone(),new it(t,e),new it(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){let a=new xa(this.currentPoint.clone(),new it(t,e),new it(i,s),new it(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ca(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,o,r,a,l),this}absellipse(t,e,i,s,o,r,a,l){let c=new fr(t,e,i,s,o,r,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},cs=class n extends cn{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=fn(s,0,Math.PI*2);let o=[],r=[],a=[],l=[],c=[],h=1/e,u=new R,d=new it,f=new R,g=new R,E=new R,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,E.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(E.x,E.y,E.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=E.x,f.y+=E.y,f.z+=E.z,f.normalize(),l.push(f.x,f.y,f.z),E.copy(g)}for(let b=0;b<=e;b++){let A=i+b*h*s,y=Math.sin(A),C=Math.cos(A);for(let x=0;x<=t.length-1;x++){u.x=t[x].x*y,u.y=t[x].y,u.z=t[x].x*C,r.push(u.x,u.y,u.z),d.x=b/e,d.y=x/(t.length-1),a.push(d.x,d.y);let w=l[3*x+0]*y,F=l[3*x+1],T=l[3*x+0]*C;c.push(w,F,T)}}for(let b=0;b<e;b++)for(let A=0;A<t.length-1;A++){let y=A+b*t.length,C=y,x=y+t.length,w=y+t.length+1,F=y+1;o.push(C,x,F),o.push(w,F,x)}this.setIndex(o),this.setAttribute("position",new De(r,3)),this.setAttribute("uv",new De(a,2)),this.setAttribute("normal",new De(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},pr=class n extends cs{constructor(t=1,e=1,i=4,s=8){let o=new tc;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},ci=class n extends cn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let o=[],r=[],a=[],l=[],c=new R,h=new it;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(a,3)),this.setAttribute("uv",new De(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},On=class n extends cn{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),o=Math.floor(o);let h=[],u=[],d=[],f=[],g=0,E=[],m=i/2,p=0;b(),r===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(f,2));function b(){let y=new R,C=new R,x=0,w=(e-t)/i;for(let F=0;F<=o;F++){let T=[],M=F/o,P=M*(e-t)+t;for(let W=0;W<=s;W++){let O=W/s,I=O*l+a,N=Math.sin(I),H=Math.cos(I);C.x=P*N,C.y=-M*i+m,C.z=P*H,u.push(C.x,C.y,C.z),y.set(N,w,H).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-M),T.push(g++)}E.push(T)}for(let F=0;F<s;F++)for(let T=0;T<o;T++){let M=E[T][F],P=E[T+1][F],W=E[T+1][F+1],O=E[T][F+1];(t>0||T!==0)&&(h.push(M,P,O),x+=3),(e>0||T!==o-1)&&(h.push(P,W,O),x+=3)}c.addGroup(p,x,0),p+=x}function A(y){let C=g,x=new it,w=new R,F=0,T=y===!0?t:e,M=y===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let P=g;for(let W=0;W<=s;W++){let I=W/s*l+a,N=Math.cos(I),H=Math.sin(I);w.x=T*H,w.y=m*M,w.z=T*N,u.push(w.x,w.y,w.z),d.push(0,M,0),x.x=N*.5+.5,x.y=H*.5*M+.5,f.push(x.x,x.y),g++}for(let W=0;W<s;W++){let O=C+W,I=P+W;y===!0?h.push(I,I+1,O):h.push(I+1,I,O),F+=3}c.addGroup(p,F,y===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Jn=class n extends On{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var oe=class n extends cn{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(r+a,Math.PI),c=0,h=[],u=new R,d=new R,f=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){let b=[],A=p/i,y=0;p===0&&r===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){let x=C/e;u.x=-t*Math.cos(s+x*o)*Math.sin(r+A*a),u.y=t*Math.cos(r+A*a),u.z=t*Math.sin(s+x*o)*Math.sin(r+A*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),E.push(d.x,d.y,d.z),m.push(x+y,1-A),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let A=h[p][b+1],y=h[p][b],C=h[p+1][b],x=h[p+1][b+1];(p!==0||r>0)&&f.push(A,y,x),(p!==i-1||l<Math.PI)&&f.push(y,C,x)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(E,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ke=class n extends cn{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);let r=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let E=g/s*o,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(E),u.y=(t+e*Math.cos(m))*Math.sin(E),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(E),h.y=t*Math.sin(E),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let E=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;r.push(E,m,b),r.push(m,p,b)}this.setIndex(r),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var _e=class extends ki{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gu,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function ia(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function eE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Io=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],o=e[i-1];n:{t:{let r;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=s,s=e[++i],t<s)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(i=2,o=a);for(let l=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=o,o=e[--i-1],t>=o)break t}r=i,i=0;break e}break n}for(;i<r;){let a=i+r>>>1;t<e[a]?r=a:i=a+1}if(s=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,s)}return this.interpolate_(i,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=i[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ec=class extends Io{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(t,e,i){let s=this.parameterPositions,o=t-2,r=t+1,a=s[o],l=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case Sh:o=t,a=2*e-i;break;case xh:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Sh:r=t,l=2*i-e;break;case xh:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),E=g*g,m=E*g,p=-d*m+2*d*E-d*g,b=(1+d)*m+(-1.5-2*d)*E+(-.5+d)*g+1,A=(-1-f)*m+(1.5+f)*E+.5*g,y=f*m-f*E;for(let C=0;C!==a;++C)o[C]=p*r[h+C]+b*r[c+C]+A*r[l+C]+y*r[u+C];return o}},nc=class extends Io{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)o[d]=r[c+d]*u+r[l+d]*h;return o}},ic=class extends Io{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ia(e,this.TimeBufferType),this.values=ia(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ia(t.times,Array),values:ia(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ec(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ca:e=this.InterpolantFactoryMethodDiscrete;break;case wl:e=this.InterpolantFactoryMethodLinear;break;case c0:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return wl;case this.InterpolantFactoryMethodSmooth:return c0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,o=0,r=s-1;for(;o!==s&&i[o]<t;)++o;for(;r!==-1&&i[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=i.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(s!==void 0&&eE(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===c0,o=t.length-1,r=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let E=e[u+g];if(E!==e[d+g]||E!==e[f+g]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];let u=a*i,d=r*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++r}}if(o>0){t[r]=t[o];for(let a=o*i,l=r*i,c=0;c!==i;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=wl;var Ds=class extends hi{constructor(t,e,i){super(t,e,i)}};Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=ca;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends hi{};sc.prototype.ValueTypeName="color";var oc=class extends hi{};oc.prototype.ValueTypeName="number";var rc=class extends Io{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Yn.slerpFlat(o,0,r,c-a,r,c,l);return o}},Fa=class extends hi{InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}};Fa.prototype.ValueTypeName="quaternion";Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends hi{constructor(t,e,i){super(t,e,i)}};Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ca;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends hi{};ac.prototype.ValueTypeName="vector";var lc=class{constructor(t,e,i){let s=this,o=!1,r=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},nE=new lc,cc=class{constructor(t){this.manager=t!==void 0?t:nE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};cc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bs=class extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Us=class extends Bs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},G0=new Se,Su=new R,xu=new R,mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Su.setFromMatrixPosition(t.matrixWorld),e.position.copy(Su),xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xu),e.updateMatrixWorld(),G0.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(G0),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(G0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},hc=class extends mr{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=ua*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(i!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=i,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Kn=class extends Bs{constructor(t,e,i=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=i,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new hc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ru=new Se,ir=new R,V0=new R,uc=class extends mr{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ir.setFromMatrixPosition(t.matrixWorld),i.position.copy(ir),V0.copy(i.position),V0.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(V0),i.updateMatrixWorld(),s.makeTranslation(-ir.x,-ir.y,-ir.z),Ru.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}},on=class extends Bs{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new uc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},dc=class extends mr{constructor(){super(new Fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hs=class extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new dc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Mn=class extends Bs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Pa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=wu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function wu(){return 0}var Tc="\\[\\]\\.:\\/",iE=new RegExp("["+Tc+"]","g"),Sc="[^"+Tc+"]",sE="[^"+Tc.replace("\\.","")+"]",oE=/((?:WC+[\/:])*)/.source.replace("WC",Sc),rE=/(WCOD+)?/.source.replace("WCOD",sE),aE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sc),lE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sc),cE=new RegExp("^"+oE+rE+aE+lE+"$"),hE=["material","materials","bones","map"],fc=class{constructor(t,e,i){let s=i||ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=i.length;s!==o;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ke=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(iE,"")}static parseTrackName(t){let e=cE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);hE.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=fc;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pc);var Ba={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Gi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},uE=new Fo(-1,1,1,-1,0,1),xc=class extends cn{constructor(){super(),this.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new De([0,2,0,0,2,0],2))}},dE=new xc,Bo=class{constructor(t){this._mesh=new ot(dE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,uE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Hs=class extends Gi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Je?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Do.clone(t.uniforms),this.material=new Je({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Bo(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var gr=class extends Gi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}},Ua=class extends Gi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ha=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new it);this._width=i.width,this._height=i.height,e=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hs(Ba),this.copyPass.material.blending=Mi,this.clock=new Pa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,o=this.passes.length;s<o;s++){let r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}gr!==void 0&&(r instanceof gr?i=!0:r instanceof Ua&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ju={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new wt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Uo=class n extends Gi{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new wt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(o,r,{type:Fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new ln(o,r,{type:Fn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new ln(o,r,{type:Fn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),r=Math.round(r/2)}let a=ju;this.highPassUniforms=Do.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Je({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new it(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ba;this.copyUniforms=Do.clone(h.uniforms),this.blendMaterial=new Je({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:bo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new wt,this.oldClearAlpha=1,this.basic=new ne,this.fsQuad=new Bo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new it(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Je({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Je({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Uo.BlurDirectionX=new it(1,0);Uo.BlurDirectionY=new it(0,1);var Vi=1920,Wi=1080;function Pe(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var bt=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),Rt=(n,t,e)=>n+(t-n)*e,be=(n,t,e)=>{let i=bt((e-n)/(t-n));return i*i*(3-2*i)},zn=n=>1-Math.pow(1-bt(n),3),Oa=n=>Math.pow(bt(n),3),Pn=n=>(n=bt(n),n*n*(3-2*n));function Er(n,t){if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){let i=Pn((t-n[e-1][0])/(n[e][0]-n[e-1][0])),s=n[e-1][1],o=n[e][1];return Array.isArray(s)?s.map((r,a)=>Rt(r,o[a],i)):Rt(s,o,i)}return n[n.length-1][1]}var fE={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new it(Vi,Wi)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){if(maxBlur<.6){gl_FragColor=vec4(texture2D(tColor,vUv).rgb,1.);return;}float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<44;i++){float fi=float(i);float r=sqrt(fi/44.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},pE={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new wt(1,1,1)},sat:{value:1},flash:{value:0},toon:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash,toon;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=mix(aces(c*.88),c/(1.+.18*c),toon);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(1.,.66);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1920.,1080.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Na=class{constructor(t){let e=this.r=new ba({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(Vi,Wi,!1),e.shadowMap.enabled=!0,e.shadowMap.type=mc,e.toneMapping=_i,e.outputColorSpace=us;let i=new Po(Vi,Wi);i.type=Oi,this.rt=new ln(Vi,Wi,{type:Fn,samples:4,depthTexture:i}),this.composer=new Ha(e,new ln(Vi,Wi,{type:Fn})),this.dof=new Hs(fE,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new Uo(new it(Vi/2,Wi/2),.45,.75,.82),this.grade=new Hs(pE),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(r=>t>=r.t0&&t<r.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let i=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,o=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,o.vig.value=i.vig??.42,o.exposure.value=i.exposure??1,o.sat.value=i.sat??1,o.flash.value=i.flash??0,o.toon.value=i.toon??0,o.frame.value=Math.floor(t*30)%97,o.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function td(n,t,e,i=40){let s=new Is;s.background=new wt(e);let o=new pn(i,Vi/Wi,.08,400);return{t0:n,t1:t,scene:s,camera:o,update(){return{}}}}function ed(n,t,e,i=0){n.position.set(t[0],t[1],t[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(e[0],e[1],e[2])}var Ry=1/420;var Rc={value:0};var yr=new R;function Qn(n,t,e,i,s,o){let r=2*Math.PI*s/4,a=Math.max(o-2*s,0),l=Math.PI/4;yr.copy(t),yr[i]=0,yr.normalize();let c=.5*r/(r+a),h=1-yr.angleTo(n)/l;return Math.sign(yr[e])===1?h*c:a/(r+a)+c+c*(1-h)}var za=class extends Oe{constructor(t=1,e=1,i=1,s=2,o=.1){if(s=s*2+1,o=Math.min(t/2,e/2,i/2,o),super(1,1,1,s,s,s),s===1)return;let r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;let a=new R,l=new R,c=new R(t,e,i).divideScalar(2).subScalar(o),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new R,E=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*E,l.y-=Math.sign(l.y)*E,l.z-=Math.sign(l.z)*E,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*o,h[m+1]=c.y*Math.sign(a.y)+l.y*o,h[m+2]=c.z*Math.sign(a.z)+l.z*o,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Qn(g,l,"z","y",o,i),d[p+1]=1-Qn(g,l,"y","z",o,e);break;case 1:g.set(-1,0,0),d[p+0]=1-Qn(g,l,"z","y",o,i),d[p+1]=1-Qn(g,l,"y","z",o,e);break;case 2:g.set(0,1,0),d[p+0]=1-Qn(g,l,"x","z",o,t),d[p+1]=Qn(g,l,"z","x",o,i);break;case 3:g.set(0,-1,0),d[p+0]=1-Qn(g,l,"x","z",o,t),d[p+1]=1-Qn(g,l,"z","x",o,i);break;case 4:g.set(0,0,1),d[p+0]=1-Qn(g,l,"x","y",o,t),d[p+1]=1-Qn(g,l,"y","x",o,e);break;case 5:g.set(0,0,-1),d[p+0]=Qn(g,l,"x","y",o,t),d[p+1]=1-Qn(g,l,"y","x",o,e);break}}};var ds=null;function Pc(){if(ds)return ds;let n=new Uint8Array([118,118,118,255,196,196,196,255,255,255,255,255]);return ds=new Ta(n,3,1,Hn),ds.minFilter=ds.magFilter=Sn,ds.generateMipmaps=!1,ds.needsUpdate=!0,ds}var wc=new Map;function ge(n,t){if(!t){let e=String(n);if(wc.has(e))return wc.get(e);let i=new _e({color:n,gradientMap:Pc()});return wc.set(e,i),i}return new _e({color:n,gradientMap:Pc(),...t})}var gE=`uniform float w; uniform float minPx; uniform vec2 res;
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
}`,EE="uniform vec3 col; uniform float op; void main(){ gl_FragColor = vec4(col, op); }",Cc=new Map;function Ic(n=.014,t="#17131C",e=1.6){let i=n+t+e;if(Cc.has(i))return Cc.get(i);let s=new Je({uniforms:{w:{value:n},minPx:{value:e},res:{value:new it(Vi,Wi)},col:{value:new wt(t).convertSRGBToLinear()},op:{value:1}},vertexShader:gE,fragmentShader:EE,side:$e});return Cc.set(i,s),s}function Ns(n,t=.014,e,i){let s=new ot(n.geometry,Ic(t,e,i));return s.castShadow=!1,s.receiveShadow=!1,s.userData.isOutline=!0,n.add(s),n}function xe(n,t,e={}){let i=new ot(n,t&&t.isMaterial?t:ge(t));return i.castShadow=e.shadow??!0,i.receiveShadow=!0,e.out&&Ns(i,e.out===!0?.014:e.out,e.outCol,e.minPx),e.pos&&i.position.set(...e.pos),e.rot&&i.rotation.set(...e.rot),i}var Os=(n,t,e,i=.04,s=3)=>new za(n,t,e,s,Math.min(i,n/2-.001,t/2-.001,e/2-.001));function ht(n,t,e,i,s=0,o=0,r=0,a={}){return xe(Os(n,t,e,a.r??Math.min(.05,Math.min(n,t,e)*.18)),i,{pos:[s,o,r],...a})}function st(n,t,e,i,s=0,o=0,r=0,a={}){return xe(new Oe(n,t,e),i,{pos:[s,o,r],...a})}function gt(n,t,e,i,s=0,o=0,r=0,a={}){return xe(new On(n,t,e,a.seg||24),i,{pos:[s,o,r],...a})}function re(n,t,e=0,i=0,s=0,o={}){return xe(new oe(n,o.seg||24,Math.max(12,(o.seg||24)*.6|0)),t,{pos:[e,i,s],...o})}function Vt(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t;let s=i.getContext("2d");e(s,n,t);let o=new mn(i);return o.colorSpace=Ie,o.anisotropy=8,o}var ae=(n,t={})=>new _e({map:n,gradientMap:Pc(),...t}),Fc=null;function ka(n=.32,t=.38){Fc||(Fc=Vt(128,128,i=>{let s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(20,16,30,1)"),s.addColorStop(.55,"rgba(20,16,30,.55)"),s.addColorStop(1,"rgba(20,16,30,0)"),i.fillStyle=s,i.fillRect(0,0,128,128)}));let e=new ot(new Bt(n*2,n*2),new ne({map:Fc,transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return e.rotation.x=-Math.PI/2,e.renderOrder=1,e}function kn(n,t={}){let e=new Us(t.sky||"#EAF2FF",t.ground||"#B9A898",t.hemi??1.5);n.add(e);let i=new hs(t.key||"#FFF4E2",t.ki??2.2);i.position.set(...t.pos||[6,10,7]),i.castShadow=t.shadow??!0,i.shadow.mapSize.set(2048,2048);let s=t.r||12;return Object.assign(i.shadow.camera,{left:-s,right:s,top:s,bottom:-s,near:.5,far:t.far||60}),i.shadow.bias=-4e-4,i.shadow.normalBias=.02,i.shadow.radius=3,t.target&&(i.target.position.set(...t.target),n.add(i.target),i.position.set(t.target[0]+(t.pos||[6,10,7])[0],t.target[1]+(t.pos||[6,10,7])[1],t.target[2]+(t.pos||[6,10,7])[2])),n.add(i),{hemi:e,k:i}}var nd=(n={})=>({toon:1,blur:0,bloom:.18,bloomT:.95,bloomR:.4,vig:.22,exposure:1,sat:1.05,...n});function yE(n,t){(n.userData.vida||=[]).push(t)}function Dc(n,t={}){let e=Pe(t.seed||5),i=t.n||7,s=ge("#2A2630",{side:Ge}),o=[],r=new Bt(.55,.22);r.translate(.27,0,0);for(let d=0;d<i;d++){let f=new j,g=new ot(r,s),E=new ot(r,s);E.rotation.y=Math.PI,f.add(g,E),f.add(re(.09,"#2A2630",0,0,0,{seg:6})),f.scale.setScalar(t.escala||1),n.add(f),o.push({g:f,L:g,Rr:E,dx:(e()-.5)*8,dy:(e()-.5)*3,dz:(e()-.5)*8,ph:e()*6})}let[a,l,c]=t.centro||[0,22,-40],h=t.raio||30,u=t.v||.12;yE(n,(d,f)=>{o.forEach((g,E)=>{let m=f*u+(t.fase||0),p=a+Math.cos(m)*h+g.dx+Math.sin(f*.7+g.ph)*.6,b=c+Math.sin(m)*h*.5+g.dz,A=l+g.dy+Math.sin(f*1.3+g.ph)*.4;g.g.position.set(p,A,b),g.g.rotation.y=-m+Math.PI;let y=Math.sin(f*11+g.ph)*.7;g.L.rotation.x=0,g.L.rotation.z=y,g.Rr.rotation.z=-y})})}var xn=Math.PI/180,Xe=.3,vE=.012,hn={phi0:Math.PI/2-1,phiL:2,th0:.62,thL:1.55,W:1024,H:512},$t=n=>hn.W/2+n/hn.phiL*hn.W,qt=n=>(n-hn.th0)/hn.thL*hn.H,Gn=n=>n/hn.phiL*hn.W,Qe=n=>n/hn.thL*hn.H,fs="#1B1420";function ME(n,t,e){n.clearRect(0,0,hn.W,hn.H),n.lineCap="round",n.lineJoin="round";let i=t.emo||"neutro",s=1.45,o=.31;if(t.blush||i==="feliz"||i==="apaixonado"||i==="vergonha"){n.fillStyle="rgba(240,110,110,"+(i==="vergonha"?.55:.3)+")";for(let y of[-1,1])n.beginPath(),n.ellipse($t(y*.44),qt(1.7),Gn(.075),Qe(.045),0,0,7),n.fill()}let r=bt(Math.max(t.blink||0,i==="sono"?.55:i==="triste"||i==="choro"?.22:i==="bravo"?.25:i==="desconfiado"?.4:i==="tedio"?.5:0)),a=i==="surpreso"||i==="medo"?1.15:1;for(let y of[-1,1]){let C=$t(y*o),x=qt(s),w=Gn(.128)*a,F=Qe(.158)*a;if(i==="feliz"&&!t.olhosAbertos||(t.blink||0)>.92||t.pisca1&&y<0){n.strokeStyle=fs,n.lineWidth=11,n.beginPath(),i==="feliz"||i==="rindo"?n.arc(C,x+F*.25,w*.85,Math.PI*1.12,Math.PI*1.88):(n.moveTo(C-w*.9,x+F*.15),n.quadraticCurveTo(C,x+F*.55,C+w*.9,x+F*.15)),n.stroke();continue}n.save(),n.beginPath(),n.ellipse(C,x,w,F,0,0,7),n.clip(),n.fillStyle="#FFFFFF",n.fillRect(C-w,x-F,w*2,F*2);let T=i==="surpreso"||i==="medo"?.55:.68,M=bt(e[0],-1,1),P=bt(e[1],-1,1),W=C+M*w*.38,O=x+P*F*.32+F*.06;n.fillStyle="#231A26",n.beginPath(),n.ellipse(W,O,w*T,F*T*.98,0,0,7),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.ellipse(W-w*.22,O-F*.28,w*.2,F*.17,0,0,7),n.fill(),n.beginPath(),n.ellipse(W+w*.2,O+F*.22,w*.08,F*.07,0,0,7),n.fill();let I=i==="bravo"?-y*.45:i==="triste"||i==="choro"||i==="preocupado"?y*.35:0;if(r>.02||I){let N=x-F+F*2*r;n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.moveTo(C-w*1.2,x-F*1.3),n.lineTo(C+w*1.2,x-F*1.3),n.lineTo(C+w*1.2,N+Math.tan(I)*w*1.2),n.lineTo(C-w*1.2,N-Math.tan(I)*w*1.2),n.closePath(),n.fill(),n.strokeStyle=fs,n.lineWidth=8,n.beginPath(),n.moveTo(C-w*1.1,N-Math.tan(I)*w*1.1),n.lineTo(C+w*1.1,N+Math.tan(I)*w*1.1),n.stroke()}n.restore(),n.strokeStyle=fs,n.lineWidth=8,n.beginPath(),n.ellipse(C,x,w,F,0,0,7),n.stroke(),t.cilios&&(n.lineWidth=7,n.beginPath(),n.moveTo(C+y*w*.7,x-F*.72),n.lineTo(C+y*w*1.15,x-F*1.02),n.stroke())}if(i==="choro"||t.lagrima){n.fillStyle="rgba(120,200,255,.85)";for(let y of[-1,1]){let C=$t(y*o),x=qt(s)+Qe(.12);n.beginPath(),n.moveTo(C-Gn(.02),x),n.quadraticCurveTo(C,x+Qe(.22),C+Gn(.02),x),n.fill(),n.beginPath(),n.ellipse(C,x+Qe(.2),Gn(.028),Qe(.035),0,0,7),n.fill()}}let l={neutro:[0,0],feliz:[.04,-.1],rindo:[.04,-.1],triste:[.02,.45],choro:[.03,.5],bravo:[-.03,-.55],surpreso:[.09,0],medo:[.08,.4],preocupado:[.04,.38],desconfiado:[-.01,-.2],sono:[-.01,.1],vergonha:[.03,.3],determinado:[-.02,-.35],tedio:[-.01,.05],apaixonado:[.05,.2]}[i]||[0,0],c=l[0]+(t.brow||0)*.05,h=l[1];n.strokeStyle=t.sobr||fs,n.lineWidth=t.sobrW||15;for(let y of[-1,1]){let C=$t(y*o),x=qt(s-.2-c),w=Gn(.085),F=y*h*.5;n.beginPath(),n.moveTo(C-w*Math.cos(F),x-w*Math.sin(F)*(y<0,1)),n.quadraticCurveTo(C,x-Qe(.025),C+w*Math.cos(F),x+w*Math.sin(F)),n.stroke()}if(t.rugas){n.strokeStyle="rgba(90,50,40,.5)",n.lineWidth=5;for(let y of[-1,1]){let C=$t(y*(o+.17));for(let x=0;x<3;x++)n.beginPath(),n.moveTo(C,qt(s-.05+x*.06)),n.lineTo(C+y*Gn(.05),qt(s-.07+x*.07)),n.stroke()}n.beginPath(),n.moveTo($t(-.12),qt(1.12)),n.quadraticCurveTo($t(0),qt(1.09),$t(.12),qt(1.12)),n.stroke()}if(t.oculosEscuros){n.fillStyle="#15121A";for(let y of[-1,1])n.beginPath(),n.ellipse($t(y*o),qt(s+.02),Gn(.16),Qe(.13),0,0,7),n.fill();n.strokeStyle="#15121A",n.lineWidth=10,n.beginPath(),n.moveTo($t(-o+.14),qt(s)),n.lineTo($t(o-.14),qt(s)),n.stroke(),n.fillStyle="rgba(255,255,255,.35)";for(let y of[-1,1])n.beginPath(),n.ellipse($t(y*o-.05),qt(s-.03),Gn(.04),Qe(.025),-.5,0,7),n.fill()}if(t.oculos){n.strokeStyle="#6A4A3A",n.lineWidth=8;for(let y of[-1,1])n.beginPath(),n.ellipse($t(y*o),qt(s),Gn(.15),Qe(.16),0,0,7),n.stroke();n.beginPath(),n.moveTo($t(-o+.15),qt(s-.02)),n.quadraticCurveTo($t(0),qt(s-.08),$t(o-.15),qt(s-.02)),n.stroke()}t.nariz&&(n.strokeStyle="rgba(60,30,30,.55)",n.lineWidth=7,n.beginPath(),n.arc($t(0),qt(1.66),Gn(.035),.2,Math.PI-.2),n.stroke());let u=t.mouth||{},d=bt(u.open||0),f=bt(u.round||0),g=u.smile??({feliz:.8,rindo:.9,triste:-.6,choro:-.7,bravo:-.4,medo:-.3,preocupado:-.35,apaixonado:.6,vergonha:.3,determinado:-.05,desconfiado:-.15,tedio:-.2}[i]||0),E=qt(t.bigode?1.93:1.88),m=$t(0),p=Gn(.15+.05*(1-f)+(i==="rindo"?.04:0)),b=E-g*Qe(.035),A=()=>{if(d<.07)n.strokeStyle=fs,n.lineWidth=11,n.beginPath(),n.moveTo(m-p*.85,b),n.quadraticCurveTo(m,E+g*Qe(.075),m+p*.85,b),n.stroke();else{let y=Qe(.05+.2*d),C=p*(1-.38*f);n.beginPath(),f>.55?n.ellipse(m,E+y*.35,C*.75,y*.62,0,0,7):(n.moveTo(m-C,b),n.quadraticCurveTo(m,E+g*Qe(.03)-y*.12,m+C,b),n.bezierCurveTo(m+C*.95,b+y*1.25,m-C*.95,b+y*1.25,m-C,b),n.closePath()),n.fillStyle="#5A1E2A",n.fill(),n.save(),n.clip(),d>.28&&f<.55&&(n.fillStyle="#FFFFFF",n.fillRect(m-C,b-y,C*2,y*1.18),t.banguela&&(n.fillStyle="#5A1E2A",n.fillRect(m+C*.08,b-y,C*.26,y*.62))),n.fillStyle="#E8707E",n.beginPath(),n.ellipse(m,b+y*1.05,C*.58,y*.42,0,0,7),n.fill(),n.restore(),n.strokeStyle=fs,n.lineWidth=9,n.stroke()}};if(t.barba||A(),t.lingua&&(n.fillStyle="#F2707E",n.strokeStyle=fs,n.lineWidth=7,n.beginPath(),n.ellipse(m+p*.25,E+Qe(.07),p*.32,Qe(.075),.2,0,7),n.fill(),n.stroke(),n.strokeStyle="#C8505E",n.lineWidth=4,n.beginPath(),n.moveTo(m+p*.25,E+Qe(.02)),n.lineTo(m+p*.27,E+Qe(.1)),n.stroke()),t.barba&&(n.fillStyle=t.barba,n.globalAlpha=.92,n.beginPath(),n.moveTo($t(-.44),qt(1.5)),n.quadraticCurveTo($t(-.46),qt(2.05),$t(0),qt(2.2)),n.quadraticCurveTo($t(.46),qt(2.05),$t(.44),qt(1.5)),n.quadraticCurveTo($t(.36),qt(1.78),$t(.2),qt(1.8)),n.quadraticCurveTo($t(0),qt(1.72),$t(-.2),qt(1.8)),n.quadraticCurveTo($t(-.36),qt(1.78),$t(-.44),qt(1.5)),n.fill(),n.globalAlpha=1,n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.ellipse(m,E+Qe(.03),p*1.15,Qe(.09+.12*d),0,0,7),n.fill(),A()),t.olheiras){n.strokeStyle="rgba(90,60,90,.45)",n.lineWidth=7;for(let y of[-1,1])n.beginPath(),n.arc($t(y*.31),qt(1.5),Gn(.1),.35,Math.PI-.35),n.stroke()}if(t.sardas){n.fillStyle="rgba(150,80,50,.55)";for(let y of[-1,1])for(let C=0;C<5;C++)n.beginPath(),n.arc($t(y*(.36+C%3*.05)),qt(1.66+Math.floor(C/3)*.05+C%2*.02),4.5,0,7),n.fill()}t.bigode&&(n.fillStyle=t.bigode,n.strokeStyle=fs,n.lineWidth=6,n.beginPath(),n.moveTo($t(0),qt(1.76)),n.bezierCurveTo($t(.12),qt(1.7),$t(.24),qt(1.76),$t(.27),qt(1.9)),n.bezierCurveTo($t(.17),qt(1.84),$t(.08),qt(1.87),$t(0),qt(1.83)),n.bezierCurveTo($t(-.08),qt(1.87),$t(-.17),qt(1.84),$t(-.27),qt(1.9)),n.bezierCurveTo($t(-.24),qt(1.76),$t(-.12),qt(1.7),$t(0),qt(1.76)),n.fill(),n.stroke())}var id={},Vn=0,ps=(n,t)=>{let e="c"+n+t+Vn;return id[e]||(id[e]=new pr(n,t,Vn?3:6,Vn?10:18))};function sd(n,t=.82,e=36){let i=new cs(n.map(([l,c])=>new it(l,c)),e,Math.PI,Math.PI*2);i.applyMatrix4(new Se().makeScale(1,1,t));let s=i.attributes.position,o=i.attributes.uv,r=1e9,a=-1e9;for(let l=0;l<s.count;l++)r=Math.min(r,s.getY(l)),a=Math.max(a,s.getY(l));for(let l=0;l<s.count;l++)o.setY(l,(s.getY(l)-r)/(a-r));return i.computeVertexNormals(),i}var _E={magro:[[0,.5],[.14,.5],[.165,.53],[.172,.62],[.172,.72],[.165,.8],[.14,.86],[.09,.895],[.04,.905],[0,.906]],barriga:[[0,.47],[.16,.47],[.2,.52],[.225,.6],[.225,.68],[.205,.77],[.17,.845],[.11,.89],[.04,.905],[0,.906]],senhora:[[0,.5],[.15,.5],[.17,.55],[.175,.64],[.17,.74],[.16,.81],[.13,.865],[.08,.898],[0,.906]]},bE=[[0,.24],[.25,.24],[.245,.26],[.22,.36],[.19,.5],[.165,.62],[0,.62]];function Lc(n={}){Vn=n.simples?1:0;let t=n.pele||"#C98B5E",e=n.camisa||"#E8453C",i=n.calca||"#2E4A7A",s=n.tenis||"#F4F1EA",o=new j,r=new j;o.add(r);let a=new j;a.position.y=.52,r.add(a);let l=(I,N,H,q,z=vE)=>{let tt=new ot(N,typeof H=="string"?ge(H):H);return tt.castShadow=!0,tt.receiveShadow=!0,q&&tt.position.set(...q),z&&Ns(tt,z),I.add(tt),tt},c=Vt(1024,512,(I,N,H)=>{I.fillStyle=e,I.fillRect(0,0,N,H),n.estampa&&n.estampa(I,N,H)}),h=ae(c),u=l(a,sd(_E[n.tronco||"magro"]),h,[0,-.52,0]);n.saia&&l(a,sd(bE,.86),n.saia,[0,-.52,0]),l(a,new On(.06,.065,.1,16),t,[0,.4,0],0);let d=new j;d.position.y=.38,a.add(d);let f=l(d,new oe(Xe,Vn?24:48,Vn?16:32),t,[0,Xe*.86,0]);f.receiveShadow=!1;for(let I of[-1,1])l(d,new oe(.055,16,12),t,[I*Xe*.96,Xe*.82,-.01]).scale.set(.6,1,.9);let g=document.createElement("canvas");g.width=hn.W>>Vn,g.height=hn.H>>Vn;let E=g.getContext("2d");Vn&&E.scale(.5,.5);let m=new mn(g);m.colorSpace=Ie,m.anisotropy=8;let p=new _e({map:m,gradientMap:ge("#fff").gradientMap,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),b=new ot(new oe(Xe*1.002,Vn?24:48,Vn?16:32,hn.phi0,hn.phiL,hn.th0,hn.thL),p);b.position.y=Xe*.86,b.renderOrder=2,d.add(b);let A=n.corCabelo||"#1E1618",y=new j;if(y.position.y=Xe*.86,d.add(y),n.cabelo==="cacheado"){let I=new oe(1,Vn?8:14,Vn?6:10),N=0;for(let H=0;H<70;H++){let q=Math.acos(1-2*((H+.5)/70)),z=H*2.39996,tt=Math.cos(q),ut=Math.sin(q),At=Math.cos(z)*ut,Ot=Math.sin(z)*ut;if(tt<.28&&Ot>-.2||tt<-.25||Ot>.55&&tt<.62||Math.abs(At)>.8&&tt<.45&&Ot>-.5)continue;let fe=.075+H*37%10/10*.03,Y=l(y,I,A,[At*Xe*.98,tt*Xe*.98+.01,Ot*Xe*.98],.009);Y.scale.setScalar(fe),Y.castShadow=!1,N++}}else if(n.cabelo==="tigela"||n.cabelo==="rabo"||n.cabelo==="coque"){if(l(y,new oe(Xe*1.04,40,28),A,[0,.055,-.065]),n.cabelo==="rabo"){let I=l(y,ps(.085,.26),A,[0,.06,-.42]);I.rotation.x=.75;let N=l(y,new oe(.1,18,14),A,[0,-.07,-.5]);l(y,new oe(.065,16,12),n.laco||"#F25C8A",[0,.22,-.31]);for(let H of[-1,1]){let q=l(y,ps(.06,.2),A,[H*.27,-.08,.02]);q.rotation.z=-H*.08}}n.cabelo==="coque"&&l(y,new oe(.12,24,16),A,[0,.3,-.12]);for(let I=-2;I<=2;I++)l(y,new oe(.075,16,12),A,[I*.07,.2-Math.abs(I)*.025,.2-Math.abs(I)*.02],.008).scale.set(1,.8,.7)}else if(n.cabelo==="careca")for(let I of[-1,1])for(let N=0;N<4;N++){let H=-.6-N*.35;l(y,new oe(.07,14,10),A,[I*Math.cos(H)*Xe*.93*(N<3?1:.9),-.02,Math.sin(H)*Xe*.93+.12],.008).scale.set(1,1.2,1)}if(n.cabelo==="topete"){l(y,new oe(Xe*1.03,40,28,0,Math.PI*2,0,1.45),A,[0,.03,-.05]),l(y,new oe(Xe*1.035,48,32,Math.PI+.18,Math.PI-.36,0,2.3),A,[0,0,0],.008);for(let N=0;N<5;N++)l(y,new Jn(.085,.22,10),A,[(N-2)*.075,.27-Math.abs(N-2)*.02,.12-Math.abs(N-2)*.02],.008).rotation.set(1.05,0,-(N-2)*.22);l(y,new oe(.16,18,12),A,[0,.26,.05],.008).scale.set(1.2,.6,1.1)}else if(n.cabelo==="curto")l(y,new oe(Xe*1.025,40,28,0,Math.PI*2,0,1.3),A,[0,.025,-.03]),l(y,new oe(Xe*1.03,48,32,Math.PI+.18,Math.PI-.36,0,2.25),n.corCabelo2||A,[0,0,0],.008);else if(n.cabelo==="chanel"){l(y,new oe(Xe*1.06,40,28),A,[0,.05,-.07]);for(let N of[-1,1])l(y,new oe(.2,20,14),A,[N*.25,-.12,-.06]).scale.set(.55,1.15,1);l(y,new oe(.26,24,14),A,[0,.19,.12],.008).scale.set(1.05,.42,.6)}else if(n.cabelo==="afro"&&(l(y,new oe(Xe*1.32,40,28),A,[0,.14,-.1]).scale.set(1.08,1,1),n.faixa)){let N=l(y,new Ke(Xe*1.02,.035,10,40),n.faixa,[0,.1,0],.006);N.rotation.x=Math.PI/2-.25}if(n.brincos)for(let I of[-1,1])l(d,new oe(.03,12,10),n.brincos,[I*Xe*1,Xe*.62,.02],.005);if(n.bone){let I=l(y,new oe(Xe*1.05,32,16,0,Math.PI*2,0,1.25),n.bone,[0,.03,-.01]),N=l(y,Os(.36,.03,.22,.012),n.bone,[0,.12,n.boneTras?-.32:.3])}let C=I=>{let N=new j;N.position.set(I*.185,.3,0),a.add(N);let H=n.manga==="regata",q=H||(n.manga||"curta")==="curta";H?l(N,ps(.06,.17),t,[0,-.1,0]):l(N,ps(q?.064:.058,q?.07:.17),e,[0,q?-.055:-.1,0]),q&&!H&&l(N,ps(.05,.15),t,[0,-.11,0]);let z=new j;z.position.y=-.21,N.add(z),l(z,ps(.048,.14),q?t:e,[0,-.085,0]);let tt=new j;tt.position.y=-.2,z.add(tt);let ut=new oe(.062,20,14);return l(tt,ut,n.luva||t,[0,-.01,0]).scale.set(.85,1.05,.8),l(tt,new oe(.026,12,10),n.luva||t,[-I*.045,.02,.03],.007),n.forte&&(N.children.forEach(Ot=>Ot.isMesh&&Ot.scale.set(n.forte,1,n.forte)),z.children.forEach(Ot=>Ot.isMesh&&Ot.scale.set(n.forte*.92,1,n.forte*.92))),{sh:N,el:z,hand:tt}},x=C(1),w=C(-1),F=I=>{let N=new j;N.position.set(I*.085,.52,0),r.add(N),l(N,ps(.07,.17),n.saia?t:i,[0,-.11,0]);let H=new j;H.position.y=-.22,N.add(H),l(H,ps(.063,.16),n.meia||(n.saia?t:i),[0,-.1,0]);let q=new j;q.position.y=-.22,H.add(q);let z=l(q,Os(.13,.095,.23,.045),s,[0,-.037,.035]);return n.sola!==!1&&l(q,Os(.135,.03,.235,.014),n.sola||"#FFFFFF",[0,-.075,.035],.006),{hp:N,kn:H,an:q}},T=F(1),M=F(-1),P=ka(.36,.4);P.position.y=.006,o.add(P),n.escala&&o.scale.setScalar(n.escala),y.traverse(I=>{I.isMesh&&(I.castShadow=!1)});let W={look:[0,0],key:""},O={root:o,pelvis:r,torsoG:a,headG:d,head:f,hair:y,torso:u,hands:{L:x.hand,R:w.hand},arms:{L:x,R:w},legs:{L:T,R:M},sombra:P,place(I,N,H=0,q=0){return o.position.set(I,H,N),o.rotation.y=q,O},pose(I={}){r.position.y=I.bob||0,r.position.z=I.dz||0,a.rotation.set((I.lean||0)*xn,(I.twist||0)*xn,(I.tilt||0)*xn),d.rotation.set((I.headX||0)*xn,(I.headY||0)*xn,(I.headZ||0)*xn);let N=(q,z,tt,ut)=>{q.sh.rotation.set(-(z[0]||0)*xn,(z[2]||0)*xn*ut,ut*(z[1]??8)*xn),q.el.rotation.set(-(tt||0)*xn,0,0)};N(x,I.shL||[0,8],I.elL??8,1),N(w,I.shR||[0,8],I.elR??8,-1);let H=(q,z,tt,ut)=>{q.hp.rotation.set(-(z[0]||0)*xn,0,ut*(z[1]||0)*xn),q.kn.rotation.set((tt||0)*xn,0,0),q.an.rotation.set(-(z[0]||0)*xn*0+(tt||0)*xn*-.4*(z[2]??1),0,0)};return H(T,I.hipL||[0,0],I.knL||0,1),H(M,I.hipR||[0,0],I.knR||0,-1),O},face(I={}){let N=I.look||[0,0],H=I.mouth||{},q=(tt,ut=20)=>Math.round((tt||0)*ut),z=[I.emo,q(I.blink,10),q(N[0],8),q(N[1],8),q(H.open,12),q(H.round,6),H.smile===void 0?"u":q(H.smile,8),q(I.brow,6),I.lagrima?1:0,I.olhosAbertos?1:0,I.lingua?1:0,I.pisca1?1:0].join("|");return z!==W.key&&(W.key=z,ME(E,{...n.rosto,...I,pele:t,oculos:n.oculos,rugas:n.rugas,oculosEscuros:n.oculosEscuros,bigode:n.bigode,barba:n.barba,olheiras:n.olheiras,sardas:n.sardas,nariz:n.nariz,cilios:n.cilios,sobr:n.sobr,sobrW:n.sobrW,banguela:n.banguela},N),m.needsUpdate=!0),O},faceTo(I,N){return o.rotation.y=Math.atan2(I-o.position.x,N-o.position.z),O},hold(I,N="R"){return O.hands[N].add(I),I}};return O.estatua=(I="#A9A49C")=>{O.congelado=!0;let N=ge(I);return o.traverse(H=>{H.isMesh&&!H.userData.isOutline&&H!==P&&H!==b&&(H.material=N)}),p.color.set("#B8B4AC"),O},O.pose({}),O.face({}),O}function Ga(n,t=1.8,e=1,i=0){let s=(n*t+i)*Math.PI*2,o=Math.sin(s),r=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.025*e-.012,lean:4*e,twist:o*4*e,hipL:[28*o*e,0],hipR:[-28*o*e,0],knL:Math.max(0,-r)*45*e+5,knR:Math.max(0,r)*45*e+5,shL:[-24*o*e,7],shR:[24*o*e,7],elL:18+Math.max(0,-o)*18,elR:18+Math.max(0,o)*18,headX:-2}}function Va(n,t=2.9,e=1,i=0){let s=(n*t+i)*Math.PI*2,o=Math.sin(s),r=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.06*e-.02,lean:16*e,twist:o*7*e,hipL:[50*o*e+8,0],hipR:[-50*o*e+8,0],knL:(Math.max(0,-r)*85+18)*e,knR:(Math.max(0,r)*85+18)*e,shL:[-45*o*e,10],shR:[45*o*e,10],elL:85,elR:85,headX:-10*e}}var Ht=(n={})=>({bob:-.17,dz:-.02,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shL:[12,8],shR:[12,8],elL:30,elR:30,...n});function od(n,t=0){let e=3.1+t%5*.37,i=(n+t*.77)%e/e*e;return i<.07?i/.07:i<.14?1-(i-.07)/.07:0}var Wa={total:747,segs:[{quem:"n",pensa:!1,start:0,end:85.48,a:0,b:282},{quem:"davi",pensa:!1,start:85.48,end:87.32,a:283,b:287},{quem:"gui",pensa:!1,start:87.32,end:88.52,a:288,b:289},{quem:"davi",pensa:!1,start:88.52,end:90.24,a:290,b:294},{quem:"gui",pensa:!1,start:90.24,end:92.04,a:295,b:297},{quem:"n",pensa:!1,start:92.04,end:103.48,a:298,b:332},{quem:"mae",pensa:!1,start:103.48,end:105.84,a:333,b:339},{quem:"gui",pensa:!1,start:105.84,end:106.88,a:340,b:341},{quem:"mae",pensa:!1,start:106.88,end:108.28,a:342,b:346},{quem:"gui",pensa:!1,start:108.28,end:110.56,a:347,b:350},{quem:"mae",pensa:!1,start:110.56,end:114.32,a:351,b:360},{quem:"n",pensa:!1,start:114.32,end:156.76,a:361,b:478},{quem:"mae",pensa:!1,start:156.76,end:158.44,a:479,b:482},{quem:"gui",pensa:!1,start:158.44,end:160.56,a:483,b:488},{quem:"n",pensa:!1,start:160.56,end:180.24,a:489,b:544},{quem:"prof",pensa:!1,start:180.24,end:182.96,a:545,b:549},{quem:"tiago",pensa:!1,start:182.96,end:184.96,a:550,b:554},{quem:"n",pensa:!1,start:184.96,end:210.56,a:555,b:624},{quem:"tiago",pensa:!1,start:210.978,end:212.478,a:625,b:628},{quem:"gui",pensa:!1,start:212.478,end:215.478,a:629,b:634},{quem:"n",pensa:!1,start:215.478,end:249.678,a:635,b:742},{quem:"tiago",pensa:!1,start:249.678,end:251.878,a:743,b:748},{quem:"gui",pensa:!1,start:251.878,end:253.778,a:749,b:751},{quem:"n",pensa:!1,start:253.778,end:266.877,a:752,b:792},{quem:"mae",pensa:!1,start:266.877,end:269.178,a:793,b:795},{quem:"n",pensa:!1,start:269.178,end:325.978,a:796,b:953},{quem:"davi",pensa:!1,start:326.109,end:327.555,a:954,b:955},{quem:"gui",pensa:!1,start:327.687,end:330.577,a:956,b:960},{quem:"n",pensa:!1,start:330.577,end:356.278,a:961,b:1043},{quem:"davi",pensa:!1,start:356.433,end:358.909,a:1044,b:1047},{quem:"gui",pensa:!1,start:359.065,end:361.077,a:1048,b:1050},{quem:"n",pensa:!1,start:361.077,end:388.478,a:1051,b:1124},{quem:"caio",pensa:!1,start:388.582,end:391.279,a:1125,b:1129},{quem:"n",pensa:!1,start:391.384,end:398.978,a:1130,b:1153},{quem:"pef",pensa:!1,start:399.047,end:403.338,a:1154,b:1164},{quem:"n",pensa:!1,start:403.643,end:430.491,a:1165,b:1243},{quem:"cic",pensa:!1,start:430.491,end:431.474,a:1244,b:1246},{quem:"n",pensa:!1,start:431.474,end:467.679,a:1247,b:1346},{quem:"tiago",pensa:!1,start:467.679,end:471.963,a:1347,b:1359},{quem:"mae",pensa:!1,start:472.843,end:475.863,a:1360,b:1368},{quem:"gui",pensa:!1,start:475.863,end:477.529,a:1369,b:1373},{quem:"n",pensa:!1,start:477.529,end:500.083,a:1374,b:1438},{quem:"mae",pensa:!1,start:500.323,end:510.643,a:1439,b:1473},{quem:"gui",pensa:!1,start:510.643,end:512.058,a:1474,b:1476},{quem:"n",pensa:!1,start:512.058,end:530.123,a:1477,b:1520},{quem:"n",pensa:!1,start:530.803,end:548.243,a:1521,b:1565},{quem:"juiz",pensa:!1,start:548.643,end:549.468,a:1566,b:1567},{quem:"n",pensa:!1,start:549.468,end:579.01,a:1568,b:1650},{quem:"gui",pensa:!1,start:579.01,end:580.233,a:1651,b:1651},{quem:"n",pensa:!1,start:580.243,end:591.283,a:1652,b:1682},{quem:"n",pensa:!1,start:591.923,end:620.483,a:1683,b:1769},{quem:"gui",pensa:!1,start:620.963,end:622.963,a:1770,b:1772},{quem:"davi",pensa:!1,start:623.363,end:625.123,a:1773,b:1777},{quem:"n",pensa:!1,start:625.123,end:646.163,a:1778,b:1834},{quem:"gui",pensa:!1,start:646.563,end:648.003,a:1835,b:1838},{quem:"davi",pensa:!1,start:648.003,end:650.003,a:1839,b:1843},{quem:"gui",pensa:!1,start:650.323,end:652.323,a:1844,b:1848},{quem:"n",pensa:!1,start:652.483,end:674.163,a:1849,b:1917},{quem:"davi",pensa:!1,start:674.563,end:678.083,a:1918,b:1929},{quem:"davi",pensa:!1,start:678.723,end:680.723,a:1930,b:1937},{quem:"n",pensa:!1,start:680.723,end:693.123,a:1938,b:1974},{quem:"gui",pensa:!1,start:693.523,end:695.523,a:1975,b:1982},{quem:"davi",pensa:!1,start:696.643,end:699.523,a:1983,b:1993},{quem:"n",pensa:!1,start:699.923,end:706.563,a:1994,b:2013},{quem:"n",pensa:!1,start:707.283,end:729.363,a:2014,b:2075},{quem:"n",pensa:!1,start:730.083,end:744.681,a:2076,b:2121}],falas:[{quem:"davi",start:85.4,end:87.433,boca:[0,0,0,0,.17,.54,.78,.88,.97,1,.98,.92,.81,.69,.62,.66,.79,.93,.99,.96,.86,.79,.78,.68,.4,0,0,.22,.67,.93,.91,.87,.86,.83,.82,.82,.75,.7,.81,.9,.88,.83,.85,.9,.9,.86,.83,.83,.84,.86,.87,.85,.78,.66,.51,.32,0,0,.33,.59,.52],round:[0,0,0,0,0,1,.84,0,.67,.93,.59,.58,.77,.61,.97,1,0,.42,.85,.71,.22,.46,.91,1,1,0,0,0,0,.27,.76,.44,.63,1,1,.77,.64,1,.41,.3,.78,0,0,.89,.76,.7,.34,.64,.91,1,1,.93,1,1,1,1,0,0,.96,1,1]},{quem:"gui",start:87.267,end:88.633,boca:[0,0,.32,.57,.73,.84,.85,.64,.29,.25,.61,.87,.93,.96,.99,1,1,1,.98,.9,.79,.77,.86,.87,.78,.7,.71,.75,.73,.68,.64,.62,.56,.4,.2,0,0,0,.18,.58,.64],round:[0,0,.96,1,1,.92,.96,1,0,0,.81,.99,.96,.93,.94,.98,.88,.9,.94,.82,0,.52,1,1,1,.87,1,1,1,1,1,1,1,.76,0,0,0,0,0,0,0]},{quem:"davi",start:88.467,end:90.367,boca:[0,0,0,.45,.85,.9,.67,.57,.67,.55,.18,0,.37,.62,.52,.23,.27,.58,.77,.7,.57,.57,.62,.63,.6,.6,.62,.65,.71,.76,.71,.66,.79,.9,.69,.28,.16,.46,.73,.73,.65,.44,.17,.24,.62,.89,.84,.66,.58,.58,.49,.3,0,0,.29,.61,.65],round:[0,0,0,0,0,.44,.39,.49,.42,.51,0,0,.23,.91,.74,0,0,.01,0,0,.65,.96,.96,1,1,1,1,.96,.97,.97,1,1,.91,1,.85,0,0,0,.7,.44,0,0,0,0,.92,.81,.68,.57,.46,.3,.29,0,0,0,0,1,.76]},{quem:"gui",start:90.167,end:92.167,boca:[.43,.47,.44,.57,.76,.91,.93,.71,.36,0,.22,.67,.93,.97,.99,1,1,.99,.97,.93,.86,.75,.66,.62,.6,.56,.46,.41,.54,.7,.75,.75,.81,.79,.68,.57,.57,.7,.79,.79,.79,.79,.77,.77,.78,.77,.74,.63,.41,.14,0,0,0,0,0,0,0,.23,.41,.34],round:[.21,.18,.77,1,1,.76,.9,1,1,0,0,1,.92,.86,.77,.89,.92,.87,.94,.81,.87,.33,0,0,0,0,0,0,.77,1,1,.22,.89,1,0,0,0,.94,.93,.92,1,.79,.97,.77,.85,1,.97,1,.95,0,0,0,0,0,0,0,0,0,1,1]},{quem:"mae",start:103.4,end:105.967,boca:[0,0,0,0,.16,.49,.68,.75,.81,.83,.86,.93,.97,.99,1,.98,.93,.88,.86,.88,.9,.88,.83,.76,.7,.62,.47,.25,0,0,0,0,.12,.4,.64,.75,.79,.78,.8,.88,.94,.96,.99,.93,.8,.78,.87,.93,.95,.84,.62,.64,.82,.82,.64,.6,.74,.9,.92,.9,.89,.89,.86,.86,.89,.9,.86,.76,.63,.42,.17,0,0,0,.17,.57,.61],round:[0,0,0,0,0,.89,.99,.89,.76,.96,.87,.65,.53,.51,.48,.46,.87,1,1,1,.99,.99,1,.99,1,1,1,0,0,0,0,0,0,1,1,.92,0,0,0,.66,.82,1,1,1,.49,.16,.86,.83,.98,1,1,.11,1,.97,0,0,.65,.86,.8,.95,.88,.47,.82,.79,.7,.91,.98,1,1,1,0,0,0,0,0,.64,1]},{quem:"gui",start:105.767,end:107,boca:[.14,.15,0,.19,.55,.8,.87,.92,.95,.94,.91,.9,.95,.99,1,.99,.98,.97,.98,.98,.96,.92,.89,.87,.8,.66,.45,.23,0,0,0,0,0,0,.19,.57,.58],round:[0,0,0,0,.64,1,1,1,1,1,.79,.36,.96,.89,.89,.98,.96,1,1,1,1,1,1,.88,1,1,.32,0,0,0,0,0,0,0,0,.99,1]},{quem:"mae",start:106.8,end:108.4,boca:[0,0,0,.2,.62,.86,.82,.56,.35,.56,.86,.95,.95,.96,.98,.96,.73,.36,.29,.51,.73,.9,.99,.93,.75,.59,.63,.83,.96,.95,.93,.94,.93,.88,.79,.7,.63,.58,.41,.18,0,0,0,0,.14,.44,.67,.56],round:[0,0,0,0,.99,1,1,.85,.61,0,.92,.87,.9,1,1,1,1,.98,0,0,0,.11,1,1,.57,0,0,.94,.91,.97,1,.93,.62,.77,.82,.83,.77,1,.98,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:108.2,end:110.667,boca:[0,0,.15,.47,.7,.8,.87,.89,.88,.86,.8,.7,.58,.36,0,0,0,0,0,0,0,0,.29,.58,.72,.76,.85,.92,.93,.92,.94,.93,.84,.56,.42,.73,.98,1,1,1,1,.99,.97,.93,.89,.84,.74,.56,.31,0,0,.2,.45,.64,.72,.74,.73,.72,.7,.68,.65,.61,.58,.58,.56,.51,.45,.41,.4,.38,.35,.32,.25,.12],round:[0,0,0,0,0,0,1,.93,.97,.87,.98,.57,.91,0,0,0,0,0,0,0,0,0,0,0,0,0,.16,.85,.82,.71,.9,.92,1,.96,.07,.84,1,1,.98,.96,1,.99,1,1,.99,.95,.95,.93,.89,0,0,0,.09,0,0,0,0,.01,.34,.41,.42,.53,.39,.74,.87,.55,.42,.31,.22,.19,0,.15,0,0]},{quem:"mae",start:110.5,end:114.433,boca:[0,0,0,0,0,.27,.49,.68,.77,.73,.62,.62,.78,.91,.92,.91,.86,.77,.6,.43,.53,.77,.78,.51,.26,.4,.68,.78,.71,.62,.64,.69,.79,.93,.99,1,.99,.98,.98,.95,.9,.87,.75,.57,.5,.47,.46,.6,.8,.89,.86,.77,.71,.75,.79,.75,.68,.6,.45,.23,0,0,0,0,.25,.62,.74,.61,.62,.83,.94,.93,.92,.9,.72,.35,0,0,.19,.64,.94,1,.97,.95,.98,1,.97,.88,.78,.72,.65,.71,.88,.94,.92,.93,.9,.82,.74,.75,.84,.82,.64,.47,.41,.44,.47,.46,.42,.29,0,0,0,0,0,.16,.56,.64],round:[0,0,0,0,0,0,0,0,.97,1,1,1,.59,.86,.82,.8,.87,.23,0,0,0,.94,.94,.88,0,0,.72,.88,1,1,1,1,.97,1,1,1,.97,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,.91,.98,0,0,.99,.84,.96,.96,.82,1,.99,0,0,0,0,.92,.91,.85,.76,1,1,1,.48,.01,.4,.86,.92,.97,.94,.8,1,1,.98,.61,.46,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,.13,.85]},{quem:"mae",start:156.7,end:158.567,boca:[0,0,0,.23,.5,.67,.76,.68,.44,.39,.63,.89,.93,.71,.37,.16,.21,.54,.82,.89,.91,.88,.82,.8,.77,.77,.87,.91,.84,.82,.89,.97,1,.98,.95,.88,.8,.77,.77,.75,.76,.79,.78,.77,.73,.57,.33,.14,0,0,0,0,0,0,.21,.42],round:[0,0,0,0,0,0,.13,.96,.96,.81,0,.94,.84,.77,.91,0,0,0,.89,.79,.96,.86,0,0,0,0,.62,.69,.74,.73,.88,.72,.71,.96,.95,1,0,0,0,0,0,.99,.92,1,1,1,.74,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:158.367,end:160.667,boca:[0,0,0,0,.22,.59,.81,.85,.85,.86,.9,.91,.88,.88,.93,.96,.98,.99,1,1,.97,.82,.57,.34,.16,0,0,0,0,0,0,.17,.49,.68,.74,.8,.83,.84,.81,.8,.85,.81,.75,.83,.87,.79,.78,.86,.91,.91,.9,.94,.98,.99,.96,.92,.89,.86,.84,.77,.61,.37,.13,0,0,0,0,0,.14],round:[0,0,0,0,0,0,0,0,0,0,0,.94,.81,.87,1,.91,.78,.82,.74,.92,1,.91,0,0,0,0,0,0,0,0,0,0,1,1,.97,1,1,.93,0,0,.93,1,.66,.67,.88,0,0,.47,.89,.89,.62,.52,.97,1,1,1,1,1,1,1,1,.71,0,0,0,0,0,0,0]},{quem:"prof",start:180.167,end:183.067,boca:[0,0,0,.19,.6,.85,.85,.84,.86,.83,.84,.9,.89,.79,.71,.76,.89,.96,.87,.54,.17,.22,.65,.94,.99,.99,.99,.98,.93,.86,.88,.92,.89,.82,.79,.82,.86,.82,.73,.63,.55,.58,.66,.66,.56,.4,.24,0,0,0,0,.31,.49,.62,.8,.92,.92,.89,.86,.8,.78,.87,.87,.59,.23,0,.17,.57,.9,.99,1,.94,.82,.79,.89,.92,.75,.53,.36,.2,0,0,0,0,0,.23,.28],round:[0,0,0,0,0,1,.67,.64,.64,.38,0,1,.94,0,0,0,.59,1,1,.72,0,0,.37,1,.97,.87,.84,.91,.9,0,0,.82,.86,.59,.01,.4,.85,.64,.67,.71,.75,0,0,0,.73,0,0,0,0,0,0,1,1,.86,.55,.91,.27,.41,.89,1,.74,.67,.92,.32,0,0,0,0,.55,1,1,1,1,1,.86,1,.87,.69,.78,0,0,0,0,0,0,0,0]},{quem:"tiago",start:182.9,end:185.067,boca:[0,0,.16,.52,.79,.91,.97,.98,.97,.96,.91,.85,.85,.86,.81,.75,.67,.51,.27,0,0,0,.17,.53,.79,.89,.95,.94,.85,.76,.71,.79,.92,.91,.85,.87,.91,.91,.87,.86,.87,.89,.9,.9,.92,.93,.94,.98,.99,.99,1,1,1,.99,.94,.82,.67,.46,.2,0,0,0,.12,.44,.51],round:[0,0,0,.55,.88,.87,.61,.41,.36,.22,0,.56,.65,.58,.28,.14,.6,.71,0,0,0,0,0,.26,.21,0,0,0,0,0,.08,.26,0,.04,0,0,.14,0,.14,.91,.97,.15,0,.04,.07,.44,.27,.06,0,0,0,0,0,0,.04,0,.16,.27,0,0,0,0,0,0,0]},{quem:"tiago",start:210.9,end:212.6,boca:[0,0,0,.17,.38,.48,.47,.42,.36,.36,.44,.47,.49,.68,.91,.91,.62,.44,.56,.71,.87,.99,.93,.8,.71,.74,.86,.93,.91,.88,.84,.87,.92,.92,.93,.95,.95,.92,.87,.83,.77,.71,.57,.32,0,0,0,0,0,.3,.41],round:[0,0,0,0,0,0,0,0,0,0,0,.84,0,0,.64,1,.99,.71,0,.08,.39,.78,.92,1,1,1,.97,.66,.77,.92,.68,.85,1,1,.94,.99,.79,.9,.94,.97,.91,.98,1,1,0,0,0,0,0,0,0]},{quem:"gui",start:212.4,end:215.6,boca:[0,0,0,0,.29,.58,.73,.78,.85,.91,.92,.91,.93,.94,.86,.77,.79,.85,.83,.75,.6,.42,.29,.22,.12,0,0,0,0,0,.3,.66,.79,.75,.76,.82,.7,.46,.5,.74,.87,.85,.77,.72,.71,.7,.71,.75,.84,.89,.89,.89,.91,.94,.95,.94,.87,.77,.68,.65,.68,.79,.94,1,1,.98,.96,.95,.97,.98,1,.99,.93,.83,.75,.71,.73,.82,.92,.96,.89,.78,.74,.81,.86,.83,.76,.6,.35,0,0,0,0,0,0,0],round:[0,0,0,0,0,0,0,0,.07,.98,.92,1,1,1,1,1,1,1,1,1,.84,0,0,0,0,0,0,0,0,0,.17,.78,0,0,0,0,1,.81,.22,.54,1,.81,0,0,0,0,0,0,1,1,.87,.91,1,1,1,1,1,1,1,1,1,.74,.99,1,1,.96,1,1,1,1,.99,.96,1,.51,.03,0,0,.34,1,1,.99,1,1,.62,.98,.97,1,1,.89,0,0,0,0,0,0,0]},{quem:"tiago",start:249.6,end:252,boca:[.15,0,0,0,0,0,.23,.7,.95,.92,.89,.93,.93,.78,.56,.56,.78,.95,.98,.95,.87,.78,.78,.8,.76,.67,.54,.36,.16,0,0,0,.38,.75,.94,.9,.75,.72,.84,.91,.93,.93,.91,.91,.92,.94,.92,.85,.81,.82,.88,.92,.88,.86,.88,.92,.96,.99,.98,.93,.9,.9,.89,.88,.81,.7,.57,.37,.16,0,0,0],round:[0,0,0,0,0,0,0,.51,.79,.86,.66,.73,.72,.96,.85,.63,.11,.96,1,1,.89,1,.88,.94,.96,1,1,1,0,0,0,0,.36,0,.97,.83,1,.95,.76,.87,.89,1,1,.91,.99,.89,0,0,0,0,.39,1,1,1,.99,1,1,1,.87,.75,.46,.67,.71,.74,.89,.74,.81,.86,0,0,0,0]},{quem:"gui",start:251.8,end:253.9,boca:[.34,.27,0,0,0,0,.23,.69,.85,.67,.54,.49,.58,.82,.77,.47,.4,.63,.79,.6,.25,0,.18,.39,.53,.58,.64,.75,.65,.38,.43,.71,.89,.95,.98,.98,.95,.92,.95,.98,.95,.82,.51,.31,.55,.87,.97,.99,.98,.97,.96,.94,.88,.79,.75,.76,.74,.63,.44,.22,0,0,0],round:[.81,0,0,0,0,0,0,.61,.66,0,0,0,0,1,.44,0,0,.28,1,.15,0,0,0,0,0,0,0,.84,1,.86,0,1,1,.99,.84,.87,.93,.31,.81,.7,.74,.89,1,.16,0,.74,.58,.77,.81,.87,1,1,1,.71,0,.41,1,1,1,0,0,0,0]},{quem:"mae",start:266.8,end:269.3,boca:[0,0,0,0,0,0,.35,.57,.7,.76,.76,.74,.78,.88,.96,.99,1,1,1,.95,.89,.87,.87,.87,.87,.87,.88,.88,.9,.92,.94,.91,.81,.59,.3,0,0,0,0,.16,.5,.82,.94,.92,.85,.78,.7,.66,.68,.78,.88,.91,.93,.95,.95,.93,.9,.86,.7,.38,.33,.68,.92,.93,.86,.78,.71,.63,.52,.37,.19,0,0,0,0],round:[0,0,0,0,0,0,.96,.94,.9,.68,.89,.36,.52,.44,.37,.41,.47,.54,.42,.56,.87,1,1,1,.67,.53,.38,.36,.3,.14,.12,.38,1,.96,.49,0,0,0,0,0,.59,.54,.59,.53,.67,1,0,0,0,.31,.6,.46,.51,.61,.56,.64,.67,.99,1,.94,.71,.51,.53,.57,.61,.66,.7,.79,.98,.83,0,0,0,0,0]},{quem:"davi",start:326.033,end:327.667,boca:[.46,.6,.57,.59,.74,.91,.97,.91,.74,.64,.76,.78,.47,.26,.51,.84,.95,.98,.99,.96,.88,.72,.61,.71,.86,.88,.76,.55,.29,0,0,0,0,0,0,0,0,.15,.26,.43,.66,.78,.8,.83,.84,.81,.77,.71,.5],round:[.51,.44,0,0,0,.47,1,1,1,.89,.89,1,1,0,.34,1,1,1,1,.95,.63,.66,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,.6,.96,.99,.96,1,1,.96,.95,.74,.46]},{quem:"gui",start:327.633,end:330.7,boca:[.52,.63,.56,.52,.49,.44,.37,.29,.25,.19,0,0,0,0,0,0,0,0,.24,.43,.57,.7,.85,.92,.93,.97,1,1,.98,.97,.98,1,.98,.95,.88,.71,.48,.32,.23,.14,0,0,0,.15,.45,.62,.64,.66,.67,.69,.7,.67,.61,.57,.56,.56,.56,.54,.52,.53,.53,.54,.58,.62,.66,.69,.71,.66,.53,.54,.68,.65,.43,.32,.41,.6,.79,.84,.79,.74,.71,.66,.47,.16,0,0,0,0,0,0,0,.17],round:[.46,.05,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,.9,.82,.84,.74,.81,.7,.87,.89,.97,1,1,1,1,.91,0,0,0,0,0,0,0,0,1,1,1,.81,.83,.87,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,.99,1,1,1,1,1,1,.81,0,0,0,.99,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0]},{quem:"davi",start:356.367,end:359.033,boca:[.53,.74,.81,.93,.98,.95,.88,.83,.78,.69,.59,.6,.76,.86,.85,.86,.9,.87,.81,.73,.55,.32,.12,0,0,.19,.62,.9,.95,.98,.94,.83,.79,.84,.89,.89,.9,.89,.83,.76,.77,.83,.86,.87,.88,.88,.82,.72,.58,.34,0,0,0,0,0,0,0,0,0,0,.25,.75,.86,.47,0,.18,.56,.78,.77,.73,.73,.72,.71,.75,.86,.87,.77,.83,.93,.69],round:[.97,1,0,.82,.81,.56,.24,.16,.81,.99,1,.78,.37,.62,.5,.49,.88,.94,1,1,.99,1,0,0,0,0,1,1,.53,.94,.84,.43,.64,.68,.9,.47,0,0,.34,0,0,0,0,.57,.67,1,.99,1,1,1,0,0,0,0,0,0,0,0,0,0,0,.76,1,0,0,0,.34,1,1,.94,.9,.85,.72,.57,.79,1,.97,.76,1,1]},{quem:"gui",start:359,end:361.2,boca:[.71,.98,.97,.91,.76,.46,.26,.4,.52,.51,.52,.57,.63,.51,.22,0,.26,.39,.44,.52,.71,.88,.95,.92,.84,.78,.75,.79,.91,.99,.99,.97,.95,.95,.96,.96,.96,.97,.99,1,.98,.89,.82,.83,.85,.84,.79,.73,.72,.78,.8,.77,.71,.59,.36,0,0,0,0,0,0,0,0,0,.17,.14],round:[1,.87,1,.96,.97,1,0,.28,.27,0,0,.08,.74,1,0,0,0,0,0,0,.51,.95,.84,.92,1,1,1,.94,1,1,.98,.96,1,.96,.82,.74,.89,.74,.56,.64,.69,.66,0,0,0,0,0,0,0,.69,1,1,1,1,.49,0,0,0,0,0,0,0,0,0,0,0]},{quem:"caio",start:388.5,end:391.4,boca:[0,.3,.68,.87,.73,.6,.77,.93,.96,.97,.96,.95,.98,1,.99,.96,.91,.91,.95,.97,.98,.99,.95,.84,.79,.85,.93,.93,.81,.6,.36,.14,0,0,0,0,0,0,0,0,.15,.45,.64,.7,.7,.65,.63,.67,.69,.69,.76,.83,.85,.87,.84,.69,.68,.86,.94,.94,.95,.94,.93,.76,.45,.42,.71,.9,.84,.75,.75,.75,.7,.62,.45,.19,0,0,0,0,.36,.58,.75,.88,.92,.87,.61],round:[0,0,.97,.94,1,.53,.93,.97,.84,1,1,1,.94,.97,.99,1,1,1,1,1,.84,.87,.76,.42,0,.16,.89,.91,1,.84,.79,0,0,0,0,0,0,0,0,0,0,1,1,.86,.75,.56,.77,0,0,0,0,.86,.82,.71,.89,.37,0,.8,.89,.65,.29,.71,.76,.97,1,0,0,1,.99,1,1,1,1,1,1,0,0,0,0,0,0,0,0,.97,.91,.68,.17]},{quem:"pef",start:398.967,end:403.467,boca:[0,0,0,.14,.5,.83,.97,.99,1,1,.99,.96,.88,.79,.74,.75,.72,.59,.41,.25,0,0,0,0,0,0,0,.27,.75,.98,.94,.85,.79,.88,.97,.92,.84,.88,.97,.98,.94,.92,.95,.95,.85,.71,.73,.83,.83,.73,.63,.71,.88,.9,.84,.87,.95,.97,.96,.94,.92,.91,.93,.95,.87,.79,.89,.96,.93,.94,.95,.95,.95,.92,.87,.8,.71,.67,.67,.6,.44,.28,.15,0,0,0,0,0,.43,.8,.89,.83,.88,.96,.87,.73,.77,.88,.9,.84,.77,.69,.69,.83,.91,.86,.75,.74,.88,.97,.95,.94,.9,.76,.6,.55,.6,.74,.91,.95,.91,.87,.79,.65,.54,.45,.4,.31,.13,0,0,0,0,0,0],round:[0,0,0,0,.96,.64,1,1,1,.95,.87,.78,.47,.11,.92,1,.7,0,0,0,0,0,0,0,0,0,0,0,.6,.97,1,.71,.14,0,1,1,.92,1,1,.99,.94,1,.82,.78,.91,.97,0,.82,.19,0,0,0,.97,.94,1,1,1,1,.98,.89,.97,1,1,1,1,1,.84,1,1,1,1,.92,.92,.87,.81,.97,.94,.84,1,.86,.74,0,0,0,0,0,0,0,.82,1,.68,0,.41,1,1,.86,0,.04,.81,.01,0,0,0,.57,.95,.81,.43,0,.72,.9,.89,.88,.87,.89,1,1,1,.29,.91,.91,.87,.73,.68,.57,.6,0,0,.34,0,0,0,0,0,0,0]},{quem:"cic",start:430.433,end:431.6,boca:[.38,.43,.27,0,0,0,0,0,0,.42,.78,.88,.79,.66,.59,.58,.58,.61,.74,.9,.98,.99,.97,.91,.81,.72,.76,.79,.73,.71,.79,.87,.92,.97,.75],round:[1,1,0,0,0,0,0,0,0,0,.75,.65,.65,0,0,0,0,0,0,.33,1,.99,.76,.61,.77,1,.99,.92,1,1,1,1,1,.91,.74]},{quem:"tiago",start:467.6,end:472.067,boca:[.24,.36,.52,.72,.86,.93,.98,1,1,.94,.71,.46,.44,.54,.57,.57,.59,.63,.66,.66,.7,.69,.54,.37,.3,.23,0,0,0,0,0,0,0,.17,.17,.25,.57,.79,.73,.45,.29,.47,.44,.14,.25,.75,.94,.71,.54,.59,.54,.49,.57,.62,.66,.73,.82,.92,.98,.98,.85,.59,.31,.26,.52,.76,.84,.78,.68,.63,.63,.56,.52,.62,.72,.69,.42,.23,.4,.64,.79,.86,.82,.69,.56,.35,0,0,0,0,0,0,0,0,0,.12,.32,.6,.78,.79,.67,.57,.55,.61,.79,.95,.97,.77,.61,.69,.66,.55,.45,.29,.36,.6,.53,.21,.22,.59,.75,.67,.72,.83,.81,.69,.42,.15,0,0,0,0,0,0],round:[0,.86,.91,.79,.76,.64,.7,.68,.67,.75,.72,.01,.01,.49,.71,.59,.63,.69,.67,.64,.58,.6,.62,.53,.76,0,0,0,0,0,0,0,0,0,0,0,.35,.92,.97,.97,0,.78,1,0,0,.79,.74,.84,.98,.86,.92,.2,.51,1,.86,.92,.86,.66,.64,.55,.62,0,0,0,.69,.7,.63,.34,0,.07,.44,.81,.57,0,.47,.66,.67,0,.96,.84,.81,.67,.62,.55,.64,.7,0,0,0,0,0,0,0,0,0,0,1,.99,.82,.77,.42,0,0,0,.81,.81,.71,.64,0,0,.34,.98,.84,0,.42,.82,.75,0,0,.74,.58,.47,.59,.55,.66,.68,.73,0,0,0,0,0,0,0]},{quem:"mae",start:472.767,end:475.967,boca:[.17,.15,0,0,0,0,0,0,0,0,.21,.59,.86,.89,.85,.88,.9,.65,.46,.71,.96,.99,.98,.96,.82,.53,.4,.59,.8,.92,.98,1,.99,.92,.8,.76,.8,.74,.6,.51,.47,.56,.79,.92,.9,.83,.79,.81,.81,.76,.66,.43,.19,0,0,0,0,0,0,.26,.62,.83,.88,.86,.74,.67,.78,.89,.89,.85,.71,.56,.62,.79,.85,.86,.83,.62,.39,.42,.53,.58,.67,.85,.91,.82,.66,.41,.14,0,0,0,0,.17,.59,.67],round:[0,0,0,0,0,0,0,0,0,0,0,.76,.99,0,0,0,1,.97,.93,.49,.87,.68,.95,1,1,.31,.03,0,.64,.84,.81,.9,.91,.86,0,0,1,1,0,0,0,0,.87,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,.97,.98,0,0,.72,.99,1,1,1,.99,.47,.92,.9,.88,1,.99,.66,0,0,0,0,1,1,1,1,.92,0,0,0,0,0,0,.54,1]},{quem:"gui",start:475.8,end:477.633,boca:[0,0,0,.29,.68,.92,.98,1,1,1,1,.98,.92,.83,.75,.63,.41,.18,0,0,0,0,0,0,.35,.54,.66,.71,.71,.7,.69,.68,.68,.7,.76,.76,.75,.74,.54,.35,.55,.72,.66,.65,.73,.8,.84,.87,.88,.88,.86,.86,.86,.82,.58],round:[0,0,0,0,1,1,1,1,1,1,1,1,1,.96,1,.97,.74,0,0,0,0,0,0,0,.81,.89,.79,.22,0,0,0,0,0,0,1,1,1,.89,1,.75,.6,.94,1,1,1,1,1,1,1,1,1,1,1,1,1]},{quem:"mae",start:500.267,end:510.767,boca:[0,0,0,0,0,0,0,.21,.66,.94,.99,.99,.99,.99,.99,.99,1,.99,.99,.98,.99,.99,.99,.91,.75,.61,.52,.6,.84,.97,.98,.95,.93,.91,.88,.77,.63,.6,.65,.58,.4,.47,.78,.97,.99,.99,.98,.91,.76,.67,.77,.92,.98,.93,.87,.88,.81,.58,.39,.44,.7,.86,.88,.9,.93,.97,.99,.98,.95,.95,.94,.91,.9,.9,.89,.85,.81,.74,.55,.37,.49,.81,.96,.92,.9,.89,.8,.76,.85,.84,.76,.83,.89,.83,.7,.58,.63,.77,.82,.77,.68,.52,.25,0,0,0,0,0,0,0,0,0,0,0,.32,.67,.92,.99,.93,.81,.82,.94,.99,.96,.77,.58,.69,.89,.95,.89,.85,.92,.95,.84,.72,.75,.86,.89,.87,.73,.59,.67,.83,.85,.79,.79,.88,.97,1,1,.98,.94,.9,.89,.9,.89,.82,.63,.41,.4,.6,.8,.89,.83,.68,.61,.67,.72,.76,.75,.51,.16,0,.12,.48,.82,.94,.92,.84,.8,.83,.86,.89,.9,.92,.92,.9,.86,.82,.78,.71,.66,.66,.61,.39,0,0,0,0,0,0,0,0,0,0,0,0,0,.14,.52,.84,.92,.76,.49,.5,.69,.84,.92,.96,.98,.98,.98,.98,1,1,1,1,.99,.83,.58,.56,.54,.35,.38,.59,.63,.6,.67,.71,.66,.61,.63,.71,.75,.64,.55,.63,.77,.8,.74,.65,.54,.34,0,0,0,0,0,0,0,0,0,0,0,0,0,.3,.64,.84,.88,.9,.9,.84,.75,.77,.85,.7,.35,.3,.63,.79,.71,.66,.69,.73,.71,.74,.79,.71,.62,.61,.68,.76,.8,.77,.73,.77,.81,.84,.84,.74,.47,.25,.26,.37,.54,.67,.68,.66,.65,.62,.59,.57,.51,.31],round:[0,0,0,0,0,0,0,0,.98,1,1,1,.94,.87,.99,1,.95,.79,.87,.92,.87,.92,.92,1,0,0,.79,1,.74,.85,.88,.79,.71,1,1,1,0,0,0,0,0,0,.95,1,1,1,1,1,1,0,0,.91,.98,.96,1,1,.92,0,0,0,1,1,1,1,1,1,.94,1,1,1,.89,1,1,.97,.96,1,0,0,0,.63,.19,.96,.86,.95,1,.97,1,1,1,1,1,.94,.97,.95,1,.7,.83,1,1,.96,1,1,0,0,0,0,0,0,0,0,0,0,0,0,.9,.68,.98,1,1,.97,.87,.91,.82,.88,.99,1,.41,.99,1,.42,.39,.94,1,1,1,.64,.86,.94,1,1,.54,.98,.79,.89,1,1,1,.9,.78,.81,.82,1,1,.99,1,1,.91,.85,0,0,.11,.99,.97,1,.77,0,.54,1,.89,.89,1,0,0,0,0,1,1,1,1,1,.97,1,1,1,1,1,1,1,1,1,1,.94,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.49,1,.9,.96,.95,0,0,.89,1,1,1,1,1,1,1,1,1,.99,1,1,.87,0,1,.9,0,.25,1,.16,.99,.92,0,0,0,.38,1,1,.8,1,.91,.95,.9,.99,1,.91,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.83,1,1,1,1,1,.88,1,1,.96,.89,.12,1,1,0,0,0,1,1,.97,1,0,0,0,.53,.77,.92,1,1,1,1,1,1,1,.54,0,0,.04,.81,.93,.89,.98,1,1,1,1,1,1]},{quem:"gui",start:510.567,end:512.167,boca:[.48,.63,.61,.6,.57,.42,.19,0,0,0,0,.13,.48,.81,.95,.98,.98,.96,.97,.99,1,1,1,.99,.97,.86,.66,.5,.44,.4,.36,.32,.28,.21,0,0,0,.16,.55,.81,.85,.89,.95,.96,.93,.9,.87,.62],round:[1,1,1,1,1,1,0,0,0,0,0,0,.31,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,.52,1,.97,1,1,.95,0,0,0,0]},{quem:"juiz",start:548.567,end:549.6,boca:[0,0,0,.21,.66,.95,.99,.91,.79,.82,.9,.83,.73,.79,.92,.94,.95,.91,.78,.71,.74,.84,.87,.73,.51,.34,.3,.25,.15,0,0],round:[0,0,0,0,.46,.94,.85,.89,1,1,.99,1,1,.94,1,1,1,.94,0,0,0,.85,.84,.84,.81,.43,0,0,0,0,0]},{quem:"gui",start:578.933,end:580.333,boca:[0,0,0,0,0,0,0,0,.28,.6,.8,.85,.87,.91,.97,.97,.81,.63,.74,.94,1,.99,.98,.97,.93,.87,.75,.66,.73,.79,.75,.66,.54,.45,.35,.2,0,0,0,0,0,.2],round:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,.88,.62,.81,.72,0,.57,1,1,1,.82,.84,.95,1,.42,0,0,0,1,.36,.43,.37,0,0,0,0,0,0,0]},{quem:"gui",start:620.9,end:623.067,boca:[0,0,0,.4,.73,.89,.89,.8,.77,.85,.94,.97,.95,.91,.8,.56,.29,0,0,0,0,0,.15,.14,0,0,0,0,0,0,0,.35,.68,.85,.85,.7,.53,.61,.84,.96,.97,.86,.6,.43,.61,.85,.9,.83,.68,.54,.46,.4,.43,.52,.56,.7,.9,.98,1,1,.98,.94,.84,.56,.17],round:[0,0,0,1,1,.81,.85,.17,0,.82,.96,1,.8,.86,.97,.27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.42,.22,0,0,0,0,0,.91,1,.98,1,1,.56,.22,.93,1,.76,.22,0,0,.07,0,.76,.84,.8,.64,.99,.99,1,1,1,1,.89,0]},{quem:"davi",start:623.3,end:625.233,boca:[0,0,0,.44,.83,.99,.97,.88,.87,.95,.99,.98,.97,.96,.96,.95,.94,.9,.86,.86,.78,.69,.75,.83,.84,.88,.89,.88,.89,.84,.77,.81,.9,.89,.83,.84,.89,.9,.89,.88,.86,.85,.84,.78,.65,.44,.22,0,0,0,0,0,0,0,0,0,0,.21],round:[0,0,0,0,.21,1,1,1,.39,1,1,1,1,1,1,1,1,1,.95,.97,1,.97,.03,.58,.32,1,.99,0,0,0,0,.94,1,1,.72,1,1,1,1,1,1,1,1,1,1,.55,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:646.5,end:648.133,boca:[0,0,0,.13,.5,.86,.99,1,1,.99,.98,.97,.93,.87,.85,.88,.89,.88,.9,.94,.95,.91,.88,.89,.92,.93,.91,.88,.86,.84,.82,.8,.7,.48,.21,0,0,0,0,0,0,.13,.44,.72,.8,.78,.77,.85,.69],round:[0,0,0,0,.78,1,1,1,1,1,1,1,.11,0,0,.97,1,1,1,1,1,.78,0,0,1,1,1,.99,1,1,1,1,1,.9,0,0,0,0,0,0,0,0,0,.74,1,1,1,1,1]},{quem:"davi",start:647.933,end:650.133,boca:[.41,.58,.52,.51,.7,.91,.97,.96,.94,.91,.79,.66,.71,.82,.88,.91,.9,.88,.88,.87,.87,.94,.98,.97,.96,.96,.93,.9,.88,.86,.85,.77,.69,.7,.75,.75,.67,.43,.13,0,0,0,0,0,0,0,0,.14,.46,.78,.95,.99,.89,.68,.64,.82,.93,.83,.73,.78,.89,.89,.85,.78,.52,.16],round:[.74,1,1,1,1,1,1,1,1,1,1,.97,.74,.93,.97,0,0,0,.87,.84,0,.79,1,1,1,1,1,1,.97,1,.99,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.39,0,1,.95,1,1,.33,.49,1,1,1,1,1,1,1,1,1,0]},{quem:"gui",start:650.267,end:652.433,boca:[0,0,0,.15,.53,.84,.94,.96,.92,.89,.89,.9,.95,.97,.94,.95,.97,.94,.91,.92,.92,.92,.93,.97,.99,.99,.97,.94,.9,.74,.46,.19,0,0,0,0,0,0,0,0,0,.31,.65,.9,.88,.75,.79,.93,.98,.98,.99,.98,.94,.89,.89,.91,.91,.88,.8,.64,.43,.22,0,0,0],round:[0,0,0,0,.4,.94,.99,1,0,0,0,0,1,.56,0,.15,1,.89,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,.15,.27,1,1,1,0,.51,1,1,1,1,.72,0,.08,1,1,1,1,.96,.3,0,0,0,0]},{quem:"davi",start:674.5,end:678.2,boca:[0,0,0,.18,.61,.93,.95,.89,.91,.94,.96,.97,.95,.91,.88,.89,.88,.84,.82,.6,.35,.55,.87,.97,.97,.96,.95,.94,.7,.42,.53,.79,.89,.88,.83,.84,.89,.89,.71,.44,.46,.71,.8,.75,.66,.51,.28,0,0,0,0,0,0,0,0,0,0,0,.14,.5,.63,.45,.49,.75,.83,.68,.68,.87,.9,.84,.81,.87,.91,.89,.87,.6,.25,.4,.79,.87,.69,.6,.7,.87,.96,.98,.96,.93,.92,.95,.98,.99,.98,.98,.97,.96,.93,.85,.76,.65,.48,.47,.68,.82,.85,.85,.85,.84,.76,.62,.39],round:[0,0,0,0,0,.31,.92,.91,.96,1,.97,.97,1,1,.73,0,0,0,.26,1,.86,0,.47,1,1,1,.98,.97,1,.89,.36,1,.96,.29,0,.34,1,1,1,1,0,.9,.94,.77,.93,.88,0,0,0,0,0,0,0,0,0,0,0,0,0,.53,.9,1,0,.89,1,0,0,1,.47,0,0,.16,1,1,1,1,0,.42,1,.94,1,.79,0,.42,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.77,0,.15,.8,.52,.9,1,.95,1,1]},{quem:"davi",start:678.667,end:680.833,boca:[0,0,.13,.44,.66,.73,.75,.81,.92,.99,1,1,.99,.93,.85,.85,.91,.97,.99,.99,.88,.74,.74,.81,.85,.89,.94,.96,.95,.94,.93,.97,.99,.98,.95,.94,.95,.84,.69,.73,.89,.98,.98,.96,.95,.94,.92,.9,.88,.81,.64,.34,0,0,0,0,0,0,0,0,.22,.69,.96,.98,.73],round:[0,0,0,0,0,0,0,0,.08,1,1,1,1,1,1,0,0,.52,.91,1,1,.96,0,0,1,.92,1,.47,0,0,0,1,1,1,1,1,1,1,.99,.16,1,1,1,1,1,1,1,1,1,1,1,.95,0,0,0,0,0,0,0,0,0,.86,1,0,0]},{quem:"gui",start:693.467,end:695.633,boca:[0,0,0,0,.2,.65,.93,.93,.86,.79,.72,.68,.68,.69,.71,.72,.77,.91,.99,.95,.79,.56,.4,.45,.65,.79,.86,.93,.92,.83,.77,.59,.33,.4,.56,.54,.62,.74,.72,.68,.71,.69,.64,.71,.89,.91,.69,.52,.67,.81,.76,.74,.83,.94,.98,.97,.99,.95,.74,.37,0,0,0,0,0],round:[0,0,0,0,0,1,1,.97,1,0,0,0,0,0,.87,.97,1,1,1,1,.51,0,0,0,.69,.97,1,.75,.88,0,0,.99,.06,0,1,1,.9,.89,0,0,0,.63,.53,.52,.74,.99,.12,0,0,.83,.83,.88,.89,.72,.82,.89,1,.95,.96,.34,0,0,0,0,0]},{quem:"davi",start:696.567,end:699.633,boca:[0,0,0,.18,.61,.92,.97,.83,.58,.63,.89,.91,.66,.42,.44,.61,.65,.53,.45,.47,.46,.41,.48,.62,.63,.5,.47,.55,.66,.74,.71,.59,.51,.58,.7,.76,.84,.95,.94,.83,.79,.77,.7,.55,.24,.13,.37,.58,.6,.6,.64,.67,.72,.8,.89,.91,.87,.83,.79,.76,.65,.47,.51,.6,.34,0,0,.31,.6,.73,.69,.64,.6,.43,.39,.42,.2,0,.17,.43,.4,.29,.27,.14,0,0,0,0,.19,.18,0,0],round:[0,0,0,0,.21,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.99,.94,1,1,1,1,1,1,1,1,1,1,1,.86,0,0,.98,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.84,1,1,0,0,.97,1,1,1,.77,1,1,.89,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0]}]};var nv=Wa.total,iv=Wa.segs;function Xa(n,t){for(let e of Wa.falas){if(e.quem!==n||t<e.start-.05||t>e.end+.05)continue;let i=(t-e.start)*30,s=Math.floor(i),o=i-s,r=e.boca[Math.max(0,Math.min(e.boca.length-1,s))]||0,a=e.boca[Math.max(0,Math.min(e.boca.length-1,s+1))]||0,l=e.round[Math.max(0,Math.min(e.round.length-1,Math.round(i)))]||0;return{open:r+(a-r)*o,round:l}}return{open:0,round:0}}function Bc(n,t,e,i){let s=td(n,t,e.bg||"#BFE3F7",e.fov||32),o=s.scene.background;s.camera.near=e.near||.05,s.camera.far=e.far||500,s.camera.updateProjectionMatrix();let r=null,a=null,l=()=>{qa&&qa!==s&&qa._desmonta(),qa=s,a=s.scene=new Is,a.background=o,e.fog&&(a.fog=new ur(e.fog[0],e.fog[1],e.fog[2])),r=i(a,s)||(()=>({}))};return s._desmonta=()=>{r&&(a.traverse(c=>{if(c.geometry&&c.geometry.dispose(),c.material)for(let h of[].concat(c.material))h.map&&!h.map.userData.fixa&&h.map.image&&h.map.image.tagName==="CANVAS"&&h.map.image.__dyn&&h.map.dispose(),h.dispose()}),s.scene=new Is,s.scene.background=o,r=null,a=null)},s.update=(c,h)=>{r||l(),Rc.value=c,ui={t0:n,t1:t,viva:e.viva??1,scene:a,perto:e.perto},SE(a);let u=r(c,h,s.camera)||{};e.limpa!==!1&&xE(a,s.camera);let d=a.userData.vida;if(d&&e.vida!==!1){let f=c;for(let g of d)g(c,f,h)}return nd(u)},s}var qa=null,ui={t0:0,t1:1,viva:1},di=new R,Ho=new R,Ya=new R,Uc=n=>n.userData._at||(n.userData._at=(()=>{let t=[];return n.traverse(e=>{e.userData&&e.userData.ator&&t.push(e.userData.ator)}),t})());function SE(n){for(let t of Uc(n))t._ocultei&&(t.root.visible=!0,t._ocultei=!1)}function xE(n,t){let e=t.userData.alvo;if(!e)return;n.updateMatrixWorld(!0),Ho.copy(t.position),Ya.set(e[0],e[1],e[2]);let i=Ya.clone().sub(Ho),s=i.lengthSq();for(let o of Uc(n)){if(!o.root.visible||o.fixo)continue;let r=!1;for(let u=o.root.parent;u;u=u.parent)if(u.visible===!1){r=!0;break}if(r)continue;o.headG.getWorldPosition(di),di.y+=.26*(o.root.scale.x||1);let a=di.distanceTo(Ho),l=Math.max(0,Math.min(1,di.clone().sub(Ho).dot(i)/s)),c=di.distanceTo(Ho.clone().addScaledVector(i,l)),h=di.distanceTo(Ya)<.55;(a<.75||!h&&l>.02&&l<.8&&c<.3*(o.root.scale.x||1)&&a<Ho.distanceTo(Ya)-.4)&&(o.root.visible=!1,o._ocultei=!0)}}var No=(n,t)=>Math.sin(n*.71+t)*.6+Math.sin(n*1.37+t*2.1)*.3+Math.sin(n*2.9+t*3.3)*.1;function rd(n,t,e,i,s=0,o=ui.viva){let r=Er(t,i),a=Er(e,i);if(o>0){let l=Rc.value,c=Math.hypot(r[0]-a[0],r[1]-a[1],r[2]-a[2]),h=Math.min(1,Math.max(0,(l-ui.t0)/Math.max(.5,ui.t1-ui.t0))),u=ui.t1-ui.t0>6.5&&h>.5?.2*o:0,d=.05*o*(h*h*(3-2*h))+u;for(let g=0;g<3;g++)r[g]+=(a[g]-r[g])*d;let f=c*.011*o;r[0]+=No(l,1)*f,r[1]+=No(l,4)*f*.7,r[2]+=No(l,7)*f*.5,a[0]+=No(l,9)*f*.35,a[1]+=No(l,12)*f*.3,s+=No(l,15)*.006*o}if(ui.scene&&ui.perto!==!0){let l=Uc(ui.scene);for(let c of l)if(c.root.visible&&(c.headG.getWorldPosition(di),di.y+=.26*(c.root.scale.x||1),Math.hypot(di.x-a[0],di.y-a[1],di.z-a[2])<.45)){let h=(ui.perto||.71*(c.root.scale.x||1))/Math.tan(n.fov*Math.PI/360),u=Math.hypot(r[0]-a[0],r[1]-a[1],r[2]-a[2]);if(u<h&&u>.001)for(let d=0;d<3;d++)r[d]=a[d]+(r[d]-a[d])*h/u;break}}ed(n,r,a,s),n.userData.alvo=a}function Z(n,t,e,i="neutro",s={}){let o=t?Xa(t,e):{open:0,round:0},r=s.mouth||(o.open>0?{open:o.open,round:o.round,smile:s.smile}:{open:0,smile:s.smile});n.face({emo:i,blink:s.blink??od(e,n.seed||0),look:s.look||[0,0],brow:s.brow,lagrima:s.lagrima,olhosAbertos:s.olhosAbertos,blush:s.blush,lingua:s.lingua,pisca1:s.pisca1,mouth:r});let a=n.headG.rotation,l=n.torsoG.rotation,c=n._viva;if(c&&a.x===c.r[0]&&a.y===c.r[1]&&a.z===c.r[2]&&l.x===c.r[3]&&l.z===c.r[4]&&(a.x-=c.d[0],a.y-=c.d[1],a.z-=c.d[2],l.x-=c.d[3],l.z-=c.d[4]),!n.congelado&&s.vivo!==!1){let h=(n.seed||0)*1.7,u=e*(s.lento??1),d=o.open||0,f=[.03*Math.sin(u*1.05+h)+d*.09*(.6+.4*Math.sin(u*7.3+h)),.045*Math.sin(u*.63+h*2)+d*.05*Math.sin(u*3.1+h),.025*Math.sin(u*.81+h*3),.018*Math.sin(u*2.2+h),.01*Math.sin(u*.9+h)];a.x+=f[0],a.y+=f[1],a.z+=f[2],l.x+=f[3],l.z+=f[4],n._viva={d:f,r:[a.x,a.y,a.z,l.x,l.z]}}else n._viva=null;return n}function Hc(n,t,e={},i=1){let s=Xa(n,t).open,o=Math.sin(t*2.3),r=Math.sin(t*1.7+1);return{...e,shR:[(e.shR?.[0]??0)+18*s*i+6*o*i,(e.shR?.[1]??8)+6*s*i],elR:(e.elR??10)+40*s*i,shL:[(e.shL?.[0]??0)+8*s*i*r,e.shL?.[1]??8],headX:(e.headX??0)-3*s+1.5*o,headZ:(e.headZ??0)+2*r*s}}function ms(n,t,e,i,s=0){return n.root.rotation.set(-Math.PI/2+s,0,0),n.root.position.set(t,e+.2,i),n.sombra.visible=!1,n}function Xi(n,t=.4){let e=Vt(256,256,s=>{if(s.lineJoin="round",s.lineWidth=14,s.strokeStyle="#1B1420",s.textAlign="center",s.textBaseline="middle",n==="coracao")s.fillStyle="#F2546E",s.beginPath(),s.moveTo(128,214),s.bezierCurveTo(20,140,30,50,100,52),s.bezierCurveTo(118,54,128,70,128,82),s.bezierCurveTo(128,70,138,54,156,52),s.bezierCurveTo(226,50,236,140,128,214),s.fill(),s.stroke(),s.fillStyle="#FFFFFF88",s.beginPath(),s.ellipse(88,92,18,12,-.6,0,7),s.fill();else if(n==="gota")s.fillStyle="#8FD3F2",s.beginPath(),s.moveTo(128,30),s.bezierCurveTo(200,130,200,210,128,214),s.bezierCurveTo(56,210,56,130,128,30),s.fill(),s.stroke();else{let o={interrogacao:"?",exclamacao:"!",zzz:"Z",notas:"\u266A"}[n]||n;s.font="900 200px Inter",s.fillStyle=n==="exclamacao"?"#F2C14E":"#FFFFFF",s.strokeText(o,128,136),s.fillText(o,128,136)}}),i=new Zn(new Nn({map:e,transparent:!0,depthWrite:!1}));return i.scale.setScalar(t),i.renderOrder=10,i}function Ve(n,t,e,i=0,s=.48){let o=n.root.scale.x||1;return n.place(t,e,s-.28*o,i),n.sombra.visible=!1,n}function Re(n,t,e,i="neutro",s={},o=1,r={}){return n.pose(Hc(t,e,s,o)),Z(n,t,e,i,r)}var le={mundo:{value:0},ouro:{value:0},alvo:{value:0},claro:{value:0}},RE=`{ float l_ = dot(gl_FragColor.rgb, vec3(.2126,.7152,.0722));
  vec3 cinza_ = vec3(l_) * .7 + .08;
  vec3 ouro_ = vec3(l_) * vec3(1.32, 1.02, .52) + vec3(.1, .06, .0);
  vec3 alvo_ = mix(cinza_, ouro_, uOuro);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, alvo_, uCinza); }
#include <dithering_fragment>`;function ad(n,t){!n||n.userData.fpOk===n.uuid||n.isShaderMaterial||n.isRawShaderMaterial||n.isLineBasicMaterial||n.userData.fp&&n.userData.fp!==t&&n.userData.fpOk===n.uuid||(n.userData.fp=n.userData.fp==="alvo"?"alvo":t,t=n.userData.fp,n.userData.fpOk=n.uuid,n.onBeforeCompile=e=>{e.uniforms.uCinza=t==="alvo"?le.alvo:le.mundo,e.uniforms.uOuro=t==="alvo"?le.claro:le.ouro,e.fragmentShader=`uniform float uCinza; uniform float uOuro;
`+e.fragmentShader.replace("#include <dithering_fragment>",RE)},n.customProgramCacheKey=()=>"foco-"+t,n.needsUpdate=!0)}function he(n,t={}){let e=Ic(t.borda??.03,t.cor||"#FFFFFF",3.2).clone();e.uniforms.res.value.set(1920,1080);let i=[];for(let o of[].concat(n)){let r=[];o.traverse(a=>{a.isMesh&&!a.userData.isOutline&&!a.userData.borda&&r.push(a)});for(let a of r)if(a.material=[].concat(a.material).map(l=>{if(l.userData.fp==="alvo"&&l.userData.fpOk===l.uuid)return l;let c=l.clone();return c.userData={...l.userData},c.userData.fp="alvo",delete c.userData.fpOk,ad(c,"alvo"),c}),a.material.length===1&&(a.material=a.material[0]),!(t.semBorda||a.isSkinnedMesh||a.material.transparent&&!a.material.alphaTest)&&a.geometry&&a.geometry.attributes.normal&&!a.userData.semBorda){let l=new ot(a.geometry,e);l.userData.isOutline=!0,l.userData.borda=!0,l.renderOrder=-1,a.add(l),i.push(l)}}let s=(o,r=0)=>{let a=o>.02;for(let l of i)l.visible=a;e.uniforms.w.value=(t.borda??.03)*o*(.75+.25*Math.sin(r*6))};return s(0),s}function ld(n){n.traverse(t=>{if((t.isMesh||t.isSprite||t.isPoints)&&!t.userData.isOutline)for(let e of[].concat(t.material))ad(e,"mundo")})}function ue(n,t,e,i=0){let s=new wt(t),o=s.r*.2126+s.g*.7152+s.b*.0722,r=new wt(o*.7+.08,o*.7+.08,o*.7+.08),a=new wt(o*1.32+.1,o*1.02+.06,o*.52);r.lerp(a,i),n.background=s.clone().lerp(r,e)}function cd(){le.mundo.value=0,le.ouro.value=0,le.alvo.value=0,le.claro.value=0}var ud=(n,t=.9)=>(e,i,s)=>{e.fillStyle=n,e.fillRect(0,s*t,i,s*(1-t))},wE={pele:"#E3AE86",cabelo:"topete",corCabelo:"#4A2A18",nariz:!0,sobr:"#3A2014"},dd=(n,t,e)=>{n.fillStyle="#80868E",n.beginPath(),n.roundRect(t*.3,e*.56,t*.4,e*.3,26),n.fill(),n.strokeStyle="#6C727A",n.lineWidth=6,n.beginPath(),n.moveTo(t*.33,e*.6),n.lineTo(t*.33,e*.82),n.moveTo(t*.67,e*.6),n.lineTo(t*.67,e*.82),n.stroke(),n.strokeStyle="#F4F1EA",n.lineWidth=7;for(let i of[-1,1])n.beginPath(),n.moveTo(t/2+i*34,0),n.lineTo(t/2+i*40,e*.3),n.stroke(),n.fillStyle="#F4F1EA",n.beginPath(),n.arc(t/2+i*40,e*.31,9,0,7),n.fill();n.fillStyle="#7A8088",n.fillRect(0,e*.92,t,e*.08)},zt={...wE,camisa:"#959BA3",manga:"longa",calca:"#1E1E22",meia:"#E3AE86",tenis:"#E3AE86",sola:"#1E2A44",chinelo:"#1E2A44",escala:.95,estampa:dd},xv={...zt,luva:"#1A1A1E"},CE=(n,t,e)=>{n.fillStyle="#F7F1E3",n.beginPath(),n.roundRect(t*.27,e*.16,t*.46,e*.84,30),n.fill();let i=["#E2443A","#F2C230","#3E7CC8","#5AA84E","#E57AA0"];for(let s=0;s<30;s++){let o=t*.29+s*97%(t*.42),r=e*.2+s*53%(e*.76);n.fillStyle=i[s%5];for(let a=0;a<5;a++){let l=a/5*6.283;n.beginPath(),n.arc(o+Math.cos(l)*9,r+Math.sin(l)*9,7,0,7),n.fill()}n.fillStyle="#F2C230",n.beginPath(),n.arc(o,r,5,0,7),n.fill()}n.strokeStyle="#E2443A",n.lineWidth=8,n.beginPath(),n.moveTo(t*.27,e*.5),n.lineTo(0,e*.5),n.moveTo(t*.73,e*.5),n.lineTo(t,e*.5),n.stroke()},FE={pele:"#D9A07A",cabelo:"coque",corCabelo:"#C9C6C0",oculos:!0,rugas:!0,cilios:!0,nariz:!0,tronco:"senhora",camisa:"#7FA6C9",calca:"#5A6A8A",saia:"#5A6A8A",meia:"#D9A07A",tenis:"#D9A07A",sola:"#C84E4E",chinelo:"#C84E4E",escala:.84,estampa:CE},Rv={...FE,camisa:"#B23A5A",saia:"#B23A5A",calca:"#B23A5A",sola:"#3A2A2A",estampa:(n,t,e)=>{n.fillStyle="#F4D8E0";for(let i=0;i<46;i++)n.beginPath(),n.arc(i*131%t,i*67%e,7,0,7),n.fill();ud("#8E2A44",.9)(n,t,e)},batom:!0};var hd=[["#3E7CC8","#2A2A33","#2A1E1A","topete","#D9A07A"],["#E57AA0","#3A3550","#5A3020","chanel","#E8B48C"],["#58B26A","#2F4E86","#1C1416","afro","#8E5A3A"],["#F2994A","#3A3A44","#C9A060","curto","#F0C8A6"],["#9B6CC4","#2A2A33","#1C1416","curto","#B07A52"],["#2FB5A8","#4A3A2A","#3A2418","rabo","#E3B28E"],["#F2D24A","#2F4E86","#2A1E1A","tigela","#6E4430"],["#E8E4DE","#5A5A66","#6A5A4A","coque","#D9A07A"]],zs=(n,t={})=>{let[e,i,s,o,r]=hd[n%hd.length];return{camisa:e,calca:i,corCabelo:s,cabelo:o,pele:r,cilios:["rabo","coque","chanel"].includes(o),nariz:!0,tenis:["#F4F1EA","#2A2A30","#E2443A"][n%3],...t}},vr=(n,t={})=>zs(n,{camisa:"#F6F4EE",calca:"#2F4E86",escala:.94,estampa:(e,i,s)=>{ud("#2F4E86",.88)(e,i,s),e.fillStyle="#2F4E86",e.beginPath(),e.arc(i/2+120,s*.55,34,0,7),e.fill()},...t});function fd(n){let t=Lc(n);if(n.estampa===dd){let e=xe(new Ke(.13,.055,10,22),n.camisa,{out:.008});e.rotation.x=Math.PI/2.4,e.position.set(0,.34,-.09),t.torsoG.add(e);let i=re(.1,"#80868E",0,.3,-.15,{seg:14});i.scale.set(1.2,.7,.6),t.torsoG.add(i)}if(n.chinelo)for(let e of["L","R"]){let i=t.legs[e].an;for(let s of[-1,1]){let o=xe(new Oe(.016,.014,.1),n.chinelo,{out:.003});o.position.set(s*.032,.013,.085),o.rotation.set(0,-s*.62,0),i.add(o)}i.add(xe(new oe(.011,8,6),n.chinelo,{pos:[0,.014,.125]}))}return t}var $=(n,t,e,i,s=0,o)=>rd(n,typeof t[0]=="number"?[[0,t]]:t,typeof e[0]=="number"?[[0,e]]:e,i,s,o);function lt(n,t,e=0,i=0,s=0,o=0){let r=fd(t);return r.place(e,i,o,s),n.add(r.root),r.root.userData.ator=r,r.seed=Math.abs(e*13+i*7|0)%9,r}var IE={shL:[0,8],shR:[0,8],hipL:[0,0],hipR:[0,0]},DE={elL:8,elR:8};function Yt(n,...t){let e={...n};for(let i of t)if(i)for(let s in i){let o=i[s];if(Array.isArray(o)){let r=e[s]||IE[s]||[0,0];e[s]=[r[0]+(o[0]||0),r[1]+(o[1]||0),(r[2]||0)+(o[2]||0)]}else e[s]=(e[s]??DE[s]??0)+o}return e}var LE={io:Pn,out:zn,in:Oa,lin:n=>bt(n),back:n=>{n=bt(n);let t=1.9;return 1+(t+1)*Math.pow(n-1,3)+t*Math.pow(n-1,2)},mola:n=>(n=bt(n),1-Math.cos(n*Math.PI*2.5)*Math.exp(-n*5))};function Oc(n,t){if(n<=t[0][0])return t[0][1];for(let e=1;e<t.length;e++)if(n<=t[e][0]){let i=LE[t[e][2]||"io"]((n-t[e-1][0])/Math.max(1e-6,t[e][0]-t[e-1][0])),s=t[e-1][1],o=t[e][1];return Array.isArray(s)?s.map((r,a)=>Rt(r,o[a],i)):Rt(s,o,i)}return t[t.length-1][1]}var Nc=(n,t)=>Math.sin(n*.71+t)*.6+Math.sin(n*1.37+t*2.1)*.3+Math.sin(n*2.9+t*3.3)*.1;function qe(n,t=0,e=1){let i=Math.sin(n*1.9+t),s=Nc(n*.35,t*2.3),o=Nc(n*.6,t*4.1);return{bob:i*.004*e-Math.abs(s)*.008*e,lean:i*.8*e,tilt:s*2.2*e,hipL:[0,s*2*e],hipR:[0,-s*2*e],knL:Math.max(0,s)*9*e,knR:Math.max(0,-s)*9*e,shL:[o*3*e,i*1.2*e],shR:[-o*3*e,i*1.2*e],elL:(4+o*4)*e,elR:(4-o*4)*e,headY:Nc(n*.4,t*7)*6*e,headZ:-s*1.5*e}}var un=(n,t=0,e=1)=>Yt({shL:[0,9],shR:[0,9],elL:12,elR:12},qe(n,t,e));function qi(n,t={}){let e=t.f||1.8,i=t.amp??1,s=t.ph||0,o=Ga(n,e,i,s),r=Math.sin((n*e+s)*Math.PI*2);return o.headY=-r*3*i,o.tilt=r*1.8*i,o.headZ=-r*1.2*i,t.chinelo&&(o.knL*=.8,o.knR*=.8,o.hipL[0]*=.85,o.hipR[0]*=.85),t.curvado&&(o.lean+=10,o.headX=-6),t.maos==="bolso"&&(o.shL=[18+r*2,0,-90],o.shR=[18-r*2,0,-90],o.elL=105,o.elR=105),o}var jn=(n,t=2.9,e=1)=>{let i=Va(n,t,e),s=Math.sin(n*t*Math.PI*2);return i.headY=-s*3,i.tilt=s*2.5,i},dn={bracoCruzado:{shL:[30,4,-75],shR:[26,4,-80],elL:95,elR:95,lean:-3},maosCintura:{shL:[-15,55,-90],shR:[-15,55,-90],elL:85,elR:85,lean:-2},maosBolso:{shL:[18,0,-90],shR:[18,0,-90],elL:105,elR:105,lean:2,headX:4},maosCabeca:{shL:[150,38],shR:[150,38],elL:130,elR:130,headX:-6},bracosAbertos:{shL:[55,55],shR:[55,55],elL:22,elR:22,lean:-4,headX:-4},abraco:{shL:[70,20,-80],shR:[70,20,-80],elL:50,elR:50,lean:8},maosFrente:{shL:[80,8],shR:[80,8],elL:14,elR:14,lean:6},desculpa:{shL:[55,22],shR:[55,22],elL:85,elR:85,lean:-3,headX:6,headZ:6},ombros:{shL:[10,24],shR:[10,24],elL:70,elR:70,headZ:10,bob:.015},celular:{shR:[62,6],elR:72,shL:[30,10],elL:60},filmar:{shR:[88,2],elR:38,shL:[70,-6],elL:60,headX:2},co\u00E7arOlho:{shR:[118,-8],elR:150,headX:8,headZ:-6},apontar:{shR:[92,6],elR:4},punhoFecha:{shR:[70,10],elR:105,headX:18},pegaChao:{lean:52,bob:-.18,hipL:[64,6],hipR:[60,6],knL:85,knR:80,shL:[74,6],shR:[74,6],elL:6,elR:6,headX:-20},carregaFrente:{lean:-10,shL:[22,-4],shR:[22,-4],elL:50,elR:50,knL:12,knR:12,bob:-.02,headX:-6},quadril:{shL:[-6,30],elL:100,shR:[8,10],elR:20,tilt:-6,lean:3},ajoelhado:{bob:-.3,lean:6,hipL:[92,4],hipR:[-6,4],knL:92,knR:98,shL:[12,10],shR:[12,10],elL:25,elR:25},sentadoChao:{bob:-.48,lean:-10,hipL:[80,18],hipR:[80,18],knL:30,knR:30,shL:[-30,20],shR:[-30,20],elL:10,elR:10},testaParede:{lean:22,shL:[100,18],elL:85,shR:[10,8],elR:15,headX:16},comemora:{shL:[160,30],shR:[160,30],elL:20,elR:20,headX:-12},assustado:{shL:[30,22],shR:[30,22],elL:100,elR:100,lean:-8,headX:-6},aceno:{shR:[150,30],elR:30}};var ks=(n,t=1)=>{let e=Math.abs(Math.sin(n*9));return{bob:e*.01*t,headX:-8*t-e*4*t,shL:[e*5*t,8+e*4*t],shR:[e*5*t,8+e*4*t],lean:-3*t}},Za=(n,t=2.2,e=0)=>{let i=Math.max(0,Math.sin((n*t+e)*Math.PI*2));return{bob:i*.16,knL:(1-i)*30,knR:(1-i)*30,hipL:[(1-i)*18,4],hipR:[(1-i)*18,4],shL:[140+i*20,30],shR:[140+i*20,30],elL:30,elR:30,headX:-10}};var md=new R,gd=new Yn;function Ee(n,t,e="R",i=[0,-.08,.03],s){t.root.updateMatrixWorld(!0);let o=t.hands[e];o.localToWorld(md.set(...i)),n.position.copy(md),s!==!1&&(o.getWorldQuaternion(gd),n.quaternion.copy(gd),s&&n.rotateX(s[0]).rotateY(s[1]).rotateZ(s[2]))}function et(n,t,e,i){return e={perto:.42,...e},Bc(n,t,e,(s,o)=>{let r=i(s,o);return ld(s),(a,l,c)=>(cd(),r?r(a,l,c)||{}:{})})}var $a={w:300,h:600};function fi(n,t,e,i="#14161C"){n.fillStyle=i,n.fillRect(0,0,t,e)}var Le=(n,t,e,i,s,o,r=800,a="center")=>{n.fillStyle=o,n.font=`${r} ${s}px Inter`,n.textAlign=a,n.textBaseline="middle",n.fillText(t,e,i)},kc={apagada:(n,t,e)=>fi(n,t,e,"#0A0A0E"),bloqueio:(n,t,e,i=0)=>{let s=n.createLinearGradient(0,0,0,e);s.addColorStop(0,"#3A4A8A"),s.addColorStop(1,"#8A4A7A"),n.fillStyle=s,n.fillRect(0,0,t,e),Le(n,"19:42",t/2,120,64,"#FFFFFF",300),n.fillStyle="rgba(255,255,255,.85)",n.beginPath(),n.roundRect(20,200,t-40,70,16),n.fill(),n.fillStyle="#3EC860",n.beginPath(),n.roundRect(32,212,46,46,10),n.fill(),Le(n,"Tiago",92,225,20,"#1A1A1E",800,"left"),Le(n,"mano olha isso kkkk",92,250,16,"#3A3A44",600,"left")},chat:(n,t,e,i=0)=>{fi(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),Le(n,"Tiago",70,38,22,"#FFF",800,"left"),[[0,"mano olha isso kkkk"],[1,"kkkkkkk"],[0,"bora jogar?"],[1,"depois"]].slice(0,1+Math.floor(i*4)).forEach(([o,r],a)=>{n.fillStyle=o?"#D8F8C8":"#FFFFFF";let l=30+r.length*10;n.beginPath(),n.roundRect(o?t-l-16:16,100+a*70,l,48,12),n.fill(),Le(n,r,o?t-l/2-16:16+l/2,124+a*70,18,"#1A1A1E",600)})},foto:(n,t,e,i=0)=>{fi(n,t,e,"#FFFFFF"),n.fillStyle="#F4A05A",n.fillRect(0,80,t,300),n.fillStyle="#F2C230",n.beginPath(),n.arc(200,170,40,0,7),n.fill(),n.fillStyle="#5AA84E",n.beginPath(),n.moveTo(0,380),n.lineTo(120,240),n.lineTo(240,380),n.fill();let s=1+Math.sin(Math.min(1,i*2)*Math.PI)*.5;n.save(),n.translate(50,420),n.scale(s,s),n.fillStyle=i>.2?"#F2546E":"#FFFFFF",n.strokeStyle="#1A1A1E",n.lineWidth=3,n.beginPath(),n.moveTo(0,14),n.bezierCurveTo(-26,-6,-12,-24,0,-10),n.bezierCurveTo(12,-24,26,-6,0,14),n.fill(),n.stroke(),n.restore(),Le(n,1203+(i>.2?1:0)+" curtidas",80,420,18,"#1A1A1E",800,"left")},tapete:(n,t,e,i=0)=>{fi(n,t,e,"#0E0E12"),n.fillStyle="#5A4A3A",n.fillRect(0,160,t,280);let s=t*bt(i);n.fillStyle="#C8463A",n.fillRect(0,160,s,280),n.strokeStyle="#F2C230",n.lineWidth=6;for(let o=0;o<6;o++)n.beginPath(),n.arc(s/2,300,20+o*22,0,7),n.stroke();n.fillStyle="rgba(255,255,255,.7)",n.fillRect(s-6,160,12,280),n.fillStyle="#FF2A2A",n.fillRect(0,e-12,t*(.2+i*.7),6),Le(n,"LIMPEZA DE TAPETE SATISFAT\xD3RIA",t/2,500,15,"#FFFFFF",800)},xadrez:(n,t,e,i=0)=>{fi(n,t,e,"#262421");let s=t/8;for(let r=0;r<8;r++)for(let a=0;a<8;a++)n.fillStyle=(r+a)%2?"#769656":"#EEEED2",n.fillRect(r*s,150+a*s,s,s);let o=["\u265C","\u265E","\u265D","\u265B","\u265A","\u265D","\u265E","\u265C"];n.font=`${s*.8}px serif`,n.textAlign="center",n.textBaseline="middle",o.forEach((r,a)=>{n.fillStyle="#1A1A1E",n.fillText(r,a*s+s/2,150+s/2),n.fillText("\u265F",a*s+s/2,150+s*1.5),n.fillStyle="#FFFFFF",n.fillText("\u2659",a*s+s/2,150+s*6.5),n.fillText(o[a].replace("\u265C","\u2656").replace("\u265E","\u2658").replace("\u265D","\u2657").replace("\u265B","\u2655").replace("\u265A","\u2654"),a*s+s/2,150+s*7.5)}),Le(n,"ABERTURAS: SICILIANA",t/2,90,18,"#FFFFFF",800),Le(n,"Partida "+Math.floor(1+i*199),t/2,500,20,"#B8B8B8",700)},mensagens:(n,t,e,i=0)=>{kc.bloqueio(n,t,e),n.fillStyle="rgba(20,20,28,.9)",n.beginPath(),n.roundRect(16,200,t-32,110,18),n.fill(),Le(n,String(Math.round(27*bt(i*1.3))),t/2,240,50,"#3EC860",900),Le(n,"MENSAGENS N\xC3O LIDAS",t/2,286,17,"#FFFFFF",800)},views:(n,t,e,i=0)=>{fi(n,t,e,"#0E0E12"),n.fillStyle="#3A3A44",n.fillRect(0,60,t,300),n.fillStyle="#C9893E",n.beginPath(),n.ellipse(t/2,220,70,90,0,0,7),n.fill(),n.fillStyle="#E3AE86",n.beginPath(),n.arc(t/2,110,36,0,7),n.fill();let s=Math.round(2e5*Math.pow(bt(i),2.2));Le(n,s.toLocaleString("pt-BR")+" visualiza\xE7\xF5es",20,390,20,"#FFFFFF",800,"left"),n.fillStyle="#F2546E",Le(n,"\u2665 "+Math.round(s/9).toLocaleString("pt-BR"),20,425,20,"#F2546E",800,"left")},chamadas:(n,t,e,i=0)=>{fi(n,t,e,"#101016"),Le(n,"14",t/2,180,110,"#FF4A4A",900),Le(n,"CHAMADAS PERDIDAS",t/2,260,20,"#FFFFFF",900),Le(n,i>.5?"M\xC3E":"",t/2,310,34,"#FFFFFF",900),n.strokeStyle="rgba(255,255,255,.55)",n.lineWidth=2;let s=210,o=120;for(let r=0;r<9;r++){let a=r*.7;n.beginPath(),n.moveTo(s,o),n.lineTo(s+Math.cos(a)*260,o+Math.sin(a)*260),n.stroke()}n.beginPath(),n.arc(s,o,40,0,7),n.stroke()},chamadasBorrado:(n,t,e,i=0)=>{fi(n,t,e,"#101016"),n.filter="blur(5px)",Le(n,"14",t/2,180,110,"#FF4A4A",900),Le(n,"CHAMADAS PERDIDAS",t/2,260,20,"#FFFFFF",900),Le(n,"\u25A0\u25A0\u25A0",t/2,310,34,"#FFFFFF",900),n.filter="none",n.strokeStyle="rgba(255,255,255,.7)",n.lineWidth=2;let s=90,o=420;for(let r=0;r<9;r++){let a=r*.7;n.beginPath(),n.moveTo(s,o),n.lineTo(s+Math.cos(a)*300,o+Math.sin(a)*300),n.stroke()}n.beginPath(),n.arc(s,o,36,0,7),n.stroke()},mensagemMae:(n,t,e,i=0)=>{kc.chamadas(n,t,e,1);let s="ele ficou esperando voc\xEA na porta da escola at\xE9 a apresenta\xE7\xE3o acabar",o=Math.floor(s.length*bt(i));n.fillStyle="#2E8E6A",n.beginPath(),n.roundRect(16,360,t-32,190,16),n.fill(),Le(n,"M\xE3e",32,382,16,"#D8F8C8",800,"left"),n.fillStyle="#FFFFFF",n.font="700 19px Inter",n.textAlign="left";let r=s.slice(0,o).split(" "),a="",l=414;for(let c of r)n.measureText(a+c).width>t-70&&(n.fillText(a,32,l),a="",l+=26),a+=c+" ";n.fillText(a,32,l)},audio:(n,t,e,i=0)=>{fi(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),Le(n,"Tiago",70,38,22,"#FFF",800,"left"),n.fillStyle="#FFFFFF",n.beginPath(),n.roundRect(16,240,t-60,70,18),n.fill(),n.fillStyle="#2E8E6A";for(let s=0;s<26;s++){let o=6+Math.abs(Math.sin(s*1.7+i*30))*30*(s/26<i?1:.4);n.fillRect(70+s*7,275-o/2,4,o)}n.beginPath(),n.moveTo(36,260),n.lineTo(56,275),n.lineTo(36,290),n.fill()},coxinha:(n,t,e,i=0)=>{fi(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),Le(n,"Tiago",70,38,22,"#FFF",800,"left"),n.fillStyle="#D8F8C8",n.beginPath(),n.roundRect(60,120,t-76,260,14),n.fill(),n.fillStyle="#F4E6C0",n.fillRect(72,132,t-100,180),n.fillStyle="#D9892E",n.beginPath(),n.moveTo(t/2+20,160),n.quadraticCurveTo(t/2+90,280,t/2+20,290),n.quadraticCurveTo(t/2-50,280,t/2+20,160),n.fill(),Le(n,"desculpa mano, bora?",t/2+20,345,18,"#1A1A1E",800),i>.5&&Le(n,"\u2713\u2713",t-40,365,14,"#3EA6FF",900)},conversa:(n,t,e)=>{fi(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),Le(n,"Tiago",70,38,22,"#FFF",800,"left"),n.fillStyle="#FFFFFF",n.beginPath(),n.roundRect(16,380,230,60,12),n.fill(),Le(n,"vem aqui em casa hoje? \u{1F382}",130,410,16,"#1A1A1E",700),Le(n,"\u2713\u2713",220,430,13,"#9A9A9A",900)}};function Wn(){let n=new j;n.add(ht(.075,.15,.012,"#1B1A20",0,0,0,{r:.008,out:.003}));let t=document.createElement("canvas");t.width=$a.w,t.height=$a.h;let e=t.getContext("2d"),i=new mn(t);i.colorSpace=Ie;let s=new ne({map:i}),o=new ot(new Bt(.066,.132),s);o.position.z=.0065,n.add(o);let r="";return n.tela=(a,l=0,c=1)=>{let h=a+"|"+Math.round(l*60);h!==r&&(r=h,kc[a](e,$a.w,$a.h,l),i.needsUpdate=!0),s.color.setScalar(c)},n.tela("apagada"),n.userData.tela=o,n.scale.setScalar(1.7),n}function Ed(n=1){let t=new j,e=ge("#E8B828",{emissive:"#5A4008",emissiveIntensity:.2});t.add(xe(new On(.16,.16,.05,40),e,{out:.006,rot:[Math.PI/2,0,0]})),t.add(gt(.03,.03,.05,e,0,.19,0,{out:.004})),t.add(xe(new Ke(.04,.01,8,18),e,{out:.003,pos:[0,.25,0]}));let i=document.createElement("canvas");i.width=512,i.height=512;let s=i.getContext("2d"),o=new mn(i);o.colorSpace=Ie;let r=new ot(new ci(.14,40),new ne({map:o,color:"#D8D0C0"}));r.position.z=.026,t.add(r);let a=-1;return t.set=(l,c=0)=>{let h=Math.round(l*4)+c*1e3;if(h===a)return;a=h,s.fillStyle="#FFF8E6",s.fillRect(0,0,512,512),s.strokeStyle="#8A6A10",s.lineWidth=8;for(let g=0;g<60;g++){let E=g/60*6.283;s.beginPath(),s.moveTo(256+Math.sin(E)*230,256-Math.cos(E)*230),s.lineTo(256+Math.sin(E)*(g%5?214:196),256-Math.cos(E)*(g%5?214:196)),s.stroke()}let u=Math.floor(l/60),d=Math.floor(l%60);c>0&&(s.shadowColor="#F2C230",s.shadowBlur=40*c),s.fillStyle="#3A2A08",s.font="700 120px 'IBM Plex Mono'",s.textAlign="center",s.textBaseline="middle",s.fillText(String(u).padStart(2,"0")+":"+String(d).padStart(2,"0"),256,330),s.shadowBlur=0;let f=l%60/60*6.283;s.strokeStyle="#C8302A",s.lineWidth=10,s.beginPath(),s.moveTo(256,256),s.lineTo(256+Math.sin(f)*190,256-Math.cos(f)*190),s.stroke(),s.fillStyle="#C8302A",s.beginPath(),s.arc(256,256,14,0,7),s.fill(),o.needsUpdate=!0},t.set(0),t.scale.setScalar(n),t}var zc=null;function ti(n,t,e={}){let i=e.n||40,s=e.cor||"#7AF0B0",o=[];zc||(zc=Vt(64,64,r=>{let a=r.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.6,"rgba(255,255,255,.85)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,64,64)}));for(let r=0;r<i;r++){let a=new Zn(new Nn({map:zc,color:s,transparent:!0,depthWrite:!1}));a.scale.setScalar(e.tam||.02),n.add(a);let l=__sr()*6.283,c=__sr()*2-1;o.push({s:a,d:new R(Math.cos(l)*Math.sqrt(1-c*c),c*.6+(e.sobe||0),Math.sin(l)*Math.sqrt(1-c*c)),v:.4+__sr()*.6,ph:__sr()})}return(r,a=0)=>{for(let l of o){let c=bt((r-l.ph*.3)/.7);l.s.visible=c>0&&c<1,l.s.position.set(t[0]+l.d.x*c*(e.r||.3)*l.v,t[1]+l.d.y*c*(e.r||.3)*l.v+(e.g||0)*c*c,t[2]+l.d.z*c*(e.r||.3)*l.v),l.s.material.opacity=1-c}}}function yd(n,t,e,i,s={}){let o=["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F2546E","#FFFFFF"],r=[];for(let a=0;a<(s.n||90);a++){let l=new ot(new Bt(.035,.022),new ne({color:o[a%6],side:Ge}));n.add(l),r.push({m:l,x:(__sr()-.5)*(s.w||3),z:(__sr()-.5)*(s.d||2),ph:__sr()*(s.h||3),r:__sr()*6})}return a=>{for(let l of r){let c=e+(s.h||3)-(a*(s.v||.8)+l.ph)%(s.h||3);l.m.position.set(t+l.x+Math.sin(a*2+l.r)*.1,c,i+l.z),l.m.rotation.set(a*3+l.r,a*2+l.r,0)}}}var Mr=(n,t,e=.35)=>t.some(i=>n>=i&&n<i+e)?Math.sin(n*90)*.004:0;function Gc(n,t=.4,e=0,i=0){n.updateMatrixWorld(!0);let s=new R(i,0,1).applyQuaternion(n.getWorldQuaternion(new Yn)).normalize(),o=n.getWorldPosition(new R);return[o.x+s.x*t,o.y+s.y*t+e,o.z+s.z*t]}var m3=Math.PI/180;var g3={s:0,n:Math.PI,e:Math.PI/2,w:-Math.PI/2};function vd(n,t,e,i=0,s=0,o=0,r=0){let a=new ot(new Bt(n,t),e);return a.position.set(i,s,o),a.rotation.y=r,a.receiveShadow=!0,a}var _r=(n,t)=>t[Math.floor(n()*t.length)%t.length];var pi=(n,...t)=>{let e=new j;for(let i of t)e.add(i);return e.userData.pe=n,e};var BE=["#3E7CC8","#C84E4E","#5AA84E","#8E6CC4","#D98A3A","#4FB8A0","#7A8696","#B5603E"];function Md(n=2.1,t="#3E7CC8"){let e=pi([n,.9]),i=new wt(t).multiplyScalar(.82).getStyle();e.add(ht(n,.42,.86,t,0,.21+.08,0,{out:.014,r:.08})),e.add(ht(n,.5,.22,i,0,.62,-.32,{out:.014,r:.08}));for(let o of[-1,1])e.add(ht(.2,.58,.86,i,o*(n/2-.1),.37,0,{out:.014,r:.07}));let s=Math.max(2,Math.round(n/.8));for(let o=0;o<s;o++)e.add(ht((n-.44)/s-.03,.14,.62,t,-n/2+.22+(n-.44)/s*(o+.5),.56,.06,{out:.012,r:.06}));for(let o of[-1,1])for(let r of[-1,1])e.add(gt(.03,.02,.08,"#3A2A20",o*(n/2-.1),.04,r*.34,{seg:6}));return e.add(ht(.4,.36,.12,"#F2C230",-n/2+.45,.72,-.17,{out:.012,r:.06,rot:[-.25,.2,0]})),e}function _d(n=1.6,t="#7A5233"){let e=pi([n,.45]);e.add(ht(n,.5,.42,t,0,.25,0,{out:.012}));for(let s of[-1,1])e.add(st(n/2-.06,.36,.01,"#5E3E26",s*n/4,.25,.215));e.add(ht(1.2,.7,.06,"#1B1A20",0,.5+.45,-.05,{out:.012})),e.add(st(.3,.03,.18,"#2A2A30",0,.515,-.05)),e.add(st(.06,.1,.04,"#2A2A30",0,.56,-.05));let i=UE();return i.position.set(0,.95,-.016),e.add(i),e.userData.tela=i,e.add(ht(.3,.06,.15,"#2A2A30",.45,.53,.05)),e}var br=null;function UE(n=1.12,t=.62){br||(br=Vt(512,1024,s=>{[["#6FB4EC","#5AA84E"],["#F2994A","#3E2A60"],["#2E6FB8","#E8DCC8"],["#58B26A","#F2C230"]].forEach(([r,a],l)=>{let c=l*256;s.fillStyle=r,s.fillRect(0,c,512,256),s.fillStyle=a,s.fillRect(0,c+170,512,86),s.fillStyle="#F4D2B0",s.beginPath(),s.arc(180+l*40,c+120,44,0,7),s.fill(),s.fillStyle="#2A1E1A",s.beginPath(),s.arc(180+l*40,c+100,44,Math.PI,0),s.fill(),s.fillStyle=["#E2443A","#2E9C6A","#F2C230","#3E7CC8"][l],s.fillRect(120+l*40,c+160,120,96),s.fillStyle="rgba(0,0,0,.55)",s.fillRect(0,c+214,512,42),s.fillStyle="#FFF",s.font="700 26px Inter, Arial",s.fillText(["JORNAL DA SERRA","NOVELA DAS NOVE","PREVIS\xC3O DO TEMPO","FUTEBOL AO VIVO"][l],16,c+244)})}),br.wrapT=wn,br.repeat.set(1,.25));let e=br.clone();e.needsUpdate=!0,e.repeat.set(1,.25);let i=new ot(new Bt(n,t),new ne({map:e,toneMapped:!1}));return i.userData.vivo=!0,i.userData.tv=!0,i}function bd(n=1,t=0){let e=pi([.45,.45]),i=Pe(t+2);e.add(gt(.2,.15,.38,_r(i,["#C8643C","#F4F1EA","#3A3A44","#D9B07A"]),0,.19,0,{out:.012,seg:14})),e.add(gt(.18,.18,.02,"#5A3A24",0,.37,0));for(let s=0;s<7;s++){let o=s/7*6.283,r=xe(new oe(.16,10,6),s%2?"#4E9A48":"#5FAE52",{out:.01});r.scale.set(.6,1.8*n,.35),r.position.set(Math.cos(o)*.12,.55+n*.25,Math.sin(o)*.12),r.rotation.set(Math.sin(o)*.5,o,-Math.cos(o)*.5),e.add(r)}return e}function Vc(n,t,e=0,i="paisagem"){let s=Pe(e+8),o=Vt(256,Math.round(256*t/n),(l,c,h)=>{if(i==="paisagem")l.fillStyle="#8EC8EC",l.fillRect(0,0,c,h),l.fillStyle="#6FA866",l.beginPath(),l.moveTo(0,h*.7),l.quadraticCurveTo(c*.3,h*.35,c*.6,h*.62),l.quadraticCurveTo(c*.8,h*.5,c,h*.6),l.lineTo(c,h),l.lineTo(0,h),l.fill(),l.fillStyle="#9E9A94",l.beginPath(),l.ellipse(c*.66,h*.45,c*.1,h*.22,0,Math.PI,0),l.fill(),l.fillStyle="#F2C230",l.beginPath(),l.arc(c*.2,h*.22,h*.09,0,7),l.fill();else if(i==="familia"){l.fillStyle="#E8DCC8",l.fillRect(0,0,c,h);for(let u=0;u<3;u++){let d=c*(.28+u*.22),f=h*.45;l.fillStyle=["#2C6E7F","#E57AA0","#3A9AD9"][u],l.fillRect(d-26,f+20,52,h),l.fillStyle=["#9A6646","#E8B48C","#E3AE86"][u],l.beginPath(),l.arc(d,f,24,0,7),l.fill(),l.fillStyle=["#2B2422","#5A3020","#4A2A18"][u],l.beginPath(),l.arc(d,f-6,24,Math.PI,0),l.fill()}}else if(i==="poster")l.fillStyle=_r(s,["#1F2D4E","#3E2A60","#E2443A"]),l.fillRect(0,0,c,h),l.fillStyle="#F2C230",l.beginPath(),l.arc(c/2,h*.4,c*.25,0,7),l.fill(),l.fillStyle="#FFF",l.font=`900 ${c*.13}px Inter, Arial`,l.textAlign="center",l.fillText(_r(s,["ROCK","GAMER","FUTEBOL","ESPA\xC7O"]),c/2,h*.85);else{l.fillStyle="#F4F1EA",l.fillRect(0,0,c,h);for(let u=0;u<6;u++)l.fillStyle=_r(s,BE),l.beginPath(),l.arc(s()*c,s()*h,10+s()*30,0,7),l.fill()}}),r=pi([0,0]);r.add(ht(n+.08,t+.08,.04,"#7A5233",0,0,.02,{out:.008}));let a=vd(n,t,ae(o),0,0,.042);return r.add(a),r}function Wc(n=2.2,t="#F4F1EA",e="#3A3A44"){let i=pi([n,.62]);i.add(ht(n,.86,.58,t,0,.43,0,{out:.012,r:.02})),i.add(st(n+.02,.04,.62,e,0,.88,0,{out:.01}));let s=Math.round(n/.5);for(let a=0;a<s;a++){let l=-n/2+n/s*(a+.5);i.add(st(n/s-.03,.7,.01,t,l,.45,.295)),i.add(st(.12,.02,.02,"#9AA0A8",l+(a%2?-.12:.12),.7,.31))}i.add(st(.6,.02,.4,"#C9CED6",-n/4,.905,0)),i.add(st(.52,.03,.34,"#8D949C",-n/4,.9,0));let o=new j;o.position.set(-n/4,.9,-.22),o.add(gt(.02,.02,.28,"#C9CED6",0,.14,0,{seg:8}));let r=gt(.015,.015,.2,"#C9CED6",0,.28,.08,{seg:8});return r.rotation.x=Math.PI/2,o.add(r),i.add(o),i.add(gt(.1,.09,.24,"#B5603E",n/2-.3,1.02,0,{out:.01})),i.add(gt(.11,.11,.03,"#8E4A2E",n/2-.3,1.15,0)),i.add(ht(.3,.05,.2,"#F2C230",n/4,.93,.05)),i}function Xc(n="#F4F1EA"){let t=pi([.62,.62]);t.add(ht(.6,.86,.6,n,0,.43,0,{out:.012,r:.02})),t.add(st(.5,.38,.01,"#2A2A30",0,.36,.301)),t.add(st(.44,.3,.01,"#4A4A52",0,.36,.305)),t.add(st(.6,.02,.6,"#2A2A30",0,.87,0));for(let[s,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(gt(.08,.08,.02,"#4A4A52",s*.14,.89,o*.14,{seg:14})),t.add(gt(.05,.05,.03,"#1B1A20",s*.14,.9,o*.14,{seg:10}));for(let s=0;s<4;s++)t.add(gt(.025,.025,.03,"#1B1A20",-.2+s*.13,.8,.31,{rot:[Math.PI/2,0,0],seg:8}));t.add(st(.6,.5,.04,n,0,1.12,-.29));let e=new j;e.position.set(.14,.9,.14),e.add(gt(.12,.11,.14,"#9AA0A8",0,.07,0,{out:.01})),e.add(gt(.125,.125,.015,"#8D949C",0,.15,0));let i=st(.2,.02,.03,"#2A2A30",.2,.1,0);return e.add(i),t.add(e),t}function qc(n="#F4F1EA"){let t=pi([.72,.7]);t.add(ht(.7,1.8,.68,n,0,.9,0,{out:.014,r:.05})),t.add(st(.66,.015,.01,"#C9CED6",0,1.25,.345)),t.add(st(.03,.4,.04,"#C9CED6",-.28,1.5,.36)),t.add(st(.03,.5,.04,"#C9CED6",-.28,.8,.36));for(let e=0;e<4;e++)t.add(ht(.08,.06,.01,["#E2443A","#F2C230","#3E7CC8","#5AA84E"][e],-.1+e*.1-(e>1?.05:0),1.55-e%2*.12,.345));return t.add(ht(.3,.26,.3,"#E8DCC8",0,1.93,0)),t}function Ar(n="#9A6236"){let t=pi([.45,.45]);t.add(ht(.42,.05,.42,n,0,.46,0,{out:.01}));for(let[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(st(.04,.46,.04,n,e*.18,.23,i*.18));return t.add(st(.04,.5,.04,n,-.18,.72,-.18)),t.add(st(.04,.5,.04,n,.18,.72,-.18)),t.add(ht(.4,.2,.03,n,0,.85,-.19,{out:.01})),t}function Yc(n=1,t="#B87A4A"){let e=pi([n,.45]);e.add(ht(n,.85,.44,t,0,.425,0,{out:.012}));for(let i=0;i<3;i++)e.add(st(n-.08,.22,.01,new wt(t).multiplyScalar(.88).getStyle(),0,.18+i*.25,.221)),e.add(st(.16,.02,.02,"#7A5233",0,.25+i*.25,.23));return e.add(gt(.06,.08,.03,"#F4F1EA",n/2-.2,.87,0)),e.add(ht(.2,.25,.03,"#7A5233",-n/4,.98,-.1,{rot:[-.15,0,0]})),e}function Ad(){let n=pi([.4,.65]);return n.add(xe(new On(.19,.15,.4,18),"#FFFFFF",{pos:[0,.2,.05],out:.01})),n.add(gt(.2,.2,.04,"#F4F1EA",0,.42,.05,{out:.008})),n.add(ht(.38,.38,.17,"#FFFFFF",0,.6,-.22,{out:.01})),n.add(st(.06,.02,.02,"#C9CED6",.12,.8,-.13)),n}function Td(n=!0){let t=pi([.55,.45]);return t.add(ht(.55,.2,.45,"#FFFFFF",0,.78,0,{out:.01})),t.add(gt(.08,.1,.7,"#FFFFFF",0,.35,-.05,{seg:12})),t.add(gt(.016,.016,.16,"#C9CED6",0,.96,-.15,{seg:8})),n&&(t.add(ht(.5,.7,.03,"#C9CED6",0,1.5,-.21,{out:.01})),t.add(new ot(new Bt(.44,.64),new _e({color:"#CFE6F2",emissive:"#9CC9E8",emissiveIntensity:.3})).translateY(1.5).translateZ(-.19))),t}var $c=new Map,Oo=(n,t)=>($c.has(n)||$c.set(n,t()),$c.get(n)),zo=(n,t=1,e=1)=>(n.wrapS=n.wrapT=wn,n.repeat.set(t,e),n);var Sd=(n="#78B85A")=>Oo("gr"+n,()=>zo(Vt(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let e=Pe(11);for(let i=0;i<700;i++){let s=e();t.fillStyle=s<.5?"rgba(40,90,30,.16)":"rgba(220,255,160,.14)";let o=e()*256,r=e()*256;t.fillRect(o,r,2,5+e()*5)}for(let i=0;i<6;i++)t.fillStyle="rgba(40,90,30,.10)",t.beginPath(),t.ellipse(e()*256,e()*256,20+e()*30,12+e()*20,e()*3,0,7),t.fill()}))),xd=()=>Oo("terra",()=>zo(Vt(256,256,n=>{n.fillStyle="#C49468",n.fillRect(0,0,256,256);let t=Pe(5);for(let e=0;e<800;e++)n.fillStyle=t()<.5?"rgba(90,50,20,.12)":"rgba(255,230,190,.12)",n.beginPath(),n.arc(t()*256,t()*256,1+t()*3,0,7),n.fill()})));var Gs=n=>Oo("reb"+n,()=>zo(Vt(128,128,t=>{t.fillStyle=n,t.fillRect(0,0,128,128);let e=Pe(n.length*13);for(let i=0;i<160;i++)t.fillStyle=e()<.5?"rgba(0,0,0,.035)":"rgba(255,255,255,.05)",t.fillRect(e()*128,e()*128,3+e()*5,2+e()*4)}))),Rd=(n="#B5603E")=>Oo("tij"+n,()=>zo(Vt(256,256,t=>{t.fillStyle="#D8CBB8",t.fillRect(0,0,256,256);let e=Pe(4);for(let i=0;i<16;i++)for(let s=0;s<5;s++){let o=i%2?26:0,r=e()*.2-.1;t.fillStyle=n,t.globalAlpha=.85+r,t.fillRect(s*52+o-26+2,i*16+2,48,12)}t.globalAlpha=1}))),gs=(n="madeira",t="#C8935E",e="#B98450")=>Oo("piso"+n+t+e,()=>zo(Vt(256,256,i=>{if(n==="madeira")for(let s=0;s<8;s++){i.fillStyle=s%2?t:e,i.fillRect(0,s*32,256,32),i.fillStyle="rgba(0,0,0,.12)",i.fillRect(0,s*32,256,2),i.fillRect(s*97%256,s*32,2,32),i.fillStyle="rgba(80,40,10,.08)";for(let o=0;o<4;o++)i.fillRect((s*37+o*61)%256,s*32+10+o*3,40,2)}else if(n==="xadrez")for(let s=0;s<4;s++)for(let o=0;o<4;o++)i.fillStyle=(s+o)%2?t:e,i.fillRect(s*64,o*64,64,64);else if(n==="granilite"){i.fillStyle=t,i.fillRect(0,0,256,256);let s=Pe(17);for(let o=0;o<900;o++)i.fillStyle=["#00000022","#FFFFFF33",e+"88"][o%3],i.fillRect(s()*256,s()*256,2+s()*4,2+s()*3)}else{i.fillStyle=t,i.fillRect(0,0,256,256),i.strokeStyle=e,i.lineWidth=4;for(let s=0;s<=4;s++)i.beginPath(),i.moveTo(s*64,0),i.lineTo(s*64,256),i.moveTo(0,s*64),i.lineTo(256,s*64),i.stroke();i.fillStyle="rgba(255,255,255,.08)",i.fillRect(8,8,40,20)}}))),Ja=(n="#F4F1EA",t="#D9E8EE",e="#7FB2C8")=>Oo("azu"+n+t+e,()=>zo(Vt(128,128,i=>{i.fillStyle=n,i.fillRect(0,0,128,128),i.fillStyle=t,i.fillRect(64,0,64,64),i.fillRect(0,64,64,64),i.strokeStyle=e,i.lineWidth=3,i.beginPath(),i.arc(96,32,14,0,7),i.arc(32,96,14,0,7),i.stroke(),i.strokeStyle="rgba(0,0,0,.14)",i.lineWidth=2,i.strokeRect(0,0,64,64),i.strokeRect(64,64,64,64),i.strokeRect(64,0,64,64),i.strokeRect(0,64,64,64)})));function Jc(){let n=new j;n.add(gt(.17,.17,.36,"#5E7A99",0,.25,0,{seg:24,out:.008})),n.add(re(.17,"#5E7A99",0,.43,0,{seg:24}).translateY(0)),n.children[1].scale.y=.45,n.add(gt(.17,.15,.08,"#4E6A88",0,.04,0,{seg:24,out:.006})),n.add(gt(.04,.05,.06,"#B9BEC6",0,.53,0,{seg:12}));let t=new ot(new Ke(.11,.018,8,24,Math.PI),ge("#4E6A88"));t.position.set(0,.52,0),n.add(t);let e=new ot(new Bt(.18,.12),ae(Vt(180,120,i=>{i.fillStyle="#F2C230",i.fillRect(0,0,180,120),i.fillStyle="#C0392B",i.font="900 40px Inter",i.textAlign="center",i.fillText("G\xC1S",90,60),i.font="700 22px Inter",i.fillText("13 kg",90,95)})));return e.position.set(0,.26,.172),n.add(e),n.userData.alca=[0,.62,0],n}function Kc(){let n=new j;n.add(gt(.05,.038,.08,"#F4F1EA",0,.04,0,{seg:16,out:.005}));let t=gt(.044,.044,.004,"#5A3418",0,.074,0,{seg:16});n.add(t),n.userData.cafe=t;let e=new ot(new Ke(.022,.007,6,14),ge("#F4F1EA"));return e.position.set(.055,.045,0),n.add(e),n.add(gt(.075,.07,.01,"#F4F1EA",0,.005,0,{seg:18})),n}function wd(n="#2E6FB8"){let t=new j;return t.add(ht(.3,.38,.16,n,0,0,0,{out:.008,r:.05})),t.add(ht(.22,.16,.06,new wt(n).multiplyScalar(.8).getStyle(),0,-.07,.1,{r:.03})),t}function Cd(n="#3EA6FF"){let t=new j,e=st(.012,.1,.01,n,0,.05,0),i=st(.012,.08,.01,n,0,.14,0);return i.add(st(.014,.03,.012,"#F4F1EA",0,.03,.008)),t.add(e,i),t.userData.cabo=e,t.userData.ponta=i,t}function Fd(){let n=new j;return n.add(gt(.02,.02,.08,"#C9CED6",0,0,.04,{rot:[Math.PI/2,0,0],seg:10,out:.004})),n.add(gt(.018,.018,.07,"#C9CED6",0,-.03,.08,{seg:10})),n.add(st(.06,.015,.015,"#C9CED6",0,.03,.03)),n}function Qc(n="#F4F1EA"){let t=new j,e=ht(.44,.04,.42,n,0,.44,0,{out:.006});t.add(e);let i=ht(.44,.4,.04,n,0,.68,-.2,{out:.006});i.rotation.x=-.12,t.add(i);let s=[];for(let[o,r]of[[-.19,-.18],[.19,-.18],[-.19,.18],[.19,.18]]){let a=new j;a.position.set(o,.43,r),a.add(gt(.02,.025,.44,n,0,-.22,0,{seg:8,out:.004})),t.add(a),s.push([a,o,r])}return t.abrir=o=>{e.position.y=.44-.38*o,i.position.y=.68-.38*o,i.rotation.x=-.12-.5*o,s.forEach(([r,a,l])=>{r.position.y=.43-.38*o,r.rotation.set(Math.sign(l)*1.4*o,0,-Math.sign(a)*1.4*o)})},t}function Pd(){let n=new j;n.add(ht(.6,.04,.45,"#C9A06A",0,.72,0,{out:.006})),n.add(st(.04,.7,.04,"#4A4E58",-.26,.35,-.18)),n.add(st(.04,.7,.04,"#4A4E58",.26,.35,-.18)),n.add(st(.04,.7,.04,"#4A4E58",-.26,.35,.18)),n.add(st(.04,.7,.04,"#4A4E58",.26,.35,.18));let t=n.children[0];return n.userData.tampo=t,n}function Vs(n=.4){let t=new j;t.add(st(.008,n,.008,"#2A2A30",0,-n/2,0));let e=new ot(new oe(.045,14,10),new _e({color:"#FFF2C8",emissive:"#FFE6A0",emissiveIntensity:1}));return e.position.y=-n-.03,t.add(e),t.userData.bulbo=e,t}var Id=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=wn,i.repeat.set(t,e),i.needsUpdate=!0,i},Ka=(n,t,e,i,s,o,r=0,a=0)=>{let l=new ot(new Bt(n,t),e);return l.position.set(i,s,o),l.rotation.set(r,a,0),l.receiveShadow=!0,l},HE=(n,t=1,e=1)=>ae(Id(Gs(n),t,e));function Dd(n,t,e=220){let i=Vt(8,512,o=>{let r=o.createLinearGradient(0,0,0,512);t.forEach(([a,l])=>r.addColorStop(a,l)),o.fillStyle=r,o.fillRect(0,0,8,512)}),s=new ot(new oe(e,24,16),new ne({map:i,side:$e,fog:!1,depthWrite:!1}));return s.renderOrder=-10,n.add(s),s}function Ld(n,t={}){kn(n,{r:8,pos:[5,7,2],ki:1.4,hemi:1.4}),n.add(new Mn("#FFF4E6",.45));let e=new j;n.add(e);let i=7,s=7.5,o=3;e.add(Ka(i,s,ae(Id(gs("ceramica","#D8CDB4","#C4B89E"),7,7)),0,0,0,-Math.PI/2));for(let[E,m,p,b]of[[i,0,-s/2,0],[i,0,s/2,Math.PI],[s,-i/2,0,Math.PI/2],[s,i/2,0,-Math.PI/2]])e.add(Ka(E,1.1,ge("#3E8A6A"),m,.55,p,0,b)),e.add(Ka(E,1.9,HE("#F2E6C8",3,1),m,2.05,p,0,b));e.add(Ka(i,s,ge("#F4F0E8"),0,o,0,Math.PI/2));let r=st(3.6,1.3,.05,"#2E5A44",0,1.65,-s/2+.04,{out:.008});e.add(r),e.add(st(3.7,.06,.12,"#9A7A5A",0,.98,-s/2+.08));let a=new ot(new Bt(3.4,1.1),new ne({transparent:!0,map:Vt(1024,330,E=>{if(t.giz){t.giz(E);return}E.strokeStyle="#F4F1EA",E.fillStyle="#F4F1EA",E.font="600 48px Caveat",E.fillText("F\xEDsica \u2014 For\xE7a e Movimento",40,70),E.font="700 72px Caveat",E.fillText("F = m \xB7 a",80,180),E.font="600 40px Caveat",E.fillText("1 kgf \u2248 9,8 N",520,170),E.lineWidth=4,E.beginPath(),E.moveTo(560,250),E.lineTo(820,250),E.lineTo(800,236),E.moveTo(820,250),E.lineTo(800,264),E.stroke()})}));a.position.set(0,1.65,-s/2+.07),e.add(a);let l=new j;l.position.set(2.2,2.45,-s/2+.04),e.add(l),l.add(gt(.22,.22,.05,"#F4F1EA",0,0,0,{rot:[Math.PI/2,0,0],seg:28,out:.006}));let c=new ot(new Ke(.22,.02,8,28),ge("#2A2A30"));l.add(c);for(let E=0;E<12;E++){let m=E/12*6.283;l.add(st(.012,E%3?.02:.04,.01,"#2A2A30",Math.sin(m)*.18,Math.cos(m)*.18,.03))}let h=new j,u=new j;h.add(st(.016,.11,.01,"#1E1E22",0,.05,0)),u.add(st(.01,.17,.01,"#1E1E22",0,.08,0)),h.position.z=.035,u.position.z=.04,l.add(h,u),l.add(re(.012,"#C0392B",0,0,.045,{seg:8})),l.hora=(E,m)=>{u.rotation.z=-m/60*6.283,h.rotation.z=-(E%12+m/60)/12*6.283};let d=[];for(let E=0;E<4;E++)for(let m=0;m<5;m++){let p=Pd();p.position.set(-2.4+m*1.2,0,-1.4+E*1.3),e.add(p),d.push(p);let b=Ar("#4A4E58");b.position.set(-2.4+m*1.2,0,-1+E*1.3),b.rotation.y=Math.PI,e.add(b)}for(let E=0;E<3;E++){let m=new ot(new Bt(1.4,1.1),new ne({color:"#CFE6F4"}));m.position.set(i/2-.02,1.9,-2+E*2.2),m.rotation.y=-Math.PI/2,e.add(m),e.add(st(.08,.06,1.5,"#E8E2D6",i/2-.05,1.33,-2+E*2.2))}let f=new Kn("#FFE8C0",14,12,.7,.6,1.2);f.position.set(i/2+2,3.5,0),f.target.position.set(0,0,0),n.add(f,f.target);let g=ht(1.2,.06,.6,"#9A6236",-1.8,.76,-s/2+1.1,{out:.008});return e.add(g),e.add(st(1.1,.7,.5,"#7A4E2E",-1.8,.36,-s/2+1.1)),{g:e,relogio:l,carteiras:d,D:s,W:i}}var jc=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=wn,i.repeat.set(t,e),i.needsUpdate=!0,i},Bd=(n,t,e,i,s,o,r=0,a=0)=>{let l=new ot(new Bt(n,t),e);return l.position.set(i,s,o),l.rotation.set(r,a,0),l.receiveShadow=!0,l};var NE=n=>ae(jc(Gs(n),1,1));var OE=.27,zE=8;var kE=1.5,iM=kE-zE*OE;function Ud(n,t,e,i,s={}){let o=new j;n.add(o),o.add(Bd(t,e,ae(jc(gs(...s.piso||["ceramica","#D8CFBE","#C4B9A4"]),t*1.2,e*1.2)),0,0,0,-Math.PI/2));let r=s.azul?ae(jc(Ja("#F6F4EE","#E2E6E4","#B8C8C8"),t/.8,i/.8)):NE(s.parede||"#EDE6D6"),a=[[t,0,-e/2,0],[t,0,e/2,Math.PI],[e,-t/2,0,Math.PI/2],[e,t/2,0,-Math.PI/2]].map(([c,h,u,d])=>{let f=Bd(c,i,r,h,i/2,u,0,d);return o.add(f),f}),l=new ot(new Bt(t,e),ge("#F4F0E8"));l.rotation.x=Math.PI/2,l.position.y=i,o.add(l);for(let[c,h,u,d]of[[0,-e/2+.01,t,.02],[0,e/2-.01,t,.02],[-t/2+.01,0,.02,e],[t/2-.01,0,.02,e]])o.add(st(u,.08,d,"#C8BEAE",c,.04,h,{shadow:!1}));return{g:o,paredes:a}}function ko(n,t,e="manha",i=1){let s={manha:["#8CC8F0","#E8F4FA","#F4E0B0"],tarde:["#F2A65A","#F7D28A","#E8B070"],noite:["#141A38","#2A2E58","#F2C76A"],madrugada:["#2E3A6A","#6A6E9A","#E8C88A"]}[e],o=Vt(512,360,l=>{let c=l.createLinearGradient(0,0,0,360);c.addColorStop(0,s[0]),c.addColorStop(1,s[1]),l.fillStyle=c,l.fillRect(0,0,512,360);let h=Pe(i);for(let u=0;u<9;u++){let d=40+h()*40,f=120+h()*160,g=u*58-10;l.fillStyle=e==="noite"||e==="madrugada"?"#1E2238":["#D8CDB8","#C8B8A0","#E2D2BC","#B8A890"][u%4],l.fillRect(g,360-f,d,f);for(let E=0;E<6;E++)for(let m=0;m<3;m++)l.fillStyle=e==="noite"||e==="madrugada"?h()>.55?s[2]:"#2A2E44":"#8EA6B8",l.fillRect(g+6+m*(d/3),360-f+12+E*24,d/3-10,12)}}),r=new j,a=new ot(new Bt(n,t),new ne({map:o}));r.add(a);for(let l of[-1,1])r.add(st(.05,t+.05,.06,"#E8E2D6",l*n/2,0,.02));return r.add(st(n,.05,.06,"#E8E2D6",0,t/2,.02)),r.add(st(n+.14,.05,.14,"#E8E2D6",0,-t/2,.06)),r.add(st(.03,t,.03,"#E8E2D6",0,0,.02)),r.userData.vidro=a,r}function Hd(n){kn(n,{r:5,pos:[2,6,3],ki:1.2,hemi:1.5}),n.add(new Mn("#FFF4E6",.5));let t=2,e=2.2,i=2.5,{g:s}=Ud(n,t,e,i,{azul:!0,piso:["ceramica","#B8C8C8","#A0B4B4"]}),o=Td(!0);o.position.set(.3,0,-e/2+.25),n.add(o);let r=Ad();r.position.set(-.55,0,-e/2+.35),n.add(r);let a=gt(.03,.025,.09,"#3EA6FF",.55,.925,-e/2+.2,{seg:10,out:.003});n.add(a);let l=new j;l.position.set(0,0,e/2-.02),n.add(l),l.add(st(.8,2.05,.04,"#E8E2D6",0,1.03,0,{out:.006}));let c=new j;c.position.set(-.3,1,-.04),l.add(c),c.add(gt(.02,.02,.05,"#C9A030",0,0,0,{rot:[Math.PI/2,0,0],seg:8})),c.add(st(.12,.02,.02,"#C9A030",.05,0,-.03));let h=Fd();h.position.set(.3,.98,-e/2+.05),n.add(h);let u=Vs(.15);return u.position.set(0,i,0),n.add(u),{g:s,pia:o,porta:l,macaneta:c,torneira:h,copo:a,W:t,D:e}}function th(n,t={}){kn(n,{r:6,pos:[2,6,4],ki:1,hemi:1.3,key:"#FFE8C8"}),n.add(new Mn("#FFE9D0",.5));let e=3.6,i=3.2,s=2.6,{g:o}=Ud(n,e,i,s,{parede:"#E8D8B8",piso:["madeira","#A87A4E","#966A42"]}),r=Md(1.8,"#7A6A5A");r.position.set(-.6,0,-i/2+.5),n.add(r);let a=ht(1,.04,.7,"#C84E4E",-.9,.78,-i/2+.62,{out:.005});a.rotation.x=-.5,n.add(a);let l=_d(1,"#7A5236");l.position.set(1.2,0,i/2-.3),l.rotation.y=Math.PI,n.add(l);let c=new j;c.position.set(1.2,.5,i/2-.32),c.rotation.y=Math.PI,n.add(c),c.add(ht(.62,.5,.45,"#3A3A40",0,.25,-.05,{out:.008}));let h=new ot(new Bt(.48,.36),new _e({color:"#5A6A7A",emissive:"#3A4A5A",emissiveIntensity:.4}));h.position.set(0,.26,.18),c.add(h);let u=new j;u.position.set(.2,0,.35),n.add(u),u.add(ht(.9,.04,.6,"#9A6236",0,.74,0,{out:.008})),u.add(st(.86,.01,.58,"#F4F1EA",0,.765,0));for(let[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])u.add(st(.05,.72,.05,"#7A4E2E",m*.38,.36,p*.24));let d=ko(1.1,1,"tarde",6);d.position.set(e/2-.02,1.55,-.4),d.rotation.y=-Math.PI/2,n.add(d);let f=new ot(new Bt(.5,.3),new ne({transparent:!0,map:Vt(250,150,m=>{m.strokeStyle="#2F4A3A",m.lineWidth=6;for(let p=0;p<9;p++)m.beginPath(),m.moveTo(20+p*26,10),m.quadraticCurveTo(30+p*26+(p>2&&p<7?30:0),80,20+p*26,145),m.stroke();m.beginPath(),m.moveTo(10,14),m.quadraticCurveTo(125,60,240,14),m.stroke(),m.beginPath(),m.moveTo(10,140),m.lineTo(240,140),m.stroke()})}));f.position.set(e/2-.04,1.25,-.35),f.rotation.y=-Math.PI/2,n.add(f);for(let m=0;m<2;m++){let p=Vc(.5,.4,30+m,"paisagem");p.position.set(-e/2+.02,1.7,-.6+m*.9),p.rotation.y=Math.PI/2,n.add(p)}let g=bd(.9,4);g.position.set(-e/2+.35,0,i/2-.35),n.add(g);let E=Vs(.3);return E.position.set(0,s,.2),n.add(E),{g:o,mesa:u,sofa:r,tv:c,janela:d,W:e,D:i,Hh:s,manta:a}}var Go=(n,t,e=20)=>xe(new cs(n.map(([i,s])=>new it(i,s)),e),t,{out:.004});function GE(n,t=!0,e=1){let i=t?"#F2EBDA":"#2A2630",s=new j,o=[[0,0],[.018,0],[.018,.006],[.014,.009],[.011,.012]];if(n==="p")s.add(Go([...o,[.007,.03],[.009,.032],[0,.033]],i)),s.add(re(.0095,i,0,.04,0,{out:.003,seg:14}));else if(n==="t")s.add(Go([...o,[.011,.042],[.014,.044],[.014,.056],[0,.056]],i));else if(n==="c"){s.add(Go([...o,[.01,.03],[0,.03]],i));let r=ht(.016,.036,.03,i,0,.046,.002,{out:.003,r:.006});r.rotation.x=-.35,s.add(r),s.add(ht(.014,.014,.024,i,0,.056,.016,{out:.003,r:.005}))}else if(n==="b")s.add(Go([...o,[.007,.044],[.011,.05],[.006,.064],[0,.066]],i)),s.add(re(.0035,i,0,.069,0,{seg:8}));else if(n==="d"){s.add(Go([...o,[.008,.052],[.013,.058],[.011,.066],[.006,.07],[0,.072]],i));for(let r=0;r<6;r++){let a=r/6*6.283;s.add(re(.003,i,Math.cos(a)*.011,.069,Math.sin(a)*.011,{seg:6}))}}else n==="r"&&(s.add(Go([...o,[.008,.056],[.013,.062],[.011,.07],[0,.072]],i)),s.add(st(.004,.02,.004,i,0,.082,0,{out:.002})),s.add(st(.014,.004,.004,i,0,.084,0,{out:.002})));return s.scale.setScalar(e),s.userData={tipo:n,branca:t},s}var VE=["tcbdrbct","pppppppp","","","","","pppppppp","tcbdrbct"];function eh(n=.045,t={}){let e=new j,i=n*8;e.add(ht(i+n*.8,.02,i+n*.8,t.borda||"#6A4022",0,.01,0,{out:.006,r:.006}));let s=Vt(512,512,(h,u)=>{for(let d=0;d<8;d++)for(let f=0;f<8;f++)h.fillStyle=(d+f)%2?t.escura||"#7A9A5A":t.clara||"#EEE8D0",h.fillRect(d*u/8,f*u/8,u/8,u/8)}),o=new ot(new Bt(i,i),ae(s));o.rotation.x=-Math.PI/2,o.position.y=.0205,e.add(o);let r=h=>{let u=h.charCodeAt(0)-97,d=+h[1]-1;return new R((u-3.5)*n,.021,(3.5-d)*n)},a={},l=n/.045;t.pecas!==!1&&VE.forEach((h,u)=>{[...h].forEach((d,f)=>{let g=String.fromCharCode(97+f)+(8-u),E=u>=4,m=GE(d,E,l);m.position.copy(r(g)),d==="c"&&(m.rotation.y=E?0:Math.PI),e.add(m),a[g]=m})});let c=(h,u,d,f)=>{let g=r(u),E=r(d),m=Pn(bt(f));h.position.lerpVectors(g,E,m),h.position.y+=Math.sin(Math.PI*m)*n*.9};return e.userData={P:a,casa:r,s:n},{g:e,P:a,casa:r,move:c,s:n}}function Od(){let n=new j,t=ht(.2,.08,.08,"#2A2630",0,.04,0,{out:.005,r:.012});t.rotation.x=0,n.add(t);let e=document.createElement("canvas");e.width=512,e.height=160;let i=e.getContext("2d"),s=new mn(e);s.colorSpace=Ie;let o=new ot(new Bt(.18,.056),new ne({map:s}));o.position.set(0,.045,.041),n.add(o);let r=[-.05,.05].map(l=>{let c=gt(.012,.012,.02,"#E2443A",l,.085,0,{out:.003,seg:12});return n.add(c),c}),a=(l,c,h=0)=>{i.fillStyle="#1A1A1E",i.fillRect(0,0,512,160);for(let[u,d]of[[0,l],[1,c]])i.fillStyle="#B8E8C8",i.fillRect(16+u*256,16,224,128),i.fillStyle="#16301E",i.font="700 86px 'IBM Plex Mono'",i.textAlign="center",i.textBaseline="middle",i.fillText(d,128+u*256,84);s.needsUpdate=!0,r[0].position.y=h===0?.08:.086,r[1].position.y=h===1?.08:.086};return a("10:00","10:00"),n.userData.set=a,n}function Vo(n={}){let t=new j,e=n.cor||"#C9893E",i=new j;t.add(i);for(let[r,a]of[[.17,-.02],[.13,.2]]){let l=gt(r,r,.09,e,a,0,0,{rot:[Math.PI/2,0,0],out:.006,seg:28});i.add(l)}let s=gt(.055,.055,.002,"#2A1A12",.07,0,.046,{rot:[Math.PI/2,0,0],seg:20});i.add(s),i.add(st(.03,.1,.012,"#4A2A16",-.09,0,.05));let o=st(.5,.05,.025,"#5A361E",.58,0,.03,{out:.005});t.add(o),t.add(ht(.12,.07,.03,"#3A2214",.88,0,.03,{out:.005}));for(let r=0;r<6;r++)n.semCorda!==r&&t.add(st(.86,.0025,.0025,"#E8E0C8",.44,-.018+r*.0072,.052,{shadow:!1}));if(n.teia){let r=new ot(new Bt(.3,.3),new ne({transparent:!0,depthWrite:!1,map:Vt(256,256,a=>{a.strokeStyle="rgba(240,240,240,.8)",a.lineWidth=2;for(let l=0;l<8;l++){let c=l/8*6.283;a.beginPath(),a.moveTo(128,128),a.lineTo(128+Math.cos(c)*128,128+Math.sin(c)*128),a.stroke()}for(let l=20;l<128;l+=22)a.beginPath(),a.arc(128,128,l,0,7),a.stroke()})}));r.position.set(-.1,.1,.05),t.add(r),t.userData.teia=r}return t.userData.corpo=i,t}function Qa(n=.35){let t=new j,e=re(.11,"#F4F1EA",0,.11*(1-n*.3),0,{out:.006,seg:18});e.scale.set(1+n*.12,1-n*.3,1+n*.12),t.add(e);for(let i=0;i<6;i++){let s=i/6*6.283,o=re(.032,"#2A2A30",Math.cos(s)*.085*(1+n*.12),.11*(1-n*.3)+Math.sin(i*1.7)*.04,Math.sin(s)*.085*(1+n*.12),{seg:8});o.scale.set(1,.5,1),o.lookAt(0,.11,0),t.add(o)}return t.userData.b=e,t}function Nd(n,t,e,i={}){n.fillStyle="#FBF7EC",n.fillRect(0,0,t,e);let s=(u,d=10)=>{n.strokeStyle=u,n.fillStyle=u,n.lineWidth=d*t/1024,n.lineCap="round",n.lineJoin="round"},o=u=>u*t/1024,r=u=>u*e/768;s("#4FB04A",14);for(let u=0;u<70;u++){let d=520+u%14*16;n.beginPath(),n.moveTo(o(60+u*37%60),r(d)),n.lineTo(o(960-u*53%70),r(d+Math.sin(u)*8)),n.stroke()}s("#8A8A8A",10);for(let u of[120,900])n.beginPath(),n.arc(o(u),r(520),o(22),0,7),n.fill();s("#F2C230",10),n.beginPath(),n.arc(o(900),r(110),o(55),0,7),n.fill();for(let u=0;u<10;u++){let d=u/10*6.283;n.beginPath(),n.moveTo(o(900+Math.cos(d)*70),r(110+Math.sin(d)*70)),n.lineTo(o(900+Math.cos(d)*100),r(110+Math.sin(d)*100)),n.stroke()}let a=(u,d,f,g,E,m)=>{let p=f*.22;s("#2A2A30",9),n.beginPath(),n.moveTo(o(u-f*.08),r(d)),n.lineTo(o(u-f*.04),r(d-f*.38)),n.moveTo(o(u+f*.08),r(d)),n.lineTo(o(u+f*.04),r(d-f*.38)),n.stroke(),s(g,12),n.beginPath(),n.moveTo(o(u-f*.13),r(d-f*.36)),n.lineTo(o(u+f*.13),r(d-f*.36)),n.lineTo(o(u+f*.11),r(d-f*.72)),n.lineTo(o(u-f*.11),r(d-f*.72)),n.closePath(),n.fill(),s("#E3AE86",9);let b=d-f*.68;E?(n.beginPath(),n.moveTo(o(u-f*.11),r(b)),n.lineTo(o(u-f*.3),r(b-f*.3)),n.moveTo(o(u+f*.11),r(b)),n.lineTo(o(u+f*.3),r(b-f*.3)),n.stroke()):(n.beginPath(),n.moveTo(o(u-f*.11),r(b)),n.lineTo(o(u-f*.26),r(b+f*.2)),n.moveTo(o(u+f*.11),r(b)),n.lineTo(o(u+f*.28),r(b+f*.12)),n.stroke());let A=d-f*.72-p;if(n.fillStyle="#E3AE86",n.beginPath(),n.arc(o(u),r(A),o(p),0,7),n.fill(),s("#2A2A30",6),n.beginPath(),n.arc(o(u),r(A),o(p),0,7),n.stroke(),s("#4A2A18",14),n.beginPath(),n.arc(o(u),r(A-p*.2),o(p*.95),Math.PI*1.05,Math.PI*1.95),n.stroke(),s("#2A2A30",7),m)n.beginPath(),n.arc(o(u-p*.35),r(A-p*.05),o(5),0,7),n.fill(),n.beginPath(),n.moveTo(o(u+p*.2),r(A-p*.05)),n.lineTo(o(u+p*.5),r(A-p*.05)),n.stroke(),n.beginPath(),n.arc(o(u),r(A+p*.35),o(p*.35),0,Math.PI),n.stroke(),s("#F2546E",8),n.beginPath(),n.ellipse(o(u+p*.05),r(A+p*.72),o(p*.14),r(p*.2),0,0,7),n.fill();else{for(let y of[-1,1])n.beginPath(),n.arc(o(u+y*p*.35),r(A-p*.05),o(5),0,7),n.fill();n.beginPath(),n.arc(o(u),r(A+p*.2),o(p*.45),.2,Math.PI-.2),n.stroke()}};a(330,600,330,"#8E949C",!0,!1),a(640,610,210,"#F2C230",!1,!0),s("#2A2A30",6),n.fillStyle="#FFFFFF",n.beginPath(),n.arc(o(745),r(590),o(26),0,7),n.fill(),n.stroke(),n.fillStyle="#2A2A30",n.beginPath(),n.arc(o(745),r(590),o(9),0,7),n.fill();let l=i.brilho||0;n.save(),n.translate(o(512),r(120)),n.rotate(-.04),l>0&&(n.shadowColor=`rgba(255,220,120,${l})`,n.shadowBlur=40*l*t/1024),n.fillStyle="#2E5EC8",n.font=`700 ${Math.round(74*t/1024)}px Caveat`,n.textAlign="center",n.textBaseline="middle";let c="o melhor dia da minha vida",h=-n.measureText(c).width/2;for(let u=0;u<c.length;u++){let d=c[u],f=n.measureText(d).width;n.save(),n.translate(h+f/2,Math.sin(u*1.7)*6*t/1024),n.rotate(Math.sin(u*2.3)*.08),n.fillText(d,0,0),n.restore(),h+=f}n.restore()}function In(n={}){let t=n.w||.3,e=n.h||.225,i=new j,s=document.createElement("canvas");s.width=1024,s.height=768;let o=s.getContext("2d");Nd(o,1024,768,{});let r=new mn(s);r.colorSpace=Ie;let a=Vt(64,64,b=>{b.fillStyle="#F4EFE0",b.fillRect(0,0,64,64),b.fillStyle="#4FB04A55",b.fillRect(40,40,24,24)}),l=[],c=(b,A)=>{let y=new Bt(t/2,e/2),C=y.attributes.uv;for(let F=0;F<C.count;F++)C.setXY(F,(C.getX(F)+b)/2,(C.getY(F)+A)/2);let x=new ot(y,[new _e({map:r,side:bi})][0]),w=new ot(y,new _e({map:a,side:$e}));return x.add(w),Ns(x,.002),x},h=new j;i.add(h);let u=new j;h.add(u);let d=new j;h.add(d);for(let[b,A]of[[d,0],[u,1]]){let y=new j;b.add(y);let C=new j;b.add(C);let x=c(A,0);x.position.set((A?1:-1)*t/4,-e/4,0),y.add(x);let w=c(A,1);w.position.set((A?1:-1)*t/4,e/4,0),C.add(w),l.push({lado:b,baixo:y,cima:C})}let f=new j;i.add(f);let g=ht(t/2,e/2,.006,"#F4EFE0",-t/4,-e/4,0,{out:.002,r:.002});f.add(g);let E=new ot(new Bt(t/2*.9,.002),new ne({color:"#C8C0A8"}));E.position.set(-t/4,-e/4,.0035),f.add(E);let m=new ot(new Bt(.02,.015),new ne({color:"#4FB04A"}));m.position.set(-t/2+.015,-e/2+.012,.0035),f.add(m);let p=(b=0,A=0)=>{b=bt(b);let y=b<.015;f.visible=y,h.visible=!y;let C=Pn(bt(b*2)),x=Pn(bt(b*2-1));for(let w of l)w.cima.rotation.x=-(1-C)*Math.PI*.98,w.cima.position.z=(1-C)*.002;l[1].lado.rotation.y=-(1-x)*Math.PI*.98,l[1].lado.position.z=(1-x)*.004,A!==i.userData.br&&(i.userData.br=A,Nd(o,1024,768,{brilho:A}),r.needsUpdate=!0)};return p(n.aberta??0),i.userData.set=p,i.set=p,i}function nh(n=0){let t=new j,e=xe(new cs([[0,0],[.035,.006],[.045,.025],[.04,.05],[.022,.075],[.006,.09],[0,.092]].map(([o,r])=>new it(o,r)),18),"#D9892E",{out:.004});t.add(e);let i=re(.03,"#F4E6C0",.02,.06,.02,{seg:12});i.visible=!1,t.add(i);let s=re(.012,"#FFF8E8",.03,.055,.03,{seg:10});return s.visible=!1,t.add(s),t.userData.morde=o=>{i.visible=o>0,s.visible=o>.5,s.position.y=.055-(o-.5)*.03},t.userData.morde(n),t}function ih(n,t,e=.21,i=.297){let s=new ot(new Bt(e,i),ae(Vt(512,724,(o,r,a)=>{o.fillStyle="#FBF8EE",o.fillRect(0,0,r,a),o.fillStyle="#2A2A30",o.font="800 34px Inter",o.fillText("PROVA \u2014 HIST\xD3RIA",40,60),o.strokeStyle="#B8BCC4",o.lineWidth=3;for(let l=120;l<a-40;l+=44)o.beginPath(),o.moveTo(40,l),o.lineTo(r-40,l),o.stroke();o.strokeStyle=t,o.lineWidth=10,o.beginPath(),o.arc(r-120,150,80,0,7),o.stroke(),o.fillStyle=t,o.font="700 120px Caveat",o.textAlign="center",o.textBaseline="middle",o.fillText(n,r-120,158)})));return s.rotation.x=-Math.PI/2,s}function Tr(){let n=new j,t=re(.06,"#D9A050",0,.02,0,{out:.004,seg:16});t.scale.set(1.4,.4,.8),n.add(t);let e=st(.15,.004,.08,"#F4E6C0",0,.04,0);n.add(e);let i=st(.14,.003,.074,"#FFE680",0,.043,0);return i.material=ge("#FFE680",{emissive:"#FFE680",emissiveIntensity:.1}),n.add(i),n.userData.passa=s=>{i.scale.x=Math.max(.01,s),i.position.x=-.07+.07*s},n}function zd(){let n=new j;return n.add(st(.08,.004,.016,"#C9CED6",.05,0,0,{out:.002})),n.add(st(.07,.012,.014,"#3A2A20",-.03,0,0,{out:.002})),n}function Sr(n,t,e=512,i=!0){let s=document.createElement("canvas");s.width=e,s.height=Math.round(e*t/n);let o=s.getContext("2d"),r=new mn(s);r.colorSpace=Ie,r.anisotropy=8;let a=new ot(new Bt(n,t),i?new ne({map:r,toneMapped:!1}):ae(r)),l=null;return a.paint=(c,h)=>(c!==l&&(l=c,o.setTransform(1,0,0,1,0,0),h(o,s.width,s.height),r.needsUpdate=!0),a),a}var WE="#E8742A";function sh(n,t,e,i){n.fillStyle="#FBF8EE",n.fillRect(0,0,t,e),n.strokeStyle="#9CC4E4",n.lineWidth=2;for(let s=e*.14;s<e;s+=e*.062)n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke();n.strokeStyle="#E88A8A",n.lineWidth=3,n.beginPath(),n.moveTo(t*.12,0),n.lineTo(t*.12,e),n.stroke(),i&&i(n,t,e)}var kd=(n,t,e,i,s,o="#2A3A7A",r="left")=>{n.fillStyle=o,n.font=`700 ${s}px Caveat`,n.textAlign=r,n.textBaseline="middle",n.fillText(t,e,i)};function Gd(){let n=new j;n.add(ht(.62,.02,.4,WE,0,.01,0,{r:.006,out:.004}));let t=Sr(.29,.38,512,!1),e=Sr(.29,.38,512,!1);return t.rotation.x=e.rotation.x=-Math.PI/2,t.position.set(-.148,.023,0),e.position.set(.148,.023,0),n.add(t,e),n.add(gt(.006,.006,.38,"#9EA6B0",0,.03,0,{rot:[Math.PI/2,0,0],seg:6})),n.userData={E:t,D:e},n}var mi=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=wn,i.repeat.set(t,e),i.needsUpdate=!0,i},je=(n,t,e,i,s,o,r=0,a=0)=>{let l=new ot(new Bt(n,t),e);return l.position.set(i,s,o),l.rotation.set(r,a,0),l.receiveShadow=!0,l},Wo=(n,t=1,e=1)=>ae(mi(Gs(n),t,e)),Ws=(n,t,e,i,s,o,r=900,a="center",l="Inter")=>{n.fillStyle=o,n.font=`${r} ${s}px ${l}`,n.textAlign=a,n.textBaseline="middle",n.fillText(t,e,i)};function ja(n,t,e,i,s,o={}){let r=ae(mi(gs(...o.piso||["madeira","#A87A4E","#966A42"]),e*1.1,i*1.1));n.add(je(e,i,r,t,0,0,-Math.PI/2));let a=o.azul?ae(mi(Ja("#F6F4EE","#E2E6E4","#B8C8C8"),e/.8,s/.8)):Wo(o.parede||"#EDE6D6"),l={};l.fundo=je(e,s,a,t,s/2,-i/2,0,0),n.add(l.fundo),l.frente=je(e,s,a,t,s/2,i/2,0,Math.PI),n.add(l.frente),l.esq=je(i,s,a,t-e/2,s/2,0,0,Math.PI/2),n.add(l.esq),l.dir=je(i,s,a,t+e/2,s/2,0,0,-Math.PI/2),n.add(l.dir),l.teto=je(e,i,ge("#F4F0E8"),t,s,0,Math.PI/2),n.add(l.teto);for(let[c,h,u,d]of[[t,-i/2+.01,e,.02],[t-e/2+.01,0,.02,i],[t+e/2-.01,0,.02,i]])n.add(st(u,.08,d,"#C8BEAE",c,.04,h,{shadow:!1}));return l}function oh(n,t,e,i=1,s="#8A6040"){let o=new j;o.position.set(t,0,e),n.add(o);for(let a of[-1,1])o.add(st(.1,2.12,.07,"#B88A5E",0,1.06,a*.44,{out:.005}));o.add(st(.1,.07,.95,"#B88A5E",0,2.12,0,{out:.005}));let r=new j;return r.position.set(0,0,-.4),o.add(r),r.add(st(.035,2.05,.8,s,0,1.03,.4,{out:.005})),r.add(re(.025,"#C9A030",i*.03,1,.72,{seg:8})),o.folha=r,o.abre=a=>{r.rotation.y=-i*a*1.6},o}function Vd(n,t={}){let e=t.hora||"manha",i=e==="noite",s=kn(n,{r:9,pos:i?[2,6,3]:[3,8,6],ki:i?.45:1.5,hemi:i?.7:1.5,sky:i?"#8E9CD0":"#EAF2FF",key:i?"#9FB4F0":"#FFF2DC"});n.add(new Mn(i?"#6A78B8":"#FFF4E6",i?.35:.45));let o=new j;n.add(o);let r=3,a=2.6,l=ja(o,-3.1,3,r,a,{azul:!0,piso:["ceramica","#C9BBA4","#B5A68C"]}),c=Xc("#F4F1EA");c.position.set(-4,0,-r/2+.34),o.add(c);let h=[];for(let Mt=0;Mt<2;Mt++){let pt=new ot(new Jn(.035,.06,10,1,!0),new ne({color:"#5AB0FF",transparent:!0,opacity:.85}));pt.position.set(-4.12+Mt*.24,.93,-r/2+.3),o.add(pt),h.push(pt)}let u=new j;u.position.set(-4.12,.92,-r/2+.3),o.add(u),u.add(gt(.11,.1,.12,"#9EA6B0",0,.06,0,{out:.004,seg:16})),u.add(st(.18,.015,.02,"#2A2A30",.17,.1,0));let d=Jc();d.scale.setScalar(.65),d.position.set(-4.45,0,-r/2+.25),o.add(d);let f=Wc(1.3,"#F4F1EA","#8E8678");f.position.set(-2.85,0,-r/2+.32),o.add(f);let g=qc("#F4F1EA");g.position.set(-1.98,0,-r/2+.38),o.add(g);let E=ko(.9,.8,e,2);E.position.set(-3.1,1.6,-r/2+.02),o.add(E);let m=new j;m.position.set(-3,0,.45),o.add(m);let p=Vt(256,256,Mt=>{for(let pt=0;pt<8;pt++)for(let S=0;S<8;S++)Mt.fillStyle=(pt+S)%2?"#3E7CC8":"#F6F2EA",Mt.fillRect(pt*32,S*32,32,32)});{let Mt=new ot(new Oe(1.12,.012,.82),ae(mi(p,2,1.5)));Mt.position.y=.77,m.add(Mt)}m.add(ht(1,.04,.7,"#B87A4A",0,.745,0));for(let[Mt,pt]of[[-1,-1],[1,-1],[-1,1],[1,1]])m.add(st(.05,.72,.05,"#9A6236",Mt*.44,.36,pt*.29));let b=[[-.55,0,Math.PI/2],[.55,0,-Math.PI/2],[0,-.62,0]].map(([Mt,pt,S])=>{let v=Qc();return v.position.set(-3+Mt,0,.45+pt),v.rotation.y=S,o.add(v),v}),A=Vs(.3);A.position.set(-3.1,a,.2),o.add(A);let y=new on("#FFE2AE",i?6:2,6,1.6);y.position.set(-3.1,2.1,.2),o.add(y);let C=ja(o,0,3,r,a,{parede:"#B8D0DC",piso:["madeira","#9A6A42","#8A5E3A"]}),x=new j;x.position.set(.95,0,-.45),o.add(x),x.add(ht(.95,.3,1.95,"#8A5A36",0,.17,0,{out:.01})),x.add(ht(.95,.7,.06,"#7A4E2E",0,.55,-.98,{out:.01})),x.add(ht(.88,.1,1.85,"#F4F1EA",0,.37,0,{out:.008}));let w=ht(.6,.14,.3,"#F4F1EA",0,.49,-.8,{out:.006});x.add(w);let F=ht(.92,.05,1.2,"#3E6EC8",0,.44,.3,{out:.006});x.add(F);let T=new j;T.position.set(-1.12,0,.2),o.add(T),T.add(ht(.6,.04,1.05,"#F4F1EA",0,.74,0,{out:.008}));for(let[Mt,pt]of[[-1,-1],[1,-1],[-1,1],[1,1]])T.add(st(.04,.72,.04,"#C9CED6",Mt*.26,.36,pt*.48));let M=Gd();M.position.set(.02,.76,.05),M.rotation.y=-Math.PI/2,M.scale.setScalar(.8),T.add(M);let P=new j;P.position.set(-.16,.76,-.38),T.add(P),P.add(gt(.06,.07,.02,"#2A2A30",0,.01,0)),P.add(gt(.01,.01,.3,"#2A2A30",0,.16,0));let W=gt(.05,.1,.12,"#F2C230",0,.32,0,{out:.004});P.add(W);let O=new on("#FFD89A",0,3,1.6);O.position.set(-.1,1,-.2),T.add(O);let I=Ar("#3E6EC8");I.position.set(-.55,0,.25),I.rotation.y=-Math.PI/2,o.add(I);let N=ko(.9,.9,e,4);N.position.set(.4,1.55,-r/2+.02),o.add(N);let H=new Kn(i?"#B8C8FF":"#FFF0D0",i?8:10,7,.55,.6,1.4);H.position.set(.4,2.3,-r/2-.6),H.target.position.set(.2,0,.6),o.add(H,H.target);let q=oh(o,1.5,.9,-1),z=Vo({teia:!0,semCorda:2});z.position.set(-1.36,.22,1.36),z.rotation.set(0,Math.PI/2,Math.PI/2-.2),o.add(z);let tt=new j;tt.position.set(-1.48,1.35,-.95),tt.rotation.y=Math.PI/2,o.add(tt),tt.add(ht(.5,.8,.03,"#7A5236",0,0,0,{out:.005}));let ut=new ot(new Bt(.44,.74),new ne({color:"#9AB0C0"}));ut.position.z=.017,tt.add(ut);let At=new j;At.position.set(-.3,0,-1.25),o.add(At);let Ot=Yc(.8,"#B87A4A");At.add(Ot),At.add(ht(.5,.34,.06,"#2A2A30",0,1.06,-.02,{out:.006}));let fe=Sr(.44,.28,256);fe.position.set(0,1.06,.015),At.add(fe);let Y=new ot(new Bt(.45,.6),ae(Vt(225,300,Mt=>{Mt.fillStyle="#2A2E44",Mt.fillRect(0,0,225,300),Mt.fillStyle="#F2C230",Mt.beginPath(),Mt.arc(112,130,70,0,7),Mt.fill(),Ws(Mt,"ROCK",112,250,50,"#F4F1EA")})));Y.position.set(1,1.7,-r/2+.02),o.add(Y);let rt=Vs(.25);rt.position.set(0,a,0),o.add(rt);let Ct=new on("#FFE2AE",i?0:1.5,5,1.6);Ct.position.set(0,2.2,0),o.add(Ct);let dt=ja(o,2.85,2.5,r,a,{parede:"#F2D89A",piso:["madeira","#B88A5A","#A87A4A"]}),Ut=new j;Ut.position.set(3.55,0,-.55),o.add(Ut),Ut.add(ht(.75,.26,1.6,"#E2443A",0,.15,0,{out:.008})),Ut.add(ht(.7,.09,1.5,"#F4F1EA",0,.32,0,{out:.006}));let Wt=ht(.45,.12,.24,"#F4F1EA",0,.42,-.6,{out:.005});Ut.add(Wt);let jt=ht(.72,.045,1,"#F2C230",0,.39,.2,{out:.005});Ut.add(jt);for(let Mt=0;Mt<9;Mt++){let pt=new ot(new ci(.04,5),new ne({color:"#FFF2A0"}));pt.position.set(2+Mt%3*.5,1.7+Math.floor(Mt/3)*.25,-r/2+.015),o.add(pt)}let Ae=new j;Ae.position.set(2.1,1,-r/2+.03),o.add(Ae),Ae.add(ht(.45,.9,.03,"#F2546E",0,0,0,{out:.005}));{let Mt=new ot(new Bt(.39,.84),new ne({color:"#A8C0D0"}));Mt.position.z=.017,Ae.add(Mt)}let ie=wd("#3E7CC8");ie.position.set(2.15,.19,.9),ie.rotation.y=.6,o.add(ie);let We=[];for(let Mt=0;Mt<3;Mt++){let pt=new ot(new Bt(.3,.22),ae(Vt(150,110,S=>{S.fillStyle="#FBF7EC",S.fillRect(0,0,150,110),S.strokeStyle=["#E2443A","#3E7CC8","#5AA84E"][Mt],S.lineWidth=6,S.beginPath(),S.arc(75,50,26,0,7),S.stroke(),S.beginPath(),S.moveTo(20,95),S.lineTo(130,90),S.stroke()})));pt.position.set(4.08,1.5,-.4+Mt*.4),pt.rotation.y=-Math.PI/2,o.add(pt),We.push(pt)}let B=ko(.7,.7,e,7);B.position.set(3.3,1.6,-r/2+.02),o.add(B);let bn=Vs(.22);bn.position.set(2.85,a,0),o.add(bn);let se=new on("#FFE2AE",i?0:1.5,5,1.6);se.position.set(2.85,2.2,0),o.add(se);for(let Mt of[-1.55,1.55])o.add(st(.1,a,r,"#E8E0D0",Mt,a/2,0));let ce=oh(o,-1.55,.85,1),Nt=oh(o,1.55,.85,-1);if(q.visible=!1,t.corte)for(let Mt of[l,C,dt])Mt.frente.visible=!1,Mt.teto.visible=!1;if(t.semTeto)for(let Mt of[l,C,dt])Mt.teto.visible=!1;return{g:o,D:r,H:a,PK:l,PG:C,PD:dt,fogao:c,chama:h,panela:u,geladeira:g,mesa:m,cadK:b,cama:x,coberta:F,trav:w,escrivaninha:T,caderno:M,abajur:P,luzAbaj:O,cadEsc:I,janela:N,violao:z,espelho:tt,tv:At,telaTV:fe,camaD:Ut,travD:Wt,cobD:jt,mochila:ie,espelhoD:Ae,portaK:ce,portaD:Nt,luzes:{LK:y,LG:Ct,LD:se,sol:H},luz:s}}function Wd(n){kn(n,{r:10,pos:[3,9,5],ki:1.2,hemi:1.6}),n.add(new Mn("#FFFFFF",.5));let t=new j;n.add(t);let e=Pe(41);t.add(je(20,16,ae(mi(gs("ceramica","#E8E4DC","#D8D2C6"),14,12)),0,0,-3,-Math.PI/2)),t.add(je(20,5,Wo("#F4EEDC",6,2),0,2.5,-9));let i=je(20,16,ge("#F4F4F0"),0,3.6,-3,Math.PI/2);t.add(i);for(let g=0;g<6;g++){let E=st(1.6,.05,.25,"#FFFFF4",-6+g*2.6,3.55,-2);E.material=ge("#FFFFF4",{emissive:"#FFFFF4",emissiveIntensity:.8}),t.add(E)}for(let g=0;g<3;g++){let E=-3.5-g*1.8;for(let m of[-1,1]){let p=new j;p.position.set(m*3.2,0,E),t.add(p),p.add(st(4.5,1.7,.5,"#C9CED6",0,.85,0,{out:.008}));for(let b=0;b<4;b++)for(let A=0;A<14;A++)p.add(st(.22,.2+e()*.1,.14,["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F2546E","#F4F1EA","#9B6CC4"][(A+b*3+g)%7],-2.05+A*.31,.3+b*.42,.3))}}let s=new ot(new Bt(5,.9),ae(Vt(1e3,180,g=>{g.fillStyle="#C8302A",g.fillRect(0,0,1e3,180),Ws(g,"MERCADO BOM PRE\xC7O",500,95,92,"#FFE08A")})));s.position.set(0,3,-8.95),t.add(s);let o=new j;t.add(o),o.add(ht(2.4,.85,.7,"#3A3A44",.5,.425,.2,{out:.01}));let r=new ot(new Oe(1.5,.02,.5),ae(mi(Vt(64,64,g=>{g.fillStyle="#2A2A30",g.fillRect(0,0,64,64),g.fillStyle="#3A3A44",g.fillRect(0,0,64,8)}),8,1)));r.position.set(.95,.86,.2),o.add(r);let a=new j;a.position.set(.05,.86,.2),o.add(a),a.add(ht(.3,.02,.3,"#5A5A66",0,0,0));let l=new ot(new Bt(.24,.24),new ne({color:"#FF3A3A",transparent:!0,opacity:.5}));l.rotation.x=-Math.PI/2,l.position.y=.012,a.add(l);let c=new j;c.position.set(-.5,.86,.05),o.add(c),c.add(gt(.02,.02,.3,"#2A2A30",0,.15,0)),c.add(ht(.32,.24,.04,"#2A2A30",0,.4,0,{out:.005}));let h=Sr(.28,.2,256);h.position.set(0,.4,.022),c.add(h);let u=new j;u.position.set(-.5,0,-.3),o.add(u),u.add(gt(.03,.03,2,"#9EA6B0",0,1,0,{seg:8}));let d=gt(.14,.14,.08,"#C8302A",0,2.05,0,{rot:[Math.PI/2,0,0],out:.004});u.add(d);let f=[];for(let g=0;g<5;g++){let E=ht(.12,.16,.1,["#F2C230","#3E7CC8","#E2443A","#5AA84E","#F4F1EA"][g],1.6-g*.2,.95,.2,{out:.004});t.add(E),f.push(E)}return{g:t,leitor:a,laser:l,telaM:h,prods:f,esteira:r}}function Xd(n){kn(n,{r:9,pos:[4,8,5],ki:1.4,hemi:1.5}),n.add(new Mn("#FFF4E6",.45));let t=new j;n.add(t);let e=9,i=8,o=ja(t,0,e,i,3.2,{parede:"#F2E6C8",piso:["ceramica","#D8CDB4","#C4B89E"]});o.frente.visible=!1,t.add(je(e,1.2,ge("#E2843A"),0,.6,-i/2+.01));let r=ht(3.6,1,.7,"#E2843A",-1.4,.5,-i/2+.7,{out:.01});t.add(r);let a=new ot(new Oe(3.4,.4,.5),new _e({color:"#CFE6F4",transparent:!0,opacity:.45}));a.position.set(-1.4,1.2,-i/2+.7),t.add(a);for(let h=0;h<12;h++){let u=re(.05,["#D9892E","#C9A050","#E8B060"][h%3],-2.9+h*.26,1.07,-i/2+.6+h%2*.15,{seg:8});u.scale.set(1,.8,1.3),t.add(u)}let l=new ot(new Bt(1.6,1),ae(Vt(480,300,h=>{h.fillStyle="#2E2A26",h.fillRect(0,0,480,300),Ws(h,"CANTINA",240,50,50,"#F2C230"),[["Coxinha","R$ 4,00"],["Pastel","R$ 5,00"],["Suco","R$ 3,00"],["P\xE3o de queijo","R$ 2,50"]].forEach(([d,f],g)=>{Ws(h,d,40,110+g*46,34,"#F4F1EA",700,"left","Caveat"),Ws(h,f,440,110+g*46,34,"#F4F1EA",700,"right","Caveat")})})));l.position.set(-1.4,2.3,-i/2+.02),t.add(l);let c=[];for(let h=0;h<2;h++){let u=new j;u.position.set(1.4,0,-1.2+h*2.4),t.add(u),u.add(ht(2.4,.06,.8,"#F4F1EA",0,.74,0,{out:.008}));for(let d of[-1,1])u.add(st(.06,.72,.7,"#9EA6B0",d*1,.36,0)),u.add(ht(2.4,.05,.3,"#3E7CC8",0,.44,d*.65,{out:.006})),u.add(st(.05,.42,.25,"#9EA6B0",d*1,.21,.65)),u.add(st(.05,.42,.25,"#9EA6B0",d*1,.21,-.65));c.push(u)}for(let h=0;h<3;h++){let u=ko(1.4,1,"manha",10+h);u.position.set(e/2-.02,1.8,-2.5+h*2.4),u.rotation.y=-Math.PI/2,t.add(u)}return{g:t,mesas:c,W:e,D:i}}function qd(n,t={}){Dd(n,[[0,"#5EA8E8"],[.45,"#A8D6F4"],[.55,"#F4EAD2"],[1,"#D8E6EE"]]);let e=kn(n,{r:14,pos:[-6,9,7],ki:2.1,hemi:1.4,key:"#FFE8C0"});n.add(new Mn("#FFF4E0",.3));let i=new j;n.add(i);let s=Pe(77);i.add(je(60,60,ae(mi(Sd("#78B85A"),20,20)),0,-.01,0,-Math.PI/2)),i.add(je(13,8,ae(mi(xd(),5,3)),0,0,0,-Math.PI/2));let o=[];for(let a of[-5.6,5.6])for(let l of[-.9,.9]){let c=re(.18,"#9A968E",a,.1,l,{out:.006,seg:10});c.scale.set(1.2,.7,1),i.add(c),o.push(c)}i.add(xe(new Oe(30,1.4,.25),ae(mi(Rd("#B5603E"),10,1)),{pos:[0,.7,-6.5],out:.01}));let r=["#E8C88A","#9CC4B0","#E8A08A","#B8C8E8","#F2E0B0","#D8B8D8"];for(let a=0;a<8;a++){let l=3+s()*1.5,c=3+s()*2.5,h=new j;h.position.set(-14+a*4,0,-9-s()*2),i.add(h),h.add(xe(new Oe(l,c,3),ae(mi(Gs(r[a%6]),2,2)),{pos:[0,c/2,0],out:.01})),h.add(xe(new Oe(l+.3,.25,3.3),ge("#B8643C"),{pos:[0,c+.1,0],out:.008}));for(let u=0;u<2;u++)h.add(je(.7,.7,ge("#7E98B0"),-l/4+u*l/2,c*.6,1.51))}for(let a=0;a<5;a++){let l=new j;l.position.set(-10+a*5+s()*2,0,-5-s()*1),i.add(l),l.add(gt(.1,.14,2.2,"#6A4A30",0,1.1,0,{seg:8,out:.006}));for(let c=0;c<3;c++)l.add(re(.7+s()*.3,["#4C8A3E","#5DA04A","#3E7A34"][c],s()-.5,2.6+s()*.6,s()-.5,{seg:10,out:.01}))}for(let a=0;a<40;a++){let l=new ot(new Jn(.04,.12,4),ge("#5A9A44"));l.position.set((s()-.5)*12,.05,(s()-.5)*7),i.add(l)}return Dc(n,{centro:[0,14,-14],raio:12,n:5}),{g:i,traves:o,luz:e}}function Yd(n,t={}){kn(n,{r:18,pos:[4,14,6],ki:.6,hemi:.55,sky:"#C8D0E8",ground:"#5A5048"}),n.add(new Mn("#B8C0D8",.25));let e=new j;n.add(e);let i=Pe(5);e.add(je(40,40,ae(mi(gs("madeira","#8A6A4A","#7A5A3E"),16,16)),0,0,0,-Math.PI/2)),e.add(je(40,12,Wo("#3A3A48",8,3),0,6,-16)),e.add(je(40,12,Wo("#3A3A48",8,3),-16,6,0,0,Math.PI/2)),e.add(je(40,12,Wo("#3A3A48",8,3),16,6,0,0,-Math.PI/2)),e.add(je(40,12,Wo("#3A3A48",8,3),0,6,16,0,Math.PI)),e.add(je(40,40,ge("#2A2A34"),0,11,0,Math.PI/2));let s=new ot(new Bt(12,1.6),ae(Vt(1500,200,d=>{d.fillStyle="#1E3A6A",d.fillRect(0,0,1500,200),Ws(d,"CAMPEONATO ESTADUAL DE XADREZ",750,80,84,"#F2C230"),Ws(d,"FINAL",750,165,52,"#F4F1EA")})));s.position.set(0,7,-15.9),e.add(s);let o=ht(4.2,.3,3.2,"#5A2A2A",0,.15,0,{out:.01});e.add(o),e.add(je(4,3,ge("#8E1E2A"),0,.305,0,-Math.PI/2));let r=new j;r.position.set(0,.3,0),e.add(r),r.add(ht(1,.05,.8,"#F4F1EA",0,.74,0,{out:.008})),r.add(st(.9,.7,.7,"#E8E2D6",0,.37,0));let a=eh(.055);a.g.position.set(0,.765,0),r.add(a.g);let l=Od();l.position.set(.42,.765,-.02),l.rotation.y=Math.PI/2,l.scale.setScalar(1.1),r.add(l);for(let d of[.62,-.62]){let f=Ar("#2A2A30");f.position.set(0,.3,d),f.rotation.y=d>0?Math.PI:0,e.add(f)}let c=new Kn("#FFF4E0",60,20,.32,.5,1.2);c.position.set(0,9,1.5),c.target.position.set(0,.8,0),c.castShadow=!0,e.add(c,c.target);let h=new ot(new Jn(2.4,8.5,32,1,!0),new ne({color:"#FFF4D8",transparent:!0,opacity:.07,depthWrite:!1,side:Ge}));h.position.set(0,4.9,.7),h.rotation.x=-.17,e.add(h);let u=[];for(let d=0;d<5;d++)for(let f=0;f<10;f++){let g=-11+f*2.45,E=-12+d*3.1;if(Math.abs(g)<3.2&&Math.abs(E)<3)continue;let m=new j;m.position.set(g,0,E),e.add(m),m.add(ht(.9,.05,.7,"#F4F1EA",0,.74,0,{out:.006})),m.add(st(.8,.7,.6,"#E8E2D6",0,.37,0));let p=eh(.045);p.g.position.y=.765,m.add(p.g),u.push(m)}for(let d=0;d<8;d++){let f=new on("#FFE8C8",9,10,1.6);f.position.set(-10+d*3,6,-8+d%2*8),e.add(f)}for(let d=0;d<20;d++)e.add(gt(.03,.03,.9,"#C9A030",-4+d*.42,.45,2.4,{seg:6}));return e.add(gt(.015,.015,8,"#C8302A",0,.85,2.4,{rot:[0,0,Math.PI/2],seg:6})),{g:e,T:a,rel:l,mesaF:r,mesas:u,holo:c,cone:h,tab:o}}function t0(n,t={}){n.add(new Mn("#FFFFFF",.6));let e=new hs("#FFF4E0",1.6);e.position.set(3,8,4),n.add(e);let i=new j;n.add(i);let s=Pe(99),o=new cn,r=400,a=new Float32Array(r*3);for(let c=0;c<r;c++)a[c*3]=(s()-.5)*40,a[c*3+1]=(s()-.2)*20,a[c*3+2]=(s()-.5)*40;o.setAttribute("position",new vn(a,3));let l=new Sa(o,new dr({color:t.cor||"#C8D4FF",size:.06,transparent:!0,opacity:.6}));return i.add(l),{g:i,pontos:l}}var e0=(n,t=.9)=>(e,i,s)=>{e.fillStyle=n,e.fillRect(0,s*t,i,s*(1-t))},XE=(n,t,e,i=.5)=>(s,o,r)=>{s.fillStyle=t,s.font=`900 ${e}px Inter`,s.textAlign="center",s.textBaseline="middle",s.fillText(n,o/2,r*i)},Dn={pele:"#E3AE86",cabelo:"cacheado",corCabelo:"#3A2216",nariz:!0,banguela:!0,sardas:!0,camisa:"#F6C83A",calca:"#3E6EC8",meia:"#E3AE86",tenis:"#E3AE86",sola:"#E2443A",chinelo:"#E2443A",escala:.64,estampa:(n,t,e)=>{e0("#E0A824",.88)(n,t,e),n.fillStyle="#E2443A",n.beginPath();for(let i=0;i<5;i++){let s=-Math.PI/2+i*2.513;n.lineTo(t/2+Math.cos(s)*46,e*.5+Math.sin(s)*46);let o=s+1.256;n.lineTo(t/2+Math.cos(o)*19,e*.5+Math.sin(o)*19)}n.fill()}},Xs={...Dn,camisa:"#6E8ED8",calca:"#6E8ED8",manga:"longa",estampa:(n,t,e)=>{n.fillStyle="#F6E27A";for(let i=0;i<22;i++){let s=i*137%t,o=i*71%e;n.beginPath();for(let r=0;r<5;r++){let a=-Math.PI/2+r*2.513;n.lineTo(s+Math.cos(a)*13,o+Math.sin(a)*13),n.lineTo(s+Math.cos(a+1.256)*5,o+Math.sin(a+1.256)*5)}n.fill()}}},qE=(n,t,e)=>{e0("#B02A24",.9)(n,t,e),n.fillStyle="#B02A24",n.fillRect(t/2-6,0,12,e*.3),n.fillStyle="#F4F1EA",n.fillRect(t/2+70,e*.3,120,70),n.fillStyle="#2A2A30",n.font="900 30px Inter",n.textAlign="center",n.textBaseline="middle",n.fillText("ROSE",t/2+130,e*.3+35),n.fillStyle="#FFE08A",n.font="900 36px Inter",n.fillText("BOM PRE\xC7O",t/2-110,e*.62)},Ai={pele:"#D9A07A",cabelo:"coque",corCabelo:"#2E1E16",cilios:!0,nariz:!0,brincos:"#F2C230",camisa:"#D8362E",calca:"#2A2A30",tenis:"#2A2A30",sola:"#F4F1EA",escala:.93,estampa:qE},rh={...Ai,camisa:"#9C7AC8",estampa:e0("#8A66B8",.9)},qs={pele:"#8A5A3E",cabelo:"curto",corCabelo:"#1A1212",bone:"#E2443A",boneTras:!0,nariz:!0,tronco:"barriga",camisa:"#3EA864",calca:"#3E5A7A",tenis:"#F4F1EA",sola:"#E2443A",escala:.97,estampa:(n,t,e)=>{XE("23","#F4F1EA",120)(n,t,e),e0("#2E8E50",.9)(n,t,e)}},DM={...vr(2),pele:"#8A5A3E",cabelo:"curto",corCabelo:"#1A1212",bone:"#E2443A",boneTras:!0,tronco:"barriga",escala:.97};var Zd={pele:"#E3B28E",cabelo:"curto",corCabelo:"#8A8680",bigode:"#7A7670",oculos:!0,nariz:!0,rugas:!0,tronco:"barriga",camisa:"#E2D2A8",manga:"longa",calca:"#5A4A3A",tenis:"#3A2A20",sola:"#2A1E16",escala:1.04,estampa:(n,t,e)=>{n.fillStyle="#7A2E2E",n.beginPath(),n.moveTo(t/2-16,0),n.lineTo(t/2+16,0),n.lineTo(t/2+22,e*.6),n.lineTo(t/2,e*.7),n.lineTo(t/2-22,e*.6),n.fill()}},ah={pele:"#B8805A",cabelo:"curto",corCabelo:"#2A2020",nariz:!0,camisa:"#2E5EB8",manga:"longa",calca:"#2E5EB8",tenis:"#F4F1EA",sola:"#2A2A30",escala:1.04,estampa:(n,t,e)=>{n.fillStyle="#F4F1EA",n.fillRect(t*.18,0,18,e),n.fillRect(t*.82-18,0,18,e),n.strokeStyle="#E8E4DC",n.lineWidth=5,n.beginPath(),n.moveTo(t/2-50,0),n.lineTo(t/2,e*.3),n.lineTo(t/2+50,0),n.stroke(),n.fillStyle="#C9CED6",n.beginPath(),n.ellipse(t/2,e*.32,22,14,0,0,7),n.fill()}},LM={...vr(0),pele:"#F0C8A6",cabelo:"topete",corCabelo:"#C99A4A",oculos:!0,nariz:!0,escala:1,sobr:"#9A7030"},$d={pele:"#C98C66",cabelo:"curto",corCabelo:"#1A1212",nariz:!0,sobr:"#1A1212",camisa:"#1E2028",manga:"longa",calca:"#1E2028",tenis:"#121216",sola:"#121216",escala:1.02,estampa:(n,t,e)=>{n.fillStyle="#F4F1EA",n.beginPath(),n.moveTo(t/2-60,0),n.lineTo(t/2,e*.42),n.lineTo(t/2+60,0),n.fill(),n.fillStyle="#7A1E2E",n.fillRect(t/2-9,0,18,e*.4),n.strokeStyle="#E2443A",n.lineWidth=14,n.beginPath(),n.arc(t/2,-10,92,.15,Math.PI-.15),n.stroke(),n.fillStyle="#E2443A";for(let i of[-1,1])n.beginPath(),n.ellipse(t/2+i*86,40,24,30,0,0,7),n.fill()}},Jd={pele:"#E3B28E",cabelo:"careca",corCabelo:"#7A7670",barba:"#9A968F",oculos:!0,nariz:!0,tronco:"barriga",camisa:"#F4F1EA",manga:"longa",calca:"#2A2A30",tenis:"#1E1A18",sola:"#1E1A18",escala:1.03,estampa:(n,t,e)=>{n.fillStyle="#2A2E3A",n.fillRect(0,0,t*.34,e),n.fillRect(t*.66,0,t*.34,e),n.fillStyle="#F2C230",n.fillRect(t*.7,e*.3,70,50)}};var lh=.3+.48;function Ti(n,t={}){let e=Yd(n,t),i=lt(n,zt,0,.62,Math.PI);Ve(i,0,.62,Math.PI,lh);let s=lt(n,$d,0,-.62,0);Ve(s,0,-.62,0,lh);let o=lt(n,Jd,1.25,-.1,-Math.PI/2,.3),r=lt(n,t.profX?ah:ah,-2.6,2.9,Math.PI),a=[],l=[];if(!t.semGente){e.mesas.forEach((h,u)=>{if(u%2)return;let d=lt(n,zs(u,{escala:.95}),0,0,0),f=u%4?1:-1;Ve(d,h.position.x,h.position.z+f*.55,f>0?Math.PI:0,.48),d.seed=u%9,a.push(d)});for(let h=0;h<18;h++){let u=lt(n,zs(h+3),-3.8+h%9*.95,2.75+Math.floor(h/9)*.7,Math.PI);u.seed=h,l.push(u)}}let c=Wn();return n.add(c),{...e,gui:i,adv:s,juiz:o,prof:r,jog:a,pub:l,tel:c}}function Yi(n,t,e="jogo"){n.jog.forEach((i,s)=>{i.pose(Ht(Yt({shR:[60,8],elR:100,headX:18,shL:[30,8],elL:70},qe(t,s,.6)))),Z(i,null,t,s%3?"neutro":"determinado")}),n.pub.forEach((i,s)=>{let o=un(t,s,.8);if(e==="aplauso"){let r=Math.abs(Math.sin(t*9+s));o=Yt({shL:[70,-10],shR:[70,-10],elL:60+r*30,elR:60+r*30},{bob:r*.01})}e==="tensao"&&s%3===0&&(o=Yt(o,{shR:[120,-10],elR:140,headX:6})),i.pose(o),Z(i,null,t,e==="aplauso"?"feliz":e==="tensao"?"preocupado":"neutro",{look:[0,.2]})}),Z(n.juiz,null,t,"neutro"),n.juiz._pose||n.juiz.pose(Yt(dn.bracoCruzado,qe(t,3,.5)))}function Kd(n,t,e=0){let i=n.gui.root.position;n.tel.position.set(i.x-.18+e,lh+.1,i.z-.16),n.tel.rotation.set(0,-Math.PI/2-.5,Math.PI/2-.2)}var Zi={bg:"#121218",far:120},Qd=[13.96,14.25,14.5,14.72,14.9,15.05,15.2,15.33,15.45,15.56,15.66,15.76,15.86,15.95],$i=(n,t,e="determinado",i={})=>{n.gui.pose(Ht(Yt({shR:[48,6],elR:96,shL:[44,6],elL:98,lean:12,headX:16},i.parado?{}:qe(t,1,.3)))),Z(n.gui,null,t,e,{look:[0,.45],vivo:!i.parado,blink:i.parado?0:void 0})},Ji=(n,t)=>{n.adv.pose(Ht(Yt({shR:[40,6],elR:100,shL:[30,6],elL:90,lean:10,headX:14},qe(t,4,.4)))),Z(n.adv,null,t,"determinado",{look:[0,.4]})},jd=[et(0,1.05,{...Zi,fov:30},n=>{let t=Ti(n,{semGente:!0});return t.holo.intensity=30,(e,i,s)=>{$i(t,e),Ji(t,e),Yi(t,e);let o=600-e;return t.rel.userData.set("09:5"+Math.floor(9-e*3),"10:00",0),$(s,[.75,1.32,.35],[.46,1.1,-.02],i/1.05,0,0),{exposure:.7,vig:.6}}}),et(1.05,3.36,{...Zi,fov:24,perto:!0,limpa:!1},n=>{let t=Ti(n,{semGente:!0});return t.holo.intensity=22,(e,i,s)=>{$i(t,e),Ji(t,e),t.adv.root.visible=!1;let o=t.gui;o.headG.updateMatrixWorld(!0);let r=o.headG.localToWorld(new R(0,.26,.3));return $(s,[[0,[r.x+.05,r.y+.02,r.z-.95]],[1,[r.x+.02,r.y,r.z-.6]]],[r.x,r.y-.02,r.z+.2],i/2.3,0,0),{exposure:.78,vig:.6}}}),et(3.36,5.92,{...Zi,fov:34},n=>{let t=Ti(n);return(e,i,s)=>{$i(t,e),Ji(t,e),Yi(t,e);let o=Rt(-.9,-.5,i/2.56);return $(s,[Math.sin(o)*2.2,1.55,Math.cos(o)*2.2],[0,1.05,0],i/2.56,0,0),{vig:.45}}}),et(5.92,9.84,{...Zi,fov:40},n=>{let t=Ti(n);return(e,i,s)=>{$i(t,e),Ji(t,e),Yi(t,e);let o=Pn(i/3.92);$(s,[Rt(1.2,7.5,o),Rt(1.5,7.5,o),Rt(1.6,11,o)],[0,Rt(1,.4,o),Rt(0,-2.5,o)],i/3.92,0,0);let r=be(8.7,9.6,e);return le.mundo.value=r,{vig:.4}}}),et(9.84,11.44,{...Zi,fov:28,limpa:!1},n=>{let t=Ti(n),e=he([t.T.g,t.rel]);return(i,s,o)=>{$i(t,i),Ji(t,i),Yi(t,i);let r=Math.max(0,9*60+41-Math.floor((i-9.84)*6));return t.rel.userData.set("0"+Math.floor(r/60)+":"+String(r%60).padStart(2,"0"),"10:00",0),le.mundo.value=1,e(1,i),ue(n,"#121218",1),$(o,[[0,[.9,1.3,.55]],[1,[.75,1.22,.4]]],[.42,1.09,-.02],s/1.6,0,0),{focus:1,range:.3,blur:10,vig:.5}}}),et(11.44,16.56,{...Zi,fov:32,perto:!0,limpa:!1},n=>{let t=Ti(n),e=he([t.tel]),i=new on("#9FD8FF",0,1,2);return n.add(i),(s,o,r)=>{$i(t,s),Ji(t,s),Yi(t,s);let a=Mr(s,Qd);Kd(t,s,a);let l=Qd.some(u=>s>=u&&s<u+.3);t.tel.tela(l?"chamadasBorrado":"apagada",0),i.position.copy(t.tel.position),i.position.y+=.08,i.intensity=l?2.5:0,le.mundo.value=1,e(1,s),ue(n,"#121218",1);let c=Pn(bt((o-1.2)/2.6)),h=t.tel.position;return $(r,[Rt(-1.1,-.6,c),Rt(1.42,1.02,c),Rt(.2,.52,c)],[Rt(0,h.x,c),Rt(1.25,h.y,c),Rt(.62,h.z,c)],o/5.12,0,0),{focus:Rt(.95,.55,c),range:.25,blur:12,vig:.5}}}),et(16.56,18.36,{...Zi,fov:26,perto:!0,limpa:!1},n=>{let t=Ti(n),e=he([t.gui.root]);return(i,s,o)=>($i(t,16.6,"determinado",{parado:!0}),Ji(t,16.6),Yi(t,16.6),t.juiz.root.visible=!1,le.mundo.value=1,e(.6,i),ue(n,"#121218",1),$(o,[[0,[-.4,1.4,-.42]],[1,[-.34,1.38,-.34]]],[0,1.27,.62],s/1.8,0,0),{vig:.55,exposure:.95})}),et(18.36,23.52,{bg:"#08080C",fov:30},n=>{let t=t0(n,{cor:"#8890B0"}),e=Wn();e.position.set(0,.5,0),e.rotation.set(-Math.PI/2+.25,0,.25),n.add(e);let i=ht(1.2,.04,.8,"#3A2A22",0,.47,0);n.add(i);let s=new on("#FF6A6A",2,1.5,2);return s.position.set(0,.7,.1),n.add(s),(o,r,a)=>{let l=Mr(o,[18.6,19.6,20.6,21.6,22.6],.4);return e.position.x=l,e.tela("chamadasBorrado",0),s.intensity=1.5+Math.sin(o*6)*.5,$(a,[[0,[.03,.8,.3]],[1,[.01,.66,.16]]],[0,.5,0],r/5.16,0,0),{vig:.65,focus:.4,range:.2,blur:8}}}),et(23.52,27.84,{bg:"#0E0C14",fov:30},n=>{t0(n,{cor:"#C8B8FF"});let t=lt(n,Dn,0,0,0),e=In();n.add(e),e.scale.setScalar(.8);let i=new Kn("#FFE8C0",8,4,.5,.8,1.5);return i.position.set(.4,1.6,1.2),i.target.position.set(0,.55,0),n.add(i,i.target),(s,o,r)=>{t.pose({shL:[62,-14],elL:70,shR:[62,-14],elR:70,headX:18}),Z(t,null,s,"neutro",{look:[0,.5]}),t.root.updateMatrixWorld(!0);let a=t.hands.L.localToWorld(new R(0,-.05,.03)),l=t.hands.R.localToWorld(new R(0,-.05,.03));return e.position.copy(a).add(l).multiplyScalar(.5),e.position.z+=.03,e.rotation.set(-.35,0,0),e.set(bt((s-25.2)/4)*.35),$(r,[[0,[.25,.8,.75]],[1,[.12,.72,.5]]],[e.position.x,e.position.y,e.position.z],o/4.32,0,0),{vig:.6,exposure:.85}}}),et(27.84,31.44,{bg:"#0C0A06",fov:30},n=>{t0(n,{cor:"#F2C230"});let t=Ed(2.2);t.position.set(0,1,0),n.add(t);let e=ti(n,[0,1,0],{n:60,cor:"#FFD86A",r:1.2,tam:.025}),i=new on("#FFD86A",4,4,2);return i.position.set(.5,1.5,1.2),n.add(i),(s,o,r)=>{let a=bt((s-28)/2.3),l=a<1?1200*zn(a):1200;return t.set(l,s>30.3?bt((s-30.3)*2)*.6:0),t.rotation.y=Math.sin(s*.8)*.25*(1-a*.6),e((s-27.84)/3.6%1),$(r,[[0,[.15,1.08,1.6]],[1,[.05,1.02,1.2]]],[0,1,0],o/3.6,0,0),{bloom:.25,bloomT:.9,vig:.5,exposure:.85}}}),et(31.44,34.44,{...Zi,fov:30,perto:!0,limpa:!1},n=>{let t=Ti(n),e=he([t.gui.root]);return(i,s,o)=>($i(t,16.6,"determinado",{parado:!0}),Ji(t,16.6),Yi(t,16.6),t.juiz.root.visible=!1,le.mundo.value=.85,e(.5,i),ue(n,"#121218",.85),$(o,[[0,[-.95,1.48,-.42]],[1,[-.85,1.45,-.32]]],[-.1,1.25,.62],s/3,0,0),{vig:.45})}),et(34.44,35.96,{...Zi,fov:38},n=>{let t=Ti(n),e=Object.values(t.T.P);return(i,s,o)=>{let r=34.44+(35.96-i)*3;$i(t,r*3),Ji(t,r*3),Yi(t,r*4,"aplauso"),e.forEach((l,c)=>{l.position.y=.021+Math.abs(Math.sin(i*14+c))*.03*(1-s/1.52),l.rotation.y=i*20*(c%2?1:-1)});let a=Rt(.3,-.6,s/1.52);return $(o,[Math.sin(a)*4,2.4,Math.cos(a)*4],[0,.9,0],s/1.52,Math.sin(i*30)*.01,0),{sat:.55,tint:"#C8D8FF",vig:.5}}})];var n0={x:-.62,z:.25,ry:-Math.PI/2,h:.46};function kt(n,t={}){let e=Vd(n,t),i=Wn();return n.add(i),e.tel=i,e}function tn(n){return Ve(n,n0.x,n0.z,n0.ry,n0.h),n}function rn(n,t,e="L"){Ee(n,t,e,[0,-.07,.06],!1),t.headG.updateMatrixWorld(!0);let i=t.headG.localToWorld(new R(0,.2,.25));n.up.set(0,1,0),n.lookAt(i)}function ei(n,t=1,e=0){let i=n.caderno.userData.D,s="um"+Math.round(t*20)+"|"+Math.round(e*10);i.paint(s,(o,r,a)=>{sh(o,r,a,()=>{o.save(),o.beginPath(),o.rect(0,0,r*(.15+.3*t),a),o.clip(),e>0&&(o.shadowColor="#FFF2A0",o.shadowBlur=30*e),kd(o,"1",r*.22,a*.2,90,"#2A3A7A"),o.restore(),o.font="600 34px Caveat",o.fillStyle="#2A3A7A",o.fillText("Li\xE7\xE3o de matem\xE1tica",r*.15,a*.07)})})}function ch(n,t=1){let e=n.caderno.userData.D,i=Math.round(t*30),s="q"+i;e.paint(s,(o,r,a)=>{sh(o,r,a,()=>{o.font="600 30px Caveat",o.fillStyle="#2A3A7A";for(let l=0;l<i;l++){let c=l%2,h=Math.floor(l/2);o.fillText(`${l+1}) ${l*7%13+2}x = ${(l*7%13+2)*3}  \u2713`,r*(.15+c*.42),a*(.1+h*.058))}})})}function Ys(n=.16){let t=new j;t.add(gt(n,n,.04,"#F4F1EA",0,0,0,{rot:[Math.PI/2,0,0],seg:28,out:.005})),t.add(xe(new Ke(n,.015,8,28),"#2A2A30"));for(let s=0;s<12;s++){let o=s/12*6.283;t.add(st(.01,s%3?.016:.03,.01,"#2A2A30",Math.sin(o)*n*.82,Math.cos(o)*n*.82,.025))}let e=new j,i=new j;return e.add(st(.014,n*.55,.008,"#1E1E22",0,n*.25,0)),i.add(st(.009,n*.8,.008,"#1E1E22",0,n*.38,0)),e.position.z=.028,i.position.z=.032,t.add(e,i),t.add(re(.01,"#C0392B",0,0,.036,{seg:8})),t.hora=(s,o)=>{i.rotation.z=-o/60*6.283,e.rotation.z=-(s%12+o/60)/12*6.283},t.hora(7,0),t}function hh(n,t="#E2443A"){let e=new j,i=new ot(new Bt(.32,.38,4,6),new _e({color:t,side:Ge}));i.position.set(0,-.18,0),e.add(i),e.position.set(0,.3,-.13),n.torsoG.add(e);let s=i.geometry.attributes.position,o=s.array.slice();return e.vento=(r,a=1)=>{for(let l=0;l<s.count;l++){let c=o[l*3+1],h=o[l*3],u=(.19-c)/.38;s.array[l*3+2]=o[l*3+2]-u*u*.35*a+Math.sin(r*12+h*9+c*6)*.025*u*a}s.needsUpdate=!0,e.rotation.x=-.15*a},e}function tf(){let n=Vt(128,128,e=>{for(let i=0;i<10;i++){let s=i/10*6.283;e.fillStyle=`rgba(255,255,255,${.15+i/10*.85})`,e.beginPath(),e.arc(64+Math.cos(s)*44,64+Math.sin(s)*44,10,0,7),e.fill()}}),t=new Zn(new Nn({map:n,transparent:!0,depthWrite:!1}));return t.scale.setScalar(.22),t.renderOrder=10,t}var _n=(n,t=1)=>Ht(Yt({shL:[64,4],elL:76,shR:[40,12],elR:70,lean:4,headX:26},qe(n,t,.4)));var Zs={tint:"#FFF8EC",bloom:.2},YE={tint:"#C8D4FF",exposure:.8},i0=n=>(ms(n,.95,.43,.38),n.root.position.y=.43+.2,n),ef=[et(35.96,39.12,{bg:"#DDE6EE",fov:38,limpa:!1},n=>{let t=kt(n,{hora:"tarde"}),e=lt(n,zt,0,0,0);return i0(e),(i,s,o)=>(e.pose({shR:[100,10],elR:70,shL:[96,-8],elL:80,headX:-10}),Z(e,null,i,"tedio",{look:[0,-.6]}),Ee(t.tel,e,"R",[0,-.06,.05],[Math.PI/2+.3,0,0]),t.tel.tela("foto",i*.7%1),$(o,[[0,[-.4,2.2,.9]],[1,[-.15,1.9,.6]]],[.95,.55,-.4],s/3.16,0,0),Zs)}),et(39.12,42.88,{bg:"#F4F4F0",fov:36},n=>{let t=Wd(n),e=lt(n,Ai,-.05,-.42,0),i=lt(n,zs(4),1.6,1.05,Math.PI+.3),s=gt(.06,.06,.12,"#3E7CC8",0,0,0,{out:.004});return n.add(s),(o,r,a)=>{let l=o*1.25%1,c=t.prods[Math.floor(o*1.25)%5];return e.pose({shR:[55+Math.sin(l*6.28)*10,30-l*40],elR:60,shL:[30,10],elL:70,lean:6,headX:10,twist:Math.sin(l*6.28)*10}),Z(e,null,o,"neutro",{look:[.3,.4]}),Ee(s,e,"R",[0,-.06,.05]),t.laser.material.opacity=l>.45&&l<.6?.9:.3,t.telaM.paint(String(Math.floor(o*1.25)),(h,u,d)=>{h.fillStyle="#1E3A5A",h.fillRect(0,0,u,d),h.fillStyle="#9FE8B0",h.font="700 40px 'IBM Plex Mono'",h.fillText("R$ "+(12.5+Math.floor(o*1.25)*4.9).toFixed(2),20,d/2)}),i.pose(un(o,3)),Z(i,null,o,"neutro",{look:[-.3,.2]}),$(a,[[0,[1.3,1.45,2]],[1,[.9,1.35,1.6]]],[0,1,-.1],r/3.76),{}}}),et(42.88,46.44,{bg:"#E8D8B8",fov:40},n=>{let t=th(n),e=lt(n,Dn,0,0,0),i=hh(e,"#E2443A");return(s,o,r)=>{let a=(s-42.88)*1.6,l=.2+Math.cos(a)*.95,c=.35+Math.sin(a)*.7;return e.place(l,c,0,Math.atan2(-Math.sin(a),Math.cos(a))),e.pose(Yt(jn(s,3.2,1),{shR:[150,20],elR:10})),i.vento(s,1),Z(e,null,s,"feliz",{mouth:{open:.5,smile:.9}}),$(r,[[0,[.2,1.6,1.45]],[1,[.25,1.5,1.35]]],[l*.5+.1,.45,c*.5+.1],o/3.56),Zs}}),et(46.44,49.72,{bg:"#E8D8B8",fov:34},n=>{let t=th(n),e=lt(n,Dn,.55,.9,-2.5),i=hh(e,"#E2443A"),s=lt(n,zt,-.3,-1,0);Ve(s,-.4,-1.05,0,.45);let o=Wn();n.add(o);let r=Xi("coracao",.22);return n.add(r),(a,l,c)=>{e.pose(Yt(un(a,2),{shL:[40,10],elL:90,shR:[40,10],elR:90,headX:-8,bob:Math.abs(Math.sin(a*6))*.02})),i.vento(a,.2),Z(e,null,a,"apaixonado",{look:[-.5,-.2]}),s.pose(_n(a)),Z(s,null,a,"tedio",{look:[0,.6]}),Ee(o,s,"R",[0,-.07,.04],[-1.35,0,0]),o.tela("chat",.5);let h=bt((a-47.4)/.5);r.visible=a>47.4,e.headG.updateMatrixWorld(!0);let u=e.headG.localToWorld(new R(.15,.55,0));return r.position.copy(u),r.position.y+=h*.15,r.scale.setScalar(.22*(h<1?zn(h)*1.2:1+Math.sin(a*9)*.08)),$(c,[[0,[-1.5,1.25,.95]],[1,[-1.4,1.2,.85]]],[.05,.7,-.1],l/3.28),Zs}}),et(49.72,53.24,{bg:"#DDE6EE",fov:46},n=>{let t=kt(n,{hora:"tarde"}),e=lt(n,zt,0,0,0);tn(e);let i=Ys();return i.position.set(.3,2,1.47),i.rotation.y=Math.PI,n.add(i),(s,o,r)=>{let a=Oc(s,[[49.7,0],[50.3,0],[50.6,1],[51.4,1],[51.7,-1],[52.4,-1],[52.7,.4]]);return e.pose(Ht({shR:[50,6],elR:84,shL:[44,6],elL:80,lean:8,headX:6,headY:a*55})),Z(e,null,s,"neutro",{look:[a*.6,0]}),rn(t.tel,e,"L"),t.tel.tela("apagada"),ei(t,0),t.telaTV.paint("tv"+Math.floor(s*3),(l,c,h)=>{l.fillStyle=["#3E7CC8","#F2C230","#E2443A"][Math.floor(s*3)%3],l.fillRect(0,0,c,h),l.fillStyle="#FFF",l.beginPath(),l.arc(c*(.3+s%1*.4),h/2,30,0,7),l.fill()}),$(r,[[0,[-.9,1.55,1.35]],[1,[-.95,1.5,1.2]]],[-.75,1,.15],o/3.52),Zs}}),et(53.24,56.04,{bg:"#DDE6EE",fov:46},n=>{let t=kt(n,{hora:"tarde"}),e=lt(n,zt,0,0,0);return tn(e),(i,s,o)=>{let r=Math.sin((i-53.24)*4.2);return e.pose(Ht({shR:[50,6],elR:84,shL:[44,6],elL:80,lean:8,headX:6,headY:r*50})),Z(e,null,i,"preocupado",{look:[r*.8,0]}),ei(t,0),$(o,[[0,[-.8,1.3,1.25]],[1,[-.78,1.28,1.1]]],[-.68,1.18,.25],s/2.8),Zs}}),et(56.04,60.16,{bg:"#DDE6EE",fov:46,limpa:!1,perto:!0},n=>{let t=kt(n,{hora:"tarde"}),e=lt(n,zt,0,0,0);tn(e);let i=gt(.006,.006,.14,"#2E5EC8",0,0,0,{out:.002});return n.add(i),t.tel.position.set(-1.02,.79,-.12),t.tel.rotation.set(-Math.PI/2,0,-Math.PI/2),(s,o,r)=>{e.pose(Ht(Yt({shR:[58,4],elR:92,shL:[44,6],elL:84,lean:14,headX:26},s>59&&s<60?{shR:[58+Math.sin(s*20)*3,4]}:{}))),Z(e,null,s,"neutro",{look:[0,.7]}),Ee(i,e,"R",[0,-.05,.04],[.6,0,0]),ei(t,bt((s-59.1)/.9));let a=s>60;return t.tel.tela(a?"bloqueio":"apagada",0),$(r,[[0,[-1.15,1.3,1]],[1,[-1.2,1.12,.75]]],[-1.12,.79,.25],o/4.12,0,0),Zs}}),et(60.16,66.84,{bg:"#DDE6EE",fov:46,limpa:!1},n=>{let t=kt(n,{hora:"tarde"}),e=lt(n,zt,0,0,0);return tn(e),ei(t,1),(i,s,o)=>{let r=bt((i-62.2)/.6);if(e.pose(Ht(Yt({shR:[Rt(40,66,r),6],elR:Rt(80,108,r),shL:[44,6],elL:84,lean:10,headX:24},qe(i,1,.2)))),Z(e,null,i,"neutro",{look:[0,.6]}),i<62.2)t.tel.position.set(-1.02,.79,-.12),t.tel.rotation.set(-Math.PI/2,0,-Math.PI/2),t.tel.tela("bloqueio");else{rn(t.tel,e);let l=i<63.7?["bloqueio",0]:i<65.1?["chat",(i-63.7)/1.4]:i<66?["foto",(i-65.1)/.9]:["tapete",0];t.tel.tela(l[0],l[1])}let a=t.tel.position;if(i<62.6)$(o,[[0,[-.85,1.4,.95]],[1,[-.95,1.25,.7]]],[-1,.8,.1],(i-60.16)/2.44,0,0);else{e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let l=e.headG.localToWorld(new R(0,.3,.05));$(o,[l.x,l.y,l.z],[a.x,a.y,a.z],(i-62.6)/4.2,0,0)}return{...Zs,focus:.45,range:.25,blur:6}}}),et(66.84,71.64,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,zt,0,0,0);tn(e),ei(t,1);let i=Ys();i.position.set(-.5,2,-1.47),n.add(i);let s=new on("#9FD8FF",.6,1.2,2);return n.add(s),(o,r,a)=>{e.pose(_n(o)),Z(e,null,o,"tedio",{look:[0,.55],blink:0}),rn(t.tel,e),t.tel.tela("tapete",(o-66.84)/4.8),s.position.copy(t.tel.position),s.position.x+=.12;let l=bt((o-66.9)/1.4)*40;return i.hora(19,20+l),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8,o<68?$(a,[-.6,1.95,-.6],[-.5,2,-1.47],(o-66.84)/1.16,0,0):$(a,[[0,[-1.2,1.32,-.3]],[1,[-1.15,1.3,-.2]]],[-.62,1.2,.25],(o-68)/3.64,0,0),{tint:"#D8E2FF",exposure:.9}}}),et(71.64,73.72,{bg:"#C8C0B8",fov:46,limpa:!1,perto:!0},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,zt,0,0,0);return tn(e),ei(t,1),t.luzAbaj.intensity=.8,t.luzes.LG.intensity=1.5,(i,s,o)=>{e.pose(_n(i));let r=zn(bt((i-71.7)/.5));return $(o,[Rt(-.98,-1.05,r),Rt(1.3,1.02,r),Rt(.45,.32,r)],[-1.08,.79,.3],s/2.08,0,0),{tint:"#E8E2FF",vig:.55,exposure:.85}}}),et(73.72,82.44,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,zt,0,0,0);return tn(e),ei(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8,(i,s,o)=>{e.pose(_n(i)),Z(e,null,i,"tedio",{look:[0,.55]}),rn(t.tel,e),t.tel.tela("tapete",.5+i*.2%.5);let r=Rt(.3,1,s/8.72);return $(o,[-.62+Math.cos(r)*1.6,1.5,.25+Math.sin(r)*1.6],[-.62,1,.25],s/8.72,0,0),{tint:"#D0D8F0",exposure:.7,focus:.5,range:.2,blur:16}}}),et(82.44,85.48,{bg:"#B8D0DC",fov:46,limpa:!1},n=>{kn(n,{r:5,pos:[3,6,3],ki:.9,hemi:1.2,key:"#E8E8FF"}),n.add(new Mn("#C8D0F0",.4));let t=new _e({color:"#9AB4C4"}),e=new _e({color:"#8A5E3A"}),i=(l,c,h,u,d,f,g,E)=>{let m=new ot(new Bt(l,c),h);m.position.set(u,d,f),m.rotation.set(g,E,0),n.add(m)};i(6,6,e,0,0,0,-Math.PI/2,0);for(let[l,c,h,u]of[[4,.95,.475,0],[4,1.6,2.5,0],[1.6,.8,1.3,-1.15],[1.6,.8,1.3,.95]])i(l,c,t,-1.5,h,u,0,Math.PI/2);i(4,3.3,t,-3.6,1.6,0,0,Math.PI/2),i(4,3.3,t,1.5,1.6,0,0,-Math.PI/2),i(3,3.3,t,0,1.6,-2,0,0),i(3,3.3,t,-2.5,1.6,-2,0,0),i(3,3.3,t,-2.5,1.6,2,0,Math.PI);let s=new j;s.position.set(-1.49,1.3,-.1),s.rotation.y=Math.PI/2,n.add(s);for(let[l,c,h,u]of[[.74,.06,0,.42],[.74,.06,0,-.42],[.06,.9,-.35,0],[.06,.9,.35,0]])s.add(ht(l,c,.05,"#7A5236",h,u,0,{out:.004}));let o=lt(n,zt,-.95,-.1,-Math.PI/2),r=lt(n,zt,-2.05,-.1,Math.PI/2),a=Wn();return n.add(a),(l,c,h)=>(o.pose(un(l,1)),Z(o,null,l,l>83.6?"surpreso":"neutro",{look:[0,0]}),r.pose({shR:[62,6],elR:100,shL:[50,14],elL:92,headX:22}),Z(r,null,l,"tedio",{look:[0,.6]}),Ee(a,r,"R",[0,-.07,.04],[-1.35,0,0]),a.tela("tapete",l*.3%1),$(h,[[0,[.4,1.5,1.05]],[1,[.25,1.48,.95]]],[-1.6,1.22,-.1],c/3.04,0,0),YE)}),et(85.48,87.32,{bg:"#C8C0B8",fov:46},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,zt,0,0,0);tn(e),ei(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8;let i=lt(n,Xs,0,0,0),s=In();return n.add(s),s.scale.setScalar(.6),t.portaD.abre(1),(o,r,a)=>{e.pose(_n(o)),Z(e,null,o,"tedio",{look:[0,.55]}),rn(t.tel,e),t.tel.tela("tapete",.7);let l=bt((o-85.48)/1),c=Rt(1.5,-.25,zn(l)),h=Rt(.85,.45,l);return i.place(c,h,0,-Math.PI/2-.3),i.pose(l<1?Yt(qi(o,{f:2.2}),{shL:[70,-10],elL:80}):{shR:[70,20],elR:30,shL:[60,-12],elL:80,lean:6}),Re(i,"davi",o,"feliz",l<1?qi(o,{f:2.2}):{shR:[80+Math.sin(o*14)*6,20],elR:30,shL:[60,-12],elL:80}),Ee(s,i,"L",[0,-.05,.04],[-.3,0,0]),s.set(0),$(a,[[0,[.1,1.5,-1.15]],[1,[0,1.45,-1.05]]],[-.15,.95,.45],r/1.84),{tint:"#E8E2F8"}}}),et(87.32,88.52,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,zt,0,0,0);tn(e);let i=new on("#9FD8FF",0,1,2);return n.add(i),(s,o,r)=>(e.pose(_n(s)),Re(e,"gui",s,"tedio",_n(s),.2,{look:[0,.6]}),e.pose(_n(s)),rn(t.tel,e),t.tel.tela("tapete",.75),i.position.copy(t.tel.position),$(r,[[0,[-1.05,1.28,.9]],[1,[-1,1.27,.82]]],[-.66,1.15,.25],o/1.2,0,0),{tint:"#D8E2FF",exposure:.85})}),et(88.52,90.24,{bg:"#C8C0B8",fov:46},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,Xs,-.25,.45,-Math.PI/2-.3),i=In();return n.add(i),i.scale.setScalar(.6),(s,o,r)=>{Re(e,"davi",s,"feliz",{shL:[62,-14],elL:70,shR:[62,-14],elR:70,headX:12},.3),e.root.updateMatrixWorld(!0);let a=e.hands.L.localToWorld(new R(0,-.05,.03)),l=e.hands.R.localToWorld(new R(0,-.05,.03));i.position.copy(a).add(l).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.rotateX(-.4),i.set(bt((s-89.1)/1.6)*.3);let c=Gc(e.root,.7,.45,.9);return $(r,c,[i.position.x,i.position.y,i.position.z],o/1.72,0,0),{tint:"#E8E2F8"}}}),et(90.24,92.04,{bg:"#C8C0B8",fov:46},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,zt,0,0,0);tn(e),ei(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8;let i=lt(n,Xs,-.25,.45,-Math.PI/2-.3),s=In();return n.add(s),s.scale.setScalar(.6),(o,r,a)=>{let l=Math.max(0,Math.sin((o-90.4)*9))*(o>90.4&&o<91.4?1:0),c=Ht({shR:[62,6],elR:100,shL:[70+l*20,40+l*20],elL:20+l*40,lean:8,headX:22});Re(e,"gui",o,"bravo",c,0,{look:[0,.6]}),e.pose(c),rn(t.tel,e),t.tel.tela("tapete",.8),i.pose({shL:[62,-14],elL:70,shR:[62,-14],elR:70,headX:4,lean:-4}),Z(i,null,o,o>91?"triste":"surpreso",{look:[-.6,-.1]}),i.root.updateMatrixWorld(!0);let h=i.hands.L.localToWorld(new R(0,-.05,.03)),u=i.hands.R.localToWorld(new R(0,-.05,.03));return s.position.copy(h).add(u).multiplyScalar(.5),s.quaternion.copy(i.root.quaternion),s.rotateX(-.4),s.set(.3*(1-bt((o-91.2)/.6))),$(a,[[0,[.15,1.45,-1.15]],[1,[.05,1.4,-1.05]]],[-.4,.85,.4],r/1.8),{tint:"#E8E2F8"}}}),et(92.04,98.04,{bg:"#C8C0B8",fov:46},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,zt,0,0,0);tn(e),ei(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8;let i=lt(n,Xs,.3,.2,-Math.PI/2-.6),s=In();return n.add(s),s.scale.setScalar(.6),(o,r,a)=>{e.pose(_n(o)),Z(e,null,o,"tedio",{look:[0,.55]}),rn(t.tel,e),t.tel.tela("tapete",.9),i.pose(Yt({shL:[30,-40],elL:120,shR:[30,-40],elR:120,headX:8},qe(o,3,.5))),Z(i,null,o,"triste",{look:[-.7,0]}),i.root.updateMatrixWorld(!0);let l=i.hands.L.localToWorld(new R(0,-.04,.04)),c=i.hands.R.localToWorld(new R(0,-.04,.04));return s.position.copy(l).add(c).multiplyScalar(.5),s.quaternion.copy(i.root.quaternion),s.set(0),$(a,[[0,[.55,1.15,-1.2]],[1,[.45,1.1,-1.05]]],[.1,.75,.25],r/6,0,.6),{tint:"#E0DCF4"}}}),et(98.04,101.4,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,Xs,0,0,0),i=In();return n.add(i),i.scale.setScalar(.6),(s,o,r)=>{let a=bt((s-98.2)/2),l=Rt(.3,1.85,a),c=Rt(.2,.85,a);e.place(l,c,0,Math.atan2(1.55,.65)),e.pose(a<1?Yt(qi(s,{f:1.4,amp:.5}),{shL:[30,-40],elL:120,shR:[30,-40],elR:120}):un(s,2)),Z(e,null,s,"triste",{look:[0,.4]}),e.root.updateMatrixWorld(!0);let h=e.hands.L.localToWorld(new R(0,-.04,.04)),u=e.hands.R.localToWorld(new R(0,-.04,.04));return i.position.copy(h).add(u).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.set(0),t.portaD.abre(1-bt((s-100.5)/.8)),s<100.2?$(r,[[0,[-.1,.32,1.25]],[1,[.1,.3,1.25]]],[l,.12,c],o/2.2,0,0):$(r,[.4,1,1.25],[1.55,.9,.85],(s-100.2)/1.2,0,0),{tint:"#E0DCF4"}}}),et(101.4,103.48,{bg:"#2A2A34",fov:30,limpa:!1,perto:!0},n=>{kt(n,{hora:"noite"}).portaD.abre(0);let e=lt(n,Xs,2.3,.6,-2.2),i=In();n.add(i),i.scale.setScalar(1);let s=he([i]);return(o,r,a)=>{e.pose({shL:[30,-40],elL:120,shR:[30,-40],elR:120,headX:14}),Z(e,null,101.4,"triste",{look:[0,.5],vivo:!1}),e.root.updateMatrixWorld(!0);let l=e.hands.L.localToWorld(new R(0,-.04,.04)),c=e.hands.R.localToWorld(new R(0,-.04,.04));i.position.copy(l).add(c).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.set(0),le.mundo.value=.9,s(1,o),ue(n,"#2A2A34",.9);let h=Gc(e.root,.75-r*.05,.5);return $(a,h,[i.position.x,i.position.y,i.position.z],r/2.08,0,0),{vig:.5}}}),et(103.48,105.84,{bg:"#E8E0D0",fov:46},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,Ai,-3.9,-.95,Math.PI),i=gt(.01,.01,.25,"#9A6236",0,0,0);n.add(i);let s=ti(n,[-4.12,1.08,-1.2],{n:20,cor:"#F4F4F4",r:.25,g:.3,sobe:1.2,tam:.05});return(o,r,a)=>{let l=be(103.6,104.1,o);e.root.rotation.y=Rt(Math.PI,Math.PI*.35,l);let c=Yt({shR:[55-l*20,10],elR:70+Math.sin(o*7)*15*(1-l),shL:[20,10],elL:40});return Re(e,"mae",o,"bravo",c,.6),e.pose(c),Ee(i,e,"R",[0,-.08,.04]),s(o*.5%1),$(a,[[0,[-2.2,1.45,1.1]],[1,[-2.4,1.4,.95]]],[-3.8,1.15,-.8],r/2.36),{tint:"#FFF0DC"}}}),et(105.84,106.88,{bg:"#E8E0D0",fov:46},n=>{let t=kt(n,{hora:"noite"});t.portaK.abre(1);let e=lt(n,zt,-1.75,.85,-Math.PI/2);return(i,s,o)=>{let r={shR:[62,6],elR:100,shL:[20,8],elL:30,headX:14+Math.sin(i*9)*8};return Re(e,"gui",i,"tedio",r,0,{look:[0,.5]}),e.pose(r),rn(t.tel,e),t.tel.tela("tapete",.9),$(o,[[0,[-3.3,1.35,.6]],[1,[-3.15,1.33,.65]]],[-1.75,1.2,.85],s/1.04),{tint:"#FFF0DC"}}}),et(106.88,108.28,{bg:"#E8E0D0",fov:46},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,Ai,-3.6,-.6,Math.PI*.35),i=gt(.01,.01,.25,"#9A6236",0,0,0);return n.add(i),(s,o,r)=>{Re(e,"mae",s,"desconfiado",dn.bracoCruzado,0),e.pose(dn.bracoCruzado),Ee(i,e,"R",[0,-.06,.04]);let a=zn(bt((s-107.2)/.3));return $(r,[Rt(-2.4,-3,a),Rt(1.3,1.25,a),Rt(.6,-.05,a)],[-3.6,1.18,-.6],o/1.4,0,0),{tint:"#FFF0DC"}}}),et(108.28,110.56,{bg:"#E8E0D0",fov:46,limpa:!1},n=>{let t=kt(n,{hora:"noite"});t.portaK.abre(1);let e=lt(n,zt,-1.75,.85,-Math.PI/2),i=tf();return n.add(i),(s,o,r)=>{let a={shR:[62,6],elR:100,shL:[20,8],elL:30,headX:4};Re(e,"gui",s,"preocupado",a,0,{look:[Math.sin(s*7)*.8,-.3]}),e.pose(a),rn(t.tel,e),t.tel.tela("apagada"),e.headG.updateMatrixWorld(!0);let l=e.headG.localToWorld(new R(0,.75,0));return i.position.copy(l),i.material.rotation=-s*6,$(r,[[0,[-2.75,1.3,.95]],[1,[-2.6,1.28,.92]]],[-1.75,1.25,.85],o/2.28,0,0),{tint:"#FFF0DC"}}}),et(110.56,114.32,{bg:"#E8E0D0",fov:46},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,Ai,-3.55,-.55,Math.PI*.7),i=gt(.01,.01,.25,"#9A6236",0,0,0);return n.add(i),(s,o,r)=>{let a=s<112.3?dn.apontar:{shR:[40,20],elR:60,shL:[70,10],elL:20+Math.abs(Math.sin(s*6))*20,headX:4};Re(e,"mae",s,"preocupado",a,.3),e.pose(a),Ee(i,e,"R",[0,-.06,.04]);let l=.35+Math.abs(Math.sin(s*13))*.25*(Math.sin(s*3)>-.2?1:.1);return t.chama.forEach(c=>{c.scale.set(1,l,1),c.material.opacity=.4+l}),s<112.3?$(r,[[0,[-3,1.3,.35]],[1,[-3.4,1.15,-.5]]],[[0,[-3.6,1.1,-.6]],[1,[-4,.95,-1.2]]],(s-110.56)/1.74,0,0):$(r,[-2.55,1.35,-1],[-3.55,1.1,-.55],(s-112.3)/2,0,0),{tint:"#FFF0DC"}}}),et(114.32,116.8,{bg:"#E8E0D0",fov:46},n=>{let t=kt(n,{hora:"tarde"}),e=lt(n,Ai,-2.1,.2,-Math.PI/2+.3),i=lt(n,zt,0,0,0);return tn(i),t.portaK.abre(1),t.PK.frente.visible=t.PG.frente.visible=!1,(s,o,r)=>{let a=Math.min(2,Math.floor((s-114.32)/.83)),l=s-114.32-a*.83;return e.place([-2.1,-1.9,-2.3][a],[.2,-.3,.7][a],0,-Math.PI/2+.3),e.pose(Yt(dn.apontar,{shR:[80+Math.sin(l*12)*10,6]})),Z(e,null,s,"bravo",{mouth:{open:Math.abs(Math.sin(l*14))*.6}}),i.pose(_n(s)),Z(i,null,s,"tedio",{look:[0,.6]}),rn(t.tel,i),t.tel.tela("tapete",l),$(r,[[0,[-1,1.7,3.2]],[1,[-1,1.65,3]]],[-1.1,1,.2],o/2.48,0,0),{sat:.35,tint:"#F4DDB8",vig:.55}}}),et(116.8,122.16,{bg:"#0A0C18",fov:46},n=>{let t=kt(n,{hora:"noite"});t.luzes.sol.intensity=14,t.luzes.sol.target.position.set(-1.1,.78,.25);let e=lt(n,zt,0,0,0);return i0(e),e.root.rotation.z=-.5,t.tel.visible=!1,(i,s,o)=>(e.pose({shR:[20,10],elR:40,shL:[20,10],elL:40,headY:-30}),Z(e,null,i,"preocupado",{look:[-.8,0]}),ei(t,1,.4+Math.sin(i*2)*.2),i<119.8?$(o,[[0,[-.3,1.5,1]],[1,[-.6,1.25,.7]]],[-1.1,.8,.25],(i-116.8)/3,0,0):$(o,[[0,[.2,1.7,1.2]],[1,[.3,1.6,1]]],[.9,.7,-.3],(i-119.8)/2.36,0,0),{tint:"#B8C8FF",exposure:.75,vig:.5})}),et(122.16,127.04,{bg:"#0A0C18",fov:46,limpa:!1},n=>{let t=kt(n,{hora:"noite"});t.luzes.sol.intensity=10;let e=lt(n,zt,0,0,0);return i0(e),t.tel.visible=!1,(i,s,o)=>{e.pose({shR:[10,10],elR:30,shL:[10,10],elL:30});let r=i>122.3&&i<126.6?Math.abs(Math.sin(i*11))*.25:0;Z(e,null,i,"preocupado",{look:[0,-.2],mouth:{open:r}}),e.headG.updateMatrixWorld(!0);let a=e.headG.localToWorld(new R(0,.26,0));return $(o,[[0,[a.x+.05,a.y+1.25,a.z+.3]],[1,[a.x+.03,a.y+1.05,a.z+.22]]],[a.x,a.y,a.z],s/4.88,0,0),{tint:"#B8C8FF",exposure:.75,vig:.55}}}),et(127.04,128.96,{bg:"#020206",fov:46},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,zt,0,0,0);return i0(e),t.tel.visible=!1,(i,s,o)=>{let r=i<127.9;return t.luzAbaj.intensity=r?3:0,t.luzes.sol.intensity=r?8:1.5,e.pose({shR:[10,10],elR:30,shL:[10,10],elL:30}),Z(e,null,i,"sono",{blink:i>128.2?1:.5}),$(o,[[0,[-.2,1.8,1.3]],[1,[-.1,1.75,1.2]]],[.4,.6,-.2],s/1.92,0,0),{tint:"#B8C8FF",exposure:r?.8:.25,vig:.7}}})];function Xo(n,t=.25,e="#BFE8FF"){n._fant||(n._fant=[],n.root.traverse(i=>{if(!i.isMesh||i===n.sombra)return;let s=i.material,o=s.clone();o.transparent=!0,o.depthWrite=!1,o.color&&!i.userData.isOutline&&o.color.lerp(new wt(e),.35),i.material=o,n._fant.push({m:i,orig:s,nm:o})}));for(let{m:i,nm:s}of n._fant)s.opacity=i.userData.isOutline?t*.6:t,s.uniforms&&s.uniforms.op&&(s.uniforms.op.value=t*.6),i.visible=t>.01;return n.sombra.visible=t>.6,n}var $s={tint:"#FFF8EC",bloom:.22},ZE=n=>(ms(n,.95,.43,.38),n.root.position.y=.63,n),$E=(n,t=1)=>({shR:[96,-24],elR:142+Math.sin(n*16*t)*8,shL:[10,10],elL:20,headX:-2});function xr(n){let t=Hd(n),e=lt(n,zt,.3,-.3,Math.PI),i=Cd("#3EA6FF");return n.add(i),i.scale.setScalar(1.6),{B:t,g:e,e:i}}var Rr=(n,t,e=1)=>{n.g.pose($E(t,e)),Ee(n.e,n.g,"R",[0,-.04,.04],[Math.PI/2,0,0])};function JE(n){let t=Vt(256,256,i=>{if(i.strokeStyle="#8FF0FF",i.fillStyle="rgba(120,230,255,.25)",i.lineWidth=8,i.shadowColor="#8FF0FF",i.shadowBlur=16,i.lineJoin="round",n==="1789")i.font="900 96px Inter",i.textAlign="center",i.textBaseline="middle",i.fillStyle="#B8F8FF",i.fillText("1789",128,128);else if(n==="coroa")i.beginPath(),i.moveTo(40,180),i.lineTo(40,90),i.lineTo(85,130),i.lineTo(128,70),i.lineTo(171,130),i.lineTo(216,90),i.lineTo(216,180),i.closePath(),i.fill(),i.stroke();else if(n==="napoleao")i.beginPath(),i.arc(128,150,55,0,7),i.fill(),i.stroke(),i.beginPath(),i.moveTo(40,110),i.quadraticCurveTo(128,20,216,110),i.quadraticCurveTo(128,80,40,110),i.fill(),i.stroke(),i.beginPath(),i.arc(108,145,6,0,7),i.arc(148,145,6,0,7),i.stroke();else{i.beginPath(),i.rect(50,100,156,110),i.fill(),i.stroke();for(let s of[50,100,150])i.strokeRect(s,70,32,30);i.beginPath(),i.arc(128,210,26,Math.PI,0),i.stroke()}}),e=new Zn(new Nn({map:t,transparent:!0,depthWrite:!1,blending:bo}));return e.scale.setScalar(.32),e.renderOrder=12,e}var KE=n=>{n.strokeStyle="#F4F1EA",n.fillStyle="#F4F1EA",n.font="700 64px Caveat",n.fillText("Revolu\xE7\xE3o Francesa",60,80),n.font="600 46px Caveat",n.fillText("1789 \u2014 Queda da Bastilha",80,160),n.fillText("Liberdade, Igualdade, Fraternidade",80,225),n.fillText("Napole\xE3o Bonaparte",600,290)};function Es(n,t={}){let e=Ld(n,{giz:KE}),i=[];for(let a=0;a<4;a++)for(let l=0;l<5;l++){let c=-2.4+l*1.2,h=-1+a*1.3;if(a===1&&(l===2||l===3)||(a*5+l)%3===2)continue;let u=lt(n,vr(a*5+l),c,h,Math.PI);Ve(u,c,h,Math.PI,.46),u.seed=a*5+l,i.push(u)}let s=lt(n,zt,0,.3,Math.PI);Ve(s,0,.3,Math.PI,.46);let o=lt(n,qs,1.2,.3,Math.PI);Ve(o,1.2,.3,Math.PI,.46);let r=lt(n,Zd,-.4,-2.9,0);return{A:e,L:i,g:s,ti:o,pr:r}}var Js=(n,t,e=1)=>n.L.forEach((i,s)=>{let o=e>0&&s%2===0;i.pose(Ht(o?{lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120}:Yt({shR:[40,8],elR:80,shL:[40,8],elL:80,lean:6},qe(t,s,.5)))),Z(i,null,t,o?"sono":"tedio",{blink:o?1:void 0})});function s0(n){let t=Xd(n),e=lt(n,zt,1,-1.85,0);Ve(e,1,-1.85,0,.47);let i=lt(n,qs,1.45,-.55,Math.PI);Ve(i,1.45,-.55,Math.PI,.47);let s=nh();s.scale.setScalar(1.8),n.add(s);let o=ht(.06,.1,.04,"#F2994A",0,0,0,{out:.003});return n.add(o),{C:t,g:e,ti:i,cx:s,suco:o}}var o0=(n,t=1)=>Ht({shL:[70,4],elL:115,shR:[30,8],elR:70,lean:6,headX:6}),nf=[et(128.96,131.6,{bg:"#DDE6EE",fov:46,limpa:!1},n=>{let t=kt(n,{hora:"manha"}),e=lt(n,zt,0,0,0);return ZE(e),t.tel.visible=!1,(i,s,o)=>{let r=be(129.5,130.8,i);return e.root.rotation.x=Rt(-Math.PI/2,-.1,r),e.root.position.set(.95,Rt(.63,.45,r),Rt(.38,-.3,r)),e.pose(r>.5?Ht({shL:[20,30],shR:[20,30],elL:30,elR:30}):{shR:[10,10],elR:30,shL:[10,10],elL:30}),Z(e,null,i,(r>.3,"sono"),{blink:r<.2?1:.4}),$(o,[[0,[-.6,1.6,1.2]],[1,[-.5,1.4,1]]],[.9,.7,-.2],s/2.64),$s}}),et(131.6,134.2,{bg:"#DDE6EE",fov:46},n=>{let t=xr(n);return(e,i,s)=>(Rr(t,e),Z(t.g,null,e,"sono",{blink:.4}),$(s,[[0,[.92,1.4,-.7]],[1,[.9,1.35,-.62]]],[.3,1.12,-.3],i/2.6),$s)}),et(134.2,136.68,{bg:"#DDE6EE",fov:30,perto:!0,limpa:!1},n=>{let t=xr(n),e=he([t.e]);return(i,s,o)=>{Rr(t,i,.35),Z(t.g,null,i,"surpreso",{look:[0,.4]});let r=be(134.2,134.7,i);le.mundo.value=r,e(r,i),ue(n,"#DDE6EE",r);let a=t.e.getWorldPosition(new R);return $(o,[[0,[a.x+.55,a.y+.12,a.z+.3]],[1,[a.x+.3,a.y+.05,a.z+.2]]],[a.x,a.y,a.z],s/2.48,0,0),{focus:.35,range:.12,blur:14}}}),et(136.68,138.44,{bg:"#DDE6EE",fov:28,perto:!0,limpa:!1},n=>{let t=xr(n),e=he([t.e]),i=[0,0,0],s=ti(n,i,{n:30,cor:"#FFFFFF",r:.18,tam:.03});return(o,r,a)=>{Rr(t,o,.2),Z(t.g,null,o,"surpreso",{look:[0,.4]}),le.mundo.value=1,e(1,o),ue(n,"#DDE6EE",1),t.g.headG.updateMatrixWorld(!0);let l=t.g.headG.localToWorld(new R(0,.12,.3));return i[0]=l.x,i[1]=l.y,i[2]=l.z,s((o-136.68)/1.2%1),$(a,[[0,[l.x+.45,l.y+.05,l.z+.05]],[1,[l.x+.35,l.y+.03,l.z+.02]]],[l.x,l.y,l.z],r/1.76,0,0),{focus:.4,range:.15,blur:12}}}),et(138.44,142.2,{bg:"#DDE6EE",fov:34,limpa:!1},n=>{let t=xr(n),e=he([t.e,t.g.headG]),i=ti(n,[.3,1.18,-.62],{n:70,cor:"#7AF0B0",r:.55,tam:.03});return(s,o,r)=>(Rr(t,s,.3),Z(t.g,null,s,s>139.4?"surpreso":"neutro",{look:[0,0]}),le.mundo.value=1,e(1,s),ue(n,"#DDE6EE",1),i(bt((s-139.3)/1.8)),$(r,[[0,[.92,1.35,-.72]],[1,[.88,1.3,-.66]]],[.3,1.15,-.35],o/3.76,0,0),{focus:.7,range:.3,blur:10})}),et(142.2,147.04,{bg:"#DDE6EE",fov:40},n=>{let t=xr(n),e=he([t.e]);return(i,s,o)=>{let r=i>145.3;r?(t.g.pose({shR:[70,-10],elR:90,shL:[10,10],elL:20,headX:14}),Ee(t.e,t.g,"R",[0,-.04,.04],[Math.PI/2,0,0])):Rr(t,i),Z(t.g,null,i,r?"medo":"neutro",{look:r?[.3,.6]:[0,0]});let a=1-be(145.1,145.5,i);return le.mundo.value=a,e(a,i),ue(n,"#DDE6EE",a),$(o,[[0,[.92,1.45,-.68]],[1,[.88,1.4,-.6]]],[.3,1.12,-.3],s/4.84),$s}}),et(147.04,152.4,{bg:"#F4E8D0",fov:36,limpa:!1},n=>{let t=kt(n,{hora:"manha"});t.tel.visible=!1;let e=lt(n,zt,0,0,0);Ve(e,-2.42,.45,-Math.PI/2,.46);let i=Tr();i.scale.setScalar(1.6),i.position.set(-2.78,.79,.45),i.rotation.y=Math.PI/2,n.add(i);let s=zd();s.scale.setScalar(1.6),n.add(s);let o=he([i,s]);return(r,a,l)=>{let c=bt((r-148)/3.6);e.pose(Ht({shR:[55,8],elR:70,shL:[45,-10],elL:80,lean:16,headX:26})),Z(e,null,r,"determinado",{look:[0,.7]}),i.userData.passa(c),s.position.set(-2.78,.87,.45+Rt(.1,-.1,c)),s.rotation.set(0,Math.PI/2,-.15);let h=be(147.2,147.8,r);return le.mundo.value=h,o(h,r),ue(n,"#F4E8D0",h),$(l,[[0,[-3.4,1.15,.95]],[1,[-3.25,1,.8]]],[-2.78,.84,.45],a/5.36,0,0),{...$s,focus:.65,range:.25,blur:10}}}),et(152.4,154.2,{bg:"#F4E8D0",fov:26,perto:!0,limpa:!1},n=>{let t=kt(n,{hora:"manha"});t.tel.visible=!1;let e=Tr();e.scale.setScalar(1.6),e.position.set(-2.78,.79,.45),e.rotation.y=Math.PI/2,n.add(e),e.userData.passa(1);let i=he([e]),s=Xi("\u2726",.12);return n.add(s),s.material.color.set("#FFFFFF"),(o,r,a)=>{le.mundo.value=1,i(1,o),ue(n,"#F4E8D0",1);let l=bt((o-153.1)/.5);return s.visible=l>0&&l<1,s.position.set(-2.76,.9,.4),s.scale.setScalar(.12*Math.sin(l*Math.PI)+.001),s.material.rotation=l*2,$(a,[[0,[-2.55,1.05,.78]],[1,[-2.6,.98,.68]]],[-2.78,.86,.45],r/1.8,0,0),{bloom:.5,bloomT:.8,focus:.35,range:.12,blur:10}}}),et(154.2,156.76,{bg:"#F4E8D0",fov:40},n=>{let t=kt(n,{hora:"manha"});t.tel.visible=!1;let e=lt(n,Ai,-3.55,0,Math.PI/2+.3),i=lt(n,Dn,-3,-.17,0);Ve(i,-3,-.2,0,.5);let s=lt(n,zt,0,0,0);Ve(s,-2.42,.45,-Math.PI/2,.46);let o=Kc();o.scale.setScalar(1.4),n.add(o);let r=gt(.008,.008,.2,"#C9CED6",0,0,0);n.add(r);let a=In();a.scale.setScalar(.7),a.position.set(-3,.79,.15),a.rotation.x=-Math.PI/2,n.add(a);let l=Tr();l.scale.setScalar(1.6),l.position.set(-2.78,.79,.45),l.rotation.y=Math.PI/2,n.add(l),l.userData.passa(1);let c=re(.012,"#6A3A1A",0,0,0);return n.add(c),(h,u,d)=>{e.pose({shL:[50,-10],elL:80,shR:[70,10],elR:70,headX:10}),Z(e,null,h,"surpreso",{look:[.6,.4]}),Ee(o,e,"L",[0,-.06,.06]),Ee(r,e,"R",[0,-.06,.05],[.4,0,0]);let f=r.position,g=(h-154.2)*1.4%1;return c.position.set(f.x,f.y-.1-g*.25,f.z),i.pose(Ht(qe(h,2,.4))),Z(i,null,h,"feliz",{look:[.5,.3]}),s.pose(Ht({shR:[55,8],elR:70,lean:10,headX:20})),Z(s,null,h,"determinado",{look:[0,.7]}),a.set(0),$(d,[[0,[-2,1.4,1.35]],[1,[-2.15,1.35,1.2]]],[-3.2,1,0],u/2.56),$s}}),et(156.76,158.44,{bg:"#F4E8D0",fov:40},n=>{let t=kt(n,{hora:"manha"});t.tel.visible=!1;let e=lt(n,Ai,-3.55,0,Math.PI/2+.3),i=Kc();return i.scale.setScalar(1.4),n.add(i),(s,o,r)=>(Re(e,"mae",s,"desconfiado",{shL:[50,-10],elL:80},.5,{brow:1,look:[.6,.3]}),Ee(i,e,"L",[0,-.06,.06]),$(r,[[0,[-2.4,1.4,.9]],[1,[-2.6,1.35,.75]]],[-3.55,1.15,0],o/1.68),$s)}),et(158.44,160.56,{bg:"#F4E8D0",fov:40},n=>{let t=kt(n,{hora:"manha"});t.tel.visible=!1;let e=lt(n,zt,0,0,0);Ve(e,-2.42,.45,-Math.PI/2,.46);let i=Tr();return i.scale.setScalar(1.6),n.add(i),i.userData.passa(1),(s,o,r)=>{let a=s>159.8,l=Ht(a?{shR:[90,-10],elR:130,lean:4}:Yt(dn.ombros,{shR:[30,24],elR:70}));return Re(e,"gui",s,"neutro",l,.2),e.pose(l),a?Ee(i,e,"R",[0,-.05,.06]):(i.position.set(-2.78,.79,.45),i.rotation.set(0,Math.PI/2,0)),$(r,[[0,[-3.2,1.35,1.25]],[1,[-3.1,1.3,1.1]]],[-2.42,1.05,.45],o/2.12),$s}}),et(160.56,164.92,{bg:"#F2E6C8",fov:44},n=>{let t=Es(n),e=re(.015,"#BFE8FF",0,0,0);return n.add(e),(i,s,o)=>{Js(t,i,1),Re(t.pr,"n",i,"feliz",Yt({shR:[80+Math.sin(i*2)*30,30],elR:40},qe(i,3)),0,{mouth:{open:Math.abs(Math.sin(i*9))*.5}}),t.ti.pose(Ht({lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120})),Z(t.ti,null,i,"sono",{blink:1,mouth:{open:.3}}),t.ti.headG.updateMatrixWorld(!0);let r=t.ti.headG.localToWorld(new R(.05,.05,.28));return e.position.copy(r),e.position.y-=i*.5%1*.1,t.g.pose(Ht({shR:[40,8],elR:80,shL:[40,8],elL:80,lean:6,headX:4})),Z(t.g,null,i,"tedio"),$(o,[[0,[2.6,2.1,-2.8]],[1,[2.3,1.9,-2.5]]],[0,.9,.3],s/4.36),{}}}),et(164.92,169.21,{bg:"#F2E6C8",fov:40},n=>{let t=Es(n);return(e,i,s)=>(Js(t,e,1),t.pr.pose(Yt({shR:[80,30],elR:40},qe(e,3))),Z(t.pr,null,e,"neutro"),t.ti.pose(Ht(qe(e,3))),Z(t.ti,null,e,"tedio"),t.g.pose(Ht({lean:44,headX:34,shL:[70,20],elL:125,shR:[70,20],elR:125})),Z(t.g,null,e,"sono",{blink:1,mouth:{open:.25}}),$(s,[[0,[-1.1,1.4,-.9]],[1,[-.95,1.35,-.75]]],[0,.8,.3],i/4.29),{sat:.3,tint:"#F4DDB8",vig:.55})}),et(169.21,170.72,{bg:"#F2E6C8",fov:40},n=>{let t=Es(n),e=he([t.pr.root]);return(i,s,o)=>{Js(t,i,1),Re(t.pr,"n",i,"feliz",Yt({shR:[80+Math.sin(i*2)*30,30],elR:40},qe(i,3)),0,{mouth:{open:Math.abs(Math.sin(i*9))*.5}}),t.ti.pose(Ht({lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120})),Z(t.ti,null,i,"sono",{blink:1}),t.g.pose(Ht({shR:[30,8],elR:70,shL:[30,8],elL:70,lean:-2,headX:-4})),Z(t.g,null,i,"determinado",{look:[0,-.1]});let r=be(169.3,169.8,i);return le.mundo.value=r,e(r,i),ue(n,"#F2E6C8",r),$(o,[[0,[.9,1.3,1.6]],[1,[.7,1.25,1.4]]],[-.2,1.15,-1],s/1.51),{focus:4,range:1.5,blur:8}}}),et(170.72,180.24,{bg:"#F2E6C8",fov:40},n=>{let t=Es(n),e=["1789","coroa","napoleao","bastilha"].map(o=>{let r=JE(o);return n.add(r),r}),i=he([t.g.root]),s=[171.15,172.6,173.1,174.5];return(o,r,a)=>{Js(t,o,1),t.pr.pose(Yt({shR:[80+Math.sin(o*2)*30,30],elR:40},qe(o,3))),Z(t.pr,null,o,"feliz",{mouth:{open:Math.abs(Math.sin(o*9))*.5}}),t.ti.pose(Ht({lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120})),Z(t.ti,null,o,"sono",{blink:1}),t.g.pose(Ht({shR:[30,8],elR:70,shL:[30,8],elL:70,lean:-2,headX:-4})),Z(t.g,null,o,o>177.5?"surpreso":"determinado",{look:[Math.sin(o*2)*.5,-.2]}),le.mundo.value=.85,i(.6,o),ue(n,"#F2E6C8",.85),t.g.headG.updateMatrixWorld(!0);let l=t.g.headG.localToWorld(new R(0,.3,0));return e.forEach((c,h)=>{let u=bt((o-s[h])/.4),d=bt((o-177.3-h*.45)/.5),f=o*1.2+h*Math.PI/2,g=.55*(1-d);c.position.set(l.x+Math.cos(f)*g,l.y+.1+Math.sin(o*2+h)*.06-d*.05,l.z+Math.sin(f)*g*.7-d*.1),c.scale.setScalar(.32*zn(u)*(1-d*.8)+.001),c.visible=u>0&&d<1}),$(a,[[0,[1.2,1.45,-.9]],[1,[.9,1.35,-.7]]],[0,1.2,.3],r/9.52),{bloom:.45,bloomT:.7,focus:1.5,range:.6,blur:8}}}),et(180.24,182.96,{bg:"#F2E6C8",fov:44},n=>{let t=Es(n),e=[];for(let i=0;i<14;i++){let s=new ot(new Bt(.21,.29),new _e({color:"#FBF8EE",side:Ge}));n.add(s),e.push(s)}return(i,s,o)=>{let r=i>180.5,a=bt((i-180.6)/.5);t.pr.place(-1.4,-2.3,0,.3),Re(t.pr,"prof",i,"bravo",r?{shR:[60-Math.max(0,Math.sin((i-180.5)*12))*30,10],elR:20,lean:10}:{shR:[120,10],elR:30},.2),t.L.forEach((c,h)=>{c.pose(Ht(Yt({shL:[60,30],shR:[60,30],elL:30,elR:30},{bob:Math.sin(a*Math.PI)*.12}))),Z(c,null,i,a>0?"surpreso":"sono")}),t.ti.pose(Ht({bob:Math.sin(a*Math.PI)*.12,shL:[60,30],shR:[60,30]})),Z(t.ti,null,i,"medo"),t.g.pose(Ht({shR:[30,8],elR:70})),Z(t.g,null,i,"neutro"),e.forEach((c,h)=>{let u=bt((i-180.6)/2);c.visible=u>0,c.position.set(-2.4+h%5*1.2+Math.sin(h)*.3,.8+Math.sin(u*Math.PI)*(1+h%3*.3),-1.4+Math.floor(h/5)*1.3+u*.4),c.rotation.set(u*6+h,u*4,h)}),$(o,[[0,[2.7,1.9,-3]],[1,[2.5,1.8,-2.8]]],[-.3,1,-.2],s/2.72,0,1);let l=r&&i<180.9?Math.sin(i*80)*.02:0;return o.position.y+=l,{}}}),et(182.96,184.96,{bg:"#F2E6C8",fov:40},n=>{let t=Es(n),e=lt(n,qs,1.2,.3,Math.PI);return Xo(e,.35),(i,s,o)=>{Js(t,i,0),t.ti.pose(Ht({shL:[110,10],elL:140,shR:[110,10],elR:140,headX:6})),Re(t.ti,"tiago",i,"medo",t.ti._p,0),t.ti.pose(Ht({shL:[110,10],elL:140,shR:[110,10],elR:140,headX:6}));let r=bt((i-183.6)/1.2);return Xo(e,.45*(1-r*.5)),e.place(1.2,.3,.3+r*.6,Math.PI),e.pose({shL:[160,30],shR:[160,30],elL:10,elR:10,bob:0}),Z(e,null,i,"medo"),e.root.visible=i>183.5,t.g.pose(Ht({shR:[30,8],elR:70})),Z(t.g,null,i,"neutro"),$(o,[[0,[2.3,1.5,-1.2]],[1,[2.15,1.5,-1.05]]],[1.2,1.2,.3],s/2),{}}}),et(184.96,188.4,{bg:"#F2E6C8",fov:36,perto:!0},n=>{let t=Es(n),e=ih("3","#D8342C"),i=ih("10","#2E5EC8");return e.position.set(.98,.78,-.2),i.position.set(.22,.78,-.2),n.add(e,i),(s,o,r)=>(Js(t,s,0),t.ti.pose(Ht({lean:20,headX:20})),Z(t.ti,null,s,"choro"),t.g.pose(Ht({shR:[30,8],elR:70})),Z(t.g,null,s,"feliz"),e.visible=s>185,i.visible=s>186.8,$(r,[[0,[.75,1.6,.25]],[1,[.6,1.4,.1]]],[.6,.78,-.22],o/3.44,0,0),{})}),et(188.4,192.8,{bg:"#F2E6C8",fov:40},n=>{let t=Es(n),e=gt(.008,.008,.16,"#2E5EC8",0,0,0,{out:.002});n.add(e);let i=[0,0,0],s=ti(n,i,{n:20,cor:"#FFD86A",r:.12,tam:.015});return(o,r,a)=>{Js(t,o,0),t.ti.pose(Ht({shR:[50,8],elR:80,lean:14,headX:20})),Z(t.ti,null,o,"preocupado");let l=o<190.2;t.g.pose(Ht(l?{shR:[55+Math.sin(o*40)*4,6],elR:85,lean:16,headX:24}:{shR:[70,6],elR:100+Math.sin(o*3)*10,shL:[130,20],elL:140,headX:-8})),Z(t.g,null,o,l?"determinado":"sono",{mouth:l?void 0:{open:o>190.6&&o<191.6?.8:0,round:1}}),Ee(e,t.g,"R",[0,-.05,.04]),l||(e.rotation.z=o*12);let c=e.position;return i[0]=c.x,i[1]=c.y-.06,i[2]=c.z,s(l?o*3%1:0),$(a,[[0,[.9,1.45,-1.2]],[1,[.75,1.4,-1]]],[0,1,.3],r/4.4),{}}}),et(192.8,199.4,{bg:"#FFFFFF",fov:38},n=>{let t=s0(n),e=he([t.cx]);return(i,s,o)=>{let r=be(194,194.4,i);t.C.g.visible=r<.5,t.ti.root.visible=r<.5,n.background=new wt(r>.5?"#FFFFFF":"#F2E6C8");let a=bt((i-194.3)/.3);return t.g.pose(o0(i)),Z(t.g,null,i,r>.5?"feliz":"neutro",{blink:r>.5?1:void 0,mouth:a>0&&a<1?{open:.7}:void 0}),Ee(t.cx,t.g,"L",[0,-.04,.08]),t.cx.userData.morde(a),t.ti.pose(Ht(qe(i,3))),Z(t.ti,null,i,"neutro"),le.mundo.value=(r<.5,0),e(r,i),$(o,[[0,[3,1.5,-1]],[1,[2.2,1.3,-1.5]]],[1,1.05,-1.8],s/6.6),{exposure:1+r*.1,bloom:.3}}}),et(199.4,204.48,{bg:"#FFFFFF",fov:28,perto:!0,limpa:!1},n=>{let t=nh(1);t.scale.setScalar(4),t.position.set(0,.8,0),n.add(t),n.add(new Us("#FFFFFF","#F4E0C0",1.6));let e=new hs("#FFF4E0",1.8);e.position.set(2,4,3),n.add(e);let i=ti(n,[.05,1.1,.08],{n:26,cor:"#FFFFFF",r:.25,g:.4,sobe:1.6,tam:.06}),s=ti(n,[.08,1,.12],{n:30,cor:"#E8B060",r:.3,tam:.015});return(o,r,a)=>(t.rotation.y=.4+o*.1,i((o-199.4)/2.5%1),s(bt((o-199.6)/1.5)),t.userData.morde(o>203.4?1:.4),$(a,[[0,[.55,1.05,.6]],[.5,[.4,.98,.45]],[1,[.3,.95,.38]]],[.05,.95,.05],r/5.08,0,0),{bloom:.35})}),et(204.48,210.98,{bg:"#F2E6C8",fov:40},n=>{let t=s0(n);t.cx.userData.morde(1);let e=re(.02,"#9FD8FF",0,0,0);return n.add(e),(i,s,o)=>{t.g.pose(o0(i)),Z(t.g,null,i,"feliz",{lagrima:!0}),Ee(t.cx,t.g,"L",[0,-.04,.08]),t.g.headG.updateMatrixWorld(!0);let r=t.g.headG.localToWorld(new R(.12,.2,.28));return e.position.copy(r),e.position.y-=i*.4%1*.12,t.ti.pose(Ht({shR:[80,6],elR:100,shL:[30,8],elL:60,lean:-6})),Z(t.ti,null,i,"surpreso",{look:[0,.2]}),Ee(t.suco,t.ti,"R",[0,-.05,.05]),i<207.6?$(o,[[0,[2.6,1.35,-.6]],[1,[2.4,1.3,-.7]]],[1.45,1.05,-.55],(i-204.48)/3.12):$(o,[[0,[2.4,1.35,-2]],[1,[2.2,1.3,-1.9]]],[1,1.05,-1.85],(i-207.6)/3.38),{}}}),et(210.98,212.48,{bg:"#F2E6C8",fov:40},n=>{let t=s0(n);t.cx.userData.morde(1);let e=gt(.004,.004,.14,"#F2546E",0,0,0);return n.add(e),(i,s,o)=>{t.g.pose(o0(i)),Z(t.g,null,i,"feliz",{blink:1}),Ee(t.cx,t.g,"L",[0,-.04,.08]);let r=Math.max(0,Math.sin(i*10)),a=Ht({shR:[90-r*10,30],elR:30,shL:[30,8],elL:60,lean:10});return Re(t.ti,"tiago",i,"preocupado",a,0),t.ti.pose(a),Ee(e,t.ti,"R",[0,-.06,.05],[Math.PI/2,0,0]),$(o,[[0,[2.7,1.4,-1.3]],[1,[2.55,1.35,-1.25]]],[1.2,1.05,-1.2],s/1.5),{}}}),et(212.48,215.48,{bg:"#F2E6C8",fov:34},n=>{let t=s0(n);return t.cx.userData.morde(1),(e,i,s)=>{let o=o0(e);Re(t.g,"gui",e,"determinado",o,0,{look:[.3,0]}),t.g.pose(o),Ee(t.cx,t.g,"L",[0,-.04,.08]),t.g.headG.rotation.z+=Math.sin(e*14)*.03,t.ti.pose(Ht(qe(e,3))),Z(t.ti,null,e,"surpreso");let r=.5-i/3*.4;return $(s,[1+Math.sin(r)*1.2,1.3,-1.85+Math.cos(r)*1.2],[1,1.15,-1.85],i/3,.04),{vig:.5,sat:1.15}}}),et(215.48,224.89,{bg:"#C8C0B8",fov:46},n=>{let t=kt(n,{hora:"noite"});t.luzes.LG.intensity=1.8,t.luzAbaj.intensity=1.2;let e=lt(n,zt,0,0,0);tn(e);let i=gt(.006,.006,.14,"#2E5EC8",0,0,0,{out:.002});n.add(i),t.tel.position.set(-1,.79,-.18),t.tel.rotation.set(-Math.PI/2,0,-Math.PI/2);let s=he([e.root,t.caderno]),o=[217,218.3,219.1,220.4,221.2,222.5,223.3,224.1];return(r,a,l)=>(e.pose(Ht({shR:[58+Math.sin(r*9)*3,4],elR:92+Math.sin(r*13)*4,shL:[44,6],elL:84,lean:14,headX:26})),Z(e,null,r,"determinado",{look:[0,.7]}),Ee(i,e,"R",[0,-.05,.04],[.6,0,0]),ch(t,bt((r-216.3)/8)),t.tel.position.x=-1+Mr(r,o,.4),t.tel.tela(o.some(c=>r>c&&r<c+.4)?"bloqueio":"apagada"),le.mundo.value=.9,s(.4,r),ue(n,"#C8C0B8",.9),$(l,[[0,[-.9,1.55,1.35]],[1,[-.95,1.5,1.2]]],[-.75,1,.15],a/9.41),{tint:"#E8E2FF"})}),et(224.89,227.78,{bg:"#C8C0B8",fov:40},n=>{let t=kt(n,{hora:"noite"});t.luzes.LG.intensity=1.8;let e=Ys();e.position.set(-.5,2,-1.47),n.add(e);let i=lt(n,zt,0,0,0);return tn(i),(s,o,r)=>{let a=Pn(bt((s-225)/2.4))*120;return e.hora(19,a),i.pose(Ht({shR:[40,8],elR:80,lean:0,headX:-20,headY:30})),Z(i,null,s,"surpreso",{look:[.5,-.6]}),$(r,[[0,[-.4,1.85,-.7]],[1,[-.45,1.9,-.85]]],[-.5,2,-1.47],o/2.89,0,0),{tint:"#E8E2FF"}}}),et(227.78,233.48,{bg:"#C8C0B8",fov:44},n=>{let t=kt(n,{hora:"noite"});t.luzes.LG.intensity=1.8,t.luzAbaj.intensity=1.2;let e=lt(n,zt,0,0,0);return tn(e),ch(t,1),(i,s,o)=>{if(e.pose(_n(i)),Z(e,null,i,i>230.9?"desconfiado":"surpreso",{look:[0,.55]}),rn(t.tel,e),t.tel.tela("mensagens",bt((i-228.4)/1.8)),i<230.9){e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let r=e.headG.localToWorld(new R(0,.3,.05)),a=t.tel.position;$(o,[r.x,r.y,r.z],[a.x,a.y,a.z],(i-227.78)/3.1,0,0)}else e.headG.visible=!0,$(o,[[0,[-.95,1.35,1.05]],[1,[-.9,1.32,.95]]],[-.66,1.15,.25],(i-230.9)/2.58);return{tint:"#E8E2FF"}}}),et(233.48,234.68,{bg:"#1A1A22",fov:30,perto:!0,limpa:!1},n=>{let t=kt(n,{hora:"noite"}),e=lt(n,zt,0,0,0);tn(e);let i=he([t.tel]);return(s,o,r)=>{e.pose(_n(233.5)),Z(e,null,233.5,"desconfiado",{vivo:!1}),rn(t.tel,e),t.tel.tela("mensagens",1),le.mundo.value=.9,i(1,s),ue(n,"#1A1A22",.9);let a=t.tel.position;e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let l=e.headG.localToWorld(new R(0,.25,.1));return $(r,[l.x,l.y,l.z],[a.x,a.y,a.z],o/1.2,0,0),{vig:.55}}})];var qo={tint:"#FFF0DC",bloom:.22},QE=["#F2546E","#F2C230","#3EA6FF","#5AE07A","#B88AF2"],Yo={x:.75,z:.25,ry:-Math.PI/2};function Si(n,t,e,i=1,s=0){let o=Math.sin(e*9*i);n.pose(Ht({shR:[36+o*6,20],elR:60+o*8,shL:[60,-30],elL:40,lean:10,headX:16,headZ:-6})),n.root.updateMatrixWorld(!0);let r=n.root.localToWorld(new R(-.1,.24,.2));t.position.copy(r),t.quaternion.copy(n.root.quaternion),t.rotateZ(.4)}function ys(n,t={}){let e=kt(n,t);e.violao.visible=!1;let i=lt(n,zt,0,0,0);Ve(i,Yo.x,Yo.z,Yo.ry,.42);let s=Vo({});return n.add(s),e.tel.position.set(.35,.8,-.9),{K:e,g:i,v:s}}function r0(n,t){let e=[];for(let i=0;i<10;i++){let s=Xi("notas",.1);s.material.color.set(QE[i%5]),n.add(s),e.push(s)}return(i,s=1)=>{let o=t.getWorldPosition(new R);e.forEach((r,a)=>{let l=(i*.5+a/10)%1;r.position.set(o.x+Math.sin(a*2.3+i)*.25*l,o.y+.1+l*.8,o.z+Math.cos(a*1.7)*.25*l),r.material.opacity=s*Math.sin(l*Math.PI),r.visible=s>.01})}}var sf=[et(234.68,238.86,{bg:"#DDE6EE",fov:44},n=>{let t=kt(n,{hora:"tarde"});t.tel.visible=!1;let e=lt(n,zt,-.4,.3,-Math.PI/2-.4);return(i,s,o)=>{t.portaK.abre(1-be(234.9,235.8,i));let r=bt((i-236.3)/1.5);return e.place(Rt(-.2,-.95,r),Rt(.4,1.1,r),0,-2.3),e.pose(r>0&&r<1?qi(i,{f:1.8}):Yt(un(i,1),r>=1?{lean:30,shR:[70,10],elR:20}:{})),Z(e,null,i,"surpreso",{look:[-.3,.6]}),$(o,[[0,[.4,1.35,-.3]],[1,[.25,1.25,-.1]]],[-1.3,.55,1.2],s/4.18),qo}}),et(238.86,240.88,{bg:"#DDE6EE",fov:40},n=>{let t=kt(n,{hora:"tarde"});t.tel.visible=!1,t.violao.visible=!1;let e=lt(n,zt,-.85,.95,-2.4),i=Vo({teia:!0,semCorda:2});n.add(i);let s=[0,0,0],o=ti(n,s,{n:40,cor:"#D8CDB8",r:.5,tam:.07,sobe:.5});return(r,a,l)=>{e.pose({shR:[70,10],elR:40,shL:[80,-20],elL:60,headX:10}),Z(e,null,r,"neutro",{mouth:r>239.4&&r<240.2?{open:.4,round:1}:void 0,look:[0,.3]}),Ee(i,e,"L",[0,-.05,.05],!1),i.rotation.set(0,-2.4-Math.PI/2,1.2);let c=i.getWorldPosition(new R);return s[0]=c.x,s[1]=c.y+.1,s[2]=c.z,o(bt((r-239.4)/1.4)),$(l,[[0,[0,1.4,-.1]],[1,[-.15,1.35,.1]]],[-.95,1.1,1],a/2.02),qo}}),et(240.88,243.18,{bg:"#DDE6EE",fov:40},n=>{let t=ys(n,{hora:"tarde"}),e=gt(.04,.035,.1,"#CFE6F4",0,0,0,{out:.003});e.position.set(.35,.82,-1.15),n.add(e),t.K.tel.position.set(.35,.95,-1.12),t.K.tel.rotation.set(-.2,0,0),t.K.tel.tela("views",.02);let i=st(.002,.002,.9,"#E8E0C8",0,0,0);return n.add(i),(s,o,r)=>{t.g.pose(Ht({shR:[70,10],elR:70+Math.sin(s*6)*15,shL:[60,-30],elL:40,lean:16,headX:26})),Z(t.g,null,s,"determinado",{look:[.2,.6]}),Si(t.g,t.v,s,0),t.g.pose(Ht({shR:[70,10],elR:70+Math.sin(s*6)*15,shL:[60,-30],elL:40,lean:16,headX:26}));let a=t.v.getWorldPosition(new R);return i.position.set(a.x,a.y+.05,a.z),i.quaternion.copy(t.v.quaternion),i.rotateY(Math.PI/2),i.visible=s>241.2,s<241.75?$(r,[[0,[1.35,1.3,.9]],[1,[1.3,1.2,.8]]],[a.x,a.y,a.z],(s-240.88)/.87,0,0):$(r,[[0,[.9,1.15,-.5]],[1,[.75,1.1,-.6]]],[.35,.95,-1.12],(s-241.75)/1.43,0,0),qo}}),et(243.18,249.68,{bg:"#DDE6EE",fov:40},n=>{let t=ys(n,{hora:"tarde"}),e=he([t.v,t.g.root]),i=r0(n,t.v),s=t.K.luzes.sol;return(o,r,a)=>{let l=r/6.5;return Si(t.g,t.v,o,.5+l),Z(t.g,null,o,l>.55?"feliz":"determinado",{blink:l>.55?1:void 0,look:[0,.5]}),s.position.set(.4+Rt(-1.4,1.4,l),2.3,-2.1),s.color.set(l>.6?"#FFB070":"#FFF0D0"),le.mundo.value=be(243.3,243.8,o),e(1,o),ue(n,"#DDE6EE",le.mundo.value),i(o,be(246,246.5,o)),$(a,[[0,[1.4,1.2,1.2]],[.5,[1.3,1.25,-.5]],[1,[1.35,1.3,1]]],[.6,.85,.25],l),{tint:l>.6?"#FFE0C0":"#FFF4E4",bloom:.3}}}),et(249.68,251.88,{bg:"#DDE6EE",fov:42},n=>{let t=ys(n,{hora:"tarde"});t.K.portaK.abre(1);let e=lt(n,qs,-1.25,.85,Math.PI/2-.3),i=Wn();return n.add(i),(s,o,r)=>{Si(t.g,t.v,s,1.3),Z(t.g,null,s,"feliz",{blink:1});let a=Yt(dn.filmar,{bob:0});return Re(e,"tiago",s,"surpreso",a,0),e.pose(a),Ee(i,e,"R",[0,-.08,.05],[0,0,Math.PI/2]),i.tela("views",.01),$(r,[[0,[.3,1.45,-1]],[1,[.2,1.4,-.9]]],[-1.2,1.2,.85],o/2.2),qo}}),et(251.88,253.78,{bg:"#DDE6EE",fov:42},n=>{let t=ys(n,{hora:"tarde"}),e=r0(n,t.v);return(i,s,o)=>(Si(t.g,t.v,i,1.3),t.g.root.position.y=.42-.28*.95+Math.abs(Math.sin(i*5))*.01,Re(t.g,"gui",i,"feliz",t.g._ultima||{},0,{look:[-.6,0]}),Si(t.g,t.v,i,1.3),e(i,1),$(o,[[0,[-.5,1.3,.9]],[1,[-.4,1.25,.8]]],[.7,.9,.25],s/1.9),qo)}),et(253.78,262.78,{bg:"#DDE6EE",fov:40,limpa:!1},n=>{let t=ys(n,{hora:"tarde"}),e=lt(n,qs,-.8,.6,Math.PI/2+.3),i=Wn();return n.add(i),(s,o,r)=>{Si(t.g,t.v,s,1.3),Z(t.g,null,s,"feliz",{blink:1}),e.pose(Yt(un(s,2),{shR:[64,4],elR:76,shL:[40,12],elL:70,headX:24})),Z(e,null,s,"surpreso",{look:[0,.5]}),rn(i,e,"R"),i.tela("views",bt((s-254.3)/4.2)),e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let a=e.headG.localToWorld(new R(0,.26,.1)),l=i.position;return $(r,[a.x,a.y,a.z],[l.x,l.y,l.z],o/9,0,0),qo}}),et(262.78,266.88,{bg:"#B8C8DC",fov:40},n=>{let t=ys(n,{hora:"tarde"});return(e,i,s)=>(Si(t.g,t.v,262.8,1.3),Z(t.g,null,262.8,"feliz",{blink:1,vivo:!1}),$(s,[[0,[-.55,1.3,.75]],[1,[-.45,1.25,.65]]],[.7,.95,.25],i/4.1),{tint:"#B8D0FF",sat:.55,exposure:.9})}),et(266.88,269.18,{bg:"#E8E0D0",fov:44},n=>{let t=kt(n,{hora:"noite"});t.tel.visible=!1;let e=lt(n,rh,-2.4,.9,-Math.PI/2+.6),i=[];for(let s=0;s<3;s++){let o=gt(.11,.09,.02,"#F4F1EA",-3.3+s*.3,.79,.45,{out:.003});n.add(o),i.push(o)}return(s,o,r)=>{let a={shR:[110,30],elR:60,shL:[20,10],elL:30,headX:-6};return Re(e,"mae",s,"neutro",a,.3),e.pose(a),$(r,[[0,[-3.9,1.4,1.2]],[1,[-3.75,1.35,1.1]]],[-2.4,1.2,.9],o/2.3),{tint:"#FFF0DC"}}}),et(269.18,290.18,{bg:"#2A2A34",fov:40,limpa:!1},n=>{let t=kt(n,{hora:"noite",corte:!0});t.tel.visible=!1,t.luzes.LG.intensity=2,t.violao.visible=!1;let e=lt(n,zt,0,0,0);Ve(e,Yo.x,Yo.z,Yo.ry,.42);let i=Vo({});n.add(i);let s=lt(n,rh,-3,.9,0),o=he([e.root,i]),r=r0(n,i);return(a,l,c)=>{Si(e,i,a,1.2),Z(e,null,a,"feliz",{blink:1}),r(a,1);let h=bt((a-273.1)/1.6);s.place(Rt(-3,-2,h),Rt(.9,.85,h),0,-Math.PI/2+.1+(h<1&&h>0,0)),s.root.rotation.y=(h>0&&h<1,Math.PI/2);let u=a>275&&a<276.2,d=[269.6,270.3,271.1,271.8,272.4,275.6].some(E=>a>E&&a<E+.5),f=h>0&&h<1?qi(a,{f:1.8}):u?{shR:[90,0],elR:60+Math.abs(Math.sin(a*14))*40}:{shR:[120,30],elR:70,shL:[120,30],elL:70,headX:-6};s.pose(f),Z(s,null,a,a>276?"preocupado":"bravo",{mouth:d?{open:.7}:void 0});let g=be(278.6,279.2,a);return le.mundo.value=.25+g*.75,o(1,a),ue(n,"#2A2A34",0),a<278.6?$(c,[[0,[-1.6,2.1,6]],[1,[-1.6,2,5.6]]],[-1.6,1.1,0],(a-269.18)/9.4,0,0):a<284.2?$(c,[[0,[.6,1.6,3.4]],[1,[.7,1.4,2.6]]],[.6,.95,.25],(a-278.6)/5.6,0,0):$(c,[[0,[-1.6,1.6,3.6]],[1,[-1.6,1.5,3.3]]],[-1.6,1.1,.5],(a-284.2)/6,0,0),{tint:"#E8E2FF"}}}),et(290.18,310.68,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=ys(n,{hora:"noite"});t.K.luzes.LG.intensity=2;let e=lt(n,Dn,1.5,.85,-Math.PI/2);Xo(e,1);let i=In();n.add(i),i.scale.setScalar(.6),t.K.portaD.abre(1);let s=Ys();s.position.set(-.3,2,-1.47),n.add(s);let o=he([t.g.root,t.v]),r=r0(n,t.v);return(a,l,c)=>{Si(t.g,t.v,a,1.1),Z(t.g,null,a,"feliz",{blink:1}),r(a,1);let h=bt((a-291.7)/1.6);e.place(Rt(1.5,.25,h),Rt(.85,1.05,h),0,Rt(-Math.PI/2,2.58-Math.PI*2,h));let u=Math.sin(a*2.2);e.pose(h>0&&h<1?qi(a,{f:2}):Yt({shL:[30,-40],elL:120,shR:[30,-40],elR:120,headX:6,tilt:u*5},{bob:Math.abs(u)*.01})),e.root.position.x+=h>=1?u*.03:0,Z(e,null,a,"triste",{look:[-.6,.1]}),e.root.updateMatrixWorld(!0);let d=e.hands.L.localToWorld(new R(0,-.04,.04)),f=e.hands.R.localToWorld(new R(0,-.04,.04));return i.position.copy(d).add(f).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.set(0),s.hora(20,bt((a-294.8)/9)*10),le.mundo.value=1,o(.5,a),ue(n,"#C8C0B8",1),Xo(e,a>308.3?Rt(1,.15,be(308.3,309.2,a))*(a>310.2?1.5:1):1),$(c,[[0,[-1.2,2.05,-1.2]],[1,[-1.1,1.95,-1.1]]],[.7,.8,.5],l/20.5,0,0),{tint:"#E8E2FF"}}}),et(310.68,313.08,{bg:"#C8C0B8",fov:44},n=>{let t=ys(n,{hora:"noite"});return t.K.luzes.LG.intensity=2,(e,i,s)=>(Si(t.g,t.v,310.7,0),t.g.pose(Ht({shR:[30,20],elR:40,shL:[40,-20],elL:50,headX:0,headY:Math.sin((e-310.68)*2)*40})),Z(t.g,null,e,"neutro",{look:[Math.sin((e-310.68)*2),0]}),le.mundo.value=1-be(310.7,311.3,e),$(s,[[0,[-.6,1.5,1.2]],[1,[-.5,1.4,1.05]]],[.7,.9,.25],i/2.4),{tint:"#E8E2FF"})}),et(313.08,316.55,{bg:"#E8E0D0",fov:34},n=>{let t=kt(n,{hora:"noite"});t.tel.visible=!1;let e=lt(n,zt,-2.3,.45,-Math.PI/2),i=gt(.12,.09,.025,"#F4F1EA",-2.85,.79,.45,{out:.003}),s=gt(.12,.09,.025,"#F4F1EA",0,0,0,{out:.003});s.rotation.x=Math.PI,n.add(i,s);let o=re(.07,"#C89A50",-2.85,.8,.45,{seg:10});return o.scale.y=.4,n.add(o),(r,a,l)=>{let c=be(314.2,314.8,r);return e.pose({shR:[40+c*40,0],elR:60-c*30,lean:14,headX:26}),Z(e,null,r,"triste",{look:[0,.7]}),s.position.set(-2.85+c*.1,.82+c*.25,.45),s.rotation.z=c*.6,$(l,[[0,[-3.6,1.25,.25]],[1,[-3.5,1.18,.32]]],[-2.6,.95,.45],a/3.47),{tint:"#FFE8D0",sat:.8}}}),et(316.55,318.38,{bg:"#10121C",fov:34},n=>{let t=kt(n,{hora:"noite"});t.tel.visible=!1,t.portaD.abre(.35);let e=lt(n,Dn,0,0,0);ms(e,3.55,.38,.2),e.root.position.y=.58;let i=In();i.scale.setScalar(.6),i.position.set(3.45,.5,-1),i.rotation.set(-Math.PI/2,0,.4),n.add(i);let s=new Kn("#B8C8FF",12,6,.5,.6,1.2);return s.position.set(3.3,2.4,-2.2),s.target.position.set(3.5,.4,-.6),n.add(s,s.target),(o,r,a)=>(e.pose({shL:[10,10],shR:[10,10]}),Z(e,null,o,"sono",{blink:1}),i.set(0),$(a,[[0,[2.3,1.45,1.2]],[1,[2.45,1.35,1.05]]],[3.45,.5,-.6],r/1.83),{tint:"#C8D4FF",exposure:.85})})],ni=n=>{le.mundo.value=n,le.ouro.value=1};function uh(n,t,e){let i=e[0],s=e[e.length-1];for(let r=0;r<e.length-1;r++)if(t>=e[r][0]&&t<=e[r+1][0]){i=e[r],s=e[r+1];break}let o=s[0]>i[0]?bt((t-i[0])/(s[0]-i[0])):1;n.position.set(Rt(i[1],s[1],o),Math.sin(o*Math.PI)*(s[3]||0),Rt(i[2],s[2],o)),n.rotation.z=-n.position.x*4,n.rotation.x=n.position.z*4}function ii(n){let t=qd(n),e=lt(n,Dn,0,0,0),i=lt(n,zt,0,0,0),s=Qa(.35);n.add(s);let o=Wn();return o.position.set(-3.5,.02,2.3),o.rotation.set(-Math.PI/2,0,.6),n.add(o),{P:t,d:e,g:i,B:s,tel:o}}var of=[et(318.38,325.98,{bg:"#F4E8C8",fov:44,limpa:!1},n=>{let t=kt(n,{hora:"manha"});t.tel.visible=!1,t.portaD.abre(1);let e=lt(n,Dn,1.42,.85,-Math.PI/2),i=Qa(.35);n.add(i);let s=lt(n,zt,0,0,0);return ms(s,.95,.43,.38),s.root.position.y=.63,(o,r,a)=>(e.pose(Yt(un(o,2),{shR:[10,30],elR:80,shL:[0,9]})),Z(e,null,o,"feliz",{look:[-.6,0]}),Ee(i,e,"R",[-.05,-.05,.08],!1),s.pose({shR:[10,10],elR:30,shL:[10,10],elL:30}),Z(s,null,o,"sono",{blink:1}),o<323.9?$(a,[[0,[-.3,1.4,.6]],[1,[0,1.25,.7]]],[1.42,.75,.85],(o-318.38)/5.5):$(a,[[0,[.95,.3,.95]],[1,[1,.25,.9]]],[1.42,.06,.85],(o-323.9)/2.08,0,0),{tint:"#FFE8B8",bloom:.3})}),et(325.98,327.56,{bg:"#F4E8C8",fov:36},n=>{let t=kt(n,{hora:"manha"});t.tel.visible=!1,t.portaD.abre(1);let e=lt(n,Dn,1.5,.78,-Math.PI/2),i=Qa(.35);return n.add(i),(s,o,r)=>{let a=Yt(un(s,2),{shR:[10,30],elR:80,shL:[60,20],elL:90,tilt:-8,headZ:-10});return Re(e,"davi",s,"vergonha",a,0,{look:[-.6,0]}),e.pose(a),Ee(i,e,"R",[-.05,-.05,.08],!1),$(r,[[0,[.6,.95,.75]],[1,[.7,.92,.76]]],[1.5,.75,.8],o/1.58),{tint:"#FFE8B8",bloom:.3}}}),et(327.56,330.58,{bg:"#F4E8C8",fov:44},n=>{let t=kt(n,{hora:"manha"});t.tel.visible=!1;let e=lt(n,zt,0,0,0);return Ve(e,.95,-.2,Math.PI/2,.42),(i,s,o)=>{let r=be(327.6,328.4,i)*(1-be(329.3,329.9,i)),a=Ht({shL:[Rt(20,165,r),20],shR:[Rt(20,165,r),20],elL:20,elR:20,headX:-10*r});return Re(e,"gui",i,r>.5?"sono":"feliz",a,0),e.pose(a),t.coberta.position.x=-be(329.6,330.2,i)*.5,t.coberta.rotation.z=be(329.6,330.2,i)*.5,$(o,[[0,[1.4,1.35,.95]],[1,[1.38,1.3,.85]]],[.95,.9,-.2],s/3.02),{tint:"#FFE8B8",bloom:.3}}}),et(330.58,336.68,{bg:"#BFE3F7",fov:40},n=>{let t=ii(n),e=he([t.d.root,t.g.root,t.B]);return(i,s,o)=>{let r=Rt(-2.5,1.5,s/6.1);t.d.place(r,.2+Math.sin(i*2)*.3,0,Math.PI/2),t.d.pose(jn(i,2.6,.8)),Z(t.d,null,i,"feliz",{lingua:!0}),t.B.position.set(r+.3,0,.2+Math.sin(i*2)*.3),t.B.rotation.z=-i*6,t.g.place(r-.9,.9,0,Math.PI/2-.3),t.g.pose(jn(i,2.2,.6)),Z(t.g,null,i,"feliz");let a=be(334.3,335.3,i);return ni(a),e(a,i),ue(n,"#BFE3F7",a,1),$(o,[[0,[r-1.5,1.6,4.2]],[1,[r-1,1.4,3.6]]],[r,.6,.4],s/6.1,0,0),{bloom:.3+a*.3,bloomT:.8}}}),et(336.68,338.99,{bg:"#BFE3F7",fov:32,perto:!0},n=>{let t=ii(n),e=he([t.d.root,t.g.root,t.B]);return t.tel.tela("apagada"),(i,s,o)=>(t.d.place(-1.5+(i-336.68)*1.8,1.6,0,Math.PI/2),t.d.pose(jn(i,2.6,.8)),Z(t.d,null,i,"feliz"),t.g.place(-1+(i-336.68)*1.6,2.2,0,Math.PI/2),t.g.pose(jn(i,2.2,.6)),Z(t.g,null,i,"feliz"),t.B.position.set(-1.2+(i-336.68)*1.8,0,1.7),ni(1),e(1,i),ue(n,"#BFE3F7",1,1),$(o,[[0,[-3.9,.35,2.75]],[1,[-3.85,.3,2.65]]],[-3.5,.02,2.3],s/2.31,0,0),{bloom:.45,bloomT:.8,focus:.55,range:.3,blur:10})}),et(338.99,341.48,{bg:"#BFE3F7",fov:40},n=>{let t=ii(n),e=he([t.d.root,t.g.root,t.B]);return(i,s,o)=>(t.d.place(1,.2,0,Math.PI/2),t.d.pose(i<339.4+.3?{hipR:[-30+bt((i-339.4)/.25)*90,0],knR:20,shL:[40,30],shR:[40,30]}:Yt(un(i,2),{shL:[130,20],elL:120})),Z(t.d,null,i,i>339.4+.4?"vergonha":"determinado",{lingua:i<339.4+.3}),uh(t.B,i,[[339.4,1.3,.2,0],[339.4+1.2,2.5,3,.5],[339.4+2.5,2.8,3.8,.1]]),t.g.place(3,1,0,-Math.PI/2-.2),t.g.pose(i>339.4+.6?Yt(ks(i,1.3),{lean:25+Math.sin(i*9)*5,shL:[40,10],elL:100,shR:[40,10],elR:100}):un(i,1)),Z(t.g,null,i,i>339.4+.6?"rindo":"feliz",{mouth:i>339.4+.6?{open:.8,smile:1}:void 0}),ni(1),e(1,i),ue(n,"#BFE3F7",1,1),$(o,[[0,[2,1.4,-2.6]],[1,[2.1,1.35,-2.3]]],[2,.7,.5],s/2.49),{bloom:.45,bloomT:.8})}),et(341.48,344.87,{bg:"#BFE3F7",fov:40},n=>{let t=ii(n),e=he([t.d.root,t.g.root,t.B]),i=yd(n,4.4,0,.6,{w:3,d:2,h:3});return(s,o,r)=>{t.d.place(3.6,.1,0,Math.PI/2),t.d.pose(s<341.7+.3?{hipR:[-30+bt((s-341.7)/.25)*90,0],knR:20,shL:[40,30],shR:[40,30]}:Yt(Za(s,2.4),dn.comemora)),Z(t.d,null,s,s>341.7+.3?"rindo":"determinado",{pisca1:s<341.7+.3,mouth:s>341.7+.3?{open:.7,smile:1}:void 0}),uh(t.B,s,[[341.7,3.9,.1,0],[341.7+.5,5.9,.2,.15],[341.7+1.2,6.4,.3,0]]),t.g.place(4.6,1.5,0,-Math.PI*.8);let l=s>341.7+.5;return t.g.pose(l?Yt(dn.ajoelhado,dn.comemora):un(s,1)),Z(t.g,null,s,l?"rindo":"surpreso",{mouth:l?{open:.9,smile:1}:void 0}),i(s),n.children.forEach(()=>{}),ni(1),e(1,s),ue(n,"#BFE3F7",1,1),$(r,[[0,[2.6,1.3,3.6]],[1,[2.9,1.2,3.2]]],[4.4,.7,.6],o/3.39),{bloom:.45,bloomT:.8}}}),et(344.87,347.28,{bg:"#BFE3F7",fov:34},n=>{let t=ii(n),e=he([t.d.root,t.B]);return(i,s,o)=>{let r=344.87+(i-344.87)*.35,a=Rt(-1,0,s/2.41);return t.d.place(a,.3,0,Math.PI/2),t.d.pose(jn(r,2.6,.8)),Z(t.d,null,r,"feliz"),t.B.position.set(a+.3,0,.45),t.B.rotation.z=-r*6,t.g.root.visible=!1,ni(1),e(1,i),ue(n,"#BFE3F7",1,1),$(o,[[0,[a+.2,.8,2.2]],[1,[a+.5,.75,2]]],[a,.5,.3],s/2.41),{bloom:.45,bloomT:.8}}}),et(347.28,349.2,{bg:"#BFE3F7",fov:30},n=>{let t=ii(n),e=he([t.d.root]);return(i,s,o)=>{let r=347.28+(i-347.28)*.35;return t.d.place(0,.3,0,Math.PI/2-.3),t.d.pose(jn(r,2.6,.8)),Z(t.d,null,r,"feliz",{lingua:!0}),t.g.root.visible=!1,t.B.visible=!1,ni(1),e(1,i),ue(n,"#BFE3F7",1,1),$(o,[[0,[1.3,.75,1.1]],[1,[1.2,.72,1]]],[0,.62,.3],s/1.92),{bloom:.45,bloomT:.8}}}),et(349.2,350.88,{bg:"#BFE3F7",fov:30},n=>{let t=ii(n),e=he([t.d.root,t.B]);return(i,s,o)=>{let r=bt((i-349.6)/1);return t.d.place(0,.3,0,Math.PI/2),t.d.pose({hipR:[-30+r*70,0],knR:30-r*20,shL:[40,30],shR:[40,30],lean:8}),Z(t.d,null,i,"determinado",{pisca1:!0}),t.g.root.visible=!1,t.B.position.set(.3+r*.3,0,.38),ni(1),e(1,i),ue(n,"#BFE3F7",1,1),$(o,[[0,[1.25,.65,1]],[1,[1.15,.62,.9]]],[0,.58,.3],s/1.68),{bloom:.45,bloomT:.8}}}),et(350.88,352.87,{bg:"#BFE3F7",fov:30},n=>{let t=ii(n),e=he([t.d.root]);return(i,s,o)=>(t.d.place(.5,.3,0,Math.PI/2+.6),t.d.pose(Yt(jn(i*.5,2.6,.5),{shR:[70,10],elR:120})),Z(t.d,null,i,"feliz",{mouth:{open:Math.abs(Math.sin(i*13))*.35}}),t.g.root.visible=!1,t.B.visible=!1,ni(1),e(1,i),ue(n,"#BFE3F7",1,1),$(o,[[0,[1.55,.75,1.2]],[1,[1.45,.72,1.1]]],[.5,.6,.3],s/1.99),{bloom:.45,bloomT:.8})}),et(352.87,356.28,{bg:"#BFE3F7",fov:34},n=>{let t=ii(n),e=he([t.d.root,t.g.root]);return(i,s,o)=>{t.d.place(4.6,.2,0,Math.PI/2);let r=be(353.6,354.3,i);return t.d.root.rotation.y=Rt(Math.PI/2,-.6,r),t.d.pose(Yt(un(i,2),{shL:[130*(1-r),20],elL:40})),Z(t.d,null,i,r>.5?"feliz":"rindo",{look:[0,0],brow:r}),t.g.place(3.2,2,0,Math.PI*.8),t.g.pose(Yt(dn.comemora,Za(i,2))),Z(t.g,null,i,"rindo"),t.B.position.set(5.9,0,.2),ni(1),e(1,i),ue(n,"#BFE3F7",1,1),$(o,[[0,[5.6,.9,-.9]],[1,[5.5,.88,-.75]]],[4.4,.62,.4],s/3.41),{bloom:.45,bloomT:.8}}}),et(356.28,358.91,{bg:"#BFE3F7",fov:34},n=>{let t=ii(n),e=he([t.d.root,t.g.root]);return(i,s,o)=>{let r=Rt(4.6,3.5,s/2.63),a=Rt(.2,1.6,s/2.63);t.d.place(r,a,0,-.7);let l=Yt(jn(i,2.6,.7),dn.bracosAbertos);return Re(t.d,"davi",i,"rindo",l,0),t.d.pose(l),t.g.place(3.2,2.1,0,Math.PI*.85),t.g.pose(un(i,1)),Z(t.g,null,i,"feliz"),ni(1),e(1,i),ue(n,"#BFE3F7",1,1),$(o,[[0,[3.3,.85,2.6]],[1,[3.25,.8,2.45]]],[r,.6,a],s/2.63),{bloom:.45,bloomT:.8}}}),et(358.91,361.08,{bg:"#BFE3F7",fov:38},n=>{let t=ii(n),e=he([t.d.root,t.g.root,t.B]);return(i,s,o)=>{let r=be(359.9,360.5,i);t.g.place(3.2,2.1,0,Math.PI*.85),t.g.root.rotation.x=-r*1.45,t.g.root.position.y=r*.18;let a=r>.1?ks(i,1):dn.bracosAbertos;return Re(t.g,"gui",i,"rindo",a,0,{mouth:r>.5?{open:.8,smile:1}:void 0}),t.g.pose(a),t.d.place(3.95,1.55,0,-.7),t.d.root.rotation.x=-r*1.4,t.d.root.position.y=r*.12,t.d.pose(ks(i,1)),Z(t.d,null,i,"rindo",{mouth:{open:.8,smile:1}}),uh(t.B,i,[[359.9,3.6,1.5,0],[361.08,2.2,.2,0]]),ni(1),e(1,i),ue(n,"#BFE3F7",1,1),$(o,[[0,[1.6,1.8,3.8]],[1,[1.8,2.2,3.6]]],[3.3,.3,1.6],s/2.17),{bloom:.45,bloomT:.8}}}),et(361.08,367.28,{bg:"#BFE3F7",fov:36},n=>{let t=ii(n),e=he([t.d.root,t.g.root]);return(i,s,o)=>(t.g.place(3.2,2.1,0,Math.PI*.85),t.g.root.rotation.x=-1.45,t.g.root.position.y=.18,t.g.pose(ks(361.1,1)),Z(t.g,null,361.1,"rindo",{mouth:{open:.5,smile:1},vivo:!1}),t.d.place(3.95,1.55,0,-.7),t.d.root.rotation.x=-1.4,t.d.root.position.y=.12,t.d.pose(ks(361.1,1)),Z(t.d,null,361.1,"rindo",{mouth:{open:.6,smile:1},vivo:!1}),t.B.position.set(2.2,0,.2),ni(1),e(1,i),ue(n,"#BFE3F7",1,1),$(o,[[0,[3.3,3.8,3.4]],[1,[3.3,3.3,3]]],[3.3,.1,1.5],s/6.2,0,0),{bloom:.5,bloomT:.75,vig:.45})})];var dh=(n,t)=>et(n,n+1,{bg:"#DDE6EE",fov:50,limpa:!1,perto:!0},e=>{let i=kt(e,{hora:"tarde"}),s=lt(e,zt,0,0,0);tn(s);let o=re(.02,"#FF0000");return e.add(o),(r,a,l)=>{s.pose(_n(r)),Z(s,null,r,"neutro"),rn(i.tel,s),i.tel.tela("chat",.5);let c=[0,0,0];return o.position.set(...c),$(l,t,[-.8,1,.25],0,0,0),{}}}),rf=[dh(0,[-.7,1.3,1.4]),dh(1,[-.75,2.3,.26]),dh(2,[.6,1.4,.25])];var af=location.search.includes("teste")?rf:[...jd,...ef,...nf,...sf,...of];window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(t=>document.fonts.load(t))).catch(()=>{});let n=new Na(document.getElementById("film3d"));for(let t of af)n.add(t);window.addEventListener("hf-seek",t=>n.render(t.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
