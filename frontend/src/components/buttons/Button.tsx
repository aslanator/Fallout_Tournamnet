import React from 'react';
import styled from 'styled-components';

export type ButtonProps = {
    size?: 'small' | 'medium' | 'large',
    onClick?: () => void;
}

const ButtonS = styled.button`
    color: ${props => props.theme.colors.primary1};
    background: ${props => props.theme.colors.secondary1};
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    font-size: ${({size}: ButtonProps) => {
        if(size === 'small') {
            return '12px';
        }
        else if(size === 'large') {
            return '16px';
        }
        return '14px';
    }};
    line-height: 140%;

    &:focus, &:hover {
        background: ${props => props.theme.colors.secondary2};
    }
`;

export const Button: React.FC<ButtonProps> = ({size, children, ...props}) => {
    return (
        <ButtonS {...props} size={size}>{children}</ButtonS>
    )
};