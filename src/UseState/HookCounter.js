import { useState} from 'react'

export const HookCounter = () => {
    const [count, setCount] = useState(0)
    return<button onClick={() => setCount(count + 5)}>count{count}</button>
}