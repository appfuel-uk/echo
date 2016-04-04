webpackJsonp([1],[/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(t,o,n){(function(t){"use strict";n(9),n(2),n(10),t.mount("app")}).call(o,n(1))},,/*!***********************!*\
  !*** ./src/stores.js ***!
  \***********************/
function(t,o,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var e=n(11),a=i(e),s={blog:a["default"]};o["default"]=s},/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
function(t,o,n){(function(t){"use strict";t.tag2("app",'<section> <header> <nav> <ul> <li><a href="#posts">Home</a></li> </ul> </nav> </header> <article> <div id="mainview"></div> </article> <footer> <nav> <a onclick="{resetData}">Reset Data</a> </nav> </footer> </section>',"","",function(o){var n=this;this._currentView=null,this.resetData=function(){t.control.trigger(t.VE.RESET_DATA)},this.loadView=function(o,i){n._currentView&&n._currentView.unmount(!0),n._currentView=t.mount("div#mainview",o,{data:i})[0]},this.studyRoute=function(t,o){switch(t){case"categories":n.loadView("categories-view");break;case"detail":n.loadView("detail-view",o);break;case"posts":n.loadView("posts-view");break;default:n.loadView("posts-view")}},t.route(this.studyRoute),this.on("mount",function(){t.control.trigger(t.VE.RESET_DATA),t.route.start(!0)})})}).call(o,n(1))},/*!*************************************!*\
  !*** ./src/component/postcell.html ***!
  \*************************************/
function(t,o,n){(function(t){"use strict";t.tag2("postcell",'<div> <span>Title: <a href="#detail/{opts.data._id}">{opts.data.data.title}</a></span> </div>',"","",function(t){})}).call(o,n(1))},/*!************************************!*\
  !*** ./src/component/rawhtml.html ***!
  \************************************/
function(t,o,n){(function(t){"use strict";t.tag2("rawhtml","<span></span>","","",function(t){this.on("updated",function(){this.root.innerHTML=t.content})})}).call(o,n(1))},/*!***************************************!*\
  !*** ./src/view/categories-view.html ***!
  \***************************************/
function(t,o,n){(function(t){"use strict";t.tag2("categories-view",'<div each="{category, posts in _postsInCategories}"> <h3>{category}</h3> <postcell each="{posts}" data="{this}"></postcell> <hr> </div>',"","",function(o){var n=this;this.mixin("controlMixin"),this._postsInCategories={},this.on("mount",function(){t.control.trigger(t.VE.LOAD_POSTS)}),this.onControl(t.SE.POSTS_CHANGED,function(t){n._postsInCategories=t.reduce(function(t,o){return t[o.category]=t[o.category]||[],t[o.category].push(o),t},{}),n.update()})})}).call(o,n(1))},/*!***********************************!*\
  !*** ./src/view/detail-view.html ***!
  \***********************************/
function(t,o,n){(function(t){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var i=n(2),e=o(i);t.tag2("detail-view",'<h2>{_post.data.title}</h2> <rawhtml content="{_post.data.content}"></rawhtml>',"","",function(o){var n=this;this.mixin("controlMixin"),this.onControl(t.SE.POSTS_CHANGED,function(t){n.readData()}),this.readData=function(){n._post=e["default"].blog.getPostById(o.data),n._total=e["default"].blog._posts.length,n.update()},this.readData()})}).call(o,n(1))},/*!**********************************!*\
  !*** ./src/view/posts-view.html ***!
  \**********************************/
function(t,o,n){(function(t){"use strict";t.tag2("posts-view",'<postcell each="{_posts}" data="{this}"></postcell>',"","",function(o){var n=this;this.mixin("controlMixin"),this._posts=[],this.on("mount",function(){t.control.trigger(t.VE.LOAD_POSTS)}),this.onControl(t.SE.POSTS_CHANGED,function(t){n._posts=t,n.update()})})}).call(o,n(1))},/*!****************************!*\
  !*** ./src/RiotControl.js ***!
  \****************************/
function(t,o,n){(function(t){"use strict";var o=["on","one","off","trigger"],n={_stores:[],addStore:function(t){this._stores.push(t)}};o.forEach(function(t){n[t]=function(){for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];this._stores.forEach(function(o){return o[t].apply(null,n)})}}),t.control=n,t.SE={POSTS_CHANGED:"se_posts_changed"},t.VE={RESET_DATA:"ve_reset_data",LOAD_POSTS:"ve_load_posts"},t.mixin("controlMixin",{onControl:function(o,n){t.control.on(o,n),this.on("unmount",function(){return t.control.off(o,n)})}})}).call(o,n(1))},/*!*************************!*\
  !*** ./src/riotTags.js ***!
  \*************************/
function(t,o,n){"use strict";n(4),n(5),n(8),n(6),n(7),n(3)},/*!********************************!*\
  !*** ./src/store/blogstore.js ***!
  \********************************/
function(t,o,n){(function(t){"use strict";function n(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var i=function(){function o(){n(this,o),t.observable(this),this.stackable=new Stackable(STACK_ID);var i=window.localStorage.getItem(LOCALSTORAGE_KEY);i?this._posts=i&&JSON.parse(i)||[]:this.initData()}return o.prototype.getPostById=function(t){return this._posts.filter(function(o){return o._id===t})[0]},o.prototype.initData=function(){var o=this;this.stackable.getContainerItems(CONTAINER_ID,function(n,i){o._posts=i.data,o.saveToStorage(),o.trigger(t.SE.POSTS_CHANGED,o._posts)})},o.prototype.saveToStorage=function(){window.localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(this._posts))},o}(),e=new i;e.on(t.VE.LOAD_POSTS,function(){e.trigger(t.SE.POSTS_CHANGED,e._posts)}),e.on(t.VE.RESET_DATA,function(){e.initData(),e.trigger(t.SE.POSTS_CHANGED,e._posts)}),t.control.addStore(e),o["default"]=e}).call(o,n(1))}]);
//# sourceMappingURL=bundle.js.map