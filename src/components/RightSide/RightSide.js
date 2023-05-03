import React from 'react';

const RightSide = () => {
  return (
    <div className="resume_right">
      <div className="resume_item resume_namerole">
        <div className="name">Andrii Pinchuk</div>
        <div className="role">Front-end Developer</div>
      </div>
      <div className="resume_item resume_education">
        <div className="resume_title__letter" data-letter="E">
          Education
        </div>
        <div className="resume_info">
          <div className="resume_data">
            <div className="year">2010 - 2014</div>
            <div className="content">
              <p>
                <b>Kyiv National Economic University named after Vadym Hetman</b>
              </p>
              <p>Degree and major: MS, Economic</p>
            </div>
          </div>
          <div className="resume_data">
            <div className="year">2022 - 2023</div>
            <div className="content">
              <p>
                <b>GoIT courses</b>
              </p>
              <p>FullStack Developer</p>
            </div>
          </div>
          <div className="resume_data">
            <div className="year">2022 - 2023</div>
            <div className="content">
              <p>
                <b>RoboDreams</b>
              </p>
              <p>Front-end Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="resume_item resume_experience">
        <div className="resume_title__letter" data-letter="X">
          Experience
        </div>
        <div className="resume_info">
          <div className="resume_data">
            <div className="year">2017 - 2022</div>
            <div className="content">
              <p>
                <a href="https://zabobon.com.ua" target="_blank" rel="noreferrer">
                  <b>Zabobon shop</b>
                </a>
              </p>
              <p>Project/Role description: cooperated with Rozetka, Allo, epicentr</p>
            </div>
          </div>
          <div className="resume_data">
            <div className="year">2018 - 2023</div>

            <div className="content">
              <p>
                <a href="https://pulthouse.com.ua" target="_blank" rel="noreferrer">
                  <b>Pulthouse</b>
                </a>
              </p>
              <p>
                Project/Role description: complete a lot of complicated workwith import remote
                controllers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="resume_item resmue_interests">
        <div className="resume_title__letter" data-letter="I">
          Interests
        </div>
        <div className="resume_info">
          <div className="interests">
            <div className="int_icon">
              <i className="fas fa-volleyball-ball"></i>
            </div>
            <div className="int_data">Volleyball</div>
          </div>
          <div className="interests">
            <div className="int_icon">
              <i className="fas fa-book-open"></i>
            </div>
            <div className="int_data">Reading</div>
          </div>
          <div className="interests">
            <div className="int_icon">
              <i className="fas fa-film"></i>
            </div>
            <div className="int_data">Movies</div>
          </div>
          <div className="interests">
            <div className="int_icon">
              <i className="fas fa-biking"></i>
            </div>
            <div className="int_data">Riding</div>
          </div>
        </div>
      </div>
      <div className="projects resume_item">
        <div className="resume_title__letter" data-letter="P">
          My Projects
        </div>
        <ul className="projects_list"></ul>
      </div>
    </div>
  );
};

export default RightSide;
