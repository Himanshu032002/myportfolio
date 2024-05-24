import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="info-item">
          <h4>Address:</h4>
          <p>B34, 2nd Rajnagar, Jawalapur, Haridwar, Uttarakhand</p>
        </div>
        <div className="info-item">
          <h4>Phone:</h4>
          <p>8859890984 (Personal), 7253826165 (Emergency)</p>
        </div>
        <div className="info-item">
          <h4>Email:</h4>
          <p><a href="mailto:chauhanji8859@gmail.com">chauhanji8859@gmail.com</a> (Personal), <a href="mailto:himanshu.chauhan@nihilent.com">himanshu.chauhan@nihilent.com</a> (Work)</p>
        </div>
        <div className="info-item">
          <h4>Social Media:</h4>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/himanshu-chauhan">himanshu-chauhan</a></p>
          <p>Twitter: <a href="https://twitter.com/himansh23477612">himanshu-chauhan</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
