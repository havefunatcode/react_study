import '../App.css';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

// TextField Date Component
function RowDate(props) {
    const nowTime = new Date();
    const [regDate, setRegDate] = useState(nowTime.toISOString().split('T')[0]);
    /*
        const setDefaultData = () => {
            props.dateCallback(regDate);
        };
    */
    const handleRegDate = (e) => {
        console.log("Date : " + e.target.value);
        setRegDate(e.target.value);
        props.dateCallback(e.target.value);
        e.preventDefault();
    };

    return (
        <div className="rowDate">
            <label>Date</label>
            <TextField
                className="inputDate"
                id="date"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                value={regDate}
                onChange={handleRegDate}
            />
        </div>
    );
}

export default RowDate;