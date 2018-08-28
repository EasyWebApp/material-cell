import { component } from 'web-cell';

import template from './index.html';

import style from './index.less';


export default  class CellSearch extends HTMLElement {

    constructor() {  super().buildDOM(template, style);  }
}


component( CellSearch );
