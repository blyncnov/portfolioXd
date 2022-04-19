import styled from "styled-components"

export const ProjectContainer  = styled.div`
width: auto;
background-color: #FFFFFF;
position: relative;
`

export const ProjectDetails  = styled.div`
// position: relative;
`

export const ProjectDetailsSection  = styled.div`
width: 100%;
padding: 1em 2em;
border-radius: 4px;
background-color: #112240;
color: white;
z-index: 1;
line-height: 1.5;
`

export const ProjectTech = styled.ul`
display: inline-block;

li{
    display: inline-block;
    margin: 0 1em 0 0;
    opacity: 0.7;
}
`

export const ImageAnimation = styled.div`

transition: all 0.5s ease-in-out;

&:hover{
    transform: scale(1.05);
}

`



export default ProjectContainer