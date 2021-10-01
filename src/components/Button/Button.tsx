import React, { FunctionComponent } from "react";
import { StyledButton, StyledLabel } from "./Button.styles";


export const Button: FunctionComponent = ({ children }) => {
    return (
        <StyledButton>
            <StyledLabel> {children}</StyledLabel>
        </StyledButton>
    )
}