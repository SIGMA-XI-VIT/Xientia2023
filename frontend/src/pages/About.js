import React from "react";
import "../styles/about.scss";

const About = (props) => {
  return (
    <>
      <div className="aboutcontainer">
        <div class="aboutus">
          <div className="heading">
            <h1 id="event">ABOUT XIENTIA</h1>
          </div>

          <div className="aboutusmain">
              <p className="para1">
                Sigma-Xi presents Xientia - a symposium on the increasingly
                relevant importance of Technology in Sustainability. The event
                features 4 esteemed speakers, who are well-versed in diverse
                research domains concerned with Environmental Health and
                Sustainable Development. Deliberation will be held among the
                speakers, enlightening the audience about the effects of
                pollution on health and the environment, and ways to achieve
                sustainability.
              </p>
              <p className="para2">
                We are also conducting an exciting Ideathon on Development for
                Sustainability. Participants of the Ideathon will be able to
                showcase their resolve to tackle this global issue by coming up
                with sustainability models and stand a chance to win from a
                prize pool of Rs 15000.
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default About;
