import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Projects from './Projects';
import Contact from './Contact';
import Hello from './Hello';

class Menu extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<ul id='menu'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/projects'>Projects</Link>
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>

					<Switch>
						<Route exact path='/' component={Hello} />
						<Route path='/projects' component={Projects} />
						<Route path='/contact' component={Contact} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default Menu;
