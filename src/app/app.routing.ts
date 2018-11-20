import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategy } from './shared/strategies/selective-preload.strategy';

const routes: Routes = [
	{
		path: '',
		loadChildren: 'app/products/products.module#ProductsModule',
	},
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [
		RouterModule,
	],
	providers: [
		SelectivePreloadingStrategy
	]
})
export class AppRouting { }
