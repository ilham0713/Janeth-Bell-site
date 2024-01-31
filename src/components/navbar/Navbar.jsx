import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
            
        <nav className = 'nav'>
            <h2 className = "site-title ltpurple">
                Janeth Bell
            </h2>
            <ul>
                <li>
                    <a className = "orange" href = "/Home">Home</a>
                </li>
                <li>
                    <a className = "pink" href = "/Team">About</a>
                </li>
                <li>
                    <a className = "blue" href = "/MyBooks">Books</a>
                </li>
                
               <li>
                    <a className = "green" href = "/Activities">Activities</a>
                </li>
                {/* <li>
                    <a href = "/Traveling">Traveling</a>
                </li>  */}
            </ul>
        </nav>
    )
}



export default Navbar
