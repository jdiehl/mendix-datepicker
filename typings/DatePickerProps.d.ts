/**
 * This file was generated from DatePicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue, ListValue, ListExpressionValue } from "mendix";

export interface DatePickerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dateAttr: EditableValue<Date>;
    disableWeekends: boolean;
    disabled?: ListValue;
    disabledKey?: ListExpressionValue<Date>;
    onChange?: ActionValue;
}

export interface DatePickerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    dateAttr: string;
    disableWeekends: boolean;
    disabled: {} | { type: string } | null;
    disabledKey: string;
    onChange: {} | null;
}
