webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/products/products.module": [
		"./src/app/products/products.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      \n    </div>\n    <div id=\"navbar\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a routerLink=\"/products\">Products</a>\n        </li>\n        <li>\n          <a routerLink=\"/cart\">Cart</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<main style=\"padding-top: 100px\">\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n    \n  </div>\n</main>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products_module__ = __webpack_require__("./src/app/products/products.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__products_products_module__["ProductsModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRouting */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_strategies_selective_preload_strategy__ = __webpack_require__("./src/app/shared/strategies/selective-preload.strategy.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        loadChildren: 'app/products/products.module#ProductsModule',
    },
];
var AppRouting = (function () {
    function AppRouting() {
    }
    return AppRouting;
}());
AppRouting = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__shared_strategies_selective_preload_strategy__["a" /* SelectivePreloadingStrategy */]
        ]
    })
], AppRouting);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "./src/app/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Product */
var Product = (function () {
    function Product() {
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "./src/app/products/components/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_products_service__ = __webpack_require__("./src/app/shared/services/products.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = (function () {
    function CartComponent(activatedRoute, productsService) {
        this.activatedRoute = activatedRoute;
        this.productsService = productsService;
        this.requesting = false;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.cart = data.cart;
        });
    };
    CartComponent.prototype.increaseQty = function (item) {
        this.requesting = true;
        item.quantity++;
        this.updateCart(function () { });
    };
    CartComponent.prototype.decreaseQty = function (item) {
        item.quantity--;
        if (item.quantity <= 0) {
            item.quantity = 0;
        }
        this.updateCart(function () { });
    };
    CartComponent.prototype.removeItem = function (item, idx) {
        var _this = this;
        item.quantity = 0;
        this.requesting = true;
        this.updateCart(function () {
            _this.cart.items.splice(idx, 1);
        });
    };
    CartComponent.prototype.updateCart = function (callback) {
        var _this = this;
        this.requesting = true;
        this.productsService.updateCart(this.cart.items).subscribe(function (cartResp) {
            _this.cart.items = cartResp.items;
            _this.cart.price = cartResp.price;
            _this.cart.total = cartResp.total;
            _this.requesting = false;
            callback(cartResp);
        });
    };
    return CartComponent;
}());
CartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("./src/app/products/components/templates/cart.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_products_service__["a" /* ProductsService */]) === "function" && _b || Object])
], CartComponent);

var _a, _b;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "./src/app/products/components/check-out.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_products_service__ = __webpack_require__("./src/app/shared/services/products.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckOutComponent = (function () {
    function CheckOutComponent(activatedRoute, productsService) {
        this.activatedRoute = activatedRoute;
        this.productsService = productsService;
        this.requesting = false;
        this._sortByTitle = false;
        this._sortByPrice = false;
        this._sortByQty = true;
        this._sortByTotal = false;
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.cart = data.cart;
            _this.sort('qty');
        });
    };
    CheckOutComponent.prototype.sort = function (sortBy) {
        this.resetSortLabel();
        switch (sortBy) {
            case "qty":
            default:
                this._sortByQty = true;
                this.cart.items.sort(function (a, b) {
                    return a.quantity - b.quantity;
                });
                break;
            case 'price':
                this._sortByPrice = true;
                this.cart.items.sort(function (a, b) {
                    return a.price - b.price;
                });
                break;
            case 'title':
                this._sortByTitle = true;
                this.cart.items.sort(function (a, b) {
                    var nameA = a.title.toUpperCase();
                    var nameB = b.title.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case 'total':
                this._sortByTotal = true;
                this.cart.items.sort(function (a, b) {
                    return (a.price * a.quantity) - (b.price * b.quantity);
                });
                break;
        }
    };
    CheckOutComponent.prototype.resetSortLabel = function () {
        this._sortByQty = false;
        this._sortByPrice = false;
        this._sortByTitle = false;
        this._sortByTotal = false;
    };
    return CheckOutComponent;
}());
CheckOutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("./src/app/products/components/templates/check-out.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_products_service__["a" /* ProductsService */]) === "function" && _b || Object])
], CheckOutComponent);

