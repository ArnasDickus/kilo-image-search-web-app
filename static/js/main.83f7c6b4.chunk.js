(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(85)},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(18),r=n.n(i),o=(n(33),n(19)),c=n(20),u=n(26),l=n(21),m=n(6),p=n(25),h=(n(34),n(35),function(e){var t=e.onChange,n=e.input,a=e.handleSubmit;return s.a.createElement("form",{className:"form",onSubmit:a},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-10"},s.a.createElement("input",{name:"input",className:"input",value:n,onChange:function(e){return t(e)},type:"text",placeholder:"Search for images"})),s.a.createElement("div",{className:"col-2"},s.a.createElement("button",{type:"submit",className:"submit u-mr"},"Search"))))}),d=(n(36),n(37),function(e){return e.responseData||console.log("It's empty"),s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{className:"img",id:e.responseData.id,src:e.responseData.urls.thumb,alt:"input"}))}),f=n(22),b=n.n(f),v=n(23),S=n(24),E=n(1);function g(){var e=Object(v.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    "]);return g=function(){return e},e}var w=function(){var e=Object(E.css)(g());return s.a.createElement("div",null,s.a.createElement(S.ClipLoader,{css:e,sizeUnit:"px",size:150,color:"#123abc"}))},D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).onChange=function(e){n.setState({input:e.target.value})},n.handleSubmit=function(e){n.setState({sendData:!0},function(){this.componentDidMount()}),e.preventDefault()},n.state={api_BASE:"https://api.unsplash.com/search/photos",input:"",responseState:"",sendData:!1,spinner:!1},n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.sendData&&(this.setState({spinner:!0}),b.a.get(this.state.api_BASE,{params:{query:this.state.input},headers:{Authorization:"Client-ID 9e30bce2e591d121caded97bef304be5b9e01c5654b86c03c283c07aab1cafd2"}}).then(function(t){e.setState({responseState:t,spinner:!1})}).catch(function(e){alert(e)}))}},{key:"render",value:function(){var e=this,t="";this.state.spinner&&(t=s.a.createElement(w,null));var n="";this.state.sendData&&void 0!==this.state.responseState.data&&(n=this.state.responseState.data.results.map(function(t,n){return s.a.createElement(d,{key:n,responseData:e.state.responseState.data.results[n]})}));return s.a.createElement("div",{className:"App"},s.a.createElement(h,{input:this.state.input,onChange:this.onChange,handleSubmit:this.handleSubmit}),s.a.createElement("div",{className:"limit-width"},n,t))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.83f7c6b4.chunk.js.map