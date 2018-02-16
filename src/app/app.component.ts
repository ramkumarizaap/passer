import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { WebsitePage } from "../pages/websites/website";
import { AddWebsitePage } from "../pages/add-website/add-website";
import { MobileAppPage } from "../pages/mobile-app/mobile-app";
import { MobileAppAddPage } from "../pages/mobile-app-add/mobile-app-add";
import { CardsPage } from "../pages/cards/cards";
import { BankPage } from "../pages/bank/bank";
import { BankAddPage } from "../pages/bank-add/bank-add";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseComponent } from "../components/database/database";
export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public db:DatabaseComponent,
    private sqlite: SQLite,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();
    this.db.createTables();
    this.appMenuItems = [
      {title: 'Websites', component: WebsitePage, icon: 'ios-globe'},
      {title: 'Apps', component: MobileAppPage, icon: 'ios-appstore'},
      {title: 'Cards', component: HomePage, icon: 'ios-card'},
      {title: 'Bank', component: BankPage, icon: 'logo-usd'},
      {title: 'Notes', component: HomePage, icon: 'ios-document'},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
      this.createDB();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

  createDB()
  {
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
  }

}

