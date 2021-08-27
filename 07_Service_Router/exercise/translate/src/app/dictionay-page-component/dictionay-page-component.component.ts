import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from '../dictionary-service.service';
import {Word} from '../word';

@Component({
  selector: 'app-dictionay-page-component',
  templateUrl: './dictionay-page-component.component.html',
  styleUrls: ['./dictionay-page-component.component.css']
})
export class DictionayPageComponentComponent implements OnInit {
arrarWord: Word[];
  constructor(private service: DictionaryServiceService) { }

  ngOnInit(): void {
    this.getList();
  }
getList(){
    this.arrarWord = this.service.findAll()
}
}
