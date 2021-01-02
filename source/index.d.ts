import { WebCellProps } from 'web-cell';

import type {} from '@material/mwc-icon';
import type {} from '@material/mwc-icon-button';
import type {} from '@material/mwc-icon-button-toggle';
import type {} from '@material/mwc-button';
import type {} from '@material/mwc-fab';
import type {} from '@material/mwc-radio';
import type {} from '@material/mwc-checkbox';
import type {} from '@material/mwc-switch';
import type {} from '@material/mwc-formfield';
import type {} from '@material/mwc-textfield';
import type {} from '@material/mwc-textarea';
import type {} from '@material/mwc-list';
import type {} from '@material/mwc-select';
import type {} from '@material/mwc-menu';
import type {} from '@material/mwc-slider';
import type {} from '@material/mwc-linear-progress';
import type {} from '@material/mwc-circular-progress';
import type {} from '@material/mwc-circular-progress-four-color';
import type {} from '@material/mwc-tab';
import type {} from '@material/mwc-tab-bar';
import type {} from '@material/mwc-snackbar';
import type {} from '@material/mwc-dialog';
import type {} from '@material/mwc-top-app-bar';
import type {} from '@material/mwc-top-app-bar-fixed';
import type {} from '@material/mwc-drawer';

type HTML_JSX = {
    [K in keyof HTMLElementTagNameMap]: K extends `${string}-${string}`
        ? WebCellProps & Omit<Partial<HTMLElementTagNameMap[K]>, 'style'>
        : WebCellProps;
};

declare global {
    namespace JSX {
        interface IntrinsicElements extends HTML_JSX {}
    }
}
