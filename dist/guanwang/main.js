(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".baoguo{\r\n    width: 100%;\r\n    /* margin: 0 auto; */\r\n    /* align-content: center; */\r\n    text-align:center;\r\n}\r\n.kuang{\r\n    display: inline-block;\r\n    width: 1200px;\r\n    text-align:left;\r\n}\r\napp-myswiper{\r\n    min-width: 1200px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"baoguo\">\r\n\r\n    <app-topbar class=\"kuang\"></app-topbar>\r\n    <app-nav class=\"kuang\"></app-nav>\r\n    <app-myswiper class=\"\"></app-myswiper>\r\n    <app-business-introduction class=\"kuang\"></app-business-introduction>\r\n    <app-scale-carousel></app-scale-carousel>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/_hammerjs@2.0.8@hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_wow_wow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/js/wow/wow.js */ "./src/assets/js/wow/wow.js");
/* harmony import */ var _assets_js_wow_wow_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_wow_wow_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        new _assets_js_wow_wow_js__WEBPACK_IMPORTED_MODULE_2__["WOW"]().init();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _myswiper_myswiper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myswiper/myswiper.component */ "./src/app/myswiper/myswiper.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/_ng-zorro-antd@1.2.0@ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _business_introduction_business_introduction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./business-introduction/business-introduction.component */ "./src/app/business-introduction/business-introduction.component.ts");
/* harmony import */ var _scale_carousel_scale_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scale-carousel/scale-carousel.component */ "./src/app/scale-carousel/scale-carousel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/** 配置 angular i18n **/




Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__["TopbarComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                _myswiper_myswiper_component__WEBPACK_IMPORTED_MODULE_5__["MyswiperComponent"],
                _business_introduction_business_introduction_component__WEBPACK_IMPORTED_MODULE_9__["BusinessIntroductionComponent"],
                _scale_carousel_scale_carousel_component__WEBPACK_IMPORTED_MODULE_10__["ScaleCarouselComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                /** 导入 ng-zorro-antd 模块 **/
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"]
            ],
            /** 配置 ng-zorro-antd 国际化 **/
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/business-introduction/business-introduction.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/business-introduction/business-introduction.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    background-color: #ffffff;\r\n    font-family: MicrosoftYaHei-Bold;\r\n    margin: 0 auto;\r\n    font-size: 0;\r\n    height: 520px;\r\n}\r\ndiv.wai{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\ndiv>div.wenzi{\r\n    display: inline-block;\r\n    width: 50%;\r\n    height: 100%;\r\n    vertical-align: top;\r\n    padding-top: 100px;\r\n    padding-left: 10px;\r\n}\r\ndiv>div.img{\r\n    /* padding-top: 58px; */\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 49%;\r\n    height: 100%;\r\n    line-height: 0;\r\n}\r\ndiv>img{\r\n    /* line-height: 0; */\r\n    position: absolute;\r\n    top: 58px;\r\n    height: 462px;\r\n    \r\n}\r\nh1{\r\n    font-family: MicrosoftYaHei-Bold;\r\n    font-size: 54px;\r\n    color: #0099ff;\r\n    text-align: left;\r\n}\r\nul li{\r\n    text-align: left;\r\n    color: #828a92;\r\n    font-size: 24px;\r\n    font-family: MicrosoftYaHei-Bold;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/business-introduction/business-introduction.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/business-introduction/business-introduction.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wai\">\r\n  <div class=\"wenzi wow fadeInLeft\">\r\n    <h1>199元包年电话任意打</h1>\r\n    <ul>\r\n      <li>不改变通话质量和方式，一天24小时免费打</li>\r\n      <li>显示主叫真实号码</li>\r\n      <li>主叫完全免费</li>\r\n      <li>通话免流量</li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"img wow fadeInRight\">\r\n    <img src=\"assets/imgs/199call.png\" alt=\"\">\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"wai\">\r\n  <div class=\"img wow fadeInLeft\">\r\n    <img src=\"assets/imgs/card.png\" alt=\"\">\r\n  </div>\r\n  <div class=\"wenzi wow fadeInRight\">\r\n    <h1>199元包年电话任意打</h1>\r\n    <ul>\r\n      <li>不改变通话质量和方式，一天24小时免费打</li>\r\n      <li>显示主叫真实号码</li>\r\n      <li>主叫完全免费</li>\r\n      <li>通话免流量</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"wai\">\r\n  <div class=\"wenzi wow fadeInLeft\">\r\n    <h1>开拓丰富人脉</h1>\r\n    <ul>\r\n      <li>主要以名片形式来获取组成自己的人脉</li>\r\n      <li>是商务人士必备的领域</li>\r\n      <li>快速积累人脉，用过精准定位</li>\r\n      <li>实现您的人脉资源无线化</li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"img wow fadeInRight\">\r\n    <img src=\"assets/imgs/live.png\" alt=\"\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/business-introduction/business-introduction.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/business-introduction/business-introduction.component.ts ***!
  \**************************************************************************/
/*! exports provided: BusinessIntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessIntroductionComponent", function() { return BusinessIntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BusinessIntroductionComponent = /** @class */ (function () {
    function BusinessIntroductionComponent() {
    }
    BusinessIntroductionComponent.prototype.ngOnInit = function () {
    };
    BusinessIntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-business-introduction',
            template: __webpack_require__(/*! ./business-introduction.component.html */ "./src/app/business-introduction/business-introduction.component.html"),
            styles: [__webpack_require__(/*! ./business-introduction.component.css */ "./src/app/business-introduction/business-introduction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BusinessIntroductionComponent);
    return BusinessIntroductionComponent;
}());



/***/ }),

/***/ "./src/app/myswiper/myswiper.component.css":
/*!*************************************************!*\
  !*** ./src/app/myswiper/myswiper.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .swiper-container {\r\n    width: 100%;\r\n    height: 600px;\r\n}   */\r\n.root{\r\n    position: relative;\r\n}\r\n.controlContainer{\r\n    position: absolute;\r\n    width: 100%;\r\n    min-width: 1200px;\r\n    top: 45%;\r\n    height: 70px;\r\n    /* display: -ms-flex;\r\n    display: flex; */\r\n    \r\n    /* justify-content: space-between; */\r\n    text-align:justify \r\n\r\n}\r\n.controlContainer span{\r\n    cursor: pointer;\r\n    color: #fff;\r\n    font-size: 70px;\r\n    position: absolute;\r\n}\r\n.controlContainer span:nth-child(2){\r\n    right: 0;\r\n}\r\nnz-carousel{\r\n    height: 600px;\r\n}\r\n[nz-carousel-content] {\r\n      text-align: center;\r\n      height: 600px;\r\n      line-height: 600px;\r\n      background: #364d79;\r\n      color: #fff;\r\n      overflow: hidden;\r\n    }\r\nh3 {\r\n        height: 100%;\r\n        /* background: url(../../assets/imgs/banner1.jpg); */\r\n      /* color: #fff; */\r\n    }\r\n.go{\r\n        height: 600px;\r\n    }"

/***/ }),

/***/ "./src/app/myswiper/myswiper.component.html":
/*!**************************************************!*\
  !*** ./src/app/myswiper/myswiper.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"swiper-container\">\r\n  <div class=\"swiper-wrapper\">\r\n    <div class=\"swiper-slide\"><img src=\"../../assets/imgs/banner1.jpg\" alt=\"\"></div>\r\n    <div class=\"swiper-slide\"><img src=\"../../assets/imgs/banner2.jpg\" alt=\"\"></div>\r\n    <div class=\"swiper-slide\"><img src=\"../../assets/imgs/banner3.jpg\" alt=\"\"></div>\r\n  </div>\r\n\r\n</div> -->\r\n<div class=\"root\">\r\n  <nz-carousel #carousel [nzEffect]=\"effect\"  nzAutoPlay >\r\n    <div class=\"go\" nz-carousel-content *ngFor=\"let index of array\">\r\n      <div><img src=\"{{index}}\"></div>\r\n    </div>\r\n  </nz-carousel>\r\n  \r\n  <div class=\"controlContainer\">\r\n    <span class=\"controlBar\" (click)=\"carousel.pre()\">\r\n      <i class=\"anticon anticon-left\"></i>\r\n    </span>\r\n    <span class=\"controlBar\" (click)=\"carousel.next()\">\r\n      <i class=\"anticon anticon-right\"></i>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/myswiper/myswiper.component.ts":
/*!************************************************!*\
  !*** ./src/app/myswiper/myswiper.component.ts ***!
  \************************************************/
/*! exports provided: MyswiperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyswiperComponent", function() { return MyswiperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/_ng-zorro-antd@1.2.0@ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as $ from 'jquery';
// import *as Swiper from "../../../node_modules/swiper/dist/js/swiper";
var MyswiperComponent = /** @class */ (function () {
    function MyswiperComponent(element) {
        this.element = element;
        this.array = ["assets/imgs/banner1.jpg", "assets/imgs/banner2.jpg", "assets/imgs/banner3.jpg"];
        // array =[1,2,3,4];
        this.effect = 'scrollx';
    }
    MyswiperComponent.prototype.ngAfterViewInit = function () {
    };
    MyswiperComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.effect = 'fade';
        }, 1000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('carousel'),
        __metadata("design:type", ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzCarouselComponent"])
    ], MyswiperComponent.prototype, "carousel", void 0);
    MyswiperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myswiper',
            template: __webpack_require__(/*! ./myswiper.component.html */ "./src/app/myswiper/myswiper.component.html"),
            styles: [__webpack_require__(/*! ./myswiper.component.css */ "./src/app/myswiper/myswiper.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MyswiperComponent);
    return MyswiperComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav{\r\n    height:100px;\r\n    vertical-align: middle;\r\n    line-height: 100px;\r\n    overflow: hidden;\r\n}\r\n.logo{\r\n    /* margin-top: 17px; */\r\n    /* line-height: 100px; */\r\n    width: 30%;\r\n    display: inline-block; \r\n    height:100px;\r\n    line-height: 100px;\r\n    vertical-align: middle;\r\n    margin-top: 17px;\r\n}\r\n.nav-bar{\r\n    /* line-height: 100px; */\r\n    width: 70%;\r\n    display:inline-block;\r\n    /* text-align: right; */\r\n    /* vertical-align:middle; */\r\n    /* base */\r\n}\r\n.nav-bar div{\r\n    display: inline-block;\r\n}\r\n.nav-bar a{\r\n    display: inline-block;\r\n    box-sizing: border-box;;\r\n    height: 100px;\r\n    width: 130px;\r\n    outline: none;\r\n    color: inherit;\r\n    padding: 0 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n\r\n}\r\n.nav-bar a{display: inline-block;min-width: 124px;color:#333;font-size: 18px;text-align:center;position: relative;transition:all 0.6s;}\r\n.nav-bar a.active{background-color:#0099ff;color:#fff;position: relative;}\r\n.nav-bar a:hover{-webkit-transform: translate3d(0, -100%, 0);transform: translate3d(0, -100%, 0);}\r\n.nav-bar a:after{content:attr(data-nav);display: inline-block;height: 100%;width: 100%;left: 0;top: 100%;position: absolute;color:#0099ff;}\r\n.nav-bar a.active:hover{-webkit-transform: translateY(0);transform: translateY(0);}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\r\n\r\n  <div class=\"logo\">\r\n    <img src=\"assets/imgs/logo.png\" alt=\"\">\r\n  </div>\r\n  \r\n  <div class=\"nav-bar\">\r\n    <div class=\"animated fadeInDown\" ><a (click)=\"active($event)\" class=\"active\" data-nav=\"首页\" href=\"#\">首页</a>                </div> \r\n    <div class=\"wow animated fadeInDown\" data-wow-delay=\"100ms\"><a (click)=\"active($event)\" href=\"#\" data-nav=\"企业介绍\">企业介绍</a>                </div> \r\n    <div class=\"wow animated fadeInDown\" data-wow-delay=\"150ms\"><a (click)=\"active($event)\" href=\"#\" data-nav=\"产品中心\">产品中心</a>                </div> \r\n    <div class=\"wow animated fadeInDown\" data-wow-delay=\"250ms\"><a (click)=\"active($event)\" href=\"#\" data-nav=\"新闻资讯\">新闻资讯</a>                </div> \r\n    <div class=\"wow animated fadeInDown\" data-wow-delay=\"400ms\"><a (click)=\"active($event)\" href=\"#\" data-nav=\"客户端下载\">客户端下载</a>                </div> \r\n    <div class=\"wow animated fadeInDown\" data-wow-delay=\"600ms\"><a (click)=\"active($event)\" href=\"#\" data-nav=\"联系我们\">联系我们</a>                </div> \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.active = function ($event) {
        var el = $event.target;
        var parent = el.parentNode.parentNode;
        for (var _i = 0, _a = parent.children; _i < _a.length; _i++) {
            var element = _a[_i];
            element.children[0].classList.remove("active");
        }
        el.classList.add("active");
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/scale-carousel/scale-carousel.component.css":
/*!*************************************************************!*\
  !*** ./src/app/scale-carousel/scale-carousel.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root{\r\n    /* height: 500px; */\r\n    margin: 0 auto;\r\n    position: relative;\r\n    /* height: 500px; */\r\n}\r\n.scale-carousel{\r\n    display: inline-block;\r\n    min-width: 1200px;\r\n    width: 1200px;\r\n    height: 820px;\r\n    padding-top: 100px;\r\n    padding-bottom: 100px;\r\n    position: relative;\r\n}\r\n.scale-carousel-item{\r\n    position: absolute;\r\n    display: inline-block;\r\n    height: 620px;\r\n    width: 460px;\r\n    left:400px;\r\n    overflow: hidden;\r\n    border-radius: 6px;\r\n    /* background-color: rgba(120,123,127,0.3); */\r\n    box-shadow: 0px 0 12px rgba(120,123,127,0.3);\r\n    /* border: 1px solid red; */\r\n    transition: left 1.5s,z-index 1.5s,-webkit-transform 1.5s;\r\n    transition: transform 1.5s,left 1.5s,z-index 1.5s;\r\n    transition: transform 1.5s,left 1.5s,z-index 1.5s,-webkit-transform 1.5s;\r\n}\r\n.donghua-left{\r\n    /* position: relative; */\r\n    z-index: 10;\r\n    left:100px;\r\n    -webkit-transform: scale(0.8,0.8) ;\r\n            transform: scale(0.8,0.8) ;\r\n}\r\n.donghua-normal{\r\n    /* position: relative; */\r\n    z-index: 20;\r\n    left:370px;\r\n    -webkit-transform: scale(1,1) ;\r\n            transform: scale(1,1) ;\r\n}\r\n.donghua-right{\r\n    /* position: relative; */\r\n    z-index: 10;\r\n    left:640px;\r\n    -webkit-transform: scale(0.8,0.8) ;\r\n            transform: scale(0.8,0.8) ;\r\n    \r\n}\r\n.controlContainer{\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 45%;\r\n    height: 105px;\r\n    /* display: -ms-flex;\r\n    display: flex; */\r\n    \r\n    /* justify-content: space-between; */\r\n    text-align:justify \r\n\r\n}\r\n.controlContainer span{\r\n    cursor: pointer;\r\n    font-size: 70px;\r\n    position: absolute;\r\n    /* color: #fff; */\r\n}\r\n.controlContainer span:nth-child(2){\r\n    right: 0;\r\n    /* color: #fff; */\r\n}\r\n.business-card{\r\n    height: 360px;\r\n    box-sizing: border-box;\r\n    /* border-top-right-radius: 6px;\r\n    border-top-left-radius: 6px; */\r\n    background-color: #ffffff;\r\n}\r\n.business-card img{\r\n    margin-top: 50px;\r\n    width: 164px;\r\n    height: 164px;\r\n    border-radius: 50%;\r\n}\r\n.business-card h6{\r\n    margin: 0;\r\n    font-size: 24px;\r\n    color: #0099ff;\r\n}\r\n.business-card h2{\r\n    margin-top: 20px;\r\n    font-size: 24px;\r\n    color: #0099ff;\r\n}\r\n.business-card-detail{\r\n    padding: 20px;\r\n    height: 260px;\r\n    background-color: #0099ff;\r\n    /* border-bottom-right-radius: 6px;\r\n    border-bottom-left-radius: 6px; */\r\n}\r\n.business-card-detail p{\r\n    text-indent:2em;\r\n    font-size: 18px;\r\n    color: #ffffff;\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/scale-carousel/scale-carousel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/scale-carousel/scale-carousel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"root\">\r\n  <div class=\"scale-carousel\">\r\n    <!-- scale-carousel-item 1 -->\r\n    <div class=\"scale-carousel-item\">\r\n      <div class=\"business-card\">\r\n        <img src=\"assets/imgs/nav_honor .png\" alt=\"\">\r\n        <h6>杨春树0</h6>\r\n        <h6>YANG CHUN SHU</h6>\r\n        <h2>什么公司0</h2>\r\n      </div>\r\n      <div class=\"business-card-detail\">\r\n        <p>创始人创始人创始人创始人创始人创始人创始人创始人创始人创始人创始人创始人创始人创始人</p>\r\n      </div>\r\n    </div>\r\n    <!-- scale-carousel-item 1 -->\r\n    <!-- scale-carousel-item 2 -->\r\n    <div class=\"scale-carousel-item\">\r\n        <div class=\"business-card\">\r\n            <img src=\"assets/imgs/nav_chat.png\" alt=\"\">\r\n            <h6>杨春树1</h6>\r\n            <h6>YANG CHUN SHU</h6>\r\n            <h2>什么公司1</h2>\r\n          </div>\r\n          <div class=\"business-card-detail\">\r\n            <p>创始人创始人创始人创始人</p>\r\n          </div>\r\n    </div>\r\n    <!-- scale-carousel-item 2 -->\r\n    <!-- scale-carousel-item 3 -->\r\n    <div class=\"scale-carousel-item\">\r\n        <div class=\"business-card\">\r\n            <img src=\"assets/imgs/nav_culture.png\" alt=\"\">\r\n            <h6>杨春树2</h6>\r\n            <h6>YANG CHUN SHU</h6>\r\n            <h2>什么公司2</h2>\r\n          </div>\r\n          <div class=\"business-card-detail\">\r\n            <p>创始人创始人创始人创始人创始人创始人创始人创始人</p>\r\n          </div>\r\n    </div>\r\n    <!-- scale-carousel-item 3 -->\r\n    <div class=\"controlContainer\">\r\n        <span class=\"controlBar\" (click)=\"pre()\">\r\n          <i class=\"anticon anticon-left\"></i>\r\n        </span>\r\n        <span class=\"controlBar\" (click)=\"next()\">\r\n          <i class=\"anticon anticon-right\"></i>\r\n        </span>\r\n      </div>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/scale-carousel/scale-carousel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/scale-carousel/scale-carousel.component.ts ***!
  \************************************************************/
/*! exports provided: ScaleCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleCarouselComponent", function() { return ScaleCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScaleCarouselComponent = /** @class */ (function () {
    function ScaleCarouselComponent(elementRef) {
        this.elementRef = elementRef;
        this.classArr = ["donghua-left", "donghua-normal", "donghua-right"];
    }
    ScaleCarouselComponent.prototype.ngAfterViewInit = function () {
        this.index = 0;
        this.initItems();
    };
    ScaleCarouselComponent.prototype.initItems = function () {
        this.items = this.elementRef.nativeElement.querySelectorAll(".scale-carousel-item");
        this.items[0].classList.add("donghua-left");
        this.items[1].classList.add("donghua-normal");
        this.items[2].classList.add("donghua-right");
    };
    ScaleCarouselComponent.prototype.ngOnInit = function () {
    };
    ScaleCarouselComponent.prototype.pre = function () {
        this.donghuazhixing("left");
        console.log(1);
    };
    ScaleCarouselComponent.prototype.next = function () {
        // console.log("next");
        // this.items[0].classList.add("donghua-normal");
        // this.items[0].classList.remove( this.items[0].classList.item(0));
        this.donghuazhixing("right");
        console.log(2);
        // this.items[1].classList.add("donghua-normal");
        // this.items[2].classList.add("donghua-right");
    };
    ScaleCarouselComponent.prototype.donghuazhixing = function (fuhao) {
        this.items[0].classList.remove(this.classArr[this.qiehuan(this.index)]);
        this.items[1].classList.remove(this.classArr[this.qiehuan(this.index + 1)]);
        this.items[2].classList.remove(this.classArr[this.qiehuan(this.index + 2)]);
        if (fuhao === "right") {
            this.index = this.qiehuan(this.index + 1);
        }
        else if (fuhao === "left") {
            this.index = this.qiehuan(this.index - 1);
        }
        this.items[0].classList.add(this.classArr[this.qiehuan(this.index + 0)]);
        this.items[1].classList.add(this.classArr[this.qiehuan(this.index + 1)]);
        this.items[2].classList.add(this.classArr[this.qiehuan(this.index + 2)]);
    };
    ScaleCarouselComponent.prototype.qiehuan = function (num) {
        if (num < 0) {
            return num + 3;
        }
        else if (num < 3) {
            return num;
        }
        else if (function (num) { return 3; }) {
            return num - 3;
        }
    };
    ScaleCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scale-carousel',
            template: __webpack_require__(/*! ./scale-carousel.component.html */ "./src/app/scale-carousel/scale-carousel.component.html"),
            styles: [__webpack_require__(/*! ./scale-carousel.component.css */ "./src/app/scale-carousel/scale-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScaleCarouselComponent);
    return ScaleCarouselComponent;
}());



/***/ }),

/***/ "./src/app/topbar/topbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/topbar/topbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    display: inline-block;\r\n    width: 50%;\r\n}\r\np:nth-child(1){\r\n    text-align: left;\r\n}\r\np:nth-child(2){\r\n    text-align: right;\r\n}\r\n.uploadVideo{\r\n    display: inline-block;\r\n    text-align: right;\r\n}"

/***/ }),

/***/ "./src/app/topbar/topbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/topbar/topbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <p>\r\n      <span>你好，欢迎进入汇能科技！</span><span>   今天是2018年6月21 星期四</span>\r\n    </p>\r\n    <p>\r\n        <span class=\"uploadVideo\">上传视频</span>\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./src/app/topbar/topbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopbarComponent = /** @class */ (function () {
    function TopbarComponent() {
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.css */ "./src/app/topbar/topbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/assets/js/wow/wow.js":
/*!**********************************!*\
  !*** ./src/assets/js/wow/wow.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in defaults) {
        value = defaults[key];
        if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    Util.prototype.createEvent = function(event, bubble, cancel, detail) {
      var customEvent;
      if (bubble == null) {
        bubble = false;
      }
      if (cancel == null) {
        cancel = false;
      }
      if (detail == null) {
        detail = null;
      }
      if (document.createEvent != null) {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(event, bubble, cancel, detail);
      } else if (document.createEventObject != null) {
        customEvent = document.createEventObject();
        customEvent.eventType = event;
      } else {
        customEvent.eventName = event;
      }
      return customEvent;
    };

    Util.prototype.emitEvent = function(elem, event) {
      if (elem.dispatchEvent != null) {
        return elem.dispatchEvent(event);
      } else if (event in (elem != null)) {
        return elem[event]();
      } else if (("on" + event) in (elem != null)) {
        return elem["on" + event]();
      }
    };

    Util.prototype.addEvent = function(elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        return elem.attachEvent("on" + event, fn);
      } else {
        return elem[event] = fn;
      }
    };

    Util.prototype.removeEvent = function(elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        return elem.detachEvent("on" + event, fn);
      } else {
        return delete elem[event];
      }
    };

    Util.prototype.innerHeight = function() {
      if ('innerHeight' in window) {
        return window.innerHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    };

    return Util;

  })();

  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
    function WeakMap() {
      this.keys = [];
      this.values = [];
    }

    WeakMap.prototype.get = function(key) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          return this.values[i];
        }
      }
    };

    WeakMap.prototype.set = function(key, value) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          this.values[i] = value;
          return;
        }
      }
      this.keys.push(key);
      return this.values.push(value);
    };

    return WeakMap;

  })());

  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
    function MutationObserver() {
      if (typeof console !== "undefined" && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    MutationObserver.notSupported = true;

    MutationObserver.prototype.observe = function() {};

    return MutationObserver;

  })());

  getComputedStyle = this.getComputedStyle || function(el, pseudo) {
    this.getPropertyValue = function(prop) {
      var ref;
      if (prop === 'float') {
        prop = 'styleFloat';
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function(_, _char) {
          return _char.toUpperCase();
        });
      }
      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
    };
    return this;
  };

  getComputedStyleRX = /(\-([a-z]){1})/g;

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      callback: null
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = bind(this.scrollCallback, this);
      this.scrollHandler = bind(this.scrollHandler, this);
      this.resetAnimation = bind(this.resetAnimation, this);
      this.start = bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
      this.animationNameCache = new WeakMap();
      this.wowEvent = this.util().createEvent(this.config.boxClass);
    }

    WOW.prototype.init = function() {
      var ref;
      this.element = window.document.documentElement;
      if ((ref = document.readyState) === "interactive" || ref === "complete") {
        this.start();
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start);
      }
      return this.finished = [];
    };

    WOW.prototype.start = function() {
      var box, j, len, ref;
      this.stopped = false;
      this.boxes = (function() {
        var j, len, ref, results;
        ref = this.element.querySelectorAll("." + this.config.boxClass);
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      this.all = (function() {
        var j, len, ref, results;
        ref = this.boxes;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          ref = this.boxes;
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            this.applyStyle(box, true);
          }
        }
      }
      if (!this.disabled()) {
        this.util().addEvent(window, 'scroll', this.scrollHandler);
        this.util().addEvent(window, 'resize', this.scrollHandler);
        this.interval = setInterval(this.scrollCallback, 50);
      }
      if (this.config.live) {
        return new MutationObserver((function(_this) {
          return function(records) {
            var k, len1, node, record, results;
            results = [];
            for (k = 0, len1 = records.length; k < len1; k++) {
              record = records[k];
              results.push((function() {
                var l, len2, ref1, results1;
                ref1 = record.addedNodes || [];
                results1 = [];
                for (l = 0, len2 = ref1.length; l < len2; l++) {
                  node = ref1[l];
                  results1.push(this.doSync(node));
                }
                return results1;
              }).call(_this));
            }
            return results;
          };
        })(this)).observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    };

    WOW.prototype.stop = function() {
      this.stopped = true;
      this.util().removeEvent(window, 'scroll', this.scrollHandler);
      this.util().removeEvent(window, 'resize', this.scrollHandler);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.sync = function(element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element);
      }
    };

    WOW.prototype.doSync = function(element) {
      var box, j, len, ref, results;
      if (element == null) {
        element = this.element;
      }
      if (element.nodeType !== 1) {
        return;
      }
      element = element.parentNode || element;
      ref = element.querySelectorAll("." + this.config.boxClass);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        if (indexOf.call(this.all, box) < 0) {
          this.boxes.push(box);
          this.all.push(box);
          if (this.stopped || this.disabled()) {
            this.resetStyle();
          } else {
            this.applyStyle(box, true);
          }
          results.push(this.scrolled = true);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      box.className = box.className + " " + this.config.animateClass;
      if (this.config.callback != null) {
        this.config.callback(box);
      }
      this.util().emitEvent(box, this.wowEvent);
      this.util().addEvent(box, 'animationend', this.resetAnimation);
      this.util().addEvent(box, 'oanimationend', this.resetAnimation);
      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
      return box;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return this.animate((function(_this) {
        return function() {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      })(this));
    };

    WOW.prototype.animate = (function() {
      if ('requestAnimationFrame' in window) {
        return function(callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function(callback) {
          return callback();
        };
      }
    })();

    WOW.prototype.resetStyle = function() {
      var box, j, len, ref, results;
      ref = this.boxes;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        results.push(box.style.visibility = 'visible');
      }
      return results;
    };

    WOW.prototype.resetAnimation = function(event) {
      var target;
      if (event.type.toLowerCase().indexOf('animationend') >= 0) {
        target = event.target || event.srcElement;
        return target.className = target.className.replace(this.config.animateClass, '').trim();
      }
    };

    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        });
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        });
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        });
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      });
      return box;
    };

    WOW.prototype.vendors = ["moz", "webkit"];

    WOW.prototype.vendorSet = function(elem, properties) {
      var name, results, value, vendor;
      results = [];
      for (name in properties) {
        value = properties[name];
        elem["" + name] = value;
        results.push((function() {
          var j, len, ref, results1;
          ref = this.vendors;
          results1 = [];
          for (j = 0, len = ref.length; j < len; j++) {
            vendor = ref[j];
            results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
          }
          return results1;
        }).call(this));
      }
      return results;
    };

    WOW.prototype.vendorCSS = function(elem, property) {
      var j, len, ref, result, style, vendor;
      style = getComputedStyle(elem);
      result = style.getPropertyCSSValue(property);
      ref = this.vendors;
      for (j = 0, len = ref.length; j < len; j++) {
        vendor = ref[j];
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };

    WOW.prototype.animationName = function(box) {
      var animationName;
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (_error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };

    WOW.prototype.cacheAnimationName = function(box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };

    WOW.prototype.cachedAnimationName = function(box) {
      return this.animationNameCache.get(box);
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var j, len, ref, results;
          ref = this.boxes;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            results.push(box);
          }
          return results;
        }).call(this);
        if (!(this.boxes.length || this.config.live)) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = window.pageYOffset;
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util != null ? this._util : this._util = new Util();
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ProgramDevelopment\DevelopmentSpace\guangwang\guanwang\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map