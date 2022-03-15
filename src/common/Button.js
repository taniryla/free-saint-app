import styled, { css } from 'styled-components';

 const Button = styled.button`
    color: #148980;
    background: ${props => props.secondary ? "#c5c5c6" : "white" } ;
    font-weight: bold;
    ${props => props.large ? css`
    padding: 5vmin;
    border-radius: 3vmin;
    font-size: 1.5em;
    `  : css`
    padding: 2.5vmin;
    border-radius: 1.5vmin;
    font-size: 0.75em;
    `}

    border-radius: 1vmin;
    font-size: 1em;
    border: none;
    width: 100%;
    display: block;
    white-space: none;

    &:disabled{
        background: #c5c5c6;
        color: #6D6E71;
    }
`;

export { Button };