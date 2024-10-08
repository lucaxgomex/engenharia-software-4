//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const ProfessorFormTest: React.FC = () => {
  
  let navigate = useNavigate(); 

  const routeChange = () => { 
    let path = `list/teachers`; 
    navigate(path);
  }

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    window.alert(email);
    /*
    try {
      const response = await axios.post("http://localhost:3100/teachers", {
        name,
        email
      });
      
      console.log("Professor cadastrado:", response.data);
      window.alert("Professor cadastrador com sucesso!");

      setName("");
      setEmail("")
    }  catch (error) {
      window.alert(error);
    }
    */
  }

  // Testing function
  function cadastrarUsuario(e: React.FormEvent) {
    e.preventDefault();
    
    console.log(`Resposta: ${nameTest}`);
    window.alert(nameTest);
  } 
  
  const [ nameTest, setNameTest ] = useState<string>('');

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Aba de Teste
        </h2>
      </div>
  
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form /*onSubmit={handleSubmit}*/ onSubmit={ handleSubmit } action="#" method="POST" className="space-y-6">

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Nome
              </label>
            </div>
            <div className="mt-2">
              <input
                id="nameTest"
                name="nameTest"
                type="nameTest"
                //required
                autoComplete="current-password"
                className="pl-[15px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-10 outline-none"
                placeholder='Adicione seu nome'
                onChange={
                  (e) => setName(e.target.value.toString())
                }
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium leading-6 text-gray-900 flex items-center justify-between">
              E-mail
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                //required
                autoComplete="email"
                className="pl-[15px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-10 outline-none"
                placeholder="Adicione seu e-mail"
                onChange={
                  (e) => setEmail(e.target.value.toString())
                }
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={
                () => {
                  window.alert('Alert Window');
                }
              }
            >
              Cadastrar - Alert
            </button>

            <button
              type="submit"
              className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={ routeChange }
            >
              Visualizar
            </button>

            <button
              type="submit"
              className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Teste
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfessorFormTest;
    