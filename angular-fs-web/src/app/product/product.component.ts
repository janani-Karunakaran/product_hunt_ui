import { Component, Input, OnInit } from '@angular/core';
import { product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() item:product;

  constructor() { }

  ngOnInit(): void {
  }

}
