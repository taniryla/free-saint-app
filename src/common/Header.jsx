import styled from 'styled-components';
import { Link } from 'react-router-dom'


const HeaderWrapper = styled.header`
    height: 4rem;
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    padding: 0 1rem;
    position: fixed;
    top: 0;
`;

const Menu = styled.nav`
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
`;

export function Header() {
    return (
        <HeaderWrapper>
           
        </HeaderWrapper>
    )
}
