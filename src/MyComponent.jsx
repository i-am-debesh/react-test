import React, {useState} from 'react'

function MyComponent() {
    let [name, setName] = useState("Guest");
    let [age, setAge] = useState(0);
    let [isEmployed, setIsEmployed] = useState(false);
    const updateName = ()=> {

        setName("Debesh");
        
    }

    const increamentAge = () => {
        setAge(age + 1);

    }

    const updateEmployment = () => {
        setIsEmployed(!isEmployed);
    }
    return (
    
        <div>
            <p>Name: {name}</p>
            <button onClick= {updateName}>set name</button>
            
            <p>Age: {age}</p>
            <button onClick= {increamentAge}>set name</button>
            
            <p>IsEmployed: {isEmployed ? "Yes":"No"}</p>
            <button onClick= {updateEmployment}>Set Employment</button>
        </div>
    
    );
};

export default MyComponent