import { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
   const timer = setTimeout(() => {
      setCount(prevCount => prevCount + 1)

    }, 1000);
    return () => 
      clearInterval(timer) 
    
  }, [count])
  return (
    <div>
      <span className='timer'>Timer: {count} seconds</span>
    </div>
  )
}

export default App
