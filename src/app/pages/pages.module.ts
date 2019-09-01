import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { D3ExampleComponent } from './d3-example/d3-example.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [ 
        CommonModule,
        ComponentsModule,
        AppRoutingModule
    ],
    declarations: [
        HomeComponent,
        D3ExampleComponent
    ],
    exports: [
        HomeComponent,
        D3ExampleComponent
    ]
})
export class PagesModule { }