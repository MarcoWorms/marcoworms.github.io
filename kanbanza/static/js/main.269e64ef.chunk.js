(this.webpackJsonpkanbanza=this.webpackJsonpkanbanza||[]).push([[0],{199:function(t,e,n){},201:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),o=n(76),a=n.n(o),r=n(21),s=n(0),l=n(204),d=n(25),u=n.n(d),b=n(81),j=n(4),f=n(79),O=n(80),p=n.n(O),w=(n(199),n(3)),h=Object(s.a)(Object(s.a)({},u.a),{},{buttons:Object(s.a)(Object(s.a)({},u.a.buttons),{},{primary:Object(s.a)(Object(s.a)({},u.a.buttons.primary),{},{color:"#666",backgroundColor:"#eee",cursor:"pointer","&:hover":{backgroundColor:"#666",color:"#eee"},"&:disabled":{opacity:.2}}),secondary:Object(s.a)(Object(s.a)({},u.a.buttons.secondary),{},{cursor:"pointer","&:hover":{backgroundColor:"blue"}}),warning:{color:"#222",backgroundColor:"rgb(255, 150, 150)",cursor:"pointer","&:hover":{backgroundColor:"red",color:"black"}},outline:Object(s.a)(Object(s.a)({},u.a.buttons.outline),{},{color:"#666",backgroundColor:"#eee",cursor:"pointer","&:hover":{backgroundColor:"#666",color:"#eee"}})})}),m=function(t){var e=Object(c.useState)(!1),n=Object(r.a)(e,2),i=n[0],o=n[1],a=Object(c.useState)(""),s=Object(r.a)(a,2),l=s[0],d=s[1];return i?Object(w.jsx)(f.a,{m:3,width:"92%",height:t.height,maxWidth:t.maxWidth,autoFocus:!0,onChange:function(t){return d(t.target.value)},value:l,onFocus:function(t){t.target.selectionStart=t.target.value.length,t.target.selectionEnd=t.target.value.length},onBlur:function(){o(!1),t.onEdit&&t.onEdit(l)}}):Object(w.jsx)(j.a,{onClick:function(){d(t.children.props.children),o(!0)},children:t.children})},x=function(t){return Object(w.jsxs)(j.c,{minWidth:400,maxWidth:400,m:2,p:2,children:[Object(w.jsxs)(j.d,{justifyContent:"space-between",alignItems:"flex-start",children:[Object(w.jsx)(m,{onEdit:function(e){return D(t.flow,t.task,{title:e},t.setFlow)},maxWidth:260,children:Object(w.jsx)(j.e,{as:"h3",m:2,fontSize:3,className:"wrapHard",maxWidth:270,children:t.title})}),t.editing?Object(w.jsx)(j.b,{variant:"warning",ml:2,onClick:function(){window.confirm("Are you sure?")&&A(t.flow,t.task,t.setFlow)},children:"Delete"}):Object(w.jsxs)(j.d,{children:[Object(w.jsx)(j.b,{variant:"primary",onClick:function(){return F(t.flow,t.task,t.setFlow)},disabled:0===t.stepIndex,children:"<"}),Object(w.jsx)(j.b,{variant:"primary",ml:2,onClick:function(){return C(t.flow,t.task,t.setFlow)},disabled:t.stepIndex===t.flow.steps.length-1,children:">"})]})]}),Object(w.jsx)(m,{height:200,onEdit:function(e){return D(t.flow,t.task,{description:e},t.setFlow)},children:Object(w.jsx)(p.a,{children:t.description})})]})},g=function(t){return Object(w.jsxs)(j.d,{flexDirection:"column",minWidth:420,m:2,className:"wrapHard",children:[Object(w.jsx)(m,{onEdit:function(e){return z(t.flow,t.step,{title:e},t.setFlow)},children:Object(w.jsx)(j.e,{as:"h2",m:1,mt:3,mb:t.editing?2:4,textAlign:"center",fontSize:5,children:t.title})}),t.editing&&Object(w.jsxs)(j.d,{justifyContent:"center",children:[Object(w.jsx)(j.b,{variant:"primary",ml:4,onClick:function(){return S(t.flow,t.stepIndex,t.setFlow)},disabled:0===t.stepIndex,children:"<"}),Object(w.jsx)(j.b,{variant:"primary",ml:2,onClick:function(){return E(t.flow,t.stepIndex,t.setFlow)},disabled:t.stepIndex===t.flow.steps.length-1,children:">"}),Object(w.jsx)(j.b,{variant:"warning",ml:2,onClick:function(){window.confirm("Are you sure?")&&W(t.flow,t.step,t.setFlow)},children:"Delete"})]}),Object(w.jsx)(j.d,{alignItems:"center",flexDirection:"column",children:t.children})]})},k=function(t){return Object(w.jsxs)(j.d,{flexDirection:"column",m:2,children:[Object(w.jsx)(j.d,{justifyContent:"center",children:Object(w.jsx)(m,{onEdit:function(e){return N(t.flow,{title:e},t.setFlow)},children:Object(w.jsx)(j.e,{as:"h1",mb:4,mt:3,fontSize:6,children:t.flow.title})})}),Object(w.jsxs)(j.d,{justifyContent:"center",mb:3,children:[Object(w.jsx)(j.b,{variant:"secondary",onClick:function(){return t.flow.steps.length>0&&y(t.flow,t.setFlow)},children:"Create Task"}),Object(w.jsx)(j.b,{variant:"secondary",ml:2,onClick:function(){return I(t.flow,t.setFlow)},children:"Create Step"}),Object(w.jsx)(j.b,{variant:"secondary",ml:2,onClick:function(){return t.setEditing(!t.editing)},children:"Edit Flow"}),Object(w.jsx)(j.b,{variant:"outline",ml:2,children:"View Metrics (to be done)"})]}),Object(w.jsx)(j.d,{children:t.flow.steps.map((function(e,n){return Object(c.createElement)(g,Object(s.a)(Object(s.a)({editing:t.editing},e),{},{flow:t.flow,setFlow:t.setFlow,key:e.id,step:e,stepIndex:n}),t.flow.tasks.filter((function(t){return t.step===e.id})).slice().sort((function(t,e){return e.updatedAt-t.updatedAt})).map((function(e){return Object(c.createElement)(x,Object(s.a)(Object(s.a)({editing:t.editing},e),{},{flow:t.flow,setFlow:t.setFlow,stepIndex:n,key:e.id,task:e}))})))}))})]})},v=function(t){var e=Object(c.useState)(!1),n=Object(r.a)(e,2),o=n[0],a=n[1],s=function(t,e){var n=i.a.useState((function(){var n=window.localStorage.getItem(e);return null!==n?JSON.parse(n):t})),c=Object(r.a)(n,2),o=c[0],a=c[1];return i.a.useEffect((function(){window.localStorage.setItem(e,JSON.stringify(o))}),[e,o]),[o,a]}({title:"Main Flow",steps:[{id:Object(l.a)(),createdAt:Date.now(),updatedAt:Date.now(),title:"Todo"},{id:Object(l.a)(),createdAt:Date.now(),updatedAt:Date.now(),title:"Doing"},{id:Object(l.a)(),createdAt:Date.now(),updatedAt:Date.now(),title:"Done"}],tasks:[]}),d=Object(r.a)(s,2),u=d[0],f=d[1];return Object(w.jsx)(b.a,{theme:h,children:Object(w.jsx)(j.a,{variant:"styles.root",overflowX:"auto",children:Object(w.jsx)(k,{editing:o,setEditing:a,flow:u,setFlow:f})})})},C=function(t,e,n){t.steps.forEach((function(c,i){c.id===e.step&&n(Object(s.a)(Object(s.a)({},t),{},{tasks:t.tasks.map((function(n){return n.id===e.id?Object(s.a)(Object(s.a)({},e),{},{step:t.steps[i+1].id,updatedAt:Date.now()}):n}))}))}))},F=function(t,e,n){t.steps.forEach((function(c,i){c.id===e.step&&n(Object(s.a)(Object(s.a)({},t),{},{tasks:t.tasks.map((function(n){return n.id===e.id?Object(s.a)(Object(s.a)({},e),{},{step:t.steps[i-1].id,updatedAt:Date.now()}):n}))}))}))},y=function(t,e){e(Object(s.a)(Object(s.a)({},t),{},{tasks:t.tasks.concat({id:Object(l.a)(),title:"A new task!",description:"a **markdown** *powered* description",step:t.steps[0].id,createdAt:Date.now(),updatedAt:Date.now(),deletedAt:null})}))},A=function(t,e,n){n(Object(s.a)(Object(s.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id===e.id?void 0:t})).filter((function(t){return t}))}))},D=function(t,e,n,c){c(Object(s.a)(Object(s.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id===e.id?Object(s.a)(Object(s.a)(Object(s.a)({},e),n),{},{updatedAt:Date.now()}):t}))}))},E=function(t,e,n){var c=null;t.steps.forEach((function(i,o){o===e&&(c=t.steps[o+1],n(Object(s.a)(Object(s.a)({},t),{},{steps:t.steps.map((function(t,e){return e===o?c:t})).map((function(t,e){return e===o+1?i:t}))})))}))},S=function(t,e,n){var c=null;t.steps.forEach((function(i,o){o===e&&(c=t.steps[o-1],n(Object(s.a)(Object(s.a)({},t),{},{steps:t.steps.map((function(t,e){return e===o?c:t})).map((function(t,e){return e===o-1?i:t}))})))}))},I=function(t,e){e(Object(s.a)(Object(s.a)({},t),{},{steps:t.steps.concat({id:Object(l.a)(),title:"New Step",createdAt:Date.now(),updatedAt:Date.now(),deletedAt:null})}))},W=function(t,e,n){n(Object(s.a)(Object(s.a)({},t),{},{steps:t.steps.map((function(t){return t.id===e.id?void 0:t})).filter((function(t){return t})),tasks:t.tasks.map((function(t){return t.step===e.id?void 0:t})).filter((function(t){return t}))}))},z=function(t,e,n,c){c(Object(s.a)(Object(s.a)({},t),{},{steps:t.steps.map((function(t){return t.id===e.id?Object(s.a)(Object(s.a)(Object(s.a)({},e),n),{},{updatedAt:Date.now()}):t}))}))},N=function(t,e,n){n(Object(s.a)(Object(s.a)({},t),e))};var J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,205)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),o(t),a(t)}))};a.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(v,{})}),document.getElementById("root")),J()}},[[201,1,2]]]);
//# sourceMappingURL=main.269e64ef.chunk.js.map