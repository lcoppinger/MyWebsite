import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';

//components 
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CirclesComponent } from './circles/circles.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { D3ClickComponent } from './d3-click/d3-click.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [ 
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        HeaderComponent,
        ProductsComponent,
        CirclesComponent,
        FooterComponent,
        ModalComponent,
        D3ClickComponent,
    ],
    exports: [
        HeaderComponent,
        CirclesComponent,
        ProductsComponent,
        FooterComponent,
        ModalComponent,
        D3ClickComponent,
    ]
})
export class ComponentsModule { }