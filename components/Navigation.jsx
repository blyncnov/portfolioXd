import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { IconContext } from "react-icons";

import { FaTimes } from 'react-icons/fa'
import { RiBarChartHorizontalLine } from "react-icons/ri"

// Components
import Button from "../constants/Button"

// Data
import { Logo, NavigationLists } from "../data/Navigation"

// styled-components
import {
    NavigationContainerWrapper,
    NavigationContainer,
    NavigationWrapper,
    NavigationItem,
    MobileIcon,
    NavigationShadow
} from "../styles/styled/Navigation"

import { Constraints } from "../styles/constants/Constants"


const Navigation = () => {
    const [isclicked, setIsClicked] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const isClickedHandler = () => {
        setIsClicked(!isclicked)
    }

    useEffect(() => {

        const isScrolledHandler = () => {
            if (window.scrollY >= 50) {
                setIsScroll(true)
                console.log(window.scrollY);
            }
            else {
                setIsScroll(false)
            }
        }

        window.addEventListener("scroll", isScrolledHandler);

        return () => window.removeEventListener("scroll", isScrolledHandler);

    }, [])


    return (
        <>
            <IconContext.Provider value={{ color: "#ccd6f6" }} >
                <NavigationContainerWrapper>
                    <NavigationContainer scroll={isScroll}>
                        {/*   <== You can pass a Max props e.g <Constraints  Max="90% /> 
                to  Add a constraint , the default Value is 90% ==>  */}
                        <Constraints >
                            <NavigationWrapper>
                                <div className="Logo">
                                    <h1>{Logo}</h1>
                                    {/* <Image src={Logo} alt="Logo" /> */}
                                </div>

                                <NavigationShadow clicked={isclicked} onClick={isClickedHandler} >
                                    <NavigationItem>
                                        {NavigationLists.map((list) => {
                                            return (
                                                <Link onClick={isClickedHandler} key={list.id} passHref={true} style={{ color: "#64ffda" }} href={`/${list.navigate}`} >
                                                    <li>
                                                        <span> 0{list.id}.</span> {" "} {list.name}
                                                    </li>
                                                </Link>
                                            )
                                        })}
                                        <Button full="100%" tittle="Resume" urlData="https://github.com/blyncnov" />
                                    </NavigationItem>
                                </NavigationShadow>

                                <MobileIcon onClick={isClickedHandler} >
                                    {isclicked ? <FaTimes style={{ fontSize: "2em", fontweight: "bold" }} /> : <RiBarChartHorizontalLine style={{ fontSize: "2em", fontweight: "bold" }} />}
                                </MobileIcon>

                            </NavigationWrapper>
                        </Constraints>
                    </NavigationContainer>
                </NavigationContainerWrapper>
            </IconContext.Provider>
        </>
    )
}

export default Navigation