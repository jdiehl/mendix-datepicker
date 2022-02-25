import { ReactElement, createElement } from "react";
import { Modifier, DayPickerProps, DateUtils } from "react-day-picker";
const DayPickerInput = require("react-day-picker/DayPickerInput").default;
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

import { DatePickerContainerProps } from "../typings/DatePickerProps";

import "./ui/DatePicker.css";

const FORMAT = "dd.MM.yyyy";

function parseDate(str: string, format: string, locale: any): Date | undefined {
    const parsed = dateFnsParse(str, format, new Date(), { locale });
    if (DateUtils.isDate(parsed)) {
        return parsed;
    }
    return undefined;
}

function formatDate(date: Date, format: string, locale: any): string {
    return dateFnsFormat(date, format, { locale });
}

export function DatePicker(props: DatePickerContainerProps): ReactElement | null {
    const { dateAttr, disableWeekends, disabled, disabledKey, onChange } = props;

    if (!dateAttr) {
        return null;
    }

    // disabled days
    const disabledDays: Modifier[] = [];
    if (disableWeekends) {
        disabledDays.push({ daysOfWeek: [0, 6] });
    }
    if (disabledKey && disabled?.items) {
        for (const item of disabled.items) {
            const date = disabledKey.get(item).value;
            disabledDays.push(date);
        }
    }

    // on day change
    const onDayChange = (date: Date): void => {
        dateAttr.setValue(date);
        if (onChange?.canExecute) {
            onChange.execute();
        }
    };

    // day picker props
    const dayPickerProps: DayPickerProps = { disabledDays };

    return (
        <DayPickerInput
            formatDate={formatDate}
            format={FORMAT}
            parseDate={parseDate}
            placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
            dayPickerProps={dayPickerProps}
            onDayChange={onDayChange}
            clickUnselectsDay
        />
    );
}
