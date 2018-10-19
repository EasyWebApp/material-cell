import { component, request } from 'web-cell';

import template from './index.html';

import style from './index.less';


@component({ template, style })
export default  class CellNavigation extends HTMLElement {

    constructor() {

        super();

        this.buildDOM();
    }

    get src() {  return this.getAttribute('src');  }

    set src(value) {  this.setAttribute('src', value);  }

    async connectedCallback() {

        this.view.menu.clear().render(await request( this.src ));
    }
}
