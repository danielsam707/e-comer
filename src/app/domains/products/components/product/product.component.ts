import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // De esta forma era si se enviaba atributo por atributo
  // @Input({required: true}) img: string = '';
  // @Input({required: true}) price: number = 0;
  // @Input({required: true}) title: string = '';

  @Input({required: true}) product!: Product ;

  @Output() addToCart = new EventEmitter();
  
  //Creo un evento
  addToCartHandler(){
    console.log('click from child');
    // ESTA LIENA ERA CUANDO SE TENIAN LOS ATRIBUTOS
    // this.addToCart.emit('Hola, este es un mensaje desde el hijo' + this.title);
    this.addToCart.emit(this.product);
  }
}
