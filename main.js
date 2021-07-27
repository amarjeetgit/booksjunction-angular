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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Book.ts":
/*!*************************!*\
  !*** ./src/app/Book.ts ***!
  \*************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-info\r\n{\r\n    width: 80%;\r\n    height: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.panel-heading\r\n{\r\ncolor: green;\r\nfont-size: 30px;\r\nfont-weight: 400;\r\ntext-decoration: underline;\r\n}\r\n\r\n.panel-body\r\n{\r\ncolor: black;\r\nfont-size: 20px;\r\nfont-weight: 300;\r\nfont-family: cursive;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7O0FBRUEsWUFBWTtBQUNaLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsMEJBQTBCO0FBQzFCOztBQUVBOztBQUVBLFlBQVk7QUFDWixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwtaW5mb1xyXG57XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRpbmdcclxue1xyXG5jb2xvcjogZ3JlZW47XHJcbmZvbnQtc2l6ZTogMzBweDtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxudGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5wYW5lbC1ib2R5XHJcbntcclxuY29sb3I6IGJsYWNrO1xyXG5mb250LXNpemU6IDIwcHg7XHJcbmZvbnQtd2VpZ2h0OiAzMDA7XHJcbmZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">MyBookStore</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav mr-auto\" >\n      <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">About Us</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact Us</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Search Books By Categories\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" href=\"#\">Comedy</a>\n          <a class=\"dropdown-item\" href=\"#\">Biography</a>\n          <a class=\"dropdown-item\" href=\"#\">Romance</a>\n          <a class=\"dropdown-item\" href=\"#\">Sports</a>\n        </div>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li> <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n    </ul>\n    <form class=\"form-inline my-2 my -lg-0 \">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\" >Search</button>\n    </form> \n  </div>\n</nav>\n\n</div>\n\n<div class=\"panel panel-info\">\n    <div class=\"panel-heading\">About Us</div>\n    <div class=\"panel-body\">\n      We are five members team working on this website to provide service of selling and \n      buying second hand books online here for our loving readers and book lovers.\n      Buy books here at cheapest rate and best quality in the market.\n      we only accept books in good conditions ,clear and clean.\n      so trust on us and avail the serive.<br>\n      Keep Reading</div><br><br>\n      <div class=\"panel-body\">\n      Team Members:<br>\n\n      Amarjeet Kumar Nirala<br>\n      Bicky Upadhyay <br>\n      Pooja Rai<br>\n      Shilpi Gupta<br>\n      Vaishnavi Solanki<br>\n\n\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _homesearch_homesearch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homesearch/homesearch.component */ "./src/app/homesearch/homesearch.component.ts");







var routes = [{ path: '', pathMatch: 'full', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'contact', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__["ContactusComponent"] },
    { path: 'homesearch/:value', component: _homesearch_homesearch_component__WEBPACK_IMPORTED_MODULE_6__["HomesearchComponent"] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'booksjunction';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _commons_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commons/header/header.component */ "./src/app/commons/header/header.component.ts");
/* harmony import */ var _commons_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commons/footer/footer.component */ "./src/app/commons/footer/footer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _homesearch_homesearch_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homesearch/homesearch.component */ "./src/app/homesearch/homesearch.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-card/product-card.component */ "./src/app/product-card/product-card.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], _commons_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _commons_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_9__["ContactusComponent"], _homesearch_homesearch_component__WEBPACK_IMPORTED_MODULE_10__["HomesearchComponent"], _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_12__["ProductCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commons/footer/footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/commons/footer/footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer \">\n  <div >© 2021 Copyright : AKN</div>\n\n\n  \n  <div>Developer : Amarjeet </div>\n</div>"

/***/ }),

