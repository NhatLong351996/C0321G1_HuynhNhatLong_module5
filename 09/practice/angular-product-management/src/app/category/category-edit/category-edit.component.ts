import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categoryForm: FormGroup;
  category: Category;
  id: number;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.categoryService.findById(this.id).subscribe(value => {
      this.category = value;
      this.categoryForm.patchValue(this.category);
    });


  }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      name: new FormControl()
    });
  }


  updateCategory() {
    console.log(this.categoryForm.value);
    this.categoryService.updateCategory(this.id, this.categoryForm.value).subscribe(value => {
      alert(value.name + ' update success');
      this.route.navigateByUrl('/category/list');
    });
  }
}
