(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(8),l=n.n(c),r=(n(14),n(6)),o=n(1),u=n(3),s=n(2),d=(n(15),function(e){return i.a.createElement("button",{onClick:e.callBack},e.title)}),f=function(e){var t=Object(a.useState)(null),n=Object(s.a)(t,2),c=n[0],l=n[1];return i.a.createElement("div",null,i.a.createElement("input",{value:e.newTaskValue,onChange:function(t){e.setNewTaskValue(t.target.value),l(null)},onKeyPress:function(t){if("Enter"===t.key){if(""===e.newTaskValue)return void l("Empty input");e.addTask(e.newTaskValue),l(null)}}}),c&&i.a.createElement("div",{style:{color:"red"}},c))};function m(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],l=n[1],r=function(t){e.addTask(c,e.id)},o=function(t){e.changeIsDone(t,e.id)},u=function(t){e.changeFilter(t,e.id)};return i.a.createElement("div",null,i.a.createElement("h3",null,e.title),i.a.createElement("div",null,i.a.createElement(f,{newTaskValue:c,setNewTaskValue:l,addTask:r}),i.a.createElement(d,{callBack:function(){r()},title:"+"})),i.a.createElement("ul",null,e.tasks.map((function(t){return i.a.createElement("li",{key:t.id},i.a.createElement(d,{callBack:function(){return n=t.id,void e.removeTask(n,e.id);var n},title:"x"}),i.a.createElement("input",{id:t.id,type:"checkbox",onChange:o,checked:t.isDone}),i.a.createElement("span",null,t.title))}))),i.a.createElement("div",null,i.a.createElement(d,{callBack:function(){return u("All")},title:"All"}),i.a.createElement(d,{callBack:function(){return u("Active")},title:"Active"}),i.a.createElement(d,{callBack:function(){return u("Completed")},title:"Completed"})))}var b=n(18);var j=function(){var e,t=Object(b.a)(),n=Object(b.a)(),c=Object(a.useState)([{id:t,filter:"All",title:"What to learn"},{id:n,filter:"All",title:"What to buy"}]),l=Object(s.a)(c,2),d=l[0],f=l[1],j=Object(a.useState)((e={},Object(u.a)(e,t,[{id:Object(b.a)(),title:"Hello world",isDone:!0},{id:Object(b.a)(),title:"I am Happy",isDone:!1},{id:Object(b.a)(),title:"Yo",isDone:!1}]),Object(u.a)(e,n,[{id:Object(b.a)(),title:"Hello world",isDone:!0},{id:Object(b.a)(),title:"I am Happy",isDone:!1},{id:Object(b.a)(),title:"Yo",isDone:!1}]),e)),k=Object(s.a)(j,2),O=k[0],v=k[1],p=function(e,t){return O[t]=O[t].filter((function(t){return t.id!==e})),v(Object(o.a)({},O))},E=function(e,t){if(""!==e){var n={id:Object(b.a)(),title:e,isDone:!1};return v(Object(o.a)(Object(o.a)({},O),{},Object(u.a)({},t,[n].concat(Object(r.a)(O[t])))))}},h=function(e,t){var n=O[t].map((function(t){return t.id===e.currentTarget.id?(t.isDone=!t.isDone,t):t}));v(Object(o.a)(Object(o.a)({},O),{},Object(u.a)({},t,n)))},w=function(e,t){f(Object(r.a)(d.map((function(n){return n.id===t?Object(o.a)(Object(o.a)({},n),{},{filter:e}):n}))))};return i.a.createElement("div",{className:"App"},d.map((function(e){var t=O[e.id];return"Active"===e.filter&&(t=O[e.id].filter((function(e){return!e.isDone}))),"Completed"===e.filter&&(t=O[e.id].filter((function(e){return e.isDone}))),i.a.createElement(m,{addTask:E,key:e.id,id:e.id,changeIsDone:h,tasks:t,changeFilter:w,title:e.title,removeTask:p})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d6fdbac3.chunk.js.map