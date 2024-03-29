import './App.css';
import todoLogo from './imagenes/logo2.png';

// componentes
import Header from './componentes/header';
// import Tarea from './componentes/Tarea';
// import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='app'>
      <Header/>
      <div className='listaDeTareasPrincipal'>
        <h1>Aca va lo que no hiciste por vago y atorrante</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
