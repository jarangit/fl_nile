import React, { useState, createContext } from 'react'
const CounterContext = createContext()
function CounterProvider(props) {
  const [count, setCount] = useState(0)
  const [timeLoaded, setTimeLoaded] = useState(0)
  return (
    <CounterContext.Provider value={{
      count,
      setCount,
      timeLoaded,
      setTimeLoaded
    }}>
      {props.children}
    </CounterContext.Provider>
  );
}
export { CounterContext, CounterProvider };