import {RepositoryItem} from './RepositoryItem';

const repository = {
    name: 'Repo Joao',
    description: 'Joao Repository',
    link: 'https://github.com'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    );
}