import { component } from 'web-cell';

import template from './index.html';


@component({ template })
export default  class CellIcon extends HTMLElement {

    constructor() {  super().buildDOM();  }

    get name() {  return this.getAttribute('name');  }

    set name(value) {  this.setAttribute('name', value);  }

    connectedCallback() {  this.view.name = this.name;  }
}
