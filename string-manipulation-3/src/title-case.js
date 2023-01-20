/* exported titleCase */

function titleCase(title) {
  title = title.toLowerCase().split(' ');
  var minorWords = ['And', 'Or', 'Nor', 'But', 'As', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
  var hardCode = ['Javascript:', 'Javascript', 'Api'];

  for (var i = 0; i < title.length; i++) {

    title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);

  }

  if (title.includes(hardCode[0]) === true) {
    var indexOne = title.indexOf(hardCode[0]);
    hardCode[0] = hardCode[0].slice(0, 4) + hardCode[0].charAt(4).toUpperCase() + hardCode[0].slice(5);
    title.splice(indexOne, 1, hardCode[0]);
  }

  if (title.includes(hardCode[1]) === true) {
    var indexTwo = title.indexOf(hardCode[1]);
    hardCode[1] = hardCode[1].slice(0, 4) + hardCode[1].charAt(4).toUpperCase() + hardCode[1].slice(5);
    title.splice(indexTwo, 1, hardCode[1]);

  }

  if (title.includes(hardCode[2]) === true) {
    var indexThree = title.indexOf(hardCode[2]);
    hardCode[2] = hardCode[2].slice(0, 1) + hardCode[2].charAt(1).toUpperCase() + hardCode[2].charAt(2).toUpperCase();
    title.splice(indexThree, 1, hardCode[2]);
  }

  for (i = 0; i < minorWords.length; i++) {
    if (title.includes(minorWords[i]) === true) {
      var index = title.indexOf(minorWords[i]);
      minorWords = minorWords[i].toLowerCase();
      title.splice(index, 1, minorWords);
    }
  }

  return title.join(' ');
}
