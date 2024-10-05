import { useState } from 'react';
import './index.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Consultar() {
    
    const [lista, setLista] = useState([]);
    const [listacanal, setListacanal] = useState([]);
    const [nome, setNome] = useState([]);  
    const [favorito, setFavorito] = useState([]);  

    async function buscar() {
        const url = 'http://localhost:5010/canal';
        let resp = await axios.get(url);
        setListacanal(resp.data);
    }

    async function programacanal() {
        const url = 'http://localhost:5010/canalProg';
        let resp = await axios.get(url);
        setLista(resp.data);
    }

    async function user() {
        const url = 'http://localhost:5010/usuario';
        let resp = await axios.get(url);
        setNome(resp.data);
    }

    async function favo() {
        const url = 'http://localhost:5010/programaFavorito';
        let resp = await axios.get(url);
        setFavorito(resp.data);
    }

    return (
        <div className='pagina-buscar'>
            <div className='cabeca'>
            <Link to='/alterar'> Alterar </Link>
            <Link to='/excluir'> Excluir </Link>
            <Link to='/'> Inserir </Link>
            </div>
        
            <div className='buscar'>
                <h1> CONSULTAR CANAL </h1>
                <button onClick={buscar}>Buscar</button>
                <table>
                    <thead>
                        <tr>
                            <th>Canal</th>
                            <th>Nome</th>
                            <th>Número</th>
                            <th>Aberto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listacanal.map((item, key) => (
                            <tr key={key}>
                                <td>{item.id_canal ? item.id_canal : 'Inativo'}</td>
                                <td>{item.nm_canal ? item.nm_canal : 'Inativo'}</td>
                                <td>{item.nr_canal ? item.nr_canal : 'Inativo'}</td>
                                <td>{item.bt_aberto !== null && item.bt_aberto !== undefined ? (item.bt_aberto ? 'Sim' : 'Não') : 'Inativo'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='buscar'>
                <h1> CONSULTAR PROGRAMAS </h1>
                <button onClick={programacanal}>Buscar</button>
                <table>
                    <thead>
                        <tr>
                            <th>Id Programa</th>
                            <th>Id Canal</th>
                            <th>Nome Programa</th>
                            <th>Genero</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista.map((item, key) => (
                            <tr key={key}>
                                <td>{item.id_canal_programa ? item.id_canal_programa : 'Inativo'}</td>
                                <td>{item.id_canal ? item.id_canal : 'Inativo'}</td>
                                <td>{item.nm_programa ? item.nm_programa : 'Inativo'}</td>
                                <td>{item.ds_genero ? item.ds_genero : 'Inativo'}</td>
                                <td>{item.hr_programa ? item.hr_programa : 'Inativo'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

   
            <div className='buscar'>
                <h1> CONSULTAR USUÁRIOS </h1>
                <button onClick={user}>Buscar</button>
                <table>
                    <thead>
                        <tr>
                            <th>Id Usuario</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nome.map((item, key) => (
                            <tr key={key}>
                                <td>{item.id_usuario ? item.id_usuario : 'Inativo'}</td>
                                <td>{item.nm_usuario ? item.nm_usuario : 'Inativo'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            
            <div className='buscar'>
                <h1> CONSULTAR PROGRAMAS FAVORITOS </h1>
                <button onClick={favo}>Buscar</button>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Usuário</th>
                            <th>Programa</th>
                            <th>Avaliação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favorito.map((item, key) => (
                            <tr key={key}>
                                <td>{item.id_programa_favorito ? item.id_programa_favorito : 'inativo'}</td>
                                <td>{item.nm_usuario ? item.nm_usuario : 'inativo'}</td>
                                <td>{item.nm_programa ? item.nm_programa : 'inativo'}</td>
                                <td>{item.vl_avaliacao ? item.vl_avaliacao : 'inativo'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}