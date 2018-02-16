import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";
import {GlobalVars} from "../providers/globalVars";

import {MyApp} from "./app.component";
import {DatabaseComponent} from "../components/database/database";
import {WebsitePage} from "../pages/websites/website";
import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {MobileAppPage} from "../pages/mobile-app/mobile-app";
import {MobileAppAddPage} from "../pages/mobile-app-add/mobile-app-add";
import {CardsPage} from "../pages/cards/cards";
import {BankPage} from "../pages/bank/bank";
import {BankAddPage} from "../pages/bank-add/bank-add";

import {AddWebsitePage} from "../pages/add-website/add-website";

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    AddWebsitePage,
    WebsitePage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    MobileAppPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    MobileAppAddPage,
    CardsPage,
    BankPage,
    BankAddPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    AddWebsitePage,
    CheckoutTripPage,
    HomePage,
    WebsitePage,
    LoginPage,
    MobileAppPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    MobileAppAddPage,
    CardsPage,
    BankPage,
    BankAddPage
  ],
  providers: [
    StatusBar,
    SQLite,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    DatabaseComponent,
    WeatherProvider,
    GlobalVars
  ]
})

export class AppModule {
}
