import { component, InputComponent } from 'web-cell';

import template from './index.html';

import style from './index.less';


export default  class CellSearch extends InputComponent {

    constructor() {  super(template, style);  }
}


component( CellSearch );
