class Note {
  constructor(name, startPoint, staffPosition) {
    this.name = name
    this.startPoint = startPoint + 'px'
    this.staffPosition = staffPosition + 'px'
  }
  belongTo(staff) {
    this.staff = staff.name
    staff.staffPositions.push(this)
  }
}

const c = new Note("c", ''); //TODO: calculate the stuffPositions
const d = new Note("d", '');
const e = new Note("e", '');
const f = new Note("f", '1077');
const g = new Note("g", '');
const a = new Note("a", '');
const b = new Note("b", '');

const c0 = new Note("c", '');
const d0 = new Note("d", '');
const e0 = new Note("e", '');
const f0 = new Note("f", '');
const g0 = new Note("g", '');
const a0 = new Note("a", '');
const b0 = new Note("b", '');


//f.belongTo(level1)





