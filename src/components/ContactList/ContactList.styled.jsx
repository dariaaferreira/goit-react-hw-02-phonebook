import styled from '@emotion/styled';

export const ListItems = styled.ul`
    list-style-type: none;
    width: 320px;
    padding: 0;
    margin-top: 20px;
`;


export const Item = styled.li`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`;

export const Span = styled.span`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    font-weight: 500;
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    margin-left: 20px;
    margin-bottom: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    cursor: pointer;
    border: none;

    &:hover, &:focus {
        fill: var(--white-color);
    background-color: #2196F3;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

export const Text = styled.p`
    margin-bottom: 50px;
    font-weight: 500;
`;
