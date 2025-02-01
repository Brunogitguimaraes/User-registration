
import { useEffect, useState } from "react"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"

import Button from "../components/Button"
import TopBackground from "../components/TopBackground"
import Trash from "../../assets/trash.svg"
import Edit from "../../assets/edit.svg"
import { AvatarUser, CardUsers, Container, ContainerForm, ContainerUsers, EditIcon, Title, TrashIcon } from "./styles"


function ListUsers() {

    const [users, setUsers] = useState([])
    const [editUser, setEditUser] = useState(null);
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const navigateSecundario = useNavigate()


    useEffect(() => {
        async function getUsers() {

            try {

                const { data } = await api.get("/usuarios");
                setUsers(data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
                alert("Erro ao carregar a lista de usuários.");
            }
        }
        getUsers()
    }, [])

    async function closeEditModal() {
        setEditUser(null);
        setNewName("");
        setNewAge("");
        setNewEmail("");
    }

    async function deleteUsers(id) {
        try {
            await api.delete(`/usuarios/${id}`);
            const updatedUsers = users.filter(user => user.id !== id);
            setUsers(updatedUsers);
        } catch (error) {
            console.error("Erro ao deletar usuário:", error);
            alert("Erro ao deletar usuário. Tente novamente.");
        }
    }

    function openEditModal(user) {

        setEditUser(user); // Configura o usuário em edição
        setNewName(user.name);
        setNewAge(user.age);
        setNewEmail(user.email)
    }


    async function saveEditUser() {
        try {
        
            const updatedUser = {
                name: newName,
                age: parseInt(newAge),
                email: newEmail,
            };



            await api.put(`/usuarios/${editUser.id}`, updatedUser);


            // Atualiza a lista de usuários no estado
            const updatedUsers = users.map(user =>
                user.id === editUser.id ? { ...user, ...updatedUser } : user
            );
            setUsers(updatedUsers);

            closeEditModal();

            alert("Usuário atualizado com sucesso!");


        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            alert("Erro ao atualizar usuário. Tente novamente.");
        }
    }

    return (
        <Container>
            <TopBackground />

            <Title>User List</Title>

            <ContainerUsers>

                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div >
                            <h3>{user.name}</h3>
                            <p><strong>Age:</strong> {user.age}</p>
                            <p><strong>E-mail:</strong> {user.email}</p>

                        </div>
                        <TrashIcon src={Trash} alt="icon-img" onClick={() => deleteUsers(user.id)} />
                        <EditIcon src={Edit} alt="icon-edit" onClick={() => openEditModal(user)} />
                    </CardUsers>


                ))}
            </ContainerUsers>

            <Button type="button" onClick={() => navigateSecundario("/")}>To go back</Button>
            {/*  Formulário de edição  */}

            {editUser && (
                <ContainerForm className="edit-modal">

                    <h2>Edit User</h2>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <label>Age:</label>
                    <input
                        type="number"
                        value={newAge}
                        onChange={(e) => setNewAge(e.target.value)}
                    />
                    <label>E-mail:</label>
                    <input
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                    />
                    <button onClick={saveEditUser}>Save</button>
                    <button onClick={closeEditModal}>Cancel</button>

                </ContainerForm>
            )}
        </Container>
    );
}

export default ListUsers

// TODA VEZ que a tela carrega, o useEffect é chamado
// TODA VEZ que uma vareavel muda de valor 