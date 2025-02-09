(function(){"use strict";var e={6292:function(e,t,a){var o=a(5130),s=a(6768);const n={id:"app"};function i(e,t,a,o,i,r){const l=(0,s.g2)("LoginPage"),c=(0,s.g2)("MainPage");return(0,s.uX)(),(0,s.CE)("div",n,[e.isAuthenticated?((0,s.uX)(),(0,s.Wv)(c,{key:1})):((0,s.uX)(),(0,s.Wv)(l,{key:0}))])}var r=a(782),l=a.p+"img/logo.1a43b2bb.png",c=a(144);const u={class:"login-container"},d={class:"buttons"},p={class:"modal-content"},m={class:"form-group"},v={class:"form-group"};var g=(0,s.pM)({__name:"LoginCard",props:{showLogin:{type:Boolean}},setup(e){const t=(0,c.KR)(""),a=(0,c.KR)("");return(e,n)=>((0,s.uX)(),(0,s.CE)("div",u,[n[16]||(n[16]=(0,s.Lk)("h1",null,"Welcome to Relation!",-1)),n[17]||(n[17]=(0,s.Lk)("h2",null,"Connect, Share, and Grow Together",-1)),(0,s.Lk)("div",d,[n[6]||(n[6]=(0,s.Lk)("button",{class:"google"},"Sign in with Google",-1)),n[7]||(n[7]=(0,s.Lk)("button",{class:"apple"},"Sign in with Apple",-1)),(0,s.Lk)("button",{class:"login",onClick:n[0]||(n[0]=t=>e.$emit("toggleModal"))},"Login"),n[8]||(n[8]=(0,s.Lk)("div",{class:"divider"},"---- or ----",-1)),n[9]||(n[9]=(0,s.Lk)("p",{class:"signin"},"No account yet?",-1)),n[10]||(n[10]=(0,s.Lk)("button",{class:"create-account"},"Create Account",-1))]),e.showLogin?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"modal-overlay",onClick:n[5]||(n[5]=(0,o.D$)((t=>e.$emit("toggleModal")),["self"]))},[(0,s.Lk)("div",p,[(0,s.Lk)("button",{class:"close-btn",onClick:n[1]||(n[1]=t=>e.$emit("toggleModal"))},"×"),n[14]||(n[14]=(0,s.Lk)("h3",null,"Log In",-1)),(0,s.Lk)("form",{onSubmit:n[4]||(n[4]=(0,o.D$)((o=>e.$emit("login",{username:t.value,password:a.value})),["prevent"]))},[(0,s.Lk)("div",m,[n[11]||(n[11]=(0,s.Lk)("label",{for:"account"},"Account",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",id:"account","onUpdate:modelValue":n[2]||(n[2]=e=>t.value=e),placeholder:"Enter your account",required:"",autocomplete:"username"},null,512),[[o.Jo,t.value]])]),(0,s.Lk)("div",v,[n[12]||(n[12]=(0,s.Lk)("label",{for:"password"},"Password",-1)),(0,s.bo)((0,s.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":n[3]||(n[3]=e=>a.value=e),placeholder:"Enter your password",required:"",autocomplete:"current-password"},null,512),[[o.Jo,a.value]])]),n[13]||(n[13]=(0,s.Lk)("button",{type:"submit",class:"submit-btn"},"Confirm",-1))],32),n[15]||(n[15]=(0,s.Lk)("p",null,[(0,s.eW)("Don't have an account? "),(0,s.Lk)("a",{href:"#"},"Sign Up")],-1))])])):(0,s.Q3)("",!0)]))}}),f=a(1241);const h=(0,f.A)(g,[["__scopeId","data-v-3964f3ce"]]);var k=h;const w={key:0,class:"icon"},y={key:1,class:"container"},b={class:"right-side"};var L=(0,s.pM)({__name:"LoginPage",setup(e){const t=(0,r.Pj)(),a=(0,c.KR)(!1),n=(0,c.KR)(!0),i=()=>{a.value=!a.value},u=async e=>{try{await t.dispatch("auth/login",e);i(),n.value=!1}catch(a){console.error(a),alert("Login failed. Please try again.")}};return(0,s.sV)((()=>{setTimeout((()=>{n.value=!1}),1e3)})),(e,t)=>n.value?((0,s.uX)(),(0,s.CE)("div",w,t[0]||(t[0]=[(0,s.Lk)("img",{src:l,alt:"Logo",class:"icon-img"},null,-1)]))):((0,s.uX)(),(0,s.CE)("div",y,[(0,s.bF)(o.eB,{name:"left-slide",appear:""},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.Lk)("div",{class:"left-side"},[(0,s.Lk)("img",{src:l,alt:"logo",id:"logo"})],-1)]))),_:1}),(0,s.bF)(o.eB,{name:"right-slide",appear:""},{default:(0,s.k6)((()=>[(0,s.Lk)("div",b,[(0,s.bF)(k,{showLogin:a.value,onToggleModal:i,onLogin:u},null,8,["showLogin"])])])),_:1})]))}});const E=(0,f.A)(L,[["__scopeId","data-v-036ddfff"]]);var _=E,M=a(4232);const C={class:"game-modal"};function T(e,t,a,n,i,r){const c=(0,s.g2)("AccountMenu"),u=(0,s.g2)("TileMatchingGame");return(0,s.uX)(),(0,s.CE)("div",{class:(0,M.C4)(["sidebar",{hidden:!e.isVisible}])},[t[4]||(t[4]=(0,s.Fv)('<img id="nav-item" src="'+l+'" alt="icon" data-v-4213ba1d><a class="menu-item" href="#" data-v-4213ba1d><i class="fas fa-home" data-v-4213ba1d></i><span data-v-4213ba1d>Home</span></a><a class="menu-item" href="#" data-v-4213ba1d><i class="fas fa-search" data-v-4213ba1d></i><span data-v-4213ba1d>Explore</span></a><a class="menu-item" href="#" data-v-4213ba1d><i class="fas fa-bell" data-v-4213ba1d></i><span data-v-4213ba1d>Notifications</span></a><a class="menu-item" href="#" data-v-4213ba1d><i class="fas fa-envelope" data-v-4213ba1d></i><span data-v-4213ba1d>Messages</span></a>',5)),(0,s.Lk)("a",{class:"menu-item",href:"#",onClick:t[0]||(t[0]=t=>e.showGameModal=!0)},t[3]||(t[3]=[(0,s.Lk)("i",{class:"fas fa-gamepad"},null,-1),(0,s.Lk)("span",null,"Game",-1)])),t[5]||(t[5]=(0,s.Fv)('<a class="menu-item" href="#" data-v-4213ba1d><i class="fas fa-user" data-v-4213ba1d></i><span data-v-4213ba1d>Profile</span></a><a class="menu-item" href="#" data-v-4213ba1d><i class="fas fa-ellipsis-h" data-v-4213ba1d></i><span data-v-4213ba1d>More</span></a><a class="post-button" href="#" data-v-4213ba1d>Post</a>',3)),(0,s.bF)(c),e.showGameModal?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"game-modal-overlay",onClick:t[2]||(t[2]=(0,o.D$)(((...t)=>e.closeModal&&e.closeModal(...t)),["self"]))},[(0,s.Lk)("div",C,[(0,s.Lk)("button",{class:"close-btn",onClick:t[1]||(t[1]=(...t)=>e.closeModal&&e.closeModal(...t))},"×"),(0,s.bF)(u)])])):(0,s.Q3)("",!0)],2)}const P={class:"game-container"},A={class:"game-board"},I=["onMousedown","onMousemove","onTouchstart","onTouchmove"];function D(e,t,a,n,i,r){return(0,s.uX)(),(0,s.CE)("div",P,[t[2]||(t[2]=(0,s.Lk)("h1",null,"轉珠遊戲",-1)),(0,s.Lk)("div",A,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.board,((e,a)=>((0,s.uX)(),(0,s.CE)("div",{key:a,class:"row"},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e,((e,i)=>((0,s.uX)(),(0,s.CE)("div",{key:i,class:(0,M.C4)(["cell",`type-${e}`,{exploding:n.isExploding(a,i)}]),style:(0,M.Tr)(n.getCellStyle(a,i)),onMousedown:e=>n.startDrag(a,i,e),onMousemove:e=>n.drag(a,i,e),onMouseup:t[0]||(t[0]=(...e)=>n.endDrag&&n.endDrag(...e)),onTouchstart:e=>n.startDrag(a,i,e),onTouchmove:(0,o.D$)((e=>n.drag(a,i,e)),["prevent"]),onTouchend:t[1]||(t[1]=(...e)=>n.endDrag&&n.endDrag(...e))},null,46,I)))),128))])))),128))])])}a(4114),a(7642),a(8004),a(3853),a(5876),a(2475),a(5024),a(1698),a(8992),a(3949),a(1454),a(7550);var S={setup(){const e=5,t=6,a=(0,c.KR)(s()),o=(0,c.KR)([]);function s(){return Array.from({length:e},(()=>Array.from({length:t},(()=>Math.floor(3*Math.random())))))}const n=(0,c.KR)(!1),i=(0,c.KR)(null),r=(0,c.KR)(null),l=(0,c.KR)([]),u=(e,t,a)=>{n.value=!0,i.value=e,r.value=t,l.value=[[e,t]]},d=(e,t,o)=>{if(!n.value)return;const s=l.value[l.value.length-1];(1===Math.abs(e-s[0])&&t===s[1]||1===Math.abs(t-s[1])&&e===s[0])&&([a.value[e][t],a.value[s[0]][s[1]]]=[a.value[s[0]][s[1]],a.value[e][t]],l.value.push([e,t]))},p=()=>{n.value=!1,v()?setTimeout((()=>{g(),setTimeout(f,300)}),300):m()},m=()=>{for(let e=l.value.length-1;e>0;e--){const[t,o]=l.value[e],[s,n]=l.value[e-1];[a.value[t][o],a.value[s][n]]=[a.value[s][n],a.value[t][o]]}},v=()=>{const s=new Set;for(let o=0;o<e;o++){let e=1;for(let n=1;n<t;n++)if(a.value[o][n]===a.value[o][n-1])e++;else{if(e>=3)for(let t=0;t<e;t++)s.add(`${o},${n-1-t}`);e=1}if(e>=3)for(let a=0;a<e;a++)s.add(`${o},${t-1-a}`)}for(let o=0;o<t;o++){let t=1;for(let n=1;n<e;n++)if(a.value[n][o]===a.value[n-1][o])t++;else{if(t>=3)for(let e=0;e<t;e++)s.add(`${n-1-e},${o}`);t=1}if(t>=3)for(let a=0;a<t;a++)s.add(`${e-1-a},${o}`)}return o.value=Array.from(s).map((e=>{const[t,a]=e.split(",").map(Number);return{row:t,col:a}})),o.value.length>0},g=()=>{o.value.forEach((({row:e,col:t})=>{a.value[e][t]=null})),o.value=[]},f=()=>{for(let o=0;o<t;o++){let t=0;for(let s=e-1;s>=0;s--)null===a.value[s][o]?t++:t>0&&(a.value[s+t][o]=a.value[s][o],a.value[s][o]=null);for(let e=0;e<t;e++)a.value[e][o]=Math.floor(3*Math.random())}v()&&setTimeout((()=>{g(),setTimeout(f,300)}),300)},h=(e,t)=>o.value.some((a=>a.row===e&&a.col===t)),k=(e,t)=>null===a.value[e][t]?{transform:"translateY(100%)",opacity:0}:{transform:"translateY(0)",opacity:1};return{board:a,startDrag:u,drag:d,endDrag:p,isExploding:h,getCellStyle:k}}};const j=(0,f.A)(S,[["render",D],["__scopeId","data-v-315819a8"]]);var R=j,F=a.p+"img/male.79b1906c.png";const O={key:0,class:"overlay-div"},X={class:"overlay-content"},$=["src"];var K={__name:"AccountProfile",props:{profileImage:{type:String,required:!0},name:{type:String,required:!0},friendCount:{type:Number,required:!0}},setup(e){const t=(0,c.KR)(!1),a=()=>{t.value=!t.value};return(o,n)=>((0,s.uX)(),(0,s.CE)("div",{class:"account-profile",onClick:a},[n[0]||(n[0]=(0,s.Lk)("p",{class:"setting-style"},"Account Profile",-1)),t.value?((0,s.uX)(),(0,s.CE)("div",O,[(0,s.Lk)("div",X,[(0,s.Lk)("img",{src:e.profileImage,alt:"Profile Picture",class:"overlay-profile-image"},null,8,$),(0,s.Lk)("h4",null,(0,M.v_)(e.name),1),(0,s.Lk)("p",null,"Friend: "+(0,M.v_)(e.friendCount),1)])])):(0,s.Q3)("",!0)]))}};const N=(0,f.A)(K,[["__scopeId","data-v-73e0c16d"]]);var W=N;const x={class:"profile-container"},J=["src"],q={class:"profile-info"};var G=(0,s.pM)({__name:"AccountMenu",setup(e){const t=(0,r.Pj)(),a=F,o=(0,c.KR)(a),n=(0,c.KR)(0),i=(0,c.KR)(!1),l=(0,s.EW)((()=>t.state.auth.account?.trim()||"_Account_")),u=(0,s.EW)((()=>t.state.auth.userName?.trim()||"Guest")),d=()=>{i.value=!i.value},p=e=>{const t=document.querySelector(".profile-component");t&&!t.contains(e.target)&&(i.value=!1)};(0,s.sV)((()=>{document.addEventListener("click",p)}));const m=()=>{t.dispatch("auth/logout")},v=async()=>{try{const e=await fetch("https://api.example.com/user/profilePict");if(e.ok){const t=await e.json();t&&t.image&&(o.value=t.image)}else console.error("Failed to fetch profile image:",e.status)}catch(e){console.error("Error fetching profile image:",e)}};return(0,s.sV)((()=>{v()})),(e,t)=>((0,s.uX)(),(0,s.CE)("div",x,[(0,s.Lk)("div",{class:"profile-component",onClick:d},[(0,s.Lk)("img",{src:o.value,alt:"Profile Picture",class:"profile-image"},null,8,J),(0,s.Lk)("div",q,[(0,s.Lk)("h3",null,(0,M.v_)(u.value),1),(0,s.Lk)("p",null,"_"+(0,M.v_)(l.value)+"_",1)]),(0,s.Lk)("div",{class:(0,M.C4)(["menu-dropdown",{active:i.value}])},[(0,s.bF)(W,{profileImage:o.value,friendsCount:n.value},null,8,["profileImage","friendsCount"]),t[0]||(t[0]=(0,s.Lk)("p",null,"Setting",-1)),(0,s.Lk)("button",{class:"logout-btn",onClick:m},"Logout "+(0,M.v_)(u.value),1)],2)])]))}});const H=(0,f.A)(G,[["__scopeId","data-v-f788194e"]]);var Q=H,V=(0,s.pM)({name:"NavBar",components:{AccountMenu:Q,TileMatchingGame:R},setup(){const e=(0,c.KR)(!1),t=()=>{e.value=!1},a=(0,c.KR)(!0);let o=0;const n=()=>{if(window.innerWidth>768)return void(a.value=!0);const e=window.pageYOffset||document.documentElement.scrollTop;a.value=!(e>o),o=e};return(0,s.sV)((()=>{window.addEventListener("scroll",n)})),(0,s.hi)((()=>{window.removeEventListener("scroll",n)})),{showGameModal:e,closeModal:t,isVisible:a}}});const B=(0,f.A)(V,[["render",T],["__scopeId","data-v-4213ba1d"]]);var U=B;function Y(e,t){return" -- NEWS BAR -- "}const z={},Z=(0,f.A)(z,[["render",Y]]);var ee=Z;const te={class:"post"},ae={class:"post-header"},oe=["src"],se={class:"post-info"},ne={class:"post-time"},ie={class:"post-content"},re={key:0},le=["src"],ce={class:"post-actions"};var ue=(0,s.pM)({__name:"PostItem",props:{post:{type:Object,required:!0}},setup(e){const t=(0,r.Pj)();function a(e){const t=new Date(e).getTime(),a=Date.now(),o=Math.floor((a-t)/1e3);if(o<60)return`${o} seconds ago`;const s=Math.floor(o/60);if(s<60)return`${s} minutes ago`;const n=Math.floor(s/60);if(n<24)return`${n} hours ago`;const i=Math.floor(n/24);return`${i} days ago`}function o(e){t.dispatch("postModule/likePost",e)}function n(e){t.dispatch("postModule/retweetPost",e)}function i(e){t.dispatch("postModule/deletePost",e)}return(t,r)=>((0,s.uX)(),(0,s.CE)("div",te,[(0,s.Lk)("div",ae,[(0,s.Lk)("img",{src:e.post.avatar,alt:"",class:"avatar"},null,8,oe),(0,s.Lk)("div",se,[(0,s.Lk)("strong",null,(0,M.v_)(e.post.username),1),(0,s.Lk)("span",null,"@"+(0,M.v_)(e.post.userId),1),(0,s.Lk)("span",ne,(0,M.v_)(a(e.post.createTime)),1)])]),(0,s.Lk)("p",ie,(0,M.v_)(e.post.content),1),e.post.media&&e.post.media.length?((0,s.uX)(),(0,s.CE)("div",re,[(0,s.Lk)("img",{src:e.post.media[0],alt:"Post Media",class:"post-media"},null,8,le)])):(0,s.Q3)("",!0),(0,s.Lk)("div",ce,[(0,s.Lk)("button",{onClick:r[0]||(r[0]=t=>o(e.post.id)),class:(0,M.C4)({liked:e.post.isLiked})},"❤️ "+(0,M.v_)(e.post.likes),3),(0,s.Lk)("button",{onClick:r[1]||(r[1]=t=>n(e.post.id)),class:(0,M.C4)({retweeted:e.post.isRetweeted})},"🔁"+(0,M.v_)(e.post.retweets),3),(0,s.Lk)("button",{onClick:r[2]||(r[2]=t=>i(e.post.id))},"🗑️")])]))}});const de=(0,f.A)(ue,[["__scopeId","data-v-645d6875"]]);var pe=de,me=(0,s.pM)({__name:"PostList",props:{posts:{}},setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)("div",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.posts,(e=>((0,s.uX)(),(0,s.Wv)(pe,{key:e.id,post:e},null,8,["post"])))),128))]))}});const ve=me;var ge=ve;const fe={class:"post-container"},he={class:"tab-container"};var ke=(0,s.pM)({__name:"PostBar",setup(e){const t=(0,r.Pj)(),a=(0,c.KR)("for-you"),o=(0,s.EW)((()=>t.getters["postModule/getAllPosts"])),n=(0,s.EW)((()=>o.value.length?o.value.slice(0,Math.ceil(o.value.length/2)):[])),i=(0,s.EW)((()=>o.value.length?o.value.slice(Math.ceil(o.value.length/2)):[]));return(e,t)=>((0,s.uX)(),(0,s.CE)("div",fe,[(0,s.Lk)("div",he,[(0,s.Lk)("div",{class:(0,M.C4)({active:"for-you"===a.value}),id:"for-you",onClick:t[0]||(t[0]=e=>a.value="for-you")}," For You ",2),(0,s.Lk)("div",{class:(0,M.C4)({active:"following"===a.value}),id:"following",onClick:t[1]||(t[1]=e=>a.value="following")}," Following ",2)]),"for-you"===a.value?((0,s.uX)(),(0,s.Wv)(ge,{key:0,posts:n.value},null,8,["posts"])):((0,s.uX)(),(0,s.Wv)(ge,{key:1,posts:i.value},null,8,["posts"]))]))}});const we=(0,f.A)(ke,[["__scopeId","data-v-0f8e8f99"]]);var ye=we;const be={class:"main-page"},Le={key:0,class:"logo-container"},Ee={key:1,class:"animated-text"},_e={key:0,class:"container"},Me={id:"news"};var Ce=(0,s.pM)({__name:"MainPage",setup(e){const t=(0,c.KR)(""),a=(0,c.KR)(!1),n=(0,c.KR)(!1),i=(0,r.Pj)(),u=(0,s.EW)((()=>i.state.auth.userName?.trim()||"Guest")),d=e=>{let a=0;t.value="";const o=setInterval((()=>{t.value+=e[a],a++,a===e.length&&clearInterval(o)}),50)};return(0,s.sV)((()=>{setTimeout((()=>{a.value=!0,d(`Hello, ${u.value}!`),setTimeout((()=>{n.value=!0}),1200)}),1e3)})),(e,i)=>((0,s.uX)(),(0,s.CE)("div",be,[a.value||n.value?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",Le,i[0]||(i[0]=[(0,s.Lk)("img",{src:l,alt:"Logo",class:"logo"},null,-1)]))),a.value&&!n.value?((0,s.uX)(),(0,s.CE)("div",Ee,[(0,s.Lk)("h1",null,(0,M.v_)(t.value),1)])):(0,s.Q3)("",!0),(0,s.bF)(o.eB,{name:"fade"},{default:(0,s.k6)((()=>[n.value?((0,s.uX)(),(0,s.CE)("div",_e,[(0,s.bF)(U),(0,s.bF)(ye),(0,s.Lk)("div",Me,[(0,s.bF)(ee)])])):(0,s.Q3)("",!0)])),_:1})]))}});const Te=(0,f.A)(Ce,[["__scopeId","data-v-9edb0ea0"]]);var Pe=Te,Ae=(0,s.pM)({name:"App",components:{LoginPage:_,MainPage:Pe},setup(){const e=(0,r.Pj)(),t=(0,s.EW)((()=>e.getters["auth/isAuthenticated"]));return{isAuthenticated:t}}});const Ie=(0,f.A)(Ae,[["render",i]]);var De=Ie;const Se={account:localStorage.getItem("account")||"",userName:localStorage.getItem("userName")||"",token:localStorage.getItem("token")||null},je={isAuthenticated(e){return!!e.token}},Re={setAccount(e,t){e.account=t,localStorage.setItem("account",t)},setName(e,t){e.userName=t,localStorage.setItem("userName",t)},setToken(e,t){e.token=t,localStorage.setItem("token",t)},clearUser(e){e.userName="",e.token=null,localStorage.removeItem("userName"),localStorage.removeItem("token")}},Fe={async login({commit:e},t){try{const a=await fetch("https://home.sunnytseng.com/api/relation/token/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)});if(!a.ok)throw new Error("Login failed");const o=await a.json();return e("setAccount",o.account),e("setName",o.name),e("setToken",o.access),o}catch(a){throw console.error(a),a}},logout({commit:e}){e("clearUser")}};var Oe={namespaced:!0,state:Se,getters:je,mutations:Re,actions:Fe};a(4520),a(2577);const Xe={posts:[{id:"1",userId:"user_123",username:"John Doe",avatar:"https://i.pravatar.cc/100?img=1",content:"NEON !! ! The world's most difficult song to play and sing.🌍✨",media:["https://i.ytimg.com/vi/_DfQC5qHhbo/maxresdefault.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/JohnMayerin2019.jpg/640px-JohnMayerin2019.jpg"],createTime:new Date,likes:5,retweets:2,replies:3,isLiked:!1,isRetweeted:!1,comments:[]},{id:"2",userId:"user_456",username:"Jane Smith",avatar:"https://i.pravatar.cc/100?img=2",content:"John Mayer’s guitar playing is the perfect blend of technical mastery and soulful expression, making every note feel deeply personal. 🎉",media:["https://cdn-p.smehost.net/sites/d563907ee0c84f41b15553bfb3eb554c/wp-content/uploads/2021/08/19439893172.jpg"],createTime:new Date,likes:8,retweets:3,replies:1,isLiked:!1,isRetweeted:!1,comments:[]},{id:"3",userId:"user_789",username:"Alice Johnson",avatar:"https://i.pravatar.cc/100?img=3",content:"His ability to seamlessly transition between blues, rock, and pop showcases his versatility and deep understanding of music. ☀️🌊",media:["https://achievems.com/wp-content/uploads/2023/06/john-mayer.jpg"],createTime:new Date,likes:12,retweets:5,replies:4,isLiked:!0,isRetweeted:!1,comments:[]},{id:"4",userId:"user_101",username:"Bob Lee",avatar:"https://i.pravatar.cc/100?img=4",content:"Mayer’s tone is instantly recognizable, with a warmth and clarity that sets him apart from almost any other guitarist. 😋",media:["https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/JohnMayerin2019.jpg/640px-JohnMayerin2019.jpg"],createTime:new Date,likes:15,retweets:4,replies:2,isLiked:!1,isRetweeted:!0,comments:[]},{id:"5",userId:"user_202",username:"Charlie Brown",avatar:"https://i.pravatar.cc/100?img=5",content:"His blues-inspired phrasing and impeccable touch make his solos sound like they’re telling a heartfelt story.🔥",media:["https://media.soundoflife.com/articles/1258/John-Mayer-3.jpg"],createTime:new Date,likes:20,retweets:6,replies:5,isLiked:!0,isRetweeted:!0,comments:[]},{id:"6",userId:"user_303",username:"Diana Prince",avatar:"https://i.pravatar.cc/100?img=6",content:"Watching John Mayer play live is like witnessing a masterclass in guitar dynamics, technique, and emotion.",media:["https://ysolife.com/wp-content/uploads/2024/07/john-mayer-live-dec-2022-billboard-1548.jpg"],createTime:new Date,likes:30,retweets:8,replies:7,isLiked:!0,isRetweeted:!1,comments:[]},{id:"7",userId:"user_404",username:"Ethan Hunt",avatar:"https://i.pravatar.cc/100?img=7",content:"His ability to make complex guitar techniques look effortless proves he’s not just talented but also incredibly disciplined. 🎯",media:["https://i8.amplience.net/i/naras/john-mayer_MI0005252722-MN0000239827"],createTime:new Date,likes:25,retweets:9,replies:3,isLiked:!1,isRetweeted:!0,comments:[]},{id:"8",userId:"user_505",username:"Fiona Gallagher",avatar:"https://i.pravatar.cc/100?img=8",content:"Mayer’s songwriting combined with his guitar skills creates timeless music that resonates across generations. 🌍",media:["https://blog.deplike.com/wp-content/uploads/2022/10/How-Did-John-Mayer-Learn-Guitar.jpg"],createTime:new Date,likes:18,retweets:5,replies:4,isLiked:!1,isRetweeted:!1,comments:[]},{id:"9",userId:"user_606",username:"George Costanza",avatar:"https://i.pravatar.cc/100?img=9",content:"His fingerstyle playing is so fluid and precise that it feels like an extension of his soul. 👑",media:["https://www.rollingstone.com/wp-content/uploads/2024/08/john-mayer-finger-injury.jpg?w=1581&h=1054&crop=1"],createTime:new Date,likes:22,retweets:4,replies:6,isLiked:!0,isRetweeted:!1,comments:[]},{id:"10",userId:"user_707",username:"Hannah Montana",avatar:"https://i.pravatar.cc/100?img=10",content:"John Mayer isn’t just a guitarist; he’s a storyteller whose instrument speaks as powerfully as his lyrics.",media:["https://i.ytimg.com/vi/1uJC7myYiQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC6TGgTMdDoHJCUVqgFEWV4IaZh8Q"],createTime:new Date,likes:35,retweets:10,replies:8,isLiked:!0,isRetweeted:!0,comments:[]}],account:"test_account",userName:"TestUser",token:null},$e="/api/relation/posts",Ke={getAllPosts:e=>e.posts,getPostById:e=>t=>e.posts.find((e=>e.id===t))},Ne={SET_POSTS(e,t){e.posts=t},ADD_POST(e,t){e.posts.unshift(t)},LIKE_POST(e,t){const a=e.posts.find((e=>e.id===t));a&&(a.isLiked=!a.isLiked,a.likes+=a.isLiked?1:-1)},RETWEET_POST(e,t){const a=e.posts.find((e=>e.id===t));a&&(a.isRetweeted=!a.isRetweeted,a.retweets+=a.isRetweeted?1:-1)},DELETE_POST(e,t){e.posts=e.posts.filter((e=>e.id!==t))}},We={async fetchPosts({commit:e}){try{const t=await fetch($e);if(!t.ok)throw new Error("Failed to fetch posts");const a=await t.json();e("SET_POSTS",a)}catch(t){console.error("Error fetching posts:",t)}},async createPost({commit:e},t){try{const a=await fetch($e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t,createTime:new Date,likes:0,retweets:0,replies:0,isLiked:!1,isRetweeted:!1,comments:[]})});if(!a.ok)throw new Error("Failed to create post");const o=await a.json();e("ADD_POST",o)}catch(a){console.error("Error creating post:",a)}},async likePost({commit:e},t){try{const a=await fetch(`${$e}/${t}/like`,{method:"PUT"});if(!a.ok)throw new Error("Failed to like post");e("LIKE_POST",t)}catch(a){console.error("Error liking post:",a)}},async retweetPost({commit:e},t){try{const a=await fetch(`${$e}/${t}/retweet`,{method:"PUT"});if(!a.ok)throw new Error("Failed to retweet post");e("RETWEET_POST",t)}catch(a){console.error("Error retweeting post:",a)}},async deletePost({commit:e},t){try{const a=await fetch(`${$e}/${t}`,{method:"DELETE"});if(!a.ok)throw new Error("Failed to delete post");e("DELETE_POST",t)}catch(a){console.error("Error deleting post:",a)}}},xe={namespaced:!0,state:Xe,getters:Ke,mutations:Ne,actions:We};var Je=(0,r.y$)({modules:{auth:Oe,postModule:xe}});(0,o.Ef)(De).use(Je).mount("#app")}},t={};function a(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,s,n){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],n=e[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(r=!1,n<i&&(i=n));if(r){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,s,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,n,i=o[0],r=o[1],l=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(l)var u=l(a)}for(t&&t(o);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},o=self["webpackChunkrelation_frontend"]=self["webpackChunkrelation_frontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(6292)}));o=a.O(o)})();
//# sourceMappingURL=app.cf35d7e6.js.map