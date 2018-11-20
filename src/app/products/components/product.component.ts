import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../shared/services/products.service';

@Component({
    templateUrl: './templates/product.component.html'
})

export class ProductComponent implements OnInit {
	product: Product;
	item = {product: '', quantity: 1};
	requesting = false;
	constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) {

	}
	ngOnInit() {
		this.activatedRoute.data.subscribe((resolveData: {product: Product }) => {
			this.product = resolveData.product;
			this.item.product = this.product.url;
		})
	}

	increaseQty() {
		this.item.quantity +=1;
	}

	decreaseQty() {
		this.item.quantity  -=1;
		if (this.item.quantity <= 1) {
			this.item.quantity = 1;
		}
	}

	addToCart() {
		this.requesting = true;
		this.productsService.addToCart(this.item, (error, cart) => {
			this.requesting = false;
			alert('Your item has been added to cart');
		})
	}
}