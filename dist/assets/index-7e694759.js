import{R as i,s as u,a as m,b as j,u as p,c as l,S as w,p as v,t as D,G as f,d as h,j as e,e as g,P as b,F as H,f as L,g as A,h as E,i as S,k as P,l as k,m as y,A as z,n as F,o as I,O}from"./index-d2e6df4f.js";import{C as R}from"./index.esm-92cd97cc.js";const T=()=>{const t=i(u),n=m(j),s=i(j),a=p(),r=l.useCallback(async()=>{const{data:{limit:o,page:c,location:N,slug:C}}=t;try{n(x=>({...x,status:w.LOADING}));const d=await v.postSearchProduct({limit:o,page:c,location:N,slug:D(C)});n(x=>({...x,status:w.HAS_VALUE,message:d.data.message,data:[...d.data.data]})),a("/search")}catch(d){console.log(d)}},[a,t,n]);return console.log(s.data),{handleSearchProduct:r}},B={useSearchProduct:T};function _(t){return f({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}}]})(t)}const U=()=>{const t=i(h);return e.jsx(e.Fragment,{children:t.state===g.HAS_VALUE&&e.jsxs("footer",{style:{bottom:0},className:" sticky grid w-screen grid-cols-4 bg-orange-500 h-96 mt-28",children:[e.jsxs("article",{className:"flex flex-col p-8",children:[e.jsxs("div",{className:"flex flex-row space-y-6 text-white",children:[e.jsx("img",{src:b.BRAND,width:75,height:75,className:"ml-0"}),e.jsx("h1",{className:"text-3xl",children:"Bun ShopFOOD"})]}),e.jsx("p",{className:"text-xl mt-5 text-white",children:"Bun ShopFOOD Thưởng - thức ẩm thực nhanh chóng - tận nhà!"})]}),e.jsxs("article",{className:"flex flex-col  px-10 py-20 space-y-2",children:[e.jsx("p",{className:"text-xl text-white",children:"Bạn cần hỗ trợ"}),e.jsx("p",{className:"text-2xl text-white",children:"086051898"}),e.jsxs("ul",{className:"flex flex-col items-start justify-center space-y-2 text-white",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Địa chỉ: "}),"138 Topaz Home, Ward Tan Phu, District 9, Ho Chi Minh City."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Email: "}),"BunShopFood@gmail.com"]})]}),e.jsxs("section",{className:"flex flex-row space-x-4 ",children:[e.jsx(_,{size:24,color:"white"}),e.jsx(H,{size:24,color:"white"}),e.jsx(R,{size:24,color:"white"}),e.jsx(L,{size:24,color:"white"})]}),e.jsxs("section",{className:"flex flex-row space-x-4 ",children:[e.jsx(A,{size:40,color:"white"}),e.jsx(E,{size:40,color:"white"}),e.jsx(S,{size:40,color:"white"}),e.jsx(P,{size:40,color:"white"})]})]}),e.jsxs("article",{className:"flex flex-col space-y-4  px-10 py-20",children:[e.jsx("p",{className:"text-xl  text-white",children:"Về chúng tôi"}),e.jsxs("ul",{className:"flex flex-col items-start justify-center w-4/5 space-y-2  text-white",children:[e.jsx("li",{children:"Trang chủ"}),e.jsx("li",{children:"Giới thiệu"}),e.jsx("li",{children:"Danh mục"}),e.jsx("li",{children:"Thành viên"}),e.jsx("li",{children:"Blog"})]})]}),e.jsxs("article",{className:"flex flex-col space-y-4 p-10 py-20",children:[e.jsx("p",{className:"text-xl text-white",children:"Chính sách"}),e.jsxs("ul",{className:"flex flex-col items-start justify-center space-y-2 text-white ",children:[e.jsx("li",{children:"Chính sách giao hàng"}),e.jsx("li",{children:"Chính sách thanh toán"}),e.jsx("li",{children:"Chính sách đổi trả"}),e.jsx("li",{children:"Chính sách kiểm hàng"}),e.jsx("li",{children:"Chính sách bảo mật thông tin"})]})]})]})})},M=()=>{const t=p();return e.jsxs("section",{className:"flex flex-row space-x-2 items-center mr-2 hover-cursor",onClick:()=>t("/dashboard"),children:[e.jsx("img",{src:b.BRAND,width:36,height:36,className:"ml-4"}),e.jsx("h1",{className:"text-xl",children:"Bun"})]})};function V(t){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.3 0 25.7-18.8 15.8-31.8z"}}]})(t)}function G(t){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"}}]})(t)}const W=()=>{const{handleSearchProduct:t}=B.useSearchProduct(),{data:{slug:n}}=i(u),s=m(u),a=r=>{const o=r.target.value;s(c=>({...c,state:g.HAS_VALUE,data:{...c.data,slug:o}}))};return e.jsxs("article",{className:"bg-white px-4 py-2 w-3/5 flex flex-row justify-between items-center rounded-lg border-1 border-solid border-gray-400",children:[e.jsx("input",{value:n||"",onChange:a,placeholder:"Enter item or restaurant you are looking for",className:"w-full"}),e.jsx(G,{size:24,onClick:t,className:"hover-cursor"})]})},$=()=>e.jsx("div",{className:"p-2 shrink",children:e.jsx(V,{size:32,color:"black"})}),Y=()=>{const t=i(h),[n,s]=k(y),a=p(),{logOut:r}=z.useLogOut();return e.jsx("section",{hidden:n.open===!1,style:{top:54,right:0,zIndex:1e4},className:"animate-fadeIn absolute z-50 w-40 p-2 rounded border-1 border-solid border-gray-400 bg-white",children:e.jsxs("div",{className:"flex flex-col space-y-4",children:[t.data.role===F.SELLER&&e.jsx("button",{onClick:o=>{o.preventDefault(),s({open:!1}),a("/seller")},className:"menu--btn rounded py-2 px-4 font-semibold bg-white border-b-1 border-solid border-gray-400",children:"Profile"}),e.jsx("button",{onClick:o=>{o.preventDefault(),s({open:!1}),a("/history")},className:"menu--btn rounded py-2 px-4 font-semibold bg-white border-b-1 border-solid border-gray-400",children:"History"}),e.jsx("button",{className:"menu--btn rounded py-2 px-4 font-semibold bg-white border-b-1 border-solid border-gray-400",onClick:o=>{o.stopPropagation(),s({open:!1}),o.preventDefault(),r()},children:"Log Out"})]})})},q=()=>{const t=i(h),n=l.useRef(null),s=m(y),a=()=>{s(r=>({...r,open:!r.open}))};return l.useLayoutEffect(()=>{const r=o=>{n.current.contains(o.target)||s(c=>({...c,open:!1}))};return window.document.addEventListener("mousedown",r),()=>window.document.removeEventListener("mousedown",r)},[s]),e.jsxs("section",{className:"relative",ref:n,children:[e.jsx("button",{onClick:a,className:"px-4 py-3 rounded-lg bg-black",children:e.jsx("p",{className:"text-sm text-white font-bold",children:t.data.username})}),e.jsx(Y,{})]})},J=()=>e.jsxs("section",{className:"w-5/12 flex flex-row justify-center items-center space-x-3",children:[e.jsx(W,{}),e.jsx($,{}),e.jsx(q,{})]});const K=()=>{I();const t=i(h),n=l.useRef(document.documentElement.clientHeight),s=l.useRef(document.documentElement.scrollTop),a=l.useRef(document.documentElement.scrollHeight),[r,o]=l.useState(0);return l.useEffect(()=>{const c=()=>{n.current=document.documentElement.clientHeight,s.current=document.documentElement.scrollTop,a.current=document.documentElement.scrollHeight,o(s.current/(a.current-n.current)*100)};window.addEventListener("scroll",c)},[]),e.jsx(e.Fragment,{children:t.state===g.HAS_VALUE&&e.jsxs("header",{style:{top:0,left:0,zIndex:9999},className:"animate-fadeIn fixed z-50 flex flex-col items-center justify-center w-screen bg-white border-b-1 border-gray-200 border-solid h-28 flex-wrap",children:[e.jsxs("section",{className:"container flex flex-row justify-between mx-auto w-screen",children:[e.jsx(M,{}),e.jsx(J,{})]}),e.jsx("section",{className:"h-2 w-full top-28 absolute ",children:e.jsx("div",{className:"h-1 rounded",style:{width:`${r}%`,backgroundColor:"#4158D0",backgroundImage:"linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"}})})]})})},Q=K,ee=()=>e.jsxs("div",{className:"flex flex-col w-full overflow-y-auto",children:[e.jsx(Q,{}),e.jsx(O,{}),e.jsx(U,{})]});export{Q as HeaderLayout,ee as default};