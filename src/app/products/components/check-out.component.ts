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
	_sortByTitle = false;
	_sortByPrice = false;
	_sortByQty = true;
	_sortByTotal = false;
	constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) {
	}
	ngOnInit() {
		this.activatedRoute.data.subscribe((data: { cart: Cart }) => {
			this.cart = data.cart;
			this.sort('qty');
		});
	}

	sort(sortBy) {
		this.resetSortLabel();
		switch (sortBy) {
			case "qty":
			default:
				this._sortByQty = true;
				this.cart.items.sort((a, b) => {
					return a.quantity - b.quantity;
				})
				break;
			case 'price': 
				this._sortByPrice = true;
				this.cart.items.sort((a, b) => {
					return a.price - b.price;
				});
				break;
			case 'title':
				this._sortByTitle = true;
				this.cart.items.sort((a, b) => {
					const nameA = a.title.toUpperCase();
					const nameB = b.title.toUpperCase();
					if (nameA < nameB) {
					    return -1;
					}
					if (nameA > nameB) {
					    return 1;
					}
					return 0;
				});
				break;
			case 'total':
				this._sortByTotal = true;
				this.cart.items.sort((a, b) => {
					return (a.price * a.quantity) - (b.price * b.quantity);
				});
				break;

		}
	}

	resetSortLabel() {
		this._sortByQty = false;
		this._sortByPrice = false;
		this._sortByTitle = false;
		this._sortByTotal = false;
	}
}