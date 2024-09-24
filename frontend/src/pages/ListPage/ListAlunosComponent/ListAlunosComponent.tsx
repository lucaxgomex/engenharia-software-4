import { useState, useEffect } from 'react';
import { Aluno } from '../../../interfaces/aluno.interfaces';
import UpdateUserForm from '../../../components/UpdateComponent/UpdateComponent';
import profile from '../../../img/favicon/favicon-32x32.png';
import axios from 'axios';

const ListAlunosComponent: React.FC = () => {
    const [users, setUsers] = useState<Aluno[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:3100/alunos')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
            console.error(error);
            window.alert(`Erro ao buscar alunos ${error}`);
        })
    }, []);

    const handleUpdateClick = (userId: number) => {
        setSelectedUserId(userId);
    };

    const handleDeleteClick = async (userId: number) => {
        try {
          await axios.delete(`http://localhost:3100//alunos/${userId}`);
          // Atualizar a lista de usuários
          setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
          window.alert(error    );
        }
      };

    // Adicionando a rota GET
    // Resposta alternativa
    /*
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const response = await axios.get<Professor[]>('http://localhost:3000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
        };

        fetchUsers();
    }, []);
    */

    return (
        <div>
            <h1>
                Listagem de Estudantes
            </h1>
            <ul className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                {(() => {
                    const items = [];
                    for (let i = 0; i < users.length; i++) {
                        const user = users[i];
                        items.push(
                            <li key={user.id} className="flex flex-col pb-3 sm:pb-20 rounded-md bg-gray-100">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8" src={ profile } alt="Neil image"/>
                                    </div>
                        
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-black-700 truncat">
                                            { user.name }
                                        </p>

                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            { user.email }
                                        </p>
                                    </div>

                                    <div className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        <button onClick={ () => { handleUpdateClick(user.id) } }>Editar</button>
                                    </div>

                                    <div className="flex justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        <button onClick={ () => { handleDeleteClick(user.id)} } >Excluir</button>
                                    </div>
                                </div>
                            </li>
                        );
                    }
                    return items;
                })()}
            </ul>
            { selectedUserId && <UpdateUserForm userId={ selectedUserId }/> }
        </div>
    );
}

export default ListAlunosComponent;