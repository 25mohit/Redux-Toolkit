import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, add2 } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const [incremenetByValue, setIncremenetByValue] = useState(0)

  return (
    <section>
        <p>{ count }</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(add2())}>Add 2</button>
        </div>
        <input type="text" value={incremenetByValue} onChange={e => setIncremenetByValue(e.target.value)}/>
        <div>

        </div>
    </section>
  )
}

export default Counter