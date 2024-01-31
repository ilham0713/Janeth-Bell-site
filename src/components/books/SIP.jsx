import React from 'react'
import "./books.css"
import SIPF from "../../assets/SIP.png";
import Flag from "../../assets/PR.png";
import Page1 from "../../assets/SIPP1.jpg";
import Page2 from "../../assets/SIPP2.jpg";

export default function SIP() {
    return (
        <div className="parent">
            <div className='port__containerb containerb'>
                <article className='port_itemb'>
                    <div className="port-item-imageb"> {/* Corrected class name */}
                        <img src={SIPF} alt="Salsa in Puerto Rico" />
                    </div>
                    <a className='buy_button' href = 'https://a.co/d/en72w05'>Purchase On Amazon</a>
                </article>
                <article>
                    <div className="port-item-content"> {/* You might need an additional container for content */}
                    
                        <h2>Salsa in Puerto Rico</h2>
                        <p className='book-sub'>BOOK 3 IN THE MIRANDA'S TRAVEL ADVENTURE'S SERIES</p>
                        <p className='para'>
                        Miranda is in the Caribbean on the island of Puerto Rico. Just as she starts to get comfortable making friends, she is faced with a direct challenge. She is attacked by a bully. Miranda is forced to look for help from people she doesn’t know, in a language that is foreign to her. Although the bully leaves her, he returns later to torment her and her friends! How can she save herself? Can her friends even save themselves?

    But wait, that’s not the only bully Miranda meets. In Puerto Rico, Miranda learns about nature’s bully when her friends describe the force of hurricanes that frequently attack that island. 

    In the pages of this book, she has fun learning about the flavors of salsa, the sauce and the origins of Salsa, the dance. She gets excited about the history of the island and its diversity. She doesn’t want to ever leave Puerto Rico!

    Join Miranda as she experiences her first Caribbean adventure on the island of Puerto Rico! Look for this book on Amazon.


                        </p>
                        <img className = "flag-pic" src={Flag} alt="The Quinceanera Party" />
                    </div>
                </article>
            </div>
            <div className='excerpt'>
                <h2 className='sneak'>Sneak Peak</h2>
                <div className='pages'>
                    <img className = "page" src={Page1} alt="The Quinceanera Party" />
                    <img className = "page" src={Page2} alt="The Quinceanera Party" />
                </div>
            </div>

        </div>
        
    )
}