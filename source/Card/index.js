import { component } from "web-cell";

import template from "./index.html";

export default class CellCard extends HTMLElement {
    constructor() {
        super().buildDOM(template);
    }
}

component(CellCard);
