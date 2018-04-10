import React from 'react';
import Search from './Search';

class NavBar extends React.Component {
	render() {
		return (
			<div>
				<div className="navbar">
					<Search />
				</div>
			</div>
		)
	}
}

export default NavBar;
