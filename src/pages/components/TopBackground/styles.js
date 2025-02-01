
import styled from "styled-components";


export const Background = styled.div`
background: rgb(85,63,251);
background: linear-gradient(90deg, rgba(85,63,251,1) 0%);
height: 30vh;
width: 90vw;
max-width: 800px;
border-radius: 30px;

display: flex;
align-items: center;
justify-content: center;

img{
    height: 200px;
    max-width: 100vw;
    max-height: 100vh;

    @media (max-width: 768px) {
    padding: 15px;
    width: auto;

  }
}
`

