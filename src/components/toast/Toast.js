import { useEffect } from "react";
import "./Toast.css";

const Toast = (props) => { 
    const {  position, list, setList, autoDelete, autoDeleteTime  } =
      props;
  
    const handleDelt = (i) => {
      const arr = [...list];
      arr.splice(i, 1);
      setList(arr);
    };
  
    useEffect(() => {
      const val = setInterval(() => {
        if (list.length && autoDeleteTime) {
          handleDelt(0);
        }
      }, autoDeleteTime);
      return () => {
        clearInterval(val);
      };
    }, [list, autoDeleteTime]);

  return (
    <>
      <div className={`notification-container ${position}`}>
        {list.map((item, i) => (
          <div
            key={i}
            className={`notification toast ${position}`}
            style={{ backgroundColor: item.backgroundColor }}
          >
            <button onClick={() => handleDelt(i)}>X</button>
            <div className="notification-image">
              <img src={item.icon} alt="" />
            </div>
            <div>
              <p className="notification-title">{item.title}</p>
              <p className="notification-message">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Toast;
