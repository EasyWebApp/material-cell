import { createCell } from 'web-cell';
import { Button } from 'boot-cell/source/Form/Button';

import { PageFrame } from '../component';
import routes from '../../document/dist';

export function HomePage() {
    return (
        <PageFrame
            title="Material Cell"
            description="Material Design implement based on BootStrap v4 &amp; WebCell v2"
            header={
                <Button kind="secondary" href={routes[0].paths[0]}>
                    Get started
                </Button>
            }
        />
    );
}
