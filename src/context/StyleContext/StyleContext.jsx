import { createContext } from 'react';
import styled from 'styled-components';

const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
  const Form = styled.form`
    width: 100%;
    max-width: 15rem;
    background: white;
    border: 0.1rem solid #148980;
    padding: 0.5rem;
    box-sizing: border-box;
    color: #6D6E71;
    border-radius: 0.25rem;
  `;


return (
  <StyleContext.Provider
    value={{
      Form,

    }}
    >
      {children}
    </StyleContext.Provider>
  )
}

export default StyleContext;
