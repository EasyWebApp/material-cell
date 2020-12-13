import { WebCellProps, createCell } from 'web-cell';
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
