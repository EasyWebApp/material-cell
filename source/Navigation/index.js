import { component, request } from 'web-cell';

import template from './index.html';

import style from './index.less';


export default  class CellNavigation extends HTMLElement {

    constructor() {  super().buildDOM(template, style);  }

    get src() {  return this.getAttribute('src');  }

    set src(value) {  this.setAttribute('src', value);  }

    async connectedCallback() {

        this.view.menu.clear().render(await request( this.src ));
    }
}

component( CellNavigation );
