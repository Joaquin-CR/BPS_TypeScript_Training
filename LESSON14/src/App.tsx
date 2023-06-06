import { useState } from 'react'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </>
  )
}

export default App
