import React, {useState} from 'react'
function Counter() {
    
    const [count, setCout] = useState(0);

    const increament = ()=>{
        setCout(count+1);
    }

    return (

        <>
            <div className='container'>
                <button className='btn' onClick={increament}>Count: {count}</button>
                
            </div>
        
        
        </>

    );
}

export default Counter