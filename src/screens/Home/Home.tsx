import React, { FunctionComponent } from "react";
import { ContentContainer, ImageSection, StyledButton, StyledText, Section } from "./Home.styles";
import { PastLaunches } from "./Sections/PastLaunches";

export const Home: FunctionComponent = () => {
    return (
        <ContentContainer>
            <ImageSection>
                <StyledText>YOUR MISSION:</StyledText>
                <StyledText>Explore our launches </StyledText>
                <StyledButton>Explore all launches</StyledButton>
            </ImageSection>
            <Section>
                <PastLaunches></PastLaunches>
            </Section>
        </ContentContainer>
    )
}