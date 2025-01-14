import { Component, inject, Input, signal } from '@angular/core';
import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  cover = signal('');

  @Input() id?: string;
  private productService = inject(ProductService);
  product = signal<Product | null>(null);
  ngOnInit() {
    if(this.id) {
      this.productService.getOne(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if(product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        }
      })
    }
  }

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }
}
