import React from "react";
import Banner from "../assets/images/Frame 1000002533.png";

const Aboutus = () => {
  return (
    <div>
      <section className="about-banner">
        <h1>Connecting people through unforgettable experiences</h1>
        <p>
          We empower you to discover, manage, and share events that ignite your
          passions.
        </p>
        <img src={Banner} alt="banner" />
      </section>

      <section className="story">
        <h2>Our Story</h2>
        <p>
          Immerse yourself in our vibrant event community! Connect, Discover,
          Share: Join our vibrant event community and find fellow enthusiasts,
          insightful tips, and a space to share your unforgettable experiences.
          Explore a diverse tapestry of events, ignite your passions with music
          festivals and insightful workshops, and broaden your horizons through
          captivating experiences. Engage in meaningful conversations, share
          your unforgettable moments, and learn from the diverse perspectives of
          fellow enthusiasts.
        </p>
      </section>

      <section className="team">
        <h2>Our Team</h2>
      </section>
    </div>
  );
};

export default Aboutus;
