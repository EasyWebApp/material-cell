import { component } from 'web-cell';

import template from './index.html';


@component({ template })
export default  class CellDrawer extends HTMLElement {

    constructor() {

        super().buildDOM()
            .on('click',  ':host main + div',  this.close.bind( this ))
            .on('click',  'a[href]',  this.close.bind( this ));
    }

    open() {  this.classList.add('focus');  }

    close() {  this.classList.remove('focus');  }
}
