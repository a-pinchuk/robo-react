import React, { useState } from 'react';
import Job from '../Job/Job';
import JobForm from '../JobForm/JobForm';

const JobsList = () => {
  const [jobs, setJobs] = useState([]);

  const addJob = job => {
    setJobs([...jobs, job]);
  };

  return (
    <>
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
      <div>
        {jobs.map((job, index) => (
          <Job
            key={index}
            title={job.title}
            description={job.description}
            name={job.name}
            link={job.link}
            year={job.year}
          />
        ))}
        <JobForm onSubmit={addJob} />
      </div>
    </>
  );
};

export default JobsList;
