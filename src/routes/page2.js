import React, { useContext } from 'react'
import { CounterContext } from '../service/context';

const Page2 = () => {
  const { count, setCount} = useContext(CounterContext);
  return (
    <div>
      <div>Page2</div>
      <div>This Count: {count}</div>
      <button onClick = {() => setCount(count + 1)} >increment</button>
      <button onClick = {() => setCount(count - 1)} >decrement</button>
    </div>
  )
}

export default Page2