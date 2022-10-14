
const newNotes = function () {
  let Notes = [];

  var dictNotes = {
    1: "A",
    2: "AS",
    3: "B",
    4: "C",
    5: "CS",
    6: "D",
    7: "DS",
    8: "E",
    9: "F",
    10: "FS",
    11: "G",
    12: "GS"
  };

  for (i = 0; i < 10; i++) {
    Notes[i] = dictNotes[Math.trunc(Math.random() * 11) + 1];
  }
  return Notes
}

const clearNote = function () {
  var elems = document.querySelectorAll(".teal");
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.remove('teal')
  }
  document.querySelector('.go').classList.add('disabled')
}

document.querySelector('.ready').addEventListener
  ('click', function () {
    let mylist = newNotes()
    document.querySelector('.NotesList').textContent = mylist.toString()

    for (i = 0; i < mylist.length; i++) {

      const allNotes = document.querySelectorAll(`.${mylist[i]}`)

      for (let j = 0; j < allNotes.length; j++) {
        allNotes[j].classList.add('teal')
      }
    }

    document.querySelector('.go').classList.remove('disabled')
    document.querySelector('.ready').classList.add('disabled')
  }
  );

document.querySelector('.go').addEventListener
  ('click', function () {
    clearNote();
    document.querySelector('.go').classList.add('disabled')
    document.querySelector('.ready').classList.remove('disabled')
    document.querySelector('.NotesList').textContent = '[Your List Will Be Displayed Here]'
  });