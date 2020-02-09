import { createCell } from 'web-cell';
import { WebCellProps } from 'boot-cell/source/utility/type';

export function Example({ defaultSlot }: WebCellProps) {
    return <div className="border border-light p-4">{defaultSlot}</div>;
}
