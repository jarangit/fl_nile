import React, { useContext } from 'react'
import { CounterContext } from '../service/context'
const Page3 = () => {
  const {timeLoaded, count, } = useContext(CounterContext)
 
  return (
    <div>
      <div>Page3</div>
      <div>This is count form second page: {count}</div>
      <div>This time load: {timeLoaded} ms</div>
    </div>
  )
}

export default Page3