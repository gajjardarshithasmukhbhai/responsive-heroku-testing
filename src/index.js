import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
class Darshit extends React.Component{
	render()
	{
		return(
			<div>
				<div class="jumbotron gf">
					<h1 align="center " class="text-danger">gajjar darshit hasmukhbhai</h1>
				</div>
			</div>
			);
	}
}
class About extends React.Component{
	render()
	{
		return(
			<div>
				<h2>About</h2>
			</div>
			);
	}
}
ReactDOM.render(<Darshit/>,document.getElementById("root"))