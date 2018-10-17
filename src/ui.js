let notepad = new Notepad();
const saveButton = document.querySelector('#savebtn');
const noteConent = document.querySelector('#notebox').value;

const appendNote = () => {
    let notesContainer = document.querySelector('#notes_container');
    let lastEntry = notepad.notes.length - 1;
    let div = document.createElement('div')
    div.setAttribute('id', `${lastEntry}`);
    div.setAttribute('class', 'note');
    div.textContent = notepad.notes[lastEntry];
    notesContainer.appendChild(div);
};

saveButton.addEventListener('click', () => {
    notepad.addNote(noteConent);
    appendNote();
})


