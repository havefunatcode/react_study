import './App.css';
import React, { Fragment, useState } from 'react';
import RowName from "./component/RowName";
import RowDate from "./component/RowDate";
import RowContext from "./component/RowContext";
import SendBtn from "./component/SendBtn";

function App() {
  const nowTime = new Date();

  var [name, setName] = useState("");
  var [date, setDate] = useState(nowTime.toISOString().split('T')[0]);
  var [context, setContext] = useState("");
  //var [data, setData] = useState("");

  const getName = (childName) => setName({ name: childName })
  const getDate = (childDate) => setDate({ date: childDate })
  const getContext = (childContext) => setContext({ context: childContext })
  /*
    useEffect((childName, childDate, childContext) => {
      setName({ name: childName });
      setDate({ date: childDate });
      setContext({ context: childContext });
    });
  */
  return (
    <Fragment>
      <div className="mainGrid">
        <form className="inputForm">
          <div className="rowNameDate">
            <RowName
              nameCallback={getName}
            />
            <RowDate
              dateCallback={getDate}
            />
          </div>
          <RowContext
            contextCallback={getContext}
          />
        </form>
        <SendBtn
          sendData={{ name, date, context }}
        />
      </div>
    </Fragment>
  );
}

export default App;
