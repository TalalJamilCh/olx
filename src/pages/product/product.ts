import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public mc: MenuController) {
    this.mc.enable(true, 'con')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
  toggle(){
    this.mc.toggle();
  }
}
