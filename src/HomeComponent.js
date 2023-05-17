import { useState,useEffect } from "react";
import "./HomeComponent.css";
import Toast from "./components/toast/Toast";
import Button from './components/button/Button'
import { BUTTON_PROPS, TOAST_PROPERTIES } from "./toastProperties";

const HomeComponent = () => {

  const [list, setList] = useState([]);
  const [position, setPosition] = useState("Select Position");
  const [checkValue, setCheckValue] = useState(false);
  const [autoDeleteTime, setAutoDeleteTime] = useState(0);


  const selectPosition = (e) => {
    setPosition(e.target.value);
    setList([]);
  };

  const showToast = (type) => {
    const toastProperties = TOAST_PROPERTIES.find(
      (item) => item.title.toLowerCase() === type
    );
    setList([...list, toastProperties]);
  };

  
  
  const handleDelt = (i ) => {
    const arr = [...list];
    arr.splice(i,1) 
    setList(arr);
  };

  const onCheckBoxChange = () => {
    setCheckValue(!checkValue);
    setList([]);
  };

  const onInputChange = (e) => {
    let time = parseInt(Number(e.target.value, 10));
    setAutoDeleteTime(time);
  };

   

  return (
    <>
      <div className="app">
        <p>React Toast Component</p>
        <div className="select">
          <input
            id="auto"
            type="checkbox"
            name="checkbox"
            value={checkValue}
            onChange={onCheckBoxChange}
          />
          <label htmlFor="auto">Auto Dismiss</label>
        </div>

        <div className="select">
          <input
            type="text"
            name="checkbox"
            placeholder="Dismiss time Ex: 3000"
            autoComplete="false"
            onChange={onInputChange}
            className={`${!checkValue ? 'disabled' : ''}`}
          />
        </div>
        <div className="select">
          <select
            name="position"
            value={position}
            onChange={selectPosition}
            className="position-select"
          >
            <option>Select Position</option>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-right">Bottom Right</option>
          </select>
        </div>
        <br />
        <div className="toast-buttons">
          {BUTTON_PROPS.map((item) => (
            <Button
              key={item.id}
              className={`${
                position === "Select Position"
                  ? `${item.className} btn-disable`
                  : `${item.className}`
              }`}
              label={item.label}
              handleClick={() => showToast(item.type)}
            />
          ))}
        </div>
      </div>

      <Toast  
        position={position}
        list={list}
        setList={setList}
        autoDelete={checkValue}
        autoDeleteTime={autoDeleteTime}
        setCheckValue={setCheckValue}/>
    </>
  );
};

export default HomeComponent;
