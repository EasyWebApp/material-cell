import { documentReady, render, createCell } from 'web-cell';

import { DrawerNav } from '../source';

import children from './index.json';

documentReady.then(() =>
    render(
        <DrawerNav
            open
            header="Material Cell"
            menu={[
                { title: 'WebCell', href: 'https://web-cell.dev/' },
                { title: 'Subs', children }
            ]}
        />
    )
);
