import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext';

function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        createTask({
            title,
            description
        });
        setTitle('')
        setDescription('')
    }

  return (
    <div className='max-w-md mx-auto'>
    <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-lg">
      <h1 className='text-2x1 font-bold text-white mb-3'>Compra de productos</h1>
        <input type="text" placeholder="Escribe tu producto"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
        />
        <input name="" id="" placeholder='Agrega una cantidad'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-slate-300 p-3 w-full mb-2"
        />
        
        <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
    </form>
    </div>
  )
}

export default TaskForm