var _a, _b;
//# sourceMappingURL=check-out.component.js.map

/***/ }),

/***/ "./src/app/products/components/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_products_service__ = __webpack_require__("./src/app/shared/services/products.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = (function () {
    function ProductComponent(activatedRoute, productsService) {
        this.activatedRoute = activatedRoute;
        this.productsService = productsService;
        this.item = { product: '', quantity: 1 };
        this.requesting = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (resolveData) {
            _this.product = resolveData.product;
            _this.item.product = _this.product.url;
        });
    };
    ProductComponent.prototype.increaseQty = function () {
        this.item.quantity += 1;
    };
    ProductComponent.prototype.decreaseQty = function () {
        this.item.quantity -= 1;
        if (this.item.quantity <= 1) {
            this.item.quantity = 1;
        }
    };
    ProductComponent.prototype.addToCart = function () {
        var _this = this;
        this.requesting = true;
        this.productsService.addToCart(this.item, function (error, cart) {
            _this.requesting = false;
            alert('Your item has been added to cart');
        });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("./src/app/products/components/templates/product.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_products_service__["a" /* ProductsService */]) === "function" && _b || Object])
], ProductComponent);

var _a, _b;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "./src/app/products/components/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = (function () {
    function ProductsComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.products = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (resolveData) {
            _this.products = resolveData.products;
        });
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("./src/app/products/components/templates/products.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], ProductsComponent);

var _a;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "./src/app/products/components/templates/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"text-align: center\">Check your cart</p>\r\n<table class=\"table table-bordered\">\r\n\t<tr>\r\n\t\t<td>Item</td>\r\n\t\t<td>Price</td>\r\n\t\t<td>Quantity</td>\r\n\t\t<td>Total Price</td>\r\n\t\t<td></td>\r\n\t</tr>\r\n\t<tr *ngFor=\"let item of cart.items; let idex = index\">\r\n\t\t<td>{{item.title}}</td>\r\n\t\t<td>{{item.price}}</td>\r\n\t\t<td>\r\n\t\t\t<button class=\"btn btn-sm\" (click)=\"decreaseQty(item)\" [disabled]=\"requesting\">-</button>\r\n\t\t\t<input [(ngModel)]=\"item.quantity\" #quantity=\"ngModel\" type=\"number\" disabled=\"disabled\" />\r\n\t\t\t<button class=\"btn btn-sm\" (click)=\"increaseQty(item)\" [disabled]=\"requesting\">+</button>\r\n\t\t</td>\r\n\t\t<td>{{item.price * item.quantity}}</td>\r\n\t\t<td><button class=\"btn btn-sm\" (click)=\"removeItem(item, idx)\" [disabled]=\"requesting\"><i class=\"fa fa-trash\"></i></button></td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td colspan=\"3\" style=\"text-align: right\">Total Price:</td>\r\n\t\t<td colspan=\"2\">{{cart.total}}</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td colspan=\"5\" style=\"text-align: right\"><a routerLink=\"/checkouts\" class=\"btn btn-success\">Checkouts</a></td>\r\n\t</tr>\r\n</table>"

/***/ }),

/***/ "./src/app/products/components/templates/check-out.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"text-align: center\">Checkout</p>\r\n<table class=\"table table-bordered\">\r\n\t<tr>\r\n\t\t<td (click)=\"sort('title')\">Item <i *ngIf=\"_sortByTitle\" class=\"fa fa-caret-down\"></i></td>\r\n\t\t<td (click)=\"sort('price')\">Price <i *ngIf=\"_sortByPrice\" class=\"fa fa-caret-down\"></i></td>\r\n\t\t<td (click)=\"sort('qty')\">Quantity <i *ngIf=\"_sortByQty\" class=\"fa fa-caret-down\"></i></td>\r\n\t\t<td (click)=\"sort('total')\">Total Price <i *ngIf=\"_sortByTotal\" class=\"fa fa-caret-down\"></i></td>\r\n\t</tr>\r\n\t<tr *ngFor=\"let item of cart.items; let idex = index\">\r\n\t\t<td>{{item.title}}</td>\r\n\t\t<td>{{item.price}}</td>\r\n\t\t<td>\r\n\t\t\t<input [(ngModel)]=\"item.quantity\" #quantity=\"ngModel\" type=\"number\" disabled=\"disabled\" />\r\n\t\t</td>\r\n\t\t<td>{{item.price * item.quantity}}</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td colspan=\"3\" style=\"text-align: right\">Total Price:</td>\r\n\t\t<td colspan=\"2\">{{cart.total}}</td>\r\n\t</tr>\r\n</table>"

