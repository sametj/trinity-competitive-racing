import "./home.scss";
import video from "@/assets/video/Podcast Intro-compressed.mp4";

function Home() {
  return (
    <>
      <div className="bg-video">
        <video className="bg-video__content" muted autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <section id="home-section" className="home">
        <div className="home__content">
          <h1 className="home__heading heading--1">
            Trinity Competitive Racing
          </h1>
          <h2 className="home__sub-heading heading--2">
            Registration for season 18 is open!
          </h2>
          <span className="home__motto">Unlock you racing potential!</span>
          <div className="home__btn-container">
            <button className="btn sign-up-btn btn-primary">Sign up</button>
            <button className="btn schedule-btn btn-secondary">Schedule</button>
            <div />
          </div>
          {/* <div className="video">
            <h1 className="video__header heading--1">
              Check us out on youtube
            </h1>
            <iframe
							className='vid'
							src='https://www.youtube-nocookie.com/embed/3SQlfiQZYdw?si=i_wiiPy_zv7Pm3U0'
							title='YouTube video player'
							frameBorder='0'
						/>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Home;
