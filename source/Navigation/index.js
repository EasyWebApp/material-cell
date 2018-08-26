import { component } from "web-cell";

import template from "./index.html";

export default class CellNavigation extends HTMLElement {
    constructor() {
        super().buildDOM(template);
    }

    get src() {
        return this.getAttribute("src");
    }

    async connectedCallback() {
        this.view.menu.clear().render(await (await fetch(this.src)).json());
    }
}

component(CellNavigation);
