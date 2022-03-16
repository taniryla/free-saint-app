import styled from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom'
import UserLogOut from '../components/UserLogOut/UserLogOut'


const HeaderWrapper = styled.header`
    height: 3rem;
    width: 110vw;
    box-sizing: border-box;
    display: flex;
    padding: 0;
    position: fixed;
    margin-left: -1rem;
    top: 0;
    background: linear-gradient(to right, #148980, #a7a8aa)
`;

const Link = ({isActive, children, ...props}) => {
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    )
}

// mobile style
const Menu = styled.nav`
    display: block;
    font-family: esteban;
    position: absolute;
    width: 100%;
    top: 4rem;
    left: 0;
    padding: 0.50rem;
    box-sizing: border-box;
    
    @media(min-width: 768px) {
        display: flex; 
        background: none;
        left: initial;
        top: initial;
        margin: auto 0 auto auto;
        border-bottom: none;
        position: relative;
        width: initial;
}
`;

const StyledLink = styled(Link)`
    padding: 0.25rem 0.50rem;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${props => props.isActive ? 'bold' : 'normal' };
    color: #148980;
 `;

export function Header({user, setUser}) {
    const { pathname } = useLocation();

    return (
        <HeaderWrapper>
            <menu>
                <UserLogOut user={user} setUser={setUser} /> 
            </menu>
        </HeaderWrapper>
    )
}