/***/ }),

/***/ "./src/app/products/components/templates/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<p>{{product.title}}</p>\r\n\t<div><img src=\"{{product.image}}\" width=\"400\"/></div>\r\n\t<p>{{product.description}}</p>\r\n\t<p>Price: {{product.price}}</p>\r\n\t<div>\r\n\t\t<button class=\"btn btn-sm\" (click)=\"decreaseQty()\">-</button>\r\n\t\t<input [(ngModel)]=\"item.quantity\" type=\"number\" #quantity=\"ngModel\"/>\r\n\t\t<button class=\"btn btn-sm\" (click)=\"increaseQty()\">+</button>\r\n\t</div>\r\n\t<div>\r\n\t\t<button class=\"btn btn-success\" (click)=\"addToCart()\" [disabled]=\"requesting\">Add To Cart</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/products/components/templates/products.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n\t<tr>\r\n\t\t<td colspan=\"5\">Products</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td>Title</td>\r\n\t\t<td>Image</td>\r\n\t\t<td>Description</td>\r\n\t\t<td>Price</td>\r\n\t\t<td>View</td>\r\n\t</tr>\r\n\t<tr *ngFor=\"let product of products\">\r\n\t\t<td>{{product.title}}</td>\r\n\t\t<td><img src=\"{{product.image}}\" width=\"200\"/></td>\r\n\t\t<td>{{product.description}}</td>\r\n\t\t<td>{{product.price}}</td>\r\n\t\t<td><a routerLink=\"/products/{{product.url}}\" class=\"btn btn-sm btn-secondary\"><i class=\"fa fa-eye\"></i></a></td>\r\n\t</tr>\r\n</table>"

/***/ }),

/***/ "./src/app/products/product.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_products_component__ = __webpack_require__("./src/app/products/components/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_product_component__ = __webpack_require__("./src/app/products/components/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cart_component__ = __webpack_require__("./src/app/products/components/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resolves_products_resolve__ = __webpack_require__("./src/app/products/resolves/products.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resolves_product_resolve__ = __webpack_require__("./src/app/products/resolves/product.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resolves_cart_resolve__ = __webpack_require__("./src/app/products/resolves/cart.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_check_out_component__ = __webpack_require__("./src/app/products/components/check-out.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full',
    },
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_2__components_products_component__["a" /* ProductsComponent */],
        data: {
            title: 'Products'
        },
        resolve: {
            products: __WEBPACK_IMPORTED_MODULE_5__resolves_products_resolve__["a" /* ProductsResolver */],
        }
    },
    {
        path: 'products/:url',
        component: __WEBPACK_IMPORTED_MODULE_3__components_product_component__["a" /* ProductComponent */],
        resolve: {
            product: __WEBPACK_IMPORTED_MODULE_6__resolves_product_resolve__["a" /* ProductResolver */],
        }
    },
    {
        path: 'cart',
        component: __WEBPACK_IMPORTED_MODULE_4__components_cart_component__["a" /* CartComponent */],
        resolve: {
            cart: __WEBPACK_IMPORTED_MODULE_7__resolves_cart_resolve__["a" /* CartResolver */],
        }
    },
    {
        path: 'checkouts',
        component: __WEBPACK_IMPORTED_MODULE_8__components_check_out_component__["a" /* CheckOutComponent */],
        resolve: {
            cart: __WEBPACK_IMPORTED_MODULE_7__resolves_cart_resolve__["a" /* CartResolver */],
        }
    }
];
var ProductRoutingModule = (function () {
    function ProductRoutingModule() {
    }
    return ProductRoutingModule;
}());
ProductRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
    })
], ProductRoutingModule);

