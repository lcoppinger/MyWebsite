import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";

//components 
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
    imports: [ 
        CommonModule,
        FlexLayoutModule
    ],
    declarations: [
        HeaderComponent,
        ProductsComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class ComponentsModule { }