import React from 'react';
import { Link } from "react-router-dom";
import "../styles/navbar.css"

function Navbar() {

	return (
		<header>
			<nav>
				<div className='navlinks'>
					<Link to="/"> About </Link>
					<Link to="/about"> Experience </Link>
					<Link to="/contact"> Contact </Link>
				</div>
			</nav>
		</header>
	);
}

export default Navbar