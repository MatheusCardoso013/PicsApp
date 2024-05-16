import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
    @media screen and (max-width: 1100px){
        display: block;
    }
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    margin-right: 20px;
    @media screen and (max-width: 1100px){
        justify-content: center;
        margin: 0;
    }
`

const Galeria = ({fotos = [], setTag, aoFotoSelecionada, aoAlternarFavorito}) => {
    return (
        <>
            <Tags setTag={setTag}/>
            
            <GaleriaContainer>

                <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => 
                        <Imagem 
                        aoZoomSolicitado={aoFotoSelecionada}
                        aoAlternarFavorito={aoAlternarFavorito}
                        key={foto.id} 
                        foto={foto}></Imagem>)}
                    </ImagensContainer>
                </SecaoFluida>

                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria