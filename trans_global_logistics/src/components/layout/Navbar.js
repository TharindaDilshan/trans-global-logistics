import React from 'react'
import SignedOutLinks from './SignedOutLinks'

// Navbar is selected based on the user type of the user logged in 
const Navbar = (props) => {

    const links = <SignedOutLinks/> 
    return(
        <div>
            {links}
        </div>
    )
}

export default Navbar;