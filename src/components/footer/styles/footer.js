import styled from 'styled-components';
// here is original bg color: background: radial-gradient(circle, rgba(92, 39, 251, 1) 0%, rgba(112, 71, 247, 1) 100%);

export const Container = styled.div`
    padding: 30px 60px;
    background: #DCDCDC
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1500px;
    margin: 0 auto;

    @media (max-width: 1000px) {
        display: none;
    }
`

export const MobileView = styled.div`
    @media (min-width: 1000px) {
        display: none;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 95px;
    margin-bottom: 20px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Link = styled.a`
    color: #262626;
    margin-bottom: 15px;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`

export const Title = styled.p`
    font-size: 18px;
    color: #000;
    margin-bottom: 15px;
    font-weight: bold;
    text-transform: uppercase;
`

export const Base = styled.div`
    text-align: center;
    margin: 0 auto;
    margin-top: 10px;
    width: 50%;

    @media (max-width: 1000px) {
        width: 120%;
        margin-top: 30px;
        margin-left: -25px;
    }
`