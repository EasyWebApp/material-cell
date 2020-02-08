import { documentReady, render, createCell } from 'web-cell';

import { PageRouter } from './page';

documentReady.then(() => render(<PageRouter />));
