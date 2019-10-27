let notes = ["c", "d", "e", "f", "g", "a", "b"];
let gameNotes = [];

class Note {
  constructor(name) {
    this.name = name
  }

  goTo(staff) {
    this.staffs.push(staff)
    staff.gameNotes.push(this)
  }
}

c1 = new Note("c")
d1 = new Note("d")
e1 = new Note("e")
f1 = new Note("f")
g1 = new Note("g")
a1 = new Note("a")
b1 = new Note("b")

