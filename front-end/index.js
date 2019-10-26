var scientific = require('scientific-notation');
var parse = require('scientific-notation');
var staffPosition = require('note-staff-position');
const Note = require('./note.js')
const Staff = require('./staff.js')
const Key = require('./key.js')

c = new Key("c")
d = new Key("d")
e = new Key("e")
f = new Key("f")
g = new Key("g")
a = new Key("a")
b = new Key("b")

c1 = new Note("c", "", "-11.5")
d1 = new Note("d", "", "-11")
e1 = new Note("e", "", "-10.5")
f1 = new Note("f", "", "-10")
g1 = new Note("g", "", "-9.5")
a1 = new Note("a", "", "-9")
b1 = new Note("b", "", "-8.5")

staff = new Staff("treble-clef", [c1, d1, e1, f1, g1, a1, b1])

console.log(staffPosition(parse('C1'), staffPosition.TREBLE_CLEF))   

console.log(scientific('A1'))

 



