import React, { useState } from 'react'

import useRangeInput from '../../CustomHooks/useRangeInput'

import './CustomForm.css'

export default ({ configBreathing }) => {

    const [timeProps] = useRangeInput({max:60, step:1, initialValue:30})
    const [inhaleProps] = useRangeInput({})
    const [exhaleProps] = useRangeInput({})
    const [inhaleHoldProps] = useRangeInput({max:10, min:0, initialValue:0})
    const [exhaleHoldProps] = useRangeInput({max:10, min:0, initialValue:0})

    const handleSimitForm = (e) => {
        e.preventDefault()

        configBreathing({
            timeAmount: parseFloat(timeProps.value),
            inhale: parseFloat(inhaleProps.value),
            exhale: parseFloat(exhaleProps.value),
            inhaleHold: parseFloat(inhaleHoldProps.value),
            exhaleHold: parseFloat(exhaleHoldProps.value)
        })
    }

    return (
        <form className="custom-form" onSubmit={handleSimitForm}>
            <h2>Custom</h2>
            <div className="form__group">
                <label>Time: {timeProps.value} s </label>
                <input type="range" {...timeProps}/>
            </div>

            <div className="form__group">
                <label>Inhale: {inhaleProps.value} s</label>
                <input 
                    {...inhaleProps}
                    type="range" 
                />

            </div>

            <div className="form__group">
                <label>Inhale hold: {inhaleHoldProps.value} s</label>
                <input
                    {...inhaleHoldProps} 
                    type="range" />
            </div>

            <div className="form__group">
                <label>Exhale: {exhaleProps.value} s</label>
                <input 
                    {...exhaleProps}
                    type="range" 
                />
            </div>
            <div className="form__group">
                <label>Exhale hold: {exhaleHoldProps.value} s</label>
                <input
                    {...exhaleHoldProps} 
                    type="range" />
            </div>
            <button className="form__btn">Start</button>
        </form>
    )
}