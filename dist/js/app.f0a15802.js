(function(t){function e(e){for(var a,c,s=e[0],i=e[1],d=e[2],l=0,b=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(b.length)b.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07cb":function(t,e,n){"use strict";n("71a1")},"3f58":function(t,e,n){"use strict";n("4015")},4015:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=n("cf05"),o=n.n(r),c=Object(a["d"])("img",{id:"vue-logo",alt:"Vue logo",src:o.a},null,-1),s={class:"container"};function i(t,e,n,r,o,i){var d=Object(a["l"])("Heading"),u=Object(a["l"])("AddTask"),l=Object(a["l"])("Tasks"),b=Object(a["l"])("Footer");return Object(a["h"])(),Object(a["c"])(a["a"],null,[c,Object(a["d"])("div",s,[Object(a["e"])(d,{showAddTask:o.showAddTask,onToggleAddTask:i.toggleAddTask,title:"Task Tracker"},null,8,["showAddTask","onToggleAddTask"]),Object(a["p"])(Object(a["d"])("div",null,[Object(a["e"])(u,{onAddTask:i.addTask},null,8,["onAddTask"])],512),[[a["o"],o.showAddTask]]),Object(a["e"])(l,{onToggleReminder:i.toggleReminder,tasks:o.tasks,onDeleteTask:i.deleteTask},null,8,["onToggleReminder","tasks","onDeleteTask"]),Object(a["e"])(b)])],64)}var d=n("5530"),u=n("2909");n("e9c4"),n("99af"),n("4de4"),n("d3b7"),n("d81d");function l(t,e,n,r,o,c){var s=Object(a["l"])("Button");return Object(a["h"])(),Object(a["c"])("header",null,[Object(a["d"])("h1",null,Object(a["m"])(n.title),1),Object(a["e"])(s,{onBtnClick:e[0]||(e[0]=function(e){return t.$emit("toggle-add-task")}),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"red":"green"},null,8,["text","color"])])}function b(t,e,n,r,o,c){return Object(a["h"])(),Object(a["c"])("button",{onClick:e[0]||(e[0]=function(t){return c.onClick()}),style:Object(a["g"])({background:n.color}),class:"btn"},Object(a["m"])(n.text),5)}var f={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}},k=n("6b0d"),p=n.n(k);const O=p()(f,[["render",b]]);var j=O,h={name:"Heading",props:{title:String,showAddTask:Boolean},components:{Button:j}};n("07cb");const m=p()(h,[["render",l],["__scopeId","data-v-58ec8cea"]]);var g=m;function T(t,e,n,r,o,c){var s=Object(a["l"])("Task");return Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(n.tasks,(function(e){return Object(a["h"])(),Object(a["c"])("div",{key:e.id},[Object(a["e"])(s,{onToggleReminder:function(n){return t.$emit("toggle-reminder",e.id)},onDeleteTask:function(n){return t.$emit("delete-task",e.id)},task:e},null,8,["onToggleReminder","onDeleteTask","task"])])})),128)}var v={class:"task-leftSide"},y=["checked"];function x(t,e,n,r,o,c){return Object(a["h"])(),Object(a["c"])("div",{class:Object(a["f"])(["task",[n.task.reminder?"reminder":"","task"]])},[Object(a["d"])("h3",null,[Object(a["d"])("div",v,[Object(a["d"])("input",{type:"checkbox",class:"task-checkbox",onClick:e[0]||(e[0]=function(e){return t.$emit("toggle-reminder",n.task.id)}),checked:!!n.task.reminder},null,8,y),Object(a["d"])("p",{class:Object(a["f"])(n.task.reminder?"line-through":""),id:"task-text"},Object(a["m"])(n.task.text),3)]),Object(a["d"])("i",{onClick:e[1]||(e[1]=function(t){return c.onDelete(n.task.id)}),class:"fas fa-times"})]),Object(a["d"])("p",null,Object(a["m"])(n.task.day),1)],2)}var A={name:"Task",props:{task:Object},methods:{onDelete:function(t){this.$emit("delete-task",t)}}};n("9c61");const w=p()(A,[["render",x]]);var S=w,_={name:"Tasks",components:{Task:S},props:{tasks:Array},emits:["delete-task","toggle-reminder"]};const D=p()(_,[["render",T]]);var C=D,P=function(t){return Object(a["j"])("data-v-4aa5ea10"),t=t(),Object(a["i"])(),t},$={class:"form-control"},M=P((function(){return Object(a["d"])("label",{for:""},"Task",-1)})),R={class:"form-control"},B=P((function(){return Object(a["d"])("label",{for:""},"Day & Time",-1)})),I=P((function(){return Object(a["d"])("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)}));function J(t,e,n,r,o,c){return Object(a["h"])(),Object(a["c"])("form",{onSubmit:e[2]||(e[2]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),action:"",class:"add-form"},[Object(a["d"])("div",$,[M,Object(a["p"])(Object(a["d"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.text=t}),name:"task",placeholder:"Add Task..."},null,512),[[a["n"],o.text]])]),Object(a["d"])("div",R,[B,Object(a["p"])(Object(a["d"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.day=t}),name:"day",placeholder:"Add Day & Time"},null,512),[[a["n"],o.day]])]),I],32)}var F={name:"AddTask",data:function(){return{text:"",day:""}},methods:{onSubmit:function(t){if(t.preventDefault(),this.text){var e={id:Math.floor(1e6*Math.random()),text:this.text,day:this.day};this.$emit("add-task",e),this.text="",this.day=""}else alert("Please add a task")}}};n("3f58");const H=p()(F,[["render",J],["__scopeId","data-v-4aa5ea10"]]);var V=H,N=function(t){return Object(a["j"])("data-v-172aac8a"),t=t(),Object(a["i"])(),t},U=N((function(){return Object(a["d"])("p",null,"Copyright © 2021",-1)})),q=[U];function z(t,e,n,r,o,c){return Object(a["h"])(),Object(a["c"])("footer",null,q)}var E={name:"Footer"};n("c002");const G=p()(E,[["render",z],["__scopeId","data-v-172aac8a"]]);var K=G,L={name:"App",components:{Heading:g,Tasks:C,AddTask:V,Footer:K},data:function(){return{tasks:[],showAddTask:!1}},methods:{storeTasks:function(t){localStorage.setItem("tasks",JSON.stringify(t))},getTasks:function(){var t=JSON.parse(localStorage.getItem("tasks"));return t},addTask:function(t){var e=this.tasks=[].concat(Object(u["a"])(this.tasks),[t]);this.storeTasks(e)},deleteTask:function(t){var e=this.tasks=this.tasks.filter((function(e){return e.id!==t}));this.storeTasks(e)},toggleReminder:function(t){var e=this.tasks=this.tasks.map((function(e){return e.id===t?Object(d["a"])(Object(d["a"])({},e),{},{reminder:!e.reminder}):e}));this.storeTasks(e)},toggleAddTask:function(){this.showAddTask=!this.showAddTask}},created:function(){this.tasks=this.getTasks()}};n("8af3");const Q=p()(L,[["render",i]]);var W=Q;Object(a["b"])(W).mount("#app")},"71a1":function(t,e,n){},"8af3":function(t,e,n){"use strict";n("eba9")},"8b85":function(t,e,n){},"9c61":function(t,e,n){"use strict";n("8b85")},a987:function(t,e,n){},c002:function(t,e,n){"use strict";n("a987")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},eba9:function(t,e,n){}});
//# sourceMappingURL=app.f0a15802.js.map