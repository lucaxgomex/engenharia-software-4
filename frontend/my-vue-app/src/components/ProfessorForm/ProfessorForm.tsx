import React, { useState } from 'react';

interface Professor {
  nome: string;
  email: string;
  idade: number;
}

const ProfessorForm: React.FC = () => {
  const [professor, setProfessor] = useState<Professor>({
    nome: '',
    email: '',
    idade: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfessor({
      ...professor,
      [name]: name === 'idade' ? parseInt(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Professor cadastrado:', professor);
  };

  return (
    <div>
      <h2>Cadastrar Professor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={professor.nome} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={professor.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Idade:</label>
          <input type="number" name="idade" value={professor.idade} onChange={handleChange} required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default ProfessorForm;
    