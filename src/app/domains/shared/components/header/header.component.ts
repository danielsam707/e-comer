import { Component, signal, Input, SimpleChanges, inject, } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common'; 
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);

  // Este input y el signal tota fueron remplazados por un servicio
  // @Input({required:true}) cart: Product[] = [];
  //total = signal(0);

  
  
  //Aqui estamos injectando el servicio
  private cartService = inject(CartService);

  // cart y total son signals o señales
  cart = this.cartService.cart;
  total = this.cartService.total;

  
    //Este metodo hace que el menu lateral se esconda o aparezca
  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
    }





    // TODO ESTO FUE SUSTIUIDO POR UN SERVICIO

    // //Este metodo se va a ejecutar cada vez que haya un cambio en el input en este caso el cart
    // ngOnChanges(changes: SimpleChanges) {
    //   const cart = changes['cart'];
    //   if (cart) {
    //     this.total.set(this.calcTotal());
    //   }
    // }

    // //Metodo para sumar el total de los precios
    // calcTotal() {
    //   return this.cart.reduce((total, product)=> total + product.price, 0);
    // }
}
