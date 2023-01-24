import { useState } from 'react'
import'./CounterApp.css'



const CounterApp = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
        
    }

    const reset = () => {
        setCount(0)
    }

    const decrement = () => {
        setCount(count - 1)
    }
       
    
    return (
        <div className='main-container'>
            <div className='sub-container'>
                <h1>Counter-Application</h1>
                   <p className="para">{ count}</p>
                <div className='button-container'>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={reset}>Reset</button>
                    <button onClick={increment}>Increment</button>
                </div>
            </div>
        </div>
            ) 
        }
export default CounterApp
            
          
            

     

    

    

