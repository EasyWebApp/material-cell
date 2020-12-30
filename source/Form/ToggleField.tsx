import { createCell } from 'web-cell';
import { uniqueID } from 'web-utility/source/data';
import {
    ToggleFieldProps,
    ToggleField as BCToggleField
} from 'boot-cell/source/Form/ToggleField';
import { ValidMessage } from 'boot-cell/source/Form/Form';

export { ToggleFieldProps } from 'boot-cell/source/Form/ToggleField';

export function ToggleField({
    type,
    id = uniqueID(),
    switch: _switch,
    defaultSlot,
    validMode,
    validMessage,
    invalidMessage,
    ...rest
}: ToggleFieldProps) {
    return type === 'checkbox' && _switch ? (
        <div className="custom-control custom-switch">
            <input
                {...rest}
                type="checkbox"
                className="custom-control-input"
                id={id}
            />
            <span className="custom-control-track" />
            <label className="custom-control-label" for={id}>
                {defaultSlot}
            </label>
            <ValidMessage {...{ validMode, validMessage, invalidMessage }} />
        </div>
    ) : (
        <BCToggleField {...rest} type={type} id={id}>
            {defaultSlot}
        </BCToggleField>
    );
}
