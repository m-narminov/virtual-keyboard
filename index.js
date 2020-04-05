const rows = {
  ru: [
    [
      { id: 'Backquote', value: 'ё' },
      { id: 'Digit1', value: '<sup>!</sup>1' },
      { id: 'Digit2', value: '<sup>"</sup>2' },
      { id: 'Digit3', value: '<sup>№</sup>3' },
      { id: 'Digit4', value: '<sup>;</sup>4' },
      { id: 'Digit5', value: '<sup>%</sup>5' },
      { id: 'Digit6', value: '<sup>:</sup>6' },
      { id: 'Digit7', value: '<sup>?</sup>7' },
      { id: 'Digit8', value: '<sup>*</sup>8' },
      { id: 'Digit9', value: '<sup>(</sup>9' },
      { id: 'Digit0', value: '<sup>)</sup>0' },
      { id: 'Minus', value: '<sup>_</sup>-' },
      { id: 'Equal', value: '<sup>+</sup>=' },
      { id: 'Backspace', value: 'Backspace' },
    ],
    [
      { id: 'Tab', value: 'Tab' },
      { id: 'KeyQ', value: 'Й' },
      { id: 'KeyW', value: 'Ц' },
      { id: 'KeyE', value: 'У' },
      { id: 'KeyR', value: 'К' },
      { id: 'KeyT', value: 'Е' },
      { id: 'KeyY', value: 'Н' },
      { id: 'KeyU', value: 'Г' },
      { id: 'KeyI', value: 'Ш' },
      { id: 'KeyO', value: 'Щ' },
      { id: 'KeyP', value: 'З' },
      { id: 'BracketLeft', value: 'Х' },
      { id: 'BracketRight', value: 'Ъ' },
      { id: 'Backslash', value: '<sup>/</sup>\\' },
      { id: 'Delete', value: 'DEL' },
    ],
    [
      { id: 'CapsLock', value: 'CapsLock' },
      { id: 'KeyA', value: 'Ф' },
      { id: 'KeyS', value: 'Ы' },
      { id: 'KeyD', value: 'В' },
      { id: 'KeyF', value: 'А' },
      { id: 'KeyG', value: 'П' },
      { id: 'KeyH', value: 'Р' },
      { id: 'KeyJ', value: 'О' },
      { id: 'KeyK', value: 'Л' },
      { id: 'KeyL', value: 'Д' },
      { id: 'Semicolon', value: 'Ж' },
      { id: 'Quote', value: 'Э' },
      { id: 'Enter', value: 'Enter' },
    ],
    [
      { id: 'ShiftLeft', value: 'Shift' },
      { id: 'KeyZ', value: 'Я' },
      { id: 'KeyX', value: 'Ч' },
      { id: 'KeyC', value: 'С' },
      { id: 'KeyV', value: 'М' },
      { id: 'KeyB', value: 'И' },
      { id: 'KeyN', value: 'Т' },
      { id: 'KeyM', value: 'Ь' },
      { id: 'Comma', value: 'Б' },
      { id: 'Period', value: 'Ю' },
      { id: 'Slash', value: '.' },
      { id: 'ArrowUp', value: '⮝' }, // ⮜⮞⮟
      { id: 'ShiftRight', value: 'Shift' },
    ],
    [
      { id: 'ControlRight', value: 'Ctrl' },
      { id: 'WindowsKey' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
    ],
  ],

  en: [
    [
      { id: 'Backquote', value: '<sup>~</sup>`' },
      { id: 'Digit1', value: '<sup>!</sup>1' },
      { id: 'Digit2', value: '<sup>@</sup>2' },
      { id: 'Digit3', value: '<sup>#</sup>3' },
      { id: 'Digit4', value: '<sup>$</sup>4' },
      { id: 'Digit5', value: '<sup>%</sup>5' },
      { id: 'Digit6', value: '<sup>^</sup>6' },
      { id: 'Digit7', value: '<sup>&</sup>7' },
      { id: 'Digit8', value: '<sup>*</sup>8' },
      { id: 'Digit9', value: '<sup>(</sup>9' },
      { id: 'Digit0', value: '<sup>)</sup>0' },
      { id: 'Minus', value: '<sup>_</sup>-' },
      { id: 'Equal', value: '<sup>+</sup>=' },
      { id: 'Backspace', value: 'Backspace' },
    ],
    [
      { id: 'ControlLeft', value: 'Ctrl' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
    ],
    [
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
    ],
    [
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
    ],
    [
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
      { id: 'KeyF' },
    ],
  ],
};

class Key {
  constructor() {}

  onClick = () => {};

  onkeydown = () => {};

  onkeyup = () => {};
}

window.onload = function () {
  const meta = this.document.createElement('meta');
  meta.setAttribute('charset', 'UTF-8');
  this.console.log(meta);

  this.document.head.title.value = 'Virtual keyboard';
  let eng = false;
  const keyboardPress = (e) => {
    textArea.value += e.code;
    this.console.log('e.key = ', e.key);
    this.console.log('e.code = ', e.code);
    if (e.key === 'Shift' && e.key === 'Alt') {
      eng = !eng;
    }
  };

  // window.onkeydown = window.onkeyup =
  window.onkeypress = keyboardPress;
  const root = this.document.createElement('div');
  root.style.textAlign = 'center';

  const textArea = document.createElement('textarea');
  textArea.value = '';
  textArea.style.width = '100%';
  textArea.style.height = '300px';

  const keyboard = this.document.createElement('div');

  const lang = eng ? 'en' : 'ru';
  this.console.log(lang);

  for (let i = 0; i < rows[lang].length; i++) {
    const row = this.document.createElement('div');
    for (let j = 0; j < rows[lang][i].length; j++) {
      const key = this.document.createElement('button');
      key.name = rows[lang][i][j].id;
      key.innerHTML = rows[lang][i][j].value;
      key.addEventListener('click', (e) => {});
      row.append(key);
    }
    keyboard.append(row);
  }

  root.append(textArea, keyboard);

  document.body.append(root);
};
