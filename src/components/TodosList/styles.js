import styled from 'styled-components';

export const Heading2 = styled.h2`
    text-align: center;
    font-weight: 600;
    color: ${props => props.theme.colors.light};
    margin-bottom: .5rem;
`;

export const TodosWrapper = styled.div`
    margin-top: 2rem;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.15);
    border-radius: 4px;
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    background-color: ${props => props.theme.colors.dark};
`;

export const ArrangeButton = styled.button`
   width: 120px;
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.light};
   margin-right: 1rem;
   margin-left: auto;
`;

export const EmptyTodo = styled.p`
    margin-top: 2rem;
    text-align: center;
    color: ${props => props.theme.colors.light};
    line-height: 1.6;
    font-size: .9rem
`;