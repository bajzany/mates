import React, {useState} from 'react'


export const ChangeColorComponent = () => {
    const [color, setColor] = useState('white')

    return (
        <div>
            <div style={{ width: 100, height: 100, backgroundColor: color }}>
                {color}
            </div>
            <input type={'text'} onChange={(e) => {
                const value = e.target.value
                setColor(value)
            }}/>
        </div>
    )
}
