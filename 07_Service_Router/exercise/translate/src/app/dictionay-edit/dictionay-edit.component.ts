import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from '../dictionary-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Word} from '../word';

@Component({
  selector: 'app-dictionay-edit',
  templateUrl: './dictionay-edit.component.html',
  styleUrls: ['./dictionay-edit.component.css']
})
export class DictionayEditComponent implements OnInit {
  formEdit: FormGroup;

  constructor(private service: DictionaryServiceService,
              private act: ActivatedRoute) {
    this.formEdit = new FormGroup({
      id: new FormControl(),
      word: new FormControl(),
      mean: new FormControl()
    });
   const id = Number(act.snapshot.params.id);
   const word = this.service.findById(id);
   this.formEdit.setValue(word)
  }

  ngOnInit(): void {
  }
  update(): void{
    this.service.update(this.formEdit.value);
  }

}
