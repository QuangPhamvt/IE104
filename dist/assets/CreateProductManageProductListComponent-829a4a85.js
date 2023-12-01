import{m as n,a as c,R as i,j as e,ad as C,c as p,S as u,o as N}from"./index-56934ed0.js";import"./dayjs.min-dec15fdf.js";import{c as d,a as m,b as R,s as T,o as f,M as g}from"./hook-ebf64568.js";import{a as _}from"./index.esm-f90a3bce.js";import{G as j}from"./index.esm-64913919.js";const l={HO_CHI_MINH:"Thành phố Hồ Chí Minh",HA_NOI:"Thủ đô Hà Nội",HUE:"Cố đô Huế",DA_NANG:"Thành phố Đà Đẵng",BEN_TRE:"Tỉnh Bến Tre",BINH_DINH:"Tỉnh Bình Định",HAI_PHONG:"Thành phố Hải Phòng",NHA_TRANG:"Thành phố Nha Trang",VUNG_TAU:"Thành phố Vũng Tàu"},b=[l.HO_CHI_MINH,l.HA_NOI,l.HUE,l.DA_NANG,l.BEN_TRE,l.BINH_DINH,l.HAI_PHONG,l.NHA_TRANG,l.VUNG_TAU],P=()=>{const{t:s}=n(),r=c(d("title")),{data:{title:t}}=i(m);return e.jsxs("section",{className:"flex flex-col w-1/2 space-y-2 ",children:[e.jsx("h4",{className:"text-lg font-light ml-2",children:s("SELLER_VIEW.CREATE_PRODUCT.TITLE_PRODUCTION")}),e.jsx("input",{type:"text",value:t||"",placeholder:s("SELLER_VIEW.CREATE_PRODUCT.ENTER_TITLE_PRODUCTION"),onChange:o=>r(o.target.value),className:"w-5/6 py-2 bg-gray-50 border-1 border-solid border-gray-300 rounded-xl px-4"})]})},A=()=>{const{t:s}=n(),{data:r}=i(R),t=c(d("categories_id"));return e.jsxs("section",{className:"flex flex-col w-1/2 mt-0 space-x-4 justify-start  items-start space-y-2",children:[e.jsx("h4",{className:"text-lg font-light ml-6",children:s("SELLER_VIEW.CREATE_PRODUCT.CATEGORIES")}),e.jsxs("select",{onChange:o=>t(o.target.value),className:" p-2 border-1 w-3/5 border-solid border-gray-300 rounded-xl ",children:[e.jsx("option",{value:"",children:"choose categories"}),r.map(o=>e.jsx("option",{value:o.id,children:o.name},o))]})]})},I=()=>{const{t:s}=n(),r=c(d("description")),{data:{description:t}}=i(m);return e.jsxs("section",{className:"w-full flex flex-col space-y-2",children:[e.jsx("h4",{className:"text-lg font-light ml-2",children:s("SELLER_VIEW.CREATE_PRODUCT.DESCRIPTION")}),e.jsx("textarea",{type:"text",rows:8,value:t||"",onChange:o=>r(o.target.value),placeholder:s("SELLER_VIEW.CREATE_PRODUCT.ENTER_DESCRIPTION_PRODUCTION"),className:"w-4/5 py-2 bg-white border-1 border-solid border-gray-400 rounded-xl px-4 font-mono"})]})},O=()=>{const{t:s}=n(),r=c(d("picture")),{data:{picture:t}}=i(m),o=x=>{const a=new FileReader;a.readAsDataURL(x.target.files[0]),a.onload=()=>{r(()=>a.result)}};return e.jsxs("section",{className:"flex flex-wrap flex-row items-center space-x-4",children:[e.jsx("h4",{className:"text-lg font-light ml-2",children:s("SELLER_VIEW.CREATE_PRODUCT.UPLOAD_IMAGE")}),e.jsx("label",{htmlFor:"upLoadImageProduction",children:e.jsx(C,{})}),e.jsx("div",{className:"hidden",children:e.jsx("input",{id:"upLoadImageProduction",className:"m-0 ",type:"file",name:"upLoadImageProduction",onChange:o})}),e.jsx("div",{className:"w-full px-8 mt-4  max-h-100 bg-gray-400 flex justify-center items-center border-2 border-solid border-gray-500",children:e.jsx("img",{className:"w-full h-100 object-cover",src:t,alt:"Not have file"})})]})},w=()=>{const{t:s}=n(),r=c(d("location"));return e.jsxs("section",{className:"flex flex-wrap flex-row space-x-2 items-center w-2/5 ",children:[e.jsx("h4",{className:"text-lg font-light",children:s("SELLER_VIEW.CREATE_PRODUCT.LOCATION_SHOP")}),e.jsxs("select",{className:"w-1/5 p-2 border-2 border-solid border-gray-300 rounded-xl grow",onChange:t=>r(t.target.value),children:[e.jsx("option",{value:"",children:"choose city"}),b.map(t=>e.jsx("option",{value:t,children:t},t))]})]})},L=()=>{const{t:s}=n(),r=c(d("price")),{data:{price:t}}=i(m);return e.jsxs("section",{className:"flex flex-wrap flex-row space-x-2 items-center w-2/5 mx-12",children:[e.jsx("h4",{className:"text-lg font-light",children:s("SELLER_VIEW.CREATE_PRODUCT.MONEY")}),e.jsx("input",{placeholder:s("SELLER_VIEW.CREATE_PRODUCT.SPEND"),type:"text",value:t||"",onChange:o=>r(o.target.value),className:"grow px-4 py-2 border-solid border-1 border-gray-300 rounded-2xl bg-gray-50"})]})},y=s=>{const{open:r=!1}=s,t=p.useRef(null),{status:o,message:x}=i(T),a=c(f);return p.useLayoutEffect(()=>{var h,E;r&&!((h=t.current)!=null&&h.open)?t.current.showModal():!r&&((E=t.current)!=null&&E.open)&&t.current.close()},[r]),e.jsx("dialog",{ref:t,className:"absolute bg-white overflow-hidden rounded-2xl ",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:e.jsxs("article",{className:"w-116 h-64 flex flex-col justify-between items-center p-4",children:[e.jsxs("section",{className:"grow w-full flex justify-center items-center",children:[o===u.LOADING&&e.jsx(_,{size:60,className:"animate-spin",color:"orange"}),o===u.HAS_VALUE&&e.jsx(j,{size:60,color:"#557C55"}),o===u.HAS_ERROR&&e.jsx("p",{style:{color:"red"},children:x})]}),e.jsx("section",{className:"px-4 py-2 flex justify-center items-center w-full",children:e.jsx("button",{onClick:()=>a(!1),className:"bg-orange-400 w-full py-2",children:"OK"})})]})})},v=()=>{const{t:s}=n(),{handleSetCategories:r}=g.useGetCategories(),{handleSubmitCreateProductForm:t}=g.useCreateProduct(),{data:o}=i(m),[x,a]=N(f);return p.useEffect(()=>{r()},[]),console.log(o),e.jsxs(e.Fragment,{children:[e.jsx(y,{open:x}),e.jsxs("article",{className:"w-full p-8 flex flex-col space-y-6 shadow-lg mt-8",children:[e.jsx("section",{className:"",children:e.jsx("h3",{className:"font-base text-orange-400 border-b-1 py-2 border-solid border-gray-300 mb-4",children:s("SELLER_VIEW.CREATE_PRODUCT.CREATE_YOUR_PRODUCT")})}),e.jsxs("section",{className:"w-full flex flex-row  justify-center items-center",children:[e.jsx(P,{}),e.jsx("div",{className:"border-l-1 border-solid border-gray-300 h-24"}),e.jsx(A,{})]}),e.jsx("section",{className:"w-full flex flex-col space-y-2"}),e.jsx(I,{}),e.jsx(O,{}),e.jsxs("section",{className:"flex flex-row w-full space-x-12 justify-between",children:[e.jsx(w,{}),e.jsx(L,{})]}),e.jsxs("section",{className:"flex flex-row space-x-8 pt-4",children:[e.jsx("button",{className:"grow py-2 text-lg font-bold bg-white border-1 border-solid border-gray-300",children:s("SELLER_VIEW.CREATE_PRODUCT.CANCEL")}),e.jsx("button",{onClick:h=>{h.preventDefault(),t(),a(!0)},className:"grow py-2 text-lg text-white bg-orange-400 font-bold",children:s("SELLER_VIEW.CREATE_PRODUCT.SAVE_PRODUCTION")})]})]})]})};export{v as default};
