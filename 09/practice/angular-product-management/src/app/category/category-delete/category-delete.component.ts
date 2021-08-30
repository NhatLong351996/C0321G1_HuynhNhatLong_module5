import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
formDeleteCategory: FormGroup;
id: number;
category:Category;
  constructor(private categoryService:CategoryService,
              private activatedRoute:ActivatedRoute,
              private route:Router) {
   this.id =Number(this.activatedRoute.snapshot.params.id);
    this.categoryService.findById(this.id).subscribe(value => {
     this.formDeleteCategory.patchValue(value)
      this.category = value;
   })
  }

  ngOnInit(): void {
    this.formDeleteCategory = new FormGroup({
      name: new FormControl()
    })
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.id).subscribe(value => {
      console.log(value);
      alert(this.category.name+" deleted!");
    })
  }
}
