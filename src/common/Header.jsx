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

export function Header() {
    return (
        <HeaderWrapper>
            <Link to="/">
                Home
            </Link>
            <Link to="/login">
                Login
            </Link>
        </HeaderWrapper>
    )
}
