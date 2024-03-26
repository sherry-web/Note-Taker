"use strict";
const notetxt = document.getElementById("note");
const addNoteButton = document.getElementById("btn");
const noteDiv = document.querySelector(".notes-div");
let noteNum = 0;

function createNote() {
  const notedata = notetxt.value;
  noteNum += 1;
  noteDiv.insertAdjacentHTML(
    "beforeend",
    " <div class= 'note-container'>     <h2 >Note <span class=notecount> </span></h2> <div class='note-div'> <p class='my-note'> </p> </div> <div class = 'btn-div' > <button class = 'view-note'> View Detail </button></div> </div> "
  );
  const notePara = document.querySelectorAll(".my-note");
  const notecount = document.querySelectorAll(".notecount");
  notePara.forEach((note) => {
    if (note.textContent == false) {
      note.insertAdjacentText("beforeend", notedata);
    }
  });
  notecount.forEach((count) => {
    if (count.textContent == false) {
      count.insertAdjacentText("beforeend", noteNum);
    }
  });
}

addNoteButton.addEventListener("click", () => {
  if (notetxt.value == false) {
    alert("Please insert the note");
  } else {
    createNote();
  }
});
noteDiv.addEventListener("click", (e) => {
  if (e.target.className === "view-note") {
    document.body.style.backgroundColor = "#DFD3C3";
    e.composedPath().forEach((ele) => {
      if (ele.className !== "note-container") {
      } else {
        ele.classList.add("check-note");
        ele.insertAdjacentHTML(
          "beforeend",
          "<button class='close-note'>X</button>"
        );
      }
    });
  }
  e.composedPath().forEach((el) => {
    if (el.className !== "notes-div") {
    } else {
      const hideothernote = el.querySelectorAll(".note-container");
      hideothernote.forEach((notecont) => {
        // console.log(notecont.classList.length === 1);
        if (notecont.classList.length === 1) {
          notecont.style.display = "none";
        }
      });
    }
  });
});

noteDiv.addEventListener("click", (e) => {
  if (e.target.className === "close-note") {
    const showotherNote = document.querySelectorAll(".note-container");
    showotherNote.forEach((notecont) => {
      if (notecont.style.display === "none") {
        notecont.style.display = "initial";
      }
    });
    document.body.style.backgroundColor = "";
    e.composedPath().forEach((sec) => {
      if (sec.className !== "note-container check-note") {
      } else {
        sec.classList.remove("check-note");
      }
    });
  }
});

//   if (e.target.className === "check-note") {
//     e.composedPath().forEach((eler) => {
//       console.log(eler);
//     });
//   }
// });
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");