import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { CreateContractDetailComponent } from './contract-detail/create-contract-detail/create-contract-detail.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { CreateServiceComponent } from './service/create-service/create-service.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { ListContractDetailComponent } from './contract-detail/list-contract-detail/list-contract-detail.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CreateCustomerComponent,
    CreateEmployeeComponent,
    CreateContractComponent,
    CreateContractDetailComponent,
    ListCustomerComponent,
    ListEmployeeComponent,
    CreateServiceComponent,
    ListServiceComponent,
    ListContractDetailComponent,
    ListContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
