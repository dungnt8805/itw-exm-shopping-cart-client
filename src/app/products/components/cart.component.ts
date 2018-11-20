import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../shared/services/products.service';
import { Cart } from '../../models/cart';

@Component({
    templateUrl: './templates/cart.component.html'
})

export class CartComponent implements OnInit {
	cart: Cart;
	requesting = false;
	constructor(private activatedRoute: ActivatedRoute) {

	}
	ngOnInit() {
		this.activatedRoute.data.subscribe((data: { cart: Cart }) => {
			this.cart = data.cart;
		});
	}

	increaseQty(item) {
		this.requesting = true;
		item.quantity++;
	}
	decreaseQty(item) {
		this.requesting = true;
	}
	removeItem(item) {
		this.requesting = true;
	}
}