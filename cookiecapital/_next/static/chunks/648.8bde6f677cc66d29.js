"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[648],{30218:function(e,t,n){n.d(t,{Id:function(){return m},t0:function(){return O},zv:function(){return v},uc:function(){return L},jb:function(){return A},zb:function(){return b},AV:function(){return S},Vs:function(){return U}});Symbol();const o=Symbol();const s=Object.getPrototypeOf,a=new WeakMap,r=e=>e&&(a.has(e)?a.get(e):s(e)===Object.prototype||s(e)===Array.prototype),i=(new WeakMap,(e,t=!0)=>{a.set(e,t)}),l=e=>"object"===typeof e&&null!==e,c=new WeakMap,d=new WeakSet,u=(e=Object.is,t=((e,t)=>new Proxy(e,t)),n=(e=>l(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),s=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),a=new WeakMap,u=((e,t,n=s)=>{const o=a.get(e);if((null==o?void 0:o[0])===t)return o[1];const r=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return i(r,!0),a.set(e,[t,r]),Reflect.ownKeys(e).forEach((t=>{const o=Reflect.get(e,t);d.has(o)?(i(o,!1),r[t]=o):o instanceof Promise?Object.defineProperty(r,t,{get:()=>n(o)}):c.has(o)?r[t]=function(e,t){const n=c.get(e);n||console.warn("Please use proxy object");const[o,s,a]=n;return a(o,s(),t)}(o,n):r[t]=o})),Object.freeze(r)}),f=new WeakMap,h=[1,1],w=(s=>{if(!l(s))throw new Error("object required");const a=f.get(s);if(a)return a;let i=h[0];const w=new Set,g=(e,t=++h[0])=>{i!==t&&(i=t,w.forEach((n=>n(e,t))))};let b=h[1];const C=e=>(t,n)=>{const o=[...t];o[1]=[e,...o[1]],g(o,n)},m=new Map,v=e=>{var t;const n=m.get(e);n&&(m.delete(e),null==(t=n[1])||t.call(n))},y=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s)),O={deleteProperty(e,t){const n=Reflect.get(e,t);v(t);const o=Reflect.deleteProperty(e,t);return o&&g(["delete",[t],n]),o},set(t,s,a,i){var u;const f=Reflect.has(t,s),h=Reflect.get(t,s,i);if(f&&e(h,a))return!0;v(s),l(a)&&(a=(e=>r(e)&&e[o]||null)(a)||a);let b=a;if(null==(u=Object.getOwnPropertyDescriptor(t,s))?void 0:u.set);else if(a instanceof Promise)a.then((e=>{a.status="fulfilled",a.value=e,g(["resolve",[s],e])})).catch((e=>{a.status="rejected",a.reason=e,g(["reject",[s],e])}));else{!c.has(a)&&n(a)&&(b=p(a));const e=!d.has(b)&&c.get(b);e&&((e,t)=>{if(m.has(e))throw new Error("prop listener already exists");if(w.size){const n=t[3](C(e));m.set(e,[t,n])}else m.set(e,[t])})(s,e)}return Reflect.set(t,s,b,i),g(["set",[s],a,h]),!0}},E=t(y,O);f.set(s,E);const j=[y,(e=++h[1])=>(b===e||w.size||(b=e,m.forEach((([t])=>{const n=t[1](e);n>i&&(i=n)}))),i),u,e=>{w.add(e),1===w.size&&m.forEach((([e,t],n)=>{if(t)throw new Error("remove already exists");const o=e[3](C(n));m.set(n,[e,o])}));return()=>{w.delete(e),0===w.size&&m.forEach((([e,t],n)=>{t&&(t(),m.set(n,[e]))}))}}];return c.set(E,j),Reflect.ownKeys(s).forEach((e=>{const t=Object.getOwnPropertyDescriptor(s,e);t.get||t.set?Object.defineProperty(y,e,t):E[e]=s[e]})),E}))=>[w,c,d,e,t,n,s,a,u,f,h],[f]=u();function p(e={}){return f(e)}function h(e,t,n){const o=c.get(e);let s;o||console.warn("Please use proxy object");const a=[],r=o[3];let i=!1;const l=r((e=>{a.push(e),n?t(a.splice(0)):s||(s=Promise.resolve().then((()=>{s=void 0,i&&t(a.splice(0))})))}));return i=!0,()=>{i=!1,l()}}var w=n(48764);const g=p({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1,isStandalone:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,walletConnectVersion:1}),b={state:g,subscribe:e=>h(g,(()=>e(g))),setChains(e){g.chains=e},setStandaloneChains(e){g.standaloneChains=e},setStandaloneUri(e){g.standaloneUri=e},getSelectedChain(){const e=m.client().getNetwork().chain;return e&&(g.selectedChain=e),g.selectedChain},setSelectedChain(e){g.selectedChain=e},setIsStandalone(e){g.isStandalone=e},setIsCustomDesktop(e){g.isCustomDesktop=e},setIsCustomMobile(e){g.isCustomMobile=e},getAccount(){const e=m.client().getAccount();g.address=e.address,g.isConnected=e.isConnected},setAddress(e){g.address=e},setIsConnected(e){g.isConnected=e},setProfileName(e){g.profileName=e},setProfileAvatar(e){g.profileAvatar=e},setProfileLoading(e){g.profileLoading=e},setBalanceLoading(e){g.balanceLoading=e},setBalance(e){g.balance=e},setIsDataLoaded(e){g.isDataLoaded=e},setIsUiLoaded(e){g.isUiLoaded=e},setWalletConnectVersion(e){g.walletConnectVersion=e},resetEnsProfile(){g.profileName=void 0,g.profileAvatar=void 0},resetBalance(){g.balance=void 0},resetAccount(){g.address=void 0,g.isConnected=!1,b.resetEnsProfile(),b.resetBalance()}},C=p({initialized:!1,ethereumClient:void 0}),m={setEthereumClient(e){!C.initialized&&e&&(C.ethereumClient=e,b.setChains(e.chains),C.initialized=!0)},client(){if(C.ethereumClient)return C.ethereumClient;throw new Error("ClientCtrl has no client set")}},v={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>v.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isEmptyObject:e=>Object.getPrototypeOf(e)===Object.prototype&&0===Object.getOwnPropertyNames(e).length&&0===Object.getOwnPropertySymbols(e).length,isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t,n){if(v.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),this.setWalletConnectDeepLink(o,n);return`${o}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,n){if(!v.isHttpUrl(e))return this.formatNativeUrl(e,t,n);let o=e;e.endsWith("/")&&(o=e.slice(0,-1)),this.setWalletConnectDeepLink(o,n);return`${o}/wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t="_self"){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(v.WALLETCONNECT_DEEPLINK_CHOICE)},isNull:e=>null===e};const y=p({projectId:"",themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",themeColor:"default",themeBackground:v.isMobile()?"themeColor":"gradient",themeZIndex:89,mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableNetworkView:!1,enableAccountView:!0,defaultChain:void 0,explorerAllowList:void 0,explorerDenyList:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),O={state:y,subscribe:e=>h(y,(()=>e(y))),setConfig(e){var t,n,o,s;if(b.setStandaloneChains(e.standaloneChains),b.setIsStandalone(Boolean(null==(t=e.standaloneChains)?void 0:t.length)||Boolean(e.enableStandaloneMode)),b.setIsCustomMobile(Boolean(null==(n=e.mobileWallets)?void 0:n.length)),b.setIsCustomDesktop(Boolean(null==(o=e.desktopWallets)?void 0:o.length)),b.setWalletConnectVersion(null!=(s=e.walletConnectVersion)?s:1),e.defaultChain)b.setSelectedChain(e.defaultChain);else if(!b.state.isStandalone){const e=m.client().getDefaultChain();b.setSelectedChain(e)}Object.assign(y,e)},setThemeConfig(e){Object.assign(y,e)}},E="https://explorer-api.walletconnect.com";const j={async fetchWallets(e,t){const n=function(e){const t=Object.fromEntries(Object.entries(e).filter((([e,t])=>typeof t<"u"&&null!==t&&""!==t)).map((([e,t])=>[e,t.toString()])));return new URLSearchParams(t).toString()}(t),o=`${E}/v3/wallets?projectId=${e}&${n}`;return(await fetch(o)).json()},formatImageUrl:(e,t)=>`${E}/v3/logo/lg/${t}?projectId=${e}`},W=p({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},previewWallets:[],recomendedWallets:[]});function I(){const{projectId:e}=O.state;if(!e)throw new Error("projectId is required to work with explorer api");return e}const L={state:W,async getPreviewWallets(e){const{listings:t}=await j.fetchWallets(I(),e);return W.previewWallets=Object.values(t),W.previewWallets},async getRecomendedWallets(){const{listings:e}=await j.fetchWallets(I(),{page:1,entries:6});W.recomendedWallets=Object.values(e)},async getPaginatedWallets(e){const{page:t,search:n}=e,{listings:o,total:s}=await j.fetchWallets(I(),e),a=Object.values(o),r=n?"search":"wallets";return W[r]={listings:[...W[r].listings,...a],total:s,page:t??1},{listings:a,total:s}},getImageUrl:e=>j.formatImageUrl(I(),e),resetSearch(){W.search={listings:[],total:0,page:1}}},P=p({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),S={state:P,subscribe:e=>h(P,(()=>e(P))),push(e,t){e!==P.view&&(P.view=e,t&&(P.data=t),P.history.push(e))},replace(e){P.view=e,P.history=[e]},goBack(){if(P.history.length>1){P.history.pop();const[e]=P.history.slice(-1);P.view=e}}},k=p({open:!1}),A={state:k,subscribe:e=>h(k,(()=>e(k))),open:async e=>new Promise((t=>{const{isConnected:n,isStandalone:o,isUiLoaded:s,isDataLoaded:a}=b.state,{enableNetworkView:r}=O.state;if(o?(b.setStandaloneUri(e?.uri),b.setStandaloneChains(e?.standaloneChains),S.replace("ConnectWallet")):null!=e&&e.route?S.replace(e.route):n?S.replace("Account"):r?S.replace("SelectNetwork"):S.replace("ConnectWallet"),s&&a)k.open=!0,t();else{const e=setInterval((()=>{b.state.isUiLoaded&&b.state.isDataLoaded&&(clearInterval(e),k.open=!0,t())}),200)}})),close(){k.open=!1}},N=p({open:!1,message:"",variant:"success"}),U={state:N,subscribe:e=>h(N,(()=>e(N))),openToast(e,t){N.open=!0,N.message=e,N.variant=t},closeToast(){N.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=w.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}))},36648:function(e,t,n){n.r(t),n.d(t,{Web3Modal:function(){return c}});var o=n(30218),s=Object.defineProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;class c{constructor(e){this.openModal=o.jb.open,this.closeModal=o.jb.close,this.subscribeModal=o.jb.subscribe,this.setTheme=o.t0.setThemeConfig,o.t0.setConfig(((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&l(e,n,t[n]);if(a)for(var n of a(t))i.call(t,n)&&l(e,n,t[n]);return e})({enableStandaloneMode:!0},e)),this.initUi()}async initUi(){if(typeof window<"u"){await n.e(144).then(n.bind(n,144));const e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),o.zb.setIsUiLoaded(!0)}}}}}]);