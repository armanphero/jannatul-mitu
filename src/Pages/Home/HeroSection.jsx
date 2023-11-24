export default function HeroSection() {
  return (
    <section className="hero-container">
      <div id="heroSection" className="hero--section content-container">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="unlock-text">Unlock Strategic Marketing with marketer Mitu</p>
            <h2 className="">Hi, I'm Jannatul Mitu</h2>
            {/* <h3></h3> */}
            <h4>A Digital Marketing Strategist . Welcome to the hub of digital innovation!</h4>
            <p>Ready to take your brand to new heights?  From engaging Facebook and Instagram ad campaigns that captivate your audience to optimizing YouTube channels for maximum visibility, and implementing data-driven Google marketing solutions - I'm here to elevate your brand's digital presence.</p>
            {/* <p>I specialize in creating impactful digital experiences through tailored strategies. From engaging Facebook and Instagram ad campaigns that captivate your audience to optimizing YouTube channels for maximum visibility, and implementing data-driven Google marketing solutions - I'm here to elevate your brand's digital presence.
              Ready to take your brand to new heights? Explore my portfolio to see how I've transformed businesses through effective digital marketing strategies. Let's discuss your next campaign or project.</p> */}

            {/* <p className="section--title">Hey, I'm John</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <br /> Dolorum, quas. Amet soluta assumenda cum?
            </p> */}
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <div className="hero-img-container">
            <img src="./img/portrait-teenager-girl-blue-sweater-standing-smiling-happily2.jpg" alt="Hero Section" />
            <div className="hero-element-1">
              <p className="hero-element-title">3</p><p className="hero-element-text">Years + experience</p>
            </div>
            <div className="hero-element-2">
              <img src="./img/social-media.png" alt="" />
            </div>
            <div className="hero-element-3">
              <p className="hero-element-title">100+</p><p className="hero-element-text"><span>Projects </span> <span>Completed</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}