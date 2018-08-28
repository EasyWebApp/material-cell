import { component } from 'web-cell';

import template from './index.html';


export default  class CellIcon extends HTMLElement {

    constructor() {  super().buildDOM( template );  }

    get name() {  return this.getAttribute('name');  }

    set name(value) {  this.setAttribute('name', value);  }

    connectedCallback() {  this.view.name = this.name;  }
}


component( CellIcon );
