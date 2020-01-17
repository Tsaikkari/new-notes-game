// TODO: fix this
let staffPositions = keyboardKeys.map(element => {
 return { top: element.top - 297 }
});
console.log(staffPositions)

staffPositions.forEach((element) => {
  let staffPosition = element.top;
  let randomNote = this.randomNote;
  if ($('#random-note') === $('.' + randomNote)) {
    console.log(element.top);
  }
    console.log(staffPosition);
});
