

import styled from "styled-components";


export const Button = styled.button`
border: ${(props) => (props.theme === "primary" ? "none" : "1px solid #fff")};
border-radius: 30px;
background-color: ${(props) => (props.theme === "primary" ? " #1E90FF" : "transparent")};
       
cursor: pointer;
padding: 16px 32px;
color: #fff;
font-size: 15px; 
font-weight: 200;


&:hover{
    opacity: 0.8;
    background-color: blue;
}


&:active{
    opacity: 0.5;
}

@media (min-width: 350px){
    margin-bottom: 10px;
}
`