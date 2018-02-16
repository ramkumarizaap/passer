var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { WebsitePage } from "../pages/websites/website";
import { MobileAppPage } from "../pages/mobile-app/mobile-app";
import { CardsPage } from "../pages/cards/cards";
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseComponent } from "../components/database/database";
var MyApp = /** @class */ (function () {
    function MyApp(db, sqlite, platform, statusBar, splashScreen, keyboard) {
        this.db = db;
        this.sqlite = sqlite;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = CardsPage;
        this.initializeApp();
        this.db.createTables();
        this.appMenuItems = [
            { title: 'Websites', component: WebsitePage, icon: 'ios-globe' },
            { title: 'Apps', component: MobileAppPage, icon: 'ios-appstore' },
            { title: 'Cards', component: HomePage, icon: 'ios-card' },
            { title: 'Bank', component: HomePage, icon: 'logo-usd' },
            { title: 'Notes', component: HomePage, icon: 'ios-document' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            _this.keyboard.disableScroll(true);
            _this.createDB();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(LoginPage);
    };
    MyApp.prototype.createDB = function () {
        // this.sqlite.create({
        //   name: 'pwdmgr.db',
        //   location: 'default'
        // })
        //   .then((db: SQLiteObject) => {
        //     db.executeSql('create table users(id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(32),email VARCHAR(32),password VARCHAR(32))', {})
        //       .then(() => alert('Users Table Created'))
        //       .catch(e => alert("Error: "+ JSON.stringify(e)));
        //     db.executeSql('create table websites(id INTEGER PRIMARY KEY AUTOINCREMENT,userid INTEGER(11),title VARCHAR(255),url VARCHAR(255))', {})
        //       .then(() => alert('Websites Table Created'))
        //       .catch(e => alert("Error: "+JSON.stringify(e)));
        //     db.executeSql('create table website_details(id INTEGER PRIMARY KEY AUTOINCREMENT,websiteid INTEGER(11),username VARCHAR(255),password VARCHAR(255),comments VARCHAR(255))', {})
        //       .then(() => alert('Website Details Table Created'))
        //       .catch(e => alert("Error: "+JSON.stringify(e)));
        //   })
        //   .catch(e => alert("Error NO:"+e));
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [DatabaseComponent,
            SQLite,
            Platform,
            StatusBar,
            SplashScreen,
            Keyboard])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map