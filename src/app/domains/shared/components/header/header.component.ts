import { Component, signal, Input, } from '@angular/core';
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
  
  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

}
