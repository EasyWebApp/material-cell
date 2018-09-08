import { component } from 'web-cell';

import template from './index.html';

const drawerMap = new WeakMap();


export default  class CellDrawer extends HTMLElement {

    constructor() {

        drawerMap.set(super().buildDOM( template ),  this.$('main')[0]);

        this.$('main + div')[0].onclick = this.close.bind( this );

        this.on('click',  'a[href]',  this.close.bind( this ));
    }

    open() {  drawerMap.get( this ).classList.add('focus');  }

    close() {  drawerMap.get( this ).classList.remove('focus');  }
}


component( CellDrawer );
