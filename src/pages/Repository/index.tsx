import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Container, RepositoryHeader, RespositoryInfo, ContainerHeader, Issues } from './styles';
import Logo from '../../assets/images/logo-site.svg';
import api from '../../services/api';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    }
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    }
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        api.get(`repos/${params.repository}`).then(response => {
            setRepository(response.data);
        });
        api.get(`repos/${params.repository}/issues`).then(response => {
            setIssues(response.data);
        });
    }, [params.repository]); //eslint-disable-line


    return (
        <>

            <Container>
                <img src={Logo} alt="Github Explorer" />
                <Link to={'/'}><FiChevronLeft size={26} /><strong>Voltar</strong></Link>
            </Container>

            <ContainerHeader>
                {repository && (
                    <>
                        <RepositoryHeader>
                            <img src="https://avatars1.githubusercontent.com/u/14322173?v=4" alt="Jander Nery" />

                            <div>
                                <h1>Repository: {params.repository}</h1>
                                <p>{repository.description}</p>
                            </div>
                        </RepositoryHeader>
                        <RespositoryInfo>
                            <ul>
                                <li>
                                    <strong>{repository.stargazers_count}</strong>
                                    <span>Stars</span>
                                </li>
                                <li>
                                    <strong>{repository.forks_count}</strong>
                                    <span>Forks</span>
                                </li>
                                <li>
                                    <strong>{repository.open_issues_count}</strong>
                                    <span>Issues Abertas</span>
                                </li>
                            </ul>
                        </RespositoryInfo>
                    </>
                )}
            </ContainerHeader>

            <Issues>
                {issues.map(issue => (
                    <a target="_blank" rel="noopener noreferrer" key={issue.id} href={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                             <p>{ issue.user.login}</p>
                        </div>
                        <FiChevronRight size={24} />
                    </a>
                ))}
            </Issues>


        </>
    )
}

export default Repository;