import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList: Product[] = [];
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe(value => {
      this.productList=value
    })
  }

  ngOnInit(): void {

  }

}
