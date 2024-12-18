import {useState} from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function SearchDate({name}) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} name={name} onChange={(date) => setStartDate(date)} />

    );
};