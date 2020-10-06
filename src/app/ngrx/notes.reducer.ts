import * as NoteActions from './notes.actions';

const initialState = {
    notes: [
        { id: 121, title: 'Game Night', content: 'John\'s Place', timestamp: new Date() },
        { id: 131, title: 'Feed the Dog', content: 'Pick up Dog Food on the way back', timestamp: new Date()},
        { id: 141, title: 'Pick up package', content: 'Call the delivery agent', timestamp: new Date()},
        { id: 151, title: 'Take it easy', content: 'Enjoy your life', timestamp: new Date() },
    ]
};

export function NotesReducer(state = initialState, action: NoteActions.NotesActions) {
    switch (action.type) {
        case NoteActions.ADD_NOTE:

            localStorage.setItem('Notes', JSON.stringify([action.payload, ...state.notes]));
            return {
                ...state,
                notes: [...state.notes, action.payload]
            };
        case NoteActions.UPDATE_NOTE:

            const index = state.notes.findIndex(note => note.id === action.payload.id);
            const note = state.notes[index];
            const updateNote = {
                ...note,
                ...action.payload
            };
            const updateNotes = [...state.notes];
            updateNotes[index] = updateNote;
            localStorage.setItem('Notes', JSON.stringify(updateNotes));
            return {
                ...state,
                notes: updateNotes
            };
        case NoteActions.DELETE_NOTE:

            const filteredNotes = state.notes.filter(note => {
                return note.id !== action.id;
            });
            localStorage.setItem('Notes', JSON.stringify(filteredNotes));
            return {
                ...state,
                notes: filteredNotes
            };
        default:
            return state;
    }
}
