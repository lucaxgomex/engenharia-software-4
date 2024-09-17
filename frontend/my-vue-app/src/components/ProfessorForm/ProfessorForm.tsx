import axios from 'axios';
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

  /*
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Professor cadastrado:', professor);
  };
  */
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:3100/teachers", {
        name,
        email,
      });

      console.log("Professor cadastrado:", response.data);
      alert("Professor cadastrado com sucesso!");

      // Limpar os campos do formulário após o envio
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Erro ao cadastrar o professor:", error);
      alert("Erro ao cadastrar o professor.");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Aba de Cadastro de Professores
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6">
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Nome
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="pl-[15px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-10 outline-none"
                    placeholder='Adicione seu nome'
                    onChange={handleChange}
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 flex items-center justify-between">
                  E-mail
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="pl-[15px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-10 outline-none"
                    placeholder="Adicione seu e-mail"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cadastrar
                </button>
              </div>

            </form>
          </div>
        </div>
  );
};

export default ProfessorForm;
    