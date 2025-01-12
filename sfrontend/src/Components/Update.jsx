import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const [task, setTask] = useState('')
    const [details, setDetails] = useState('')
    const { id } = useParams();
    const navigate = useNavigate()
    

    useEffect(() => {
        
            const getData = async () => {
                try{
                //const { id } = useParams();
        
                const res = await axios.get(`http://localhost:3000/api/${id}`)
                //console.log(res.data)
                setTask(res.data.task)
                setDetails(res.data.details)
            }

        catch(error){
            console.error('Error fetching task',error);
            alert("Error handling task!!")

        }
    };

        getData();
    }, [id]);

    const updateData = async (e) => {
        e.preventDefault()
        try{
            await axios.put(`http://localhost:3000/api/${id}`, { task:task, details:details })
           
            alert("Task Updated Successfully")
            navigate('/')

        }catch(error){
            console.error('Error updating order:', error);
            alert('Error updating order');

        }
            
       

    };


    return (
        <div>
            <button onClick={() => { navigate('/') }}>Go To Home</button>
            <form onSubmit={updateData}>
                <label>Task</label>
                <input value={task} type='text' placeholder='Enter the Task..' onChange={(e) => { setTask(e.target.value) }} />
                <label>Details</label>
                <input value={details} type='text' placeholder='Enter the details of the task..' onChange={(e) => { setDetails(e.target.value) }} />
                <input type='submit' value={"Update Task"} />
            </form>
        </div>
    )
}

export default Update
