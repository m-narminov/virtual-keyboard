const rows = [
  ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
  ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
  ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
  ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
  ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
];

window.onload = function () {
  const root = this.document.createElement('div');
  root.style.textAlign = 'center';

  const textArea = document.createElement('textarea');
  textArea.value = 'asdfasdf';

  const keyboard = this.document.createElement('div');
  for (let i = 0; i < rows.length; i++) {
    const row = this.document.createElement('div');
    for (let j = 0; j < rows[i].length; j++) {
      const key = this.document.createElement('button');
      key.innerHTML = 'a';
      row.append(key);
    }
    keyboard.append(row);
  }

  root.append(textArea, keyboard);

  document.body.append(root);
};
