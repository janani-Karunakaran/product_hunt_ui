import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { product } from '../product/product.model';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit,OnChanges {
  ListOfProduct:product[];
  displayedColumns: string[] = ['name', 'description', 'quantity', 'price'];


  constructor(private service:HomeService) { }

  ngOnInit(): void {
  console.log(this.ListOfProduct);
  this.service.getProductList().subscribe(
    (data)=> this.ListOfProduct=data, (error)=> {console.log("Error in getProductList HTT[ call")}
   );
  }

  ngOnChanges():void{
    console.log(this.ListOfProduct);
  }

}
