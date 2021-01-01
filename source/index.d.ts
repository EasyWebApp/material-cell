import { WebCellProps } from 'web-cell';

import type {} from '@material/mwc-icon';
import type {} from '@material/mwc-icon-button';
import type {} from '@material/mwc-icon-button-toggle';
import type {} from '@material/mwc-button';
import type {} from '@material/mwc-radio';
import type {} from '@material/mwc-checkbox';
import type {} from '@material/mwc-circular-progress';
import type {} from '@material/mwc-circular-progress-four-color';

type HTML_JSX = {
    [K in keyof HTMLElementTagNameMap]: K extends `${string}-${string}`
        ? Partial<HTMLElementTagNameMap[K]> & WebCellProps
        : WebCellProps;
};

declare global {
    namespace JSX {
        interface IntrinsicElements extends HTML_JSX {}
    }
}
