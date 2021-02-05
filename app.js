console.log('welcome');
showNotes();
//If user add a note , add it a localstorage//

let addnotes = document.getElementById('addnotes');
addnotes.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
}
)
//function to show notes from local storage//
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
       <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
       <div class="card-body">
           <h5 class="card-title">Notes ${index + 1}</h5>
           <p class="card-text"> ${element}</p>
           <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
       </div>
   </div>`;
    }
    );
    let notesEln = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesEln.innerHTML = html;
    }
    else{
        notesEln.innerHTML = `Nothing to show`
    }
}

//function to delete notes//

function deleteNote(index){
    console.log("deleted",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    // for updating Localstorage

    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById('searchText');
search.addEventListener("input", function(){
    let inputVal = search.value.toLowerCase();
    console.log("input entered", inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if(cardText.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    }) 
})