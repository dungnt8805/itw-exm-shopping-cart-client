import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { Product, ProductsService } from '../../shared/services/products.service';

@Injectable()
export class ProductResolver implements Resolve<Product> {
    constructor(
        private productService: ProductsService,
        private router: Router
    ) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Product> {
		let url = route.params['url'];
        return this.productService.get(url).toPromise();
    }
}