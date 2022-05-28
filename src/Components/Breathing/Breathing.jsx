import React, { useEffect, useState } from 'react'

import './Breathing.css'

export default function Breathing({ onStop, data }){

    const [timeAmount, setTimeAmount] = useState(data.timeAmount)
    const [count, setCount] = useState(0)
    const [mov, setMov] = useState('inhale')
    const [holdTxt, setHoldTxt] = useState(false)


    useEffect(()=>{
        const timer = timeAmount > 0 && setInterval(()=>{
                setTimeAmount(timeAmount - 1)
                if(count < data.inhale){
                    setCount(count + 1)
                }else if(count < data.inhale + data.inhaleHold){
                    setCount(count + 1)
                    setHoldTxt(true)
                }else if(count < data.inhale + data.inhaleHold + data.exhale){
                    setHoldTxt(false)
                    setCount(count + 1)
                    setMov('exhale')
                }else if(count < data.inhale + data.inhaleHold + data.exhale + data.exhaleHold){
                    setHoldTxt(true)
                    setCount(count + 1)
                    setMov('exhale')
                }else{
                    setCount(0)
                    setHoldTxt(false)
                    setMov('inhale')
                }
                console.log(count, mov,  data.inhale, data.inhaleHold)
            },1000)
            
        return () => clearInterval(timer)

    },[timeAmount])

    if(timeAmount == 0){
        onStop()
    }

    return (
        <div className="breathing"> 
            <div>
                <h2>breathing </h2>
                {timeAmount}
            </div>
            <div className="conteiner">
                <div 
                    style={
                        {
                            animation: 
                                `${mov} ${mov === 'inhale' ? `${data.inhale}s` : `${data.exhale}s`} forwards`
                        }
                    } 
                    className="animation"
                >
                    {holdTxt ? 'hold' : mov }
                </div>
            </div>
            <div>
                <button onClick={onStop}>Stop</button>
            </div>
        </div>
    )
}