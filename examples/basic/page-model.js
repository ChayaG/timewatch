import { Selector } from 'testcafe';


export default class Page {
  constructor() {
    this.nameInput = Selector('#compKeyboard');
    this.nameKeyboard = Selector('#nameKeyboard');
    this.pwKeyboard = Selector('#pwKeyboard');
    this.submitButton = Selector('input[type=image]');
    this.inButton = Selector('#inButton');
  }
}