/***/ "./src/app/commons/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/commons/footer/footer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #333333;\n  color: white;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha24vUHJvamVjdCBXb3JrIFNwYWNlL0FuZ3VsYXIgUmVwby9ib29rc2p1bmN0aW9uL3NyYy9hcHAvY29tbW9ucy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUEwQjtFQUMxQixZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb25zL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogXHQjMzMzMzMzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/commons/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/commons/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/commons/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/commons/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/commons/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/commons/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-3 pb-3 bg-light inner-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center\" style=\"line-height: 0\">\n        <h1 class=\"mt-0 mb-3 text-blue\">BooksJunction</h1>\n        <span style=\"font-family: cursive;font-style: italic\">(Keep Reading, Keep Sharing)</span>\n      </div>\n      \n    </div>\n  </div>\n  </section>\n<div>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">MyBookStore</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav mr-auto\" >\n      <li class=\"nav-item active\">\n          <a class=\"nav-link\" >Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">About Us</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact Us</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Categories\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" (click)='homenav(1)'>Comedy</a>\n          <a class=\"dropdown-item\" (click)='homenav(2)'>Biography</a>\n          <a class=\"dropdown-item\" (click)='homenav(3)'>Romance</a>\n          <a class=\"dropdown-item\" (click)='homenav(4)'>Sports</a>\n        </div>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li> <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n    </ul>\n    <form class=\"form-inline my-2 my -lg-0 \">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\" >Search</button>\n    </form> \n  </div>\n</nav>\n\n</div>"

/***/ }),

