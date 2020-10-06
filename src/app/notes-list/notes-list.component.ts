import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Note } from '../types/note';
import { NotesService } from '../shared/notes.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit, OnDestroy {

  @Input() noteName: string;
  @Output() noteClicked = new EventEmitter<Note>();

  allNotes: Note[] = [];
  searchTerm: string;

  searchsSubs: Subscription;

  constructor(private notesService: NotesService, private store: Store<{notes: {notes: Note[]}}>) { }

  ngOnInit() {
    this.searchTerm = '';
    // Select current state of notes from Ngrx Store
    this.store.select('notes').subscribe((notes) => {
      this.allNotes = notes.notes;
      // Set notes in LocalStorage
      localStorage.setItem('Notes',  JSON.stringify(notes.notes));
    });
    // Notes Deep Search initiated handler
    this.searchsSubs = this.notesService.getSearchInitiatedListener().subscribe((res) => {
      this.searchTerm = res;
    });
  }

  /**
   * Handle click on a Note
   * @param note
   */
  updateNote(note: Note) {
    this.noteClicked.emit(note);
  }

  /**
   * To Destroy subscriptions
   */
  ngOnDestroy() {
    this.searchsSubs.unsubscribe();
  }

}
