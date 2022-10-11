import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, add2, incrementByAmonut } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const [incremenetByValue, setIncremenetByValue] = useState(0)

  const addValue = Number(incremenetByValue) || 0

  const resetAll = () => {
    dispatch(incrementByAmonut(0))
    dispatch(reset())
    setIncremenetByValue(0)
  }

  return (
    <section>
        <p>{ count }</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(add2())}>Add 2</button>
        </div>
        <input type="text" value={incremenetByValue} onChange={e => setIncremenetByValue(e.target.value)}/>
        <div>
            <button onClick={() => dispatch(incrementByAmonut(addValue))}>Add Amount</button>
            <button onClick={() => dispatch(resetAll())}>Reset</button>
        </div>
    </section>
  )
}

export default Counter