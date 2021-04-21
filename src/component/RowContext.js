import '../App.css';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';


// TextField Context Component
function RowContext(props) {

    const [context, setContext] = useState("");

    const handleContext = (e) => {
        console.log('Context => ' + e.target.value);
        setContext(e.target.value);
        props.contextCallback(e.target.value);
        e.preventDefault();
    };

    return (
        <div className="rowContent">
            <label>Context</label>
            <TextField
                className="inputContext"
                id="outlined-basic"
                variant="outlined"
                fullWidth={true}
                rows={15}
                multiline
                value={context}
                onChange={handleContext}
            />
        </div>
    );
}

export default RowContext;