import React, { useContext } from 'react';
import { ThemeContext } from '../../lib/Theme/ThemeContext';

 
export const  Navbar = () => {
	const context = useContext(ThemeContext);
	console.log({context})
	return <header>
	<button className="btn btn-default" onClick={context.toggleTheme}>Toggle Theme</button>
	<p>Here comes navbar</p>
	</header>;
}
