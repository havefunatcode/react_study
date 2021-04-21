import '../App.css';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';


// TextField Name Component
function RowName(props) {
    const [name, setName] = useState('');

    const handleName = (e) => {
        console.log('Name => ' + e.target.value);
        setName(e.target.value);
        props.nameCallback(e.target.value);
        e.preventDefault();
    }

    return (
        <div className="rowName">
            <label>Name</label>
            <TextField
                className="inputName"
                id="outlined-basic"
                variant="outlined"
                size="small"
                value={name}
                onChange={handleName}
            />
        </div>
    );
}

export default RowName;