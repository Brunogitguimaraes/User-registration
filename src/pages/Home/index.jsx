import { Container, ContainerInputs, ContainerInputs2, Form, Input, InputLabel, Title, } from "./styles";

import { useRef } from 'react';

import { useNavigate } from "react-router-dom";


import api from "./../../services/api"
import Button from "../components/Button";
import TopBackground from "../components/TopBackground";

function Home() {

    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    const navigate = useNavigate()

    async function registerNewUser() {
        await api.post("/usuarios", {
            name: inputName.current.value,
            age: parseInt(inputAge.current.value),
            email: inputEmail.current.value
        })
    }
 
    return (
        <>
            <Container>

                <TopBackground />

                <Title>User Registration</Title>

                <ContainerInputs>

                    <Form>
                        <div>
                            <InputLabel>Name<span> *</span></InputLabel>
                            <Input type="text" placeholder="Username" ref={inputName}></Input>
                        </div>

                        <div>
                            <InputLabel>Age<span> *</span></InputLabel>
                            <Input type="number" placeholder="User age" ref={inputAge}></Input>
                        </div>
                    </Form>
                </ContainerInputs>

                <ContainerInputs2>
                    <InputLabel>E-mail<span> *</span></InputLabel>
                    <Input type="email" placeholder="User email" ref={inputEmail}></Input>
                </ContainerInputs2>

                <Button type="button" onClick={registerNewUser}>Register User</Button>

                <Button type="button" onClick={() => navigate("/lista-de-usuarios")}> Show user list</Button>

            </Container>
        </>
    );
}

export default Home;