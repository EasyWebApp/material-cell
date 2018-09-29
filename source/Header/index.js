import { component } from 'web-cell';

import template from './index.html';

const onResize = new WeakMap();


export default  class CellHeader extends HTMLElement {

    constructor() {  super().buildDOM( template );  }

    connectedCallback() {

        const observer = new ResizeObserver(
            ()  =>  this.classList.toggle('big',  window.innerWidth > 1024)
        );

        observer.observe( document.body );

        onResize.set(this, observer);
    }

    disconnectedCallback() {  onResize.get( this ).disconnect();  }
}


component( CellHeader );
