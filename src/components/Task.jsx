import '../styles/Task.css';

const Task = ({id, title, completed, deleteTask, toggleStatus}) => {
    const btn_class = completed ? 'btn btn-secondary rounded-pill' : 'btn btn-success rounded-pill';
    const btn_text = completed ? 'Marcar como pendiente' : 'Marcar como completada';
    let task_style = 'task row border border-3 border-success rounded-pill bg-white ';
    task_style += completed && ' opacity-50';
    return(
        <div className={task_style} key={id}>
            <div className='col-1 h-100'>
                <span title={`ID: ${id}`} key={id} >{id.substr(0,7)}...</span>
            </div>            
            <div className='col-6 h-100 text-start fw-semibold'>
                <span key={id} >{title}</span>
            </div>
            <div className='col-1 h-100'>
                <button onClick={ () => { deleteTask(id)}} className="btn btn-danger rounded-pill">Eliminar</button>
            </div>
            <div className='col-4 h-100'>
                <button onClick={ () => { toggleStatus(id)}} className={btn_class}>{btn_text}</button>
            </div>           
        </div>
        
    );
}
export default Task;