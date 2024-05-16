import styled from "styled-components";
import CampoTexto from "../CampoTexto";


const HeaderEstilizado = styled.header`
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
    @media screen and (max-width: 1150px){
        display: block;
        img {
            display: block;
            margin: 0 auto;
        }
    }
`

const Cabecalho = ({setFiltro}) => {
    return (
    <HeaderEstilizado>
        <img src="/imagens/logo.png" alt="Logo do site"></img>
        <CampoTexto setFiltro={setFiltro}/>
    </HeaderEstilizado>)
}

export default Cabecalho