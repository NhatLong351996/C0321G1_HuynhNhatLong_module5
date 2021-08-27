import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from '../dictionary-service.service';
import {ActivatedRoute} from '@angular/router';
import {Word} from '../word';

@Component({
  selector: 'app-dictionay-detail',
  templateUrl: './dictionay-detail.component.html',
  styleUrls: ['./dictionay-detail.component.css']
})
export class DictionayDetailComponent implements OnInit {
  word: Word;

  constructor(private service: DictionaryServiceService,
              private act: ActivatedRoute) {
    const idWord = Number(this.act.snapshot.params.id);
    this.word = this.service.findById(idWord);
  }

  ngOnInit(): void {
  }

}
