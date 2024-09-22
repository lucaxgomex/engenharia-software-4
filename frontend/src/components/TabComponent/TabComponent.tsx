import React, { useState } from 'react';
import AlunoForm from '../AlunoForm/AlunoForm';
import DisciplinaForm from '../DisciplinaForm/DisciplinaForm';
import ProfessorForm from '../ProfessorForm/ProfessorForm';
import ProfessorFormTest from '../../tests/componentes/ProfessorForm/ProfessorFormTest';

// Tipos para as abas
type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  // Estado para armazenar a aba ativa
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Função para alternar entre as abas
  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      {/* Renderização dos botões das abas */}
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            style={{
              padding: '10px 20px',
              marginRight: '5px',
              cursor: 'pointer',
              borderBottom: activeTabIndex === index ? '2px solid black' : 'none',
              borderColor: activeTabIndex === index ? 'blueviolet' : 'white'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Renderização do conteúdo da aba ativa */}
      <div style={{ padding: '20px', border: '1px solid #ddd' }}>
        {tabs[activeTabIndex].content}
      </div>
    </div>
  );
};

// Exemplo de uso do componente Tabs
const TabComponent: React.FC = () => {
  return (
    <Tabs
      tabs={[
        { label: 'Professor', 
          content: [
            <DisciplinaForm/>,
            <ProfessorForm/>,
            <ProfessorFormTest/>
          ]
        },

        { label: 'Aluno', 
          content: 
            <AlunoForm/>
          },
      ]}
    />
  );
};

export default TabComponent;