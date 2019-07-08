(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),o=n.n(s),i=n(1),c=n.n(i),l=n(2),u=n(3),d=n(4),m=n(6),f=n(5),p=n(7),h=(n(17),n(18),function(e){var t=e.todo,n=e.setUserInfo;return r.a.createElement("div",{className:"todo-list__item ".concat(t.todo.completed?"todo-list__item--completed":"todo-list__item--uncompleted")},r.a.createElement("p",{className:"todo-list__item__name",onClick:function(){n(t.user)}},t.user.name),r.a.createElement("p",{className:"todo-list__item__title"},t.todo.title),r.a.createElement("p",{className:"todo-list__item__completed"},t.todo.completed?"Completed":"Uncompleted"))}),_=(n(19),function(e){return r.a.createElement("div",{className:"filter"},r.a.createElement("p",{onClick:function(){e.changeFilterField("user","name")}},"User"),r.a.createElement("p",{onClick:function(){e.changeFilterField("todo","title")}},"Title"),r.a.createElement("p",{onClick:function(){e.changeFilterField("todo","completed")}},"Is completed"))}),v=(n(20),function(e){var t=e.user,n=e.setUserInfo;return r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"user__info"},r.a.createElement("h3",{className:"user__name"},t.name),r.a.createElement("div",{className:"user__info__wrapper"},r.a.createElement("p",{className:"user__username"},t.username),r.a.createElement("p",{className:"user__email"},t.email),r.a.createElement("a",{href:t.website,className:"user__website"},t.website))),r.a.createElement("div",{onClick:function(){n()},className:"user__background"}," "))}),E=(n(21),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={filterField:"user",filterSubfield:"name",direction:1,showUserInfo:!1,chosenUser:{}},n.setUserInfo=function(e){e?n.setState({chosenUser:e,showUserInfo:!0}):n.setState({showUserInfo:!1})},n.changeFilterField=function(e,t){var a=n.state,r=a.filterField,s=a.filterSubfield,o=r===e&&s===t?-1*n.state.direction:1;n.setState({filterField:e,filterSubfield:t,direction:o})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"filter",value:function(e,t){var n=this;return this.props.todosList.sort(function(a,r){return"string"===typeof t?String(a[e][t]).localeCompare(String(r[e][t]))*n.state.direction:a[e][t]-r[e][t]*n.state.direction})}},{key:"showList",value:function(){var e=this,t=this.filter(this.state.filterField,this.state.filterSubfield),n=[];return t.forEach(function(t){n.push(r.a.createElement(h,{setUserInfo:e.setUserInfo,key:t.id,todo:t}))}),n}},{key:"render",value:function(){var e=this.state,t=e.showUserInfo,n=e.chosenUser;return r.a.createElement("div",{className:"todo-wrapper"},r.a.createElement(_,{changeFilterField:this.changeFilterField}),r.a.createElement("div",{className:"todo-list"},this.showList()),t&&r.a.createElement(v,{setUserInfo:this.setUserInfo,showUserInfo:t,user:n}))}}]),t}(r.a.Component)),w=(n(22),function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"loading__circle"}))}),b=function(){var e=Object(l.a)(c.a.mark(function e(t){var n,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).handleClickAndLoadTodo=Object(l.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({showLoading:!0}),e.next=3,n.prepareData();case 3:n.setState({showLoading:!1,isLoaded:!0});case 4:case"end":return e.stop()}},e)})),n.state={todosList:[],isLoaded:!1,showLoading:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"prepareData",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,n,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("https://jsonplaceholder.typicode.com/todos");case 2:return t=e.sent,e.next=5,b("https://jsonplaceholder.typicode.com/users");case 5:n=e.sent,a=t.map(function(e){return{todo:e,user:n.find(function(t){return e.userId===t.id})}}),this.setState({todosList:a});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.showLoading,a=e.todosList;return r.a.createElement("main",{className:"main"},n&&r.a.createElement(w,null),!t&&r.a.createElement("button",{className:"load-btn",onClick:this.handleClickAndLoadTodo},"Load"),t&&r.a.createElement(E,{todosList:a}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.cf5e3bfc.chunk.js.map