(function hasNotesArray() {
    let notepad = new Notepad();
    check('Notepad initialized with empty notes array', () => {
        assert.isEmpty(notepad.notes);
    })
})();

(function addNote() {
    let notepad = new Notepad();
    let note = new Note('hello world');
    notepad.addNote(note);
    check('adding note pushes to the array', () => {
        assert.include(notepad.notes, note);
    })
})();