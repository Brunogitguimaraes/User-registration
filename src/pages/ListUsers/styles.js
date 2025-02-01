
import styled from "styled-components";


export const TopBackground = styled.div`
background: rgb(85,63,251);
background: linear-gradient(90deg, rgba(85,63,251,1) 0%, rgba(255,255,255,1) 100%);
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
}
`
export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    

`

export const Title = styled.h2`
    color: #5F9EA0;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    margin-top: 30px;
`
export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 40px 0;
  


    @media (max-width: 820px){
        grid-template-columns: 1fr;
    }
    @media(min-width: 750px){
      grid-template-columns: 1fr 1fr;
    }

    @media(min-width: auto){
      width: 400vw;
    }
        
    
`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 500px;

    h3{
        color: #fff;
        font-size: 24px;
        text-transform: capitalize;
    }

    p{
        color: #fff;
        font-size: 12px;
        font-weight:200;
    }
   
`

export const TrashIcon = styled.img`
    cursor: pointer;
    
  
    &:hover {
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`

export const AvatarUser = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
`;


export const EditIcon = styled.img`
    cursor: pointer;
    height: 25px;

    &:hover {
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`

 export const  ContainerForm = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2F4F4F;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 90%;
    max-width: 400px;
    max-height: 90vh; /* Altura máxima */
    overflow-y: auto; /* Rolagem caso o conteúdo ultrapasse o limite */
    z-index: 1000;


  h2{
    font-size: 1.5rem;
    color: #D2691E;
    margin-bottom: 20px;
  }

  label{
    display: block;
    font-size: 0.9rem;
    color: #D2691E;
    margin: 10px 0 5px;
  }
  input{
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    border: solid;
    margin-bottom: 10px;
  }
  button{
    width: calc(50% - 5px);
    padding: 10px;
    font-size: 1rem;
    min-width: 50%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    border: solid;
  }

  button:hover{
    opacity: 0.6;
  }

  button:active{
    background-color: #0056b3;
  }
`


