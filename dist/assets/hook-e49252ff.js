import{Y as p,p as A,ab as m,aD as f,f as g,J as c,S as a,a as l,R as O,m as E,L as S,c as L,M as _,T as y}from"./index-616c59b6.js";import"./dayjs.min-1503989b.js";const v=p({key:"getCategoriesSellerViewSelector",get:async()=>{const e=await A.getCategories();return console.log(e.data),e.data}}),w=p({key:"getOrderListSelector",get:async()=>{try{const e=await m.getOrderList();return{message:e.data.message,data:e.data.data}}catch(e){return{message:e.response.data.message,data:[]}}}}),M=f({key:"createProductFormSelector",get:e=>({get:s})=>s(u).data[e],set:e=>({set:s},o)=>{s(u,r=>({...r,state:g.HAS_VALUE,data:{...r.data,[e]:o}}))}});const u=c({key:"createProductFormAtom",default:{state:g.IDLE,data:{title:void 0,description:void 0,location:void 0,price:void 0,picture:void 0,categories_id:void 0}}}),D=c({key:"categoriesAtom",default:{state:g.IDLE,message:void 0,data:[]}}),b=c({key:"openDialogCreateProductAtom",default:!1}),I=c({key:"stateCreateProductAtom",default:{status:a.IDLE,message:void 0}}),P=c({key:"statusUpdateOrderAtom",default:{status:a.IDLE,message:void 0}}),C=c({key:"openModalStatusOrder",default:{status:a.IDLE,open:!1,message:void 0,data:void 0}}),U=()=>{const e=l(D),s=O(v);return{handleSetCategories:()=>{e(r=>({...r,message:s.message,data:s.data}))}}},k=()=>{const{data:{title:e,description:s,price:o,location:r,picture:d,categories_id:t}}=O(u),[R,n]=E(I),h=S(u);return{handleSubmitCreateProductForm:L.useCallback(async()=>{if(!e||!s||!o||!r||!d||!t)n({status:a.HAS_ERROR,message:"SomeThing wrong in form"});else try{n({status:a.LOADING,message:void 0});const i=await A.createProduct({title:e,description:s,price:o,location:r,picture:d,categories_id:t});n({status:a.HAS_VALUE,message:i.data.message}),h()}catch(i){console.log(i.data),n({status:a.HAS_ERROR,message:i.data.message})}},[t,s,r,d,o,n,R,e])}},x=()=>{const e=l(P),s=S(C),{handlePushNotificationItem:o}=_.usePushNotificationItem();return{handleDenyOrder:async d=>{try{e({status:a.LOADING,message:void 0});const t=await m.updateOriginOrder({order_id:d,status:"deny"});e({status:a.HAS_VALUE,message:t.data.message}),s(),o(y.SUCCESS,t.data.message)}catch(t){console.error(t.response.data.message),e({status:a.HAS_ERROR,message:t.response.data.message})}}}},F=()=>{const e=l(P),s=S(C),{handlePushNotificationItem:o}=_.usePushNotificationItem();return{handleAcceptOrder:async d=>{try{e({status:a.LOADING,message:void 0});const t=await m.updateOriginOrder({order_id:d,status:"ordered"});e({status:a.HAS_VALUE,message:t.data.message}),s(),o(y.SUCCESS,t.data.message)}catch(t){console.error(t.response.data.message),e({status:a.HAS_ERROR,message:t.response.data.message})}}}},V={useGetCategories:U,useCreateProduct:k,useDenyOrder:x,useAcceptOrder:F};export{V as M,u as a,D as b,M as c,C as d,w as g,b as o,I as s};
