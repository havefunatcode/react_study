import '../App.css';
import React, { useState } from 'react';
import { Button, Icon } from '@material-ui/core';

// Button Component
function SendBtn({ sendData }) {
    var [name, setName] = useState("");
    var [date, setDate] = useState("");
    var [context, setContext] = useState("");

    const onChange = (e) => {
        setName(sendData.name.name);
        setDate(sendData.date.date);
        setContext(sendData.context.context);
        alert("Name : " + name + "\n"
            + "Date : " + date + "\n"
            + "Context : " + context + "\n"
        );
        //console.log(sendData)
        e.preventDefault();
    };

    return (
        <div className="sendBtn">
            <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}
                onClick={onChange}
            >
                Send
      </Button>
        </div>
    );
}

export default SendBtn;