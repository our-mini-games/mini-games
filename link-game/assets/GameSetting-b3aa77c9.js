import{d as f,i as a,r as n,L as b,G as i,o as d,c as h,a as s,b as _,e as L,n as k,u as v,t as o,F as y,T as w,f as S,_ as C}from"./index-8f8ff3eb.js";const G="/mini-games/link-game/icons/close.png",B={class:"game-setting-modal"},I={class:"game-setting-container"},x={class:"header"},E={class:"wrapper"},$={class:"list"},F=["onClick"],N={class:"row"},T={class:"value"},V={class:"row"},j={class:"value"},z={class:"row"},A={class:"value"},D={class:"row"},K={class:"value"},M={class:"row"},O={class:"value"},P=f({__name:"GameSetting",emits:["close"],setup(q,{emit:u}){const m=u,c=a("currentLevel",n(b.easy)),r=a("gameStatus",n(i.finished)),g=a("gameLevels",n([])),p=l=>{r.value=i.finished,c.value=l;try{localStorage.setItem(S,`${l}`)}catch{}m("close"),Promise.resolve().then(()=>{r.value=i.playing})};return(l,e)=>(d(),h(w,{to:"body"},[s("div",B,[s("section",I,[s("header",x,[e[2]||(e[2]=s("h2",{class:"title"},"难度设置",-1)),s("button",{class:"btn btn-close",onClick:e[0]||(e[0]=t=>l.$emit("close"))},e[1]||(e[1]=[s("img",{src:G,width:"32"},null,-1)]))]),s("div",E,[s("ul",$,[(d(!0),_(y,null,L(v(g),t=>(d(),_("li",{key:t.level,class:k(["item",{current:t.level===v(c)}]),onClick:H=>p(t.level)},[s("div",N,[e[3]||(e[3]=s("div",{class:"label"}," 难度： ",-1)),s("div",T,o(t.text),1)]),s("div",V,[e[4]||(e[4]=s("div",{class:"label"}," 行数： ",-1)),s("div",j,o(t.row),1)]),s("div",z,[e[5]||(e[5]=s("div",{class:"label"}," 列数： ",-1)),s("div",A,o(t.column),1)]),s("div",D,[e[6]||(e[6]=s("div",{class:"label"}," 元素： ",-1)),s("div",K,o(t.totalOfItems)+"（种） ",1)]),s("div",M,[e[7]||(e[7]=s("div",{class:"label"}," 边界： ",-1)),s("div",O,o(t.useBoundary?"有":"无"),1)])],10,F))),128))])])])])]))}});const Q=C(P,[["__scopeId","data-v-10ed3dc1"]]);export{Q as default};
