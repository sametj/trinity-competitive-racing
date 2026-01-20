import video from "@/assets/video/Podcast Intro-compressed.mp4";
import "./home.scss";

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
            Registration for TCR season is open!
          </h2>
          <span className="home__motto">Unlock your racing potential!</span>
          <div className="home__btn-container">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfd90MaJkjg_vPKq9r0WXQZBBZpoD57-bBzvbuZ0vPvcLi7Ow/viewform"
              className="btn sign-up-btn btn-primary"
            >
              Sign up
            </a>
            <a
              id="#schedule-section"
              className="btn schedule-btn btn-secondary"
            >
              Schedule
            </a>
            <a
              target="_blank"
              href="https://evo9x.gg/collections/tcr"
              className="btn btn-secondary"
            >
              Shop
            </a>
            <div />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
