import {useState} from "react"


const StateScreen = () => {

//   let count = 0  

    let [count, setCount] = useState(0)

    const [students, setStudents] = useState([])

    const [inputData, setInputData] = useState("")

    return (
        <div>
            <h1>We are learning about state</h1>
            <button 
                onClick={()=>{
                    setCount((prevCount)=>{
                        return prevCount + 1
                    })
                    console.log("Count is ",count)
                }}
            >+</button>
            <p>Count is {count}</p>
            <button 
                onClick={()=>{
                    setCount(count-1)
                    console.log("Count is ",count)
                }}
            >-</button>
            <div>
                <p>{inputData}</p>
                <input onChange={(e)=>{
                    setInputData(e.target.value)
                }} type="text" placeholder="Enter Student Name"/>
                <button onClick={()=>{
                    setStudents((prevValue)=>{
                        return [...prevValue, inputData]
                    })
                }}>ADD</button>
            </div>
            <div>
                {students.map(name=><p>{name}</p>)}
            </div>
        </div>
    )

}

export default StateScreen