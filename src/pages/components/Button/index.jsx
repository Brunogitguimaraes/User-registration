import PropTypes from "prop-types"

import {Button} from "./styles"

function DefaultButton({children, theme, ...props}){

    return(
        <Button {...props}>{children}</Button>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string,

}


export default DefaultButton