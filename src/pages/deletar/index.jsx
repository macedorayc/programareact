import './index.scss';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Excluir() {
    const [idCanal, setIdCanal] = useState(0);
    const [idPrograma, setIdPrograma] = useState(0);
    const [programaFavorito, setProgramaFavorito] = useState(0);
    const [idUsuario, setIdUsuario] = useState(0);

    async function excluir1() {
        let url = `http://localhost:5010/canal/${idCanal}`;

        try {
          await axios.put(url);
            alert('Canal excluído com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Erro ao excluir canal.');
        }
    }
    async function excluir2() {
        let url = `http://localhost:5010/canalProg/${idPrograma}`;

        try {
          await axios.put(url);
            alert('Programação excluída com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Erro ao excluir a programação.');
        }
    }



async function excluir3() {
    let url = `http://localhost:5010/usuario/${idUsuario}`;
  

    try {
      await axios.put(url);
        alert('Programação excluída com sucesso!');
    } catch (error) {
        console.error(error);
        alert('Erro ao excluir a programação.');
    }
}

async function excluir4() {
    let url = `http://localhost:5010/programaFavorito/${programaFavorito}`;


    try {
      await axios.put(url);
        alert('Programação excluída com sucesso!');
    } catch (error) {
        console.error(error);
        alert('Erro ao excluir a programação.');
    }
}

return (
    <div className="pagina-delete">
        <div className='cabeca'>
        <Link to='/buscar'> Consultar </Link>
        <Link to='/alterar'> Alterar </Link>
        <Link to='/excluir'> Excluir </Link>
        </div>
            
        <div className='canal'>
           <h2> Canal</h2>
            <div className='form'>
                <input
                    type="number"
                    placeholder='ID do Canal'
                    value={idCanal}
                    onChange={(e) => setIdCanal(e.target.value)}
                />
                <button onClick={excluir1}>Excluir</button>
            </div>

          <h2> Programação</h2>
            <div className='form'>
                <input
                    type="number"
                    placeholder='ID do Programa'
                    value={idPrograma}
                    onChange={(e) => setIdPrograma(e.target.value)}
                />
                <button onClick={excluir2}>Excluir</button>
            </div>
            
            <h2> Usuário</h2>
            <div className='form'>
                <input
                    type="number"
                    placeholder='ID do Usuário'
                    value={idUsuario}
                    onChange={(e) => setIdUsuario(e.target.value)}
                />
                <button onClick={excluir3}>Excluir</button>
            </div>

            <h2> Programa Favorito</h2>
            <div>
                <div className='form'>
                    <input
                        type="number"
                        placeholder='ID do Programa favorito'
                        value={programaFavorito}
                        onChange={(e) => setProgramaFavorito(e.target.value)}
                    />
                    <button onClick={excluir4}>Excluir</button>
                </div>
            </div>
        </div>
    </div>
);              
}