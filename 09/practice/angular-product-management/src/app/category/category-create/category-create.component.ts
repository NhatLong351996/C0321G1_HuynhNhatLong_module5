import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
formCreateCategory: FormGroup
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  this.formCreateCategory = new FormGroup({
    name: new FormControl('')
  })
  }
submit(){
  this.categoryService.saveCategory(this.formCreateCategory.value).subscribe(value => {
    alert(value.name+"Update success")
  })
}
}
