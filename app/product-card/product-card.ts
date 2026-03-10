import { Component, Input, Output,EventEmitter } from '@angular/core';
import { ProductList } from '../product-list/product-list';




@Component({
  selector: 'app-product-card',
  standalone:true,
  imports: [ProductList],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
    
}
