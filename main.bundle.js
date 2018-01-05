webpackJsonp([1,4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_list_topic_list_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/topics/hot', pathMatch: 'full' },
    { path: 'topics/:type', component: __WEBPACK_IMPORTED_MODULE_2__topic_list_topic_list_component__["a" /* TopicListComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_3__topic_detail_topic_detail_component__["a" /* TopicDetailComponent */] },
    { path: 'member/:username', component: __WEBPACK_IMPORTED_MODULE_4__user_user_component__["a" /* UserComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(163),
        styles: [__webpack_require__(159)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topic_list_topic_list_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__topic_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__topic_detail_topic_detail_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__timeago_pipe__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__topic_list_topic_list_component__["a" /* TopicListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__topic_detail_topic_detail_component__["a" /* TopicDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_10__timeago_pipe__["a" /* TimeagoPipe */],
            __WEBPACK_IMPORTED_MODULE_11__user_user_component__["a" /* UserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__topic_service__["a" /* TopicService */],
            __WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_timeago_js__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_timeago_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_timeago_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeagoPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimeagoPipe = (function () {
    function TimeagoPipe() {
    }
    TimeagoPipe.prototype.transform = function (value, args) {
        return __WEBPACK_IMPORTED_MODULE_1_timeago_js___default()().format(value * 1000); // returns '11 hours ago'
    };
    return TimeagoPipe;
}());
TimeagoPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'timeago'
    })
], TimeagoPipe);

//# sourceMappingURL=timeago.pipe.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".header {\n    background-color: #f60;\n    position: fixed;\n    z-index: 999;\n    height: 55px;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n.header .inner {\n    max-width: 800px;\n    box-sizing: border-box;\n    margin: 0 auto;\n    padding: 15px 5px;\n}\n\n.header a {\n    color: hsla(0,0%,100%,.8);\n    line-height: 24px;\n    transition: color .15s ease;\n    display: inline-block;\n    vertical-align: middle;\n    font-weight: 300;\n    letter-spacing: .075em;\n    margin-right: 1.8em;\n}\n\n.header a:hover {\n    color: #fff;\n}\n\n.header .active {\n    color: #fff;\n    font-weight: 400;\n}\n\n.header a:nth-child(6) {\n    margin-right: 0;\n}\n\n.header .github {\n    color: #fff;\n    font-size: .9em;\n    margin: 0;\n    float: right;\n}\n\n.logo {\n    width: 24px;\n    margin-right: 10px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.view {\n    max-width: 800px;\n    margin: 0 auto;\n    position: relative;\n}\n\n\n@media (max-width: 860px) {\n    .header .inner {\n        padding:15px 30px;\n    }\n}\n\n@media (max-width: 600px) {\n    .header .inner {\n        padding:15px;\n    }\n\n    .header a {\n        margin-right: 1em;\n    }\n\n    .header .github {\n        display: none;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".item-view-header {\n  background-color: #fff;\n  padding: 1.8em 2em 1em;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, .1)\n}\n\n.item-view-header h1 {\n  display: inline;\n  font-size: 1.5em;\n  margin: 0;\n  margin-right: .5em\n}\n\n.item-view-header .meta,\n.item-view-header .meta a {\n  color: #828282\n}\n\n.item-view-header .meta a {\n  text-decoration: underline\n}\n\n.item-view-comments {\n  background-color: #fff;\n  margin-top: 10px;\n  padding: 0 2em .5em\n}\n\n.item-view-comments-header {\n  margin: 0;\n  font-size: 1.1em;\n  padding: 1em 0;\n  position: relative\n}\n\n.item-view-comments-header .spinner {\n  display: inline-block;\n  margin: -15px 0\n}\n\n.comment-children {\n  list-style-type: none;\n  padding: 0;\n  margin: 0\n}\n\n.comment {\n  border-top: 1px solid #eee;\n  position: relative\n}\n\n.comment .by,\n.comment .text {\n  font-size: .9em;\n  margin: 1em 0\n}\n\n.comment .by {\n  color: #828282\n}\n\n.comment .by a {\n  color: #828282;\n  text-decoration: underline\n}\n\n.comment .text {\n  overflow-wrap: break-word\n}\n\n.comment .text a:hover {\n  color: #f60\n}\n\n\n@media (max-width:600px) {\n  .item-view-header h1 {\n    font-size: 1.25em\n  }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".news-list {\n  position: absolute;\n  margin: 30px 0;\n  width: 100%;\n  transition: all .5s cubic-bezier(.55,0,.1,1);\n}\n\n.news-list ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.news-item {\n  background-color: #fff;\n  padding: 20px 30px 20px 80px;\n  border: 1px solid #eee;\n  position: relative;\n  line-height: 20px;\n}\n\n.news-item .meta {\n  font-size: .85em;\n  color: #828282;\n}\n\n.news-item .meta a {\n  color: #828282;\n  text-decoration: underline;\n}\n\n.news-item .meta a:hover {\n  color: #f60;\n}\n\n.news-item .avatar {\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  width: 48px;\n  margin-top: -24px;\n  border-radius: 6px;\n}\n\n@media (max-width:600px) {\n  .news-list {\n    margin: 10px 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".user-view {\n  background-color: #fff;\n  box-sizing: border-box;\n  padding: 2em 3em\n}\n\n.user-view h1 {\n  margin: 0;\n  font-size: 1.5em\n}\n\n.user-view .meta {\n  list-style-type: none;\n  padding: 0\n}\n\n.user-view .label {\n  display: inline-block;\n  min-width: 4em\n}\n\n.user-view .about {\n  margin: 1em 0\n}\n\n.user-view .links a {\n  text-decoration: underline\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <nav class=\"inner\">\n    <a routerLink=\"/\">V2EX</a>\n    <a routerLink=\"/topics/hot\" routerLinkActive=\"active\">Hot</a>\n    <a routerLink=\"/topics/latest\" routerLinkActive=\"active\">Latest</a>\n    <a href=\"https://github.com/sinchang/angular-v2ex\" target=\"_blank\" rel=\"noopener\" class=\"github\">Built with Angular 4</a>\n  </nav>\n</header>\n<div class=\"news-view view\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<div class=\"item-view-header\" *ngIf=\"topic\">\n  <h1>{{topic.title}}</h1>\n  <p class=\"meta\">\n    by <a href=\"/member/{{topic.member.username}}\" class=\"\">{{topic.member.username}}</a> 6 minutes ago\n  </p>\n  <div class=\"item-view-content\" [innerHTML]=\"topic.content_rendered\">\n  </div>\n</div>\n\n<div class=\"item-view-comments\" *ngIf=\"comments\">\n  <p class=\"item-view-comments-header\">\n    {{comments.length}} comments\n  </p>\n  <ul class=\"comment-children\">\n    <li class=\"comment\" *ngFor=\"let comment of comments\">\n      <div class=\"by\"><a href=\"/member/{{comment.member.username}}\" class=\"\">{{comment.member.username}}</a> {{comment.last_modified | timeago}}\n      </div>\n      <div class=\"text\" [innerHTML]=\"comment.content_rendered\"></div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<div class=\"news-list\">\n  <ul>\n    <li class=\"news-item\" *ngFor=\"let topic of topics\">\n      <img class=\"avatar\" [src]=\"topic.member.avatar_normal\">\n      <span class=\"title\">\n        <a routerLink=\"/detail/{{topic.id}}\" rel=\"noopener\">{{topic.title}}</a>\n      </span><br>\n      <span class=\"meta\">\n        <span><a href=\"/topics/{{topic.node.name}}\">{{topic.node.title}}</a></span>\n      <span class=\"by\">by <a href=\"/member/{{topic.member.username}}\" class=\"\">{{topic.member.username}}</a></span>\n      <span class=\"time\">3 hours ago</span>\n      <span class=\"comments-link\">\n      | <a href=\"/detail/{{topic.id}}\" class=\"\">{{topic.replies}} comments</a></span></span>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<div class=\"user-view view\" *ngIf=\"user\">\n  <h1>User : {{user.username}}</h1>\n  <ul class=\"meta\">\n    <li><span class=\"label\">Created:</span> {{user.created | timeago}}</li>\n    <li *ngIf=\"user.location\"><span class=\"label\">Location:</span> {{user.location}}</li>\n  </ul>\n  <p class=\"links\">\n    <a href=\"http://{{user.website}}\" target=\"_blank\" *ngIf=\"user.website\">website</a>\n    <a href=\"https://{{user.twitter}}\" *ngIf=\"user.twitter\">Twitter</a>\n    <a href=\"https://{{user.github}}\" *ngIf=\"user.github\">GitHub</a>\n  </p>\n</div>\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicService = (function () {
    function TopicService(http) {
        this.http = http;
        this.baseApiUrl = 'https://www.v2ex.com/api';
    }
    TopicService.prototype.fetchTopic = function (type) {
        var url = this.baseApiUrl + "/topics/show.json?node_name=" + type;
        if (type === 'hot' || type === 'latest') {
            url = this.baseApiUrl + "/topics/" + type + ".json";
        }
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TopicService.prototype.fetchDetail = function (id) {
        var url = this.baseApiUrl + "/topics/show.json?id=" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json()[0]; })
            .catch(this.handleError);
    };
    TopicService.prototype.fetchComment = function (id) {
        var url = this.baseApiUrl + "/replies/show.json?topic_id=" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TopicService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return TopicService;
}());
TopicService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TopicService);

