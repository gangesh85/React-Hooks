import React, { useState } from 'react'
import MouseCounter from './MouseCounter'

function MouseCounterTwo() {

    const [display, setDisplay] = useState(true)

    return(
        <div>
            <button onClick={() => setDisplay(!display)}>Toggel display</button>
            {display && <MouseCounter />}
        </div>
    )
}
export default MouseCounterTwo