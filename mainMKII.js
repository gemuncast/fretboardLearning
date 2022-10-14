
const clearNote = function () {
  var elems = document.querySelectorAll(".teal");
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.remove('teal')
  }
  document.querySelector('.go').classList.add('disabled')
}

const Start = function () {
  document.querySelector('.go').classList.remove('disabled')
  document.querySelector('.ready').classList.add('disabled')
}

const Stop = function () {

  document.querySelector('.go').classList.add('disabled')
  document.querySelector('.ready').classList.remove('disabled')
  document.querySelector('.NotesList').textContent = '[Your Note Will Be Displayed Here]'
  clearNote();
}

const newNote = function () {
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
  let note = dictNotes[Math.trunc(Math.random() * 11) + 1];
  return note
}

const prepareNote = function () {
  let note = newNote()
  document.querySelector('.NotesList').textContent = note.toString()
  const notes = document.querySelectorAll(`.${note}`)
  return notes
}

const loopNote = function (notes) {
  var interval = 1500; // how much time should the delay between two iterations be (in milliseconds)?
  var promise = Promise.resolve();
  notes.forEach(function (el) {
    promise = promise.then(function () {
      console.log(el);
      el.classList.add('teal')
      return new Promise(function (resolve) {
        setTimeout(resolve, interval);
      });
    });
  });

  promise.then(function () {
    console.log('Loop finished.');
    Stop()
    loopNote(prepareNote())
    Start();
  });
}

document.querySelector('.ready').addEventListener
  ('click', function () {
    Stop()
    loopNote(prepareNote())
    Start();
  }
  );

document.querySelector('.go').addEventListener
  ('click', function () {
    location.reload()
  });