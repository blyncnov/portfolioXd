import React from 'react'

import Project from "../public/Images/assests/nextfood.png"
import Project2 from "../public/Images/assests/ishortner.png"
import Project3 from "../public/Images/assests/wpost.png"

import {
    ProjectContainer,
    ProjectDetailsSection, ProjectDetails,
} from "../styles/styled/Projects"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
} from "../styles/constants/Constants"
import Image from 'next/image'

const Projects = () => {
    return (
        <>
            <ProjectContainer>
                <Constraints>
                    <Section>
                        <FlexBoxToRow>
                            <HeadingOne color="#0B192E"
                                size="clamp(16px,5vw,2rem)"
                            > <span>02.</span> Projects
                            </HeadingOne>
                            <div className="hr"></div>
                        </FlexBoxToRow>

                        <br />
                        <SectionInner >
                            <Divider>
                                <br />
                                <HeadingOne
                                    color="#0B192E"
                                    size="clamp(16px,5vw,2rem)"
                                ><span> |</span> {" "} NextFood Template</HeadingOne>
                                <br />
                                <Paragraph color="#636b83">
                                    A web app for Food Website template. Dope Ul recently played best on Youtube,
                                    and detailed information insight about everything .
                                </Paragraph>
                                <br />
                                <li>Next js <span> |</span> {" "}
                                    React js <span> |</span>  {" "}
                                    Styled Components  <span> |</span>  {" "}
                                    Swiper Js <span> |</span>  {" "}
                                    Netlify </li>
                            </Divider>
                            <Divider>
                                <Image style={{ borderRadius: "3px" }} src={Project} placeholder="blur" blurDataURL={Project} alt="banner" layout="responsive" />
                            </Divider>
                        </SectionInner>
                    </Section>
                    <Section>
                        <SectionInner >
                            <Divider order="2">
                                <br />
                                <HeadingOne
                                    color="#0B192E"
                                    size="clamp(16px,5vw,2rem)"
                                ><span> |</span> {" "} Ishortner</HeadingOne>
                                <br />
                                <Paragraph color="#636b83">
                                    A web app for Food Website template. Dope Ul recently played best on Youtube,
                                    and detailed information insight about everything.
                                </Paragraph>
                                <br />
                                <li>Next js <span> |</span> {" "}
                                    React js <span> |</span>  {" "}
                                    Styled Components  <span> |</span>  {" "}
                                    Netlify </li>
                            </Divider>
                            <Divider order="3">
                                <Image style={{ borderRadius: "3px" }} src={Project2} placeholder="blur" blurDataURL={Project2} alt="banner" layout="responsive" />
                            </Divider>
                        </SectionInner>
                    </Section>
                    <Section>
                        <SectionInner >
                            <Divider>
                                <br />
                                <HeadingOne
                                    color="#0B192E"
                                    size="clamp(16px,5vw,2rem)"
                                ><span> |</span> {" "} Wpost</HeadingOne>
                                <br />
                                <Paragraph color="#636b83">
                                    A web app for Food Website template. Dope Ul recently played best on Youtube,
                                    and detailed information insight about everything .
                                </Paragraph>
                                <br />
                                <li>Next js <span> |</span> {" "}
                                    React js <span> |</span>  {" "}
                                    Styled Components  <span> |</span>  {" "}
                                    Swiper Js <span> |</span>  {" "}
                                    Netlify </li>
                            </Divider>
                            <Divider>
                                <Image style={{ borderRadius: "3px" }} src={Project3} placeholder="blur" blurDataURL={Project3} alt="banner" layout="responsive" />
                            </Divider>
                        </SectionInner>
                    </Section>
                </Constraints>

            </ProjectContainer>
        </>

    )
}

export default Projects