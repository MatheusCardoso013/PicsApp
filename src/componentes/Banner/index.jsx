import styled from "styled-components"

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
    @media screen and (max-width: 1100px) {
        background-size: auto;
        min-height: 255px;
    }
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
    text-shadow: black 0.1em 0.1em 0.2em;
`

const Banner = ({texto, backgroundImage}) => {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>
            <TituloEstilizado>{texto}</TituloEstilizado>
        </FigureEstilizada>
    )
}

export default Banner