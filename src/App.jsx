
import { useLayoutEffect, useState, useMemo, useEffect, useCallback } from 'react'
import './App.css'
import { Sum } from './components/Sum';
import { ReactMemo } from './components/ReactMemo';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // const [arr, setArray] = useState([{ id: 1, title: "AZA" }, { id: 2, title: "USUP" }])

  // useLayoutEffect(() => {
  //   setArray(arr)
  //   console.log("useEffectLayout", arr);
  // }, [arr])

  // useMemo(() => {
  //   setArray(arr)
  //   console.log("useMemo", arr);
  // }, [arr])

  // useLayoutEffect,useEffect и useMemo оба работают одинаково - перерендеринг происходит каждый раз при изменении [массива]




  // const callBack = useCallback(() => {
  //   setArray(arr);
  //   console.log("useCallBack", arr);
  // }, [arr])
  // console.log(callBack(arr));

  // useCallback работает не так как useLayoutEffect,useEffect и useMemo
  // useCallback не предназначен для перепендеринга [массивов]
  // useCallback делает это бесконечное количество раз и выдается лимит об ошибке




  // const usememo = useMemo(() => (Sum(4 * count + count2), console.log("useMemoM")), [count2])
  // const callback = useCallback(() => (Sum(4 * count + count2), console.log("CALLBackC")), [count])

  // useLayoutEffect(() => {
  //   console.log("useMemo", usememo);
  // }, [usememo])

  // useLayoutEffect(() => {
  //   console.log("CALLBack", callback());
  // }, [callback])

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
      <ReactMemo count={count} />
    </article >
  )
}

export default App
