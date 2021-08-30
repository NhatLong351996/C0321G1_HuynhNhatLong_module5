import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
formDelete: FormGroup;
id: number;
product: Product;
  constructor(private productService: ProductService,
              private activatedRoute:ActivatedRoute,
              private route:Router) {
    this.id = Number(activatedRoute.snapshot.params.id);
    productService.findById(this.id).subscribe(value => {
      this.formDelete.patchValue(value);
      this.product = value;
    })
  }

  ngOnInit(): void {
    this.formDelete = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    })
  }
  delete(){
    this.productService.deleteProduct(this.id).subscribe(value => {
      alert(this.product.name+" delete success!")
      this.route.navigateByUrl('/product/list')
    })
  }

}
