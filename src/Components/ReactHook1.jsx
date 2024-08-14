import React, { useState } from 'react'


function ReactHook1() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1000000)}>
                Click me
            </button>
        </div>
    )
}

export default ReactHook1