var _a;
//# sourceMappingURL=topic.service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicDetailComponent = (function () {
    function TopicDetailComponent(topicService, route) {
        this.topicService = topicService;
        this.route = route;
    }
    TopicDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.topicService.fetchDetail(+params['id']); })
            .subscribe(function (res) {
            _this.topic = res;
        });
        this.route.params
            .switchMap(function (params) { return _this.topicService.fetchComment(+params['id']); })
            .subscribe(function (res) {
            _this.comments = res;
        });
    };
    return TopicDetailComponent;
}());
TopicDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-topic-detail',
        template: __webpack_require__(164),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__topic_service__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__topic_service__["a" /* TopicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], TopicDetailComponent);

var _a, _b;
//# sourceMappingURL=topic-detail.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicListComponent = (function () {
    function TopicListComponent(topicService, route) {
        this.topicService = topicService;
        this.route = route;
    }
    TopicListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.topicService.fetchTopic(params['type']); })
            .subscribe(function (topics) { return _this.topics = topics; });
    };
    return TopicListComponent;
}());
TopicListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-topic-list',
        template: __webpack_require__(165),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__topic_service__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__topic_service__["a" /* TopicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], TopicListComponent);

var _a, _b;
//# sourceMappingURL=topic-list.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseApiUrl = 'https://www.v2ex.com/api';
    }
    UserService.prototype.fetchUser = function (username) {
        var url = this.baseApiUrl + "/members/show.json?username=" + username;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.userService.fetchUser(params['username']); })
            .subscribe(function (res) {
            _this.user = res;
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__(166),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 94;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(105);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.bundle.js.map