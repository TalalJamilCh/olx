import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ShopPage } from '../pages/shop/shop';
import { ProductPage } from '../pages/product/product';
// import { ProductPage } from '../pages/product/product';
// import { ShopPage } from '../pages/shop/shop';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  home(){
    this.nav.popToRoot();
  }
  shop(){
    this.nav.push(ShopPage);
  }
  product(){
    this.nav.push(ProductPage);
  }
}

