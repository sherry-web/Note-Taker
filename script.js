document.addEventListener('DOMContentLoaded', function () {
    const noteInput = document.getElementById('note-input');
    const saveNoteBtn = document.getElementById('save-note');
    const savedNotesContainer = document.getElementById('saved-notes');

    // Event listener for saving note on Enter key press
    noteInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            saveNote();
        }
    });

    // Event listener for saving note on button click
    saveNoteBtn.addEventListener('click', saveNote);

    // Function to save a note
    function saveNote() {
        const noteContent = noteInput.value;
        if (noteContent.trim() !== '') {
            const note = createNoteElement(noteContent);
            savedNotesContainer.appendChild(note);
            noteInput.value = ''; // Clear the note input after saving
        } else {
            alert('Please enter a note before saving.');
        }
    }

    // Function to create a new note element
    function createNoteElement(content) {
        const note = document.createElement('div');
        note.classList.add('note');
        
        const noteText = document.createElement('p');
        noteText.textContent = content;
        note.appendChild(noteText);
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-note');
        editButton.addEventListener('click', function () {
            // Enable editing of the note
            const newText = prompt('Enter the updated note:', content);
            if (newText !== null) {
                noteText.textContent = newText;
            }
        });
        note.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-note');
        deleteButton.addEventListener('click', function () {
            // Delete the note
            note.remove();
        });
        note.appendChild(deleteButton);
        
        return note;
    }
});
