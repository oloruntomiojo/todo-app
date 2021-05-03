import styled, { css } from "styled-components";

export const TodoItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1rem;
`;

export const TodoText = styled.p`
    flex: 0 1 65%;
    margin: 0;
    margin-right: 2rem;
    padding-left: .5rem;

    ${props => {
        switch(props.urgencyType) {
            case "inBetween":
                return  css`
                    color: ${props => props.theme.colors.urgencyText2};
                    border-left: 2px solid ${props => props.theme.colors.urgencyText2};
                `;    

            case "unImportant":
                return css`
                    color: ${props => props.theme.colors.urgencyText3};
                    border-left: 2px solid ${props => props.theme.colors.urgencyText3};
                `;  

            default: 
                return css`
                    color: ${props => props.theme.colors.urgencyText1};
                    border-left: 2px solid ${props => props.theme.colors.urgencyText1};
                `;
        }
    }}
`;

export const ButtonGroup = styled.div`
    flex: 0 1 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;

  & i {
    position: absolute;
    color: ${props => props.theme.colors.light};
    top: 2px;
    left: 2px;
    font-size: 12px;
  }
`;

export const Checkbox = styled.input`
    appearance: none;
    padding: .5rem;
    background-color: ${props => props.theme.colors.light};
    border-radius: 2px;

    &:checked {
        background-color: ${props => props.theme.colors.primary};
    }
`;

export const DeleteButton = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
`;

export const DeleteIcon = styled.i`
    color: ${props => props.theme.colors.urgencyText1};
    font-size: 16px;
`;