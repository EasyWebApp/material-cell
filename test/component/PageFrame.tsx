import {
    WebCellProps,
    createCell,
    Fragment,
    VNodeChildElement
} from 'web-cell';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';

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
        <>
            <Jumbotron title={title} description={description} fluid>
                {header}
            </Jumbotron>
            <div className="container pt-3">{defaultSlot}</div>
        </>
    );
}
