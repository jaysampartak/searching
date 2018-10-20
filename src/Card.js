import React from "react"


const Card =({username,email,id,name,click})=>
{

	

        return( <div className="tc bg-red dib br3 pa3 ma2 grow bw2 w6 shadow=5" onClick={click}>
        	     <img alt =" mewww" src={`https://robohash.org/${id}?set=set4&&size=200x200`}/>
        	     <h1> {username}</h1>
        	     <p>{name}</p>
        	     <p>{email}</p>

  				</div>
        	); 


	
}


export default Card;