
import { useLayoutEffect, useState } from 'react'
import './App.css'
import { Sum } from './components/Sum';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const result = Sum(4 * count + count2)

  useLayoutEffect(() => {
    console.log("count", count);
  }, [count])

  return (
    <article
      className="App"
      value={count}>
      <h2>Количество: {count}</h2>
      <h2>+100: {count2}</h2>
      <button onClick={() => {
        setCount((prev) => prev - 1)
      }}>
        Уменьшить
      </button>
      <button onClick={() => {
        setCount((prev) => prev + 1)
      }}>
        Увеличть
      </button>
      <button onClick={() => {
        setCount2((prev) => prev + 100)
      }}>
        +100
      </button>
    </article >
  )
}

export default App
