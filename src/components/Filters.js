import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setTextFilter, setStartDate, setEndDate } from '../action/filters';
import { DateRangePicker } from "react-dates";

const Filters = (props) => {

    const dispatch = useDispatch();

    const text = useSelector(state => state.filters.text);
    const startDate = useSelector(state => state.filters.startDate);
    const endDate = useSelector(state => state.filters.endDate);

    const [focused, setFocused] = useState(null);

    const onDatesChange = ({ startDate, endDate }) => {
        dispatch(setStartDate(startDate));
        dispatch(setEndDate(endDate));
    };

    return (
        <>
            <input type="text" value={text} onChange={(e) => dispatch(setTextFilter(e.target.value))}/>
            <DateRangePicker 
                startDate={startDate}
                startDateId="theStartDate"
                endDate={endDate}
                endDateId="theEndDate"
                onDatesChange={onDatesChange}
                focusedInput={focused}
                onFocusChange={setFocused}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
            />
        </>
    )
}

export { Filters as default };