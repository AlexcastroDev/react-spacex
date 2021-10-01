import React, { FunctionComponent } from "react";
import { ContentContainer, StyledHeader } from "./App.styles";
import { Home } from "@screens/Home";
import { Header } from "./Components/Header";

export const App: FunctionComponent = () => {
    return (
        <ContentContainer>
            <StyledHeader>
                <Header />
            </StyledHeader>
            <Home></Home>
        </ContentContainer>
    )
}
