import { Component, OnInit } from '@angular/core';
import { Product } from '@fv-playing-qr/data';
import { ModalController } from '@ionic/angular';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'fv-playing-qr-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  cart: Product[] = [];
  name!: string;

  constructor(
    private modalCtrl: ModalController,
    private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();

    console.log('cart --> ', this.cart);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  decreaseCartItem(product: Product): void {
		this.cartService.decreaseProduct(product);
	}

	increaseCartItem(product: Product): void {
		this.cartService.addProduct(product);
	}

	removeCartItem(product: Product): void {
		this.cartService.removeProduct(product);
	}

	getTotal(): number {
		return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
	}
}
