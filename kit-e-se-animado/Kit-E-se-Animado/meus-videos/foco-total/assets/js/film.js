var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var ch="170";var vp=0,gd=1,yp=2;var Tu=1,hh=2,ns=3,Oi=0,dn=1,Ze=2,Ni=0,jo=1,ir=2,Ed=3,vd=4,Mp=5,oo=100,_p=101,bp=102,Tp=103,Ap=104,Sp=200,Rp=201,xp=202,wp=203,zl=204,Ol=205,Cp=206,Fp=207,Pp=208,Ip=209,Dp=210,Lp=211,Bp=212,Hp=213,Up=214,kl=0,Gl=1,Vl=2,sr=3,Wl=4,Xl=5,ql=6,Yl=7,Au=0,Np=1,zp=2,zi=0,Op=1,kp=2,Gp=3,Vp=4,Wp=5,Xp=6,qp=7;var Su=300,or=301,rr=302,Zl=303,$l=304,b0=306,Vn=1e3,ao=1001,Jl=1002,zn=1003,Yp=1004;var ya=1005;var Ui=1006,il=1007;var lo=1008;var as=1009,Ru=1010,xu=1011,$r=1012,dh=1013,ls=1014,ss=1015,qn=1016,uh=1017,fh=1018,ar=1020,wu=35902,Cu=1021,Fu=1022,jn=1023,Pu=1024,Iu=1025,tr=1026,lr=1027,Du=1028,ph=1029,Lu=1030,mh=1031;var gh=1033,Ya=33776,Za=33777,$a=33778,Ja=33779,Kl=35840,Ql=35841,jl=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37808,oc=37809,rc=37810,ac=37811,lc=37812,cc=37813,hc=37814,dc=37815,uc=37816,fc=37817,pc=37818,mc=37819,gc=37820,Ec=37821,Ka=36492,vc=36494,yc=36495,Bu=36283,Mc=36284,_c=36285,bc=36286;var Qa=2300,Tc=2301,sl=2302,yd=2400,Md=2401,_d=2402;var Zp=3200,$p=3201;var Hu=0,Jp=1,Ls="",Ve="srgb",Ns="srgb-linear",T0="linear",ze="srgb";var Lo=7680;var bd=519,Kp=512,Qp=513,jp=514,Uu=515,t1=516,e1=517,n1=518,i1=519,Ac=35044;var Td="300 es",os=2e3,ja=2001,Us=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ol=Math.PI/180,t0=180/Math.PI;function Hs(){let n=__sr()*4294967295|0,t=__sr()*4294967295|0,e=__sr()*4294967295|0,i=__sr()*4294967295|0;return(In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function Rn(n,t,e){return Math.max(t,Math.min(e,n))}function s1(n,t){return(n%t+t)%t}function rl(n,t,e){return(1-e)*n+e*t}function Hi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ht=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},he=class n{constructor(t,e,i,s,o,r,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c)}set(t,e,i,s,o,r,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],E=s[0],m=s[3],p=s[6],b=s[1],M=s[4],v=s[7],C=s[2],S=s[5],x=s[8];return o[0]=r*E+a*b+l*C,o[3]=r*m+a*M+l*S,o[6]=r*p+a*v+l*x,o[1]=c*E+h*b+d*C,o[4]=c*m+h*M+d*S,o[7]=c*p+h*v+d*x,o[2]=u*E+f*b+g*C,o[5]=u*m+f*M+g*S,o[8]=u*p+f*v+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-i*o*h+i*a*l+s*o*c-s*r*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,u=a*l-h*o,f=c*o-r*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return t[0]=d*E,t[1]=(s*c-h*i)*E,t[2]=(a*i-s*r)*E,t[3]=u*E,t[4]=(h*e-s*l)*E,t[5]=(s*o-a*e)*E,t[6]=f*E,t[7]=(i*l-c*e)*E,t[8]=(r*e-i*o)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){let l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(al.makeScale(t,e)),this}rotate(t){return this.premultiply(al.makeRotation(-t)),this}translate(t,e){return this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},al=new he;function Nu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function e0(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function o1(){let n=e0("canvas");return n.style.display="block",n}var Ad={};function Wr(n){n in Ad||(Ad[n]=!0,console.warn(n))}function r1(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function a1(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function l1(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ae={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ze&&(n.r=rs(n.r),n.g=rs(n.g),n.b=rs(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ze&&(n.r=er(n.r),n.g=er(n.g),n.b=er(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ls?T0:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Sd=[.64,.33,.3,.6,.15,.06],Rd=[.2126,.7152,.0722],xd=[.3127,.329],wd=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ae.define({[Ns]:{primaries:Sd,whitePoint:xd,transfer:T0,toXYZ:wd,fromXYZ:Cd,luminanceCoefficients:Rd,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:Sd,whitePoint:xd,transfer:ze,toXYZ:wd,fromXYZ:Cd,luminanceCoefficients:Rd,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});var Bo,Sc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bo===void 0&&(Bo=e0("canvas")),Bo.width=t.width,Bo.height=t.height;let i=Bo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Bo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=e0("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=rs(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(rs(e[i]/255)*255):e[i]=rs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},c1=0,n0=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Hs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(ll(s[r].image)):o.push(ll(s[r]))}else o=ll(s);i.url=o}return e||(t.images[this.uuid]=i),i}};function ll(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var h1=0,Wn=class n extends Us{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ao,s=ao,o=Ui,r=lo,a=jn,l=as,c=n.DEFAULT_ANISOTROPY,h=Ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=Hs(),this.name="",this.source=new n0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vn:t.x=t.x-Math.floor(t.x);break;case ao:t.x=t.x<0?0:1;break;case Jl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vn:t.y=t.y-Math.floor(t.y);break;case ao:t.y=t.y<0?0:1;break;case Jl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Su;Wn.DEFAULT_ANISOTROPY=1;var ke=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(f+1)/2,C=(p+1)/2,S=(h+u)/4,x=(d+E)/4,F=(g+m)/4;return M>v&&M>C?M<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(M),s=S/i,o=x/i):v>C?v<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),i=S/s,o=F/s):C<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(C),i=x/o,s=F/o),this.set(i,s,o,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-E)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rc=class extends Us{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let o=new Wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];let r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new n0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends Rc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},i0=class extends Wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=ao,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xc=class extends Wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=ao,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=o[r+0],f=o[r+1],g=o[r+2],E=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=E;return}if(d!==E||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*E,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let C=Math.sqrt(M),S=Math.atan2(C,p*b);m=Math.sin(m*S)/C,a=Math.sin(a*S)/C}let v=a*b;if(l=l*m+u*v,c=c*m+f*v,h=h*m+g*v,d=d*m+E*v,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,o,r){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=o[r],u=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(o/2),u=l(i/2),f=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Rn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-i*c,this._z=o*h+r*c+i*l-s*a,this._w=r*h-i*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,o=this._z,r=this._w,a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*__sr(),e=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*i),h=2*(a*e-o*s),d=2*(o*i-r*e);return this.x=e+l*c+r*d-a*h,this.y=i+l*h+a*c-o*d,this.z=s+l*d+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-i*l,this.z=i*a-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cl.copy(this).projectOnVector(t),this.sub(cl)}reflect(t){return this.sub(cl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let t=__sr()*Math.PI*2,e=__sr()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cl=new _,Fd=new li,co=class{constructor(t=new _(1/0,1/0,1/0),e=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,yi):yi.fromBufferAttribute(o,r),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ma.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ma.copy(i.boundingBox)),Ma.applyMatrix4(t.matrixWorld),this.union(Ma)}let s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),_a.subVectors(this.max,Hr),Ho.subVectors(t.a,Hr),Uo.subVectors(t.b,Hr),No.subVectors(t.c,Hr),ws.subVectors(Uo,Ho),Cs.subVectors(No,Uo),Qs.subVectors(Ho,No);let e=[0,-ws.z,ws.y,0,-Cs.z,Cs.y,0,-Qs.z,Qs.y,ws.z,0,-ws.x,Cs.z,0,-Cs.x,Qs.z,0,-Qs.x,-ws.y,ws.x,0,-Cs.y,Cs.x,0,-Qs.y,Qs.x,0];return!hl(e,Ho,Uo,No,_a)||(e=[1,0,0,0,1,0,0,0,1],!hl(e,Ho,Uo,No,_a))?!1:(ba.crossVectors(ws,Cs),e=[ba.x,ba.y,ba.z],hl(e,Ho,Uo,No,_a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ki=[new _,new _,new _,new _,new _,new _,new _,new _],yi=new _,Ma=new co,Ho=new _,Uo=new _,No=new _,ws=new _,Cs=new _,Qs=new _,Hr=new _,_a=new _,ba=new _,js=new _;function hl(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){js.fromArray(n,o);let a=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),l=t.dot(js),c=e.dot(js),h=i.dot(js);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var d1=new co,Ur=new _,dl=new _,cr=class{constructor(t=new _,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):d1.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);let e=Ur.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ur,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(dl)),this.expandByPoint(Ur.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qi=new _,ul=new _,Ta=new _,Fs=new _,fl=new _,Aa=new _,pl=new _,s0=class{constructor(t=new _,e=new _(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ul.copy(t).add(e).multiplyScalar(.5),Ta.copy(e).sub(t).normalize(),Fs.copy(this.origin).sub(ul);let o=t.distanceTo(e)*.5,r=-this.direction.dot(Ta),a=Fs.dot(this.direction),l=-Fs.dot(Ta),c=Fs.lengthSq(),h=Math.abs(1-r*r),d,u,f,g;if(h>0)if(d=r*l-a,u=r*a-l,g=o*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,f=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u=-o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-o,-l),o),f=u*(u+2*l)+c):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ul).addScaledVector(Ta,u),f}intersectSphere(t,e){Qi.subVectors(t.center,this.origin);let i=Qi.dot(this.direction),s=Qi.dot(Qi)-i*i,o=t.radius*t.radius;if(s>o)return null;let r=Math.sqrt(o-s),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,i,s,o){fl.subVectors(e,t),Aa.subVectors(i,t),pl.crossVectors(fl,Aa);let r=this.direction.dot(pl),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Fs.subVectors(this.origin,t);let l=a*this.direction.dot(Aa.crossVectors(Fs,Aa));if(l<0)return null;let c=a*this.direction.dot(fl.cross(Fs));if(c<0||l+c>r)return null;let h=-a*Fs.dot(pl);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class n{constructor(t,e,i,s,o,r,a,l,c,h,d,u,f,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c,h,d,u,f,g,E,m)}set(t,e,i,s,o,r,a,l,c,h,d,u,f,g,E,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/zo.setFromMatrixColumn(t,0).length(),o=1/zo.setFromMatrixColumn(t,1).length(),r=1/zo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){let u=r*h,f=r*d,g=a*h,E=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-E*c,e[9]=-a*l,e[2]=E-u*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,E=c*d;e[0]=u+E*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-g,e[6]=E+u*a,e[10]=r*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,E=c*d;e[0]=u-E*a,e[4]=-r*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*h,e[9]=E-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){let u=r*h,f=r*d,g=a*h,E=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+E,e[1]=l*d,e[5]=E*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){let u=r*l,f=r*c,g=a*l,E=a*c;e[0]=l*h,e[4]=E-u*d,e[8]=g*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-E*d}else if(t.order==="XZY"){let u=r*l,f=r*c,g=a*l,E=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+E,e[5]=r*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=E*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(u1,t,f1)}lookAt(t,e,i){let s=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ps.crossVectors(i,Kn),Ps.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ps.crossVectors(i,Kn)),Ps.normalize(),Sa.crossVectors(Kn,Ps),s[0]=Ps.x,s[4]=Sa.x,s[8]=Kn.x,s[1]=Ps.y,s[5]=Sa.y,s[9]=Kn.y,s[2]=Ps.z,s[6]=Sa.z,s[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],E=i[6],m=i[10],p=i[14],b=i[3],M=i[7],v=i[11],C=i[15],S=s[0],x=s[4],F=s[8],R=s[12],T=s[1],D=s[5],Z=s[9],G=s[13],L=s[2],k=s[6],O=s[10],Q=s[14],W=s[3],rt=s[7],gt=s[11],Ct=s[15];return o[0]=r*S+a*T+l*L+c*W,o[4]=r*x+a*D+l*k+c*rt,o[8]=r*F+a*Z+l*O+c*gt,o[12]=r*R+a*G+l*Q+c*Ct,o[1]=h*S+d*T+u*L+f*W,o[5]=h*x+d*D+u*k+f*rt,o[9]=h*F+d*Z+u*O+f*gt,o[13]=h*R+d*G+u*Q+f*Ct,o[2]=g*S+E*T+m*L+p*W,o[6]=g*x+E*D+m*k+p*rt,o[10]=g*F+E*Z+m*O+p*gt,o[14]=g*R+E*G+m*Q+p*Ct,o[3]=b*S+M*T+v*L+C*W,o[7]=b*x+M*D+v*k+C*rt,o[11]=b*F+M*Z+v*O+C*gt,o[15]=b*R+M*G+v*Q+C*Ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],E=t[7],m=t[11],p=t[15];return g*(+o*l*d-s*c*d-o*a*u+i*c*u+s*a*f-i*l*f)+E*(+e*l*f-e*c*u+o*r*u-s*r*f+s*c*h-o*l*h)+m*(+e*c*d-e*a*f-o*r*d+i*r*f+o*a*h-i*c*h)+p*(-s*a*h-e*l*d+e*a*u+s*r*d-i*r*u+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],E=t[13],m=t[14],p=t[15],b=d*m*c-E*u*c+E*l*f-a*m*f-d*l*p+a*u*p,M=g*u*c-h*m*c-g*l*f+r*m*f+h*l*p-r*u*p,v=h*E*c-g*d*c+g*a*f-r*E*f-h*a*p+r*d*p,C=g*d*l-h*E*l-g*a*u+r*E*u+h*a*m-r*d*m,S=e*b+i*M+s*v+o*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let x=1/S;return t[0]=b*x,t[1]=(E*u*o-d*m*o-E*s*f+i*m*f+d*s*p-i*u*p)*x,t[2]=(a*m*o-E*l*o+E*s*c-i*m*c-a*s*p+i*l*p)*x,t[3]=(d*l*o-a*u*o-d*s*c+i*u*c+a*s*f-i*l*f)*x,t[4]=M*x,t[5]=(h*m*o-g*u*o+g*s*f-e*m*f-h*s*p+e*u*p)*x,t[6]=(g*l*o-r*m*o-g*s*c+e*m*c+r*s*p-e*l*p)*x,t[7]=(r*u*o-h*l*o+h*s*c-e*u*c-r*s*f+e*l*f)*x,t[8]=v*x,t[9]=(g*d*o-h*E*o-g*i*f+e*E*f+h*i*p-e*d*p)*x,t[10]=(r*E*o-g*a*o+g*i*c-e*E*c-r*i*p+e*a*p)*x,t[11]=(h*a*o-r*d*o-h*i*c+e*d*c+r*i*f-e*a*f)*x,t[12]=C*x,t[13]=(h*E*s-g*d*s+g*i*u-e*E*u-h*i*m+e*d*m)*x,t[14]=(g*a*s-r*E*s-g*i*l+e*E*l+r*i*m-e*a*m)*x,t[15]=(r*d*s-h*a*s+h*i*l-e*d*l-r*i*u+e*a*u)*x,this}scale(t){let e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,d=a+a,u=o*c,f=o*h,g=o*d,E=r*h,m=r*d,p=a*d,b=l*c,M=l*h,v=l*d,C=i.x,S=i.y,x=i.z;return s[0]=(1-(E+p))*C,s[1]=(f+v)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(u+p))*S,s[6]=(m+b)*S,s[7]=0,s[8]=(g+M)*x,s[9]=(m-b)*x,s[10]=(1-(u+E))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,o=zo.set(s[0],s[1],s[2]).length(),r=zo.set(s[4],s[5],s[6]).length(),a=zo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Mi.copy(this);let c=1/o,h=1/r,d=1/a;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=h,Mi.elements[5]*=h,Mi.elements[6]*=h,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,e.setFromRotationMatrix(Mi),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=os){let l=this.elements,c=2*o/(e-t),h=2*o/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s),f,g;if(a===os)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===ja)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=os){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(r-o),u=(e+t)*c,f=(i+s)*h,g,E;if(a===os)g=(r+o)*d,E=-2*d;else if(a===ja)g=o*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},zo=new _,Mi=new Ie,u1=new _(0,0,0),f1=new _(1,1,1),Ps=new _,Sa=new _,Kn=new _,Pd=new Ie,Id=new li,cs=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Rn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Id.setFromEuler(this),this.setFromQuaternion(Id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cs.DEFAULT_ORDER="XYZ";var o0=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},p1=0,Dd=new _,Oo=new li,ji=new Ie,Ra=new _,Nr=new _,m1=new _,g1=new li,Ld=new _(1,0,0),Bd=new _(0,1,0),Hd=new _(0,0,1),Ud={type:"added"},E1={type:"removed"},ko={type:"childadded",child:null},ml={type:"childremoved",child:null},gn=class n extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new _,e=new cs,i=new li,s=new _(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new he}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oo.setFromAxisAngle(t,e),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(t,e){return Oo.setFromAxisAngle(t,e),this.quaternion.premultiply(Oo),this}rotateX(t){return this.rotateOnAxis(Ld,t)}rotateY(t){return this.rotateOnAxis(Bd,t)}rotateZ(t){return this.rotateOnAxis(Hd,t)}translateOnAxis(t,e){return Dd.copy(t).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ld,t)}translateY(t){return this.translateOnAxis(Bd,t)}translateZ(t){return this.translateOnAxis(Hd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ra.copy(t):Ra.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Nr,Ra,this.up):ji.lookAt(Ra,Nr,this.up),this.quaternion.setFromRotationMatrix(ji),s&&(ji.extractRotation(s.matrixWorld),Oo.setFromRotationMatrix(ji),this.quaternion.premultiply(Oo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ud),ko.child=t,this.dispatchEvent(ko),ko.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(E1),ml.child=t,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ud),ko.child=t,this.dispatchEvent(ko),ko.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,m1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,g1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){let a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};gn.DEFAULT_UP=new _(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _i=new _,ts=new _,gl=new _,es=new _,Go=new _,Vo=new _,Nd=new _,El=new _,vl=new _,yl=new _,Ml=new ke,_l=new ke,bl=new ke,Bs=class n{constructor(t=new _,e=new _,i=new _){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),_i.subVectors(t,e),s.cross(_i);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){_i.subVectors(s,e),ts.subVectors(i,e),gl.subVectors(t,e);let r=_i.dot(_i),a=_i.dot(ts),l=_i.dot(gl),c=ts.dot(ts),h=ts.dot(gl),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(r*h-a*l)*u;return o.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(t,e,i,s,o,r,a,l){return this.getBarycoord(t,e,i,s,es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,es.x),l.addScaledVector(r,es.y),l.addScaledVector(a,es.z),l)}static getInterpolatedAttribute(t,e,i,s,o,r){return Ml.setScalar(0),_l.setScalar(0),bl.setScalar(0),Ml.fromBufferAttribute(t,e),_l.fromBufferAttribute(t,i),bl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Ml,o.x),r.addScaledVector(_l,o.y),r.addScaledVector(bl,o.z),r}static isFrontFacing(t,e,i,s){return _i.subVectors(i,e),ts.subVectors(t,e),_i.cross(ts).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),_i.cross(ts).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,o=this.c,r,a;Go.subVectors(s,i),Vo.subVectors(o,i),El.subVectors(t,i);let l=Go.dot(El),c=Vo.dot(El);if(l<=0&&c<=0)return e.copy(i);vl.subVectors(t,s);let h=Go.dot(vl),d=Vo.dot(vl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(Go,r);yl.subVectors(t,o);let f=Go.dot(yl),g=Vo.dot(yl);if(g>=0&&f<=g)return e.copy(o);let E=f*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Vo,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Nd.subVectors(o,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Nd,a);let p=1/(m+E+u);return r=E*p,a=u*p,e.copy(i).addScaledVector(Go,r).addScaledVector(Vo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Tl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ae.workingColorSpace){if(t=s1(t,1),e=Rn(e,0,1),i=Rn(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=Tl(r,o,t+1/3),this.g=Tl(r,o,t),this.b=Tl(r,o,t-1/3)}return Ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let i=zu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Ae.fromWorkingColorSpace(Dn.copy(this),t),Math.round(Rn(Dn.r*255,0,255))*65536+Math.round(Rn(Dn.g*255,0,255))*256+Math.round(Rn(Dn.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Dn.copy(this),e);let i=Dn.r,s=Dn.g,o=Dn.b,r=Math.max(i,s,o),a=Math.min(i,s,o),l,c,h=(a+r)/2;if(a===r)l=0,c=0;else{let d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case i:l=(s-o)/d+(s<o?6:0);break;case s:l=(o-i)/d+2;break;case o:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Dn.copy(this),e),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=Ve){Ae.fromWorkingColorSpace(Dn.copy(this),t);let e=Dn.r,i=Dn.g,s=Dn.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Is),this.setHSL(Is.h+t,Is.s+e,Is.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Is),t.getHSL(xa);let i=rl(Is.h,xa.h,e),s=rl(Is.s,xa.s,e),o=rl(Is.l,xa.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new wt;wt.NAMES=zu;var v1=0,hs=class extends Us{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=Hs(),this.name="",this.blending=jo,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Ol,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jo&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ol&&(i.blendDst=this.blendDst),this.blendEquation!==oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){let r=[];for(let a in o){let l=o[a];delete l.metadata,r.push(l)}return r}if(e){let o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},re=class extends hs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var hn=new _,wa=new ht,Ln=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ac,this.updateRanges=[],this.gpuType=ss,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wa.fromBufferAttribute(this,e),wa.applyMatrix3(t),this.setXY(e,wa.x,wa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix3(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array),o=Oe(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ac&&(t.usage=this.usage),t}};var r0=class extends Ln{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var a0=class extends Ln{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var De=class extends Ln{constructor(t,e,i){super(new Float32Array(t),e,i)}},y1=0,ai=new Ie,Al=new gn,Wo=new _,Qn=new co,zr=new co,Mn=new _,En=class n extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nu(t)?a0:r0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new he().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,e,i){return ai.makeTranslation(t,e,i),this.applyMatrix4(ai),this}scale(t,e,i){return ai.makeScale(t,e,i),this.applyMatrix4(ai),this}lookAt(t){return Al.lookAt(t),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wo).negate(),this.translate(Wo.x,Wo.y,Wo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,o=t.length;s<o;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new De(i,3))}else{for(let i=0,s=e.count;i<s;i++){let o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let o=e[i];Qn.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(t){let i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(Qn.min,zr.min),Qn.expandByPoint(Mn),Mn.addVectors(Qn.max,zr.max),Qn.expandByPoint(Mn)):(Qn.expandByPoint(zr.min),Qn.expandByPoint(zr.max))}Qn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)Mn.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Mn));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Mn.fromBufferAttribute(a,c),l&&(Wo.fromBufferAttribute(t,c),Mn.add(Wo)),s=Math.max(s,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new _,l[F]=new _;let c=new _,h=new _,d=new _,u=new ht,f=new ht,g=new ht,E=new _,m=new _;function p(F,R,T){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,R),d.fromBufferAttribute(i,T),u.fromBufferAttribute(o,F),f.fromBufferAttribute(o,R),g.fromBufferAttribute(o,T),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[F].add(E),a[R].add(E),a[T].add(E),l[F].add(m),l[R].add(m),l[T].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let F=0,R=b.length;F<R;++F){let T=b[F],D=T.start,Z=T.count;for(let G=D,L=D+Z;G<L;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let M=new _,v=new _,C=new _,S=new _;function x(F){C.fromBufferAttribute(s,F),S.copy(C);let R=a[F];M.copy(R),M.sub(C.multiplyScalar(C.dot(R))).normalize(),v.crossVectors(S,R);let D=v.dot(l[F])<0?-1:1;r.setXYZW(F,M.x,M.y,M.z,D)}for(let F=0,R=b.length;F<R;++F){let T=b[F],D=T.start,Z=T.count;for(let G=D,L=D+Z;G<L;G+=3)x(t.getX(G+0)),x(t.getX(G+1)),x(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new _,o=new _,r=new _,a=new _,l=new _,c=new _,h=new _,d=new _;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),E=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,E),r.fromBufferAttribute(e,m),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Mn.fromBufferAttribute(t,e),Mn.normalize(),t.setXYZ(e,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Ln(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,l=r.length;a<l;a++){let c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],d=o[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zd=new Ie,to=new s0,Ca=new cr,Od=new _,Fa=new _,Pa=new _,Ia=new _,Sl=new _,Da=new _,kd=new _,La=new _,it=class extends gn{constructor(t=new En,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){Da.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],d=o[l];h!==0&&(Sl.fromBufferAttribute(d,t),r?Da.addScaledVector(Sl,h):Da.addScaledVector(Sl.sub(e),h))}e.add(Da)}return e}raycast(t,e){let i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(o),to.copy(t.ray).recast(t.near),!(Ca.containsPoint(to.origin)===!1&&(to.intersectSphere(Ca,Od)===null||to.origin.distanceToSquared(Od)>(t.far-t.near)**2))&&(zd.copy(o).invert(),to.copy(t.ray).applyMatrix4(zd),!(i.boundingBox!==null&&to.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,to)))}_computeIntersections(t,e,i){let s,o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,u=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=r[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,C=M;v<C;v+=3){let S=a.getX(v),x=a.getX(v+1),F=a.getX(v+2);s=Ba(this,p,t,i,c,h,d,S,x,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let b=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=Ba(this,r,t,i,c,h,d,b,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=r[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,C=M;v<C;v+=3){let S=v,x=v+1,F=v+2;s=Ba(this,p,t,i,c,h,d,S,x,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let b=m,M=m+1,v=m+2;s=Ba(this,r,t,i,c,h,d,b,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function M1(n,t,e,i,s,o,r,a){let l;if(t.side===dn?l=i.intersectTriangle(r,o,s,!0,a):l=i.intersectTriangle(s,o,r,t.side===Oi,a),l===null)return null;La.copy(a),La.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(La);return c<e.near||c>e.far?null:{distance:c,point:La.clone(),object:n}}function Ba(n,t,e,i,s,o,r,a,l,c){n.getVertexPosition(a,Fa),n.getVertexPosition(l,Pa),n.getVertexPosition(c,Ia);let h=M1(n,t,e,i,Fa,Pa,Ia,kd);if(h){let d=new _;Bs.getBarycoord(kd,Fa,Pa,Ia,d),s&&(h.uv=Bs.getInterpolatedAttribute(s,a,l,c,d,new ht)),o&&(h.uv1=Bs.getInterpolatedAttribute(o,a,l,c,d,new ht)),r&&(h.normal=Bs.getInterpolatedAttribute(r,a,l,c,d,new _),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new _,materialIndex:0};Bs.getNormal(Fa,Pa,Ia,u.normal),h.face=u,h.barycoord=d}return h}var we=class n extends En{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};let a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,r,o,0),g("z","y","x",1,-1,i,e,-t,r,o,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,o,4),g("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(d,2));function g(E,m,p,b,M,v,C,S,x,F,R){let T=v/x,D=C/F,Z=v/2,G=C/2,L=S/2,k=x+1,O=F+1,Q=0,W=0,rt=new _;for(let gt=0;gt<O;gt++){let Ct=gt*D-G;for(let Jt=0;Jt<k;Jt++){let be=Jt*T-Z;rt[E]=be*b,rt[m]=Ct*M,rt[p]=L,c.push(rt.x,rt.y,rt.z),rt[E]=0,rt[m]=0,rt[p]=S>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(Jt/x),d.push(1-gt/F),Q+=1}}for(let gt=0;gt<F;gt++)for(let Ct=0;Ct<x;Ct++){let Jt=u+Ct+k*gt,be=u+Ct+k*(gt+1),j=u+(Ct+1)+k*(gt+1),dt=u+(Ct+1)+k*gt;l.push(Jt,be,dt),l.push(be,j,dt),W+=6}a.addGroup(f,W,R),f+=W,u+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function hr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Nn(n){let t={};for(let e=0;e<n.length;e++){let i=hr(n[e]);for(let s in i)t[s]=i[s]}return t}function _1(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ou(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}var gr={clone:hr,merge:Nn},b1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends hs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b1,this.fragmentShader=T1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=_1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},l0=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=os}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ds=new _,Gd=new ht,Vd=new ht,xn=class extends l0{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=t0*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return t0*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z)}getViewSize(t,e){return this.getViewBounds(t,Gd,Vd),e.subVectors(Vd,Gd)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ol*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xo=-90,qo=1,wc=class extends gn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(Xo,qo,t,e);s.layers=this.layers,this.add(s);let o=new xn(Xo,qo,t,e);o.layers=this.layers,this.add(o);let r=new xn(Xo,qo,t,e);r.layers=this.layers,this.add(r);let a=new xn(Xo,qo,t,e);a.layers=this.layers,this.add(a);let l=new xn(Xo,qo,t,e);l.layers=this.layers,this.add(l);let c=new xn(Xo,qo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,l]=e;for(let c of e)this.remove(c);if(t===os)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},c0=class extends Wn{constructor(t,e,i,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,i,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cc=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new c0(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),o=new un({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Ni});o.uniforms.tEquirect.value=e;let r=new it(s,o),a=e.minFilter;return e.minFilter===lo&&(e.minFilter=Ui),new wc(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}},Rl=new _,A1=new _,S1=new he,is=class{constructor(t=new _(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Rl.subVectors(i,e).cross(A1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||S1.getNormalMatrix(t),s=this.coplanarPoint(Rl).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},eo=new cr,Ha=new _,Jr=class{constructor(t=new is,e=new is,i=new is,s=new is,o=new is,r=new is){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=os){let i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],E=s[10],m=s[11],p=s[12],b=s[13],M=s[14],v=s[15];if(i[0].setComponents(l-o,u-c,m-f,v-p).normalize(),i[1].setComponents(l+o,u+c,m+f,v+p).normalize(),i[2].setComponents(l+r,u+h,m+g,v+b).normalize(),i[3].setComponents(l-r,u-h,m-g,v-b).normalize(),i[4].setComponents(l-a,u-d,m-E,v-M).normalize(),e===os)i[5].setComponents(l+a,u+d,m+E,v+M).normalize();else if(e===ja)i[5].setComponents(a,d,E,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),eo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),eo.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(eo)}intersectsSprite(t){return eo.center.set(0,0,0),eo.radius=.7071067811865476,eo.applyMatrix4(t.matrixWorld),this.intersectsSphere(eo)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ha.x=s.normal.x>0?t.max.x:t.min.x,Ha.y=s.normal.y>0?t.max.y:t.min.y,Ha.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ku(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.__noRaf(s)}return{start:function(){t!==!0&&e!==null&&(i=n.__noRaf(s),t=!0)},stop:function(){n.__noCaf(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function R1(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],E=d[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let E=d[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var bt=class n extends En{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let o=t/2,r=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],E=[],m=[];for(let p=0;p<h;p++){let b=p*u-r;for(let M=0;M<c;M++){let v=M*d-o;g.push(v,-b,0),E.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let M=b+c*p,v=b+c*(p+1),C=b+1+c*(p+1),S=b+1+c*p;f.push(M,v,S),f.push(v,C,S)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(E,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},x1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w1=`#ifdef USE_ALPHAHASH
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
#endif`,C1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D1=`#ifdef USE_AOMAP
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
#endif`,L1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B1=`#ifdef USE_BATCHING
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
#endif`,H1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O1=`#ifdef USE_IRIDESCENCE
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
#endif`,k1=`#ifdef USE_BUMPMAP
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
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,J1=`#define PI 3.141592653589793
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
} // validated`,K1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Q1=`vec3 transformedNormal = objectNormal;
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
#endif`,j1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
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
#endif`,Sm=`struct PhysicalMaterial {
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
}`,Rm=`
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hm=`#if defined( USE_POINTS_UV )
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
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d2=`float getShadowMask() {
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
}`,u2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f2=`#ifdef USE_SKINNING
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
#endif`,p2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m2=`#ifdef USE_SKINNING
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
#endif`,g2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M2=`#ifdef USE_TRANSMISSION
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
#endif`,_2=`#ifdef USE_TRANSMISSION
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
#endif`,b2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x2=`uniform sampler2D t2D;
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
}`,w2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I2=`#include <common>
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
}`,D2=`#if DEPTH_PACKING == 3200
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
}`,L2=`#define DISTANCE
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
}`,B2=`#define DISTANCE
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
}`,H2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N2=`uniform float scale;
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
}`,z2=`uniform vec3 diffuse;
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
}`,O2=`#include <common>
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
}`,k2=`uniform vec3 diffuse;
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
}`,G2=`#define LAMBERT
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
}`,V2=`#define LAMBERT
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
}`,W2=`#define MATCAP
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
}`,X2=`#define MATCAP
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
}`,q2=`#define NORMAL
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
}`,Y2=`#define NORMAL
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
}`,Z2=`#define PHONG
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
}`,$2=`#define PHONG
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
}`,J2=`#define STANDARD
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
}`,K2=`#define STANDARD
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
}`,Q2=`#define TOON
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
}`,j2=`#define TOON
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
}`,tg=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 color;
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
}`,sg=`uniform float rotation;
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
}`,og=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:x1,alphahash_pars_fragment:w1,alphamap_fragment:C1,alphamap_pars_fragment:F1,alphatest_fragment:P1,alphatest_pars_fragment:I1,aomap_fragment:D1,aomap_pars_fragment:L1,batching_pars_vertex:B1,batching_vertex:H1,begin_vertex:U1,beginnormal_vertex:N1,bsdfs:z1,iridescence_fragment:O1,bumpmap_pars_fragment:k1,clipping_planes_fragment:G1,clipping_planes_pars_fragment:V1,clipping_planes_pars_vertex:W1,clipping_planes_vertex:X1,color_fragment:q1,color_pars_fragment:Y1,color_pars_vertex:Z1,color_vertex:$1,common:J1,cube_uv_reflection_fragment:K1,defaultnormal_vertex:Q1,displacementmap_pars_vertex:j1,displacementmap_vertex:tm,emissivemap_fragment:em,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:sm,envmap_fragment:om,envmap_common_pars_fragment:rm,envmap_pars_fragment:am,envmap_pars_vertex:lm,envmap_physical_pars_fragment:ym,envmap_vertex:cm,fog_vertex:hm,fog_pars_vertex:dm,fog_fragment:um,fog_pars_fragment:fm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:Em,lights_pars_begin:vm,lights_toon_fragment:Mm,lights_toon_pars_fragment:_m,lights_phong_fragment:bm,lights_phong_pars_fragment:Tm,lights_physical_fragment:Am,lights_physical_pars_fragment:Sm,lights_fragment_begin:Rm,lights_fragment_maps:xm,lights_fragment_end:wm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Im,map_fragment:Dm,map_pars_fragment:Lm,map_particle_fragment:Bm,map_particle_pars_fragment:Hm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Nm,morphinstance_vertex:zm,morphcolor_vertex:Om,morphnormal_vertex:km,morphtarget_pars_vertex:Gm,morphtarget_vertex:Vm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:Zm,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:jm,opaque_fragment:t2,packing:e2,premultiplied_alpha_fragment:n2,project_vertex:i2,dithering_fragment:s2,dithering_pars_fragment:o2,roughnessmap_fragment:r2,roughnessmap_pars_fragment:a2,shadowmap_pars_fragment:l2,shadowmap_pars_vertex:c2,shadowmap_vertex:h2,shadowmask_pars_fragment:d2,skinbase_vertex:u2,skinning_pars_vertex:f2,skinning_vertex:p2,skinnormal_vertex:m2,specularmap_fragment:g2,specularmap_pars_fragment:E2,tonemapping_fragment:v2,tonemapping_pars_fragment:y2,transmission_fragment:M2,transmission_pars_fragment:_2,uv_pars_fragment:b2,uv_pars_vertex:T2,uv_vertex:A2,worldpos_vertex:S2,background_vert:R2,background_frag:x2,backgroundCube_vert:w2,backgroundCube_frag:C2,cube_vert:F2,cube_frag:P2,depth_vert:I2,depth_frag:D2,distanceRGBA_vert:L2,distanceRGBA_frag:B2,equirect_vert:H2,equirect_frag:U2,linedashed_vert:N2,linedashed_frag:z2,meshbasic_vert:O2,meshbasic_frag:k2,meshlambert_vert:G2,meshlambert_frag:V2,meshmatcap_vert:W2,meshmatcap_frag:X2,meshnormal_vert:q2,meshnormal_frag:Y2,meshphong_vert:Z2,meshphong_frag:$2,meshphysical_vert:J2,meshphysical_frag:K2,meshtoon_vert:Q2,meshtoon_frag:j2,points_vert:tg,points_frag:eg,shadow_vert:ng,shadow_frag:ig,sprite_vert:sg,sprite_frag:og},yt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Bi={basic:{uniforms:Nn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Nn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new wt(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Nn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Nn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Nn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new wt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Nn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Nn([yt.points,yt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Nn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Nn([yt.common,yt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Nn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Nn([yt.sprite,yt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Nn([yt.common,yt.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Nn([yt.lights,yt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Bi.physical={uniforms:Nn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var Ua={r:0,b:0,g:0},no=new cs,rg=new Ie;function ag(n,t,e,i,s,o,r){let a=new wt(0),l=o===!0?0:1,c,h,d=null,u=0,f=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function E(b){let M=!1,v=g(b);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){let v=g(M);v&&(v.isCubeTexture||v.mapping===b0)?(h===void 0&&(h=new it(new we(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:hr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),no.copy(M.backgroundRotation),no.x*=-1,no.y*=-1,no.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(no.y*=-1,no.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(no)),h.material.toneMapped=Ae.getTransfer(v.colorSpace)!==ze,(d!==v||u!==v.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new it(new bt(2,2),new un({name:"BackgroundMaterial",uniforms:hr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ae.getTransfer(v.colorSpace)!==ze,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(Ua,Ou(n)),i.buffers.color.setClear(Ua.r,Ua.g,Ua.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:E,addToRenderList:m}}function lg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),o=s,r=!1;function a(T,D,Z,G,L){let k=!1,O=d(G,Z,D);o!==O&&(o=O,c(o.object)),k=f(T,G,Z,L),k&&g(T,G,Z,L),L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(k||r)&&(r=!1,v(T,D,Z,G),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function h(T){return n.deleteVertexArray(T)}function d(T,D,Z){let G=Z.wireframe===!0,L=i[T.id];L===void 0&&(L={},i[T.id]=L);let k=L[D.id];k===void 0&&(k={},L[D.id]=k);let O=k[G];return O===void 0&&(O=u(l()),k[G]=O),O}function u(T){let D=[],Z=[],G=[];for(let L=0;L<e;L++)D[L]=0,Z[L]=0,G[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Z,attributeDivisors:G,object:T,attributes:{},index:null}}function f(T,D,Z,G){let L=o.attributes,k=D.attributes,O=0,Q=Z.getAttributes();for(let W in Q)if(Q[W].location>=0){let gt=L[W],Ct=k[W];if(Ct===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(Ct=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(Ct=T.instanceColor)),gt===void 0||gt.attribute!==Ct||Ct&&gt.data!==Ct.data)return!0;O++}return o.attributesNum!==O||o.index!==G}function g(T,D,Z,G){let L={},k=D.attributes,O=0,Q=Z.getAttributes();for(let W in Q)if(Q[W].location>=0){let gt=k[W];gt===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(gt=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(gt=T.instanceColor));let Ct={};Ct.attribute=gt,gt&&gt.data&&(Ct.data=gt.data),L[W]=Ct,O++}o.attributes=L,o.attributesNum=O,o.index=G}function E(){let T=o.newAttributes;for(let D=0,Z=T.length;D<Z;D++)T[D]=0}function m(T){p(T,0)}function p(T,D){let Z=o.newAttributes,G=o.enabledAttributes,L=o.attributeDivisors;Z[T]=1,G[T]===0&&(n.enableVertexAttribArray(T),G[T]=1),L[T]!==D&&(n.vertexAttribDivisor(T,D),L[T]=D)}function b(){let T=o.newAttributes,D=o.enabledAttributes;for(let Z=0,G=D.length;Z<G;Z++)D[Z]!==T[Z]&&(n.disableVertexAttribArray(Z),D[Z]=0)}function M(T,D,Z,G,L,k,O){O===!0?n.vertexAttribIPointer(T,D,Z,L,k):n.vertexAttribPointer(T,D,Z,G,L,k)}function v(T,D,Z,G){E();let L=G.attributes,k=Z.getAttributes(),O=D.defaultAttributeValues;for(let Q in k){let W=k[Q];if(W.location>=0){let rt=L[Q];if(rt===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(rt=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(rt=T.instanceColor)),rt!==void 0){let gt=rt.normalized,Ct=rt.itemSize,Jt=t.get(rt);if(Jt===void 0)continue;let be=Jt.buffer,j=Jt.type,dt=Jt.bytesPerElement,Lt=j===n.INT||j===n.UNSIGNED_INT||rt.gpuType===dh;if(rt.isInterleavedBufferAttribute){let vt=rt.data,Wt=vt.stride,te=rt.offset;if(vt.isInstancedInterleavedBuffer){for(let de=0;de<W.locationSize;de++)p(W.location+de,vt.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let de=0;de<W.locationSize;de++)m(W.location+de);n.bindBuffer(n.ARRAY_BUFFER,be);for(let de=0;de<W.locationSize;de++)M(W.location+de,Ct/W.locationSize,j,gt,Wt*dt,(te+Ct/W.locationSize*de)*dt,Lt)}else{if(rt.isInstancedBufferAttribute){for(let vt=0;vt<W.locationSize;vt++)p(W.location+vt,rt.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let vt=0;vt<W.locationSize;vt++)m(W.location+vt);n.bindBuffer(n.ARRAY_BUFFER,be);for(let vt=0;vt<W.locationSize;vt++)M(W.location+vt,Ct/W.locationSize,j,gt,Ct*dt,Ct/W.locationSize*vt*dt,Lt)}}else if(O!==void 0){let gt=O[Q];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(W.location,gt);break;case 3:n.vertexAttrib3fv(W.location,gt);break;case 4:n.vertexAttrib4fv(W.location,gt);break;default:n.vertexAttrib1fv(W.location,gt)}}}}b()}function C(){F();for(let T in i){let D=i[T];for(let Z in D){let G=D[Z];for(let L in G)h(G[L].object),delete G[L];delete D[Z]}delete i[T]}}function S(T){if(i[T.id]===void 0)return;let D=i[T.id];for(let Z in D){let G=D[Z];for(let L in G)h(G[L].object),delete G[L];delete D[Z]}delete i[T.id]}function x(T){for(let D in i){let Z=i[D];if(Z[T.id]===void 0)continue;let G=Z[T.id];for(let L in G)h(G[L].object),delete G[L];delete Z[T.id]}}function F(){R(),r=!0,o!==s&&(o=s,c(o.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:x,initAttributes:E,enableAttribute:m,disableUnusedAttributes:b}}function cg(n,t,e){let i;function s(c){i=c}function o(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];e.update(g,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hg(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(x){return!(x!==jn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let F=x===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==as&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&x!==ss&&!F)}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:C,maxSamples:S}}function dg(n){let t=this,e=null,i=0,s=!1,o=!1,r=new is,a=new he,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{let b=o?0:i,M=b*4,v=p.clippingState||null;l.value=v,v=h(g,u,M,f);for(let C=0;C!==M;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let p=f+E*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==E;++M,v+=4)r.copy(d[M]).applyMatrix4(b,a),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}function ug(n){let t=new WeakMap;function e(r,a){return a===Zl?r.mapping=or:a===$l&&(r.mapping=rr),r}function i(r){if(r&&r.isTexture){let a=r.mapping;if(a===Zl||a===$l)if(t.has(r)){let l=t.get(r).texture;return e(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Cc(l.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){let a=r.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}var dr=class extends l0{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=i-t,r=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qo=4,Wd=[.125,.215,.35,.446,.526,.582],ro=20,xl=new dr,Xd=new wt,wl=null,Cl=0,Fl=0,Pl=!1,so=(1+Math.sqrt(5))/2,Yo=1/so,qd=[new _(-so,Yo,0),new _(so,Yo,0),new _(-Yo,0,so),new _(Yo,0,so),new _(0,so,-Yo),new _(0,so,Yo),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)],h0=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){wl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wl,Cl,Fl),this._renderer.xr.enabled=Pl,t.scissorTest=!1,Na(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:qn,format:jn,colorSpace:Ns,depthBuffer:!1},s=Yd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(t,e,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(o)),this._blurMaterial=pg(o,t,e)}return s}_compileMaterial(t){let e=new it(this._lodPlanes[0],t);this._renderer.compile(e,xl)}_sceneToCubeUV(t,e,i,s){let a=new xn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Xd),h.toneMapping=zi,h.autoClear=!1;let f=new re({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new it(new we,f),E=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,E=!0):(f.color.copy(Xd),E=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;Na(s,b*M,p>2?M:0,M,M),h.setRenderTarget(s),E&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===or||t.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$d()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zd());let o=s?this._cubemapMaterial:this._equirectMaterial,r=new it(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;Na(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,xl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let o=1;o<s;o++){let r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=qd[(s-o-1)%qd.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new it(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*ro-1),E=o/g,m=isFinite(o)?1+Math.floor(h*E):ro;m>ro&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ro}`);let p=[],b=0;for(let x=0;x<ro;++x){let F=x/E,R=Math.exp(-F*F/2);p.push(R),x===0?b+=R:x<m&&(b+=2*R)}for(let x=0;x<p.length;x++)p[x]=p[x]/b;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;let v=this._sizeLods[s],C=3*v*(s>M-Qo?s-M+Qo:0),S=4*(this._cubeSize-v);Na(e,C,S,3*v,2*v),l.setRenderTarget(e),l.render(d,xl)}};function fg(n){let t=[],e=[],i=[],s=n,o=n-Qo+1+Wd.length;for(let r=0;r<o;r++){let a=Math.pow(2,s);e.push(a);let l=1/a;r>n-Qo?l=Wd[r-n+Qo-1]:r===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,E=3,m=2,p=1,b=new Float32Array(E*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let S=0;S<f;S++){let x=S%3*2/3-1,F=S>2?0:-1,R=[x,F,0,x+2/3,F,0,x+2/3,F+1,0,x,F,0,x+2/3,F+1,0,x,F+1,0];b.set(R,E*g*S),M.set(u,m*g*S);let T=[S,S,S,S,S,S];v.set(T,p*g*S)}let C=new En;C.setAttribute("position",new Ln(b,E)),C.setAttribute("uv",new Ln(M,m)),C.setAttribute("faceIndex",new Ln(v,p)),t.push(C),s>Qo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Yd(n,t,e){let i=new _n(n,t,e);return i.texture.mapping=b0,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function pg(n,t,e){let i=new Float32Array(ro),s=new _(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:ro,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Zd(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function $d(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Eh(){return`

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
	`}function mg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Zl||l===$l,h=l===or||l===rr;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new h0(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new h0(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){let l=a.target;l.removeEventListener("dispose",o);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function gg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Wr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Eg(n,t,e,i){let s={},o=new WeakMap;function r(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,p=E.length;m<p;m++)t.remove(E[m])}u.removeEventListener("dispose",r),delete s[u.id];let f=o.get(u);f&&(t.remove(f),o.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let E=f[g];for(let m=0,p=E.length;m<p;m++)t.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,E=0;if(f!==null){let b=f.array;E=f.version;for(let M=0,v=b.length;M<v;M+=3){let C=b[M+0],S=b[M+1],x=b[M+2];u.push(C,S,S,x,x,C)}}else if(g!==void 0){let b=g.array;E=g.version;for(let M=0,v=b.length/3-1;M<v;M+=3){let C=M+0,S=M+1,x=M+2;u.push(C,S,S,x,x,C)}}else return;let m=new(Nu(u)?a0:r0)(u,1);m.version=E;let p=o.get(d);p&&t.remove(p),o.set(d,m)}function h(d){let u=o.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function vg(n,t,e){let i;function s(u){i=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,f){n.drawElements(i,f,o,u*r),e.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,o,u*r,g),e.update(f,i,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function d(u,f,g,E){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/r,f[p],E[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,o,u,0,E,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*E[b];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function yg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Mg(n,t,e){let i=new WeakMap,s=new ke;function o(r,a,l){let c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let R=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),E===!0&&(M=3);let v=a.attributes.position.count*M,C=1;v>t.maxTextureSize&&(C=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*C*4*d),x=new i0(S,v,C,d);x.type=ss,x.needsUpdate=!0;let F=M*4;for(let T=0;T<d;T++){let D=m[T],Z=p[T],G=b[T],L=v*C*4*T;for(let k=0;k<D.count;k++){let O=k*F;f===!0&&(s.fromBufferAttribute(D,k),S[L+O+0]=s.x,S[L+O+1]=s.y,S[L+O+2]=s.z,S[L+O+3]=0),g===!0&&(s.fromBufferAttribute(Z,k),S[L+O+4]=s.x,S[L+O+5]=s.y,S[L+O+6]=s.z,S[L+O+7]=0),E===!0&&(s.fromBufferAttribute(G,k),S[L+O+8]=s.x,S[L+O+9]=s.y,S[L+O+10]=s.z,S[L+O+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new ht(v,C)},i.set(a,u),a.addEventListener("dispose",R)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:o}}function _g(n,t,e,i){let s=new WeakMap;function o(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function r(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}var ur=class extends Wn{constructor(t,e,i,s,o,r,a,l,c,h=tr){if(h!==tr&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===tr&&(i=ls),i===void 0&&h===lr&&(i=ar),super(null,s,o,r,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Gu=new Wn,Jd=new ur(1,1),Vu=new i0,Wu=new xc,Xu=new c0,Kd=[],Qd=[],jd=new Float32Array(16),tu=new Float32Array(9),eu=new Float32Array(4);function Er(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,o=Kd[s];if(o===void 0&&(o=new Float32Array(s),Kd[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function vn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function yn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function A0(n,t){let e=Qd[t];e===void 0&&(e=new Int32Array(t),Qd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function bg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Tg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;n.uniform2fv(this.addr,t),yn(e,t)}}function Ag(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(vn(e,t))return;n.uniform3fv(this.addr,t),yn(e,t)}}function Sg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;n.uniform4fv(this.addr,t),yn(e,t)}}function Rg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(vn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),yn(e,t)}else{if(vn(e,i))return;eu.set(i),n.uniformMatrix2fv(this.addr,!1,eu),yn(e,i)}}function xg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(vn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),yn(e,t)}else{if(vn(e,i))return;tu.set(i),n.uniformMatrix3fv(this.addr,!1,tu),yn(e,i)}}function wg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(vn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),yn(e,t)}else{if(vn(e,i))return;jd.set(i),n.uniformMatrix4fv(this.addr,!1,jd),yn(e,i)}}function Cg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;n.uniform2iv(this.addr,t),yn(e,t)}}function Pg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;n.uniform3iv(this.addr,t),yn(e,t)}}function Ig(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;n.uniform4iv(this.addr,t),yn(e,t)}}function Dg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Lg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;n.uniform2uiv(this.addr,t),yn(e,t)}}function Bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;n.uniform3uiv(this.addr,t),yn(e,t)}}function Hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;n.uniform4uiv(this.addr,t),yn(e,t)}}function Ug(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Jd.compareFunction=Uu,o=Jd):o=Gu,e.setTexture2D(t||o,s)}function Ng(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Wu,s)}function zg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Xu,s)}function Og(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Vu,s)}function kg(n){switch(n){case 5126:return bg;case 35664:return Tg;case 35665:return Ag;case 35666:return Sg;case 35674:return Rg;case 35675:return xg;case 35676:return wg;case 5124:case 35670:return Cg;case 35667:case 35671:return Fg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Dg;case 36294:return Lg;case 36295:return Bg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Og}}function Gg(n,t){n.uniform1fv(this.addr,t)}function Vg(n,t){let e=Er(t,this.size,2);n.uniform2fv(this.addr,e)}function Wg(n,t){let e=Er(t,this.size,3);n.uniform3fv(this.addr,e)}function Xg(n,t){let e=Er(t,this.size,4);n.uniform4fv(this.addr,e)}function qg(n,t){let e=Er(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Yg(n,t){let e=Er(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Zg(n,t){let e=Er(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $g(n,t){n.uniform1iv(this.addr,t)}function Jg(n,t){n.uniform2iv(this.addr,t)}function Kg(n,t){n.uniform3iv(this.addr,t)}function Qg(n,t){n.uniform4iv(this.addr,t)}function jg(n,t){n.uniform1uiv(this.addr,t)}function tE(n,t){n.uniform2uiv(this.addr,t)}function eE(n,t){n.uniform3uiv(this.addr,t)}function nE(n,t){n.uniform4uiv(this.addr,t)}function iE(n,t,e){let i=this.cache,s=t.length,o=A0(e,s);vn(i,o)||(n.uniform1iv(this.addr,o),yn(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Gu,o[r])}function sE(n,t,e){let i=this.cache,s=t.length,o=A0(e,s);vn(i,o)||(n.uniform1iv(this.addr,o),yn(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Wu,o[r])}function oE(n,t,e){let i=this.cache,s=t.length,o=A0(e,s);vn(i,o)||(n.uniform1iv(this.addr,o),yn(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Xu,o[r])}function rE(n,t,e){let i=this.cache,s=t.length,o=A0(e,s);vn(i,o)||(n.uniform1iv(this.addr,o),yn(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Vu,o[r])}function aE(n){switch(n){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return $g;case 35667:case 35671:return Jg;case 35668:case 35672:return Kg;case 35669:case 35673:return Qg;case 5125:return jg;case 36294:return tE;case 36295:return eE;case 36296:return nE;case 35678:case 36198:case 36298:case 36306:case 35682:return iE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return rE}}var Fc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=kg(e.type)}},Pc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=aE(e.type)}},Ic=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let o=0,r=s.length;o!==r;++o){let a=s[o];a.setValue(t,e[a.id],i)}}},Il=/(\w+)(\])?(\[|\.)?/g;function nu(n,t){n.seq.push(t),n.map[t.id]=t}function lE(n,t,e){let i=n.name,s=i.length;for(Il.lastIndex=0;;){let o=Il.exec(i),r=Il.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){nu(e,c===void 0?new Fc(a,n,t):new Pc(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Ic(a),nu(e,d)),e=d}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);lE(o,r,this)}}setValue(t,e,i,s){let o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){let a=e[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,o=t.length;s!==o;++s){let r=t[s];r.id in e&&i.push(r)}return i}};function iu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var cE=37297,hE=0;function dE(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){let a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}var su=new he;function uE(n){Ae._getMatrix(su,Ae.workingColorSpace,n);let t=`mat3( ${su.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(n)){case T0:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ou(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+dE(n.getShaderSource(t),r)}else return s}function fE(n,t){let e=uE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function pE(n,t){let e;switch(t){case Op:e="Linear";break;case kp:e="Reinhard";break;case Gp:e="Cineon";break;case Vp:e="ACESFilmic";break;case Xp:e="AgX";break;case qp:e="Neutral";break;case Wp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var za=new _;function mE(){Ae.getLuminanceCoefficients(za);let n=za.x.toFixed(4),t=za.y.toFixed(4),e=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function EE(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function vE(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let o=n.getActiveAttrib(t,s),r=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Xr(n){return n!==""}function ru(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function au(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(n){return n.replace(yE,_E)}var ME=new Map;function _E(n,t){let e=fe[t];if(e===void 0){let i=ME.get(t);if(i!==void 0)e=fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Dc(e)}var bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(n){return n.replace(bE,TE)}function TE(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function cu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function AE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ns&&(t="SHADOWMAP_TYPE_VSM"),t}function SE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case rr:t="ENVMAP_TYPE_CUBE";break;case b0:t="ENVMAP_TYPE_CUBE_UV";break}return t}function RE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function xE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Au:t="ENVMAP_BLENDING_MULTIPLY";break;case Np:t="ENVMAP_BLENDING_MIX";break;case zp:t="ENVMAP_BLENDING_ADD";break}return t}function wE(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function CE(n,t,e,i){let s=n.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,l=AE(e),c=SE(e),h=RE(e),d=xE(e),u=wE(e),f=gE(e),g=EE(o),E=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xr).join(`
`),p.length>0&&(p+=`
`)):(m=[cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),p=[cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?fe.tonemapping_pars_fragment:"",e.toneMapping!==zi?pE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,fE("linearToOutputTexel",e.outputColorSpace),mE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xr).join(`
`)),r=Dc(r),r=ru(r,e),r=au(r,e),a=Dc(a),a=ru(a,e),a=au(a,e),r=lu(r),a=lu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Td?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=b+m+r,v=b+p+a,C=iu(s,s.VERTEX_SHADER,M),S=iu(s,s.FRAGMENT_SHADER,v);s.attachShader(E,C),s.attachShader(E,S),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function x(D){if(n.debug.checkShaderErrors){let Z=s.getProgramInfoLog(E).trim(),G=s.getShaderInfoLog(C).trim(),L=s.getShaderInfoLog(S).trim(),k=!0,O=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,C,S);else{let Q=ou(s,C,"vertex"),W=ou(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Z+`
`+Q+`
`+W)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(G===""||L==="")&&(O=!1);O&&(D.diagnostics={runnable:k,programLog:Z,vertexShader:{log:G,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(C),s.deleteShader(S),F=new nr(s,E),R=vE(s,E)}let F;this.getUniforms=function(){return F===void 0&&x(this),F};let R;this.getAttributes=function(){return R===void 0&&x(this),R};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(E,cE)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hE++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=S,this}var FE=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Bc(t),e.set(t,i)),i}},Bc=class{constructor(t){this.id=FE++,this.code=t,this.usedTimes=0}};function PE(n,t,e,i,s,o,r){let a=new o0,l=new Lc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return c.add(R),R===0?"uv":`uv${R}`}function m(R,T,D,Z,G){let L=Z.fog,k=G.geometry,O=R.isMeshStandardMaterial?Z.environment:null,Q=(R.isMeshStandardMaterial?e:t).get(R.envMap||O),W=Q&&Q.mapping===b0?Q.image.height:null,rt=g[R.type];R.precision!==null&&(f=s.getMaxPrecision(R.precision),f!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",f,"instead."));let gt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ct=gt!==void 0?gt.length:0,Jt=0;k.morphAttributes.position!==void 0&&(Jt=1),k.morphAttributes.normal!==void 0&&(Jt=2),k.morphAttributes.color!==void 0&&(Jt=3);let be,j,dt,Lt;if(rt){let Ne=Bi[rt];be=Ne.vertexShader,j=Ne.fragmentShader}else be=R.vertexShader,j=R.fragmentShader,l.update(R),dt=l.getVertexShaderID(R),Lt=l.getFragmentShaderID(R);let vt=n.getRenderTarget(),Wt=n.state.buffers.depth.getReversed(),te=G.isInstancedMesh===!0,de=G.isBatchedMesh===!0,Ue=!!R.map,me=!!R.matcap,en=!!Q,N=!!R.aoMap,Hn=!!R.lightMap,ge=!!R.bumpMap,ye=!!R.normalMap,Zt=!!R.displacementMap,Tt=!!R.emissiveMap,Mt=!!R.metalnessMap,w=!!R.roughnessMap,y=R.anisotropy>0,X=R.clearcoat>0,st=R.dispersion>0,lt=R.iridescence>0,nt=R.sheen>0,zt=R.transmission>0,At=y&&!!R.anisotropyMap,Ft=X&&!!R.clearcoatMap,Te=X&&!!R.clearcoatNormalMap,ut=X&&!!R.clearcoatRoughnessMap,Pt=lt&&!!R.iridescenceMap,jt=lt&&!!R.iridescenceThicknessMap,ee=nt&&!!R.sheenColorMap,It=nt&&!!R.sheenRoughnessMap,_e=!!R.specularMap,ue=!!R.specularColorMap,qe=!!R.specularIntensityMap,H=zt&&!!R.transmissionMap,_t=zt&&!!R.thicknessMap,K=!!R.gradientMap,ot=!!R.alphaMap,xt=R.alphaTest>0,St=!!R.alphaHash,le=!!R.extensions,rn=zi;R.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(rn=n.toneMapping);let Pn={shaderID:rt,shaderType:R.type,shaderName:R.name,vertexShader:be,fragmentShader:j,defines:R.defines,customVertexShaderID:dt,customFragmentShaderID:Lt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:f,batching:de,batchingColor:de&&G._colorsTexture!==null,instancing:te,instancingColor:te&&G.instanceColor!==null,instancingMorph:te&&G.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:vt===null?n.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ns,alphaToCoverage:!!R.alphaToCoverage,map:Ue,matcap:me,envMap:en,envMapMode:en&&Q.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:Hn,bumpMap:ge,normalMap:ye,displacementMap:u&&Zt,emissiveMap:Tt,normalMapObjectSpace:ye&&R.normalMapType===Jp,normalMapTangentSpace:ye&&R.normalMapType===Hu,metalnessMap:Mt,roughnessMap:w,anisotropy:y,anisotropyMap:At,clearcoat:X,clearcoatMap:Ft,clearcoatNormalMap:Te,clearcoatRoughnessMap:ut,dispersion:st,iridescence:lt,iridescenceMap:Pt,iridescenceThicknessMap:jt,sheen:nt,sheenColorMap:ee,sheenRoughnessMap:It,specularMap:_e,specularColorMap:ue,specularIntensityMap:qe,transmission:zt,transmissionMap:H,thicknessMap:_t,gradientMap:K,opaque:R.transparent===!1&&R.blending===jo&&R.alphaToCoverage===!1,alphaMap:ot,alphaTest:xt,alphaHash:St,combine:R.combine,mapUv:Ue&&E(R.map.channel),aoMapUv:N&&E(R.aoMap.channel),lightMapUv:Hn&&E(R.lightMap.channel),bumpMapUv:ge&&E(R.bumpMap.channel),normalMapUv:ye&&E(R.normalMap.channel),displacementMapUv:Zt&&E(R.displacementMap.channel),emissiveMapUv:Tt&&E(R.emissiveMap.channel),metalnessMapUv:Mt&&E(R.metalnessMap.channel),roughnessMapUv:w&&E(R.roughnessMap.channel),anisotropyMapUv:At&&E(R.anisotropyMap.channel),clearcoatMapUv:Ft&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:Te&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:It&&E(R.sheenRoughnessMap.channel),specularMapUv:_e&&E(R.specularMap.channel),specularColorMapUv:ue&&E(R.specularColorMap.channel),specularIntensityMapUv:qe&&E(R.specularIntensityMap.channel),transmissionMapUv:H&&E(R.transmissionMap.channel),thicknessMapUv:_t&&E(R.thicknessMap.channel),alphaMapUv:ot&&E(R.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ye||y),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!k.attributes.uv&&(Ue||ot),fog:!!L,useFog:R.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Wt,skinning:G.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Jt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:rn,decodeVideoTexture:Ue&&R.map.isVideoTexture===!0&&Ae.getTransfer(R.map.colorSpace)===ze,decodeVideoTextureEmissive:Tt&&R.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(R.emissiveMap.colorSpace)===ze,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ze,flipSided:R.side===dn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:le&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&R.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Pn.vertexUv1s=c.has(1),Pn.vertexUv2s=c.has(2),Pn.vertexUv3s=c.has(3),c.clear(),Pn}function p(R){let T=[];if(R.shaderID?T.push(R.shaderID):(T.push(R.customVertexShaderID),T.push(R.customFragmentShaderID)),R.defines!==void 0)for(let D in R.defines)T.push(D),T.push(R.defines[D]);return R.isRawShaderMaterial===!1&&(b(T,R),M(T,R),T.push(n.outputColorSpace)),T.push(R.customProgramCacheKey),T.join()}function b(R,T){R.push(T.precision),R.push(T.outputColorSpace),R.push(T.envMapMode),R.push(T.envMapCubeUVHeight),R.push(T.mapUv),R.push(T.alphaMapUv),R.push(T.lightMapUv),R.push(T.aoMapUv),R.push(T.bumpMapUv),R.push(T.normalMapUv),R.push(T.displacementMapUv),R.push(T.emissiveMapUv),R.push(T.metalnessMapUv),R.push(T.roughnessMapUv),R.push(T.anisotropyMapUv),R.push(T.clearcoatMapUv),R.push(T.clearcoatNormalMapUv),R.push(T.clearcoatRoughnessMapUv),R.push(T.iridescenceMapUv),R.push(T.iridescenceThicknessMapUv),R.push(T.sheenColorMapUv),R.push(T.sheenRoughnessMapUv),R.push(T.specularMapUv),R.push(T.specularColorMapUv),R.push(T.specularIntensityMapUv),R.push(T.transmissionMapUv),R.push(T.thicknessMapUv),R.push(T.combine),R.push(T.fogExp2),R.push(T.sizeAttenuation),R.push(T.morphTargetsCount),R.push(T.morphAttributeCount),R.push(T.numDirLights),R.push(T.numPointLights),R.push(T.numSpotLights),R.push(T.numSpotLightMaps),R.push(T.numHemiLights),R.push(T.numRectAreaLights),R.push(T.numDirLightShadows),R.push(T.numPointLightShadows),R.push(T.numSpotLightShadows),R.push(T.numSpotLightShadowsWithMaps),R.push(T.numLightProbes),R.push(T.shadowMapType),R.push(T.toneMapping),R.push(T.numClippingPlanes),R.push(T.numClipIntersection),R.push(T.depthPacking)}function M(R,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),R.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),R.push(a.mask)}function v(R){let T=g[R.type],D;if(T){let Z=Bi[T];D=gr.clone(Z.uniforms)}else D=R.uniforms;return D}function C(R,T){let D;for(let Z=0,G=h.length;Z<G;Z++){let L=h[Z];if(L.cacheKey===T){D=L,++D.usedTimes;break}}return D===void 0&&(D=new CE(n,T,R,o),h.push(D)),D}function S(R){if(--R.usedTimes===0){let T=h.indexOf(R);h[T]=h[h.length-1],h.pop(),R.destroy()}}function x(R){l.remove(R)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:S,releaseShaderCache:x,programs:h,dispose:F}}function IE(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,l){n.get(r)[a]=l}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function DE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function hu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function du(){let n=[],t=0,e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(d,u,f,g,E,m){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=E,p.group=m),t++,p}function a(d,u,f,g,E,m){let p=r(d,u,f,g,E,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,g,E,m){let p=r(d,u,f,g,E,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||DE),i.length>1&&i.sort(u||hu),s.length>1&&s.sort(u||hu)}function h(){for(let d=t,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function LE(){let n=new WeakMap;function t(i,s){let o=n.get(i),r;return o===void 0?(r=new du,n.set(i,[r])):s>=o.length?(r=new du,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function BE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new _,color:new wt};break;case"SpotLight":e={position:new _,direction:new _,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new _,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new _,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new _,halfWidth:new _,halfHeight:new _};break}return n[t.id]=e,e}}}function HE(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var UE=0;function NE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function zE(n){let t=new BE,e=HE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new _);let s=new _,o=new Ie,r=new Ie;function a(c){let h=0,d=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,b=0,M=0,v=0,C=0,S=0,x=0;c.sort(NE);for(let R=0,T=c.length;R<T;R++){let D=c[R],Z=D.color,G=D.intensity,L=D.distance,k=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=Z.r*G,d+=Z.g*G,u+=Z.b*G;else if(D.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(D.sh.coefficients[O],G);x++}else if(D.isDirectionalLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,W=e.get(D);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=D.shadow.matrix,b++}i.directional[f]=O,f++}else if(D.isSpotLight){let O=t.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(Z).multiplyScalar(G),O.distance=L,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,i.spot[E]=O;let Q=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,Q.updateMatrices(D),D.castShadow&&S++),i.spotLightMatrix[E]=Q.matrix,D.castShadow){let W=e.get(D);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.spotShadow[E]=W,i.spotShadowMap[E]=k,v++}E++}else if(D.isRectAreaLight){let O=t.get(D);O.color.copy(Z).multiplyScalar(G),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=O,m++}else if(D.isPointLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){let Q=D.shadow,W=e.get(D);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=D.shadow.matrix,M++}i.point[g]=O,g++}else if(D.isHemisphereLight){let O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(G),O.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[p]=O,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==b||F.numPointShadows!==M||F.numSpotShadows!==v||F.numSpotMaps!==C||F.numLightProbes!==x)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+C-S,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=x,F.directionalLength=f,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=b,F.numPointShadows=M,F.numSpotShadows=v,F.numSpotMaps=C,F.numLightProbes=x,i.version=UE++)}function l(c,h){let d=0,u=0,f=0,g=0,E=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let M=c[p];if(M.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isSpotLight){let v=i.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(M.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){let v=i.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){let v=i.hemi[E];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function uu(n){let t=new zE(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function OE(n){let t=new WeakMap;function e(s,o=0){let r=t.get(s),a;return r===void 0?(a=new uu(n),t.set(s,[a])):o>=r.length?(a=new uu(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Hc=class extends hs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Uc=class extends hs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},kE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GE=`uniform sampler2D shadow_pass;
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
}`;function VE(n,t,e){let i=new Jr,s=new ht,o=new ht,r=new ke,a=new Hc({depthPacking:$p}),l=new Uc,c={},h=e.maxTextureSize,d={[Oi]:dn,[dn]:Oi,[Ze]:Ze},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:kE,fragmentShader:GE}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new En;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new it(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let p=this.type;this.render=function(S,x,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let R=n.getRenderTarget(),T=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(Ni),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let G=p!==ns&&this.type===ns,L=p===ns&&this.type!==ns;for(let k=0,O=S.length;k<O;k++){let Q=S[k],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let rt=W.getFrameExtents();if(s.multiply(rt),o.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/rt.x),s.x=o.x*rt.x,W.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/rt.y),s.y=o.y*rt.y,W.mapSize.y=o.y)),W.map===null||G===!0||L===!0){let Ct=this.type!==ns?{minFilter:zn,magFilter:zn}:{};W.map!==null&&W.map.dispose(),W.map=new _n(s.x,s.y,Ct),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let gt=W.getViewportCount();for(let Ct=0;Ct<gt;Ct++){let Jt=W.getViewport(Ct);r.set(o.x*Jt.x,o.y*Jt.y,o.x*Jt.z,o.y*Jt.w),Z.viewport(r),W.updateMatrices(Q,Ct),i=W.getFrustum(),v(x,F,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===ns&&b(W,F),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(R,T,D)};function b(S,x){let F=t.update(E);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new _n(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(x,null,F,u,E,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(x,null,F,f,E,null)}function M(S,x,F,R){let T=null,D=F.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)T=D;else if(T=F.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){let Z=T.uuid,G=x.uuid,L=c[Z];L===void 0&&(L={},c[Z]=L);let k=L[G];k===void 0&&(k=T.clone(),L[G]=k,x.addEventListener("dispose",C)),T=k}if(T.visible=x.visible,T.wireframe=x.wireframe,R===ns?T.side=x.shadowSide!==null?x.shadowSide:x.side:T.side=x.shadowSide!==null?x.shadowSide:d[x.side],T.alphaMap=x.alphaMap,T.alphaTest=x.alphaTest,T.map=x.map,T.clipShadows=x.clipShadows,T.clippingPlanes=x.clippingPlanes,T.clipIntersection=x.clipIntersection,T.displacementMap=x.displacementMap,T.displacementScale=x.displacementScale,T.displacementBias=x.displacementBias,T.wireframeLinewidth=x.wireframeLinewidth,T.linewidth=x.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let Z=n.properties.get(T);Z.light=F}return T}function v(S,x,F,R,T){if(S.visible===!1)return;if(S.layers.test(x.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===ns)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld);let G=t.update(S),L=S.material;if(Array.isArray(L)){let k=G.groups;for(let O=0,Q=k.length;O<Q;O++){let W=k[O],rt=L[W.materialIndex];if(rt&&rt.visible){let gt=M(S,rt,R,T);S.onBeforeShadow(n,S,x,F,G,gt,W),n.renderBufferDirect(F,null,G,gt,S,W),S.onAfterShadow(n,S,x,F,G,gt,W)}}}else if(L.visible){let k=M(S,L,R,T);S.onBeforeShadow(n,S,x,F,G,k,null),n.renderBufferDirect(F,null,G,k,S,null),S.onAfterShadow(n,S,x,F,G,k,null)}}let Z=S.children;for(let G=0,L=Z.length;G<L;G++)v(Z[G],x,F,R,T)}function C(S){S.target.removeEventListener("dispose",C);for(let F in c){let R=c[F],T=S.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}var WE={[kl]:Gl,[Vl]:ql,[Wl]:Yl,[sr]:Xl,[Gl]:kl,[ql]:Vl,[Yl]:Wl,[Xl]:sr};function XE(n,t){function e(){let H=!1,_t=new ke,K=null,ot=new ke(0,0,0,0);return{setMask:function(xt){K!==xt&&!H&&(n.colorMask(xt,xt,xt,xt),K=xt)},setLocked:function(xt){H=xt},setClear:function(xt,St,le,rn,Pn){Pn===!0&&(xt*=rn,St*=rn,le*=rn),_t.set(xt,St,le,rn),ot.equals(_t)===!1&&(n.clearColor(xt,St,le,rn),ot.copy(_t))},reset:function(){H=!1,K=null,ot.set(-1,0,0,0)}}}function i(){let H=!1,_t=!1,K=null,ot=null,xt=null;return{setReversed:function(St){if(_t!==St){let le=t.get("EXT_clip_control");_t?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT);let rn=xt;xt=null,this.setClear(rn)}_t=St},getReversed:function(){return _t},setTest:function(St){St?vt(n.DEPTH_TEST):Wt(n.DEPTH_TEST)},setMask:function(St){K!==St&&!H&&(n.depthMask(St),K=St)},setFunc:function(St){if(_t&&(St=WE[St]),ot!==St){switch(St){case kl:n.depthFunc(n.NEVER);break;case Gl:n.depthFunc(n.ALWAYS);break;case Vl:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case Wl:n.depthFunc(n.EQUAL);break;case Xl:n.depthFunc(n.GEQUAL);break;case ql:n.depthFunc(n.GREATER);break;case Yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=St}},setLocked:function(St){H=St},setClear:function(St){xt!==St&&(_t&&(St=1-St),n.clearDepth(St),xt=St)},reset:function(){H=!1,K=null,ot=null,xt=null,_t=!1}}}function s(){let H=!1,_t=null,K=null,ot=null,xt=null,St=null,le=null,rn=null,Pn=null;return{setTest:function(Ne){H||(Ne?vt(n.STENCIL_TEST):Wt(n.STENCIL_TEST))},setMask:function(Ne){_t!==Ne&&!H&&(n.stencilMask(Ne),_t=Ne)},setFunc:function(Ne,Ei,$i){(K!==Ne||ot!==Ei||xt!==$i)&&(n.stencilFunc(Ne,Ei,$i),K=Ne,ot=Ei,xt=$i)},setOp:function(Ne,Ei,$i){(St!==Ne||le!==Ei||rn!==$i)&&(n.stencilOp(Ne,Ei,$i),St=Ne,le=Ei,rn=$i)},setLocked:function(Ne){H=Ne},setClear:function(Ne){Pn!==Ne&&(n.clearStencil(Ne),Pn=Ne)},reset:function(){H=!1,_t=null,K=null,ot=null,xt=null,St=null,le=null,rn=null,Pn=null}}}let o=new e,r=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,b=null,M=null,v=null,C=null,S=null,x=new wt(0,0,0),F=0,R=!1,T=null,D=null,Z=null,G=null,L=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Q=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=Q>=2);let rt=null,gt={},Ct=n.getParameter(n.SCISSOR_BOX),Jt=n.getParameter(n.VIEWPORT),be=new ke().fromArray(Ct),j=new ke().fromArray(Jt);function dt(H,_t,K,ot){let xt=new Uint8Array(4),St=n.createTexture();n.bindTexture(H,St),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let le=0;le<K;le++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(_t+le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return St}let Lt={};Lt[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),Lt[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Lt[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),vt(n.DEPTH_TEST),r.setFunc(sr),ge(!1),ye(gd),vt(n.CULL_FACE),N(Ni);function vt(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function Wt(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function te(H,_t){return d[H]!==_t?(n.bindFramebuffer(H,_t),d[H]=_t,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=_t),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function de(H,_t){let K=f,ot=!1;if(H){K=u.get(_t),K===void 0&&(K=[],u.set(_t,K));let xt=H.textures;if(K.length!==xt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let St=0,le=xt.length;St<le;St++)K[St]=n.COLOR_ATTACHMENT0+St;K.length=xt.length,ot=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ot=!0);ot&&n.drawBuffers(K)}function Ue(H){return g!==H?(n.useProgram(H),g=H,!0):!1}let me={[oo]:n.FUNC_ADD,[_p]:n.FUNC_SUBTRACT,[bp]:n.FUNC_REVERSE_SUBTRACT};me[Tp]=n.MIN,me[Ap]=n.MAX;let en={[Sp]:n.ZERO,[Rp]:n.ONE,[xp]:n.SRC_COLOR,[zl]:n.SRC_ALPHA,[Dp]:n.SRC_ALPHA_SATURATE,[Pp]:n.DST_COLOR,[Cp]:n.DST_ALPHA,[wp]:n.ONE_MINUS_SRC_COLOR,[Ol]:n.ONE_MINUS_SRC_ALPHA,[Ip]:n.ONE_MINUS_DST_COLOR,[Fp]:n.ONE_MINUS_DST_ALPHA,[Lp]:n.CONSTANT_COLOR,[Bp]:n.ONE_MINUS_CONSTANT_COLOR,[Hp]:n.CONSTANT_ALPHA,[Up]:n.ONE_MINUS_CONSTANT_ALPHA};function N(H,_t,K,ot,xt,St,le,rn,Pn,Ne){if(H===Ni){E===!0&&(Wt(n.BLEND),E=!1);return}if(E===!1&&(vt(n.BLEND),E=!0),H!==Mp){if(H!==m||Ne!==R){if((p!==oo||v!==oo)&&(n.blendEquation(n.FUNC_ADD),p=oo,v=oo),Ne)switch(H){case jo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ir:n.blendFunc(n.ONE,n.ONE);break;case Ed:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case jo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ir:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ed:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,M=null,C=null,S=null,x.set(0,0,0),F=0,m=H,R=Ne}return}xt=xt||_t,St=St||K,le=le||ot,(_t!==p||xt!==v)&&(n.blendEquationSeparate(me[_t],me[xt]),p=_t,v=xt),(K!==b||ot!==M||St!==C||le!==S)&&(n.blendFuncSeparate(en[K],en[ot],en[St],en[le]),b=K,M=ot,C=St,S=le),(rn.equals(x)===!1||Pn!==F)&&(n.blendColor(rn.r,rn.g,rn.b,Pn),x.copy(rn),F=Pn),m=H,R=!1}function Hn(H,_t){H.side===Ze?Wt(n.CULL_FACE):vt(n.CULL_FACE);let K=H.side===dn;_t&&(K=!K),ge(K),H.blending===jo&&H.transparent===!1?N(Ni):N(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),o.setMask(H.colorWrite);let ot=H.stencilWrite;a.setTest(ot),ot&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):Wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(H){T!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),T=H)}function ye(H){H!==vp?(vt(n.CULL_FACE),H!==D&&(H===gd?n.cullFace(n.BACK):H===yp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Wt(n.CULL_FACE),D=H}function Zt(H){H!==Z&&(O&&n.lineWidth(H),Z=H)}function Tt(H,_t,K){H?(vt(n.POLYGON_OFFSET_FILL),(G!==_t||L!==K)&&(n.polygonOffset(_t,K),G=_t,L=K)):Wt(n.POLYGON_OFFSET_FILL)}function Mt(H){H?vt(n.SCISSOR_TEST):Wt(n.SCISSOR_TEST)}function w(H){H===void 0&&(H=n.TEXTURE0+k-1),rt!==H&&(n.activeTexture(H),rt=H)}function y(H,_t,K){K===void 0&&(rt===null?K=n.TEXTURE0+k-1:K=rt);let ot=gt[K];ot===void 0&&(ot={type:void 0,texture:void 0},gt[K]=ot),(ot.type!==H||ot.texture!==_t)&&(rt!==K&&(n.activeTexture(K),rt=K),n.bindTexture(H,_t||Lt[H]),ot.type=H,ot.texture=_t)}function X(){let H=gt[rt];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function st(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function nt(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function zt(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function At(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ut(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pt(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function jt(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(H){be.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),be.copy(H))}function It(H){j.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),j.copy(H))}function _e(H,_t){let K=c.get(_t);K===void 0&&(K=new WeakMap,c.set(_t,K));let ot=K.get(H);ot===void 0&&(ot=n.getUniformBlockIndex(_t,H.name),K.set(H,ot))}function ue(H,_t){let ot=c.get(_t).get(H);l.get(_t)!==ot&&(n.uniformBlockBinding(_t,ot,H.__bindingPointIndex),l.set(_t,ot))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},rt=null,gt={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,b=null,M=null,v=null,C=null,S=null,x=new wt(0,0,0),F=0,R=!1,T=null,D=null,Z=null,G=null,L=null,be.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:vt,disable:Wt,bindFramebuffer:te,drawBuffers:de,useProgram:Ue,setBlending:N,setMaterial:Hn,setFlipSided:ge,setCullFace:ye,setLineWidth:Zt,setPolygonOffset:Tt,setScissorTest:Mt,activeTexture:w,bindTexture:y,unbindTexture:X,compressedTexImage2D:st,compressedTexImage3D:lt,texImage2D:Pt,texImage3D:jt,updateUBOMapping:_e,uniformBlockBinding:ue,texStorage2D:Te,texStorage3D:ut,texSubImage2D:nt,texSubImage3D:zt,compressedTexSubImage2D:At,compressedTexSubImage3D:Ft,scissor:ee,viewport:It,reset:qe}}function fu(n,t,e,i){let s=qE(i);switch(e){case Cu:return n*t;case Pu:return n*t;case Iu:return n*t*2;case Du:return n*t/s.components*s.byteLength;case ph:return n*t/s.components*s.byteLength;case Lu:return n*t*2/s.components*s.byteLength;case mh:return n*t*2/s.components*s.byteLength;case Fu:return n*t*3/s.components*s.byteLength;case jn:return n*t*4/s.components*s.byteLength;case gh:return n*t*4/s.components*s.byteLength;case Ya:case Za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case $a:case Ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ql:case tc:return Math.max(n,16)*Math.max(t,8)/4;case Kl:case jl:return Math.max(n,8)*Math.max(t,8)/2;case ec:case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ka:case vc:case yc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bu:case Mc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case _c:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qE(n){switch(n){case as:case Ru:return{byteLength:1,components:1};case $r:case xu:case qn:return{byteLength:2,components:1};case uh:case fh:return{byteLength:2,components:4};case ls:case dh:case ss:return{byteLength:4,components:1};case wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function YE(n,t,e,i,s,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return f?new OffscreenCanvas(w,y):e0("canvas")}function E(w,y,X){let st=1,lt=Mt(w);if((lt.width>X||lt.height>X)&&(st=X/Math.max(lt.width,lt.height)),st<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let nt=Math.floor(st*lt.width),zt=Math.floor(st*lt.height);d===void 0&&(d=g(nt,zt));let At=y?g(nt,zt):d;return At.width=nt,At.height=zt,At.getContext("2d").drawImage(w,0,0,nt,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+nt+"x"+zt+")."),At}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(w,y,X,st,lt=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let nt=y;if(y===n.RED&&(X===n.FLOAT&&(nt=n.R32F),X===n.HALF_FLOAT&&(nt=n.R16F),X===n.UNSIGNED_BYTE&&(nt=n.R8)),y===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(nt=n.R8UI),X===n.UNSIGNED_SHORT&&(nt=n.R16UI),X===n.UNSIGNED_INT&&(nt=n.R32UI),X===n.BYTE&&(nt=n.R8I),X===n.SHORT&&(nt=n.R16I),X===n.INT&&(nt=n.R32I)),y===n.RG&&(X===n.FLOAT&&(nt=n.RG32F),X===n.HALF_FLOAT&&(nt=n.RG16F),X===n.UNSIGNED_BYTE&&(nt=n.RG8)),y===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(nt=n.RG8UI),X===n.UNSIGNED_SHORT&&(nt=n.RG16UI),X===n.UNSIGNED_INT&&(nt=n.RG32UI),X===n.BYTE&&(nt=n.RG8I),X===n.SHORT&&(nt=n.RG16I),X===n.INT&&(nt=n.RG32I)),y===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),X===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),X===n.UNSIGNED_INT&&(nt=n.RGB32UI),X===n.BYTE&&(nt=n.RGB8I),X===n.SHORT&&(nt=n.RGB16I),X===n.INT&&(nt=n.RGB32I)),y===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),X===n.UNSIGNED_INT&&(nt=n.RGBA32UI),X===n.BYTE&&(nt=n.RGBA8I),X===n.SHORT&&(nt=n.RGBA16I),X===n.INT&&(nt=n.RGBA32I)),y===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),y===n.RGBA){let zt=lt?T0:Ae.getTransfer(st);X===n.FLOAT&&(nt=n.RGBA32F),X===n.HALF_FLOAT&&(nt=n.RGBA16F),X===n.UNSIGNED_BYTE&&(nt=zt===ze?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(w,y){let X;return w?y===null||y===ls||y===ar?X=n.DEPTH24_STENCIL8:y===ss?X=n.DEPTH32F_STENCIL8:y===$r&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ls||y===ar?X=n.DEPTH_COMPONENT24:y===ss?X=n.DEPTH_COMPONENT32F:y===$r&&(X=n.DEPTH_COMPONENT16),X}function C(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==zn&&w.minFilter!==Ui?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function S(w){let y=w.target;y.removeEventListener("dispose",S),F(y),y.isVideoTexture&&h.delete(y)}function x(w){let y=w.target;y.removeEventListener("dispose",x),T(y)}function F(w){let y=i.get(w);if(y.__webglInit===void 0)return;let X=w.source,st=u.get(X);if(st){let lt=st[y.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&R(w),Object.keys(st).length===0&&u.delete(X)}i.remove(w)}function R(w){let y=i.get(w);n.deleteTexture(y.__webglTexture);let X=w.source,st=u.get(X);delete st[y.__cacheKey],r.memory.textures--}function T(w){let y=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(y.__webglFramebuffer[st]))for(let lt=0;lt<y.__webglFramebuffer[st].length;lt++)n.deleteFramebuffer(y.__webglFramebuffer[st][lt]);else n.deleteFramebuffer(y.__webglFramebuffer[st]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[st])}else{if(Array.isArray(y.__webglFramebuffer))for(let st=0;st<y.__webglFramebuffer.length;st++)n.deleteFramebuffer(y.__webglFramebuffer[st]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let st=0;st<y.__webglColorRenderbuffer.length;st++)y.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[st]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let X=w.textures;for(let st=0,lt=X.length;st<lt;st++){let nt=i.get(X[st]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),r.memory.textures--),i.remove(X[st])}i.remove(w)}let D=0;function Z(){D=0}function G(){let w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function L(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function k(w,y){let X=i.get(w);if(w.isVideoTexture&&Zt(w),w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){let st=w.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(X,w,y);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+y)}function O(w,y){let X=i.get(w);if(w.version>0&&X.__version!==w.version){j(X,w,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+y)}function Q(w,y){let X=i.get(w);if(w.version>0&&X.__version!==w.version){j(X,w,y);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+y)}function W(w,y){let X=i.get(w);if(w.version>0&&X.__version!==w.version){dt(X,w,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+y)}let rt={[Vn]:n.REPEAT,[ao]:n.CLAMP_TO_EDGE,[Jl]:n.MIRRORED_REPEAT},gt={[zn]:n.NEAREST,[Yp]:n.NEAREST_MIPMAP_NEAREST,[ya]:n.NEAREST_MIPMAP_LINEAR,[Ui]:n.LINEAR,[il]:n.LINEAR_MIPMAP_NEAREST,[lo]:n.LINEAR_MIPMAP_LINEAR},Ct={[Kp]:n.NEVER,[i1]:n.ALWAYS,[Qp]:n.LESS,[Uu]:n.LEQUAL,[jp]:n.EQUAL,[n1]:n.GEQUAL,[t1]:n.GREATER,[e1]:n.NOTEQUAL};function Jt(w,y){if(y.type===ss&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ui||y.magFilter===il||y.magFilter===ya||y.magFilter===lo||y.minFilter===Ui||y.minFilter===il||y.minFilter===ya||y.minFilter===lo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,rt[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,rt[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,rt[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,gt[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zn||y.minFilter!==ya&&y.minFilter!==lo||y.type===ss&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function be(w,y){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",S));let st=y.source,lt=u.get(st);lt===void 0&&(lt={},u.set(st,lt));let nt=L(y);if(nt!==w.__cacheKey){lt[nt]===void 0&&(lt[nt]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,X=!0),lt[nt].usedTimes++;let zt=lt[w.__cacheKey];zt!==void 0&&(lt[w.__cacheKey].usedTimes--,zt.usedTimes===0&&R(y)),w.__cacheKey=nt,w.__webglTexture=lt[nt].texture}return X}function j(w,y,X){let st=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(st=n.TEXTURE_3D);let lt=be(w,y),nt=y.source;e.bindTexture(st,w.__webglTexture,n.TEXTURE0+X);let zt=i.get(nt);if(nt.version!==zt.__version||lt===!0){e.activeTexture(n.TEXTURE0+X);let At=Ae.getPrimaries(Ae.workingColorSpace),Ft=y.colorSpace===Ls?null:Ae.getPrimaries(y.colorSpace),Te=y.colorSpace===Ls||At===Ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ut=E(y.image,!1,s.maxTextureSize);ut=Tt(y,ut);let Pt=o.convert(y.format,y.colorSpace),jt=o.convert(y.type),ee=M(y.internalFormat,Pt,jt,y.colorSpace,y.isVideoTexture);Jt(st,y);let It,_e=y.mipmaps,ue=y.isVideoTexture!==!0,qe=zt.__version===void 0||lt===!0,H=nt.dataReady,_t=C(y,ut);if(y.isDepthTexture)ee=v(y.format===lr,y.type),qe&&(ue?e.texStorage2D(n.TEXTURE_2D,1,ee,ut.width,ut.height):e.texImage2D(n.TEXTURE_2D,0,ee,ut.width,ut.height,0,Pt,jt,null));else if(y.isDataTexture)if(_e.length>0){ue&&qe&&e.texStorage2D(n.TEXTURE_2D,_t,ee,_e[0].width,_e[0].height);for(let K=0,ot=_e.length;K<ot;K++)It=_e[K],ue?H&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,It.width,It.height,Pt,jt,It.data):e.texImage2D(n.TEXTURE_2D,K,ee,It.width,It.height,0,Pt,jt,It.data);y.generateMipmaps=!1}else ue?(qe&&e.texStorage2D(n.TEXTURE_2D,_t,ee,ut.width,ut.height),H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut.width,ut.height,Pt,jt,ut.data)):e.texImage2D(n.TEXTURE_2D,0,ee,ut.width,ut.height,0,Pt,jt,ut.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ue&&qe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,ee,_e[0].width,_e[0].height,ut.depth);for(let K=0,ot=_e.length;K<ot;K++)if(It=_e[K],y.format!==jn)if(Pt!==null)if(ue){if(H)if(y.layerUpdates.size>0){let xt=fu(It.width,It.height,y.format,y.type);for(let St of y.layerUpdates){let le=It.data.subarray(St*xt/It.data.BYTES_PER_ELEMENT,(St+1)*xt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,St,It.width,It.height,1,Pt,le)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,It.width,It.height,ut.depth,Pt,It.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,ee,It.width,It.height,ut.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,It.width,It.height,ut.depth,Pt,jt,It.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,ee,It.width,It.height,ut.depth,0,Pt,jt,It.data)}else{ue&&qe&&e.texStorage2D(n.TEXTURE_2D,_t,ee,_e[0].width,_e[0].height);for(let K=0,ot=_e.length;K<ot;K++)It=_e[K],y.format!==jn?Pt!==null?ue?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,It.width,It.height,Pt,It.data):e.compressedTexImage2D(n.TEXTURE_2D,K,ee,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?H&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,It.width,It.height,Pt,jt,It.data):e.texImage2D(n.TEXTURE_2D,K,ee,It.width,It.height,0,Pt,jt,It.data)}else if(y.isDataArrayTexture)if(ue){if(qe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,ee,ut.width,ut.height,ut.depth),H)if(y.layerUpdates.size>0){let K=fu(ut.width,ut.height,y.format,y.type);for(let ot of y.layerUpdates){let xt=ut.data.subarray(ot*K/ut.data.BYTES_PER_ELEMENT,(ot+1)*K/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,ut.width,ut.height,1,Pt,jt,xt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Pt,jt,ut.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ee,ut.width,ut.height,ut.depth,0,Pt,jt,ut.data);else if(y.isData3DTexture)ue?(qe&&e.texStorage3D(n.TEXTURE_3D,_t,ee,ut.width,ut.height,ut.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Pt,jt,ut.data)):e.texImage3D(n.TEXTURE_3D,0,ee,ut.width,ut.height,ut.depth,0,Pt,jt,ut.data);else if(y.isFramebufferTexture){if(qe)if(ue)e.texStorage2D(n.TEXTURE_2D,_t,ee,ut.width,ut.height);else{let K=ut.width,ot=ut.height;for(let xt=0;xt<_t;xt++)e.texImage2D(n.TEXTURE_2D,xt,ee,K,ot,0,Pt,jt,null),K>>=1,ot>>=1}}else if(_e.length>0){if(ue&&qe){let K=Mt(_e[0]);e.texStorage2D(n.TEXTURE_2D,_t,ee,K.width,K.height)}for(let K=0,ot=_e.length;K<ot;K++)It=_e[K],ue?H&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Pt,jt,It):e.texImage2D(n.TEXTURE_2D,K,ee,Pt,jt,It);y.generateMipmaps=!1}else if(ue){if(qe){let K=Mt(ut);e.texStorage2D(n.TEXTURE_2D,_t,ee,K.width,K.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,jt,ut)}else e.texImage2D(n.TEXTURE_2D,0,ee,Pt,jt,ut);m(y)&&p(st),zt.__version=nt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function dt(w,y,X){if(y.image.length!==6)return;let st=be(w,y),lt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+X);let nt=i.get(lt);if(lt.version!==nt.__version||st===!0){e.activeTexture(n.TEXTURE0+X);let zt=Ae.getPrimaries(Ae.workingColorSpace),At=y.colorSpace===Ls?null:Ae.getPrimaries(y.colorSpace),Ft=y.colorSpace===Ls||zt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let Te=y.isCompressedTexture||y.image[0].isCompressedTexture,ut=y.image[0]&&y.image[0].isDataTexture,Pt=[];for(let ot=0;ot<6;ot++)!Te&&!ut?Pt[ot]=E(y.image[ot],!0,s.maxCubemapSize):Pt[ot]=ut?y.image[ot].image:y.image[ot],Pt[ot]=Tt(y,Pt[ot]);let jt=Pt[0],ee=o.convert(y.format,y.colorSpace),It=o.convert(y.type),_e=M(y.internalFormat,ee,It,y.colorSpace),ue=y.isVideoTexture!==!0,qe=nt.__version===void 0||st===!0,H=lt.dataReady,_t=C(y,jt);Jt(n.TEXTURE_CUBE_MAP,y);let K;if(Te){ue&&qe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,_e,jt.width,jt.height);for(let ot=0;ot<6;ot++){K=Pt[ot].mipmaps;for(let xt=0;xt<K.length;xt++){let St=K[xt];y.format!==jn?ee!==null?ue?H&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt,0,0,St.width,St.height,ee,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt,_e,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt,0,0,St.width,St.height,ee,It,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt,_e,St.width,St.height,0,ee,It,St.data)}}}else{if(K=y.mipmaps,ue&&qe){K.length>0&&_t++;let ot=Mt(Pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,_e,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ut){ue?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Pt[ot].width,Pt[ot].height,ee,It,Pt[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,_e,Pt[ot].width,Pt[ot].height,0,ee,It,Pt[ot].data);for(let xt=0;xt<K.length;xt++){let le=K[xt].image[ot].image;ue?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt+1,0,0,le.width,le.height,ee,It,le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt+1,_e,le.width,le.height,0,ee,It,le.data)}}else{ue?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,ee,It,Pt[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,_e,ee,It,Pt[ot]);for(let xt=0;xt<K.length;xt++){let St=K[xt];ue?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt+1,0,0,ee,It,St.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt+1,_e,ee,It,St.image[ot])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),nt.__version=lt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Lt(w,y,X,st,lt,nt){let zt=o.convert(X.format,X.colorSpace),At=o.convert(X.type),Ft=M(X.internalFormat,zt,At,X.colorSpace),Te=i.get(y),ut=i.get(X);if(ut.__renderTarget=y,!Te.__hasExternalTextures){let Pt=Math.max(1,y.width>>nt),jt=Math.max(1,y.height>>nt);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,nt,Ft,Pt,jt,y.depth,0,zt,At,null):e.texImage2D(lt,nt,Ft,Pt,jt,0,zt,At,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,lt,ut.__webglTexture,0,ge(y)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,lt,ut.__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(w,y,X){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){let st=y.depthTexture,lt=st&&st.isDepthTexture?st.type:null,nt=v(y.stencilBuffer,lt),zt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=ge(y);ye(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,nt,y.width,y.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,nt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,nt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,zt,n.RENDERBUFFER,w)}else{let st=y.textures;for(let lt=0;lt<st.length;lt++){let nt=st[lt],zt=o.convert(nt.format,nt.colorSpace),At=o.convert(nt.type),Ft=M(nt.internalFormat,zt,At,nt.colorSpace),Te=ge(y);X&&ye(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Ft,y.width,y.height):ye(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,Ft,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ft,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Wt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=i.get(y.depthTexture);st.__renderTarget=y,(!st.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k(y.depthTexture,0);let lt=st.__webglTexture,nt=ge(y);if(y.depthTexture.format===tr)ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0);else if(y.depthTexture.format===lr)ye(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function te(w){let y=i.get(w),X=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let st=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),st){let lt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,st.removeEventListener("dispose",lt)};st.addEventListener("dispose",lt),y.__depthDisposeCallback=lt}y.__boundDepthTexture=st}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Wt(y.__webglFramebuffer,w)}else if(X){y.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[st]),y.__webglDepthbuffer[st]===void 0)y.__webglDepthbuffer[st]=n.createRenderbuffer(),vt(y.__webglDepthbuffer[st],w,!1);else{let lt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),vt(y.__webglDepthbuffer,w,!1);else{let st=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,lt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function de(w,y,X){let st=i.get(w);y!==void 0&&Lt(st.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&te(w)}function Ue(w){let y=w.texture,X=i.get(w),st=i.get(y);w.addEventListener("dispose",x);let lt=w.textures,nt=w.isWebGLCubeRenderTarget===!0,zt=lt.length>1;if(zt||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=y.version,r.memory.textures++),nt){X.__webglFramebuffer=[];for(let At=0;At<6;At++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[At]=[];for(let Ft=0;Ft<y.mipmaps.length;Ft++)X.__webglFramebuffer[At][Ft]=n.createFramebuffer()}else X.__webglFramebuffer[At]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let At=0;At<y.mipmaps.length;At++)X.__webglFramebuffer[At]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(zt)for(let At=0,Ft=lt.length;At<Ft;At++){let Te=i.get(lt[At]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),r.memory.textures++)}if(w.samples>0&&ye(w)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let At=0;At<lt.length;At++){let Ft=lt[At];X.__webglColorRenderbuffer[At]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[At]);let Te=o.convert(Ft.format,Ft.colorSpace),ut=o.convert(Ft.type),Pt=M(Ft.internalFormat,Te,ut,Ft.colorSpace,w.isXRRenderTarget===!0),jt=ge(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,Pt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,X.__webglColorRenderbuffer[At])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(X.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,y);for(let At=0;At<6;At++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ft=0;Ft<y.mipmaps.length;Ft++)Lt(X.__webglFramebuffer[At][Ft],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ft);else Lt(X.__webglFramebuffer[At],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);m(y)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let At=0,Ft=lt.length;At<Ft;At++){let Te=lt[At],ut=i.get(Te);e.bindTexture(n.TEXTURE_2D,ut.__webglTexture),Jt(n.TEXTURE_2D,Te),Lt(X.__webglFramebuffer,w,Te,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,0),m(Te)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let At=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(At=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(At,st.__webglTexture),Jt(At,y),y.mipmaps&&y.mipmaps.length>0)for(let Ft=0;Ft<y.mipmaps.length;Ft++)Lt(X.__webglFramebuffer[Ft],w,y,n.COLOR_ATTACHMENT0,At,Ft);else Lt(X.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,At,0);m(y)&&p(At),e.unbindTexture()}w.depthBuffer&&te(w)}function me(w){let y=w.textures;for(let X=0,st=y.length;X<st;X++){let lt=y[X];if(m(lt)){let nt=b(w),zt=i.get(lt).__webglTexture;e.bindTexture(nt,zt),p(nt),e.unbindTexture()}}}let en=[],N=[];function Hn(w){if(w.samples>0){if(ye(w)===!1){let y=w.textures,X=w.width,st=w.height,lt=n.COLOR_BUFFER_BIT,nt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,zt=i.get(w),At=y.length>1;if(At)for(let Ft=0;Ft<y.length;Ft++)e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Ft=0;Ft<y.length;Ft++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),At){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,zt.__webglColorRenderbuffer[Ft]);let Te=i.get(y[Ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,X,st,0,0,X,st,lt,n.NEAREST),l===!0&&(en.length=0,N.length=0,en.push(n.COLOR_ATTACHMENT0+Ft),w.depthBuffer&&w.resolveDepthBuffer===!1&&(en.push(nt),N.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,en))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),At)for(let Ft=0;Ft<y.length;Ft++){e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,zt.__webglColorRenderbuffer[Ft]);let Te=i.get(y[Ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,zt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,Te,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ge(w){return Math.min(s.maxSamples,w.samples)}function ye(w){let y=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Zt(w){let y=r.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Tt(w,y){let X=w.colorSpace,st=w.format,lt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||X!==Ns&&X!==Ls&&(Ae.getTransfer(X)===ze?(st!==jn||lt!==as)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}function Mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=Z,this.setTexture2D=k,this.setTexture2DArray=O,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=de,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Hn,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=ye}function ZE(n,t){function e(i,s=Ls){let o,r=Ae.getTransfer(s);if(i===as)return n.UNSIGNED_BYTE;if(i===uh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ru)return n.BYTE;if(i===xu)return n.SHORT;if(i===$r)return n.UNSIGNED_SHORT;if(i===dh)return n.INT;if(i===ls)return n.UNSIGNED_INT;if(i===ss)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===Cu)return n.ALPHA;if(i===Fu)return n.RGB;if(i===jn)return n.RGBA;if(i===Pu)return n.LUMINANCE;if(i===Iu)return n.LUMINANCE_ALPHA;if(i===tr)return n.DEPTH_COMPONENT;if(i===lr)return n.DEPTH_STENCIL;if(i===Du)return n.RED;if(i===ph)return n.RED_INTEGER;if(i===Lu)return n.RG;if(i===mh)return n.RG_INTEGER;if(i===gh)return n.RGBA_INTEGER;if(i===Ya||i===Za||i===$a||i===Ja)if(r===ze)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ya)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ya)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Za)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$a)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ja)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===Ql||i===jl||i===tc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Kl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ql)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ec||i===nc||i===ic)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ec||i===nc)return r===ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ic)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sc||i===oc||i===rc||i===ac||i===lc||i===cc||i===hc||i===dc||i===uc||i===fc||i===pc||i===mc||i===gc||i===Ec)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===sc)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oc)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lc)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hc)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dc)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uc)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pc)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mc)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gc)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return r===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ka||i===vc||i===yc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Ka)return r===ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bu||i===Mc||i===_c||i===bc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ka)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Mc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_c)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Nc=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},J=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},$E={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new J,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new J,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new J,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let E of t.hand.values()){let m=e.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($E)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new J;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},JE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KE=`
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

}`,zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Wn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new un({vertexShader:JE,fragmentShader:KE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new bt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oc=class extends Us{constructor(t,e){super();let i=this,s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,E=new zc,m=e.getContextAttributes(),p=null,b=null,M=[],v=[],C=new ht,S=null,x=new xn;x.viewport=new ke;let F=new xn;F.viewport=new ke;let R=[x,F],T=new Nc,D=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let dt=M[j];return dt===void 0&&(dt=new qr,M[j]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(j){let dt=M[j];return dt===void 0&&(dt=new qr,M[j]=dt),dt.getGripSpace()},this.getHand=function(j){let dt=M[j];return dt===void 0&&(dt=new qr,M[j]=dt),dt.getHandSpace()};function G(j){let dt=v.indexOf(j.inputSource);if(dt===-1)return;let Lt=M[dt];Lt!==void 0&&(Lt.update(j.inputSource,j.frame,c||r),Lt.dispatchEvent({type:j.type,data:j.inputSource}))}function L(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",k);for(let j=0;j<M.length;j++){let dt=v[j];dt!==null&&(v[j]=null,M[j].disconnect(dt))}D=null,Z=null,E.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,b=null,be.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",L),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new _n(f.framebufferWidth,f.framebufferHeight,{format:jn,type:as,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let dt=null,Lt=null,vt=null;m.depth&&(vt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=m.stencil?lr:tr,Lt=m.stencil?ar:ls);let Wt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:o};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new _n(u.textureWidth,u.textureHeight,{format:jn,type:as,depthTexture:new ur(u.textureWidth,u.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),be.setContext(s),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function k(j){for(let dt=0;dt<j.removed.length;dt++){let Lt=j.removed[dt],vt=v.indexOf(Lt);vt>=0&&(v[vt]=null,M[vt].disconnect(Lt))}for(let dt=0;dt<j.added.length;dt++){let Lt=j.added[dt],vt=v.indexOf(Lt);if(vt===-1){for(let te=0;te<M.length;te++)if(te>=v.length){v.push(Lt),vt=te;break}else if(v[te]===null){v[te]=Lt,vt=te;break}if(vt===-1)break}let Wt=M[vt];Wt&&Wt.connect(Lt)}}let O=new _,Q=new _;function W(j,dt,Lt){O.setFromMatrixPosition(dt.matrixWorld),Q.setFromMatrixPosition(Lt.matrixWorld);let vt=O.distanceTo(Q),Wt=dt.projectionMatrix.elements,te=Lt.projectionMatrix.elements,de=Wt[14]/(Wt[10]-1),Ue=Wt[14]/(Wt[10]+1),me=(Wt[9]+1)/Wt[5],en=(Wt[9]-1)/Wt[5],N=(Wt[8]-1)/Wt[0],Hn=(te[8]+1)/te[0],ge=de*N,ye=de*Hn,Zt=vt/(-N+Hn),Tt=Zt*-N;if(dt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Tt),j.translateZ(Zt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Wt[10]===-1)j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{let Mt=de+Zt,w=Ue+Zt,y=ge-Tt,X=ye+(vt-Tt),st=me*Ue/w*Mt,lt=en*Ue/w*Mt;j.projectionMatrix.makePerspective(y,X,st,lt,Mt,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function rt(j,dt){dt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(dt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let dt=j.near,Lt=j.far;E.texture!==null&&(E.depthNear>0&&(dt=E.depthNear),E.depthFar>0&&(Lt=E.depthFar)),T.near=F.near=x.near=dt,T.far=F.far=x.far=Lt,(D!==T.near||Z!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,Z=T.far),x.layers.mask=j.layers.mask|2,F.layers.mask=j.layers.mask|4,T.layers.mask=x.layers.mask|F.layers.mask;let vt=j.parent,Wt=T.cameras;rt(T,vt);for(let te=0;te<Wt.length;te++)rt(Wt[te],vt);Wt.length===2?W(T,x,F):T.projectionMatrix.copy(x.projectionMatrix),gt(j,T,vt)};function gt(j,dt,Lt){Lt===null?j.matrix.copy(dt.matrixWorld):(j.matrix.copy(Lt.matrixWorld),j.matrix.invert(),j.matrix.multiply(dt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=t0*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(T)};let Ct=null;function Jt(j,dt){if(h=dt.getViewerPose(c||r),g=dt,h!==null){let Lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let vt=!1;Lt.length!==T.cameras.length&&(T.cameras.length=0,vt=!0);for(let te=0;te<Lt.length;te++){let de=Lt[te],Ue=null;if(f!==null)Ue=f.getViewport(de);else{let en=d.getViewSubImage(u,de);Ue=en.viewport,te===0&&(t.setRenderTargetTextures(b,en.colorTexture,u.ignoreDepthValues?void 0:en.depthStencilTexture),t.setRenderTarget(b))}let me=R[te];me===void 0&&(me=new xn,me.layers.enable(te),me.viewport=new ke,R[te]=me),me.matrix.fromArray(de.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(de.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),te===0&&(T.matrix.copy(me.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),vt===!0&&T.cameras.push(me)}let Wt=s.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")){let te=d.getDepthInformation(Lt[0]);te&&te.isValid&&te.texture&&E.init(t,te,s.renderState)}}for(let Lt=0;Lt<M.length;Lt++){let vt=v[Lt],Wt=M[Lt];vt!==null&&Wt!==void 0&&Wt.update(vt,dt,c||r)}Ct&&Ct(j,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),g=null}let be=new ku;be.setAnimationLoop(Jt),this.setAnimationLoop=function(j){Ct=j},this.dispose=function(){}}},io=new cs,QE=new Ie;function jE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ou(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),E(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),M=b.envMap,v=b.envMapRotation;M&&(m.envMap.value=M,io.copy(v),io.x*=-1,io.y*=-1,io.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(io.y*=-1,io.z*=-1),m.envMapRotation.value.setFromMatrix4(QE.makeRotationFromEuler(io)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function t3(n,t,e,i){let s={},o={},r=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let v=M.program;i.uniformBlockBinding(b,v)}function c(b,M){let v=s[b.id];v===void 0&&(g(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",m));let C=M.program;i.updateUBOMapping(b,C);let S=t.render.frame;o[b.id]!==S&&(u(b),o[b.id]=S)}function h(b){let M=d();b.__bindingPointIndex=M;let v=n.createBuffer(),C=b.__size,S=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function d(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let M=s[b.id],v=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let S=0,x=v.length;S<x;S++){let F=Array.isArray(v[S])?v[S]:[v[S]];for(let R=0,T=F.length;R<T;R++){let D=F[R];if(f(D,S,R,C)===!0){let Z=D.__offset,G=Array.isArray(D.value)?D.value:[D.value],L=0;for(let k=0;k<G.length;k++){let O=G[k],Q=E(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,Z+L,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,L),L+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,M,v,C){let S=b.value,x=M+"_"+v;if(C[x]===void 0)return typeof S=="number"||typeof S=="boolean"?C[x]=S:C[x]=S.clone(),!0;{let F=C[x];if(typeof S=="number"||typeof S=="boolean"){if(F!==S)return C[x]=S,!0}else if(F.equals(S)===!1)return F.copy(S),!0}return!1}function g(b){let M=b.uniforms,v=0,C=16;for(let x=0,F=M.length;x<F;x++){let R=Array.isArray(M[x])?M[x]:[M[x]];for(let T=0,D=R.length;T<D;T++){let Z=R[T],G=Array.isArray(Z.value)?Z.value:[Z.value];for(let L=0,k=G.length;L<k;L++){let O=G[L],Q=E(O),W=v%C,rt=W%Q.boundary,gt=W+rt;v+=rt,gt!==0&&C-gt<Q.storage&&(v+=C-gt),Z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=v,v+=Q.storage}}}let S=v%C;return S>0&&(v+=C-S),b.__size=v,b.__cache={},this}function E(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){let M=b.target;M.removeEventListener("dispose",m);let v=r.indexOf(M.__bindingPointIndex);r.splice(v,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(let b in s)n.deleteBuffer(s[b]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}var d0=class{constructor(t={}){let{canvas:e=o1(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;let g=new Uint32Array(4),E=new Int32Array(4),m=null,p=null,b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=zi,this.toneMappingExposure=1;let v=this,C=!1,S=0,x=0,F=null,R=-1,T=null,D=new ke,Z=new ke,G=null,L=new wt(0),k=0,O=e.width,Q=e.height,W=1,rt=null,gt=null,Ct=new ke(0,0,O,Q),Jt=new ke(0,0,O,Q),be=!1,j=new Jr,dt=!1,Lt=!1,vt=new Ie,Wt=new Ie,te=new _,de=new ke,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function en(){return F===null?W:1}let N=i;function Hn(A,U){return e.getContext(A,U)}try{let A={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ch}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",St,!1),N===null){let U="webgl2";if(N=Hn(U,A),N===null)throw Hn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ge,ye,Zt,Tt,Mt,w,y,X,st,lt,nt,zt,At,Ft,Te,ut,Pt,jt,ee,It,_e,ue,qe,H;function _t(){ge=new gg(N),ge.init(),ue=new ZE(N,ge),ye=new hg(N,ge,t,ue),Zt=new XE(N,ge),ye.reverseDepthBuffer&&u&&Zt.buffers.depth.setReversed(!0),Tt=new yg(N),Mt=new IE,w=new YE(N,ge,Zt,Mt,ye,ue,Tt),y=new ug(v),X=new mg(v),st=new R1(N),qe=new lg(N,st),lt=new Eg(N,st,Tt,qe),nt=new _g(N,lt,st,Tt),ee=new Mg(N,ye,w),ut=new dg(Mt),zt=new PE(v,y,X,ge,ye,qe,ut),At=new jE(v,Mt),Ft=new LE,Te=new OE(ge),jt=new ag(v,y,X,Zt,nt,f,l),Pt=new VE(v,nt,ye),H=new t3(N,Tt,ye,Zt),It=new cg(N,ge,Tt),_e=new vg(N,ge,Tt),Tt.programs=zt.programs,v.capabilities=ye,v.extensions=ge,v.properties=Mt,v.renderLists=Ft,v.shadowMap=Pt,v.state=Zt,v.info=Tt}_t();let K=new Oc(v,N);this.xr=K,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(O,Q,!1))},this.getSize=function(A){return A.set(O,Q)},this.setSize=function(A,U,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,Q=U,e.width=Math.floor(A*W),e.height=Math.floor(U*W),q===!0&&(e.style.width=A+"px",e.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(O*W,Q*W).floor()},this.setDrawingBufferSize=function(A,U,q){O=A,Q=U,W=q,e.width=Math.floor(A*q),e.height=Math.floor(U*q),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Ct)},this.setViewport=function(A,U,q,Y){A.isVector4?Ct.set(A.x,A.y,A.z,A.w):Ct.set(A,U,q,Y),Zt.viewport(D.copy(Ct).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Jt)},this.setScissor=function(A,U,q,Y){A.isVector4?Jt.set(A.x,A.y,A.z,A.w):Jt.set(A,U,q,Y),Zt.scissor(Z.copy(Jt).multiplyScalar(W).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(A){Zt.setScissorTest(be=A)},this.setOpaqueSort=function(A){rt=A},this.setTransparentSort=function(A){gt=A},this.getClearColor=function(A){return A.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(A=!0,U=!0,q=!0){let Y=0;if(A){let z=!1;if(F!==null){let ft=F.texture.format;z=ft===gh||ft===mh||ft===ph}if(z){let ft=F.texture.type,Rt=ft===as||ft===ls||ft===$r||ft===ar||ft===uh||ft===fh,Ht=jt.getClearColor(),Ut=jt.getClearAlpha(),ie=Ht.r,ce=Ht.g,Nt=Ht.b;Rt?(g[0]=ie,g[1]=ce,g[2]=Nt,g[3]=Ut,N.clearBufferuiv(N.COLOR,0,g)):(E[0]=ie,E[1]=ce,E[2]=Nt,E[3]=Ut,N.clearBufferiv(N.COLOR,0,E))}else Y|=N.COLOR_BUFFER_BIT}U&&(Y|=N.DEPTH_BUFFER_BIT),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Ft.dispose(),Te.dispose(),Mt.dispose(),y.dispose(),X.dispose(),nt.dispose(),qe.dispose(),H.dispose(),zt.dispose(),K.dispose(),K.removeEventListener("sessionstart",ld),K.removeEventListener("sessionend",cd),Ks.stop()};function ot(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let A=Tt.autoReset,U=Pt.enabled,q=Pt.autoUpdate,Y=Pt.needsUpdate,z=Pt.type;_t(),Tt.autoReset=A,Pt.enabled=U,Pt.autoUpdate=q,Pt.needsUpdate=Y,Pt.type=z}function St(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){let U=A.target;U.removeEventListener("dispose",le),rn(U)}function rn(A){Pn(A),Mt.remove(A)}function Pn(A){let U=Mt.get(A).programs;U!==void 0&&(U.forEach(function(q){zt.releaseProgram(q)}),A.isShaderMaterial&&zt.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,q,Y,z,ft){U===null&&(U=Ue);let Rt=z.isMesh&&z.matrixWorld.determinant()<0,Ht=mp(A,U,q,Y,z);Zt.setMaterial(Y,Rt);let Ut=q.index,ie=1;if(Y.wireframe===!0){if(Ut=lt.getWireframeAttribute(q),Ut===void 0)return;ie=2}let ce=q.drawRange,Nt=q.attributes.position,Re=ce.start*ie,Ye=(ce.start+ce.count)*ie;ft!==null&&(Re=Math.max(Re,ft.start*ie),Ye=Math.min(Ye,(ft.start+ft.count)*ie)),Ut!==null?(Re=Math.max(Re,0),Ye=Math.min(Ye,Ut.count)):Nt!=null&&(Re=Math.max(Re,0),Ye=Math.min(Ye,Nt.count));let Je=Ye-Re;if(Je<0||Je===1/0)return;qe.setup(z,Y,Ht,q,Ut);let Gn,Fe=It;if(Ut!==null&&(Gn=st.get(Ut),Fe=_e,Fe.setIndex(Gn)),z.isMesh)Y.wireframe===!0?(Zt.setLineWidth(Y.wireframeLinewidth*en()),Fe.setMode(N.LINES)):Fe.setMode(N.TRIANGLES);else if(z.isLine){let Ot=Y.linewidth;Ot===void 0&&(Ot=1),Zt.setLineWidth(Ot*en()),z.isLineSegments?Fe.setMode(N.LINES):z.isLineLoop?Fe.setMode(N.LINE_LOOP):Fe.setMode(N.LINE_STRIP)}else z.isPoints?Fe.setMode(N.POINTS):z.isSprite&&Fe.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Fe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Fe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ot=z._multiDrawStarts,Ji=z._multiDrawCounts,Pe=z._multiDrawCount,vi=Ut?st.get(Ut).bytesPerElement:1,Do=Mt.get(Y).currentProgram.getUniforms();for(let Jn=0;Jn<Pe;Jn++)Do.setValue(N,"_gl_DrawID",Jn),Fe.render(Ot[Jn]/vi,Ji[Jn])}else if(z.isInstancedMesh)Fe.renderInstances(Re,Je,z.count);else if(q.isInstancedBufferGeometry){let Ot=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ji=Math.min(q.instanceCount,Ot);Fe.renderInstances(Re,Je,Ji)}else Fe.render(Re,Je)};function Ne(A,U,q){A.transparent===!0&&A.side===Ze&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,va(A,U,q),A.side=Oi,A.needsUpdate=!0,va(A,U,q),A.side=Ze):va(A,U,q)}this.compile=function(A,U,q=null){q===null&&(q=A),p=Te.get(q),p.init(U),M.push(p),q.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==q&&A.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let Y=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ft=z.material;if(ft)if(Array.isArray(ft))for(let Rt=0;Rt<ft.length;Rt++){let Ht=ft[Rt];Ne(Ht,q,z),Y.add(Ht)}else Ne(ft,q,z),Y.add(ft)}),M.pop(),p=null,Y},this.compileAsync=function(A,U,q=null){let Y=this.compile(A,U,q);return new Promise(z=>{function ft(){if(Y.forEach(function(Rt){Mt.get(Rt).currentProgram.isReady()&&Y.delete(Rt)}),Y.size===0){z(A);return}setTimeout(ft,10)}ge.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ei=null;function $i(A){Ei&&Ei(A)}function ld(){Ks.stop()}function cd(){Ks.start()}let Ks=new ku;Ks.setAnimationLoop($i),typeof self<"u"&&Ks.setContext(self),this.setAnimationLoop=function(A){Ei=A,K.setAnimationLoop(A),A===null?Ks.stop():Ks.start()},K.addEventListener("sessionstart",ld),K.addEventListener("sessionend",cd),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,U,F),p=Te.get(A,M.length),p.init(U),M.push(p),Wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Wt),Lt=this.localClippingEnabled,dt=ut.init(this.clippingPlanes,Lt),m=Ft.get(A,b.length),m.init(),b.push(m),K.enabled===!0&&K.isPresenting===!0){let ft=v.xr.getDepthSensingMesh();ft!==null&&nl(ft,U,-1/0,v.sortObjects)}nl(A,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(rt,gt),me=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,me&&jt.addToRenderList(m,A),this.info.render.frame++,dt===!0&&ut.beginShadows();let q=p.state.shadowsArray;Pt.render(q,A,U),dt===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,z=m.transmissive;if(p.setupLights(),U.isArrayCamera){let ft=U.cameras;if(z.length>0)for(let Rt=0,Ht=ft.length;Rt<Ht;Rt++){let Ut=ft[Rt];dd(Y,z,A,Ut)}me&&jt.render(A);for(let Rt=0,Ht=ft.length;Rt<Ht;Rt++){let Ut=ft[Rt];hd(m,A,Ut,Ut.viewport)}}else z.length>0&&dd(Y,z,A,U),me&&jt.render(A),hd(m,A,U);F!==null&&(w.updateMultisampleRenderTarget(F),w.updateRenderTargetMipmap(F)),A.isScene===!0&&A.onAfterRender(v,A,U),qe.resetDefaultState(),R=-1,T=null,M.pop(),M.length>0?(p=M[M.length-1],dt===!0&&ut.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function nl(A,U,q,Y){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){Y&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Wt);let Rt=nt.update(A),Ht=A.material;Ht.visible&&m.push(A,Rt,Ht,q,de.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){let Rt=nt.update(A),Ht=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),de.copy(Rt.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4(Wt)),Array.isArray(Ht)){let Ut=Rt.groups;for(let ie=0,ce=Ut.length;ie<ce;ie++){let Nt=Ut[ie],Re=Ht[Nt.materialIndex];Re&&Re.visible&&m.push(A,Rt,Re,q,de.z,Nt)}}else Ht.visible&&m.push(A,Rt,Ht,q,de.z,null)}}let ft=A.children;for(let Rt=0,Ht=ft.length;Rt<Ht;Rt++)nl(ft[Rt],U,q,Y)}function hd(A,U,q,Y){let z=A.opaque,ft=A.transmissive,Rt=A.transparent;p.setupLightsView(q),dt===!0&&ut.setGlobalState(v.clippingPlanes,q),Y&&Zt.viewport(D.copy(Y)),z.length>0&&Ea(z,U,q),ft.length>0&&Ea(ft,U,q),Rt.length>0&&Ea(Rt,U,q),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function dd(A,U,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new _n(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?qn:as,minFilter:lo,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));let ft=p.state.transmissionRenderTarget[Y.id],Rt=Y.viewport||D;ft.setSize(Rt.z,Rt.w);let Ht=v.getRenderTarget();v.setRenderTarget(ft),v.getClearColor(L),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),me&&jt.render(q);let Ut=v.toneMapping;v.toneMapping=zi;let ie=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),dt===!0&&ut.setGlobalState(v.clippingPlanes,Y),Ea(A,q,Y),w.updateMultisampleRenderTarget(ft),w.updateRenderTargetMipmap(ft),ge.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Nt=0,Re=U.length;Nt<Re;Nt++){let Ye=U[Nt],Je=Ye.object,Gn=Ye.geometry,Fe=Ye.material,Ot=Ye.group;if(Fe.side===Ze&&Je.layers.test(Y.layers)){let Ji=Fe.side;Fe.side=dn,Fe.needsUpdate=!0,ud(Je,q,Y,Gn,Fe,Ot),Fe.side=Ji,Fe.needsUpdate=!0,ce=!0}}ce===!0&&(w.updateMultisampleRenderTarget(ft),w.updateRenderTargetMipmap(ft))}v.setRenderTarget(Ht),v.setClearColor(L,k),ie!==void 0&&(Y.viewport=ie),v.toneMapping=Ut}function Ea(A,U,q){let Y=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ft=A.length;z<ft;z++){let Rt=A[z],Ht=Rt.object,Ut=Rt.geometry,ie=Y===null?Rt.material:Y,ce=Rt.group;Ht.layers.test(q.layers)&&ud(Ht,U,q,Ut,ie,ce)}}function ud(A,U,q,Y,z,ft){A.onBeforeRender(v,U,q,Y,z,ft),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(v,U,q,Y,A,ft),z.transparent===!0&&z.side===Ze&&z.forceSinglePass===!1?(z.side=dn,z.needsUpdate=!0,v.renderBufferDirect(q,U,Y,z,A,ft),z.side=Oi,z.needsUpdate=!0,v.renderBufferDirect(q,U,Y,z,A,ft),z.side=Ze):v.renderBufferDirect(q,U,Y,z,A,ft),A.onAfterRender(v,U,q,Y,z,ft)}function va(A,U,q){U.isScene!==!0&&(U=Ue);let Y=Mt.get(A),z=p.state.lights,ft=p.state.shadowsArray,Rt=z.state.version,Ht=zt.getParameters(A,z.state,ft,U,q),Ut=zt.getProgramCacheKey(Ht),ie=Y.programs;Y.environment=A.isMeshStandardMaterial?U.environment:null,Y.fog=U.fog,Y.envMap=(A.isMeshStandardMaterial?X:y).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,ie===void 0&&(A.addEventListener("dispose",le),ie=new Map,Y.programs=ie);let ce=ie.get(Ut);if(ce!==void 0){if(Y.currentProgram===ce&&Y.lightsStateVersion===Rt)return pd(A,Ht),ce}else Ht.uniforms=zt.getUniforms(A),A.onBeforeCompile(Ht,v),ce=zt.acquireProgram(Ht,Ut),ie.set(Ut,ce),Y.uniforms=Ht.uniforms;let Nt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Nt.clippingPlanes=ut.uniform),pd(A,Ht),Y.needsLights=Ep(A),Y.lightsStateVersion=Rt,Y.needsLights&&(Nt.ambientLightColor.value=z.state.ambient,Nt.lightProbe.value=z.state.probe,Nt.directionalLights.value=z.state.directional,Nt.directionalLightShadows.value=z.state.directionalShadow,Nt.spotLights.value=z.state.spot,Nt.spotLightShadows.value=z.state.spotShadow,Nt.rectAreaLights.value=z.state.rectArea,Nt.ltc_1.value=z.state.rectAreaLTC1,Nt.ltc_2.value=z.state.rectAreaLTC2,Nt.pointLights.value=z.state.point,Nt.pointLightShadows.value=z.state.pointShadow,Nt.hemisphereLights.value=z.state.hemi,Nt.directionalShadowMap.value=z.state.directionalShadowMap,Nt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Nt.spotShadowMap.value=z.state.spotShadowMap,Nt.spotLightMatrix.value=z.state.spotLightMatrix,Nt.spotLightMap.value=z.state.spotLightMap,Nt.pointShadowMap.value=z.state.pointShadowMap,Nt.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=ce,Y.uniformsList=null,ce}function fd(A){if(A.uniformsList===null){let U=A.currentProgram.getUniforms();A.uniformsList=nr.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function pd(A,U){let q=Mt.get(A);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function mp(A,U,q,Y,z){U.isScene!==!0&&(U=Ue),w.resetTextureUnits();let ft=U.fog,Rt=Y.isMeshStandardMaterial?U.environment:null,Ht=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ns,Ut=(Y.isMeshStandardMaterial?X:y).get(Y.envMap||Rt),ie=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ce=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Nt=!!q.morphAttributes.position,Re=!!q.morphAttributes.normal,Ye=!!q.morphAttributes.color,Je=zi;Y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Je=v.toneMapping);let Gn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Fe=Gn!==void 0?Gn.length:0,Ot=Mt.get(Y),Ji=p.state.lights;if(dt===!0&&(Lt===!0||A!==T)){let ri=A===T&&Y.id===R;ut.setState(Y,A,ri)}let Pe=!1;Y.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ji.state.version||Ot.outputColorSpace!==Ht||z.isBatchedMesh&&Ot.batching===!1||!z.isBatchedMesh&&Ot.batching===!0||z.isBatchedMesh&&Ot.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ot.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ot.instancing===!1||!z.isInstancedMesh&&Ot.instancing===!0||z.isSkinnedMesh&&Ot.skinning===!1||!z.isSkinnedMesh&&Ot.skinning===!0||z.isInstancedMesh&&Ot.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ot.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ot.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ot.instancingMorph===!1&&z.morphTexture!==null||Ot.envMap!==Ut||Y.fog===!0&&Ot.fog!==ft||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ut.numPlanes||Ot.numIntersection!==ut.numIntersection)||Ot.vertexAlphas!==ie||Ot.vertexTangents!==ce||Ot.morphTargets!==Nt||Ot.morphNormals!==Re||Ot.morphColors!==Ye||Ot.toneMapping!==Je||Ot.morphTargetsCount!==Fe)&&(Pe=!0):(Pe=!0,Ot.__version=Y.version);let vi=Ot.currentProgram;Pe===!0&&(vi=va(Y,U,z));let Do=!1,Jn=!1,Lr=!1,Ke=vi.getUniforms(),Li=Ot.uniforms;if(Zt.useProgram(vi.program)&&(Do=!0,Jn=!0,Lr=!0),Y.id!==R&&(R=Y.id,Jn=!0),Do||T!==A){Zt.buffers.depth.getReversed()?(vt.copy(A.projectionMatrix),a1(vt),l1(vt),Ke.setValue(N,"projectionMatrix",vt)):Ke.setValue(N,"projectionMatrix",A.projectionMatrix),Ke.setValue(N,"viewMatrix",A.matrixWorldInverse);let Rs=Ke.map.cameraPosition;Rs!==void 0&&Rs.setValue(N,te.setFromMatrixPosition(A.matrixWorld)),ye.logarithmicDepthBuffer&&Ke.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ke.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Jn=!0,Lr=!0)}if(z.isSkinnedMesh){Ke.setOptional(N,z,"bindMatrix"),Ke.setOptional(N,z,"bindMatrixInverse");let ri=z.skeleton;ri&&(ri.boneTexture===null&&ri.computeBoneTexture(),Ke.setValue(N,"boneTexture",ri.boneTexture,w))}z.isBatchedMesh&&(Ke.setOptional(N,z,"batchingTexture"),Ke.setValue(N,"batchingTexture",z._matricesTexture,w),Ke.setOptional(N,z,"batchingIdTexture"),Ke.setValue(N,"batchingIdTexture",z._indirectTexture,w),Ke.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&Ke.setValue(N,"batchingColorTexture",z._colorsTexture,w));let Br=q.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0)&&ee.update(z,q,vi),(Jn||Ot.receiveShadow!==z.receiveShadow)&&(Ot.receiveShadow=z.receiveShadow,Ke.setValue(N,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Li.envMap.value=Ut,Li.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&U.environment!==null&&(Li.envMapIntensity.value=U.environmentIntensity),Jn&&(Ke.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&gp(Li,Lr),ft&&Y.fog===!0&&At.refreshFogUniforms(Li,ft),At.refreshMaterialUniforms(Li,Y,W,Q,p.state.transmissionRenderTarget[A.id]),nr.upload(N,fd(Ot),Li,w)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(nr.upload(N,fd(Ot),Li,w),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ke.setValue(N,"center",z.center),Ke.setValue(N,"modelViewMatrix",z.modelViewMatrix),Ke.setValue(N,"normalMatrix",z.normalMatrix),Ke.setValue(N,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let ri=Y.uniformsGroups;for(let Rs=0,xs=ri.length;Rs<xs;Rs++){let md=ri[Rs];H.update(md,vi),H.bind(md,vi)}}return vi}function gp(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Ep(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,U,q){Mt.get(A.texture).__webglTexture=U,Mt.get(A.depthTexture).__webglTexture=q;let Y=Mt.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){let q=Mt.get(A);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,q=0){F=A,S=U,x=q;let Y=!0,z=null,ft=!1,Rt=!1;if(A){let Ut=Mt.get(A);if(Ut.__useDefaultFramebuffer!==void 0)Zt.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(Ut.__webglFramebuffer===void 0)w.setupRenderTarget(A);else if(Ut.__hasExternalTextures)w.rebindTextures(A,Mt.get(A.texture).__webglTexture,Mt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Nt=A.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&Mt.has(Nt)&&(A.width!==Nt.image.width||A.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(A)}}let ie=A.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Rt=!0);let ce=Mt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ce[U])?z=ce[U][q]:z=ce[U],ft=!0):A.samples>0&&w.useMultisampledRTT(A)===!1?z=Mt.get(A).__webglMultisampledFramebuffer:Array.isArray(ce)?z=ce[q]:z=ce,D.copy(A.viewport),Z.copy(A.scissor),G=A.scissorTest}else D.copy(Ct).multiplyScalar(W).floor(),Z.copy(Jt).multiplyScalar(W).floor(),G=be;if(Zt.bindFramebuffer(N.FRAMEBUFFER,z)&&Y&&Zt.drawBuffers(A,z),Zt.viewport(D),Zt.scissor(Z),Zt.setScissorTest(G),ft){let Ut=Mt.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ut.__webglTexture,q)}else if(Rt){let Ut=Mt.get(A.texture),ie=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.__webglTexture,q||0,ie)}R=-1},this.readRenderTargetPixels=function(A,U,q,Y,z,ft,Rt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ht=Ht[Rt]),Ht){Zt.bindFramebuffer(N.FRAMEBUFFER,Ht);try{let Ut=A.texture,ie=Ut.format,ce=Ut.type;if(!ye.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-Y&&q>=0&&q<=A.height-z&&N.readPixels(U,q,Y,z,ue.convert(ie),ue.convert(ce),ft)}finally{let Ut=F!==null?Mt.get(F).__webglFramebuffer:null;Zt.bindFramebuffer(N.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(A,U,q,Y,z,ft,Rt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ht=Ht[Rt]),Ht){let Ut=A.texture,ie=Ut.format,ce=Ut.type;if(!ye.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-Y&&q>=0&&q<=A.height-z){Zt.bindFramebuffer(N.FRAMEBUFFER,Ht);let Nt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Nt),N.bufferData(N.PIXEL_PACK_BUFFER,ft.byteLength,N.STREAM_READ),N.readPixels(U,q,Y,z,ue.convert(ie),ue.convert(ce),0);let Re=F!==null?Mt.get(F).__webglFramebuffer:null;Zt.bindFramebuffer(N.FRAMEBUFFER,Re);let Ye=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await r1(N,Ye,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Nt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ft),N.deleteBuffer(Nt),N.deleteSync(Ye),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,U=null,q=0){A.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);let Y=Math.pow(2,-q),z=Math.floor(A.image.width*Y),ft=Math.floor(A.image.height*Y),Rt=U!==null?U.x:0,Ht=U!==null?U.y:0;w.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Rt,Ht,z,ft),Zt.unbindTexture()},this.copyTextureToTexture=function(A,U,q=null,Y=null,z=0){A.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],U=arguments[2],z=arguments[3]||0,q=null);let ft,Rt,Ht,Ut,ie,ce,Nt,Re,Ye,Je=A.isCompressedTexture?A.mipmaps[z]:A.image;q!==null?(ft=q.max.x-q.min.x,Rt=q.max.y-q.min.y,Ht=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,ie=q.min.y,ce=q.isBox3?q.min.z:0):(ft=Je.width,Rt=Je.height,Ht=Je.depth||1,Ut=0,ie=0,ce=0),Y!==null?(Nt=Y.x,Re=Y.y,Ye=Y.z):(Nt=0,Re=0,Ye=0);let Gn=ue.convert(U.format),Fe=ue.convert(U.type),Ot;U.isData3DTexture?(w.setTexture3D(U,0),Ot=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Ot=N.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Ot=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Ji=N.getParameter(N.UNPACK_ROW_LENGTH),Pe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),vi=N.getParameter(N.UNPACK_SKIP_PIXELS),Do=N.getParameter(N.UNPACK_SKIP_ROWS),Jn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Je.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ut),N.pixelStorei(N.UNPACK_SKIP_ROWS,ie),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ce);let Lr=A.isDataArrayTexture||A.isData3DTexture,Ke=U.isDataArrayTexture||U.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Li=Mt.get(A),Br=Mt.get(U),ri=Mt.get(Li.__renderTarget),Rs=Mt.get(Br.__renderTarget);Zt.bindFramebuffer(N.READ_FRAMEBUFFER,ri.__webglFramebuffer),Zt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let xs=0;xs<Ht;xs++)Lr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(A).__webglTexture,z,ce+xs),A.isDepthTexture?(Ke&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(U).__webglTexture,z,Ye+xs),N.blitFramebuffer(Ut,ie,ft,Rt,Nt,Re,ft,Rt,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ke?N.copyTexSubImage3D(Ot,z,Nt,Re,Ye+xs,Ut,ie,ft,Rt):N.copyTexSubImage2D(Ot,z,Nt,Re,Ye+xs,Ut,ie,ft,Rt);Zt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ke?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Ot,z,Nt,Re,Ye,ft,Rt,Ht,Gn,Fe,Je.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Ot,z,Nt,Re,Ye,ft,Rt,Ht,Gn,Je.data):N.texSubImage3D(Ot,z,Nt,Re,Ye,ft,Rt,Ht,Gn,Fe,Je):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,Nt,Re,ft,Rt,Gn,Fe,Je.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,Nt,Re,Je.width,Je.height,Gn,Je.data):N.texSubImage2D(N.TEXTURE_2D,z,Nt,Re,ft,Rt,Gn,Fe,Je);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ji),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Pe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,vi),N.pixelStorei(N.UNPACK_SKIP_ROWS,Do),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Jn),z===0&&U.generateMipmaps&&N.generateMipmap(Ot),Zt.unbindTexture()},this.copyTextureToTexture3D=function(A,U,q=null,Y=null,z=0){return A.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],U=arguments[3],z=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,U,q,Y,z)},this.initRenderTarget=function(A){Mt.get(A).__webglFramebuffer===void 0&&w.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),Zt.unbindTexture()},this.resetState=function(){S=0,x=0,F=null,Zt.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return os}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}};var fr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ho=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},kc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ac,this.updateRanges=[],this.version=0,this.uuid=Hs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Un=new _,u0=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix4(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.applyNormalMatrix(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.transformDirection(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Hi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array),o=Oe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ti=class extends hs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zo,Or=new _,$o=new _,Jo=new _,Ko=new ht,kr=new ht,qu=new Ie,Oa=new _,Gr=new _,ka=new _,pu=new ht,Dl=new ht,mu=new ht,ci=class extends gn{constructor(t=new ti){if(super(),this.isSprite=!0,this.type="Sprite",Zo===void 0){Zo=new En;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new kc(e,5);Zo.setIndex([0,1,2,0,2,3]),Zo.setAttribute("position",new u0(i,3,0,!1)),Zo.setAttribute("uv",new u0(i,2,3,!1))}this.geometry=Zo,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$o.setFromMatrixScale(this.matrixWorld),qu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Jo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$o.multiplyScalar(-Jo.z);let i=this.material.rotation,s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));let r=this.center;Ga(Oa.set(-.5,-.5,0),Jo,r,$o,s,o),Ga(Gr.set(.5,-.5,0),Jo,r,$o,s,o),Ga(ka.set(.5,.5,0),Jo,r,$o,s,o),pu.set(0,0),Dl.set(1,0),mu.set(1,1);let a=t.ray.intersectTriangle(Oa,Gr,ka,!1,Or);if(a===null&&(Ga(Gr.set(-.5,.5,0),Jo,r,$o,s,o),Dl.set(0,1),a=t.ray.intersectTriangle(Oa,ka,Gr,!1,Or),a===null))return;let l=t.ray.origin.distanceTo(Or);l<t.near||l>t.far||e.push({distance:l,point:Or.clone(),uv:Bs.getInterpolation(Or,Oa,Gr,ka,pu,Dl,mu,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ga(n,t,e,i,s,o){Ko.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(kr.x=o*Ko.x-s*Ko.y,kr.y=s*Ko.x+o*Ko.y):kr.copy(Ko),n.copy(t),n.x+=kr.x,n.y+=kr.y,n.applyMatrix4(qu)}var f0=class extends Wn{constructor(t=null,e=1,i=1,s,o,r,a,l,c=zn,h=zn,d,u){super(null,r,a,l,c,h,s,o,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kr=class extends hs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gu=new Ie,Gc=new s0,Va=new cr,Wa=new _,p0=class extends gn{constructor(t=new En,e=new Kr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),Va.radius+=o,t.ray.intersectsSphere(Va)===!1)return;gu.copy(s).invert(),Gc.copy(t.ray).applyMatrix4(gu);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,E=f;g<E;g++){let m=c.getX(g);Wa.fromBufferAttribute(d,m),Eu(Wa,m,l,s,t,e,this)}}else{let u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,E=f;g<E;g++)Wa.fromBufferAttribute(d,g),Eu(Wa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Eu(n,t,e,i,s,o,r){let a=Gc.distanceSqToPoint(n);if(a<e){let l=new _;Gc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var wn=class extends Wn{constructor(t,e,i,s,o,r,a,l,c){super(t,e,i,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,o=i.length,r;e?r=e:r=t*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(o-1);let h=i[s],u=i[s+1]-h,f=(r-h)/u;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);let r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new ht:new _);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new _,s=[],o=[],r=[],a=new _,l=new Ie;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new _)}o[0]=new _,r[0]=new _;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Rn(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Rn(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qr=class extends hi{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){let i=e,s=Math.PI*2,o=this.aEndAngle-this.aStartAngle,r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);let a=this.aStartAngle+t*o,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Vc=class extends Qr{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}};function vh(){let n=0,t=0,e=0,i=0;function s(o,r,a,l){n=o,t=a,e=-3*o+3*r-2*a-l,i=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,d){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+d)+(l-a)/d;u*=h,f*=h,s(r,a,u,f)},calc:function(o){let r=o*o,a=r*o;return n+t*o+e*r+i*a}}}var Xa=new _,Ll=new vh,Bl=new vh,Hl=new vh,Wc=class extends hi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new _){let i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t,a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Xa.subVectors(s[0],s[1]).add(s[0]),c=Xa);let d=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Xa.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Xa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),E=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),Ll.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),Bl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),Hl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Bl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Hl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ll.calc(l),Bl.calc(l),Hl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new _().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vu(n,t,e,i,s){let o=(i-t)*.5,r=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+o+r)*l+(-3*e+3*i-2*o-r)*a+o*n+e}function e3(n,t){let e=1-n;return e*e*t}function n3(n,t){return 2*(1-n)*n*t}function i3(n,t){return n*n*t}function Yr(n,t,e,i){return e3(n,t)+n3(n,e)+i3(n,i)}function s3(n,t){let e=1-n;return e*e*e*t}function o3(n,t){let e=1-n;return 3*e*e*n*t}function r3(n,t){return 3*(1-n)*n*n*t}function a3(n,t){return n*n*n*t}function Zr(n,t,e,i,s){return s3(n,t)+o3(n,e)+r3(n,i)+a3(n,s)}var m0=class extends hi{constructor(t=new ht,e=new ht,i=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ht){let i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Zr(t,s.x,o.x,r.x,a.x),Zr(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xc=class extends hi{constructor(t=new _,e=new _,i=new _,s=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new _){let i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Zr(t,s.x,o.x,r.x,a.x),Zr(t,s.y,o.y,r.y,a.y),Zr(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},g0=class extends hi{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qc=class extends hi{constructor(t=new _,e=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new _){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},E0=class extends hi{constructor(t=new ht,e=new ht,i=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ht){let i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(Yr(t,s.x,o.x,r.x),Yr(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pr=class extends hi{constructor(t=new _,e=new _,i=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new _){let i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(Yr(t,s.x,o.x,r.x),Yr(t,s.y,o.y,r.y),Yr(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},v0=class extends hi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(vu(a,l.x,c.x,h.x,d.x),vu(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},Yc=Object.freeze({__proto__:null,ArcCurve:Vc,CatmullRomCurve3:Wc,CubicBezierCurve:m0,CubicBezierCurve3:Xc,EllipseCurve:Qr,LineCurve:g0,LineCurve3:qc,QuadraticBezierCurve:E0,QuadraticBezierCurve3:pr,SplineCurve:v0}),Zc=class extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),o=0;for(;o<s.length;){if(s[o]>=i){let r=s[o]-i,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,o=this.curves;s<o.length;s++){let r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Yc[s.type]().fromJSON(s))}return this}},$c=class extends Zc{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new g0(this.currentPoint.clone(),new ht(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let o=new E0(this.currentPoint.clone(),new ht(t,e),new ht(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){let a=new m0(this.currentPoint.clone(),new ht(t,e),new ht(i,s),new ht(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new v0(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,o,r,a,l),this}absellipse(t,e,i,s,o,r,a,l){let c=new Qr(t,e,i,s,o,r,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ds=class n extends En{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Rn(s,0,Math.PI*2);let o=[],r=[],a=[],l=[],c=[],h=1/e,d=new _,u=new ht,f=new _,g=new _,E=new _,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,E.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(E.x,E.y,E.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=E.x,f.y+=E.y,f.z+=E.z,f.normalize(),l.push(f.x,f.y,f.z),E.copy(g)}for(let b=0;b<=e;b++){let M=i+b*h*s,v=Math.sin(M),C=Math.cos(M);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*v,d.y=t[S].y,d.z=t[S].x*C,r.push(d.x,d.y,d.z),u.x=b/e,u.y=S/(t.length-1),a.push(u.x,u.y);let x=l[3*S+0]*v,F=l[3*S+1],R=l[3*S+0]*C;c.push(x,F,R)}}for(let b=0;b<e;b++)for(let M=0;M<t.length-1;M++){let v=M+b*t.length,C=v,S=v+t.length,x=v+t.length+1,F=v+1;o.push(C,S,F),o.push(x,F,S)}this.setIndex(o),this.setAttribute("position",new De(r,3)),this.setAttribute("uv",new De(a,2)),this.setAttribute("normal",new De(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},jr=class n extends ds{constructor(t=1,e=1,i=4,s=8){let o=new $c;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}},bi=class n extends En{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let o=[],r=[],a=[],l=[],c=new _,h=new ht;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(a,3)),this.setAttribute("uv",new De(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ei=class n extends En{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),o=Math.floor(o);let h=[],d=[],u=[],f=[],g=0,E=[],m=i/2,p=0;b(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new De(d,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(f,2));function b(){let v=new _,C=new _,S=0,x=(e-t)/i;for(let F=0;F<=o;F++){let R=[],T=F/o,D=T*(e-t)+t;for(let Z=0;Z<=s;Z++){let G=Z/s,L=G*l+a,k=Math.sin(L),O=Math.cos(L);C.x=D*k,C.y=-T*i+m,C.z=D*O,d.push(C.x,C.y,C.z),v.set(k,x,O).normalize(),u.push(v.x,v.y,v.z),f.push(G,1-T),R.push(g++)}E.push(R)}for(let F=0;F<s;F++)for(let R=0;R<o;R++){let T=E[R][F],D=E[R+1][F],Z=E[R+1][F+1],G=E[R][F+1];(t>0||R!==0)&&(h.push(T,D,G),S+=3),(e>0||R!==o-1)&&(h.push(D,Z,G),S+=3)}c.addGroup(p,S,0),p+=S}function M(v){let C=g,S=new ht,x=new _,F=0,R=v===!0?t:e,T=v===!0?1:-1;for(let Z=1;Z<=s;Z++)d.push(0,m*T,0),u.push(0,T,0),f.push(.5,.5),g++;let D=g;for(let Z=0;Z<=s;Z++){let L=Z/s*l+a,k=Math.cos(L),O=Math.sin(L);x.x=R*O,x.y=m*T,x.z=R*k,d.push(x.x,x.y,x.z),u.push(0,T,0),S.x=k*.5+.5,S.y=O*.5*T+.5,f.push(S.x,S.y),g++}for(let Z=0;Z<s;Z++){let G=C+Z,L=D+Z;v===!0?h.push(L,L+1,G):h.push(L+1,L,G),F+=3}c.addGroup(p,F,v===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xn=class n extends ei{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ee=class n extends En{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(r+a,Math.PI),c=0,h=[],d=new _,u=new _,f=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){let b=[],M=p/i,v=0;p===0&&r===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){let S=C/e;d.x=-t*Math.cos(s+S*o)*Math.sin(r+M*a),d.y=t*Math.cos(r+M*a),d.z=t*Math.sin(s+S*o)*Math.sin(r+M*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(S+v,1-M),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let M=h[p][b+1],v=h[p][b],C=h[p+1][b],S=h[p+1][b+1];(p!==0||r>0)&&f.push(M,v,S),(p!==i-1||l<Math.PI)&&f.push(v,C,S)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(E,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var nn=class n extends En{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);let r=[],a=[],l=[],c=[],h=new _,d=new _,u=new _;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let E=g/s*o,m=f/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(E),d.y=(t+e*Math.cos(m))*Math.sin(E),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(E),h.y=t*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let E=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;r.push(E,m,b),r.push(m,p,b)}this.setIndex(r),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var y0=class n extends En{constructor(t=new pr(new _(-1,-1,0),new _(-1,1,0),new _(1,1,0)),e=64,i=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:o};let r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new _,l=new _,c=new ht,h=new _,d=[],u=[],f=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new De(d,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(f,2));function E(){for(let M=0;M<e;M++)m(M);m(o===!1?e:0),b(),p()}function m(M){h=t.getPointAt(M/e,h);let v=r.normals[M],C=r.binormals[M];for(let S=0;S<=s;S++){let x=S/s*Math.PI*2,F=Math.sin(x),R=-Math.cos(x);l.x=R*v.x+F*C.x,l.y=R*v.y+F*C.y,l.z=R*v.z+F*C.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let v=1;v<=s;v++){let C=(s+1)*(M-1)+(v-1),S=(s+1)*M+(v-1),x=(s+1)*M+v,F=(s+1)*(M-1)+v;g.push(C,S,F),g.push(S,x,F)}}function b(){for(let M=0;M<=e;M++)for(let v=0;v<=s;v++)c.x=M/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Yc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var pe=class extends hs{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hu,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function qa(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function l3(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var mr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],o=e[i-1];n:{t:{let r;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=s,s=e[++i],t<s)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(i=2,o=a);for(let l=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=o,o=e[--i-1],t>=o)break t}r=i,i=0;break e}break n}for(;i<r;){let a=i+r>>>1;t<e[a]?r=a:i=a+1}if(s=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,s)}return this.interpolate_(i,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=i[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jc=class extends mr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yd,endingEnd:yd}}intervalChanged_(t,e,i){let s=this.parameterPositions,o=t-2,r=t+1,a=s[o],l=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case Md:o=t,a=2*e-i;break;case _d:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Md:r=t,l=2*i-e;break;case _d:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),E=g*g,m=E*g,p=-u*m+2*u*E-u*g,b=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,M=(-1-f)*m+(1.5+f)*E+.5*g,v=f*m-f*E;for(let C=0;C!==a;++C)o[C]=p*r[h+C]+b*r[c+C]+M*r[l+C]+v*r[d+C];return o}},Kc=class extends mr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)o[u]=r[c+u]*d+r[l+u]*h;return o}},Qc=class extends mr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ti=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qa(e,this.TimeBufferType),this.values=qa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:qa(t.times,Array),values:qa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qa:e=this.InterpolantFactoryMethodDiscrete;break;case Tc:e=this.InterpolantFactoryMethodLinear;break;case sl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qa;case this.InterpolantFactoryMethodLinear:return Tc;case this.InterpolantFactoryMethodSmooth:return sl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,o=0,r=s-1;for(;o!==s&&i[o]<t;)++o;for(;r!==-1&&i[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=i.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(s!==void 0&&l3(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sl,o=t.length-1,r=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let E=e[d+g];if(E!==e[u+g]||E!==e[f+g]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];let d=a*i,u=r*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++r}}if(o>0){t[r]=t[o];for(let a=o*i,l=r*i,c=0;c!==i;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Tc;var uo=class extends Ti{constructor(t,e,i){super(t,e,i)}};uo.prototype.ValueTypeName="bool";uo.prototype.ValueBufferType=Array;uo.prototype.DefaultInterpolation=Qa;uo.prototype.InterpolantFactoryMethodLinear=void 0;uo.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends Ti{};jc.prototype.ValueTypeName="color";var th=class extends Ti{};th.prototype.ValueTypeName="number";var eh=class extends mr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)li.slerpFlat(o,0,r,c-a,r,c,l);return o}},M0=class extends Ti{InterpolantFactoryMethodLinear(t){return new eh(this.times,this.values,this.getValueSize(),t)}};M0.prototype.ValueTypeName="quaternion";M0.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends Ti{constructor(t,e,i){super(t,e,i)}};fo.prototype.ValueTypeName="string";fo.prototype.ValueBufferType=Array;fo.prototype.DefaultInterpolation=Qa;fo.prototype.InterpolantFactoryMethodLinear=void 0;fo.prototype.InterpolantFactoryMethodSmooth=void 0;var nh=class extends Ti{};nh.prototype.ValueTypeName="vector";var ih=class{constructor(t,e,i){let s=this,o=!1,r=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},c3=new ih,sh=class{constructor(t){this.manager=t!==void 0?t:c3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,o){i.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};sh.DEFAULT_MATERIAL_NAME="__DEFAULT";var po=class extends gn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},us=class extends po{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ul=new Ie,yu=new _,Mu=new _,ta=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(yu),Mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mu),e.updateMatrixWorld(),Ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},oh=class extends ta{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=t0*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(i!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=i,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Bn=class extends po{constructor(t,e,i=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.distance=i,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new oh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},_u=new Ie,Vr=new _,Nl=new _,rh=class extends ta{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Vr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Vr),Nl.copy(i.position),Nl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Nl),i.updateMatrixWorld(),s.makeTranslation(-Vr.x,-Vr.y,-Vr.z),_u.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_u)}},an=class extends po{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ah=class extends ta{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ki=class extends po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ce=class extends po{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var _0=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=bu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function bu(){return 0}var yh="\\[\\]\\.:\\/",h3=new RegExp("["+yh+"]","g"),Mh="[^"+yh+"]",d3="[^"+yh.replace("\\.","")+"]",u3=/((?:WC+[\/:])*)/.source.replace("WC",Mh),f3=/(WCOD+)?/.source.replace("WCOD",d3),p3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),m3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),g3=new RegExp("^"+u3+f3+p3+m3+"$"),E3=["material","materials","bones","map"],lh=class{constructor(t,e,i){let s=i||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=i.length;s!==o;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},je=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(h3,"")}static parseTrackName(t){let e=g3.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);E3.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=lh;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d5=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);var S0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var fs=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},v3=new dr(-1,1,1,-1,0,1),_h=class extends En{constructor(){super(),this.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new De([0,2,0,0,2,0],2))}},y3=new _h,vr=class{constructor(t){this._mesh=new it(y3,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,v3)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var mo=class extends fs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof un?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gr.clone(t.uniforms),this.material=new un({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new vr(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ea=class extends fs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}},R0=class extends fs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var x0=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new ht);this._width=i.width,this._height=i.height,e=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mo(S0),this.copyPass.material.blending=Ni,this.clock=new _0}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,o=this.passes.length;s<o;s++){let r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ea!==void 0&&(r instanceof ea?i=!0:r instanceof R0&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new wt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var yr=class n extends fs{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new wt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(o,r,{type:qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new _n(o,r,{type:qn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new _n(o,r,{type:qn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),r=Math.round(r/2)}let a=Yu;this.highPassUniforms=gr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new un({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ht(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=S0;this.copyUniforms=gr.clone(h.uniforms),this.blendMaterial=new un({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ir,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new wt,this.oldClearAlpha=1,this.basic=new re,this.fsQuad=new vr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new ht(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new un({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new un({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};yr.BlurDirectionX=new ht(1,0);yr.BlurDirectionY=new ht(0,1);var ps=1920,ms=1080;function xe(n){let t=n>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var et=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),$=(n,t,e)=>n+(t-n)*e,Xt=(n,t,e)=>{let i=et((e-n)/(t-n));return i*i*(3-2*i)},fn=n=>1-Math.pow(1-et(n),3),C0=n=>Math.pow(et(n),3),ln=n=>(n=et(n),n*n*(3-2*n));function na(n,t){if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){let i=ln((t-n[e-1][0])/(n[e][0]-n[e-1][0])),s=n[e-1][1],o=n[e][1];return Array.isArray(s)?s.map((r,a)=>$(r,o[a],i)):$(s,o,i)}return n[n.length-1][1]}var M3={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new ht(ps,ms)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){if(maxBlur<.6){gl_FragColor=vec4(texture2D(tColor,vUv).rgb,1.);return;}float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<44;i++){float fi=float(i);float r=sqrt(fi/44.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},_3={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new wt(1,1,1)},sat:{value:1},flash:{value:0},toon:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash,toon;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=mix(aces(c*.88),c/(1.+.18*c),toon);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(1.,.66);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1920.,1080.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},w0=class{constructor(t){let e=this.r=new d0({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(ps,ms,!1),e.shadowMap.enabled=!0,e.shadowMap.type=hh,e.toneMapping=zi,e.outputColorSpace=Ns;let i=new ur(ps,ms);i.type=ls,this.rt=new _n(ps,ms,{type:qn,samples:4,depthTexture:i}),this.composer=new x0(e,new _n(ps,ms,{type:qn})),this.dof=new mo(M3,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new yr(new ht(ps/2,ms/2),.45,.75,.82),this.grade=new mo(_3),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(r=>t>=r.t0&&t<r.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let i=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,o=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,o.vig.value=i.vig??.42,o.exposure.value=i.exposure??1,o.sat.value=i.sat??1,o.flash.value=i.flash??0,o.toon.value=i.toon??0,o.frame.value=Math.floor(t*30)%97,o.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function Zu(n,t,e,i=40){let s=new ho;s.background=new wt(e);let o=new xn(i,ps/ms,.08,400);return{t0:n,t1:t,scene:s,camera:o,update(){return{}}}}function $u(n,t,e,i=0){n.position.set(t[0],t[1],t[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(e[0],e[1],e[2])}var z5=1/420;var bh={value:0};var ia=new _;function di(n,t,e,i,s,o){let r=2*Math.PI*s/4,a=Math.max(o-2*s,0),l=Math.PI/4;ia.copy(t),ia[i]=0,ia.normalize();let c=.5*r/(r+a),h=1-ia.angleTo(n)/l;return Math.sign(ia[e])===1?h*c:a/(r+a)+c+c*(1-h)}var F0=class extends we{constructor(t=1,e=1,i=1,s=2,o=.1){if(s=s*2+1,o=Math.min(t/2,e/2,i/2,o),super(1,1,1,s,s,s),s===1)return;let r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;let a=new _,l=new _,c=new _(t,e,i).divideScalar(2).subScalar(o),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,g=new _,E=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*E,l.y-=Math.sign(l.y)*E,l.z-=Math.sign(l.z)*E,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*o,h[m+1]=c.y*Math.sign(a.y)+l.y*o,h[m+2]=c.z*Math.sign(a.z)+l.z*o,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),u[p+0]=di(g,l,"z","y",o,i),u[p+1]=1-di(g,l,"y","z",o,e);break;case 1:g.set(-1,0,0),u[p+0]=1-di(g,l,"z","y",o,i),u[p+1]=1-di(g,l,"y","z",o,e);break;case 2:g.set(0,1,0),u[p+0]=1-di(g,l,"x","z",o,t),u[p+1]=di(g,l,"z","x",o,i);break;case 3:g.set(0,-1,0),u[p+0]=1-di(g,l,"x","z",o,t),u[p+1]=1-di(g,l,"z","x",o,i);break;case 4:g.set(0,0,1),u[p+0]=1-di(g,l,"x","y",o,t),u[p+1]=1-di(g,l,"y","x",o,e);break;case 5:g.set(0,0,-1),u[p+0]=di(g,l,"x","y",o,t),u[p+1]=1-di(g,l,"y","x",o,e);break}}};var zs=null;function Rh(){if(zs)return zs;let n=new Uint8Array([118,118,118,255,196,196,196,255,255,255,255,255]);return zs=new f0(n,3,1,jn),zs.minFilter=zs.magFilter=zn,zs.generateMipmaps=!1,zs.needsUpdate=!0,zs}var Th=new Map;function kt(n,t){if(!t){let e=String(n);if(Th.has(e))return Th.get(e);let i=new pe({color:n,gradientMap:Rh()});return Th.set(e,i),i}return new pe({color:n,gradientMap:Rh(),...t})}var T3=`uniform float w; uniform float minPx; uniform vec2 res;
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
}`,A3="uniform vec3 col; uniform float op; void main(){ gl_FragColor = vec4(col, op); }",Ah=new Map;function xh(n=.014,t="#17131C",e=1.6){let i=n+t+e;if(Ah.has(i))return Ah.get(i);let s=new un({uniforms:{w:{value:n},minPx:{value:e},res:{value:new ht(ps,ms)},col:{value:new wt(t).convertSRGBToLinear()},op:{value:1}},vertexShader:T3,fragmentShader:A3,side:dn});return Ah.set(i,s),s}function go(n,t=.014,e,i){let s=new it(n.geometry,xh(t,e,i));return s.castShadow=!1,s.receiveShadow=!1,s.userData.isOutline=!0,n.add(s),n}function Me(n,t,e={}){let i=new it(n,t&&t.isMaterial?t:kt(t));return i.castShadow=e.shadow??!0,i.receiveShadow=!0,e.out&&go(i,e.out===!0?.014:e.out,e.outCol,e.minPx),e.pos&&i.position.set(...e.pos),e.rot&&i.rotation.set(...e.rot),i}var Eo=(n,t,e,i=.04,s=3)=>new F0(n,t,e,s,Math.min(i,n/2-.001,t/2-.001,e/2-.001));function at(n,t,e,i,s=0,o=0,r=0,a={}){return Me(Eo(n,t,e,a.r??Math.min(.05,Math.min(n,t,e)*.18)),i,{pos:[s,o,r],...a})}function tt(n,t,e,i,s=0,o=0,r=0,a={}){return Me(new we(n,t,e),i,{pos:[s,o,r],...a})}function ct(n,t,e,i,s=0,o=0,r=0,a={}){return Me(new ei(n,t,e,a.seg||24),i,{pos:[s,o,r],...a})}function ae(n,t,e=0,i=0,s=0,o={}){return Me(new Ee(n,o.seg||24,Math.max(12,(o.seg||24)*.6|0)),t,{pos:[e,i,s],...o})}function Gt(n,t,e){let i=document.createElement("canvas");i.width=n,i.height=t;let s=i.getContext("2d");e(s,n,t);let o=new wn(i);return o.colorSpace=Ve,o.anisotropy=8,o}var $t=(n,t={})=>new pe({map:n,gradientMap:Rh(),...t}),Sh=null;function P0(n=.32,t=.38){Sh||(Sh=Gt(128,128,i=>{let s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(20,16,30,1)"),s.addColorStop(.55,"rgba(20,16,30,.55)"),s.addColorStop(1,"rgba(20,16,30,0)"),i.fillStyle=s,i.fillRect(0,0,128,128)}));let e=new it(new bt(n*2,n*2),new re({map:Sh,transparent:!0,opacity:t,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return e.rotation.x=-Math.PI/2,e.renderOrder=1,e}function pn(n,t={}){let e=new us(t.sky||"#EAF2FF",t.ground||"#B9A898",t.hemi??1.5);n.add(e);let i=new ki(t.key||"#FFF4E2",t.ki??2.2);i.position.set(...t.pos||[6,10,7]),i.castShadow=t.shadow??!0,i.shadow.mapSize.set(2048,2048);let s=t.r||12;return Object.assign(i.shadow.camera,{left:-s,right:s,top:s,bottom:-s,near:.5,far:t.far||60}),i.shadow.bias=-4e-4,i.shadow.normalBias=.02,i.shadow.radius=3,t.target&&(i.target.position.set(...t.target),n.add(i.target),i.position.set(t.target[0]+(t.pos||[6,10,7])[0],t.target[1]+(t.pos||[6,10,7])[1],t.target[2]+(t.pos||[6,10,7])[2])),n.add(i),{hemi:e,k:i}}var Ju=(n={})=>({toon:1,blur:0,bloom:.18,bloomT:.95,bloomR:.4,vig:.22,exposure:1,sat:1.05,...n});function S3(n,t){(n.userData.vida||=[]).push(t)}var R3={out:.012},x3=(n,t,e="#FFFFFF",i=512,s=128,o=64)=>Gt(i,s,r=>{r.fillStyle=t,r.fillRect(0,0,i,s),r.strokeStyle="#00000033",r.lineWidth=8,r.strokeRect(4,4,i-8,s-8),r.fillStyle=e,r.font=`900 ${o}px Inter`,r.textAlign="center",r.textBaseline="middle",r.fillText(n,i/2,s/2+4)});function Qu(n="#2F8F5B"){let t=new J;return t.add(ct(.22,.19,.8,n,0,.4,0,{seg:14,...R3})),t.add(ct(.25,.25,.07,"#24724A",0,.82,0,{seg:14})),t.add(ct(.03,.03,.9,"#5A6270",-.28,.45,0,{seg:6})),t}var Ku=[["PADARIA","#C9472F"],["FARM\xC1CIA","#2F8F5B"],["LANCHES","#F2A33A"],["\xD3TICA","#2E6FB8"],["CAF\xC9","#7A5236"],["BANCO","#3A3A44"],["LIVRARIA","#8A4FA8"],["SAPATOS","#D8577A"],["CELULARES","#1F7FA0"],["MERCADO","#E2443A"]];function ju(n,t=5){let[e,i]=Ku[n%Ku.length],s=new J,o=new it(new we(t,.9,.2),[kt(i),kt(i),kt(i),kt(i),$t(x3(e,i,"#FFFFFF",640,128,72)),kt(i)]);s.add(o);let r=Gt(128,64,l=>{for(let c=0;c<8;c++)l.fillStyle=c%2?"#FFFFFF":i,l.fillRect(c*16,0,16,64)}),a=new it(new we(t*.9,.06,1.3),[kt(i),kt(i),$t(r),kt(i),kt(i),kt(i)]);return a.position.set(0,-.75,.6),a.rotation.x=.28,s.add(a),s}function sa(n,t={}){let e=xe(t.seed||5),i=t.n||7,s=kt("#2A2630",{side:Ze}),o=[],r=new bt(.55,.22);r.translate(.27,0,0);for(let u=0;u<i;u++){let f=new J,g=new it(r,s),E=new it(r,s);E.rotation.y=Math.PI,f.add(g,E),f.add(ae(.09,"#2A2630",0,0,0,{seg:6})),f.scale.setScalar(t.escala||1),n.add(f),o.push({g:f,L:g,Rr:E,dx:(e()-.5)*8,dy:(e()-.5)*3,dz:(e()-.5)*8,ph:e()*6})}let[a,l,c]=t.centro||[0,22,-40],h=t.raio||30,d=t.v||.12;S3(n,(u,f)=>{o.forEach((g,E)=>{let m=f*d+(t.fase||0),p=a+Math.cos(m)*h+g.dx+Math.sin(f*.7+g.ph)*.6,b=c+Math.sin(m)*h*.5+g.dz,M=l+g.dy+Math.sin(f*1.3+g.ph)*.4;g.g.position.set(p,M,b),g.g.rotation.y=-m+Math.PI;let v=Math.sin(f*11+g.ph)*.7;g.L.rotation.x=0,g.L.rotation.z=v,g.Rr.rotation.z=-v})})}var On=Math.PI/180,sn=.3,w3=.012,bn={phi0:Math.PI/2-1,phiL:2,th0:.62,thL:1.55,W:1024,H:512},se=n=>bn.W/2+n/bn.phiL*bn.W,ne=n=>(n-bn.th0)/bn.thL*bn.H,ni=n=>n/bn.phiL*bn.W,mn=n=>n/bn.thL*bn.H,Os="#1B1420";function C3(n,t,e){n.clearRect(0,0,bn.W,bn.H),n.lineCap="round",n.lineJoin="round";let i=t.emo||"neutro",s=1.45,o=.31;if(t.blush||i==="feliz"||i==="apaixonado"||i==="vergonha"){n.fillStyle="rgba(240,110,110,"+(i==="vergonha"?.55:.3)+")";for(let v of[-1,1])n.beginPath(),n.ellipse(se(v*.44),ne(1.7),ni(.075),mn(.045),0,0,7),n.fill()}let r=et(Math.max(t.blink||0,i==="sono"?.55:i==="triste"||i==="choro"?.22:i==="bravo"?.25:i==="desconfiado"?.4:i==="tedio"?.5:0)),a=i==="surpreso"||i==="medo"?1.15:1;for(let v of[-1,1]){let C=se(v*o),S=ne(s),x=ni(.128)*a,F=mn(.158)*a;if(i==="feliz"&&!t.olhosAbertos||(t.blink||0)>.92||t.pisca1&&v<0){n.strokeStyle=Os,n.lineWidth=11,n.beginPath(),i==="feliz"||i==="rindo"?n.arc(C,S+F*.25,x*.85,Math.PI*1.12,Math.PI*1.88):(n.moveTo(C-x*.9,S+F*.15),n.quadraticCurveTo(C,S+F*.55,C+x*.9,S+F*.15)),n.stroke();continue}n.save(),n.beginPath(),n.ellipse(C,S,x,F,0,0,7),n.clip(),n.fillStyle="#FFFFFF",n.fillRect(C-x,S-F,x*2,F*2);let R=i==="surpreso"||i==="medo"?.55:.68,T=et(e[0],-1,1),D=et(e[1],-1,1),Z=C+T*x*.38,G=S+D*F*.32+F*.06;n.fillStyle="#231A26",n.beginPath(),n.ellipse(Z,G,x*R,F*R*.98,0,0,7),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.ellipse(Z-x*.22,G-F*.28,x*.2,F*.17,0,0,7),n.fill(),n.beginPath(),n.ellipse(Z+x*.2,G+F*.22,x*.08,F*.07,0,0,7),n.fill();let L=i==="bravo"?-v*.45:i==="triste"||i==="choro"||i==="preocupado"?v*.35:0;if(r>.02||L){let k=S-F+F*2*r;n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.moveTo(C-x*1.2,S-F*1.3),n.lineTo(C+x*1.2,S-F*1.3),n.lineTo(C+x*1.2,k+Math.tan(L)*x*1.2),n.lineTo(C-x*1.2,k-Math.tan(L)*x*1.2),n.closePath(),n.fill(),n.strokeStyle=Os,n.lineWidth=8,n.beginPath(),n.moveTo(C-x*1.1,k-Math.tan(L)*x*1.1),n.lineTo(C+x*1.1,k+Math.tan(L)*x*1.1),n.stroke()}n.restore(),n.strokeStyle=Os,n.lineWidth=8,n.beginPath(),n.ellipse(C,S,x,F,0,0,7),n.stroke(),t.cilios&&(n.lineWidth=7,n.beginPath(),n.moveTo(C+v*x*.7,S-F*.72),n.lineTo(C+v*x*1.15,S-F*1.02),n.stroke())}if(i==="choro"||t.lagrima){n.fillStyle="rgba(120,200,255,.85)";for(let v of[-1,1]){let C=se(v*o),S=ne(s)+mn(.12);n.beginPath(),n.moveTo(C-ni(.02),S),n.quadraticCurveTo(C,S+mn(.22),C+ni(.02),S),n.fill(),n.beginPath(),n.ellipse(C,S+mn(.2),ni(.028),mn(.035),0,0,7),n.fill()}}let l={neutro:[0,0],feliz:[.04,-.1],rindo:[.04,-.1],triste:[.02,.45],choro:[.03,.5],bravo:[-.03,-.55],surpreso:[.09,0],medo:[.08,.4],preocupado:[.04,.38],desconfiado:[-.01,-.2],sono:[-.01,.1],vergonha:[.03,.3],determinado:[-.02,-.35],tedio:[-.01,.05],apaixonado:[.05,.2]}[i]||[0,0],c=l[0]+(t.brow||0)*.05,h=l[1];n.strokeStyle=t.sobr||Os,n.lineWidth=t.sobrW||15;for(let v of[-1,1]){let C=se(v*o),S=ne(s-.2-c),x=ni(.085),F=v*h*.5;n.beginPath(),n.moveTo(C-x*Math.cos(F),S-x*Math.sin(F)*(v<0,1)),n.quadraticCurveTo(C,S-mn(.025),C+x*Math.cos(F),S+x*Math.sin(F)),n.stroke()}if(t.rugas){n.strokeStyle="rgba(90,50,40,.5)",n.lineWidth=5;for(let v of[-1,1]){let C=se(v*(o+.17));for(let S=0;S<3;S++)n.beginPath(),n.moveTo(C,ne(s-.05+S*.06)),n.lineTo(C+v*ni(.05),ne(s-.07+S*.07)),n.stroke()}n.beginPath(),n.moveTo(se(-.12),ne(1.12)),n.quadraticCurveTo(se(0),ne(1.09),se(.12),ne(1.12)),n.stroke()}if(t.oculosEscuros){n.fillStyle="#15121A";for(let v of[-1,1])n.beginPath(),n.ellipse(se(v*o),ne(s+.02),ni(.16),mn(.13),0,0,7),n.fill();n.strokeStyle="#15121A",n.lineWidth=10,n.beginPath(),n.moveTo(se(-o+.14),ne(s)),n.lineTo(se(o-.14),ne(s)),n.stroke(),n.fillStyle="rgba(255,255,255,.35)";for(let v of[-1,1])n.beginPath(),n.ellipse(se(v*o-.05),ne(s-.03),ni(.04),mn(.025),-.5,0,7),n.fill()}if(t.oculos){n.strokeStyle="#6A4A3A",n.lineWidth=8;for(let v of[-1,1])n.beginPath(),n.ellipse(se(v*o),ne(s),ni(.15),mn(.16),0,0,7),n.stroke();n.beginPath(),n.moveTo(se(-o+.15),ne(s-.02)),n.quadraticCurveTo(se(0),ne(s-.08),se(o-.15),ne(s-.02)),n.stroke()}t.nariz&&(n.strokeStyle="rgba(60,30,30,.55)",n.lineWidth=7,n.beginPath(),n.arc(se(0),ne(1.66),ni(.035),.2,Math.PI-.2),n.stroke());let d=t.mouth||{},u=et(d.open||0),f=et(d.round||0),g=d.smile??({feliz:.8,rindo:.9,triste:-.6,choro:-.7,bravo:-.4,medo:-.3,preocupado:-.35,apaixonado:.6,vergonha:.3,determinado:-.05,desconfiado:-.15,tedio:-.2}[i]||0),E=ne(t.bigode?1.93:1.88),m=se(0),p=ni(.15+.05*(1-f)+(i==="rindo"?.04:0)),b=E-g*mn(.035),M=()=>{if(u<.07)n.strokeStyle=Os,n.lineWidth=11,n.beginPath(),n.moveTo(m-p*.85,b),n.quadraticCurveTo(m,E+g*mn(.075),m+p*.85,b),n.stroke();else{let v=mn(.05+.2*u),C=p*(1-.38*f);n.beginPath(),f>.55?n.ellipse(m,E+v*.35,C*.75,v*.62,0,0,7):(n.moveTo(m-C,b),n.quadraticCurveTo(m,E+g*mn(.03)-v*.12,m+C,b),n.bezierCurveTo(m+C*.95,b+v*1.25,m-C*.95,b+v*1.25,m-C,b),n.closePath()),n.fillStyle="#5A1E2A",n.fill(),n.save(),n.clip(),u>.28&&f<.55&&(n.fillStyle="#FFFFFF",n.fillRect(m-C,b-v,C*2,v*1.18),t.banguela&&(n.fillStyle="#5A1E2A",n.fillRect(m+C*.08,b-v,C*.26,v*.62))),n.fillStyle="#E8707E",n.beginPath(),n.ellipse(m,b+v*1.05,C*.58,v*.42,0,0,7),n.fill(),n.restore(),n.strokeStyle=Os,n.lineWidth=9,n.stroke()}};if(t.barba||M(),t.lingua&&(n.fillStyle="#F2707E",n.strokeStyle=Os,n.lineWidth=7,n.beginPath(),n.ellipse(m+p*.25,E+mn(.07),p*.32,mn(.075),.2,0,7),n.fill(),n.stroke(),n.strokeStyle="#C8505E",n.lineWidth=4,n.beginPath(),n.moveTo(m+p*.25,E+mn(.02)),n.lineTo(m+p*.27,E+mn(.1)),n.stroke()),t.barba&&(n.fillStyle=t.barba,n.globalAlpha=.92,n.beginPath(),n.moveTo(se(-.44),ne(1.5)),n.quadraticCurveTo(se(-.46),ne(2.05),se(0),ne(2.2)),n.quadraticCurveTo(se(.46),ne(2.05),se(.44),ne(1.5)),n.quadraticCurveTo(se(.36),ne(1.78),se(.2),ne(1.8)),n.quadraticCurveTo(se(0),ne(1.72),se(-.2),ne(1.8)),n.quadraticCurveTo(se(-.36),ne(1.78),se(-.44),ne(1.5)),n.fill(),n.globalAlpha=1,n.fillStyle=t.pele||"#C98B5E",n.beginPath(),n.ellipse(m,E+mn(.03),p*1.15,mn(.09+.12*u),0,0,7),n.fill(),M()),t.olheiras){n.strokeStyle="rgba(90,60,90,.45)",n.lineWidth=7;for(let v of[-1,1])n.beginPath(),n.arc(se(v*.31),ne(1.5),ni(.1),.35,Math.PI-.35),n.stroke()}if(t.sardas){n.fillStyle="rgba(150,80,50,.55)";for(let v of[-1,1])for(let C=0;C<5;C++)n.beginPath(),n.arc(se(v*(.36+C%3*.05)),ne(1.66+Math.floor(C/3)*.05+C%2*.02),4.5,0,7),n.fill()}t.bigode&&(n.fillStyle=t.bigode,n.strokeStyle=Os,n.lineWidth=6,n.beginPath(),n.moveTo(se(0),ne(1.76)),n.bezierCurveTo(se(.12),ne(1.7),se(.24),ne(1.76),se(.27),ne(1.9)),n.bezierCurveTo(se(.17),ne(1.84),se(.08),ne(1.87),se(0),ne(1.83)),n.bezierCurveTo(se(-.08),ne(1.87),se(-.17),ne(1.84),se(-.27),ne(1.9)),n.bezierCurveTo(se(-.24),ne(1.76),se(-.12),ne(1.7),se(0),ne(1.76)),n.fill(),n.stroke())}var tf={},ii=0,ks=(n,t)=>{let e="c"+n+t+ii;return tf[e]||(tf[e]=new jr(n,t,ii?3:6,ii?10:18))};function ef(n,t=.82,e=36){let i=new ds(n.map(([l,c])=>new ht(l,c)),e,Math.PI,Math.PI*2);i.applyMatrix4(new Ie().makeScale(1,1,t));let s=i.attributes.position,o=i.attributes.uv,r=1e9,a=-1e9;for(let l=0;l<s.count;l++)r=Math.min(r,s.getY(l)),a=Math.max(a,s.getY(l));for(let l=0;l<s.count;l++)o.setY(l,(s.getY(l)-r)/(a-r));return i.computeVertexNormals(),i}var F3={magro:[[0,.5],[.14,.5],[.165,.53],[.172,.62],[.172,.72],[.165,.8],[.14,.86],[.09,.895],[.04,.905],[0,.906]],barriga:[[0,.47],[.16,.47],[.2,.52],[.225,.6],[.225,.68],[.205,.77],[.17,.845],[.11,.89],[.04,.905],[0,.906]],senhora:[[0,.5],[.15,.5],[.17,.55],[.175,.64],[.17,.74],[.16,.81],[.13,.865],[.08,.898],[0,.906]]},P3=[[0,.24],[.25,.24],[.245,.26],[.22,.36],[.19,.5],[.165,.62],[0,.62]];function wh(n={}){ii=n.simples?1:0;let t=n.pele||"#C98B5E",e=n.camisa||"#E8453C",i=n.calca||"#2E4A7A",s=n.tenis||"#F4F1EA",o=new J,r=new J;o.add(r);let a=new J;a.position.y=.52,r.add(a);let l=(L,k,O,Q,W=w3)=>{let rt=new it(k,typeof O=="string"?kt(O):O);return rt.castShadow=!0,rt.receiveShadow=!0,Q&&rt.position.set(...Q),W&&go(rt,W),L.add(rt),rt},c=Gt(1024,512,(L,k,O)=>{L.fillStyle=e,L.fillRect(0,0,k,O),n.estampa&&n.estampa(L,k,O)}),h=$t(c),d=l(a,ef(F3[n.tronco||"magro"]),h,[0,-.52,0]);n.saia&&l(a,ef(P3,.86),n.saia,[0,-.52,0]),l(a,new ei(.06,.065,.1,16),t,[0,.4,0],0);let u=new J;u.position.y=.38,a.add(u);let f=l(u,new Ee(sn,ii?24:48,ii?16:32),t,[0,sn*.86,0]);f.receiveShadow=!1;for(let L of[-1,1])l(u,new Ee(.055,16,12),t,[L*sn*.96,sn*.82,-.01]).scale.set(.6,1,.9);let g=document.createElement("canvas");g.width=bn.W>>ii,g.height=bn.H>>ii;let E=g.getContext("2d");ii&&E.scale(.5,.5);let m=new wn(g);m.colorSpace=Ve,m.anisotropy=8;let p=new pe({map:m,gradientMap:kt("#fff").gradientMap,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),b=new it(new Ee(sn*1.002,ii?24:48,ii?16:32,bn.phi0,bn.phiL,bn.th0,bn.thL),p);b.position.y=sn*.86,b.renderOrder=2,u.add(b);let M=n.corCabelo||"#1E1618",v=new J;if(v.position.y=sn*.86,u.add(v),n.cabelo==="cacheado"){let L=new Ee(1,ii?8:14,ii?6:10),k=0;for(let O=0;O<70;O++){let Q=Math.acos(1-2*((O+.5)/70)),W=O*2.39996,rt=Math.cos(Q),gt=Math.sin(Q),Ct=Math.cos(W)*gt,Jt=Math.sin(W)*gt;if(rt<.28&&Jt>-.2||rt<-.25||Jt>.55&&rt<.62||Math.abs(Ct)>.8&&rt<.45&&Jt>-.5)continue;let be=.075+O*37%10/10*.03,j=l(v,L,M,[Ct*sn*.98,rt*sn*.98+.01,Jt*sn*.98],.009);j.scale.setScalar(be),j.castShadow=!1,k++}}else if(n.cabelo==="tigela"||n.cabelo==="rabo"||n.cabelo==="coque"){if(l(v,new Ee(sn*1.04,40,28),M,[0,.055,-.065]),n.cabelo==="rabo"){let L=l(v,ks(.085,.26),M,[0,.06,-.42]);L.rotation.x=.75;let k=l(v,new Ee(.1,18,14),M,[0,-.07,-.5]);l(v,new Ee(.065,16,12),n.laco||"#F25C8A",[0,.22,-.31]);for(let O of[-1,1]){let Q=l(v,ks(.06,.2),M,[O*.27,-.08,.02]);Q.rotation.z=-O*.08}}n.cabelo==="coque"&&l(v,new Ee(.12,24,16),M,[0,.3,-.12]);for(let L=-2;L<=2;L++)l(v,new Ee(.075,16,12),M,[L*.07,.2-Math.abs(L)*.025,.2-Math.abs(L)*.02],.008).scale.set(1,.8,.7)}else if(n.cabelo==="careca")for(let L of[-1,1])for(let k=0;k<4;k++){let O=-.6-k*.35;l(v,new Ee(.07,14,10),M,[L*Math.cos(O)*sn*.93*(k<3?1:.9),-.02,Math.sin(O)*sn*.93+.12],.008).scale.set(1,1.2,1)}if(n.cabelo==="topete"){l(v,new Ee(sn*1.03,40,28,0,Math.PI*2,0,1.45),M,[0,.03,-.05]),l(v,new Ee(sn*1.035,48,32,Math.PI+.18,Math.PI-.36,0,2.3),M,[0,0,0],.008);for(let k=0;k<5;k++)l(v,new Xn(.085,.22,10),M,[(k-2)*.075,.27-Math.abs(k-2)*.02,.12-Math.abs(k-2)*.02],.008).rotation.set(1.05,0,-(k-2)*.22);l(v,new Ee(.16,18,12),M,[0,.26,.05],.008).scale.set(1.2,.6,1.1)}else if(n.cabelo==="curto")l(v,new Ee(sn*1.025,40,28,0,Math.PI*2,0,1.3),M,[0,.025,-.03]),l(v,new Ee(sn*1.03,48,32,Math.PI+.18,Math.PI-.36,0,2.25),n.corCabelo2||M,[0,0,0],.008);else if(n.cabelo==="chanel"){l(v,new Ee(sn*1.06,40,28),M,[0,.05,-.07]);for(let k of[-1,1])l(v,new Ee(.2,20,14),M,[k*.25,-.12,-.06]).scale.set(.55,1.15,1);l(v,new Ee(.26,24,14),M,[0,.19,.12],.008).scale.set(1.05,.42,.6)}else if(n.cabelo==="afro"&&(l(v,new Ee(sn*1.32,40,28),M,[0,.14,-.1]).scale.set(1.08,1,1),n.faixa)){let k=l(v,new nn(sn*1.02,.035,10,40),n.faixa,[0,.1,0],.006);k.rotation.x=Math.PI/2-.25}if(n.brincos)for(let L of[-1,1])l(u,new Ee(.03,12,10),n.brincos,[L*sn*1,sn*.62,.02],.005);if(n.bone){let L=l(v,new Ee(sn*1.05,32,16,0,Math.PI*2,0,1.25),n.bone,[0,.03,-.01]),k=l(v,Eo(.36,.03,.22,.012),n.bone,[0,.12,n.boneTras?-.32:.3])}let C=L=>{let k=new J;k.position.set(L*.185,.3,0),a.add(k);let O=n.manga==="regata",Q=O||(n.manga||"curta")==="curta";O?l(k,ks(.06,.17),t,[0,-.1,0]):l(k,ks(Q?.064:.058,Q?.07:.17),e,[0,Q?-.055:-.1,0]),Q&&!O&&l(k,ks(.05,.15),t,[0,-.11,0]);let W=new J;W.position.y=-.21,k.add(W),l(W,ks(.048,.14),Q?t:e,[0,-.085,0]);let rt=new J;rt.position.y=-.2,W.add(rt);let gt=new Ee(.062,20,14);return l(rt,gt,n.luva||t,[0,-.01,0]).scale.set(.85,1.05,.8),l(rt,new Ee(.026,12,10),n.luva||t,[-L*.045,.02,.03],.007),n.forte&&(k.children.forEach(Jt=>Jt.isMesh&&Jt.scale.set(n.forte,1,n.forte)),W.children.forEach(Jt=>Jt.isMesh&&Jt.scale.set(n.forte*.92,1,n.forte*.92))),{sh:k,el:W,hand:rt}},S=C(1),x=C(-1),F=L=>{let k=new J;k.position.set(L*.085,.52,0),r.add(k),l(k,ks(.07,.17),n.saia?t:i,[0,-.11,0]);let O=new J;O.position.y=-.22,k.add(O),l(O,ks(.063,.16),n.meia||(n.saia?t:i),[0,-.1,0]);let Q=new J;Q.position.y=-.22,O.add(Q);let W=l(Q,Eo(.13,.095,.23,.045),s,[0,-.037,.035]);return n.sola!==!1&&l(Q,Eo(.135,.03,.235,.014),n.sola||"#FFFFFF",[0,-.075,.035],.006),{hp:k,kn:O,an:Q}},R=F(1),T=F(-1),D=P0(.36,.4);D.position.y=.006,o.add(D),n.escala&&o.scale.setScalar(n.escala),v.traverse(L=>{L.isMesh&&(L.castShadow=!1)});let Z={look:[0,0],key:""},G={root:o,pelvis:r,torsoG:a,headG:u,head:f,hair:v,torso:d,hands:{L:S.hand,R:x.hand},arms:{L:S,R:x},legs:{L:R,R:T},sombra:D,place(L,k,O=0,Q=0){return o.position.set(L,O,k),o.rotation.y=Q,G},pose(L={}){r.position.y=L.bob||0,r.position.z=L.dz||0,a.rotation.set((L.lean||0)*On,(L.twist||0)*On,(L.tilt||0)*On),u.rotation.set((L.headX||0)*On,(L.headY||0)*On,(L.headZ||0)*On);let k=(Q,W,rt,gt)=>{Q.sh.rotation.set(-(W[0]||0)*On,(W[2]||0)*On*gt,gt*(W[1]??8)*On),Q.el.rotation.set(-(rt||0)*On,0,0)};k(S,L.shL||[0,8],L.elL??8,1),k(x,L.shR||[0,8],L.elR??8,-1);let O=(Q,W,rt,gt)=>{Q.hp.rotation.set(-(W[0]||0)*On,0,gt*(W[1]||0)*On),Q.kn.rotation.set((rt||0)*On,0,0),Q.an.rotation.set(-(W[0]||0)*On*0+(rt||0)*On*-.4*(W[2]??1),0,0)};return O(R,L.hipL||[0,0],L.knL||0,1),O(T,L.hipR||[0,0],L.knR||0,-1),G},face(L={}){let k=L.look||[0,0],O=L.mouth||{},Q=(rt,gt=20)=>Math.round((rt||0)*gt),W=[L.emo,Q(L.blink,10),Q(k[0],8),Q(k[1],8),Q(O.open,12),Q(O.round,6),O.smile===void 0?"u":Q(O.smile,8),Q(L.brow,6),L.lagrima?1:0,L.olhosAbertos?1:0,L.lingua?1:0,L.pisca1?1:0].join("|");return W!==Z.key&&(Z.key=W,C3(E,{...n.rosto,...L,pele:t,oculos:n.oculos,rugas:n.rugas,oculosEscuros:n.oculosEscuros,bigode:n.bigode,barba:n.barba,olheiras:n.olheiras,sardas:n.sardas,nariz:n.nariz,cilios:n.cilios,sobr:n.sobr,sobrW:n.sobrW,banguela:n.banguela},k),m.needsUpdate=!0),G},faceTo(L,k){return o.rotation.y=Math.atan2(L-o.position.x,k-o.position.z),G},hold(L,k="R"){return G.hands[k].add(L),L}};return G.estatua=(L="#A9A49C")=>{G.congelado=!0;let k=kt(L);return o.traverse(O=>{O.isMesh&&!O.userData.isOutline&&O!==D&&O!==b&&(O.material=k)}),p.color.set("#B8B4AC"),G},G.pose({}),G.face({}),G}function I0(n,t=1.8,e=1,i=0){let s=(n*t+i)*Math.PI*2,o=Math.sin(s),r=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.025*e-.012,lean:4*e,twist:o*4*e,hipL:[28*o*e,0],hipR:[-28*o*e,0],knL:Math.max(0,-r)*45*e+5,knR:Math.max(0,r)*45*e+5,shL:[-24*o*e,7],shR:[24*o*e,7],elL:18+Math.max(0,-o)*18,elR:18+Math.max(0,o)*18,headX:-2}}function D0(n,t=2.9,e=1,i=0){let s=(n*t+i)*Math.PI*2,o=Math.sin(s),r=Math.cos(s);return{bob:Math.abs(Math.cos(s))*.06*e-.02,lean:16*e,twist:o*7*e,hipL:[50*o*e+8,0],hipR:[-50*o*e+8,0],knL:(Math.max(0,-r)*85+18)*e,knR:(Math.max(0,r)*85+18)*e,shL:[-45*o*e,10],shR:[45*o*e,10],elL:85,elR:85,headX:-10*e}}var oa=(n={})=>({bob:-.17,dz:-.02,hipL:[88,4],hipR:[88,4],knL:88,knR:88,shL:[12,8],shR:[12,8],elL:30,elR:30,...n});function nf(n,t=0){let e=3.1+t%5*.37,i=(n+t*.77)%e/e*e;return i<.07?i/.07:i<.14?1-(i-.07)/.07:0}var L0={total:747,segs:[{quem:"n",pensa:!1,start:0,end:85.48,a:0,b:282},{quem:"davi",pensa:!1,start:85.48,end:87.32,a:283,b:287},{quem:"gui",pensa:!1,start:87.32,end:88.52,a:288,b:289},{quem:"davi",pensa:!1,start:88.52,end:90.24,a:290,b:294},{quem:"gui",pensa:!1,start:90.24,end:92.04,a:295,b:297},{quem:"n",pensa:!1,start:92.04,end:103.48,a:298,b:332},{quem:"mae",pensa:!1,start:103.48,end:105.84,a:333,b:339},{quem:"gui",pensa:!1,start:105.84,end:106.88,a:340,b:341},{quem:"mae",pensa:!1,start:106.88,end:108.28,a:342,b:346},{quem:"gui",pensa:!1,start:108.28,end:110.56,a:347,b:350},{quem:"mae",pensa:!1,start:110.56,end:114.32,a:351,b:360},{quem:"n",pensa:!1,start:114.32,end:156.76,a:361,b:478},{quem:"mae",pensa:!1,start:156.76,end:158.44,a:479,b:482},{quem:"gui",pensa:!1,start:158.44,end:160.56,a:483,b:488},{quem:"n",pensa:!1,start:160.56,end:180.24,a:489,b:544},{quem:"prof",pensa:!1,start:180.24,end:182.96,a:545,b:549},{quem:"tiago",pensa:!1,start:182.96,end:184.96,a:550,b:554},{quem:"n",pensa:!1,start:184.96,end:210.56,a:555,b:624},{quem:"tiago",pensa:!1,start:210.978,end:212.478,a:625,b:628},{quem:"gui",pensa:!1,start:212.478,end:215.478,a:629,b:634},{quem:"n",pensa:!1,start:215.478,end:249.678,a:635,b:742},{quem:"tiago",pensa:!1,start:249.678,end:251.878,a:743,b:748},{quem:"gui",pensa:!1,start:251.878,end:253.778,a:749,b:751},{quem:"n",pensa:!1,start:253.778,end:266.877,a:752,b:792},{quem:"mae",pensa:!1,start:266.877,end:269.178,a:793,b:795},{quem:"n",pensa:!1,start:269.178,end:325.978,a:796,b:953},{quem:"davi",pensa:!1,start:326.109,end:327.555,a:954,b:955},{quem:"gui",pensa:!1,start:327.687,end:330.577,a:956,b:960},{quem:"n",pensa:!1,start:330.577,end:356.278,a:961,b:1043},{quem:"davi",pensa:!1,start:356.433,end:358.909,a:1044,b:1047},{quem:"gui",pensa:!1,start:359.065,end:361.077,a:1048,b:1050},{quem:"n",pensa:!1,start:361.077,end:388.478,a:1051,b:1124},{quem:"caio",pensa:!1,start:388.582,end:391.279,a:1125,b:1129},{quem:"n",pensa:!1,start:391.384,end:398.978,a:1130,b:1153},{quem:"pef",pensa:!1,start:399.047,end:403.338,a:1154,b:1164},{quem:"n",pensa:!1,start:403.643,end:430.491,a:1165,b:1243},{quem:"cic",pensa:!1,start:430.491,end:431.474,a:1244,b:1246},{quem:"n",pensa:!1,start:431.474,end:467.679,a:1247,b:1346},{quem:"tiago",pensa:!1,start:467.679,end:471.963,a:1347,b:1359},{quem:"mae",pensa:!1,start:472.843,end:475.863,a:1360,b:1368},{quem:"gui",pensa:!1,start:475.863,end:477.529,a:1369,b:1373},{quem:"n",pensa:!1,start:477.529,end:500.083,a:1374,b:1438},{quem:"mae",pensa:!1,start:500.323,end:510.643,a:1439,b:1473},{quem:"gui",pensa:!1,start:510.643,end:512.058,a:1474,b:1476},{quem:"n",pensa:!1,start:512.058,end:530.123,a:1477,b:1520},{quem:"n",pensa:!1,start:530.803,end:548.243,a:1521,b:1565},{quem:"juiz",pensa:!1,start:548.643,end:549.468,a:1566,b:1567},{quem:"n",pensa:!1,start:549.468,end:579.01,a:1568,b:1650},{quem:"gui",pensa:!1,start:579.01,end:580.233,a:1651,b:1651},{quem:"n",pensa:!1,start:580.243,end:591.283,a:1652,b:1682},{quem:"n",pensa:!1,start:591.923,end:620.483,a:1683,b:1769},{quem:"gui",pensa:!1,start:620.963,end:622.963,a:1770,b:1772},{quem:"davi",pensa:!1,start:623.363,end:625.123,a:1773,b:1777},{quem:"n",pensa:!1,start:625.123,end:646.163,a:1778,b:1834},{quem:"gui",pensa:!1,start:646.563,end:648.003,a:1835,b:1838},{quem:"davi",pensa:!1,start:648.003,end:650.003,a:1839,b:1843},{quem:"gui",pensa:!1,start:650.323,end:652.323,a:1844,b:1848},{quem:"n",pensa:!1,start:652.483,end:674.163,a:1849,b:1917},{quem:"davi",pensa:!1,start:674.563,end:678.083,a:1918,b:1929},{quem:"davi",pensa:!1,start:678.723,end:680.723,a:1930,b:1937},{quem:"n",pensa:!1,start:680.723,end:693.123,a:1938,b:1974},{quem:"gui",pensa:!1,start:693.523,end:695.523,a:1975,b:1982},{quem:"davi",pensa:!1,start:696.643,end:699.523,a:1983,b:1993},{quem:"n",pensa:!1,start:699.923,end:706.563,a:1994,b:2013},{quem:"n",pensa:!1,start:707.283,end:729.363,a:2014,b:2075},{quem:"n",pensa:!1,start:730.083,end:744.681,a:2076,b:2121}],falas:[{quem:"davi",start:85.4,end:87.433,boca:[0,0,0,0,.17,.54,.78,.88,.97,1,.98,.92,.81,.69,.62,.66,.79,.93,.99,.96,.86,.79,.78,.68,.4,0,0,.22,.67,.93,.91,.87,.86,.83,.82,.82,.75,.7,.81,.9,.88,.83,.85,.9,.9,.86,.83,.83,.84,.86,.87,.85,.78,.66,.51,.32,0,0,.33,.59,.52],round:[0,0,0,0,0,1,.84,0,.67,.93,.59,.58,.77,.61,.97,1,0,.42,.85,.71,.22,.46,.91,1,1,0,0,0,0,.27,.76,.44,.63,1,1,.77,.64,1,.41,.3,.78,0,0,.89,.76,.7,.34,.64,.91,1,1,.93,1,1,1,1,0,0,.96,1,1]},{quem:"gui",start:87.267,end:88.633,boca:[0,0,.32,.57,.73,.84,.85,.64,.29,.25,.61,.87,.93,.96,.99,1,1,1,.98,.9,.79,.77,.86,.87,.78,.7,.71,.75,.73,.68,.64,.62,.56,.4,.2,0,0,0,.18,.58,.64],round:[0,0,.96,1,1,.92,.96,1,0,0,.81,.99,.96,.93,.94,.98,.88,.9,.94,.82,0,.52,1,1,1,.87,1,1,1,1,1,1,1,.76,0,0,0,0,0,0,0]},{quem:"davi",start:88.467,end:90.367,boca:[0,0,0,.45,.85,.9,.67,.57,.67,.55,.18,0,.37,.62,.52,.23,.27,.58,.77,.7,.57,.57,.62,.63,.6,.6,.62,.65,.71,.76,.71,.66,.79,.9,.69,.28,.16,.46,.73,.73,.65,.44,.17,.24,.62,.89,.84,.66,.58,.58,.49,.3,0,0,.29,.61,.65],round:[0,0,0,0,0,.44,.39,.49,.42,.51,0,0,.23,.91,.74,0,0,.01,0,0,.65,.96,.96,1,1,1,1,.96,.97,.97,1,1,.91,1,.85,0,0,0,.7,.44,0,0,0,0,.92,.81,.68,.57,.46,.3,.29,0,0,0,0,1,.76]},{quem:"gui",start:90.167,end:92.167,boca:[.43,.47,.44,.57,.76,.91,.93,.71,.36,0,.22,.67,.93,.97,.99,1,1,.99,.97,.93,.86,.75,.66,.62,.6,.56,.46,.41,.54,.7,.75,.75,.81,.79,.68,.57,.57,.7,.79,.79,.79,.79,.77,.77,.78,.77,.74,.63,.41,.14,0,0,0,0,0,0,0,.23,.41,.34],round:[.21,.18,.77,1,1,.76,.9,1,1,0,0,1,.92,.86,.77,.89,.92,.87,.94,.81,.87,.33,0,0,0,0,0,0,.77,1,1,.22,.89,1,0,0,0,.94,.93,.92,1,.79,.97,.77,.85,1,.97,1,.95,0,0,0,0,0,0,0,0,0,1,1]},{quem:"mae",start:103.4,end:105.967,boca:[0,0,0,0,.16,.49,.68,.75,.81,.83,.86,.93,.97,.99,1,.98,.93,.88,.86,.88,.9,.88,.83,.76,.7,.62,.47,.25,0,0,0,0,.12,.4,.64,.75,.79,.78,.8,.88,.94,.96,.99,.93,.8,.78,.87,.93,.95,.84,.62,.64,.82,.82,.64,.6,.74,.9,.92,.9,.89,.89,.86,.86,.89,.9,.86,.76,.63,.42,.17,0,0,0,.17,.57,.61],round:[0,0,0,0,0,.89,.99,.89,.76,.96,.87,.65,.53,.51,.48,.46,.87,1,1,1,.99,.99,1,.99,1,1,1,0,0,0,0,0,0,1,1,.92,0,0,0,.66,.82,1,1,1,.49,.16,.86,.83,.98,1,1,.11,1,.97,0,0,.65,.86,.8,.95,.88,.47,.82,.79,.7,.91,.98,1,1,1,0,0,0,0,0,.64,1]},{quem:"gui",start:105.767,end:107,boca:[.14,.15,0,.19,.55,.8,.87,.92,.95,.94,.91,.9,.95,.99,1,.99,.98,.97,.98,.98,.96,.92,.89,.87,.8,.66,.45,.23,0,0,0,0,0,0,.19,.57,.58],round:[0,0,0,0,.64,1,1,1,1,1,.79,.36,.96,.89,.89,.98,.96,1,1,1,1,1,1,.88,1,1,.32,0,0,0,0,0,0,0,0,.99,1]},{quem:"mae",start:106.8,end:108.4,boca:[0,0,0,.2,.62,.86,.82,.56,.35,.56,.86,.95,.95,.96,.98,.96,.73,.36,.29,.51,.73,.9,.99,.93,.75,.59,.63,.83,.96,.95,.93,.94,.93,.88,.79,.7,.63,.58,.41,.18,0,0,0,0,.14,.44,.67,.56],round:[0,0,0,0,.99,1,1,.85,.61,0,.92,.87,.9,1,1,1,1,.98,0,0,0,.11,1,1,.57,0,0,.94,.91,.97,1,.93,.62,.77,.82,.83,.77,1,.98,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:108.2,end:110.667,boca:[0,0,.15,.47,.7,.8,.87,.89,.88,.86,.8,.7,.58,.36,0,0,0,0,0,0,0,0,.29,.58,.72,.76,.85,.92,.93,.92,.94,.93,.84,.56,.42,.73,.98,1,1,1,1,.99,.97,.93,.89,.84,.74,.56,.31,0,0,.2,.45,.64,.72,.74,.73,.72,.7,.68,.65,.61,.58,.58,.56,.51,.45,.41,.4,.38,.35,.32,.25,.12],round:[0,0,0,0,0,0,1,.93,.97,.87,.98,.57,.91,0,0,0,0,0,0,0,0,0,0,0,0,0,.16,.85,.82,.71,.9,.92,1,.96,.07,.84,1,1,.98,.96,1,.99,1,1,.99,.95,.95,.93,.89,0,0,0,.09,0,0,0,0,.01,.34,.41,.42,.53,.39,.74,.87,.55,.42,.31,.22,.19,0,.15,0,0]},{quem:"mae",start:110.5,end:114.433,boca:[0,0,0,0,0,.27,.49,.68,.77,.73,.62,.62,.78,.91,.92,.91,.86,.77,.6,.43,.53,.77,.78,.51,.26,.4,.68,.78,.71,.62,.64,.69,.79,.93,.99,1,.99,.98,.98,.95,.9,.87,.75,.57,.5,.47,.46,.6,.8,.89,.86,.77,.71,.75,.79,.75,.68,.6,.45,.23,0,0,0,0,.25,.62,.74,.61,.62,.83,.94,.93,.92,.9,.72,.35,0,0,.19,.64,.94,1,.97,.95,.98,1,.97,.88,.78,.72,.65,.71,.88,.94,.92,.93,.9,.82,.74,.75,.84,.82,.64,.47,.41,.44,.47,.46,.42,.29,0,0,0,0,0,.16,.56,.64],round:[0,0,0,0,0,0,0,0,.97,1,1,1,.59,.86,.82,.8,.87,.23,0,0,0,.94,.94,.88,0,0,.72,.88,1,1,1,1,.97,1,1,1,.97,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,.91,.98,0,0,.99,.84,.96,.96,.82,1,.99,0,0,0,0,.92,.91,.85,.76,1,1,1,.48,.01,.4,.86,.92,.97,.94,.8,1,1,.98,.61,.46,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,.13,.85]},{quem:"mae",start:156.7,end:158.567,boca:[0,0,0,.23,.5,.67,.76,.68,.44,.39,.63,.89,.93,.71,.37,.16,.21,.54,.82,.89,.91,.88,.82,.8,.77,.77,.87,.91,.84,.82,.89,.97,1,.98,.95,.88,.8,.77,.77,.75,.76,.79,.78,.77,.73,.57,.33,.14,0,0,0,0,0,0,.21,.42],round:[0,0,0,0,0,0,.13,.96,.96,.81,0,.94,.84,.77,.91,0,0,0,.89,.79,.96,.86,0,0,0,0,.62,.69,.74,.73,.88,.72,.71,.96,.95,1,0,0,0,0,0,.99,.92,1,1,1,.74,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:158.367,end:160.667,boca:[0,0,0,0,.22,.59,.81,.85,.85,.86,.9,.91,.88,.88,.93,.96,.98,.99,1,1,.97,.82,.57,.34,.16,0,0,0,0,0,0,.17,.49,.68,.74,.8,.83,.84,.81,.8,.85,.81,.75,.83,.87,.79,.78,.86,.91,.91,.9,.94,.98,.99,.96,.92,.89,.86,.84,.77,.61,.37,.13,0,0,0,0,0,.14],round:[0,0,0,0,0,0,0,0,0,0,0,.94,.81,.87,1,.91,.78,.82,.74,.92,1,.91,0,0,0,0,0,0,0,0,0,0,1,1,.97,1,1,.93,0,0,.93,1,.66,.67,.88,0,0,.47,.89,.89,.62,.52,.97,1,1,1,1,1,1,1,1,.71,0,0,0,0,0,0,0]},{quem:"prof",start:180.167,end:183.067,boca:[0,0,0,.19,.6,.85,.85,.84,.86,.83,.84,.9,.89,.79,.71,.76,.89,.96,.87,.54,.17,.22,.65,.94,.99,.99,.99,.98,.93,.86,.88,.92,.89,.82,.79,.82,.86,.82,.73,.63,.55,.58,.66,.66,.56,.4,.24,0,0,0,0,.31,.49,.62,.8,.92,.92,.89,.86,.8,.78,.87,.87,.59,.23,0,.17,.57,.9,.99,1,.94,.82,.79,.89,.92,.75,.53,.36,.2,0,0,0,0,0,.23,.28],round:[0,0,0,0,0,1,.67,.64,.64,.38,0,1,.94,0,0,0,.59,1,1,.72,0,0,.37,1,.97,.87,.84,.91,.9,0,0,.82,.86,.59,.01,.4,.85,.64,.67,.71,.75,0,0,0,.73,0,0,0,0,0,0,1,1,.86,.55,.91,.27,.41,.89,1,.74,.67,.92,.32,0,0,0,0,.55,1,1,1,1,1,.86,1,.87,.69,.78,0,0,0,0,0,0,0,0]},{quem:"tiago",start:182.9,end:185.067,boca:[0,0,.16,.52,.79,.91,.97,.98,.97,.96,.91,.85,.85,.86,.81,.75,.67,.51,.27,0,0,0,.17,.53,.79,.89,.95,.94,.85,.76,.71,.79,.92,.91,.85,.87,.91,.91,.87,.86,.87,.89,.9,.9,.92,.93,.94,.98,.99,.99,1,1,1,.99,.94,.82,.67,.46,.2,0,0,0,.12,.44,.51],round:[0,0,0,.55,.88,.87,.61,.41,.36,.22,0,.56,.65,.58,.28,.14,.6,.71,0,0,0,0,0,.26,.21,0,0,0,0,0,.08,.26,0,.04,0,0,.14,0,.14,.91,.97,.15,0,.04,.07,.44,.27,.06,0,0,0,0,0,0,.04,0,.16,.27,0,0,0,0,0,0,0]},{quem:"tiago",start:210.9,end:212.6,boca:[0,0,0,.17,.38,.48,.47,.42,.36,.36,.44,.47,.49,.68,.91,.91,.62,.44,.56,.71,.87,.99,.93,.8,.71,.74,.86,.93,.91,.88,.84,.87,.92,.92,.93,.95,.95,.92,.87,.83,.77,.71,.57,.32,0,0,0,0,0,.3,.41],round:[0,0,0,0,0,0,0,0,0,0,0,.84,0,0,.64,1,.99,.71,0,.08,.39,.78,.92,1,1,1,.97,.66,.77,.92,.68,.85,1,1,.94,.99,.79,.9,.94,.97,.91,.98,1,1,0,0,0,0,0,0,0]},{quem:"gui",start:212.4,end:215.6,boca:[0,0,0,0,.29,.58,.73,.78,.85,.91,.92,.91,.93,.94,.86,.77,.79,.85,.83,.75,.6,.42,.29,.22,.12,0,0,0,0,0,.3,.66,.79,.75,.76,.82,.7,.46,.5,.74,.87,.85,.77,.72,.71,.7,.71,.75,.84,.89,.89,.89,.91,.94,.95,.94,.87,.77,.68,.65,.68,.79,.94,1,1,.98,.96,.95,.97,.98,1,.99,.93,.83,.75,.71,.73,.82,.92,.96,.89,.78,.74,.81,.86,.83,.76,.6,.35,0,0,0,0,0,0,0],round:[0,0,0,0,0,0,0,0,.07,.98,.92,1,1,1,1,1,1,1,1,1,.84,0,0,0,0,0,0,0,0,0,.17,.78,0,0,0,0,1,.81,.22,.54,1,.81,0,0,0,0,0,0,1,1,.87,.91,1,1,1,1,1,1,1,1,1,.74,.99,1,1,.96,1,1,1,1,.99,.96,1,.51,.03,0,0,.34,1,1,.99,1,1,.62,.98,.97,1,1,.89,0,0,0,0,0,0,0]},{quem:"tiago",start:249.6,end:252,boca:[.15,0,0,0,0,0,.23,.7,.95,.92,.89,.93,.93,.78,.56,.56,.78,.95,.98,.95,.87,.78,.78,.8,.76,.67,.54,.36,.16,0,0,0,.38,.75,.94,.9,.75,.72,.84,.91,.93,.93,.91,.91,.92,.94,.92,.85,.81,.82,.88,.92,.88,.86,.88,.92,.96,.99,.98,.93,.9,.9,.89,.88,.81,.7,.57,.37,.16,0,0,0],round:[0,0,0,0,0,0,0,.51,.79,.86,.66,.73,.72,.96,.85,.63,.11,.96,1,1,.89,1,.88,.94,.96,1,1,1,0,0,0,0,.36,0,.97,.83,1,.95,.76,.87,.89,1,1,.91,.99,.89,0,0,0,0,.39,1,1,1,.99,1,1,1,.87,.75,.46,.67,.71,.74,.89,.74,.81,.86,0,0,0,0]},{quem:"gui",start:251.8,end:253.9,boca:[.34,.27,0,0,0,0,.23,.69,.85,.67,.54,.49,.58,.82,.77,.47,.4,.63,.79,.6,.25,0,.18,.39,.53,.58,.64,.75,.65,.38,.43,.71,.89,.95,.98,.98,.95,.92,.95,.98,.95,.82,.51,.31,.55,.87,.97,.99,.98,.97,.96,.94,.88,.79,.75,.76,.74,.63,.44,.22,0,0,0],round:[.81,0,0,0,0,0,0,.61,.66,0,0,0,0,1,.44,0,0,.28,1,.15,0,0,0,0,0,0,0,.84,1,.86,0,1,1,.99,.84,.87,.93,.31,.81,.7,.74,.89,1,.16,0,.74,.58,.77,.81,.87,1,1,1,.71,0,.41,1,1,1,0,0,0,0]},{quem:"mae",start:266.8,end:269.3,boca:[0,0,0,0,0,0,.35,.57,.7,.76,.76,.74,.78,.88,.96,.99,1,1,1,.95,.89,.87,.87,.87,.87,.87,.88,.88,.9,.92,.94,.91,.81,.59,.3,0,0,0,0,.16,.5,.82,.94,.92,.85,.78,.7,.66,.68,.78,.88,.91,.93,.95,.95,.93,.9,.86,.7,.38,.33,.68,.92,.93,.86,.78,.71,.63,.52,.37,.19,0,0,0,0],round:[0,0,0,0,0,0,.96,.94,.9,.68,.89,.36,.52,.44,.37,.41,.47,.54,.42,.56,.87,1,1,1,.67,.53,.38,.36,.3,.14,.12,.38,1,.96,.49,0,0,0,0,0,.59,.54,.59,.53,.67,1,0,0,0,.31,.6,.46,.51,.61,.56,.64,.67,.99,1,.94,.71,.51,.53,.57,.61,.66,.7,.79,.98,.83,0,0,0,0,0]},{quem:"davi",start:326.033,end:327.667,boca:[.46,.6,.57,.59,.74,.91,.97,.91,.74,.64,.76,.78,.47,.26,.51,.84,.95,.98,.99,.96,.88,.72,.61,.71,.86,.88,.76,.55,.29,0,0,0,0,0,0,0,0,.15,.26,.43,.66,.78,.8,.83,.84,.81,.77,.71,.5],round:[.51,.44,0,0,0,.47,1,1,1,.89,.89,1,1,0,.34,1,1,1,1,.95,.63,.66,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,.6,.96,.99,.96,1,1,.96,.95,.74,.46]},{quem:"gui",start:327.633,end:330.7,boca:[.52,.63,.56,.52,.49,.44,.37,.29,.25,.19,0,0,0,0,0,0,0,0,.24,.43,.57,.7,.85,.92,.93,.97,1,1,.98,.97,.98,1,.98,.95,.88,.71,.48,.32,.23,.14,0,0,0,.15,.45,.62,.64,.66,.67,.69,.7,.67,.61,.57,.56,.56,.56,.54,.52,.53,.53,.54,.58,.62,.66,.69,.71,.66,.53,.54,.68,.65,.43,.32,.41,.6,.79,.84,.79,.74,.71,.66,.47,.16,0,0,0,0,0,0,0,.17],round:[.46,.05,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,.9,.82,.84,.74,.81,.7,.87,.89,.97,1,1,1,1,.91,0,0,0,0,0,0,0,0,1,1,1,.81,.83,.87,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,.99,1,1,1,1,1,1,.81,0,0,0,.99,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0]},{quem:"davi",start:356.367,end:359.033,boca:[.53,.74,.81,.93,.98,.95,.88,.83,.78,.69,.59,.6,.76,.86,.85,.86,.9,.87,.81,.73,.55,.32,.12,0,0,.19,.62,.9,.95,.98,.94,.83,.79,.84,.89,.89,.9,.89,.83,.76,.77,.83,.86,.87,.88,.88,.82,.72,.58,.34,0,0,0,0,0,0,0,0,0,0,.25,.75,.86,.47,0,.18,.56,.78,.77,.73,.73,.72,.71,.75,.86,.87,.77,.83,.93,.69],round:[.97,1,0,.82,.81,.56,.24,.16,.81,.99,1,.78,.37,.62,.5,.49,.88,.94,1,1,.99,1,0,0,0,0,1,1,.53,.94,.84,.43,.64,.68,.9,.47,0,0,.34,0,0,0,0,.57,.67,1,.99,1,1,1,0,0,0,0,0,0,0,0,0,0,0,.76,1,0,0,0,.34,1,1,.94,.9,.85,.72,.57,.79,1,.97,.76,1,1]},{quem:"gui",start:359,end:361.2,boca:[.71,.98,.97,.91,.76,.46,.26,.4,.52,.51,.52,.57,.63,.51,.22,0,.26,.39,.44,.52,.71,.88,.95,.92,.84,.78,.75,.79,.91,.99,.99,.97,.95,.95,.96,.96,.96,.97,.99,1,.98,.89,.82,.83,.85,.84,.79,.73,.72,.78,.8,.77,.71,.59,.36,0,0,0,0,0,0,0,0,0,.17,.14],round:[1,.87,1,.96,.97,1,0,.28,.27,0,0,.08,.74,1,0,0,0,0,0,0,.51,.95,.84,.92,1,1,1,.94,1,1,.98,.96,1,.96,.82,.74,.89,.74,.56,.64,.69,.66,0,0,0,0,0,0,0,.69,1,1,1,1,.49,0,0,0,0,0,0,0,0,0,0,0]},{quem:"caio",start:388.5,end:391.4,boca:[0,.3,.68,.87,.73,.6,.77,.93,.96,.97,.96,.95,.98,1,.99,.96,.91,.91,.95,.97,.98,.99,.95,.84,.79,.85,.93,.93,.81,.6,.36,.14,0,0,0,0,0,0,0,0,.15,.45,.64,.7,.7,.65,.63,.67,.69,.69,.76,.83,.85,.87,.84,.69,.68,.86,.94,.94,.95,.94,.93,.76,.45,.42,.71,.9,.84,.75,.75,.75,.7,.62,.45,.19,0,0,0,0,.36,.58,.75,.88,.92,.87,.61],round:[0,0,.97,.94,1,.53,.93,.97,.84,1,1,1,.94,.97,.99,1,1,1,1,1,.84,.87,.76,.42,0,.16,.89,.91,1,.84,.79,0,0,0,0,0,0,0,0,0,0,1,1,.86,.75,.56,.77,0,0,0,0,.86,.82,.71,.89,.37,0,.8,.89,.65,.29,.71,.76,.97,1,0,0,1,.99,1,1,1,1,1,1,0,0,0,0,0,0,0,0,.97,.91,.68,.17]},{quem:"pef",start:398.967,end:403.467,boca:[0,0,0,.14,.5,.83,.97,.99,1,1,.99,.96,.88,.79,.74,.75,.72,.59,.41,.25,0,0,0,0,0,0,0,.27,.75,.98,.94,.85,.79,.88,.97,.92,.84,.88,.97,.98,.94,.92,.95,.95,.85,.71,.73,.83,.83,.73,.63,.71,.88,.9,.84,.87,.95,.97,.96,.94,.92,.91,.93,.95,.87,.79,.89,.96,.93,.94,.95,.95,.95,.92,.87,.8,.71,.67,.67,.6,.44,.28,.15,0,0,0,0,0,.43,.8,.89,.83,.88,.96,.87,.73,.77,.88,.9,.84,.77,.69,.69,.83,.91,.86,.75,.74,.88,.97,.95,.94,.9,.76,.6,.55,.6,.74,.91,.95,.91,.87,.79,.65,.54,.45,.4,.31,.13,0,0,0,0,0,0],round:[0,0,0,0,.96,.64,1,1,1,.95,.87,.78,.47,.11,.92,1,.7,0,0,0,0,0,0,0,0,0,0,0,.6,.97,1,.71,.14,0,1,1,.92,1,1,.99,.94,1,.82,.78,.91,.97,0,.82,.19,0,0,0,.97,.94,1,1,1,1,.98,.89,.97,1,1,1,1,1,.84,1,1,1,1,.92,.92,.87,.81,.97,.94,.84,1,.86,.74,0,0,0,0,0,0,0,.82,1,.68,0,.41,1,1,.86,0,.04,.81,.01,0,0,0,.57,.95,.81,.43,0,.72,.9,.89,.88,.87,.89,1,1,1,.29,.91,.91,.87,.73,.68,.57,.6,0,0,.34,0,0,0,0,0,0,0]},{quem:"cic",start:430.433,end:431.6,boca:[.38,.43,.27,0,0,0,0,0,0,.42,.78,.88,.79,.66,.59,.58,.58,.61,.74,.9,.98,.99,.97,.91,.81,.72,.76,.79,.73,.71,.79,.87,.92,.97,.75],round:[1,1,0,0,0,0,0,0,0,0,.75,.65,.65,0,0,0,0,0,0,.33,1,.99,.76,.61,.77,1,.99,.92,1,1,1,1,1,.91,.74]},{quem:"tiago",start:467.6,end:472.067,boca:[.24,.36,.52,.72,.86,.93,.98,1,1,.94,.71,.46,.44,.54,.57,.57,.59,.63,.66,.66,.7,.69,.54,.37,.3,.23,0,0,0,0,0,0,0,.17,.17,.25,.57,.79,.73,.45,.29,.47,.44,.14,.25,.75,.94,.71,.54,.59,.54,.49,.57,.62,.66,.73,.82,.92,.98,.98,.85,.59,.31,.26,.52,.76,.84,.78,.68,.63,.63,.56,.52,.62,.72,.69,.42,.23,.4,.64,.79,.86,.82,.69,.56,.35,0,0,0,0,0,0,0,0,0,.12,.32,.6,.78,.79,.67,.57,.55,.61,.79,.95,.97,.77,.61,.69,.66,.55,.45,.29,.36,.6,.53,.21,.22,.59,.75,.67,.72,.83,.81,.69,.42,.15,0,0,0,0,0,0],round:[0,.86,.91,.79,.76,.64,.7,.68,.67,.75,.72,.01,.01,.49,.71,.59,.63,.69,.67,.64,.58,.6,.62,.53,.76,0,0,0,0,0,0,0,0,0,0,0,.35,.92,.97,.97,0,.78,1,0,0,.79,.74,.84,.98,.86,.92,.2,.51,1,.86,.92,.86,.66,.64,.55,.62,0,0,0,.69,.7,.63,.34,0,.07,.44,.81,.57,0,.47,.66,.67,0,.96,.84,.81,.67,.62,.55,.64,.7,0,0,0,0,0,0,0,0,0,0,1,.99,.82,.77,.42,0,0,0,.81,.81,.71,.64,0,0,.34,.98,.84,0,.42,.82,.75,0,0,.74,.58,.47,.59,.55,.66,.68,.73,0,0,0,0,0,0,0]},{quem:"mae",start:472.767,end:475.967,boca:[.17,.15,0,0,0,0,0,0,0,0,.21,.59,.86,.89,.85,.88,.9,.65,.46,.71,.96,.99,.98,.96,.82,.53,.4,.59,.8,.92,.98,1,.99,.92,.8,.76,.8,.74,.6,.51,.47,.56,.79,.92,.9,.83,.79,.81,.81,.76,.66,.43,.19,0,0,0,0,0,0,.26,.62,.83,.88,.86,.74,.67,.78,.89,.89,.85,.71,.56,.62,.79,.85,.86,.83,.62,.39,.42,.53,.58,.67,.85,.91,.82,.66,.41,.14,0,0,0,0,.17,.59,.67],round:[0,0,0,0,0,0,0,0,0,0,0,.76,.99,0,0,0,1,.97,.93,.49,.87,.68,.95,1,1,.31,.03,0,.64,.84,.81,.9,.91,.86,0,0,1,1,0,0,0,0,.87,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,.97,.98,0,0,.72,.99,1,1,1,.99,.47,.92,.9,.88,1,.99,.66,0,0,0,0,1,1,1,1,.92,0,0,0,0,0,0,.54,1]},{quem:"gui",start:475.8,end:477.633,boca:[0,0,0,.29,.68,.92,.98,1,1,1,1,.98,.92,.83,.75,.63,.41,.18,0,0,0,0,0,0,.35,.54,.66,.71,.71,.7,.69,.68,.68,.7,.76,.76,.75,.74,.54,.35,.55,.72,.66,.65,.73,.8,.84,.87,.88,.88,.86,.86,.86,.82,.58],round:[0,0,0,0,1,1,1,1,1,1,1,1,1,.96,1,.97,.74,0,0,0,0,0,0,0,.81,.89,.79,.22,0,0,0,0,0,0,1,1,1,.89,1,.75,.6,.94,1,1,1,1,1,1,1,1,1,1,1,1,1]},{quem:"mae",start:500.267,end:510.767,boca:[0,0,0,0,0,0,0,.21,.66,.94,.99,.99,.99,.99,.99,.99,1,.99,.99,.98,.99,.99,.99,.91,.75,.61,.52,.6,.84,.97,.98,.95,.93,.91,.88,.77,.63,.6,.65,.58,.4,.47,.78,.97,.99,.99,.98,.91,.76,.67,.77,.92,.98,.93,.87,.88,.81,.58,.39,.44,.7,.86,.88,.9,.93,.97,.99,.98,.95,.95,.94,.91,.9,.9,.89,.85,.81,.74,.55,.37,.49,.81,.96,.92,.9,.89,.8,.76,.85,.84,.76,.83,.89,.83,.7,.58,.63,.77,.82,.77,.68,.52,.25,0,0,0,0,0,0,0,0,0,0,0,.32,.67,.92,.99,.93,.81,.82,.94,.99,.96,.77,.58,.69,.89,.95,.89,.85,.92,.95,.84,.72,.75,.86,.89,.87,.73,.59,.67,.83,.85,.79,.79,.88,.97,1,1,.98,.94,.9,.89,.9,.89,.82,.63,.41,.4,.6,.8,.89,.83,.68,.61,.67,.72,.76,.75,.51,.16,0,.12,.48,.82,.94,.92,.84,.8,.83,.86,.89,.9,.92,.92,.9,.86,.82,.78,.71,.66,.66,.61,.39,0,0,0,0,0,0,0,0,0,0,0,0,0,.14,.52,.84,.92,.76,.49,.5,.69,.84,.92,.96,.98,.98,.98,.98,1,1,1,1,.99,.83,.58,.56,.54,.35,.38,.59,.63,.6,.67,.71,.66,.61,.63,.71,.75,.64,.55,.63,.77,.8,.74,.65,.54,.34,0,0,0,0,0,0,0,0,0,0,0,0,0,.3,.64,.84,.88,.9,.9,.84,.75,.77,.85,.7,.35,.3,.63,.79,.71,.66,.69,.73,.71,.74,.79,.71,.62,.61,.68,.76,.8,.77,.73,.77,.81,.84,.84,.74,.47,.25,.26,.37,.54,.67,.68,.66,.65,.62,.59,.57,.51,.31],round:[0,0,0,0,0,0,0,0,.98,1,1,1,.94,.87,.99,1,.95,.79,.87,.92,.87,.92,.92,1,0,0,.79,1,.74,.85,.88,.79,.71,1,1,1,0,0,0,0,0,0,.95,1,1,1,1,1,1,0,0,.91,.98,.96,1,1,.92,0,0,0,1,1,1,1,1,1,.94,1,1,1,.89,1,1,.97,.96,1,0,0,0,.63,.19,.96,.86,.95,1,.97,1,1,1,1,1,.94,.97,.95,1,.7,.83,1,1,.96,1,1,0,0,0,0,0,0,0,0,0,0,0,0,.9,.68,.98,1,1,.97,.87,.91,.82,.88,.99,1,.41,.99,1,.42,.39,.94,1,1,1,.64,.86,.94,1,1,.54,.98,.79,.89,1,1,1,.9,.78,.81,.82,1,1,.99,1,1,.91,.85,0,0,.11,.99,.97,1,.77,0,.54,1,.89,.89,1,0,0,0,0,1,1,1,1,1,.97,1,1,1,1,1,1,1,1,1,1,.94,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.49,1,.9,.96,.95,0,0,.89,1,1,1,1,1,1,1,1,1,.99,1,1,.87,0,1,.9,0,.25,1,.16,.99,.92,0,0,0,.38,1,1,.8,1,.91,.95,.9,.99,1,.91,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.83,1,1,1,1,1,.88,1,1,.96,.89,.12,1,1,0,0,0,1,1,.97,1,0,0,0,.53,.77,.92,1,1,1,1,1,1,1,.54,0,0,.04,.81,.93,.89,.98,1,1,1,1,1,1]},{quem:"gui",start:510.567,end:512.167,boca:[.48,.63,.61,.6,.57,.42,.19,0,0,0,0,.13,.48,.81,.95,.98,.98,.96,.97,.99,1,1,1,.99,.97,.86,.66,.5,.44,.4,.36,.32,.28,.21,0,0,0,.16,.55,.81,.85,.89,.95,.96,.93,.9,.87,.62],round:[1,1,1,1,1,1,0,0,0,0,0,0,.31,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,.52,1,.97,1,1,.95,0,0,0,0]},{quem:"juiz",start:548.567,end:549.6,boca:[0,0,0,.21,.66,.95,.99,.91,.79,.82,.9,.83,.73,.79,.92,.94,.95,.91,.78,.71,.74,.84,.87,.73,.51,.34,.3,.25,.15,0,0],round:[0,0,0,0,.46,.94,.85,.89,1,1,.99,1,1,.94,1,1,1,.94,0,0,0,.85,.84,.84,.81,.43,0,0,0,0,0]},{quem:"gui",start:578.933,end:580.333,boca:[0,0,0,0,0,0,0,0,.28,.6,.8,.85,.87,.91,.97,.97,.81,.63,.74,.94,1,.99,.98,.97,.93,.87,.75,.66,.73,.79,.75,.66,.54,.45,.35,.2,0,0,0,0,0,.2],round:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,.88,.62,.81,.72,0,.57,1,1,1,.82,.84,.95,1,.42,0,0,0,1,.36,.43,.37,0,0,0,0,0,0,0]},{quem:"gui",start:620.9,end:623.067,boca:[0,0,0,.4,.73,.89,.89,.8,.77,.85,.94,.97,.95,.91,.8,.56,.29,0,0,0,0,0,.15,.14,0,0,0,0,0,0,0,.35,.68,.85,.85,.7,.53,.61,.84,.96,.97,.86,.6,.43,.61,.85,.9,.83,.68,.54,.46,.4,.43,.52,.56,.7,.9,.98,1,1,.98,.94,.84,.56,.17],round:[0,0,0,1,1,.81,.85,.17,0,.82,.96,1,.8,.86,.97,.27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.42,.22,0,0,0,0,0,.91,1,.98,1,1,.56,.22,.93,1,.76,.22,0,0,.07,0,.76,.84,.8,.64,.99,.99,1,1,1,1,.89,0]},{quem:"davi",start:623.3,end:625.233,boca:[0,0,0,.44,.83,.99,.97,.88,.87,.95,.99,.98,.97,.96,.96,.95,.94,.9,.86,.86,.78,.69,.75,.83,.84,.88,.89,.88,.89,.84,.77,.81,.9,.89,.83,.84,.89,.9,.89,.88,.86,.85,.84,.78,.65,.44,.22,0,0,0,0,0,0,0,0,0,0,.21],round:[0,0,0,0,.21,1,1,1,.39,1,1,1,1,1,1,1,1,1,.95,.97,1,.97,.03,.58,.32,1,.99,0,0,0,0,.94,1,1,.72,1,1,1,1,1,1,1,1,1,1,.55,0,0,0,0,0,0,0,0,0,0,0,0]},{quem:"gui",start:646.5,end:648.133,boca:[0,0,0,.13,.5,.86,.99,1,1,.99,.98,.97,.93,.87,.85,.88,.89,.88,.9,.94,.95,.91,.88,.89,.92,.93,.91,.88,.86,.84,.82,.8,.7,.48,.21,0,0,0,0,0,0,.13,.44,.72,.8,.78,.77,.85,.69],round:[0,0,0,0,.78,1,1,1,1,1,1,1,.11,0,0,.97,1,1,1,1,1,.78,0,0,1,1,1,.99,1,1,1,1,1,.9,0,0,0,0,0,0,0,0,0,.74,1,1,1,1,1]},{quem:"davi",start:647.933,end:650.133,boca:[.41,.58,.52,.51,.7,.91,.97,.96,.94,.91,.79,.66,.71,.82,.88,.91,.9,.88,.88,.87,.87,.94,.98,.97,.96,.96,.93,.9,.88,.86,.85,.77,.69,.7,.75,.75,.67,.43,.13,0,0,0,0,0,0,0,0,.14,.46,.78,.95,.99,.89,.68,.64,.82,.93,.83,.73,.78,.89,.89,.85,.78,.52,.16],round:[.74,1,1,1,1,1,1,1,1,1,1,.97,.74,.93,.97,0,0,0,.87,.84,0,.79,1,1,1,1,1,1,.97,1,.99,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.39,0,1,.95,1,1,.33,.49,1,1,1,1,1,1,1,1,1,0]},{quem:"gui",start:650.267,end:652.433,boca:[0,0,0,.15,.53,.84,.94,.96,.92,.89,.89,.9,.95,.97,.94,.95,.97,.94,.91,.92,.92,.92,.93,.97,.99,.99,.97,.94,.9,.74,.46,.19,0,0,0,0,0,0,0,0,0,.31,.65,.9,.88,.75,.79,.93,.98,.98,.99,.98,.94,.89,.89,.91,.91,.88,.8,.64,.43,.22,0,0,0],round:[0,0,0,0,.4,.94,.99,1,0,0,0,0,1,.56,0,.15,1,.89,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,.15,.27,1,1,1,0,.51,1,1,1,1,.72,0,.08,1,1,1,1,.96,.3,0,0,0,0]},{quem:"davi",start:674.5,end:678.2,boca:[0,0,0,.18,.61,.93,.95,.89,.91,.94,.96,.97,.95,.91,.88,.89,.88,.84,.82,.6,.35,.55,.87,.97,.97,.96,.95,.94,.7,.42,.53,.79,.89,.88,.83,.84,.89,.89,.71,.44,.46,.71,.8,.75,.66,.51,.28,0,0,0,0,0,0,0,0,0,0,0,.14,.5,.63,.45,.49,.75,.83,.68,.68,.87,.9,.84,.81,.87,.91,.89,.87,.6,.25,.4,.79,.87,.69,.6,.7,.87,.96,.98,.96,.93,.92,.95,.98,.99,.98,.98,.97,.96,.93,.85,.76,.65,.48,.47,.68,.82,.85,.85,.85,.84,.76,.62,.39],round:[0,0,0,0,0,.31,.92,.91,.96,1,.97,.97,1,1,.73,0,0,0,.26,1,.86,0,.47,1,1,1,.98,.97,1,.89,.36,1,.96,.29,0,.34,1,1,1,1,0,.9,.94,.77,.93,.88,0,0,0,0,0,0,0,0,0,0,0,0,0,.53,.9,1,0,.89,1,0,0,1,.47,0,0,.16,1,1,1,1,0,.42,1,.94,1,.79,0,.42,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.77,0,.15,.8,.52,.9,1,.95,1,1]},{quem:"davi",start:678.667,end:680.833,boca:[0,0,.13,.44,.66,.73,.75,.81,.92,.99,1,1,.99,.93,.85,.85,.91,.97,.99,.99,.88,.74,.74,.81,.85,.89,.94,.96,.95,.94,.93,.97,.99,.98,.95,.94,.95,.84,.69,.73,.89,.98,.98,.96,.95,.94,.92,.9,.88,.81,.64,.34,0,0,0,0,0,0,0,0,.22,.69,.96,.98,.73],round:[0,0,0,0,0,0,0,0,.08,1,1,1,1,1,1,0,0,.52,.91,1,1,.96,0,0,1,.92,1,.47,0,0,0,1,1,1,1,1,1,1,.99,.16,1,1,1,1,1,1,1,1,1,1,1,.95,0,0,0,0,0,0,0,0,0,.86,1,0,0]},{quem:"gui",start:693.467,end:695.633,boca:[0,0,0,0,.2,.65,.93,.93,.86,.79,.72,.68,.68,.69,.71,.72,.77,.91,.99,.95,.79,.56,.4,.45,.65,.79,.86,.93,.92,.83,.77,.59,.33,.4,.56,.54,.62,.74,.72,.68,.71,.69,.64,.71,.89,.91,.69,.52,.67,.81,.76,.74,.83,.94,.98,.97,.99,.95,.74,.37,0,0,0,0,0],round:[0,0,0,0,0,1,1,.97,1,0,0,0,0,0,.87,.97,1,1,1,1,.51,0,0,0,.69,.97,1,.75,.88,0,0,.99,.06,0,1,1,.9,.89,0,0,0,.63,.53,.52,.74,.99,.12,0,0,.83,.83,.88,.89,.72,.82,.89,1,.95,.96,.34,0,0,0,0,0]},{quem:"davi",start:696.567,end:699.633,boca:[0,0,0,.18,.61,.92,.97,.83,.58,.63,.89,.91,.66,.42,.44,.61,.65,.53,.45,.47,.46,.41,.48,.62,.63,.5,.47,.55,.66,.74,.71,.59,.51,.58,.7,.76,.84,.95,.94,.83,.79,.77,.7,.55,.24,.13,.37,.58,.6,.6,.64,.67,.72,.8,.89,.91,.87,.83,.79,.76,.65,.47,.51,.6,.34,0,0,.31,.6,.73,.69,.64,.6,.43,.39,.42,.2,0,.17,.43,.4,.29,.27,.14,0,0,0,0,.19,.18,0,0],round:[0,0,0,0,.21,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.99,.94,1,1,1,1,1,1,1,1,1,1,1,.86,0,0,.98,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.84,1,1,0,0,.97,1,1,1,.77,1,1,.89,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0]}]};var pv=L0.total,mv=L0.segs;function B0(n,t){for(let e of L0.falas){if(e.quem!==n||t<e.start-.05||t>e.end+.05)continue;let i=(t-e.start)*30,s=Math.floor(i),o=i-s,r=e.boca[Math.max(0,Math.min(e.boca.length-1,s))]||0,a=e.boca[Math.max(0,Math.min(e.boca.length-1,s+1))]||0,l=e.round[Math.max(0,Math.min(e.round.length-1,Math.round(i)))]||0;return{open:r+(a-r)*o,round:l}}return{open:0,round:0}}function Ch(n,t,e,i){let s=Zu(n,t,e.bg||"#BFE3F7",e.fov||32),o=s.scene.background;s.camera.near=e.near||.05,s.camera.far=e.far||500,s.camera.updateProjectionMatrix();let r=null,a=null,l=()=>{H0&&H0!==s&&H0._desmonta(),H0=s,a=s.scene=new ho,a.background=o,e.fog&&(a.fog=new fr(e.fog[0],e.fog[1],e.fog[2])),r=i(a,s)||(()=>({}))};return s._desmonta=()=>{r&&(a.traverse(c=>{if(c.geometry&&c.geometry.dispose(),c.material)for(let h of[].concat(c.material))h.map&&!h.map.userData.fixa&&h.map.image&&h.map.image.tagName==="CANVAS"&&h.map.image.__dyn&&h.map.dispose(),h.dispose()}),s.scene=new ho,s.scene.background=o,r=null,a=null)},s.update=(c,h)=>{r||l(),bh.value=c,Ai={t0:n,t1:t,viva:e.viva??1,scene:a,perto:e.perto},L3(a);let d=r(c,h,s.camera)||{};e.limpa!==!1&&B3(a,s.camera);let u=a.userData.vida;if(u&&e.vida!==!1){let f=c;for(let g of u)g(c,f,h)}return Ju(d)},s}var H0=null,Ai={t0:0,t1:1,viva:1},Si=new _,Mr=new _,U0=new _,Fh=n=>n.userData._at||(n.userData._at=(()=>{let t=[];return n.traverse(e=>{e.userData&&e.userData.ator&&t.push(e.userData.ator)}),t})());function L3(n){for(let t of Fh(n))t._ocultei&&(t.root.visible=!0,t._ocultei=!1)}function B3(n,t){let e=t.userData.alvo;if(!e)return;n.updateMatrixWorld(!0),Mr.copy(t.position),U0.set(e[0],e[1],e[2]);let i=U0.clone().sub(Mr),s=i.lengthSq();for(let o of Fh(n)){if(!o.root.visible||o.fixo)continue;let r=!1;for(let d=o.root.parent;d;d=d.parent)if(d.visible===!1){r=!0;break}if(r)continue;o.headG.getWorldPosition(Si),Si.y+=.26*(o.root.scale.x||1);let a=Si.distanceTo(Mr),l=Math.max(0,Math.min(1,Si.clone().sub(Mr).dot(i)/s)),c=Si.distanceTo(Mr.clone().addScaledVector(i,l)),h=Si.distanceTo(U0)<.55;(a<.75||!h&&l>.02&&l<.8&&c<.3*(o.root.scale.x||1)&&a<Mr.distanceTo(U0)-.4)&&(o.root.visible=!1,o._ocultei=!0)}}var _r=(n,t)=>Math.sin(n*.71+t)*.6+Math.sin(n*1.37+t*2.1)*.3+Math.sin(n*2.9+t*3.3)*.1;function sf(n,t,e,i,s=0,o=Ai.viva){let r=na(t,i),a=na(e,i);if(o>0){let l=bh.value,c=Math.hypot(r[0]-a[0],r[1]-a[1],r[2]-a[2]),h=Math.min(1,Math.max(0,(l-Ai.t0)/Math.max(.5,Ai.t1-Ai.t0))),d=Ai.t1-Ai.t0>6.5&&h>.5?.2*o:0,u=.05*o*(h*h*(3-2*h))+d;for(let g=0;g<3;g++)r[g]+=(a[g]-r[g])*u;let f=c*.011*o;r[0]+=_r(l,1)*f,r[1]+=_r(l,4)*f*.7,r[2]+=_r(l,7)*f*.5,a[0]+=_r(l,9)*f*.35,a[1]+=_r(l,12)*f*.3,s+=_r(l,15)*.006*o}if(Ai.scene&&Ai.perto!==!0){let l=Fh(Ai.scene);for(let c of l)if(c.root.visible&&(c.headG.getWorldPosition(Si),Si.y+=.26*(c.root.scale.x||1),Math.hypot(Si.x-a[0],Si.y-a[1],Si.z-a[2])<.45)){let h=(Ai.perto||.71*(c.root.scale.x||1))/Math.tan(n.fov*Math.PI/360),d=Math.hypot(r[0]-a[0],r[1]-a[1],r[2]-a[2]);if(d<h&&d>.001)for(let u=0;u<3;u++)r[u]=a[u]+(r[u]-a[u])*h/d;break}}$u(n,r,a,s),n.userData.alvo=a}function I(n,t,e,i="neutro",s={}){let o=t?B0(t,e):{open:0,round:0},r=s.mouth||(o.open>0?{open:o.open,round:o.round,smile:s.smile}:{open:0,smile:s.smile});n.face({emo:i,blink:s.blink??nf(e,n.seed||0),look:s.look||[0,0],brow:s.brow,lagrima:s.lagrima,olhosAbertos:s.olhosAbertos,blush:s.blush,lingua:s.lingua,pisca1:s.pisca1,mouth:r});let a=n.headG.rotation,l=n.torsoG.rotation,c=n._viva;if(c&&a.x===c.r[0]&&a.y===c.r[1]&&a.z===c.r[2]&&l.x===c.r[3]&&l.z===c.r[4]&&(a.x-=c.d[0],a.y-=c.d[1],a.z-=c.d[2],l.x-=c.d[3],l.z-=c.d[4]),!n.congelado&&s.vivo!==!1){let h=(n.seed||0)*1.7,d=e*(s.lento??1),u=o.open||0,f=[.03*Math.sin(d*1.05+h)+u*.09*(.6+.4*Math.sin(d*7.3+h)),.045*Math.sin(d*.63+h*2)+u*.05*Math.sin(d*3.1+h),.025*Math.sin(d*.81+h*3),.018*Math.sin(d*2.2+h),.01*Math.sin(d*.9+h)];a.x+=f[0],a.y+=f[1],a.z+=f[2],l.x+=f[3],l.z+=f[4],n._viva={d:f,r:[a.x,a.y,a.z,l.x,l.z]}}else n._viva=null;return n}function Ph(n,t,e={},i=1){let s=B0(n,t).open,o=Math.sin(t*2.3),r=Math.sin(t*1.7+1);return{...e,shR:[(e.shR?.[0]??0)+18*s*i+6*o*i,(e.shR?.[1]??8)+6*s*i],elR:(e.elR??10)+40*s*i,shL:[(e.shL?.[0]??0)+8*s*i*r,e.shL?.[1]??8],headX:(e.headX??0)-3*s+1.5*o,headZ:(e.headZ??0)+2*r*s}}function Gs(n,t,e,i,s=0){return n.root.rotation.set(-Math.PI/2+s,0,0),n.root.position.set(t,e+.2,i),n.sombra.visible=!1,n}function Ri(n,t=.4){let e=Gt(256,256,s=>{if(s.lineJoin="round",s.lineWidth=14,s.strokeStyle="#1B1420",s.textAlign="center",s.textBaseline="middle",n==="coracao")s.fillStyle="#F2546E",s.beginPath(),s.moveTo(128,214),s.bezierCurveTo(20,140,30,50,100,52),s.bezierCurveTo(118,54,128,70,128,82),s.bezierCurveTo(128,70,138,54,156,52),s.bezierCurveTo(226,50,236,140,128,214),s.fill(),s.stroke(),s.fillStyle="#FFFFFF88",s.beginPath(),s.ellipse(88,92,18,12,-.6,0,7),s.fill();else if(n==="gota")s.fillStyle="#8FD3F2",s.beginPath(),s.moveTo(128,30),s.bezierCurveTo(200,130,200,210,128,214),s.bezierCurveTo(56,210,56,130,128,30),s.fill(),s.stroke();else{let o={interrogacao:"?",exclamacao:"!",zzz:"Z",notas:"\u266A"}[n]||n;s.font="900 200px Inter",s.fillStyle=n==="exclamacao"?"#F2C14E":"#FFFFFF",s.strokeText(o,128,136),s.fillText(o,128,136)}}),i=new ci(new ti({map:e,transparent:!0,depthWrite:!1}));return i.scale.setScalar(t),i.renderOrder=10,i}function Qt(n,t,e,i=0,s=.48){let o=n.root.scale.x||1;return n.place(t,e,s-.28*o,i),n.sombra.visible=!1,n}function Kt(n,t,e,i="neutro",s={},o=1,r={}){return n.pose(Ph(t,e,s,o)),I(n,t,e,i,r)}var Bt={mundo:{value:0},ouro:{value:0},alvo:{value:0},claro:{value:0}},H3=`{ float l_ = dot(gl_FragColor.rgb, vec3(.2126,.7152,.0722));
  vec3 cinza_ = vec3(l_) * .7 + .08;
  vec3 ouro_ = vec3(l_) * vec3(1.08, .84, .46) + vec3(.07, .04, .0);
  vec3 alvo_ = mix(cinza_, ouro_, uOuro);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, alvo_, uCinza); }
#include <dithering_fragment>`;function of(n,t){!n||n.userData.fpOk===n.uuid||n.isShaderMaterial||n.isRawShaderMaterial||n.isLineBasicMaterial||n.userData.fp&&n.userData.fp!==t&&n.userData.fpOk===n.uuid||(n.userData.fp=n.userData.fp==="alvo"?"alvo":t,t=n.userData.fp,n.userData.fpOk=n.uuid,n.onBeforeCompile=e=>{e.uniforms.uCinza=t==="alvo"?Bt.alvo:Bt.mundo,e.uniforms.uOuro=t==="alvo"?Bt.claro:Bt.ouro,e.fragmentShader=`uniform float uCinza; uniform float uOuro;
`+e.fragmentShader.replace("#include <dithering_fragment>",H3)},n.customProgramCacheKey=()=>"foco-"+t,n.needsUpdate=!0)}function Vt(n,t={}){let e=xh(t.borda??.03,t.cor||"#FFFFFF",3.2).clone();e.uniforms.res.value.set(1920,1080);let i=[];for(let o of[].concat(n)){let r=[];o.traverse(a=>{a.isMesh&&!a.userData.isOutline&&!a.userData.borda&&r.push(a)});for(let a of r)if(a.material=[].concat(a.material).map(l=>{if(l.userData.fp==="alvo"&&l.userData.fpOk===l.uuid)return l;let c=l.clone();return c.userData={...l.userData},c.userData.fp="alvo",delete c.userData.fpOk,of(c,"alvo"),c}),a.material.length===1&&(a.material=a.material[0]),!(t.semBorda||a.isSkinnedMesh||a.material.transparent&&!a.material.alphaTest)&&a.geometry&&a.geometry.attributes.normal&&!a.userData.semBorda){let l=new it(a.geometry,e);l.userData.isOutline=!0,l.userData.borda=!0,l.renderOrder=-1,a.add(l),i.push(l)}}let s=(o,r=0)=>{let a=o>.02;for(let l of i)l.visible=a;e.uniforms.w.value=(t.borda??.03)*o*(.75+.25*Math.sin(r*6))};return s(0),s}function rf(n){n.traverse(t=>{if((t.isMesh||t.isSprite||t.isPoints)&&!t.userData.isOutline)for(let e of[].concat(t.material))of(e,"mundo")})}function qt(n,t,e,i=0){let s=new wt(t),o=s.r*.2126+s.g*.7152+s.b*.0722,r=new wt(o*.7+.08,o*.7+.08,o*.7+.08),a=new wt(o*1.08+.07,o*.84+.04,o*.46);r.lerp(a,i),n.background=s.clone().lerp(r,e)}function af(){Bt.mundo.value=0,Bt.ouro.value=0,Bt.alvo.value=0,Bt.claro.value=0}var lf=(n,t=.9)=>(e,i,s)=>{e.fillStyle=n,e.fillRect(0,s*t,i,s*(1-t))},U3={pele:"#E3AE86",cabelo:"topete",corCabelo:"#4A2A18",nariz:!0,sobr:"#3A2014"},cf=(n,t,e)=>{n.fillStyle="#80868E",n.beginPath(),n.roundRect(t*.3,e*.56,t*.4,e*.3,26),n.fill(),n.strokeStyle="#6C727A",n.lineWidth=6,n.beginPath(),n.moveTo(t*.33,e*.6),n.lineTo(t*.33,e*.82),n.moveTo(t*.67,e*.6),n.lineTo(t*.67,e*.82),n.stroke(),n.strokeStyle="#F4F1EA",n.lineWidth=7;for(let i of[-1,1])n.beginPath(),n.moveTo(t/2+i*34,0),n.lineTo(t/2+i*40,e*.3),n.stroke(),n.fillStyle="#F4F1EA",n.beginPath(),n.arc(t/2+i*40,e*.31,9,0,7),n.fill();n.fillStyle="#7A8088",n.fillRect(0,e*.92,t,e*.08)},Et={...U3,camisa:"#959BA3",manga:"longa",calca:"#1E1E22",meia:"#E3AE86",tenis:"#E3AE86",sola:"#1E2A44",chinelo:"#1E2A44",escala:.95,estampa:cf},Nv={...Et,luva:"#1A1A1E"},N3=(n,t,e)=>{n.fillStyle="#F7F1E3",n.beginPath(),n.roundRect(t*.27,e*.16,t*.46,e*.84,30),n.fill();let i=["#E2443A","#F2C230","#3E7CC8","#5AA84E","#E57AA0"];for(let s=0;s<30;s++){let o=t*.29+s*97%(t*.42),r=e*.2+s*53%(e*.76);n.fillStyle=i[s%5];for(let a=0;a<5;a++){let l=a/5*6.283;n.beginPath(),n.arc(o+Math.cos(l)*9,r+Math.sin(l)*9,7,0,7),n.fill()}n.fillStyle="#F2C230",n.beginPath(),n.arc(o,r,5,0,7),n.fill()}n.strokeStyle="#E2443A",n.lineWidth=8,n.beginPath(),n.moveTo(t*.27,e*.5),n.lineTo(0,e*.5),n.moveTo(t*.73,e*.5),n.lineTo(t,e*.5),n.stroke()},z3={pele:"#D9A07A",cabelo:"coque",corCabelo:"#C9C6C0",oculos:!0,rugas:!0,cilios:!0,nariz:!0,tronco:"senhora",camisa:"#7FA6C9",calca:"#5A6A8A",saia:"#5A6A8A",meia:"#D9A07A",tenis:"#D9A07A",sola:"#C84E4E",chinelo:"#C84E4E",escala:.84,estampa:N3},zv={...z3,camisa:"#B23A5A",saia:"#B23A5A",calca:"#B23A5A",sola:"#3A2A2A",estampa:(n,t,e)=>{n.fillStyle="#F4D8E0";for(let i=0;i<46;i++)n.beginPath(),n.arc(i*131%t,i*67%e,7,0,7),n.fill();lf("#8E2A44",.9)(n,t,e)},batom:!0};var N0=[["#3E7CC8","#2A2A33","#2A1E1A","topete","#D9A07A"],["#E57AA0","#3A3550","#5A3020","chanel","#E8B48C"],["#58B26A","#2F4E86","#1C1416","afro","#8E5A3A"],["#F2994A","#3A3A44","#C9A060","curto","#F0C8A6"],["#9B6CC4","#2A2A33","#1C1416","curto","#B07A52"],["#2FB5A8","#4A3A2A","#3A2418","rabo","#E3B28E"],["#F2D24A","#2F4E86","#2A1E1A","tigela","#6E4430"],["#E8E4DE","#5A5A66","#6A5A4A","coque","#D9A07A"]],xi=(n,t={})=>{let[e,i,s,o,r]=N0[n%N0.length];return{camisa:e,calca:i,corCabelo:s,cabelo:o,pele:r,cilios:["rabo","coque","chanel"].includes(o),nariz:!0,tenis:["#F4F1EA","#2A2A30","#E2443A"][n%3],...t}},Gi=(n,t={})=>xi(n,{camisa:"#F6F4EE",calca:"#2F4E86",escala:.94,estampa:(e,i,s)=>{lf("#2F4E86",.88)(e,i,s),e.fillStyle="#2F4E86",e.beginPath(),e.arc(i/2+120,s*.55,34,0,7),e.fill()},...t}),hf=(n,t={})=>xi(n+2,{escala:.66,meia:N0[(n+2)%8][4],tenis:N0[(n+2)%8][4],sola:["#2D8CD6","#E2443A","#F2C230"][n%3],chinelo:["#2D8CD6","#E2443A","#F2C230"][n%3],...t});function df(n){let t=wh(n);if(n.estampa===cf){let e=Me(new nn(.13,.055,10,22),n.camisa,{out:.008});e.rotation.x=Math.PI/2.4,e.position.set(0,.34,-.09),t.torsoG.add(e);let i=ae(.1,"#80868E",0,.3,-.15,{seg:14});i.scale.set(1.2,.7,.6),t.torsoG.add(i)}if(n.chinelo)for(let e of["L","R"]){let i=t.legs[e].an;for(let s of[-1,1]){let o=Me(new we(.016,.014,.1),n.chinelo,{out:.003});o.position.set(s*.032,.013,.085),o.rotation.set(0,-s*.62,0),i.add(o)}i.add(Me(new Ee(.011,8,6),n.chinelo,{pos:[0,.014,.125]}))}return t}var P=(n,t,e,i,s=0,o)=>sf(n,typeof t[0]=="number"?[[0,t]]:t,typeof e[0]=="number"?[[0,e]]:e,i,s,o);function V(n,t,e=0,i=0,s=0,o=0){let r=df(t);return r.place(e,i,o,s),n.add(r.root),r.root.userData.ator=r,r.seed=Math.abs(e*13+i*7|0)%9,r}var k3={shL:[0,8],shR:[0,8],hipL:[0,0],hipR:[0,0]},G3={elL:8,elR:8};function mt(n,...t){let e={...n};for(let i of t)if(i)for(let s in i){let o=i[s];if(Array.isArray(o)){let r=e[s]||k3[s]||[0,0];e[s]=[r[0]+(o[0]||0),r[1]+(o[1]||0),(r[2]||0)+(o[2]||0)]}else e[s]=(e[s]??G3[s]??0)+o}return e}var V3={io:ln,out:fn,in:C0,lin:n=>et(n),back:n=>{n=et(n);let t=1.9;return 1+(t+1)*Math.pow(n-1,3)+t*Math.pow(n-1,2)},mola:n=>(n=et(n),1-Math.cos(n*Math.PI*2.5)*Math.exp(-n*5))};function br(n,t){if(n<=t[0][0])return t[0][1];for(let e=1;e<t.length;e++)if(n<=t[e][0]){let i=V3[t[e][2]||"io"]((n-t[e-1][0])/Math.max(1e-6,t[e][0]-t[e-1][0])),s=t[e-1][1],o=t[e][1];return Array.isArray(s)?s.map((r,a)=>$(r,o[a],i)):$(s,o,i)}return t[t.length-1][1]}var Ih=(n,t)=>Math.sin(n*.71+t)*.6+Math.sin(n*1.37+t*2.1)*.3+Math.sin(n*2.9+t*3.3)*.1;function Cn(n,t=0,e=1){let i=Math.sin(n*1.9+t),s=Ih(n*.35,t*2.3),o=Ih(n*.6,t*4.1);return{bob:i*.004*e-Math.abs(s)*.008*e,lean:i*.8*e,tilt:s*2.2*e,hipL:[0,s*2*e],hipR:[0,-s*2*e],knL:Math.max(0,s)*9*e,knR:Math.max(0,-s)*9*e,shL:[o*3*e,i*1.2*e],shR:[-o*3*e,i*1.2*e],elL:(4+o*4)*e,elR:(4-o*4)*e,headY:Ih(n*.4,t*7)*6*e,headZ:-s*1.5*e}}var ve=(n,t=0,e=1)=>mt({shL:[0,9],shR:[0,9],elL:12,elR:12},Cn(n,t,e));function $e(n,t={}){let e=t.f||1.8,i=t.amp??1,s=t.ph||0,o=I0(n,e,i,s),r=Math.sin((n*e+s)*Math.PI*2);return o.headY=-r*3*i,o.tilt=r*1.8*i,o.headZ=-r*1.2*i,t.chinelo&&(o.knL*=.8,o.knR*=.8,o.hipL[0]*=.85,o.hipR[0]*=.85),t.curvado&&(o.lean+=10,o.headX=-6),t.maos==="bolso"&&(o.shL=[18+r*2,0,-90],o.shR=[18-r*2,0,-90],o.elL=105,o.elR=105),o}var cn=(n,t=2.9,e=1)=>{let i=D0(n,t,e),s=Math.sin(n*t*Math.PI*2);return i.headY=-s*3,i.tilt=s*2.5,i},oe={bracoCruzado:{shL:[30,4,-75],shR:[26,4,-80],elL:95,elR:95,lean:-3},maosCintura:{shL:[-15,55,-90],shR:[-15,55,-90],elL:85,elR:85,lean:-2},maosBolso:{shL:[18,0,-90],shR:[18,0,-90],elL:105,elR:105,lean:2,headX:4},maosCabeca:{shL:[150,38],shR:[150,38],elL:130,elR:130,headX:-6},bracosAbertos:{shL:[55,55],shR:[55,55],elL:22,elR:22,lean:-4,headX:-4},abraco:{shL:[70,20,-80],shR:[70,20,-80],elL:50,elR:50,lean:8},maosFrente:{shL:[80,8],shR:[80,8],elL:14,elR:14,lean:6},desculpa:{shL:[55,22],shR:[55,22],elL:85,elR:85,lean:-3,headX:6,headZ:6},ombros:{shL:[10,24],shR:[10,24],elL:70,elR:70,headZ:10,bob:.015},celular:{shR:[62,6],elR:72,shL:[30,10],elL:60},filmar:{shR:[88,2],elR:38,shL:[70,-6],elL:60,headX:2},co\u00E7arOlho:{shR:[118,-8],elR:150,headX:8,headZ:-6},apontar:{shR:[92,6],elR:4},punhoFecha:{shR:[70,10],elR:105,headX:18},pegaChao:{lean:52,bob:-.18,hipL:[64,6],hipR:[60,6],knL:85,knR:80,shL:[74,6],shR:[74,6],elL:6,elR:6,headX:-20},carregaFrente:{lean:-10,shL:[22,-4],shR:[22,-4],elL:50,elR:50,knL:12,knR:12,bob:-.02,headX:-6},quadril:{shL:[-6,30],elL:100,shR:[8,10],elR:20,tilt:-6,lean:3},ajoelhado:{bob:-.3,lean:6,hipL:[92,4],hipR:[-6,4],knL:92,knR:98,shL:[12,10],shR:[12,10],elL:25,elR:25},sentadoChao:{bob:-.48,lean:-10,hipL:[80,18],hipR:[80,18],knL:30,knR:30,shL:[-30,20],shR:[-30,20],elL:10,elR:10},testaParede:{lean:22,shL:[100,18],elL:85,shR:[10,8],elR:15,headX:16},comemora:{shL:[160,30],shR:[160,30],elL:20,elR:20,headX:-12},assustado:{shL:[30,22],shR:[30,22],elL:100,elR:100,lean:-8,headX:-6},aceno:{shR:[150,30],elR:30}};var vo=(n,t=1)=>{let e=Math.abs(Math.sin(n*9));return{bob:e*.01*t,headX:-8*t-e*4*t,shL:[e*5*t,8+e*4*t],shR:[e*5*t,8+e*4*t],lean:-3*t}},Vi=(n,t=2.2,e=0)=>{let i=Math.max(0,Math.sin((n*t+e)*Math.PI*2));return{bob:i*.16,knL:(1-i)*30,knR:(1-i)*30,hipL:[(1-i)*18,4],hipR:[(1-i)*18,4],shL:[140+i*20,30],shR:[140+i*20,30],elL:30,elR:30,headX:-10}};function kn(n,t=0,e=1){let i=Cn(n,t,e);return delete i.hipL,delete i.hipR,delete i.knL,delete i.knR,delete i.bob,i}var ff=new _,pf=new li;function Yt(n,t,e="R",i=[0,-.08,.03],s){t.root.updateMatrixWorld(!0);let o=t.hands[e];o.localToWorld(ff.set(...i)),n.position.copy(ff),s!==!1&&(o.getWorldQuaternion(pf),n.quaternion.copy(pf),s&&n.rotateX(s[0]).rotateY(s[1]).rotateZ(s[2]))}var pt=(n={})=>{if(!(n.hipL&&n.hipL[0]===0&&n.hipR&&n.hipR[0]===0))return oa(n);let e=oa({});return{...oa(n),hipL:[e.hipL[0],e.hipL[1]+n.hipL[1]],hipR:[e.hipR[0],e.hipR[1]+n.hipR[1]],knL:e.knL+(n.knL||0),knR:e.knR+(n.knR||0),bob:e.bob+(n.bob||0)}};function B(n,t,e,i){return e={perto:.42,...e},Ch(n,t,e,(s,o)=>{let r=i(s,o);return rf(s),(a,l,c)=>(af(),r?r(a,l,c)||{}:{})})}var z0={w:300,h:600};function wi(n,t,e,i="#14161C"){n.fillStyle=i,n.fillRect(0,0,t,e)}var We=(n,t,e,i,s,o,r=800,a="center")=>{n.fillStyle=o,n.font=`${r} ${s}px Inter`,n.textAlign=a,n.textBaseline="middle",n.fillText(t,e,i)},Lh={apagada:(n,t,e)=>wi(n,t,e,"#0A0A0E"),bloqueio:(n,t,e,i=0)=>{let s=n.createLinearGradient(0,0,0,e);s.addColorStop(0,"#3A4A8A"),s.addColorStop(1,"#8A4A7A"),n.fillStyle=s,n.fillRect(0,0,t,e),We(n,"19:42",t/2,120,64,"#FFFFFF",300),n.fillStyle="rgba(255,255,255,.85)",n.beginPath(),n.roundRect(20,200,t-40,70,16),n.fill(),n.fillStyle="#3EC860",n.beginPath(),n.roundRect(32,212,46,46,10),n.fill(),We(n,"Tiago",92,225,20,"#1A1A1E",800,"left"),We(n,"mano olha isso kkkk",92,250,16,"#3A3A44",600,"left")},chat:(n,t,e,i=0)=>{wi(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),We(n,"Tiago",70,38,22,"#FFF",800,"left"),[[0,"mano olha isso kkkk"],[1,"kkkkkkk"],[0,"bora jogar?"],[1,"depois"]].slice(0,1+Math.floor(i*4)).forEach(([o,r],a)=>{n.fillStyle=o?"#D8F8C8":"#FFFFFF";let l=30+r.length*10;n.beginPath(),n.roundRect(o?t-l-16:16,100+a*70,l,48,12),n.fill(),We(n,r,o?t-l/2-16:16+l/2,124+a*70,18,"#1A1A1E",600)})},foto:(n,t,e,i=0)=>{wi(n,t,e,"#FFFFFF"),n.fillStyle="#F4A05A",n.fillRect(0,80,t,300),n.fillStyle="#F2C230",n.beginPath(),n.arc(200,170,40,0,7),n.fill(),n.fillStyle="#5AA84E",n.beginPath(),n.moveTo(0,380),n.lineTo(120,240),n.lineTo(240,380),n.fill();let s=1+Math.sin(Math.min(1,i*2)*Math.PI)*.5;n.save(),n.translate(50,420),n.scale(s,s),n.fillStyle=i>.2?"#F2546E":"#FFFFFF",n.strokeStyle="#1A1A1E",n.lineWidth=3,n.beginPath(),n.moveTo(0,14),n.bezierCurveTo(-26,-6,-12,-24,0,-10),n.bezierCurveTo(12,-24,26,-6,0,14),n.fill(),n.stroke(),n.restore(),We(n,1203+(i>.2?1:0)+" curtidas",80,420,18,"#1A1A1E",800,"left")},tapete:(n,t,e,i=0)=>{wi(n,t,e,"#0E0E12"),n.fillStyle="#5A4A3A",n.fillRect(0,160,t,280);let s=t*et(i);n.fillStyle="#C8463A",n.fillRect(0,160,s,280),n.strokeStyle="#F2C230",n.lineWidth=6;for(let o=0;o<6;o++)n.beginPath(),n.arc(s/2,300,20+o*22,0,7),n.stroke();n.fillStyle="rgba(255,255,255,.7)",n.fillRect(s-6,160,12,280),n.fillStyle="#FF2A2A",n.fillRect(0,e-12,t*(.2+i*.7),6),We(n,"LIMPEZA DE TAPETE SATISFAT\xD3RIA",t/2,500,15,"#FFFFFF",800)},xadrez:(n,t,e,i=0)=>{wi(n,t,e,"#262421");let s=t/8;for(let r=0;r<8;r++)for(let a=0;a<8;a++)n.fillStyle=(r+a)%2?"#769656":"#EEEED2",n.fillRect(r*s,150+a*s,s,s);let o=["\u265C","\u265E","\u265D","\u265B","\u265A","\u265D","\u265E","\u265C"];n.font=`${s*.8}px serif`,n.textAlign="center",n.textBaseline="middle",o.forEach((r,a)=>{n.fillStyle="#1A1A1E",n.fillText(r,a*s+s/2,150+s/2),n.fillText("\u265F",a*s+s/2,150+s*1.5),n.fillStyle="#FFFFFF",n.fillText("\u2659",a*s+s/2,150+s*6.5),n.fillText(o[a].replace("\u265C","\u2656").replace("\u265E","\u2658").replace("\u265D","\u2657").replace("\u265B","\u2655").replace("\u265A","\u2654"),a*s+s/2,150+s*7.5)}),We(n,"ABERTURAS: SICILIANA",t/2,90,18,"#FFFFFF",800),We(n,"Partida "+Math.floor(1+i*199),t/2,500,20,"#B8B8B8",700)},mensagens:(n,t,e,i=0)=>{Lh.bloqueio(n,t,e),n.fillStyle="rgba(20,20,28,.9)",n.beginPath(),n.roundRect(16,200,t-32,110,18),n.fill(),We(n,String(Math.round(27*et(i*1.3))),t/2,240,50,"#3EC860",900),We(n,"MENSAGENS N\xC3O LIDAS",t/2,286,17,"#FFFFFF",800)},views:(n,t,e,i=0)=>{wi(n,t,e,"#0E0E12"),n.fillStyle="#3A3A44",n.fillRect(0,60,t,300),n.fillStyle="#C9893E",n.beginPath(),n.ellipse(t/2,220,70,90,0,0,7),n.fill(),n.fillStyle="#E3AE86",n.beginPath(),n.arc(t/2,110,36,0,7),n.fill();let s=Math.round(2e5*Math.pow(et(i),2.2));We(n,s.toLocaleString("pt-BR")+" visualiza\xE7\xF5es",20,390,20,"#FFFFFF",800,"left"),n.fillStyle="#F2546E",We(n,"\u2665 "+Math.round(s/9).toLocaleString("pt-BR"),20,425,20,"#F2546E",800,"left")},chamadas:(n,t,e,i=0)=>{wi(n,t,e,"#101016"),We(n,"14",t/2,180,110,"#FF4A4A",900),We(n,"CHAMADAS PERDIDAS",t/2,260,20,"#FFFFFF",900),We(n,i>.5?"M\xC3E":"",t/2,310,34,"#FFFFFF",900),n.strokeStyle="rgba(255,255,255,.55)",n.lineWidth=2;let s=210,o=120;for(let r=0;r<9;r++){let a=r*.7;n.beginPath(),n.moveTo(s,o),n.lineTo(s+Math.cos(a)*260,o+Math.sin(a)*260),n.stroke()}n.beginPath(),n.arc(s,o,40,0,7),n.stroke()},chamadasBorrado:(n,t,e,i=0)=>{wi(n,t,e,"#101016"),n.filter="blur(5px)",We(n,"14",t/2,180,110,"#FF4A4A",900),We(n,"CHAMADAS PERDIDAS",t/2,260,20,"#FFFFFF",900),We(n,"\u25A0\u25A0\u25A0",t/2,310,34,"#FFFFFF",900),n.filter="none",n.strokeStyle="rgba(255,255,255,.7)",n.lineWidth=2;let s=90,o=420;for(let r=0;r<9;r++){let a=r*.7;n.beginPath(),n.moveTo(s,o),n.lineTo(s+Math.cos(a)*300,o+Math.sin(a)*300),n.stroke()}n.beginPath(),n.arc(s,o,36,0,7),n.stroke()},mensagemMae:(n,t,e,i=0)=>{Lh.chamadas(n,t,e,1);let s="ele ficou esperando voc\xEA na porta da escola at\xE9 a apresenta\xE7\xE3o acabar",o=Math.floor(s.length*et(i));n.fillStyle="#2E8E6A",n.beginPath(),n.roundRect(16,360,t-32,190,16),n.fill(),We(n,"M\xE3e",32,382,16,"#D8F8C8",800,"left"),n.fillStyle="#FFFFFF",n.font="700 19px Inter",n.textAlign="left";let r=s.slice(0,o).split(" "),a="",l=414;for(let c of r)n.measureText(a+c).width>t-70&&(n.fillText(a,32,l),a="",l+=26),a+=c+" ";n.fillText(a,32,l)},audio:(n,t,e,i=0)=>{wi(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),We(n,"Tiago",70,38,22,"#FFF",800,"left"),n.fillStyle="#FFFFFF",n.beginPath(),n.roundRect(16,240,t-60,70,18),n.fill(),n.fillStyle="#2E8E6A";for(let s=0;s<26;s++){let o=6+Math.abs(Math.sin(s*1.7+i*30))*30*(s/26<i?1:.4);n.fillRect(70+s*7,275-o/2,4,o)}n.beginPath(),n.moveTo(36,260),n.lineTo(56,275),n.lineTo(36,290),n.fill()},coxinha:(n,t,e,i=0)=>{wi(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),We(n,"Tiago",70,38,22,"#FFF",800,"left"),n.fillStyle="#D8F8C8",n.beginPath(),n.roundRect(60,120,t-76,260,14),n.fill(),n.fillStyle="#F4E6C0",n.fillRect(72,132,t-100,180),n.fillStyle="#D9892E",n.beginPath(),n.moveTo(t/2+20,160),n.quadraticCurveTo(t/2+90,280,t/2+20,290),n.quadraticCurveTo(t/2-50,280,t/2+20,160),n.fill(),We(n,"desculpa mano, bora?",t/2+20,345,18,"#1A1A1E",800),i>.5&&We(n,"\u2713\u2713",t-40,365,14,"#3EA6FF",900)},conversa:(n,t,e)=>{wi(n,t,e,"#E8DDD0"),n.fillStyle="#2E8E6A",n.fillRect(0,0,t,70),We(n,"Tiago",70,38,22,"#FFF",800,"left"),n.fillStyle="#FFFFFF",n.beginPath(),n.roundRect(16,380,230,60,12),n.fill(),We(n,"vem aqui em casa hoje? \u{1F382}",130,410,16,"#1A1A1E",700),We(n,"\u2713\u2713",220,430,13,"#9A9A9A",900)}};function Be(){let n=new J;n.add(at(.075,.15,.012,"#1B1A20",0,0,0,{r:.008,out:.003}));let t=document.createElement("canvas");t.width=z0.w,t.height=z0.h;let e=t.getContext("2d"),i=new wn(t);i.colorSpace=Ve;let s=new re({map:i}),o=new it(new bt(.066,.132),s);o.position.z=.0065,n.add(o);let r="";return n.tela=(a,l=0,c=1)=>{let h=a+"|"+Math.round(l*60);h!==r&&(r=h,Lh[a](e,z0.w,z0.h,l),i.needsUpdate=!0),s.color.setScalar(c)},n.tela("apagada"),n.userData.tela=o,n.scale.setScalar(1.7),n}function O0(n=1){let t=new J,e=kt("#E8B828",{emissive:"#5A4008",emissiveIntensity:.2});t.add(Me(new ei(.16,.16,.05,40),e,{out:.006,rot:[Math.PI/2,0,0]})),t.add(ct(.03,.03,.05,e,0,.19,0,{out:.004})),t.add(Me(new nn(.04,.01,8,18),e,{out:.003,pos:[0,.25,0]}));let i=document.createElement("canvas");i.width=512,i.height=512;let s=i.getContext("2d"),o=new wn(i);o.colorSpace=Ve;let r=new it(new bi(.14,40),new re({map:o,color:"#D8D0C0"}));r.position.z=.026,t.add(r);let a=-1;return t.set=(l,c=0)=>{let h=Math.round(l*4)+c*1e3;if(h===a)return;a=h,s.fillStyle="#FFF8E6",s.fillRect(0,0,512,512),s.strokeStyle="#8A6A10",s.lineWidth=8;for(let g=0;g<60;g++){let E=g/60*6.283;s.beginPath(),s.moveTo(256+Math.sin(E)*230,256-Math.cos(E)*230),s.lineTo(256+Math.sin(E)*(g%5?214:196),256-Math.cos(E)*(g%5?214:196)),s.stroke()}let d=Math.floor(l/60),u=Math.floor(l%60);c>0&&(s.shadowColor="#F2C230",s.shadowBlur=40*c),s.fillStyle="#3A2A08",s.font="700 120px 'IBM Plex Mono'",s.textAlign="center",s.textBaseline="middle",s.fillText(String(d).padStart(2,"0")+":"+String(u).padStart(2,"0"),256,330),s.shadowBlur=0;let f=l%60/60*6.283;s.strokeStyle="#C8302A",s.lineWidth=10,s.beginPath(),s.moveTo(256,256),s.lineTo(256+Math.sin(f)*190,256-Math.cos(f)*190),s.stroke(),s.fillStyle="#C8302A",s.beginPath(),s.arc(256,256,14,0,7),s.fill(),o.needsUpdate=!0},t.set(0),t.scale.setScalar(n),t}var Dh=null;function Tn(n,t,e={}){let i=e.n||40,s=e.cor||"#7AF0B0",o=[];Dh||(Dh=Gt(64,64,r=>{let a=r.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.6,"rgba(255,255,255,.85)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,64,64)}));for(let r=0;r<i;r++){let a=new ci(new ti({map:Dh,color:s,transparent:!0,depthWrite:!1}));a.scale.setScalar(e.tam||.02),n.add(a);let l=__sr()*6.283,c=__sr()*2-1;o.push({s:a,d:new _(Math.cos(l)*Math.sqrt(1-c*c),c*.6+(e.sobe||0),Math.sin(l)*Math.sqrt(1-c*c)),v:.4+__sr()*.6,ph:__sr()})}return(r,a=0)=>{for(let l of o){let c=et((r-l.ph*.3)/.7);l.s.visible=c>0&&c<1,l.s.position.set(t[0]+l.d.x*c*(e.r||.3)*l.v,t[1]+l.d.y*c*(e.r||.3)*l.v+(e.g||0)*c*c,t[2]+l.d.z*c*(e.r||.3)*l.v),l.s.material.opacity=1-c}}}function Tr(n,t,e,i,s={}){let o=["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F2546E","#FFFFFF"],r=[];for(let a=0;a<(s.n||90);a++){let l=new it(new bt(.035,.022),new re({color:o[a%6],side:Ze}));n.add(l),r.push({m:l,x:(__sr()-.5)*(s.w||3),z:(__sr()-.5)*(s.d||2),ph:__sr()*(s.h||3),r:__sr()*6})}return a=>{for(let l of r){let c=e+(s.h||3)-(a*(s.v||.8)+l.ph)%(s.h||3);l.m.position.set(t+l.x+Math.sin(a*2+l.r)*.1,c,i+l.z),l.m.rotation.set(a*3+l.r,a*2+l.r,0)}}}var yo=(n,t,e=.35)=>t.some(i=>n>=i&&n<i+e)?Math.sin(n*90)*.004:0;function gs(n,t=.4,e=0,i=0){n.updateMatrixWorld(!0);let s=new _(i,0,1).applyQuaternion(n.getWorldQuaternion(new li)).normalize(),o=n.getWorldPosition(new _);return[o.x+s.x*t,o.y+s.y*t+e,o.z+s.z*t]}var w4=Math.PI/180;var C4={s:0,n:Math.PI,e:Math.PI/2,w:-Math.PI/2};function mf(n,t,e,i=0,s=0,o=0,r=0){let a=new it(new bt(n,t),e);return a.position.set(i,s,o),a.rotation.y=r,a.receiveShadow=!0,a}var ra=(n,t)=>t[Math.floor(n()*t.length)%t.length];var Ci=(n,...t)=>{let e=new J;for(let i of t)e.add(i);return e.userData.pe=n,e};var W3=["#3E7CC8","#C84E4E","#5AA84E","#8E6CC4","#D98A3A","#4FB8A0","#7A8696","#B5603E"];function gf(n=2.1,t="#3E7CC8"){let e=Ci([n,.9]),i=new wt(t).multiplyScalar(.82).getStyle();e.add(at(n,.42,.86,t,0,.21+.08,0,{out:.014,r:.08})),e.add(at(n,.5,.22,i,0,.62,-.32,{out:.014,r:.08}));for(let o of[-1,1])e.add(at(.2,.58,.86,i,o*(n/2-.1),.37,0,{out:.014,r:.07}));let s=Math.max(2,Math.round(n/.8));for(let o=0;o<s;o++)e.add(at((n-.44)/s-.03,.14,.62,t,-n/2+.22+(n-.44)/s*(o+.5),.56,.06,{out:.012,r:.06}));for(let o of[-1,1])for(let r of[-1,1])e.add(ct(.03,.02,.08,"#3A2A20",o*(n/2-.1),.04,r*.34,{seg:6}));return e.add(at(.4,.36,.12,"#F2C230",-n/2+.45,.72,-.17,{out:.012,r:.06,rot:[-.25,.2,0]})),e}function Ef(n=1.6,t="#7A5233"){let e=Ci([n,.45]);e.add(at(n,.5,.42,t,0,.25,0,{out:.012}));for(let s of[-1,1])e.add(tt(n/2-.06,.36,.01,"#5E3E26",s*n/4,.25,.215));e.add(at(1.2,.7,.06,"#1B1A20",0,.5+.45,-.05,{out:.012})),e.add(tt(.3,.03,.18,"#2A2A30",0,.515,-.05)),e.add(tt(.06,.1,.04,"#2A2A30",0,.56,-.05));let i=X3();return i.position.set(0,.95,-.016),e.add(i),e.userData.tela=i,e.add(at(.3,.06,.15,"#2A2A30",.45,.53,.05)),e}var aa=null;function X3(n=1.12,t=.62){aa||(aa=Gt(512,1024,s=>{[["#6FB4EC","#5AA84E"],["#F2994A","#3E2A60"],["#2E6FB8","#E8DCC8"],["#58B26A","#F2C230"]].forEach(([r,a],l)=>{let c=l*256;s.fillStyle=r,s.fillRect(0,c,512,256),s.fillStyle=a,s.fillRect(0,c+170,512,86),s.fillStyle="#F4D2B0",s.beginPath(),s.arc(180+l*40,c+120,44,0,7),s.fill(),s.fillStyle="#2A1E1A",s.beginPath(),s.arc(180+l*40,c+100,44,Math.PI,0),s.fill(),s.fillStyle=["#E2443A","#2E9C6A","#F2C230","#3E7CC8"][l],s.fillRect(120+l*40,c+160,120,96),s.fillStyle="rgba(0,0,0,.55)",s.fillRect(0,c+214,512,42),s.fillStyle="#FFF",s.font="700 26px Inter, Arial",s.fillText(["JORNAL DA SERRA","NOVELA DAS NOVE","PREVIS\xC3O DO TEMPO","FUTEBOL AO VIVO"][l],16,c+244)})}),aa.wrapT=Vn,aa.repeat.set(1,.25));let e=aa.clone();e.needsUpdate=!0,e.repeat.set(1,.25);let i=new it(new bt(n,t),new re({map:e,toneMapped:!1}));return i.userData.vivo=!0,i.userData.tv=!0,i}function vf(n=1,t=0){let e=Ci([.45,.45]),i=xe(t+2);e.add(ct(.2,.15,.38,ra(i,["#C8643C","#F4F1EA","#3A3A44","#D9B07A"]),0,.19,0,{out:.012,seg:14})),e.add(ct(.18,.18,.02,"#5A3A24",0,.37,0));for(let s=0;s<7;s++){let o=s/7*6.283,r=Me(new Ee(.16,10,6),s%2?"#4E9A48":"#5FAE52",{out:.01});r.scale.set(.6,1.8*n,.35),r.position.set(Math.cos(o)*.12,.55+n*.25,Math.sin(o)*.12),r.rotation.set(Math.sin(o)*.5,o,-Math.cos(o)*.5),e.add(r)}return e}function Bh(n,t,e=0,i="paisagem"){let s=xe(e+8),o=Gt(256,Math.round(256*t/n),(l,c,h)=>{if(i==="paisagem")l.fillStyle="#8EC8EC",l.fillRect(0,0,c,h),l.fillStyle="#6FA866",l.beginPath(),l.moveTo(0,h*.7),l.quadraticCurveTo(c*.3,h*.35,c*.6,h*.62),l.quadraticCurveTo(c*.8,h*.5,c,h*.6),l.lineTo(c,h),l.lineTo(0,h),l.fill(),l.fillStyle="#9E9A94",l.beginPath(),l.ellipse(c*.66,h*.45,c*.1,h*.22,0,Math.PI,0),l.fill(),l.fillStyle="#F2C230",l.beginPath(),l.arc(c*.2,h*.22,h*.09,0,7),l.fill();else if(i==="familia"){l.fillStyle="#E8DCC8",l.fillRect(0,0,c,h);for(let d=0;d<3;d++){let u=c*(.28+d*.22),f=h*.45;l.fillStyle=["#2C6E7F","#E57AA0","#3A9AD9"][d],l.fillRect(u-26,f+20,52,h),l.fillStyle=["#9A6646","#E8B48C","#E3AE86"][d],l.beginPath(),l.arc(u,f,24,0,7),l.fill(),l.fillStyle=["#2B2422","#5A3020","#4A2A18"][d],l.beginPath(),l.arc(u,f-6,24,Math.PI,0),l.fill()}}else if(i==="poster")l.fillStyle=ra(s,["#1F2D4E","#3E2A60","#E2443A"]),l.fillRect(0,0,c,h),l.fillStyle="#F2C230",l.beginPath(),l.arc(c/2,h*.4,c*.25,0,7),l.fill(),l.fillStyle="#FFF",l.font=`900 ${c*.13}px Inter, Arial`,l.textAlign="center",l.fillText(ra(s,["ROCK","GAMER","FUTEBOL","ESPA\xC7O"]),c/2,h*.85);else{l.fillStyle="#F4F1EA",l.fillRect(0,0,c,h);for(let d=0;d<6;d++)l.fillStyle=ra(s,W3),l.beginPath(),l.arc(s()*c,s()*h,10+s()*30,0,7),l.fill()}}),r=Ci([0,0]);r.add(at(n+.08,t+.08,.04,"#7A5233",0,0,.02,{out:.008}));let a=mf(n,t,$t(o),0,0,.042);return r.add(a),r}function Hh(n=2.2,t="#F4F1EA",e="#3A3A44"){let i=Ci([n,.62]);i.add(at(n,.86,.58,t,0,.43,0,{out:.012,r:.02})),i.add(tt(n+.02,.04,.62,e,0,.88,0,{out:.01}));let s=Math.round(n/.5);for(let a=0;a<s;a++){let l=-n/2+n/s*(a+.5);i.add(tt(n/s-.03,.7,.01,t,l,.45,.295)),i.add(tt(.12,.02,.02,"#9AA0A8",l+(a%2?-.12:.12),.7,.31))}i.add(tt(.6,.02,.4,"#C9CED6",-n/4,.905,0)),i.add(tt(.52,.03,.34,"#8D949C",-n/4,.9,0));let o=new J;o.position.set(-n/4,.9,-.22),o.add(ct(.02,.02,.28,"#C9CED6",0,.14,0,{seg:8}));let r=ct(.015,.015,.2,"#C9CED6",0,.28,.08,{seg:8});return r.rotation.x=Math.PI/2,o.add(r),i.add(o),i.add(ct(.1,.09,.24,"#B5603E",n/2-.3,1.02,0,{out:.01})),i.add(ct(.11,.11,.03,"#8E4A2E",n/2-.3,1.15,0)),i.add(at(.3,.05,.2,"#F2C230",n/4,.93,.05)),i}function Uh(n="#F4F1EA"){let t=Ci([.62,.62]);t.add(at(.6,.86,.6,n,0,.43,0,{out:.012,r:.02})),t.add(tt(.5,.38,.01,"#2A2A30",0,.36,.301)),t.add(tt(.44,.3,.01,"#4A4A52",0,.36,.305)),t.add(tt(.6,.02,.6,"#2A2A30",0,.87,0));for(let[s,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(ct(.08,.08,.02,"#4A4A52",s*.14,.89,o*.14,{seg:14})),t.add(ct(.05,.05,.03,"#1B1A20",s*.14,.9,o*.14,{seg:10}));for(let s=0;s<4;s++)t.add(ct(.025,.025,.03,"#1B1A20",-.2+s*.13,.8,.31,{rot:[Math.PI/2,0,0],seg:8}));t.add(tt(.6,.5,.04,n,0,1.12,-.29));let e=new J;e.position.set(.14,.9,.14),e.add(ct(.12,.11,.14,"#9AA0A8",0,.07,0,{out:.01})),e.add(ct(.125,.125,.015,"#8D949C",0,.15,0));let i=tt(.2,.02,.03,"#2A2A30",.2,.1,0);return e.add(i),t.add(e),t}function Nh(n="#F4F1EA"){let t=Ci([.72,.7]);t.add(at(.7,1.8,.68,n,0,.9,0,{out:.014,r:.05})),t.add(tt(.66,.015,.01,"#C9CED6",0,1.25,.345)),t.add(tt(.03,.4,.04,"#C9CED6",-.28,1.5,.36)),t.add(tt(.03,.5,.04,"#C9CED6",-.28,.8,.36));for(let e=0;e<4;e++)t.add(at(.08,.06,.01,["#E2443A","#F2C230","#3E7CC8","#5AA84E"][e],-.1+e*.1-(e>1?.05:0),1.55-e%2*.12,.345));return t.add(at(.3,.26,.3,"#E8DCC8",0,1.93,0)),t}function la(n="#9A6236"){let t=Ci([.45,.45]);t.add(at(.42,.05,.42,n,0,.46,0,{out:.01}));for(let[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(tt(.04,.46,.04,n,e*.18,.23,i*.18));return t.add(tt(.04,.5,.04,n,-.18,.72,-.18)),t.add(tt(.04,.5,.04,n,.18,.72,-.18)),t.add(at(.4,.2,.03,n,0,.85,-.19,{out:.01})),t}function zh(n=1,t="#B87A4A"){let e=Ci([n,.45]);e.add(at(n,.85,.44,t,0,.425,0,{out:.012}));for(let i=0;i<3;i++)e.add(tt(n-.08,.22,.01,new wt(t).multiplyScalar(.88).getStyle(),0,.18+i*.25,.221)),e.add(tt(.16,.02,.02,"#7A5233",0,.25+i*.25,.23));return e.add(ct(.06,.08,.03,"#F4F1EA",n/2-.2,.87,0)),e.add(at(.2,.25,.03,"#7A5233",-n/4,.98,-.1,{rot:[-.15,0,0]})),e}function yf(){let n=Ci([.4,.65]);return n.add(Me(new ei(.19,.15,.4,18),"#FFFFFF",{pos:[0,.2,.05],out:.01})),n.add(ct(.2,.2,.04,"#F4F1EA",0,.42,.05,{out:.008})),n.add(at(.38,.38,.17,"#FFFFFF",0,.6,-.22,{out:.01})),n.add(tt(.06,.02,.02,"#C9CED6",.12,.8,-.13)),n}function Mf(n=!0){let t=Ci([.55,.45]);return t.add(at(.55,.2,.45,"#FFFFFF",0,.78,0,{out:.01})),t.add(ct(.08,.1,.7,"#FFFFFF",0,.35,-.05,{seg:12})),t.add(ct(.016,.016,.16,"#C9CED6",0,.96,-.15,{seg:8})),n&&(t.add(at(.5,.7,.03,"#C9CED6",0,1.5,-.21,{out:.01})),t.add(new it(new bt(.44,.64),new pe({color:"#CFE6F2",emissive:"#9CC9E8",emissiveIntensity:.3})).translateY(1.5).translateZ(-.19))),t}var kh=new Map,Vs=(n,t)=>(kh.has(n)||kh.set(n,t()),kh.get(n)),Ws=(n,t=1,e=1)=>(n.wrapS=n.wrapT=Vn,n.repeat.set(t,e),n);var _f=()=>Vs("asf",()=>Ws(Gt(256,256,n=>{n.fillStyle="#5B5F68",n.fillRect(0,0,256,256);let t=xe(7);for(let e=0;e<900;e++)n.fillStyle=t()<.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.07)",n.fillRect(t()*256,t()*256,2+t()*3,2+t()*3);n.strokeStyle="rgba(30,30,36,.18)",n.lineWidth=3,n.beginPath(),n.moveTo(30,200),n.bezierCurveTo(80,180,120,230,170,210),n.stroke()}))),bf=(n="#D9D2C5",t="#CBC2B3")=>Vs("calc"+n,()=>Ws(Gt(128,128,e=>{e.fillStyle=n,e.fillRect(0,0,128,128),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillRect(64,64,64,64),e.strokeStyle="rgba(0,0,0,.12)",e.lineWidth=2,e.strokeRect(1,1,126,126),e.beginPath(),e.moveTo(64,0),e.lineTo(64,128),e.moveTo(0,64),e.lineTo(128,64),e.stroke()})));var Tf=(n="#78B85A")=>Vs("gr"+n,()=>Ws(Gt(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let e=xe(11);for(let i=0;i<700;i++){let s=e();t.fillStyle=s<.5?"rgba(40,90,30,.16)":"rgba(220,255,160,.14)";let o=e()*256,r=e()*256;t.fillRect(o,r,2,5+e()*5)}for(let i=0;i<6;i++)t.fillStyle="rgba(40,90,30,.10)",t.beginPath(),t.ellipse(e()*256,e()*256,20+e()*30,12+e()*20,e()*3,0,7),t.fill()}))),Af=()=>Vs("terra",()=>Ws(Gt(256,256,n=>{n.fillStyle="#C49468",n.fillRect(0,0,256,256);let t=xe(5);for(let e=0;e<800;e++)n.fillStyle=t()<.5?"rgba(90,50,20,.12)":"rgba(255,230,190,.12)",n.beginPath(),n.arc(t()*256,t()*256,1+t()*3,0,7),n.fill()})));var Es=n=>Vs("reb"+n,()=>Ws(Gt(128,128,t=>{t.fillStyle=n,t.fillRect(0,0,128,128);let e=xe(n.length*13);for(let i=0;i<160;i++)t.fillStyle=e()<.5?"rgba(0,0,0,.035)":"rgba(255,255,255,.05)",t.fillRect(e()*128,e()*128,3+e()*5,2+e()*4)}))),Sf=(n="#B5603E")=>Vs("tij"+n,()=>Ws(Gt(256,256,t=>{t.fillStyle="#D8CBB8",t.fillRect(0,0,256,256);let e=xe(4);for(let i=0;i<16;i++)for(let s=0;s<5;s++){let o=i%2?26:0,r=e()*.2-.1;t.fillStyle=n,t.globalAlpha=.85+r,t.fillRect(s*52+o-26+2,i*16+2,48,12)}t.globalAlpha=1}))),Wi=(n="madeira",t="#C8935E",e="#B98450")=>Vs("piso"+n+t+e,()=>Ws(Gt(256,256,i=>{if(n==="madeira")for(let s=0;s<8;s++){i.fillStyle=s%2?t:e,i.fillRect(0,s*32,256,32),i.fillStyle="rgba(0,0,0,.12)",i.fillRect(0,s*32,256,2),i.fillRect(s*97%256,s*32,2,32),i.fillStyle="rgba(80,40,10,.08)";for(let o=0;o<4;o++)i.fillRect((s*37+o*61)%256,s*32+10+o*3,40,2)}else if(n==="xadrez")for(let s=0;s<4;s++)for(let o=0;o<4;o++)i.fillStyle=(s+o)%2?t:e,i.fillRect(s*64,o*64,64,64);else if(n==="granilite"){i.fillStyle=t,i.fillRect(0,0,256,256);let s=xe(17);for(let o=0;o<900;o++)i.fillStyle=["#00000022","#FFFFFF33",e+"88"][o%3],i.fillRect(s()*256,s()*256,2+s()*4,2+s()*3)}else{i.fillStyle=t,i.fillRect(0,0,256,256),i.strokeStyle=e,i.lineWidth=4;for(let s=0;s<=4;s++)i.beginPath(),i.moveTo(s*64,0),i.lineTo(s*64,256),i.moveTo(0,s*64),i.lineTo(256,s*64),i.stroke();i.fillStyle="rgba(255,255,255,.08)",i.fillRect(8,8,40,20)}}))),k0=(n="#F4F1EA",t="#D9E8EE",e="#7FB2C8")=>Vs("azu"+n+t+e,()=>Ws(Gt(128,128,i=>{i.fillStyle=n,i.fillRect(0,0,128,128),i.fillStyle=t,i.fillRect(64,0,64,64),i.fillRect(0,64,64,64),i.strokeStyle=e,i.lineWidth=3,i.beginPath(),i.arc(96,32,14,0,7),i.arc(32,96,14,0,7),i.stroke(),i.strokeStyle="rgba(0,0,0,.14)",i.lineWidth=2,i.strokeRect(0,0,64,64),i.strokeRect(64,64,64,64),i.strokeRect(64,0,64,64),i.strokeRect(0,64,64,64)})));function Gh(){let n=new J;n.add(ct(.17,.17,.36,"#5E7A99",0,.25,0,{seg:24,out:.008})),n.add(ae(.17,"#5E7A99",0,.43,0,{seg:24}).translateY(0)),n.children[1].scale.y=.45,n.add(ct(.17,.15,.08,"#4E6A88",0,.04,0,{seg:24,out:.006})),n.add(ct(.04,.05,.06,"#B9BEC6",0,.53,0,{seg:12}));let t=new it(new nn(.11,.018,8,24,Math.PI),kt("#4E6A88"));t.position.set(0,.52,0),n.add(t);let e=new it(new bt(.18,.12),$t(Gt(180,120,i=>{i.fillStyle="#F2C230",i.fillRect(0,0,180,120),i.fillStyle="#C0392B",i.font="900 40px Inter",i.textAlign="center",i.fillText("G\xC1S",90,60),i.font="700 22px Inter",i.fillText("13 kg",90,95)})));return e.position.set(0,.26,.172),n.add(e),n.userData.alca=[0,.62,0],n}function Vh(){let n=new J;n.add(ct(.05,.038,.08,"#F4F1EA",0,.04,0,{seg:16,out:.005}));let t=ct(.044,.044,.004,"#5A3418",0,.074,0,{seg:16});n.add(t),n.userData.cafe=t;let e=new it(new nn(.022,.007,6,14),kt("#F4F1EA"));return e.position.set(.055,.045,0),n.add(e),n.add(ct(.075,.07,.01,"#F4F1EA",0,.005,0,{seg:18})),n}function si(n="#2E6FB8"){let t=new J;return t.add(at(.3,.38,.16,n,0,0,0,{out:.008,r:.05})),t.add(at(.22,.16,.06,new wt(n).multiplyScalar(.8).getStyle(),0,-.07,.1,{r:.03})),t}function G0(n="#3EA6FF"){let t=new J,e=tt(.012,.1,.01,n,0,.05,0),i=tt(.012,.08,.01,n,0,.14,0);return i.add(tt(.014,.03,.012,"#F4F1EA",0,.03,.008)),t.add(e,i),t.userData.cabo=e,t.userData.ponta=i,t}function Rf(){let n=new J;return n.add(ct(.02,.02,.08,"#C9CED6",0,0,.04,{rot:[Math.PI/2,0,0],seg:10,out:.004})),n.add(ct(.018,.018,.07,"#C9CED6",0,-.03,.08,{seg:10})),n.add(tt(.06,.015,.015,"#C9CED6",0,.03,.03)),n}function Wh(n="#F4F1EA"){let t=new J,e=at(.44,.04,.42,n,0,.44,0,{out:.006});t.add(e);let i=at(.44,.4,.04,n,0,.68,-.2,{out:.006});i.rotation.x=-.12,t.add(i);let s=[];for(let[o,r]of[[-.19,-.18],[.19,-.18],[-.19,.18],[.19,.18]]){let a=new J;a.position.set(o,.43,r),a.add(ct(.02,.025,.44,n,0,-.22,0,{seg:8,out:.004})),t.add(a),s.push([a,o,r])}return t.abrir=o=>{e.position.y=.44-.38*o,i.position.y=.68-.38*o,i.rotation.x=-.12-.5*o,s.forEach(([r,a,l])=>{r.position.y=.43-.38*o,r.rotation.set(Math.sign(l)*1.4*o,0,-Math.sign(a)*1.4*o)})},t}function Xh(){let n=new J;n.add(ct(.2,.2,.03,"#F4F1EA",0,.015,0,{seg:28,out:.005})),n.add(ct(.16,.16,.12,"#5A3018",0,.09,0,{seg:28,out:.006}));let t=ct(.165,.165,.025,"#3A1E10",0,.16,0,{seg:28});n.add(t);for(let s=0;s<12;s++){let o=s/12*6.283;n.add(ae(.014,"#F2546E",Math.cos(o)*.14,.175,Math.sin(o)*.14,{seg:6}))}let e=new J;e.position.y=.17,n.add(e);for(let[s,o]of[[-1,"1"],[1,"7"]]){let r=new it(new bt(.07,.09),$t(Gt(70,90,a=>{a.fillStyle="#F2C230",a.font="900 86px Inter",a.textAlign="center",a.textBaseline="middle",a.strokeStyle="#B88A1A",a.lineWidth=6,a.strokeText(o,35,48),a.fillText(o,35,48)}),{transparent:!0,alphaTest:.4,side:Ze}));r.position.set(s*.035,.055,0),e.add(r)}let i=new it(new Xn(.012,.035,8),new re({color:"#FFB43A"}));return i.position.set(0,.13,0),e.add(i),e.add(tt(.003,.02,.003,"#2A2A2A",0,.105,0)),n.userData.chama=i,n.userData.cobertura=t,n}function xf(){let n=new J,t=new J,e=new J;n.add(t,e),t.add(at(.6,.1,.8,"#A9A49C",-.3,.78,0,{out:.008,r:.02})),e.add(at(.6,.1,.8,"#A9A49C",.3,.78,0,{out:.008,r:.02})),n.add(ct(.14,.18,.74,"#9A958C",0,.37,0,{seg:12,out:.008}));for(let i of[-1,1]){let s=new J;s.add(at(.9,.08,.3,"#A9A49C",0,.44,0,{out:.006})),s.add(ct(.08,.1,.42,"#9A958C",0,.21,0,{seg:10})),s.position.z=i*.75,n.add(s)}return n.userData.A=t,n.userData.B=e,n}function Ar(n="#E2443A"){let t=new J;t.add(at(1.7,.55,3.7,n,0,.5,0,{out:.012,r:.12})),t.add(at(1.5,.5,2,n,0,1,-.25,{out:.01,r:.14}));let e=new pe({color:"#2A3A4E"});for(let[s,o,r,a,l,c]of[[1.38,.38,0,1.02,.76,0],[1.38,.36,0,1.02,-1.26,Math.PI]]){let h=new it(new bt(s,o),e);h.position.set(r,a,l),h.rotation.y=c,t.add(h)}for(let s of[-1,1]){let o=new it(new bt(1.8,.36),e);o.position.set(s*.76,1.02,-.25),o.rotation.y=s*Math.PI/2,t.add(o)}let i=[];for(let[s,o]of[[-.78,1.15],[.78,1.15],[-.78,-1.2],[.78,-1.2]]){let r=ct(.32,.32,.22,"#1E1E22",s,.32,o,{rot:[0,0,Math.PI/2],seg:18,out:.006});t.add(r),i.push(r),t.add(ct(.16,.16,.23,"#B9BEC6",s,.32,o,{rot:[0,0,Math.PI/2],seg:12}))}for(let s of[-1,1])t.add(tt(.3,.14,.04,"#F4F1EA",s*.55,.62,1.86)),t.add(tt(.26,.12,.04,"#E2443A",s*.58,.66,-1.86));return t.add(tt(1.6,.14,.14,"#2A2A30",0,.3,1.88)),t.add(tt(1.6,.14,.14,"#2A2A30",0,.3,-1.88)),t.userData.rodas=i,t}function wf(){let n=new J;n.add(at(.6,.04,.45,"#C9A06A",0,.72,0,{out:.006})),n.add(tt(.04,.7,.04,"#4A4E58",-.26,.35,-.18)),n.add(tt(.04,.7,.04,"#4A4E58",.26,.35,-.18)),n.add(tt(.04,.7,.04,"#4A4E58",-.26,.35,.18)),n.add(tt(.04,.7,.04,"#4A4E58",.26,.35,.18));let t=n.children[0];return n.userData.tampo=t,n}function Cf(){let n=new J,t=new J;return n.add(t),t.add(ct(.08,.1,4.2,"#8E949C",0,2.1,0,{seg:10,out:.006})),t.add(tt(.9,.06,.06,"#8E949C",.45,4.1,0)),t.add(at(.3,.1,.16,"#5A6270",.85,4.05,0)),n.entortar=e=>{t.rotation.z=-e*.45},n}function Mo(n=.4){let t=new J;t.add(tt(.008,n,.008,"#2A2A30",0,-n/2,0));let e=new it(new Ee(.045,14,10),new pe({color:"#FFF2C8",emissive:"#FFE6A0",emissiveIntensity:1}));return e.position.y=-n-.03,t.add(e),t.userData.bulbo=e,t}var _o=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=Vn,i.repeat.set(t,e),i.needsUpdate=!0,i},Yn=(n,t,e,i,s,o,r=0,a=0)=>{let l=new it(new bt(n,t),e);return l.position.set(i,s,o),l.rotation.set(r,a,0),l.receiveShadow=!0,l},Ff=(n,t=1,e=1)=>$t(_o(Es(n),t,e));function V0(n,t,e=220){let i=Gt(8,512,o=>{let r=o.createLinearGradient(0,0,0,512);t.forEach(([a,l])=>r.addColorStop(a,l)),o.fillStyle=r,o.fillRect(0,0,8,512)}),s=new it(new Ee(e,24,16),new re({map:i,side:dn,fog:!1,depthWrite:!1}));return s.renderOrder=-10,n.add(s),s}var Pf={tarde:[[0,"#5A7AB8"],[.38,"#E89A62"],[.5,"#F7C98A"],[.56,"#F2B070"],[1,"#C8946A"]],dia:[[0,"#5EA8E8"],[.45,"#A8D6F4"],[.55,"#E4F2FA"],[1,"#CFE4EE"]],manha:[[0,"#6CB0EA"],[.45,"#B4DCF4"],[.55,"#F4EAD2"],[1,"#D8E6EE"]]};function q3(n,t,e,i,s,o={}){let r=new J,a=3.2+i*2.8,l=s[t%s.length];r.add(Me(new we(4,a,e),$t(_o(Es(l),2,2)),{pos:[-2,a/2,0],out:.012}));for(let h=0;h<i;h++)for(let d=0;d<Math.max(1,Math.floor(e/2.4));d++){let u=-e/2+(d+.5)*e/Math.max(1,Math.floor(e/2.4));r.add(tt(.06,1.2,1,"#E8E2D6",.02,3.2+h*2.8+1.2,u)),r.add(Yn(.9,1.1,kt(n()>.5?"#6E8CA8":"#8EA8BE"),.06,3.2+h*2.8+1.2,u,0,Math.PI/2)),r.add(tt(.18,.06,1.1,"#D8D2C4",.1,3.2+h*2.8+.6,u))}let c=null;if(o.casa){r.add(tt(.12,1.6,e,new wt(l).multiplyScalar(.85).getStyle(),1.6,.8,0,{out:.008}));let h=new J;h.position.set(1.62,0,-e*.2),r.add(h);for(let d=0;d<9;d++)h.add(tt(.03,1.5,.03,"#2F4A3A",0,.75,-.6+d*.15));h.add(tt(.04,.05,1.3,"#2F4A3A",0,1.45,0)),h.add(tt(.04,.05,1.3,"#2F4A3A",0,.2,0)),r.add(tt(.06,1.1,1.3,"#E8E2D6",.02,1.7,e*.2)),r.add(Yn(1.2,1,kt("#7E98B0"),.06,1.7,e*.2,0,Math.PI/2)),r.add(Me(new we(4.6,.25,e+.3),kt("#B8643C"),{pos:[-2,a+.1,0],out:.01}))}else{c=Yn(e*.7,2,new pe({color:"#BFD6E2",emissive:"#FFE8C0",emissiveIntensity:.25,transparent:!0,opacity:.85}),.03,1.35,0,0,Math.PI/2),r.add(c),r.add(tt(.08,2.3,.12,"#3A3A44",.04,1.2,-e*.35)),r.add(tt(.08,2.3,.12,"#3A3A44",.04,1.2,e*.35)),r.add(tt(.08,.1,e*.72,"#3A3A44",.04,2.4,0));for(let d=0;d<3;d++)r.add(tt(.3,.04,e*.6,"#8A6A4A",-.4,.7+d*.55,0));for(let d=0;d<12;d++)r.add(tt(.12,.16+n()*.1,.14,["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F2546E"][d%5],-.4,.82+d%3*.55,-e*.28+d/12*e*.56));let h=ju(o.loja??t,e*.9);h.position.set(.15,2.95,0),h.rotation.y=Math.PI/2,r.add(h)}return{g:r,vid:c,H:a}}function Fi(n,t={}){let e=(t.incl??0)*Math.PI/180,i=t.hora||"dia",s=xe(t.seed||31),o=i==="tarde";V0(n,Pf[i]);let r=pn(n,{r:26,pos:o?[-14,9,-30]:[10,18,8],ki:o?2.4:2,hemi:o?1.05:1.5,sky:o?"#F4C08A":"#EAF2FF",ground:o?"#8E6A5A":"#B9A898",key:o?"#FFB070":"#FFF4E2",far:120,target:[0,0,-8]});n.add(new Ce(o?"#FFC898":"#FFFFFF",o?.35:.25)),t.fog!==!1&&(n.fog=new fr(o?"#F0C49A":"#CFE4EE",80,230));let a=new J;a.rotation.x=-e,n.add(a);let l=t.z0??-90,c=t.z1??40,h=c-l,d=(l+c)/2,u=t.largura||8;a.add(Yn(u,h,$t(_o(_f(),u/4,h/4)),0,0,d,-Math.PI/2));for(let v=l;v<c;v+=4)a.add(Yn(.14,2,kt("#F2E6B0"),0,.005,v,-Math.PI/2));if(t.faixa!==!1)for(let v=0;v<8;v++)a.add(Yn(.55,3,kt("#F4F1EA"),-u/2+.6+v*(u-1.2)/7,.006,0,-Math.PI/2));let f=3;for(let v of[-1,1])a.add(Me(new we(f,.16,h),$t(_o(bf(),f,h)),{pos:[v*(u/2+f/2),.08,d]})),a.add(tt(.12,.17,h,"#B8B2A8",v*(u/2+.06),.085,d));let g=t.tipo==="casas"?["#E8C88A","#9CC4B0","#E8A08A","#B8C8E8","#F2E0B0","#D8B8D8"]:["#D8C4A8","#C8B098","#E2D2BC","#B8A890","#D4B89A","#E8D8C0"],E=[],m=u/2+f;for(let v of[-1,1]){let C=l,S=v>0?3:0;for(;C<c;){let x=t.tipo==="casas"?7+s()*3:5+s()*3,F=q3(s,S,x,t.tipo==="casas"?0:1+Math.floor(s()*2),g,{casa:t.tipo==="casas",loja:S});F.g.position.set(v*m,.16,C+x/2),F.g.rotation.y=v>0?Math.PI:0,a.add(F.g),F.vid&&E.push(F.vid),C+=x,S++}}let p=[];for(let v=l+6;v<c;v+=14)for(let C of[-1,1]){let S=Cf();S.position.set(C*(u/2+.5),.16,v+(C>0?7:0)),S.rotation.y=C>0?Math.PI:0,a.add(S),p.push(S)}for(let v=l+10;v<c;v+=11){let C=s()>.5?1:-1,S=qh(s);S.position.set(C*(u/2+2.25),.16,v),a.add(S);let x=Qu();x.position.set(-C*(u/2+.5),.16,v+3),a.add(x)}let b=[];for(let[v,C,S]of t.carros||[[1,-26,"#3E7CC8"],[-1,-14,"#F4F1EA"],[1,18,"#5AA84E"],[-1,26,"#2A2A30"]]){let x=Ar(S);x.position.set(v*(u/2-1.1),0,C),a.add(x),b.push(x)}return t.passaros!==!1&&sa(n,{centro:[0,26,-40],raio:30,n:6}),{g:a,w:(v,C,S)=>{let x=new _(v,C,S).applyMatrix4(new Ie().makeRotationX(-e));return[x.x,x.y,x.z]},vidros:E,postes:p,parados:b,RW:u,CW:f,luz:r,incl:e}}function qh(n){let t=new J;t.add(ct(.12,.16,2.4,"#6A4A30",0,1.2,0,{seg:8,out:.006}));for(let e=0;e<4;e++){let i=ae(.8+n()*.4,["#4C8A3E","#5DA04A","#3E7A34"][e%3],(n()-.5)*1,2.8+n()*.9,(n()-.5)*1,{seg:10,out:.01});t.add(i)}return t.add(tt(1,.3,1,"#7A6A5A",0,.15,0)),t}function If(n){V0(n,Pf.dia),pn(n,{r:14,pos:[6,12,6],ki:2,hemi:1.5}),n.add(new Ce("#FFFFFF",.25));let t=new J;n.add(t);let e=xe(9);t.add(Yn(30,30,$t(_o(Wi("granilite","#C8C2B6","#A8A296"),10,10)),0,0,0,-Math.PI/2));for(let[h,d,u,f]of[[0,-8,0,24],[-12,0,Math.PI/2,16],[12,0,-Math.PI/2,16]])t.add(Yn(f,1.2,kt("#4E9A6A"),h,.6,d,0,u)),t.add(Yn(f,2.6,Ff("#F2E6C8",f/3,1),h,2.5,d,0,u));t.add(Me(new we(24,7,1),$t(_o(Es("#F2E6C8"),6,2)),{pos:[0,3.5,-8.6]}));for(let h=0;h<9;h++)for(let d=0;d<2;d++)t.add(Yn(1.6,1.1,kt("#7E98B0"),-10+h*2.5,2.4+d*3,-7.98)),t.add(tt(1.7,.06,.1,"#E8E2D6",-10+h*2.5,1.8+d*3,-7.95));let i=new it(new bt(4.4,.7),$t(Gt(880,140,h=>{h.fillStyle="#2E6A4A",h.fillRect(0,0,880,140),h.fillStyle="#F4F1EA",h.font="900 70px Inter",h.textAlign="center",h.textBaseline="middle",h.fillText("ESCOLA ESTADUAL",440,74)})));i.position.set(0,6.2,-7.97),t.add(i);let s=xf();t.add(s);let o=qh(e);o.position.set(-5.5,0,-4),t.add(o);let r=qh(e);r.position.set(6.5,0,-5),t.add(r);let a=new J;a.position.set(9,0,-6.5),t.add(a),a.add(ct(.08,.08,3.2,"#3A3A44",0,1.6,0,{seg:8})),a.add(tt(1.2,.8,.05,"#F4F1EA",0,3.2,.3,{out:.006}));let l=new it(new nn(.22,.015,6,18),kt("#E2443A"));l.rotation.x=Math.PI/2,l.position.set(0,2.95,.6),a.add(l);let c=new J;c.position.set(-9,0,-7.6),t.add(c),c.add(at(.6,1,.4,"#C9CED6",0,.5,0,{out:.006}));for(let h=0;h<6;h++){let d=new J;d.position.set(-11+h*.5,0,-7.7),d.add(at(.36,.4,.2,["#E2443A","#3E7CC8","#F2C230","#5AA84E"][h%4],0,.2,0,{out:.005})),t.add(d)}return sa(n,{centro:[0,18,-20],raio:14,n:5}),{g:t,mesa:s}}function Df(n,t={}){pn(n,{r:8,pos:[5,7,2],ki:1.4,hemi:1.4}),n.add(new Ce("#FFF4E6",.45));let e=new J;n.add(e);let i=7,s=7.5,o=3;e.add(Yn(i,s,$t(_o(Wi("ceramica","#D8CDB4","#C4B89E"),7,7)),0,0,0,-Math.PI/2));for(let[E,m,p,b]of[[i,0,-s/2,0],[i,0,s/2,Math.PI],[s,-i/2,0,Math.PI/2],[s,i/2,0,-Math.PI/2]])e.add(Yn(E,1.1,kt("#3E8A6A"),m,.55,p,0,b)),e.add(Yn(E,1.9,Ff("#F2E6C8",3,1),m,2.05,p,0,b));e.add(Yn(i,s,kt("#F4F0E8"),0,o,0,Math.PI/2));let r=tt(3.6,1.3,.05,"#2E5A44",0,1.65,-s/2+.04,{out:.008});e.add(r),e.add(tt(3.7,.06,.12,"#9A7A5A",0,.98,-s/2+.08));let a=new it(new bt(3.4,1.1),new re({transparent:!0,map:Gt(1024,330,E=>{if(t.giz){t.giz(E);return}E.strokeStyle="#F4F1EA",E.fillStyle="#F4F1EA",E.font="600 48px Caveat",E.fillText("F\xEDsica \u2014 For\xE7a e Movimento",40,70),E.font="700 72px Caveat",E.fillText("F = m \xB7 a",80,180),E.font="600 40px Caveat",E.fillText("1 kgf \u2248 9,8 N",520,170),E.lineWidth=4,E.beginPath(),E.moveTo(560,250),E.lineTo(820,250),E.lineTo(800,236),E.moveTo(820,250),E.lineTo(800,264),E.stroke()})}));a.position.set(0,1.65,-s/2+.07),e.add(a);let l=new J;l.position.set(2.2,2.45,-s/2+.04),e.add(l),l.add(ct(.22,.22,.05,"#F4F1EA",0,0,0,{rot:[Math.PI/2,0,0],seg:28,out:.006}));let c=new it(new nn(.22,.02,8,28),kt("#2A2A30"));l.add(c);for(let E=0;E<12;E++){let m=E/12*6.283;l.add(tt(.012,E%3?.02:.04,.01,"#2A2A30",Math.sin(m)*.18,Math.cos(m)*.18,.03))}let h=new J,d=new J;h.add(tt(.016,.11,.01,"#1E1E22",0,.05,0)),d.add(tt(.01,.17,.01,"#1E1E22",0,.08,0)),h.position.z=.035,d.position.z=.04,l.add(h,d),l.add(ae(.012,"#C0392B",0,0,.045,{seg:8})),l.hora=(E,m)=>{d.rotation.z=-m/60*6.283,h.rotation.z=-(E%12+m/60)/12*6.283};let u=[];for(let E=0;E<4;E++)for(let m=0;m<5;m++){let p=wf();p.position.set(-2.4+m*1.2,0,-1.4+E*1.3),e.add(p),u.push(p);let b=la("#4A4E58");b.position.set(-2.4+m*1.2,0,-1+E*1.3),b.rotation.y=Math.PI,e.add(b)}for(let E=0;E<3;E++){let m=new it(new bt(1.4,1.1),new re({color:"#CFE6F4"}));m.position.set(i/2-.02,1.9,-2+E*2.2),m.rotation.y=-Math.PI/2,e.add(m),e.add(tt(.08,.06,1.5,"#E8E2D6",i/2-.05,1.33,-2+E*2.2))}let f=new Bn("#FFE8C0",14,12,.7,.6,1.2);f.position.set(i/2+2,3.5,0),f.target.position.set(0,0,0),n.add(f,f.target);let g=at(1.2,.06,.6,"#9A6236",-1.8,.76,-s/2+1.1,{out:.008});return e.add(g),e.add(tt(1.1,.7,.5,"#7A4E2E",-1.8,.36,-s/2+1.1)),{g:e,relogio:l,carteiras:u,D:s,W:i}}var Yh=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=Vn,i.repeat.set(t,e),i.needsUpdate=!0,i},Lf=(n,t,e,i,s,o,r=0,a=0)=>{let l=new it(new bt(n,t),e);return l.position.set(i,s,o),l.rotation.set(r,a,0),l.receiveShadow=!0,l};var Y3=n=>$t(Yh(Es(n),1,1));var Z3=.27,$3=8;var J3=1.5,cy=J3-$3*Z3;function Bf(n,t,e,i,s={}){let o=new J;n.add(o),o.add(Lf(t,e,$t(Yh(Wi(...s.piso||["ceramica","#D8CFBE","#C4B9A4"]),t*1.2,e*1.2)),0,0,0,-Math.PI/2));let r=s.azul?$t(Yh(k0("#F6F4EE","#E2E6E4","#B8C8C8"),t/.8,i/.8)):Y3(s.parede||"#EDE6D6"),a=[[t,0,-e/2,0],[t,0,e/2,Math.PI],[e,-t/2,0,Math.PI/2],[e,t/2,0,-Math.PI/2]].map(([c,h,d,u])=>{let f=Lf(c,i,r,h,i/2,d,0,u);return o.add(f),f}),l=new it(new bt(t,e),kt("#F4F0E8"));l.rotation.x=Math.PI/2,l.position.y=i,o.add(l);for(let[c,h,d,u]of[[0,-e/2+.01,t,.02],[0,e/2-.01,t,.02],[-t/2+.01,0,.02,e],[t/2-.01,0,.02,e]])o.add(tt(d,.08,u,"#C8BEAE",c,.04,h,{shadow:!1}));return{g:o,paredes:a}}function bo(n,t,e="manha",i=1){let s={manha:["#8CC8F0","#E8F4FA","#F4E0B0"],tarde:["#F2A65A","#F7D28A","#E8B070"],noite:["#141A38","#2A2E58","#F2C76A"],madrugada:["#2E3A6A","#6A6E9A","#E8C88A"]}[e],o=Gt(512,360,l=>{let c=l.createLinearGradient(0,0,0,360);c.addColorStop(0,s[0]),c.addColorStop(1,s[1]),l.fillStyle=c,l.fillRect(0,0,512,360);let h=xe(i);for(let d=0;d<9;d++){let u=40+h()*40,f=120+h()*160,g=d*58-10;l.fillStyle=e==="noite"||e==="madrugada"?"#1E2238":["#D8CDB8","#C8B8A0","#E2D2BC","#B8A890"][d%4],l.fillRect(g,360-f,u,f);for(let E=0;E<6;E++)for(let m=0;m<3;m++)l.fillStyle=e==="noite"||e==="madrugada"?h()>.55?s[2]:"#2A2E44":"#8EA6B8",l.fillRect(g+6+m*(u/3),360-f+12+E*24,u/3-10,12)}}),r=new J,a=new it(new bt(n,t),new re({map:o}));r.add(a);for(let l of[-1,1])r.add(tt(.05,t+.05,.06,"#E8E2D6",l*n/2,0,.02));return r.add(tt(n,.05,.06,"#E8E2D6",0,t/2,.02)),r.add(tt(n+.14,.05,.14,"#E8E2D6",0,-t/2,.06)),r.add(tt(.03,t,.03,"#E8E2D6",0,0,.02)),r.userData.vidro=a,r}function Hf(n){pn(n,{r:5,pos:[2,6,3],ki:1.2,hemi:1.5}),n.add(new Ce("#FFF4E6",.5));let t=2,e=2.2,i=2.5,{g:s}=Bf(n,t,e,i,{azul:!0,piso:["ceramica","#B8C8C8","#A0B4B4"]}),o=Mf(!0);o.position.set(.3,0,-e/2+.25),n.add(o);let r=yf();r.position.set(-.55,0,-e/2+.35),n.add(r);let a=ct(.03,.025,.09,"#3EA6FF",.55,.925,-e/2+.2,{seg:10,out:.003});n.add(a);let l=new J;l.position.set(0,0,e/2-.02),n.add(l),l.add(tt(.8,2.05,.04,"#E8E2D6",0,1.03,0,{out:.006}));let c=new J;c.position.set(-.3,1,-.04),l.add(c),c.add(ct(.02,.02,.05,"#C9A030",0,0,0,{rot:[Math.PI/2,0,0],seg:8})),c.add(tt(.12,.02,.02,"#C9A030",.05,0,-.03));let h=Rf();h.position.set(.3,.98,-e/2+.05),n.add(h);let d=Mo(.15);return d.position.set(0,i,0),n.add(d),{g:s,pia:o,porta:l,macaneta:c,torneira:h,copo:a,W:t,D:e}}function Sr(n,t={}){pn(n,{r:6,pos:[2,6,4],ki:1,hemi:1.3,key:"#FFE8C8"}),n.add(new Ce("#FFE9D0",.5));let e=3.6,i=3.2,s=2.6,{g:o}=Bf(n,e,i,s,{parede:"#E8D8B8",piso:["madeira","#A87A4E","#966A42"]}),r=gf(1.8,"#7A6A5A");r.position.set(-.6,0,-i/2+.5),n.add(r);let a=at(1,.04,.7,"#C84E4E",-.9,.78,-i/2+.62,{out:.005});a.rotation.x=-.5,n.add(a);let l=Ef(1,"#7A5236");l.position.set(1.2,0,i/2-.3),l.rotation.y=Math.PI,n.add(l);let c=new J;c.position.set(1.2,.5,i/2-.32),c.rotation.y=Math.PI,n.add(c),c.add(at(.62,.5,.45,"#3A3A40",0,.25,-.05,{out:.008}));let h=new it(new bt(.48,.36),new pe({color:"#5A6A7A",emissive:"#3A4A5A",emissiveIntensity:.4}));h.position.set(0,.26,.18),c.add(h);let d=new J;d.position.set(.2,0,.35),n.add(d),d.add(at(.9,.04,.6,"#9A6236",0,.74,0,{out:.008})),d.add(tt(.86,.01,.58,"#F4F1EA",0,.765,0));for(let[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]])d.add(tt(.05,.72,.05,"#7A4E2E",m*.38,.36,p*.24));let u=bo(1.1,1,"tarde",6);u.position.set(e/2-.02,1.55,-.4),u.rotation.y=-Math.PI/2,n.add(u);let f=new it(new bt(.5,.3),new re({transparent:!0,map:Gt(250,150,m=>{m.strokeStyle="#2F4A3A",m.lineWidth=6;for(let p=0;p<9;p++)m.beginPath(),m.moveTo(20+p*26,10),m.quadraticCurveTo(30+p*26+(p>2&&p<7?30:0),80,20+p*26,145),m.stroke();m.beginPath(),m.moveTo(10,14),m.quadraticCurveTo(125,60,240,14),m.stroke(),m.beginPath(),m.moveTo(10,140),m.lineTo(240,140),m.stroke()})}));f.position.set(e/2-.04,1.25,-.35),f.rotation.y=-Math.PI/2,n.add(f);for(let m=0;m<2;m++){let p=Bh(.5,.4,30+m,"paisagem");p.position.set(-e/2+.02,1.7,-.6+m*.9),p.rotation.y=Math.PI/2,n.add(p)}let g=vf(.9,4);g.position.set(-e/2+.35,0,i/2-.35),n.add(g);let E=Mo(.3);return E.position.set(0,s,.2),n.add(E),{g:o,mesa:d,sofa:r,tv:c,janela:u,W:e,D:i,Hh:s,manta:a}}var Rr=(n,t,e=20)=>Me(new ds(n.map(([i,s])=>new ht(i,s)),e),t,{out:.004});function Zh(n,t=!0,e=1){let i=t?"#F2EBDA":"#2A2630",s=new J,o=[[0,0],[.018,0],[.018,.006],[.014,.009],[.011,.012]];if(n==="p")s.add(Rr([...o,[.007,.03],[.009,.032],[0,.033]],i)),s.add(ae(.0095,i,0,.04,0,{out:.003,seg:14}));else if(n==="t")s.add(Rr([...o,[.011,.042],[.014,.044],[.014,.056],[0,.056]],i));else if(n==="c"){s.add(Rr([...o,[.01,.03],[0,.03]],i));let r=at(.016,.036,.03,i,0,.046,.002,{out:.003,r:.006});r.rotation.x=-.35,s.add(r),s.add(at(.014,.014,.024,i,0,.056,.016,{out:.003,r:.005}))}else if(n==="b")s.add(Rr([...o,[.007,.044],[.011,.05],[.006,.064],[0,.066]],i)),s.add(ae(.0035,i,0,.069,0,{seg:8}));else if(n==="d"){s.add(Rr([...o,[.008,.052],[.013,.058],[.011,.066],[.006,.07],[0,.072]],i));for(let r=0;r<6;r++){let a=r/6*6.283;s.add(ae(.003,i,Math.cos(a)*.011,.069,Math.sin(a)*.011,{seg:6}))}}else n==="r"&&(s.add(Rr([...o,[.008,.056],[.013,.062],[.011,.07],[0,.072]],i)),s.add(tt(.004,.02,.004,i,0,.082,0,{out:.002})),s.add(tt(.014,.004,.004,i,0,.084,0,{out:.002})));return s.scale.setScalar(e),s.userData={tipo:n,branca:t},s}var K3=["tcbdrbct","pppppppp","","","","","pppppppp","tcbdrbct"];function Zn(n=.045,t={}){let e=new J,i=n*8;e.add(at(i+n*.8,.02,i+n*.8,t.borda||"#6A4022",0,.01,0,{out:.006,r:.006}));let s=Gt(512,512,(h,d)=>{for(let u=0;u<8;u++)for(let f=0;f<8;f++)h.fillStyle=(u+f)%2?t.escura||"#7A9A5A":t.clara||"#EEE8D0",h.fillRect(u*d/8,f*d/8,d/8,d/8)}),o=new it(new bt(i,i),$t(s));o.rotation.x=-Math.PI/2,o.position.y=.0205,e.add(o);let r=h=>{let d=h.charCodeAt(0)-97,u=+h[1]-1;return new _((d-3.5)*n,.021,(3.5-u)*n)},a={},l=n/.045;t.pecas!==!1&&K3.forEach((h,d)=>{[...h].forEach((u,f)=>{let g=String.fromCharCode(97+f)+(8-d),E=d>=4,m=Zh(u,E,l);m.position.copy(r(g)),u==="c"&&(m.rotation.y=E?0:Math.PI),e.add(m),a[g]=m})});let c=(h,d,u,f)=>{let g=r(d),E=r(u),m=ln(et(f));h.position.lerpVectors(g,E,m),h.position.y+=Math.sin(Math.PI*m)*n*.9};return e.userData={P:a,casa:r,s:n},{g:e,P:a,casa:r,move:c,s:n}}function Nf(){let n=new J,t=at(.2,.08,.08,"#2A2630",0,.04,0,{out:.005,r:.012});t.rotation.x=0,n.add(t);let e=document.createElement("canvas");e.width=512,e.height=160;let i=e.getContext("2d"),s=new wn(e);s.colorSpace=Ve;let o=new it(new bt(.18,.056),new re({map:s}));o.position.set(0,.045,.041),n.add(o);let r=[-.05,.05].map(l=>{let c=ct(.012,.012,.02,"#E2443A",l,.085,0,{out:.003,seg:12});return n.add(c),c}),a=(l,c,h=0)=>{i.fillStyle="#1A1A1E",i.fillRect(0,0,512,160);for(let[d,u]of[[0,l],[1,c]])i.fillStyle="#B8E8C8",i.fillRect(16+d*256,16,224,128),i.fillStyle="#16301E",i.font="700 86px 'IBM Plex Mono'",i.textAlign="center",i.textBaseline="middle",i.fillText(u,128+d*256,84);s.needsUpdate=!0,r[0].position.y=h===0?.08:.086,r[1].position.y=h===1?.08:.086};return a("10:00","10:00"),n.userData.set=a,n}function Xi(n={}){let t=new J,e=n.cor||"#C9893E",i=new J;t.add(i);for(let[r,a]of[[.17,-.02],[.13,.2]]){let l=ct(r,r,.09,e,a,0,0,{rot:[Math.PI/2,0,0],out:.006,seg:28});i.add(l)}let s=ct(.055,.055,.002,"#2A1A12",.07,0,.046,{rot:[Math.PI/2,0,0],seg:20});i.add(s),i.add(tt(.03,.1,.012,"#4A2A16",-.09,0,.05));let o=tt(.5,.05,.025,"#5A361E",.58,0,.03,{out:.005});t.add(o),t.add(at(.12,.07,.03,"#3A2214",.88,0,.03,{out:.005}));for(let r=0;r<6;r++)n.semCorda!==r&&t.add(tt(.86,.0025,.0025,"#E8E0C8",.44,-.018+r*.0072,.052,{shadow:!1}));if(n.teia){let r=new it(new bt(.3,.3),new re({transparent:!0,depthWrite:!1,map:Gt(256,256,a=>{a.strokeStyle="rgba(240,240,240,.8)",a.lineWidth=2;for(let l=0;l<8;l++){let c=l/8*6.283;a.beginPath(),a.moveTo(128,128),a.lineTo(128+Math.cos(c)*128,128+Math.sin(c)*128),a.stroke()}for(let l=20;l<128;l+=22)a.beginPath(),a.arc(128,128,l,0,7),a.stroke()})}));r.position.set(-.1,.1,.05),t.add(r),t.userData.teia=r}return t.userData.corpo=i,t}function To(n=.35){let t=new J,e=ae(.11,"#F4F1EA",0,.11*(1-n*.3),0,{out:.006,seg:18});e.scale.set(1+n*.12,1-n*.3,1+n*.12),t.add(e);for(let i=0;i<6;i++){let s=i/6*6.283,o=ae(.032,"#2A2A30",Math.cos(s)*.085*(1+n*.12),.11*(1-n*.3)+Math.sin(i*1.7)*.04,Math.sin(s)*.085*(1+n*.12),{seg:8});o.scale.set(1,.5,1),o.lookAt(0,.11,0),t.add(o)}return t.userData.b=e,t}function Uf(n,t,e,i={}){n.fillStyle="#FBF7EC",n.fillRect(0,0,t,e);let s=(d,u=10)=>{n.strokeStyle=d,n.fillStyle=d,n.lineWidth=u*t/1024,n.lineCap="round",n.lineJoin="round"},o=d=>d*t/1024,r=d=>d*e/768;s("#4FB04A",14);for(let d=0;d<70;d++){let u=520+d%14*16;n.beginPath(),n.moveTo(o(60+d*37%60),r(u)),n.lineTo(o(960-d*53%70),r(u+Math.sin(d)*8)),n.stroke()}s("#8A8A8A",10);for(let d of[120,900])n.beginPath(),n.arc(o(d),r(520),o(22),0,7),n.fill();s("#F2C230",10),n.beginPath(),n.arc(o(900),r(110),o(55),0,7),n.fill();for(let d=0;d<10;d++){let u=d/10*6.283;n.beginPath(),n.moveTo(o(900+Math.cos(u)*70),r(110+Math.sin(u)*70)),n.lineTo(o(900+Math.cos(u)*100),r(110+Math.sin(u)*100)),n.stroke()}let a=(d,u,f,g,E,m)=>{let p=f*.22;s("#2A2A30",9),n.beginPath(),n.moveTo(o(d-f*.08),r(u)),n.lineTo(o(d-f*.04),r(u-f*.38)),n.moveTo(o(d+f*.08),r(u)),n.lineTo(o(d+f*.04),r(u-f*.38)),n.stroke(),s(g,12),n.beginPath(),n.moveTo(o(d-f*.13),r(u-f*.36)),n.lineTo(o(d+f*.13),r(u-f*.36)),n.lineTo(o(d+f*.11),r(u-f*.72)),n.lineTo(o(d-f*.11),r(u-f*.72)),n.closePath(),n.fill(),s("#E3AE86",9);let b=u-f*.68;E?(n.beginPath(),n.moveTo(o(d-f*.11),r(b)),n.lineTo(o(d-f*.3),r(b-f*.3)),n.moveTo(o(d+f*.11),r(b)),n.lineTo(o(d+f*.3),r(b-f*.3)),n.stroke()):(n.beginPath(),n.moveTo(o(d-f*.11),r(b)),n.lineTo(o(d-f*.26),r(b+f*.2)),n.moveTo(o(d+f*.11),r(b)),n.lineTo(o(d+f*.28),r(b+f*.12)),n.stroke());let M=u-f*.72-p;if(n.fillStyle="#E3AE86",n.beginPath(),n.arc(o(d),r(M),o(p),0,7),n.fill(),s("#2A2A30",6),n.beginPath(),n.arc(o(d),r(M),o(p),0,7),n.stroke(),s("#4A2A18",14),n.beginPath(),n.arc(o(d),r(M-p*.2),o(p*.95),Math.PI*1.05,Math.PI*1.95),n.stroke(),s("#2A2A30",7),m)n.beginPath(),n.arc(o(d-p*.35),r(M-p*.05),o(5),0,7),n.fill(),n.beginPath(),n.moveTo(o(d+p*.2),r(M-p*.05)),n.lineTo(o(d+p*.5),r(M-p*.05)),n.stroke(),n.beginPath(),n.arc(o(d),r(M+p*.35),o(p*.35),0,Math.PI),n.stroke(),s("#F2546E",8),n.beginPath(),n.ellipse(o(d+p*.05),r(M+p*.72),o(p*.14),r(p*.2),0,0,7),n.fill();else{for(let v of[-1,1])n.beginPath(),n.arc(o(d+v*p*.35),r(M-p*.05),o(5),0,7),n.fill();n.beginPath(),n.arc(o(d),r(M+p*.2),o(p*.45),.2,Math.PI-.2),n.stroke()}};a(330,600,330,"#8E949C",!0,!1),a(640,610,210,"#F2C230",!1,!0),s("#2A2A30",6),n.fillStyle="#FFFFFF",n.beginPath(),n.arc(o(745),r(590),o(26),0,7),n.fill(),n.stroke(),n.fillStyle="#2A2A30",n.beginPath(),n.arc(o(745),r(590),o(9),0,7),n.fill();let l=i.brilho||0;n.save(),n.translate(o(512),r(120)),n.rotate(-.04),l>0&&(n.shadowColor=`rgba(255,220,120,${l})`,n.shadowBlur=40*l*t/1024),n.fillStyle="#2E5EC8",n.font=`700 ${Math.round(74*t/1024)}px Caveat`,n.textAlign="center",n.textBaseline="middle";let c="o melhor dia da minha vida",h=-n.measureText(c).width/2;for(let d=0;d<c.length;d++){let u=c[d],f=n.measureText(u).width;n.save(),n.translate(h+f/2,Math.sin(d*1.7)*6*t/1024),n.rotate(Math.sin(d*2.3)*.08),n.fillText(u,0,0),n.restore(),h+=f}n.restore()}function tn(n={}){let t=n.w||.3,e=n.h||.225,i=new J,s=document.createElement("canvas");s.width=1024,s.height=768;let o=s.getContext("2d");Uf(o,1024,768,{});let r=new wn(s);r.colorSpace=Ve;let a=Gt(64,64,b=>{b.fillStyle="#F4EFE0",b.fillRect(0,0,64,64),b.fillStyle="#4FB04A55",b.fillRect(40,40,24,24)}),l=[],c=(b,M)=>{let v=new bt(t/2,e/2),C=v.attributes.uv;for(let F=0;F<C.count;F++)C.setXY(F,(C.getX(F)+b)/2,(C.getY(F)+M)/2);let S=new it(v,[new pe({map:r,side:Oi})][0]),x=new it(v,new pe({map:a,side:dn}));return S.add(x),go(S,.002),S},h=new J;i.add(h);let d=new J;h.add(d);let u=new J;h.add(u);for(let[b,M]of[[u,0],[d,1]]){let v=new J;b.add(v);let C=new J;b.add(C);let S=c(M,0);S.position.set((M?1:-1)*t/4,-e/4,0),v.add(S);let x=c(M,1);x.position.set((M?1:-1)*t/4,e/4,0),C.add(x),l.push({lado:b,baixo:v,cima:C})}let f=new J;i.add(f);let g=at(t/2,e/2,.006,"#F4EFE0",-t/4,-e/4,0,{out:.002,r:.002});f.add(g);let E=new it(new bt(t/2*.9,.002),new re({color:"#C8C0A8"}));E.position.set(-t/4,-e/4,.0035),f.add(E);let m=new it(new bt(.02,.015),new re({color:"#4FB04A"}));m.position.set(-t/2+.015,-e/2+.012,.0035),f.add(m);let p=(b=0,M=0)=>{b=et(b);let v=b<.015;f.visible=v,h.visible=!v;let C=ln(et(b*2)),S=ln(et(b*2-1));for(let x of l)x.cima.rotation.x=-(1-C)*Math.PI*.98,x.cima.position.z=(1-C)*.002;l[1].lado.rotation.y=-(1-S)*Math.PI*.98,l[1].lado.position.z=(1-S)*.004,M!==i.userData.br&&(i.userData.br=M,Uf(o,1024,768,{brilho:M}),r.needsUpdate=!0)};return p(n.aberta??0),i.userData.set=p,i.set=p,i}function Xs(n=1){let t=new J,e=kt("#F2C230",{emissive:"#7A5A10",emissiveIntensity:.25});t.add(at(.14,.05,.14,"#2A2630",0,.025,0,{out:.004})),t.add(ct(.02,.03,.1,e,0,.1,0,{out:.004,seg:12})),t.add(Me(new ds([[0,0],[.03,0],[.07,.04],[.085,.12],[.09,.16],[0,.16]].map(([i,s])=>new ht(i,s)),22),e,{out:.004,pos:[0,.15,0]}));for(let i of[-1,1]){let s=Me(new nn(.04,.008,8,16,Math.PI),e,{out:.003});s.position.set(i*.09,.25,0),s.rotation.z=i>0?-Math.PI/2:Math.PI/2,t.add(s)}return t.scale.setScalar(n),t}function ca(n="#2E5EB8"){let t=new J,e=[];for(let s of[-.5,.5]){let o=new J;o.position.set(0,.33,s),t.add(o),o.add(Me(new nn(.31,.022,8,26),"#1E1E22",{out:.004,rot:[0,Math.PI/2,0]}));for(let r=0;r<6;r++){let a=tt(.006,.6,.006,"#C9CED6",0,0,0);a.rotation.x=r/6*Math.PI,o.add(a)}e.push(o)}let i=(s,o,r=.03)=>{let a=new _(...s),l=new _(...o),c=ct(r/2,r/2,a.distanceTo(l),n,0,0,0,{out:.004,seg:8});c.position.copy(a).add(l).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new _(0,1,0),l.clone().sub(a).normalize()),t.add(c)};return i([0,.33,-.5],[0,.62,-.05]),i([0,.33,-.5],[0,.36,.02]),i([0,.36,.02],[0,.62,-.05]),i([0,.62,-.05],[0,.72,.38]),i([0,.36,.02],[0,.7,.4]),i([0,.7,.4],[0,.33,.5]),t.add(at(.08,.03,.18,"#2A2A30",0,.68,-.08,{out:.003})),t.add(ct(.012,.012,.44,"#2A2A30",0,.86,.42,{rot:[0,0,Math.PI/2],out:.003})),i([0,.72,.38],[0,.86,.42],.025),t.userData.gira=s=>e.forEach(o=>o.rotation.x=s),t}function $h(n=0){let t=new J,e=Me(new ds([[0,0],[.035,.006],[.045,.025],[.04,.05],[.022,.075],[.006,.09],[0,.092]].map(([o,r])=>new ht(o,r)),18),"#D9892E",{out:.004});t.add(e);let i=ae(.03,"#F4E6C0",.02,.06,.02,{seg:12});i.visible=!1,t.add(i);let s=ae(.012,"#FFF8E8",.03,.055,.03,{seg:10});return s.visible=!1,t.add(s),t.userData.morde=o=>{i.visible=o>0,s.visible=o>.5,s.position.y=.055-(o-.5)*.03},t.userData.morde(n),t}function qi(n,t,e=.21,i=.297){let s=new it(new bt(e,i),$t(Gt(512,724,(o,r,a)=>{o.fillStyle="#FBF8EE",o.fillRect(0,0,r,a),o.fillStyle="#2A2A30",o.font="800 34px Inter",o.fillText("PROVA \u2014 HIST\xD3RIA",40,60),o.strokeStyle="#B8BCC4",o.lineWidth=3;for(let l=120;l<a-40;l+=44)o.beginPath(),o.moveTo(40,l),o.lineTo(r-40,l),o.stroke();o.strokeStyle=t,o.lineWidth=10,o.beginPath(),o.arc(r-120,150,80,0,7),o.stroke(),o.fillStyle=t,o.font="700 120px Caveat",o.textAlign="center",o.textBaseline="middle",o.fillText(n,r-120,158)})));return s.rotation.x=-Math.PI/2,s}function xr(n="#E2443A"){let t=new J;t.add(at(.3,.025,.3,n,0,.32,0,{out:.004})),t.add(at(.3,.22,.025,n,0,.45,-.14,{out:.004}));for(let[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(ct(.01,.01,.32,"#9EA6B0",e*.13,.16,i*.13,{seg:6}));return t}function Jh(n,t=0,e="#F7E7A0"){return new it(new bt(.66,.5),$t(Gt(512,388,(i,s,o)=>{i.fillStyle=e,i.fillRect(0,0,s,o),i.fillStyle="#2E5EC8",i.font="700 54px Caveat",i.textAlign="center",i.fillText(n,s/2,60);let r=["#E2443A","#3E7CC8","#5AA84E","#9B6CC4","#F2994A"],a=2+t%3;for(let l=0;l<a;l++){let c=s*(l+1)/(a+1),h=(l%2?150:200)-t%2*20;i.fillStyle="#E8B48C",i.beginPath(),i.arc(c,o-40-h,26,0,7),i.fill(),i.fillStyle=r[(l+t)%5],i.fillRect(c-24,o-40-h+26,48,h*.55),i.strokeStyle="#2A2A30",i.lineWidth=6,i.beginPath(),i.moveTo(c-12,o-40-h*.4),i.lineTo(c-16,o-30),i.moveTo(c+12,o-40-h*.4),i.lineTo(c+16,o-30),i.stroke()}})))}function Kh(n="#E2443A",t=0){let e=new J,i=ae(.12,n,0,.5,0,{out:.004,seg:16});return i.scale.set(1-t*.35,1.2-t*.7,1-t*.35),i.position.y=.5-t*.38,e.add(i),e.add(ct(.002,.002,.45-t*.35,"#F4F1EA",0,.22-t*.17,0,{seg:4})),e}function zf(n=.16,t=.11){return new it(new bt(n,t),$t(Gt(512,352,(i,s,o)=>{i.fillStyle="#FFFFFF",i.fillRect(0,0,s,o),i.fillStyle="#E2443A",i.fillRect(0,0,s,26),i.fillStyle="#2A2A30",i.textAlign="center",i.font="900 52px Inter",i.fillText("DIA DA FAM\xCDLIA",s/2,110),i.font="700 36px Inter",i.fillText("DOMINGO, 10H",s/2,180),i.font="700 30px Inter",i.fillText("TRAGA QUEM VOC\xCA AMA",s/2,250),i.fillStyle="#E2443A",i.beginPath(),i.moveTo(s/2,320),i.bezierCurveTo(s/2-40,290,s/2-20,260,s/2,285),i.bezierCurveTo(s/2+20,260,s/2+40,290,s/2,320),i.fill()})))}function ha(){let n=new J,t=ae(.06,"#D9A050",0,.02,0,{out:.004,seg:16});t.scale.set(1.4,.4,.8),n.add(t);let e=tt(.15,.004,.08,"#F4E6C0",0,.04,0);n.add(e);let i=tt(.14,.003,.074,"#FFE680",0,.043,0);return i.material=kt("#FFE680",{emissive:"#FFE680",emissiveIntensity:.1}),n.add(i),n.userData.passa=s=>{i.scale.x=Math.max(.01,s),i.position.x=-.07+.07*s},n}function Of(){let n=new J;return n.add(tt(.08,.004,.016,"#C9CED6",.05,0,0,{out:.002})),n.add(tt(.07,.012,.014,"#3A2A20",-.03,0,0,{out:.002})),n}function da(n,t,e=512,i=!0){let s=document.createElement("canvas");s.width=e,s.height=Math.round(e*t/n);let o=s.getContext("2d"),r=new wn(s);r.colorSpace=Ve,r.anisotropy=8;let a=new it(new bt(n,t),i?new re({map:r,toneMapped:!1}):$t(r)),l=null;return a.paint=(c,h)=>(c!==l&&(l=c,o.setTransform(1,0,0,1,0,0),h(o,s.width,s.height),r.needsUpdate=!0),a),a}var Q3="#E8742A";function wr(n,t,e,i){n.fillStyle="#FBF8EE",n.fillRect(0,0,t,e),n.strokeStyle="#9CC4E4",n.lineWidth=2;for(let s=e*.14;s<e;s+=e*.062)n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke();n.strokeStyle="#E88A8A",n.lineWidth=3,n.beginPath(),n.moveTo(t*.12,0),n.lineTo(t*.12,e),n.stroke(),i&&i(n,t,e)}var kf=(n,t,e,i,s,o="#2A3A7A",r="left")=>{n.fillStyle=o,n.font=`700 ${s}px Caveat`,n.textAlign=r,n.textBaseline="middle",n.fillText(t,e,i)};function W0(){let n=new J;n.add(at(.62,.02,.4,Q3,0,.01,0,{r:.006,out:.004}));let t=da(.29,.38,512,!1),e=da(.29,.38,512,!1);return t.rotation.x=e.rotation.x=-Math.PI/2,t.position.set(-.148,.023,0),e.position.set(.148,.023,0),n.add(t,e),n.add(ct(.006,.006,.38,"#9EA6B0",0,.03,0,{rot:[Math.PI/2,0,0],seg:6})),n.userData={E:t,D:e},n}var ui=(n,t,e)=>{let i=n.clone();return i.wrapS=i.wrapT=Vn,i.repeat.set(t,e),i.needsUpdate=!0,i},Ge=(n,t,e,i,s,o,r=0,a=0)=>{let l=new it(new bt(n,t),e);return l.position.set(i,s,o),l.rotation.set(r,a,0),l.receiveShadow=!0,l},qs=(n,t=1,e=1)=>$t(ui(Es(n),t,e)),Ao=(n,t,e,i,s,o,r=900,a="center",l="Inter")=>{n.fillStyle=o,n.font=`${r} ${s}px ${l}`,n.textAlign=a,n.textBaseline="middle",n.fillText(t,e,i)};function ua(n,t,e,i,s,o={}){let r=$t(ui(Wi(...o.piso||["madeira","#A87A4E","#966A42"]),e*1.1,i*1.1));n.add(Ge(e,i,r,t,0,0,-Math.PI/2));let a=o.azul?$t(ui(k0("#F6F4EE","#E2E6E4","#B8C8C8"),e/.8,s/.8)):qs(o.parede||"#EDE6D6"),l={};l.fundo=Ge(e,s,a,t,s/2,-i/2,0,0),n.add(l.fundo),l.frente=Ge(e,s,a,t,s/2,i/2,0,Math.PI),n.add(l.frente);let c=(d,u,f)=>{if(f===void 0)return Ge(i,s,a,d,s/2,0,0,u);let g=new J,E=f-.42,m=f+.42;return g.add(Ge(E+i/2,s,a,d,s/2,(-i/2+E)/2,0,u)),g.add(Ge(i/2-m,s,a,d,s/2,(m+i/2)/2,0,u)),g.add(Ge(.84,s-2.12,a,d,(s+2.12)/2,f,0,u)),g},h=o.porta||{};l.esq=c(t-e/2,Math.PI/2,h.esq),n.add(l.esq),l.dir=c(t+e/2,-Math.PI/2,h.dir),n.add(l.dir),l.teto=Ge(e,i,kt("#F4F0E8"),t,s,0,Math.PI/2),n.add(l.teto);for(let[d,u,f,g]of[[t,-i/2+.01,e,.02],[t-e/2+.01,0,.02,i],[t+e/2-.01,0,.02,i]])n.add(tt(f,.08,g,"#C8BEAE",d,.04,u,{shadow:!1}));return l}function fa(n,t,e,i=1,s="#8A6040"){let o=new J;o.position.set(t,0,e),n.add(o);for(let a of[-1,1])o.add(tt(.1,2.12,.07,"#B88A5E",0,1.06,a*.44,{out:.005}));o.add(tt(.1,.07,.95,"#B88A5E",0,2.12,0,{out:.005}));let r=new J;return r.position.set(0,0,-.4),o.add(r),r.add(tt(.035,2.05,.8,s,0,1.03,.4,{out:.005})),r.add(ae(.025,"#C9A030",i*.03,1,.72,{seg:8})),o.folha=r,o.abre=a=>{r.rotation.y=-i*a*1.6},o}function Gf(n,t={}){let e=t.hora||"manha",i=e==="noite",s=pn(n,{r:9,pos:i?[2,6,3]:[3,8,6],ki:i?.45:1.5,hemi:i?.7:1.5,sky:i?"#8E9CD0":"#EAF2FF",key:i?"#9FB4F0":"#FFF2DC"});n.add(new Ce(i?"#6A78B8":"#FFF4E6",i?.35:.45));let o=new J;n.add(o);let r=3,a=2.6,l=ua(o,-3.1,3,r,a,{porta:{dir:.85},azul:!0,piso:["ceramica","#C9BBA4","#B5A68C"]}),c=Uh("#F4F1EA");c.position.set(-4,0,-r/2+.34),o.add(c);let h=[];for(let Tt=0;Tt<2;Tt++){let Mt=new it(new Xn(.035,.06,10,1,!0),new re({color:"#5AB0FF",transparent:!0,opacity:.85}));Mt.position.set(-4.12+Tt*.24,.93,-r/2+.3),o.add(Mt),h.push(Mt)}let d=new J;d.position.set(-4.12,.92,-r/2+.3),o.add(d),d.add(ct(.11,.1,.12,"#9EA6B0",0,.06,0,{out:.004,seg:16})),d.add(tt(.18,.015,.02,"#2A2A30",.17,.1,0));let u=Gh();u.scale.setScalar(.65),u.position.set(-4.45,0,-r/2+.25),o.add(u);let f=Hh(1.3,"#F4F1EA","#8E8678");f.position.set(-2.85,0,-r/2+.32),o.add(f);let g=Nh("#F4F1EA");g.position.set(-1.98,0,-r/2+.38),o.add(g);let E=bo(.9,.8,e,2);E.position.set(-3.1,1.6,-r/2+.02),o.add(E);let m=new J;m.position.set(-3,0,.45),o.add(m);let p=Gt(256,256,Tt=>{for(let Mt=0;Mt<8;Mt++)for(let w=0;w<8;w++)Tt.fillStyle=(Mt+w)%2?"#3E7CC8":"#F6F2EA",Tt.fillRect(Mt*32,w*32,32,32)});{let Tt=new it(new we(1.12,.012,.82),$t(ui(p,2,1.5)));Tt.position.y=.77,m.add(Tt)}m.add(at(1,.04,.7,"#B87A4A",0,.745,0));for(let[Tt,Mt]of[[-1,-1],[1,-1],[-1,1],[1,1]])m.add(tt(.05,.72,.05,"#9A6236",Tt*.44,.36,Mt*.29));let b=[[-.55,0,Math.PI/2],[.55,0,-Math.PI/2],[0,-.62,0]].map(([Tt,Mt,w])=>{let y=Wh();return y.position.set(-3+Tt,0,.45+Mt),y.rotation.y=w,o.add(y),y}),M=Mo(.3);M.position.set(-3.1,a,.2),o.add(M);let v=new an("#FFE2AE",i?6:2,6,1.6);v.position.set(-3.1,2.1,.2),o.add(v);let C=ua(o,0,3,r,a,{porta:{esq:.85,dir:.85},parede:"#B8D0DC",piso:["madeira","#9A6A42","#8A5E3A"]}),S=new J;S.position.set(.95,0,-.45),o.add(S),S.add(at(.95,.3,1.95,"#8A5A36",0,.17,0,{out:.01})),S.add(at(.95,.7,.06,"#7A4E2E",0,.55,-.98,{out:.01})),S.add(at(.88,.1,1.85,"#F4F1EA",0,.37,0,{out:.008}));let x=at(.6,.14,.3,"#F4F1EA",0,.49,-.8,{out:.006});S.add(x);let F=at(.92,.05,1.2,"#3E6EC8",0,.44,.3,{out:.006});S.add(F);let R=new J;R.position.set(-1.12,0,.2),o.add(R),R.add(at(.6,.04,1.05,"#F4F1EA",0,.74,0,{out:.008}));for(let[Tt,Mt]of[[-1,-1],[1,-1],[-1,1],[1,1]])R.add(tt(.04,.72,.04,"#C9CED6",Tt*.26,.36,Mt*.48));let T=W0();T.position.set(.02,.76,.05),T.rotation.y=-Math.PI/2,T.scale.setScalar(.8),R.add(T);let D=new J;D.position.set(-.16,.76,-.38),R.add(D),D.add(ct(.06,.07,.02,"#2A2A30",0,.01,0)),D.add(ct(.01,.01,.3,"#2A2A30",0,.16,0));let Z=ct(.05,.1,.12,"#F2C230",0,.32,0,{out:.004});D.add(Z);let G=new an("#FFD89A",0,3,1.6);G.position.set(-.1,1,-.2),R.add(G);let L=la("#3E6EC8");L.position.set(-.55,0,.25),L.rotation.y=-Math.PI/2,o.add(L);let k=bo(.9,.9,e,4);k.position.set(.4,1.55,-r/2+.02),o.add(k);let O=new Bn(i?"#B8C8FF":"#FFF0D0",i?8:10,7,.55,.6,1.4);O.position.set(.4,2.3,-r/2-.6),O.target.position.set(.2,0,.6),o.add(O,O.target);let Q=fa(o,1.5,.9,-1),W=Xi({teia:!0,semCorda:2});W.position.set(-1.36,.22,1.36),W.rotation.set(0,Math.PI/2,Math.PI/2-.2),o.add(W);let rt=new J;rt.position.set(-1.48,1.35,-.95),rt.rotation.y=Math.PI/2,o.add(rt),rt.add(at(.5,.8,.03,"#7A5236",0,0,0,{out:.005}));let gt=new it(new bt(.44,.74),new re({color:"#9AB0C0"}));gt.position.z=.017,rt.add(gt);let Ct=new J;Ct.position.set(-.3,0,-1.25),o.add(Ct);let Jt=zh(.8,"#B87A4A");Ct.add(Jt),Ct.add(at(.5,.34,.06,"#2A2A30",0,1.06,-.02,{out:.006}));let be=da(.44,.28,256);be.position.set(0,1.06,.015),Ct.add(be);let j=new it(new bt(.45,.6),$t(Gt(225,300,Tt=>{Tt.fillStyle="#2A2E44",Tt.fillRect(0,0,225,300),Tt.fillStyle="#F2C230",Tt.beginPath(),Tt.arc(112,130,70,0,7),Tt.fill(),Ao(Tt,"ROCK",112,250,50,"#F4F1EA")})));j.position.set(1,1.7,-r/2+.02),o.add(j);let dt=Mo(.25);dt.position.set(0,a,0),o.add(dt);let Lt=new an("#FFE2AE",i?0:1.5,5,1.6);Lt.position.set(0,2.2,0),o.add(Lt);let vt=ua(o,2.85,2.5,r,a,{porta:{esq:.85},parede:"#F2D89A",piso:["madeira","#B88A5A","#A87A4A"]}),Wt=new J;Wt.position.set(3.55,0,-.55),o.add(Wt),Wt.add(at(.75,.26,1.6,"#E2443A",0,.15,0,{out:.008})),Wt.add(at(.7,.09,1.5,"#F4F1EA",0,.32,0,{out:.006}));let te=at(.45,.12,.24,"#F4F1EA",0,.42,-.6,{out:.005});Wt.add(te);let de=at(.72,.045,1,"#F2C230",0,.39,.2,{out:.005});Wt.add(de);for(let Tt=0;Tt<9;Tt++){let Mt=new it(new bi(.04,5),new re({color:"#FFF2A0"}));Mt.position.set(2+Tt%3*.5,1.7+Math.floor(Tt/3)*.25,-r/2+.015),o.add(Mt)}let Ue=new J;Ue.position.set(2.1,1,-r/2+.03),o.add(Ue),Ue.add(at(.45,.9,.03,"#F2546E",0,0,0,{out:.005}));{let Tt=new it(new bt(.39,.84),new re({color:"#A8C0D0"}));Tt.position.z=.017,Ue.add(Tt)}let me=si("#3E7CC8");me.position.set(2.15,.19,.9),me.rotation.y=.6,o.add(me);let en=[];for(let Tt=0;Tt<3;Tt++){let Mt=new it(new bt(.3,.22),$t(Gt(150,110,w=>{w.fillStyle="#FBF7EC",w.fillRect(0,0,150,110),w.strokeStyle=["#E2443A","#3E7CC8","#5AA84E"][Tt],w.lineWidth=6,w.beginPath(),w.arc(75,50,26,0,7),w.stroke(),w.beginPath(),w.moveTo(20,95),w.lineTo(130,90),w.stroke()})));Mt.position.set(4.08,1.5,-.4+Tt*.4),Mt.rotation.y=-Math.PI/2,o.add(Mt),en.push(Mt)}let N=bo(.7,.7,e,7);N.position.set(3.3,1.6,-r/2+.02),o.add(N);let Hn=Mo(.22);Hn.position.set(2.85,a,0),o.add(Hn);let ge=new an("#FFE2AE",i?0:1.5,5,1.6);ge.position.set(2.85,2.2,0),o.add(ge);for(let Tt of[-1.55,1.55])o.add(tt(.1,a,.85-.42+r/2,"#E8E0D0",Tt,a/2,(-r/2+.85-.42)/2)),o.add(tt(.1,a,r/2-.85-.42,"#E8E0D0",Tt,a/2,(.85+.42+r/2)/2)),o.add(tt(.1,a-2.12,.84,"#E8E0D0",Tt,(a+2.12)/2,.85));let ye=fa(o,-1.55,.85,1),Zt=fa(o,1.55,.85,-1);if(Q.visible=!1,t.corte)for(let Tt of[l,C,vt])Tt.frente.visible=!1,Tt.teto.visible=!1;if(t.semTeto)for(let Tt of[l,C,vt])Tt.teto.visible=!1;return{g:o,D:r,H:a,PK:l,PG:C,PD:vt,fogao:c,chama:h,panela:d,geladeira:g,mesa:m,cadK:b,cama:S,coberta:F,trav:x,escrivaninha:R,caderno:T,abajur:D,luzAbaj:G,cadEsc:L,janela:k,violao:W,espelho:rt,tv:Ct,telaTV:be,camaD:Wt,travD:te,cobD:de,mochila:me,espelhoD:Ue,portaK:ye,portaD:Zt,luzes:{LK:v,LG:Lt,LD:ge,sol:O},luz:s}}function X0(n){pn(n,{r:10,pos:[3,9,5],ki:1.2,hemi:1.6}),n.add(new Ce("#FFFFFF",.5));let t=new J;n.add(t);let e=xe(41);t.add(Ge(20,16,$t(ui(Wi("ceramica","#E8E4DC","#D8D2C6"),14,12)),0,0,-3,-Math.PI/2)),t.add(Ge(20,5,qs("#F4EEDC",6,2),0,2.5,-9));let i=Ge(20,16,kt("#F4F4F0"),0,3.6,-3,Math.PI/2);t.add(i);for(let g=0;g<6;g++){let E=tt(1.6,.05,.25,"#FFFFF4",-6+g*2.6,3.55,-2);E.material=kt("#FFFFF4",{emissive:"#FFFFF4",emissiveIntensity:.8}),t.add(E)}for(let g=0;g<3;g++){let E=-3.5-g*1.8;for(let m of[-1,1]){let p=new J;p.position.set(m*3.2,0,E),t.add(p),p.add(tt(4.5,1.7,.5,"#C9CED6",0,.85,0,{out:.008}));for(let b=0;b<4;b++)for(let M=0;M<14;M++)p.add(tt(.22,.2+e()*.1,.14,["#E2443A","#F2C230","#3E7CC8","#5AA84E","#F2546E","#F4F1EA","#9B6CC4"][(M+b*3+g)%7],-2.05+M*.31,.3+b*.42,.3))}}let s=new it(new bt(5,.9),$t(Gt(1e3,180,g=>{g.fillStyle="#C8302A",g.fillRect(0,0,1e3,180),Ao(g,"MERCADO BOM PRE\xC7O",500,95,92,"#FFE08A")})));s.position.set(0,3,-8.95),t.add(s);let o=new J;t.add(o),o.add(at(2.4,.85,.7,"#3A3A44",.5,.425,.2,{out:.01}));let r=new it(new we(1.5,.02,.5),$t(ui(Gt(64,64,g=>{g.fillStyle="#2A2A30",g.fillRect(0,0,64,64),g.fillStyle="#3A3A44",g.fillRect(0,0,64,8)}),8,1)));r.position.set(.95,.86,.2),o.add(r);let a=new J;a.position.set(.05,.86,.2),o.add(a),a.add(at(.3,.02,.3,"#5A5A66",0,0,0));let l=new it(new bt(.24,.24),new re({color:"#FF3A3A",transparent:!0,opacity:.5}));l.rotation.x=-Math.PI/2,l.position.y=.012,a.add(l);let c=new J;c.position.set(-.5,.86,.05),o.add(c),c.add(ct(.02,.02,.3,"#2A2A30",0,.15,0)),c.add(at(.32,.24,.04,"#2A2A30",0,.4,0,{out:.005}));let h=da(.28,.2,256);h.position.set(0,.4,.022),c.add(h);let d=new J;d.position.set(-.5,0,-.3),o.add(d),d.add(ct(.03,.03,2,"#9EA6B0",0,1,0,{seg:8}));let u=ct(.14,.14,.08,"#C8302A",0,2.05,0,{rot:[Math.PI/2,0,0],out:.004});d.add(u);let f=[];for(let g=0;g<5;g++){let E=at(.12,.16,.1,["#F2C230","#3E7CC8","#E2443A","#5AA84E","#F4F1EA"][g],1.6-g*.2,.95,.2,{out:.004});t.add(E),f.push(E)}return{g:t,leitor:a,laser:l,telaM:h,prods:f,esteira:r}}function Vf(n){pn(n,{r:9,pos:[4,8,5],ki:1.4,hemi:1.5}),n.add(new Ce("#FFF4E6",.45));let t=new J;n.add(t);let e=9,i=8,o=ua(t,0,e,i,3.2,{parede:"#F2E6C8",piso:["ceramica","#D8CDB4","#C4B89E"]});o.frente.visible=!1,t.add(Ge(e,1.2,kt("#E2843A"),0,.6,-i/2+.01));let r=at(3.6,1,.7,"#E2843A",-1.4,.5,-i/2+.7,{out:.01});t.add(r);let a=new it(new we(3.4,.4,.5),new pe({color:"#CFE6F4",transparent:!0,opacity:.45}));a.position.set(-1.4,1.2,-i/2+.7),t.add(a);for(let h=0;h<12;h++){let d=ae(.05,["#D9892E","#C9A050","#E8B060"][h%3],-2.9+h*.26,1.07,-i/2+.6+h%2*.15,{seg:8});d.scale.set(1,.8,1.3),t.add(d)}let l=new it(new bt(1.6,1),$t(Gt(480,300,h=>{h.fillStyle="#2E2A26",h.fillRect(0,0,480,300),Ao(h,"CANTINA",240,50,50,"#F2C230"),[["Coxinha","R$ 4,00"],["Pastel","R$ 5,00"],["Suco","R$ 3,00"],["P\xE3o de queijo","R$ 2,50"]].forEach(([u,f],g)=>{Ao(h,u,40,110+g*46,34,"#F4F1EA",700,"left","Caveat"),Ao(h,f,440,110+g*46,34,"#F4F1EA",700,"right","Caveat")})})));l.position.set(-1.4,2.3,-i/2+.02),t.add(l);let c=[];for(let h=0;h<2;h++){let d=new J;d.position.set(1.4,0,-1.2+h*2.4),t.add(d),d.add(at(2.4,.06,.8,"#F4F1EA",0,.74,0,{out:.008}));for(let u of[-1,1])d.add(tt(.06,.72,.7,"#9EA6B0",u*1,.36,0)),d.add(at(2.4,.05,.3,"#3E7CC8",0,.44,u*.65,{out:.006})),d.add(tt(.05,.42,.25,"#9EA6B0",u*1,.21,.65)),d.add(tt(.05,.42,.25,"#9EA6B0",u*1,.21,-.65));c.push(d)}for(let h=0;h<3;h++){let d=bo(1.4,1,"manha",10+h);d.position.set(e/2-.02,1.8,-2.5+h*2.4),d.rotation.y=-Math.PI/2,t.add(d)}return{g:t,mesas:c,W:e,D:i}}function q0(n,t={}){V0(n,[[0,"#5EA8E8"],[.45,"#A8D6F4"],[.55,"#F4EAD2"],[1,"#D8E6EE"]]);let e=pn(n,{r:14,pos:[-6,9,7],ki:2.1,hemi:1.4,key:"#FFE8C0"});n.add(new Ce("#FFF4E0",.3));let i=new J;n.add(i);let s=xe(77);i.add(Ge(60,60,$t(ui(Tf("#78B85A"),20,20)),0,-.01,0,-Math.PI/2)),i.add(Ge(13,8,$t(ui(Af(),5,3)),0,0,0,-Math.PI/2));let o=[];for(let a of[-5.6,5.6])for(let l of[-.9,.9]){let c=ae(.18,"#9A968E",a,.1,l,{out:.006,seg:10});c.scale.set(1.2,.7,1),i.add(c),o.push(c)}i.add(Me(new we(30,1.4,.25),$t(ui(Sf("#B5603E"),10,1)),{pos:[0,.7,-6.5],out:.01}));let r=["#E8C88A","#9CC4B0","#E8A08A","#B8C8E8","#F2E0B0","#D8B8D8"];for(let a=0;a<8;a++){let l=3+s()*1.5,c=3+s()*2.5,h=new J;h.position.set(-14+a*4,0,-9-s()*2),i.add(h),h.add(Me(new we(l,c,3),$t(ui(Es(r[a%6]),2,2)),{pos:[0,c/2,0],out:.01})),h.add(Me(new we(l+.3,.25,3.3),kt("#B8643C"),{pos:[0,c+.1,0],out:.008}));for(let d=0;d<2;d++)h.add(Ge(.7,.7,kt("#7E98B0"),-l/4+d*l/2,c*.6,1.51))}for(let a=0;a<5;a++){let l=new J;l.position.set(-10+a*5+s()*2,0,-5-s()*1),i.add(l),l.add(ct(.1,.14,2.2,"#6A4A30",0,1.1,0,{seg:8,out:.006}));for(let c=0;c<3;c++)l.add(ae(.7+s()*.3,["#4C8A3E","#5DA04A","#3E7A34"][c],s()-.5,2.6+s()*.6,s()-.5,{seg:10,out:.01}))}for(let a=0;a<40;a++){let l=new it(new Xn(.04,.12,4),kt("#5A9A44"));l.position.set((s()-.5)*12,.05,(s()-.5)*7),i.add(l)}return sa(n,{centro:[0,14,-14],raio:12,n:5}),{g:i,traves:o,luz:e}}function Wf(n,t={}){pn(n,{r:18,pos:[4,14,6],ki:.6,hemi:.55,sky:"#C8D0E8",ground:"#5A5048"}),n.add(new Ce("#B8C0D8",.25));let e=new J;n.add(e);let i=xe(5);e.add(Ge(40,40,$t(ui(Wi("madeira","#8A6A4A","#7A5A3E"),16,16)),0,0,0,-Math.PI/2)),e.add(Ge(40,12,qs("#3A3A48",8,3),0,6,-16)),e.add(Ge(40,12,qs("#3A3A48",8,3),-16,6,0,0,Math.PI/2)),e.add(Ge(40,12,qs("#3A3A48",8,3),16,6,0,0,-Math.PI/2)),e.add(Ge(40,12,qs("#3A3A48",8,3),0,6,16,0,Math.PI)),e.add(Ge(40,40,kt("#2A2A34"),0,11,0,Math.PI/2));let s=new it(new bt(12,1.6),$t(Gt(1500,200,u=>{u.fillStyle="#1E3A6A",u.fillRect(0,0,1500,200),Ao(u,"CAMPEONATO ESTADUAL DE XADREZ",750,80,84,"#F2C230"),Ao(u,"FINAL",750,165,52,"#F4F1EA")})));s.position.set(0,7,-15.9),e.add(s);let o=at(4.2,.3,3.2,"#5A2A2A",0,.15,0,{out:.01});e.add(o),e.add(Ge(4,3,kt("#8E1E2A"),0,.305,0,-Math.PI/2));let r=new J;r.position.set(0,.3,0),e.add(r),r.add(at(1,.05,.8,"#F4F1EA",0,.74,0,{out:.008})),r.add(tt(.9,.7,.34,"#E8E2D6",0,.37,0));let a=Zn(.055);a.g.position.set(0,.765,0),r.add(a.g);let l=Nf();l.position.set(.42,.765,-.02),l.rotation.y=Math.PI/2,l.scale.setScalar(1.1),r.add(l);for(let u of[.62,-.62]){let f=la("#2A2A30");f.position.set(0,.3,u),f.rotation.y=u>0?Math.PI:0,e.add(f)}let c=new Bn("#FFF4E0",60,20,.32,.5,1.2);c.position.set(0,9,1.5),c.target.position.set(0,.8,0),c.castShadow=!0,e.add(c,c.target);let h=new it(new Xn(2.4,8.5,32,1,!0),new re({color:"#FFF4D8",transparent:!0,opacity:.07,depthWrite:!1,side:Ze}));h.position.set(0,4.9,.7),h.rotation.x=-.17,e.add(h);let d=[];for(let u=0;u<5;u++)for(let f=0;f<10;f++){let g=-11+f*2.45,E=-12+u*3.1;if(Math.abs(g)<3.2&&Math.abs(E)<3)continue;let m=new J;m.position.set(g,0,E),e.add(m),m.add(at(.9,.05,.7,"#F4F1EA",0,.74,0,{out:.006})),m.add(tt(.8,.7,.6,"#E8E2D6",0,.37,0));let p=Zn(.045);p.g.position.y=.765,m.add(p.g),d.push(m)}for(let u=0;u<8;u++){let f=new an("#FFE8C8",9,10,1.6);f.position.set(-10+u*3,6,-8+u%2*8),e.add(f)}for(let u=0;u<20;u++)e.add(ct(.03,.03,.9,"#C9A030",-4+u*.42,.45,2.4,{seg:6}));return e.add(ct(.015,.015,8,"#C8302A",0,.85,2.4,{rot:[0,0,Math.PI/2],seg:6})),{g:e,T:a,rel:l,mesaF:r,mesas:d,holo:c,cone:h,tab:o}}function Pi(n,t={}){pn(n,{r:8,pos:[4,7,2],ki:1.3,hemi:1.5}),n.add(new Ce("#FFF4E6",.45));let e=new J;n.add(e);let i=6.5,s=6,o=3,r=xe(13),a=ua(e,0,i,s,o,{parede:"#F7E7C8",piso:["ceramica","#D8E0C8","#C4CEB4"]});e.add(Ge(i,1,kt("#7FC0A8"),0,.5,-s/2+.01));let c=["minha m\xE3e","meu pai","minha v\xF3","meu irm\xE3o","minha fam\xEDlia","meu tio","minha irm\xE3"].map((S,x)=>{let F=Jh(S,x,["#F7E7A0","#C8E8F8","#F8D0D8","#D8F0C8"][x%4]);return F.position.set(-2.7+x*.9,1.85+x%2*.12,-s/2+.02),F.rotation.z=(r()-.5)*.08,e.add(F),F}),h=tt(2.2,1,.04,"#2E5A44",0,1,-s/2+.05,{out:.006});h.position.set(2.2,1.6,-s/2+.03),h.visible=!1;let d=[],u=["#E2443A","#3E7CC8","#F2C230","#5AA84E","#9B6CC4","#F2994A"];for(let S=0;S<18;S++){let x=xr(u[S%6]);e.add(x),d.push(x)}let f=()=>d.forEach((S,x)=>{S.position.set(-2.2+x%6*.8,0,-.6+Math.floor(x/6)*.9),S.rotation.set(0,Math.PI,0)}),g=()=>d.forEach((S,x)=>{let F=x%3,R=Math.floor(x/3);S.position.set(-2.6+F*.45,R*.12,2.3-x%2*.05),S.rotation.set(0,Math.PI+(r()-.5)*.2,0)});t.empilhadas?g():f();let E=xr("#F2C230");E.position.set(2.6,0,-2.3),E.rotation.y=-Math.PI*.8,e.add(E);let m=[];for(let S=0;S<80;S++){let x=new it(new bt(.03,.02),new re({color:u[S%6],side:Ze}));x.rotation.set(-Math.PI/2,0,r()*6),x.position.set((r()-.5)*5.5,.003,(r()-.5)*5),e.add(x),m.push(x)}let p=Kh("#E2443A",.85);p.position.set(1.2,0,.6),e.add(p);let b=Kh("#3E7CC8",.9);b.position.set(-1.6,0,1.4),e.add(b);for(let S=0;S<2;S++){let x=bo(1.3,1.1,"manha",20+S);x.position.set(i/2-.02,1.8,-1.6+S*2.2),x.rotation.y=-Math.PI/2,e.add(x)}let M=new Bn("#FFE8C0",18,12,.7,.6,1.2);M.position.set(i/2+2,3.5,-1),M.target.position.set(1.5,0,-1.5),n.add(M,M.target);let v=fa(e,-i/2,2,1,"#3E7CC8"),C=[];for(let S=0;S<10;S++){let x=new it(new Xn(.07,.14,3),kt(u[S%6]));x.rotation.x=Math.PI,x.position.set(-2.8+S*.62,2.6-Math.sin(S/9*Math.PI)*.2,-1),e.add(x),C.push(x)}return{g:e,cads:d,canto:E,carts:c,picado:m,porta:v,fila:f,pilhas:g,W:i,D:s,H:o,P:a}}function Y0(n){pn(n,{r:10,pos:[3,8,4],ki:1,hemi:1.4}),n.add(new Ce("#FFF4E6",.45));let t=new J;n.add(t);let e=3,i=16,s=3;t.add(Ge(e,i,$t(ui(Wi("ceramica","#D8E0C8","#C4CEB4"),3,16)),0,0,-4.5,-Math.PI/2));for(let a of[-1,1])t.add(Ge(i,1,kt("#7FC0A8"),a*e/2,.5,-4.5,0,-a*Math.PI/2)),t.add(Ge(i,2,qs("#F7E7C8",6,1),a*e/2,2,-4.5,0,-a*Math.PI/2));t.add(Ge(e,i,kt("#F4F0E8"),0,s,-4.5,Math.PI/2)),t.add(Ge(e,s,qs("#F7E7C8"),0,s/2,-12.5)),["minha m\xE3e","meu pai","minha v\xF3","meu irm\xE3o","minha fam\xEDlia","meu cachorro","minha tia","meu av\xF4"].forEach((a,l)=>{let c=l%2?1:-1,h=Jh(a,l,["#F7E7A0","#C8E8F8","#F8D0D8","#D8F0C8"][l%4]);h.position.set(c*(e/2-.02),1.6,1.5-Math.floor(l/2)*3),h.rotation.y=-c*Math.PI/2,t.add(h)});for(let a=0;a<4;a++){let l=new an("#FFF2D8",3,6,1.6);l.position.set(0,2.7,2-a*4.5),t.add(l),t.add(tt(1.2,.04,.2,"#FFFDF0",0,s-.02,2-a*4.5))}let r=fa(t,e/2,-10,-1,"#3E7CC8");return{g:t,W:e,L:i,porta:r}}function $n(n,t={}){n.add(new Ce("#FFFFFF",.6));let e=new ki("#FFF4E0",1.6);e.position.set(3,8,4),n.add(e);let i=new J;n.add(i);let s=xe(99),o=new En,r=400,a=new Float32Array(r*3);for(let c=0;c<r;c++)a[c*3]=(s()-.5)*40,a[c*3+1]=(s()-.2)*20,a[c*3+2]=(s()-.5)*40;o.setAttribute("position",new Ln(a,3));let l=new p0(o,new Kr({color:t.cor||"#C8D4FF",size:.06,transparent:!0,opacity:.6}));return i.add(l),{g:i,pontos:l}}var Z0=(n,t=.9)=>(e,i,s)=>{e.fillStyle=n,e.fillRect(0,s*t,i,s*(1-t))},j3=(n,t,e,i=.5)=>(s,o,r)=>{s.fillStyle=t,s.font=`900 ${e}px Inter`,s.textAlign="center",s.textBaseline="middle",s.fillText(n,o/2,r*i)},Se={pele:"#E3AE86",cabelo:"cacheado",corCabelo:"#3A2216",nariz:!0,banguela:!0,sardas:!0,camisa:"#F6C83A",calca:"#3E6EC8",meia:"#E3AE86",tenis:"#E3AE86",sola:"#E2443A",chinelo:"#E2443A",escala:.64,estampa:(n,t,e)=>{Z0("#E0A824",.88)(n,t,e),n.fillStyle="#E2443A",n.beginPath();for(let i=0;i<5;i++){let s=-Math.PI/2+i*2.513;n.lineTo(t/2+Math.cos(s)*46,e*.5+Math.sin(s)*46);let o=s+1.256;n.lineTo(t/2+Math.cos(o)*19,e*.5+Math.sin(o)*19)}n.fill()}},So={...Se,camisa:"#6E8ED8",calca:"#6E8ED8",manga:"longa",estampa:(n,t,e)=>{n.fillStyle="#F6E27A";for(let i=0;i<22;i++){let s=i*137%t,o=i*71%e;n.beginPath();for(let r=0;r<5;r++){let a=-Math.PI/2+r*2.513;n.lineTo(s+Math.cos(a)*13,o+Math.sin(a)*13),n.lineTo(s+Math.cos(a+1.256)*5,o+Math.sin(a+1.256)*5)}n.fill()}}},t5=(n,t,e)=>{Z0("#B02A24",.9)(n,t,e),n.fillStyle="#B02A24",n.fillRect(t/2-6,0,12,e*.3),n.fillStyle="#F4F1EA",n.fillRect(t/2+70,e*.3,120,70),n.fillStyle="#2A2A30",n.font="900 30px Inter",n.textAlign="center",n.textBaseline="middle",n.fillText("ROSE",t/2+130,e*.3+35),n.fillStyle="#FFE08A",n.font="900 36px Inter",n.fillText("BOM PRE\xC7O",t/2-110,e*.62)},An={pele:"#D9A07A",cabelo:"coque",corCabelo:"#2E1E16",cilios:!0,nariz:!0,brincos:"#F2C230",camisa:"#D8362E",calca:"#2A2A30",tenis:"#2A2A30",sola:"#F4F1EA",escala:.93,estampa:t5},Ro={...An,camisa:"#9C7AC8",estampa:Z0("#8A66B8",.9)},oi={pele:"#8A5A3E",cabelo:"curto",corCabelo:"#1A1212",bone:"#E2443A",boneTras:!0,nariz:!0,tronco:"barriga",camisa:"#3EA864",calca:"#3E5A7A",tenis:"#F4F1EA",sola:"#E2443A",escala:.97,estampa:(n,t,e)=>{j3("23","#F4F1EA",120)(n,t,e),Z0("#2E8E50",.9)(n,t,e)}},By={...Gi(2),pele:"#8A5A3E",cabelo:"curto",corCabelo:"#1A1212",bone:"#E2443A",boneTras:!0,tronco:"barriga",escala:.97};var Xf={pele:"#E3B28E",cabelo:"curto",corCabelo:"#8A8680",bigode:"#7A7670",oculos:!0,nariz:!0,rugas:!0,tronco:"barriga",camisa:"#E2D2A8",manga:"longa",calca:"#5A4A3A",tenis:"#3A2A20",sola:"#2A1E16",escala:1.04,estampa:(n,t,e)=>{n.fillStyle="#7A2E2E",n.beginPath(),n.moveTo(t/2-16,0),n.lineTo(t/2+16,0),n.lineTo(t/2+22,e*.6),n.lineTo(t/2,e*.7),n.lineTo(t/2-22,e*.6),n.fill()}},xo={pele:"#B8805A",cabelo:"curto",corCabelo:"#2A2020",nariz:!0,camisa:"#2E5EB8",manga:"longa",calca:"#2E5EB8",tenis:"#F4F1EA",sola:"#2A2A30",escala:1.04,estampa:(n,t,e)=>{n.fillStyle="#F4F1EA",n.fillRect(t*.18,0,18,e),n.fillRect(t*.82-18,0,18,e),n.strokeStyle="#E8E4DC",n.lineWidth=5,n.beginPath(),n.moveTo(t/2-50,0),n.lineTo(t/2,e*.3),n.lineTo(t/2+50,0),n.stroke(),n.fillStyle="#C9CED6",n.beginPath(),n.ellipse(t/2,e*.32,22,14,0,0,7),n.fill()}},Cr={...Gi(0),pele:"#F0C8A6",cabelo:"topete",corCabelo:"#C99A4A",oculos:!0,nariz:!0,escala:1,sobr:"#9A7030"},qf={pele:"#C98C66",cabelo:"curto",corCabelo:"#1A1212",nariz:!0,sobr:"#1A1212",camisa:"#1E2028",manga:"longa",calca:"#1E2028",tenis:"#121216",sola:"#121216",escala:1.02,estampa:(n,t,e)=>{n.fillStyle="#F4F1EA",n.beginPath(),n.moveTo(t/2-60,0),n.lineTo(t/2,e*.42),n.lineTo(t/2+60,0),n.fill(),n.fillStyle="#7A1E2E",n.fillRect(t/2-9,0,18,e*.4),n.strokeStyle="#E2443A",n.lineWidth=14,n.beginPath(),n.arc(t/2,-10,92,.15,Math.PI-.15),n.stroke(),n.fillStyle="#E2443A";for(let i of[-1,1])n.beginPath(),n.ellipse(t/2+i*86,40,24,30,0,0,7),n.fill()}},Yf={pele:"#E3B28E",cabelo:"careca",corCabelo:"#7A7670",barba:"#9A968F",oculos:!0,nariz:!0,tronco:"barriga",camisa:"#F4F1EA",manga:"longa",calca:"#2A2A30",tenis:"#1E1A18",sola:"#1E1A18",escala:1.03,estampa:(n,t,e)=>{n.fillStyle="#2A2E3A",n.fillRect(0,0,t*.34,e),n.fillRect(t*.66,0,t*.34,e),n.fillStyle="#F2C230",n.fillRect(t*.7,e*.3,70,50)}},$0={pele:"#B8805A",cabelo:"curto",corCabelo:"#2A2020",nariz:!0,barba:"#3A2A20",camisa:"#F27A2E",calca:"#1E1E22",tenis:"#F4F1EA",sola:"#2A2A30",escala:1.03,estampa:(n,t,e)=>{n.fillStyle="#1E1E22",n.fillRect(0,e*.4,t,e*.08)}};var Zf=n=>xi(n+1,{escala:.97+n%3*.03}),Qh=(n,t={})=>hf(n,{escala:.62,...t});var jh=.3+.48;function He(n,t={}){let e=Wf(n,t),i=V(n,Et,0,.62,Math.PI);Qt(i,0,.62,Math.PI,jh);let s=V(n,qf,0,-.62,0);Qt(s,0,-.62,0,jh);let o=V(n,Yf,1.25,-.1,-Math.PI/2,.3),r=V(n,t.profX?xo:xo,-4.75,2.45,Math.PI),a=[],l=[];if(!t.semGente){e.mesas.forEach((h,d)=>{if(d%2)return;let u=V(n,xi(d,{escala:.95}),0,0,0),f=d%4?1:-1;Qt(u,h.position.x,h.position.z+f*.55,f>0?Math.PI:0,.48),u.seed=d%9,a.push(u)});for(let h=0;h<18;h++){let d=V(n,xi(h+3),-3.8+h%9*.95+Math.floor(h/9)*.475,2.75+Math.floor(h/9)*.85,Math.PI);d.seed=h,l.push(d)}}let c=Be();return n.add(c),{...e,gui:i,adv:s,juiz:o,prof:r,jog:a,pub:l,tel:c}}function Xe(n,t,e="jogo"){n.jog.forEach((i,s)=>{i.pose(pt(mt({shR:[60,8],elR:100,headX:18,shL:[30,8],elL:70},kn(t,s,.6)))),I(i,null,t,s%3?"neutro":"determinado")}),n.pub.forEach((i,s)=>{let o=ve(t,s,.8);if(e==="aplauso"){let r=Math.abs(Math.sin(t*9+s));o=mt({shL:[70,-10],shR:[70,-10],elL:60+r*30,elR:60+r*30},{bob:r*.01})}e==="tensao"&&s%3===0&&(o=mt(o,{shR:[120,-10],elR:140,headX:6})),i.pose(o),I(i,null,t,e==="aplauso"?"feliz":e==="tensao"?"preocupado":"neutro",{look:[0,.2]})}),I(n.juiz,null,t,"neutro"),n.juiz._pose||n.juiz.pose(mt(oe.bracoCruzado,Cn(t,3,.5)))}function J0(n,t,e=0){let i=n.gui.root.position;n.tel.position.set(i.x-.145+e,jh+.06,i.z-.16),n.tel.rotation.set(0,-Math.PI/2-.5,Math.PI/2-.2)}var vs={bg:"#121218",far:120},$f=[13.96,14.25,14.5,14.72,14.9,15.05,15.2,15.33,15.45,15.56,15.66,15.76,15.86,15.95],ys=(n,t,e="determinado",i={})=>{n.gui.pose(pt(mt({shR:[48,6],elR:96,shL:[44,6],elL:98,lean:12,headX:16},i.parado?{}:kn(t,1,.3)))),I(n.gui,null,t,e,{look:[0,.45],vivo:!i.parado,blink:i.parado?0:void 0})},Ms=(n,t)=>{n.adv.pose(pt(mt({shR:[40,6],elR:100,shL:[30,6],elL:90,lean:10,headX:14},kn(t,4,.4)))),I(n.adv,null,t,"determinado",{look:[0,.4]})},Jf=[B(0,1.05,{...vs,fov:30},n=>{let t=He(n,{semGente:!0});return t.holo.intensity=30,(e,i,s)=>{ys(t,e),Ms(t,e),Xe(t,e);let o=600-e;return t.rel.userData.set("09:5"+Math.floor(9-e*3),"10:00",0),P(s,[.75,1.32,.35],[.46,1.1,-.02],i/1.05,0,0),{exposure:.7,vig:.6}}}),B(1.05,3.36,{...vs,fov:28,perto:!0,limpa:!1},n=>{let t=He(n,{semGente:!0});return t.holo.intensity=22,(e,i,s)=>{ys(t,e),Ms(t,e),t.adv.root.visible=!1;let o=t.gui;o.headG.updateMatrixWorld(!0);let r=o.headG.localToWorld(new _(0,.26,.3));return P(s,[[0,[r.x+.06,r.y+.03,r.z-1.45]],[1,[r.x+.03,r.y,r.z-1.1]]],[r.x,r.y-.02,r.z+.2],i/2.3,0,0),{exposure:.78,vig:.6}}}),B(3.36,5.92,{...vs,fov:34},n=>{let t=He(n);return(e,i,s)=>{ys(t,e),Ms(t,e),Xe(t,e);let o=$(-.9,-.5,i/2.56);return P(s,[Math.sin(o)*2.2,1.55,Math.cos(o)*2.2],[0,1.05,0],i/2.56,0,0),{vig:.45}}}),B(5.92,9.84,{...vs,fov:40},n=>{let t=He(n);return(e,i,s)=>{ys(t,e),Ms(t,e),Xe(t,e);let o=ln(i/3.92);P(s,[$(1.2,7.5,o),$(1.5,7.5,o),$(1.6,11,o)],[0,$(1,.4,o),$(0,-2.5,o)],i/3.92,0,0);let r=Xt(8.7,9.6,e);return Bt.mundo.value=r,{vig:.4}}}),B(9.84,11.44,{...vs,fov:28,limpa:!1},n=>{let t=He(n),e=Vt([t.T.g,t.rel]);return(i,s,o)=>{ys(t,i),Ms(t,i),Xe(t,i);let r=Math.max(0,9*60+41-Math.floor((i-9.84)*6));return t.rel.userData.set("0"+Math.floor(r/60)+":"+String(r%60).padStart(2,"0"),"10:00",0),Bt.mundo.value=1,e(1,i),qt(n,"#121218",1),P(o,[[0,[.9,1.3,.55]],[1,[.75,1.22,.4]]],[.42,1.09,-.02],s/1.6,0,0),{focus:1,range:.3,blur:10,vig:.5}}}),B(11.44,16.56,{...vs,fov:32,perto:!0,limpa:!1},n=>{let t=He(n),e=Vt([t.tel]),i=new an("#9FD8FF",0,.35,2);return n.add(i),(s,o,r)=>{ys(t,s),Ms(t,s),Xe(t,s);let a=yo(s,$f);J0(t,s,a);let l=$f.some(d=>s>=d&&s<d+.3);t.tel.tela(l?"chamadasBorrado":"apagada",0),i.position.copy(t.tel.position),i.position.y+=.08,i.intensity=l?.5:0,Bt.mundo.value=1,e(1,s),qt(n,"#121218",1);let c=t.tel.position;if(t.adv.root.visible=o>=2.2,o<2.2){let d=o/2.2;return P(r,[$(-1.35,-1.1,d),$(1.62,1.55,d),$(-.95,-.7,d)],[0,1.22,.55],d,0,0),{focus:.9,range:.4,blur:9,vig:.5}}let h=(o-2.2)/2.92;return P(r,[$(-.85,-.7,h),$(1.4,1.3,h),$(1.25,1.1,h)],[c.x,c.y,c.z],h,0,0),{focus:.6,range:.3,blur:10,vig:.5,exposure:.85}}}),B(16.56,18.36,{...vs,fov:26,perto:!0,limpa:!1},n=>{let t=He(n),e=Vt([t.gui.root]);return(i,s,o)=>(ys(t,16.6,"determinado",{parado:!0}),Ms(t,16.6),Xe(t,16.6),t.juiz.root.visible=!1,Bt.mundo.value=1,e(.6,i),qt(n,"#121218",1),P(o,[[0,[-.4,1.4,-.42]],[1,[-.34,1.38,-.34]]],[0,1.27,.62],s/1.8,0,0),{vig:.55,exposure:.95})}),B(18.36,23.52,{bg:"#08080C",fov:30},n=>{let t=$n(n,{cor:"#8890B0"}),e=Be();e.position.set(0,.5,0),e.rotation.set(-Math.PI/2+.25,0,.25),n.add(e);let i=at(1.2,.04,.8,"#3A2A22",0,.47,0);n.add(i);let s=new an("#FF6A6A",2,1.5,2);return s.position.set(0,.7,.1),n.add(s),(o,r,a)=>{let l=yo(o,[18.6,19.6,20.6,21.6,22.6],.4);return e.position.x=l,e.tela("chamadasBorrado",0),s.intensity=1.5+Math.sin(o*6)*.5,P(a,[[0,[.03,.8,.3]],[1,[.01,.66,.16]]],[0,.5,0],r/5.16,0,0),{vig:.65,focus:.4,range:.2,blur:8}}}),B(23.52,27.84,{bg:"#0E0C14",fov:30},n=>{$n(n,{cor:"#C8B8FF"});let t=V(n,Se,0,0,0),e=tn();n.add(e),e.scale.setScalar(.8);let i=new Bn("#FFE8C0",8,4,.5,.8,1.5);return i.position.set(.4,1.6,1.2),i.target.position.set(0,.55,0),n.add(i,i.target),(s,o,r)=>{t.pose({shL:[62,-14],elL:70,shR:[62,-14],elR:70,headX:18}),I(t,null,s,"neutro",{look:[0,.5]}),t.root.updateMatrixWorld(!0);let a=t.hands.L.localToWorld(new _(0,-.05,.03)),l=t.hands.R.localToWorld(new _(0,-.05,.03));return e.position.copy(a).add(l).multiplyScalar(.5),e.position.z+=.03,e.rotation.set(-.35,0,0),e.set(et((s-25.2)/4)*.35),P(r,[[0,[.25,.8,.75]],[1,[.12,.72,.5]]],[e.position.x,e.position.y,e.position.z],o/4.32,0,0),{vig:.6,exposure:.85}}}),B(27.84,31.44,{bg:"#0C0A06",fov:30},n=>{$n(n,{cor:"#F2C230"});let t=O0(2.2);t.position.set(0,1,0),n.add(t);let e=Tn(n,[0,1,0],{n:60,cor:"#FFD86A",r:1.2,tam:.025}),i=new an("#FFD86A",4,4,2);return i.position.set(.5,1.5,1.2),n.add(i),(s,o,r)=>{let a=et((s-28)/2.3),l=a<1?1200*fn(a):1200;return t.set(l,s>30.3?et((s-30.3)*2)*.6:0),t.rotation.y=Math.sin(s*.8)*.25*(1-a*.6),e((s-27.84)/3.6%1),P(r,[[0,[.15,1.05,2.2]],[1,[.05,1.02,1.8]]],[0,1.08,0],o/3.6,0,0),{bloom:.25,bloomT:.9,vig:.5,exposure:.85}}}),B(31.44,34.44,{...vs,fov:30,perto:!0,limpa:!1},n=>{let t=He(n),e=Vt([t.gui.root]);return(i,s,o)=>(t.adv.root.visible=!1,ys(t,16.6,"determinado",{parado:!0}),Ms(t,16.6),Xe(t,16.6),t.juiz.root.visible=!1,Bt.mundo.value=.85,e(.5,i),qt(n,"#121218",.85),P(o,[[0,[-1.45,1.62,-.9]],[1,[-1.3,1.58,-.75]]],[-.05,1.22,.62],s/3,0,0),{vig:.45})}),B(34.44,35.96,{...vs,fov:38},n=>{let t=He(n),e=Object.values(t.T.P);return(i,s,o)=>{let r=34.44+(35.96-i)*3;ys(t,r*3),Ms(t,r*3),Xe(t,r*4,"aplauso"),e.forEach((l,c)=>{l.position.y=.021+Math.abs(Math.sin(i*14+c))*.03*(1-s/1.52),l.rotation.y=i*20*(c%2?1:-1)});let a=$(.3,-.6,s/1.52);return P(o,[Math.sin(a)*4,2.4,Math.cos(a)*4],[0,.9,0],s/1.52,Math.sin(i*30)*.01,0),{sat:.55,tint:"#C8D8FF",vig:.5}}})];var e5=new _,Kf=new _,Qf=[[-70,175],[-25,110],[-80,80],[0,150]],td=new WeakMap;function pa(n,t,e=new _){return n.hands[t].updateWorldMatrix(!0,!1),n.hands[t].localToWorld(e.set(0,-.04,.03))}function Ii(n,t,e,i={},s={}){let o=Array.isArray(e)?Kf.set(...e):Kf.copy(e),r="sh"+t,a="el"+t,l=td.get(n)?.[t];if(!l){let f=i[r]||[40,10,0];l=[f[0]||0,f[1]??10,f[2]||0,i[a]??60]}l=l.slice();let c={...i},h=f=>(c[r]=[f[0],f[1],f[2]],c[a]=f[3],n.pose(c),n.root.updateMatrixWorld(!0),pa(n,t,e5).distanceTo(o)+Math.abs(f[2])*4e-4+Math.max(0,-f[1])*.002+(s.cot!==void 0?Math.abs(f[3]-s.cot)*3e-4:0)),d=h(l);for(let f of[24,12,6,3,1.5,.7])for(let g=0;g<3;g++){let E=!1;for(let m=0;m<4;m++)for(let p of[f,-f]){let b=l.slice();b[m]=Math.min(Qf[m][1],Math.max(Qf[m][0],b[m]+p));let M=h(b);M<d-1e-5&&(d=M,l=b,E=!0)}if(!E)break}let u=td.get(n)||{};return u[t]=l,td.set(n,u),c[r]=[l[0],l[1],l[2]],c[a]=l[3],n.pose(c),n.root.updateMatrixWorld(!0),c}function _s(n,t,e,i){return n.headG.updateWorldMatrix(!0,!1),n.headG.localToWorld(new _(t,e,i))}function ed(n,t,e,i=new _(0,1,0)){let s=new _().subVectors(e,t).normalize();n.quaternion.setFromUnitVectors(i,s)}var n5=[0,.17,.29];function jf(n,t,e,i={},s=1){let o=_s(n,...n5),r=_s(n,-.24+Math.sin(e*40*s)*.025*s,.13+Math.sin(e*20*s)*.008,.36),a=Ii(n,"R",r,i),l=pa(n,"R");return t.position.copy(l),ed(t,l,o),a}function nd(n,t,e,i={},s=[.1,-.22,.36]){let o=t==="L"?1:-1,r=_s(n,o*s[0],s[1],s[2]),a=_s(n,o*.02,.13,.39);return Ii(n,t,r.lerp(a,e),i)}function id(n,t=2.4,e=0){let i=((n+e)/t%1+1)%1;return i<.3?.5-.5*Math.cos(i/.3*Math.PI):i<.45?1:i<.75?.5+.5*Math.cos((i-.45)/.3*Math.PI):0}function bs(n,t,e,i=["L","R"]){let s=t;for(let o of i){n.pose(s),n.root.updateMatrixWorld(!0);let r=pa(n,o);if(r.y<e+.02){let a=r.clone();a.y=e+.03,s=Ii(n,o,a,s)}}return s}var K0={x:-.62,z:.25,ry:-Math.PI/2,h:.46};function Dt(n,t={}){let e=Gf(n,t),i=Be();return n.add(i),e.tel=i,e}function Sn(n){return Qt(n,K0.x,K0.z,K0.ry,K0.h),n}function Qe(n,t,e="L"){Yt(n,t,e,[0,-.07,.06],!1),t.headG.updateMatrixWorld(!0);let i=t.headG.localToWorld(new _(0,.2,.25));n.up.set(0,1,0),n.lookAt(i)}function fi(n,t=1,e=0){let i=n.caderno.userData.D,s="um"+Math.round(t*20)+"|"+Math.round(e*10);i.paint(s,(o,r,a)=>{wr(o,r,a,()=>{o.save(),o.beginPath(),o.rect(0,0,r*(.15+.3*t),a),o.clip(),e>0&&(o.shadowColor="#FFF2A0",o.shadowBlur=30*e),kf(o,"1",r*.22,a*.2,90,"#2A3A7A"),o.restore(),o.font="600 34px Caveat",o.fillStyle="#2A3A7A",o.fillText("Li\xE7\xE3o de matem\xE1tica",r*.15,a*.07)})})}function sd(n,t=1){let e=n.caderno.userData.D,i=Math.round(t*30),s="q"+i;e.paint(s,(o,r,a)=>{wr(o,r,a,()=>{o.font="600 30px Caveat",o.fillStyle="#2A3A7A";for(let l=0;l<i;l++){let c=l%2,h=Math.floor(l/2);o.fillText(`${l+1}) ${l*7%13+2}x = ${(l*7%13+2)*3}  \u2713`,r*(.15+c*.42),a*(.1+h*.058))}})})}function wo(n=.16){let t=new J;t.add(ct(n,n,.04,"#F4F1EA",0,0,0,{rot:[Math.PI/2,0,0],seg:28,out:.005})),t.add(Me(new nn(n,.015,8,28),"#2A2A30"));for(let s=0;s<12;s++){let o=s/12*6.283;t.add(tt(.01,s%3?.016:.03,.01,"#2A2A30",Math.sin(o)*n*.82,Math.cos(o)*n*.82,.025))}let e=new J,i=new J;return e.add(tt(.014,n*.55,.008,"#1E1E22",0,n*.25,0)),i.add(tt(.009,n*.8,.008,"#1E1E22",0,n*.38,0)),e.position.z=.028,i.position.z=.032,t.add(e,i),t.add(ae(.01,"#C0392B",0,0,.036,{seg:8})),t.hora=(s,o)=>{i.rotation.z=-o/60*6.283,e.rotation.z=-(s%12+o/60)/12*6.283},t.hora(7,0),t}function od(n,t="#E2443A"){let e=new J,i=new it(new bt(.32,.38,4,6),new pe({color:t,side:Ze}));i.position.set(0,-.18,0),e.add(i),e.position.set(0,.3,-.13),n.torsoG.add(e);let s=i.geometry.attributes.position,o=s.array.slice();return e.vento=(r,a=1)=>{for(let l=0;l<s.count;l++){let c=o[l*3+1],h=o[l*3],d=(.19-c)/.38;s.array[l*3+2]=o[l*3+2]-d*d*.35*a+Math.sin(r*12+h*9+c*6)*.025*d*a}s.needsUpdate=!0,e.rotation.x=-.15*a},e}function tp(){let n=Gt(128,128,e=>{for(let i=0;i<10;i++){let s=i/10*6.283;e.fillStyle=`rgba(255,255,255,${.15+i/10*.85})`,e.beginPath(),e.arc(64+Math.cos(s)*44,64+Math.sin(s)*44,10,0,7),e.fill()}}),t=new ci(new ti({map:n,transparent:!0,depthWrite:!1}));return t.scale.setScalar(.22),t.renderOrder=10,t}var on=(n,t=1)=>pt(mt({shL:[64,4],elL:76,shR:[40,12],elR:70,lean:4,headX:26},kn(n,t,.4)));var Co={tint:"#FFF8EC",bloom:.2},i5={tint:"#C8D4FF",exposure:.8},Q0=n=>(Gs(n,.95,.43,-.02),n.root.position.y=.43+.2,n),ep=[B(35.96,39.12,{bg:"#DDE6EE",fov:38,limpa:!1},n=>{let t=Dt(n,{hora:"tarde"}),e=V(n,Et,0,0,0);return Q0(e),(i,s,o)=>(e.pose({shR:[100,8],elR:35,shL:[-10,18],elL:8,headX:8}),I(e,null,i,"tedio",{look:[0,-.6]}),Yt(t.tel,e,"R",[0,-.06,.05],!1),e.headG.updateMatrixWorld(!0),t.tel.up.set(0,1,0),t.tel.lookAt(e.headG.localToWorld(new _(0,.2,.25))),t.tel.tela("foto",i*.7%1),P(o,[[0,[-.4,2.2,.9]],[1,[-.15,1.9,.6]]],[.95,.55,-.4],s/3.16,0,0),Co)}),B(39.12,42.88,{bg:"#F4F4F0",fov:36},n=>{let t=X0(n),e=V(n,An,-.05,-.56,0),i=V(n,xi(4),1.6,1.05,Math.PI+.3),s=ct(.06,.06,.12,"#3E7CC8",0,0,0,{out:.004});return n.add(s),(o,r,a)=>{let l=o*1.25%1,c=t.prods[Math.floor(o*1.25)%5];return e.pose({shR:[55+Math.sin(l*6.28)*10,30-l*40],elR:60,shL:[30,10],elL:70,lean:6,headX:10,twist:Math.sin(l*6.28)*10}),I(e,null,o,"neutro",{look:[.3,.4]}),Yt(s,e,"R",[0,-.06,.05]),t.laser.material.opacity=l>.45&&l<.6?.9:.3,t.telaM.paint(String(Math.floor(o*1.25)),(h,d,u)=>{h.fillStyle="#1E3A5A",h.fillRect(0,0,d,u),h.fillStyle="#9FE8B0",h.font="700 40px 'IBM Plex Mono'",h.fillText("R$ "+(12.5+Math.floor(o*1.25)*4.9).toFixed(2),20,u/2)}),i.pose(ve(o,3)),I(i,null,o,"neutro",{look:[-.3,.2]}),P(a,[[0,[1.3,1.45,2]],[1,[.9,1.35,1.6]]],[0,1,-.1],r/3.76),{}}}),B(42.88,46.44,{bg:"#E8D8B8",fov:40},n=>{let t=Sr(n),e=V(n,Se,0,0,0),i=od(e,"#E2443A");return(s,o,r)=>{let a=(s-42.88)*1.6,l=.2+Math.cos(a)*.95,c=.35+Math.sin(a)*.7;return e.place(l,c,0,Math.atan2(-Math.sin(a),Math.cos(a))),e.pose(mt(cn(s,3.2,1),{shR:[150,20],elR:10})),i.vento(s,1),I(e,null,s,"feliz",{mouth:{open:.5,smile:.9}}),P(r,[[0,[.2,1.6,1.45]],[1,[.25,1.5,1.35]]],[l*.5+.1,.45,c*.5+.1],o/3.56),Co}}),B(46.44,49.72,{bg:"#E8D8B8",fov:62},n=>{let t=Sr(n),e=V(n,Se,.55,.9,-2.5),i=od(e,"#E2443A"),s=V(n,Et,-.3,-1,0);Qt(s,-.4,-.9,0,.64);let o=Be();n.add(o);let r=Ri("coracao",.22);return n.add(r),(a,l,c)=>{e.pose(mt(ve(a,2),{shL:[40,10],elL:90,shR:[40,10],elR:90,headX:-8,bob:Math.abs(Math.sin(a*6))*.02})),i.vento(a,.2),I(e,null,a,"apaixonado",{look:[-.5,-.2]}),s.pose(on(a)),bs(s,on(a),.64),I(s,null,a,"tedio",{look:[0,.6]}),Yt(o,s,"R",[0,-.07,.04],[-1.35,0,0]),o.tela("chat",.5);let h=et((a-47.4)/.5);r.visible=a>47.4,e.headG.updateMatrixWorld(!0);let d=e.headG.localToWorld(new _(.15,.55,0));return r.position.copy(d),r.position.y+=h*.15,r.scale.setScalar(.22*(h<1?fn(h)*1.2:1+Math.sin(a*9)*.08)),P(c,[[0,[1.72,1.5,.02]],[1,[1.66,1.45,-.04]]],[.05,.75,-.12],l/3.28),Co}}),B(49.72,53.24,{bg:"#DDE6EE",fov:46},n=>{let t=Dt(n,{hora:"tarde"}),e=V(n,Et,0,0,0);Sn(e);let i=wo();return i.position.set(.3,2,1.47),i.rotation.y=Math.PI,n.add(i),(s,o,r)=>{let a=br(s,[[49.7,0],[50.3,0],[50.6,1],[51.4,1],[51.7,-1],[52.4,-1],[52.7,.4]]);return e.pose(pt({shR:[50,6],elR:84,shL:[44,6],elL:80,lean:8,headX:6,headY:a*55})),I(e,null,s,"neutro",{look:[a*.6,0]}),Qe(t.tel,e,"L"),t.tel.tela("apagada"),fi(t,0),t.telaTV.paint("tv"+Math.floor(s*3),(l,c,h)=>{l.fillStyle=["#3E7CC8","#F2C230","#E2443A"][Math.floor(s*3)%3],l.fillRect(0,0,c,h),l.fillStyle="#FFF",l.beginPath(),l.arc(c*(.3+s%1*.4),h/2,30,0,7),l.fill()}),P(r,[[0,[-.9,1.55,1.35]],[1,[-.95,1.5,1.2]]],[-.75,1,.15],o/3.52),Co}}),B(53.24,56.04,{bg:"#DDE6EE",fov:46},n=>{let t=Dt(n,{hora:"tarde"}),e=V(n,Et,0,0,0);return Sn(e),(i,s,o)=>{let r=Math.sin((i-53.24)*4.2);return e.pose(pt({shR:[50,6],elR:84,shL:[44,6],elL:80,lean:8,headX:6,headY:r*50})),I(e,null,i,"preocupado",{look:[r*.8,0]}),fi(t,0),P(o,[[0,[-1.38,1.55,-1.38]],[1,[-1.3,1.5,-1.25]]],[-.7,1.1,.25],s/2.8),Co}}),B(56.04,60.16,{bg:"#DDE6EE",fov:46,limpa:!1,perto:!0},n=>{let t=Dt(n,{hora:"tarde"}),e=V(n,Et,0,0,0);Sn(e);let i=ct(.006,.006,.14,"#2E5EC8",0,0,0,{out:.002});return n.add(i),t.tel.position.set(-1.02,.79,-.12),t.tel.rotation.set(-Math.PI/2,0,-Math.PI/2),(s,o,r)=>{e.pose(pt(mt({shR:[58,4],elR:92,shL:[44,6],elL:84,lean:14,headX:26},s>59&&s<60?{shR:[58+Math.sin(s*20)*3,4]}:{}))),I(e,null,s,"neutro",{look:[0,.7]}),Yt(i,e,"R",[0,-.05,.04],[.6,0,0]),fi(t,et((s-59.1)/.9));let a=s>60;return t.tel.tela(a?"bloqueio":"apagada",0),P(r,[[0,[-1.05,1.22,1.45]],[1,[-1.02,1.16,1.3]]],[-.88,.88,.1],o/4.12,0,0),Co}}),B(60.16,66.84,{bg:"#DDE6EE",fov:46,limpa:!1},n=>{let t=Dt(n,{hora:"tarde"}),e=V(n,Et,0,0,0);return Sn(e),fi(t,1),(i,s,o)=>{let r=et((i-62.2)/.6);if(e.pose(pt(mt({shR:[$(40,66,r),6],elR:$(80,108,r),shL:[44,6],elL:84,lean:10,headX:24},kn(i,1,.2)))),I(e,null,i,"neutro",{look:[0,.6]}),i<62.2)t.tel.position.set(-1.02,.79,-.12),t.tel.rotation.set(-Math.PI/2,0,-Math.PI/2),t.tel.tela("bloqueio");else{Qe(t.tel,e);let l=i<63.7?["bloqueio",0]:i<65.1?["chat",(i-63.7)/1.4]:i<66?["foto",(i-65.1)/.9]:["tapete",0];t.tel.tela(l[0],l[1])}let a=t.tel.position;if(i<62.6)P(o,[[0,[-1.08,1.24,1.62]],[1,[-1.05,1.2,1.45]]],[-.88,.9,.1],(i-60.16)/2.44,0,0);else{e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let l=e.headG.localToWorld(new _(0,.3,.05));P(o,[l.x,l.y,l.z],[a.x,a.y,a.z],(i-62.6)/4.2,0,0)}return{...Co,focus:.45,range:.25,blur:6}}}),B(66.84,71.64,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,Et,0,0,0);Sn(e),fi(t,1);let i=wo();i.position.set(-.5,2,-1.47),n.add(i);let s=new an("#9FD8FF",.6,1.2,2);return n.add(s),(o,r,a)=>{e.pose(on(o)),I(e,null,o,"tedio",{look:[0,.55],blink:0}),Qe(t.tel,e),t.tel.tela("tapete",(o-66.84)/4.8),s.position.copy(t.tel.position),s.position.x+=.12;let l=et((o-66.9)/1.4)*40;return i.hora(19,20+l),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8,o<68?P(a,[-.6,1.95,-.6],[-.5,2,-1.47],(o-66.84)/1.16,0,0):P(a,[[0,[-1.4,1.5,-1.38]],[1,[-1.32,1.45,-1.22]]],[-.66,1.12,.25],(o-68)/3.64,0,0),{tint:"#D8E2FF",exposure:.9}}}),B(71.64,73.72,{bg:"#C8C0B8",fov:46,limpa:!1,perto:!0},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,Et,0,0,0);return Sn(e),fi(t,1),t.luzAbaj.intensity=.8,t.luzes.LG.intensity=1.5,(i,s,o)=>{e.pose(on(i));let r=fn(et((i-71.7)/.5));return P(o,[$(-.98,-1.05,r),$(1.3,1.02,r),$(.45,.32,r)],[-1.08,.79,.3],s/2.08,0,0),{tint:"#E8E2FF",vig:.55,exposure:.85}}}),B(73.72,82.44,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,Et,0,0,0);return Sn(e),fi(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8,(i,s,o)=>{e.pose(on(i)),I(e,null,i,"tedio",{look:[0,.55]}),Qe(t.tel,e),t.tel.tela("tapete",.5+i*.2%.5);let r=$(.3,1,s/8.72);return P(o,[-.62+Math.cos(r)*1.6,1.5,.25+Math.sin(r)*1.6],[-.62,1,.25],s/8.72,0,0),{tint:"#D0D8F0",exposure:.7,focus:.5,range:.2,blur:16}}}),B(82.44,85.48,{bg:"#B8D0DC",fov:46,limpa:!1},n=>{pn(n,{r:5,pos:[3,6,3],ki:.9,hemi:1.2,key:"#E8E8FF"}),n.add(new Ce("#C8D0F0",.4));let t=new pe({color:"#9AB4C4"}),e=new pe({color:"#8A5E3A"}),i=(l,c,h,d,u,f,g,E)=>{let m=new it(new bt(l,c),h);m.position.set(d,u,f),m.rotation.set(g,E,0),n.add(m)};i(6,6,e,0,0,0,-Math.PI/2,0);for(let[l,c,h,d]of[[4,.95,.475,0],[4,1.6,2.5,0],[1.6,.8,1.3,-1.15],[1.6,.8,1.3,.95]])i(l,c,t,-1.5,h,d,0,Math.PI/2);i(4,3.3,t,-3.6,1.6,0,0,Math.PI/2),i(4,3.3,t,1.5,1.6,0,0,-Math.PI/2),i(3,3.3,t,0,1.6,-2,0,0),i(3,3.3,t,-2.5,1.6,-2,0,0),i(3,3.3,t,-2.5,1.6,2,0,Math.PI);let s=new J;s.position.set(-1.49,1.3,-.1),s.rotation.y=Math.PI/2,n.add(s);for(let[l,c,h,d]of[[.74,.06,0,.42],[.74,.06,0,-.42],[.06,.9,-.35,0],[.06,.9,.35,0]])s.add(at(l,c,.05,"#7A5236",h,d,0,{out:.004}));let o=V(n,Et,-.95,-.1,-Math.PI/2),r=V(n,Et,-2.05,-.1,Math.PI/2),a=Be();return n.add(a),(l,c,h)=>(o.pose(ve(l,1)),I(o,null,l,l>83.6?"surpreso":"neutro",{look:[0,0]}),r.pose({shR:[62,6],elR:100,shL:[50,14],elL:92,headX:22}),I(r,null,l,"tedio",{look:[0,.6]}),Yt(a,r,"R",[0,-.07,.04],[-1.35,0,0]),a.tela("tapete",l*.3%1),P(h,[[0,[.4,1.5,1.05]],[1,[.25,1.48,.95]]],[-1.6,1.22,-.1],c/3.04,0,0),i5)}),B(85.48,87.32,{bg:"#C8C0B8",fov:46},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,Et,0,0,0);Sn(e),fi(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8;let i=V(n,So,0,0,0),s=tn();return n.add(s),s.scale.setScalar(.6),t.portaD.abre(1),(o,r,a)=>{e.pose(on(o)),I(e,null,o,"tedio",{look:[0,.55]}),Qe(t.tel,e),t.tel.tela("tapete",.7);let l=et((o-85.48)/1),c=$(1.5,-.5,fn(l)),h=$(.85,.8,l);return i.place(c,h,0,l<1?-Math.PI/2:Math.PI),i.pose(l<1?mt($e(o,{f:2.2}),{shL:[70,-10],elL:80}):{shR:[70,20],elR:30,shL:[60,-12],elL:80,lean:6}),Kt(i,"davi",o,"feliz",l<1?$e(o,{f:2.2}):{shR:[80+Math.sin(o*14)*6,20],elR:30,shL:[60,-12],elL:80}),Yt(s,i,"L",[0,-.05,.04],[-.3,0,0]),s.set(0),P(a,[[0,[.7,1.5,1.35]],[1,[.6,1.45,1.3]]],[-.45,.95,.55],r/1.84),{tint:"#E8E2F8"}}}),B(87.32,88.52,{bg:"#C8C0B8",fov:64,limpa:!1},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,Et,0,0,0);Sn(e);let i=new an("#9FD8FF",0,1,2);return n.add(i),(s,o,r)=>(e.pose(on(s)),Kt(e,"gui",s,"tedio",on(s),.2,{look:[0,.6]}),e.pose(on(s)),Qe(t.tel,e),t.tel.tela("tapete",.75),i.position.copy(t.tel.position),P(r,[[0,[-1.3,1.34,-.72]],[1,[-1.24,1.32,-.64]]],[-.66,1.1,.25],o/1.2,0,0),{tint:"#D8E2FF",exposure:.85})}),B(88.52,90.24,{bg:"#C8C0B8",fov:46},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,So,-.5,.8,Math.PI),i=tn();return n.add(i),i.scale.setScalar(.6),(s,o,r)=>{Kt(e,"davi",s,"feliz",{shL:[62,-14],elL:70,shR:[62,-14],elR:70,headX:12},.3),e.root.updateMatrixWorld(!0);let a=e.hands.L.localToWorld(new _(0,-.05,.03)),l=e.hands.R.localToWorld(new _(0,-.05,.03));return i.position.copy(a).add(l).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.rotateX(-.4),i.set(et((s-89.1)/1.6)*.3),P(r,[[0,[.3,1.08,.3]],[1,[.2,1.02,.38]]],[i.position.x,i.position.y,i.position.z],o/1.72,0,0),{tint:"#E8E2F8"}}}),B(90.24,92.04,{bg:"#C8C0B8",fov:46},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,Et,0,0,0);Sn(e),fi(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8;let i=V(n,So,-.5,.8,Math.PI),s=tn();return n.add(s),s.scale.setScalar(.6),(o,r,a)=>{let l=Math.max(0,Math.sin((o-90.4)*9))*(o>90.4&&o<91.4?1:0),c=pt({shR:[62,6],elR:100,shL:[70+l*20,40+l*20],elL:20+l*40,lean:8,headX:22});Kt(e,"gui",o,"bravo",c,0,{look:[0,.6]}),e.pose(c),Qe(t.tel,e),t.tel.tela("tapete",.8),i.pose({shL:[62,-14],elL:70,shR:[62,-14],elR:70,headX:4,lean:-4}),I(i,null,o,o>91?"triste":"surpreso",{look:[-.6,-.1]}),i.root.updateMatrixWorld(!0);let h=i.hands.L.localToWorld(new _(0,-.05,.03)),d=i.hands.R.localToWorld(new _(0,-.05,.03));return s.position.copy(h).add(d).multiplyScalar(.5),s.quaternion.copy(i.root.quaternion),s.rotateX(-.4),s.set(.3*(1-et((o-91.2)/.6))),P(a,[[0,[.7,1.5,1.35]],[1,[.6,1.45,1.3]]],[-.45,.95,.55],r/1.8),{tint:"#E8E2F8"}}}),B(92.04,98.04,{bg:"#C8C0B8",fov:46},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,Et,0,0,0);Sn(e),fi(t,1),t.luzAbaj.intensity=1.2,t.luzes.LG.intensity=1.8;let i=V(n,So,.3,.2,-Math.PI/2-.6),s=tn();return n.add(s),s.scale.setScalar(.6),(o,r,a)=>{e.pose(on(o)),I(e,null,o,"tedio",{look:[0,.55]}),Qe(t.tel,e),t.tel.tela("tapete",.9),i.pose(mt({shL:[30,-40],elL:120,shR:[30,-40],elR:120,headX:8},Cn(o,3,.5))),I(i,null,o,"triste",{look:[-.7,0]}),i.root.updateMatrixWorld(!0);let l=i.hands.L.localToWorld(new _(0,-.04,.04)),c=i.hands.R.localToWorld(new _(0,-.04,.04));return s.position.copy(l).add(c).multiplyScalar(.5),s.quaternion.copy(i.root.quaternion),s.set(0),P(a,[[0,[.55,1.15,-1.2]],[1,[.45,1.1,-1.05]]],[.1,.75,.25],r/6,0,.6),{tint:"#E0DCF4"}}}),B(98.04,101.4,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,So,0,0,0),i=tn();return n.add(i),i.scale.setScalar(.6),(s,o,r)=>{let a=et((s-98.2)/2.4),l=et(a/.3),c=et((a-.3)/.7),h=$(.3,1.95,c),d=$(.2,.85,l);e.place(h,d,0,a<.3?0:Math.PI/2),e.pose(a<1?mt($e(s,{f:1.4,amp:.5}),{shL:[30,-40],elL:120,shR:[30,-40],elR:120}):ve(s,2)),I(e,null,s,"triste",{look:[0,.4]}),e.root.updateMatrixWorld(!0);let u=e.hands.L.localToWorld(new _(0,-.04,.04)),f=e.hands.R.localToWorld(new _(0,-.04,.04));return i.position.copy(u).add(f).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.set(0),t.portaD.abre(1-et((s-100.65)/.7)),s<99.7?P(r,[[0,[-.35,.32,1.35]],[1,[.25,.3,1.38]]],[h,.14,d],o/2.2,0,0):P(r,[[0,[-.4,1.15,1.4]],[1,[-.2,1.1,1.4]]],[1.5,.8,.85],(s-99.7)/1.7,0,0),{tint:"#E0DCF4"}}}),B(101.4,103.48,{bg:"#2A2A34",fov:30,limpa:!1,perto:!0},n=>{Dt(n,{hora:"noite"}).portaD.abre(0);let e=V(n,So,2.3,.6,-2.2),i=tn();n.add(i),i.scale.setScalar(1);let s=Vt([i]);return(o,r,a)=>{e.pose({shL:[30,-40],elL:120,shR:[30,-40],elR:120,headX:14}),I(e,null,101.4,"triste",{look:[0,.5],vivo:!1}),e.root.updateMatrixWorld(!0);let l=e.hands.L.localToWorld(new _(0,-.04,.04)),c=e.hands.R.localToWorld(new _(0,-.04,.04));i.position.copy(l).add(c).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.set(0),Bt.mundo.value=.9,s(1,o),qt(n,"#2A2A34",.9);let h=gs(e.root,.75-r*.05,.5);return P(a,h,[i.position.x,i.position.y,i.position.z],r/2.08,0,0),{vig:.5}}}),B(103.48,105.84,{bg:"#E8E0D0",fov:46},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,An,-3.9,-.6,Math.PI),i=ct(.01,.01,.25,"#9A6236",0,0,0);n.add(i);let s=Tn(n,[-4.12,1.08,-1.2],{n:20,cor:"#F4F4F4",r:.25,g:.3,sobe:1.2,tam:.05});return(o,r,a)=>{let l=Xt(103.6,104.1,o);e.root.rotation.y=$(Math.PI,Math.PI*.35,l);let c=mt({shR:[55-l*20,10],elR:70+Math.sin(o*7)*15*(1-l),shL:[20,10],elL:40});return Kt(e,"mae",o,"bravo",c,.6),e.pose(c),Yt(i,e,"R",[0,-.08,.04]),s(o*.5%1),P(a,[[0,[-2.2,1.45,1.1]],[1,[-2.4,1.4,.95]]],[-3.8,1.15,-.8],r/2.36),{tint:"#FFF0DC"}}}),B(105.84,106.88,{bg:"#E8E0D0",fov:46},n=>{let t=Dt(n,{hora:"noite"});t.portaK.abre(1);let e=V(n,Et,-1.75,.85,-Math.PI/2);return(i,s,o)=>{let r={shR:[62,6],elR:100,shL:[20,8],elL:30,headX:14+Math.sin(i*9)*8};return Kt(e,"gui",i,"tedio",r,0,{look:[0,.5]}),e.pose(r),Qe(t.tel,e),t.tel.tela("tapete",.9),P(o,[[0,[-3.3,1.35,.6]],[1,[-3.15,1.33,.65]]],[-1.75,1.2,.85],s/1.04),{tint:"#FFF0DC"}}}),B(106.88,108.28,{bg:"#E8E0D0",fov:46},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,An,-3.6,-.6,Math.PI*.35),i=ct(.01,.01,.25,"#9A6236",0,0,0);return n.add(i),(s,o,r)=>{Kt(e,"mae",s,"desconfiado",oe.bracoCruzado,0),e.pose(oe.bracoCruzado),Yt(i,e,"R",[0,-.06,.04]);let a=fn(et((s-107.2)/.3));return P(r,[$(-2.4,-3,a),$(1.3,1.25,a),$(.6,-.05,a)],[-3.6,1.18,-.6],o/1.4,0,0),{tint:"#FFF0DC"}}}),B(108.28,110.56,{bg:"#E8E0D0",fov:46,limpa:!1},n=>{let t=Dt(n,{hora:"noite"});t.portaK.abre(1);let e=V(n,Et,-1.75,.85,-Math.PI/2),i=tp();return n.add(i),(s,o,r)=>{let a={shR:[62,6],elR:100,shL:[20,8],elL:30,headX:4};Kt(e,"gui",s,"preocupado",a,0,{look:[Math.sin(s*7)*.8,-.3]}),e.pose(a),Qe(t.tel,e),t.tel.tela("apagada"),e.headG.updateMatrixWorld(!0);let l=e.headG.localToWorld(new _(0,.75,0));return i.position.copy(l),i.material.rotation=-s*6,P(r,[[0,[-2.75,1.3,.95]],[1,[-2.6,1.28,.92]]],[-1.75,1.25,.85],o/2.28,0,0),{tint:"#FFF0DC"}}}),B(110.56,114.32,{bg:"#E8E0D0",fov:46},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,An,-3.6,-.42,Math.PI*.7),i=ct(.01,.01,.25,"#9A6236",0,0,0);return n.add(i),(s,o,r)=>{let a=s<112.3?oe.apontar:{shR:[40,20],elR:60,shL:[70,10],elL:20+Math.abs(Math.sin(s*6))*20,headX:4};Kt(e,"mae",s,"preocupado",a,.3),e.pose(a),Yt(i,e,"R",[0,-.06,.04]);let l=.35+Math.abs(Math.sin(s*13))*.25*(Math.sin(s*3)>-.2?1:.1);return t.chama.forEach(c=>{c.scale.set(1,l,1),c.material.opacity=.4+l}),s<112.3?P(r,[[0,[-3,1.3,.35]],[1,[-3.4,1.15,-.5]]],[[0,[-3.6,1.1,-.6]],[1,[-4,.95,-1.2]]],(s-110.56)/1.74,0,0):P(r,[-2.6,1.35,-.85],[-3.6,1.1,-.42],(s-112.3)/2,0,0),{tint:"#FFF0DC"}}}),B(114.32,116.8,{bg:"#E8E0D0",fov:46},n=>{let t=Dt(n,{hora:"tarde"}),e=V(n,An,-2.1,.2,-Math.PI/2+.3),i=V(n,Et,0,0,0);return Sn(i),t.portaK.abre(1),t.PK.frente.visible=t.PG.frente.visible=!1,(s,o,r)=>{let a=Math.min(2,Math.floor((s-114.32)/.83)),l=s-114.32-a*.83;return e.place([-2.1,-1.9,-2.3][a],[.2,-.3,.7][a],0,-Math.PI/2+.3),e.pose(mt(oe.apontar,{shR:[80+Math.sin(l*12)*10,6]})),I(e,null,s,"bravo",{mouth:{open:Math.abs(Math.sin(l*14))*.6}}),i.pose(on(s)),I(i,null,s,"tedio",{look:[0,.6]}),Qe(t.tel,i),t.tel.tela("tapete",l),P(r,[[0,[-1,1.7,3.2]],[1,[-1,1.65,3]]],[-1.1,1,.2],o/2.48,0,0),{sat:.35,tint:"#F4DDB8",vig:.55}}}),B(116.8,122.16,{bg:"#0A0C18",fov:46},n=>{let t=Dt(n,{hora:"noite"});t.luzes.sol.intensity=14,t.luzes.sol.target.position.set(-1.1,.78,.25);let e=V(n,Et,0,0,0);return Q0(e),e.root.rotation.z=-.5,t.tel.visible=!1,(i,s,o)=>(e.pose({shR:[20,10],elR:40,shL:[20,10],elL:40,headY:-30}),I(e,null,i,"preocupado",{look:[-.8,0]}),fi(t,1,.4+Math.sin(i*2)*.2),i<119.8?P(o,[[0,[-.3,1.5,1]],[1,[-.6,1.25,.7]]],[-1.1,.8,.25],(i-116.8)/3,0,0):P(o,[[0,[.2,1.7,1.2]],[1,[.3,1.6,1]]],[.9,.7,-.3],(i-119.8)/2.36,0,0),{tint:"#B8C8FF",exposure:.75,vig:.5})}),B(122.16,127.04,{bg:"#0A0C18",fov:46,limpa:!1},n=>{let t=Dt(n,{hora:"noite"});t.luzes.sol.intensity=10;let e=V(n,Et,0,0,0);return Q0(e),t.tel.visible=!1,(i,s,o)=>{e.pose({shR:[10,10],elR:30,shL:[10,10],elL:30});let r=i>122.3&&i<126.6?Math.abs(Math.sin(i*11))*.25:0;I(e,null,i,"preocupado",{look:[0,-.2],mouth:{open:r}}),e.headG.updateMatrixWorld(!0);let a=e.headG.localToWorld(new _(0,.26,0));return P(o,[[0,[a.x+.05,a.y+1.25,a.z+.3]],[1,[a.x+.03,a.y+1.05,a.z+.22]]],[a.x,a.y,a.z],s/4.88,0,0),{tint:"#B8C8FF",exposure:.75,vig:.55}}}),B(127.04,128.96,{bg:"#020206",fov:46},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,Et,0,0,0);return Q0(e),t.tel.visible=!1,(i,s,o)=>{let r=i<127.9;return t.luzAbaj.intensity=r?3:0,t.luzes.sol.intensity=r?8:1.5,e.pose({shR:[10,10],elR:30,shL:[10,10],elL:30}),I(e,null,i,"sono",{blink:i>128.2?1:.5}),P(o,[[0,[-.2,1.8,1.3]],[1,[-.1,1.75,1.2]]],[.4,.6,-.2],s/1.92,0,0),{tint:"#B8C8FF",exposure:r?.8:.25,vig:.7}}})];function Ys(n,t=.25,e="#BFE8FF"){n._fant||(n._fant=[],n.root.traverse(i=>{if(!i.isMesh||i===n.sombra)return;let s=i.material,o=s.clone();o.transparent=!0,o.depthWrite=!1,o.color&&!i.userData.isOutline&&o.color.lerp(new wt(e),.35),i.material=o,n._fant.push({m:i,orig:s,nm:o})}));for(let{m:i,nm:s}of n._fant)s.opacity=i.userData.isOutline?t*.6:t,s.uniforms&&s.uniforms.op&&(s.uniforms.op.value=t*.6),i.visible=t>.01;return n.sombra.visible=t>.6,n}var Fo={tint:"#FFF8EC",bloom:.22},s5=n=>(Gs(n,.95,.43,-.02),n.root.position.y=.63,n);function ma(n){let t=Hf(n),e=V(n,Et,.3,-.3,Math.PI),i=G0("#3EA6FF");return n.add(i),i.scale.setScalar(1.6),{B:t,g:e,e:i}}var ga=(n,t,e=1)=>{jf(n.g,n.e,t,{shL:[6,10],elL:18,headX:-4+Math.sin(t*20*e)*1.5},e)};function o5(n){let t=Gt(256,256,i=>{if(i.strokeStyle="#8FF0FF",i.fillStyle="rgba(120,230,255,.25)",i.lineWidth=8,i.shadowColor="#8FF0FF",i.shadowBlur=16,i.lineJoin="round",n==="1789")i.font="900 96px Inter",i.textAlign="center",i.textBaseline="middle",i.fillStyle="#B8F8FF",i.fillText("1789",128,128);else if(n==="coroa")i.beginPath(),i.moveTo(40,180),i.lineTo(40,90),i.lineTo(85,130),i.lineTo(128,70),i.lineTo(171,130),i.lineTo(216,90),i.lineTo(216,180),i.closePath(),i.fill(),i.stroke();else if(n==="napoleao")i.beginPath(),i.arc(128,150,55,0,7),i.fill(),i.stroke(),i.beginPath(),i.moveTo(40,110),i.quadraticCurveTo(128,20,216,110),i.quadraticCurveTo(128,80,40,110),i.fill(),i.stroke(),i.beginPath(),i.arc(108,145,6,0,7),i.arc(148,145,6,0,7),i.stroke();else{i.beginPath(),i.rect(50,100,156,110),i.fill(),i.stroke();for(let s of[50,100,150])i.strokeRect(s,70,32,30);i.beginPath(),i.arc(128,210,26,Math.PI,0),i.stroke()}}),e=new ci(new ti({map:t,transparent:!0,depthWrite:!1,blending:ir}));return e.scale.setScalar(.32),e.renderOrder=12,e}var r5=n=>{n.strokeStyle="#F4F1EA",n.fillStyle="#F4F1EA",n.font="700 64px Caveat",n.fillText("Revolu\xE7\xE3o Francesa",60,80),n.font="600 46px Caveat",n.fillText("1789 \u2014 Queda da Bastilha",80,160),n.fillText("Liberdade, Igualdade, Fraternidade",80,225),n.fillText("Napole\xE3o Bonaparte",600,290)};function Zs(n,t={}){let e=Df(n,{giz:r5}),i=[];for(let a=0;a<4;a++)for(let l=0;l<5;l++){let c=-2.4+l*1.2,h=-1+a*1.3;if(a===1&&(l===2||l===3)||(a*5+l)%3===2)continue;let d=V(n,Gi(a*5+l),c,h,Math.PI);Qt(d,c,h,Math.PI,.46),d.seed=a*5+l,i.push(d)}let s=V(n,Et,0,.3,Math.PI);Qt(s,0,.3,Math.PI,.46);let o=V(n,oi,1.2,.3,Math.PI);Qt(o,1.2,.3,Math.PI,.46);let r=V(n,Xf,-.4,-2.9,0);return{A:e,L:i,g:s,ti:o,pr:r}}var Po=(n,t,e=1)=>n.L.forEach((i,s)=>{let o=e>0&&s%2===0;i.pose(pt(o?{lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120}:mt({shR:[40,8],elR:80,shL:[40,8],elL:80,lean:6},Cn(t,s,.5)))),I(i,null,t,o?"sono":"tedio",{blink:o?1:void 0})});function j0(n){let t=Vf(n),e=V(n,Et,1,-1.85,0);Qt(e,1,-1.85,0,.47);let i=V(n,oi,1.45,-.55,Math.PI);Qt(i,1.45,-.55,Math.PI,.47);let s=$h();s.scale.setScalar(1.8),n.add(s);let o=at(.06,.1,.04,"#F2994A",0,0,0,{out:.003});return n.add(o),{C:t,g:e,ti:i,cx:s,suco:o}}var np=(n,t=1)=>pt({shR:[30,8],elR:70,lean:6,headX:6}),tl=(n,t,e,i=np(t))=>{let s=nd(n.g,"L",e,i);return Yt(n.cx,n.g,"L",[0,-.04,.06],!1),n.cx.rotation.set(0,0,.5),{P:s,boca:e>.55&&e<.97?{open:.6}:e>=.97?{open:.15}:void 0}},ip=[B(128.96,131.6,{bg:"#DDE6EE",fov:46,limpa:!1},n=>{let t=Dt(n,{hora:"manha"}),e=V(n,Et,0,0,0);return s5(e),t.tel.visible=!1,(i,s,o)=>{let r=Xt(129.5,130.8,i);return e.root.rotation.x=$(-Math.PI/2,-.1,r),e.root.position.set(.95,$(.63,.45,r),$(.38,-.3,r)),e.pose(r>.5?pt({shL:[20,30],shR:[20,30],elL:30,elR:30}):{shR:[10,10],elR:30,shL:[10,10],elL:30}),I(e,null,i,(r>.3,"sono"),{blink:r<.2?1:.4}),P(o,[[0,[-1.2,1.7,1.4]],[1,[-1,1.6,1.25]]],[.9,.95,-.3],s/2.64),Fo}}),B(131.6,134.2,{bg:"#DDE6EE",fov:46},n=>{let t=ma(n);return(e,i,s)=>(ga(t,e),I(t.g,null,e,"sono",{blink:.4}),P(s,[[0,[1.05,1.5,-.98]],[1,[1,1.45,-.9]]],[.3,1.12,-.3],i/2.6),Fo)}),B(134.2,136.68,{bg:"#DDE6EE",fov:30,perto:!0,limpa:!1},n=>{let t=ma(n),e=Vt([t.e]);return(i,s,o)=>{ga(t,i,.35),I(t.g,null,i,"surpreso",{look:[0,.4]});let r=Xt(134.2,134.7,i);Bt.mundo.value=r,e(r,i),qt(n,"#DDE6EE",r);let a=t.e.getWorldPosition(new _);return P(o,[[0,[.85,1.32,-.95]],[1,[.8,1.3,-.88]]],[a.x,a.y,a.z],s/2.48,0,0),{focus:.35,range:.12,blur:14}}}),B(136.68,138.44,{bg:"#DDE6EE",fov:28,perto:!0,limpa:!1},n=>{let t=ma(n),e=Vt([t.e]),i=[0,0,0],s=Tn(n,i,{n:30,cor:"#FFFFFF",r:.18,tam:.03});return(o,r,a)=>{ga(t,o,.2),I(t.g,null,o,"surpreso",{look:[0,.4]}),Bt.mundo.value=1,e(1,o),qt(n,"#DDE6EE",1),t.g.headG.updateMatrixWorld(!0);let l=t.g.headG.localToWorld(new _(0,.12,.3));return i[0]=l.x,i[1]=l.y,i[2]=l.z,s((o-136.68)/1.2%1),P(a,[[0,[.85,1.3,-.92]],[1,[.82,1.28,-.86]]],[l.x,l.y,l.z],r/1.76,0,0),{focus:.4,range:.15,blur:12}}}),B(138.44,142.2,{bg:"#DDE6EE",fov:44,limpa:!1},n=>{let t=ma(n),e=Vt([t.e,t.g.headG]),i=Tn(n,[.3,1.18,-.62],{n:70,cor:"#7AF0B0",r:.55,tam:.03});return(s,o,r)=>(ga(t,s,.3),I(t.g,null,s,s>139.4?"surpreso":"neutro",{look:[0,0]}),Bt.mundo.value=1,e(1,s),qt(n,"#DDE6EE",1),i(et((s-139.3)/1.8)),P(r,[[0,[1.05,1.45,-1]],[1,[1,1.4,-.92]]],[.3,1.15,-.35],o/3.76,0,0),{focus:.7,range:.3,blur:10})}),B(142.2,147.04,{bg:"#DDE6EE",fov:40},n=>{let t=ma(n),e=Vt([t.e]);return(i,s,o)=>{let r=i>145.3;r?(t.g.pose({shR:[70,-10],elR:90,shL:[10,10],elL:20,headX:14}),Yt(t.e,t.g,"R",[0,-.04,.04],[Math.PI/2,0,0])):ga(t,i),I(t.g,null,i,r?"medo":"neutro",{look:r?[.3,.6]:[0,0]});let a=1-Xt(145.1,145.5,i);return Bt.mundo.value=a,e(a,i),qt(n,"#DDE6EE",a),P(o,[[0,[1.05,1.5,-.98]],[1,[1,1.45,-.9]]],[.3,1.12,-.3],s/4.84),Fo}}),B(147.04,152.4,{bg:"#F4E8D0",fov:36,limpa:!1},n=>{let t=Dt(n,{hora:"manha"});t.tel.visible=!1;let e=V(n,Et,0,0,0);Qt(e,-2.42,.45,-Math.PI/2,.46);let i=ha();i.scale.setScalar(1.6),i.position.set(-2.78,.79,.45),i.rotation.y=Math.PI/2,n.add(i);let s=Of();s.scale.setScalar(1.6),n.add(s);let o=Vt([i,s]);return(r,a,l)=>{let c=et((r-148)/3.6);e.pose(pt({shR:[55,8],elR:70,shL:[45,-10],elL:80,lean:8,headX:16})),I(e,null,r,"determinado",{look:[0,.7]}),i.userData.passa(c),s.position.set(-2.78,.87,.45+$(.1,-.1,c)),s.rotation.set(0,Math.PI/2,-.15);let h=Xt(147.2,147.8,r);return Bt.mundo.value=h,o(h,r),qt(n,"#F4E8D0",h),P(l,[[0,[-3.35,1.05,.8]],[1,[-3.2,.98,.66]]],[-2.78,.86,.45],a/5.36,0,0),{...Fo,focus:.65,range:.25,blur:10}}}),B(152.4,154.2,{bg:"#F4E8D0",fov:26,perto:!0,limpa:!1},n=>{let t=Dt(n,{hora:"manha"});t.tel.visible=!1;let e=ha();e.scale.setScalar(1.6),e.position.set(-2.78,.79,.45),e.rotation.y=Math.PI/2,n.add(e),e.userData.passa(1);let i=Vt([e]),s=Ri("\u2726",.12);return n.add(s),s.material.color.set("#FFFFFF"),(o,r,a)=>{Bt.mundo.value=1,i(1,o),qt(n,"#F4E8D0",1);let l=et((o-153.1)/.5);return s.visible=l>0&&l<1,s.position.set(-2.76,.9,.4),s.scale.setScalar(.12*Math.sin(l*Math.PI)+.001),s.material.rotation=l*2,P(a,[[0,[-2.55,1.05,.78]],[1,[-2.6,.98,.68]]],[-2.78,.86,.45],r/1.8,0,0),{bloom:.5,bloomT:.8,focus:.35,range:.12,blur:10}}}),B(154.2,156.76,{bg:"#F4E8D0",fov:40},n=>{let t=Dt(n,{hora:"manha"});t.tel.visible=!1;let e=V(n,An,-3.55,0,Math.PI/2+.3),i=V(n,Se,-3,-.17,0);Qt(i,-3,-.2,0,.5);let s=V(n,Et,0,0,0);Qt(s,-2.42,.45,-Math.PI/2,.46);let o=Vh();o.scale.setScalar(1.4),n.add(o);let r=ct(.008,.008,.2,"#C9CED6",0,0,0);n.add(r);let a=tn();a.scale.setScalar(.7),a.position.set(-3,.79,.15),a.rotation.x=-Math.PI/2,n.add(a);let l=ha();l.scale.setScalar(1.6),l.position.set(-2.78,.79,.45),l.rotation.y=Math.PI/2,n.add(l),l.userData.passa(1);let c=ae(.012,"#6A3A1A",0,0,0);return n.add(c),(h,d,u)=>{e.pose({shL:[50,-10],elL:80,shR:[70,10],elR:70,headX:10}),I(e,null,h,"surpreso",{look:[.6,.4]}),Yt(o,e,"L",[0,-.06,.06]),Yt(r,e,"R",[0,-.06,.05],[.4,0,0]);let f=r.position,g=(h-154.2)*1.4%1;return c.position.set(f.x,f.y-.1-g*.25,f.z),i.pose(pt(Cn(h,2,.4))),I(i,null,h,"feliz",{look:[.5,.3]}),s.pose(pt({shR:[55,8],elR:70,lean:10,headX:20})),I(s,null,h,"determinado",{look:[0,.7]}),a.set(0),P(u,[[0,[-2,1.4,1.35]],[1,[-2.15,1.35,1.2]]],[-3.2,1,0],d/2.56),Fo}}),B(156.76,158.44,{bg:"#F4E8D0",fov:40},n=>{let t=Dt(n,{hora:"manha"});t.tel.visible=!1;let e=V(n,An,-3.55,0,Math.PI/2+.3),i=Vh();return i.scale.setScalar(1.4),n.add(i),(s,o,r)=>(Kt(e,"mae",s,"desconfiado",{shL:[50,-10],elL:80},.5,{brow:1,look:[.6,.3]}),Yt(i,e,"L",[0,-.06,.06]),P(r,[[0,[-2.4,1.4,.9]],[1,[-2.6,1.35,.75]]],[-3.55,1.15,0],o/1.68),Fo)}),B(158.44,160.56,{bg:"#F4E8D0",fov:40},n=>{let t=Dt(n,{hora:"manha"});t.tel.visible=!1;let e=V(n,Et,0,0,0);Qt(e,-2.42,.45,-Math.PI/2,.46);let i=ha();return i.scale.setScalar(1.6),n.add(i),i.userData.passa(1),(s,o,r)=>{let a=s>159.8,l=pt(a?{lean:4}:mt(oe.ombros,{shR:[30,24],elR:70}));if(Kt(e,"gui",s,"neutro",l,.2),e.pose(l),a){let c=br(s,[[159.8,0],[160.2,1],[160.56,1]]);nd(e,"R",c,l,[.12,-.32,.4]),Yt(i,e,"R",[0,-.05,.06],!1),i.rotation.set(0,Math.PI/2,1.1),I(e,null,s,"neutro",{mouth:c>.55?{open:c>.97?.15:.6}:void 0})}else i.position.set(-2.78,.79,.45),i.rotation.set(0,Math.PI/2,0);return P(r,[[0,[-3.2,1.35,1.25]],[1,[-3.1,1.3,1.1]]],[-2.42,1.05,.45],o/2.12),Fo}}),B(160.56,164.92,{bg:"#F2E6C8",fov:44},n=>{let t=Zs(n),e=ae(.015,"#BFE8FF",0,0,0);return n.add(e),(i,s,o)=>{Po(t,i,1),Kt(t.pr,"n",i,"feliz",mt({shR:[80+Math.sin(i*2)*30,30],elR:40},Cn(i,3)),0,{mouth:{open:Math.abs(Math.sin(i*9))*.5}}),t.ti.pose(pt({lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120})),I(t.ti,null,i,"sono",{blink:1,mouth:{open:.3}}),t.ti.headG.updateMatrixWorld(!0);let r=t.ti.headG.localToWorld(new _(.05,.05,.28));return e.position.copy(r),e.position.y-=i*.5%1*.1,t.g.pose(pt({shR:[40,8],elR:80,shL:[40,8],elL:80,lean:6,headX:4})),I(t.g,null,i,"tedio"),P(o,[[0,[2.6,2.1,-2.8]],[1,[2.3,1.9,-2.5]]],[0,.9,.3],s/4.36),{}}}),B(164.92,169.21,{bg:"#F2E6C8",fov:56},n=>{let t=Zs(n),e=W0();return e.scale.setScalar(.75),e.position.set(0,.74,-.12),n.add(e),e.userData.E.paint("e",(i,s,o)=>wr(i,s,o)),e.userData.D.paint("d",(i,s,o)=>wr(i,s,o)),(i,s,o)=>{Po(t,i,1),t.pr.pose(mt({shR:[80,30],elR:40},Cn(i,3))),I(t.pr,null,i,"neutro"),t.ti.pose(pt(Cn(i,3))),I(t.ti,null,i,"tedio");let r=Math.sin(i*1.6);return t.g.pose(pt({lean:38+r*1.5,headX:26,headZ:-32,shL:[70,20],elL:125,shR:[70,20],elR:125})),I(t.g,null,i,"sono",{blink:1,mouth:{open:.22+r*.06}}),P(o,[[0,[.78,1.32,-.62]],[1,[.72,1.28,-.56]]],[0,.8,-.1],s/4.29),{sat:.3,tint:"#F4DDB8",vig:.55}}}),B(169.21,170.72,{bg:"#F2E6C8",fov:40},n=>{let t=Zs(n),e=Vt([t.pr.root]);return(i,s,o)=>{Po(t,i,1),Kt(t.pr,"n",i,"feliz",mt({shR:[80+Math.sin(i*2)*30,30],elR:40},Cn(i,3)),0,{mouth:{open:Math.abs(Math.sin(i*9))*.5}}),t.ti.pose(pt({lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120})),I(t.ti,null,i,"sono",{blink:1}),t.g.pose(pt({shR:[30,8],elR:70,shL:[30,8],elL:70,lean:-2,headX:-4})),I(t.g,null,i,"determinado",{look:[0,-.1]});let r=Xt(169.3,169.8,i);return Bt.mundo.value=r,e(r,i),qt(n,"#F2E6C8",r),P(o,[[0,[.9,1.3,1.6]],[1,[.7,1.25,1.4]]],[-.2,1.15,-1],s/1.51),{focus:4,range:1.5,blur:8}}}),B(170.72,180.24,{bg:"#F2E6C8",fov:40},n=>{let t=Zs(n),e=["1789","coroa","napoleao","bastilha"].map(o=>{let r=o5(o);return n.add(r),r}),i=Vt([t.g.root]),s=[171.15,172.6,173.1,174.5];return(o,r,a)=>{Po(t,o,1),t.pr.pose(mt({shR:[80+Math.sin(o*2)*30,30],elR:40},Cn(o,3))),I(t.pr,null,o,"feliz",{mouth:{open:Math.abs(Math.sin(o*9))*.5}}),t.ti.pose(pt({lean:40,headX:30,shL:[70,20],elL:120,shR:[70,20],elR:120})),I(t.ti,null,o,"sono",{blink:1}),t.g.pose(pt({shR:[30,8],elR:70,shL:[30,8],elL:70,lean:-2,headX:-4})),I(t.g,null,o,o>177.5?"surpreso":"determinado",{look:[Math.sin(o*2)*.5,-.2]}),Bt.mundo.value=.85,i(.6,o),qt(n,"#F2E6C8",.85),t.g.headG.updateMatrixWorld(!0);let l=t.g.headG.localToWorld(new _(0,.3,0));return e.forEach((c,h)=>{let d=et((o-s[h])/.4),u=et((o-177.3-h*.45)/.5),f=o*1.2+h*Math.PI/2,g=.55*(1-u);c.position.set(l.x+Math.cos(f)*g,l.y+.1+Math.sin(o*2+h)*.06-u*.05,l.z+Math.sin(f)*g*.7-u*.1),c.scale.setScalar(.32*fn(d)*(1-u*.8)+.001),c.visible=d>0&&u<1}),P(a,[[0,[1.2,1.45,-.9]],[1,[.9,1.35,-.7]]],[0,1.2,.3],r/9.52),{bloom:.45,bloomT:.7,focus:1.5,range:.6,blur:8}}}),B(180.24,182.96,{bg:"#F2E6C8",fov:44},n=>{let t=Zs(n),e=[];for(let i=0;i<14;i++){let s=new it(new bt(.21,.29),new pe({color:"#FBF8EE",side:Ze}));n.add(s),e.push(s)}return(i,s,o)=>{let r=i>180.5,a=et((i-180.6)/.5);t.pr.place(-1.4,-2.3,0,.3),Kt(t.pr,"prof",i,"bravo",r?{shR:[60-Math.max(0,Math.sin((i-180.5)*12))*30,10],elR:20,lean:10}:{shR:[120,10],elR:30},.2),t.L.forEach((c,h)=>{c.pose(pt(mt({shL:[60,30],shR:[60,30],elL:30,elR:30},{bob:-.17+Math.sin(a*Math.PI)*.12}))),I(c,null,i,a>0?"surpreso":"sono")}),t.ti.pose(pt({bob:Math.sin(a*Math.PI)*.12,shL:[60,30],shR:[60,30]})),I(t.ti,null,i,"medo"),t.g.pose(pt({shR:[30,8],elR:70})),I(t.g,null,i,"neutro"),e.forEach((c,h)=>{let d=et((i-180.6)/2);c.visible=d>0,c.position.set(-2.4+h%5*1.2+Math.sin(h)*.3,.8+Math.sin(d*Math.PI)*(1+h%3*.3),-1.4+Math.floor(h/5)*1.3+d*.4),c.rotation.set(d*6+h,d*4,h)}),P(o,[[0,[2.7,1.9,-3]],[1,[2.5,1.8,-2.8]]],[-.3,1,-.2],s/2.72,0,1);let l=r&&i<180.9?Math.sin(i*80)*.02:0;return o.position.y+=l,{}}}),B(182.96,184.96,{bg:"#F2E6C8",fov:40},n=>{let t=Zs(n),e=V(n,oi,1.2,.3,Math.PI);return Ys(e,.35),(i,s,o)=>{Po(t,i,0),t.ti.pose(pt({shL:[110,10],elL:140,shR:[110,10],elR:140,headX:6})),Kt(t.ti,"tiago",i,"medo",t.ti._p,0),t.ti.pose(pt({shL:[110,10],elL:140,shR:[110,10],elR:140,headX:6}));let r=et((i-183.6)/1.2);return Ys(e,.45*(1-r*.5)),e.place(1.2,.3,.3+r*.6,Math.PI),e.pose({shL:[160,30],shR:[160,30],elL:10,elR:10,bob:0}),I(e,null,i,"medo"),e.root.visible=i>183.5,t.g.pose(pt({shR:[30,8],elR:70})),I(t.g,null,i,"neutro"),P(o,[[0,[2.3,1.5,-1.2]],[1,[2.15,1.5,-1.05]]],[1.2,1.2,.3],s/2),{}}}),B(184.96,188.4,{bg:"#F2E6C8",fov:36,perto:!0,limpa:!1},n=>{let t=Zs(n),e=qi("3","#D8342C"),i=qi("10","#2E5EC8");return e.position.set(.98,.78,-.2),i.position.set(.22,.78,-.2),e.rotation.z=i.rotation.z=Math.PI,n.add(e,i),(s,o,r)=>(Po(t,s,0),t.ti.pose(pt({lean:20,headX:20})),I(t.ti,null,s,"choro"),t.g.pose(pt({shR:[30,8],elR:70})),I(t.g,null,s,"feliz"),e.visible=s>185,i.visible=s>186.8,P(r,[[0,[.6,1.35,-1.05]],[1,[.6,1.25,-.9]]],[.6,.8,-.1],o/3.44,0,0),{})}),B(188.4,192.8,{bg:"#F2E6C8",fov:40},n=>{let t=Zs(n),e=ct(.008,.008,.16,"#2E5EC8",0,0,0,{out:.002});n.add(e);let i=[0,0,0],s=Tn(n,i,{n:20,cor:"#FFD86A",r:.12,tam:.015});return(o,r,a)=>{Po(t,o,0),t.ti.pose(pt({shR:[50,8],elR:80,lean:14,headX:20})),I(t.ti,null,o,"preocupado");let l=o<190.2;t.g.pose(pt(l?{shR:[55+Math.sin(o*40)*4,6],elR:85,lean:16,headX:24}:{shR:[70,6],elR:100+Math.sin(o*3)*10,shL:[130,20],elL:140,headX:-8})),I(t.g,null,o,l?"determinado":"sono",{mouth:l?void 0:{open:o>190.6&&o<191.6?.8:0,round:1}}),Yt(e,t.g,"R",[0,-.05,.04]),l||(e.rotation.z=o*12);let c=e.position;return i[0]=c.x,i[1]=c.y-.06,i[2]=c.z,s(l?o*3%1:0),P(a,[[0,[.9,1.45,-1.2]],[1,[.75,1.4,-1]]],[0,1,.3],r/4.4),{}}}),B(192.8,199.4,{bg:"#FFFFFF",fov:38},n=>{let t=j0(n),e=Vt([t.cx]);return(i,s,o)=>{let r=Xt(194,194.4,i);t.C.g.visible=r<.5,t.ti.root.visible=r<.5,n.background=new wt(r>.5?"#FFFFFF":"#F2E6C8");let a=br(i,[[192.8,.1],[193.6,.1],[194.25,1],[194.6,1],[195.4,.25],[197.6,.25],[198.3,1],[198.6,1],[199.4,.4]]),l=tl(t,i,a),c=i>194.4?1:0;return I(t.g,null,i,r>.5?"feliz":"neutro",{blink:r>.5?1:void 0,mouth:l.boca}),t.cx.userData.morde(c),t.ti.pose(pt(Cn(i,3))),I(t.ti,null,i,"neutro"),Bt.mundo.value=(r<.5,0),e(r,i),P(o,[[0,[3,1.5,-1]],[1,[2.2,1.3,-1.5]]],[1,1.05,-1.8],s/6.6),{exposure:1+r*.1,bloom:.3}}}),B(199.4,204.48,{bg:"#FFFFFF",fov:28,perto:!0,limpa:!1},n=>{let t=$h(1);t.scale.setScalar(4),t.position.set(0,.8,0),n.add(t),n.add(new us("#FFFFFF","#F4E0C0",1.6));let e=new ki("#FFF4E0",1.8);e.position.set(2,4,3),n.add(e);let i=Tn(n,[.05,1.1,.08],{n:26,cor:"#FFFFFF",r:.25,g:.4,sobe:1.6,tam:.06}),s=Tn(n,[.08,1,.12],{n:30,cor:"#E8B060",r:.3,tam:.015});return(o,r,a)=>(t.rotation.y=.4+o*.1,i((o-199.4)/2.5%1),s(et((o-199.6)/1.5)),t.userData.morde(o>203.4?1:.4),P(a,[[0,[.6,1.08,.65]],[.5,[.5,1,.55]],[1,[.45,.98,.5]]],[.05,.95,.05],r/5.08,0,0),{bloom:.35})}),B(204.48,210.98,{bg:"#F2E6C8",fov:40},n=>{let t=j0(n);t.cx.userData.morde(1);let e=ae(.02,"#9FD8FF",0,0,0);return n.add(e),(i,s,o)=>{let r=tl(t,i,id(i,2.6));I(t.g,null,i,"feliz",{lagrima:!0,mouth:r.boca}),t.g.headG.updateMatrixWorld(!0);let a=t.g.headG.localToWorld(new _(.12,.2,.28));return e.position.copy(a),e.position.y-=i*.4%1*.12,t.ti.pose(pt({shR:[80,6],elR:100,shL:[30,8],elL:60,lean:-6})),I(t.ti,null,i,"surpreso",{look:[0,.2]}),Yt(t.suco,t.ti,"R",[0,-.05,.05]),i<207.6?P(o,[[0,[2.2,1.38,-1.55]],[1,[2.1,1.33,-1.45]]],[1.45,1.05,-.55],(i-204.48)/3.12):P(o,[[0,[2.4,1.35,-2]],[1,[2.2,1.3,-1.9]]],[1,1.05,-1.85],(i-207.6)/3.38),{}}}),B(210.98,212.48,{bg:"#F2E6C8",fov:40},n=>{let t=j0(n);t.cx.userData.morde(1);let e=ct(.004,.004,.14,"#F2546E",0,0,0);return n.add(e),(i,s,o)=>{let r=tl(t,i,id(i,2.6,.8));I(t.g,null,i,"feliz",{blink:1,mouth:r.boca});let a=Math.max(0,Math.sin(i*10)),l=pt({shR:[90-a*10,30],elR:30,shL:[30,8],elL:60,lean:10});return Kt(t.ti,"tiago",i,"preocupado",l,0),t.ti.pose(l),Yt(e,t.ti,"R",[0,-.06,.05],[Math.PI/2,0,0]),P(o,[[0,[2.7,1.4,-1.3]],[1,[2.55,1.35,-1.25]]],[1.2,1.05,-1.2],s/1.5),{}}}),B(212.48,215.48,{bg:"#F2E6C8",fov:34},n=>{let t=j0(n);return t.cx.userData.morde(1),(e,i,s)=>{let o=np(e);Kt(t.g,"gui",e,"determinado",o,0,{look:[.3,0]}),tl(t,e,.35,o),t.g.headG.rotation.z+=Math.sin(e*14)*.03,t.ti.pose(pt(Cn(e,3))),I(t.ti,null,e,"surpreso");let r=.5-i/3*.4;return P(s,[1+Math.sin(r)*1.2,1.3,-1.85+Math.cos(r)*1.2],[1,1.15,-1.85],i/3,.04),{vig:.5,sat:1.15}}}),B(215.48,224.89,{bg:"#C8C0B8",fov:46},n=>{let t=Dt(n,{hora:"noite"});t.luzes.LG.intensity=1.8,t.luzAbaj.intensity=1.2;let e=V(n,Et,0,0,0);Sn(e);let i=ct(.006,.006,.14,"#2E5EC8",0,0,0,{out:.002});n.add(i),t.tel.position.set(-1,.79,-.18),t.tel.rotation.set(-Math.PI/2,0,-Math.PI/2);let s=Vt([e.root,t.caderno]),o=[217,218.3,219.1,220.4,221.2,222.5,223.3,224.1];return(r,a,l)=>(e.pose(pt({shR:[58+Math.sin(r*9)*3,4],elR:92+Math.sin(r*13)*4,shL:[44,6],elL:84,lean:14,headX:26})),I(e,null,r,"determinado",{look:[0,.7]}),Yt(i,e,"R",[0,-.05,.04],[.6,0,0]),sd(t,et((r-216.3)/8)),t.tel.position.x=-1+yo(r,o,.4),t.tel.tela(o.some(c=>r>c&&r<c+.4)?"bloqueio":"apagada"),Bt.mundo.value=.9,s(.4,r),qt(n,"#C8C0B8",.9),P(l,[[0,[-1.38,1.55,-1.38]],[1,[-1.3,1.5,-1.25]]],[-.75,1,.2],a/9.41),{tint:"#E8E2FF"})}),B(224.89,227.78,{bg:"#C8C0B8",fov:40},n=>{let t=Dt(n,{hora:"noite"});t.luzes.LG.intensity=1.8;let e=wo();e.position.set(-.5,2,-1.47),n.add(e);let i=V(n,Et,0,0,0);return Sn(i),(s,o,r)=>{let a=ln(et((s-225)/2.4))*120;return e.hora(19,a),i.pose(pt({shR:[40,8],elR:80,lean:0,headX:-20,headY:30})),I(i,null,s,"surpreso",{look:[.5,-.6]}),P(r,[[0,[-.4,1.85,-.7]],[1,[-.45,1.9,-.85]]],[-.5,2,-1.47],o/2.89,0,0),{tint:"#E8E2FF"}}}),B(227.78,233.48,{bg:"#C8C0B8",fov:44},n=>{let t=Dt(n,{hora:"noite"});t.luzes.LG.intensity=1.8,t.luzAbaj.intensity=1.2;let e=V(n,Et,0,0,0);return Sn(e),sd(t,1),(i,s,o)=>{if(e.pose(on(i)),I(e,null,i,i>230.9?"desconfiado":"surpreso",{look:[0,.55]}),Qe(t.tel,e),t.tel.tela("mensagens",et((i-228.4)/1.8)),i<230.9){e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let r=e.headG.localToWorld(new _(0,.3,.05)),a=t.tel.position;P(o,[r.x,r.y,r.z],[a.x,a.y,a.z],(i-227.78)/3.1,0,0)}else e.headG.visible=!0,P(o,[[0,[-1.1,1.3,-.5]],[1,[-1.05,1.28,-.4]]],[-.66,1.15,.25],(i-230.9)/2.58);return{tint:"#E8E2FF"}}}),B(233.48,234.68,{bg:"#1A1A22",fov:30,perto:!0,limpa:!1},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,Et,0,0,0);Sn(e);let i=Vt([t.tel]);return(s,o,r)=>{e.pose(on(233.5)),I(e,null,233.5,"desconfiado",{vivo:!1}),Qe(t.tel,e),t.tel.tela("mensagens",1),Bt.mundo.value=.9,i(1,s),qt(n,"#1A1A22",.9);let a=t.tel.position;e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let l=e.headG.localToWorld(new _(0,.25,.1));return P(r,[l.x,l.y,l.z],[a.x,a.y,a.z],o/1.2,0,0),{vig:.55}}})];var Fr={tint:"#FFF0DC",bloom:.22},a5=["#F2546E","#F2C230","#3EA6FF","#5AE07A","#B88AF2"],Pr={x:.64,z:.25,ry:-Math.PI/2};function Yi(n,t,e,i=1,s=0){let o=pt({lean:10,headX:16,headZ:-6});n.pose(o),n.root.updateMatrixWorld(!0);let r=n.root.localToWorld(new _(-.1,.24,.2));t.position.copy(r),t.quaternion.copy(n.root.quaternion),t.rotateZ(.4),t.updateMatrixWorld(!0);let a=Math.sin(e*9*i),l=[.48,.55,.42,.6][Math.floor(e*.9*Math.max(i,.3))%4],c=Ii(n,"R",t.localToWorld(new _(.08,a*.035*Math.min(1,i+.2),.08)),o);Ii(n,"L",t.localToWorld(new _(l,-.01,.06)),c)}function $s(n,t={}){let e=Dt(n,t);e.violao.visible=!1;let i=V(n,Et,0,0,0);Qt(i,Pr.x,Pr.z,Pr.ry,.42);let s=Xi({});return n.add(s),e.tel.position.set(.35,.8,-.9),{K:e,g:i,v:s}}function el(n,t){let e=[];for(let i=0;i<10;i++){let s=Ri("notas",.1);s.material.color.set(a5[i%5]),n.add(s),e.push(s)}return(i,s=1)=>{let o=t.getWorldPosition(new _);e.forEach((r,a)=>{let l=(i*.5+a/10)%1;r.position.set(o.x+Math.sin(a*2.3+i)*.25*l,o.y+.1+l*.8,o.z+Math.cos(a*1.7)*.25*l),r.material.opacity=s*Math.sin(l*Math.PI),r.visible=s>.01})}}var sp=[B(234.68,238.86,{bg:"#DDE6EE",fov:44,limpa:!1},n=>{let t=Dt(n,{hora:"tarde"});t.tel.visible=!1;let e=V(n,Et,-.4,.3,-Math.PI/2-.4);return(i,s,o)=>{t.portaK.abre(1-Xt(234.9,235.8,i));let r=et((i-236.3)/1.5);return e.place($(-.2,-.95,r),$(.4,1.1,r),0,-2.3),e.pose(r>0&&r<1?$e(i,{f:1.8}):mt(ve(i,1),r>=1?{lean:30,shR:[70,10],elR:20}:{})),I(e,null,i,"surpreso",{look:[-.3,.6]}),P(o,[[0,[1.25,1.5,-.75]],[1,[1.15,1.42,-.6]]],[-1.3,.7,1.1],s/4.18),Fr}}),B(238.86,240.88,{bg:"#DDE6EE",fov:56,limpa:!1},n=>{let t=Dt(n,{hora:"tarde"});t.tel.visible=!1,t.violao.visible=!1;let e=V(n,Et,-.85,.95,-2.4),i=Xi({teia:!0,semCorda:2});n.add(i);let s=[0,0,0],o=Tn(n,s,{n:40,cor:"#D8CDB8",r:.5,tam:.07,sobe:.5});return(r,a,l)=>{e.pose({shR:[40,10],elR:50,shL:[62,30],elL:22,headX:16,headY:22}),I(e,null,r,"neutro",{mouth:r>239.4&&r<240.2?{open:.4,round:1}:void 0,look:[.5,-.3]}),Yt(i,e,"L",[0,-.05,.05],!1),i.rotation.set(0,-2.4-Math.PI/2,1.2);let c=i.getWorldPosition(new _);s[0]=c.x,s[1]=c.y+.1,s[2]=c.z,o(et((r-239.4)/1.4)),e.headG.updateMatrixWorld(!0);let d=e.headG.getWorldPosition(new _).clone().lerp(c,.5);return P(l,[[0,[-1.36,1.4,.3]],[1,[-1.34,1.36,.36]]],[d.x,d.y,d.z],a/2.02),Fr}}),B(240.88,243.18,{bg:"#DDE6EE",fov:40},n=>{let t=$s(n,{hora:"tarde"}),e=ct(.04,.035,.1,"#CFE6F4",0,0,0,{out:.003});e.position.set(.35,.82,-1.15),n.add(e),t.K.tel.position.set(.35,.95,-1.12),t.K.tel.rotation.set(-.2,0,0),t.K.tel.tela("views",.02);let i=tt(.002,.002,.9,"#E8E0C8",0,0,0);return n.add(i),(s,o,r)=>{t.g.pose(pt({shR:[70,10],elR:70+Math.sin(s*6)*15,shL:[60,-30],elL:40,lean:16,headX:26})),I(t.g,null,s,"determinado",{look:[.2,.6]}),Yi(t.g,t.v,s,0),t.g.pose(pt({shR:[70,10],elR:70+Math.sin(s*6)*15,shL:[60,-30],elL:40,lean:16,headX:26}));let a=t.v.getWorldPosition(new _);return i.position.set(a.x,a.y+.05,a.z),i.quaternion.copy(t.v.quaternion),i.rotateY(Math.PI/2),i.visible=s>241.2,s<241.75?P(r,[[0,[-.05,1.18,-.3]],[1,[.08,1.12,-.48]]],[a.x,a.y,a.z],(s-240.88)/.87,0,0):P(r,[[0,[.9,1.15,-.5]],[1,[.75,1.1,-.6]]],[.35,.95,-1.12],(s-241.75)/1.43,0,0),Fr}}),B(243.18,249.68,{bg:"#DDE6EE",fov:40},n=>{let t=$s(n,{hora:"tarde"}),e=Vt([t.v,t.g.root]),i=el(n,t.v),s=t.K.luzes.sol;return(o,r,a)=>{let l=r/6.5;return Yi(t.g,t.v,o,.5+l),I(t.g,null,o,l>.55?"feliz":"determinado",{blink:l>.55?1:void 0,look:[0,.5]}),s.position.set(.4+$(-1.4,1.4,l),2.3,-2.1),s.color.set(l>.6?"#FFB070":"#FFF0D0"),Bt.mundo.value=Xt(243.3,243.8,o),e(1,o),qt(n,"#DDE6EE",Bt.mundo.value),i(o,Xt(246,246.5,o)),P(a,[[0,[-.15,1.3,.95]],[.5,[-.1,1.2,-.35]],[1,[-.15,1.28,.75]]],[.6,.9,.25],l),{tint:l>.6?"#FFE0C0":"#FFF4E4",bloom:.3}}}),B(249.68,251.88,{bg:"#DDE6EE",fov:42},n=>{let t=$s(n,{hora:"tarde"});t.K.portaK.abre(1);let e=V(n,oi,-1.25,.85,Math.PI/2-.3),i=Be();return n.add(i),(s,o,r)=>{Yi(t.g,t.v,s,1.3),I(t.g,null,s,"feliz",{blink:1});let a=mt(oe.filmar,{bob:0});return Kt(e,"tiago",s,"surpreso",a,0),e.pose(a),Yt(i,e,"R",[0,-.08,.05],[0,0,Math.PI/2]),i.tela("views",.01),P(r,[[0,[.3,1.45,-1]],[1,[.2,1.4,-.9]]],[-1.2,1.2,.85],o/2.2),Fr}}),B(251.88,253.78,{bg:"#DDE6EE",fov:42},n=>{let t=$s(n,{hora:"tarde"}),e=el(n,t.v);return(i,s,o)=>(Yi(t.g,t.v,i,1.3),t.g.root.position.y=.42-.28*.95+Math.abs(Math.sin(i*5))*.01,Kt(t.g,"gui",i,"feliz",t.g._ultima||{},0,{look:[-.6,0]}),Yi(t.g,t.v,i,1.3),e(i,1),P(o,[[0,[-.5,1.3,.9]],[1,[-.4,1.25,.8]]],[.7,.9,.25],s/1.9),Fr)}),B(253.78,262.78,{bg:"#DDE6EE",fov:40,limpa:!1,perto:!0},n=>{let t=$s(n,{hora:"tarde"}),e=V(n,oi,-.8,.6,Math.PI/2+.3),i=Be();return n.add(i),(s,o,r)=>{Yi(t.g,t.v,s,1.3),I(t.g,null,s,"feliz",{blink:1}),e.pose(mt(ve(s,2),{shR:[64,4],elR:76,shL:[40,12],elL:70,headX:24})),I(e,null,s,"surpreso",{look:[0,.5]}),Qe(i,e,"R"),i.tela("views",et((s-254.3)/4.2)),e.headG.visible=!1,e.headG.updateMatrixWorld(!0);let a=e.headG.localToWorld(new _(0,.26,.1)),l=i.position;i.translateY(.07),i.updateMatrixWorld(!0);let c=l.clone().add(a.clone().sub(l).normalize().multiplyScalar(.36-.04*Math.sin(o*.7)));return P(r,[c.x,c.y,c.z],[l.x,l.y,l.z],o/9,0,0),Fr}}),B(262.78,266.88,{bg:"#B8C8DC",fov:40},n=>{let t=$s(n,{hora:"tarde"});return(e,i,s)=>(Yi(t.g,t.v,262.8,1.3),I(t.g,null,262.8,"feliz",{blink:1,vivo:!1}),P(s,[[0,[-.55,1.3,.75]],[1,[-.45,1.25,.65]]],[.7,.95,.25],i/4.1),{tint:"#B8D0FF",sat:.55,exposure:.9})}),B(266.88,269.18,{bg:"#E8E0D0",fov:44},n=>{let t=Dt(n,{hora:"noite"});t.tel.visible=!1;let e=V(n,Ro,-2.4,.9,-Math.PI/2+.6),i=[];for(let s=0;s<3;s++){let o=ct(.11,.09,.02,"#F4F1EA",-3.3+s*.3,.79,.45,{out:.003});n.add(o),i.push(o)}return(s,o,r)=>{let a={shR:[110,30],elR:60,shL:[20,10],elL:30,headX:-6};return Kt(e,"mae",s,"neutro",a,.3),e.pose(a),P(r,[[0,[-3.9,1.4,1.2]],[1,[-3.75,1.35,1.1]]],[-2.4,1.2,.9],o/2.3),{tint:"#FFF0DC"}}}),B(269.18,290.18,{bg:"#2A2A34",fov:40,limpa:!1},n=>{let t=Dt(n,{hora:"noite",corte:!0});t.tel.visible=!1,t.luzes.LG.intensity=2,t.violao.visible=!1;let e=V(n,Et,0,0,0);Qt(e,Pr.x,Pr.z,Pr.ry,.42);let i=Xi({});n.add(i);let s=V(n,Ro,-3,.9,0),o=Vt([e.root,i]),r=el(n,i);return(a,l,c)=>{Yi(e,i,a,1.2),I(e,null,a,"feliz",{blink:1}),r(a,1);let h=et((a-273.1)/1.6);s.place($(-3,-2,h),$(.9,.85,h),0,-Math.PI/2+.1+(h<1&&h>0,0)),s.root.rotation.y=(h>0&&h<1,Math.PI/2);let d=a>275&&a<276.2,u=[269.6,270.3,271.1,271.8,272.4,275.6].some(E=>a>E&&a<E+.5),f=h>0&&h<1?$e(a,{f:1.8}):d?{shR:[90,0],elR:60+Math.abs(Math.sin(a*14))*40}:{shR:[120,30],elR:70,shL:[120,30],elL:70,headX:-6};s.pose(f),I(s,null,a,a>276?"preocupado":"bravo",{mouth:u?{open:.7}:void 0});let g=Xt(278.6,279.2,a);return Bt.mundo.value=.25+g*.75,o(1,a),qt(n,"#2A2A34",0),a<278.6?P(c,[[0,[-1.6,2.1,6]],[1,[-1.6,2,5.6]]],[-1.6,1.1,0],(a-269.18)/9.4,0,0):a<284.2?P(c,[[0,[.6,1.6,3.4]],[1,[.7,1.4,2.6]]],[.6,.95,.25],(a-278.6)/5.6,0,0):P(c,[[0,[-1.6,1.6,3.6]],[1,[-1.6,1.5,3.3]]],[-1.6,1.1,.5],(a-284.2)/6,0,0),{tint:"#E8E2FF"}}}),B(290.18,310.68,{bg:"#C8C0B8",fov:46,limpa:!1},n=>{let t=$s(n,{hora:"noite"});t.K.luzes.LG.intensity=2;let e=V(n,Se,1.5,.85,-Math.PI/2);Ys(e,1);let i=tn();n.add(i),i.scale.setScalar(.6),t.K.portaD.abre(1);let s=wo();s.position.set(-.3,2,-1.47),n.add(s);let o=Vt([t.g.root,t.v]),r=el(n,t.v);return(a,l,c)=>{Yi(t.g,t.v,a,1.1),I(t.g,null,a,"feliz",{blink:1}),r(a,1);let h=et((a-291.7)/1.6);e.place($(1.5,-.05,h),$(.85,1.35,h),0,$(-Math.PI/2,2.58-Math.PI*2,h));let d=Math.sin(a*2.2);e.pose(h>0&&h<1?$e(a,{f:2}):mt({shL:[30,-40],elL:120,shR:[30,-40],elR:120,headX:6,tilt:d*5},{bob:Math.abs(d)*.01})),e.root.position.x+=h>=1?d*.03:0,I(e,null,a,"triste",{look:[-.6,.1]}),e.root.updateMatrixWorld(!0);let u=e.hands.L.localToWorld(new _(0,-.04,.04)),f=e.hands.R.localToWorld(new _(0,-.04,.04));i.position.copy(u).add(f).multiplyScalar(.5),i.quaternion.copy(e.root.quaternion),i.set(0),s.hora(20,et((a-294.8)/9)*10),Bt.mundo.value=1,o(.5,a),qt(n,"#C8C0B8",1),Ys(e,a>308.3?$(1,.15,Xt(308.3,309.2,a))*(a>310.2?1.5:1):1);let g=(E,m)=>(a-E)/(m-E);if(a<293)P(c,[[0,[-1.2,2.05,-1.2]],[1,[-1.15,2,-1.15]]],[.7,.8,.5],g(290.18,293),0,0);else if(a<294.8)P(c,[[0,[.75,1.12,1.25]],[1,[.7,1.1,1.28]]],[i.position.x,i.position.y+.12,i.position.z],g(293,294.8));else if(a<298)P(c,[[0,[-.3,1.75,-.55]],[1,[-.3,1.8,-.7]]],[-.3,2,-1.47],g(294.8,298));else if(a<302.4)P(c,[[0,[1.45,1.35,2]],[1,[1.38,1.32,1.92]]],[.15,.88,.95],g(298,302.4));else if(a<304.1){t.g.headG.updateMatrixWorld(!0);let E=t.g.headG.getWorldPosition(new _);P(c,[[0,[E.x-.9,E.y+.1,E.z-.5]],[1,[E.x-.8,E.y+.08,E.z-.45]]],[E.x,E.y-.2,E.z],g(302.4,304.1))}else P(c,[[0,[-1.2,2.05,-1.2]],[1,[-1.1,1.95,-1.1]]],[.7,.8,.5],g(304.1,310.68),0,0);return{tint:"#E8E2FF"}}}),B(310.68,313.08,{bg:"#C8C0B8",fov:44},n=>{let t=$s(n,{hora:"noite"});return t.K.luzes.LG.intensity=2,(e,i,s)=>(Yi(t.g,t.v,310.7,0),t.g.pose(pt({shR:[30,20],elR:40,shL:[40,-20],elL:50,headX:0,headY:Math.sin((e-310.68)*2)*40})),I(t.g,null,e,"neutro",{look:[Math.sin((e-310.68)*2),0]}),Bt.mundo.value=1-Xt(310.7,311.3,e),P(s,[[0,[-.6,1.5,1.2]],[1,[-.5,1.4,1.05]]],[.7,.9,.25],i/2.4),{tint:"#E8E2FF"})}),B(313.08,316.55,{bg:"#E8E0D0",fov:34},n=>{let t=Dt(n,{hora:"noite"});t.tel.visible=!1;let e=V(n,Et,-2.3,.45,-Math.PI/2),i=ct(.12,.09,.025,"#F4F1EA",-2.85,.79,.45,{out:.003}),s=ct(.12,.09,.025,"#F4F1EA",0,0,0,{out:.003});s.rotation.x=Math.PI,n.add(i,s);let o=ae(.07,"#C89A50",-2.85,.8,.45,{seg:10});return o.scale.y=.4,n.add(o),(r,a,l)=>{let c=Xt(314.2,314.8,r);return e.pose({shR:[40+c*40,0],elR:60-c*30,lean:14,headX:26}),I(e,null,r,"triste",{look:[0,.7]}),s.position.set(-2.85+c*.1,.82+c*.25,.45),s.rotation.z=c*.6,P(l,[[0,[-3.6,1.25,.25]],[1,[-3.5,1.18,.32]]],[-2.6,.95,.45],a/3.47),{tint:"#FFE8D0",sat:.8}}}),B(316.55,318.38,{bg:"#10121C",fov:34},n=>{let t=Dt(n,{hora:"noite"});t.tel.visible=!1,t.portaD.abre(.35);let e=V(n,Se,0,0,0);Gs(e,3.55,.38,.2),e.root.position.y=.58;let i=tn();i.scale.setScalar(.6),i.position.set(3.45,.5,-1),i.rotation.set(-Math.PI/2,0,.4),n.add(i);let s=new Bn("#B8C8FF",12,6,.5,.6,1.2);return s.position.set(3.3,2.4,-2.2),s.target.position.set(3.5,.4,-.6),n.add(s,s.target),(o,r,a)=>(e.pose({shL:[10,10],shR:[10,10]}),I(e,null,o,"sono",{blink:1}),i.set(0),P(a,[[0,[2.3,1.45,1.2]],[1,[2.45,1.35,1.05]]],[3.45,.5,-.6],r/1.83),{tint:"#C8D4FF",exposure:.85})})],pi=n=>{Bt.mundo.value=n,Bt.ouro.value=1};function rd(n,t,e){let i=e[0],s=e[e.length-1];for(let r=0;r<e.length-1;r++)if(t>=e[r][0]&&t<=e[r+1][0]){i=e[r],s=e[r+1];break}let o=s[0]>i[0]?et((t-i[0])/(s[0]-i[0])):1;n.position.set($(i[1],s[1],o),Math.sin(o*Math.PI)*(s[3]||0),$(i[2],s[2],o)),n.rotation.z=-n.position.x*4,n.rotation.x=n.position.z*4}function mi(n){let t=q0(n),e=V(n,Se,0,0,0),i=V(n,Et,0,0,0),s=To(.35);n.add(s);let o=Be();return o.position.set(-3.5,.02,2.3),o.rotation.set(-Math.PI/2,0,.6),n.add(o),{P:t,d:e,g:i,B:s,tel:o}}var op=[B(318.38,325.98,{bg:"#F4E8C8",fov:44,limpa:!1},n=>{let t=Dt(n,{hora:"manha"});t.tel.visible=!1,t.portaD.abre(1);let e=V(n,Se,1.42,.85,-Math.PI/2),i=To(.35);n.add(i);let s=V(n,Et,0,0,0);return Gs(s,.95,.43,.38),s.root.position.y=.63,(o,r,a)=>(e.pose(mt(ve(o,2),{shR:[8,34],elR:40,shL:[0,9]})),I(e,null,o,"feliz",{look:[-.6,0]}),e.root.updateMatrixWorld(!0),i.position.copy(e.root.localToWorld(new _(-.3,.78,.04))),i.position.y-=.11,s.pose({shR:[10,10],elR:30,shL:[10,10],elL:30}),I(s,null,o,"sono",{blink:1}),o<323.9?P(a,[[0,[-.3,1.4,.6]],[1,[0,1.25,.7]]],[1.42,.75,.85],(o-318.38)/5.5):P(a,[[0,[.95,.3,.95]],[1,[1,.25,.9]]],[1.42,.06,.85],(o-323.9)/2.08,0,0),{tint:"#FFE8B8",bloom:.3})}),B(325.98,327.56,{bg:"#F4E8C8",fov:36},n=>{let t=Dt(n,{hora:"manha"});t.tel.visible=!1,t.portaD.abre(1);let e=V(n,Se,1.5,.78,-Math.PI/2),i=To(.35);return n.add(i),(s,o,r)=>{let a=mt(ve(s,2),{shR:[10,30],elR:80,shL:[60,20],elL:90,tilt:-8,headZ:-10});return Kt(e,"davi",s,"vergonha",a,0,{look:[-.6,0]}),e.pose(a),Yt(i,e,"R",[-.05,-.05,.08],!1),P(r,[[0,[.6,.95,.75]],[1,[.7,.92,.76]]],[1.5,.75,.8],o/1.58),{tint:"#FFE8B8",bloom:.3}}}),B(327.56,330.58,{bg:"#F4E8C8",fov:44},n=>{let t=Dt(n,{hora:"manha"});t.tel.visible=!1;let e=V(n,Et,0,0,0);return Qt(e,.95,-.98,0,.47),t.coberta.position.y=.53,(i,s,o)=>{let r=Xt(327.6,328.4,i)*(1-Xt(329.3,329.9,i)),a=pt({knL:0,knR:0,shL:[$(20,165,r),20],shR:[$(20,165,r),20],elL:20,elR:20,headX:-10*r});return Kt(e,"gui",i,r>.5?"sono":"feliz",a,0),e.pose(a),t.coberta.position.x=-Xt(329.6,330.2,i)*.5,t.coberta.rotation.z=Xt(329.6,330.2,i)*.5,P(o,[[0,[.2,1.4,.75]],[1,[.25,1.35,.6]]],[.95,.85,-.75],s/3.02),{tint:"#FFE8B8",bloom:.3}}}),B(330.58,336.68,{bg:"#BFE3F7",fov:40},n=>{let t=mi(n),e=Vt([t.d.root,t.g.root,t.B]);return(i,s,o)=>{let r=$(-2.5,1.5,s/6.1);t.d.place(r,.2+Math.sin(i*2)*.3,0,Math.PI/2),t.d.pose(cn(i,2.6,.8)),I(t.d,null,i,"feliz",{lingua:!0}),t.B.position.set(r+.3,0,.2+Math.sin(i*2)*.3),t.B.rotation.z=-i*6,t.g.place(r-.9,.9,0,Math.PI/2-.3),t.g.pose(cn(i,2.2,.6)),I(t.g,null,i,"feliz");let a=Xt(334.3,335.3,i);return pi(a),e(a,i),qt(n,"#BFE3F7",a,1),P(o,[[0,[r-1.5,1.6,4.2]],[1,[r-1,1.4,3.6]]],[r,.6,.4],s/6.1,0,0),{bloom:.3+a*.3,bloomT:.8}}}),B(336.68,338.99,{bg:"#BFE3F7",fov:32,perto:!0},n=>{let t=mi(n),e=Vt([t.d.root,t.g.root,t.B]);return t.tel.tela("apagada"),(i,s,o)=>(t.d.place(-1.5+(i-336.68)*1.8,1.6,0,Math.PI/2),t.d.pose(cn(i,2.6,.8)),I(t.d,null,i,"feliz"),t.g.place(-1+(i-336.68)*1.6,2.2,0,Math.PI/2),t.g.pose(cn(i,2.2,.6)),I(t.g,null,i,"feliz"),t.B.position.set(-1.2+(i-336.68)*1.8,0,1.7),pi(1),e(1,i),qt(n,"#BFE3F7",1,1),P(o,[[0,[-3.9,.35,2.75]],[1,[-3.85,.3,2.65]]],[-3.5,.02,2.3],s/2.31,0,0),{bloom:.45,bloomT:.8,focus:.55,range:.3,blur:10})}),B(338.99,341.48,{bg:"#BFE3F7",fov:40},n=>{let t=mi(n),e=Vt([t.d.root,t.g.root,t.B]);return(i,s,o)=>(t.d.place(1,.2,0,Math.PI/2),t.d.pose(i<339.4+.3?{hipR:[-30+et((i-339.4)/.25)*90,0],knR:20,shL:[40,30],shR:[40,30]}:mt(ve(i,2),{shL:[130,20],elL:120})),I(t.d,null,i,i>339.4+.4?"vergonha":"determinado",{lingua:i<339.4+.3}),rd(t.B,i,[[339.4,1.3,.2,0],[339.4+1.2,2.5,3,.5],[339.4+2.5,2.8,3.8,.1]]),t.g.place(3,1,0,-Math.PI/2-.2),t.g.pose(i>339.4+.6?mt(vo(i,1.3),{lean:25+Math.sin(i*9)*5,shL:[40,10],elL:100,shR:[40,10],elR:100}):ve(i,1)),I(t.g,null,i,i>339.4+.6?"rindo":"feliz",{mouth:i>339.4+.6?{open:.8,smile:1}:void 0}),pi(1),e(1,i),qt(n,"#BFE3F7",1,1),P(o,[[0,[2,1.4,-2.6]],[1,[2.1,1.35,-2.3]]],[2,.7,.5],s/2.49),{bloom:.45,bloomT:.8})}),B(341.48,344.87,{bg:"#BFE3F7",fov:40},n=>{let t=mi(n),e=Vt([t.d.root,t.g.root,t.B]),i=Tr(n,4.4,0,.6,{w:3,d:2,h:3});return(s,o,r)=>{t.d.place(3.6,.1,0,Math.PI/2),t.d.pose(s<341.7+.3?{hipR:[-30+et((s-341.7)/.25)*90,0],knR:20,shL:[40,30],shR:[40,30]}:mt(Vi(s,2.4),oe.comemora)),I(t.d,null,s,s>341.7+.3?"rindo":"determinado",{pisca1:s<341.7+.3,mouth:s>341.7+.3?{open:.7,smile:1}:void 0}),rd(t.B,s,[[341.7,3.9,.1,0],[341.7+.5,5.9,.2,.15],[341.7+1.2,6.4,.3,0]]),t.g.place(4.6,1.5,0,-Math.PI*.8);let l=s>341.7+.5;return t.g.pose(l?mt(oe.ajoelhado,oe.comemora):ve(s,1)),I(t.g,null,s,l?"rindo":"surpreso",{mouth:l?{open:.9,smile:1}:void 0}),i(s),n.children.forEach(()=>{}),pi(1),e(1,s),qt(n,"#BFE3F7",1,1),P(r,[[0,[2.6,1.3,3.6]],[1,[2.9,1.2,3.2]]],[4.4,.7,.6],o/3.39),{bloom:.45,bloomT:.8}}}),B(344.87,347.28,{bg:"#BFE3F7",fov:34},n=>{let t=mi(n),e=Vt([t.d.root,t.B]);return(i,s,o)=>{let r=344.87+(i-344.87)*.35,a=$(-1,0,s/2.41);return t.d.place(a,.3,0,Math.PI/2),t.d.pose(cn(r,2.6,.8)),I(t.d,null,r,"feliz"),t.B.position.set(a+.3,0,.45),t.B.rotation.z=-r*6,t.g.root.visible=!1,pi(1),e(1,i),qt(n,"#BFE3F7",1,1),P(o,[[0,[a+.2,.8,2.2]],[1,[a+.5,.75,2]]],[a,.5,.3],s/2.41),{bloom:.45,bloomT:.8}}}),B(347.28,349.2,{bg:"#BFE3F7",fov:30},n=>{let t=mi(n),e=Vt([t.d.root]);return(i,s,o)=>{let r=347.28+(i-347.28)*.35;return t.d.place(0,.3,0,Math.PI/2-.3),t.d.pose(cn(r,2.6,.8)),I(t.d,null,r,"feliz",{lingua:!0}),t.g.root.visible=!1,t.B.visible=!1,pi(1),e(1,i),qt(n,"#BFE3F7",1,1),P(o,[[0,[1.3,.75,1.1]],[1,[1.2,.72,1]]],[0,.62,.3],s/1.92),{bloom:.45,bloomT:.8}}}),B(349.2,350.88,{bg:"#BFE3F7",fov:30},n=>{let t=mi(n),e=Vt([t.d.root,t.B]);return(i,s,o)=>{let r=et((i-349.6)/1);return t.d.place(0,.3,0,Math.PI/2),t.d.pose({hipR:[-30+r*70,0],knR:30-r*20,shL:[40,30],shR:[40,30],lean:8}),I(t.d,null,i,"determinado",{pisca1:!0}),t.g.root.visible=!1,t.B.position.set(.3+r*.3,0,.38),pi(1),e(1,i),qt(n,"#BFE3F7",1,1),P(o,[[0,[1.25,.65,1]],[1,[1.15,.62,.9]]],[0,.58,.3],s/1.68),{bloom:.45,bloomT:.8}}}),B(350.88,352.87,{bg:"#BFE3F7",fov:30},n=>{let t=mi(n),e=Vt([t.d.root]);return(i,s,o)=>(t.d.place(.5,.3,0,Math.PI/2+.6),t.d.pose(mt(cn(i*.5,2.6,.5),{shR:[70,10],elR:120})),I(t.d,null,i,"feliz",{mouth:{open:Math.abs(Math.sin(i*13))*.35}}),t.g.root.visible=!1,t.B.visible=!1,pi(1),e(1,i),qt(n,"#BFE3F7",1,1),P(o,[[0,[1.55,.75,1.2]],[1,[1.45,.72,1.1]]],[.5,.6,.3],s/1.99),{bloom:.45,bloomT:.8})}),B(352.87,356.28,{bg:"#BFE3F7",fov:34},n=>{let t=mi(n),e=Vt([t.d.root,t.g.root]);return(i,s,o)=>{t.d.place(4.6,.2,0,Math.PI/2);let r=Xt(353.6,354.3,i);return t.d.root.rotation.y=$(Math.PI/2,-.6,r),t.d.pose(mt(ve(i,2),{shL:[130*(1-r),20],elL:40})),I(t.d,null,i,r>.5?"feliz":"rindo",{look:[0,0],brow:r}),t.g.place(3.2,2,0,Math.PI*.8),t.g.pose(mt(oe.comemora,Vi(i,2))),I(t.g,null,i,"rindo"),t.B.position.set(5.9,0,.2),pi(1),e(1,i),qt(n,"#BFE3F7",1,1),P(o,[[0,[6.5,1.35,-.7]],[1,[6.3,1.3,-.55]]],[3.9,.7,1.1],s/3.41),{bloom:.45,bloomT:.8}}}),B(356.28,358.91,{bg:"#BFE3F7",fov:34},n=>{let t=mi(n),e=Vt([t.d.root,t.g.root]);return(i,s,o)=>{let r=$(4.6,3.5,s/2.63),a=$(.2,1.6,s/2.63);t.d.place(r,a,0,-.7);let l=mt(cn(i,2.6,.7),oe.bracosAbertos);return Kt(t.d,"davi",i,"rindo",l,0),t.d.pose(l),t.g.place(3.2,2.1,0,Math.PI*.85),t.g.pose(ve(i,1)),I(t.g,null,i,"feliz"),pi(1),e(1,i),qt(n,"#BFE3F7",1,1),P(o,[[0,[3.3,.85,2.6]],[1,[3.25,.8,2.45]]],[r,.6,a],s/2.63),{bloom:.45,bloomT:.8}}}),B(358.91,361.08,{bg:"#BFE3F7",fov:38},n=>{let t=mi(n),e=Vt([t.d.root,t.g.root,t.B]);return(i,s,o)=>{let r=Xt(359.9,360.5,i);t.g.place(3.2,2.1,0,Math.PI*.85),t.g.root.rotation.x=-r*1.45,t.g.root.position.y=r*.06;let a=r>.1?vo(i,1):oe.bracosAbertos;return Kt(t.g,"gui",i,"rindo",a,0,{mouth:r>.5?{open:.8,smile:1}:void 0}),t.g.pose(a),t.d.place(3.95,1.55,0,-.7),t.d.root.rotation.x=-r*1.4,t.d.root.position.y=r*.04,t.d.pose(vo(i,1)),I(t.d,null,i,"rindo",{mouth:{open:.8,smile:1}}),rd(t.B,i,[[359.9,3.6,1.5,0],[361.08,2.2,.2,0]]),pi(1),e(1,i),qt(n,"#BFE3F7",1,1),P(o,[[0,[1.6,1.8,3.8]],[1,[1.8,2.2,3.6]]],[3.3,.3,1.6],s/2.17),{bloom:.45,bloomT:.8}}}),B(361.08,367.28,{bg:"#BFE3F7",fov:36},n=>{let t=mi(n),e=Vt([t.d.root,t.g.root]);return(i,s,o)=>(t.g.place(3.2,2.1,0,Math.PI*.85),t.g.root.rotation.x=-1.45,t.g.root.position.y=.06,t.g.pose(vo(361.1,1)),I(t.g,null,361.1,"rindo",{mouth:{open:.5,smile:1},vivo:!1}),t.d.place(3.95,1.55,0,-.7),t.d.root.rotation.x=-1.4,t.d.root.position.y=.04,t.d.pose(vo(361.1,1)),I(t.d,null,361.1,"rindo",{mouth:{open:.6,smile:1},vivo:!1}),t.B.position.set(2.2,0,.2),pi(1),e(1,i),qt(n,"#BFE3F7",1,1),P(o,[[0,[5.6,1.9,2.6]],[1,[5.2,1.6,2.4]]],[3.5,.15,1.8],s/6.2,0,0),{bloom:.5,bloomT:.75,vig:.45})})];var Io={bloom:.22};function Ts(n,t={}){let e=If(n),i=Zn(.05);i.g.position.set(0,.835,0),n.add(i.g);let s=V(n,Et,0,.75,Math.PI);Qt(s,0,.75,Math.PI,.48);let o=V(n,t.op||oi,0,-.75,0);Qt(o,0,-.75,0,.48);let r=[];for(let a=0;a<(t.pub??6);a++){let l=V(n,Gi(a+3),(a>2?1:-1)*(1.25+a%2*.3),.55-a%3*.55,a>2?-Math.PI/2:Math.PI/2);l.seed=a,r.push(l)}return{P:e,T:i,g:s,op:o,pub:r}}var Js=(n,t=1)=>pt(mt({shR:[48,6],elR:96,shL:[40,6],elL:90,lean:12,headX:18},kn(n,t,.3)));function rp(n,t,e,i=.35){for(let[s,o,r]of e){let a=n.P[s];if(!a)continue;let l=et((t-r)/i);l<=0||(n.move(a,s,o,l),n.P[o]&&n.P[o]!==a&&l>=1&&(n.P[o].visible=!1))}}var Ir=(n,t,e="neutro")=>n.pub.forEach((i,s)=>{i.pose(mt(ve(t,s),oe.bracoCruzado)),I(i,null,t,e)}),ap=[B(367.28,375.08,{bg:"#BFE3F7",fov:42},n=>{let t=Ts(n,{pub:0});t.g.root.visible=t.op.root.visible=!1;let e=V(n,xo,0,0,0),i=V(n,Et,0,0,0);return(s,o,r)=>{let a=et((s-367.6)/2.6);e.place($(-4,-1.05,fn(a)),$(-3,-.1,a),0,a<1?1:Math.PI/2),e.pose(a<1?$e(s,{f:1.8}):s<372.6?{shR:[60,4],elR:40,shL:[60,4],elL:40,lean:20}:mt(ve(s,3),oe.maosCintura)),I(e,null,s,"feliz"),t.T.g.visible=s>371.4,t.T.g.position.y=.835+(s<372.2?(372.2-s)*.3:0);let l=et((s-372.4)/2.6);return i.place($(3.5,.7,l),$(2,.9,l),0,-2.2),i.pose(l<1&&l>0?$e(s,{f:1.7}):ve(s,1)),I(i,null,s,"surpreso",{look:[-.4,.5]}),P(r,[[0,[-2.6,1.8,3.6]],[1,[-2,1.6,3]]],[0,.8,0],o/7.8),Io}}),B(375.08,377.82,{bg:"#BFE3F7",fov:36,limpa:!1},n=>{let t=Ts(n,{pub:0});t.op.root.visible=!1;let e=new it(new bt(.21,.29),$t(Gt(256,352,o=>{o.fillStyle="#FBF8EE",o.fillRect(0,0,256,352),o.fillStyle="#2A2A30",o.font="900 26px Inter",o.fillText("REGRAS",70,40),o.font="600 15px Inter",["\u2659 anda 1 casa","\u2656 linha reta","\u2658 em L","\u2657 diagonal","\u2655 tudo","\u2654 1 casa"].forEach((r,a)=>o.fillText(r,24,90+a*40))})));n.add(e);let i=["p","t","c","b","d","r"].map(o=>{let r=Zh(o,!0,2.2);return n.add(r),r}),s=Vt([e,...i]);return(o,r,a)=>{t.g.pose(pt({shR:[70,6],elR:100,shL:[70,6],elL:100,headX:26,lean:8})),I(t.g,null,o,"determinado",{look:[0,.6]}),Yt(e,t.g,"R",[.08,-.06,.08],[-.9,0,0]);let l=e.position;return i.forEach((c,h)=>{let d=o*1.5+h*1.05,u=et((o-375.4-h*.2)/.5);c.position.set(l.x+Math.cos(d)*.28*u,l.y+.1+u*.18+Math.sin(o*3+h)*.03,l.z-.15+Math.sin(d)*.15*u),c.rotation.y=o*2,c.visible=u>0}),Bt.mundo.value=Xt(375.2,375.6,o),s(1,o),qt(n,"#BFE3F7",Bt.mundo.value),P(a,[[0,[.15,1.12,-.45]],[1,[.12,1.1,-.3]]],[0,1.1,.5],r/2.74,0,0),{focus:.5,range:.3,blur:8}}}),B(377.82,379.88,{bg:"#BFE3F7",fov:40},n=>{let t=Ts(n);return(e,i,s)=>{rp(t.T,e,[["e2","e4",377.9],["e7","e5",378.15],["f1","c4",378.4],["b8","c6",378.65],["d1","h5",378.9],["g8","f6",379.1],["h5","f7",379.3]],.2),t.g.pose(Js(e)),I(t.g,null,e,"determinado",{look:[0,.5]});let o=Xt(379.4,379.6,e);return t.op.pose(pt({lean:10+o*40,headX:10+o*30,shL:[40,20],elL:60,shR:[40,20],elR:60})),I(t.op,null,e,o>.5?"choro":"preocupado"),Ir(t,e,"surpreso"),P(s,[[0,[1.3,1.5,-1.3]],[1,[1.15,1.45,-1.15]]],[0,.9,0],i/2.06),Io}}),B(379.88,381.19,{bg:"#BFE3F7",fov:38},n=>{let t=Ts(n,{op:xo});return(e,i,s)=>{t.g.pose(Js(e)),I(t.g,null,e,"feliz");let o=t.T.P.e8,r=Xt(380.2,380.6,e);return o.rotation.x=-r*1.4,t.op.pose(pt({shR:[60,4],elR:30-r*10,lean:14})),I(t.op,null,e,r>.5?"feliz":"preocupado"),Ir(t,e,"surpreso"),P(s,[[0,[-.75,2.05,.05]],[1,[-.65,1.95,0]]],[0,.88,-.3],i/1.31),Io}}),B(381.19,388.48,{bg:"#F2B070",fov:36},n=>{let t=Ts(n,{pub:6});t.op.root.visible=!1;let e=V(n,Cr,0,0,0),i=Ri("\u2726",.15);return i.material.color.set("#FFFFFF"),n.add(i),(s,o,r)=>{let a=381.19+(s-381.19)*.4,l=et((s-381.3)/5.4);e.place($(-3.5,-.9,l),$(-3,-1.2,l),0,.7);let c=s>386;e.pose(c?{shL:[10,9],elL:12}:$e(a,{f:1.7})),c&&Ii(e,"R",_s(e,-.02,.3+Math.max(0,Math.sin((s-386)*3))*.02,.34),{shL:[10,9],elL:12}),I(e,null,s,"desconfiado",{look:[.4,0]}),e.headG.updateMatrixWorld(!0);let h=e.headG.localToWorld(new _(.1,.28,.3));i.position.copy(h);let d=et((s-386.6)/.6);return i.visible=d>0&&d<1,i.scale.setScalar(.15*Math.sin(d*Math.PI)+.001),i.material.rotation=d*3,t.g.pose(Js(s)),I(t.g,null,s,"neutro",{look:[-.6,0]}),Ir(t,s,"surpreso"),P(r,[[0,[.1,1.2,-.25]],[1,[-.05,1.15,-.4]]],[e.root.position.x,1,e.root.position.z],o/7.29),t.pub.forEach(u=>{u.root.visible=u.root.position.distanceTo(r.position)>2.7}),{tint:"#FFD8A8",bloom:.4}}}),B(388.48,391.28,{bg:"#F2B070",fov:36},n=>{let t=Ts(n,{op:Cr});return(e,i,s)=>{let o=pt({shR:[55,6],elR:80,lean:14,headX:10});return Kt(t.op,"caio",e,"desconfiado",o,0,{mouth:void 0,smile:.5,look:[0,-.2]}),t.op.pose(o),t.g.pose(Js(e)),I(t.g,null,e,"neutro",{look:[0,.3]}),Ir(t,e),P(s,[[0,[.4,1.25,.5]],[1,[.35,1.22,.35]]],[0,1.15,-.75],i/2.8),{tint:"#FFD8A8"}}}),B(391.28,396.91,{bg:"#F2B070",fov:34},n=>{let t=Ts(n,{op:Cr}),e=[["e2","e4"],["e7","e5"],["g1","f3"],["b8","c6"],["f1","b5"],["a7","a6"],["b5","c6"],["d7","c6"],["d2","d3"],["f8","d6"],["c1","g5"],["g8","e7"],["f3","h4"],["h7","h6"],["g5","e7"],["d8","e7"],["d1","h5"],["c8","e6"],["h4","f5"],["e6","f5"],["e4","f5"],["e7","g5"],["h5","f7"]].map(([i,s],o)=>[i,s,391.5+o*.2*(1-o*.012)]);return(i,s,o)=>{rp(t.T,i,e,.15),t.g.pose(Js(i)),I(t.g,null,i,"determinado",{look:[0,.5]}),t.op.pose(Js(i,3)),I(t.op,null,i,i>394?"preocupado":"desconfiado",{look:[0,.5]}),Ir(t,i,i>394?"surpreso":"neutro");let r=(i-391.28)*.5;return P(o,[Math.sin(r)*1,2.05,Math.cos(r)*1],[0,.86,0],s/5.63,0,0),{tint:"#FFD8A8"}}}),B(396.91,398.98,{bg:"#F2B070",fov:30},n=>{let t=Ts(n,{op:Cr});return(e,i,s)=>(t.op.pose(pt({shR:[70+Math.sin(e*40)*1.5,6],elR:60,lean:16,headX:22})),I(t.op,null,e,"medo",{look:[0,.6]}),t.g.pose(Js(397)),I(t.g,null,397,"neutro"),Ir(t,397,"surpreso"),t.op.headG.position.y+=0,P(s,[[0,[1,1.2,-.15]],[1,[.92,1.18,-.22]]],[0,1,-.45],i/2.07,0,0),{tint:"#FFD8A8",vig:.5})}),B(398.98,403.34,{bg:"#F2B070",fov:40},n=>{let t=Ts(n,{op:Cr,pub:6}),e=V(n,xo,0,0,0),i=at(.21,.29,.005,"#FBF8EE",0,0,0);n.add(i);let s=t.pub.map(()=>{let o=Be();return n.add(o),o});return(o,r,a)=>{let l=et((o-399)/2.2);e.place($(-3.3,-.6,fn(l)),$(1.75,.9,l),0,1.3);let c=l<1?cn(o,2.6,.8):{shR:[100,10],elR:20,shL:[30,9],elL:20};return Kt(e,"pef",o,"feliz",c,0),e.pose(c),Yt(i,e,"R",[0,-.06,.06],[-1.4,0,0]),t.g.pose(Js(o)),I(t.g,null,o,"surpreso",{look:[-.6,0]}),t.op.pose(pt({lean:30,headX:30})),I(t.op,null,o,"triste"),t.pub.forEach((h,d)=>{h.pose(mt(ve(o,d),oe.filmar)),I(h,null,o,"feliz"),Yt(s[d],h,"R",[0,-.08,.05],[0,0,Math.PI/2]),s[d].tela("views",.05)}),P(a,[[0,[2.2,1.6,2.8]],[1,[1.8,1.5,2.4]]],[-.4,.9,.2],r/4.36),{tint:"#FFD8A8"}}}),B(403.64,411.2,{bg:"#14141C",fov:36},n=>{$n(n,{cor:"#F2C230"}),n.add(new Ce("#FFF0D8",.8));let t=[],e=[];for(let l=0;l<3;l++){let c=ct(.28,.32,.8,"#2A2A34",-1+l,.4,0,{out:.006,seg:24});n.add(c),t.push(c);let h=new Bn("#FFF0C8",2.2,6,.35,.6,1.2);h.position.set(-1+l,3,1),h.target.position.set(-1+l,.9,0),n.add(h,h.target)}let i=qi("10","#2E5EC8");i.rotation.set(-.3,0,0),i.scale.setScalar(1.6),n.add(i);let s=Be();s.scale.setScalar(3),n.add(s),s.tela("views",1);let o=Zn(.035);n.add(o.g),e.push(i,s,o.g);let r=new it(new bt(10,6),new pe({color:"#2A2A34"}));r.rotation.x=-Math.PI/2,n.add(r);let a=new it(new bt(10,5),new pe({color:"#3A3A48"}));return a.position.set(0,2.5,-1.6),n.add(a),(l,c,h)=>(e.forEach((d,u)=>{let f=fn(et((l-[404,405.2,406.6][u])/.5));d.position.set(-1+u,.95+.15*f+Math.sin(l*2+u)*.02,0),d.rotation.y=u===2?l*.5:Math.sin(l+u)*.3,d.visible=f>0,d.scale.setScalar([1.6,3,1][u]*f+.001)}),P(h,[[0,[0,1.45,3.2]],[1,[.3,1.4,2.6]]],[0,1.15,0],c/7.56),{bloom:.12,bloomT:.92,exposure:.8})}),B(411.2,416.06,{bg:"#0C0C12",fov:40},n=>{n.add(new Ce("#FFFFFF",.7)),n.add(new us("#E8E0FF","#2A2A34",.6));let t=[];for(let l=0;l<3;l++){let c=ct(.28,.32,.8,"#2A2A34",-1+l,.4,0,{out:.006,seg:24});c.castShadow=!0,n.add(c)}let e=qi("10","#2E5EC8");e.rotation.set(-.3,0,0),e.scale.setScalar(1.6),e.position.set(-1,1.1,0),n.add(e);let i=Be();i.scale.setScalar(3),i.position.set(0,1.1,0),n.add(i),i.tela("views",1);let s=Zn(.035);s.g.position.set(1,1.1,0),n.add(s.g),n.traverse(l=>{l.isMesh&&(l.castShadow=!0)});let o=new it(new bt(10,6),new pe({color:"#2A2A34"}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);let r=new it(new bt(12,6),new pe({color:"#C8C0B0"}));r.position.set(0,3,-1.6),r.receiveShadow=!0,n.add(r);let a=new Bn("#FFE8C0",60,14,.8,.3,1);return a.position.set(0,.6,4),a.target.position.set(0,1.2,-1.6),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),n.add(a,a.target),(l,c,h)=>(P(h,[[0,[2.4,1.2,1.8]],[.6,[1.6,1.4,-1]],[1,[.4,1.5,-1.3]]],[[0,[0,1.1,0]],[1,[0,2.2,-1.6]]],c/4.86,0,0),{vig:.55})}),B(416.06,421.63,{bg:"#F0C49A",fov:38},n=>{let t=Fi(n,{hora:"tarde",tipo:"casas"}),e=V(n,Et,-4.95,0,Math.PI,.16),i=Be();n.add(i);let s=Vt([e.root,i]);return(o,r,a)=>{let l=-(o-416.06)*.9;e.place(-4.95,l,.16,Math.PI),e.pose(mt($e(o,{f:1.6}),{shL:[64,4],elL:76,shR:[40,12],elR:70,headX:26})),I(e,null,o,"determinado",{look:[0,.6]}),Qe(i,e),i.tela("xadrez",r/5.57);let c=Xt(419.8,420.6,o);return Bt.mundo.value=c,s(c,o),qt(n,"#F0C49A",c),P(a,[[0,[-4.3,1.5,l-2.2]],[1,[-4.4,1.45,l-1.8]]],[-5.2,1.1,l],r/5.57,0,0),{tint:"#FFE0C0"}}}),B(421.63,425.62,{bg:"#F0C49A",fov:40},n=>{let t=Fi(n,{hora:"tarde",tipo:"casas"}),e=V(n,Et,-4.95,0,Math.PI,.16),i=Be();n.add(i);let s=Vt([e.root,i]),o=Ar("#3E7CC8");n.add(o);let r=V(n,xi(1),0,0,0),a=ca("#2E5EB8");n.add(a);let l=V(n,$0,0,0,0);return(c,h,d)=>{let u=-(c-416.06)*.9;e.place(-4.95,u,.16,Math.PI),e.pose(mt($e(c,{f:1.6}),{shL:[64,4],elL:76,shR:[40,12],elR:70,headX:26})),I(e,null,c,"determinado",{look:[0,.6]}),Qe(i,e),i.tela("xadrez",.5+h/8),o.position.set(-2,0,u-6+(c-421.63)*3),o.rotation.y=0,r.place(-4.92,-2.2,.16,Math.PI),r.pose(c>423.3?{shR:[150,4],elR:30,shL:[120,6],elL:40,lean:-6}:ve(c,4)),I(r,null,c,c>423.3?"medo":"neutro",{mouth:c>423.3?{open:.9,round:.6}:void 0});let f=u+13-(c-421.63)*2.3;return a.position.set(-4.05,.16,f),a.rotation.y=Math.PI,a.userData.gira(c*10),l.place(-4.05,f+.05,.16+.42,Math.PI),l.pose({hipL:[70+Math.sin(c*10)*25,6],hipR:[70-Math.sin(c*10)*25,6],knL:70,knR:70,shL:[60,10],shR:[60,10],elL:20,elR:20,lean:20}),I(l,null,c,"bravo"),Bt.mundo.value=1,s(1,c),qt(n,"#F0C49A",1),P(d,[[0,[-3,1.6,u-3.5]],[1,[-3.2,1.55,u-3]]],[-4.8,1,u+1],h/3.99,0,0),{tint:"#FFE0C0"}}}),B(425.62,430.49,{bg:"#F0C49A",fov:34,limpa:!1},n=>{let t=Fi(n,{hora:"tarde",tipo:"casas"}),e=V(n,Et,-4.95,0,Math.PI,.16),i=Be();n.add(i);let s=Vt([e.root,i]),o=ca("#2E5EB8");n.add(o);let r=V(n,$0,0,0,0),a=-(425.62-416.06)*.9;return(l,c,h)=>{let d=l<428.9?.25:1,u=425.62+Math.min(l-425.62,3.3)*.25+Math.max(0,l-428.92),f=a-(Math.min(u,426.35)-425.62)*.9;e.place(-4.95,f,.16,Math.PI);let g=u>426.2;e.pose(g?{shR:[40,50],elR:30,shL:[60,20],elL:110,lean:-8,headX:-10}:mt($e(u,{f:1.6}),{shL:[64,4],elL:76,headX:26})),I(e,null,l,g?"medo":"determinado",{look:g?[.5,0]:[0,.6]});let E=f+3-(u-425.62)*4.2*1.2;if(o.position.set(-4.05,.16,E),o.rotation.y=Math.PI,o.userData.gira(u*10),r.place(-4.05,E+.05,.58,Math.PI),r.pose({hipL:[70+Math.sin(u*10)*25,6],hipR:[70-Math.sin(u*10)*25,6],knL:70,knR:70,shL:[60,10],shR:[60,10],elL:20,elR:20,lean:20}),I(r,null,l,"bravo"),!g)Qe(i,e),i.tela("xadrez",.8);else{let p=et((u-426.2)/.7);i.position.set(-4.8+p*.22,.16+Math.max(.012,1+p*.5-p*p*1.6)+(p>=1?.006:0),f-.3-p*.3),i.rotation.set(p*Math.PI*3.5,p*Math.PI*2,0),i.tela(p>=1?"chamadas":"xadrez",.2)}let m=Xt(428.9,429.2,l);return Bt.mundo.value=1-m,s(1-m,l),qt(n,"#F0C49A",1-m),o.visible=r.root.visible=E>f-1.5,P(h,[[0,[-4.7,3,f-3.4]],[1,[-4.72,2.9,f-3]]],[-4.8,.7,f+.4],c/4.87,0,0),{tint:"#FFE0C0"}}}),B(430.49,431.47,{bg:"#F0C49A",fov:36},n=>{let t=Fi(n,{hora:"tarde",tipo:"casas"}),e=ca("#2E5EB8");n.add(e);let i=V(n,$0,0,0,0);return(s,o,r)=>{let a=-16.3-(s-430.49)*4;e.position.set(-4.1,.16,a),e.rotation.y=Math.PI,e.userData.gira(s*10),i.place(-4.1,a+.05,.58,Math.PI);let l={hipL:[70+Math.sin(s*10)*25,6],hipR:[70-Math.sin(s*10)*25,6],knL:70,knR:70,shL:[60,10],elL:20,shR:[160,20],elR:20,headY:110};return Kt(i,"cic",s,"bravo",l,0),i.pose(l),P(r,[-3.7,1.3,a-3.2],[-4.1,1,a],o,0,0),{tint:"#FFE0C0"}}}),B(431.47,439.98,{bg:"#F0C49A",fov:38},n=>{let t=Fi(n,{hora:"tarde",tipo:"casas"}),e=-(426.4-416.06)*.9,i=V(n,Et,-4.95,e,Math.PI,.16),s=Be();n.add(s),s.position.set(-4.73,.175,e-.6),s.rotation.set(-Math.PI/2,0,.6),s.tela("chamadas",0);let o=at(.08,.015,.005,"#E2443A",0,0,0);return n.add(o),(r,a,l)=>{let c={shR:[55,25],elR:70,lean:10,headX:30,headY:-15};i.pose(c),i.root.updateMatrixWorld(!0);let h=i.arms.R.el.getWorldPosition(new _),d=i.hands.R.getWorldPosition(new _),u=h.clone().lerp(d,.45);return Ii(i,"L",u,c),I(i,null,r,"triste",{look:[.3,.7]}),o.position.copy(u),o.lookAt(h),P(l,[[0,[-4.1,1.65,e-2.3]],[1,[-4.15,1.6,e-2.15]]],[-4.95,.85,e-.3],a/8.51),{tint:"#FFE0C0"}}}),B(439.98,443.52,{bg:"#C8C0B8",fov:40,limpa:!1},n=>{let t=Dt(n,{hora:"noite"});t.tel.visible=!1;let e=V(n,Ro,-2,.85,-Math.PI/2-.4),i=V(n,Se,.4,.6,-2.4),s=tn();s.scale.setScalar(.7),n.add(s);let o=ca("#2E5EB8");n.add(o),o.position.set(-.2,0,-.4),o.rotation.y=.8;let r=Vt([i.root,s]);return(a,l,c)=>{let h=a<440.69?0:a<441.7?1:2;o.visible=h===0,e.root.visible=h===1,i.root.visible=s.visible=h===2,o.userData.gira(a*8),e.pose({shR:[90,0],elR:60+Math.abs(Math.sin(a*14))*40}),I(e,null,a,"preocupado"),i.pose({shL:[30,-40],elL:120,shR:[30,-40],elR:120,headX:10}),I(i,null,a,"triste",{look:[0,.3]}),i.root.updateMatrixWorld(!0);let d=i.hands.L.localToWorld(new _(0,-.04,.04)),u=i.hands.R.localToWorld(new _(0,-.04,.04));return s.position.copy(d).add(u).multiplyScalar(.5),s.quaternion.copy(i.root.quaternion),s.set(0),Bt.mundo.value=1,Bt.alvo.value=h===2?.85:0,r(h===2?1:0,a),qt(n,"#C8C0B8",1),h===0?P(c,[.9,1,.9],[-.2,.5,-.4],(a-439.98)/.7,0,0):h===1?P(c,[[0,[-3.1,1.4,.35]],[1,[-3,1.38,.4]]],[-2,1.15,.85],(a-440.69)/1,0,0):P(c,[[0,[-.4,1.1,-.3]],[1,[-.3,1.05,-.2]]],[.4,.75,.6],(a-441.7)/1.8,0,0),{tint:"#E0DCF4",vig:.5}}})],lp=[B(443.52,456.23,{bg:"#DDE6EE",fov:46,limpa:!1},n=>{let t=Dt(n,{hora:"tarde"}),e=V(n,Et,0,0,0);Qt(e,.64,-.1,-Math.PI/2,.42);let i=t.luzes.sol,s=[V(n,Ro,0,0,0),V(n,Se,0,0,0),V(n,Ro,0,0,0)];s.forEach(r=>Ys(r,.35));let o=ct(.11,.09,.02,"#F4F1EA",0,0,0);return n.add(o),(r,a,l)=>{let c=a/12.71;return e.pose(on(r*4)),bs(e,on(r*4),.44),I(e,null,r,"determinado",{look:[0,.6]}),Qe(t.tel,e),t.tel.tela("xadrez",c),i.position.set(.4+$(-2,2,c),2.3,-2.1),i.color.set(c>.7?"#FF9A60":"#FFF0D0"),i.intensity=c>.85?4:10,t.luzes.LG.intensity=c>.8?2:0,s.forEach((h,d)=>{let u=et((r-(446+d*3.2))/1.6);h.root.visible=u>0&&u<1,h.place($(-1.4,1.4,u),.9-d*.1,0,Math.PI/2),h.pose($e(r*3,{f:2})),I(h,null,r,"triste")}),Yt(o,s[0],"R",[0,-.06,.1],!1),P(l,[[0,[-1.15,2,1.3]],[1,[-1.05,1.9,1.15]]],[.7,.8,-.1],c,0,0),{tint:c>.7?"#FFD8B0":"#FFF4E8"}}}),B(456.23,462.08,{bg:"#E8D8B8",fov:40},n=>{let t=Sr(n),e=Xh();e.position.set(.2,.76,.35),n.add(e);let i=V(n,oi,.2,-.25,0),s=[0,1,2].map(o=>V(n,Gi(o+5,{camisa:["#E57AA0","#3E7CC8","#F2994A"][o]}),-.66+o*.63,1,Math.PI));return(o,r,a)=>(i.pose(mt(ve(o,3),{headY:50})),I(i,null,o,"triste",{look:[.8,0]}),s.forEach((l,c)=>{l.pose(mt(ve(o,c),{shL:[40,-10],shR:[40,-10],elL:60,elR:60})),I(l,null,o,"neutro",{mouth:{open:Math.abs(Math.sin(o*4+c))*.5}})}),e.userData.chama&&(e.userData.chama.scale.y=1+Math.sin(o*15)*.2),P(a,[[0,[-1.45,1.45,.15]],[1,[-1.35,1.4,.1]]],[.25,.95,.05],r/5.85),{tint:"#FFE8C8",sat:.85})}),B(462.08,467.68,{bg:"#DDE6EE",fov:30,limpa:!1},n=>{$n(n,{cor:"#9FD8FF"});let t=Be();return t.scale.setScalar(5),t.position.set(0,1,0),n.add(t),(e,i,s)=>(t.tela("conversa"),t.rotation.y=Math.sin(e*.6)*.15,P(s,[[0,[0,1.05,1.6]],[1,[0,1,1.25]]],[0,.98,0],i/5.6,0,0),{vig:.5})}),B(467.68,472.84,{bg:"#E8D8B8",fov:36},n=>{let t=Sr(n),e=Xh();e.position.set(.2,.76,.35),n.add(e);let i=V(n,oi,.2,-.25,0),s=Be();return n.add(s),(o,r,a)=>{let l=o>471.2,c=l?{lean:20,headX:20,shL:[20,10],shR:[20,10]}:{shR:[80,10],elR:110,headX:10};return Kt(i,"tiago",o,"triste",c,0,{mouth:l?{open:.4,round:1}:void 0}),i.pose(c),l?s.visible=!1:(Yt(s,i,"R",[0,-.06,.06],!1),s.lookAt(a.position),s.tela("audio",(o-467.68)/3.5),s.visible=!0),e.userData.chama&&(e.userData.chama.visible=o<471.7),P(a,[[0,[.8,1.25,1.3]],[1,[.65,1.2,1.1]]],[.2,1,.1],r/5.16),{tint:"#FFE0C0",sat:.7,vig:.5}}}),B(472.84,475.86,{bg:"#C8C0B8",fov:40},n=>{let t=Dt(n,{hora:"noite"});t.luzes.LG.intensity=1.6,t.portaK.abre(1);let e=V(n,An,-1.15,.8,Math.PI/2-.3),i=V(n,Et,0,0,0);Qt(i,.64,-.1,-Math.PI/2,.42);let s=Vt([e.root]);return(o,r,a)=>{let l=mt(oe.bracoCruzado,{tilt:6});return Kt(e,"mae",o,"triste",l,0),e.pose(l),i.pose(on(o)),bs(i,on(o),.44),I(i,null,o,"determinado",{look:[0,.6]}),Qe(t.tel,i),t.tel.tela("xadrez",.7),Bt.mundo.value=1,s(.3,o),qt(n,"#C8C0B8",1),P(a,[[0,[1.4,1.55,-1.3]],[1,[1.3,1.5,-1.2]]],[-.3,1,.45],r/3.02),{tint:"#E8E2FF"}}}),B(475.86,477.53,{bg:"#1A1A22",fov:40},n=>{let t=Dt(n,{hora:"noite"}),e=V(n,An,-1.75,.85,-Math.PI/2+.3),i=V(n,Et,0,0,0);return Qt(i,.64,-.1,-Math.PI/2,.42),(s,o,r)=>{let a=on(s);Kt(i,"gui",s,"tedio",a,0,{look:[0,.6]}),i.pose(a),bs(i,a,.44),Qe(t.tel,i),t.tel.tela("xadrez",.75);let l=et((s-476.4)/.8);return e.place(-1.75-l*.6,.85,0,Math.PI/2*(l>0,-1)-Math.PI),e.pose($e(s,{f:1.5})),I(e,null,s,"triste"),t.portaK.abre(1-et((s-476.8)/.7)),P(r,[[0,[-.15,1.3,-.95]],[1,[-.1,1.28,-.85]]],[.75,1.05,-.1],o/1.67),{tint:"#C8D4FF",exposure:.75}}}),B(477.53,482.48,{bg:"#2A2A34",fov:40,limpa:!1},n=>{let t=Dt(n,{hora:"noite",corte:!0});t.luzes.LG.intensity=1.6;let e=V(n,Et,0,0,0);Qt(e,.64,-.1,-Math.PI/2,.42);let i=V(n,Se,0,0,0);return t.portaD.abre(0),(s,o,r)=>{e.pose(on(s)),bs(e,on(s),.44),I(e,null,s,"determinado",{look:[0,.6]}),Qe(t.tel,e),t.tel.tela("xadrez",.8);let a=et((s-478.2)/3.5);return i.place($(4,1.8,a),$(1.2,.6,a),0,-Math.PI/2-.4),i.pose(a<1?$e(s,{f:1.4,amp:.6}):ve(s,2)),I(i,null,s,"triste",{look:[-.5,.3]}),P(r,[[0,[1.6,1.5,4.2]],[1,[1.7,1.4,3.8]]],[1.6,1,.2],o/4.95,0,0),{tint:"#E8E2FF"}}}),B(482.48,487.35,{bg:"#E8D8B8",fov:38},n=>{let t=Dt(n,{hora:"noite"});t.luzes.LD.intensity=1.6,t.mochila.visible=!1;let e=V(n,Se,0,0,0);Qt(e,3.4,.5,-Math.PI/2+.2,.36);let i=si("#3E7CC8");i.position.set(2.85,.1,.5),i.rotation.y=Math.PI/2,i.scale.setScalar(1.3),n.add(i);let s=tn();s.scale.setScalar(.6),n.add(s);let o=at(.2,.04,.07,"#F2546E",0,0,0,{out:.003});return n.add(o),(r,a,l)=>{let c=et((r-483.5)/2);e.pose(pt({shL:[$(30,70,c),-20],elL:$(110,30,c),shR:[40,-10],elR:80,lean:c*24,headX:20})),I(e,null,r,"triste",{look:[-.3,.7]}),e.root.updateMatrixWorld(!0);let h=e.hands.L.localToWorld(new _(0,-.04,.04));return s.position.lerpVectors(h,new _(2.85,.25,.5),c),s.rotation.set(0,Math.PI/2,0),s.set(0),s.visible=c<.95,o.position.set(2.85,$(.75,.3,et((r-485.6)/.8)),.5),o.visible=r>485.4,P(l,[[0,[2.2,1.2,1.35]],[1,[2.3,1.1,1.2]]],[3.05,.45,.5],a/4.87),{tint:"#FFE0C0"}}}),B(487.35,492.32,{bg:"#E8D8B8",fov:30,perto:!0,limpa:!1},n=>{let t=Dt(n,{hora:"noite"});t.luzes.LD.intensity=1.6,t.mochila.visible=!1;let e=si("#3E7CC8");e.position.set(2.85,.1,.5),e.rotation.y=Math.PI/2,e.scale.setScalar(1.3),n.add(e);let i=zf(.2,.14);i.position.set(2.85,.62,.52),i.rotation.set(-.6,0,0),n.add(i);let s=at(.02,.03,.02,"#C9CED6",0,0,0);return n.add(s),(o,r,a)=>{let l=et((o-489.6)/2.2);return s.position.set(2.85,.43,$(.32,.68,l)),i.visible=l<.7,o<489.6?P(a,[[0,[2.85,1.05,.85]],[1,[2.85,.9,.75]]],[2.85,.42,.5],(o-487.35)/2.25,0,0):P(a,[2.7,.9,.85],[2.85,.42,.5],(o-489.6)/2.7,0,0),{tint:"#FFE0C0",vig:.5}}})],cp=[B(492.32,500.32,{bg:"#DDE6EE",fov:42},n=>{let t=Dt(n,{hora:"tarde"});t.tel.visible=!1;let e=V(n,Et,0,0,0);Qt(e,.64,-.55,-Math.PI/2,.42);let i=Zn(.04);i.g.position.set(.75,.45,.15),n.add(i.g);let s=V(n,An,0,0,0);return t.portaK.abre(1),(o,r,a)=>{e.pose(pt({shR:[40,10],elR:60,shL:[30,10],elL:40,lean:18,headX:30})),I(e,null,o,"determinado",{look:[0,.8]});let l=et((o-492.6)/3);return o>495.8?(Qt(s,.58,.4,-Math.PI/2-.3,.42),bs(s,pt({shL:[50,-20],elL:40,shR:[20,10],elR:30}),.44)):(s.place($(-1.6,.4,l),$(.85,.6,l),0,.6),s.pose($e(o,{f:1.5}))),I(s,null,o,"preocupado",{look:[.3,0]}),P(a,[[0,[-.6,1.5,1.3]],[1,[-.45,1.4,1.1]]],[.6,.85,0],r/8),Io}}),B(500.32,510.64,{bg:"#DDE6EE",fov:36},n=>{let t=Dt(n,{hora:"tarde"});t.tel.visible=!1;let e=V(n,Et,0,0,0);Qt(e,.64,-.55,-Math.PI/2,.42);let i=Zn(.04);i.g.position.set(.75,.45,.15),n.add(i.g);let s=V(n,An,0,0,0);Qt(s,.58,.4,-Math.PI/2-.3,.42);let o=Vt([i.g]);return(r,a,l)=>{e.pose(pt({shR:[40,10],elR:60,shL:[30,10],elL:40,lean:18,headX:30})),I(e,null,r,"determinado",{look:[0,.8]});let c=pt({shL:[50,-20],elL:40,shR:[30,10],elR:60});Kt(s,"mae",r,"preocupado",c,.3),bs(s,c,.44);let h=Xt(502,509,r);return Bt.mundo.value=h,o(h,r),qt(n,"#DDE6EE",h),P(l,[[0,[-.25,1.2,-.3]],[1,[-.12,1.17,-.2]]],[.5,1.05,.4],a/10.32),{...Io,focus:$(5,.3,h),range:.3,blur:h*16}}}),B(510.64,512.06,{bg:"#DDE6EE",fov:22,perto:!0,limpa:!1},n=>{let t=Dt(n,{hora:"tarde"});t.tel.visible=!1;let e=V(n,Et,0,0,0);return Qt(e,.64,-.55,-Math.PI/2,.42),(i,s,o)=>{let r=pt({shR:[40,10],elR:60,lean:18,headX:30});Kt(e,"gui",i,"determinado",r,0,{look:[0,.8]}),e.pose(r),e.headG.updateMatrixWorld(!0);let a=e.headG.localToWorld(new _(0,.28,.25)),l=e.headG.localToWorld(new _(0,.26,.85));return P(o,[l.x,l.y,l.z],[a.x,a.y,a.z],s/1.42,0,0),Io}}),B(512.06,514.84,{bg:"#DDE6EE",fov:40},n=>{let t=Dt(n,{hora:"tarde"});t.tel.visible=!1;let e=V(n,Et,0,0,0);Qt(e,.64,-.55,-Math.PI/2,.42);let i=Zn(.04);i.g.position.set(.75,.45,.15),n.add(i.g);let s=V(n,An,0,0,0);return t.portaK.abre(1),(o,r,a)=>{e.pose(pt({shR:[40,10],elR:60,lean:18,headX:30})),I(e,null,o,"determinado",{look:[0,.8]});let l=et((o-513.2)/1.6);return o<513.2?(s.place(.6,-.35,0,-Math.PI/2-.3),s.pose({lean:30,headX:10,shL:[40,10],shR:[40,10]}),I(s,null,o,"feliz",{blink:1})):(s.place($(.6,-1.2,l),$(-.35,.8,l),0,2.4),s.pose($e(o,{f:1.6})),I(s,null,o,"feliz")),P(a,[[0,[-.75,1.6,-1.4]],[1,[-.65,1.55,-1.3]]],[.6,.95,-.3],r/2.78),Io}}),B(514.84,520.55,{bg:"#1A1A22",fov:30,perto:!0,limpa:!1},n=>{let t=Dt(n,{hora:"tarde"});t.tel.visible=!1;let e=V(n,Et,0,0,0);Qt(e,.64,-.55,-Math.PI/2,.42);let i=Zn(.04);i.g.position.set(.75,.45,.15),n.add(i.g);let s=i.P.g8,o=Vt([s]);return(r,a,l)=>{e.pose(pt({shR:[40,10],elR:60,lean:18,headX:30})),I(e,null,r,"determinado",{look:[0,.8]}),i.move(s,"g8","f6",et((r-515.2)/.6)),Bt.mundo.value=.9,o(1,r),qt(n,"#1A1A22",.9),i.g.updateMatrixWorld(!0);let c=s.getWorldPosition(new _),h=fn(et((r-517.8)/.35));return P(l,[c.x+$(.6,.22,h),c.y+$(.5,.14,h),c.z+$(.6,.2,h)],[c.x,c.y+.03,c.z],a/5.71,0,0),{vig:.55,focus:$(.9,.3,h),range:.15,blur:10}}}),B(520.55,530.8,{bg:"#2A2A34",fov:40,limpa:!1},n=>{let t=Dt(n,{hora:"noite",corte:!0});t.luzes.LG.intensity=1.6,t.luzes.LD.intensity=1.6,t.tel.visible=!1;let e=V(n,Et,0,0,0);Qt(e,.64,-.55,-Math.PI/2,.42);let i=Zn(.04);i.g.position.set(.75,.45,.15),n.add(i.g);let s=V(n,Se,2.1,-.7,Math.PI),o=tn();return o.scale.setScalar(.6),n.add(o),(r,a,l)=>{e.pose(pt({shR:[40,10],elR:60,lean:18,headX:30})),I(e,null,r,"determinado",{look:[0,.8]});let c=Math.floor((r-520.5)/2.3)%2===1;s.pose(mt(ve(r,2),{shL:[70,-10],elL:60,shR:[70,-10],elR:60,headX:c?10:-4})),I(s,null,r,c?"preocupado":"feliz",{mouth:{open:Math.abs(Math.sin(r*8))*.35}}),s.root.updateMatrixWorld(!0);let h=s.hands.L.localToWorld(new _(0,-.04,.04)),d=s.hands.R.localToWorld(new _(0,-.04,.04));return o.position.copy(h).add(d).multiplyScalar(.5),o.quaternion.copy(s.root.quaternion),o.rotateY(Math.PI),o.set(0),r<527?P(l,[[0,[1.5,1.6,4.4]],[1,[1.5,1.5,4]]],[1.5,1,-.3],(r-520.55)/6.45,0,0):P(l,[[0,[2.45,1.05,-1.35]],[1,[2.4,1,-1.3]]],[2.1,.78,-.7],(r-527)/3.8,0,0),{tint:"#E8E2FF"}}})];var Fn={bg:"#121218",far:160},Di=(n,t,e="determinado",i={})=>{n.gui.pose(pt(mt({shR:[48,6],elR:96,shL:[44,6],elL:98,lean:12,headX:16},i.parado?{}:kn(t,1,.3)))),I(n.gui,null,t,e,{look:[0,.45],vivo:!i.parado})},gi=(n,t,e="determinado")=>{n.adv.pose(pt(mt({shR:[40,6],elR:100,shL:[30,6],elL:90,lean:10,headX:14},kn(t,4,.4)))),I(n.adv,null,t,e,{look:[0,.4]})},l5=[["e2","e4",567.3],["c7","c5",567.6],["g1","f3",567.9],["d7","d6",568.2],["d2","d4",568.5],["c5","d4",568.8],["f3","d4",569.1],["a8","a3",569.6],["b2","a3",570.3],["d8","a5",570.8],["c1","d2",571.3]];function c5(n,t,e,i=.3){for(let[s,o,r]of e){let a=n.P[s];if(!a)continue;let l=et((t-r)/i);l<=0||(n.move(a,s,o,l),l>=1&&n.P[o]&&n.P[o]!==a&&(n.P[o].visible=!1))}}function hp(n,t={}){let e=$n(n,{cor:"#C8D4FF"}),i=Zn(.045);i.g.scale.setScalar(t.e||40),n.add(i.g);let s=[];for(let o=0;o<8;o++){let r=new _((o%4-1.5)*5,1,-6+(o>>1)*3),a=new _(((o+2)%4-1.5)*5,1,-4+(o+1>>1)*3),l=new pr(r,r.clone().add(a).multiplyScalar(.5).add(new _(0,4,0)),a),c=new it(new y0(l,24,.06,6),new re({color:"#FFFFFF",transparent:!0,opacity:.8}));n.add(c),s.push(c)}return{V:e,T:i,L:s}}var dp=[B(530.8,534.6,{...Fn,fov:44},n=>{let t=He(n);return(e,i,s)=>{Di(t,e),gi(t,e),Xe(t,e);let o=ln(i/3.8);return P(s,[$(-9,-5,o),$(11,6,o),$(9,7,o)],[0,0,$(-3,-1,o)],i/3.8,0,0),{vig:.4}}}),B(534.6,539.05,{...Fn,fov:40},n=>{let t=He(n);return(e,i,s)=>{Di(t,e),gi(t,e),Xe(t,e);let o=ln(i/4.45);return P(s,[$(-5,-1.6,o),$(6,1.8,o),$(7,2.2,o)],[0,$(0,.95,o),0],i/4.45,0,0),{vig:.45}}}),B(539.05,542.04,{...Fn,fov:28,perto:!0},n=>{let t=He(n,{semGente:!0});return(e,i,s)=>{Di(t,e),gi(t,e),Xe(t,e);let o=600-Math.floor((e-539)*1);return t.rel.userData.set("10:00","09:"+String(59-Math.floor((e-539.05)*2)%60).padStart(2,"0"),Math.floor(e)%2),P(s,[[0,[.95,1.25,.35]],[1,[.82,1.2,.25]]],[.44,1.09,-.02],i/2.99,0,0),{vig:.55,exposure:.9}}}),B(542.04,548.64,{...Fn,fov:32},n=>{let t=He(n);return(e,i,s)=>(Di(t,e),Xe(t,e),t.adv.pose(pt({shR:[50+Math.sin(e*3)*6,4],elR:80,shL:[20,8],elL:30,lean:6,headX:-4})),I(t.adv,null,e,"desconfiado",{look:[.5,-.3]}),P(s,[[0,[.6,1.3,.45]],[1,[.45,1.25,.3]]],[0,1.2,-.62],i/6.6),{vig:.5})}),B(548.64,549.47,{...Fn,fov:34},n=>{let t=He(n);return(e,i,s)=>{Di(t,e),gi(t,e),Xe(t,e),t.juiz._pose=1,t.juiz.place(.95,-.15,.3,-Math.PI/2-.4);let o={shR:[70,4],elR:30,lean:14};return Kt(t.juiz,"juiz",e,"neutro",o,0),t.juiz.pose(o),t.rel.userData.set("10:00","10:00",e>549.1?1:0),P(s,[[0,[1.4,1.5,.9]],[1,[1.3,1.45,.8]]],[.6,1,-.05],i/.83),{}}}),B(549.47,552.8,{...Fn,fov:30},n=>{let t=He(n),e=Vt([t.T.g,t.gui.root]);return(i,s,o)=>{Di(t,i,"determinado"),gi(t,i),Xe(t,i);let r=Xt(549.8,551.8,i);return Bt.mundo.value=1,e(1,i),qt(n,"#121218",1),t.g.children.forEach(a=>{a!==t.mesaF&&a!==t.tab&&(a.visible=r<.5)}),t.jog.concat(t.pub,[t.juiz,t.adv,t.prof]).forEach(a=>{a.root.visible=r<.5}),n.background=new wt().setRGB(.07*(1-r),.07*(1-r),.09*(1-r)),P(o,[[0,[-1.4,1.5,1.8]],[1,[-.8,1.35,1.3]]],[0,1,.2],s/3.33),{vig:.5}}}),B(552.8,559.6,{bg:"#05050A",fov:50},n=>{let t=hp(n),e=V(n,Et,0,7.3,Math.PI);return e.root.scale.setScalar(.95),(i,s,o)=>{e.pose(mt(ve(i,1),{headX:10})),I(e,null,i,"determinado",{look:[0,.3]}),t.L.forEach((a,l)=>{a.material.opacity=.3+.5*Math.abs(Math.sin(i*2+l)),a.visible=i>553+l*.4});let r=s/6.8;return P(o,[[0,[2.5,1.2,9]],[.5,[6,4,2]],[1,[-6,9,-2]]],[[0,[0,1.6,4]],[.5,[0,2,-2]],[1,[0,0,-4]]],r,0,0),{bloom:.4,bloomT:.7}}}),B(559.6,561.2,{...Fn,fov:32,limpa:!1},n=>{let t=He(n),e=Vt([t.tel]),i=[560,560.6,561];return(s,o,r)=>{Di(t,s),gi(t,s),Xe(t,s),J0(t,s,yo(s,i)),t.tel.tela(i.some(l=>s>l&&s<l+.3)?"chamadasBorrado":"apagada"),Bt.mundo.value=1,e(1,s),qt(n,"#121218",1),t.juiz.root.visible=!1;let a=t.tel.position;return P(r,[[0,[-.75,1.05,.55]],[1,[-.65,1,.52]]],[a.x,a.y,a.z],o/1.6,0,0),{focus:.5,range:.2,blur:12,vig:.5}}}),B(561.2,562.3,{bg:"#F7E7C8",fov:44},n=>{let t=Y0(n),e=[];for(let i=0;i<6;i++){let s=V(n,i%2?Qh(i):Zf(i),0,0,0);e.push(s)}return(i,s,o)=>(e.forEach((r,a)=>{let l=2-((i-561.2)*1.2+a*.9)%8;r.place(a%2?.4:-.3,l,0,Math.PI),r.pose($e(i+a,{f:1.8})),I(r,null,i,"feliz")}),P(o,[0,1.6,3.2],[0,1,-4],s/1.1),{})}),B(562.3,562.84,{bg:"#BFE3F7",fov:40},n=>{let t=Y0(n),e=V(n,Se,0,2.2,0);return(i,s,o)=>(e.pose(mt(ve(i,2),{headY:Math.sin(i*3)*20})),I(e,null,i,"preocupado",{look:[0,-.2]}),P(o,[.4,.9,3.6],[0,.7,2.2],s/.54),{})}),B(562.84,563.2,{bg:"#F4F4F0",fov:38},n=>{let t=X0(n),e=V(n,An,-.05,-.42,0),i=Be();return n.add(i),(s,o,r)=>(e.pose({shR:[130,-10],elR:150,shL:[30,10],elL:60,headZ:10}),I(e,null,s,"preocupado"),Yt(i,e,"R",[0,-.04,.06]),i.tela("bloqueio"),P(r,[.9,1.35,1.6],[0,1.15,-.3],o/.36),{})}),B(563.2,563.65,{bg:"#F7E7C8",fov:44},n=>{let t=Pi(n),e=[];for(let i=0;i<4;i++){let s=V(n,Qh(i),-1.4+i*.9,-2,0),o=V(n,Gi(i+1),-1.1+i*.9,-2.1,0);e.push(s,o)}return(i,s,o)=>(e.forEach((r,a)=>{r.pose(mt(ve(i,a),a%2?oe.bracoCruzado:{shR:[90,10],elR:30})),I(r,null,i,"feliz")}),P(o,[0,1.3,1.5],[0,.8,-2],s/.45),{})}),B(563.65,565.09,{bg:"#F7E7C8",fov:38},n=>{let t=Pi(n),e=V(n,Se,0,0,0);Qt(e,2.2,1.3,Math.PI,.32);let i=xr("#9B6CC4");i.position.set(2.2,0,1.3),i.rotation.y=Math.PI,n.add(i);let s=tn();s.scale.setScalar(.6),n.add(s);let o=si("#3E7CC8");return n.add(o),(r,a,l)=>{let c=et((r-563.9)/.9);e.pose(pt({shL:[$(60,30,c),-10],elL:80,shR:[40,-10],elR:90,lean:10,headX:24})),I(e,null,r,"triste",{look:[0,.6]}),Yt(o,e,"R",[-.05,-.1,.18],!1),e.root.updateMatrixWorld(!0);let h=e.hands.L.localToWorld(new _(0,-.04,.04));return s.position.lerpVectors(h,o.position,c),s.quaternion.copy(e.root.quaternion),s.set(0),s.visible=c<.95,P(l,[[0,[1.4,1,.3]],[1,[1.5,.95,.45]]],[2.2,.55,1.3],a/1.44),{sat:.7}}}),B(565.09,567.2,{...Fn,fov:26,limpa:!1},n=>{let t=He(n),e=Vt([t.gui.root]);return t.adv.root.visible=!1,(i,s,o)=>(Di(t,565.1,"determinado",{parado:!0}),Xe(t,i),Bt.mundo.value=1,e(.6,i),qt(n,"#121218",1),t.juiz.root.visible=!1,P(o,[[0,[-.4,1.4,-.42]],[1,[-.34,1.38,-.34]]],[0,1.27,.62],s/2.11,0,0),{vig:.55})}),B(567.2,571.08,{...Fn,fov:30},n=>{let t=He(n),e=Vt([t.T.g]);return(i,s,o)=>{c5(t.T,i,l5),Di(t,i),gi(t,i),Xe(t,i,"tensao"),Bt.mundo.value=.9,e(.5,i),qt(n,"#121218",.9);let r=(i-567.2)*.3;return P(o,[Math.sin(r)*.9+.3,1.45,Math.cos(r)*.4-.1],[0,1.07,0],s/3.88,0,0),{vig:.5}}}),B(571.08,573.09,{bg:"#05050A",fov:50},n=>{let t=hp(n);return(e,i,s)=>(t.L.forEach((o,r)=>{let a=et((e-571.3-r*.1)/.3);o.material.color.setRGB(1,1-a,1-a),o.visible=!0}),P(s,[[0,[4,5,8]],[1,[2,4,6]]],[0,1,-2],i/2.01,0,0),{bloom:.5,bloomT:.6})}),B(573.09,575.12,{...Fn,fov:38},n=>{let t=He(n);return(e,i,s)=>(Di(t,e),gi(t,e),Xe(t,e,"tensao"),t.pub.forEach((o,r)=>{o.pose({shL:[100,-10],elL:140,shR:[100,-10],elR:140,headX:4}),I(o,null,e,"medo")}),P(s,[[0,[-1.5,1.4,.8]],[1,[-1.4,1.35,1.1]]],[-.5,1.3,3],i/2.03),{vig:.5})}),B(575.12,579.01,{...Fn,fov:26,perto:!0},n=>{let t=He(n),e=Vt([t.T.g]),i=t.T.P.d1;return(s,o,r)=>{Di(t,s),gi(t,s,"medo"),Xe(t,s,"tensao"),t.T.move(i,"d1","f7",ln(et((s-576.3)/2.6))),Bt.mundo.value=.95,e(1,s),qt(n,"#121218",.95),t.T.g.updateMatrixWorld(!0);let a=i.getWorldPosition(new _);return P(r,[a.x+.35,a.y+.18,a.z+.3],[a.x,a.y+.03,a.z],o/3.89,0,0),{vig:.55,focus:.45,range:.15,blur:10}}}),B(579.01,580.24,{...Fn,fov:28,perto:!0},n=>{let t=He(n),e=t.T.P.d1,i=t.T.P.e8;return(s,o,r)=>{let a=pt({shR:[60,6],elR:60,lean:16,headX:20});Kt(t.gui,"gui",s,"determinado",a,0,{look:[0,.5]}),t.gui.pose(a),gi(t,s,"medo"),Xe(t,s,"tensao"),t.T.move(e,"d1","f7",1),i.rotation.x=Xt(579.5,580.1,s)*1.45,t.T.g.updateMatrixWorld(!0);let l=i.getWorldPosition(new _);return P(r,[l.x+.3,l.y+.12,l.z+.35],[l.x,l.y+.03,l.z],o/1.23,0,0),{vig:.5}}}),B(580.24,584.61,{...Fn,fov:42},n=>{let t=He(n),e=Tr(n,0,0,0,{w:8,d:6,h:6,n:140}),i=new an("#FFFFFF",0,12,1.5);return i.position.set(-2,3,4),n.add(i),t.T.P.e8.rotation.x=1.45,(s,o,r)=>(Xe(t,s,"aplauso"),t.jog.forEach((a,l)=>{a.pose(pt({shL:[70,-10],shR:[70,-10],elL:60+Math.abs(Math.sin(s*9+l))*30,elR:60+Math.abs(Math.sin(s*9+l))*30})),I(a,null,s,"feliz")}),t.gui.place(0,.62,.3,Math.PI),t.gui.pose(mt(oe.comemora,Vi(s,1.5))),I(t.gui,null,s,"rindo"),gi(t,s,"triste"),e(s),i.intensity=Math.sin(s*23)>.85?40:0,P(r,[[0,[2.5,2.2,4.5]],[1,[1.8,1.8,3.6]]],[0,1.1,.3],o/4.37),{vig:.3,bloom:.3})}),B(584.61,587.84,{...Fn,fov:36},n=>{let t=He(n),e=Xs(1.6);n.add(e);let i=Tr(n,-2,0,2.5,{w:4,d:3,h:4}),s=t.pub.slice(0,5).map(()=>{let o=Be();return n.add(o),o});return(o,r,a)=>(Xe(t,o,"aplauso"),gi(t,o),t.prof.place(-2.2,2,0,Math.PI*.85),t.prof.pose({shL:[70,-10,-60],elL:100,shR:[70,-10,-60],elR:100,bob:Math.abs(Math.sin(o*6))*.01}),I(t.prof,null,o,"choro"),Yt(e,t.prof,"R",[.08,-.05,.1],!1),t.pub.slice(0,5).forEach((l,c)=>{l.pose(mt(ve(o,c),oe.filmar)),Yt(s[c],l,"R",[0,-.08,.05],[0,0,Math.PI/2]),s[c].tela("views",.1)}),i(o),P(a,[[0,[-1,1.5,.6]],[1,[-1.2,1.45,.8]]],[-2.2,1.2,2],r/3.23),{vig:.3})}),B(587.84,591.92,{...Fn,fov:34,limpa:!1},n=>{let t=He(n),e=Tr(n,0,0,.6,{w:3,d:2,h:3});return(i,s,o)=>{Xe(t,i,"aplauso"),t.gui.place(0,.62,.3,Math.PI);let r=et((i-588.8)/1.2);return t.gui.pose({shL:[$(10,64,r),4],elL:$(20,76,r),shR:[20,10],elR:20,headX:$(0,22,r)}),I(t.gui,null,i,"feliz",{look:[0,r*.5]}),r>0&&(Yt(t.tel,t.gui,"L",[0,-.07,.06],!1),t.gui.headG.updateMatrixWorld(!0),t.tel.lookAt(t.gui.headG.localToWorld(new _(0,.2,.25))),t.tel.tela("apagada")),e(i),t.adv.root.visible=!1,P(o,[[0,[-.5,1.5,-.6]],[1,[-.4,1.45,-.45]]],[0,1.25,.62],s/4.08),{vig:.35}}}),B(591.92,599.44,{...Fn,fov:34,limpa:!1},n=>{let t=He(n),e=Vt([t.gui.root]);return(i,s,o)=>{Xe(t,i,"aplauso"),t.gui.place(0,.62,.3,Math.PI),t.gui.pose({shL:[64,4],elL:76,shR:[20,10],elR:20,headX:22}),Yt(t.tel,t.gui,"L",[0,-.07,.06],!1),t.gui.headG.updateMatrixWorld(!0),t.tel.lookAt(t.gui.headG.localToWorld(new _(0,.2,.25)));let r=i>595.84;if(t.tel.tela(r?"mensagemMae":"chamadas",r?et((i-595.9)/2.8):et((i-592)/1.6)),t.adv.root.visible=!1,i<597.4){t.gui.headG.visible=!1;let a=t.gui.headG.localToWorld(new _(0,.25,.1)),l=t.tel.position;P(o,[a.x,a.y,a.z],[l.x,l.y,l.z],(i-591.92)/5.5,0,0),I(t.gui,null,i,"feliz")}else t.gui.headG.visible=!0,I(t.gui,null,i,"medo",{look:[0,.5]}),Bt.alvo.value=Xt(597.5,598.6,i),e(.6,i),P(o,[[0,[-.4,1.45,-.4]],[1,[-.3,1.42,-.3]]],[0,1.3,.3],(i-597.4)/2.04,0,0);return{vig:.4}}}),B(599.44,602.8,{...Fn,fov:38},n=>{let t=He(n),e=Xs(1.5);n.add(e);let i=at(.8,.05,.5,"#F4F1EA",1.9,.75,-.2,{out:.006});return n.add(i),n.add(tt(.7,.72,.4,"#E8E2D6",1.9,.36,-.2)),(s,o,r)=>{Xe(t,s,"aplauso");let a=et((s-600.6)/1.8);{let c=et(a/.3),h=et((a-.3)/.7),d=a<.3?$(1.4,.95,c):$(.95,-4.2,h),u=a<.3?$(-.2,1.15,c):$(1.15,1.3,h);t.gui.place(d,u,Math.abs(d)<2.15&&Math.abs(u)<1.65?.3:0,a>0?-.7:Math.PI/2)}t.juiz.root.visible=!1,t.gui.pose(a>0?cn(s,3,1):{shR:[60,4],elR:30}),I(t.gui,null,s,"medo"),t.adv.root.visible=!1;let l=Xt(601,601.5,s);return e.position.set(1.85+l*.12,.775-l*0,-.2),e.rotation.z=-l*1.5+Math.sin(s*20)*.1*(l<.1&&s>600.6?1:0),P(r,[[0,[2.6,1.1,.8]],[1,[2.5,1.05,.7]]],[1.85,.9,-.2],o/3.36),{vig:.35}}}),B(602.8,605.09,{bg:"#BFE3F7",fov:40},n=>{let t=Fi(n,{hora:"dia",tipo:"lojas"}),e=V(n,Et,0,0,0),i=Ar("#E2443A");return n.add(i),(s,o,r)=>{let a=$(5.5,-4.95,o/2.29);e.place(a,.5,a>4||a<-4?.16:0,-Math.PI/2),e.pose(cn(s,3.2,1)),I(e,null,s,"medo");let l=et((s-603.4)/.6);return i.position.set(-1.6,0,$(-12,-2.2,fn(l))),i.rotation.x=l<1?-l*.05:0,P(r,[a+.5,1.2,5],[a,.9,.5],o/2.29,0,0),{}}}),B(605.09,607.45,{bg:"#BFE3F7",fov:40},n=>{let t=Fi(n,{hora:"dia",tipo:"casas",incl:8}),e=V(n,Et,0,0,0);return t.g.add(e.root),(i,s,o)=>{let r=$(4,-6,s/2.36);e.place(-4.95,r,.16,Math.PI),e.pose(mt(cn(i,2.6,.9),{lean:18})),I(e,null,i,"medo",{mouth:{open:.6,round:.5}});let a=t.w(-4.95,1,r);return P(o,[a[0]+2.5,a[1]+1.2,a[2]+3],a,s/2.36,0,0),{}}}),B(607.45,609.44,{bg:"#F7E7C8",fov:44},n=>{let t=Y0(n),e=V(n,Et,0,0,0);return(i,s,o)=>{let r=$(2.5,-8,s/1.99);return e.place(0,r,0,Math.PI),e.pose(cn(i,3,1)),I(e,null,i,"medo"),P(o,[[0,[.6,1.5,r+2.5]],[1,[.5,1.45,r+2.2]]],[0,1.2,r-2],s/1.99,0,0),{}}}),B(609.44,615.83,{bg:"#F7E7C8",fov:44},n=>{let t=Pi(n,{empilhadas:!0}),e=V(n,Se,0,0,0);Qt(e,2.6,-2.3,-Math.PI*.8,.32);let i=si("#3E7CC8");return n.add(i),(s,o,r)=>(t.porta.abre(Xt(609.5,610.3,s)),e.pose(pt({shL:[40,-30],elL:100,shR:[40,-30],elR:100,headY:-40,knL:88+Math.sin(s*3)*15,knR:88-Math.sin(s*3)*15})),I(e,null,s,"triste",{look:[-.6,0]}),Yt(i,e,"R",[-.08,-.1,.18],!1),s<612.9?P(r,[[0,[-3,1.5,2]],[1,[-2.2,1.5,1.6]]],[[0,[-1.5,.4,1.8]],[1,[-1,1.6,-2.8]]],(s-609.44)/3.46):P(r,[[0,[-1.6,1.6,-1.4]],[1,[-1,1.5,-1.8]]],[-1,1.8,-3],(s-612.9)/2.93),{})}),B(615.83,620.96,{bg:"#F7E7C8",fov:40},n=>{let t=Pi(n,{empilhadas:!0}),e=V(n,Se,0,0,0);Qt(e,2.6,-2.3,-Math.PI*.8,.32);let i=si("#3E7CC8");return n.add(i),(s,o,r)=>{e.pose(pt({shL:[40,-30],elL:100,shR:[40,-30],elR:100,headY:-40,knL:88+Math.sin(s*3)*15,knR:88-Math.sin(s*3)*15})),I(e,null,s,"triste",{look:[-.6,0]}),Yt(i,e,"R",[-.08,-.1,.18],!1);let a=ln(o/5.13);return P(r,[$(-1.8,1.4,a),$(1.3,.85,a),$(1.2,-1.1,a)],[2.6,.55,-2.3],o/5.13,0,0),{tint:"#FFF0DC"}}}),B(620.96,623.36,{bg:"#F7E7C8",fov:40},n=>{Pi(n,{empilhadas:!0}).porta.abre(1);let e=V(n,Et,-2.95,2,Math.PI/2);return(i,s,o)=>{let r=mt(oe.desculpa,{lean:12,bob:Math.sin(i*6)*.01});return Kt(e,"gui",i,"preocupado",r,0),e.pose(r),P(o,[[0,[-1.4,1.35,1.2]],[1,[-1.55,1.32,1.35]]],[-2.95,1.2,2],s/2.4),{tint:"#FFF0DC"}}}),B(623.36,625.12,{bg:"#F7E7C8",fov:32},n=>{let t=Pi(n,{empilhadas:!0}),e=V(n,Se,0,0,0);Qt(e,2.6,-2.3,-Math.PI*.8,.32);let i=si("#3E7CC8");return n.add(i),(s,o,r)=>{let a=pt({shL:[50,-40],elL:110,shR:[50,-40],elR:110,headY:-60});return Kt(e,"davi",s,"triste",a,0,{look:[-.8,0]}),e.pose(a),Yt(i,e,"R",[-.08,-.1,.18],!1),P(r,[[0,[1.6,.85,-1.6]],[1,[1.7,.82,-1.7]]],[2.6,.65,-2.3],o/1.76),{tint:"#FFF0DC"}}}),B(625.12,635.44,{bg:"#0C0C12",fov:40},n=>{$n(n,{cor:"#FFFFFF"}),n.add(new Ce("#FFFFFF",.8));let t=Xs(2.4),e=qi("10","#2E5EC8");e.rotation.x=0,e.scale.setScalar(2.4);let i=Xi({});i.scale.setScalar(1.6);let s=V(n,Se,0,0,0);n.add(t,e,i);let o=xr("#F2C230");n.add(o),Qt(s,0,0,0,.32);let r=[0,1,2].map(c=>{let h=[0,1,0];return{cp:h,f:Tn(n,h,{n:40,cor:"#E8F0FF",r:1.2,tam:.04,g:-.8})}}),a=[626.44,627.54,629.44],l=[627.14,629.04,630.7];return(c,h,d)=>([t,e,i].forEach((u,f)=>{u.visible=c>=a[f]-.4&&c<l[f],u.position.set(0,[.45,1,.95][f],0),u.rotation.y=c;let g=et((c-l[f])/.8);r[f].f(g>0&&g<1?g:0)}),s.root.visible=o.visible=c>630.7,s.pose(pt({shL:[40,-30],elL:100,shR:[40,-30],elR:100})),I(s,null,c,"triste",{look:[0,.2]}),P(d,[[0,[0,1.15,1.8]],[1,[0,.95,1.5]]],[0,c>630.7?.55:1,0],h/10.32,0,0),{vig:.55,bloom:.3})}),B(635.44,638.75,{bg:"#F7E7C8",fov:30,perto:!0,limpa:!1},n=>{let t=Pi(n,{empilhadas:!0}),e=V(n,Et,1.3,-1.5,-2.2),i=Be();return n.add(i),(s,o,r)=>{let a=s>637.9;e.pose(a?{shL:[10,20],elL:30}:{shL:[64,4],elL:76,headX:22}),I(e,null,s,"triste",{look:[0,.5]}),a?i.visible=!1:(Yt(i,e,"L",[0,-.07,.06],!1),e.headG.updateMatrixWorld(!0),i.lookAt(e.headG.localToWorld(new _(0,.2,.25))),i.tela(s>637?"apagada":"chamadas",1,s>637?0:1));let l=i.position,c=gs(e.root,1,1.25,-.55);return P(r,[[0,c],[1,[c[0]*.95+l.x*.05,c[1],c[2]*.95+l.z*.05]]],[l.x,l.y+.05,l.z],o/3.31,0,0),{tint:"#FFF0DC"}}}),B(638.75,646.56,{bg:"#F7E7C8",fov:38},n=>{let t=Pi(n,{empilhadas:!0}),e=V(n,Se,0,0,0);Qt(e,2.6,-2.3,-Math.PI*.8,.32);let i=si("#3E7CC8");n.add(i);let s=V(n,Et,0,0,0),o=Vt([e.root,s.root]);return(r,a,l)=>{let c=Xt(638.9,640.2,r);s.place($(1.3,2.05,c),$(-1.5,-1.62,c),0,-2.2+.3),s.pose(c<1?mt(ve(r,1),{bob:-c*.2,knL:c*60,knR:c*60}):oe.sentadoChao),I(s,null,r,"preocupado",{look:[.3,.2]}),e.pose(pt({shL:[50,-40],elL:110,shR:[50,-40],elR:110,headY:$(-60,0,Xt(642,643,r))})),I(e,null,r,"triste",{look:[0,.2]}),Yt(i,e,"R",[-.08,-.1,.18],!1);let h=Xt(643.3,644.8,r);return Bt.mundo.value=h,Bt.ouro.value=1,o(h,r),qt(n,"#F7E7C8",h,1),P(l,[[0,[.4,1.1,-.3]],[1,[.9,1,-.5]]],[2.3,.65,-1.95],a/7.81),{bloom:.2+h*.3,bloomT:.8}}})];var Zi=(n,t=1,e="#F7E7C8")=>{Bt.mundo.value=t,Bt.ouro.value=1,qt(n,e,t,1)},As={bloom:.45,bloomT:.8};function Ss(n){let t=Pi(n,{empilhadas:!0}),e=V(n,Se,0,0,0);Qt(e,2.6,-2.3,-Math.PI*.8,.32);let i=V(n,Et,2.05,-1.62,-1.9),s=si("#3E7CC8");n.add(s);let o=tn();o.scale.setScalar(.8),n.add(o);let r=Vt([e.root,i.root,s,o]);return{S:t,d:e,g:i,m:s,f:o,set:r}}var Dr=(n,t={})=>pt({shL:[50,-40],elL:110,shR:[50,-40],elR:110,...t}),up=[B(646.56,648,{bg:"#F7E7C8",fov:30},n=>{let t=Ss(n);return t.f.visible=!1,(e,i,s)=>{let o=oe.sentadoChao;Kt(t.g,"gui",e,"preocupado",o,0,{look:[.5,-.3]}),t.g.pose(o),t.d.pose(Dr(e)),I(t.d,null,e,"triste"),Yt(t.m,t.d,"R",[-.08,-.1,.18],!1),Zi(n),t.set(1,e),t.g.headG.updateMatrixWorld(!0);let r=t.g.headG.localToWorld(new _(0,.26,.2)),a=t.g.headG.localToWorld(new _(-.15,.3,.95));return P(s,[a.x,a.y,a.z],[r.x,r.y,r.z],i/1.44,0,0),As}}),B(648,650.32,{bg:"#F7E7C8",fov:32},n=>{let t=Ss(n);return t.f.visible=!1,(e,i,s)=>{let o=Dr(e,{shL:[60,-50],elL:125,shR:[60,-50],elR:125,lean:6});Kt(t.d,"davi",e,"triste",o,0,{look:[-.3,.2]}),t.d.pose(o);{let l=gs(t.d.root,.21,.3);t.m.position.set(l[0],l[1],l[2]),t.m.quaternion.copy(t.d.root.quaternion),t.m.scale.setScalar(.8)}t.g.pose(oe.sentadoChao),I(t.g,null,e,"preocupado"),Zi(n),t.set(1,e),t.d.headG.updateMatrixWorld(!0);let r=t.d.headG.getWorldPosition(new _),a=gs(t.d.root,1.05,.78,.35);return P(s,[[0,a],[1,[$(a[0],r.x,.12),a[1],$(a[2],r.z,.12)]]],[r.x,r.y-.12,r.z],i/2.32),As}}),B(650.32,652.48,{bg:"#F7E7C8",fov:36},n=>{let t=Ss(n);return t.f.visible=!1,(e,i,s)=>{let o=Xt(650.6,651.4,e),r=mt(oe.sentadoChao,{shR:[$(-30,70,o),10],elR:$(10,15,o)});return Kt(t.g,"gui",e,"feliz",r,0),t.g.pose(r),t.d.pose(Dr(e)),I(t.d,null,e,"surpreso",{look:[.3,.4]}),Yt(t.m,t.d,"R",[-.08,-.1,.18],!1),Zi(n),t.set(1,e),P(s,[[0,[1,.9,-1]],[1,[1.1,.85,-1.1]]],[2.3,.55,-1.95],i/2.16),As}}),B(652.48,658.32,{bg:"#F7E7C8",fov:30,perto:!0,limpa:!1},n=>{let t=Ss(n),e=at(.02,.03,.02,"#C9CED6",0,0,0);return n.add(e),(i,s,o)=>{t.d.pose(Dr(i,{shL:[55,-20],elL:80,shR:[40,-30],elR:100})),I(t.d,null,i,"vergonha",{look:[0,.6]}),Yt(t.m,t.d,"R",[-.08,-.1,.18],!1),t.m.updateMatrixWorld(!0);let r=t.m.getWorldPosition(new _),a=et((i-652.9)/1);e.position.set(r.x,r.y+.12,r.z),e.position.x+=$(.12,-.12,a);let l=et((i-654)/1.2),c=et((i-656.8)/.8);t.g.pose(mt(oe.sentadoChao,{shR:[70,10],elR:20,shL:[70,-10],elL:30})),I(t.g,null,i,"preocupado",{look:[0,.5]}),t.g.root.updateMatrixWorld(!0);let h=t.g.hands.R.localToWorld(new _(0,-.05,.05)),d=r.clone().add(new _(0,.1+l*.15,0));t.f.position.lerpVectors(d,h,c),t.f.quaternion.copy(t.g.root.quaternion),t.f.rotateY(Math.PI),t.f.rotateX(-.3*c),t.f.set(i>657.6?et((i-657.6)/.7)*.5:0),t.f.rotation.z+=Math.sin(i*9)*.03*(1-c),t.f.visible=l>0,Zi(n),t.set(1,i);let u=i<656.8?[r.x,r.y+.1,r.z]:[t.f.position.x,t.f.position.y,t.f.position.z],f=gs(t.d.root,1,.6,.75);return P(o,[$(f[0],u[0],.25),f[1],$(f[2],u[2],.25)],u,s/5.84,0,0),As}}),B(658.32,674.56,{bg:"#F7E7C8",fov:30,perto:!0,limpa:!1},n=>{pn(n,{r:4,pos:[1,3,4],ki:1,hemi:1.6});let t=tn();t.scale.setScalar(4),t.position.set(0,1,0),n.add(t),t.set(1);let e=.3*4,i=.225*4,s=(a,l)=>[(a-.5)*e,1+(.5-l)*i],o=Tn(n,[0,1.55,.1],{n:50,cor:"#FFE08A",r:.5,tam:.02}),r=[[658.32,[.5,.5],1.25],[660.9,[.45,.78],.62],[663.2,[.32,.55],.55],[663.9,[.64,.62],.5],[665.3,[.64,.5],.3],[667.4,[.32,.4],.45],[669.9,[.5,.17],.55],[672.3,[.5,.17],.5],[674.56,[.5,.3],.9]];return(a,l,c)=>{let h=r[0],d=r[0];for(let M=0;M<r.length-1;M++)a>=r[M][0]&&(h=r[M],d=r[M+1]);let u=ln(et((a-h[0])/Math.max(.4,Math.min(1.2,d[0]-h[0])))),f=$(h[1][0],d[1][0],u),g=$(h[1][1],d[1][1],u),E=$(h[2],d[2],u),[m,p]=s(f,g),b=Xt(672.3,673.4,a);return t.set(1,Math.round(b*10)/10),o(b>0?(a-672.3)/2%1:0),t.rotation.z=Math.sin(a*.5)*.01,P(c,[m+Math.sin(a*.3)*.02,p,E],[m,p,0],l/16.24,0,0),{bloom:.3+b*.3,bloomT:.8,vig:.35}}}),B(674.56,678.72,{bg:"#F7E7C8",fov:34},n=>{let t=Ss(n);return t.f.set(1),(e,i,s)=>{let o=Dr(e,{shL:[30,10],elL:40,shR:[30,10],elR:40});Kt(t.d,"davi",e,"vergonha",o,.3,{look:[.3,.3]}),t.d.pose(o),Yt(t.m,t.d,"R",[-.08,-.1,.18],!1),t.g.pose(mt(oe.sentadoChao,{shR:[60,10],elR:30,shL:[60,-10],elL:30})),I(t.g,null,e,"feliz",{lagrima:!0}),t.g.root.updateMatrixWorld(!0);let r=t.g.hands.L.localToWorld(new _(0,-.05,.05)),a=t.g.hands.R.localToWorld(new _(0,-.05,.05));return t.f.position.copy(r).add(a).multiplyScalar(.5),t.f.quaternion.copy(t.g.root.quaternion),t.f.rotateX(-.4),Zi(n),t.set(1,e),P(s,[[0,[1.5,1,-.9]],[1,[1.6,.95,-1.1]]],[2.4,.7,-2.1],i/4.16),As}}),B(678.72,681.4,{bg:"#BFE3F7",fov:40},n=>{let t=q0(n),e=V(n,Se,4.4,.2,Math.PI/2),i=V(n,Et,3.4,.5,Math.PI/2),s=Vt([e.root,i.root]),o=To(.35);return n.add(o),o.position.set(5.5,0,.2),(r,a,l)=>(e.pose(mt(Vi(r,2.2),{shR:[40,30],elR:30})),I(e,null,r,"rindo",{lingua:!0,pisca1:!0}),i.pose(mt(oe.comemora,Vi(r,1.6))),I(i,null,r,"rindo"),Zi(n,1,"#BFE3F7"),s(1,r),P(l,[[0,[3.9,.9,4.2]],[1,[3.9,.85,3.7]]],[3.9,.7,.3],a/2.68),{...As,vig:.45})}),B(681.4,693.52,{bg:"#0C0A06",fov:36},n=>{$n(n,{cor:"#F2C230"}),n.add(new Ce("#FFF0D8",.8));let t=O0(2.2);t.position.set(0,1,0),n.add(t);let e=Xs(1.6),i=qi("10","#2E5EC8"),s=Xi({});i.rotation.x=0,i.scale.setScalar(1.6),s.scale.setScalar(.9),n.add(e,i,s);let o=Tn(n,[0,1,0],{n:50,cor:"#FFD86A",r:1.2,tam:.025});return(r,a,l)=>{t.set(1200,.5+.3*Math.sin(r*2)),t.rotation.y=Math.sin(r*.6)*.15,o((r-681.4)/3%1);let c=[687.95,689.02,689.71];return[e,i,s].forEach((h,d)=>{let u=r*.5+d*2.09,f=et((r-c[d])/1);h.position.set(Math.cos(u)*1,1+Math.sin(u)*.5,Math.sin(u)*.4-.3),h.scale.setScalar([1.6,1.6,.9][d]*(1-f)+.001),h.visible=r>684&&f<1,h.rotation.y=r}),P(l,[[0,[0,1.05,2.4]],[1,[0,1.02,1.6]]],[0,1,0],a/12.12,0,0),{bloom:.35,bloomT:.8,vig:.5}}}),B(693.52,696.64,{bg:"#F7E7C8",fov:30},n=>{let t=Ss(n);return t.f.set(1),(e,i,s)=>{let o=mt(oe.sentadoChao,{shR:[60,10],elR:30,shL:[60,-10],elL:30});Kt(t.g,"gui",e,"feliz",o,0,{lagrima:!0,look:[.5,-.3],olhosAbertos:!0}),t.g.pose(o),t.d.pose(Dr(e)),I(t.d,null,e,"feliz");{let c=gs(t.d.root,.21,.3);t.m.position.set(c[0],c[1],c[2]),t.m.quaternion.copy(t.d.root.quaternion),t.m.scale.setScalar(.8)}t.g.root.updateMatrixWorld(!0);let r=t.g.hands.L.localToWorld(new _(0,-.05,.05));t.f.position.copy(r),t.f.quaternion.copy(t.g.root.quaternion),Zi(n),t.set(1,e),t.g.headG.updateMatrixWorld(!0);let a=t.g.headG.localToWorld(new _(0,.26,.2)),l=t.g.headG.localToWorld(new _(-.25,.32,1.15));return P(s,[l.x,l.y,l.z],[a.x,a.y,a.z],i/3.12,0,0),As}}),B(696.64,699.92,{bg:"#F7E7C8",fov:38},n=>{let t=Ss(n);return t.f.set(1),t.d.place(2.6,-2.3,.32,-Math.PI*.8),t.m.position.set(2.3,0,-2.6),(e,i,s)=>{let o=pt({shL:[80,-10],elL:40,shR:[80,-10],elR:40});Kt(t.d,"davi",e,"feliz",o,0,{look:[0,.2]}),t.d.pose(o),t.d.root.updateMatrixWorld(!0);let r=t.d.hands.L.localToWorld(new _(0,-.03,.05)),a=t.d.hands.R.localToWorld(new _(0,-.03,.05));t.f.position.copy(r).add(a).multiplyScalar(.5),t.f.quaternion.copy(t.d.root.quaternion),t.f.rotateY(Math.PI);let l=e>698.9;t.g.place(1.95,-1.55,0,-1.9);let c=Math.abs(Math.sin(e*9));return t.g.pose(l?{shL:[70,-10],shR:[70,-10],elL:60+c*30,elR:60+c*30}:mt(oe.sentadoChao,{shL:[60,-10],elL:50,shR:[60,-10],elR:50})),l&&(t.g.root.position.y=0),I(t.g,null,e,l?"rindo":"feliz",{lagrima:!0}),Zi(n),t.set(1,e),P(s,[[0,[3,1.15,-.75]],[1,[2.95,1.12,-.7]]],[2.25,.9,-1.9],i/3.28),As}}),B(699.92,703.28,{bg:"#F7E7C8",fov:38},n=>{let t=Ss(n);return t.f.visible=!1,t.m.position.set(2.3,0,-2.6),(e,i,s)=>{t.g.place(2.25,-1.85,0,-2.3),t.g.pose(mt(oe.abraco,{lean:14,knL:40,knR:40,bob:-.15})),I(t.g,null,e,"feliz",{blink:1}),t.d.place(2.55,-2.2,.32,-2.3+Math.PI),t.d.pose(pt(oe.abraco)),I(t.d,null,e,"feliz",{blink:1}),Zi(n),t.set(1,e);let o=$(-.8,.4,i/3.36);return P(s,[2.4+Math.sin(o)*1.5,1.2,-2+Math.cos(o)*1.5],[2.4,.85,-2],i/3.36,0,0),As}}),B(703.28,710.56,{bg:"#F7E7C8",fov:44},n=>{let t=Ss(n);t.f.visible=!1,t.m.position.set(2.3,0,-2.6);let e=Tn(n,[1.5,1.5,-1],{n:90,cor:"#FFE08A",r:2.6,tam:.03,sobe:1.5});return(i,s,o)=>{t.g.place(2.25,-1.85,0,-2.3),t.g.pose(mt(oe.abraco,{lean:14,knL:40,knR:40,bob:-.15})),I(t.g,null,i,"feliz",{blink:1}),t.d.place(2.55,-2.2,.32,-2.3+Math.PI),t.d.pose(pt(oe.abraco)),I(t.d,null,i,"feliz",{blink:1});let r=1-Xt(705.5,709.5,i);return Zi(n,r),t.set(r,i),e(et((i-705)/4.5)),P(o,[[0,[-2,1.8,2.2]],[1,[-2.6,2,2.6]]],[1.6,.8,-1.6],s/7.28),{bloom:.3,bloomT:.8}}}),B(710.56,716.48,{bg:"#E8D8B8",fov:34,limpa:!1},n=>{$n(n,{cor:"#FFE0B0"}),n.add(new Ce("#FFFFFF",.8));let t=Be();t.scale.setScalar(5),t.position.set(0,1,0),n.add(t);let e=V(n,oi,0,0,0),i=Be();return n.add(i),(s,o,r)=>{let a=s<713.6;return t.visible=a,e.root.visible=!a,t.tela("coxinha",et((s-711)/2)),e.pose({shR:[64,4],elR:76,shL:[30,10],elL:30,headX:20}),I(e,null,s,s>714.6?"feliz":"neutro",{look:[0,.5]}),Yt(i,e,"R",[0,-.07,.06],!1),e.headG.updateMatrixWorld(!0),i.lookAt(e.headG.localToWorld(new _(0,.2,.25))),i.tela("coxinha",1),a?P(r,[[0,[0,1,1.5]],[1,[0,1,1.2]]],[0,1,0],(s-710.56)/3.04,0,0):P(r,[[0,[.9,1.3,1.6]],[1,[.75,1.28,1.4]]],[0,1.1,0],(s-713.6)/2.88),{tint:"#FFF0DC"}}}),B(716.48,719.68,{bg:"#121218",fov:36},n=>{let t=He(n,{semGente:!0}),e=Xs(1.5);return n.add(e),t.adv.root.visible=t.juiz.root.visible=!1,(i,s,o)=>{let r=Xt(717.2,718.2,i);return t.gui.place(.4,2,0,Math.PI*1.2),t.gui.pose({shL:[$(10,70,r),-10],elL:30,shR:[$(10,70,r),-10],elR:30}),I(t.gui,null,i,"feliz"),t.prof.place(-.2,1.5,.3,.9),t.prof.pose({shR:[70,0],elR:20,shL:[70,0],elL:20}),I(t.prof,null,i,"feliz"),Yt(e,r<.5?t.prof:t.gui,r<.5?"R":"L",[0,-.05,.1],!1),P(o,[[0,[1.7,1.3,.7]],[1,[1.55,1.25,.85]]],[.1,1.1,1.75],s/3.2),{vig:.4}}}),B(719.68,725.44,{bg:"#F0C49A",fov:40},n=>{let t=Fi(n,{hora:"tarde",tipo:"casas",incl:4}),e=V(n,Et,0,0,0),i=V(n,Se,0,0,0);t.g.add(e.root,i.root);let s=ae(.035,"#8A8278",0,0,0);return t.g.add(s),(o,r,a)=>{let l=-.75-(o-719.68)*.45;e.place(-4.84,l,.16,Math.PI),i.place(-5.06,l-.5,.16,Math.PI),e.pose($e(o,{f:1.5})),i.pose($e(o+.3,{f:1.9})),I(e,null,o,"feliz",{look:[-.5,0]}),I(i,null,o,"rindo",{look:[.5,0]});let c=(o-719.68)*.45%1.6;if(s.position.set(-5.08+Math.sin(o)*.1,.18+Math.max(0,Math.sin(c/1.6*Math.PI))*.05,l-.6-c*.3),o<723.6){let h=t.w(-5.08,.8,l-.1);P(a,[h[0]+.55,h[1]+.45,h[2]-2.6],h,r/5.76,0,0)}else{let h=t.w(-4.92,.28,l-.3);P(a,[h[0]+.3,h[1]+.12,h[2]-1.35],h,(o-723.6)/1.84,0,0)}return{tint:"#FFD8B0",bloom:.35}}}),B(725.44,732.2,{bg:"#E8E0D0",fov:36,perto:!0,limpa:!1},n=>{let t=Dt(n,{hora:"tarde"});t.tel.visible=!1;let e=Xs(1.2);e.position.set(-1.98,1.8,-1.05),n.add(e);let i=tn();i.scale.setScalar(1.35),i.position.set(-1.98,1.15,-.765),i.set(1),n.add(i);let s=ae(.03,"#E2443A",-1.98,1.42,-.75,{seg:10,out:.003});return n.add(s),n.add(ct(.004,.004,.03,"#5AA84E",-1.98,1.46,-.75,{seg:6})),(o,r,a)=>{let l=Xt(730.3,731.2,o)*(1-Xt(731.6,732.2,o));i.set(1,Math.round(l*10)/10);let c=ln(r/6.76);return P(a,[$(-2.6,-1.95,c),$(1.5,1.25,c),$(.9,-.1,c)],[-1.98,$(1.45,1.18,c),-.77],r/6.76,0,0),{tint:"#FFF0DC",bloom:.2+l*.4,bloomT:.8}}}),B(732.2,740.14,{bg:"#121218",fov:32},n=>{$n(n,{cor:"#C8D4FF"}),n.add(new Ce("#FFFFFF",.7));let t=V(n,Et,0,0,0);return(e,i,s)=>(t.pose(mt(ve(e,1),oe.maosBolso)),I(t,null,e,"feliz",{look:[0,0]}),P(s,[[0,[0,1.25,2.4]],[1,[0,1.22,2]]],[0,1.1,0],i/7.94,0,0),{vig:.55,exposure:$(1,.55,Xt(737.5,738.3,e))})}),B(740.14,747,{bg:"#F7E7C8",fov:36},n=>{pn(n,{r:6,pos:[2,6,4],ki:1.4,hemi:1.5});let t=new it(new bt(30,20),new pe({color:"#E8D8B8"}));t.rotation.x=-Math.PI/2,n.add(t);let e=new it(new bt(30,10),new pe({color:"#F7E7C8"}));e.position.set(0,5,-3),n.add(e);let i=V(n,Se,0,0,0),s=To(.35);return n.add(s),(o,r,a)=>{let l=$(-3.2,1.6,et((o-740.4)/2.2));i.place(l,0,0,Math.PI/2);let c=741.8;if(i.pose(o<c?cn(o,2.8,.9):o<c+.3?{hipR:[-30+et((o-c)/.25)*90,0],knR:20,shL:[40,30],shR:[40,30]}:mt(Vi(o,2.2),oe.comemora)),I(i,null,o,o>c+.4?"rindo":"feliz",{lingua:o<c,pisca1:o>c-.2&&o<c+.3}),o<c)s.position.set(l+.3,0,.15);else{let h=et((o-c)/.5);s.position.set($(l+.3,2.6,h),Math.sin(h*Math.PI*.8)*1.4+h*.4,$(.15,-.2,h)),s.visible=h<1}return s.rotation.z=-o*8,P(a,[[0,[l*.6,.9,2.8]],[1,[l*.6,.9,2.7]]],[l*.6,.6,0],r/6.86),{bloom:.2}}})];var h5=[0,.17,.29],ad=(n,t)=>B(n,n+1,{bg:"#DDE6EE",fov:30,limpa:!1,perto:!0},e=>{e.add(new Ce("#fff",1.2));let i=new ki("#fff",1.5);i.position.set(2,4,3),e.add(i);let s=V(e,Et,0,0,0),o=ae(.012,"#FF0000");e.add(o);let r=G0();return r.scale.setScalar(1.6),e.add(r),(a,l,c)=>{let h=_s(s,...h5);o.position.copy(h);let d=_s(s,-.17+Math.sin(a*40)*.025,.14,.34);Ii(s,"R",d,ve(a,1));let u=pa(s,"R");r.position.copy(u),ed(r,u,h),I(s,null,a,"neutro",{mouth:{open:.35}}),s.headG.updateMatrixWorld(!0);let f=s.headG.getWorldPosition(new _);return P(c,t,[f.x,f.y-.25,f.z],0,0,0),{}}}),fp=[ad(0,[0,1.3,2.4]),ad(1,[-2.4,1.3,.1]),ad(2,[-1.4,1.5,1.9])];var pp=location.search.includes("teste")?fp:[...Jf,...ep,...ip,...sp,...op,...ap,...lp,...cp,...dp,...up];window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(t=>document.fonts.load(t))).catch(()=>{});let n=new w0(document.getElementById("film3d"));for(let t of pp)n.add(t);window.addEventListener("hf-seek",t=>n.render(t.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
