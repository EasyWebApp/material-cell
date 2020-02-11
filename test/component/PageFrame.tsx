import { createCell, Fragment, VNodeChildElement } from 'web-cell';
import { WebCellProps } from 'boot-cell/source/utility/type';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { Button } from 'boot-cell/source/Form/Button';

import routes from '../../document/dist';

interface PageFrameProps extends WebCellProps {
    title: string;
    description: string;
    header?: VNodeChildElement;
}

export function PageFrame({
    title,
    description,
    header,
    defaultSlot
}: PageFrameProps) {
    return (
        <Fragment>
            <Jumbotron title={title} description={description} fluid>
                {header}
            </Jumbotron>
            <div className="container pt-3">{defaultSlot}</div>
        </Fragment>
    );
}
