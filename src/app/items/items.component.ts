import { Component , Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CardComponent,CartComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  @Input() category:String = "";
  @Input() title:String = "";
  @Input() price:String = "";
}
