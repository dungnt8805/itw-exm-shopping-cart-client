import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from "./product.routing";
import { ProductsResolver } from './resolves/products.resolve';
import { ProductResolver } from './resolves/product.resolve';
import { CartResolver } from './resolves/cart.resolve';

import { ProductsComponent } from './components/products.component';
import { ProductComponent } from './components/product.component';
import { CartComponent } from './components/cart.component';
import { CheckOutComponent } from './components/check-out.component';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ProductRoutingModule,
    ],
    exports: [

    ],
    providers: [
        ProductsResolver,
        ProductResolver,
        CartResolver
    ],
    declarations: [
        ProductsComponent,
        ProductComponent,
        CartComponent,
        CheckOutComponent
    ]
})

export class ProductsModule { }