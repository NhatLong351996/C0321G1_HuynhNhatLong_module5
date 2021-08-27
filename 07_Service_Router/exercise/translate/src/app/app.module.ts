import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionayPageComponentComponent } from './dictionay-page-component/dictionay-page-component.component';
import { DictionayDetailComponent } from './dictionay-detail/dictionay-detail.component';
import { DictionayEditComponent } from './dictionay-edit/dictionay-edit.component';
import { DictionaydeleteComponent } from './dictionaydelete/dictionaydelete.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DictionayPageComponentComponent,
    DictionayDetailComponent,
    DictionayEditComponent,
    DictionaydeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
