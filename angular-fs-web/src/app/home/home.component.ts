import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { product } from '../product/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
     
  }

  displayAllProducts(){
    this.route.navigate(['/listOfProducts']);
  }

  addProducts(){
    this.route.navigate(['/addProducts']);
  }

  displaySpecificProducts(){
    this.route.navigate(['/editProducts']);

  }

  deleteProducts(){
    this.route.navigate(['/deleteProducts']);

  }

  editProducts(){
    this.route.navigate(['/editProducts']);

  }
}
