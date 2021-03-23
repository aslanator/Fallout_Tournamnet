import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {LocationDescriptor} from 'history';

export type SidebarItemProps = {
    title: string;
    to: LocationDescriptor
}

const SidebarItemS = styled(Link)`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.colors.background};
    padding: 0 20px;
    cursor: pointer;
    box-shadow: 0px 1px 0px 0px ${props => props.theme.colors.primary3};
    text-decoration: none;

    &:hover {
        box-shadow: 0px 1px 0px 0px ${props => props.theme.colors.background};
    }
`;

export const SidebarItem: React.FC<SidebarItemProps> = ({title, to}) => {

    return (
        <SidebarItemS to={to}>
            {title}
        </SidebarItemS>
    )
};
