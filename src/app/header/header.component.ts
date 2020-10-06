import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../shared/notes.service';
import { Store } from '@ngrx/store';
import * as NotesActions from '../ngrx/notes.actions';
import { Note } from '../types/note';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() searchInitiated = new EventEmitter<string>();
  @Output() menuToggled = new EventEmitter<boolean>();
  toggle = false;
  searchTerm: string;

  constructor(private notesService: NotesService, private store: Store<{ notes: { notes: Note[] } }>) { }

  ngOnInit() {
  }

  /**
   * Add a new Note handler
   */
  onAdd() {
    const id = Math.floor((Math.random() * 1000) + 1);
    const defaultNote = {
      id: id,
      title: 'New Note',
      content: 'New Content',
      timestamp: new Date()
    };
    // Dispatch Add note Action
    this.store.dispatch(new NotesActions.AddNote(defaultNote));
  }

  /**
   * Initiate Deep Search on notes
   * @param e
   */
  onSearch(e) {
    this.notesService.triggerSearchInitiated(e);
  }

  /**
   * Handle menu toggle and alert appComponent
   */
  onToggle() {
    this.toggle = !this.toggle;
    this.menuToggled.emit(this.toggle);
  }

}
