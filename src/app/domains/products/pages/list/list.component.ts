import { Component, inject, signal } from '@angular/core';

import { ProductComponent } from './../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from './../../../shared/models/product.model'
import { HeaderComponent } from './../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

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


  private cartService = inject(CartService);
  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=2',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=3',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=2',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=3',
        creationAt: new Date().toISOString()
      },
    ];
    //Asigno el array al signal products
    this.products.set(initProducts);
  }

  // Este es el evento que se recibe desde el componente hijo 
  // en este caso un click en el boton de addToCart para agregar productos al carro
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
