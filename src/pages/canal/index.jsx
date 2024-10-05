import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Canal() {
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



    async function salvar() {
        let url = 'http://localhost:5010/canal';
        
      
        let data = {
            "canal": nome,
            "numero": numero,
            "aberto": aberto 
        };
        
        let resp = await axios.post(url, data); 
        alert(resp.data.idCanal);
    }
    async function salvar2() {
        let url = 'http://localhost:5010/canalProg';
        let data = {
            "id_canal": idCanal,
            "programa": programacanal,
            "genero": genero,
            "hora": hora
        };
        let resp = await axios.post(url, data);
        alert(resp.data.idCanalProg);
    }

    async function salvar3() {
        let url = 'http://localhost:5010/usuario';
        let data ={ usuario}

        let resp = await axios.post(url, data);
        alert(resp.data.idUsuario);
    }

    async function salvar4() {
        let url = 'http://localhost:5010/programaFavorito';
        let data = {
            "id_use": id_use,
            "id_programa": id_programa,
            "avaliacao": avaliacao,

        };


        let resp = await axios.post(url, data);
        alert(resp.data.idProgramaFavorito);
    }

    return (
        <div className="pagina-canal">
            <div className='cabeca'>
            <Link to='/buscar'> Consultar </Link>
            <Link to='/alterar'> Alterar </Link>
            <Link to='/excluir'> Excluir </Link>
            </div>
            
            <div className='canal'>
                <h1>Canal</h1>
                <div className='form'>
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
                    <button onClick={salvar}>Salvar</button>
                </div>
            </div>

            <div className='programacanal'>
                <h1>Programação</h1>
                <div className='form'>
                    <input type="number" placeholder='IdCanal' value={idCanal} onChange={(e) => setIdCanal(e.target.value)} />
                    <input type="text" placeholder='Programação' value={programacanal} onChange={(e) => setProgramacanal(e.target.value)} />
                    <input type="text" placeholder='Genero' value={genero} onChange={(e) => setGenero(e.target.value)} />
                    <input type="time" placeholder='Hora' value={hora} onChange={(e) => setHora(e.target.value)} />
                    <button onClick={salvar2}>Salvar</button>
                </div>
            </div>

            <div className='usuario'>
                <h1>Usuario</h1>
                <div className='form'>
                    <input type="text" placeholder='Nome' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    <button onClick={salvar3}>Salvar</button>
                </div>
            </div>

            <div className='favorito'>
                <h1>Programa Favorito</h1>
                <div className='form'>
                    <input type="number" placeholder='idUsuario' value={id_use} onChange={(e) => setId_use(e.target.value)} />
                    <input type="number" placeholder='idPrograma' value={id_programa} onChange={(e) => setId_Programa(e.target.value)} />
                    <input type="number" placeholder='Avaliação' value={avaliacao} onChange={(e) => setAvaliacao(e.target.value)} />
                    <button onClick={salvar4}>Salvar</button>
                </div>
            </div>
        </div>
    );
}