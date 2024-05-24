import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-6">
            <img
              src={`${process.env.PUBLIC_URL}/MicrosoftTeams-image (3).png`}
              alt="Profile"
              className="profile-img"
            />
          </div> */}
          <div className="col-lg-6">
            <h2>About Me</h2>
            <p>
              I am a passionate developer with a strong foundation in web technologies. My journey in the world of programming started during my school days, where I developed a keen interest in building things that people can interact with.
            </p>
            <p>
              Graduating from St. Mary Senior Secondary School and later from DIT University, Dehradun, has equipped me with a solid understanding of software development principles and practices. My academic achievements, coupled with real-world projects at Nihilent, have honed my skills in HTML, CSS, JavaScript, .NET, Angular, and React.
            </p>
            <p>
              My approach to coding is not just about writing functional code but also about creating elegant and efficient solutions. I thrive in collaborative environments where ideas are shared, and creativity is encouraged.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, reading tech blogs, or enjoying a game of cricket with friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
