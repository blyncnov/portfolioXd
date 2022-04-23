import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

// styled-components
import {
    ContactOverContainer,
    FormContact
} from "../styles/styled/Contact"

import {
    Constraints, Section,
    SectionInner, Divider,
    HeadingOne, Paragraph,
    FlexBoxToRow
} from "../styles/constants/Constants"



const Contact = () => {
    const form = useRef();

    const SubmitHandler = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uca2x1k', 'template_9or7fbn', form.current, 'user_Qp1Kvs7l8ZL0vLtKArviW')
            .then((result) => {
                console.log(result.text);
                alert("Message Sent Sucessfully!");
            }, (error) => {
                console.log(error.text);
                alert("Try Again Later!");
            });

    }

    return (
        <ContactOverContainer id="contact">
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
                            <FormContact onSubmit={SubmitHandler} ref={form}>
                                <input type="text" name="name" placeholder="Your Full Name" />
                                <br />
                                <input type="email" name="email" placeholder="Your Email Address" />
                                <br />
                                <input type="number" name="number" placeholder='Mobile Number' />
                                <br />
                                <textarea name="message" cols="30" rows="10" placeholder="Enter Your Message">
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
        </ContactOverContainer>
    )
}

export default Contact