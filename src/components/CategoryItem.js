import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    margin-bottom: 0;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
`

const Info = styled.div`
    position: absolute;
    bottom: 0; /* Changed from top: 0; */
    left: 0;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;


const Title = styled.h1`
    color: black;
    margin-bottom: 20px;
    font-weight: normal;
    font-size: 14px;
`;


const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
            </Info>
        </Container>
    )
}

export default CategoryItem
