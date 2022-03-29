import React from 'react';

// Components
import Button from "../constants/Button"

// Data
// import { HeroData } from "../data/HeroData"

import Banner from "../public/Images/3d/biz.png"

// styled-components
import {
    HeroContainerSection
} from "../styles/styled/HeroPage"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
} from "../styles/constants/Constants"
import Image from 'next/image';

const Navigation = () => {
    return (
        <>
            <HeroContainerSection>
                <Constraints Max="90%">
                    <Section>
                        <SectionInner>

                            <Divider>
                                <Image style={{ borderRadius: "3px" }} src={Banner} placeholder="blur" blurDataURL={Banner} alt="banner" layout="responsive" />
                            </Divider>

                            <Divider>
                                <HeadingOne color="#ccd6f6">THE BEST WAY TO SAVE TOWARD YOUR GOALS.</HeadingOne>
                                <br />
                                <Paragraph color="#8892B0">Blyncnov helps you easily save little by little towards your goals and you get up to 10% interest,all for free.
                                    Setup savings towards many goals e.g Just Savings, Rent, School fees, Car, etc.
                                </Paragraph>

                                <br />
                                <FlexBoxToRow>
                                    <Button title="Hire Me" />
                                    <Button title="Check out my GitHub" />
                                </FlexBoxToRow>
                                <br />

                            </Divider>

                        </SectionInner>
                    </Section>
                </Constraints>
            </HeroContainerSection>
        </>
    )
}

export default Navigation