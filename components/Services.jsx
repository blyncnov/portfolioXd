import React from 'react';
import Image from 'next/image';

import { IconContext } from "react-icons";
import { SiShowpad } from "react-icons/si"

import ShowCase from "../public/Images/3d/bolu.png"
import { Skills } from "../data/Skills"

import {
    ServicesContainer,
    SkillShowCase,
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
            <IconContext.Provider value={{ color: "#ccd6f6" }} >
                <ServicesContainer>
                    <Constraints >
                        <Section>
                            <SectionInner>
                                <Divider>
                                    <FlexBoxToRow>
                                        <HeadingOne color="#0B192E"
                                            size="clamp(16px,5vw,2rem)"
                                        > <span>00.</span> About Me
                                        </HeadingOne>
                                        <div className="hr"></div>
                                    </FlexBoxToRow>

                                    <br />
                                    <Paragraph color="#636b83">
                                        Hello! My name is <span>Taiwo Boluwatife </span> and I enjoy creating things that live on the internet. My interest in <span>web development</span>  started back in <span>2017</span> when I decided to try editing custom wapka and site123 website — turns out that taught me a lot about xML & HTML & CSS!
                                        Date, I’ve had gained alot of knowledge and have worked on few many projects. My main <span>focus</span> these days is building accessible, awesome and productive designs
                                        I also recently transitioned into blockchain development and built a new project using Ethers js & Next js.
                                        Here are a few <span>technologies I’ve been working with recently</span>
                                    </Paragraph>
                                    <br />
                                    <SkillShowCase>
                                        {Skills.map((skill) => {
                                            return (
                                                <div className="SkillFlexItem" key={skill.id}>
                                                    <div className="" >
                                                        <SiShowpad />
                                                    </div>
                                                    <li>{skill.title}</li>
                                                </div>)
                                        })}
                                    </SkillShowCase>
                                </Divider>

                                <Divider order="-1">
                                    <Image style={{ borderRadius: "3px" }} src={ShowCase} placeholder="blur" blurDataURL={ShowCase} alt="banner" layout="responsive" />
                                </Divider>

                            </SectionInner>
                        </Section>
                    </Constraints>
                </ServicesContainer>
            </IconContext.Provider>
        </>
    )
}

export default Services