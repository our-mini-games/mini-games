import{d as r,i as _,o as u,c as p,a as e,u as t,t as v,w as m,T as f,_ as h}from"./index.b257e385.js";const g={class:"wrapper"},b=["src"],k=["src"],C={class:"level"},E={class:"value"},$={class:"operations"},B=r({__name:"Finished",emits:["close","set-level","refresh"],setup(F,{emit:l}){const n="/mini-games/link-game/",o=l,c=_("levelInfo"),a=()=>{o("close"),o("refresh")};return(i,s)=>(u(),p(f,{to:"body"},[e("div",{class:"finished-modal",onContextmenu:m(()=>!1,["prevent"])},[e("div",g,[e("img",{class:"head-pic",src:`${t(n)}icons/complete.png`,height:"100"},null,8,b),e("img",{class:"btn-close",src:`${t(n)}icons/close.png`,width:"44",onClick:s[0]||(s[0]=d=>i.$emit("close"))},null,8,k),e("div",C,[s[2]||(s[2]=e("div",{class:"label"}," \u5F53\u524D\u96BE\u5EA6 ",-1)),e("div",E,v(t(c).text),1)]),e("div",$,[e("div",{class:"btn btn-refresh",onClick:a}," \u518D\u6765\u4E00\u5C40 "),e("div",{class:"btn btn-set-level",onClick:s[1]||(s[1]=d=>i.$emit("set-level"))}," \u66F4\u6362\u96BE\u5EA6 ")])])],32)]))}});const x=h(B,[["__scopeId","data-v-09735e6e"]]);export{x as default};
