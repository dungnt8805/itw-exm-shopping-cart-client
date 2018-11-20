import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './templates/products.component.html'
})

export class ProductsComponent implements OnInit {
	products = [];
	constructor(private activatedRoute: ActivatedRoute) {

	}
	ngOnInit() {
		this.activatedRoute.data.subscribe(resolveData => {
			this.products = resolveData.products;
		})
	}
}