/***/ "./src/app/commons/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/commons/header/header.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-colour {\n  background-color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha24vUHJvamVjdCBXb3JrIFNwYWNlL0FuZ3VsYXIgUmVwby9ib29rc2p1bmN0aW9uL3NyYy9hcHAvY29tbW9ucy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb25zL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWNvbG91cntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/commons/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/commons/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(r) {
        this.r = r;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.homenav = function (value) {
        this.r.navigate(['homesearch', value]);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/commons/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/commons/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-info\r\n{\r\n    width: 80%;\r\n    height: auto;\r\n    padding: 10px;\r\n}\r\n\r\n.panel-heading\r\n{\r\ncolor: green;\r\nfont-size: 30px;\r\nfont-weight: 400;\r\ntext-decoration: underline;\r\n}\r\n\r\n.panel-body\r\n{\r\ncolor: black;\r\nfont-size: 20px;\r\nfont-weight: 300;\r\nfont-family: cursive;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTs7QUFFQSxZQUFZO0FBQ1osZUFBZTtBQUNmLGdCQUFnQjtBQUNoQiwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUEsWUFBWTtBQUNaLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsLWluZm9cclxue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkaW5nXHJcbntcclxuY29sb3I6IGdyZWVuO1xyXG5mb250LXNpemU6IDMwcHg7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbnRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ucGFuZWwtYm9keVxyXG57XHJcbmNvbG9yOiBibGFjaztcclxuZm9udC1zaXplOiAyMHB4O1xyXG5mb250LXdlaWdodDogMzAwO1xyXG5mb250LWZhbWlseTogY3Vyc2l2ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">MyBookStore</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav mr-auto\" >\n      <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">About Us</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact Us</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Search Books By Categories\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" href=\"#\">Comedy</a>\n          <a class=\"dropdown-item\" href=\"#\">Biography</a>\n          <a class=\"dropdown-item\" href=\"#\">Romance</a>\n          <a class=\"dropdown-item\" href=\"#\">Sports</a>\n        </div>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li> <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n    </ul>\n    <form class=\"form-inline my-2 my -lg-0 \">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\" >Search</button>\n    </form> \n  </div>\n</nav>\n\n</div>\n\n<div class=\"panel panel-info\">\n    <div class=\"panel-heading\">Contact Us</div>\n    <div class=\"panel-body\">\n        C-DAC Knowledge Park<br>\n        Opp. HAL Aeroengine Division<br>\n        Old Madras Road, Byappanahalli<br>\n        Bengaluru - 560 038<br>\n        Karnataka (India)<br>\n        Phone: +91-80-25093400<br> \n        Fax: +91-80-2524-7724</div>\n        <br><br>\n      <div class=\"panel-body\">\n      Contact Person:<br>\n\n      Amarjeet Kumar Nirala<br>\n      Mobile- 08757018722<br>\n      Email- amarjeetjack@gmail.com <br>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/dbservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/dbservice.service.ts ***!
  \**************************************/
/*! exports provided: DbserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbserviceService", function() { return DbserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var DbserviceService = /** @class */ (function () {
    function DbserviceService(con) {
        this.con = con;
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mockData) {
            var link = "/home/called";
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_PORT + link;
        }
        else {
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mockUrl;
        }
    }
    DbserviceService.prototype.servicecallbyid = function () {
        //return this.con.get<Books>(this.url+link);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
            'Pragma': 'no-cache',
            'Expires': '0'
        });
        var options = { headers: headers };
        return this.con.get(this.url, options);
    };
    DbserviceService.prototype.getJSON = function (url) {
        // this.startSpinner();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
            'Pragma': 'no-cache',
            'Expires': '0'
        });
        var options = { headers: headers };
        return this.con.get(url, options);
    };
    DbserviceService.prototype.servicecallbynameandauthor = function (value) {
        var link = "/bookbyname/" + value;
        return this.con.get(this.url + link);
    };
    DbserviceService.prototype.servicecallforall = function (n) {
        var link = "/bookcat/" + n;
        return this.con.get(this.url + link);
    };
    //  addtocart(obj:Cart):Observable<Cart>
    //  {
    //   let link ="/addingcart";
    //   return this.con.put<Cart>((this.url+link),obj);
    //  }  
    DbserviceService.prototype.fetchcart = function () {
        //  var n=sessionStorage.getItem("user");  
        // let link ="/fetchcart?x="+n;
        // return this.con.get<Cart>(this.url+link);
    };
    DbserviceService.prototype.booksell = function (b) {
        var link = "/addingbook";
        return this.con.put((this.url + link), b);
    };
    DbserviceService.prototype.addcust = function (c) {
        var link = "/addingcust";
        return this.con.put((this.url + link), c);
    };
    DbserviceService.prototype.login = function (mobile) {
        var link = "/fetchcust?x=" + mobile;
        return this.con.get(this.url + link);
    };
    DbserviceService.prototype.updateuser = function (user, m) {
        var link = "/updatecust/" + user;
        console.log(this.url + link);
        return this.con.put((this.url + link), m);
    };
    DbserviceService.prototype.deletecart = function (bkid, user) {
        //  console.log("called deleete");
        // let link ="/deletecart?x="+bkid+"&y="+user;
        // console.log(this.url+link);
        // return this.con.get<Cart>(this.url+link);
    };
    DbserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DbserviceService);
    return DbserviceService;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-info\r\n{\r\n    width: 80%;\r\n    height: auto;\r\n    padding: 10px;\r\n   \r\n}\r\n\r\n.panel-heading\r\n{\r\ncolor:black;\r\nfont-size: 30px;\r\nfont-weight: 400;\r\n\r\n}\r\n\r\n.panel-body\r\n{\r\ncolor: black;\r\nfont-size: 20px;\r\nfont-weight: 300;\r\nfont-family: cursive;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7O0FBRWpCOztBQUVBOztBQUVBLFdBQVc7QUFDWCxlQUFlO0FBQ2YsZ0JBQWdCOztBQUVoQjs7QUFFQTs7QUFFQSxZQUFZO0FBQ1osZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsLWluZm9cclxue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgIFxyXG59XHJcblxyXG4ucGFuZWwtaGVhZGluZ1xyXG57XHJcbmNvbG9yOmJsYWNrO1xyXG5mb250LXNpemU6IDMwcHg7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG59XHJcblxyXG4ucGFuZWwtYm9keVxyXG57XHJcbmNvbG9yOiBibGFjaztcclxuZm9udC1zaXplOiAyMHB4O1xyXG5mb250LXdlaWdodDogMzAwO1xyXG5mb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div style=\"margin: 10px;\" class=\"row\">\n\n\n\n    <div class=\"panel panel-info col-6\">\n        <div class=\"panel-heading\">Welcome to <span style=\"color:red; text-decoration-line: underline;text-decoration-color: black;font-family: cursive\"> BooksJunction</span> </div>\n        <div class=\"panel-body\">\n          Website Descriptions here<br>\n          And some designing work with some animated decorations\n        </div>\n        <div class=\"panel-body\">\n          <p style=\"font-size: 30px;color: black;text-decoration-line: underline;background-color: chartreuse\">Best Rated Books</p>\n            <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"3000\" style=\"height: 400px\">\n                <div class=\"carousel-inner\">\n                  <div class=\"carousel-item active\">\n                      <table>\n                        <tr><td><img height=\"170px\" width=\"150px\" class=\"d-block \" src=\"assets/pictures/bookpromo1.jpg\"></td></tr>\n                        <tr><td style=\"color: black;font-family: cursive\">The Great Reset By Richard Florida</td></tr>\n                        <tr><td style=\"color: blue\">Price : RS 350 only</td></tr>\n                        <tr><td><button><a href=\"login\">Buy Now</a></button><button><a href=\"login\">Add to Wishlist</a></button></td></tr>\n                      </table>\n                  </div>\n                  <div class=\"carousel-item\">\n                      <table>\n                          <tr><td><img style=\"height: 170px ;width: 150px;\" class=\"d-block  \" src=\"assets/pictures/bookpromo3.jpg\"></td></tr>\n                          <tr><td style=\"color: black;font-family: cursive\">Indian Art and Culture By Gaurav Agarwal</td></tr>\n                          <tr><td style=\"color: blue\">Price : RS 250 only</td></tr>\n                          <tr><td><button><a href=\"login\">Buy Now</a></button><button><a href=\"login\">Add to Wishlist</a></button></td></tr>\n                        </table>\n                  </div>\n                  <div class=\"carousel-item\">\n                      <table>\n                          <tr><td><img style=\"height: 170px ;width: 150px;\" class=\"d-block \" src=\"assets/pictures/bookpromo4.jpg\"></td></tr>\n                          <tr><td style=\"color: black;font-family: cursive\">Indian Economy By Gaurav Agarwal</td></tr>\n                          <tr><td style=\"color: blue\">Price : RS 110 only</td></tr>\n                          <tr><td><button><a href=\"login\">Buy Now</a></button><button><a href=\"login\">Add to Wishlist</a></button></td></tr>\n                        </table>\n                  </div>\n                </div>\n              </div>\n          </div><br><br>\n        \n      </div>\n\n\n<div class=\"panel panel-info col-6\">\n  <!-- <div class=\"row\">\n    <div class=\"panel-body col-6\">\n      <img height=\"200px\" width=\"250px\" src=\"assets/pictures/books.jpg\">\n\n    </div>\n    <div class=\"panel-body col-6\">\n        <img height=\"200px\" width=\"250px\" src=\"assets/pictures/books2.jpg\">\n  \n      </div>\n    </div><br>\n    <div class=\"row\">\n        <img height=\"200px\" width=\"90%\" src=\"assets/pictures/library.jpg\">\n    </div> -->\n    <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" >\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img style=\"height: 350px\" class=\"d-block w-100 \" src=\"assets/pictures/books.jpg\">\n          </div>\n          <div class=\"carousel-item\">\n            <img style=\"height: 350px\" class=\"d-block w-100 \" src=\"assets/pictures/books2.jpg\">\n          </div>\n          <div class=\"carousel-item\">\n            <img style=\"height: 350px\" class=\"d-block w-100 \" src=\"assets/pictures/library.jpg\">\n          </div>\n        </div>\n      </div>\n\n  </div>\n \n  </div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(r) {
        this.r = r;
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.check = function () {
        this.r.navigate(['contact']);
    };
    HomepageComponent.prototype.homenav = function (value) {
        this.r.navigate(['homesearch', value]);
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homesearch/homesearch.component.css":
/*!*****************************************************!*\
  !*** ./src/app/homesearch/homesearch.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .col-12{\r\n    width: 200px;\r\n    border: 1px solid green;\r\n    height: 210px;\r\n    margin: 10px;\r\n    padding: 10px;\r\n  }\r\n\r\n\r\n  .col-4{\r\n    width: 150px;\r\n    border: 10px;\r\n    padding: 10px;\r\n    \r\n    \r\n  }\r\n\r\n\r\n  li {\r\n \r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n\r\n\r\n  .list-product {\r\n  float: left;\r\n  height: 360px;\r\n  margin-top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXNlYXJjaC9ob21lc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7SUFDRyxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtFQUNmOzs7RUFHQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTs7O0VBR2Y7OztFQUlGOztJQUVJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7OztFQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lc2VhcmNoL2hvbWVzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuY29sLTEye1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG5cclxuICAuY29sLTR7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXI6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgXHJcbiAgICBcclxuICB9XHJcblxyXG4gXHJcblxyXG5saSB7XHJcbiBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5saXN0LXByb2R1Y3Qge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogMzYwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/homesearch/homesearch.component.html":
/*!******************************************************!*\
  !*** ./src/app/homesearch/homesearch.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<div style=\"margin-left: 100px;margin-right: 20px;\">\n<div  class=\"col-sm-6 col-6 col-lg-4 col-xl-4 list-product\"  *ngFor=\"let data of result;\">\n      <app-product-card [item]=data>\n\n      </app-product-card>\n</div>\n</div>\n<!-- <div style=\"margin-left: 20%;height: auto;width: 60%\" class=\"row\">\n      <div class=\"col-4\"> \n            <div class=\"row\">\n                <div class=\"col-12\">\n                  Picture Here\n                </div>\n                \n              </div>\n              <div class=\"row\">\n                  <div class=\"col-6\">\n                    Book Name\n                    </div>\n                    <div class=\"col-6\">\n                        BookPrice\n                        </div>\n                  </div><br>\n                  \n                  \n                  <div class=\"row\">\n                      <div class=\"col-6\">\n                       <button (click)='invalid()'>Add to WishList</button>\n                        </div>\n                        <div class=\"col-6\">\n                            <button (click)='invalid()'>Add to Cart</button>\n                            </div>\n                      </div>\n       </div>\n       <div class=\"col-4\"> \n          <div class=\"row\">\n              <div class=\"col-12\">\n                Picture Here\n              </div>\n              \n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                  Book Name\n                  </div>\n                  <div class=\"col-6\">\n                      BookPrice\n                      </div>\n                </div><br>\n                \n                \n                <div class=\"row\">\n                    <div class=\"col-6\">\n                     <button (click)='invalid()'>Add to WishList</button>\n                      </div>\n                      <div class=\"col-6\">\n                          <button (click)='invalid()'>Add to Cart</button>\n                          </div>\n                    </div>\n     </div>\n     <div class=\"col-4\"> \n        <div class=\"row\">\n            <div class=\"col-12\">\n              Picture Here\n            </div>\n            \n          </div>\n          <div class=\"row\">\n              <div class=\"col-6\">\n                Book Name\n                </div>\n                <div class=\"col-6\">\n                    BookPrice\n                    </div>\n              </div>\n              <br>\n              \n              <div class=\"row\">\n                  <div class=\"col-6\">\n                   <button (click)='invalid()'>Add to WishList</button>\n                    </div>\n                    <div class=\"col-6\">\n                        <button (click)='invalid()'>Add  to  Cart</button>\n                        </div>\n                  </div>\n   </div>\n</div> -->"

/***/ }),

