import styled from "styled-components"

export const NavigationContainerWrapper  = styled.div`
width: 100%;
height: 80px;
position: relative;
background-color: #0a192f;
`

export const NavigationContainer  = styled.div`
width: 100%;
background-color: rgb(10, 25, 47, .5);
box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.03);
0px 2px 4px rgba(96, 97, 112, 0.14);
backdrop-filter:${({scroll}) => scroll ? " blur(50px)" : " blur(50px)"};
color: #333;
position: fixed;
top: 0;
z-index: 999998;
  
`

export const NavigationWrapper  = styled.div`
width: 100%;
padding: 1.2em 0;
color: #333;
background-color: transparent;

display: flex;
justify-content: space-between;
align-items: center;

.Logo{
cursor: pointer;
color: #123182;
}




@media (max-width: 768px) {
    padding: 1.5em 0;
}

`

export const NavigationShadow  = styled.div`
z-index: 99;

@media (max-width: 800px) {
    position: absolute;
    background-color: transparent;
    transition: all 1s ease-in;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(20px);
    left: ${({clicked}) => clicked ? "0" : "-100%"};
    top: 0;
    right: 0;
}
`

export const NavigationItem  = styled.ul`
    display: flex;
    gap: 2em;
    align-items: center;


li{
    font-weight: 400;
    cursor: pointer;
    font-size: 1.1rem;
    font-family: helvetica;
    color: #ccd6f6 !important;
    transition: all 0.5s ease-in-out;

    span{
    color: #123182;
    }
}

li:hover{
    color: #412272;
    transform: scale(1.09);
}

@media (max-width: 800px) {
    display: block;
    background-color: #0a192f;
    backdrop-filter: blur(20px);
    width: 60vw;
    height: 100vh;
    padding: 2em 1em;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

    li {
    padding: 1em;
    border-bottom: 1px solid rgba(229, 229, 229, 0.01);
    }

}
`

export const MobileIcon  = styled.div`
display: none;
z-index: 99999;
cursor: pointer;

@media (max-width: 800px) {
    display: block;
}
`

export default NavigationContainer  ;