//# sourceMappingURL=product.routing.js.map

/***/ }),

/***/ "./src/app/products/products.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_routing__ = __webpack_require__("./src/app/products/product.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resolves_products_resolve__ = __webpack_require__("./src/app/products/resolves/products.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resolves_product_resolve__ = __webpack_require__("./src/app/products/resolves/product.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resolves_cart_resolve__ = __webpack_require__("./src/app/products/resolves/cart.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_products_component__ = __webpack_require__("./src/app/products/components/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_product_component__ = __webpack_require__("./src/app/products/components/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cart_component__ = __webpack_require__("./src/app/products/components/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_check_out_component__ = __webpack_require__("./src/app/products/components/check-out.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ProductsModule = (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
ProductsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__product_routing__["a" /* ProductRoutingModule */],
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__resolves_products_resolve__["a" /* ProductsResolver */],
            __WEBPACK_IMPORTED_MODULE_6__resolves_product_resolve__["a" /* ProductResolver */],
            __WEBPACK_IMPORTED_MODULE_7__resolves_cart_resolve__["a" /* CartResolver */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__components_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_check_out_component__["a" /* CheckOutComponent */]
        ]
    })
], ProductsModule);

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ "./src/app/products/resolves/cart.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_products_service__ = __webpack_require__("./src/app/shared/services/products.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartResolver = (function () {
    function CartResolver(productService) {
        this.productService = productService;
    }
    CartResolver.prototype.resolve = function (route, state) {
        return this.productService.getCart().toPromise();
    };
    return CartResolver;
}());
CartResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_products_service__["a" /* ProductsService */]) === "function" && _a || Object])
], CartResolver);

var _a;
//# sourceMappingURL=cart.resolve.js.map

/***/ }),

/***/ "./src/app/products/resolves/product.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_products_service__ = __webpack_require__("./src/app/shared/services/products.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductResolver = (function () {
    function ProductResolver(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ProductResolver.prototype.resolve = function (route, state) {
        var url = route.params['url'];
        return this.productService.get(url).toPromise();
    };
    return ProductResolver;
}());
ProductResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], ProductResolver);

var _a, _b;
//# sourceMappingURL=product.resolve.js.map

/***/ }),

/***/ "./src/app/products/resolves/products.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_products_service__ = __webpack_require__("./src/app/shared/services/products.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsResolver = (function () {
    function ProductsResolver(productService) {
        this.productService = productService;
    }
    ProductsResolver.prototype.resolve = function () {
        return this.productService.list().toPromise();
    };
    return ProductsResolver;
}());
ProductsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_products_service__["a" /* ProductsService */]) === "function" && _a || Object])
], ProductsResolver);

var _a;
//# sourceMappingURL=products.resolve.js.map

/***/ }),

/***/ "./src/app/shared/services/api-connector.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIConnector; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var APIConnector = (function () {
    function APIConnector(http, router) {
        this.http = http;
        this.router = router;
        this.isShowModal = false;
    }
    APIConnector.prototype.requestAPI = function (method, _uri, _data) {
        var _this = this;
        if (_data === void 0) { _data = null; }
        var API_PATH = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiPath;
        var uri = _uri;
        var data = _data;
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* RequestOptions */]();
        if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
            if (data) {
                uri += '?';
                for (var key in data) {
                    if (data[key])
                        uri += key + "=" + data[key] + "&";
                }
                uri = uri.slice(0, -1);
            }
            data = null;
        }
        else if (!data) {
            data = {};
        }
        var request = !data ? this.http[method](API_PATH + uri, options) : this.http[method](API_PATH + uri, data, options);
        return request.map(function (res) { return _this.completeRequest(res, 'extractData'); }).catch(function (err) { return _this.completeRequest(err, 'handleError'); });
    };
    APIConnector.prototype.completeRequest = function (res, callback) {
        return this[callback](res);
    };
    APIConnector.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    APIConnector.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body || JSON.stringify(body);
            errMsg = err.message ? err.message : err.toString();
        }
        else {
            errMsg = 'Something went wrong!';
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return APIConnector;
}());
APIConnector = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], APIConnector);

