import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { Cart } from '../../models/cart';
import { ProductsService } from '../../shared/services/products.service';

@Injectable()
export class CartResolver implements Resolve<Cart> {
    constructor(
        private productService: ProductsService
    ) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Cart> {
        return this.productService.getCart().toPromise();
    }
}