import React,{ useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrimentFive = () => {
        for(let i = 0; i < 5; i++) {
            setCount(preCount => preCount + 1)
        }
    }
  return (
    <div>
        Count : {count}
        <div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Incriment</button>
        <button onClick={() => setCount(count - 1)}>Decriment</button>
        <button onClick={incrimentFive}>Incriment Five</button>
    </div>
    </div>
  )
}

export default HookCounterTwo