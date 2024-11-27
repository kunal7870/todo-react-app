import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid'


function App() {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("") //todo and todos are diff. iykyk

  const handleEdit = (e) => {
    e.target.style.color = "black"
  }
  const handleDelete = (e) => {
    e.target.style.color = "black"
  }
  const handleAdd = () => {
    setTodos([...todos,{id:uuidv4() ,todo, isCompleted: false} ])
    setTodo("")
  }
  
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id
    }
    )
    let newtodos = [...todos]
    newtodos[index].isCompleted= !newtodos[index].isCompleted;
    setTodos(newtodos)
  }
  

 
  
 
  return (
    <>
    <Navbar/>
      <div className="container flex flex-col mx-auto my-5 p-5 bg-violet-300 rounded-xl min-h-[90vh]">
        <div className="addtodo">
          <h2 className='text-lg font-bold my-4'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
          <button onClick={handleAdd} className='bg-violet-900 text-white p-2 py-1 mx-2 rounded-sm'>Add</button>
        </div>
        <h2 className='text-lg font-bold my-4'>Your Todos</h2>
        <div className="todos">
          {todos.map(item =>{

          
          return <div key={item.id} className="todo flex w-1/2 justify-between mt-5">
            <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} id="" />
            <div className={item.isCompleted?"line-through":""}>
                  {item.todo}
            </div>
            <div className="buttons flex gap-3">
              <button onClick={handleEdit} className="edit bg-violet-900 text-white p-2 py-1 mx-2 rounded-sm">edit</button>
              <button onClick={handleDelete} className="remove bg-violet-900 text-white p-2 py-1 mx-2 rounded-sm">delete</button>
            </div>
          </div>
          })}

        </div>
      </div>
    </>
  )
}

export default App
