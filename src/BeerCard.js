import React from "react";

function BeerCard(props){
    return(
        <li style ={{ listStyle: "none"}}>
            <img  src={props.image_url} alt="Beer is Life" />
            
              
            
            <p> <h3>{props.name} <span id="abv">{props.abv} abv</span> </h3>{props.description} <h4>{props.tagline} <br></br><br></br><span id="ano">First Brewed<br></br>{props.first_brewed}</span> </h4></p>
            
        </li>
    )
}

export default BeerCard