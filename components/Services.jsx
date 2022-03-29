import React from 'react';
import Image from 'next/image';

import ShowCase from "../public/Images/3d/bolu.png"

import {
    ServicesContainer
} from "../styles/styled/Services"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
} from "../styles/constants/Constants"


const Services = () => {
    return (
        <>
            <ServicesContainer>
                <Constraints Max="90%">
                    <Section>
                        <SectionInner>
                            <Divider>
                                <Divider>
                                    <HeadingOne color="#123182">Mobile Application.</HeadingOne>
                                    <br />
                                    <Paragraph color="#0A192F">The point of using Lorem Ipsum is that it has a more-or-less normal.
                                    </Paragraph>
                                </Divider>
                                <br />
                                <br />
                                <Divider>
                                    <HeadingOne color="#123182">UI & UX Designs.</HeadingOne>
                                    <br />
                                    <Paragraph color="#0A192F">The point of using Lorem Ipsum is that it has a more-or-less normal.
                                    </Paragraph>
                                </Divider>
                            </Divider>

                            <Divider>
                                <Image style={{ borderRadius: "3px" }} src={ShowCase} placeholder="blur" blurDataURL={ShowCase} alt="banner" layout="responsive" />
                            </Divider>

                            <Divider>
                                <Divider>
                                    <HeadingOne color="#123182">Web Development.</HeadingOne>
                                    <br />
                                    <Paragraph color="#0A192F"> The point of using Lorem Ipsum is that it has a more-or-less normal.
                                    </Paragraph>
                                </Divider>

                                <br />
                                <br />

                                <Divider>
                                    <HeadingOne color="#123182">Blockchain.</HeadingOne>
                                    <br />
                                    <Paragraph color="#0A192F"> The point of using Lorem Ipsum is that it has a more-or-less normal.
                                    </Paragraph>
                                </Divider>
                            </Divider>

                        </SectionInner>
                    </Section>
                </Constraints>
            </ServicesContainer>
        </>
    )
}

export default Services