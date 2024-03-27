// JavaScript Code

// Function to save a new note
function saveNote() {
    var noteInput = document.getElementById("note-input").value;
    if (noteInput.trim() !== "") {
        var savedNotes = document.getElementById("saved-notes");
        var noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        noteDiv.innerHTML = "<p>" + noteInput + "</p><button class='edit-note'>Edit</button><button class='delete-note'>Delete</button>";
        savedNotes.appendChild(noteDiv);
        document.getElementById("note-input").value = ""; // Clear the input field after saving note
    } else {
        alert("Please enter a note!");
    }
}

// Function to delete a note
function deleteNote() {
    this.parentNode.remove();
}

// Function to edit a note
function editNote() {
    var newNote = prompt("Edit your note:", this.parentNode.firstChild.textContent);
    if (newNote !== null) {
        this.parentNode.firstChild.textContent = newNote;
    }
}

// Add event listeners
document.getElementById("save-note").addEventListener("click", saveNote);
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-note")) {
        deleteNote.call(event.target);
    }
    if (event.target.classList.contains("edit-note")) {
        editNote.call(event.target);
    }
});
