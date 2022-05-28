import React, { useState } from 'react'

export default function useRangeInput({
    initialValue=4, 
    max=15, 
    min=1, 
    step=1
}){
    const [value, setValue] = useState(initialValue)
    return [
        { value, max , min, step, onChange: e => setValue(e.target.value) }
    ]
}