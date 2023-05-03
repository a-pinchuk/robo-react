import Counter from '../Counter/Counter';
import Job from '../Job/Job';
import JobsList from '../JobList/JobList';

const Experience = () => {
  return (
    <>
      <Job
        title={'CEO'}
        description={'Project/Role description: cooperated with Rozetka, Allo, epicentr'}
        name={'Zabobon shop'}
        link={'https://zabobon.com.ua'}
      />
      <JobsList />
      <Counter />
    </>
  );
};

export default Experience;
