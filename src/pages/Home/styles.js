import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    109deg,
    rgba(10, 12, 16, 0.99) 15%,
    rgba(10, 12, 16, 0.7) 50%,
    rgba(10, 12, 16, 0.99) 85%
  );
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  height: 100vh;

`;

export const Title = styled.h1`
  color: #5f9ea0;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;

`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: -50px;
  max-width: 500px;
  flex-wrap: wrap;

  @media (max-width: 750px){
    width: 90vw;
    display: block;
    margin-bottom: 1px;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

`;

export const ContainerInputs2 = styled.div`
  width: 490px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #d2dae2;
  background-color: #fff;
  padding: 12px 20px;
  width: 100%;
  margin-bottom: 35px;

  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

export const InputLabel = styled.label`
  color: #fff;
  font-size: 12px;
  font-weight: 500;

  span {
    color: #ef4f45;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    width: 100vw;
  }
`;
