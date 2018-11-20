import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Product, ProductsService } from '../../shared/services/products.service';

@Injectable()
export class ProductsResolver implements Resolve<Array<Product>> {
    constructor(
        private productService: ProductsService,
    ) {

    }
    resolve(): Promise<Array<Product>> {

        return this.productService.list().toPromise();
    }
}