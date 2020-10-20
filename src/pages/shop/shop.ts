import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DetailsPage } from '../details/details';
import { ProductPage } from '../product/product';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  images:any=[
    {
      title: 'Modern Chair',
      image: 'assets/imgs/product1.jpg',
      price: '180'
    },{
      title: 'Minimalistic Plant Pot ',
      image: 'assets/imgs/product2.jpg',
      price: '180'
    },{
      title: ' Modern Chair',
      image: 'assets/imgs/product3.jpg',
      price: '180'
    },{
      title: ' Night Stand',
      image: 'assets/imgs/product4.jpg',
      price: '180'
    },
    {
      title: ' Plant Pot',
      image: 'assets/imgs/product5.jpg',
      price: '18'
    },{
      title: ' Small Table',
      image: 'assets/imgs/product5.jpg',
      price: '320'
    },{
      title: ' Metallic Chair',
      image: 'assets/imgs/product6.jpg',
      price: '318'
    },
    {
      title: ' Modern Rocking Chair',
      image: 'assets/imgs/product1.jpg',
      price: '318'
    },{
      title: ' Home Deco',
      image: 'assets/imgs/product5.jpg',
      price: '318'
    },
    
     ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public mc: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  gotoNext(i){
    let data = JSON.stringify(i)
    this.navCtrl.push(DetailsPage, {data: data})
    console.log(i)
  }
  toggle(){
    this.mc.toggle();
  }
}