/***/ "./src/app/homesearch/homesearch.component.ts":
/*!****************************************************!*\
  !*** ./src/app/homesearch/homesearch.component.ts ***!
  \****************************************************/
/*! exports provided: HomesearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomesearchComponent", function() { return HomesearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _dbservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dbservice.service */ "./src/app/dbservice.service.ts");





var HomesearchComponent = /** @class */ (function () {
    function HomesearchComponent(r, route, dbs) {
        this.r = r;
        this.route = route;
        this.dbs = dbs;
        //navvalue:number;
        this.books = [];
        this.comedy = [];
        this.romance = [];
        this.sports = [];
        this.result = [];
    }
    HomesearchComponent.prototype.ngOnInit = function () {
        var value = parseInt(this.route.snapshot.paramMap.get('value'));
        // this.navvalue=value;
        console.log("cxame");
        this.homenav(value);
    };
    HomesearchComponent.prototype.invalid = function () {
        alert("Login First to Add");
        this.r.navigate(['login']);
    };
    HomesearchComponent.prototype.homenav = function (value) {
        if (value == 1) {
            this.comedycollection();
        }
        else if (value == 2) {
            this.biographycollection();
        }
        else if (value == 3) {
            this.romancecollection();
        }
        else if (value == 4) {
            this.sportscollection();
            console.log(value);
        }
        else {
            this.all();
            console.log(value);
        }
        console.log(value);
        // this.navigatecheck();
        //this.r.navigate(['homesearch']);
    };
    HomesearchComponent.prototype.comedycollection = function () {
        var _this = this;
        this.result = [];
        this.dbs.servicecallbyid().subscribe(function (data) {
            _this.result = data;
        });
        console.log("Comedy Called");
    };
    HomesearchComponent.prototype.biographycollection = function () {
        var _this = this;
        this.dbs.servicecallbyid().subscribe(function (data) {
            _this.result = data;
        });
        console.log("biography Called");
        console.log(this.result);
    };
    HomesearchComponent.prototype.sportscollection = function () {
        var _this = this;
        this.result = [];
        this.dbs.servicecallbyid().subscribe(function (data) {
            if (data && !src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mockData) {
                alert(data.status);
                _this.result = data.values;
            }
            else {
                _this.result = data;
            }
        });
        console.log("Sports Called");
    };
    HomesearchComponent.prototype.romancecollection = function () {
        this.result = [];
        console.log("Romance Called");
        for (var i = 0; i < this.books.length; i++) {
            var obj = this.books[i];
            if (obj.genre == 'Romance') {
                console.log(JSON.stringify(obj));
                this.result.push(obj);
            }
        }
    };
    HomesearchComponent.prototype.all = function () {
        this.result = [];
        for (var i = 0; i < this.books.length; i++) {
            console.log("Working");
            console.log(this.books.length);
            var obj = this.books[i];
            this.result.push(obj);
        }
    };
    HomesearchComponent.prototype.comedycollection2 = function () {
        for (var i = 0; i < this.books.length; i++) {
            console.log("Working");
            console.log(this.books.length);
            var obj = this.books[i];
            if (obj.genre == 'Romance') {
                console.log(JSON.stringify(obj));
            }
        }
    };
    HomesearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homesearch',
            template: __webpack_require__(/*! ./homesearch.component.html */ "./src/app/homesearch/homesearch.component.html"),
            styles: [__webpack_require__(/*! ./homesearch.component.css */ "./src/app/homesearch/homesearch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _dbservice_service__WEBPACK_IMPORTED_MODULE_4__["DbserviceService"]])
    ], HomesearchComponent);
    return HomesearchComponent;
}());



