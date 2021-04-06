import './App.css';
import React, { Fragment } from 'react';
import { Button, TextField, Icon } from '@material-ui/core';

function RowName() {
  return (
    <div className="rowName">
      <label>Name</label>
      <TextField className="inputName" id="outlined-basic" variant="outlined" size="small" />
    </div>
  );
}

function RowDate() {
  return (
    <div className="rowDate">
      <label>Date</label>
      <TextField
        className="inputDate"
        id="date"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}

function SendBtn() {
  return (
    <div className="sendBtn">
      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
      >
        Send
    </Button>
    </div>
  );
}

function RowContext() {
  return (
    <div className="rowContent">
      <label>Context</label>
      <TextField
        className="inputContext"
        id="outlined-basic"
        variant="outlined"
        fullWidth="true"
        rows={15}
        multiline
      />
    </div>
  );
}

function App() {
  return (
    <Fragment>
      <div className="mainGrid">
        <form className="inputForm">
          <div className="rowNameDate">
            <RowName />
            <RowDate />
          </div>
          <RowContext />
        </form>
        <SendBtn />
      </div>
    </Fragment>
  );
}

export default App;
