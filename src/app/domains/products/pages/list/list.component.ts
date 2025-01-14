import { Component, inject, signal } from '@angular/core';

import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model'
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Aqui tambien se pudo haber inicializado el array como en el constructor
  // ESTO FUE REMPLAZADO POR EL USO DE UN SERVICIO
  // cart = signal<Product[]>([]);


  
  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  // Se borro una lista de productos


  //Injectamos el servicio
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {

      }
    })
  }




  // Este es el evento que se recibe desde el componente hijo 
  // en este caso un click en el boton de addToCart para agregar productos al carro
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
