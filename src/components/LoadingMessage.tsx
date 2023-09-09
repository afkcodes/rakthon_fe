/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { getRandomLoadingText } from '../helpers/loading';

const LoadingMessage = () => {
  const [loadingMsg, setLoadingMsg] = useState(getRandomLoadingText());
  const interval = useRef<any>(null);

  useEffect(() => {
    return () => clearInterval(interval.current);
  }, [loadingMsg]);

  useEffect(() => {
    interval.current = setInterval(() => {
      setLoadingMsg(getRandomLoadingText());
    }, 2000);
  }, [loadingMsg]);
  return (
    <div className='transition-all duration-300 ease-in-out w-96 text-center'>
      {loadingMsg}
    </div>
  );
};

export default LoadingMessage;
