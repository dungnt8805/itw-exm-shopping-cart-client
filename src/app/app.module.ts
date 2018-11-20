import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
