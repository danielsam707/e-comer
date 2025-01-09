import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
//   img = 'https://picsum.photos/640/640?r='+ Math.random();
//
  @Input({required: true}) img: string = '';
  @Input({required: true}) price: number = 0;
  @Input({required: true}) title: string = '';

  @Output() addToCart = new EventEmitter();
  
  //Creo un evento
  addToCartHandler(){
    console.log('click from child');
    this.addToCart.emit('Hola, este es un mensaje desde el hijo')
  }
}
