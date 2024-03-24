import React, {useState} from 'react';

function MyComponent () {
 
    const [ name , setName ] = useState("Guest");
    const [ age , setAge ] = useState(0);
    const [ isEmployed, setEmployment ] = useState(false);
 
    const updateName =() => {
        setName("Sricharan")
    }

    const updateAge = () => {
        setAge(age + 1)
    }

    const toggleStatus = () => {
            setEmployment(!isEmployed)
    }


    return (
          
                <div>
                    <p>Name: {name} </p>
                    <button onClick = {updateName}>Set Name</button>

                    <p>Age: {age}</p>
                    <button onClick = {updateAge} >Set Age</button>
                    
                    <p>Employment Status: {isEmployed ? "Employed" : "Unemployed"}</p>
                    <button onClick = {toggleStatus} >Toggle Status</button>

                </div> 
    )

}

export default MyComponent