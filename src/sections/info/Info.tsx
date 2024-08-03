import "./info.scss";

function Info() {
	return (
		<section
			id='info-section'
			className='info'>
			<h1 className='infor__header heading--1'>Info</h1>
			<div className='info__container'>
				<img
					src='/TCR-PRE-SEASON.png'
					alt='Pre-season Testing Info'
					className='info_image'
				/>
				<img
					src='/TCR-Teamate-selection.png'
					alt='Pre-season Testing Info'
					className='info_image'
				/>
				<img
					src='/TCR-Grand-Prix.png'
					alt='Pre-season Testing Info'
					className='info_image'
				/>
				<img
					src='/TCR-Feature.png'
					alt='Pre-season Testing Info'
					className='info_image'
				/>
			</div>
		</section>
	);
}

export default Info;
