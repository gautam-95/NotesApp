import { Action } from '@ngrx/store';
import { Note } from '../types/note';

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export class AddNote implements Action {
    readonly type = ADD_NOTE;

    constructor(public payload: Note) {}
}

export class UpdateNote implements Action {
    readonly type = UPDATE_NOTE;

    constructor(public payload: Note) {}
}

export class DeleteNote implements Action {
    readonly type = DELETE_NOTE;

    constructor(public id: number) {}
}

export type NotesActions = AddNote | UpdateNote | DeleteNote;
