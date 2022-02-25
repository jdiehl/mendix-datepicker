import { ReactElement, createElement } from "react";
import { Modifier, DayPickerProps, DateUtils } from "react-day-picker";
const DayPickerInput = require("react-day-picker/DayPickerInput").default;
import isSameDay from "date-fns/isSameDay";
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
    const { dateAttr, disableWeekends, disabled, disabledKey } = props;

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

    // change handler
    const onDayClick = (date: Date): void => {
        // do not allow disbaled days
        if (disabledDays.filter(d => d instanceof Date).find(d => isSameDay(d as Date, date))) {
            return;
        }

        // do not allow weekends
        if (disableWeekends) {
            const weekDay = date.getDay();
            if (weekDay === 6 || weekDay === 0) {
                return;
            }
        }

        dateAttr.setValue(date);
    };

    // day picker props
    const dayPickerProps: DayPickerProps = { onDayClick, disabledDays };

    return (
        <DayPickerInput
            formatDate={formatDate}
            format={FORMAT}
            parseDate={parseDate}
            placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
            value={dateAttr.value}
            dayPickerProps={dayPickerProps}
        />
    );
}
