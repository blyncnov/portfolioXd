import styled from "styled-components"

export const ServicesContainer  = styled.div`
width: auto;
background-color: #FFFFFF;
`

export const SkillShowCase  = styled.div`
display: grid;
gap: 2em;
grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
align-items: center;
justify-content: space-between;

@media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
}

.SkillFlexItem{
    display: flex;
    align-items: center;
   gap: 1em;
}
`

export default ServicesContainer