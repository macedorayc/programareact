import './index.scss'; 
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Alterar() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [aberto, setAberto] = useState(false);

    const [idCanal, setIdCanal] = useState(0);
    const [programacanal, setProgramacanal] = useState('');
    const [genero, setGenero] = useState('');
    const [hora, setHora] = useState('');

    const [usuario, setUsuario] = useState('');
    const [id_use, setId_use] = useState(0);

    const [id_programa, setId_Programa] = useState(0);
    const [avaliacao, setAvaliacao] = useState(0);

 
    async function alterar() {
        let url = `http://localhost:5010/canal/${idCanal}`;
        let data = {
            "canal": nome,
            "numero": numero,
            "aberto": aberto 
        };

        try {
             await axios.put(url, data); 
            alert('Canal atualizado com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Erro ao atualizar canal.');
        }
    }

  
    async function alterar2() {
        let url = `http://localhost:5010/canalProg/${id_programa}`;
        let data = {
            "id_canal": idCanal,
            "programa": programacanal,
            "genero": genero,
            "hora": hora
        };

        try {
             await axios.put(url, data);
            alert('Programação atualizada com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Erro ao atualizar a programação.');
        }
    }


    async function alterar3() {
        let url = `http://localhost:5010/usuario/${id_use}`;  
        let data = { "usuario": usuario };

        try {
             await axios.put(url, data);
            alert('Usuário atualizado com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Erro ao atualizar usuário.');
        }
    }

    async function alterar4() {
        let url = `http://localhost:5010/programaFavorito/${id_programa}`;  
        let data = {
            "id_use": id_use,
            "id_programa": id_programa,
            "avaliacao": avaliacao,
        };

        try {
             await axios.put(url, data);
            alert('Programa favorito atualizado com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Erro ao atualizar programa favorito.');
        }
    }

    return (
        <div className="pagina-alterar">
            <Link to='/buscar'> Consultar </Link>

            <div className='canal'>
                <h1>Canal</h1>
                <div className='form'>
                    <input
                        type="number"
                        placeholder='ID do Canal'
                        value={idCanal}
                        onChange={(e) => setIdCanal(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Numero'
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                    <input
                        type="checkbox"
                        checked={aberto}
                        onChange={(e) => setAberto(e.target.checked)}
                    />
                    <button onClick={alterar}>Alterar</button>
                </div>
            </div>

            <div className='programacanal'>
                <h1>Programação</h1>
                <div className='form'>
                    <input
                        type="number"
                        placeholder='ID do Programa'
                        value={id_programa}
                        onChange={(e) => setId_Programa(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder='ID do Canal'
                        value={idCanal}
                        onChange={(e) => setIdCanal(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Programação'
                        value={programacanal}
                        onChange={(e) => setProgramacanal(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Gênero'
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                    />
                    <input
                        type="time"
                        placeholder='Hora'
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                    />
                    <button onClick={alterar2}>Alterar</button>
                </div>
            </div>

            <div className='usuario'>
                <h1>Usuário</h1>
                <div className='form'>
                    <input
                        type="number"
                        placeholder='ID do Usuário'
                        value={id_use}
                        onChange={(e) => setId_use(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Nome'
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <button onClick={alterar3}>Alterar</button>
                </div>
            </div>

            <div className='favorito'>
                <h1>Programa Favorito</h1>
                <div className='form'>
                    <input
                        type="number"
                        placeholder='ID do Usuário'
                        value={id_use}
                        onChange={(e) => setId_use(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder='ID do Programa'
                        value={id_programa}
                        onChange={(e) => setId_Programa(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder='Avaliação'
                        value={avaliacao}
                        onChange={(e) => setAvaliacao(e.target.value)}
                    />
                    <button onClick={alterar4}>Alterar</button>
                </div>
            </div>
        </div>
    );
}