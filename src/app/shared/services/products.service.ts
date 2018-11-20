import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { APIConnector } from "./api-connector.service";
import { StorageService } from "./storage.service";
import { Product } from "../../models/product";
import { Cart } from "../../models/cart";
@Injectable()
class ProductsService {
	constructor(private apiConnector: APIConnector, private storageService: StorageService) {}
	list(): Observable<Array<Product>> {
		return this.apiConnector.requestAPI('get', '/products');
	}
	get(url): Observable<Product> {
		return this.apiConnector.requestAPI('get', '/products/'+url);
	}

	addToCart(item, callback) {
		const cartToken = this.storageService.get('cartToken');
		const path = '/cart' + (cartToken ? '/'+cartToken : '');
		this.apiConnector.requestAPI('post', path, item).subscribe(cart => {
			if (!cartToken) {
				this.storageService.set('cartToken', cart.cartToken);
			}
			callback(null, cart);
		}, error => callback(error));
	}

	getCart(): Observable<Cart> {
		const cartToken = this.storageService.get('cartToken');
		if (!cartToken) {
			return new Observable();
		}
		return this.apiConnector.requestAPI('get', '/cart/'+cartToken);
	}

	updateCart(updates): Observable<Cart> {
		const cartToken = this.storageService.get('cartToken');
		const items = [];
		updates.forEach(item => {
			items.push({ url: item.url, quantity: item.quantity });
		})
		if (!cartToken) {
			return new Observable();
		}
		return this.apiConnector.requestAPI('patch', '/cart/'+cartToken, {items})
	}
}

export { ProductsService, Product };