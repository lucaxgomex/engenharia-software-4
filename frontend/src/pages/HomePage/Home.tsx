//import { fetchProfessores } from './services/api-fetch';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';
import TabComponent from '../../components/TabComponent/TabComponent';
import './Home.css';

const Home: React.FC = () => {
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

export default Home;