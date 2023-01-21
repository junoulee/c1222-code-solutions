/* exported titleCase */
// lower case everything and split into an array into chunks of words;
// assign 2 arrays of "hard coded" words
// for loop through each title array (starting at i = 1, so that repeating minorWords get looped properly) and uppercase each word's first letter (excluding first word);
// create 2 if statements for hardCode[0] and hardCode[1];
// loop through minorWords array to lower case all the prepositions, conjunctions, and articles;
// uppercase all the first letters of each first word;
// loop through title array again to capitalize any letters that come after colons
// loop through title array again to capitalize any letters that come after hyphens
// set special condition for colons that come after JavaScript
// title.join(' ') to turn back into string;

function titleCase(title) {
  title = title.toLowerCase().split(' ');
  var minorWords = ['A', 'An', 'And', 'The', 'Or', 'Nor', 'But', 'As', 'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
  var hardCode = ['Javascript', 'Api'];

  for (var i = 1; i < title.length; i++) {
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
      title.splice(index, 1, minorWords[i].charAt(0).toLowerCase() + minorWords[i].slice(1));
    }
  }

  var firstWord = title[0].charAt(0).toUpperCase() + title[0].slice(1);
  title.splice(0, 1, firstWord);

  for (i = 0; i < title.length; i++) {
    if (title[i].charAt(title[i].length - 1) === ':') {
      var afterColon = title[i + 1].charAt(0).toUpperCase() + title[i + 1].slice(1);
      title.splice(i + 1, 1, afterColon);
    }
  }

  for (i = 0; i < title.length; i++) {
    if (title[i].indexOf('-') > 0) {
      var hyphenIndex = title[i].indexOf('-');
      var afterHyphen = title[i].charAt(hyphenIndex + 1).toUpperCase();
      var newAfterHyphen = title[i].replace(title[i].charAt(hyphenIndex + 1), afterHyphen);
      title.splice(i, 1, newAfterHyphen);
    }
  }

  for (i = 0; i < title.length; i++) {
    if (title[i] === 'Javascript:') {
      title[i] = 'JavaScript:';
    }
  }
  return title.join(' ');
}
