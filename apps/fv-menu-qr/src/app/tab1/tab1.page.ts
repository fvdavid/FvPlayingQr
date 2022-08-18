import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Menu, Product } from '@fv-playing-qr/data';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartComponent } from '../page/cart/cart.component';
import { CartService } from '../service/cart.service';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'fv-playing-qr-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  menus!: Menu[];
  menuByCategory!: Menu;
  isCategoryDefault = true;

  cartItemCount!: BehaviorSubject<number>;
  cart: Product[] = [];

  @ViewChild('cart', { static: false, read: ElementRef }) fab!: ElementRef;

  constructor(
    private modalCtrl: ModalController,
    private menuFire: MenuService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.getStarted();
  }

  getStarted() {
    this.menuFire.getAll().snapshotChanges().subscribe(tut => {
      this.menus = tut.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Menu;
      });
    });

    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  gotoItem(menu: Menu) {
    this.menuByCategory = menu;
    this.isCategoryDefault = false;
  }

  addToCart(product: Product) {
    product.isOnCart = true;
    this.cartService.addProduct(product);
  }

  decreaseCartItem(product: Product): void {
    this.cartService.decreaseProduct(product);

    if (product.amount == 0) {
      product.isOnCart = false;
    }
  }

  increaseCartItem(product: Product): void {
    this.cartService.addProduct(product);
  }

  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartComponent,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.8
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    console.log('role ---> ', role);

    // if (role === 'backdrop' || role === 'cancel') {
    this.getStarted();
    // }

    if (role === 'confirm') {
      console.log('data ==> ', data);
    }
  }
}