import { Background } from "./styles";

import usersImage from "../../../assets/users.png";


function TopBackground(){
    return(
        <Background>
            <img src={usersImage} alt="imagem-usuarios" />
        </Background>
    )
}


export default TopBackground