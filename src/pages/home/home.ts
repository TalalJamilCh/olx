import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { ShopPage } from '../shop/shop';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
  
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  gotoNext(i){
    let data = JSON.stringify(i)
    this.navCtrl.push(DetailsPage, {data: data})
    console.log(i)
  }
    
}
