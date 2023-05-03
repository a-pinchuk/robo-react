import React from 'react';

const LeftSide = ({ avatar }) => {
  return (
    <div className="resume_left">
      <div className="resume_image">
        <img src={avatar} alt="Resume_image" />
      </div>
      <div className="resume_bottom">
        <div className="resume_item resume_namerole">
          <div className="name">Andrii Pinchuk</div>
          <div className="role">Front-end Developer</div>
        </div>
        <div className="resume_item resume_profile">
          <div className="resume_title">Summery</div>
          <div className="resume_info">
            As a Full Stack Developer, I have gained extensive experience in designing and
            developing web applications using various technologies such as HTML, CSS, JavaScript,
            React, and Node.js. I am also proficient in database management using SQL, MongoDB, and
            Firebase. My experience in building applications from scratch and maintaining them
            throughout their lifecycle has given me a solid foundation in software development best
            practices.
          </div>
        </div>
        <div className="resume_item resume_address">
          <div className="resume_title">Address</div>
          <div className="resume_info">
            avenue Obolonskiy,
            <br />
            Kyiv, Ukraine
          </div>
        </div>
        <div className="resume_item resume_contact">
          <div className="resume_title">Contact</div>
          <div className="resume_info">
            <div className="resume_subtitle">Phone</div>
            <div className="resume_subinfo">+380737770377</div>
          </div>
          <div className="resume_info">
            <div className="resume_subtitle">Email</div>
            <div className="resume_subinfo">a.pinchuk@gonnagoods.com</div>
          </div>
        </div>
        <div className="resume_item resume_skills">
          <div className="resume_title">Skills</div>
          <div className="resume_info">
            <div className="skills_list">
              <div className="skills_left">HTML</div>
              <div className="skills_bar">
                <p>
                  <span style={{ width: '90%' }}></span>
                </p>
              </div>
            </div>
            <div className="skills_list">
              <div className="skills_left">CSS</div>
              <div className="skills_bar">
                <p>
                  <span style={{ width: '80%' }}></span>
                </p>
              </div>
            </div>
            <div className="skills_list">
              <div className="skills_left">Javascript</div>
              <div className="skills_bar">
                <p>
                  <span style={{ width: '70%' }}></span>
                </p>
              </div>
            </div>
            <div className="skills_list">
              <div className="skills_left">React</div>
              <div className="skills_bar">
                <p>
                  <span style={{ width: '65%' }}></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
