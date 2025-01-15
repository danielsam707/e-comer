import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';

import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model'
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  @Input() category_id?: string;


  //Aqui se hace el fetch de los productos y las categorias.
  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
  this.getProducts();
  }



  // Este es el evento que se recibe desde el componente hijo 
  // en este caso un click en el boton de addToCart para agregar productos al carro
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }


  //Metodo para obtener producto
  private getProducts(){
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => { 

      }
    })
  }

  //Metodo para obtener producto
  private getCategories(){
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: () => { 

      }
    })
  }
}
