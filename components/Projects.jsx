import React from 'react'

import Project from "../public/Images/assests/nextfood.png"

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
                                {/* <ProjectDetails>
                                    <ProjectDetailsSection>
                                        <p>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.
                                            Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                                        <h4>Featured Project</h4>
                                        <br />
                                        <h2>NextFood Template</h2>
                                        <br />
                                        <li>React  |
                                            Styled Components |
                                            Express |
                                            Spotify API |
                                            Heroku</li>
                                    </ProjectDetailsSection>
                                </ProjectDetails> */}
                            </Divider>
                            <Divider>
                                <Image style={{ borderRadius: "3px" }} src={Project} placeholder="blur" blurDataURL={Project} alt="banner" layout="responsive" />
                            </Divider>
                        </SectionInner>
                    </Section>
                </Constraints>
                <br />
                <br />
            </ProjectContainer>
        </>

    )
}

export default Projects