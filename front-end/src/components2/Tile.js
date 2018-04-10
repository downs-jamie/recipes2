import React, { Component } from 'react';

class Tile extends Component{



	render(){
		let recipe = this.props.recipe;
		let ingredients = JSON.parse(recipe.ingredients);
		let directions = Object.entries(JSON.parse(recipe.directions));
		let nutrients = Object.entries(JSON.parse(recipe.nutrients));//this returns 
		// array of arrays made up from key/value pairs
		console.log(directions)
		return(
        <div className="mainContainer">
            <div className="element1">
            	<div className="image"><img className="image" src={recipe.image} alt="recipe picture" /></div>
                <div className="title">{recipe.title}---{directions[0]}</div>
                <div className="steps"><h3>{directions[1][0]}s</h3> : {directions[1][1]}</div>
            </div>
        </div>         	
		)
	}
}

export default Tile;

