import { useState, useEffect } from 'react';
import axios from 'axios';


function ListAlunosComponent() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https:127.0.0.1:3100/teachers/get-info')
        .then(response => {
          setUsers(response.data);
          setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        })
    }, []);
    
    if (loading) {
        return <div>Carregando...</div>
    }

    return (
        <div>
            <h1>Lista de Alunos</h1>
            <ul>
                { users.map(users => (
                    <li> {users} </li>
                )) }
            </ul>
        </div>
    );
}

export default ListAlunosComponent;