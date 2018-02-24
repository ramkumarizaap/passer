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
// import { AddWebsitePage } from "../pages/add-website/add-website";
import { MobileAppPage } from "../pages/mobile-app/mobile-app";
// import { MobileAppAddPage } from "../pages/mobile-app-add/mobile-app-add";
import { CardsPage } from "../pages/cards/cards";
import { BankPage } from "../pages/bank/bank";
// import { BankAddPage } from "../pages/bank-add/bank-add";
// import { CardsAddPage } from "../pages/cards-add/cards-add";
import { DatabaseComponent } from "../components/database/database";
import { GlobalVars } from "../providers/globalVars";
var MyApp = /** @class */ (function () {
    function MyApp(db, platform, globalvars, statusBar, splashScreen, keyboard) {
        this.db = db;
        this.platform = platform;
        this.globalvars = globalvars;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = CardsPage;
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Websites', component: WebsitePage, icon: 'ios-globe' },
            { title: 'Apps', component: MobileAppPage, icon: 'ios-appstore' },
            { title: 'Cards', component: CardsPage, icon: 'ios-card' },
            { title: 'Bank', component: BankPage, icon: 'logo-usd' },
            { title: 'Notes', component: HomePage, icon: 'ios-document' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.db.createDb();
            var ins = _this.globalvars.getAppdata();
            if (ins == null) {
                _this.globalvars.setAppdata();
            }
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            _this.keyboard.disableScroll(true);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.globalvars.deleteUserdata();
        this.nav.setRoot(LoginPage);
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
            Platform,
            GlobalVars,
            StatusBar,
            SplashScreen,
            Keyboard])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map