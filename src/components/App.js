import React, { useEffect } from 'react';
import { GitHubAPI } from '../api/fetchRepo';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import './App.css';

const App = () => {
  const imagePath = '/img/photo_car.jpg';

  useEffect(() => {
    const token = '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';
    const username = 'a-pinchuk';
    const gitHubAPI = new GitHubAPI(token, username);

    gitHubAPI
      .getRepos()
      .then(repos => {
        const markup = repos
          .slice(0, 10)
          .map(el => {
            return (
              '<li>' +
              '<a href=' +
              el.owner.html_url +
              '>' +
              el.full_name +
              '</a>' +
              (el.description ? '<p>' + el.description + '</p>' : '') +
              '</li>'
            );
          })
          .join('');

        document.querySelector('.projects_list').insertAdjacentHTML('beforeend', markup);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="resume_wrapper">
      <LeftSide avatar={imagePath} />
      <RightSide />
    </div>
  );
};

export default App;
