const addNoteButton = document.getElementById("btn");
const speechToTextButton = document.getElementById("speech-to-text");
const noteDiv = document.querySelector(".notes-div");
let noteNum = 0;

// Function to create a new note
function createNote() {
  const notetxt = document.getElementById("note");
  const notedata = notetxt.value;
  noteNum += 1;
  noteDiv.insertAdjacentHTML(
    "beforeend",
    `<div class="note-container">
      <h2>Note <span class="notecount">${noteNum}</span></h2>
      <div class="note-div">
        <p class="my-note">${notedata}</p>
      </div>
      <div class="btn-div">
        <button class="view-note">View Detail</button>
        <button class="edit-note">Edit</button>
        <button class="delete-note"><img src="delete-icon.png" alt="Delete" width="24"></button>
      </div>
    </div>`
  );
  // Clear the input field after adding the note
  notetxt.value = "";
}

// Event listener for the "Add Note" button
addNoteButton.addEventListener("click", () => {
  createNote();
});

// Event listener for the "Enter" key press in the note input field
document.getElementById("note").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createNote();
  }
});

// Event listener for the "Speech to Text" button
speechToTextButton.addEventListener("click", () => {
  const recognition = new webkitSpeechRecognition() || SpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    document.getElementById("note").value += speechResult;
  };

  recognition.onend = () => {
    console.log("Speech recognition ended.");
  };
});

// Event delegation for dynamic buttons (Edit and Delete)
noteDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-note")) {
    const noteContainer = e.target.closest(".note-container");
    const noteText = noteContainer.querySelector(".my-note").textContent;
    document.getElementById("note").value = noteText;
    noteContainer.remove(); // Remove the current note container after editing
  } else if (e.target.classList.contains("delete-note")) {
    const noteContainer = e.target.closest(".note-container");
    noteContainer.remove(); // Remove the note container when delete is clicked
  }
});