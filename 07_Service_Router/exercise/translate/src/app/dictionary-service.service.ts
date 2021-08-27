import {Injectable} from '@angular/core';
import {Word} from './word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  arrayWord: Word[] = [
    {id: 1 , word: 'hello', mean: 'xin chao'},
    {id: 2 , word: 'cat', mean: 'con meo'},
    {id: 3 , word: 'dog', mean: 'con cho'},
    {id: 4 , word: 'fish', mean: 'con ca'},
    {id: 5 , word: 'buffalo', mean: 'con trau'}
  ];

  constructor() {
  }
  findAll(){
    return this.arrayWord;
  }
  findById(id: number) : Word {
    return this.arrayWord.find(item=> item.id===id)
  }
  delete(id: number): number {
  const index =this.arrayWord.findIndex(e => e.id===id);
    this.arrayWord.splice(index,1);
    return index;
  }
  update(word: Word): void{
   const index = this.delete(word.id);
   this.arrayWord.splice(index,0,word)
  }
}
