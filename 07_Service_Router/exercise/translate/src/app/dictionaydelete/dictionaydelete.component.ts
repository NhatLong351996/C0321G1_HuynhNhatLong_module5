import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DictionaryServiceService} from '../dictionary-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionaydelete',
  templateUrl: './dictionaydelete.component.html',
  styleUrls: ['./dictionaydelete.component.css']
})
export class DictionaydeleteComponent implements OnInit {
  formDelete: FormGroup;

  constructor(private service: DictionaryServiceService,
              private act: ActivatedRoute) {
    this.formDelete = new FormGroup({
      id: new FormControl(),
      word: new FormControl(),
      mean: new FormControl()
    })
    const id = Number(act.snapshot.params.id)
    const word = this.service.findById(id)
    this.formDelete.setValue(word)
  }

  ngOnInit(): void {
  }
  delete(){
    this.service.delete(this.formDelete.value.id)
  }

}
