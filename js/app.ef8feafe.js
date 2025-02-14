(function(){"use strict";var e={3992:function(e,t,a){var o=a(5130),s=a(6768);const l={id:"app"};function n(e,t,a,o,n,r){const i=(0,s.g2)("LoginPage"),u=(0,s.g2)("MainPage");return(0,s.uX)(),(0,s.CE)("div",l,[e.isAuthenticated?((0,s.uX)(),(0,s.Wv)(u,{key:1})):((0,s.uX)(),(0,s.Wv)(i,{key:0}))])}var r=a(782),i=a.p+"img/logo.1a43b2bb.png",u=a(144),c=a(4232);const d={class:"login-container"},v={class:"buttons"},p={class:"modal-content"},m={key:0,class:"error-message"},g={class:"form-group"},f={class:"form-group"},h=["disabled"],k={key:0,class:"spinner"},L={key:1};var y=(0,s.pM)({__name:"LoginCard",props:{showLogin:Boolean,isLoading:Boolean,errorMessage:String},setup(e){const t=(0,u.KR)(""),a=(0,u.KR)("");return(l,n)=>((0,s.uX)(),(0,s.CE)("div",d,[n[14]||(n[14]=(0,s.Lk)("h1",null,"Welcome to Relation!",-1)),n[15]||(n[15]=(0,s.Lk)("h2",null,"Connect, Share, and Grow Together",-1)),(0,s.Lk)("div",v,[n[6]||(n[6]=(0,s.Lk)("button",{class:"google"},"Sign in with Google",-1)),n[7]||(n[7]=(0,s.Lk)("button",{class:"apple"},"Sign in with Apple",-1)),(0,s.Lk)("button",{class:"login",onClick:n[0]||(n[0]=e=>l.$emit("toggleModal"))},"Login"),n[8]||(n[8]=(0,s.Lk)("div",{class:"divider"},"---- or ----",-1)),n[9]||(n[9]=(0,s.Lk)("p",{class:"signin"},"No account yet?",-1)),n[10]||(n[10]=(0,s.Lk)("button",{class:"create-account"},"Create Account",-1))]),e.showLogin?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"modal-overlay",onClick:n[5]||(n[5]=(0,o.D$)((e=>l.$emit("toggleModal")),["self"]))},[(0,s.Lk)("div",p,[(0,s.Lk)("button",{class:"close-btn",onClick:n[1]||(n[1]=e=>l.$emit("toggleModal"))},"×"),n[13]||(n[13]=(0,s.Lk)("h3",null,"Log In",-1)),e.errorMessage?((0,s.uX)(),(0,s.CE)("p",m,(0,c.v_)(e.errorMessage),1)):(0,s.Q3)("",!0),(0,s.Lk)("form",{onSubmit:n[4]||(n[4]=(0,o.D$)((e=>l.$emit("login",{username:t.value,password:a.value})),["prevent"]))},[(0,s.Lk)("div",g,[n[11]||(n[11]=(0,s.Lk)("label",{for:"account"},"Account",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",id:"account","onUpdate:modelValue":n[2]||(n[2]=e=>t.value=e),placeholder:"guest",required:""},null,512),[[o.Jo,t.value]])]),(0,s.Lk)("div",f,[n[12]||(n[12]=(0,s.Lk)("label",{for:"password"},"Password",-1)),(0,s.bo)((0,s.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":n[3]||(n[3]=e=>a.value=e),placeholder:"guest",required:""},null,512),[[o.Jo,a.value]])]),(0,s.Lk)("button",{type:"submit",class:"submit-btn",disabled:e.isLoading},[e.isLoading?((0,s.uX)(),(0,s.CE)("span",k)):((0,s.uX)(),(0,s.CE)("span",L,"Confirm"))],8,h)],32)])])):(0,s.Q3)("",!0)]))}}),E=a(1241);const w=(0,E.A)(y,[["__scopeId","data-v-0c6ed148"]]);var b=w;const _={key:0,class:"icon"},C={key:1,class:"container"},P={class:"right-side"};var M=(0,s.pM)({__name:"LoginPage",setup(e){const t=(0,r.Pj)(),a=(0,u.KR)(!1),l=(0,u.KR)(!0),n=(0,u.KR)(!1),c=(0,u.KR)(""),d=()=>{a.value=!a.value,c.value=""},v=async e=>{n.value=!0,c.value="";try{await t.dispatch("auth/login",e);d(),l.value=!1}catch(a){console.error(a),c.value=a?.response?.data?.message||"Login failed. Please try again."}finally{n.value=!1}};return(0,s.sV)((()=>{setTimeout((()=>{l.value=!1}),1e3)})),(e,t)=>l.value?((0,s.uX)(),(0,s.CE)("div",_,t[0]||(t[0]=[(0,s.Lk)("img",{src:i,alt:"Logo",class:"icon-img"},null,-1)]))):((0,s.uX)(),(0,s.CE)("div",C,[(0,s.bF)(o.eB,{name:"left-slide",appear:""},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.Lk)("div",{class:"left-side"},[(0,s.Lk)("img",{src:i,alt:"logo",id:"logo"})],-1)]))),_:1}),(0,s.bF)(o.eB,{name:"right-slide",appear:""},{default:(0,s.k6)((()=>[(0,s.Lk)("div",P,[(0,s.bF)(b,{showLogin:a.value,isLoading:n.value,errorMessage:c.value,onToggleModal:d,onLogin:v},null,8,["showLogin","isLoading","errorMessage"])])])),_:1})]))}});const T=(0,E.A)(M,[["__scopeId","data-v-b0ced078"]]);var S=T;const A={class:"post-modal"},I={class:"game-modal"};function X(e,t,a,l,n,r){const u=(0,s.g2)("AccountMenu"),d=(0,s.g2)("PostBox"),v=(0,s.g2)("TileMatchingGame");return(0,s.uX)(),(0,s.CE)("div",{class:(0,c.C4)(["sidebar",{hidden:!e.isVisible}])},[t[5]||(t[5]=(0,s.Fv)('<img id="nav-item" src="'+i+'" alt="icon" data-v-4e8d0776><a class="menu-item" href="#" data-v-4e8d0776><i class="fas fa-home" data-v-4e8d0776></i><span data-v-4e8d0776>Home</span></a><a class="menu-item" href="#" data-v-4e8d0776><i class="fas fa-search" data-v-4e8d0776></i><span data-v-4e8d0776>Explore</span></a><a class="menu-item" href="#" data-v-4e8d0776><i class="fas fa-bell" data-v-4e8d0776></i><span data-v-4e8d0776>Notifications</span></a><a class="menu-item" href="#" data-v-4e8d0776><i class="fas fa-envelope" data-v-4e8d0776></i><span data-v-4e8d0776>Messages</span></a><a class="menu-item" href="#" data-v-4e8d0776><i class="fas fa-gamepad" data-v-4e8d0776></i><span data-v-4e8d0776>Game</span></a><a class="menu-item" href="#" data-v-4e8d0776><i class="fas fa-user" data-v-4e8d0776></i><span data-v-4e8d0776>Profile</span></a><a class="menu-item" href="#" data-v-4e8d0776><i class="fas fa-ellipsis-h" data-v-4e8d0776></i><span data-v-4e8d0776>More</span></a>',8)),(0,s.Lk)("a",{class:"post-button",href:"#",onClick:t[0]||(t[0]=(0,o.D$)((t=>e.showPostBox=!0),["prevent"]))},"Post"),(0,s.bF)(u),e.showPostBox?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"post-modal-overlay",onClick:t[2]||(t[2]=(0,o.D$)(((...t)=>e.closePostBox&&e.closePostBox(...t)),["self"]))},[(0,s.Lk)("div",A,[(0,s.Lk)("button",{class:"post-close-btn",onClick:t[1]||(t[1]=(...t)=>e.closePostBox&&e.closePostBox(...t))},"×"),(0,s.bF)(d)])])):(0,s.Q3)("",!0),e.showGameModal?((0,s.uX)(),(0,s.CE)("div",{key:1,class:"game-modal-overlay",onClick:t[4]||(t[4]=(0,o.D$)(((...t)=>e.closeModal&&e.closeModal(...t)),["self"]))},[(0,s.Lk)("div",I,[(0,s.Lk)("button",{class:"close-btn",onClick:t[3]||(t[3]=(...t)=>e.closeModal&&e.closeModal(...t))},"×"),(0,s.bF)(v)])])):(0,s.Q3)("",!0)],2)}const $={class:"game-container"},R={class:"game-board"},K=["onMousedown","onMousemove","onTouchstart","onTouchmove"];function x(e,t,a,l,n,r){return(0,s.uX)(),(0,s.CE)("div",$,[t[2]||(t[2]=(0,s.Lk)("h1",null,"轉珠遊戲",-1)),(0,s.Lk)("div",R,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(l.board,((e,a)=>((0,s.uX)(),(0,s.CE)("div",{key:a,class:"row"},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e,((e,n)=>((0,s.uX)(),(0,s.CE)("div",{key:n,class:(0,c.C4)(["cell",`type-${e}`,{exploding:l.isExploding(a,n)}]),style:(0,c.Tr)(l.getCellStyle(a,n)),onMousedown:e=>l.startDrag(a,n,e),onMousemove:e=>l.drag(a,n,e),onMouseup:t[0]||(t[0]=(...e)=>l.endDrag&&l.endDrag(...e)),onTouchstart:e=>l.startDrag(a,n,e),onTouchmove:(0,o.D$)((e=>l.drag(a,n,e)),["prevent"]),onTouchend:t[1]||(t[1]=(...e)=>l.endDrag&&l.endDrag(...e))},null,46,K)))),128))])))),128))])])}a(4114),a(7642),a(8004),a(3853),a(5876),a(2475),a(5024),a(1698),a(8992),a(3949),a(1454),a(7550);var F={setup(){const e=5,t=6,a=(0,u.KR)(s()),o=(0,u.KR)([]);function s(){return Array.from({length:e},(()=>Array.from({length:t},(()=>Math.floor(3*Math.random())))))}const l=(0,u.KR)(!1),n=(0,u.KR)(null),r=(0,u.KR)(null),i=(0,u.KR)([]),c=(e,t,a)=>{l.value=!0,n.value=e,r.value=t,i.value=[[e,t]]},d=(e,t,o)=>{if(!l.value)return;const s=i.value[i.value.length-1];(1===Math.abs(e-s[0])&&t===s[1]||1===Math.abs(t-s[1])&&e===s[0])&&([a.value[e][t],a.value[s[0]][s[1]]]=[a.value[s[0]][s[1]],a.value[e][t]],i.value.push([e,t]))},v=()=>{l.value=!1,m()?setTimeout((()=>{g(),setTimeout(f,300)}),300):p()},p=()=>{for(let e=i.value.length-1;e>0;e--){const[t,o]=i.value[e],[s,l]=i.value[e-1];[a.value[t][o],a.value[s][l]]=[a.value[s][l],a.value[t][o]]}},m=()=>{const s=new Set;for(let o=0;o<e;o++){let e=1;for(let l=1;l<t;l++)if(a.value[o][l]===a.value[o][l-1])e++;else{if(e>=3)for(let t=0;t<e;t++)s.add(`${o},${l-1-t}`);e=1}if(e>=3)for(let a=0;a<e;a++)s.add(`${o},${t-1-a}`)}for(let o=0;o<t;o++){let t=1;for(let l=1;l<e;l++)if(a.value[l][o]===a.value[l-1][o])t++;else{if(t>=3)for(let e=0;e<t;e++)s.add(`${l-1-e},${o}`);t=1}if(t>=3)for(let a=0;a<t;a++)s.add(`${e-1-a},${o}`)}return o.value=Array.from(s).map((e=>{const[t,a]=e.split(",").map(Number);return{row:t,col:a}})),o.value.length>0},g=()=>{o.value.forEach((({row:e,col:t})=>{a.value[e][t]=null})),o.value=[]},f=()=>{for(let o=0;o<t;o++){let t=0;for(let s=e-1;s>=0;s--)null===a.value[s][o]?t++:t>0&&(a.value[s+t][o]=a.value[s][o],a.value[s][o]=null);for(let e=0;e<t;e++)a.value[e][o]=Math.floor(3*Math.random())}m()&&setTimeout((()=>{g(),setTimeout(f,300)}),300)},h=(e,t)=>o.value.some((a=>a.row===e&&a.col===t)),k=(e,t)=>null===a.value[e][t]?{transform:"translateY(100%)",opacity:0}:{transform:"translateY(0)",opacity:1};return{board:a,startDrag:c,drag:d,endDrag:v,isExploding:h,getCellStyle:k}}};const D=(0,E.A)(F,[["render",x],["__scopeId","data-v-315819a8"]]);var O=D,W=a.p+"img/male.79b1906c.png";const B={class:"account-profile"},N={key:0,class:"overlay-div"},j={class:"overlay-content"},G=["src"];var Q={__name:"AccountProfile",props:{profileImage:{type:String,default:""},name:{type:String,default:"Guest"},friendCount:{type:Number,default:0}},setup(e){const t=(0,u.KR)(!1),a=()=>{t.value=!t.value},l=e,n=(0,s.EW)((()=>l.profileImage||W)),r=(0,s.EW)((()=>l.name||"Guest")),i=(0,s.EW)((()=>l.friendCount||0));return(e,l)=>((0,s.uX)(),(0,s.CE)("div",B,[(0,s.Lk)("p",{class:"setting-style",onClick:(0,o.D$)(a,["stop"])},"Account Profile"),t.value?((0,s.uX)(),(0,s.CE)("div",N,[(0,s.Lk)("div",j,[(0,s.Lk)("img",{src:n.value,alt:"Profile Picture",class:"overlay-profile-image"},null,8,G),(0,s.Lk)("h4",null,(0,c.v_)(r.value),1),(0,s.Lk)("p",null,"Friends: "+(0,c.v_)(i.value),1)])])):(0,s.Q3)("",!0)]))}};const V=(0,E.A)(Q,[["__scopeId","data-v-f56b5f06"]]);var U=V;const J={class:"profile-container"},Y=["src"],q={class:"profile-info"};var H=(0,s.pM)({__name:"AccountMenu",setup(e){const t=(0,r.Pj)(),a=(0,u.KR)(!1),o=(0,u.KR)(0),l=(0,s.EW)((()=>t.state.auth.account?.trim()||"_Account_")),n=(0,s.EW)((()=>t.state.auth.userName?.trim()||"Guest")),i=(0,s.EW)((()=>{const e=t.state.auth.avatar?.trim();return e||W})),d=()=>{a.value=!a.value},v=e=>{const t=document.querySelector(".profile-component");t&&!t.contains(e.target)&&(a.value=!1)};(0,s.sV)((()=>{document.addEventListener("click",v)}));const p=()=>{t.dispatch("auth/logout")};return(e,t)=>((0,s.uX)(),(0,s.CE)("div",J,[(0,s.Lk)("div",{class:"profile-component",onClick:d},[(0,s.Lk)("img",{src:i.value,alt:"Profile Picture",class:"profile-image"},null,8,Y),(0,s.Lk)("div",q,[(0,s.Lk)("h3",null,(0,c.v_)(n.value),1),(0,s.Lk)("p",null,"_"+(0,c.v_)(l.value)+"_",1)]),(0,s.Lk)("div",{class:(0,c.C4)(["menu-dropdown",{active:a.value}])},[(0,s.bF)(U,{name:n.value,profileImage:i.value,friendsCount:o.value},null,8,["name","profileImage","friendsCount"]),t[0]||(t[0]=(0,s.Lk)("p",null,"Setting",-1)),(0,s.Lk)("button",{class:"logout-btn",onClick:p},"Logout - "+(0,c.v_)(n.value),1)],2)])]))}});const z=(0,E.A)(H,[["__scopeId","data-v-b05d353c"]]);var Z=z;const ee={class:"post-box"},te={class:"user-info"},ae=["src"],oe={key:0,class:"image-upload-section"},se={class:"upload-header"},le={key:0,class:"image-preview-container"},ne=["src"],re=["onClick"],ie={class:"post-actions"},ue=["disabled"],ce={key:0,class:"spinner"},de={key:1};var ve={__name:"PostBox",setup(e){const t=(0,r.Pj)(),a=(0,s.EW)((()=>{const e=t.state.auth.avatar?.trim();return e||W})),l=(0,u.KR)(""),n=(0,u.KR)(null),i=(0,u.KR)([]),c=(0,u.KR)([]),d=(0,u.KR)(!1),v=(0,u.KR)(!1),p=()=>{(0,s.dY)((()=>{n.value&&(n.value.style.height="auto",n.value.style.height=`${n.value.scrollHeight}px`)}))};(0,s.sV)((()=>{p()}));const m=()=>{d.value=!d.value},g=e=>{const t=Array.from(e.target.files);t.forEach((e=>{if(e.type.startsWith("image/")){const t=new FileReader;t.onload=t=>{i.value.push(t.target.result),c.value.push(e)},t.readAsDataURL(e)}})),e.target.value=""},f=e=>{i.value.splice(e,1),c.value.splice(e,1)},h=async()=>{if(l.value.trim()||0!==c.value.length){v.value=!0;try{await t.dispatch("postModule/createPost",{content:l.value,images:c.value}),l.value="",i.value=[],c.value=[],d.value=!1,p()}catch(e){console.error("Error posting:",e)}finally{v.value=!1}}};return(e,t)=>((0,s.uX)(),(0,s.CE)("div",ee,[(0,s.Lk)("div",te,[(0,s.Lk)("img",{src:a.value,alt:"User avatar",class:"avatar"},null,8,ae),(0,s.bo)((0,s.Lk)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),placeholder:"What is happening?!",class:"post-input",rows:"1",ref_key:"textareaRef",ref:n,onInput:p},null,544),[[o.Jo,l.value]])]),d.value?((0,s.uX)(),(0,s.CE)("div",oe,[(0,s.Lk)("div",se,[t[2]||(t[2]=(0,s.Lk)("label",{for:"file-upload",class:"file-label"},"📁 Choose File ",-1)),(0,s.Lk)("input",{type:"file",id:"file-upload",accept:"image/*",multiple:"",class:"file-input",onChange:g},null,32),(0,s.Lk)("button",{class:"close-upload-btn",onClick:t[1]||(t[1]=e=>d.value=!1)},"✖")]),i.value.length?((0,s.uX)(),(0,s.CE)("div",le,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.value,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"image-preview"},[(0,s.Lk)("img",{src:e,alt:"uploaded image",class:"uploaded-image"},null,8,ne),(0,s.Lk)("button",{class:"remove-image-btn",onClick:e=>f(t)},"✖",8,re)])))),128))])):(0,s.Q3)("",!0)])):(0,s.Q3)("",!0),(0,s.Lk)("div",ie,[(0,s.Lk)("div",{class:"icons"},[(0,s.Lk)("button",{class:"icon-btn",onClick:m},t[3]||(t[3]=[(0,s.Lk)("i",{class:"fas fa-image"},null,-1)]))]),(0,s.Lk)("button",{class:"post-btn",disabled:!l.value.trim()&&0===i.value.length,onClick:h},[v.value?((0,s.uX)(),(0,s.CE)("span",ce)):((0,s.uX)(),(0,s.CE)("span",de,"Post"))],8,ue)])]))}};const pe=(0,E.A)(ve,[["__scopeId","data-v-64a392ca"]]);var me=pe,ge=(0,s.pM)({name:"NavBar",components:{AccountMenu:Z,TileMatchingGame:O,PostBox:me},setup(){const e=(0,u.KR)(!1),t=(0,u.KR)(!1),a=()=>{e.value=!1},o=()=>{t.value=!1},l=(0,u.KR)(!0);let n=0;const r=()=>{if(window.innerWidth>768)return void(l.value=!0);const e=window.pageYOffset||document.documentElement.scrollTop;l.value=!(e>n),n=e};return(0,s.sV)((()=>{window.addEventListener("scroll",r)})),(0,s.hi)((()=>{window.removeEventListener("scroll",r)})),{showPostBox:e,closePostBox:a,showGameModal:t,closeModal:o,isVisible:l}}});const fe=(0,E.A)(ge,[["render",X],["__scopeId","data-v-4e8d0776"]]);var he=fe;function ke(e,t){return" -- NEWS BAR -- "}const Le={},ye=(0,E.A)(Le,[["render",ke]]);var Ee=ye;const we={class:"post"},be={class:"post-header"},_e=["src"],Ce={class:"post-info"},Pe={class:"post-time"},Me={class:"post-content"},Te={key:0},Se=["src","alt"],Ae={class:"post-actions"};var Ie=(0,s.pM)({__name:"PostItem",props:{post:{}},setup(e){const t=(0,r.Pj)();function a(e){const t=new Date(e).getTime(),a=Date.now(),o=Math.floor((a-t)/1e3);if(o<60)return`${o}s ago`;const s=Math.floor(o/60);if(s<60)return`${s}m ago`;const l=Math.floor(s/60);if(l<24)return`${l}h ago`;const n=Math.floor(l/24);return`${n}d ago`}function o(e){t.dispatch("postModule/likePost",e)}function l(e){t.dispatch("postModule/retweetPost",e)}function n(e){t.dispatch("postModule/deletePost",e)}return(e,t)=>((0,s.uX)(),(0,s.CE)("div",we,[(0,s.Lk)("div",be,[(0,s.Lk)("img",{src:e.post.user.avatar,alt:"",class:"avatar"},null,8,_e),(0,s.Lk)("div",Ce,[(0,s.Lk)("strong",null,(0,c.v_)(e.post.user.name),1),(0,s.Lk)("span",null,"@"+(0,c.v_)(e.post.username),1),(0,s.Lk)("span",Pe," ● "+(0,c.v_)(a(e.post.created_at)),1)])]),(0,s.Lk)("p",Me,(0,c.v_)(e.post.content),1),e.post.media&&e.post.media.length>0?((0,s.uX)(),(0,s.CE)("div",Te,[(0,s.Lk)("img",{src:e.post.media[0].url,alt:e.post.media[0].type,class:"post-media"},null,8,Se)])):(0,s.Q3)("",!0),(0,s.Lk)("div",Ae,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=t=>o(e.post.id)),class:(0,c.C4)({liked:e.post.is_liked})}," ❤️ "+(0,c.v_)(e.post.likes),3),(0,s.Lk)("button",{onClick:t[1]||(t[1]=t=>l(e.post.id)),class:(0,c.C4)({retweeted:e.post.is_retweeted})}," 🔁 "+(0,c.v_)(e.post.retweets),3),(0,s.Lk)("button",{onClick:t[2]||(t[2]=t=>n(e.post.id))},"🗑️")])]))}});const Xe=(0,E.A)(Ie,[["__scopeId","data-v-b4d48e60"]]);var $e=Xe,Re=(0,s.pM)({__name:"PostList",setup(e){const t=(0,r.Pj)(),a=(0,s.EW)((()=>t.state.postModule.posts));return(0,s.sV)((()=>{t.dispatch("postModule/fetchPosts")})),(e,t)=>((0,s.uX)(),(0,s.CE)("div",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.value,(e=>((0,s.uX)(),(0,s.Wv)($e,{key:e.id,post:e},null,8,["post"])))),128))]))}});const Ke=Re;var xe=Ke;const Fe={class:"post-container"},De={class:"tab-container"};var Oe=(0,s.pM)({__name:"PostBar",setup(e){const t=(0,r.Pj)(),a=(0,u.KR)("for-you"),o=(0,s.EW)((()=>t.getters["postModule/getAllPosts"])),l=(0,s.EW)((()=>o.value.length?o.value.slice(0,Math.ceil(o.value.length/2)):[])),n=(0,s.EW)((()=>o.value.length?o.value.slice(Math.ceil(o.value.length/2)):[]));return(e,t)=>((0,s.uX)(),(0,s.CE)("div",Fe,[(0,s.Lk)("div",De,[(0,s.Lk)("div",{class:(0,c.C4)({active:"for-you"===a.value}),id:"for-you",onClick:t[0]||(t[0]=e=>a.value="for-you")}," For You ",2),(0,s.Lk)("div",{class:(0,c.C4)({active:"following"===a.value}),id:"following",onClick:t[1]||(t[1]=e=>a.value="following")}," Following ",2)]),"for-you"===a.value?((0,s.uX)(),(0,s.Wv)(xe,{key:0,posts:l.value},null,8,["posts"])):((0,s.uX)(),(0,s.Wv)(xe,{key:1,posts:n.value},null,8,["posts"]))]))}});const We=(0,E.A)(Oe,[["__scopeId","data-v-18d2a352"]]);var Be=We;const Ne={class:"main-page"},je={key:0,class:"logo-container"},Ge={key:1,class:"animated-text"},Qe={key:0,class:"container"},Ve={id:"news"};var Ue=(0,s.pM)({__name:"MainPage",setup(e){const t=(0,u.KR)(""),a=(0,u.KR)(!1),l=(0,u.KR)(!1),n=(0,r.Pj)(),d=(0,s.EW)((()=>n.state.auth.userName?.trim()||"Guest")),v=e=>{let a=0;t.value="";const o=setInterval((()=>{t.value+=e[a],a++,a===e.length&&clearInterval(o)}),50)};return(0,s.sV)((()=>{setTimeout((()=>{a.value=!0,v(`Hello, ${d.value}!`),setTimeout((()=>{l.value=!0}),1200)}),1e3)})),(e,n)=>((0,s.uX)(),(0,s.CE)("div",Ne,[a.value||l.value?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",je,n[0]||(n[0]=[(0,s.Lk)("img",{src:i,alt:"Logo",class:"logo"},null,-1)]))),a.value&&!l.value?((0,s.uX)(),(0,s.CE)("div",Ge,[(0,s.Lk)("h1",null,(0,c.v_)(t.value),1)])):(0,s.Q3)("",!0),(0,s.bF)(o.eB,{name:"fade"},{default:(0,s.k6)((()=>[l.value?((0,s.uX)(),(0,s.CE)("div",Qe,[(0,s.bF)(he),(0,s.bF)(Be),(0,s.Lk)("div",Ve,[(0,s.bF)(Ee)])])):(0,s.Q3)("",!0)])),_:1})]))}});const Je=(0,E.A)(Ue,[["__scopeId","data-v-1976a543"]]);var Ye=Je,qe=(0,s.pM)({name:"App",components:{LoginPage:S,MainPage:Ye},setup(){const e=(0,r.Pj)(),t=(0,s.EW)((()=>e.getters["auth/isAuthenticated"]));return{isAuthenticated:t}}});const He=(0,E.A)(qe,[["render",n]]);var ze=He;const Ze="https://home.sunnytseng.com/api/relation/token/",et={account:localStorage.getItem("account")||"",userName:localStorage.getItem("userName")||"",avatar:"null"!==localStorage.getItem("avatar")&&localStorage.getItem("avatar")||"",token:localStorage.getItem("token")||null},tt={isAuthenticated(e){return!!e.token}},at={setAccount(e,t){e.account=t,localStorage.setItem("account",t)},setName(e,t){e.userName=t,localStorage.setItem("userName",t)},setAvatar(e,t){e.avatar=t,localStorage.setItem("avatar",t)},setToken(e,t){e.token=t,localStorage.setItem("token",t)},clearUser(e){e.userName="",e.avatar="",e.token=null,localStorage.removeItem("userName"),localStorage.removeItem("token"),localStorage.removeItem("avatar")}},ot={async login({commit:e},t){try{const a=await fetch(Ze,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)});if(!a.ok)throw new Error("Login failed");const o=await a.json();return e("setAccount",o.account),e("setName",o.name),e("setToken",o.access),e("setAvatar",o.avatar||""),o}catch(a){throw console.error(a),a}},logout({commit:e}){e("clearUser")}};var st={namespaced:!0,state:et,getters:tt,mutations:at,actions:ot};a(4520),a(2577);const lt="https://home.sunnytseng.com/api/relation/posts/",nt={posts:JSON.parse(localStorage.getItem("posts")||"[]"),account:localStorage.getItem("account")||"",userName:localStorage.getItem("userName")||"",token:localStorage.getItem("token")||null},rt={getAllPosts:e=>e.posts,getPostById:e=>t=>e.posts.find((e=>e.id===t))},it={SET_POSTS(e,t){e.posts=t.results},ADD_POST(e,t){e.posts.unshift(t)},LIKE_POST(e,t){const a=e.posts.find((e=>e.id===t));a&&(a.is_liked=!a.is_liked,a.likes+=a.is_liked?1:-1)},RETWEET_POST(e,t){const a=e.posts.find((e=>e.id===t));a&&(a.is_retweeted=!a.is_retweeted,a.retweets+=a.is_retweeted?1:-1)},DELETE_POST(e,t){e.posts=e.posts.filter((e=>e.id!==t))}},ut={async fetchPosts({commit:e,rootState:t,getters:a}){try{const o=t.auth.token||a["auth/isAuthenticated"];if(!o)throw new Error("No authentication token found");const s=await fetch(lt,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`}});if(!s.ok)throw new Error(`Failed to fetch posts: ${s.status} ${s.statusText}`);const l=await s.json();e("SET_POSTS",l)}catch(o){console.error("Error fetching posts:",o)}},async createPost({commit:e,rootState:t},a){try{const o=t.auth.token;if(!o)throw new Error("Please login");const s=new FormData;s.append("text",a.content),a.images.forEach((e=>{s.append("images",e)}));const l=await fetch(lt,{headers:{Authorization:`Bearer ${o}`},body:s});if(!l.ok)throw new Error("Failed to create post");const n=await l.json();e("ADD_POST",n)}catch(o){console.error("Error creating post:",o)}},async likePost({commit:e},t){try{const a=await fetch(`${lt}${t}/like`,{method:"PUT"});if(!a.ok)throw new Error("Failed to like post");e("LIKE_POST",t)}catch(a){console.error("Error liking post:",a)}},async retweetPost({commit:e},t){try{const a=await fetch(`${lt}${t}/retweet`,{method:"PUT"});if(!a.ok)throw new Error("Failed to retweet post");e("RETWEET_POST",t)}catch(a){console.error("Error retweeting post:",a)}},async deletePost({commit:e},t){try{const a=await fetch(`${lt}${t}`,{method:"DELETE"});if(!a.ok)throw new Error("Failed to delete post");e("DELETE_POST",t)}catch(a){console.error("Error deleting post:",a)}}},ct={namespaced:!0,state:nt,getters:rt,mutations:it,actions:ut};var dt=(0,r.y$)({modules:{auth:st,postModule:ct}});(0,o.Ef)(ze).use(dt).mount("#app")}},t={};function a(o){var s=t[o];if(void 0!==s)return s.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,o,s,l){if(!o){var n=1/0;for(c=0;c<e.length;c++){o=e[c][0],s=e[c][1],l=e[c][2];for(var r=!0,i=0;i<o.length;i++)(!1&l||n>=l)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(r=!1,l<n&&(n=l));if(r){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,s,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,l,n=o[0],r=o[1],i=o[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(i)var c=i(a)}for(t&&t(o);u<n.length;u++)l=n[u],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},o=self["webpackChunkrelation_frontend"]=self["webpackChunkrelation_frontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(3992)}));o=a.O(o)})();
//# sourceMappingURL=app.ef8feafe.js.map