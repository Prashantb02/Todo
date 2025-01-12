import React, { useEffect, useState } from 'react'
import './ToGet.css'
import axios from 'axios'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


import { useNavigate } from 'react-router-dom';


const ToGet = () => {
  const [todo, setTodo] = useState([])

  const getData = async () => {
    const res = await axios.get('http://localhost:3000/api/')

    //console.log(res.data)
    setTodo(res.data)
  }

  useEffect(() => {
    getData()  //ckal kr rhe he yha pr so used useffect
  }, [])

  const navigate = useNavigate()

  // console.log(todo)

  return (

    <div >
      <h1>Our ToDo List</h1>
      {/* <h1>Map Method</h1> */}
      <button onClick={()=>{navigate('/create')}}>Add ToDo</button>
      <div id='todobox'>
      {
        todo.map((y) => {
          //  console.log(y)
          return (
            <div id='todo' key={y._id} >
              <h2>{y.task}</h2>
              <h4>{y.details}</h4>
              <button style={{background:'blue',border:'none',width:'6rem'}} onClick={()=>{navigate(`/update/${y._id}`)}}><MdEdit size={35} /></button>
              <button style={{background:'delete',border:'none',width:'6rem'}}><MdDelete size={35} /></button>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default ToGet





