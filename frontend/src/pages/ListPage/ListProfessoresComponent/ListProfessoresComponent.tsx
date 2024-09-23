import { useState, useEffect } from 'react';
import { Professor } from '../../../interfaces/professor.interfaces';
import profile from '../../../img/favicon/favicon-32x32.png';
import axios from 'axios';

const ListProfessoresComponent: React.FC = () => {
    const [users, setUsers] = useState<Professor[]>([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3100/professores')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
            console.error(error);
            window.alert(`Erro ao buscar professores ${error}`);
        })
    }, []);

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
            <ul className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8" src={ profile } alt="Neil image"/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-indigo-600 truncat">
                                {users.map(user => (
                                    <li key={ user.id }>
                                        { user.name }
                                    </li>
                                ))}
                            </p>

                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                {users.map(user => (
                                    <li key={ user.id }>
                                        Nome: { user.email }
                                    </li>
                                ))}
                            </p>
                        </div>

                        <div className="inline-flex items-center text-base font-semibold text-gray-900">
                            ???????????????????????????????????????
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ListProfessoresComponent;

/*
<div>
            <h1>Lista de Alunos</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        Nome: { user.name }, E-mail: { user.email }
                    </li>
                ))}
            </ul>
        </div>

*/