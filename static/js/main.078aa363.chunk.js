(this["webpackJsonpgpa-calculator-nepal"]=this["webpackJsonpgpa-calculator-nepal"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(19),r=c.n(s),l=(c(26),c(27),c(14)),i=c(4),d=c(3),o=c(0);var j=function(e){var t=Object(a.useState)(""),c=Object(d.a)(t,2),n=c[0],s=c[1];return console.log(n),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"dropdown",children:[Object(o.jsx)("label",{htmlFor:"faculty",style:{fontSize:"1.2rem"},children:"Choose a Faculty:\xa0\xa0"}),Object(o.jsx)("select",{className:"btn border",style:{fontSize:"1.2rem"},name:"faculty",id:"faculty",value:n,onClick:function(e){console.log(e.target.value),s(e.target.value)},children:"engineering"===e.faculty?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("option",{className:"dropdown-item",children:"Engineering"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Engineering"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Engineering"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Engineering"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Engineering"})]}):"scienceTech"===e.faculty?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("option",{className:"dropdown-item",children:"Science and Technology"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Science and Technology"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Science and Technology"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Science and Technology"})]}):"management"===e.faculty?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("option",{className:"dropdown-item",children:"Management"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Management"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Management"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Management"})]}):"education"===e.faculty?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("option",{className:"dropdown-item",children:"Education"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Education"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Education"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Education"})]}):"medicine"===e.faculty?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("option",{className:"dropdown-item",children:"Medicine"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Medicine"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Medicine"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Medicine"})]}):"humSs"===e.faculty?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("option",{className:"dropdown-item",children:"Humanities and Social Science"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Humanities and Social Science"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Humanities and Social Science"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Humanities and Social Science"})]}):"agAs"===e.faculty?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("option",{className:"dropdown-item",children:"Agriculture and Animal Science"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Agriculture and Animal Science"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Agriculture and Animal Science"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Agriculture and Animal Science"})]}):"law"===e.faculty?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("option",{className:"dropdown-item",children:"Law"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Law"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Law"}),Object(o.jsx)("option",{className:"dropdown-item",children:"Law"})]}):""})]})})},b={see:{level:"see",compSubjects:["English","Nepali","Mathmatics","Science","Social Science","Helth, POP & ENV EDU","Sanskrit Language","Falit Jyotish"],subDetails:[{sub:"English",subCode:101,creditHr:"4Hr",fullMark:75},{sub:"Nepali",subCode:106,creditHr:"4Hr",fullMark:75},{sub:"Mathmatics",subCode:109,creditHr:"4Hr",fullMark:100},{sub:"Science",subCode:111,creditHr:"4Hr",fullMark:75},{sub:"Social Studies",subCode:123,creditHr:"4Hr",fullMark:75},{sub:"Helth POP ENV EDU",subCode:133,creditHr:"4Hr",fullMark:75},{sub:"Sanskrit Language",subCode:101,creditHr:"4Hr",fullMark:100},{sub:"Falit Jyotish",subCode:135,creditHr:"4Hr",fullMark:100}],performance:["Outstanding","Excellent","Very Good","Good","Satisfactory","Acceptable","Partially Acceptable","Insufficient","Very Insufficient"]},neb:{level:"+2",faculty:["Science","Management","Education","Others"],subDetails:[{faculty:"science",sub:"English",grade:"11"},{faculty:"science",sub:"English",grade:"11"}]},bachelor:{faculty:["Engineering","Science And Technology","Management","Medicine","Education","Humanities And Social Science","Forestry","Agriculture And Animal Science","Law"],courses:{Engineering:["A","B","C"],"Science And Technology":["A","B","C"]}}};var u=function(e){var t=0,c=0,a=(e.comp.map((function(e){t+=parseFloat(e.value),c+=1})),e.opt.map((function(e){t+=parseFloat(e.grd),c+=1})),t/c);return Object(o.jsxs)("div",{className:"text-center text-white bg-success h5 p-2",children:["You Score :\xa0",isNaN(a)?"Insert Compulsary Subject First":Number.parseFloat(a).toFixed(3)," ","\xa0GPA \xa0",isNaN(25*a)?"":"and "+Number.parseFloat(25*a).toFixed(3)+"%"]})},m=c(9),p=c(10),h=[],O=[];var x=function(e){var t=Object(a.useState)(""),c=Object(d.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)([]),l=Object(d.a)(r,2),i=(l[0],l[1]),j=Object(a.useState)(""),b=Object(d.a)(j,2),x=b[0],g=b[1],v=Object(a.useState)(null),N=Object(d.a)(v,2),f=(N[0],N[1]),y=Object(a.useState)(0),S=Object(d.a)(y,2),w=S[0],C=S[1],F=Object(a.useState)(0),A=Object(d.a)(F,2),k=A[0],E=A[1],H=Object(a.useState)(""),M=Object(d.a)(H,2),P=(M[0],M[1],Object(a.useState)([])),_=Object(d.a)(P,2),D=_[0],G=_[1],T=Object(a.useState)(!1),B=Object(d.a)(T,2),L=B[0],I=B[1],z=Object(a.useState)(!1),V=Object(d.a)(z,2),q=V[0],J=V[1],Y=function(e){var t=e.target.id.split(" ").join(""),c=e.target.value,a={};if(e.target.value>4||e.target.value<0||""===e.target.value||" "===e.target.value)s("please input accurate value");else if(s(""),h.length>0){var n=h.findIndex((function(e){return e.key===t}));n>=0?h[n].value=c:(a.key=t,a.value=c,h.push(a))}else a.key=t,a.value=c,h.push(a);R(t),E(h.length)},R=function(e){e=e.split(" ").join("");var t="";h.map((function(c){c.key===e&&c.value>=0&&c.value<=.8?t="E":c.key===e&&c.value>=.8&&c.value<=1.2?t="D":c.key===e&&c.value>=1.2&&c.value<=1.6?t="D+":c.key===e&&c.value>=1.6&&c.value<=2?t="C":c.key===e&&c.value>=2&&c.value<=2.4?t="C+":c.key===e&&c.value>=2.4&&c.value<=2.8?t="B":c.key===e&&c.value>=2.8&&c.value<=3.2?t="B+":c.key===e&&c.value>=3.2&&c.value<=3.6?t="A":c.key===e&&c.value>=3.6&&c.value<=4&&(t="A+")})),document.querySelector("#".concat(e,"grade")).innerText=t},U=e.data.subDetails.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.sub}),Object(o.jsx)("td",{id:e.sub.split(" ").join("")+"grade"}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"number",min:0,max:4,step:.1,onChange:Y,id:e.sub})})]})})),K=D.map((function(e){return Object(o.jsxs)("tr",{id:e.sub,children:[Object(o.jsx)("td",{children:e.sub}),Object(o.jsx)("td",{children:e.grd>=0&&e.grd<=.8?"E":e.grd>=.8&&e.grd<=1.2?"D":e.grd>=1.2&&e.grd<=1.6?"D+":e.grd>=1.6&&e.grd<=2?"C":e.grd>=2&&e.grd<=2.4?"C+":e.grd>=2.4&&e.grd<=2.8?"B":e.grd>=2.8&&e.grd<=3.2?"B+":e.grd>=3.2&&e.grd<=3.6?"A":e.grd>=3.6&&e.grd<=4?"A+":""}),Object(o.jsxs)("td",{children:[e.grd,Object(o.jsx)("button",{className:"text-danger float-end px-3 rounded border-1",style:{cursor:"pointer"},onClick:function(){return function(e){var t=e,c=D.findIndex((function(e){return e.sub===t}));c>=0?(J(!q),I(!0),L&&D.splice(c,1)):console.log("No records")}(e.sub)},children:Object(o.jsx)(m.a,{icon:p.e})})]})]})})),Q=function(e){"subject"===e.target.name?g(e.target.value):"creditHr"===e.target.name?f(e.target.value):"grd"===e.target.name&&(e.target.value>4||e.target.value<0||""===e.target.value||" "===e.target.value?s("please input accurate value"):s(""),C(e.target.value))};return Object(o.jsxs)("div",{className:"result__table",children:[Object(o.jsxs)("table",{className:"table table-striped text-center pt-0",id:"gpa__table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"text-success",children:[Object(o.jsxs)("th",{scope:"col",children:[Object(o.jsx)(m.a,{icon:p.a}),"\xa0 Subject"]}),Object(o.jsxs)("th",{scope:"col",children:[Object(o.jsx)(m.a,{icon:p.c}),"\xa0 Final Grade"]}),Object(o.jsxs)("th",{scope:"col",children:[Object(o.jsx)(m.a,{icon:p.b}),"\xa0 Grade Point"]})]})}),Object(o.jsxs)("tbody",{id:"tbody",children:[Object(o.jsx)("tr",{className:"",style:{textAlign:"left"},children:Object(o.jsxs)("td",{className:"px-4",colSpan:4,children:[Object(o.jsx)("h4",{className:"",children:"Compulsary"}),Object(o.jsx)("h5",{className:"bg-danger text-center",children:n})]})}),U,k>=5?Object(o.jsxs)("tr",{className:"bg-primary text-white",children:[Object(o.jsx)("td",{className:"p-1 m-0 px-2",style:{textAlign:"left"},children:"Optional"}),Object(o.jsx)("td",{colSpan:3,children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={};t.sub=x,t.creditHr="4Hr",t.grd=w,i(t),O.push(t),G(O)},className:"d-flex justify-content-between",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Subject"}),Object(o.jsx)("input",{type:"text",onChange:Q,name:"subject",required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Grade Point"}),Object(o.jsx)("input",{type:"number",onChange:Q,name:"grd",min:0,max:4,step:.1,required:!0})]}),Object(o.jsx)("button",{className:"rounded bg-primary text-white border-1",style:{height:"30px",width:"30px"},children:Object(o.jsx)(m.a,{icon:p.d})})]})})]}):"",K]})]}),Object(o.jsx)("div",{className:"result__gpa text-center bg-light",children:Object(o.jsx)(u,{comp:h,opt:D})}),q?Object(o.jsx)(o.Fragment,{}):""]})},g=[],v=[];var N=function(e){var t=e.faculty,c=Object(a.useState)(""),n=Object(d.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)([]),i=Object(d.a)(l,2),j=(i[0],i[1]),b=Object(a.useState)(""),h=Object(d.a)(b,2),O=h[0],x=h[1],N=Object(a.useState)(null),f=Object(d.a)(N,2),y=(f[0],f[1]),S=Object(a.useState)(0),w=Object(d.a)(S,2),C=w[0],F=w[1],A=Object(a.useState)(0),k=Object(d.a)(A,2),E=(k[0],k[1],Object(a.useState)("")),H=Object(d.a)(E,2),M=(H[0],H[1],Object(a.useState)([])),P=Object(d.a)(M,2),_=P[0],D=P[1],G=Object(a.useState)(!1),T=Object(d.a)(G,2),B=T[0],L=T[1],I=Object(a.useState)(!1),z=Object(d.a)(I,2),V=z[0],q=z[1],J=_.map((function(e){return Object(o.jsxs)("tr",{id:e.sub,children:[Object(o.jsx)("td",{children:e.sub}),Object(o.jsx)("td",{children:e.grd>=0&&e.grd<=.8?"E":e.grd>=.8&&e.grd<=1.2?"D":e.grd>=1.2&&e.grd<=1.6?"D+":e.grd>=1.6&&e.grd<=2?"C":e.grd>=2&&e.grd<=2.4?"C+":e.grd>=2.4&&e.grd<=2.8?"B":e.grd>=2.8&&e.grd<=3.2?"B+":e.grd>=3.2&&e.grd<=3.6?"A":e.grd>=3.6&&e.grd<=4?"A+":""}),Object(o.jsxs)("td",{children:[e.grd,Object(o.jsx)("button",{className:"text-danger float-end px-3 rounded border-1",style:{cursor:"pointer"},onClick:function(){return function(e){var t=e,c=_.findIndex((function(e){return e.sub===t}));c>=0?(q(!V),L(!0),B&&_.splice(c,1)):console.log("No records")}(e.sub)},children:Object(o.jsx)(m.a,{icon:p.e})})]})]})})),Y=function(e){"subject"===e.target.name?x(e.target.value):"creditHr"===e.target.name?y(e.target.value):"grd"===e.target.name&&(e.target.value>4||e.target.value<0||""===e.target.value||" "===e.target.value?r("please input accurate value"):r(""),F(e.target.value))};return Object(o.jsxs)("div",{className:"neb__result",children:[Object(o.jsxs)("table",{className:"table table-striped text-center pt-0",id:"gpa__table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"text-success",children:[Object(o.jsxs)("th",{scope:"col",children:[Object(o.jsx)(m.a,{icon:p.a}),"\xa0 Subject"]}),Object(o.jsxs)("th",{scope:"col",children:[Object(o.jsx)(m.a,{icon:p.c}),"\xa0 Final Grade"]}),Object(o.jsxs)("th",{scope:"col",children:[Object(o.jsx)(m.a,{icon:p.b}),"\xa0 Grade Point"]})]})}),Object(o.jsxs)("tbody",{id:"tbody",children:[s?Object(o.jsx)("tr",{children:Object(o.jsx)("td",{className:"p-0 py-1 px-2 m-0 text-danger text-center h6",colSpan:3,children:s})}):"",Object(o.jsxs)("tr",{className:"bg-primary text-white",children:[Object(o.jsx)("td",{className:"p-1 m-0 p-2",style:{textAlign:"left"},children:Object(o.jsx)("span",{className:"h4 d-block text-center",children:t})}),Object(o.jsx)("td",{colSpan:2,className:"p-2",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={};t.sub=O,t.creditHr="4Hr",t.grd=C,j(t),v.push(t),D(v)},className:"d-flex justify-content-between",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Subject"}),Object(o.jsx)("input",{type:"text",onChange:Y,name:"subject",required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Grade Point"}),Object(o.jsx)("input",{type:"number",onChange:Y,name:"grd",min:0,max:4,step:.1,required:!0})]}),Object(o.jsx)("button",{className:"rounded bg-primary text-white border-1",style:{height:"30px",width:"30px"},children:Object(o.jsx)(m.a,{icon:p.d})})]})})]}),J]})]}),Object(o.jsx)("div",{className:"result__gpa text-center bg-light",children:Object(o.jsx)(u,{comp:g,opt:_})}),V?Object(o.jsx)(o.Fragment,{}):""]})};var f=function(e){var t=Object(a.useState)("see"),c=Object(d.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(""),l=Object(d.a)(r,2),i=l[0],u=l[1];function m(e){u(e.target.value)}return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"border",children:Object(o.jsxs)("div",{className:"filter__levels d-flex p-2 justify-content-between",children:[Object(o.jsx)("div",{className:"level",children:Object(o.jsxs)("div",{className:"dropdown",children:[Object(o.jsx)("label",{htmlFor:"level",className:"",style:{fontSize:"1.2rem"},children:"Choose a Level:\xa0\xa0"}),Object(o.jsxs)("select",{className:"btn border",style:{fontSize:"1rem"},name:"level",id:"level",onChange:function(e){s(e.target.value)},value:n,children:[Object(o.jsx)("option",{className:"dropdown-item",value:"see",children:"SEE"}),Object(o.jsx)("option",{className:"dropdown-item",value:"+2",children:"+2"}),Object(o.jsx)("option",{className:"dropdown-item",value:"bachelors",children:"BACHELOR"})]})]})}),"see"===n?"":"+2"===n?Object(o.jsxs)("div",{className:"dropdown",children:[Object(o.jsx)("label",{htmlFor:"faculty",style:{fontSize:"1.2rem"},children:"Choose a Faculty:\xa0\xa0"}),Object(o.jsxs)("select",{className:"btn border",style:{fontSize:"1.2rem"},name:"faculty",id:"faculty",onChange:m,value:i,children:[Object(o.jsx)("option",{className:"dropdown-item",value:"science",children:"Science"}),";",Object(o.jsx)("option",{className:"dropdown-item",value:"management",children:"Management"}),";",Object(o.jsx)("option",{className:"dropdown-item",value:"education",children:"Education"}),";",Object(o.jsx)("option",{className:"dropdown-item",value:"others",children:"Others"}),";"]})]}):"bachelors"===n?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"dropdown",children:[Object(o.jsx)("label",{htmlFor:"faculty",style:{fontSize:"1.2rem"},children:"Choose a Faculty:\xa0\xa0"}),Object(o.jsxs)("select",{className:"btn border",style:{fontSize:"1.2rem"},name:"faculty",id:"faculty",onChange:m,value:i,children:[Object(o.jsx)("option",{className:"dropdown-item",value:"engineering",children:"Engineering"}),";",Object(o.jsx)("option",{className:"dropdown-item",value:"scienceTech",children:"Science and Technology"}),";",Object(o.jsx)("option",{className:"dropdown-item",value:"management",children:"Management"}),";",Object(o.jsx)("option",{className:"dropdown-item",value:"education",children:"Education"}),";",Object(o.jsx)("option",{className:"dropdown-item",value:"medicine",children:"Medicine"}),";",Object(o.jsx)("option",{className:"dropdown-item",value:"humSs",children:"Humanities and Social Science"}),Object(o.jsx)("option",{className:"dropdown-item",value:"agAs",children:"Ag and Animal Science"}),";",Object(o.jsx)("option",{className:"dropdown-item",value:"law",children:"Law"}),";"]})]}),Object(o.jsx)(j,{faculty:i})]}):""]})}),"see"===n?Object(o.jsx)(x,{data:b.see}):"+2"===n||"bachelors"===n?Object(o.jsx)(N,{faculty:i}):""]})};var y=function(){return Object(o.jsx)("div",{className:"home w-100",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(f,{})})})};c(34);var S=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),c=(t[0],t[1],Object(a.useState)(0)),n=Object(d.a)(c,2),s=(n[0],n[1],Object(a.useState)("")),r=Object(d.a)(s,2),l=r[0],i=r[1];function j(e,t){var c="";"gpa"===e?(c=25*parseFloat(t),(c=Number.parseFloat(c).toFixed(2))&&i(c+" %")):"percentage"===e&&(c=parseFloat(t)/25,(c=Number.parseFloat(c).toFixed(2))&&i(c+" gpa"))}return Object(o.jsxs)("div",{className:"converter",children:[Object(o.jsx)("h1",{children:"Convet Here..."}),Object(o.jsxs)("div",{className:"gpa_to_percentage",children:[Object(o.jsxs)("div",{className:"gpa",children:[Object(o.jsx)("label",{htmlFor:"input",children:"Input your GPA"}),Object(o.jsx)("input",{type:"number",min:0,max:4,step:.1,placeholder:"GPA  ",onChange:function(e){var t=e.target.value;t>4||t<0||" "===t?i("Please Check Your Value."):(i(""),j("gpa",t))}})]}),Object(o.jsxs)("div",{className:"result text-center",children:[Object(o.jsx)("span",{className:"",children:"Result"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"text-danger",children:l})]}),Object(o.jsxs)("div",{className:"percentage",children:[Object(o.jsx)("label",{htmlFor:"input",children:"Input your Percentage"}),Object(o.jsx)("input",{type:"number",min:0,max:100,step:1,placeholder:"%",onChange:function(e){var t=e.target.value;t>100||t<0||" "===t?i("Please Check Your Value."):(i(""),j("percentage",t))}})]})]})]})};var w=function(){return Object(o.jsx)("div",{className:"navbar py-0",children:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-lg d-block w-100",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(l.b,{className:"navbar-brand text-light",to:"/",children:"GPA Coverter Nepal"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{className:"nav-link","aria-current":"page",to:"/converter",children:"Converter"})})})})]})}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/converter",children:Object(o.jsx)(S,{})}),Object(o.jsx)(i.a,{path:"/",children:Object(o.jsx)(y,{})})]})]})})})};var C=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(w,{})})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.078aa363.chunk.js.map