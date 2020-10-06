import { Injectable } from '@angular/core';
import { Note } from '../types/note';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor() {}

  private searchInitiated = new Subject<string>();

  triggerSearchInitiated(searchStr: string) {
    this.searchInitiated.next(searchStr);
  }

  getSearchInitiatedListener() {
    return this.searchInitiated;
  }

}
