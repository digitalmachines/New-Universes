(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=17},18:function(e,t){},21:function(e,t,a){e.exports=a(53)},26:function(e,t,a){},3:function(e,t,a){},46:function(e,t){},47:function(e,t){},48:function(e,t){},49:function(e,t){},50:function(e,t){},51:function(e,t){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),o=a.n(c);a(26),a(3);function r(){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"New Universe"))}var i=a(6),u=a(2),s=a(20),m=a.n(s);a(44);function d(){var e=new Date,t=e.getUTCMonth()+1,a=e.getUTCDate()-1,c=e.getUTCFullYear()+"-"+t+"-"+a;console.log(c);var o=Object(n.useState)({params:{api_key:"hq6OfwnUZFXxyaBdHUtJxGMV5CUIRo049M2SrdFd",date:c}}),r=Object(i.a)(o,2),s=r[0],d=r[1],f=Object(n.useState)({}),E=Object(i.a)(f,2),h=E[0],g=E[1],v=Object(n.useState)(0),p=Object(i.a)(v,2),w=p[0],b=p[1];return Object(n.useEffect)(function(){m.a.get("https://api.nasa.gov/planetary/apod",s).then(function(e){console.log(e.data),Array.isArray(e.data)?(console.log("This is an array"),console.log("This is an ",typeof e.data," of length ",e.data.length),g(e.data[0])):(console.log("This is an ",typeof e.data),g(e.data))}).catch(function(e){console.log(e)})},[w]),l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",null,l.a.createElement("button",{className:"button",onClick:function(){var e,t,a=(e=new Date(2012,0,1),t=new Date,new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))),n=a.getUTCMonth()+1,l=a.getUTCDate()-1,c=a.getUTCFullYear()+"-"+n+"-"+l;d(Object(u.a)(Object(u.a)({},s),{},{params:Object(u.a)(Object(u.a)({},s.params),{},{date:c})})),console.log(c),b(w+1)}},"New Universe",l.a.createElement("div",{className:"click"},"Click me!"))),l.a.createElement("div",null,l.a.createElement("h1",null,h.title)),l.a.createElement("div",null,l.a.createElement("h2",null,"Date: ",h.date)),l.a.createElement("div",null,l.a.createElement("h2",null,"Copyright: ",h.copyright)),l.a.createElement("div",{className:"caption"},l.a.createElement("h3",null,h.explanation)),l.a.createElement("div",null,l.a.createElement("h3",null,"Counter: ",w))),l.a.createElement("div",{className:"photo-container"},l.a.createElement("img",{src:h.url,alt:h.title})))}function f(){return l.a.createElement("div",{className:"footer"},l.a.createElement("h1",null,"All rights reserved."))}a(52);var E=function(){return l.a.createElement("div",{className:"main-window"},l.a.createElement(r,null),l.a.createElement(d,null),l.a.createElement(f,null))};o.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.39ab101a.chunk.js.map