/***/ }),

/***/ "./src/app/product-card/product-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-card/product-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<div class=\"product\">\n  <div class=\"front\" id=\"front\">\n  <table>\n  <tr>\n    <td><img class=\"imagesize\"  src={{item?.bookimageurl}}></td>\n  </tr>\n  </table>\n  </div>\n  \n  <div class=\"back\">\n    <table class=\"back-table\">\n          <!-- <tr>\n          <td>BookId- </td><td>{{ item.bookid }}</td>\n          </tr> -->\n          <tr>\n          <td></td><td>{{ item.title }}</td>\n          </tr>\n          <tr>\n          <td>Author- </td><td>{{ item.author }}</td>\n          </tr>\n          <tr>\n          <td>Price- </td><td>{{ item.price }}</td>\n          </tr>\n          <tr>\n          <td>Language- </td><td>{{ item.language }}</td>\n          </tr>\n          <tr>\n          <td>Description- </td><td>{{ item.description }}</td>\n          </tr>\n    </table>\n  </div>\n  \n</div>\n<div class=\"buttons\">\n  <table>\n  <tr>\n    <td ><button class=\"btn btn-primary\" ><a style=\"color:white\"  href=\"\">Add to WishList</a></button></td>\n    <td> <button class=\"btn btn-success\" ><a style=\"color:white\" href=\"\">Add to Cart</a></button></td>\n    </tr>\n  </table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/product-card/product-card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product-card/product-card.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product {\n  position: relative;\n  background-color: #98e7ff;\n  width: 250px;\n  border: black; }\n\n.imagesize {\n  height: 300px;\n  width: 250px; }\n\n.front:hover .imagesize {\n  position: absolute;\n  width: 0px;\n  height: 300px;\n  transition: all 0.6s ease-in-out 0s;\n  -moz-transition: all 0.6s ease-in-out 0s;\n  -webkit-transition: all 0.6s ease-in-out 0s;\n  -o-transition: all 0.6s ease-in-out 0s; }\n\n.front:hover ~ .back {\n  position: relative;\n  opacity: 1;\n  margin-left: 1px;\n  background-color: #98e7ff; }\n\n.front {\n  width: 250px;\n  height: 300px;\n  position: absolute;\n  z-index: 30; }\n\n.back {\n  width: 250px;\n  height: 300px;\n  position: relative;\n  z-index: 20;\n  opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha24vUHJvamVjdCBXb3JrIFNwYWNlL0FuZ3VsYXIgUmVwby9ib29rc2p1bmN0aW9uL3NyYy9hcHAvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBVztFQUNYLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxhQUFhO0VBQ2IsWUFBVyxFQUFBOztBQU1mO0VBRVEsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBRWIsbUNBQW9DO0VBQ3BDLHdDQUF3QztFQUN4QywyQ0FBNEM7RUFDNUMsc0NBQXVDLEVBQUE7O0FBVC9DO0VBYUksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBSTdCO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUlmO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDakIsV0FBVztFQUNYLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4ZTdmZjtcbiAgICB3aWR0aDoyNTBweDtcbiAgICBib3JkZXI6IGJsYWNrO1xufVxuXG4uaW1hZ2VzaXple1xuICAgIGhlaWdodDozMDBweCA7XG4gICAgd2lkdGg6MjUwcHg7XG59XG5cbi5idXR0b25ze1xuICAgIFxufVxuLmZyb250OmhvdmVye1xuICAgIC5pbWFnZXNpemV7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgLy8gdG9wOjIwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogIGFsbCAwLjZzIGVhc2UtaW4tb3V0IDBzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0IDBzO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICBhbGwgMC42cyBlYXNlLWluLW91dCAwcztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogIGFsbCAwLjZzIGVhc2UtaW4tb3V0IDBzO1xuICAgICAgICBcbiAgICB9XG4gICAgfiAuYmFja3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3BhY2l0eTogMTtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OGU3ZmY7XG4gICAgfVxufVxuXG4uZnJvbnR7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDMwO1xuICAgIFxufVxuXG4uYmFja3tcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIHotaW5kZXg6IDIwO1xuICAgICBvcGFjaXR5OiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/product-card/product-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-card/product-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Book */ "./src/app/Book.ts");



var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent() {
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('item'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _Book__WEBPACK_IMPORTED_MODULE_2__["Book"])
    ], ProductCardComponent.prototype, "item", void 0);
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.scss */ "./src/app/product-card/product-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    mockData: true,
    SERVER_PORT: "http://localhost:9292",
    mockUrl: "./assets/widgets.json"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akn/Project Work Space/Angular Repo/booksjunction/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map