(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(19),a(20),a(1)),s=a(6),i=a.n(s);a(4);var m=e=>{const[t,a]=Object(n.useState)(null),{projectId:l,project:c}=e,s=Object(o.p)();return Object(n.useEffect)(()=>{t&&(console.log("selectedProject inside useEffect:",t),s("/donate/".concat(t.id),{state:{selectedProject:t}}))},[t,s]),c?r.a.createElement("div",{className:"project_box",onClick:()=>void c.id},r.a.createElement("h2",{className:"project_box_name"},c.name||" "),r.a.createElement("button",{type:"button",className:"project_box_donate_button",onClick:()=>(e=>{console.log("project after donate button click",e),a(e),console.log("selectedProject after setstate",t)})(c)},"Make a donation!"),r.a.createElement("img",{className:"project_box_pic",src:c.picture}),r.a.createElement("p",{className:"project_box_desc"},c.description),r.a.createElement("p",{className:"project_created_by"},"Created By: ",c.created_by),r.a.createElement("span",{className:"project_box_funds"},"$",(c.funding_current||"0").toLocaleString("en-US",{style:"currency",currency:"CAD"})," ","raised!"),r.a.createElement("br",null),r.a.createElement("span",null,"Remaining Funds: CAD $",c.funding_target-c.funding_current," ")):r.a.createElement("div",null,"Projects details not available now.")};var u=e=>{const{projectsData:t}=e;if(!t)return r.a.createElement("div",null,"Loading data..");const a=Array.isArray(t)?t.map(e=>r.a.createElement(m,{key:e.id,project:e})):null;return r.a.createElement("div",{className:"projectlist"},a)};var d=()=>{i.a.get("userid");const[e,t]=Object(n.useState)([]);return Object(n.useEffect)(()=>{(async()=>{const e=await async function(){try{const t=await fetch("http://localhost:3001/api/projects/",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});return t.ok?await t.json():(console.error("Failed to fetch all projects: ",t.status),null)}catch(e){return console.error("Fetch error: ",e),null}}();t(e.projectsData)})()},[]),r.a.createElement("div",{className:"main-page"},r.a.createElement("div",{className:"center-section"},r.a.createElement("div",{className:"image-placeholder"},r.a.createElement("img",{src:"../images/fmg-small.png"})),r.a.createElement("p",null,"Welcome to FundMe! A crowdfunding app")),r.a.createElement("div",{className:"bottom-section"},r.a.createElement("div",{className:"active-projects"},r.a.createElement("span",{className:"title-active-projects"},"Available Projects"),r.a.createElement(u,{projectsData:e}))))};var p=()=>{const[e,t]=Object(n.useState)(""),[a,l]=Object(n.useState)(""),[c,s]=Object(n.useState)(""),i=Object(o.p)();return r.a.createElement("div",{className:"register-container"},r.a.createElement("form",{className:"register-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"User Name:"),r.a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",value:a,onChange:e=>l(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",value:c,onChange:e=>s(e.target.value)})),r.a.createElement("div",{className:"form-actions"},r.a.createElement("button",{type:"button",onClick:async t=>{t.preventDefault();const n={username:e,password:c,email:a};console.log("payload-register",n);try{return(await fetch("http://localhost:3001/api/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).ok?(console.log("User registered successfully!"),r.a.createElement(o.a,{to:"/projects"})):(console.log("Unsuccessful registration"),r.a.createElement(o.a,{to:"/"}))}catch(l){return r.a.createElement(o.a,{to:"/"})}}},"Register"),r.a.createElement("button",{type:"button",onClick:()=>{i(-1)}},"Cancel"))))};var E=()=>{const[e,t]=Object(n.useState)(""),[a,l]=Object(n.useState)(""),[c,s]=Object(n.useState)(""),i=Object(o.p)();return r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{className:"login-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",value:a,onChange:e=>l(e.target.value)})),r.a.createElement("div",{className:"form-actions"},r.a.createElement("button",{type:"button",onClick:async t=>{t.preventDefault();const n={password:a,email:e};try{(await fetch("http://localhost:3001/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)})).ok?(s("Login successful"),i("/")):(console.log("Unsuccessful Login, Try again!"),s("Login failed,Please Try again!"))}catch(r){}}},"Submit"),r.a.createElement("button",{type:"button",onClick:()=>{i(-1)}},"Cancel"))),r.a.createElement("h3",null,c))};var b=()=>{const e=Object(o.p)();Object(n.useEffect)(()=>{const t=fetch("http://localhost:3001/api/users/logout",{method:"POST",credentials:"include"});t.ok&&e("/login")})};var g=e=>{const{donationId:t,donation:a}=e;return r.a.createElement("div",{className:"donation_box"},r.a.createElement("h2",{className:"donation_project_name"},a.project_name),r.a.createElement("span",{className:"donation_box_funds"},"$",(a.funding_amount||" ").toLocaleString("en-US",{style:"currency",currency:"CAD"})," ","raised!")," ",r.a.createElement("span",null,"Date:"," ",a.donation_date.toLocaleString({year:"numeric",month:"long",day:"numeric"})))};var v=e=>{const{donationsData:t}=e;if(!t)return r.a.createElement("div",null,"Loading data..");const a=Array.isArray(t)?t.map(e=>r.a.createElement(g,{key:e.id,donation:e})):null;return r.a.createElement("div",{className:"funding"},a)},j=a(3);var h=e=>{var t;const[a,l]=Object(n.useState)([]),[c,s]=Object(n.useState)([]),i=null===(t=Object(o.n)().state)||void 0===t?void 0:t.currentUserId,m=Object(o.p)();return i||(console.log("user not logged in, redirecting to login page"),m("/login")),Object(n.useEffect)(()=>{(async()=>{const e=await async function(e){try{const a=await fetch("http://localhost:3001/api/projects/user/".concat(e),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});return a.ok?await a.json():(console.error("Failed to fetch: ",a.status),null)}catch(t){return console.error("Fetch error: ",t),null}}(i);s(e.projectsData)})(),(async()=>{const e=await async function(e){try{const e=await fetch("http://localhost:3001/api/donations/userid",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});return e.ok?await e.json():(console.error("Failed to fetch: ",e.status),null)}catch(t){return console.error("Fetch error: ",t),null}}();l(e.donationsdata)})()},[i]),r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section",id:"userproject"},r.a.createElement("h2",null,"My Projects"),r.a.createElement(u,{projectsData:c})),r.a.createElement("div",{className:"section",id:"funded"},r.a.createElement("h2",null,"What you're funding"),r.a.createElement(v,{donationsData:a})),r.a.createElement("div",{className:"section",id:"create"},r.a.createElement("h2",null,"Create your own project"),r.a.createElement("p",null,r.a.createElement("button",null,r.a.createElement(j.b,{to:{pathname:"/createproject"},state:{currentUserId:i}},"Create a new Project!"))))))};var f=()=>{const[e,t]=Object(n.useState)(""),[a,l]=Object(n.useState)(""),[c,o]=Object(n.useState)("");return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Create a New Project"),r.a.createElement("form",{onSubmit:t=>{t.preventDefault(),console.log({projectName:e,projectType:a,fundraisingGoal:c})}},r.a.createElement("label",{className:"form-label"},"Project Name:",r.a.createElement("input",{className:"form-input",type:"text",value:e,onChange:e=>t(e.target.value),required:!0})),r.a.createElement("label",{className:"form-label"},"Project Type:",r.a.createElement("select",{className:"form-input",value:a,onChange:e=>l(e.target.value),required:!0},r.a.createElement("option",{value:""},"Select Project Type"),r.a.createElement("option",{value:"charity"},"Charity"),r.a.createElement("option",{value:"medical"},"Medical"),r.a.createElement("option",{value:"personal"},"Personal"))),r.a.createElement("label",{className:"form-label"},"Fundraising Goal:",r.a.createElement("input",{className:"form-input",type:"number",value:c,onChange:e=>o(e.target.value),required:!0})),r.a.createElement("button",{type:"submit"},"Submit")))};var y=e=>{const t=e.currentUserId;return r.a.createElement("div",{className:"top-nav-bar"},r.a.createElement("div",{className:"logo-container"}),t?r.a.createElement("div",null,r.a.createElement(j.b,{to:{pathname:"/userdashboard"},state:{currentUserId:t}},"My Dashboard"),r.a.createElement(j.b,{to:"/logout"},"Logout")):r.a.createElement("div",null,r.a.createElement(j.b,{to:"/register"},"Register"),r.a.createElement(j.b,{to:"/login"},"Login")))},N=a(5);a(21);var C=e=>{let{selectedProject:t}=e;const a=Object(N.useStripe)(),l=Object(N.useElements)(),[c,o]=Object(n.useState)(""),[s,i]=Object(n.useState)(0);return c?r.a.createElement("div",{className:"success"},r.a.createElement("h2",null,"Payment Successful!"),r.a.createElement("a",{href:c},"View Receipt"),r.a.createElement(j.b,{to:"/"},"Home")):r.a.createElement("div",{className:"checkout-form"},r.a.createElement("form",{onSubmit:async e=>{if(e.preventDefault(),!a||!l)return;const{token:n}=await a.createToken(),r=await fetch("http://localhost:3001/api/stripe/charge/".concat(t.id),{amount:s,source:n.id,receipt_email:"customer@example.com"});o(r.data.charge.receipt_url)}},r.a.createElement("label",null,"Enter Amount:"),r.a.createElement("input",{name:"donationAmount",value:s,onChange:i}),r.a.createElement("label",null,"Card details",r.a.createElement(N.CardNumberElement,null)),r.a.createElement("label",null,"Expiration date",r.a.createElement(N.CardExpiryElement,null)),r.a.createElement("label",null,"CVC",r.a.createElement(N.CardCvcElement,null)),r.a.createElement("button",{type:"submit",className:"order-button"},"Pay")))},O=a(10);const w=Object(O.a)("pk_test_51OGSmrGBWq3wvvTYs1Ig4o0uCrI4vpUr2Dd0k9synE4b2F5zjkvke5y6d1nVvb4lXw4wExdaTo4gIuOQoaAy2tSE00mYzgTgDp");var S=()=>{var e;const t=null===(e=Object(o.n)().state)||void 0===e?void 0:e.selectedProject;return console.log("selectedProject received in Checkout compoent",t),Object(n.useEffect)(()=>{window.scrollTo(0,0)},[]),r.a.createElement(N.Elements,{stripe:w},r.a.createElement(C,{selectedProject:t}))};var _=function(){const e=i.a.get("userid");return console.log("currentuserid: ",e),r.a.createElement("div",{className:"App"},r.a.createElement(y,{currentUserId:e}),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",element:r.a.createElement(d,null)}),r.a.createElement(o.b,{path:"/register",element:r.a.createElement(p,null)}),r.a.createElement(o.b,{path:"/login",element:r.a.createElement(E,null)}),r.a.createElement(o.b,{path:"/logout",element:r.a.createElement(b,null)}),r.a.createElement(o.b,{path:"/userdashboard",element:r.a.createElement(h,null)}),r.a.createElement(o.b,{path:"/createproject",element:r.a.createElement(f,null)}),r.a.createElement(o.b,{path:"/donate/:projectid",element:r.a.createElement(S,null)})))};var k=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:l,getTTFB:c}=t;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(j.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)))),k()},4:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.9d3759da.chunk.js.map