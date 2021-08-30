import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
formCreat: FormGroup
  listCategory: Category[] = [];
  constructor(private productService:ProductService,
              private categoryService:CategoryService) {
    this.getListCategory();
  }

  ngOnInit(): void {
  this.formCreat = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormGroup({
      name: new FormControl()
    })
  })
  }
  create(){
  this.productService.saveProduct(this.formCreat.value).subscribe(value => {
    console.log(value);
    alert(value.name+ " create success")
  })
  }
  getListCategory(){
    this.categoryService.getAll().subscribe(value => {
      this.listCategory = value
    })
  }

}