var _a, _b;
//# sourceMappingURL=api-connector.service.js.map

/***/ }),

/***/ "./src/app/shared/services/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_connector_service__ = __webpack_require__("./src/app/shared/services/api-connector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__("./src/app/shared/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_product__ = __webpack_require__("./src/app/models/product.ts");
/* unused harmony reexport Product */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsService = (function () {
    function ProductsService(apiConnector, storageService) {
        this.apiConnector = apiConnector;
        this.storageService = storageService;
    }
    ProductsService.prototype.list = function () {
        return this.apiConnector.requestAPI('get', '/products');
    };
    ProductsService.prototype.get = function (url) {
        return this.apiConnector.requestAPI('get', '/products/' + url);
    };
    ProductsService.prototype.addToCart = function (item, callback) {
        var _this = this;
        var cartToken = this.storageService.get('cartToken');
        var path = '/cart' + (cartToken ? '/' + cartToken : '');
        this.apiConnector.requestAPI('post', path, item).subscribe(function (cart) {
            if (!cartToken) {
                _this.storageService.set('cartToken', cart.cartToken);
            }
            callback(null, cart);
        }, function (error) { return callback(error); });
    };
    ProductsService.prototype.getCart = function () {
        var cartToken = this.storageService.get('cartToken');
        if (!cartToken) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"]();
        }
        return this.apiConnector.requestAPI('get', '/cart/' + cartToken);
    };
    ProductsService.prototype.updateCart = function (updates) {
        var cartToken = this.storageService.get('cartToken');
        var items = [];
        updates.forEach(function (item) {
            items.push({ url: item.url, quantity: item.quantity });
        });
        if (!cartToken) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"]();
        }
        return this.apiConnector.requestAPI('patch', '/cart/' + cartToken, { items: items });
    };
    return ProductsService;
}());
ProductsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_connector_service__["a" /* APIConnector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_connector_service__["a" /* APIConnector */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], ProductsService);

var _a, _b;
//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ "./src/app/shared/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.get = function (key) {
        return localStorage.getItem(key);
    };
    StorageService.prototype.set = function (key, value) {
        localStorage.setItem(key, value);
    };
    StorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageService.prototype.setObject = function (key, value) {
        if (value) {
            this.set(key, JSON.stringify(value));
        }
    };
    StorageService.prototype.getObject = function (key) {
        var value = this.get(key);
        if (!value) {
            return null;
        }
        return JSON.parse(value);
    };
    return StorageService;
}());
StorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_connector_service__ = __webpack_require__("./src/app/shared/services/api-connector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_products_service__ = __webpack_require__("./src/app/shared/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_storage_service__ = __webpack_require__("./src/app/shared/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__strategies_selective_preload_strategy__ = __webpack_require__("./src/app/shared/strategies/selective-preload.strategy.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import service




var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* HttpModule */]
        ],
        exports: [],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__strategies_selective_preload_strategy__["a" /* SelectivePreloadingStrategy */],
            __WEBPACK_IMPORTED_MODULE_5__services_api_connector_service__["a" /* APIConnector */],
            __WEBPACK_IMPORTED_MODULE_6__services_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_7__services_storage_service__["a" /* StorageService */]
        ],
        entryComponents: []
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "./src/app/shared/strategies/selective-preload.strategy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectivePreloadingStrategy; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectivePreloadingStrategy = (function () {
    function SelectivePreloadingStrategy() {
        this.preloadedModules = [];
    }
    SelectivePreloadingStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            // add the route path to our preloaded module array
            this.preloadedModules.push(route.path);
            return load();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
        }
    };
    return SelectivePreloadingStrategy;
}());
SelectivePreloadingStrategy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])()
], SelectivePreloadingStrategy);

//# sourceMappingURL=selective-preload.strategy.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiPath: "https://itw-exm-shopping-cart-api.herokuapp.com",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map