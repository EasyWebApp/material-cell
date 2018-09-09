import { component } from 'web-cell';

import template from './index.html';


export default  class CellHeader extends HTMLElement {

    constructor() {  super().buildDOM( template );  }
}


component( CellHeader );
