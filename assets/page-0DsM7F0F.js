import{u as p,a as j,j as s,H as h,B as f,b as r,f as g}from"./index-KCc579kG.js";import{u as b,F as w,a as n,b as o,c as t,d as l,I as c,e as i,t as v,L as F}from"./schema-epYMgSxR.js";const S=()=>{const m=p(),[d]=j(),a=b({resolver:v(F),defaultValues:{username:"",password:""}});async function x(e){await g.signin(e.username);const u=d.get("from")||"/dashboard";return m(u,{replace:!0})}return s.jsxs("div",{className:"bg-app min-h-full",children:[s.jsx(h,{},"login"),s.jsxs("div",{className:"h-full flex flex-col justify-center gap-10 px-4 py-20 xl:px-8",children:[s.jsx(f,{className:"w-auto text-2xl text-app-foreground"}),s.jsxs("div",{className:"bg-main w-full md:max-w-2xl mx-auto p-10 md:py-20 md:px-32 rounded-2xl space-y-5",children:[s.jsx("p",{className:"text-2xl font-bold text-center",children:"Sign in to your account"}),s.jsx(w,{...a,children:s.jsxs("form",{onSubmit:a.handleSubmit(x),className:"space-y-6",children:[s.jsx(n,{control:a.control,name:"username",render:({field:e})=>s.jsxs(o,{children:[s.jsx(t,{children:"Username"}),s.jsx(l,{children:s.jsx(c,{placeholder:"username",...e})}),s.jsx(i,{})]})}),s.jsx(n,{control:a.control,name:"password",render:({field:e})=>s.jsxs(o,{children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx(t,{children:"Password"}),s.jsx(r,{variant:"text",size:"sm",className:"h-auto",children:"Forget password?"})]}),s.jsx(l,{children:s.jsx(c,{placeholder:"password",type:"password",...e})}),s.jsx(i,{})]})}),s.jsx(r,{type:"submit",variant:"active",className:"w-full font-semibold",children:"Sign in"})]})})]})]})]})};export{S as default};