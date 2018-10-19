import { component, InputComponent } from 'web-cell';

import template from './index.html';

import style from './index.less';


@component({ template, style })
export default  class CellSearch extends InputComponent {

    constructor() {  super();  }
}
