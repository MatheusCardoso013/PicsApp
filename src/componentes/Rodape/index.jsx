import styled from "styled-components";

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
    @media screen and (max-width: 1100px){
        margin-top: 10px;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

const Rodape = () => {
    return (
        <RodapeEstilizado>
            <RodapeTexto>Desenvolvido por Matheus.</RodapeTexto>
        </RodapeEstilizado>
    );

}

export default Rodape