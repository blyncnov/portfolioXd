import React from 'react';
import Image from 'next/image';

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


const HeroIntro = () => {
    return (
        <>
            <HeroContainerSection>
                <Constraints max="90%">
                    <Section>
                        <SectionInner>
                            <Divider>
                                <HeadingOne color="#ccd6f6">
                                    <Paragraph color="#F9B590">Hi 👋 , my name is Taiwo Boluwatife</Paragraph> I Build Cool Web Related Stuff.
                                </HeadingOne>
                                <br />
                                <Paragraph color="#8892B0"> I&apos;m a <span>Frontend</span> Major Developer specializing in building cool UI and great <span>User Experience </span> interfaces.
                                    Currently i&apos;m focusing on transitioning into <span>Blockchain Development.</span>
                                </Paragraph>

                                <br />
                                <FlexBoxToRow>
                                    <Button title="Hire Me" />
                                    <Button title="Check out my GitHub" />
                                </FlexBoxToRow>
                                <br />
                            </Divider>

                            <Divider order="1">
                                <Image style={{ borderRadius: "3px" }} src={Banner} placeholder="blur" blurDataURL={Banner} alt="banner" layout="responsive" />
                            </Divider>

                        </SectionInner>
                    </Section>
                </Constraints>
            </HeroContainerSection>

        </>
    )
}

export default HeroIntro