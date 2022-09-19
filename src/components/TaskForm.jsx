import '../styles/TaskForm.css';
import { useState } from 'react';
import { v4 as newUUID } from 'uuid';

const TaskForm = ({addTask, tasksList, deleteCompleted}) => {

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
    const iscompleted = (task) => {
        return (task.completed === true);
    }    

    const handleChange = (e) => {
        if(e.keyCode === 13) handleSubmit();
        setNewTaskTitle(e.target.value.trim());
    }

    return(
        <fragment>
            <div className="d-inline-flex justify-content-center w-100">
                <form onSubmit={handleSubmit} className='TaskFormContainer container-fluid'>
                    <input type="text" 
                        name='newTaskInput' 
                        placeholder='Describa su tarea' 
                        className='form-control w-100 mb-3'
                        autoFocus
                        onChange={handleChange}
                    />

                    <button className='btn btn-primary'>Agregar Tarea</button>

                </form>


            </div>
            <div className='w-100 d-flex justify-content-center justify-content-md-end'>
                    <button 
                    className={`btn btn-danger btn-sm align-self-end ${(tasksList.find(iscompleted)) ? '' : 'disabled'}`}
                    onClick={deleteCompleted}>
                        Borrar completadas
                    </button>
                </div>         
        </fragment>
    );

}

export default TaskForm;