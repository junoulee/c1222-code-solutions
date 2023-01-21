/* exported titleCase */

function titleCase(title) {
  title = title.toLowerCase().split(' ');
  var minorWords = ['A', 'An', 'And', 'The', 'Or', 'Nor', 'But', 'As', 'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
  var minorWordsLower = ['a', 'an', 'and', 'the', 'or', 'nor', 'but', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var hardCode = ['Javascript', 'Api'];

  for (var i = 0; i < title.length; i++) {
    title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);

  }

  if (title.includes(hardCode[0])) {
    var indexTwo = title.indexOf(hardCode[0]);
    hardCode[0] = hardCode[0].slice(0, 4) + hardCode[0].charAt(4).toUpperCase() + hardCode[0].slice(5);
    title.splice(indexTwo, 1, hardCode[0]);

  }
  if (title.includes(hardCode[1])) {
    var indexThree = title.indexOf(hardCode[1]);
    hardCode[1] = hardCode[1].slice(0, 1) + hardCode[1].charAt(1).toUpperCase() + hardCode[1].charAt(2).toUpperCase();
    title.splice(indexThree, 1, hardCode[1]);
  }

  for (i = 0; i < minorWords.length; i++) {

    if (title.includes(minorWords[i]) && minorWords[i] !== title[0]) {
      var index = title.indexOf(minorWords[i]);
      title.splice(index, 1, minorWordsLower[i]);
    }
  }

  return title.join(' ');
}
// var minorWordsArray = []; // pushes all the minor words into this array
// minorWordsArray.push(minorWords[i]);
// var indexArray = []; // pushes all the indexes into this array
// indexArray.push(index);
titleCase('the cat in the hat');

// var minorArray = [];
// for (i = 0; i < minorWords.length; i++) {
//   if (title.includes(minorWords[i])) {
//     var index = title.indexOf(minorWords[i]);
//     minorArray.push(minorWords[i]);
//     if (index !== 0) {
//       minorWords = minorWords[i].toLowerCase();
//       title.splice(index, 1, minorWords);
//     }
//   }
// }
