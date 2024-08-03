import "./layout.scss";

function Navbar() {
	return (
		<nav className='nav-bar'>
			<div className='nav-bar__container'>
				<div className='nav-bar__items'>
					<a
						id='#home-section'
						className='nav-bar__link'>
						Home
					</a>
					<a
						id='#about-section'
						className='nav-bar__link'>
						About
					</a>
					<a
						id='#classes-section'
						className='nav-bar__link'>
						Classes
					</a>
					<a
						id='#schedule-section'
						className='nav-bar__link'>
						Schedule
					</a>
					<a
						id='#info-section'
						className='nav-bar__link'>
						Info
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
