import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../../assets/products.json')
    .subscribe(data => {
      this.products = data;
    }, err => console.log(err));
  }

  scrollTo(hash) {
    document.querySelector('#'+hash).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

}
