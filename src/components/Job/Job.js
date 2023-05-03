import React from 'react';

const Job = ({ title, description, name, link, year }) => {
  return (
    <div className="resume_data">
      <div className="year">{year}</div>

      <div className="content">
        <p>
          <a href={link} target="_blank" rel="noreferrer">
            <b>{name}</b>
          </a>
        </p>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Job;
