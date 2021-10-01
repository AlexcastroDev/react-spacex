
import React, { FunctionComponent } from "react";
import { Item, Menu, StyledLogo } from "./Header.styles";

const Header: FunctionComponent = () => {
    return (
        <>
            <StyledLogo />
            <Menu>
                <Item active={true}>Home</Item>
                <Item>Launches</Item>
            </Menu>
        </>
    )
}

export default Header