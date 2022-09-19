import './styles/App.css';
import TaskList from './components/TaskList';
import logo from "./images/logo.jpg";


function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} alt='App Logo' className='img-fluid' />
        <h2>Mi gestor de tareas con React.js</h2>
        <TaskList />        
      </div>         
      

    </div>
  );
}

export default App;
