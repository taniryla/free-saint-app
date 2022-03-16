import styled from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom'
import Navbar from '../components/Layout/Navbar';
import { FaAlignJustify } from 'react-icons/fa'
import UserLogOut from '../components/UserLogOut/UserLogOut'


const HeaderWrapper = styled.header`
    height: 4rem;
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    padding: 0 1rem;
    position: fixed;
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
 `;

export function Header({user, setUser}) {
    const { pathname } = useLocation();

    return (
        <HeaderWrapper>
            <Menu>
            <nav className='navbar mb-12'>
                <div className='container mr-auto'>
                    <div className='float-center'>
                        <FaAlignJustify className='pr-2 text-5xl' />
                    </div>
                    <div className='flex-1 px-2 mx-2'>
                        <div className='flex justify-end'>
                            <UserLogOut user={user} setUser={setUser} />
                            <StyledLink to='/foods' style={{fontSize: '1.5vmin', padding: '1vmin'}} className='text-white button' isActive={pathname === '/'}>
                                FOOD HISTORY
                            </StyledLink>
                        </div>
                    </div>
                </div>
            </nav>
            </Menu>
        </HeaderWrapper>
    )
}
