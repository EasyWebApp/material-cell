import { createCell, Fragment } from 'web-cell';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { Button } from 'boot-cell/source/Form/Button';

import routes from '../../document/dist';

export function HomePage() {
    return (
        <Fragment>
            <Jumbotron
                title="Material Cell"
                description="Material Design implement based on BootStrap v4 &amp; WebCell v2"
                fluid
            >
                <Button kind="secondary" href={routes[0].paths[0]}>
                    Get started
                </Button>
            </Jumbotron>
        </Fragment>
    );
}
