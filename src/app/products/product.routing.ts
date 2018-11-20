import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products.component';
import { ProductComponent } from './components/product.component';
import { CartComponent } from './components/cart.component';
import { ProductsResolver } from "./resolves/products.resolve";
import { ProductResolver } from "./resolves/product.resolve"
import { CartResolver } from "./resolves/cart.resolve"

const routes: Routes = [
	{
		path: '',
		redirectTo: '/products',
		pathMatch: 'full',
	},
	{
		path: 'products',
		component: ProductsComponent,
		data: {
			title: 'Products'
		},
		resolve: {
			products: ProductsResolver,
		}
	},
	{
		path: 'products/:url',
		component: ProductComponent,
		resolve: {
			product: ProductResolver,
		}
	},
	{
		path: 'cart',
		component: CartComponent,
		resolve: {
			cart: CartResolver,
		}
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})

export class ProductRoutingModule { }
