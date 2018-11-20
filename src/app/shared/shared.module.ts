import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';

// import service
import { APIConnector } from './services/api-connector.service';
import { ProductsService } from "./services/products.service";
import { StorageService } from "./services/storage.service";
import { SelectivePreloadingStrategy } from "./strategies/selective-preload.strategy";


@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpModule
    ],
    exports: [
    ],
    declarations: [
    ],
    providers: [
        SelectivePreloadingStrategy,
        APIConnector,
        ProductsService,
        StorageService
    ],
    entryComponents: [
    ]
})
export class SharedModule { }
