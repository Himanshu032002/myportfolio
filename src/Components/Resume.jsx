import React from 'react';

const Resume = () => {
  const publicUrl = process.env.PUBLIC_URL;
  const cvPath = 'Himanshu_chauhan_CV.docx';
  const githubLink = 'https://github.com/yourusername';
  const projectLink = 'https://example.com';

  return (
    <div className="resume-container">
      <h1 className="resume-title">Download Resume</h1>
      <p className="resume-description">Click the button below to download my resume. Learn more about my skills, experience, and qualifications.</p>
      <a className="resume-link" href={`${publicUrl}/${cvPath}`} download>Download CV</a>

   

      <h2 className="github-title">GitHub</h2>
      <p className="github-description">Check out my GitHub profile to see more of my projects and contributions to open-source.</p>
      <a className="github-link" href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
    </div>
  );
}

export default Resume;
