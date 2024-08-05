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
					<div className='classes__card-content'>
						<h3 className='classes__card-title'>F1 Series</h3>
						<div className='classes__card-desc'>
							<span>Tuesday's @ 8:45pm ET</span>
							<span>Manual Gears</span>
							<span>No Traction Control</span>
							<span>ABS Allowed</span>
							<span>Racing Line allowed</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Classes;
