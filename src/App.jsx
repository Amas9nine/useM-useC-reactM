
import { useLayoutEffect, useState, useMemo, useEffect, useCallback } from 'react'
import './App.css'
import { Sum } from './components/Sum';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const callback = useCallback(() => (Sum(4 * count + count2), console.log("asdasd")), [count2])
  const usememo = useMemo(() => (Sum(4 * count + count2), console.log("asdasd")), [count2])

  useLayoutEffect(() => {
    console.log("CALLBack", callback());
  }, [callback])

  useLayoutEffect(() => {
    console.log("useMemo", usememo);
  }, [usememo])


  return (
    <article className="App" value={count}>
      <h2>Количество: {count}</h2>
      <h2>+100: {count2}</h2>

      <button onClick={() => {
        setCount((prev) => prev - 1)
      }}>
        Уменьшить (setCount)
      </button>

      <button onClick={() => {
        setCount((prev) => prev + 1)
      }}>
        Увеличть (setCount)
      </button>

      <button onClick={() => {
        setCount2((prev) => prev + 100)
      }}>
        +100 (setCount2)
      </button>
    </article >
  )
}

export default App
