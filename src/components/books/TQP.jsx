import React from 'react';
import "./books.css"; // Ensure the correct path to your CSS file
import TQPF from "../../assets/TQPF.jpg";
import Page1 from "../../assets/TQPP1.jpg";
import Page2 from "../../assets/TQPP2.jpg";
import Flag from "../../assets/Col.png";

export default function TQP() {
    return (
        <div className="parent">
            <div className='port__containerb containerb'>
                <article className='port_itemb'>
                    <div className="port-item-imageb"> {/* Corrected class name */}
                        <img src={TQPF} alt="The Quinceanera Party" />
                    </div>
                    <a className='buy_button' href = 'https://a.co/d/5GLu9wF'>Purchase On Amazon</a>
                </article>
                <article >
                    <div>
                        <h2>The Quinceañera Party</h2>
                        
                        <p className='book-sub'>BOOK 1 IN THE MIRANDA'S TRAVEL ADVENTURE'S SERIES</p>
                        <p className='para'>
                        Miranda finds herself dreaming about Colombia, a country in South America. In her dream she is mistaken for one of the guests and is led into a Quinceañera party which is a fifteenth birthday celebration. As she starts to make new friends, she realizes that one of them is a mischievous trouble-maker who almost ruins the party. 

    Things get more complicated when a valuable piece of jewelry mysteriously disappears and Miranda becomes a suspect. Her limited Spanish increases her fear of not being able to prove that she is innocent. She tries to defend herself, but everything seems to work against her. 

    In spite of all the drama, Miranda is able to learn about the city of Cartagena, the Gold Museum in Bogotá, and about some of the festivals and traditions in that country. She learns about Colombia’s diversity and the contributions of their indigenous people, and black population, as well as the country’s role in freeing most of Latin America from Spain.
    Join Miranda as she makes friends, and experiences mystery and adventure in Colombia! 

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
    );
}