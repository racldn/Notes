(function hasNotesArray() {
    let notepad = new Notepad();
    console.log(notepad.notes);
    check('Notepad initialized with empty notes array', () => {
        assert.isEmpty(notepad.notes);
    })
})();