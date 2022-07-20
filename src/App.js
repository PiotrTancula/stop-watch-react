import { useState } from "react";
import FormattedTime from "./components/FormattedTime/FormattedTime ";
import Button from "./components/Button/Button";
import styles from './App.module.scss';
import { useEffect } from "react";

const App = () => {

  const [currentTime, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    setTimer(
      setInterval(() => {
        setTime((currentTime) => currentTime + 1);
      }, 1)
    );
  };

  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
    }
  };

  const resetTimer = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, []);



  return (
    <div className={styles.App}>
      <FormattedTime time={currentTime} className={styles.FormattedTime} />
      <div className={styles.App}>
        <Button onClick={startTimer}>Start</Button>
        <Button onClick={stopTimer}>Stop</Button>
        <Button onClick={resetTimer}>Reset</Button>
      </div>
    </div>
  );
}

export default App;
