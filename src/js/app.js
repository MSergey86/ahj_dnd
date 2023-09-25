import TrelloWidget from './ui/widgets/TrelloWidget';
import Trello from './ui/Trello';

const widget = new TrelloWidget();
widget.bindToDOM(document.querySelector('#trello_container'));
widget.init();
//localStorage.clear();
const state = JSON.parse(localStorage.getItem('trello'));
let trello;


if (!state) {
  trello = new Trello(widget);

  const todoColumn = trello.addColumn('ToDo');
  const inProgressColumn = trello.addColumn('In progress');
  const doneColumn = trello.addColumn('Done');
} else {
  trello = Trello.fromObject(state, widget);
}

trello.init();
