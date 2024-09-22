import { useState, useEffect } from 'react';
import { Professor } from '../../../interfaces/professor.interfaces';
import axios from 'axios';

const ListProfessoresComponent: React.FC = () => {
    const [users, setUsers] = useState<Professor[]>([]);

    useEffect(() => {
        axios.get('https:127.0.0.1:3100/teachers')
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
            <h1>Lista de Alunos</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        Nome: { user.name }, E-mail: { user.email }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListProfessoresComponent;