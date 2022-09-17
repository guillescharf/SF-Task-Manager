import './styles/App.css';
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="App">
      <div className="container">
        <img src='../images/logo.jpg' alt='App Logo' />
        <h2>Mi gestor de tareas con React.js</h2>
        <TaskList />        
      </div>         
      

    </div>
  );
}

export default App;
