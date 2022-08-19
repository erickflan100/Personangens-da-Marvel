import styled from 'styled-components'

interface ThumbnailCard {
    thumbnail: {
        path: string;
        extension: string;
    }
}

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    height: 100%;
`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const urlThumbnail = (props: ThumbnailCard) => `${props.thumbnail.path}.${props.thumbnail.extension}`

export const Card = styled.div`
    background: #f1f1f1;
    width: 300px;
    height: 450px;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

    h2, p {
        padding: 8px;
        text-align: justify;
    }

    div#img{
        width: 100%;
        height: 400px;
        background: url(${urlThumbnail}) no-repeat center;
        background-size: cover;

        transition: all 1s;
    }

    &:hover{
        div#img{
            height: 100px;
        }
    }
`

export const ButtonMore = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;
    height: 40px;
    width: 100%;
    margin: 20px;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background: #c1ff11;
    }
`