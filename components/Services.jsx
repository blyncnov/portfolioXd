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
                                        Hello! My name is <span>Taiwo Boluwatife </span> and I enjoy creating things that live on the internet. My interest in <span>web development</span>  started back in <span>2012</span> when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main <span>focus</span> these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                                        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
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