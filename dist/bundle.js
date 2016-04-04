webpackJsonp([1],[/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(t,o,e){(function(t){"use strict";e(8),e(2),e(9),t.mount("app")}).call(o,e(1))},,/*!***********************!*\
  !*** ./src/stores.js ***!
  \***********************/
function(t,o,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(10),s=i(n),a={blog:s["default"]};o["default"]=a},/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
function(t,o,e){(function(t){"use strict";t.tag2("app",'<section> <header> <nav> <ul> <li><a href="#posts">Posts</a></li> <li><a href="#categories">Categories</a></li> </ul> </nav> </header> <article> <div id="mainview"></div> </article> <footer> <nav> <a onclick="{resetData}">Reset Data</a> </nav> </footer> </section>',"","",function(o){var e=this;this._currentView=null,this.resetData=function(){t.control.trigger(t.VE.RESET_DATA)},this.loadView=function(o,i){e._currentView&&e._currentView.unmount(!0),e._currentView=t.mount("div#mainview",o,{data:i})[0]},this.studyRoute=function(t,o){switch(t){case"categories":e.loadView("categories-view");break;case"detail":e.loadView("detail-view",o);break;case"posts":e.loadView("posts-view");break;default:e.loadView("posts-view")}},t.route(this.studyRoute),this.on("mount",function(){t.route.start(!0)})})}).call(o,e(1))},/*!*************************************!*\
  !*** ./src/component/postcell.html ***!
  \*************************************/
function(t,o,e){(function(t){"use strict";t.tag2("postcell",'<div> <span>Id: {opts.data.postId}</span> <span>Title: <a href="#detail/{opts.data.postId}">{opts.data.title}</a></span> <span>{opts.data.likes} Likes</span> <button onclick="{likePost}">Like</button> </div>',"","",function(o){this.likePost=function(){t.control.trigger(t.VE.LIKE_POST,o.data.postId)}})}).call(o,e(1))},/*!***************************************!*\
  !*** ./src/view/categories-view.html ***!
  \***************************************/
function(t,o,e){(function(t){"use strict";t.tag2("categories-view",'<div each="{category, posts in _postsInCategories}"> <h3>{category}</h3> <postcell each="{posts}" data="{this}"></postcell> <hr> </div>',"","",function(o){var e=this;this.mixin("controlMixin"),this._postsInCategories={},this.on("mount",function(){t.control.trigger(t.VE.LOAD_POSTS)}),this.onControl(t.SE.POSTS_CHANGED,function(t){e._postsInCategories=t.reduce(function(t,o){return t[o.category]=t[o.category]||[],t[o.category].push(o),t},{}),e.update()})})}).call(o,e(1))},/*!***********************************!*\
  !*** ./src/view/detail-view.html ***!
  \***********************************/
function(t,o,e){(function(t){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var i=e(2),n=o(i);t.tag2("detail-view",'<h2>{_post.title}</h2> <p>{_post.content}</p> <p>{_post.likes} Likes</p> <a if="{opts.data > 1}" href="#detail/{opts.data - 1}">Previous Post</a> | <a if="{opts.data < _total}" href="#detail/{opts.data - -1}">Next Post</a>',"","",function(o){var e=this;this.mixin("controlMixin"),this.onControl(t.SE.POSTS_CHANGED,function(t){e.readData()}),this.readData=function(){e._post=n["default"].blog.getPostById(Number(o.data)),e._total=n["default"].blog._posts.length,e.update()},this.readData()})}).call(o,e(1))},/*!**********************************!*\
  !*** ./src/view/posts-view.html ***!
  \**********************************/
function(t,o,e){(function(t){"use strict";t.tag2("posts-view",'<postcell each="{_posts}" data="{this}"></postcell>',"","",function(o){var e=this;this.mixin("controlMixin"),this._posts=[],this.on("mount",function(){t.control.trigger(t.VE.LOAD_POSTS)}),this.onControl(t.SE.POSTS_CHANGED,function(t){e._posts=t,e.update()})})}).call(o,e(1))},/*!****************************!*\
  !*** ./src/RiotControl.js ***!
  \****************************/
function(t,o,e){(function(t){"use strict";var o=["on","one","off","trigger"],e={_stores:[],addStore:function(t){this._stores.push(t)}};o.forEach(function(t){e[t]=function(){for(var o=arguments.length,e=Array(o),i=0;o>i;i++)e[i]=arguments[i];this._stores.forEach(function(o){return o[t].apply(null,e)})}}),t.control=e,t.SE={POSTS_CHANGED:"se_posts_changed"},t.VE={RESET_DATA:"ve_reset_data",LIKE_POST:"ve_like_post",LOAD_POSTS:"ve_load_posts"},t.mixin("controlMixin",{onControl:function(o,e){t.control.on(o,e),this.on("unmount",function(){return t.control.off(o,e)})}})}).call(o,e(1))},/*!*************************!*\
  !*** ./src/riotTags.js ***!
  \*************************/
function(t,o,e){"use strict";e(4),e(7),e(5),e(6),e(3)},/*!********************************!*\
  !*** ./src/store/blogstore.js ***!
  \********************************/
function(t,o,e){(function(t){"use strict";function e(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var i="riot-webpack-demo",n=function(){function o(){e(this,o),t.observable(this);var n=window.localStorage.getItem(i);n?this._posts=n&&JSON.parse(n)||[]:this.initData()}return o.prototype.getPostById=function(t){return this._posts.filter(function(o){return o.postId===t})[0]},o.prototype.initData=function(){var t=[{postId:1,title:"Best xbox games",content:"Halo, GOW",category:"collection",likes:10},{postId:2,title:"Best ps games",content:"Uncharted, The Last of US",category:"collection",likes:20},{postId:3,title:"Best wii games",content:"Zelda, Mario",category:"collection",likes:16},{postId:4,title:"Review of Halo",content:"yes, cortana",category:"review",likes:11},{postId:5,title:"Review of Titanfall",content:"where is the local game?",category:"review",likes:7},{postId:6,title:"Review of portal",content:"I don't blame you",category:"review",likes:40}];this._posts=t,this.saveToStorage()},o.prototype.saveToStorage=function(){window.localStorage.setItem(i,JSON.stringify(this._posts))},o}(),s=new n;s.on(t.VE.LOAD_POSTS,function(){s.trigger(t.SE.POSTS_CHANGED,s._posts)}),s.on(t.VE.RESET_DATA,function(){s.initData(),s.trigger(t.SE.POSTS_CHANGED,s._posts)}),s.on(t.VE.LIKE_POST,function(o){s._posts.forEach(function(t){t.postId===o&&(t.likes=t.likes+1)}),s.saveToStorage(),s.trigger(t.SE.POSTS_CHANGED,s._posts)}),t.control.addStore(s),o["default"]=s}).call(o,e(1))}]);
//# sourceMappingURL=bundle.js.map