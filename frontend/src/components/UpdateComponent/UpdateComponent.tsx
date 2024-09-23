import React, { useState } from 'react';
import axios from 'axios';

const UpdateUserForm: React.FC<{ userId: number }> = ({ userId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3100/professores/${userId}`, {
        name,
        email,
      });
      console.log('Usuário atualizado:', response.data);
      // Resetar os campos ou dar feedback
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <div>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Atualizar</button>
    </form>
  );
};

export default UpdateUserForm;
