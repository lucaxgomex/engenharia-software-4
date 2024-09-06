import React, { useState } from 'react';

interface Aluno {
  nome: string;
  email: string;
}

const AlunoForm: React.FC = () => {
  const [aluno, setAluno] = useState<Aluno>({
    nome: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAluno({
      ...aluno,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Aluno cadastrado:', aluno);
  };

  return (
    <div>
      <h2>Cadastrar Aluno</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={aluno.nome} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={aluno.email} onChange={handleChange} required />
        </div>
        <button type="submit">Cadastrar</button>
        <button type="submit">Visualizar</button>
      </form>
    </div>
  );
};

export default AlunoForm;
