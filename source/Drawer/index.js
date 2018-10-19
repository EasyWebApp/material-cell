import { component } from 'web-cell';

import template from './index.html';


@component({ template })
export default  class CellDrawer extends HTMLElement {

    constructor() {

        super();

        this.buildDOM();

        this.$('main + div')[0].onclick = this.close.bind( this );

        this.on('click',  'a[href]',  this.close.bind( this ));
    }

    open() {  this.classList.add('focus');  }

    close() {  this.classList.remove('focus');  }
}
