const remote = require('electron').remote;
const Menu = remote.Menu;

const InputMenu = Menu.buildFromTemplate([{
  label: 'Cut',
  role: 'cut',
}, {
  label: 'Copy',
  role: 'copy',
}, {
  label: 'Paste',
  role: 'paste',
}, {
  type: 'separator',
}, {
  label: 'Select all',
  role: 'selectall',
}, ]);



document.body.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  e.stopPropagation();

  let node = e.target;

  while (node) {
    if (node.nodeName.match(/^(input|textarea)$/i) || node.isContentEditable) {
      InputMenu.popup(remote.getCurrentWindow());
      break;
    }
    node = node.parentNode;
  }
});
