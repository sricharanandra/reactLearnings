import react, {useState} from 'react'

function Counter() {

    const [ count, setCount ] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }
    
    return (
            <div className='counter'>
                <h1 className='countDisplay'>{count}</h1>
                <button className='button' onClick={increment}>Increment</button>
                <button className='button' onClick={reset}>Reset</button>
                <button className='button' onClick={decrement}>Decrement</button>
                
            </div>
    )
}

export default Counter