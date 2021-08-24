import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  birthDay = new Date(1996, 5, 3);
  toggle = true;
  get format(){
    return this.toggle ? 'dd/MM/yyyy' : 'fullDate';
  }
  toggleFormat(){
    this.toggle = !this.toggle;
  }
}
