import { Component } from '@angular/core';

import { ProductComponent } from './../../components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  fromChild(event: Event) {
    console.log('estamos en el padre');
    console.log(event);
  }
}
