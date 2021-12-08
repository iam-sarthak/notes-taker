
yournotes();
let addbtn = document.getElementById("actionbtn");
addbtn.addEventListener("click", function (e) {
    let addnote = document.getElementById("addtext");
    let addtitle = document.getElementById("addtitle");

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    myobj = {
        title: addtitle.value,
        note: addnote.value
    }
    if (addnote.value == "") {
        alert("please write note")
        return 0;
    } else {
    } notesobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addnote.value = "";
    addtitle.value = "";
    // console.log(notesobj);

    yournotes()
})

function yournotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html +=
            `<div class="notecard card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.note}</p>
            <button Id="${index}" onclick="deletenote(${index})" class="btn btn-primary">Achived</button>
        </div>
    </div>`

    });
    let notesel = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesel.innerHTML = html;
    } else {
        notesel.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

function deletenote(index) {
    console.log("i am deleting");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    yournotes();
}

let search = document.getElementById('searchtext');
search.addEventListener("input", function () {
    let inputval = search.value.toLowerCase();
    let notecard = document.getElementsByClassName("notecard");
    Array.from(notecard).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        let cardtitle = element.getElementsByTagName("h5")[0].innerText;
        if (cardtitle.includes(inputval)) {
            element.style.display = "block"
        } else if (cardtxt.includes(inputval)) {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    });
})
let addanotebtn = document.getElementById("addanotebtn");
addanotebtn.addEventListener("click", function () {
    let addanote = document.getElementById("addanote");
    console.log(addanote.style.display);

    if (addanote.style.display.includes("block")) {
        addanote.style.display = "none";
        console.log("first one");
    } else {
        addanote.style.display = "block";
        console.log("second one");
    };
})
