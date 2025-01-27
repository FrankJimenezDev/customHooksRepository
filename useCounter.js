import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        
        setCounter(counter + value)
    }

    const decrement = (value) => {
        if (counter === 1) return;

        if (typeof value === 'number') {
            setCounter(counter - value)
        }

        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}