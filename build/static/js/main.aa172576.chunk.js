(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e){e.exports=[{id:"1",description:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",company:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",taste:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",promo:{portion:"10 \u043f\u043e\u0440\u0446\u0438\u0439",gift:"\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"},serving:"0,5",info:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",link:"#"},{id:"2",description:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",company:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",taste:"\u0441 \u0440\u044b\u0431\u043e\u0439",promo:{portion:"40 \u043f\u043e\u0440\u0446\u0438\u0439",gift:"2 \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"},serving:"2",info:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",link:"#"},{id:"3",description:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",company:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",taste:"\u0441 \u043a\u0443\u0440\u043e\u0439",promo:{portion:"100 \u043f\u043e\u0440\u0446\u0438\u0439",gift:"5 \u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d"},serving:"5",info:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",link:"#",status:"disabled"}]},function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(9),i=n.n(c),o=(n(17),n(3)),r=n(4),l=n(6),m=n(5),p=n(7),d=n(1),u=(n(19),n(20),n(21),n(10)),h=n(2),v=(n(22),Object(d.cn)("Product")),f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).selectItem=n.selectItem.bind(Object(h.a)(Object(h.a)(n))),n.state={selected:!1},n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"selectItem",value:function(e){this.setState({selected:!this.state.selected})}},{key:"render",value:function(){var e=this.state.selected?this.props.info:a.createElement(a.Fragment,null,"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d",a.createElement("a",{className:v("Link"),href:this.props.link,onClick:this.selectItem},"\u043a\u0443\u043f\u0438"));return a.createElement("div",{className:v("Item",{status:this.props.status,selected:this.state.selected})},a.createElement("div",{className:v("Card"),onClick:this.selectItem},a.createElement("div",{className:v("Description")},a.createElement("div",{className:v("DescriptionText")},this.props.description),a.createElement("div",{className:v("Hint")},"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?")),a.createElement("div",{className:v("Company")},this.props.company),a.createElement("div",{className:v("Taste")},this.props.taste),a.createElement("div",{className:v("Promo")},a.createElement("p",{className:v("Portion")},this.props.promo.portion),a.createElement("p",{className:v("Gift")},this.props.promo.gift)),a.createElement("img",{className:v("Image"),src:"./img/cat.png",alt:"Funbox cat"}),a.createElement("div",{className:v("Serving")},a.createElement("div",{className:v("Weight")},this.props.serving),a.createElement("div",{className:v("Units")},"\u043a\u0433"))),a.createElement("div",{className:v("Info")},this.props.status?"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, ".concat(this.props.taste," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."):e))}}]),t}(a.Component),g=Object(d.cn)("Product"),E=function(e){var t=e.className,n=u.map(function(e){return a.createElement(f,{key:e.id,description:e.description,company:e.company,taste:e.taste,promo:e.promo,serving:e.serving,info:e.info,link:e.link,status:e.status})});return a.createElement("div",{className:"".concat(g()," ").concat(t)},n)},b=Object(d.cn)("Page"),N=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:b(),style:{backgroundImage:"url(img/bg.png)"}},s.a.createElement("h1",{className:b("Title")},"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),s.a.createElement(E,{className:b("Product")}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.aa172576.chunk.js.map