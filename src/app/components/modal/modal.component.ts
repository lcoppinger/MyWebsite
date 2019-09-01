import { Component, Input, Renderer2 } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() product;
  show: boolean = false;
  activeIndex: number = 0;

  constructor(
    private renderer: Renderer2,
    private analytics: AnalyticsService
  ) {}

  ngOnChanges() {
    this.show = this.product === null ? false : true;
    const root = document.getElementsByTagName( 'html' )[0];
    if (this.show) {
      this.activeIndex = 0;
      this.renderer.addClass(document.body, 'modal-open');
      this.renderer.addClass(root, 'modal-open');
    }
  }

  moveSlides(n) {
    const length = this.product.images.length - 1;
    if (this.activeIndex === 0 && n === -1) {
      this.activeIndex = length;
    } else if (this.activeIndex === length && n === 1) {
      this.activeIndex = 0;
    } else {
      this.activeIndex = this.activeIndex + n;
    }
    this.analytics.event("Modal_slides", "click", 'slide');
  }

  closeModal() {
    const root = document.getElementsByTagName( 'html' )[0];
    this.product = null;
    this.show = false;
    this.renderer.removeClass(document.body, 'modal-open');
    this.renderer.removeClass(root, 'modal-open');
  }

  checkClose(event) {
    const modal = document.getElementById('designModal');
    if (event.target == modal) {
      this.closeModal();
    }
  }

}
