import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { AnalyticsService } from '../../services/analytics.service';

const PRODUCTS_KEY = makeStateKey('products');

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  selectedProduct: any = null;
  video: boolean = false;
  constructor(
    private http: HttpClient, 
    private renderer: Renderer2, 
    private state: TransferState,
    private analytics: AnalyticsService
  ) { }

  ngOnInit() {
    this.products = this.state.get(PRODUCTS_KEY, null as any);
    if (!this.products) {
      this.http.get('../../../assets/products.json')
      .subscribe(data => {
        this.products = data;
        this.state.set(PRODUCTS_KEY, data as any);
      }, err => console.log(err));
    }
  }

  scrollTo(hash) {
    document.querySelector('#'+hash).scrollIntoView({ 
      behavior: 'smooth' 
    });
    this.analytics.event("Jump_To_Products", "click", hash);
  }

  openModal(id) {
    this.http.get('../../../assets/designs.json')
    .subscribe((data:any) => {
      this.selectedProduct = data.find(x => x.id === id);
    }, err => console.log(err));
    this.analytics.event("View_design_modal", "click", id);
  }

  playVideo() {
    this.video = this.video ? false : true;

    if (this.video) {
      this.renderer.addClass(document.body, 'modal-open');
    }
    this.analytics.event("View_app_video", "click", 'app_video');
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

  visitSite(id) {
    this.analytics.event("View_product_site", "click", id);
  }

  viewD3() {
    this.analytics.event("View_d3", "click", 'view-d3');
  }

  download() {
    this.analytics.event("Download_CV", "click", 'download-cv');
  }

}
