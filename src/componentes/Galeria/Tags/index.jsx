import styled from 'styled-components';
import tags from './tags.json';

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 40px;
    @media screen and (max-width: 1100px){
        flex-direction: column;
        gap: 20px;
    }
`
const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`
const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
    @media screen and (max-width: 1100px){
        flex-direction: column;
    }
`

const Tag = styled.button`
    font-size: 20px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    padding: 5px;
    transition: background-color 0.3s ease;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`
const Tags = ({setTag}) => {
    return (<TagsContainer>
        <TagTitulo>Busque por tags: </TagTitulo>
        <Div>
            {tags.map(tag =>
                <Tag 
                key={tag.id}
                onClick={() => setTag(tag.tag)}>
                    {tag.titulo}
                </Tag>
            )}
        </Div>
    </TagsContainer>
    )
}

export default Tags