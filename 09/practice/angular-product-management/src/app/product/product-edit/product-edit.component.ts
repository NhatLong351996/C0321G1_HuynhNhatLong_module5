import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
formEdit: FormGroup;
id: number;
listCategory: Category[]= [];
  constructor(private productService: ProductService,
              private categoryService:CategoryService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.id =  Number(activatedRoute.snapshot.params.id);
    productService.findById(this.id).subscribe(value => {
      console.log(value)
      this.getListCategory();
      this.formEdit.patchValue(value);
    })
  }

  ngOnInit(): void {
    this.formEdit = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormGroup({
        name : new FormControl()
      })
    })
  }
  update(){
    this.productService.updateProduct(this.id,this.formEdit.value).subscribe(value => {
      console.log(value);
      alert(value.name+" update success");
      this.route.navigateByUrl('/product/list');
    })
  }
  getListCategory(){
    this.categoryService.getAll().subscribe(value => {
      this.listCategory = value;
    })
  }

}
