import '../styles/TaskList.css';
import { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';

const TaskList = () => {

    const [tasksList, setTasksList] = useState([]);

    const addNewTask = (task) => {
        if(task.title){
            const updatedTasksList = [task, ...tasksList];
            setTasksList(updatedTasksList);
        }
    }

    const deleteTask = (id) => {
        const updatedTasksList =tasksList.filter((task) => task.id !== id);
        setTasksList(updatedTasksList)
    }

    const deleteCompleted = () => {
        if(tasksList.length !== 0){
            const confirma = window.confirm("Seguro desea eliminar todas las tareas completadas?");
            if(confirma){
                const updatedTasksList = tasksList.filter((task) => !task.completed);
                setTasksList(updatedTasksList);
            }
            
        }
    }

    const toggleStatus = (id) => {
        const updatedTasks = tasksList.map((task) => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasksList(updatedTasks);
    }

    return(
        <div>
            <TaskForm addTask={addNewTask} deleteCompleted={deleteCompleted} tasksList={tasksList} />

            {
                tasksList.map((task) => {
                    return(
                        <Task 
                            id={task.id} 
                            title = {task.title}
                            completed = {task.completed}         
                            deleteTask = {deleteTask}         
                            toggleStatus = {toggleStatus}      
                        />
                    );
                })
                
            }
        </div>

    );
}

export default TaskList;