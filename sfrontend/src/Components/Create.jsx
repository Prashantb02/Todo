import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const [task,setTask] = useState('')
    const [details,setDetails] = useState('')
    const navigate = useNavigate()

    const sendData = async (e) =>{
        e.preventDefault()
        await axios.post('http://localhost:3000/api/',{task:task,details:details})
        alert('Task Added Successfully!!')
        navigate('/')
    }

    
  return (
    <div>
        <button onClick={()=>{navigate('/')}}>Go To Home</button>
      <form onSubmit={sendData}>
        <label>Task</label>
        <input type='text' placeholder='Enter your Task Here...' value={task}  onChange={(e)=>{setTask(e.target.value)}} />
        <label>Details</label>
        <input type='text' placeholder='Enter task details' value={details} onChange={(e)=>{setDetails(e.target.value)}}/>
        <input type='submit' value={"Add"} />
      </form>
    </div>
  )
}

export default Create
