import { component, InputComponent } from 'web-cell';

import template from './index.html';


export default  class CellCheckbox extends InputComponent {

    constructor() {  super( template );  }
}


component( CellCheckbox );
