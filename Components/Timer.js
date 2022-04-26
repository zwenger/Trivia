import {useEffect, useState} from "react";

export default function Timer({setStop, questionNumber}) {
  const [timer, setTimer] = useState(4);

  const nextQuestion = () => {
    setStop();
    setTimer(4);
  };

  useEffect(() => {
    if (timer === 0) return nextQuestion();
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(4);
  }, [questionNumber]);

  return timer;



}