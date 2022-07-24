import React from "react";


function BeerCard(props){
    return(
        <li style ={{ listStyle: "none"}}>
            <img  src={props.image_url} alt="Beer is Life" />
            <div class="para"> <h3>{props.name} <span id="abv">{props.abv} abv</span> </h3><span id="desc">{props.description}</span>
            <h4>{props.tagline} <br></br><br></br>
            <span id="ano">First Brewed<br></br>{props.first_brewed}</span> </h4></div>
            <button class="ori">❤ </button>
        </li>
    )
}
 //ask teacher why works sometimes
 //idk how to do the like buttom to "like"

 
// let btn = document.querySelector('button');
// let classObj = {
//   ori: 'large',
//   large: 'ori'
// }

// btn.addEventListener('click', ()=>{
//   btn.classList = classObj[btn.classList[0]];

// });

export default BeerCard