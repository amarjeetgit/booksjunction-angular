import { Component, Input, OnInit } from '@angular/core';
import { Books } from '../Books';
import { Book } from '../Book';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }
  @Input('item') item: Book;
  ngOnInit() {
  }

}
