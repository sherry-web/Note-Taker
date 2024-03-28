document.addEventListener('DOMContentLoaded', function () {
    // Get reference to elements
    const noteInput = document.getElementById('note-input');
    const saveNoteBtn = document.getElementById('save-note');
    const notesContainer = document.getElementById('notes-container');

    // Function to create a new note
    function createNote() {
        // Get the note text from the input field
        const noteText = noteInput.value;

        // Check if the input field is not empty
        if (noteText.trim() !== '') {
            // Create a new note element
            const note = document.createElement('div');
            note.classList.add('note');

            // Create paragraph element for the note text
            const noteContent = document.createElement('p');
            noteContent.textContent = noteText;

            // Create edit and delete buttons for the note
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.classList.add('edit-note');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-note');

            // Append note content and buttons to the note element
            note.appendChild(noteContent);
            note.appendChild(editBtn);
            note.appendChild(deleteBtn);

            // Append the note element to the notes container
            notesContainer.appendChild(note);

            // Clear the input field after adding the note
            noteInput.value = '';
        } else {
            alert('Please enter a note before saving.');
        }
    }

    // Event listener for the save note button
    saveNoteBtn.addEventListener('click', createNote);

    // Event listener for the enter key to save the note
    noteInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            createNote();
        }
    });

    // Event delegation for edit and delete note buttons
    notesContainer.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('edit-note')) {
            // Handle edit note functionality
            const editedText = prompt('Enter the updated note:', target.parentElement.querySelector('p').textContent);
            if (editedText !== null) {
                target.parentElement.querySelector('p').textContent = editedText;
            }
        } else if (target.classList.contains('delete-note')) {
            // Handle delete note functionality
            target.parentElement.remove();
        }
    });
});
