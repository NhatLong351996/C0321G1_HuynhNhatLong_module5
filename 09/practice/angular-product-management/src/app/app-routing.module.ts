import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';


const routes: Routes = [
  {path:'category/create',component: CategoryCreateComponent},
  {path:'category/edit/:id',component: CategoryEditComponent},
  {path:'category/delete/:id',component: CategoryDeleteComponent},
  {path:'category/list',component: CategoryListComponent},
  {path:'product/edit/:id',component: ProductEditComponent},
  {path:'product/delete/:id',component: ProductDeleteComponent},
  {path:'product/list',component: ProductListComponent},
  {path:'product/create',component: ProductCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
