import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionayPageComponentComponent} from './dictionay-page-component/dictionay-page-component.component';
import {DictionayDetailComponent} from './dictionay-detail/dictionay-detail.component';
import {DictionayEditComponent} from './dictionay-edit/dictionay-edit.component';
import {DictionaydeleteComponent} from './dictionaydelete/dictionaydelete.component';


const routes: Routes = [
  {path:'list-word',component: DictionayPageComponentComponent },
  {path:'detail-word/:id',component: DictionayDetailComponent },
  {path:'update-word/:id',component: DictionayEditComponent },
  {path:'delete-word/:id',component: DictionaydeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
