import React from 'react'

import { AllProjectData } from "../data/Projects"

import {
    ProjectContainer, ProjectTech,
    ImageAnimation,
} from "../styles/styled/Projects"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
} from "../styles/constants/Constants"
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    return (
        <div id="projects">
            <ProjectContainer>
                <Constraints>
                    <FlexBoxToRow>
                        <HeadingOne color="#0B192E"
                            size="clamp(16px,5vw,2rem)"
                        > <span>02.</span> Projects
                        </HeadingOne>
                        <div className="hr"></div>
                    </FlexBoxToRow>
                    {AllProjectData.map((project) => {
                        return (
                            <div key={project.id} >
                                <Section padding="1.7em 0">
                                    <SectionInner >
                                        <Divider order={project.order} orderM="0">
                                            <br />
                                            <HeadingOne
                                                color="#0B192E"
                                                size="clamp(16px,5vw,1rem)"
                                            ><span> |</span> {" "} {project.ProjectName}</HeadingOne>
                                            <br />
                                            <Paragraph color="#636b83">
                                                {project.ProjectDescription}
                                            </Paragraph>
                                            <br />
                                            <ProjectTech>
                                                {project.ProjectTechUsed.map((tech, index) => {
                                                    return <li key={index}>{tech} <span> |</span>  {" "}</li>
                                                })}
                                            </ProjectTech>
                                        </Divider>
                                        <Divider order="0" style={{ cursor: "pointer" }}>
                                            <Link href={project.ProjectUrl} passHref={true} target="_blank">
                                                <ImageAnimation style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                                    <Image style={{ borderRadius: "3px" }}
                                                        src={project.ProjectImage}
                                                        placeholder="blur"
                                                        blurDataURL={project.ProjectImage}
                                                        alt="banner"
                                                        layout="responsive" />
                                                </ImageAnimation>
                                            </Link>
                                        </Divider>
                                    </SectionInner>
                                </Section>
                            </div>
                        )
                    })}
                </Constraints>
            </ProjectContainer>
        </div>

    )
}

export default Projects