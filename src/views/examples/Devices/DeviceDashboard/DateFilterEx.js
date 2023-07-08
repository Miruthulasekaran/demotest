import React from 'react'
import "react-datepicker/dist/react-datepicker.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

function DateFilterEx() {
    const selectionRange = {
        startDate: "",
        endDate: "",
        key: 'selection',
    }
    const handleSelect = (date) => {
        // ConditionView = false

    };

    return (
        <>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
                className='dateselect'
            >  </DateRangePicker><button className='btn btn-danger btn-sm float-right mr-6 mb-3'>cancel</button>
        </>
    )
}

export default React.memo(DateFilterEx)