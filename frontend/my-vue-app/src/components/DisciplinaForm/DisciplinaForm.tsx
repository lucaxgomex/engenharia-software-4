import React, { useState } from 'react';

interface Disciplina {
  nome: string;
}

const DisciplinaForm: React.FC = () => {
  const [disciplina, setDisciplina] = useState<Disciplina>({
    nome: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDisciplina({
      ...disciplina,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Disciplina cadastrada:', disciplina);
  };

  return (
    <div>
      <h2>Cadastrar Disciplina</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={disciplina.nome} onChange={handleChange} required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default DisciplinaForm;
