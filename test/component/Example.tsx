import { WebCellProps, createCell } from 'web-cell';

export function Example({ defaultSlot }: WebCellProps) {
    return <div className="border border-light p-4">{defaultSlot}</div>;
}
