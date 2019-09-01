import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { D3ExampleComponent } from './pages/d3-example/d3-example.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'd3-example', component: D3ExampleComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
