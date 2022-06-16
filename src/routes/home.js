import React, {useState, useEffect, useContext} from 'react'
import { CounterContext } from '../service/context';
const Home = () => {
  const {setTimeLoaded} = useContext(CounterContext)
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true);

  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = () => {
      setIsActive(false)
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    }
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 10);
      setTimeLoaded(time)
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [ isActive, time ,setTimeLoaded]);

  return (
    <div>
      this home page or page1
      then I console log "Hello world!"
    </div>
  )
}

export default Home