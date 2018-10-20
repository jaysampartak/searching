import React from "react"


const Scroll=(props)=>
{
    return (

    	<div /*class="overflow-scroll bt bw3"*/ style={{overflow: "scroll", height:"650px"}}> 	
    	{props.children}





    	</div>



    	);
   
}

export default Scroll;