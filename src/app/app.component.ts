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
import { CardsAddPage } from "../pages/cards-add/cards-add";
import { DatabaseComponent } from "../components/database/database";
import { GlobalVars } from "../providers/globalVars";
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
  rootPage: any = BankPage;
  appMenuItems: Array<MenuItem>;

  constructor(
    public db:DatabaseComponent,
    public platform: Platform,
    public globalvars:GlobalVars,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();
    this.appMenuItems = [
      {title: 'Websites', component: WebsitePage, icon: 'ios-globe'},
      {title: 'Apps', component: MobileAppPage, icon: 'ios-appstore'},
      {title: 'Cards', component: CardsPage, icon: 'ios-card'},
      {title: 'Bank', component: BankPage, icon: 'logo-usd'},
      {title: 'Notes', component: HomePage, icon: 'ios-document'},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
        this.db.createDb();
      let ins = this.globalvars.getAppdata();
      if( ins == null )
      {
        this.globalvars.setAppdata();
      }
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);


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


}

