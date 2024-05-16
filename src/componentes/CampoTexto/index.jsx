import styled from "styled-components";
import search from './search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1150px) {
        position: static;
    }
`;
const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    @media screen and (max-width: 1150px) {
        width: auto;
        margin: 0 auto;
    }
`
const IconeLupa = styled.img`
    position: absolute;
    top: 55px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = ({props, setFiltro}) => {
    const width = window.innerWidth
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado 
            placeholder="O que você procura?" 
            {...props}
            onChange={(e) => {setFiltro(e.target.value)}}/>
            {width >= 1150 ? <IconeLupa src={search} alt="Icone Lupa"/> : <></>}
        </ContainerEstilizado>
    )
}

export default CampoTexto
