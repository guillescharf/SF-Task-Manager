import '../styles/Task.css';

const Task = ({id, title, completed, deleteTask, toggleStatus}) => {
    let btn_class = completed ? 'btn btn-secondary ' : 'btn btn-success ';
    btn_class += "text-lg-start text-sm-center rounded-pill";
    const btn_text = completed ? 'Marcar como pendiente' : 'Marcar como completada';
    let task_style = 'task row border border-3 border-success rounded-pill bg-white align-items-center ';
    task_style += completed && ' opacity-50 text-decoration-line-through';
    return(
        <div className={task_style} key={id}>         
            <div className='col-lg-6 text-lg-start text-sm-center fw-semibold col-sm-12'>
                <span title={`ID: ${id}`} key={id} >{title}</span>
            </div>
            <div className='col-lg-4 col-sm-6 mb-2 mb-md-0'>
                <button onClick={ () => { toggleStatus(id)}} title={btn_text} className={btn_class}>{btn_text}</button>
            </div>     
            <div className='col-lg-2 col-sm-6 mb-2 mb-md-0'>
                <button onClick={ () => { deleteTask(id)}} className="btn btn-danger rounded-pill">Eliminar</button>
            </div>                  
        </div>
        
    );
}
export default Task;