import React from "react"
//import "./flex.css"
import Card from "./Card.js"



const CardArray =({people,click})=>{

  const Array=people.map((user,i)=>{return   (
 
<Card  		key={people[i].id }
			id={people[i].id} 
			name={people[i].name} 
			username={people[i].username} 
			email={people[i].email}
            click={click}

            />
 );})

 
 return(
 <div id="pinku">
 {Array}
 </div>
 );

}


export default CardArray;
