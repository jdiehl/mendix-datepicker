/**
 * This file was generated from DatePicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue, ListValue, ListExpressionValue } from "mendix";

export interface DatePickerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    value: EditableValue<Date>;
    disableWeekends: boolean;
    disabledDays?: ListValue;
    disabledDaysKey?: ListExpressionValue<Date>;
}

export interface DatePickerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    value: string;
    disableWeekends: boolean;
    disabledDays: {} | { type: string } | null;
    disabledDaysKey: string;
}
