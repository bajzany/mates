import React, {useState} from 'react'


export const TestComponent = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    )
}
