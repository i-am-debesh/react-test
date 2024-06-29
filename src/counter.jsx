import React, {useState} from 'react'
function Counter() {
    
    const [count, setCout] = useState(0);

    const increament = ()=>{
        setCout(count+1);
    }
    const resetCount = () => {
        setCout(0);
    }

    return (

        <>
            <div className='container'>
                <button className='btn' onClick={increament}>Count: {count}</button>
                <div>
                    <button className='reset-btn' onClick={resetCount}>Reset</button>
                </div>
            </div>
        
        
        </>

    );
}

export default Counter