(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(20)},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),s=n(1),u=n.n(s),i=n(4),h=n(5),l=n(6),m=n(8),f=n(7),p=n(9),w=(n(18),function(t){function e(){var t,n;Object(h.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).state={currentQuote:void 0},n.quoteFetcher=function(){var t=Object(i.a)(u.a.mark(function t(e){var a,r,o;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,0,o=Math.floor(Math.random()*r.quotes.length),n.setState({currentQuote:r.quotes[o].quote,currentAuthor:r.quotes[o].author});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"quote__box"},r.a.createElement("button",{onClick:this.quoteFetcher,className:"new__quote__button"},"New Quote"),this.state.currentQuote&&r.a.createElement("p",{className:"quote__quotations__left"},'"'),this.state.currentQuote&&r.a.createElement("h1",{className:"current__quote"},this.state.currentQuote),this.state.currentQuote&&r.a.createElement("p",{className:"quote__quotations__right"},'"'),this.state.currentAuthor&&r.a.createElement("h1",{className:"current__author"},this.state.currentAuthor)))}}]),e}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.f7d73d79.chunk.js.map