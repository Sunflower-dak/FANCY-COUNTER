import Heading from "./Heading";
import Counter from "./Counter";
import ResetBtn from "./ResetBtn";
import Buttons from "./Buttons";
import CompButtons from "./CompButtons";
import { useEffect, useState } from "react";

function Canvas() {
  const [number, setNumber] = useState(0);
  const lockForPro = number === 5 ? true : false;

  const handleSpaceEvent = (event) => {
    if (event.code === "Space") {
      const newNumber = number + 1;
      if (newNumber > 5) {
        setNumber(5);
        return;
      }
      setNumber(newNumber);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleSpaceEvent);
    return () => {
      window.removeEventListener("keydown", handleSpaceEvent);
    };
  }, [number]);

  return (
    <div className={`card ${lockForPro ? "card--limit" : null}`}>
      <Heading lockForPro={lockForPro} />
      <Counter number={number} />
      <ResetBtn setNumber={setNumber} />
      <Buttons>
        <CompButtons
          setNumber={setNumber}
          type="minus"
          lockForPro={lockForPro}
        />
        <CompButtons
          setNumber={setNumber}
          type="plus"
          lockForPro={lockForPro}
        />
      </Buttons>
    </div>
  );
}

export default Canvas;
