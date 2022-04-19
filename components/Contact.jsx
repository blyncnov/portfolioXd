import React from 'react'

import { Wrapper, Status } from "@googlemaps/react-wrapper";

// styled-components
import {
    ContactContainerSection,
    FormContact
} from "../styles/styled/Contact"

import Button from '../constants/Button'

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
} from "../styles/constants/Constants"
import Image from 'next/image';


const Contact = (Status) => {
    return (
        <>
            <br />
            <Constraints max="90%">
                <FlexBoxToRow>
                    <HeadingOne color="#0B192E"
                        size="clamp(16px,5vw,2rem)"
                    > <span>04.</span> Get In Touch
                    </HeadingOne>
                    <div className="hr"></div>
                </FlexBoxToRow>
                <Section padding="1.7em 0">
                    <SectionInner >
                        <Divider>
                            <Paragraph>
                                Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                            </Paragraph>
                            <FormContact>
                                <input type="text" name="name" />
                                <br />
                                <input type="email" name="email" />
                                <br />
                                <input type="number" name="number" />
                                <br />
                                <textarea name="message" cols="30" rows="10">
                                </textarea>
                                <FlexBoxToRow style={{ justifyContent: 'start' }}>
                                    <button type="submit">Say Hello</button>
                                </FlexBoxToRow>
                            </FormContact>
                        </Divider>
                    </SectionInner>
                </Section>
            </Constraints>
            <div>
                <FlexBoxToRow style={{ justifyContent: 'center' }}>
                    <br />
                    <br />
                    <h6>Designed & Built by Taiwo Boluwatife
                    
                    </h6>
                    <link href="https://komarev.com/ghpvc/?username=blyncnov" />
                    <br />
                    <br />
                </FlexBoxToRow>
            </div>
        </>
    )
}

export default Contact