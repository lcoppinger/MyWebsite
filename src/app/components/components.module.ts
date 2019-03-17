import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";

//components 
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CirclesComponent } from './circles/circles.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
    imports: [ 
        CommonModule,
        FlexLayoutModule
    ],
    declarations: [
        HeaderComponent,
        ProductsComponent,
        CirclesComponent,
        FooterComponent,
        ModalComponent
    ],
    exports: [
        HeaderComponent,
        CirclesComponent,
        ProductsComponent,
        FooterComponent,
        ModalComponent
    ]
})
export class ComponentsModule { }