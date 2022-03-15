import styled from 'styled-components';
import { Link as ReactRouterDomLink } from 'react-router-dom'
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
`;

const Link = ({isActive, children, ...props}) => {
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    )
}

const Menu = styled.nav`
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    font-family: esteban;
    left: initial;
    top: initial;
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
                            <StyledLink to='/foods' style={{fontSize: '1.5vmin', padding: '1vmin'}} className='text-white button' isActive>
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
