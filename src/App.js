import React,{Component} from "react"
import {people} from "./people.js"
import CardArray from "./CardArray.js"
import SearchBar from "./SearchBar.js"
import Scroll from "./Scroll.js"



class App extends Component 
{ 
	constructor()
	{
		super();

		this.state={

		people:[],
		SearchField:""
	
		}
	}
	

    componentDidMount()
    {fetch("https://jsonplaceholder.typicode.com/users").
    then((users)=>users.json()).
    then((users)=>{this.setstate({people:users})});

    }


	onSearchChange=(event)=>
	{ this.setState({SearchField:event.target.value})
	     
	}


    show(event){
    	console.log(event);
    }


    componentDidMount()
    {    
    	this.setState({people:people});
    }

    render()
        {
        	const filteredCats= this.state.people.filter((cat)=>
	 	{return cat.username.toLowerCase().includes(this.state.SearchField.toLowerCase())
	 	});
		
			return(
			 <div className="tc baskerville">
			 <h1>Meowwww</h1>
			 <SearchBar  Search ={this.onSearchChange} />
			  
			 <Scroll>
			  <CardArray click={this.show} people={filteredCats}/>
		      </Scroll>

		     </div>
		     );
    	}


} 



export default App;