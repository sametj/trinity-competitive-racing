import "./classes.scss";

function Classes() {
	return (
		<section
			id='classes-section'
			className='classes'>
			<h1 className='classes__header heading--1'>Racing Classes</h1>
			<div className='classes__card-container'>
				<div className='classes__card'>
					<img
						src='/F124.webp'
						alt=''
						className='classes__card-image'
					/>
					<h3 className='classes__card-title'>Challenger Class</h3>
					<div className='classes__card-desc'>
						<span>Monday's @ 8pm</span>
						<span>Racing line only</span>
					</div>
				</div>
				<div className='classes__card'>
					<img
						src='/F124.webp'
						alt=''
						className='classes__card-image'
					/>
					<h3 className='classes__card-title'>Elite Class</h3>
					<div className='classes__card-desc'>
						<span>Tuesday's @ 8pm</span>
						<span>Racing line only</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Classes;
