/* exported titleCase */

function titleCase(title) {
  title = title.toLowerCase();
  title = title.split(' ');
  for (var i = 0; i < title.length; i++) {
    // if (title[i] === 'and' || title[i] === 'or' || title[i] === 'nor' || title[i] === 'but' || title[i] === 'as' || title[i] === 'by' || title[i] === 'for' || title[i] === 'in' || title[i] === 'of' || title[i] === 'on' || title[i] === 'per' || title[i] === 'to') {
    //   title[i]
    // }
    title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
  }
  return title.join(' ');
}
