import '../styles/TaskForm.css';
import { useState } from 'react';
import { v4 as newUUID } from 'uuid';

const TaskForm = ({addTask}) => {

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(newTaskTitle.trim()){
            const newTask = {
                id : newUUID(),
                title : newTaskTitle.trim(),
                completed : false
            }
            addTask(newTask);
            e.target.reset();
            setNewTaskTitle('');
        }else{
            alert('No puede crearse una tarea vacía');
        }
    }

    const handleChange = (e) => {
        setNewTaskTitle(e.target.value.trim());
    }

    return(
        <div className="TaskFormContainer d-inline-flex justify-content-center">
            <form onSubmit={handleSubmit} className=''>
                <input type="text" 
                    name='newTaskInput' 
                    placeholder='Describa su tarea' 
                    className='form-control'
                    onChange={handleChange}
                />

                <button className='btn btn-primary'>Agregar Tarea</button>

            </form>


        </div>
    );

}

export default TaskForm;