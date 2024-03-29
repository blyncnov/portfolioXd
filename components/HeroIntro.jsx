import React from "react";
import Image from "next/image";

// Components
import Button from "../constants/Button";

// Data
// import { HeroData } from "../data/HeroData"

import Banner from "../public/Images/3d/biz.png";

// styled-components
import { HeroContainerSection } from "../styles/styled/HeroPage";

import {
  Constraints,
  Section,
  SectionInner,
  Divider,
  HeadingOne,
  Paragraph,
  FlexBoxToRow,
} from "../styles/constants/Constants";

const HeroIntro = () => {
  return (
    <>
      <HeroContainerSection>
        <Constraints max="90%">
          <Section>
            <SectionInner>
              <Divider>
                <HeadingOne color="#ccd6f6">
                  <Paragraph color="#F9B590">
                    Hi 👋 , my name is Taiwo Boluwatife
                  </Paragraph>{" "}
                  Get The Best Design Experience From Me
                </HeadingOne>
                <br />
                <Paragraph color="#8892B0">
                  {" "}
                  I&apos;m a <span>Frontend</span> Developer specializing in
                  building cool UIs and great <span>User Experience </span>{" "}
                  interfaces. i also have interest in{" "}
                  <span>Blockchain Development.</span>
                </Paragraph>

                <br />
                <FlexBoxToRow>
                  <Button
                    tittle="Hire Me"
                    urlData="mailto:bholuwatife00@gmail.com"
                  />
                  <Button
                    tittle="Check out my GitHub"
                    urlData="https://github.com/blyncnov"
                  />
                </FlexBoxToRow>
                <br />
              </Divider>

              <Divider order="1">
                <Image
                  style={{ borderRadius: "3px" }}
                  src={Banner}
                  placeholder="blur"
                  blurDataURL={Banner}
                  alt="banner"
                  layout="responsive"
                />
              </Divider>
            </SectionInner>
          </Section>
        </Constraints>
      </HeroContainerSection>
    </>
  );
};

export default HeroIntro;
