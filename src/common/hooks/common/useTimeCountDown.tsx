import * as React from 'react';

const useTimeCountDown = (startingPoint = 60) => {
  const [counter, setCounter] = React.useState(0);

  const stopCountDown = () => setCounter(0);

  const restartCountDown = (from = 0) => setCounter(from);

  const startCountDown = () => setCounter(startingPoint);

  React.useEffect(() => {
    if (counter > 0) setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return { counter, restartCountDown, stopCountDown, startCountDown };
};

export default useTimeCountDown;
