import "./activities.css";
import Ac1 from "../../assets/A1.pdf";
import Ac2 from "../../assets/A2.pdf";
import Ac3 from "../../assets/A3.pdf";
import Ac4 from "../../assets/A4.pdf";
import Ac5 from "../../assets/A5.pdf";
import Ac6 from "../../assets/A6.pdf";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Activities() {
    return (
        <div className="activity-page-container">
            <h2 className="page-title">Activities Page</h2>
            <p className="active-desc">Miranda's Fun Spot! Check out some of the exciting activities as seen in the series!</p>
            <div className="active-container">
                <a href={Ac1} className="activity"> 
                    <p className="activity-title bgltblue">
                        <MdOutlineFileDownload/>
                        Piña Colada Drink
                        </p> 
                    <p className="activity-body bgblue">This activity is making a smoothie at home, it is from book 3 chapter blank</p>
                </a>
                <a href={Ac2} className="activity"> 
                    <p className="activity-title bgltpurple">
                        <MdOutlineFileDownload/>
                        Character Comparison 
                        </p> 
                    <p className="activity-body bgpurple">Compares characters and shows reading comprehension.  Book 1</p>
                </a>
                <a href={Ac3} className="activity"> 
                    <p className="activity-title bgltpurple">
                        <MdOutlineFileDownload/>
                        Paperbag Pinata
                        </p> 
                    <p className="activity-body bgpurple">Arts and craft activity using simple things.  Book 1</p>
                </a>
                <a href={Ac4} className="activity"> 
                    <p className="activity-title bgltblue">
                        <MdOutlineFileDownload/>
                        Spanish Word Recognition
                        </p> 
                    <p className="activity-body bgblue">Test your spanish knowledge as you continue to read the series.</p>
                </a>
                <a href={Ac5} className="activity "> 
                    <p className="activity-title bgltblue">
                        <MdOutlineFileDownload/>
                        Coconut Lemonade Drink
                        </p> 
                    <p className="activity-body bgblue">Make a Coconut Lemonade drink at home!</p>
                </a>
                <a href={Ac6} className="activity"> 
                    <p className="activity-title bgltpurple">
                        <MdOutlineFileDownload/>
                        Learn to Dance Salsa
                        </p> 
                    <p className="activity-body bgpurple">A quick step by step instruction on how to dance the Salsa</p>
                </a>
                
            </div>

        </div>
    )
}

// frank was here :3