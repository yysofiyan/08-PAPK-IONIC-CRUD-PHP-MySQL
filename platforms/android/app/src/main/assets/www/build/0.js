webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookformPageModule", function() { return BookformPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookform__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookformPageModule = /** @class */ (function () {
    function BookformPageModule() {
    }
    BookformPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bookform__["a" /* BookformPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bookform__["a" /* BookformPage */]),
            ],
        })
    ], BookformPageModule);
    return BookformPageModule;
}());

//# sourceMappingURL=bookform.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookformPage = /** @class */ (function () {
    function BookformPage(navCtrl, navParams, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.book = {
            judul: '',
            penerbit: '',
            pengarang: ''
        };
        this.title = '';
        this.header = {};
        this.bookID = '';
        this.title = 'Tambah Buku';
        this.bookID = navParams.get("bookID");
        if (this.bookID != null || this.bookID != undefined) {
            this.title = 'Edit Buku';
        }
        this.toaster = this.toastCtrl.create({
            duration: 3000,
            position: 'bottom'
        });
    }
    BookformPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.bookID != '') {
            this.http.get('http://localhost:8888/ionic_web_server/detail_buku.php', { id: this.bookID }, this.header)
                .then(function (res) {
                try {
                    _this.book = JSON.parse(res.data)[0];
                }
                catch (e) {
                    console.error('JSON parsing error');
                }
            }).catch(function (e) {
                console.log(e);
            });
        }
    };
    BookformPage.prototype.save = function () {
        var _this = this;
        if (this.book.judul == '' || this.book.penerbit == '' || this.book.pengarang == '') {
            this.toaster.setMessage('All fields are required');
            this.toaster.present();
        }
        else {
            var url = 'http://localhost:8888/ionic_web_server/tambah_buku.php';
            if (this.bookID) {
                url = 'http://localhost:8888/ionic_web_server/edit_buku.php';
            }
            this.http.post(url, this.book, this.header)
                .then(function (res) {
                try {
                    console.log(res);
                    var data = JSON.parse(res.data);
                    _this.toaster.setMessage(data.message);
                    _this.toaster.present();
                }
                catch (e) {
                    console.error('JSON parsing error');
                }
                setTimeout(function () {
                    _this.navCtrl.pop();
                }, 300);
            }).catch(function (e) {
                console.log(e);
            });
        }
    };
    BookformPage.prototype.deleteBook = function () {
        var _this = this;
        var url = 'http://localhost:8888/ionic_web_server/delete_buku.php';
        this.http.post(url, { id: this.bookID }, this.header)
            .then(function (res) {
            try {
                console.log(res);
                var data = JSON.parse(res.data);
                _this.toaster.setMessage(data.message);
                _this.toaster.present();
            }
            catch (e) {
                console.error('JSON parsing error');
            }
            setTimeout(function () {
                _this.navCtrl.pop();
            }, 300);
        }).catch(function (e) {
            console.log(e);
        });
    };
    BookformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookform',template:/*ion-inline-start:"/Users/macbookpromd313/Desktop/08-PAPK-REST-API/IonicCRUDPHP/src/pages/bookform/bookform.html"*/'<ion-header>\n    <ion-navbar>\n    	<ion-title> {{ title }} </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Judul</ion-label>\n            <ion-input type="judul" [(ngModel)] = "book.judul" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Penerbit</ion-label>\n            <ion-input type="penerbit" [(ngModel)] = "book.penerbit" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Pengarang</ion-label>\n            <ion-input type="pengarang" [(ngModel)] = "book.pengarang" ></ion-input>\n        </ion-item>\n        <ion-item text-center>\n            <button ion-button round style="min-width: 200px; padding: 10px 16px" (click) = "save()">Save</button>\n            <br/>\n            <button ion-button round style="min-width: 200px; padding: 10px 16px" (click) = "deleteBook()">Delete</button>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/macbookpromd313/Desktop/08-PAPK-REST-API/IonicCRUDPHP/src/pages/bookform/bookform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], BookformPage);
    return BookformPage;
}());

//# sourceMappingURL=bookform.js.map

/***/ })

});
//# sourceMappingURL=0.js.map