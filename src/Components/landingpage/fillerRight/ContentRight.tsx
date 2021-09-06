import React from "react";
import lifting from "./lifting.jpg";
import './ContentRight.css'

class ContentRight extends React.Component{


    render(){
        return (
            <div id="content-right-all-div">
                <div id="hero-div">
                    <img id="hero-img" src={lifting} alt="" />
                    <p id="quote-text">"I need to get extremely good at quickly lifting shit from the ground
                        or else they'll think I'm a loser"</p>
                    <p id="quote-author">Bernhard Black</p>
                </div>
                <div id="landingpage-button-div">
                    <div>
                        <button id="content-button-one" className="content-right-buttons">Wanna know how fit you are? Take the test!</button>
                    </div>
                    <div id="button-two">
                        <button id="content-button-two" className="content-right-buttons">Wanna play some games? Follow me!</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ContentRight;