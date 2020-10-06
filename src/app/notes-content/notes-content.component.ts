import { Component, OnInit, Output, EventEmitter, Input, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../types/note';
import { Store } from '@ngrx/store';
import * as NotesActions from '../ngrx/notes.actions';

@Component({
  selector: 'app-notes-content',
  templateUrl: './notes-content.component.html',
  styleUrls: ['./notes-content.component.css']
})
export class NotesContentComponent implements OnInit {

  @Input() _clickedNote: Note;
  @Output() modelChanged = new EventEmitter<string>();
  @ViewChild('notesForm', { static: true }) notesForm;

  noteSelected = false;

  constructor(private store: Store<{ notes: { notes: Note[] } }>) { }

  /**
   * Set clickedNote value
   */
  @Input() set clickedNote(note: Note) {
    this._clickedNote = note;
    if (this._clickedNote) {
      this.noteSelected = true;
    }
  }

  ngOnInit() {
    this._clickedNote = {
      id: null,
      title: '',
      content: '',
      timestamp: null
    };
  }

  /**
   * OnSave handler
   * @param form
   */
  onSave(form: NgForm) {
    const note = {
      id: this._clickedNote.id,
      title: this._clickedNote.title,
      content: this._clickedNote.content,
      timestamp: new Date()
    };

    // Dispatch Update Note Action
    this.store.dispatch(new NotesActions.UpdateNote(note));
    this.noteSelected = false;
    this.notesForm.resetForm();
  }

  /**
   * Delete a note handler
   */
  onDelete() {
    // Dispatch Delete Note Action
    this.store.dispatch(new NotesActions.DeleteNote(this._clickedNote.id));
    this.notesForm.resetForm();
  }

  /**
   * Start editing handler
   * @param val
   */
  updateName(val) {
    this.modelChanged.emit(val);
  }

}
