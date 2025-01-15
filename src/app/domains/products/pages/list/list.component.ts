import { Component, inject, signal } from '@angular/core';

import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model'
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Aqui tambien se pudo haber inicializado el array como en el constructor
  // ESTO FUE REMPLAZADO POR EL USO DE UN SERVICIO
  // cart = signal<Product[]>([]);


  
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  //Se injecta el servicio del carrito
  private cartService = inject(CartService);
  // Se borro una lista de productos


  //Injectamos el servicio
  private productService = inject(ProductService);

  //Se injecta el servicio de categorias
  private categoryService = inject(CategoryService);

  //Aqui se hace el fetch de los productos y las categorias.
  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }




  // Este es el evento que se recibe desde el componente hijo 
  // en este caso un click en el boton de addToCart para agregar productos al carro
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }


  //Metodo para obtener producto
  private getProducts(){
    this.productService.getProducts().subscribe({
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
