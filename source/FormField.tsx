import { WebCellProps, createCell, VNodeChildElement, VNode } from 'web-cell';
import {
    FormFieldProps as BCFormFieldProps,
    FormField as BCFormField
} from 'boot-cell/source/Form/FormField';
import classNames from 'classnames';

import './FormField.less';

export interface FormFieldProps extends BCFormFieldProps, WebCellProps {
    boxMode?: boolean;
}

export function FormField({
    boxMode,
    className,
    defaultSlot,
    ...rest
}: FormFieldProps) {
    return (
        <BCFormField
            {...rest}
            className={classNames(boxMode && 'textfield-box', className)}
        >
            {defaultSlot}
        </BCFormField>
    );
}

export function isFormField(node: VNodeChildElement): node is VNode {
    const { ['form-group']: group, ['form-label-group']: label } =
        (node as VNode).data?.class || {};

    return group || label;
}
