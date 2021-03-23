import React from 'react';
import { routes } from 'router/router';
import styled from 'styled-components';
import { SidebarItemProps, SidebarItem } from './SidebarItem';

export type SidebarProps = {

}

const SidebarS = styled.div`
    width: 200px;
    background: ${props => props.theme.colors.primary1};
    height: 100vh;
`;

const sidebarItems: SidebarItemProps[] = routes.map(routeModel => ({
    to: routeModel.index.to,
    title: routeModel.index.title,
}));

export const Sidebar: React.FC<SidebarProps> = () => {
    const SidebarItems = sidebarItems.map(item => (
        <SidebarItem title={item.title} to={item.to} key={item.title} />
    ));
    return (
        <SidebarS>
            {SidebarItems}
        </SidebarS>
    )
};
