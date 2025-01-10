import { Component, signal, Input, SimpleChanges, } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);
  @Input({required:true}) cart: Product[] = [];
  total = signal(0);

  //Este metodo hace que el menu lateral se esconda o aparezca
  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
    }

    //Este metodo se va a ejecutar cada vez que haya un cambio en el input en este caso el cart
    ngOnChanges(changes: SimpleChanges) {
      const cart = changes['cart'];
      if (cart) {
        this.total.set(this.calcTotal());
      }
    }

    //Metodo para sumar el total de los precios
    calcTotal() {
      return this.cart.reduce((total, product)=> total + product.price, 0);
    }
}
