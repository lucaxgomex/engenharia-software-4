//import { fetchProfessores } from './services/api-fetch';
import { FooterComponent } from './components/FooterComponent/FooterComponent';
import './App.css';

/*
import React from 'react';
import ProfessorForm from './components/ProfessorForm'; 
import AlunoForm from './components/AlunoForm';
import DisciplinaForm from './components/DisciplinaForm';
*/

import TabComponent from './components/TabComponent/TabComponent';

const App: React.FC = () => {
  return (
    <div style={{ margin: '0 auto', padding: '20px', }}>
      <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indig-900">
        Sistema de Cadastro
      </h1>
        {/* 
          <ProfessorForm/>
          <AlunoForm/>
          <DisciplinaForm/>
        */}
        <TabComponent/>
        <FooterComponent/>
    </div>
  );
};

export default App;

/*

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Formulario Estudantil</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
