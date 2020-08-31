import React, { useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories, Error } from './styles';
import Logo from '../../assets/images/logo-site.svg';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dasboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storageRepositories = localStorage.getItem('@GithubExplorer:respositories');

        if(storageRepositories){
            return JSON.parse(storageRepositories);
        }else{
            return [];
        }
    });
    const [inputError, setInputError] = useState('');


    useEffect(() => {
        localStorage.setItem('@GithubExplorer:respositories', JSON.stringify(repositories));
    },[repositories]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);

            const repository = response.data;

            //console.log(repository)

            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        }catch(Err){
            setInputError('Erro na busca por esse repositório');
        }
    }
    return (
        <>
            <img src={Logo} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form
                hasError={!!inputError}
                onSubmit={handleAddRepository}
                
            >

                <input
                    type="text"
                    placeholder="Digite o Nome do Repositório"
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                />
                <button type="submit">Pesquisar</button>


            </Form>

            {inputError && <Error><strong>{ inputError }</strong></Error>}

            <Repositories>
                {repositories.map(repository => (
                    <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                        <img
                            alt={repository.owner.login}
                            src={repository.owner.avatar_url}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={24} />
                    </Link>
                ))}
            </Repositories>


        </>
    )
};

export default Dasboard;