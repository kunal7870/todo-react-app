import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const todostring = localStorage.getItem("todos");
    if (todostring) {
      setTodos(JSON.parse(todostring));
    }
  }, []);

  const saveToLs = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleEdit = (e, id) => {
    const selected = todos.find(item => item.id === id);
    setTodo(selected.todo);
    setTodos(todos.filter(item => item.id !== id));
    saveToLs();
  };

  const handleDelete = (e, id) => {
    setTodos(todos.filter(item => item.id !== id));
    saveToLs();
  };

  const handleAdd = () => {
    if (todo.trim() === "") return;
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    setTodo("");
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const index = todos.findIndex(item => item.id === id);
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLs();
  };

  return (
    <>
      <Navbar />
      <div className='container flex pt-20 p-6 min-w-full bg-violet-200 dark:bg-zinc-900 min-h-[92vh] transition-all duration-300'>
        <div className="w-full">

          <div className="addtodo">
            <h2 className='text-2xl font-semibold mb-4 text-violet-950 dark:text-violet-200'>Add a Task</h2>
            <div className="flex items-center gap-4 mb-6">
              <input
                onChange={handleChange}
                value={todo}
                type="text"
                placeholder="Enter a task..."
                className="w-1/2 p-2 rounded-md border border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300 dark:bg-zinc-800 dark:text-white"
              />
              <button
                onClick={handleAdd}
                className="bg-violet-800 hover:bg-violet-700 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105"
              >
                Save
              </button>
            </div>
          </div>

          <h2 className='text-xl font-semibold mb-4 text-violet-950 dark:text-violet-200'>Your Tasks</h2>
          <div className="todos space-y-4">
            {todos.length === 0 && (
              <div className="text-gray-600 dark:text-gray-400"> ; ) No tasks to display</div>
            )}
            {todos.map(item => (
              <div
                key={item.id}
                className="todo flex items-center justify-between w-full md:w-2/3 bg-white dark:bg-zinc-800 p-4 rounded-md shadow transition-all duration-500 hover:scale-[1.01] animate-fadeIn"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    onChange={handleCheckbox}
                    name={item.id}
                    checked={item.isCompleted}
                    className="accent-violet-800 w-5 h-5"
                  />
                  <span className={`text-lg ${item.isCompleted ? "line-through text-gray-400" : "text-zinc-800 dark:text-white"}`}>
                    {item.todo}
                  </span>
                </div>
                <div className="buttons flex gap-2">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md transition-transform transform hover:scale-105"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-transform transform hover:scale-105"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
