import React from "react";
import "./about.css";

const AboutUs = () => {
  return (
    <div className="about">
      <main className="about-section">
        <div className="about-section-content">
          <h3 className="sup-title">an oasis of pleasure</h3>
          <h1 className="about-section-title">Welcome to F-Order App 🙏</h1>
          <p className="about-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
            quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
            quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
            quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
          </p>
          <a href="#about-us" className="secondary-btn">
            Discover more
          </a>
        </div>
      </main>
      <section id="about-us" className="light-body">
        <div className="container js-scroll fade-in-bottom">
          <div className="about-us-head">
            <h2 className="section-title">About Us</h2>
            <h4 className="section-sub">
              since 1999
              <div className="dot"></div>
            </h4>
          </div>
          <div className="about-us-content">
            <div className="about-us-text">
              <p className="sm-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                Quisquam, quae. Quisquam, quae. Quisquam, quae.
              </p>
              <p className="sm-text paragraph">- Unknown</p>
              <p className="sm-text paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                Quisquam, quae. Quisquam, quae. Quisquam, quae.
              </p>
              <p className="sm-text paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Quia illo,
                aperiam id doloremque tempore iusto ducimus possimus a qui
                autem. Iste, reprehenderit! Magni saepe, cum molestias accusamus
                earum repudiandae ratione?
              </p>
            </div>

            <div className="about-us-image">
              <div className="about-us-image-1">
                <img
                  src="https://images.unsplash.com/photo-1618066296858-2046a4a39c25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMG9yZGVyaW5nfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
              </div>
              <div className=" about-us-image-2">
                <img
                  src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZvb2QlMjBvcmRlcnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" about-us-content-bottom">
            <p className="sm-text paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              ipsam deleniti quia eos earum ut quaerat pariatur mollitia aperiam
              consectetur. Fugit aliquam velit maxime laborum non numquam quia
              temporibus alias! Available at these{" "}
              <a href="#our-locations">more</a> locations. Come and visit us
              today!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
