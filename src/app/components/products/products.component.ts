import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  selectedProduct: any = null;
  video: boolean = false;
  constructor(private http: HttpClient, private renderer: Renderer2) { }

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

  openModal(id) {
    this.http.get('../../../assets/designs.json')
    .subscribe((data:any) => {
      this.selectedProduct = data.find(x => x.id === id);
    }, err => console.log(err));
  }

  playVideo() {
    this.video = this.video ? false : true;

    if (this.video) {
      this.renderer.addClass(document.body, 'modal-open');
    }
  }

  closeModal() {
    this.video = false;
    this.renderer.removeClass(document.body, 'modal-open');
  }

  checkClose(event) {
    const modal = document.getElementById('videoModal');
    const wrapper = document.getElementById('videoWrapper');
    if (event.target == modal || event.target == wrapper) {
      this.closeModal();
    }
  }

}
