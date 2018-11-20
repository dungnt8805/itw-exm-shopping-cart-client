import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../shared/services/products.service';
import { Cart } from '../../models/cart';

@Component({
    templateUrl: './templates/check-out.component.html'
})

export class CheckOutComponent implements OnInit {
	cart: Cart;
	requesting = false;
	constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) {
	}
	ngOnInit() {
		this.activatedRoute.data.subscribe((data: { cart: Cart }) => {
			this.cart = data.cart;
		});
	}

	increaseQty(item) {
		this.requesting = true;
		item.quantity++;
		this.updateCart(() => {});
	}
	decreaseQty(item) {
		item.quantity--;
		if (item.quantity <= 0) {
			item.quantity = 0;
		}
		this.updateCart(() => {});
	}
	removeItem(item, idx) {
		item.quantity = 0;
		this.requesting = true;
		this.updateCart(() => {
			this.cart.items.splice(idx, 1)
		});
	}

	updateCart(callback) {
		this.requesting = true;
		this.productsService.updateCart(this.cart.items).subscribe(cartResp => {
			this.cart.items = cartResp.items;
			this.cart.price = cartResp.price;
			this.cart.total = cartResp.total;
			this.requesting = false;
			callback(cartResp);
		});
	}
}