import "./layout.scss";
import sprite from "@/assets/sprites.svg";
import logo from "/TCR-blue-outlined-logo.svg";

function Header() {
	return (
		<header className='header date-bg-color=#000000'>
			<object
				className='header__logo'
				data={logo}
			/>
			<div className='header__icons'>
				<a
					href='https://www.facebook.com/eTrinityRacing/'
					target='_blank'
					referrerPolicy='no-referrer'>
					<svg className='icon'>
						<use xlinkHref={sprite + "#icon-facebook"} />
					</svg>
				</a>
				<a
					href='https://twitter.com/eTrinityRacing'
					target='_blank'
					referrerPolicy='no-referrer'>
					<svg className='icon'>
						<use xlinkHref={sprite + "#icon-twitter"} />
					</svg>
				</a>
				<a
					href='https://www.instagram.com/etrinityracing/'
					target='_blank'
					referrerPolicy='no-referrer'>
					<svg className='icon'>
						<use xlinkHref={sprite + "#icon-instagram"} />
					</svg>
				</a>
				<a
					href='https://www.youtube.com/channel/UCofTIpa1AA4Sp_fHU7yG-ug'
					target='_blank'
					referrerPolicy='no-referrer'>
					<svg className='icon'>
						<use xlinkHref={sprite + "#icon-youtube"} />
					</svg>
				</a>
				<a
					href='https://www.twitch.tv/etrinityracing'
					target='_blank'
					referrerPolicy='no-referrer'>
					<svg className='icon'>
						<use xlinkHref={sprite + "#icon-twitch"} />
					</svg>
				</a>
				<a
					href='#'
					target='_blank'
					referrerPolicy='no-referrer'>
					<svg className='icon'>
						<use xlinkHref={sprite + "#icon-discord"} />
					</svg>
				</a>
			</div>
		</header>
	);
}

export default Header;
